//@flow

import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import type { Courses, CourseObj, Authors } from '../../types/types.js';

type CourseFormProps = {|
  authors: $ReadOnlyArray<Authors>,
  course: CourseObj,
  errors: Object,
  onSave:  (event: SyntheticEvent<HTMLButtonElement>) => void,
  onChange:  (event: SyntheticInputEvent<EventTarget>) => void,
  saving: boolean
|}

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors
}: CourseFormProps) => {
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        placeholder="type smth"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId || ""}
        defaultOption="Select Author"
        options={authors.map(author => ({
          value: author.id,
          text: author.name
        }))}
        onChange={onChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Category"
        placeholder="type smth"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default CourseForm;
