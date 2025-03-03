/*
https://adventofcode.com/2024/day/1
 */
import fs from 'fs';

console.log('Day 01 / Task 01');

// const data = fs.readFileSync('./day01/demo.txt', 'utf-8').trim().split('\r\n');
const data = fs.readFileSync('./day01/input.txt', 'utf-8').trim().split('\r\n');

const left = data.map((line) => line.split('   ')[0]);
const right = data.map((line) => line.split('   ')[1]);
const task1 = (left, right) => {
    const sortedLeft = left.slice().sort();
    const sortedRight = right.slice().sort();

    return sortedLeft.reduce((carry, value, index) => carry + Math.max(sortedRight[index], value) - Math.min(sortedRight[index], value), 0);
}

const task2 = (left, right) => {

    return 0;
}

console.log({
    result1: task1(left, right),
    result2: task2(left, right),
});