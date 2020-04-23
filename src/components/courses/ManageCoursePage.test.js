import React from "react";
import renderer from "react-test-renderer";
import { authors, courses } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursePage";

const props = {
authors,
courses,
history,
saveCourse: jest.fn(),
loadAuthors: jest.fn(),
loadCourses: jest.fn(),
};

it("should contain form with 3 input fields", () => {
  const tree = renderer.create(
      <ManageCoursePage {...props} />
    );
  
    expect(tree).toMatchSnapshot();
});
  