(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";

require("core-js/es6");

require("core-js/fn/array/includes");

require("core-js/fn/string/pad-start");

require("core-js/fn/string/pad-end");

require("core-js/fn/symbol/async-iterator");

require("core-js/fn/object/get-own-property-descriptors");

require("core-js/fn/object/values");

require("core-js/fn/object/entries");

require("core-js/fn/promise/finally");

require("core-js/web");

require("regenerator-runtime/runtime");

if (global._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

global._babelPolyfill = true;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"core-js/es6":2,"core-js/fn/array/includes":3,"core-js/fn/object/entries":4,"core-js/fn/object/get-own-property-descriptors":5,"core-js/fn/object/values":6,"core-js/fn/promise/finally":7,"core-js/fn/string/pad-end":8,"core-js/fn/string/pad-start":9,"core-js/fn/symbol/async-iterator":10,"core-js/web":275,"regenerator-runtime/runtime":283}],2:[function(require,module,exports){
require('../modules/es6.symbol');
require('../modules/es6.object.create');
require('../modules/es6.object.define-property');
require('../modules/es6.object.define-properties');
require('../modules/es6.object.get-own-property-descriptor');
require('../modules/es6.object.get-prototype-of');
require('../modules/es6.object.keys');
require('../modules/es6.object.get-own-property-names');
require('../modules/es6.object.freeze');
require('../modules/es6.object.seal');
require('../modules/es6.object.prevent-extensions');
require('../modules/es6.object.is-frozen');
require('../modules/es6.object.is-sealed');
require('../modules/es6.object.is-extensible');
require('../modules/es6.object.assign');
require('../modules/es6.object.is');
require('../modules/es6.object.set-prototype-of');
require('../modules/es6.object.to-string');
require('../modules/es6.function.bind');
require('../modules/es6.function.name');
require('../modules/es6.function.has-instance');
require('../modules/es6.parse-int');
require('../modules/es6.parse-float');
require('../modules/es6.number.constructor');
require('../modules/es6.number.to-fixed');
require('../modules/es6.number.to-precision');
require('../modules/es6.number.epsilon');
require('../modules/es6.number.is-finite');
require('../modules/es6.number.is-integer');
require('../modules/es6.number.is-nan');
require('../modules/es6.number.is-safe-integer');
require('../modules/es6.number.max-safe-integer');
require('../modules/es6.number.min-safe-integer');
require('../modules/es6.number.parse-float');
require('../modules/es6.number.parse-int');
require('../modules/es6.math.acosh');
require('../modules/es6.math.asinh');
require('../modules/es6.math.atanh');
require('../modules/es6.math.cbrt');
require('../modules/es6.math.clz32');
require('../modules/es6.math.cosh');
require('../modules/es6.math.expm1');
require('../modules/es6.math.fround');
require('../modules/es6.math.hypot');
require('../modules/es6.math.imul');
require('../modules/es6.math.log10');
require('../modules/es6.math.log1p');
require('../modules/es6.math.log2');
require('../modules/es6.math.sign');
require('../modules/es6.math.sinh');
require('../modules/es6.math.tanh');
require('../modules/es6.math.trunc');
require('../modules/es6.string.from-code-point');
require('../modules/es6.string.raw');
require('../modules/es6.string.trim');
require('../modules/es6.string.iterator');
require('../modules/es6.string.code-point-at');
require('../modules/es6.string.ends-with');
require('../modules/es6.string.includes');
require('../modules/es6.string.repeat');
require('../modules/es6.string.starts-with');
require('../modules/es6.string.anchor');
require('../modules/es6.string.big');
require('../modules/es6.string.blink');
require('../modules/es6.string.bold');
require('../modules/es6.string.fixed');
require('../modules/es6.string.fontcolor');
require('../modules/es6.string.fontsize');
require('../modules/es6.string.italics');
require('../modules/es6.string.link');
require('../modules/es6.string.small');
require('../modules/es6.string.strike');
require('../modules/es6.string.sub');
require('../modules/es6.string.sup');
require('../modules/es6.date.now');
require('../modules/es6.date.to-json');
require('../modules/es6.date.to-iso-string');
require('../modules/es6.date.to-string');
require('../modules/es6.date.to-primitive');
require('../modules/es6.array.is-array');
require('../modules/es6.array.from');
require('../modules/es6.array.of');
require('../modules/es6.array.join');
require('../modules/es6.array.slice');
require('../modules/es6.array.sort');
require('../modules/es6.array.for-each');
require('../modules/es6.array.map');
require('../modules/es6.array.filter');
require('../modules/es6.array.some');
require('../modules/es6.array.every');
require('../modules/es6.array.reduce');
require('../modules/es6.array.reduce-right');
require('../modules/es6.array.index-of');
require('../modules/es6.array.last-index-of');
require('../modules/es6.array.copy-within');
require('../modules/es6.array.fill');
require('../modules/es6.array.find');
require('../modules/es6.array.find-index');
require('../modules/es6.array.species');
require('../modules/es6.array.iterator');
require('../modules/es6.regexp.constructor');
require('../modules/es6.regexp.to-string');
require('../modules/es6.regexp.flags');
require('../modules/es6.regexp.match');
require('../modules/es6.regexp.replace');
require('../modules/es6.regexp.search');
require('../modules/es6.regexp.split');
require('../modules/es6.promise');
require('../modules/es6.map');
require('../modules/es6.set');
require('../modules/es6.weak-map');
require('../modules/es6.weak-set');
require('../modules/es6.typed.array-buffer');
require('../modules/es6.typed.data-view');
require('../modules/es6.typed.int8-array');
require('../modules/es6.typed.uint8-array');
require('../modules/es6.typed.uint8-clamped-array');
require('../modules/es6.typed.int16-array');
require('../modules/es6.typed.uint16-array');
require('../modules/es6.typed.int32-array');
require('../modules/es6.typed.uint32-array');
require('../modules/es6.typed.float32-array');
require('../modules/es6.typed.float64-array');
require('../modules/es6.reflect.apply');
require('../modules/es6.reflect.construct');
require('../modules/es6.reflect.define-property');
require('../modules/es6.reflect.delete-property');
require('../modules/es6.reflect.enumerate');
require('../modules/es6.reflect.get');
require('../modules/es6.reflect.get-own-property-descriptor');
require('../modules/es6.reflect.get-prototype-of');
require('../modules/es6.reflect.has');
require('../modules/es6.reflect.is-extensible');
require('../modules/es6.reflect.own-keys');
require('../modules/es6.reflect.prevent-extensions');
require('../modules/es6.reflect.set');
require('../modules/es6.reflect.set-prototype-of');
module.exports = require('../modules/_core');

},{"../modules/_core":29,"../modules/es6.array.copy-within":127,"../modules/es6.array.every":128,"../modules/es6.array.fill":129,"../modules/es6.array.filter":130,"../modules/es6.array.find":132,"../modules/es6.array.find-index":131,"../modules/es6.array.for-each":133,"../modules/es6.array.from":134,"../modules/es6.array.index-of":135,"../modules/es6.array.is-array":136,"../modules/es6.array.iterator":137,"../modules/es6.array.join":138,"../modules/es6.array.last-index-of":139,"../modules/es6.array.map":140,"../modules/es6.array.of":141,"../modules/es6.array.reduce":143,"../modules/es6.array.reduce-right":142,"../modules/es6.array.slice":144,"../modules/es6.array.some":145,"../modules/es6.array.sort":146,"../modules/es6.array.species":147,"../modules/es6.date.now":148,"../modules/es6.date.to-iso-string":149,"../modules/es6.date.to-json":150,"../modules/es6.date.to-primitive":151,"../modules/es6.date.to-string":152,"../modules/es6.function.bind":153,"../modules/es6.function.has-instance":154,"../modules/es6.function.name":155,"../modules/es6.map":156,"../modules/es6.math.acosh":157,"../modules/es6.math.asinh":158,"../modules/es6.math.atanh":159,"../modules/es6.math.cbrt":160,"../modules/es6.math.clz32":161,"../modules/es6.math.cosh":162,"../modules/es6.math.expm1":163,"../modules/es6.math.fround":164,"../modules/es6.math.hypot":165,"../modules/es6.math.imul":166,"../modules/es6.math.log10":167,"../modules/es6.math.log1p":168,"../modules/es6.math.log2":169,"../modules/es6.math.sign":170,"../modules/es6.math.sinh":171,"../modules/es6.math.tanh":172,"../modules/es6.math.trunc":173,"../modules/es6.number.constructor":174,"../modules/es6.number.epsilon":175,"../modules/es6.number.is-finite":176,"../modules/es6.number.is-integer":177,"../modules/es6.number.is-nan":178,"../modules/es6.number.is-safe-integer":179,"../modules/es6.number.max-safe-integer":180,"../modules/es6.number.min-safe-integer":181,"../modules/es6.number.parse-float":182,"../modules/es6.number.parse-int":183,"../modules/es6.number.to-fixed":184,"../modules/es6.number.to-precision":185,"../modules/es6.object.assign":186,"../modules/es6.object.create":187,"../modules/es6.object.define-properties":188,"../modules/es6.object.define-property":189,"../modules/es6.object.freeze":190,"../modules/es6.object.get-own-property-descriptor":191,"../modules/es6.object.get-own-property-names":192,"../modules/es6.object.get-prototype-of":193,"../modules/es6.object.is":197,"../modules/es6.object.is-extensible":194,"../modules/es6.object.is-frozen":195,"../modules/es6.object.is-sealed":196,"../modules/es6.object.keys":198,"../modules/es6.object.prevent-extensions":199,"../modules/es6.object.seal":200,"../modules/es6.object.set-prototype-of":201,"../modules/es6.object.to-string":202,"../modules/es6.parse-float":203,"../modules/es6.parse-int":204,"../modules/es6.promise":205,"../modules/es6.reflect.apply":206,"../modules/es6.reflect.construct":207,"../modules/es6.reflect.define-property":208,"../modules/es6.reflect.delete-property":209,"../modules/es6.reflect.enumerate":210,"../modules/es6.reflect.get":213,"../modules/es6.reflect.get-own-property-descriptor":211,"../modules/es6.reflect.get-prototype-of":212,"../modules/es6.reflect.has":214,"../modules/es6.reflect.is-extensible":215,"../modules/es6.reflect.own-keys":216,"../modules/es6.reflect.prevent-extensions":217,"../modules/es6.reflect.set":219,"../modules/es6.reflect.set-prototype-of":218,"../modules/es6.regexp.constructor":220,"../modules/es6.regexp.flags":221,"../modules/es6.regexp.match":222,"../modules/es6.regexp.replace":223,"../modules/es6.regexp.search":224,"../modules/es6.regexp.split":225,"../modules/es6.regexp.to-string":226,"../modules/es6.set":227,"../modules/es6.string.anchor":228,"../modules/es6.string.big":229,"../modules/es6.string.blink":230,"../modules/es6.string.bold":231,"../modules/es6.string.code-point-at":232,"../modules/es6.string.ends-with":233,"../modules/es6.string.fixed":234,"../modules/es6.string.fontcolor":235,"../modules/es6.string.fontsize":236,"../modules/es6.string.from-code-point":237,"../modules/es6.string.includes":238,"../modules/es6.string.italics":239,"../modules/es6.string.iterator":240,"../modules/es6.string.link":241,"../modules/es6.string.raw":242,"../modules/es6.string.repeat":243,"../modules/es6.string.small":244,"../modules/es6.string.starts-with":245,"../modules/es6.string.strike":246,"../modules/es6.string.sub":247,"../modules/es6.string.sup":248,"../modules/es6.string.trim":249,"../modules/es6.symbol":250,"../modules/es6.typed.array-buffer":251,"../modules/es6.typed.data-view":252,"../modules/es6.typed.float32-array":253,"../modules/es6.typed.float64-array":254,"../modules/es6.typed.int16-array":255,"../modules/es6.typed.int32-array":256,"../modules/es6.typed.int8-array":257,"../modules/es6.typed.uint16-array":258,"../modules/es6.typed.uint32-array":259,"../modules/es6.typed.uint8-array":260,"../modules/es6.typed.uint8-clamped-array":261,"../modules/es6.weak-map":262,"../modules/es6.weak-set":263}],3:[function(require,module,exports){
require('../../modules/es7.array.includes');
module.exports = require('../../modules/_core').Array.includes;

},{"../../modules/_core":29,"../../modules/es7.array.includes":264}],4:[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/_core').Object.entries;

},{"../../modules/_core":29,"../../modules/es7.object.entries":265}],5:[function(require,module,exports){
require('../../modules/es7.object.get-own-property-descriptors');
module.exports = require('../../modules/_core').Object.getOwnPropertyDescriptors;

},{"../../modules/_core":29,"../../modules/es7.object.get-own-property-descriptors":266}],6:[function(require,module,exports){
require('../../modules/es7.object.values');
module.exports = require('../../modules/_core').Object.values;

},{"../../modules/_core":29,"../../modules/es7.object.values":267}],7:[function(require,module,exports){
'use strict';
require('../../modules/es6.promise');
require('../../modules/es7.promise.finally');
module.exports = require('../../modules/_core').Promise['finally'];

},{"../../modules/_core":29,"../../modules/es6.promise":205,"../../modules/es7.promise.finally":268}],8:[function(require,module,exports){
require('../../modules/es7.string.pad-end');
module.exports = require('../../modules/_core').String.padEnd;

},{"../../modules/_core":29,"../../modules/es7.string.pad-end":269}],9:[function(require,module,exports){
require('../../modules/es7.string.pad-start');
module.exports = require('../../modules/_core').String.padStart;

},{"../../modules/_core":29,"../../modules/es7.string.pad-start":270}],10:[function(require,module,exports){
require('../../modules/es7.symbol.async-iterator');
module.exports = require('../../modules/_wks-ext').f('asyncIterator');

},{"../../modules/_wks-ext":124,"../../modules/es7.symbol.async-iterator":271}],11:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],12:[function(require,module,exports){
var cof = require('./_cof');
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

},{"./_cof":25}],13:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_hide":47,"./_wks":125}],14:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],15:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":56}],16:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

},{"./_to-absolute-index":110,"./_to-length":114,"./_to-object":115}],17:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

},{"./_to-absolute-index":110,"./_to-length":114,"./_to-object":115}],18:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":110,"./_to-iobject":113,"./_to-length":114}],19:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":22,"./_ctx":31,"./_iobject":52,"./_to-length":114,"./_to-object":115}],20:[function(require,module,exports){
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var toLength = require('./_to-length');

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

},{"./_a-function":11,"./_iobject":52,"./_to-length":114,"./_to-object":115}],21:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":54,"./_is-object":56,"./_wks":125}],22:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":21}],23:[function(require,module,exports){
'use strict';
var aFunction = require('./_a-function');
var isObject = require('./_is-object');
var invoke = require('./_invoke');
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"./_a-function":11,"./_invoke":51,"./_is-object":56}],24:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":25,"./_wks":125}],25:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],26:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":14,"./_ctx":31,"./_descriptors":35,"./_for-of":44,"./_iter-define":60,"./_iter-step":62,"./_meta":69,"./_object-create":73,"./_object-dp":74,"./_redefine-all":92,"./_set-species":96,"./_validate-collection":122}],27:[function(require,module,exports){
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_an-instance":14,"./_an-object":15,"./_array-methods":19,"./_for-of":44,"./_has":46,"./_is-object":56,"./_meta":69,"./_redefine-all":92,"./_validate-collection":122}],28:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var redefine = require('./_redefine');
var redefineAll = require('./_redefine-all');
var meta = require('./_meta');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var fails = require('./_fails');
var $iterDetect = require('./_iter-detect');
var setToStringTag = require('./_set-to-string-tag');
var inheritIfRequired = require('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":14,"./_export":39,"./_fails":41,"./_for-of":44,"./_global":45,"./_inherit-if-required":50,"./_is-object":56,"./_iter-detect":61,"./_meta":69,"./_redefine":93,"./_redefine-all":92,"./_set-to-string-tag":97}],29:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],30:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":74,"./_property-desc":91}],31:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":11}],32:[function(require,module,exports){
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = require('./_fails');
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

},{"./_fails":41}],33:[function(require,module,exports){
'use strict';
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

},{"./_an-object":15,"./_to-primitive":116}],34:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],35:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":41}],36:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":45,"./_is-object":56}],37:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],38:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":79,"./_object-keys":82,"./_object-pie":83}],39:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":29,"./_ctx":31,"./_global":45,"./_hide":47,"./_redefine":93}],40:[function(require,module,exports){
var MATCH = require('./_wks')('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

},{"./_wks":125}],41:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],42:[function(require,module,exports){
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":34,"./_fails":41,"./_hide":47,"./_redefine":93,"./_wks":125}],43:[function(require,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"./_an-object":15}],44:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":15,"./_ctx":31,"./_is-array-iter":53,"./_iter-call":58,"./_to-length":114,"./core.get-iterator-method":126}],45:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],46:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],47:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":35,"./_object-dp":74,"./_property-desc":91}],48:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":45}],49:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":35,"./_dom-create":36,"./_fails":41}],50:[function(require,module,exports){
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"./_is-object":56,"./_set-proto":95}],51:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],52:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":25}],53:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":63,"./_wks":125}],54:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":25}],55:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":56}],56:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],57:[function(require,module,exports){
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_cof":25,"./_is-object":56,"./_wks":125}],58:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":15}],59:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":47,"./_object-create":73,"./_property-desc":91,"./_set-to-string-tag":97,"./_wks":125}],60:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":39,"./_hide":47,"./_iter-create":59,"./_iterators":63,"./_library":64,"./_object-gpo":80,"./_redefine":93,"./_set-to-string-tag":97,"./_wks":125}],61:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":125}],62:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],63:[function(require,module,exports){
module.exports = {};

},{}],64:[function(require,module,exports){
module.exports = false;

},{}],65:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],66:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var sign = require('./_math-sign');
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

},{"./_math-sign":68}],67:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],68:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],69:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":41,"./_has":46,"./_is-object":56,"./_object-dp":74,"./_uid":120}],70:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":25,"./_global":45,"./_task":109}],71:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":11}],72:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_fails":41,"./_iobject":52,"./_object-gops":79,"./_object-keys":82,"./_object-pie":83,"./_to-object":115}],73:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":15,"./_dom-create":36,"./_enum-bug-keys":37,"./_html":48,"./_object-dps":75,"./_shared-key":98}],74:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":15,"./_descriptors":35,"./_ie8-dom-define":49,"./_to-primitive":116}],75:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":15,"./_descriptors":35,"./_object-dp":74,"./_object-keys":82}],76:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":35,"./_has":46,"./_ie8-dom-define":49,"./_object-pie":83,"./_property-desc":91,"./_to-iobject":113,"./_to-primitive":116}],77:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":78,"./_to-iobject":113}],78:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":37,"./_object-keys-internal":81}],79:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],80:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":46,"./_shared-key":98,"./_to-object":115}],81:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":18,"./_has":46,"./_shared-key":98,"./_to-iobject":113}],82:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":37,"./_object-keys-internal":81}],83:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],84:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":29,"./_export":39,"./_fails":41}],85:[function(require,module,exports){
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
var isEnum = require('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

},{"./_object-keys":82,"./_object-pie":83,"./_to-iobject":113}],86:[function(require,module,exports){
// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');
var gOPS = require('./_object-gops');
var anObject = require('./_an-object');
var Reflect = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_an-object":15,"./_global":45,"./_object-gopn":78,"./_object-gops":79}],87:[function(require,module,exports){
var $parseFloat = require('./_global').parseFloat;
var $trim = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"./_global":45,"./_string-trim":107,"./_string-ws":108}],88:[function(require,module,exports){
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":45,"./_string-trim":107,"./_string-ws":108}],89:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],90:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":15,"./_is-object":56,"./_new-promise-capability":71}],91:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],92:[function(require,module,exports){
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":93}],93:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":29,"./_global":45,"./_has":46,"./_hide":47,"./_uid":120}],94:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],95:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":15,"./_ctx":31,"./_is-object":56,"./_object-gopd":76}],96:[function(require,module,exports){
'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_descriptors":35,"./_global":45,"./_object-dp":74,"./_wks":125}],97:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":46,"./_object-dp":74,"./_wks":125}],98:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":99,"./_uid":120}],99:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":29,"./_global":45,"./_library":64}],100:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":11,"./_an-object":15,"./_wks":125}],101:[function(require,module,exports){
'use strict';
var fails = require('./_fails');

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

},{"./_fails":41}],102:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":34,"./_to-integer":112}],103:[function(require,module,exports){
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_defined":34,"./_is-regexp":57}],104:[function(require,module,exports){
var $export = require('./_export');
var fails = require('./_fails');
var defined = require('./_defined');
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

},{"./_defined":34,"./_export":39,"./_fails":41}],105:[function(require,module,exports){
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length');
var repeat = require('./_string-repeat');
var defined = require('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_defined":34,"./_string-repeat":106,"./_to-length":114}],106:[function(require,module,exports){
'use strict';
var toInteger = require('./_to-integer');
var defined = require('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

},{"./_defined":34,"./_to-integer":112}],107:[function(require,module,exports){
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_defined":34,"./_export":39,"./_fails":41,"./_string-ws":108}],108:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],109:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":25,"./_ctx":31,"./_dom-create":36,"./_global":45,"./_html":48,"./_invoke":51}],110:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":112}],111:[function(require,module,exports){
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

},{"./_to-integer":112,"./_to-length":114}],112:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],113:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":34,"./_iobject":52}],114:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":112}],115:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":34}],116:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":56}],117:[function(require,module,exports){
'use strict';
if (require('./_descriptors')) {
  var LIBRARY = require('./_library');
  var global = require('./_global');
  var fails = require('./_fails');
  var $export = require('./_export');
  var $typed = require('./_typed');
  var $buffer = require('./_typed-buffer');
  var ctx = require('./_ctx');
  var anInstance = require('./_an-instance');
  var propertyDesc = require('./_property-desc');
  var hide = require('./_hide');
  var redefineAll = require('./_redefine-all');
  var toInteger = require('./_to-integer');
  var toLength = require('./_to-length');
  var toIndex = require('./_to-index');
  var toAbsoluteIndex = require('./_to-absolute-index');
  var toPrimitive = require('./_to-primitive');
  var has = require('./_has');
  var classof = require('./_classof');
  var isObject = require('./_is-object');
  var toObject = require('./_to-object');
  var isArrayIter = require('./_is-array-iter');
  var create = require('./_object-create');
  var getPrototypeOf = require('./_object-gpo');
  var gOPN = require('./_object-gopn').f;
  var getIterFn = require('./core.get-iterator-method');
  var uid = require('./_uid');
  var wks = require('./_wks');
  var createArrayMethod = require('./_array-methods');
  var createArrayIncludes = require('./_array-includes');
  var speciesConstructor = require('./_species-constructor');
  var ArrayIterators = require('./es6.array.iterator');
  var Iterators = require('./_iterators');
  var $iterDetect = require('./_iter-detect');
  var setSpecies = require('./_set-species');
  var arrayFill = require('./_array-fill');
  var arrayCopyWithin = require('./_array-copy-within');
  var $DP = require('./_object-dp');
  var $GOPD = require('./_object-gopd');
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };

},{"./_an-instance":14,"./_array-copy-within":16,"./_array-fill":17,"./_array-includes":18,"./_array-methods":19,"./_classof":24,"./_ctx":31,"./_descriptors":35,"./_export":39,"./_fails":41,"./_global":45,"./_has":46,"./_hide":47,"./_is-array-iter":53,"./_is-object":56,"./_iter-detect":61,"./_iterators":63,"./_library":64,"./_object-create":73,"./_object-dp":74,"./_object-gopd":76,"./_object-gopn":78,"./_object-gpo":80,"./_property-desc":91,"./_redefine-all":92,"./_set-species":96,"./_species-constructor":100,"./_to-absolute-index":110,"./_to-index":111,"./_to-integer":112,"./_to-length":114,"./_to-object":115,"./_to-primitive":116,"./_typed":119,"./_typed-buffer":118,"./_uid":120,"./_wks":125,"./core.get-iterator-method":126,"./es6.array.iterator":137}],118:[function(require,module,exports){
'use strict';
var global = require('./_global');
var DESCRIPTORS = require('./_descriptors');
var LIBRARY = require('./_library');
var $typed = require('./_typed');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var fails = require('./_fails');
var anInstance = require('./_an-instance');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var toIndex = require('./_to-index');
var gOPN = require('./_object-gopn').f;
var dP = require('./_object-dp').f;
var arrayFill = require('./_array-fill');
var setToStringTag = require('./_set-to-string-tag');
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"./_an-instance":14,"./_array-fill":17,"./_descriptors":35,"./_fails":41,"./_global":45,"./_hide":47,"./_library":64,"./_object-dp":74,"./_object-gopn":78,"./_redefine-all":92,"./_set-to-string-tag":97,"./_to-index":111,"./_to-integer":112,"./_to-length":114,"./_typed":119}],119:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var uid = require('./_uid');
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

},{"./_global":45,"./_hide":47,"./_uid":120}],120:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],121:[function(require,module,exports){
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":45}],122:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":56}],123:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":29,"./_global":45,"./_library":64,"./_object-dp":74,"./_wks-ext":124}],124:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":125}],125:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":45,"./_shared":99,"./_uid":120}],126:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":24,"./_core":29,"./_iterators":63,"./_wks":125}],127:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

require('./_add-to-unscopables')('copyWithin');

},{"./_add-to-unscopables":13,"./_array-copy-within":16,"./_export":39}],128:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $every = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":19,"./_export":39,"./_strict-method":101}],129:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { fill: require('./_array-fill') });

