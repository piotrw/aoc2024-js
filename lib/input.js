import fs from "fs";

const MODE_DEMO = 'demo';
const MODE_INPUT = 'input';

export const isDemo = () => !process.argv.some((v) => v === 'input');

export const loadData = (day) => {
    const dayString = String(day).padStart(2, "0");
    const mode = isDemo() ? MODE_DEMO : MODE_INPUT;
    const file = `./day${dayString}/${mode}.txt`;

    if(isNaN(day)) {
        console.error('Unknown day number');
        process.exit(1);
    }

    if (!fs.existsSync(file)) {
        console.error(`File ${file} not exists`);
        process.exit(1);
    }

    return fs.readFileSync(file, 'utf-8')
        .trim()
        .split('\n')
        .map((line) => line.trim());
}