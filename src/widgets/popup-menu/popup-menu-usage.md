[Home](../../../README.md)

# PopupMenu

PopupMenu is a widget that shows a popup menu when the trigger button is clicked

## Usage

```jsx
import { PopupMenu } from "react-simple-widgets";

<PopupMenu>
    <button className="btn btn-link btn-sm">Confirm button</button>
    
    <div id="options-menu" className="card">
        <ul className="list-group list-group-flush">
            <button className="list-group-item">This is a long option</button>
            <button className="list-group-item">Option 2</button>
            <button className="list-group-item">Option 3</button>
            <button className="list-group-item">Option 4</button>
        </ul>
    </div>
</PopupMenu>;
```

## Side Notes

> **A ```PopupMenu``` only renders the first two (2) children**. The first child must be the trigger button and the second should be the options menu displayed when the trigger button is clicked.
