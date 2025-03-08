/*
https://adventofcode.com/2024/day/2
 */

import {showHeader, showResults} from "../lib/output.js";
import {loadData} from "../lib/input.js";

const day = 2;

showHeader(2024, day, "Red-Nosed Reports")

const data = loadData(day)

const task1 = (data) => {
    if (!Array.isArray(data)) {
        throw new Error('Invalid input');
    }

    return data.reduce((carry, datum) => carry + Number(safeGuard(datum.split(' '))), 0);
}

const task2 = (data) => {
    if (!Array.isArray(data)) {
        throw new Error('Invalid input');
    }

    let safeCount = 0;

    data.forEach((datum) => {
        let isSafe = false;
        let line = datum.split(' ');
        line.forEach((value, idx) => {
            const test = new Map(line.map((v, k) => [k, v]));
            test.delete(idx);
            isSafe |= safeGuard([...test.values()]);
        });
        
        if(isSafe) safeCount++;
    })

    return safeCount;
}

const safeGuard = (line) => {
    let prevValue = null;
    let prevOrder = null;

    for (const value of line) {
        const currentValue = parseInt(value);

        if (prevValue === null) {
            prevValue = currentValue;
            continue;
        }

        // The levels are either all increasing or all decreasing.
        if (currentValue === prevValue) return false;

        // Any two adjacent levels differ by at least one and at most three.
        if (Math.abs(prevValue - currentValue) > 3) return false;

        let currentOrder = prevValue < currentValue ? 'inc' : 'dec';

        if (prevOrder !== null && currentOrder !== prevOrder) return false;

        prevOrder = currentOrder;
        prevValue = currentValue;
    }

    return true;
}


showResults(
    task1(data),
    task2(data),
)