require('./_add-to-unscopables')('fill');

},{"./_add-to-unscopables":13,"./_array-fill":17,"./_export":39}],130:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":19,"./_export":39,"./_strict-method":101}],131:[function(require,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":13,"./_array-methods":19,"./_export":39}],132:[function(require,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":13,"./_array-methods":19,"./_export":39}],133:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $forEach = require('./_array-methods')(0);
var STRICT = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":19,"./_export":39,"./_strict-method":101}],134:[function(require,module,exports){
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":30,"./_ctx":31,"./_export":39,"./_is-array-iter":53,"./_iter-call":58,"./_iter-detect":61,"./_to-length":114,"./_to-object":115,"./core.get-iterator-method":126}],135:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $indexOf = require('./_array-includes')(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

},{"./_array-includes":18,"./_export":39,"./_strict-method":101}],136:[function(require,module,exports){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', { isArray: require('./_is-array') });

},{"./_export":39,"./_is-array":54}],137:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":13,"./_iter-define":60,"./_iter-step":62,"./_iterators":63,"./_to-iobject":113}],138:[function(require,module,exports){
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

},{"./_export":39,"./_iobject":52,"./_strict-method":101,"./_to-iobject":113}],139:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

},{"./_export":39,"./_strict-method":101,"./_to-integer":112,"./_to-iobject":113,"./_to-length":114}],140:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $map = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":19,"./_export":39,"./_strict-method":101}],141:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var createProperty = require('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./_fails')(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

},{"./_create-property":30,"./_export":39,"./_fails":41}],142:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

},{"./_array-reduce":20,"./_export":39,"./_strict-method":101}],143:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

},{"./_array-reduce":20,"./_export":39,"./_strict-method":101}],144:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var html = require('./_html');
var cof = require('./_cof');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require('./_fails')(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

},{"./_cof":25,"./_export":39,"./_fails":41,"./_html":48,"./_to-absolute-index":110,"./_to-length":114}],145:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $some = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":19,"./_export":39,"./_strict-method":101}],146:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var fails = require('./_fails');
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

},{"./_a-function":11,"./_export":39,"./_fails":41,"./_strict-method":101,"./_to-object":115}],147:[function(require,module,exports){
require('./_set-species')('Array');

},{"./_set-species":96}],148:[function(require,module,exports){
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

},{"./_export":39}],149:[function(require,module,exports){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require('./_export');
var toISOString = require('./_date-to-iso-string');

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

},{"./_date-to-iso-string":32,"./_export":39}],150:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');

$export($export.P + $export.F * require('./_fails')(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

},{"./_export":39,"./_fails":41,"./_to-object":115,"./_to-primitive":116}],151:[function(require,module,exports){
var TO_PRIMITIVE = require('./_wks')('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));

},{"./_date-to-primitive":33,"./_hide":47,"./_wks":125}],152:[function(require,module,exports){
var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  require('./_redefine')(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

},{"./_redefine":93}],153:[function(require,module,exports){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', { bind: require('./_bind') });

},{"./_bind":23,"./_export":39}],154:[function(require,module,exports){
'use strict';
var isObject = require('./_is-object');
var getPrototypeOf = require('./_object-gpo');
var HAS_INSTANCE = require('./_wks')('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require('./_object-dp').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });

},{"./_is-object":56,"./_object-dp":74,"./_object-gpo":80,"./_wks":125}],155:[function(require,module,exports){
var dP = require('./_object-dp').f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

},{"./_descriptors":35,"./_object-dp":74}],156:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":28,"./_collection-strong":26,"./_validate-collection":122}],157:[function(require,module,exports){
// 20.2.2.3 Math.acosh(x)
var $export = require('./_export');
var log1p = require('./_math-log1p');
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

},{"./_export":39,"./_math-log1p":67}],158:[function(require,module,exports){
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

},{"./_export":39}],159:[function(require,module,exports){
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"./_export":39}],160:[function(require,module,exports){
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');
var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"./_export":39,"./_math-sign":68}],161:[function(require,module,exports){
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"./_export":39}],162:[function(require,module,exports){
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"./_export":39}],163:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

},{"./_export":39,"./_math-expm1":65}],164:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', { fround: require('./_math-fround') });

},{"./_export":39,"./_math-fround":66}],165:[function(require,module,exports){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require('./_export');
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

},{"./_export":39}],166:[function(require,module,exports){
// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export');
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require('./_fails')(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

},{"./_export":39,"./_fails":41}],167:[function(require,module,exports){
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"./_export":39}],168:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', { log1p: require('./_math-log1p') });

},{"./_export":39,"./_math-log1p":67}],169:[function(require,module,exports){
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"./_export":39}],170:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

},{"./_export":39,"./_math-sign":68}],171:[function(require,module,exports){
// 20.2.2.30 Math.sinh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require('./_fails')(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

},{"./_export":39,"./_fails":41,"./_math-expm1":65}],172:[function(require,module,exports){
// 20.2.2.33 Math.tanh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

},{"./_export":39,"./_math-expm1":65}],173:[function(require,module,exports){
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"./_export":39}],174:[function(require,module,exports){
'use strict';
var global = require('./_global');
var has = require('./_has');
var cof = require('./_cof');
var inheritIfRequired = require('./_inherit-if-required');
var toPrimitive = require('./_to-primitive');
var fails = require('./_fails');
var gOPN = require('./_object-gopn').f;
var gOPD = require('./_object-gopd').f;
var dP = require('./_object-dp').f;
var $trim = require('./_string-trim').trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(require('./_object-create')(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = require('./_descriptors') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  require('./_redefine')(global, NUMBER, $Number);
}

},{"./_cof":25,"./_descriptors":35,"./_fails":41,"./_global":45,"./_has":46,"./_inherit-if-required":50,"./_object-create":73,"./_object-dp":74,"./_object-gopd":76,"./_object-gopn":78,"./_redefine":93,"./_string-trim":107,"./_to-primitive":116}],175:[function(require,module,exports){
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

},{"./_export":39}],176:[function(require,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":39,"./_global":45}],177:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

},{"./_export":39,"./_is-integer":55}],178:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":39}],179:[function(require,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');
var isInteger = require('./_is-integer');
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"./_export":39,"./_is-integer":55}],180:[function(require,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

},{"./_export":39}],181:[function(require,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

},{"./_export":39}],182:[function(require,module,exports){
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

},{"./_export":39,"./_parse-float":87}],183:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

},{"./_export":39,"./_parse-int":88}],184:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toInteger = require('./_to-integer');
var aNumberValue = require('./_a-number-value');
var repeat = require('./_string-repeat');
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !require('./_fails')(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

},{"./_a-number-value":12,"./_export":39,"./_fails":41,"./_string-repeat":106,"./_to-integer":112}],185:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $fails = require('./_fails');
var aNumberValue = require('./_a-number-value');
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

},{"./_a-number-value":12,"./_export":39,"./_fails":41}],186:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":39,"./_object-assign":72}],187:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":39,"./_object-create":73}],188:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

},{"./_descriptors":35,"./_export":39,"./_object-dps":75}],189:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":35,"./_export":39,"./_object-dp":74}],190:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":56,"./_meta":69,"./_object-sap":84}],191:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":76,"./_object-sap":84,"./_to-iobject":113}],192:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-gopn-ext":77,"./_object-sap":84}],193:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":80,"./_object-sap":84,"./_to-object":115}],194:[function(require,module,exports){
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"./_is-object":56,"./_object-sap":84}],195:[function(require,module,exports){
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"./_is-object":56,"./_object-sap":84}],196:[function(require,module,exports){
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"./_is-object":56,"./_object-sap":84}],197:[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', { is: require('./_same-value') });

},{"./_export":39,"./_same-value":94}],198:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":82,"./_object-sap":84,"./_to-object":115}],199:[function(require,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"./_is-object":56,"./_meta":69,"./_object-sap":84}],200:[function(require,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":56,"./_meta":69,"./_object-sap":84}],201:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":39,"./_set-proto":95}],202:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof');
var test = {};
test[require('./_wks')('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  require('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

},{"./_classof":24,"./_redefine":93,"./_wks":125}],203:[function(require,module,exports){
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

},{"./_export":39,"./_parse-float":87}],204:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"./_export":39,"./_parse-int":88}],205:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":11,"./_an-instance":14,"./_classof":24,"./_core":29,"./_ctx":31,"./_export":39,"./_for-of":44,"./_global":45,"./_is-object":56,"./_iter-detect":61,"./_library":64,"./_microtask":70,"./_new-promise-capability":71,"./_perform":89,"./_promise-resolve":90,"./_redefine-all":92,"./_set-species":96,"./_set-to-string-tag":97,"./_species-constructor":100,"./_task":109,"./_user-agent":121,"./_wks":125}],206:[function(require,module,exports){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = require('./_export');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var rApply = (require('./_global').Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require('./_fails')(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

},{"./_a-function":11,"./_an-object":15,"./_export":39,"./_fails":41,"./_global":45}],207:[function(require,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require('./_export');
var create = require('./_object-create');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var fails = require('./_fails');
var bind = require('./_bind');
var rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"./_a-function":11,"./_an-object":15,"./_bind":23,"./_export":39,"./_fails":41,"./_global":45,"./_is-object":56,"./_object-create":73}],208:[function(require,module,exports){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = require('./_object-dp');
var $export = require('./_export');
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require('./_fails')(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":15,"./_export":39,"./_fails":41,"./_object-dp":74,"./_to-primitive":116}],209:[function(require,module,exports){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = require('./_export');
var gOPD = require('./_object-gopd').f;
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

},{"./_an-object":15,"./_export":39,"./_object-gopd":76}],210:[function(require,module,exports){
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
require('./_iter-create')(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

},{"./_an-object":15,"./_export":39,"./_iter-create":59}],211:[function(require,module,exports){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require('./_object-gopd');
var $export = require('./_export');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"./_an-object":15,"./_export":39,"./_object-gopd":76}],212:[function(require,module,exports){
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');
var getProto = require('./_object-gpo');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"./_an-object":15,"./_export":39,"./_object-gpo":80}],213:[function(require,module,exports){
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var isObject = require('./_is-object');
var anObject = require('./_an-object');

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });

},{"./_an-object":15,"./_export":39,"./_has":46,"./_is-object":56,"./_object-gopd":76,"./_object-gpo":80}],214:[function(require,module,exports){
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"./_export":39}],215:[function(require,module,exports){
// 26.1.10 Reflect.isExtensible(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

},{"./_an-object":15,"./_export":39}],216:[function(require,module,exports){
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', { ownKeys: require('./_own-keys') });

},{"./_export":39,"./_own-keys":86}],217:[function(require,module,exports){
// 26.1.12 Reflect.preventExtensions(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":15,"./_export":39}],218:[function(require,module,exports){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = require('./_export');
var setProto = require('./_set-proto');

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":39,"./_set-proto":95}],219:[function(require,module,exports){
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = require('./_object-dp');
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var createDesc = require('./_property-desc');
var anObject = require('./_an-object');
var isObject = require('./_is-object');

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });

},{"./_an-object":15,"./_export":39,"./_has":46,"./_is-object":56,"./_object-dp":74,"./_object-gopd":76,"./_object-gpo":80,"./_property-desc":91}],220:[function(require,module,exports){
var global = require('./_global');
var inheritIfRequired = require('./_inherit-if-required');
var dP = require('./_object-dp').f;
var gOPN = require('./_object-gopn').f;
var isRegExp = require('./_is-regexp');
var $flags = require('./_flags');
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function () {
  re2[require('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');

},{"./_descriptors":35,"./_fails":41,"./_flags":43,"./_global":45,"./_inherit-if-required":50,"./_is-regexp":57,"./_object-dp":74,"./_object-gopn":78,"./_redefine":93,"./_set-species":96,"./_wks":125}],221:[function(require,module,exports){
// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

},{"./_descriptors":35,"./_flags":43,"./_object-dp":74}],222:[function(require,module,exports){
// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

},{"./_fix-re-wks":42}],223:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":42}],224:[function(require,module,exports){
// @@search logic
require('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

},{"./_fix-re-wks":42}],225:[function(require,module,exports){
// @@split logic
require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = require('./_is-regexp');
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

},{"./_fix-re-wks":42,"./_is-regexp":57}],226:[function(require,module,exports){
'use strict';
require('./es6.regexp.flags');
var anObject = require('./_an-object');
var $flags = require('./_flags');
var DESCRIPTORS = require('./_descriptors');
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (require('./_fails')(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

},{"./_an-object":15,"./_descriptors":35,"./_fails":41,"./_flags":43,"./_redefine":93,"./es6.regexp.flags":221}],227:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection":28,"./_collection-strong":26,"./_validate-collection":122}],228:[function(require,module,exports){
'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

},{"./_string-html":104}],229:[function(require,module,exports){
'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

},{"./_string-html":104}],230:[function(require,module,exports){
'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

},{"./_string-html":104}],231:[function(require,module,exports){
'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

},{"./_string-html":104}],232:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"./_export":39,"./_string-at":102}],233:[function(require,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

},{"./_export":39,"./_fails-is-regexp":40,"./_string-context":103,"./_to-length":114}],234:[function(require,module,exports){
'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

},{"./_string-html":104}],235:[function(require,module,exports){
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

},{"./_string-html":104}],236:[function(require,module,exports){
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

},{"./_string-html":104}],237:[function(require,module,exports){
var $export = require('./_export');
var toAbsoluteIndex = require('./_to-absolute-index');
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

},{"./_export":39,"./_to-absolute-index":110}],238:[function(require,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export = require('./_export');
var context = require('./_string-context');
var INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"./_export":39,"./_fails-is-regexp":40,"./_string-context":103}],239:[function(require,module,exports){
'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

},{"./_string-html":104}],240:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":60,"./_string-at":102}],241:[function(require,module,exports){
'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

},{"./_string-html":104}],242:[function(require,module,exports){
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});

},{"./_export":39,"./_to-iobject":113,"./_to-length":114}],243:[function(require,module,exports){
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

},{"./_export":39,"./_string-repeat":106}],244:[function(require,module,exports){
'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

},{"./_string-html":104}],245:[function(require,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

},{"./_export":39,"./_fails-is-regexp":40,"./_string-context":103,"./_to-length":114}],246:[function(require,module,exports){
'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

},{"./_string-html":104}],247:[function(require,module,exports){
'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

},{"./_string-html":104}],248:[function(require,module,exports){
'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

},{"./_string-html":104}],249:[function(require,module,exports){
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

},{"./_string-trim":107}],250:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":15,"./_descriptors":35,"./_enum-keys":38,"./_export":39,"./_fails":41,"./_global":45,"./_has":46,"./_hide":47,"./_is-array":54,"./_is-object":56,"./_library":64,"./_meta":69,"./_object-create":73,"./_object-dp":74,"./_object-gopd":76,"./_object-gopn":78,"./_object-gopn-ext":77,"./_object-gops":79,"./_object-keys":82,"./_object-pie":83,"./_property-desc":91,"./_redefine":93,"./_set-to-string-tag":97,"./_shared":99,"./_to-iobject":113,"./_to-primitive":116,"./_uid":120,"./_wks":125,"./_wks-define":123,"./_wks-ext":124}],251:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $typed = require('./_typed');
var buffer = require('./_typed-buffer');
var anObject = require('./_an-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var isObject = require('./_is-object');
var ArrayBuffer = require('./_global').ArrayBuffer;
var speciesConstructor = require('./_species-constructor');
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * require('./_fails')(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require('./_set-species')(ARRAY_BUFFER);

},{"./_an-object":15,"./_export":39,"./_fails":41,"./_global":45,"./_is-object":56,"./_set-species":96,"./_species-constructor":100,"./_to-absolute-index":110,"./_to-length":114,"./_typed":119,"./_typed-buffer":118}],252:[function(require,module,exports){
var $export = require('./_export');
$export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
  DataView: require('./_typed-buffer').DataView
});

},{"./_export":39,"./_typed":119,"./_typed-buffer":118}],253:[function(require,module,exports){
require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],254:[function(require,module,exports){
require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],255:[function(require,module,exports){
require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],256:[function(require,module,exports){
require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],257:[function(require,module,exports){
require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],258:[function(require,module,exports){
require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],259:[function(require,module,exports){
require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],260:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":117}],261:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"./_typed-array":117}],262:[function(require,module,exports){
'use strict';
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var fails = require('./_fails');
var validate = require('./_validate-collection');
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"./_array-methods":19,"./_collection":28,"./_collection-weak":27,"./_fails":41,"./_is-object":56,"./_meta":69,"./_object-assign":72,"./_redefine":93,"./_validate-collection":122}],263:[function(require,module,exports){
'use strict';
var weak = require('./_collection-weak');
var validate = require('./_validate-collection');
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
require('./_collection')(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

},{"./_collection":28,"./_collection-weak":27,"./_validate-collection":122}],264:[function(require,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = require('./_export');
var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

},{"./_add-to-unscopables":13,"./_array-includes":18,"./_export":39}],265:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":39,"./_object-to-array":85}],266:[function(require,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');
var gOPD = require('./_object-gopd');
var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

},{"./_create-property":30,"./_export":39,"./_object-gopd":76,"./_own-keys":86,"./_to-iobject":113}],267:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":39,"./_object-to-array":85}],268:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":29,"./_export":39,"./_global":45,"./_promise-resolve":90,"./_species-constructor":100}],269:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

},{"./_export":39,"./_string-pad":105,"./_user-agent":121}],270:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

},{"./_export":39,"./_string-pad":105,"./_user-agent":121}],271:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":123}],272:[function(require,module,exports){
var $iterators = require('./es6.array.iterator');
var getKeys = require('./_object-keys');
var redefine = require('./_redefine');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var wks = require('./_wks');
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

},{"./_global":45,"./_hide":47,"./_iterators":63,"./_object-keys":82,"./_redefine":93,"./_wks":125,"./es6.array.iterator":137}],273:[function(require,module,exports){
var $export = require('./_export');
var $task = require('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"./_export":39,"./_task":109}],274:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global = require('./_global');
var $export = require('./_export');
var userAgent = require('./_user-agent');
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

},{"./_export":39,"./_global":45,"./_user-agent":121}],275:[function(require,module,exports){
require('../modules/web.timers');
require('../modules/web.immediate');
require('../modules/web.dom.iterable');
module.exports = require('../modules/_core');

},{"../modules/_core":29,"../modules/web.dom.iterable":272,"../modules/web.immediate":273,"../modules/web.timers":274}],276:[function(require,module,exports){
// https://d3js.org/d3-color/ v1.2.3 Copyright 2018 Mike Bostock
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

define(Lab, lab, extend(Color, {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new Rgb(
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hcl, hcl, extend(Color, {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));

var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));

exports.color = color;
exports.rgb = rgb;
exports.hsl = hsl;
exports.lab = lab;
exports.hcl = hcl;
exports.lch = lch;
exports.gray = gray;
exports.cubehelix = cubehelix;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}],277:[function(require,module,exports){
// https://d3js.org/d3-dispatch/ v1.0.5 Copyright 2018 Mike Bostock
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

exports.dispatch = dispatch;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}],278:[function(require,module,exports){
// https://d3js.org/d3-ease/ v1.0.5 Copyright 2018 Mike Bostock
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

function linear(t) {
  return +t;
}

function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);

var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}

function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);

var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);

exports.easeLinear = linear;
exports.easeQuad = quadInOut;
exports.easeQuadIn = quadIn;
exports.easeQuadOut = quadOut;
exports.easeQuadInOut = quadInOut;
exports.easeCubic = cubicInOut;
exports.easeCubicIn = cubicIn;
exports.easeCubicOut = cubicOut;
exports.easeCubicInOut = cubicInOut;
exports.easePoly = polyInOut;
exports.easePolyIn = polyIn;
exports.easePolyOut = polyOut;
exports.easePolyInOut = polyInOut;
exports.easeSin = sinInOut;
exports.easeSinIn = sinIn;
exports.easeSinOut = sinOut;
exports.easeSinInOut = sinInOut;
exports.easeExp = expInOut;
exports.easeExpIn = expIn;
exports.easeExpOut = expOut;
exports.easeExpInOut = expInOut;
exports.easeCircle = circleInOut;
exports.easeCircleIn = circleIn;
exports.easeCircleOut = circleOut;
exports.easeCircleInOut = circleInOut;
exports.easeBounce = bounceOut;
exports.easeBounceIn = bounceIn;
exports.easeBounceOut = bounceOut;
exports.easeBounceInOut = bounceInOut;
exports.easeBack = backInOut;
exports.easeBackIn = backIn;
exports.easeBackOut = backOut;
exports.easeBackInOut = backInOut;
exports.easeElastic = elasticOut;
exports.easeElasticIn = elasticIn;
exports.easeElasticOut = elasticOut;
exports.easeElasticInOut = elasticInOut;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}],279:[function(require,module,exports){
// https://d3js.org/d3-interpolate/ v1.3.2 Copyright 2018 Mike Bostock
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-color')) :
typeof define === 'function' && define.amd ? define(['exports', 'd3-color'], factory) :
(factory((global.d3 = global.d3 || {}),global.d3));
}(this, (function (exports,d3Color) { 'use strict';

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

function basis$1(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

function basisClosed(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

function constant(x) {
  return function() {
    return x;
  };
}

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}

var rgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = d3Color.rgb(start)).r, (end = d3Color.rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1);

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = d3Color.rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(basis$1);
var rgbBasisClosed = rgbSpline(basisClosed);

function array(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
}

function number(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function value(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? number
      : t === "string" ? ((c = d3Color.color(b)) ? (b = c, rgb) : string)
      : b instanceof d3Color.color ? rgb
      : b instanceof Date ? date
      : Array.isArray(b) ? array
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : number)(a, b);
}

function discrete(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

function hue$1(a, b) {
  var i = hue(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
}

function round(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
}

var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return identity;
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
function zoom(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    };
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    };
  }

  i.duration = S * 1000;

  return i;
}

function hsl(hue$$1) {
  return function(start, end) {
    var h = hue$$1((start = d3Color.hsl(start)).h, (end = d3Color.hsl(end)).h),
        s = nogamma(start.s, end.s),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

var hsl$1 = hsl(hue);
var hslLong = hsl(nogamma);

function lab(start, end) {
  var l = nogamma((start = d3Color.lab(start)).l, (end = d3Color.lab(end)).l),
      a = nogamma(start.a, end.a),
      b = nogamma(start.b, end.b),
      opacity = nogamma(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

function hcl(hue$$1) {
  return function(start, end) {
    var h = hue$$1((start = d3Color.hcl(start)).h, (end = d3Color.hcl(end)).h),
        c = nogamma(start.c, end.c),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

var hcl$1 = hcl(hue);
var hclLong = hcl(nogamma);

function cubehelix(hue$$1) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue$$1((start = d3Color.cubehelix(start)).h, (end = d3Color.cubehelix(end)).h),
          s = nogamma(start.s, end.s),
          l = nogamma(start.l, end.l),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

var cubehelix$1 = cubehelix(hue);
var cubehelixLong = cubehelix(nogamma);

function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}

function quantize(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
}

exports.interpolate = value;
exports.interpolateArray = array;
exports.interpolateBasis = basis$1;
exports.interpolateBasisClosed = basisClosed;
exports.interpolateDate = date;
exports.interpolateDiscrete = discrete;
exports.interpolateHue = hue$1;
exports.interpolateNumber = number;
exports.interpolateObject = object;
exports.interpolateRound = round;
exports.interpolateString = string;
exports.interpolateTransformCss = interpolateTransformCss;
exports.interpolateTransformSvg = interpolateTransformSvg;
exports.interpolateZoom = zoom;
exports.interpolateRgb = rgb;
exports.interpolateRgbBasis = rgbBasis;
exports.interpolateRgbBasisClosed = rgbBasisClosed;
exports.interpolateHsl = hsl$1;
exports.interpolateHslLong = hslLong;
exports.interpolateLab = lab;
exports.interpolateHcl = hcl$1;
exports.interpolateHclLong = hclLong;
exports.interpolateCubehelix = cubehelix$1;
exports.interpolateCubehelixLong = cubehelixLong;
exports.piecewise = piecewise;
exports.quantize = quantize;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{"d3-color":276}],280:[function(require,module,exports){
// https://d3js.org/d3-selection/ v1.3.2 Copyright 2018 Mike Bostock
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

var xhtml = "http://www.w3.org/1999/xhtml";

var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
}

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function creator(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

function none() {}

function selector(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

function selection_select(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function empty() {
  return [];
}

function selectorAll(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

function selection_selectAll(select) {
  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
}

var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

var matcher$1 = matcher;

function selection_filter(match) {
  if (typeof match !== "function") match = matcher$1(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function sparse(update) {
  return new Array(update.length);
}

function selection_enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

function constant(x) {
  return function() {
    return x;
  };
}

var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

function selection_data(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

function selection_exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}

function selection_merge(selection$$1) {

  for (var groups0 = this._groups, groups1 = selection$$1._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
}

function selection_order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

function selection_sort(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

function selection_nodes() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
}

function selection_node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

function selection_size() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
}

function selection_empty() {
  return !this.node();
}

function selection_each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function selection_attr(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}

function defaultView(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

function selection_style(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

function selection_property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function selection_classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function selection_html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function selection_raise() {
  return this.each(raise);
}

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function selection_lower() {
  return this.each(lower);
}

function selection_append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

function constantNull() {
  return null;
}

function selection_insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function selection_remove() {
  return this.each(remove);
}

function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

var filterEvents = {};

exports.event = null;

if (typeof document !== "undefined") {
  var element$1 = document.documentElement;
  if (!("onmouseenter" in element$1)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = exports.event; // Events can be reentrant (e.g., focus).
    exports.event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      exports.event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

function selection_on(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
}

function customEvent(event1, listener, that, args) {
  var event0 = exports.event;
  event1.sourceEvent = exports.event;
  exports.event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    exports.event = event0;
  }
}

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function selection_dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  merge: selection_merge,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch
};

function select(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
}

function create(name) {
  return select(creator(name).call(document.documentElement));
}

var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

function sourceEvent() {
  var current = exports.event, source;
  while (source = current.sourceEvent) current = source;
  return current;
}

function point(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
}

function mouse(node) {
  var event = sourceEvent();
  if (event.changedTouches) event = event.changedTouches[0];
  return point(node, event);
}

function selectAll(selector) {
  return typeof selector === "string"
      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
      : new Selection([selector == null ? [] : selector], root);
}

function touch(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return point(node, touch);
    }
  }

  return null;
}

function touches(node, touches) {
  if (touches == null) touches = sourceEvent().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = point(node, touches[i]);
  }

  return points;
}

exports.create = create;
exports.creator = creator;
exports.local = local;
exports.matcher = matcher$1;
exports.mouse = mouse;
exports.namespace = namespace;
exports.namespaces = namespaces;
exports.clientPoint = point;
exports.select = select;
exports.selectAll = selectAll;
exports.selection = selection;
exports.selector = selector;
exports.selectorAll = selectorAll;
exports.style = styleValue;
exports.touch = touch;
exports.touches = touches;
exports.window = defaultView;
exports.customEvent = customEvent;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}],281:[function(require,module,exports){
// https://d3js.org/d3-timer/ v1.0.9 Copyright 2018 Mike Bostock
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function timeout$1(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

function interval$1(callback, delay, time) {
  var t = new Timer, total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? now() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
}

exports.now = now;
exports.timer = timer;
exports.timerFlush = timerFlush;
exports.timeout = timeout$1;
exports.interval = interval$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}],282:[function(require,module,exports){
// https://d3js.org/d3-transition/ v1.1.3 Copyright 2018 Mike Bostock
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-dispatch'), require('d3-timer'), require('d3-color'), require('d3-interpolate'), require('d3-selection'), require('d3-ease')) :
typeof define === 'function' && define.amd ? define(['exports', 'd3-dispatch', 'd3-timer', 'd3-color', 'd3-interpolate', 'd3-selection', 'd3-ease'], factory) :
(factory((global.d3 = global.d3 || {}),global.d3,global.d3,global.d3,global.d3,global.d3,global.d3));
}(this, (function (exports,d3Dispatch,d3Timer,d3Color,d3Interpolate,d3Selection,d3Ease) { 'use strict';

var emptyOn = d3Dispatch.dispatch("start", "end", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTING) throw new Error("too late; already started");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = d3Timer.timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return d3Timer.timeout(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    d3Timer.timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

function interrupt(node, name) {
  var schedules = node.__transition,
      schedule$$1,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule$$1 = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule$$1.state > STARTING && schedule$$1.state < ENDING;
    schedule$$1.state = ENDED;
    schedule$$1.timer.stop();
    if (active) schedule$$1.on.call("interrupt", node, node.__data__, schedule$$1.index, schedule$$1.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}

function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule$$1 = set(this, id),
        tween = schedule$$1.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule$$1.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule$$1 = set(this, id),
        tween = schedule$$1.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule$$1.tween = tween1;
  };
}

function transition_tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule$$1 = set(this, id);
    (schedule$$1.value || (schedule$$1.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get(node, id).value[name];
  };
}

function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? d3Interpolate.interpolateNumber
      : b instanceof d3Color.color ? d3Interpolate.interpolateRgb
      : (c = d3Color.color(b)) ? (b = c, d3Interpolate.interpolateRgb)
      : d3Interpolate.interpolateString)(a, b);
}

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate$$1, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value1);
  };
}

function attrConstantNS(fullname, interpolate$$1, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value1);
  };
}

function attrFunction(name, interpolate$$1, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS(fullname, interpolate$$1, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

function transition_attr(name, value) {
  var fullname = d3Selection.namespace(name), i = fullname === "transform" ? d3Interpolate.interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value + ""));
}

function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = d3Selection.namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

function transition_delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get(this.node(), id).delay;
}

function durationFunction(id, value) {
  return function() {
    set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set(this, id).duration = value;
  };
}

function transition_duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get(this.node(), id).duration;
}

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set(this, id).ease = value;
  };
}

function transition_ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get(this.node(), id).ease;
}

function transition_filter(match) {
  if (typeof match !== "function") match = d3Selection.matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

function transition_merge(transition$$1) {
  if (transition$$1._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition$$1._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule$$1 = sit(this, id),
        on = schedule$$1.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule$$1.on = on1;
  };
}

function transition_on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}

function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = d3Selection.selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

function transition_selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = d3Selection.selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

var Selection = d3Selection.selection.prototype.constructor;

function transition_selection() {
  return new Selection(this._groups, this._parents);
}

function styleRemove(name, interpolate$$1) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = d3Selection.style(this, name),
        value1 = (this.style.removeProperty(name), d3Selection.style(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate$$1, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = d3Selection.style(this, name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value1);
  };
}

function styleFunction(name, interpolate$$1, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = d3Selection.style(this, name),
        value1 = value(this);
    if (value1 == null) value1 = (this.style.removeProperty(name), d3Selection.style(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? d3Interpolate.interpolateTransformCss : interpolate;
  return value == null ? this
          .styleTween(name, styleRemove(name, i))
          .on("end.style." + name, styleRemoveEnd(name))
      : this.styleTween(name, typeof value === "function"
          ? styleFunction(name, i, tweenValue(this, "style." + name, value))
          : styleConstant(name, i, value + ""), priority);
}

function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(tweenValue(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}

function transition_transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return d3Selection.selection().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3Selection.selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease
};

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3Ease.easeCubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = d3Timer.now(), defaultTiming;
    }
  }
  return timing;
}

function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = d3Timer.now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

d3Selection.selection.prototype.interrupt = selection_interrupt;
d3Selection.selection.prototype.transition = selection_transition;

var root = [null];

function active(node, name) {
  var schedules = node.__transition,
      schedule$$1,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule$$1 = schedules[i]).state > SCHEDULED && schedule$$1.name === name) {
        return new Transition([[node]], root, name, +i);
      }
    }
  }

  return null;
}

