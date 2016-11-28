// temporary hack to make skate 4.1 work with TS
import 'tslib';

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

(window as any).__extends = _inherits;

import objectAssign from 'object-assign';
if (typeof Object.assign != 'function') {
    Object.assign = objectAssign;
}


import arrayFrom from 'array-from';
if (typeof Array.from != 'function') {
    Array.from = arrayFrom;
}

import 'skatejs-web-components';