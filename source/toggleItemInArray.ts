type IOverload = {
    (array: string[], value: string): string[];
    (array: number[], value: number): number[];
    (array: object[], value: object): object[];
}

/**
 * Add an item or remove it. Does NOT mutate the array.
 * @param array
 * @param value
 */
const toggleItemInArray: IOverload = (array: any, value: any) => {
    const index = array.indexOf(value);

    let returnArray;

    if (index === -1) {
        returnArray = [...array, value];
    } else {
        returnArray = array.filter((item: any) => item !== value);
    }

    return returnArray;
};

export default toggleItemInArray;
