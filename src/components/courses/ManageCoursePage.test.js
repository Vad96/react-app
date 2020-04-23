import React from "react";
import renderer from "react-test-renderer";
import { authors, courses } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursePage";

function render(args) {
    const defaultProps = {
      authors,
      courses,
      saveCourse: jest.fn(),
      loadAuthors: jest.fn(),
      loadCourses: jest.fn(),
    };
  
    const props = { ...defaultProps, ...args };
  
    const tree = renderer.create(
        <ManageCoursePage {...props} />
    );
    return tree
  }

it("should render correctly after clicking on the submit button", () => {
    const tree = render();
    const instance = tree.root

    const button = instance.findByProps({
        type: 'submit',
    });
    const eventMock = { preventDefault: jest.fn() };
    renderer.act(() => button.props.onSubmit(eventMock));

    const snap = tree.toJSON();
    expect(snap).toMatchSnapshot();
});
