// import modules --------------------------------------------->
import express from 'express';
import authSignupController from '../controllers/auth.signup.controller.js';

// route ------------------------------------------------------>
const router = express.Router();

// declare route ---------------------------------------------->
router.route('/sign_up').post(authSignupController);
router.route('/sign_in');
router.route('/sign_out');

// export modules --------------------------------------------->
export default router;
