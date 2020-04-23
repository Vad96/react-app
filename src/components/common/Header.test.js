import React from "react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

it('should contain 3 anchors', () => {
    const tree = renderer.create(<MemoryRouter><Header /></MemoryRouter>);
    const instances = tree.root;
   
    expect(instances.findAllByType('a').length).toEqual(3)
});
