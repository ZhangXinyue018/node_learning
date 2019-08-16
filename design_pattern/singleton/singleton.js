'use strict';

class Test {
    static init() {
        console.log('enter init');
        if (!Test.instance) {
            console.log('init test instance');
            Test.instance = new Test();
        }
        return Test.instance;
    }
}

module.exports = Test.init();