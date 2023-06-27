(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [11],
  {
    42: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(57),
        l = n(0),
        o = n.n(l),
        r = n(3);
      t.default = Object(r.f)(function (e) {
        var t = Object(l.useState)(!1),
          n = Object(a.a)(t, 2),
          u = n[0],
          i = n[1],
          s = Object(l.useState)(!1),
          c = Object(a.a)(s, 2),
          m = c[0],
          d = c[1],
          p = Object(r.e)();
        return o.a.createElement(
          "div",
          null,
          o.a.createElement(
            "header",
            { class: "text-gray-700 body-font" },
            o.a.createElement(
              "div",
              {
                class:
                  "container mx-auto flex flex-wrap p-2 flex-row md:flex-row items-center justify-between",
              },
              o.a.createElement(
                "a",
                {
                  class:
                    "flex title-font font-medium items-center text-gray-900 md:mb-0 pt-2 md:py-0",
                },
                o.a.createElement("img", {
                  src: "2.png",
                  alt: "triangle with all three sides equal",
                  class: "w-10 h-10 text-white p-1 bg-gray-400 rounded-full",
                  height: "87",
                  width: "100",
                }),
                o.a.createElement(
                  "span",
                  { class: "font-bold ml-3 text-xl" },
                  "Salario"
                )
              ),
              o.a.createElement(
                "nav",
                {
                  class:
                    "md:ml-auto flex items-end text-base justify-end pt-2 md:py-0 inline-flex md:hidden",
                },
                o.a.createElement(
                  "button",
                  {
                    className:
                      "text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none",
                    type: "button",
                    onClick: function () {
                      return i(!u);
                    },
                  },
                  o.a.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "icon icon-tabler icon-tabler-menu-2",
                      width: "28",
                      height: "28",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "#607D8B",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    },
                    o.a.createElement("path", {
                      stroke: "none",
                      d: "M0 0h24v24H0z",
                    }),
                    o.a.createElement("line", {
                      x1: "4",
                      y1: "6",
                      x2: "20",
                      y2: "6",
                    }),
                    o.a.createElement("line", {
                      x1: "4",
                      y1: "12",
                      x2: "20",
                      y2: "12",
                    }),
                    o.a.createElement("line", {
                      x1: "4",
                      y1: "18",
                      x2: "20",
                      y2: "18",
                    })
                  )
                )
              ),
              o.a.createElement(
                "nav",
                {
                  class:
                    "flex md:inline-flex md:flex-row flex-col md:w-auto w-full md:items-center items-start text-base justify-center pt-2 md:ml-auto md:py-0" +
                    (u ? " flex" : " hidden"),
                },
                o.a.createElement(
                  "button",
                  {
                    class:
                      "flex rounded-lg py-4 md:py-2 px-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue",
                    type: "button",
                    value: "Home",
                    onClick: function () {
                      p.push("/home");
                    },
                  },
                  "Home"
                ),
                o.a.createElement(
                  "button",
                  {
                    class:
                      "flex rounded-lg py-4 md:py-2 px-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue",
                    type: "button",
                    value: "App",
                    onClick: function () {
                      p.push("/app");
                    },
                  },
                  "App"
                ),
                o.a.createElement(
                  "div",
                  { className: "relative" },
                  o.a.createElement(
                    "button",
                    {
                      class:
                        "flex rounded-lg py-4 md:py-4 px-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue",
                      type: "button",
                      value: "Pricing",
                      onClick: function () {
                        return d(!m);
                      },
                    },
                    "Tax Calculators"
                  ),
                  o.a.createElement(
                    "div",
                    {
                      className:
                        "tax-menu origin-top-right absolute right-0 w-40 rounded-lg shadow-lg" +
                        (m ? " block" : " hidden"),
                    },
                    o.a.createElement(
                      "div",
                      { className: "rounded-md bg-white shadow-xs" },
                      o.a.createElement(
                        "div",
                        { className: "py-1" },
                        o.a.createElement(
                          "button",
                          {
                            type: "button",
                            className:
                              "block w-full text-left px-4 py-2 text-base leading-snug text-gray-700 hover:bg-gray-100 hover:text-luminous-blue focus:outline-none focus:bg-gray-100 focus:text-gray-900",
                            onClick: function () {
                              p.push("/paye");
                            },
                          },
                          "PAYE"
                        ),
                        o.a.createElement(
                          "button",
                          {
                            type: "button",
                            className:
                              "block w-full text-left px-4 py-2 text-base leading-snug text-gray-700 hover:bg-gray-100 hover:text-luminous-blue focus:outline-none focus:bg-gray-100 focus:text-gray-900",
                            onClick: function () {
                              p.push("/nhif");
                            },
                          },
                          "NHIF"
                        ),
                        o.a.createElement(
                          "button",
                          {
                            type: "button",
                            className:
                              "block w-full text-left px-4 py-2 text-base leading-snug text-gray-700 hover:bg-gray-100 hover:text-luminous-blue focus:outline-none focus:bg-gray-100 focus:text-gray-900",
                            onClick: function () {
                              p.push("/nssf");
                            },
                          },
                          "NSSF"
                        )
                      )
                    )
                  )
                ),
                o.a.createElement(
                  "button",
                  {
                    class:
                      "flex rounded-lg py-4 md:py-2 px-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue",
                    type: "button",
                    value: "Pricing",
                    onClick: function () {
                      p.push("/pricing");
                    },
                  },
                  "Pricing"
                ),
                o.a.createElement(
                  "button",
                  {
                    class:
                      "flex rounded-lg py-4 md:py-2 px-4 mr-4 text-black bg-transparent hover:text-grey-700 focus:outline-none font-medium hover:text-luminous-blue",
                    type: "button",
                    value: "Help",
                    onClick: function () {
                      p.push("/help");
                    },
                  },
                  "Help"
                )
              )
            )
          )
        );
      });
    },
    57: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a = n(45);
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                a = !0,
                l = !1,
                o = void 0;
              try {
                for (
                  var r, u = e[Symbol.iterator]();
                  !(a = (r = u.next()).done) &&
                  (n.push(r.value), !t || n.length !== t);
                  a = !0
                );
              } catch (i) {
                (l = !0), (o = i);
              } finally {
                try {
                  a || null == u.return || u.return();
                } finally {
                  if (l) throw o;
                }
              }
              return n;
            }
          })(e, t) ||
          Object(a.a)(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
  },
]);
//# sourceMappingURL=11.820e7d6e.chunk.js.map
