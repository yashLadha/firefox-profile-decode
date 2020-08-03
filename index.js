'use strict';

const fs = require('fs');
const { Readable } = require('stream');
const unzip = require('unzip');

const [,,base64File] = process.argv;

const data = fs.readFileSync(base64File);

const readable = new Readable({
  read() {
    this.push(Buffer.from(data.toString(), 'base64'));
  }
});

readable.pipe(unzip.Extract({ path: 'output/' }));
