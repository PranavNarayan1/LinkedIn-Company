import mongoose, { Schema, model } from 'mongoose';
import { UserDocument } from './user.model';
import { Post } from './posts.model';

export interface Comments extends mongoose.Document{

    user_id: UserDocument | Schema.Types.ObjectId,
    post_id: Post | Schema.Types.ObjectId,
    content: Schema.Types.String,
    parent_id: Comments | Schema.Types.ObjectId
}

export const commentSchema = new Schema<Comments>({

    user_id: {
        type : Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    post_id: {
        type: Schema.Types.ObjectId,
        ref: 'posts',
        required: true
    },
    content: {
        type: Schema.Types.String,
        required : true
    },
    parent_id:{
        type: Schema.Types.ObjectId,
        ref: 'comments',
        required: false,
        default: null
    }
})

commentSchema.set('timestamps', true);


export const  CommentModel = model<Comments>('comments', commentSchema);