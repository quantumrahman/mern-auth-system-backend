// import modules --------------------------------------------->
import User from '../models/auth.model.js';
import AppError from '../utils/constant/app.error.js';
import generateOtp from '../utils/generator/generate.otp.func.js';
import generateJwt from '../utils/generator/generate.jwt.func.js';
import generateHash from '../utils/generator/generate.hash.func.js';

// signup controller ------------------------------------------>
const signup_controller = async (req, res) => {
    res.send('sign up controller');
};

// export modules --------------------------------------------->
export default signup_controller;
