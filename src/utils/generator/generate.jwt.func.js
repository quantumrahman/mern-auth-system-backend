// import modules --------------------------------------------->
import jwt from 'jsonwebtoken';
import 'dotenv/config';

// jwt func --------------------------------------------------->
const generateJWT = (id, email) => {
    const jwt_token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });

    return jwt_token;
};

// export modules --------------------------------------------->
export default generateJWT;
