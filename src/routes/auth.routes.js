// import modules --------------------------------------------->
import express from 'express';
import authSignupController from '../controllers/auth.signup.controller.js';

// route ------------------------------------------------------>
const router = express.Router();

// declare route ---------------------------------------------->
router.route('/sign_up').get(authSignupController);
router.route('/sign_in');
router.route('/sign_out');

// export modules --------------------------------------------->
export default router;
