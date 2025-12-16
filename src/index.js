// import modules --------------------------------------------->
import app from './app.js';
import 'dotenv/config';
import chalk from 'chalk';
import dbConnect from './database/db.config.js';

// server func ------------------------------------------------>
const startServer = () => {
    try {
        dbConnect();

        const port = process.env.PORT || 4000;
        app.listen(port, () => {
            console.log(
                chalk.blue(`Server running on http://localhost:${port}`)
            );
        });
    } catch (err) {
        console.log(chalk.red(`Error from index.js file: ${err.message}`));
        console.log(chalk.red('Server running fail!'));
    }
};

// server start ----------------------------------------------->
startServer();
