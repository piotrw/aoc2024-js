import {isDemo} from "./input.js";

export const showHeader = (year, day, title) => {
    const dayString = String(day).padStart(2, "0");

    console.log(`🎁 Advent of Code ${year} 🎁`);
    console.log(`Day ${dayString}: ${title}\n`);
}

export const showResults = (result1, result2) => {
    console.log("Result 1: ", result1);
    console.log("Result 2: ", result2);

    if (isDemo()) {
        console.info("\nDemo mode. Run task with argument input");
    }
}