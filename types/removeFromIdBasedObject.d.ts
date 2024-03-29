import { allIdsByIdObjectStringOrNumber, allIdsByIdObjectNumbered, allIdsByIdObjectStringed } from "./types";
type IOverload = {
    (origObject: allIdsByIdObjectNumbered, idToRemove: number | number[]): allIdsByIdObjectNumbered;
    (origObject: allIdsByIdObjectStringed, idToRemove: string | string[]): allIdsByIdObjectStringed;
    (origObject: allIdsByIdObjectStringOrNumber, idToRemove: string | number | (string | number)[]): allIdsByIdObjectStringOrNumber;
};
/**
 * Removes a given ID or given IDs from an object based on allIds and byId. A new object with new allIds and byId references is
 * returned. Shall there be objects within byId, the original object references will remain.
 * @param {object} origObject
 * @param {string | int | array} idToRemove
 * @returns {{allIds, byId}}
 */
declare const removeFromIdBasedObject: IOverload;
export default removeFromIdBasedObject;
