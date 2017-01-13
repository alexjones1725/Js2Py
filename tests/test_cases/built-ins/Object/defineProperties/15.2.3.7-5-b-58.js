// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-58
description: >
    Object.defineProperties - value of 'enumerable' property of
    'descObj' is new Boolean(false) which is treated as true value
    (8.10.5 step 3.b)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var accessed = false;

        Object.defineProperties(obj, {
            prop: {
                enumerable: new Boolean(false)
            }
        });
        for (var property in obj) {
            if (property === "prop") {
                accessed = true;
            }
        }
        return accessed;
    }
runTestCase(testcase);