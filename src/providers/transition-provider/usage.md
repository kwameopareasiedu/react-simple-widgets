[Home](../../../README.md) / TransitionProvider

# TransitionProvider

The `TransitionProvider` provides smooth transitions between pages of your app. It manages the
page transition animation and then uses a [Router](https://reacttraining.com/react-router/web/api/Router)
to actually change the pages. It therefore requires a Router instance as an ancestor widget.

This provider works seamlessly with ReactRouterDOM's routers and parameters such as `basename` on
the Router will not break any functionality of this provider.

The following guide demonstrates how to use the `TransitionProvider`

## Wrap your app with the `TransitionProvider` widget

The first step to using the `TransitionProvider` widget is to make it an ancestor of your app export.

```jsx
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { TransitionProvider } from "react-simple-widgets";
import { App } from "./app.tsx";

ReactDOM.render(
    <BrowserRouter>
        <TransitionProvider>
            <App />
        </TransitionProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
```

This makes the `TransitionProvider` context available to the rest of the application. The context
contains the function needed to use the transition functions.

> Since `TransitionProvider` depends of react-router-dom, A `BrowserRouter` ancestor is required

## Use page transitions within your app

The code example below illustrates how to utilize each function provided by the provider. Since this
provider operates between multiple pages, let's create three pages to transition between:

-   `app.tsx`: We'll define our routes here
-   `login.tsx`: The fictitious login page
-   `register.tsx`: The fictitious register page

`app.tsx`

```tsx
import { Switch, Route } from "react-router-dom";
import { TransitionView } from "react-simple-widgets";
import Register from "./register.tsx";
import Login from "./login.tsx";

export function App() {
    return (
        <div id="app">
            <Switch>
                <Route exact path="/login">
                    <TransitionView>
                        <Login />
                    </TransitionView>
                </Route>

                <Route exact path="/secondary">
                    <TransitionView>
                        <Register />
                    </TransitionView>
                </Route>
            </Switch>
        </div>
    );
}
```

`login.tsx`

```tsx
import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-simple-widgets";

export function Login() {
    return (
        <div id="login">
            <h1>Login </h1>

            {/* This link is a drop-in replacement for react-router-dom's Link with added props */}
            <Link to="/login" dontAnimate={false} replaceUrl={false}>
                Click to register
            </Link>
        </div>
    );
}
```

> If `dontAnimate` is set to true (false by default), the page switch will occur without animation

> If `replaceUrl` is set to true (false by default), the new page's URL will replace the current URL
> in the browser history. When this happens, going back will not load the old page's url

`register.tsx`

```tsx
import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionProviderContext } from "react-simple-widgets";

export function Register() {
    const { redirect } = useContext(TransitionProviderContext);

    return (
        <div id="register">
            <h1>Register </h1>
            {/* For programatic redirection, you can use the redirect function */}
            <button onClick={(): void => redirect("/login", { dontAnimate: false, replaceUrl: false })}>Go back to login</button>
        </div>
    );
}
```
