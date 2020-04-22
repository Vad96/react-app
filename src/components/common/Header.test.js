import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

it('should contain 3 anchors', () => {
    const tree = renderer
      .create( <MemoryRouter><Header /></MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  