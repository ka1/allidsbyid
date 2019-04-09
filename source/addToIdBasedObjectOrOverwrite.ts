import {allIdsByIdObjectStringOrNumber, allIdsByIdObjectNumbered, allIdsByIdObjectStringed} from "./types";


type IOverload = {
    (origObject: allIdsByIdObjectNumbered, idToAdd: number, objectToAdd: any ): allIdsByIdObjectNumbered;
    (origObject: allIdsByIdObjectStringed, idToAdd: string, objectToAdd: any): allIdsByIdObjectStringed;
    (origObject: allIdsByIdObjectStringOrNumber, idToAdd: string | number, objectToAdd: any): allIdsByIdObjectStringOrNumber;
};

/**
 * Adds an object to an object based on allIds and byId. If the object already exists, it will be overwritten.
 * @param origObject
 * @param idToAdd
 * @param objectToAdd
 * @returns {{allIds: *[], byId: {}}}
 */
const addToIdBasedObjectOrOverwrite: IOverload = (origObject: any, idToAdd: any, objectToAdd: any) => {
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