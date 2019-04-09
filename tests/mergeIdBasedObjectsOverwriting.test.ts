import {mergeIdBasedObjectsOverwriting} from "../source/index";

it("should merge two objects", () => {
    const orig = {
        allIds: [3,4],
        byId: {3: "drei", 4: "vier"}
    };

    const mergedInto = {
        allIds: [4,5],
        byId: {4: "vier.a", 5: "fünf"}
    };

    expect(mergeIdBasedObjectsOverwriting(orig, mergedInto)).toEqual({
        allIds: [3,4,5],
        byId: {3: "drei", 4: "vier.a", 5: "fünf"}
    });
});

it("should merge two nested objects", () => {
    const orig = {
        allIds: [3,4],
        byId: {3: {number: "drei"}, 4: {number: "vier"}}
    };

    const mergedInto = {
        allIds: [4,5],
        byId: {4: {number: "vier.a"}, 5: {number: "fünf"}}
    };

    expect(mergeIdBasedObjectsOverwriting(orig, mergedInto)).toEqual({
        allIds: [3,4,5],
        byId: {3: {number: "drei"}, 4: {number: "vier.a"}, 5: {number: "fünf"}}
    });
});

it("should merge into an empty object", () => {
    const orig = {
        allIds: [],
        byId: {}
    };

    const mergedInto = {
        allIds: [4,5],
        byId: {4: "vier.a", 5: "fünf"}
    };

    expect(mergeIdBasedObjectsOverwriting(orig, mergedInto)).toEqual({
        allIds: [4,5],
        byId: {4: "vier.a", 5: "fünf"}
    });
});


it("should merge an empty object", () => {
    const orig = {
        allIds: [4,5],
        byId: {4: "vier.a", 5: "fünf"}
    };

    const mergedInto = {
        allIds: [],
        byId: {}
    };

    expect(mergeIdBasedObjectsOverwriting(orig, mergedInto)).toEqual({
        allIds: [4,5],
        byId: {4: "vier.a", 5: "fünf"}
    });
});

it("should merge two string based id array objects", () => {
    const orig = {
        allIds: ["three","four"],
        byId: {"three": "drei", "four": "vier"}
    };

    const mergedInto = {
        allIds: ["four","five"],
        byId: {"four": "vier.a", "five": "fünf"}
    };

    expect(mergeIdBasedObjectsOverwriting(orig, mergedInto)).toEqual({
        allIds: ["three","four","five"],
        byId: {"three": "drei", "four": "vier.a", "five": "fünf"}
    });
});
