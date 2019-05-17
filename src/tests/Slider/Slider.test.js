import React from "react";
import { create } from "react-test-renderer";
import Slider from "../../components/Slider/Slider";

describe("Slider Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Slider/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});