import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionProviderContext } from "./transition-provider-context";
// import { useQueryParams } from "../../misc/use-query-params";
import { TransitionProvider } from "./transition-provider";
import { TransitionView } from "./transition-view";
import { Link } from "./transition-link";

export default {
    title: "PageTransitionProvider",
    decorators: [(storyFn: any) => <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>{storyFn()}</div>]
};

export const usage = () => {
    const IndexPage = () => {
        return (
            <div id="primary" className="container text-center">
                <h3>Primary page</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
                    aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                    blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                </p>
                <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                    adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
                    volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
                    fermentum et, dapibus sed, urna.
                </p>

                <div className="mb-4">
                    <Link to="/secondary" className="btn btn-info btn-sm">
                        Transition to secondary page (This is a link)
                    </Link>
                </div>

                <div className="mb-4">
                    <Link to="/secondary" className="btn btn-secondary btn-sm" dontAnimate={true}>
                        Transition to secondary page (Will not animate)
                    </Link>
                </div>
            </div>
        );
    };

    const SecondaryPage = () => {
        const { redirect } = useContext(TransitionProviderContext);
        // const qp = useQueryParams();

        return (
            <div id="secondary" className="container text-center">
                <h3>Secondary page</h3>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>

                {/*{qp.other && (*/}
                {/*    <React.Fragment>*/}
                {/*        <hr />*/}

                {/*        <p>*/}
                {/*            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat*/}
                {/*            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat*/}
                {/*            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat*/}
                {/*            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat*/}
                {/*            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat*/}
                {/*            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat*/}
                {/*            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat*/}
                {/*            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.*/}
                {/*        </p>*/}
                {/*    </React.Fragment>*/}
                {/*)}*/}

                <div className="mb-4">
                    <button className="btn btn-info btn-sm" onClick={() => redirect("/")}>
                        Transition to previous page (This is a button with onClick)
                    </button>
                </div>

                <button className="btn btn-secondary btn-sm" onClick={() => redirect("/", { dontAnimate: true })}>
                    Transition to previous page (Will not animate)
                </button>

                <button className="btn btn-link btn-sm" onClick={() => redirect("/secondary?other=true", { dontAnimate: true })}>
                    Redirect with query params
                </button>
            </div>
        );
    };

    return (
        <BrowserRouter basename="/iframe.html/">
            <TransitionProvider>
                <Switch>
                    <Route exact path="/">
                        <TransitionView>
                            <IndexPage />
                        </TransitionView>
                    </Route>

                    <Route exact path="/secondary">
                        <TransitionView>
                            <SecondaryPage />
                        </TransitionView>
                    </Route>
                </Switch>
            </TransitionProvider>
        </BrowserRouter>
    );
};
