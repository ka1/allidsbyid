import { allIdsByIdObject } from "./types";
/**
 * Adds an object to an object based on allIds and byId. If the object already exists, it will be overwritten.
 * @param origObject
 * @param idToAdd
 * @param objectToAdd
 * @returns {{allIds: *[], byId: {}}}
 */
declare const addToIdBasedObjectOrOverwrite: (origObject: allIdsByIdObject, idToAdd: string | number, objectToAdd: Record<string, any>) => {
    allIds: (string | number)[];
    byId: {
        [x: string]: string | number | boolean | object | any[] | Record<string, any>;
    };
};
export default addToIdBasedObjectOrOverwrite;
