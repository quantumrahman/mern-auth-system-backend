// import modules --------------------------------------------->
import mongoose from 'mongoose';

const user_schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required!'],
            minLength: [6, 'Name must be at least 6 characters!'],
            maxLength: [16, 'Name must be at least 16 characters!'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Eamil is required!'],
            match: [/^\S+@\S+\.\S+$/, 'Email is invalid'],
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required!'],
            minLength: [8, 'Password must be at least 8 characters!'],
            trim: true,
        },
        is_verified: {
            type: Boolean,
            default: false,
        },
        verification_otp: String,
        verification_otp_expired_at: Date,
        reset_password_token: String,
        reset_password_token_expired_at: Date,
    },
    { timestamps: true }
);

// user model ------------------------------------------------->
const User = mongoose.model('User', user_schema);

// export modules --------------------------------------------->
export default User;
