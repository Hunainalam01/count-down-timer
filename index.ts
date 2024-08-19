import chalk from "chalk"
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";

const userAns = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Enter the amount of seconds:",
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.red.bold("Enter a valid number !!")
            }else if (input > 300){
                return chalk.yellow.bold("Seconds must be in under 300 seconds !!")
            }else{
                return true;
            }
        }
    }
]);

let input = userAns.userInput;

function timeStart(val: number) {
    const startTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(startTime);
    setInterval((() => {
        const currentTime = new Date;
        const timeDifference = differenceInSeconds(intervalTime, currentTime)

        if (timeDifference <= 0) {
            console.log(chalk.red.bold(`Timer Expired !!`));
            process.exit()
        }
        const min = Math.floor((timeDifference % (3600 * 24)) / 3600)
        const sec = Math.floor(timeDifference % 60)
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);

    }), 1000);
}

timeStart(input)    