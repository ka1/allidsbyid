import { allIdsByIdObjectNumbered, allIdsByIdObjectStringed, allIdsByIdObjectStringOrNumber } from "./types";
declare type IOverload = {
    (origObject: allIdsByIdObjectNumbered, idToAdd: number, objectToAdd: any): allIdsByIdObjectNumbered;
    (origObject: allIdsByIdObjectStringed, idToAdd: string, objectToAdd: any): allIdsByIdObjectStringed;
    (origObject: allIdsByIdObjectStringOrNumber, idToAdd: string | number, objectToAdd: any): allIdsByIdObjectStringOrNumber;
};
/**
 * Adds an object to an object based on allIds and byId, if the id does not yet exist. Otherwise, the new object will
 * be ignored and the untouched id/allids object is returned
 * @param origObject
 * @param idToAdd
 * @param objectToAdd
 * @returns {{allIds: *[], byId: {}}}
 */
declare const addToIdBasedObjectIfNotExists: IOverload;
export default addToIdBasedObjectIfNotExists;