exports.transition = transition;
exports.active = active;
exports.interrupt = interrupt;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{"d3-color":276,"d3-dispatch":277,"d3-ease":278,"d3-interpolate":279,"d3-selection":280,"d3-timer":281}],283:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);

},{}],284:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//HanoverHistogramBubbles

var STANDARD_RADIUS = 4.2,
    //use a getter/setter?
COL_WIDTH = 5,
    //use a getter/setter?
PADDING = 2.9,
    //use a getter/setter?
LABEL_PADDING = 3,
    HISTO_GROUP_PADDING = 6,
    //pegged to col_width?
BY_PLATFORM_PADDING = 20,
    //pegged to col_width?
SVG_BOTTOM_PADDING = 20;

exports.standardRadius = STANDARD_RADIUS;
exports.columnWidth = COL_WIDTH;

exports.tagGetter = function (bubs, attribute, extractor) {
  return bubs.filter(function (b) {
    return b.getAttribute(attribute) !== "";
  }).reduce(function (acc, curr) {
    var d = extractor(curr.getAttribute(attribute));
    return acc.indexOf(d) < 0 ? [].concat(_toConsumableArray(acc), [d]) : acc;
  }, []).sort(function (a, b) {
    return a - b;
  });
};

exports.countGetter = function (tags, extractor, bubs) {
  return tags.map(function (t) {
    return bubs.filter(function (b) {
      return extractor(b) === t;
    }).length;
  });
};

exports.centerX = function (rowsColsData, width) {
  var maxIndex = rowsColsData.reduce(function (acc, curr) {
    return curr.index > acc ? curr.index : acc;
  }, 0);
  var offset = rowsColsData.find(function (b) {
    return b.index === maxIndex;
  }).groupOffset;
  var numCols = rowsColsData.filter(function (b) {
    return b.index === maxIndex;
  }).map(function (b) {
    return b.col;
  }).reduce(function (acc, curr) {
    return curr > acc ? curr : acc;
  });

  //offset of the last group, col-position of last group
  return (width - (offset + numCols * STANDARD_RADIUS * PADDING)) / 2;
};

exports.indexGetterDiscrete = function (tags) {
  return function (val) {
    return tags.indexOf(val);
  };
};
exports.indexGetterRanges = function (ranges) {
  return function (val) {
    return ranges.indexOf(ranges.find(function (g) {
      return val >= g.min && val < g.max;
    }));
  };
};

exports.rowColGetter_fixedColumnWidth = function (tags, extractor, bubs, indexGetter) {
  var countsByAttribute = tags.map(function (t) {
    return 0;
  });

  return bubs.map(function (b) {
    var attributeValue = extractor(b);
    var index = indexGetter(attributeValue);
    var col = 0,
        row = 0,
        groupOffset = index * (STANDARD_RADIUS * PADDING * HISTO_GROUP_PADDING);

    if (index >= 0) {
      col = countsByAttribute[index] % COL_WIDTH;
      row = countsByAttribute[index] / COL_WIDTH - col / COL_WIDTH;
      countsByAttribute[index] += 1;
    }

    return { row: row, col: col, groupOffset: groupOffset, index: index, attributeValue: attributeValue };
  });
};

exports.rowColGetter_dynamicColumnWidth = function (tags, extractor, bubs, indexGetter) {
  var countsByAttribute = tags.map(function (t) {
    return 0;
  });

  var numColsByPlat = tags.map(function (y) {
    return Math.trunc(Math.sqrt(bubs.filter(function (b) {
      return extractor(b) === y;
    }).length));
  });

  return bubs.map(function (b) {
    var attributeValue = extractor(b);
    var index = indexGetter(attributeValue);
    var col = 0,
        row = 0,
        groupOffset = numColsByPlat.slice(0, index).reduce(function (acc, curr) {
      return acc + curr;
    }, 0) * STANDARD_RADIUS * PADDING + index * BY_PLATFORM_PADDING;

    if (index >= 0) {
      col = Math.round(countsByAttribute[index] % numColsByPlat[index]);
      row = Math.round(countsByAttribute[index] / numColsByPlat[index] - col / numColsByPlat[index]);
      countsByAttribute[index] += 1;
    }

    return { row: row, col: col, groupOffset: groupOffset, index: index, attributeValue: attributeValue };
  });
};

exports.xYGetter = function (bubs, centeringX, height) {
  return bubs.map(function (b) {
    var cx = b.col * (STANDARD_RADIUS * PADDING) + b.groupOffset + centeringX,
        cy = height - b.row * (STANDARD_RADIUS * PADDING) - STANDARD_RADIUS - SVG_BOTTOM_PADDING;

    return _extends({}, b, { cx: cx, cy: cy });
  });
};

exports.labelMaker = function (tags, rowCols, centeringX, height) {
  var fixedColWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  return tags.map(function (t, i) {
    var groupOffset = rowCols.find(function (rc) {
      return rc.index === i;
    }).groupOffset,
        numCols = fixedColWidth ? fixedColWidth : rowCols.filter(function (b) {
      return b.index === i;
    }).map(function (b) {
      return b.col;
    }).reduce(function (acc, curr) {
      return curr > acc ? curr : acc;
    }),
        histoColCenter = numCols / 2 * STANDARD_RADIUS * PADDING;

    return {
      text: t,
      y: height - LABEL_PADDING,
      x: groupOffset + centeringX + histoColCenter
    };
  });
};

exports.labelMakerValues = function (tags, rowCols, centeringX, height) {
  var fixedColWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  return tags.map(function (t, i) {
    var groupOffset = rowCols.find(function (rc) {
      return rc.index === i;
    }).groupOffset,
        numCols = fixedColWidth ? fixedColWidth : rowCols.filter(function (b) {
      return b.index === i;
    }).map(function (b) {
      return b.col;
    }).reduce(function (acc, curr) {
      return curr > acc ? curr : acc;
    }),
        histoColCenter = numCols / 2 * STANDARD_RADIUS * PADDING,
        maxH = rowCols.filter(function (r) {
      return r.index === i;
    }).reduce(function (acc, curr) {
      if (curr.row > acc) {
        return curr.row;
      }
      return acc;
    }, 0);

    return {
      text: t,
      y: height - maxH * STANDARD_RADIUS * PADDING - 40,
      x: groupOffset + centeringX + histoColCenter
    };
  });
};

exports.labelXPositions = function (tags, rowCols, centeringX) {
  var fixedColWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  return tags.map(function (t, i) {
    var groupOffset = rowCols.find(function (rc) {
      return rc.index === i;
    }).groupOffset,
        numCols = fixedColWidth ? fixedColWidth : rowCols.filter(function (b) {
      return b.index === i;
    }).map(function (b) {
      return b.col;
    }).reduce(function (acc, curr) {
      return curr > acc ? curr : acc;
    }),
        histoColCenter = numCols / 2 * STANDARD_RADIUS * PADDING;

    return groupOffset + centeringX + histoColCenter;
  });
};

