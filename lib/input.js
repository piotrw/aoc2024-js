import fs from "fs";

const MODE_DEMO = 'demo';
const MODE_INPUT = 'input';

export const isDemo = () => !process.argv.some((v) => v === 'input');

export const loadData = () => {
    const mode = isDemo() ? MODE_DEMO : MODE_INPUT;
    const file = `./day01/${mode}.txt`;

    if (!fs.existsSync(file)) {
        console.error(`File ${file} not exists`);
        process.exit(1);
    }

    return fs.readFileSync(file, 'utf-8').trim().split('\r\n');
}