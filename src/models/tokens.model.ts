import mongoose, { Schema, model } from 'mongoose';
import { UserDocument, UserModel } from './user.model';

export interface Tokens extends mongoose.Document{

    user_id: Schema.Types.ObjectId | UserDocument
    refresh_token_id: Schema.Types.UUID
    access_token_id: Schema.Types.UUID
}

export const tokenSchema = new Schema<Tokens>({

    user_id: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true
    },
    refresh_token_id: {
        type: Schema.Types.UUID,
        required: true
    },
    access_token_id: {
        type: Schema.Types.UUID,
        required: true
    }

})

tokenSchema.set('timestamps', true);

export const TokenModel = model<Tokens>('tokens', tokenSchema)