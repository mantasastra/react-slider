import React from "react";
import { create } from "react-test-renderer";
import Card from "../../components/Card/Card";

describe("Card component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Card/>);
        expect(component.toJSON()).toMatchSnapshot();
    })
});
