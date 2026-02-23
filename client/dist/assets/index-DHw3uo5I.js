function vp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function xp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xc = { exports: {} },
  wl = {},
  wc = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zr = Symbol.for("react.element"),
  wp = Symbol.for("react.portal"),
  Sp = Symbol.for("react.fragment"),
  Ep = Symbol.for("react.strict_mode"),
  kp = Symbol.for("react.profiler"),
  Cp = Symbol.for("react.provider"),
  Np = Symbol.for("react.context"),
  jp = Symbol.for("react.forward_ref"),
  Rp = Symbol.for("react.suspense"),
  Pp = Symbol.for("react.memo"),
  _p = Symbol.for("react.lazy"),
  za = Symbol.iterator;
function Tp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (za && e[za]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ec = Object.assign,
  kc = {};
function er(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = kc),
    (this.updater = n || Sc));
}
er.prototype.isReactComponent = {};
er.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cc() {}
Cc.prototype = er.prototype;
function _i(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = kc),
    (this.updater = n || Sc));
}
var Ti = (_i.prototype = new Cc());
Ti.constructor = _i;
Ec(Ti, er.prototype);
Ti.isPureReactComponent = !0;
var Aa = Array.isArray,
  Nc = Object.prototype.hasOwnProperty,
  Oi = { current: null },
  jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rc(e, t, n) {
  var r,
    o = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Nc.call(t, r) && !jc.hasOwnProperty(r) && (o[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var a = Array(i), u = 0; u < i; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((i = e.defaultProps), i)) o[r] === void 0 && (o[r] = i[r]);
  return {
    $$typeof: Zr,
    type: e,
    key: l,
    ref: s,
    props: o,
    _owner: Oi.current,
  };
}
function Op(e, t) {
  return {
    $$typeof: Zr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Li(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zr;
}
function Lp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ba = /\/+/g;
function Hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Lp("" + e.key)
    : t.toString(36);
}
function Lo(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zr:
          case wp:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Hl(s, 0) : r),
      Aa(o)
        ? ((n = ""),
          e != null && (n = e.replace(ba, "$&/") + "/"),
          Lo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Li(o) &&
            (o = Op(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ba, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Aa(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var a = r + Hl(l, i);
      s += Lo(l, t, n, a, o);
    }
  else if (((a = Tp(e)), typeof a == "function"))
    for (e = a.call(e), i = 0; !(l = e.next()).done; )
      ((l = l.value), (a = r + Hl(l, i++)), (s += Lo(l, t, n, a, o)));
  else if (l === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function fo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Lo(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function zp(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var je = { current: null },
  zo = { transition: null },
  Ap = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: zo,
    ReactCurrentOwner: Oi,
  };
function Pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = {
  map: fo,
  forEach: function (e, t, n) {
    fo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      fo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      fo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Li(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
D.Component = er;
D.Fragment = Sp;
D.Profiler = kp;
D.PureComponent = _i;
D.StrictMode = Ep;
D.Suspense = Rp;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ap;
D.act = Pc;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ec({}, e.props),
    o = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = Oi.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (a in t)
      Nc.call(t, a) &&
        !jc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && i !== void 0 ? i[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    i = Array(a);
    for (var u = 0; u < a; u++) i[u] = arguments[u + 2];
    r.children = i;
  }
  return { $$typeof: Zr, type: e.type, key: o, ref: l, props: r, _owner: s };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: Np,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cp, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = Rc;
D.createFactory = function (e) {
  var t = Rc.bind(null, e);
  return ((t.type = e), t);
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: jp, render: e };
};
D.isValidElement = Li;
D.lazy = function (e) {
  return { $$typeof: _p, _payload: { _status: -1, _result: e }, _init: zp };
};
D.memo = function (e, t) {
  return { $$typeof: Pp, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = zo.transition;
  zo.transition = {};
  try {
    e();
  } finally {
    zo.transition = t;
  }
};
D.unstable_act = Pc;
D.useCallback = function (e, t) {
  return je.current.useCallback(e, t);
};
D.useContext = function (e) {
  return je.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return je.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return je.current.useEffect(e, t);
};
D.useId = function () {
  return je.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return je.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return je.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return je.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return je.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return je.current.useRef(e);
};
D.useState = function (e) {
  return je.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return je.current.useTransition();
};
D.version = "18.3.1";
wc.exports = D;
var k = wc.exports;
const gt = xp(k),
  bp = vp({ __proto__: null, default: gt }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ip = k,
  Up = Symbol.for("react.element"),
  Fp = Symbol.for("react.fragment"),
  Mp = Object.prototype.hasOwnProperty,
  Dp = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bp = { key: !0, ref: !0, __self: !0, __source: !0 };
function _c(e, t, n) {
  var r,
    o = {},
    l = null,
    s = null;
  (n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) Mp.call(t, r) && !Bp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Up,
    type: e,
    key: l,
    ref: s,
    props: o,
    _owner: Dp.current,
  };
}
wl.Fragment = Fp;
wl.jsx = _c;
wl.jsxs = _c;
xc.exports = wl;
var d = xc.exports,
  js = {},
  Tc = { exports: {} },
  We = {},
  Oc = { exports: {} },
  Lc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, _) {
    var z = j.length;
    j.push(_);
    e: for (; 0 < z; ) {
      var U = (z - 1) >>> 1,
        K = j[U];
      if (0 < o(K, _)) ((j[U] = _), (j[z] = K), (z = U));
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var _ = j[0],
      z = j.pop();
    if (z !== _) {
      j[0] = z;
      e: for (var U = 0, K = j.length, Tt = K >>> 1; U < Tt; ) {
        var Qe = 2 * (U + 1) - 1,
          kn = j[Qe],
          on = Qe + 1,
          co = j[on];
        if (0 > o(kn, z))
          on < K && 0 > o(co, kn)
            ? ((j[U] = co), (j[on] = z), (U = on))
            : ((j[U] = kn), (j[Qe] = z), (U = Qe));
        else if (on < K && 0 > o(co, z)) ((j[U] = co), (j[on] = z), (U = on));
        else break e;
      }
    }
    return _;
  }
  function o(j, _) {
    var z = j.sortIndex - _.sortIndex;
    return z !== 0 ? z : j.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      i = s.now();
    e.unstable_now = function () {
      return s.now() - i;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    h = 3,
    w = !1,
    y = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(j) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= j)
        (r(u), (_.sortIndex = _.expirationTime), t(a, _));
      else break;
      _ = n(u);
    }
  }
  function S(j) {
    if (((v = !1), g(j), !y))
      if (n(a) !== null) ((y = !0), A(C));
      else {
        var _ = n(u);
        _ !== null && V(S, _.startTime - j);
      }
  }
  function C(j, _) {
    ((y = !1), v && ((v = !1), m(T), (T = -1)), (w = !0));
    var z = h;
    try {
      for (
        g(_), f = n(a);
        f !== null && (!(f.expirationTime > _) || (j && !re()));
      ) {
        var U = f.callback;
        if (typeof U == "function") {
          ((f.callback = null), (h = f.priorityLevel));
          var K = U(f.expirationTime <= _);
          ((_ = e.unstable_now()),
            typeof K == "function" ? (f.callback = K) : f === n(a) && r(a),
            g(_));
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Tt = !0;
      else {
        var Qe = n(u);
        (Qe !== null && V(S, Qe.startTime - _), (Tt = !1));
      }
      return Tt;
    } finally {
      ((f = null), (h = z), (w = !1));
    }
  }
  var P = !1,
    R = null,
    T = -1,
    B = 5,
    b = -1;
  function re() {
    return !(e.unstable_now() - b < B);
  }
  function M() {
    if (R !== null) {
      var j = e.unstable_now();
      b = j;
      var _ = !0;
      try {
        _ = R(!0, j);
      } finally {
        _ ? ge() : ((P = !1), (R = null));
      }
    } else P = !1;
  }
  var ge;
  if (typeof p == "function")
    ge = function () {
      p(M);
    };
  else if (typeof MessageChannel < "u") {
    var fe = new MessageChannel(),
      O = fe.port2;
    ((fe.port1.onmessage = M),
      (ge = function () {
        O.postMessage(null);
      }));
  } else
    ge = function () {
      x(M, 0);
    };
  function A(j) {
    ((R = j), P || ((P = !0), ge()));
  }
  function V(j, _) {
    T = x(function () {
      j(e.unstable_now());
    }, _);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), A(C));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (B = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = h;
      }
      var z = h;
      h = _;
      try {
        return j();
      } finally {
        h = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, _) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var z = h;
      h = j;
      try {
        return _();
      } finally {
        h = z;
      }
    }),
    (e.unstable_scheduleCallback = function (j, _, z) {
      var U = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? U + z : U))
          : (z = U),
        j)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = z + K),
        (j = {
          id: c++,
          callback: _,
          priorityLevel: j,
          startTime: z,
          expirationTime: K,
          sortIndex: -1,
        }),
        z > U
          ? ((j.sortIndex = z),
            t(u, j),
            n(a) === null &&
              j === n(u) &&
              (v ? (m(T), (T = -1)) : (v = !0), V(S, z - U)))
          : ((j.sortIndex = K), t(a, j), y || w || ((y = !0), A(C))),
        j
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (j) {
      var _ = h;
      return function () {
        var z = h;
        h = _;
        try {
          return j.apply(this, arguments);
        } finally {
          h = z;
        }
      };
    }));
})(Lc);
Oc.exports = Lc;
var $p = Oc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vp = k,
  Ve = $p;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var zc = new Set(),
  Ar = {};
function Sn(e, t) {
  (Hn(e, t), Hn(e + "Capture", t));
}
function Hn(e, t) {
  for (Ar[e] = t, e = 0; e < t.length; e++) zc.add(t[e]);
}
var kt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Rs = Object.prototype.hasOwnProperty,
  Wp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ia = {},
  Ua = {};
function Hp(e) {
  return Rs.call(Ua, e)
    ? !0
    : Rs.call(Ia, e)
      ? !1
      : Wp.test(e)
        ? (Ua[e] = !0)
        : ((Ia[e] = !0), !1);
}
function Qp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Kp(e, t, n, r) {
  if (t === null || typeof t > "u" || Qp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Re(e, t, n, r, o, l, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s));
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Re(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new Re(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new Re(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new Re(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new Re(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new Re(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zi = /[\-:]([a-z])/g;
function Ai(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zi, Ai);
    he[t] = new Re(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zi, Ai);
    he[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zi, Ai);
  he[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Re(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bi(e, t, n, r) {
  var o = he.hasOwnProperty(t) ? he[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Kp(t, n, o, r) && (n = null),
    r || o === null
      ? Hp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rt = Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  po = Symbol.for("react.element"),
  jn = Symbol.for("react.portal"),
  Rn = Symbol.for("react.fragment"),
  Ii = Symbol.for("react.strict_mode"),
  Ps = Symbol.for("react.profiler"),
  Ac = Symbol.for("react.provider"),
  bc = Symbol.for("react.context"),
  Ui = Symbol.for("react.forward_ref"),
  _s = Symbol.for("react.suspense"),
  Ts = Symbol.for("react.suspense_list"),
  Fi = Symbol.for("react.memo"),
  At = Symbol.for("react.lazy"),
  Ic = Symbol.for("react.offscreen"),
  Fa = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fa && e[Fa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  Ql;
function wr(e) {
  if (Ql === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ql = (t && t[1]) || "";
    }
  return (
    `
` +
    Ql +
    e
  );
}
var Kl = !1;
function Gl(e, t) {
  if (!e || Kl) return "";
  Kl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          l = r.stack.split(`
`),
          s = o.length - 1,
          i = l.length - 1;
        1 <= s && 0 <= i && o[s] !== l[i];
      )
        i--;
      for (; 1 <= s && 0 <= i; s--, i--)
        if (o[s] !== l[i]) {
          if (s !== 1 || i !== 1)
            do
              if ((s--, i--, 0 > i || o[s] !== l[i])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= i);
          break;
        }
    }
  } finally {
    ((Kl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
}
function Gp(e) {
  switch (e.tag) {
    case 5:
      return wr(e.type);
    case 16:
      return wr("Lazy");
    case 13:
      return wr("Suspense");
    case 19:
      return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Gl(e.type, !1)), e);
    case 11:
      return ((e = Gl(e.type.render, !1)), e);
    case 1:
      return ((e = Gl(e.type, !0)), e);
    default:
      return "";
  }
}
function Os(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rn:
      return "Fragment";
    case jn:
      return "Portal";
    case Ps:
      return "Profiler";
    case Ii:
      return "StrictMode";
    case _s:
      return "Suspense";
    case Ts:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bc:
        return (e.displayName || "Context") + ".Consumer";
      case Ac:
        return (e._context.displayName || "Context") + ".Provider";
      case Ui:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Fi:
        return (
          (t = e.displayName || null),
          t !== null ? t : Os(e.type) || "Memo"
        );
      case At:
        ((t = e._payload), (e = e._init));
        try {
          return Os(e(t));
        } catch {}
    }
  return null;
}
function qp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Os(t);
    case 8:
      return t === Ii ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Xt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Uc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Jp(e) {
  var t = Uc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          ((r = "" + s), l.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function mo(e) {
  e._valueTracker || (e._valueTracker = Jp(e));
}
function Fc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Uc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ko(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ls(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Mc(e, t) {
  ((t = t.checked), t != null && bi(e, "checked", t, !1));
}
function zs(e, t) {
  Mc(e, t);
  var n = Xt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? As(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && As(e, t.type, Xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Da(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function As(e, t, n) {
  (t !== "number" || Ko(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sr = Array.isArray;
function Fn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Xt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function bs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ba(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Sr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Xt(n) };
}
function Dc(e, t) {
  var n = Xt(t.value),
    r = Xt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Bc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Is(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Bc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ho,
  $c = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ho = ho || document.createElement("div"),
          ho.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ho.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Xp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cr).forEach(function (e) {
  Xp.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cr[t] = Cr[e]));
  });
});
function Vc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Cr.hasOwnProperty(e) && Cr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Wc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Vc(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var Yp = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Us(e, t) {
  if (t) {
    if (Yp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Fs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ms = null;
function Mi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ds = null,
  Mn = null,
  Dn = null;
function Va(e) {
  if ((e = no(e))) {
    if (typeof Ds != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Nl(t)), Ds(e.stateNode, e.type, t));
  }
}
function Hc(e) {
  Mn ? (Dn ? Dn.push(e) : (Dn = [e])) : (Mn = e);
}
function Qc() {
  if (Mn) {
    var e = Mn,
      t = Dn;
    if (((Dn = Mn = null), Va(e), t)) for (e = 0; e < t.length; e++) Va(t[e]);
  }
}
function Kc(e, t) {
  return e(t);
}
function Gc() {}
var ql = !1;
function qc(e, t, n) {
  if (ql) return e(t, n);
  ql = !0;
  try {
    return Kc(e, t, n);
  } finally {
    ((ql = !1), (Mn !== null || Dn !== null) && (Gc(), Qc()));
  }
}
function Ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Bs = !1;
if (kt)
  try {
    var cr = {};
    (Object.defineProperty(cr, "passive", {
      get: function () {
        Bs = !0;
      },
    }),
      window.addEventListener("test", cr, cr),
      window.removeEventListener("test", cr, cr));
  } catch {
    Bs = !1;
  }
function Zp(e, t, n, r, o, l, s, i, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Nr = !1,
  Go = null,
  qo = !1,
  $s = null,
  em = {
    onError: function (e) {
      ((Nr = !0), (Go = e));
    },
  };
function tm(e, t, n, r, o, l, s, i, a) {
  ((Nr = !1), (Go = null), Zp.apply(em, arguments));
}
function nm(e, t, n, r, o, l, s, i, a) {
  if ((tm.apply(this, arguments), Nr)) {
    if (Nr) {
      var u = Go;
      ((Nr = !1), (Go = null));
    } else throw Error(N(198));
    qo || ((qo = !0), ($s = u));
  }
}
function En(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Jc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wa(e) {
  if (En(e) !== e) throw Error(N(188));
}
function rm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = En(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return (Wa(o), e);
        if (l === r) return (Wa(o), t);
        l = l.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) ((n = o), (r = l));
    else {
      for (var s = !1, i = o.child; i; ) {
        if (i === n) {
          ((s = !0), (n = o), (r = l));
          break;
        }
        if (i === r) {
          ((s = !0), (r = o), (n = l));
          break;
        }
        i = i.sibling;
      }
      if (!s) {
        for (i = l.child; i; ) {
          if (i === n) {
            ((s = !0), (n = l), (r = o));
            break;
          }
          if (i === r) {
            ((s = !0), (r = l), (n = o));
            break;
          }
          i = i.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Xc(e) {
  return ((e = rm(e)), e !== null ? Yc(e) : null);
}
function Yc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zc = Ve.unstable_scheduleCallback,
  Ha = Ve.unstable_cancelCallback,
  om = Ve.unstable_shouldYield,
  lm = Ve.unstable_requestPaint,
  se = Ve.unstable_now,
  sm = Ve.unstable_getCurrentPriorityLevel,
  Di = Ve.unstable_ImmediatePriority,
  ed = Ve.unstable_UserBlockingPriority,
  Jo = Ve.unstable_NormalPriority,
  im = Ve.unstable_LowPriority,
  td = Ve.unstable_IdlePriority,
  Sl = null,
  mt = null;
function am(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function")
    try {
      mt.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var lt = Math.clz32 ? Math.clz32 : dm,
  um = Math.log,
  cm = Math.LN2;
function dm(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((um(e) / cm) | 0)) | 0);
}
var go = 64,
  yo = 4194304;
function Er(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Xo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var i = s & ~o;
    i !== 0 ? (r = Er(i)) : ((l &= s), l !== 0 && (r = Er(l)));
  } else ((s = n & ~o), s !== 0 ? (r = Er(s)) : l !== 0 && (r = Er(l)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - lt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function fm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function pm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;
  ) {
    var s = 31 - lt(l),
      i = 1 << s,
      a = o[s];
    (a === -1
      ? (!(i & n) || i & r) && (o[s] = fm(i, t))
      : a <= t && (e.expiredLanes |= i),
      (l &= ~i));
  }
}
function Vs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function nd() {
  var e = go;
  return ((go <<= 1), !(go & 4194240) && (go = 64), e);
}
function Jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function eo(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - lt(t)),
    (e[t] = n));
}
function mm(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - lt(n),
      l = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l));
  }
}
function Bi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var W = 0;
function rd(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var od,
  $i,
  ld,
  sd,
  id,
  Ws = !1,
  vo = [],
  $t = null,
  Vt = null,
  Wt = null,
  Ur = new Map(),
  Fr = new Map(),
  It = [],
  hm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Qa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $t = null;
      break;
    case "dragenter":
    case "dragleave":
      Vt = null;
      break;
    case "mouseover":
    case "mouseout":
      Wt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ur.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function dr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = no(t)), t !== null && $i(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function gm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (($t = dr($t, e, t, n, r, o)), !0);
    case "dragenter":
      return ((Vt = dr(Vt, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Wt = dr(Wt, e, t, n, r, o)), !0);
    case "pointerover":
      var l = o.pointerId;
      return (Ur.set(l, dr(Ur.get(l) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (l = o.pointerId),
        Fr.set(l, dr(Fr.get(l) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function ad(e) {
  var t = an(e.target);
  if (t !== null) {
    var n = En(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jc(n)), t !== null)) {
          ((e.blockedOn = t),
            id(e.priority, function () {
              ld(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ao(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ms = r), n.target.dispatchEvent(r), (Ms = null));
    } else return ((t = no(n)), t !== null && $i(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ka(e, t, n) {
  Ao(e) && n.delete(t);
}
function ym() {
  ((Ws = !1),
    $t !== null && Ao($t) && ($t = null),
    Vt !== null && Ao(Vt) && (Vt = null),
    Wt !== null && Ao(Wt) && (Wt = null),
    Ur.forEach(Ka),
    Fr.forEach(Ka));
}
function fr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ws ||
      ((Ws = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, ym)));
}
function Mr(e) {
  function t(o) {
    return fr(o, e);
  }
  if (0 < vo.length) {
    fr(vo[0], e);
    for (var n = 1; n < vo.length; n++) {
      var r = vo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    $t !== null && fr($t, e),
      Vt !== null && fr(Vt, e),
      Wt !== null && fr(Wt, e),
      Ur.forEach(t),
      Fr.forEach(t),
      n = 0;
    n < It.length;
    n++
  )
    ((r = It[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); )
    (ad(n), n.blockedOn === null && It.shift());
}
var Bn = Rt.ReactCurrentBatchConfig,
  Yo = !0;
function vm(e, t, n, r) {
  var o = W,
    l = Bn.transition;
  Bn.transition = null;
  try {
    ((W = 1), Vi(e, t, n, r));
  } finally {
    ((W = o), (Bn.transition = l));
  }
}
function xm(e, t, n, r) {
  var o = W,
    l = Bn.transition;
  Bn.transition = null;
  try {
    ((W = 4), Vi(e, t, n, r));
  } finally {
    ((W = o), (Bn.transition = l));
  }
}
function Vi(e, t, n, r) {
  if (Yo) {
    var o = Hs(e, t, n, r);
    if (o === null) (ss(e, t, r, Zo, n), Qa(e, r));
    else if (gm(o, e, t, n, r)) r.stopPropagation();
    else if ((Qa(e, r), t & 4 && -1 < hm.indexOf(e))) {
      for (; o !== null; ) {
        var l = no(o);
        if (
          (l !== null && od(l),
          (l = Hs(e, t, n, r)),
          l === null && ss(e, t, r, Zo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else ss(e, t, r, null, n);
  }
}
var Zo = null;
function Hs(e, t, n, r) {
  if (((Zo = null), (e = Mi(r)), (e = an(e)), e !== null))
    if (((t = En(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Jc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Zo = e), null);
}
function ud(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (sm()) {
        case Di:
          return 1;
        case ed:
          return 4;
        case Jo:
        case im:
          return 16;
        case td:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ft = null,
  Wi = null,
  bo = null;
function cd() {
  if (bo) return bo;
  var e,
    t = Wi,
    n = t.length,
    r,
    o = "value" in Ft ? Ft.value : Ft.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[l - r]; r++);
  return (bo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Io(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xo() {
  return !0;
}
function Ga() {
  return !1;
}
function He(e) {
  function t(n, r, o, l, s) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null));
    for (var i in e)
      e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(l) : l[i]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? xo
        : Ga),
      (this.isPropagationStopped = Ga),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = xo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xo));
      },
      persist: function () {},
      isPersistent: xo,
    }),
    t
  );
}
var tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Hi = He(tr),
  to = ne({}, tr, { view: 0, detail: 0 }),
  wm = He(to),
  Xl,
  Yl,
  pr,
  El = ne({}, to, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Qi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pr &&
            (pr && e.type === "mousemove"
              ? ((Xl = e.screenX - pr.screenX), (Yl = e.screenY - pr.screenY))
              : (Yl = Xl = 0),
            (pr = e)),
          Xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yl;
    },
  }),
  qa = He(El),
  Sm = ne({}, El, { dataTransfer: 0 }),
  Em = He(Sm),
  km = ne({}, to, { relatedTarget: 0 }),
  Zl = He(km),
  Cm = ne({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nm = He(Cm),
  jm = ne({}, tr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Rm = He(jm),
  Pm = ne({}, tr, { data: 0 }),
  Ja = He(Pm),
  _m = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Tm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Om = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Lm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Om[e]) ? !!t[e] : !1;
}
function Qi() {
  return Lm;
}
var zm = ne({}, to, {
    key: function (e) {
      if (e.key) {
        var t = _m[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Io(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Tm[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qi,
    charCode: function (e) {
      return e.type === "keypress" ? Io(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Io(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Am = He(zm),
  bm = ne({}, El, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Xa = He(bm),
  Im = ne({}, to, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qi,
  }),
  Um = He(Im),
  Fm = ne({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mm = He(Fm),
  Dm = ne({}, El, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Bm = He(Dm),
  $m = [9, 13, 27, 32],
  Ki = kt && "CompositionEvent" in window,
  jr = null;
kt && "documentMode" in document && (jr = document.documentMode);
var Vm = kt && "TextEvent" in window && !jr,
  dd = kt && (!Ki || (jr && 8 < jr && 11 >= jr)),
  Ya = " ",
  Za = !1;
function fd(e, t) {
  switch (e) {
    case "keyup":
      return $m.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function pd(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Pn = !1;
function Wm(e, t) {
  switch (e) {
    case "compositionend":
      return pd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Za = !0), Ya);
    case "textInput":
      return ((e = t.data), e === Ya && Za ? null : e);
    default:
      return null;
  }
}
function Hm(e, t) {
  if (Pn)
    return e === "compositionend" || (!Ki && fd(e, t))
      ? ((e = cd()), (bo = Wi = Ft = null), (Pn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qm[e.type] : t === "textarea";
}
function md(e, t, n, r) {
  (Hc(r),
    (t = el(t, "onChange")),
    0 < t.length &&
      ((n = new Hi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Rr = null,
  Dr = null;
function Km(e) {
  Nd(e, 0);
}
function kl(e) {
  var t = On(e);
  if (Fc(t)) return e;
}
function Gm(e, t) {
  if (e === "change") return t;
}
var hd = !1;
if (kt) {
  var es;
  if (kt) {
    var ts = "oninput" in document;
    if (!ts) {
      var tu = document.createElement("div");
      (tu.setAttribute("oninput", "return;"),
        (ts = typeof tu.oninput == "function"));
    }
    es = ts;
  } else es = !1;
  hd = es && (!document.documentMode || 9 < document.documentMode);
}
function nu() {
  Rr && (Rr.detachEvent("onpropertychange", gd), (Dr = Rr = null));
}
function gd(e) {
  if (e.propertyName === "value" && kl(Dr)) {
    var t = [];
    (md(t, Dr, e, Mi(e)), qc(Km, t));
  }
}
function qm(e, t, n) {
  e === "focusin"
    ? (nu(), (Rr = t), (Dr = n), Rr.attachEvent("onpropertychange", gd))
    : e === "focusout" && nu();
}
function Jm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return kl(Dr);
}
function Xm(e, t) {
  if (e === "click") return kl(t);
}
function Ym(e, t) {
  if (e === "input" || e === "change") return kl(t);
}
function Zm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var it = typeof Object.is == "function" ? Object.is : Zm;
function Br(e, t) {
  if (it(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Rs.call(t, o) || !it(e[o], t[o])) return !1;
  }
  return !0;
}
function ru(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ou(e, t) {
  var n = ru(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ru(n);
  }
}
function yd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? yd(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function vd() {
  for (var e = window, t = Ko(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ko(e.document);
  }
  return t;
}
function Gi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function eh(e) {
  var t = vd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Gi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        ((r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = ou(n, l)));
        var s = ou(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var th = kt && "documentMode" in document && 11 >= document.documentMode,
  _n = null,
  Qs = null,
  Pr = null,
  Ks = !1;
function lu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ks ||
    _n == null ||
    _n !== Ko(r) ||
    ((r = _n),
    "selectionStart" in r && Gi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pr && Br(Pr, r)) ||
      ((Pr = r),
      (r = el(Qs, "onSelect")),
      0 < r.length &&
        ((t = new Hi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _n))));
}
function wo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Tn = {
    animationend: wo("Animation", "AnimationEnd"),
    animationiteration: wo("Animation", "AnimationIteration"),
    animationstart: wo("Animation", "AnimationStart"),
    transitionend: wo("Transition", "TransitionEnd"),
  },
  ns = {},
  xd = {};
kt &&
  ((xd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Tn.animationend.animation,
    delete Tn.animationiteration.animation,
    delete Tn.animationstart.animation),
  "TransitionEvent" in window || delete Tn.transitionend.transition);
function Cl(e) {
  if (ns[e]) return ns[e];
  if (!Tn[e]) return e;
  var t = Tn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xd) return (ns[e] = t[n]);
  return e;
}
var wd = Cl("animationend"),
  Sd = Cl("animationiteration"),
  Ed = Cl("animationstart"),
  kd = Cl("transitionend"),
  Cd = new Map(),
  su =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Zt(e, t) {
  (Cd.set(e, t), Sn(t, [e]));
}
for (var rs = 0; rs < su.length; rs++) {
  var os = su[rs],
    nh = os.toLowerCase(),
    rh = os[0].toUpperCase() + os.slice(1);
  Zt(nh, "on" + rh);
}
Zt(wd, "onAnimationEnd");
Zt(Sd, "onAnimationIteration");
Zt(Ed, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(kd, "onTransitionEnd");
Hn("onMouseEnter", ["mouseout", "mouseover"]);
Hn("onMouseLeave", ["mouseout", "mouseover"]);
Hn("onPointerEnter", ["pointerout", "pointerover"]);
Hn("onPointerLeave", ["pointerout", "pointerover"]);
Sn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Sn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Sn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Sn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var kr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  oh = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
function iu(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), nm(r, t, void 0, e), (e.currentTarget = null));
}
function Nd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var i = r[s],
            a = i.instance,
            u = i.currentTarget;
          if (((i = i.listener), a !== l && o.isPropagationStopped())) break e;
          (iu(o, i, u), (l = a));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((i = r[s]),
            (a = i.instance),
            (u = i.currentTarget),
            (i = i.listener),
            a !== l && o.isPropagationStopped())
          )
            break e;
          (iu(o, i, u), (l = a));
        }
    }
  }
  if (qo) throw ((e = $s), (qo = !1), ($s = null), e);
}
function q(e, t) {
  var n = t[Ys];
  n === void 0 && (n = t[Ys] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jd(t, e, 2, !1), n.add(r));
}
function ls(e, t, n) {
  var r = 0;
  (t && (r |= 4), jd(n, e, r, t));
}
var So = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
  if (!e[So]) {
    ((e[So] = !0),
      zc.forEach(function (n) {
        n !== "selectionchange" && (oh.has(n) || ls(n, !1, e), ls(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[So] || ((t[So] = !0), ls("selectionchange", !1, t));
  }
}
function jd(e, t, n, r) {
  switch (ud(t)) {
    case 1:
      var o = vm;
      break;
    case 4:
      o = xm;
      break;
    default:
      o = Vi;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !Bs ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function ss(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var i = r.stateNode.containerInfo;
        if (i === o || (i.nodeType === 8 && i.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; i !== null; ) {
          if (((s = an(i)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = l = s;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  qc(function () {
    var u = l,
      c = Mi(n),
      f = [];
    e: {
      var h = Cd.get(e);
      if (h !== void 0) {
        var w = Hi,
          y = e;
        switch (e) {
          case "keypress":
            if (Io(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Am;
            break;
          case "focusin":
            ((y = "focus"), (w = Zl));
            break;
          case "focusout":
            ((y = "blur"), (w = Zl));
            break;
          case "beforeblur":
          case "afterblur":
            w = Zl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = qa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Em;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Um;
            break;
          case wd:
          case Sd:
          case Ed:
            w = Nm;
            break;
          case kd:
            w = Mm;
            break;
          case "scroll":
            w = wm;
            break;
          case "wheel":
            w = Bm;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Rm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Xa;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          m = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              m !== null && ((S = Ir(p, m)), S != null && v.push(Vr(p, S, g)))),
            x)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((h = new w(h, y, null, n, c)), f.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Ms &&
            (y = n.relatedTarget || n.fromElement) &&
            (an(y) || y[Ct]))
        )
          break e;
        if (
          (w || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = u),
              (y = y ? an(y) : null),
              y !== null &&
                ((x = En(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((w = null), (y = u)),
          w !== y)
        ) {
          if (
            ((v = qa),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Xa),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (x = w == null ? h : On(w)),
            (g = y == null ? h : On(y)),
            (h = new v(S, p + "leave", w, n, c)),
            (h.target = x),
            (h.relatedTarget = g),
            (S = null),
            an(c) === u &&
              ((v = new v(m, p + "enter", y, n, c)),
              (v.target = g),
              (v.relatedTarget = x),
              (S = v)),
            (x = S),
            w && y)
          )
            t: {
              for (v = w, m = y, p = 0, g = v; g; g = Cn(g)) p++;
              for (g = 0, S = m; S; S = Cn(S)) g++;
              for (; 0 < p - g; ) ((v = Cn(v)), p--);
              for (; 0 < g - p; ) ((m = Cn(m)), g--);
              for (; p--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                ((v = Cn(v)), (m = Cn(m)));
              }
              v = null;
            }
          else v = null;
          (w !== null && au(f, h, w, v, !1),
            y !== null && x !== null && au(f, x, y, v, !0));
        }
      }
      e: {
        if (
          ((h = u ? On(u) : window),
          (w = h.nodeName && h.nodeName.toLowerCase()),
          w === "select" || (w === "input" && h.type === "file"))
        )
          var C = Gm;
        else if (eu(h))
          if (hd) C = Ym;
          else {
            C = Jm;
            var P = qm;
          }
        else
          (w = h.nodeName) &&
            w.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = Xm);
        if (C && (C = C(e, u))) {
          md(f, C, n, c);
          break e;
        }
        (P && P(e, h, u),
          e === "focusout" &&
            (P = h._wrapperState) &&
            P.controlled &&
            h.type === "number" &&
            As(h, "number", h.value));
      }
      switch (((P = u ? On(u) : window), e)) {
        case "focusin":
          (eu(P) || P.contentEditable === "true") &&
            ((_n = P), (Qs = u), (Pr = null));
          break;
        case "focusout":
          Pr = Qs = _n = null;
          break;
        case "mousedown":
          Ks = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ks = !1), lu(f, n, c));
          break;
        case "selectionchange":
          if (th) break;
        case "keydown":
        case "keyup":
          lu(f, n, c);
      }
      var R;
      if (Ki)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Pn
          ? fd(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (dd &&
          n.locale !== "ko" &&
          (Pn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Pn && (R = cd())
            : ((Ft = c),
              (Wi = "value" in Ft ? Ft.value : Ft.textContent),
              (Pn = !0))),
        (P = el(u, T)),
        0 < P.length &&
          ((T = new Ja(T, e, null, n, c)),
          f.push({ event: T, listeners: P }),
          R ? (T.data = R) : ((R = pd(n)), R !== null && (T.data = R)))),
        (R = Vm ? Wm(e, n) : Hm(e, n)) &&
          ((u = el(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ja("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = R))));
    }
    Nd(f, t);
  });
}
function Vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function el(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    (o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Ir(e, n)),
      l != null && r.unshift(Vr(e, l, o)),
      (l = Ir(e, t)),
      l != null && r.push(Vr(e, l, o))),
      (e = e.return));
  }
  return r;
}
function Cn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function au(e, t, n, r, o) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var i = n,
      a = i.alternate,
      u = i.stateNode;
    if (a !== null && a === r) break;
    (i.tag === 5 &&
      u !== null &&
      ((i = u),
      o
        ? ((a = Ir(n, l)), a != null && s.unshift(Vr(n, a, i)))
        : o || ((a = Ir(n, l)), a != null && s.push(Vr(n, a, i)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var lh = /\r\n?/g,
  sh = /\u0000|\uFFFD/g;
function uu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      lh,
      `
`,
    )
    .replace(sh, "");
}
function Eo(e, t, n) {
  if (((t = uu(t)), uu(e) !== t && n)) throw Error(N(425));
}
function tl() {}
var Gs = null,
  qs = null;
function Js(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Xs = typeof setTimeout == "function" ? setTimeout : void 0,
  ih = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cu = typeof Promise == "function" ? Promise : void 0,
  ah =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cu < "u"
        ? function (e) {
            return cu.resolve(null).then(e).catch(uh);
          }
        : Xs;
function uh(e) {
  setTimeout(function () {
    throw e;
  });
}
function is(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), Mr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Mr(t);
}
function Ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function du(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var nr = Math.random().toString(36).slice(2),
  pt = "__reactFiber$" + nr,
  Wr = "__reactProps$" + nr,
  Ct = "__reactContainer$" + nr,
  Ys = "__reactEvents$" + nr,
  ch = "__reactListeners$" + nr,
  dh = "__reactHandles$" + nr;
function an(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ct] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = du(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = du(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function no(e) {
  return (
    (e = e[pt] || e[Ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function On(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Nl(e) {
  return e[Wr] || null;
}
var Zs = [],
  Ln = -1;
function en(e) {
  return { current: e };
}
function J(e) {
  0 > Ln || ((e.current = Zs[Ln]), (Zs[Ln] = null), Ln--);
}
function Q(e, t) {
  (Ln++, (Zs[Ln] = e.current), (e.current = t));
}
var Yt = {},
  ke = en(Yt),
  Te = en(!1),
  hn = Yt;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Oe(e) {
  return ((e = e.childContextTypes), e != null);
}
function nl() {
  (J(Te), J(ke));
}
function fu(e, t, n) {
  if (ke.current !== Yt) throw Error(N(168));
  (Q(ke, t), Q(Te, n));
}
function Rd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, qp(e) || "Unknown", o));
  return ne({}, n, r);
}
function rl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yt),
    (hn = ke.current),
    Q(ke, e),
    Q(Te, Te.current),
    !0
  );
}
function pu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  (n
    ? ((e = Rd(e, t, hn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      J(Te),
      J(ke),
      Q(ke, e))
    : J(Te),
    Q(Te, n));
}
var xt = null,
  jl = !1,
  as = !1;
function Pd(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function fh(e) {
  ((jl = !0), Pd(e));
}
function tn() {
  if (!as && xt !== null) {
    as = !0;
    var e = 0,
      t = W;
    try {
      var n = xt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((xt = null), (jl = !1));
    } catch (o) {
      throw (xt !== null && (xt = xt.slice(e + 1)), Zc(Di, tn), o);
    } finally {
      ((W = t), (as = !1));
    }
  }
  return null;
}
var zn = [],
  An = 0,
  ol = null,
  ll = 0,
  Ge = [],
  qe = 0,
  gn = null,
  wt = 1,
  St = "";
function ln(e, t) {
  ((zn[An++] = ll), (zn[An++] = ol), (ol = e), (ll = t));
}
function _d(e, t, n) {
  ((Ge[qe++] = wt), (Ge[qe++] = St), (Ge[qe++] = gn), (gn = e));
  var r = wt;
  e = St;
  var o = 32 - lt(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var l = 32 - lt(t) + o;
  if (30 < l) {
    var s = o - (o % 5);
    ((l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (wt = (1 << (32 - lt(t) + o)) | (n << o) | r),
      (St = l + e));
  } else ((wt = (1 << l) | (n << o) | r), (St = e));
}
function qi(e) {
  e.return !== null && (ln(e, 1), _d(e, 1, 0));
}
function Ji(e) {
  for (; e === ol; )
    ((ol = zn[--An]), (zn[An] = null), (ll = zn[--An]), (zn[An] = null));
  for (; e === gn; )
    ((gn = Ge[--qe]),
      (Ge[qe] = null),
      (St = Ge[--qe]),
      (Ge[qe] = null),
      (wt = Ge[--qe]),
      (Ge[qe] = null));
}
var $e = null,
  Be = null,
  Y = !1,
  ot = null;
function Td(e, t) {
  var n = Je(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function mu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), ($e = e), (Be = Ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: wt, overflow: St } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ei(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ti(e) {
  if (Y) {
    var t = Be;
    if (t) {
      var n = t;
      if (!mu(e, t)) {
        if (ei(e)) throw Error(N(418));
        t = Ht(n.nextSibling);
        var r = $e;
        t && mu(e, t)
          ? Td(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), ($e = e));
      }
    } else {
      if (ei(e)) throw Error(N(418));
      ((e.flags = (e.flags & -4097) | 2), (Y = !1), ($e = e));
    }
  }
}
function hu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  $e = e;
}
function ko(e) {
  if (e !== $e) return !1;
  if (!Y) return (hu(e), (Y = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Js(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (ei(e)) throw (Od(), Error(N(418)));
    for (; t; ) (Td(e, t), (t = Ht(t.nextSibling)));
  }
  if ((hu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = $e ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function Od() {
  for (var e = Be; e; ) e = Ht(e.nextSibling);
}
function Kn() {
  ((Be = $e = null), (Y = !1));
}
function Xi(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var ph = Rt.ReactCurrentBatchConfig;
function mr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var i = o.refs;
            s === null ? delete i[l] : (i[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Co(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function gu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ld(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) (t(m, p), (p = p.sibling));
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      (p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling));
    return m;
  }
  function o(m, p) {
    return ((m = qt(m, p)), (m.index = 0), (m.sibling = null), m);
  }
  function l(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function i(m, p, g, S) {
    return p === null || p.tag !== 6
      ? ((p = hs(g, m.mode, S)), (p.return = m), p)
      : ((p = o(p, g)), (p.return = m), p);
  }
  function a(m, p, g, S) {
    var C = g.type;
    return C === Rn
      ? c(m, p, g.props.children, S, g.key)
      : p !== null &&
          (p.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === At &&
              gu(C) === p.type))
        ? ((S = o(p, g.props)), (S.ref = mr(m, p, g)), (S.return = m), S)
        : ((S = Vo(g.type, g.key, g.props, null, m.mode, S)),
          (S.ref = mr(m, p, g)),
          (S.return = m),
          S);
  }
  function u(m, p, g, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = gs(g, m.mode, S)), (p.return = m), p)
      : ((p = o(p, g.children || [])), (p.return = m), p);
  }
  function c(m, p, g, S, C) {
    return p === null || p.tag !== 7
      ? ((p = pn(g, m.mode, S, C)), (p.return = m), p)
      : ((p = o(p, g)), (p.return = m), p);
  }
  function f(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return ((p = hs("" + p, m.mode, g)), (p.return = m), p);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case po:
          return (
            (g = Vo(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = mr(m, null, p)),
            (g.return = m),
            g
          );
        case jn:
          return ((p = gs(p, m.mode, g)), (p.return = m), p);
        case At:
          var S = p._init;
          return f(m, S(p._payload), g);
      }
      if (Sr(p) || ur(p))
        return ((p = pn(p, m.mode, g, null)), (p.return = m), p);
      Co(m, p);
    }
    return null;
  }
  function h(m, p, g, S) {
    var C = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return C !== null ? null : i(m, p, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case po:
          return g.key === C ? a(m, p, g, S) : null;
        case jn:
          return g.key === C ? u(m, p, g, S) : null;
        case At:
          return ((C = g._init), h(m, p, C(g._payload), S));
      }
      if (Sr(g) || ur(g)) return C !== null ? null : c(m, p, g, S, null);
      Co(m, g);
    }
    return null;
  }
  function w(m, p, g, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((m = m.get(g) || null), i(p, m, "" + S, C));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case po:
          return (
            (m = m.get(S.key === null ? g : S.key) || null),
            a(p, m, S, C)
          );
        case jn:
          return (
            (m = m.get(S.key === null ? g : S.key) || null),
            u(p, m, S, C)
          );
        case At:
          var P = S._init;
          return w(m, p, g, P(S._payload), C);
      }
      if (Sr(S) || ur(S)) return ((m = m.get(g) || null), c(p, m, S, C, null));
      Co(p, S);
    }
    return null;
  }
  function y(m, p, g, S) {
    for (
      var C = null, P = null, R = p, T = (p = 0), B = null;
      R !== null && T < g.length;
      T++
    ) {
      R.index > T ? ((B = R), (R = null)) : (B = R.sibling);
      var b = h(m, R, g[T], S);
      if (b === null) {
        R === null && (R = B);
        break;
      }
      (e && R && b.alternate === null && t(m, R),
        (p = l(b, p, T)),
        P === null ? (C = b) : (P.sibling = b),
        (P = b),
        (R = B));
    }
    if (T === g.length) return (n(m, R), Y && ln(m, T), C);
    if (R === null) {
      for (; T < g.length; T++)
        ((R = f(m, g[T], S)),
          R !== null &&
            ((p = l(R, p, T)),
            P === null ? (C = R) : (P.sibling = R),
            (P = R)));
      return (Y && ln(m, T), C);
    }
    for (R = r(m, R); T < g.length; T++)
      ((B = w(R, m, T, g[T], S)),
        B !== null &&
          (e && B.alternate !== null && R.delete(B.key === null ? T : B.key),
          (p = l(B, p, T)),
          P === null ? (C = B) : (P.sibling = B),
          (P = B)));
    return (
      e &&
        R.forEach(function (re) {
          return t(m, re);
        }),
      Y && ln(m, T),
      C
    );
  }
  function v(m, p, g, S) {
    var C = ur(g);
    if (typeof C != "function") throw Error(N(150));
    if (((g = C.call(g)), g == null)) throw Error(N(151));
    for (
      var P = (C = null), R = p, T = (p = 0), B = null, b = g.next();
      R !== null && !b.done;
      T++, b = g.next()
    ) {
      R.index > T ? ((B = R), (R = null)) : (B = R.sibling);
      var re = h(m, R, b.value, S);
      if (re === null) {
        R === null && (R = B);
        break;
      }
      (e && R && re.alternate === null && t(m, R),
        (p = l(re, p, T)),
        P === null ? (C = re) : (P.sibling = re),
        (P = re),
        (R = B));
    }
    if (b.done) return (n(m, R), Y && ln(m, T), C);
    if (R === null) {
      for (; !b.done; T++, b = g.next())
        ((b = f(m, b.value, S)),
          b !== null &&
            ((p = l(b, p, T)),
            P === null ? (C = b) : (P.sibling = b),
            (P = b)));
      return (Y && ln(m, T), C);
    }
    for (R = r(m, R); !b.done; T++, b = g.next())
      ((b = w(R, m, T, b.value, S)),
        b !== null &&
          (e && b.alternate !== null && R.delete(b.key === null ? T : b.key),
          (p = l(b, p, T)),
          P === null ? (C = b) : (P.sibling = b),
          (P = b)));
    return (
      e &&
        R.forEach(function (M) {
          return t(m, M);
        }),
      Y && ln(m, T),
      C
    );
  }
  function x(m, p, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Rn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case po:
          e: {
            for (var C = g.key, P = p; P !== null; ) {
              if (P.key === C) {
                if (((C = g.type), C === Rn)) {
                  if (P.tag === 7) {
                    (n(m, P.sibling),
                      (p = o(P, g.props.children)),
                      (p.return = m),
                      (m = p));
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === At &&
                    gu(C) === P.type)
                ) {
                  (n(m, P.sibling),
                    (p = o(P, g.props)),
                    (p.ref = mr(m, P, g)),
                    (p.return = m),
                    (m = p));
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            g.type === Rn
              ? ((p = pn(g.props.children, m.mode, S, g.key)),
                (p.return = m),
                (m = p))
              : ((S = Vo(g.type, g.key, g.props, null, m.mode, S)),
                (S.ref = mr(m, p, g)),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case jn:
          e: {
            for (P = g.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  (n(m, p.sibling),
                    (p = o(p, g.children || [])),
                    (p.return = m),
                    (m = p));
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            ((p = gs(g, m.mode, S)), (p.return = m), (m = p));
          }
          return s(m);
        case At:
          return ((P = g._init), x(m, p, P(g._payload), S));
      }
      if (Sr(g)) return y(m, p, g, S);
      if (ur(g)) return v(m, p, g, S);
      Co(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = hs(g, m.mode, S)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return x;
}
var Gn = Ld(!0),
  zd = Ld(!1),
  sl = en(null),
  il = null,
  bn = null,
  Yi = null;
function Zi() {
  Yi = bn = il = null;
}
function ea(e) {
  var t = sl.current;
  (J(sl), (e._currentValue = t));
}
function ni(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $n(e, t) {
  ((il = e),
    (Yi = bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_e = !0), (e.firstContext = null)));
}
function Ye(e) {
  var t = e._currentValue;
  if (Yi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bn === null)) {
      if (il === null) throw Error(N(308));
      ((bn = e), (il.dependencies = { lanes: 0, firstContext: e }));
    } else bn = bn.next = e;
  return t;
}
var un = null;
function ta(e) {
  un === null ? (un = [e]) : un.push(e);
}
function Ad(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ta(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Nt(e, r)
  );
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var bt = !1;
function na(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bd(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Nt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ta(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Nt(e, n)
  );
}
function Uo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Bi(e, n));
  }
}
function yu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (l === null ? (o = l = s) : (l = l.next = s), (n = n.next));
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function al(e, t, n, r) {
  var o = e.updateQueue;
  bt = !1;
  var l = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var a = i,
      u = a.next;
    ((a.next = null), s === null ? (l = u) : (s.next = u), (s = a));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (i = c.lastBaseUpdate),
      i !== s &&
        (i === null ? (c.firstBaseUpdate = u) : (i.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var f = o.baseState;
    ((s = 0), (c = u = a = null), (i = l));
    do {
      var h = i.lane,
        w = i.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var y = e,
            v = i;
          switch (((h = t), (w = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(w, f, h);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (h = typeof y == "function" ? y.call(w, f, h) : y),
                h == null)
              )
                break e;
              f = ne({}, f, h);
              break e;
            case 2:
              bt = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [i]) : h.push(i));
      } else
        ((w = {
          eventTime: w,
          lane: h,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          c === null ? ((u = c = w), (a = f)) : (c = c.next = w),
          (s |= h));
      if (((i = i.next), i === null)) {
        if (((i = o.shared.pending), i === null)) break;
        ((h = i),
          (i = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((s |= o.lane), (o = o.next));
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    ((vn |= s), (e.lanes = s), (e.memoizedState = f));
  }
}
function vu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var ro = {},
  ht = en(ro),
  Hr = en(ro),
  Qr = en(ro);
function cn(e) {
  if (e === ro) throw Error(N(174));
  return e;
}
function ra(e, t) {
  switch ((Q(Qr, t), Q(Hr, e), Q(ht, ro), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Is(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Is(t, e)));
  }
  (J(ht), Q(ht, t));
}
function qn() {
  (J(ht), J(Hr), J(Qr));
}
function Id(e) {
  cn(Qr.current);
  var t = cn(ht.current),
    n = Is(t, e.type);
  t !== n && (Q(Hr, e), Q(ht, n));
}
function oa(e) {
  Hr.current === e && (J(ht), J(Hr));
}
var Z = en(0);
function ul(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var us = [];
function la() {
  for (var e = 0; e < us.length; e++)
    us[e]._workInProgressVersionPrimary = null;
  us.length = 0;
}
var Fo = Rt.ReactCurrentDispatcher,
  cs = Rt.ReactCurrentBatchConfig,
  yn = 0,
  ee = null,
  ae = null,
  ce = null,
  cl = !1,
  _r = !1,
  Kr = 0,
  mh = 0;
function ye() {
  throw Error(N(321));
}
function sa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!it(e[n], t[n])) return !1;
  return !0;
}
function ia(e, t, n, r, o, l) {
  if (
    ((yn = l),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fo.current = e === null || e.memoizedState === null ? vh : xh),
    (e = n(r, o)),
    _r)
  ) {
    l = 0;
    do {
      if (((_r = !1), (Kr = 0), 25 <= l)) throw Error(N(301));
      ((l += 1),
        (ce = ae = null),
        (t.updateQueue = null),
        (Fo.current = wh),
        (e = n(r, o)));
    } while (_r);
  }
  if (
    ((Fo.current = dl),
    (t = ae !== null && ae.next !== null),
    (yn = 0),
    (ce = ae = ee = null),
    (cl = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function aa() {
  var e = Kr !== 0;
  return ((Kr = 0), e);
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e), ce);
}
function Ze() {
  if (ae === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = ce === null ? ee.memoizedState : ce.next;
  if (t !== null) ((ce = t), (ae = e));
  else {
    if (e === null) throw Error(N(310));
    ((ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e));
  }
  return ce;
}
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ds(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ae,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var s = o.next;
      ((o.next = l.next), (l.next = s));
    }
    ((r.baseQueue = o = l), (n.pending = null));
  }
  if (o !== null) {
    ((l = o.next), (r = r.baseState));
    var i = (s = null),
      a = null,
      u = l;
    do {
      var c = u.lane;
      if ((yn & c) === c)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((i = a = f), (s = r)) : (a = a.next = f),
          (ee.lanes |= c),
          (vn |= c));
      }
      u = u.next;
    } while (u !== null && u !== l);
    (a === null ? (s = r) : (a.next = i),
      it(r, t.memoizedState) || (_e = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((l = o.lane), (ee.lanes |= l), (vn |= l), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fs(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do ((l = e(l, s.action)), (s = s.next));
    while (s !== o);
    (it(l, t.memoizedState) || (_e = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l));
  }
  return [l, r];
}
function Ud() {}
function Fd(e, t) {
  var n = ee,
    r = Ze(),
    o = t(),
    l = !it(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (_e = !0)),
    (r = r.queue),
    ua(Bd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qr(9, Dd.bind(null, n, r, o, t), void 0, null),
      de === null)
    )
      throw Error(N(349));
    yn & 30 || Md(n, t, o);
  }
  return o;
}
function Md(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Dd(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), $d(t) && Vd(e));
}
function Bd(e, t, n) {
  return n(function () {
    $d(t) && Vd(e);
  });
}
function $d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !it(e, n);
  } catch {
    return !0;
  }
}
function Vd(e) {
  var t = Nt(e, 1);
  t !== null && st(t, e, 1, -1);
}
function xu(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yh.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function qr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wd() {
  return Ze().memoizedState;
}
function Mo(e, t, n, r) {
  var o = ft();
  ((ee.flags |= e),
    (o.memoizedState = qr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Rl(e, t, n, r) {
  var o = Ze();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ae !== null) {
    var s = ae.memoizedState;
    if (((l = s.destroy), r !== null && sa(r, s.deps))) {
      o.memoizedState = qr(t, n, l, r);
      return;
    }
  }
  ((ee.flags |= e), (o.memoizedState = qr(1 | t, n, l, r)));
}
function wu(e, t) {
  return Mo(8390656, 8, e, t);
}
function ua(e, t) {
  return Rl(2048, 8, e, t);
}
function Hd(e, t) {
  return Rl(4, 2, e, t);
}
function Qd(e, t) {
  return Rl(4, 4, e, t);
}
function Kd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Rl(4, 4, Kd.bind(null, t, e), n)
  );
}
function ca() {}
function qd(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jd(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xd(e, t, n) {
  return yn & 21
    ? (it(n, t) || ((n = nd()), (ee.lanes |= n), (vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_e = !0)), (e.memoizedState = n));
}
function hh(e, t) {
  var n = W;
  ((W = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = cs.transition;
  cs.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((W = n), (cs.transition = r));
  }
}
function Yd() {
  return Ze().memoizedState;
}
function gh(e, t, n) {
  var r = Gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Zd(e))
  )
    ef(t, n);
  else if (((n = Ad(e, t, n, r)), n !== null)) {
    var o = Ne();
    (st(n, e, r, o), tf(n, t, r));
  }
}
function yh(e, t, n) {
  var r = Gt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zd(e)) ef(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          i = l(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = i), it(i, s))) {
          var a = t.interleaved;
          (a === null
            ? ((o.next = o), ta(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Ad(e, t, o, r)),
      n !== null && ((o = Ne()), st(n, e, r, o), tf(n, t, r)));
  }
}
function Zd(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function ef(e, t) {
  _r = cl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function tf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Bi(e, n));
  }
}
var dl = {
    readContext: Ye,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  vh = {
    readContext: Ye,
    useCallback: function (e, t) {
      return ((ft().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ye,
    useEffect: wu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mo(4194308, 4, Kd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gh.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: xu,
    useDebugValue: ca,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = xu(!1),
        t = e[0];
      return ((e = hh.bind(null, e[1])), (ft().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        o = ft();
      if (Y) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(N(349));
        yn & 30 || Md(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        wu(Bd.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        qr(9, Dd.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = de.identifierPrefix;
      if (Y) {
        var n = St,
          r = wt;
        ((n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = mh++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  xh = {
    readContext: Ye,
    useCallback: qd,
    useContext: Ye,
    useEffect: ua,
    useImperativeHandle: Gd,
    useInsertionEffect: Hd,
    useLayoutEffect: Qd,
    useMemo: Jd,
    useReducer: ds,
    useRef: Wd,
    useState: function () {
      return ds(Gr);
    },
    useDebugValue: ca,
    useDeferredValue: function (e) {
      var t = Ze();
      return Xd(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = ds(Gr)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Ud,
    useSyncExternalStore: Fd,
    useId: Yd,
    unstable_isNewReconciler: !1,
  },
  wh = {
    readContext: Ye,
    useCallback: qd,
    useContext: Ye,
    useEffect: ua,
    useImperativeHandle: Gd,
    useInsertionEffect: Hd,
    useLayoutEffect: Qd,
    useMemo: Jd,
    useReducer: fs,
    useRef: Wd,
    useState: function () {
      return fs(Gr);
    },
    useDebugValue: ca,
    useDeferredValue: function (e) {
      var t = Ze();
      return ae === null ? (t.memoizedState = e) : Xd(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = fs(Gr)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Ud,
    useSyncExternalStore: Fd,
    useId: Yd,
    unstable_isNewReconciler: !1,
  };
function nt(e, t) {
  if (e && e.defaultProps) {
    ((t = ne({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ri(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? En(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = Gt(e),
      l = Et(r, o);
    ((l.payload = t),
      n != null && (l.callback = n),
      (t = Qt(e, l, o)),
      t !== null && (st(t, e, o, r), Uo(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = Gt(e),
      l = Et(r, o);
    ((l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Qt(e, l, o)),
      t !== null && (st(t, e, o, r), Uo(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = Gt(e),
      o = Et(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Qt(e, o, r)),
      t !== null && (st(t, e, r, n), Uo(t, e, r)));
  },
};
function Su(e, t, n, r, o, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Br(n, r) || !Br(o, l)
        : !0
  );
}
function nf(e, t, n) {
  var r = !1,
    o = Yt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ye(l))
      : ((o = Oe(t) ? hn : ke.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Qn(e, o) : Yt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Eu(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pl.enqueueReplaceState(t, t.state, null));
}
function oi(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), na(e));
  var l = t.contextType;
  (typeof l == "object" && l !== null
    ? (o.context = Ye(l))
    : ((l = Oe(t) ? hn : ke.current), (o.context = Qn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (ri(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Pl.enqueueReplaceState(o, o.state, null),
      al(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function Jn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Gp(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ps(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function li(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Sh = typeof WeakMap == "function" ? WeakMap : Map;
function rf(e, t, n) {
  ((n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (pl || ((pl = !0), (hi = r)), li(e, t));
    }),
    n
  );
}
function of(e, t, n) {
  ((n = Et(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        li(e, t);
      }));
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        (li(e, t),
          typeof r != "function" &&
            (Kt === null ? (Kt = new Set([this])) : Kt.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ku(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sh();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = bh.bind(null, e, t, n)), t.then(e, e));
}
function Cu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Et(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Eh = Rt.ReactCurrentOwner,
  _e = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? zd(t, null, n, r) : Gn(t, e.child, n, r);
}
function ju(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    $n(t, o),
    (r = ia(e, t, n, r, l, o)),
    (n = aa()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jt(e, t, o))
      : (Y && n && qi(t), (t.flags |= 1), Ce(e, t, r, o), t.child)
  );
}
function Ru(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !va(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), lf(e, t, l, r, o))
      : ((e = Vo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Br), n(s, r) && e.ref === t.ref)
    )
      return jt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = qt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function lf(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Br(l, r) && e.ref === t.ref)
      if (((_e = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (_e = !0);
      else return ((t.lanes = e.lanes), jt(e, t, o));
  }
  return si(e, t, n, r, o);
}
function sf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(Un, Fe),
        (Fe |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(Un, Fe),
          (Fe |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        Q(Un, Fe),
        (Fe |= r));
    }
  else
    (l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Q(Un, Fe),
      (Fe |= r));
  return (Ce(e, t, o, n), t.child);
}
function af(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function si(e, t, n, r, o) {
  var l = Oe(n) ? hn : ke.current;
  return (
    (l = Qn(t, l)),
    $n(t, o),
    (n = ia(e, t, n, r, l, o)),
    (r = aa()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jt(e, t, o))
      : (Y && r && qi(t), (t.flags |= 1), Ce(e, t, n, o), t.child)
  );
}
function Pu(e, t, n, r, o) {
  if (Oe(n)) {
    var l = !0;
    rl(t);
  } else l = !1;
  if (($n(t, o), t.stateNode === null))
    (Do(e, t), nf(t, n, r), oi(t, n, r, o), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      i = t.memoizedProps;
    s.props = i;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ye(u))
      : ((u = Oe(n) ? hn : ke.current), (u = Qn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((i !== r || a !== u) && Eu(t, s, r, u)),
      (bt = !1));
    var h = t.memoizedState;
    ((s.state = h),
      al(t, r, s, o),
      (a = t.memoizedState),
      i !== r || h !== a || Te.current || bt
        ? (typeof c == "function" && (ri(t, n, c, r), (a = t.memoizedState)),
          (i = bt || Su(t, n, i, r, h, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = i))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      bd(e, t),
      (i = t.memoizedProps),
      (u = t.type === t.elementType ? i : nt(t.type, i)),
      (s.props = u),
      (f = t.pendingProps),
      (h = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ye(a))
        : ((a = Oe(n) ? hn : ke.current), (a = Qn(t, a))));
    var w = n.getDerivedStateFromProps;
    ((c =
      typeof w == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((i !== f || h !== a) && Eu(t, s, r, a)),
      (bt = !1),
      (h = t.memoizedState),
      (s.state = h),
      al(t, r, s, o));
    var y = t.memoizedState;
    i !== f || h !== y || Te.current || bt
      ? (typeof w == "function" && (ri(t, n, w, r), (y = t.memoizedState)),
        (u = bt || Su(t, n, u, r, h, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (i === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (i === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ii(e, t, n, r, l, o);
}
function ii(e, t, n, r, o, l) {
  af(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (o && pu(t, n, !1), jt(e, t, l));
  ((r = t.stateNode), (Eh.current = t));
  var i =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Gn(t, e.child, null, l)), (t.child = Gn(t, null, i, l)))
      : Ce(e, t, i, l),
    (t.memoizedState = r.state),
    o && pu(t, n, !0),
    t.child
  );
}
function uf(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? fu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && fu(e, t.context, !1),
    ra(e, t.containerInfo));
}
function _u(e, t, n, r, o) {
  return (Kn(), Xi(o), (t.flags |= 256), Ce(e, t, n, r), t.child);
}
var ai = { dehydrated: null, treeContext: null, retryLane: 0 };
function ui(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cf(e, t, n) {
  var r = t.pendingProps,
    o = Z.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    i;
  if (
    ((i = s) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Q(Z, o & 1),
    e === null)
  )
    return (
      ti(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = Ol(s, r, 0, null)),
              (e = pn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ui(n)),
              (t.memoizedState = ai),
              e)
            : da(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return kh(e, t, s, r, i, o, n);
  if (l) {
    ((l = r.fallback), (s = t.mode), (o = e.child), (i = o.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = qt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = qt(i, l)) : ((l = pn(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ui(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ai),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = qt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function da(e, t) {
  return (
    (t = Ol({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function No(e, t, n, r) {
  return (
    r !== null && Xi(r),
    Gn(t, e.child, null, n),
    (e = da(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function kh(e, t, n, r, o, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ps(Error(N(422)))), No(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (o = t.mode),
          (r = Ol({ mode: "visible", children: r.children }, o, 0, null)),
          (l = pn(l, o, s, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && Gn(t, e.child, null, s),
          (t.child.memoizedState = ui(s)),
          (t.memoizedState = ai),
          l);
  if (!(t.mode & 1)) return No(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var i = r.dgst;
    return (
      (r = i),
      (l = Error(N(419))),
      (r = ps(l, r, void 0)),
      No(e, t, s, r)
    );
  }
  if (((i = (s & e.childLanes) !== 0), _e || i)) {
    if (((r = de), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Nt(e, o), st(r, e, o, -1)));
    }
    return (ya(), (r = ps(Error(N(421)))), No(e, t, s, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ih.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Be = Ht(o.nextSibling)),
      ($e = t),
      (Y = !0),
      (ot = null),
      e !== null &&
        ((Ge[qe++] = wt),
        (Ge[qe++] = St),
        (Ge[qe++] = gn),
        (wt = e.id),
        (St = e.overflow),
        (gn = t)),
      (t = da(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Tu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ni(e.return, t, n));
}
function ms(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function df(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ce(e, t, r.children, n), (r = Z.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tu(e, n, t);
        else if (e.tag === 19) Tu(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((Q(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && ul(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ms(t, !1, o, n, l));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ul(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        ms(t, !0, n, null, l);
        break;
      case "together":
        ms(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Do(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = qt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Ch(e, t, n) {
  switch (t.tag) {
    case 3:
      (uf(t), Kn());
      break;
    case 5:
      Id(t);
      break;
    case 1:
      Oe(t.type) && rl(t);
      break;
    case 4:
      ra(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (Q(sl, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? cf(e, t, n)
            : (Q(Z, Z.current & 1),
              (e = jt(e, t, n)),
              e !== null ? e.sibling : null);
      Q(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return df(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Q(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), sf(e, t, n));
  }
  return jt(e, t, n);
}
var ff, ci, pf, mf;
ff = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
ci = function () {};
pf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), cn(ht.current));
    var l = null;
    switch (n) {
      case "input":
        ((o = Ls(e, o)), (r = Ls(e, r)), (l = []));
        break;
      case "select":
        ((o = ne({}, o, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (l = []));
        break;
      case "textarea":
        ((o = bs(e, o)), (r = bs(e, r)), (l = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = tl);
    }
    Us(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var i = o[u];
          for (s in i) i.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ar.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((i = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== i && (a != null || i != null))
      )
        if (u === "style")
          if (i) {
            for (s in i)
              !i.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                i[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else (n || (l || (l = []), l.push(u, n)), (n = a));
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (i = i ? i.__html : void 0),
              a != null && i !== a && (l = l || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (l = l || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Ar.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && q("scroll", e),
                    l || i === a || (l = []))
                  : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
mf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hr(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Nh(e, t, n) {
  var r = t.pendingProps;
  switch ((Ji(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ve(t), null);
    case 1:
      return (Oe(t.type) && nl(), ve(t), null);
    case 3:
      return (
        (r = t.stateNode),
        qn(),
        J(Te),
        J(ke),
        la(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ko(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (vi(ot), (ot = null)))),
        ci(e, t),
        ve(t),
        null
      );
    case 5:
      oa(t);
      var o = cn(Qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (pf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return (ve(t), null);
        }
        if (((e = cn(ht.current)), ko(t))) {
          ((r = t.stateNode), (n = t.type));
          var l = t.memoizedProps;
          switch (((r[pt] = t), (r[Wr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (q("cancel", r), q("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < kr.length; o++) q(kr[o], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (q("error", r), q("load", r));
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              (Ma(r, l), q("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!l.multiple }),
                q("invalid", r));
              break;
            case "textarea":
              (Ba(r, l), q("invalid", r));
          }
          (Us(n, l), (o = null));
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var i = l[s];
              s === "children"
                ? typeof i == "string"
                  ? r.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Eo(r.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Eo(r.textContent, i, e),
                    (o = ["children", "" + i]))
                : Ar.hasOwnProperty(s) &&
                  i != null &&
                  s === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              (mo(r), Da(r, l, !0));
              break;
            case "textarea":
              (mo(r), $a(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = tl);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Bc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[pt] = t),
            (e[Wr] = r),
            ff(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = Fs(n, r)), n)) {
              case "dialog":
                (q("cancel", e), q("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (q("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < kr.length; o++) q(kr[o], e);
                o = r;
                break;
              case "source":
                (q("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (q("error", e), q("load", e), (o = r));
                break;
              case "details":
                (q("toggle", e), (o = r));
                break;
              case "input":
                (Ma(e, r), (o = Ls(e, r)), q("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ne({}, r, { value: void 0 })),
                  q("invalid", e));
                break;
              case "textarea":
                (Ba(e, r), (o = bs(e, r)), q("invalid", e));
                break;
              default:
                o = r;
            }
            (Us(n, o), (i = o));
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var a = i[l];
                l === "style"
                  ? Wc(e, a)
                  : l === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && $c(e, a))
                    : l === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && br(e, a)
                        : typeof a == "number" && br(e, "" + a)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (Ar.hasOwnProperty(l)
                          ? a != null && l === "onScroll" && q("scroll", e)
                          : a != null && bi(e, l, a, s));
              }
            switch (n) {
              case "input":
                (mo(e), Da(e, r, !1));
                break;
              case "textarea":
                (mo(e), $a(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Fn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Fn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = tl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ve(t), null);
    case 6:
      if (e && t.stateNode != null) mf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = cn(Qr.current)), cn(ht.current), ko(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (l = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Eo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Eo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r));
      }
      return (ve(t), null);
    case 13:
      if (
        (J(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && Be !== null && t.mode & 1 && !(t.flags & 128))
          (Od(), Kn(), (t.flags |= 98560), (l = !1));
        else if (((l = ko(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(N(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(N(317));
            l[pt] = t;
          } else
            (Kn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ve(t), (l = !1));
        } else (ot !== null && (vi(ot), (ot = null)), (l = !0));
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? ue === 0 && (ue = 3) : ya())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        qn(),
        ci(e, t),
        e === null && $r(t.stateNode.containerInfo),
        ve(t),
        null
      );
    case 10:
      return (ea(t.type._context), ve(t), null);
    case 17:
      return (Oe(t.type) && nl(), ve(t), null);
    case 19:
      if ((J(Z), (l = t.memoizedState), l === null)) return (ve(t), null);
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) hr(l, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ul(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    hr(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (Q(Z, (Z.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          l.tail !== null &&
            se() > Xn &&
            ((t.flags |= 128), (r = !0), hr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ul(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              hr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !Y)
            )
              return (ve(t), null);
          } else
            2 * se() - l.renderingStartTime > Xn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), hr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = se()),
          (t.sibling = null),
          (n = Z.current),
          Q(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        ga(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Fe & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function jh(e, t) {
  switch ((Ji(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && nl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        qn(),
        J(Te),
        J(ke),
        la(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (oa(t), null);
    case 13:
      if ((J(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        Kn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (J(Z), null);
    case 4:
      return (qn(), null);
    case 10:
      return (ea(t.type._context), null);
    case 22:
    case 23:
      return (ga(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var jo = !1,
  we = !1,
  Rh = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function In(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else n.current = null;
}
function di(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var Ou = !1;
function Ph(e, t) {
  if (((Gs = Yo), (e = vd()), Gi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, l.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            i = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var w;
              f !== n || (o !== 0 && f.nodeType !== 3) || (i = s + o),
                f !== l || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (w = f.firstChild) !== null;
            )
              ((h = f), (f = w));
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++u === o && (i = s),
                h === l && ++c === r && (a = s),
                (w = f.nextSibling) !== null)
              )
                break;
              ((f = h), (h = f.parentNode));
            }
            f = w;
          }
          n = i === -1 || a === -1 ? null : { start: i, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qs = { focusedElem: e, selectionRange: n }, Yo = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (L = e));
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    x = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : nt(t.type, v),
                      x,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          oe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (L = e));
          break;
        }
        L = t.return;
      }
  return ((y = Ou), (Ou = !1), y);
}
function Tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        ((o.destroy = void 0), l !== void 0 && di(t, n, l));
      }
      o = o.next;
    } while (o !== r);
  }
}
function _l(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function fi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function hf(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), hf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[Wr], delete t[Ys], delete t[ch], delete t[dh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function gf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function pi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = tl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pi(e, t, n), e = e.sibling; e !== null; )
      (pi(e, t, n), (e = e.sibling));
}
function mi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (mi(e, t, n), e = e.sibling; e !== null; )
      (mi(e, t, n), (e = e.sibling));
}
var pe = null,
  rt = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) (yf(e, t, n), (n = n.sibling));
}
function yf(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function")
    try {
      mt.onCommitFiberUnmount(Sl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || In(n, t);
    case 6:
      var r = pe,
        o = rt;
      ((pe = null),
        Ot(e, t, n),
        (pe = r),
        (rt = o),
        pe !== null &&
          (rt
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode)));
      break;
    case 18:
      pe !== null &&
        (rt
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? is(e.parentNode, n)
              : e.nodeType === 1 && is(e, n),
            Mr(e))
          : is(pe, n.stateNode));
      break;
    case 4:
      ((r = pe),
        (o = rt),
        (pe = n.stateNode.containerInfo),
        (rt = !0),
        Ot(e, t, n),
        (pe = r),
        (rt = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            s = l.destroy;
          ((l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && di(n, t, s),
            (o = o.next));
        } while (o !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (In(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (i) {
          oe(n, t, i);
        }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Ot(e, t, n), (we = r))
        : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function zu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Rh()),
      t.forEach(function (r) {
        var o = Uh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          s = t,
          i = s;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              ((pe = i.stateNode), (rt = !1));
              break e;
            case 3:
              ((pe = i.stateNode.containerInfo), (rt = !0));
              break e;
            case 4:
              ((pe = i.stateNode.containerInfo), (rt = !0));
              break e;
          }
          i = i.return;
        }
        if (pe === null) throw Error(N(160));
        (yf(l, s, o), (pe = null), (rt = !1));
        var a = o.alternate;
        (a !== null && (a.return = null), (o.return = null));
      } catch (u) {
        oe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (vf(t, e), (t = t.sibling));
}
function vf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), dt(e), r & 4)) {
        try {
          (Tr(3, e, e.return), _l(3, e));
        } catch (v) {
          oe(e, e.return, v);
        }
        try {
          Tr(5, e, e.return);
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      break;
    case 1:
      (et(t, e), dt(e), r & 512 && n !== null && In(n, n.return));
      break;
    case 5:
      if (
        (et(t, e),
        dt(e),
        r & 512 && n !== null && In(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          br(o, "");
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          i = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (i === "input" && l.type === "radio" && l.name != null && Mc(o, l),
              Fs(i, s));
            var u = Fs(i, l);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? Wc(o, f)
                : c === "dangerouslySetInnerHTML"
                  ? $c(o, f)
                  : c === "children"
                    ? br(o, f)
                    : bi(o, c, f, u);
            }
            switch (i) {
              case "input":
                zs(o, l);
                break;
              case "textarea":
                Dc(o, l);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var w = l.value;
                w != null
                  ? Fn(o, !!l.multiple, w, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Fn(o, !!l.multiple, l.defaultValue, !0)
                      : Fn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Wr] = l;
          } catch (v) {
            oe(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((et(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        ((o = e.stateNode), (l = e.memoizedProps));
        try {
          o.nodeValue = l;
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mr(t.containerInfo);
        } catch (v) {
          oe(e, e.return, v);
        }
      break;
    case 4:
      (et(t, e), dt(e));
      break;
    case 13:
      (et(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ma = se())),
        r & 4 && zu(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || c), et(t, e), (we = u)) : et(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((h = L), (w = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, h, h.return);
                  break;
                case 1:
                  In(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (v) {
                      oe(r, n, v);
                    }
                  }
                  break;
                case 5:
                  In(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    bu(f);
                    continue;
                  }
              }
              w !== null ? ((w.return = h), (L = w)) : bu(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((o = f.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((i = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (i.style.display = Vc("display", s))));
              } catch (v) {
                oe(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                oe(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (et(t, e), dt(e), r & 4 && zu(e));
      break;
    case 21:
      break;
    default:
      (et(t, e), dt(e));
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (br(o, ""), (r.flags &= -33));
          var l = Lu(e);
          mi(e, l, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            i = Lu(e);
          pi(e, i, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      oe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function _h(e, t, n) {
  ((L = e), xf(e));
}
function xf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      l = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || jo;
      if (!s) {
        var i = o.alternate,
          a = (i !== null && i.memoizedState !== null) || we;
        i = jo;
        var u = we;
        if (((jo = s), (we = a) && !u))
          for (L = o; L !== null; )
            ((s = L),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Iu(o)
                : a !== null
                  ? ((a.return = s), (L = a))
                  : Iu(o));
        for (; l !== null; ) ((L = l), xf(l), (l = l.sibling));
        ((L = o), (jo = i), (we = u));
      }
      Au(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (L = l)) : Au(e);
  }
}
function Au(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || _l(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && vu(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vu(t, s, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Mr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        we || (t.flags & 512 && fi(t));
      } catch (h) {
        oe(t, t.return, h);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function bu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function Iu(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _l(4, t);
          } catch (a) {
            oe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              oe(t, o, a);
            }
          }
          var l = t.return;
          try {
            fi(t);
          } catch (a) {
            oe(t, l, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            fi(t);
          } catch (a) {
            oe(t, s, a);
          }
      }
    } catch (a) {
      oe(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      ((i.return = t.return), (L = i));
      break;
    }
    L = t.return;
  }
}
var Th = Math.ceil,
  fl = Rt.ReactCurrentDispatcher,
  fa = Rt.ReactCurrentOwner,
  Xe = Rt.ReactCurrentBatchConfig,
  $ = 0,
  de = null,
  ie = null,
  me = 0,
  Fe = 0,
  Un = en(0),
  ue = 0,
  Jr = null,
  vn = 0,
  Tl = 0,
  pa = 0,
  Or = null,
  Pe = null,
  ma = 0,
  Xn = 1 / 0,
  vt = null,
  pl = !1,
  hi = null,
  Kt = null,
  Ro = !1,
  Mt = null,
  ml = 0,
  Lr = 0,
  gi = null,
  Bo = -1,
  $o = 0;
function Ne() {
  return $ & 6 ? se() : Bo !== -1 ? Bo : (Bo = se());
}
function Gt(e) {
  return e.mode & 1
    ? $ & 2 && me !== 0
      ? me & -me
      : ph.transition !== null
        ? ($o === 0 && ($o = nd()), $o)
        : ((e = W),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ud(e.type))),
          e)
    : 1;
}
function st(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (gi = null), Error(N(185)));
  (eo(e, n, r),
    (!($ & 2) || e !== de) &&
      (e === de && (!($ & 2) && (Tl |= n), ue === 4 && Ut(e, me)),
      Le(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((Xn = se() + 500), jl && tn())));
}
function Le(e, t) {
  var n = e.callbackNode;
  pm(e, t);
  var r = Xo(e, e === de ? me : 0);
  if (r === 0)
    (n !== null && Ha(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ha(n), t === 1))
      (e.tag === 0 ? fh(Uu.bind(null, e)) : Pd(Uu.bind(null, e)),
        ah(function () {
          !($ & 6) && tn();
        }),
        (n = null));
    else {
      switch (rd(r)) {
        case 1:
          n = Di;
          break;
        case 4:
          n = ed;
          break;
        case 16:
          n = Jo;
          break;
        case 536870912:
          n = td;
          break;
        default:
          n = Jo;
      }
      n = Rf(n, wf.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function wf(e, t) {
  if (((Bo = -1), ($o = 0), $ & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Vn() && e.callbackNode !== n) return null;
  var r = Xo(e, e === de ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hl(e, r);
  else {
    t = r;
    var o = $;
    $ |= 2;
    var l = Ef();
    (de !== e || me !== t) && ((vt = null), (Xn = se() + 500), fn(e, t));
    do
      try {
        zh();
        break;
      } catch (i) {
        Sf(e, i);
      }
    while (!0);
    (Zi(),
      (fl.current = l),
      ($ = o),
      ie !== null ? (t = 0) : ((de = null), (me = 0), (t = ue)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Vs(e)), o !== 0 && ((r = o), (t = yi(e, o)))), t === 1)
    )
      throw ((n = Jr), fn(e, 0), Ut(e, r), Le(e, se()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Oh(o) &&
          ((t = hl(e, r)),
          t === 2 && ((l = Vs(e)), l !== 0 && ((r = l), (t = yi(e, l)))),
          t === 1))
      )
        throw ((n = Jr), fn(e, 0), Ut(e, r), Le(e, se()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          sn(e, Pe, vt);
          break;
        case 3:
          if (
            (Ut(e, r), (r & 130023424) === r && ((t = ma + 500 - se()), 10 < t))
          ) {
            if (Xo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Ne(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Xs(sn.bind(null, e, Pe, vt), t);
            break;
          }
          sn(e, Pe, vt);
          break;
        case 4:
          if ((Ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - lt(r);
            ((l = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~l));
          }
          if (
            ((r = o),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Th(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Xs(sn.bind(null, e, Pe, vt), r);
            break;
          }
          sn(e, Pe, vt);
          break;
        case 5:
          sn(e, Pe, vt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return (Le(e, se()), e.callbackNode === n ? wf.bind(null, e) : null);
}
function yi(e, t) {
  var n = Or;
  return (
    e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
    (e = hl(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && vi(t)),
    e
  );
}
function vi(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function Oh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!it(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Ut(e, t) {
  for (
    t &= ~pa,
      t &= ~Tl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - lt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Uu(e) {
  if ($ & 6) throw Error(N(327));
  Vn();
  var t = Xo(e, 0);
  if (!(t & 1)) return (Le(e, se()), null);
  var n = hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vs(e);
    r !== 0 && ((t = r), (n = yi(e, r)));
  }
  if (n === 1) throw ((n = Jr), fn(e, 0), Ut(e, t), Le(e, se()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sn(e, Pe, vt),
    Le(e, se()),
    null
  );
}
function ha(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    (($ = n), $ === 0 && ((Xn = se() + 500), jl && tn()));
  }
}
function xn(e) {
  Mt !== null && Mt.tag === 0 && !($ & 6) && Vn();
  var t = $;
  $ |= 1;
  var n = Xe.transition,
    r = W;
  try {
    if (((Xe.transition = null), (W = 1), e)) return e();
  } finally {
    ((W = r), (Xe.transition = n), ($ = t), !($ & 6) && tn());
  }
}
function ga() {
  ((Fe = Un.current), J(Un));
}
function fn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ih(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((Ji(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && nl());
          break;
        case 3:
          (qn(), J(Te), J(ke), la());
          break;
        case 5:
          oa(r);
          break;
        case 4:
          qn();
          break;
        case 13:
          J(Z);
          break;
        case 19:
          J(Z);
          break;
        case 10:
          ea(r.type._context);
          break;
        case 22:
        case 23:
          ga();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (ie = e = qt(e.current, null)),
    (me = Fe = t),
    (ue = 0),
    (Jr = null),
    (pa = Tl = vn = 0),
    (Pe = Or = null),
    un !== null)
  ) {
    for (t = 0; t < un.length; t++)
      if (((n = un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          ((l.next = o), (r.next = s));
        }
        n.pending = r;
      }
    un = null;
  }
  return e;
}
function Sf(e, t) {
  do {
    var n = ie;
    try {
      if ((Zi(), (Fo.current = dl), cl)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        cl = !1;
      }
      if (
        ((yn = 0),
        (ce = ae = ee = null),
        (_r = !1),
        (Kr = 0),
        (fa.current = null),
        n === null || n.return === null)
      ) {
        ((ue = 1), (Jr = t), (ie = null));
        break;
      }
      e: {
        var l = e,
          s = n.return,
          i = n,
          a = t;
        if (
          ((t = me),
          (i.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = i,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = Cu(s);
          if (w !== null) {
            ((w.flags &= -257),
              Nu(w, s, i, l, t),
              w.mode & 1 && ku(l, u, t),
              (t = w),
              (a = u));
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              (v.add(a), (t.updateQueue = v));
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (ku(l, u, t), ya());
              break e;
            }
            a = Error(N(426));
          }
        } else if (Y && i.mode & 1) {
          var x = Cu(s);
          if (x !== null) {
            (!(x.flags & 65536) && (x.flags |= 256),
              Nu(x, s, i, l, t),
              Xi(Jn(a, i)));
            break e;
          }
        }
        ((l = a = Jn(a, i)),
          ue !== 4 && (ue = 2),
          Or === null ? (Or = [l]) : Or.push(l),
          (l = s));
        do {
          switch (l.tag) {
            case 3:
              ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
              var m = rf(l, a, t);
              yu(l, m);
              break e;
            case 1:
              i = a;
              var p = l.type,
                g = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Kt === null || !Kt.has(g))))
              ) {
                ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
                var S = of(l, i, t);
                yu(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Cf(n);
    } catch (C) {
      ((t = C), ie === n && n !== null && (ie = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Ef() {
  var e = fl.current;
  return ((fl.current = dl), e === null ? dl : e);
}
function ya() {
  ((ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    de === null || (!(vn & 268435455) && !(Tl & 268435455)) || Ut(de, me));
}
function hl(e, t) {
  var n = $;
  $ |= 2;
  var r = Ef();
  (de !== e || me !== t) && ((vt = null), fn(e, t));
  do
    try {
      Lh();
      break;
    } catch (o) {
      Sf(e, o);
    }
  while (!0);
  if ((Zi(), ($ = n), (fl.current = r), ie !== null)) throw Error(N(261));
  return ((de = null), (me = 0), ue);
}
function Lh() {
  for (; ie !== null; ) kf(ie);
}
function zh() {
  for (; ie !== null && !om(); ) kf(ie);
}
function kf(e) {
  var t = jf(e.alternate, e, Fe);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Cf(e) : (ie = t),
    (fa.current = null));
}
function Cf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = jh(n, t)), n !== null)) {
        ((n.flags &= 32767), (ie = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ue = 6), (ie = null));
        return;
      }
    } else if (((n = Nh(n, t, Fe)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function sn(e, t, n) {
  var r = W,
    o = Xe.transition;
  try {
    ((Xe.transition = null), (W = 1), Ah(e, t, n, r));
  } finally {
    ((Xe.transition = o), (W = r));
  }
  return null;
}
function Ah(e, t, n, r) {
  do Vn();
  while (Mt !== null);
  if ($ & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var l = n.lanes | n.childLanes;
  if (
    (mm(e, l),
    e === de && ((ie = de = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ro ||
      ((Ro = !0),
      Rf(Jo, function () {
        return (Vn(), null);
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ((l = Xe.transition), (Xe.transition = null));
    var s = W;
    W = 1;
    var i = $;
    (($ |= 4),
      (fa.current = null),
      Ph(e, n),
      vf(n, e),
      eh(qs),
      (Yo = !!Gs),
      (qs = Gs = null),
      (e.current = n),
      _h(n),
      lm(),
      ($ = i),
      (W = s),
      (Xe.transition = l));
  } else e.current = n;
  if (
    (Ro && ((Ro = !1), (Mt = e), (ml = o)),
    (l = e.pendingLanes),
    l === 0 && (Kt = null),
    am(n.stateNode),
    Le(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (pl) throw ((pl = !1), (e = hi), (hi = null), e);
  return (
    ml & 1 && e.tag !== 0 && Vn(),
    (l = e.pendingLanes),
    l & 1 ? (e === gi ? Lr++ : ((Lr = 0), (gi = e))) : (Lr = 0),
    tn(),
    null
  );
}
function Vn() {
  if (Mt !== null) {
    var e = rd(ml),
      t = Xe.transition,
      n = W;
    try {
      if (((Xe.transition = null), (W = 16 > e ? 16 : e), Mt === null))
        var r = !1;
      else {
        if (((e = Mt), (Mt = null), (ml = 0), $ & 6)) throw Error(N(331));
        var o = $;
        for ($ |= 4, L = e.current; L !== null; ) {
          var l = L,
            s = l.child;
          if (L.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var a = 0; a < i.length; a++) {
                var u = i[a];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, c, l);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), (L = f));
                  else
                    for (; L !== null; ) {
                      c = L;
                      var h = c.sibling,
                        w = c.return;
                      if ((hf(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = w), (L = h));
                        break;
                      }
                      L = w;
                    }
                }
              }
              var y = l.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var x = v.sibling;
                    ((v.sibling = null), (v = x));
                  } while (v !== null);
                }
              }
              L = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) ((s.return = l), (L = s));
          else
            e: for (; L !== null; ) {
              if (((l = L), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tr(9, l, l.return);
                }
              var m = l.sibling;
              if (m !== null) {
                ((m.return = l.return), (L = m));
                break e;
              }
              L = l.return;
            }
        }
        var p = e.current;
        for (L = p; L !== null; ) {
          s = L;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) ((g.return = s), (L = g));
          else
            e: for (s = p; L !== null; ) {
              if (((i = L), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _l(9, i);
                  }
                } catch (C) {
                  oe(i, i.return, C);
                }
              if (i === s) {
                L = null;
                break e;
              }
              var S = i.sibling;
              if (S !== null) {
                ((S.return = i.return), (L = S));
                break e;
              }
              L = i.return;
            }
        }
        if (
          (($ = o), tn(), mt && typeof mt.onPostCommitFiberRoot == "function")
        )
          try {
            mt.onPostCommitFiberRoot(Sl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((W = n), (Xe.transition = t));
    }
  }
  return !1;
}
function Fu(e, t, n) {
  ((t = Jn(n, t)),
    (t = rf(e, t, 1)),
    (e = Qt(e, t, 1)),
    (t = Ne()),
    e !== null && (eo(e, 1, t), Le(e, t)));
}
function oe(e, t, n) {
  if (e.tag === 3) Fu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Kt === null || !Kt.has(r)))
        ) {
          ((e = Jn(n, e)),
            (e = of(t, e, 1)),
            (t = Qt(t, e, 1)),
            (e = Ne()),
            t !== null && (eo(t, 1, e), Le(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function bh(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (me & n) === n &&
      (ue === 4 || (ue === 3 && (me & 130023424) === me && 500 > se() - ma)
        ? fn(e, 0)
        : (pa |= n)),
    Le(e, t));
}
function Nf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yo), (yo <<= 1), !(yo & 130023424) && (yo = 4194304))
      : (t = 1));
  var n = Ne();
  ((e = Nt(e, t)), e !== null && (eo(e, t, n), Le(e, n)));
}
function Ih(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Nf(e, n));
}
function Uh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  (r !== null && r.delete(t), Nf(e, n));
}
var jf;
jf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((_e = !1), Ch(e, t, n));
      _e = !!(e.flags & 131072);
    }
  else ((_e = !1), Y && t.flags & 1048576 && _d(t, ll, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Do(e, t), (e = t.pendingProps));
      var o = Qn(t, ke.current);
      ($n(t, n), (o = ia(null, t, r, e, o, n)));
      var l = aa();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((l = !0), rl(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            na(t),
            (o.updater = Pl),
            (t.stateNode = o),
            (o._reactInternals = t),
            oi(t, r, e, n),
            (t = ii(null, t, r, !0, l, n)))
          : ((t.tag = 0), Y && l && qi(t), Ce(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Do(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Mh(r)),
          (e = nt(r, e)),
          o)
        ) {
          case 0:
            t = si(null, t, r, e, n);
            break e;
          case 1:
            t = Pu(null, t, r, e, n);
            break e;
          case 11:
            t = ju(null, t, r, e, n);
            break e;
          case 14:
            t = Ru(null, t, r, nt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        si(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        Pu(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((uf(t), e === null)) throw Error(N(387));
        ((r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          bd(e, t),
          al(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            ((o = Jn(Error(N(423)), t)), (t = _u(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = Jn(Error(N(424)), t)), (t = _u(e, t, r, n, o)));
            break e;
          } else
            for (
              Be = Ht(t.stateNode.containerInfo.firstChild),
                $e = t,
                Y = !0,
                ot = null,
                n = zd(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Kn(), r === o)) {
            t = jt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Id(t),
        e === null && ti(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Js(r, o) ? (s = null) : l !== null && Js(r, l) && (t.flags |= 32),
        af(e, t),
        Ce(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && ti(t), null);
    case 13:
      return cf(e, t, n);
    case 4:
      return (
        ra(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gn(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        ju(e, t, r, o, n)
      );
    case 7:
      return (Ce(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ce(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ce(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (s = o.value),
          Q(sl, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (it(l.value, s)) {
            if (l.children === o.children && !Te.current) {
              t = jt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var i = l.dependencies;
              if (i !== null) {
                s = l.child;
                for (var a = i.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      ((a = Et(-1, n & -n)), (a.tag = 2));
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a));
                      }
                    }
                    ((l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      ni(l.return, n, t),
                      (i.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(N(341));
                ((s.lanes |= n),
                  (i = s.alternate),
                  i !== null && (i.lanes |= n),
                  ni(s, n, t),
                  (s = l.sibling));
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    ((l.return = s.return), (s = l));
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        (Ce(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        $n(t, n),
        (o = Ye(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = nt(r, t.pendingProps)),
        (o = nt(r.type, o)),
        Ru(e, t, r, o, n)
      );
    case 15:
      return lf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : nt(r, o)),
        Do(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), rl(t)) : (e = !1),
        $n(t, n),
        nf(t, r, o),
        oi(t, r, o, n),
        ii(null, t, r, !0, e, n)
      );
    case 19:
      return df(e, t, n);
    case 22:
      return sf(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Rf(e, t) {
  return Zc(e, t);
}
function Fh(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Je(e, t, n, r) {
  return new Fh(e, t, n, r);
}
function va(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Mh(e) {
  if (typeof e == "function") return va(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ui)) return 11;
    if (e === Fi) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vo(e, t, n, r, o, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) va(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Rn:
        return pn(n.children, o, l, t);
      case Ii:
        ((s = 8), (o |= 8));
        break;
      case Ps:
        return (
          (e = Je(12, n, t, o | 2)),
          (e.elementType = Ps),
          (e.lanes = l),
          e
        );
      case _s:
        return ((e = Je(13, n, t, o)), (e.elementType = _s), (e.lanes = l), e);
      case Ts:
        return ((e = Je(19, n, t, o)), (e.elementType = Ts), (e.lanes = l), e);
      case Ic:
        return Ol(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ac:
              s = 10;
              break e;
            case bc:
              s = 9;
              break e;
            case Ui:
              s = 11;
              break e;
            case Fi:
              s = 14;
              break e;
            case At:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(s, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = l),
    t
  );
}
function pn(e, t, n, r) {
  return ((e = Je(7, e, r, t)), (e.lanes = n), e);
}
function Ol(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = Ic),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function hs(e, t, n) {
  return ((e = Je(6, e, null, t)), (e.lanes = n), e);
}
function gs(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Dh(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Jl(0)),
    (this.expirationTimes = Jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function xa(e, t, n, r, o, l, s, i, a) {
  return (
    (e = new Dh(e, t, n, i, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Je(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    na(l),
    e
  );
}
function Bh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: jn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Pf(e) {
  if (!e) return Yt;
  e = e._reactInternals;
  e: {
    if (En(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return Rd(e, n, t);
  }
  return t;
}
function _f(e, t, n, r, o, l, s, i, a) {
  return (
    (e = xa(n, r, !0, e, o, l, s, i, a)),
    (e.context = Pf(null)),
    (n = e.current),
    (r = Ne()),
    (o = Gt(n)),
    (l = Et(r, o)),
    (l.callback = t ?? null),
    Qt(n, l, o),
    (e.current.lanes = o),
    eo(e, o, r),
    Le(e, r),
    e
  );
}
function Ll(e, t, n, r) {
  var o = t.current,
    l = Ne(),
    s = Gt(o);
  return (
    (n = Pf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Et(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qt(o, t, s)),
    e !== null && (st(e, o, s, l), Uo(e, o, s)),
    s
  );
}
function gl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function wa(e, t) {
  (Mu(e, t), (e = e.alternate) && Mu(e, t));
}
function $h() {
  return null;
}
var Tf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Sa(e) {
  this._internalRoot = e;
}
zl.prototype.render = Sa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Ll(e, t, null, null);
};
zl.prototype.unmount = Sa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (xn(function () {
      Ll(null, e, null, null);
    }),
      (t[Ct] = null));
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
    (It.splice(n, 0, e), n === 0 && ad(e));
  }
};
function Ea(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Al(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Du() {}
function Vh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = gl(s);
        l.call(u);
      };
    }
    var s = _f(t, r, e, 0, null, !1, !1, "", Du);
    return (
      (e._reactRootContainer = s),
      (e[Ct] = s.current),
      $r(e.nodeType === 8 ? e.parentNode : e),
      xn(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var i = r;
    r = function () {
      var u = gl(a);
      i.call(u);
    };
  }
  var a = xa(e, 0, !1, null, null, !1, !1, "", Du);
  return (
    (e._reactRootContainer = a),
    (e[Ct] = a.current),
    $r(e.nodeType === 8 ? e.parentNode : e),
    xn(function () {
      Ll(t, a, n, r);
    }),
    a
  );
}
function bl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var a = gl(s);
        i.call(a);
      };
    }
    Ll(t, s, e, o);
  } else s = Vh(n, t, e, o, r);
  return gl(s);
}
od = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Er(t.pendingLanes);
        n !== 0 &&
          (Bi(t, n | 1), Le(t, se()), !($ & 6) && ((Xn = se() + 500), tn()));
      }
      break;
    case 13:
      (xn(function () {
        var r = Nt(e, 1);
        if (r !== null) {
          var o = Ne();
          st(r, e, 1, o);
        }
      }),
        wa(e, 1));
  }
};
$i = function (e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      st(t, e, 134217728, n);
    }
    wa(e, 134217728);
  }
};
ld = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = Nt(e, t);
    if (n !== null) {
      var r = Ne();
      st(n, e, t, r);
    }
    wa(e, t);
  }
};
sd = function () {
  return W;
};
id = function (e, t) {
  var n = W;
  try {
    return ((W = e), t());
  } finally {
    W = n;
  }
};
Ds = function (e, t, n) {
  switch (t) {
    case "input":
      if ((zs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Nl(r);
            if (!o) throw Error(N(90));
            (Fc(r), zs(r, o));
          }
        }
      }
      break;
    case "textarea":
      Dc(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Fn(e, !!n.multiple, t, !1));
  }
};
Kc = ha;
Gc = xn;
var Wh = { usingClientEntryPoint: !1, Events: [no, On, Nl, Hc, Qc, ha] },
  gr = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Hh = {
    bundleType: gr.bundleType,
    version: gr.version,
    rendererPackageName: gr.rendererPackageName,
    rendererConfig: gr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Xc(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: gr.findFiberByHostInstance || $h,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Po.isDisabled && Po.supportsFiber)
    try {
      ((Sl = Po.inject(Hh)), (mt = Po));
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wh;
We.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ea(t)) throw Error(N(200));
  return Bh(e, t, null, n);
};
We.createRoot = function (e, t) {
  if (!Ea(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = Tf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = xa(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ct] = t.current),
    $r(e.nodeType === 8 ? e.parentNode : e),
    new Sa(t)
  );
};
We.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return ((e = Xc(t)), (e = e === null ? null : e.stateNode), e);
};
We.flushSync = function (e) {
  return xn(e);
};
We.hydrate = function (e, t, n) {
  if (!Al(t)) throw Error(N(200));
  return bl(null, e, t, !0, n);
};
We.hydrateRoot = function (e, t, n) {
  if (!Ea(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    s = Tf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = _f(t, null, e, 1, n ?? null, o, !1, l, s)),
    (e[Ct] = t.current),
    $r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new zl(t);
};
We.render = function (e, t, n) {
  if (!Al(t)) throw Error(N(200));
  return bl(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!Al(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (xn(function () {
        bl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ct] = null));
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = ha;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Al(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return bl(e, t, n, !1, r);
};
We.version = "18.3.1-next-f1338f8080-20240426";
function Of() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of);
    } catch (e) {
      console.error(e);
    }
}
(Of(), (Tc.exports = We));
var Qh = Tc.exports,
  Bu = Qh;
((js.createRoot = Bu.createRoot), (js.hydrateRoot = Bu.hydrateRoot));
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xr() {
  return (
    (Xr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xr.apply(this, arguments)
  );
}
var Dt;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Dt || (Dt = {}));
const $u = "popstate";
function Kh(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: s, hash: i } = r.location;
    return xi(
      "",
      { pathname: l, search: s, hash: i },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : yl(o);
  }
  return qh(t, n, null, e);
}
function te(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ka(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Gh() {
  return Math.random().toString(36).substr(2, 8);
}
function Vu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function xi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Xr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? rr(t) : t,
      { state: n, key: (t && t.key) || r || Gh() },
    )
  );
}
function yl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function rr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function qh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    s = o.history,
    i = Dt.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Xr({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    i = Dt.Pop;
    let x = c(),
      m = x == null ? null : x - u;
    ((u = x), a && a({ action: i, location: v.location, delta: m }));
  }
  function h(x, m) {
    i = Dt.Push;
    let p = xi(v.location, x, m);
    u = c() + 1;
    let g = Vu(p, u),
      S = v.createHref(p);
    try {
      s.pushState(g, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(S);
    }
    l && a && a({ action: i, location: v.location, delta: 1 });
  }
  function w(x, m) {
    i = Dt.Replace;
    let p = xi(v.location, x, m);
    u = c();
    let g = Vu(p, u),
      S = v.createHref(p);
    (s.replaceState(g, "", S),
      l && a && a({ action: i, location: v.location, delta: 0 }));
  }
  function y(x) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof x == "string" ? x : yl(x);
    return (
      (p = p.replace(/ $/, "%20")),
      te(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, m)
    );
  }
  let v = {
    get action() {
      return i;
    },
    get location() {
      return e(o, s);
    },
    listen(x) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener($u, f),
        (a = x),
        () => {
          (o.removeEventListener($u, f), (a = null));
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: y,
    encodeLocation(x) {
      let m = y(x);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: w,
    go(x) {
      return s.go(x);
    },
  };
  return v;
}
var Wu;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Wu || (Wu = {}));
function Jh(e, t, n) {
  return (n === void 0 && (n = "/"), Xh(e, t, n));
}
function Xh(e, t, n, r) {
  let o = typeof t == "string" ? rr(t) : t,
    l = Yn(o.pathname || "/", n);
  if (l == null) return null;
  let s = Lf(e);
  Yh(s);
  let i = null;
  for (let a = 0; i == null && a < s.length; ++a) {
    let u = ug(l);
    i = ig(s[a], u);
  }
  return i;
}
function Lf(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let o = (l, s, i) => {
    let a = {
      relativePath: i === void 0 ? l.path || "" : i,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: s,
      route: l,
    };
    a.relativePath.startsWith("/") &&
      (te(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Jt([r, a.relativePath]),
      c = n.concat(a);
    (l.children &&
      l.children.length > 0 &&
      (te(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Lf(l.children, t, c, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: lg(u, l.index), routesMeta: c }));
  };
  return (
    e.forEach((l, s) => {
      var i;
      if (l.path === "" || !((i = l.path) != null && i.includes("?"))) o(l, s);
      else for (let a of zf(l.path)) o(l, s, a);
    }),
    t
  );
}
function zf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let s = zf(r.join("/")),
    i = [];
  return (
    i.push(...s.map((a) => (a === "" ? l : [l, a].join("/")))),
    o && i.push(...s),
    i.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Yh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : sg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Zh = /^:[\w-]+$/,
  eg = 3,
  tg = 2,
  ng = 1,
  rg = 10,
  og = -2,
  Hu = (e) => e === "*";
function lg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Hu) && (r += og),
    t && (r += tg),
    n
      .filter((o) => !Hu(o))
      .reduce((o, l) => o + (Zh.test(l) ? eg : l === "" ? ng : rg), r)
  );
}
function sg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ig(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    l = "/",
    s = [];
  for (let i = 0; i < r.length; ++i) {
    let a = r[i],
      u = i === r.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      f = wi(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c,
      ),
      h = a.route;
    if (!f) return null;
    (Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: Jt([l, f.pathname]),
        pathnameBase: mg(Jt([l, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (l = Jt([l, f.pathnameBase])));
  }
  return s;
}
function wi(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ag(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    s = l.replace(/(.)\/+$/, "$1"),
    i = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: h, isOptional: w } = c;
      if (h === "*") {
        let v = i[f] || "";
        s = l.slice(0, l.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = i[f];
      return (
        w && !y ? (u[h] = void 0) : (u[h] = (y || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: l,
    pathnameBase: s,
    pattern: e,
  };
}
function ag(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ka(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, i, a) => (
            r.push({ paramName: i, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function ug(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ka(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Yn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const cg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  dg = (e) => cg.test(e);
function fg(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: o = "",
    } = typeof e == "string" ? rr(e) : e,
    l;
  if (n)
    if (dg(n)) l = n;
    else {
      if (n.includes("//")) {
        let s = n;
        ((n = n.replace(/\/\/+/g, "/")),
          ka(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (s + " -> " + n),
          ));
      }
      n.startsWith("/") ? (l = Qu(n.substring(1), "/")) : (l = Qu(n, t));
    }
  else l = t;
  return { pathname: l, search: hg(r), hash: gg(o) };
}
function Qu(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ys(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function pg(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Ca(e, t) {
  let n = pg(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Na(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = rr(e))
    : ((o = Xr({}, e)),
      te(
        !o.pathname || !o.pathname.includes("?"),
        ys("?", "pathname", "search", o),
      ),
      te(
        !o.pathname || !o.pathname.includes("#"),
        ys("#", "pathname", "hash", o),
      ),
      te(!o.search || !o.search.includes("#"), ys("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "",
    s = l ? "/" : o.pathname,
    i;
  if (s == null) i = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let h = s.split("/");
      for (; h[0] === ".."; ) (h.shift(), (f -= 1));
      o.pathname = h.join("/");
    }
    i = f >= 0 ? t[f] : "/";
  }
  let a = fg(o, i),
    u = s && s !== "/" && s.endsWith("/"),
    c = (l || s === ".") && n.endsWith("/");
  return (!a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a);
}
const Jt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  mg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  hg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  gg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function yg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Af = ["post", "put", "patch", "delete"];
new Set(Af);
const vg = ["get", ...Af];
new Set(vg);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yr() {
  return (
    (Yr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yr.apply(this, arguments)
  );
}
const Il = k.createContext(null),
  bf = k.createContext(null),
  Pt = k.createContext(null),
  Ul = k.createContext(null),
  _t = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  If = k.createContext(null);
function xg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  or() || te(!1);
  let { basename: r, navigator: o } = k.useContext(Pt),
    { hash: l, pathname: s, search: i } = Fl(e, { relative: n }),
    a = s;
  return (
    r !== "/" && (a = s === "/" ? r : Jt([r, s])),
    o.createHref({ pathname: a, search: i, hash: l })
  );
}
function or() {
  return k.useContext(Ul) != null;
}
function lr() {
  return (or() || te(!1), k.useContext(Ul).location);
}
function Uf(e) {
  k.useContext(Pt).static || k.useLayoutEffect(e);
}
function oo() {
  let { isDataRoute: e } = k.useContext(_t);
  return e ? Lg() : wg();
}
function wg() {
  or() || te(!1);
  let e = k.useContext(Il),
    { basename: t, future: n, navigator: r } = k.useContext(Pt),
    { matches: o } = k.useContext(_t),
    { pathname: l } = lr(),
    s = JSON.stringify(Ca(o, n.v7_relativeSplatPath)),
    i = k.useRef(!1);
  return (
    Uf(() => {
      i.current = !0;
    }),
    k.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !i.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Na(u, JSON.parse(s), l, c.relative === "path");
        (e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Jt([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c));
      },
      [t, r, s, l, e],
    )
  );
}
function ja() {
  let { matches: e } = k.useContext(_t),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Fl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = k.useContext(Pt),
    { matches: o } = k.useContext(_t),
    { pathname: l } = lr(),
    s = JSON.stringify(Ca(o, r.v7_relativeSplatPath));
  return k.useMemo(() => Na(e, JSON.parse(s), l, n === "path"), [e, s, l, n]);
}
function Sg(e, t) {
  return Eg(e, t);
}
function Eg(e, t, n, r) {
  or() || te(!1);
  let { navigator: o } = k.useContext(Pt),
    { matches: l } = k.useContext(_t),
    s = l[l.length - 1],
    i = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = lr(),
    c;
  if (t) {
    var f;
    let x = typeof t == "string" ? rr(t) : t;
    (a === "/" || ((f = x.pathname) != null && f.startsWith(a)) || te(!1),
      (c = x));
  } else c = u;
  let h = c.pathname || "/",
    w = h;
  if (a !== "/") {
    let x = a.replace(/^\//, "").split("/");
    w = "/" + h.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let y = Jh(e, { pathname: w }),
    v = Rg(
      y &&
        y.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, i, x.params),
            pathname: Jt([
              a,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? a
                : Jt([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          }),
        ),
      l,
      n,
      r,
    );
  return t && v
    ? k.createElement(
        Ul.Provider,
        {
          value: {
            location: Yr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: Dt.Pop,
          },
        },
        v,
      )
    : v;
}
function kg() {
  let e = Og(),
    t = yg(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const Cg = k.createElement(kg, null);
class Ng extends k.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          _t.Provider,
          { value: this.props.routeContext },
          k.createElement(If.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function jg(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = k.useContext(Il);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(_t.Provider, { value: t }, r)
  );
}
function Rg(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (l = r) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    i = (o = n) == null ? void 0 : o.errors;
  if (i != null) {
    let c = s.findIndex(
      (f) => f.route.id && (i == null ? void 0 : i[f.route.id]) !== void 0,
    );
    (c >= 0 || te(!1), (s = s.slice(0, Math.min(s.length, c + 1))));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: h, errors: w } = n,
          y =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!w || w[f.route.id] === void 0);
        if (f.route.lazy || y) {
          ((a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((c, f, h) => {
    let w,
      y = !1,
      v = null,
      x = null;
    n &&
      ((w = i && f.route.id ? i[f.route.id] : void 0),
      (v = f.route.errorElement || Cg),
      a &&
        (u < 0 && h === 0
          ? (zg("route-fallback"), (y = !0), (x = null))
          : u === h &&
            ((y = !0), (x = f.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, h + 1)),
      p = () => {
        let g;
        return (
          w
            ? (g = v)
            : y
              ? (g = x)
              : f.route.Component
                ? (g = k.createElement(f.route.Component, null))
                : f.route.element
                  ? (g = f.route.element)
                  : (g = c),
          k.createElement(jg, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? k.createElement(Ng, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: w,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Ff = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Ff || {}),
  Mf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Mf || {});
function Pg(e) {
  let t = k.useContext(Il);
  return (t || te(!1), t);
}
function _g(e) {
  let t = k.useContext(bf);
  return (t || te(!1), t);
}
function Tg(e) {
  let t = k.useContext(_t);
  return (t || te(!1), t);
}
function Df(e) {
  let t = Tg(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || te(!1), n.route.id);
}
function Og() {
  var e;
  let t = k.useContext(If),
    n = _g(),
    r = Df();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Lg() {
  let { router: e } = Pg(Ff.UseNavigateStable),
    t = Df(Mf.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Uf(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (o, l) {
        (l === void 0 && (l = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Yr({ fromRouteId: t }, l))));
      },
      [e, t],
    )
  );
}
const Ku = {};
function zg(e, t, n) {
  Ku[e] || (Ku[e] = !0);
}
function Ag(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Si(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  or() || te(!1);
  let { future: l, static: s } = k.useContext(Pt),
    { matches: i } = k.useContext(_t),
    { pathname: a } = lr(),
    u = oo(),
    c = Na(t, Ca(i, l.v7_relativeSplatPath), a, o === "path"),
    f = JSON.stringify(c);
  return (
    k.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: o }),
      [u, f, o, n, r],
    ),
    null
  );
}
function Ue(e) {
  te(!1);
}
function bg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Dt.Pop,
    navigator: l,
    static: s = !1,
    future: i,
  } = e;
  or() && te(!1);
  let a = t.replace(/^\/*/, "/"),
    u = k.useMemo(
      () => ({
        basename: a,
        navigator: l,
        static: s,
        future: Yr({ v7_relativeSplatPath: !1 }, i),
      }),
      [a, i, l, s],
    );
  typeof r == "string" && (r = rr(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: h = "",
      state: w = null,
      key: y = "default",
    } = r,
    v = k.useMemo(() => {
      let x = Yn(c, a);
      return x == null
        ? null
        : {
            location: { pathname: x, search: f, hash: h, state: w, key: y },
            navigationType: o,
          };
    }, [a, c, f, h, w, y, o]);
  return v == null
    ? null
    : k.createElement(
        Pt.Provider,
        { value: u },
        k.createElement(Ul.Provider, { children: n, value: v }),
      );
}
function Ig(e) {
  let { children: t, location: n } = e;
  return Sg(Ei(t), n);
}
new Promise(() => {});
function Ei(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, o) => {
      if (!k.isValidElement(r)) return;
      let l = [...t, o];
      if (r.type === k.Fragment) {
        n.push.apply(n, Ei(r.props.children, l));
        return;
      }
      (r.type !== Ue && te(!1), !r.props.index || !r.props.children || te(!1));
      let s = {
        id: r.props.id || l.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = Ei(r.props.children, l)), n.push(s));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vl() {
  return (
    (vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vl.apply(this, arguments)
  );
}
function Bf(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    ((o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]));
  return n;
}
function Ug(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Fg(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ug(e);
}
const Mg = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Dg = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  Bg = "6";
try {
  window.__reactRouterVersion = Bg;
} catch {}
const $g = k.createContext({ isTransitioning: !1 }),
  Vg = "startTransition",
  Gu = bp[Vg];
function Wg(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    l = k.useRef();
  l.current == null && (l.current = Kh({ window: o, v5Compat: !0 }));
  let s = l.current,
    [i, a] = k.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = k.useCallback(
      (f) => {
        u && Gu ? Gu(() => a(f)) : a(f);
      },
      [a, u],
    );
  return (
    k.useLayoutEffect(() => s.listen(c), [s, c]),
    k.useEffect(() => Ag(r), [r]),
    k.createElement(bg, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: s,
      future: r,
    })
  );
}
const Hg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Qg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ee = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: l,
        replace: s,
        state: i,
        target: a,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = t,
      h = Bf(t, Mg),
      { basename: w } = k.useContext(Pt),
      y,
      v = !1;
    if (typeof u == "string" && Qg.test(u) && ((y = u), Hg))
      try {
        let g = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          C = Yn(S.pathname, w);
        S.origin === g.origin && C != null
          ? (u = C + S.search + S.hash)
          : (v = !0);
      } catch {}
    let x = xg(u, { relative: o }),
      m = Gg(u, {
        replace: s,
        state: i,
        target: a,
        preventScrollReset: c,
        relative: o,
        viewTransition: f,
      });
    function p(g) {
      (r && r(g), g.defaultPrevented || m(g));
    }
    return k.createElement(
      "a",
      vl({}, h, { href: y || x, onClick: v || l ? r : p, ref: n, target: a }),
    );
  }),
  _o = k.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: l = "",
        end: s = !1,
        style: i,
        to: a,
        viewTransition: u,
        children: c,
      } = t,
      f = Bf(t, Dg),
      h = Fl(a, { relative: f.relative }),
      w = lr(),
      y = k.useContext(bf),
      { navigator: v, basename: x } = k.useContext(Pt),
      m = y != null && qg(h) && u === !0,
      p = v.encodeLocation ? v.encodeLocation(h).pathname : h.pathname,
      g = w.pathname,
      S =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    (o ||
      ((g = g.toLowerCase()),
      (S = S ? S.toLowerCase() : null),
      (p = p.toLowerCase())),
      S && x && (S = Yn(S, x) || S));
    const C = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let P = g === p || (!s && g.startsWith(p) && g.charAt(C) === "/"),
      R =
        S != null &&
        (S === p || (!s && S.startsWith(p) && S.charAt(p.length) === "/")),
      T = { isActive: P, isPending: R, isTransitioning: m },
      B = P ? r : void 0,
      b;
    typeof l == "function"
      ? (b = l(T))
      : (b = [
          l,
          P ? "active" : null,
          R ? "pending" : null,
          m ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let re = typeof i == "function" ? i(T) : i;
    return k.createElement(
      Ee,
      vl({}, f, {
        "aria-current": B,
        className: b,
        ref: n,
        style: re,
        to: a,
        viewTransition: u,
      }),
      typeof c == "function" ? c(T) : c,
    );
  });
var ki;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(ki || (ki = {}));
var qu;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(qu || (qu = {}));
function Kg(e) {
  let t = k.useContext(Il);
  return (t || te(!1), t);
}
function Gg(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: l,
      relative: s,
      viewTransition: i,
    } = t === void 0 ? {} : t,
    a = oo(),
    u = lr(),
    c = Fl(e, { relative: s });
  return k.useCallback(
    (f) => {
      if (Fg(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : yl(u) === yl(c);
        a(e, {
          replace: h,
          state: o,
          preventScrollReset: l,
          relative: s,
          viewTransition: i,
        });
      }
    },
    [u, a, c, r, o, n, e, l, s, i],
  );
}
function qg(e, t) {
  t === void 0 && (t = {});
  let n = k.useContext($g);
  n == null && te(!1);
  let { basename: r } = Kg(ki.useViewTransitionState),
    o = Fl(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let l = Yn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = Yn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return wi(o.pathname, s) != null || wi(o.pathname, l) != null;
}
function $f(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Jg } = Object.prototype,
  { getPrototypeOf: Ra } = Object,
  { iterator: Ml, toStringTag: Vf } = Symbol,
  Dl = ((e) => (t) => {
    const n = Jg.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ct = (e) => ((e = e.toLowerCase()), (t) => Dl(t) === e),
  Bl = (e) => (t) => typeof t === e,
  { isArray: sr } = Array,
  Zn = Bl("undefined");
function lo(e) {
  return (
    e !== null &&
    !Zn(e) &&
    e.constructor !== null &&
    !Zn(e.constructor) &&
    ze(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Wf = ct("ArrayBuffer");
function Xg(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Wf(e.buffer)),
    t
  );
}
const Yg = Bl("string"),
  ze = Bl("function"),
  Hf = Bl("number"),
  so = (e) => e !== null && typeof e == "object",
  Zg = (e) => e === !0 || e === !1,
  Wo = (e) => {
    if (Dl(e) !== "object") return !1;
    const t = Ra(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Vf in e) &&
      !(Ml in e)
    );
  },
  ey = (e) => {
    if (!so(e) || lo(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  ty = ct("Date"),
  ny = ct("File"),
  ry = ct("Blob"),
  oy = ct("FileList"),
  ly = (e) => so(e) && ze(e.pipe),
  sy = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ze(e.append) &&
          ((t = Dl(e)) === "formdata" ||
            (t === "object" &&
              ze(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  iy = ct("URLSearchParams"),
  [ay, uy, cy, dy] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ct,
  ),
  fy = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function io(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), sr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    if (lo(e)) return;
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = l.length;
    let i;
    for (r = 0; r < s; r++) ((i = l[r]), t.call(null, e[i], i, e));
  }
}
function Qf(e, t) {
  if (lo(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const dn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Kf = (e) => !Zn(e) && e !== dn;
function Ci() {
  const { caseless: e, skipUndefined: t } = (Kf(this) && this) || {},
    n = {},
    r = (o, l) => {
      if (l === "__proto__" || l === "constructor" || l === "prototype") return;
      const s = (e && Qf(n, l)) || l;
      Wo(n[s]) && Wo(o)
        ? (n[s] = Ci(n[s], o))
        : Wo(o)
          ? (n[s] = Ci({}, o))
          : sr(o)
            ? (n[s] = o.slice())
            : (!t || !Zn(o)) && (n[s] = o);
    };
  for (let o = 0, l = arguments.length; o < l; o++)
    arguments[o] && io(arguments[o], r);
  return n;
}
const py = (e, t, n, { allOwnKeys: r } = {}) => (
    io(
      t,
      (o, l) => {
        n && ze(o)
          ? Object.defineProperty(e, l, {
              value: $f(o, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, l, {
              value: o,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r },
    ),
    e
  ),
  my = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  hy = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, "constructor", {
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n));
  },
  gy = (e, t, n, r) => {
    let o, l, s;
    const i = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), l = o.length; l-- > 0; )
        ((s = o[l]),
          (!r || r(s, e, t)) && !i[s] && ((t[s] = e[s]), (i[s] = !0)));
      e = n !== !1 && Ra(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  yy = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  vy = (e) => {
    if (!e) return null;
    if (sr(e)) return e;
    let t = e.length;
    if (!Hf(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  xy = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ra(Uint8Array)),
  wy = (e, t) => {
    const r = (e && e[Ml]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const l = o.value;
      t.call(e, l[0], l[1]);
    }
  },
  Sy = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Ey = ct("HTMLFormElement"),
  ky = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Ju = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Cy = ct("RegExp"),
  Gf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (io(n, (o, l) => {
      let s;
      (s = t(o, l, e)) !== !1 && (r[l] = s || o);
    }),
      Object.defineProperties(e, r));
  },
  Ny = (e) => {
    Gf(e, (t, n) => {
      if (ze(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ze(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  jy = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((l) => {
          n[l] = !0;
        });
      };
    return (sr(e) ? r(e) : r(String(e).split(t)), n);
  },
  Ry = () => {},
  Py = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function _y(e) {
  return !!(e && ze(e.append) && e[Vf] === "FormData" && e[Ml]);
}
const Ty = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (so(r)) {
          if (t.indexOf(r) >= 0) return;
          if (lo(r)) return r;
          if (!("toJSON" in r)) {
            t[o] = r;
            const l = sr(r) ? [] : {};
            return (
              io(r, (s, i) => {
                const a = n(s, o + 1);
                !Zn(a) && (l[i] = a);
              }),
              (t[o] = void 0),
              l
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Oy = ct("AsyncFunction"),
  Ly = (e) => e && (so(e) || ze(e)) && ze(e.then) && ze(e.catch),
  qf = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            dn.addEventListener(
              "message",
              ({ source: o, data: l }) => {
                o === dn && l === n && r.length && r.shift()();
              },
              !1,
            ),
            (o) => {
              (r.push(o), dn.postMessage(n, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    ze(dn.postMessage),
  ),
  zy =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(dn)
      : (typeof process < "u" && process.nextTick) || qf,
  Ay = (e) => e != null && ze(e[Ml]),
  E = {
    isArray: sr,
    isArrayBuffer: Wf,
    isBuffer: lo,
    isFormData: sy,
    isArrayBufferView: Xg,
    isString: Yg,
    isNumber: Hf,
    isBoolean: Zg,
    isObject: so,
    isPlainObject: Wo,
    isEmptyObject: ey,
    isReadableStream: ay,
    isRequest: uy,
    isResponse: cy,
    isHeaders: dy,
    isUndefined: Zn,
    isDate: ty,
    isFile: ny,
    isBlob: ry,
    isRegExp: Cy,
    isFunction: ze,
    isStream: ly,
    isURLSearchParams: iy,
    isTypedArray: xy,
    isFileList: oy,
    forEach: io,
    merge: Ci,
    extend: py,
    trim: fy,
    stripBOM: my,
    inherits: hy,
    toFlatObject: gy,
    kindOf: Dl,
    kindOfTest: ct,
    endsWith: yy,
    toArray: vy,
    forEachEntry: wy,
    matchAll: Sy,
    isHTMLForm: Ey,
    hasOwnProperty: Ju,
    hasOwnProp: Ju,
    reduceDescriptors: Gf,
    freezeMethods: Ny,
    toObjectSet: jy,
    toCamelCase: ky,
    noop: Ry,
    toFiniteNumber: Py,
    findKey: Qf,
    global: dn,
    isContextDefined: Kf,
    isSpecCompliantForm: _y,
    toJSONObject: Ty,
    isAsyncFn: Oy,
    isThenable: Ly,
    setImmediate: qf,
    asap: zy,
    isIterable: Ay,
  };
let I = class Jf extends Error {
  static from(t, n, r, o, l, s) {
    const i = new Jf(t.message, n || t.code, r, o, l);
    return ((i.cause = t), (i.name = t.name), s && Object.assign(i, s), i);
  }
  constructor(t, n, r, o, l) {
    (super(t),
      (this.name = "AxiosError"),
      (this.isAxiosError = !0),
      n && (this.code = n),
      r && (this.config = r),
      o && (this.request = o),
      l && ((this.response = l), (this.status = l.status)));
  }
  toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  }
};
I.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
I.ERR_BAD_OPTION = "ERR_BAD_OPTION";
I.ECONNABORTED = "ECONNABORTED";
I.ETIMEDOUT = "ETIMEDOUT";
I.ERR_NETWORK = "ERR_NETWORK";
I.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
I.ERR_DEPRECATED = "ERR_DEPRECATED";
I.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
I.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
I.ERR_CANCELED = "ERR_CANCELED";
I.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
I.ERR_INVALID_URL = "ERR_INVALID_URL";
const by = null;
function Ni(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Xf(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Xu(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, l) {
          return ((o = Xf(o)), !n && l ? "[" + o + "]" : o);
        })
        .join(n ? "." : "")
    : t;
}
function Iy(e) {
  return E.isArray(e) && !e.some(Ni);
}
const Uy = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function $l(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  ((t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, x) {
        return !E.isUndefined(x[v]);
      },
    )));
  const r = n.metaTokens,
    o = n.visitor || c,
    l = n.dots,
    s = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (E.isDate(y)) return y.toISOString();
    if (E.isBoolean(y)) return y.toString();
    if (!a && E.isBlob(y))
      throw new I("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(y) || E.isTypedArray(y)
      ? a && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function c(y, v, x) {
    let m = y;
    if (y && !x && typeof y == "object") {
      if (E.endsWith(v, "{}"))
        ((v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y)));
      else if (
        (E.isArray(y) && Iy(y)) ||
        ((E.isFileList(y) || E.endsWith(v, "[]")) && (m = E.toArray(y)))
      )
        return (
          (v = Xf(v)),
          m.forEach(function (g, S) {
            !(E.isUndefined(g) || g === null) &&
              t.append(
                s === !0 ? Xu([v], S, l) : s === null ? v : v + "[]",
                u(g),
              );
          }),
          !1
        );
    }
    return Ni(y) ? !0 : (t.append(Xu(x, v, l), u(y)), !1);
  }
  const f = [],
    h = Object.assign(Uy, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Ni,
    });
  function w(y, v) {
    if (!E.isUndefined(y)) {
      if (f.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      (f.push(y),
        E.forEach(y, function (m, p) {
          (!(E.isUndefined(m) || m === null) &&
            o.call(t, m, E.isString(p) ? p.trim() : p, v, h)) === !0 &&
            w(m, v ? v.concat(p) : [p]);
        }),
        f.pop());
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return (w(e), t);
}
function Yu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Pa(e, t) {
  ((this._pairs = []), e && $l(e, this, t));
}
const Yf = Pa.prototype;
Yf.append = function (t, n) {
  this._pairs.push([t, n]);
};
Yf.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Yu);
      }
    : Yu;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function Fy(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function Zf(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Fy,
    o = E.isFunction(n) ? { serialize: n } : n,
    l = o && o.serialize;
  let s;
  if (
    (l
      ? (s = l(t, o))
      : (s = E.isURLSearchParams(t) ? t.toString() : new Pa(t, o).toString(r)),
    s)
  ) {
    const i = e.indexOf("#");
    (i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s));
  }
  return e;
}
class Zu {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const _a = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
  },
  My = typeof URLSearchParams < "u" ? URLSearchParams : Pa,
  Dy = typeof FormData < "u" ? FormData : null,
  By = typeof Blob < "u" ? Blob : null,
  $y = {
    isBrowser: !0,
    classes: { URLSearchParams: My, FormData: Dy, Blob: By },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ta = typeof window < "u" && typeof document < "u",
  ji = (typeof navigator == "object" && navigator) || void 0,
  Vy =
    Ta &&
    (!ji || ["ReactNative", "NativeScript", "NS"].indexOf(ji.product) < 0),
  Wy =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Hy = (Ta && window.location.href) || "http://localhost",
  Qy = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ta,
        hasStandardBrowserEnv: Vy,
        hasStandardBrowserWebWorkerEnv: Wy,
        navigator: ji,
        origin: Hy,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Se = { ...Qy, ...$y };
function Ky(e, t) {
  return $l(e, new Se.classes.URLSearchParams(), {
    visitor: function (n, r, o, l) {
      return Se.isNode && E.isBuffer(n)
        ? (this.append(r, n.toString("base64")), !1)
        : l.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function Gy(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function qy(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let l;
  for (r = 0; r < o; r++) ((l = n[r]), (t[l] = e[l]));
  return t;
}
function ep(e) {
  function t(n, r, o, l) {
    let s = n[l++];
    if (s === "__proto__") return !0;
    const i = Number.isFinite(+s),
      a = l >= n.length;
    return (
      (s = !s && E.isArray(o) ? o.length : s),
      a
        ? (E.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !i)
        : ((!o[s] || !E.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], l) && E.isArray(o[s]) && (o[s] = qy(o[s])),
          !i)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, o) => {
        t(Gy(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function Jy(e, t, n) {
  if (E.isString(e))
    try {
      return ((t || JSON.parse)(e), E.trim(e));
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ao = {
  transitional: _a,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        l = E.isObject(t);
      if ((l && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return o ? JSON.stringify(ep(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t) ||
        E.isReadableStream(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let i;
      if (l) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Ky(t, this.formSerializer).toString();
        if ((i = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return $l(
            i ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer,
          );
        }
      }
      return l || o ? (n.setContentType("application/json", !1), Jy(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ao.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (E.isResponse(t) || E.isReadableStream(t)) return t;
      if (t && E.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (i) {
          if (s)
            throw i.name === "SyntaxError"
              ? I.from(i, I.ERR_BAD_RESPONSE, this, null, this.response)
              : i;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Se.classes.FormData, Blob: Se.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ao.headers[e] = {};
});
const Xy = E.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Yy = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            ((o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && Xy[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r)));
          }),
      t
    );
  },
  ec = Symbol("internals");
function yr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ho(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Ho) : String(e);
}
function Zy(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const ev = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function vs(e, t, n, r, o) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function tv(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function nv(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, l, s) {
        return this[r].call(this, t, o, l, s);
      },
      configurable: !0,
    });
  });
}
let Ae = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function l(i, a, u) {
      const c = yr(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = E.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || a] = Ho(i));
    }
    const s = (i, a) => E.forEach(i, (u, c) => l(u, c, a));
    if (E.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (E.isString(t) && (t = t.trim()) && !ev(t)) s(Yy(t), n);
    else if (E.isObject(t) && E.isIterable(t)) {
      let i = {},
        a,
        u;
      for (const c of t) {
        if (!E.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        i[(u = c[0])] = (a = i[u])
          ? E.isArray(a)
            ? [...a, c[1]]
            : [a, c[1]]
          : c[1];
      }
      s(i, n);
    } else t != null && l(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = yr(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return Zy(o);
        if (E.isFunction(n)) return n.call(this, o, r);
        if (E.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = yr(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || vs(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function l(s) {
      if (((s = yr(s)), s)) {
        const i = E.findKey(r, s);
        i && (!n || vs(r, r[i], i, n)) && (delete r[i], (o = !0));
      }
    }
    return (E.isArray(t) ? t.forEach(l) : l(t), o);
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || vs(this, this[l], l, t, !0)) && (delete this[l], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (o, l) => {
        const s = E.findKey(r, l);
        if (s) {
          ((n[s] = Ho(o)), delete n[l]);
          return;
        }
        const i = t ? tv(l) : String(l).trim();
        (i !== l && delete n[l], (n[i] = Ho(o)), (r[i] = !0));
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      E.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && E.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return (n.forEach((o) => r.set(o)), r);
  }
  static accessor(t) {
    const r = (this[ec] = this[ec] = { accessors: {} }).accessors,
      o = this.prototype;
    function l(s) {
      const i = yr(s);
      r[i] || (nv(o, s), (r[i] = !0));
    }
    return (E.isArray(t) ? t.forEach(l) : l(t), this);
  }
};
Ae.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(Ae.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(Ae);
function xs(e, t) {
  const n = this || ao,
    r = t || n,
    o = Ae.from(r.headers);
  let l = r.data;
  return (
    E.forEach(e, function (i) {
      l = i.call(n, l, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    l
  );
}
function tp(e) {
  return !!(e && e.__CANCEL__);
}
let uo = class extends I {
  constructor(t, n, r) {
    (super(t ?? "canceled", I.ERR_CANCELED, n, r),
      (this.name = "CanceledError"),
      (this.__CANCEL__ = !0));
  }
};
function np(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new I(
          "Request failed with status code " + n.status,
          [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function rv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function ov(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    l = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        c = r[l];
      (s || (s = u), (n[o] = a), (r[o] = u));
      let f = l,
        h = 0;
      for (; f !== o; ) ((h += n[f++]), (f = f % e));
      if (((o = (o + 1) % e), o === l && (l = (l + 1) % e), u - s < t)) return;
      const w = c && u - c;
      return w ? Math.round((h * 1e3) / w) : void 0;
    }
  );
}
function lv(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    l;
  const s = (u, c = Date.now()) => {
    ((n = c), (o = null), l && (clearTimeout(l), (l = null)), e(...u));
  };
  return [
    (...u) => {
      const c = Date.now(),
        f = c - n;
      f >= r
        ? s(u, c)
        : ((o = u),
          l ||
            (l = setTimeout(() => {
              ((l = null), s(o));
            }, r - f)));
    },
    () => o && s(o),
  ];
}
const xl = (e, t, n = 3) => {
    let r = 0;
    const o = ov(50, 250);
    return lv((l) => {
      const s = l.loaded,
        i = l.lengthComputable ? l.total : void 0,
        a = s - r,
        u = o(a),
        c = s <= i;
      r = s;
      const f = {
        loaded: s,
        total: i,
        progress: i ? s / i : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && i && c ? (i - s) / u : void 0,
        event: l,
        lengthComputable: i != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  tc = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  nc =
    (e) =>
    (...t) =>
      E.asap(() => e(...t)),
  sv = Se.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Se.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Se.origin),
        Se.navigator && /(msie|trident)/i.test(Se.navigator.userAgent),
      )
    : () => !0,
  iv = Se.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, l, s) {
          if (typeof document > "u") return;
          const i = [`${e}=${encodeURIComponent(t)}`];
          (E.isNumber(n) && i.push(`expires=${new Date(n).toUTCString()}`),
            E.isString(r) && i.push(`path=${r}`),
            E.isString(o) && i.push(`domain=${o}`),
            l === !0 && i.push("secure"),
            E.isString(s) && i.push(`SameSite=${s}`),
            (document.cookie = i.join("; ")));
        },
        read(e) {
          if (typeof document > "u") return null;
          const t = document.cookie.match(
            new RegExp("(?:^|; )" + e + "=([^;]*)"),
          );
          return t ? decodeURIComponent(t[1]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function av(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function uv(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function rp(e, t, n) {
  let r = !av(t);
  return e && (r || n == !1) ? uv(e, t) : t;
}
const rc = (e) => (e instanceof Ae ? { ...e } : e);
function wn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f, h) {
    return E.isPlainObject(u) && E.isPlainObject(c)
      ? E.merge.call({ caseless: h }, u, c)
      : E.isPlainObject(c)
        ? E.merge({}, c)
        : E.isArray(c)
          ? c.slice()
          : c;
  }
  function o(u, c, f, h) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(u)) return r(void 0, u, f, h);
    } else return r(u, c, f, h);
  }
  function l(u, c) {
    if (!E.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function i(u, c, f) {
    if (f in t) return r(u, c);
    if (f in e) return r(void 0, u);
  }
  const a = {
    url: l,
    method: l,
    data: l,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: i,
    headers: (u, c, f) => o(rc(u), rc(c), f, !0),
  };
  return (
    E.forEach(Object.keys({ ...e, ...t }), function (c) {
      if (c === "__proto__" || c === "constructor" || c === "prototype") return;
      const f = E.hasOwnProp(a, c) ? a[c] : o,
        h = f(e[c], t[c], c);
      (E.isUndefined(h) && f !== i) || (n[c] = h);
    }),
    n
  );
}
const op = (e) => {
    const t = wn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: l,
      headers: s,
      auth: i,
    } = t;
    if (
      ((t.headers = s = Ae.from(s)),
      (t.url = Zf(
        rp(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      )),
      i &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (i.username || "") +
                ":" +
                (i.password ? unescape(encodeURIComponent(i.password)) : ""),
            ),
        ),
      E.isFormData(n))
    ) {
      if (Se.hasStandardBrowserEnv || Se.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if (E.isFunction(n.getHeaders)) {
        const a = n.getHeaders(),
          u = ["content-type", "content-length"];
        Object.entries(a).forEach(([c, f]) => {
          u.includes(c.toLowerCase()) && s.set(c, f);
        });
      }
    }
    if (
      Se.hasStandardBrowserEnv &&
      (r && E.isFunction(r) && (r = r(t)), r || (r !== !1 && sv(t.url)))
    ) {
      const a = o && l && iv.read(l);
      a && s.set(o, a);
    }
    return t;
  },
  cv = typeof XMLHttpRequest < "u",
  dv =
    cv &&
    function (e) {
      return new Promise(function (n, r) {
        const o = op(e);
        let l = o.data;
        const s = Ae.from(o.headers).normalize();
        let { responseType: i, onUploadProgress: a, onDownloadProgress: u } = o,
          c,
          f,
          h,
          w,
          y;
        function v() {
          (w && w(),
            y && y(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener("abort", c));
        }
        let x = new XMLHttpRequest();
        (x.open(o.method.toUpperCase(), o.url, !0), (x.timeout = o.timeout));
        function m() {
          if (!x) return;
          const g = Ae.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders(),
            ),
            C = {
              data:
                !i || i === "text" || i === "json"
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: g,
              config: e,
              request: x,
            };
          (np(
            function (R) {
              (n(R), v());
            },
            function (R) {
              (r(R), v());
            },
            C,
          ),
            (x = null));
        }
        ("onloadend" in x
          ? (x.onloadend = m)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf("file:") === 0)) ||
                setTimeout(m);
            }),
          (x.onabort = function () {
            x &&
              (r(new I("Request aborted", I.ECONNABORTED, e, x)), (x = null));
          }),
          (x.onerror = function (S) {
            const C = S && S.message ? S.message : "Network Error",
              P = new I(C, I.ERR_NETWORK, e, x);
            ((P.event = S || null), r(P), (x = null));
          }),
          (x.ontimeout = function () {
            let S = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const C = o.transitional || _a;
            (o.timeoutErrorMessage && (S = o.timeoutErrorMessage),
              r(
                new I(
                  S,
                  C.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
                  e,
                  x,
                ),
              ),
              (x = null));
          }),
          l === void 0 && s.setContentType(null),
          "setRequestHeader" in x &&
            E.forEach(s.toJSON(), function (S, C) {
              x.setRequestHeader(C, S);
            }),
          E.isUndefined(o.withCredentials) ||
            (x.withCredentials = !!o.withCredentials),
          i && i !== "json" && (x.responseType = o.responseType),
          u && (([h, y] = xl(u, !0)), x.addEventListener("progress", h)),
          a &&
            x.upload &&
            (([f, w] = xl(a)),
            x.upload.addEventListener("progress", f),
            x.upload.addEventListener("loadend", w)),
          (o.cancelToken || o.signal) &&
            ((c = (g) => {
              x &&
                (r(!g || g.type ? new uo(null, e, x) : g),
                x.abort(),
                (x = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(c),
            o.signal &&
              (o.signal.aborted
                ? c()
                : o.signal.addEventListener("abort", c))));
        const p = rv(o.url);
        if (p && Se.protocols.indexOf(p) === -1) {
          r(new I("Unsupported protocol " + p + ":", I.ERR_BAD_REQUEST, e));
          return;
        }
        x.send(l || null);
      });
    },
  fv = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const l = function (u) {
        if (!o) {
          ((o = !0), i());
          const c = u instanceof Error ? u : this.reason;
          r.abort(
            c instanceof I ? c : new uo(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          ((s = null), l(new I(`timeout of ${t}ms exceeded`, I.ETIMEDOUT)));
        }, t);
      const i = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(l)
              : u.removeEventListener("abort", l);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", l));
      const { signal: a } = r;
      return ((a.unsubscribe = () => E.asap(i)), a);
    }
  },
  pv = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) ((o = r + t), yield e.slice(r, o), (r = o));
  },
  mv = async function* (e, t) {
    for await (const n of hv(e)) yield* pv(n, t);
  },
  hv = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  oc = (e, t, n, r) => {
    const o = mv(e, t);
    let l = 0,
      s,
      i = (a) => {
        s || ((s = !0), r && r(a));
      };
    return new ReadableStream(
      {
        async pull(a) {
          try {
            const { done: u, value: c } = await o.next();
            if (u) {
              (i(), a.close());
              return;
            }
            let f = c.byteLength;
            if (n) {
              let h = (l += f);
              n(h);
            }
            a.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (i(u), u);
          }
        },
        cancel(a) {
          return (i(a), o.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  lc = 64 * 1024,
  { isFunction: To } = E,
  gv = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    E.global,
  ),
  { ReadableStream: sc, TextEncoder: ic } = E.global,
  ac = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  yv = (e) => {
    e = E.merge.call({ skipUndefined: !0 }, gv, e);
    const { fetch: t, Request: n, Response: r } = e,
      o = t ? To(t) : typeof fetch == "function",
      l = To(n),
      s = To(r);
    if (!o) return !1;
    const i = o && To(sc),
      a =
        o &&
        (typeof ic == "function"
          ? (
              (y) => (v) =>
                y.encode(v)
            )(new ic())
          : async (y) => new Uint8Array(await new n(y).arrayBuffer())),
      u =
        l &&
        i &&
        ac(() => {
          let y = !1;
          const v = new n(Se.origin, {
            body: new sc(),
            method: "POST",
            get duplex() {
              return ((y = !0), "half");
            },
          }).headers.has("Content-Type");
          return y && !v;
        }),
      c = s && i && ac(() => E.isReadableStream(new r("").body)),
      f = { stream: c && ((y) => y.body) };
    o &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((y) => {
        !f[y] &&
          (f[y] = (v, x) => {
            let m = v && v[y];
            if (m) return m.call(v);
            throw new I(
              `Response type '${y}' is not supported`,
              I.ERR_NOT_SUPPORT,
              x,
            );
          });
      });
    const h = async (y) => {
        if (y == null) return 0;
        if (E.isBlob(y)) return y.size;
        if (E.isSpecCompliantForm(y))
          return (
            await new n(Se.origin, { method: "POST", body: y }).arrayBuffer()
          ).byteLength;
        if (E.isArrayBufferView(y) || E.isArrayBuffer(y)) return y.byteLength;
        if ((E.isURLSearchParams(y) && (y = y + ""), E.isString(y)))
          return (await a(y)).byteLength;
      },
      w = async (y, v) => {
        const x = E.toFiniteNumber(y.getContentLength());
        return x ?? h(v);
      };
    return async (y) => {
      let {
          url: v,
          method: x,
          data: m,
          signal: p,
          cancelToken: g,
          timeout: S,
          onDownloadProgress: C,
          onUploadProgress: P,
          responseType: R,
          headers: T,
          withCredentials: B = "same-origin",
          fetchOptions: b,
        } = op(y),
        re = t || fetch;
      R = R ? (R + "").toLowerCase() : "text";
      let M = fv([p, g && g.toAbortSignal()], S),
        ge = null;
      const fe =
        M &&
        M.unsubscribe &&
        (() => {
          M.unsubscribe();
        });
      let O;
      try {
        if (
          P &&
          u &&
          x !== "get" &&
          x !== "head" &&
          (O = await w(T, m)) !== 0
        ) {
          let U = new n(v, { method: "POST", body: m, duplex: "half" }),
            K;
          if (
            (E.isFormData(m) &&
              (K = U.headers.get("content-type")) &&
              T.setContentType(K),
            U.body)
          ) {
            const [Tt, Qe] = tc(O, xl(nc(P)));
            m = oc(U.body, lc, Tt, Qe);
          }
        }
        E.isString(B) || (B = B ? "include" : "omit");
        const A = l && "credentials" in n.prototype,
          V = {
            ...b,
            signal: M,
            method: x.toUpperCase(),
            headers: T.normalize().toJSON(),
            body: m,
            duplex: "half",
            credentials: A ? B : void 0,
          };
        ge = l && new n(v, V);
        let j = await (l ? re(ge, b) : re(v, V));
        const _ = c && (R === "stream" || R === "response");
        if (c && (C || (_ && fe))) {
          const U = {};
          ["status", "statusText", "headers"].forEach((kn) => {
            U[kn] = j[kn];
          });
          const K = E.toFiniteNumber(j.headers.get("content-length")),
            [Tt, Qe] = (C && tc(K, xl(nc(C), !0))) || [];
          j = new r(
            oc(j.body, lc, Tt, () => {
              (Qe && Qe(), fe && fe());
            }),
            U,
          );
        }
        R = R || "text";
        let z = await f[E.findKey(f, R) || "text"](j, y);
        return (
          !_ && fe && fe(),
          await new Promise((U, K) => {
            np(U, K, {
              data: z,
              headers: Ae.from(j.headers),
              status: j.status,
              statusText: j.statusText,
              config: y,
              request: ge,
            });
          })
        );
      } catch (A) {
        throw (
          fe && fe(),
          A && A.name === "TypeError" && /Load failed|fetch/i.test(A.message)
            ? Object.assign(
                new I("Network Error", I.ERR_NETWORK, y, ge, A && A.response),
                { cause: A.cause || A },
              )
            : I.from(A, A && A.code, y, ge, A && A.response)
        );
      }
    };
  },
  vv = new Map(),
  lp = (e) => {
    let t = (e && e.env) || {};
    const { fetch: n, Request: r, Response: o } = t,
      l = [r, o, n];
    let s = l.length,
      i = s,
      a,
      u,
      c = vv;
    for (; i--; )
      ((a = l[i]),
        (u = c.get(a)),
        u === void 0 && c.set(a, (u = i ? new Map() : yv(t))),
        (c = u));
    return u;
  };
lp();
const Oa = { http: by, xhr: dv, fetch: { get: lp } };
E.forEach(Oa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const uc = (e) => `- ${e}`,
  xv = (e) => E.isFunction(e) || e === null || e === !1;
function wv(e, t) {
  e = E.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const l = {};
  for (let s = 0; s < n; s++) {
    r = e[s];
    let i;
    if (
      ((o = r),
      !xv(r) && ((o = Oa[(i = String(r)).toLowerCase()]), o === void 0))
    )
      throw new I(`Unknown adapter '${i}'`);
    if (o && (E.isFunction(o) || (o = o.get(t)))) break;
    l[i || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(l).map(
      ([a, u]) =>
        `adapter ${a} ` +
        (u === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let i = n
      ? s.length > 1
        ? `since :
` +
          s.map(uc).join(`
`)
        : " " + uc(s[0])
      : "as no adapter specified";
    throw new I(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT",
    );
  }
  return o;
}
const sp = { getAdapter: wv, adapters: Oa };
function ws(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new uo(null, e);
}
function cc(e) {
  return (
    ws(e),
    (e.headers = Ae.from(e.headers)),
    (e.data = xs.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    sp
      .getAdapter(
        e.adapter || ao.adapter,
        e,
      )(e)
      .then(
        function (r) {
          return (
            ws(e),
            (r.data = xs.call(e, e.transformResponse, r)),
            (r.headers = Ae.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            tp(r) ||
              (ws(e),
              r &&
                r.response &&
                ((r.response.data = xs.call(
                  e,
                  e.transformResponse,
                  r.response,
                )),
                (r.response.headers = Ae.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const ip = "1.13.5",
  Vl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Vl[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const dc = {};
Vl.transitional = function (t, n, r) {
  function o(l, s) {
    return (
      "[Axios v" +
      ip +
      "] Transitional option '" +
      l +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (l, s, i) => {
    if (t === !1)
      throw new I(
        o(s, " has been removed" + (n ? " in " + n : "")),
        I.ERR_DEPRECATED,
      );
    return (
      n &&
        !dc[s] &&
        ((dc[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(l, s, i) : !0
    );
  };
};
Vl.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Sv(e, t, n) {
  if (typeof e != "object")
    throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const l = r[o],
      s = t[l];
    if (s) {
      const i = e[l],
        a = i === void 0 || s(i, l, e);
      if (a !== !0)
        throw new I("option " + l + " must be " + a, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new I("Unknown option " + l, I.ERR_BAD_OPTION);
  }
}
const Qo = { assertOptions: Sv, validators: Vl },
  Ke = Qo.validators;
let mn = class {
  constructor(t) {
    ((this.defaults = t || {}),
      (this.interceptors = { request: new Zu(), response: new Zu() }));
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const l = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? l &&
              !String(r.stack).endsWith(l.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + l)
            : (r.stack = l);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    (typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = wn(this.defaults, n)));
    const { transitional: r, paramsSerializer: o, headers: l } = n;
    (r !== void 0 &&
      Qo.assertOptions(
        r,
        {
          silentJSONParsing: Ke.transitional(Ke.boolean),
          forcedJSONParsing: Ke.transitional(Ke.boolean),
          clarifyTimeoutError: Ke.transitional(Ke.boolean),
          legacyInterceptorReqResOrdering: Ke.transitional(Ke.boolean),
        },
        !1,
      ),
      o != null &&
        (E.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Qo.assertOptions(
              o,
              { encode: Ke.function, serialize: Ke.function },
              !0,
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Qo.assertOptions(
        n,
        {
          baseUrl: Ke.spelling("baseURL"),
          withXsrfToken: Ke.spelling("withXSRFToken"),
        },
        !0,
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase()));
    let s = l && E.merge(l.common, l[n.method]);
    (l &&
      E.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete l[y];
        },
      ),
      (n.headers = Ae.concat(s, l)));
    const i = [];
    let a = !0;
    this.interceptors.request.forEach(function (v) {
      if (typeof v.runWhen == "function" && v.runWhen(n) === !1) return;
      a = a && v.synchronous;
      const x = n.transitional || _a;
      x && x.legacyInterceptorReqResOrdering
        ? i.unshift(v.fulfilled, v.rejected)
        : i.push(v.fulfilled, v.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c,
      f = 0,
      h;
    if (!a) {
      const y = [cc.bind(this), void 0];
      for (
        y.unshift(...i), y.push(...u), h = y.length, c = Promise.resolve(n);
        f < h;
      )
        c = c.then(y[f++], y[f++]);
      return c;
    }
    h = i.length;
    let w = n;
    for (; f < h; ) {
      const y = i[f++],
        v = i[f++];
      try {
        w = y(w);
      } catch (x) {
        v.call(this, x);
        break;
      }
    }
    try {
      c = cc.call(this, w);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, h = u.length; f < h; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = wn(this.defaults, t);
    const n = rp(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Zf(n, t.params, t.paramsSerializer);
  }
};
E.forEach(["delete", "get", "head", "options"], function (t) {
  mn.prototype[t] = function (n, r) {
    return this.request(
      wn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (l, s, i) {
      return this.request(
        wn(i || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: s,
        }),
      );
    };
  }
  ((mn.prototype[t] = n()), (mn.prototype[t + "Form"] = n(!0)));
});
let Ev = class ap {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    const r = this;
    (this.promise.then((o) => {
      if (!r._listeners) return;
      let l = r._listeners.length;
      for (; l-- > 0; ) r._listeners[l](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let l;
        const s = new Promise((i) => {
          (r.subscribe(i), (l = i));
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(l);
          }),
          s
        );
      }),
      t(function (l, s, i) {
        r.reason || ((r.reason = new uo(l, s, i)), n(r.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new ap(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
};
function kv(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Cv(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const Ri = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(Ri).forEach(([e, t]) => {
  Ri[t] = e;
});
function up(e) {
  const t = new mn(e),
    n = $f(mn.prototype.request, t);
  return (
    E.extend(n, mn.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return up(wn(e, o));
    }),
    n
  );
}
const le = up(ao);
le.Axios = mn;
le.CanceledError = uo;
le.CancelToken = Ev;
le.isCancel = tp;
le.VERSION = ip;
le.toFormData = $l;
le.AxiosError = I;
le.Cancel = le.CanceledError;
le.all = function (t) {
  return Promise.all(t);
};
le.spread = kv;
le.isAxiosError = Cv;
le.mergeConfig = wn;
le.AxiosHeaders = Ae;
le.formToJSON = (e) => ep(E.isHTMLForm(e) ? new FormData(e) : e);
le.getAdapter = sp.getAdapter;
le.HttpStatusCode = Ri;
le.default = le;
const {
    Axios: E0,
    AxiosError: k0,
    CanceledError: C0,
    isCancel: N0,
    CancelToken: j0,
    VERSION: R0,
    all: P0,
    Cancel: _0,
    isAxiosError: T0,
    spread: O0,
    toFormData: L0,
    AxiosHeaders: z0,
    HttpStatusCode: A0,
    formToJSON: b0,
    getAdapter: I0,
    mergeConfig: U0,
  } = le,
  Ss = "auth_token",
  Es = "auth_user",
  tt = {
    getToken() {
      return localStorage.getItem(Ss);
    },
    setToken(e) {
      localStorage.setItem(Ss, e);
    },
    clearToken() {
      localStorage.removeItem(Ss);
    },
    getUser() {
      const e = localStorage.getItem(Es);
      if (!e) return null;
      try {
        return JSON.parse(e);
      } catch {
        return null;
      }
    },
    setUser(e) {
      localStorage.setItem(Es, JSON.stringify(e));
    },
    clearUser() {
      localStorage.removeItem(Es);
    },
    clearAuth() {
      (this.clearToken(), this.clearUser());
    },
  },
  Nv = "http://localhost:8000/api",
  H = le.create({
    baseURL: Nv,
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });
H.interceptors.request.use((e) => {
  const t = tt.getToken();
  return (t && (e.headers.Authorization = `Bearer ${t}`), e);
});
H.interceptors.response.use(
  (e) => e,
  (e) => {
    var t;
    return (
      ((t = e.response) == null ? void 0 : t.status) === 401 &&
        (tt.clearAuth(),
        window.location.pathname !== "/login" &&
          (window.location.href = "/login")),
      Promise.reject(e)
    );
  },
);
function De(e) {
  if (e && typeof e == "object" && "data" in e) {
    const t = e.data;
    return t && typeof t == "object" && "data" in t ? t.data : t;
  }
  return e;
}
function xe(e) {
  var t, n;
  if (le.isAxiosError(e)) {
    const r = (t = e.response) == null ? void 0 : t.data;
    if (r != null && r.message) return r.message;
    const o =
      r != null && r.errors
        ? (n = Object.values(r.errors)[0]) == null
          ? void 0
          : n[0]
        : void 0;
    if (o) return o;
  }
  return "Something went wrong. Please try again.";
}
function ks(e) {
  return {
    id: e.id,
    name: e.name,
    email: e.email,
    roles: e.roles ?? ["student"],
  };
}
const Oo = {
    async login(e, t) {
      const n = await H.post("/login", { email: e, password: t }),
        r = De(n.data);
      return { token: r.token, user: ks(r.user) };
    },
    async register(e, t, n) {
      const r = await H.post("/register", {
          name: e,
          email: t,
          password: n,
          password_confirmation: n,
        }),
        o = De(r.data);
      return { token: o.token, user: ks(o.user) };
    },
    async logout() {
      await H.post("/logout");
    },
    async me() {
      const e = await H.get("/user"),
        t = De(e.data);
      return ks(t);
    },
  },
  Bt = {
    async list(e = {}) {
      return (
        await H.get("/courses", {
          params: {
            search: e.search,
            category: e.category,
            page: e.page,
            per_page: e.perPage,
          },
        })
      ).data;
    },
    async show(e) {
      const t = await H.get(`/courses/${e}`);
      return t.data.data ?? t.data;
    },
    async myCourses(e = 1, t = 10) {
      return (await H.get("/my-courses", { params: { page: e, per_page: t } }))
        .data;
    },
    async myDrafts() {
      var t;
      return (
        ((t = (await H.get("/courses/my-drafts")).data) == null
          ? void 0
          : t.data) ?? []
      );
    },
    async create(e) {
      const t = await H.post("/courses", e);
      return t.data.data ?? t.data;
    },
    async edit(e) {
      const t = await H.get(`/courses/${e}/edit`);
      return t.data.data ?? t.data;
    },
    async update(e, t) {
      const n = await H.put(`/courses/${e}`, t);
      return n.data.data ?? n.data;
    },
    async togglePublish(e) {
      const t = await H.patch(`/courses/${e}/publish`);
      return t.data.data ?? t.data;
    },
    async remove(e) {
      await H.delete(`/courses/${e}`);
    },
  },
  Cs = {
    async list(e) {
      const t = await H.get(`/courses/${e}/modules`);
      return De(t.data);
    },
    async create(e, t) {
      const n = await H.post(`/courses/${e}/modules`, t);
      return De(n.data);
    },
    async update(e, t) {
      const n = await H.put(`/modules/${e}`, t);
      return De(n.data);
    },
    async remove(e) {
      await H.delete(`/modules/${e}`);
    },
  },
  zr = {
    async list(e) {
      const t = await H.get(`/modules/${e}/lessons`);
      return De(t.data);
    },
    async create(e, t) {
      const n = await H.post(`/modules/${e}/lessons`, t);
      return De(n.data);
    },
    async update(e, t) {
      const n = await H.put(`/lessons/${e}`, t);
      return De(n.data);
    },
    async remove(e) {
      await H.delete(`/lessons/${e}`);
    },
    async show(e) {
      const t = await H.get(`/lessons/${e}`);
      return De(t.data);
    },
    async complete(e) {
      const t = await H.patch(`/lessons/${e}/complete`);
      return De(t.data);
    },
  },
  fc = {
    async enroll(e) {
      const t = await H.post(`/courses/${e}/enroll`);
      return De(t.data);
    },
    async status(e) {
      const t = await H.get(`/courses/${e}/enrollment`);
      return De(t.data);
    },
  },
  cp = k.createContext(void 0);
function jv({ children: e }) {
  const [t, n] = k.useState(tt.getUser()),
    [r, o] = k.useState(!0);
  k.useEffect(() => {
    if (!tt.getToken()) {
      o(!1);
      return;
    }
    Oo.me()
      .then((f) => {
        (n((h) => {
          var w;
          return {
            ...f,
            roles:
              (w = h == null ? void 0 : h.roles) != null && w.length
                ? h.roles
                : f.roles,
          };
        }),
          tt.setUser(f));
      })
      .catch(() => {
        (tt.clearAuth(), n(null));
      })
      .finally(() => o(!1));
  }, []);
  const l = k.useCallback(async (c, f) => {
      const { token: h, user: w } = await Oo.login(c, f);
      (tt.setToken(h), tt.setUser(w), n(w));
    }, []),
    s = k.useCallback(async (c, f, h) => {
      const { token: w, user: y } = await Oo.register(c, f, h);
      (tt.setToken(w), tt.setUser(y), n(y));
    }, []),
    i = k.useCallback(async () => {
      try {
        await Oo.logout();
      } finally {
        (tt.clearAuth(), n(null));
      }
    }, []),
    a = k.useCallback(
      (c) => (t ? c.some((f) => t.roles.includes(f)) : !1),
      [t],
    ),
    u = k.useMemo(
      () => ({
        user: t,
        isLoading: r,
        isAuthenticated: !!t,
        login: l,
        signup: s,
        logout: i,
        hasRole: a,
      }),
      [t, r, l, s, i, a],
    );
  return d.jsx(cp.Provider, { value: u, children: e });
}
function ir() {
  const e = k.useContext(cp);
  if (!e) throw new Error("useAuth must be used within AuthProvider");
  return e;
}
function Nn({ children: e, requiredRoles: t }) {
  const { isAuthenticated: n, isLoading: r, hasRole: o } = ir();
  return r
    ? d.jsx("div", {
        className: "min-h-screen grid place-items-center bg-background",
        children: d.jsx("div", {
          className:
            "h-10 w-10 animate-spin rounded-full border-4 border-primary border-r-transparent",
        }),
      })
    : n
      ? t && t.length > 0 && !o(t)
        ? d.jsx(Si, { to: "/", replace: !0 })
        : d.jsx(d.Fragment, { children: e })
      : d.jsx(Si, { to: "/login", replace: !0 });
}
function dp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = dp(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function fp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = dp(e)) && (r && (r += " "), (r += t));
  return r;
}
const pc = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  mc = fp,
  Rv = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return mc(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: l } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          f = l == null ? void 0 : l[u];
        if (c === null) return null;
        const h = pc(c) || pc(f);
        return o[u][h];
      }),
      i =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [f, h] = c;
          return (h === void 0 || (u[f] = h), u);
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: f, className: h, ...w } = c;
              return Object.entries(w).every((y) => {
                let [v, x] = y;
                return Array.isArray(x)
                  ? x.includes({ ...l, ...i }[v])
                  : { ...l, ...i }[v] === x;
              })
                ? [...u, f, h]
                : u;
            }, []);
    return mc(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  La = "-",
  Pv = (e) => {
    const t = Tv(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const i = s.split(La);
        return (i[0] === "" && i.length !== 1 && i.shift(), pp(i, t) || _v(s));
      },
      getConflictingClassGroupIds: (s, i) => {
        const a = n[s] || [];
        return i && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  pp = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? pp(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join(La);
    return (s = t.validators.find(({ validator: i }) => i(l))) == null
      ? void 0
      : s.classGroupId;
  },
  hc = /^\[(.+)\]$/,
  _v = (e) => {
    if (hc.test(e)) {
      const t = hc.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Tv = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Lv(Object.entries(e.classGroups), n).forEach(([l, s]) => {
        Pi(s, r, l, t);
      }),
      r
    );
  },
  Pi = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const l = o === "" ? t : gc(t, o);
        l.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (Ov(o)) {
          Pi(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([l, s]) => {
        Pi(s, gc(t, l), n, r);
      });
    });
  },
  gc = (e, t) => {
    let n = e;
    return (
      t.split(La).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  Ov = (e) => e.isThemeGetter,
  Lv = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((l) =>
            typeof l == "string"
              ? t + l
              : typeof l == "object"
                ? Object.fromEntries(
                    Object.entries(l).map(([s, i]) => [t + s, i]),
                  )
                : l,
          );
          return [n, o];
        })
      : e,
  zv = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (l, s) => {
      (n.set(l, s), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(l) {
        let s = n.get(l);
        if (s !== void 0) return s;
        if ((s = r.get(l)) !== void 0) return (o(l, s), s);
      },
      set(l, s) {
        n.has(l) ? n.set(l, s) : o(l, s);
      },
    };
  },
  mp = "!",
  Av = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      l = t.length,
      s = (i) => {
        const a = [];
        let u = 0,
          c = 0,
          f;
        for (let x = 0; x < i.length; x++) {
          let m = i[x];
          if (u === 0) {
            if (m === o && (r || i.slice(x, x + l) === t)) {
              (a.push(i.slice(c, x)), (c = x + l));
              continue;
            }
            if (m === "/") {
              f = x;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const h = a.length === 0 ? i : i.substring(c),
          w = h.startsWith(mp),
          y = w ? h.substring(1) : h,
          v = f && f > c ? f - c : void 0;
        return {
          modifiers: a,
          hasImportantModifier: w,
          baseClassName: y,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (i) => n({ className: i, parseClassName: s }) : s;
  },
  bv = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Iv = (e) => ({ cache: zv(e.cacheSize), parseClassName: Av(e), ...Pv(e) }),
  Uv = /\s+/,
  Fv = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      l = [],
      s = e.trim().split(Uv);
    let i = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: c,
          hasImportantModifier: f,
          baseClassName: h,
          maybePostfixModifierPosition: w,
        } = n(u);
      let y = !!w,
        v = r(y ? h.substring(0, w) : h);
      if (!v) {
        if (!y) {
          i = u + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (((v = r(h)), !v)) {
          i = u + (i.length > 0 ? " " + i : i);
          continue;
        }
        y = !1;
      }
      const x = bv(c).join(":"),
        m = f ? x + mp : x,
        p = m + v;
      if (l.includes(p)) continue;
      l.push(p);
      const g = o(v, y);
      for (let S = 0; S < g.length; ++S) {
        const C = g[S];
        l.push(m + C);
      }
      i = u + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
function Mv() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = hp(t)) && (r && (r += " "), (r += n));
  return r;
}
const hp = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = hp(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Dv(e, ...t) {
  let n,
    r,
    o,
    l = s;
  function s(a) {
    const u = t.reduce((c, f) => f(c), e());
    return ((n = Iv(u)), (r = n.cache.get), (o = n.cache.set), (l = i), i(a));
  }
  function i(a) {
    const u = r(a);
    if (u) return u;
    const c = Fv(a, n);
    return (o(a, c), c);
  }
  return function () {
    return l(Mv.apply(null, arguments));
  };
}
const G = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  gp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Bv = /^\d+\/\d+$/,
  $v = new Set(["px", "full", "screen"]),
  Vv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Wv =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Hv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Qv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Kv =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  yt = (e) => Wn(e) || $v.has(e) || Bv.test(e),
  Lt = (e) => ar(e, "length", t0),
  Wn = (e) => !!e && !Number.isNaN(Number(e)),
  Ns = (e) => ar(e, "number", Wn),
  vr = (e) => !!e && Number.isInteger(Number(e)),
  Gv = (e) => e.endsWith("%") && Wn(e.slice(0, -1)),
  F = (e) => gp.test(e),
  zt = (e) => Vv.test(e),
  qv = new Set(["length", "size", "percentage"]),
  Jv = (e) => ar(e, qv, yp),
  Xv = (e) => ar(e, "position", yp),
  Yv = new Set(["image", "url"]),
  Zv = (e) => ar(e, Yv, r0),
  e0 = (e) => ar(e, "", n0),
  xr = () => !0,
  ar = (e, t, n) => {
    const r = gp.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  t0 = (e) => Wv.test(e) && !Hv.test(e),
  yp = () => !1,
  n0 = (e) => Qv.test(e),
  r0 = (e) => Kv.test(e),
  o0 = () => {
    const e = G("colors"),
      t = G("spacing"),
      n = G("blur"),
      r = G("brightness"),
      o = G("borderColor"),
      l = G("borderRadius"),
      s = G("borderSpacing"),
      i = G("borderWidth"),
      a = G("contrast"),
      u = G("grayscale"),
      c = G("hueRotate"),
      f = G("invert"),
      h = G("gap"),
      w = G("gradientColorStops"),
      y = G("gradientColorStopPositions"),
      v = G("inset"),
      x = G("margin"),
      m = G("opacity"),
      p = G("padding"),
      g = G("saturate"),
      S = G("scale"),
      C = G("sepia"),
      P = G("skew"),
      R = G("space"),
      T = G("translate"),
      B = () => ["auto", "contain", "none"],
      b = () => ["auto", "hidden", "clip", "visible", "scroll"],
      re = () => ["auto", F, t],
      M = () => [F, t],
      ge = () => ["", yt, Lt],
      fe = () => ["auto", Wn, F],
      O = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      A = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      j = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      _ = () => ["", "0", F],
      z = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      U = () => [Wn, F];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [xr],
        spacing: [yt, Lt],
        blur: ["none", "", zt, F],
        brightness: U(),
        borderColor: [e],
        borderRadius: ["none", "", "full", zt, F],
        borderSpacing: M(),
        borderWidth: ge(),
        contrast: U(),
        grayscale: _(),
        hueRotate: U(),
        invert: _(),
        gap: M(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Gv, Lt],
        inset: re(),
        margin: re(),
        opacity: U(),
        padding: M(),
        saturate: U(),
        scale: U(),
        sepia: _(),
        skew: U(),
        space: M(),
        translate: M(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", F] }],
        container: ["container"],
        columns: [{ columns: [zt] }],
        "break-after": [{ "break-after": z() }],
        "break-before": [{ "break-before": z() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...O(), F] }],
        overflow: [{ overflow: b() }],
        "overflow-x": [{ "overflow-x": b() }],
        "overflow-y": [{ "overflow-y": b() }],
        overscroll: [{ overscroll: B() }],
        "overscroll-x": [{ "overscroll-x": B() }],
        "overscroll-y": [{ "overscroll-y": B() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", vr, F] }],
        basis: [{ basis: re() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", F] }],
        grow: [{ grow: _() }],
        shrink: [{ shrink: _() }],
        order: [{ order: ["first", "last", "none", vr, F] }],
        "grid-cols": [{ "grid-cols": [xr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", vr, F] }, F] }],
        "col-start": [{ "col-start": fe() }],
        "col-end": [{ "col-end": fe() }],
        "grid-rows": [{ "grid-rows": [xr] }],
        "row-start-end": [{ row: ["auto", { span: [vr, F] }, F] }],
        "row-start": [{ "row-start": fe() }],
        "row-end": [{ "row-end": fe() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", F] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", F] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...j()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...j(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...j(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [R] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [R] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", F, t] }],
        "min-w": [{ "min-w": [F, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              F,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [zt] },
              zt,
            ],
          },
        ],
        h: [{ h: [F, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [F, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", zt, Lt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ns,
            ],
          },
        ],
        "font-family": [{ font: [xr] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              F,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Wn, Ns] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              yt,
              F,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", F] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", F] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...A(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", yt, Lt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", yt, F] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: M() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              F,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", F] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...O(), Xv] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Jv] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Zv,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [y] }],
        "gradient-via-pos": [{ via: [y] }],
        "gradient-to-pos": [{ to: [y] }],
        "gradient-from": [{ from: [w] }],
        "gradient-via": [{ via: [w] }],
        "gradient-to": [{ to: [w] }],
        rounded: [{ rounded: [l] }],
        "rounded-s": [{ "rounded-s": [l] }],
        "rounded-e": [{ "rounded-e": [l] }],
        "rounded-t": [{ "rounded-t": [l] }],
        "rounded-r": [{ "rounded-r": [l] }],
        "rounded-b": [{ "rounded-b": [l] }],
        "rounded-l": [{ "rounded-l": [l] }],
        "rounded-ss": [{ "rounded-ss": [l] }],
        "rounded-se": [{ "rounded-se": [l] }],
        "rounded-ee": [{ "rounded-ee": [l] }],
        "rounded-es": [{ "rounded-es": [l] }],
        "rounded-tl": [{ "rounded-tl": [l] }],
        "rounded-tr": [{ "rounded-tr": [l] }],
        "rounded-br": [{ "rounded-br": [l] }],
        "rounded-bl": [{ "rounded-bl": [l] }],
        "border-w": [{ border: [i] }],
        "border-w-x": [{ "border-x": [i] }],
        "border-w-y": [{ "border-y": [i] }],
        "border-w-s": [{ "border-s": [i] }],
        "border-w-e": [{ "border-e": [i] }],
        "border-w-t": [{ "border-t": [i] }],
        "border-w-r": [{ "border-r": [i] }],
        "border-w-b": [{ "border-b": [i] }],
        "border-w-l": [{ "border-l": [i] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...A(), "hidden"] }],
        "divide-x": [{ "divide-x": [i] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [i] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: A() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...A()] }],
        "outline-offset": [{ "outline-offset": [yt, F] }],
        "outline-w": [{ outline: [yt, Lt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: ge() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [yt, Lt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", zt, e0] }],
        "shadow-color": [{ shadow: [xr] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": V() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", zt, F] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [g] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [g] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              F,
            ],
          },
        ],
        duration: [{ duration: U() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", F] }],
        delay: [{ delay: U() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", F] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [vr, F] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
        "skew-x": [{ "skew-x": [P] }],
        "skew-y": [{ "skew-y": [P] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              F,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              F,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": M() }],
        "scroll-mx": [{ "scroll-mx": M() }],
        "scroll-my": [{ "scroll-my": M() }],
        "scroll-ms": [{ "scroll-ms": M() }],
        "scroll-me": [{ "scroll-me": M() }],
        "scroll-mt": [{ "scroll-mt": M() }],
        "scroll-mr": [{ "scroll-mr": M() }],
        "scroll-mb": [{ "scroll-mb": M() }],
        "scroll-ml": [{ "scroll-ml": M() }],
        "scroll-p": [{ "scroll-p": M() }],
        "scroll-px": [{ "scroll-px": M() }],
        "scroll-py": [{ "scroll-py": M() }],
        "scroll-ps": [{ "scroll-ps": M() }],
        "scroll-pe": [{ "scroll-pe": M() }],
        "scroll-pt": [{ "scroll-pt": M() }],
        "scroll-pr": [{ "scroll-pr": M() }],
        "scroll-pb": [{ "scroll-pb": M() }],
        "scroll-pl": [{ "scroll-pl": M() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", F] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [yt, Lt, Ns] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  l0 = Dv(o0);
function nn(...e) {
  return l0(fp(e));
}
const s0 = Rv(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  X = gt.forwardRef(
    (
      {
        className: e,
        variant: t,
        size: n,
        isLoading: r,
        disabled: o,
        children: l,
        ...s
      },
      i,
    ) =>
      d.jsxs("button", {
        className: nn(s0({ variant: t, size: n, className: e })),
        ref: i,
        disabled: o || r,
        ...s,
        children: [
          r &&
            d.jsxs("svg", {
              className: "mr-2 h-4 w-4 animate-spin",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                d.jsx("circle", {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4",
                }),
                d.jsx("path", {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                }),
              ],
            }),
          l,
        ],
      }),
  );
X.displayName = "Button";
function rn({ children: e }) {
  const { isAuthenticated: t, user: n, hasRole: r, logout: o } = ir();
  return d.jsxs("div", {
    className: "min-h-screen bg-background text-foreground",
    children: [
      d.jsx("header", {
        className:
          "sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur",
        children: d.jsxs("div", {
          className:
            "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
          children: [
            d.jsxs(Ee, {
              to: "/",
              className: "flex items-center gap-2",
              children: [
                d.jsx("span", {
                  className:
                    "grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-bold",
                  children: "L",
                }),
                d.jsx("span", {
                  className: "font-semibold tracking-tight",
                  children: "Learning Management System",
                }),
              ],
            }),
            d.jsxs("nav", {
              className: "hidden items-center gap-5 text-sm md:flex",
              children: [
                d.jsx(_o, {
                  to: "/courses",
                  className: ({ isActive: l }) =>
                    l
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground",
                  children: "Courses",
                }),
                t &&
                  d.jsx(_o, {
                    to: "/my-courses",
                    className: ({ isActive: l }) =>
                      l
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground",
                    children: "My Courses",
                  }),
                t &&
                  r(["instructor", "admin"]) &&
                  d.jsx(_o, {
                    to: "/instructor/drafts",
                    className: ({ isActive: l }) =>
                      l
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground",
                    children: "Instructor",
                  }),
                t &&
                  d.jsx(_o, {
                    to: "/profile",
                    className: ({ isActive: l }) =>
                      l
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground",
                    children: "Profile",
                  }),
              ],
            }),
            d.jsx("div", {
              className: "flex items-center gap-2",
              children: t
                ? d.jsxs(d.Fragment, {
                    children: [
                      d.jsx("span", {
                        className:
                          "hidden text-sm text-muted-foreground sm:inline",
                        children: n == null ? void 0 : n.name,
                      }),
                      d.jsx(X, {
                        variant: "outline",
                        onClick: () => o(),
                        children: "Logout",
                      }),
                    ],
                  })
                : d.jsxs(d.Fragment, {
                    children: [
                      d.jsx(Ee, {
                        to: "/login",
                        children: d.jsx(X, {
                          variant: "ghost",
                          children: "Log in",
                        }),
                      }),
                      d.jsx(Ee, {
                        to: "/signup",
                        children: d.jsx(X, { children: "Get Started" }),
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
      d.jsx("main", { children: e }),
    ],
  });
}
const be = gt.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("div", {
    ref: n,
    className: nn(
      "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
      e,
    ),
    ...t,
  }),
);
be.displayName = "Card";
const at = gt.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("div", {
    ref: n,
    className: nn("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
at.displayName = "CardHeader";
const ut = gt.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("h2", {
    ref: n,
    className: nn("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
ut.displayName = "CardTitle";
const Wl = gt.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("p", {
    ref: n,
    className: nn("text-sm text-muted-foreground", e),
    ...t,
  }),
);
Wl.displayName = "CardDescription";
const Ie = gt.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("div", { ref: n, className: nn("p-6 pt-0", e), ...t }),
);
Ie.displayName = "CardContent";
const i0 = gt.forwardRef(({ className: e, ...t }, n) =>
  d.jsx("div", {
    ref: n,
    className: nn("flex items-center p-6 pt-0", e),
    ...t,
  }),
);
i0.displayName = "CardFooter";
const Me = gt.forwardRef(({ className: e, type: t, ...n }, r) =>
  d.jsx("input", {
    type: t,
    className: nn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ref: r,
    ...n,
  }),
);
Me.displayName = "Input";
function a0() {
  const [e, t] = k.useState([]),
    [n, r] = k.useState(""),
    [o, l] = k.useState(""),
    [s, i] = k.useState(!0),
    [a, u] = k.useState(null);
  k.useEffect(() => {
    (i(!0),
      u(null),
      Bt.list({ search: o || void 0, perPage: 12 })
        .then((h) => t(h.data))
        .catch((h) => u(xe(h)))
        .finally(() => i(!1)));
  }, [o]);
  const c = k.useMemo(
      () =>
        o
          ? `No courses found for "${o}".`
          : "No published courses are available right now.",
      [o],
    ),
    f = (h) => {
      (h.preventDefault(), l(n.trim()));
    };
  return d.jsx(rn, {
    children: d.jsxs("section", {
      className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
      children: [
        d.jsxs("div", {
          className:
            "mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
          children: [
            d.jsxs("div", {
              children: [
                d.jsx("h1", {
                  className: "text-3xl font-bold tracking-tight",
                  children: "Explore Courses",
                }),
                d.jsx("p", {
                  className: "mt-1 text-sm text-muted-foreground",
                  children: "Browse published courses and start learning.",
                }),
              ],
            }),
            d.jsxs("form", {
              onSubmit: f,
              className: "flex w-full max-w-xl gap-2",
              children: [
                d.jsx(Me, {
                  value: n,
                  onChange: (h) => r(h.target.value),
                  placeholder: "Search by title or description",
                }),
                d.jsx(X, { type: "submit", children: "Search" }),
              ],
            }),
          ],
        }),
        a &&
          d.jsx("p", {
            className:
              "mb-5 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
            children: a,
          }),
        s &&
          d.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: "Loading courses...",
          }),
        !s &&
          e.length === 0 &&
          d.jsx(be, {
            children: d.jsx(Ie, {
              className: "p-6 text-sm text-muted-foreground",
              children: c,
            }),
          }),
        d.jsx("div", {
          className: "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",
          children: e.map((h) => {
            var w, y;
            return d.jsxs(
              be,
              {
                className: "h-full",
                children: [
                  d.jsxs(at, {
                    children: [
                      d.jsx(ut, { className: "text-xl", children: h.title }),
                      d.jsx(Wl, {
                        className: "line-clamp-2",
                        children:
                          ((w = h.category) == null ? void 0 : w.name) ??
                          "Uncategorized",
                      }),
                    ],
                  }),
                  d.jsxs(Ie, {
                    className: "space-y-4",
                    children: [
                      d.jsx("p", {
                        className: "line-clamp-3 text-sm text-muted-foreground",
                        children:
                          (y = h.instructor) != null && y.name
                            ? `By ${h.instructor.name}`
                            : "Instructor TBA",
                      }),
                      d.jsx(Ee, {
                        to: `/courses/${h.id}-${h.slug}`,
                        children: d.jsx(X, {
                          className: "w-full",
                          children: "View Details",
                        }),
                      }),
                    ],
                  }),
                ],
              },
              h.id,
            );
          }),
        }),
      ],
    }),
  });
}
function u0(e) {
  const t = e.match(/^(\d+)-(.+)$/);
  return t ? { id: Number(t[1]), slug: t[2] } : { id: null, slug: e };
}
function c0() {
  var v, x;
  const { courseRef: e = "" } = ja(),
    { isAuthenticated: t, hasRole: n } = ir(),
    [r, o] = k.useState(null),
    [l, s] = k.useState(null),
    [i, a] = k.useState(null),
    [u, c] = k.useState(!0),
    [f, h] = k.useState(!1),
    w = k.useMemo(() => u0(e), [e]);
  k.useEffect(() => {
    (c(!0),
      a(null),
      Bt.show(w.slug)
        .then(async (m) => {
          if ((o(m), t && w.id)) {
            const p = await fc.status(w.id).catch(() => null);
            p && s(p);
          }
        })
        .catch((m) => a(xe(m)))
        .finally(() => c(!1)));
  }, [t, w.id, w.slug]);
  const y = async () => {
    if (!w.id) {
      a(
        "Enrollment is unavailable because this route has no course id. Use the course list page.",
      );
      return;
    }
    (h(!0), a(null));
    try {
      (await fc.enroll(w.id),
        s({ status: "enrolled", progress_percentage: 0, completed_at: null }));
    } catch (m) {
      a(xe(m));
    } finally {
      h(!1);
    }
  };
  return d.jsx(rn, {
    children: d.jsxs("section", {
      className: "mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8",
      children: [
        u &&
          d.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: "Loading course...",
          }),
        i &&
          d.jsx("p", {
            className:
              "mb-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
            children: i,
          }),
        r &&
          d.jsxs(be, {
            children: [
              d.jsxs(at, {
                children: [
                  d.jsx(ut, { className: "text-3xl", children: r.title }),
                  d.jsxs("p", {
                    className: "text-sm text-muted-foreground",
                    children: [
                      "Instructor: ",
                      ((v = r.instructor) == null ? void 0 : v.name) ?? "N/A",
                    ],
                  }),
                ],
              }),
              d.jsxs(Ie, {
                className: "space-y-6",
                children: [
                  d.jsx("p", {
                    className: "leading-7 text-foreground/90",
                    children: r.description || "No description provided yet.",
                  }),
                  d.jsxs("div", {
                    className: "flex flex-wrap items-center gap-3",
                    children: [
                      d.jsx("span", {
                        className:
                          "rounded-full border border-border px-3 py-1 text-xs",
                        children:
                          ((x = r.category) == null ? void 0 : x.name) ??
                          "Uncategorized",
                      }),
                      (l == null ? void 0 : l.status) === "enrolled" &&
                        d.jsx("span", {
                          className:
                            "rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success",
                          children: "Enrolled",
                        }),
                    ],
                  }),
                  t
                    ? (l == null ? void 0 : l.status) === "enrolled"
                      ? d.jsx(Ee, {
                          to: "/my-courses",
                          children: d.jsx(X, { children: "Go to My Courses" }),
                        })
                      : d.jsx(X, {
                          onClick: y,
                          isLoading: f,
                          disabled: f,
                          children: "Enroll Now",
                        })
                    : d.jsx(Ee, {
                        to: "/login",
                        children: d.jsx(X, { children: "Login to Enroll" }),
                      }),
                  t &&
                    n(["instructor", "admin"]) &&
                    d.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        "Tip: open your draft list to edit modules and lessons.",
                    }),
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
function d0() {
  const { login: e } = ir(),
    t = oo(),
    [n, r] = k.useState(""),
    [o, l] = k.useState(""),
    [s, i] = k.useState(null),
    [a, u] = k.useState(!1),
    c = async (f) => {
      (f.preventDefault(), i(null), u(!0));
      try {
        (await e(n, o), t("/my-courses"));
      } catch (h) {
        i(xe(h));
      } finally {
        u(!1);
      }
    };
  return d.jsx("div", {
    className: "grid min-h-[calc(100vh-64px)] place-items-center px-4 py-10",
    children: d.jsxs(be, {
      className: "w-full max-w-md",
      children: [
        d.jsxs(at, {
          children: [
            d.jsx(ut, { children: "Welcome back" }),
            d.jsx(Wl, { children: "Log in to continue learning." }),
          ],
        }),
        d.jsxs(Ie, {
          children: [
            d.jsxs("form", {
              className: "space-y-4",
              onSubmit: c,
              children: [
                s &&
                  d.jsx("p", {
                    className:
                      "rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
                    children: s,
                  }),
                d.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    d.jsx("label", {
                      htmlFor: "email",
                      className: "text-sm font-medium",
                      children: "Email",
                    }),
                    d.jsx(Me, {
                      id: "email",
                      type: "email",
                      value: n,
                      onChange: (f) => r(f.target.value),
                      required: !0,
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    d.jsx("label", {
                      htmlFor: "password",
                      className: "text-sm font-medium",
                      children: "Password",
                    }),
                    d.jsx(Me, {
                      id: "password",
                      type: "password",
                      value: o,
                      onChange: (f) => l(f.target.value),
                      required: !0,
                    }),
                  ],
                }),
                d.jsx(X, {
                  className: "w-full",
                  isLoading: a,
                  disabled: a,
                  type: "submit",
                  children: "Log in",
                }),
              ],
            }),
            d.jsxs("p", {
              className: "mt-4 text-sm text-muted-foreground",
              children: [
                "New here? ",
                d.jsx(Ee, {
                  to: "/signup",
                  className: "text-primary hover:underline",
                  children: "Create an account",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function f0() {
  const { signup: e } = ir(),
    t = oo(),
    [n, r] = k.useState(""),
    [o, l] = k.useState(""),
    [s, i] = k.useState(""),
    [a, u] = k.useState(null),
    [c, f] = k.useState(!1),
    h = async (w) => {
      (w.preventDefault(), u(null), f(!0));
      try {
        (await e(n, o, s), t("/my-courses"));
      } catch (y) {
        u(xe(y));
      } finally {
        f(!1);
      }
    };
  return d.jsx("div", {
    className: "grid min-h-[calc(100vh-64px)] place-items-center px-4 py-10",
    children: d.jsxs(be, {
      className: "w-full max-w-md",
      children: [
        d.jsxs(at, {
          children: [
            d.jsx(ut, { children: "Create your account" }),
            d.jsx(Wl, { children: "Start building and taking courses." }),
          ],
        }),
        d.jsxs(Ie, {
          children: [
            d.jsxs("form", {
              className: "space-y-4",
              onSubmit: h,
              children: [
                a &&
                  d.jsx("p", {
                    className:
                      "rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
                    children: a,
                  }),
                d.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    d.jsx("label", {
                      htmlFor: "name",
                      className: "text-sm font-medium",
                      children: "Name",
                    }),
                    d.jsx(Me, {
                      id: "name",
                      value: n,
                      onChange: (w) => r(w.target.value),
                      required: !0,
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    d.jsx("label", {
                      htmlFor: "email",
                      className: "text-sm font-medium",
                      children: "Email",
                    }),
                    d.jsx(Me, {
                      id: "email",
                      type: "email",
                      value: o,
                      onChange: (w) => l(w.target.value),
                      required: !0,
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    d.jsx("label", {
                      htmlFor: "password",
                      className: "text-sm font-medium",
                      children: "Password",
                    }),
                    d.jsx(Me, {
                      id: "password",
                      type: "password",
                      value: s,
                      onChange: (w) => i(w.target.value),
                      required: !0,
                    }),
                  ],
                }),
                d.jsx(X, {
                  className: "w-full",
                  isLoading: c,
                  disabled: c,
                  type: "submit",
                  children: "Create account",
                }),
              ],
            }),
            d.jsxs("p", {
              className: "mt-4 text-sm text-muted-foreground",
              children: [
                "Already registered? ",
                d.jsx(Ee, {
                  to: "/login",
                  className: "text-primary hover:underline",
                  children: "Log in",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function p0() {
  const { user: e } = ir();
  return d.jsx(rn, {
    children: d.jsx("section", {
      className: "mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8",
      children: d.jsxs(be, {
        children: [
          d.jsx(at, { children: d.jsx(ut, { children: "Profile" }) }),
          d.jsxs(Ie, {
            className: "space-y-3 text-sm",
            children: [
              d.jsxs("p", {
                children: [
                  d.jsx("span", {
                    className: "text-muted-foreground",
                    children: "Name:",
                  }),
                  " ",
                  e == null ? void 0 : e.name,
                ],
              }),
              d.jsxs("p", {
                children: [
                  d.jsx("span", {
                    className: "text-muted-foreground",
                    children: "Email:",
                  }),
                  " ",
                  e == null ? void 0 : e.email,
                ],
              }),
              d.jsxs("p", {
                children: [
                  d.jsx("span", {
                    className: "text-muted-foreground",
                    children: "Roles:",
                  }),
                  " ",
                  e == null ? void 0 : e.roles.join(", "),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function m0() {
  const [e, t] = k.useState([]),
    [n, r] = k.useState(!0),
    [o, l] = k.useState(null);
  return (
    k.useEffect(() => {
      Bt.myCourses()
        .then((s) => t(s.data))
        .catch((s) => l(xe(s)))
        .finally(() => r(!1));
    }, []),
    d.jsx(rn, {
      children: d.jsxs("section", {
        className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
        children: [
          d.jsx("h1", {
            className: "text-3xl font-bold tracking-tight",
            children: "My Courses",
          }),
          d.jsx("p", {
            className: "mt-1 text-sm text-muted-foreground",
            children: "Courses you are currently enrolled in.",
          }),
          o &&
            d.jsx("p", {
              className:
                "mt-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
              children: o,
            }),
          n &&
            d.jsx("p", {
              className: "mt-4 text-sm text-muted-foreground",
              children: "Loading...",
            }),
          d.jsx("div", {
            className:
              "mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",
            children: e.map((s) => {
              var i, a;
              return d.jsxs(
                be,
                {
                  children: [
                    d.jsx(at, {
                      children: d.jsx(ut, {
                        className: "text-xl",
                        children: s.title,
                      }),
                    }),
                    d.jsxs(Ie, {
                      className: "space-y-3",
                      children: [
                        d.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children:
                            ((i = s.category) == null ? void 0 : i.name) ??
                            "Uncategorized",
                        }),
                        d.jsxs("p", {
                          className: "text-sm text-muted-foreground",
                          children: [
                            "Instructor: ",
                            ((a = s.instructor) == null ? void 0 : a.name) ??
                              "N/A",
                          ],
                        }),
                        d.jsx("div", {
                          className: "flex gap-2",
                          children: d.jsx(Ee, {
                            className: "flex-1",
                            to: `/courses/${s.id}-${s.slug}`,
                            children: d.jsx(X, {
                              className: "w-full",
                              variant: "outline",
                              children: "Overview",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                s.id,
              );
            }),
          }),
          !n &&
            e.length === 0 &&
            d.jsx(be, {
              className: "mt-6",
              children: d.jsx(Ie, {
                className: "p-6 text-sm text-muted-foreground",
                children: "You are not enrolled in any course yet.",
              }),
            }),
        ],
      }),
    })
  );
}
function h0() {
  const [e, t] = k.useState([]),
    [n, r] = k.useState(null);
  return (
    k.useEffect(() => {
      Bt.myDrafts()
        .then(t)
        .catch((o) => r(xe(o)));
    }, []),
    d.jsx(rn, {
      children: d.jsxs("section", {
        className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
        children: [
          d.jsxs("div", {
            className: "mb-6 flex items-center justify-between",
            children: [
              d.jsxs("div", {
                children: [
                  d.jsx("h1", {
                    className: "text-3xl font-bold tracking-tight",
                    children: "Instructor Workspace",
                  }),
                  d.jsx("p", {
                    className: "mt-1 text-sm text-muted-foreground",
                    children:
                      "Manage your draft courses and structure content.",
                  }),
                ],
              }),
              d.jsx(Ee, {
                to: "/instructor/courses/new",
                children: d.jsx(X, { children: "Create Course" }),
              }),
            ],
          }),
          n &&
            d.jsx("p", {
              className:
                "mb-5 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
              children: n,
            }),
          e.length === 0
            ? d.jsx(be, {
                children: d.jsx(Ie, {
                  className: "p-6 text-sm text-muted-foreground",
                  children: "No draft courses yet.",
                }),
              })
            : d.jsx("div", {
                className:
                  "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",
                children: e.map((o) =>
                  d.jsxs(
                    be,
                    {
                      children: [
                        d.jsx(at, {
                          children: d.jsx(ut, {
                            className: "text-xl",
                            children: o.title,
                          }),
                        }),
                        d.jsxs(Ie, {
                          className: "space-y-3",
                          children: [
                            d.jsx("p", {
                              className:
                                "line-clamp-2 text-sm text-muted-foreground",
                              children: o.description || "No description yet.",
                            }),
                            d.jsxs("div", {
                              className: "flex gap-2",
                              children: [
                                d.jsx(Ee, {
                                  to: `/instructor/courses/${o.id}/edit`,
                                  className: "flex-1",
                                  children: d.jsx(X, {
                                    className: "w-full",
                                    variant: "outline",
                                    children: "Edit",
                                  }),
                                }),
                                d.jsx(Ee, {
                                  to: `/courses/${o.id}-${o.slug}`,
                                  className: "flex-1",
                                  children: d.jsx(X, {
                                    className: "w-full",
                                    children: "Preview",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    o.id,
                  ),
                ),
              }),
        ],
      }),
    })
  );
}
function yc(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}
function vc() {
  const { courseId: e } = ja(),
    t = !!e,
    n = oo(),
    [r, o] = k.useState(""),
    [l, s] = k.useState(""),
    [i, a] = k.useState(""),
    [u, c] = k.useState(""),
    [f, h] = k.useState(1),
    [w, y] = k.useState(!1),
    [v, x] = k.useState(null),
    [m, p] = k.useState([]),
    [g, S] = k.useState({}),
    [C, P] = k.useState(""),
    [R, T] = k.useState({});
  k.useEffect(() => {
    !t ||
      !e ||
      Bt.edit(Number(e))
        .then(async (O) => {
          (o(O.title),
            s(O.slug),
            a(O.description ?? ""),
            c(O.thumbnail ?? ""),
            h(O.category_id));
          const A = await Cs.list(O.id);
          p(A);
          const V = await Promise.all(
              A.map(async (_) => [_.id, await zr.list(_.id)]),
            ),
            j = Object.fromEntries(V);
          S(j);
        })
        .catch((O) => x(xe(O)));
  }, [t, e]);
  const B = k.useMemo(() => (t ? "Edit Course" : "Create Course"), [t]),
    b = async (O) => {
      (O.preventDefault(), y(!0), x(null));
      try {
        (t && e
          ? await Bt.update(Number(e), {
              title: r,
              slug: l,
              description: i,
              thumbnail: u,
              category_id: f,
            })
          : await Bt.create({
              title: r,
              slug: l,
              description: i,
              thumbnail: u,
              category_id: f,
            }),
          n("/instructor/drafts"));
      } catch (A) {
        x(xe(A));
      } finally {
        y(!1);
      }
    },
    re = async () => {
      if (!(!e || !C.trim()))
        try {
          const O = await Cs.create(Number(e), { title: C.trim() });
          (p((A) => [...A, O].sort((V, j) => V.order - j.order)), P(""));
        } catch (O) {
          x(xe(O));
        }
    },
    M = async (O) => {
      try {
        (await Cs.remove(O),
          p((A) => A.filter((V) => V.id !== O)),
          S((A) => {
            const V = { ...A };
            return (delete V[O], V);
          }));
      } catch (A) {
        x(xe(A));
      }
    },
    ge = async (O) => {
      var V;
      const A = R[O];
      if (
        !(
          !((V = A == null ? void 0 : A.title) != null && V.trim()) ||
          !A.content.trim()
        )
      )
        try {
          const j = await zr.create(O, {
            title: A.title,
            type: A.type,
            content: A.content,
          });
          (S((_) => ({
            ..._,
            [O]: [...(_[O] ?? []), j].sort((z, U) => z.order - U.order),
          })),
            T((_) => ({
              ..._,
              [O]: { title: "", type: "text", content: "" },
            })));
        } catch (j) {
          x(xe(j));
        }
    },
    fe = async (O, A) => {
      try {
        (await zr.remove(A),
          S((V) => ({ ...V, [O]: (V[O] ?? []).filter((j) => j.id !== A) })));
      } catch (V) {
        x(xe(V));
      }
    };
  return d.jsx(rn, {
    children: d.jsxs("section", {
      className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
      children: [
        d.jsxs("div", {
          className: "mb-6 flex items-center justify-between",
          children: [
            d.jsx("h1", {
              className: "text-3xl font-bold tracking-tight",
              children: B,
            }),
            d.jsx(Ee, {
              to: "/instructor/drafts",
              children: d.jsx(X, { variant: "outline", children: "Back" }),
            }),
          ],
        }),
        v &&
          d.jsx("p", {
            className:
              "mb-5 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
            children: v,
          }),
        d.jsxs(be, {
          children: [
            d.jsx(at, { children: d.jsx(ut, { children: "Course Details" }) }),
            d.jsx(Ie, {
              children: d.jsxs("form", {
                onSubmit: b,
                className: "grid grid-cols-1 gap-4 md:grid-cols-2",
                children: [
                  d.jsxs("div", {
                    className: "space-y-1 md:col-span-2",
                    children: [
                      d.jsx("label", {
                        className: "text-sm font-medium",
                        children: "Title",
                      }),
                      d.jsx(Me, {
                        value: r,
                        onChange: (O) => {
                          (o(O.target.value), t || s(yc(O.target.value)));
                        },
                        required: !0,
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      d.jsx("label", {
                        className: "text-sm font-medium",
                        children: "Slug",
                      }),
                      d.jsx(Me, {
                        value: l,
                        onChange: (O) => s(yc(O.target.value)),
                        required: !0,
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      d.jsx("label", {
                        className: "text-sm font-medium",
                        children: "Category ID",
                      }),
                      d.jsx(Me, {
                        type: "number",
                        value: f,
                        onChange: (O) => h(Number(O.target.value) || 1),
                        required: !0,
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "space-y-1 md:col-span-2",
                    children: [
                      d.jsx("label", {
                        className: "text-sm font-medium",
                        children: "Thumbnail URL",
                      }),
                      d.jsx(Me, {
                        value: u,
                        onChange: (O) => c(O.target.value),
                        placeholder: "https://...",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "space-y-1 md:col-span-2",
                    children: [
                      d.jsx("label", {
                        className: "text-sm font-medium",
                        children: "Description",
                      }),
                      d.jsx("textarea", {
                        className:
                          "min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                        value: i,
                        onChange: (O) => a(O.target.value),
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "md:col-span-2 flex flex-wrap gap-2",
                    children: [
                      d.jsx(X, {
                        type: "submit",
                        isLoading: w,
                        disabled: w,
                        children: t ? "Save Changes" : "Create Course",
                      }),
                      t &&
                        e &&
                        d.jsx(X, {
                          type: "button",
                          variant: "outline",
                          onClick: () =>
                            Bt.togglePublish(Number(e)).catch((O) => x(xe(O))),
                          children: "Toggle Publish",
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        t &&
          d.jsx("div", {
            className: "mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2",
            children: d.jsxs(be, {
              children: [
                d.jsx(at, { children: d.jsx(ut, { children: "Modules" }) }),
                d.jsxs(Ie, {
                  className: "space-y-4",
                  children: [
                    d.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        d.jsx(Me, {
                          value: C,
                          onChange: (O) => P(O.target.value),
                          placeholder: "New module title",
                        }),
                        d.jsx(X, {
                          type: "button",
                          onClick: re,
                          children: "Add",
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "space-y-3",
                      children: m.map((O) => {
                        var A, V, j;
                        return d.jsxs(
                          "div",
                          {
                            className: "rounded-md border border-border p-3",
                            children: [
                              d.jsxs("div", {
                                className:
                                  "mb-2 flex items-center justify-between",
                                children: [
                                  d.jsxs("p", {
                                    className: "font-medium",
                                    children: [O.order, ". ", O.title],
                                  }),
                                  d.jsx(X, {
                                    type: "button",
                                    variant: "ghost",
                                    onClick: () => M(O.id),
                                    children: "Delete",
                                  }),
                                ],
                              }),
                              d.jsx("div", {
                                className: "space-y-2",
                                children: (g[O.id] ?? []).map((_) =>
                                  d.jsxs(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-between rounded border border-border px-2 py-1 text-sm",
                                      children: [
                                        d.jsxs(Ee, {
                                          to: `/lessons/${_.id}`,
                                          className: "hover:text-primary",
                                          children: [_.order, ". ", _.title],
                                        }),
                                        d.jsx(X, {
                                          type: "button",
                                          variant: "ghost",
                                          onClick: () => fe(O.id, _.id),
                                          children: "Delete",
                                        }),
                                      ],
                                    },
                                    _.id,
                                  ),
                                ),
                              }),
                              d.jsxs("div", {
                                className:
                                  "mt-3 space-y-2 rounded-md border border-border p-2",
                                children: [
                                  d.jsx(Me, {
                                    placeholder: "Lesson title",
                                    value:
                                      ((A = R[O.id]) == null
                                        ? void 0
                                        : A.title) ?? "",
                                    onChange: (_) =>
                                      T((z) => ({
                                        ...z,
                                        [O.id]: {
                                          ...(z[O.id] ?? {
                                            type: "text",
                                            content: "",
                                          }),
                                          title: _.target.value,
                                        },
                                      })),
                                  }),
                                  d.jsxs("select", {
                                    className:
                                      "h-10 w-full rounded-md border border-input bg-background px-3 text-sm",
                                    value:
                                      ((V = R[O.id]) == null
                                        ? void 0
                                        : V.type) ?? "text",
                                    onChange: (_) =>
                                      T((z) => ({
                                        ...z,
                                        [O.id]: {
                                          ...(z[O.id] ?? {
                                            title: "",
                                            content: "",
                                          }),
                                          type: _.target.value,
                                        },
                                      })),
                                    children: [
                                      d.jsx("option", {
                                        value: "text",
                                        children: "Text",
                                      }),
                                      d.jsx("option", {
                                        value: "video",
                                        children: "Video",
                                      }),
                                      d.jsx("option", {
                                        value: "file",
                                        children: "File",
                                      }),
                                      d.jsx("option", {
                                        value: "embed",
                                        children: "Embed",
                                      }),
                                    ],
                                  }),
                                  d.jsx("textarea", {
                                    className:
                                      "min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                                    placeholder: "Lesson content",
                                    value:
                                      ((j = R[O.id]) == null
                                        ? void 0
                                        : j.content) ?? "",
                                    onChange: (_) =>
                                      T((z) => ({
                                        ...z,
                                        [O.id]: {
                                          ...(z[O.id] ?? {
                                            title: "",
                                            type: "text",
                                          }),
                                          content: _.target.value,
                                        },
                                      })),
                                  }),
                                  d.jsx(X, {
                                    type: "button",
                                    onClick: () => ge(O.id),
                                    children: "Add Lesson",
                                  }),
                                ],
                              }),
                            ],
                          },
                          O.id,
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    }),
  });
}
function g0() {
  const { lessonId: e } = ja(),
    [t, n] = k.useState(null),
    [r, o] = k.useState(null),
    [l, s] = k.useState(null);
  k.useEffect(() => {
    e &&
      zr
        .show(Number(e))
        .then(n)
        .catch((a) => s(xe(a)));
  }, [e]);
  const i = async () => {
    if (e) {
      s(null);
      try {
        const a = await zr.complete(Number(e));
        o(a);
      } catch (a) {
        s(xe(a));
      }
    }
  };
  return d.jsx(rn, {
    children: d.jsxs("section", {
      className: "mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8",
      children: [
        l &&
          d.jsx("p", {
            className:
              "mb-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
            children: l,
          }),
        t
          ? d.jsxs(be, {
              children: [
                d.jsxs(at, {
                  children: [
                    d.jsx(ut, { children: t.title }),
                    d.jsxs("p", {
                      className: "text-sm text-muted-foreground",
                      children: ["Type: ", t.type],
                    }),
                  ],
                }),
                d.jsxs(Ie, {
                  className: "space-y-6",
                  children: [
                    t.description &&
                      d.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: t.description,
                      }),
                    d.jsx("article", {
                      className:
                        "rounded-md border border-border bg-card p-4 leading-7 whitespace-pre-wrap",
                      children: t.content,
                    }),
                    d.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        d.jsx(X, { onClick: i, children: "Mark Complete" }),
                        r &&
                          d.jsxs("p", {
                            className: "text-sm text-success",
                            children: [
                              "Progress updated: ",
                              r.progress_percentage,
                              "%",
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : d.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Loading lesson...",
            }),
      ],
    }),
  });
}
function y0() {
  return d.jsx(rn, {
    children: d.jsx("section", {
      className: "grid min-h-[60vh] place-items-center px-4 text-center",
      children: d.jsxs("div", {
        children: [
          d.jsx("h1", {
            className: "text-4xl font-bold",
            children: "Page not found",
          }),
          d.jsx("p", {
            className: "mt-3 text-sm text-muted-foreground",
            children: "The route you requested does not exist.",
          }),
          d.jsx(Ee, {
            to: "/courses",
            className: "mt-6 inline-block",
            children: d.jsx(X, { children: "Back to Courses" }),
          }),
        ],
      }),
    }),
  });
}
function v0() {
  return d.jsx(jv, {
    children: d.jsxs(Ig, {
      children: [
        d.jsx(Ue, {
          path: "/",
          element: d.jsx(Si, { to: "/courses", replace: !0 }),
        }),
        d.jsx(Ue, { path: "/courses", element: d.jsx(a0, {}) }),
        d.jsx(Ue, { path: "/courses/:courseRef", element: d.jsx(c0, {}) }),
        d.jsx(Ue, { path: "/login", element: d.jsx(d0, {}) }),
        d.jsx(Ue, { path: "/signup", element: d.jsx(f0, {}) }),
        d.jsx(Ue, {
          path: "/my-courses",
          element: d.jsx(Nn, { children: d.jsx(m0, {}) }),
        }),
        d.jsx(Ue, {
          path: "/profile",
          element: d.jsx(Nn, { children: d.jsx(p0, {}) }),
        }),
        d.jsx(Ue, {
          path: "/lessons/:lessonId",
          element: d.jsx(Nn, { children: d.jsx(g0, {}) }),
        }),
        d.jsx(Ue, {
          path: "/instructor/drafts",
          element: d.jsx(Nn, {
            requiredRoles: ["instructor", "admin"],
            children: d.jsx(h0, {}),
          }),
        }),
        d.jsx(Ue, {
          path: "/instructor/courses/new",
          element: d.jsx(Nn, {
            requiredRoles: ["instructor", "admin"],
            children: d.jsx(vc, {}),
          }),
        }),
        d.jsx(Ue, {
          path: "/instructor/courses/:courseId/edit",
          element: d.jsx(Nn, {
            requiredRoles: ["instructor", "admin"],
            children: d.jsx(vc, {}),
          }),
        }),
        d.jsx(Ue, { path: "*", element: d.jsx(y0, {}) }),
      ],
    }),
  });
}
js.createRoot(document.getElementById("root")).render(
  d.jsx(gt.StrictMode, { children: d.jsx(Wg, { children: d.jsx(v0, {}) }) }),
);
