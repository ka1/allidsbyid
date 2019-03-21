import {toggleItemInArray} from "../source/index.js";

it("should add an item to an array", () => {
    expect(toggleItemInArray(["a"], "test")).toEqual(["a","test"]);
});

it("should remove an item from an array", () => {
    expect(toggleItemInArray(["a","b","c"], "b")).toEqual(["a","c"]);
});