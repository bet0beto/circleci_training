import { message, danger } from 'danger';
// const { message, danger } = require('danger');
// import fs from 'fs';
const fs = require('fs');
// import path from 'path';
const path = require('path');
const cheerio = require('cheerio');

// const modifiedMD = danger.git.modified_files.join("- ");
// message("Changed Files in this PR: \n - " + modifiedMD);

// message('hello', 'index.js', 1);


const xml = fs.readFileSync(`${path.join(__dirname, 'reports', 'eslint-checkstyle.xml')}`, 'utf8');

console.log(`${path.join(__dirname, 'reports', 'eslint-checkstyle.xml')}`);
console.log(xml);
const lintResult = cheerio.load(xml);
for (const file of lintResult('file')) {
    for (const error of file.children('error')) {
        message(error.attr('message'), file.attr('name'), error.attr('line'));
    }
}
