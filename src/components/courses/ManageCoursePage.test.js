import React from "react";
import { mount } from "enzyme";
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

it("show an error when trying to save an empty title field", () => {
  const wrapper =  mount(<ManageCoursePage {...props} />);
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});
