import React from "react";
import { useWindowBreakpoints } from "./use-window-breakpoints";

export default { title: "UseWindowBreakpoints" };

export const Default = (): any => {
    const ExampleApp = (): any => {
        const { xs, sm, md, lg, xl, xxl, width: windowInnerWidth } = useWindowBreakpoints();
        const activeStyle: any = { fontSize: "1.2rem", fontWeight: "bold" };
        const defaultStyle: any = { opacity: 0.2, fontSize: "0.7rem" };

        return (
            <div>
                <p className="text-center">Window inner width: {windowInnerWidth}px</p>

                <div className="d-flex justify-content-between align-items-center">
                    <p style={xs ? activeStyle : defaultStyle}>Extra small screen</p>
                    <p style={sm ? activeStyle : defaultStyle}>Small screen</p>
                    <p style={md ? activeStyle : defaultStyle}>Medium screen</p>
                    <p style={lg ? activeStyle : defaultStyle}>Large screen</p>
                    <p style={xl ? activeStyle : defaultStyle}>Extra large screen</p>
                    <p style={xxl ? activeStyle : defaultStyle}>Extra extra large screen</p>
                </div>

                <p className="text-center">
                    <i>Resize the window</i>
                </p>
            </div>
        );
    };

    return <ExampleApp />;
};
