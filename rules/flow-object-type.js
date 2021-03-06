"use strict";

var isWarnedForDeprecation = false;
module.exports = function() {
    return {
        Program() {
            if (isWarnedForDeprecation || /\=-(f|-format)=/.test(process.argv.join('='))) {
              return;
            }

            /* eslint-disable no-console */
            console.log('The babel/flow-object-type rule is deprecated. Please ' +
                        'use the flowtype/object-type-delimiter rule instead.\n' +
                        'Check out https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-object-type-delimiter');
            /* eslint-enable no-console */
            isWarnedForDeprecation = true;
        }
    };
};

module.exports.schema = [
  {
    'enum': ['semicolon', 'comma'],
  }
];
