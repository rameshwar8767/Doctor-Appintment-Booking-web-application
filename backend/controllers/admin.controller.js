import validator from 'validator';
import bcrypt from 'bcryptjs';
import {v2 as cloudinary} from 'cloudinary';
import jwt from 'jsonwebtoken';
import Doctor from '../models/doctor.model.js';
const addDoctor = async (req,res)=>{
    try {
        const {name, email, phone, password, speciality, experience , about, fees, deagree, address} = req.body;
        const imageFile = req.file;
        console.log({name,deagree, email, phone, password, speciality, experience , about, fees, address}, imageFile);
        if(!name || !email || !phone || !password || !speciality || !experience || !about || !fees || !address || !imageFile || !deagree){
            return res.status(400).json({message: "All fields are required"});
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message: "Invalid email"});
        }
        if(password.length < 6){
            return res.status(400).json({message: "Password must be atleast 6 characters long"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});
        const imageUrl = imageUpload.secure_url;

        let parsedAddress;
        try {
        parsedAddress = JSON.parse(address);
        } catch (e) {
        parsedAddress = address;
        }

        const doctorData ={
            name,
            email,
            phone,
            password: hashedPassword,
            speciality,
            experience,
            about,
            fees,
            address: parsedAddress,
            image: imageUrl,
            date: Date.now(),
            deagree
        }
        const newDoctor = new Doctor(doctorData);
        const result = await newDoctor.save();


        if(result){
            res.status(201).json({message: "Doctor added successfully"});
        }else{
            res.status(500).json({message: "Failed to add doctor"});
        }

        

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
}

const loginAdmin = async(req,res)=>{
    try {
        const {email, password} = req.body; 
        if(!email || !password){
            return res.status(400).json({message: "All fields are required"});
            
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message: "Invalid email"});
        }
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({message: "Login successful", token});
            return res.status(200).json({message: "Login successful"});
        }else{
            return res.status(400).json({message: "Invalid credentials"});
        }
        const doctor = await Doctor.findOne({email});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

export {addDoctor,loginAdmin}