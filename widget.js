(() => {
  'use strict';
  function e(e, t) {
    e.style.display = t ? 'flex' : 'none';
  }
  function t() {
    var e,
      r,
      o = 'function' == typeof Symbol ? Symbol : {},
      i = o.iterator || '@@iterator',
      l = o.toStringTag || '@@toStringTag';
    function a(t, o, i, l) {
      var a = o && o.prototype instanceof c ? o : c,
        d = Object.create(a.prototype);
      return (
        n(
          d,
          '_invoke',
          (function (t, n, o) {
            var i,
              l,
              a,
              c = 0,
              d = o || [],
              u = !1,
              f = {
                p: 0,
                n: 0,
                v: e,
                a: p,
                f: p.bind(e, 4),
                d: function (t, n) {
                  return (i = t), (l = 0), (a = e), (f.n = n), s;
                }
              };
            function p(t, n) {
              for (l = t, a = n, r = 0; !u && c && !o && r < d.length; r++) {
                var o,
                  i = d[r],
                  p = f.p,
                  h = i[2];
                t > 3
                  ? (o = h === n) &&
                    ((a = i[(l = i[4]) ? 5 : ((l = 3), 3)]), (i[4] = i[5] = e))
                  : i[0] <= p &&
                    ((o = t < 2 && p < i[1])
                      ? ((l = 0), (f.v = n), (f.n = i[1]))
                      : p < h &&
                        (o = t < 3 || i[0] > n || n > h) &&
                        ((i[4] = t), (i[5] = n), (f.n = h), (l = 0)));
              }
              if (o || t > 1) return s;
              throw ((u = !0), n);
            }
            return function (o, d, h) {
              if (c > 1) throw TypeError('Generator is already running');
              for (
                u && 1 === d && p(d, h), l = d, a = h;
                (r = l < 2 ? e : a) || !u;

              ) {
                i ||
                  (l
                    ? l < 3
                      ? (l > 1 && (f.n = -1), p(l, a))
                      : (f.n = a)
                    : (f.v = a));
                try {
                  if (((c = 2), i)) {
                    if ((l || (o = 'next'), (r = i[o]))) {
                      if (!(r = r.call(i, a)))
                        throw TypeError('iterator result is not an object');
                      if (!r.done) return r;
                      (a = r.value), l < 2 && (l = 0);
                    } else
                      1 === l && (r = i.return) && r.call(i),
                        l < 2 &&
                          ((a = TypeError(
                            "The iterator does not provide a '" + o + "' method"
                          )),
                          (l = 1));
                    i = e;
                  } else if ((r = (u = f.n < 0) ? a : t.call(n, f)) !== s)
                    break;
                } catch (t) {
                  (i = e), (l = 1), (a = t);
                } finally {
                  c = 1;
                }
              }
              return { value: r, done: u };
            };
          })(t, i, l),
          !0
        ),
        d
      );
    }
    var s = {};
    function c() {}
    function d() {}
    function u() {}
    r = Object.getPrototypeOf;
    var f = [][i]
        ? r(r([][i]()))
        : (n((r = {}), i, function () {
            return this;
          }),
          r),
      p = (u.prototype = c.prototype = Object.create(f));
    function h(e) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e, u)
          : ((e.__proto__ = u), n(e, l, 'GeneratorFunction')),
        (e.prototype = Object.create(p)),
        e
      );
    }
    return (
      (d.prototype = u),
      n(p, 'constructor', u),
      n(u, 'constructor', d),
      (d.displayName = 'GeneratorFunction'),
      n(u, l, 'GeneratorFunction'),
      n(p),
      n(p, l, 'Generator'),
      n(p, i, function () {
        return this;
      }),
      n(p, 'toString', function () {
        return '[object Generator]';
      }),
      (t = function () {
        return { w: a, m: h };
      })()
    );
  }
  function n(e, t, r, o) {
    var i = Object.defineProperty;
    try {
      i({}, '', {});
    } catch (e) {
      i = 0;
    }
    (n = function (e, t, r, o) {
      if (t)
        i
          ? i(e, t, {
              value: r,
              enumerable: !o,
              configurable: !o,
              writable: !o
            })
          : (e[t] = r);
      else {
        var l = function (t, r) {
          n(e, t, function (e) {
            return this._invoke(t, r, e);
          });
        };
        l('next', 0), l('throw', 1), l('return', 2);
      }
    }),
      n(e, t, r, o);
  }
  function r(e, t, n, r, o, i, l) {
    try {
      var a = e[i](l),
        s = a.value;
    } catch (e) {
      return void n(e);
    }
    a.done ? t(s) : Promise.resolve(s).then(r, o);
  }
  function o(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (o, i) {
        var l = e.apply(t, n);
        function a(e) {
          r(l, o, i, a, s, 'next', e);
        }
        function s(e) {
          r(l, o, i, a, s, 'throw', e);
        }
        a(void 0);
      });
    };
  }
  function i(e, t, n, r) {
    return l.apply(this, arguments);
  }
  function l() {
    return (l = o(
      t().m(function e(n, r, o, i) {
        var l, a, s, c;
        return t().w(
          function (e) {
            for (;;)
              switch (e.n) {
                case 0:
                  return (
                    (l = { agent_id: n }),
                    'number' != typeof o || isNaN(o) || (l.agent_version = o),
                    i &&
                      Object.keys(i).length > 0 &&
                      (l.retell_llm_dynamic_variables = i),
                    (e.n = 1),
                    fetch('https://api.retellai.com/create-chat', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer '.concat(r)
                      },
                      body: JSON.stringify(l)
                    })
                  );
                case 1:
                  if ((a = e.v).ok) {
                    e.n = 6;
                    break;
                  }
                  return (s = 'Unknown error'), (e.p = 2), (e.n = 3), a.json();
                case 3:
                  (c = e.v), (s = c.message || s), (e.n = 5);
                  break;
                case 4:
                  (e.p = 4), e.v;
                case 5:
                  return e.a(2, { status: 'error', message: s });
                case 6:
                  return (e.n = 7), a.json();
                case 7:
                  return e.a(2, e.v);
              }
          },
          e,
          null,
          [[2, 4]]
        );
      })
    )).apply(this, arguments);
  }
  function a(e, t) {
    return s.apply(this, arguments);
  }
  function s() {
    return (s = o(
      t().m(function e(n, r) {
        var o;
        return t().w(function (e) {
          for (;;)
            switch (e.n) {
              case 0:
                return (
                  (e.n = 1),
                  fetch('https://api.retellai.com/get-chat/'.concat(n), {
                    headers: { Authorization: 'Bearer '.concat(r) }
                  })
                );
              case 1:
                return (o = e.v), (e.n = 2), o.json();
              case 2:
                return e.a(2, e.v);
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function c(e, t, n) {
    return d.apply(this, arguments);
  }
  function d() {
    return (d = o(
      t().m(function e(n, r, o) {
        var i;
        return t().w(function (e) {
          for (;;)
            switch (e.n) {
              case 0:
                return (
                  (e.n = 1),
                  fetch('https://api.retellai.com/create-chat-completion', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: 'Bearer '.concat(o)
                    },
                    body: JSON.stringify({ chat_id: n, content: r })
                  })
                );
              case 1:
                return (i = e.v), (e.n = 2), i.json();
              case 2:
                return e.a(2, e.v);
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function u(e, t) {
    return f.apply(this, arguments);
  }
  function f() {
    return (f = o(
      t().m(function e(n, r) {
        var o, i;
        return t().w(
          function (e) {
            for (;;)
              switch (e.n) {
                case 0:
                  return (
                    (e.n = 1),
                    fetch('https://api.retellai.com/end-chat/'.concat(n), {
                      method: 'PATCH',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer '.concat(r)
                      }
                    })
                  );
                case 1:
                  if (204 !== (o = e.v).status) {
                    e.n = 2;
                    break;
                  }
                  return e.a(2, { success: !0 });
                case 2:
                  return (e.n = 3), o.text();
                case 3:
                  return (i = e.v), (e.p = 4), e.a(2, JSON.parse(i));
                case 5:
                  if (((e.p = 5), e.v, !o.ok)) {
                    e.n = 6;
                    break;
                  }
                  return e.a(2, { success: !0 });
                case 6:
                  throw new Error('Invalid response from endChat API: ' + i);
                case 7:
                  return e.a(2);
              }
          },
          e,
          null,
          [[4, 5]]
        );
      })
    )).apply(this, arguments);
  }
  function p(e) {
    localStorage.setItem('LS_CHAT_HISTORY', JSON.stringify(e));
  }
  function h(e) {
    localStorage.setItem('LS_CHAT_LIST', JSON.stringify(e));
  }
  function g(e) {
    localStorage.setItem('LS_CHAT_ID', e);
  }
  function m(e) {
    if (!e) return '';
    var t = new Date(),
      n = new Date(e),
      r = t - n,
      o = Math.floor(r / 1e3),
      i = Math.floor(o / 60),
      l = Math.floor(i / 60);
    return Math.floor(l / 24) >= 1
      ? n.toISOString().slice(0, 10)
      : l >= 1
      ? ''.concat(l, 'h ago')
      : i >= 1
      ? ''.concat(i, ' minutes ago')
      : 'just now';
  }
  var b =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.796 9.99924L7.0835 6.28674L8.144 5.22624L12.917 9.99924L8.144 14.7722L7.0835 13.7117L10.796 9.99924Z" fill="#99A0AE"/></svg>';
  function y(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            o,
            i,
            l,
            a = [],
            s = !0,
            c = !1;
          try {
            if (((i = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              s = !1;
            } else
              for (
                ;
                !(s = (r = i.call(n)).done) &&
                (a.push(r.value), a.length !== t);
                s = !0
              );
          } catch (e) {
            (c = !0), (o = e);
          } finally {
            try {
              if (!s && null != n.return && ((l = n.return()), Object(l) !== l))
                return;
            } finally {
              if (c) throw o;
            }
          }
          return a;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return x(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? x(e, t)
              : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function x(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function v() {
    var e,
      t,
      n = 'function' == typeof Symbol ? Symbol : {},
      r = n.iterator || '@@iterator',
      o = n.toStringTag || '@@toStringTag';
    function i(n, r, o, i) {
      var s = r && r.prototype instanceof a ? r : a,
        c = Object.create(s.prototype);
      return (
        w(
          c,
          '_invoke',
          (function (n, r, o) {
            var i,
              a,
              s,
              c = 0,
              d = o || [],
              u = !1,
              f = {
                p: 0,
                n: 0,
                v: e,
                a: p,
                f: p.bind(e, 4),
                d: function (t, n) {
                  return (i = t), (a = 0), (s = e), (f.n = n), l;
                }
              };
            function p(n, r) {
              for (a = n, s = r, t = 0; !u && c && !o && t < d.length; t++) {
                var o,
                  i = d[t],
                  p = f.p,
                  h = i[2];
                n > 3
                  ? (o = h === r) &&
                    ((s = i[(a = i[4]) ? 5 : ((a = 3), 3)]), (i[4] = i[5] = e))
                  : i[0] <= p &&
                    ((o = n < 2 && p < i[1])
                      ? ((a = 0), (f.v = r), (f.n = i[1]))
                      : p < h &&
                        (o = n < 3 || i[0] > r || r > h) &&
                        ((i[4] = n), (i[5] = r), (f.n = h), (a = 0)));
              }
              if (o || n > 1) return l;
              throw ((u = !0), r);
            }
            return function (o, d, h) {
              if (c > 1) throw TypeError('Generator is already running');
              for (
                u && 1 === d && p(d, h), a = d, s = h;
                (t = a < 2 ? e : s) || !u;

              ) {
                i ||
                  (a
                    ? a < 3
                      ? (a > 1 && (f.n = -1), p(a, s))
                      : (f.n = s)
                    : (f.v = s));
                try {
                  if (((c = 2), i)) {
                    if ((a || (o = 'next'), (t = i[o]))) {
                      if (!(t = t.call(i, s)))
                        throw TypeError('iterator result is not an object');
                      if (!t.done) return t;
                      (s = t.value), a < 2 && (a = 0);
                    } else
                      1 === a && (t = i.return) && t.call(i),
                        a < 2 &&
                          ((s = TypeError(
                            "The iterator does not provide a '" + o + "' method"
                          )),
                          (a = 1));
                    i = e;
                  } else if ((t = (u = f.n < 0) ? s : n.call(r, f)) !== l)
                    break;
                } catch (t) {
                  (i = e), (a = 1), (s = t);
                } finally {
                  c = 1;
                }
              }
              return { value: t, done: u };
            };
          })(n, o, i),
          !0
        ),
        c
      );
    }
    var l = {};
    function a() {}
    function s() {}
    function c() {}
    t = Object.getPrototypeOf;
    var d = [][r]
        ? t(t([][r]()))
        : (w((t = {}), r, function () {
            return this;
          }),
          t),
      u = (c.prototype = a.prototype = Object.create(d));
    function f(e) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e, c)
          : ((e.__proto__ = c), w(e, o, 'GeneratorFunction')),
        (e.prototype = Object.create(u)),
        e
      );
    }
    return (
      (s.prototype = c),
      w(u, 'constructor', c),
      w(c, 'constructor', s),
      (s.displayName = 'GeneratorFunction'),
      w(c, o, 'GeneratorFunction'),
      w(u),
      w(u, o, 'Generator'),
      w(u, r, function () {
        return this;
      }),
      w(u, 'toString', function () {
        return '[object Generator]';
      }),
      (v = function () {
        return { w: i, m: f };
      })()
    );
  }
  function w(e, t, n, r) {
    var o = Object.defineProperty;
    try {
      o({}, '', {});
    } catch (e) {
      o = 0;
    }
    (w = function (e, t, n, r) {
      if (t)
        o
          ? o(e, t, {
              value: n,
              enumerable: !r,
              configurable: !r,
              writable: !r
            })
          : (e[t] = n);
      else {
        var i = function (t, n) {
          w(e, t, function (e) {
            return this._invoke(t, n, e);
          });
        };
        i('next', 0), i('throw', 1), i('return', 2);
      }
    }),
      w(e, t, n, r);
  }
  function C(e, t, n, r, o, i, l) {
    try {
      var a = e[i](l),
        s = a.value;
    } catch (e) {
      return void n(e);
    }
    a.done ? t(s) : Promise.resolve(s).then(r, o);
  }
  function k(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = e.apply(t, n);
        function l(e) {
          C(i, r, o, l, a, 'next', e);
        }
        function a(e) {
          C(i, r, o, l, a, 'throw', e);
        }
        l(void 0);
      });
    };
  }
  !(function () {
    function t() {
      var t = document.getElementById('syntalia-widget');
      if (t) {
        var n = t.getAttribute('data-public-key');
        if (n) {
          var r = t.getAttribute('data-agent-id'),
            o = t.getAttribute('data-title') || 'Title',
            l = t.getAttribute('data-agent-version'),
            s = l ? parseInt(l, 10) : void 0,
            d = t.getAttribute('data-color') || '#0d1123',
            f = t.getAttribute('data-logo-url'),
            x =
              '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="27" height="27" rx="5.5" fill="white"/><rect x="0.5" y="0.5" width="27" height="27" rx="5.5" stroke="#E1E4EA"/><path d="M11.2979 20.7568C12.1931 20.7571 12.9188 21.4826 12.9189 22.3779C12.9189 23.2734 12.1932 23.9998 11.2979 24C10.4023 24 9.67578 23.2735 9.67578 22.3779C9.67597 21.4825 10.4024 20.7568 11.2979 20.7568ZM16.7021 21.2969C17.2991 21.2969 17.783 21.781 17.7832 22.3779C17.7832 22.975 17.2992 23.459 16.7021 23.459C16.1052 23.4588 15.6211 22.9749 15.6211 22.3779C15.6213 21.7811 16.1054 21.2971 16.7021 21.2969ZM5.62109 21.5674C6.06875 21.5674 6.43142 21.9303 6.43164 22.3779C6.43164 22.8257 6.06889 23.1895 5.62109 23.1895C5.17335 23.1894 4.81055 22.8257 4.81055 22.3779C4.81077 21.9304 5.17349 21.5674 5.62109 21.5674ZM22.3779 21.5674C22.8256 21.5674 23.1892 21.9303 23.1895 22.3779C23.1895 22.8257 22.8257 23.1895 22.3779 23.1895C21.9304 23.1892 21.5674 22.8256 21.5674 22.3779C21.5676 21.9305 21.9305 21.5676 22.3779 21.5674ZM16.7021 8.32422C18.3439 8.32422 19.6755 9.65516 19.6758 11.2969C19.6758 12.4988 18.9609 13.5314 17.9346 14C18.9609 14.4686 19.6758 15.5012 19.6758 16.7031C19.6756 18.3449 18.344 19.6758 16.7021 19.6758C15.5005 19.6756 14.4676 18.9616 13.999 17.9355C13.5302 18.9614 12.4984 19.6758 11.2969 19.6758C9.6551 19.6757 8.32441 18.3449 8.32422 16.7031C8.32422 15.5017 9.03781 14.4688 10.0635 14C9.03783 13.5311 8.32422 12.4983 8.32422 11.2969C8.32447 9.65519 9.65514 8.32425 11.2969 8.32422C12.4981 8.32422 13.5301 9.03812 13.999 10.0635C14.4678 9.03794 15.5009 8.32439 16.7021 8.32422ZM22.3779 15.0811C23.2735 15.0811 24 15.8075 24 16.7031C23.9998 17.5985 23.2734 18.3242 22.3779 18.3242C21.4826 18.3241 20.7571 17.5984 20.7568 16.7031C20.7568 15.8076 21.4824 15.0812 22.3779 15.0811ZM5.62109 15.6221C6.21816 15.6221 6.70215 16.1061 6.70215 16.7031C6.7019 17.3 6.218 17.7842 5.62109 17.7842C5.02421 17.7842 4.54029 17.3 4.54004 16.7031C4.54004 16.1061 5.02405 15.6221 5.62109 15.6221ZM13.999 12.5293C13.702 13.1797 13.1797 13.703 12.5293 14C13.1794 14.2969 13.7019 14.8197 13.999 15.4697C14.2959 14.8199 14.819 14.2971 15.4688 14C14.8188 13.7028 14.2958 13.1795 13.999 12.5293ZM5.62207 9.67578C6.51734 9.67603 7.24298 10.4016 7.24316 11.2969C7.24316 12.1923 6.51746 12.9187 5.62207 12.9189C4.72648 12.9189 4 12.1925 4 11.2969C4.00018 10.4014 4.72659 9.67578 5.62207 9.67578ZM22.3779 10.2158C22.9749 10.2158 23.4588 10.7 23.459 11.2969C23.459 11.8939 22.975 12.3779 22.3779 12.3779C21.781 12.3777 21.2969 11.8938 21.2969 11.2969C21.2971 10.7001 21.7811 10.216 22.3779 10.2158ZM16.7021 4C17.5977 4 18.3242 4.72648 18.3242 5.62207C18.324 6.51746 17.5976 7.24316 16.7021 7.24316C15.8068 7.24305 15.0813 6.51738 15.0811 5.62207C15.0811 4.72655 15.8067 4.00012 16.7021 4ZM11.2969 4.54102C11.8939 4.54102 12.3779 5.02501 12.3779 5.62207C12.3777 6.21892 11.8938 6.70312 11.2969 6.70312C10.7 6.7031 10.2161 6.2189 10.2158 5.62207C10.2158 5.02502 10.6998 4.54104 11.2969 4.54102ZM5.62109 4.81055C6.06889 4.81055 6.43164 5.17427 6.43164 5.62207C6.43142 6.06968 6.06875 6.43262 5.62109 6.43262C5.17349 6.43256 4.81077 6.06964 4.81055 5.62207C4.81055 5.17431 5.17335 4.81061 5.62109 4.81055ZM22.3779 4.81055C22.8257 4.81055 23.1895 5.17427 23.1895 5.62207C23.1892 6.06968 22.8256 6.43262 22.3779 6.43262C21.9305 6.43236 21.5676 6.06952 21.5674 5.62207C21.5674 5.17443 21.9304 4.81081 22.3779 4.81055Z" fill="#0E121B"/></svg>';
          f &&
            (x = '<img src="'.concat(
              f,
              '" alt="logo" style="width:28px;height:28px;object-fit:contain;display:block;margin:auto;" onerror="this.style.display=\'none\'">'
            ));
          var w = t.getAttribute('data-dynamic'),
            C = {};
          if (w)
            try {
              C = JSON.parse(w);
            } catch (e) {
              console.error(
                'Retell Widget: Failed to parse data-dynamic JSON',
                e
              );
            }
          var S,
            L = localStorage.getItem('LS_CHAT_ID') || null,
            I = JSON.parse(localStorage.getItem('LS_CHAT_HISTORY') || '[]'),
            M = JSON.parse(localStorage.getItem('LS_CHAT_LIST') || '[]'),
            T = (function (e) {
              var t = e.robotSVG,
                n = e.hamburgerSVG,
                r = e.minimizeSVG,
                o = e.closeSVG,
                i = e.checkFillSVG,
                l = e.arrowLeftSVG,
                a = e.chatTitle,
                s = e.onFabClick,
                c = e.onMinimize,
                d = e.onClose,
                u = e.onModalYes,
                f = e.onModalNo,
                p = e.onFormSubmit,
                h = e.customColor,
                g = document.createElement('div');
              (g.style.position = 'fixed'),
                (g.style.bottom = '24px'),
                (g.style.right = '24px'),
                (g.style.zIndex = '999999'),
                document.body.appendChild(g);
              var m = g.attachShadow({ mode: 'open' }),
                b = document.createElement('style'),
                y = h,
                x = h,
                v = h;
              (b.textContent =
                '\n    .retell-fab {\n      width: 56px;\n      height: 56px;\n      border-radius: 50%;\n      background: '
                  .concat(
                    y,
                    ';\n      color: #fff;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 32px;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.2);\n      cursor: pointer;\n      transition: background 0.2s;\n      border: none;\n      padding: 0;\n      position: relative;\n      overflow: hidden;\n    }\n    .retell-fab:hover::after {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(255,255,255,0.1);\n      border-radius: 50%;\n      pointer-events: none;\n    }\n    .retell-fab svg { display: block; }\n    .retell-chat-window {\n      width: 360px;\n      height: 548px;\n      background: #fff;\n      border-radius: 8px;\n      border: 1px solid #cad0d8;\n      box-shadow: 0 4px 24px rgba(0,0,0,0.10);\n      position: absolute;\n      bottom: 70px;\n      right: 0;\n      display: flex;\n      flex-direction: column;\n      overflow: hidden;\n      font-family: \'Inter\', Arial, sans-serif;\n      animation: fadeIn 0.2s;\n    }\n    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none; } }\n    .retell-header { display: flex; align-items: center; background: '
                  )
                  .concat(
                    x,
                    '; color: #fff; padding: 0 0 0 8px; font-weight: bold; position: relative; height: 48px; }\n    .retell-hamburger { background: none; border: none; color: #fff; font-size: 24px; margin-right: 12px; cursor: pointer; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; }\n    .retell-header-title { flex: 1; text-align: left; font-size: 17px; font-weight: 400; }\n    .retell-minimize { background: none; border: none; color: #fff; font-size: 22px; cursor: pointer; width: 40px; height: 40px; margin-right: 2px; display: flex; align-items: center; justify-content: center; }\n    .retell-close { position: static; background: none; border: none; color: #fff; font-size: 22px; cursor: pointer; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; }\n    .retell-sidebar {\n      position: absolute;\n      left: 0;\n      top: 48px; /* below header */\n      bottom: 0;\n      width: 260px;\n      background: #fff;\n      box-shadow: 2px 0 8px rgba(0,0,0,0.08);\n      z-index: 10;\n      display: none;\n      flex-direction: column;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 8px;\n      animation: sidebarIn 0.2s;\n    }\n    @keyframes sidebarIn { from { transform: translateX(-100%); opacity: 0; } to { transform: none; opacity: 1; } }\n    .retell-chat-list {\n      flex: 1;\n      overflow-y: auto;\n      padding: 0;\n      background: #fff;\n    }\n    .retell-chat-list-item {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      padding: 16px 18px 12px 18px;\n      border-bottom: 1px solid #ececec;\n      cursor: pointer;\n      background: #fff;\n      transition: background 0.2s;\n    }\n    .retell-chat-list-item.selected, .retell-chat-list-item:hover {\n      background: #f7f8fa;\n    }\n    .retell-chat-list-item-content {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n    }\n    .retell-chat-list-item-title {\n      font-weight: 500;\n      font-size: 15px;\n      color: #222;\n      margin-bottom: 2px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    .retell-chat-list-item-date {\n      font-size: 13px;\n      color: #B0B0B0;\n      margin-top: 1px;\n    }\n    .retell-chat-list-item-arrow {\n      color: #B0B0B0;\n      font-size: 18px;\n      margin-left: 12px;\n    }\n    .retell-messages { flex: 1; padding: 18px 14px 12px 14px; overflow-y: auto; background:rgb(255, 255, 255); display: flex; flex-direction: column; }\n    .retell-input-row {\n      display: flex;\n      align-items: center;\n      border-top: 1px solid #eee;\n      background: #fff;\n      padding: 16px 16px 8px 16px;\n      box-sizing: border-box;\n      width: 100%;\n      gap: 8px;\n    }\n    .retell-input {\n      flex: 1;\n      border: 1px solid #CACFD8;\n      border-radius: 8px;\n      padding: 12px 14px;\n      font-size: 16px;\n      background: #fff;\n      margin: 0;\n      outline: none;\n      box-sizing: border-box;\n      transition: border 0.2s;\n    }\n      \n    .retell-send-btn {\n      background: '
                  )
                  .concat(
                    v,
                    ';\n      color: #fff;\n      border: none;\n      border-radius: 8px;\n      padding: 12px 18px;\n      cursor: pointer;\n      font-size: 18px;\n      margin-left: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: background 0.2s;\n      height: auto;\n      min-width: 0;\n      position: relative;\n      overflow: hidden;\n    }\n    .retell-send-btn:hover::after,\n    .retell-send-btn:active::after,\n    .retell-send-btn:focus::after {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(255,255,255,0.1);\n      border-radius: 8px;\n      pointer-events: none;\n    }\n    .retell-msg { padding: 9px 12px; border-radius: 16px; margin-bottom: 8px; }\n    .retell-msg.user { background: #D5E2FF; color: #0E121B; align-self: flex-end; border-radius: 16px 16px 4px 16px; margin-left: 40px; margin-right: 0; }\n    .retell-msg.agent-row { display: flex; align-items: flex-start; margin-bottom: 8px; padding-left: 0px;}\n    .retell-msg.agent { background: #F2F5F8; color: #0E121B; align-self: flex-start; border-radius: 16px 16px 16px 4px; display: block; margin-left: 0; margin-right: 40px; min-width: 0; }\n    .retell-agent-logo { width: 28px; height: 28px; margin-right: 8px; margin-top: 2px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }\n    .retell-footer {\n      font-size: 13px;\n      color: #b0b0b0;\n      text-align: left;\n      padding: 6px 18px 8px 18px;\n      background: #fff;\n      border-top: 1px solid #f0f0f0;\n      letter-spacing: 0.01em;\n      position: static;\n    }\n    .retell-footer strong { color: #0d1123; }\n    .retell-modal { position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.18); display: flex; align-items: center; justify-content: center; z-index: 100; }\n    .retell-modal-content { background: #fff; border-radius: 12px; padding: 32px 28px 24px 28px; box-shadow: 0 4px 24px rgba(0,0,0,0.18); text-align: center; min-width: 260px; }\n    .retell-modal-content p { font-size: 19px; margin-bottom: 24px; color: #0d1123; }\n    .retell-modal-btn-row { display: flex; flex-direction: column; gap: 12px; }\n    .retell-modal-btn { font-size: 16px; padding: 10px 0; border-radius: 8px; border: 1px solid #d1d5db; background: #fff; color: #0d1123; cursor: pointer; transition: background 0.2s, border 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; }\n    .retell-modal-btn.selected, .retell-modal-btn:hover { background: #e0e7ef; border: 1.5px solid #0d1123; }\n    .retell-modal-btn svg { font-size: 18px; }\n    @media (max-width: 600px) {\n      .retell-chat-window {\n      width: 90vw !important;\n      height: 70vh !important;\n      min-width: 0;\n      min-height: 0;\n      max-width: 98vw;\n      max-height: 90vh;\n      left: 0 !important;\n      right: 0 !important;\n      bottom: 90px !important;\n      top: auto !important;\n      margin: 0 auto !important;\n      border-radius: 12px !important;\n      position: fixed !important;\n      box-shadow: 0 2px 16px rgba(0,0,0,0.18);\n      z-index: 999999;\n    }\n    .retell-fab {\n      right: 16px !important;\n      bottom: 16px !important;\n      left: auto !important;\n    }\n    }\n    .retell-powered-by {\n      margin-top: auto;\n  font-size: 9px;\n  color: #b0b0b0;\n  text-align: left;\n  margin-left: 16px;\n  margin-bottom: 8px;\n  letter-spacing: 0.01em;\n  font-family: \'Inter\', Arial, sans-serif;\n    }\n    .retell-powered-by strong { color: #0d1123; }\n  '
                  )),
                m.appendChild(b),
                (m.innerHTML +=
                  '\n    <div class="retell-fab" id="retell-fab" title="Chat">'.concat(
                    t,
                    '</div>\n    <div class="retell-chat-window" id="retell-chat" style="display:none;">\n      <div class="retell-header">\n        <button class="retell-hamburger" id="retell-hamburger"></button>\n        <span class="retell-header-title" id="retell-header-title"></span>\n        <button class="retell-minimize" id="retell-minimize"></button>\n        <button class="retell-close" id="retell-close"></button>\n      </div>\n      <div class="retell-sidebar" id="retell-sidebar">\n        <div class="retell-chat-list" id="retell-chat-list"></div>\n      </div>\n      <div class="retell-messages" id="retell-messages"></div>\n      <form class="retell-input-row" id="retell-form">\n        <input class="retell-input" id="retell-input" autocomplete="off" placeholder="Ask a detailed question..." />\n        <button class="retell-send-btn" type="submit">➤</button>\n      </form>\n      <div class="retell-powered-by">Powered by Syntalia</div>\n      <div class="retell-modal" id="retell-modal" style="display:none;">\n        <div class="retell-modal-content">\n          <p>Do you want to end this chat?</p>\n          <div class="retell-modal-btn-row">\n            <button class="retell-modal-btn" id="retell-modal-yes"></button>\n            <button class="retell-modal-btn" id="retell-modal-no"></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  '
                  ));
              var w = m.getElementById('retell-fab'),
                C = m.getElementById('retell-chat'),
                k = m.getElementById('retell-close'),
                S = m.getElementById('retell-minimize'),
                L = m.getElementById('retell-messages'),
                I = m.getElementById('retell-form'),
                M = m.getElementById('retell-input'),
                T = m.getElementById('retell-hamburger'),
                B = m.getElementById('retell-sidebar'),
                E = m.getElementById('retell-chat-list'),
                j = m.getElementById('retell-modal'),
                H = m.getElementById('retell-modal-yes'),
                O = m.getElementById('retell-modal-no'),
                z = m.getElementById('retell-header-title');
              return (
                (T.innerHTML = n),
                (S.innerHTML = r),
                (k.innerHTML = o),
                (H.innerHTML = i + " Yes, I'm done"),
                (O.innerHTML = l + ' No, go back'),
                (z.textContent = a),
                (w.onclick = s),
                (S.onclick = c),
                (k.onclick = d),
                (T.onclick = function () {
                  'flex' === B.style.display
                    ? (B.style.display = 'none')
                    : (B.style.display = 'flex');
                }),
                (I.onsubmit = p),
                (H.onclick = u),
                (O.onclick = f),
                {
                  widgetContainer: g,
                  shadow: m,
                  fab: w,
                  chat: C,
                  closeBtn: k,
                  minimizeBtn: S,
                  messagesDiv: L,
                  form: I,
                  input: M,
                  hamburger: T,
                  sidebar: B,
                  chatList: E,
                  modal: j,
                  modalYes: H,
                  modalNo: O,
                  headerTitle: z,
                  focusInput: function () {
                    M && M.focus();
                  }
                }
              );
            })({
              robotSVG:
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.125 4.5C13.125 4.83319 12.9802 5.13254 12.75 5.33854V6.75H16.5C17.7427 6.75 18.75 7.75736 18.75 9V16.5C18.75 17.7427 17.7427 18.75 16.5 18.75H7.5C6.25736 18.75 5.25 17.7427 5.25 16.5V9C5.25 7.75736 6.25736 6.75 7.5 6.75H11.25V5.33854C11.0198 5.13254 10.875 4.83319 10.875 4.5C10.875 3.87868 11.3787 3.375 12 3.375C12.6213 3.375 13.125 3.87868 13.125 4.5ZM7.5 8.25C7.08579 8.25 6.75 8.58579 6.75 9V16.5C6.75 16.9142 7.08579 17.25 7.5 17.25H16.5C16.9142 17.25 17.25 16.9142 17.25 16.5V9C17.25 8.58579 16.9142 8.25 16.5 8.25H12.75H11.25H7.5ZM4.5 10.5H3V15H4.5V10.5ZM19.5 10.5H21V15H19.5V10.5ZM9.75 13.875C10.3713 13.875 10.875 13.3713 10.875 12.75C10.875 12.1287 10.3713 11.625 9.75 11.625C9.12868 11.625 8.625 12.1287 8.625 12.75C8.625 13.3713 9.12868 13.875 9.75 13.875ZM14.25 13.875C14.8713 13.875 15.375 13.3713 15.375 12.75C15.375 12.1287 14.8713 11.625 14.25 11.625C13.6287 11.625 13.125 12.1287 13.125 12.75C13.125 13.3713 13.6287 13.875 14.25 13.875Z" fill="white"/></svg>',
              hamburgerSVG:
                '<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.25 0H13.75V1.5H0.25V0ZM0.25 5.25H13.75V6.75H0.25V5.25ZM0.25 10.5H13.75V12H0.25V10.5Z" fill="white"/></svg>',
              minimizeSVG:
                '<svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.25H11.25V1.75H0.75V0.25Z" fill="white"/></svg>',
              closeSVG:
                '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00005 3.93949L8.71255 0.22699L9.77305 1.28749L6.06055 4.99999L9.77305 8.71249L8.71255 9.77299L5.00005 6.06049L1.28755 9.77299L0.227051 8.71249L3.93955 4.99999L0.227051 1.28749L1.28755 0.22699L5.00005 3.93949Z" fill="white"/></svg>',
              checkFillSVG:
                '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00005 12.379L15.8941 5.48425L16.9553 6.54475L9.00005 14.5L4.22705 9.727L5.28755 8.6665L9.00005 12.379Z" fill="#525866"/></svg>',
              arrowLeftSVG:
                '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.2045 9.99923L12.917 13.7117L11.8565 14.7722L7.0835 9.99923L11.8565 5.22623L12.917 6.28673L9.2045 9.99923Z" fill="#525866"/></svg>',
              arrowRightSVG: b,
              chatTitle: o,
              onFabClick: function () {
                return N.apply(this, arguments);
              },
              onMinimize: function () {
                B.style.display = 'none';
              },
              onClose: function () {
                e(_, !0);
              },
              onHamburger: function () {
                Z(), (O.style.display = 'flex');
              },
              onSidebarClose: function () {
                O.style.display = 'none';
              },
              onSidebarItemClick: G,
              onModalYes: function () {
                return P.apply(this, arguments);
              },
              onModalNo: function () {
                e(_, !1);
              },
              onFormSubmit: function (e) {
                return J.apply(this, arguments);
              },
              customColor: d
            }),
            B = T.chat,
            E = T.messagesDiv,
            j = T.form,
            H = T.input,
            O = T.sidebar,
            z = T.chatList,
            _ = T.modal,
            A = T.focusInput;
          ((S = k(
            v().m(function e() {
              return v().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      (L = null), (I = []), V(), Z();
                    case 1:
                      return e.a(2);
                  }
              }, e);
            })
          )),
          function () {
            return S.apply(this, arguments);
          })();
        } else
          console.error(
            'Retell Widget: data-public-key attribute is required.'
          );
      } else
        console.error(
          "Retell Widget: Script tag with id 'syntalia-widget' not found."
        );
      function V() {
        !(function (e, t, n, r) {
          if (
            ((e.innerHTML = ''),
            t.forEach(function (t) {
              if ('agent' === t.role) {
                var r = document.createElement('div');
                (r.className = 'retell-msg agent-row'),
                  (r.innerHTML = "<span class='retell-agent-logo'>"
                    .concat(n, "</span><div class='retell-msg agent'>")
                    .concat(t.content, '</div>')),
                  e.appendChild(r);
              } else {
                var o = document.createElement('div');
                (o.className = 'retell-msg user'),
                  (o.textContent = t.content),
                  e.appendChild(o);
              }
            }),
            r)
          ) {
            var o = document.createElement('div');
            (o.style.textAlign = 'center'),
              (o.style.color = '#b0b0b0'),
              (o.style.margin = '18px 0 0 0'),
              (o.style.fontSize = '16px'),
              (o.textContent = 'Chat ended'),
              e.appendChild(o);
          }
          e.scrollTop = e.scrollHeight;
        })(
          E,
          I,
          x,
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
        );
      }
      function Z() {
        !(function (e, t, n, r, o, i) {
          (e.innerHTML = ''),
            t.length
              ? t.forEach(function (t) {
                  var l = document.createElement('div');
                  (l.className =
                    'retell-chat-list-item' + (t.id === n ? ' selected' : '')),
                    (l.style.display = 'flex'),
                    (l.style.flexDirection = 'row'),
                    (l.style.alignItems = 'center'),
                    (l.style.justifyContent = 'space-between');
                  var a = document.createElement('div');
                  (a.className = 'retell-chat-list-item-content'),
                    (a.style.display = 'flex'),
                    (a.style.flexDirection = 'column'),
                    (a.style.flex = '1'),
                    (a.style.justifyContent = 'center'),
                    (a.style.maxWidth = 'calc(100% - 32px)');
                  var s = t.title || 'New chat...';
                  s.length > 40 && (s = s.slice(0, 40) + '...');
                  var c = document.createElement('div');
                  (c.className = 'retell-chat-list-item-title'),
                    (c.textContent = s),
                    (c.style.fontWeight = '500'),
                    (c.style.fontSize = '15px'),
                    (c.style.color = '#222'),
                    (c.style.whiteSpace = 'nowrap'),
                    (c.style.overflow = 'hidden'),
                    (c.style.textOverflow = 'ellipsis');
                  var d = document.createElement('div');
                  (d.className = 'retell-chat-list-item-date'),
                    (d.textContent = r(t.date)),
                    (d.style.fontSize = '13px'),
                    (d.style.color = '#B0B0B0'),
                    (d.style.marginTop = '1px'),
                    a.appendChild(c),
                    a.appendChild(d);
                  var u = document.createElement('div');
                  (u.className = 'retell-chat-list-item-arrow'),
                    (u.innerHTML = i),
                    (u.style.color = '#B0B0B0'),
                    (u.style.fontSize = '18px'),
                    (u.style.width = '24px'),
                    (u.style.display = 'flex'),
                    (u.style.alignItems = 'center'),
                    (u.style.justifyContent = 'center'),
                    (u.style.height = '100%'),
                    l.appendChild(a),
                    l.appendChild(u),
                    (l.onclick = function () {
                      return o(t.id);
                    }),
                    e.appendChild(l);
                })
              : (e.innerHTML =
                  '<div style="color:#888;text-align:center;margin-top:24px;">No previous chats</div>');
        })(z, M, L, m, G, b);
      }
      function N() {
        return (N = k(
          v().m(function e() {
            var t, r, o;
            return v().w(
              function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      if ('flex' !== B.style.display) {
                        e.n = 1;
                        break;
                      }
                      (B.style.display = 'none'), (e.n = 8);
                      break;
                    case 1:
                      if (((t = M[0]), (r = !1), !t)) {
                        e.n = 5;
                        break;
                      }
                      if (!0 !== t.ended) {
                        e.n = 2;
                        break;
                      }
                      (r = !1), (e.n = 5);
                      break;
                    case 2:
                      return (e.p = 2), (e.n = 3), a(t.id, n);
                    case 3:
                      'ended' !== e.v.chat_status &&
                        ((L = t.id),
                        (I = t.history || []),
                        g(L),
                        p(I),
                        (r = !0)),
                        (e.n = 5);
                      break;
                    case 4:
                      (e.p = 4), e.v, (r = !1);
                    case 5:
                      if (r) {
                        e.n = 7;
                        break;
                      }
                      return (L = null), (I = []), (e.n = 6), D();
                    case 6:
                      if (!(o = e.v) || 'error' !== o.status) {
                        e.n = 7;
                        break;
                      }
                      return (
                        'Public key is not allowed for this domain' ===
                        o.message
                          ? console.error(
                              'Retell Widget: Public key is not allowed for this domain. Please check your public key and ensure your domain is whitelisted in the Retell dashboard.'
                            )
                          : console.error(
                              'Retell Widget: Failed to create chat:',
                              o.message
                            ),
                        (H.disabled = !0),
                        (j.querySelector('.retell-send-btn').disabled = !0),
                        e.a(2)
                      );
                    case 7:
                      V(),
                        Z(),
                        (B.style.display = 'flex'),
                        (E.scrollTop = E.scrollHeight),
                        (H.disabled = !1),
                        (j.querySelector('.retell-send-btn').disabled = !1),
                        A();
                    case 8:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[2, 4]]
            );
          })
        )).apply(this, arguments);
      }
      function G(e) {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = k(
          v().m(function e(t) {
            var r, o;
            return v().w(
              function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      return (L = t), (r = !1), (e.p = 1), (e.n = 2), a(L, n);
                    case 2:
                      'ended' === e.v.chat_status && (r = !0), (e.n = 4);
                      break;
                    case 3:
                      (e.p = 3), e.v, (r = !1);
                    case 4:
                      (o = M.find(function (e) {
                        return e.id === L;
                      })),
                        (I = (o && o.history) || []),
                        g(L),
                        p(I),
                        V(r),
                        Z(),
                        (O.style.display = 'none'),
                        r
                          ? ((H.disabled = !0),
                            (j.querySelector('.retell-send-btn').disabled = !0))
                          : ((H.disabled = !1),
                            (j.querySelector('.retell-send-btn').disabled = !1),
                            A());
                    case 5:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 3]]
            );
          })
        )).apply(this, arguments);
      }
      function P() {
        return (P = k(
          v().m(function t() {
            var r;
            return v().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    if (!L) {
                      t.n = 2;
                      break;
                    }
                    return (t.n = 1), u(L, n);
                  case 1:
                    -1 !==
                      (r = M.findIndex(function (e) {
                        return e.id === L;
                      })) && ((M[r].ended = !0), h(M));
                  case 2:
                    (L = null),
                      (I = []),
                      g(''),
                      p(I),
                      (B.style.display = 'none'),
                      e(_, !1),
                      Z(),
                      V();
                  case 3:
                    return t.a(2);
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function D() {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = k(
          v().m(function e() {
            var t, o, l, a;
            return v().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    if (!L) {
                      e.n = 1;
                      break;
                    }
                    return e.a(2, L);
                  case 1:
                    return (
                      h(
                        (M = M.filter(function (e) {
                          return e.history && e.history.length > 0;
                        }))
                      ),
                      (e.n = 2),
                      i(r, n, s, C)
                    );
                  case 2:
                    return (
                      (t = e.v),
                      g((L = t.chat_id)),
                      (o = new Date()),
                      (l = o.toISOString()),
                      (a = { id: L, title: '', date: l, history: [] }),
                      M.unshift(a),
                      h(M),
                      e.a(2, t)
                    );
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function J() {
        return (J = k(
          v().m(function e(t) {
            var r, o, i, l, a, s, d, u, f, g, m, b, x;
            return v().w(
              function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      if ((t.preventDefault(), (i = H.value.trim()))) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (
                        (H.value = ''),
                        I.push({ role: 'user', content: i }),
                        V(),
                        p(I),
                        (e.n = 2),
                        D()
                      );
                    case 2:
                      return (e.p = 2), (e.n = 3), c(L, i, n);
                    case 3:
                      (l = e.v), (e.n = 5);
                      break;
                    case 4:
                      (e.p = 4),
                        (x = e.v),
                        (l = {
                          status: 'error',
                          message:
                            (null == x ? void 0 : x.message) || 'Unknown error'
                        });
                    case 5:
                      if (
                        !l ||
                        'error' !== l.status ||
                        'Chat already ended' !== l.message
                      ) {
                        e.n = 6;
                        break;
                      }
                      return (
                        I.pop(),
                        p(I),
                        V(!0),
                        -1 !==
                          (a = M.findIndex(function (e) {
                            return e.id === L;
                          })) && ((M[a].ended = !0), h(M)),
                        (H.disabled = !0),
                        (j.querySelector('.retell-send-btn').disabled = !0),
                        e.a(2)
                      );
                    case 6:
                      if (
                        ((s =
                          null === (r = l.messages) || void 0 === r
                            ? void 0
                            : r.find(function (e) {
                                return 'agent' === e.role;
                              })) &&
                          (I.push({ role: 'agent', content: s.content }),
                          V(),
                          p(I)),
                        !(null === (o = l.messages) || void 0 === o
                          ? void 0
                          : o.find(function (e) {
                              return (
                                'tool_call_invocation' === e.role &&
                                'end_call' === e.name
                              );
                            })))
                      ) {
                        e.n = 7;
                        break;
                      }
                      return (
                        -1 !==
                          (d = M.findIndex(function (e) {
                            return e.id === L;
                          })) && ((M[d].ended = !0), h(M)),
                        V(!0),
                        (H.disabled = !0),
                        (j.querySelector('.retell-send-btn').disabled = !0),
                        e.a(2)
                      );
                    case 7:
                      -1 !==
                        (u = M.findIndex(function (e) {
                          return e.id === L;
                        })) &&
                        I.length > 0 &&
                        ((f = I[I.length - 1].content).length > 40 &&
                          (f = f.slice(0, 40) + '...'),
                        (M[u].title = f),
                        (M[u].history = I),
                        (M[u].date = new Date().toISOString()),
                        (g = M.splice(u, 1)),
                        (m = y(g, 1)),
                        (b = m[0]),
                        M.unshift(b),
                        h(M));
                    case 8:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[2, 4]]
            );
          })
        )).apply(this, arguments);
      }
    }
    'loading' === document.readyState
      ? document.addEventListener('DOMContentLoaded', t)
      : t();
  })();
})();
