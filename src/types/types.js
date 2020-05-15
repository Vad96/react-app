// @flow

export type Courses = {
    id: number,
    title: string,
    slug: string,
    authorId: string,
    category: string,
    authorName: string,
};

export type CourseObj = {
    id: number,
    title: string,
    authorId: string,
    category: string
}

export type Authors = {
    id: number,
    name: string,
}
