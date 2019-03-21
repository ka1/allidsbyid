import {addToIdBasedObjectOrOverwrite} from "../source/index";

it("should overwrite an existing id", () => {
    const obj = {allIds: ["a", "b"], byId: {a: {dasA: "testa"}, b: {dasB: "testb"}}};
    expect(addToIdBasedObjectOrOverwrite(obj, "b", {dasNeue: "testNeu"})).toEqual(
        {allIds: ["a", "b"], byId: {a: {dasA: "testa"}, b: {dasNeue: "testNeu"}}}
    );
});

it("should add a non existing id", () => {
    const obj = {allIds: ["a", "b"], byId: {a: {dasA: "testa"}, b: {dasB: "testb"}}};
    expect(addToIdBasedObjectOrOverwrite(obj, "c", {dasC: "testc"})).toEqual(
        {allIds: ["a", "b", "c"], byId: {a: {dasA: "testa"}, b: {dasB: "testb"}, c: {dasC: "testc"}}}
    );
});

