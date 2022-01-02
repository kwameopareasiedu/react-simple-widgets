[Home](README.md) / Migration Guide (4.x.x- 5.0.0)

# Migration Guide (4.x.x - 5.0.0)

This migration guide will assist you in upgrading React Simple Widgets from 4.x.x to 5.0.0.

## React Router DOM v6 Upgrade

We've updated our library dependency on [React Router DOM](https://github.com/remix-run/react-router#readme) to v6. You'll just need to the peer dependency in your to v6 as well and that's it.

## FlashProvider Flash Functions Arguments Order

In the [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md) framework, we've also changed the order of the arguments of the flash functions.

```tsx
// v4 - This is how you would use the flash function
const { flashSuccess } = useContext(FlashProviderContext);
...

flashSuccess (
    title: string, 
    message: string, 
    onFlashDismissed: () => void, 
    btnText?: string
);

// This goes for the flashInfo(), flashWarning() and flashError() functions also
```

In v5, the function arguments change a little. Below is updated function usage

```tsx
// v5 - This is how the flash function are used now

const { flashSuccess } = useContext(FlashProviderContext);
...

flashSuccess (
    title: string, 
    message: string, 
    onFlashDismissed: () => void, 
    optionalArgs?: {
    	btnText?: string,
        closeTimerMs: number
	}
);

// This goes for the flashInfo(), flashWarning() and flashError() functions also
```

The last argument in v4 (`btnText?: string`) has been replaced by the `optionalArgs` in v5 which has the structure:

```tsx
{
    btnText?: string
    closeTimerMs: string;
}
```

- `btnText?: string`

  A custom button text to show on the dismiss button (Same as v4)

- `closeTimerMs?: number`

  Optional auto-close timer in milliseconds. If specified, the default flash view will auto close after `closeTimerMs` elapses

## Custom Flash Dialog Arguments

In the [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md) framework, the flash object sent to custom flash dialogs has a new parameter. 

- `closeTimerMs?: number`

  Optional auto-close timer in milliseconds. If specified, the flash view will auto close after `closeTimerMs` elapses

If you don't want or need the auto-close feature, then you can skip this step and not modify your custom flash dialogs

---

And you are done!
