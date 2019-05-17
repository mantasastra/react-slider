import React from "react";
import { create } from "react-test-renderer";
import LeftArrow from "../../components/Arrows/LeftArrow";

describe("Left Arrow Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<LeftArrow/>);
        expect(component.toJSON()).toMatchSnapshot();
    })
});

