import mongoose, { Schema, model} from 'mongoose';
import { UserDocument} from './user.model';

export interface Post extends mongoose.Document{

    user_id: UserDocument | Schema.Types.ObjectId,
    content: Schema.Types.String,
    likes_count: Schema.Types.Number,
    comments_count: Schema.Types.Number,
}

export const postSchema = new Schema<Post>({

    user_id: {
        type : Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    content:{
        type:Schema.Types.String,
        required: true
    },
    likes_count:{
        type:Schema.Types.Number,
        required: true,
        default: 0
    },
    comments_count: {
        type: Schema.Types.Number,
        required: true,
        default: 0
    }

    
})

postSchema.set('timestamps', true);


export const PostModel = model<Post>('posts', postSchema);