/**
 * Adds an object to an object based on allIds and byId. If the object already exists, it will be merged.
 * @param origObject
 * @param idToAdd
 * @param objectToAdd
 * @returns {{allIds: *[], byId: {}}}
 */
export default function addToIdBasedObjectOrMerge(origObject, idToAdd, objectToAdd){
    if (!idToAdd) {
        throw(new Error("Id not given"));
    }

    return {
        allIds: origObject.allIds.indexOf(idToAdd) === -1
            ? [...origObject.allIds, idToAdd]
            : origObject.allIds,
        byId: {
            ...origObject.byId,
            [idToAdd]: {
                ...origObject.byId[idToAdd],
                ...objectToAdd
            }
        }
    };
}