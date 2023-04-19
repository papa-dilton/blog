export interface Post {
    _id: String;
    _userId: String;
    title: String;
    body: String;
    tags: String[];
    views: Number;
    length: Number;
    createdAt: Date;
    updatedAt: Date;
}