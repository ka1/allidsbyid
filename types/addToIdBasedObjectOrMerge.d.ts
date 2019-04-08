import { allIdsByIdObjectStrict } from "./types";
/**
 * Adds an object to an object based on allIds and byId. If the object already exists, it will be merged.
 * @param origObject
 * @param idToAdd
 * @param objectToAdd
 * @returns {{allIds: *[], byId: {}}}
 */
declare const addToIdBasedObjectOrMerge: (origObject: allIdsByIdObjectStrict, idToAdd: string | number, objectToAdd: object) => {
    allIds: (string | number)[];
    byId: {
        [x: string]: object;
    };
};
export default addToIdBasedObjectOrMerge;
