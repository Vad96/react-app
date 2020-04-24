//@flow

import React from "react";
import { Link } from "react-router-dom";

type CourseListProps = {
  courses: Array<{
    id: number,
    title: string,
    slug: string,
    authorId: number,
    category: string,
    authorName: string
  }>,
  onDeleteClick: Function  
}

const CourseList = ({ courses, onDeleteClick }: CourseListProps) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {courses.map(course => {
        return (
          <tr key={course.id}>
            <td>
            </td>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(course)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default CourseList;
