import React from "react";
import { create } from "react-test-renderer";
import Like from "../../components/Like/Like";

describe("Like Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Like/>);
        expect(component.toJSON()).toMatchSnapshot();
    })
});