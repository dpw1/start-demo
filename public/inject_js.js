window.ezfyEasyUpsellApp = window.ezfyEasyUpsellApp || {};

window.ezfyEasyUpsellApp = (function () {
  window.ezfyUpsellData = null;
  const USE_CUSTOM_URLS =
    window.location.hostname === "ezfycode.com" ? true : false;

  const OPEN_PRODUCTS_IN_POPUP = true;

  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }

  function loadAirDatePicker() {
    if (window.AirDatepicker !== undefined) {
      return true;
    }

    return new Promise(async (resolve, reject) => {
      !(function (e, t) {
        "object" == typeof exports && "object" == typeof module
          ? (module.exports = t())
          : "function" == typeof define && define.amd
          ? define([], t)
          : "object" == typeof exports
          ? (exports.AirDatepicker = t())
          : (e.AirDatepicker = t());
      })(this, function () {
        return (function () {
          var e = {
              d: function (t, i) {
                for (var s in i)
                  e.o(i, s) &&
                    !e.o(t, s) &&
                    Object.defineProperty(t, s, { enumerable: !0, get: i[s] });
              },
              o: function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              },
            },
            t = {};
          e.d(t, {
            default: function () {
              return B;
            },
          });
          var i = {
              days: "days",
              months: "months",
              years: "years",
              day: "day",
              month: "month",
              year: "year",
              eventChangeViewDate: "changeViewDate",
              eventChangeCurrentView: "changeCurrentView",
              eventChangeFocusDate: "changeFocusDate",
              eventChangeSelectedDate: "changeSelectedDate",
              eventChangeTime: "changeTime",
              eventChangeLastSelectedDate: "changeLastSelectedDate",
              actionSelectDate: "selectDate",
              actionUnselectDate: "unselectDate",
              cssClassWeekend: "-weekend-",
            },
            s = {
              classes: "",
              inline: !1,
              locale: {
                days: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                months: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                monthsShort: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                today: "Today",
                clear: "Clear",
                dateFormat: "MM/dd/yyyy",
                timeFormat: "hh:mm aa",
                firstDay: 0,
              },
              startDate: new Date(),
              firstDay: "",
              weekends: [6, 0],
              dateFormat: "",
              altField: "",
              altFieldDateFormat: "T",
              toggleSelected: !0,
              keyboardNav: !0,
              selectedDates: !1,
              container: "",
              isMobile: !1,
              visible: !1,
              position: "bottom left",
              offset: 12,
              view: i.days,
              minView: i.days,
              showOtherMonths: !0,
              selectOtherMonths: !0,
              moveToOtherMonthsOnSelect: !0,
              showOtherYears: !0,
              selectOtherYears: !0,
              moveToOtherYearsOnSelect: !0,
              minDate: "",
              maxDate: "",
              disableNavWhenOutOfRange: !0,
              multipleDates: !1,
              multipleDatesSeparator: ", ",
              range: !1,
              dynamicRange: !0,
              buttons: !1,
              monthsField: "monthsShort",
              showEvent: "focus",
              autoClose: !1,
              prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
              nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
              navTitles: {
                days: "MMMM, <i>yyyy</i>",
                months: "yyyy",
                years: "yyyy1 - yyyy2",
              },
              timepicker: !1,
              onlyTimepicker: !1,
              dateTimeSeparator: " ",
              timeFormat: "",
              minHours: 0,
              maxHours: 24,
              minMinutes: 0,
              maxMinutes: 59,
              hoursStep: 1,
              minutesStep: 1,
              onSelect: !1,
              onChangeViewDate: !1,
              onChangeView: !1,
              onRenderCell: !1,
              onShow: !1,
              onHide: !1,
              onClickDayName: !1,
            };
          function a(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : document;
            return "string" == typeof e ? t.querySelector(e) : e;
          }
          function n() {
            let {
                tagName: e = "div",
                className: t = "",
                innerHtml: i = "",
                id: s = "",
                attrs: a = {},
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
              n = document.createElement(e);
            return (
              t && n.classList.add(...t.split(" ")),
              s && (n.id = s),
              i && (n.innerHTML = i),
              a && r(n, a),
              n
            );
          }
          function r(e, t) {
            for (let [i, s] of Object.entries(t))
              void 0 !== s && e.setAttribute(i, s);
            return e;
          }
          function h(e) {
            return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
          }
          function o(e) {
            let t = e.getHours(),
              { hours: i, dayPeriod: s } = l(t);
            return {
              year: e.getFullYear(),
              month: e.getMonth(),
              fullMonth:
                e.getMonth() + 1 < 10
                  ? "0" + (e.getMonth() + 1)
                  : e.getMonth() + 1,
              date: e.getDate(),
              fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
              day: e.getDay(),
              hours: t,
              fullHours: d(t),
              hours12: i,
              dayPeriod: s,
              fullHours12: d(i),
              minutes: e.getMinutes(),
              fullMinutes:
                e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
            };
          }
          function l(e) {
            return {
              dayPeriod: e > 11 ? "pm" : "am",
              hours: e % 12 == 0 ? 12 : e % 12,
            };
          }
          function d(e) {
            return e < 10 ? "0" + e : e;
          }
          function c(e) {
            let t = 10 * Math.floor(e.getFullYear() / 10);
            return [t, t + 9];
          }
          function u() {
            let e = [];
            for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++)
              i[s] = arguments[s];
            return (
              i.forEach((t) => {
                if ("object" == typeof t) for (let i in t) t[i] && e.push(i);
                else t && e.push(t);
              }),
              e.join(" ")
            );
          }
          function p(e, t) {
            let s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : i.days;
            if (!e || !t) return !1;
            let a = o(e),
              n = o(t);
            return {
              [i.days]:
                a.date === n.date && a.month === n.month && a.year === n.year,
              [i.months]: a.month === n.month && a.year === n.year,
              [i.years]: a.year === n.year,
            }[s];
          }
          function m(e, t, i) {
            let s = g(e, !1).getTime(),
              a = g(t, !1).getTime();
            return i ? s >= a : s > a;
          }
          function v(e, t) {
            return !m(e, t, !0);
          }
          function g(e) {
            let t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              i = new Date(e.getTime());
            return (
              "boolean" != typeof t ||
                t ||
                (function (e) {
                  e.setHours(0, 0, 0, 0);
                })(i),
              i
            );
          }
          function D(e, t, i) {
            e.length
              ? e.forEach((e) => {
                  e.addEventListener(t, i);
                })
              : e.addEventListener(t, i);
          }
          function y(e, t) {
            return (
              !(!e || e === document || e instanceof DocumentFragment) &&
              (e.matches(t) ? e : y(e.parentNode, t))
            );
          }
          function f(e, t, i) {
            return e > i ? i : e < t ? t : e;
          }
          function w(e) {
            for (
              var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1;
              s < t;
              s++
            )
              i[s - 1] = arguments[s];
            return (
              i
                .filter((e) => e)
                .forEach((t) => {
                  for (let [i, s] of Object.entries(t))
                    if (void 0 !== s && "[object Object]" === s.toString()) {
                      let t = void 0 !== e[i] ? e[i].toString() : void 0,
                        a = s.toString(),
                        n = Array.isArray(s) ? [] : {};
                      (e[i] = e[i] ? (t !== a ? n : e[i]) : n), w(e[i], s);
                    } else e[i] = s;
                }),
              e
            );
          }
          function b(e) {
            let t = e;
            return (
              e instanceof Date || (t = new Date(e)),
              isNaN(t.getTime()) &&
                (console.log(`Unable to convert value "${e}" to Date object`),
                (t = !1)),
              t
            );
          }
          function k(e) {
            let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
            return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
          }
          function $(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          class C {
            constructor() {
              let {
                type: e,
                date: t,
                dp: i,
                opts: s,
                body: a,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              $(this, "focus", () => {
                this.$cell.classList.add("-focus-"), (this.focused = !0);
              }),
                $(this, "removeFocus", () => {
                  this.$cell.classList.remove("-focus-"), (this.focused = !1);
                }),
                $(this, "select", () => {
                  this.$cell.classList.add("-selected-"), (this.selected = !0);
                }),
                $(this, "removeSelect", () => {
                  this.$cell.classList.remove(
                    "-selected-",
                    "-range-from-",
                    "-range-to-",
                  ),
                    (this.selected = !1);
                }),
                $(this, "onChangeSelectedDate", () => {
                  this.isDisabled ||
                    (this._handleSelectedStatus(),
                    this.opts.range && this._handleRangeStatus());
                }),
                $(this, "onChangeFocusDate", (e) => {
                  if (!e) return void (this.focused && this.removeFocus());
                  let t = p(e, this.date, this.type);
                  t ? this.focus() : !t && this.focused && this.removeFocus(),
                    this.opts.range && this._handleRangeStatus();
                }),
                $(
                  this,
                  "render",
                  () => (
                    (this.$cell.innerHTML = this._getHtml()),
                    (this.$cell.adpCell = this),
                    this.$cell
                  ),
                ),
                (this.type = e),
                (this.singleType = this.type.slice(0, -1)),
                (this.date = t),
                (this.dp = i),
                (this.opts = s),
                (this.body = a),
                (this.customData = !1),
                this.init();
            }
            init() {
              let { range: e, onRenderCell: t } = this.opts;
              t &&
                (this.customData = t({
                  date: this.date,
                  cellType: this.singleType,
                  datepicker: this.dp,
                })),
                this._createElement(),
                this._bindDatepickerEvents(),
                this._handleInitialFocusStatus(),
                this.dp.hasSelectedDates &&
                  (this._handleSelectedStatus(),
                  e && this._handleRangeStatus());
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            unbindDatepickerEvents() {
              this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            _createElement() {
              var e;
              let { year: t, month: i, date: s } = o(this.date),
                a =
                  (null === (e = this.customData) || void 0 === e
                    ? void 0
                    : e.attrs) || {};
              this.$cell = n({
                className: this._getClassName(),
                attrs: {
                  "data-year": t,
                  "data-month": i,
                  "data-date": s,
                  ...a,
                },
              });
            }
            _getClassName() {
              var e, t;
              let s = new Date(),
                { selectOtherMonths: a, selectOtherYears: n } = this.opts,
                { minDate: r, maxDate: h } = this.dp,
                { day: l } = o(this.date),
                d = this._isOutOfMinMaxRange(),
                c =
                  null === (e = this.customData) || void 0 === e
                    ? void 0
                    : e.disabled,
                m = u("air-datepicker-cell", `-${this.singleType}-`, {
                  "-current-": p(s, this.date, this.type),
                  "-min-date-": r && p(r, this.date, this.type),
                  "-max-date-": h && p(h, this.date, this.type),
                }),
                v = "";
              switch (this.type) {
                case i.days:
                  v = u({
                    "-weekend-": this.dp.isWeekend(l),
                    "-other-month-": this.isOtherMonth,
                    "-disabled-": (this.isOtherMonth && !a) || d || c,
                  });
                  break;
                case i.months:
                  v = u({ "-disabled-": d || c });
                  break;
                case i.years:
                  v = u({
                    "-other-decade-": this.isOtherDecade,
                    "-disabled-": d || (this.isOtherDecade && !n) || c,
                  });
              }
              return u(
                m,
                v,
                null === (t = this.customData) || void 0 === t
                  ? void 0
                  : t.classes,
              );
            }
            _getHtml() {
              var e;
              let { year: t, month: s, date: a } = o(this.date),
                { showOtherMonths: n, showOtherYears: r } = this.opts;
              if (null !== (e = this.customData) && void 0 !== e && e.html)
                return this.customData.html;
              switch (this.type) {
                case i.days:
                  return !n && this.isOtherMonth ? "" : a;
                case i.months:
                  return this.dp.locale[this.opts.monthsField][s];
                case i.years:
                  return !r && this.isOtherDecade ? "" : t;
              }
            }
            _isOutOfMinMaxRange() {
              let { minDate: e, maxDate: t } = this.dp,
                { type: s, date: a } = this,
                { month: n, year: r, date: h } = o(a),
                l = s === i.days,
                d = s === i.years,
                c =
                  !!e && new Date(r, d ? e.getMonth() : n, l ? h : e.getDate()),
                u =
                  !!t && new Date(r, d ? t.getMonth() : n, l ? h : t.getDate());
              return e && t
                ? v(c, e) || m(u, t)
                : e
                ? v(c, e)
                : t
                ? m(u, t)
                : void 0;
            }
            destroy() {
              this.unbindDatepickerEvents();
            }
            _handleRangeStatus() {
              let { rangeDateFrom: e, rangeDateTo: t } = this.dp,
                i = u({
                  "-in-range-":
                    e &&
                    t &&
                    ((s = this.date), (a = e), (n = t), m(s, a) && v(s, n)),
                  "-range-from-": e && p(this.date, e, this.type),
                  "-range-to-": t && p(this.date, t, this.type),
                });
              var s, a, n;
              this.$cell.classList.remove(
                "-range-from-",
                "-range-to-",
                "-in-range-",
              ),
                i && this.$cell.classList.add(...i.split(" "));
            }
            _handleSelectedStatus() {
              let e = this.dp._checkIfDateIsSelected(this.date, this.type);
              e ? this.select() : !e && this.selected && this.removeSelect();
            }
            _handleInitialFocusStatus() {
              p(this.dp.focusDate, this.date, this.type) && this.focus();
            }
            get isDisabled() {
              return this.$cell.matches(".-disabled-");
            }
            get isOtherMonth() {
              return this.dp.isOtherMonth(this.date);
            }
            get isOtherDecade() {
              return this.dp.isOtherDecade(this.date);
            }
          }
          function _(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          let M = {
            [i.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,
            [i.months]: `<div class="air-datepicker-body--cells -${i.months}-"></div>`,
            [i.years]: `<div class="air-datepicker-body--cells -${i.years}-"></div>`,
          };
          const S = ".air-datepicker-cell";
          class T {
            constructor(e) {
              let { dp: t, type: s, opts: a } = e;
              _(this, "handleClick", (e) => {
                let t = e.target.closest(S).adpCell;
                if (t.isDisabled) return;
                if (!this.dp.isMinViewReached) return void this.dp.down();
                let i = this.dp._checkIfDateIsSelected(t.date, t.type);
                i
                  ? this.dp._handleAlreadySelectedDates(i, t.date)
                  : this.dp.selectDate(t.date);
              }),
                _(this, "handleDayNameClick", (e) => {
                  let t = e.target.getAttribute("data-day-index");
                  this.opts.onClickDayName({
                    dayIndex: Number(t),
                    datepicker: this.dp,
                  });
                }),
                _(this, "onChangeCurrentView", (e) => {
                  e !== this.type ? this.hide() : (this.show(), this.render());
                }),
                _(this, "onMouseOverCell", (e) => {
                  let t = y(e.target, S);
                  this.dp.setFocusDate(!!t && t.adpCell.date);
                }),
                _(this, "onMouseOutCell", () => {
                  this.dp.setFocusDate(!1);
                }),
                _(this, "onClickBody", (e) => {
                  let { onClickDayName: t } = this.opts,
                    i = e.target;
                  i.closest(S) && this.handleClick(e),
                    t &&
                      i.closest(".air-datepicker-body--day-name") &&
                      this.handleDayNameClick(e);
                }),
                _(this, "onMouseDown", (e) => {
                  this.pressed = !0;
                  let t = y(e.target, S),
                    i = t && t.adpCell;
                  p(i.date, this.dp.rangeDateFrom) &&
                    (this.rangeFromFocused = !0),
                    p(i.date, this.dp.rangeDateTo) &&
                      (this.rangeToFocused = !0);
                }),
                _(this, "onMouseMove", (e) => {
                  if (!this.pressed || !this.dp.isMinViewReached) return;
                  e.preventDefault();
                  let t = y(e.target, S),
                    i = t && t.adpCell,
                    {
                      selectedDates: s,
                      rangeDateTo: a,
                      rangeDateFrom: n,
                    } = this.dp;
                  if (!i || i.isDisabled) return;
                  let { date: r } = i;
                  if (2 === s.length) {
                    if (this.rangeFromFocused && !m(r, a)) {
                      let { hours: e, minutes: t } = o(n);
                      r.setHours(e),
                        r.setMinutes(t),
                        (this.dp.rangeDateFrom = r),
                        this.dp.replaceDate(n, r);
                    }
                    if (this.rangeToFocused && !v(r, n)) {
                      let { hours: e, minutes: t } = o(a);
                      r.setHours(e),
                        r.setMinutes(t),
                        (this.dp.rangeDateTo = r),
                        this.dp.replaceDate(a, r);
                    }
                  }
                }),
                _(this, "onMouseUp", () => {
                  (this.pressed = !1),
                    (this.rangeFromFocused = !1),
                    (this.rangeToFocused = !1);
                }),
                _(this, "onChangeViewDate", (e, t) => {
                  if (!this.isVisible) return;
                  let s = c(e),
                    a = c(t);
                  switch (this.dp.currentView) {
                    case i.days:
                      if (p(e, t, i.months)) return;
                      break;
                    case i.months:
                      if (p(e, t, i.years)) return;
                      break;
                    case i.years:
                      if (s[0] === a[0] && s[1] === a[1]) return;
                  }
                  this.render();
                }),
                _(this, "render", () => {
                  this.destroyCells(),
                    this._generateCells(),
                    this.cells.forEach((e) => {
                      this.$cells.appendChild(e.render());
                    });
                }),
                (this.dp = t),
                (this.type = s),
                (this.opts = a),
                (this.cells = []),
                (this.$el = ""),
                (this.pressed = !1),
                (this.isVisible = !0),
                this.init();
            }
            init() {
              this._buildBaseHtml(),
                this.type === i.days && this.renderDayNames(),
                this.render(),
                this._bindEvents(),
                this._bindDatepickerEvents();
            }
            _bindEvents() {
              let { range: e, dynamicRange: t } = this.opts;
              D(this.$el, "mouseover", this.onMouseOverCell),
                D(this.$el, "mouseout", this.onMouseOutCell),
                D(this.$el, "click", this.onClickBody),
                e &&
                  t &&
                  (D(this.$el, "mousedown", this.onMouseDown),
                  D(this.$el, "mousemove", this.onMouseMove),
                  D(window.document, "mouseup", this.onMouseUp));
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeViewDate, this.onChangeViewDate),
                this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            _buildBaseHtml() {
              (this.$el = n({
                className: `air-datepicker-body -${this.type}-`,
                innerHtml: M[this.type],
              })),
                (this.$names = a(".air-datepicker-body--day-names", this.$el)),
                (this.$cells = a(".air-datepicker-body--cells", this.$el));
            }
            _getDayNamesHtml() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.dp.locale.firstDay,
                t = "",
                s = this.dp.isWeekend,
                { onClickDayName: a } = this.opts,
                n = e,
                r = 0;
              for (; r < 7; ) {
                let e = n % 7;
                (t += `<div class="${u("air-datepicker-body--day-name", {
                  [i.cssClassWeekend]: s(e),
                  "-clickable-": !!a,
                })}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`),
                  r++,
                  n++;
              }
              return t;
            }
            renderDayNames() {
              this.$names.innerHTML = this._getDayNamesHtml();
            }
            _generateCell(e) {
              let { type: t, dp: i, opts: s } = this;
              return new C({ type: t, dp: i, opts: s, date: e, body: this });
            }
            _generateCells() {
              T.getDatesFunction(this.type)(this.dp, (e) => {
                this.cells.push(this._generateCell(e));
              });
            }
            show() {
              (this.isVisible = !0), this.$el.classList.remove("-hidden-");
            }
            hide() {
              (this.isVisible = !1), this.$el.classList.add("-hidden-");
            }
            destroyCells() {
              this.cells.forEach((e) => e.destroy()),
                (this.cells = []),
                (this.$cells.innerHTML = "");
            }
            destroy() {
              this.destroyCells(),
                this.dp.off(i.eventChangeViewDate, this.onChangeViewDate),
                this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            static getDaysDates(e, t) {
              let {
                  viewDate: i,
                  locale: { firstDay: s },
                } = e,
                a = h(i),
                { year: n, month: r } = o(i),
                l = new Date(n, r, 1),
                d = new Date(n, r, a),
                c = l.getDay() - s,
                u = 6 - d.getDay() + s;
              (c = c < 0 ? c + 7 : c), (u = u > 6 ? u - 7 : u);
              let p = (function (e, t) {
                  let { year: i, month: s, date: a } = o(e);
                  return new Date(i, s, a - t);
                })(l, c),
                m = a + c + u,
                v = p.getDate(),
                { year: g, month: D } = o(p),
                y = 0;
              const f = [];
              for (; y < m; ) {
                let e = new Date(g, D, v + y);
                t && t(e), f.push(e), y++;
              }
              return f;
            }
            static getMonthsDates(e, t) {
              let { year: i } = e.parsedViewDate,
                s = 0,
                a = [];
              for (; s < 12; ) {
                const e = new Date(i, s);
                a.push(e), t && t(e), s++;
              }
              return a;
            }
            static getYearsDates(e, t) {
              let i = c(e.viewDate),
                s = i[0] - 1,
                a = i[1] + 1,
                n = s,
                r = [];
              for (; n <= a; ) {
                const e = new Date(n, 0);
                r.push(e), t && t(e), n++;
              }
              return r;
            }
            static getDatesFunction() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : i.days;
              return {
                [i.days]: T.getDaysDates,
                [i.months]: T.getMonthsDates,
                [i.years]: T.getYearsDates,
              }[e];
            }
          }
          function F(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          class V {
            constructor(e) {
              let { dp: t, opts: i } = e;
              F(this, "onClickNav", (e) => {
                let t = y(e.target, ".air-datepicker-nav--action");
                if (!t) return;
                let i = t.dataset.action;
                this.dp[i]();
              }),
                F(this, "onChangeViewDate", () => {
                  this.render(), this._resetNavStatus(), this.handleNavStatus();
                }),
                F(this, "onChangeCurrentView", () => {
                  this.render(), this._resetNavStatus(), this.handleNavStatus();
                }),
                F(this, "onClickNavTitle", () => {
                  this.dp.isFinalView || this.dp.up();
                }),
                F(this, "update", () => {
                  let { prevHtml: e, nextHtml: t } = this.opts;
                  (this.$prev.innerHTML = e),
                    (this.$next.innerHTML = t),
                    this._resetNavStatus(),
                    this.render(),
                    this.handleNavStatus();
                }),
                F(this, "renderDelay", () => {
                  setTimeout(this.render);
                }),
                F(this, "render", () => {
                  (this.$title.innerHTML = this._getTitle()),
                    (function (e, t) {
                      for (let i in t)
                        t[i] ? e.classList.add(i) : e.classList.remove(i);
                    })(this.$title, { "-disabled-": this.dp.isFinalView });
                }),
                (this.dp = t),
                (this.opts = i),
                this.init();
            }
            init() {
              this._createElement(),
                this._buildBaseHtml(),
                this._defineDOM(),
                this.render(),
                this.handleNavStatus(),
                this._bindEvents(),
                this._bindDatepickerEvents();
            }
            _defineDOM() {
              (this.$title = a(".air-datepicker-nav--title", this.$el)),
                (this.$prev = a('[data-action="prev"]', this.$el)),
                (this.$next = a('[data-action="next"]', this.$el));
            }
            _bindEvents() {
              this.$el.addEventListener("click", this.onClickNav),
                this.$title.addEventListener("click", this.onClickNavTitle);
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeViewDate, this.onChangeViewDate),
                this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView),
                this.isNavIsFunction &&
                  (this.dp.on(i.eventChangeSelectedDate, this.renderDelay),
                  this.dp.opts.timepicker &&
                    this.dp.on(i.eventChangeTime, this.render));
            }
            destroy() {
              this.dp.off(i.eventChangeViewDate, this.onChangeViewDate),
                this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView),
                this.isNavIsFunction &&
                  (this.dp.off(i.eventChangeSelectedDate, this.renderDelay),
                  this.dp.opts.timepicker &&
                    this.dp.off(i.eventChangeTime, this.render));
            }
            _createElement() {
              this.$el = n({ tagName: "nav", className: "air-datepicker-nav" });
            }
            _getTitle() {
              let { dp: e, opts: t } = this,
                i = t.navTitles[e.currentView];
              return "function" == typeof i
                ? i(e)
                : e.formatDate(e.viewDate, i);
            }
            handleNavStatus() {
              let { disableNavWhenOutOfRange: e } = this.opts,
                { minDate: t, maxDate: s } = this.dp;
              if ((!t && !s) || !e) return;
              let { year: a, month: n } = this.dp.parsedViewDate,
                r = !!t && o(t),
                h = !!s && o(s);
              switch (this.dp.currentView) {
                case i.days:
                  t && r.month >= n && r.year >= a && this._disableNav("prev"),
                    s &&
                      h.month <= n &&
                      h.year <= a &&
                      this._disableNav("next");
                  break;
                case i.months:
                  t && r.year >= a && this._disableNav("prev"),
                    s && h.year <= a && this._disableNav("next");
                  break;
                case i.years: {
                  let e = c(this.dp.viewDate);
                  t && r.year >= e[0] && this._disableNav("prev"),
                    s && h.year <= e[1] && this._disableNav("next");
                  break;
                }
              }
            }
            _disableNav(e) {
              a('[data-action="' + e + '"]', this.$el).classList.add(
                "-disabled-",
              );
            }
            _resetNavStatus() {
              !(function (e) {
                for (
                  var t = arguments.length,
                    i = new Array(t > 1 ? t - 1 : 0),
                    s = 1;
                  s < t;
                  s++
                )
                  i[s - 1] = arguments[s];
                e.length
                  ? e.forEach((e) => {
                      e.classList.remove(...i);
                    })
                  : e.classList.remove(...i);
              })(
                this.$el.querySelectorAll(".air-datepicker-nav--action"),
                "-disabled-",
              );
            }
            _buildBaseHtml() {
              let { prevHtml: e, nextHtml: t } = this.opts;
              this.$el.innerHTML = `<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`;
            }
            get isNavIsFunction() {
              let { navTitles: e } = this.opts;
              return Object.keys(e).find((t) => "function" == typeof e[t]);
            }
          }
          var x = {
            today: {
              content: (e) => e.locale.today,
              onClick: (e) => e.setViewDate(new Date()),
            },
            clear: {
              content: (e) => e.locale.clear,
              onClick: (e) => e.clear(),
            },
          };
          class H {
            constructor(e) {
              let { dp: t, opts: i } = e;
              (this.dp = t), (this.opts = i), this.init();
            }
            init() {
              this.createElement(), this.render();
            }
            createElement() {
              this.$el = n({ className: "air-datepicker-buttons" });
            }
            destroy() {
              this.$el.parentNode.removeChild(this.$el);
            }
            clearHtml() {
              return (this.$el.innerHTML = ""), this;
            }
            generateButtons() {
              let { buttons: e } = this.opts;
              Array.isArray(e) || (e = [e]),
                e.forEach((e) => {
                  let t = e;
                  "string" == typeof e && x[e] && (t = x[e]);
                  let i = this.createButton(t);
                  t.onClick && this.attachEventToButton(i, t.onClick),
                    this.$el.appendChild(i);
                });
            }
            attachEventToButton(e, t) {
              e.addEventListener("click", () => {
                t(this.dp);
              });
            }
            createButton(e) {
              let {
                content: t,
                className: i,
                tagName: s = "button",
                attrs: a = {},
              } = e;
              return n({
                tagName: s,
                innerHtml: `<span tabindex='-1'>${
                  "function" == typeof t ? t(this.dp) : t
                }</span>`,
                className: u("air-datepicker-button", i),
                attrs: a,
              });
            }
            render() {
              this.generateButtons();
            }
          }
          function E(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          class L {
            constructor() {
              let { opts: e, dp: t } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              E(this, "toggleTimepickerIsActive", (e) => {
                this.dp.timepickerIsActive = e;
              }),
                E(this, "onChangeSelectedDate", (e) => {
                  let { date: t, updateTime: i = !1 } = e;
                  t &&
                    (this.setMinMaxTime(t),
                    this.setCurrentTime(!!i && t),
                    this.addTimeToDate(t));
                }),
                E(this, "onChangeLastSelectedDate", (e) => {
                  e && (this.setTime(e), this.render());
                }),
                E(this, "onChangeInputRange", (e) => {
                  let t = e.target;
                  (this[t.getAttribute("name")] = t.value),
                    this.updateText(),
                    this.dp.trigger(i.eventChangeTime, {
                      hours: this.hours,
                      minutes: this.minutes,
                    });
                }),
                E(this, "onMouseEnterLeave", (e) => {
                  let t = e.target.getAttribute("name"),
                    i = this.$minutesText;
                  "hours" === t && (i = this.$hoursText),
                    i.classList.toggle("-focus-");
                }),
                E(this, "onFocus", () => {
                  this.toggleTimepickerIsActive(!0);
                }),
                E(this, "onBlur", () => {
                  this.toggleTimepickerIsActive(!1);
                }),
                (this.opts = e),
                (this.dp = t);
              let { timeFormat: s } = this.dp.locale;
              s && (s.match(k("h")) || s.match(k("hh"))) && (this.ampm = !0),
                this.init();
            }
            init() {
              this.setTime(this.dp.lastSelectedDate || this.dp.viewDate),
                this.createElement(),
                this.buildHtml(),
                this.defineDOM(),
                this.render(),
                this.bindDatepickerEvents(),
                this.bindDOMEvents();
            }
            bindDatepickerEvents() {
              this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.on(
                  i.eventChangeLastSelectedDate,
                  this.onChangeLastSelectedDate,
                );
            }
            bindDOMEvents() {
              let e = "input";
              navigator.userAgent.match(/trident/gi) && (e = "change"),
                D(this.$ranges, e, this.onChangeInputRange),
                D(this.$ranges, "mouseenter", this.onMouseEnterLeave),
                D(this.$ranges, "mouseleave", this.onMouseEnterLeave),
                D(this.$ranges, "focus", this.onFocus),
                D(this.$ranges, "mousedown", this.onFocus),
                D(this.$ranges, "blur", this.onBlur);
            }
            createElement() {
              this.$el = n({
                className: u("air-datepicker-time", {
                  "-am-pm-": this.dp.ampm,
                }),
              });
            }
            destroy() {
              this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.off(
                  i.eventChangeLastSelectedDate,
                  this.onChangeLastSelectedDate,
                ),
                this.$el.parentNode.removeChild(this.$el);
            }
            buildHtml() {
              let {
                ampm: e,
                hours: t,
                displayHours: i,
                minutes: s,
                minHours: a,
                minMinutes: n,
                maxHours: r,
                maxMinutes: h,
                dayPeriod: o,
                opts: { hoursStep: l, minutesStep: c },
              } = this;
              this.$el.innerHTML =
                `<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(
                  i,
                )}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(
                  s,
                )}</span>   ` +
                (e
                  ? `<span class='air-datepicker-time--current-ampm'>${o}</span>`
                  : "") +
                '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' +
                `      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">` +
                `      <input type="range" name="minutes" value="${s}" min="${n}" max="${h}" step="${c}"/>   </div></div>`;
            }
            defineDOM() {
              let e = (e) => a(e, this.$el);
              (this.$ranges = this.$el.querySelectorAll('[type="range"]')),
                (this.$hours = e('[name="hours"]')),
                (this.$minutes = e('[name="minutes"]')),
                (this.$hoursText = e(".air-datepicker-time--current-hours")),
                (this.$minutesText = e(
                  ".air-datepicker-time--current-minutes",
                )),
                (this.$ampm = e(".air-datepicker-time--current-ampm"));
            }
            setTime(e) {
              this.setMinMaxTime(e), this.setCurrentTime(e);
            }
            addTimeToDate(e) {
              e && (e.setHours(this.hours), e.setMinutes(this.minutes));
            }
            setMinMaxTime(e) {
              if ((this.setMinMaxTimeFromOptions(), e)) {
                let { minDate: t, maxDate: i } = this.dp;
                t && p(e, t) && this.setMinTimeFromMinDate(t),
                  i && p(e, i) && this.setMaxTimeFromMaxDate(i);
              }
            }
            setCurrentTime(e) {
              let { hours: t, minutes: i } = e ? o(e) : this;
              (this.hours = f(t, this.minHours, this.maxHours)),
                (this.minutes = f(i, this.minMinutes, this.maxMinutes));
            }
            setMinMaxTimeFromOptions() {
              let {
                minHours: e,
                minMinutes: t,
                maxHours: i,
                maxMinutes: s,
              } = this.opts;
              (this.minHours = f(e, 0, 23)),
                (this.minMinutes = f(t, 0, 59)),
                (this.maxHours = f(i, 0, 23)),
                (this.maxMinutes = f(s, 0, 59));
            }
            setMinTimeFromMinDate(e) {
              let { lastSelectedDate: t } = this.dp;
              (this.minHours = e.getHours()),
                t && t.getHours() > e.getHours()
                  ? (this.minMinutes = this.opts.minMinutes)
                  : (this.minMinutes = e.getMinutes());
            }
            setMaxTimeFromMaxDate(e) {
              let { lastSelectedDate: t } = this.dp;
              (this.maxHours = e.getHours()),
                t && t.getHours() < e.getHours()
                  ? (this.maxMinutes = this.opts.maxMinutes)
                  : (this.maxMinutes = e.getMinutes());
            }
            updateSliders() {
              (r(this.$hours, {
                min: this.minHours,
                max: this.maxHours,
              }).value = this.hours),
                (r(this.$minutes, {
                  min: this.minMinutes,
                  max: this.maxMinutes,
                }).value = this.minutes);
            }
            updateText() {
              (this.$hoursText.innerHTML = d(this.displayHours)),
                (this.$minutesText.innerHTML = d(this.minutes)),
                this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
            }
            set hours(e) {
              this._hours = e;
              let { hours: t, dayPeriod: i } = l(e);
              (this.displayHours = this.ampm ? t : e), (this.dayPeriod = i);
            }
            get hours() {
              return this._hours;
            }
            render() {
              this.updateSliders(), this.updateText();
            }
          }
          function O(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          class A {
            constructor(e) {
              let { dp: t, opts: i } = e;
              O(this, "pressedKeys", new Set()),
                O(
                  this,
                  "hotKeys",
                  new Map([
                    [
                      [
                        ["Control", "ArrowRight"],
                        ["Control", "ArrowUp"],
                      ],
                      (e) => e.month++,
                    ],
                    [
                      [
                        ["Control", "ArrowLeft"],
                        ["Control", "ArrowDown"],
                      ],
                      (e) => e.month--,
                    ],
                    [
                      [
                        ["Shift", "ArrowRight"],
                        ["Shift", "ArrowUp"],
                      ],
                      (e) => e.year++,
                    ],
                    [
                      [
                        ["Shift", "ArrowLeft"],
                        ["Shift", "ArrowDown"],
                      ],
                      (e) => e.year--,
                    ],
                    [
                      [
                        ["Alt", "ArrowRight"],
                        ["Alt", "ArrowUp"],
                      ],
                      (e) => (e.year += 10),
                    ],
                    [
                      [
                        ["Alt", "ArrowLeft"],
                        ["Alt", "ArrowDown"],
                      ],
                      (e) => (e.year -= 10),
                    ],
                    [["Control", "Shift", "ArrowUp"], (e, t) => t.up()],
                  ]),
                ),
                O(this, "handleHotKey", (e) => {
                  let t = this.hotKeys.get(e),
                    i = o(this.getInitialFocusDate());
                  t(i, this.dp);
                  let { year: s, month: a, date: n } = i,
                    r = h(new Date(s, a));
                  r < n && (n = r);
                  let l = this.dp.getClampedDate(new Date(s, a, n));
                  this.dp.setFocusDate(l, { viewDateTransition: !0 });
                }),
                O(this, "isHotKeyPressed", () => {
                  let e = !1,
                    t = this.pressedKeys.size,
                    i = (e) => this.pressedKeys.has(e);
                  for (let [s] of this.hotKeys) {
                    if (e) break;
                    if (Array.isArray(s[0]))
                      s.forEach((a) => {
                        e || t !== a.length || (e = a.every(i) && s);
                      });
                    else {
                      if (t !== s.length) continue;
                      e = s.every(i) && s;
                    }
                  }
                  return e;
                }),
                O(this, "isArrow", (e) => e >= 37 && e <= 40),
                O(this, "onKeyDown", (e) => {
                  let { key: t, which: i } = e,
                    {
                      dp: s,
                      dp: { focusDate: a },
                      opts: n,
                    } = this;
                  this.registerKey(t);
                  let r = this.isHotKeyPressed();
                  if (r) return e.preventDefault(), void this.handleHotKey(r);
                  if (this.isArrow(i))
                    return e.preventDefault(), void this.focusNextCell(t);
                  if ("Enter" === t) {
                    if (s.currentView !== n.minView) return void s.down();
                    if (a) {
                      let e = s._checkIfDateIsSelected(a);
                      return void (e
                        ? s._handleAlreadySelectedDates(e, a)
                        : s.selectDate(a));
                    }
                  }
                  "Escape" === t && this.dp.hide();
                }),
                O(this, "onKeyUp", (e) => {
                  this.removeKey(e.key);
                }),
                (this.dp = t),
                (this.opts = i),
                this.init();
            }
            init() {
              this.bindKeyboardEvents();
            }
            bindKeyboardEvents() {
              let { $el: e } = this.dp;
              e.addEventListener("keydown", this.onKeyDown),
                e.addEventListener("keyup", this.onKeyUp);
            }
            destroy() {
              let { $el: e } = this.dp;
              e.removeEventListener("keydown", this.onKeyDown),
                e.removeEventListener("keyup", this.onKeyUp),
                (this.hotKeys = null),
                (this.pressedKeys = null);
            }
            getInitialFocusDate() {
              let {
                  focusDate: e,
                  currentView: t,
                  selectedDates: s,
                  parsedViewDate: { year: a, month: n },
                } = this.dp,
                r = e || s[s.length - 1];
              if (!r)
                switch (t) {
                  case i.days:
                    r = new Date(a, n, new Date().getDate());
                    break;
                  case i.months:
                    r = new Date(a, n, 1);
                    break;
                  case i.years:
                    r = new Date(a, 0, 1);
                }
              return r;
            }
            focusNextCell(e) {
              let t = this.getInitialFocusDate(),
                { currentView: s } = this.dp,
                { days: a, months: n, years: r } = i,
                h = o(t),
                l = h.year,
                d = h.month,
                c = h.date;
              switch (e) {
                case "ArrowLeft":
                  s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
                  break;
                case "ArrowUp":
                  s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
                  break;
                case "ArrowRight":
                  s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
                  break;
                case "ArrowDown":
                  s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
              }
              let u = this.dp.getClampedDate(new Date(l, d, c));
              this.dp.setFocusDate(u, { viewDateTransition: !0 });
            }
            registerKey(e) {
              this.pressedKeys.add(e);
            }
            removeKey(e) {
              this.pressedKeys.delete(e);
            }
          }
          let N = {
            on(e, t) {
              this.__events || (this.__events = {}),
                this.__events[e]
                  ? this.__events[e].push(t)
                  : (this.__events[e] = [t]);
            },
            off(e, t) {
              this.__events &&
                this.__events[e] &&
                (this.__events[e] = this.__events[e].filter((e) => e !== t));
            },
            removeAllEvents() {
              this.__events = {};
            },
            trigger(e) {
              for (
                var t = arguments.length,
                  i = new Array(t > 1 ? t - 1 : 0),
                  s = 1;
                s < t;
                s++
              )
                i[s - 1] = arguments[s];
              this.__events &&
                this.__events[e] &&
                this.__events[e].forEach((e) => {
                  e(...i);
                });
            },
          };
          function I(e, t, i) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var i = e[Symbol.toPrimitive];
                  if (void 0 !== i) {
                    var s = i.call(e, "string");
                    if ("object" != typeof s) return s;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          let P = "",
            j = "",
            R = !1;
          class B {
            static buildGlobalContainer(e) {
              (R = !0),
                (P = n({ className: e, id: e })),
                a("body").appendChild(P);
            }
            constructor(e, t) {
              var r = this;
              if (
                (I(this, "viewIndexes", [i.days, i.months, i.years]),
                I(this, "next", () => {
                  let { year: e, month: t } = this.parsedViewDate;
                  switch (this.currentView) {
                    case i.days:
                      this.setViewDate(new Date(e, t + 1, 1));
                      break;
                    case i.months:
                      this.setViewDate(new Date(e + 1, t, 1));
                      break;
                    case i.years:
                      this.setViewDate(new Date(e + 10, 0, 1));
                  }
                }),
                I(this, "prev", () => {
                  let { year: e, month: t } = this.parsedViewDate;
                  switch (this.currentView) {
                    case i.days:
                      this.setViewDate(new Date(e, t - 1, 1));
                      break;
                    case i.months:
                      this.setViewDate(new Date(e - 1, t, 1));
                      break;
                    case i.years:
                      this.setViewDate(new Date(e - 10, 0, 1));
                  }
                }),
                I(this, "_finishHide", () => {
                  (this.hideAnimation = !1),
                    this._destroyComponents(),
                    this.$container.removeChild(this.$datepicker);
                }),
                I(this, "setPosition", function (e) {
                  let t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if ("function" == typeof (e = e || r.opts.position))
                    return void (r.customHide = e({
                      $datepicker: r.$datepicker,
                      $target: r.$el,
                      $pointer: r.$pointer,
                      isViewChange: t,
                      done: r._finishHide,
                    }));
                  let i,
                    s,
                    { isMobile: a } = r.opts,
                    n = r.$el.getBoundingClientRect(),
                    h = r.$el.getBoundingClientRect(),
                    o = r.$datepicker.offsetParent,
                    l = r.$el.offsetParent,
                    d = r.$datepicker.getBoundingClientRect(),
                    c = e.split(" "),
                    u = window.scrollY,
                    p = window.scrollX,
                    m = r.opts.offset,
                    v = c[0],
                    g = c[1];
                  if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%";
                  else {
                    if (
                      (o === l &&
                        o !== document.body &&
                        ((h = {
                          top: r.$el.offsetTop,
                          left: r.$el.offsetLeft,
                          width: n.width,
                          height: r.$el.offsetHeight,
                        }),
                        (u = 0),
                        (p = 0)),
                      o !== l && o !== document.body)
                    ) {
                      let e = o.getBoundingClientRect();
                      (h = {
                        top: n.top - e.top,
                        left: n.left - e.left,
                        width: n.width,
                        height: n.height,
                      }),
                        (u = 0),
                        (p = 0);
                    }
                    switch (v) {
                      case "top":
                        i = h.top - d.height - m;
                        break;
                      case "right":
                        s = h.left + h.width + m;
                        break;
                      case "bottom":
                        i = h.top + h.height + m;
                        break;
                      case "left":
                        s = h.left - d.width - m;
                    }
                    switch (g) {
                      case "top":
                        i = h.top;
                        break;
                      case "right":
                        s = h.left + h.width - d.width;
                        break;
                      case "bottom":
                        i = h.top + h.height - d.height;
                        break;
                      case "left":
                        s = h.left;
                        break;
                      case "center":
                        /left|right/.test(v)
                          ? (i = h.top + h.height / 2 - d.height / 2)
                          : (s = h.left + h.width / 2 - d.width / 2);
                    }
                    r.$datepicker.style.cssText = `left: ${s + p}px; top: ${
                      i + u
                    }px`;
                  }
                }),
                I(this, "_setInputValue", () => {
                  let {
                      opts: e,
                      $altField: t,
                      locale: { dateFormat: i },
                    } = this,
                    { altFieldDateFormat: s, altField: a } = e;
                  a && t && (t.value = this._getInputValue(s)),
                    (this.$el.value = this._getInputValue(i));
                }),
                I(this, "_getInputValue", (e) => {
                  let { selectedDates: t, opts: i } = this,
                    { multipleDates: s, multipleDatesSeparator: a } = i;
                  if (!t.length) return "";
                  let n = "function" == typeof e,
                    r = n
                      ? e(s ? t : t[0])
                      : t.map((t) => this.formatDate(t, e));
                  return (r = n ? r : r.join(a)), r;
                }),
                I(this, "_checkIfDateIsSelected", function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : i.days,
                    s = !1;
                  return (
                    r.selectedDates.some((i) => {
                      let a = p(e, i, t);
                      return (s = a && i), a;
                    }),
                    s
                  );
                }),
                I(this, "_scheduleCallAfterTransition", (e) => {
                  this._cancelScheduledCall(),
                    e && e(!1),
                    (this._onTransitionEnd = () => {
                      e && e(!0);
                    }),
                    this.$datepicker.addEventListener(
                      "transitionend",
                      this._onTransitionEnd,
                      { once: !0 },
                    );
                }),
                I(this, "_cancelScheduledCall", () => {
                  this.$datepicker.removeEventListener(
                    "transitionend",
                    this._onTransitionEnd,
                  );
                }),
                I(this, "setViewDate", (e) => {
                  if (!((e = b(e)) instanceof Date)) return;
                  if (p(e, this.viewDate)) return;
                  let t = this.viewDate;
                  this.viewDate = e;
                  let { onChangeViewDate: s } = this.opts;
                  if (s) {
                    let { month: e, year: t } = this.parsedViewDate;
                    s({ month: e, year: t, decade: this.curDecade });
                  }
                  this.trigger(i.eventChangeViewDate, e, t);
                }),
                I(this, "setFocusDate", function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (!e || (e = b(e)) instanceof Date) &&
                    ((r.focusDate = e),
                    r.opts.range && e && r._handleRangeOnFocus(),
                    r.trigger(i.eventChangeFocusDate, e, t));
                }),
                I(this, "setCurrentView", (e) => {
                  if (this.viewIndexes.includes(e)) {
                    if (
                      ((this.currentView = e),
                      this.elIsInput &&
                        this.visible &&
                        this.setPosition(void 0, !0),
                      this.trigger(i.eventChangeCurrentView, e),
                      !this.views[e])
                    ) {
                      let t = (this.views[e] = new T({
                        dp: this,
                        opts: this.opts,
                        type: e,
                      }));
                      this.shouldUpdateDOM && this.$content.appendChild(t.$el);
                    }
                    this.opts.onChangeView && this.opts.onChangeView(e);
                  }
                }),
                I(this, "_updateLastSelectedDate", (e) => {
                  (this.lastSelectedDate = e),
                    this.trigger(i.eventChangeLastSelectedDate, e);
                }),
                I(this, "destroy", () => {
                  let { showEvent: e, isMobile: t } = this.opts,
                    i = this.$datepicker.parentNode;
                  i && i.removeChild(this.$datepicker),
                    this.$el.removeEventListener(e, this._onFocus),
                    this.$el.removeEventListener("blur", this._onBlur),
                    window.removeEventListener("resize", this._onResize),
                    t && this._removeMobileAttributes(),
                    this.keyboardNav && this.keyboardNav.destroy(),
                    (this.views = null),
                    (this.nav = null),
                    (this.$datepicker = null),
                    (this.opts = null),
                    (this.$customContainer = null),
                    (this.viewDate = null),
                    (this.focusDate = null),
                    (this.selectedDates = null),
                    (this.rangeDateFrom = null),
                    (this.rangeDateTo = null);
                }),
                I(this, "update", function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = w({}, r.opts);
                  w(r.opts, e);
                  let {
                      timepicker: s,
                      buttons: a,
                      range: n,
                      selectedDates: h,
                      isMobile: o,
                    } = r.opts,
                    l = r.visible || r.treatAsInline;
                  r._createMinMaxDates(),
                    r._limitViewDateByMaxMinDates(),
                    r._handleLocale(),
                    !t.selectedDates && h && r.selectDate(h),
                    e.view && r.setCurrentView(e.view),
                    r._setInputValue(),
                    t.range && !n
                      ? ((r.rangeDateTo = !1), (r.rangeDateFrom = !1))
                      : !t.range &&
                        n &&
                        r.selectedDates.length &&
                        ((r.rangeDateFrom = r.selectedDates[0]),
                        (r.rangeDateTo = r.selectedDates[1])),
                    t.timepicker && !s
                      ? (l && r.timepicker.destroy(),
                        (r.timepicker = !1),
                        r.$timepicker.parentNode.removeChild(r.$timepicker))
                      : !t.timepicker && s && r._addTimepicker(),
                    !t.buttons && a
                      ? r._addButtons()
                      : t.buttons && !a
                      ? (r.buttons.destroy(),
                        r.$buttons.parentNode.removeChild(r.$buttons))
                      : l && t.buttons && a && r.buttons.clearHtml().render(),
                    !t.isMobile && o
                      ? (r.treatAsInline || j || r._createMobileOverlay(),
                        r._addMobileAttributes(),
                        r.visible && r._showMobileOverlay())
                      : t.isMobile &&
                        !o &&
                        (r._removeMobileAttributes(),
                        r.visible &&
                          (j.classList.remove("-active-"),
                          "function" != typeof r.opts.position &&
                            r.setPosition())),
                    l &&
                      (r.nav.update(),
                      r.views[r.currentView].render(),
                      r.currentView === i.days &&
                        r.views[r.currentView].renderDayNames());
                }),
                I(this, "isOtherMonth", (e) => {
                  let { month: t } = o(e);
                  return t !== this.parsedViewDate.month;
                }),
                I(this, "isOtherYear", (e) => {
                  let { year: t } = o(e);
                  return t !== this.parsedViewDate.year;
                }),
                I(this, "isOtherDecade", (e) => {
                  let { year: t } = o(e),
                    [i, s] = c(this.viewDate);
                  return t < i || t > s;
                }),
                I(this, "_onChangeSelectedDate", (e) => {
                  let { silent: t } = e;
                  setTimeout(() => {
                    this._setInputValue(),
                      this.opts.onSelect && !t && this._triggerOnSelect();
                  });
                }),
                I(this, "_onChangeFocusedDate", function (e) {
                  let { viewDateTransition: t } =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (!e) return;
                  let i = !1;
                  t &&
                    (i =
                      r.isOtherMonth(e) ||
                      r.isOtherYear(e) ||
                      r.isOtherDecade(e)),
                    i && r.setViewDate(e),
                    r.opts.onFocus &&
                      r.opts.onFocus({ datepicker: r, date: e });
                }),
                I(this, "_onChangeTime", (e) => {
                  let { hours: t, minutes: i } = e,
                    s = new Date(),
                    {
                      lastSelectedDate: a,
                      opts: { onSelect: n },
                    } = this,
                    r = a;
                  a || (r = s);
                  let h = this.getCell(r, this.currentViewSingular),
                    o = h && h.adpCell;
                  (o && o.isDisabled) ||
                    (r.setHours(t),
                    r.setMinutes(i),
                    a
                      ? (this._setInputValue(), n && this._triggerOnSelect())
                      : this.selectDate(r));
                }),
                I(this, "_onFocus", (e) => {
                  this.visible || this.show();
                }),
                I(this, "_onBlur", (e) => {
                  this.inFocus ||
                    !this.visible ||
                    this.opts.isMobile ||
                    this.hide();
                }),
                I(this, "_onMouseDown", (e) => {
                  this.inFocus = !0;
                }),
                I(this, "_onMouseUp", (e) => {
                  (this.inFocus = !1), this.$el.focus();
                }),
                I(this, "_onResize", () => {
                  this.visible &&
                    "function" != typeof this.opts.position &&
                    this.setPosition();
                }),
                I(this, "_onClickOverlay", () => {
                  this.visible && this.hide();
                }),
                I(this, "getViewDates", function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : i.days;
                  return T.getDatesFunction(e)(r);
                }),
                I(this, "isWeekend", (e) => this.opts.weekends.includes(e)),
                I(this, "getClampedDate", (e) => {
                  let { minDate: t, maxDate: i } = this,
                    s = e;
                  return i && m(e, i) ? (s = i) : t && v(e, t) && (s = t), s;
                }),
                (this.$el = a(e)),
                !this.$el)
              )
                return;
              (this.$datepicker = n({ className: "air-datepicker" })),
                (this.opts = w({}, s, t)),
                (this.$customContainer =
                  !!this.opts.container && a(this.opts.container)),
                (this.$altField = a(this.opts.altField || !1));
              let { view: h, startDate: l } = this.opts;
              l || (this.opts.startDate = new Date()),
                "INPUT" === this.$el.nodeName && (this.elIsInput = !0),
                (this.inited = !1),
                (this.visible = !1),
                (this.viewDate = b(this.opts.startDate)),
                (this.focusDate = !1),
                (this.initialReadonly = this.$el.getAttribute("readonly")),
                (this.customHide = !1),
                (this.currentView = h),
                (this.selectedDates = []),
                (this.views = {}),
                (this.keys = []),
                (this.rangeDateFrom = ""),
                (this.rangeDateTo = ""),
                (this.timepickerIsActive = !1),
                (this.treatAsInline = this.opts.inline || !this.elIsInput),
                this.init();
            }
            init() {
              let {
                  opts: e,
                  treatAsInline: t,
                  opts: {
                    inline: i,
                    isMobile: s,
                    selectedDates: n,
                    keyboardNav: r,
                    onlyTimepicker: h,
                  },
                } = this,
                o = a("body");
              (!R || (R && P && !o.contains(P))) &&
                !i &&
                this.elIsInput &&
                !this.$customContainer &&
                B.buildGlobalContainer(B.defaultGlobalContainerId),
                !s || j || t || this._createMobileOverlay(),
                this._handleLocale(),
                this._bindSubEvents(),
                this._createMinMaxDates(),
                this._limitViewDateByMaxMinDates(),
                this.elIsInput &&
                  (i || this._bindEvents(),
                  r && !h && (this.keyboardNav = new A({ dp: this, opts: e }))),
                n && this.selectDate(n, { silent: !0 }),
                this.opts.visible && !t && this.show(),
                s && !t && this.$el.setAttribute("readonly", !0),
                t && this._createComponents();
            }
            _createMobileOverlay() {
              (j = n({ className: "air-datepicker-overlay" })),
                P.appendChild(j);
            }
            _createComponents() {
              let {
                opts: e,
                treatAsInline: t,
                opts: {
                  inline: i,
                  buttons: s,
                  timepicker: a,
                  position: n,
                  classes: r,
                  onlyTimepicker: h,
                  isMobile: o,
                },
              } = this;
              this._buildBaseHtml(),
                this.elIsInput && (i || this._setPositionClasses(n)),
                (!i && this.elIsInput) ||
                  this.$datepicker.classList.add("-inline-"),
                r && this.$datepicker.classList.add(...r.split(" ")),
                h && this.$datepicker.classList.add("-only-timepicker-"),
                o && !t && this._addMobileAttributes(),
                (this.views[this.currentView] = new T({
                  dp: this,
                  type: this.currentView,
                  opts: e,
                })),
                (this.nav = new V({ dp: this, opts: e })),
                a && this._addTimepicker(),
                s && this._addButtons(),
                this.$content.appendChild(this.views[this.currentView].$el),
                this.$nav.appendChild(this.nav.$el);
            }
            _destroyComponents() {
              for (let e in this.views) this.views[e].destroy();
              (this.views = {}),
                this.nav.destroy(),
                this.timepicker && this.timepicker.destroy();
            }
            _addMobileAttributes() {
              j.addEventListener("click", this._onClickOverlay),
                this.$datepicker.classList.add("-is-mobile-"),
                this.$el.setAttribute("readonly", !0);
            }
            _removeMobileAttributes() {
              j.removeEventListener("click", this._onClickOverlay),
                this.$datepicker.classList.remove("-is-mobile-"),
                this.initialReadonly ||
                  "" === this.initialReadonly ||
                  this.$el.removeAttribute("readonly");
            }
            _createMinMaxDates() {
              let { minDate: e, maxDate: t } = this.opts;
              (this.minDate = !!e && b(e)), (this.maxDate = !!t && b(t));
            }
            _addTimepicker() {
              (this.$timepicker = n({ className: "air-datepicker--time" })),
                this.$datepicker.appendChild(this.$timepicker),
                (this.timepicker = new L({ dp: this, opts: this.opts })),
                this.$timepicker.appendChild(this.timepicker.$el);
            }
            _addButtons() {
              (this.$buttons = n({ className: "air-datepicker--buttons" })),
                this.$datepicker.appendChild(this.$buttons),
                (this.buttons = new H({ dp: this, opts: this.opts })),
                this.$buttons.appendChild(this.buttons.$el);
            }
            _bindSubEvents() {
              this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate),
                this.on(i.eventChangeFocusDate, this._onChangeFocusedDate),
                this.on(i.eventChangeTime, this._onChangeTime);
            }
            _buildBaseHtml() {
              let { inline: e } = this.opts;
              var t, i;
              this.elIsInput
                ? e
                  ? ((t = this.$datepicker),
                    (i = this.$el).parentNode.insertBefore(t, i.nextSibling))
                  : this.$container.appendChild(this.$datepicker)
                : this.$el.appendChild(this.$datepicker),
                (this.$datepicker.innerHTML =
                  '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>'),
                (this.$content = a(
                  ".air-datepicker--content",
                  this.$datepicker,
                )),
                (this.$pointer = a(
                  ".air-datepicker--pointer",
                  this.$datepicker,
                )),
                (this.$nav = a(
                  ".air-datepicker--navigation",
                  this.$datepicker,
                ));
            }
            _handleLocale() {
              let {
                locale: e,
                dateFormat: t,
                firstDay: i,
                timepicker: s,
                onlyTimepicker: a,
                timeFormat: n,
                dateTimeSeparator: r,
              } = this.opts;
              var h;
              (this.locale = ((h = e), JSON.parse(JSON.stringify(h)))),
                t && (this.locale.dateFormat = t),
                void 0 !== n && "" !== n && (this.locale.timeFormat = n);
              let { timeFormat: o } = this.locale;
              if (
                ("" !== i && (this.locale.firstDay = i),
                s && "function" != typeof t)
              ) {
                let e = o ? r : "";
                this.locale.dateFormat = [this.locale.dateFormat, o || ""].join(
                  e,
                );
              }
              a &&
                "function" != typeof t &&
                (this.locale.dateFormat = this.locale.timeFormat);
            }
            _setPositionClasses(e) {
              if ("function" == typeof e)
                return void this.$datepicker.classList.add("-custom-position-");
              let t = (e = e.split(" "))[0],
                i = `air-datepicker -${t}-${e[1]}- -from-${t}-`;
              this.$datepicker.classList.add(...i.split(" "));
            }
            _bindEvents() {
              this.$el.addEventListener(this.opts.showEvent, this._onFocus),
                this.$el.addEventListener("blur", this._onBlur),
                this.$datepicker.addEventListener(
                  "mousedown",
                  this._onMouseDown,
                ),
                this.$datepicker.addEventListener("mouseup", this._onMouseUp),
                window.addEventListener("resize", this._onResize);
            }
            _limitViewDateByMaxMinDates() {
              let { viewDate: e, minDate: t, maxDate: i } = this;
              i && m(e, i) && this.setViewDate(i),
                t && v(e, t) && this.setViewDate(t);
            }
            formatDate() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.viewDate,
                t = arguments.length > 1 ? arguments[1] : void 0;
              if (((e = b(e)), !(e instanceof Date))) return;
              let i = t,
                s = this.locale,
                a = o(e),
                n = a.dayPeriod,
                r = c(e),
                h = B.replacer,
                l = {
                  T: e.getTime(),
                  m: a.minutes,
                  mm: a.fullMinutes,
                  h: a.hours12,
                  hh: a.fullHours12,
                  H: a.hours,
                  HH: a.fullHours,
                  aa: n,
                  AA: n.toUpperCase(),
                  E: s.daysShort[a.day],
                  EEEE: s.days[a.day],
                  d: a.date,
                  dd: a.fullDate,
                  M: a.month + 1,
                  MM: a.fullMonth,
                  MMM: s.monthsShort[a.month],
                  MMMM: s.months[a.month],
                  yy: a.year.toString().slice(-2),
                  yyyy: a.year,
                  yyyy1: r[0],
                  yyyy2: r[1],
                };
              for (let [e, t] of Object.entries(l)) i = h(i, k(e), t);
              return i;
            }
            down(e) {
              this._handleUpDownActions(e, "down");
            }
            up(e) {
              this._handleUpDownActions(e, "up");
            }
            selectDate(e) {
              let t,
                s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { currentView: a, parsedViewDate: n, selectedDates: r } = this,
                { updateTime: h } = s,
                {
                  moveToOtherMonthsOnSelect: o,
                  moveToOtherYearsOnSelect: l,
                  multipleDates: d,
                  range: c,
                  autoClose: u,
                  onBeforeSelect: p,
                } = this.opts,
                v = r.length;
              if (Array.isArray(e))
                return (
                  e.forEach((e) => {
                    this.selectDate(e, s);
                  }),
                  new Promise((e) => {
                    setTimeout(e);
                  })
                );
              if ((e = b(e)) instanceof Date) {
                if (p && !p({ date: e, datepicker: this }))
                  return Promise.resolve();
                if (
                  (a === i.days &&
                    e.getMonth() !== n.month &&
                    o &&
                    (t = new Date(e.getFullYear(), e.getMonth(), 1)),
                  a === i.years &&
                    e.getFullYear() !== n.year &&
                    l &&
                    (t = new Date(e.getFullYear(), 0, 1)),
                  t && this.setViewDate(t),
                  d && !c)
                ) {
                  if (v === d) return;
                  this._checkIfDateIsSelected(e) || r.push(e);
                } else if (c)
                  switch (v) {
                    case 1:
                      r.push(e),
                        this.rangeDateTo || (this.rangeDateTo = e),
                        m(this.rangeDateFrom, this.rangeDateTo) &&
                          ((this.rangeDateTo = this.rangeDateFrom),
                          (this.rangeDateFrom = e)),
                        (this.selectedDates = [
                          this.rangeDateFrom,
                          this.rangeDateTo,
                        ]);
                      break;
                    case 2:
                      (this.selectedDates = [e]),
                        (this.rangeDateFrom = e),
                        (this.rangeDateTo = "");
                      break;
                    default:
                      (this.selectedDates = [e]), (this.rangeDateFrom = e);
                  }
                else this.selectedDates = [e];
                return (
                  this.trigger(i.eventChangeSelectedDate, {
                    action: i.actionSelectDate,
                    silent: null == s ? void 0 : s.silent,
                    date: e,
                    updateTime: h,
                  }),
                  this._updateLastSelectedDate(e),
                  u &&
                    !this.timepickerIsActive &&
                    this.visible &&
                    (d || c ? c && 1 === v && this.hide() : this.hide()),
                  new Promise((e) => {
                    setTimeout(e);
                  })
                );
              }
            }
            unselectDate(e) {
              let t = this.selectedDates,
                s = this;
              if ((e = b(e)) instanceof Date)
                return t.some((a, n) => {
                  if (p(a, e))
                    return (
                      t.splice(n, 1),
                      s.selectedDates.length
                        ? s._updateLastSelectedDate(
                            s.selectedDates[s.selectedDates.length - 1],
                          )
                        : ((s.rangeDateFrom = ""),
                          (s.rangeDateTo = ""),
                          s._updateLastSelectedDate(!1)),
                      this.trigger(i.eventChangeSelectedDate, {
                        action: i.actionUnselectDate,
                        date: e,
                      }),
                      !0
                    );
                });
            }
            replaceDate(e, t) {
              let s = this.selectedDates.find((t) => p(t, e, this.currentView)),
                a = this.selectedDates.indexOf(s);
              a < 0 ||
                p(this.selectedDates[a], t, this.currentView) ||
                ((this.selectedDates[a] = t),
                this.trigger(i.eventChangeSelectedDate, {
                  action: i.actionSelectDate,
                  date: t,
                  updateTime: !0,
                }),
                this._updateLastSelectedDate(t));
            }
            clear() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                (this.selectedDates = []),
                (this.rangeDateFrom = !1),
                (this.rangeDateTo = !1),
                (this.lastSelectedDate = !1),
                this.trigger(i.eventChangeSelectedDate, {
                  action: i.actionUnselectDate,
                  silent: e.silent,
                }),
                new Promise((e) => {
                  setTimeout(e);
                })
              );
            }
            show() {
              let { onShow: e, isMobile: t } = this.opts;
              this._cancelScheduledCall(),
                this.visible || this.hideAnimation || this._createComponents(),
                this.setPosition(this.opts.position),
                this.$datepicker.classList.add("-active-"),
                (this.visible = !0),
                e && this._scheduleCallAfterTransition(e),
                t && this._showMobileOverlay();
            }
            hide() {
              let { onHide: e, isMobile: t } = this.opts,
                i = this._hasTransition();
              (this.visible = !1),
                (this.hideAnimation = !0),
                this.$datepicker.classList.remove("-active-"),
                this.customHide && this.customHide(),
                this.elIsInput && this.$el.blur(),
                this._scheduleCallAfterTransition((t) => {
                  !this.customHide &&
                    ((t && i) || (!t && !i)) &&
                    this._finishHide(),
                    e && e(t);
                }),
                t && j.classList.remove("-active-");
            }
            _triggerOnSelect() {
              let e = [],
                t = [],
                {
                  selectedDates: i,
                  locale: s,
                  opts: { onSelect: a, multipleDates: n, range: r },
                } = this,
                h = n || r,
                o = "function" == typeof s.dateFormat;
              i.length &&
                ((e = i.map(g)),
                (t = o
                  ? n
                    ? s.dateFormat(e)
                    : e.map((e) => s.dateFormat(e))
                  : e.map((e) => this.formatDate(e, s.dateFormat)))),
                a({
                  date: h ? e : e[0],
                  formattedDate: h ? t : t[0],
                  datepicker: this,
                });
            }
            _handleAlreadySelectedDates(e, t) {
              const { range: i, toggleSelected: s } = this.opts;
              let a =
                "function" == typeof s ? s({ datepicker: this, date: t }) : s;
              i &&
                (a || (2 !== this.selectedDates.length && this.selectDate(t))),
                a ? this.unselectDate(t) : this._updateLastSelectedDate(e);
            }
            _handleUpDownActions(e, t) {
              if (
                !((e = b(e || this.focusDate || this.viewDate)) instanceof Date)
              )
                return;
              let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
              i > 2 && (i = 2),
                i < 0 && (i = 0),
                this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)),
                this.setCurrentView(this.viewIndexes[i]);
            }
            _handleRangeOnFocus() {
              1 === this.selectedDates.length &&
                (m(this.selectedDates[0], this.focusDate)
                  ? ((this.rangeDateTo = this.selectedDates[0]),
                    (this.rangeDateFrom = this.focusDate))
                  : ((this.rangeDateTo = this.focusDate),
                    (this.rangeDateFrom = this.selectedDates[0])));
            }
            getCell(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i.day;
              if (!((e = b(e)) instanceof Date)) return;
              let { year: s, month: a, date: n } = o(e),
                r = `[data-year="${s}"]`,
                h = `[data-month="${a}"]`,
                l = {
                  [i.day]: `${r}${h}[data-date="${n}"]`,
                  [i.month]: `${r}${h}`,
                  [i.year]: `${r}`,
                };
              return this.views[this.currentView].$el.querySelector(l[t]);
            }
            _showMobileOverlay() {
              j.classList.add("-active-");
            }
            _hasTransition() {
              return (
                window
                  .getComputedStyle(this.$datepicker)
                  .getPropertyValue("transition-duration")
                  .split(", ")
                  .reduce((e, t) => parseFloat(t) + e, 0) > 0
              );
            }
            get shouldUpdateDOM() {
              return this.visible || this.treatAsInline;
            }
            get parsedViewDate() {
              return o(this.viewDate);
            }
            get currentViewSingular() {
              return this.currentView.slice(0, -1);
            }
            get curDecade() {
              return c(this.viewDate);
            }
            get viewIndex() {
              return this.viewIndexes.indexOf(this.currentView);
            }
            get isFinalView() {
              return this.currentView === i.years;
            }
            get hasSelectedDates() {
              return this.selectedDates.length > 0;
            }
            get isMinViewReached() {
              return (
                this.currentView === this.opts.minView ||
                this.currentView === i.days
              );
            }
            get $container() {
              return this.$customContainer || P;
            }
            static replacer(e, t, i) {
              return e.replace(t, function (e, t, s, a) {
                return t + i + a;
              });
            }
          }
          var K;
          return (
            I(B, "defaults", s),
            I(B, "version", "3.4.0"),
            I(B, "defaultGlobalContainerId", "air-datepicker-global-container"),
            (K = B.prototype),
            Object.assign(K, N),
            t.default
          );
        })();
      });

      while (!window.AirDatepicker) {
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      addStyle(`.air-datepicker-cell.-year-.-other-decade-,.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.air-datepicker-cell.-year-.-other-decade-:hover,.air-datepicker-cell.-day-.-other-month-:hover{color:var(--adp-color-other-month-hover)}.-disabled-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-disabled-.-focus-.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.-selected-.air-datepicker-cell.-year-.-other-decade-,.-selected-.air-datepicker-cell.-day-.-other-month-{color:#fff;background:var(--adp-background-color-selected-other-month)}.-selected-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-selected-.-focus-.air-datepicker-cell.-day-.-other-month-{background:var(--adp-background-color-selected-other-month-focused)}.-in-range-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range);color:var(--adp-color)}.-in-range-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.-focus-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range-focused)}.air-datepicker-cell.-year-.-other-decade-:empty,.air-datepicker-cell.-day-.-other-month-:empty{background:none;border:none}.air-datepicker-cell{border-radius:var(--adp-cell-border-radius);box-sizing:border-box;cursor:pointer;display:flex;position:relative;align-items:center;justify-content:center;z-index:1}.air-datepicker-cell.-focus-{background:var(--adp-cell-background-color-hover)}.air-datepicker-cell.-current-{color:var(--adp-color-current-date)}.air-datepicker-cell.-current-.-focus-{color:var(--adp-color)}.air-datepicker-cell.-current-.-in-range-{color:var(--adp-color-current-date)}.air-datepicker-cell.-disabled-{cursor:default;color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-in-range-{color:var(--adp-color-disabled-in-range)}.air-datepicker-cell.-disabled-.-current-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-in-range-{background:var(--adp-cell-background-color-in-range);border-radius:0}.air-datepicker-cell.-in-range-:hover{background:var(--adp-cell-background-color-in-range-hover)}.air-datepicker-cell.-range-from-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:var(--adp-cell-border-radius) 0 0 var(--adp-cell-border-radius)}.air-datepicker-cell.-range-to-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:0 var(--adp-cell-border-radius) var(--adp-cell-border-radius) 0}.air-datepicker-cell.-range-to-.-range-from-{border-radius:var(--adp-cell-border-radius)}.air-datepicker-cell.-selected-{color:#fff;border:none;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-current-{color:#fff;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-focus-{background:var(--adp-cell-background-color-selected-hover)}
.air-datepicker-body{transition:all var(--adp-transition-duration) var(--adp-transition-ease)}.air-datepicker-body.-hidden-{display:none}.air-datepicker-body--day-names{display:grid;grid-template-columns:repeat(7, var(--adp-day-cell-width));margin:8px 0 3px}.air-datepicker-body--day-name{color:var(--adp-day-name-color);display:flex;align-items:center;justify-content:center;flex:1;text-align:center;text-transform:uppercase;font-size:.8em}.air-datepicker-body--day-name.-clickable-{cursor:pointer}.air-datepicker-body--day-name.-clickable-:hover{color:var(--adp-day-name-color-hover)}.air-datepicker-body--cells{display:grid}.air-datepicker-body--cells.-days-{grid-template-columns:repeat(7, var(--adp-day-cell-width));grid-auto-rows:var(--adp-day-cell-height)}.air-datepicker-body--cells.-months-{grid-template-columns:repeat(3, 1fr);grid-auto-rows:var(--adp-month-cell-height)}.air-datepicker-body--cells.-years-{grid-template-columns:repeat(4, 1fr);grid-auto-rows:var(--adp-year-cell-height)}
.air-datepicker-nav{display:flex;justify-content:space-between;border-bottom:1px solid var(--adp-border-color-inner);min-height:var(--adp-nav-height);padding:var(--adp-padding);box-sizing:content-box}.-only-timepicker- .air-datepicker-nav{display:none}.air-datepicker-nav--title,.air-datepicker-nav--action{display:flex;cursor:pointer;align-items:center;justify-content:center}.air-datepicker-nav--action{width:var(--adp-nav-action-size);border-radius:var(--adp-border-radius);-webkit-user-select:none;-moz-user-select:none;user-select:none}.air-datepicker-nav--action:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--action:active{background:var(--adp-background-color-active)}.air-datepicker-nav--action.-disabled-{visibility:hidden}.air-datepicker-nav--action svg{width:32px;height:32px}.air-datepicker-nav--action path{fill:none;stroke:var(--adp-nav-arrow-color);stroke-width:2px}.air-datepicker-nav--title{border-radius:var(--adp-border-radius);padding:0 8px}.air-datepicker-nav--title i{font-style:normal;color:var(--adp-nav-color-secondary);margin-left:.3em}.air-datepicker-nav--title:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--title:active{background:var(--adp-background-color-active)}.air-datepicker-nav--title.-disabled-{cursor:default;background:none}
.air-datepicker-buttons{display:grid;grid-auto-columns:1fr;grid-auto-flow:column}.air-datepicker-button{display:inline-flex;color:var(--adp-btn-color);border-radius:var(--adp-btn-border-radius);cursor:pointer;height:var(--adp-btn-height);border:none;background:rgba(255,255,255,0)}.air-datepicker-button:hover{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover)}.air-datepicker-button:focus{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover);outline:none}.air-datepicker-button:active{background:var(--adp-btn-background-color-active)}.air-datepicker-button span{outline:none;display:flex;align-items:center;justify-content:center;width:100%;height:100%}
.air-datepicker-time{display:grid;grid-template-columns:max-content 1fr;grid-column-gap:12px;align-items:center;position:relative;padding:0 var(--adp-time-padding-inner)}.-only-timepicker- .air-datepicker-time{border-top:none}.air-datepicker-time--current{display:flex;align-items:center;flex:1;font-size:14px;text-align:center}.air-datepicker-time--current-colon{margin:0 2px 3px;line-height:1}.air-datepicker-time--current-hours,.air-datepicker-time--current-minutes{line-height:1;font-size:19px;font-family:"Century Gothic",CenturyGothic,AppleGothic,sans-serif;position:relative;z-index:1}.air-datepicker-time--current-hours:after,.air-datepicker-time--current-minutes:after{content:"";background:var(--adp-background-color-hover);border-radius:var(--adp-border-radius);position:absolute;left:-2px;top:-3px;right:-2px;bottom:-2px;z-index:-1;opacity:0}.air-datepicker-time--current-hours.-focus-:after,.air-datepicker-time--current-minutes.-focus-:after{opacity:1}.air-datepicker-time--current-ampm{text-transform:uppercase;align-self:flex-end;color:var(--adp-time-day-period-color);margin-left:6px;font-size:11px;margin-bottom:1px}.air-datepicker-time--row{display:flex;align-items:center;font-size:11px;height:17px;background:linear-gradient(to right, var(--adp-time-track-color), var(--adp-time-track-color)) left 50%/100% var(--adp-time-track-height) no-repeat}.air-datepicker-time--row:first-child{margin-bottom:4px}.air-datepicker-time--row input[type=range]{background:none;cursor:pointer;flex:1;height:100%;width:100%;padding:0;margin:0;-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-ms-tooltip{display:none}.air-datepicker-time--row input[type=range]:hover::-webkit-slider-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-moz-range-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-ms-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:focus{outline:none}.air-datepicker-time--row input[type=range]:focus::-webkit-slider-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-moz-range-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-ms-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-webkit-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-moz-range-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-moz-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-ms-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-ms-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{margin-top:calc(var(--adp-time-thumb-size)/2*-1)}.air-datepicker-time--row input[type=range]::-webkit-slider-runnable-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-moz-range-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-lower{background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-upper{background:rgba(0,0,0,0)}
.air-datepicker{--adp-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--adp-font-size: 14px;--adp-width: 246px;--adp-z-index: 100;--adp-padding: 4px;--adp-grid-areas: "nav" "body" "timepicker" "buttons";--adp-transition-duration: .3s;--adp-transition-ease: ease-out;--adp-transition-offset: 8px;--adp-background-color: #fff;--adp-background-color-hover: #f0f0f0;--adp-background-color-active: #eaeaea;--adp-background-color-in-range: rgba(92, 196, 239, .1);--adp-background-color-in-range-focused: rgba(92, 196, 239, .2);--adp-background-color-selected-other-month-focused: #8ad5f4;--adp-background-color-selected-other-month: #a2ddf6;--adp-color: #4a4a4a;--adp-color-secondary: #9c9c9c;--adp-accent-color: #4eb5e6;--adp-color-current-date: var(--adp-accent-color);--adp-color-other-month: #dedede;--adp-color-disabled: #aeaeae;--adp-color-disabled-in-range: #939393;--adp-color-other-month-hover: #c5c5c5;--adp-border-color: #dbdbdb;--adp-border-color-inner: #efefef;--adp-border-radius: 4px;--adp-border-color-inline: #d7d7d7;--adp-nav-height: 32px;--adp-nav-arrow-color: var(--adp-color-secondary);--adp-nav-action-size: 32px;--adp-nav-color-secondary: var(--adp-color-secondary);--adp-day-name-color: #ff9a19;--adp-day-name-color-hover: #8ad5f4;--adp-day-cell-width: 1fr;--adp-day-cell-height: 32px;--adp-month-cell-height: 42px;--adp-year-cell-height: 56px;--adp-pointer-size: 10px;--adp-poiner-border-radius: 2px;--adp-pointer-offset: 14px;--adp-cell-border-radius: 4px;--adp-cell-background-color-hover: var(--adp-background-color-hover);--adp-cell-background-color-selected: #5cc4ef;--adp-cell-background-color-selected-hover: #45bced;--adp-cell-background-color-in-range: rgba(92, 196, 239, 0.1);--adp-cell-background-color-in-range-hover: rgba(92, 196, 239, 0.2);--adp-cell-border-color-in-range: var(--adp-cell-background-color-selected);--adp-btn-height: 32px;--adp-btn-color: var(--adp-accent-color);--adp-btn-color-hover: var(--adp-color);--adp-btn-border-radius: var(--adp-border-radius);--adp-btn-background-color-hover: var(--adp-background-color-hover);--adp-btn-background-color-active: var(--adp-background-color-active);--adp-time-track-height: 1px;--adp-time-track-color: #dedede;--adp-time-track-color-hover: #b1b1b1;--adp-time-thumb-size: 12px;--adp-time-padding-inner: 10px;--adp-time-day-period-color: var(--adp-color-secondary);--adp-mobile-font-size: 16px;--adp-mobile-nav-height: 40px;--adp-mobile-width: 320px;--adp-mobile-day-cell-height: 38px;--adp-mobile-month-cell-height: 48px;--adp-mobile-year-cell-height: 64px}.air-datepicker-overlay{--adp-overlay-background-color: rgba(0, 0, 0, .3);--adp-overlay-transition-duration: .3s;--adp-overlay-transition-ease: ease-out;--adp-overlay-z-index: 99}
.air-datepicker{background:var(--adp-background-color);border:1px solid var(--adp-border-color);box-shadow:0 4px 12px rgba(0,0,0,.15);border-radius:var(--adp-border-radius);box-sizing:content-box;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4, max-content);grid-template-areas:var(--adp-grid-areas);font-family:var(--adp-font-family),sans-serif;font-size:var(--adp-font-size);color:var(--adp-color);width:var(--adp-width);position:absolute;transition:opacity var(--adp-transition-duration) var(--adp-transition-ease),transform var(--adp-transition-duration) var(--adp-transition-ease);z-index:var(--adp-z-index)}.air-datepicker:not(.-custom-position-){opacity:0}.air-datepicker.-from-top-{transform:translateY(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-from-right-{transform:translateX(var(--adp-transition-offset))}.air-datepicker.-from-bottom-{transform:translateY(var(--adp-transition-offset))}.air-datepicker.-from-left-{transform:translateX(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-active-:not(.-custom-position-){transform:translate(0, 0);opacity:1}.air-datepicker.-active-.-custom-position-{transition:none}.air-datepicker.-inline-{border-color:var(--adp-border-color-inline);box-shadow:none;position:static;left:auto;right:auto;opacity:1;transform:none}.air-datepicker.-inline- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-{--adp-font-size: var(--adp-mobile-font-size);--adp-day-cell-height: var(--adp-mobile-day-cell-height);--adp-month-cell-height: var(--adp-mobile-month-cell-height);--adp-year-cell-height: var(--adp-mobile-year-cell-height);--adp-nav-height: var(--adp-mobile-nav-height);--adp-nav-action-size: var(--adp-mobile-nav-height);position:fixed;width:var(--adp-mobile-width);border:none}.air-datepicker.-is-mobile- *{-webkit-tap-highlight-color:rgba(0,0,0,0)}.air-datepicker.-is-mobile- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-:not(.-custom-position-){transform:translate(-50%, calc(-50% + var(--adp-transition-offset)))}.air-datepicker.-is-mobile-.-active-:not(.-custom-position-){transform:translate(-50%, -50%)}.air-datepicker.-custom-position-{transition:none}.air-datepicker-global-container{position:absolute;left:0;top:0}.air-datepicker--pointer{--pointer-half-size: calc(var(--adp-pointer-size) / 2);position:absolute;width:var(--adp-pointer-size);height:var(--adp-pointer-size);z-index:-1}.air-datepicker--pointer:after{content:"";position:absolute;background:#fff;border-top:1px solid var(--adp-border-color-inline);border-right:1px solid var(--adp-border-color-inline);border-top-right-radius:var(--adp-poiner-border-radius);width:var(--adp-pointer-size);height:var(--adp-pointer-size);box-sizing:border-box}.-top-left- .air-datepicker--pointer,.-top-center- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer,[data-popper-placement^=top] .air-datepicker--pointer{top:calc(100% - var(--pointer-half-size) + 1px)}.-top-left- .air-datepicker--pointer:after,.-top-center- .air-datepicker--pointer:after,.-top-right- .air-datepicker--pointer:after,[data-popper-placement^=top] .air-datepicker--pointer:after{transform:rotate(135deg)}.-right-top- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer,[data-popper-placement^=right] .air-datepicker--pointer{right:calc(100% - var(--pointer-half-size) + 1px)}.-right-top- .air-datepicker--pointer:after,.-right-center- .air-datepicker--pointer:after,.-right-bottom- .air-datepicker--pointer:after,[data-popper-placement^=right] .air-datepicker--pointer:after{transform:rotate(225deg)}.-bottom-left- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer,[data-popper-placement^=bottom] .air-datepicker--pointer{bottom:calc(100% - var(--pointer-half-size) + 1px)}.-bottom-left- .air-datepicker--pointer:after,.-bottom-center- .air-datepicker--pointer:after,.-bottom-right- .air-datepicker--pointer:after,[data-popper-placement^=bottom] .air-datepicker--pointer:after{transform:rotate(315deg)}.-left-top- .air-datepicker--pointer,.-left-center- .air-datepicker--pointer,.-left-bottom- .air-datepicker--pointer,[data-popper-placement^=left] .air-datepicker--pointer{left:calc(100% - var(--pointer-half-size) + 1px)}.-left-top- .air-datepicker--pointer:after,.-left-center- .air-datepicker--pointer:after,.-left-bottom- .air-datepicker--pointer:after,[data-popper-placement^=left] .air-datepicker--pointer:after{transform:rotate(45deg)}.-top-left- .air-datepicker--pointer,.-bottom-left- .air-datepicker--pointer{left:var(--adp-pointer-offset)}.-top-right- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer{right:var(--adp-pointer-offset)}.-top-center- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer{left:calc(50% - var(--adp-pointer-size)/2)}.-left-top- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer{top:var(--adp-pointer-offset)}.-left-bottom- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer{bottom:var(--adp-pointer-offset)}.-left-center- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer{top:calc(50% - var(--adp-pointer-size)/2)}.air-datepicker--navigation{grid-area:nav}.air-datepicker--content{box-sizing:content-box;padding:var(--adp-padding);grid-area:body}.-only-timepicker- .air-datepicker--content{display:none}.air-datepicker--time{grid-area:timepicker}.air-datepicker--buttons{grid-area:buttons}.air-datepicker--buttons,.air-datepicker--time{padding:var(--adp-padding);border-top:1px solid var(--adp-border-color-inner)}.air-datepicker-overlay{position:fixed;background:var(--adp-overlay-background-color);left:0;top:0;width:0;height:0;opacity:0;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),left 0s,height 0s,width 0s;transition-delay:0s,var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration);z-index:var(--adp-overlay-z-index)}.air-datepicker-overlay.-active-{opacity:1;width:100%;height:100%;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),height 0s,width 0s}`);

      resolve(true);
    });
  }

  function loadSplide() {
    if (window.Splide !== undefined) {
      return true;
    }

    return new Promise(async (resolve, reject) => {
      function r(n, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      function Jt(n, t, i) {
        t && r(n.prototype, t),
          i && r(n, i),
          Object.defineProperty(n, "prototype", { writable: !1 });
      }
      /*!
       * Splide.js
       * Version  : 4.1.4
       * License  : MIT
       * Copyright: 2022 Naotoshi Fujita
       */
      var n, t;
      (n = this),
        (t = function () {
          var v = "(prefers-reduced-motion: reduce)",
            G = 4,
            rn = 5,
            r = {
              CREATED: 1,
              MOUNTED: 2,
              IDLE: 3,
              MOVING: G,
              SCROLLING: rn,
              DRAGGING: 6,
              DESTROYED: 7,
            };
          function D(n) {
            n.length = 0;
          }
          function o(n, t, i) {
            return Array.prototype.slice.call(n, t, i);
          }
          function R(n) {
            return n.bind.apply(n, [null].concat(o(arguments, 1)));
          }
          function on() {}
          var p = setTimeout;
          function h(n) {
            return requestAnimationFrame(n);
          }
          function u(n, t) {
            return typeof t === n;
          }
          function un(n) {
            return !c(n) && u("object", n);
          }
          var e = Array.isArray,
            x = R(u, "function"),
            C = R(u, "string"),
            en = R(u, "undefined");
          function c(n) {
            return null === n;
          }
          function m(n) {
            try {
              return (
                n instanceof (n.ownerDocument.defaultView || window).HTMLElement
              );
            } catch (n) {
              return !1;
            }
          }
          function y(n) {
            return e(n) ? n : [n];
          }
          function g(n, t) {
            y(n).forEach(t);
          }
          function b(n, t) {
            return -1 < n.indexOf(t);
          }
          function k(n, t) {
            return n.push.apply(n, y(t)), n;
          }
          function A(t, n, i) {
            t &&
              g(n, function (n) {
                n && t.classList[i ? "add" : "remove"](n);
              });
          }
          function M(n, t) {
            A(n, C(t) ? t.split(" ") : t, !0);
          }
          function L(n, t) {
            g(t, n.appendChild.bind(n));
          }
          function O(n, i) {
            g(n, function (n) {
              var t = (i || n).parentNode;
              t && t.insertBefore(n, i);
            });
          }
          function cn(n, t) {
            return m(n) && (n.msMatchesSelector || n.matches).call(n, t);
          }
          function S(n, t) {
            n = n ? o(n.children) : [];
            return t
              ? n.filter(function (n) {
                  return cn(n, t);
                })
              : n;
          }
          function fn(n, t) {
            return t ? S(n, t)[0] : n.firstElementChild;
          }
          var E = Object.keys;
          function w(t, i, n) {
            t &&
              (n ? E(t).reverse() : E(t)).forEach(function (n) {
                "__proto__" !== n && i(t[n], n);
              });
          }
          function an(r) {
            return (
              o(arguments, 1).forEach(function (i) {
                w(i, function (n, t) {
                  r[t] = i[t];
                });
              }),
              r
            );
          }
          function d(i) {
            return (
              o(arguments, 1).forEach(function (n) {
                w(n, function (n, t) {
                  e(n)
                    ? (i[t] = n.slice())
                    : un(n)
                    ? (i[t] = d({}, un(i[t]) ? i[t] : {}, n))
                    : (i[t] = n);
                });
              }),
              i
            );
          }
          function sn(t, n) {
            g(n || E(t), function (n) {
              delete t[n];
            });
          }
          function P(n, i) {
            g(n, function (t) {
              g(i, function (n) {
                t && t.removeAttribute(n);
              });
            });
          }
          function I(i, t, r) {
            un(t)
              ? w(t, function (n, t) {
                  I(i, t, n);
                })
              : g(i, function (n) {
                  c(r) || "" === r ? P(n, t) : n.setAttribute(t, String(r));
                });
          }
          function j(n, t, i) {
            n = document.createElement(n);
            return t && (C(t) ? M : I)(n, t), i && L(i, n), n;
          }
          function _(n, t, i) {
            if (en(i)) return getComputedStyle(n)[t];
            c(i) || (n.style[t] = "" + i);
          }
          function ln(n, t) {
            _(n, "display", t);
          }
          function dn(n) {
            (n.setActive && n.setActive()) || n.focus({ preventScroll: !0 });
          }
          function z(n, t) {
            return n.getAttribute(t);
          }
          function vn(n, t) {
            return n && n.classList.contains(t);
          }
          function N(n) {
            return n.getBoundingClientRect();
          }
          function T(n) {
            g(n, function (n) {
              n && n.parentNode && n.parentNode.removeChild(n);
            });
          }
          function hn(n) {
            return fn(new DOMParser().parseFromString(n, "text/html").body);
          }
          function F(n, t) {
            n.preventDefault(),
              t && (n.stopPropagation(), n.stopImmediatePropagation());
          }
          function pn(n, t) {
            return n && n.querySelector(t);
          }
          function gn(n, t) {
            return t ? o(n.querySelectorAll(t)) : [];
          }
          function X(n, t) {
            A(n, t, !1);
          }
          function mn(n) {
            return n.timeStamp;
          }
          function W(n) {
            return C(n) ? n : n ? n + "px" : "";
          }
          var yn = "splide",
            f = "data-" + yn;
          function bn(n, t) {
            if (!n) throw new Error("[" + yn + "] " + (t || ""));
          }
          var Y = Math.min,
            wn = Math.max,
            xn = Math.floor,
            kn = Math.ceil,
            U = Math.abs;
          function Sn(n, t, i) {
            return U(n - t) < i;
          }
          function En(n, t, i, r) {
            var o = Y(t, i),
              t = wn(t, i);
            return r ? o < n && n < t : o <= n && n <= t;
          }
          function q(n, t, i) {
            var r = Y(t, i),
              t = wn(t, i);
            return Y(wn(r, n), t);
          }
          function Ln(n) {
            return (0 < n) - (n < 0);
          }
          function On(t, n) {
            return (
              g(n, function (n) {
                t = t.replace("%s", "" + n);
              }),
              t
            );
          }
          function An(n) {
            return n < 10 ? "0" + n : "" + n;
          }
          var _n = {};
          function zn() {
            var c = [];
            function i(n, i, r) {
              g(n, function (t) {
                t &&
                  g(i, function (n) {
                    n.split(" ").forEach(function (n) {
                      n = n.split(".");
                      r(t, n[0], n[1]);
                    });
                  });
              });
            }
            return {
              bind: function (n, t, u, e) {
                i(n, t, function (n, t, i) {
                  var r = "addEventListener" in n,
                    o = r
                      ? n.removeEventListener.bind(n, t, u, e)
                      : n.removeListener.bind(n, u);
                  r ? n.addEventListener(t, u, e) : n.addListener(u),
                    c.push([n, t, i, u, o]);
                });
              },
              unbind: function (n, t, o) {
                i(n, t, function (t, i, r) {
                  c = c.filter(function (n) {
                    return (
                      !!(
                        n[0] !== t ||
                        n[1] !== i ||
                        n[2] !== r ||
                        (o && n[3] !== o)
                      ) || (n[4](), !1)
                    );
                  });
                });
              },
              dispatch: function (n, t, i) {
                var r;
                return (
                  "function" == typeof CustomEvent
                    ? (r = new CustomEvent(t, { bubbles: !0, detail: i }))
                    : (r = document.createEvent("CustomEvent")).initCustomEvent(
                        t,
                        !0,
                        !1,
                        i,
                      ),
                  n.dispatchEvent(r),
                  r
                );
              },
              destroy: function () {
                c.forEach(function (n) {
                  n[4]();
                }),
                  D(c);
              },
            };
          }
          var B = "mounted",
            H = "move",
            Dn = "moved",
            Mn = "click",
            Pn = "active",
            In = "inactive",
            Rn = "visible",
            Cn = "hidden",
            J = "refresh",
            K = "updated",
            jn = "resize",
            Nn = "resized",
            Tn = "scroll",
            V = "scrolled",
            a = "destroy",
            Gn = "navigation:mounted",
            Fn = "autoplay:play",
            Xn = "autoplay:pause",
            Wn = "lazyload:loaded",
            Yn = "sk",
            Un = "sh";
          function Q(n) {
            var i = n ? n.event.bus : document.createDocumentFragment(),
              r = zn();
            return (
              n && n.event.on(a, r.destroy),
              an(r, {
                bus: i,
                on: function (n, t) {
                  r.bind(i, y(n).join(" "), function (n) {
                    t.apply(t, e(n.detail) ? n.detail : []);
                  });
                },
                off: R(r.unbind, i),
                emit: function (n) {
                  r.dispatch(i, n, o(arguments, 1));
                },
              })
            );
          }
          function qn(t, n, i, r) {
            var o,
              u,
              e = Date.now,
              c = 0,
              f = !0,
              a = 0;
            function s() {
              if (!f) {
                if (
                  ((c = t ? Y((e() - o) / t, 1) : 1),
                  i && i(c),
                  1 <= c && (n(), (o = e()), r && ++a >= r))
                )
                  return l();
                u = h(s);
              }
            }
            function l() {
              f = !0;
            }
            function d() {
              u && cancelAnimationFrame(u), (f = !(u = c = 0));
            }
            return {
              start: function (n) {
                n || d(), (o = e() - (n ? c * t : 0)), (f = !1), (u = h(s));
              },
              rewind: function () {
                (o = e()), (c = 0), i && i(c);
              },
              pause: l,
              cancel: d,
              set: function (n) {
                t = n;
              },
              isPaused: function () {
                return f;
              },
            };
          }
          function s(n) {
            var t = n;
            return {
              set: function (n) {
                t = n;
              },
              is: function (n) {
                return b(y(n), t);
              },
            };
          }
          var n = "Arrow",
            Bn = n + "Left",
            Hn = n + "Right",
            t = n + "Up",
            n = n + "Down",
            Jn = "ttb",
            l = {
              width: ["height"],
              left: ["top", "right"],
              right: ["bottom", "left"],
              x: ["y"],
              X: ["Y"],
              Y: ["X"],
              ArrowLeft: [t, Hn],
              ArrowRight: [n, Bn],
            };
          var Z = "role",
            $ = "tabindex",
            i = "aria-",
            Kn = i + "controls",
            Vn = i + "current",
            Qn = i + "selected",
            nn = i + "label",
            Zn = i + "labelledby",
            $n = i + "hidden",
            nt = i + "orientation",
            tt = i + "roledescription",
            it = i + "live",
            rt = i + "busy",
            ot = i + "atomic",
            ut = [Z, $, "disabled", Kn, Vn, nn, Zn, $n, nt, tt],
            i = yn + "__",
            et = yn,
            ct = i + "track",
            ft = i + "list",
            at = i + "slide",
            st = at + "--clone",
            lt = at + "__container",
            dt = i + "arrows",
            vt = i + "arrow",
            ht = vt + "--prev",
            pt = vt + "--next",
            gt = i + "pagination",
            mt = gt + "__page",
            yt = i + "progress" + "__bar",
            bt = i + "toggle",
            wt = i + "sr",
            tn = "is-active",
            xt = "is-prev",
            kt = "is-next",
            St = "is-visible",
            Et = "is-loading",
            Lt = "is-focus-in",
            Ot = "is-overflow",
            At = [tn, St, xt, kt, Et, Lt, Ot];
          var _t = "touchstart mousedown",
            zt = "touchmove mousemove",
            Dt = "touchend touchcancel mouseup click";
          var Mt = "slide",
            Pt = "loop",
            It = "fade";
          function Rt(o, r, t, u) {
            var e,
              n = Q(o),
              i = n.on,
              c = n.emit,
              f = n.bind,
              a = o.Components,
              s = o.root,
              l = o.options,
              d = l.isNavigation,
              v = l.updateOnMove,
              h = l.i18n,
              p = l.pagination,
              g = l.slideFocus,
              m = a.Direction.resolve,
              y = z(u, "style"),
              b = z(u, nn),
              w = -1 < t,
              x = fn(u, "." + lt);
            function k() {
              var n = o.splides
                .map(function (n) {
                  n = n.splide.Components.Slides.getAt(r);
                  return n ? n.slide.id : "";
                })
                .join(" ");
              I(u, nn, On(h.slideX, (w ? t : r) + 1)),
                I(u, Kn, n),
                I(u, Z, g ? "button" : ""),
                g && P(u, tt);
            }
            function S() {
              e || E();
            }
            function E() {
              var n, t, i;
              e ||
                ((n = o.index),
                (i = L()) !== vn(u, tn) &&
                  (A(u, tn, i), I(u, Vn, (d && i) || ""), c(i ? Pn : In, O)),
                (i = (function () {
                  if (o.is(It)) return L();
                  var n = N(a.Elements.track),
                    t = N(u),
                    i = m("left", !0),
                    r = m("right", !0);
                  return xn(n[i]) <= kn(t[i]) && xn(t[r]) <= kn(n[r]);
                })()),
                (t = !i && (!L() || w)),
                o.state.is([G, rn]) || I(u, $n, t || ""),
                I(gn(u, l.focusableNodes || ""), $, t ? -1 : ""),
                g && I(u, $, t ? -1 : 0),
                i !== vn(u, St) && (A(u, St, i), c(i ? Rn : Cn, O)),
                i ||
                  document.activeElement !== u ||
                  ((t = a.Slides.getAt(o.index)) && dn(t.slide)),
                A(u, xt, r === n - 1),
                A(u, kt, r === n + 1));
            }
            function L() {
              var n = o.index;
              return n === r || (l.cloneStatus && n === t);
            }
            var O = {
              index: r,
              slideIndex: t,
              slide: u,
              container: x,
              isClone: w,
              mount: function () {
                w ||
                  ((u.id = s.id + "-slide" + An(r + 1)),
                  I(u, Z, p ? "tabpanel" : "group"),
                  I(u, tt, h.slide),
                  I(u, nn, b || On(h.slideLabel, [r + 1, o.length]))),
                  f(u, "click", R(c, Mn, O)),
                  f(u, "keydown", R(c, Yn, O)),
                  i([Dn, Un, V], E),
                  i(Gn, k),
                  v && i(H, S);
              },
              destroy: function () {
                (e = !0),
                  n.destroy(),
                  X(u, At),
                  P(u, ut),
                  I(u, "style", y),
                  I(u, nn, b || "");
              },
              update: E,
              style: function (n, t, i) {
                _((i && x) || u, n, t);
              },
              isWithin: function (n, t) {
                return (
                  (n = U(n - r)),
                  (n =
                    w || (!l.rewind && !o.is(Pt)) ? n : Y(n, o.length - n)) <= t
                );
              },
            };
            return O;
          }
          var Ct = f + "-interval";
          var jt = { passive: !1, capture: !0 };
          var Nt = { Spacebar: " ", Right: Hn, Left: Bn, Up: t, Down: n };
          function Tt(n) {
            return (n = C(n) ? n : n.key), Nt[n] || n;
          }
          var Gt = "keydown";
          var Ft = f + "-lazy",
            Xt = Ft + "-srcset",
            Wt = "[" + Ft + "], [" + Xt + "]";
          var Yt = [" ", "Enter"];
          var Ut = Object.freeze({
              __proto__: null,
              Media: function (r, n, o) {
                var u = r.state,
                  t = o.breakpoints || {},
                  e = o.reducedMotion || {},
                  i = zn(),
                  c = [];
                function f(n) {
                  n && i.destroy();
                }
                function a(n, t) {
                  t = matchMedia(t);
                  i.bind(t, "change", s), c.push([n, t]);
                }
                function s() {
                  var n = u.is(7),
                    t = o.direction,
                    i = c.reduce(function (n, t) {
                      return d(n, t[1].matches ? t[0] : {});
                    }, {});
                  sn(o),
                    l(i),
                    o.destroy
                      ? r.destroy("completely" === o.destroy)
                      : n
                      ? (f(!0), r.mount())
                      : t !== o.direction && r.refresh();
                }
                function l(n, t, i) {
                  d(o, n),
                    t && d(Object.getPrototypeOf(o), n),
                    (!i && u.is(1)) || r.emit(K, o);
                }
                return {
                  setup: function () {
                    var i = "min" === o.mediaQuery;
                    E(t)
                      .sort(function (n, t) {
                        return i ? +n - +t : +t - +n;
                      })
                      .forEach(function (n) {
                        a(
                          t[n],
                          "(" + (i ? "min" : "max") + "-width:" + n + "px)",
                        );
                      }),
                      a(e, v),
                      s();
                  },
                  destroy: f,
                  reduce: function (n) {
                    matchMedia(v).matches && (n ? d(o, e) : sn(o, E(e)));
                  },
                  set: l,
                };
              },
              Direction: function (n, t, o) {
                return {
                  resolve: function (n, t, i) {
                    var r =
                      "rtl" !== (i = i || o.direction) || t
                        ? i === Jn
                          ? 0
                          : -1
                        : 1;
                    return (
                      (l[n] && l[n][r]) ||
                      n.replace(/width|left|right/i, function (n, t) {
                        n = l[n.toLowerCase()][r] || n;
                        return 0 < t
                          ? n.charAt(0).toUpperCase() + n.slice(1)
                          : n;
                      })
                    );
                  },
                  orient: function (n) {
                    return n * ("rtl" === o.direction ? 1 : -1);
                  },
                };
              },
              Elements: function (n, t, i) {
                var r,
                  o,
                  u,
                  e = Q(n),
                  c = e.on,
                  f = e.bind,
                  a = n.root,
                  s = i.i18n,
                  l = {},
                  d = [],
                  v = [],
                  h = [];
                function p() {
                  (r = y("." + ct)),
                    (o = fn(r, "." + ft)),
                    bn(r && o, "A track/list element is missing."),
                    k(d, S(o, "." + at + ":not(." + st + ")")),
                    w(
                      {
                        arrows: dt,
                        pagination: gt,
                        prev: ht,
                        next: pt,
                        bar: yt,
                        toggle: bt,
                      },
                      function (n, t) {
                        l[t] = y("." + n);
                      },
                    ),
                    an(l, { root: a, track: r, list: o, slides: d });
                  var n =
                      a.id ||
                      (function (n) {
                        return "" + n + An((_n[n] = (_n[n] || 0) + 1));
                      })(yn),
                    t = i.role;
                  (a.id = n),
                    (r.id = r.id || n + "-track"),
                    (o.id = o.id || n + "-list"),
                    !z(a, Z) && "SECTION" !== a.tagName && t && I(a, Z, t),
                    I(a, tt, s.carousel),
                    I(o, Z, "presentation"),
                    m();
                }
                function g(n) {
                  var t = ut.concat("style");
                  D(d),
                    X(a, v),
                    X(r, h),
                    P([r, o], t),
                    P(a, n ? t : ["style", tt]);
                }
                function m() {
                  X(a, v),
                    X(r, h),
                    (v = b(et)),
                    (h = b(ct)),
                    M(a, v),
                    M(r, h),
                    I(a, nn, i.label),
                    I(a, Zn, i.labelledby);
                }
                function y(n) {
                  n = pn(a, n);
                  return n &&
                    (function (n, t) {
                      if (x(n.closest)) return n.closest(t);
                      for (var i = n; i && 1 === i.nodeType && !cn(i, t); )
                        i = i.parentElement;
                      return i;
                    })(n, "." + et) === a
                    ? n
                    : void 0;
                }
                function b(n) {
                  return [
                    n + "--" + i.type,
                    n + "--" + i.direction,
                    i.drag && n + "--draggable",
                    i.isNavigation && n + "--nav",
                    n === et && tn,
                  ];
                }
                return an(l, {
                  setup: p,
                  mount: function () {
                    c(J, g),
                      c(J, p),
                      c(K, m),
                      f(
                        document,
                        _t + " keydown",
                        function (n) {
                          u = "keydown" === n.type;
                        },
                        { capture: !0 },
                      ),
                      f(a, "focusin", function () {
                        A(a, Lt, !!u);
                      });
                  },
                  destroy: g,
                });
              },
              Slides: function (r, o, u) {
                var n = Q(r),
                  t = n.on,
                  e = n.emit,
                  c = n.bind,
                  f = (n = o.Elements).slides,
                  a = n.list,
                  s = [];
                function i() {
                  f.forEach(function (n, t) {
                    d(n, t, -1);
                  });
                }
                function l() {
                  h(function (n) {
                    n.destroy();
                  }),
                    D(s);
                }
                function d(n, t, i) {
                  t = Rt(r, t, i, n);
                  t.mount(),
                    s.push(t),
                    s.sort(function (n, t) {
                      return n.index - t.index;
                    });
                }
                function v(n) {
                  return n
                    ? p(function (n) {
                        return !n.isClone;
                      })
                    : s;
                }
                function h(n, t) {
                  v(t).forEach(n);
                }
                function p(t) {
                  return s.filter(
                    x(t)
                      ? t
                      : function (n) {
                          return C(t) ? cn(n.slide, t) : b(y(t), n.index);
                        },
                  );
                }
                return {
                  mount: function () {
                    i(), t(J, l), t(J, i);
                  },
                  destroy: l,
                  update: function () {
                    h(function (n) {
                      n.update();
                    });
                  },
                  register: d,
                  get: v,
                  getIn: function (n) {
                    var t = o.Controller,
                      i = t.toIndex(n),
                      r = t.hasFocus() ? 1 : u.perPage;
                    return p(function (n) {
                      return En(n.index, i, i + r - 1);
                    });
                  },
                  getAt: function (n) {
                    return p(n)[0];
                  },
                  add: function (n, o) {
                    g(n, function (n) {
                      var t, i, r;
                      m((n = C(n) ? hn(n) : n)) &&
                        ((t = f[o]) ? O(n, t) : L(a, n),
                        M(n, u.classes.slide),
                        (t = n),
                        (i = R(e, jn)),
                        (t = gn(t, "img")),
                        (r = t.length)
                          ? t.forEach(function (n) {
                              c(n, "load error", function () {
                                --r || i();
                              });
                            })
                          : i());
                    }),
                      e(J);
                  },
                  remove: function (n) {
                    T(
                      p(n).map(function (n) {
                        return n.slide;
                      }),
                    ),
                      e(J);
                  },
                  forEach: h,
                  filter: p,
                  style: function (t, i, r) {
                    h(function (n) {
                      n.style(t, i, r);
                    });
                  },
                  getLength: function (n) {
                    return (n ? f : s).length;
                  },
                  isEnough: function () {
                    return s.length > u.perPage;
                  },
                };
              },
              Layout: function (t, n, i) {
                var r,
                  o,
                  u,
                  e = (a = Q(t)).on,
                  c = a.bind,
                  f = a.emit,
                  a = n.Slides,
                  s = n.Direction.resolve,
                  l = (n = n.Elements).root,
                  d = n.track,
                  v = n.list,
                  h = a.getAt,
                  p = a.style;
                function g() {
                  (r = i.direction === Jn),
                    _(l, "maxWidth", W(i.width)),
                    _(d, s("paddingLeft"), y(!1)),
                    _(d, s("paddingRight"), y(!0)),
                    m(!0);
                }
                function m(n) {
                  var t = N(l);
                  (!n && o.width === t.width && o.height === t.height) ||
                    (_(
                      d,
                      "height",
                      (function () {
                        var n = "";
                        r &&
                          (bn((n = b()), "height or heightRatio is missing."),
                          (n =
                            "calc(" + n + " - " + y(!1) + " - " + y(!0) + ")"));
                        return n;
                      })(),
                    ),
                    p(s("marginRight"), W(i.gap)),
                    p(
                      "width",
                      i.autoWidth ? null : W(i.fixedWidth) || (r ? "" : w()),
                    ),
                    p(
                      "height",
                      W(i.fixedHeight) ||
                        (r ? (i.autoHeight ? null : w()) : b()),
                      !0,
                    ),
                    (o = t),
                    f(Nn),
                    u !== (u = O()) && (A(l, Ot, u), f("overflow", u)));
                }
                function y(n) {
                  var t = i.padding,
                    n = s(n ? "right" : "left");
                  return (t && W(t[n] || (un(t) ? 0 : t))) || "0px";
                }
                function b() {
                  return W(i.height || N(v).width * i.heightRatio);
                }
                function w() {
                  var n = W(i.gap);
                  return (
                    "calc((100%" +
                    (n && " + " + n) +
                    ")/" +
                    (i.perPage || 1) +
                    (n && " - " + n) +
                    ")"
                  );
                }
                function x() {
                  return N(v)[s("width")];
                }
                function k(n, t) {
                  n = h(n || 0);
                  return n ? N(n.slide)[s("width")] + (t ? 0 : L()) : 0;
                }
                function S(n, t) {
                  var i,
                    n = h(n);
                  return n
                    ? ((n = N(n.slide)[s("right")]),
                      (i = N(v)[s("left")]),
                      U(n - i) + (t ? 0 : L()))
                    : 0;
                }
                function E(n) {
                  return S(t.length - 1) - S(0) + k(0, n);
                }
                function L() {
                  var n = h(0);
                  return (n && parseFloat(_(n.slide, s("marginRight")))) || 0;
                }
                function O() {
                  return t.is(It) || E(!0) > x();
                }
                return {
                  mount: function () {
                    var n, t, i;
                    g(),
                      c(
                        window,
                        "resize load",
                        ((n = R(f, jn)),
                        (i = qn(t || 0, n, null, 1)),
                        function () {
                          i.isPaused() && i.start();
                        }),
                      ),
                      e([K, J], g),
                      e(jn, m);
                  },
                  resize: m,
                  listSize: x,
                  slideSize: k,
                  sliderSize: E,
                  totalSize: S,
                  getPadding: function (n) {
                    return (
                      parseFloat(_(d, s("padding" + (n ? "Right" : "Left")))) ||
                      0
                    );
                  },
                  isOverflow: O,
                };
              },
              Clones: function (c, i, f) {
                var t,
                  r = Q(c),
                  n = r.on,
                  a = i.Elements,
                  s = i.Slides,
                  o = i.Direction.resolve,
                  l = [];
                function u() {
                  if ((n(J, d), n([K, jn], v), (t = h()))) {
                    var o = t,
                      u = s.get().slice(),
                      e = u.length;
                    if (e) {
                      for (; u.length < o; ) k(u, u);
                      k(u.slice(-o), u.slice(0, o)).forEach(function (n, t) {
                        var i = t < o,
                          r = (function (n, t) {
                            n = n.cloneNode(!0);
                            return (
                              M(n, f.classes.clone),
                              (n.id = c.root.id + "-clone" + An(t + 1)),
                              n
                            );
                          })(n.slide, t);
                        i ? O(r, u[0].slide) : L(a.list, r),
                          k(l, r),
                          s.register(r, t - o + (i ? 0 : e), n.index);
                      });
                    }
                    i.Layout.resize(!0);
                  }
                }
                function d() {
                  e(), u();
                }
                function e() {
                  T(l), D(l), r.destroy();
                }
                function v() {
                  var n = h();
                  t !== n && (t < n || !n) && r.emit(J);
                }
                function h() {
                  var n,
                    t = f.clones;
                  return (
                    c.is(Pt)
                      ? en(t) &&
                        (t =
                          ((n = f[o("fixedWidth")] && i.Layout.slideSize(0)) &&
                            kn(N(a.track)[o("width")] / n)) ||
                          (f[o("autoWidth")] && c.length) ||
                          2 * f.perPage)
                      : (t = 0),
                    t
                  );
                }
                return { mount: u, destroy: e };
              },
              Move: function (r, c, o) {
                var e,
                  n = Q(r),
                  t = n.on,
                  f = n.emit,
                  a = r.state.set,
                  u = (n = c.Layout).slideSize,
                  i = n.getPadding,
                  s = n.totalSize,
                  l = n.listSize,
                  d = n.sliderSize,
                  v = (n = c.Direction).resolve,
                  h = n.orient,
                  p = (n = c.Elements).list,
                  g = n.track;
                function m() {
                  c.Controller.isBusy() ||
                    (c.Scroll.cancel(), y(r.index), c.Slides.update());
                }
                function y(n) {
                  b(S(n, !0));
                }
                function b(n, t) {
                  r.is(It) ||
                    ((t = t
                      ? n
                      : (function (n) {
                          {
                            var t, i;
                            r.is(Pt) &&
                              ((t = k(n)),
                              (i = t > c.Controller.getEnd()),
                              (t < 0 || i) && (n = w(n, i)));
                          }
                          return n;
                        })(n)),
                    _(p, "transform", "translate" + v("X") + "(" + t + "px)"),
                    n !== t && f(Un));
                }
                function w(n, t) {
                  var i = n - L(t),
                    r = d();
                  return (n -= h(r * (kn(U(i) / r) || 1)) * (t ? 1 : -1));
                }
                function x() {
                  b(E(), !0), e.cancel();
                }
                function k(n) {
                  for (
                    var t = c.Slides.get(), i = 0, r = 1 / 0, o = 0;
                    o < t.length;
                    o++
                  ) {
                    var u = t[o].index,
                      e = U(S(u, !0) - n);
                    if (!(e <= r)) break;
                    (r = e), (i = u);
                  }
                  return i;
                }
                function S(n, t) {
                  var i = h(
                    s(n - 1) -
                      ((n = n),
                      "center" === (i = o.focus)
                        ? (l() - u(n, !0)) / 2
                        : +i * u(n) || 0),
                  );
                  return t
                    ? ((n = i),
                      (n =
                        o.trimSpace && r.is(Mt) ? q(n, 0, h(d(!0) - l())) : n))
                    : i;
                }
                function E() {
                  var n = v("left");
                  return N(p)[n] - N(g)[n] + h(i(!1));
                }
                function L(n) {
                  return S(n ? c.Controller.getEnd() : 0, !!o.trimSpace);
                }
                return {
                  mount: function () {
                    (e = c.Transition), t([B, Nn, K, J], m);
                  },
                  move: function (n, t, i, r) {
                    var o, u;
                    n !== t &&
                      ((o = i < n),
                      (u = h(w(E(), o))),
                      o
                        ? 0 <= u
                        : u <= p[v("scrollWidth")] - N(g)[v("width")]) &&
                      (x(), b(w(E(), i < n), !0)),
                      a(G),
                      f(H, t, i, n),
                      e.start(t, function () {
                        a(3), f(Dn, t, i, n), r && r();
                      });
                  },
                  jump: y,
                  translate: b,
                  shift: w,
                  cancel: x,
                  toIndex: k,
                  toPosition: S,
                  getPosition: E,
                  getLimit: L,
                  exceededLimit: function (n, t) {
                    t = en(t) ? E() : t;
                    var i = !0 !== n && h(t) < h(L(!1)),
                      n = !1 !== n && h(t) > h(L(!0));
                    return i || n;
                  },
                  reposition: m,
                };
              },
              Controller: function (o, u, e) {
                var c,
                  f,
                  a,
                  s,
                  n = Q(o),
                  t = n.on,
                  i = n.emit,
                  l = u.Move,
                  d = l.getPosition,
                  r = l.getLimit,
                  v = l.toPosition,
                  h = (n = u.Slides).isEnough,
                  p = n.getLength,
                  g = e.omitEnd,
                  m = o.is(Pt),
                  y = o.is(Mt),
                  b = R(L, !1),
                  w = R(L, !0),
                  x = e.start || 0,
                  k = x;
                function S() {
                  (f = p(!0)), (a = e.perMove), (s = e.perPage), (c = _());
                  var n = q(x, 0, g ? c : f - 1);
                  n !== x && ((x = n), l.reposition());
                }
                function E() {
                  c !== _() && i("ei");
                }
                function L(n, t) {
                  var i = a || (P() ? 1 : s),
                    i = O(x + i * (n ? -1 : 1), x, !(a || P()));
                  return -1 === i && y && !Sn(d(), r(!n), 1)
                    ? n
                      ? 0
                      : c
                    : t
                    ? i
                    : A(i);
                }
                function O(n, t, i) {
                  var r;
                  return (
                    h() || P()
                      ? ((r = (function (n) {
                          if (y && "move" === e.trimSpace && n !== x)
                            for (
                              var t = d();
                              t === v(n, !0) &&
                              En(n, 0, o.length - 1, !e.rewind);

                            )
                              n < x ? --n : ++n;
                          return n;
                        })(n)) !== n && ((t = n), (n = r), (i = !1)),
                        n < 0 || c < n
                          ? (n =
                              a || (!En(0, n, t, !0) && !En(c, t, n, !0))
                                ? m
                                  ? i
                                    ? n < 0
                                      ? -(f % s || s)
                                      : f
                                    : n
                                  : e.rewind
                                  ? n < 0
                                    ? c
                                    : 0
                                  : -1
                                : z(D(n)))
                          : i && n !== t && (n = z(D(t) + (n < t ? -1 : 1))))
                      : (n = -1),
                    n
                  );
                }
                function A(n) {
                  return m ? (n + f) % f || 0 : n;
                }
                function _() {
                  for (var n = f - (P() || (m && a) ? 1 : s); g && 0 < n--; )
                    if (v(f - 1, !0) !== v(n, !0)) {
                      n++;
                      break;
                    }
                  return q(n, 0, f - 1);
                }
                function z(n) {
                  return q(P() ? n : s * n, 0, c);
                }
                function D(n) {
                  return P() ? Y(n, c) : xn((c <= n ? f - 1 : n) / s);
                }
                function M(n) {
                  n !== x && ((k = x), (x = n));
                }
                function P() {
                  return !en(e.focus) || e.isNavigation;
                }
                function I() {
                  return o.state.is([G, rn]) && !!e.waitForTransition;
                }
                return {
                  mount: function () {
                    S(), t([K, J, "ei"], S), t(Nn, E);
                  },
                  go: function (n, t, i) {
                    var r;
                    I() ||
                      (-1 <
                        (r = A(
                          (n = (function (n) {
                            var t = x;
                            {
                              var i, r;
                              C(n)
                                ? ((r = n.match(/([+\-<>])(\d+)?/) || []),
                                  (i = r[1]),
                                  (r = r[2]),
                                  "+" === i || "-" === i
                                    ? (t = O(x + +("" + i + (+r || 1)), x))
                                    : ">" === i
                                    ? (t = r ? z(+r) : b(!0))
                                    : "<" === i && (t = w(!0)))
                                : (t = m ? n : q(n, 0, c));
                            }
                            return t;
                          })(n)),
                        )) &&
                        (t || r !== x) &&
                        (M(r), l.move(n, r, k, i)));
                  },
                  scroll: function (n, t, i, r) {
                    u.Scroll.scroll(n, t, i, function () {
                      var n = A(l.toIndex(d()));
                      M(g ? Y(n, c) : n), r && r();
                    });
                  },
                  getNext: b,
                  getPrev: w,
                  getAdjacent: L,
                  getEnd: _,
                  setIndex: M,
                  getIndex: function (n) {
                    return n ? k : x;
                  },
                  toIndex: z,
                  toPage: D,
                  toDest: function (n) {
                    return (n = l.toIndex(n)), y ? q(n, 0, c) : n;
                  },
                  hasFocus: P,
                  isBusy: I,
                };
              },
              Arrows: function (o, n, t) {
                var i,
                  r,
                  u = Q(o),
                  e = u.on,
                  c = u.bind,
                  f = u.emit,
                  a = t.classes,
                  s = t.i18n,
                  l = n.Elements,
                  d = n.Controller,
                  v = l.arrows,
                  h = l.track,
                  p = v,
                  g = l.prev,
                  m = l.next,
                  y = {};
                function b() {
                  var n = t.arrows;
                  !n ||
                    (g && m) ||
                    ((p = v || j("div", a.arrows)),
                    (g = S(!0)),
                    (m = S(!1)),
                    (i = !0),
                    L(p, [g, m]),
                    v || O(p, h)),
                    g &&
                      m &&
                      (an(y, { prev: g, next: m }),
                      ln(p, n ? "" : "none"),
                      M(p, (r = dt + "--" + t.direction)),
                      n &&
                        (e([B, Dn, J, V, "ei"], E),
                        c(m, "click", R(k, ">")),
                        c(g, "click", R(k, "<")),
                        E(),
                        I([g, m], Kn, h.id),
                        f("arrows:mounted", g, m))),
                    e(K, w);
                }
                function w() {
                  x(), b();
                }
                function x() {
                  u.destroy(),
                    X(p, r),
                    i ? (T(v ? [g, m] : p), (g = m = null)) : P([g, m], ut);
                }
                function k(n) {
                  d.go(n, !0);
                }
                function S(n) {
                  return hn(
                    '<button class="' +
                      a.arrow +
                      " " +
                      (n ? a.prev : a.next) +
                      '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' +
                      (t.arrowPath ||
                        "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                      '" />',
                  );
                }
                function E() {
                  var n, t, i, r;
                  g &&
                    m &&
                    ((r = o.index),
                    (n = d.getPrev()),
                    (t = d.getNext()),
                    (i = -1 < n && r < n ? s.last : s.prev),
                    (r = -1 < t && t < r ? s.first : s.next),
                    (g.disabled = n < 0),
                    (m.disabled = t < 0),
                    I(g, nn, i),
                    I(m, nn, r),
                    f("arrows:updated", g, m, n, t));
                }
                return { arrows: y, mount: b, destroy: x, update: E };
              },
              Autoplay: function (n, t, i) {
                var r,
                  o,
                  u = Q(n),
                  e = u.on,
                  c = u.bind,
                  f = u.emit,
                  a = qn(i.interval, n.go.bind(n, ">"), function (n) {
                    var t = l.bar;
                    t && _(t, "width", 100 * n + "%"), f("autoplay:playing", n);
                  }),
                  s = a.isPaused,
                  l = t.Elements,
                  d = (u = t.Elements).root,
                  v = u.toggle,
                  h = i.autoplay,
                  p = "pause" === h;
                function g() {
                  s() &&
                    t.Slides.isEnough() &&
                    (a.start(!i.resetProgress), (o = r = p = !1), b(), f(Fn));
                }
                function m(n) {
                  (p = !!(n = void 0 === n ? !0 : n)),
                    b(),
                    s() || (a.pause(), f(Xn));
                }
                function y() {
                  p || (r || o ? m(!1) : g());
                }
                function b() {
                  v && (A(v, tn, !p), I(v, nn, i.i18n[p ? "play" : "pause"]));
                }
                function w(n) {
                  n = t.Slides.getAt(n);
                  a.set((n && +z(n.slide, Ct)) || i.interval);
                }
                return {
                  mount: function () {
                    h &&
                      (i.pauseOnHover &&
                        c(d, "mouseenter mouseleave", function (n) {
                          (r = "mouseenter" === n.type), y();
                        }),
                      i.pauseOnFocus &&
                        c(d, "focusin focusout", function (n) {
                          (o = "focusin" === n.type), y();
                        }),
                      v &&
                        c(v, "click", function () {
                          p ? g() : m(!0);
                        }),
                      e([H, Tn, J], a.rewind),
                      e(H, w),
                      v && I(v, Kn, l.track.id),
                      p || g(),
                      b());
                  },
                  destroy: a.cancel,
                  play: g,
                  pause: m,
                  isPaused: s,
                };
              },
              Cover: function (n, t, i) {
                var r = Q(n).on;
                function o(i) {
                  t.Slides.forEach(function (n) {
                    var t = fn(n.container || n.slide, "img");
                    t && t.src && u(i, t, n);
                  });
                }
                function u(n, t, i) {
                  i.style(
                    "background",
                    n ? 'center/cover no-repeat url("' + t.src + '")' : "",
                    !0,
                  ),
                    ln(t, n ? "none" : "");
                }
                return {
                  mount: function () {
                    i.cover && (r(Wn, R(u, !0)), r([B, K, J], R(o, !0)));
                  },
                  destroy: R(o, !1),
                };
              },
              Scroll: function (n, c, u) {
                var f,
                  a,
                  t = Q(n),
                  i = t.on,
                  s = t.emit,
                  l = n.state.set,
                  d = c.Move,
                  v = d.getPosition,
                  e = d.getLimit,
                  h = d.exceededLimit,
                  p = d.translate,
                  g = n.is(Mt),
                  m = 1;
                function y(n, t, i, r, o) {
                  var u,
                    e = v(),
                    i =
                      (x(),
                      !i ||
                        (g && h()) ||
                        ((i = c.Layout.sliderSize()),
                        (u = Ln(n) * i * xn(U(n) / i) || 0),
                        (n = d.toPosition(c.Controller.toDest(n % i)) + u)),
                      Sn(e, n, 1));
                  (m = 1),
                    (t = i ? 0 : t || wn(U(n - e) / 1.5, 800)),
                    (a = r),
                    (f = qn(t, b, R(w, e, n, o), 1)),
                    l(rn),
                    s(Tn),
                    f.start();
                }
                function b() {
                  l(3), a && a(), s(V);
                }
                function w(n, t, i, r) {
                  var o = v(),
                    r =
                      (n +
                        (t - n) *
                          ((t = r),
                          (n = u.easingFunc) ? n(t) : 1 - Math.pow(1 - t, 4)) -
                        o) *
                      m;
                  p(o + r),
                    g &&
                      !i &&
                      h() &&
                      ((m *= 0.6), U(r) < 10 && y(e(h(!0)), 600, !1, a, !0));
                }
                function x() {
                  f && f.cancel();
                }
                function r() {
                  f && !f.isPaused() && (x(), b());
                }
                return {
                  mount: function () {
                    i(H, x), i([K, J], r);
                  },
                  destroy: x,
                  scroll: y,
                  cancel: r,
                };
              },
              Drag: function (e, o, c) {
                var f,
                  t,
                  u,
                  a,
                  s,
                  l,
                  d,
                  v,
                  n = Q(e),
                  i = n.on,
                  h = n.emit,
                  p = n.bind,
                  g = n.unbind,
                  m = e.state,
                  y = o.Move,
                  b = o.Scroll,
                  w = o.Controller,
                  x = o.Elements.track,
                  k = o.Media.reduce,
                  r = (n = o.Direction).resolve,
                  S = n.orient,
                  E = y.getPosition,
                  L = y.exceededLimit,
                  O = !1;
                function j() {
                  var n = c.drag;
                  C(!n), (a = "free" === n);
                }
                function N(n) {
                  var t, i, r;
                  (l = !1),
                    d ||
                      ((t = R(n)),
                      (i = n.target),
                      (r = c.noDrag),
                      cn(i, "." + mt + ", ." + vt) ||
                        (r && cn(i, r)) ||
                        (!t && n.button) ||
                        (w.isBusy()
                          ? F(n, !0)
                          : ((v = t ? x : window),
                            (s = m.is([G, rn])),
                            (u = null),
                            p(v, zt, A, jt),
                            p(v, Dt, _, jt),
                            y.cancel(),
                            b.cancel(),
                            z(n))));
                }
                function A(n) {
                  var t, i, r, o, u;
                  m.is(6) || (m.set(6), h("drag")),
                    n.cancelable &&
                      (s
                        ? (y.translate(f + D(n) / (O && e.is(Mt) ? 5 : 1)),
                          (u = 200 < M(n)),
                          (t = O !== (O = L())),
                          (u || t) && z(n),
                          (l = !0),
                          h("dragging"),
                          F(n))
                        : U(D((u = n))) > U(D(u, !0)) &&
                          ((t = n),
                          (i = c.dragMinThreshold),
                          (r = un(i)),
                          (o = (r && i.mouse) || 0),
                          (r = (r ? i.touch : +i) || 10),
                          (s = U(D(t)) > (R(t) ? r : o)),
                          F(n)));
                }
                function _(n) {
                  var t, i, r;
                  m.is(6) && (m.set(3), h("dragged")),
                    s &&
                      ((i = (function (n) {
                        return (
                          E() +
                          Ln(n) *
                            Y(
                              U(n) * (c.flickPower || 600),
                              a
                                ? 1 / 0
                                : o.Layout.listSize() * (c.flickMaxPages || 1),
                            )
                        );
                      })(
                        (t = (function (n) {
                          if (e.is(Pt) || !O) {
                            var t = M(n);
                            if (t && t < 200) return D(n) / t;
                          }
                          return 0;
                        })((t = n))),
                      )),
                      (r = c.rewind && c.rewindByDrag),
                      k(!1),
                      a
                        ? w.scroll(i, 0, c.snap)
                        : e.is(It)
                        ? w.go(S(Ln(t)) < 0 ? (r ? "<" : "-") : r ? ">" : "+")
                        : e.is(Mt) && O && r
                        ? w.go(L(!0) ? ">" : "<")
                        : w.go(w.toDest(i), !0),
                      k(!0),
                      F(n)),
                    g(v, zt, A),
                    g(v, Dt, _),
                    (s = !1);
                }
                function T(n) {
                  !d && l && F(n, !0);
                }
                function z(n) {
                  (u = t), (t = n), (f = E());
                }
                function D(n, t) {
                  return I(n, t) - I(P(n), t);
                }
                function M(n) {
                  return mn(n) - mn(P(n));
                }
                function P(n) {
                  return (t === n && u) || t;
                }
                function I(n, t) {
                  return (R(n) ? n.changedTouches[0] : n)[
                    "page" + r(t ? "Y" : "X")
                  ];
                }
                function R(n) {
                  return (
                    "undefined" != typeof TouchEvent && n instanceof TouchEvent
                  );
                }
                function C(n) {
                  d = n;
                }
                return {
                  mount: function () {
                    p(x, zt, on, jt),
                      p(x, Dt, on, jt),
                      p(x, _t, N, jt),
                      p(x, "click", T, { capture: !0 }),
                      p(x, "dragstart", F),
                      i([B, K], j);
                  },
                  disable: C,
                  isDragging: function () {
                    return s;
                  },
                };
              },
              Keyboard: function (t, n, i) {
                var r,
                  o,
                  u = Q(t),
                  e = u.on,
                  c = u.bind,
                  f = u.unbind,
                  a = t.root,
                  s = n.Direction.resolve;
                function l() {
                  var n = i.keyboard;
                  n && ((r = "global" === n ? window : a), c(r, Gt, h));
                }
                function d() {
                  f(r, Gt);
                }
                function v() {
                  var n = o;
                  (o = !0),
                    p(function () {
                      o = n;
                    });
                }
                function h(n) {
                  o ||
                    ((n = Tt(n)) === s(Bn)
                      ? t.go("<")
                      : n === s(Hn) && t.go(">"));
                }
                return {
                  mount: function () {
                    l(), e(K, d), e(K, l), e(H, v);
                  },
                  destroy: d,
                  disable: function (n) {
                    o = n;
                  },
                };
              },
              LazyLoad: function (i, n, o) {
                var t = Q(i),
                  r = t.on,
                  u = t.off,
                  e = t.bind,
                  c = t.emit,
                  f = "sequential" === o.lazyLoad,
                  a = [Dn, V],
                  s = [];
                function l() {
                  D(s),
                    n.Slides.forEach(function (r) {
                      gn(r.slide, Wt).forEach(function (n) {
                        var t = z(n, Ft),
                          i = z(n, Xt);
                        (t === n.src && i === n.srcset) ||
                          ((t = o.classes.spinner),
                          (t =
                            fn((i = n.parentElement), "." + t) ||
                            j("span", t, i)),
                          s.push([n, r, t]),
                          n.src || ln(n, "none"));
                      });
                    }),
                    (f ? p : (u(a), r(a, d), d))();
                }
                function d() {
                  (s = s.filter(function (n) {
                    var t = o.perPage * ((o.preloadPages || 1) + 1) - 1;
                    return !n[1].isWithin(i.index, t) || v(n);
                  })).length || u(a);
                }
                function v(n) {
                  var t = n[0];
                  M(n[1].slide, Et),
                    e(t, "load error", R(h, n)),
                    I(t, "src", z(t, Ft)),
                    I(t, "srcset", z(t, Xt)),
                    P(t, Ft),
                    P(t, Xt);
                }
                function h(n, t) {
                  var i = n[0],
                    r = n[1];
                  X(r.slide, Et),
                    "error" !== t.type &&
                      (T(n[2]), ln(i, ""), c(Wn, i, r), c(jn)),
                    f && p();
                }
                function p() {
                  s.length && v(s.shift());
                }
                return {
                  mount: function () {
                    o.lazyLoad && (l(), r(J, l));
                  },
                  destroy: R(D, s),
                  check: d,
                };
              },
              Pagination: function (l, n, d) {
                var v,
                  h,
                  t = Q(l),
                  p = t.on,
                  g = t.emit,
                  m = t.bind,
                  y = n.Slides,
                  b = n.Elements,
                  w = n.Controller,
                  x = w.hasFocus,
                  r = w.getIndex,
                  e = w.go,
                  c = n.Direction.resolve,
                  k = b.pagination,
                  S = [];
                function E() {
                  v && (T(k ? o(v.children) : v), X(v, h), D(S), (v = null)),
                    t.destroy();
                }
                function L(n) {
                  e(">" + n, !0);
                }
                function O(n, t) {
                  var i = S.length,
                    r = Tt(t),
                    o = A(),
                    u = -1,
                    o =
                      (r === c(Hn, !1, o)
                        ? (u = ++n % i)
                        : r === c(Bn, !1, o)
                        ? (u = (--n + i) % i)
                        : "Home" === r
                        ? (u = 0)
                        : "End" === r && (u = i - 1),
                      S[u]);
                  o && (dn(o.button), e(">" + u), F(t, !0));
                }
                function A() {
                  return d.paginationDirection || d.direction;
                }
                function _(n) {
                  return S[w.toPage(n)];
                }
                function z() {
                  var n,
                    t = _(r(!0)),
                    i = _(r());
                  t && (X((n = t.button), tn), P(n, Qn), I(n, $, -1)),
                    i && (M((n = i.button), tn), I(n, Qn, !0), I(n, $, "")),
                    g("pagination:updated", { list: v, items: S }, t, i);
                }
                return {
                  items: S,
                  mount: function n() {
                    E(), p([K, J, "ei"], n);
                    var t = d.pagination;
                    if ((k && ln(k, t ? "" : "none"), t)) {
                      p([H, Tn, V], z);
                      var t = l.length,
                        i = d.classes,
                        r = d.i18n,
                        o = d.perPage,
                        u = x() ? w.getEnd() + 1 : kn(t / o);
                      M(
                        (v = k || j("ul", i.pagination, b.track.parentElement)),
                        (h = gt + "--" + A()),
                      ),
                        I(v, Z, "tablist"),
                        I(v, nn, r.select),
                        I(v, nt, A() === Jn ? "vertical" : "");
                      for (var e = 0; e < u; e++) {
                        var c = j("li", null, v),
                          f = j("button", { class: i.page, type: "button" }, c),
                          a = y.getIn(e).map(function (n) {
                            return n.slide.id;
                          }),
                          s = !x() && 1 < o ? r.pageX : r.slideX;
                        m(f, "click", R(L, e)),
                          d.paginationKeyboard && m(f, "keydown", R(O, e)),
                          I(c, Z, "presentation"),
                          I(f, Z, "tab"),
                          I(f, Kn, a.join(" ")),
                          I(f, nn, On(s, e + 1)),
                          I(f, $, -1),
                          S.push({ li: c, button: f, page: e });
                      }
                      z(),
                        g(
                          "pagination:mounted",
                          { list: v, items: S },
                          _(l.index),
                        );
                    }
                  },
                  destroy: E,
                  getAt: _,
                  update: z,
                };
              },
              Sync: function (i, n, t) {
                var r = t.isNavigation,
                  o = t.slideFocus,
                  u = [];
                function e() {
                  var n, t;
                  i.splides.forEach(function (n) {
                    n.isParent || (f(i, n.splide), f(n.splide, i));
                  }),
                    r &&
                      ((n = Q(i)),
                      (t = n.on)(Mn, s),
                      t(Yn, l),
                      t([B, K], a),
                      u.push(n),
                      n.emit(Gn, i.splides));
                }
                function c() {
                  u.forEach(function (n) {
                    n.destroy();
                  }),
                    D(u);
                }
                function f(n, r) {
                  n = Q(n);
                  n.on(H, function (n, t, i) {
                    r.go(r.is(Pt) ? i : n);
                  }),
                    u.push(n);
                }
                function a() {
                  I(n.Elements.list, nt, t.direction === Jn ? "vertical" : "");
                }
                function s(n) {
                  i.go(n.index);
                }
                function l(n, t) {
                  b(Yt, Tt(t)) && (s(n), F(t));
                }
                return {
                  setup: R(n.Media.set, { slideFocus: en(o) ? r : o }, !0),
                  mount: e,
                  destroy: c,
                  remount: function () {
                    c(), e();
                  },
                };
              },
              Wheel: function (e, c, f) {
                var n = Q(e).bind,
                  a = 0;
                function t(n) {
                  var t, i, r, o, u;
                  n.cancelable &&
                    ((t = (u = n.deltaY) < 0),
                    (i = mn(n)),
                    (r = f.wheelMinThreshold || 0),
                    (o = f.wheelSleep || 0),
                    U(u) > r && o < i - a && (e.go(t ? "<" : ">"), (a = i)),
                    (u = t),
                    (f.releaseWheel &&
                      !e.state.is(G) &&
                      -1 === c.Controller.getAdjacent(u)) ||
                      F(n));
                }
                return {
                  mount: function () {
                    f.wheel && n(c.Elements.track, "wheel", t, jt);
                  },
                };
              },
              Live: function (n, t, i) {
                var r = Q(n).on,
                  o = t.Elements.track,
                  u = i.live && !i.isNavigation,
                  e = j("span", wt),
                  c = qn(90, R(f, !1));
                function f(n) {
                  I(o, rt, n), n ? (L(o, e), c.start()) : (T(e), c.cancel());
                }
                function a(n) {
                  u && I(o, it, n ? "off" : "polite");
                }
                return {
                  mount: function () {
                    u &&
                      (a(!t.Autoplay.isPaused()),
                      I(o, ot, !0),
                      (e.textContent = "…"),
                      r(Fn, R(a, !0)),
                      r(Xn, R(a, !1)),
                      r([Dn, V], R(f, !0)));
                  },
                  disable: a,
                  destroy: function () {
                    P(o, [it, ot, rt]), T(e);
                  },
                };
              },
            }),
            qt = {
              type: "slide",
              role: "region",
              speed: 400,
              perPage: 1,
              cloneStatus: !0,
              arrows: !0,
              pagination: !0,
              paginationKeyboard: !0,
              interval: 5e3,
              pauseOnHover: !0,
              pauseOnFocus: !0,
              resetProgress: !0,
              easing: "cubic-bezier(0.25, 1, 0.5, 1)",
              drag: !0,
              direction: "ltr",
              trimSpace: !0,
              focusableNodes: "a, button, textarea, input, select, iframe",
              live: !0,
              classes: {
                slide: at,
                clone: st,
                arrows: dt,
                arrow: vt,
                prev: ht,
                next: pt,
                pagination: gt,
                page: mt,
                spinner: i + "spinner",
              },
              i18n: {
                prev: "Previous slide",
                next: "Next slide",
                first: "Go to first slide",
                last: "Go to last slide",
                slideX: "Go to slide %s",
                pageX: "Go to page %s",
                play: "Start autoplay",
                pause: "Pause autoplay",
                carousel: "carousel",
                slide: "slide",
                select: "Select a slide to show",
                slideLabel: "%s of %s",
              },
              reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
            };
          function Bt(n, t, i) {
            var r = t.Slides;
            function o() {
              r.forEach(function (n) {
                n.style("transform", "translateX(-" + 100 * n.index + "%)");
              });
            }
            return {
              mount: function () {
                Q(n).on([B, J], o);
              },
              start: function (n, t) {
                r.style("transition", "opacity " + i.speed + "ms " + i.easing),
                  p(t);
              },
              cancel: on,
            };
          }
          function Ht(u, n, e) {
            var c,
              f = n.Move,
              a = n.Controller,
              s = n.Scroll,
              t = n.Elements.list,
              l = R(_, t, "transition");
            function i() {
              l(""), s.cancel();
            }
            return {
              mount: function () {
                Q(u).bind(t, "transitionend", function (n) {
                  n.target === t && c && (i(), c());
                });
              },
              start: function (n, t) {
                var i = f.toPosition(n, !0),
                  r = f.getPosition(),
                  o = (function (n) {
                    var t = e.rewindSpeed;
                    if (u.is(Mt) && t) {
                      var i = a.getIndex(!0),
                        r = a.getEnd();
                      if ((0 === i && r <= n) || (r <= i && 0 === n)) return t;
                    }
                    return e.speed;
                  })(n);
                1 <= U(i - r) && 1 <= o
                  ? e.useScroll
                    ? s.scroll(i, o, !1, t)
                    : (l("transform " + o + "ms " + e.easing),
                      f.translate(i, !0),
                      (c = t))
                  : (f.jump(n), t());
              },
              cancel: i,
            };
          }
          t = (function () {
            function i(n, t) {
              (this.event = Q()),
                (this.Components = {}),
                (this.state = s(1)),
                (this.splides = []),
                (this.n = {}),
                (this.t = {});
              n = C(n) ? pn(document, n) : n;
              bn(n, n + " is invalid."),
                (t = d(
                  {
                    label: z((this.root = n), nn) || "",
                    labelledby: z(n, Zn) || "",
                  },
                  qt,
                  i.defaults,
                  t || {},
                ));
              try {
                d(t, JSON.parse(z(n, f)));
              } catch (n) {
                bn(!1, "Invalid JSON");
              }
              this.n = Object.create(d({}, t));
            }
            var n = i.prototype;
            return (
              (n.mount = function (n, t) {
                var i = this,
                  r = this.state,
                  o = this.Components;
                return (
                  bn(r.is([1, 7]), "Already mounted!"),
                  r.set(1),
                  (this.i = o),
                  (this.r = t || this.r || (this.is(It) ? Bt : Ht)),
                  (this.t = n || this.t),
                  w(
                    an({}, Ut, this.t, { Transition: this.r }),
                    function (n, t) {
                      n = n(i, o, i.n);
                      (o[t] = n).setup && n.setup();
                    },
                  ),
                  w(o, function (n) {
                    n.mount && n.mount();
                  }),
                  this.emit(B),
                  M(this.root, "is-initialized"),
                  r.set(3),
                  this.emit("ready"),
                  this
                );
              }),
              (n.sync = function (n) {
                return (
                  this.splides.push({ splide: n }),
                  n.splides.push({ splide: this, isParent: !0 }),
                  this.state.is(3) &&
                    (this.i.Sync.remount(), n.Components.Sync.remount()),
                  this
                );
              }),
              (n.go = function (n) {
                return this.i.Controller.go(n), this;
              }),
              (n.on = function (n, t) {
                return this.event.on(n, t), this;
              }),
              (n.off = function (n) {
                return this.event.off(n), this;
              }),
              (n.emit = function (n) {
                var t;
                return (
                  (t = this.event).emit.apply(t, [n].concat(o(arguments, 1))),
                  this
                );
              }),
              (n.add = function (n, t) {
                return this.i.Slides.add(n, t), this;
              }),
              (n.remove = function (n) {
                return this.i.Slides.remove(n), this;
              }),
              (n.is = function (n) {
                return this.n.type === n;
              }),
              (n.refresh = function () {
                return this.emit(J), this;
              }),
              (n.destroy = function (t) {
                void 0 === t && (t = !0);
                var n = this.event,
                  i = this.state;
                return (
                  i.is(1)
                    ? Q(this).on("ready", this.destroy.bind(this, t))
                    : (w(
                        this.i,
                        function (n) {
                          n.destroy && n.destroy(t);
                        },
                        !0,
                      ),
                      n.emit(a),
                      n.destroy(),
                      t && D(this.splides),
                      i.set(7)),
                  this
                );
              }),
              Jt(i, [
                {
                  key: "options",
                  get: function () {
                    return this.n;
                  },
                  set: function (n) {
                    this.i.Media.set(n, !0, !0);
                  },
                },
                {
                  key: "length",
                  get: function () {
                    return this.i.Slides.getLength(!0);
                  },
                },
                {
                  key: "index",
                  get: function () {
                    return this.i.Controller.getIndex();
                  },
                },
              ]),
              i
            );
          })();
          return (t.defaults = {}), (t.STATES = r), t;
        }),
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = t())
          : "function" == typeof define && define.amd
          ? define(t)
          : ((n =
              "undefined" != typeof globalThis
                ? globalThis
                : n || self).Splide = t());

      while (!window.Splide) {
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      addStyle(`
.splide__container{box-sizing:border-box;position:relative}.splide__list{backface-visibility:hidden;display:-ms-flexbox;display:flex;height:100%;margin:0!important;padding:0!important}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide:not(.is-overflow) .splide__pagination{display:none}.splide__progress__bar{width:0}.splide{position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{backface-visibility:hidden;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;list-style-type:none!important;margin:0;position:relative}.splide__slide img{vertical-align:bottom}.splide__spinner{animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__sr{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.splide__toggle.is-active .splide__toggle__play,.splide__toggle__pause{display:none}.splide__toggle.is-active .splide__toggle__pause{display:inline}.splide__track{overflow:hidden;position:relative;z-index:0}@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide__track--draggable{-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.splide__track--fade>.splide__list>.splide__slide{margin:0!important;opacity:0;z-index:0}.splide__track--fade>.splide__list>.splide__slide.is-active{opacity:1;z-index:1}.splide--rtl{direction:rtl}.splide__track--ttb>.splide__list{display:block}.splide__arrow{-ms-flex-align:center;align-items:center;background:#ccc;border:0;border-radius:50%;cursor:pointer;display:-ms-flexbox;display:flex;height:2em;-ms-flex-pack:center;justify-content:center;opacity:.7;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:2em;z-index:1}.splide__arrow svg{fill:#000;height:1.2em;width:1.2em}.splide__arrow:hover:not(:disabled){opacity:.9}.splide__arrow:disabled{opacity:.3}.splide__arrow:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide__arrow--prev{left:1em}.splide__arrow--prev svg{transform:scaleX(-1)}.splide__arrow--next{right:1em}.splide.is-focus-in .splide__arrow:focus{outline:3px solid #0bf;outline-offset:3px}.splide__pagination{bottom:.5em;left:0;padding:0 1em;position:absolute;right:0;z-index:1}.splide__pagination__page{background:#ccc;border:0;border-radius:50%;display:inline-block;height:8px;margin:3px;opacity:.7;padding:0;position:relative;transition:transform .2s linear;width:8px}.splide__pagination__page.is-active{background:#fff;transform:scale(1.4);z-index:1}.splide__pagination__page:hover{cursor:pointer;opacity:.9}.splide__pagination__page:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide.is-focus-in .splide__pagination__page:focus{outline:3px solid #0bf;outline-offset:3px}.splide__progress__bar{background:#ccc;height:3px}.splide__slide{-webkit-tap-highlight-color:rgba(0,0,0,0)}.splide__slide:focus{outline:0}@supports(outline-offset:-3px){.splide__slide:focus-visible{outline:3px solid #0bf;outline-offset:-3px}}@media screen and (-ms-high-contrast:none){.splide__slide:focus-visible{border:3px solid #0bf}}@supports(outline-offset:-3px){.splide.is-focus-in .splide__slide:focus{outline:3px solid #0bf;outline-offset:-3px}}@media screen and (-ms-high-contrast:none){.splide.is-focus-in .splide__slide:focus{border:3px solid #0bf}.splide.is-focus-in .splide__track>.splide__list>.splide__slide:focus{border-color:#0bf}}.splide__toggle{cursor:pointer}.splide__toggle:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide.is-focus-in .splide__toggle:focus{outline:3px solid #0bf;outline-offset:3px}.splide__track--nav>.splide__list>.splide__slide{border:3px solid transparent;cursor:pointer}.splide__track--nav>.splide__list>.splide__slide.is-active{border:3px solid #000}.splide__arrows--rtl .splide__arrow--prev{left:auto;right:1em}.splide__arrows--rtl .splide__arrow--prev svg{transform:scaleX(1)}.splide__arrows--rtl .splide__arrow--next{left:1em;right:auto}.splide__arrows--rtl .splide__arrow--next svg{transform:scaleX(-1)}.splide__arrows--ttb .splide__arrow{left:50%;transform:translate(-50%)}.splide__arrows--ttb .splide__arrow--prev{top:1em}.splide__arrows--ttb .splide__arrow--prev svg{transform:rotate(-90deg)}.splide__arrows--ttb .splide__arrow--next{bottom:1em;top:auto}.splide__arrows--ttb .splide__arrow--next svg{transform:rotate(90deg)}.splide__pagination--ttb{bottom:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;left:auto;padding:1em 0;right:.5em;top:0}
`);

      resolve(true);
    });
  }

  function _waitForElement(selector, delay = 50, tries = 100) {
    const element = document.querySelector(selector);

    if (!window[`__${selector}`]) {
      window[`__${selector}`] = 0;
      window[`__${selector}__delay`] = delay;
      window[`__${selector}__tries`] = tries;
    }

    function _search() {
      return new Promise((resolve) => {
        window[`__${selector}`]++;
        setTimeout(resolve, window[`__${selector}__delay`]);
      });
    }

    if (element === null) {
      if (window[`__${selector}`] >= window[`__${selector}__tries`]) {
        window[`__${selector}`] = 0;
        return Promise.resolve(null);
      }

      return _search().then(() => _waitForElement(selector));
    } else {
      return Promise.resolve(element);
    }
  }

  async function loadData() {
    return new Promise(async (resolve, reject) => {
      await awaitEcwid();
      const data = JSON.parse(
        window.Ecwid.getAppPublicConfig("easy-upsell-dev"),
      );

      if (window.ezfyUpsellData !== null) {
        resolve(window.ezfyUpsellData);
        return;
      }

      window.ezfyUpsellData = data;

      console.log("my data:", data);

      resolve(data);
    });
  }

  async function getUpsellProducts() {
    return new Promise(async (resolve, reject) => {
      await awaitEcwid();

      Ecwid.Cart.get(async (cart) => {
        var ids = cart.items.map((e) => e.product.id);

        let upsells = [];

        for (var id of ids) {
          const upsell = window.ezfyUpsellData.upsellProducts.filter(
            (e) => parseInt(e.id) === parseInt(id),
          )[0];

          upsells.push(upsell);
        }

        const __filtered = upsells
          .filter((e) => e !== undefined)
          .map((e) => e.bundle.map((e) => e))
          .flat()
          .filter((e) => !ids.includes(e.id));

        const _filtered = [...new Set([...__filtered])];

        const filtered = await ensureUpsellProductsAreSyncWithAPI(_filtered);

        resolve(filtered);
      });
    });
  }

  /* Ensure products are up to date with API.
  E.g. if price was changed, reflect it on front-end */

  function ensureUpsellProductsAreSyncWithAPI(products) {
    return new Promise(async (resolve) => {
      const { items: all } = await getProductsData();

      let elementsInBothArrays = all.filter((objA) =>
        products.some((objB) => objB.id === objA.id),
      );

      let properties = Object.keys(products[0]).filter((property) => {
        return elementsInBothArrays.every((obj) => property in obj);
      });

      let result = products.map((product) => {
        const matchingItem = all.find((item) => item.id === product.id); // Find matching element in all
        const commonProperties = Object.keys(product).filter(
          (property) => property in matchingItem,
        );

        const additionalProperties = {
          totalOptions: product.totalOptions,
        };

        return commonProperties.reduce((acc, property) => {
          acc[property] = matchingItem[property];
          return acc;
        }, additionalProperties);
      });

      resolve(result);
    });
  }

  function getProductsData() {
    return new Promise((resolve, reject) => {
      var url = `https://app.ecwid.com/api/v3/${window.Ecwid.getOwnerId()}/products?token=${
        window.Ecwid.publicToken
      }`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((product) => {
          resolve(product);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  function getProductData(id) {
    return new Promise((resolve, reject) => {
      var url = `https://app.ecwid.com/api/v3/${window.Ecwid.getOwnerId()}/products/${id}?token=${
        window.Ecwid.publicToken
      }`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((product) => {
          resolve(product);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async function awaitEcwid() {
    return new Promise(async (resolve, reject) => {
      if (window.hasOwnProperty("ecwidIsLoaded")) {
        resolve();
        return;
      }

      while (!window.hasOwnProperty("Ecwid")) {
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      while (!Ecwid.hasOwnProperty("Cart")) {
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      window.ecwidIsLoaded = true;

      resolve();
    });
  }

  async function injectCartUpsell(_products) {
    const $body = document.querySelector(`.ec-cart__sidebar-inner`)
      ? document.querySelector(`.ec-cart__sidebar-inner`)
      : await _waitForElement(`.ec-cart__sidebar-inner`);

    if (!$body) {
      return;
    }

    const $ezfycart = document.querySelector(`.EzfyCart`);

    if ($ezfycart) {
      return;
    }

    let products = "";

    console.log("all products", products);

    for (var each of _products) {
      let url = each.url;

      if (USE_CUSTOM_URLS) {
        const _url = each.name
          .replace(/[^\w\s]/gi, "")
          .toLowerCase()
          .split(" ")
          .join("-");

        url = `https://ezfycode.com/shop/${_url.replaceAll("--", "-")}`;
      }

      const isPopup = parseInt(each.totalOptions) <= 0 ? false : true;

      console.log(each.totalOptions);

      const html = `
      <div  data-total-options="${
        each.totalOptions
      }" data-id-ezfy-upsell-cart="${
        each.id
      }" class="EzfyCart-item EzfyCart-item--${each.id}">
      <a data-id-ezfy-upsell-cart="${each.id}" target="_blank" href="${url}">
    	<figure class="EzfyCart-figure">
			<img class="EzfyCart-image" src="${each.thumbnailUrl}" alt="${each.name}">
		</figure>
			<div class="EzfyCart-item-title">${each.name}</div>
			<div class="EzfyCart-prices">
        <div data-price="${each.price}" class="EzfyCart-price">${
        each.defaultDisplayedPriceFormatted
      }</div>
        <div class="EzfyCart-compare-price">${
          each.hasOwnProperty("compareToPriceDiscountFormatted")
            ? each.compareToPriceFormatted
            : ""
        } </div>
      </div>

      <!--
			<div class="EzfyCart-quantity">
        <button class="EzfyCart-minus"><span>-</span></button>
        <input type="number" class="EzfyCart-amount">
        <button class="EzfyCart-minus"><span>+</span></button>
      </div>
      -->

      </a>

      <button 
      data-is-popup="${isPopup}" 
      data-is-link-popup="${OPEN_PRODUCTS_IN_POPUP}"
      
      class="EzfyCart-atc">
<span class="EzfyCart-atc-text">${
        isPopup ? "Choose Options" : "Add to Cart"
      }</span>
      <div class="EzfyCart-atc-loading">
                    <svg class="EzfyCart-atc-icon"  focusable="false" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                      <circle fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                    </svg>
                  </div>
      </button>
      </div>
      `;

      products += html;
    }

    const html = `
    <div class="EzfyCart" data-ezfy-products-quantity="${products.length}">
    <p class="EzfyCart-title">Frequently Bought Together</p>
	  <div class="EzfyCart-items">
      ${products}
    </div>
    </div>
    `;

    $body.insertAdjacentHTML(`beforeend`, html);
  }

  function injectReacPlaceholder() {
    const $body = document.querySelector(`body`);

    if (!$body) {
      return;
    }

    const html = `<div id="EzfyCartApp"></div>`;

    $body.insertAdjacentHTML(`afterbegin`, html);
  }

  function getProductsInCart() {
    return new Promise((resolve, reject) => {
      let products = [];

      window.Ecwid.Cart.get(function (cart) {
        cart.items
          .map((e) => e.product)
          .map((_product) => products.push(_product.id));
      });

      resolve(products);
    });
  }

  async function addToCart(id, quantity, options = {}) {
    return new Promise(async (resolve, reject) => {
      const product = {
        id,
        quantity,
        options,
        callback: function (success, product, cart) {
          resolve();
        },
      };
      Ecwid.Cart.addProduct(product);
    });
  }

  function injectPopupHTML() {
    const $popup = document.querySelector(`.EzfyPopup`);

    if (!$popup) {
      const html = `<div class="EzfyPopup EzfyPopup--invisible">
      <div class="EzfyPopup-container">
      <button onclick="window.ezfyEasyUpsellApp.handlePopupClose(event)" class="EzfyPopup-close"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="icon icon-close" fill="none" viewBox="0 0 18 17"><path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor"></path></svg></button>
      <div class="EzfyPopup-body">
      <p>Loading...</p>
      </div>
 
    </div>
    </div>`;

      const $body = document.querySelector(`body`);

      $body.insertAdjacentHTML("beforeend", html);
    }
  }

  async function handlePopupClose(e = null) {
    if (e) {
      const $this = e.target;
      const $parent = $this.closest(`.EzfyPopup`);
      $parent.classList.add(`EzfyPopup--invisible`);
      try {
        window.ezfyUpsellPopupSlider.destroy();
      } catch (err) {}
    }

    /* ESC */
    document.addEventListener("keydown", function (e) {
      let keyCode = e.keyCode;

      if (keyCode === 27) {
        const $popup = document.querySelector(`.EzfyPopup`);
        $popup.classList.add(`EzfyPopup--invisible`);
        window.ezfyUpsellPopupSlider.destroy();
      }
    });

    document.addEventListener(
      "click",
      function (e) {
        const $popup = document.querySelector(`.EzfyPopup--invisible`);

        if ($popup) {
          return;
        }

        if (e.target.className === "EzfyPopup") {
          const $popup = document.querySelector(`.EzfyPopup`);
          $popup.classList.add(`EzfyPopup--invisible`);
          window.ezfyUpsellPopupSlider.destroy();
        }
      },
      false,
    );
  }

  async function populatePopupWithProductData(productJSON) {
    /* Open popup */

    const $popup = document.querySelector(`.EzfyPopup--invisible`);

    if ($popup) {
      $popup.classList.remove(`EzfyPopup--invisible`);
    }

    const $content = $popup.querySelector(`.EzfyPopup-body`);
    $popup.setAttribute(`data-id-ezfy-upsell-cart`, productJSON.id);

    /* Inject product HTML */

    console.log("prod info:", productJSON);

    const {
      hdThumbnailUrl: image,
      name,
      defaultDisplayedPriceFormatted,
      compareToPriceDiscountFormatted,
      compareToPriceFormatted,
      options,
      inStock,
      description,
    } = productJSON;

    const images =
      productJSON.galleryImages.length > 0 ? productJSON.galleryImages : null;

    let optionsHTML = "";
    let initDatePicker = false;

    for (var [index, each] of options.entries()) {
      let choicesHTML = "";
      console.log("options: ", each);

      if (each.type === "SELECT") {
        for (var [i, choice] of each.choices.entries()) {
          if (i === 0) {
            choicesHTML += `<option selected>Please choose</option>`;
          }

          console.log("choice", choice);
          choicesHTML += `
				<option data-price="${choice.priceModifier}" data-value="${choice.text}" ${
            i === each.defaultChoice ? "selected" : ""
          }>${choice.text} ${
            choice.priceModifier !== 0
              ? ` (+${window.Ecwid.formatCurrency(choice.priceModifier)})`
              : ""
          }</option>
				`;
        }

        optionsHTML += `
			<div
			data-option-type="select"
			class="EzfyProduct-option EzfyProduct-option--select" data-option-name="${each.name}">
				<span class="EzfyProduct-option-label">${each.name}</span>
				<select>
				${choicesHTML}
		</select>
			</div>
			`;
      }

      if (each.type === "RADIO") {
        for (var [i, choice] of each.choices.entries()) {
          choicesHTML += `
				<div class="EzfyProduct-radios">
				  <div class="EzfyProduct-radio-field">
					<input data-price="${choice.priceModifier}"  type="radio" id="${
            choice.text
          }" name="${each.name}" value="${choice.text}" ${
            i === each.defaultChoice ? "checked" : ""
          }>
        			<label for="${choice.text}">${
            choice.text
          }<div class="EzfyProduct-radio-cost">
        				${
                  choice.priceModifier !== 0
                    ? ` (+${window.Ecwid.formatCurrency(choice.priceModifier)})`
                    : ""
                }
        			</div></label>
        			
				  </div>
				</div>
				`;
        }

        optionsHTML += `
			<div
			data-option-type="radio"
			class="EzfyProduct-option EzfyProduct-option--radio" data-option-name="${each.name}">
				<span class="EzfyProduct-option-label">${each.name}</span>
				${choicesHTML}
		
			</div>
			`;
      }

      if (each.type === "SIZE") {
        for (var [i, choice] of each.choices.entries()) {
          choicesHTML += `
				<div class="EzfyProduct-size">
				  <div class="EzfyProduct-size-field">
					<input data-price="${choice.priceModifier}"  type="radio" id="${
            choice.text
          }" name="${each.name}" value="${choice.text}" ${
            i === each.defaultChoice ? "checked" : ""
          }>
					<div>
        			<label for="${choice.text}">
	        			<span>${choice.text}</span>
	        			<div class="EzfyProduct-size-cost">
	        				${
                    choice.priceModifier !== 0
                      ? `+${window.Ecwid.formatCurrency(choice.priceModifier)}`
                      : ""
                  }
	        			</div>
        			</label>
        			</div>
        			
				  </div>
				</div>
				`;
        }

        optionsHTML += `
			<div
			data-option-type="size"
			class="EzfyProduct-option EzfyProduct-option--size" data-option-name="${each.name}">
				<span class="EzfyProduct-option-label">${each.name}</span>
				<div class="EzfyProduct-size-items">
				${choicesHTML}
				</div>
			</div>
			`;
      }

      if (each.type === "CHECKBOX") {
        for (var [i, choice] of each.choices.entries()) {
          const id = `${choice.text}__${index}`;

          choicesHTML += `
				<div class="EzfyProduct-checkbox">
				
				  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="checkmark" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
      </path>
    </symbol>
  </svg>
				
        		
       
 		 <input data-price="${
       choice.priceModifier
     }"  class="EzfyProduct-checkbox-input" type="checkbox" id="${id}" name="${id}" value="${
            choice.text
          }" >

  					
			<label for="${id}">
				<svg><use xlink:href="#checkmark" /></svg>
				
				<div style="display:flex;">
					<span class="EzfyProduct-checkbox-text">${choice.text}</span>
					<div class="EzfyProduct-checkbox-cost">
						${
              choice.priceModifier !== 0
                ? `(+${window.Ecwid.formatCurrency(choice.priceModifier)})`
                : ""
            }
					</div>
	        	</div>	
			</label>
			</div>
				`;
        }

        optionsHTML += `
			<div
			data-option-type="checkbox"
			class="EzfyProduct-option EzfyProduct-option--checkbox" data-option-name="${each.name}">
				<span class="EzfyProduct-option-label">${each.name}</span>
				<div class="EzfyProduct-checkbox-items">
				${choicesHTML}
				</div>
			</div>
			`;
      }

      if (each.type === "TEXTFIELD") {
        optionsHTML += `
			<div
			data-option-type="textfield"
			class="EzfyProduct-option EzfyProduct-option--textfield" data-option-name="${each.name}">
				<span class="EzfyProduct-option-label">${each.name}</span>
				<input class="EzfyProduct-textfield-input" type="text" placeholder="Enter your text" />
			</div>
			`;
      }

      if (each.type === "TEXTAREA") {
        optionsHTML += `
			<div
			data-option-type="textarea"
			class="EzfyProduct-option EzfyProduct-option--textfield" data-option-name="${each.name}">
				<span class="EzfyProduct-option-label">${each.name}</span>
				<textarea class="EzfyProduct-textfield-textarea" placeholder="Enter your text"></textarea>
			</div>
			`;
      }

      if (each.type === "DATE") {
        await loadAirDatePicker();

        optionsHTML += `
			<div
			data-option-type="date"
			class="EzfyProduct-option EzfyProduct-option--date" data-option-name="${each.name}">
				<span class="EzfyProduct-option-label">${each.name}</span>
				<input class="EzfyProduct-textfield-input EzfyProduct-textfield-date-picker" type="text" placeholder="${each.name}" />
			</div>
			`;

        initDatePicker = true;
      }
    }

    var gallery = "";

    if (images) {
      for (var img of images) {
        gallery += `
			<li class="EzfyProduct-figure splide__slide ">
						<img class="EzfyProduct-image" src="${img.hdThumbnailUrl}" />
					</li>
		`;
      }
    }

    const isSlider = images ? true : false;

    const html = `
	<div class="EzfyProduct">
	
		<div class="EzfyProduct-left">
		<div class="splide" data-is-slider="${isSlider}" role="group">
			  <div class="splide__track">
					<ul class="splide__list">
					<li class="splide__slide EzfyProduct-figure">
						<img class="EzfyProduct-image" src="${image}" alt="${name}" />
					</li>
						
					${gallery}
					</ul>
			  </div>
			</div>
			
		</div>
		
		<div class="EzfyProduct-right">
			<h2 class="EzfyProduct-title">${name}</h2>
			<div class="EzfyProduct-prices">
		        <div class="EzfyProduct-price">${defaultDisplayedPriceFormatted}</div>
		        <div class="EzfyProduct-compare-price">${
              compareToPriceDiscountFormatted ? compareToPriceFormatted : ""
            } 
	        </div>
	        </div>
	        <div class="EzfyProduct-options">
	        	${optionsHTML}
	        </div>
	    	<div class="EzfyProduct-atc-wrapper">
	       		<span class="EzfyProduct-available EzfyProduct-mini-title">${
              inStock ? "In stock" : "Not available"
            }</span>
        	  	<button id="EzfyPopupATC">Add to Cart</button>
			</div>	
			<div class="EzfyProduct-description">
			<div class="EzfyProduct-description-title EzfyProduct-mini-title">Product description</div>
			
			<div class="EzfyProduct-text">${description}</div>
			</div>
		
		
		</div>
	
	</div>
	`;

    $content.innerHTML = html;

    if (images) {
      initSplideSlider();
    }

    if (initDatePicker) {
      const $inputs = document.querySelectorAll(
        `.EzfyProduct-textfield-date-picker`,
      );

      for (var each of $inputs) {
        new AirDatepicker(each, { inline: true });
      }
    }

    /* Handle ATC */
    const $atc = document.querySelector(`#EzfyPopupATC`);

    $atc.addEventListener(`click`, async function (e) {
      const $this = e.target;
      const $parent = $this.closest(`[data-id-ezfy-upsell-cart]`);
      const $options = document.querySelectorAll(`.EzfyProduct-option`);

      const id = parseInt($parent.getAttribute("data-id-ezfy-upsell-cart"));
      const quantity = 1;
      let options = {};

      for (var each of $options) {
        const name = each.getAttribute(`data-option-name`);
        const type = each.getAttribute("data-option-type");

        let value;

        if (type === "radio" || type === "size") {
          const $input = each.querySelector(`input:checked`);

          if ($input) {
            value = $input.value;
          }
        }

        if (type === "select") {
          const $select = each.querySelector(`select`);
          value =
            $select.options[$select.selectedIndex].getAttribute("data-value");
        }

        if (type === "checkbox") {
          const $checkboxes = each.querySelectorAll(
            `input[type="checkbox"]:checked`,
          );

          if ($checkboxes) {
            value = "";
            for (var [loop, $checkbox] of $checkboxes.entries()) {
              if ($checkbox.value) {
                value += $checkbox.value + "||";
              }
            }
            value = value
              .split("||")
              .filter((e) => e !== "")
              .join(",");
          }
        }

        if (type === "textfield") {
          const $input = each.querySelector(`.EzfyProduct-textfield-input`);

          if (!$input) {
            return;
          }

          value = $input.value.trim();
        }

        if (type === "textarea") {
          const $textarea = each.querySelector(
            `.EzfyProduct-textfield-textarea`,
          );

          if (!$textarea) {
            return;
          }

          value = $textarea.value.trim();
        }

        if (type === "date") {
          const $date = each.querySelector(
            `.EzfyProduct-textfield-date-picker`,
          );

          if (!$date) {
            return;
          }

          value = new Date($date.value).getTime().toString();
        }

        options[name] = value;
      }

      console.log("mh options", options);

      const res = await addToCart(id, quantity, options);

      /* Return to cart */
      document.querySelector(`.EzfyPopup-close`).click();

      const $product = document.querySelector(
        `.EzfyCart-item[data-id-ezfy-upsell-cart="${id}"]`,
      );

      const $text = $product.querySelector(`.EzfyCart-atc-text`);
      $text.textContent = `Added`;
    });
  }

  async function handlePopupOpen($atc) {
    const text = $atc.textContent;
    const $parent = $atc.closest(`.EzfyCart-item`);
    const id = $parent.getAttribute(`data-id-ezfy-upsell-cart`);

    $parent.classList.add(`EzfyCart-item--loading`);

    const product = await getProductData(id);

    /* Remove cart loading icon */
    $parent.classList.remove(`EzfyCart-item--loading`);

    populatePopupWithProductData(product);
    handleInputOnChange();
  }

  async function initSplideSlider() {
    await loadSplide();

    const $slider = document.querySelector(`.splide[data-is-slider="true"]`);

    if (!$slider) {
      // show image
      return;
    }

    window.ezfyUpsellPopupSlider = new Splide(
      ' .splide[data-is-slider="true"]',
      { perPage: 1, autoHeight: true, height: 300 },
    );

    window.ezfyUpsellPopupSlider.mount();
  }

  async function openProductLinksInPopup() {
    if (!OPEN_PRODUCTS_IN_POPUP) {
      return;
    }

    const $links = document.querySelectorAll(
      `a[data-id-ezfy-upsell-cart]:not([data-has-listener])`,
    );

    if (!$links) {
      return;
    }

    for (var each of $links) {
      each.setAttribute("data-has-listener", "true");
      each.addEventListener(`click`, async function (e) {
        e.preventDefault();

        const $this = e.target;

        let $atc;

        $atc = $this.querySelector(`.EzfyCart-atc`);

        if ($atc) {
          handlePopupOpen($atc);
          return;
        }

        const $parent = $this.closest(`.EzfyCart-item`);

        $atc = $parent.querySelector(`.EzfyCart-atc`);

        if ($atc) {
          handlePopupOpen($atc);
          return;
        }
      });
    }
  }

  async function handleAddToCart() {
    let $atc;
    $atc = await _waitForElement(`.EzfyCart-atc`);

    if (!$atc) {
      return;
    }

    const $atcs = document.querySelectorAll(
      `.EzfyCart-atc:not([data-has-listener])`,
    );

    if (!$atcs) {
      return;
    }

    for (var each of $atcs) {
      each.setAttribute("data-has-listener", "true");
      each.addEventListener(`click`, async function (e) {
        const $atc = e.target;
        const $parent = $atc.closest(`.EzfyCart-item`);

        const isPopup =
          $atc.getAttribute(`data-is-popup`).toLowerCase() === "true"
            ? true
            : false;

        const isLinkPopup =
          $atc.getAttribute(`data-is-link-popup`).toLowerCase() === "true"
            ? true
            : false;

        if (isPopup) {
          handlePopupOpen($atc);
          return;
        }

        const text = $atc.textContent;
        const id = parseInt($parent.getAttribute("data-id-ezfy-upsell-cart"));

        console.log("listening click id", id);

        if (window[`adding-${id}`]) {
          return;
        }

        await addToCart(id, 1);

        $atc.textContent = `Added`;

        window[`adding-${id}`] = true;

        setTimeout(() => {
          window[`adding-${id}`] = false;
        });
      });
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function scrollableProducts() {
    const $slider = await _waitForElement(".EzfyCart-items");

    let isDown = false;
    let startX;
    let scrollLeft;

    $slider.addEventListener("mousedown", (e) => {
      let rect = $slider.getBoundingClientRect();
      isDown = true;
      $slider.classList.add("EzfyCart-items--active");
      startX = e.pageX - rect.left;
      scrollLeft = $slider.scrollLeft;
    });

    $slider.addEventListener("mouseleave", () => {
      isDown = false;
      $slider.dataset.dragging = false;
      $slider.classList.remove("EzfyCart-items--active");
    });

    $slider.addEventListener("mouseup", () => {
      isDown = false;
      $slider.dataset.dragging = false;
      $slider.classList.remove("EzfyCart-items--active");
    });

    $slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      let rect = $slider.getBoundingClientRect();
      e.preventDefault();
      $slider.dataset.dragging = true;
      const x = e.pageX - rect.left;
      const walk = x - startX;
      $slider.scrollLeft = scrollLeft - walk;
    });
  }

  function waitForImageToLoad($image) {
    return new Promise((resolve, reject) => {
      if (!$image) {
        reject(new Error("Image element not found."));
        return;
      }

      $image.addEventListener("load", () => {
        resolve();
      });

      $image.addEventListener("error", () => {
        reject(new Error("Image failed to load."));
      });
    });
  }

  async function makeImagesSameHeight() {
    var $figure = await _waitForElement(
      `.EzfyCart-items > *:nth-child(1) .EzfyCart-image`,
    );

    await waitForImageToLoad($figure);

    var $figures = document.querySelectorAll(`.EzfyCart-figure`);

    var heights = [];

    document.documentElement.style.setProperty(`--ezfy-figure-height`, "auto");

    for (var each of $figures) {
      var height = each.offsetHeight;
      heights.push(height);
    }

    var height = `${Math.max(...heights)}px`;

    document.documentElement.style.setProperty(`--ezfy-figure-height`, height);
  }

  async function start() {
    const products = await getUpsellProducts();
    injectCartUpsell(products);
    injectPopupHTML();
    handleAddToCart();
    handlePopupClose();
    openProductLinksInPopup();
    handleInputOnChange();
    makeImagesSameHeight();
    scrollableProducts();
  }

  async function restart() {
    var $atc = document.querySelector(`.EzfyCart-atc`);

    if ($atc) {
      return;
    }

    const $cart = await _waitForElement(
      `.ec-cart__shopping.ec-cart-shopping`,
      100,
      40,
    );

    if (!$cart) {
      return;
    }

    start();
  }

  function updatePriceOnChange() {
    // const product =
  }

  async function handleInputOnChange() {
    var $swatch = await _waitForElement(
      `.EzfyProduct-option select, .EzfyProduct-option input:not([type='text)`,
    );

    if (!$swatch) {
      return;
    }

    var $swatches = document.querySelectorAll(
      `.EzfyProduct-option select, .EzfyProduct-option input:not([type='text)`,
    );

    if (!$swatches) {
      return;
    }

    for (var each of $swatches) {
      each.addEventListener("change", function (e) {
        const $this = e.target;
      });
    }
  }

  return {
    handlePopupClose: handlePopupClose,
    init: async function () {
      const data = await loadData();

      if (!data.settings.isEnabled) {
        return;
      }

      injectReacPlaceholder();
      start();

      document.addEventListener("load", function () {
        makeImagesSameHeight();
      });

      window.Ecwid.OnCartChanged.add(async function (cart) {
        restart();
      });

      window.Ecwid.OnPageSwitch.add(function (page) {
        console.log("page", page);

        if (page && page.type === "CART") {
          start();
        }
      });

      async function checkURLchange() {
        if (window.location.href !== oldURL) {
          restart();

          console.log("current page: ", window.location.href, oldURL);
          oldURL = window.location.href;
        }
      }

      var oldURL = window.location.href;
      setInterval(checkURLchange, 1000);
    },
  };
})();

window.ezfyEasyUpsellApp.init();
