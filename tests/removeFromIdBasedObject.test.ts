import {removeFromIdBasedObject} from "../source/index";
import {allIdsByIdObject} from "../source/types";

it ("should remove multiple ids", () => {
    const theObject: {allIdsById: allIdsByIdObject} = {allIdsById: {allIds: [13, 14, 15], byId: {13: {test: true}, 14: {test: true}, 15: {test: true}}}};
    theObject.allIdsById = removeFromIdBasedObject(theObject.allIdsById, [13,15]);
    expect(theObject.allIdsById).toEqual({allIds: [14], byId: {14: {test: true}}});
});

it ("should handle empty ids arrays", () => {
    const theObject: {allIdsById: allIdsByIdObject} = {allIdsById: {allIds: [14], byId: {14: {test: true}}}};
    theObject.allIdsById = removeFromIdBasedObject(theObject.allIdsById, []);
    expect(theObject.allIdsById).toEqual({allIds: [14], byId: {14: {test: true}}});
});