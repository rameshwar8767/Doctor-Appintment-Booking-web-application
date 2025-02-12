import mongoose from "mongoose";
import pkg from 'validator';
const { trim } = pkg;

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        toLoewrCase: true
    },
    phone:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        toLoewrCase: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    image:{
        type:String,
        required: true
    },
    speciality:{
        type:String,
        required: true,
    },
    deagree:{
        type:String,
        required: true
    },
    experience:{
        type:String,
        required: true
    },
    about:{
        type:String,
        required: true
    },
    available:{
        type:Boolean,
        default: true
    },
    fees:{
        type:Number,
        required: true
    },
    address:{
        type:Object,
        required: true
    },
    date:{
        type:Date,
        default: Date.now,
        required: true
    },
    slots:{
        type:Object,
        default:{}
    }

},{minimize: false , timestamps: true});

 const Doctor = mongoose.models.Doctor || mongoose.model('Doctor',doctorSchema);
 export default Doctor;