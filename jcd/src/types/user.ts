export interface User {
    id:number,  // use id to match profile pictures
    email:string,
    username:string,
    creationAt:Date,
    updatedAt:Date,
    admin:boolean,
    moderator:boolean,
    deletedAt:Date
}
