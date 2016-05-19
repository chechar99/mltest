"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
/*!
 * jQuery JavaScript Library v2.2.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-04-05T19:26Z
 */
(function(global, factory) {
    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") { // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
        };
    } else {
        factory(global);
    } // Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : undefined, function(window, noGlobal) { // Support: Firefox 18+
    // Can't be in strict mode, several libs including ASP.NET trace
    // the stack via arguments.caller.callee and Firefox dies if
    // you try to trace through "use strict" call chains. (#13335)
    //"use strict";
    var arr = [];
    var document = window.document;
    var _slice = arr.slice;
    var concat = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var support = {};
    var version = "2.2.3", // Define a local copy of jQuery
        jQuery = function jQuery(selector, context) { // The jQuery object is actually just the init constructor 'enhanced'
            // Need init if jQuery is called (just allow error to be thrown if not included)
            return new jQuery.fn.init(selector, context);
        }, // Support: Android<4.1
        // Make sure we trim BOM and NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // Matches dashed string for camelizing
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
        fcamelCase = function fcamelCase(all, letter) {
            return letter.toUpperCase();
        };
    jQuery.fn = jQuery.prototype = { // The current version of jQuery being used
        jquery: version,
        constructor: jQuery, // Start with an empty selector
        selector: "", // The default length of a jQuery object is 0
        length: 0,
        toArray: function toArray() {
            return _slice.call(this);
        }, // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function get(num) {
            return num != null ? // Return just the one element from the set
                num < 0 ? this[num + this.length] : this[num] : // Return all the elements in a clean array
                _slice.call(this);
        }, // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function pushStack(elems) { // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            ret.context = this.context; // Return the newly-formed element set
            return ret;
        }, // Execute a callback for every element in the matched set.
        each: function each(callback) {
            return jQuery.each(this, callback);
        },
        map: function map(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function slice() {
            return this.pushStack(_slice.apply(this, arguments));
        },
        first: function first() {
            return this.eq(0);
        },
        last: function last() {
            return this.eq(-1);
        },
        eq: function eq(i) {
            var len = this.length,
                j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function end() {
            return this.prevObject || this.constructor();
        }, // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false; // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target; // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        } // Handle case when target is a string or something (possible in deep copy)
        if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
            target = {};
        } // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }
        for (; i < length; i++) { // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) { // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name]; // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    } // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        } // Never move original objects, clone them
                        target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        } // Return the modified object
        return target;
    };
    jQuery.extend({ // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""), // Assume jQuery is ready without the ready module
        isReady: true,
        error: function error(msg) {
            throw new Error(msg);
        },
        noop: function noop() {},
        isFunction: function isFunction(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray,
        isWindow: function isWindow(obj) {
            return obj != null && obj === obj.window;
        },
        isNumeric: function isNumeric(obj) { // parseFloat NaNs numeric-cast false positives (null|true|false|"")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            // adding 1 corrects loss of precision from parseFloat (#15100)
            var realStringObj = obj && obj.toString();
            return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
        },
        isPlainObject: function isPlainObject(obj) {
            var key; // Not plain objects:
            // - Any object or value whose internal [[Class]] property is not "[object Object]"
            // - DOM nodes
            // - window
            if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            } // Not own constructor property must be Object
            if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) {
                return false;
            } // Own properties are enumerated firstly, so to speed up,
            // if last one is own, then all properties are own
            for (key in obj) {}
            return key === undefined || hasOwn.call(obj, key);
        },
        isEmptyObject: function isEmptyObject(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },
        type: function type(obj) {
            if (obj == null) {
                return obj + "";
            } // Support: Android<4.0, iOS<6 (functionish RegExp)
            return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
        }, // Evaluates a script in a global context
        globalEval: function globalEval(code) {
            var script, indirect = eval;
            code = jQuery.trim(code);
            if (code) { // If the code includes a valid, prologue position
                // strict mode pragma, execute code by injecting a
                // script tag into the document.
                if (code.indexOf("use strict") === 1) {
                    script = document.createElement("script");
                    script.text = code;
                    document.head.appendChild(script).parentNode.removeChild(script);
                } else { // Otherwise, avoid the DOM node creation, insertion
                    // and removal by using an indirect global eval
                    indirect(code);
                }
            }
        }, // Convert dashed to camelCase; used by the css and data modules
        // Support: IE9-11+
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function camelCase(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function nodeName(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function each(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }
            return obj;
        }, // Support: Android<4.1
        trim: function trim(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        }, // results is for internal usage only
        makeArray: function makeArray(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
                } else {
                    push.call(ret, arr);
                }
            }
            return ret;
        },
        inArray: function inArray(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        merge: function merge(first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;
            for (; j < len; j++) {
                first[i++] = second[j];
            }
            first.length = i;
            return first;
        },
        grep: function grep(elems, callback, invert) {
            var callbackInverse, matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert; // Go through the array, only saving the items
            // that pass the validator function
            for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }
            return matches;
        }, // arg is for internal usage only
        map: function map(elems, callback, arg) {
            var length, value, i = 0,
                ret = []; // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                } // Go through every key on the object,
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value);
                    }
                }
            } // Flatten any nested arrays
            return concat.apply([], ret);
        }, // A global GUID counter for objects
        guid: 1, // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function proxy(fn, context) {
            var tmp, args, proxy;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            } // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            if (!jQuery.isFunction(fn)) {
                return undefined;
            } // Simulated bind
            args = _slice.call(arguments, 2);
            proxy = function proxy() {
                return fn.apply(context || this, args.concat(_slice.call(arguments)));
            }; // Set the guid of unique handler to the same of original handler, so it can be removed
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        },
        now: Date.now, // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    }); // JSHint would error on this code due to the Symbol not being defined in ES5.
    // Defining this global in .jshintrc would create a danger of using the global
    // unguarded in another place, it seems safer to just disable JSHint for these
    // three lines.
    /* jshint ignore: start */
    if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    } /* jshint ignore: end */ // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });

    function isArrayLike(obj) { // Support: iOS 8.2 (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length,
            type = jQuery.type(obj);
        if (type === "function" || jQuery.isWindow(obj)) {
            return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var Sizzle =
        /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */
        function(window) {
            var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, // Local document vars
                setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, // Instance-specific data
                expando = "sizzle" + 1 * new Date(),
                preferredDoc = window.document,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                sortOrder = function sortOrder(a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                    }
                    return 0;
                }, // General-purpose constants
                MAX_NEGATIVE = 1 << 31, // Instance methods
                hasOwn = {}.hasOwnProperty,
                arr = [],
                pop = arr.pop,
                push_native = arr.push,
                push = arr.push,
                slice = arr.slice, // Use a stripped-down indexOf as it's faster than native
                // http://jsperf.com/thor-indexof-vs-for/5
                indexOf = function indexOf(list, elem) {
                    var i = 0,
                        len = list.length;
                    for (; i < len; i++) {
                        if (list[i] === elem) {
                            return i;
                        }
                    }
                    return -1;
                },
                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
                // http://www.w3.org/TR/css3-selectors/#whitespace
                whitespace = "[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
                identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
                "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
                pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                // 1. quoted (capture 3; capture 4 or capture 5)
                "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
                "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
                ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                rwhitespace = new RegExp(whitespace + "+", "g"),
                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
                rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp("^" + identifier + "$"),
                matchExpr = {
                    "ID": new RegExp("^#(" + identifier + ")"),
                    "CLASS": new RegExp("^\\.(" + identifier + ")"),
                    "TAG": new RegExp("^(" + identifier + "|[*])"),
                    "ATTR": new RegExp("^" + attributes),
                    "PSEUDO": new RegExp("^" + pseudos),
                    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    "bool": new RegExp("^(?:" + booleans + ")$", "i"), // For use in libraries implementing .is()
                    // We use this for POS matching in `select`
                    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                },
                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,
                rnative = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                rsibling = /[+~]/,
                rescape = /'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                funescape = function funescape(_, escaped, escapedWhitespace) {
                    var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
                    // Support: Firefox<24
                    // Workaround erroneous numeric interpretation of +"0x"
                    return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
                        String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
                        String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                }, // Used for iframes
                // See setDocument()
                // Removing the function wrapper causes a "Permission Denied"
                // error in IE
                unloadHandler = function unloadHandler() {
                    setDocument();
                }; // Optimize for push.apply( _, NodeList )
            try {
                push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
                // Detect silently failing push.apply
                arr[preferredDoc.childNodes.length].nodeType;
            } catch (e) {
                push = {
                    apply: arr.length ? // Leverage slice if possible
                        function(target, els) {
                            push_native.apply(target, slice.call(els));
                        } : // Support: IE<9
                        // Otherwise append directly
                        function(target, els) {
                            var j = target.length,
                                i = 0; // Can't trust NodeList.length
                            while (target[j++] = els[i++]) {}
                            target.length = j - 1;
                        }
                };
            }

            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
                    nodeType = context ? context.nodeType : 9;
                results = results || []; // Return early from calls with invalid selector or context
                if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                    return results;
                } // Try to shortcut find operations (as opposed to filters) in HTML documents
                if (!seed) {
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context);
                    }
                    context = context || document;
                    if (documentIsHTML) { // If the selector is sufficiently simple, try using a "get*By*" DOM method
                        // (excepting DocumentFragment context, where the methods don't exist)
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) { // ID selector
                            if (m = match[1]) { // Document context
                                if (nodeType === 9) {
                                    if (elem = context.getElementById(m)) { // Support: IE, Opera, Webkit
                                        // TODO: identify versions
                                        // getElementById can match elements by name instead of ID
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else {
                                        return results;
                                    } // Element context
                                } else { // Support: IE, Opera, Webkit
                                    // TODO: identify versions
                                    // getElementById can match elements by name instead of ID
                                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } // Type selector
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results; // Class selector
                            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                        } // Take advantage of querySelectorAll
                        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            if (nodeType !== 1) {
                                newContext = context;
                                newSelector = selector; // qSA looks outside Element context, which is not what we want
                                // Thanks to Andrew Dupont for this workaround technique
                                // Support: IE <=8
                                // Exclude object elements
                            } else if (context.nodeName.toLowerCase() !== "object") { // Capture the context ID, setting it first if necessary
                                if (nid = context.getAttribute("id")) {
                                    nid = nid.replace(rescape, "\\$&");
                                } else {
                                    context.setAttribute("id", nid = expando);
                                } // Prefix every selector in the list
                                groups = tokenize(selector);
                                i = groups.length;
                                nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                                while (i--) {
                                    groups[i] = nidselect + " " + toSelector(groups[i]);
                                }
                                newSelector = groups.join(","); // Expand context for sibling selectors
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            }
                            if (newSelector) {
                                try {
                                    push.apply(results, newContext.querySelectorAll(newSelector));
                                    return results;
                                } catch (qsaError) {} finally {
                                    if (nid === expando) {
                                        context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
                } // All others
                return select(selector.replace(rtrim, "$1"), context, results, seed);
            }
            /**
             * Create key-value caches of limited size
             * @returns {function(string, object)} Returns the Object data after storing it on itself with
             *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
             *	deleting the oldest entry
             */
            function createCache() {
                var keys = [];

                function cache(key, value) { // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                    if (keys.push(key + " ") > Expr.cacheLength) { // Only keep the most recent entries
                        delete cache[keys.shift()];
                    }
                    return cache[key + " "] = value;
                }
                return cache;
            }
            /**
             * Mark a function for special use by Sizzle
             * @param {Function} fn The function to mark
             */
            function markFunction(fn) {
                fn[expando] = true;
                return fn;
            }
            /**
             * Support testing using an element
             * @param {Function} fn Passed the created div and expects a boolean result
             */
            function assert(fn) {
                var div = document.createElement("div");
                try {
                    return !!fn(div);
                } catch (e) {
                    return false;
                } finally { // Remove from its parent by default
                    if (div.parentNode) {
                        div.parentNode.removeChild(div);
                    } // release memory in IE
                    div = null;
                }
            }
            /**
             * Adds the same handler for all of the specified attrs
             * @param {String} attrs Pipe-separated list of attributes
             * @param {Function} handler The method that will be applied
             */
            function addHandle(attrs, handler) {
                var arr = attrs.split("|"),
                    i = arr.length;
                while (i--) {
                    Expr.attrHandle[arr[i]] = handler;
                }
            }
            /**
             * Checks document order of two siblings
             * @param {Element} a
             * @param {Element} b
             * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
             */
            function siblingCheck(a, b) {
                var cur = b && a,
                    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE); // Use IE sourceIndex if available on both nodes
                if (diff) {
                    return diff;
                } // Check if b follows a
                if (cur) {
                    while (cur = cur.nextSibling) {
                        if (cur === b) {
                            return -1;
                        }
                    }
                }
                return a ? 1 : -1;
            }
            /**
             * Returns a function to use in pseudos for input types
             * @param {String} type
             */
            function createInputPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                };
            }
            /**
             * Returns a function to use in pseudos for buttons
             * @param {String} type
             */
            function createButtonPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                };
            }
            /**
             * Returns a function to use in pseudos for positionals
             * @param {Function} fn
             */
            function createPositionalPseudo(fn) {
                return markFunction(function(argument) {
                    argument = +argument;
                    return markFunction(function(seed, matches) {
                        var j, matchIndexes = fn([], seed.length, argument),
                            i = matchIndexes.length; // Match elements found at the specified indexes
                        while (i--) {
                            if (seed[j = matchIndexes[i]]) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }
            /**
             * Checks a node for validity as a Sizzle context
             * @param {Element|Object=} context
             * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
             */
            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context;
            } // Expose support vars for convenience
            support = Sizzle.support = {};
            /**
             * Detects XML nodes
             * @param {Element|Object} elem An element or a document
             * @returns {Boolean} True iff elem is a non-HTML XML node
             */
            isXML = Sizzle.isXML = function(elem) { // documentElement is verified for cases where it doesn't yet exist
                // (such as loading iframes in IE - #4833)
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            };
            /**
             * Sets document-related variables once based on the current document
             * @param {Element|Object} [doc] An element or document object to use to set the document
             * @returns {Object} Returns the current document
             */
            setDocument = Sizzle.setDocument = function(node) {
                var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document;
                } // Update global variables
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
                // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
                if ((parent = document.defaultView) && parent.top !== parent) { // Support: IE 11
                    if (parent.addEventListener) {
                        parent.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
                    } else if (parent.attachEvent) {
                        parent.attachEvent("onunload", unloadHandler);
                    }
                }
                /* Attributes
	---------------------------------------------------------------------- */ // Support: IE<8
                // Verify that getAttribute really returns attributes and not properties
                // (excepting IE8 booleans)
                support.attributes = assert(function(div) {
                    div.className = "i";
                    return !div.getAttribute("className");
                });
                /* getElement(s)By*
	---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
                support.getElementsByTagName = assert(function(div) {
                    div.appendChild(document.createComment(""));
                    return !div.getElementsByTagName("*").length;
                }); // Support: IE<9
                support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
                // Check if getElementById returns elements by name
                // The broken getElementById methods don't pick up programatically-set names,
                // so use a roundabout getElementsByName test
                support.getById = assert(function(div) {
                    docElem.appendChild(div).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length;
                }); // ID find and filter
                if (support.getById) {
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var m = context.getElementById(id);
                            return m ? [m] : [];
                        }
                    };
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                } else { // Support: IE6/7
                    // getElementById is not reliable as a find shortcut
                    delete Expr.find["ID"];
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        };
                    };
                } // Tag
                Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                    if (typeof context.getElementsByTagName !== "undefined") {
                        return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
                    } else if (support.qsa) {
                        return context.querySelectorAll(tag);
                    }
                } : function(tag, context) {
                    var elem, tmp = [],
                        i = 0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                        results = context.getElementsByTagName(tag); // Filter out possible comments
                    if (tag === "*") {
                        while (elem = results[i++]) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem);
                            }
                        }
                        return tmp;
                    }
                    return results;
                }; // Class
                Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className);
                    }
                };
                /* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
                // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
                // We allow this because of a bug in IE8/9 that throws an error
                // whenever `document.activeElement` is accessed on an iframe
                // So, we allow :focus to pass through QSA all the time to avoid the IE error
                // See http://bugs.jquery.com/ticket/13378
                rbuggyQSA = [];
                if (support.qsa = rnative.test(document.querySelectorAll)) { // Build QSA regex
                    // Regex strategy adopted from Diego Perini
                    assert(function(div) { // Select is set to empty string on purpose
                        // This is to test IE's treatment of not explicitly
                        // setting a boolean content attribute,
                        // since its presence should be enough
                        // http://bugs.jquery.com/ticket/12359
                        docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
                        // Nothing should be selected when empty strings follow ^= or $= or *=
                        // The test attribute must be unknown in Opera but "safe" for WinRT
                        // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                        if (div.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                        } // Support: IE8
                        // Boolean attributes and "value" are not treated correctly
                        if (!div.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                        } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                        if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=");
                        } // Webkit/Opera - :checked should return selected option elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        // IE8 throws error here and will not see later tests
                        if (!div.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked");
                        } // Support: Safari 8+, iOS 8+
                        // https://bugs.webkit.org/show_bug.cgi?id=136851
                        // In-page `selector#id sibing-combinator selector` fails
                        if (!div.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]");
                        }
                    });
                    assert(function(div) { // Support: Windows 8 Native Apps
                        // The type and name attributes are restricted during .innerHTML assignment
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        div.appendChild(input).setAttribute("name", "D"); // Support: IE8
                        // Enforce case-sensitivity of name attribute
                        if (div.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                        } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                        // IE8 throws error here and will not see later tests
                        if (!div.querySelectorAll(":enabled").length) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        } // Opera 10-11 does not throw on post-comma invalid pseudos
                        div.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }
                if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                    assert(function(div) { // Check to see if it's possible to do matchesSelector
                        // on a disconnected node (IE 9)
                        support.disconnectedMatch = matches.call(div, "div"); // This should fail with an exception
                        // Gecko does not error, returns false instead
                        matches.call(div, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos);
                    });
                }
                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                /* Contains
	---------------------------------------------------------------------- */
                hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
                // Purposefully self-exclusive
                // As in, an element does not contain itself
                contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a,
                        bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                } : function(a, b) {
                    if (b) {
                        while (b = b.parentNode) {
                            if (b === a) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                /* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
                sortOrder = hasCompare ? function(a, b) { // Flag for duplicate removal
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    } // Sort on method existence if only one input has compareDocumentPosition
                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    if (compare) {
                        return compare;
                    } // Calculate position if both inputs belong to the same document
                    compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                        1; // Disconnected nodes
                    if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) { // Choose the first element that is related to our preferred document
                        if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                            return -1;
                        }
                        if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                            return 1;
                        } // Maintain original order
                        return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                    }
                    return compare & 4 ? -1 : 1;
                } : function(a, b) { // Exit early if the nodes are identical
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    }
                    var cur, i = 0,
                        aup = a.parentNode,
                        bup = b.parentNode,
                        ap = [a],
                        bp = [b]; // Parentless nodes are either documents or disconnected
                    if (!aup || !bup) {
                        return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
                    } else if (aup === bup) {
                        return siblingCheck(a, b);
                    } // Otherwise we need full lists of their ancestors for comparison
                    cur = a;
                    while (cur = cur.parentNode) {
                        ap.unshift(cur);
                    }
                    cur = b;
                    while (cur = cur.parentNode) {
                        bp.unshift(cur);
                    } // Walk down the tree looking for a discrepancy
                    while (ap[i] === bp[i]) {
                        i++;
                    }
                    return i ? // Do a sibling check if the nodes have a common ancestor
                        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
                        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
                };
                return document;
            };
            Sizzle.matches = function(expr, elements) {
                return Sizzle(expr, null, null, elements);
            };
            Sizzle.matchesSelector = function(elem, expr) { // Set document vars if needed
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                } // Make sure that attribute selectors are quoted
                expr = expr.replace(rattributeQuotes, "='$1']");
                if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                    try {
                        var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes
                        if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                            // fragment in IE 9
                            elem.document && elem.document.nodeType !== 11) {
                            return ret;
                        }
                    } catch (e) {}
                }
                return Sizzle(expr, document, null, [elem]).length > 0;
            };
            Sizzle.contains = function(context, elem) { // Set document vars if needed
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context);
                }
                return contains(context, elem);
            };
            Sizzle.attr = function(elem, name) { // Set document vars if needed
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
                    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            };
            Sizzle.error = function(msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg);
            };
            /**
             * Document sorting and removing duplicates
             * @param {ArrayLike} results
             */
            Sizzle.uniqueSort = function(results) {
                var elem, duplicates = [],
                    j = 0,
                    i = 0; // Unless we *know* we can detect duplicates, assume their presence
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);
                if (hasDuplicate) {
                    while (elem = results[i++]) {
                        if (elem === results[i]) {
                            j = duplicates.push(i);
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1);
                    }
                } // Clear input after sorting to release objects
                // See https://github.com/jquery/sizzle/pull/225
                sortInput = null;
                return results;
            };
            /**
             * Utility function for retrieving the text value of an array of DOM nodes
             * @param {Array|Element} elem
             */
            getText = Sizzle.getText = function(elem) {
                var node, ret = "",
                    i = 0,
                    nodeType = elem.nodeType;
                if (!nodeType) { // If no nodeType, this is expected to be an array
                    while (node = elem[i++]) { // Do not traverse comment nodes
                        ret += getText(node);
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) { // Use textContent for elements
                    // innerText usage removed for consistency of new lines (jQuery #11153)
                    if (typeof elem.textContent === "string") {
                        return elem.textContent;
                    } else { // Traverse its children
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem);
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                } // Do not include comment or processing instruction nodes
                return ret;
            };
            Expr = Sizzle.selectors = { // Can be adjusted by the user
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    "ATTR": function ATTR(match) {
                        match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " ";
                        }
                        return match.slice(0, 4);
                    },
                    "CHILD": function CHILD(match) {
                        /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
                        match[1] = match[1].toLowerCase();
                        if (match[1].slice(0, 3) === "nth") { // nth-* requires argument
                            if (!match[3]) {
                                Sizzle.error(match[0]);
                            } // numeric x and y parameters for Expr.filter.CHILD
                            // remember that false/true cast respectively to 0/1
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
                        } else if (match[3]) {
                            Sizzle.error(match[0]);
                        }
                        return match;
                    },
                    "PSEUDO": function PSEUDO(match) {
                        var excess, unquoted = !match[6] && match[2];
                        if (matchExpr["CHILD"].test(match[0])) {
                            return null;
                        } // Accept quoted arguments as-is
                        if (match[3]) {
                            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
                        } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
                                excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
                                excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) { // excess is a negative index
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess);
                        } // Return only captures needed by the pseudo filter method (type and argument)
                        return match.slice(0, 3);
                    }
                },
                filter: {
                    "TAG": function TAG(nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ? function() {
                            return true;
                        } : function(elem) {
                            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                        };
                    },
                    "CLASS": function CLASS(className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                        });
                    },
                    "ATTR": function ATTR(name, operator, check) {
                        return function(elem) {
                            var result = Sizzle.attr(elem, name);
                            if (result == null) {
                                return operator === "!=";
                            }
                            if (!operator) {
                                return true;
                            }
                            result += "";
                            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                        };
                    },
                    "CHILD": function CHILD(type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth",
                            forward = type.slice(-4) !== "last",
                            ofType = what === "of-type";
                        return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                            function(elem) {
                                return !!elem.parentNode;
                            } : function(elem, context, xml) {
                                var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType,
                                    diff = false;
                                if (parent) { // :(first|last|only)-(child|of-type)
                                    if (simple) {
                                        while (dir) {
                                            node = elem;
                                            while (node = node[dir]) {
                                                if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                    return false;
                                                }
                                            } // Reverse direction for :only-* (if we haven't yet done so)
                                            start = dir = type === "only" && !start && "nextSibling";
                                        }
                                        return true;
                                    }
                                    start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`
                                    if (forward && useCache) { // Seek `elem` from a previously-cached index
                                        // ...in a gzip-friendly way
                                        node = parent;
                                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                                        // Defend against cloned attroperties (jQuery gh-1709)
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex && cache[2];
                                        node = nodeIndex && parent.childNodes[nodeIndex];
                                        while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                                                diff = nodeIndex = 0) || start.pop()) { // When found, cache indexes on `parent` and break
                                            if (node.nodeType === 1 && ++diff && node === elem) {
                                                uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                break;
                                            }
                                        }
                                    } else { // Use previously-cached element index if available
                                        if (useCache) { // ...in a gzip-friendly way
                                            node = elem;
                                            outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex;
                                        } // xml :nth-child(...)
                                        // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                        if (diff === false) { // Use the same loop as above to seek `elem` from the start
                                            while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                                if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) { // Cache the index of each encountered element
                                                    if (useCache) {
                                                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                                                        // Defend against cloned attroperties (jQuery gh-1709)
                                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                        uniqueCache[type] = [dirruns, diff];
                                                    }
                                                    if (node === elem) {
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    } // Incorporate the offset, then check against cycle size
                                    diff -= last;
                                    return diff === first || diff % first === 0 && diff / first >= 0;
                                }
                            };
                    },
                    "PSEUDO": function PSEUDO(pseudo, argument) { // pseudo-class names are case-insensitive
                        // http://www.w3.org/TR/selectors/#pseudo-classes
                        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                        // Remember that setFilters inherits from pseudos
                        var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
                        // arguments are needed to create the filter function
                        // just as Sizzle does
                        if (fn[expando]) {
                            return fn(argument);
                        } // But maintain support for old signatures
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                var idx, matched = fn(seed, argument),
                                    i = matched.length;
                                while (i--) {
                                    idx = indexOf(seed, matched[i]);
                                    seed[idx] = !(matches[idx] = matched[i]);
                                }
                            }) : function(elem) {
                                return fn(elem, 0, args);
                            };
                        }
                        return fn;
                    }
                },
                pseudos: { // Potentially complex pseudos
                    "not": markFunction(function(selector) { // Trim the selector passed to compile
                        // to avoid treating leading and trailing
                        // spaces as combinators
                        var input = [],
                            results = [],
                            matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                            var elem, unmatched = matcher(seed, null, xml, []),
                                i = seed.length; // Match elements unmatched by `matcher`
                            while (i--) {
                                if (elem = unmatched[i]) {
                                    seed[i] = !(matches[i] = elem);
                                }
                            }
                        }) : function(elem, context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results); // Don't keep the element (issue #299)
                            input[0] = null;
                            return !results.pop();
                        };
                    }),
                    "has": markFunction(function(selector) {
                        return function(elem) {
                            return Sizzle(selector, elem).length > 0;
                        };
                    }),
                    "contains": markFunction(function(text) {
                        text = text.replace(runescape, funescape);
                        return function(elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                        };
                    }), // "Whether an element is represented by a :lang() selector
                    // is based solely on the element's language value
                    // being equal to the identifier C,
                    // or beginning with the identifier C immediately followed by "-".
                    // The matching of C against the element's language value is performed case-insensitively.
                    // The identifier C does not have to be a valid language name."
                    // http://www.w3.org/TR/selectors/#lang-pseudo
                    "lang": markFunction(function(lang) { // lang value must be a valid identifier
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang);
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function(elem) {
                            var elemLang;
                            do {
                                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return false;
                        };
                    }), // Miscellaneous
                    "target": function target(elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id;
                    },
                    "root": function root(elem) {
                        return elem === docElem;
                    },
                    "focus": function focus(elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    }, // Boolean properties
                    "enabled": function enabled(elem) {
                        return elem.disabled === false;
                    },
                    "disabled": function disabled(elem) {
                        return elem.disabled === true;
                    },
                    "checked": function checked(elem) { // In CSS3, :checked should return both checked and selected elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        var nodeName = elem.nodeName.toLowerCase();
                        return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                    },
                    "selected": function selected(elem) { // Accessing this property makes selected-by-default
                        // options in Safari work properly
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex;
                        }
                        return elem.selected === true;
                    }, // Contents
                    "empty": function empty(elem) { // http://www.w3.org/TR/selectors/#empty-pseudo
                        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                        //   but not by others (comment: 8; processing instruction: 7; etc.)
                        // nodeType < 6 works because attributes (2) do not appear as children
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return false;
                            }
                        }
                        return true;
                    },
                    "parent": function parent(elem) {
                        return !Expr.pseudos["empty"](elem);
                    }, // Element/input types
                    "header": function header(elem) {
                        return rheader.test(elem.nodeName);
                    },
                    "input": function input(elem) {
                        return rinputs.test(elem.nodeName);
                    },
                    "button": function button(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },
                    "text": function text(elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
                            // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                            (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                    }, // Position-in-collection
                    "first": createPositionalPseudo(function() {
                        return [0];
                    }),
                    "last": createPositionalPseudo(function(matchIndexes, length) {
                        return [length - 1];
                    }),
                    "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument];
                    }),
                    "even": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "odd": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; --i >= 0;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    })
                }
            };
            Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos
            for (i in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                Expr.pseudos[i] = createInputPseudo(i);
            }
            for (i in {
                    submit: true,
                    reset: true
                }) {
                Expr.pseudos[i] = createButtonPseudo(i);
            } // Easy API for creating new setFilters
            function setFilters() {}
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                }
                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;
                while (soFar) { // Comma and first run
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) { // Don't consume trailing commas as valid
                            soFar = soFar.slice(match[0].length) || soFar;
                        }
                        groups.push(tokens = []);
                    }
                    matched = false; // Combinators
                    if (match = rcombinators.exec(soFar)) {
                        matched = match.shift();
                        tokens.push({
                            value: matched, // Cast descendant combinators to space
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length);
                    } // Filters
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                    }
                    if (!matched) {
                        break;
                    }
                } // Return the length of the invalid excess
                // if we're just parsing
                // Otherwise, throw an error or return tokens
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
                    tokenCache(selector, groups).slice(0);
            };

            function toSelector(tokens) {
                var i = 0,
                    len = tokens.length,
                    selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value;
                }
                return selector;
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir,
                    checkNonElements = base && dir === "parentNode",
                    doneName = done++;
                return combinator.first ? // Check against closest ancestor/preceding element
                    function(elem, context, xml) {
                        while (elem = elem[dir]) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                return matcher(elem, context, xml);
                            }
                        }
                    } : // Check against all ancestor/preceding elements
                    function(elem, context, xml) {
                        var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                        if (xml) {
                            while (elem = elem[dir]) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    if (matcher(elem, context, xml)) {
                                        return true;
                                    }
                                }
                            }
                        } else {
                            while (elem = elem[dir]) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                    if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) { // Assign to newCache so results back-propagate to previous elements
                                        return newCache[2] = oldCache[2];
                                    } else { // Reuse newcache so results back-propagate to previous elements
                                        uniqueCache[dir] = newCache; // A match means we're done; a fail means we have to keep checking
                                        if (newCache[2] = matcher(elem, context, xml)) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    };
            }

            function elementMatcher(matchers) {
                return matchers.length > 1 ? function(elem, context, xml) {
                    var i = matchers.length;
                    while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                            return false;
                        }
                    }
                    return true;
                } : matchers[0];
            }

            function multipleContexts(selector, contexts, results) {
                var i = 0,
                    len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                }
                return results;
            }

            function condense(unmatched, map, filter, context, xml) {
                var elem, newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;
                for (; i < len; i++) {
                    if (elem = unmatched[i]) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i);
                            }
                        }
                    }
                }
                return newUnmatched;
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                }
                return markFunction(function(seed, results, context, xml) {
                    var temp, i, elem, preMap = [],
                        postMap = [],
                        preexisting = results.length, // Get initial elements from seed or context
                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                        matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                        [] : // ...otherwise use results directly
                        results : matcherIn; // Find primary matches
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml);
                    } // Apply postFilter
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn
                        i = temp.length;
                        while (i--) {
                            if (elem = temp[i]) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                        }
                    }
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) { // Get the final matcherOut by condensing this intermediate into postFinder contexts
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if (elem = matcherOut[i]) { // Restore matcherIn since elem is not yet a final match
                                        temp.push(matcherIn[i] = elem);
                                    }
                                }
                                postFinder(null, matcherOut = [], temp, xml);
                            } // Move matched elements from seed to results to keep them synchronized
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        } // Add elements to results, through postFinder if defined
                    } else {
                        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml);
                        } else {
                            push.apply(results, matcherOut);
                        }
                    }
                });
            }

            function matcherFromTokens(tokens) {
                var checkContext, matcher, j, len = tokens.length,
                    leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
                    matchContext = addCombinator(function(elem) {
                        return elem === checkContext;
                    }, implicitRelative, true),
                    matchAnyContext = addCombinator(function(elem) {
                        return indexOf(checkContext, elem) > -1;
                    }, implicitRelative, true),
                    matchers = [function(elem, context, xml) {
                        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)
                        checkContext = null;
                        return ret;
                    }];
                for (; i < len; i++) {
                    if (matcher = Expr.relative[tokens[i].type]) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)];
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher
                        if (matcher[expando]) { // Find the next relative operator (if any) for proper handling
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break;
                                }
                            }
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                tokens.slice(0, i - 1).concat({
                                    value: tokens[i - 2].type === " " ? "*" : ""
                                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                        }
                        matchers.push(matcher);
                    }
                }
                return elementMatcher(matchers);
            }

            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
                        var elem, j, matcher, matchedCount = 0,
                            i = "0",
                            unmatched = seed && [],
                            setMatched = [],
                            contextBackup = outermostContext, // We must always have either seed elements or outermost context
                            elems = seed || byElement && Expr.find["TAG"]("*", outermost), // Use integer dirruns iff this is the outermost matcher
                            dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
                            len = elems.length;
                        if (outermost) {
                            outermostContext = context === document || context || outermost;
                        } // Add elements passing elementMatchers directly to results
                        // Support: IE<9, Safari
                        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                        for (; i !== len && (elem = elems[i]) != null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                if (!context && elem.ownerDocument !== document) {
                                    setDocument(elem);
                                    xml = !documentIsHTML;
                                }
                                while (matcher = elementMatchers[j++]) {
                                    if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                }
                                if (outermost) {
                                    dirruns = dirrunsUnique;
                                }
                            } // Track unmatched elements for set filters
                            if (bySet) { // They will have gone through all possible matchers
                                if (elem = !matcher && elem) {
                                    matchedCount--;
                                } // Lengthen the array for every element, matched or not
                                if (seed) {
                                    unmatched.push(elem);
                                }
                            }
                        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
                        // makes the latter nonnegative.
                        matchedCount += i; // Apply set filters to unmatched elements
                        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                        // no element matchers and no seed.
                        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                        // numerically zero.
                        if (bySet && i !== matchedCount) {
                            j = 0;
                            while (matcher = setMatchers[j++]) {
                                matcher(unmatched, setMatched, context, xml);
                            }
                            if (seed) { // Reintegrate element matches to eliminate the need for sorting
                                if (matchedCount > 0) {
                                    while (i--) {
                                        if (!(unmatched[i] || setMatched[i])) {
                                            setMatched[i] = pop.call(results);
                                        }
                                    }
                                } // Discard index placeholder values to get only actual matches
                                setMatched = condense(setMatched);
                            } // Add matches to results
                            push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting
                            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                                Sizzle.uniqueSort(results);
                            }
                        } // Override manipulation of globals by nested matchers
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup;
                        }
                        return unmatched;
                    };
                return bySet ? markFunction(superMatcher) : superMatcher;
            }
            compile = Sizzle.compile = function(selector, match /* Internal Use Only */ ) {
                var i, setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[selector + " "];
                if (!cached) { // Generate a function of recursive functions that can be used to check each element
                    if (!match) {
                        match = tokenize(selector);
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached);
                        } else {
                            elementMatchers.push(cached);
                        }
                    } // Cache the compiled function
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization
                    cached.selector = selector;
                }
                return cached;
            };
            /**
             * A low-level selection function that works with Sizzle's compiled
             *  selector functions
             * @param {String|Function} selector A selector or a pre-compiled
             *  selector function built with Sizzle.compile
             * @param {Element} context
             * @param {Array} [results]
             * @param {Array} [seed] A set of elements to match against
             */
            select = Sizzle.select = function(selector, context, results, seed) {
                var i, tokens, token, type, find, compiled = typeof selector === "function" && selector,
                    match = !seed && tokenize(selector = compiled.selector || selector);
                results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
                // (the latter of which guarantees us context)
                if (match.length === 1) { // Reduce context if the leading compound selector is an ID
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results; // Precompiled matchers will still verify ancestry, so step up a level
                        } else if (compiled) {
                            context = context.parentNode;
                        }
                        selector = selector.slice(tokens.shift().value.length);
                    } // Fetch a seed set for right-to-left matching
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i]; // Abort if we hit a combinator
                        if (Expr.relative[type = token.type]) {
                            break;
                        }
                        if (find = Expr.find[type]) { // Search, expanding context for leading sibling combinators
                            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) { // If seed is empty or no tokens remain, we can return early
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                } // Compile and execute a filtering function if one is not provided
                // Provide `match` to avoid retokenization if we modified the selector above
                (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                return results;
            }; // One-time assignments
            // Sort stability
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
            // Always assume duplicates if they aren't passed to the comparison function
            support.detectDuplicates = !!hasDuplicate; // Initialize against the default document
            setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
            // Detached nodes confoundingly follow *each other*
            support.sortDetached = assert(function(div1) { // Should return 1, but returns 4 (following)
                return div1.compareDocumentPosition(document.createElement("div")) & 1;
            }); // Support: IE<8
            // Prevent attribute/property "interpolation"
            // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
            if (!assert(function(div) {
                    div.innerHTML = "<a href='#'></a>";
                    return div.firstChild.getAttribute("href") === "#";
                })) {
                addHandle("type|href|height|width", function(elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                    }
                });
            } // Support: IE<9
            // Use defaultValue in place of getAttribute("value")
            if (!support.attributes || !assert(function(div) {
                    div.innerHTML = "<input/>";
                    div.firstChild.setAttribute("value", "");
                    return div.firstChild.getAttribute("value") === "";
                })) {
                addHandle("value", function(elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue;
                    }
                });
            } // Support: IE<9
            // Use getAttributeNode to fetch booleans when getAttribute lies
            if (!assert(function(div) {
                    return div.getAttribute("disabled") == null;
                })) {
                addHandle(booleans, function(elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    }
                });
            }
            return Sizzle;
        }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    var dir = function dir(elem, _dir, until) {
        var matched = [],
            truncate = until !== undefined;
        while ((elem = elem[_dir]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                    break;
                }
                matched.push(elem);
            }
        }
        return matched;
    };
    var _siblings = function _siblings(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
                matched.push(n);
            }
        }
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
    var risSimple = /^.[^:#\[\.,]*$/; // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) { /* jshint -W018 */
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not;
            });
        }
        if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
        });
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
            expr = ":not(" + expr + ")";
        }
        return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function find(selector) {
            var i, len = this.length,
                ret = [],
                self = this;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            } // Needed because $( selector, context ) becomes $( context ).find( selector )
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        filter: function filter(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function not(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function is(selector) {
            return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    }); // Initialize a jQuery object
    // A central reference to the root jQuery(document)
    var rootjQuery, // A simple way to check for HTML strings
        // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
        // Strict HTML recognition (#11290: must start with <)
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        init = jQuery.fn.init = function(selector, context, root) {
            var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)
            if (!selector) {
                return this;
            } // Method init() accepts an alternate rootjQuery
            // so migrate can support jQuery.sub (gh-2101)
            root = root || rootjQuery; // Handle HTML strings
            if (typeof selector === "string") {
                if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) { // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [null, selector, null];
                } else {
                    match = rquickExpr.exec(selector);
                } // Match html or make sure no context is specified for #id
                if (match && (match[1] || !context)) { // HANDLE: $(html) -> $(array)
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
                        // Intentionally let the error be thrown if parseHTML is not present
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) { // Properties of context are called as methods if possible
                                if (jQuery.isFunction(this[match])) {
                                    this[match](context[match]); // ...and otherwise set as attributes
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }
                        return this; // HANDLE: $(#id)
                    } else {
                        elem = document.getElementById(match[2]); // Support: Blackberry 4.6
                        // gEBID returns nodes no longer in the document (#6963)
                        if (elem && elem.parentNode) { // Inject the element directly into the jQuery object
                            this.length = 1;
                            this[0] = elem;
                        }
                        this.context = document;
                        this.selector = selector;
                        return this;
                    } // HANDLE: $(expr, $(...))
                } else if (!context || context.jquery) {
                    return (context || root).find(selector); // HANDLE: $(expr, context)
                    // (which is just equivalent to: $(context).find(expr)
                } else {
                    return this.constructor(context).find(selector);
                } // HANDLE: $(DOMElement)
            } else if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this; // HANDLE: $(function)
                // Shortcut for document ready
            } else if (jQuery.isFunction(selector)) {
                return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
                    selector(jQuery);
            }
            if (selector.selector !== undefined) {
                this.selector = selector.selector;
                this.context = selector.context;
            }
            return jQuery.makeArray(selector, this);
        }; // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn; // Initialize central reference
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    jQuery.fn.extend({
        has: function has(target) {
            var targets = jQuery(target, this),
                l = targets.length;
            return this.filter(function() {
                var i = 0;
                for (; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        closest: function closest(selectors, context) {
            var cur, i = 0,
                l = this.length,
                matched = [],
                pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) { // Always skip document fragments
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : // Don't pass non-elements to Sizzle
                            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        matched.push(cur);
                        break;
                    }
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        }, // Determine the position of an element within the set
        index: function index(elem) { // No argument, return index in parent
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            } // Index in selector
            if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0]);
            } // Locate the position of the desired element
            return indexOf.call(this, // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[0] : elem);
        },
        add: function add(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function addBack(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });

    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
        return cur;
    }
    jQuery.each({
        parent: function parent(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function parents(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function parentsUntil(elem, i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function next(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function prev(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function nextAll(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function prevAll(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function nextUntil(elem, i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function prevUntil(elem, i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function siblings(elem) {
            return _siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function children(elem) {
            return _siblings(elem.firstChild);
        },
        contents: function contents(elem) {
            return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until;
            }
            if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) { // Remove duplicates
                if (!guaranteedUnique[name]) {
                    jQuery.uniqueSort(matched);
                } // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) {
                    matched.reverse();
                }
            }
            return this.pushStack(matched);
        };
    });
    var rnotwhite = /\S+/g; // Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    /*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */
    jQuery.Callbacks = function(options) { // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var // Flag to know if list is currently firing
            firing, // Last fire value for non-forgettable lists
            memory, // Flag to know if list was already fired
            _fired, // Flag to prevent firing
            _locked, // Actual callback list
            list = [], // Queue of execution data for repeatable lists
            queue = [], // Index of currently firing callback (modified by add/remove as needed)
            firingIndex = -1, // Fire callbacks
            fire = function fire() { // Enforce single-firing
                _locked = options.once; // Execute callbacks for all pending executions,
                // respecting firingIndex overrides and runtime changes
                _fired = firing = true;
                for (; queue.length; firingIndex = -1) {
                    memory = queue.shift();
                    while (++firingIndex < list.length) { // Run callback and check for early termination
                        if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) { // Jump to end and forget the data so .add doesn't re-fire
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                } // Forget the data if we're done with it
                if (!options.memory) {
                    memory = false;
                }
                firing = false; // Clean up if we're done firing for good
                if (_locked) { // Keep an empty list if we have data for future add calls
                    if (memory) {
                        list = []; // Otherwise, this object is spent
                    } else {
                        list = "";
                    }
                }
            }, // Actual Callbacks object
            self = { // Add a callback or a collection of callbacks to the list
                add: function add() {
                    if (list) { // If we have memory from a past run, we should fire after adding
                        if (memory && !firing) {
                            firingIndex = list.length - 1;
                            queue.push(memory);
                        }(function add(args) {
                            jQuery.each(args, function(_, arg) {
                                if (jQuery.isFunction(arg)) {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg);
                                    }
                                } else if (arg && arg.length && jQuery.type(arg) !== "string") { // Inspect recursively
                                    add(arg);
                                }
                            });
                        })(arguments);
                        if (memory && !firing) {
                            fire();
                        }
                    }
                    return this;
                }, // Remove a callback from the list
                remove: function remove() {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1); // Handle firing indexes
                            if (index <= firingIndex) {
                                firingIndex--;
                            }
                        }
                    });
                    return this;
                }, // Check if a given callback is in the list.
                // If no argument is given, return whether or not list has callbacks attached.
                has: function has(fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                }, // Remove all callbacks from the list
                empty: function empty() {
                    if (list) {
                        list = [];
                    }
                    return this;
                }, // Disable .fire and .add
                // Abort any current/pending executions
                // Clear all callbacks and values
                disable: function disable() {
                    _locked = queue = [];
                    list = memory = "";
                    return this;
                },
                disabled: function disabled() {
                    return !list;
                }, // Disable .fire
                // Also disable .add unless we have memory (since it would have no effect)
                // Abort any pending executions
                lock: function lock() {
                    _locked = queue = [];
                    if (!memory) {
                        list = memory = "";
                    }
                    return this;
                },
                locked: function locked() {
                    return !!_locked;
                }, // Call all callbacks with the given context and arguments
                fireWith: function fireWith(context, args) {
                    if (!_locked) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        queue.push(args);
                        if (!firing) {
                            fire();
                        }
                    }
                    return this;
                }, // Call all the callbacks with the given arguments
                fire: function fire() {
                    self.fireWith(this, arguments);
                    return this;
                }, // To know if the callbacks have already been called at least once
                fired: function fired() {
                    return !!_fired;
                }
            };
        return self;
    };
    jQuery.extend({
        Deferred: function Deferred(func) {
            var tuples = [ // action, add listener, listener list, final state
                    ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", jQuery.Callbacks("memory")]
                ],
                _state = "pending",
                _promise = {
                    state: function state() {
                        return _state;
                    },
                    always: function always() {
                        deferred.done(arguments).fail(arguments);
                        return this;
                    },
                    then: function then() /* fnDone, fnFail, fnProgress */ {
                        var fns = arguments;
                        return jQuery.Deferred(function(newDefer) {
                            jQuery.each(tuples, function(i, tuple) {
                                var fn = jQuery.isFunction(fns[i]) && fns[i]; // deferred[ done | fail | progress ] for forwarding actions to newDefer
                                deferred[tuple[1]](function() {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && jQuery.isFunction(returned.promise)) {
                                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                    } else {
                                        newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    }, // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function promise(obj) {
                        return obj != null ? jQuery.extend(obj, _promise) : _promise;
                    }
                },
                deferred = {}; // Keep pipe for back-compat
            _promise.pipe = _promise.then; // Add list-specific methods
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2],
                    stateString = tuple[3]; // promise[ done | fail | progress ] = list.add
                _promise[tuple[1]] = list.add; // Handle state
                if (stateString) {
                    list.add(function() { // state = [ resolved | rejected ]
                        _state = stateString; // [ reject_list | resolve_list ].disable; progress_list.lock
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                } // deferred[ resolve | reject | notify ]
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            }); // Make the deferred a promise
            _promise.promise(deferred); // Call given func if any
            if (func) {
                func.call(deferred, deferred);
            } // All done!
            return deferred;
        }, // Deferred helper
        when: function when(subordinate /* , ..., subordinateN */ ) {
            var i = 0,
                resolveValues = _slice.call(arguments),
                length = resolveValues.length, // the count of uncompleted subordinates
                remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, // the master Deferred.
                // If resolveValues consist of only a single Deferred, just use that.
                deferred = remaining === 1 ? subordinate : jQuery.Deferred(), // Update function for both resolve and progress values
                updateFunc = function updateFunc(i, contexts, values) {
                    return function(value) {
                        contexts[i] = this;
                        values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
                        if (values === progressValues) {
                            deferred.notifyWith(contexts, values);
                        } else if (!--remaining) {
                            deferred.resolveWith(contexts, values);
                        }
                    };
                },
                progressValues, progressContexts, resolveContexts; // Add listeners to Deferred subordinates; treat others as resolved
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (; i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
                    } else {
                        --remaining;
                    }
                }
            } // If we're not waiting on anything, resolve the master
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
        }
    }); // The deferred used on DOM ready
    var readyList;
    jQuery.fn.ready = function(fn) { // Add the callback
        jQuery.ready.promise().done(fn);
        return this;
    };
    jQuery.extend({ // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false, // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1, // Hold (or release) the ready event
        holdReady: function holdReady(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        }, // Handle when the DOM is ready
        ready: function ready(wait) { // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            } // Remember that the DOM is ready
            jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            } // If there are functions bound, to execute
            readyList.resolveWith(document, [jQuery]); // Trigger any bound ready events
            if (jQuery.fn.triggerHandler) {
                jQuery(document).triggerHandler("ready");
                jQuery(document).off("ready");
            }
        }
    });
    /**
     * The ready event handler and self cleanup method
     */
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready();
    }
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred(); // Catch cases where $(document).ready() is called
            // after the browser event has already occurred.
            // Support: IE9-10 only
            // Older IE sometimes signals "interactive" too soon
            if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) { // Handle it asynchronously to allow scripts the opportunity to delay ready
                window.setTimeout(jQuery.ready);
            } else { // Use the handy event callback
                document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work
                window.addEventListener("load", completed);
            }
        }
        return readyList.promise(obj);
    }; // Kick off the DOM ready check even if the user does not
    jQuery.ready.promise(); // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
            len = elems.length,
            bulk = key == null; // Sets many values
        if (jQuery.type(key) === "object") {
            chainable = true;
            for (i in key) {
                access(elems, fn, i, key[i], true, emptyGet, raw);
            } // Sets one value
        } else if (value !== undefined) {
            chainable = true;
            if (!jQuery.isFunction(value)) {
                raw = true;
            }
            if (bulk) { // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null; // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function fn(elem, key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) {
                for (; i < len; i++) {
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
            }
        }
        return chainable ? elems : // Gets
            bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
    };
    var acceptData = function acceptData(owner) { // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        /* jshint -W018 */
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };

    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
        register: function register(owner, initial) {
            var value = initial || {}; // If it is a node unlikely to be stringify-ed or looped over
            // use plain assignment
            if (owner.nodeType) {
                owner[this.expando] = value; // Otherwise secure it in a non-enumerable, non-writable property
                // configurability must be true to allow the property to be
                // deleted with the delete operator
            } else {
                Object.defineProperty(owner, this.expando, {
                    value: value,
                    writable: true,
                    configurable: true
                });
            }
            return owner[this.expando];
        },
        cache: function cache(owner) { // We can accept data for non-element nodes in modern browsers,
            // but we should not, see #8335.
            // Always return an empty object.
            if (!acceptData(owner)) {
                return {};
            } // Check if the owner object already has a cache
            var value = owner[this.expando]; // If not, create one
            if (!value) {
                value = {}; // We can accept data for non-element nodes in modern browsers,
                // but we should not, see #8335.
                // Always return an empty object.
                if (acceptData(owner)) { // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) {
                        owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
                        // configurable must be true to allow the property to be
                        // deleted when data is removed
                    } else {
                        Object.defineProperty(owner, this.expando, {
                            value: value,
                            configurable: true
                        });
                    }
                }
            }
            return value;
        },
        set: function set(owner, data, value) {
            var prop, cache = this.cache(owner); // Handle: [ owner, key, value ] args
            if (typeof data === "string") {
                cache[data] = value; // Handle: [ owner, { properties } ] args
            } else { // Copy the properties one-by-one to the cache object
                for (prop in data) {
                    cache[prop] = data[prop];
                }
            }
            return cache;
        },
        get: function get(owner, key) {
            return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key];
        },
        access: function access(owner, key, value) {
            var stored; // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined || key && typeof key === "string" && value === undefined) {
                stored = this.get(owner, key);
                return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
            } // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value); // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function remove(owner, key) {
            var i, name, camel, cache = owner[this.expando];
            if (cache === undefined) {
                return;
            }
            if (key === undefined) {
                this.register(owner);
            } else { // Support array or space separated string of keys
                if (jQuery.isArray(key)) { // If "name" is an array of keys...
                    // When data is initially created, via ("key", "val") signature,
                    // keys will be converted to camelCase.
                    // Since there is no way to tell _how_ a key was added, remove
                    // both plain key and camelCase key. #12786
                    // This will only penalize the array argument path.
                    name = key.concat(key.map(jQuery.camelCase));
                } else {
                    camel = jQuery.camelCase(key); // Try the string as a key before any manipulation
                    if (key in cache) {
                        name = [key, camel];
                    } else { // If a key with the spaces exists, use it.
                        // Otherwise, create an array by matching non-whitespace
                        name = camel;
                        name = name in cache ? [name] : name.match(rnotwhite) || [];
                    }
                }
                i = name.length;
                while (i--) {
                    delete cache[name[i]];
                }
            } // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) { // Support: Chrome <= 35-45+
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://code.google.com/p/chromium/issues/detail?id=378607
                if (owner.nodeType) {
                    owner[this.expando] = undefined;
                } else {
                    delete owner[this.expando];
                }
            }
        },
        hasData: function hasData(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data(); //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /[A-Z]/g;

    function dataAttr(elem, key, data) {
        var name; // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : // Only convert to a number if it doesn't change the string
                        +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {} // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }
    jQuery.extend({
        hasData: function hasData(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function data(elem, name, _data) {
            return dataUser.access(elem, name, _data);
        },
        removeData: function removeData(elem, name) {
            dataUser.remove(elem, name);
        }, // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function _data(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function _removeData(elem, name) {
            dataPriv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function data(key, value) {
            var i, name, data, elem = this[0],
                attrs = elem && elem.attributes; // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) { // Support: IE11+
                            // The attrs elements can be null (#14894)
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            } // Sets multiple values
            if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
                return this.each(function() {
                    dataUser.set(this, key);
                });
            }
            return access(this, function(value) {
                var data, camelKey; // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) { // Attempt to get data from the cache
                    // with the key as-is
                    data = dataUser.get(elem, key) || // Try to find dashed key if it exists (gh-2779)
                        // This is for 2.2.x only
                        dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());
                    if (data !== undefined) {
                        return data;
                    }
                    camelKey = jQuery.camelCase(key); // Attempt to get data from the cache
                    // with the key camelized
                    data = dataUser.get(elem, camelKey);
                    if (data !== undefined) {
                        return data;
                    } // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, camelKey, undefined);
                    if (data !== undefined) {
                        return data;
                    } // We tried really hard, but the data doesn't exist.
                    return;
                } // Set the data...
                camelKey = jQuery.camelCase(key);
                this.each(function() { // First, attempt to store a copy or reference of any
                    // data that might've been store with a camelCased key.
                    var data = dataUser.get(this, camelKey); // For HTML5 data-* attribute interop, we have to
                    // store property names with dashes in a camelCase form.
                    // This might not apply to all properties...*
                    dataUser.set(this, camelKey, value); // *... In the case of properties that might _actually_
                    // have dashes, we need to also store a copy of that
                    // unchanged property.
                    if (key.indexOf("-") > -1 && data !== undefined) {
                        dataUser.set(this, key, value);
                    }
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function removeData(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function queue(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function dequeue(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type),
                next = function next() {
                    jQuery.dequeue(elem, type);
                }; // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) { // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") {
                    queue.unshift("inprogress");
                } // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        }, // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function _queueHooks(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [type + "queue", key]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function queue(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function dequeue(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function clearQueue(type) {
            return this.queue(type || "fx", []);
        }, // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function promise(type, obj) {
            var tmp, count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function resolve() {
                    if (!--count) {
                        defer.resolveWith(elements, [elements]);
                    }
                };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var isHidden = function isHidden(elem, el) { // isHidden might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    };

    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale = 1,
            maxIterations = 20,
            currentValue = tween ? function() {
                return tween.cur();
            } : function() {
                return jQuery.css(elem, prop, "");
            },
            initial = currentValue(),
            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
            initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) { // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3]; // Make sure we update the tween properties later on
            valueParts = valueParts || []; // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;
            do { // If previous iteration zeroed out, double until we get *something*.
                // Use string for doubling so we don't accidentally see scale as unchanged below
                scale = scale || ".5"; // Adjust and apply
                initialInUnit = initialInUnit / scale;
                jQuery.style(elem, prop, initialInUnit + unit); // Update scale, tolerating zero or NaN from tween.cur()
                // Break the loop if scale is unchanged or perfect, or if we've just had enough.
            } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([\w:-]+)/;
    var rscriptType = /^$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)
    var wrapMap = { // Support: IE9
        option: [1, "<select multiple='multiple'>", "</select>"], // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    }; // Support: IE9
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

    function getAll(context, tag) { // Support: IE9-11+
        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
        var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
    } // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i = 0,
            l = elems.length;
        for (; i < l; i++) {
            dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
    }
    var rhtml = /<|&#?\w+;/;

    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(),
            nodes = [],
            i = 0,
            l = elems.length;
        for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) { // Add nodes directly
                if (jQuery.type(elem) === "object") { // Support: Android<4.1, PhantomJS<2
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
                } else if (!rhtml.test(elem)) {
                    nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
                } else {
                    tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content
                    j = wrap[0];
                    while (j--) {
                        tmp = tmp.lastChild;
                    } // Support: Android<4.1, PhantomJS<2
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container
                    tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)
                    tmp.textContent = "";
                }
            }
        } // Remove wrapper from fragment
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) { // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) {
                    ignored.push(elem);
                }
                continue;
            }
            contains = jQuery.contains(elem.ownerDocument, elem); // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history
            if (contains) {
                setGlobalEval(tmp);
            } // Capture executables
            if (scripts) {
                j = 0;
                while (elem = tmp[j++]) {
                    if (rscriptType.test(elem.type || "")) {
                        scripts.push(elem);
                    }
                }
            }
        }
        return fragment;
    }(function() {
        var fragment = document.createDocumentFragment(),
            div = fragment.appendChild(document.createElement("div")),
            input = document.createElement("input"); // Support: Android 4.0-4.3, Safari<=5.1
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input); // Support: Safari<=5.1, Android<4.2
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE<=11+
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    })();
    var rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() {
        return true;
    }

    function returnFalse() {
        return false;
    } // Support: IE9
    // See #13393 for more info
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }

    function _on(elem, types, selector, data, fn, one) {
        var origFn, type; // Types can be a map of types/handlers
        if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") { // ( types-Object, selector, data )
            if (typeof selector !== "string") { // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for (type in types) {
                _on(elem, type, selector, data, types[type], one);
            }
            return elem;
        }
        if (data == null && fn == null) { // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") { // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else { // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) {
            fn = returnFalse;
        } else if (!fn) {
            return elem;
        }
        if (one === 1) {
            origFn = fn;
            fn = function fn(event) { // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            }; // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    /*
     * Helper functions for managing events -- not part of the public interface.
     * Props to Dean Edwards' addEvent library for many of the ideas.
     */
    jQuery.event = {
        global: {},
        add: function add(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if (!elemData) {
                return;
            } // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            } // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            } // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) { // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                };
            } // Handle multiple events separated by a space
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers
                if (!type) {
                    continue;
                } // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type
                special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn); // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle);
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                } // Add to the element's handler list, delegates in front
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                } // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }
        }, // Detach an event or set of events from an element
        remove: function remove(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            } // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                } // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            } // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) {
                dataPriv.remove(elem, "handle events");
            }
        },
        dispatch: function dispatch(event) { // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(event);
            var i, j, ret, matched, handleObj, handlerQueue = [],
                args = _slice.call(arguments),
                handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
                special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            } // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) { // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                    // a subset or equal to those in the bound event (both can have no namespace).
                    if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            } // Call the postDispatch hook for the mapped type
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        handlers: function handlers(event, _handlers) {
            var i, matches, sel, handleObj, handlerQueue = [],
                delegateCount = _handlers.delegateCount,
                cur = event.target; // Support (at least): Chrome, IE9
            // Find delegate handlers
            // Black-hole SVG <use> instance trees (#13180)
            //
            // Support: Firefox<=42+
            // Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
            if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
                for (; cur !== this; cur = cur.parentNode || this) { // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                            }
                            if (matches[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            } // Add the remaining (directly-bound) handlers
            if (delegateCount < _handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: _handlers.slice(delegateCount)
                });
            }
            return handlerQueue;
        }, // Includes some event props shared by KeyEvent and MouseEvent
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function filter(event, original) { // Add which for key events
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                return event;
            }
        },
        mouseHooks: {
            props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
            filter: function filter(event, original) {
                var eventDoc, doc, body, button = original.button; // Calculate pageX/Y if missing and clientX/Y available
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                } // Add which for click: 1 === left; 2 === middle; 3 === right
                // Note: button is not normalized, so don't use it
                if (!event.which && button !== undefined) {
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                }
                return event;
            }
        },
        fix: function fix(event) {
            if (event[jQuery.expando]) {
                return event;
            } // Create a writable copy of the event object and normalize some properties
            var i, prop, copy, type = event.type,
                originalEvent = event,
                fixHook = this.fixHooks[type];
            if (!fixHook) {
                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            } // Support: Cordova 2.5 (WebKit) (#13255)
            // All events should have a target; Cordova deviceready doesn't
            if (!event.target) {
                event.target = document;
            } // Support: Safari 6.0+, Chrome<28
            // Target should not be a text node (#504, #13143)
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        special: {
            load: { // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            focus: { // Fire native event if possible so blur/focus sequence is correct
                trigger: function trigger() {
                    if (this !== safeActiveElement() && this.focus) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function trigger() {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: { // For checkbox, fire native event so checked state will be right
                trigger: function trigger() {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                        this.click();
                        return false;
                    }
                }, // For cross-browser consistency, don't fire native .click() on links
                _default: function _default(event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function postDispatch(event) { // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        }
    };
    jQuery.removeEvent = function(elem, type, handle) { // This "if" is needed for plain objects
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
        }
    };
    jQuery.Event = function(src, props) { // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        } // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type; // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android<4.0
                src.returnValue === false ? returnTrue : returnFalse; // Event type
        } else {
            this.type = src;
        } // Put explicitly provided properties onto the event object
        if (props) {
            jQuery.extend(this, props);
        } // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || jQuery.now(); // Mark it as fixed
        this[jQuery.expando] = true;
    }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function preventDefault() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e) {
                e.preventDefault();
            }
        },
        stopPropagation: function stopPropagation() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e) {
                e.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    }; // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://code.google.com/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function handle(event) {
                var ret, target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    jQuery.fn.extend({
        on: function on(types, selector, data, fn) {
            return _on(this, types, selector, data, fn);
        },
        one: function one(types, selector, data, fn) {
            return _on(this, types, selector, data, fn, 1);
        },
        off: function off(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) { // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") { // ( types-object [, selector] )
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") { // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, // Support: IE 10-11, Edge 10240+
        // In IE/Edge using regex groups here causes severe slowdowns.
        // See https://connect.microsoft.com/IE/feedback/details/1736512/
        rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptTypeMasked = /^true\/(.*)/,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Manipulating tables requires a tbody
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    } // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }

    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }

    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
            return;
        } // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.access(src);
            pdataCur = dataPriv.set(dest, pdataOld);
            events = pdataOld.events;
            if (events) {
                delete pdataCur.handle;
                pdataCur.events = {};
                for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i]);
                    }
                }
            }
        } // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
        }
    } // Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }

    function domManip(collection, args, callback, ignored) { // Flatten any nested arrays
        args = concat.apply([], args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[0],
            isFunction = jQuery.isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit
        if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
                var self = collection.eq(index);
                if (isFunction) {
                    args[0] = value.call(this, index, self.html());
                }
                domManip(self, args, callback, ignored);
            });
        }
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
                fragment = first;
            } // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length; // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for (; i < l; i++) {
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration
                        if (hasScripts) { // Support: Android<4.1, PhantomJS<2
                            // push.apply(_, arraylike) throws on ancient WebKit
                            jQuery.merge(scripts, getAll(node, "script"));
                        }
                    }
                    callback.call(collection[i], node, i);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts
                    jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion
                    for (i = 0; i < hasScripts; i++) {
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src) { // Optional AJAX dependency, but won't run scripts if not present
                                if (jQuery._evalUrl) {
                                    jQuery._evalUrl(node.src);
                                }
                            } else {
                                jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
                            }
                        }
                    }
                }
            }
        }
        return collection;
    }

    function _remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem,
            i = 0;
        for (;
            (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
                jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
                if (keepData && jQuery.contains(node.ownerDocument, node)) {
                    setGlobalEval(getAll(node, "script"));
                }
                node.parentNode.removeChild(node);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function htmlPrefilter(html) {
            return html.replace(rxhtmlTag, "<$1></$2>");
        },
        clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true),
                inPage = jQuery.contains(elem.ownerDocument, elem); // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) { // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i]);
                }
            } // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0, l = srcElements.length; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            } // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            } // Return the cloned set
            return clone;
        },
        cleanData: function cleanData(elems) {
            var data, elem, type, special = jQuery.event.special,
                i = 0;
            for (;
                (elem = elems[i]) !== undefined; i++) {
                if (acceptData(elem)) {
                    if (data = elem[dataPriv.expando]) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        } // Support: Chrome <= 35-45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[dataPriv.expando] = undefined;
                    }
                    if (elem[dataUser.expando]) { // Support: Chrome <= 35-45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[dataUser.expando] = undefined;
                    }
                }
            }
        }
    });
    jQuery.fn.extend({ // Keep domManip exposed until 3.0 (gh-2225)
        domManip: domManip,
        detach: function detach(selector) {
            return _remove(this, selector, true);
        },
        remove: function remove(selector) {
            return _remove(this, selector);
        },
        text: function text(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = value;
                    }
                });
            }, null, value, arguments.length);
        },
        append: function append() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function prepend() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function before() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function after() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        empty: function empty() {
            var elem, i = 0;
            for (;
                (elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) { // Prevent memory leaks
                    jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes
                    elem.textContent = "";
                }
            }
            return this;
        },
        clone: function clone(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function html(value) {
            return access(this, function(value) {
                var elem = this[0] || {},
                    i = 0,
                    l = this.length;
                if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML;
                } // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for (; i < l; i++) {
                            elem = this[i] || {}; // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0; // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function replaceWith() {
            var ignored = []; // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) {
                        parent.replaceChild(elem, this);
                    }
                } // Force callback invocation
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [],
                insert = jQuery(selector),
                last = insert.length - 1,
                i = 0;
            for (; i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems); // Support: QtWebKit
                // .get() because push.apply(_, arraylike) throws
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var iframe, elemdisplay = { // Support: Firefox
        // We have to pre-define these values for FF (#10227)
        HTML: "block",
        BODY: "block"
    };
    /**
     * Retrieve the actual display of a element
     * @param {String} name nodeName of the element
     * @param {Object} doc Document object
     */ // Called only from within defaultDisplay
    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
            display = jQuery.css(elem[0], "display"); // We don't have any data stored on the element,
        // so use "detach" method as fast way to get rid of the element
        elem.detach();
        return display;
    }
    /**
     * Try to determine the default display value of an element
     * @param {String} nodeName
     */
    function defaultDisplay(nodeName) {
        var doc = document,
            display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName, doc); // If the simple way fails, read from inside an iframe
            if (display === "none" || !display) { // Use the already-created iframe if possible
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement); // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                doc = iframe[0].contentDocument; // Support: IE
                doc.write();
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach();
            } // Store the correct default display
            elemdisplay[nodeName] = display;
        }
        return display;
    }
    var rmargin = /^margin/;
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var getStyles = function getStyles(elem) { // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = window;
        }
        return view.getComputedStyle(elem);
    };
    var swap = function swap(elem, options, callback, args) {
        var ret, name, old = {}; // Remember the old values, and insert the new ones
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.apply(elem, args || []); // Revert the old values
        for (name in options) {
            elem.style[name] = old[name];
        }
        return ret;
    };
    var documentElement = document.documentElement;
    (function() {
        var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"),
            div = document.createElement("div"); // Finish early in limited (non-browser) environments
        if (!div.style) {
            return;
        } // Support: IE9-11+
        // Style of cloned element affects source element cloned (#8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
        container.appendChild(div); // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
            div.style.cssText = // Support: Firefox<29, Android 2.3
                // Vendor-prefix box-sizing
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
            div.innerHTML = "";
            documentElement.appendChild(container);
            var divStyle = window.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = divStyle.marginLeft === "2px";
            boxSizingReliableVal = divStyle.width === "4px"; // Support: Android 4.0 - 4.3 only
            // Some styles come back with percentage values, even though they shouldn't
            div.style.marginRight = "50%";
            pixelMarginRightVal = divStyle.marginRight === "4px";
            documentElement.removeChild(container);
        }
        jQuery.extend(support, {
            pixelPosition: function pixelPosition() { // This test is executed only once but we still do memoizing
                // since we can use the boxSizingReliable pre-computing.
                // No need to check if the test was already performed, though.
                computeStyleTests();
                return pixelPositionVal;
            },
            boxSizingReliable: function boxSizingReliable() {
                if (boxSizingReliableVal == null) {
                    computeStyleTests();
                }
                return boxSizingReliableVal;
            },
            pixelMarginRight: function pixelMarginRight() { // Support: Android 4.0-4.3
                // We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
                // since that compresses better and they're computed together anyway.
                if (boxSizingReliableVal == null) {
                    computeStyleTests();
                }
                return pixelMarginRightVal;
            },
            reliableMarginLeft: function reliableMarginLeft() { // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
                if (boxSizingReliableVal == null) {
                    computeStyleTests();
                }
                return reliableMarginLeftVal;
            },
            reliableMarginRight: function reliableMarginRight() { // Support: Android 2.3
                // Check if div with explicit width and no margin-right incorrectly
                // gets computed margin-right based on width of container. (#3333)
                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                // This support function is only executed once so no memoizing is needed.
                var ret, marginDiv = div.appendChild(document.createElement("div")); // Reset CSS: box-sizing; display; margin; border; padding
                marginDiv.style.cssText = div.style.cssText = // Support: Android 2.3
                    // Vendor-prefix box-sizing
                    "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
                marginDiv.style.marginRight = marginDiv.style.width = "0";
                div.style.width = "1px";
                documentElement.appendChild(container);
                ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);
                documentElement.removeChild(container);
                div.removeChild(marginDiv);
                return ret;
            }
        });
    })();

    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined; // Support: Opera 12.1x only
        // Fall back to style even without computed
        // computed is undefined for elems on document fragments
        if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
            ret = jQuery.style(elem, name);
        } // Support: IE9
        // getPropertyValue is only needed for .css('filter') (#12537)
        if (computed) { // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // http://dev.w3.org/csswg/cssom/#resolved-values
            if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) { // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth; // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width; // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? // Support: IE9-11+
            // IE returns zIndex value as an integer.
            ret + "" : ret;
    }

    function addGetHookIf(conditionFn, hookFn) { // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function get() {
                if (conditionFn()) { // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                } // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        cssPrefixes = ["Webkit", "O", "Moz", "ms"],
        emptyStyle = document.createElement("div").style; // Return a css property mapped to a potentially vendor prefixed property
    function vendorPropName(name) { // Shortcut for names that are not vendor prefixed
        if (name in emptyStyle) {
            return name;
        } // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1),
            i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
                return name;
            }
        }
    }

    function setPositiveNumber(elem, value, subtract) { // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }

    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? // If we already have the right measurement, avoid augmentation
            4 : // Otherwise initialize for horizontal or vertical properties
            name === "width" ? 1 : 0,
            val = 0;
        for (; i < 4; i += 2) { // Both box models exclude margin, so add it if we want it
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            if (isBorderBox) { // border-box includes padding, so remove it if we want content
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                } // At this point, extra isn't border nor margin, so remove border
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else { // At this point, extra isn't content, so add padding
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // At this point, extra isn't content nor padding, so add border
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        return val;
    }

    function getWidthOrHeight(elem, name, extra) { // Start with offset property, which is equivalent to the border-box value
        var valueIsBorderBox = true,
            val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
            styles = getStyles(elem),
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Support: IE11 only
        // In IE 11 fullscreen elements inside of an iframe have
        // 100x too small dimensions (gh-1764).
        if (document.msFullscreenElement && window.top !== window) { // Support: IE11 only
            // Running getBoundingClientRect on a disconnected node
            // in IE throws an error.
            if (elem.getClientRects().length) {
                val = Math.round(elem.getBoundingClientRect()[name] * 100);
            }
        } // Some non-html elements return undefined for offsetWidth, so check for null/undefined
        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        if (val <= 0 || val == null) { // Fall back to computed then uncomputed css if necessary
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name];
            } // Computed unit is not pixels. Stop here and return.
            if (rnumnonpx.test(val)) {
                return val;
            } // Check for style in case a browser which returns unreliable values
            // for getComputedStyle silently falls back to the reliable elem.style
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]); // Normalize "", auto, and prepare for extra
            val = parseFloat(val) || 0;
        } // Use the active box-sizing model to add/subtract irrelevant styles
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }

    function showHide(elements, show) {
        var display, elem, hidden, values = [],
            index = 0,
            length = elements.length;
        for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            values[index] = dataPriv.get(elem, "olddisplay");
            display = elem.style.display;
            if (show) { // Reset the inline display of this element to learn if it is
                // being hidden by cascaded rules or not
                if (!values[index] && display === "none") {
                    elem.style.display = "";
                } // Set elements which have been overridden with display: none
                // in a stylesheet to whatever the default browser style is
                // for such an element
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
                }
            } else {
                hidden = isHidden(elem);
                if (display !== "none" || !hidden) {
                    dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                }
            }
        } // Set the display of most of the elements in a second loop
        // to avoid the constant reflow
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        return elements;
    }
    jQuery.extend({ // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function get(elem, computed) {
                    if (computed) { // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        }, // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        }, // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
            "float": "cssFloat"
        }, // Get and set the style property on a DOM Node
        style: function style(elem, name, value, extra) { // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            } // Make sure that we're working with the right name
            var ret, type, hooks, origName = jQuery.camelCase(name),
                style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName); // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value === "undefined" ? "undefined" : _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret); // Fixes bug #9237
                    type = "number";
                } // Make sure that null and NaN values aren't set (#7116)
                if (value == null || value !== value) {
                    return;
                } // If a number was passed in, add the unit (except for certain CSS properties)
                if (type === "number") {
                    value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                } // Support: IE9-11+
                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                } // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    style[name] = value;
                }
            } else { // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                } // Otherwise just get the value from the style object
                return style[name];
            }
        },
        css: function css(elem, name, extra, styles) {
            var val, num, hooks, origName = jQuery.camelCase(name); // Make sure that we're working with the right name
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName); // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            } // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            } // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            } // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each(["height", "width"], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function get(elem, computed, extra) {
                if (computed) { // Certain elements can have dimension info if we invisibly show them
                    // but it must have a current display style that would benefit
                    return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },
            set: function set(elem, value, extra) {
                var matches, styles = extra && getStyles(elem),
                    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles); // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[name] = value;
                    value = jQuery.css(elem, name);
                }
                return setPositiveNumber(elem, value, subtract);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                marginLeft: 0
            }, function() {
                return elem.getBoundingClientRect().left;
            })) + "px";
        }
    }); // Support: Android 2.3
    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
        if (computed) {
            return swap(elem, {
                "display": "inline-block"
            }, curCSS, [elem, "marginRight"]);
        }
    }); // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function expand(value) {
                var i = 0,
                    expanded = {}, // Assumes a single number if not a string
                    parts = typeof value === "string" ? value.split(" ") : [value];
                for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    jQuery.fn.extend({
        css: function css(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {},
                    i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function show() {
            return showHide(this, true);
        },
        hide: function hide() {
            return showHide(this);
        },
        toggle: function toggle(state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }
            return this.each(function() {
                if (isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });

    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function init(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function cur() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function run(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function get(tween) {
                var result; // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                    return tween.elem[tween.prop];
                } // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function set(tween) { // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    }; // Support: IE9
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function set(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.easing = {
        linear: function linear(p) {
            return p;
        },
        swing: function swing(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init; // Back Compat <1.8 extension point
    jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/; // Animations created synchronously will run synchronously
    function createFxNow() {
        window.setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = jQuery.now();
    } // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which, i = 0,
            attrs = {
                height: type
            }; // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }

    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
            index = 0,
            length = collection.length;
        for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) { // We're done with this property
                return tween;
            }
        }
    }

    function defaultPrefilter(elem, props, opts) { /* jshint validthis: true */
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHidden(elem),
            dataShow = dataPriv.get(elem, "fxshow"); // Handle queue: false promises
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() { // Ensure the complete handler is called before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        } // Height/width overflow pass
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) { // Make sure that nothing sneaks out
            // Record all 3 overflow attributes because IE9-10 do not
            // change the overflow attribute when overflowX and
            // overflowY are set to the same value
            opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Set display property to inline-block for height/width
            // animations on inline elements that are having width/height animated
            display = jQuery.css(elem, "display"); // Test default display if display is currently "none"
            checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
            if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                style.display = "inline-block";
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        } // show/hide pass
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) { // If there is dataShow left over from a stopped hide or show
                    // and we are going to proceed with show, we should pretend to be hidden
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true;
                    } else {
                        continue;
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop); // Any non-fx value stops us from restoring the original display value
            } else {
                display = undefined;
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = dataPriv.access(elem, "fxshow", {});
            } // Store state if its toggle - enables .stop().toggle() to "reverse"
            if (toggle) {
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function() {
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                var prop;
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            } // If this is a noop like .hide().hide(), restore an overwritten display value
        } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
            style.display = display;
        }
    }

    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }

    function Animation(elem, properties, options) {
        var result, stopped, index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function() { // Don't match elem in the :animated selector
                delete tick.elem;
            }),
            tick = function tick() {
                if (stopped) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3
                    // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;
                for (; index < length; index++) {
                    animation.tweens[index].run(percent);
                }
                deferred.notifyWith(elem, [animation, percent, remaining]);
                if (percent < 1 && length) {
                    return remaining;
                } else {
                    deferred.resolveWith(elem, [animation]);
                    return false;
                }
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function createTween(prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween;
                },
                stop: function stop(gotoEnd) {
                    var index = 0, // If we are going to the end, we want to run all the tweens
                        // otherwise we skip this part
                        length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this;
                    }
                    stopped = true;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1);
                    } // Resolve when we played the last frame; otherwise, reject
                    if (gotoEnd) {
                        deferred.notifyWith(elem, [animation, 1, 0]);
                        deferred.resolveWith(elem, [animation, gotoEnd]);
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd]);
                    }
                    return this;
                }
            }),
            props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (jQuery.isFunction(result.stop)) {
                    jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
                }
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        })); // attach callbacks from options
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [function(prop, value) {
                var tween = this.createTween(prop, value);
                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                return tween;
            }]
        },
        tweener: function tweener(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = ["*"];
            } else {
                props = props.match(rnotwhite);
            }
            var prop, index = 0,
                length = props.length;
            for (; index < length; index++) {
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [defaultPrefilter],
        prefilter: function prefilter(callback, prepend) {
            if (prepend) {
                Animation.prefilters.unshift(callback);
            } else {
                Animation.prefilters.push(callback);
            }
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default; // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        } // Queueing
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function fadeTo(speed, to, easing, callback) { // Show any hidden elements after setting opacity to 0
            return this.filter(isHidden).css("opacity", 0).show() // Animate to the value specified
                .end().animate({
                    opacity: to
                }, speed, easing, callback);
        },
        animate: function animate(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop),
                optall = jQuery.speed(speed, easing, callback),
                doAnimation = function doAnimation() { // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately
                    if (empty || dataPriv.get(this, "finish")) {
                        anim.stop(true);
                    }
                };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function stop(type, clearQueue, gotoEnd) {
            var stopQueue = function stopQueue(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                } // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function finish(type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function() {
                var index, data = dataPriv.get(this),
                    queue = data[type + "queue"],
                    hooks = data[type + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0; // Enable finishing flag on private data
                data.finish = true; // Empty the queue first
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                } // Look for any active animations, and finish them
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                } // Look for any animations in the old queue and finish them
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                } // Turn off finishing flag
                delete data.finish;
            });
        }
    });
    jQuery.each(["toggle", "show", "hide"], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    }); // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0,
            timers = jQuery.timers;
        fxNow = jQuery.now();
        for (; i < timers.length; i++) {
            timer = timers[i]; // Checks the timer has not already been removed
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        if (timer()) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!timerId) {
            timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.stop = function() {
        window.clearInterval(timerId);
        timerId = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200, // Default speed
        _default: 400
    }; // Based off of the plugin by Clint Helfers, with permission.
    // http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function() {
                window.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"),
            select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox"; // Support: iOS<=5.1, Android<=4.2+
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== ""; // Support: IE<=11+
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected; // Support: Android<=2.3
        // Options inside disabled selects are incorrectly marked as disabled
        select.disabled = true;
        support.optDisabled = !opt.disabled; // Support: IE<=11+
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function attr(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function removeAttr(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function attr(elem, name, value) {
            var ret, hooks, nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            } // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value);
            } // All attributes are lowercase
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }
            ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function set(elem, value) {
                    if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },
        removeAttr: function removeAttr(elem, value) {
            var name, propName, i = 0,
                attrNames = value && value.match(rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i++]) {
                    propName = jQuery.propFix[name] || name; // Boolean attributes get special treatment (#10870)
                    if (jQuery.expr.match.bool.test(name)) { // Set corresponding property to false
                        elem[propName] = false;
                    }
                    elem.removeAttribute(name);
                }
            }
        }
    }); // Hooks for boolean attributes
    boolHook = {
        set: function set(elem, value, name) {
            if (value === false) { // Remove boolean attributes when set to false
                jQuery.removeAttr(elem, name);
            } else {
                elem.setAttribute(name, name);
            }
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle;
            if (!isXML) { // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[name];
                attrHandle[name] = ret;
                ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                attrHandle[name] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function prop(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function removeProp(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        prop: function prop(elem, name, value) {
            var ret, hooks, nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) { // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }
                return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function get(elem) { // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }); // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function get(elem) {
                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex;
                }
                return null;
            },
            set: function set(elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
            }
        };
    }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    var rclass = /[\t\r\n\f]/g;

    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    jQuery.fn.extend({
        addClass: function addClass(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)));
                });
            }
            if (typeof value === "string" && value) {
                classes = value.match(rnotwhite) || [];
                while (elem = this[i++]) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        } // Only assign if different to avoid unneeded rendering.
                        finalValue = jQuery.trim(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function removeClass(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, getClass(this)));
                });
            }
            if (!arguments.length) {
                return this.attr("class", "");
            }
            if (typeof value === "string" && value) {
                classes = value.match(rnotwhite) || [];
                while (elem = this[i++]) {
                    curValue = getClass(elem); // This expression is here for better compressibility (see addClass)
                    cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) { // Remove *all* instances
                            while (cur.indexOf(" " + clazz + " ") > -1) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        } // Only assign if different to avoid unneeded rendering.
                        finalValue = jQuery.trim(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue);
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function toggleClass(value, stateVal) {
            var type = typeof value === "undefined" ? "undefined" : _typeof(value);
            if (typeof stateVal === "boolean" && type === "string") {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                });
            }
            return this.each(function() {
                var className, i, self, classNames;
                if (type === "string") { // Toggle individual class names
                    i = 0;
                    self = jQuery(this);
                    classNames = value.match(rnotwhite) || [];
                    while (className = classNames[i++]) { // Check each className given, space separated list
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    } // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) { // Store className if set
                        dataPriv.set(this, "__className__", className);
                    } // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) {
                        this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                    }
                }
            });
        },
        hasClass: function hasClass(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
                if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
                    return true;
                }
            }
            return false;
        }
    });
    var rreturn = /\r/g,
        rspaces = /[\x20\t\r\n\f]+/g;
    jQuery.fn.extend({
        val: function val(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? // Handle most common string cases
                        ret.replace(rreturn, "") : // Handle cases where value is null/undef or number
                        ret == null ? "" : ret;
                }
                return;
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) {
                    return;
                }
                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                } // Treat null/undefined as ""; convert numbers to string
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function get(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : // Support: IE10-11+
                        // option.text throws exceptions (#14686, #14858)
                        // Strip and collapse whitespace
                        // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                        jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
                }
            },
            select: {
                get: function get(elem) {
                    var value, option, options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one" || index < 0,
                        values = one ? null : [],
                        max = one ? index + 1 : options.length,
                        i = index < 0 ? max : one ? index : 0; // Loop through all the selected options
                    for (; i < max; i++) {
                        option = options[i]; // IE8-9 doesn't update selected after form reset (#2551)
                        if ((option.selected || i === index) && ( // Don't return options that are disabled or in a disabled optgroup
                                support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) { // Get the specific value for the option
                            value = jQuery(option).val(); // We don't need an array for one selects
                            if (one) {
                                return value;
                            } // Multi-Selects return an array
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function set(elem, value) {
                    var optionSet, option, options = elem.options,
                        values = jQuery.makeArray(value),
                        i = options.length;
                    while (i--) {
                        option = options[i];
                        if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                            optionSet = true;
                        }
                    } // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        }
    }); // Radios and checkboxes getter/setter
    jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
            set: function set(elem, value) {
                if (jQuery.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    }); // Return jQuery for attributes-only inclusion
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    jQuery.extend(jQuery.event, {
        trigger: function trigger(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document],
                type = hasOwn.call(event, "type") ? event.type : event,
                namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document; // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            } // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }
            if (type.indexOf(".") > -1) { // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            } // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            } // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                } // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            } // Fire handlers on the event path
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler
                handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                } // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type; // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) { // Call a native DOM method on the target with the same name name as the event.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) { // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null;
                        } // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        elem[type]();
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            return event.result;
        }, // Piggyback on a donor event to simulate a different one
        simulate: function simulate(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true // Previously, `originalEvent: {}` was set here, so stopPropagation call
                    // would not be triggered on donor event, since in our own
                    // jQuery.event.stopPropagation function we had a check for existence of
                    // originalEvent.stopPropagation method, so, consequently it would be a noop.
                    //
                    // But now, this "simulate" function is used only for events
                    // for which stopPropagation() is noop, so there is no need for that anymore.
                    //
                    // For the 1.x branch though, guard for "click" and "submit"
                    // events is still used, but was moved to jQuery.event.stopPropagation function
                    // because `originalEvent` should point to the original event for the constancy
                    // with other events and for more focused logic
            });
            jQuery.event.trigger(e, null, elem);
            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    });
    jQuery.fn.extend({
        trigger: function trigger(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function triggerHandler(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) { // Handle event binding
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    jQuery.fn.extend({
        hover: function hover(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });
    support.focusin = "onfocusin" in window; // Support: Firefox
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome, Safari
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
    if (!support.focusin) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) { // Attach a single capturing handler on the document while someone wants focusin/focusout
            var handler = function handler(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };
            jQuery.event.special[fix] = {
                setup: function setup() {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access(doc, fix);
                    if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                    }
                    dataPriv.access(doc, fix, (attaches || 0) + 1);
                },
                teardown: function teardown() {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access(doc, fix) - 1;
                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        dataPriv.remove(doc, fix);
                    } else {
                        dataPriv.access(doc, fix, attaches);
                    }
                }
            };
        });
    }
    var location = window.location;
    var nonce = jQuery.now();
    var rquery = /\?/; // Support: Android 2.3
    // Workaround failure to string-cast null input
    jQuery.parseJSON = function(data) {
        return JSON.parse(data + "");
    }; // Cross-browser xml parsing
    jQuery.parseXML = function(data) {
        var xml;
        if (!data || typeof data !== "string") {
            return null;
        } // Support: IE9
        try {
            xml = new window.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
            xml = undefined;
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
        }
        return xml;
    };
    var rhash = /#.*$/,
        rts = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        /* Prefilters
         * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
         * 2) These are called:
         *    - BEFORE asking for a transport
         *    - AFTER param serialization (s.data is a string if s.processData is true)
         * 3) key is the dataType
         * 4) the catchall symbol "*" can be used
         * 5) execution will start with transport dataType and THEN continue down to "*" if needed
         */
        prefilters = {},
        /* Transports bindings
         * 1) key is the dataType
         * 2) the catchall symbol "*" can be used
         * 3) selection will start with transport dataType and THEN go to "*" if needed
         */
        transports = {}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
        originAnchor = document.createElement("a");
    originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) { // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(func)) { // For each dataType in the dataTypeExpression
                while (dataType = dataTypes[i++]) { // Prepend if requested
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    } // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {},
            seekingTransport = structure === transports;

        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    } // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
        return target;
    }
    /* Handles responses to an ajax request:
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */
    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents,
            dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        } // Check if we're dealing with a known content-type
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        } // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else { // Try convertible dataTypes
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            } // Or just use first one
            finalDataType = finalDataType || firstDataType;
        } // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
     * Also sets the responseXXX fields on the jqXHR instance
     */
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
            dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        current = dataTypes.shift(); // Convert to each sequential dataType
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            } // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) { // There's only work to do if current dataType is non-auto
                if (current === "*") {
                    current = prev; // Convert response if prev dataType is non-auto and differs from current
                } else if (prev !== "*" && prev !== current) { // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair
                    if (!conv) {
                        for (conv2 in converters) { // If conv2 outputs current
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) { // If prev can be converted to accepted input
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) { // Condense equivalence converters
                                    if (conv === true) {
                                        conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    } // Apply converter (if not an equivalence)
                    if (conv !== true) { // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({ // Counter for holding the number of active queries
        active: 0, // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            }, // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: { // Convert anything to text
                "* text": String, // Text to html (true = no transformation)
                "text html": true, // Evaluate text as a json expression
                "text json": jQuery.parseJSON, // Parse text as xml
                "text xml": jQuery.parseXML
            }, // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        }, // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function ajaxSetup(target, settings) {
            return settings ? // Building a settings object
                ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
                ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports), // Main method
        ajax: function ajax(url, options) { // If url is an object, simulate pre-1.5 signature
            if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
                options = url;
                url = undefined;
            } // Force options to be an object
            options = options || {};
            var transport, // URL without anti-cache param
                cacheURL, // Response headers
                responseHeadersString, responseHeaders, // timeout handle
                timeoutTimer, // Url cleanup var
                urlAnchor, // To know if global events are to be dispatched
                fireGlobals, // Loop variable
                i, // Create the final options object
                s = jQuery.ajaxSetup({}, options), // Callbacks context
                callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
                globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
                _statusCode = s.statusCode || {}, // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {}, // The jqXHR state
                state = 0, // Default abort message
                strAbort = "canceled", // Fake xhr
                jqXHR = {
                    readyState: 0, // Builds headers hashtable if needed
                    getResponseHeader: function getResponseHeader(key) {
                        var match;
                        if (state === 2) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while (match = rheaders.exec(responseHeadersString)) {
                                    responseHeaders[match[1].toLowerCase()] = match[2];
                                }
                            }
                            match = responseHeaders[key.toLowerCase()];
                        }
                        return match == null ? null : match;
                    }, // Raw string
                    getAllResponseHeaders: function getAllResponseHeaders() {
                        return state === 2 ? responseHeadersString : null;
                    }, // Caches the header
                    setRequestHeader: function setRequestHeader(name, value) {
                        var lname = name.toLowerCase();
                        if (!state) {
                            name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                            requestHeaders[name] = value;
                        }
                        return this;
                    }, // Overrides response content-type header
                    overrideMimeType: function overrideMimeType(type) {
                        if (!state) {
                            s.mimeType = type;
                        }
                        return this;
                    }, // Status-dependent callbacks
                    statusCode: function statusCode(map) {
                        var code;
                        if (map) {
                            if (state < 2) {
                                for (code in map) { // Lazy-add the new callback in a way that preserves old ones
                                    _statusCode[code] = [_statusCode[code], map[code]];
                                }
                            } else { // Execute the appropriate callbacks
                                jqXHR.always(map[jqXHR.status]);
                            }
                        }
                        return this;
                    }, // Cancel the request
                    abort: function abort(statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText);
                        }
                        done(0, finalText);
                        return this;
                    }
                }; // Attach deferreds
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail; // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a"); // Support: IE8-11+
                // IE throws exception if url is malformed, e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url; // Support: IE8-11+
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) { // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            } // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            } // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there
            if (state === 2) {
                return jqXHR;
            } // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = jQuery.event && s.global; // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            } // Uppercase the type
            s.type = s.type.toUpperCase(); // Determine if request has content
            s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            cacheURL = s.url; // More options handling for requests with no content
            if (!s.hasContent) { // If data is available, append data to url
                if (s.data) {
                    cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                } // Add anti-cache in url if needed
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ? // If there is already a '_' parameter, set its value
                        cacheURL.replace(rts, "$1_=" + nonce++) : // Otherwise add one to the end
                        cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                }
            } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            } // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            } // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            } // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) { // Abort if not done already and return
                return jqXHR.abort();
            } // Aborting is no longer a cancellation
            strAbort = "abort"; // Install callbacks on deferreds
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                jqXHR[i](s[i]);
            } // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1; // Send global event
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                } // If request was aborted inside ajaxSend, stop there
                if (state === 2) {
                    return jqXHR;
                } // Timeout
                if (s.async && s.timeout > 0) {
                    timeoutTimer = window.setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) { // Propagate exception as error if not done
                    if (state < 2) {
                        done(-1, e); // Simply rethrow otherwise
                    } else {
                        throw e;
                    }
                }
            } // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText; // Called once
                if (state === 2) {
                    return;
                } // State is "done" now
                state = 2; // Clear timeout if it exists
                if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer);
                } // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined; // Cache response headers
                responseHeadersString = headers || ""; // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304; // Get response data
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                } // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining
                if (isSuccess) { // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    } // if no content
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent"; // if not modified
                    } else if (status === 304) {
                        statusText = "notmodified"; // If we have data, let's convert it
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else { // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                } // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                } // Status-dependent callbacks
                jqXHR.statusCode(_statusCode);
                _statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
                } // Complete
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return jqXHR;
        },
        getJSON: function getJSON(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function getScript(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each(["get", "post"], function(i, method) {
        jQuery[method] = function(url, data, callback, type) { // Shift arguments if data argument was omitted
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            } // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url, // Make this explicit, since user can override this through ajaxSetup (#11264)
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        });
    };
    jQuery.fn.extend({
        wrapAll: function wrapAll(html) {
            var wrap;
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            if (this[0]) { // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstElementChild) {
                        elem = elem.firstElementChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function wrapInner(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                var self = jQuery(this),
                    contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        wrap: function wrap(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function unwrap() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    jQuery.expr.filters.hidden = function(elem) {
        return !jQuery.expr.filters.visible(elem);
    };
    jQuery.expr.filters.visible = function(elem) { // Support: Opera <= 12.12
        // Opera reports offsetWidths and offsetHeights less than zero on some elements
        // Use OR instead of AND as the element is not visible if either is true
        // See tickets #10406 and #13132
        return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
    };
    var r20 = /%20/g,
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) { // Serialize array item.
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) { // Treat each array item as a scalar.
                    add(prefix, v);
                } else { // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && jQuery.type(obj) === "object") { // Serialize object item.
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else { // Serialize scalar item.
            add(prefix, obj);
        }
    } // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function(a, traditional) {
        var prefix, s = [],
            add = function add(key, value) { // If value is a function, invoke it and return its value
                value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
            }; // Set traditional to true for jQuery <= 1.3.2 behavior.
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        } // If an array was passed in, assume that it is an array of form elements.
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) { // Serialize the form elements
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else { // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        } // Return the resulting serialization
        return s.join("&").replace(r20, "+");
    };
    jQuery.fn.extend({
        serialize: function serialize() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function serializeArray() {
            return this.map(function() { // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {}
    };
    var xhrSuccessStatus = { // File protocol always yields status code 0, assume 200
            0: 200, // Support: IE9
            // #1450: sometimes IE returns 1223 when it should be 204
            1223: 204
        },
        xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function send(headers, complete) {
                    var i, xhr = options.xhr();
                    xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i];
                        }
                    } // Override mime type if needed
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType);
                    } // X-Requested-With header
                    // For cross-domain requests, seeing as conditions for a preflight are
                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                    // (it can always be set on a per-request basis or even using ajaxSetup)
                    // For same-domain requests, won't change header if already provided.
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest";
                    } // Set headers
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i]);
                    } // Callback
                    _callback = function callback(type) {
                        return function() {
                            if (_callback) {
                                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                                if (type === "abort") {
                                    xhr.abort();
                                } else if (type === "error") { // Support: IE9
                                    // On a manual native abort, IE9 throws
                                    // errors on any property access that is not readyState
                                    if (typeof xhr.status !== "number") {
                                        complete(0, "error");
                                    } else {
                                        complete( // File: protocol always yields status 0; see #8605, #14207
                                            xhr.status, xhr.statusText);
                                    }
                                } else {
                                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE9 only
                                        // IE9 has no XHR2 but throws on binary (trac-11426)
                                        // For XHR2 non-text, let the caller handle it (gh-2498)
                                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                }
                            }
                        };
                    }; // Listen to events
                    xhr.onload = _callback();
                    errorCallback = xhr.onerror = _callback("error"); // Support: IE9
                    // Use onreadystatechange to replace onabort
                    // to handle uncaught aborts
                    if (xhr.onabort !== undefined) {
                        xhr.onabort = errorCallback;
                    } else {
                        xhr.onreadystatechange = function() { // Check readyState before timeout as it changes
                            if (xhr.readyState === 4) { // Allow onerror to be called first,
                                // but that will not handle a native abort
                                // Also, save errorCallback to a variable
                                // as xhr.onerror cannot be accessed
                                window.setTimeout(function() {
                                    if (_callback) {
                                        errorCallback();
                                    }
                                });
                            }
                        };
                    } // Create the abort callback
                    _callback = _callback("abort");
                    try { // Do send the request (this may raise an exception)
                        xhr.send(options.hasContent && options.data || null);
                    } catch (e) { // #14683: Only rethrow if this hasn't been notified as an error yet
                        if (_callback) {
                            throw e;
                        }
                    }
                },
                abort: function abort() {
                    if (_callback) {
                        _callback();
                    }
                }
            };
        }
    }); // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function textScript(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    }); // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
        }
    }); // Bind script tag hack transport
    jQuery.ajaxTransport("script", function(s) { // This transport only deals with cross domain requests
        if (s.crossDomain) {
            var script, _callback2;
            return {
                send: function send(_, complete) {
                    script = jQuery("<script>").prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", _callback2 = function callback(evt) {
                        script.remove();
                        _callback2 = null;
                        if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type);
                        }
                    }); // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                },
                abort: function abort() {
                    if (_callback2) {
                        _callback2();
                    }
                }
            };
        }
    });
    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function jsonpCallback() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            this[callback] = true;
            return callback;
        }
    }); // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") { // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            } // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            }; // Force json dataType
            s.dataTypes[0] = "json"; // Install callback
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments;
            }; // Clean-up function (fires after converters)
            jqXHR.always(function() { // If previous value didn't exist - remove it
                if (overwritten === undefined) {
                    jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
                } else {
                    window[callbackName] = overwritten;
                } // Save back as free
                if (s[callbackName]) { // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                } // Call if it was a function and we have a response
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            }); // Delegate to script
            return "script";
        }
    }); // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (!data || typeof data !== "string") {
            return null;
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        context = context || document;
        var parsed = rsingleTag.exec(data),
            scripts = !keepScripts && []; // Single tag
        if (parsed) {
            return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
            jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
    }; // Keep a copy of the old load method
    var _load = jQuery.fn.load;
    /**
     * Load a url into a page
     */
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }
        var selector, type, response, self = this,
            off = url.indexOf(" ");
        if (off > -1) {
            selector = jQuery.trim(url.slice(off));
            url = url.slice(0, off);
        } // If it's a function
        if (jQuery.isFunction(params)) { // We assume that it's the callback
            callback = params;
            params = undefined; // Otherwise, build a param string
        } else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
            type = "POST";
        } // If we have elements to modify, make the request
        if (self.length > 0) {
            jQuery.ajax({
                url: url, // If "type" variable is undefined, then "GET" method will be used.
                // Make value of this field explicit since
                // user can override it through ajaxSetup method
                type: type || "GET",
                dataType: "html",
                data: params
            }).done(function(responseText) { // Save response for use in complete callback
                response = arguments;
                self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
                    // Exclude scripts to avoid IE 'Permission Denied' errors
                    jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
                    responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
                // but they are ignored because response was set above.
                // If it fails, this function gets "jqXHR", "status", "error"
            }).always(callback && function(jqXHR, status) {
                self.each(function() {
                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                });
            });
        }
        return this;
    }; // Attach a bunch of functions for handling common AJAX events
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    /**
     * Gets a window from an element
     */
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }
    jQuery.offset = {
        setOffset: function setOffset(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
                curElem = jQuery(elem),
                props = {}; // Set position first, in-case top/left are set even on static elem
            if (position === "static") {
                elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) { // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({
        offset: function offset(options) {
            if (arguments.length) {
                return options === undefined ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }
            var docElem, win, elem = this[0],
                box = {
                    top: 0,
                    left: 0
                },
                doc = elem && elem.ownerDocument;
            if (!doc) {
                return;
            }
            docElem = doc.documentElement; // Make sure it's not a disconnected DOM node
            if (!jQuery.contains(docElem, elem)) {
                return box;
            }
            box = elem.getBoundingClientRect();
            win = getWindow(doc);
            return {
                top: box.top + win.pageYOffset - docElem.clientTop,
                left: box.left + win.pageXOffset - docElem.clientLeft
            };
        },
        position: function position() {
            if (!this[0]) {
                return;
            }
            var offsetParent, offset, elem = this[0],
                parentOffset = {
                    top: 0,
                    left: 0
                }; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
            // because it is its only offset parent
            if (jQuery.css(elem, "position") === "fixed") { // Assume getBoundingClientRect is there when computed position is fixed
                offset = elem.getBoundingClientRect();
            } else { // Get *real* offsetParent
                offsetParent = this.offsetParent(); // Get correct offsets
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset();
                } // Add offsetParent borders
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            } // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        }, // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function offsetParent() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || documentElement;
            });
        }
    }); // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? win[prop] : elem[method];
                }
                if (win) {
                    win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length);
        };
    }); // Support: Safari<7-8+, Chrome<37-44+
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each(["top", "left"], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) { // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) { // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                        // isn't a whole lot we can do. See pull request at this URL for discussion:
                        // https://github.com/jquery/jquery/pull/764
                        return elem.document.documentElement["client" + name];
                    } // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                        jQuery.css(elem, type, extra) : // Set width or height on the element
                        jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    jQuery.fn.extend({
        bind: function bind(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function unbind(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function delegate(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function undelegate(selector, types, fn) { // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        size: function size() {
            return this.length;
        }
    });
    jQuery.fn.andSelf = jQuery.fn.addBack; // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return jQuery;
        });
    }
    var // Map over jQuery in case of overwrite
        _jQuery = window.jQuery, // Map over the $ in case of overwrite
        _$ = window.$;
    jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }
        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }
        return jQuery;
    }; // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
});
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }
    return s;
})({
    1: [function(require, module, exports) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        function EventEmitter() {
            this._events = this._events || {};
            this._maxListeners = this._maxListeners || undefined;
        }
        module.exports = EventEmitter;

        // Backwards-compat with node 0.10.x
        EventEmitter.EventEmitter = EventEmitter;

        EventEmitter.prototype._events = undefined;
        EventEmitter.prototype._maxListeners = undefined;

        // By default EventEmitters will print a warning if more than 10 listeners are
        // added to it. This is a useful default which helps finding memory leaks.
        EventEmitter.defaultMaxListeners = 10;

        // Obviously not all Emitters should be limited to 10. This function allows
        // that to be increased. Set to zero for unlimited.
        EventEmitter.prototype.setMaxListeners = function(n) {
            if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
            this._maxListeners = n;
            return this;
        };

        EventEmitter.prototype.emit = function(type) {
            var er, handler, len, args, i, listeners;

            if (!this._events) this._events = {};

            // If there is no 'error' event listener then throw.
            if (type === 'error') {
                if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
                    er = arguments[1];
                    if (er instanceof Error) {
                        throw er; // Unhandled 'error' event
                    }
                    throw TypeError('Uncaught, unspecified "error" event.');
                }
            }

            handler = this._events[type];

            if (isUndefined(handler)) return false;

            if (isFunction(handler)) {
                switch (arguments.length) {
                    // fast cases
                    case 1:
                        handler.call(this);
                        break;
                    case 2:
                        handler.call(this, arguments[1]);
                        break;
                    case 3:
                        handler.call(this, arguments[1], arguments[2]);
                        break;
                        // slower
                    default:
                        args = Array.prototype.slice.call(arguments, 1);
                        handler.apply(this, args);
                }
            } else if (isObject(handler)) {
                args = Array.prototype.slice.call(arguments, 1);
                listeners = handler.slice();
                len = listeners.length;
                for (i = 0; i < len; i++) {
                    listeners[i].apply(this, args);
                }
            }

            return true;
        };

        EventEmitter.prototype.addListener = function(type, listener) {
            var m;

            if (!isFunction(listener)) throw TypeError('listener must be a function');

            if (!this._events) this._events = {};

            // To avoid recursion in the case that type === "newListener"! Before
            // adding it to the listeners, first emit "newListener".
            if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

            if (!this._events[type])
            // Optimize the case of one listener. Don't need the extra array object.
                this._events[type] = listener;
            else if (isObject(this._events[type]))
            // If we've already got an array, just append.
                this._events[type].push(listener);
            else
            // Adding the second element, need to change to array.
                this._events[type] = [this._events[type], listener];

            // Check for listener leak
            if (isObject(this._events[type]) && !this._events[type].warned) {
                if (!isUndefined(this._maxListeners)) {
                    m = this._maxListeners;
                } else {
                    m = EventEmitter.defaultMaxListeners;
                }

                if (m && m > 0 && this._events[type].length > m) {
                    this._events[type].warned = true;
                    console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
                    if (typeof console.trace === 'function') {
                        // not supported in IE 10
                        console.trace();
                    }
                }
            }

            return this;
        };

        EventEmitter.prototype.on = EventEmitter.prototype.addListener;

        EventEmitter.prototype.once = function(type, listener) {
            if (!isFunction(listener)) throw TypeError('listener must be a function');

            var fired = false;

            function g() {
                this.removeListener(type, g);

                if (!fired) {
                    fired = true;
                    listener.apply(this, arguments);
                }
            }

            g.listener = listener;
            this.on(type, g);

            return this;
        };

        // emits a 'removeListener' event iff the listener was removed
        EventEmitter.prototype.removeListener = function(type, listener) {
            var list, position, length, i;

            if (!isFunction(listener)) throw TypeError('listener must be a function');

            if (!this._events || !this._events[type]) return this;

            list = this._events[type];
            length = list.length;
            position = -1;

            if (list === listener || isFunction(list.listener) && list.listener === listener) {
                delete this._events[type];
                if (this._events.removeListener) this.emit('removeListener', type, listener);
            } else if (isObject(list)) {
                for (i = length; i-- > 0;) {
                    if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                        position = i;
                        break;
                    }
                }

                if (position < 0) return this;

                if (list.length === 1) {
                    list.length = 0;
                    delete this._events[type];
                } else {
                    list.splice(position, 1);
                }

                if (this._events.removeListener) this.emit('removeListener', type, listener);
            }

            return this;
        };

        EventEmitter.prototype.removeAllListeners = function(type) {
            var key, listeners;

            if (!this._events) return this;

            // not listening for removeListener, no need to emit
            if (!this._events.removeListener) {
                if (arguments.length === 0) this._events = {};
                else if (this._events[type]) delete this._events[type];
                return this;
            }

            // emit removeListener for all listeners on all events
            if (arguments.length === 0) {
                for (key in this._events) {
                    if (key === 'removeListener') continue;
                    this.removeAllListeners(key);
                }
                this.removeAllListeners('removeListener');
                this._events = {};
                return this;
            }

            listeners = this._events[type];

            if (isFunction(listeners)) {
                this.removeListener(type, listeners);
            } else if (listeners) {
                // LIFO order
                while (listeners.length) {
                    this.removeListener(type, listeners[listeners.length - 1]);
                }
            }
            delete this._events[type];

            return this;
        };

        EventEmitter.prototype.listeners = function(type) {
            var ret;
            if (!this._events || !this._events[type]) ret = [];
            else if (isFunction(this._events[type])) ret = [this._events[type]];
            else ret = this._events[type].slice();
            return ret;
        };

        EventEmitter.prototype.listenerCount = function(type) {
            if (this._events) {
                var evlistener = this._events[type];

                if (isFunction(evlistener)) return 1;
                else if (evlistener) return evlistener.length;
            }
            return 0;
        };

        EventEmitter.listenerCount = function(emitter, type) {
            return emitter.listenerCount(type);
        };

        function isFunction(arg) {
            return typeof arg === 'function';
        }

        function isNumber(arg) {
            return typeof arg === 'number';
        }

        function isObject(arg) {
            return (typeof arg === "undefined" ? "undefined" : _typeof2(arg)) === 'object' && arg !== null;
        }

        function isUndefined(arg) {
            return arg === void 0;
        }
    }, {}],
    2: [function(require, module, exports) {
        if (typeof Object.create === 'function') {
            // implementation from standard node.js 'util' module
            module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;
                ctor.prototype = Object.create(superCtor.prototype, {
                    constructor: {
                        value: ctor,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
            };
        } else {
            // old school shim for old browsers
            module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;
                var TempCtor = function TempCtor() {};
                TempCtor.prototype = superCtor.prototype;
                ctor.prototype = new TempCtor();
                ctor.prototype.constructor = ctor;
            };
        }
    }, {}],
    3: [function(require, module, exports) {
        'use strict';

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function(obj) {
            return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
        };

        function _interopDefault(ex) {
            return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
        }

        var inherits = _interopDefault(require('inherits'));
        var EventEmitter = _interopDefault(require('events'));

        function clone(obj) {
            if (obj === undefined || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
                throw new Error('The "obj" parameter is required and must be an object.');
            }

            var copy = {},
                prop = void 0;

            for (prop in obj) {
                if (obj[prop] !== undefined) {
                    copy[prop] = obj[prop];
                }
            }

            return copy;
        }

        function isPlainObject(obj) {
            // Not plain objects:
            // - null
            // - undefined
            if (obj == null) {
                return false;
            }
            // - Any object or value whose internal [[Class]] property is not "[object Object]"
            // - DOM nodes
            // - window
            if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj.nodeType || obj === obj.window) {
                return false;
            }

            if (obj.constructor && !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
                return false;
            }

            // If the function hasn't returned already, we're confident that
            // |obj| is a plain object, created by {} or constructed with new Object
            return true;
        }

        function extend() {
            var options = void 0,
                name = void 0,
                src = void 0,
                copy = void 0,
                copyIsArray = void 0,
                clone = void 0,
                target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = false;

            // Handle a deep copy situation
            if (typeof target === 'boolean') {
                deep = target;

                // Skip the boolean and the target
                target = arguments[i] || {};
                i++;
            }

            // Handle case when target is a string or something (possible in deep copy)
            if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && !(typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'function') {
                target = {};
            }

            // Nothing to extend, return original object
            if (length <= i) {
                return target;
            }

            for (; i < length; i++) {
                // Only deal with non-null/undefined values
                if ((options = arguments[i]) != null) {
                    // Extend the base object
                    for (name in options) {
                        src = target[name];
                        copy = options[name];

                        // Prevent never-ending loop
                        if (target === copy) {
                            continue;
                        }

                        // Recurse if we're merging plain objects or arrays
                        if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && Array.isArray(src) ? src : [];
                            } else {
                                clone = src && isPlainObject(src) ? src : {};
                            }

                            // Never move original objects, clone them
                            target[name] = extend(deep, clone, copy);

                            // Don't bring in undefined values
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }

            // Return the modified object
            return target;
        }

        function ajax(url, settings) {
            var args = arguments;
            var opts = void 0;

            settings = args.length === 1 ? args[0] : args[1];

            var noop = function noop() {};

            var defaults = {
                url: args.length === 2 && typeof url === 'string' ? url : '.',
                cache: true,
                data: {},
                headers: {},
                context: null,
                dataType: 'text',
                method: 'GET',
                credentials: 'omit',
                success: noop,
                error: noop,
                complete: noop
            };

            opts = extend(defaults, settings || {});

            var mimeTypes = {
                'application/json': 'json',
                'text/html': 'html',
                'text/plain': 'text'
            };

            var dataTypes = {};
            for (var type in mimeTypes) {
                if (mimeTypes.hasOwnProperty(type)) {
                    dataTypes[mimeTypes[type]] = type;
                }
            }

            if (!opts.cache) {
                opts.url = opts.url + (~opts.url.indexOf('?') ? '&' : '?') + 'nc=' + Math.floor(Math.random() * 9e9);
            }

            var complete = function complete(status, xhr) {
                opts.complete.call(opts.context, xhr, status);
            };

            var success = function success(data, xhr) {
                var status = 'success';
                opts.success.call(opts.context, data, status, xhr);
                complete(status, xhr);
            };

            var error = function error(_error, status, xhr) {
                opts.error.call(opts.context, xhr, status, _error);
                complete(status, xhr);
            };

            var xhr = new XMLHttpRequest();

            var useXDR = opts.credentials === 'include' && !('withCredentials' in xhr) && 'XDomainRequest' in window;

            if (useXDR) {
                // Use XDomainRequest instead of XMLHttpRequest for IE<=9 and when CORS is requested
                xhr = new XDomainRequest();
                xhr.onload = function() {
                    var mime = xhr.contentType;
                    var dataType = mime && mimeTypes[mime[1]] ? mimeTypes[mime[1]].toLowerCase() : 'json';
                    var result = void 0;

                    if (dataType === 'json') {
                        try {
                            result = JSON.parse(xhr.responseText);
                        } catch (e) {
                            result = xhr.responseText;
                        }
                    } else {
                        result = xhr.responseText;
                    }
                    success(result, xhr);
                };
            } else {
                // Still cannot use xhr.onload for normal xhr due to required support of IE8 which
                // has no `onload` event https://msdn.microsoft.com/en-us/library/ms535874(v=vs.85).aspx#events
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        var result = void 0;
                        var status = xhr.status === 1223 ? 204 : xhr.status;

                        if (status >= 200 && status < 300 || status === 304) {
                            var mime = /([\/a-z]+)(;|\s|$)/.exec(xhr.getResponseHeader('content-type'));
                            var dataType = mime && mimeTypes[mime[1]] ? mimeTypes[mime[1]].toLowerCase() : 'text';
                            result = xhr.responseText;

                            if (dataType === 'json') {
                                try {
                                    result = JSON.parse(result);
                                } catch (e) {
                                    result = xhr.responseText;
                                }
                            }

                            success(result, xhr);
                        } else {
                            error(new Error(xhr.statusText), 'error', xhr, opts);
                        }

                        return;
                    }
                };
            }

            xhr.onerror = function() {
                error(new Error(xhr.statusText || 'Network request failed'), 'error', xhr, opts);
            };

            xhr.open(opts.method, opts.url);

            if (opts.dataType && dataTypes[opts.dataType.toLowerCase()]) {
                opts.headers.Accept = dataTypes[opts.dataType.toLowerCase()] + ', */*; q=0.01';
            }

            if (opts.method === 'POST') {
                opts.headers = extend(opts.headers, {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-type': 'application/x-www-form-urlencoded'
                });
            }

            if (opts.credentials === 'include') {
                xhr.withCredentials = true;
            }

            if (!useXDR) {
                for (var key in opts.headers) {
                    xhr.setRequestHeader(key, opts.headers[key]);
                }
            }

            xhr.send(opts.data);

            return this;
        }

        var noop = function noop() {};

        // document.head is not available in IE<9
        var head = document.getElementsByTagName('head')[0];

        var jsonpCount = 0;

        /**
         * JSONP handler
         *
         * @memberof tiny
         * @method
         * @param {String} url
         * @param {Object} [opts] Optional opts.
         * @param {String} [opts.prefix] Callback prefix. Default: `__jsonp`
         * @param {String} [opts.param] QS parameter. Default: `callback`
         * @param {String|Function} [opts.name] The name of the callback function that
         *   receives the result. Default: `opts.prefix${increment}`
         * @param {Number} [opts.timeout] How long after the request until a timeout
         *   error will occur. Default: 15000
         *
         * @returns {Function} Returns a cancel function
         *
         * @example
         * var cancel = tiny.jsonp('http://suggestgz.mlapps.com/sites/MLA/autosuggest?q=smartphone&v=1', {timeout: 5000});
         * if (something) {
         *   cancel();
         * }
         */
        function jsonp(url, settings) {
            var id = void 0,
                script = void 0,
                timer = void 0,
                cleanup = void 0,
                cancel = void 0;

            var opts = extend({
                prefix: '__jsonp',
                param: 'callback',
                timeout: 15000,
                success: noop,
                error: noop
            }, settings);

            // Generate an unique id for the request.
            jsonpCount++;
            id = opts.name ? typeof opts.name === 'function' ? opts.name(opts.prefix, jsonpCount) : opts.name : opts.prefix + jsonpCount++;

            cleanup = function cleanup() {
                // Remove the script tag.
                if (script && script.parentNode) {
                    script.parentNode.removeChild(script);
                }

                // Don't delete the jsonp handler from window to not generate an error
                // when script will be loaded after cleaning
                window[id] = noop;

                if (timer) {
                    clearTimeout(timer);
                }
            };

            if (opts.timeout) {
                timer = setTimeout(function() {
                    cleanup();
                    opts.error(new Error('Script loading timeout'));
                }, opts.timeout);
            }

            window[id] = function(data) {
                cleanup();
                opts.success(data);
            };

            // Add querystring component
            url += (~url.indexOf('?') ? '&' : '?') + opts.param + '=' + encodeURIComponent(id);
            url = url.replace('?&', '?');

            // Create script element
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.onerror = function(e) {
                cleanup();
                opts.error(new Error(e.message || 'Script Error'));
            };
            head.appendChild(script);

            cancel = function cancel() {
                if (window[id]) {
                    cleanup();
                }
            };

            return cancel;
        }

        // Based on the https://github.com/pablomoretti/jcors-loader written by Pablo Moretti

        /* private */

        var document$1 = window.document;
        var node_createElementScript = document$1.createElement('script');
        var node_elementScript = document$1.getElementsByTagName('script')[0];
        var buffer = [];
        var lastBufferIndex = 0;
        var createCORSRequest = function() {
            var xhr = void 0,
                CORSRequest = void 0;
            if (window.XMLHttpRequest) {
                xhr = new window.XMLHttpRequest();
                if ('withCredentials' in xhr) {
                    CORSRequest = function CORSRequest(url) {
                        xhr = new window.XMLHttpRequest();
                        xhr.open('get', url, true);
                        return xhr;
                    };
                } else if (window.XDomainRequest) {
                    CORSRequest = function CORSRequest(url) {
                        xhr = new window.XDomainRequest();
                        xhr.open('get', url);
                        return xhr;
                    };
                }
            }

            return CORSRequest;
        }();

        function execute(script) {
            if (typeof script === 'string') {
                var g = node_createElementScript.cloneNode(false);
                g.text = script;
                node_elementScript.parentNode.insertBefore(g, node_elementScript);
            } else {
                script.apply(window);
            }
        }

        function saveInBuffer(index, script) {
            buffer[index] = script;
        }

        function finishedTask(index) {
            saveInBuffer(index, null);
            lastBufferIndex = index + 1;
        }

        function executeBuffer() {
            var dep = true,
                script = void 0,
                index = lastBufferIndex,
                len = buffer.length;

            while (index < len && dep) {
                script = buffer[index];
                if (script !== undefined && script !== null) {
                    execute(script);
                    finishedTask(index);
                    index += 1;
                } else {
                    dep = false;
                }
            }
        }

        function loadsAndExecuteScriptsOnChain() {
            if (buffer.length) {
                (function() {
                    var scr = buffer.pop(),
                        script = void 0;
                    if (typeof scr === 'string') {
                        script = node_createElementScript.cloneNode(true);
                        script.type = 'text/javascript';
                        script.async = true;
                        script.src = scr;
                        script.onload = script.onreadystatechange = function() {
                            if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                                // Handle memory leak in IE
                                script.onload = script.onreadystatechange = null;
                                // Dereference the script
                                script = undefined;
                                // Load
                                loadsAndExecuteScriptsOnChain();
                            }
                        };
                        node_elementScript.parentNode.insertBefore(script, node_elementScript);
                    } else {
                        scr.apply(window);
                        loadsAndExecuteScriptsOnChain();
                    }
                })();
            }
        }

        function onloadCORSHandler(request, index) {
            return function() {
                saveInBuffer(index, request.responseText);
                executeBuffer();
                // Dereference the script
                request = undefined;
            };
        }

        function loadWithCORS() {
            var len = arguments.length,
                index,
                request;
            for (index = 0; index < len; index += 1) {
                if (typeof arguments[index] === 'string') {
                    request = createCORSRequest(arguments[index]);
                    request.onload = onloadCORSHandler(request, buffer.length);
                    saveInBuffer(buffer.length, null);
                    request.send();
                } else {
                    saveInBuffer(buffer.length, arguments[index]);
                    executeBuffer();
                }
            }
        }

        function loadWithoutCORS() {
            buffer.push(Array.prototype.slice.call(arguments, 0).reverse());
            loadsAndExecuteScriptsOnChain();
        }

        var jcors = createCORSRequest ? loadWithCORS : loadWithoutCORS;

        var support = {
            /**
             * Verify that CSS Transitions are supported (or any of its browser-specific implementations).
             *
             * @static
             * @type {Boolean|Object}
             * @example
             * if (tiny.support.transition) {
             *     // Some code here!
             * }
             */
            transition: transitionEnd(),

            /**
             * Verify that CSS Animations are supported (or any of its browser-specific implementations).
             *
             * @static
             * @type {Boolean|Object}
             * @example
             * if (tiny.support.animation) {
             *     // Some code here!
             * }
             */
            animation: animationEnd(),

            /**
             * Checks is the User Agent supports touch events.
             * @type {Boolean}
             * @example
             * if (tiny.support.touch) {
             *     // Some code here!
             * }
             */
            touch: 'ontouchend' in document,

            /**
             * Checks is the User Agent supports custom events.
             * @type {Boolean}
             * @example
             * if (tiny.support.customEvent) {
             *     // Some code here!
             * }
             */
            customEvent: function() {
                // TODO: find better solution for CustomEvent check
                try {
                    // IE8 has no support for CustomEvent, in IE gte 9 it cannot be
                    // instantiated but exist
                    new CustomEvent(name, {
                        detail: {}
                    });
                    return true;
                } catch (e) {
                    return false;
                }
            }()
        };

        /**
         * Checks for the CSS Transitions support (http://www.modernizr.com/)
         *
         * @function
         * @private
         */
        function transitionEnd() {
            var el = document.createElement('tiny');

            var transEndEventNames = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend'
            };

            for (var _name in transEndEventNames) {
                if (transEndEventNames.hasOwnProperty(_name) && el.style[_name] !== undefined) {
                    return {
                        end: transEndEventNames[_name]
                    };
                }
            }

            return false;
        }

        /**
         * Checks for the CSS Animations support
         *
         * @function
         * @private
         */
        function animationEnd() {
            var el = document.createElement('tiny');

            var animEndEventNames = {
                WebkitAnimation: 'webkitAnimationEnd',
                MozAnimation: 'animationend',
                OAnimation: 'oAnimationEnd oanimationend',
                animation: 'animationend'
            };

            for (var _name2 in animEndEventNames) {
                if (animEndEventNames.hasOwnProperty(_name2) && el.style[_name2] !== undefined) {
                    return {
                        end: animEndEventNames[_name2]
                    };
                }
            }

            return false;
        }

        var isClassList = !!document.body.classList;

        /**
         * Adds the specified class to an element
         *
         * @param el {HTMLElement}
         * @param className {String}
         *
         * @example
         * tiny.addClass(document.body, 'tiny-example');
         */
        function addClass(el, className) {
            if (isClassList) {
                el.classList.add(className);
            } else {
                el.setAttribute('class', el.getAttribute('class') + ' ' + className);
            }
        }

        /**
         * Remove a single class from an element
         *
         * @param el {HTMLElement}
         * @param className {String}
         *
         * @example
         * tiny.removeClass(document.body, 'tiny-example');
         */
        function removeClass(el, className) {
            if (isClassList) {
                el.classList.remove(className);
            } else {
                el.setAttribute('class', el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' '));
            }
        }

        /**
         * Determine whether is the given class is assigned to an element
         * @param el {HTMLElement}
         * @param className {String}
         * @returns {Boolean}
         *
         * @example
         * tiny.hasClass(document.body, 'tiny-example');
         */
        function hasClass(el, className) {
            var exist;
            if (isClassList) {
                exist = el.classList.contains(className);
            } else {
                exist = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
            }
            return exist;
        }

        var classList = {
            addClass: addClass,
            removeClass: removeClass,
            hasClass: hasClass
        };

        /**
         * Get the parent of an element, optionally filtered by a tag
         *
         * @param {HTMLElement} el
         * @param {String} tagname
         * @returns {HTMLElement}
         *
         * @example
         * tiny.parent(el, 'div');
         */
        function parent(el, tagname) {
            var parentNode = el.parentNode;
            var tag = tagname ? tagname.toUpperCase() : tagname;

            if (parentNode === null) {
                return parentNode;
            }

            if (parentNode.nodeType !== 1) {
                return parent(parentNode, tag);
            }

            if (tagname !== undefined && parentNode.tagName === tag) {
                return parentNode;
            } else if (tagname !== undefined && parentNode.tagName !== tag) {
                return parent(parentNode, tag);
            } else if (tagname === undefined) {
                return parentNode;
            }
        }

        /**
         * IE8 safe method to get the next element sibling
         *
         * @memberof tiny
         * @param {HTMLElement} el A given HTMLElement.
         * @returns {HTMLElement}
         *
         * @example
         * tiny.next(el);
         */
        function next(element) {
            function next(el) {
                do {
                    el = el.nextSibling;
                } while (el && el.nodeType !== 1);

                return el;
            }

            return element.nextElementSibling || next(element);
        }

        /**
         * Get the value of a computed style for the first element in set of
         * matched elements or set one or more CSS properties for every matched element.
         *
         * @memberof tiny
         * @param {String|HTMLElement} elem CSS selector or an HTML Element
         * @param {String|Object} key A CSS property or a map of <property, value> when used as setter.
         * @param {Sreing} value A value to set for the property
         *
         * @returns {String|Void}
         */
        function css(elem, key, value) {
            var args = arguments,
                elements = getElements(elem),
                length = elements.length,
                setter;

            // Get attribute
            if (typeof key === 'string' && args.length === 2) {
                return length === 0 ? '' : getElStyle(elements[0], key);
            }

            // Set attributes
            if (args.length === 3) {
                setter = function setter(el) {
                    el.style[key] = value;
                };
            } else if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                setter = function setter(el) {
                    Object.keys(key).forEach(function(name) {
                        el.style[name] = key[name];
                    });
                };
            }

            for (var i = 0; i < length; i++) {
                setter(elements[i]);
            }
        }

        function getElStyle(el, prop) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(el, null).getPropertyValue(prop);
                // IE
            } else {
                // Turn style name into camel notation
                prop = prop.replace(/\-(\w)/g, function(str, $1) {
                    return $1.toUpperCase();
                });
                return el.currentStyle[prop];
            }
        }

        function getElements(el) {
            if (!el) {
                return [];
            }

            if (typeof el === 'string') {
                return nodeListToArray(document.querySelectorAll(el));
            } else if (/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(el)) && (typeof el.length === 'number' || Object.prototype.hasOwnProperty.call(el, 'length')) && el.length > 0 && el[0].nodeType > 0) {

                return nodeListToArray(el);
            } else {
                return [el];
            }
        }

        function nodeListToArray(elements) {
            var i = 0,
                length = elements.length,
                arr = [];

            for (; i < length; i++) {
                arr.push(elements[i]);
            }

            return arr;
        }

        /**
         * Get the current vertical and horizontal positions of the scroll bars.
         *
         * @memberof tiny
         * @returns {{left: (Number), top: (Number)}}
         *
         * @example
         * tiny.scroll().top;
         */
        function scroll() {
            return {
                'left': window.pageXOffset || document.documentElement.scrollLeft || 0,
                'top': window.pageYOffset || document.documentElement.scrollTop || 0
            };
        }

        /**
         * Get the current offset of an element.
         *
         * @param {HTMLElement} el A given HTMLElement.
         * @returns {{left: Number, top: Number}}
         *
         * @example
         * tiny.offset(el);
         */
        function offset(el) {
            var rect = el.getBoundingClientRect(),
                fixedParent = getFixedParent(el),
                currentScroll = scroll(),
                offset = {
                    'left': rect.left,
                    'top': rect.top
                };

            if (css(el, 'position') !== 'fixed' && fixedParent === null) {
                offset.left += currentScroll.left;
                offset.top += currentScroll.top;
            }

            return offset;
        }

        /**
         * Get the current parentNode with the 'fixed' position.
         *
         * @private
         * @param {HTMLElement} el A given HTMLElement.
         *
         * @returns {HTMLElement}
         */
        function getFixedParent(el) {
            var currentParent = el.offsetParent,
                parent = void 0;

            while (parent === undefined) {

                if (currentParent === null) {
                    parent = null;
                    break;
                }

                if (css(currentParent, 'position') !== 'fixed') {
                    currentParent = currentParent.offsetParent;
                } else {
                    parent = currentParent;
                }
            }

            return parent;
        }

        var defaults = {
            expires: '', // Empty string for session cookies
            path: '/',
            secure: false,
            domain: ''
        };

        var day = 60 * 60 * 24;

        function get(key) {
            var collection = document.cookie.split('; '),
                value = null,
                l = collection.length;

            if (!l) {
                return value;
            }

            for (var i = 0; i < l; i++) {
                var parts = collection[i].split('='),
                    _name3 = decodeURIComponent(parts.shift());

                if (key === _name3) {
                    value = decodeURIComponent(parts.join('='));
                    break;
                }
            }

            return value;
        }

        // Then `key` contains an object with keys and values for cookies, `value` contains the options object.
        function set(key, value, options) {
            options = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' ? options : {
                expires: options
            };

            var expires = options.expires != null ? options.expires : defaults.expires;

            if (typeof expires === 'string' && expires !== '') {
                expires = new Date(expires);
            } else if (typeof expires === 'number') {
                expires = new Date(+new Date() + 1000 * day * expires);
            }

            if (expires && 'toGMTString' in expires) {
                expires = ';expires=' + expires.toGMTString();
            }

            var path = ';path=' + (options.path || defaults.path);

            var domain = options.domain || defaults.domain;
            domain = domain ? ';domain=' + domain : '';

            var secure = options.secure || defaults.secure ? ';secure' : '';

            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                if (Array.isArray(value) || isPlainObject(value)) {
                    value = JSON.stringify(value);
                } else {
                    value = '';
                }
            }

            document.cookie = encodeCookie(key) + '=' + encodeCookie(value) + expires + path + domain + secure;
        }

        function remove(key) {
            set(key, '', -1);
        }

        function isEnabled() {
            if (navigator.cookieEnabled) {
                return true;
            }

            set('__', '_');
            var exist = get('__') === '_';
            remove('__');

            return exist;
        }

        var cookies = {
            get: get,
            set: set,
            remove: remove,
            isEnabled: isEnabled
        };

        /*
         * Escapes only characters that are not allowed in cookies
         */
        function encodeCookie(value) {
            return String(value).replace(/[,;"\\=\s%]/g, function(character) {
                return encodeURIComponent(character);
            });
        }

        var DOM_EVENTS = function() {
            var events = [];
            for (var attr in document) {
                if (attr.substring(0, 2) === 'on') {
                    var evt = attr.replace('on', '');
                    events.push(evt);
                }
            }
            return events;
        }();

        var MOUSE_EVENTS = DOM_EVENTS.filter(function(name) {
            return (/^(?:click|dblclick|mouse(?:down|up|over|move|out))$/.test(name));
        });

        var isStandard = document.addEventListener ? true : false;

        var addHandler = isStandard ? 'addEventListener' : 'attachEvent';

        var removeHandler = isStandard ? 'removeEventListener' : 'detachEvent';

        var dispatch = isStandard ? 'dispatchEvent' : 'fireEvent';

        if (!Event.prototype.preventDefault && Object.defineProperties) {
            Object.defineProperties(window.Event.prototype, {
                bubbles: {
                    value: true,
                    writable: true
                },
                cancelable: {
                    value: true,
                    writable: true
                },
                preventDefault: {
                    value: function value() {
                        if (this.cancelable) {
                            this.defaultPrevented = true;
                            this.returnValue = false;
                        }
                    }
                },
                stopPropagation: {
                    value: function value() {
                        this.stoppedPropagation = true;
                        this.cancelBubble = true;
                    }
                },
                stopImmediatePropagation: {
                    value: function value() {
                        this.stoppedImmediatePropagation = true;
                        this.stopPropagation();
                    }
                }
            });
        }

        function getElements$1(el) {
            if (!el) {
                return [];
            }

            if (typeof el === 'string') {
                return nodeListToArray$1(document.querySelectorAll(el));
            } else if (/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(el)) && (typeof el.length === 'number' || Object.prototype.hasOwnProperty.call(el, 'length'))) {
                if (el.length === 0 || el[0].nodeType < 1) {
                    return [];
                }

                return nodeListToArray$1(el);
            } else if (Array.isArray(el)) {
                return [].concat(el);
            } else {
                return [el];
            }
        }

        function nodeListToArray$1(elements) {
            var i = 0,
                length = elements.length,
                arr = [];

            for (; i < length; i++) {
                arr.push(elements[i]);
            }

            return arr;
        }

        function initEvent(name, props) {
            if (typeof name !== 'string') {
                props = name;
                name = props.type;
            }
            var event = void 0,
                isDomEvent = DOM_EVENTS.indexOf(name) !== -1,
                isMouseEvent = isDomEvent && MOUSE_EVENTS.indexOf(name) !== -1;

            var data = extend({
                bubbles: isDomEvent,
                cancelable: isDomEvent,
                detail: undefined
            }, props);

            if (document.createEvent) {
                event = document.createEvent(isMouseEvent && window.MouseEvent ? 'MouseEvents' : 'Events');
                event.initEvent(name, data.bubbles, data.cancelable, data.detail);
            } else if (document.createEventObject) {
                event = document.createEventObject(window.event);
                if (isMouseEvent) {
                    event.button = 1;
                }
                if (!data.bubbles) {
                    event.cancelBubble = true;
                }
            }

            return event;
        }

        function normalizeEventName(event) {
            if (event.substr(0, 2) === 'on') {
                return isStandard ? event.substr(2) : event;
            } else {
                return isStandard ? event : 'on' + event;
            }
        }

        /**
         * Crossbrowser implementation of {HTMLElement}.addEventListener.
         *
         * @memberof tiny
         * @type {Function}
         * @param {HTMLElement|String} elem An HTMLElement or a CSS selector to add listener to
         * @param {String} event Event name
         * @param {Function} handler Event handler function
         * @param {Boolean} bubbles Whether or not to be propagated to outer elements.
         *
         * @example
         * tiny.on(document, 'click', function(e){}, false);
         *
         * tiny.on('p > button', 'click', function(e){}, false);
         */
        function on(elem, event, handler, bubbles) {
            getElements$1(elem).forEach(function(el) {
                el[addHandler](normalizeEventName(event), handler, bubbles || false);
            });
        }

        /**
         * Attach a handler to an event for the {HTMLElement} that executes only
         * once.
         *
         * @memberof ch.Event
         * @type {Function}
         * @param {HTMLElement|String} elem An HTMLElement or a CSS selector to add listener to
         * @param {String} event Event name
         * @param {Function} handler Event handler function
         * @param {Boolean} bubbles Whether or not to be propagated to outer elements.
         *
         * @example
         * tiny.once(document, 'click', function(e){}, false);
         */
        function once(elem, event, _handler, bubbles) {
            getElements$1(elem).forEach(function(el) {
                var origHandler = _handler;

                _handler = function handler(e) {
                    off(el, e.type, _handler);

                    return origHandler.apply(el, arguments);
                };

                el[addHandler](normalizeEventName(event), _handler, bubbles || false);
            });
        }

        /**
         * Crossbrowser implementation of {HTMLElement}.removeEventListener.
         *
         * @memberof ch.Event
         * @type {Function}
         * @param {HTMLElement|String} elem An HTMLElement or a CSS selector to remove listener from
         * @param {String} event Event name
         * @param {Function} handler Event handler function to remove
         *
         * @example
         * tiny.off(document, 'click', fn);
         */
        function off(elem, event, handler) {
            getElements$1(elem).forEach(function(el) {
                el[removeHandler](normalizeEventName(event), handler);
            });
        }

        /**
         * Crossbrowser implementation of {HTMLElement}.removeEventListener.
         *
         * @memberof tiny
         * @type {Function}
         * @param {HTMLElement} elem An HTMLElement or a CSS selector to dispatch event to
         * @param {String|Event} event Event name or an event object
         *
         * @example
         * tiny.trigger('.btn', 'click');
         */
        function trigger(elem, event, props) {
            var _this = this;

            var name = typeof event === 'string' ? event : event.type;
            event = typeof event === 'string' || isPlainObject(event) ? initEvent(event, props) : event;

            getElements$1(elem).forEach(function(el) {
                // handle focus(), blur() by calling them directly
                if (event.type in focus && typeof _this[event.type] == 'function') {
                    _this[event.type]();
                } else {
                    isStandard ? el[dispatch](event) : el[dispatch](normalizeEventName(name), event);
                }
            });
        }

        var DOMEvents = {
            on: on,
            once: once,
            off: off,
            trigger: trigger
        };

        /**
         * Polyfill for supporting pointer events on every browser
         *
         * @see Based on: <a href="https://github.com/deltakosh/handjs" target="_blank">Hand.js</a>
         */
        (function(window) {
            'use strict';

            var POINTER_TYPE_TOUCH = 'touch';
            var POINTER_TYPE_PEN = 'pen';
            var POINTER_TYPE_MOUSE = 'mouse';

            // If the user agent already supports Pointer Events, do nothing
            if (window.PointerEvent) {
                return;
            }

            // Due to polyfill IE8 can has document.createEvent but it has no support for
            // custom Mouse Events
            var supportsMouseEvents = !!window.MouseEvent;

            if (!supportsMouseEvents) {
                return;
            }

            // The list of standardized pointer events http://www.w3.org/TR/pointerevents/
            var upperCaseEventsNames = ['PointerDown', 'PointerUp', 'PointerMove', 'PointerOver', 'PointerOut', 'PointerCancel', 'PointerEnter', 'PointerLeave'];
            var supportedEventsNames = upperCaseEventsNames.map(function(name) {
                return name.toLowerCase();
            });

            var previousTargets = {};

            var checkPreventDefault = function checkPreventDefault(node) {
                while (node && !node.ch_forcePreventDefault) {
                    node = node.parentNode;
                }
                return !!node || window.ch_forcePreventDefault;
            };

            // Touch events
            var generateTouchClonedEvent = function generateTouchClonedEvent(sourceEvent, newName, canBubble, target, relatedTarget) {
                // Considering touch events are almost like super mouse events
                var evObj;

                if (document.createEvent && supportsMouseEvents) {
                    evObj = document.createEvent('MouseEvents');
                    // TODO: Replace 'initMouseEvent' with 'new MouseEvent'
                    evObj.initMouseEvent(newName, canBubble, true, window, 1, sourceEvent.screenX, sourceEvent.screenY, sourceEvent.clientX, sourceEvent.clientY, sourceEvent.ctrlKey, sourceEvent.altKey, sourceEvent.shiftKey, sourceEvent.metaKey, sourceEvent.button, relatedTarget || sourceEvent.relatedTarget);
                } else {
                    evObj = document.createEventObject();
                    evObj.screenX = sourceEvent.screenX;
                    evObj.screenY = sourceEvent.screenY;
                    evObj.clientX = sourceEvent.clientX;
                    evObj.clientY = sourceEvent.clientY;
                    evObj.ctrlKey = sourceEvent.ctrlKey;
                    evObj.altKey = sourceEvent.altKey;
                    evObj.shiftKey = sourceEvent.shiftKey;
                    evObj.metaKey = sourceEvent.metaKey;
                    evObj.button = sourceEvent.button;
                    evObj.relatedTarget = relatedTarget || sourceEvent.relatedTarget;
                }
                // offsets
                if (evObj.offsetX === undefined) {
                    if (sourceEvent.offsetX !== undefined) {

                        // For Opera which creates readonly properties
                        if (Object && Object.defineProperty !== undefined) {
                            Object.defineProperty(evObj, 'offsetX', {
                                writable: true
                            });
                            Object.defineProperty(evObj, 'offsetY', {
                                writable: true
                            });
                        }

                        evObj.offsetX = sourceEvent.offsetX;
                        evObj.offsetY = sourceEvent.offsetY;
                    } else if (Object && Object.defineProperty !== undefined) {
                        Object.defineProperty(evObj, 'offsetX', {
                            get: function get() {
                                if (this.currentTarget && this.currentTarget.offsetLeft) {
                                    return sourceEvent.clientX - this.currentTarget.offsetLeft;
                                }
                                return sourceEvent.clientX;
                            }
                        });
                        Object.defineProperty(evObj, 'offsetY', {
                            get: function get() {
                                if (this.currentTarget && this.currentTarget.offsetTop) {
                                    return sourceEvent.clientY - this.currentTarget.offsetTop;
                                }
                                return sourceEvent.clientY;
                            }
                        });
                    } else if (sourceEvent.layerX !== undefined) {
                        evObj.offsetX = sourceEvent.layerX - sourceEvent.currentTarget.offsetLeft;
                        evObj.offsetY = sourceEvent.layerY - sourceEvent.currentTarget.offsetTop;
                    }
                }

                // adding missing properties

                if (sourceEvent.isPrimary !== undefined) evObj.isPrimary = sourceEvent.isPrimary;
                else evObj.isPrimary = true;

                if (sourceEvent.pressure) evObj.pressure = sourceEvent.pressure;
                else {
                    var button = 0;

                    if (sourceEvent.which !== undefined) button = sourceEvent.which;
                    else if (sourceEvent.button !== undefined) {
                        button = sourceEvent.button;
                    }
                    evObj.pressure = button === 0 ? 0 : 0.5;
                }

                if (sourceEvent.rotation) evObj.rotation = sourceEvent.rotation;
                else evObj.rotation = 0;

                // Timestamp
                if (sourceEvent.hwTimestamp) evObj.hwTimestamp = sourceEvent.hwTimestamp;
                else evObj.hwTimestamp = 0;

                // Tilts
                if (sourceEvent.tiltX) evObj.tiltX = sourceEvent.tiltX;
                else evObj.tiltX = 0;

                if (sourceEvent.tiltY) evObj.tiltY = sourceEvent.tiltY;
                else evObj.tiltY = 0;

                // Width and Height
                if (sourceEvent.height) evObj.height = sourceEvent.height;
                else evObj.height = 0;

                if (sourceEvent.width) evObj.width = sourceEvent.width;
                else evObj.width = 0;

                // preventDefault
                evObj.preventDefault = function() {
                    if (sourceEvent.preventDefault !== undefined) sourceEvent.preventDefault();
                };

                // stopPropagation
                if (evObj.stopPropagation !== undefined) {
                    var current = evObj.stopPropagation;
                    evObj.stopPropagation = function() {
                        if (sourceEvent.stopPropagation !== undefined) sourceEvent.stopPropagation();
                        current.call(this);
                    };
                }

                // Pointer values
                evObj.pointerId = sourceEvent.pointerId;
                evObj.pointerType = sourceEvent.pointerType;

                switch (evObj.pointerType) { // Old spec version check
                    case 2:
                        evObj.pointerType = POINTER_TYPE_TOUCH;
                        break;
                    case 3:
                        evObj.pointerType = POINTER_TYPE_PEN;
                        break;
                    case 4:
                        evObj.pointerType = POINTER_TYPE_MOUSE;
                        break;
                }

                // Fire event
                if (target) target.dispatchEvent(evObj);
                else if (sourceEvent.target && supportsMouseEvents) {
                    sourceEvent.target.dispatchEvent(evObj);
                } else {
                    sourceEvent.srcElement.fireEvent('on' + getMouseEquivalentEventName(newName), evObj); // We must fallback to mouse event for very old browsers
                }
            };

            var generateMouseProxy = function generateMouseProxy(evt, eventName, canBubble, target, relatedTarget) {
                evt.pointerId = 1;
                evt.pointerType = POINTER_TYPE_MOUSE;
                generateTouchClonedEvent(evt, eventName, canBubble, target, relatedTarget);
            };

            var generateTouchEventProxy = function generateTouchEventProxy(name, touchPoint, target, eventObject, canBubble, relatedTarget) {
                var touchPointId = touchPoint.identifier + 2; // Just to not override mouse id

                touchPoint.pointerId = touchPointId;
                touchPoint.pointerType = POINTER_TYPE_TOUCH;
                touchPoint.currentTarget = target;

                if (eventObject.preventDefault !== undefined) {
                    touchPoint.preventDefault = function() {
                        eventObject.preventDefault();
                    };
                }

                generateTouchClonedEvent(touchPoint, name, canBubble, target, relatedTarget);
            };

            var checkEventRegistration = function checkEventRegistration(node, eventName) {
                return node.__chGlobalRegisteredEvents && node.__chGlobalRegisteredEvents[eventName];
            };
            var findEventRegisteredNode = function findEventRegisteredNode(node, eventName) {
                while (node && !checkEventRegistration(node, eventName)) {
                    node = node.parentNode;
                }
                if (node) return node;
                else if (checkEventRegistration(window, eventName)) return window;
            };

            var generateTouchEventProxyIfRegistered = function generateTouchEventProxyIfRegistered(eventName, touchPoint, target, eventObject, canBubble, relatedTarget) {
                // Check if user registered this event
                if (findEventRegisteredNode(target, eventName)) {
                    generateTouchEventProxy(eventName, touchPoint, target, eventObject, canBubble, relatedTarget);
                }
            };

            var getMouseEquivalentEventName = function getMouseEquivalentEventName(eventName) {
                return eventName.toLowerCase().replace('pointer', 'mouse');
            };

            var getPrefixEventName = function getPrefixEventName(prefix, eventName) {
                var upperCaseIndex = supportedEventsNames.indexOf(eventName);
                var newEventName = prefix + upperCaseEventsNames[upperCaseIndex];

                return newEventName;
            };

            var registerOrUnregisterEvent = function registerOrUnregisterEvent(item, name, func, enable) {
                if (item.__chRegisteredEvents === undefined) {
                    item.__chRegisteredEvents = [];
                }

                if (enable) {
                    if (item.__chRegisteredEvents[name] !== undefined) {
                        item.__chRegisteredEvents[name]++;
                        return;
                    }

                    item.__chRegisteredEvents[name] = 1;
                    item.addEventListener(name, func, false);
                } else {

                    if (item.__chRegisteredEvents.indexOf(name) !== -1) {
                        item.__chRegisteredEvents[name]--;

                        if (item.__chRegisteredEvents[name] !== 0) {
                            return;
                        }
                    }
                    item.removeEventListener(name, func);
                    item.__chRegisteredEvents[name] = 0;
                }
            };

            var setTouchAware = function setTouchAware(item, eventName, enable) {
                // Leaving tokens
                if (!item.__chGlobalRegisteredEvents) {
                    item.__chGlobalRegisteredEvents = [];
                }
                if (enable) {
                    if (item.__chGlobalRegisteredEvents[eventName] !== undefined) {
                        item.__chGlobalRegisteredEvents[eventName]++;
                        return;
                    }
                    item.__chGlobalRegisteredEvents[eventName] = 1;
                } else {
                    if (item.__chGlobalRegisteredEvents[eventName] !== undefined) {
                        item.__chGlobalRegisteredEvents[eventName]--;
                        if (item.__chGlobalRegisteredEvents[eventName] < 0) {
                            item.__chGlobalRegisteredEvents[eventName] = 0;
                        }
                    }
                }

                var nameGenerator;
                var eventGenerator;
                if (window.MSPointerEvent) {
                    nameGenerator = function nameGenerator(name) {
                        return getPrefixEventName('MS', name);
                    };
                    eventGenerator = generateTouchClonedEvent;
                } else {
                    nameGenerator = getMouseEquivalentEventName;
                    eventGenerator = generateMouseProxy;
                }
                switch (eventName) {
                    case 'pointerenter':
                    case 'pointerleave':
                        var targetEvent = nameGenerator(eventName);
                        if (item['on' + targetEvent.toLowerCase()] !== undefined) {
                            registerOrUnregisterEvent(item, targetEvent, function(evt) {
                                eventGenerator(evt, eventName);
                            }, enable);
                        }
                        break;
                }
            };

            // Intercept addEventListener calls by changing the prototype
            var interceptAddEventListener = function interceptAddEventListener(root) {
                var current = root.prototype ? root.prototype.addEventListener : root.addEventListener;

                var customAddEventListener = function customAddEventListener(name, func, capture) {
                    // Branch when a PointerXXX is used
                    if (supportedEventsNames.indexOf(name) !== -1) {
                        setTouchAware(this, name, true);
                    }

                    if (current === undefined) {
                        this.attachEvent('on' + getMouseEquivalentEventName(name), func);
                    } else {
                        current.call(this, name, func, capture);
                    }
                };

                if (root.prototype) {
                    root.prototype.addEventListener = customAddEventListener;
                } else {
                    root.addEventListener = customAddEventListener;
                }
            };

            // Intercept removeEventListener calls by changing the prototype
            var interceptRemoveEventListener = function interceptRemoveEventListener(root) {
                var current = root.prototype ? root.prototype.removeEventListener : root.removeEventListener;

                var customRemoveEventListener = function customRemoveEventListener(name, func, capture) {
                    // Release when a PointerXXX is used
                    if (supportedEventsNames.indexOf(name) !== -1) {
                        setTouchAware(this, name, false);
                    }

                    if (current === undefined) {
                        this.detachEvent(getMouseEquivalentEventName(name), func);
                    } else {
                        current.call(this, name, func, capture);
                    }
                };
                if (root.prototype) {
                    root.prototype.removeEventListener = customRemoveEventListener;
                } else {
                    root.removeEventListener = customRemoveEventListener;
                }
            };

            // Hooks
            interceptAddEventListener(window);
            interceptAddEventListener(window.HTMLElement || window.Element);
            interceptAddEventListener(document);
            interceptAddEventListener(HTMLBodyElement);
            interceptAddEventListener(HTMLDivElement);
            interceptAddEventListener(HTMLImageElement);
            interceptAddEventListener(HTMLUListElement);
            interceptAddEventListener(HTMLAnchorElement);
            interceptAddEventListener(HTMLLIElement);
            interceptAddEventListener(HTMLTableElement);
            if (window.HTMLSpanElement) {
                interceptAddEventListener(HTMLSpanElement);
            }
            if (window.HTMLCanvasElement) {
                interceptAddEventListener(HTMLCanvasElement);
            }
            if (window.SVGElement) {
                interceptAddEventListener(SVGElement);
            }

            interceptRemoveEventListener(window);
            interceptRemoveEventListener(window.HTMLElement || window.Element);
            interceptRemoveEventListener(document);
            interceptRemoveEventListener(HTMLBodyElement);
            interceptRemoveEventListener(HTMLDivElement);
            interceptRemoveEventListener(HTMLImageElement);
            interceptRemoveEventListener(HTMLUListElement);
            interceptRemoveEventListener(HTMLAnchorElement);
            interceptRemoveEventListener(HTMLLIElement);
            interceptRemoveEventListener(HTMLTableElement);
            if (window.HTMLSpanElement) {
                interceptRemoveEventListener(HTMLSpanElement);
            }
            if (window.HTMLCanvasElement) {
                interceptRemoveEventListener(HTMLCanvasElement);
            }
            if (window.SVGElement) {
                interceptRemoveEventListener(SVGElement);
            }

            // Prevent mouse event from being dispatched after Touch Events action
            var touching = false;
            var touchTimer = -1;

            function setTouchTimer() {
                touching = true;
                clearTimeout(touchTimer);
                touchTimer = setTimeout(function() {
                    touching = false;
                }, 700);
                // 1. Mobile browsers dispatch mouse events 300ms after touchend
                // 2. Chrome for Android dispatch mousedown for long-touch about 650ms
                // Result: Blocking Mouse Events for 700ms.
            }

            function getFirstCommonNode(x, y) {
                while (x) {
                    if (x.contains(y)) return x;
                    x = x.parentNode;
                }
                return null;
            }

            //generateProxy receives a node to dispatch the event
            function dispatchPointerEnter(currentTarget, relatedTarget, generateProxy) {
                var commonParent = getFirstCommonNode(currentTarget, relatedTarget);
                var node = currentTarget;
                var nodelist = [];
                while (node && node !== commonParent) {
                    //target range: this to the direct child of parent relatedTarget
                    if (checkEventRegistration(node, 'pointerenter')) //check if any parent node has pointerenter
                        nodelist.push(node);
                    node = node.parentNode;
                }
                while (nodelist.length > 0) {
                    generateProxy(nodelist.pop());
                }
            }

            //generateProxy receives a node to dispatch the event
            function dispatchPointerLeave(currentTarget, relatedTarget, generateProxy) {
                var commonParent = getFirstCommonNode(currentTarget, relatedTarget);
                var node = currentTarget;
                while (node && node !== commonParent) {
                    //target range: this to the direct child of parent relatedTarget
                    if (checkEventRegistration(node, 'pointerleave')) //check if any parent node has pointerleave
                        generateProxy(node);
                    node = node.parentNode;
                }
            }

            // Handling events on window to prevent unwanted super-bubbling
            // All mouse events are affected by touch fallback
            function applySimpleEventTunnels(nameGenerator, eventGenerator) {
                ['pointerdown', 'pointermove', 'pointerup', 'pointerover', 'pointerout'].forEach(function(eventName) {
                    window.addEventListener(nameGenerator(eventName), function(evt) {
                        if (!touching && findEventRegisteredNode(evt.target, eventName)) eventGenerator(evt, eventName, true);
                    });
                });
                if (window['on' + nameGenerator('pointerenter').toLowerCase()] === undefined) window.addEventListener(nameGenerator('pointerover'), function(evt) {
                    if (touching) return;
                    var foundNode = findEventRegisteredNode(evt.target, 'pointerenter');
                    if (!foundNode || foundNode === window) return;
                    else if (!foundNode.contains(evt.relatedTarget)) {
                        dispatchPointerEnter(foundNode, evt.relatedTarget, function(targetNode) {
                            eventGenerator(evt, 'pointerenter', false, targetNode, evt.relatedTarget);
                        });
                    }
                });
                if (window['on' + nameGenerator('pointerleave').toLowerCase()] === undefined) window.addEventListener(nameGenerator('pointerout'), function(evt) {
                    if (touching) return;
                    var foundNode = findEventRegisteredNode(evt.target, 'pointerleave');
                    if (!foundNode || foundNode === window) return;
                    else if (!foundNode.contains(evt.relatedTarget)) {
                        dispatchPointerLeave(foundNode, evt.relatedTarget, function(targetNode) {
                            eventGenerator(evt, 'pointerleave', false, targetNode, evt.relatedTarget);
                        });
                    }
                });
            }

            (function() {
                if (window.MSPointerEvent) {
                    //IE 10
                    applySimpleEventTunnels(function(name) {
                        return getPrefixEventName('MS', name);
                    }, generateTouchClonedEvent);
                } else {
                    applySimpleEventTunnels(getMouseEquivalentEventName, generateMouseProxy);

                    // Handling move on window to detect pointerleave/out/over
                    if (window.ontouchstart !== undefined) {
                        window.addEventListener('touchstart', function(eventObject) {
                            for (var i = 0; i < eventObject.changedTouches.length; ++i) {
                                var touchPoint = eventObject.changedTouches[i];
                                previousTargets[touchPoint.identifier] = touchPoint.target;

                                generateTouchEventProxyIfRegistered('pointerover', touchPoint, touchPoint.target, eventObject, true);

                                //pointerenter should not be bubbled
                                dispatchPointerEnter(touchPoint.target, null, function(targetNode) {
                                    generateTouchEventProxy('pointerenter', touchPoint, targetNode, eventObject, false);
                                });

                                generateTouchEventProxyIfRegistered('pointerdown', touchPoint, touchPoint.target, eventObject, true);
                            }
                            setTouchTimer();
                        });

                        window.addEventListener('touchend', function(eventObject) {
                            for (var i = 0; i < eventObject.changedTouches.length; ++i) {
                                var touchPoint = eventObject.changedTouches[i];
                                var currentTarget = previousTargets[touchPoint.identifier];

                                if (!currentTarget) {
                                    continue;
                                }

                                generateTouchEventProxyIfRegistered('pointerup', touchPoint, currentTarget, eventObject, true);
                                generateTouchEventProxyIfRegistered('pointerout', touchPoint, currentTarget, eventObject, true);

                                //pointerleave should not be bubbled
                                dispatchPointerLeave(currentTarget, null, function(targetNode) {
                                    generateTouchEventProxy('pointerleave', touchPoint, targetNode, eventObject, false);
                                });

                                delete previousTargets[touchPoint.identifier];
                            }
                            setTouchTimer();
                        });

                        window.addEventListener('touchmove', function(eventObject) {
                            for (var i = 0; i < eventObject.changedTouches.length; ++i) {
                                var touchPoint = eventObject.changedTouches[i];
                                var newTarget = document.elementFromPoint(touchPoint.clientX, touchPoint.clientY);
                                var currentTarget = previousTargets[touchPoint.identifier];

                                // If force preventDefault
                                if (currentTarget && checkPreventDefault(currentTarget) === true) eventObject.preventDefault();

                                // Viewport manipulation fires non-cancelable touchmove
                                if (!eventObject.cancelable) {
                                    delete previousTargets[touchPoint.identifier];
                                    generateTouchEventProxyIfRegistered('pointercancel', touchPoint, currentTarget, eventObject, true);
                                    generateTouchEventProxyIfRegistered('pointerout', touchPoint, currentTarget, eventObject, true);

                                    dispatchPointerLeave(currentTarget, null, function(targetNode) {
                                        generateTouchEventProxy('pointerleave', touchPoint, targetNode, eventObject, false);
                                    });
                                    continue;
                                }

                                generateTouchEventProxyIfRegistered('pointermove', touchPoint, currentTarget, eventObject, true);

                                if (currentTarget === newTarget) {
                                    continue; // We can skip this as the pointer is effectively over the current target
                                }

                                if (currentTarget) {
                                    // Raise out
                                    generateTouchEventProxyIfRegistered('pointerout', touchPoint, currentTarget, eventObject, true, newTarget);

                                    // Raise leave
                                    if (!currentTarget.contains(newTarget)) {
                                        // Leave must be called if the new target is not a child of the current
                                        dispatchPointerLeave(currentTarget, newTarget, function(targetNode) {
                                            generateTouchEventProxy('pointerleave', touchPoint, targetNode, eventObject, false, newTarget);
                                        });
                                    }
                                }

                                if (newTarget) {
                                    // Raise over
                                    generateTouchEventProxyIfRegistered('pointerover', touchPoint, newTarget, eventObject, true, currentTarget);

                                    // Raise enter
                                    if (!newTarget.contains(currentTarget)) {
                                        // Leave must be called if the new target is not the parent of the current
                                        dispatchPointerEnter(newTarget, currentTarget, function(targetNode) {
                                            generateTouchEventProxy('pointerenter', touchPoint, targetNode, eventObject, false, currentTarget);
                                        });
                                    }
                                }
                                previousTargets[touchPoint.identifier] = newTarget;
                            }
                            setTouchTimer();
                        });

                        window.addEventListener('touchcancel', function(eventObject) {
                            for (var i = 0; i < eventObject.changedTouches.length; ++i) {
                                var touchPoint = eventObject.changedTouches[i];

                                generateTouchEventProxyIfRegistered('pointercancel', touchPoint, previousTargets[touchPoint.identifier], eventObject, true);
                            }
                        });
                    }
                }
            })();

            // Extension to navigator
            if (navigator.pointerEnabled === undefined) {

                // Indicates if the browser will fire pointer events for pointing input
                navigator.pointerEnabled = true;

                // IE
                if (navigator.msPointerEnabled) {
                    navigator.maxTouchPoints = navigator.msMaxTouchPoints;
                }
            }
        })(window);

        /**
         * Normalizes touch/touch+click events into a 'pointertap' event that is not
         * part of standard.
         * Uses pointerEvents polyfill or native PointerEvents when supported.
         *
         * @example
         * // Use pointertap as fastclick on touch enabled devices
         * document.querySelector('.btn').addEventListener(ch.pointertap, function(e) {
         *   console.log('tap');
         * });
         */
        (function() {
            'use strict';

            // IE8 has no support for custom Mouse Events, fallback to onclick

            if (!window.MouseEvent) {
                return;
            }

            var POINTER_TYPE_TOUCH = 'touch';
            var POINTER_TYPE_PEN = 'pen';
            var POINTER_TYPE_MOUSE = 'mouse';

            var isScrolling = false;
            var scrollTimeout = false;
            var sDistX = 0;
            var sDistY = 0;
            var activePointer;

            window.addEventListener('scroll', function() {
                if (!isScrolling) {
                    sDistX = window.pageXOffset;
                    sDistY = window.pageYOffset;
                }
                isScrolling = true;
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(function() {
                    isScrolling = false;
                    sDistX = 0;
                    sDistY = 0;
                }, 100);
            });

            window.addEventListener('pointerdown', pointerDown);
            window.addEventListener('pointerup', pointerUp);
            window.addEventListener('pointerleave', pointerLeave);

            window.addEventListener('pointermove', function() /* e */ {});

            /**
             * Handles the 'pointerdown' event from pointerEvents polyfill or native PointerEvents when supported.
             *
             * @private
             * @param {MouseEvent|PointerEvent} e Event.
             */
            function pointerDown(e) {
                // don't register an activePointer if more than one touch is active.
                var singleFinger = e.pointerType === POINTER_TYPE_MOUSE || e.pointerType === POINTER_TYPE_PEN || e.pointerType === POINTER_TYPE_TOUCH && e.isPrimary;

                if (!isScrolling && singleFinger) {
                    activePointer = {
                        id: e.pointerId,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        x: e.x || e.pageX,
                        y: e.y || e.pageY,
                        type: e.pointerType
                    };
                }
            }

            /**
             * Handles the 'pointerleave' event from pointerEvents polyfill or native PointerEvents when supported.
             *
             * @private
             * @param {MouseEvent|PointerEvent} e Event.
             */
            function pointerLeave() /* e */ {
                activePointer = null;
            }

            /**
             * Handles the 'pointerup' event from pointerEvents polyfill or native PointerEvents when supported.
             *
             * @private
             * @param {MouseEvent|PointerEvent} e Event.
             */
            function pointerUp(e) {
                // Does our event is the same as the activePointer set by pointerdown?
                if (activePointer && activePointer.id === e.pointerId) {
                    // Have we moved too much?
                    if (Math.abs(activePointer.x - (e.x || e.pageX)) < 5 && Math.abs(activePointer.y - (e.y || e.pageY)) < 5) {
                        // Have we scrolled too much?
                        if (!isScrolling || Math.abs(sDistX - window.pageXOffset) < 5 && Math.abs(sDistY - window.pageYOffset) < 5) {
                            makePointertapEvent(e);
                        }
                    }
                }
                activePointer = null;
            }

            /**
             * Creates the pointertap event that is not part of standard.
             *
             * @private
             * @param {MouseEvent|PointerEvent} sourceEvent An event to use as a base for pointertap.
             */
            function makePointertapEvent(sourceEvent) {
                var evt = document.createEvent('MouseEvents');
                var newTarget = document.elementFromPoint(sourceEvent.clientX, sourceEvent.clientY);

                // According to the MDN docs if the specified point is outside the visible bounds of the document
                // or either coordinate is negative, the result is null
                if (!newTarget) {
                    return null;
                }

                // TODO: Replace 'initMouseEvent' with 'new MouseEvent'
                evt.initMouseEvent('pointertap', true, true, window, 1, sourceEvent.screenX, sourceEvent.screenY, sourceEvent.clientX, sourceEvent.clientY, sourceEvent.ctrlKey, sourceEvent.altKey, sourceEvent.shiftKey, sourceEvent.metaKey, sourceEvent.button, newTarget);

                evt.maskedEvent = sourceEvent;
                newTarget.dispatchEvent(evt);

                return evt;
            }
        })();

        var supportsMouseEvents = !!window.MouseEvent;

        /**
         * Every time Chico UI needs to inform all visual components that layout has
         * been changed, it emits this event.
         *
         * @constant
         * @type {String}
         */
        var onlayoutchange = 'layoutchange';

        /**
         * Equivalent to 'resize'.
         * @constant
         * @type {String}
         */
        var onresize = 'resize';

        /**
         * Equivalent to 'scroll'.
         * @constant
         * @type {String}
         */
        var onscroll = 'scroll';

        /**
         * Equivalent to 'pointerdown' or 'mousedown', depending on browser capabilities.
         *
         * @constant
         * @type {String}
         * @link http://www.w3.org/TR/pointerevents/#dfn-pointerdown | Pointer Events W3C Recommendation
         */
        var onpointerdown = supportsMouseEvents ? 'pointerdown' : 'mousedown';

        /**
         * Equivalent to 'pointerup' or 'mouseup', depending on browser capabilities.
         *
         * @constant
         * @type {String}
         * @link http://www.w3.org/TR/pointerevents/#dfn-pointerup | Pointer Events W3C Recommendation
         */
        var onpointerup = supportsMouseEvents ? 'pointerup' : 'mouseup';

        /**
         * Equivalent to 'pointermove' or 'mousemove', depending on browser capabilities.
         *
         * @constant
         * @type {String}
         * @link http://www.w3.org/TR/pointerevents/#dfn-pointermove | Pointer Events W3C Recommendation
         */
        var onpointermove = supportsMouseEvents ? 'pointermove' : 'mousemove';

        /**
         * Equivalent to 'pointertap' or 'click', depending on browser capabilities.
         *
         * @constant
         * @type {String}
         * @link http://www.w3.org/TR/pointerevents/#list-of-pointer-events | Pointer Events W3C Recommendation
         */
        var onpointertap = support.touch && supportsMouseEvents ? 'pointertap' : 'click';

        /**
         * Equivalent to 'pointerenter' or 'mouseenter', depending on browser capabilities.
         *
         * @constant
         * @type {String}
         * @link http://www.w3.org/TR/pointerevents/#dfn-pointerenter | Pointer Events W3C Recommendation
         */
        var onpointerenter = supportsMouseEvents ? 'pointerenter' : 'mouseenter';

        /**
         * Equivalent to 'pointerleave' or 'mouseleave', depending on browser capabilities.
         *
         * @constant
         * @type {String}
         * @link http://www.w3.org/TR/pointerevents/#dfn-pointerleave | Pointer Events W3C Recommendation
         */
        var onpointerleave = supportsMouseEvents ? 'pointerleave' : 'mouseleave';

        /**
         * The DOM input event that is fired when the value of an <input> or <textarea>
         * element is changed. Equivalent to 'input' or 'keydown', depending on browser
         * capabilities.
         *
         * @constant
         * @type {String}
         */
        var onkeyinput = 'oninput' in document.createElement('input') ? 'input' : 'keydown';

        var events = Object.freeze({
            onlayoutchange: onlayoutchange,
            onresize: onresize,
            onscroll: onscroll,
            onpointerdown: onpointerdown,
            onpointerup: onpointerup,
            onpointermove: onpointermove,
            onpointertap: onpointertap,
            onpointerenter: onpointerenter,
            onpointerleave: onpointerleave,
            onkeyinput: onkeyinput
        });

        var tiny = {
            clone: clone,
            extend: extend,
            inherits: inherits,
            EventEmitter: EventEmitter,
            ajax: ajax,
            jsonp: jsonp,
            jcors: jcors,
            isPlainObject: isPlainObject,
            support: support,
            addClass: classList.addClass,
            removeClass: classList.removeClass,
            hasClass: classList.hasClass,
            parent: parent,
            next: next,
            css: css,
            offset: offset,
            scroll: scroll,
            cookies: cookies,
            on: DOMEvents.on,
            bind: DOMEvents.on,
            one: DOMEvents.once,
            once: DOMEvents.once,
            off: DOMEvents.off,
            trigger: DOMEvents.trigger
        };

        for (var e in events) {
            tiny[e] = events[e];
        }

        if (typeof window !== 'undefined') {
            window.tiny = tiny;
        }

        module.exports = tiny;
    }, {
        "events": 1,
        "inherits": 2
    }]
}, {}, [3]);
'use strict';
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
/*!
 * Chico UI v2.0.4
 * http://chico-ui.com.ar/
 *
 * Copyright (c) 2016, MercadoLibre.com
 * Released under the MIT license.
 * http://chico-ui.com.ar/license
 */
(function(window) {
    'use strict';
    /**
     * An object which contains all the public members. A short alias for el.querySelectorAll
     * @param {String} selector Valid CSS selector expression
     * @param {String|HTMLElement} context A DOM Element, Document, or selector string to use as query context
     * @returns {NodeList} A collection of matched elements
     *
     * @namespace
     *
     * @example
     * // Get all first level headings
     * var headings = ch('h1');
     *
     * // Get a list of p children elements under a container, whose parent is a div that has the class 'wrapper'
     * var paragraphs = ch('p', ch('div.wrapper'));
     * // The same as above
     * var paragraphs = ch('p', 'div.wrapper');
     */
    /*eslint-disable no-unused-vars*/
    var ch = function ch(selector, context) {
        if (!context) {
            context = document;
        } else if (typeof context === 'string') {
            context = document.querySelector(context);
        } // Since NodeList is an array-like object but Array.isArray is always falsy
        // we should detect the NodeList
        // Please replace NodeList detection with `context instanceof NodeList && context.length > 0`
        //   when IE8 support will be dropped
        // Please replace Object.prototype.hasOwnProperty.call with `context.hasOwnProperty` when IE8
        //   support will be dropped
        if ((typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object' && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(context)) && Object.prototype.hasOwnProperty.call(context, 'length') && context.length > 0 && context[0].nodeType > 0) {
            context = context[0];
        }
        if (context === null || !context.nodeType) {
            context = document;
        }
        return context.querySelectorAll(selector);
    }; /*eslint-enable no-unused-vars*/
    /**
     * Tab key event.
     * @constant
     * @memberof ch
     * @type {String}
     */
    ch.onkeytab = 'tab';
    /**
     * Enter key event.
     * @constant
     * @memberof ch
     * @type {String}
     */
    ch.onkeyenter = 'enter';
    /**
     * Esc key event.
     * @constant
     * @memberof ch
     * @type {String}
     */
    ch.onkeyesc = 'esc';
    /**
     * Left arrow key event.
     * @constant
     * @memberof ch
     * @type {String}
     */
    ch.onkeyleftarrow = 'left_arrow';
    /**
     * Up arrow key event.
     * @constant
     * @memberof ch
     * @type {String}
     */
    ch.onkeyuparrow = 'up_arrow';
    /**
     * Rigth arrow key event.
     * @constant
     * @memberof ch
     * @type {String}
     */
    ch.onkeyrightarrow = 'right_arrow';
    /**
     * Down arrow key event.
     * @constant
     * @memberof ch
     * @type {String}
     */
    ch.onkeydownarrow = 'down_arrow';
    /**
     * Backspace key event.
     * @constant
     * @memberof ch
     * @type {String}
     */
    ch.onkeybackspace = 'backspace';
    /**
     * Method in change of expose a friendly interface of the Chico constructors.
     *
     * @memberof ch
     * @param {Object} Klass Direct reference to the constructor from where the $-plugin will be created.
     * @link http://docs.jquery.com/Plugins/Authoring | Authoring
     */
    ch.factory = function(Klass) {
        /**
         * Identification of the constructor, in lowercases.
         * @type {String}
         */
        var name = Klass.prototype.name; // Uses the function.name property (non-standard) on the newest browsers OR
        // uppercases the first letter from the identification name of the constructor
        ch[name.charAt(0).toUpperCase() + name.substr(1)] = Klass;
    }; // Remove the no-js classname from html tag
    tiny.removeClass(document.documentElement, 'no-js'); // Expose event names
    for (var m in tiny) {
        if (/^on\w+/.test(m) && typeof tiny[m] === 'string') {
            ch[m] = tiny[m];
        }
    }
    ch.version = '2.0.4';
    window.ch = ch;
})(undefined);
(function(ch) {
    'use strict';
    /**
     * Add a function to manage components content.
     * @memberOf ch
     * @mixin
     * @returns {Function}
     */
    function Content() {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            defaults = {
                'method': this._options.method,
                'params': this._options.params,
                'cache': this._options.cache,
                'waiting': this._options.waiting
            };
        /**
         * Set async content into component's container and emits the current event.
         * @private
         */
        function setAsyncContent(event) {
            that._content.innerHTML = event.response;
            /**
             * Event emitted when the content change.
             * @event ch.Content#contentchange
             * @private
             */
            that.emit('_contentchange');
            /**
             * Event emitted if the content is loaded successfully.
             * @event ch.Content#contentdone
             * @ignore
             */
            /**
             * Event emitted when the content is loading.
             * @event ch.Content#contentwaiting
             * @example
             * // Subscribe to "contentwaiting" event.
             * component.on('contentwaiting', function (event) {
             *     // Some code here!
             * });
             */
            /**
             * Event emitted if the content isn't loaded successfully.
             * @event ch.Content#contenterror
             * @example
             * // Subscribe to "contenterror" event.
             * component.on('contenterror', function (event) {
             *     // Some code here!
             * });
             */
            that.emit('content' + event.status, event);
        }
        /**
         * Set content into component's container and emits the contentdone event.
         * @private
         */
        function setContent(content) {
            if (content.nodeType !== undefined) {
                that._content.innerHTML = '';
                that._content.appendChild(content);
            } else {
                that._content.innerHTML = content;
            }
            that._options.cache = true;
            /**
             * Event emitted when the content change.
             * @event ch.Content#contentchange
             * @private
             */
            that.emit('_contentchange');
            /**
             * Event emitted if the content is loaded successfully.
             * @event ch.Content#contentdone
             * @example
             * // Subscribe to "contentdone" event.
             * component.on('contentdone', function (event) {
             *     // Some code here!
             * });
             */
            that.emit('contentdone');
        }
        /**
         * Get async content with given URL.
         * @private
         */
        function getAsyncContent(url, options) {
            var requestCfg; // Initial options to be merged with the user's options
            options = tiny.extend({
                'method': 'GET',
                'params': '',
                'waiting': '<div class="ch-loading-large"></div>'
            }, defaults, options); // Set loading
            setAsyncContent({
                'status': 'waiting',
                'response': options.waiting
            });
            requestCfg = {
                method: options.method,
                success: function success(resp) {
                    setAsyncContent({
                        'status': 'done',
                        'response': resp
                    });
                },
                error: function error(err) {
                    setAsyncContent({
                        'status': 'error',
                        'response': '<p>Error on ajax call.</p>',
                        'data': err.message || JSON.stringify(err)
                    });
                }
            };
            if (options.cache !== undefined) {
                that._options.cache = options.cache;
            }
            if (options.cache === false && ['GET', 'HEAD'].indexOf(options.method.toUpperCase()) !== -1) {
                requestCfg.cache = false;
            }
            if (options.params) {
                if (['GET', 'HEAD'].indexOf(options.method.toUpperCase()) !== -1) {
                    url += (url.indexOf('?') !== -1 || options.params[0] === '?' ? '' : '?') + options.params;
                } else {
                    requestCfg.data = options.params;
                }
            } // Make a request
            tiny.ajax(url, requestCfg);
        }
        /**
         * Allows to manage the components content.
         * @function
         * @memberof! ch.Content#
         * @param {(String | HTMLElement)} content The content that will be used by a component.
         * @param {Object} [options] A custom options to be used with content loaded by ajax.
         * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
         * @param {String} [options.params] Params like query string to be sent to the server.
         * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true. false value will work only with HEAD and GET requests
         * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading.
         * @example
         * // Update content with some string.
         * component.content('Some new content here!');
         * @example
         * // Update content that will be loaded by ajax with custom options.
         * component.content('http://chico-ui.com.ar/ajax', {
         *     'cache': false,
         *     'params': 'x-request=true'
         * });
         */
        this.content = function(content, options) {
            var parent; // Returns the last updated content.
            if (content === undefined) {
                return that._content.innerHTML;
            }
            that._options.content = content;
            if (that._options.cache === undefined) {
                that._options.cache = true;
            }
            if (typeof content === 'string') { // Case 1: AJAX call
                if (/^(((https|http|ftp|file):\/\/)|www\.|\.\/|(\.\.\/)+|(\/{1,2})|(\d{1,3}\.){3}\d{1,3})(((\w+|-)(\.?)(\/?))+)(\:\d{1,5}){0,1}(((\w+|-)(\.?)(\/?)(#?))+)((\?)(\w+=(\w?)+(&?))+)?(\w+#\w+)?$/.test(content)) {
                    getAsyncContent(content.replace(/#.+/, ''), options); // Case 2: Plain text
                } else {
                    setContent(content);
                } // Case 3: HTML Element
            } else if (content.nodeType !== undefined) {
                tiny.removeClass(content, 'ch-hide');
                parent = tiny.parent(content);
                setContent(content);
                if (!that._options.cache) {
                    parent.removeChild(content);
                }
            }
            return that;
        }; // Loads content once. If the cache is disabled the content loads in each show.
        this.once('_show', function() {
            that.content(that._options.content);
            that.on('show', function() {
                if (!that._options.cache) {
                    that.content(that._options.content);
                }
            });
        });
    }
    ch.Content = Content;
})(undefined.ch);
(function(ch) {
    'use strict';
    var toggleEffects = {
        'slideDown': 'slideUp',
        'slideUp': 'slideDown',
        'fadeIn': 'fadeOut',
        'fadeOut': 'fadeIn'
    };
    /**
     * The Collapsible class gives to components the ability to shown or hidden its container.
     * @memberOf ch
     * @mixin
     * @returns {Function} Returns a private function.
     */
    function Collapsible() {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            triggerClass = 'ch-' + this.name + '-trigger-on',
            fx = this._options.fx,
            useEffects = tiny.support.transition && fx !== 'none' && fx !== false,
            pt, pb;

        function showCallback(e) {
            if (useEffects) {
                tiny.removeClass(that.container, 'ch-fx-' + fx); // TODO: Use original height when it is defined
                if (/^slide/.test(fx)) {
                    that.container.style.height = '';
                }
            }
            tiny.removeClass(that.container, 'ch-hide');
            that.container.setAttribute('aria-hidden', 'false');
            if (e) {
                e.target.removeEventListener(e.type, showCallback);
            }
            /**
             * Event emitted when the component is shown.
             * @event ch.Collapsible#show
             * @example
             * // Subscribe to "show" event.
             * collapsible.on('show', function () {
             *     // Some code here!
             * });
             */
            that.emit('show');
        }

        function hideCallback(e) {
            if (useEffects) {
                tiny.removeClass(that.container, 'ch-fx-' + toggleEffects[fx]);
                that.container.style.display = '';
                if (/^slide/.test(fx)) {
                    that.container.style.height = '';
                }
            }
            tiny.addClass(that.container, 'ch-hide');
            that.container.setAttribute('aria-hidden', 'true');
            if (e) {
                e.target.removeEventListener(e.type, hideCallback);
            }
            /**
             * Event emitted when the component is hidden.
             * @event ch.Collapsible#hide
             * @example
             * // Subscribe to "hide" event.
             * collapsible.on('hide', function () {
             *     // Some code here!
             * });
             */
            that.emit('hide');
        }
        this._shown = false;
        /**
         * Shows the component container.
         * @function
         * @private
         */
        this._show = function() {
            that._shown = true;
            if (that.trigger !== undefined) {
                tiny.addClass(that.trigger, triggerClass);
            }
            /**
             * Event emitted before the component is shown.
             * @event ch.Collapsible#beforeshow
             * @example
             * // Subscribe to "beforeshow" event.
             * collapsible.on('beforeshow', function () {
             *     // Some code here!
             * });
             */
            that.emit('beforeshow'); // Animate or not
            if (useEffects) {
                var _h = 0; // Be sure to remove an opposite class that probably exist and
                // transitionend listener for an opposite transition, aka $.fn.stop(true, true)
                tiny.off(that.container, tiny.support.transition.end, hideCallback);
                tiny.removeClass(that.container, 'ch-fx-' + toggleEffects[fx]);
                tiny.on(that.container, tiny.support.transition.end, showCallback); // Reveal an element before the transition
                that.container.style.display = 'block'; // Set margin and padding to 0 to prevent content jumping at the transition end
                if (/^slide/.test(fx)) { // Cache the original paddings for the first time
                    if (!pt || !pb) {
                        pt = tiny.css(that.container, 'padding-top');
                        pb = tiny.css(that.container, 'padding-bottom');
                        that.container.style.marginTop = that.container.style.marginBottom = that.container.style.paddingTop = that.container.style.paddingBottom = '0px';
                    }
                    that.container.style.opacity = '0.01';
                    _h = that.container.offsetHeight;
                    that.container.style.opacity = '';
                    that.container.style.height = '0px';
                } // Transition cannot be applied at the same time when changing the display property
                setTimeout(function() {
                    if (/^slide/.test(fx)) {
                        that.container.style.height = _h + 'px';
                    }
                    that.container.style.paddingTop = pt;
                    that.container.style.paddingBottom = pb;
                    tiny.addClass(that.container, 'ch-fx-' + fx);
                }, 0);
            } else {
                showCallback();
            }
            that.emit('_show');
            return that;
        };
        /**
         * Hides the component container.
         * @function
         * @private
         */
        this._hide = function() {
            that._shown = false;
            if (that.trigger !== undefined) {
                tiny.removeClass(that.trigger, triggerClass);
            }
            /**
             * Event emitted before the component is hidden.
             * @event ch.Collapsible#beforehide
             * @example
             * // Subscribe to "beforehide" event.
             * collapsible.on('beforehide', function () {
             *     // Some code here!
             * });
             */
            that.emit('beforehide'); // Animate or not
            if (useEffects) { // Be sure to remove an opposite class that probably exist and
                // transitionend listener for an opposite transition, aka $.fn.stop(true, true)
                tiny.off(that.container, tiny.support.transition.end, showCallback);
                tiny.removeClass(that.container, 'ch-fx-' + fx);
                tiny.on(that.container, tiny.support.transition.end, hideCallback); // Set margin and padding to 0 to prevent content jumping at the transition end
                if (/^slide/.test(fx)) {
                    that.container.style.height = tiny.css(that.container, 'height'); // Uses nextTick to trigger the height change
                    setTimeout(function() {
                        that.container.style.height = '0px';
                        that.container.style.paddingTop = that.container.style.paddingBottom = '0px';
                        tiny.addClass(that.container, 'ch-fx-' + toggleEffects[fx]);
                    }, 0);
                } else {
                    setTimeout(function() {
                        tiny.addClass(that.container, 'ch-fx-' + toggleEffects[fx]);
                    }, 0);
                }
            } else {
                hideCallback();
            }
            return that;
        };
        /**
         * Shows or hides the component.
         * @function
         * @private
         */
        this._toggle = function() {
            if (that._shown) {
                that.hide();
            } else {
                that.show();
            }
            return that;
        };
        this.on('disable', this.hide);
    }
    ch.Collapsible = Collapsible;
})(undefined.ch);
(function(window, ch) {
    'use strict';
    var resized = false,
        scrolled = false,
        requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        }();

    function update() {
        var eve = resized ? ch.onresize : ch.onscroll; // Refresh viewport
        this.refresh(); // Change status
        resized = false;
        scrolled = false;
        /**
         * Event emitted when the dimensions of the viewport changes.
         * @event ch.viewport#resize
         * @example
         * ch.viewport.on('resize', function () {
         *     // Some code here!
         * });
         */
        /**
         * Event emitted when the viewport is scrolled.
         * @event ch.viewport#scroll
         * @example
         * ch.viewport.on('scroll', function () {
         *     // Some code here!
         * });
         */ // Emits the current event
        this.emit(eve);
    }
    /**
     * The Viewport is a component to ease viewport management. You can get the dimensions of the viewport and beyond, which can be quite helpful to perform some checks with JavaScript.
     * @memberof ch
     * @constructor
     * @augments tiny.EventEmitter
     * @returns {viewport} Returns a new instance of Viewport.
     */
    function Viewport() {
        this._init();
    }
    tiny.inherits(Viewport, tiny.EventEmitter);
    /**
     * Initialize a new instance of Viewport.
     * @memberof! ch.Viewport.prototype
     * @function
     * @private
     * @returns {viewport}
     */
    Viewport.prototype._init = function() { // Set emitter to zero for unlimited listeners to avoid the warning in console
        // @see https://nodejs.org/api/events.html#events_emitter_setmaxlisteners_n
        this.setMaxListeners(0);
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        /**
         * Element representing the visible area.
         * @memberof! ch.viewport#element
         * @type {Object}
         */
        this.el = window;
        this.refresh();

        function viewportResize() { // No changing, exit
            if (!resized) {
                resized = true;
                /**
                 * requestAnimationFrame
                 */
                requestAnimFrame(function updateResize() {
                    update.call(that);
                });
            }
        }

        function viewportScroll() { // No changing, exit
            if (!scrolled) {
                scrolled = true;
                /**
                 * requestAnimationFrame
                 */
                requestAnimFrame(function updateScroll() {
                    update.call(that);
                });
            }
        }
        tiny.on(window, ch.onscroll, viewportScroll, false);
        tiny.on(window, ch.onresize, viewportResize, false);
    };
    /**
     * Calculates/updates the client rects of viewport (in pixels).
     * @memberof! ch.Viewport.prototype
     * @function
     * @returns {viewport}
     * @example
     * // Update the client rects of the viewport.
     * ch.viewport.calculateClientRect();
     */
    Viewport.prototype.calculateClientRect = function() {
        /**
         * The current top client rect of the viewport (in pixels).
         * @public
         * @name ch.Viewport#top
         * @type {Number}
         * @example
         * // Checks if the top client rect of the viewport is equal to 0.
         * (ch.viewport.top === 0) ? 'Yes': 'No';
         */
        /**
         * The current left client rect of the viewport (in pixels).
         * @public
         * @name ch.Viewport#left
         * @type {Number}
         * @example
         * // Checks if the left client rect of the viewport is equal to 0.
         * (ch.viewport.left === 0) ? 'Yes': 'No';
         */
        this.top = this.left = 0;
        /**
         * The current bottom client rect of the viewport (in pixels).
         * @public
         * @name ch.Viewport#bottom
         * @type {Number}
         * @example
         * // Checks if the bottom client rect of the viewport is equal to a number.
         * (ch.viewport.bottom === 900) ? 'Yes': 'No';
         */
        this.bottom = Math.max(this.el.innerHeight || 0, document.documentElement.clientHeight);
        /**
         * The current right client rect of the viewport (in pixels).
         * @public
         * @name ch.Viewport#right
         * @type {Number}
         * @example
         * // Checks if the right client rect of the viewport is equal to a number.
         * (ch.viewport.bottom === 1200) ? 'Yes': 'No';
         */
        this.right = Math.max(this.el.innerWidth || 0, document.documentElement.clientWidth);
        return this;
    };
    /**
     * Calculates/updates the dimensions (width and height) of the viewport (in pixels).
     * @memberof! ch.Viewport.prototype
     * @function
     * @returns {viewport}
     * @example
     * // Update the dimensions values of the viewport.
     * ch.viewport.calculateDimensions();
     */
    Viewport.prototype.calculateDimensions = function() {
        this.calculateClientRect();
        /**
         * The current height of the viewport (in pixels).
         * @public
         * @name ch.Viewport#height
         * @type Number
         * @example
         * // Checks if the height of the viewport is equal to a number.
         * (ch.viewport.height === 700) ? 'Yes': 'No';
         */
        this.height = this.bottom;
        /**
         * The current width of the viewport (in pixels).
         * @public
         * @name ch.Viewport#width
         * @type Number
         * @example
         * // Checks if the height of the viewport is equal to a number.
         * (ch.viewport.width === 1200) ? 'Yes': 'No';
         */
        this.width = this.right;
        return this;
    };
    /**
     * Calculates/updates the viewport position.
     * @memberof! ch.Viewport.prototype
     * @function
     * @returns {viewport}
     * @example
     * // Update the offest values of the viewport.
     * ch.viewport.calculateOffset();
     */
    Viewport.prototype.calculateOffset = function() {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var scroll = tiny.scroll();
        /**
         * The offset top of the viewport.
         * @memberof! ch.Viewport#offsetTop
         * @type {Number}
         * @example
         * // Checks if the offset top of the viewport is equal to a number.
         * (ch.viewport.offsetTop === 200) ? 'Yes': 'No';
         */
        this.offsetTop = scroll.top;
        /**
         * The offset left of the viewport.
         * @memberof! ch.Viewport#offsetLeft
         * @type {Number}
         * @example
         * // Checks if the offset left of the viewport is equal to a number.
         * (ch.viewport.offsetLeft === 200) ? 'Yes': 'No';
         */
        this.offsetLeft = scroll.left;
        /**
         * The offset right of the viewport.
         * @memberof! ch.Viewport#offsetRight
         * @type {Number}
         * @example
         * // Checks if the offset right of the viewport is equal to a number.
         * (ch.viewport.offsetRight === 200) ? 'Yes': 'No';
         */
        this.offsetRight = this.left + this.width;
        /**
         * The offset bottom of the viewport.
         * @memberof! ch.Viewport#offsetBottom
         * @type {Number}
         * @example
         * // Checks if the offset bottom of the viewport is equal to a number.
         * (ch.viewport.offsetBottom === 200) ? 'Yes': 'No';
         */
        this.offsetBottom = this.offsetTop + this.height;
        return this;
    };
    /**
     * Rertuns/updates the viewport orientation: landscape or portrait.
     * @memberof! ch.Viewport.prototype
     * @function
     * @returns {viewport}
     * @example
     * // Update the dimensions values of the viewport.
     * ch.viewport.calculateDimensions();
     */
    Viewport.prototype.calculateOrientation = function() {
        /** The viewport orientation: landscape or portrait.
         * @memberof! ch.Viewport#orientation
         * @type {String}
         * @example
         * // Checks if the orientation is "landscape".
         * (ch.viewport.orientation === 'landscape') ? 'Yes': 'No';
         */
        this.orientation = Math.abs(this.el.orientation) === 90 ? 'landscape' : 'portrait';
        return this;
    };
    /**
     * Calculates if an element is completely located in the viewport.
     * @memberof! ch.Viewport.prototype
     * @function
     * @returns {Boolean}
     * @params {HTMLElement} el A given HMTLElement.
     * @example
     * // Checks if an element is in the viewport.
     * ch.viewport.inViewport(HTMLElement) ? 'Yes': 'No';
     */
    Viewport.prototype.inViewport = function(el) {
        var r = el.getBoundingClientRect();
        return r.top > 0 && r.right < this.width && r.bottom < this.height && r.left > 0;
    };
    /**
     * Calculates if an element is visible in the viewport.
     * @memberof! ch.Viewport.prototype
     * @function
     * @returns {Boolean}
     * @params {HTMLElement} el A given HTMLElement.
     * @example
     * // Checks if an element is visible.
     * ch.viewport.isVisisble(HTMLElement) ? 'Yes': 'No';
     */
    Viewport.prototype.isVisible = function(el) {
        var r = el.getBoundingClientRect();
        return r.height >= this.offsetTop;
    };
    /**
     * Upadtes the viewport dimension, viewport positions and orietation.
     * @memberof! ch.Viewport.prototype
     * @function
     * @returns {viewport}
     * @example
     * // Refreshs the viewport.
     * ch.viewport.refresh();
     */
    Viewport.prototype.refresh = function() {
        this.calculateDimensions();
        this.calculateOffset();
        this.calculateOrientation();
        return this;
    }; // Creates an instance of the Viewport into ch namespace.
    ch.viewport = new Viewport();
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * The Positioner lets you position elements on the screen and changes its positions.
     * @memberof ch
     * @constructor
     * @param {Object} options Configuration object.
     * @param {String} options.target A HTMLElement that reference to the element to be positioned.
     * @param {String} [options.reference] A HTMLElement that it's a reference to position and size of element that will be considered to carry out the position. If it isn't defined through configuration, it will be the ch.viewport.
     * @param {String} [options.side] The side option where the target element will be positioned. You must use: "left", "right", "top", "bottom" or "center". Default: "center".
     * @param {String} [options.align] The align options where the target element will be positioned. You must use: "left", "right", "top", "bottom" or "center". Default: "center".
     * @param {Number} [options.offsetX] Distance to displace the target horizontally. Default: 0.
     * @param {Number} [options.offsetY] Distance to displace the target vertically. Default: 0.
     * @param {String} [options.position] Thethe type of positioning used. You must use: "absolute" or "fixed". Default: "fixed".
     * @requires ch.Viewport
     * @returns {positioner} Returns a new instance of Positioner.
     * @example
     * // Instance the Positioner It requires a little configuration.
     * // The default behavior place an element center into the Viewport.
     * var positioned = new ch.Positioner({
     *     'target': document.querySelector('.target'),
     *     'reference': document.querySelector('.reference'),
     *     'side': 'top',
     *     'align': 'left',
     *     'offsetX': 20,
     *     'offsetY': 10
     * });
     * @example
     * // offsetX: The Positioner could be configurated with an offsetX.
     * // This example show an element displaced horizontally by 10px of defined position.
     * var positioned = new ch.Positioner({
     *     'target': document.querySelector('.target'),
     *     'reference': document.querySelector('.reference'),
     *     'side': 'top',
     *     'align': 'left',
     *     'offsetX': 10
     * });
     * @example
     * // offsetY: The Positioner could be configurated with an offsetY.
     * // This example show an element displaced vertically by 10px of defined position.
     * var positioned = new ch.Positioner({
     *     'target': document.querySelector('.target'),
     *     'reference': document.querySelector('.reference'),
     *     'side': 'top',
     *     'align': 'left',
     *     'offsetY': 10
     * });
     * @example
     * // positioned: The positioner could be configured to work with fixed or absolute position value.
     * var positioned = new ch.Positioner({
     *     'target': document.querySelector('.target'),
     *     'reference': document.querySelector('.reference'),
     *     'position': 'fixed'
     * });
     */
    function Positioner(options) {
        if (options === undefined) {
            throw new window.Error('ch.Positioner: Expected options defined.');
        } // Creates its private options
        this._options = tiny.clone(this._defaults); // Init
        this._configure(options);
    }
    /**
     * The name of the component.
     * @memberof! ch.Positioner.prototype
     * @type {String}
     */
    Positioner.prototype.name = 'positioner';
    /**
     * Returns a reference to the Constructor function that created the instance's prototype.
     * @memberof! ch.Positioner.prototype
     * @function
     * @private
     */
    Positioner.prototype._constructor = Positioner;
    /**
     * Configuration by default.
     * @type {Object}
     * @private
     */
    Positioner.prototype._defaults = {
        'offsetX': 0,
        'offsetY': 0,
        'side': 'center',
        'align': 'center',
        'reference': ch.viewport,
        'position': 'fixed'
    };
    /**
     * Configures the positioner instance with a given options.
     * @memberof! ch.Positioner.prototype
     * @function
     * @private
     * @returns {positioner}
     * @params {Object} options A configuration object.
     */
    Positioner.prototype._configure = function(options) { // Merge user options with its options
        tiny.extend(this._options, options);
        this._options.offsetX = parseInt(this._options.offsetX, 10);
        this._options.offsetY = parseInt(this._options.offsetY, 10);
        /**
         * Reference to the element to be positioned.
         * @type {HTMLElement}
         */
        this.target = options.target || this.target;
        /**
         * It's a reference to position and size of element that will be considered to carry out the position.
         * @type {HTMLElement}
         */
        this.reference = options.reference || this.reference;
        this._reference = this._options.reference;
        this.target.style.position = this._options.position;
        return this;
    };
    /**
     * Updates the current position with a given options
     * @memberof! ch.Positioner.prototype
     * @function
     * @returns {positioner}
     * @params {Object} options A configuration object.
     * @example
     * // Updates the current position.
     * positioned.refresh();
     * @example
     * // Updates the current position with new offsetX and offsetY.
     * positioned.refresh({
     *     'offestX': 100,
     *     'offestY': 10
     * });
     */
    Positioner.prototype.refresh = function(options) {
        if (options !== undefined) {
            this._configure(options);
        }
        if (this._reference !== ch.viewport) {
            this._calculateReference();
        }
        this._calculateTarget(); // the object that stores the top, left reference to set to the target
        this._setPoint();
        return this;
    };
    /**
     * Calculates the reference (element or ch.viewport) of the position.
     * @memberof! ch.Positioner.prototype
     * @function
     * @private
     * @returns {positioner}
     */
    Positioner.prototype._calculateReference = function() {
        var reference = this.reference,
            offset;
        reference.setAttribute('data-side', this._options.side);
        reference.setAttribute('data-align', this._options.align);
        this._reference = this._getOuterDimensions(reference);
        if (reference.offsetParent === this.target.offsetParent) {
            this._reference.left = reference.offsetLeft;
            this._reference.top = reference.offsetTop;
        } else {
            offset = tiny.offset(reference);
            this._reference.left = offset.left;
            this._reference.top = offset.top;
        }
        return this;
    };
    /**
     * Calculates the positioned element.
     * @memberof! ch.Positioner.prototype
     * @function
     * @private
     * @returns {positioner}
     */
    Positioner.prototype._calculateTarget = function() {
        var target = this.target;
        target.setAttribute('data-side', this._options.side);
        target.setAttribute('data-align', this._options.align);
        this._target = this._getOuterDimensions(target);
        return this;
    };
    /**
     * Get the current outer dimensions of an element.
     *
     * @memberof ch.Positioner.prototype
     * @param {HTMLElement} el A given HTMLElement.
     * @returns {Object}
     */
    Positioner.prototype._getOuterDimensions = function(el) {
        var obj = el.getBoundingClientRect();
        return {
            'width': obj.right - obj.left,
            'height': obj.bottom - obj.top
        };
    };
    /**
     * Calculates the points.
     * @memberof! ch.Positioner.prototype
     * @function
     * @private
     * @returns {positioner}
     */
    Positioner.prototype._setPoint = function() {
        var side = this._options.side,
            orientation = side === 'top' || side === 'bottom' ? 'horizontal' : side === 'right' || side === 'left' ? 'vertical' : 'center',
            coors, orientationMap; // take the side and calculate the alignment and make the CSSpoint
        if (orientation === 'center') { // calculates the coordinates related to the center side to locate the target
            coors = {
                'top': this._reference.top + (this._reference.height / 2 - this._target.height / 2),
                'left': this._reference.left + (this._reference.width / 2 - this._target.width / 2)
            };
        } else if (orientation === 'horizontal') { // calculates the coordinates related to the top or bottom side to locate the target
            orientationMap = {
                'left': this._reference.left,
                'center': this._reference.left + (this._reference.width / 2 - this._target.width / 2),
                'right': this._reference.left + this._reference.width - this._target.width,
                'top': this._reference.top - this._target.height,
                'bottom': this._reference.top + this._reference.height
            };
            coors = {
                'top': orientationMap[side],
                'left': orientationMap[this._options.align]
            };
        } else { // calculates the coordinates related to the right or left side to locate the target
            orientationMap = {
                'top': this._reference.top,
                'center': this._reference.top + (this._reference.height / 2 - this._target.height / 2),
                'bottom': this._reference.top + this._reference.height - this._target.height,
                'right': this._reference.left + this._reference.width,
                'left': this._reference.left - this._target.width
            };
            coors = {
                'top': orientationMap[this._options.align],
                'left': orientationMap[side]
            };
        }
        coors.top += this._options.offsetY;
        coors.left += this._options.offsetX;
        this.target.style.top = coors.top + 'px';
        this.target.style.left = coors.left + 'px';
        return this;
    };
    ch.Positioner = Positioner;
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    var document = window.document,
        codeMap = {
            '8': ch.onkeybackspace,
            '9': ch.onkeytab,
            '13': ch.onkeyenter,
            '27': ch.onkeyesc,
            '37': ch.onkeyleftarrow,
            '38': ch.onkeyuparrow,
            '39': ch.onkeyrightarrow,
            '40': ch.onkeydownarrow
        },
        /**
         * Shortcuts
         * @memberof ch
         * @namespace
         */
        shortcuts = {
            '_active': null,
            '_queue': [],
            '_collection': {},
            /**
             * Add a callback to a shortcut with given name.
             * @param {(ch.onkeybackspace | ch.onkeytab | ch.onkeyenter | ch.onkeyesc | ch.onkeyleftarrow | ch.onkeyuparrow | ch.onkeyrightarrow | ch.onkeydownarrow)} shortcut Shortcut to subscribe.
             * @param {String} name A name to add in the collection.
             * @param {Function} callback A given function.
             * @returns {Object} Retuns the ch.shortcuts.
             * @example
             * // Add a callback to ESC key with "component" name.
             * ch.shortcuts.add(ch.onkeyesc, 'component', component.hide);
             */
            'add': function add(shortcut, name, callback) {
                if (this._collection[name] === undefined) {
                    this._collection[name] = {};
                }
                if (this._collection[name][shortcut] === undefined) {
                    this._collection[name][shortcut] = [];
                }
                this._collection[name][shortcut].push(callback);
                return this;
            },
            /**
             * Removes a callback from a shortcut with given name.
             * @param {String} name A name to remove from the collection.
             * @param {(ch.onkeybackspace | ch.onkeytab | ch.onkeyenter | ch.onkeyesc | ch.onkeyleftarrow | ch.onkeyuparrow | ch.onkeyrightarrow | ch.onkeydownarrow)} [shortcut] Shortcut to unsubscribe.
             * @param {Function} callback A given function.
             * @returns {Object} Retuns the ch.shortcuts.
             * @example
             * // Remove a callback from ESC key with "component" name.
             * ch.shortcuts.remove(ch.onkeyesc, 'component', component.hide);
             */
            'remove': function remove(name, shortcut, callback) {
                var evt, evtCollection, evtCollectionLenght;
                if (name === undefined) {
                    throw new Error('Shortcuts - "remove(name, shortcut, callback)": "name" parameter must be defined.');
                }
                if (shortcut === undefined) {
                    delete this._collection[name];
                    return this;
                }
                if (callback === undefined) {
                    delete this._collection[name][shortcut];
                    return this;
                }
                evtCollection = this._collection[name][shortcut];
                evtCollectionLenght = evtCollection.length;
                for (evt = 0; evt < evtCollectionLenght; evt += 1) {
                    if (evtCollection[evt] === callback) {
                        evtCollection.splice(evt, 1);
                    }
                }
                return this;
            },
            /**
             * Turn on shortcuts associated to a given name.
             * @param {String} name A given name from the collection.
             * @returns {Object} Retuns the ch.shortcuts.
             * @example
             * // Turn on shortcuts associated to "component" name.
             * ch.shortcuts.on('component');
             */
            'on': function on(name) {
                var queueLength = this._queue.length,
                    item = queueLength - 1; // check if the instance exist and move the order, adds it at the las position and removes the current
                for (item; item >= 0; item -= 1) {
                    if (this._queue[item] === name) {
                        this._queue.splice(item, 1);
                    }
                }
                this._queue.push(name);
                this._active = name;
                return this;
            },
            /**
             * Turn off shortcuts associated to a given name.
             * @param {String} name A given name from the collection.
             * @returns {Object} Retuns the ch.shortcuts.
             * @example
             * // Turn off shortcuts associated to "component" name.
             * ch.shortcuts.off('component');
             */
            'off': function off(name) {
                var queueLength = this._queue.length,
                    item = queueLength - 1;
                for (item; item >= 0; item -= 1) {
                    if (this._queue[item] === name) { // removes the instance that I'm setting off
                        this._queue.splice(item, 1); // the queue is full
                        if (this._queue.length > 0) {
                            this._active = this._queue[this._queue.length - 1];
                        } else { // the queue no has elements
                            this._active = null;
                        }
                    }
                }
                return this;
            }
        },
        shortcutsEmitter = function shortcutsEmitter(event) {
            var keyCode = event.keyCode.toString(),
                shortcut = codeMap[keyCode],
                callbacks, callbacksLenght, i = 0;
            if (shortcut !== undefined && shortcuts._active !== null) {
                callbacks = shortcuts._collection[shortcuts._active][shortcut];
                event.shortcut = shortcut;
                if (callbacks !== undefined) {
                    callbacksLenght = callbacks.length;
                    for (i = 0; i < callbacksLenght; i += 1) {
                        callbacks[i](event);
                    }
                }
            }
        };
    tiny.on(document, 'keydown', shortcutsEmitter);
    ch.shortcuts = shortcuts;
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    var uid = 0;
    /**
     * Base class for all components.
     *
     * @memberof ch
     * @constructor
     * @augments tiny.EventEmitter
     * @param {HTMLElement} [el] It must be a HTMLElement.
     * @param {Object} [options] Configuration options.
     * @returns {component} Returns a new instance of Component.
     * @example
     * // Create a new Component.
     * var component = new ch.Component();
     * var component = new ch.Component('.my-component', {'option': 'value'});
     * var component = new ch.Component('.my-component');
     * var component = new ch.Component({'option': 'value'});
     */
    function Component(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Expandable is created.
             * @memberof! ch.Expandable.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Component#ready
         * @example
         * // Subscribe to "ready" event.
         * component.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    }
    tiny.inherits(Component, tiny.EventEmitter);
    /**
     * The name of a component.
     * @memberof! ch.Component.prototype
     * @type {String}
     */
    Component.prototype.name = 'component';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Component.prototype
     * @function
     */
    Component.prototype.constructor = Component;
    /**
     * Initialize a new instance of Component and merge custom options with defaults options.
     * @memberof! ch.Component.prototype
     * @function
     * @private
     * @returns {component}
     */
    Component.prototype._init = function(el, options) { // Set emitter to zero for unlimited listeners to avoid the warning in console
        // @see https://nodejs.org/api/events.html#events_emitter_setmaxlisteners_n
        this.setMaxListeners(0); // Clones defaults or creates a defaults object
        var defaults = this._defaults ? tiny.clone(this._defaults) : {};
        if (el === null) {
            throw new Error('The "el" parameter is not present in the DOM');
        }
        /**
         * A unique id to identify the instance of a component.
         * @type {Number}
         */
        this.uid = uid += 1; // el is HTMLElement
        // IE8 and earlier don't define the node type constants, 1 === document.ELEMENT_NODE
        if (el !== undefined && el.nodeType !== undefined && el.nodeType === 1) {
            this._el = el; // set the uid to the element to help search for the instance in the collection instances
            this._el.setAttribute('data-uid', this.uid); // we extend defaults with options parameter
            this._options = tiny.extend(defaults, options); // el is an object configuration
        } else if (el === undefined || el.nodeType === undefined && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object') { // creates a empty element becouse the user not set a DOM elment to use, but we requires one
            // this._el = document.createElement('div');
            // we extend defaults with the object that is in el parameter object
            this._options = tiny.extend(defaults, el);
        }
        /**
         * Indicates if a component is enabled.
         * @type {Boolean}
         * @private
         */
        this._enabled = true;
        /**
         * Stores all instances created
         * @type {Object}
         * @public
         */
        ch.instances = ch.instances || {};
        ch.instances[this.uid] = this;
    };
    /**
     * Adds functionality or abilities from other classes.
     * @memberof! ch.Component.prototype
     * @function
     * @returns {component}
     * @params {...String} var_args The name of the abilities to will be used.
     * @example
     * // You can require some abilitiest to use in your component.
     * // For example you should require the collpasible abitliy.
     * var component = new Component(element, options);
     * component.require('Collapsible');
     */
    Component.prototype.require = function() {
        var arg, i = 0,
            len = arguments.length;
        for (i; i < len; i += 1) {
            arg = arguments[i];
            if (this[arg.toLowerCase()] === undefined) {
                ch[arg].call(this);
            }
        }
        return this;
    };
    /**
     * Enables an instance of Component.
     * @memberof! ch.Component.prototype
     * @function
     * @returns {component}
     * @example
     * // Enabling an instance of Component.
     * component.enable();
     */
    Component.prototype.enable = function() {
        this._enabled = true;
        /**
         * Emits when a component is enabled.
         * @event ch.Component#enable
         * @example
         * // Subscribe to "enable" event.
         * component.on('enable', function () {
         *     // Some code here!
         * });
         */
        this.emit('enable');
        return this;
    };
    /**
     * Disables an instance of Component.
     * @memberof! ch.Component.prototype
     * @function
     * @returns {component}
     * @example
     * // Disabling an instance of Component.
     * component.disable();
     */
    Component.prototype.disable = function() {
        this._enabled = false;
        /**
         * Emits when a component is disable.
         * @event ch.Component#disable
         * @example
         * // Subscribe to "disable" event.
         * component.on('disable', function () {
         *     // Some code here!
         * });
         */
        this.emit('disable');
        return this;
    };
    /**
     * Destroys an instance of Component and remove its data from asociated element.
     * @memberof! ch.Component.prototype
     * @function
     * @example
     * // Destroy a component
     * component.destroy();
     * // Empty the component reference
     * component = undefined;
     */
    Component.prototype.destroy = function() {
        this.disable();
        if (this._el !== undefined) {
            delete ch.instances[this._el.getAttribute('data-uid')];
            this._el.removeAttribute('data-uid');
        }
        /**
         * Emits when a component is destroyed.
         * @event ch.Component#destroy
         * @exampleDescription
         * @example
         * // Subscribe to "destroy" event.
         * component.on('destroy', function () {
         *     // Some code here!
         * });
         */
        this.emit('destroy');
        return;
    };
    ch.Component = Component;
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * Form is a controller of DOM's HTMLFormElement.
     * @memberof ch
     * @constructor
     * @augments ch.Component
     * @requires ch.Validations
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Form.
     * @param {Object} [options] Options to customize an instance.
     * @param {Object} [options.messages] A collections of validations messages.
     * @param {String} [options.messages.required] A validation message.
     * @param {String} [options.messages.string] A validation message.
     * @param {String} [options.messages.url] A validation message.
     * @param {String} [options.messages.email] A validation message.
     * @param {String} [options.messages.maxLength] A validation message.
     * @param {String} [options.messages.minLength] A validation message.
     * @param {String} [options.messages.custom] A validation message.
     * @param {String} [options.messages.number] A validation message.
     * @param {String} [options.messages.min] A validation message.
     * @param {String} [options.messages.max] A validation message.
     * @returns {form} Returns a new instance of Form.
     * @example
     * // Create a new Form.
     * var form = new ch.Form(el, [options]);
     * @example
     * // Create a new Form with custom messages.
     * var form = new ch.Form({
     *     'messages': {
     *          'required': 'Some message!',
     *          'email': 'Another message!'
     *     }
     * });
     */
    function Form(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        that._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Form is created.
             * @memberof! ch.Form.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * It emits an event when the form is ready to use.
         * @event ch.Form#ready
         * @example
         * // Subscribe to "ready" event.
         * form.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Form, ch.Component);
    var parent = Form.super_.prototype;
    /**
     * The name of the component.
     * @memberof! ch.Form.prototype
     * @type {String}
     */
    Form.prototype.name = 'form';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Form.prototype
     * @function
     */
    Form.prototype.constructor = Form;
    /**
     * Initialize a new instance of Form and merge custom options with defaults options.
     * @memberof! ch.Form.prototype
     * @function
     * @private
     * @returns {form}
     */
    Form.prototype._init = function(el, options) { // Call to its parent init method
        parent._init.call(this, el, options);
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        /**
         * A collection of active errors.
         * @type {Array}
         */
        this.errors = [];
        /**
         * Collection of defined messages.
         * @type {Object}
         * @private
         */
        this._messages = this._options.messages || {};
        /**
         * A collection of validations instances.
         * @type {Array}
         */
        this.validations = [];
        /**
         * The form container.
         * @type {HTMLElement}
         */
        this.container = this._el; // Add classname
        tiny.addClass(this.container, 'ch-form'); // Disable HTML5 browser-native validations
        this.container.setAttribute('novalidate', 'novalidate'); // Bind the submit
        tiny.on(this.container, 'submit', function(event) { // Runs validations
            that.validate(event);
        }); // Bind the reset
        if (this.container.querySelector('input[type="reset"]')) {
            tiny.on(this.container.querySelector('input[type="reset"]'), ch.onpointertap, function(event) {
                event.preventDefault();
                that.reset();
            });
        } // Stub for EventEmitter to prevent the errors throwing
        this.on('error', function() {}); // Clean validations
        this.on('disable', this.clear);
        return this;
    };
    /**
     * Executes all validations.
     * @memberof! ch.Form.prototype
     * @function
     * @returns {form}
     */
    Form.prototype.validate = function(event) {
        if (!this._enabled) {
            return this;
        }
        /**
         * It emits an event when the form will be validated.
         * @event ch.Form#beforevalidate
         * @example
         * // Subscribe to "beforevalidate" event.
         * component.on('beforevalidate', function () {
         *     // Some code here!
         * });
         */
        this.emit('beforevalidate');
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            i = 0,
            j = that.validations.length,
            validation, firstError, firstErrorVisible, triggerError;
        this.errors.length = 0; // Run validations
        for (i; i < j; i += 1) {
            validation = that.validations[i]; // Validate
            validation.validate(); // Store validations with errors
            if (validation.isShown()) {
                that.errors.push(validation);
            }
        } // Is there's an error
        if (that.errors.length > 0) {
            firstError = that.errors[0];
            firstErrorVisible = firstError.trigger; // Find the closest visible parent if current element is hidden
            while (tiny.css(firstErrorVisible, 'display') === 'none' && firstErrorVisible !== document.documentElement) {
                firstErrorVisible = firstErrorVisible.parentElement;
            }
            firstErrorVisible.scrollIntoView(); // Issue UI-332: On validation must focus the first field with errors.
            // Doc: http://wiki.ml.com/display/ux/Mensajes+de+error
            triggerError = firstError.trigger;
            if (triggerError.tagName === 'DIV') {
                firstError.trigger.querySelector('input:first-child').focus();
            }
            if (triggerError.type !== 'hidden' || triggerError.tagName === 'SELECT') {
                triggerError.focus();
            }
            if (event && event.preventDefault) {
                event.preventDefault();
            }
            /**
             * It emits an event when a form has got errors.
             * @event ch.Form#error
             * @example
             * // Subscribe to "error" event.
             * form.on('error', function (errors) {
             *     console.log(errors.length);
             * });
             */
            this.emit('error', this.errors);
        } else {
            /**
             * It emits an event when a form hasn't got errors.
             * @event ch.Form#success
             * @example
             * // Subscribe to "success" event.
             * form.on("submit",function () {
             *     // Some code here!
             * });
             * @example
             * // Subscribe to "success" event and prevent the submit event.
             * form.on("submit",function (event) {
             *     event.preventDefault();
             *     // Some code here!
             * });
             */
            this.emit('success', event);
        }
        return this;
    };
    /**
     * Checks if the form has got errors but it doesn't show bubbles.
     * @memberof! ch.Form.prototype
     * @function
     * @returns {Boolean}
     * @example
     * // Checks if a form has errors and do something.
     * if (form.hasError()) {
     *     // Some code here!
     * };
     */
    Form.prototype.hasError = function() {
        if (!this._enabled) {
            return false;
        }
        this.errors.length = 0;
        var i = 0,
            j = this.validations.length,
            validation; // Run hasError
        for (i; i < j; i += 1) {
            validation = this.validations[i];
            if (validation.hasError()) {
                this.errors.push(validation);
            }
        }
        return this.errors.length > 0;
    };
    /**
     * Clear all active errors.
     * @memberof! ch.Form.prototype
     * @function
     * @returns {form}
     * @example
     * // Clear active errors.
     * form.clear();
     */
    Form.prototype.clear = function() {
        var i = 0,
            j = this.validations.length;
        for (i; i < j; i += 1) {
            this.validations[i].clear();
        }
        /**
         * It emits an event when the form is cleaned.
         * @event ch.Form#clear
         * @example
         * // Subscribe to "clear" event.
         * form.on('clear', function () {
         *     // Some code here!
         * });
         */
        this.emit('clear');
        return this;
    };
    /**
     * Clear all active errors and executes the reset() native mehtod.
     * @memberof! ch.Form.prototype
     * @function
     * @returns {form}
     * @example
     * // Resets form fields and clears active errors.
     * form.reset();
     */
    Form.prototype.reset = function() { // Clears all shown validations
        this.clear(); // Executes the native reset() method
        this._el.reset();
        /**
         * It emits an event when a form resets its fields.
         * @event ch.Form#reset
         * @example
         * // Subscribe to "reset" event.
         * form.on('reset', function () {
         *     // Some code here!
         * });
         */
        this.emit('reset');
        return this;
    };
    /**
     * Destroys a Form instance.
     * @memberof! ch.Form.prototype
     * @function
     * @example
     * // Destroy a form
     * form.destroy();
     * // Empty the form reference
     * form = undefined;
     */
    Form.prototype.destroy = function() { // this.$container.off('.form')
        this.container.removeAttribute('novalidate');
        this.validations.forEach(function(e) {
            e.destroy();
        });
        parent.destroy.call(this);
        return;
    }; // Factorize
    ch.factory(Form);
})(undefined, undefined.ch);
(function(ch) {
    'use strict'; // Private Members
    var conditions = {
        'string': {
            'fn': function fn(value) { // the following regular expression has the utf code for the lating characters
                // the ranges are A,EI,O,U,a,ei,o,u,ç,Ç please for reference see http://www.fileformat.info/info/charset/UTF-8/list.htm
                return (/^([a-zA-Z\u00C0-\u00C4\u00C8-\u00CF\u00D2-\u00D6\u00D9-\u00DC\u00E0-\u00E4\u00E8-\u00EF\u00F2-\u00F6\u00E9-\u00FC\u00C7\u00E7\s]*)$/i.test(value));
            },
            'message': 'Use only letters.'
        },
        'email': {
            'fn': function fn(value) {
                return (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(value));
            },
            'message': 'Use a valid e-mail such as name@example.com.'
        },
        'url': {
            'fn': function fn(value) {
                return (/^((https?|ftp|file):\/\/|((www|ftp)\.)|(\/|.*\/)*)[a-z0-9-]+((\.|\/)[a-z0-9-]+)+([/?].*)?$/i.test(value));
            },
            'message': 'It must be a valid URL.'
        },
        'minLength': {
            'fn': function fn(a, b) {
                return a.length >= b;
            },
            'message': 'Enter at least {#num#} characters.'
        },
        'maxLength': {
            'fn': function fn(a, b) {
                return a.length <= b;
            },
            'message': 'The maximum amount of characters is {#num#}.'
        },
        'number': {
            'fn': function fn(value) {
                return (/^(-?[0-9]+)$/i.test(value));
            },
            'message': 'Use only numbers.'
        },
        'max': {
            'fn': function fn(a, b) {
                return a <= b;
            },
            'message': 'The amount must be smaller than {#num#}.'
        },
        'min': {
            'fn': function fn(a, b) {
                return a >= b;
            },
            'message': 'The amount must be higher than {#num#}.'
        },
        'required': {
            'fn': function fn(value) {
                var tag = tiny.hasClass(this.trigger, 'ch-form-options') ? 'OPTIONS' : this._el.tagName,
                    validated;
                switch (tag) {
                    case 'OPTIONS':
                        validated = this.trigger.querySelectorAll('input:checked').length !== 0;
                        break;
                    case 'SELECT':
                        validated = value !== '-1' && value !== '';
                        break; // INPUTS and TEXTAREAS
                    default:
                        validated = value.replace(/^\s+|\s+$/g, '').length !== 0;
                        break;
                }
                return validated;
            },
            'message': 'Fill in this information.'
        },
        'custom': { // I don't have pre-conditions, comes within conf.fn argument
            'message': 'Error'
        }
    };
    /**
     * Condition utility.
     * @memberof ch
     * @constructor
     * @requires ch.Validation
     * @param {Array} [condition] A conditions to validate.
     * @param {String} [condition.name] The name of the condition.
     * @param {String} [condition.message] The given error message to the condition.
     * @param {String} [condition.fn] The method to validate a given condition.
     * @returns {condition} Returns a new instance of Condition.
     * @example
     * // Create a new condition object with patt.
     * var condition = ch.Condition({
     *     'name': 'string',
     *     'patt': /^([a-zA-Z\u00C0-\u00C4\u00C8-\u00CF\u00D2-\u00D6\u00D9-\u00DC\u00E0-\u00E4\u00E8-\u00EF\u00F2-\u00F6\u00E9-\u00FC\u00C7\u00E7\s]*)$/,
     *     'message': 'Some message here!'
     * });
     * @example
     * //Create a new condition object with expr.
     * var condition = ch.Condition({
     *     'name': 'maxLength',
     *     'patt': function(a,b) { return a.length <= b },
     *     'message': 'Some message here!',
     *     'value': 4
     * });
     * @example
     * // Create a new condition object with func.
     * var condition = ch.Condition({
     *     'name': 'custom',
     *     'patt': function (value) {
     *         if (value === 'ChicoUI') {
     *
     *             // Some code here!
     *
     *             return true;
     *         };
     *
     *         return false;
     *     },
     *     'message': 'Your message here!'
     * });
     */
    function Condition(condition) {
        tiny.extend(this, conditions[condition.name], condition); // replaces the condition default message in the following conditions max, min, minLenght, maxLenght
        if (this.name === 'min' || this.name === 'max' || this.name === 'minLength' || this.name === 'maxLength') {
            this.message = this.message.replace('{#num#}', this.num);
        }
        this._enabled = true;
        return this;
    }
    /**
     * The name of the component.
     * @memberof! ch.Condition.prototype
     * @type {String}
     */
    Condition.prototype.name = 'condition';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Condition.prototype
     * @function
     */
    Condition.prototype.constructor = Condition;
    /**
     * Enables an instance of condition.
     * @memberof! ch.Condition.prototype
     * @function
     * @returns {condition}
     * @example
     * // Enabling an instance of Condition.
     * condition.enable();
     * @example
     * // Enabling a condition.
     * condition.enable();
     */
    Condition.prototype.enable = function() {
        this._enabled = true;
        return this;
    };
    /**
     * Disables an instance of a condition.
     * @memberof! ch.Condition.prototype
     * @function
     * @returns {condition}
     * @example
     * // Disabling an instance of Condition.
     * condition.disable();
     * @example
     * // Disabling a condition.
     * condition.disable();
     */
    Condition.prototype.disable = function() {
        this._enabled = false;
        return this;
    };
    /**
     * Enables an instance of condition.
     * @memberof! ch.Condition.prototype
     * @function
     * @param {(String | Number)} value A given value.
     * @param {condition} validation A given validation to execute.
     * @returns {Boolean} Returns a boolean indicating whether the condition fails or not.
     * @example
     * // Testing a condition.
     * condition.test('foobar', validationA);
     */
    Condition.prototype.test = function(value, validation) {
        if (!this._enabled) {
            return true;
        }
        return this.fn.call(validation, value, this.num);
    };
    ch.Condition = Condition;
})(undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * Validation is an engine to validate HTML forms elements.
     * @memberof ch
     * @constructor
     * @augments ch.Component
     * @requires ch.Condition
     * @requires ch.Form
     * @requires ch.Bubble
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Validation.
     * @param {Object} [options] Options to customize an instance.
     * @param {Array} [options.conditions] A collection of conditions to validate.
     * @param {String} [options.conditions.name] The name of the condition.
     * @param {String} [options.conditions.message] The given error message to the condition.
     * @param {String} [options.conditions.fn] The method to validate a given condition.
     * @param {HTMLElement} [options.reference] It's a reference to position and size of element that will be considered to carry out the position.
     * @param {String} [options.side] The side option where the target element will be positioned. Default: "right".
     * @param {String} [options.align] The align options where the target element will be positioned. Default: "top".
     * @param {Number} [options.offsetX] Distance to displace the target horizontally. Default: 10.
     * @param {Number} [options.offsetY] Distance to displace the target vertically. Default: 0.
     * @param {String} [options.position] The type of positioning used. Default: "absolute".
     * @returns {validation} Returns a new instance of Validation.
     * @example
     * // Create a new Validation.
     * var validation = new ch.Validation(document.querySelector('.name-field'), [options]);
     * @example
     * // Create a validation with with custom options.
     * var validation = new ch.Validation({
     *     'conditions': [
     *         {
     *             'name': 'required',
     *             'message': 'Please, fill in this information.'
     *         },
     *         {
     *             'name': 'custom-email',
     *             'fn': function (value) { return value === "customail@custom.com"; },
     *             'message': 'Use a valid e-mail such as name@custom.com.'
     *         }
     *     ],
     *     'offsetX': 0,
     *     'offsetY': 10,
     *     'side': 'bottom',
     *     'align': 'left'
     * });
     */
    function Validation(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Validation is created.
             * @memberof! ch.Validation.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Validation#ready
         * @example
         * // Subscribe to "ready" event.
         * validation.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Validation, ch.Component);
    var parent = Validation.super_.prototype, // Creates methods enable and disable into the prototype.
        methods = ['enable', 'disable'],
        len = methods.length;

    function createMethods(method) {
        Validation.prototype[method] = function(condition) {
            var key; // Specific condition
            if (condition !== undefined && this.conditions[condition] !== undefined) {
                this.conditions[condition][method]();
            } else { // all conditions
                for (key in this.conditions) {
                    if (this.conditions[key] !== undefined) {
                        this.conditions[key][method]();
                    }
                }
                parent[method].call(this);
            }
            return this;
        };
    }
    /**
     * The name of the component.
     * @memberof! ch.Validation.prototype
     * @type {String}
     */
    Validation.prototype.name = 'validation';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Validation.prototype
     * @function
     */
    Validation.prototype.constructor = Validation;
    /**
     * Configuration by default.
     * @type {Object}
     * @private
     */
    Validation.prototype._defaults = {
        'offsetX': 10
    };
    /**
     * Initialize a new instance of Validation and merge custom options with defaults options.
     * @memberof! ch.Validation.prototype
     * @function
     * @private
     * @returns {validation}
     */
    Validation.prototype._init = function(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        parent._init.call(this, el, options);
        /**
         * The validation trigger.
         * @type {HTMLElement}
         */
        this.trigger = this._el;
        /**
         * The validation container.
         * @type {HTMLElement}
         */
        this._configureContainer();
        /**
         * The collection of conditions.
         * @type {Object}
         */
        this.conditions = {}; // Merge conditions
        this._mergeConditions(options.conditions);
        /**
         * Flag that let you know if there's a validation going on.
         * @type {Boolean}
         * @private
         */
        this._shown = false;
        /**
         * The current error. If the validations has not error is "null".
         * @type {Object}
         */
        this.error = null;
        this // Clean the validation if is shown;
            .on('disable', this.clear);
        this.on('error', this._handleError);
        /**
         * Reference to a Form instance. If there isn't any, the Validation instance will create one.
         * @type {form}
         */
        this.form = ch.instances[tiny.parent(that.trigger, 'form').getAttribute('data-uid')] || new ch.Form(tiny.parent(that.trigger, 'form'));
        this.form.validations.push(this);
        /**
         * Set a validation event to add listeners.
         * @private
         */
        this._validationEvent = tiny.hasClass(this.trigger, 'ch-form-options') || this._el.tagName === 'SELECT' || this._el.tagName === 'INPUT' && this._el.type === 'range' ? 'change' : 'blur';
        return this;
    };
    /**
     * Merges the collection of conditions with a given conditions.
     * @function
     * @private
     */
    Validation.prototype._mergeConditions = function(conditions) {
        var i = 0,
            j = conditions.length;
        for (i; i < j; i += 1) {
            this.conditions[conditions[i].name] = new ch.Condition(conditions[i]);
        }
        return this;
    };
    /**
     * Validates the value of $el.
     * @memberof! ch.Validation.prototype
     * @function
     * @returns {validation}
     */
    Validation.prototype.validate = function() {
        if (this.hasError()) {
            this._error();
        } else {
            this._success();
        }
        return this;
    };
    /**
     * If the validation has got an error executes this function.
     * @private
     */
    Validation.prototype._error = function() {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            previousValue; // It must happen only once.
        tiny.on(this.trigger, this._validationEvent, function() {
            if (previousValue !== this.value || that._validationEvent === 'change' && that.isShown()) {
                previousValue = this.value;
                that.validate();
            }
            if (that.conditions.required === undefined && this.value === '') {
                that.clear();
            }
        });
        /**
         * It emits an error event when a validation got an error.
         * @event ch.Validation#error
         *
         * @example
         * // Subscribe to "error" event.
         * validation.on('error', function (errors) {
         *     console.log(errors.length);
         * });
         */
        this.emit('error', this.error);
        return this;
    };
    /**
     * Internal error handler, shows the errors when needed
     *
     * @param err {Object} A ch.Validation#error object that contain the error message and the error condition
     * @private
     */
    Validation.prototype._handleError = function(err) {
        var that = this;
        if (!that._previousError.condition || !that._shown) {
            if (that._el.nodeName === 'INPUT' || that._el.nodeName === 'TEXTAREA') {
                tiny.addClass(that.trigger, 'ch-validation-error');
            }
            that._showErrorMessage(err.message || 'Error');
        }
        if (err.condition !== that._previousError.condition) {
            that._showErrorMessage(err.message || that.form._messages[err.condition] || 'Error');
        }
        that._shown = true;
    };
    /**
     * If the validation hasn't got an error executes this function.
     * @private
     */
    Validation.prototype._success = function() { // Status OK (with previous error) this._previousError
        if (this._shown || !this._enabled) { // Public status OK
            this._shown = false;
        }
        this.trigger.removeAttribute('aria-label');
        tiny.removeClass(this.trigger, 'ch-validation-error');
        this._hideErrorMessage();
        /**
         * It emits an event when a validation hasn't got an error.
         * @event ch.Validation#success
         * @example
         * // Subscribe to "success" event.
         * validation.on("submit",function () {
         *     // Some code here!
         * });
         */
        this.emit('success');
        return this;
    };
    /**
     * Checks if the validation has got errors but it doesn't show bubbles.
     * @memberof! ch.Validation.prototype
     * @function
     * @returns {Boolean}
     * @example
     * // Checks if a validation has errors and do something.
     * if (validation.hasError()) {
     *     // Some code here!
     * };
     */
    Validation.prototype.hasError = function() { // Pre-validation: Don't validate disabled
        if (this.trigger.getAttribute('disabled') || !this._enabled) {
            return false;
        }
        var condition, required = this.conditions.required,
            value = this._el.value; // Avoid fields that aren't required when they are empty or de-activated
        if (!required && value === '' && this._shown === false) { // Has got an error? Nop
            return false;
        }
        /**
         * Stores the previous error object
         * @private
         */
        this._previousError = tiny.clone(this.error); // for each condition
        for (condition in this.conditions) {
            if (this.conditions[condition] !== undefined && !this.conditions[condition].test(value, this)) { // Update the error object
                this.error = {
                    'condition': condition,
                    'message': this.conditions[condition].message
                }; // Has got an error? Yeah
                return true;
            }
        } // Update the error object
        this.error = null; // Has got an error? No
        return false;
    };
    /**
     * Clear active error.
     * @memberof! ch.Validation.prototype
     * @function
     * @returns {validation}
     * @example
     * // Clear active error.
     * validation.clear();
     */
    Validation.prototype.clear = function() {
        this.trigger.removeAttribute('aria-label');
        tiny.removeClass(this.trigger, 'ch-validation-error');
        this.error = null;
        this._hideErrorMessage();
        this._shown = false;
        /**
         * It emits an event when a validation is cleaned.
         * @event ch.Validation#clear
         * @example
         * // Subscribe to "clear" event.
         * validation.on('clear', function () {
         *     // Some code here!
         * });
         */
        this.emit('clear');
        return this;
    };
    /**
     * Indicates if the validation is shown.
     * @memberof! ch.Validation.prototype
     * @function
     * @returns {Boolean}
     * @example
     * // Execute a function if the validation is shown.
     * if (validation.isShown()) {
     *     fn();
     * }
     */
    Validation.prototype.isShown = function() {
        return this._shown;
    };
    /**
     * Sets or gets messages to specifics conditions.
     * @memberof! ch.Validation.prototype
     * @function
     * @returns {(validation | String)}
     * @example
     * // Gets a message from a condition
     * validation.message('required');
     * @example
     * // Sets a new message
     * validation.message('required', 'New message for required validation');
     */
    Validation.prototype.message = function(condition, message) {
        if (condition === undefined) {
            throw new Error('validation.message(condition, message): Please, a condition parameter is required.');
        } // Get a new message from a condition
        if (message === undefined) {
            return this.conditions[condition].message;
        } // Sets a new message
        this.conditions[condition].message = message;
        if (this.isShown() && this.error.condition === condition) {
            this._showErrorMessage(message);
        }
        return this;
    };
    /**
     * Enables an instance of validation or a specific condition.
     * @memberof! ch.Validation.prototype
     * @name enable
     * @function
     * @param {String} [condition] - A given number of fold to enable.
     * @returns {validation} Returns an instance of Validation.
     * @example
     * // Enabling an instance of Validation.
     * validation.enable();
     * @example
     * // Enabling the "max" condition.
     * validation.enable('max');
     */
    /**
     * Disables an instance of a validation or a specific condition.
     * @memberof! ch.Validation.prototype
     * @name disable
     * @function
     * @param {String} [condition] - A given number of fold to disable.
     * @returns {validation} Returns an instance of Validation.
     * @example
     * // Disabling an instance of Validation.
     * validation.disable();
     * @example
     * // Disabling the "email" condition.
     * validation.disable('email');
     */
    while (len) {
        createMethods(methods[len -= 1]);
    }
    /**
     * Destroys a Validation instance.
     * @memberof! ch.Validation.prototype
     * @function
     * @example
     * // Destroying an instance of Validation.
     * validation.destroy();
     */
    Validation.prototype.destroy = function() { // this.$trigger.off('.validation')
        this.trigger.removeAttribute('data-side data-align');
        parent.destroy.call(this);
        return;
    }; // Factorize
    ch.factory(Validation);
})(undefined, undefined.ch);
(function(ch) {
    'use strict';
    /**
     * Creates a bubble to show the validation message.
     * @memberof! ch.Validation.prototype
     * @function
     * @private
     * @returns {validation}
     */
    ch.Validation.prototype._configureContainer = function() {
        var that = this;
        /**
         * Is the little sign that popover showing the validation message. It's a Popover component, so you can change it's content, width or height and change its visibility state.
         * @type {Bubble}
         * @see ch.Bubble
         */
        this.bubble = this._container = new ch.Bubble({
            'reference': that._options.reference || function() {
                var reference, trigger = that.trigger,
                    h4, span; // CHECKBOX, RADIO
                // TODO: when old forms be deprecated we must only support ch-form-options class
                if (tiny.hasClass(trigger, 'ch-form-options')) { // Helper reference from will be fired
                    if (trigger.querySelectorAll('h4').length > 0) { // Wrap content with inline element
                        h4 = trigger.querySelector('h4'); // Find h4
                        span = document.createElement('span');
                        span.insertAdjacentHTML('beforeend', h4.innerHTML);
                        h4.innerHTML = '';
                        h4.insertBefore(span, h4.firstChild);
                        reference = h4.children[0]; // Inline element in h4 like helper reference
                        // Legend
                    } else if (trigger.previousElementSibling && trigger.previousElementSibling.tagName === 'LEGEND') {
                        reference = trigger.previousElementSibling; // Legend like helper reference
                    } else {
                        reference = trigger.querySelector('label');
                    } // INPUT, SELECT, TEXTAREA
                } else {
                    reference = trigger;
                }
                return reference;
            }(),
            'align': that._options.align,
            'side': that._options.side,
            'offsetY': that._options.offsetY,
            'offsetX': that._options.offsetX // 'position': that._options.position
        });
    };
    /**
     * Shows the validation message.
     * @memberof! ch.Validation.prototype
     * @function
     * @private
     * @returns {validation}
     */
    ch.Validation.prototype._showErrorMessage = function(message) {
        this.bubble.content(message).show();
        this.trigger.setAttribute('aria-label', 'ch-' + this.bubble.name + '-' + this.bubble.uid);
        return this;
    };
    /**
     * Hides the validation message.
     * @memberof! ch.Validation.prototype
     * @function
     * @private
     * @returns {validation}
     */
    ch.Validation.prototype._hideErrorMessage = function() {
        this.bubble.hide();
        this.trigger.removeAttribute('aria-label');
        return this;
    };
    /**
     * Sets or gets positioning configuration. Use it without arguments to get actual configuration. Pass an argument to define a new positioning configuration.
     * @memberof! ch.Validation.prototype
     * @function
     * @returns {validation}
     * @example
     * // Change validaton bubble's position.
     * validation.refreshPosition({
     *     offsetY: -10,
     *     side: 'top',
     *     align: 'left'
     * });
     */
    ch.Validation.prototype.refreshPosition = function(options) {
        if (options === undefined) {
            return this.bubble._position;
        }
        this.bubble.refreshPosition(options);
        return this;
    };
})(undefined.ch);
(function(window, ch) {
    'use strict';

    function normalizeOptions(options) {
        if (typeof options === 'string' || options instanceof HTMLElement) {
            options = {
                'content': options
            };
        }
        return options;
    }
    /**
     * Expandable lets you show or hide content. Expandable needs a pair: a title and a container related to title.
     * @memberof ch
     * @constructor
     * @augments ch.Component
     * @mixes ch.Collapsible
     * @mixes ch.Content
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Expandable.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.fx] Enable or disable UI effects. You must use: "slideDown", "fadeIn" or "none". Default: "none".
     * @param {Boolean} [options.toggle] Customize toggle behavior. Default: true.
     * @param {HTMLElement} [options.container] The container where the expanbdale puts its content. Default: the next sibling of el parameter.
     * @param {(String | HTMLElement)} [options.content] The content to be shown into the expandable container.
     * @returns {expandable} Returns a new instance of Expandable.
     * @example
     * // Create a new Expandable.
     * var expandable = new ch.Expandable([el], [options]);
     * @example
     * // Create a new Expandable with custom options.
     * var expandable = new ch.Expandable({
     *     'container': document.querySelector('.my-container'),
     *     'toggle': false,
     *     'fx': 'slideDown',
     *     'content': 'http://ui.ml.com:3040/ajax'
     * });
     * @example
     * // Create a new Expandable using the shorthand way (content as parameter).
     * var expandable = new ch.Expandable('http://ui.ml.com:3040/ajax');
     */
    function Expandable(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Expandable is created.
             * @memberof! ch.Expandable.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Expandable#ready
         * @example
         * // Subscribe to "ready" event.
         * expandable.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Expandable, ch.Component);
    var parent = Expandable.super_.prototype;
    /**
     * The name of the component.
     * @memberof! ch.Expandable.prototype
     * @type {String}
     */
    Expandable.prototype.name = 'expandable';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Expandable.prototype
     * @function
     */
    Expandable.prototype.constructor = Expandable;
    /**
     * Configuration by default.
     * @type {Object}
     * @private
     */
    Expandable.prototype._defaults = {
        '_classNameTrigger': 'ch-expandable-trigger',
        '_classNameIcon': 'ch-expandable-ico',
        '_classNameContainer': 'ch-expandable-container',
        'fx': false,
        'toggle': true
    };
    /**
     * Initialize a new instance of Expandable and merge custom options with defaults options.
     * @memberof! ch.Expandable.prototype
     * @function
     * @private
     * @returns {expandable}
     */
    Expandable.prototype._init = function(el, options) { // Call to its parent init method
        parent._init.call(this, el, options); // Requires abilities
        this.require('Collapsible', 'Content');
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        /**
         * The expandable trigger.
         * @type {HTMLElement}
         * @example
         * // Gets the expandable trigger.
         * expandable.trigger;
         */
        this.trigger = this._el;
        tiny.addClass(this.trigger, this._options._classNameTrigger);
        tiny.addClass(this.trigger, this._options._classNameIcon);
        if (navigator.pointerEnabled) {
            tiny.on(this._el, 'click', function(e) {
                if (e.target.tagName === 'A') {
                    e.preventDefault();
                }
            });
        }
        tiny.on(this.trigger, ch.onpointertap, function(event) {
            if (ch.pointerCanceled) {
                return;
            }
            event.preventDefault();
            if (that._options.toggle) {
                that._toggle();
            } else {
                that.show();
            }
        });
        /**
         * The expandable container.
         * @type {HTMLElement}
         * @example
         * // Gets the expandable container.
         * expandable.container;
         */
        this.container = this._content = this._options.container ? this._options.container : tiny.next(this._el);
        tiny.addClass(this.container, this._options._classNameContainer);
        tiny.addClass(this.container, 'ch-hide');
        if (tiny.support.transition && this._options.fx !== 'none' && this._options.fx !== false) {
            tiny.addClass(this.container, 'ch-fx');
        }
        this.container.setAttribute('aria-expanded', 'false');
        /**
         * Default behavior
         */
        if (this.container.getAttribute('id') === '') {
            this.container.setAttribute('id', 'ch-expandable-' + this.uid);
        }
        this.trigger.setAttribute('aria-controls', this.container.getAttribute('id'));
        this.on('show', function() {
            tiny.trigger(window.document, ch.onlayoutchange);
        }).on('hide', function() {
            tiny.trigger(window.document, ch.onlayoutchange);
        });
        this.trigger.setAttribute('unselectable', 'on');
        tiny.addClass(this.trigger, 'ch-user-no-select');
        return this;
    };
    /**
     * Shows expandable's content.
     * @memberof! ch.Expandable.prototype
     * @function
     * @param {(String | HTMLElement)} [content] The content that will be used by expandable.
     * @param {Object} [options] A custom options to be used with content loaded by ajax.
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading.
     * @returns {expandable}
     * @example
     * // Shows a basic expandable.
     * component.show();
     * @example
     * // Shows an expandable with new content.
     * component.show('Some new content here!');
     * @example
     * // Shows an expandable with a new content that will be loaded by ajax and some custom options.
     * component.show('http://chico-ui.com.ar/ajax', {
     *     'cache': false,
     *     'params': 'x-request=true'
     * });
     */
    Expandable.prototype.show = function(content, options) {
        if (!this._enabled) {
            return this;
        }
        this._show(); // Update ARIA
        this.container.setAttribute('aria-expanded', 'true'); // Set new content
        if (content !== undefined) {
            this.content(content, options);
        }
        return this;
    };
    /**
     * Hides component's container.
     * @memberof! ch.Expandable.prototype
     * @function
     * @returns {expandable}
     * @example
     * // Close an expandable.
     * expandable.hide();
     */
    Expandable.prototype.hide = function() {
        if (!this._enabled) {
            return this;
        }
        this._hide();
        this.container.setAttribute('aria-expanded', 'false');
        return this;
    };
    /**
     * Returns a Boolean specifying if the component's core behavior is shown. That means it will return 'true' if the component is on, and it will return false otherwise.
     * @memberof! ch.Expandable.prototype
     * @function
     * @returns {Boolean}
     * @example
     * // Execute a function if the component is shown.
     * if (expandable.isShown()) {
     *     fn();
     * }
     */
    Expandable.prototype.isShown = function() {
        return this._shown;
    };
    /**
     * Destroys an Expandable instance.
     * @memberof! ch.Expandable.prototype
     * @function
     * @example
     * // Destroy an expandable
     * expandable.destroy();
     * // Empty the expandable reference
     * expandable = undefined;
     */
    Expandable.prototype.destroy = function() {
        var trigger = this.trigger;
        ['ch-expandable-trigger', 'ch-expandable-ico', 'ch-user-no-select'].forEach(function(className) {
            tiny.removeClass(trigger, className);
        });
        this.trigger.removeAttribute('unselectable');
        this.trigger.removeAttribute('aria-controls');
        tiny.removeClass(this.container, 'ch-expandable-container');
        tiny.removeClass(this.container, 'ch-hide');
        this.container.removeAttribute('aria-expanded');
        this.container.removeAttribute('aria-hidden');
        tiny.trigger(window.document, ch.onlayoutchange);
        parent.destroy.call(this);
        return;
    }; // Factorize
    ch.factory(Expandable, normalizeOptions);
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * Menu lets you organize the links by categories.
     * @memberof ch
     * @constructor
     * @augments ch.Component
     * @requires ch.Expandable
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Menu.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.fx] Enable or disable UI effects. You should use: "slideDown", "fadeIn" or "none". Default: "slideDown".
     * @returns {menu} Returns a new instance of Menu.
     * @example
     * // Create a new Menu.
     * var menu = new ch.Menu(el, [options]);
     * @example
     * // Create a new Menu with custom options.
     * var menu = new ch.Menu({
     *     'fx': 'none'
     * });
     */
    function Menu(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        that._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Menu is created.
             * @memberof! ch.Menu.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Menu#ready
         * @example
         * // Subscribe to "ready" event.
         * menu.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Menu, ch.Component);
    var parent = Menu.super_.prototype, // Creates methods enable and disable into the prototype.
        methods = ['enable', 'disable'],
        len = methods.length;

    function createMethods(method) {
        Menu.prototype[method] = function(child) {
            var i, fold = this.folds[child - 1]; // Enables or disables a specific expandable fold
            if (fold && fold.name === 'expandable') {
                fold[method](); // Enables or disables Expandable folds
            } else {
                i = this.folds.length;
                while (i) {
                    fold = this.folds[i -= 1];
                    if (fold.name === 'expandable') {
                        fold[method]();
                    }
                } // Executes parent method
                parent[method].call(this); // Updates "aria-disabled" attribute
                this._el.setAttribute('aria-disabled', !this._enabled);
            }
            return this;
        };
    }
    /**
     * The name of the component.
     * @memberof! ch.Menu.prototype
     * @type {String}
     */
    Menu.prototype.name = 'menu';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Menu.prototype
     * @function
     */
    Menu.prototype.constructor = Menu;
    /**
     * Configuration by default.
     * @type {Object}
     * @private
     */
    Menu.prototype._defaults = {
        'fx': 'slideDown'
    };
    /**
     * Initialize a new instance of Menu and merge custom options with defaults options.
     * @memberof! ch.Menu.prototype
     * @function
     * @private
     * @returns {menu}
     */
    Menu.prototype._init = function(el, options) { // Call to its parent init method
        parent._init.call(this, el, options); // cloneNode(true) > parameters is required. Opera & IE throws and internal error. Opera mobile breaks.
        this._snippet = this._el.cloneNode(true);
        /**
         * The menu container.
         * @type {HTMLElement}
         */
        this.container = this._el;
        this.container.setAttribute('role', 'navigation');
        tiny.addClass(this.container, 'ch-menu');
        this._options._className ? tiny.addClass(this.container, this._options._className) : null;
        this._options.addClass ? tiny.addClass(this.container, this._options.addClass) : null;
        /**
         * A collection of folds.
         * @type {Array}
         */
        this.folds = []; // Inits an expandable component on each list inside main HTML code snippet
        this._createExpandables();
        return this;
    };
    /**
     * Inits an Expandable component on each list inside main HTML code snippet.
     * @function
     * @private
     */
    Menu.prototype._createExpandables = function() {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            child;

        function createExpandable(li, i) {
            var expandable, menu; // List element
            tiny.addClass(li, 'ch-menu-fold'); // Children of list elements
            child = li.children[0]; // Anchor inside list
            if (child.tagName === 'A') { // Add attr role to match wai-aria
                li.setAttribute('role', 'presentation'); //
                tiny.addClass(child, 'ch-fold-trigger'); // Add anchor to that.fold
                that.folds.push(child);
            } else { // List inside list, inits an Expandable
                expandable = new ch.Expandable(child, { // Show/hide on IE8- instead slideUp/slideDown
                    'fx': that._options.fx
                });
                expandable.on('show', function() {
                    /**
                     * Event emitted when the menu shows a fold.
                     * @event ch.Menu#show
                     * @example
                     * // Subscribe to "show" event.
                     * menu.on('show', function (shown) {
                     *     // Some code here!
                     * });
                     */
                    that.emit('show', i + 1);
                }).on('hide', function() {
                    /**
                     * Event emitted when the menu hides a fold.
                     * @event ch.Menu#hide
                     * @example
                     * // Subscribe to "hide" event.
                     * menu.on('hide', function () {
                     *     // Some code here!
                     * });
                     */
                    that.emit('hide');
                });
                menu = tiny.next(child);
                menu.setAttribute('role', 'menu');
                Array.prototype.forEach.call(menu.children, function(item) {
                    item.setAttribute('role', 'presentation');
                    item.children[0] ? item.children[0].setAttribute('role', 'menuitem') : null;
                }); // Add expandable to that.fold
                that.folds.push(expandable);
            }
        }
        Array.prototype.forEach.call(this.container.children, createExpandable);
        return this;
    };
    /**
     * Shows a specific fold.
     * @memberof! ch.Menu.prototype
     * @function
     * @param {Number} child - A given number of fold.
     * @returns {menu}
     * @example
     * // Shows the second fold.
     * menu.show(2);
     */
    Menu.prototype.show = function(child) {
        this.folds[child - 1].show();
        return this;
    };
    /**
     * Hides a specific fold.
     * @memberof! ch.Menu.prototype
     * @function
     * @param {Number} child - A given number of fold.
     * @returns {menu}
     * @example
     * // Hides the second fold.
     * menu.hide(2);
     */
    Menu.prototype.hide = function(child) {
        this.folds[child - 1].hide();
        return this;
    };
    /**
     * Allows to manage the menu content.
     * @param {Number} fold A given fold to change its content.
     * @param {(String | HTMLElement)} content The content that will be used by a fold.
     * @param {Object} [options] A custom options to be used with content loaded by ajax.
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading.
     * @example
     * // Updates the content of the second fold with some string.
     * menu.content(2, 'http://ajax.com', {'cache': false});
     */
    Menu.prototype.content = function(fold, content, options) {
        if (fold === undefined || typeof fold !== 'number') {
            throw new window.Error('Menu.content(fold, content, options): Expected number of fold.');
        }
        if (content === undefined) {
            return this.folds[fold - 1].content();
        }
        this.folds[fold - 1].content(content, options);
        return this;
    };
    while (len) {
        createMethods(methods[len -= 1]);
    }
    /**
     * Destroys a Menu instance.
     * @memberof! ch.Menu.prototype
     * @function
     * @example
     * // Destroy a menu
     * menu.destroy();
     * // Empty the menu reference
     * menu = undefined;
     */
    Menu.prototype.destroy = function() {
        this.folds.forEach(function(e) {
            if (e.destroy !== undefined) {
                e.destroy();
            }
        });
        this._el.parentNode.replaceChild(this._snippet, this._el);
        tiny.trigger(window.document, ch.onlayoutchange);
        parent.destroy.call(this);
        return;
    };
    ch.factory(Menu);
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * Popover is the basic unit of a dialog window.
     * @memberof ch
     * @constructor
     * @augments ch.Component
     * @mixes ch.Collapsible
     * @mixes ch.Content
     * @requires ch.Positioner
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Popover.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.addClass] CSS class names that will be added to the container on the component initialization.
     * @param {String} [options.fx] Enable or disable UI effects. You must use: "slideDown", "fadeIn" or "none". Default: "fadeIn".
     * @param {String} [options.width] Set a width for the container. Default: "auto".
     * @param {String} [options.height] Set a height for the container. Default: "auto".
     * @param {String} [options.shownby] Determines how to interact with the trigger to show the container. You must use: "pointertap", "pointerenter" or "none". Default: "pointertap".
     * @param {String} [options.hiddenby] Determines how to hide the component. You must use: "button", "pointers", "pointerleave", "all" or "none". Default: "button".
     * @param {HTMLElement} [options.reference] It's a HTMLElement reference to position and size of element that will be considered to carry out the position. Default: the trigger element.
     * @param {String} [options.side] The side option where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "center".
     * @param {String} [options.align] The align options where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "center".
     * @param {Number} [options.offsetX] Distance to displace the target horizontally. Default: 0.
     * @param {Number} [options.offsetY] Distance to displace the target vertically. Default: 0.
     * @param {String} [options.position] The type of positioning used. Its value must be "absolute" or "fixed". Default: "absolute".
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading. Default: '&lt;div class="ch-loading ch-loading-centered"&gt;&lt;/div&gt;'.
     * @param {(String | HTMLElement)} [options.content] The content to be shown into the Popover container.
     * @param {(Boolean | String)} [options.wrapper] Wrap the reference element and place the container into it instead of body. When value is a string it will be applied as additional wrapper class. Default: false.
     *
     * @returns {popover} Returns a new instance of Popover.
     *
     * @example
     * // Create a new Popover.
     * var popover = new ch.Popover([el], [options]);
     * @example
     * // Create a new Popover with disabled effects.
     * var popover = new ch.Popover(el, {
     *     'fx': 'none'
     * });
     * @example
     * // Create a new Popover using the shorthand way (content as parameter).
     * var popover = new ch.Popover(document.querySelector('.popover'), {'content': 'http://ui.ml.com:3040/ajax'});
     */
    function Popover(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Popover is created.
             * @memberof! ch.Popover.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Popover#ready
         * @example
         * // Subscribe to "ready" event.
         * popover.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Popover, ch.Component);
    var document = window.document,
        parent = Popover.super_.prototype,
        shownbyEvent = {
            'pointertap': ch.onpointertap,
            'pointerenter': ch.onpointerenter
        };
    /**
     * The name of the component.
     * @memberof! ch.Popover.prototype
     * @type {String}
     */
    Popover.prototype.name = 'popover';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Popover.prototype
     * @function
     */
    Popover.prototype.constructor = Popover;
    /**
     * Configuration by default.
     * @memberof! ch.Popover.prototype
     * @type {Object}
     * @private
     */
    Popover.prototype._defaults = {
        '_ariaRole': 'dialog',
        '_className': '',
        '_hideDelay': 400,
        'addClass': '',
        'fx': 'fadeIn',
        'width': 'auto',
        'height': 'auto',
        'shownby': 'pointertap',
        'hiddenby': 'button',
        'waiting': '<div class="ch-loading ch-loading-centered"></div>',
        'position': 'absolute',
        'wrapper': false
    };
    /**
     * Initialize a new instance of Popover and merge custom options with defaults options.
     * @memberof! ch.Popover.prototype
     * @function
     * @private
     * @returns {popover}
     */
    Popover.prototype._init = function(el, options) { // Call to its parent init method
        parent._init.call(this, el, options); // Require abilities
        this.require('Collapsible', 'Content');
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            container = document.createElement('div');
        this._configureWrapper();
        container.innerHTML = ['<div', ' class="ch-popover ch-hide ' + this._options._className + ' ' + this._options.addClass + (tiny.support.transition && this._options.fx !== 'none' && this._options.fx !== false ? ' ch-fx' : '') + '"', ' role="' + this._options._ariaRole + '"', ' id="ch-' + this.name + '-' + this.uid + '"', ' style="width:' + this._options.width + ';height:' + this._options.height + '"', '></div>'].join('');
        /**
         * The popover container. It's the element that will be shown and hidden.
         * @type {HTMLDivElement}
         */
        this.container = container.querySelector('div');
        tiny.on(this.container, ch.onpointertap, function(event) {
            event.stopPropagation();
        });
        /**
         * Element where the content will be added.
         * @private
         * @type {HTMLDivElement}
         */
        this._content = document.createElement('div');
        tiny.addClass(this._content, 'ch-popover-content');
        this.container.appendChild(this._content); // Add functionality to the trigger if it exists
        this._configureTrigger();
        this._positioner = new ch.Positioner({
            'target': this.container,
            'reference': this._options.reference,
            'side': this._options.side,
            'align': this._options.align,
            'offsetX': this._options.offsetX,
            'offsetY': this._options.offsetY,
            'position': this._options.position
        });
        /**
         * Handler to execute the positioner refresh() method on layout changes.
         * @private
         * @function
         * @todo Define this function on prototype and use bind(): $document.on(ch.onlayoutchange, this.refreshPosition.bind(this));
         */
        this._refreshPositionListener = function() {
            if (that._shown) {
                that._positioner.refresh(options);
            }
            return that;
        };
        this._hideTimer = function() {
            that._timeout = window.setTimeout(function() {
                that.hide();
            }, that._options._hideDelay);
        };
        this._hideTimerCleaner = function() {
            window.clearTimeout(that._timeout);
        }; // Configure the way it hides
        this._configureHiding(); // Refresh position:
        // on layout change
        tiny.on(document, ch.onlayoutchange, this._refreshPositionListener); // on resize
        ch.viewport.on(ch.onresize, this._refreshPositionListener);
        this.once('_show', this._refreshPositionListener) // on content change
            .on('_contentchange', this._refreshPositionListener);
        return this;
    };
    /**
     * Adds functionality to the trigger. When a non-trigger popover is initialized, this method isn't executed.
     * @memberof! ch.Popover.prototype
     * @private
     * @function
     */
    Popover.prototype._configureTrigger = function() {
        if (this._el === undefined) {
            return;
        }
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this, // It will be triggered on pointertap/pointerenter of the $trigger
            // It can toggle, show, or do nothing (in specific cases)
            showHandler = function() { // Toggle as default
                var fn = that._toggle; // When a Popover is shown on pointerenter, it will set a timeout to manage when
                // to close the component. Avoid to toggle and let choise when to close to the timer
                if (that._options.shownby === 'pointerenter' || that._options.hiddenby === 'none' || that._options.hiddenby === 'button') {
                    fn = function fn() {
                        if (!that._shown) {
                            that.show();
                        }
                    };
                }
                return fn;
            }();
        /**
         * The original and entire element and its state, before initialization.
         * @private
         * @type {HTMLDivElement}
         */ // cloneNode(true) > parameters is required. Opera & IE throws and internal error. Opera mobile breaks.
        this._snippet = this._el.cloneNode(true); // Use the trigger as the positioning reference
        this._options.reference = this._options.reference || this._el; // Open event when configured as able to shown anyway
        if (this._options.shownby !== 'none') {
            tiny.addClass(this._el, 'ch-shownby-' + this._options.shownby);
            if (this._options.shownby === shownbyEvent.pointertap && navigator.pointerEnabled) {
                tiny.on(this._el, 'click', function(e) {
                    e.preventDefault();
                });
            }
            tiny.on(this._el, shownbyEvent[this._options.shownby], function(event) {
                event.stopPropagation();
                event.preventDefault();
                showHandler();
            });
        } // Get a content if it's not defined
        if (this._options.content === undefined) { // Content from anchor href
            // IE defines the href attribute equal to src attribute on images.
            if (this._el.nodeName === 'A' && this._el.href !== '') {
                this._options.content = this._el.href; // Content from title or alt
            } else if (this._el.title !== '' || this._el.alt !== '') { // Set the configuration parameter
                this._options.content = this._el.title || this._el.alt; // Keep the attributes content into the element for possible usage
                this._el.setAttribute('data-title', this._options.content); // Avoid to trigger the native tooltip
                this._el.title = this._el.alt = '';
            }
        } // Set WAI-ARIA
        this._el.setAttribute('aria-owns', 'ch-' + this.name + '-' + this.uid);
        this._el.setAttribute('aria-haspopup', 'true');
        /**
         * The popover trigger. It's the element that will show and hide the container.
         * @type {HTMLElement}
         */
        this.trigger = this._el;
    };
    /**
     * Determines how to hide the component.
     * @memberof! ch.Popover.prototype
     * @private
     * @function
     */
    Popover.prototype._configureHiding = function() {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            hiddenby = this._options.hiddenby,
            dummy, button; // Don't hide anytime
        if (hiddenby === 'none') {
            return;
        } // Hide by leaving the component
        if (hiddenby === 'pointerleave' && this.trigger !== undefined) {
            [this.trigger, this.container].forEach(function(el) {
                tiny.on(el, ch.onpointerenter, that._hideTimerCleaner);
            });
            [this.trigger, this.container].forEach(function(el) {
                tiny.on(el, ch.onpointerleave, that._hideTimer);
            });
        } // Hide with the button Close
        if (hiddenby === 'button' || hiddenby === 'all') {
            dummy = document.createElement('div');
            dummy.innerHTML = '<i class="ch-close" role="button" aria-label="Close"></i>';
            button = dummy.querySelector('i');
            tiny.on(button, ch.onpointertap, function() {
                that.hide();
            });
            this.container.insertBefore(button, this.container.firstChild);
        }
        if ((hiddenby === 'pointers' || hiddenby === 'all') && this._hidingShortcuts !== undefined) {
            this._hidingShortcuts();
        }
    };
    /**
     * Creates an options object from the parameters arriving to the constructor method.
     * @memberof! ch.Popover.prototype
     * @private
     * @function
     */
    Popover.prototype._normalizeOptions = function(options) { // IE8 and earlier don't define the node type constants, 1 === document.ELEMENT_NODE
        if (typeof options === 'string' || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options.nodeType === 1) {
            options = {
                'content': options
            };
        }
        return options;
    };
    /**
     * Wraps the target element and use the wrapper as the placement for container
     * @memberof! ch.Popover.prototype
     * @private
     * @function
     */
    Popover.prototype._configureWrapper = function() {
        var target = this._el || this._options.reference,
            wrapper = this._options.wrapper;
        if (wrapper && target && target.nodeType === 1) { // Create the wrapper element and append to it
            wrapper = document.createElement('span');
            tiny.addClass(wrapper, 'ch-popover-wrapper');
            if (typeof this._options.wrapper === 'string') {
                this._options.wrapper.split(' ').forEach(function(className) {
                    tiny.addClass(wrapper, className);
                });
            }
            tiny.parent(target).insertBefore(wrapper, target);
            wrapper.appendChild(target);
            if (tiny.css(wrapper, 'position') === 'static') {
                tiny.css(wrapper, {
                    display: 'inline-block',
                    position: 'relative'
                });
            }
            this._containerWrapper = wrapper;
        } else {
            this._containerWrapper = document.body;
        }
    };
    /**
     * Shows the popover container and appends it to the body.
     * @memberof! ch.Popover.prototype
     * @function
     * @param {(String | HTMLElement)} [content] The content that will be used by popover.
     * @param {Object} [options] A custom options to be used with content loaded by ajax.
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading.
     * @returns {popover}
     * @example
     * // Shows a basic popover.
     * popover.show();
     * @example
     * // Shows a popover with new content
     * popover.show('Some new content here!');
     * @example
     * // Shows a popover with a new content that will be loaded by ajax with some custom options
     * popover.show('http://domain.com/ajax/url', {
     *     'cache': false,
     *     'params': 'x-request=true'
     * });
     */
    Popover.prototype.show = function(content, options) { // Don't execute when it's disabled
        if (!this._enabled || this._shown) {
            return this;
        } // Append to the configured holder
        this._containerWrapper.appendChild(this.container); // Open the collapsible
        this._show(); // Request the content
        if (content !== undefined) {
            this.content(content, options);
        }
        return this;
    };
    /**
     * Hides the popover container and deletes it from the body.
     * @memberof! ch.Popover.prototype
     * @function
     * @returns {popover}
     * @example
     * // Close a popover
     * popover.hide();
     */
    Popover.prototype.hide = function() {
        var self = this,
            parent; // Don't execute when it's disabled
        if (!this._enabled || !this._shown) {
            return this;
        } // Detach the container from the DOM when it is hidden
        this.once('hide', function() { // Due to transitions this._shown can be outdated here
            parent = self.container.parentNode;
            if (parent !== null) {
                parent.removeChild(self.container);
            }
        }); // Close the collapsible
        this._hide();
        return this;
    };
    /**
     * Returns a Boolean specifying if the container is shown or not.
     * @memberof! ch.Popover.prototype
     * @function
     * @returns {Boolean}
     * @example
     * // Check the popover status
     * popover.isShown();
     * @example
     * // Check the popover status after an user action
     * $(window).on(ch.onpointertap, function () {
     *     if (popover.isShown()) {
     *         alert('Popover: visible');
     *     } else {
     *         alert('Popover: not visible');
     *     }
     * });
     */
    Popover.prototype.isShown = function() {
        return this._shown;
    };
    /**
     * Sets or gets the width of the container.
     * @memberof! ch.Popover.prototype
     * @function
     * @param {String} [data] Set a width for the container.
     * @returns {(Number | popover)}
     * @example
     * // Set a new popover width
     * component.width('300px');
     * @example
     * // Get the current popover width
     * component.width(); // '300px'
     */
    Popover.prototype.width = function(data) {
        if (data === undefined) {
            return this._options.width;
        }
        this.container.style.width = data;
        this._options.width = data;
        this.refreshPosition();
        return this;
    };
    /**
     * Sets or gets the height of the container.
     * @memberof! ch.Popover.prototype
     * @function
     * @param {String} [data] Set a height for the container.
     * @returns {(Number | popover)}
     * @example
     * // Set a new popover height
     * component.height('300px');
     * @example
     * // Get the current popover height
     * component.height(); // '300px'
     */
    Popover.prototype.height = function(data) {
        if (data === undefined) {
            return this._options.height;
        }
        this.container.style.height = data;
        this._options.height = data;
        this.refreshPosition();
        return this;
    };
    /**
     * Updates the current position of the container with given options or defaults.
     * @memberof! ch.Popover.prototype
     * @function
     * @params {Object} [options] A configuration object.
     * @returns {popover}
     * @example
     * // Update the current position
     * popover.refreshPosition();
     * @example
     * // Update the current position with a new offsetX and offsetY
     * popover.refreshPosition({
     *     'offestX': 100,
     *     'offestY': 10
     * });
     */
    Popover.prototype.refreshPosition = function(options) {
        if (this._shown) { // Refresh its position.
            this._positioner.refresh(options);
        } else { // Update its options. It will update position the next time to be shown.
            this._positioner._configure(options);
        }
        return this;
    };
    /**
     * Enables a Popover instance.
     * @memberof! ch.Popover.prototype
     * @function
     * @returns {popover}
     * @example
     * // Enable a popover
     * popover.enable();
     */
    Popover.prototype.enable = function() {
        if (this._el !== undefined) {
            this._el.setAttribute('aria-disabled', false);
        }
        parent.enable.call(this);
        return this;
    };
    /**
     * Disables a Popover instance.
     * @memberof! ch.Popover.prototype
     * @function
     * @returns {popover}
     * @example
     * // Disable a popover
     * popover.disable();
     */
    Popover.prototype.disable = function() {
        if (this._el !== undefined) {
            this._el.setAttribute('aria-disabled', true);
        }
        if (this._shown) {
            this.hide();
        }
        parent.disable.call(this);
        return this;
    };
    /**
     * Destroys a Popover instance.
     * @memberof! ch.Popover.prototype
     * @function
     * @returns {popover}
     * @example
     * // Destroy a popover
     * popover.destroy();
     * // Empty the popover reference
     * popover = undefined;
     */
    Popover.prototype.destroy = function() {
        if (this.trigger !== undefined) {
            tiny.off(this.trigger, ch.onpointerenter, this._hideTimerCleaner);
            tiny.off(this.trigger, ch.onpointerleave, this._hideTimer);
            tiny.removeClass(this.trigger, 'ch-' + this.name + '-trigger');
            this.trigger.removeAttribute('data-title');
            this.trigger.removeAttribute('aria-owns');
            this.trigger.removeAttribute('aria-haspopup');
            this.trigger.removeAttribute('data-side');
            this.trigger.removeAttribute('data-align');
            this.trigger.removeAttribute('role');
            this._snippet.alt ? this.trigger.setAttribute('alt', this._snippet.alt) : null;
            this._snippet.title ? this.trigger.setAttribute('title', this._snippet.title) : null;
        }
        tiny.off(document, ch.onlayoutchange, this._refreshPositionListener);
        ch.viewport.removeListener(ch.onresize, this._refreshPositionListener);
        parent.destroy.call(this);
        return;
    };
    ch.factory(Popover, Popover.prototype._normalizeOptions);
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    var document = window.document;
    ch.Popover.prototype._hidingShortcuts = function() {
        var that = this;

        function hide(event) { // event.button === 0: Fix issue #933 Right click closes it on Firefox.
            if (event.target !== that._el && event.target !== that.container && event.button === 0) {
                that.hide();
            }
        }
        ch.shortcuts.add(ch.onkeyesc, this.uid, function() {
            that.hide();
        });
        this.on('show', function() {
            ch.shortcuts.on(that.uid);
            tiny.on(document, ch.onpointertap, hide);
        }).on('hide', function() {
            ch.shortcuts.off(that.uid);
            tiny.off(document, ch.onpointertap, hide);
        }).once('destroy', function() {
            ch.shortcuts.remove(that.uid, ch.onkeyesc);
        });
    };
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * Layer is a dialog window that can be shown one at a time.
     * @memberof ch
     * @constructor
     * @augments ch.Popover
     * @param {String} [el] A HTMLElement to create an instance of ch.Layer.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.addClass] CSS class names that will be added to the container on the component initialization.
     * @param {String} [options.fx] Enable or disable UI effects. You must use: "slideDown", "fadeIn" or "none". Default: "fadeIn".
     * @param {String} [options.width] Set a width for the container. Default: "auto".
     * @param {String} [options.height] Set a height for the container. Default: "auto".
     * @param {String} [options.shownby] Determines how to interact with the trigger to show the container. You must use: "pointertap", "pointerenter" or "none". Default: "pointerenter".
     * @param {String} [options.hiddenby] Determines how to hide the component. You must use: "button", "pointers", "pointerleave", "all" or "none". Default: "pointerleave".
     * @param {HTMLElement} [options.reference] It's a reference to position and size of element that will be considered to carry out the position. Default: the trigger element.
     * @param {String} [options.side] The side option where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "bottom".
     * @param {String} [options.align] The align options where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "left".
     * @param {Number} [options.offsetX] Distance to displace the target horizontally. Default: 0.
     * @param {Number} [options.offsetY] Distance to displace the target vertically. Default: 10.
     * @param {String} [options.position] The type of positioning used. Its value must be "absolute" or "fixed". Default: "absolute".
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading. Default: '&lt;div class="ch-loading ch-loading-centered"&gt;&lt;/div&gt;'.
     * @param {( String | HTMLElement)} [options.content] The content to be shown into the Layer container.
     * @param {(Boolean | String)} [options.wrapper] Wrap the reference element and place the container into it instead of body. When value is a string it will be applied as additional wrapper class. Default: false.
     *
     * @returns {layer} Returns a new instance of Layer.
     * @example
     * // Create a new Layer.
     * var layer = new ch.Layer([el], [options]);
     * @example
     * // Create a new Layer with disabled effects.
     * var layer = new ch.Layer({
     *     'content': 'This is the content of the Layer'
     * });
     * @example
     * // Create a new Layer using the shorthand way (content as parameter).
     * var layer = new ch.Layer('http://ui.ml.com:3040/ajax');
     */
    function Layer(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Layer is created.
             * @memberof! ch.Layer.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Layer#ready
         * @example
         * // Subscribe to "ready" event.
         * layer.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Layer, ch.Popover); // Reference to the last component open. Allows to close and to deny to
    // have 2 components open at the same time
    var lastShown, parent = Layer.super_.prototype;
    /**
     * The name of the component.
     * @memberof! ch.Layer.prototype
     * @type {String}
     */
    Layer.prototype.name = 'layer';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Layer.prototype
     * @function
     */
    Layer.prototype.constructor = Layer;
    /**
     * Configuration by default.
     * @memberof! ch.Layer.prototype
     * @type {Object}
     * @private
     */
    Layer.prototype._defaults = tiny.extend(tiny.clone(parent._defaults), {
        '_className': 'ch-layer ch-box-lite ch-cone',
        '_ariaRole': 'tooltip',
        'shownby': 'pointerenter',
        'hiddenby': 'pointerleave',
        'side': 'bottom',
        'align': 'left',
        'offsetX': 0,
        'offsetY': 10,
        'waiting': '<div class="ch-loading-small"></div>',
        'wrapper': false
    });
    /**
     * Shows the layer container and hides other layers.
     * @memberof! ch.Layer.prototype
     * @function
     * @param {(String | HTMLElement)} [content] The content that will be used by layer.
     * @param {Object} [options] A custom options to be used with content loaded by ajax.
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading.
     * @returns {layer}
     * @example
     * // Shows a basic layer.
     * layer.show();
     * @example
     * // Shows a layer with new content
     * layer.show('Some new content here!');
     * @example
     * // Shows a layer with a new content that will be loaded by ajax with some custom options
     * layer.show('http://domain.com/ajax/url', {
     *     'cache': false,
     *     'params': 'x-request=true'
     * });
     */
    Layer.prototype.show = function(content, options) { // Don't execute when it's disabled
        if (!this._enabled || this._shown) {
            return this;
        } // Only hide if there was a component opened before
        if (lastShown !== undefined && lastShown.name === this.name && lastShown !== this) {
            lastShown.hide();
        } // Only save to future close if this component is closable
        if (this._options.hiddenby !== 'none' && this._options.hiddenby !== 'button') {
            lastShown = this;
        } // Execute the original show()
        parent.show.call(this, content, options);
        return this;
    };
    ch.factory(Layer, parent._normalizeOptions);
})(undefined, undefined.ch);
(function(ch) {
    'use strict';
    /**
     * Improves the native tooltips.
     * @memberof ch
     * @constructor
     * @augments ch.Popover
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Tooltip.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.addClass] CSS class names that will be added to the container on the component initialization.
     * @param {String} [options.fx] Enable or disable UI effects. You must use: "slideDown", "fadeIn" or "none". Default: "fadeIn".
     * @param {String} [options.width] Set a width for the container. Default: "auto".
     * @param {String} [options.height] Set a height for the container. Default: "auto".
     * @param {String} [options.shownby] Determines how to interact with the trigger to show the container. You must use: "pointertap", "pointerenter" or "none". Default: "pointerenter".
     * @param {String} [options.hiddenby] Determines how to hide the component. You must use: "button", "pointers", "pointerleave", "all" or "none". Default: "pointerleave".
     * @param {HTMLElement} [options.reference] It's a reference to position and size of element that will be considered to carry out the position. Default: the trigger element.
     * @param {String} [options.side] The side option where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "bottom".
     * @param {String} [options.align] The align options where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "left".
     * @param {Number} [options.offsetX] Distance to displace the target horizontally. Default: 0.
     * @param {Number} [options.offsetY] Distance to displace the target vertically. Default: 10.
     * @param {String} [options.position] The type of positioning used. Its value must be "absolute" or "fixed". Default: "absolute".
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading. Default: '<div class="ch-loading ch-loading-centered"></div>'.
     * @param {(String | HTMLElement)} [options.content] The content to be shown into the Tooltip container.
     * @returns {tooltip} Returns a new instance of Tooltip.
     * @example
     * // Create a new Tooltip.
     * var tooltip = new ch.Tooltip(document.querySelector('.trigger'), [options]);
     * @example
     * // Create a new Tooltip using the shorthand way (content as parameter).
     * var tooltip = new ch.Tooltip(document.querySelector('.trigger'), {'content': 'http://ui.ml.com:3040/ajax'});
     */
    function Tooltip(el, options) { // TODO: Review what's going on here with options
        /*
                if (options === undefined && el !== undefined && el.nodeType !== undefined) {
                    options = el;
                    el = undefined;
                }
                */
        options = tiny.extend(tiny.clone(this._defaults), options);
        return new ch.Layer(el, options);
    }
    /**
     * The name of the component.
     * @memberof! ch.Tooltip.prototype
     * @type {String}
     * @example
     * // You can reach the associated instance.
     * var tooltip = $(selector).data('tooltip');
     */
    Tooltip.prototype.name = 'tooltip';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Tooltip.prototype
     * @function
     */
    Tooltip.prototype.constructor = Tooltip;
    /**
     * Configuration by default.
     * @memberof! ch.Tooltip.prototype
     * @type {Object}
     * @private
     */
    Tooltip.prototype._defaults = tiny.extend(tiny.clone(ch.Layer.prototype._defaults), {
        '_className': 'ch-tooltip ch-cone'
    });
    ch.factory(Tooltip, ch.Layer.prototype._normalizeOptions);
})(undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * Dialog window with an error skin.
     * @memberof ch
     * @constructor
     * @augments ch.Component
     * @requires ch.Positioner
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Bubble.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.addClass] CSS class names that will be added to the container on the component initialization.
     * @param {String} [options.fx] Enable or disable UI effects. You must use: "slideDown", "fadeIn" or "none". Default: "fadeIn".
     * @param {String} [options.width] Set a width for the container. Default: "auto".
     * @param {String} [options.height] Set a height for the container. Default: "auto".
     * @param {String} [options.shownby] Determines how to interact with the trigger to show the container. You must use: "pointertap", "pointerenter" or "none". Default: "none".
     * @param {String} [options.hiddenby] Determines how to hide the component. You must use: "button", "pointers", "pointerleave", "all" or "none". Default: "none".
     * @param {HTMLElement} [options.reference] It's a reference to position and size of element that will be considered to carry out the position. Default: the trigger element.
     * @param {String} [options.side] The side option where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "right".
     * @param {String} [options.align] The align options where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "top".
     * @param {Number} [options.offsetX] Distance to displace the target horizontally. Default: 10.
     * @param {Number} [options.offsetY] Distance to displace the target vertically. Default: 0.
     * @param {String} [options.position] The type of positioning used. Its value must be "absolute" or "fixed". Default: "absolute".
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading. Default: '&lt;div class="ch-loading ch-loading-centered"&gt;&lt;/div&gt;'.
     * @param {(String | HTMLElement)} [options.content] The content to be shown into the Bubble container. Default: "Check the information, please."
     * @returns {bubble} Returns a new instance of Bubble.
     * @example
     * // Create a new Bubble.
     * var bubble = new ch.Bubble($el, [options]);
     * @example
     * // Create a new Bubble with disabled effects.
     * var bubble = new ch.Bubble({
     *     'fx': 'none'
     * });
     * @example
     * // Create a new Bubble using the shorthand way (content as parameter).
     * var bubble = new ch.Bubble('http://ui.ml.com:3040/ajax');
     */
    function Bubble(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Bubble is created.
             * @memberof! ch.Bubble.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Bubble#ready
         * @example
         * // Subscribe to "ready" event.
         * bubble.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Bubble, ch.Popover);
    var parent = Bubble.super_.prototype;
    /**
     * The name of the component.
     * @memberof! ch.Bubble.prototype
     * @type {String}
     */
    Bubble.prototype.name = 'bubble';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Bubble.prototype
     * @function
     */
    Bubble.prototype.constructor = Bubble;
    /**
     * Configuration by default.
     * @memberof! ch.Bubble.prototype
     * @type {Object}
     * @private
     */
    Bubble.prototype._defaults = tiny.extend(tiny.clone(parent._defaults), {
        '_className': 'ch-bubble ch-box-icon ch-box-error ch-cone',
        '_ariaRole': 'alert',
        'shownby': 'none',
        'hiddenby': 'none',
        'side': 'right',
        'align': 'center',
        'offsetX': 10,
        'content': 'Check the information, please.'
    });
    /**
     * Initialize a new instance of Bubble and merge custom options with defaults options.
     * @memberof! ch.Bubble.prototype
     * @function
     * @private
     * @returns {bubble}
     */
    Bubble.prototype._init = function(el, options) { // Call to its parent init method
        parent._init.call(this, el, options);
        this.container.insertAdjacentHTML('beforeend', '<i class="ch-icon-remove-sign"></i>');
        return this;
    };
    ch.factory(Bubble, parent._normalizeOptions);
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * Modal is a dialog window with an underlay.
     * @memberof ch
     * @constructor
     * @augments ch.Popover
     * @param {HTMLElement} [el] A HTMLElement to create an instance of ch.Modal.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.addClass] CSS class names that will be added to the container on the component initialization.
     * @param {String} [options.fx] Enable or disable UI effects. You must use: "slideDown", "fadeIn" or "none". Default: "fadeIn".
     * @param {String} [options.width] Set a width for the container. Default: "50%".
     * @param {String} [options.height] Set a height for the container. Default: "auto".
     * @param {String} [options.shownby] Determines how to interact with the trigger to show the container. You must use: "pointertap", "pointerenter" or "none". Default: "pointertap".
     * @param {String} [options.hiddenby] Determines how to hide the component. You must use: "button", "pointers", "pointerleave", "all" or "none". Default: "all".
     * @param {HTMLElement} [options.reference] It's a reference to position and size of element that will be considered to carry out the position. Default: ch.viewport.
     * @param {String} [options.side] The side option where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "center".
     * @param {String} [options.align] The align options where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "center".
     * @param {Number} [options.offsetX] Distance to displace the target horizontally. Default: 0.
     * @param {Number} [options.offsetY] Distance to displace the target vertically. Default: 0.
     * @param {String} [options.position] The type of positioning used. Its value must be "absolute" or "fixed". Default: "fixed".
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading. Default: '&lt;div class="ch-loading-large ch-loading-centered"&gt;&lt;/div&gt;'.
     * @param {(String | HTMLElement)} [options.content] The content to be shown into the Modal container.
     * @returns {modal} Returns a new instance of Modal.
     * @example
     * // Create a new Modal.
     * var modal = new ch.Modal([el], [options]);
     * @example
     * // Create a new Modal.
     * var modal = new ch.Modal([options]);
     * @example
     * // Create a new Modal with disabled effects.
     * var modal = new ch.Modal({
     *     'content': 'This is the content of the Modal'
     * });
     * @example
     * // Create a new Modal using the shorthand way (content as parameter).
     * var modal = new ch.Modal('http://ui.ml.com:3040/ajax');
     */
    function Modal(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Modal is created.
             * @memberof! ch.Modal.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Modal#ready
         * @example
         * // Subscribe to "ready" event.
         * modal.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Modal, ch.Popover);
    var document = window.document,
        underlay = function() {
            var dummyElement = document.createElement('div');
            dummyElement.innerHTML = '<div class="ch-underlay" tabindex="-1"></div>';
            return dummyElement.querySelector('div');
        }(),
        parent = Modal.super_.prototype;
    /**
     * The name of the component.
     * @memberof! ch.Modal.prototype
     * @type {String}
     */
    Modal.prototype.name = 'modal';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Modal.prototype
     * @function
     */
    Modal.prototype.constructor = Modal;
    /**
     * Configuration by default.
     * @memberof! ch.Modal.prototype
     * @type {Object}
     * @private
     */
    Modal.prototype._defaults = tiny.extend(tiny.clone(parent._defaults), {
        '_className': 'ch-modal ch-box-lite',
        '_ariaRole': 'dialog',
        'width': '50%',
        'hiddenby': 'all',
        'reference': ch.viewport,
        'waiting': '<div class="ch-loading-large ch-loading-centered"></div>',
        'position': 'fixed'
    });
    /**
     * Shows the Modal underlay.
     * @memberof! ch.Modal.prototype
     * @function
     * @private
     */
    Modal.prototype._showUnderlay = function() {
        var useAnimation = tiny.support.transition && this._options.fx !== 'none' && this._options.fx !== false,
            fxName = 'ch-fx-' + this._options.fx.toLowerCase();
        document.body.appendChild(underlay);

        function showCallback(e) {
            tiny.removeClass(underlay, fxName + '-enter-active');
            tiny.removeClass(underlay, fxName + '-enter');
            tiny.off(e.target, e.type, showCallback);
        }
        if (useAnimation) {
            tiny.addClass(underlay, fxName + '-enter');
            setTimeout(function() {
                tiny.addClass(underlay, fxName + '-enter-active');
            }, 10);
            tiny.on(underlay, tiny.support.transition.end, showCallback);
        }
    };
    /**
     * Hides the Modal underlay.
     * @memberof! ch.Modal.prototype
     * @function
     * @private
     */
    Modal.prototype._hideUnderlay = function() {
        var useAnimation = tiny.support.transition && this._options.fx !== 'none' && this._options.fx !== false,
            fxName = 'ch-fx-' + this._options.fx.toLowerCase(),
            parent = underlay.parentNode;

        function hideCallback(e) {
            tiny.removeClass(underlay, fxName + '-leave-active');
            tiny.removeClass(underlay, fxName + '-leave');
            tiny.off(e.target, e.type, hideCallback);
            parent.removeChild(underlay);
        }
        if (useAnimation) {
            tiny.addClass(underlay, fxName + '-leave');
            setTimeout(function() {
                tiny.addClass(underlay, fxName + '-leave-active');
            }, 10);
            tiny.on(underlay, tiny.support.transition.end, hideCallback);
        } else {
            parent.removeChild(underlay);
        }
    };
    /**
     * Shows the modal container and the underlay.
     * @memberof! ch.Modal.prototype
     * @function
     * @param {(String | HTMLElement)} [content] The content that will be used by modal.
     * @param {Object} [options] A custom options to be used with content loaded by ajax.
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading.
     * @returns {modal}
     * @example
     * // Shows a basic modal.
     * modal.show();
     * @example
     * // Shows a modal with new content
     * modal.show('Some new content here!');
     * @example
     * // Shows a modal with a new content that will be loaded by ajax with some custom options
     * modal.show('http://domain.com/ajax/url', {
     *     'cache': false,
     *     'params': 'x-request=true'
     * });
     */
    Modal.prototype.show = function(content, options) { // Don't execute when it's disabled
        if (!this._enabled || this._shown) {
            return this;
        }
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;

        function hideByUnderlay(e) {
            that.hide(); // Allow only one click to analyze the config every time and to close ONLY THIS modal
            e.target.removeEventListener(e.type, hideByUnderlay);
        } // Add to the underlay the ability to hide the component
        if (this._options.hiddenby === 'all' || this._options.hiddenby === 'pointers') {
            tiny.on(underlay, ch.onpointertap, hideByUnderlay);
        } // Show the underlay
        this._showUnderlay(); // Execute the original show()
        parent.show.call(this, content, options);
        return this;
    };
    /**
     * Hides the modal container and the underlay.
     * @memberof! ch.Modal.prototype
     * @function
     * @returns {modal}
     * @example
     * // Close a modal
     * modal.hide();
     */
    Modal.prototype.hide = function() {
        if (!this._shown) {
            return this;
        } // Delete the underlay listener
        tiny.off(underlay, ch.onpointertap); // Hide the underlay element
        this._hideUnderlay(); // Execute the original hide()
        parent.hide.call(this);
        return this;
    };
    ch.factory(Modal, parent._normalizeOptions);
})(undefined, undefined.ch);
(function(ch) {
    'use strict';
    /**
     * Transition lets you give feedback to the users when their have to wait for an action.
     * @memberof ch
     * @constructor
     * @augments ch.Popover
     * @param {HTMLElement} [el] A HTMLElement to create an instance of ch.Transition.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.addClass] CSS class names that will be added to the container on the component initialization.
     * @param {String} [options.fx] Enable or disable UI effects. You must use: "slideDown", "fadeIn" or "none". Default: "fadeIn".
     * @param {String} [options.width] Set a width for the container. Default: "50%".
     * @param {String} [options.height] Set a height for the container. Default: "auto".
     * @param {String} [options.shownby] Determines how to interact with the trigger to show the container. You must use: "pointertap", "pointerenter" or "none". Default: "pointertap".
     * @param {String} [options.hiddenby] Determines how to hide the component. You must use: "button", "pointers", "pointerleave", "all" or "none". Default: "none".
     * @param {String} [options.reference] It's a reference to position and size of element that will be considered to carry out the position. Default: ch.viewport.
     * @param {String} [options.side] The side option where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "center".
     * @param {String} [options.align] The align options where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "center".
     * @param {Number} [options.offsetX] Distance to displace the target horizontally. Default: 0.
     * @param {Number} [options.offsetY] Distance to displace the target vertically. Default: 0.
     * @param {String} [options.position] The type of positioning used. Its value must be "absolute" or "fixed". Default: "fixed".
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(HTMLElement | String)} [options.waiting] Temporary content to use while the ajax request is loading. Default: '&lt;div class="ch-loading-large ch-loading-centered"&gt;&lt;/div&gt;'.
     * @param {(HTMLElement | String)} [options.content] The content to be shown into the Transition container. Default: "Please wait..."
     * @returns {transition} Returns a new instance of Transition.
     * @example
     * // Create a new Transition.
     * var transition = new ch.Transition([el], [options]);
     * @example
     * // Create a new Transition with disabled effects.
     * var transition = new ch.Transition({
     *     'fx': 'none'
     * });
     * @example
     * // Create a new Transition using the shorthand way (content as parameter).
     * var transition = new ch.Transition('http://ui.ml.com:3040/ajax');
     */
    function Transition(el, options) {
        if (el === undefined || options === undefined) {
            options = {};
        }
        options.content = function() {
            var dummyElement = document.createElement('div'),
                content = options.waiting || ''; // TODO: options.content could be a HTMLElement
            dummyElement.innerHTML = '<div class="ch-loading-large"></div><p>' + content + '</p>';
            return dummyElement.firstChild;
        }(); // el is not defined
        if (el === undefined) {
            el = tiny.extend(tiny.clone(this._defaults), options); // el is present as a object configuration
        } else if (el.nodeType === undefined && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object') {
            el = tiny.extend(tiny.clone(this._defaults), el);
        } else if (options !== undefined) {
            options = tiny.extend(tiny.clone(this._defaults), options);
        }
        return new ch.Modal(el, options);
    }
    /**
     * The name of the component.
     * @memberof! ch.Transition.prototype
     * @type {String}
     */
    Transition.prototype.name = 'transition';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Transition.prototype
     * @function
     */
    Transition.prototype.constructor = Transition;
    /**
     * Configuration by default.
     * @memberof! ch.Transition.prototype
     * @type {Object}
     * @private
     */
    Transition.prototype._defaults = tiny.extend(tiny.clone(ch.Modal.prototype._defaults), {
        '_className': 'ch-transition ch-box-lite',
        '_ariaRole': 'alert',
        'hiddenby': 'none',
        'content': 'Please wait...'
    });
    ch.factory(Transition, ch.Modal.prototype._normalizeOptions);
})(undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * Zoom shows a contextual reference to an augmented version of a declared image.
     * @memberof ch
     * @constructor
     * @augments ch.Layer
     * @param {String} selector A CSS Selector to create an instance of ch.Zoom.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.addClass] CSS class names that will be added to the container on the component initialization.
     * @param {String} [options.fx] Enable or disable UI effects. You must use: "slideDown", "fadeIn" or "none". Default: "none".
     * @param {String} [options.width] Set a width for the container. Default: "300px".
     * @param {String} [options.height] Set a height for the container. Default: "300px".
     * @param {String} [options.shownby] Determines how to interact with the trigger to show the container. You must use: "pointertap", "pointerenter" or "none". Default: "pointerenter".
     * @param {String} [options.hiddenby] Determines how to hide the component. You must use: "button", "pointers", "pointerleave", "all" or "none". Default: "pointerleave".
     * @param {String} [options.reference] It's a CSS Selector reference to position and size of element that will be considered to carry out the position. Default: the trigger element.
     * @param {String} [options.side] The side option where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "right".
     * @param {String} [options.align] The align options where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "top".
     * @param {Number} [options.offsetX] Distance to displace the target horizontally. Default: 20.
     * @param {Number} [options.offsetY] Distance to displace the target vertically. Default: 0.
     * @param {String} [options.position] The type of positioning used. Its value must be "absolute" or "fixed". Default: "absolute".
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading. Default: 'Loading zoom...'.
     * @param {(HTMLElement | String)} [options.content] The content to be shown into the Zoom container.
     * @returns {zoom} Returns a new instance of Zoom.
     * @example
     * // Create a new Zoom.
     * var zoom = new ch.Zoom([selector], [options]);
     * @example
     * // Create a new Zoom with a defined width (half of the screen).
     * var zoom = new ch.Zoom({
     *     'width': (ch.viewport.width / 2) + 'px'
     * });
     */
    function Zoom(selector, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(selector, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Zoom is created.
             * @memberof! ch.Zoom.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Zoom#ready
         * @example
         * // Subscribe to "ready" event.
         * zoom.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Zoom, ch.Layer);
    var parent = Zoom.super_.prototype;
    /**
     * The name of the component.
     * @memberof! ch.Zoom.prototype
     * @type {String}
     */
    Zoom.prototype.name = 'zoom';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Zoom.prototype
     * @function
     */
    Zoom.prototype.constructor = Zoom;
    /**
     * Configuration by default.
     * @memberof! ch.Zoom.prototype
     * @type {Object}
     * @private
     */
    Zoom.prototype._defaults = tiny.extend(tiny.clone(parent._defaults), {
        '_className': 'ch-zoom',
        '_ariaRole': 'tooltip',
        '_hideDelay': 0,
        'fx': 'none',
        'width': '300px',
        'height': '300px',
        'side': 'right',
        'align': 'top',
        'offsetX': 20,
        'offsetY': 0,
        'waiting': 'Loading zoom...'
    });
    /**
     * Initialize a new instance of Zoom and merge custom options with defaults options.
     * @memberof! ch.Zoom.prototype
     * @function
     * @private
     * @returns {zoom}
     */
    Zoom.prototype._init = function(selector, options) { // Call to its parent init method
        parent._init.call(this, selector, options);
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        /**
         * Flag to control when zoomed image is loaded.
         * @type {Boolean}
         * @private
         */
        this._loaded = false;
        /**
         * Feedback showed before the zoomed image is load. It's a transition message and its content can be configured through parameter "waiting".
         * @type {HTMLElement}
         * @private
         * @example
         * // Changing the loading feedback.
         * var zoom = new ch.Zoom({
         *     'waiting': 'My custom message'
         * });
         */
        this._loading = function() {
            var dummyElement = document.createElement('div');
            dummyElement.innerHTML = '<div class="ch-zoom-loading ch-hide"><div class="ch-loading-large"></div><p>' + that._options.waiting + '</p></div>';
            return dummyElement.firstChild;
        }();
        this.trigger.appendChild(this._loading);
        /**
         * HTML Element shape with visual feedback to the relative size of the zoomed area.
         * @type {HTMLDivElement}
         * @private
         */
        this._seeker = function() {
            var dummyElement = document.createElement('div');
            dummyElement.innerHTML = '<div class="ch-zoom-seeker ch-hide"></div>';
            return dummyElement.firstChild;
        }();
        this.trigger.appendChild(this._seeker);
        /**
         * The main specified image with original size (not zoomed).
         * @type {HTMLElement}
         * @private
         */
        this._original = this.trigger.children[0];
        /**
         * The zoomed image specified as a link href (see the HTML snippet).
         * @type {HTMLImageElement}
         * @private
         */ // Use a new Image to calculate the
        // size before append the image to DOM, in ALL the browsers.
        this._zoomed = new window.Image(); // Assign event handlers to the original image
        onImagesLoads(this._original, function() {
            that._originalLoaded();
        }); // Assign event handlers to the zoomed image
        onImagesLoads(this._zoomed, function() {
            that._zoomedLoaded();
        }); // Make the entire Show process if it tried to show before
        this.on('imageload', function() {
            if (!tiny.hasClass(this._loading, 'ch-hide')) {
                that.show();
                tiny.addClass(this._loading, 'ch-hide');
            }
        }); // Assign event handlers to the anchor
        tiny.addClass(this.trigger, 'ch-zoom-trigger'); // Prevent to redirect to the href
        tiny.on(this.trigger, 'click', function(event) {
            event.preventDefault();
        }, false); // Bind move calculations
        tiny.on(this.trigger, ch.onpointermove, function(event) {
            that._move(event);
        }, false);
        return this;
    };
    /**
     * Sets the correct size to the wrapper anchor.
     * @memberof! ch.Zoom.prototype
     * @function
     * @private
     */
    Zoom.prototype._originalLoaded = function() {
        var width = this._original.width,
            height = this._original.height,
            offset = tiny.offset(this._el); // Set the wrapper anchor size (same as image)
        this.trigger.style.width = width + 'px';
        this.trigger.style.height = height + 'px'; // Loading position centered into the anchor
        this._loading.style.display = 'block';
        this._loading.style.left = (width - this._loading.clientWidth) / 2 + 'px', this._loading.style.top = (height - this._loading.clientHeight) / 2 + 'px';
        this._loading.style.display = '';
        /**
         * Width of the original specified image.
         * @type {Number}
         * @private
         */
        this._originalWidth = width;
        /**
         * Height of the original specified image.
         * @type {Number}
         * @private
         */
        this._originalHeight = height;
        /**
         * Left position of the original specified anchor/image.
         * @type {Number}
         * @private
         */
        this._originalOffsetLeft = offset.left;
        /**
         * Top position of the original specified anchor/image.
         * @type {Number}
         * @private
         */
        this._originalOffsetTop = offset.top;
    };
    /**
     * Loads the Zoom content and sets the Seeker size.
     * @memberof! ch.Zoom.prototype
     * @function
     * @private
     */
    Zoom.prototype._zoomedLoaded = function() {
        /**
         * Relation between the zoomed and the original image width.
         * @type {Number}
         * @private
         */
        this._ratioX = this._zoomed.width / this._originalWidth;
        /**
         * Relation between the zoomed and the original image height.
         * @type {Number}
         * @private
         */
        this._ratioY = this._zoomed.height / this._originalHeight;
        /**
         * Width of the Seeker, calculated from ratio.
         * @type {Number}
         * @private
         */
        this._seekerWidth = window.Math.floor(window.parseInt(this._options.width, 10) / this._ratioX);
        /**
         * Height of the Seeker, calculated from ratio.
         * @type {Number}
         * @private
         */
        this._seekerHeight = window.Math.floor(window.parseInt(this._options.height, 10) / this._ratioY);
        /**
         * Half of the width of the Seeker. Used to position it.
         * @type {Number}
         * @private
         */
        this._seekerHalfWidth = window.Math.floor(this._seekerWidth / 2);
        /**
         * Half of the height of the Seeker. Used to position it.
         * @type {Number}
         * @private
         */
        this._seekerHalfHeight = window.Math.floor(this._seekerHeight / 2); // Set size of the Seeker
        this._seeker.style.cssText = 'width:' + this._seekerWidth + 'px;height:' + this._seekerHeight + 'px'; // Use the zoomed image as content for the floated element
        this.content(this._zoomed); // Update the flag to allow to zoom
        this._loaded = true;
        /**
         * Event emitted when the zoomed image is downloaded.
         * @event ch.Zoom#imageload
         * @example
         * // Subscribe to "imageload" event.
         * zoom.on('imageload', function () {
         *     alert('Zoomed image ready!');
         * });
         */
        this.emit('imageload');
    };
    /**
     * Calculates movement limits and sets it to Seeker and zoomed image.
     * @memberof! ch.Zoom.prototype
     * @function
     * @private
     * @param {Event} event Used to take the cursor position.
     */
    Zoom.prototype._move = function(event) { // Don't execute when it's disabled or it's not loaded
        if (!this._enabled || !this._loaded) {
            return;
        } // By defining these variables in here, it avoids to make
        // the substraction twice if it's a free movement
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft,
            pageY = event.pageY || event.clientY + document.documentElement.scrollTop,
            seekerLeft = pageX - this._seekerHalfWidth,
            seekerTop = pageY - this._seekerHalfHeight,
            x, y; // Left side of seeker LESS THAN left side of image
        if (seekerLeft <= this._originalOffsetLeft) {
            x = 0; // Right side of seeker GREATER THAN right side of image
        } else if (pageX + this._seekerHalfWidth > this._originalWidth + this._originalOffsetLeft) {
            x = this._originalWidth - this._seekerWidth - 2; // Free move
        } else {
            x = seekerLeft - this._originalOffsetLeft;
        } // Top side of seeker LESS THAN top side of image
        if (seekerTop <= this._originalOffsetTop) {
            y = 0; // Bottom side of seeker GREATER THAN bottom side of image
        } else if (pageY + this._seekerHalfHeight > this._originalHeight + this._originalOffsetTop) {
            y = this._originalHeight - this._seekerHeight - 2; // Free move
        } else {
            y = seekerTop - this._originalOffsetTop;
        } // Move seeker and the zoomed image
        this._seeker.style.left = x + 'px';
        this._seeker.style.top = y + 'px';
        this._zoomed.style.cssText = 'left:' + -this._ratioX * x + 'px;top:' + -this._ratioY * y + 'px';
    };
    /**
     * Shows the zoom container and the Seeker, or show a loading feedback until the zoomed image loads.
     * @memberof! ch.Zoom.prototype
     * @function
     * @param {(String | HTMLElement)} [content] The content that will be used by dropdown.
     * @param {Object} [options] A custom options to be used with content loaded by ajax.
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading.
     * @returns {zoom}
     * @example
     * // Shows a basic zoom.
     * zoom.show();
     * @example
     * // Shows a zoom with new content
     * zoom.show('Some new content here!');
     * @example
     * // Shows a zoom with a new content that will be loaded by ajax with some custom options
     * zoom.show('http://domain.com/ajax/url', {
     *     'cache': false,
     *     'params': 'x-request=true'
     * });
     */
    Zoom.prototype.show = function(content, options) { // Don't execute when it's disabled
        if (!this._enabled || this._shown) {
            return this;
        } // Show feedback and trigger the image load, if it's not loaded
        if (!this._loaded) {
            tiny.removeClass(this._loading, 'ch-hide');
            this.loadImage();
            return this;
        } // Delete the Loading and show the Seeker
        tiny.removeClass(this._seeker, 'ch-hide'); // Execute the original show()
        parent.show.call(this, content, options);
        return this;
    };
    /**
     * Hides the zoom container and the Seeker.
     * @memberof! ch.Zoom.prototype
     * @function
     * @returns {zoom}
     * @example
     * // Close a zoom
     * zoom.hide();
     */
    Zoom.prototype.hide = function() {
        if (!this._shown) {
            return this;
        } // Avoid unnecessary execution
        if (!this._loaded) {
            tiny.addClass(this._loading, 'ch-hide');
            return this;
        }
        tiny.addClass(this._seeker, 'ch-hide');
        parent.hide.call(this);
        return this;
    };
    /**
     * Adds the zoomed image source to the <img> tag to trigger the request.
     * @memberof! ch.Zoom.prototype
     * @function
     * @returns {zoom}
     * @example
     * // Load the zoomed image on demand.
     * component.loadImage();
     */
    Zoom.prototype.loadImage = function() {
        this._zoomed.src = this._el.href;
        return this;
    };
    /**
     * Destroys a Zoom instance.
     * @memberof! ch.Zoom.prototype
     * @function
     * @returns {zoom}
     * @example
     * // Destroy a zoom
     * zoom.destroy();
     * // Empty the zoom reference
     * zoom = undefined;
     */
    Zoom.prototype.destroy = function() {
        var parentElement;
        parentElement = tiny.parent(this._seeker);
        parentElement.removeChild(this._seeker);
        parent.destroy.call(this);
        return;
    };
    ch.factory(Zoom, parent._normalizeOptions);
    /**
     * Executes a callback function when the images of a query selection loads.
     * @private
     * @param {HTMLImageElement} image An image or a collection of images.
     * @param {Function} [callback] The handler the component will fire after the images loads.
     *
     * @example
     * onImagesLoads(HTMLImageElement, function () {
     *     console.log('The size of the loaded image is ' + this.width);
     * });
     */
    function onImagesLoads(image, callback) {
        var images;
        if (Array.isArray(image)) {
            images = image;
        } else {
            images = [image];
        }
        images.forEach(function(image) {
            tiny.on(image, 'load', function onImgLoad() {
                var len = images.length;
                window.setTimeout(function() {
                    if (--len <= 0) {
                        callback.call(image);
                    }
                }, 200);
                image.removeEventListener('load', onImgLoad);
            }, false);
            if (image.complete || image.complete === undefined) {
                var src = image.src; // Data uri fix bug in web-kit browsers
                image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
                image.src = src;
            }
        });
    }
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';

    function normalizeOptions(options) {
        if (typeof options === 'string' || Array.isArray(options)) {
            options = {
                'selected': options
            };
        }
        return options;
    }
    /**
     * It lets you move across the months of the year and allow to set dates as selected.
     * @memberof ch
     * @constructor
     * @augments ch.Component
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Calendar.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.format] Sets the date format. You must use "DD/MM/YYYY", "MM/DD/YYYY" or "YYYY/MM/DD". Default: "DD/MM/YYYY".
     * @param {String} [options.selected] Sets a date that should be selected by default. Default: The date of today.
     * @param {String} [options.from] Set a minimum selectable date. The format of the given date should be YYYY/MM/DD.
     * @param {String} [options.to] Set a maximum selectable date. The format of the given date should be YYYY/MM/DD.
     * @param {Array} [options.monthsNames] A collection of months names. Default: ["Enero", ... , "Diciembre"].
     * @param {Array} [options.weekdays] A collection of weekdays. Default: ["Dom", ... , "Sab"].
     * @returns {calendar} Returns a new instance of Calendar.
     * @example
     * // Create a new Calendar.
     * var calendar = new ch.Calendar([el], [options]);
     * @example
     * // Creates a new Calendar with custom options.
     * var calendar =  new ch.Calendar({
     *     'format': 'MM/DD/YYYY',
     *     'selected': '2011/12/25',
     *     'from': '2010/12/25',
     *     'to': '2012/12/25',
     *     'monthsNames': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
     *     'weekdays': ['Su', 'Mo', 'Tu', 'We', 'Thu', 'Fr', 'Sa']
     * });
     * @example
     * // Creates a new Calendar using a shorthand way (selected date as parameter).
     * var calendar = new ch.Calendar('2011/12/25');
     */
    function Calendar(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Calendar is created.
             * @memberof! ch.Calendar.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Calendar#ready
         * @example
         * // Subscribe to "ready" event.
         * calendar.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Calendar, ch.Component);
    /**
     * Completes with zero the numbers less than 10.
     * @function
     * @private
     * @returns {String}
     */
    var addZero = function addZero(num) {
            return parseInt(num, 10) < 10 ? '0' + num : num;
        },
        /**
         * Map of date formats.
         * @type {Object}
         * @private
         */
        FORMAT_dates = {
            /**
             * Converts a given date to "YYYY/MM/DD" format.
             * @params {Date} date A given date to convert.
             * @function
             * @returns {String}
             */
            'YYYY/MM/DD': function YYYYMMDD(date) {
                return [date.year, addZero(date.month), addZero(date.day)].join('/');
            },
            /**
             * Converts a given date to "DD/MM/YYYY" format.
             * @params {Date} date A given date to convert.
             * @function
             * @returns {String}
             */
            'DD/MM/YYYY': function DDMMYYYY(date) {
                return [addZero(date.day), addZero(date.month), date.year].join('/');
            },
            /**
             * Converts a given date to "MM/DD/YYYY" format.
             * @params {Date} date A given date to convert.
             * @function
             * @returns {String}
             */
            'MM/DD/YYYY': function MMDDYYYY(date) {
                return [addZero(date.month), addZero(date.day), date.year].join('/');
            }
        },
        /**
         * Creates a JSON Object with reference to day, month and year, from a determinated date.
         * @function
         * @private
         * @returns {Object}
         */
        createDateObject = function createDateObject(date) { // Uses date parameter or create a date from today
            date = date === 'today' ? new Date() : new Date(date);
            /**
             * Returned custom Date object.
             * @type {Object}
             * @private
             */
            return {
                /**
                 * Reference to native Date object.
                 * @type {Date}
                 * @private
                 */
                'native': date,
                /**
                 * Number of day.
                 * @type {Number}
                 * @private
                 */
                'day': date.getDate(),
                /**
                 * Order of day in a week.
                 * @type {Number}
                 * @private
                 */
                'order': date.getDay(),
                /**
                 * Number of month.
                 * @type {Number}
                 * @private
                 */
                'month': date.getMonth() + 1,
                /**
                 * Number of full year.
                 * @type {Number}
                 * @private
                 */
                'year': date.getFullYear()
            };
        },
        parent = Calendar.super_.prototype;
    /**
     * The name of the component.
     * @memberof! ch.Calendar.prototype
     * @type {String}
     */
    Calendar.prototype.name = 'calendar';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Calendar.prototype
     * @function
     */
    Calendar.prototype.constructor = Calendar;
    /**
     * Configuration by default.
     * @type {Object}
     * @private
     */
    Calendar.prototype._defaults = {
        'monthsNames': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        'weekdays': ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        'format': 'DD/MM/YYYY'
    };
    /**
     * Initialize a new instance of Calendar and merge custom options with defaults options.
     * @memberof! ch.Calendar.prototype
     * @function
     * @private
     * @returns {calendar}
     */
    Calendar.prototype._init = function(el, options) { // Call to its parent init method
        parent._init.call(this, el, options);
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this; // cloneNode(true) > parameters is required. Opera & IE throws and internal error. Opera mobile breaks.
        this._snippet = this._el.cloneNode(true);
        /**
         * Object to mange the date and its ranges.
         * @type {Object}
         * @private
         */
        this._dates = {
            'range': {}
        };
        this._dates.today = createDateObject('today');
        this._dates.current = this._dates.today;
        /**
         * Date of selected day.
         * @type {Object}
         * @private
         */
        this._dates.selected = function() { // Get date from configuration or input value, if configured could be an Array with multiple selections
            var selected = that._options.selected; // Do it only if there are a "selected" parameter
            if (!selected) {
                return selected;
            } // Simple date selection
            if (!Array.isArray(selected)) {
                if (selected !== 'today') { // Return date object and update currentDate
                    selected = that._dates.current = createDateObject(selected);
                } else {
                    selected = that._dates.today;
                } // Multiple date selection
            } else {
                selected.forEach(function(e, i) { // Simple date
                    if (!Array.isArray(e)) {
                        selected[i] = selected[i] !== 'today' ? createDateObject(e) : that._dates.today; // Range
                    } else {
                        selected[i][0] = selected[i][0] !== 'today' ? createDateObject(e[0]) : that._dates.today;
                        selected[i][1] = selected[i][1] !== 'today' ? createDateObject(e[1]) : that._dates.today;
                    }
                });
            }
            return selected;
        }(); // Today's date object
        this._dates.today = createDateObject('today'); // Minimum selectable date
        this._dates.range.from = function() { // Only works when there are a "from" parameter on configuration
            if (that._options.from === undefined || !that._options.from) {
                return;
            } // Return date object
            return that._options.from === 'today' ? that._dates.today : createDateObject(that._options.from);
        }(); // Maximum selectable date
        this._dates.range.to = function() { // Only works when there are a "to" parameter on configuration
            if (that._options.to === undefined || !that._options.to) {
                return;
            } // Return date object
            return that._options.to === 'today' ? that._dates.today : createDateObject(that._options.to);
        }();
        /**
         * Template of previous arrow.
         * @type {HTMLDivElement}
         */
        this._prev = document.createElement('div');
        this._prev.setAttribute('aria-controls', 'ch-calendar-grid-' + this.uid);
        this._prev.setAttribute('role', 'button');
        this._prev.setAttribute('aria-hidden', 'false');
        tiny.addClass(this._prev, 'ch-calendar-prev');
        /**
         * Template of next arrow.
         * @type {HTMLDivElement}
         */
        this._next = document.createElement('div');
        this._next.setAttribute('aria-controls', 'ch-calendar-grid-' + this.uid);
        this._next.setAttribute('role', 'button');
        this._next.setAttribute('aria-hidden', 'false');
        tiny.addClass(this._next, 'ch-calendar-next'); // Show or hide arrows depending on "from" and "to" limits
        tiny.on(this._prev, ch.onpointertap, function(event) {
            event.preventDefault();
            that.prevMonth();
        });
        tiny.on(this._next, ch.onpointertap, function(event) {
            event.preventDefault();
            that.nextMonth();
        });
        /**
         * The calendar container.
         * @type {HTMLElement}
         */
        this.container = this._el;
        this.container.insertBefore(this._prev, this.container.firstChild);
        this.container.insertBefore(this._next, this.container.firstChild);
        tiny.addClass(this.container, 'ch-calendar');
        this.container.insertAdjacentHTML('beforeend', this._createTemplate(this._dates.current));
        this._updateControls(); // Avoid selection on the component
        that.container.setAttribute('unselectable', 'on');
        tiny.addClass(that.container, 'ch-user-no-select');
        return this;
    };
    /**
     * Checks if it has got a previous month to show depending on "from" limit.
     * @function
     * @private
     */
    Calendar.prototype._hasPrevMonth = function() {
        return this._dates.range.from === undefined || !(this._dates.range.from.month >= this._dates.current.month && this._dates.range.from.year >= this._dates.current.year);
    };
    /**
     * Checks if it has got a next month to show depending on "to" limits.
     * @function
     * @private
     */
    Calendar.prototype._hasNextMonth = function() {
        return this._dates.range.to === undefined || !(this._dates.range.to.month <= this._dates.current.month && this._dates.range.to.year <= this._dates.current.year);
    };
    /**
     * Refresh arrows visibility depending on "from" and "to" limits.
     * @function
     * @private
     */
    Calendar.prototype._updateControls = function() { // Show previous arrow when it's out of limit
        if (this._hasPrevMonth()) {
            tiny.removeClass(this._prev, 'ch-hide');
            this._prev.setAttribute('aria-hidden', 'false'); // Hide previous arrow when it's out of limit
        } else {
            tiny.addClass(this._prev, 'ch-hide');
            this._prev.setAttribute('aria-hidden', 'true');
        } // Show next arrow when it's out of limit
        if (this._hasNextMonth()) {
            tiny.removeClass(this._next, 'ch-hide');
            this._next.setAttribute('aria-hidden', 'false'); // Hide next arrow when it's out of limit
        } else {
            tiny.addClass(this._next, 'ch-hide');
            this._next.setAttribute('aria-hidden', 'true');
        }
        return this;
    };
    /**
     * Refresh the structure of Calendar's table with a new date.
     * @function
     * @private
     */
    Calendar.prototype._updateTemplate = function(date) {
        var month; // Update "currentDate" object
        this._dates.current = typeof date === 'string' ? createDateObject(date) : date; // Delete old table
        month = this.container.querySelector('table');
        this.container.removeChild(month); // Append new table to content
        this.container.insertAdjacentHTML('beforeend', this._createTemplate(this._dates.current)); // Refresh arrows
        this._updateControls();
        return this;
    };
    /**
     * Creates a complete month in a table.
     * @function
     * @private
     */
    Calendar.prototype._createTemplate = function(date) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            cell, positive, day, isSelected, thead = function() { // Create thead structure
                var t = ['<thead><tr role="row">'],
                    dayIndex; // Add week names
                for (dayIndex = 0; dayIndex < 7; dayIndex += 1) {
                    t.push('<th role="columnheader">' + that._defaults.weekdays[dayIndex] + '</th>');
                } // Close thead structure
                t.push('</tr></thead>'); // Join structure and return
                return t.join('');
            }(),
            table = ['<table class="ch-calendar-month" role="grid" id="ch-calendar-grid-' + that.uid + '">', '<caption>' + that._defaults.monthsNames[date.month - 1] + ' - ' + date.year + '</caption>', thead], // Total amount of days into month
            cells = function() { // Amount of days of current month
                var currentMonth = new Date(date.year, date.month, 0).getDate(), // Amount of days of previous month
                    prevMonth = new Date([date.year, date.month, '01'].join('/')).getDay(), // Merge amount of previous and current month
                    subtotal = prevMonth + currentMonth, // Amount of days into last week of month
                    latest = subtotal % 7, // Amount of days of next month
                    nextMonth = latest > 0 ? 7 - latest : 0;
                return {
                    'previous': prevMonth,
                    'subtotal': subtotal,
                    'total': subtotal + nextMonth
                };
            }();
        table.push('<tbody><tr class="ch-calendar-week" role="row">'); // Iteration of weekdays
        for (cell = 0; cell < cells.total; cell += 1) { // Push an empty cell on previous and next month
            if (cell < cells.previous || cell > cells.subtotal - 1) {
                table.push('<td role="gridcell" class="ch-calendar-other">X</td>');
            } else { // Positive number of iteration
                positive = cell + 1; // Day number
                day = positive - cells.previous; // Define if it's the day selected
                isSelected = this._isSelected(date.year, date.month, day); // Create cell
                table.push( // Open cell structure including WAI-ARIA and classnames space opening
                    '<td role="gridcell"' + (isSelected ? ' aria-selected="true"' : '') + ' class="ch-calendar-day', // Add Today classname if it's necesary
                    date.year === that._dates.today.year && date.month === that._dates.today.month && day === that._dates.today.day ? ' ch-calendar-today' : null, // Add Selected classname if it's necesary
                    isSelected ? ' ch-calendar-selected ' : null, // From/to range. Disabling cells
                    // Disable cell if it's out of FROM range
                    that._dates.range.from && day < that._dates.range.from.day && date.month === that._dates.range.from.month && date.year === that._dates.range.from.year || // Disable cell if it's out of TO range
                    that._dates.range.to && day > that._dates.range.to.day && date.month === that._dates.range.to.month && date.year === that._dates.range.to.year ? ' ch-calendar-disabled' : null, // Close classnames attribute and print content closing cell structure
                    '">' + day + '</td>'); // Cut week if there are seven days
                if (positive % 7 === 0) {
                    table.push('</tr><tr class="ch-calendar-week" role="row">');
                }
            }
        }
        table.push('</tr></tbody></table>'); // Return table object
        return table.join('');
    };
    /**
     * Checks if a given date is into 'from' and 'to' dates.
     * @function
     * @private
     */
    Calendar.prototype._isInRange = function(date) {
        var inRangeFrom = true,
            inRangeTo = true;
        if (this._dates.range.from) {
            inRangeFrom = this._dates.range.from.native <= date.native;
        }
        if (this._dates.range.to) {
            inRangeTo = this._dates.range.to.native >= date.native;
        }
        return inRangeFrom && inRangeTo;
    };
    /**
     * Indicates if an specific date is selected or not (including date ranges and simple dates).
     * @function
     * @private
     */
    Calendar.prototype._isSelected = function(year, month, day) {
        var yepnope;
        if (!this._dates.selected) {
            return;
        }
        yepnope = false; // Simple selection
        if (!Array.isArray(this._dates.selected)) {
            if (year === this._dates.selected.year && month === this._dates.selected.month && day === this._dates.selected.day) {
                yepnope = true;
                return yepnope;
            } // Multiple selection (ranges)
        } else {
            this._dates.selected.forEach(function(e) { // Simple date
                if (!Array.isArray(e)) {
                    if (year === e.year && month === e.month && day === e.day) {
                        yepnope = true;
                        return yepnope;
                    } // Range
                } else {
                    if (year >= e[0].year && month >= e[0].month && day >= e[0].day && year <= e[1].year && month <= e[1].month && day <= e[1].day) {
                        yepnope = true;
                        return yepnope;
                    }
                }
            });
        }
        return yepnope;
    };
    /**
     * Selects a specific date or returns the selected date.
     * @memberof! ch.Calendar.prototype
     * @function
     * @param {String} [date] A given date to select. The format of the given date should be "YYYY/MM/DD".
     * @returns {calendar}
     * @example
     * // Returns the selected date.
     * calendar.select();
     * @example
     * // Select a specific date.
     * calendar.select('2014/05/28');
     */
    Calendar.prototype.select = function(date) { // Getter
        if (!date) {
            if (this._dates.selected === undefined) {
                return;
            }
            return FORMAT_dates[this._options.format](this._dates.selected);
        } // Setter
        var newDate = createDateObject(date);
        if (!this._isInRange(newDate)) {
            return this;
        } // Update selected date
        this._dates.selected = date === 'today' ? this._dates.today : newDate; // Create a new table of selected month
        this._updateTemplate(this._dates.selected);
        /**
         * Event emitted when a date is selected.
         * @event ch.Calendar#select
         * @example
         * // Subscribe to "select" event.
         * calendar.on('select', function () {
         *     // Some code here!
         * });
         */
        this.emit('select');
        return this;
    };
    /**
     * Returns date of today
     * @memberof! ch.Calendar.prototype
     * @function
     * @returns {String} The date of today
     * @example
     * // Get the date of today.
     * var today = calendar.getToday();
     */
    Calendar.prototype.getToday = function() {
        return FORMAT_dates[this._options.format](this._dates.today);
    };
    /**
     * Moves to the next month.
     * @memberof! ch.Calendar.prototype
     * @function
     * @returns {calendar}
     * @example
     * // Moves to the next month.
     * calendar.nextMonth();
     */
    Calendar.prototype.nextMonth = function() {
        if (!this._enabled || !this._hasNextMonth()) {
            return this;
        } // Next year
        if (this._dates.current.month === 12) {
            this._dates.current.month = 0;
            this._dates.current.year += 1;
        } // Create a new table of selected month
        this._updateTemplate([this._dates.current.year, this._dates.current.month + 1, '01'].join('/'));
        /**
         * Event emitted when a next month is shown.
         * @event ch.Calendar#nextmonth
         * @example
         * // Subscribe to "nextmonth" event.
         * calendar.on('nextmonth', function () {
         *     // Some code here!
         * });
         */
        this.emit('nextmonth');
        return this;
    };
    /**
     * Move to the previous month.
     * @memberof! ch.Calendar.prototype
     * @function
     * @returns {calendar}
     * @example
     * // Moves to the prev month.
     * calendar.prevMonth();
     */
    Calendar.prototype.prevMonth = function() {
        if (!this._enabled || !this._hasPrevMonth()) {
            return this;
        } // Previous year
        if (this._dates.current.month === 1) {
            this._dates.current.month = 13;
            this._dates.current.year -= 1;
        } // Create a new table to the prev month
        this._updateTemplate([this._dates.current.year, this._dates.current.month - 1, '01'].join('/'));
        /**
         * Event emitted when a previous month is shown.
         * @event ch.Calendar#prevmonth
         * @example
         * // Subscribe to "prevmonth" event.
         * calendar.on('prevmonth', function () {
         *     // Some code here!
         * });
         */
        this.emit('prevmonth');
        return this;
    };
    /**
     * Move to the next year.
     * @memberof! ch.Calendar.prototype
     * @function
     * @returns {calendar}
     * @example
     * // Moves to the next year.
     * calendar.nextYear();
     */
    Calendar.prototype.nextYear = function() {
        if (!this._enabled || !this._hasNextMonth()) {
            return this;
        } // Create a new table of selected month
        this._updateTemplate([this._dates.current.year + 1, this._dates.current.month, '01'].join('/'));
        /**
         * Event emitted when a next year is shown.
         * @event ch.Calendar#nextyear
         * @example
         * // Subscribe to "nextyear" event.
         * calendar.on('nextyear', function () {
         *     // Some code here!
         * });
         */
        this.emit('nextyear');
        return this;
    };
    /**
     * Move to the previous year.
     * @memberof! ch.Calendar.prototype
     * @function
     * @returns {calendar}
     * @example
     * // Moves to the prev year.
     * calendar.prevYear();
     */
    Calendar.prototype.prevYear = function() {
        if (!this._enabled || !this._hasPrevMonth()) {
            return this;
        } // Create a new table to the prev year
        this._updateTemplate([this._dates.current.year - 1, this._dates.current.month, '01'].join('/'));
        /**
         * Event emitted when a previous year is shown.
         * @event ch.Calendar#prevyear
         * @example
         * // Subscribe to "prevyear" event.
         * calendar.on('prevyear', function () {
         *     // Some code here!
         * });
         */
        this.emit('prevyear');
        return this;
    };
    /**
     * Set a minimum selectable date.
     * @memberof! ch.Calendar.prototype
     * @function
     * @param {String} date A given date to set as minimum selectable date. The format of the given date should be "YYYY/MM/DD".
     * @returns {calendar}
     * @example
     * // Set a minimum selectable date.
     * calendar.setFrom('2010/05/28');
     */
    Calendar.prototype.setFrom = function(date) { // this from is a reference to the global form
        this._dates.range.from = date === 'auto' ? undefined : createDateObject(date);
        this._updateTemplate(this._dates.current);
        return this;
    };
    /**
     * Set a maximum selectable date.
     * @memberof! ch.Calendar.prototype
     * @function
     * @param {String} date A given date to set as maximum selectable date. The format of the given date should be "YYYY/MM/DD".
     * @returns {calendar}
     * @example
     * // Set a maximum selectable date.
     * calendar.setTo('2014/05/28');
     */
    Calendar.prototype.setTo = function(date) { // this to is a reference to the global to
        this._dates.range.to = date === 'auto' ? undefined : createDateObject(date);
        this._updateTemplate(this._dates.current);
        return this;
    };
    /**
     * Destroys a Calendar instance.
     * @memberof! ch.Calendar.prototype
     * @function
     * @example
     * // Destroy a calendar
     * calendar.destroy();
     * // Empty the calendar reference
     * calendar = undefined;
     */
    Calendar.prototype.destroy = function() {
        this._el.parentNode.replaceChild(this._snippet, this._el);
        tiny.trigger(window.document, ch.onlayoutchange);
        parent.destroy.call(this);
        return;
    }; // Factorize
    ch.factory(Calendar, normalizeOptions);
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * Dropdown shows a list of options for navigation.
     * @memberof ch
     * @constructor
     * @augments ch.Layer
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Dropdown.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.addClass] CSS class names that will be added to the container on the component initialization.
     * @param {String} [options.fx] Enable or disable UI effects. You must use: "slideDown", "fadeIn" or "none". Default: "none".
     * @param {String} [options.width] Set a width for the container. Default: "auto".
     * @param {String} [options.height] Set a height for the container. Default: "auto".
     * @param {String} [options.shownby] Determines how to interact with the trigger to show the container. You must use: "pointertap", "pointerenter" or "none". Default: "pointertap".
     * @param {String} [options.hiddenby] Determines how to hide the component. You must use: "button", "pointers", "pointerleave", "all" or "none". Default: "pointers".
     * @param {HTMLElement} [options.reference] It's a reference to position and size of element that will be considered to carry out the position. Default: the trigger element.
     * @param {String} [options.side] The side option where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "bottom".
     * @param {String} [options.align] The align options where the target element will be positioned. Its value can be: "left", "right", "top", "bottom" or "center". Default: "left".
     * @param {Number} [options.offsetX] The offsetX option specifies a distance to displace the target horizontally. Default: 0.
     * @param {Number} [options.offsetY] The offsetY option specifies a distance to displace the target vertically. Default: -1.
     * @param {String} [options.position] The position option specifies the type of positioning used. Its value must be "absolute" or "fixed". Default: "absolute".
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading. Default: '&lt;div class="ch-loading ch-loading-centered"&gt;&lt;/div&gt;'.
     * @param {Boolean} [options.skin] Sets a CSS class name to the trigger and container to get a variation of Dropdown. Default: false.
     * @param {Boolean} [options.shortcuts] Configures navigation shortcuts. Default: true.
     * @param {(String | HTMLElement)} [options.content] The content to be shown into the Dropdown container.
     * @returns {dropdown} Returns a new instance of Dropdown.
     * @example
     * // Create a new Dropdown.
     * var dropdown = new ch.Dropdown([el], [options]);
     * @example
     * // Create a new skinned Dropdown.
     * var dropdown = new ch.Dropdown({
     *     'skin': true
     * });
     */
    function Dropdown(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Dropdown is created.
             * @memberof! ch.Dropdown.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Dropdown#ready
         * @example
         * // Subscribe to "ready" event.
         * dropdown.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Dropdown, ch.Layer);
    var parent = Dropdown.super_.prototype;
    /**
     * The name of the component.
     * @memberof! ch.Dropdown.prototype
     * @type {String}
     */
    Dropdown.prototype.name = 'dropdown';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Dropdown.prototype
     * @function
     */
    Dropdown.prototype.constructor = Dropdown;
    /**
     * Configuration by default.
     * @memberof! ch.Dropdown.prototype
     * @type {Object}
     * @private
     */
    Dropdown.prototype._defaults = tiny.extend(tiny.clone(parent._defaults), {
        '_className': 'ch-dropdown ch-box-lite',
        '_ariaRole': 'combobox',
        'fx': 'none',
        'shownby': 'pointertap',
        'hiddenby': 'pointers',
        'offsetY': -1,
        'skin': false,
        'shortcuts': true
    });
    /**
     * Initialize a new instance of Dropdown and merge custom options with defaults options.
     * @memberof! ch.Dropdown.prototype
     * @function
     * @private
     * @returns {dropdown}
     */
    Dropdown.prototype._init = function(el, options) { // Call to its parent init method
        parent._init.call(this, el, options);
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this, // The second element of the HTML snippet (the dropdown content)
            content = tiny.next(this.trigger);
        /**
         * The dropdown trigger. It's the element that will show and hide the container.
         * @type {HTMLElement}
         */
        this.trigger.setAttribute('aria-activedescendant', 'ch-dropdown' + this.uid + '-selected');
        tiny.addClass(this.trigger, 'ch-dropdown-trigger');
        this.trigger.setAttribute('unselectable', 'on');
        tiny.addClass(this.trigger, 'ch-user-no-select'); // Skinned dropdown
        if (this._options.skin) {
            tiny.addClass(this.trigger, 'ch-dropdown-trigger-skin');
            tiny.addClass(this.container, 'ch-dropdown-skin'); // Default Skin
        } else {
            tiny.addClass(this.trigger, 'ch-btn-skin');
            tiny.addClass(this.trigger, 'ch-btn-small');
        }
        /**
         * A list of links with the navigation options of the component.
         * @type {NodeList}
         * @private
         */
        this._navigation = function() {
            var items = content.querySelectorAll('a');
            Array.prototype.forEach.call(items, function(item, index) {
                item.setAttribute('role', 'option');
                tiny.on(item, ch.onpointerenter, function() {
                    that._navigation[that._selected = index].focus();
                });
            });
            return items;
        }();
        if (this._options.shortcuts && this._navigationShortcuts !== undefined) {
            this._navigationShortcuts();
        }
        this._options.content = content;
        /**
         * The original and entire element and its state, before initialization.
         * @private
         * @type {HTMLElement}
         */ // cloneNode(true) > parameters is required. Opera & IE throws and internal error. Opera mobile breaks.
        this._snippet = this._options.content.cloneNode(true);
        return this;
    };
    /**
     * Shows the dropdown container.
     * @memberof! ch.Dropdown.prototype
     * @function
     * @param {(String | HTMLElement)} [content] The content that will be used by dropdown.
     * @param {Object} [options] A custom options to be used with content loaded by ajax.
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading.
     * @returns {dropdown}
     * @example
     * // Shows a basic dropdown.
     * dropdown.show();
     * @example
     * // Shows a dropdown with new content
     * dropdown.show('Some new content here!');
     * @example
     * // Shows a dropdown with a new content that will be loaded by ajax with some custom options
     * dropdown.show('http://domain.com/ajax/url', {
     *     'cache': false,
     *     'params': 'x-request=true'
     * });
     */
    Dropdown.prototype.show = function(content, options) { // Don't execute when it's disabled
        if (!this._enabled) {
            return this;
        } // Execute the original show()
        parent.show.call(this, content, options);
        this._selected = -1;
        return this;
    };
    /**
     * Destroys a Dropdown instance.
     * @memberof! ch.Dropdown.prototype
     * @function
     * @example
     * // Destroy a dropdown
     * dropdown.destroy();
     * // Empty the dropdown reference
     * dropdown = undefined;
     */
    Dropdown.prototype.destroy = function() {
        var trigger = this.trigger;
        ['ch-dropdown-trigger', 'ch-dropdown-trigger-skin', 'ch-user-no-select', 'ch-btn-skin', 'ch-btn-small'].forEach(function(className) {
            tiny.removeClass(trigger, className);
        });
        trigger.removeAttribute('unselectable');
        trigger.removeAttribute('aria-controls');
        trigger.insertAdjacentHTML('afterend', this._snippet);
        tiny.trigger(window.document, ch.onlayoutchange);
        parent.destroy.call(this);
        return;
    };
    ch.factory(Dropdown);
})(undefined, undefined.ch);
(function(ch) {
    'use strict';
    /**
     * Highlights the current option when navigates by keyboard.
     * @function
     * @private
     */
    ch.Dropdown.prototype._highlightOption = function(key) {
        var optionsLength = this._navigation.length;
        if (!this._shown) {
            return;
        } // Sets limits behavior
        if (this._selected === (key === ch.onkeydownarrow ? optionsLength - 1 : 0)) {
            return;
        } // Unselects current option
        if (this._selected !== -1) {
            this._navigation[this._selected].blur();
            this._navigation[this._selected].removeAttribute('id');
        }
        if (key === ch.onkeydownarrow) {
            this._selected += 1;
        } else {
            this._selected -= 1;
        } // Selects new current option
        this._navigation[this._selected].focus();
        this._navigation[this._selected].id = 'ch-dropdown' + this.uid + '-selected';
    };
    /**
     * Add handlers to manage the keyboard on Dropdown navigation.
     * @function
     * @private
     */
    ch.Dropdown.prototype._navigationShortcuts = function() {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        ch.shortcuts.add(ch.onkeyuparrow, this.uid, function(event) { // Prevent default behavior
            event.preventDefault();
            that._highlightOption(event.shortcut);
        });
        ch.shortcuts.add(ch.onkeydownarrow, this.uid, function(event) { // Prevent default behavior
            event.preventDefault();
            that._highlightOption(event.shortcut);
        });
        this.once('destroy', function() {
            ch.shortcuts.remove(ch.onkeyuparrow, that.uid);
            ch.shortcuts.remove(ch.onkeydownarrow, that.uid);
        });
        return this;
    };
})(undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * Tabs lets you create tabs for static and dynamic content.
     * @memberof ch
     * @constructor
     * @augments ch.Component
     * @requires ch.Expandable
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Tabs.
     * @param {Object} [options] Options to customize an instance.
     * @returns {tabs} Returns a new instance of Tabs.
     * @example
     * // Create a new Tabs.
     * var tabs = new ch.Tabs(el);
     */
    function Tabs(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Tabs is created.
             * @memberof! ch.Tabs.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Emits the event 'ready' when the component is ready to use.
         * @event ch.Tabs#ready
         * @example
         * // Subscribe to "ready" event.
         * tabs.on('ready',function () {
         *     this.show();
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Tabs, ch.Component); // Inheritance
    var parent = Tabs.super_.prototype,
        location = window.location, // Creates methods enable and disable into the prototype.
        methods = ['enable', 'disable'],
        len = methods.length, // Regular expresion to get hash
        hashRegExp = new RegExp('\\#!?\\/?(.[^\\?|\\&|\\s]+)');

    function createMethods(method) {
        Tabs.prototype[method] = function(tab) {
            var i; // Enables or disables an specifc tab panel
            if (tab !== undefined) {
                this.tabpanels[tab - 1][method](); // Enables or disables Tabs
            } else {
                i = this.tabpanels.length;
                while (i) {
                    this.tabpanels[i -= 1][method]();
                } // Executes parent method
                parent[method].call(this); // Updates "aria-disabled" attribute
                this._el.setAttribute('aria-disabled', !this._enabled);
            }
            return this;
        };
    }
    /**
     * The name of the component.
     * @memberof! ch.Tabs.prototype
     * @type {String}
     * @example
     * // You can reach the associated instance.
     * var tabs = $(selector).data('tabs');
     */
    Tabs.prototype.name = 'tabs';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Tabs.prototype
     * @function
     */
    Tabs.prototype.constructor = Tabs;
    /**
     * Initialize a new instance of Tabs and merge custom options with defaults options.
     * @memberof! ch.Tabs.prototype
     * @function
     * @private
     * @returns {tabs}
     */
    Tabs.prototype._init = function(el, options) {
        parent._init.call(this, el, options);
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        /**
         * The actual location hash, is used to know if there's a specific tab panel shwown.
         * @type {String}
         * @private
         */
        this._currentHash = function() {
            var hash = location.hash.match(hashRegExp);
            return hash !== null ? hash[1] : '';
        }(); // cloneNode(true) > parameters is required. Opera & IE throws and internal error. Opera mobile breaks.
        this._snippet = this._el.cloneNode(true);
        /**
         * The tabs container.
         * @type {HTMLElement}
         */
        this.container = this._el;
        tiny.addClass(this.container, 'ch-tabs');
        /**
         * The tabs triggers.
         * @type {HTMLElement}
         */
        this.triggers = this.container.children[0];
        this.triggers.setAttribute('role', 'tablist');
        tiny.addClass(this.triggers, 'ch-tabs-triggers');
        /**
         * A collection of tab panel.
         * @type {Array}
         */
        this.tabpanels = [];
        /**
         * The container of tab panels.
         * @type {HTMLElement}
         */
        this.panel = this.container.children[1];
        this.panel.setAttribute('role', 'presentation');
        tiny.addClass(this.panel, 'ch-tabs-panel');
        tiny.addClass(this.panel, 'ch-box-lite');
        /**
         * The tab panel's containers.
         * @type {HTMLElement}
         * @private
         */
        this._tabsPanels = this.panel.children; // Creates tab
        Array.prototype.forEach.call(this.triggers.getElementsByTagName('a'), function(el, index) {
            that._createTab(index, el);
        }); // Set the default shown tab.
        this._shown = 1; // Checks if the url has a hash to shown the associated tab.
        this._hasHash();
        return this;
    };
    /**
     * Create tab panels.
     * @function
     * @private
     */
    Tabs.prototype._createTab = function(i, e) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            tab, panel = this._tabsPanels[i], // Create Tab panel's options
            options = {
                '_classNameIcon': null,
                '_classNameTrigger': 'ch-tab',
                '_classNameContainer': 'ch-tabpanel',
                'toggle': false
            }; // Tab panel async configuration
        if (panel === undefined) {
            panel = document.createElement('div');
            panel.setAttribute('id', e.href.split('#')[1]);
            this.panel.appendChild(panel);
            options.content = e.href;
            options.waiting = this._options.waiting;
            options.cache = this._options.cache;
            options.method = this._options.method;
        } // Tab panel container configuration
        options.container = panel; // Creates new Tab panel
        tab = new ch.Expandable(e, options); // Creates tab's hash
        tab._hash = e.href.split('#')[1]; // Add ARIA roles
        tab.trigger.setAttribute('role', 'tab');
        tab.container.setAttribute('role', 'tabpanel'); // Binds show event
        tab.on('show', function() {
            that._updateShown(i + 1);
        }); // Adds tab panel to the collection
        this.tabpanels.push(tab);
        return this;
    };
    /**
     * Checks if the url has a hash to shown the associated tab panel.
     * @function
     * @private
     */
    Tabs.prototype._hasHash = function() {
        /**
         * Event emitted when a tab hide a tab panel container.
         * @event ch.Tabs#hide
         * @example
         * // Subscribe to "hide" event.
         * tabs.on('hide', function () {
         *     // Some code here!
         * });
         */
        this.emit('hide', this._shown);
        var i = 0, // Shows the first tab panel if not hash or it's hash and it isn't from the current tab panel,
            l = this.tabpanels.length; // If hash open that tab panel
        for (i; i < l; i += 1) {
            if (this.tabpanels[i]._hash === this._currentHash) {
                this._shown = i + 1;
                break;
            }
        }
        this.tabpanels[this._shown - 1].show();
        /**
         * Event emitted when the tabs shows a tab panel container.
         * @event ch.Tabs#show
         * @ignore
         */
        this.emit('show', this._shown);
        return this;
    };
    /**
     * Shows a specific tab panel.
     * @memberof! ch.Tabs.prototype
     * @function
     * @param {Number} tab - A given number of tab panel.
     * @returns {tabs}
     * @example
     * // Shows the second tab panel.
     * tabs.show(2);
     */
    Tabs.prototype.show = function(tab) { // Shows the current tab
        this.tabpanels[tab - 1].show();
        return this;
    };
    /**
     * Updates the shown tab panel, hides the previous tab panel, changes window location and emits "show" event.
     * @memberof! ch.Tabs.prototype
     * @function
     * @private
     * @param {Number} tab - A given number of tab panel.
     */
    Tabs.prototype._updateShown = function(tab) { // If tab doesn't exist or if it's shown do nothing
        if (this._shown === tab) {
            return this;
        }
        /**
         * Event emitted when a tab hide a tab panel container.
         * @event ch.Tabs#hide
         * @example
         * // Subscribe to "hide" event.
         * tabs.on('hide', function () {
         *     // Some code here!
         * });
         */
        this.emit('hide', this._shown); // Hides the shown tab
        this.tabpanels[this._shown - 1].hide();
        /**
         * Get wich tab panel is shown.
         * @name ch.Tabs#_shown
         * @type {Number}
         * @private
         */
        this._shown = tab; // Update window location hash
        location.hash = this._currentHash = this._currentHash === '' ? // If the current hash is empty, create it.
            '#!/' + this.tabpanels[this._shown - 1]._hash // update only the previous hash
            : location.hash.replace(location.hash.match(hashRegExp)[1], this.tabpanels[this._shown - 1]._hash);
        /**
         * Event emitted when the tabs shows a tab panel container.
         * @event ch.Tabs#show
         * @example
         * // Subscribe to "show" event.
         * tabs.on('show', function (shownTab) {
         *     // Some code here!
         * });
         */
        this.emit('show', this._shown);
        return this;
    };
    /**
     * Returns the number of the shown tab panel.
     * @memberof! ch.Tabs.prototype
     * @function
     * @returns {Boolean}
     * @example
     * if (tabs.getShown() === 1) {
     *     fn();
     * }
     */
    Tabs.prototype.getShown = function() {
        return this._shown;
    };
    /**
     * Allows to manage the tabs content.
     * @param {Number} tab A given tab to change its content.
     * @param {HTMLElement} content The content that will be used by a tabpanel.
     * @param {Object} [options] A custom options to be used with content loaded by ajax.
     * @param {String} [options.method] The type of request ("POST" or "GET") to load content by ajax. Default: "GET".
     * @param {String} [options.params] Params like query string to be sent to the server.
     * @param {Boolean} [options.cache] Force to cache the request by the browser. Default: true.
     * @param {Boolean} [options.async] Force to sent request asynchronously. Default: true.
     * @param {(String | HTMLElement)} [options.waiting] Temporary content to use while the ajax request is loading.
     * @example
     * // Updates the content of the second tab with some string.
     * tabs.content(2, 'http://ajax.com', {'cache': false});
     */
    Tabs.prototype.content = function(tab, content, options) {
        if (tab === undefined || typeof tab !== 'number') {
            throw new window.Error('Tabs.content(tab, content, options): Expected a number of tab.');
        }
        if (content === undefined) {
            return this.tab[tab - 1].content();
        }
        this.tabpanels[tab - 1].content(content, options);
        return this;
    };
    /**
     * Enables an instance of Tabs or a specific tab panel.
     * @memberof! ch.Tabs.prototype
     * @name enable
     * @function
     * @param {Number} [tab] - A given number of tab panel to enable.
     * @returns {tabs} Returns an instance of Tabs.
     * @example
     * // Enabling an instance of Tabs.
     * tabs.enable();
     * @example
     * // Enabling the second tab panel of a tabs.
     * tabs.enable(2);
     */
    /**
     * Disables an instance of Tabs or a specific tab panel.
     * @memberof! ch.Tabs.prototype
     * @name disable
     * @function
     * @param {Number} [tab] - A given number of tab panel to disable.
     * @returns {tabs} Returns an instance of Tabs.
     * @example
     * // Disabling an instance of Tabs.
     * tabs.disable();
     * @example
     * // Disabling the second tab panel.
     * tabs.disable(2);
     */
    while (len) {
        createMethods(methods[len -= 1]);
    }
    /**
     * Destroys a Tabs instance.
     * @memberof! ch.Tabs.prototype
     * @function
     * @example
     * // Destroying an instance of Tabs.
     * tabs.destroy();
     */
    Tabs.prototype.destroy = function() {
        this._el.parentNode.replaceChild(this._snippet, this._el);
        tiny.trigger(window.document, ch.onlayoutchange);
        parent.destroy.call(this);
    };
    /**
     * Factory
     */
    ch.factory(Tabs);
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * A large list of elements. Some elements will be shown in a preset area, and others will be hidden waiting for the user interaction to show it.
     * @memberof ch
     * @constructor
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Carousel.
     * @param {Object} [options] Options to customize an instance.
     * @param {Number} [options.async] Defines the number of future asynchronous items to add to the component. Default: 0.
     * @param {Boolean} [options.arrows] Defines if the arrow-buttons must be created or not at initialization. Default: true.
     * @param {Boolean} [options.pagination] Defines if a pagination must be created or not at initialization. Default: false.
     * @param {Boolean} [options.fx] Enable or disable the slide effect. Default: true.
     * @param {Boolean} [options.autoHeight] Enable or disable the recalculation of item height on a proportional basis maintaining the proportions of an item. Default: true.
     * @param {Number} [options.limitPerPage] Set the maximum amount of items to show in each page.
     * @returns {carousel} Returns a new instance of Carousel.
     * @example
     * // Create a new carousel.
     * var carousel = new ch.Carousel(el, [options]);
     * @example
     * // Create a new Carousel with disabled effects.
     * var carousel = new ch.Carousel(el, {
     *     'fx': false
     * });
     * @example
     * // Create a new Carousel with items asynchronously loaded.
     * var carousel = new ch.Carousel(el, {
     *     'async': 10
     * }).on('itemsadd', function (collection) {
     *     // Inject content into the added <li> elements
     *     $.each(collection, function (i, e) {
     *         e.innerHTML = 'Content into one of newly inserted <li> elements.';
     *     });
     * });
     */
    function Carousel(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Carousel is created.
             * @memberof! ch.Carousel.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Carousel#ready
         * @example
         * // Subscribe to "ready" event.
         * carousel.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Carousel, ch.Component);
    var pointertap = ch.onpointertap,
        Math = window.Math,
        setTimeout = window.setTimeout,
        parent = Carousel.super_.prototype;
    /**
     * Reference to the vendor prefix of the current browser.
     *
     * @private
     * @constant
     * @type {String}
     * @link http://lea.verou.me/2009/02/find-the-vendor-prefix-of-the-current-browser
     * @example
     * VENDOR_PREFIX === 'webkit';
     */
    var VENDOR_PREFIX = function() {
        var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,
            styleDeclaration = document.getElementsByTagName('script')[0].style,
            prop;
        for (prop in styleDeclaration) {
            if (regex.test(prop)) {
                return prop.match(regex)[0].toLowerCase();
            }
        } // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
        // However (prop in style) returns the correct value, so we'll have to test for
        // the precence of a specific property
        if ('WebkitOpacity' in styleDeclaration) {
            return 'webkit';
        }
        if ('KhtmlOpacity' in styleDeclaration) {
            return 'khtml';
        }
        return '';
    }();
    /**
     * The name of the component.
     * @memberof! ch.Carousel.prototype
     * @type {String}
     */
    Carousel.prototype.name = 'carousel';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Carousel.prototype
     * @function
     */
    Carousel.prototype.constructor = Carousel;
    /**
     * Configuration by default.
     * @memberof! ch.Carousel.prototype
     * @type {Object}
     * @private
     */
    Carousel.prototype._defaults = {
        'async': 0,
        'arrows': true,
        'pagination': false,
        'fx': true,
        'autoHeight': true
    };
    /**
     * Initialize a new instance of Carousel and merge custom options with defaults options.
     * @memberof! ch.Carousel.prototype
     * @function
     * @private
     * @returns {carousel}
     */
    Carousel.prototype._init = function(el, options) { // Call to its parents init method
        parent._init.call(this, el, options);
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        /**
         * The original and entire element and its state, before initialization.
         * @type {HTMLDivElement}
         * @private
         */ // cloneNode(true) > parameters is required. Opera & IE throws and internal error. Opera mobile breaks.
        this._snippet = this._el.cloneNode(true);
        /**
         * Element that moves (slides) across the component (inside the mask).
         * @private
         * @type {HTMLElement}
         */
        this._list = this._el.children[0];
        tiny.addClass(this._el, 'ch-carousel');
        tiny.addClass(this._list, 'ch-carousel-list');
        /**
         * Collection of each child of the slider list.
         * @private
         * @type {HTMLCollection}
         */
        this._items = function() {
            var collection = that._list.querySelectorAll('li');
            Array.prototype.forEach.call(collection, function(item) {
                tiny.addClass(item, 'ch-carousel-item');
            });
            return collection;
        }();
        /**
         * Element that wraps the list and denies its overflow.
         * @private
         * @type {HTMLDivElement}
         */
        this._mask = document.createElement('div');
        this._mask.setAttribute('role', 'tabpanel');
        this._mask.setAttribute('class', 'ch-carousel-mask');
        this._mask.appendChild(this._list);
        this._el.appendChild(this._mask);
        /**
         * Size of the mask (width). Updated in each refresh.
         * @private
         * @type {Number}
         */
        this._maskWidth = this._getOuterDimensions(this._mask).width;
        /**
         * The width of each item, including paddings, margins and borders. Ideal for make calculations.
         * @private
         * @type {Number}
         */
        this._itemWidth = this._getOuterDimensions(this._items[0]).width;
        /**
         * The width of each item, without paddings, margins or borders. Ideal for manipulate CSS width property.
         * @private
         * @type {Number}
         */
        this._itemOuterWidth = parseInt(tiny.css(this._items[0], 'width'));
        /**
         * The size added to each item to make it elastic/responsive.
         * @private
         * @type {Number}
         */
        this._itemExtraWidth = 0;
        /**
         * The height of each item, including paddings, margins and borders. Ideal for make calculations.
         * @private
         * @type {Number}
         */
        this._itemHeight = this._getOuterDimensions(this._items[0]).height;
        /**
         * The margin of all items. Updated in each refresh only if it's necessary.
         * @private
         * @type {Number}
         */
        this._itemMargin = 0;
        /**
         * Flag to control when arrows were created.
         * @private
         * @type {Boolean}
         */
        this._arrowsCreated = false;
        /**
         * Flag to control when pagination was created.
         * @private
         * @type {Boolean}
         */
        this._paginationCreated = false;
        /**
         * Amount of items in each page. Updated in each refresh.
         * @private
         * @type {Number}
         */
        this._limitPerPage = 0;
        /**
         * Page currently showed.
         * @private
         * @type {Number}
         */
        this._currentPage = 1;
        /**
         * Total amount of pages. Data updated in each refresh.
         * @private
         * @type {Number}
         */
        this._pages = 0;
        /**
         * Distance needed to move ONLY ONE PAGE. Data updated in each refresh.
         * @private
         * @type {Number}
         */
        this._pageWidth = 0;
        /**
         * List of items that should be loaded asynchronously on page movement.
         * @private
         * @type {Number}
         */
        this._async = this._options.async;
        /**
         * UI element of arrow that moves the Carousel to the previous page.
         * @private
         * @type {HTMLDivElement}
         */
        this._prevArrow = document.createElement('div');
        this._prevArrow.setAttribute('role', 'button');
        this._prevArrow.setAttribute('aria-hidden', 'true');
        this._prevArrow.setAttribute('class', 'ch-carousel-prev ch-carousel-disabled');
        tiny.on(this._prevArrow, pointertap, function() {
            that.prev();
        }, false);
        /**
         * UI element of arrow that moves the Carousel to the next page.
         * @private
         * @type {HTMLDivElement}
         */
        this._nextArrow = document.createElement('div');
        this._nextArrow.setAttribute('role', 'button');
        this._nextArrow.setAttribute('aria-hidden', 'true');
        this._nextArrow.setAttribute('class', 'ch-carousel-next');
        tiny.on(this._nextArrow, pointertap, function() {
            that.next();
        }, false);
        /**
         * UI element that contains all the thumbnails for pagination.
         * @private
         * @type {HTMLDivElement}
         */
        this._pagination = document.createElement('div');
        this._pagination.setAttribute('role', 'navigation');
        this._pagination.setAttribute('class', 'ch-carousel-pages');
        tiny.on(this._pagination, pointertap, function(event) { // Get the page from the element
            var page = event.target.getAttribute('data-page'); // Allow interactions from a valid page of pagination
            if (page !== null) {
                that.select(window.parseInt(page, 10));
            }
        }, false); // Refresh calculation when the viewport resizes
        ch.viewport.on('resize', function() {
            that.refresh();
        }); // If efects aren't needed, avoid transition on list
        if (!this._options.fx) {
            tiny.addClass(this._list, 'ch-carousel-nofx');
        } // Position absolutelly the list when CSS transitions aren't supported
        if (!tiny.support.transition) {
            this._list.style.cssText += 'position:absolute;left:0;';
        } // If there is a parameter specifying a pagination, add it
        if (this._options.pagination) {
            this._addPagination();
        } // Allow to render the arrows
        if (this._options.arrows !== undefined && this._options.arrows !== false) {
            this._addArrows();
        } // Set WAI-ARIA properties to each item depending on the page in which these are
        this._updateARIA(); // Calculate items per page and calculate pages, only when the amount of items was changed
        this._updateLimitPerPage(); // Update the margin between items and its size
        this._updateDistribution();
        return this;
    };
    /**
     * Set accesibility properties to each item depending on the page in which these are.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     */
    Carousel.prototype._updateARIA = function() {
        /**
         * Reference to an internal component instance, saves all the information and configuration properties.
         * @type {Object}
         * @private
         */
        var that = this, // Amount of items when ARIA is updated
            total = this._items.length + this._async, // Page where each item is in
            page; // Update WAI-ARIA properties on all items
        Array.prototype.forEach.call(this._items, function(item, i) { // Update page where this item is in
            page = Math.floor(i / that._limitPerPage) + 1; // Update ARIA attributes
            item.setAttribute('aria-hidden', page !== that._currentPage);
            item.setAttribute('aria-setsize', total);
            item.setAttribute('aria-posinset', i + 1);
            item.setAttribute('aria-label', 'page' + page);
        });
    };
    /**
     * Adds items when page/pages needs to load it asynchronously.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     */
    Carousel.prototype._loadAsyncItems = function() { // Load only when there are items to load
        if (this._async === 0) {
            return;
        } // Amount of items from the beginning to current page
        var total = this._currentPage * this._limitPerPage, // How many items needs to add to items rendered to complete to this page
            amount = total - this._items.length, // The new width calculated from current width plus extraWidth
            width = this._itemWidth + this._itemExtraWidth, // Get the height using new width and relation between width and height of item (ratio)
            height = (width * this._itemHeight / this._itemWidth).toFixed(3), // Generic <LI> HTML Element to be added to the Carousel
            item = ['<li', ' class="ch-carousel-item"', ' style="width:' + (width % 1 === 0 ? width : width.toFixed(4)) + 'px;', this._options.autoHeight ? 'height:' + height + 'px;' : '', 'margin-right:' + (this._itemMargin % 1 === 0 ? this._itemMargin : this._itemMargin.toFixed(4)) + 'px"', '></li>'].join(''), // It stores <LI> that will be added to the DOM collection
            items = '', // It stores the items that must be added, it helps to slice the items in the list
            counter = 0; // Load only when there are items to add
        if (amount < 1) {
            return;
        } // If next page needs less items than it support, then add that amount
        amount = this._async < amount ? this._async : amount; // Add the necessary amount of items
        while (amount) {
            items += item;
            amount -= 1;
            counter += 1;
        } // Add sample items to the list
        this._list.insertAdjacentHTML('beforeend', items); // Update items collection
        // uses querySelectorAll because it need a static collection
        this._items = this._list.querySelectorAll('li'); // Set WAI-ARIA properties to each item
        this._updateARIA(); // Update amount of items to add asynchronously
        this._async -= amount;
        /**
         * Event emitted when the component creates new asynchronous empty items.
         * @event ch.Carousel#itemsadd
         * @example
         * // Create a new Carousel with items asynchronously loaded.
         * var carousel = new ch.Carousel({
         *     'async': 10
         * }).on('itemsadd', function (collection) {
         *     // Inject content into the added <li> elements
         *     $.each(collection, function (i, e) {
         *         e.innerHTML = 'Content into one of newly inserted <li> elements.';
         *     });
         * });
         */
        this.emit('itemsadd', Array.prototype.slice.call(this._items, -counter));
    };
    /**
     * Creates the pagination of the component.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     */
    Carousel.prototype._addPagination = function() { // Remove the current pagination if it's necessary to create again
        if (this._paginationCreated) {
            this._removePagination();
        }
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            thumbs = [],
            page = that._pages,
            isSelected; // Generate a thumbnail for each page on Carousel
        while (page) { // Determine if this thumbnail is selected or not
            isSelected = page === that._currentPage; // Add string to collection
            thumbs.unshift('<span', ' role="button"', ' aria-selected="' + isSelected + '"', ' aria-controls="page' + page + '"', ' data-page="' + page + '"', ' class="' + (isSelected ? 'ch-carousel-selected' : '') + '"', '>' + page + '</span>');
            page -= 1;
        } // Append thumbnails to pagination and append this to Carousel
        that._pagination.innerHTML = thumbs.join('');
        that._el.appendChild(that._pagination); // Avoid selection on the pagination
        that._pagination.setAttribute('unselectable', 'on');
        tiny.addClass(that._pagination, 'ch-user-no-select'); // Check pagination as created
        that._paginationCreated = true;
    };
    /**
     * Deletes the pagination from the component.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     */
    Carousel.prototype._removePagination = function() { // Avoid to change something that not exists
        if (!this._paginationCreated) {
            return;
        } // Delete thumbnails
        this._pagination.innerHTML = ''; // Check pagination as deleted
        this._paginationCreated = false;
    };
    /**
     * It stops the slide effect while the list moves.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     * @param {Function} callback A function to execute after disable the effects.
     */
    Carousel.prototype._standbyFX = function(callback) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this; // Do it if is required
        if (this._options.fx && tiny.support.transition) { // Delete efects on list to make changes instantly
            tiny.addClass(this._list, 'ch-carousel-nofx'); // Execute the custom method
            callback.call(this); // Restore efects to list
            // Use a setTimeout to be sure to do this AFTER changes
            setTimeout(function() {
                tiny.removeClass(that._list, 'ch-carousel-nofx');
            }, 0); // Avoid to add/remove classes if it hasn't effects
        } else {
            callback.call(this);
        }
    };
    /**
     * Calculates the total amount of pages and executes internal methods to load asynchronous items, update WAI-ARIA, update the arrows and update pagination.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     */
    Carousel.prototype._updatePages = function() { // Update the amount of total pages
        // The ratio between total amount of items and items in each page
        this._pages = Math.ceil((this._items.length + this._async) / this._limitPerPage); // Add items to the list, if it's necessary
        this._loadAsyncItems(); // Set WAI-ARIA properties to each item
        this._updateARIA(); // Update arrows (when pages === 1, there is no arrows)
        this._updateArrows(); // Update pagination
        if (this._options.pagination) {
            this._addPagination();
        }
    };
    /**
     * Calculates the correct items per page and calculate pages, only when the amount of items was changed.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     */
    Carousel.prototype._updateLimitPerPage = function() {
        var max = this._options.limitPerPage, // Go to the current first item on the current page to restore if pages amount changes
            firstItemOnPage, // The width of each item into the width of the mask
            // Avoid zero items in a page
            limitPerPage = Math.floor(this._maskWidth / this._itemOuterWidth) || 1; // Limit amount of items when user set a limitPerPage amount
        if (max !== undefined && limitPerPage > max) {
            limitPerPage = max;
        } // Set data and calculate pages, only when the amount of items was changed
        if (limitPerPage === this._limitPerPage) {
            return;
        } // Restore if limitPerPage is NOT the same after calculations (go to the current first item page)
        firstItemOnPage = (this._currentPage - 1) * this._limitPerPage + 1; // Update amount of items into a single page (from conf or auto calculations)
        this._limitPerPage = limitPerPage; // Calculates the total amount of pages and executes internal methods
        this._updatePages(); // Go to the current first item page
        this.select(Math.ceil(firstItemOnPage / limitPerPage));
    };
    /**
     * Calculates and set the size of the items and its margin to get an adaptive Carousel.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     */
    Carousel.prototype._updateDistribution = function() {
        var moreThanOne = this._limitPerPage > 1, // Total space to use as margin into mask
            // It's the difference between mask width and total width of all items
            freeSpace = this._maskWidth - this._itemOuterWidth * this._limitPerPage, // Width to add to each item to get responsivity
            // When there are more than one item, get extra width for each one
            // When there are only one item, extraWidth must be just the freeSpace
            extraWidth = moreThanOne ? freeSpace / this._limitPerPage / 2 : freeSpace, // Amount of spaces to distribute the free space
            spaces, // The new width calculated from current width plus extraWidth
            width, // Styles to update the item element width, height & margin-right
            cssItemText; // Update ONLY IF margin changed from last refresh
        // If *new* and *old* extra width are 0, continue too
        if (extraWidth === this._itemExtraWidth && extraWidth > 0) {
            return;
        } // Update global value of width
        this._itemExtraWidth = extraWidth; // When there are 6 items on a page, there are 5 spaces between them
        // Except when there are only one page that NO exist spaces
        spaces = moreThanOne ? this._limitPerPage - 1 : 0; // The new width calculated from current width plus extraWidth
        width = this._itemWidth + extraWidth; // Free space for each space between items
        // Ceil to delete float numbers (not Floor, because next page is seen)
        // There is no margin when there are only one item in a page
        // Update global values
        this._itemMargin = moreThanOne ? freeSpace / spaces / 2 : 0; // Update distance needed to move ONLY ONE page
        // The width of all items on a page, plus the width of all margins of items
        this._pageWidth = (this._itemOuterWidth + extraWidth + this._itemMargin) * this._limitPerPage; // Update the list width
        // Do it before item resizing to make space to all items
        // Delete efects on list to change width instantly
        this._standbyFX(function() {
            this._list.style.cssText = this._list.style.cssText + '; ' + 'width:' + this._pageWidth * this._pages + 'px;';
        }); // Get the height using new width and relation between width and height of item (ratio)
        cssItemText = ['width:' + (width % 1 === 0 ? width : width.toFixed(4)) + 'px;', this._options.autoHeight ? 'height:' + (width * this._itemHeight / this._itemWidth).toFixed(4) + 'px;' : '', 'margin-right:' + (this._itemMargin % 1 === 0 ? this._itemMargin : this._itemMargin.toFixed(4)) + 'px;'].join(''); // Update element styles
        Array.prototype.forEach.call(this._items, function(item) {
            item.setAttribute('style', cssItemText);
        }); // Update the mask height with the list height
        this._mask.style.height = this._getOuterDimensions(this._list).height + 'px'; // Suit the page in place
        this._standbyFX(function() {
            this._translate(-this._pageWidth * (this._currentPage - 1));
        });
    };
    /**
     * Adds arrows to the component.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     */
    Carousel.prototype._addArrows = function() { // Avoid selection on the arrows
        [this._prevArrow, this._nextArrow].forEach(function(el) {
            el.setAttribute('unselectable', 'on');
            tiny.addClass(el, 'ch-user-no-select');
        }); // Add arrows to DOM
        this._el.insertBefore(this._prevArrow, this._el.children[0]);
        this._el.appendChild(this._nextArrow); // Check arrows as created
        this._arrowsCreated = true;
    };
    /**
     * Set as disabled the arrows by adding a classname and a WAI-ARIA property.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     * @param {Boolean} prev Defines if the "previous" arrow must be disabled or not.
     * @param {Boolean} next Defines if the "next" arrow must be disabled or not.
     */
    Carousel.prototype._disableArrows = function(prev, next) {
        this._prevArrow.setAttribute('aria-disabled', prev);
        this._prevArrow.setAttribute('aria-hidden', prev);
        tiny[prev ? 'addClass' : 'removeClass'](this._prevArrow, 'ch-carousel-disabled');
        this._nextArrow.setAttribute('aria-disabled', next);
        this._nextArrow.setAttribute('aria-hidden', next);
        tiny[next ? 'addClass' : 'removeClass'](this._nextArrow, 'ch-carousel-disabled');
    };
    /**
     * Check for arrows behavior on first, last and middle pages, and update class name and WAI-ARIA values.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     */
    Carousel.prototype._updateArrows = function() { // Check arrows existency
        if (!this._arrowsCreated) {
            return;
        } // Case 1: Disable both arrows if there are ony one page
        if (this._pages === 1) {
            this._disableArrows(true, true); // Case 2: "Previous" arrow hidden on first page
        } else if (this._currentPage === 1) {
            this._disableArrows(true, false); // Case 3: "Next" arrow hidden on last page
        } else if (this._currentPage === this._pages) {
            this._disableArrows(false, true); // Case 4: Enable both arrows on Carousel's middle
        } else {
            this._disableArrows(false, false);
        }
    };
    /**
     * Moves the list corresponding to specified displacement.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     * @param {Number} displacement Distance to move the list.
     */
    Carousel.prototype._translate = function() { // CSS property written as string to use on CSS movement
        var vendorTransformKey = VENDOR_PREFIX ? VENDOR_PREFIX + 'Transform' : null; // Use CSS transform to move
        if (tiny.support.transition) {
            return function(displacement) { // Firefox has only "transform", Safari only "webkitTransform",
                // Chrome has support for both. Applied required minimum
                if (vendorTransformKey) {
                    this._list.style[vendorTransformKey] = 'translateX(' + displacement + 'px)';
                }
                this._list.style.transform = 'translateX(' + displacement + 'px)';
            };
        } // Use left position to move
        return function(displacement) {
            this._list.style.left = displacement + 'px';
        };
    }();
    /**
     * Updates the selected page on pagination.
     * @memberof! ch.Carousel.prototype
     * @private
     * @function
     * @param {Number} from Page previously selected. It will be unselected.
     * @param {Number} to Page to be selected.
     */
    Carousel.prototype._switchPagination = function(from, to) { // Avoid to change something that not exists
        if (!this._paginationCreated) {
            return;
        } // Get all thumbnails of pagination element
        var children = this._pagination.children,
            fromItem = children[from - 1],
            toItem = children[to - 1]; // Unselect the thumbnail previously selected
        fromItem.setAttribute('aria-selected', false);
        tiny.removeClass(fromItem, 'ch-carousel-selected'); // Select the new thumbnail
        toItem.setAttribute('aria-selected', true);
        tiny.addClass(toItem, 'ch-carousel-selected');
    };
    /**
     * Get the current outer dimensions of an element.
     *
     * @memberof ch.Carousel.prototype
     * @param {HTMLElement} el A given HTMLElement.
     * @returns {Object}
     */
    Carousel.prototype._getOuterDimensions = function(el) {
        var obj = el.getBoundingClientRect();
        return {
            'width': obj.right - obj.left,
            'height': obj.bottom - obj.top
        };
    };
    /**
     * Triggers all the necessary recalculations to be up-to-date.
     * @memberof! ch.Carousel.prototype
     * @function
     * @returns {carousel}
     */
    Carousel.prototype.refresh = function() {
        var that = this,
            maskWidth = this._getOuterDimensions(this._mask).width; // Check for changes on the width of mask, for the elastic carousel
        // Update the width of the mask
        if (maskWidth !== this._maskWidth) { // Update the global reference to the with of the mask
            this._maskWidth = maskWidth; // Calculate items per page and calculate pages, only when the amount of items was changed
            this._updateLimitPerPage(); // Update the margin between items and its size
            this._updateDistribution();
            /**
             * Event emitted when the component makes all the necessary recalculations to be up-to-date.
             * @event ch.Carousel#refresh
             * @example
             * // Subscribe to "refresh" event.
             * carousel.on('refresh', function () {
             *     alert('Carousel was refreshed.');
             * });
             */
            this.emit('refresh');
        } // Check for a change in the total amount of items
        // Update items collection
        if (this._list.children.length !== this._items.length) { // Update the entire reference to items
            // uses querySelectorAll because it need a static collection
            this._items = this._list.querySelectorAll('li'); // Calculates the total amount of pages and executes internal methods
            this._updatePages(); // Go to the last page in case that the current page no longer exists
            if (this._currentPage > this._pages) {
                this._standbyFX(function() {
                    that.select(that._pages);
                });
            }
            /**
             * Event emitted when the component makes all the necessary recalculations to be up-to-date.
             * @event ch.Carousel#refresh
             * @ignore
             */
            this.emit('refresh');
        }
        return this;
    };
    /**
     * Moves the list to the specified page.
     * @memberof! ch.Carousel.prototype
     * @function
     * @param {Number} page Reference of page where the list has to move.
     * @returns {carousel}
     */
    Carousel.prototype.select = function(page) { // Getter
        if (page === undefined) {
            return this._currentPage;
        } // Avoid to move if it's disabled
        // Avoid to select the same page that is selected yet
        // Avoid to move beyond first and last pages
        if (!this._enabled || page === this._currentPage || page < 1 || page > this._pages) {
            return this;
        } // Perform these tasks in the following order:
        // Task 1: Move the list from 0 (zero), to page to move (page number beginning in zero)
        this._translate(-this._pageWidth * (page - 1)); // Task 2: Update selected thumbnail on pagination
        this._switchPagination(this._currentPage, page); // Task 3: Update value of current page
        this._currentPage = page; // Task 4: Check for arrows behavior on first, last and middle pages
        this._updateArrows(); // Task 5: Add items to the list, if it's necessary
        this._loadAsyncItems();
        /**
         * Event emitted when the component moves to another page.
         * @event ch.Carousel#select
         * @example
         * // Subscribe to "select" event.
         * carousel.on('select', function () {
         *     alert('Carousel was moved.');
         * });
         */
        this.emit('select');
        return this;
    };
    /**
     * Moves the list to the previous page.
     * @memberof! ch.Carousel.prototype
     * @function
     * @returns {carousel}
     */
    Carousel.prototype.prev = function() {
        this.select(this._currentPage - 1);
        /**
         * Event emitted when the component moves to the previous page.
         * @event ch.Carousel#prev
         * @example
         * carousel.on('prev', function () {
         *     alert('Carousel has moved to the previous page.');
         * });
         */
        this.emit('prev');
        return this;
    };
    /**
     * Moves the list to the next page.
     * @memberof! ch.Carousel.prototype
     * @function
     * @returns {carousel}
     */
    Carousel.prototype.next = function() {
        this.select(this._currentPage + 1);
        /**
         * Event emitted when the component moves to the next page.
         * @event ch.Carousel#next
         * @example
         * carousel.on('next', function () {
         *     alert('Carousel has moved to the next page.');
         * });
         */
        this.emit('next');
        return this;
    };
    /**
     * Enables a Carousel instance.
     * @memberof! ch.Carousel.prototype
     * @function
     * @returns {carousel}
     */
    Carousel.prototype.enable = function() {
        this._el.setAttribute('aria-disabled', false);
        this._disableArrows(false, false);
        parent.enable.call(this);
        return this;
    };
    /**
     * Disables a Carousel instance.
     * @memberof! ch.Carousel.prototype
     * @function
     * @returns {carousel}
     */
    Carousel.prototype.disable = function() {
        this._el.setAttribute('aria-disabled', true);
        this._disableArrows(true, true);
        parent.disable.call(this);
        return this;
    };
    /**
     * Destroys a Carousel instance.
     * @memberof! ch.Carousel.prototype
     * @function
     */
    Carousel.prototype.destroy = function() {
        this._el.parentNode.replaceChild(this._snippet, this._el);
        tiny.trigger(window.document, ch.onlayoutchange);
        parent.destroy.call(this);
        return;
    };
    ch.factory(Carousel);
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';

    function normalizeOptions(options) {
        var num = window.parseInt(options, 10);
        if (!window.isNaN(num)) {
            options = {
                'max': num
            };
        }
        return options;
    }
    /**
     * Countdown counts the maximum of characters that user can enter in a form control. Countdown could limit the possibility to continue inserting charset.
     * @memberof ch
     * @constructor
     * @augments ch.Component
     * @param {HTMLElement} el A HTMLElement to create an instance of ch.Countdown.
     * @param {Object} [options] Options to customize an instance.
     * @param {Number} [options.max] Number of the maximum amount of characters user can input in form control. Default: 500.
     * @param {String} [options.plural] Message of remaining amount of characters, when it's different to 1. The variable that represents the number to be replaced, should be a hash. Default: "# characters left.".
     * @param {String} [options.singular] Message of remaining amount of characters, when it's only 1. The variable that represents the number to be replaced, should be a hash. Default: "# character left.".
     * @returns {countdown} Returns a new instance of Countdown.
     * @example
     * // Create a new Countdown.
     * var countdown = new ch.Countdown([el], [options]);
     * @example
     * // Create a new Countdown with custom options.
     * var countdown = new ch.Countdown({
     *     'max': 250,
     *     'plural': 'Left: # characters.',
     *     'singular': 'Left: # character.'
     * });
     * @example
     * // Create a new Countdown using the shorthand way (max as parameter).
     * var countdown = new ch.Countdown({'max': 500});
     */
    function Countdown(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Countdown is created.
             * @memberof! ch.Countdown.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Countdown#ready
         * @example
         * // Subscribe to "ready" event.
         * countdown.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Countdown, ch.Component);
    var parent = Countdown.super_.prototype;
    /**
     * The name of the component.
     * @memberof! ch.Countdown.prototype
     * @type {String}
     */
    Countdown.prototype.name = 'countdown';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Countdown.prototype
     * @function
     */
    Countdown.prototype.constructor = Countdown;
    /**
     * Configuration by default.
     * @type {Object}
     * @private
     */
    Countdown.prototype._defaults = {
        'plural': '# characters left.',
        'singular': '# character left.',
        'max': 500
    };
    /**
     * Initialize a new instance of Countdown and merge custom options with defaults options.
     * @memberof! ch.Countdown.prototype
     * @function
     * @private
     * @returns {countdown}
     */
    Countdown.prototype._init = function(el, options) { // Call to its parent init method
        parent._init.call(this, el, options);
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            /**
             * Create the "id" attribute.
             * @type {String}
             * @private
             */
            messageID = 'ch-countdown-message-' + that.uid,
            /**
             * Singular or Plural message depending on amount of remaining characters.
             * @type {String}
             * @private
             */
            message;
        /**
         * The countdown trigger.
         * @type {HTMLTextAreaElement}
         * @example
         * // Gets the countdown trigger.
         * countdown.trigger;
         */
        this.trigger = this._el;
        'keyup keypress keydown input paste cut'.split(' ').forEach(function(name) {
            tiny.on(that.trigger, name, function() {
                that._count();
            });
        });
        /**
         * Amount of free characters until full the field.
         * @type {Number}
         * @private
         */
        that._remaining = that._options.max - that._contentLength(); // Update the message
        message = that._remaining === 1 ? that._options.singular : that._options.plural;
        /**
         * The countdown container.
         * @type {HTMLParagraphElement}
         */
        that.container = function() {
            var parent = tiny.parent(that._el);
            parent.insertAdjacentHTML('beforeend', '<span class="ch-countdown ch-form-hint" id="' + messageID + '">' + message.replace('#', that._remaining) + '</span>');
            return parent.querySelector('#' + messageID);
        }();
        this.on('disable', this._removeError);
        return this;
    };
    /**
     * Returns the length of value.
     * @function
     * @private
     * @returns {Number}
     */
    Countdown.prototype._contentLength = function() {
        return this._el.value.length;
    };
    /**
     * Process input of data on form control and updates remaining amount of characters or limits the content length. Also, change the visible message of remaining characters.
     * @function
     * @private
     * @returns {countdown}
     */
    Countdown.prototype._count = function() {
        if (!this._enabled) {
            return this;
        }
        var length = this._contentLength(),
            message;
        this._remaining = this._options.max - length; // Limit Count alert the user
        if (length <= this._options.max) {
            if (this._exceeded) { // Update exceeded flag
                this._exceeded = false;
                this._removeError();
            }
        } else if (length > this._options.max) {
            /**
             * Event emitted when the lenght of characters is exceeded.
             * @event ch.Countdown#exceed
             * @example
             * // Subscribe to "exceed" event.
             * countdown.on('exceed', function () {
             *     // Some code here!
             * });
             */
            this.emit('exceed'); // Update exceeded flag
            this._exceeded = true;
            this.trigger.setAttribute('aria-invalid', 'true');
            tiny.addClass(this.trigger, 'ch-validation-error');
            tiny.addClass(this.container, 'ch-countdown-exceeded');
        } // Change visible message of remaining characters
        // Singular or Plural message depending on amount of remaining characters
        message = (this._remaining !== 1 ? this._options.plural : this._options.singular).replace(/\#/g, this._remaining); // Update DOM text
        this.container.innerText = message;
        return this;
    };
    /**
     * Process input of data on form control and updates remaining amount of characters or limits the content length. Also, change the visible message of remaining characters.
     * @function
     * @private
     * @returns {countdown}
     */
    Countdown.prototype._removeError = function() {
        tiny.removeClass(this.trigger, 'ch-validation-error');
        this.trigger.setAttribute('aria-invalid', 'false');
        tiny.removeClass(this.container, 'ch-countdown-exceeded');
        return this;
    };
    /**
     * Destroys a Countdown instance.
     * @memberof! ch.Countdown.prototype
     * @function
     * @example
     * // Destroy a countdown
     * countdown.destroy();
     * // Empty the countdown reference
     * countdown = undefined;
     */
    Countdown.prototype.destroy = function() {
        var parentElement = tiny.parent(this.container);
        parentElement.removeChild(this.container);
        tiny.trigger(window.document, ch.onlayoutchange);
        parent.destroy.call(this);
        return;
    }; // Factorize
    ch.factory(Countdown, normalizeOptions);
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';
    /**
     * Datepicker lets you select dates.
     * @memberof ch
     * @constructor
     * @augments ch.Component
     * @requires ch.Calendar
     * @param {HTMLElement} [el] A HTMLElement to create an instance of ch.Datepicker.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.format] Sets the date format. Default: "DD/MM/YYYY".
     * @param {String} [options.selected] Sets a date that should be selected by default. Default: "today".
     * @param {String} [options.from] Set a minimum selectable date. The format of the given date should be "YYYY/MM/DD".
     * @param {String} [options.to] Set a maximum selectable date. The format of the given date should be "YYYY/MM/DD".
     * @param {Array} [options.monthsNames] A collection of months names. Default: ["Enero", ... , "Diciembre"].
     * @param {Array} [options.weekdays] A collection of weekdays. Default: ["Dom", ... , "Sab"].
     * @param {Boolean} [options.hiddenby] Determines how to hide the component. You must use: "button", "pointers", "pointerleave", "all" or "none". Default: "pointers".
     * @param {HTMLElement} [options.context] It's a reference to position and size of element that will be considered to carry out the position.
     * @param {String} [options.side] The side option where the target element will be positioned. You must use: "left", "right", "top", "bottom" or "center". Default: "bottom".
     * @param {String} [options.align] The align options where the target element will be positioned. You must use: "left", "right", "top", "bottom" or "center". Default: "center".
     * @param {Number} [options.offsetX] Distance to displace the target horizontally.
     * @param {Number} [options.offsetY] Distance to displace the target vertically.
     * @param {String} [options.position] The type of positioning used. You must use: "absolute" or "fixed". Default: "absolute".
     * @returns {datepicker} Returns a new instance of Datepicker.
     * @example
     * // Create a new Datepicker.
     * var datepicker = new ch.Datepicker([selector], [options]);
     * @example
     * // Create a new Datepicker with custom options.
     * var datepicker = new ch.Datepicker({
     *     "format": "MM/DD/YYYY",
     *     "selected": "2011/12/25",
     *     "from": "2010/12/25",
     *     "to": "2012/12/25",
     *     "monthsNames": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
     *     "weekdays": ["Su", "Mo", "Tu", "We", "Thu", "Fr", "Sa"]
     * });
     */
    function Datepicker(selector, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(selector, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Datepicker is created.
             * @memberof! ch.Datepicker.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Datepicker#ready
         * @example
         * // Subscribe to "ready" event.
         * datepicker.on('ready', function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
    } // Inheritance
    tiny.inherits(Datepicker, ch.Component);
    var parent = Datepicker.super_.prototype, // Creates methods enable and disable into the prototype.
        methods = ['enable', 'disable'],
        len = methods.length;

    function createMethods(method) {
        Datepicker.prototype[method] = function() {
            this._popover[method]();
            parent[method].call(this);
            return this;
        };
    }
    /**
     * The name of the component.
     * @memberof! ch.Datepicker.prototype
     * @type {String}
     * @example
     * // You can reach the associated instance.
     * var datepicker = $(selector).data('datepicker');
     */
    Datepicker.prototype.name = 'datepicker';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Datepicker.prototype
     * @function
     */
    Datepicker.prototype.constructor = Datepicker;
    /**
     * Configuration by default.
     * @type {Object}
     * @private
     */
    Datepicker.prototype._defaults = {
        'format': 'DD/MM/YYYY',
        'side': 'bottom',
        'align': 'center',
        'hiddenby': 'pointers'
    };
    /**
     * Initialize a new instance of Datepicker and merge custom options with defaults options.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @private
     * @returns {datepicker}
     */
    Datepicker.prototype._init = function(selector, options) { // Call to its parent init method
        parent._init.call(this, selector, options);
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        /**
         * The datepicker input field.
         * @type {HTMLElement}
         */
        this.field = this._el;
        this.field.insertAdjacentHTML('afterend', '<i role="button" class="ch-datepicker-trigger ch-icon-calendar"></i>');
        /**
         * The datepicker trigger.
         * @type {HTMLElement}
         */
        this.trigger = tiny.next(this.field);
        /**
         * Reference to the Calendar component instanced.
         * @type {ch.Calendar}
         * @private
         */
        this._calendar = new ch.Calendar(document.createElement('div'), options);
        /**
         * Reference to the Popover component instanced.
         * @type {ch.Popover}
         * @private
         */
        this._popover = new ch.Popover(this.trigger, {
            '_className': 'ch-datepicker ch-cone',
            '_ariaRole': 'tooltip',
            'content': this._calendar.container,
            'side': this._options.side,
            'align': this._options.align,
            'offsetX': 1,
            'offsetY': 10,
            'shownby': 'pointertap',
            'hiddenby': this._options.hiddenby
        });
        tiny.on(this._popover._content, ch.onpointertap, function(event) {
            var el = event.target; // Day selection
            if (el.nodeName === 'TD' && el.className.indexOf('ch-calendar-disabled') === -1 && el.className.indexOf('ch-calendar-other') === -1) {
                that.pick(el.innerHTML);
            }
        });
        this.field.setAttribute('aria-describedby', 'ch-popover-' + this._popover.uid); // Change type of input to "text"
        this.field.type = 'text'; // Change value of input if there are a selected date
        this.field.value = this._options.selected ? this._calendar.select() : this.field.value; // Hide popover
        this.on('disable', this.hide);
        return this;
    };
    /**
     * Shows the datepicker.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @returns {datepicker}
     * @example
     * // Shows a datepicker.
     * datepicker.show();
     */
    Datepicker.prototype.show = function() {
        if (!this._enabled) {
            return this;
        }
        this._popover.show();
        /**
         * Event emitted when a datepicker is shown.
         * @event ch.Datepicker#show
         * @example
         * // Subscribe to "show" event.
         * datepicker.on('show', function () {
         *     // Some code here!
         * });
         */
        this.emit('show');
        return this;
    };
    /**
     * Hides the datepicker.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @returns {datepicker}
     * @example
     * // Shows a datepicker.
     * datepicker.hide();
     */
    Datepicker.prototype.hide = function() {
        this._popover.hide();
        /**
         * Event emitted when a datepicker is hidden.
         * @event ch.Datepicker#hide
         * @example
         * // Subscribe to "hide" event.
         * datepicker.on('hide', function () {
         *     // Some code here!
         * });
         */
        this.emit('hide');
        return this;
    };
    /**
     * Selects a specific day into current month and year.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @private
     * @param {(String | Number)} day A given day to select.
     * @returns {datepicker}
     * @example
     * // Select a specific day.
     * datepicker.pick(28);
     */
    Datepicker.prototype.pick = function(day) { // Select the day and update input value with selected date
        this.field.value = [this._calendar._dates.current.year, this._calendar._dates.current.month, day].join('/'); // Hide float
        this._popover.hide(); // Select a date
        this.select(this.field.value);
        return this;
    };
    /**
     * Selects a specific date or returns the selected date.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @param {String} [date] A given date to select. The format of the given date should be "YYYY/MM/DD".
     * @returns {(datepicker | String)}
     * @example
     * // Returns the selected date.
     * datepicker.select();
     * @example
     * // Select a specific date.
     * datepicker.select('2014/05/28');
     */
    Datepicker.prototype.select = function(date) { // Setter
        // Select the day and update input value with selected date
        if (date) {
            this._calendar.select(date);
            this.field.value = this._calendar.select();
            /**
             * Event emitted when a date is selected.
             * @event ch.Datepicker#select
             * @example
             * // Subscribe to "select" event.
             * datepicker.on('select', function () {
             *     // Some code here!
             * });
             */
            this.emit('select');
            return this;
        } // Getter
        return this._calendar.select();
    };
    /**
     * Returns date of today
     * @memberof! ch.Datepicker.prototype
     * @function
     * @returns {String} The date of today
     * @example
     * // Get the date of today.
     * var today = datepicker.getToday();
     */
    Datepicker.prototype.getToday = function() {
        return this._calendar.getToday();
    };
    /**
     * Moves to the next month.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @returns {datepicker}
     * @example
     * // Moves to the next month.
     * datepicker.nextMonth();
     */
    Datepicker.prototype.nextMonth = function() {
        this._calendar.nextMonth();
        /**
         * Event emitted when a next month is shown.
         * @event ch.Datepicker#nextmonth
         * @example
         * // Subscribe to "nextmonth" event.
         * datepicker.on('nextmonth', function () {
         *     // Some code here!
         * });
         */
        this.emit('nextmonth');
        return this;
    };
    /**
     * Move to the previous month.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @returns {datepicker}
     * @example
     * // Moves to the prev month.
     * datepicker.prevMonth();
     */
    Datepicker.prototype.prevMonth = function() {
        this._calendar.prevMonth();
        /**
         * Event emitted when a previous month is shown.
         * @event ch.Datepicker#prevmonth
         * @example
         * // Subscribe to "prevmonth" event.
         * datepicker.on('prevmonth', function () {
         *     // Some code here!
         * });
         */
        this.emit('prevmonth');
        return this;
    };
    /**
     * Move to the next year.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @returns {datepicker}
     * @example
     * // Moves to the next year.
     * datepicker.nextYear();
     */
    Datepicker.prototype.nextYear = function() {
        this._calendar.nextYear();
        /**
         * Event emitted when a next year is shown.
         * @event ch.Datepicker#nextyear
         * @example
         * // Subscribe to "nextyear" event.
         * datepicker.on('nextyear', function () {
         *     // Some code here!
         * });
         */
        this.emit('nextyear');
        return this;
    };
    /**
     * Move to the previous year.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @returns {datepicker}
     * @example
     * // Moves to the prev year.
     * datepicker.prevYear();
     */
    Datepicker.prototype.prevYear = function() {
        this._calendar.prevYear();
        /**
         * Event emitted when a previous year is shown.
         * @event ch.Datepicker#prevyear
         * @example
         * // Subscribe to "prevyear" event.
         * datepicker.on('prevyear', function () {
         *     // Some code here!
         * });
         */
        this.emit('prevyear');
        return this;
    };
    /**
     * Reset the Datepicker to date of today
     * @memberof! ch.Datepicker.prototype
     * @function
     * @returns {datepicker}
     * @example
     * // Resset the datepicker
     * datepicker.reset();
     */
    Datepicker.prototype.reset = function() { // Delete input value
        this.field.value = '';
        this._calendar.reset();
        /**
         * Event emitter when the datepicker is reseted.
         * @event ch.Datepicker#reset
         * @example
         * // Subscribe to "reset" event.
         * datepicker.on('reset', function () {
         *     // Some code here!
         * });
         */
        this.emit('reset');
        return this;
    };
    /**
     * Set a minimum selectable date.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @param {String} date A given date to set as minimum selectable date. The format of the given date should be "YYYY/MM/DD".
     * @returns {datepicker}
     * @example
     * // Set a minimum selectable date.
     * datepicker.setFrom('2010/05/28');
     */
    Datepicker.prototype.setFrom = function(date) {
        this._calendar.setFrom(date);
        return this;
    };
    /**
     * Set a maximum selectable date.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @param {String} date A given date to set as maximum selectable date. The format of the given date should be "YYYY/MM/DD".
     * @returns {datepicker}
     * @example
     * // Set a maximum selectable date.
     * datepicker.setTo('2014/05/28');
     */
    Datepicker.prototype.setTo = function(date) {
        this._calendar.setTo(date);
        return this;
    };
    /**
     * Enables an instance of Datepicker.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @returns {datepicker} Returns an instance of Datepicker.
     * @example
     * // Enabling an instance of Datepicker.
     * datepicker.enable();
     */
    /**
     * Disables an instance of Datepicker.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @returns {datepicker} Returns an instance of Datepicker.
     * @example
     * // Disabling an instance of Datepicker.
     * datepicker.disable();
     */
    while (len) {
        createMethods(methods[len -= 1]);
    }
    /**
     * Destroys a Datepicker instance.
     * @memberof! ch.Datepicker.prototype
     * @function
     * @example
     * // Destroying an instance of Datepicker.
     * datepicker.destroy();
     */
    Datepicker.prototype.destroy = function() {
        tiny.parent(this.trigger).removeChild(this.trigger);
        this._el.removeAttribute('aria-describedby');
        this._el.type = 'date';
        this._popover.destroy();
        parent.destroy.call(this);
    }; // Factorize
    ch.factory(Datepicker);
})(undefined, undefined.ch);
(function(window, ch) {
    'use strict';

    function highlightSuggestion(target) {
        var posinset;
        Array.prototype.forEach.call(this._suggestionsList.childNodes, function(e) {
            if (e.contains(target)) {
                posinset = parseInt(target.getAttribute('aria-posinset'), 10) - 1;
            }
        });
        this._highlighted = typeof posinset === 'number' ? posinset : null;
        this._toogleHighlighted();
        return this;
    }
    var specialKeyCodeMap = {
        9: 'tab',
        27: 'esc',
        37: 'left',
        39: 'right',
        13: 'enter',
        38: 'up',
        40: 'down'
    };
    /**
     * Autocomplete Component shows a list of suggestions for a HTMLInputElement.
     * @memberof ch
     * @constructor
     * @augments ch.Component
     * @requires ch.Popover
     * @param {HTMLElement} [el] A HTMLElement to create an instance of ch.Autocomplete.
     * @param {Object} [options] Options to customize an instance.
     * @param {String} [options.loadingClass] Default: "ch-autocomplete-loading".
     * @param {String} [options.highlightedClass] Default: "ch-autocomplete-highlighted".
     * @param {String} [options.itemClass] Default: "ch-autocomplete-item".
     * @param {String} [options.addClass] CSS class names that will be added to the container on the component initialization. Default: "ch-box-lite ch-autocomplete".
     * @param {Number} [options.keystrokesTime] Default: 150.
     * @param {Boolean} [options.html] Default: false.
     * @param {String} [options.side] The side option where the target element will be positioned. You must use: "left", "right", "top", "bottom" or "center". Default: "bottom".
     * @param {String} [options.align] The align options where the target element will be positioned. You must use: "left", "right", "top", "bottom" or "center". Default: "left".
     * @param {Number} [options.offsetX] The offsetX option specifies a distance to displace the target horitontally.
     * @param {Number} [options.offsetY] The offsetY option specifies a distance to displace the target vertically.
     * @param {String} [options.positioned] The positioned option specifies the type of positioning used. You must use: "absolute" or "fixed". Default: "absolute".
     * @param {(Boolean | String)} [options.wrapper] Wrap the reference element and place the container into it instead of body. When value is a string it will be applied as additional wrapper class. Default: false.
     *
     * @returns {autocomplete}
     * @example
     * // Create a new AutoComplete.
     * var autocomplete = new AutoComplete([el], [options]);
     * @example
     * // Create a new AutoComplete with configuration.
     * var autocomplete = new AutoComplete('.my-autocomplete', {
     *  'loadingClass': 'custom-loading',
     *  'highlightedClass': 'custom-highlighted',
     *  'itemClass': 'custom-item',
     *  'addClass': 'carousel-cities',
     *  'keystrokesTime': 600,
     *  'html': true,
     *  'side': 'center',
     *  'align': 'center',
     *  'offsetX': 0,
     *  'offsetY': 0,
     *  'positioned': 'fixed'
     * });
     */
    function Autocomplete(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this;
        this._init(el, options);
        if (this.initialize !== undefined) {
            /**
             * If you define an initialize method, it will be executed when a new Autocomplete is created.
             * @memberof! ch.Autocomplete.prototype
             * @function
             */
            this.initialize();
        }
        /**
         * Event emitted when the component is ready to use.
         * @event ch.Autocomplete#ready
         * @example
         * // Subscribe to "ready" event.
         * autocomplete.on('ready',function () {
         *     // Some code here!
         * });
         */
        window.setTimeout(function() {
            that.emit('ready');
        }, 50);
        return this;
    } // Inheritance
    tiny.inherits(Autocomplete, ch.Component);
    var parent = Autocomplete.super_.prototype, // there is no mouseenter to highlight the item, so it happens when the user do mousedown
        highlightEvent = tiny.support.touch ? ch.onpointerdown : 'mouseover';
    /**
     * The name of the component.
     * @type {String}
     */
    Autocomplete.prototype.name = 'autocomplete';
    /**
     * Returns a reference to the constructor function.
     * @memberof! ch.Autocomplete.prototype
     * @function
     */
    Autocomplete.prototype.constructor = Autocomplete;
    /**
     * Configuration by default.
     * @type {Object}
     * @private
     */
    Autocomplete.prototype._defaults = {
        'loadingClass': 'ch-autocomplete-loading',
        'highlightedClass': 'ch-autocomplete-highlighted',
        'itemClass': 'ch-autocomplete-item',
        'addClass': 'ch-box-lite ch-autocomplete',
        'side': 'bottom',
        'align': 'left',
        'html': false,
        '_hiddenby': 'none',
        'keystrokesTime': 150,
        '_itemTemplate': '<li class="{{itemClass}}"{{suggestedData}}>{{term}}<i class="ch-icon-arrow-up" data-js="ch-autocomplete-complete-query"></i></li>',
        'wrapper': false
    };
    /**
     * Initialize a new instance of Autocomplete and merge custom options with defaults options.
     * @memberof! ch.Autocomplete.prototype
     * @function
     * @private
     * @returns {autocomplete}
     */
    Autocomplete.prototype._init = function(el, options) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this; // Call to its parent init method
        parent._init.call(this, el, options); // creates the basic item template for this instance
        this._options._itemTemplate = this._options._itemTemplate.replace('{{itemClass}}', this._options.itemClass);
        if (this._options.html) { // remove the suggested data space when html is configured
            this._options._itemTemplate = this._options._itemTemplate.replace('{{suggestedData}}', '');
        } // The component who shows and manage the suggestions.
        this._popover = new ch.Popover({
            'reference': this._el,
            'content': this._suggestionsList,
            'side': this._options.side,
            'align': this._options.align,
            'addClass': this._options.addClass,
            'hiddenby': this._options._hiddenby,
            'width': this._el.getBoundingClientRect().width + 'px',
            'fx': this._options.fx,
            'wrapper': this._options.wrapper
        });
        /**
         * The autocomplete container.
         * @type {HTMLDivElement}
         * @example
         * // Gets the autocomplete container to append or prepend content.
         * autocomplete.container.appendChild(document.createElement('div'));
         */
        this.container = this._popover.container;
        this.container.setAttribute('aria-hidden', 'true');
        /**
         * The autocomplete suggestion list.
         * @type {HTMLUListElement}
         * @private
         */
        this._suggestionsList = document.createElement('ul');
        tiny.addClass(this._suggestionsList, 'ch-autocomplete-list');
        this.container.appendChild(this._suggestionsList);
        /**
         * Selects the items
         * @memberof! ch.Autocomplete.prototype
         * @function
         * @private
         * @returns {autocomplete}
         */
        this._highlightSuggestion = function(event) {
            var target = event.target || event.srcElement,
                item = target.nodeName === 'LI' ? target : target.parentNode.nodeName === 'LI' ? target.parentNode : null;
            if (item !== null) {
                highlightSuggestion.call(that, item);
            }
        };
        tiny.on(this.container, highlightEvent, this._highlightSuggestion);
        tiny.on(this.container, ch.onpointertap, function itemEvents(event) {
            var target = event.target || event.srcElement; // completes the value, it is a shortcut to avoid write the complete word
            if (target.nodeName === 'I' && !that._options.html) {
                event.preventDefault();
                that._el.value = that._suggestions[that._highlighted];
                that.emit('type', that._el.value);
                return;
            }
            if (target.nodeName === 'LI' && target.className.indexOf(that._options.itemClass) !== -1 || target.parentElement.nodeName === 'LI' && target.parentElement.className.indexOf(that._options.itemClass) !== -1) {
                that._selectSuggestion();
            }
        });
        /**
         * The autocomplete trigger.
         * @type {HTMLElement}
         */
        this.trigger = this._el;
        this.trigger.setAttribute('aria-autocomplete', 'list');
        this.trigger.setAttribute('aria-haspopup', 'true');
        this.trigger.setAttribute('aria-owns', this.container.getAttribute('id'));
        this.trigger.setAttribute('autocomplete', 'off');
        tiny.on(this.trigger, 'focus', function turnon() {
            that._turn('on');
        });
        tiny.on(this.trigger, 'blur', function turnoff() {
            that._turn('off');
        }); // Turn on when the input element is already has focus
        if (this._el === document.activeElement && !this._enabled) {
            this._turn('on');
        } // The number of the selected item or null when no selected item is.
        this._highlighted = null; // Collection of suggestions to be shown.
        this._suggestions = []; // Used to show when the user cancel the suggestions
        this._originalQuery = this._currentQuery = this._el.value;
        if (this._configureShortcuts !== undefined) {
            this._configureShortcuts();
        }
        return this;
    };
    /**
     * Turns on the ability off listen the keystrokes
     * @memberof! ch.Autocomplete.prototype
     * @function
     * @private
     * @returns {autocomplete}
     */
    Autocomplete.prototype._turn = function(turn) {
        var that = this;
        if (!this._enabled) {
            return this;
        }

        function turnOn() {
            that._currentQuery = that._el.value.trim(); // when the user writes
            window.clearTimeout(that._stopTyping);
            that._stopTyping = window.setTimeout(function() {
                tiny.addClass(that.trigger, that._options.loadingClass);
                /**
                 * Event emitted when the user is typing.
                 * @event ch.Autocomplete#type
                 * @example
                 * // Subscribe to "type" event with ajax call
                 * autocomplete.on('type', function (userInput) {
                 *      $.ajax({
                 *          'url': '/countries?q=' + userInput,
                 *          'dataType': 'json',
                 *          'success': function (response) {
                 *              autocomplete.suggest(response);
                 *          }
                 *      });
                 * });
                 * @example
                 * // Subscribe to "type" event with jsonp
                 * autocomplete.on('type', function (userInput) {
                 *       $.ajax({
                 *           'url': '/countries?q='+ userInput +'&callback=parseResults',
                 *           'dataType': 'jsonp',
                 *           'cache': false,
                 *           'global': true,
                 *           'context': window,
                 *           'jsonp': 'parseResults',
                 *           'crossDomain': true
                 *       });
                 * });
                 */
                that.emit('type', that._currentQuery);
            }, that._options.keystrokesTime);
        }

        function turnOnFallback(e) {
            if (specialKeyCodeMap[e.which || e.keyCode]) {
                return;
            } // When keydown is fired that.trigger still has an old value
            setTimeout(turnOn, 1);
        }
        this._originalQuery = this._el.value; // IE8 don't support the input event at all
        // IE9 is the only browser that doesn't fire the input event when characters are removed
        var ua = navigator.userAgent;
        var MSIE = /(msie|trident)/i.test(ua) ? ua.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
        if (turn === 'on') {
            if (!MSIE || MSIE > 9) {
                tiny.on(this.trigger, ch.onkeyinput, turnOn);
            } else {
                'keydown cut paste'.split(' ').forEach(function(evtName) {
                    tiny.on(that.trigger, evtName, turnOnFallback);
                });
            }
        } else if (turn === 'off') {
            this.hide();
            if (!MSIE || MSIE > 9) {
                tiny.off(this.trigger, ch.onkeyinput, turnOn);
            } else {
                'keydown cut paste'.split(' ').forEach(function(evtName) {
                    tiny.off(that.trigger, evtName, turnOnFallback);
                });
            }
        }
        return this;
    };
    /**
     * It sets to the HTMLInputElement the selected query and it emits a 'select' event.
     * @memberof! ch.Autocomplete.prototype
     * @function
     * @private
     * @returns {autocomplete}
     */
    Autocomplete.prototype._selectSuggestion = function() {
        window.clearTimeout(this._stopTyping);
        if (this._highlighted === null) {
            return this;
        }
        if (!this._options.html) {
            this._el.value = this._suggestions[this._highlighted];
        }
        this._el.blur();
        /**
         * Event emitted when a suggestion is selected.
         * @event ch.Autocomplete#select
         * @example
         * // Subscribe to "select" event.
         * autocomplete.on('select', function () {
         *     // Some code here!
         * });
         */
        this.emit('select');
        return this;
    };
    /**
     * It highlights the item adding the "ch-autocomplete-highlighted" class name or the class name that you configured as "highlightedClass" option.
     * @memberof! ch.Autocomplete.prototype
     * @function
     * @private
     * @returns {autocomplete}
     */
    Autocomplete.prototype._toogleHighlighted = function() { // null is when is not a selected item but,
        // increments 1 _highlighted because aria-posinset starts in 1 instead 0 as the collection that stores the data
        var current = this._highlighted === null ? null : this._highlighted + 1,
            currentItem = this.container.querySelector('[aria-posinset="' + current + '"]'),
            selectedItem = this.container.querySelector('[aria-posinset].' + this._options.highlightedClass);
        if (selectedItem !== null) { // background the highlighted item
            tiny.removeClass(selectedItem, this._options.highlightedClass);
        }
        if (currentItem !== null) { // highlight the selected item
            tiny.addClass(currentItem, this._options.highlightedClass);
        }
        return this;
    };
    /**
     * Add suggestions to be shown.
     * @memberof! ch.Autocomplete.prototype
     * @function
     * @returns {autocomplete}
     * @example
     * // The suggest method needs an Array of strings to work with default configuration
     * autocomplete.suggest(['Aruba','Armenia','Argentina']);
     * @example
     * // To work with html configuration, it needs an Array of strings. Each string must to be as you wish you watch it
     * autocomplete.suggest([
     *  '<strong>Ar</strong>uba <i class="flag-aruba"></i>',
     *  '<strong>Ar</strong>menia <i class="flag-armenia"></i>',
     *  '<strong>Ar</strong>gentina <i class="flag-argentina"></i>'
     * ]);
     */
    Autocomplete.prototype.suggest = function(suggestions) {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this,
            items = [],
            matchedRegExp = new RegExp('(' + this._currentQuery.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1') + ')', 'ig'),
            totalItems = 0,
            itemDOMCollection, itemTemplate = this._options._itemTemplate,
            suggestedItem, term, suggestionsLength = suggestions.length,
            el, itemSelected = this.container.querySelector('.' + this._options.highlightedClass); // hide the loading feedback
        tiny.removeClass(this.trigger, that._options.loadingClass); // hides the suggestions list
        if (suggestionsLength === 0) {
            this._popover.hide();
            return this;
        } // shows the suggestions list when the is closed and the element is withs focus
        if (!this._popover.isShown() && window.document.activeElement === this._el) {
            this._popover.show();
        } // remove the class from the extra added items
        if (itemSelected !== null) {
            tiny.removeClass(itemSelected, this._options.highlightedClass);
        } // add each suggested item to the suggestion list
        for (suggestedItem = 0; suggestedItem < suggestionsLength; suggestedItem += 1) { // get the term to be replaced
            term = suggestions[suggestedItem]; // for the html configured component doesn't highlight the term matched it must be done by the user
            if (!that._options.html) {
                term = term.replace(matchedRegExp, '<strong>$1</strong>');
                itemTemplate = this._options._itemTemplate.replace('{{suggestedData}}', ' data-suggested="' + suggestions[suggestedItem] + '"');
            }
            items.push(itemTemplate.replace('{{term}}', term));
        }
        this._suggestionsList.innerHTML = items.join('');
        itemDOMCollection = this.container.querySelectorAll('.' + this._options.itemClass); // with this we set the aria-setsize value that counts the total
        totalItems = itemDOMCollection.length; // Reset suggestions collection.
        this._suggestions.length = 0;
        for (suggestedItem = 0; suggestedItem < totalItems; suggestedItem += 1) {
            el = itemDOMCollection[suggestedItem]; // add the data to the suggestions collection
            that._suggestions.push(el.getAttribute('data-suggested'));
            el.setAttribute('aria-posinset', that._suggestions.length);
            el.setAttribute('aria-setsize', totalItems);
        }
        this._highlighted = null;
        this._suggestionsQuantity = this._suggestions.length;
        return this;
    };
    /**
     * Hides component's container.
     * @memberof! ch.Autocomplete.prototype
     * @function
     * @returns {autocomplete}
     * @example
     * // Hides the autocomplete.
     * autocomplete.hide();
     */
    Autocomplete.prototype.hide = function() {
        if (!this._enabled) {
            return this;
        }
        this._popover.hide();
        /**
         * Event emitted when the Autocomplete container is hidden.
         * @event ch.Autocomplete#hide
         * @example
         * // Subscribe to "hide" event.
         * autocomplete.on('hide', function () {
         *  // Some code here!
         * });
         */
        this.emit('hide');
        return this;
    };
    /**
     * Returns a Boolean if the component's core behavior is shown. That means it will return 'true' if the component is on and it will return false otherwise.
     * @memberof! ch.Autocomplete.prototype
     * @function
     * @returns {Boolean}
     * @example
     * // Execute a function if the component is shown.
     * if (autocomplete.isShown()) {
     *     fn();
     * }
     */
    Autocomplete.prototype.isShown = function() {
        return this._popover.isShown();
    };
    Autocomplete.prototype.disable = function() {
        if (this.isShown()) {
            this.hide();
            this._el.blur();
        }
        parent.disable.call(this);
        return this;
    };
    /**
     * Destroys an Autocomplete instance.
     * @memberof! ch.Autocomplete.prototype
     * @function
     * @example
     * // Destroying an instance of Autocomplete.
     * autocomplete.destroy();
     */
    Autocomplete.prototype.destroy = function() {
        tiny.off(this.container, highlightEvent, this._highlightSuggestion);
        this.trigger.removeAttribute('autocomplete');
        this.trigger.removeAttribute('aria-autocomplete');
        this.trigger.removeAttribute('aria-haspopup');
        this.trigger.removeAttribute('aria-owns');
        this._popover.destroy();
        parent.destroy.call(this);
        return;
    };
    ch.factory(Autocomplete);
})(undefined, undefined.ch);
(function(Autocomplete, ch) {
    'use strict';
    /**
     * Congfigure shortcuts to navigate and set values, or cancel the typed text
     * @memberof! ch.Autocomplete.prototype
     * @function
     * @private
     * @returns {autocomplete}
     */
    Autocomplete.prototype._configureShortcuts = function() {
        /**
         * Reference to context of an instance.
         * @type {Object}
         * @private
         */
        var that = this; // Shortcuts
        ch.shortcuts.add(ch.onkeyenter, this.uid, function(event) {
            event.preventDefault();
            that._selectSuggestion();
        });
        ch.shortcuts.add(ch.onkeyesc, this.uid, function() {
            that.hide();
            that._el.value = that._originalQuery;
        });
        ch.shortcuts.add(ch.onkeyuparrow, this.uid, function(event) {
            event.preventDefault();
            var value; // change the selected value & stores the future HTMLInputElement value
            if (that._highlighted === null) {
                that._highlighted = that._suggestionsQuantity - 1;
                value = that._suggestions[that._highlighted];
            } else if (that._highlighted <= 0) {
                this._prevHighlighted = this._currentHighlighted = null;
                value = that._currentQuery;
            } else {
                that._highlighted -= 1;
                value = that._suggestions[that._highlighted];
            }
            that._toogleHighlighted();
            if (!that._options.html) {
                that._el.value = value;
            }
        });
        ch.shortcuts.add(ch.onkeydownarrow, this.uid, function() {
            var value; // change the selected value & stores the future HTMLInputElement value
            if (that._highlighted === null) {
                that._highlighted = 0;
                value = that._suggestions[that._highlighted];
            } else if (that._highlighted >= that._suggestionsQuantity - 1) {
                that._highlighted = null;
                value = that._currentQuery;
            } else {
                that._highlighted += 1;
                value = that._suggestions[that._highlighted];
            }
            that._toogleHighlighted();
            if (!that._options.html) {
                that._el.value = value;
            }
        }); // Activate the shortcuts for this instance
        this._popover.on('show', function() {
            ch.shortcuts.on(that.uid);
        }); // Deactivate the shortcuts for this instance
        this._popover.on('hide', function() {
            ch.shortcuts.off(that.uid);
        });
        this.on('destroy', function() {
            ch.shortcuts.remove(this.uid);
        });
        return this;
    };
})(undefined.ch.Autocomplete, undefined.ch);
'use strict';

/*! lightslider - v1.1.5 - 2015-10-31
 * https://github.com/sachinchoolur/lightslider
 * Copyright (c) 2015 Sachin N; Licensed MIT */
(function($, undefined) {
    'use strict';

    var defaults = {
        item: 3,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 10,
        addClass: '',
        mode: 'slide',
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
        easing: 'linear', //'for jquery animation',//
        speed: 400, //ms'
        auto: false,
        pauseOnHover: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
        rtl: false,
        adaptiveHeight: false,
        vertical: false,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,
        responsive: [],
        /* jshint ignore:start */
        onBeforeStart: function onBeforeStart($el) {},
        onSliderLoad: function onSliderLoad($el) {},
        onBeforeSlide: function onBeforeSlide($el, scene) {},
        onAfterSlide: function onAfterSlide($el, scene) {},
        onBeforeNextSlide: function onBeforeNextSlide($el, scene) {},
        onBeforePrevSlide: function onBeforePrevSlide($el, scene) {}
            /* jshint ignore:end */
    };
    $.fn.lightSlider = function(options) {
        if (this.length === 0) {
            return this;
        }

        if (this.length > 1) {
            this.each(function() {
                $(this).lightSlider(options);
            });
            return this;
        }

        var plugin = {},
            settings = $.extend(true, {}, defaults, options),
            settingsTemp = {},
            $el = this;
        plugin.$el = this;

        if (settings.mode === 'fade') {
            settings.vertical = false;
        }
        var $children = $el.children(),
            windowW = $(window).width(),
            breakpoint = null,
            resposiveObj = null,
            length = 0,
            w = 0,
            on = false,
            elSize = 0,
            $slide = '',
            scene = 0,
            property = settings.vertical === true ? 'height' : 'width',
            gutter = settings.vertical === true ? 'margin-bottom' : 'margin-right',
            slideValue = 0,
            pagerWidth = 0,
            slideWidth = 0,
            thumbWidth = 0,
            interval = null,
            isTouch = 'ontouchstart' in document.documentElement;
        var refresh = {};

        refresh.chbreakpoint = function() {
            windowW = $(window).width();
            if (settings.responsive.length) {
                var item;
                if (settings.autoWidth === false) {
                    item = settings.item;
                }
                if (windowW < settings.responsive[0].breakpoint) {
                    for (var i = 0; i < settings.responsive.length; i++) {
                        if (windowW < settings.responsive[i].breakpoint) {
                            breakpoint = settings.responsive[i].breakpoint;
                            resposiveObj = settings.responsive[i];
                        }
                    }
                }
                if (typeof resposiveObj !== 'undefined' && resposiveObj !== null) {
                    for (var j in resposiveObj.settings) {
                        if (resposiveObj.settings.hasOwnProperty(j)) {
                            if (typeof settingsTemp[j] === 'undefined' || settingsTemp[j] === null) {
                                settingsTemp[j] = settings[j];
                            }
                            settings[j] = resposiveObj.settings[j];
                        }
                    }
                }
                if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
                    for (var k in settingsTemp) {
                        if (settingsTemp.hasOwnProperty(k)) {
                            settings[k] = settingsTemp[k];
                        }
                    }
                }
                if (settings.autoWidth === false) {
                    if (slideValue > 0 && slideWidth > 0) {
                        if (item !== settings.item) {
                            scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove));
                        }
                    }
                }
            }
        };

        refresh.calSW = function() {
            if (settings.autoWidth === false) {
                slideWidth = (elSize - (settings.item * settings.slideMargin - settings.slideMargin)) / settings.item;
            }
        };

        refresh.calWidth = function(cln) {
            var ln = cln === true ? $slide.find('.lslide').length : $children.length;
            if (settings.autoWidth === false) {
                w = ln * (slideWidth + settings.slideMargin);
            } else {
                w = 0;
                for (var i = 0; i < ln; i++) {
                    w += parseInt($children.eq(i).width()) + settings.slideMargin;
                }
            }
            return w;
        };
        plugin = {
            doCss: function doCss() {
                var support = function support() {
                    var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
                    var root = document.documentElement;
                    for (var i = 0; i < transition.length; i++) {
                        if (transition[i] in root.style) {
                            return true;
                        }
                    }
                };
                if (settings.useCSS && support()) {
                    return true;
                }
                return false;
            },
            keyPress: function keyPress() {
                if (settings.keyPress) {
                    $(document).on('keyup.lightslider', function(e) {
                        if (!$(':focus').is('input, textarea')) {
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            if (e.keyCode === 37) {
                                $el.goToPrevSlide();
                            } else if (e.keyCode === 39) {
                                $el.goToNextSlide();
                            }
                        }
                    });
                }
            },
            controls: function controls() {
                if (settings.controls) {
                    $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');
                    if (!settings.autoWidth) {
                        if (length <= settings.item) {
                            $slide.find('.lSAction').hide();
                        }
                    } else {
                        if (refresh.calWidth(false) < elSize) {
                            $slide.find('.lSAction').hide();
                        }
                    }
                    $slide.find('.lSAction a').on('click', function(e) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        } else {
                            e.returnValue = false;
                        }
                        if ($(this).attr('class') === 'lSPrev') {
                            $el.goToPrevSlide();
                        } else {
                            $el.goToNextSlide();
                        }
                        return false;
                    });
                }
            },
            initialStyle: function initialStyle() {
                var $this = this;
                if (settings.mode === 'fade') {
                    settings.autoWidth = false;
                    settings.slideEndAnimation = false;
                }
                if (settings.auto) {
                    settings.slideEndAnimation = false;
                }
                if (settings.autoWidth) {
                    settings.slideMove = 1;
                    settings.item = 1;
                }
                if (settings.loop) {
                    settings.slideMove = 1;
                    settings.freeMove = false;
                }
                settings.onBeforeStart.call(this, $el);
                refresh.chbreakpoint();
                $el.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + settings.addClass + '"><div class="lSSlideWrapper"></div></div>');
                $slide = $el.parent('.lSSlideWrapper');
                if (settings.rtl === true) {
                    $slide.parent().addClass('lSrtl');
                }
                if (settings.vertical) {
                    $slide.parent().addClass('vertical');
                    elSize = settings.verticalHeight;
                    $slide.css('height', elSize + 'px');
                } else {
                    elSize = $el.outerWidth();
                }
                $children.addClass('lslide');
                if (settings.loop === true && settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.clone = function() {
                        if (refresh.calWidth(true) > elSize) {
                            /**/
                            var tWr = 0,
                                tI = 0;
                            for (var k = 0; k < $children.length; k++) {
                                tWr += parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin;
                                tI++;
                                if (tWr >= elSize + settings.slideMargin) {
                                    break;
                                }
                            }
                            var tItem = settings.autoWidth === true ? tI : settings.item;

                            /**/
                            if (tItem < $el.find('.clone.left').length) {
                                for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
                                    $children.eq(i).remove();
                                }
                            }
                            if (tItem < $el.find('.clone.right').length) {
                                for (var j = $children.length - 1; j > $children.length - 1 - $el.find('.clone.right').length; j--) {
                                    scene--;
                                    $children.eq(j).remove();
                                }
                            }
                            /**/
                            for (var n = $el.find('.clone.right').length; n < tItem; n++) {
                                $el.find('.lslide').eq(n).clone().removeClass('lslide').addClass('clone right').appendTo($el);
                                scene++;
                            }
                            for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > $el.find('.lslide').length - tItem; m--) {
                                $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
                            }
                            $children = $el.children();
                        } else {
                            if ($children.hasClass('clone')) {
                                $el.find('.clone').remove();
                                $this.move($el, 0);
                            }
                        }
                    };
                    refresh.clone();
                }
                refresh.sSW = function() {
                    length = $children.length;
                    if (settings.rtl === true && settings.vertical === false) {
                        gutter = 'margin-left';
                    }
                    if (settings.autoWidth === false) {
                        $children.css(property, slideWidth + 'px');
                    }
                    $children.css(gutter, settings.slideMargin + 'px');
                    w = refresh.calWidth(false);
                    $el.css(property, w + 'px');
                    if (settings.loop === true && settings.mode === 'slide') {
                        if (on === false) {
                            scene = $el.find('.clone.left').length;
                        }
                    }
                };
                refresh.calL = function() {
                    $children = $el.children();
                    length = $children.length;
                };
                if (this.doCss()) {
                    $slide.addClass('usingCss');
                }
                refresh.calL();
                if (settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.sSW();
                    if (settings.loop === true) {
                        slideValue = $this.slideValue();
                        this.move($el, slideValue);
                    }
                    if (settings.vertical === false) {
                        this.setHeight($el, false);
                    }
                } else {
                    this.setHeight($el, true);
                    $el.addClass('lSFade');
                    if (!this.doCss()) {
                        $children.fadeOut(0);
                        $children.eq(scene).fadeIn(0);
                    }
                }
                if (settings.loop === true && settings.mode === 'slide') {
                    $children.eq(scene).addClass('active');
                } else {
                    $children.first().addClass('active');
                }
            },
            pager: function pager() {
                var $this = this;
                refresh.createPager = function() {
                    thumbWidth = (elSize - (settings.thumbItem * settings.thumbMargin - settings.thumbMargin)) / settings.thumbItem;
                    var $children = $slide.find('.lslide');
                    var length = $slide.find('.lslide').length;
                    var i = 0,
                        pagers = '',
                        v = 0;
                    for (i = 0; i < length; i++) {
                        if (settings.mode === 'slide') {
                            // calculate scene * slide value
                            if (!settings.autoWidth) {
                                v = i * ((slideWidth + settings.slideMargin) * settings.slideMove);
                            } else {
                                v += (parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove;
                            }
                        }
                        var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');
                        if (settings.gallery === true) {
                            pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>';
                        } else {
                            pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                        }
                        if (settings.mode === 'slide') {
                            if (v >= w - elSize - settings.slideMargin) {
                                i = i + 1;
                                var minPgr = 2;
                                if (settings.autoWidth) {
                                    pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                                    minPgr = 1;
                                }
                                if (i < minPgr) {
                                    pagers = null;
                                    $slide.parent().addClass('noPager');
                                } else {
                                    $slide.parent().removeClass('noPager');
                                }
                                break;
                            }
                        }
                    }
                    var $cSouter = $slide.parent();
                    $cSouter.find('.lSPager').html(pagers);
                    if (settings.gallery === true) {
                        if (settings.vertical === true) {
                            // set Gallery thumbnail width
                            $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
                        }
                        pagerWidth = i * (settings.thumbMargin + thumbWidth) + 0.5;
                        $cSouter.find('.lSPager').css({
                            property: pagerWidth + 'px',
                            'transition-duration': settings.speed + 'ms'
                        });
                        if (settings.vertical === true) {
                            $slide.parent().css('padding-right', settings.vThumbWidth + settings.galleryMargin + 'px');
                        }
                        $cSouter.find('.lSPager').css(property, pagerWidth + 'px');
                    }
                    var $pager = $cSouter.find('.lSPager').find('li');
                    $pager.first().addClass('active');
                    $pager.on('click', function() {
                        if (settings.loop === true && settings.mode === 'slide') {
                            scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index());
                        } else {
                            scene = $pager.index(this);
                        }
                        $el.mode(false);
                        if (settings.gallery === true) {
                            $this.slideThumb();
                        }
                        return false;
                    });
                };
                if (settings.pager) {
                    var cl = 'lSpg';
                    if (settings.gallery) {
                        cl = 'lSGallery';
                    }
                    $slide.after('<ul class="lSPager ' + cl + '"></ul>');
                    var gMargin = settings.vertical ? 'margin-left' : 'margin-top';
                    $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
                    refresh.createPager();
                }

                setTimeout(function() {
                    refresh.init();
                }, 0);
            },
            setHeight: function setHeight(ob, fade) {
                var obj = null,
                    $this = this;
                if (settings.loop) {
                    obj = ob.children('.lslide ').first();
                } else {
                    obj = ob.children().first();
                }
                var setCss = function setCss() {
                    var tH = obj.outerHeight(),
                        tP = 0,
                        tHT = tH;
                    if (fade) {
                        tH = 0;
                        tP = tHT * 100 / elSize;
                    }
                    ob.css({
                        'height': tH + 'px',
                        'padding-bottom': tP + '%'
                    });
                };
                setCss();
                if (obj.find('img').length) {
                    if (obj.find('img')[0].complete) {
                        setCss();
                        if (!interval) {
                            $this.auto();
                        }
                    } else {
                        obj.find('img').load(function() {
                            setTimeout(function() {
                                setCss();
                                if (!interval) {
                                    $this.auto();
                                }
                            }, 100);
                        });
                    }
                } else {
                    if (!interval) {
                        $this.auto();
                    }
                }
            },
            active: function active(ob, t) {
                if (this.doCss() && settings.mode === 'fade') {
                    $slide.addClass('on');
                }
                var sc = 0;
                if (scene * settings.slideMove < length) {
                    ob.removeClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.fadeOut(settings.speed);
                    }
                    if (t === true) {
                        sc = scene;
                    } else {
                        sc = scene * settings.slideMove;
                    }
                    //t === true ? sc = scene : sc = scene * settings.slideMove;
                    var l, nl;
                    if (t === true) {
                        l = ob.length;
                        nl = l - 1;
                        if (sc + 1 >= l) {
                            sc = nl;
                        }
                    }
                    if (settings.loop === true && settings.mode === 'slide') {
                        //t === true ? sc = scene - $el.find('.clone.left').length : sc = scene * settings.slideMove;
                        if (t === true) {
                            sc = scene - $el.find('.clone.left').length;
                        } else {
                            sc = scene * settings.slideMove;
                        }
                        if (t === true) {
                            l = ob.length;
                            nl = l - 1;
                            if (sc + 1 === l) {
                                sc = nl;
                            } else if (sc + 1 > l) {
                                sc = 0;
                            }
                        }
                    }

                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                    ob.eq(sc).addClass('active');
                } else {
                    ob.removeClass('active');
                    ob.eq(ob.length - 1).addClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.fadeOut(settings.speed);
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                }
            },
            move: function move(ob, v) {
                if (settings.rtl === true) {
                    v = -v;
                }
                if (this.doCss()) {
                    if (settings.vertical === true) {
                        ob.css({
                            'transform': 'translate3d(0px, ' + -v + 'px, 0px)',
                            '-webkit-transform': 'translate3d(0px, ' + -v + 'px, 0px)'
                        });
                    } else {
                        ob.css({
                            'transform': 'translate3d(' + -v + 'px, 0px, 0px)',
                            '-webkit-transform': 'translate3d(' + -v + 'px, 0px, 0px)'
                        });
                    }
                } else {
                    if (settings.vertical === true) {
                        ob.css('position', 'relative').animate({
                            top: -v + 'px'
                        }, settings.speed, settings.easing);
                    } else {
                        ob.css('position', 'relative').animate({
                            left: -v + 'px'
                        }, settings.speed, settings.easing);
                    }
                }
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            fade: function fade() {
                this.active($children, false);
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            slide: function slide() {
                var $this = this;
                refresh.calSlide = function() {
                    if (w > elSize) {
                        slideValue = $this.slideValue();
                        $this.active($children, false);
                        if (slideValue > w - elSize - settings.slideMargin) {
                            slideValue = w - elSize - settings.slideMargin;
                        } else if (slideValue < 0) {
                            slideValue = 0;
                        }
                        $this.move($el, slideValue);
                        if (settings.loop === true && settings.mode === 'slide') {
                            if (scene >= length - $el.find('.clone.left').length / settings.slideMove) {
                                $this.resetSlide($el.find('.clone.left').length);
                            }
                            if (scene === 0) {
                                $this.resetSlide($slide.find('.lslide').length);
                            }
                        }
                    }
                };
                refresh.calSlide();
            },
            resetSlide: function resetSlide(s) {
                var $this = this;
                $slide.find('.lSAction a').addClass('disabled');
                setTimeout(function() {
                    scene = s;
                    $slide.css('transition-duration', '0ms');
                    slideValue = $this.slideValue();
                    $this.active($children, false);
                    plugin.move($el, slideValue);
                    setTimeout(function() {
                        $slide.css('transition-duration', settings.speed + 'ms');
                        $slide.find('.lSAction a').removeClass('disabled');
                    }, 50);
                }, settings.speed + 100);
            },
            slideValue: function slideValue() {
                var _sV = 0;
                if (settings.autoWidth === false) {
                    _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove);
                } else {
                    _sV = 0;
                    for (var i = 0; i < scene; i++) {
                        _sV += parseInt($children.eq(i).width()) + settings.slideMargin;
                    }
                }
                return _sV;
            },
            slideThumb: function slideThumb() {
                var position;
                switch (settings.currentPagerPosition) {
                    case 'left':
                        position = 0;
                        break;
                    case 'middle':
                        position = elSize / 2 - thumbWidth / 2;
                        break;
                    case 'right':
                        position = elSize - thumbWidth;
                }
                var sc = scene - $el.find('.clone.left').length;
                var $pager = $slide.parent().find('.lSPager');
                if (settings.mode === 'slide' && settings.loop === true) {
                    if (sc >= $pager.children().length) {
                        sc = 0;
                    } else if (sc < 0) {
                        sc = $pager.children().length;
                    }
                }
                var thumbSlide = sc * (thumbWidth + settings.thumbMargin) - position;
                if (thumbSlide + elSize > pagerWidth) {
                    thumbSlide = pagerWidth - elSize - settings.thumbMargin;
                }
                if (thumbSlide < 0) {
                    thumbSlide = 0;
                }
                this.move($pager, thumbSlide);
            },
            auto: function auto() {
                if (settings.auto) {
                    clearInterval(interval);
                    interval = setInterval(function() {
                        $el.goToNextSlide();
                    }, settings.pause);
                }
            },
            pauseOnHover: function pauseOnHover() {
                var $this = this;
                if (settings.auto && settings.pauseOnHover) {
                    $slide.on('mouseenter', function() {
                        $(this).addClass('ls-hover');
                        $el.pause();
                        settings.auto = true;
                    });
                    $slide.on('mouseleave', function() {
                        $(this).removeClass('ls-hover');
                        if (!$slide.find('.lightSlider').hasClass('lsGrabbing')) {
                            $this.auto();
                        }
                    });
                }
            },
            touchMove: function touchMove(endCoords, startCoords) {
                $slide.css('transition-duration', '0ms');
                if (settings.mode === 'slide') {
                    var distance = endCoords - startCoords;
                    var swipeVal = slideValue - distance;
                    if (swipeVal >= w - elSize - settings.slideMargin) {
                        if (settings.freeMove === false) {
                            swipeVal = w - elSize - settings.slideMargin;
                        } else {
                            var swipeValT = w - elSize - settings.slideMargin;
                            swipeVal = swipeValT + (swipeVal - swipeValT) / 5;
                        }
                    } else if (swipeVal < 0) {
                        if (settings.freeMove === false) {
                            swipeVal = 0;
                        } else {
                            swipeVal = swipeVal / 5;
                        }
                    }
                    this.move($el, swipeVal);
                }
            },

            touchEnd: function touchEnd(distance) {
                $slide.css('transition-duration', settings.speed + 'ms');
                if (settings.mode === 'slide') {
                    var mxVal = false;
                    var _next = true;
                    slideValue = slideValue - distance;
                    if (slideValue > w - elSize - settings.slideMargin) {
                        slideValue = w - elSize - settings.slideMargin;
                        if (settings.autoWidth === false) {
                            mxVal = true;
                        }
                    } else if (slideValue < 0) {
                        slideValue = 0;
                    }
                    var gC = function gC(next) {
                        var ad = 0;
                        if (!mxVal) {
                            if (next) {
                                ad = 1;
                            }
                        }
                        if (!settings.autoWidth) {
                            var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
                            scene = parseInt(num) + ad;
                            if (slideValue >= w - elSize - settings.slideMargin) {
                                if (num % 1 !== 0) {
                                    scene++;
                                }
                            }
                        } else {
                            var tW = 0;
                            for (var i = 0; i < $children.length; i++) {
                                tW += parseInt($children.eq(i).width()) + settings.slideMargin;
                                scene = i + ad;
                                if (tW >= slideValue) {
                                    break;
                                }
                            }
                        }
                    };
                    if (distance >= settings.swipeThreshold) {
                        gC(false);
                        _next = false;
                    } else if (distance <= -settings.swipeThreshold) {
                        gC(true);
                        _next = false;
                    }
                    $el.mode(_next);
                    this.slideThumb();
                } else {
                    if (distance >= settings.swipeThreshold) {
                        $el.goToPrevSlide();
                    } else if (distance <= -settings.swipeThreshold) {
                        $el.goToNextSlide();
                    }
                }
            },

            enableDrag: function enableDrag() {
                var $this = this;
                if (!isTouch) {
                    var startCoords = 0,
                        endCoords = 0,
                        isDraging = false;
                    $slide.find('.lightSlider').addClass('lsGrab');
                    $slide.on('mousedown', function(e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        if ($(e.target).attr('class') !== 'lSPrev' && $(e.target).attr('class') !== 'lSNext') {
                            startCoords = settings.vertical === true ? e.pageY : e.pageX;
                            isDraging = true;
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                            $slide.scrollLeft += 1;
                            $slide.scrollLeft -= 1;
                            // *
                            $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
                            clearInterval(interval);
                        }
                    });
                    $(window).on('mousemove', function(e) {
                        if (isDraging) {
                            endCoords = settings.vertical === true ? e.pageY : e.pageX;
                            $this.touchMove(endCoords, startCoords);
                        }
                    });
                    $(window).on('mouseup', function(e) {
                        if (isDraging) {
                            $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
                            isDraging = false;
                            endCoords = settings.vertical === true ? e.pageY : e.pageX;
                            var distance = endCoords - startCoords;
                            if (Math.abs(distance) >= settings.swipeThreshold) {
                                $(window).on('click.ls', function(e) {
                                    if (e.preventDefault) {
                                        e.preventDefault();
                                    } else {
                                        e.returnValue = false;
                                    }
                                    e.stopImmediatePropagation();
                                    e.stopPropagation();
                                    $(window).off('click.ls');
                                });
                            }

                            $this.touchEnd(distance);
                        }
                    });
                }
            },

            enableTouch: function enableTouch() {
                var $this = this;
                if (isTouch) {
                    var startCoords = {},
                        endCoords = {};
                    $slide.on('touchstart', function(e) {
                        endCoords = e.originalEvent.targetTouches[0];
                        startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
                        startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
                        clearInterval(interval);
                    });
                    $slide.on('touchmove', function(e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        var orig = e.originalEvent;
                        endCoords = orig.targetTouches[0];
                        var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
                        var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
                        if (settings.vertical === true) {
                            if (yMovement * 3 > xMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageY, startCoords.pageY);
                        } else {
                            if (xMovement * 3 > yMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageX, startCoords.pageX);
                        }
                    });
                    $slide.on('touchend', function() {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        var distance;
                        if (settings.vertical === true) {
                            distance = endCoords.pageY - startCoords.pageY;
                        } else {
                            distance = endCoords.pageX - startCoords.pageX;
                        }
                        $this.touchEnd(distance);
                    });
                }
            },
            build: function build() {
                var $this = this;
                $this.initialStyle();
                if (this.doCss()) {

                    if (settings.enableTouch === true) {
                        $this.enableTouch();
                    }
                    if (settings.enableDrag === true) {
                        $this.enableDrag();
                    }
                }

                $(window).on('focus', function() {
                    $this.auto();
                });

                $(window).on('blur', function() {
                    clearInterval(interval);
                });

                $this.pager();
                $this.pauseOnHover();
                $this.controls();
                $this.keyPress();
            }
        };
        plugin.build();
        refresh.init = function() {
            refresh.chbreakpoint();
            if (settings.vertical === true) {
                if (settings.item > 1) {
                    elSize = settings.verticalHeight;
                } else {
                    elSize = $children.outerHeight();
                }
                $slide.css('height', elSize + 'px');
            } else {
                elSize = $slide.outerWidth();
            }
            if (settings.loop === true && settings.mode === 'slide') {
                refresh.clone();
            }
            refresh.calL();
            if (settings.mode === 'slide') {
                $el.removeClass('lSSlide');
            }
            if (settings.mode === 'slide') {
                refresh.calSW();
                refresh.sSW();
            }
            setTimeout(function() {
                if (settings.mode === 'slide') {
                    $el.addClass('lSSlide');
                }
            }, 1000);
            if (settings.pager) {
                refresh.createPager();
            }
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).outerHeight(true));
            }
            if (settings.adaptiveHeight === false) {
                if (settings.mode === 'slide') {
                    if (settings.vertical === false) {
                        plugin.setHeight($el, false);
                    } else {
                        plugin.auto();
                    }
                } else {
                    plugin.setHeight($el, true);
                }
            }
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
            if (settings.mode === 'slide') {
                plugin.slide();
            }
            if (settings.autoWidth === false) {
                if ($children.length <= settings.item) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            } else {
                if (refresh.calWidth(false) < elSize && w !== 0) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            }
        };
        $el.goToPrevSlide = function() {
            if (scene > 0) {
                settings.onBeforePrevSlide.call(this, $el, scene);
                scene--;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforePrevSlide.call(this, $el, scene);
                    if (settings.mode === 'fade') {
                        var l = length - 1;
                        scene = parseInt(l / settings.slideMove);
                    }
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimation === true) {
                    $el.addClass('leftEnd');
                    setTimeout(function() {
                        $el.removeClass('leftEnd');
                    }, 400);
                }
            }
        };
        $el.goToNextSlide = function() {
            var nextI = true;
            if (settings.mode === 'slide') {
                var _slideValue = plugin.slideValue();
                nextI = _slideValue < w - elSize - settings.slideMargin;
            }
            if (scene * settings.slideMove < length - settings.slideMove && nextI) {
                settings.onBeforeNextSlide.call(this, $el, scene);
                scene++;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforeNextSlide.call(this, $el, scene);
                    scene = 0;
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimation === true) {
                    $el.addClass('rightEnd');
                    setTimeout(function() {
                        $el.removeClass('rightEnd');
                    }, 400);
                }
            }
        };
        $el.mode = function(_touch) {
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).outerHeight(true));
            }
            if (on === false) {
                if (settings.mode === 'slide') {
                    if (plugin.doCss()) {
                        $el.addClass('lSSlide');
                        if (settings.speed !== '') {
                            $slide.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $slide.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                } else {
                    if (plugin.doCss()) {
                        if (settings.speed !== '') {
                            $el.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $el.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                }
            }
            if (!_touch) {
                settings.onBeforeSlide.call(this, $el, scene);
            }
            if (settings.mode === 'slide') {
                plugin.slide();
            } else {
                plugin.fade();
            }
            if (!$slide.hasClass('ls-hover')) {
                plugin.auto();
            }
            setTimeout(function() {
                if (!_touch) {
                    settings.onAfterSlide.call(this, $el, scene);
                }
            }, settings.speed);
            on = true;
        };
        $el.play = function() {
            $el.goToNextSlide();
            settings.auto = true;
            plugin.auto();
        };
        $el.pause = function() {
            settings.auto = false;
            clearInterval(interval);
        };
        $el.refresh = function() {
            refresh.init();
        };
        $el.getCurrentSlideCount = function() {
            var sc = scene;
            if (settings.loop) {
                var ln = $slide.find('.lslide').length,
                    cl = $el.find('.clone.left').length;
                if (scene <= cl - 1) {
                    sc = ln + (scene - cl);
                } else if (scene >= ln + cl) {
                    sc = scene - ln - cl;
                } else {
                    sc = scene - cl;
                }
            }
            return sc + 1;
        };
        $el.getTotalSlideCount = function() {
            return $slide.find('.lslide').length;
        };
        $el.goToSlide = function(s) {
            if (settings.loop) {
                scene = s + $el.find('.clone.left').length - 1;
            } else {
                scene = s;
            }
            $el.mode(false);
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
        };
        $el.destroy = function() {
            if ($el.lightSlider) {
                $el.goToPrevSlide = function() {};
                $el.goToNextSlide = function() {};
                $el.mode = function() {};
                $el.play = function() {};
                $el.pause = function() {};
                $el.refresh = function() {};
                $el.getCurrentSlideCount = function() {};
                $el.getTotalSlideCount = function() {};
                $el.goToSlide = function() {};
                $el.lightSlider = null;
                refresh = {
                    init: function init() {}
                };
                $el.parent().parent().find('.lSAction, .lSPager').remove();
                $el.removeClass('lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right').removeAttr('style').unwrap().unwrap();
                $el.children().removeAttr('style');
                $children.removeClass('lslide active');
                $el.find('.clone').remove();
                $children = null;
                interval = null;
                on = false;
                scene = 0;
            }
        };
        setTimeout(function() {
            settings.onSliderLoad.call(this, $el);
        }, 10);
        $(window).on('resize orientationchange', function(e) {
            setTimeout(function() {
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
                refresh.init();
            }, 200);
        });
        return this;
    };
})(jQuery);
'use strict';

(function() {
    //Main javascript for page here
    console.log("working");
    var options = {
        item: 3,
        verticalHeight: 100,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
        galleryMargin: 5,
        thumbMargin: 5,
        controls: true,
        prevHtml: '<span class="slider_buttons">< </>',
        nextHtml: '<span class="slider_buttons">></>'

    };
    $("#carousel_product").lightSlider(options);
    // Create a new Tabs.

    //var carousel = $("#carousel_product").carousel();
    //var carousel = new ch.Carousel($("#carousel_product"), {});
})();