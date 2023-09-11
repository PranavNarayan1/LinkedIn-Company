import mongoose, {Schema, model} from 'mongoose';


export interface UserSession extends mongoose.Document{

    user_id: Schema.Types.ObjectId,
    is_active: Schema.Types.Boolean,
    // session_count: Schema.Types.Number

}

export const userSession = new Schema<UserSession>({

    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    is_active: {
        type: Schema.Types.Boolean,
        required: true,
        default: false
    }

})

userSession.set('timestamps', true);

export const UserSession = model<UserSession>('sessions',userSession);