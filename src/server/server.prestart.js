import environment from 'dotenv';
import chalk from 'chalk';

environment.config();

console.log(chalk.green(`Starting app in ${process.env.NODE_ENV} mode...`)); // eslint-disable-line no-console
