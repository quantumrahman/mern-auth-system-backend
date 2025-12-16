// import modules --------------------------------------------->
import bcrypt from 'bcrypt';

// compare func ----------------------------------------------->
const validatorCompare = async (input_pass, hash_pass) => {
    const isMatch = await bcrypt.compare(input_pass, hash_pass);
    return isMatch;
};

// export modules --------------------------------------------->
export default validatorCompare;
