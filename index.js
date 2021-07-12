const chalk = require('chalk');

module.exports = {
    addOne: async (number) => {
        console.log(chalk.red(`${number += 1}`));
        return number += 1;
    }
};