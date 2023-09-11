import mongoose, { Schema, model} from 'mongoose';
import { UserDocument } from './user.model';


export enum STATUS {
    accepted = 'ACCEPTED',
    rejected = 'REJECTED',
    pending = 'PENDING'
}

export interface Connections extends mongoose.Document{

    sender_id: UserDocument | Schema.Types.ObjectId,
    receiver_id: UserDocument | Schema.Types.ObjectId,
    status: STATUS

}

export const connectionSchema = new Schema<Connections>({

    sender_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    receiver_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    status: {
        type: Schema.Types.String,
        enum: Object.values(STATUS),
        default: STATUS.pending
    }

})

connectionSchema.set('timestamps', true);

export const ConnectionModel = model<Connections>('connections', connectionSchema);