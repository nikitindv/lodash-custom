export {default as chain} from '../lodash-es/chain.js';
export {default as debounce} from '../lodash-es/debounce.js';
export {default as findLastIndex} from '../lodash-es/findLastIndex.js';
export {default as get} from '../lodash-es/get.js';
export {default as includes} from '../lodash-es/includes.js';
export {default as isUndefined} from '../lodash-es/isUndefined.js';
export {default as join} from '../lodash-es/join.js';
export {default as keys} from '../lodash-es/keys.js';
export {default as matches} from '../lodash-es/matches.js';
export {default as negate} from '../lodash-es/negate.js';
export {default as omit} from '../lodash-es/omit.js';
export {default as partial} from '../lodash-es/partial.js';
export {default as reverse} from '../lodash-es/reverse.js';
export {default as startsWith} from '../lodash-es/startsWith.js';
export {default as sum} from '../lodash-es/sum.js';
export {default as tail} from '../lodash-es/tail.js';
export {default as toArray} from '../lodash-es/toArray.js';
export {default as trim} from '../lodash-es/trim.js';
export {default as capitalize} from '../lodash-es/capitalize.js';
export {default as defaults} from '../lodash-es/defaults.js';
export {default as intersectionBy} from '../lodash-es/intersectionBy.js';
export {default as isEmpty} from '../lodash-es/isEmpty.js';
export {default as isString} from '../lodash-es/isString.js';
export {default as clone} from '../lodash-es/clone.js';
export {default as cloneDeep} from '../lodash-es/cloneDeep.js';
export {default as first} from '../lodash-es/first.js';
export {default as head} from '../lodash-es/head.js';
export {default as isEqual} from '../lodash-es/isEqual.js';
export {default as isFunction} from '../lodash-es/isFunction.js';
export {default as max} from '../lodash-es/max.js';
export {default as noop} from '../lodash-es/noop.js';
export {default as forOwn} from '../lodash-es/forOwn.js';
export {default as isObject} from '../lodash-es/isObject.js';
export {default as size} from '../lodash-es/size.js';
export {default as sortBy} from '../lodash-es/sortBy.js';
export {default as values} from '../lodash-es/values.js';
export {default as reduce} from '../lodash-es/reduce.js';
export {default as isNaN} from '../lodash-es/isNaN.js';
export {default as findIndex} from '../lodash-es/findIndex.js';
export {default as some} from '../lodash-es/some.js';
export {default as isArray} from '../lodash-es/isArray.js';
export {default as isNumber} from '../lodash-es/isNumber.js';
export {default as identity} from '../lodash-es/identity.js';
export {default as filter} from '../lodash-es/filter.js';
export {default as find} from '../lodash-es/find.js';
export {default as map} from '../lodash-es/map.js';
export {default as forEach} from '../lodash-es/forEach.js';
export {default as difference } from '../lodash-es/difference.js'

import wrapper from '../lodash-es/wrapperLodash.js';


wrapper.chain = chain;
wrapper.debounce = debounce;
wrapper.findLastIndex = findLastIndex;
wrapper.get = get;
wrapper.includes = includes;
wrapper.isUndefined = isUndefined;
wrapper.join = join;
wrapper.keys = keys;
wrapper.matches = matches;
wrapper.negate = negate;
wrapper.omit = omit;
wrapper.partial = partial;
wrapper.reverse = reverse;
wrapper.startsWith = startsWith;
wrapper.sum = sum;
wrapper.tail = tail;
wrapper.toArray = toArray;
wrapper.trim = trim;
wrapper.capitalize = capitalize;
wrapper.defaults = defaults;
wrapper.intersectionBy = intersectionBy;
wrapper.isEmpty = isEmpty;
wrapper.isString = isString;
wrapper.clone = clone;
wrapper.cloneDeep = cloneDeep;
wrapper.first = first;
wrapper.head = head;
wrapper.isEqual = isEqual;
wrapper.isFunction = isFunction;
wrapper.max = max;
wrapper.noop = noop;
wrapper.forOwn = forOwn;
wrapper.isObject = isObject;
wrapper.size = size;
wrapper.sortBy = sortBy;
wrapper.values = values;
wrapper.reduce = reduce;
wrapper.isNaN = isNaN;
wrapper.findIndex = findIndex;
wrapper.some = some;
wrapper.isArray = isArray;
wrapper.isNumber = isNumber;
wrapper.identity = identity;
wrapper.filter = filter;
wrapper.find = find;
wrapper.map = map;
wrapper.forEach = forEach;
wrapper.difference  = difference;

export const wrap = wrapper;
