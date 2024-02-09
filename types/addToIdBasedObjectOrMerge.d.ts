import { allIdsByIdObjectStrictNumbered, allIdsByIdObjectStrictStringed, allIdsByIdObjectStrictStringOrNumber } from "./types";
type IOverload = {
    (origObject: allIdsByIdObjectStrictNumbered, idToAdd: number, objectToAdd: object): allIdsByIdObjectStrictNumbered;
    (origObject: allIdsByIdObjectStrictStringed, idToAdd: string, objectToAdd: object): allIdsByIdObjectStrictStringed;
    (origObject: allIdsByIdObjectStrictStringOrNumber, idToAdd: string | number, objectToAdd: object): allIdsByIdObjectStrictStringOrNumber;
};
/**
 * Adds an object to an object based on allIds and byId. If the object already exists, it will be merged.
 * @param origObject
 * @param idToAdd
 * @param objectToAdd
 * @returns {{allIds: *[], byId: {}}}
 */
declare const addToIdBasedObjectOrMerge: IOverload;
export default addToIdBasedObjectOrMerge;
