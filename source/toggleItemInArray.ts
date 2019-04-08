import {allIdsByIdObject, idElement} from "./types";

/**
 * Add an item or remove it. Does NOT mutate the array.
 * @param array
 * @param value
 */
const toggleItemInArray = (array: (string | number | object)[], value: string | number | object) => {
    const index = array.indexOf(value);

    let returnArray;

    if (index === -1) {
        returnArray = [...array, value];
    } else {
        returnArray = array.filter(item => item !== value);
    }

    return returnArray;
};

export default toggleItemInArray;
