// Custom

// Custom Scripts

/*!
 * ScrollSmoother 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GSAP at https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */
document.addEventListener("DOMContentLoaded", function () {
  const qrModal = document.querySelectorAll(".qr-modal");
  const qrWidgetModal = document.querySelector(".qr-widget__modal");
  const qrWidgetClose = document.querySelector(".qr-widget__modal--close");

  qrModal.forEach((item) => {
    item.addEventListener("click", function () {
      qrWidgetModal.classList.add("open");
    });
  });
  // Добавляем обработчик события для открытия модального окна

  // Добавляем обработчик события для закрытия модального окна при клике на блок с классом "qr-widget__modal--close"
  qrWidgetClose.addEventListener("click", function () {
    qrWidgetModal.classList.remove("open");
  });

  // Добавляем обработчик события для закрытия модального окна при клике вне блока с классом "qr-widget__modal"
  document.addEventListener("click", function (event) {
    if (
      !qrWidgetModal.contains(event.target) &&
      !qrModal.contains(event.target)
    ) {
      qrWidgetModal.classList.remove("open");
    }
  });
});
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function s() {
    return "undefined" != typeof window;
  }
  function t() {
    return B || (s() && (B = window.gsap) && B.registerPlugin && B);
  }
  function w() {
    return String.fromCharCode.apply(null, arguments);
  }
  function D(e) {
    return Z.maxScroll(e || L);
  }
  var B,
    F,
    L,
    I,
    j,
    q,
    W,
    Y,
    Z,
    K,
    $,
    G,
    J,
    Q,
    X,
    i = "ScrollSmoother",
    a = w(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    l = w(103, 115, 97, 112, 46, 99, 111, 109),
    c = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
    r =
      ((function (e) {
        var t = "undefined" != typeof window,
          r =
            0 ===
              (t ? window.location.href : "").indexOf(
                w(102, 105, 108, 101, 58, 47, 47)
              ) ||
            -1 !== e.indexOf(w(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
            c.test(e) ||
            (t ? window.location.hostname : "").split(".").pop() ===
              w(108, 111, 99, 97, 108),
          n = [
            a,
            l,
            w(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
            w(
              99,
              111,
              100,
              101,
              112,
              101,
              110,
              46,
              112,
              108,
              117,
              109,
              98,
              105,
              110,
              103
            ),
            w(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
            w(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
            w(
              99,
              111,
              100,
              101,
              112,
              101,
              110,
              46,
              119,
              101,
              98,
              115,
              105,
              116,
              101
            ),
            w(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
            w(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
            w(99, 100, 112, 110, 46, 105, 111),
            w(112, 101, 110, 115, 46, 105, 111),
            w(103, 97, 110, 110, 111, 110, 46, 116, 118),
            w(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
            w(
              116,
              104,
              101,
              109,
              101,
              102,
              111,
              114,
              101,
              115,
              116,
              46,
              110,
              101,
              116
            ),
            w(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
            w(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
            w(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
            w(112, 108, 110, 107, 114, 46, 99, 111),
            w(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
            w(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
            w(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
            w(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
            w(99, 115, 98, 46, 97, 112, 112),
            w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
            w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
            w(99, 111, 100, 105, 101, 114, 46, 105, 111),
            w(
              109,
              111,
              116,
              105,
              111,
              110,
              116,
              114,
              105,
              99,
              107,
              115,
              46,
              99,
              111,
              109
            ),
            w(
              115,
              116,
              97,
              99,
              107,
              111,
              118,
              101,
              114,
              102,
              108,
              111,
              119,
              46,
              99,
              111,
              109
            ),
            w(
              115,
              116,
              97,
              99,
              107,
              101,
              120,
              99,
              104,
              97,
              110,
              103,
              101,
              46,
              99,
              111,
              109
            ),
            w(
              115,
              116,
              117,
              100,
              105,
              111,
              102,
              114,
              101,
              105,
              103,
              104,
              116,
              46,
              99,
              111,
              109
            ),
            w(
              119,
              101,
              98,
              99,
              111,
              110,
              116,
              97,
              105,
              110,
              101,
              114,
              46,
              105,
              111
            ),
            w(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
          ],
          o = n.length;
        for (
          setTimeout(function checkWarn() {
            if (t)
              if (
                "loading" === document.readyState ||
                "interactive" === document.readyState
              )
                document.addEventListener("readystatechange", checkWarn);
              else {
                document.removeEventListener("readystatechange", checkWarn);
                var e = "object" == typeof B ? B : t && window.gsap;
                t &&
                  window.console &&
                  !window._gsapWarned &&
                  "object" == typeof e &&
                  !1 !== e.config().trialWarn &&
                  (console.log(
                    w(37, 99, 87, 97, 114, 110, 105, 110, 103),
                    w(
                      102,
                      111,
                      110,
                      116,
                      45,
                      115,
                      105,
                      122,
                      101,
                      58,
                      51,
                      48,
                      112,
                      120,
                      59,
                      99,
                      111,
                      108,
                      111,
                      114,
                      58,
                      114,
                      101,
                      100,
                      59
                    )
                  ),
                  console.log(
                    w(
                      65,
                      32,
                      116,
                      114,
                      105,
                      97,
                      108,
                      32,
                      118,
                      101,
                      114,
                      115,
                      105,
                      111,
                      110,
                      32,
                      111,
                      102,
                      32
                    ) +
                      i +
                      w(
                        32,
                        105,
                        115,
                        32,
                        108,
                        111,
                        97,
                        100,
                        101,
                        100,
                        32,
                        116,
                        104,
                        97,
                        116,
                        32,
                        111,
                        110,
                        108,
                        121,
                        32,
                        119,
                        111,
                        114,
                        107,
                        115,
                        32,
                        108,
                        111,
                        99,
                        97,
                        108,
                        108,
                        121,
                        32,
                        97,
                        110,
                        100,
                        32,
                        111,
                        110,
                        32,
                        100,
                        111,
                        109,
                        97,
                        105,
                        110,
                        115,
                        32,
                        108,
                        105,
                        107,
                        101,
                        32,
                        99,
                        111,
                        100,
                        101,
                        112,
                        101,
                        110,
                        46,
                        105,
                        111,
                        32,
                        97,
                        110,
                        100,
                        32,
                        99,
                        111,
                        100,
                        101,
                        115,
                        97,
                        110,
                        100,
                        98,
                        111,
                        120,
                        46,
                        105,
                        111,
                        46,
                        32,
                        42,
                        42,
                        42,
                        32,
                        68,
                        79,
                        32,
                        78,
                        79,
                        84,
                        32,
                        68,
                        69,
                        80,
                        76,
                        79,
                        89,
                        32,
                        84,
                        72,
                        73,
                        83,
                        32,
                        70,
                        73,
                        76,
                        69,
                        32,
                        42,
                        42,
                        42,
                        32,
                        76,
                        111,
                        97,
                        100,
                        105,
                        110,
                        103,
                        32,
                        105,
                        116,
                        32,
                        111,
                        110,
                        32,
                        97,
                        110,
                        32,
                        117,
                        110,
                        97,
                        117,
                        116,
                        104,
                        111,
                        114,
                        105,
                        122,
                        101,
                        100,
                        32,
                        115,
                        105,
                        116,
                        101,
                        32,
                        118,
                        105,
                        111,
                        108,
                        97,
                        116,
                        101,
                        115,
                        32,
                        116,
                        104,
                        101,
                        32,
                        108,
                        105,
                        99,
                        101,
                        110,
                        115,
                        101,
                        32,
                        97,
                        110,
                        100,
                        32,
                        119,
                        105,
                        108,
                        108,
                        32,
                        99,
                        97,
                        117,
                        115,
                        101,
                        32,
                        97,
                        32,
                        114,
                        101,
                        100,
                        105,
                        114,
                        101,
                        99,
                        116,
                        46,
                        32,
                        80,
                        108,
                        101,
                        97,
                        115,
                        101,
                        32,
                        106,
                        111,
                        105,
                        110,
                        32,
                        67,
                        108,
                        117,
                        98,
                        32,
                        71,
                        114,
                        101,
                        101,
                        110,
                        83,
                        111,
                        99,
                        107,
                        32,
                        116,
                        111,
                        32,
                        103,
                        101,
                        116,
                        32,
                        102,
                        117,
                        108,
                        108,
                        32,
                        97,
                        99,
                        99,
                        101,
                        115,
                        115,
                        32,
                        116,
                        111,
                        32,
                        116,
                        104,
                        101,
                        32,
                        98,
                        111,
                        110,
                        117,
                        115,
                        32,
                        112,
                        108,
                        117,
                        103,
                        105,
                        110,
                        115,
                        32,
                        116,
                        104,
                        97,
                        116,
                        32,
                        98,
                        111,
                        111,
                        115,
                        116,
                        32,
                        121,
                        111,
                        117,
                        114,
                        32,
                        97,
                        110,
                        105,
                        109,
                        97,
                        116,
                        105,
                        111,
                        110,
                        32,
                        115,
                        117,
                        112,
                        101,
                        114,
                        112,
                        111,
                        119,
                        101,
                        114,
                        115,
                        46,
                        32,
                        68,
                        105,
                        115,
                        97,
                        98,
                        108,
                        101,
                        32,
                        116,
                        104,
                        105,
                        115,
                        32,
                        119,
                        97,
                        114,
                        110,
                        105,
                        110,
                        103,
                        32,
                        119,
                        105,
                        116,
                        104,
                        32,
                        103,
                        115,
                        97,
                        112,
                        46,
                        99,
                        111,
                        110,
                        102,
                        105,
                        103,
                        40,
                        123,
                        116,
                        114,
                        105,
                        97,
                        108,
                        87,
                        97,
                        114,
                        110,
                        58,
                        32,
                        102,
                        97,
                        108,
                        115,
                        101,
                        125,
                        41,
                        59
                      )
                  ),
                  console.log(
                    w(
                      37,
                      99,
                      71,
                      101,
                      116,
                      32,
                      117,
                      110,
                      114,
                      101,
                      115,
                      116,
                      114,
                      105,
                      99,
                      116,
                      101,
                      100,
                      32,
                      102,
                      105,
                      108,
                      101,
                      115,
                      32,
                      97,
                      116,
                      32,
                      104,
                      116,
                      116,
                      112,
                      115,
                      58,
                      47,
                      47,
                      103,
                      114,
                      101,
                      101,
                      110,
                      115,
                      111,
                      99,
                      107,
                      46,
                      99,
                      111,
                      109,
                      47,
                      99,
                      108,
                      117,
                      98
                    ),
                    w(
                      102,
                      111,
                      110,
                      116,
                      45,
                      115,
                      105,
                      122,
                      101,
                      58,
                      49,
                      54,
                      112,
                      120,
                      59,
                      99,
                      111,
                      108,
                      111,
                      114,
                      58,
                      35,
                      52,
                      101,
                      57,
                      56,
                      49,
                      53
                    )
                  ),
                  (window._gsapWarned = 1));
              }
          }, 50);
          -1 < --o;

        )
          if (-1 !== e.indexOf(n[o])) return;
        r ||
          setTimeout(function () {
            t &&
              (window.location.href =
                w(104, 116, 116, 112, 115, 58, 47, 47) +
                a +
                w(
                  47,
                  114,
                  101,
                  113,
                  117,
                  105,
                  114,
                  101,
                  115,
                  45,
                  109,
                  101,
                  109,
                  98,
                  101,
                  114,
                  115,
                  104,
                  105,
                  112,
                  47
                ) +
                "?plugin=" +
                i +
                "&source=trial");
          }, 4e3);
      })("undefined" != typeof window ? window.location.host : ""),
      (ScrollSmoother.register = function register(e) {
        return (
          F ||
            ((B = e || t()),
            s() &&
              window.document &&
              ((L = window),
              (I = document),
              (j = I.documentElement),
              (q = I.body)),
            B &&
              ((W = B.utils.toArray),
              (Y = B.utils.clamp),
              ($ = B.parseEase("expo")),
              (Q = B.core.context || function () {}),
              (Z = B.core.globals().ScrollTrigger),
              B.core.globals("ScrollSmoother", ScrollSmoother),
              q &&
                Z &&
                ((X = B.delayedCall(0.2, function () {
                  return Z.isRefreshing || (K && K.refresh());
                }).pause()),
                (G = Z.core._getVelocityProp),
                (J = Z.core._inputObserver),
                (ScrollSmoother.refresh = Z.refresh),
                (F = 1)))),
          F
        );
      }),
      (function _createClass(e, t, r) {
        return (
          t && _defineProperties(e.prototype, t),
          r && _defineProperties(e, r),
          e
        );
      })(ScrollSmoother, [
        {
          key: "progress",
          get: function get() {
            return this.scrollTrigger
              ? this.scrollTrigger.animation._time / 100
              : 0;
          },
        },
      ]),
      ScrollSmoother);
  function ScrollSmoother(t) {
    var o = this;
    F ||
      ScrollSmoother.register(B) ||
      console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
      (t = this.vars = t || {}),
      K && K.kill(),
      Q((K = this));
    function Pa() {
      return U.update(-H);
    }
    function Ra() {
      return (n.style.overflow = "visible");
    }
    function Ta(e) {
      e.update();
      var t = e.getTween();
      t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
        (g = !1),
        e.animation.progress(e.progress, !0);
    }
    function Ua(e, t) {
      ((e !== H && !f) || t) &&
        (x && (e = Math.round(e)),
        k &&
          ((n.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"),
          (n._gsap.y = e + "px")),
        (M = e - H),
        (H = e),
        Z.isUpdating || ScrollSmoother.isRefreshing || Z.update());
    }
    function Va(e) {
      return arguments.length
        ? (e < 0 && (e = 0),
          (z.y = -e),
          (g = !0),
          f ? (H = -e) : Ua(-e),
          Z.isRefreshing ? i.update() : E(e / A),
          this)
        : -H;
    }
    function Ya(e) {
      (w.scrollTop = 0),
        (e.target.contains && e.target.contains(w)) ||
          (_ && !1 === _(o, e)) ||
          (Z.isInViewport(e.target) ||
            e.target === p ||
            o.scrollTo(e.target, !1, "center center"),
          (p = e.target));
    }
    function Za(t, e) {
      if (t < e.start) return t;
      var r = isNaN(e.ratio) ? 1 : e.ratio,
        n = e.end - e.start,
        o = t - e.start,
        i = e.offset || 0,
        s = e.pins || [],
        a = s.offset || 0,
        l =
          (e._startClamp && e.start <= 0) || (e.pins && e.pins.offset)
            ? 0
            : e._endClamp && e.end === D()
            ? 1
            : 0.5;
      return (
        s.forEach(function (e) {
          (n -= e.distance), e.nativeStart <= t && (o -= e.distance);
        }),
        a && (o *= (n - a / r) / n),
        t + (o - i * l) / r - o
      );
    }
    function _a(t, r) {
      b.forEach(function (e) {
        return (function adjustEffectRelatedTriggers(e, t, r) {
          r || (e.pins.length = e.pins.offset = 0);
          var n,
            o,
            i,
            s,
            a,
            l,
            c,
            f,
            u = e.pins,
            d = e.markers;
          for (c = 0; c < t.length; c++)
            if (
              ((f = t[c]),
              e.trigger &&
                f.trigger &&
                e !== f &&
                (f.trigger === e.trigger ||
                  f.pinnedContainer === e.trigger ||
                  e.trigger.contains(f.trigger)) &&
                ((a = f._startNative || f._startClamp || f.start),
                (l = f._endNative || f._endClamp || f.end),
                (i = Za(a, e)),
                (s = f.pin && 0 < l ? i + (l - a) : Za(l, e)),
                f.setPositions(
                  i,
                  s,
                  !0,
                  (f._startClamp ? Math.max(0, i) : i) - a
                ),
                f.markerStart &&
                  d.push(
                    B.quickSetter([f.markerStart, f.markerEnd], "y", "px")
                  ),
                f.pin && 0 < f.end && !r))
            ) {
              if (((n = f.end - f.start), (o = e._startClamp && f.start < 0))) {
                if (0 < e.start)
                  return (
                    e.setPositions(0, e.end + (e._startNative - e.start), !0),
                    void adjustEffectRelatedTriggers(e, t)
                  );
                (n += f.start), (u.offset = -f.start);
              }
              u.push({
                start: f.start,
                nativeStart: a,
                end: f.end,
                distance: n,
                trig: f,
              }),
                e.setPositions(e.start, e.end + (o ? -f.start : n), !0);
            }
        })(e, t, r);
      });
    }
    function ab() {
      Ra(),
        requestAnimationFrame(Ra),
        b &&
          (Z.getAll().forEach(function (e) {
            (e._startNative = e.start), (e._endNative = e.end);
          }),
          b.forEach(function (e) {
            var t = e._startClamp || e.start,
              r = e.autoSpeed
                ? Math.min(D(), e.end)
                : t + Math.abs((e.end - t) / e.ratio),
              n = r - e.end;
            if ((r -= n / 2) < (t -= n / 2)) {
              var o = t;
              (t = r), (r = o);
            }
            e._startClamp && t < 0
              ? ((n = (r = e.ratio < 0 ? D() : e.end / e.ratio) - e.end),
                (t = 0))
              : (e.ratio < 0 || (e._endClamp && r >= D())) &&
                (n =
                  ((r = D()) -
                    (t =
                      e.ratio < 0 || 1 < e.ratio
                        ? 0
                        : r - (r - e.start) / e.ratio)) *
                    e.ratio -
                  (e.end - e.start)),
              (e.offset = n || 1e-4),
              (e.pins.length = e.pins.offset = 0),
              e.setPositions(t, r, !0);
          }),
          _a(Z.sort())),
        U.reset();
    }
    function bb() {
      return Z.addEventListener("refresh", ab);
    }
    function cb() {
      return (
        b &&
        b.forEach(function (e) {
          return e.vars.onRefresh(e);
        })
      );
    }
    function db() {
      return (
        b &&
          b.forEach(function (e) {
            return e.vars.onRefreshInit(e);
          }),
        cb
      );
    }
    function eb(r, n, o, i) {
      return function () {
        var e = "function" == typeof n ? n(o, i) : n;
        e ||
          0 === e ||
          (e = i.getAttribute("data-" + R + r) || ("speed" === r ? 1 : 0)),
          i.setAttribute("data-" + R + r, e);
        var t = "clamp(" === (e + "").substr(0, 6);
        return { clamp: t, value: t ? e.substr(6, e.length - 7) : e };
      };
    }
    function fb(r, e, t, n, o) {
      function qc() {
        (e = u()),
          (t = parseFloat(d().value)),
          (i = parseFloat(e.value) || 1),
          (a = "auto" === e.value),
          (c =
            a || (s && s._startClamp && s.start <= 0) || p.offset
              ? 0
              : s && s._endClamp && s.end === D()
              ? 1
              : 0.5),
          l && l.kill(),
          (l = t && B.to(r, { ease: $, overwrite: !1, y: "+=0", duration: t })),
          s && ((s.ratio = i), (s.autoSpeed = a));
      }
      function rc() {
        (g.y = h + "px"), g.renderTransform(1), qc();
      }
      function uc(e) {
        if (a) {
          rc();
          var t = (function _autoDistance(e, t) {
            var r,
              n,
              o = e.parentNode || j,
              i = e.getBoundingClientRect(),
              s = o.getBoundingClientRect(),
              a = s.top - i.top,
              l = s.bottom - i.bottom,
              c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t),
              f = -c * t;
            return (
              0 < c &&
                ((n =
                  0.5 == (r = s.height / (L.innerHeight + s.height))
                    ? 2 * s.height
                    : 2 *
                      Math.min(s.height, Math.abs((-c * r) / (2 * r - 1))) *
                      (t || 1)),
                (f += t ? -n * t : -n / 2),
                (c += n)),
              { change: c, offset: f }
            );
          })(r, Y(0, 1, -e.start / (e.end - e.start)));
          (v = t.change), (f = t.offset);
        } else (f = p.offset || 0), (v = (e.end - e.start - f) * (1 - i));
        p.forEach(function (e) {
          return (v -= e.distance * (1 - i));
        }),
          (e.offset = v || 0.001),
          e.vars.onUpdate(e),
          l && l.progress(1);
      }
      o = ("function" == typeof o ? o(n, r) : o) || 0;
      var i,
        s,
        a,
        l,
        c,
        f,
        u = eb("speed", e, n, r),
        d = eb("lag", t, n, r),
        h = B.getProperty(r, "y"),
        g = r._gsap,
        p = [],
        m = [],
        v = 0;
      return (
        qc(),
        (1 !== i || a || l) &&
          (uc(
            (s = Z.create({
              trigger: a ? r.parentNode : r,
              start: function start() {
                return e.clamp
                  ? "clamp(top bottom+=" + o + ")"
                  : "top bottom+=" + o;
              },
              end: function end() {
                return e.value < 0
                  ? "max"
                  : e.clamp
                  ? "clamp(bottom top-=" + o + ")"
                  : "bottom top-=" + o;
              },
              scroller: w,
              scrub: !0,
              refreshPriority: -999,
              onRefreshInit: rc,
              onRefresh: uc,
              onKill: function onKill(e) {
                var t = b.indexOf(e);
                0 <= t && b.splice(t, 1), rc();
              },
              onUpdate: function onUpdate(e) {
                var t,
                  r,
                  n,
                  o = h + v * (e.progress - c),
                  i = p.length,
                  s = 0;
                if (e.offset) {
                  if (i) {
                    for (r = -H, n = e.end; i--; ) {
                      if (
                        (t = p[i]).trig.isActive ||
                        (r >= t.start && r <= t.end)
                      )
                        return void (
                          l &&
                          ((t.trig.progress +=
                            t.trig.direction < 0 ? 0.001 : -0.001),
                          t.trig.update(0, 0, 1),
                          l.resetTo("y", parseFloat(g.y), -M, !0),
                          N && l.progress(1))
                        );
                      r > t.end && (s += t.distance), (n -= t.distance);
                    }
                    o =
                      h +
                      s +
                      v *
                        ((B.utils.clamp(e.start, e.end, r) - e.start - s) /
                          (n - e.start) -
                          c);
                  }
                  m.length &&
                    !a &&
                    m.forEach(function (e) {
                      return e(o - s);
                    }),
                    (o = (function _round(e) {
                      return Math.round(1e5 * e) / 1e5 || 0;
                    })(o + f)),
                    l
                      ? (l.resetTo("y", o, -M, !0), N && l.progress(1))
                      : ((g.y = o + "px"), g.renderTransform(1));
                }
              },
            }))
          ),
          (B.core.getCache(s.trigger).stRevert = db),
          (s.startY = h),
          (s.pins = p),
          (s.markers = m),
          (s.ratio = i),
          (s.autoSpeed = a),
          (r.style.willChange = "transform")),
        s
      );
    }
    var n,
      w,
      e,
      i,
      b,
      s,
      a,
      l,
      c,
      f,
      r,
      u,
      d,
      h,
      g,
      p,
      m = t.smoothTouch,
      v = t.onUpdate,
      S = t.onStop,
      T = t.smooth,
      _ = t.onFocusIn,
      C = t.normalizeScroll,
      x = t.wholePixels,
      P = this,
      R = t.effectsPrefix || "",
      E = Z.getScrollFunc(L),
      k =
        1 === Z.isTouch
          ? !0 === m
            ? 0.8
            : parseFloat(m) || 0
          : 0 === T || !1 === T
          ? 0
          : parseFloat(T) || 0.8,
      A = (k && +t.speed) || 1,
      H = 0,
      M = 0,
      N = 1,
      U = G(0),
      z = { y: 0 },
      O =
        "undefined" != typeof ResizeObserver &&
        !1 !== t.autoResize &&
        new ResizeObserver(function () {
          if (!Z.isRefreshing) {
            var e = D(w) * A;
            e < -H && Va(e), X.restart(!0);
          }
        });
    function refreshHeight() {
      return (
        (e = n.clientHeight),
        (n.style.overflow = "visible"),
        (q.style.height = L.innerHeight + (e - L.innerHeight) / A + "px"),
        e - L.innerHeight
      );
    }
    bb(),
      Z.addEventListener("killAll", bb),
      B.delayedCall(0.5, function () {
        return (N = 0);
      }),
      (this.scrollTop = Va),
      (this.scrollTo = function (e, t, r) {
        var n = B.utils.clamp(
          0,
          D(),
          isNaN(e) ? o.offset(e, r, !!t && !f) : +e
        );
        t
          ? f
            ? B.to(o, { duration: k, scrollTop: n, overwrite: "auto", ease: $ })
            : E(n)
          : Va(n);
      }),
      (this.offset = function (e, t, r) {
        var n,
          o = (e = W(e)[0]).style.cssText,
          i = Z.create({ trigger: e, start: t || "top top" });
        return (
          b && (N ? Z.refresh() : _a([i], !0)),
          (n = i.start / (r ? A : 1)),
          i.kill(!1),
          (e.style.cssText = o),
          (B.core.getCache(e).uncache = 1),
          n
        );
      }),
      (this.content = function (e) {
        if (arguments.length) {
          var t =
            W(e || "#smooth-content")[0] ||
            console.warn("ScrollSmoother needs a valid content element.") ||
            q.children[0];
          return (
            t !== n &&
              ((c = (n = t).getAttribute("style") || ""),
              O && O.observe(n),
              B.set(n, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0",
              }),
              k || B.set(n, { clearProps: "transform" })),
            this
          );
        }
        return n;
      }),
      (this.wrapper = function (e) {
        return arguments.length
          ? ((w =
              W(e || "#smooth-wrapper")[0] ||
              (function _wrap(e) {
                var t = I.querySelector(".ScrollSmoother-wrapper");
                return (
                  t ||
                    ((t = I.createElement("div")).classList.add(
                      "ScrollSmoother-wrapper"
                    ),
                    e.parentNode.insertBefore(t, e),
                    t.appendChild(e)),
                  t
                );
              })(n)),
            (l = w.getAttribute("style") || ""),
            refreshHeight(),
            B.set(
              w,
              k
                ? {
                    overflow: "hidden",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }
                : {
                    overflow: "visible",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto",
                  }
            ),
            this)
          : w;
      }),
      (this.effects = function (e, t) {
        if (((b = b || []), !e)) return b.slice(0);
        (e = W(e)).forEach(function (e) {
          for (var t = b.length; t--; ) b[t].trigger === e && b[t].kill();
        });
        t = t || {};
        var r,
          n,
          o = t.speed,
          i = t.lag,
          s = t.effectsPadding,
          a = [];
        for (r = 0; r < e.length; r++) (n = fb(e[r], o, i, r, s)) && a.push(n);
        return b.push.apply(b, a), !1 !== t.refresh && Z.refresh(), a;
      }),
      (this.sections = function (e, t) {
        if (((s = s || []), !e)) return s.slice(0);
        var r = W(e).map(function (t) {
          return Z.create({
            trigger: t,
            start: "top 120%",
            end: "bottom -20%",
            onToggle: function onToggle(e) {
              (t.style.opacity = e.isActive ? "1" : "0"),
                (t.style.pointerEvents = e.isActive ? "all" : "none");
            },
          });
        });
        return t && t.add ? s.push.apply(s, r) : (s = r.slice(0)), r;
      }),
      this.content(t.content),
      this.wrapper(t.wrapper),
      (this.render = function (e) {
        return Ua(e || 0 === e ? e : H);
      }),
      (this.getVelocity = function () {
        return U.getVelocity(-H);
      }),
      Z.scrollerProxy(w, {
        scrollTop: Va,
        scrollHeight: function scrollHeight() {
          return refreshHeight() && q.scrollHeight;
        },
        fixedMarkers: !1 !== t.fixedMarkers && !!k,
        content: n,
        getBoundingClientRect: function getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: L.innerWidth,
            height: L.innerHeight,
          };
        },
      }),
      Z.defaults({ scroller: w });
    var V = Z.getAll().filter(function (e) {
      return e.scroller === L || e.scroller === w;
    });
    V.forEach(function (e) {
      return e.revert(!0, !0);
    }),
      (i = Z.create({
        animation: B.fromTo(
          z,
          {
            y: function y() {
              return (h = 0);
            },
          },
          {
            y: function y() {
              return (h = 1), -refreshHeight();
            },
            immediateRender: !1,
            ease: "none",
            data: "ScrollSmoother",
            duration: 100,
            onUpdate: function onUpdate() {
              if (h) {
                var e = g;
                e && (Ta(i), (z.y = H)), Ua(z.y, e), Pa(), v && !f && v(P);
              }
            },
          }
        ),
        onRefreshInit: function onRefreshInit(e) {
          if (!ScrollSmoother.isRefreshing) {
            if (((ScrollSmoother.isRefreshing = !0), b)) {
              var t = Z.getAll().filter(function (e) {
                return !!e.pin;
              });
              b.forEach(function (r) {
                r.vars.pinnedContainer ||
                  t.forEach(function (e) {
                    if (e.pin.contains(r.trigger)) {
                      var t = r.vars;
                      (t.pinnedContainer = e.pin),
                        (r.vars = null),
                        r.init(t, r.animation);
                    }
                  });
              });
            }
            var r = e.getTween();
            (d = r && r._end > r._dp._time),
              (u = H),
              (z.y = 0),
              k &&
                (1 === Z.isTouch && (w.style.position = "absolute"),
                (w.scrollTop = 0),
                1 === Z.isTouch && (w.style.position = "fixed"));
          }
        },
        onRefresh: function onRefresh(e) {
          e.animation.invalidate(),
            e.setPositions(e.start, refreshHeight() / A),
            d || Ta(e),
            (z.y = -E() * A),
            Ua(z.y),
            N ||
              (d && (g = !1),
              e.animation.progress(B.utils.clamp(0, 1, u / A / -e.end))),
            d && ((e.progress -= 0.001), e.update()),
            (ScrollSmoother.isRefreshing = !1);
        },
        id: "ScrollSmoother",
        scroller: L,
        invalidateOnRefresh: !0,
        start: 0,
        refreshPriority: -9999,
        end: function end() {
          return refreshHeight() / A;
        },
        onScrubComplete: function onScrubComplete() {
          U.reset(), S && S(o);
        },
        scrub: k || !0,
      })),
      (this.smooth = function (e) {
        return (
          arguments.length &&
            ((A = ((k = e || 0) && +t.speed) || 1), i.scrubDuration(e)),
          i.getTween() ? i.getTween().duration() : 0
        );
      }),
      i.getTween() && (i.getTween().vars.ease = t.ease || $),
      (this.scrollTrigger = i),
      t.effects &&
        this.effects(
          !0 === t.effects
            ? "[data-" + R + "speed], [data-" + R + "lag]"
            : t.effects,
          { effectsPadding: t.effectsPadding, refresh: !1 }
        ),
      t.sections &&
        this.sections(!0 === t.sections ? "[data-section]" : t.sections),
      V.forEach(function (e) {
        (e.vars.scroller = w), e.revert(!1, !0), e.init(e.vars, e.animation);
      }),
      (this.paused = function (e, t) {
        return arguments.length
          ? (!!f !== e &&
              (e
                ? (i.getTween() && i.getTween().pause(),
                  E(-H / A),
                  U.reset(),
                  (r = Z.normalizeScroll()) && r.disable(),
                  ((f = Z.observe({
                    preventDefault: !0,
                    type: "wheel,touch,scroll",
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: function onChangeY() {
                      return Va(-H);
                    },
                  })).nested = J(j, "wheel,touch,scroll", !0, !1 !== t)))
                : (f.nested.kill(),
                  f.kill(),
                  (f = 0),
                  r && r.enable(),
                  (i.progress = (-H / A - i.start) / (i.end - i.start)),
                  Ta(i))),
            this)
          : !!f;
      }),
      (this.kill = this.revert =
        function () {
          o.paused(!1), Ta(i), i.kill();
          for (var e = (b || []).concat(s || []), t = e.length; t--; )
            e[t].kill();
          Z.scrollerProxy(w),
            Z.removeEventListener("killAll", bb),
            Z.removeEventListener("refresh", ab),
            (w.style.cssText = l),
            (n.style.cssText = c);
          var r = Z.defaults({});
          r && r.scroller === w && Z.defaults({ scroller: L }),
            o.normalizer && Z.normalizeScroll(!1),
            clearInterval(a),
            (K = null),
            O && O.disconnect(),
            q.style.removeProperty("height"),
            L.removeEventListener("focusin", Ya);
        }),
      (this.refresh = function (e, t) {
        return i.refresh(e, t);
      }),
      C &&
        (this.normalizer = Z.normalizeScroll(
          !0 === C ? { debounce: !0, content: !k && n } : C
        )),
      Z.config(t),
      "overscrollBehavior" in L.getComputedStyle(q) &&
        B.set([q, j], { overscrollBehavior: "none" }),
      "scrollBehavior" in L.getComputedStyle(q) &&
        B.set([q, j], { scrollBehavior: "auto" }),
      L.addEventListener("focusin", Ya),
      (a = setInterval(Pa, 250)),
      "loading" === I.readyState ||
        requestAnimationFrame(function () {
          return Z.refresh();
        });
  }
  (r.version = "3.12.5"),
    (r.create = function (e) {
      return K && e && K.content() === W(e.content)[0] ? K : new r(e);
    }),
    (r.get = function () {
      return K;
    }),
    t() && B.registerPlugin(r),
    (e.ScrollSmoother = r),
    (e.default = r);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

// GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  effects: true,
  smoothTouch: 1,
  normalizeScroll: true,
  preventDefault: true,
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "bottom center",
    end: "bottom center",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl.to(".hero", { opacity: 0, y: "-20vh" });

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".why",
    start: "top bottom",
    end: "center bottom",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl2.set(".why", { opacity: 0, y: 0 });
tl2.to(".why", {
  opacity: 1,
  zIndex: 15,
  position: "relative",
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".why",
    start: "center top",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl3.to(".why", { opacity: 0, y: "-10vh" });

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".expert",
    start: "top bottom",
    end: "center top",
    scrub: 1,
    invalidateOnRefresh: !0,
  },
});
tl4.set([".expert", ".expert__more__item"], { opacity: 0, y: "5vh" });
tl4.to(".expert", { opacity: 1, y: 0 }),
  tl4.to(
    ".expert__more__item",
    { opacity: 1, y: 0, stagger: 0.4, delay: 1 },
    "<"
  );

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".expert",
    start: "bottom center",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl5.to(".expert", { opacity: 0, y: "-15vh" });

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".coowner",
    start: "top bottom",
    end: "center top",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl6.set(
  [
    ".coowner__title",
    ".coowner__subtitle--1",
    ".coowner__subtitle--2",
    ".coowner--disclaimer",
    ".coowner__second-container",
  ],
  { opacity: 0, y: 30 },
  "<"
),
  tl6.set(".coowner__item", { y: "20vh", opacity: 0 });

tl6.to(".coowner__title", { opacity: 1, y: 0, duration: 1 }),
  tl6.to(".coowner__subtitle--1", { opacity: 1, y: 0, duration: 1 }),
  tl6.to(".coowner__item", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.8,
    duration: 3,
  }),
  tl6.to(".coowner--disclaimer", { opacity: 0.4, y: 0, duration: 1 }),
  tl6.to(".coowner__subtitle--2", { opacity: 1, y: 0, duration: 1 }),
  tl6.to(".coowner__second-container", { opacity: 1, y: 0, duration: 1 }, "<");

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".coowner",
    start: "bottom-=15% top",
    end: "top bottom+=10%",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl7.to(".coowner", { opacity: 0 });

let tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".comfort",
    start: "top bottom",
    end: "center bottom",
    scrub: 1,
    invalidateOnRefresh: !0,
  },
});
tl8.set(
  [
    ".comfort__video",
    ".comfort__info__text--title",
    ".comfort__info__text--descr",
  ],
  { opacity: 0, y: "5vh" }
),
  tl8.set(".comfort__info--btn", { opacity: 0, y: "5vh" });

tl8.to(".comfort__info__text--title", { opacity: 1, y: 0, duration: 0.2 }),
  tl8.to(".comfort__video", { opacity: 1, y: 0, duration: 0.2 }),
  tl8.to(".comfort__info__text--descr", {
    opacity: 1,
    y: 0,
    duration: 0.2,
    delay: 0.2,
  }),
  tl8.to(".comfort__info--btn", {
    opacity: 1,
    y: 0,
    duration: 0.2,
    delay: 0.2,
  });

let tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".comfort",
    start: "bottom center",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl9.to(".comfort", { opacity: 1, y: 0 });

// RUNNING STRING PROFITABLE
const runningItemsContainer = document.querySelector(".profitable__running");

const runningItems = runningItemsContainer.innerHTML;
runningItemsContainer.innerHTML += runningItems;

let totalWidth = runningItemsContainer.scrollWidth;

let runningTl = gsap.to(runningItemsContainer, {
  x: -totalWidth,
  duration: 100,
  ease: "none",
  repeat: -1,
});

let tl10 = gsap.timeline({
  scrollTrigger: {
    trigger: ".profitable",
    start: "top bottom",
    end: "center bottom",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl10.set(".profitable", { opacity: 0, y: "5vh" });
tl10.to(".profitable", { opacity: 1, y: 0 });

let tl11 = gsap.timeline({
  scrollTrigger: {
    trigger: ".profitable",
    start: "bottom center",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl11.to(".profitable", { opacity: 1, y: 0 });

let tl12 = gsap.timeline({
  scrollTrigger: {
    trigger: ".controls",
    start: "top+=20% bottom",
    end: "center+=20% center",
    scrub: !0,
  },
});
tl12.set(".controls__background", { opacity: 0 }),
  tl12.set(".controls__title", { opacity: 0, y: 20 }),
  tl12.set(".controls__item", { opacity: 0, y: 150 });

tl12.to(".controls__title", { opacity: 1, y: 0, duration: 0.4 }),
  tl12.to(".controls__background", { opacity: 0.7 }, "<"),
  tl12.to(".controls__subtitle", { opacity: 1, y: 0, duration: 0.4 }, "<"),
  tl12.to(".controls__item", { opacity: 1, y: 0, stagger: 0.2 }, "<");

let tl13 = gsap.timeline({
  scrollTrigger: {
    trigger: ".controls",
    start: "center+=33% center",
    end: "bottom top",
    scrub: !0,
  },
});

tl13.to(".controls", { opacity: 0 }),
  tl13.to(".controls__item", { top: "-20vh", stagger: 0.05 }, "<");

let tl14 = gsap.timeline({
  scrollTrigger: {
    trigger: ".doing",
    start: "top bottom",
    end: "center center",
    scrub: !0,
  },
});
tl14.set(".doing__title", { y: 20, opacity: 0 }),
  tl14.set(".doing__item", { y: 100, opacity: 0 });

tl14.to(".doing__title", { opacity: 1, y: 0, duration: 0.4 }),
  tl14.to(".doing__item", { opacity: 1, y: 0, duration: 0.4 }, "<");

let tl15 = gsap.timeline({
  scrollTrigger: {
    trigger: ".doing",
    start: "center+=20% center",
    end: "+=700px",
    scrub: !0,
  },
});
tl15.to(".doing", { opacity: 0 }),
  tl15.to(".doing__item", { top: "-10vh", stagger: 0.07 }, "<");

let tl16 = gsap.timeline({
  scrollTrigger: {
    trigger: ".reasons",
    start: "top bottom",
    end: "bottom bottom",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl16.set([".reasons__title", ".reasons__item", ".reasons__video"], {
  y: 50,
  opacity: 0,
});
tl16.to(".reasons__title", { y: 0, opacity: 1, duration: 1 }),
  tl16.to(".reasons__item", { y: 0, opacity: 1, stagger: 0.3 }),
  tl16.to(".reasons__video", { y: 0, opacity: 1 }, "<");

let tl17 = gsap.timeline({
  scrollTrigger: {
    trigger: ".reasons",
    start: "center top",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl17.to(".reasons__item", { opacity: 0, y: -50, stagger: 0.2 }),
  tl17.to(".reasons__video", { opacity: 0, y: -50 }, "<");

let tl18 = gsap.timeline({
  scrollTrigger: {
    trigger: ".profit__title",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl18.set(
  [
    ".profit__container",
    ".profit__title",
    ".profit__subtitle",
    ".profit__designations",
    ".profit__graph--span",
    ".profit__graph--text",
    ".profit__caption",
    ".profit__caption--hint",
    ".profit__video",
  ],
  { y: 50, opacity: 0 }
),
  tl18.set([".profit__graph--estimate", ".profit__graph--potential"], {
    height: 0,
    opacity: 0,
  });

tl18.to(".profit--container", {
  y: 0,
  opacity: 1,
  duration: 0.1,
}),
  tl18.to(".profit__title", { y: 0, opacity: 1, duration: 0.1 }, "<"),
  tl18.to(".profit__subtitle", { y: 0, opacity: 1, duration: 0.1 }, "<50%"),
  tl18.to(".profit__designations", { y: 0, opacity: 1, duration: 0.1 }, "<50%");

let tl19 = gsap.timeline({
  scrollTrigger: {
    trigger: ".profit",
    start: "top-=20% center",
    end: "center bottom-=10%",
    scrub: 5,
    invalidateOnRefresh: !0,
  },
});
tl19.to(".profit__graph--potential--id1", {
  height: "100%",
  opacity: 1,
  duration: 3,
}),
  tl19.to(
    ".profit__graph--estimate--id1",
    {
      height: "100%",
      opacity: 1,
      duration: 3,
    },
    "<"
  ),
  tl19.to(
    ".profit__graph--potential--id2",
    {
      height: "100%",
      opacity: 1,
      duration: 3,
    },
    "<75%"
  ),
  tl19.to(
    ".profit__graph--estimate--id2",
    {
      height: "100%",
      opacity: 1,
      duration: 3,
    },
    "<"
  ),
  tl19.to(
    ".profit__graph--potential--id3",
    {
      height: "100%",
      opacity: 1,
      duration: 3,
    },
    "<75%"
  ),
  tl19.to(
    ".profit__graph--estimate--id3",
    {
      height: "100%",
      opacity: 1,
      duration: 3,
    },
    "<"
  ),
  tl19.to(".profit__graph--span", { y: 0, opacity: 1, stagger: 0.5 }),
  tl19.to(".profit__graph--text", { y: 0, opacity: 1, stagger: 0.5 }, "<0.3"),
  tl19.to(".profit__caption", { y: 0, opacity: 1, stagger: 0.5 }, "<"),
  tl19.to(".profit__caption--hint", { y: 0, opacity: 0.3 }),
  tl19.to(".profit__video", { y: 0, opacity: 1 }, "<");

let tl20 = gsap.timeline({
  scrollTrigger: {
    trigger: ".profit--container",
    start: "bottom-=25% top",
    end: "bottom top-=20%",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl20.to(".profit--container", {
  opacity: 0,
  y: -50,
  stagger: 0.3,
  duration: 1,
  delay: 0.5,
});

let tl21 = gsap.timeline({
  scrollTrigger: {
    trigger: ".conditions",
    start: "top bottom-=10%",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl21.set([".conditions__title", ".conditions--wraper", ".conditions__item"], {
  y: 100,
  opacity: 0,
});

tl21.to(".conditions__title", { y: 0, opacity: 1 }),
  tl21.to(".conditions--wraper", { y: 0, opacity: 1 }),
  tl21.to(".conditions__item", {
    y: 0,
    opacity: 1,
    stagger: 0.4,
    ease: "expo",
  });

let tl22 = gsap.timeline({
  scrollTrigger: {
    trigger: ".conditions",
    start: "top center",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl22.to(".conditions", { y: "-10vh", stagger: 0.3, opacity: 0, delay: 0.5 });

let tl23 = gsap.timeline({
  scrollTrigger: {
    trigger: ".guide",
    start: "top bottom-=10%",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl23.set(
  [".guide__title", ".guide swiper__wrapper", ".guide__button--wrapper"],
  { y: 50, opacity: 0 }
),
  tl23.set(".guide__navigation--prev", { x: "-100%", opacity: 0 }),
  tl23.set(".guide__navigation--next", { x: "100%", opacity: 0 });

tl23.to(".guide__title", { y: 0, opacity: 1 }),
  tl23.to(".guide swiper__wrapper", { y: 0, opacity: 1, ease: "expo" }),
  tl23.to([".guide__navigation--prev", ".guide__navigation--next"], {
    x: 0,
    opacity: 1,
  }),
  tl23.to(".guide__button--wrapper", { y: 0, opacity: 1 });

let tl24 = gsap.timeline({
  scrollTrigger: {
    trigger: ".guide",
    start: "top top+=40%",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl24.to(".guide", { y: "-10vh", opacity: 0, delay: 0.5 });

let tl25 = gsap.timeline({
  scrollTrigger: {
    trigger: ".articles",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl25.set([".articles__title", ".articles__card--wrapper"], {
  y: 50,
  opacity: 0,
});

tl25.to(".articles__title", { y: 0, opacity: 1, duration: 1, delay: 1.5 }),
  tl25.to(
    ".articles__card--wrapper",
    { y: 0, opacity: 1, duration: 1, delay: 0.7, stagger: 0.5 },
    "<"
  );

let tl26 = gsap.timeline({
  scrollTrigger: {
    trigger: ".articles",
    start: "center-=40% top",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl26.to(".articles__card--wrapper", {
  opacity: 0,
  y: -50,
  stagger: 0.3,
  duration: 0.3,
  delay: 0.5,
});

let tl27 = gsap.timeline({
  scrollTrigger: {
    trigger: ".faq",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl27.set([".faq__title", ".accordion__item"], { y: 50, opacity: 0 });

tl27.to(".faq__title", { y: 0, opacity: 1, duration: 1, delay: 1.5 }),
  tl27.to(
    ".accordion__item",
    { y: 0, opacity: 1, duration: 1, delay: 0.7, stagger: 0.5 },
    "<"
  );

let tl28 = gsap.timeline({
  scrollTrigger: {
    trigger: ".disclaimer",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl28.set(".disclaimer", { y: 50, opacity: 0 });

tl28.to(".disclaimer", { y: 0, opacity: 1, duration: 1, delay: 1.5 });

// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector("header");
  const navbar = document.querySelector(".nav");
  let isHeaderHidden = false;

  function handleScroll(scrollTop) {
    if (scrollTop > lastScrollTop) {
      // Scroll down
      if (!isHeaderHidden) {
        isHeaderHidden = true;
        header.classList.add("header--hide");
        header.classList.remove("header--show");
        navbar.classList.remove("header--scroll-up");
      }
    } else {
      // Scroll up
      if (isHeaderHidden || scrollTop < 60) {
        isHeaderHidden = false;
        header.classList.remove("header--hide");
        header.classList.add("header--show");
        if (scrollTop < 60) {
          navbar.classList.remove("header--scroll-up");
        } else {
          navbar.classList.add("header--scroll-up");
        }
      }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  function scrollToAnchor(anchor) {
    const targetElement = document.querySelector(anchor);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }

  function handleAnchorClick(event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const clickedAnchor = event.target.getAttribute("href");
      scrollToAnchor(clickedAnchor);
      setTimeout(function () {
        handleScroll(window.pageYOffset || document.documentElement.scrollTop);
      }, 100); // Добавлен вызов handleScroll после перехода по якорной ссылке
    }
  }

  window.addEventListener("scroll", function () {
    handleScroll(window.pageYOffset || document.documentElement.scrollTop);
  });

  document.addEventListener("click", handleAnchorClick);
});

document.addEventListener("DOMContentLoaded", function () {
  var video1 = document.querySelector(".hero__background video:nth-of-type(1)");
  var video2 = document.querySelector(".hero__background video:nth-of-type(2)");

  video2.style.display = "none";

  function playVideo(video) {
    video.style.display = "block";
    video
      .play()
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });
  }

  function onVideoEnded(e) {
    var currentVideo = e.target;

    if (currentVideo === video1) {
      playVideo(video2);
    } else {
      playVideo(video1);
    }
  }

  video1.addEventListener("ended", onVideoEnded);
  video2.addEventListener("ended", onVideoEnded);

  playVideo(video1);
});

const container = document.querySelector(".coowner--wrapper");

gsap.to(container, {
  x: -container.offsetWidth,
  duration: 20,
  repeat: -1,
  ease: "linear",
});

//BURGER
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const linkItem = document.querySelectorAll(".menu__item-link");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1400) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  linkItem.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    });
  });
}
burgerMenu();

//popup video
const videoAttributes = {
  button1: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/9de0e6ff2.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/5_glavnykh_voprosov.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    importance: "high",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button2: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/66f8b7651.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/zpif_korotko_i_ponyatno_o_glavnom.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button3: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/3cecb74c1.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/vybirayem_mezhdu_kvartiroy_i_skladom.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button4: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/3b33b7b41.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/dokhod_prinosit_ne_lyubaya_nedvizhimost.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button5: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/66f8b7651.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/zpif_korotko_i_ponyatno_o_glavnom.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button6: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/videosfn38ae234a.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/sovremennyye_skladskiye_kompleksy.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button7: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/3cecb74c1.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/vybirayem_mezhdu_kvartiroy_i_skladom.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button8: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/3b33b7b41.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/dokhod_prinosit_ne_lyubaya_nedvizhimost.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
};

// Находим все кнопки с классом "video-button"
const videoButtons = document.querySelectorAll(".video-button");
const popupVideoContainer = document.querySelector(".popup__video__video");
const popup = document.querySelector(".popup__video");

// Перебираем кнопки и назначаем обработчик события на каждую
videoButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonClass = this.classList[1]; // предполагаем, что второй класс кнопки связан с iframe

    // Проверяем, есть ли атрибуты для данного класса
    if (videoAttributes.hasOwnProperty(buttonClass)) {
      const iframeAttributes = videoAttributes[buttonClass];

      const iframe = document.createElement("iframe");
      // Устанавливаем атрибуты iframe из объекта videoAttributes для соответствующей кнопки
      Object.keys(iframeAttributes).forEach((key) => {
        iframe.setAttribute(key, iframeAttributes[key]);
      });
      // Устанавливаем src атрибут
      iframe.src = iframeAttributes.src;
      iframe.classList.add("pop-up-video__video");

      // Очищаем содержимое "popup__video__video" перед вставкой нового iframe
      popupVideoContainer.innerHTML = "";

      // Вставляем iframe в "popup__video__video"
      popupVideoContainer.appendChild(iframe);

      // Отображаем блок с видео
      popup.style.display = "flex";
    } else {
      console.error("Attributes not found for class", buttonClass);
    }
  });
});
const closePopupButton = document.querySelector(".popup__video--close");

closePopupButton.addEventListener("click", function () {
  // Удаляем iframe из контейнера
  popupVideoContainer.innerHTML = "";
  // Скрываем блок с видео
  popup.style.display = "none";
});
// slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 16,
  freeMode: true,
});
const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  loopedSlides: 4,
  effect: "creative",
  creativeEffect: {
    limitProgress: 2,
    perspective: true,
    prev: {
      translate: [-420, 35, 8],
      rotate: [0, 0, -8],
      scale: 0.8,
      opacity: 0.5,
    },
    next: {
      translate: [420, 35, -8],
      rotate: [0, 0, 8],
      opacity: 0.5,
      scale: 0.8,
    },
  },
  navigation: {
    nextEl: ".guide__navigation--next",
    prevEl: ".guide__navigation--prev",
  },
  breakpoints: {
    360: {
      spaceBetween: 20,
      creativeEffect: {
        prev: {
          scale: 1,
          opacity: 1,
          translate: [-270, 0, 0],
          rotate: [0, 0, 0],
        },
        next: {
          scale: 1,
          opacity: 1,
          translate: [270, 0, 0],
          rotate: [0, 0, 0],
        },
      },
    },
    768: {
      spaceBetween: 20,
      creativeEffect: {
        prev: {
          scale: 1,
          opacity: 1,
          translate: [-520, 0, 0],
          rotate: [0, 0, 0],
        },
        next: {
          scale: 1,
          opacity: 1,
          translate: [520, 0, 0],
          rotate: [0, 0, 0],
        },
      },
    },
    1400: {
      creativeEffect: {
        limitProgress: 2,
        perspective: true,
        prev: {
          translate: [-420, 35, 8],
          rotate: [0, 0, -8],
          scale: 0.8,
          opacity: 0.5,
        },
        next: {
          translate: [420, 35, -8],
          rotate: [0, 0, 8],
          opacity: 0.5,
          scale: 0.8,
        },
      },
    },
  },
});
const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
});

function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item-active")) {
        parent.classList.remove("accordion__item-active");
      } else {
        document
          .querySelectorAll(".accordion__item")
          .forEach((child) => child.classList.remove("accordion__item-active"));
        parent.classList.add("accordion__item-active");
      }
    });
  });
}
accordion();
