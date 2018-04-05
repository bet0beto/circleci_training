const { fail } =  require('danger');
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
const $ = cheerio.load(xml);
$('file').each((i, file) => {
   $(file).children('error').each((i, e) => {
        const error = $(e);
        console.log(path.relative('/home/circleci/code/', $(file).attr('name')));
        fail(error.attr('message'), path.relative('/home/circleci/code/', $(file).attr('name')), error.attr('line'));
   });
});
