import {Comment} from './comment'
export class Post{
    userName:string;
    date:Date;
    title:string;
    content:string
    likes:Array<string>;
    comments:Array<Comment>;
}