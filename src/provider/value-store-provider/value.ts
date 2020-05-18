/**
 * An immutable object that used by the ValueStoreProvider to store a user defined value along with some meta information
 */
export class Value {
    readonly key: string;
    readonly value: any;
    readonly isStoredInLocalStorage: boolean;

    constructor(key: string, value: any, isStoredInLocalStorage: boolean = false) {
        this.key = key;
        this.value = value;
        this.isStoredInLocalStorage = isStoredInLocalStorage;
    }
}
