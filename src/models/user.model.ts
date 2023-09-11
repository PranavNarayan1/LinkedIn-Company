import mongoose, { Schema, model } from 'mongoose';
import { Comapny } from './company.model';


export interface UserEducation{
    user_id: Schema.Types.ObjectId | UserDocument
    school_name:Schema.Types.String,
    degree:Schema.Types.String,
    field_of_study:Schema.Types.String,
    start_date:Schema.Types.Date,
    end_date:Schema.Types.Date

}


export interface UserDocument extends mongoose.Document {

    first_name: Schema.Types.String,
    last_name: Schema.Types.String,
    username: Schema.Types.String,
    email: Schema.Types.String,
    mobile_number: Schema.Types.Number,
    password: Schema.Types.String,
    dob:Schema.Types.Date,
    about:Schema.Types.String,
    profile_picture:Schema.Types.Buffer,
    connection_count: Schema.Types.Number,
    education: UserEducation,
    skills:Schema.Types.Array,
    working_in: Comapny | Schema.Types.String,
    designation: Schema.Types.String,
    start_date: Schema.Types.Date,
    is_verified: Schema.Types.Boolean
    verification_token: Schema.Types.String

}


export const userEducation = new Schema<UserEducation>({

    user_id:{
        type:Schema.Types.ObjectId,
        ref: 'users'
    },
    school_name: {
        type: Schema.Types.String,
        required: false,
    },
    degree: {
        type: Schema.Types.String,
        required: false,
    },
    field_of_study: {
        type: Schema.Types.String,
        required: false,
    },
    start_date: {
        type: Schema.Types.Date,
        required: false,
    },
    end_date: {
        type: Schema.Types.Date,
        required: false
    }

},
);



export const userSchema = new Schema<UserDocument>({

    first_name: {
        type: Schema.Types.String,
        required: true,
    },
    last_name: {
        type: Schema.Types.String,
        required: true,
    },
    username: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    mobile_number:{
        type: Schema.Types.Number,
        required: true,
        unique: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    dob: {
        type: Schema.Types.Date,
        required: true
    },
    about: {
        type: Schema.Types.String,
        required: false
    },
    profile_picture: {
        type: Schema.Types.Buffer,
        required: false,
    },
    connection_count: {
        type:Schema.Types.Number,
        required:false,
    },
    skills:{
        type: Schema.Types.Array,
        required: false
    },
    working_in: {
        type: Schema.Types.String,
        ref: 'companies',
        required: false,
        default: ""
    },
    designation: {
        type: Schema.Types.String,
        required: false,
        default: ""
    },
    start_date: {
        type: Schema.Types.Date,
        required: false,
    },
    is_verified: {
        type: Schema.Types.Boolean,
        required: false,
        default: false
    },
    verification_token: {
        type: Schema.Types.String,
        required: false,
        default: ""
    }


})

userSchema.set('timestamps', true);


export const EducationModel = model<UserEducation>('educations', userEducation);
export const UserModel = model<UserDocument>('users', userSchema);

