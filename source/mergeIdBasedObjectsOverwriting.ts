import {allIdsByIdObjectNumbered, allIdsByIdObjectStringed, allIdsByIdObjectStringOrNumber} from "./types";

type IOverload = {
    (origObject: allIdsByIdObjectStringed, objectToMerge: allIdsByIdObjectStringed): allIdsByIdObjectStringed;
    (origObject: allIdsByIdObjectNumbered, objectToMerge: allIdsByIdObjectNumbered): allIdsByIdObjectNumbered;
    (origObject: allIdsByIdObjectStringOrNumber, objectToMerge: allIdsByIdObjectStringOrNumber): allIdsByIdObjectStringOrNumber;
}

/**
 * Adds multiple objects, to an object based on allIds and byId. If the object already exists, it will be overwritten.
 * @param {object} origObject containing allIds and byId
 * @param {object} objectToMerge containting allIds and byId
 * @returns {{allIds: *[], byId: {}}}
 */
const mergeIdBasedObjectsOverwriting: IOverload = (origObject: any, objectToMerge: any) => {
    return {
        allIds: [
            ...origObject.allIds,
            ...objectToMerge.allIds.filter((id: any) => origObject.allIds.indexOf(id) === -1)
        ],
        byId: {
            ...origObject.byId,
            ...objectToMerge.byId,
        }
    };
};

export default mergeIdBasedObjectsOverwriting;