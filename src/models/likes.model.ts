import mongoose, { Schema, model } from 'mongoose';
import { UserDocument, userSchema } from './user.model';
import { Post } from './posts.model';

export interface Likes extends mongoose.Document{

    user_id: UserDocument | Schema.Types.ObjectId,
    post_id: Post | Schema.Types.ObjectId,
}

export const likeSchema = new Schema<Likes>({

    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    post_id: {
        type: Schema.Types.ObjectId,
        ref: 'posts',
        required: true,
    }

})

likeSchema.set('timestamps', true);

export const LikeModel = model<Likes>('likes', likeSchema);