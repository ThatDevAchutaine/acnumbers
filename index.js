const chalk = require('chalk');

module.exports = {
    addOne: async (number) => {
        if (!number) throw new TypeError("No number was found to add on to!?")

        console.log(chalk.red(`${number += 1}`));
        return number += 1;
    }
};