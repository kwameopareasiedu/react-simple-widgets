// Represents a stored object in the value store
export class ValueStorePair {
    readonly key: string;
    value: any;
    save: boolean;

    constructor(key: string, value: any, save = false) {
        this.key = key;
        this.value = value;
        this.save = save;
    }
}
