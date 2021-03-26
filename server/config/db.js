import mongoose from 'mongoose'

const connectDB = async ()=>{

    await mongoose.connect(process.env.CONNECTION_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:true
    })

    console.log(`MongoDB connected`)
}

export default connectDB;