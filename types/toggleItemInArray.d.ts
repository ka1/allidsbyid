/**
 * Add an item or remove it. Does NOT mutate the array.
 * @param array
 * @param value
 */
declare const toggleItemInArray: (array: (string | number | object)[], value: string | number | object) => (string | number | object)[];
export default toggleItemInArray;
