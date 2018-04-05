import { message } from 'danger';
import fs from 'fs';
import path from 'path';
// const cheerio = require('cheerio');

// const modifiedMD = danger.git.modified_files.join("- ");
// message("Changed Files in this PR: \n - " + modifiedMD);

message('hello', 'index.js', 1);


const xml = fs.readSync(`${path.join(__dirname, 'reports', 'eslint-checkstyle.xml')}`, 'utf8');
// const lintResult = cheerio.load(xml);

message(xml);
