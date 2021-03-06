// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.8-2-3
description: Object.seal - inherited accessor properties are ignored
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {};

        Object.defineProperty(proto, "Father", {
            get: function () {
                return 10;
            },
            configurable: true
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();
        var preCheck = Object.isExtensible(child);
        Object.seal(child);

        var beforeDeleted = proto.hasOwnProperty("Father");
        delete proto.Father;
        var afterDeleted = proto.hasOwnProperty("Father");

        return preCheck && beforeDeleted && !afterDeleted;
    }
runTestCase(testcase);
