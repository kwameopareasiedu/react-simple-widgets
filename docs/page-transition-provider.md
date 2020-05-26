[Home](../README.md)

# PageTransitionProvider

The `PageTransitionProvider` provides smooth transitions between pages of your app. It manages the 
page transition animation and then uses a 
[Router](https://reacttraining.com/react-router/web/api/Router) to actually change the pages. 
It therefore requires a Router instance as an ancestor widget.

This provider works seamlessly with ReactRouterDOM's routers and parameters such as `basename` on 
the Router will not break any functionality in your app.

## API

### PageTransitionProvider

`PageTransitionProvider` is a wrapper for your app and provides the transitions.

```jsx
ReactDOM.render(
    <BrowserRouter> // Any ReactRouterDOM Router is required as an ancestor
        <PageTransitionProvider>
            <App /> // Children is a required prop
        </PageTransitionProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
```

### PageTransitionProviderContext

`PageTransitionProviderContext` makes the routing function available to your application

```jsx
const { redirect } = useContext(PageTransitionProviderContext);
```

#### redirect

`redirect` transitions the current page out of view and transitions the new page into view. It 
replaces the `history.push` and `history.replace` functions provided by a `useHistory()` hook.

```jsx
redirect(to, options);
```

-   `to: string`

    The path of the page to redirect to
    
-   `options?: { dontAnimate?: boolean, replaceUrl?: boolean }`

    -   `dontAnimate?: boolean`
    
        If this flag is set to true, the `PageTransitionProvider` will skip the transition animation
        and immediately redirect to the target page. This is false by default
        
    -   `replaceUrl?: boolean`
    
        If this flag is set to true, the `PageTransitionProvider` will pop the current page's URL
        off the history stack before adding the target page's URL. This is false by default
        
        As an example, consider this is is your current history stack `A > B > C > D`. If `redirect`
        is called with `to = E` and `replaceUrl = true`, the new history stack will be 
        `A > B > C > E`. So going back to take you to page `C` instead of page `D`.
        
### Link

While the `redirect` function provides an imperative way to redirect to a page, the `Link` 
widget (Not to be confused with ReactRouterDOM's [`Link`](https://reacttraining.com/react-router/web/api/Link)) 
allows you to do this declaratively.

`Link` is a wrapper for the anchor tag and accepts all other parameters of anchors.
        
```jsx
<Link to="path/to/page" dontAnimate={false} replaceUrl={false} {...otherProps} />
```

-   `to: string`

    Same as [`to` parameter on the redirect function](#redirect)
    
-   `dontAnimate?: boolean`

    Same as [`dontAnimate` option on the redirect function](#redirect)
    
-   `replaceUrl?: boolean`

    Same as [`replaceUrl` option on the redirect function](#redirect)
    
## Usage

A complete usage can be found in the [Storybook stories for this widget](../src/provider/page-transition-provider/index.stories.tsx)