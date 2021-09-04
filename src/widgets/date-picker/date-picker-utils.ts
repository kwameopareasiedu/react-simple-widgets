import arraySupport from "dayjs/plugin/arraySupport";
import djs from "dayjs";

djs.extend(arraySupport);

export const years = Array.from(new Array(200), (v, i) => djs().year() + i - 120);

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export const days = ["Su", "Mon", "Tu", "We", "Th", "Fr", "Sa"];

export const dateYear = (date?: string): number => {
    return djs(date).year();
};

export const dateMonth = (date?: string): number => {
    return djs(date).month();
};

export const dateDay = (date?: string): number => {
    return djs(date).date();
};

export const daySuffix = (day: number): string => {
    if ([1, 21, 31].includes(day)) return "st";
    if ([2, 22].includes(day)) return "nd";
    if ([3, 23].includes(day)) return "rd";
    return "th";
};

export const dateMonthDayOffset = (year: number, month: number): number => {
    return djs([year, month, 1]).day();
};
