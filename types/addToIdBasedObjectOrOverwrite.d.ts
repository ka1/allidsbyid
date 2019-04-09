import { allIdsByIdObjectStringOrNumber, allIdsByIdObjectNumbered, allIdsByIdObjectStringed } from "./types";
declare type IOverload = {
    (origObject: allIdsByIdObjectNumbered, idToAdd: number, objectToAdd: any): allIdsByIdObjectNumbered;
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
declare const addToIdBasedObjectOrOverwrite: IOverload;
export default addToIdBasedObjectOrOverwrite;
