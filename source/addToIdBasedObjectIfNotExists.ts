import {allIdsByIdObject, elementType, idElement} from "./types";

/**
 * Adds an object to an object based on allIds and byId, if the id does not yet exist. Otherwise, the new object will
 * be ignored and the untouched id/allids object is returned
 * @param origObject
 * @param idToAdd
 * @param objectToAdd
 * @returns {{allIds: *[], byId: {}}}
 */
const addToIdBasedObjectIfNotExists = (origObject: allIdsByIdObject, idToAdd: number | string, objectToAdd: any): allIdsByIdObject => {
    return {
        allIds: origObject.allIds.indexOf(idToAdd as string) === -1
            ? [...origObject.allIds, idToAdd as string]
            : origObject.allIds,
        byId: origObject.allIds.indexOf(idToAdd as string) === -1
            ? {...origObject.byId, [idToAdd as string]: objectToAdd}
            : origObject.byId
    };
};

export default addToIdBasedObjectIfNotExists;