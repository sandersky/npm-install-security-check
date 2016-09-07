#! /usr/bin/env node

var msg = 'Warning: You are running "npm install" with scripts enabled which is a potential security risk.\n' +
          'You should run npm install with the --ignore-scripts flag or update your npm config via:\n\n' +
          '  npm config set ignore-scripts true\n\n' +
          'For more information read http://blog.npmjs.org/post/141702881055/package-install-scripts-vulnerability'

console.log(msg)
