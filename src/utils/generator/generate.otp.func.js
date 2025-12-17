// import modules --------------------------------------------->
import crypto from 'crypto';

// otp func --------------------------------------------------->
const generateOTP = (min = 100000, max = 1000000) => {
    const six_digit_otp = crypto.randomInt(min, max).toString();
    return six_digit_otp;
};

// export modules --------------------------------------------->
export default generateOTP;
