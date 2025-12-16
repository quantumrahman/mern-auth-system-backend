// email func ------------------------------------------------->
const validateEmail = (email) => {
    if (!email || typeof email !== 'string') return false;

    const normalizedEmail = email.trim().toLowerCase();
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    const test = email_regex.test(normalizedEmail);

    return test;
};

// export modules --------------------------------------------->
export default validateEmail;
