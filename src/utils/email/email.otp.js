// import modules --------------------------------------------->
import resend from '../../config/resend.config.js';
import AppError from '../constant/app.error.js';
import emailOtpTemplate from '../../template/email.otp.template.js';

// send email func -------------------------------------------->
const sendOtpEmail = async (res, username, email, otp) => {
    try {
        const { error } = await resend.emails.send({
            from: 'R.Rahman <rakibulrahman.dev@gmail.com>',
            to: [email],
            subject: 'Please verify your email address.',
            html: emailOtpTemplate
                .replace('{otp}', otp)
                .replace('{username}', username),
        });

        if (error) {
            throw new AppError(
                `Internal server issues email cannot sent! ${error}`,
                {
                    status: 500,
                    code: 'INTERNAL_SERVER_ERROR',
                    details: null,
                }
            );
        }
    } catch (error) {
        throw new AppError(`Email cannot send! ${error}`, {
            status: 500,
            code: 'INTERNAL_SERVER_ERROR',
            details: null,
        });
    }
};

// export modules --------------------------------------------->
export default sendOtpEmail;