'use strict';
require('fs').createReadStream(process.argv[2]).on('data', chunck => process.stdout.write(chunck))
  .on('error', err => process.stderr.write(`ERROR: ${err.message}\n`))