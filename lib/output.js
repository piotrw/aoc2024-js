import {isDemo} from "./input.js";
import {EOL} from "node:os";

const COLOR_TITLE = `\x1b[1;33;42m`;
const COLOR_GREEN = `\x1b[32m`;
const COLOR_DEFAULT =  `\x1b[0m`

export const showHeader = (year, day, title) => {
    const dayString = String(day).padStart(2, "0");

    console.log(`${COLOR_TITLE} 🎁 Advent of Code ${year} 🎁 ${COLOR_DEFAULT}${EOL}`);
    console.log(`Day ${dayString}: ${title} ${EOL}`);
}

export const showResults = (result1, result2) => {
    console.log(`${COLOR_GREEN}==========================
    Result 1: ${result1}
    Result 2: ${result2}
    ${COLOR_DEFAULT}`);

    if (isDemo()) {
        console.log(`Demo mode. Run task with argument input`);
    }
}