exports.valueLabelYPositions = function (tags, rowCols, height) {
  var gapSpace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 40;
  return (//IS HEIGHT EVEN NECESSARY??
    tags.map(function (t, i) {
      var maxH = rowCols.filter(function (r) {
        return r.index === i;
      }).reduce(function (acc, curr) {
        if (curr.row > acc) {
          return curr.row;
        }
        return acc;
      }, 0);

      return height - maxH * STANDARD_RADIUS * PADDING - gapSpace;
    })
  );
};

},{}],285:[function(require,module,exports){
module.exports=[{"date":"1/4/2016","opp_name":"San Bernardino County Superintendent of Schools - Grants - Renewal 1","grant_project":"CDE CTE Incentive Technical Assistance Grant Application","grant_name":"","requested_dollars":"532088","awarded_dollars":"532088","grant_type":"State","platform":"K12"},{"date":"7/8/2016","opp_name":"Redford Union Schools - Grants - Renewal 1","grant_project":"Michigan School Improvement Grant Application","grant_name":"","requested_dollars":"3250000","awarded_dollars":"3250000","grant_type":"State","platform":"K12"},{"date":"1/7/2016","opp_name":"Chase Brexton Health Services, Inc. - Grants - Renewal 1","grant_project":"DHMH OB/GYN Proposal","grant_name":"MHRC","requested_dollars":"151715","awarded_dollars":"0","grant_type":"State","platform":"Healthcare"},{"date":"4/12/2017","opp_name":"Yolo County Office of Education - Grants - Renewal 2","grant_project":"2018 Head Start Proposal Support","grant_name":"Head Start","requested_dollars":"","awarded_dollars":"2805555","grant_type":"State","platform":"K12"},{"date":"01/01/1897","opp_name":"Harrington Hospital - Grants - Renewal 1","grant_project":"CHART Phase 2 Proposal","grant_name":"Chart Phase 2","requested_dollars":"3800000","awarded_dollars":"3800000","grant_type":"State","platform":"Healthcare"},{"date":"12/5/2014","opp_name":"Mid-State Technical College - Grants - Renewal 1","grant_project":"WTCS Student Success Proposal Development","grant_name":"Student Success","requested_dollars":"106565","awarded_dollars":"83166","grant_type":"State","platform":"Higher Ed"},{"date":"6/10/2013","opp_name":"Meritus Healthcare - Grants - Renewal 1","grant_project":"Hospital Bond Project Program Proposal","grant_name":"Hospital Bond Program","requested_dollars":"500000","awarded_dollars":"500000","grant_type":"State","platform":"Healthcare"},{"date":"9/29/2014","opp_name":"EXEMPLA - Lutheran Medical Center Foundation - Grants - Renewal 1","grant_project":"Tobacco Education, Prevention and Cessation Grant Program Proposal II","grant_name":"Healthy You, Healthy Baby","requested_dollars":"198769","awarded_dollars":"596000","grant_type":"State","platform":"Healthcare"},{"date":"3/2/2015","opp_name":"College of Western Idaho - Grants - Renewal 1","grant_project":"WDTF Sector Training Grant proposal production","grant_name":"WDTF Sector Training Grant","requested_dollars":"120000","awarded_dollars":"120000","grant_type":"State","platform":"Higher Ed"},{"date":"4/24/2015","opp_name":"Community Health Center - Grants - Renewal 1","grant_project":"CHEFA Targeted Investment Program Proposal","grant_name":"Targeted Investment Program","requested_dollars":"274421","awarded_dollars":"274421","grant_type":"State","platform":"Healthcare"},{"date":"1/6/2015","opp_name":"Southcoast Health - Grants - Renewal 1","grant_project":"JSI Research and Training - Cancer Pilot Project Proposal","grant_name":"JSI Cancer Disparities Grant","requested_dollars":"100000","awarded_dollars":"100000","grant_type":"State","platform":"Healthcare"},{"date":"8/8/2013","opp_name":"Ulster BOCES - Grants - Renewal 1","grant_project":"NYSDOL Unemployed Worker Training Program Application","grant_name":"Unemployed Working Training Program","requested_dollars":"100000","awarded_dollars":"100000","grant_type":"State","platform":"K12"},{"date":"1/11/2016","opp_name":"Nevada State College - Grants - Renewal 1","grant_project":"Proposal Support: Nevada STEM Workforce Challenge Grant","grant_name":"Nevada STEM Workforce Challenge Grant","requested_dollars":"54746","awarded_dollars":"54746","grant_type":"State","platform":"Higher Ed"},{"date":"1/9/2017","opp_name":"Newport News Public Schools - Grants - Renewal 2","grant_project":"21st Century Community Learning Center Proposal Review","grant_name":"21st Century Community Learning Centers","requested_dollars":"","awarded_dollars":"183860","grant_type":"State","platform":"K12"},{"date":"1/26/2016","opp_name":"Yolo County Office of Education - Grants - Renewal 1","grant_project":"CDE Tobacco-Use Prevention Education Application","grant_name":"Tobacco-Use Prevention Education Program","requested_dollars":"","awarded_dollars":"397588","grant_type":"State","platform":"K12"},{"date":"11/29/2013","opp_name":"Lenoir County Public Schools - Grants - Renewal 1","grant_project":"NC DPI Math and Science Partnership Proposal","grant_name":"Mathematics and Science Partnerships Program","requested_dollars":"","awarded_dollars":"451977","grant_type":"State","platform":"K12"},{"date":"4/20/2016","opp_name":"Total Health Care - Grants - Renewal 1","grant_project":"DHMH's Administration-Sponsored Capital Program","grant_name":"DHMH Administration Sponsored Capital Program","requested_dollars":"1299600","awarded_dollars":"1299600","grant_type":"State","platform":"Healthcare"},{"date":"9/3/2013","opp_name":"South Nassau Communities Hospital - Grants - Renewal 1","grant_project":"State of New York Block Grant","grant_name":"Disaster Recovery Social Services Block Grant","requested_dollars":"6600000","awarded_dollars":"6600000","grant_type":"State","platform":"Healthcare"},{"date":"5/9/2013","opp_name":"Mercer County Community College - Renewal 1","grant_project":"Proposal - 21st Century Community Learning Centers Program","grant_name":"21st Century Community Learning Centers (CCLC)","requested_dollars":"350000","awarded_dollars":"344665","grant_type":"State","platform":"Higher Ed"},{"date":"4/8/2014","opp_name":"Parma City School District - Grants - Renewal 1","grant_project":"21 Century Community Learning Center Application","grant_name":"21st Century Community Learning Centers (CCLC)","requested_dollars":"200000","awarded_dollars":"200000","grant_type":"State","platform":"K12"},{"date":"7/30/2012","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 1","grant_project":"2012-13 Low Income Pool (LIP) Tier-One Milestone (STC 61) Application - Final","grant_name":"Low Income Pool (LIP) Tier-One Milestone (STC 61)","requested_dollars":"850000","awarded_dollars":"850000","grant_type":"State","platform":"Healthcare"},{"date":"9/9/2013","opp_name":"United Planning Organization - Grants - Renewal 1","grant_project":"DDOE WAP Proposal","grant_name":"Low Income Weatherization Assistance Program (WAP)","requested_dollars":"1200000","awarded_dollars":"1477000","grant_type":"State","platform":"NGO"},{"date":"12/29/2017","opp_name":"Yolo County Office of Education - Grants - Renewal 2","grant_project":"CDE CMIG Quality Rating and Improvement System Block Grant Review","grant_name":"CMIG Quality Rating and Improvement System Block Grant","requested_dollars":"","awarded_dollars":"28043","grant_type":"State","platform":"K12"},{"date":"6/9/2016","opp_name":"Saint Agnes Hospital - Grants - Renewal 2","grant_project":"DHMH Minority Outreach and Technical Assistance (MOTA) Grant","grant_name":"Minority Outreach and Technical Assistance (MOTA) Grant","requested_dollars":"40000","awarded_dollars":"40000","grant_type":"State","platform":"Healthcare"},{"date":"7/17/2013","opp_name":"EXEMPLA - Lutheran Medical Center Foundation - Grants - Renewal 1","grant_project":"Tobacco Education Prevention and Cessation Grant Program Proposal","grant_name":"Tobacco Education Prevention and Cessation Grant Program","requested_dollars":"142854","awarded_dollars":"189000","grant_type":"State","platform":"Healthcare"},{"date":"9/30/2015","opp_name":"Genesis Community Health - Grants - Renewal 1","grant_project":"AHCA Grant for Community and Primary Care Services Proposal","grant_name":"ACHA Grant Program for Community and Primary Care Services","requested_dollars":"","awarded_dollars":"443100","grant_type":"State","platform":"Healthcare"},{"date":"3/8/2012","opp_name":"San Bernardino County Department of Public Health - Grants - Renewal 1","grant_project":"CA PREP","grant_name":"California Personal Responsibility and Education Program (CA PREP)","requested_dollars":"525807","awarded_dollars":"525807","grant_type":"State","platform":"Healthcare"},{"date":"4/30/2013","opp_name":"Ferguson Medical Group - Grants - Renewal 1","grant_project":"PRIMO-ACCS Health Care Delivery Systems Funding Proposal 2013-2014","grant_name":"PRIMO/ACCS Health Care Delivery Systems Funding Proposal 2013-2014","requested_dollars":"99913","awarded_dollars":"99913","grant_type":"State","platform":"Healthcare"},{"date":"8/29/2013","opp_name":"Peconic Bay Medical Center - Grants - Renewal 1","grant_project":"NYS Social Services Block Grant","grant_name":"New York Disaster Recovery Social Services Block Grant: Superstorm Sandy","requested_dollars":"1584627","awarded_dollars":"830000","grant_type":"State","platform":"Healthcare"},{"date":"12/11/2013","opp_name":"Baystate Health - Grants - Renewal 1","grant_project":"CHART Program Proposal Finalization - BFMC","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART)","requested_dollars":"476400","awarded_dollars":"476400","grant_type":"State","platform":"Healthcare"},{"date":"12/11/2013","opp_name":"Baystate Health - Grants - Renewal 1","grant_project":"CHART Program Proposal Finalization - BMLH","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART)","requested_dollars":"499600","awarded_dollars":"499600","grant_type":"State","platform":"Healthcare"},{"date":"7/18/2014","opp_name":"Lawrence General Hospital - Grants - Renewal 1","grant_project":"CHART II Prospectus","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART)","requested_dollars":"1400000","awarded_dollars":"1400000","grant_type":"State","platform":"Healthcare"},{"date":"9/12/2014","opp_name":"Milford Regional Medical Center - Grants - Renewal 1","grant_project":"CHART II Proposal","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART)","requested_dollars":"4000000","awarded_dollars":"1300000","grant_type":"State","platform":"Healthcare"},{"date":"9/12/2014","opp_name":"Baystate Health - Grants - Renewal 1","grant_project":"CHART II Proposal- Joint","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART) Phase 2","requested_dollars":"4000000","awarded_dollars":"900000","grant_type":"State","platform":"Healthcare"},{"date":"9/12/2014","opp_name":"Baystate Health - Grants - Renewal 1","grant_project":"CHART II Proposal- Franklin","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART) Phase 2","requested_dollars":"","awarded_dollars":"1800000","grant_type":"State","platform":"Healthcare"},{"date":"9/10/2014","opp_name":"Southcoast Health - Grants - Renewal 1","grant_project":"CHART Phase II Proposal","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART) Phase 2","requested_dollars":"17862313","awarded_dollars":"8000000","grant_type":"State","platform":"Healthcare"},{"date":"12/10/2013","opp_name":"Southcoast Health - Grants - Renewal 1","grant_project":"CHART Program Proposal - Tobey","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART) Phase 1","requested_dollars":"500000","awarded_dollars":"400100","grant_type":"State","platform":"Healthcare"},{"date":"12/10/2013","opp_name":"Southcoast Health - Grants - Renewal 1","grant_project":"CHART Program Proposal - St. Luke's","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART) Phase 1","requested_dollars":"500000","awarded_dollars":"385395","grant_type":"State","platform":"Healthcare"},{"date":"12/10/2013","opp_name":"Southcoast Health - Grants - Renewal 1","grant_project":"CHART Program Proposal - Charlton","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART) Phase 1","requested_dollars":"500000","awarded_dollars":"397862","grant_type":"State","platform":"Healthcare"},{"date":"9/10/2014","opp_name":"Holyoke Medical Center - Grants - Renewal 1","grant_project":"CHART Phase 2 Proposal","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART) Phase 2","requested_dollars":"4600000","awarded_dollars":"3500000","grant_type":"State","platform":"Healthcare"},{"date":"9/12/2014","opp_name":"Noble Hospital - Grants - Renewal 1","grant_project":"CHART Phase 2 Proposal","grant_name":"Community Hospital Acceleration, Revitalization, & Transformation (CHART) Phase 2","requested_dollars":"4680000","awarded_dollars":"1200000","grant_type":"State","platform":"Healthcare"},{"date":"4/2/2012","opp_name":"Coppin State University - Helene Fuld School of Nursing - Grants - Renewal 1","grant_project":"MHEC Nursing Student Retention and Success Proposal Draft 2","grant_name":"MHEC/HSCRC Nurse Support Program II (NSP II) Competitive Institutional Grants Program","requested_dollars":"921478","awarded_dollars":"539700","grant_type":"State","platform":"Higher Ed"},{"date":"2/9/2016","opp_name":"Yolo County Office of Education - Grants - Renewal 1","grant_project":"CDE QRIS Infant/Toddler Proposal Support","grant_name":"California State Preschool Program Quality Rating and Improvement System (QRIS) Block Grant","requested_dollars":"","awarded_dollars":"349510","grant_type":"State","platform":"K12"},{"date":"9/4/2015","opp_name":"Barlow Foundation - Grants - Renewal 1","grant_project":"Ahmanson Foundation - Full Proposal","grant_name":"","requested_dollars":"30000","awarded_dollars":"30000","grant_type":"Foundation","platform":"Healthcare"},{"date":"8/14/2015","opp_name":"Baystate Health - Grants - Renewal 1","grant_project":"Allen Foundation LOI","grant_name":"","requested_dollars":"15000","awarded_dollars":"15000","grant_type":"Foundation","platform":"Healthcare"},{"date":"9/25/2015","opp_name":"Anderson Regional Medical Center - Grants - Renewal 1","grant_project":"Allen Foundation","grant_name":"","requested_dollars":"15000","awarded_dollars":"15000","grant_type":"Foundation","platform":"Healthcare"},{"date":"9/4/2015","opp_name":"Southcoast Health - Grants - Renewal 1","grant_project":"AMA Foundation Healthy Living Grant Application","grant_name":"","requested_dollars":"5000","awarded_dollars":"5000","grant_type":"Foundation","platform":"Healthcare"},{"date":"11/17/2016","opp_name":"Genesis Community Health - Grants - Renewal 3","grant_project":"Boca Rio Club Proposal","grant_name":"","requested_dollars":"20000","awarded_dollars":"6349","grant_type":"Foundation","platform":"Healthcare"},{"date":"12/4/2014","opp_name":"Jersey City Medical Center ? Barnabas Health and the LibertyHealth Foundation - Grants - Renewal 1","grant_project":"Gilead Sciences Foundation Application","grant_name":"","requested_dollars":"","awarded_dollars":"100000","grant_type":"Foundation","platform":"Healthcare"},{"date":"4/10/2015","opp_name":"Covenant Healthcare - Grants - Renewal 1","grant_project":"Harry A. & Margaret D. Towsley Foundation Proposal","grant_name":"","requested_dollars":"16000","awarded_dollars":"16000","grant_type":"Foundation","platform":"Healthcare"},{"date":"2/5/2016","opp_name":"Southcoast Health - Grants - Renewal 1","grant_project":"Harvard Pilgrim Health Care 2016 Quality Grant","grant_name":"","requested_dollars":"50000","awarded_dollars":"43000","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/28/2016","opp_name":"Saint Agnes Hospital - Grants - Renewal 2","grant_project":"Hearst Foundation Application","grant_name":"","requested_dollars":"100000","awarded_dollars":"100000","grant_type":"Foundation","platform":"Healthcare"},{"date":"12/18/2015","opp_name":"The Reginald S. Lourie Center for Children's Social & Emotional Wellness - Grants - Renewal 2","grant_project":"M&T Bank Charitable Foundation","grant_name":"","requested_dollars":"10000","awarded_dollars":"10000","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/17/2014","opp_name":"Milford Regional Medical Center - Grants - Renewal 1","grant_project":"Metrowest Health Foundation Application","grant_name":"","requested_dollars":"225000","awarded_dollars":"172000","grant_type":"Foundation","platform":"Healthcare"},{"date":"7/5/2017","opp_name":"Henry J. Austin Health Center - Grants - Renewal 1","grant_project":"Nicholson Foundation Proposal","grant_name":"","requested_dollars":"200000","awarded_dollars":"200000","grant_type":"Foundation","platform":"Healthcare"},{"date":"4/15/2013","opp_name":"Christiana Care Health System - Grants - Renewal 1","grant_project":"PCORI Proposal","grant_name":"","requested_dollars":"250000","awarded_dollars":"250000","grant_type":"Foundation","platform":"Healthcare"},{"date":"6/30/2015","opp_name":"Decatur Memorial Hospital - Grants - Renewal 1","grant_project":"Pfizer Foundation Application","grant_name":"","requested_dollars":"","awarded_dollars":"0","grant_type":"Foundation","platform":"Healthcare"},{"date":"9/30/2014","opp_name":"Yavapai Regional Medical Center - Grants - Renewal 1","grant_project":"Safeway Foundation proposal","grant_name":"","requested_dollars":"30000","awarded_dollars":"30000","grant_type":"Foundation","platform":"Healthcare"},{"date":"12/2/2014","opp_name":"Self Regional Healthcare Foundation - Grants - Renewal 1","grant_project":"Susan G. Komen Full Proposal","grant_name":"","requested_dollars":"52453","awarded_dollars":"52453","grant_type":"Foundation","platform":"Healthcare"},{"date":"8/29/2013","opp_name":"Atrium Medical Center Foundation - Grants - Renewal 1","grant_project":"Warren County Foundation LOI","grant_name":"","requested_dollars":"5000","awarded_dollars":"1000","grant_type":"Foundation","platform":"Healthcare"},{"date":"7/29/2016","opp_name":"University of North Alabama - Grants - Renewal 2","grant_project":"Daniel Foundation Proposal Production - Part II","grant_name":"","requested_dollars":"","awarded_dollars":"25000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"3/16/2016","opp_name":"Hampton University - Grants - Renewal 2","grant_project":"Lilly Foundation: Proposal Review","grant_name":"","requested_dollars":"","awarded_dollars":"599676","grant_type":"Foundation","platform":"Higher Ed"},{"date":"6/19/2017","opp_name":"Rocky Mountain College - Grants - Renewal 1","grant_project":"Treacy Foundation Proposal","grant_name":"","requested_dollars":"100000","awarded_dollars":"75000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"7/26/2016","opp_name":"Elizabeth Seton High School - Grants - Renewal 2","grant_project":"Chesapeake Bay Trust - Environmental Education Mini Grant Application","grant_name":"","requested_dollars":"5000","awarded_dollars":"5000","grant_type":"Foundation","platform":"K12"},{"date":"8/13/2015","opp_name":"San Bernardino County Superintendent of Schools - Grants - Renewal 1","grant_project":"Gates Foundation Proposal Review","grant_name":"","requested_dollars":"","awarded_dollars":"1180000","grant_type":"Foundation","platform":"K12"},{"date":"12/1/2015","opp_name":"Elizabeth Seton High School - Grants - Renewal 2","grant_project":"Carozza Foundation Application","grant_name":"","requested_dollars":"7000","awarded_dollars":"7000","grant_type":"Foundation","platform":"K12"},{"date":"1/4/2016","opp_name":"Douglas County School District - Queue 2 - Grants - Renewal 2","grant_project":"Century Link Technology Grant Application","grant_name":"","requested_dollars":"10000","awarded_dollars":"10000","grant_type":"Foundation","platform":"K12"},{"date":"2/12/2016","opp_name":"Falcon School District 49 - Grants - Renewal 1","grant_project":"Colorado Health Foundation Proposal Review","grant_name":"","requested_dollars":"110000","awarded_dollars":"110000","grant_type":"Foundation","platform":"K12"},{"date":"9/9/2015","opp_name":"Goshen Community Schools - Grants - Renewal 1","grant_project":"Kroger Co. Foundation LOR Draft One","grant_name":"","requested_dollars":"5000","awarded_dollars":"5000","grant_type":"Foundation","platform":"K12"},{"date":"9/20/2013","opp_name":"American Council on Education - Grants - Renewal 1","grant_project":"Lumina Foundation Proposal","grant_name":"","requested_dollars":"","awarded_dollars":"400000","grant_type":"Foundation","platform":"NGO"},{"date":"11/23/2015","opp_name":"Total Health Care - Grants - Renewal 1","grant_project":"Care First - Expanding Access to Medical Care through Telemedicine","grant_name":"x","requested_dollars":"245046","awarded_dollars":"245046","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/28/2009","opp_name":"Tulsa Community College - Grants - Renewal 1","grant_project":"CCIP","grant_name":"CCIP","requested_dollars":"200000","awarded_dollars":"200000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"4/10/2015","opp_name":"Baxter Regional Hospital Foundation - Grants - Renewal 1","grant_project":"Pfizer Foundation Proposal Development","grant_name":"Pfizer","requested_dollars":"7139","awarded_dollars":"7139","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/25/2016","opp_name":"University of Northern Colorado - Grants - Renewal 2","grant_project":"100Kin10 Proposal Review","grant_name":"100kin10","requested_dollars":"147000","awarded_dollars":"147000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"5/14/2012","opp_name":"Family Matters of Greater Washington - Grants - Renewal 2","grant_project":"PNC Ways to Work Application - Final Review","grant_name":"Ways to Work","requested_dollars":"10000","awarded_dollars":"10000","grant_type":"Foundation","platform":"NGO"},{"date":"11/24/2015","opp_name":"Health Solutions - Grants - Renewal 2","grant_project":"David and Lucille Packard Foundation LOI","grant_name":"Pueblo Grants","requested_dollars":"25000","awarded_dollars":"0","grant_type":"Foundation","platform":"Healthcare"},{"date":"6/27/2017","opp_name":"Pocono Health Foundation - Grants - Renewal 3","grant_project":"PNC Foundation Proposal","grant_name":"PNC Foundation","requested_dollars":"10000","awarded_dollars":"10000","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/7/2014","opp_name":"Virginia Mason Foundation - Grants - Renewal 4","grant_project":"St. Jude Foundation Proposal - St. Jude Foundation","grant_name":"Heart to Heart","requested_dollars":"20000","awarded_dollars":"7500","grant_type":"Foundation","platform":"Healthcare"},{"date":"5/6/2016","opp_name":"Temple University - Grants - Renewal 2","grant_project":"GA - Gamero - Foundation Proposal: Proposal Review","grant_name":"Research Grant","requested_dollars":"","awarded_dollars":"78000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"10/18/2012","opp_name":"Great Circle, Inc.- Grants - Renewal 1","grant_project":"Great Circle Strategy Counts Proposal Final Draft","grant_name":"Strategy Counts","requested_dollars":"100000","awarded_dollars":"80000","grant_type":"Foundation","platform":"NGO"},{"date":"7/9/2012","opp_name":"City University of Seattle - Grants - Renewal 2","grant_project":"Norcliffe Mobile Media Proposal - Final","grant_name":"Mobile Media Lab","requested_dollars":"25000","awarded_dollars":"25000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"10/3/2012","opp_name":"Freehold Regional High School District - Renewal 2","grant_project":"Project Ignition Proposal","grant_name":"Project Ignition","requested_dollars":"2000","awarded_dollars":"2000","grant_type":"Foundation","platform":"K12"},{"date":"11/20/2015","opp_name":"Decatur Memorial Hospital - Grants - Renewal 2","grant_project":"Cardinal Health E3 Program Proposal","grant_name":"E3 Patient Safety","requested_dollars":"150000","awarded_dollars":"0","grant_type":"Foundation","platform":"Healthcare"},{"date":"7/10/2014","opp_name":"St. Mary's Hospital Foundation - Grants - Renewal 1","grant_project":"Raskob Foundation Application","grant_name":"Raskob Foundation","requested_dollars":"20000","awarded_dollars":"20000","grant_type":"Foundation","platform":"Healthcare"},{"date":"8/5/2016","opp_name":"Holy Family University - Upsell - Grants - Renewal 1","grant_project":"Lab Funding Concept and Proposal Development","grant_name":"Alden Trust Grant","requested_dollars":"149500","awarded_dollars":"149500","grant_type":"Foundation","platform":"Higher Ed"},{"date":"10/24/2014","opp_name":"Elizabeth Seton High School - Grants - Renewal 1","grant_project":"Raskob Foundation Application","grant_name":"Raskob Foundation","requested_dollars":"50000","awarded_dollars":"10000","grant_type":"Foundation","platform":"K12"},{"date":"6/3/2014","opp_name":"Meritus Healthcare - Grants - Renewal 1","grant_project":"Appalachian Regional Commission Telehealth Proposal Phase II","grant_name":"Telehealth Program","requested_dollars":"501932","awarded_dollars":"501932","grant_type":"Foundation","platform":"Healthcare"},{"date":"9/17/2015","opp_name":"Chase Brexton Health Services, Inc. - Grants - Renewal 1","grant_project":"Stulman Foundation Proposal","grant_name":"Stulman Foundation","requested_dollars":"150000","awarded_dollars":"100000","grant_type":"Foundation","platform":"Healthcare"},{"date":"11/12/2013","opp_name":"St. Mary's Hospital Foundation - Grants - Renewal 1","grant_project":"March of Dimes - Centering Pregnancy Proposal","grant_name":"CenteringPregnancy","requested_dollars":"10000","awarded_dollars":"10000","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/14/2011","opp_name":"Hinds Community College - Grants - Renewal 1","grant_project":"Gateway to College","grant_name":"Gateway to College","requested_dollars":"440000","awarded_dollars":"440000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"8/31/2016","opp_name":"Young Mens Christian Association Of Greater Louisville - Grants - Renewal 1","grant_project":"Walmart Foundation","grant_name":"Walmart Foundation","requested_dollars":"30000","awarded_dollars":"30000","grant_type":"Foundation","platform":"NGO"},{"date":"2/27/2014","opp_name":"Saint Agnes Hospital - Grants - Renewal 1","grant_project":"AstraZeneca Proposal Review","grant_name":"Connections to Care","requested_dollars":"215647","awarded_dollars":"215647","grant_type":"Foundation","platform":"Healthcare"},{"date":"4/11/2016","opp_name":"Baxter Regional Hospital Foundation - Grants - Renewal 1","grant_project":"Pfizer Proposal Resubmission","grant_name":"Pfizer Resubmission","requested_dollars":"6714","awarded_dollars":"6714","grant_type":"Foundation","platform":"Healthcare"},{"date":"1/21/2016","opp_name":"Norwich University - Grants - Renewal 1","grant_project":"VGN Review: Dr. Bradke","grant_name":"Pilot Grant Program","requested_dollars":"","awarded_dollars":"25000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"9/25/2017","opp_name":"Opelousas General Health System Foundation - Grants - Renewal 1","grant_project":"Cleco Community Fund Proposal","grant_name":"Cleco Community Fund","requested_dollars":"20000","awarded_dollars":"20000","grant_type":"Foundation","platform":"Healthcare"},{"date":"7/28/2014","opp_name":"Phelps County Regional Medical Center - Grants - Renewal 1","grant_project":"Missouri Foundation for Health - Special Projects Proposal","grant_name":"Special Projects RFP","requested_dollars":"499252","awarded_dollars":"499252","grant_type":"Foundation","platform":"Healthcare"},{"date":"6/5/2017","opp_name":"Avera Health - Grants - Renewal 2","grant_project":"PCORI P2P LOI Review/Consultation","grant_name":"Pipeline to Proposal","requested_dollars":"","awarded_dollars":"0","grant_type":"Foundation","platform":"Healthcare"},{"date":"11/18/2016","opp_name":"Texas A&M University-San Antonio - Grants - Renewal 1","grant_project":"Greater Texas Foundation Proposal Production","grant_name":"Scholars 2.0 Program","requested_dollars":"1440000","awarded_dollars":"1440000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"10/13/2016","opp_name":"University of Northern Colorado - Grants - Renewal 2","grant_project":"HHMI Inclusive Excellence Proposal Support","grant_name":"Inclusive Excellence","requested_dollars":"","awarded_dollars":"1000000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"10/7/2016","opp_name":"University of South Dakota - Grants - Renewal 2","grant_project":"HHMI Inclusive Excellence Proposal Support","grant_name":"Inclusive Excellence","requested_dollars":"","awarded_dollars":"1000000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"5/24/2017","opp_name":"Opelousas General Health System Foundation - Grants - Renewal 1","grant_project":"Blue Cross Blue Shield Louisiana Proposal","grant_name":"Horizon Grant Program","requested_dollars":"10000","awarded_dollars":"0","grant_type":"Foundation","platform":"Healthcare"},{"date":"3/14/2014","opp_name":"Maury Regional Health Care Foundation - Grants - Renewal 1","grant_project":"Kroger Co. Foundation Proposal","grant_name":"Kroger Co. Foundation","requested_dollars":"6000","awarded_dollars":"6000","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/15/2015","opp_name":"Health Solutions - Grants - Renewal 2","grant_project":"Connecting Communities and Care Proposal","grant_name":"Connecting Communities","requested_dollars":"200000","awarded_dollars":"200000","grant_type":"Foundation","platform":"Healthcare"},{"date":"5/23/2018","opp_name":"Rocky Mountain College - Grants - Renewal 2","grant_project":"Sunderland Foundation - Proposal Production","grant_name":"Higher Education Grant","requested_dollars":"200000","awarded_dollars":"100000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"1/27/2015","opp_name":"Health Choice Network - Grants - Renewal 1","grant_project":"Wells Fargo Foundation Application","grant_name":"Wells Fargo Foundation","requested_dollars":"10000","awarded_dollars":"10000","grant_type":"Foundation","platform":"NGO"},{"date":"9/26/2016","opp_name":"Kalispell Regional Healthcare Foundation - Grants - Renewal 1","grant_project":"Halt Cancer X Proposal","grant_name":"Halt X Cancer Screening","requested_dollars":"24000","awarded_dollars":"24000","grant_type":"Foundation","platform":"Healthcare"},{"date":"11/16/2015","opp_name":"Barlow Foundation - Grants - Renewal 1","grant_project":"Sidney Stern Memorial Trust Proposal","grant_name":"Sidney Stern Foundation","requested_dollars":"15000","awarded_dollars":"10000","grant_type":"Foundation","platform":"Healthcare"},{"date":"9/18/2012","opp_name":"Southwest Mississippi Regional Medical Center - Grants - Renewal 1","grant_project":"McRae Foundation - Water Tower LOI","grant_name":"Water Tower Construction","requested_dollars":"25000","awarded_dollars":"5000","grant_type":"Foundation","platform":"Healthcare"},{"date":"1/27/2017","opp_name":"Health Solutions - Grants - Renewal 3","grant_project":"Beacon Health Integration Narrative","grant_name":"Beacon Health Integration","requested_dollars":"600000","awarded_dollars":"600000","grant_type":"Foundation","platform":"Healthcare"},{"date":"12/5/2016","opp_name":"Total Health Care - Grants - Renewal 2","grant_project":"France Merrick Full Proposal","grant_name":"France Merrick Foundation","requested_dollars":"250000","awarded_dollars":"250000","grant_type":"Foundation","platform":"Healthcare"},{"date":"6/15/2017","opp_name":"Community Health Center - Grants - Renewal 2","grant_project":"Colorado Health Foundation Revision","grant_name":"Colorado Health Foundation","requested_dollars":"800000","awarded_dollars":"600000","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/24/2014","opp_name":"Maury Regional Health Care Foundation - Grants - Renewal 1","grant_project":"First Tennessee Foundation Online Application","grant_name":"First Tennessee Foundation","requested_dollars":"6000","awarded_dollars":"6000","grant_type":"Foundation","platform":"Healthcare"},{"date":"5/26/2016","opp_name":"University of Denver - Grants - Queue 2 - Renewal 1","grant_project":"American Academy of Religion Regional Development Grant Review","grant_name":"Regional Development Grant","requested_dollars":"","awarded_dollars":"3092","grant_type":"Foundation","platform":"Higher Ed"},{"date":"3/14/2016","opp_name":"Oakwood University - Grants - Renewal 1","grant_project":"UNCF Career Builder Proposal","grant_name":"Career Pathways Initiative","requested_dollars":"100000","awarded_dollars":"100000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"10/19/2016","opp_name":"Oakwood University - Grants - Renewal 2","grant_project":"UNCF Career Pathways Implementation Grant","grant_name":"Career Pathways Initiative","requested_dollars":"","awarded_dollars":"6000000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"8/20/2016","opp_name":"Wiley College - Grants - Renewal 1","grant_project":"UNCF CPI - FYEP best practices proposal research","grant_name":"Career Pathways Initiative","requested_dollars":"","awarded_dollars":"1000000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"1/15/2016","opp_name":"Wiley College - Grants - Renewal 1","grant_project":"UNCF CPI - Wiley: Letter of Inquiry/Preproposal","grant_name":"Career Pathways Initiative","requested_dollars":"50000","awarded_dollars":"50000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"3/10/2016","opp_name":"Wiley College - Grants - Renewal 1","grant_project":"Wiley - UNCF Career�Pathways Initiative: Proposal Production","grant_name":"Lily Pathways Planning Grant","requested_dollars":"50000","awarded_dollars":"50000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"3/17/2016","opp_name":"Wiley College - Grants - Renewal 1","grant_project":"Jarvis - UNCF Career�Pathways Initiative: Proposal Production","grant_name":"Lily Pathways Planning Grant","requested_dollars":"50000","awarded_dollars":"50000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"6/18/2015","opp_name":"Pitt County Schools - Grants - Renewal 1","grant_project":"Z. Smith Reynolds Foundation Application","grant_name":"Z. Smith Reynolds Foundation","requested_dollars":"225000","awarded_dollars":"130000","grant_type":"Foundation","platform":"K12"},{"date":"7/13/2017","opp_name":"Methodist Le Bonheur Healthcare - Grants - Renewal 3","grant_project":"Pfizer - Healthcare Charitables","grant_name":"Pfizer Healthcare Charitables","requested_dollars":"20000","awarded_dollars":"5000","grant_type":"Foundation","platform":"Healthcare"},{"date":"4/17/2018","opp_name":"Community Health Center - Grants - Renewal 2","grant_project":"Telligen Community Initiative Proposal Review","grant_name":"Telligen Community Initiative","requested_dollars":"50000","awarded_dollars":"50000","grant_type":"Foundation","platform":"Healthcare"},{"date":"9/8/2016","opp_name":"University of Northern Colorado - Grants - Renewal 2","grant_project":"Louisville Institute Project Grant for Researchers Proposal Review","grant_name":"Project Grant for Researchers","requested_dollars":"","awarded_dollars":"24948","grant_type":"Foundation","platform":"Higher Ed"},{"date":"4/27/2016","opp_name":"Freehold Regional High School District - Renewal 3","grant_project":"Model Classroom Grant Support","grant_name":"Model Classroom Grant Program","requested_dollars":"10000","awarded_dollars":"10000","grant_type":"Foundation","platform":"K12"},{"date":"6/9/2015","opp_name":"South Shore Charitable Foundation - Grants - Renewal 1","grant_project":"Behavioral Health LOI Series - Charles A. Frueauff Foundation LOI","grant_name":"Charles A. Frueauff Foundation","requested_dollars":"10000","awarded_dollars":"0","grant_type":"Foundation","platform":"Healthcare"},{"date":"7/12/2012","opp_name":"Children's Hospital of Orange County Foundation - Grants - Renewal 1","grant_project":"Nicholas Endowment - Patient Connect Proposal","grant_name":"Geek Squad and Patient Connect","requested_dollars":"78500","awarded_dollars":"78500","grant_type":"Foundation","platform":"Healthcare"},{"date":"6/26/2014","opp_name":"Fort Sanders Foundation - Grants - Renewal 1","grant_project":"Thompson Charitable Foundation LOR","grant_name":"Thompson Charitable Foundation","requested_dollars":"50000","awarded_dollars":"10000","grant_type":"Foundation","platform":"Healthcare"},{"date":"3/4/2014","opp_name":"Glendale Memorial Health Foundation - Grants - Renewal 1","grant_project":"UniHealth Foundation Full Proposal - Stroke Program Proposal II","grant_name":"Stroke Program Nurse Navigator","requested_dollars":"575000","awarded_dollars":"601296","grant_type":"Foundation","platform":"Healthcare"},{"date":"12/10/2010","opp_name":"Indiana Wesleyan University - School of Nursing - Grants - Renewal 1","grant_project":"Robert Wood Johnson Nursing Scholarship Program","grant_name":"New Careers in Nursing Program","requested_dollars":"50000","awarded_dollars":"50000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"3/4/2015","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 2","grant_project":"The Children's Trust Proposal","grant_name":"Children's Trust Enrollment Award","requested_dollars":"120298","awarded_dollars":"120298","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/2/2013","opp_name":"St. Mary's Hospital Foundation - Grants - Renewal 1","grant_project":"Goodwin Family Foundation LOI - Bone Marrow Transplant Program Development","grant_name":"Bone Marrow Transplant Programming","requested_dollars":"15000","awarded_dollars":"15000","grant_type":"Foundation","platform":"Healthcare"},{"date":"2/7/2014","opp_name":"Southcoast Health - Grants - Renewal 1","grant_project":"Harvard Pilgrim Health Care 2014 Quality Grant","grant_name":"Connecting Care in Behavior Health","requested_dollars":"100000","awarded_dollars":"0","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/1/2012","opp_name":"Saint Francis Health Center Foundation - Grants - Renewal 1","grant_project":"Humphreys Charitable Trust Proposal - Mobile Clinic","grant_name":"St. Francis-Washburn Mobile Clinic","requested_dollars":"50000","awarded_dollars":"25000","grant_type":"Foundation","platform":"Healthcare"},{"date":"3/16/2012","opp_name":"Children's Hospital of Orange County Foundation - Grants - Renewal 1","grant_project":"Lon V. Smith - Infectious Disease","grant_name":"Infectious Disease Program Support","requested_dollars":"25000","awarded_dollars":"25000","grant_type":"Foundation","platform":"Healthcare"},{"date":"1/2/2015","opp_name":"Community Hospital of the Monterey Peninsula - Grants - Renewal 1","grant_project":"Stephen and Mary Birch Foundation Proposal - Linear Accelerator","grant_name":"Linear Accelerator Capital Request","requested_dollars":"200000","awarded_dollars":"200000","grant_type":"Foundation","platform":"Healthcare"},{"date":"6/24/2014","opp_name":"Horizon Education Alliance - Renewal 1","grant_project":"Elkhart County Community Foundation Proposal - Triple P Proposal","grant_name":"Community Investment Grant Program","requested_dollars":"350000","awarded_dollars":"350000","grant_type":"Foundation","platform":"K12"},{"date":"6/29/2012","opp_name":"Riverside Healthcare Foundation - Grants - Renewal 2","grant_project":"Cigna REACH Wellness Application","grant_name":"Employee Wellness Program Expansion","requested_dollars":"10000","awarded_dollars":"10000","grant_type":"Foundation","platform":"Healthcare"},{"date":"9/6/2012","opp_name":"Cochise College - Grants - Renewal 1","grant_project":"Blaine Bandi LOI Review","grant_name":"Arizona Health Facilities Authority","requested_dollars":"48000","awarded_dollars":"25000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"5/17/2017","opp_name":"Texas A&M University - Grants - Renewal 1","grant_project":"Arnold and Mabel Beckman Foundation Proposal Review","grant_name":"Arnold and Mabel Beckman Foundation","requested_dollars":"","awarded_dollars":"156000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"2/13/2015","opp_name":"Elizabeth Seton High School - Grants - Renewal 1","grant_project":"National Harbor Community Outreach Grant","grant_name":"Sharing Prince George's County Fund","requested_dollars":"30000","awarded_dollars":"10000","grant_type":"Foundation","platform":"K12"},{"date":"1/24/2013","opp_name":"AGAPE Family Ministries - Grants - Renewal 1","grant_project":"Health Foundation of South Florida EMR Proposal","grant_name":"Behavioral Electronic Health Record","requested_dollars":"75000","awarded_dollars":"75000","grant_type":"Foundation","platform":"NGO"},{"date":"7/29/2013","opp_name":"Saint Francis Health Center Foundation - Grants - Renewal 1","grant_project":"Humphreys Charitable Trust","grant_name":"Emergency Department Capital Request","requested_dollars":"100000","awarded_dollars":"100000","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/8/2014","opp_name":"Peconic Bay Medical Center - Grants - Renewal 1","grant_project":"Avon Metastatic Breast Cancer Application","grant_name":"Metastic Breast Cancer Grants Program","requested_dollars":"25000","awarded_dollars":"25000","grant_type":"Foundation","platform":"Healthcare"},{"date":"1/17/2014","opp_name":"Central Maine Healthcare - Grants - Renewal 1","grant_project":"The William Bingham II Betterment Fund Application","grant_name":"Pre-Diabetes Prevention Program Grant","requested_dollars":"40000","awarded_dollars":"40000","grant_type":"Foundation","platform":"Healthcare"},{"date":"3/24/2015","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 2","grant_project":"The Children's Trust Proposal - School Health Program","grant_name":"Children's Trust School-Based Services","requested_dollars":"2800000","awarded_dollars":"2800000","grant_type":"Foundation","platform":"Healthcare"},{"date":"2/21/2014","opp_name":"EXEMPLA - Lutheran Medical Center Foundation - Grants - Renewal 1","grant_project":"Daniels Fund Proposal - West Pines","grant_name":"Substance Abuse Treatment Scholarships","requested_dollars":"50000","awarded_dollars":"50000","grant_type":"Foundation","platform":"Healthcare"},{"date":"12/5/2013","opp_name":"St. Mary's Hospital Foundation - Grants - Renewal 1","grant_project":"STEPHEN & MARY BIRCH FOUNDATION LOI","grant_name":"Stephen and Mary Birch Foundation Grant","requested_dollars":"25000","awarded_dollars":"25000","grant_type":"Foundation","platform":"Healthcare"},{"date":"11/4/2013","opp_name":"Central Maine Healthcare - Grants - Renewal 1","grant_project":"The Doree Taylor Charitable Foundation Application Drafts 1-3","grant_name":"Doree Taylor Charitable Foundation Grant","requested_dollars":"40000","awarded_dollars":"40000","grant_type":"Foundation","platform":"Healthcare"},{"date":"4/1/2015","opp_name":"Health Solutions - Grants - Renewal 1","grant_project":"El Pomar Foundation Proposal Development","grant_name":"El Pomar Foundation Proposal Development","requested_dollars":"40000","awarded_dollars":"0","grant_type":"Foundation","platform":"Healthcare"},{"date":"5/9/2013","opp_name":"Wentworth Institute of Technology - Grants - Renewal 3","grant_project":"Shrafft Foundation Proposal","grant_name":"Minority Empowerment Scholarship Program","requested_dollars":"25000","awarded_dollars":"25000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"4/12/2016","opp_name":"Newport News Public Schools - Grants - Renewal 1","grant_project":"Northrop Grumman Corporate Contributions Application","grant_name":"Northrop Grumman Corporate Contributions","requested_dollars":"12375","awarded_dollars":"12375","grant_type":"Foundation","platform":"K12"},{"date":"8/19/2015","opp_name":"Anne Arundel Medical Center - Grants - Renewal 1","grant_project":"Bristol Myers Squibb Foundation Proposal","grant_name":"Specialty Care for Vulnerable Populations","requested_dollars":"1246567","awarded_dollars":"1246567","grant_type":"Foundation","platform":"Healthcare"},{"date":"12/5/2014","opp_name":"Baystate Health - Grants - Renewal 1","grant_project":"Eugene Washington PCORI Engagement Award Proposal","grant_name":"PCORI Eugene Washington Engagement Awards","requested_dollars":"227105","awarded_dollars":"227105","grant_type":"Foundation","platform":"Healthcare"},{"date":"6/5/2015","opp_name":"Methodist Le Bonheur Healthcare - Grants - Renewal 1","grant_project":"PCORI Eugene Washington Engagement Award Proposal","grant_name":"PCORI Eugene Washington Engagement Awards","requested_dollars":"249009","awarded_dollars":"249009","grant_type":"Foundation","platform":"Healthcare"},{"date":"3/27/2013","opp_name":"Community Medical Center - Grants - Renewal 1","grant_project":"Community Medical Center Transportation Proposal Provident Foundation","grant_name":"Diabetes Education Transportation Program","requested_dollars":"10000","awarded_dollars":"5000","grant_type":"Foundation","platform":"Healthcare"},{"date":"9/24/2013","opp_name":"Perry Township Schools - Grants - Renewal 1","grant_project":"Kroger Foundation LOI Draft 1","grant_name":"Teacher Professional Development Training","requested_dollars":"10200","awarded_dollars":"5000","grant_type":"Foundation","platform":"K12"},{"date":"12/30/2015","opp_name":"Rosalind Franklin University of Medicine and Science - Grants - Renewal 1","grant_project":"American Orthopaedic Foot and Ankle Society Proposal Review","grant_name":"American Orthopaedic Foot and Ankle Society","requested_dollars":"19577","awarded_dollars":"19577","grant_type":"Foundation","platform":"Higher Ed"},{"date":"8/14/2012","opp_name":"Children's Hospital of Orange County Foundation - Grants - Renewal 1","grant_project":"Weingart Capital Ask - Full Proposal","grant_name":"Weingart Foundation Capital Grant Application","requested_dollars":"500000","awarded_dollars":"500000","grant_type":"Foundation","platform":"Healthcare"},{"date":"5/22/2013","opp_name":"Cochise College - Grants - Renewal 2","grant_project":"Cochise Community Foundation Proposal - Gilman","grant_name":"Cochise Community Foundation Application 2013","requested_dollars":"4000","awarded_dollars":"4000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"7/10/2014","opp_name":"Capital Caring - Grants - Renewal 1","grant_project":"National Institute for Health Care Management Foundation","grant_name":"National Institute for Health Care Management","requested_dollars":"150000","awarded_dollars":"0","grant_type":"Foundation","platform":"NGO"},{"date":"10/30/2013","opp_name":"Mission Hospital Foundation - Grants - Renewal 1","grant_project":"Guenther Foundation Application - NSI","grant_name":"Mission Hospital Neuroscience and Spine Institute","requested_dollars":"575000","awarded_dollars":"500000","grant_type":"Foundation","platform":"Healthcare"},{"date":"4/14/2014","opp_name":"EXEMPLA - Lutheran Medical Center Foundation - Grants - Renewal 1","grant_project":"ASHP Award for Excellence Application Revision","grant_name":"ASHP Award for Excellence Pharmacist?s Role Category","requested_dollars":"25000","awarded_dollars":"25000","grant_type":"Foundation","platform":"Healthcare"},{"date":"1/13/2012","opp_name":"Children's Hospital of Orange County Foundation - Grants - Renewal 1","grant_project":"Hearst Capital Ask","grant_name":"Emergency Department Nurses Station Naming Opportunity","requested_dollars":"125000","awarded_dollars":"100000","grant_type":"Foundation","platform":"Healthcare"},{"date":"6/27/2013","opp_name":"MedStar Health - Grants - Renewal 1","grant_project":"Raskob Foundation for Catholic Activities - Hair Heart Health Parish Nurses","grant_name":"Food and Information for Stronger Heart Health (FISHH)","requested_dollars":"18000","awarded_dollars":"10000","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/29/2013","opp_name":"Maryland Patient Safety Center - Grants - Renewal 1","grant_project":"Delaplaine Foundation Application - GOS","grant_name":"Maryland Patient Safety Center Operations Fund Request","requested_dollars":"10000","awarded_dollars":"2000","grant_type":"Foundation","platform":"NGO"},{"date":"9/19/2012","opp_name":"Proctor Health Care - Grants - Renewal 1","grant_project":"Cancer Center for Healthy Living - Coleman Foundation Proposal - Final","grant_name":"Oncology Medical Nutrition Therapy for Central Illinois","requested_dollars":"207500","awarded_dollars":"207500","grant_type":"Foundation","platform":"Healthcare"},{"date":"5/1/2014","opp_name":"Virginia Mason Foundation - Grants - Renewal 4","grant_project":"BBH MAC AIDS Reporting and Proposal","grant_name":"Bailey-Boushay House (BBH) Outpatient Nutrition Program","requested_dollars":"10000","awarded_dollars":"10000","grant_type":"Foundation","platform":"Healthcare"},{"date":"2/26/2014","opp_name":"Community Hospital of the Monterey Peninsula - Grants - Renewal 1","grant_project":"Hearst Foundations NICHE Application","grant_name":"Nurses Improving Care for Healthsystem Elders (NICHE) Program","requested_dollars":"100000","awarded_dollars":"50000","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/12/2012","opp_name":"University Health Care Foundation - Grants - Renewal 1","grant_project":"Wells Fargo Foundation Proposal: Alzheimer's Facility","grant_name":"Wells Fargo Foundation Grant Support for Alzheimer's Facility","requested_dollars":"15000","awarded_dollars":"15000","grant_type":"Foundation","platform":"Healthcare"},{"date":"3/1/2013","opp_name":"Cochise College - Grants - Renewal 2","grant_project":"APS STEM K-12 Proposal","grant_name":"ASPIRE Project (Arizona STEM Pathways in a Rural Environment)","requested_dollars":"26250","awarded_dollars":"26250","grant_type":"Foundation","platform":"Higher Ed"},{"date":"6/26/2015","opp_name":"Columbia University Medical Center - Upsell - Grants - Renewal 1","grant_project":"PCORI Engagement Award (EAIN): Research Meeting and Conference Support Proposal","grant_name":"Engagement Award (EAIN): Research Meeting and Conference Support","requested_dollars":"50000","awarded_dollars":"50000","grant_type":"Foundation","platform":"Healthcare"},{"date":"7/23/2012","opp_name":"Cochise College - Grants - Renewal 1","grant_project":"Freeport-McMoran Campus Safety Proposal - Final","grant_name":"Freeport-McMoRan Copper & Gold Foundation Social Investment Application","requested_dollars":"58000","awarded_dollars":"58000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"8/27/2012","opp_name":"Cochise College - Grants - Renewal 1","grant_project":"Freeport-McMoran Transit Proposal","grant_name":"Freeport-McMoRan Copper & Gold Foundation Social Investment Application","requested_dollars":"65000","awarded_dollars":"65000","grant_type":"Foundation","platform":"Higher Ed"},{"date":"9/19/2013","opp_name":"AGAPE Family Ministries - Grants - Renewal 1","grant_project":"Florida Blue Foundation Application","grant_name":"Agape?s Comprehensive Behavioral Electronic Health Record (BEHR) system","requested_dollars":"300000","awarded_dollars":"300000","grant_type":"Foundation","platform":"NGO"},{"date":"5/11/2012","opp_name":"Lodi Memorial Hospital Foundation - Grants - Renewal 1","grant_project":"California Endowment - Invited Request","grant_name":"Collective Impact Fund - Promoting Health Career Opportunities for Youth","requested_dollars":"50000","awarded_dollars":"100000","grant_type":"Foundation","platform":"Healthcare"},{"date":"10/20/2015","opp_name":"Infirmary Health System - Grants - Renewal 1","grant_project":"Genentech Proposal","grant_name":"Stroke Systems of Care, Together We Are More 2nd Annual Stroke Symposium","requested_dollars":"15000","awarded_dollars":"15000","grant_type":"Foundation","platform":"Healthcare"},{"date":"8/3/2017","opp_name":"Henry J. Austin Health Center - Grants - Renewal 1","grant_project":"CVS Health Foundation Proposal","grant_name":"Innovative Approaches for Prescription Drug Abuse Management and Prevention","requested_dollars":"","awarded_dollars":"0","grant_type":"Foundation","platform":"Healthcare"},{"date":"8/26/2013","opp_name":"MedStar Health - Grants - Renewal 1","grant_project":"Stulman Foundation Geriatrics Program Proposal","grant_name":"The MedStar Good Samaritan Hospital Life Plan Integrated Geriatrics Program","requested_dollars":"100000","awarded_dollars":"100000","grant_type":"Foundation","platform":"Healthcare"},{"date":"1/13/2012","opp_name":"Children's Hospital of Orange County Foundation - Grants - Renewal 1","grant_project":"The Walden and Jean Young Shaw Foundation","grant_name":"Child Life, Nursing Research Fellowships, and Complementary & Alternative Medicine","requested_dollars":"115000","awarded_dollars":"80000","grant_type":"Foundation","platform":"Healthcare"},{"date":"9/9/2016","opp_name":"Drexel University - Single Project + On-site - Renewal 1","grant_project":"ED Promise Neighborhoods Implementation Grant Proposal","grant_name":"","requested_dollars":"","awarded_dollars":"29993057","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/10/2016","opp_name":"Portland State University - Grants - Renewal 1","grant_project":"USDA Proposal","grant_name":"x","requested_dollars":"","awarded_dollars":"9374","grant_type":"Federal","platform":"Higher Ed"},{"date":"10/11/2016","opp_name":"Des Moines University - Grants - Renewal 1","grant_project":"NIH R15 New Submission - Dr. Marcus","grant_name":"R15","requested_dollars":"380000","awarded_dollars":"380000","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/3/2018","opp_name":"Western Michigan University - Grants - Renewal 3","grant_project":"Mission Critical NSF MRI Proposal Review - Burns","grant_name":"MRI","requested_dollars":"","awarded_dollars":"621618","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/8/2016","opp_name":"University of Maryland Baltimore - School of Medicine - Grants - Renewal 1","grant_project":"K23 Proposal Review","grant_name":"K23","requested_dollars":"915000","awarded_dollars":"915000","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/25/2014","opp_name":"East Carolina University - Grants - Renewal 1","grant_project":"BSOM R15 Proposal (Review & Support) - Phase 2","grant_name":"R15","requested_dollars":"","awarded_dollars":"434202","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/29/2016","opp_name":"University of Denver - Grants - Renewal 2","grant_project":"NIH R01 Proposal Support - Kim","grant_name":"R01","requested_dollars":"","awarded_dollars":"2800000","grant_type":"Federal","platform":"Higher Ed"},{"date":"10/6/2016","opp_name":"Eastern Shore Community College - Grants - Renewal 2","grant_project":"NSF ATE Proposal Development","grant_name":"ATE","requested_dollars":"","awarded_dollars":"365508","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/10/2017","opp_name":"Auburn University - Grants - Renewal 2","grant_project":"NSF MRI Review - Thurow","grant_name":"MRI","requested_dollars":"","awarded_dollars":"1105277","grant_type":"Federal","platform":"Higher Ed"},{"date":"10/5/2016","opp_name":"Georgia State University - Grants - Renewal 1","grant_project":"NIH R03 Proposal Review - Lai","grant_name":"R03","requested_dollars":"","awarded_dollars":"79303","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/9/2016","opp_name":"University of South Dakota - Grants - Renewal 2","grant_project":"NSF MRI Review - Sun","grant_name":"MRI","requested_dollars":"","awarded_dollars":"262735","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/23/2016","opp_name":"University of South Dakota - Grants - Renewal 2","grant_project":"NSF MRI Proposal Review - Forster","grant_name":"MRI","requested_dollars":"","awarded_dollars":"103871","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/10/2017","opp_name":"University of South Dakota - Grants - Renewal 2","grant_project":"NIH R03 Proposal Support","grant_name":"R03","requested_dollars":"","awarded_dollars":"146530","grant_type":"Federal","platform":"Higher Ed"},{"date":"8/10/2017","opp_name":"University of South Dakota - Grants - Renewal 3","grant_project":"NSF REU Proposal Review - Sykes","grant_name":"REU","requested_dollars":"","awarded_dollars":"207890","grant_type":"Federal","platform":"Higher Ed"},{"date":"11/10/2016","opp_name":"University of Louisville J.B. Speed School of Engineering - Grants - Renewal 1","grant_project":"Computer and Network Systems (CNS)/Networking Technology and Systems (NeTS)","grant_name":"NeTS","requested_dollars":"249997","awarded_dollars":"249997","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/14/2017","opp_name":"Xavier University of Louisiana - Grants - Renewal 2","grant_project":"ED UBMS Proposal Review","grant_name":"UBMS","requested_dollars":"","awarded_dollars":"1319690","grant_type":"Federal","platform":"Higher Ed"},{"date":"8/28/2015","opp_name":"New Jersey City University - Grants - Renewal 1","grant_project":"NSF IUSE Consultation Call","grant_name":"IUSE","requested_dollars":"298798","awarded_dollars":"298798","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/26/2017","opp_name":"University of Northern Colorado - Grants - Renewal 3","grant_project":"NSF IUSE EHR Proposal Review I - Sexton - Mission Critical","grant_name":"IUSE","requested_dollars":"","awarded_dollars":"2872266","grant_type":"Federal","platform":"Higher Ed"},{"date":"10/18/2012","opp_name":"Family Matters of Greater Washington - Grants - Renewal 2","grant_project":"RSVP Proposal (Senior Services) - Final","grant_name":"RSVP","requested_dollars":"228018","awarded_dollars":"228018","grant_type":"Federal","platform":"NGO"},{"date":"7/19/2016","opp_name":"Total Health Care - Grants - Renewal 2","grant_project":"FY2016 Delivery System Health Information Investment","grant_name":"DSHII","requested_dollars":"90000","awarded_dollars":"90000","grant_type":"Federal","platform":"Healthcare"},{"date":"2/3/2017","opp_name":"North Carolina A&T University - Grants - Renewal 2","grant_project":"NSF CREST Proposal Review","grant_name":"CREST","requested_dollars":"","awarded_dollars":"2100000","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/8/2018","opp_name":"Eagle Ford Center for Research and Outreach - Grants - Renewal 1","grant_project":"NSF CREST Proposal Review","grant_name":"CREST","requested_dollars":"","awarded_dollars":"500000","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/29/2017","opp_name":"Santa Rosa Junior College - Grants - Renewal 2","grant_project":"NSF S-STEM Proposal Revision","grant_name":"S-STEM","requested_dollars":"650000","awarded_dollars":"650000","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/10/2017","opp_name":"Santa Rosa Junior College - Grants - Renewal 2","grant_project":"ED HEP Proposal","grant_name":"ED HEP","requested_dollars":"","awarded_dollars":"2371715","grant_type":"Federal","platform":"Higher Ed"},{"date":"7/19/2016","opp_name":"University of Colorado Colorado Springs - Grants - Renewal 2","grant_project":"CAREER Review - Dr. Calvisi","grant_name":"CAREER","requested_dollars":"","awarded_dollars":"516009","grant_type":"Federal","platform":"Higher Ed"},{"date":"7/15/2016","opp_name":"Cornell University - College of Agriculture and Life Sciences - Capped Queue - Grants - Renewal 1","grant_project":"NSF CAREER Revision - Aristilde","grant_name":"CAREER","requested_dollars":"","awarded_dollars":"600000","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/31/2017","opp_name":"Xavier University of Louisiana - Grants - Renewal 2","grant_project":"ED McNair Proposal Support","grant_name":"McNair","requested_dollars":"","awarded_dollars":"1219390","grant_type":"Federal","platform":"Higher Ed"},{"date":"7/13/2017","opp_name":"Cal Poly Corporation - Grants - Renewal 3","grant_project":"NSF CAREER Review II- Wissel","grant_name":"CAREER","requested_dollars":"","awarded_dollars":"669371","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/6/2017","opp_name":"Cal Poly Corporation - Grants - Queue 3 - Renewal 2","grant_project":"NSF CAREER Proposal Review I - Carrigan","grant_name":"CAREER","requested_dollars":"","awarded_dollars":"570890","grant_type":"Federal","platform":"Higher Ed"},{"date":"7/15/2016","opp_name":"Western Michigan University - Grants - Renewal 2","grant_project":"Saeed - NSF CAREER: Proposal Review","grant_name":"CAREER","requested_dollars":"","awarded_dollars":"499999","grant_type":"Federal","platform":"Higher Ed"},{"date":"9/9/2016","opp_name":"Auburn University - Grants - Renewal 2","grant_project":"NSF CSDM-A Resubmission Review II","grant_name":"CSDM-B","requested_dollars":"","awarded_dollars":"420000","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/6/2017","opp_name":"University of the District of Columbia - Reapproach - Renewal 1","grant_project":"NSF S-STEM Proposal Review I","grant_name":"S-STEM","requested_dollars":"","awarded_dollars":"286128","grant_type":"Federal","platform":"Higher Ed"},{"date":"7/27/2017","opp_name":"Xavier University of Louisiana - Grants - Renewal 2","grant_project":"NSF ADVANCE Proposal Development Phase I","grant_name":"ADVANCE","requested_dollars":"","awarded_dollars":"844448","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/22/2017","opp_name":"Nevada State College - Grants - Renewal 2","grant_project":"ED CCAMPIS Proposal Support","grant_name":"CCAMPIS","requested_dollars":"","awarded_dollars":"200000","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/15/2017","opp_name":"Marquette University - Grants - Renewal 1","grant_project":"NSF MRI Resubmission Revision","grant_name":"NSF MRI","requested_dollars":"251424","awarded_dollars":"251424","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/16/2018","opp_name":"University of Northern Colorado - Grants - Renewal 4","grant_project":"NSF IUSE EHR Proposal Review - Holt","grant_name":"IUSE:EHR","requested_dollars":"","awarded_dollars":"299955","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/17/2017","opp_name":"Franklin University - Grants - Renewal 2","grant_project":"ED Title III Proposal","grant_name":"Title III","requested_dollars":"2114579","awarded_dollars":"2114579","grant_type":"Federal","platform":"Higher Ed"},{"date":"8/3/2016","opp_name":"Georgia State University - Grants - Renewal 1","grant_project":"NSF Economics Proposal Review","grant_name":"Economics","requested_dollars":"","awarded_dollars":"247191","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/20/2012","opp_name":"Community Development Institute - Renewal 1","grant_project":"Head Start Bridge Contract Regions 11 and 12 Narrative","grant_name":"HeadStart","requested_dollars":"1000000","awarded_dollars":"2000000","grant_type":"Federal","platform":"NGO"},{"date":"5/18/2011","opp_name":"Cochise College - Grants - Renewal 1","grant_project":"NEA Fast Track - Creative Writing Celebration","grant_name":"Fast Track","requested_dollars":"10000","awarded_dollars":"10000","grant_type":"Federal","platform":"Higher Ed"},{"date":"9/13/2016","opp_name":"Xavier University of Louisiana - Grants - Renewal 1","grant_project":"NSF HBCU UP RIA Review - Wang","grant_name":"HBCU-UP RIA","requested_dollars":"","awarded_dollars":"299992","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/23/2018","opp_name":"Xavier University of Louisiana - Grants - Renewal 3","grant_project":"NSF HBCU UP EiR Proposal Revision - Mission Critical","grant_name":"HBCU UP EiR","requested_dollars":"","awarded_dollars":"699849","grant_type":"Federal","platform":"Higher Ed"},{"date":"9/29/2016","opp_name":"University of the District of Columbia (2016) - Reapproach - Grants - Renewal 1","grant_project":"NSF HBCU UP RIA Proposal Review - Thompson","grant_name":"HBCU-UP RIA","requested_dollars":"299996","awarded_dollars":"299996","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/21/2018","opp_name":"North Carolina A&T University - Grants - Renewal 3","grant_project":"NSF HBCU UP EiR Proposal Support","grant_name":"HBCU UP EiR","requested_dollars":"","awarded_dollars":"499807","grant_type":"Federal","platform":"Higher Ed"},{"date":"11/22/2016","opp_name":"Paris Junior College - Grants - Renewal 2","grant_project":"ED Upward Bound Proposal Support","grant_name":"Upward Bound","requested_dollars":"","awarded_dollars":"1900375","grant_type":"Federal","platform":"Higher Ed"},{"date":"11/14/2016","opp_name":"Appalachian State University - Grants - Renewal 2","grant_project":"ED Upward Bound Proposal Review","grant_name":"Upward Bound","requested_dollars":"","awarded_dollars":"2106220","grant_type":"Federal","platform":"Higher Ed"},{"date":"11/18/2016","opp_name":"North Carolina A&T University - Grants - Renewal 2","grant_project":"ED Upward Bound Proposal Development","grant_name":"Upward Bound","requested_dollars":"","awarded_dollars":"2408200","grant_type":"Federal","platform":"Higher Ed"},{"date":"11/17/2016","opp_name":"University of South Dakota - Grants - Renewal 2","grant_project":"ED Upward Bound Proposal Review II","grant_name":"Upward Bound","requested_dollars":"","awarded_dollars":"2090385","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/5/2016","opp_name":"Sober Grid - Grants - Renewal 1","grant_project":"NSF SBIR","grant_name":"SBIR Phase 1","requested_dollars":"250000","awarded_dollars":"225000","grant_type":"Federal","platform":"NGO"},{"date":"11/12/2014","opp_name":"La Clinica del Pueblo - Grants - Renewal 1","grant_project":"CDC HIV Prevention Proposal Development","grant_name":"HIV Prevention","requested_dollars":"2250000","awarded_dollars":"1700000","grant_type":"Federal","platform":"Healthcare"},{"date":"4/7/2017","opp_name":"North Carolina Central University - Grants - Renewal 2","grant_project":"NIH R01 Supplement Review II","grant_name":"R01 Supplement","requested_dollars":"","awarded_dollars":"59508","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/25/2014","opp_name":"Washoe County School District - Grants - Renewal 1","grant_project":"Project Prevent Proposal Revision","grant_name":"Project Prevent","requested_dollars":"","awarded_dollars":"4867455","grant_type":"Federal","platform":"K12"},{"date":"5/23/2017","opp_name":"Fayetteville State University - Grants - Renewal 1","grant_project":"DOD HBCU/HSI Higher Education STEM Scholars Revision - Materials and CS","grant_name":"W911NF-17-S-0006","requested_dollars":"395801","awarded_dollars":"395801","grant_type":"Federal","platform":"Higher Ed"},{"date":"9/6/2016","opp_name":"Sober Grid - Grants - Renewal 1","grant_project":"NIH SBIR","grant_name":"NIH SBIR Phase 1","requested_dollars":"147889","awarded_dollars":"147889","grant_type":"Federal","platform":"NGO"},{"date":"7/20/2015","opp_name":"Total Health Care - Grants - Renewal 1","grant_project":"HRSA Expanded Services Supplemental Funding","grant_name":"Expanded Services","requested_dollars":"355100","awarded_dollars":"373000","grant_type":"Federal","platform":"Healthcare"},{"date":"6/30/2016","opp_name":"Hampton University - Grants - Renewal 2","grant_project":"Needs Data Research - Upward Bound","grant_name":"Upward Bound (UB)","requested_dollars":"","awarded_dollars":"1319680","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/29/2016","opp_name":"Hampton University - Grants - Renewal 2","grant_project":"Talent Search - Proposal Review","grant_name":"Talent Search (TS)","requested_dollars":"","awarded_dollars":"1931990","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/2/2016","opp_name":"George C Wallace State Community College-Hanceville - Grants - Renewal 2","grant_project":"ED Talent Search Proposal Resubmission Support","grant_name":"Talent Search (TS)","requested_dollars":"","awarded_dollars":"2079600","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/3/2016","opp_name":"Davidson County Community College - Grants - Renewal 1","grant_project":"ED Trio TS Proposal","grant_name":"Talent Search (TS)","requested_dollars":"","awarded_dollars":"1200000","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/11/2016","opp_name":"North Carolina Central University - Grants - Renewal 1","grant_project":"ED TRIO Talent Search Proposal Review","grant_name":"Talent Search (TS)","requested_dollars":"","awarded_dollars":"234050","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/26/2012","opp_name":"Great Circle, Inc.- Grants - Renewal 1","grant_project":"Great Circle Admin for Children and Families Basic Center Program Final Draft","grant_name":"Basic Center Grant","requested_dollars":"100000","awarded_dollars":"100000","grant_type":"Federal","platform":"NGO"},{"date":"5/24/2016","opp_name":"Cal Poly Corporation - Grants - Renewal 2","grant_project":"GA - McDonald - Molecular Biophysics: Proposal Review","grant_name":"Molecular Biophysics","requested_dollars":"","awarded_dollars":"29001","grant_type":"Federal","platform":"Higher Ed"},{"date":"8/23/2016","opp_name":"Lancaster General Hospital - Grants - Renewal 2","grant_project":"PCORI Engagement Award Proposal","grant_name":"PCORI Engagement Award","requested_dollars":"","awarded_dollars":"247775","grant_type":"Federal","platform":"Healthcare"},{"date":"10/9/2017","opp_name":"Rural Health Innovation Collaborative - Grants - Renewal 2","grant_project":"RWJF - Evidence for Action LOI","grant_name":"PCORI Engagement Award","requested_dollars":"250000","awarded_dollars":"250000","grant_type":"Federal","platform":"Healthcare"},{"date":"6/5/2017","opp_name":"Texas A&M University - Grants - Renewal 1","grant_project":"CDC NIOSH Training Project Grant Renewal Review I","grant_name":"NIOSH Training Program","requested_dollars":"","awarded_dollars":"67773","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/4/2014","opp_name":"Community Health Center - Grants - Renewal 1","grant_project":"HRSA Mental Health Service Expansion","grant_name":"Mental Health Expansion","requested_dollars":"250000","awarded_dollars":"250000","grant_type":"Federal","platform":"Healthcare"},{"date":"10/1/2014","opp_name":"La Clinica del Pueblo - Grants - Renewal 1","grant_project":"HRSA New Access Points Proposal - EHB Submission","grant_name":"New Access Points (NAP)","requested_dollars":"1025000","awarded_dollars":"1025000","grant_type":"Federal","platform":"Healthcare"},{"date":"10/3/2014","opp_name":"Genesis Community Health - Grants - Renewal 1","grant_project":"HRSA New Access Points Proposal - EHB Submission","grant_name":"New Access Points (NAP)","requested_dollars":"","awarded_dollars":"1028722","grant_type":"Federal","platform":"Healthcare"},{"date":"10/7/2014","opp_name":"Citrus Health Network, Inc. - Grants - Renewal 1","grant_project":"HRSA New Access Points","grant_name":"New Access Points (NAP)","requested_dollars":"391667","awarded_dollars":"391667","grant_type":"Federal","platform":"Healthcare"},{"date":"8/1/2016","opp_name":"Appalachian State University - Grants - Renewal 2","grant_project":"NSF Biological Oceanography Proposal Review","grant_name":"Biological Oceanography","requested_dollars":"","awarded_dollars":"208119","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/6/2017","opp_name":"Central Washington University - Grants - Renewal 3","grant_project":"ED Ronald E. McNair Postbaccalaureate Achievement Proposal","grant_name":"McNair Scholars Program","requested_dollars":"1132999","awarded_dollars":"1132999","grant_type":"Federal","platform":"Higher Ed"},{"date":"10/24/2012","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 1","grant_project":"HRSA - Service Area Competition - Final","grant_name":"Service Area Competition","requested_dollars":"1900000","awarded_dollars":"1900000","grant_type":"Federal","platform":"Healthcare"},{"date":"9/8/2015","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 2","grant_project":"330 Renewal","grant_name":"Service Area Competition","requested_dollars":"7000000","awarded_dollars":"7000000","grant_type":"Federal","platform":"Healthcare"},{"date":"11/16/2015","opp_name":"Alivio Medical Center - Grants - Renewal 1","grant_project":"Competing SAC Proposal","grant_name":"Service Area Competition","requested_dollars":"","awarded_dollars":"3680000","grant_type":"Federal","platform":"Healthcare"},{"date":"5/4/2016","opp_name":"Western Michigan University - Grants - Renewal 2","grant_project":"NEH Humanities Access Grant:Proposal Revision/Support","grant_name":"Humanities Access Grants","requested_dollars":"","awarded_dollars":"100000","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/27/2014","opp_name":"Hampton University - Grants - Renewal 1","grant_project":"ED First in the World Proposal","grant_name":"First in the World (FITW)","requested_dollars":"","awarded_dollars":"3500000","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/8/2014","opp_name":"Christiana Care Health System - Grants - Renewal 1","grant_project":"NSF Smart and Connected Health Proposal Revision","grant_name":"Smart and Connected Health","requested_dollars":"351418","awarded_dollars":"351418","grant_type":"Federal","platform":"Healthcare"},{"date":"4/7/2015","opp_name":"University of Montana - Grants - Renewal 1","grant_project":"NSF Dimensions of Biodiversity: comp review","grant_name":"Dimensions of Biodiversity","requested_dollars":"1998804","awarded_dollars":"1998804","grant_type":"Federal","platform":"Higher Ed"},{"date":"8/19/2016","opp_name":"University of South Dakota - Grants - Renewal 2","grant_project":"NSF Campus Cyberinfrastructure Proposal Review","grant_name":"Campus Cyberinfrastructure","requested_dollars":"","awarded_dollars":"198184","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/11/2016","opp_name":"Wellmont Health System - Grants - Renewal 2","grant_project":"CMS Connecting Kids to Coverage Proposal Revision Support","grant_name":"Connecting Kids to Coverage","requested_dollars":"","awarded_dollars":"463855","grant_type":"Federal","platform":"Healthcare"},{"date":"9/30/2016","opp_name":"Albany State University - Grants - Renewal 2","grant_project":"Review: HBCU UP Research Initiation","grant_name":"HBCU UP Research Initiation","requested_dollars":"","awarded_dollars":"299914","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/8/2017","opp_name":"Appalachian State University - Grants - Renewal 2","grant_project":"ED UBMS Proposal Review","grant_name":"Upward Bound Math & Science","requested_dollars":"","awarded_dollars":"1385670","grant_type":"Federal","platform":"Higher Ed"},{"date":"11/8/2016","opp_name":"Western Michigan University - Grants - Renewal 2","grant_project":"HRSA Nursing Workforce Diversity Proposal Review","grant_name":"Nursing Workforce Diversity","requested_dollars":"","awarded_dollars":"1941976","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/2/2013","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 1","grant_project":"HRSA New Access Points Proposal","grant_name":"New Access Points - Key West","requested_dollars":"650000","awarded_dollars":"650000","grant_type":"Federal","platform":"Healthcare"},{"date":"6/11/2014","opp_name":"Southcoast Health - Grants - Renewal 1","grant_project":"HHS Youth Empowerment Program II Proposal","grant_name":"Youth Empowerment Program II","requested_dollars":"496209","awarded_dollars":"496209","grant_type":"Federal","platform":"Healthcare"},{"date":"11/16/2010","opp_name":"Wright State University - Grants - Renewal 1","grant_project":"NSF SOCS Proposal Review","grant_name":"SoCS: Collaborative Research","requested_dollars":"480000","awarded_dollars":"480000","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/6/2018","opp_name":"University of North Carolina at Charlotte - Grants - Queue 2 - Renewal 1","grant_project":"NSF Smart & Connected Communities Proposal Review I - Mission Critical","grant_name":"Smart & Connected Communities","requested_dollars":"","awarded_dollars":"1897466","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/17/2016","opp_name":"The New York and Presbyterian Hospital - Grants - Renewal 1","grant_project":"CMS Accountable Health Communities Proposal","grant_name":"Accountable Health Communities","requested_dollars":"","awarded_dollars":"4500000","grant_type":"Federal","platform":"Healthcare"},{"date":"8/14/2017","opp_name":"Community Health Center - Grants - Renewal 2","grant_project":"HRSA - Ryan White Part C Continuation","grant_name":"Ryan White Part C Continuation","requested_dollars":"389397","awarded_dollars":"389397","grant_type":"Federal","platform":"Healthcare"},{"date":"2/2/2015","opp_name":"Santa Rosa Junior College - Grants - Renewal 1","grant_project":"Trio SSS Proposal SRJC","grant_name":"Student Support Services (SSS)","requested_dollars":"","awarded_dollars":"1099995","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/2/2015","opp_name":"George C Wallace State Community College-Hanceville - Grants - Renewal 1","grant_project":"ED Student Support Services Proposal Reviews","grant_name":"Student Support Services (SSS)","requested_dollars":"","awarded_dollars":"1434040","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/28/2015","opp_name":"Hampton University - Grants - Renewal 1","grant_project":"ED SSS Proposal Review","grant_name":"Student Support Services (SSS)","requested_dollars":"","awarded_dollars":"1461700","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/30/2015","opp_name":"Yuba Community College District - Grants - Renewal 1","grant_project":"Woodlands SSS proposal production PT IV","grant_name":"Student Support Services (SSS)","requested_dollars":"","awarded_dollars":"1100000","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/28/2015","opp_name":"Yuba Community College District - Grants - Renewal 1","grant_project":"ESL SSS proposal production PT III","grant_name":"Student Support Services (SSS)","requested_dollars":"","awarded_dollars":"1100000","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/2/2015","opp_name":"Samuel Merritt University - Renewal 4","grant_project":"Mentally Ill Offender Crime Reduction (MIOCR) Grant Program","grant_name":"California State Justice Grant","requested_dollars":"950000","awarded_dollars":"950000","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/29/2015","opp_name":"College of the Desert - Grants - Renewal 2","grant_project":"Trio SSS Proposals Review College of the Desert","grant_name":"Student Support Services (SSS)","requested_dollars":"","awarded_dollars":"2507545","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/2/2015","opp_name":"Nevada State College - Grants - Renewal 1","grant_project":"ED TRIO Student Support Services Proposal","grant_name":"Student Support Services (SSS)","requested_dollars":"","awarded_dollars":"1047110","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/29/2014","opp_name":"University of Maine - Fort Kent - Grants - Renewal 1","grant_project":"ED SSS Review","grant_name":"Student Support Services (SSS)","requested_dollars":"","awarded_dollars":"1440905","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/16/2015","opp_name":"University of Minnesota - Morris - Grants - Renewal 1","grant_project":"SSS Grant Review","grant_name":"Student Support Services (SSS)","requested_dollars":"1100000","awarded_dollars":"1100000","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/16/2016","opp_name":"Appalachian State University - Grants - Renewal 2","grant_project":"NSF PAC Review I - Dickinson","grant_name":"Perception, Action, & Cognition","requested_dollars":"","awarded_dollars":"134605","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/13/2015","opp_name":"University of Mississippi Medical Center - Grants - Renewal 2","grant_project":"HRSA ANE Proposal","grant_name":"Advanced Nursing Education (ANE)","requested_dollars":"2100000","awarded_dollars":"2100000","grant_type":"Federal","platform":"Healthcare"},{"date":"12/29/2010","opp_name":"University of Tennessee, Knoxville - College of Nursing - Grants - Renewal 1","grant_project":"HRSA Advanced Education","grant_name":"Advanced Nursing Education (ANE)","requested_dollars":"258000","awarded_dollars":"258000","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/12/2016","opp_name":"University of Connecticut - Grants - Renewal 2","grant_project":"NSF SNM Proposal Revision - Lei","grant_name":"Scalable Nanomanufacturing (SNM)","requested_dollars":"","awarded_dollars":"321177","grant_type":"Federal","platform":"Higher Ed"},{"date":"10/14/2015","opp_name":"Bright Point Health - Grants - Renewal 1","grant_project":"HRSA Substance Abuse Service Expansion Proposal","grant_name":"Substance Abuse Service Expansion","requested_dollars":"379167","awarded_dollars":"379167","grant_type":"Federal","platform":"Healthcare"},{"date":"10/14/2015","opp_name":"Community Health Center - Grants - Renewal 2","grant_project":"HRSA Substance Abuse Service Expansion Proposal","grant_name":"Substance Abuse Service Expansion","requested_dollars":"758000","awarded_dollars":"758000","grant_type":"Federal","platform":"Healthcare"},{"date":"10/14/2015","opp_name":"Total Health Care - Grants - Renewal 1","grant_project":"HRSA Substance Abuse Service Expansion Proposal","grant_name":"Substance Abuse Service Expansion","requested_dollars":"650000","awarded_dollars":"650000","grant_type":"Federal","platform":"Healthcare"},{"date":"1/18/2016","opp_name":"University of Mississippi Medical Center - Grants - Renewal 3","grant_project":"HRSA NEPQR Behavioral Health Integration","grant_name":"Nursing Workforce Diversity (NWD)","requested_dollars":"","awarded_dollars":"0","grant_type":"Federal","platform":"Healthcare"},{"date":"6/21/2012","opp_name":"Southern University and Agricultural and Mechanical College System Office - Grants - Renewal 1","grant_project":"final - Disaster Relief Opportunity - EDA","grant_name":"FY 2012 Disaster Relief Opportunity","requested_dollars":"","awarded_dollars":"1000000","grant_type":"Federal","platform":"Higher Ed"},{"date":"9/1/2011","opp_name":"West Virginia State University - Grants - Renewal 1","grant_project":"NSF-STEP","grant_name":"STEM Talent Expansion Program (STEP)","requested_dollars":"401399","awarded_dollars":"401399","grant_type":"Federal","platform":"Higher Ed"},{"date":"9/26/2011","opp_name":"Wentworth Institute of Technology - Renewal 2","grant_project":"Wentworth STEP Proposal Draft Final","grant_name":"STEM Talent Expansion Program (STEP)","requested_dollars":"499129","awarded_dollars":"494052","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/15/2013","opp_name":"Great Basin College - Grants - Renewal 1","grant_project":"NEH Challenge Grants for Two-Year Colleges: Phase 3","grant_name":"Challenge Grant for Two-Year Colleges","requested_dollars":"500000","awarded_dollars":"500000","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/17/2016","opp_name":"Paris Junior College - Grants - Renewal 2","grant_project":"ED TRIO EOC Proposal Support Phase II","grant_name":"Educational Opportunity Centers (EOC)","requested_dollars":"","awarded_dollars":"1660320","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/18/2015","opp_name":"Central Washington University - Grants - Renewal 2","grant_project":"EOC Proposal Revision/Support","grant_name":"Educational Opportunity Centers (EOC)","requested_dollars":"","awarded_dollars":"1354690","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/30/2016","opp_name":"South Seattle College - Grants - Renewal 1","grant_project":"Proposal Support: TRIO EOC","grant_name":"Educational Opportunity Centers (EOC)","requested_dollars":"","awarded_dollars":"1179975","grant_type":"Federal","platform":"Higher Ed"},{"date":"11/21/2011","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 1","grant_project":"HRSA Immediate Facility Improvement - Phase II","grant_name":"Immediate Facilities Improvement Grant","requested_dollars":"500000","awarded_dollars":"500000","grant_type":"Federal","platform":"Healthcare"},{"date":"9/13/2016","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 2","grant_project":"CHI HRSA Competing 330 HRSA-17-051","grant_name":"Service Area Competition (HRSA-17-051)","requested_dollars":"13602090","awarded_dollars":"13602090","grant_type":"Federal","platform":"Healthcare"},{"date":"4/25/2011","opp_name":"Hinds Community College - Grants - Renewal 1","grant_project":"Dept of Ed Predominantly Black Institutions (PBI) Competitive Grant Program","grant_name":"Predominantly Black Institutions (PBI)","requested_dollars":"2950000","awarded_dollars":"2950000","grant_type":"Federal","platform":"Higher Ed"},{"date":"10/16/2012","opp_name":"Santa Rosa Junior College - Grants - Renewal 1","grant_project":"Santa Rosa Junior College NSF ATE Proposal","grant_name":"Advanced Technological Education (ATE)","requested_dollars":"200000","awarded_dollars":"200000","grant_type":"Federal","platform":"Higher Ed"},{"date":"9/2/2016","opp_name":"Clarkson University - Grants - Renewal 3","grant_project":"NSF CRI Proposal Review","grant_name":"NSF CISE Research Infrastructure (CRI)","requested_dollars":"746916","awarded_dollars":"746916","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/22/2016","opp_name":"North Carolina A&T University - Grants - Renewal 2","grant_project":"DOT University Transportation Centers Proposal Review","grant_name":"University Transportation Centers (UTC)","requested_dollars":"","awarded_dollars":"1402200","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/22/2016","opp_name":"CUNY York College - Grants - Renewal 2","grant_project":"NIH MBRS SCORE Proposal Support - Small","grant_name":"Support of Competitive Research (SCORE)","requested_dollars":"","awarded_dollars":"166190","grant_type":"Federal","platform":"Higher Ed"},{"date":"9/25/2013","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 1","grant_project":"BPHC Health Center Program - 330 Renewal - Full Proposal","grant_name":"BPHC Health Center Program - 330 Renewal","requested_dollars":"8800000","awarded_dollars":"9902417","grant_type":"Federal","platform":"Healthcare"},{"date":"3/4/2015","opp_name":"Baystate Health - Grants - Renewal 1","grant_project":"HRSA Geriatric Workforce Enhancement Program (GWEP)","grant_name":"Geriatrics Workforce Enhancement Program","requested_dollars":"2524170","awarded_dollars":"2524170","grant_type":"Federal","platform":"Healthcare"},{"date":"2/1/2016","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 2","grant_project":"HRSA 2016 OHSE","grant_name":"Oral Health Service Expansion Supplement","requested_dollars":"700000","awarded_dollars":"700000","grant_type":"Federal","platform":"Healthcare"},{"date":"2/2/2016","opp_name":"Robeson Health Care Corporation - Grants - Renewal 1","grant_project":"HRSA Oral Health Services Expansion","grant_name":"Oral Health Service Expansion Supplement","requested_dollars":"700000","awarded_dollars":"700000","grant_type":"Federal","platform":"Healthcare"},{"date":"1/27/2016","opp_name":"Utah Navajo Health System - Grants - Renewal 2","grant_project":"HRSA 2016 OHSE","grant_name":"Oral Health Service Expansion Supplement","requested_dollars":"700000","awarded_dollars":"700000","grant_type":"Federal","platform":"Healthcare"},{"date":"2/8/2013","opp_name":"University of Arkansas - Grants - Renewal 1","grant_project":"review/consultation - NIH NLM","grant_name":"Scholarly Works in Biomedicine and Health","requested_dollars":"","awarded_dollars":"120000","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/5/2017","opp_name":"Stanford University Division of Infectious Diseases - Grants - Renewal 1","grant_project":"R24 Proposal Revision - Shafer","grant_name":"R24 - Public HIV Drug Resistance Database","requested_dollars":"4630177","awarded_dollars":"4630177","grant_type":"Federal","platform":"Higher Ed"},{"date":"9/5/2017","opp_name":"Stanford University Division of Infectious Diseases - Grants - Renewal 2","grant_project":"R21 Proposal Revision - Shafer","grant_name":"R21 - HIV-1 Variants at the Point-of-care","requested_dollars":"345000","awarded_dollars":"345000","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/9/2017","opp_name":"Cal Poly Corporation - Grants - Queue 3 - Renewal 2","grant_project":"DOJ OVW Proposal Review","grant_name":"OVW Grants to Reduce Sexual Assault, etc.","requested_dollars":"","awarded_dollars":"300000","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/22/2015","opp_name":"San Francisco State University - Grants - Renewal 1","grant_project":"NIH proposal review","grant_name":"SC2 Feedback in Organelle Size Regulation","requested_dollars":"154000","awarded_dollars":"154000","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/12/2017","opp_name":"Portland Public Schools - Grants - Renewal 2","grant_project":"Education and Innovation Research Proposal","grant_name":"Education and Innovation Research Program","requested_dollars":"","awarded_dollars":"3907144","grant_type":"Federal","platform":"K12"},{"date":"5/21/2015","opp_name":"Community Health Center - Grants - Renewal 2","grant_project":"HRSA NTTA Proposal","grant_name":"National Training and Technical Assistance","requested_dollars":"1000000","awarded_dollars":"1000000","grant_type":"Federal","platform":"Healthcare"},{"date":"5/3/2017","opp_name":"University of Northern Colorado - Grants - Renewal 3","grant_project":"NSF EHR Core Research Proposal Review","grant_name":"ECR Fundamental Research in STEM Education","requested_dollars":"","awarded_dollars":"619776","grant_type":"Federal","platform":"Higher Ed"},{"date":"10/2/2012","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 1","grant_project":"HRSA 330 Non-Compete Renewal","grant_name":"Non-competing Section 330 Grant Application","requested_dollars":"6967221","awarded_dollars":"6967221","grant_type":"Federal","platform":"Healthcare"},{"date":"10/7/2014","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 2","grant_project":"HRSA New Access Points Proposal - EHB Submission","grant_name":"Affordable Care Act New Access Point Grants","requested_dollars":"650000","awarded_dollars":"500000","grant_type":"Federal","platform":"Healthcare"},{"date":"6/3/2013","opp_name":"Camden County College - Grants - Renewal 1","grant_project":"ED Title III Rewrite","grant_name":"Title III Strengthening Institutions Program","requested_dollars":"","awarded_dollars":"2098951","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/16/2015","opp_name":"Georgia College & State University - Grants - Renewal 1","grant_project":"NSF MRI Proposal Resubmission","grant_name":"Major Research Instrumentation (MRI) Program","requested_dollars":"","awarded_dollars":"263320","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/21/2015","opp_name":"Rochester Institute of Technology - Grants - Renewal 1","grant_project":"NSF MRI Proposal Reviews","grant_name":"Major Research Instrumentation (MRI) Program","requested_dollars":"","awarded_dollars":"299932","grant_type":"Federal","platform":"Higher Ed"},{"date":"8/20/2015","opp_name":"East Los Angeles College - Grants - Renewal 1","grant_project":"NEH Humanities Initiatives at Community Colleges - Proposal Support","grant_name":"Humanities Initiatives at Community Colleges","requested_dollars":"","awarded_dollars":"100000","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/5/2016","opp_name":"Western Michigan University - Grants - Renewal 2","grant_project":"NSF MRI: Proposal Review","grant_name":"Major Research Instrumentation (MRI) Program","requested_dollars":"","awarded_dollars":"452399","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/8/2015","opp_name":"Lincoln College - Grants - Renewal 1","grant_project":"ED Title III Proposal Support Phase II","grant_name":"Title III Strengthening Institutions Program","requested_dollars":"","awarded_dollars":"2175260","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/21/2015","opp_name":"University of South Dakota - Grants - Renewal 1","grant_project":"NSF MRI Proposal Review","grant_name":"Major Research Instrumentation (MRI) Program","requested_dollars":"","awarded_dollars":"504911","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/3/2015","opp_name":"West Texas A&M University - Grants - Renewal 1","grant_project":"Title III Proposal Production","grant_name":"Title III Strengthening Institutions Program","requested_dollars":"2144579","awarded_dollars":"2144579","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/18/2015","opp_name":"West Texas A&M University - Grants - Renewal 1","grant_project":"NSF MRI Proposal Review 2","grant_name":"Major Research Instrumentation (MRI) Program","requested_dollars":"","awarded_dollars":"236766","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/23/2014","opp_name":"West Texas A&M University - Grants - Renewal 1","grant_project":"NSF-MRI Environmental Sciences Core Lab","grant_name":"Major Research Instrumentation (MRI) Program","requested_dollars":"160000","awarded_dollars":"160000","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/17/2014","opp_name":"West Texas A&M University - Grants - Renewal 1","grant_project":"NSF-MRI Revision/Resubmision","grant_name":"Major Research Instrumentation (MRI) Program","requested_dollars":"371700","awarded_dollars":"371000","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/16/2014","opp_name":"Food for the Poor - Grants - Renewal 2","grant_project":"USAID International Food Relief Program - Guatemala Resubmission","grant_name":"International Food Relief Partnership (IFRP)","requested_dollars":"562916","awarded_dollars":"562916","grant_type":"Federal","platform":"NGO"},{"date":"4/16/2014","opp_name":"Food for the Poor - Grants - Renewal 2","grant_project":"USAID International Food Relief Program - Haiti Resubmission","grant_name":"International Food Relief Partnership (IFRP)","requested_dollars":"562916","awarded_dollars":"562916","grant_type":"Federal","platform":"NGO"},{"date":"5/29/2015","opp_name":"Food for the Poor - Grants - Renewal 3","grant_project":"USAID Int'l Food Relief Program Proposal 2015","grant_name":"International Food Relief Partnership (IFRP)","requested_dollars":"","awarded_dollars":"0","grant_type":"Federal","platform":"NGO"},{"date":"4/9/2015","opp_name":"Food for the Poor - Grants - Renewal 3","grant_project":"USAID ASHA Proposal","grant_name":"American Schools and Hospitals Abroad (ASHA)","requested_dollars":"397697","awarded_dollars":"397600","grant_type":"Federal","platform":"NGO"},{"date":"6/21/2012","opp_name":"Cochise College - Grants - Renewal 1","grant_project":"HRSA Scholarships for Disadvantaged Students","grant_name":"Scholarships for Disadvantaged Students (SDS)","requested_dollars":"640000","awarded_dollars":"640000","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/16/2016","opp_name":"Indiana Wesleyan University - School of Nursing - Grants - Renewal 2","grant_project":"HRSA Advanced Education Nursing Traineeship: Proposal Production","grant_name":"Advanced Education Nursing Traineeship (AENT)","requested_dollars":"350000","awarded_dollars":"350000","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/9/2016","opp_name":"New Jersey City University - Grants - Renewal 1","grant_project":"NSF IUSE Proposal Review","grant_name":"Improving Undergraduate STEM Education (IUSE)","requested_dollars":"","awarded_dollars":"298798","grant_type":"Federal","platform":"Higher Ed"},{"date":"8/14/2015","opp_name":"Auburn University - Grants - Renewal 1","grant_project":"NSF REU Site Proposal Review","grant_name":"Research Experiences for Undergraduates (REU)","requested_dollars":"","awarded_dollars":"340141","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/2/2015","opp_name":"University of Northern Colorado - Grants - Renewal 1","grant_project":"Review: NSF IUSE","grant_name":"Improving Undergraduate STEM Education (IUSE)","requested_dollars":"","awarded_dollars":"255150","grant_type":"Federal","platform":"Higher Ed"},{"date":"8/6/2015","opp_name":"University of South Dakota - Grants - Renewal 1","grant_project":"NSF REU Proposal Support - Jarchow","grant_name":"Research Experiences for Undergraduates (REU)","requested_dollars":"","awarded_dollars":"323864","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/21/2015","opp_name":"Genesis Community Health - Grants - Renewal 1","grant_project":"HRSA HIIP Proposal Production","grant_name":"Health Infrastructure Investment Program (HIIP)","requested_dollars":"","awarded_dollars":"400000","grant_type":"Federal","platform":"Healthcare"},{"date":"5/21/2015","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 2","grant_project":"HRSA HIIP Proposal Production","grant_name":"Health Infrastructure Investment Program (HIIP)","requested_dollars":"1000000","awarded_dollars":"1000000","grant_type":"Federal","platform":"Healthcare"},{"date":"5/21/2015","opp_name":"Manatee County Rural Health Services - Grants - Renewal 1","grant_project":"HRSA HIIP Proposal","grant_name":"Health Infrastructure Investment Program (HIIP)","requested_dollars":"","awarded_dollars":"1000000","grant_type":"Federal","platform":"Healthcare"},{"date":"5/21/2015","opp_name":"Robeson Health Care Corporation - Grants - Renewal 1","grant_project":"HRSA HIIP Proposal","grant_name":"Health Infrastructure Investment Program (HIIP)","requested_dollars":"1000000","awarded_dollars":"1000000","grant_type":"Federal","platform":"Healthcare"},{"date":"7/30/2015","opp_name":"New Jersey City University - Grants - Renewal 1","grant_project":"NSF Noyce Proposal Development","grant_name":"Robert Noyce Teacher Scholarship Program (NOYCE)","requested_dollars":"","awarded_dollars":"1444698","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/9/2015","opp_name":"Barton Health Foundation - Grants - Renewal 1","grant_project":"HRSA Rural Health Network Development Program","grant_name":"Rural Health Network Development Planning Program","requested_dollars":"100000","awarded_dollars":"100000","grant_type":"Federal","platform":"Healthcare"},{"date":"4/8/2016","opp_name":"University of Connecticut - Grants - Renewal 2","grant_project":"NSF CAREER Proposal Review - Zaghi","grant_name":"Faculty Early Career Development Program (CAREER)","requested_dollars":"","awarded_dollars":"519967","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/11/2016","opp_name":"University of Connecticut - Grants - Renewal 2","grant_project":"NSF CAREER Proposal Review - Pierce","grant_name":"Faculty Early Career Development Program (CAREER)","requested_dollars":"","awarded_dollars":"500000","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/8/2016","opp_name":"University of Colorado Colorado Springs - Grants - Renewal 2","grant_project":"CAREER Review: Ventura","grant_name":"Faculty Early Career Development Program (CAREER)","requested_dollars":"","awarded_dollars":"379853","grant_type":"Federal","platform":"Higher Ed"},{"date":"7/2/2015","opp_name":"Wake Forest University - Grants - Renewal 1","grant_project":"NSF Career: proposal review","grant_name":"Faculty Early Career Development Program (CAREER)","requested_dollars":"500000","awarded_dollars":"500000","grant_type":"Federal","platform":"Higher Ed"},{"date":"7/14/2014","opp_name":"Temple University - Grants - Renewal 1","grant_project":"Rege: NSF SBE CAREER","grant_name":"Faculty Early Career Development Program (CAREER)","requested_dollars":"","awarded_dollars":"492175","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/23/2015","opp_name":"University of Denver - Grants - Renewal 1","grant_project":"NSF CAREER Resubmission - McRae","grant_name":"Faculty Early Career Development Program (CAREER)","requested_dollars":"","awarded_dollars":"737947","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/6/2013","opp_name":"Appalachian State University - Grants - Renewal 1","grant_project":"NSF CAREER Proposal","grant_name":"Faculty Early Career Development Program (CAREER)","requested_dollars":"","awarded_dollars":"487352","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/26/2015","opp_name":"University of West Georgia - Grants - Renewal 2","grant_project":"NSF CAREER Review - Dr. Jett","grant_name":"Faculty Early Career Development Program (CAREER)","requested_dollars":"","awarded_dollars":"405063","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/13/2016","opp_name":"University of Texas at San Antonio - Grants - Renewal 1","grant_project":"CAREER Review: Gibson","grant_name":"Faculty Early Career Development Program (CAREER)","requested_dollars":"","awarded_dollars":"366250","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/1/2016","opp_name":"Arlington Public Schools - Grants - Renewal 3","grant_project":"NOAA Bay Watershed Education and Training (B-WET) Proposal","grant_name":"NOAA Bay Watershed Education and Training (B-WET)","requested_dollars":"149714","awarded_dollars":"149714","grant_type":"Federal","platform":"K12"},{"date":"11/13/2015","opp_name":"Albany State University - Grants - Renewal 1","grant_project":"Review: MSRDC, Dept of the Army","grant_name":"MSI STEM Research & Development Consortium (MSRDC)","requested_dollars":"","awarded_dollars":"383837","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/1/2016","opp_name":"University of Denver - Grants - Renewal 2","grant_project":"NSF Dynamics of Coupled Natural and Human Systems Review","grant_name":"Dynamics of Coupled Natural and Human Systems (CNH)","requested_dollars":"","awarded_dollars":"332839","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/18/2015","opp_name":"Santa Rosa Junior College - Grants - Renewal 1","grant_project":"NSF Eager Proposal","grant_name":"Early-concept Grants for Exploratory Research (EAGER)","requested_dollars":"300000","awarded_dollars":"300000","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/15/2014","opp_name":"University of Denver - Grants - Renewal 1","grant_project":"NSF IIS Core Programs Review and Revisions","grant_name":"Early-concept Grants for Exploratory Research (EAGER)","requested_dollars":"","awarded_dollars":"139996","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/7/2016","opp_name":"University of the District of Columbia (2016) - Reapproach - Grants - Renewal 1","grant_project":"NSF EAGER Proposal Support","grant_name":"Early-concept Grants for Exploratory Research (EAGER)","requested_dollars":"","awarded_dollars":"99998","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/18/2015","opp_name":"University of Connecticut - Grants - Renewal 1","grant_project":"NSF NRT Internal Review","grant_name":"National Science Foundation Research Traineeship (NRT)","requested_dollars":"","awarded_dollars":"499213","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/3/2016","opp_name":"University of South Dakota - Grants - Renewal 1","grant_project":"NSF NRT Review - Burrell","grant_name":"National Science Foundation Research Traineeship (NRT)","requested_dollars":"","awarded_dollars":"2943562","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/3/2017","opp_name":"North Carolina Central University - Grants - Renewal 2","grant_project":"ED McNair Proposal Support","grant_name":"Ronald E. McNair Postbaccalaureate Achievement Program","requested_dollars":"","awarded_dollars":"1161325","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/25/2016","opp_name":"Total Health Care - Grants - Renewal 1","grant_project":"Ryan White HIV/AIDS Part C Capacity Development Program","grant_name":"Ryan White HIV/AIDS Part C Capacity Development Program","requested_dollars":"100000","awarded_dollars":"100000","grant_type":"Federal","platform":"Healthcare"},{"date":"6/19/2015","opp_name":"University of Minnesota - Morris - Grants - Renewal 1","grant_project":"NASNTI Proposal Review/Support","grant_name":"Native American-Serving Nontribal Institutions (NASNTI)","requested_dollars":"","awarded_dollars":"1997345","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/9/2014","opp_name":"Santa Rosa Junior College - Grants - Renewal 1","grant_project":"Santa Rosa Junior College Title V","grant_name":"Title V Developing Hispanic Serving Institutions Program","requested_dollars":"2000000","awarded_dollars":"2650000","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/14/2015","opp_name":"Las Positas College - Grants - Renewal 1","grant_project":"Title V Proposal Production","grant_name":"Title V Developing Hispanic Serving Institutions Program","requested_dollars":"","awarded_dollars":"2441555","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/8/2015","opp_name":"Yakima Valley Community College - Grants - Renewal 2","grant_project":"Title V Proposal Support II","grant_name":"Title V Developing Hispanic Serving Institutions Program","requested_dollars":"","awarded_dollars":"2625000","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/23/2015","opp_name":"Yakima Valley Community College - Grants - Renewal 2","grant_project":"Title V Cooperative Resubmission Review","grant_name":"Title V Developing Hispanic Serving Institutions Program","requested_dollars":"","awarded_dollars":"3249975","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/13/2015","opp_name":"East Los Angeles College - Grants - Renewal 1","grant_project":"Title V proposal support","grant_name":"Title V Developing Hispanic Serving Institutions Program","requested_dollars":"2625000","awarded_dollars":"2625000","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/18/2015","opp_name":"Eastern New Mexico University - Grants - Renewal 1","grant_project":"Title V Proposal Review/Revision II","grant_name":"Title V Developing Hispanic Serving Institutions Program","requested_dollars":"2481960","awarded_dollars":"2700000","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/27/2015","opp_name":"Vanguard University - Grants - Reapproach - Renewal 1","grant_project":"Title V Proposal Production Phase I","grant_name":"Title V Developing Hispanic Serving Institutions Program","requested_dollars":"2625000","awarded_dollars":"2560000","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/9/2014","opp_name":"University of New Mexico - Grants - Renewal 1","grant_project":"ED Title V Proposal Review","grant_name":"Title V Developing Hispanic Serving Institutions Program","requested_dollars":"","awarded_dollars":"2604095","grant_type":"Federal","platform":"Higher Ed"},{"date":"11/2/2015","opp_name":"Merrimack College - Grants - Renewal 1","grant_project":"Review: NIDDK Mentored Research Scientist Development Award (K01) - Dr. Cohen","grant_name":"NIDDK Mentored Research Scientist Development Award (K01)","requested_dollars":"","awarded_dollars":"639520","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/8/2012","opp_name":"NanoInk, Inc. - NanoProfessor Division - Grants - Renewal 1","grant_project":"NanoInk/Drake State NSF HBCU-UP ACE Implementation Proposal Draft 2","grant_name":"NSF HBCU-UP SPIN-UP Project Competitive Continuation Grant","requested_dollars":"1749968","awarded_dollars":"1749968","grant_type":"Federal","platform":"NGO"},{"date":"6/3/2015","opp_name":"CUNY York College - Grants - Renewal 1","grant_project":"NASA MUREP MAA High-Level Review","grant_name":"Minority University Research and Education Contacts (MUREP)","requested_dollars":"","awarded_dollars":"420000","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/15/2015","opp_name":"University of Connecticut - Grants - Renewal 1","grant_project":"NSF PIRE Proposal Review (IV)","grant_name":"Partnerships for International Research and Education (PIRE)","requested_dollars":"","awarded_dollars":"648250","grant_type":"Federal","platform":"Higher Ed"},{"date":"3/4/2016","opp_name":"Cal Poly Corporation - Grants - Renewal 2","grant_project":"GA - Doig - NSF GOALI: Proposal Review","grant_name":"Grant Opportunities for Academic Liaison with Industry (GOALI)","requested_dollars":"","awarded_dollars":"188055","grant_type":"Federal","platform":"Higher Ed"},{"date":"8/1/2014","opp_name":"University of Arkansas - Grants - Renewal 1","grant_project":"EPSCoR proposal review","grant_name":"Experimental Program to Stimulate Competitive Research (EPSCoR)","requested_dollars":"28000000","awarded_dollars":"20000000","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/11/2018","opp_name":"Portland Public Schools - Grants - Renewal 3","grant_project":"CDC Promoting Adolescent Health through School-Based HIV Prevention Proposal","grant_name":"Promoting Adolescent Health through School-Based HIV Prevention","requested_dollars":"","awarded_dollars":"1800000","grant_type":"Federal","platform":"K12"},{"date":"4/5/2018","opp_name":"School Board of Duval County - Grants - Renewal 4","grant_project":"CDC Promoting Adolescent Health through School-Based HIV Prevention Proposal","grant_name":"Promoting Adolescent Health through School-Based HIV Prevention","requested_dollars":"","awarded_dollars":"1800000","grant_type":"Federal","platform":"K12"},{"date":"5/24/2013","opp_name":"Indiana University - Purdue University - Indianapolis - School of Nursing - Grants - Renewal 1","grant_project":"SBIRT Proposal Review","grant_name":"Screening, Brief Intervention, and Referral to Treatment (SBIRT)","requested_dollars":"","awarded_dollars":"937000","grant_type":"Federal","platform":"Higher Ed"},{"date":"12/2/2013","opp_name":"Community Health of South Florida Inc. - Grants - Renewal 1","grant_project":"Teaching Health Center Graduate Medical Education Payments Prog Proposal Support","grant_name":"Teaching Health Center Graduate Medical Education Payments Program","requested_dollars":"2250000","awarded_dollars":"2250000","grant_type":"Federal","platform":"Healthcare"},{"date":"9/14/2015","opp_name":"Harris County Hospital District Foundation - Grants - Renewal 1","grant_project":"HHS Cybersecurity Information Sharing Planning Cooperative Agreement Proposal","grant_name":"Healthcare and Public Health Sector Cybersecurity Information Sharing","requested_dollars":"150000","awarded_dollars":"150000","grant_type":"Federal","platform":"Healthcare"},{"date":"4/23/2013","opp_name":"United Way of California Capital Region- Grants - Renewal 1","grant_project":"SETA WIA Proposal - Information Communication Technology Training Academy","grant_name":"SETA WIA Proposal - Information Communication Technology Training Academy","requested_dollars":"1694584","awarded_dollars":"1500000","grant_type":"Federal","platform":"NGO"},{"date":"8/18/2015","opp_name":"Yakima Valley Community College - Grants - Renewal 2","grant_project":"NSF S-STEM Resubmission I","grant_name":"Scholarships in Science, Technology, Engineering, and Mathematics (S-STEM)","requested_dollars":"","awarded_dollars":"447775","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/22/2016","opp_name":"Santa Rosa Junior College - Grants - Renewal 2","grant_project":"NSF S-STEM Re-Write Phase II","grant_name":"Scholarships in Science, Technology, Engineering, and Mathematics (S-STEM)","requested_dollars":"","awarded_dollars":"300000","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/13/2016","opp_name":"Iona College - Grants - Renewal 1","grant_project":"S-STEM Review","grant_name":"Scholarships in Science, Technology, Engineering, and Mathematics (S-STEM)","requested_dollars":"","awarded_dollars":"649631","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/9/2016","opp_name":"Xavier University of Louisiana - Grants - Renewal 1","grant_project":"NSF S-STEM Proposal Support","grant_name":"Scholarships in Science, Technology, Engineering, and Mathematics (S-STEM)","requested_dollars":"","awarded_dollars":"183490","grant_type":"Federal","platform":"Higher Ed"},{"date":"8/12/2014","opp_name":"Lipscomb University - Grants - Renewal 1 (2015)","grant_project":"NSF S-STEM Proposal Revision","grant_name":"Scholarships in Science, Technology, Engineering, and Mathematics (S-STEM)","requested_dollars":"","awarded_dollars":"611517","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/27/2014","opp_name":"Appalachian State University - Grants - Renewal 1","grant_project":"ED GEAR UP Proposal Support","grant_name":"Gaining Early Awareness and Readiness for Undergraduate Programs (GEAR-UP)","requested_dollars":"","awarded_dollars":"4200000","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/16/2016","opp_name":"Nevada State College - Grants - Renewal 1","grant_project":"NSF S-STEM Proposal Development","grant_name":"Scholarships in Science, Technology, Engineering, and Mathematics (S-STEM)","requested_dollars":"625000","awarded_dollars":"650000","grant_type":"Federal","platform":"Higher Ed"},{"date":"9/9/2015","opp_name":"Columbia University Medical Center - Upsell - Grants - Renewal 2","grant_project":"Finkelstein - DOD Multiple Sclerosis Proposal Review","grant_name":"Defense Health Program?s Congressionally Directed Medical Research Programs","requested_dollars":"953973","awarded_dollars":"953973","grant_type":"Federal","platform":"Healthcare"},{"date":"4/4/2011","opp_name":"West Virginia State University - Grants - Renewal 1","grant_project":"NSF HBCU-UP Targeted Infusion Grant","grant_name":"Historically Black Colleges and Universities - Undergraduate Program (HBCU-UP)","requested_dollars":"100000","awarded_dollars":"70000","grant_type":"Federal","platform":"Higher Ed"},{"date":"9/19/2016","opp_name":"University of North Alabama - Grants - Renewal 2","grant_project":"POWER Proposal Support (Part 2)","grant_name":"Partnerships for Opportunity and Workforce and Economic Revitalization (POWER)","requested_dollars":"","awarded_dollars":"997150","grant_type":"Federal","platform":"Higher Ed"},{"date":"1/23/2015","opp_name":"Savannah State University - Grants - Renewal 1","grant_project":"NSF Targeted Infusion Proposal review","grant_name":"Historically Black Colleges and Universities - Undergraduate Program (HBCU-UP)","requested_dollars":"399548","awarded_dollars":"399548","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/19/2016","opp_name":"San Francisco State University - Grants - Renewal 2","grant_project":"ED AANAPISI: Proposal Production","grant_name":"Asian American Native American Pacific Islander Serving Institutions (AANAPISI)","requested_dollars":"","awarded_dollars":"2750825","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/20/2012","opp_name":"Chattanooga State Community College - Grants - Renewal 1","grant_project":"2012 TAACCCT Grant","grant_name":"Trade Adjustment Assistance Community College and Career Training (TAACCCT) Grant","requested_dollars":"3026496","awarded_dollars":"3026396","grant_type":"Federal","platform":"Higher Ed"},{"date":"11/30/2012","opp_name":"Hinds Community College - Grants - Renewal 2","grant_project":"TAACCCT - Single Institution Proposal (SOW) Final","grant_name":"Trade Adjustment Assistance Community College and Career Training (TAACCCT) Grant","requested_dollars":"2500000","awarded_dollars":"2500000","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/4/2015","opp_name":"Columbia University Medical Center - Upsell - Grants - Renewal 1","grant_project":"ONC Workforce Training Proposal Support - Kukafka","grant_name":"Workforce Training to Educate Health Care Professionals in Health Information Technology","requested_dollars":"1000000","awarded_dollars":"1000000","grant_type":"Federal","platform":"Healthcare"},{"date":"6/5/2014","opp_name":"Columbia University Medical Center - Grants - Renewal 1","grant_project":"Phys Sci-Oncology Centers (PS-OC) (U54) Review","grant_name":"Physical Sciences-Oncology Network (PS-ON): Physical Sciences-Oncology Centers (PS-OC) (U54)","requested_dollars":"11000000","awarded_dollars":"8900000","grant_type":"Federal","platform":"Healthcare"},{"date":"6/8/2015","opp_name":"Wellmont Health System - Grants - Renewal 1","grant_project":"CMS CA to Support Navigators in Marketplaces Proposal Support","grant_name":"Cooperative Agreement to Support Navigators in Federally-Facilitated and State Partnership Marketplaces","requested_dollars":"136264","awarded_dollars":"136264","grant_type":"Federal","platform":"Healthcare"},{"date":"5/17/2013","opp_name":"Food for the Poor - Grants - Renewal 1","grant_project":"USAID IFRP Transportation, Delivery and Distribution Application","grant_name":"International Food Relief Partnership Transportation, Delivery and Distribution Applications - Guatemala and Haiti","requested_dollars":"123841","awarded_dollars":"123841","grant_type":"Federal","platform":"NGO"},{"date":"4/22/2011","opp_name":"Northern New Mexico College (2013) - Grants - Renewal 1","grant_project":"HSI-STEM proposal development","grant_name":"Hispanic-Serving Institutions - Science, Technology, Engineering, or Mathematics and Articulation Programs (HSI-STEM)","requested_dollars":"5900000","awarded_dollars":"5900000","grant_type":"Federal","platform":"Higher Ed"},{"date":"4/28/2011","opp_name":"Notre Dame de Namur University - Grants - Renewal 1","grant_project":"DoEd HSI-STEM","grant_name":"Hispanic-Serving Institutions - Science, Technology, Engineering, or Mathematics and Articulation Programs (HSI-STEM)","requested_dollars":"2900000","awarded_dollars":"2900000","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/31/2016","opp_name":"Yakima Valley Community College - Grants - Renewal 2","grant_project":"ED HSI - STEM Proposal Support","grant_name":"Hispanic-Serving Institutions - Science, Technology, Engineering, or Mathematics and Articulation Programs (HSI-STEM)","requested_dollars":"","awarded_dollars":"4296525","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/26/2016","opp_name":"East Los Angeles College - Grants - Renewal 2","grant_project":"HSI STEM Support","grant_name":"Hispanic-Serving Institutions - Science, Technology, Engineering, or Mathematics and Articulation Programs (HSI-STEM)","requested_dollars":"","awarded_dollars":"1200000","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/20/2016","opp_name":"Eastern New Mexico University - Grants - Renewal 2","grant_project":"ED HSI STEM Proposal Review","grant_name":"Hispanic-Serving Institutions - Science, Technology, Engineering, or Mathematics and Articulation Programs (HSI-STEM)","requested_dollars":"","awarded_dollars":"4559270","grant_type":"Federal","platform":"Higher Ed"},{"date":"5/31/2016","opp_name":"Sacramento City College - Grants - Renewal 1","grant_project":"ED HSI STEM: Proposal Production","grant_name":"Hispanic-Serving Institutions - Science, Technology, Engineering, or Mathematics and Articulation Programs (HSI-STEM)","requested_dollars":"","awarded_dollars":"1191269","grant_type":"Federal","platform":"Higher Ed"},{"date":"2/14/2014","opp_name":"Wright State University - Grants - Renewal 2","grant_project":"HRSA NEPQR Veterans Proposal Review","grant_name":"Nurse Education, Practice, Quality and Retention (NEPQR): Veterans? Bachelor of Science Degree in Nursing Program (VBSN)","requested_dollars":"500000","awarded_dollars":"500000","grant_type":"Federal","platform":"Higher Ed"},{"date":"6/22/2016","opp_name":"San Francisco State University - Grants - Renewal 2","grant_project":"NSF INCLUDES: Proposal Revision/Support","grant_name":"Inclusion across the Nation of Communities of Learners of Underrepresented Discoverers in Engineering and Science (INCLUDES)","requested_dollars":"","awarded_dollars":"299942","grant_type":"Federal","platform":"Higher Ed"},{"date":"8/19/2016","opp_name":"The New York and Presbyterian Hospital - Grants - Renewal 2","grant_project":"Criminal Justice Investment Initiative Proposal","grant_name":"","requested_dollars":"","awarded_dollars":"1330000","grant_type":"UNKNOWN","platform":"Healthcare"},{"date":"7/28/2017","opp_name":"Presbyterian Medical Services - Grants - Renewal 3","grant_project":"HRSA - Access Increases in Mental Health and Substance Abuse Supplemental Fundin","grant_name":"","requested_dollars":"","awarded_dollars":"175700","grant_type":"UNKNOWN","platform":"Healthcare"},{"date":"3/2/2017","opp_name":"Southcoast Health - Grants - Renewal 2","grant_project":"MA DPH Adolescent Sexual Education Proposal","grant_name":"","requested_dollars":"","awarded_dollars":"200000","grant_type":"UNKNOWN","platform":"Healthcare"},{"date":"12/22/2016","opp_name":"University of Colorado Colorado Springs - Grants - Renewal 2","grant_project":"Review: NSF MRI","grant_name":"","requested_dollars":"","awarded_dollars":"196265","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"12/30/2016","opp_name":"Iona College - Grants - Renewal 1","grant_project":"Hynes Project - Entrepreneurial Center: Proposal, Private Gift","grant_name":"","requested_dollars":"","awarded_dollars":"15000000","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"2/3/2017","opp_name":"Pennsylvania State University College of Medicine - Grants - Renewal 1","grant_project":"Dr. Fumiaki R21 Revision","grant_name":"","requested_dollars":"","awarded_dollars":"336873","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"1/23/2017","opp_name":"Pennsylvania State University College of Medicine - Grants - Renewal 1","grant_project":"Dr. Song NIAID R01 Proposal","grant_name":"","requested_dollars":"","awarded_dollars":"384529","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"9/20/2016","opp_name":"Pennsylvania State University College of Medicine - Grants - Renewal 1","grant_project":"Dr. Stewart Revision 2","grant_name":"","requested_dollars":"","awarded_dollars":"236836","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"9/13/2017","opp_name":"West Texas A&M University - Grants - Renewal 3","grant_project":"Revision: NSF EHR Core Research (ECR)","grant_name":"","requested_dollars":"","awarded_dollars":"999994","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"2/24/2017","opp_name":"A.T. Still University - Grants - Renewal 1","grant_project":"AHEC Needs Section Review","grant_name":"","requested_dollars":"","awarded_dollars":"384317","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"7/27/2016","opp_name":"University of Maryland Baltimore - School of Medicine - Grants - Renewal 1","grant_project":"U01 Review - Dr. Cairo","grant_name":"","requested_dollars":"","awarded_dollars":"376304","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"1/11/2017","opp_name":"University of Maryland Baltimore - School of Medicine - Grants - Renewal 1","grant_project":"Dr. Laurens U01 Review/Revision","grant_name":"","requested_dollars":"","awarded_dollars":"870936","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"10/3/2016","opp_name":"University of Maryland Baltimore - School of Medicine - Grants - Renewal 1","grant_project":"Dr. Harrison R21 Review","grant_name":"","requested_dollars":"","awarded_dollars":"302568","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"12/5/2016","opp_name":"Western Michigan University - Grants - Renewal 2","grant_project":"ED National Professional Development Program Proposal Review","grant_name":"","requested_dollars":"","awarded_dollars":"2600000","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"10/19/2016","opp_name":"San Francisco State University - Grants - Renewal 2","grant_project":"Review: NSF RUI Chemistry of Life Processes","grant_name":"","requested_dollars":"","awarded_dollars":"240000","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"11/22/2016","opp_name":"South Seattle College - Grants - Renewal 2","grant_project":"Upward Bound: Production","grant_name":"","requested_dollars":"","awarded_dollars":"1319690","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"1/26/2018","opp_name":"University of North Alabama - Grants - Renewal 3","grant_project":"STEM Summer Camps for Youth - Prospecting","grant_name":"","requested_dollars":"","awarded_dollars":"4205","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"11/4/2016","opp_name":"Yolo County Office of Education - Grants - Renewal 2","grant_project":"California Classified School Employee Teacher Credentialing Program Proposal","grant_name":"","requested_dollars":"","awarded_dollars":"960000","grant_type":"UNKNOWN","platform":"K12"},{"date":"9/15/2015","opp_name":"East Los Angeles College - Grants - Renewal 1","grant_project":"Consult: NSF ATE","grant_name":"ATE","requested_dollars":"","awarded_dollars":"1676028","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"8/15/2017","opp_name":"University of Central Oklahoma - Grants - Renewal 2","grant_project":"Review: NSF ITEST","grant_name":"ITEST","requested_dollars":"","awarded_dollars":"830871","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"7/7/2017","opp_name":"University of South Carolina College of Engineering and Computing - Grants - Renewal 1","grant_project":"NSF CAREER Review - Dr. Viparelli","grant_name":"CAREER","requested_dollars":"","awarded_dollars":"506571","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"3/5/2018","opp_name":"West Texas A&M University - Grants - Renewal 3","grant_project":"NSF S-STEM: Dr. Flynn","grant_name":"S-STEM","requested_dollars":"","awarded_dollars":"999545","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"5/5/2017","opp_name":"West Texas A&M University - Grants - Renewal 2","grant_project":"NSF CAREER Review - Dr. Womble","grant_name":"CAREER","requested_dollars":"","awarded_dollars":"500000","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"11/18/2016","opp_name":"Imperial Valley College - Grants - Renewal 1","grant_project":"Review: Upward Bound","grant_name":"Upward Bound","requested_dollars":"3117500","awarded_dollars":"3117500","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"1/16/2018","opp_name":"Norwich University - Grants - Renewal 3","grant_project":"VGN Pilot - Review - Dr. Glenney","grant_name":"Pilot Program","requested_dollars":"","awarded_dollars":"5000","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"1/12/2018","opp_name":"Norwich University - Grants - Renewal 3","grant_project":"VGN Project - Review - Dr. Latulippe","grant_name":"Project Awards","requested_dollars":"","awarded_dollars":"75000","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"12/13/2017","opp_name":"Norwich University - Grants - Renewal 3","grant_project":"VGN Project - Review - Dr. Shell","grant_name":"Project Awards","requested_dollars":"","awarded_dollars":"75000","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"6/13/2018","opp_name":"West Texas A&M University - Grants - Renewal 3","grant_project":"DOE CAREER - Dr. Hiranuma","grant_name":"Early Career Program","requested_dollars":"","awarded_dollars":"750000","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"10/11/2017","opp_name":"Norwich University - Grants - Renewal 3","grant_project":"Support: NEH Humanities Connections","grant_name":"Humanities Connections","requested_dollars":"","awarded_dollars":"35000","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"3/14/2017","opp_name":"Imperial Valley College - Grants - Renewal 1","grant_project":"UBMS Production","grant_name":"Upward Bound Math Science","requested_dollars":"1332555","awarded_dollars":"1332555","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"4/12/2017","opp_name":"Do�a Ana Community College (New Mexico State University) - Grants - Renewal 2","grant_project":"Production: NM AE HED (Phase 2 of 2)","grant_name":"Adult Education & Family Literacy","requested_dollars":"","awarded_dollars":"1205969","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"8/30/2017","opp_name":"Albany State University - Grants - Renewal 3","grant_project":"Review: NSF HBCU UP - Research Inititation Award (Dr. Mandouma)","grant_name":"HBCU UP - Research Initiation Award","requested_dollars":"","awarded_dollars":"299921","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"8/25/2016","opp_name":"University of Colorado Colorado Springs - Grants - Renewal 2","grant_project":"Robert Noyce Teacher Scholarship Program (NSF) Review","grant_name":"Robert Noyce Teacher Scholarship Award","requested_dollars":"","awarded_dollars":"1172688","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"2/13/2018","opp_name":"Swarthmore College - Grants - Renewal 2","grant_project":"Title VI Library Grant - Review","grant_name":"Title VI Library Research Travel Grant","requested_dollars":"","awarded_dollars":"1000","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"11/28/2016","opp_name":"Barton Memorial Hospital - Grants - Reapproach - Renewal 1","grant_project":"HRSA Rural Health Network Development Grant","grant_name":"HRSA Rural Health Network Development Grant","requested_dollars":"900000","awarded_dollars":"900000","grant_type":"UNKNOWN","platform":"Healthcare"},{"date":"7/10/2017","opp_name":"Norwich University - Grants - Renewal 3","grant_project":"NSF CyberCorp Review","grant_name":"CyberCorps(R) Scholarship for Service (SFS)","requested_dollars":"","awarded_dollars":"3500000","grant_type":"UNKNOWN","platform":"Higher Ed"},{"date":"4/20/2018","opp_name":"University of Central Oklahoma - Grants - Renewal 2","grant_project":"USDA NLGI Capacity-Building - Support - Dr. Bhargava","grant_name":"Capacity Building Grants for Non-Land Grant Colleges of Agriculture Program (NLGCA)","requested_dollars":"","awarded_dollars":"149490","grant_type":"UNKNOWN","platform":"Higher Ed"}]
},{}],286:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

require("@babel/polyfill");

var d3 = require("d3-selection");
var transition = require("d3-transition");
var histos = require("./HanoverHistogramBubbles");

var dataFile = require("../src/data.json");
var data = dataFile
// .map(r => ({...r, awarded_dollars: parseInt(r.awarded_dollars)}))
.filter(function (r) {
  return parseInt(r.awarded_dollars) !== 0;
}).sort(function (a, b) {
  if (parseInt(a.awarded_dollars) < parseInt(b.awarded_dollars)) return -1;
  if (parseInt(a.awarded_dollars) > parseInt(b.awarded_dollars)) return 1;
  return 0;
}).sort(function (a, b) {
  if (a.platform < b.platform) return -1;
  if (a.platform > b.platform) return 1;
  return 0;
});

var formatDollars = function formatDollars(x) {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function onMouseEnter(d, i) {
  document.getElementById("side-tooltip").classList.remove("dnone");
  document.getElementById("side-instructs").classList.add("dnone");
  document.querySelector("#award-val").innerHTML = "$" + formatDollars(this.getAttribute("awarded_dollars"));

  var reqval = this.getAttribute("requested_dollars");
  if (reqval !== "") {
    document.querySelector("#req-row").classList.remove("dnone");
    document.querySelector("#req-val").innerHTML = "$" + formatDollars(this.getAttribute("requested_dollars"));
  } else {
    document.querySelector("#req-row").classList.add("dnone");
  }

  document.querySelector("#year-val").innerHTML = this.getAttribute("year");
  document.querySelector("#source-val").innerHTML = this.getAttribute("granttype");
  document.querySelector("#source-val").innerHTML = this.getAttribute("granttype");
  document.querySelector("#platform-val").innerHTML = this.getAttribute("platform");
  document.querySelector("#project-name").innerHTML = this.getAttribute("opp_name");
  document.querySelector(".legend-circle").className = "legend-circle " + this.getAttribute("platform");

  d3.select(this).style("fill", "#00000000");
}

function onMouseLeave(d, i) {
  document.getElementById("side-tooltip").classList.add("dnone");
  document.getElementById("side-instructs").classList.remove("dnone");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".button-animationtoggle").forEach(function (e) {
    e.addEventListener("click", function () {
      return onToggleView(e.getAttribute("id"));
    });
  });

  var totalFunding = formatDollars(data.reduce(function (acc, curr) {
    return acc + parseInt(curr["awarded_dollars"]);
  }, 0).toString());

  document.querySelector("#total_awarded").innerHTML = "$" + totalFunding;

  var el = document.querySelector("svg"),
      svg = d3.select("svg"),
      width = parseInt(svg.style("width").replace("px", "")),
      //el.clientWidth || el.parentNode.clientWidth,
  height = parseInt(svg.style("height").replace("px", "")),
      //el.clientHeight || el.parentNode.clientHeight,
  g = svg.append("g");

  var initBubbles = function initBubbles() {
    g.selectAll("circle").data(data).enter().append("circle").attr("class", function (d) {
      return "bubble " + d["platform"];
    }).attr("cx", width / 2).attr("cy", -100).attr("opp_name", function (d) {
      return d.opp_name;
    }).attr("platform", function (d) {
      return d.platform;
    }).attr("granttype", function (d) {
      return d["grant_type"];
    }).attr("awarded_dollars", function (d) {
      return d["awarded_dollars"];
    }).attr("requested_dollars", function (d) {
      return d["requested_dollars"];
    }).attr("date", function (d) {
      return d["date"];
    }).attr("year", function (d) {
      return new Date(d["date"]).getFullYear();
    }).attr("fill", "#71C8AF").attr("r", histos.standardRadius).on("mouseenter", onMouseEnter).on("mouseleave", onMouseLeave);
  };

  var updateToggleButtons = function updateToggleButtons(target) {
    document.querySelectorAll(".button-animationtoggle").forEach(function (e) {
      e.classList.remove("highlight");
    });
    document.querySelector(target).classList.add("highlight");
  };

  var histoByYear = function histoByYear() {
    updateToggleButtons("#year");

    var histoAttribute = "date";
    //1. get bubbles
    var bubs = [].concat(_toConsumableArray(document.querySelectorAll(".bubble")));
    //2. get unduplicated list of tags
    var tags = histos.tagGetter(bubs, histoAttribute, function (d) {
      return new Date(d).getFullYear();
    });
    //get row and column positions
    var rcs = histos.rowColGetter_fixedColumnWidth(tags, function (d) {
      return new Date(d.getAttribute(histoAttribute)).getFullYear();
    }, bubs, histos.indexGetterDiscrete(tags));
    //3. figure out how much spacing we need to center the graph
    var centerX = histos.centerX(rcs, width);
    //use the row/col to calc an x and y position
    var xys = histos.xYGetter(rcs, centerX, height);
    var awardTotalByTag = tags.map(function (t, i) {
      return "$" + (bubs.filter(function (b) {
        return b.getAttribute("year") === t.toString();
      }).reduce(function (acc, curr) {
        return acc + parseInt(curr.getAttribute("awarded_dollars"));
      }, 0) / 1000000).toFixed(1) + "M";
    });

    var labelX = histos.labelXPositions(awardTotalByTag, rcs, centerX, histos.columnWidth - 1);

    var xAxisLabels = tags.map(function (t, i) {
      return {
        text: t,
        x: labelX[i],
        y: height - 5
      };
    });

    var valueY = histos.valueLabelYPositions(tags, rcs, height, 40);

    var valueLabels = tags.map(function (t, i) {
      return {
        text: awardTotalByTag[i],
        x: labelX[i],
        y: valueY[i]
      };
    });

    return { bubbles: xys, xAxisLabels: xAxisLabels, valueLabels: valueLabels };
  };

  var histoByAwardSize = function histoByAwardSize() {
    updateToggleButtons("#award");
    var histoAttribute = "awarded_dollars";
    var award_groups = [{ label: "0-25k", min: 0, max: 25000 }, { label: "25-100k", min: 25000, max: 100000 }, { label: "100-250k", min: 100000, max: 250000 }, { label: "250-500k", min: 250000, max: 500000 }, { label: "500k-1M", min: 500000, max: 1000000 }, { label: "1M-2.5M", min: 1000000, max: 2500000 }, { label: "2.5M-30M", min: 2500000, max: 30000000 }];
    var bubs = [].concat(_toConsumableArray(document.querySelectorAll(".bubble")));
    var rcs = histos.rowColGetter_fixedColumnWidth(award_groups, function (d) {
      return parseInt(d.getAttribute(histoAttribute));
    }, bubs, histos.indexGetterRanges(award_groups));
    var centerX = histos.centerX(rcs, width);
    var xys = histos.xYGetter(rcs, centerX, height);

    var indexGetter = histos.indexGetterRanges(award_groups);

    var awardTotalByTag = award_groups.map(function (t, i) {
      return "$" + (bubs.filter(function (b) {
        return indexGetter(b.getAttribute("awarded_dollars")) === i;
      }).reduce(function (acc, curr) {
        return acc + parseInt(curr.getAttribute("awarded_dollars"));
      }, 0) / 1000000).toFixed(1) + "M";
    });

    var labelX = histos.labelXPositions(awardTotalByTag, rcs, centerX, histos.columnWidth - 1);

    var xAxisLabels = award_groups.map(function (a) {
      return a.label;
    }).map(function (t, i) {
      return {
        text: t,
        x: labelX[i],
        y: height - 5
      };
    });

    var valueY = histos.valueLabelYPositions(award_groups, rcs, height, 40);

    var valueLabels = award_groups.map(function (t, i) {
      return {
        text: awardTotalByTag[i],
        x: labelX[i],
        y: valueY[i]
      };
    });

    return { bubbles: xys, xAxisLabels: xAxisLabels, valueLabels: valueLabels };
  };

  var histoByPlatform = function histoByPlatform(histoAttribute) {
    updateToggleButtons("#" + histoAttribute);
    // document.querySelectorAll(".button-view-toggle").forEach(e => {
    //   e.classList.remove("highlight");
    // });
    // document
    //   .querySelector("#btn-" + histoAttribute)
    //   .classList.add("highlight");

    var bubs = [].concat(_toConsumableArray(document.querySelectorAll(".bubble")));
    var tags = histos.tagGetter(bubs, histoAttribute, function (d) {
      return d;
    });
    var rcs = histos.rowColGetter_dynamicColumnWidth(tags, function (d) {
      return d.getAttribute(histoAttribute);
    }, bubs, histos.indexGetterDiscrete(tags));
    var centerX = histos.centerX(rcs, width);
    var xys = histos.xYGetter(rcs, centerX, height);
    // const labs = histos.labelMaker(tags, rcs, centerX, height);

    var awardTotalByTag = tags.map(function (t, i) {
      return "$" + (bubs.filter(function (b) {
        return b.getAttribute(histoAttribute) === t.toString();
      }).reduce(function (acc, curr) {
        return acc + parseInt(curr.getAttribute("awarded_dollars"));
      }, 0) / 1000000).toFixed(1) + "M";
    });

    var labelX = histos.labelXPositions(awardTotalByTag, rcs, centerX);

    var xAxisLabels = tags.map(function (t, i) {
      return {
        text: t,
        x: labelX[i],
        y: height - 5
      };
    });

    var valueY = histos.valueLabelYPositions(tags, rcs, height, 40);

    var valueLabels = tags.map(function (t, i) {
      return {
        text: awardTotalByTag[i],
        x: labelX[i],
        y: valueY[i]
      };
    });

    return { bubbles: xys, xAxisLabels: xAxisLabels, valueLabels: valueLabels };

    // return { bubbles: xys, xAxisLabels: labs };
  };

  var drawHistogram = function drawHistogram(data) {
    var bubs = [].concat(_toConsumableArray(document.querySelectorAll(".bubble")));

    bubs.forEach(function (b, i) {
      if (data[i].targetX) {
        d3.select(b).attr("cx", function () {
          return data[i].targetX;
        }).attr("cy", function () {
          return data[i].cy;
        }).transition().attr("cx", function () {
          return data[i].targetX;
        }).attr("cy", function () {
          return data[i].targetY;
        }).duration(i * 5);
      } else {
        d3.select(b).transition().attr("cx", function () {
          return data[i].cx;
        }).attr("cy", function () {
          return data[i].cy;
        }).duration(2000);
      }
    });
  };

  var drawAxisLabels = function drawAxisLabels(data) {
    var xLabs = g.selectAll(".xaxis-labels").data(data);

    //update
    xLabs.attr("class", "xaxis-labels").transition().text(function (d) {
      return d.text;
    }).attr("x", function (d, i) {
      return d.x;
    }).attr("y", function (d) {
      return d.y;
    }).attr("opacity", 1).duration(1000);

    //enter
    xLabs.enter().append("text").attr("class", "xaxis-labels").text(function (d) {
      return d.text;
    }).attr("x", function (d, i) {
      return d.x;
    }).attr("y", height + 10).transition().attr("y", function (d) {
      return d.y;
    }).attr("opacity", 1).duration(1000);

    //exit
    xLabs.exit().transition().attr("opacity", 0).attr("y", height + 10).duration(800).remove();
  };

  var drawValueLabels = function drawValueLabels() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var valueLabs = g.selectAll(".value-labels").data(data);

    //update
    valueLabs.attr("class", "value-labels").text(function (d) {
      return d.text;
    }).attr("opacity", 0).attr("x", function (d, i) {
      return d.x;
    }).attr("y", function (d) {
      return d.y;
    }).transition().delay(1800).attr("opacity", 1).duration(700);

    //enter
    valueLabs.enter().append("text").attr("class", "value-labels").text(function (d) {
      return d.text;
    }).attr("x", function (d, i) {
      return d.x;
    }).attr("y", function (d) {
      return d.y;
    }).attr("opacity", 0).transition().delay(1800).attr("opacity", 1).duration(700);

    //exit
    valueLabs.exit()
    // .transition()
    // .attr("opacity", 0)
    // .duration(700)
    .remove();
  };

  var anims = [{ delay: 0, dur: 0, animator: initBubbles }, { delay: 0, dur: 0, animator: histoByYear
    // { delay: 2000, dur: 0, animator: histoByAwardSize },
    // { delay: 2000, dur: 0, animator: () => histoByPlatform("platform") },
    // { delay: 2000, dur: 0, animator: () => histoByPlatform("granttype") }
  }];

  var state = {
    runAnimation: true,
    hasStarted: false
  };

  var animationHopper = function animationHopper(data) {
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    setTimeout(function () {
      if (!state.runAnimation) return;
      var updateElems = data[0].animator();

      if (updateElems) {
        var bubs = updateElems.bubbles;

        if (count === 1) {
          //override bubs here
          bubs = bubs.map(function (b) {
            return _extends({}, b, {
              targetX: b.cx,
              targetY: b.cy,
              cx: b.cx,
              cy: -b.cy
            });
          });
        }

        drawHistogram(bubs);
        drawAxisLabels(updateElems.xAxisLabels);
        drawValueLabels(updateElems.valueLabels);
      }

      if (data.length > 1) {
        animationHopper(data.slice(1), ++count);
      }
    }, data[0].delay);
  };
  animationHopper(anims);

  // onStart = () => {
  //   if (!state.hasStarted) {
  //     state = { ...state, hasStarted: true };
  //     animationHopper(anims);
  //   }
  // };

  var onToggleView = function onToggleView(viewTarget) {
    state = { runAnimation: false };

    var updateElems = void 0;

    switch (viewTarget) {
      case "year":
        updateElems = histoByYear();
        break;
      case "award":
        updateElems = histoByAwardSize();
        break;
      case "platform":
        updateElems = histoByPlatform("platform");
        break;
      case "granttype":
        updateElems = histoByPlatform("granttype");
        break;
    }

    if (updateElems) {
      drawHistogram(updateElems.bubbles);
      drawAxisLabels(updateElems.xAxisLabels);
      drawValueLabels(updateElems.valueLabels);
    }
  };
}, false);

},{"../src/data.json":285,"./HanoverHistogramBubbles":284,"@babel/polyfill":1,"d3-selection":280,"d3-transition":282}]},{},[286]);
