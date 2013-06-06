/* JS */gapi.loaded_0(function(_) {
    var window = this, pe, oa;
    _.m = function(e) {
        throw e;
    }, _.p = void 0, _.r = !0, _.s = null, _.u = !1, _.aa = function() {
        return function(e) {
            return e;
        };
    }, _.x = function() {
        return function() {};
    }, _.ba = function(e) {
        return function(t) {
            this[e] = t;
        };
    }, _.y = function(e) {
        return function() {
            return this[e];
        };
    }, _.ca = function(e) {
        return function() {
            return e;
        };
    }, _.C = function(e, t, n) {
        e = e.split("."), n = n || _.D, e[0] in n || !n.execScript || n.execScript("var " + e[0]);
        for (var r; e.length && (r = e.shift()); ) e.length || t === _.p ? n = n[r] ? n[r] : n[r] = {} : n[r] = t;
    }, _.da = function(e) {
        var t = typeof e;
        if ("object" == t) {
            if (!e) return "null";
            if (e instanceof Array) return "array";
            if (e instanceof Object) return t;
            var n = Object.prototype.toString.call(e);
            if ("[object Window]" == n) return "object";
            if ("[object Array]" == n || "number" == typeof e.length && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == n || "undefined" != typeof e.call && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function";
        } else if ("function" == t && "undefined" == typeof e.call) return "object";
        return t;
    }, _.kf = function(e) {
        return e !== _.p;
    }, _.ea = function(e) {
        return "array" == (0, _.da)(e);
    }, _.re = function(e) {
        var t = (0, _.da)(e);
        return "array" == t || "object" == t && "number" == typeof e.length;
    }, _.fa = function(e) {
        return "string" == typeof e;
    }, _.Ka = function(e) {
        return "function" == (0, _.da)(e);
    }, _.Vg = function(e) {
        var t = typeof e;
        return "object" == t && e != _.s || "function" == t;
    }, _.oe = function(e) {
        return e[oa] || (e[oa] = ++pe);
    };
    var ia = function(e, t, n) {
        return e.call.apply(e.bind, arguments);
    }, la = function(e, t, n) {
        e || (0, _.m)(Error());
        if (2 < arguments.length) {
            var r = Array.prototype.slice.call(arguments, 2);
            return function() {
                var n = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(n, r), e.apply(t, n);
            };
        }
        return function() {
            return e.apply(t, arguments);
        };
    };
    _.H = function(e, t, n) {
        return _.H = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : la, _.H.apply(_.s, arguments);
    }, _.ma = function(e, t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function() {
            var t = Array.prototype.slice.call(arguments);
            return t.unshift.apply(t, n), e.apply(this, t);
        };
    }, _.J = function(e, t) {
        function n() {}
        n.prototype = t.prototype, e.T = t.prototype, e.prototype = new n, e.prototype.constructor = e;
    };
    var _DumpException = function(e) {
        (0, _.m)(e);
    };
    _.na = _.na || {}, _.D = this, oa = "closure_uid_" + (1e9 * Math.random() >>> 0), pe = 0, _.pa = Date.now || function() {
        return +(new Date);
    }, Function.prototype.bind = Function.prototype.bind || function(e, t) {
        if (1 < arguments.length) {
            var n = Array.prototype.slice.call(arguments, 1);
            return n.unshift(this, e), _.H.apply(_.s, n);
        }
        return (0, _.H)(this, e);
    }, _.Kh = window.gapi || {}, _.ra = window.gadgets || {}, _.L = window.osapi = window.osapi || {}, _.google = window.google || {}, window.___jsl = window.___jsl || {}, (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "explicit"
        },
        appsapi: {
            plus_one_service: "/plus/v1"
        },
        client: {
            jsonpOverride: _.u
        },
        poshare: {
            hangoutContactPickerServer: "https://plus.google.com"
        },
        gappsutil: {
            required_scopes: [ "https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended" ],
            display_on_page_ready: _.u
        },
        appsutil: {
            required_scopes: [ "https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended" ],
            display_on_page_ready: _.u
        },
        "oauth-flow": {
            authUrl: "https://accounts.google.com/o/oauth2/auth",
            proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
            redirectUri: "postmessage"
        },
        iframes: {
            sharebox: {
                params: {
                    json: "&"
                },
                url: ":socialhost:/:session_prefix:_/sharebox/dialog"
            },
            plus: {
                url: ":socialhost:/u/:session_index:/_/pages/badge"
            },
            ":socialhost:": "https://plusone.google.com",
            card: {
                params: {
                    s: "#",
                    userid: "&"
                },
                url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
            },
            ":signuphost:": "https://plus.google.com",
            plusone: {
                url: ":socialhost:/:session_prefix:_/+1/fastbutton"
            },
            plus_share: {
                url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true"
            },
            plus_circle: {
                url: ":socialhost:/:session_prefix:_/widget/plus/circle"
            },
            configurator: {
                url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator"
            },
            appcirclepicker: {
                url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
            },
            ":source:": "1p"
        },
        poclient: {
            update_session: "google.updateSessionCallback"
        },
        "googleapis.config": {
            methods: {
                "chili.people.list": _.r,
                "pos.plusones.list": _.r,
                "pos.plusones.get": _.r,
                "chili.people.get": _.r,
                "pos.plusones.insert": _.r,
                "chili.activities.list": _.r,
                "pos.plusones.delete": _.r,
                "chili.activities.get": _.r,
                "chili.activities.search": _.r,
                "pos.plusones.getSignupState": _.r
            },
            requestCache: {
                enabled: _.r
            },
            versions: {
                chili: "v1",
                pos: "v1"
            },
            rpc: "/rpc",
            root: "https://www.googleapis.com",
            "root-1p": "https://clients6.google.com",
            sessionCache: {
                enabled: _.r
            },
            transport: {
                isProxyShared: _.r
            },
            xd3: "/static/proxy.html",
            developerKey: "AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ",
            auth: {
                useInterimAuth: _.u
            }
        }
    }), window.___jsl = window.___jsl || {}, (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "onload"
        },
        iframes: {
            ":source:": "3p"
        }
    }), _.N = function(e, t, n) {
        return e[t] = e[t] || n;
    }, _.Oa = function(e) {
        return "function" == typeof e;
    }, _.gb = function(e) {
        return String(e).replace(hb, "&amp;").replace(ib, "&lt;").replace(jb, "&gt;").replace(kb, "&quot;").replace(lb, "&#39;");
    }, _.O = function() {
        var e;
        if ((e = Object.create) && _.ta.test(e)) e = e(_.s); else {
            e = {};
            for (var t in e) e[t] = _.p;
        }
        return e;
    }, _.Qa = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, _.Ra = function(e, t) {
        e = e || {};
        for (var n in e) (0, _.Qa)(e, n) && (t[n] = e[n]);
    }, _.fb = function(e, t) {
        e || (0, _.m)(Error(t || ""));
    }, _.Ua = function(e, t, n) {
        var r = RegExp("([#].*&|[#])" + t + "=([^&#]*)", "g");
        t = RegExp("([?#].*&|[?#])" + t + "=([^&#]*)", "g");
        if (e = e && (r.exec(e) || t.exec(e))) try {
            n = (0, window.decodeURIComponent)(e[2]);
        } catch (i) {}
        return n;
    }, _.bb = function(e) {
        e = e.match(cb);
        var t = (0, _.O)();
        return t.yc = e[1], t.mb = e[3] ? [ e[3] ] : [], t.Vf = e[5] ? [ e[5] ] : [], t;
    }, _.Za = function(e) {
        e = e ? e.split("&") : [];
        for (var t = [], n = 0; n < e.length; n++) {
            var r = e[n].split("=", 2);
            t.push([ (0, window.decodeURIComponent)(r[0]), (0, window.decodeURIComponent)(r[1]) ]);
        }
        return t;
    }, _.ab = function(e) {
        return e.yc + (0 < e.mb.length ? "?" + e.mb.join("&") : "") + (0 < e.Vf.length ? "#" + e.Vf.join("&") : "");
    };
    var $a = function(e, t) {
        var n = [];
        if (e) for (var r in e) if ((0, _.Qa)(e, r) && e[r] != _.s) {
            var i = t ? t(e[r]) : e[r];
            n.push((0, window.encodeURIComponent)(r) + "=" + (0, window.encodeURIComponent)(i));
        }
        return n;
    };
    _.db = function(e, t, n, r) {
        return e = (0, _.bb)(e), e.mb.push.apply(e.mb, $a(t, r)), e.Vf.push.apply(e.Vf, $a(n, r)), (0, _.ab)(e);
    }, _.ua = function(e, t) {
        var n = "";
        2e3 < t.length && (n = t.substring(2e3), t = t.substring(0, 2e3));
        var r = e.createElement("div"), i = e.createElement("a");
        return i.href = t, r.appendChild(i), r.innerHTML = r.innerHTML, t = String(r.firstChild.href), r.parentNode && r.parentNode.removeChild(r), t + n;
    }, _.Fb = function(e) {
        return aB.test(e);
    }, _.Va = function(e, t, n) {
        Sa(e, t, n, "add", "at");
    }, _.Hb = function(e, t, n) {
        Sa(e, t, n, "remove", "de");
    };
    var Sa = function(e, t, n, r, i) {
        e[r + "EventListener"] ? e[r + "EventListener"](t, n, _.u) : e[i + "tachEvent"] && e[i + "tachEvent"]("on" + t, n);
    };
    _.eb = function(e) {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
    }, _.Wb = function(e) {
        return _.wa.dpo ? _.wa.h : (0, _.Ua)(e, "jsh", _.wa.h);
    }, _.Yb = function(e) {
        return (0, _.Ua)(e, "_bsh", _.wa.bsh);
    }, _.va = function() {
        return (0, _.N)(_.wa, "WI", (0, _.O)());
    }, _.Wc = function() {
        return _.wa.ucs;
    }, _.xa = function() {
        return _.wa.ssfn;
    }, _.wc = function() {
        return _.wa.onl;
    }, _.Ec = function(e) {
        _.wa.onl = e;
    };
    var ya = function(e) {
        var t = window.___jsl = window.___jsl || {};
        return t[e] = t[e] || [], t[e];
    }, za = function(e) {
        var t = window.___jsl = window.___jsl || {};
        return t.cfg = !e && t.cfg || {}, t.cfg;
    }, Aa = function(e) {
        return "object" == typeof e && /\[native code\]/.test(e.push);
    }, Ba = function(e, t) {
        if (t) for (var n in t) t.hasOwnProperty(n) && (e[n] && t[n] && "object" == typeof e[n] && "object" == typeof t[n] && !Aa(e[n]) && !Aa(t[n]) ? Ba(e[n], t[n]) : t[n] && "object" == typeof t[n] ? (e[n] = Aa(t[n]) ? [] : {}, Ba(e[n], t[n])) : e[n] = t[n]);
    }, Da = function(e) {
        if (e && !/^\s+$/.test(e)) {
            for (; 0 == e.charCodeAt(e.length - 1); ) e = e.substring(0, e.length - 1);
            var t;
            try {
                t = window.JSON.parse(e);
            } catch (n) {}
            if ("object" == typeof t) return t;
            try {
                t = (new Function("return (" + e + "\n)"))();
            } catch (r) {}
            if ("object" == typeof t) return t;
            try {
                t = (new Function("return ({" + e + "\n})"))();
            } catch (i) {}
            return "object" == typeof t ? t : {};
        }
    }, Ea = function(e) {
        za(_.r);
        var t = window.___gcfg, n = ya("cu");
        if (t && t !== window.___gu) {
            var r = {};
            Ba(r, t), n.push(r), window.___gu = t;
        }
        var t = ya("cu"), i = window.document.scripts || window.document.getElementsByTagName("script") || [], r = [], s = [];
        s.push.apply(s, ya("us"));
        for (var o = 0; o < i.length; ++o) for (var u = i[o], a = 0; a < s.length; ++a) u.src && 0 == u.src.indexOf(s[a]) && r.push(u);
        0 == r.length && 0 < i.length && i[i.length - 1].src && r.push(i[i.length - 1]);
        for (i = 0; i < r.length; ++i) r[i].getAttribute("gapi_processed") || (r[i].setAttribute("gapi_processed", _.r), (s = r[i]) ? (o = s.nodeType, s = 3 == o || 4 == o ? s.nodeValue : s.textContent || s.innerText || s.innerHTML || "") : s = _.p, (s = Da(s)) && t.push(s));
        e && (r = {}, Ba(r, e), n.push(r)), r = ya("cd"), e = 0;
        for (t = r.length; e < t; ++e) Ba(za(), r[e]);
        r = ya("ci"), e = 0;
        for (t = r.length; e < t; ++e) Ba(za(), r[e]);
        e = 0;
        for (t = n.length; e < t; ++e) Ba(za(), n[e]);
    };
    _.P = function(e, t) {
        if (!e) return za();
        for (var n = e.split("/"), r = za(), i = 0, s = n.length; r && "object" == typeof r && i < s; ++i) r = r[n[i]];
        return i === n.length && r !== _.p ? r : t;
    }, _.Fa = function(e, t) {
        var n = e;
        if ("string" == typeof e) {
            for (var r = n = {}, i = e.split("/"), s = 0, o = i.length; s < o - 1; ++s) var u = {}, r = r[i[s]] = u;
            r[i[s]] = t;
        }
        Ea(n);
    };
    var Ga = function() {
        var e = window.__GOOGLEAPIS;
        e && (e.googleapis && !e["googleapis.config"] && (e["googleapis.config"] = e.googleapis), (0, _.N)(_.wa, "ci", []).push(e), window.__GOOGLEAPIS = _.p);
    };
    _.Q = function(e, t) {
        t = "function" == typeof _.Ha && (0, _.Ha)(e, t) || t, (0, _.C)(e, t, _.p);
    };
    var lb, kb, jb, ib, hb;
    _.Ia = window, _.Ja = window.document, _.sb = _.Ia.location, _.ta = /\[native code\]/, hb = /&/g, ib = /</g, jb = />/g, kb = /"/g, lb = /'/g, _.Yi = (0, _.N)(_.Ia, "gapi", {});
    var cb = /^([^?#]*)(\?([^#]*))?(\#(.*))?$/, aB = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    _.wa = (0, _.N)(_.Ia, "___jsl", (0, _.O)()), (0, _.N)(_.wa, "I", 0), (0, _.N)(_.wa, "hel", 10), Ga && Ga(), Ea(), (0, _.Q)("gapi.config.get", _.P), (0, _.Q)("gapi.config.update", _.Fa), _.jd = function(e) {
        return !!e && "object" == typeof e && _.ta.test(e.push);
    }, _.Lc = function(e, t, n) {
        if (e) {
            (0, _.fb)((0, _.jd)(e), "arrayForEach was called with a non array value");
            for (var r = 0; r < e.length; r++) t.call(n, e[r], r);
        }
    }, _.DC = function(e, t, n) {
        if (e) if ((0, _.jd)(e)) (0, _.Lc)(e, t, n); else {
            (0, _.fb)("object" == typeof e, "objectForEach was called with a non object value"), n = n || e;
            for (var r in e) (0, _.Qa)(e, r) && e[r] !== _.p && t.call(n, e[r], r);
        }
    };
    var Ed = function(e) {
        e = e.sort();
        for (var t = [], n = _.p, r = 0; r < e.length; r++) {
            var i = e[r];
            i != n && t.push(i), n = i;
        }
        return t;
    }, Qe = function() {
        var e = [], t = _.wa.H;
        return t && (0, _.DC)(t, function(t) {
            e.push.apply(e, t.L);
        }), Ed(e);
    };
    _.wd = function(e) {
        if (_.ta.test(Object.keys)) return Object.keys(e);
        var t = [], n;
        for (n in e) (0, _.Qa)(e, n) && t.push(n);
        return t;
    };
    var La = function(e) {
        if (Re === _.p) {
            var t = (0, _.P)("report") || {}, n = t.rate;
            if (Re = "number" == typeof n && n >= Math.random()) fj = t.timeout || 1e3, Bj = t.host || "https://plus.google.com", zm = t.path || "/_/widget/report", vn = t.apis || [];
        }
        if (!Re) return _.u;
        if (vn) for (t = 0; t < vn.length; t++) if (RegExp("^" + vn[t] + "$").test(e)) return _.r;
        return _.u;
    }, Ma = function(e) {
        delete Na[e];
    }, wn = function() {
        xn && (_.Ia.clearTimeout(xn), xn = 0), xn = _.Ia.setTimeout(function() {
            var e;
            e = window.document.location.href;
            var t = (0, _.wd)(An).join(":");
            e = [ Bj, zm, "?api=", (0, window.encodeURIComponent)(t), "&url=", (0, window.encodeURIComponent)(e), "&loaded=", (0, window.encodeURIComponent)(Qe().join(":")) ].join(""), An = (0, _.O)();
            var t = new window.Image, n = Pa++;
            Na[n] = t, t.onload = t.onerror = (0, _.ma)(Ma, n), t.src = e, xn = 0;
        }, fj);
    };
    _.Ha = function(e, t) {
        var n = t;
        return (0, _.Oa)(t) && La(e) && (n = function(n) {
            return Bn[e] || (An[e] = _.r, Bn[e] = _.r, wn()), t.apply(this, arguments);
        }), n;
    };
    var Re, Bj, zm, fj, xn, vn, Na = {}, Pa = 0, Bn = (0, _.O)(), An = (0, _.O)();
    _.R = _.R || {}, _.R = _.R || {}, function() {
        function e(e, t) {
            return String.fromCharCode(t);
        }
        var t = {
            0: _.u,
            10: _.r,
            13: _.r,
            34: _.r,
            39: _.r,
            60: _.r,
            62: _.r,
            92: _.r,
            8232: _.r,
            8233: _.r,
            65282: _.r,
            65287: _.r,
            65308: _.r,
            65310: _.r,
            65340: _.r
        };
        _.R.escape = function(e, t) {
            if (e) {
                if ("string" == typeof e) return _.R.Qf(e);
                if ("array" == typeof e) for (var n = 0, r = e.length; n < r; ++n) e[n] = _.R.escape(e[n]); else if ("object" == typeof e && t) {
                    n = {};
                    for (r in e) e.hasOwnProperty(r) && (n[_.R.Qf(r)] = _.R.escape(e[r], _.r));
                    return n;
                }
            }
            return e;
        }, _.R.Qf = function(e) {
            if (!e) return e;
            for (var n = [], r, i, s = 0, o = e.length; s < o; ++s) r = e.charCodeAt(s), i = t[r], i === _.r ? n.push("&#", r, ";") : i !== _.u && n.push(e.charAt(s));
            return n.join("");
        }, _.R.su = function(t) {
            return t ? t.replace(/&#([0-9]+);/g, e) : t;
        };
    }(), _.R = _.R || {}, function() {
        function e(t) {
            var n = "";
            if (3 == t.nodeType || 4 == t.nodeType) n = t.nodeValue; else if (t.innerText) n = t.innerText; else if (t.innerHTML) n = t.innerHTML; else if (t.firstChild) {
                n = [];
                for (t = t.firstChild; t; t = t.nextSibling) n.push(e(t));
                n = n.join("");
            }
            return n;
        }
        _.R.createElement = function(e) {
            var t;
            if (!window.document.body || window.document.body.namespaceURI) try {
                t = window.document.createElementNS("http://www.w3.org/1999/xhtml", e);
            } catch (n) {}
            return t || window.document.createElement(e);
        }, _.R.Fh = function(e) {
            var t = _.R.createElement("iframe");
            try {
                var n = [ "<", "iframe" ], r = e || {}, i;
                for (i in r) r.hasOwnProperty(i) && (n.push(" "), n.push(i), n.push('="'), n.push(_.R.Qf(r[i])), n.push('"'));
                n.push("></"), n.push("iframe"), n.push(">");
                var s = _.R.createElement(n.join(""));
                s && (!t || s.tagName == t.tagName && s.namespaceURI == t.namespaceURI) && (t = s);
            } catch (o) {}
            n = t, e = e || {};
            for (var u in e) e.hasOwnProperty(u) && (n[u] = e[u]);
            return t;
        }, _.R.Jk = function() {
            if (window.document.body) return window.document.body;
            try {
                var e = window.document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");
                if (e && 1 == e.length) return e[0];
            } catch (t) {}
            return window.document.documentElement || window.document;
        }, _.R.Qt = function(t) {
            return e(t);
        };
    }(), window.JSON && window.JSON.parse && window.JSON.stringify && (_.Kb = function() {
        function e(e) {
            return this[e];
        }
        var t = /___$/;
        return {
            parse: function(e) {
                try {
                    return window.JSON.parse(e);
                } catch (t) {
                    return _.u;
                }
            },
            stringify: function(n) {
                function r(t) {
                    return i.call(this, t, e);
                }
                var i = window.JSON.stringify, s = Array.prototype.toJSON && '"[{\\"x\\": 1}]"' === i([ {
                    x: 1
                } ]) ? r : i;
                try {
                    return s(n, function(e, n) {
                        return t.test(e) ? _.p : n;
                    });
                } catch (o) {
                    return _.s;
                }
            }
        };
    }()), window.JSON && window.JSON.parse && window.JSON.stringify || (_.Kb = function() {
        function a(e) {
            return 10 > e ? "0" + e : e;
        }
        function c(e) {
            var t, n, r;
            t = /[\"\\\x00-\x1f\x7f-\x9f]/g;
            switch (typeof e) {
              case "string":
                return t.test(e) ? '"' + e.replace(t, function(e) {
                    var t = f[e];
                    return t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16));
                }) + '"' : '"' + e + '"';
              case "number":
                return (0, window.isFinite)(e) ? String(e) : "null";
              case "boolean":
              case "null":
                return String(e);
              case "object":
                if (!e) return "null";
                t = [];
                if ("number" == typeof e.length && !e.propertyIsEnumerable("length")) {
                    r = e.length;
                    for (n = 0; n < r; n += 1) t.push(c(e[n]) || "null");
                    return "[" + t.join(",") + "]";
                }
                for (n in e) !/___$/.test(n) && e.hasOwnProperty(n) && "string" == typeof n && (r = c(e[n])) && t.push(c(n) + ":" + r);
                return "{" + t.join(",") + "}";
            }
            return "";
        }
        Date.prototype.toJSON = function() {
            return [ this.getUTCFullYear(), "-", a(this.getUTCMonth() + 1), "-", a(this.getUTCDate()), "T", a(this.getUTCHours()), ":", a(this.getUTCMinutes()), ":", a(this.getUTCSeconds()), "Z" ].join("");
        };
        var f = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return {
            stringify: c,
            parse: function(a) {
                return /^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? eval("(" + a + ")") : _.u;
            }
        };
    }()), _.Kb.Ck = function(e) {
        var t = {};
        if (e === _.s || e === _.p) return t;
        for (var n in e) if (e.hasOwnProperty(n)) {
            var r = e[n];
            _.s !== r && _.p !== r && (t[n] = "string" == typeof r ? r : _.Kb.stringify(r));
        }
        return t;
    }, (0, _.Q)("gadgets.json.flatten", _.Kb.Ck), (0, _.Q)("gadgets.json.parse", _.Kb.parse), (0, _.Q)("gadgets.json.stringify", _.Kb.stringify), (0, _.Q)("gadgets.json.flatten", _.Kb.Ck), (0, _.Q)("gadgets.json.parse", _.Kb.parse), (0, _.Q)("gadgets.json.stringify", _.Kb.stringify), _.Mb = function() {
        function e(e) {
            t(1, e);
        }
        function t(e, t) {
            if (!(e < n) && r) if (2 === e && r.warn) r.warn(t); else if (3 === e && r.error) try {
                r.error(t);
            } catch (i) {} else r.log && r.log(t);
        }
        _.Lb = function(e) {
            t(2, e);
        }, _.sa = function(e) {
            t(3, e);
        }, _.Fc = (0, _.x)(), e.INFO = 1, e.WARNING = 2, e.NONE = 4;
        var n = 1, r = window.console ? window.console : window.opera ? window.opera.postError : _.p;
        return e;
    }(), _.R = _.R || {}, function() {
        var e = [];
        _.R.du = function(t) {
            e.push(t);
        }, _.R.ku = function() {
            for (var t = 0, n = e.length; t < n; ++t) e[t]();
        };
    }(), _.Nb = function(e) {
        for (var t = 0; t < this.length; t++) if (this[t] === e) return t;
        return -1;
    }, _.R = _.R || {}, function() {
        var e = _.s;
        _.R.oa = function(t) {
            var n = "undefined" == typeof t;
            if (e !== _.s && n) return e;
            var r = {};
            t = t || window.location.href;
            var i = t.indexOf("?"), s = t.indexOf("#");
            t = (-1 === s ? t.substr(i + 1) : [ t.substr(i + 1, s - i - 1), "&", t.substr(s + 1) ].join("")).split("&");
            for (var i = window.decodeURIComponent ? window.decodeURIComponent : window.unescape, s = 0, o = t.length; s < o; ++s) {
                var u = t[s].indexOf("=");
                if (-1 !== u) {
                    var f = t[s].substring(0, u), u = t[s].substring(u + 1), u = u.replace(/\+/g, " ");
                    try {
                        r[f] = i(u);
                    } catch (l) {}
                }
            }
            return n && (e = r), r;
        }, _.R.oa();
    }(), (0, _.Q)("gadgets.util.getUrlParameters", _.R.oa), _.kd = function(e) {
        Kd && Kd.log && Kd.log(e);
    }, _.ke = function() {};
    var Kd = window.console;
    _.Pb = function() {
        var e = window.gadgets && window.gadgets.config && window.gadgets.config.get;
        return e && (0, _.Fa)(e()), {
            Q: function(e, t, n) {
                n && n((0, _.P)());
            },
            get: function(e) {
                return (0, _.P)(e);
            },
            update: function(e, t) {
                t && (0, _.m)("Config replacement is not supported"), (0, _.Fa)(e);
            },
            ba: (0, _.x)()
        };
    }(), (0, _.Q)("gadgets.config.register", _.Pb.Q), (0, _.Q)("gadgets.config.get", _.Pb.get), (0, _.Q)("gadgets.config.init", _.Pb.ba), (0, _.Q)("gadgets.config.update", _.Pb.update), _.Ub = function(e) {
        if ("complete" === _.Ja.readyState) e(); else {
            var t = _.u, n = function() {
                if (!t) return t = _.r, e.apply(this, arguments);
            };
            _.Ia.addEventListener ? (_.Ia.addEventListener("load", n, _.u), _.Ia.addEventListener("DOMContentLoaded", n, _.u)) : _.Ia.attachEvent && (_.Ia.attachEvent("onreadystatechange", function() {
                "complete" === _.Ja.readyState && n.apply(this, arguments);
            }), _.Ia.attachEvent("onload", n));
        }
    }, _.cc = function(e, t) {
        var n = (0, _.N)(_.wa, "watt", (0, _.O)());
        (0, _.N)(n, e, t);
    }, _.vd = function(e, t) {
        if ("complete" !== _.Ja.readyState) try {
            e();
        } catch (n) {}
        (0, _.Ub)(t);
    };
    var Qb = Qb || {};
    Qb.Km = _.s, Qb.bm = _.s, Qb.pg = _.s, Qb.frameElement = _.s, Qb = Qb || {}, Qb.Lj || (Qb.Lj = function() {
        function e(e, t, n) {
            "undefined" != typeof window.addEventListener ? window.addEventListener(e, t, n) : "undefined" != typeof window.attachEvent && window.attachEvent("on" + e, t), "message" === e && (window.___jsl = window.___jsl || {}, e = window.___jsl, e.RPMQ = e.RPMQ || [], e.RPMQ.push(t));
        }
        function t(e) {
            var t = _.Kb.parse(e.data);
            if (t && t.f) {
                (0, _.Fc)("gadgets.rpc.receive(" + window.name + "): " + e.data);
                var r = _.T.$d(t.f);
                i && ("undefined" != typeof e.origin ? e.origin !== r : e.domain !== /^.+:\/\/([^:]+).*/.exec(r)[1]) ? (0, _.sa)("Invalid rpc message origin. " + r + " vs " + (e.origin || "")) : n(t, e.origin);
            }
        }
        var n, r, i = _.r;
        return {
            Kk: (0, _.ca)("wpm"),
            b: (0, _.ca)(_.r),
            ba: function(s, o) {
                return _.Pb.Q("rpc", _.s, function(e) {
                    "true" === String((e && e.rpc || {}).disableForceSecure) && (i = _.u);
                }), n = s, r = o, e("message", t, _.u), r("..", _.r), _.r;
            },
            sf: function(e) {
                return r(e, _.r), _.r;
            },
            call: function(e, t, n) {
                var r = _.T.$d(e), i = _.T.dk(e);
                return r ? window.setTimeout(function() {
                    var e = _.Kb.stringify(n);
                    (0, _.Fc)("gadgets.rpc.send(" + window.name + "): " + e), i.postMessage(e, r);
                }, 0) : ".." != e && (0, _.sa)("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message"), _.r;
            }
        };
    }()), Qb = Qb || {}, Qb.Uf || (Qb.Uf = function() {
        function e(e, t) {
            function n() {
                e.apply({}, arguments);
            }
            return S[t] = S[t] || n, E + "." + t;
        }
        function t() {
            if (p === _.s && window.document.body && f) {
                var e = f + "?cb=" + Math.random() + "&origin=" + w + "&jsl=1", n = window.document.createElement("div");
                n.style.height = "1px", n.style.width = "1px", e = '<object height="1" width="1" id="' + a + '" type="application/x-shockwave-flash"><param name="allowScriptAccess" value="always"></param><param name="movie" value="' + e + '"></param><embed type="application/x-shockwave-flash" allowScriptAccess="always" src="' + e + '" height="1" width="1"></embed></object>', window.document.body.appendChild(n), n.innerHTML = e, p = n.firstChild;
            }
            ++m, v !== _.s && (p !== _.s || 50 <= m) ? window.clearTimeout(v) : v = window.setTimeout(t, 100);
        }
        function n() {
            b[".."] || (u(".."), g++, 50 <= g && y !== _.s ? (window.clearTimeout(y), y = _.s) : y = window.setTimeout(n, 100));
        }
        function r() {
            if (p !== _.s && p.setup) for (; 0 < d.length; ) {
                var e = d.shift(), t = e.Qs;
                p.setup(e.ve, ".." === t ? _.T.lh : t, ".." === t ? "INNER" : "OUTER");
            }
            v !== _.s && window.clearTimeout(v), v = _.s;
        }
        function i() {
            b[".."] || y !== _.s || (y = window.setTimeout(n, 100));
        }
        function s(e, t, n) {
            t = _.T.$d(e);
            var r = _.T.Wd(e);
            return p["sendMessage_" + (".." === e ? _.T.lh : e) + "_" + r + "_" + (".." === e ? "INNER" : "OUTER")].call(p, _.Kb.stringify(n), t), _.r;
        }
        function o(e, t) {
            var n = _.Kb.parse(e), r = n._scr;
            r ? (h(r, _.r), b[r] = _.r, ".." !== r && u(r, _.r)) : window.setTimeout(function() {
                c(n, t);
            }, 0);
        }
        function u(e, t) {
            var n = _.T.lh, r = {};
            r._scr = t ? ".." : n, r._pnt = n, s(e, n, r);
        }
        var a = "___xpcswf", f = _.s, l = _.u, c = _.s, h = _.s, p = _.s, d = [], v = _.s, m = 0, g = 0, y = _.s, b = {}, w = window.location.protocol + "//" + window.location.host, E, S = function() {
            window.___jsl = window.___jsl || {};
            var e = window.___jsl._fm = {};
            return E = "___jsl._fm", e;
        }();
        return _.Pb.Q("rpc", _.s, function(e) {
            l && (f = e && e.rpc && e.rpc.commSwf || "//xpc.googleusercontent.com/gadgets/xpc.swf");
        }), e(r, "ready"), e(i, "setupDone"), e(o, "receiveMessage"), {
            Kk: (0, _.ca)("flash"),
            b: (0, _.ca)(_.r),
            ba: function(e, t) {
                return c = e, h = t, l = _.r;
            },
            sf: function(e, n) {
                return d.push({
                    ve: n,
                    Qs: e
                }), p === _.s && v === _.s && (v = window.setTimeout(t, 100)), _.r;
            },
            call: s,
            Vo: o,
            d: r,
            i: i
        };
    }()), window.gadgets && window.gadgets.rpc ? "undefined" != typeof _.T && _.T || (_.T = window.gadgets.rpc, _.T.Ca = _.T.config, _.T.Q = _.T.register, _.T.Jd = _.T.unregister, _.T.Am = _.T.registerDefault, _.T.aB = _.T.unregisterDefault, _.T.Fk = _.T.forceParentVerifiable, _.T.call = _.T.call, _.T.Rk = _.T.getRelayUrl, _.T.Xg = _.T.setRelayUrl, _.T.Wg = _.T.setAuthToken, _.T.tf = _.T.setupReceiver, _.T.Wd = _.T.getAuthToken, _.T.mj = _.T.removeReceiver, _.T.Qk = _.T.getRelayChannel, _.T.ym = _.T.receive, _.T.zm = _.T.receiveSameDomain, _.T.Pq = _.T.getOrigin, _.T.$d = _.T.getTargetOrigin, _.T.dk = _.T._getTargetWin, _.T.Uo = _.T._parseSiblingId) : (_.T = function() {
        function e() {}
        function t(e, t) {
            if (!T[e]) {
                var n = B;
                t || (n = D), T[e] = n;
                for (var r = N[e] || [], i = 0; i < r.length; ++i) {
                    var s = r[i];
                    s.t = b[e], n.call(e, s.f, s);
                }
                N[e] = [];
            }
        }
        function n() {
            function e() {
                P = _.r;
            }
            H || ("undefined" != typeof window.addEventListener ? window.addEventListener("unload", e, _.u) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", e), H = _.r);
        }
        function r(t, r, i, s, o) {
            b[r] && b[r] === i || ((0, _.sa)("Invalid gadgets.rpc token. " + b[r] + " vs " + i), e(r, 2)), o.onunload = function() {
                S[r] && !P && (e(r, 1), _.T.mj(r));
            }, n(), s = _.Kb.parse((0, window.decodeURIComponent)(s));
        }
        function i(n, r) {
            if (n && "string" == typeof n.s && "string" == typeof n.f && n.a instanceof Array) if (b[n.f] && b[n.f] !== n.t && ((0, _.sa)("Invalid gadgets.rpc token. " + b[n.f] + " vs " + n.t), e(n.f, 2)), "__ack" === n.s) window.setTimeout(function() {
                t(n.f, _.r);
            }, 0); else {
                n.c && (n.callback = function(e) {
                    _.T.call(n.f, (n.g ? "legacy__" : "") + "__cb", _.s, n.c, e);
                });
                if (r) {
                    var i = s(r);
                    n.origin = r;
                    var o = n.r;
                    o && s(o) == i || (o = r), n.referer = o;
                }
                i = (m[n.s] || m[""]).apply(n, n.a), n.c && "undefined" != typeof i && _.T.call(n.f, "__cb", _.s, n.c, i);
            }
        }
        function s(e) {
            if (!e) return "";
            e = e.split("#")[0].split("?")[0], e = e.toLowerCase(), 0 == e.indexOf("//") && (e = window.location.protocol + e), -1 == e.indexOf("://") && (e = window.location.protocol + "//" + e);
            var t = e.substring(e.indexOf("://") + 3), n = t.indexOf("/");
            -1 != n && (t = t.substring(0, n)), e = e.substring(0, e.indexOf("://"));
            var n = "", r = t.indexOf(":");
            if (-1 != r) {
                var i = t.substring(r + 1), t = t.substring(0, r);
                if ("http" === e && "80" !== i || "https" === e && "443" !== i) n = ":" + i;
            }
            return e + "://" + t + n;
        }
        function o(e) {
            if ("/" == e.charAt(0)) {
                var t = e.indexOf("|");
                return {
                    id: 0 < t ? e.substring(1, t) : e.substring(1),
                    origin: 0 < t ? e.substring(t + 1) : _.s
                };
            }
            return _.s;
        }
        function u(e) {
            if ("undefined" == typeof e || ".." === e) return window.parent;
            var t = o(e);
            return t ? window.top.frames[t.id] : (e = String(e), (t = window.frames[e]) ? t : (t = window.document.getElementById(e)) && t.contentWindow ? t.contentWindow : _.s);
        }
        function a(e, t) {
            if (S[e] !== _.r) {
                "undefined" == typeof S[e] && (S[e] = 0);
                var n = u(e);
                ".." !== e && n == _.s || B.sf(e, t) !== _.r ? S[e] !== _.r && 10 > S[e]++ ? window.setTimeout(function() {
                    a(e, t);
                }, 500) : (T[e] = D, S[e] = _.r) : S[e] = _.r;
            }
        }
        function f(e) {
            return (e = g[e]) && "/" === e.substring(0, 1) && (e = "/" === e.substring(1, 2) ? window.document.location.protocol + e : window.document.location.protocol + "//" + window.document.location.host + e), e;
        }
        function l(e, t, n) {
            t && !/http(s)?:\/\/.+/.test(t) && (0 == t.indexOf("//") ? t = window.location.protocol + t : "/" == t.charAt(0) ? t = window.location.protocol + "//" + window.location.host + t : -1 == t.indexOf("://") && (t = window.location.protocol + "//" + t)), g[e] = t, "undefined" != typeof n && (y[e] = !!n);
        }
        function c(e, t) {
            t = t || "", b[e] = String(t), a(e, t);
        }
        function h(e) {
            e = (e.passReferrer || "").split(":", 2), C = e[0] || "none", k = e[1] || "origin";
        }
        function p(e) {
            "true" === String(e.useLegacyProtocol) && (B = Qb.pg || D, B.ba(i, t));
        }
        function d(e, t) {
            function n(n) {
                n = n && n.rpc || {}, h(n);
                var r = n.parentRelayUrl || "", r = s(x.parent || t) + r;
                l("..", r, "true" === String(n.useLegacyProtocol)), p(n), c("..", e);
            }
            !x.parent && t ? n({}) : _.Pb.Q("rpc", _.s, n);
        }
        function v(e, t, n) {
            if (".." === e) d(n || x.rpctoken || x.ifpctok || "", t); else e : {
                var r = _.s;
                if ("/" != e.charAt(0)) {
                    if (!_.R) break e;
                    (r = window.document.getElementById(e)) || (0, _.m)(Error("h`" + e));
                }
                r = r && r.src, t = t || _.T.Pq(r), l(e, t), t = _.R.oa(r), c(e, n || t.rpctoken);
            }
        }
        var m = {}, g = {}, y = {}, b = {}, w = 0, E = {}, S = {}, x = {}, T = {}, N = {}, C = _.s, k = _.s, L = window.top !== window.self, A = window.name, O = window.console, M = O && O.log && function(e) {
            O.log(e);
        } || (0, _.x)(), D = function() {
            function e(e) {
                return function() {
                    M(e + ": call ignored");
                };
            }
            return {
                getCode: (0, _.ca)("noop"),
                isParentVerifiable: (0, _.ca)(_.r),
                init: e("init"),
                setup: e("setup"),
                call: e("call")
            };
        }();
        _.R && (x = _.R.oa());
        var P = _.u, H = _.u, B = function() {
            if ("flash" == x.rpctx) return Qb.Uf;
            if ("rmr" == x.rpctx) return Qb.Km;
            var e = "function" == typeof window.postMessage ? Qb.Lj : "object" == typeof window.postMessage ? Qb.Lj : window.ActiveXObject ? Qb.Uf ? Qb.Uf : Qb.bm ? Qb.bm : Qb.pg : 0 < window.navigator.userAgent.indexOf("WebKit") ? Qb.Km : "Gecko" === window.navigator.product ? Qb.frameElement : Qb.pg;
            return e || (e = D), e;
        }();
        return m[""] = function() {
            M("Unknown RPC service: " + this.s);
        }, m.__cb = function(e, t) {
            var n = E[e];
            n && (delete E[e], n.call(this, t));
        }, {
            Ca: function(t) {
                "function" == typeof t.Mm && (e = t.Mm);
            },
            Q: function(e, t) {
                "__cb" !== e && "__ack" !== e || (0, _.m)(Error("i")), "" === e && (0, _.m)(Error("j")), m[e] = t;
            },
            Jd: function(e) {
                "__cb" !== e && "__ack" !== e || (0, _.m)(Error("k")), "" === e && (0, _.m)(Error("l")), delete m[e];
            },
            Am: function(e) {
                m[""] = e;
            },
            aB: function() {
                delete m[""];
            },
            Fk: (0, _.x)(),
            call: function(e, t, n, r) {
                e = e || "..";
                var i = "..";
                ".." === e ? i = A : "/" == e.charAt(0) && (i = _.T.Pq(window.location.href), i = "/" + A + (i ? "|" + i : "")), ++w, n && (E[w] = n);
                var s = {
                    s: t,
                    f: i,
                    c: n ? w : 0,
                    a: Array.prototype.slice.call(arguments, 3),
                    t: b[e],
                    l: !!y[e]
                }, u;
                e : if ("bidir" === C || "c2p" === C && ".." === e || "p2c" === C && ".." !== e) {
                    u = window.location.href;
                    var a = "?";
                    if ("query" === k) a = "#"; else if ("hash" === k) break e;
                    a = u.lastIndexOf(a), a = -1 === a ? u.length : a, u = u.substring(0, a);
                } else u = _.s;
                u && (s.r = u);
                if (".." === e || o(e) != _.s || window.document.getElementById(e)) (u = T[e]) || o(e) === _.s || (u = B), 0 === t.indexOf("legacy__") && (u = B, s.s = t.substring(8), s.c = s.c ? s.c : w), s.g = _.r, s.r = i, u ? (y[e] && (u = Qb.pg), u.call(e, i, s) === _.u && (T[e] = D, B.call(e, i, s))) : N[e] ? N[e].push(s) : N[e] = [ s ];
            },
            Rk: f,
            Xg: l,
            Wg: c,
            tf: v,
            Wd: function(e) {
                return b[e];
            },
            mj: function(e) {
                delete g[e], delete y[e], delete b[e], delete S[e], delete T[e];
            },
            Qk: function() {
                return B.Kk();
            },
            ym: function(e, t) {
                4 < e.length ? B.Vo(e, i) : r.apply(_.s, e.concat(t));
            },
            zm: function(e) {
                e.a = Array.prototype.slice.call(e.a), window.setTimeout(function() {
                    i(e);
                }, 0);
            },
            Pq: s,
            $d: function(e) {
                var t = _.s, t = f(e);
                return t || (t = (t = o(e)) ? t.origin : ".." == e ? x.parent : window.document.getElementById(e).src), s(t);
            },
            ba: function() {
                B.ba(i, t) === _.u && (B = D), L ? v("..") : _.Pb.Q("rpc", _.s, function(e) {
                    e = e.rpc || {}, h(e), p(e);
                });
            },
            dk: u,
            Uo: o,
            b: "__ack",
            lh: A || "..",
            j: 0,
            i: 1,
            d: 2
        };
    }(), _.T.ba()), _.T.Ca({
        Mm: function(e) {
            (0, _.m)(Error("m`" + e));
        }
    }), _.Fc = _.ke, (0, _.Q)("gadgets.rpc.config", _.T.Ca), (0, _.Q)("gadgets.rpc.register", _.T.Q), (0, _.Q)("gadgets.rpc.unregister", _.T.Jd), (0, _.Q)("gadgets.rpc.registerDefault", _.T.Am), (0, _.Q)("gadgets.rpc.unregisterDefault", _.T.aB), (0, _.Q)("gadgets.rpc.forceParentVerifiable", _.T.Fk), (0, _.Q)("gadgets.rpc.call", _.T.call), (0, _.Q)("gadgets.rpc.getRelayUrl", _.T.Rk), (0, _.Q)("gadgets.rpc.setRelayUrl", _.T.Xg), (0, _.Q)("gadgets.rpc.setAuthToken", _.T.Wg), (0, _.Q)("gadgets.rpc.setupReceiver", _.T.tf), (0, _.Q)("gadgets.rpc.getAuthToken", _.T.Wd), (0, _.Q)("gadgets.rpc.removeReceiver", _.T.mj), (0, _.Q)("gadgets.rpc.getRelayChannel", _.T.Qk), (0, _.Q)("gadgets.rpc.receive", _.T.ym), (0, _.Q)("gadgets.rpc.receiveSameDomain", _.T.zm), (0, _.Q)("gadgets.rpc.getOrigin", _.T.Pq), (0, _.Q)("gadgets.rpc.getTargetOrigin", _.T.$d), _.Rb = window.gapi && window.gapi.util || {}, _.Rb = _.Rb || {}, _.Rb.xh = function() {
        var e = {
            Nj: "bsh",
            Uj: "h"
        };
        return window.___jsl = window.___jsl || {}, {
            b: function() {
                return window.___jsl[e.Nj];
            },
            Ok: function() {
                return window.___jsl[e.Uj];
            },
            pj: function(t) {
                window.___jsl[e.Nj] = t;
            },
            ys: function(t) {
                window.___jsl[e.Uj] = t;
            }
        };
    }(), _.Pj = window.oauth2 || {}, _.Qj = window.auth_firstparty || {}, _.Vj = function(e, t) {
        this.b = e;
        var n = t || {};
        this.j = n.Fr, this.d = n.domain, this.i = n.path, this.k = n.wD;
    }, _.dk = function(e) {
        this.b = e;
    }, _.fk = function(e) {
        this.b = e, this.d = window.sessionStorage;
    };
    var LC = /^[-+/_=.:|%&a-zA-Z0-9@]*$/, MC = /^[A-Z_][A-Z0-9_]{0,63}$/;
    _.Vj.prototype.Hd = function() {
        for (var e = this.b + "=", t = window.document.cookie.split(/;\s*/), n = 0; n < t.length; ++n) {
            var r = t[n];
            if (0 == r.indexOf(e)) return r.substr(e.length);
        }
    }, _.Vj.prototype.write = function(e, t) {
        MC.test(this.b) || (0, _.m)("Invalid cookie name"), LC.test(e) || (0, _.m)("Invalid cookie value");
        var n = this.b + "=" + e;
        this.d && (n += ";domain=" + this.d), this.i && (n += ";path=" + this.i);
        var r = "number" == typeof t ? t : this.j;
        if (0 <= r) {
            var i = new Date;
            i.setSeconds(i.getSeconds() + r), n += ";expires=" + i.toUTCString();
        }
        this.k && (n += ";secure"), window.document.cookie = n;
    }, _.Vj.prototype.clear = function() {
        this.write("", 0);
    }, _.Vj.iterate = function(e) {
        for (var t = window.document.cookie.split(/;\s*/), n = 0; n < t.length; ++n) {
            var r = t[n].split("="), i = r.shift();
            e(i, r.join("="));
        }
    };
    var Ok = {};
    _.dk.prototype.Hd = function() {
        if (Ok.hasOwnProperty(this.b)) return Ok[this.b];
    }, _.dk.prototype.write = function(e) {
        Ok[this.b] = e;
    }, _.dk.prototype.clear = function() {
        delete Ok[this.b];
    }, _.dk.iterate = function(e) {
        for (var t in Ok) Ok.hasOwnProperty(t) && e(t, Ok[t]);
    }, _.fk.prototype.Hd = function() {
        return this.d.getItem(this.b);
    }, _.fk.prototype.write = function(e) {
        this.d.setItem(this.b, e);
    }, _.fk.prototype.clear = function() {
        this.d.removeItem(this.b);
    }, _.fk.iterate = function(e) {
        for (var t = 0, n = window.sessionStorage.length; t < n; ++t) {
            var r = window.sessionStorage.key(t);
            e(r, window.sessionStorage[r]);
        }
    };
    for (var sE = 0; 64 > sE; ++sE) ;
    _.Dn = function(e) {
        var t = (0, _.P)("googleapis.config/sessionIndex");
        t == _.s && (t = window.__X_GOOG_AUTHUSER);
        if (t == _.s) {
            var n = window.google;
            n && (t = n.authuser);
        }
        return t == _.s && (e == _.s && (e = window.location.href), t = e ? (0, _.Ua)(e, "authuser") || _.s : _.s), t == _.s ? _.s : String(t);
    }, _.Un = function() {
        var e = (0, _.P)("googleapis.config/sessionDelegate");
        return e == _.s ? _.s : String(e);
    }, _.ep = function(e) {
        e = (0, _.Dn)(e);
        var t = (0, _.Un)(), n = "";
        return e && (n += "u/" + e + "/"), t && (n += "b/" + t + "/"), n || _.s;
    }, _.Xb = function(e, t, n) {
        e = String(e);
        if (((0, _.Ua)(e, "authuser") || _.s) != _.s || ((0, _.Ua)(e, "hd") || _.s) != _.s) return e;
        t = (0, _.Dn)(t);
        if (n) {
            var r = e, i = r.match(/^((https?:)?\/\/[^\/?#]*)?(\/[^\/?#]+)\/[0-9]+([\/][^?#]*)([?#].*)?$/);
            if (i && i[0]) {
                var s = i[1], o = i[4], u = i[5];
                i[3] == "/" + n && (r = (s || "") + (o || "/") + (u || ""));
            }
            if ((i = r.match(/^(((https?:)?\/\/[^\/?#]*)([\/][^?#]*)?|([\/][^?#]*))([?#].*)?$/)) && i[0]) return s = i[2], e = i[4] || i[5], u = i[6], t != _.s && (r = (s || "") + "/" + n + "/" + (0, window.encodeURIComponent)(t) + (e || "/") + (u || "")), r;
        }
        return n = t == _.s ? (0, window.encodeURIComponent)("authuser") + "=0" : t.match(/^([-a-z0-9]+[.])+[-a-z0-9]+$/) ? [ (0, window.encodeURIComponent)("authuser") + "=", (0, window.encodeURIComponent)(String(t)), "&" + (0, window.encodeURIComponent)("hd") + "=", (0, window.encodeURIComponent)(t) ].join("") : [ "authuser=", (0, window.encodeURIComponent)(t) ].join(""), e = e.split("#"), t = e[0].indexOf("?"), 0 > t ? e[0] = [ e[0], "?", n ].join("") : (r = [ e[0] ], t < e[0].length - 1 && r.push("&"), r.push(n), e[0] = r.join("")), r = e.join("#");
    }, _.google.ko = _.Xb, _.google.mr = _.Dn, _.google.ay = _.Un, _.google.cy = _.ep;
    var Lv, Kv;
    _.tE = function(e) {
        var t = e.substr(1), n = "", r = window.location.hostname;
        if ("" !== t) {
            n = (0, window.parseInt)(t, 10);
            if ((0, window.isNaN)(n)) return _.s;
            t = r.split(".");
            if (t.length < n - 1) return _.s;
            t.length == n - 1 && (r = "." + r);
        } else r = "";
        return {
            Gb: "S" == e.charAt(0),
            domain: r,
            Ke: n
        };
    }, _.uE = function(e) {
        if (0 !== e.indexOf("GCSC")) return _.s;
        var t = {
            uf: _.u
        };
        e = e.substr(4);
        if (!e) return t;
        var n = e.charAt(0);
        e = e.substr(1);
        var r = e.lastIndexOf("_");
        if (-1 == r) return t;
        var i = (0, _.tE)(e.substr(r + 1));
        return i == _.s ? t : (e = e.substring(0, r), "_" !== e.charAt(0) ? t : (r = "E" === n && i.Gb, !r && ("U" !== n || i.Gb) || r && !_.Gt ? t : {
            uf: _.r,
            Gb: r,
            ep: e.substr(1),
            domain: i.domain,
            Ke: i.Ke
        }));
    }, _.Pn = function(e) {
        this.d = e, this.b = _.s;
    }, _.vv = function(e) {
        return e ? {
            domain: e.domain,
            path: "/",
            wD: e.Gb
        } : _.s;
    }, _.Zj = function(e, t) {
        var n = "";
        if (!e) return n;
        var r = t || "&", i;
        for (i in e) if ({}.hasOwnProperty.call(e, i)) {
            var s;
            s = e[i];
            if (s != _.s) {
                var o = [ (0, window.encodeURIComponent)(i), "=" ];
                if (s instanceof Array) {
                    for (var u = [], a = 0; a < s.length; a++) u.push((0, window.encodeURIComponent)(s[a]));
                    o.push(u.join("+"));
                } else o.push((0, window.encodeURIComponent)(s));
                s = o.join("");
            } else s = "";
            s && (n && (n += r), n += s);
        }
        return n;
    }, Kv = (0, _.P)("oauth-flow/persist") == _.r, _.Gt = "https:" === window.location.protocol, Lv = _.Gt || "http:" === window.location.protocol ? _.Vj : _.dk, _.Hv = Kv ? _.fk : _.dk, _.Gv = Kv ? Lv : _.dk, _.vE = Kv ? Lv : _.dk;
    var lw;
    _.Dv = (0, _.O)(), _.Fv = (0, _.O)(), _.Mv = (0, _.O)(), lw = "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window".split(" "), _.Pn.prototype.write = function(e) {
        var t = (0, _.O)(), n = (0, _.O)(), r;
        for (r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r], t[r] = e[r]);
        r = 0;
        for (var i = lw.length; r < i; ++r) delete n[lw[r]];
        e = String(e.authuser || 0), r = (0, _.O)(), r[e] = _.R.oa("#" + (0, _.Zj)(n)), this.d.write(_.Kb.stringify(r)), this.b = t;
    }, _.Pn.prototype.Hd = (0, _.y)("b"), _.Pn.prototype.clear = function() {
        this.d.clear(), this.b = (0, _.O)();
    }, _.Hv.iterate(function(e) {
        var t = (0, _.uE)(e);
        t && t.uf && (_.Dv[e] = new _.Pn(new _.Hv(e, (0, _.vv)(t))));
    }), _.Gv.iterate(function(e) {
        _.Dv[e] && (_.Fv[e] = new _.Gv(e, (0, _.vv)((0, _.uE)(e))));
    }), _.Rb.Pq = function(e) {
        if (!e) return "";
        e = e.split("#")[0].split("?")[0], e = e.toLowerCase(), 0 == e.indexOf("//") && (e = window.location.protocol + e), /^\w*:\/\//.test(e) || (e = window.location.href);
        var t = e.substring(e.indexOf("://") + 3), n = t.indexOf("/");
        -1 != n && (t = t.substring(0, n)), e = e.substring(0, e.indexOf("://"));
        var n = "", r = t.indexOf(":");
        if (-1 != r) {
            var i = t.substring(r + 1), t = t.substring(0, r);
            if ("http" === e && "80" !== i || "https" === e && "443" !== i) n = ":" + i;
        }
        return e + "://" + t + n;
    }, _.Xj = window.googleapis && window.googleapis.server || {}, _.Yj = function() {
        var e = /\s*;\s*/;
        return {
            get: function(t, n) {
                for (var r = t + "=", i = (window.document.cookie || "").split(e), s = 0, o; o = i[s]; ++s) if (0 == o.indexOf(r)) return o.substr(r.length);
                return n;
            }
        };
    }(), _.Tb = function() {
        function e() {
            i[0] = 1732584193, i[1] = 4023233417, i[2] = 2562383102, i[3] = 271733878, i[4] = 3285377520, l = f = 0;
        }
        function t(e) {
            for (var t = o, n = 0; 64 > n; n += 4) t[n / 4] = e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3];
            for (n = 16; 80 > n; n++) t[n] = ((t[n - 3] ^ t[n - 8] ^ t[n - 14] ^ t[n - 16]) << 1 | (t[n - 3] ^ t[n - 8] ^ t[n - 14] ^ t[n - 16]) >>> 31) & 4294967295;
            e = i[0];
            for (var r = i[1], s = i[2], u = i[3], a = i[4], f, l, n = 0; 80 > n; n++) 40 > n ? 20 > n ? (f = u ^ r & (s ^ u), l = 1518500249) : (f = r ^ s ^ u, l = 1859775393) : 60 > n ? (f = r & s | u & (r | s), l = 2400959708) : (f = r ^ s ^ u, l = 3395469782), f = ((e << 5 | e >>> 27) & 4294967295) + f + a + l + t[n] & 4294967295, a = u, u = s, s = (r << 30 | r >>> 2) & 4294967295, r = e, e = f;
            i[0] = i[0] + e & 4294967295, i[1] = i[1] + r & 4294967295, i[2] = i[2] + s & 4294967295, i[3] = i[3] + u & 4294967295, i[4] = i[4] + a & 4294967295;
        }
        function n(e, n) {
            if ("string" == typeof e) {
                e = (0, window.unescape)((0, window.encodeURIComponent)(e));
                for (var r = [], i = 0, o = e.length; i < o; ++i) r.push(e.charCodeAt(i));
                e = r;
            }
            n || (n = e.length), r = 0;
            if (0 == f) for (; r + 64 < n; ) t(e.slice(r, r + 64)), r += 64, l += 64;
            for (; r < n; ) if (s[f++] = e[r++], l++, 64 == f) for (f = 0, t(s); r + 64 < n; ) t(e.slice(r, r + 64)), r += 64, l += 64;
        }
        function r() {
            var e = [], r = 8 * l;
            56 > f ? n(u, 56 - f) : n(u, 64 - (f - 56));
            for (var o = 63; 56 <= o; o--) s[o] = r & 255, r >>>= 8;
            t(s);
            for (o = r = 0; 5 > o; o++) for (var a = 24; 0 <= a; a -= 8) e[r++] = i[o] >> a & 255;
            return e;
        }
        for (var i = [], s = [], o = [], u = [ 128 ], a = 1; 64 > a; ++a) u[a] = 0;
        var f, l;
        return e(), {
            reset: e,
            update: n,
            xk: r,
            Of: function() {
                for (var e = r(), t = "", n = 0; n < e.length; n++) t += "0123456789ABCDEF".charAt(Math.floor(e[n] / 16)) + "0123456789ABCDEF".charAt(e[n] % 16);
                return t;
            }
        };
    }, _.Qj = function() {
        function e() {
            var e = window.__OVERRIDE_SID;
            return e == _.s && (e = _.Yj.get("SID")), !!e;
        }
        return {
            Nq: function(e) {
                var t = {
                    SAPISIDHASH: _.r,
                    APISIDHASH: _.r
                };
                return e && (e.OriginToken || e.Authorization && t[String(e.Authorization).split(" ")[0]]) ? _.r : _.u;
            },
            er: e,
            bq: function() {
                var t = _.s;
                return e() && (t = window.__PVT, t == _.s && (t = _.Yj.get("BEAT"))), t;
            },
            Qe: function() {
                var t = _.Rb.Pq(String(window.location.href));
                if (e()) {
                    var n = 0 == t.indexOf("https:") || 0 == t.indexOf("chrome-extension:"), r = n ? "SAPISID" : "APISID", i = n ? window.__SAPISID : window.__APISID;
                    i == _.s && (i = _.Yj.get(r));
                    if (i) return n = n ? "SAPISIDHASH" : "APISIDHASH", r = (0, _.Tb)(), r.reset(), r.update([ i, t ].join(" ")), n + " " + r.Of().toLowerCase();
                }
                return _.s;
            }
        };
    }(), _.R = _.R || {}, _.R.Ee = function(e, t, n, r) {
        "undefined" != typeof e.addEventListener ? e.addEventListener(t, n, r) : "undefined" != typeof e.attachEvent ? e.attachEvent("on" + t, n) : (0, _.Lb)("cannot attachBrowserEvent: " + t);
    }, _.R.Vr = function(e, t, n, r) {
        e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent ? e.detachEvent("on" + t, n) : (0, _.Lb)("cannot removeBrowserEvent: " + t);
    }, _.Vb = function() {
        function e(t) {
            t = t || window.event;
            var n = t.screenX + t.clientX << 16, n = n + (t.screenY + t.clientY), n = n * ((new Date).getTime() % 1e6);
            o = o * n % u, 0 < r && ++i == r && _.R.Vr(window, "mousemove", e, _.u);
        }
        function t(e) {
            var t = (0, _.Tb)();
            return t.update(e), t.Of();
        }
        var n = window.crypto;
        if (n && "function" == typeof n.getRandomValues) return function() {
            var e = new window.Uint32Array(1);
            return n.getRandomValues(e), Number("0." + e[0]);
        };
        var r = (0, _.P)("random/maxObserveMousemove");
        r == _.s && (r = -1);
        var i = 0, s = Math.random(), o = 1, u = 1e6 * (window.screen.width * window.screen.width + window.screen.height);
        0 != r && _.R.Ee(window, "mousemove", e, _.u);
        var a = t(window.document.cookie + "|" + window.document.location + "|" + (new Date).getTime() + "|" + s);
        return function() {
            var e = o, e = e + (0, window.parseInt)(a.substr(0, 20), 16);
            return a = t(a), e / (u + Math.pow(16, 20));
        };
    }(), (0, _.Q)("shindig.random", _.Vb);
    var Ak, Iv;
    _.st = function(e) {
        if (!e) return _.s;
        "single_host_origin" !== e && (e = _.T.Pq(e));
        var t = window.location.hostname, n = t, r = _.Gt;
        if ("single_host_origin" !== e) {
            n = e.split("://");
            if (2 != n.length) return (0, _.kd)("WARNING invalid cookie_policy: " + e), _.s;
            r = "https" === n.shift(), n = n[0];
        }
        if (-1 !== n.indexOf(":")) n = t = ""; else {
            if (n !== t) {
                e = "." + n;
                if (t.lastIndexOf(e) !== t.length - e.length) return (0, _.kd)("Invalid cookie_policy domain: " + n), _.s;
                n = e;
            }
            t = n.split(".").length - 1;
        }
        return {
            domain: n,
            Gb: r,
            Ke: t
        };
    }, _.DE = function(e) {
        e = e.toUpperCase();
        for (var t = 0, n = Iv.length; t < n; ++t) {
            var r = e.split(Iv[t]);
            2 == r.length && "" === r[1] && (e = r[0]);
        }
        return e = e.replace(/-/g, "_").toUpperCase(), 40 < e.length && (t = (0, _.Tb)(), t.update(e), e = t.Of().toUpperCase()), e;
    };
    var OC = function(e) {
        if (!e) return _.s;
        var t = e.client_id;
        return t ? (t = (0, _.DE)(t), e = (0, _.st)(e.cookie_policy), e ? !_.Gt && e.Gb ? ((0, _.kd)("WARNING: https cookie_policy set for http domain"), _.s) : [ "GCSC", e.Gb ? "E" : "U", "_", t, "_", e.Gb ? "S" : "H", e.Ke ].join("") : _.s) : _.s;
    };
    _.Ev = function(e, t) {
        var n = t ? _.Fv : _.Dv, r = t ? _.Gv : _.Hv, i = e && OC(e), s = !!i;
        e && !e.g_user_cookie_policy && (r = _.dk, i = "token");
        if (!i) {
            if (!!t || !_.Jv) return _.s;
            i = _.Jv;
        }
        var o = n[i];
        if (!o) {
            o = (0, _.uE)(i);
            if (!("token" === i || o && o.uf)) return _.s;
            o = new r(i, (0, _.vv)(o)), t || (o = new _.Pn(o));
        }
        return n[i] = o, {
            Kc: o,
            key: i,
            Fj: s
        };
    }, _.Cv = function(e) {
        var t = _.Dv[e];
        return t || (t = new _.Pn(new _.dk(e)), _.Dv[e] = t), {
            Kc: t,
            key: e
        };
    }, _.Fn = function() {
        return Math.floor((new Date).getTime() / 1e3);
    }, _.Hx = function(e, t, n) {
        e = e && "token" !== e ? (0, _.Cv)(e) : (0, _.Ev)();
        if (!e) return _.s;
        if (n) {
            n = e.Kc, (0, _.O)();
            var r = n.d.Hd();
            n = _.s;
            try {
                n = _.Kb.parse(r);
            } catch (i) {}
            n == _.u && (n = _.s), r = (0, _.Dn)() || "0", r = String(r), n = n && n[r];
        } else n = e.Kc.Hd();
        return n && n.expires_at && (0, _.Fn)() > n.expires_at && (e.Kc.clear(), n = _.s), n && n.error && !t && (n = _.s), n;
    };
    var zk = function(e, t) {
        var n = _.R.Fh({
            id: e,
            name: e
        });
        n.style.width = "1px", n.style.height = "1px", n.style.position = "absolute", n.style.top = "-100px";
        var r;
        if (window.navigator) {
            r = window.navigator.userAgent || "";
            var i = window.navigator.product || "";
            r = 0 != r.indexOf("Opera") && -1 == r.indexOf("WebKit") && "Gecko" == i && 0 < r.indexOf("rv:1.");
        } else r = _.u;
        return n.src = r ? "about:blank" : t, window.document.body.appendChild(n), r && (n.src = t), n;
    };
    Iv = [ ".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM" ], _.Jv = _.s, Ak = {}, _.Bk = function() {
        function e(e, t, n, r) {
            for (var i = 0; i < d.length; i++) {
                var s = d[i];
                window.setTimeout(function() {
                    s(e, t, n, r);
                }, 1);
            }
        }
        function t(e, t, n, r) {
            var i = a("proxy");
            if (n || !i) var i = a("root"), s = a("root-1p") || i, o = a("xd3"), i = (n || String(t ? s : i)) + o;
            return (t = _.R.oa().jsh || _.Rb.xh.Ok()) && (i += (0 <= i.indexOf("?") ? "&" : "?") + "jsh=" + (0, window.encodeURIComponent)(t)), a("push") && (i += (0 <= i.indexOf("?") ? "&" : "?") + "p=1"), i += "#parent=" + (0, window.encodeURIComponent)(r != _.s ? String(r) : _.Rb.Pq(window.document.location.href)), i += "&rpctoken=" + e;
        }
        function n(t, n, r, o) {
            var u = i(r, o), a = zk(u, n);
            _.T.Q("ready:" + t, function() {
                _.T.Jd("ready:" + t);
                if (!h[u]) {
                    h[u] = _.r;
                    var n = p[u];
                    p[u] = [];
                    for (var i = 0, a = n.length; i < a; ++i) {
                        var f = n[i];
                        s(f.qf, f.$r, f.Ga);
                    }
                    e("ready", (new Date).getTime(), r, o || _.s);
                }
            }), _.T.tf(u, n), c[u] = a;
        }
        function r(r, i) {
            var s = String(2147483647 * (0, _.Vb)() | 0), o = t(s, r, i);
            e("loading", (new Date).getTime(), r, i || _.s), (0, _.Ub)(function() {
                n(s, o, r, i);
            });
        }
        function i(e, n) {
            var r = t("", e, n, ""), i = l[r];
            return i || (i = (0, _.Tb)(), i.update(r), i = i.Of().toLowerCase(), i += Math.random(), l[r] = i), "apiproxy" + i;
        }
        function s(e, t, n) {
            function s(e) {
                e && (u = e.root || u, a = _.Qj.Nq(e.headers));
            }
            var u = _.s, a = _.u;
            if ("makeRequest" === e || "listen" === e) s(t); else if ("makeHttpRequests" === e && t) {
                for (var f = (0, _.P)("client/jsonpOverride"), l = 0, d = t.length; l < d; ++l) {
                    var v = t[l];
                    v && (v = v.params, s(v), f && o(v, n));
                }
                if (f) return;
            }
            f = i(a, u), c[f] || r(a, u), h[f] ? _.T.call(f, e, function(t) {
                var r = _.Kb.parse(t);
                if ("makeRequest" == e && r) {
                    for (var i = {}, s = 0; s < r.length; s++) i[r[s].id] = r[s];
                    n(i, t);
                } else n(r, t);
            }, t) : (p[f] || (p[f] = []), p[f].push({
                qf: e,
                $r: t,
                Ga: n
            }));
        }
        function o(e, t) {
            "GET" != e.httpMethod && (0, _.m)("JSONP supports GET methods only.");
            var n = "jpcb" + String(2147483647 * (0, _.Vb)() | 0), r = window.document.createElement("script"), i = window.document.getElementsByTagName("head")[0];
            window[n] = function(e) {
                t(e);
                try {
                    delete window[n];
                } catch (s) {
                    window[n] = _.p;
                }
                window.setTimeout(function() {
                    i.removeChild(r);
                }, 1);
            };
            var s = e.root || a("root"), s = s + e.url, o = e.urlParams;
            if (o) for (var f in o) Object.prototype.hasOwnProperty.call(o, f) && (s = u(s, f, o[f]));
            s = u(s, "callback", n), r.setAttribute("id", n), r.setAttribute("src", s), r.setAttribute("charset", "utf-8"), i.appendChild(r);
        }
        function u(e, t, n) {
            return e += 0 < e.indexOf("?") ? "&" : "?", e += (0, window.encodeURIComponent)(t) + "=" + (0, window.encodeURIComponent)(n);
        }
        function a(e) {
            return (0, _.P)("googleapis.config/" + e);
        }
        var f = window.location ? String(window.location.href) : _.s, l = {}, c = {}, h = {}, p = {}, d = [];
        return {
            Md: function(e, t) {
                var n = e || {}, r;
                window.location != _.s ? f = r = String(window.location.href) : r = f, r = _.Rb.Pq(r), n["X-Origin"] = r, r = n.Authorization;
                var i = n.OriginToken;
                if (r == _.s && i == _.s) {
                    if (r == _.s) {
                        var s;
                        _.Pj && Ak && (s = (0, _.Hx)(_.p, _.p)), s && s.access_token && (r = String(s.token_type || "Bearer") + " " + s.access_token);
                    }
                    r == _.s && a("auth/useFirstPartyAuth") && _.Qj.er() && (s = n["X-Goog-AuthUser"], s == _.s && (s = _.google.mr(t) || "0"), (r = _.Qj.Qe()) && (n["X-Goog-AuthUser"] = s)), r ? n.Authorization = r : a("auth/useOriginToken") !== _.u && (i = _.Qj.bq()) && (n.OriginToken = i);
                }
                return n;
            },
            Xo: function(e) {
                d.push(e);
            },
            Wr: function(e) {
                for (var t = 0; t < d.length; t++) if (d[t] == e) {
                    d.splice(t, 1);
                    break;
                }
            },
            Dd: s
        };
    }();
    var jz = function(e) {
        this.i = e, this.b = {}, this.d = {}, e = (0, _.H)(this.j, this), (0, _.Va)(_.Ia, "message", e), (0, _.N)(_.wa, "RPMQ", []).push(e), _.Ia != _.Ia.parent && CC(this, _.Ia.parent, "{h:'" + (0, window.escape)(_.Ia.name) + "'}", "*");
    }, lz = function(e, t) {
        var n = _.s;
        return 0 === t.indexOf("{h:'") && t.indexOf("'}") === t.length - 2 && (n = (0, window.unescape)(t.substring(4, t.length - 2))), n;
    }, kz = function(e, t) {
        var n = _.Kb.parse(t);
        return n !== _.s && "object" == typeof n && !!n.g;
    }, CC = function(e, t, n, r) {
        e = kz(e, n) ? "" : "!_", (0, _.ke)("gapi.rpc.send(" + Qz + "): " + (!n || 512 >= n.length ? n : n.substr(0, 512) + "... (" + n.length + " bytes)")), t.postMessage(e + n, r);
    }, mz = function() {}, nz = function(e) {
        var t = _.Ia;
        "/" == e.charAt(0) && (e = e.substring(1), t = _.Ia.top);
        for (e = e.split("/"); e.length; ) {
            var n;
            n = e.shift(), "{" == n.charAt(0) && "}" == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1));
            if (".." === n) t = t == t.parent ? t.opener : t.parent; else {
                if (".." === n || !t.frames[n]) return _.s;
                t = t.frames[n], "postMessage" in t || (0, _.m)("Not a window");
            }
        }
        return t;
    }, oz = function(e) {
        return (e = pz[e]) && e.ve;
    }, qz = function(e) {
        if (e.f in {}) return _.u;
        var t = e.t, n = pz[e.r];
        return e = e.origin, n && (n.ve === t || !n.ve && !t) && (e === n.origin || "*" === n.origin);
    }, rz = function(e) {
        var t = e.id.split("/"), n = t[t.length - 1], r = e.origin;
        return function(e) {
            var t = e.origin;
            return e.f == n && (r == t || "*" == r);
        };
    };
    _.sz = function(e, t, n) {
        e = tz(e), uz[e.name] = {
            Ip: t,
            lf: e.lf,
            Us: n || qz
        }, vz();
    }, _.wz = function(e) {
        delete uz[tz(e).name];
    };
    var xz = function(e, t) {
        var n = yz["_" + e];
        n && n[1](this) && n[0].call(this, t);
    }, zz = function(e) {
        var t = e.c;
        if (!t) return mz;
        var n = e.r, r = e.g ? "legacy__" : "";
        return function() {
            var e = [].slice.call(arguments, 0);
            e.unshift(n, r + "__cb", _.s, t), _.Az.apply(_.s, e);
        };
    }, Bz = function(e) {
        Cz = e;
    }, Dz = function(e) {
        Ez[e] || (Ez[e] = _.Ia.setTimeout(function() {
            Ez[e] = _.u, Fz(e);
        }, 0));
    }, Fz = function(e) {
        var t = pz[e];
        if (t && t.Tb) {
            var n = t.kj;
            for (t.kj = []; n.length; ) Gz.send(e, _.Kb.stringify(n.shift()), t.origin);
        }
    }, tz = function(e) {
        return 0 === e.indexOf("legacy__") ? {
            name: e.substring(8),
            lf: _.r
        } : {
            name: e,
            lf: _.u
        };
    }, vz = function() {
        for (var e = (0, _.P)("rpc/residenceSec") || 60, t = (new Date).getTime() / 1e3, n = 0, r; r = Hz[n]; ++n) {
            var i = r.qf;
            if (!i || 0 < e && t - r.timestamp > e) Hz.splice(n, 1), --n; else {
                var s = i.s, o = uz[s] || uz["*"];
                if (o) if (Hz.splice(n, 1), --n, i.origin = r.origin, r = zz(i), i.callback = r, o.Us(i)) {
                    if ("__cb" !== s && !!o.lf != !!i.g) break;
                    i = o.Ip.apply(i, i.a), i !== _.p && r(i);
                } else (0, _.ke)("gapi.rpc.rejected(" + Qz + "): " + s);
            }
        }
    }, Iz = function(e, t, n) {
        Hz.push({
            qf: e,
            origin: t,
            timestamp: (new Date).getTime() / 1e3
        }), n || vz();
    }, Jz = function(e, t) {
        var n = _.Kb.parse(e);
        Iz(n, t, _.u);
    }, Kz = function(e) {
        for (; e.length; ) Iz(e.shift(), this.origin, _.r);
        vz();
    }, Lz = function(e) {
        var t = _.u;
        e = e.split("|");
        var n = e[0];
        return 0 <= n.indexOf("/") && (t = _.r), {
            id: n,
            origin: e[1] || "*",
            Ki: t
        };
    };
    _.Mz = function(e, t, n, r) {
        var i = Lz(e);
        r && (_.Ia.frames[i.id] = r), e = i.id;
        if (!pz.hasOwnProperty(e)) {
            n = n || _.s, r = i.origin;
            if (".." === e) r = _.Rb.Pq(Oz), n = n || Pz; else if (!i.Ki) {
                var s = _.Ja.getElementById(e);
                s && (s = s.src, r = _.Rb.Pq(s), n = n || Nz(s).rpctoken);
            }
            "*" === i.origin && r || (r = i.origin), pz[e] = {
                ve: n,
                kj: [],
                origin: r,
                hs: t,
                xm: function() {
                    var t = e;
                    pz[t].Tb = 1, Fz(t);
                }
            }, Gz.sf(e, pz[e].xm);
        }
        return pz[e].xm;
    }, _.Az = function(e, t, n, r) {
        e = e || "..", (0, _.Mz)(e), e = e.split("|", 1)[0];
        var i = [].slice.call(arguments, 3), s = t, o = n, u = Qz, a = Pz, f = pz[e], l = u, c = Lz(e);
        if (f && ".." !== e) {
            if (c.Ki) {
                if (!(l = pz[e].hs)) {
                    for (var l = _.s, l = Cz ? Cz.substring(1).split("/") : [ Qz ], a = l.length - 1, h = _.Ia.parent; h !== _.Ia.top; ) {
                        var p = h.parent;
                        if (!(a--)) {
                            for (var d = _.s, v = p.frames.length, m = 0; m < v; ++m) p.frames[m] == h && (d = m);
                            l.unshift("{" + d + "}");
                        }
                        h = p;
                    }
                    l = "/" + l.join("/");
                }
            } else l = u = "..";
            a = f.ve;
        }
        f = s, o && c ? (h = qz, c.Ki && (h = rz(c)), yz["_" + ++Rz] = [ o, h ], c = Rz) : c = _.s, i = {
            s: f,
            f: u,
            r: l,
            t: a,
            c: c,
            a: i
        }, s = tz(s), i.s = s.name, i.g = s.lf, pz[e].kj.push(i), Dz(e);
    }, jz.prototype.j = function(e) {
        var t = String(e.data);
        (0, _.ke)("gapi.rpc.receive(" + Qz + "): " + (!t || 512 >= t.length ? t : t.substr(0, 512) + "... (" + t.length + " bytes)"));
        var n = 0 !== t.indexOf("!_");
        n || (t = t.substring(2));
        var r = kz(this, t);
        if (!n && !r) {
            if (!r && (n = lz(this, t))) {
                this.b[n] ? this.b[n]() : this.d[n] = 1;
                return;
            }
            var i = e.origin, s = this.i.zp;
            _.Ia.setTimeout(function() {
                s(t, i);
            }, 0);
        }
    }, jz.prototype.sf = function(e, t) {
        ".." === e || this.d[e] ? (t(), delete this.d[e]) : this.b[e] = t;
    }, jz.prototype.send = function(e, t, n) {
        (e = this.i.kq(e)) && CC(this, e, t, n);
    };
    var Rz = 0, Hz = [], pz = {}, uz = {}, Nz = _.R.oa, Sz = Nz(), Pz = Sz.rpctoken, Oz = Sz.parent || _.Ja.referrer, Qz = (_.Ia !== _.Ia.top || _.Ia.opener) && _.Ia.name || "..", Cz = _.s, Ez = {}, Gz = {
        send: mz,
        sf: mz
    }, yz = {};
    if ("function" == typeof _.Ia.postMessage || "object" == typeof _.Ia.postMessage) Gz = new jz({
        zp: Jz,
        kq: nz,
        b: Qz,
        $f: oz,
        d: Bz
    }), (0, _.sz)("__cb", xz, (0, _.ca)(_.r)), (0, _.sz)("_processBatch", Kz, (0, _.ca)(_.r)), (0, _.Mz)("..");
    _.Ob = _.Ob || {}, _.Ob.Xk = function() {
        var e = 0, t = 0;
        return window.self.innerHeight ? (e = window.self.innerWidth, t = window.self.innerHeight) : window.document.documentElement && window.document.documentElement.clientHeight ? (e = window.document.documentElement.clientWidth, t = window.document.documentElement.clientHeight) : window.document.body && (e = window.document.body.clientWidth, t = window.document.body.clientHeight), {
            width: e,
            height: t
        };
    }, _.Ob = _.Ob || {}, function() {
        function e(e, t) {
            return window.getComputedStyle(e, "").getPropertyValue(t).match(/^([0-9]+)/), (0, window.parseInt)(RegExp.$1, 10);
        }
        _.Ob.ai = function() {
            var t = _.Ob.Xk().height, n = window.document.body, r = window.document.documentElement;
            if ("CSS1Compat" === window.document.compatMode && r.scrollHeight) return r.scrollHeight !== t ? r.scrollHeight : r.offsetHeight;
            if (0 <= window.navigator.userAgent.indexOf("AppleWebKit")) {
                t = 0;
                for (n = [ window.document.body ]; 0 < n.length; ) {
                    var i = n.shift(), r = i.childNodes;
                    if ("undefined" != typeof i.style) {
                        var s = i.style.overflowY;
                        s || (s = (s = window.document.defaultView.getComputedStyle(i, _.s)) ? s.overflowY : _.s);
                        if ("visible" != s && "inherit" != s && (s = i.style.height, s || (s = (s = window.document.defaultView.getComputedStyle(i, _.s)) ? s.height : ""), 0 < s.length && "auto" != s)) continue;
                    }
                    for (i = 0; i < r.length; i++) {
                        s = r[i];
                        if ("undefined" != typeof s.offsetTop && "undefined" != typeof s.offsetHeight) var o = s.offsetTop + s.offsetHeight + e(s, "margin-bottom"), t = Math.max(t, o);
                        n.push(s);
                    }
                }
                return t + e(window.document.body, "border-bottom") + e(window.document.body, "margin-bottom") + e(window.document.body, "padding-bottom");
            }
            if (n && r) return i = r.scrollHeight, s = r.offsetHeight, r.clientHeight !== s && (i = n.scrollHeight, s = n.offsetHeight), i > t ? i > s ? i : s : i < s ? i : s;
        };
    }();
    var mb = function() {
        var e = (0, _.wc)();
        if (!e) {
            e = (0, _.O)(), (0, _.Ec)(e);
            var t = (0, _.O)();
            e.e = function(e) {
                var n = t[e];
                n && (delete t[e], n());
            }, e.a = function(e, n) {
                t[e] = n;
            }, e.r = function(e) {
                delete t[e];
            };
        }
        return e;
    }, nb = function(e, t) {
        var n = t.onload;
        return (0, _.Oa)(n) ? (mb().a(e, n), n) : _.s;
    }, ob = function(e) {
        return (0, _.fb)(/^\w+$/.test(e), "Unsupported id - " + e), mb(), 'onload="window.___jsl.onl.e(&#34;' + e + '&#34;)"';
    }, pb = function(e) {
        mb().r(e);
    };
    _.ha = function(e, t) {
        var n, r = 0;
        do n = t.id || [ "I", ub++, "_", (new Date).getTime() ].join(""); while (e.getElementById(n) && 5 > ++r);
        return (0, _.fb)(5 > r, "Error creating iframe id"), n;
    }, _.qa = function(e, t, n, r) {
        var i = {}, s = {};
        (0, _.Ra)(r.queryParams || {}, i), (0, _.Ra)(r.fragmentParams || {}, s);
        var o = (0, _.O)();
        o.id = n, o.parent = e.location.protocol + "//" + e.location.host, n = (0, _.Ua)(e.location.href, "id", "");
        var u = (0, _.Ua)(e.location.href, "pfname", "");
        return (n = n ? u + "/" + n : "") && (o.pfname = n), (0, _.Ra)(o, s), (o = (0, _.Ua)(t, "rpctoken") || i.rpctoken || s.rpctoken) || (o = s.rpctoken = r.rpctoken || String(Math.round(1e8 * (0, _.Cn)()))), r.rpctoken = o, o = e.location.href, e = (0, _.O)(), (n = (0, _.Yb)(o)) && (e._bsh = n), (o = (0, _.Wb)(o)) && (e.jsh = o), r.hintInFragment ? (0, _.Ra)(e, s) : (0, _.Ra)(e, i), (0, _.db)(t, i, s, r.paramsSerializer);
    };
    var hc = function(e) {
        (0, _.fb)(!e || (0, _.Fb)(e), "Illegal url for new iframe - " + e);
    }, qb = function(e, t, n, r, i) {
        hc(n.src);
        var s, o = nb(r, n), u = o ? ob(r) : "";
        try {
            s = e.createElement('<iframe frameborder="' + (0, _.gb)(String(n.frameborder)) + '" scrolling="' + (0, _.gb)(String(n.scrolling)) + '" ' + u + ' name="' + (0, _.gb)(String(n.name)) + '"/>');
        } catch (a) {
            s = e.createElement("iframe"), o && (s.onload = function() {
                s.onload = _.s, o.call(this);
            }, pb(r));
        }
        for (var f in n) e = n[f], "style" === f && "object" == typeof e ? (0, _.Ra)(e, s.style) : rb[f] || s.setAttribute(f, String(e));
        return (f = i && i.beforeNode || _.s) || i && i.dontclear || (0, _.eb)(t), t.insertBefore(s, f), s = f ? f.previousSibling : t.lastChild, n.allowtransparency && (s.allowTransparency = _.r), s;
    }, jc = function(e, t) {
        if (!kc) {
            var n = (0, _.Dn)(), r = (0, _.Un)(), i = (0, _.ep)(), s = (0, _.P)("googleapis.config/signedIn") === _.u ? "_/im/" : "";
            s && (i = ""), kc = {
                socialhost: (0, _.P)("iframes/:socialhost:"),
                session_index: n || "0",
                session_delegate: r,
                session_prefix: i,
                im_prefix: s
            };
        }
        return kc[t] || "";
    };
    _.mc = function(e) {
        return (0, _.ua)(_.Ja, e.replace(nc, jc));
    }, _.tb = function(e, t, n) {
        var r = n || {};
        n = r.attributes || {}, (0, _.fb)(!r.allowPost || !n.onload, "onload is not supported by post iframe");
        var i = n = e;
        _.zd.test(n) && (i = (0, _.P)("iframes/" + i.substring(1) + "/url"), (0, _.fb)(!!i, "Unknown iframe url config for - " + n)), e = (0, _.mc)(i), n = t.ownerDocument || _.Ja, i = (0, _.ha)(n, r), e = (0, _.qa)(n, e, i, r);
        var s = (0, _.O)();
        (0, _.Ra)(_.vb, s), (0, _.Ra)(r.attributes, s), s.name = s.id = i, s.src = e, r.eurl = e;
        if ((r || {}).allowPost && 2e3 < e.length) {
            var o = (0, _.bb)(e);
            s.src = "", s["data-postorigin"] = e, e = qb(n, t, s, i);
            var u;
            if (-1 != window.navigator.userAgent.indexOf("WebKit")) {
                u = e.contentWindow.document, u.open();
                var s = u.createElement("div"), a = {}, f = i + "_inner";
                a.name = f, a.src = "", a.style = "display:none", qb(n, s, a, f, r);
            }
            r = (0, _.Za)(o.mb[0]), o.mb = [], s = (0, _.ab)(o), o = n.createElement("form"), o.action = s, o.method = "POST", o.target = i, o.style.display = "none";
            for (i = 0; i < r.length; i++) s = n.createElement("input"), s.type = "hidden", s.name = r[i][0], s.value = r[i][1], o.appendChild(s);
            t.appendChild(o), o.submit(), o.parentNode.removeChild(o), u && u.close(), t = e;
        } else t = qb(n, t, s, i, r);
        return t;
    };
    var kc, ub, rb;
    _.vb = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    }, rb = {
        allowtransparency: _.r,
        onload: _.r
    }, ub = 0;
    var nc;
    _.zd = /^:[\w]+$/, nc = /:([a-zA-Z_]+):/g;
    var wb = function() {}, xb = function() {
        this.b = [], this.j = [], this.o = [], this.i = [], this.i[0] = 128;
        for (var e = 1; 64 > e; ++e) this.i[e] = 0;
        this.reset();
    }, yb = function(e, t, n) {
        n || (n = 0);
        var r = e.o;
        if ((0, _.fa)(t)) for (var i = 0; 16 > i; i++) r[i] = t.charCodeAt(n) << 24 | t.charCodeAt(n + 1) << 16 | t.charCodeAt(n + 2) << 8 | t.charCodeAt(n + 3), n += 4; else for (i = 0; 16 > i; i++) r[i] = t[n] << 24 | t[n + 1] << 16 | t[n + 2] << 8 | t[n + 3], n += 4;
        for (i = 16; 80 > i; i++) {
            var s = r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16];
            r[i] = (s << 1 | s >>> 31) & 4294967295;
        }
        t = e.b[0], n = e.b[1];
        for (var o = e.b[2], u = e.b[3], a = e.b[4], f, i = 0; 80 > i; i++) 40 > i ? 20 > i ? (s = u ^ n & (o ^ u), f = 1518500249) : (s = n ^ o ^ u, f = 1859775393) : 60 > i ? (s = n & o | u & (n | o), f = 2400959708) : (s = n ^ o ^ u, f = 3395469782), s = (t << 5 | t >>> 27) + s + a + f + r[i] & 4294967295, a = u, u = o, o = (n << 30 | n >>> 2) & 4294967295, n = t, t = s;
        e.b[0] = e.b[0] + t & 4294967295, e.b[1] = e.b[1] + n & 4294967295, e.b[2] = e.b[2] + o & 4294967295, e.b[3] = e.b[3] + u & 4294967295, e.b[4] = e.b[4] + a & 4294967295;
    };
    _.Ap = function() {
        this.b = new xb;
    }, (0, _.J)(xb, wb), xb.prototype.reset = function() {
        this.b[0] = 1732584193, this.b[1] = 4023233417, this.b[2] = 2562383102, this.b[3] = 271733878, this.b[4] = 3285377520, this.k = this.d = 0;
    }, xb.prototype.update = function(e, t) {
        (0, _.kf)(t) || (t = e.length);
        for (var n = t - 64, r = 0, i = this.j, s = this.d; r < t; ) {
            if (0 == s) for (; r <= n; ) yb(this, e, r), r += 64;
            if ((0, _.fa)(e)) {
                for (; r < t; ) if (i[s] = e.charCodeAt(r), ++s, ++r, 64 == s) {
                    yb(this, i), s = 0;
                    break;
                }
            } else for (; r < t; ) if (i[s] = e[r], ++s, ++r, 64 == s) {
                yb(this, i), s = 0;
                break;
            }
        }
        this.d = s, this.k += t;
    }, xb.prototype.xk = function() {
        var e = [], t = 8 * this.k;
        56 > this.d ? this.update(this.i, 56 - this.d) : this.update(this.i, 64 - (this.d - 56));
        for (var n = 63; 56 <= n; n--) this.j[n] = t & 255, t /= 256;
        yb(this, this.j);
        for (n = t = 0; 5 > n; n++) for (var r = 24; 0 <= r; r -= 8) e[t] = this.b[n] >> r & 255, ++t;
        return e;
    }, _.k = _.Ap.prototype, _.k.reset = function() {
        this.b.reset();
    }, _.k.Mo = function(e) {
        this.b.update(e);
    }, _.k.zn = function() {
        return this.b.xk();
    }, _.k.vp = function(e) {
        e = (0, window.unescape)((0, window.encodeURIComponent)(e));
        for (var t = [], n = 0, r = e.length; n < r; ++n) t.push(e.charCodeAt(n));
        this.Mo(t);
    }, _.k.Of = function() {
        for (var e = this.zn(), t = "", n = 0; n < e.length; n++) t += "0123456789ABCDEF".charAt(Math.floor(e[n] / 16)) + "0123456789ABCDEF".charAt(e[n] % 16);
        return t;
    }, _.Cn = function() {
        var e;
        return Jb ? (e = new _.Ia.Uint32Array(1), Ib.getRandomValues(e), e = Number("0." + e[0])) : (e = Ab, e += (0, window.parseInt)(Gb.substr(0, 20), 16), Gb = Eb(Gb), e /= Bb + Math.pow(16, 20)), e;
    };
    var zb = function(e) {
        e = e || _.Ia.event;
        var t = e.screenX + e.clientX << 16, t = t + (e.screenY + e.clientY), t = t * ((new Date).getTime() % 1e6);
        Ab = Ab * t % Bb, 0 < Cb && ++Db == Cb && (0, _.Hb)(_.Ia, "mousemove", zb);
    }, Eb = function(e) {
        var t = new _.Ap;
        return t.vp(e), t.Of();
    }, Ib = _.Ia.crypto, Jb = _.u, Cb = 0, Db = 0, Ab = 1, Bb = 0, Gb = "", Jb = !!Ib && "function" == typeof Ib.getRandomValues;
    Jb || (Bb = 1e6 * (window.screen.width * window.screen.width + window.screen.height), Gb = Eb(_.Ja.cookie + "|" + _.Ja.location + "|" + (new Date).getTime() + "|" + Math.random()), Cb = (0, _.P)("random/maxObserveMousemove") || 0, 0 != Cb && (0, _.Va)(_.Ia, "mousemove", zb)), _.Tz = function() {
        this.Rd = this.Kf = _.s, this.Gh = _.u;
    }, _.Tz.prototype.lc = function(e) {
        if (this.Kf) {
            var t = this.Kf;
            e instanceof _.Tz ? e.Ed(t) : t(e), this.Kf = _.s;
        } else this.Rd = e, this.Gh = _.r;
    }, _.Tz.prototype.Ed = function(e) {
        this.Kf = e;
        if (this.Gh) {
            var t = this.Rd;
            t instanceof _.Tz ? t.Ed(e) : e(t), this.Gh = _.u, this.Rd = _.s;
        }
    };
    var wE, Xz, Zz;
    _.Uz = function(e) {
        return e.Db === e.getContext().Db;
    }, _.Vz = function() {
        return _.r;
    }, _.AD = function(e) {
        for (var t = (0, _.O)(), n = 0; n < e.length; n++) t[e[n]] = _.r;
        return function(e) {
            return !!t[e.Db];
        };
    };
    var Wz = function(e, t) {
        var n = Xz[e];
        return function(e) {
            if (!t.Ma() && ((0, _.fb)(this.origin === t.Db, "Wrong origin " + this.origin + " != " + t.Db), n && 0 < n.length)) for (var r = [], i = this.callback, s = n.length, o = 0; o < n.length; o++) {
                var u = n[o].call(t, e, t), a = (0, _.ma)(function(e, n) {
                    r[e] = n, 0 === --s && (t.Ma() || i(r));
                }, o);
                u && u instanceof _.Tz ? u.Ed(a) : a(u);
            }
        };
    };
    _.Yz = function(e, t, n) {
        (0, _.fb)("_default" != e, "Cannot update default api"), Zz[e] = {
            map: t,
            filter: n
        };
    }, _.$z = function(e, t, n) {
        (0, _.fb)("_default" != e, "Cannot update default api"), (0, _.N)(Zz, e, {
            map: {},
            filter: _.Uz
        }).map[t] = n;
    }, _.aA = function(e, t) {
        (0, _.N)(Zz, "_default", {
            map: {},
            filter: _.Vz
        }).map[e] = t, (0, _.DC)(_.Sm.b, function(n) {
            n.Q(e, t, _.Vz);
        });
    }, _.Xv = function() {
        return _.Sm;
    }, _.bA = function(e) {
        e = e || {}, this.$e = _.u, this.M = (0, _.O)(), this.b = (0, _.O)(), this.j = e._window || _.Ia, this.i = this.j.location.href, this.Ka = (0, _.Ua)(this.i, "pfname", ""), this.R = (0, _.Ua)(this.i, "id", ""), this.j.document.referrer || (0, _.Ua)(this.i, "parent", ""), this.bb = this.R ? this.Ka + "/" + this.R : "", this.Db = _.Rb.Pq(this.i);
        if (this.R) {
            var t = {};
            t.rpcAddr = e._parentRpcAddr || "..", t.retAddr = e._parentRetAddr || this.R, t.origin = _.Rb.Pq((0, _.Ua)(this.i, "parent", this.i)), t.frameName = this.Ka, this.d = this.Pe(t);
        } else this.d = _.s;
    };
    var cA = function(e, t, n) {
        var r = t.canvasUrl;
        if (!r) return n;
        (0, _.fb)(!t.allowPost, "Post is not supported when using canvas url");
        var i = t.url;
        (0, _.fb)(i && _.Rb.Pq(i) === e.Db && _.Rb.Pq(r) === e.Db, "Wrong origin for canvas or hidden url " + r), t.url = r, t.waitForOnload = _.r, delete t.canvasUrl;
        var s = e.j.document;
        return function(e) {
            var t = e.Aa(), r = t.location.hash, r = (0, _.ua)(s, i) + (/#/.test(i) ? r.replace(/^#/, "&") : r);
            t.location.replace(r), n && n(e);
        };
    }, dA = function(e, t, n) {
        var r = t.relayOpen;
        if (r) {
            var i = e.d;
            r instanceof _.$ ? (i = r, t.relayOpen = 0) : 0 < r && (t.relayOpen = r - 1);
            if (i) {
                delete t.openerIframe, (0, _.fb)(!!i.Xn, "Relaying iframe open is disabled");
                if (r = t.style) if (r = _.eA[r]) t.context = e, r(t), t.context = _.p;
                return i.Xn(t, n), _.r;
            }
        }
        return _.u;
    }, fA = function(e, t, n) {
        var r = t.style;
        if (r) {
            if ((0, _.fb)(!!gA, "Defer style is disabled, when requesting style " + r), !_.hA[r]) return iA(r, function() {
                (0, _.fb)(!!_.hA[r], "Fail to load style - " + r), e.open(t, n);
            }), _.r;
            e.G(t);
        }
        return _.u;
    };
    _.$ = function(e, t, n, r) {
        this.$e = _.u, this.Za = e, this.Nc = t, this.bb = n, this.zd = r, this.re = r.retAddr, this.Db = r.origin, this.Ju = r.iframeEl, this.$n = r.where, this.vg = [], this.Ce("_default");
        if ((0, _.Qa)(r, "apis")) for (e = r.apis || [], t = 0; t < e.length; t++) this.Ce(e[t]);
        this.Za.b[n] = this;
    }, _.jA = function(e, t, n, r) {
        e.send(t, n, r, _.Vz);
    };
    var gA = function(e) {
        return _.hA[e];
    }, iA = function(e, t) {
        _.Yi.load("gapi.iframes.style." + e, t);
    }, kA = function(e, t) {
        if ((0, _.Qa)(e, t)) {
            var n = e[t];
            "number" == typeof n && (n = String(n) + "px"), e[t] = n;
        }
    }, lA = function(e, t) {
        function n(e) {
            if (e && i) {
                var n;
                t.Ga && t.pn && (n = function() {
                    t.Ga(_.r);
                }), t.um && t.um.call(r, t.Ya), (0, _.jA)(i, t.message, t.Ya, n), t.Ga && !t.pn && t.Ga(_.r);
            } else t.Ga && t.Ga(_.u);
        }
        var r = e, i = r.d, s = _.r;
        t.filter && (s = t.filter.call(t.qg, t.Ya)), s instanceof _.Tz ? s.Ed(n) : n(s);
    };
    _.mA = function(e, t) {
        var n = {};
        if (t) for (var r in t) (0, _.Qa)(t, r) && (0, _.Qa)(nA, r) && oA.test(t[r]) && (n[r] = t[r]);
        return n;
    }, wE = /^[\w\.\-]*$/, _.k = _.bA.prototype, _.k.Ma = (0, _.y)("$e"), _.k.O = function() {
        if (!this.Ma()) {
            for (var e = 0; e < this.b.length; e++) this.b[e].O();
            this.$e = _.r;
        }
    }, _.k.Tp = (0, _.y)("bb"), _.k.Aa = (0, _.y)("j"), _.k.sj = function(e, t) {
        this.M[e] = t;
    }, _.k.$h = function(e) {
        return this.M[e];
    }, _.k.Pe = function(e) {
        (0, _.fb)(!this.Ma(), "Cannot attach iframe in disposed context"), e.rpcAddr || (e.rpcAddr = e.id), e.retAddr || (e.retAddr = ".."), e.origin || (e.origin = _.Rb.Pq(e.url)), e.frameName || (e.frameName = e.id ? this.bb + "/" + e.id : "");
        var t = e.frameName;
        if (this.b[t]) return this.b[t];
        var n = e.rpcAddr, r = n;
        (0, _.Qa)(e, "origin") && (r = n + "|" + e.origin);
        var i = e.retAddr, s = e.rpctoken;
        s || (s = (s = e.iframeEl) && (s.getAttribute("data-postorigin") || s.src) || e.url, s = (0, _.Ua)(s, "rpctoken")), e._rpcReadyFn = (0, _.Mz)(r, i, s, e._popupWindow), r = ((window.gadgets || {}).rpc || {}).setAuthToken, s && r && r(n, s);
        var o = new _.$(this, n, t, e), u = e.messageHandlersFilter;
        return (0, _.DC)(e.messageHandlers, function(e, t) {
            o.Q(t, e, u);
        }), e.setRpcReady && o.vj(), (0, _.jA)(o, "_g_rpcReady"), o;
    }, _.k.pl = function(e) {
        delete e.frameName;
        var t = e.id;
        !t || wE.test(t) && !this.Aa().document.getElementById(t) || ((0, _.kd)("Ignoring requested iframe ID - " + t), delete e.id);
    }, _.k.cj = function(e) {
        (0, _.fb)(!this.Ma(), "Cannot open iframe in disposed context"), this.G && this.G(e);
        var t = e.frameName;
        if (t && this.b[t]) return this.b[t];
        this.pl(e);
        var n = e.url;
        (0, _.fb)(n, "No url for new iframe"), (e.queryParams = e.queryParams || {}).usegapi = "1";
        if (e.openAsWindow) {
            var r;
            r = this.Aa();
            var i = r.document, t = (0, _.ha)(i, e), n = (0, _.qa)(i, n, t, e);
            e.eurl = n, i = e.openAsWindow, "string" != typeof i && (i = _.p), n = "javascript:window.location.replace(" + _.Ia.JSON.stringify(n.replace(/#/, "\\x23")) + ")", r = r.open(n, t, i), r = {
                id: t,
                dd: r
            }, t = r.id, e._popupWindow = r.dd, (0, _.fb)(!!r.dd, "Open popup window failed");
        } else {
            var s = e.where;
            (0, _.fb)(!!s, "No location for new iframe"), s = (0, _.tb)(n, s, e), e.iframeEl = s, t = s.getAttribute("id");
        }
        return e.rpcAddr = e.id = t, e.origin = _.Rb.Pq(e.eurl), this.qa && this.qa(e, s), s = this.Pe(e), s.wn && s.wn(s, e), "function" == typeof e.onCreate && e.onCreate(s), e.disableRelayOpen || s.Ce("_open"), s;
    }, _.k.open = function(e, t) {
        (0, _.fb)(!this.Ma(), "Cannot open iframe in disposed context");
        var n = cA(this, e, t), r = e.url;
        r && !_.zd.test(r) && (e.url = (0, _.ua)(this.j.document, r));
        if (!(dA(this, e, n) || fA(this, e, n) || dA(this, e, n))) {
            var i, r = function() {
                n && n(i);
            };
            e.waitForOnload && ((0, _.N)(e, "attributes", {}).onload = r), i = this.cj(e), e.waitForOnload || r();
        }
    }, _.k.cq = (0, _.y)("d"), _.k = _.$.prototype, _.k.Ma = (0, _.y)("$e"), _.k.O = function() {
        if (!this.Ma()) {
            for (var e = 0; e < this.vg.length; e++) this.Jd(this.vg[e]);
            delete _.Sm.b[this.Tp()], this.$e = _.r;
        }
    }, _.k.getContext = (0, _.y)("Za"), _.k.Tp = (0, _.y)("bb"), _.k.aa = (0, _.y)("Ju"), _.k.V = (0, _.y)("$n"), _.k.qc = (0, _.ba)("$n"), _.k.vj = function() {
        this.zd._rpcReadyFn();
    }, _.k.Vm = function(e, t) {
        this.zd[e] = t;
    }, _.k.Zf = function(e) {
        return this.zd[e];
    }, _.k.va = (0, _.y)("zd"), _.k.Hh = function() {
        return this.zd.id;
    }, _.k.Pq = (0, _.y)("Db"), _.k.Q = function(e, t, n) {
        (0, _.fb)(!this.Ma(), "Cannot register handler on disposed iframe " + e), (0, _.fb)((n || _.Uz)(this), "Rejecting untrusted message " + e), n = this.bb + ":" + this.Za.bb + ":" + e, 1 == (0, _.N)(Xz, n, []).push(t) && (this.vg.push(e), (0, _.sz)(n, Wz(n, this)));
    }, _.k.Jd = function(e, t) {
        var n = this.bb + ":" + this.Za.bb + ":" + e, r = Xz[n];
        if (r) {
            if (t) {
                var i = _.Nb.call(r, t);
                0 <= i && r.splice(i, 1);
            } else r.splice(0, r.length);
            0 == r.length && (i = _.Nb.call(this.vg, e), 0 <= i && this.vg.splice(i, 1), (0, _.wz)(n));
        }
    }, _.k.fq = (0, _.y)("vg"), _.k.Ce = function(e) {
        this.Ch = this.Ch || [];
        if (!(0 <= _.Nb.call(this.Ch, e))) {
            this.Ch.push(e), e = Zz[e] || {
                map: {}
            };
            for (var t in e.map) (0, _.Qa)(e.map, t) && this.Q(t, e.map[t], e.filter);
        }
    }, _.k.send = function(e, t, n, r) {
        (0, _.fb)(!this.Ma(), "Cannot send message to disposed iframe - " + e), (0, _.fb)((r || _.Uz)(this), "Wrong target for message " + e), (0, _.Az)(this.Nc, this.Za.bb + ":" + this.bb + ":" + e, n, t);
    }, _.k.Lx = (0, _.aa)(), _.k.Kx = function(e, t) {
        (0, _.jA)(this, "_g_ping", t, e);
    }, Xz = (0, _.O)(), Zz = (0, _.O)(), _.Sm = new _.bA, (0, _.aA)("_g_rpcReady", _.$.prototype.vj), (0, _.aA)("_g_discover", _.$.prototype.fq), (0, _.aA)("_g_ping", _.$.prototype.Lx), _.hA = (0, _.O)(), _.eA = (0, _.O)(), _.bA.prototype.G = function(e) {
        var t = e.style;
        if (t) {
            delete e.style;
            var n = _.hA[t];
            (0, _.fb)(n, "No such style: " + t), e.context = this, n(e), e.context = _.p;
        }
    };
    var nA = {
        height: _.r,
        width: _.r
    }, oA = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
    _.$.prototype.Aa = function() {
        if (!(0, _.Uz)(this)) return _.s;
        var e = this.zd._popupWindow;
        if (e) return e;
        for (var t = this.Nc.split("/"), e = this.getContext().Aa(), n = 0; n < t.length && e; n++) var r = t[n], e = ".." === r ? e == e.parent ? e.opener : e.parent : e.frames[r];
        return e;
    }, _.bA.prototype.p = function(e, t, n) {
        var r = _.Sm.d;
        (0, _.DC)(_.Sm.b, function(e) {
            e !== r && (0, _.jA)(e, "_g_wasClosed");
        }), lA(this, {
            message: "_g_closeMe",
            Ya: e,
            Ga: t,
            qg: n,
            filter: this.$h("onCloseSelfFilter")
        });
    }, _.bA.prototype.B = function(e, t, n) {
        e = e || {}, lA(this, {
            message: "_g_restyleMe",
            Ya: e,
            Ga: t,
            qg: n,
            filter: this.$h("onRestyleSelfFilter"),
            pn: _.r,
            um: this.Ld
        });
    }, _.bA.prototype.Ld = function(e) {
        "auto" === e.height && (e.height = _.Ob.ai());
    }, _.k = _.$.prototype, _.k.close = function(e, t) {
        (0, _.jA)(this, "_g_close", e, t);
    }, _.k.sD = function(e, t) {
        (0, _.jA)(this, "_g_restyle", e, t);
    }, _.k.ds = function(e, t) {
        (0, _.jA)(this, "_g_restyleDone", e, t);
    }, _.k.qp = function(e) {
        var t = new _.Tz;
        return this.getContext().p(e, function(e) {
            t.lc(e);
        }, this), t;
    }, _.k.tD = function(e) {
        var t = new _.Tz;
        return this.getContext().B(e, function(e) {
            t.lc(e);
        }, this), t;
    }, _.k.fs = function(e) {
        var t = this.Zf("onRestyle");
        t && t.call(this, e), e = (0, _.mA)(this, e), (t = this.aa()) && e && "object" == typeof e && (kA(e, "height"), kA(e, "width"), (0, _.Ra)(e, t.style));
    }, _.k.rp = function(e) {
        var t = this.Zf("onClose");
        t && t.call(this, e), (e = this.zd._popupWindow) ? e.close() : (e = this.aa()) && e.parentNode && e.parentNode.removeChild(e);
        if (e = this.zd.controller) t = {}, t.frameName = this.Tp(), (0, _.jA)(e, "_g_disposeControl", t);
        this.O();
    }, _.bA.prototype.ye = function(e) {
        this.sj("onCloseSelfFilter", e);
    }, _.bA.prototype.Kh = function(e) {
        this.sj("onRestyleSelfFilter", e);
    }, _.$.prototype.Mx = function(e, t) {
        this.Q("_g_wasRestyled", e, t);
    }, _.$.prototype.Tx = function(e) {
        var t = this.Zf("onClose");
        t && t.call(this, e), this.O();
    }, (0, _.aA)("_g_close", _.$.prototype.qp), (0, _.aA)("_g_closeMe", _.$.prototype.rp), (0, _.aA)("_g_restyle", _.$.prototype.tD), (0, _.aA)("_g_restyleMe", _.$.prototype.fs), (0, _.aA)("_g_wasClosed", _.$.prototype.Tx);
    var ZA = function(e, t, n) {
        var r = e.Nc, i = t.re;
        n.rpcAddr = e.re + "/" + t.Nc, n.retAddr = i + "/" + r, n.frameName = t.Tp(), n.origin = t.Db;
    }, dB = function(e) {
        e.u || (e.u = (0, _.O)(), e.ca = (0, _.O)());
    }, eB = function(e, t, n, r) {
        r = r || [];
        for (var i = 0; i < r.length; i++) {
            var s = r[i];
            if (s && t && t && s.filter.call(e, t)) {
                for (var o = 0; o < s.hk.length; o++) t.Ce(s.hk[o]);
                s.Tc && s.Tc(t, n), r[i] !== s && i--;
            }
        }
    }, fB = /^https?:\/\/[^\/%\\?#\s]+$/i, bB = {
        longdesc: _.r,
        name: _.r,
        src: _.r,
        frameborder: _.r,
        marginwidth: _.r,
        marginheight: _.r,
        scrolling: _.r,
        align: _.r,
        height: _.r,
        width: _.r,
        id: _.r,
        "class": _.r,
        title: _.r,
        tabindex: _.r,
        hspace: _.r,
        vspace: _.r,
        allowtransparency: _.r
    };
    _.bA.prototype.ha = function(e, t) {
        var n = t || {}, r = e.setRpcReady, i = e.iframe, s = n.iframe, o = e.rpctoken;
        if (s) {
            var u = {};
            ZA(i, s, u), u.rpctoken = o, u.role = e.role, u.data = e.data, u.setRpcReady = r;
            var a = {};
            ZA(s, i, a), a.rpctoken = o, a.role = n.role, a.data = n.data, a.setRpcReady = 1, (0, _.jA)(i, "_g_connect", u, function() {
                r || (0, _.jA)(s, "_g_connect", a);
            }), r && (0, _.jA)(s, "_g_connect", a);
        } else n = {
            selfConnect: 1
        }, n.role = e.role, n.data = e.data, (0, _.jA)(i, "_g_connect", n);
    }, _.k = _.$.prototype, _.k.ss = function(e) {
        var t;
        e = e || {}, e.selfConnect || (0, _.fb)(fB.test(e.origin), "Illegal origin for connected iframe - " + e.origin);
        if (e.selfConnect) t = this; else {
            var n = {};
            n.rpctoken = e.rpctoken, n.rpcAddr = e.rpcAddr, n.retAddr = e.retAddr, n.origin = e.origin, t = n.frameName = e.frameName;
            var r = n.setRpcReady = e.setRpcReady;
            t = this.Za.b[t], t ? r && (t.vj(), (0, _.jA)(t, "_g_rpcReady")) : t = this.Za.Pe(n);
        }
        n = this.Za, r = e.role || "", e = e.data, dB(n), r = r || "", (0, _.N)(n.u, r, []).push({
            qg: t.Tp(),
            data: e
        }), eB(n, t, e, n.ca[r]);
    }, _.k.wn = function(e, t) {
        t._relayedDepth || (0, _.jA)(e, "_g_connect", {
            role: "_opener",
            selfConnect: 1
        });
    }, _.k.Xn = function(e, t) {
        var n = this, r = e.messageHandlers, i = e.messageHandlersFilter, s = e.onClose;
        e.messageHandlers = _.s, e.messageHandlersFilter = _.s, e.onClose = _.s, (0, _.jA)(this, "_g_open", e, function(o) {
            var u = o[0], p = u.frameName;
            o = {};
            var d = n.re, v = u.retAddr;
            o.rpcAddr = n.Nc + "/" + u.rpcAddr, o.retAddr = v + "/" + d, o.frameName = p, o.origin = u.origin, o.apis = u.apis, o.rpctoken = e.rpctoken, o.messageHandlers = r, o.messageHandlersFilter = i, o.onClose = s, (u = n.Za.b[p]) || (u = n.Za.Pe(o)), t && t(u);
        });
    }, _.k.pl = function(e) {
        (0, _.fb)(!e.url || (0, _.Fb)(e.url), "Illegal url for new iframe - " + e.url);
        var t = e.attributes || {}, n = {}, r;
        for (r in t) (0, _.Qa)(t, r) && (0, _.Qa)(bB, r) && (n[r] = t[r]);
        (0, _.Qa)(t, "style") && (t = t.style, "object" == typeof t && (n.style = (0, _.mA)(this, t))), e.attributes = n;
    }, _.k.Jx = function(e) {
        e = e || {}, this.pl(e);
        var t = e._relayedDepth || 0;
        e._relayedDepth = t + 1, e.openerIframe = this;
        var n = new _.Tz, r = e.rpctoken;
        return delete e.rpctoken, this.Za.open(e, (0, _.H)(function(e) {
            var i = e.zd.apis, s = {};
            ZA(e, this, s), 0 == t && (s.role = "_opener"), s.setRpcReady = 1, s.rpctoken = r, (0, _.jA)(e, "_g_connect", s), s = {}, s.apis = i, s.rpcAddr = e.Nc, s.retAddr = e.re, s.frameName = e.Tp(), s.origin = e.Db, n.lc(s);
        }, this)), n;
    }, _.bA.prototype.o = function(e, t, n, r) {
        dB(this), n = n || [], e = e || "", t = {
            filter: r || _.Uz,
            Tc: t,
            hk: n
        }, (0, _.N)(this.ca, e, []).push(t), e = this.u[e] || [];
        for (r = 0; r < e.length; r++) eB(this, this.b[e[r].qg], e[r].data, [ t ]);
    }, _.bA.prototype.wc = function(e, t) {
        var n = (0, _.N)(this.ca, e, []);
        if (t) for (var r = 0, i = _.u; !i && r < n.length; r++) n[r].Tc === t && (i = _.r, n.splice(r, 1)); else n.splice(0, n.length);
    }, _.bA.prototype.k = function(e, t, n) {
        function r(t) {
            i.wc("_opener", r), e && e.call(this, t);
        }
        var i = this;
        this.o("_opener", r, t, n);
    }, _.$.prototype.Px = function(e) {
        this.getContext().k(function(t) {
            t.send("_g_wasRestyled", e);
        }, _.s, _.Vz);
    };
    var gB = _.Sm.d;
    gB && gB.Q("_g_restyleDone", _.$.prototype.Px, _.Vz), (0, _.aA)("_g_connect", _.$.prototype.ss);
    var hB = {};
    hB._g_open = _.$.prototype.Jx, (0, _.Yz)("_open", hB, _.Vz), (0, _.$z)("gapi.load", "_g_gapi.load", function(e) {
        var t = new _.Tz;
        return _.Yi.load(e.features || "", function() {
            t.lc();
        }), t;
    }), _.bA.prototype.qa = function(e, t) {
        var n = e.controller;
        if (n) {
            (0, _.fb)(n.Db === e.origin, "Wrong controller origin " + this.Db + " !== " + e.origin);
            var r = e.rpcAddr;
            e.rpcAddr = n.Nc, e.retAddr = n.re;
            var i = {};
            i.rpcAddr = r, i.controllerData = e.controllerData, (0, _.Va)(t, "load", function() {
                n.send("_g_control", i);
            });
        }
    }, _.$.prototype.Lt = function(e) {
        for (var t = e.rpcAddr, n = (this.Nc + "/" + t).split("/"), r = this.Za.j, i; (i = n.shift()) && r; ) r = ".." == i ? r.parent : r.frames[i];
        (0, _.fb)(!!r, "Bad rpc address " + t), e._window = r, e._parentRpcAddr = this.Nc, e._parentRetAddr = this.re, t = new _.bA(e), this.Gv && this.Gv(t, e.controllerData), this.Ph = this.Ph || [], this.Ph.push([ t, e.controllerData ]);
    }, _.$.prototype.Ot = function(e) {
        e = e.frameName;
        for (var t = this.Ph || [], n = 0; n < t.length; n++) if (t[n].bb === e) {
            e = t.splice(n, 1)[0], e.O(), this.Xw && this.Xw(e);
            return;
        }
        (0, _.fb)(_.u, "Unknown contolled iframe to dispose - " + e);
    }, (0, _.$z)("control", "_g_control", _.$.prototype.Lt), (0, _.$z)("control", "_g_disposeControl", _.$.prototype.Ot), _.Pb.ft = function(e) {
        var t = [];
        if (1 < arguments.length) for (var n = 0, r; r = arguments[n]; ++n) t.push(r); else t = e;
        return function(e) {
            for (var n = 0; t[n]; ++n) if (e === t[n]) return _.r;
            return _.u;
        };
    }, _.Pb.Dt = function(e) {
        return function(t) {
            return e.test(t);
        };
    }, _.Pb.Sn = function(e) {
        return "undefined" != typeof e;
    }, _.Pb.yt = function(e) {
        return "string" == typeof e && 0 < e.length;
    }, _.Pb.at = function(e) {
        return "boolean" == typeof e;
    }, _.Pb.rt = function(e) {
        return function(t) {
            for (var n in e) if (e.hasOwnProperty(n) && !(0, e[n])(t[n])) return _.u;
            return _.r;
        };
    }, _.R = _.R || {}, _.R.Dg = function(e, t, n) {
        for (var r = [], i = 2, s = arguments.length; i < s; ++i) r.push(arguments[i]);
        return function() {
            for (var n = r.slice(), i = 0, s = arguments.length; i < s; ++i) n.push(arguments[i]);
            return t.apply(e, n);
        };
    }, _.R.nf = function(e) {
        var t, n, r = {};
        for (t = 0; n = e[t]; ++t) r[n] = n;
        return r;
    }, _.R = _.R || {}, function() {
        function e(e) {
            t = e["core.util"] || {};
        }
        var t = {}, n = {};
        _.Pb && _.Pb.Q("core.util", _.s, e), _.R.Nt = function(e) {
            return "undefined" == typeof t[e] ? _.s : t[e];
        }, _.R.hasFeature = function(e) {
            return "undefined" != typeof t[e];
        }, _.R.Rt = function() {
            return n;
        };
    }();
    var yk;
    _.ow = function() {
        _.mw = "oauth2relay" + String(2147483647 * (0, _.Vb)() | 0), _.uk.proxy = _.mw;
    }, yk = {}, _.uk = {}, (0, _.ow)();
    var xE = (0, _.P)("oauth-flow/client_id");
    _.uk.client_id = xE;
    var yE = _.uk, zE, BE = (0, _.P)("oauth-flow/redirectUri");
    if (BE) zE = BE.replace(/[#][\s\S]*/, ""); else {
        var CE = _.Rb.Pq(window.location.href);
        zE = [ (0, _.P)("oauth-flow/callbackUrl"), "?x_origin=", (0, window.encodeURIComponent)(CE) ].join("");
    }
    yE.redirect_uri = zE, _.uk.origin = _.Rb.Pq(window.location.href), _.uk.response_type = "token";
    var __OAUTH2_URI = yk.kt, __OAUTH2_RELAY_URI = yk.jt, __OAUTH2_CALLBACK_URI = yk.LD, __OAUTH2_REDIRECT_URI = yk.ND, __OAUTH2_PROXY_URI = yk.MD, nw, hk, xk, kk, jk, qk, JE;
    _.Wj = function(e, t) {
        return (0, _.Hx)(e, t);
    };
    var EE = function(e) {
        return e ? (e = e.split("="), e[1] ? e[1].split("|") : []) : [];
    }, FE = function(e) {
        return e = e.split(":"), {
            Yx: e[0].split("=")[1],
            Rx: EE(e[1]),
            dy: EE(e[2]),
            Zx: EE(e[3])
        };
    }, GE = function(e) {
        var t, n = _.s;
        _.vE.iterate(function(e, r) {
            if (0 === e.indexOf("G_AUTHUSER_")) {
                var i = (0, _.tE)(e.substring(11));
                if (!t || i.Gb && !t.Gb || i.Gb == t.Gb && i.Ke > t.Ke) t = i, n = r;
            }
        });
        var r = e && (0, _.DE)(e);
        if (n !== _.s) {
            var i;
            _.Gv.iterate(function(e, n) {
                var s = (0, _.uE)(e);
                s && s.uf && (r && s.ep != r || s.Gb == t.Gb && s.Ke == t.Ke && (i = n));
            });
            if (i && (e = (e = FE(i)) && e.Rx[Number(n)])) return {
                Xx: n,
                ey: e
            };
        }
        return _.s;
    }, HE = function(e) {
        return "true" === String(e.immediate);
    }, ak = function(e) {
        var t = e === _.r, n = (0, _.Hx)(_.p, _.p);
        _.bk && window.setTimeout(function() {
            (0, _.bk)(t, n);
        }, 0);
    }, pw = function(e, t) {
        var n = _.s;
        e && t && (n = t.client_id = t.client_id || e.client_id, t.scope = t.scope || e.scope, t.g_user_cookie_policy = e.cookie_policy, t.cookie_policy = t.cookie_policy || (e.cookie_policy ? "single_host_origin" : _.p), t.response_type = t.response_type || e.response_type);
        if (t) {
            t.issued_at || (t.issued_at = String((0, _.Fn)()));
            var r = (0, window.parseInt)(t.expires_in, 10) || 86400;
            t.error && (r = (0, _.P)("oauth-flow/errorMaxAge") || 86400), t.expires_in = String(r), t.expires_at || (t.expires_at = String((0, _.Fn)() + r)), e && HE(e) || (t["g-oauth-window"] = (qk || {}).popup), t._aa || t.error || GE(n) != _.s || !HE(e) || (t._aa = "1");
        }
        return t;
    }, IE = function(e) {
        if ((0, _.P)("oauth-flow/toastCfg") && !(0, _.P)("isSignedOut") && 0 <= (" " + (e.scope || "") + " ").indexOf(" https://www.googleapis.com/auth/plus.login ")) {
            var t = (0, _.P)("oauth-flow/toast/position");
            if ("1" === e._aa && (e._aa = "0", !JE)) {
                JE = _.r;
                var n = window.document.createElement("div");
                "top" !== t && (t = "bottom"), n.style.cssText = "position:fixed;" + t + ":20px;width:100%;z-index:1000;display:none;";
                var r = window.document.createElement("div");
                r.style.cssText = "float:left;position:relative;left:50%;", n.appendChild(r), t = window.document.createElement("div"), t.style.cssText = "float:left;position:relative;left:-50%", r.appendChild(t), r = window;
                try {
                    for (; r.parent != r && r.parent.document; ) r = r.parent;
                } catch (i) {}
                r.document.body.insertBefore(n, window.document.body.firstChild), _.Sm.cj({
                    url: ":socialhost:/:session_prefix:_/widget/oauthflow/toast",
                    queryParams: {
                        clientId: e.client_id,
                        idToken: e.id_token
                    },
                    where: t,
                    onClose: function() {
                        n.parentNode.removeChild(n);
                    },
                    onRestyle: function() {
                        n.style.display = "";
                    }
                });
            }
        }
    };
    _.ck = function(e, t) {
        var n, r;
        "string" == typeof e ? (n = t, r = e) : (n = e, r = "token");
        if (n) {
            var i = (0, _.Ev)(n, _.r);
            if (i) {
                var s;
                if ((s = n) && s.session_state) {
                    var o = [], u = [], a = [], f = (0, window.parseInt)(s.authuser, 10) || 0;
                    o[f] = s.session_state, u[f] = s.issued_at, a[f] = s.expires_at, s = [ "C=" + s.client_id, "S=" + o.join("|"), "I=" + u.join("|"), "X=" + a.join("|") ].join(":");
                } else s = _.s;
                s && i.Kc.write(s), "token" == r && (i = (0, _.st)(n.g_user_cookie_policy), !i || i.Gb && !_.Gt ? i = _.s : (s = "G_AUTHUSER_" + (_.Gt && i.Gb ? "S" : "H") + i.Ke, o = _.Mv[s], o || (o = new _.vE(s, (0, _.vv)(i)), _.Mv[s] = o), i = o), i && n.session_state && !n.error && i.write(n.authuser || "0"));
            }
        }
        if (r = "token" !== r ? (0, _.Cv)(r) : (0, _.Ev)(n)) if (n) {
            if (r.Kc.write(n), !_.Jv || r.Fj && "token" !== _.Jv) _.Jv = r.key;
        } else r.Kc.clear(), _.Jv = _.s;
        ak(_.r);
    };
    var lk = function(e, t) {
        var n = t && t.key || "token";
        e = pw(t && t.params, e), IE(e), (0, _.ck)(n, e), e = (0, _.Hx)(n, _.p);
        if (t) {
            (n = t.iframe) && n.parentNode.removeChild(n);
            var n = t.popup, r = t.after_redirect;
            if (n && "keep_open" != r) try {
                n.close();
            } catch (i) {}
            t.timeout && (window.clearTimeout(t.timeout), t.timeout = _.s), t.callback && (t.callback(e), t.callback = _.s);
        }
    }, wk = function(e, t) {
        return e != _.s ? (0, _.ea)(e) ? [].concat(e).concat(t) : [ e ].concat(t) : [].concat(t);
    }, ik = function() {
        var e = hk;
        if (e !== _.s) {
            hk = _.s;
            for (var t = 0, n = e.length; t < n; t++) e[t]();
        }
    }, ek = function(e) {
        var t = _.mw;
        return function(n) {
            if (this.f == t && this.t == _.T.Wd(this.f) && this.origin == _.T.$d(this.f)) return e.apply(this, arguments);
        };
    }, rk = function(e, t) {
        var n = e || {}, r;
        for (r in _.uk) (0, _.kf)(n[r]) || (n[r] = _.uk[r]);
        _.vk != _.s && 0 < _.vk.length && (n.scope = wk(n.scope, _.vk), n.state = wk(n.state, _.vk)), e = n, n = (0, _.P)("googleapis/overrideClientId"), n != _.s && (e.client_id = n);
        if (!e.redirect_uri || "postmessage" === e.redirect_uri) {
            n = e, r = e.state || "", r = String(r);
            var i = "";
            if ({}.hasOwnProperty.call(xk, r)) i = xk[r]; else {
                for (var s = 2147483647 * (0, _.Vb)() | 0; ; ) {
                    i = String(s);
                    if (!{}.hasOwnProperty.call(jk, i)) break;
                    s += (0, _.Vb)();
                }
                jk[i] = r, xk[r] = i;
            }
            n.state = i + "|" + (0, _.Vb)(), kk[e.state] = t;
        }
        return n = e.authorize_uri || (0, _.P)("oauth-flow/authUrl"), delete e.authorize_uri, n += 0 < n.indexOf("?") ? "&" : "?", n += (0, _.Zj)(e), n = (0, _.Xb)(n);
    };
    _.gk = function(e) {
        if (hk === _.s) e && e(); else {
            e && hk.push(e), e = _.mw;
            var t = window.document.getElementById(e), n = (new Date).getTime();
            if (t) {
                if (nw && 6e4 > n - nw) return;
                t.parentNode.removeChild(t);
                if (/Firefox/.test(window.navigator.userAgent)) try {
                    window.frames[e] = _.p;
                } catch (r) {}
                (0, _.ow)(), e = _.mw;
            }
            nw = n;
            var i = String(2147483647 * (0, _.Vb)() | 0);
            _.T.Q("oauth2relayReady:" + i, ek(function() {
                _.T.Jd("oauth2relayReady:" + i), ik();
            })), _.T.Q("oauth2relayReady", ek(function() {
                ik();
            })), t = ek(function(e) {
                var t = _.R.oa;
                e = t(e);
                var n = t = e.state, n = n.replace(/\|.*$/, "");
                e.state = {}.hasOwnProperty.call(jk, n) ? jk[n] : _.s, e.state != _.s && (n = kk[t], delete kk[t], lk(e, n));
            }), _.T.Q("oauth2callback:" + i, t), _.T.Q("oauth2callback", t);
            var t = [ (0, _.P)("oauth-flow/proxyUrl") || (0, _.P)("oauth-flow/relayUrl"), "?parent=", (0, window.encodeURIComponent)(_.Rb.Pq(window.location.href)), "#rpctoken=", i, "&forcesecure=1" ].join(""), n = _.R.Jk(), s = _.R.Fh({
                name: e,
                id: e
            });
            s.src = t, s.style.width = "1px", s.style.height = "1px", s.style.position = "absolute", s.style.left = "-100px", n.appendChild(s), _.T.tf(e);
        }
    };
    var Ix = function(e, t) {
        for (var n = e.split(" "), r = t.split(" "), i = (0, _.O)(), s = 0, o = r.length; s < o; ++s) r[s] && (i[r[s]] = 1);
        s = 0;
        for (o = n.length; s < o; ++s) if (n[s] && !i[n[s]]) return _.u;
        return _.r;
    }, Jx = function(e) {
        if (!e) return _.s;
        var t, n, r = (0, _.DE)(e);
        return _.Hv.iterate(function(e) {
            var i = (0, _.uE)(e);
            i && i.uf && i.ep === r && (!t || i.Gb && !t.Gb || i.Gb == t.Gb && i.Ke > t.Ke) && (t = i, n = e);
        }), n;
    }, insert_iframe = function(e) {
        var t = _.R.Jk(), n = _.R.Fh();
        n.src = e.uri, n.style.width = "1px", n.style.height = "1px", n.style.position = "absolute", n.style.left = "-100px", e.timeout = window.setTimeout(function() {
            n.parentNode && n.parentNode.removeChild(n);
        }, 3e5), t.appendChild(n);
    }, mk = function(e, t) {
        if (qk) {
            var n = qk.popup, r = qk.after_redirect;
            if (n && "keep_open" != r) try {
                n.close();
            } catch (i) {}
        }
        return n = qk = {}, "key" in e && (n.key = e.key, delete e.key), qk.params = e, qk.callback = function(n) {
            (t || (0, _.x)())(pw(e, n));
        }, n.uri = rk(e, n), n;
    };
    _.rA = function(e, t) {
        (0, _.gk)(function() {
            _.T.call(_.mw, "check_session_state", function(e) {
                t.call(_.s, e);
            }, e.session_state, e.client_id);
        });
    };
    var fz = function(e) {
        e = _.R.oa("#" + (0, _.Zj)(e));
        if (!HE(e)) return _.s;
        var t = e.key || Jx(e.client_id);
        return (t = (0, _.Hx)(t, _.r, _.r)) && t.client_id === e.client_id && Ix(e.scope, t.scope) && Ix(e.response_type, t.response_type) ? t : _.s;
    }, qA = function(e, t) {
        var n = _.R.oa();
        e.Vt = n.lang || n.hl;
        var r = mk(e, t);
        e.after_redirect && (r.after_redirect = e.after_redirect);
        if (e.scope != _.s) {
            var i = function() {
                (0, _.gk)(function() {
                    if (r.popup)
                        r.popup.focus();
                    else if (HE(e))
                        insert_iframe(r); 
                    else {
                        var t = Math.min((0, _.P)("oauth-flow/authWindowWidth", 650), window.screen.width - 20), n = Math.min((0, _.P)("oauth-flow/authWindowHeight", 600), window.screen.height - 30);
                        qk.popup = window.open(r.uri, "_blank", [ "toolbar=no", "location=" + (window.opera ? "no" : "yes"), "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", "width=" + t, "height=" + n, "top=" + (window.screen.height - n) / 2, "left=" + (window.screen.width - t) / 2 ].join());
                    }
                });
            }, s = fz(e);
            !(0, _.P)("oauth-flow/disableOpt") && s ? (0, _.rA)(s, function(e) {
                e ? lk(s, qk) : i();
            }) : i();
        } else lk(_.s, qk);
    };
    _.sk = function(e, t) {
        var n = e || {}, r = t || (0, _.x)();
        if ((0, _.P)("oauth-flow/disableOpt") || (0, _.P)("isLoggedIn") || !HE(n)) qA(n, r); else {
            var i = (0, _.O)();
            i.client_id = n.client_id, i.session_state = _.s, (0, _.rA)(i, function(e) {
                e ? (e = (0, _.O)(), e.error = "immediate_failed_user_logged_out", r(pw(n, e))) : ((0, _.Fa)("isLoggedIn", _.r), qA(n, r));
            });
        }
    }, _.Ck = function(e, t, n) {
        return function(t, r) {
            var i = _.s;
            if ((0, _.ea)(t)) {
                for (var s = 0; s < t.length; s++) if (401 === t[s].status) {
                    i = t[s];
                    break;
                }
            } else 401 === t.status && (i = t);
            if (i !== _.s) {
                var o;
                e : {
                    for (var u in i.headers) if ("www-authenticate" == u.toLowerCase()) {
                        o = i.headers[u];
                        break;
                    }
                    if (o != _.s && (i = o.indexOf("allowed-scopes="), 0 <= i && (i += 15, o = o.substring(i + 1, o.length - 1)))) {
                        o = [ o.split(",").pop() ];
                        break e;
                    }
                    o = [];
                }
                o && Dk(o, e, n);
            }
            n(t, r);
        };
    };
    var Dk = function(e, t, n) {
        var r = (0, _.ea)(t) ? t : [ t ];
        (0, _.sk)({
            scope: e,
            immediate: _.r
        }, function(e) {
            if (e && !e.error && (e = e.access_token)) {
                e = "Bearer " + e;
                for (var t = 0; t < r.length; t++) r[t].headers || (r[t].headers = {}), r[t].headers.Authorization = e;
                _.Bk.Dd("makeHttpRequests", r, n);
            }
        });
    };
    JE = _.u, jk = {}, kk = {}, xk = {}, hk = [], nw = 0, _.Ek = {
        Ff: _.sk,
        Br: _.rA,
        Qe: _.Qj.Qe,
        $f: _.Wj,
        Wk: function(e, t) {
            (0, _.gk)(function() {
                var n = _.mw, r = _.Qj.Qe() || "", i = _.s, s = _.s;
                r && (s = r.split(" "), 2 == s.length && (i = s[1])), i ? _.T.call(n, "get_versioninfo", function(t) {
                    e(t);
                }, i, t) : e();
            });
        },
        ba: _.gk,
        Ym: _.ck
    }, (0, _.Q)("gapi.auth.authorize", _.Ek.Ff), (0, _.Q)("gapi.auth.checkSessionState", _.Ek.Br), (0, _.Q)("gapi.auth.getAuthHeaderValueForFirstParty", _.Ek.Qe), (0, _.Q)("gapi.auth.getToken", _.Ek.$f), (0, _.Q)("gapi.auth.getVersionInfo", _.Ek.Wk), (0, _.Q)("gapi.auth.init", _.Ek.ba), (0, _.Q)("gapi.auth.setToken", _.Ek.Ym);
    var ___;
    _.Yl = window.tamings___ || [], _.Zl = window.caja___, ___ = window.___;
    var $l = function(e, t, n) {
        this.method = e, this.transport = t, this.rpc = n;
    };
    _.L.Ui = function() {
        function e(e) {
            var t = {
                method: e.request.method,
                id: e.key
            };
            return e.request.rpc && (t.params = e.request.rpc), t;
        }
        var t = {}, n = [];
        return t.execute = function(t) {
            function r(e) {
                e.error && (i.error = e.error);
                for (var r = 0; r < n.length; r++) {
                    var s = n[r].key, u = e[s];
                    u && (i[s] = u.error ? u : u.data || u.result);
                }
                o--, 0 === o && t(i);
            }
            for (var i = {}, s = {}, o = 0, u = [], l = 0; l < n.length; l++) {
                var c = n[l].request.transport;
                s[c.name] || (u.push(c), o++), s[c.name] = s[c.name] || [], s[c.name].push(e(n[l]));
            }
            for (l = 0; l < u.length; l++) u[l].execute(s[u[l].name], r);
            0 == o && window.setTimeout(function() {
                t(i);
            }, 0);
        }, t.add = function(e, r) {
            return r && e && n.push({
                key: e,
                request: r
            }), t;
        }, t;
    }, _.L.qh = function(e, t) {
        if ("newBatch" !== e) {
            for (var n = e.split("."), r = window.osapi, i = 0; i < n.length - 1; i++) r[n[i]] = r[n[i]] || {}, r = r[n[i]];
            var s = n[n.length - 1];
            r[s] ? (r.__dupwarn || (0, _.Lb)("Skipping duplicate osapi method definition " + e + " on transport " + t.name + "; others may exist, but suppressing warnings"), r.__dupwarn = _.r) : (r[s] = function(n) {
                return n = n || {}, n.userId = n.userId || "@viewer", n.groupId = n.groupId || "@self", new $l(e, t, n);
            }, "undefined" != typeof _.Yl && _.Yl.push(function() {
                _.Zl.markTameAsFunction(r[s], e);
            }));
        }
    }, $l.prototype.execute = function(e) {
        var t = "undefined" != typeof _.Zl && _.Zl.getUseless && _.Zl.getUseless(), n = t ? _.Zl.getUseless() : this, r = t ? _.Zl.untame(e) : e;
        e = _.L.Ui(), e.add(this.method, this), e.execute(function(e) {
            e.error ? r.call(n, e.error) : r.call(n, e[n.method]);
        });
    };
    var am = function(e, t) {
        for (var n = e.split("."), r = t || window, i; i = n.shift(); ) {
            if (r[i] == _.s) return _.s;
            r = r[i];
        }
        return r;
    }, bm = function(e, t, n) {
        e = e.split("."), n = n || window, e[0] in n || !n.execScript || n.execScript("var " + e[0]);
        for (var r; e.length && (r = e.shift()); ) e.length || t === _.p ? n = n[r] ? n[r] : n[r] = {} : n[r] = t;
    }, cm = function(e, t) {
        _.L.qh(e, {
            name: "googleapis",
            execute: dm,
            root: t
        });
        var n = am(e, window.osapi);
        bm(e, n);
        if (0 != e.indexOf("googleapis.")) {
            var r = e.substring(e.indexOf(".") + 1), i = r.lastIndexOf(".delete");
            -1 != i && i + 7 == r.length && (r = r.replace(".delete", ".remove")), bm("googleapis." + r, n);
        }
    };
    _.em = function(e) {
        for (var t in e) e.hasOwnProperty(t) && (fm[t] = e[t]);
    }, _.gm = function(e) {
        hm("key", e);
    };
    var hm = function(e, t) {
        t == _.s ? im(e) : (_.jm = _.jm || {}, _.jm[e] = t);
    }, im = function(e) {
        _.jm && delete _.jm[e];
    }, km = function(e) {
        e = e || {};
        if (window.navigator) {
            for (var t = [ "appVersion", "platform", "userAgent" ], n = [], r = 0; r < t.length; r++) window.navigator[t[r]] && n.push((0, window.encodeURIComponent)(t[r]) + "=" + (0, window.encodeURIComponent)(window.navigator[t[r]]));
            e["X-ClientDetails"] = n.join("&");
        }
        return e;
    }, lm = function(e, t) {
        for (var n = 0; n < mm.length; n++) window.setTimeout(function(t) {
            return function() {
                t(e);
            };
        }(mm[n]), 1);
        return function() {
            var e = arguments;
            t.apply(_.s, e);
            for (var n = 0; n < nm.length; n++) window.setTimeout(function(t) {
                return function() {
                    t.apply(_.s, e);
                };
            }(nm[n]), 1);
        };
    }, om = function(e) {
        e.applicationName = pm, e.clientVersion = "1.0.0-alpha", _.jm && (e.urlParams = _.jm, _.jm.key && (e.developerKey = _.jm.key));
    }, dm = function(e, t) {
        for (var n = this.root || _.s, r = 0; r < e.length; r++) {
            var i = e[r], s = i.method.substring(0, i.method.indexOf("."));
            i.jsonrpc = "2.0", i.key = i.id, n = i.root || n, (s = fm[s] || "v1") && !i.apiVersion && (i.apiVersion = s);
        }
        r = {}, r = _.Bk.Md(r), r = km(r), n = {
            requests: e,
            headers: r,
            root: n
        }, om(n), r = lm(e, t), _.Bk.Dd("makeRequest", n, r);
    }, qm = function(e) {
        mm.push(e);
    }, rm = function(e) {
        nm.push(e);
    }, sm = function(e) {
        for (var t = 0; t < mm.length; t++) if (mm[t] == e) {
            mm.splice(t, 1);
            break;
        }
    }, tm = function(e) {
        for (var t = 0; t < nm.length; t++) if (nm[t] == e) {
            nm.splice(t, 1);
            break;
        }
    }, um = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            i.key = i.id;
            var s = i.params.headers || {}, s = _.Bk.Md(s), s = km(s);
            i.params.headers = s, om(i.params);
        }
        n = lm(e, t), _.Bk.Dd("makeHttpRequests", e, n);
    }, vm = function() {
        var e = _.R.oa(), t = {
            debug: "googleapis.config/debug"
        }, n;
        for (n in t) e[n] && (0, _.Fa)(t[n], "true" == e[n]);
        for (var r in (0, _.P)("googleapis.config/methods")) cm(r);
        (0, _.P)("googleapis.config/versions") && (0, _.em)((0, _.P)("googleapis.config/versions")), (0, _.P)("googleapis.config/developerKey") && (0, _.gm)((0, _.P)("googleapis.config/developerKey")), _.L.qh("googleapis.newHttpRequest", {
            name: "googleapis",
            execute: um
        }), bm("googleapis.newHttpRequest", am("googleapis.newHttpRequest", window.osapi));
    }, wm = function() {
        this.d = {}, this.b = _.L.Ui();
    }, nm, mm, fm, pm;
    pm = _.s, fm = {}, mm = [], nm = [], vm(), wm.prototype.add = function(e, t, n) {
        return this.d[e] = n, this.b.add(e, t), this;
    }, wm.prototype.execute = function(e) {
        var t = this;
        this.b.execute(function(n) {
            var r = {}, i = _.u, s;
            for (s in n) if (n.hasOwnProperty(s)) {
                var o = n[s], u = t.d[s];
                u ? u(o) : (r[s] = o, i = _.r);
            }
            i && e && e(r);
        });
    }, (0, _.Q)("googleapis.ApiClient.register", cm), (0, _.Q)("googleapis.ApiClient.setVersions", _.em), (0, _.Q)("googleapis.ApiClient.setDeveloperKey", _.gm), (0, _.Q)("googleapis.ApiClient.setUrlParameter", hm), (0, _.Q)("googleapis.ApiClient.removeUrlParameter", im), (0, _.Q)("googleapis.ApiClient.addExecuteListener", qm), (0, _.Q)("googleapis.ApiClient.addResponseListener", rm), (0, _.Q)("googleapis.ApiClient.removeExecuteListener", sm), (0, _.Q)("googleapis.ApiClient.removeResponseListener", tm), (0, _.Q)("googleapis.ApiClient.init", vm), (0, _.Q)("googleapis.Batch", wm), (0, _.Q)("googleapis.Batch.prototype.add", wm.prototype.add), (0, _.Q)("googleapis.Batch.prototype.execute", wm.prototype.execute), (0, _.Q)("googleapis.init", function() {
        vm();
    }), (0, _.Q)("googleapis.newBatch", function() {
        return new wm;
    }), (0, _.Q)("googleapis.newRequest", function(e, t, n) {
        t = t || {};
        var r = {
            name: "googleapis",
            execute: dm,
            root: n
        }, i = _.L.Ui(), s = this;
        return n = {}, n.method = e, n.transport = r, n.rpc = t, n.execute = function(n) {
            i.add(e, {
                method: e,
                rpc: t,
                transport: r
            }), i.execute(function(t) {
                t.error ? n.call(s, t.error) : n.call(s, t[e]);
            });
        }, n;
    }), (0, _.Q)("googleapis.register", function(e, t) {
        cm(e, t);
    }), (0, _.Q)("googleapis.setUrlParameter", function(e, t) {
        hm(e, t);
    }), (0, _.Q)("googleapis.removeUrlParameter", function(e) {
        im(e);
    }), (0, _.Q)("googleapis.setDeveloperKey", function(e) {
        (0, _.gm)(e);
    }), (0, _.Q)("googleapis.setApplicationName", function(e) {
        pm = e;
    }), (0, _.Q)("googleapis.setVersions", function(e) {
        (0, _.em)(e);
    }), (0, _.Q)("googleapis.addExecuteListener", function(e) {
        qm(e);
    }), (0, _.Q)("googleapis.removeExecuteListener", function(e) {
        sm(e);
    }), (0, _.Q)("googleapis.addResponseListener", function(e) {
        rm(e);
    }), (0, _.Q)("googleapis.removeResponseListener", function(e) {
        tm(e);
    }), (0, _.Q)("googleapis.addTransportInitListener", function(e) {
        _.Bk.Xo(e);
    }), (0, _.Q)("googleapis.removeTransportInitListener", function(e) {
        _.Bk.Wr(e);
    }), _.ne = 2147483648 * Math.random() | 0, _.qe = function(e) {
        return "number" == typeof e;
    }, _.se = function(e) {
        Error.captureStackTrace ? Error.captureStackTrace(this, _.se) : this.stack = Error().stack || "", e && (this.message = String(e));
    }, _.ue = function(e, t, n) {
        e : {
            for (var r = e.length, i = (0, _.fa)(e) ? e.split("") : e, s = 0; s < r; s++) if (s in i && t.call(n, i[s], s, e)) {
                t = s;
                break e;
            }
            t = -1;
        }
        return 0 > t ? _.s : (0, _.fa)(e) ? e.charAt(t) : e[t];
    }, _.ve = function(e, t) {
        return 0 <= (0, _.we)(e, t);
    }, _.xe = function(e, t) {
        var n = (0, _.we)(e, t), r;
        return (r = 0 <= n) && _.ye.splice.call(e, n, 1), r;
    }, _.ze = function(e) {
        var t = e.length;
        if (0 < t) {
            for (var n = Array(t), r = 0; r < t; r++) n[r] = e[r];
            return n;
        }
        return [];
    }, _.Ae = function(e, t, n) {
        return 2 >= arguments.length ? _.ye.slice.call(e, t) : _.ye.slice.call(e, t, n);
    }, (0, _.J)(_.se, Error), _.se.prototype.name = "CustomError", _.ye = Array.prototype, _.we = _.ye.indexOf ? function(e, t, n) {
        return _.ye.indexOf.call(e, t, n);
    } : function(e, t, n) {
        n = n == _.s ? 0 : 0 > n ? Math.max(0, e.length + n) : n;
        if ((0, _.fa)(e)) return (0, _.fa)(t) && 1 == t.length ? e.indexOf(t, n) : -1;
        for (; n < e.length; n++) if (n in e && e[n] === t) return n;
        return -1;
    }, _.Be = _.ye.forEach ? function(e, t, n) {
        _.ye.forEach.call(e, t, n);
    } : function(e, t, n) {
        for (var r = e.length, i = (0, _.fa)(e) ? e.split("") : e, s = 0; s < r; s++) s in i && t.call(n, i[s], s, e);
    }, _.Ce = _.ye.filter ? function(e, t, n) {
        return _.ye.filter.call(e, t, n);
    } : function(e, t, n) {
        for (var r = e.length, i = [], s = 0, o = (0, _.fa)(e) ? e.split("") : e, u = 0; u < r; u++) if (u in o) {
            var a = o[u];
            t.call(n, a, u, e) && (i[s++] = a);
        }
        return i;
    }, _.De = _.ye.map ? function(e, t, n) {
        return _.ye.map.call(e, t, n);
    } : function(e, t, n) {
        for (var r = e.length, i = Array(r), s = (0, _.fa)(e) ? e.split("") : e, o = 0; o < r; o++) o in s && (i[o] = t.call(n, s[o], o, e));
        return i;
    }, _.Ee = _.ye.some ? function(e, t, n) {
        return _.ye.some.call(e, t, n);
    } : function(e, t, n) {
        for (var r = e.length, i = (0, _.fa)(e) ? e.split("") : e, s = 0; s < r; s++) if (s in i && t.call(n, i[s], s, e)) return _.r;
        return _.u;
    }, _.Fe = _.ye.every ? function(e, t, n) {
        return _.ye.every.call(e, t, n);
    } : function(e, t, n) {
        for (var r = e.length, i = (0, _.fa)(e) ? e.split("") : e, s = 0; s < r; s++) if (s in i && !t.call(n, i[s], s, e)) return _.u;
        return _.r;
    }, _.qf = function(e, t, n) {
        for (var r in e) t.call(n, e[r], r, e);
    }, _.rf = function(e) {
        var t = {}, n;
        for (n in e) t[n] = e[n];
        return t;
    }, _.sf = function(e, t) {
        for (var n, r, i = 1; i < arguments.length; i++) {
            r = arguments[i];
            for (n in r) e[n] = r[n];
            for (var s = 0; s < tf.length; s++) n = tf[s], Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
    }, _.uf = function(e) {
        var t = arguments.length;
        if (1 == t && (0, _.ea)(arguments[0])) return _.uf.apply(_.s, arguments[0]);
        for (var n = {}, r = 0; r < t; r++) n[arguments[r]] = _.r;
        return n;
    };
    var tf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), LA, yn, KA, Ze, Ye, Xe, We, Ve, Ie, Je, Ke, Le, Me;
    _.Ge = function(e) {
        return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    }, _.He = function(e, t) {
        return t ? e.replace(Ie, "&amp;").replace(Je, "&lt;").replace(Ke, "&gt;").replace(Le, "&quot;") : Me.test(e) ? (-1 != e.indexOf("&") && (e = e.replace(Ie, "&amp;")), -1 != e.indexOf("<") && (e = e.replace(Je, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(Ke, "&gt;")), -1 != e.indexOf('"') && (e = e.replace(Le, "&quot;")), e) : e;
    }, _.gh = function() {}, _.Ne = function() {
        return _.D.navigator ? _.D.navigator.userAgent : _.s;
    };
    var Oe = function() {
        return _.D.navigator;
    }, Pe = function() {
        var e = _.D.document;
        return e ? e.documentMode : _.p;
    };
    _.B = function(e) {
        var t;
        if (!(t = Zk[e])) {
            t = 0;
            for (var n = (0, _.Ge)(String(Se)).split("."), r = (0, _.Ge)(String(e)).split("."), i = Math.max(n.length, r.length), s = 0; 0 == t && s < i; s++) {
                var o = n[s] || "", u = r[s] || "", a = RegExp("(\\d*)(\\D*)", "g"), f = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var l = a.exec(o) || [ "", "", "" ], c = f.exec(u) || [ "", "", "" ];
                    if (0 == l[0].length && 0 == c[0].length) break;
                    t = ((0 == l[1].length ? 0 : (0, window.parseInt)(l[1], 10)) < (0 == c[1].length ? 0 : (0, window.parseInt)(c[1], 10)) ? -1 : (0 == l[1].length ? 0 : (0, window.parseInt)(l[1], 10)) > (0 == c[1].length ? 0 : (0, window.parseInt)(c[1], 10)) ? 1 : 0) || ((0 == l[2].length) < (0 == c[2].length) ? -1 : (0 == l[2].length) > (0 == c[2].length) ? 1 : 0) || (l[2] < c[2] ? -1 : l[2] > c[2] ? 1 : 0);
                } while (0 == t);
            }
            t = Zk[e] = 0 <= t;
        }
        return t;
    }, _.Te = function(e) {
        return _.W && Ue >= e;
    }, Me = /[&<>\"]/, Le = /\"/g, Ke = />/g, Je = /</g, Ie = /&/g, Ze = Ye = Xe = We = Ve = _.u;
    var Yv;
    if (Yv = (0, _.Ne)()) {
        var JA = Oe();
        Ve = 0 == Yv.indexOf("Opera"), We = !Ve && -1 != Yv.indexOf("MSIE"), Ye = (Xe = !Ve && -1 != Yv.indexOf("WebKit")) && -1 != Yv.indexOf("Mobile"), Ze = !Ve && !Xe && "Gecko" == JA.product;
    }
    _.cf = Ve, _.W = We, _.df = Ze, _.ef = Xe, _.ff = Ye, KA = Oe(), yn = KA && KA.platform || "", _.$e = -1 != yn.indexOf("Mac"), _.Eh = -1 != yn.indexOf("Win"), _.tk = -1 != yn.indexOf("Linux"), _.zn = !!Oe() && -1 != (Oe().appVersion || "").indexOf("X11");
    e : {
        var MA = "", OA;
        if (_.cf && _.D.opera) var PA = _.D.opera.version, MA = "function" == typeof PA ? PA() : PA; else if (_.df ? OA = /rv\:([^\);]+)(\)|;)/ : _.W ? OA = /MSIE\s+([^\);]+)(\)|;)/ : _.ef && (OA = /WebKit\/(\S+)/), OA) var QA = OA.exec((0, _.Ne)()), MA = QA ? QA[1] : "";
        if (_.W) {
            var VA = Pe();
            if (VA > (0, window.parseFloat)(MA)) {
                LA = String(VA);
                break e;
            }
        }
        LA = MA;
    }
    var Se = LA, Zk = {}, $A = _.D.document, Ue = $A && _.W ? Pe() || ("CSS1Compat" == $A.compatMode ? (0, window.parseInt)(Se, 10) : 5) : _.p;
    _.Ki = function(e) {
        var t = [], n = 0, r;
        for (r in e) t[n++] = r;
        return t;
    }, _.Li = function(e) {
        var t = [], n = 0, r;
        for (r in e) t[n++] = e[r];
        return t;
    }, _.Mi = function() {}, _.Pi = function(e, t) {
        this.d = {}, this.b = [];
        var n = arguments.length;
        if (1 < n) {
            n % 2 && (0, _.m)(Error("q"));
            for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]);
        } else if (e) {
            e instanceof _.Pi ? (n = e.$b(), r = e.Va()) : (n = (0, _.Ki)(e), r = (0, _.Li)(e));
            for (var i = 0; i < n.length; i++) this.set(n[i], r[i]);
        }
    };
    var Qi = function(e) {
        if (e.W != e.b.length) {
            for (var t = 0, n = 0; t < e.b.length; ) {
                var r = e.b[t];
                (0, _.Ri)(e.d, r) && (e.b[n++] = r), t++;
            }
            e.b.length = n;
        }
        if (e.W != e.b.length) {
            for (var i = {}, n = t = 0; t < e.b.length; ) r = e.b[t], (0, _.Ri)(i, r) || (e.b[n++] = r, i[r] = 1), t++;
            e.b.length = n;
        }
    };
    _.Ri = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, _.Ni = function(e) {
        if ("function" == typeof e.Va) return e.Va();
        if ((0, _.fa)(e)) return e.split("");
        if ((0, _.re)(e)) {
            for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r]);
            return t;
        }
        return (0, _.Li)(e);
    }, _.hD = function(e) {
        if ("function" == typeof e.$b) return e.$b();
        if ("function" != typeof e.Va) {
            if ((0, _.re)(e) || (0, _.fa)(e)) {
                var t = [];
                e = e.length;
                for (var n = 0; n < e; n++) t.push(n);
                return t;
            }
            return (0, _.Ki)(e);
        }
    }, _.Oi = function(e, t, n) {
        if ("function" == typeof e.forEach) e.forEach(t, n); else if ((0, _.re)(e) || (0, _.fa)(e)) (0, _.Be)(e, t, n); else for (var r = (0, _.hD)(e), i = (0, _.Ni)(e), s = i.length, o = 0; o < s; o++) t.call(n, i[o], r && r[o], e);
    }, _.Si = "StopIteration" in _.D ? _.D.StopIteration : Error("w"), _.Mi.prototype.vb = function() {
        (0, _.m)(_.Si);
    }, _.Mi.prototype.xc = function() {
        return this;
    }, _.k = _.Pi.prototype, _.k.W = 0, _.k.Bf = 0, _.k.Da = (0, _.y)("W"), _.k.Va = function() {
        Qi(this);
        for (var e = [], t = 0; t < this.b.length; t++) e.push(this.d[this.b[t]]);
        return e;
    }, _.k.$b = function() {
        return Qi(this), this.b.concat();
    }, _.k.eb = function() {
        return 0 == this.W;
    }, _.k.clear = function() {
        this.d = {}, this.Bf = this.W = this.b.length = 0;
    }, _.k.remove = function(e) {
        return (0, _.Ri)(this.d, e) ? (delete this.d[e], this.W--, this.Bf++, this.b.length > 2 * this.W && Qi(this), _.r) : _.u;
    }, _.k.get = function(e, t) {
        return (0, _.Ri)(this.d, e) ? this.d[e] : t;
    }, _.k.set = function(e, t) {
        (0, _.Ri)(this.d, e) || (this.W++, this.b.push(e), this.Bf++), this.d[e] = t;
    }, _.k.U = function() {
        return new _.Pi(this);
    }, _.k.xc = function(e) {
        Qi(this);
        var t = 0, n = this.b, r = this.d, i = this.Bf, s = this, o = new _.Mi;
        return o.vb = function() {
            for (;;) {
                i != s.Bf && (0, _.m)(Error("z")), t >= n.length && (0, _.m)(_.Si);
                var o = n[t++];
                return e ? o : r[o];
            }
        }, o;
    }, _.Ti = function(e) {
        return Array.prototype.join.call(arguments, "");
    }, _.jr = function(e, t) {
        var n = e.length - t.length;
        return 0 <= n && e.indexOf(t, n) == n;
    }, _.Ui = function(e, t, n, r, i, s, o) {
        var u = "";
        return e && (u += e + ":"), n && (u += "//", t && (u += t + "@"), u += n, r && (u += ":" + r)), i && (u += i), s && (u += "?" + s), o && (u += "#" + o), u;
    }, _.Vi = function(e) {
        if (Wi) {
            Wi = _.u;
            var t = _.D.location;
            if (t) {
                var n = t.href;
                n && (n = (n = (0, _.Vi)(n)[3] || _.s) && (0, window.decodeURIComponent)(n)) && n != t.hostname && (Wi = _.r, (0, _.m)(Error()));
            }
        }
        return e.match(Xi);
    }, _.Zi = function(e) {
        if (e[1]) {
            var t = e[0], n = t.indexOf("#");
            0 <= n && (e.push(t.substr(n)), e[0] = t = t.substr(0, n)), n = t.indexOf("?"), 0 > n ? e[1] = "?" : n == t.length - 1 && (e[1] = _.p);
        }
        return e.join("");
    }, _.$i = function(e, t, n) {
        if ((0, _.ea)(t)) for (var r = 0; r < t.length; r++) (0, _.$i)(e, String(t[r]), n); else t != _.s && n.push("&", e, "" === t ? "" : "=", (0, window.encodeURIComponent)(String(t)));
    }, _.aj = function(e, t) {
        for (var n in t) (0, _.$i)(n, t[n], e);
        return e;
    };
    var Xi = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), Wi = _.ef, bj = function(e) {
        return _.ye.concat.apply(_.ye, arguments);
    };
    _.cj = function(e, t) {
        var n;
        e instanceof _.cj ? (this.td = (0, _.kf)(t) ? t : e.td, (0, _.dj)(this, e.mc), (0, _.ej)(this, e.Af), (0, _.WD)(this, e.Bb), (0, _.gj)(this, e.bx), this.bd(e.Rc()), (0, _.hj)(this, e.b.U()), this.se(e.Yf())) : e && (n = (0, _.Vi)(String(e))) ? (this.td = !!t, (0, _.dj)(this, n[1] || "", _.r), (0, _.ej)(this, n[2] || "", _.r), (0, _.WD)(this, n[3] || "", _.r), (0, _.gj)(this, n[4]), this.bd(n[5] || "", _.r), (0, _.hj)(this, n[6] || "", _.r), this.se(n[7] || "", _.r)) : (this.td = !!t, this.b = new _.ij(_.s, _.s, this.td));
    }, _.dj = function(e, t, n) {
        return jj(e), e.mc = n ? t ? (0, window.decodeURIComponent)(t) : "" : t, e.mc && (e.mc = e.mc.replace(/:$/, "")), e;
    }, _.ej = function(e, t, n) {
        return jj(e), e.Af = n ? t ? (0, window.decodeURIComponent)(t) : "" : t, e;
    }, _.WD = function(e, t, n) {
        return jj(e), e.Bb = n ? t ? (0, window.decodeURIComponent)(t) : "" : t, e;
    }, _.gj = function(e, t) {
        return jj(e), t ? (t = Number(t), ((0, window.isNaN)(t) || 0 > t) && (0, _.m)(Error("B`" + t)), e.bx = t) : e.bx = _.s, e;
    }, _.hj = function(e, t, n) {
        return jj(e), t instanceof _.ij ? (e.b = t, kj(e.b, e.td)) : (n || (t = lj(t, mj)), e.b = new _.ij(t, _.s, e.td)), e;
    }, _.nj = function(e, t, n) {
        return jj(e), e.b.set(t, n), e;
    }, _.up = function(e, t) {
        return e.b.get(t);
    }, _.tp = function(e, t) {
        return jj(e), e.b.remove(t), e;
    };
    var jj = function(e) {
        e.HC && (0, _.m)(Error("C"));
    };
    _.Kp = function(e, t) {
        return e instanceof _.cj ? e.U() : new _.cj(e, t);
    };
    var lj = function(e, t) {
        return (0, _.fa)(e) ? (0, window.encodeURI)(e).replace(t, oj) : _.s;
    }, oj = function(e) {
        return e = e.charCodeAt(0), "%" + (e >> 4 & 15).toString(16) + (e & 15).toString(16);
    };
    _.ij = function(e, t, n) {
        this.b = e || _.s, this.d = !!n;
    };
    var pj = function(e) {
        if (!e.xa && (e.xa = new _.Pi, e.W = 0, e.b)) for (var t = e.b.split("&"), n = 0; n < t.length; n++) {
            var r = t[n].indexOf("="), i = _.s, s = _.s;
            0 <= r ? (i = t[n].substring(0, r), s = t[n].substring(r + 1)) : i = t[n], i = (0, window.decodeURIComponent)(i.replace(/\+/g, " ")), i = qj(e, i), e.add(i, s ? (0, window.decodeURIComponent)(s.replace(/\+/g, " ")) : "");
        }
    }, rj = function(e, t) {
        return pj(e), t = qj(e, t), (0, _.Ri)(e.xa.d, t);
    };
    _.qE = function(e, t, n) {
        e.remove(t), 0 < n.length && (e.b = _.s, e.xa.set(qj(e, t), (0, _.ze)(n)), e.W += n.length);
    };
    var qj = function(e, t) {
        var n = String(t);
        return e.d && (n = n.toLowerCase()), n;
    }, kj = function(e, t) {
        t && !e.d && (pj(e), e.b = _.s, (0, _.Oi)(e.xa, function(e, t) {
            var n = t.toLowerCase();
            t != n && (this.remove(t), (0, _.qE)(this, n, e));
        }, e)), e.d = t;
    };
    _.k = _.cj.prototype, _.k.mc = "", _.k.Af = "", _.k.Bb = "", _.k.bx = _.s, _.k.Ox = "", _.k.Wh = "", _.k.HC = _.u, _.k.td = _.u, _.k.toString = function() {
        var e = [], t = this.mc;
        t && e.push(lj(t, sj), ":");
        if (t = this.Bb) {
            e.push("//");
            var n = this.Af;
            n && e.push(lj(n, sj), "@"), e.push((0, window.encodeURIComponent)(String(t))), t = this.bx, t != _.s && e.push(":", String(t));
        }
        if (t = this.Rc()) this.Bb && "/" != t.charAt(0) && e.push("/"), e.push(lj(t, "/" == t.charAt(0) ? tj : uj));
        return (t = this.b.toString()) && e.push("?", t), (t = this.Yf()) && e.push("#", lj(t, vj)), e.join("");
    }, _.k.lc = function(e) {
        var t = this.U(), n = !!e.mc;
        n ? (0, _.dj)(t, e.mc) : n = !!e.Af, n ? (0, _.ej)(t, e.Af) : n = !!e.Bb, n ? (0, _.WD)(t, e.Bb) : n = e.bx != _.s;
        var r = e.Rc();
        if (n) (0, _.gj)(t, e.bx); else if (n = !!e.Ox) {
            if ("/" != r.charAt(0)) if (this.Bb && !this.Ox) r = "/" + r; else {
                var i = t.Rc().lastIndexOf("/");
                -1 != i && (r = t.Rc().substr(0, i + 1) + r);
            }
            i = r;
            if (".." == i || "." == i) r = ""; else if (-1 != i.indexOf("./") || -1 != i.indexOf("/.")) {
                for (var r = 0 == i.lastIndexOf("/", 0), i = i.split("/"), s = [], o = 0; o < i.length; ) {
                    var u = i[o++];
                    "." == u ? r && o == i.length && s.push("") : ".." == u ? ((1 < s.length || 1 == s.length && "" != s[0]) && s.pop(), r && o == i.length && s.push("")) : (s.push(u), r = _.r);
                }
                r = s.join("/");
            } else r = i;
        }
        return n ? t.bd(r) : n = "" !== e.b.toString(), n ? (0, _.hj)(t, e.b.toString() ? (0, window.decodeURIComponent)(e.b.toString()) : "") : n = !!e.Wh, n && t.se(e.Yf()), t;
    }, _.k.U = function() {
        return new _.cj(this);
    }, _.k.Rc = (0, _.y)("Ox"), _.k.bd = function(e, t) {
        return jj(this), this.Ox = t ? e ? (0, window.decodeURIComponent)(e) : "" : e, this;
    }, _.k.uj = function(e, t) {
        return (0, _.hj)(this, e, t);
    }, _.k.eq = function() {
        return this.b.toString();
    }, _.k.Yf = (0, _.y)("Wh"), _.k.se = function(e, t) {
        return jj(this), this.Wh = t ? e ? (0, window.decodeURIComponent)(e) : "" : e, this;
    };
    var sj = /[#\/\?@]/g, uj = /[\#\?:]/g, tj = /[\#\?]/g, mj = /[\#\?@]/g, vj = /#/g;
    _.k = _.ij.prototype, _.k.xa = _.s, _.k.W = _.s, _.k.Da = function() {
        return pj(this), this.W;
    }, _.k.add = function(e, t) {
        pj(this), this.b = _.s, e = qj(this, e);
        var n = this.xa.get(e);
        return n || this.xa.set(e, n = []), n.push(t), this.W++, this;
    }, _.k.remove = function(e) {
        return pj(this), e = qj(this, e), (0, _.Ri)(this.xa.d, e) ? (this.b = _.s, this.W -= this.xa.get(e).length, this.xa.remove(e)) : _.u;
    }, _.k.clear = function() {
        this.xa = this.b = _.s, this.W = 0;
    }, _.k.eb = function() {
        return pj(this), 0 == this.W;
    }, _.k.$b = function() {
        pj(this);
        for (var e = this.xa.Va(), t = this.xa.$b(), n = [], r = 0; r < t.length; r++) for (var i = e[r], s = 0; s < i.length; s++) n.push(t[r]);
        return n;
    }, _.k.Va = function(e) {
        pj(this);
        var t = [];
        if (e) rj(this, e) && (t = bj(t, this.xa.get(qj(this, e)))); else {
            e = this.xa.Va();
            for (var n = 0; n < e.length; n++) t = bj(t, e[n]);
        }
        return t;
    }, _.k.set = function(e, t) {
        return pj(this), this.b = _.s, e = qj(this, e), rj(this, e) && (this.W -= this.xa.get(e).length), this.xa.set(e, [ t ]), this.W++, this;
    }, _.k.get = function(e, t) {
        var n = e ? this.Va(e) : [];
        return 0 < n.length ? String(n[0]) : t;
    }, _.k.toString = function() {
        if (this.b) return this.b;
        if (!this.xa) return "";
        for (var e = [], t = this.xa.$b(), n = 0; n < t.length; n++) for (var r = t[n], i = (0, window.encodeURIComponent)(String(r)), r = this.Va(r), s = 0; s < r.length; s++) {
            var o = i;
            "" !== r[s] && (o += "=" + (0, window.encodeURIComponent)(String(r[s]))), e.push(o);
        }
        return this.b = e.join("&");
    }, _.k.U = function() {
        var e = new _.ij;
        return e.b = this.b, this.xa && (e.xa = this.xa.U(), e.W = this.W), e;
    }, _.k.lq = function(e) {
        for (var t = 0; t < arguments.length; t++) (0, _.Oi)(arguments[t], function(e, t) {
            this.add(t, e);
        }, this);
    };
    var OE = function(e, t, n) {
        t = (0, _.hD)(e), "undefined" == typeof t && (0, _.m)(Error("D")), n = new _.ij(_.s, _.s, n), e = (0, _.Ni)(e);
        for (var r = 0; r < t.length; r++) {
            var i = t[r], s = e[r];
            (0, _.ea)(s) ? (0, _.qE)(n, i, s) : n.add(i, s);
        }
        return n;
    }, TE = function(e, t, n, r, i, s, o, u) {
        return u = new _.cj(_.s, u), e && (0, _.dj)(u, e), t && (0, _.ej)(u, t), n && (0, _.WD)(u, n), r && (0, _.gj)(u, r), i && u.bd(i), s && (0, _.hj)(u, s), o && u.se(o), u;
    }, xm = function(e, t) {
        var n = "/discovery/v1/apis/";
        return n += (0, window.encodeURIComponent)(e) + "/" + (0, window.encodeURIComponent)(t) + "/rpc?fields=methods%2f*%2fid&pp=0";
    }, UE = function(e, t) {
        var n = "/discovery/v1/apis/";
        return n += (0, window.encodeURIComponent)(e) + "/" + (0, window.encodeURIComponent)(t) + "/rest?fields=servicePath%2Cresources&pp=0";
    }, ym = function(e) {
        if (e) {
            for (var t = [], n = 0; n < VE.length; n++) {
                var r = window.navigator[VE[n]];
                r && t.push((0, window.encodeURIComponent)(VE[n]) + "=" + (0, window.encodeURIComponent)(r));
            }
            e["X-ClientDetails"] = t.join("&");
        }
    }, Am = function() {
        var e = (0, _.P)("client/name", "google-api-javascript-client");
        return e in Bm ? e : "google-api-javascript-client";
    }, Cm = function() {
        return (0, _.P)("client/version", "1.1.0-beta");
    }, WE = function(e, t, n, r) {
        e && t || (0, _.m)("Missing required parameters.");
        var i = n || (0, _.x)();
        Dm({
            path: xm(e, t),
            callback: function(n) {
                if (n.error) i(n); else {
                    var s = {};
                    s[e] = t, Hm(s);
                    for (var o in n) if (n.hasOwnProperty(o) && "methods" == o) {
                        var s = n[o], u;
                        for (u in s) s.hasOwnProperty(u) && Fm(u, r);
                    }
                    i.call(_.s);
                }
            },
            root: r
        });
    }, XE = function(e, t, n, r) {
        e && t || (0, _.m)("Missing required parameters.");
        var i = n || (0, _.x)();
        Dm({
            path: UE(e, t),
            callback: function(n) {
                function s(e) {
                    var t = e.servicePath;
                    (0, _.DC)(e.resources || [], function(e) {
                        (0, _.DC)(e.methods, function(e) {
                            YE(t, e, r);
                        });
                    });
                }
                if (n.error) i(n); else {
                    var o = {};
                    o[e] = t, Hm(o), s(n), i.call();
                }
            },
            root: r && r.root
        });
    }, Dm = function(e) {
        var t;
        "object" == typeof e && (t = e.callback, delete e.callback), e = new Em(e);
        if (!t) return e;
        e.execute(t);
    }, Fm = function(e, t) {
        ZE("gapi.client.register", [ "rpcDeprecated" ], [ "migrated", "complete" ]), e || (0, _.m)("Missing required parameters");
        for (var n = e.split("."), r = window.gapi.client, i = 0; i < n.length - 1; i++) {
            var s = n[i];
            r[s] = r[s] || {}, r = r[s];
        }
        n = n[n.length - 1], r[n] || (t = t || {}, r[n] = function(n) {
            var r;
            return r = "string" == typeof t ? t : t.root, n && n.root && (r = n.root), new Gm({
                method: e,
                apiVersion: t.apiVersion,
                rpcParams: n,
                transport: {
                    name: "googleapis",
                    root: r
                }
            });
        });
    }, YE = function(e, t, n) {
        e && t && t.id && t.path && t.httpMethod || (0, _.m)("Missing required parameters");
        var r = t.id.split("."), i = window.gapi.client, s;
        for (s = 0; s < r.length - 1; s++) {
            var o = r[s];
            i[o] = i[o] || {}, i = i[o];
        }
        r = r[s], i[r] || (n && n.hasOwnProperty("root") && (i.ROOT_ = n.root), i[r] = function(n, r) {
            "/" != e.charAt(0) && (e = "/" + e), "/" != e.charAt(e.length - 1) && "/" != t.path.charAt(0) && (e += "/");
            var s = e + t.path;
            return n = (0, _.rf)(n), new Dm({
                path: $E(s, t.parameters, n),
                method: t.httpMethod,
                params: n,
                body: r,
                root: n.root || i.ROOT_
            });
        });
    }, $E = function(e, t, n) {
        return (0, _.DC)(t, function(t, r) {
            "path" == t.location && (n.hasOwnProperty(r) ? (e = e.replace("{" + r + "}", String(n[r])), delete n[r]) : (0, _.m)("Required path parameter " + r + " is missing."));
        }), e;
    }, aF = function(e) {
        return new bF(e);
    }, Hm = function(e) {
        (0, _.em)(e);
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (Im[t] = e[t]);
    }, ZE = function(e, t, n) {
        var r = (0, _.P)("client/rms");
        (0, _.ve)(t, r) ? (0, _.kd)(e + " is deprecated.") : (0, _.ve)(n, r) && (0, _.m)(e + " is discontinued.");
    }, bF = function(e) {
        this.b = [], this.d = e || _.s, this.j = !!e, this.i = _.s;
    }, cF = function(e, t) {
        return (0, _.H)(function(e, n) {
            this.Mh(e, n, t);
        }, e);
    }, dF = function(e, t) {
        return e && t && (0, _.Qa)(e, t = t.toLowerCase()) || (0, _.m)("Unable to retrieve header."), e[t];
    }, eF = function(e, t) {
        function n(e, t) {
            (0, _.DC)(e, function(e, n) {
                t.push(n + ": " + e);
            });
        }
        var r = [], i = e.b;
        n({
            "Content-Type": "application/http",
            "Content-Transfer-Encoding": "binary",
            "Content-ID": "<" + t + ">"
        }, r), r.push("");
        var s = OE(i.params), s = TE("", "", "", "", i.path, s).toString();
        return r.push(i.method + " " + s), n(i.headers, r), r.push(""), i.body && r.push(i.body), r.join("\r\n");
    }, fF = function(e) {
        function t(e) {
            var t = 0;
            return (0, _.DC)(e, function() {
                t++;
            }), t;
        }
        if (!e) return _.s;
        e = e.split("\r\n");
        for (var n = 0, r = {
            headers: {},
            body: ""
        }; n < e.length && "" == e[n]; ) n++;
        r.outerHeaders = gF(e, n);
        var n = n + (t(r.outerHeaders) + 1), i = e[n++].split(" ");
        r.status = i[1], r.statusText = i[2], r.headers = gF(e, n), n += t(r.headers) + 1;
        for (i = []; n < e.length; n++) i.push(e[n]);
        return r.body = i.join("\r\n"), r;
    }, gF = function(e, t) {
        for (var n = (0, _.O)(), r = t; r < e.length && e[r]; ) {
            var i = e[r].split(": "), s = (0, _.Ge)(i[0].toLowerCase()), i = (0, _.Ge)(i[1]);
            n[s] = i, r++;
        }
        return n;
    }, Em = function(e) {
        (!e || "object" != typeof e && "string" != typeof e) && (0, _.m)("Invalid request parameters"), e = "string" == typeof e ? {
            path: e
        } : e, e.path || (0, _.m)('Missing required parameter: "path"'), this.b = {
            path: e.path,
            method: e.method || "GET",
            params: e.params || {},
            headers: e.headers || {},
            body: e.body,
            root: e.root
        };
    }, Jm = function(e, t) {
        var n = t.headers, r = n["Content-Type"];
        t.body && !r && (r = "application/json", n["Content-Type"] = r), "application/json" == r && (t.params.alt = "json"), t.key = t.id, n = _.Bk.Md(n), ym(n), (n = _.jm.key) && !t.params.key && (t.params.key = n);
    }, Km = function(e, t) {
        var n = e.b, r = {};
        r.key = t;
        var i = {};
        return i.id = n.id, i.key = n.key, i.url = n.path, i.httpMethod = n.method, i.body = n.body, i.headers = n.headers, i.urlParams = n.params, i.root = n.root, i.clientName = Am(), i.clientVersion = Cm(), r.params = i, r;
    }, Lm = function() {
        this.b = [], this.i = this.d = _.s;
    }, Mm = function(e, t) {
        return function(n, r) {
            e.Mh(n, r, t);
        };
    }, Gm = function(e) {
        e && "object" == typeof e || (0, _.m)("Missing rpc parameters"), e.method || (0, _.m)("Missing rpc method"), this.b = e;
    }, Nm = function(e) {
        return (e = e.b.transport) ? e.root || _.s : _.s;
    }, Om = function(e, t) {
        return function(n, r) {
            var i;
            if (n) {
                if (n.error) i = n.error, i.error == _.s && (i.error = (0, _.rf)(n.error)); else if (i = n.result || n.data, (0, _.Vg)(i) && i.result == _.s && (i.result = (0, _.rf)(n.result || n.data)), (0, _.Vg)(i) && i._subscription && e.d) {
                    var s = i._subscription, o = e.d, u = Nm(e);
                    Pm[++Qm] = o, _.T.Q("_invalidate", Rm), _.Bk.Dd("listen", {
                        root: u,
                        headers: _.Bk.Md(),
                        callback: Qm,
                        subscription: s
                    });
                }
            } else i = _.u;
            t(i, r);
        };
    }, Rm = function(e) {
        var t = Pm[e.Ga];
        t && t(e.mu, e.data);
    }, VE = [ "appVersion", "platform", "userAgent" ], Bm = {
        "google-api-javascript-client": _.r,
        "google-api-gwt-client": _.r
    }, Im = {};
    (0, _.gm)(_.s), (0, _.Q)("gapi.client.load", function(e, t, n, r) {
        var i = (0, _.P)("client/rms");
        "migrated" == i || "complete" == i ? XE(e, t, n, {
            root: r
        }) : WE(e, t, n, r);
    }), (0, _.Q)("gapi.client.newBatch", function(e) {
        var t = (0, _.P)("client/rms");
        return "migrated" == t || "complete" == t ? aF(e) : new Lm;
    }), (0, _.Q)("gapi.client.newRpcBatch", function() {
        return ZE("gapi.client.newRpcBatch", [ "rpcDeprecated", "migrated" ], [ "complete" ]), new Lm;
    }), (0, _.Q)("gapi.client.newHttpBatch", aF), (0, _.Q)("gapi.client.register", Fm), (0, _.Q)("gapi.client.request", Dm), (0, _.Q)("gapi.client.rpcRequest", function(e, t, n) {
        return ZE("gapi.client.rpcRequest", [ "rpcDeprecated", "migrated" ], [ "complete" ]), e || (0, _.m)("Missing required parameter method."), new Gm({
            method: e,
            apiVersion: t,
            rpcParams: n,
            transport: {
                name: "googleapis",
                root: n && n.root || ""
            }
        });
    }), (0, _.Q)("gapi.client.setApiKey", _.gm), (0, _.Q)("gapi.client.setApiVersions", Hm);
    var hF = /<response-(.*)>/, iF = /^application\/http(;.*$|$)/;
    bF.prototype.add = function(e, t) {
        t = t || {};
        var n = (0, _.O)(), r = Object.prototype.hasOwnProperty;
        if (e) n.Nx = e; else {
            var i = "";
            r.call(t, "id") && (i = 'with ID "' + t.id + '" '), (0, _.m)("Batch entry " + i + "is missing a request method");
        }
        i = e.b.root, this.j || (i && this.d && i != this.d && (0, _.m)('The "root" provided in this request is not consistent with that of existing requests in the batch.'), this.d = i || this.d), i = (0, _.H)(function(e) {
            for (var t = 0; t < this.b.length; t++) if (this.b[t].id == e) return _.r;
            return _.u;
        }, this);
        if (r.call(t, "id")) r = t.id, i(r) && (0, _.m)('Batch ID "' + r + '" already in use, please use another.'), n.id = r; else do n.id = String(2147483647 * (0, _.Vb)() | 0); while (i(n.id));
        n.Ga = t.callback, this.b.push(n);
    }, bF.prototype.execute = function(e) {
        e = cF(this, e);
        var t = "batch" + String(2147483647 * (0, _.Vb)() | 0) + String(2147483647 * (0, _.Vb)() | 0);
        this.i = "--" + t;
        for (var t = {
            path: "/batch",
            headers: {
                "Content-Type": "multipart/mixed; boundary=" + t
            },
            method: "POST"
        }, n = this.b, r = this.i, i = [], s = 0; s < n.length; s++) i.push(eF(n[s].Nx, n[s].id));
        t.body = [ r, i.join("\r\n" + r + "\r\n"), r + "--" ].join("\r\n") + "\r\n", t.root = this.d, Dm(t).execute(e);
    }, bF.prototype.Mh = function(e, t, n) {
        if (t && !e) {
            var r = _.Kb.parse(t);
            r && (e = r.gapiRequest ? r.gapiRequest.data : r);
        }
        if (e && e.headers) {
            var r = (0, _.O)(), i;
            for (i in e.headers) r[i.toLowerCase()] = e.headers[i];
            e.headers = r;
        }
        0 != dF(e.headers, "Content-Type").indexOf("multipart/mixed") && (0, _.m)("The response's Content-Type is not multipart/mixed.");
        if (200 <= e.status && 299 >= e.status) {
            var s = "--" + dF(e.headers, "Content-Type").split("boundary=")[1];
            s || (0, _.m)("Boundary not indicated in response."), i = e.body, i = (0, _.Ge)(i), (0, _.jr)(i, "--") && (i = i.substring(0, i.length - 2)), s = i.split(s), i = (0, _.O)();
            for (e = 0; e < s.length; e++) if (s[e]) {
                var o = fF(s[e]), r = (0, _.O)(), u = dF(o.outerHeaders, "Content-Type"), u = iF.exec(u);
                u == _.s && (0, _.m)("Unexpected Content-Type"), u = dF(o.outerHeaders, "Content-Id"), u = hF.exec(u), u == _.s && (0, _.m)("Unable to recognize Content-Id."), r.id = u[1], o = _.Kb.parse(o.body), r.result = o, i[r.id] = r;
            }
            s = i;
            for (i = 0; i < this.b.length; i++) e = this.b[i], e.Ga && e.Ga(s[e.id] || _.u, _.Kb.stringify(s[e.id]));
        }
        n && n(s, t);
    }, Em.prototype.execute = function(e) {
        Jm(this, this.b);
        var t = _.s;
        this.b.headers.Authorization || (t = (0, _.Hx)(_.p, _.p), t = (t && t.state || "").split(/\w+/) || _.s);
        var n = (0, _.Ck)(this.b, t, function(t, n) {
            var r = t instanceof Array ? t[0] : t, i;
            if (204 != r.status && r.body) try {
                i = _.Kb.parse(r.body);
            } catch (s) {}
            (0, _.P)("client/jsonpOverride") && (i = r), e(i, n);
        }), t = Km(this, "gapiRequest");
        _.Bk.Dd("makeHttpRequests", [ t ], function(e, t) {
            var r = e;
            e.gapiRequest && (r = e.gapiRequest), r && r.data && (r = r.data), n(r, t);
        });
    }, Lm.prototype.add = function(e, t) {
        t = t || {};
        var n = {}, r = Object.prototype.hasOwnProperty;
        if (e) n.qf = e; else {
            var i = "";
            r.call(t, "id") && (i = 'with ID "' + t.id + '" '), (0, _.m)("Batch entry " + i + "is missing a request method");
        }
        if (r.call(t, "id")) {
            r = t.id;
            for (i = 0; i < this.b.length; i++) this.b[i].id == r && (0, _.m)('Batch ID "' + r + '" already in use, please use another.');
            n.id = r;
        } else do n.id = String(2147483647 * (0, _.Vb)() | 0); while (r.call(this.b, n.id));
        n.Ga = t.callback, this.b.push(n);
    }, Lm.prototype.execute = function(e) {
        this.d = [];
        for (var t, n, r = 0; r < this.b.length; r++) {
            t = this.b[r];
            var i = n = t.qf, s = i.b.method;
            t = {
                jsonrpc: "2.0",
                id: t.id,
                method: s
            };
            var o = i.b.rpcParams;
            o && (t.params = o), s = s.substring(0, s.indexOf(".")), t.apiVersion = i.b.apiVersion || Im[s] || "v1", this.d.push(t), this.i = Nm(n) || this.i;
        }
        n = {}, n = _.Bk.Md(n), ym(n), n = {
            requests: this.d,
            headers: n,
            root: this.i,
            clientName: Am(),
            clientVersion: Cm(),
            urlParams: {
                key: _.jm.key
            }
        }, _.Bk.Dd("makeRequest", n, Mm(this, e));
    }, Lm.prototype.Mh = function(e, t, n) {
        for (var r = 0; r < this.b.length; r++) {
            var i = this.b[r];
            i.Ga && i.Ga(e[i.id] || _.u, t);
        }
        n && n(e, t);
    }, Gm.prototype.execute = function(e) {
        var t = new Lm;
        t.add(this, {
            id: "gapiRpc",
            callback: Om(this, e)
        }), t.execute();
    };
    var Pm = {}, Qm = 0;
});
