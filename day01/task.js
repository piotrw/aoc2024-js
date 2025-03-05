/*
https://adventofcode.com/2024/day/1
 */
import fs from "fs";

console.log("Day 01 / Task 01\n");

const mode = !!process.argv[2] && process.argv[2] === 'input' ? 'input' : 'demo';
const file = `./day01/${mode}.txt`;

if (!fs.existsSync(file)) {
    console.error(`File ${file} not exists`);
    process.exit(1);
}

const data = fs.readFileSync(file, 'utf-8').trim().split('\r\n');

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

console.log("Result 1: ", task1(left, right));
console.log("Result 2: ", task2(left, right));

if (mode === 'demo') {
    console.info("\nDemo mode. Run task with argument input");
}