// import modules --------------------------------------------->
import chalk from 'chalk';
import User from '../models/auth.model.js';
import AppError from '../utils/constant/app.error.js';
import generateOtp from '../utils/generator/generate.otp.func.js';
import generateJwt from '../utils/generator/generate.jwt.func.js';
import generateHash from '../utils/generator/generate.hash.func.js';
import validateEmail from '../utils/validator/validate.email.func.js';

// signup controller ------------------------------------------>
const signup_controller = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new AppError('All fields is required!', {
                status: 400,
                code: 'VALIDATION_ERROR',
                details: {
                    fields: ['name', 'email', 'password'],
                },
            });
        }

        const emailTest = validateEmail(email);

        if (!emailTest) {
            throw new AppError('Invalid email address!', {
                status: 400,
                code: 'VALIDATION_ERROR',
                details: {
                    fields: 'email',
                },
            });
        }

        const minPasswordLength = 8;

        if (password.length < minPasswordLength) {
            throw new AppError('Password must be at least 16 characters!', {
                status: 400,
                code: 'VALIDATION_ERROR',
                details: {
                    fields: 'password',
                },
            });
        }

        const exitstingUser = await User.findOne({ email });

        if (exitstingUser) {
            throw new AppError('Email already taken!', {
                status: 400,
                code: 'DUPLICATE_EMAIL',
                details: {
                    fields: 'email',
                },
            });
        }

        const passwordHash = await generateHash(password);
        const verificationOtp = generateOtp(100000, 1000000);
        const verificationExpDate = Date.now() + 24 * 60 * 60 * 1000;

        const newUser = new User({
            name,
            email,
            password: passwordHash,
            verification_otp: verificationOtp,
            verification_otp_expired_at: verificationExpDate,
        });

        await newUser.save();

        const userObj = newUser.toObject();
        delete userObj.password;

        const token = generateJwt(newUser._id, newUser.email);
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json({
            success: true,
            message: 'User register successfully!',
            user: userObj,
        });
    } catch (error) {
        console.error(`[SIGN_UP_CONTROLLER_ERROR]: ${error}`);
        next(error);
    }
};

// export modules --------------------------------------------->
export default signup_controller;
