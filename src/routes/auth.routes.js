// import modules --------------------------------------------->
import express from 'express';

// route ------------------------------------------------------>
const router = express.Router();

// declare route ---------------------------------------------->
router.route('/sign_up');
router.route('/sign_in');
router.route('/sign_out');

// export modules --------------------------------------------->
export default router;