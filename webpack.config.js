const path = require('path');

module.exports = {
  entry: 'web', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
    chunkFormat: 'array-push', 
  },
 };
