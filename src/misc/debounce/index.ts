export const debounce = (label: string, callback: Function, delay: number): void => {
    const w: any = window;
    const timerKey = `debounced-function-${label}`;
    if (w[timerKey]) clearTimeout(w[timerKey]);
    w[timerKey] = setTimeout(callback, delay);
};
