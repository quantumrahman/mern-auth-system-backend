// import modules --------------------------------------------->
import bcrypt from 'bcrypt';

// hash func -------------------------------------------------->
const generateHashPass = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(password, salt);

    return hash_pass;
};

// export modules --------------------------------------------->
export default generateHashPass;
