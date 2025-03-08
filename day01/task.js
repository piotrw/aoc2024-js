/*
https://adventofcode.com/2024/day/1
 */

import {loadData} from "../lib/input.js";
import {showHeader, showResults} from "../lib/output.js";

showHeader(2024, 1, 'Historian Hysteria');

const data = loadData()

// parse data
const left = data.map((line) => line.split('   ')[0]);
const right = data.map((line) => line.split('   ')[1]);

const task1 = (left, right) => {
    const sortedLeft = left.slice().sort();
    const sortedRight = right.slice().sort();

    return sortedLeft.reduce((carry, value, index) => carry + Math.max(sortedRight[index], value) - Math.min(sortedRight[index], value), 0);
}

const task2 = (left, right) => {
    // count values
    let count = new Map();
    right.forEach((value) => {
        if (!count.has(value)) count.set(value, 0);
        count.set(value, count.get(value) + 1);
    });

    let sum = 0;
    left.forEach((value) => {
        const score = count.get(value) ?? 0;
        sum += value * score;
    })

    return sum;
}

showResults(
    task1(left, right),
    task2(left, right)
);