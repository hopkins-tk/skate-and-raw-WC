// temporary hack to make skate 4.1 work with TS
import 'tslib';

import objectAssign from 'object-assign';
if (typeof Object.assign != 'function') {
    Object.assign = objectAssign;
}


import arrayFrom from 'array-from';
if (typeof Array.from != 'function') {
    Array.from = arrayFrom;
}

import 'skatejs-web-components';