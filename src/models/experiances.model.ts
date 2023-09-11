import mongoose, { Schema, model } from 'mongoose';
import { UserDocument } from './user.model';

export interface UserExperiance extends mongoose.Document{

    user_id: UserDocument | Schema.Types.ObjectId,
    title:Schema.Types.String,
    company:Schema.Types.String,
    location:Schema.Types.String,
    start_date:Schema.Types.Date,
    end_date:Schema.Types.Date,
    description:Schema.Types.String,


}

export const userExperiance = new Schema<UserExperiance>({

    user_id:{
        type: Schema.Types.ObjectId,
        required: true,
    },
    title: {
        type :Schema.Types.String,
        required: true
    },
    company: {
        type: Schema.Types.String,
        required: true
    },
    location: {
        type: Schema.Types.String,
        required: true
    },
    start_date: {
        type: Schema.Types.Date,
        required: true
    },
    end_date: {
        type: Schema.Types.Date,
        required: true
    },
    description : {
        type: Schema.Types.String,
        required: true
    }

})

userExperiance.set('timestamps', true);

export const ExperianceModel = model<UserExperiance>('experiances', userExperiance);



