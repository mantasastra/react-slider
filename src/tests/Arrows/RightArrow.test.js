import React from "react";
import { create } from "react-test-renderer";
import RightArrow from "../../components/Arrows/RightArrow";

describe("Right Arrow Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<RightArrow/>);
        expect(component.toJSON()).toMatchSnapshot();
    })
});