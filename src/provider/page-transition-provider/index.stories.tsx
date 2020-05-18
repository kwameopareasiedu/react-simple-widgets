import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PageTransitionView } from "./page-transition-view";
import { PageTransitionProviderContext } from "./context";
import { PageTransitionProvider } from "./provider";
import { Link } from "./page-transition-link";

export default {
    title: "PageTransitionProvider",
    decorators: [
        (storyFn: any) => <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>{storyFn()}</div>,
        (storyFn: any) => <BrowserRouter basename="/iframe.html/">{storyFn()}</BrowserRouter>
    ]
};

export const usage = () => {
    const IndexPage = () => {
        return (
            <div style={{ width: "100vw", height: "100vh", overflow: "auto" }}>
                <div className="container text-center">
                    <h3>Primary page</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                        neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                        eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                    </p>
                    <p>
                        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero,
                        faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
                        felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                        pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                    </p>
                    <p>
                        Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
                        facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
                        Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo.
                        Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
                    </p>
                    <p>
                        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero,
                        faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
                        felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                        pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                    </p>
                    <p>
                        Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
                        facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
                        Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo.
                        Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
                    </p>

                    <Link to="/secondary" className="btn btn-info btn-sm">
                        Transition to new page (This is a link)
                    </Link>
                </div>
            </div>
        );
    };

    const SecondaryPage = () => {
        const { redirect } = useContext(PageTransitionProviderContext);

        return (
            <div style={{ width: "100vw", height: "100vh", overflow: "auto" }}>
                <div className="container text-center">
                    <h3>Secondary page</h3>
                    <p>
                        Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat
                        volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                    </p>

                    <button className="btn btn-secondary btn-sm" onClick={() => redirect("/")}>
                        Back to index (This is a button with onClick)
                    </button>
                </div>
            </div>
        );
    };

    return (
        <PageTransitionProvider>
            <Switch>
                <Route exact path="/">
                    <PageTransitionView>
                        <IndexPage />
                    </PageTransitionView>
                </Route>

                <Route exact path="/secondary">
                    <PageTransitionView>
                        <SecondaryPage />
                    </PageTransitionView>
                </Route>
            </Switch>
        </PageTransitionProvider>
    );
};

// export const useQueryParamsUsage = () => {
//     const QPComponent = () => {
//         const { qp, updateParameter, removeParameter } = useQueryParams();
//
//         useEffect(() => {
//             console.log(qp);
//         }, [qp]);
//
//         return (
//             <div>
//                 <p className="text-center">
//                     Open the console to see the current query URL parameters. <br />
//                     Then click on the buttons below to observe the change
//                 </p>
//
//                 <div className="text-center">
//                     <button
//                         className="btn btn-primary btn-sm"
//                         onClick={() => updateParameter("key1", "value3", { dontAnimate: false, replaceUrl: true })}>
//                         Change parameter &quot;key1&quot; with value &quot;<strong>value3</strong>&quot;
//                     </button>
//                     <span>&nbsp;</span>
//                     <button className="btn btn-primary btn-sm" onClick={() => removeParameter("key1", { dontAnimate: false, replaceUrl: true })}>
//                         Remove parameter &quot;key1&quot; from the URL
//                     </button>
//                 </div>
//             </div>
//         );
//     };
//
//     return (
//         <TransitionProvider>
//             <QPComponent />
//         </TransitionProvider>
//     );
// };
