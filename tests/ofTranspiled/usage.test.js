import {removeFromIdBasedObject, addToIdBasedObjectOrMerge} from "../../distribution/index";

it ("should handle empty ids arrays", () => {
    const theObject = {allIdsById: {allIds: [14], byId: {14: {test: true}}}};
    theObject.allIdsById = removeFromIdBasedObject(theObject.allIdsById, []);
    expect(theObject.allIdsById).toEqual({allIds: [14], byId: {14: {test: true}}});
});

it ("should overwrite only one element in the object with the new value", () => {
    const theObject = {allIdsById: {allIds: [123], byId: {123: {test: true, untouched: false, thenull: null}}}};
    theObject.allIdsById = addToIdBasedObjectOrMerge(theObject.allIdsById, 123, {test: "string"});
    expect(theObject.allIdsById).toEqual({allIds: [123], byId: {123: {test: "string", untouched: false, thenull: null}}});
});