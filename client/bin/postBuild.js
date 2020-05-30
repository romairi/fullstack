const fs = require('fs');

fs.copyFileSync('./build/index.html', '../server/views/index.ejs');
