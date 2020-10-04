[Home](../../../README.md)

# debounce

Debounce a specified function. Debouncing limits the number of times a function is called within a
specified time period. 

As an example, if a function is an action emits 100 events within a second and the handler is 
supposed to call an API function, this may trigger rate limiting on the server. As such, the 
function can be debounced to be called once after no new events have been emitted in 1 second.  

## Usage

```jsx
debounce(label, func, delay);
```

-   `label: string`

    The unique label for this function. This is used to identify the function in the function pool

-   `func: Function`

    The function to be debounced

-   `delay: number`

    The debounce delay of the function in milliseconds
