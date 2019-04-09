declare type IOverload = {
    (array: string[], value: string): string[];
    (array: number[], value: number): number[];
    (array: object[], value: object): object[];
};
/**
 * Add an item or remove it. Does NOT mutate the array.
 * @param array
 * @param value
 */
declare const toggleItemInArray: IOverload;
export default toggleItemInArray;
