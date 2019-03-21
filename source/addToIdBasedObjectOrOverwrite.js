/**
 * Adds an object to an object based on allIds and byId. If the object already exists, it will be overwritten.
 * @param origObject
 * @param idToAdd
 * @param objectToAdd
 * @returns {{allIds: *[], byId: {}}}
 */
export default function addToIdBasedObjectOrOverwrite(origObject, idToAdd, objectToAdd){
    return {
        allIds: origObject.allIds.indexOf(idToAdd) === -1
            ? [...origObject.allIds, idToAdd]
            : origObject.allIds,
        byId: {
            ...origObject.byId,
            [idToAdd]: objectToAdd
        }
    };
}