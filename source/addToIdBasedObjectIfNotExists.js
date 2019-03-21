/**
 * Adds an object to an object based on allIds and byId, if the id does not yet exist. Otherwise, the new object will
 * be ignored and the untouched id/allids object is returned
 * @param origObject
 * @param idToAdd
 * @param objectToAdd
 * @returns {{allIds: *[], byId: {}}}
 */
const addToIdBasedObjectIfNotExists = (origObject, idToAdd, objectToAdd) => {
    return {
        allIds: origObject.allIds.indexOf(idToAdd) === -1
            ? [...origObject.allIds, idToAdd]
            : origObject.allIds,
        byId: origObject.allIds.indexOf(idToAdd) === -1
            ? {...origObject.byId, [idToAdd]: objectToAdd}
            : origObject.byId
    };
};

module.exports = addToIdBasedObjectIfNotExists;