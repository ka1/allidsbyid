import { allIdsByIdObject } from "./types";
/**
 * Adds an object to an object based on allIds and byId, if the id does not yet exist. Otherwise, the new object will
 * be ignored and the untouched id/allids object is returned
 * @param origObject
 * @param idToAdd
 * @param objectToAdd
 * @returns {{allIds: *[], byId: {}}}
 */
declare const addToIdBasedObjectIfNotExists: (origObject: allIdsByIdObject, idToAdd: string | number, objectToAdd: any) => allIdsByIdObject;
export default addToIdBasedObjectIfNotExists;
