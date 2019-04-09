/**
 * Adds multiple objects, to an object based on allIds and byId. If the object already exists, it will be overwritten.
 * @param {object} origObject containing allIds and byId
 * @param {object} objectToMerge containting allIds and byId
 * @returns {{allIds: *[], byId: {}}}
 */
export function mergeIdBasedObjectsOverwriting(origObject, objectToMerge){
    return {
        allIds: [
            ...origObject.allIds,
            ...objectToMerge.allIds.filter(id => origObject.allIds.indexOf(id) === -1)
        ],
        byId: {
            ...origObject.byId,
            ...objectToMerge.byId,
        }
    };
}