import mongoose, { Schema, model }  from 'mongoose';

export interface ComapanyJobs extends mongoose.Document{

    job_title: Schema.Types.String,
    job_location: Schema.Types.String,
    skills: Schema.Types.Array,
    Description: Schema.Types.String,
    number_of_openings: Schema.Types.Number,
    salary_offered: Schema.Types.Number,
    status: Schema.Types.Boolean

}

export const jobSchema = new Schema<ComapanyJobs>({

    job_title: {
        type: Schema.Types.String,
        required: true
    },
    job_location: {
        type: Schema.Types.String,
        required: true
    },
    skills: {
        type: Schema.Types.Array,
        required: true
    },
    Description: {
        type: Schema.Types.String,
        required: true
    },
    number_of_openings: {
        type: Schema.Types.Number,
        required: true
    },
    salary_offered: {
        type: Schema.Types.Number,
        required: true
    },
    status: {
        type: Schema.Types.Boolean,
        required: true,
        default: true
    }

})

jobSchema.set('timestamps', true)

export const JobModel = model<ComapanyJobs>('jobs', jobSchema)