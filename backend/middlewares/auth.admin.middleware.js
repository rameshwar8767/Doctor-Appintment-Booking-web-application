import jwt from 'jsonwebtoken';

const authAdmin = async(req, res, next) => {
    try {
        const adminToken = req.headers['admintoken'];
        console.log(adminToken);
        
        if (!adminToken) {
            return res.status(400).json({message: "Invalid Authentication"});
        }
        const adminToken_decode = await jwt.verify(adminToken, process.env.JWT_SECRET);
        if(adminToken_decode != process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.status(400).json({message: "Invalid Authentication"});
        }
        next();
    } catch (error) {
        return res.status(500).json({message: error.message});
        console.log(error);
        
    }
}

export default authAdmin;