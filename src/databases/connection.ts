import mongoose from 'mongoose';

export const databaseConnection = async () => {

    try{

        await mongoose.connect('mongodb://localhost:27017/linkedin-DB')
        console.log('Kodos! Database connected successfully')
    
    }catch(error){

        console.error("An error occur",error)

    }
   
}