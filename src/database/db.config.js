// import modules --------------------------------------------->
import mongoose from 'mongoose';
import 'dotenv/config';
import chalk from 'chalk';

// connect func ----------------------------------------------->
const dbConnect = async () => {
    try {
        const db_uri = process.env.DB_URI.replace(
            '<db_password>',
            process.env.DB_PASS
        );
        await mongoose.connect(db_uri);
        console.log(chalk.cyan('MongoDB connected successfully!'));
    } catch (err) {
        console.log(chalk.red('MongoDB connection error!'));
        process.exit(1);
    }
};

// export modules --------------------------------------------->
export default dbConnect;
