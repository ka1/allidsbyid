/**
 * Add an item or remove it. Does NOT mutate the array.
 * @param array
 * @param value
 */
export default function toggleItemInArray(array, value){
    const index = array.indexOf(value);

    let returnArray;

    if (index === -1) {
        returnArray = [...array, value];
    } else {
        returnArray = array.filter(item => item !== value);
    }

    return returnArray;
}