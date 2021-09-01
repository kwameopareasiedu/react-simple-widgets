import "./popup-menu.scss";
import React, {
    Children,
    cloneElement,
    CSSProperties,
    MutableRefObject,
    ReactElement,
    useEffect,
    useRef,
    useState
} from "react";
import { PopupMenu as IPopupMenu } from "../../types";

export const PopupMenu = ({ children, className: _className, ...rest }: IPopupMenu): JSX.Element => {
    const UNKNOWN_RIGHT_OFFSET_PERCENTAGE = 0.06;

    const [optionsOpened, setOptionsOpened] = useState(false);
    const [optionsCssProperties, setOptionsCssProperties] = useState<CSSProperties>(null);
    const [triggerButton, optionsMenu] = Children.toArray(children);
    const triggerRef: MutableRefObject<HTMLDivElement> = useRef();
    const optionsRef: MutableRefObject<HTMLDivElement> = useRef();
    const [firstAlignmentPass, setFirstAlignmentPass] = useState(false);

    const toggle = (): void => {
        setOptionsOpened(!optionsOpened);
        // If trigger button originally had an onClick, call it also
        const onClick: Function = (triggerButton as ReactElement).props.onClick;
        if (onClick) onClick();
    };

    const className = (): string => {
        const classes = ["react-simple-widget", "popup-menu"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    const alignOptionsMenu = (): void => {
        const { left: tLeft, right: tRight, bottom: tBottom, top: tTop } = triggerRef.current.getBoundingClientRect();
        const { right: oRight } = optionsRef.current.getBoundingClientRect();

        const heightAboveTrigger = tBottom;
        const heightBelowTrigger = window.innerHeight - tTop;
        const optionsHeight = optionsRef.current.scrollHeight;
        const optionIsTallerThanWindow = optionsHeight > window.innerHeight;
        const displayOptionsBelowTrigger = optionsHeight <= heightBelowTrigger;
        const displayOptionsAboveTrigger = optionsHeight < heightAboveTrigger;
        const optionsIsCutoffAtRight =
            oRight + UNKNOWN_RIGHT_OFFSET_PERCENTAGE * document.body.clientWidth > document.body.clientWidth;
        const optionsTransformOrigin = [0, 0];
        const properties: CSSProperties = {};

        if (optionIsTallerThanWindow) {
            properties.top = 0;
            properties.bottom = 0;
            properties.overflow = "auto";

            if (optionsIsCutoffAtRight) {
                optionsTransformOrigin[0] = 100;
                properties.right = document.body.clientWidth - tRight;
            } else {
                optionsTransformOrigin[0] = 0;
                properties.left = tLeft;
            }
        } else {
            if (optionsIsCutoffAtRight) {
                optionsTransformOrigin[0] = 100;
                properties.right = document.body.clientWidth - tRight;
            } else {
                optionsTransformOrigin[0] = 0;
                properties.left = tLeft;
            }

            if (displayOptionsBelowTrigger) {
                properties.top = tTop;
                optionsTransformOrigin[1] = 0;
            } else if (displayOptionsAboveTrigger) {
                properties.bottom = window.innerHeight - tBottom;
                optionsTransformOrigin[1] = 100;
            }
        }

        properties.transformOrigin = `${optionsTransformOrigin[0]}% ${optionsTransformOrigin[1]}%`;
        setOptionsCssProperties(properties);
    };

    useEffect(() => {
        if (optionsOpened && optionsRef.current) {
            if (!firstAlignmentPass) setFirstAlignmentPass(true);
            alignOptionsMenu();
        } else {
            setOptionsCssProperties(null);
            setFirstAlignmentPass(false);
        }
    }, [optionsOpened]);

    useEffect(() => {
        if (firstAlignmentPass) {
            alignOptionsMenu();
        }
    }, [firstAlignmentPass]);

    return (
        <div {...rest} className={className()}>
            {cloneElement(triggerButton as any, { ref: triggerRef, onClick: toggle })}

            {optionsOpened && <div className="popup-menu-scrim" onClick={toggle} />}

            {optionsOpened && optionsMenu && (
                <div ref={optionsRef} className="popup-menu-options" onClick={toggle} style={optionsCssProperties}>
                    {optionsMenu}
                </div>
            )}
        </div>
    );
};
