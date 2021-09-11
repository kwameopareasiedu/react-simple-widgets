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
import { PopupMenu as IPopupMenu, PopupMenuFunctionChild } from "../../../types";

export const PopupMenu = ({ children }: IPopupMenu): JSX.Element => {
    const UNKNOWN_RIGHT_OFFSET_PERCENTAGE = 0.06;

    const [optionsOpened, setOptionsOpened] = useState(false);
    const [optionsCssProperties, setOptionsCssProperties] = useState<CSSProperties>(null);
    const [triggerButton, optionsMenu] = Children.toArray(children);
    const triggerRef: MutableRefObject<HTMLDivElement> = useRef();
    const optionsRef: MutableRefObject<HTMLDivElement> = useRef();
    const [firstAlignmentPass, setFirstAlignmentPass] = useState(false);
    const functionOptionsMenu: PopupMenuFunctionChild =
        Array.isArray(children) && typeof children[1] === "function" ? children[1] : null;

    const toggle = (): void => {
        setOptionsOpened(!optionsOpened);
        // If trigger button originally had an onClick, call it also
        const onClick: Function = (triggerButton as ReactElement).props.onClick;
        if (onClick) onClick();
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
        const onScroll = (): void => {
            setOptionsOpened(false);
        };

        if (optionsOpened) {
            window.addEventListener("scroll", onScroll);
            document.addEventListener("scroll", onScroll);
            document.body.addEventListener("scroll", onScroll);
        }

        return () => {
            window.removeEventListener("scroll", onScroll);
            document.removeEventListener("scroll", onScroll);
            document.body.removeEventListener("scroll", onScroll);
        };
    }, [optionsOpened]);

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
        <React.Fragment>
            {cloneElement(triggerButton as any, { ref: triggerRef, onClick: toggle })}

            {optionsOpened && <div className="popup-menu-scrim" onClick={toggle} />}

            {optionsOpened && (functionOptionsMenu || optionsMenu) && (
                <div
                    ref={optionsRef}
                    className="popup-menu-options"
                    onClick={functionOptionsMenu ? null : toggle}
                    style={optionsCssProperties}>
                    {functionOptionsMenu ? functionOptionsMenu(() => setOptionsOpened(false)) : optionsMenu}
                </div>
            )}
        </React.Fragment>
    );
};
