export interface ObjectView {
    object: any;
    condensed?: boolean;
    props: Array<[string, string | ((object: any) => any)]>;
    splitRatio?: number;
}
