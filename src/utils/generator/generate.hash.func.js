// import modules --------------------------------------------->
import bcrypt from 'bcrypt';

// hash func -------------------------------------------------->
const generateHashPass = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
};

// export modules --------------------------------------------->
export default generateHashPass;
