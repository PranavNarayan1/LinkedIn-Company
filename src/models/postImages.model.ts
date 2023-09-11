import mongoose, { Schema, model} from 'mongoose';
import { UserDocument} from './user.model';
import { type } from 'os';

export interface PostImages extends mongoose.Document{

    user_id: UserDocument | Schema.Types.ObjectId,
    image_url: Schema.Types.String,
    caption: Schema.Types.String,
    description: Schema.Types.String,
    likes_count: Schema.Types.Number,
    comments_count: Schema.Types.Number,
}

export const postImageSchema = new Schema<PostImages>({

    user_id: {
        type : Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    image_url:{
        type:Schema.Types.String,
        required: true
    },
    caption: {
        type: Schema.Types.String,
        required: false
    },
    description: {
        type: Schema.Types.String,
        required: false
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

postImageSchema.set('timestamps', true);


export const PostImagesModel = model<PostImages>('postsImage', postImageSchema);