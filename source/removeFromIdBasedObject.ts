import {allIdsByIdObjectStringOrNumber, idElement, allIdsByIdObjectNumbered, allIdsByIdObjectStringed} from "./types";

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
const removeFromIdBasedObject: IOverload = (origObject: any, idToRemove: any) => {
// const removeFromIdBasedObject = (origObject: allIdsByIdObjectStringOrNumber, idToRemove: string | number | (string | number)[]) => {
    return {
        allIds: origObject.allIds.filter((id: string | number) => {
            if (typeof idToRemove !== "object") return id !== idToRemove;
            else return idToRemove.indexOf(id) === -1;
        }),
        byId: origObject.allIds.reduce((acc: idElement, id: string | number) => {
            if (typeof idToRemove !== "object") {
                if (id !== idToRemove) acc[id] = origObject.byId[id];
            } else {
                if (idToRemove.indexOf(id) === -1) acc[id] = origObject.byId[id];
            }
            return acc;
        }, {})
    };
};

export default removeFromIdBasedObject;