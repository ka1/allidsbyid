import {addToIdBasedObjectIfNotExists, removeFromIdBasedObject} from "../source/index";

it ("should add a new object to the empty allidsbyid object", () => {
    const theObject = {allIdsById: {allIds: [], byId: {}}};
    theObject.allIdsById = addToIdBasedObjectIfNotExists(theObject.allIdsById, 12, {test: true});

    expect(theObject.allIdsById).toEqual({allIds: [12], byId: {12: {test: true}}});
});

it ("should add a new object to the filled allidsbyid object", () => {
    const theObject = {allIdsById: {allIds: [13], byId: {13: {test: true}}}};
    theObject.allIdsById = addToIdBasedObjectIfNotExists(theObject.allIdsById, 12, {test: true});

    expect(theObject.allIdsById).toEqual({allIds: [13, 12], byId: {13: {test: true}, 12: {test: true}}});
});

it ("should not create duplicates", () => {
    const theObject = {allIdsById: {allIds: [12], byId: {12: {test: "123"}}}};
    theObject.allIdsById = addToIdBasedObjectIfNotExists(theObject.allIdsById, 12, {test: true});

    expect(theObject.allIdsById).toEqual({allIds: [12], byId: {12: {test: "123"}}});
});

it ("should remove an id", () => {
    const theObject = {allIdsById: {allIds: [13], byId: {13: {test: true}}}};
    theObject.allIdsById = addToIdBasedObjectIfNotExists(theObject.allIdsById, 12, {test: true});
    theObject.allIdsById = removeFromIdBasedObject(theObject.allIdsById, 13);

    expect(theObject.allIdsById).toEqual({allIds: [12], byId: {12: {test: true}}});
});