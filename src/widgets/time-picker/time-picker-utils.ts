import djs from "dayjs";

export type Meridian = "AM" | "PM";

export const timeHour = (time?: string): number => {
    if (!time) return djs().hour();
    return djs(`2021-01-01T${time}`).hour();
};

export const timeMinute = (time?: string): number => {
    if (!time) return djs().minute();
    return djs(`2021-01-01T${time}`).minute();
};

export const timeMeridian = (time?: string): "AM" | "PM" => {
    return timeHour(time) < 12 ? "AM" : "PM";
};
