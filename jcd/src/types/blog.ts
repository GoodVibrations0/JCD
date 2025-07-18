export interface blog{
    id:number,
    userId:number,
    title:string,
    content:string,
    created:Date,
    updated?:Date,
    media?:string[],
}
