import {allIdsByIdObject, idElement} from "./types";

/**
 * Adds an object to an object based on allIds and byId. If the object already exists, it will be overwritten.
 * @param origObject
 * @param idToAdd
 * @param objectToAdd
 * @returns {{allIds: *[], byId: {}}}
 */
const addToIdBasedObjectOrOverwrite = (origObject: allIdsByIdObject, idToAdd: number | string, objectToAdd: idElement) => {
    return {
        allIds: origObject.allIds.indexOf(idToAdd) === -1
            ? [...origObject.allIds, idToAdd]
            : origObject.allIds,
        byId: {
            ...origObject.byId,
            [idToAdd]: objectToAdd
        }
    };
};

export default addToIdBasedObjectOrOverwrite;