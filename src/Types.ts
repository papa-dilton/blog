export type Post = {
    _id: String;
    _userId: String;
    title: String;
    content: String;
    tags: String[];
    length: Number;
    createdAt: Date;
    updatedAt: Date;
}