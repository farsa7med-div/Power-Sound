(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        357: function() {},
        362: function(t, e) {
            var n = Math.abs;
            (function() {
                (null !== e ? e : this).Lethargy = function() {
                    function t(t, e, i, o) {
                        this.stability = null == t ? 8 : n(t), this.sensitivity = null == e ? 100 : 1 + n(e), this.tolerance = null == i ? 1.1 : 1 + n(i), this.delay = null == o ? 150 : o, this.lastUpDeltas = function() {
                            var t, e, n;
                            for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) n.push(null);
                            return n
                        }.call(this), this.lastDownDeltas = function() {
                            var t, e, n;
                            for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) n.push(null);
                            return n
                        }.call(this), this.deltasTimestamp = function() {
                            var t, e, n;
                            for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) n.push(null);
                            return n
                        }.call(this)
                    }
                    return t.prototype.check = function(t) {
                        var e;
                        return null == (t = t.originalEvent || t).wheelDelta ? null == t.deltaY ? (null != t.detail || 0 === t.detail) && (e = -40 * t.detail) : e = -40 * t.deltaY : e = t.wheelDelta, this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), 0 < e ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                    }, t.prototype.isInertia = function(t) {
                        var e, i, o, r, s, a, u;
                        return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (o = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), u = o.reduce(function(t, e) {
                            return t + e
                        }), s = i.reduce(function(t, e) {
                            return t + e
                        }), a = u / o.length, r = s / i.length, !!(n(a) < n(r * this.tolerance) && this.sensitivity < n(r)) && t)
                    }, t.prototype.showLastUpDeltas = function() {
                        return this.lastUpDeltas
                    }, t.prototype.showLastDownDeltas = function() {
                        return this.lastDownDeltas
                    }, t
                }()
            }).call(this), t.exports = this.Lethargy
        },
        373: function(t, e, n) {
            t.exports = n.p + "assets/sounds/wind.2821b.mp3"
        },
        374: function(t, e, n) {
            t.exports = n.p + "assets/sounds/bensound-tomorrow.63cc0.mp3"
        },
        376: function(t, e, n) {
            "use strict";

            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function o(t, e) {
                for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }

            function r(t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function s(t) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function a(t, e) {
                return (a = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }

            function h(t, e, n) {
                return e && l(t.prototype, e), n && l(t, n), t
            }

            function f(t, e) {
                return !e || "object" !== u(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function p(t) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function d(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && y(t, e)
            }

            function y(t, e) {
                return (y = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function v(t) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function g(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function m(t, e) {
                for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }

            function b(t, e, n) {
                return e && m(t.prototype, e), n && m(t, n), t
            }

            function _(t, e) {
                return !e || "object" !== v(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function w(t, e, n) {
                return (w = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                    var i = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = k(t)););
                        return t
                    }(t, e);
                    if (i) {
                        var o = Object.getOwnPropertyDescriptor(i, e);
                        return o.get ? o.get.call(n) : o.value
                    }
                })(t, e, n || t)
            }

            function k(t) {
                return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function S(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && A(t, e)
            }

            function A(t, e) {
                return (A = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function T(t) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function O(t, e) {
                for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }

            function E(t, e) {
                return !e || "object" !== T(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function P(t) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function x(t, e) {
                return (x = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function C(t, e, n, i, o, r, s) {
                try {
                    var a = t[r](s),
                        u = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(u) : Promise.resolve(u).then(i, o)
            }

            function j(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(i, o) {
                        function r(t) {
                            C(a, i, o, r, s, "next", t)
                        }

                        function s(t) {
                            C(a, i, o, r, s, "throw", t)
                        }
                        var a = t.apply(e, n);
                        r(void 0)
                    })
                }
            }

            function I(t, e) {
                for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }

            function B() {
                if (window.gtag) {
                    for (var t, e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    ft.b.log.apply(ft.b, ["[ANALYTICS] Track:"].concat(n)), (t = window).gtag.apply(t, n)
                }
            }

            function q(t) {
                var e = t.sound,
                    n = t.vol,
                    i = t.timing;
                e.playing() ? function(t) {
                    var e = t.sound,
                        n = t.vol,
                        i = t.timing;
                    e.playing() && Tt.b.to(e, i, {
                        volume: n
                    })
                }(t) : (e.on("load", function() {
                    Tt.b.to(e, i, {
                        volume: n,
                        onStart: function() {
                            e.play()
                        }
                    })
                }), "unloaded" === e.state() ? e.load() : Tt.b.to(e, i, {
                    volume: n,
                    onStart: function() {
                        e.play()
                    }
                }))
            }

            function L(t) {
                return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function R(t, e, n, i, o, r, s) {
                try {
                    var a = t[r](s),
                        u = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(u) : Promise.resolve(u).then(i, o)
            }

            function M(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(i, o) {
                        function r(t) {
                            R(a, i, o, r, s, "next", t)
                        }

                        function s(t) {
                            R(a, i, o, r, s, "throw", t)
                        }
                        var a = t.apply(e, n);
                        r(void 0)
                    })
                }
            }

            function F(t, e) {
                for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }

            function D(t, e) {
                return !e || "object" !== L(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function H(t, e, n) {
                return (H = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                    var i = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = W(t)););
                        return t
                    }(t, e);
                    if (i) {
                        var o = Object.getOwnPropertyDescriptor(i, e);
                        return o.get ? o.get.call(n) : o.value
                    }
                })(t, e, n || t)
            }

            function W(t) {
                return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function U(t, e) {
                return (U = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function G(t) {
                return (G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function V(t, e) {
                for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }

            function z(t, e) {
                return !e || "object" !== G(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function N(t) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function J(t, e) {
                return (J = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function Y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null == arguments[e] ? {} : arguments[e],
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), i.forEach(function(e) {
                        K(t, e, n[e])
                    })
                }
                return t
            }

            function K(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Q(t) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function X(t, e) {
                return function() {
                    var n = ["linear-gradient(", ["".concat(e.directionDegrees.toFixed(2), "deg")].concat(Q(e.colors.map(function(t) {
                        return "".concat(t.color, " ").concat((100 * t.pos).toFixed(3), "%")
                    }))).join(", "), ")"].join("");
                    t.style.backgroundImage = n
                }
            }

            function Z(t) {
                return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function $(t) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function tt(t, e, n, i, o, r, s) {
                try {
                    var a = t[r](s),
                        u = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(u) : Promise.resolve(u).then(i, o)
            }

            function et(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(i, o) {
                        function r(t) {
                            tt(a, i, o, r, s, "next", t)
                        }

                        function s(t) {
                            tt(a, i, o, r, s, "throw", t)
                        }
                        var a = t.apply(e, n);
                        r(void 0)
                    })
                }
            }

            function nt(t, e) {
                for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }

            function it(t, e) {
                return !e || "object" !== Z(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function ot(t, e, n) {
                return (ot = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                    var i = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = rt(t)););
                        return t
                    }(t, e);
                    if (i) {
                        var o = Object.getOwnPropertyDescriptor(i, e);
                        return o.get ? o.get.call(n) : o.value
                    }
                })(t, e, n || t)
            }

            function rt(t) {
                return (rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function st(t, e) {
                return (st = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function at(t) {
                return (at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function ut(t, e) {
                for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }

            function ct(t, e) {
                return !e || "object" !== at(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function lt(t) {
                return (lt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function ht(t, e) {
                return (ht = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            n.r(e);
            n(357);
            var ft = n(14),
                pt = n(105),
                dt = n(361),
                yt = n.n(dt),
                vt = n(362),
                gt = {
                    threshold: 5,
                    maxTimeGap: 0,
                    minTimeGap: 0,
                    stability: 8,
                    sensitivity: 99,
                    tolerance: .1,
                    delay: 150
                },
                mt = function(t) {
                    function e(t) {
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), r(this, s(e).call(this, t))
                    }
                    return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && a(t, e)
                        }(e, pt.a),
                        function(t, e, n) {
                            e && o(t.prototype, e), n && o(t, n)
                        }(e, [{
                            key: "_setup",
                            value: function(t) {
                                this._eventCallback = t.callback, this._config = Object.assign({}, gt, t), this._counter = 0, this._lethargy = new vt(this._config.stability, this._config.stability, this._config.tolerance, this._config.delay), this._hummer = new yt.a.Manager(this._el), this._swipe = new yt.a.Swipe, this._hummer.add(this._swipe), this._wheelHandler = this._wheelHandler.bind(this), this._swipeHandler = this._swipeHandler.bind(this)
                            }
                        }, {
                            key: "_activate",
                            value: function() {
                                this._el.addEventListener("wheel", this._wheelHandler, {
                                    passive: !0
                                }), this._hummer.on("swipe", this._swipeHandler)
                            }
                        }, {
                            key: "_deactivate",
                            value: function() {
                                this._el.removeEventListener("wheel", this._wheelHandler)
                            }
                        }, {
                            key: "_swipeHandler",
                            value: function(t) {
                                (10 & t.direction) === t.direction && 100 < t.distance ? this._eventCallback(-1) : (20 & t.direction) === t.direction && 100 < t.distance && this._eventCallback(1)
                            }
                        }, {
                            key: "_wheelHandler",
                            value: function(t) {
                                var e = performance.now();
                                0 < this._config.maxTimeGap && (e - (this._lastTime || 0) >= this._config.maxTimeGap && (this._counter = 0), this._lastTime = e);
                                var n = this._lethargy.check(t);
                                if (!1 !== n && (this._counter += -n, Math.abs(this._counter) >= this._config.threshold)) {
                                    var i = !0;
                                    0 < this._config.minTimeGap && (e - (this._lastEventTime || 0) < this._config.minTimeGap ? i = !1 : this._lastEventTime = e), i && this._eventCallback(0 < this._counter ? -1 : 1), this._counter = 0
                                }
                            }
                        }]), e
                }(),
                bt = function(t) {
                    function e(t) {
                        var n;
                        return c(this, e), (n = f(this, p(e).call(this, t)))._el, n
                    }
                    return d(e, pt.a), h(e, [{
                        key: "_activate",
                        value: function(t) {
                            var e = this;
                            return Promise.resolve(this._activateSelf(t)).then(function() {
                                return e._el.tabHooks && e._el.tabHooks.activate ? e._el.tabHooks.activate(t) : Promise.resolve()
                            })
                        }
                    }, {
                        key: "_deactivate",
                        value: function(t) {
                            var e = this;
                            return Promise.resolve(this._deactivateSelf(t)).then(function() {
                                return e._el.tabHooks && e._el.tabHooks.deactivate ? e._el.tabHooks.deactivate(t) : Promise.resolve()
                            })
                        }
                    }, {
                        key: "_activateSelf",
                        value: function() {
                            return Promise.resolve()
                        }
                    }, {
                        key: "_deactivateSelf",
                        value: function() {
                            return Promise.resolve()
                        }
                    }, {
                        key: "tabId",
                        get: function() {
                            return this._el.dataset.navId
                        }
                    }]), e
                }(),
                _t = function(t) {
                    function e(t) {
                        var n;
                        return c(this, e), (n = f(this, p(e).call(this, t)))._activateClass = t.activateClass, n
                    }
                    return d(e, bt), h(e, [{
                        key: "_activateSelf",
                        value: function() {
                            return this._el.classList.add(this._activateClass), Promise.resolve()
                        }
                    }, {
                        key: "_deactivateSelf",
                        value: function() {
                            return this._el.classList.remove(this._activateClass), Promise.resolve()
                        }
                    }]), e
                }(),
                wt = (n(147), function(t) {
                    function e() {
                        return g(this, e), _(this, k(e).apply(this, arguments))
                    }
                    return S(e, pt.a), b(e, [{
                        key: "_setup",
                        value: function(t) {
                            w(k(e.prototype), "_setup", this).call(this, t), this._el, this._tabs = []
                        }
                    }, {
                        key: "setActivateCallback",
                        value: function(t) {
                            return this._activateCallback = t, this
                        }
                    }, {
                        key: "setActivationChain",
                        value: function(t) {
                            return this._chainActivation = t, this
                        }
                    }, {
                        key: "init",
                        value: function() {
                            return this
                        }
                    }, {
                        key: "_requestActivate",
                        value: function() {
                            this._activateCallback && this._activateCallback(this)
                        }
                    }, {
                        key: "_activate",
                        value: function(t) {
                            if (this._chainActivation) {
                                var e = Promise.resolve(this._activateSelf(t));
                                return this._tabs.forEach(function(n) {
                                    e = e.then(function() {
                                        return Promise.resolve(n.activate(t))
                                    })
                                }), e
                            }
                            return this._tabs.forEach(function(e) {
                                return e.activate(t)
                            }), this._activateSelf(t), !0
                        }
                    }, {
                        key: "_activateSelf",
                        value: function(t) {
                            this._el.linkHooks && this._el.linkHooks.activate && this._el.linkHooks.activate(t)
                        }
                    }, {
                        key: "_deactivate",
                        value: function(t) {
                            if (this._chainActivation) {
                                var e = Promise.resolve(this._deactivateSelf(t));
                                return this._tabs.forEach(function(n) {
                                    e = e.then(function() {
                                        return Promise.resolve(n.deactivate(t))
                                    })
                                }), e
                            }
                            return this._tabs.forEach(function(e) {
                                return e.deactivate(t)
                            }), this._deactivateSelf(t), null
                        }
                    }, {
                        key: "_deactivateSelf",
                        value: function(t) {
                            this._el.linkHooks && this._el.linkHooks.deactivate && this._el.linkHooks.deactivate(t)
                        }
                    }, {
                        key: "registerTab",
                        value: function(t) {
                            this._tabs.push(t)
                        }
                    }, {
                        key: "targetId",
                        get: function() {
                            throw new Error("not implemented")
                        }
                    }, {
                        key: "tabs",
                        get: function() {
                            return this._tabs
                        }
                    }, {
                        key: "item",
                        get: function() {
                            return this._el
                        }
                    }]), e
                }()),
                kt = function(t) {
                    function e(t) {
                        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "active",
                            i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                            o = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
                        return g(this, e), _(this, k(e).call(this, {
                            el: t,
                            activeClass: n,
                            clickEnabled: i,
                            hoverEnabled: o
                        }))
                    }
                    return S(e, wt), b(e, [{
                        key: "_setup",
                        value: function(t) {
                            w(k(e.prototype), "_setup", this).call(this, t);
                            var n = t.activeClass,
                                i = t.clickEnabled,
                                o = t.hoverEnabled;
                            this._activeClass = n, this._clickEnabled = i, this._hoverEnabled = o, this._clickEnabled && this._el.addEventListener("click", this._onClick.bind(this)), this._hoverEnabled && this._el.addEventListener("mouseover", this._onHover.bind(this))
                        }
                    }, {
                        key: "init",
                        value: function() {
                            return this._el.classList.contains(this._activeClass) && this.activate(0), w(k(e.prototype), "init", this).call(this)
                        }
                    }, {
                        key: "_onClick",
                        value: function(t) {
                            t.preventDefault(), this._requestActivate()
                        }
                    }, {
                        key: "_onHover",
                        value: function(t) {
                            t.preventDefault(), this._requestActivate()
                        }
                    }, {
                        key: "_activateSelf",
                        value: function(t) {
                            this._el.classList.add(this._activeClass), w(k(e.prototype), "_activateSelf", this).call(this, t)
                        }
                    }, {
                        key: "_deactivateSelf",
                        value: function(t) {
                            this._el.classList.remove(this._activeClass), w(k(e.prototype), "_deactivateSelf", this).call(this, t)
                        }
                    }, {
                        key: "targetId",
                        get: function() {
                            return this._el.dataset.navTarget
                        }
                    }]), e
                }(),
                St = function(t) {
                    function e(t) {
                        var n;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), (n = E(this, P(e).call(this, t))).setActiveIndex = function(t) {
                            return n.setActiveLink(n._links[t])
                        }, n.setActiveLink = function(t) {
                            if (t === n._currentActiveLink || n._isSwitching) return null;
                            n._isSwitching = !0;
                            var e = n._currentActiveLink,
                                i = t,
                                o = n._links.indexOf(t),
                                r = n._links.indexOf(e),
                                s = Math.sign(o - r),
                                a = function() {
                                    return n._onLinkWillChange(e, i, s)
                                },
                                u = function() {
                                    return n._onLinkChanging(e, i, s)
                                },
                                c = function() {
                                    return n._onLinkChanged(e, i, s)
                                };
                            return n._currentActiveLink = i, n._currentActiveIndex = o, n._async ? (a(), e && e.deactivate(s), u(), i.activate(s), c(), n._isSwitching = !1, null) : new Promise(function(t, o) {
                                return e ? (a(), Promise.resolve(e.deactivate(s)).then(u).then(function() {
                                    return i.activate(s)
                                }).then(function() {
                                    n._isSwitching = !1, c()
                                }).then(t).catch(o)) : (a(), u(), Promise.resolve(i.activate(s)).then(function() {
                                    c(), n._isSwitching = !1
                                }))
                            })
                        }, n
                    }
                    return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && x(t, e)
                        }(e, pt.a),
                        function(t, e, n) {
                            e && O(t.prototype, e), n && O(t, n)
                        }(e, [{
                            key: "_setup",
                            value: function(t) {
                                var e = this;
                                ft.b.log(t, "__config"), this._linkActiveClass = t.linkActiveClass || "active", this._tabActiveClass = t.tabActiveClass || "active", this._tabs = t.tabItems || (t.tabs || []).map(function(t) {
                                    return new _t({
                                        el: t,
                                        activateClass: e._tabActiveClass
                                    })
                                }), this._links = t.linkItems || (t.links || []).map(function(e) {
                                    return new kt(e, t.linkActiveClass, t.clicksEnabled, t.hoversEnabled)
                                }), this._currentActiveLink = null, this._currentActiveIndex = -1, this._isSwitching = !1, this._onLinkWillChange = t.onWillChange || function() {}, this._onLinkChanged = t.onChanged || function() {}, this._onLinkChanging = t.onChanging || function() {}, this._async = !t.syncActivate, this._clicksEnabled = t.clicksEnabled, this._hoversEnabled = t.hoversEnabled, this._links.forEach(function(n, i) {
                                    var o = n.targetId;
                                    e._tabs.forEach(function(t) {
                                        o === t.tabId && n.registerTab(t)
                                    }), 0 === n.tabs.length && ft.b.error("Could not find  tab for targetID =", o), n.setActivateCallback(function(t) {
                                        return e.setActiveLink(t)
                                    }).setActivationChain(t.syncActivate).init(), n.isActive && (e._currentActiveLink ? n.deactivate() : (e._currentActiveLink = n, e._currentActiveIndex = i))
                                })
                            }
                        }, {
                            key: "next",
                            value: function() {
                                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                                    e = this._currentActiveIndex + 1;
                                e >= this._links.length && (e = t ? 0 : this._links.length - 1), this.setActiveIndex(e)
                            }
                        }, {
                            key: "prev",
                            value: function() {
                                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                                    e = this._currentActiveIndex - 1;
                                0 > e && (e = t ? this._links.length - 1 : 0), this.setActiveIndex(e)
                            }
                        }, {
                            key: "addNextButton",
                            value: function(t) {
                                var e = this,
                                    n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                                return this._nextButton = t, this._nextButton && this._nextButton.addEventListener("click", function(t) {
                                    t.preventDefault(), e.next(n)
                                }), this
                            }
                        }, {
                            key: "addPrevButton",
                            value: function(t) {
                                var e = this,
                                    n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                                return this._prevButton = t, this._prevButton && this._prevButton.addEventListener("click", function(t) {
                                    t.preventDefault(), e.prev(n)
                                }), this
                            }
                        }, {
                            key: "currentIndex",
                            get: function() {
                                return this._currentActiveIndex
                            }
                        }, {
                            key: "currentLink",
                            get: function() {
                                return this._currentActiveLink
                            }
                        }]), e
                }(),
                At = n(108),
                Tt = n(104),
                Ot = n(358),
                Et = n(107),
                Pt = n(106),
                xt = n(375);
            Tt.b.registerPlugin(xt.a);
            var Ct = {
                    customEase: xt.a.create("customEase", "M0,0 C0,0 0.02418,0.00699 0.03514,0.01455 0.0478,0.02328 0.05871,0.0317 0.0662,0.04565 0.16909,0.23704 0.22676,0.38646 0.34063,0.58285 0.38634,0.66168 0.42795,0.70698 0.48877,0.77439 0.5269,0.81666 0.55704,0.84088 0.60334,0.87403 0.6465,0.90492 0.67788,0.92282 0.72616,0.94432 0.77142,0.96447 0.80391,0.97508 0.85243,0.98495 0.90669,0.99598 1,1 1,1"),
                    customEase2: xt.a.create("customEase2", "M0,0 C0,0 0.09837,0.00299 0.15616,0.01379 0.21214,0.02425 0.24947,0.03496 0.30193,0.05642 0.35306,0.07734 0.3863,0.09564 0.4322,0.12673 0.47842,0.15805 0.50635,0.18269 0.54668,0.22224 0.58467,0.25949 0.60589,0.28564 0.63819,0.32874 0.67295,0.37513 0.69149,0.40454 0.72112,0.45506 0.75283,0.5091 0.76888,0.54089 0.79627,0.59819 0.85191,0.71461 0.87591,0.78563 0.93241,0.89707 0.95359,0.93885 1,1 1,1"),
                    hideElements: function(t) {
                        Tt.b.set(t, {
                            autoAlpha: 0
                        })
                    },
                    clearTweens: function(t) {
                        Tt.b.killTweensOf(t)
                    }
                },
                jt = function() {
                    function t(e) {
                        var n = this;
                        (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        })(this, t), this.soundAllowed = function() {
                            var t = j(regeneratorRuntime.mark(function t(e) {
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return localStorage.setItem("onboarded", "true"), n.onStart && n.onStart(), t.next = 4, n.setupAnalyser(e);
                                        case 4:
                                            n.startGameFlow();
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            }));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(), this.soundNotAllowed = function() {
                            Tt.b.to(n.rejectMessage, .8, {
                                opacity: 1,
                                display: "flex"
                            })
                        }, this.onStart = e.onStart, this.onStep = e.onStep, this.beforeStart = e.beforeStart, this.onFlowFinished = e.onFlowFinished, this._isFinished = !1, this.tl = Tt.b.timeline(), this.t2 = Tt.b.timeline(), this.t3 = Tt.b.timeline(), this._isReady = !1, this._voiceCheckCounter = 0, this._startAnimationInProgress = !1
                    }
                    return function(t, e, n) {
                        e && I(t.prototype, e), n && I(t, n)
                    }(t, [{
                        key: "setup",
                        value: function() {
                            var t = j(regeneratorRuntime.mark(function t() {
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            this.fronBg = document.querySelector(".second-bg"), this.backBg = document.querySelector(".third-bg"), this.firstBg = document.querySelector(".first-bg"), this.sky = document.querySelector(".sky"), this.skyLight = document.querySelector(".sky-light"), this._finishText = document.querySelector("#finish-wrap"), this._finishTextElems = this._finishText.querySelectorAll(".final-anim"), this.lights = document.querySelectorAll(".light"), this.radialLights = document.querySelectorAll(".radial-light"), this.bgLight = document.querySelector(".bg-light"), this.firstMessage = document.querySelector(".message.message-1"), this.secondMessage = document.querySelector(".message.message-2"), this.textSlide1 = document.querySelector(".text-slide-1"), this.rejectMessage = document.querySelector(".reject-message-wrap"), this.limit = -this.fronBg.querySelector("svg").clientWidth + window.innerWidth + 150;
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, this)
                            }));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "activate",
                        value: function() {
                            this.setupAudio(), this.goStreaming()
                        }
                    }, {
                        key: "setupAudio",
                        value: function() {
                            var t = window.AudioContext || window.webkitAudioContext || !1;
                            t ? this.audioContext = new t : alert("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox")
                        }
                    }, {
                        key: "goStreaming",
                        value: function() {
                            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, void 0 === navigator.mediaDevices.getUserMedia ? navigator.getUserMedia({
                                audio: !0
                            }, this.soundAllowed, this.soundNotAllowed) : navigator.mediaDevices.getUserMedia({
                                audio: !0
                            }).then(this.soundAllowed).catch(this.soundNotAllowed)
                        }
                    }, {
                        key: "deactivate",
                        value: function() {}
                    }, {
                        key: "setupAnalyser",
                        value: function() {
                            var t = j(regeneratorRuntime.mark(function t(e) {
                                var n, i;
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return window.persistAudioStream = e, t.next = 3, this.audioContext.createMediaStreamSource(e);
                                        case 3:
                                            return n = t.sent, t.next = 6, this.audioContext.createAnalyser();
                                        case 6:
                                            return i = t.sent, t.next = 9, n.connect(i);
                                        case 9:
                                            i.fftSize = 128, this.analyser = i;
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, this)
                            }));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "startGameFlow",
                        value: function() {
                            var t = this,
                                e = new Uint8Array(this.analyser.frequencyBinCount),
                                n = 0;
                            this._isFinished || function i() {
                                var o = Math.floor;
                                t.raf = requestAnimationFrame(i), t.analyser.getByteFrequencyData(e), n++;
                                for (var r = 0; 2 > r; r += 1) t._soundMagnitude = o(e[r]) - o(e[r]) % 5, t._soundMagnitude > 200 && t._isReady ? (t.onStep(t._soundMagnitude, n), t.fronBg.getBoundingClientRect().left >= t.limit ? t.animateFlow() : !t._isFinished && (t.onFinish(), t._isFinished = !0)) : !(t._soundMagnitude > 220) || t._isReady || t._startAnimationInProgress || t.showVoiceMessages()
                            }()
                        }
                    }, {
                        key: "showVoiceMessages",
                        value: function() {
                            var t = this;
                            0 === this._voiceCheckCounter ? (this._startAnimationInProgress = !0, this.t3.fromTo(this.firstMessage, .8, {
                                y: 0,
                                autoAlpha: 1,
                                display: "flex"
                            }, {
                                y: -30,
                                autoAlpha: 0,
                                display: "none"
                            }).fromTo(this.secondMessage, .8, {
                                y: 30,
                                autoAlpha: 0,
                                display: "none"
                            }, {
                                y: 0,
                                autoAlpha: 1,
                                display: "flex"
                            }).add(function() {
                                t._voiceCheckCounter++, t._startAnimationInProgress = !1
                            })) : 1 === this._voiceCheckCounter && (this._startAnimationInProgress = !0, this.t3.fromTo(this.secondMessage, .8, {
                                y: 0,
                                autoAlpha: 1,
                                display: "flex"
                            }, {
                                y: -30,
                                autoAlpha: 0,
                                display: "none"
                            }).add(function() {
                                t._voiceCheckCounter++, t._isReady = !0, t._startAnimationInProgress = !1, t.beforeStart && t.beforeStart()
                            }))
                        }
                    }, {
                        key: "animateFlow",
                        value: function() {
                            var t = .3222;
                            Tt.b.to(this.firstBg, t, {
                                x: "-=".concat(this._soundMagnitude / 8),
                                overwrite: !0
                            }), Tt.b.to(this.fronBg, t, {
                                x: "-=".concat(this._soundMagnitude / 8),
                                overwrite: !0
                            }), Tt.b.to(this.backBg, t, {
                                x: "-=".concat(this._soundMagnitude / 12),
                                overwrite: !0
                            }), Tt.b.to(this.skyLight, t + 1, {
                                x: "-=".concat(this._soundMagnitude / 12),
                                overwrite: !0
                            })
                        }
                    }, {
                        key: "onFinish",
                        value: function(t) {
                            var e = this;
                            window.cancelAnimationFrame(this.raf), this.tl.to(this.firstBg, 2.5, {
                                y: "100%",
                                overwrite: !0,
                                delay: 1,
                                ease: "Power2.easeIn"
                            }, 0).to(this.bgLight, 2.5, {
                                y: "100%",
                                overwrite: !0,
                                delay: 1,
                                ease: "Power2.easeIn"
                            }, 0).to(this.fronBg, 3, {
                                y: "100%",
                                overwrite: !0,
                                delay: 1,
                                ease: "Power2.easeIn"
                            }, 0).to(this.backBg, 3, {
                                y: "125%",
                                overwrite: !0,
                                delay: 1,
                                ease: "Power2.easeIn"
                            }, 0).to(this.sky, 11, {
                                y: t,
                                overwrite: !0,
                                delay: 1,
                                ease: "Power2.easeInOut"
                            }, 0).add(function() {
                                Tt.b.set(e.sky, {
                                    y: 0,
                                    top: 0,
                                    bottom: "initial"
                                })
                            }).add(function() {
                                return e._playFinalAnimation()
                            }, "-=2.4").fromTo(this.lights, 1, {
                                fill: "#1E2E38"
                            }, {
                                fill: "#ffffff"
                            }, 0).fromTo(this.radialLights, 1, {
                                opacity: 0
                            }, {
                                opacity: .5
                            }, 0)
                        }
                    }, {
                        key: "_playFinalAnimation",
                        value: function() {
                            Tt.b.set(this._finishTextElems, {
                                autoAlpha: 0
                            }), Tt.b.set(this._finishText, {
                                autoAlpha: 1
                            }), Tt.b.fromTo(this._finishTextElems, 1.5, {
                                autoAlpha: 0,
                                y: 60
                            }, {
                                stagger: .2,
                                autoAlpha: 1,
                                y: 0,
                                ease: Ct.customEase
                            })
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            Tt.b.set(this.fronBg, {
                                x: 0
                            }), Tt.b.set(this.firstBg, {
                                x: 0
                            }), Tt.b.set(this.backBg, {
                                x: 0
                            })
                        }
                    }]), t
                }(),
                It = n(363),
                Bt = n(373),
                qt = n(374),
                Lt = function(t) {
                    function e() {
                        var t, n;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        for (var i = arguments.length, o = Array(i), r = 0; r < i; r++) o[r] = arguments[r];
                        return (n = D(this, (t = W(e)).call.apply(t, [this].concat(o)))).updateSore = function(t) {
                            t && (n.score.textContent = t)
                        }, n.onSkip = function() {
                            n._page.startFlow(), n._noiseAnimationManager.activate(), B("event", "skip", {
                                event_category: "finish"
                            })
                        }, n.shareTwitter = function() {
                            var t = "Our planet needs alternative energy - alternative energy needs your voice. How many lights can you power? I've powered ".concat(n.userScore, "💡"),
                                e = document.URL;
                            B("event", "share", {
                                event_category: "twitter"
                            }), window.open("https://twitter.com/share?url=" + e + "&text=" + t + "%23thepowerofsound", "twitter-popup", "height=350,width=600")
                        }, n.shareFacebook = function() {
                            var t = "Our planet needs alternative energy - alternative energy needs your voice. How many lights can you power? I've powered ".concat(n.userScore, "!"),
                                e = document.URL;
                            B("event", "share", {
                                event_category: "facebook"
                            }), It.ui({
                                method: "share",
                                hashtag: "#thepowerofsound",
                                href: e,
                                quote: t
                            })
                        }, n
                    }
                    return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && U(t, e)
                        }(e, Pt.a),
                        function(t, e, n) {
                            e && F(t.prototype, e), n && F(t, n)
                        }(e, [{
                            key: "_setupSection",
                            value: function() {
                                var t = M(regeneratorRuntime.mark(function t(n) {
                                    var i = this;
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return H(W(e.prototype), "_setupSection", this).call(this, n), this.totalScore = null, this.totalSessions = null, this.userScore = 0, this.timeCounter = 30, this.ready = !1, this.isShowMessageInProgress = !1, this.starsTl = Tt.b.timeline({
                                                    immediateRender: !1
                                                }), this.progressTl = Tt.b.timeline(), this.tl = Tt.b.timeline(), this.flowMessageTL = Tt.b.timeline(), this.scoreWrap = this._page._root.querySelector(".top-bar-wrap"), this.score = this._page._root.querySelector("#score"), this.finalScore = this._el.querySelector(".final-score"), this.time = this._page._root.querySelector("#time"), this.progressWrap = this._page._root.querySelector(".progress-wrap"), this.stars = this._page._root.querySelectorAll(".star"), this.fronBg = this._page._root.querySelector(".second-bg"), this.windmills = this._page._root.querySelectorAll(".windmill"), this.lights = this._page._root.querySelectorAll(".light"), this.lightsLighten = this._page._root.querySelectorAll(".light-lighten"), this.radialLights = this._page._root.querySelectorAll(".radial-light"), this.mobileText = document.querySelector(".mobile-content"), this.mobileBg = document.querySelector(".mobile-bg-wrap"), this.startButton = document.querySelector("#start-button"), this.flowMessagesWrap = document.querySelector(".flow-messages"), this.flowMessage = document.querySelector(".flow-message"), this.skip = document.querySelector(".onboarding-skip"), this.shareContainer = document.querySelector(".shareContainer"), this.fbShareBtn = document.querySelector("#fb-share"), this.twitterShareBtn = document.querySelector("#twitter-share"), this.restartButton = document.querySelector(".restart-button"), this.restartButton.addEventListener("click", function() {
                                                    return i.restartFlow()
                                                }), this.skip.addEventListener("click", function() {
                                                    return i.onSkip()
                                                }), Tt.b.set(this.windmills, {
                                                    transformOrigin: "50% 50%"
                                                }), this._noiseAnimationManager = new jt({
                                                    onStart: function() {
                                                        var t = M(regeneratorRuntime.mark(function t() {
                                                            return regeneratorRuntime.wrap(function(t) {
                                                                for (;;) switch (t.prev = t.next) {
                                                                    case 0:
                                                                        i._page.startFlow().then(function() {
                                                                            Tt.b.fromTo(i.flowMessagesWrap, .6, {
                                                                                y: 40,
                                                                                opacity: 0,
                                                                                display: "none"
                                                                            }, {
                                                                                y: 0,
                                                                                opacity: 1,
                                                                                display: "flex"
                                                                            }), i.showScoreWrap()
                                                                        });
                                                                    case 1:
                                                                    case "end":
                                                                        return t.stop()
                                                                }
                                                            }, t)
                                                        }));
                                                        return function() {
                                                            return t.apply(this, arguments)
                                                        }
                                                    }(),
                                                    beforeStart: function() {
                                                        i.startProgressTimer()
                                                    },
                                                    onStep: function(t) {
                                                        i.windmills.forEach(function(e) {
                                                            i.tryToRotate(e, t)
                                                        }), i.lights.forEach(function(e) {
                                                            i.tryToBlink(e, t)
                                                        }), i.lightsLighten.forEach(function(e) {
                                                            i.tryToBlink(e, t, !0)
                                                        }), i.radialLights.forEach(function(e) {
                                                            i.tryToBlinkRadialLights(e, t)
                                                        })
                                                    }
                                                }), t.next = 38, this._noiseAnimationManager.setup();
                                            case 38:
                                                this.ready = !0, It.load().then(function() {
                                                    It.init({
                                                        appId: "260981288593689"
                                                    })
                                                }), Ct.hideElements([this.stars]);
                                            case 41:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, this)
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "restartFlow",
                            value: function() {
                                localStorage.setItem("restarted", "true"), window.location.reload(!0)
                            }
                        }, {
                            key: "showFlowMessage",
                            value: function() {
                                var t = this,
                                    e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : .8,
                                    n = 1 < arguments.length ? arguments[1] : void 0,
                                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 2;
                                this.isShowMessageInProgress || (this.isShowMessageInProgress = !0, this.flowMessage.textContent = n, this.flowMessageTL.fromTo(this.flowMessage, e, {
                                    y: 30,
                                    autoAlpha: 0,
                                    display: "none"
                                }, {
                                    y: 0,
                                    autoAlpha: 1,
                                    display: "flex"
                                }).fromTo(this.flowMessage, e, {
                                    y: 0,
                                    autoAlpha: 1,
                                    display: "flex"
                                }, {
                                    y: -30,
                                    autoAlpha: 0,
                                    display: "none",
                                    delay: i
                                }).add(function() {
                                    t.isShowMessageInProgress = !1
                                }))
                            }
                        }, {
                            key: "startProgressTimer",
                            value: function() {
                                var t = this;
                                B("event", "start", {
                                    event_category: "start"
                                }), this.interval = setInterval(function() {
                                    0 === t.timeCounter ? (clearInterval(t.interval), t._onAnimationFinish()) : (27 === t.timeCounter && t.showFlowMessage(.8, "علي صوتك لتزويد المزيد من المنازل بالطاقة", 2.5), 20 === t.timeCounter && t.showFlowMessage(.8, "كلما زاد عدد الأشخاص المشاركين ، زادت الطاقة التي تصنعها", 2.5), --t.timeCounter, t.updateTime())
                                }, 1e3)
                            }
                        }, {
                            key: "updateTime",
                            value: function() {
                                var t;
                                t = 10 > this.timeCounter ? "0".concat(this.timeCounter) : this.timeCounter, this.time.textContent = "0:".concat(t)
                            }
                        }, {
                            key: "showScoreWrap",
                            value: function() {
                                Tt.b.to(this.scoreWrap, .8, {
                                    autoAlpha: 1,
                                    display: "flex"
                                })
                            }
                        }, {
                            key: "hideScoreWrap",
                            value: function() {
                                Tt.b.to(this.scoreWrap, .8, {
                                    autoAlpha: 0,
                                    display: "none"
                                })
                            }
                        }, {
                            key: "_onAnimationFinish",
                            value: function() {
                                var t = M(regeneratorRuntime.mark(function t() {
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (0 !== this.userScore) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                this.finalScore.textContent = this.userScore, B("event", "finish", {
                                                    event_category: "finish",
                                                    value: this.userScore
                                                }), this._showFinalAnimation();
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, this)
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "_showFinalAnimation",
                            value: function() {
                                this._page.toStartBg(), this._noiseAnimationManager.onFinish(this._page.startPosition), this._page.volume = .75;
                                var t = this._page.muted ? 0 : this._page.volume;
                                q({
                                    sound: this._page.wind,
                                    vol: t,
                                    timing: 2
                                }), q({
                                    sound: this._page.guitar,
                                    vol: t,
                                    timing: 2
                                }), this.hideScoreWrap()
                            }
                        }, {
                            key: "tryToRotate",
                            value: function(t, e) {
                                this.isElementInViewport(t) ? Tt.b.to(t, 2, {
                                    rotation: "+=".concat(e),
                                    ease: "Linear.easeNone"
                                }) : Tt.b.killTweensOf(t)
                            }
                        }, {
                            key: "tryToBlink",
                            value: function(t, e) {
                                var n = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
                                    i = t.classList.contains("activated"),
                                    o = n ? "#E5E5E5" : "white",
                                    r = n ? "#626d7a" : "#1E2E38";
                                this.isElementInViewport(t) && e > 190 ? (!i && (t.classList.add("activated"), ++this.userScore, this.updateSore(this.userScore)), Tt.b.fromTo(t, .04, {
                                    fill: o
                                }, {
                                    fill: r,
                                    repeat: 9
                                })) : this.isElementInViewport(t) && e < 190 && Tt.b.fromTo(t, .04, {
                                    fill: r
                                }, {
                                    fill: o,
                                    repeat: 9
                                })
                            }
                        }, {
                            key: "tryToBlinkRadialLights",
                            value: function(t, e) {
                                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .5;
                                this.isElementInViewport(t) && e > 190 ? Tt.b.fromTo(t, .04, {
                                    autoAlpha: n
                                }, {
                                    autoAlpha: 0,
                                    repeat: 9
                                }) : this.isElementInViewport(t) && e < 190 && Tt.b.fromTo(t, .04, {
                                    autoAlpha: 0
                                }, {
                                    autoAlpha: n,
                                    repeat: 9
                                })
                            }
                        }, {
                            key: "isElementInViewport",
                            value: function(t) {
                                var e = t.getBoundingClientRect();
                                return 0 <= e.top + e.height && 0 <= e.left + e.width && e.bottom <= (window.innerHeight + e.height || document.documentElement.clientHeight + e.height) && e.right <= (window.innerWidth + e.width || document.documentElement.clientWidth + e.width + 100)
                            }
                        }, {
                            key: "resize",
                            value: function(t, n) {
                                H(W(e.prototype), "resize", this).call(this, t, n), this._width = t, this._height = n, this._rem = At.a.Current.rem, 1024 >= t && (Tt.b.to(this.mobileText, .3, {
                                    opacity: 1
                                }), Tt.b.to(this.mobileBg, .3, {
                                    opacity: 1
                                })), this._noiseAnimationManager && (this._noiseAnimationManager.limit = -this.fronBg.querySelector("svg").clientWidth + window.innerWidth + 150)
                            }
                        }, {
                            key: "_activate",
                            value: function() {
                                var t = this;
                                this.ready && (this.onboarded = localStorage.getItem("onboarded"), this.restarted = localStorage.getItem("restarted"), "true" === this.restarted && (this.onSkip(), localStorage.setItem("restarted", "false")), "true" === this.onboarded && Tt.b.to(this.skip, {
                                    duration: .3666,
                                    autoAlpha: 1,
                                    display: "flex"
                                }), this.fbShareBtn.addEventListener("click", this.shareFacebook), this.twitterShareBtn.addEventListener("click", this.shareTwitter), this.startButton.addEventListener("click", function() {
                                    t._noiseAnimationManager.activate()
                                }), Tt.b.to(this._page._root, .6, {
                                    opacity: 1
                                }), 1024 >= this._width && (Tt.b.to(this.mobileText, .3, {
                                    opacity: 1
                                }), Tt.b.to(this.mobileBg, .3, {
                                    opacity: 1
                                })), q({
                                    sound: this._page.wind,
                                    vol: 0,
                                    timing: 0
                                }), q({
                                    sound: this._page.guitar,
                                    vol: 0,
                                    timing: 0
                                }))
                            }
                        }, {
                            key: "_deactivate",
                            value: function(t, e) {
                                this.ready && this._hide(e)
                            }
                        }, {
                            key: "_show",
                            value: function() {
                                Tt.b.timeline({
                                    immediateRender: !1
                                })
                            }
                        }, {
                            key: "_hide",
                            value: function() {
                                Tt.b.timeline({
                                    immediateRender: !1
                                })
                            }
                        }]), e
                }(),
                Rt = function(t) {
                    function e(t) {
                        var n;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), (n = z(this, N(e).call(this, t)))._el = t.el, n._title = n._el.querySelector(".slide-title"), n._animElems = n._el.querySelectorAll(".anim-elem"), Ct.hideElements([n._el, n._animElems]), n.active = !1, n
                    }
                    return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && J(t, e)
                        }(e, bt),
                        function(t, e, n) {
                            e && V(t.prototype, e), n && V(t, n)
                        }(e, [{
                            key: "_activate",
                            value: function(t) {
                                var e = this;
                                return this.active ? Promise.resolve() : (this.active = !0, Ct.clearTweens([this._el, this._animElems]), new Promise(function(n) {
                                    Tt.b.timeline({
                                        immediateRender: !1,
                                        onComplete: function() {
                                            n()
                                        }
                                    }).set(e._el, {
                                        autoAlpha: 1,
                                        y: 0
                                    }).fromTo(e._animElems, .3666, {
                                        autoAlpha: 0
                                    }, {
                                        stagger: .0666,
                                        autoAlpha: 1,
                                        ease: "none"
                                    }, 0).fromTo(e._animElems, .8666, {
                                        y: t * e._offset
                                    }, {
                                        stagger: .0666 * t,
                                        y: 0,
                                        ease: Ct.customEase
                                    }, 0)
                                }))
                            }
                        }, {
                            key: "_deactivate",
                            value: function(t) {
                                var e = this;
                                return this.active ? (this.active = !1, Ct.clearTweens([this._el, this._animElems]), new Promise(function(n) {
                                    Tt.b.timeline({
                                        immediateRender: !1,
                                        onComplete: function() {
                                            n()
                                        }
                                    }).fromTo(e._el, .8666, {
                                        y: 0
                                    }, {
                                        y: -t * e._offset,
                                        ease: Ct.customEase
                                    }, 0).fromTo(e._animElems, .2666, {
                                        autoAlpha: 1
                                    }, {
                                        autoAlpha: 0,
                                        ease: "none"
                                    }, .4).set(e._el, {
                                        autoAlpha: 0
                                    })
                                })) : Promise.resolve()
                            }
                        }, {
                            key: "_offset",
                            get: function() {
                                return window.innerHeight / 2 + this._title.getBoundingClientRect().height / 1.8
                            }
                        }]), e
                }(),
                Mt = n(1),
                Ft = {
                    animateFromTo: function(t, e, n, i) {
                        for (var o = [], r = [], s = 0; s < n.colors.length && s < i.colors.length; ++s) {
                            var a = Y({}, n.colors[s]),
                                u = i.colors[s];
                            o.push(a), r.push(Tt.a.to(a, e, {
                                color: u.color,
                                pos: u.pos
                            }))
                        }
                        var c = {
                                directionDegrees: n.directionDegrees,
                                colors: o
                            },
                            l = new Mt.c({
                                onUpdate: X(t, c)
                            });
                        return l.add(Tt.a.to(c, e, {
                            directionDegrees: i.directionDegrees
                        }), 0), r.forEach(function(t) {
                            l.add(t, 0)
                        }), l
                    },
                    construct: function(t) {
                        for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                        return {
                            directionDegrees: t,
                            colors: n.map(function(t) {
                                return {
                                    color: t.c,
                                    pos: t.p
                                }
                            })
                        }
                    }
                },
                Dt = function(t) {
                    function e() {
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), it(this, rt(e).apply(this, arguments))
                    }
                    return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && st(t, e)
                        }(e, Et.a),
                        function(t, e, n) {
                            e && nt(t.prototype, e), n && nt(t, n)
                        }(e, [{
                            key: "_setup",
                            value: function() {
                                var t = et(regeneratorRuntime.mark(function t() {
                                    var n = this;
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return this._sectionTypes = [Lt], this.activity = {
                                                    sessions: null,
                                                    score: null
                                                }, this.defaultBg = Ft.construct(180, {
                                                    c: "#1A2537",
                                                    p: 0
                                                }, {
                                                    c: "#364051",
                                                    p: 1
                                                }), this.flowBg = Ft.construct(180, {
                                                    c: "#364051",
                                                    p: 0
                                                }, {
                                                    c: "#a1a6ad",
                                                    p: 1
                                                }), this.onboardingStepIndex = 0, this._inProgress = !1, this._scrolldownEnabled = !1, this._scrolldownTimer = null, this._soundBtnsTimer = null, ot(rt(e.prototype), "_setup", this).call(this), this.onboarding = this._root.querySelector(".onboarding"), this.tabItems = this._root.querySelectorAll(".onboarding .slide"), this._tabsLinks = this._root.querySelectorAll(".onboarding .link"), this._scrolldown = this._root.querySelector(".scrolldown"), this._soundToggle = this._root.querySelector(".sound-toggle"), this._soundTogglePath = this._soundToggle.querySelector(".sound-toggle-path"), this._soundToggleWave = this._soundToggle.querySelector(".sound-toggle-wave"), this._skip = document.querySelector(".onboarding-skip"), this._soundBtns = this._root.querySelector(".onboarding .sound-buttons"), this._soundOn = this._root.querySelector(".onboarding .sound-on"), this._soundOff = this._root.querySelector(".onboarding .sound-off"), this._background = document.querySelector("div.bg") || null, this._stage = this._root.querySelector(".stage"), this.tl = Tt.b.timeline(), this.tl2 = Tt.b.timeline(), this._scroll = new mt({
                                                    el: document.body,
                                                    callback: this._onScrollChangeSection.bind(this),
                                                    threshold: 5,
                                                    sensitivity: 70
                                                }), this.wind = new Ot.Howl({
                                                    src: [Bt],
                                                    autoplay: !1,
                                                    loop: !0,
                                                    preload: !1,
                                                    volume: 0
                                                }), this.guitar = new Ot.Howl({
                                                    src: [qt],
                                                    autoplay: !1,
                                                    loop: !0,
                                                    preload: !1,
                                                    volume: 0
                                                }), this._soundOn.addEventListener("click", function() {
                                                    Tt.b.to(n._soundToggle, {
                                                        duration: .3,
                                                        autoAlpha: 1,
                                                        onComplete: function() {
                                                            return n.toggleSound()
                                                        }
                                                    }), n._scroll.activate(), n._showScrolldownAnimation(), n.tabs && n.tabs.setActiveIndex(1)
                                                }), this._soundOff.addEventListener("click", function() {
                                                    Tt.b.to(n._soundToggle, {
                                                        duration: .3,
                                                        autoAlpha: 1
                                                    }), n._scroll.activate(), n._showScrolldownAnimation(), n.tabs && n.tabs.setActiveIndex(1)
                                                }), this._soundToggle.addEventListener("click", function() {
                                                    return n.toggleSound()
                                                }), this.muted = !0, this.soundToggleInProccess = !1, this.volume = .75, Tt.b.set(this._soundToggleWave, {
                                                    autoAlpha: 0
                                                }), this._showSoundBtns(2500), this.defindCurrentBg(), t.next = 39, this._initAsync();
                                            case 39:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, this)
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "defindCurrentBg",
                            value: function() {
                                if (this._background) {
                                    var t = JSON.parse(this._background.dataset.bg);
                                    this.currentGradient = Ft.construct.apply(Ft, [t.deg].concat($(t.colors)))
                                }
                            }
                        }, {
                            key: "toFlowBg",
                            value: function() {
                                Ft.animateFromTo(this._background, 1, this.defaultBg, this.flowBg)
                            }
                        }, {
                            key: "toStartBg",
                            value: function() {
                                Ft.animateFromTo(this._background, 1, this.flowBg, this.defaultBg)
                            }
                        }, {
                            key: "startAnimationPlay",
                            value: function(t) {
                                Ft.animateFromTo(this._background, 1, this.defaultBg, t)
                            }
                        }, {
                            key: "toggleSound",
                            value: function() {
                                var t = this;
                                if (!this.soundToggleInProccess) {
                                    this.muted = !this.muted;
                                    var e = this.muted ? 0 : this.volume;
                                    Tt.b.timeline({
                                        onStart: function() {
                                            t.soundToggleInProccess = !0
                                        },
                                        onComplete: function() {
                                            t.muted ? (Tt.b.set(t._soundToggleWave, {
                                                autoAlpha: 0
                                            }), Tt.b.killTweensOf([t._soundToggleWave, t._soundTogglePath])) : Tt.b.fromTo([t._soundToggleWave, t._soundTogglePath], .4, {
                                                autoAlpha: 0
                                            }, {
                                                autoAlpha: 1,
                                                stagger: .2,
                                                ease: Ct.customEase,
                                                repeat: -1,
                                                repeatDelay: .5
                                            }), t.soundToggleInProccess = !1
                                        }
                                    }).to(this._soundToggleWave, .2, {
                                        autoAlpha: this.muted ? 0 : 1,
                                        ease: Ct.customEase
                                    }).to(this._soundTogglePath, .5, {
                                        attr: {
                                            d: this.muted ? "M17 10L13 6M13 10L17 6" : "M16 5C17 7.5 17 8.5 16 11"
                                        },
                                        autoAlpha: 1,
                                        ease: Ct.customEase
                                    }, .0666), q({
                                        sound: this.wind,
                                        vol: e,
                                        timing: .5
                                    }), q({
                                        sound: this.guitar,
                                        vol: this._inProgress ? 0 : e,
                                        timing: .5
                                    })
                                }
                            }
                        }, {
                            key: "_showSoundBtns",
                            value: function(t) {
                                var e = this,
                                    n = this._scrolldown.querySelector(".scrolldown-caption"),
                                    i = Tt.b.timeline({
                                        immediateRender: !1
                                    });
                                this._soundBtnsTimer = setTimeout(function() {
                                    i.to(n, .333, {
                                        y: 20,
                                        autoAlpha: 0,
                                        ease: Ct.customEase2
                                    }).fromTo(e._soundBtns, .333, {
                                        y: -20,
                                        autoAlpha: 0
                                    }, {
                                        y: 0,
                                        autoAlpha: 1,
                                        ease: Ct.customEase
                                    }, .3)
                                }, t)
                            }
                        }, {
                            key: "_showScrolldownAnimation",
                            value: function(t) {
                                var e = this,
                                    n = this._scrolldown.querySelector(".scrolldown-caption"),
                                    i = this._scrolldown.querySelector(".scrolldown-icon"),
                                    o = this._scrolldown.querySelector(".scrolldown-text"),
                                    r = this._scrolldown.querySelector(".scrolldown-icon-arrow-top"),
                                    s = this._scrolldown.querySelector(".scrolldown-icon-arrow-bot");
                                this._scrolldownEnabled = !0;
                                var a = Tt.b.timeline({
                                        repeat: -1,
                                        paused: !0,
                                        immediateRender: !1
                                    }).to(r, .6, {
                                        autoAlpha: .5,
                                        y: -11
                                    }, 0).to(s, .5, {
                                        autoAlpha: .5,
                                        y: -9
                                    }, .0666).to(r, .6, {
                                        autoAlpha: 1,
                                        y: 0
                                    }, .6).to(s, .5, {
                                        autoAlpha: 1,
                                        y: 0
                                    }, .6666),
                                    u = Tt.b.timeline({
                                        onComplete: function() {
                                            a.play()
                                        }
                                    });
                                this._scrolldownTimer = setTimeout(function() {
                                    u.to([n, e._soundBtns], .333, {
                                        y: 20,
                                        autoAlpha: 0,
                                        ease: Ct.customEase2
                                    }).fromTo(o, .333, {
                                        y: -20,
                                        autoAlpha: 0
                                    }, {
                                        y: 0,
                                        autoAlpha: 1,
                                        ease: Ct.customEase
                                    }, .3).fromTo(i, .333, {
                                        y: -20,
                                        autoAlpha: 0
                                    }, {
                                        y: 0,
                                        autoAlpha: 1,
                                        ease: Ct.customEase,
                                        onComplete: function() {
                                            return clearTimeout(e._scrolldownTimer)
                                        }
                                    }, .3666)
                                }, t || 0)
                            }
                        }, {
                            key: "moveStage",
                            value: function(t) {
                                -1 === t ? --this.onboardingStepIndex : 1 == t && ++this.onboardingStepIndex;
                                var e = this.startPosition - this._step * this.onboardingStepIndex,
                                    n = this.tabs ? 1.2 : .01;
                                t ? Tt.b.to(this._stage, {
                                    duration: n,
                                    y: e,
                                    overwrite: !0,
                                    ease: Ct.customEase
                                }) : Tt.b.set(this._stage, {
                                    y: e
                                })
                            }
                        }, {
                            key: "startFlow",
                            value: function() {
                                var t = this;
                                return this.volume = .15, new Promise(function(e) {
                                    t.toFlowBg(), t.tl2.to(t.onboarding, .7, {
                                        autoAlpha: 0,
                                        display: "none"
                                    }).to(t._stage, 1.7, {
                                        y: 0
                                    }, "-= 0.3").add(function() {
                                        t._inProgress = !0, t.tabs.deactivate(), q({
                                            sound: t.wind,
                                            vol: t.volume,
                                            timing: 2
                                        }), q({
                                            sound: t.guitar,
                                            vol: 0,
                                            timing: 2
                                        }), e()
                                    })
                                })
                            }
                        }, {
                            key: "_setupOnboardingTabs",
                            value: function() {
                                var t = this;
                                this.tabs || (this._onboardingTabs = this._initTabItems(), this.tabs = new St({
                                    tabItems: this._onboardingTabs,
                                    links: this._tabsLinks,
                                    syncActivate: !0,
                                    onChanging: function() {
                                        t.tabs.currentIndex + 1 === t.tabs._tabs.length ? Tt.b.to(t._scrolldown, {
                                            duration: .3666,
                                            autoAlpha: 0
                                        }) : Tt.b.to(t._scrolldown, {
                                            duration: .3666,
                                            autoAlpha: 1
                                        }), 0 < t.tabs.currentIndex ? Tt.b.to(t._skip, {
                                            duration: .3666,
                                            autoAlpha: 1
                                        }) : Tt.b.to(t._skip, {
                                            duration: .3666,
                                            autoAlpha: 0
                                        })
                                    },
                                    onWillChange: function(e, n, i) {
                                        e && t.moveStage(i)
                                    },
                                    onChanged: function() {}
                                }), this.tabs.setActiveIndex(0))
                            }
                        }, {
                            key: "_initTabItems",
                            value: function() {
                                return $(this.tabItems).map(function(t) {
                                    return new Rt({
                                        el: t
                                    })
                                })
                            }
                        }, {
                            key: "_initAsync",
                            value: function() {
                                var t = et(regeneratorRuntime.mark(function t() {
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, this.getScoreAsync();
                                            case 2:
                                                return t.next = 4, this.createSessionAsync();
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, this)
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "_onScrollChangeSection",
                            value: function(t) {
                                this._inProgress || (this._wheelDirection = t, -1 === t ? this.tabs.next(!1) : this.tabs.prev(!1))
                            }
                        }, {
                            key: "createSessionAsync",
                            value: function() {
                                var t = et(regeneratorRuntime.mark(function t() {
                                    var e, n;
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (e = this.activity.sessions) {
                                                    t.next = 3;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 3:
                                                return n = e + 1, t.prev = 4, t.next = 7, this.db.collection("activity").doc("sessions").set({
                                                    sessions: n
                                                });
                                            case 7:
                                                this.activity.sessions = n, t.next = 13;
                                                break;
                                            case 10:
                                                t.prev = 10, t.t0 = t.catch(4), ft.b.error("Error adding document: ", t.t0);
                                            case 13:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, this, [
                                        [4, 10]
                                    ])
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "createScoreRecordAsync",
                            value: function() {
                                var t = et(regeneratorRuntime.mark(function t(e) {
                                    var n;
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (e) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                return n = this.activity.score + e, t.prev = 3, t.next = 6, this.db.collection("activity").doc("score").set({
                                                    score: n
                                                });
                                            case 6:
                                                t.next = 11;
                                                break;
                                            case 8:
                                                t.prev = 8, t.t0 = t.catch(3), ft.b.error("Error adding document: ", t.t0);
                                            case 11:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, this, [
                                        [3, 8]
                                    ])
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getScoreAsync",
                            value: function() {
                                var t = et(regeneratorRuntime.mark(function t() {
                                    var e, n;
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, this.db.collection("activity").doc("score").get();
                                            case 3:
                                                return e = t.sent, t.next = 6, this.db.collection("activity").doc("sessions").get();
                                            case 6:
                                                return n = t.sent, this.activity = {
                                                    sessions: n.data().sessions,
                                                    score: e.data().score
                                                }, t.abrupt("return", this.activity);
                                            case 11:
                                                t.prev = 11, t.t0 = t.catch(0), ft.b.error("Error adding document: ", t.t0);
                                            case 14:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, this, [
                                        [0, 11]
                                    ])
                                }));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "resize",
                            value: function(t, n) {
                                ot(rt(e.prototype), "resize", this).call(this, t, n), this._width = t, this._height = n, this._rem = At.a.Current.rem, this.startPosition = this._root.querySelector(".sky .stars").getBoundingClientRect().height - this._height, this._step = this.startPosition / 5, this._inProgress || this.moveStage(), this._setupOnboardingTabs()
                            }
                        }, {
                            key: "currentBg",
                            get: function() {
                                return this.currentGradient
                            }
                        }, {
                            key: "sectionTypes",
                            get: function() {
                                return this._sectionTypes
                            }
                        }]), e
                }();
            (function(t) {
                function e() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), ct(this, lt(e).apply(this, arguments))
                }(function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && ht(t, e)
                })(e, Et.a),
                function(t, e, n) {
                    e && ut(t.prototype, e), n && ut(t, n)
                }(e, [{
                    key: "_setup",
                    value: function() {
                        this._sectionTypes = [Pt.a]
                    }
                }, {
                    key: "sectionTypes",
                    get: function() {
                        return this._sectionTypes
                    }
                }])
            })(), e.default = {
                homePage: Dt
            }
        }
    }
]);