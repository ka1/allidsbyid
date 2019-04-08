import {addToIdBasedObjectOrMerge} from "../source/index";
import {allIdsByIdObjectStrict} from "../source/types";

it ("should create a new element if none existed previously", () => {
    const theObject: {allIdsById: allIdsByIdObjectStrict} = {allIdsById: {allIds: [], byId: {}}};
    theObject.allIdsById = addToIdBasedObjectOrMerge(theObject.allIdsById, 123, {test: "string"});
    expect(theObject.allIdsById).toEqual({allIds: [123], byId: {123: {test: "string"}}});
});

it ("should overwrite only one element in the object with the new value", () => {
    const theObject: {allIdsById: allIdsByIdObjectStrict} = {allIdsById: {allIds: [123], byId: {123: {test: true, untouched: false, thenull: null}}}};
    theObject.allIdsById = addToIdBasedObjectOrMerge(theObject.allIdsById, 123, {test: "string"});
    expect(theObject.allIdsById).toEqual({allIds: [123], byId: {123: {test: "string", untouched: false, thenull: null}}});
});

it ("should handle undefined elements and undefine previously defined items", () => {
    const theObject: {allIdsById: allIdsByIdObjectStrict} = {allIdsById: {allIds: [123], byId: {123: {test: true, untouched: false, thenull: null}}}};
    theObject.allIdsById = addToIdBasedObjectOrMerge(theObject.allIdsById, 123, {test: undefined});
    expect(theObject.allIdsById).toEqual({allIds: [123], byId: {123: {test: undefined, untouched: false, thenull: null}}});
});

it ("should handle null elements and null previously explicitely undefined items", () => {
    const theObject: {allIdsById: allIdsByIdObjectStrict} = {allIdsById: {allIds: [123], byId: {123: {test: undefined, untouched: false, thenull: null}}}};
    theObject.allIdsById = addToIdBasedObjectOrMerge(theObject.allIdsById, 123, {test: null});
    expect(theObject.allIdsById).toEqual({allIds: [123], byId: {123: {test: null, untouched: false, thenull: null}}});
});

it ("should handle null elements and null previously undefined items", () => {
    const theObject: {allIdsById: allIdsByIdObjectStrict} = {allIdsById: {allIds: [123], byId: {123: {untouched: false, thenull: null}}}};
    theObject.allIdsById = addToIdBasedObjectOrMerge(theObject.allIdsById, 123, {test: null});
    expect(theObject.allIdsById).toEqual({allIds: [123], byId: {123: {test: null, untouched: false, thenull: null}}});
});

it ("cannot handle objects without the allIds byId structure", () => {
    let theObject = {};
    const theTest = () => { theObject = addToIdBasedObjectOrMerge((theObject as {allIdsById: allIdsByIdObjectStrict}).allIdsById, 123, {test: null});};
    expect(theTest).toThrow();
});

it("should not accept calls without the id to add", () => {
    const theObject: {allIdsById: allIdsByIdObjectStrict} = {allIdsById: {allIds: [123], byId: {123: {untouched: false, thenull: null}}}};
    const theTest = () => { theObject.allIdsById = addToIdBasedObjectOrMerge(theObject.allIdsById, undefined, {test: null});};
    expect(theTest).toThrow();
});