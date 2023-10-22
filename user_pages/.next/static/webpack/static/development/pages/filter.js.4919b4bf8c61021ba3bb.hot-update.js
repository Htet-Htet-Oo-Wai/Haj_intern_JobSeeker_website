webpackHotUpdate("static\\development\\pages\\filter.js",{

/***/ "./pages/filter.js":
/*!*************************!*\
  !*** ./pages/filter.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobListing; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");










var _jsxFileName = "C:\\Users\\lenovo\\Desktop\\user_pages\\pages\\filter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var JobListing = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(JobListing, _React$Component);

  var _super = _createSuper(JobListing);

  function JobListing(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, JobListing);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "changeIcon", function () {
      if (_this.state.icon == "chevron-down") {
        _this.setState({
          icon: "chevron-up"
        });
      } else {
        _this.setState({
          icon: "chevron-down"
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getCityLocation", function (city_id) {
      var cities = _this.props.cities;
      var city_name = '';
      cities.map(function (city) {
        if (city.id == city_id) {
          city_name = city.data.cityName;
        }
      });
      return city_name;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getAreaLocation", function (area_id) {
      var areas = _this.props.areas;
      var area_name = '';
      areas.map(function (area) {
        if (area.id == area_id) {
          area_name = area.data.areaName;
        }
      });
      return area_name;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "applyFilter", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var jobs, toReturnJobs, REGENERATED_IDS, today, query;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                currentPage: 1,
                firstIndex: 0,
                lastIndex: 5,
                entryPerPage: 5,
                forWardBtn: true,
                backWardBtn: false
              });

              console.log(_this.state);
              jobs = [];
              toReturnJobs = [];
              REGENERATED_IDS = [];
              console.log(_this.state);
              today = new Date();

              try {
                query = _lib_db__WEBPACK_IMPORTED_MODULE_12__["db"].collection('job');

                if (_this.state.J_Contract !== "") {
                  query = query.where('J_Contract', '==', _this.state.J_Contract);
                }

                if (_this.state.area !== "") {
                  query = query.where('J_area', '==', _this.state.area);
                }

                if (_this.state.city !== "") {
                  query = query.where('J_city', '==', _this.state.city);
                }

                if (_this.state.J_min_salary !== "") {
                  query = query.where('J_min_salary', '>=', parseInt(_this.state.J_min_salary));
                  query = query.orderBy("J_min_salary");
                }

                if (_this.state.J_JpLevel !== "") {
                  query = query.where('J_JpLevel', '<=', parseInt(_this.state.J_JpLevel));
                  query = query.orderBy("J_JpLevel");
                }

                query.orderBy("PostedDate").get().then(function (snaphsot) {
                  snaphsot.forEach(function (doc) {
                    if (_this.state.posted_within !== "") {
                      if (_this.state.posted_within == '1') {
                        if (_this.checkDateEqual(doc.data().PostedDate)) {
                          jobs.push(Object.assign({
                            id: doc.id,
                            data: doc.data()
                          }));
                        }
                      } else if (_this.state.posted_within == '2') {
                        if (_this.checkDateLastThreeDays(doc.data().PostedDate)) {
                          jobs.push(Object.assign({
                            id: doc.id,
                            data: doc.data()
                          }));
                        }
                      } else if (_this.state.posted_within == '3') {
                        if (_this.checkDateLastSevenDays(doc.data().PostedDate)) {
                          jobs.push(Object.assign({
                            id: doc.id,
                            data: doc.data()
                          }));
                        }
                      } else if (_this.state.posted_within == '4') {
                        if (_this.checkDateThisMonth(doc.data().PostedDate)) {
                          jobs.push(Object.assign({
                            id: doc.id,
                            data: doc.data()
                          }));
                        }
                      }
                    } else {
                      jobs.push(Object.assign({
                        id: doc.id,
                        data: doc.data()
                      }));
                    }
                  });
                  REGENERATED_IDS = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(jobs.reverse().map(function (job) {
                    return job.id;
                  })));
                  console.log(REGENERATED_IDS);

                  if (REGENERATED_IDS.length > 0) {
                    REGENERATED_IDS.forEach(function (id) {
                      _lib_db__WEBPACK_IMPORTED_MODULE_12__["db"].collection('job').doc(id).get().then(function (snapshot) {
                        toReturnJobs.push(Object.assign({
                          id: id,
                          data: snapshot.data()
                        }));

                        _this.setState({
                          regenerated_jobs: toReturnJobs
                        });

                        _this.setState({
                          noFoundCondition: false
                        });

                        _this.setState({
                          pages: Math.ceil(toReturnJobs.length / 5)
                        });
                      });
                    });
                  } else {
                    _this.setState({
                      noFoundCondition: true
                    });

                    _this.setState({
                      regenerated_jobs: []
                    });
                  }
                });
              } catch (error) {
                console.log(error);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "checkDateEqual", function (dateobj) {
      var today = new Date();
      var d = new Date(1970, 0, 1);
      d.setSeconds(dateobj.seconds);

      if (d.getDate() + 1 == today.getDate()) {
        return true;
      } else return false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "checkDateLastThreeDays", function (dateobj) {
      var today = new Date();
      var d = new Date(1970, 0, 1);
      d.setSeconds(dateobj.seconds);
      console.log("Last 3 days is ".concat(today.getDate() - 3));

      if (today.getDate() - 3 <= d.getDate() + 1 && d.getDate() + 1 <= today.getDate()) {
        return true;
      } else return false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "checkDateLastSevenDays", function (dateobj) {
      var today = new Date();
      var d = new Date(1970, 0, 1);
      d.setSeconds(dateobj.seconds);
      console.log("Last 3 days is ".concat(today.getDate() - 7));

      if (today.getDate() - 7 <= d.getDate() + 1 && d.getDate() + 1 <= today.getDate()) {
        console.log("true");
        return true;
      } else return false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "checkDateThisMonth", function (dateobj) {
      var today = new Date();
      var d = new Date(1970, 0, 1);
      d.setSeconds(dateobj.seconds);

      if (Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())) / (1000 * 60 * 60 * 24)) <= 30) {
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "resetFilter", function () {
      _this.setState(_this.initialState);

      console.log(_this.state);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, event.target.name, event.target.value));

      if (event.target.name == "area") {
        _this.getAreaName(event.target.value);

        _this.getCities(event.target.value);

        _this.setState({
          showCities: true
        });
      }

      if (event.target.name == "area" && event.target.value == "") {
        _this.setState({
          showCities: false
        });
      }

      if (event.target.name == "entryPerPage") {
        _this.setState({
          currentPage: 1,
          firstIndex: 0,
          lastIndex: parseInt(event.target.value),
          forWardBtn: true,
          backWardBtn: false,
          pages: Math.ceil(_this.state.regenerated_jobs.length / parseInt(event.target.value))
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "reGenerateJobs", function (event) {
      var jobs = [];

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, event.target.name, event.target.value));

      if (_this.state.regenerated_jobs.length == _this.props.jobs.length) {
        if (event.target.value == "old_to_new") {
          try {
            _lib_db__WEBPACK_IMPORTED_MODULE_12__["db"].collection('job').orderBy('PostedDate').get().then(function (snaphsot) {
              snaphsot.forEach(function (doc) {
                jobs.push(Object.assign({
                  id: doc.id,
                  data: doc.data()
                }));
              });

              _this.setState({
                regenerated_jobs: jobs
              });
            });
          } catch (error) {
            console.log(error);
          }
        } else if (event.target.value == "new_to_old") {
          try {
            _lib_db__WEBPACK_IMPORTED_MODULE_12__["db"].collection('job').orderBy('PostedDate').get().then(function (snaphsot) {
              snaphsot.forEach(function (doc) {
                jobs.push(Object.assign({
                  id: doc.id,
                  data: doc.data()
                }));
              });

              _this.setState({
                regenerated_jobs: jobs.reverse()
              });
            });
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        jobs = _this.state.regenerated_jobs;

        if (event.target.value == "old_to_new") {
          jobs.sort(function (a, b) {
            return a.data.posted_date - b.data.posted_date;
          });

          _this.setState({
            regenerated_jobs: jobs
          });
        } else if (event.target.value == "new_to_old") {
          jobs.sort(function (a, b) {
            return b.data.posted_date - a.data.posted_date;
          });

          _this.setState({
            regenerated_jobs: jobs
          });
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "goPrevious", function () {
      var firstIndex = 0;

      _this.setState({
        currentPage: _this.state.currentPage - 1
      });

      _this.state.currentPage < 3 && _this.setState({
        backWardBtn: false
      });
      _this.state.currentPage <= _this.state.pages && _this.setState({
        forWardBtn: true
      });
      var lastIndex = _this.state.firstIndex;

      if (lastIndex == parseInt(_this.state.entryPerPage)) {
        firstIndex = 0;
      } else {
        firstIndex = lastIndex - parseInt(_this.state.entryPerPage);
      }

      _this.setState({
        firstIndex: firstIndex
      });

      _this.setState({
        lastIndex: lastIndex
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "goForward", function () {
      _this.setState({
        currentPage: _this.state.currentPage + 1
      });

      _this.state.currentPage == _this.state.pages - 1 && _this.setState({
        forWardBtn: false
      });
      _this.state.currentPage >= 1 && _this.setState({
        backWardBtn: true
      });

      _this.setState({
        currentPage: _this.state.currentPage + 1
      });

      _this.setState({
        firstIndex: _this.state.lastIndex
      });

      _this.setState({
        lastIndex: _this.state.lastIndex + parseInt(_this.state.entryPerPage)
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getCities", function (id) {
      var cities = [];

      try {
        _lib_db__WEBPACK_IMPORTED_MODULE_12__["db"].collection('city').where('AREAID', "==", id).get().then(function (snapshot) {
          snapshot.forEach(function (doc) {
            cities.push(Object.assign({
              id: doc.id,
              data: doc.data()
            }));
          });
          console.log(cities);

          _this.setState({
            cities: cities
          });
        });
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getCompanyName", function (id) {
      var companies = _this.props.companies;
      var name = '';
      companies.map(function (company) {
        if (company.id == id) {
          name = company.data.name;
        }
      });
      return name;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getLocation", function (city_id, area_id) {
      var cities = _this.props.cities;
      var areas = _this.props.areas;
      var city_name = '';
      var area_name = '';
      cities.map(function (city) {
        if (city.id == city_id) {
          city_name = city.data.name;
        }
      });
      areas.map(function (area) {
        if (area.id == area_id) {
          area_name = area.data.name;
        }
      });
      return city_name + "," + area_name;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getAreaName", function (id) {
      var area = {};

      try {
        _lib_db__WEBPACK_IMPORTED_MODULE_12__["db"].collection('area').doc(id).get().then(function (snapshot) {
          area = snapshot.data();

          _this.setState({
            areaName: area.areaName
          });
        });
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getValue", function (id) {
      var value = "";

      _this.props.areas.map(function (area) {
        if (area.id == id) {
          value = area.data.name;
        }
      });

      _this.props.cities.map(function (city) {
        if (city.id == id) {
          value = city.data.name;
        }
      });

      return value;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getDateString", function (obj) {
      var t = new Date(1970, 0, 1);
      t.setSeconds(obj.seconds); // console.log(t)
      // console.log(t.getDate()+1+'/'+(t.getMonth()+1)+'/'+t.getFullYear()+' '+ t.getHours()+':'+ t.getMinutes()+':'+ t.getSeconds()+'-'+t.getTimezoneOffset())

      return t.getDate() + 1 + '/' + (t.getMonth() + 1) + '/' + t.getFullYear();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "filterShow", function () {
      $("#filterModal").modal('show');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "quickView", function (id) {
      var job = {};

      try {
        _lib_db__WEBPACK_IMPORTED_MODULE_12__["db"].collection('job').doc(id).get().then(function (snapshot) {
          job = snapshot.data();

          _this.setState({
            view_title: job.title,
            view_min_salary: job.min_salary,
            view_max_salary: job.max_salary,
            view_employment_type: job.employment_type,
            view_vacancy: job.vacancy,
            view_min_age: job.min_age,
            view_work_day: job.work_day,
            view_work_hour: job.work_hour,
            view_min_lang_skill: job.min_lang_skill,
            view_min_exp_year: job.min_exp_year,
            view_area: job.area,
            view_city: job.city,
            view_job_address: job.job_address,
            view_company: job.company,
            view_description: job.description,
            view_requirement: job.requirement,
            view_other_qualification: job.other_qualification,
            view_other_message: job.other_message,
            view_posted_date: job.posted_date
          });
        });
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getJobCount", function (id) {
      var count = 0;

      _this.props.jobs.map(function (job) {
        (job.data.J_area == id || job.data.J_city == id) && count++;
      });

      return count;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getExpYear", function (expID) {
      var returnString = "";

      switch (expID) {
        case 1:
          returnString = "Less Than 1 Year";
          break;

        case 2:
          returnString = "1-2 Years";
          break;

        case 3:
          returnString = "2-3 Years";
          break;

        case 4:
          returnString = "3-6 Years";
          break;

        case 5:
          returnString = "6 Years and more";
      }

      return returnString;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getPostedWithin", function (dateID) {
      var returnString = "";

      switch (dateID) {
        case 1:
          returnString = "Today";
          break;

        case 2:
          returnString = "Last 3 Days";
          break;

        case 3:
          returnString = "Last 7 Days";
          break;

        case 4:
          returnString = "This Month";
      }

      return returnString;
    });

    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.initialState = {
      area: props.location || '',
      areaName: props.areaName || '',
      city: '',
      J_Contract: props.type || '',
      J_JpLevel: '',
      posted_within: '',
      J_min_salary: '',
      J_max_salary: '',
      noFoundCondition: false,
      regenerated_jobs: props.jobs || [],
      showCities: false,
      cities: [],
      currentPage: 1,
      firstIndex: 0,
      lastIndex: 5,
      pages: Math.ceil(props.jobs.length / 5),
      entryPerPage: 5,
      forWardBtn: true,
      backWardBtn: false,
      icon: "chevron-down"
    };
    _this.state = _this.initialState;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(JobListing, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var areas = this.props.areas;
      var cities = this.state.cities;
      var viewCities = this.props.cities;
      return __jsx("html", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512,
          columnNumber: 9
        }
      }, __jsx("body", {
        id: "top",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal fade",
        id: "filterModal",
        tabindex: "-1",
        role: "dialog",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-dialog",
        role: "document",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 17
        }
      }, __jsx("h5", {
        className: "modal-title",
        id: "exampleModalLabel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 21
        }
      }, "Filter Jobs"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 21
        }
      }, __jsx("span", {
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522,
          columnNumber: 21
        }
      }, "\xD7"))), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "job-category-listing mb-50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "single-listing pb-50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "small-section-tittle2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 29
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530,
          columnNumber: 33
        }
      }, "Job Area")), __jsx("div", {
        className: "select-job-items2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 29
        }
      }, __jsx("select", {
        name: "area",
        className: "form-control",
        value: this.state.area,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 33
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534,
          columnNumber: 37
        }
      }, "Any"), areas && areas.map(function (area) {
        return __jsx("option", {
          value: area.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 536,
            columnNumber: 42
          }
        }, area.data.areaName, "-(", _this2.getJobCount(area.id), ")");
      })))), __jsx("div", {
        className: "single-listing",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 25
        }
      }, (this.state.showCities || this.state.areaName !== "") && __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "small-section-tittle2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 37
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 41
        }
      }, this.state.area == "" ? 'Cities' : "Cities in ".concat(this.state.areaName))), __jsx("div", {
        className: "select-job-items2 pb-50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 37
        }
      }, __jsx("select", {
        name: "city",
        className: "form-control",
        value: this.state.city,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 41
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 41
        }
      }, "Any"), cities && cities.map(function (city) {
        return __jsx("option", {
          value: city.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 552,
            columnNumber: 50
          }
        }, city.data.cityName, "-(", _this2.getJobCount(city.id), ")");
      })))), __jsx("div", {
        className: "select-Categories pb-50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "small-section-tittle2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 33
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562,
          columnNumber: 37
        }
      }, "Employment Type")), __jsx("div", {
        className: "select-job-items2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 33
        }
      }, __jsx("select", {
        name: "J_Contract",
        className: "form-control",
        value: this.state.J_Contract,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 33
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 37
        }
      }, "Any"), __jsx("option", {
        value: "Full Time",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567,
          columnNumber: 37
        }
      }, "Full Time"), __jsx("option", {
        value: "Part Time",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
          columnNumber: 37
        }
      }, "Part Time"))))), __jsx("div", {
        className: "single-listing",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "select-Categories pb-50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "small-section-tittle2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577,
          columnNumber: 33
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 37
        }
      }, "Maximum Japanese Skill")), __jsx("select", {
        name: "J_JpLevel",
        className: "form-control",
        value: this.state.J_JpLevel,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 33
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 37
        }
      }, "Any"), __jsx("option", {
        value: "3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582,
          columnNumber: 37
        }
      }, "N3"), __jsx("option", {
        value: "2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583,
          columnNumber: 37
        }
      }, "N2"), __jsx("option", {
        value: "1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 37
        }
      }, "N1")))), __jsx("div", {
        className: "single-listing",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "select-Categories pb-50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "small-section-tittle2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 33
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 37
        }
      }, "Posted Within")), __jsx("select", {
        name: "posted_within",
        className: "form-control",
        value: this.state.posted_within,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593,
          columnNumber: 33
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 37
        }
      }, "All Time"), __jsx("option", {
        value: "1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 37
        }
      }, "Today"), __jsx("option", {
        value: "2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596,
          columnNumber: 37
        }
      }, "Last 3 Days"), __jsx("option", {
        value: "3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 37
        }
      }, "Last 7 Days"), __jsx("option", {
        value: "4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 37
        }
      }, "Last 30 Days")))), __jsx("div", {
        className: "single-listing",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 25
        }
      }, __jsx("aside", {
        className: "left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "small-section-tittle2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 33
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 37
        }
      }, "Minimum Salary")), __jsx("div", {
        className: "widgets_inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "range_item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609,
          columnNumber: 37
        }
      }, __jsx("div", {
        className: "align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610,
          columnNumber: 41
        }
      }, __jsx("div", {
        className: "price_text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 45
        }
      }), __jsx("div", {
        className: "justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 45
        }
      }, __jsx("input", {
        type: "number",
        className: "form-control",
        id: "J_min_salary",
        name: "J_min_salary",
        value: this.state.J_min_salary,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 49
        }
      }))))))))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625,
          columnNumber: 17
        }
      }, __jsx("button", {
        type: "button",
        className: "btn",
        onClick: this.resetFilter,
        "aria-label": "Cancel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626,
          columnNumber: 21
        }
      }, "Reset Filter"), __jsx("button", {
        type: "button",
        className: "btn",
        "data-dismiss": "modal",
        onClick: this.applyFilter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 21
        }
      }, "Apply Filter"))))), __jsx("nav", {
        className: "navbar nav-color sticky-top",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "site-logo col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "index",
        style: {
          fontSize: 30,
          color: "white"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635,
          columnNumber: 46
        }
      }, "Nursing Job ", __jsx("b", {
        style: {
          color: "rgb(187, 7, 106)"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635,
          columnNumber: 112
        }
      }, "Agency"))), __jsx("a", {
        href: "index",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 13
        }
      }, "Home"), __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637,
          columnNumber: 13
        }
      }, "About"), __jsx("a", {
        href: "contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 13
        }
      }, "Contact"), __jsx("a", {
        href: "filter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639,
          columnNumber: 13
        }
      }, "Filter"), __jsx("a", {
        "class": "btn btn-float signin",
        href: "login",
        role: "button",
        style: {
          background: "rgb(187, 7, 106)",
          color: "white"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 13
        }
      }, "Sign In")), __jsx("div", {
        className: "site-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643,
          columnNumber: 15
        }
      }, __jsx("section", {
        className: "section-hero overlay inner-page bg-image",
        style: {
          backgroundImage: "url('/images/1.png')"
        },
        id: "home-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645,
          columnNumber: 15
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646,
          columnNumber: 17
        }
      }), __jsx("h1", {
        className: "font-weight-bold text-center",
        style: {
          color: "rgba(187, 7, 106)",
          width: 600,
          margin: "auto"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647,
          columnNumber: 15
        }
      }, "A Powerful Job Agency")), __jsx("section", {
        className: "site-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row mb-5 justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-md-7 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652,
          columnNumber: 21
        }
      }, __jsx("h2", {
        className: "section-title mb-2",
        style: {
          color: "rgba(187, 7, 106)",
          marginLeft: "center"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653,
          columnNumber: 23
        }
      }, "".concat(this.state.regenerated_jobs.length, "- Jobs Found")))), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "select-job-items col-11",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658,
          columnNumber: 19
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 27
        }
      }, "Sort by"), __jsx("select", {
        name: "sortby",
        style: {
          marginRight: 1 + "em"
        },
        onChange: this.reGenerateJobs,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660,
          columnNumber: 27
        }
      }, __jsx("option", {
        value: "new_to_old",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661,
          columnNumber: 31
        }
      }, "Newest to Oldest"), __jsx("option", {
        value: "old_to_new",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662,
          columnNumber: 31
        }
      }, "Oldest to Newest")), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664,
          columnNumber: 27
        }
      }, "Show "), __jsx("select", {
        name: "entryPerPage",
        style: {
          marginRight: 1 + "em"
        },
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665,
          columnNumber: 27
        }
      }, __jsx("option", {
        value: "5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666,
          columnNumber: 33
        }
      }, "5"), __jsx("option", {
        value: "10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667,
          columnNumber: 33
        }
      }, "10"), __jsx("option", {
        value: "25",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668,
          columnNumber: 33
        }
      }, "25"), __jsx("option", {
        value: "50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669,
          columnNumber: 33
        }
      }, "50")), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671,
          columnNumber: 27
        }
      }, "Entries ")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673,
          columnNumber: 23
        }
      }, __jsx("button", {
        className: "btn btn-success",
        "data-toggle": "modal",
        "data-target": "#filterModal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674,
          columnNumber: 25
        }
      }, "Filter")))), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680,
          columnNumber: 15
        }
      }, __jsx("ul", {
        style: {
          width: 100 + "%"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 685,
          columnNumber: 15
        }
      }, this.state.regenerated_jobs && this.state.regenerated_jobs.slice(this.state.firstIndex, this.state.lastIndex).map(function (job) {
        return __jsx("li", {
          id: job.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 688,
            columnNumber: 17
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 690,
            columnNumber: 18
          }
        }, __jsx("div", {
          className: "row align-items-start job-item  pb-2 mb pt-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 691,
            columnNumber: 18
          }
        }, __jsx("div", {
          className: "col-md-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 692,
            columnNumber: 19
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/job-single?id=".concat(job.id),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 693,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: "images/featured-listing-1.jpg",
          alt: "Image",
          className: "img-fluid",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 693,
            columnNumber: 61
          }
        }))), __jsx("div", {
          className: "col-md-4",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 695,
            columnNumber: 19
          }
        }, __jsx("span", {
          className: "badge px-2 py-1 mb-3",
          style: {
            background: "rgb(187, 7, 106)",
            color: "white"
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 696,
            columnNumber: 21
          }
        }, "".concat(job.data.J_Contract)), __jsx("h2", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 697,
            columnNumber: 21
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/job-single?id=".concat(job.id),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 697,
            columnNumber: 25
          }
        }, __jsx("a", {
          style: {
            color: "#3c3c3c",
            fontWeight: "bold"
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 697,
            columnNumber: 65
          }
        }, "".concat(job.data.Jname)))), __jsx("p", {
          className: "meta",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 699,
            columnNumber: 21
          }
        }, "Employer: ", __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 699,
            columnNumber: 51
          }
        }, _this2.getCompanyName(job.data.EMPLOYERID), "\xA0\xA0\xA0"), "Posted In: ", __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 699,
            columnNumber: 139
          }
        }, "".concat(_this2.getDateString(job.data.PostedDate))))), __jsx("div", {
          className: "col-md-3 text-left",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 702,
            columnNumber: 19
          }
        }, __jsx("h3", {
          style: {
            color: "#3c3c3c",
            fontSize: 16
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 703,
            columnNumber: 21
          }
        }, __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 703,
            columnNumber: 63
          }
        }, _this2.getCityLocation(job.data.J_city))), __jsx("span", {
          className: "meta",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 704,
            columnNumber: 21
          }
        }, _this2.getAreaLocation(job.data.J_area))), __jsx("div", {
          className: "col-md-3 text-md-right",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 706,
            columnNumber: 19
          }
        }, __jsx("strong", {
          style: {
            color: "#3c3c3c"
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 707,
            columnNumber: 21
          }
        }, "\xA5", "".concat(job.data.J_min_salary, " ~ \xA5").concat(job.data.J_max_salary))))));
      }))), __jsx("div", {
        className: "pagination-area pb-115 text-center ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 719,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-xl-12 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 720,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "single-wrap d-flex justify-content-center ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 721,
          columnNumber: 25
        }
      }, __jsx("nav", {
        "aria-label": "Page navigation example ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 722,
          columnNumber: 29
        }
      }, __jsx("ul", {
        className: "pagination justify-content-start ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 723,
          columnNumber: 33
        }
      }, this.state.backWardBtn && __jsx("li", {
        onClick: this.goPrevious,
        className: "page-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724,
          columnNumber: 60
        }
      }, __jsx("a", {
        className: "page-link",
        style: {
          cursor: "pointer"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724,
          columnNumber: 112
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724,
          columnNumber: 164
        }
      }, "Previous"))), this.state.forWardBtn && this.state.regenerated_jobs.length > this.state.entryPerPage && __jsx("li", {
        onClick: this.goForward,
        className: "page-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725,
          columnNumber: 123
        }
      }, __jsx("a", {
        className: "page-link",
        style: {
          cursor: "pointer"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725,
          columnNumber: 174
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725,
          columnNumber: 226
        }
      }, "Next"))))))))))), __jsx("footer", {
        className: "site-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "row mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "col-6 col-md-3 mb-4 mb-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 744,
          columnNumber: 21
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 745,
          columnNumber: 23
        }
      }, "Address"), __jsx("ul", {
        className: "list-unstyled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746,
          columnNumber: 23
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 747,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 747,
          columnNumber: 29
        }
      }, "87,Ward Tyokyo,Japan ")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 748,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 748,
          columnNumber: 29
        }
      }, "nursejobagency@gmail.com")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749,
          columnNumber: 29
        }
      }, "864-11-222")))), __jsx("div", {
        className: "col-6 col-md-3 mb-4 mb-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753,
          columnNumber: 21
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754,
          columnNumber: 23
        }
      }, "Company"), __jsx("ul", {
        className: "list-unstyled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 755,
          columnNumber: 23
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756,
          columnNumber: 29
        }
      }, "About Us")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757,
          columnNumber: 29
        }
      }, "Resources")))), __jsx("div", {
        className: "col-6 col-md-3 mb-4 mb-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 760,
          columnNumber: 21
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 761,
          columnNumber: 23
        }
      }, "Support"), __jsx("ul", {
        className: "list-unstyled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 762,
          columnNumber: 23
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763,
          columnNumber: 29
        }
      }, "Support")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764,
          columnNumber: 29
        }
      }, "Privacy")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765,
          columnNumber: 29
        }
      }, "Terms of Service")))), __jsx("div", {
        className: "col-6 col-md-3 mb-4 mb-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 768,
          columnNumber: 21
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769,
          columnNumber: 23
        }
      }, "Contact Us"), __jsx("div", {
        className: "footer-social",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 770,
          columnNumber: 23
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "icon-facebook",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771,
          columnNumber: 37
        }
      })), __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "icon-twitter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772,
          columnNumber: 37
        }
      })), __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "icon-instagram",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773,
          columnNumber: 37
        }
      })), __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "icon-linkedin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774,
          columnNumber: 37
        }
      }))))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {
        var req, res, query, jobs, areas, area, cities, dyanmic_cities, companies, querysnapshot, querySnapshotJob;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = _ref2.req, res = _ref2.res, query = _ref2.query;
                jobs = [];
                _context2.next = 4;
                return Object(_lib_db__WEBPACK_IMPORTED_MODULE_12__["getCollectionRecords"])(_lib_db__WEBPACK_IMPORTED_MODULE_12__["AREA_COLLECTION"]);

              case 4:
                areas = _context2.sent;
                area = {};
                _context2.next = 8;
                return Object(_lib_db__WEBPACK_IMPORTED_MODULE_12__["getCollectionRecords"])(_lib_db__WEBPACK_IMPORTED_MODULE_12__["CITY_COLLECTION"]);

              case 8:
                cities = _context2.sent;
                dyanmic_cities = [];
                _context2.next = 12;
                return Object(_lib_db__WEBPACK_IMPORTED_MODULE_12__["getCollectionRecords"])(_lib_db__WEBPACK_IMPORTED_MODULE_12__["EMPLOYER_COLLECTION"]);

              case 12:
                companies = _context2.sent;
                querysnapshot = _lib_db__WEBPACK_IMPORTED_MODULE_12__["db"].collection('job');
                _context2.next = 16;
                return querysnapshot.orderBy('PostedDate').get();

              case 16:
                querySnapshotJob = _context2.sent;
                querySnapshotJob.forEach(function (doc) {
                  jobs.push(Object.assign({
                    id: doc.id,
                    data: doc.data()
                  }));
                });
                return _context2.abrupt("return", _objectSpread(_objectSpread({}, query), {}, {
                  areaName: area.name,
                  jobs: jobs.reverse(),
                  areas: areas,
                  cities: cities,
                  dyanmic_cities: dyanmic_cities,
                  companies: companies
                }));

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return JobListing;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maWx0ZXIuanMiXSwibmFtZXMiOlsiSm9iTGlzdGluZyIsInByb3BzIiwic3RhdGUiLCJpY29uIiwic2V0U3RhdGUiLCJjaXR5X2lkIiwiY2l0aWVzIiwiY2l0eV9uYW1lIiwibWFwIiwiY2l0eSIsImlkIiwiZGF0YSIsImNpdHlOYW1lIiwiYXJlYV9pZCIsImFyZWFzIiwiYXJlYV9uYW1lIiwiYXJlYSIsImFyZWFOYW1lIiwiY3VycmVudFBhZ2UiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwiZW50cnlQZXJQYWdlIiwiZm9yV2FyZEJ0biIsImJhY2tXYXJkQnRuIiwiY29uc29sZSIsImxvZyIsImpvYnMiLCJ0b1JldHVybkpvYnMiLCJSRUdFTkVSQVRFRF9JRFMiLCJ0b2RheSIsIkRhdGUiLCJxdWVyeSIsImRiIiwiY29sbGVjdGlvbiIsIkpfQ29udHJhY3QiLCJ3aGVyZSIsIkpfbWluX3NhbGFyeSIsInBhcnNlSW50Iiwib3JkZXJCeSIsIkpfSnBMZXZlbCIsImdldCIsInRoZW4iLCJzbmFwaHNvdCIsImZvckVhY2giLCJkb2MiLCJwb3N0ZWRfd2l0aGluIiwiY2hlY2tEYXRlRXF1YWwiLCJQb3N0ZWREYXRlIiwicHVzaCIsIk9iamVjdCIsImFzc2lnbiIsImNoZWNrRGF0ZUxhc3RUaHJlZURheXMiLCJjaGVja0RhdGVMYXN0U2V2ZW5EYXlzIiwiY2hlY2tEYXRlVGhpc01vbnRoIiwiU2V0IiwicmV2ZXJzZSIsImpvYiIsImxlbmd0aCIsInNuYXBzaG90IiwicmVnZW5lcmF0ZWRfam9icyIsIm5vRm91bmRDb25kaXRpb24iLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiZXJyb3IiLCJkYXRlb2JqIiwiZCIsInNldFNlY29uZHMiLCJzZWNvbmRzIiwiZ2V0RGF0ZSIsImZsb29yIiwiVVRDIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImluaXRpYWxTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZ2V0QXJlYU5hbWUiLCJnZXRDaXRpZXMiLCJzaG93Q2l0aWVzIiwic29ydCIsImEiLCJiIiwicG9zdGVkX2RhdGUiLCJjb21wYW5pZXMiLCJjb21wYW55Iiwib2JqIiwidCIsIiQiLCJtb2RhbCIsInZpZXdfdGl0bGUiLCJ0aXRsZSIsInZpZXdfbWluX3NhbGFyeSIsIm1pbl9zYWxhcnkiLCJ2aWV3X21heF9zYWxhcnkiLCJtYXhfc2FsYXJ5Iiwidmlld19lbXBsb3ltZW50X3R5cGUiLCJlbXBsb3ltZW50X3R5cGUiLCJ2aWV3X3ZhY2FuY3kiLCJ2YWNhbmN5Iiwidmlld19taW5fYWdlIiwibWluX2FnZSIsInZpZXdfd29ya19kYXkiLCJ3b3JrX2RheSIsInZpZXdfd29ya19ob3VyIiwid29ya19ob3VyIiwidmlld19taW5fbGFuZ19za2lsbCIsIm1pbl9sYW5nX3NraWxsIiwidmlld19taW5fZXhwX3llYXIiLCJtaW5fZXhwX3llYXIiLCJ2aWV3X2FyZWEiLCJ2aWV3X2NpdHkiLCJ2aWV3X2pvYl9hZGRyZXNzIiwiam9iX2FkZHJlc3MiLCJ2aWV3X2NvbXBhbnkiLCJ2aWV3X2Rlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJ2aWV3X3JlcXVpcmVtZW50IiwicmVxdWlyZW1lbnQiLCJ2aWV3X290aGVyX3F1YWxpZmljYXRpb24iLCJvdGhlcl9xdWFsaWZpY2F0aW9uIiwidmlld19vdGhlcl9tZXNzYWdlIiwib3RoZXJfbWVzc2FnZSIsInZpZXdfcG9zdGVkX2RhdGUiLCJjb3VudCIsIkpfYXJlYSIsIkpfY2l0eSIsImV4cElEIiwicmV0dXJuU3RyaW5nIiwiZGF0ZUlEIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImxvY2F0aW9uIiwidHlwZSIsIkpfbWF4X3NhbGFyeSIsInZpZXdDaXRpZXMiLCJnZXRKb2JDb3VudCIsInJlc2V0RmlsdGVyIiwiYXBwbHlGaWx0ZXIiLCJmb250U2l6ZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRJbWFnZSIsIndpZHRoIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicmVHZW5lcmF0ZUpvYnMiLCJzbGljZSIsImZvbnRXZWlnaHQiLCJKbmFtZSIsImdldENvbXBhbnlOYW1lIiwiRU1QTE9ZRVJJRCIsImdldERhdGVTdHJpbmciLCJnZXRDaXR5TG9jYXRpb24iLCJnZXRBcmVhTG9jYXRpb24iLCJnb1ByZXZpb3VzIiwiY3Vyc29yIiwiZ29Gb3J3YXJkIiwicmVxIiwicmVzIiwiZ2V0Q29sbGVjdGlvblJlY29yZHMiLCJBUkVBX0NPTExFQ1RJT04iLCJDSVRZX0NPTExFQ1RJT04iLCJkeWFubWljX2NpdGllcyIsIkVNUExPWUVSX0NPTExFQ1RJT04iLCJxdWVyeXNuYXBzaG90IiwicXVlcnlTbmFwc2hvdEpvYiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsVTs7Ozs7QUFFakIsc0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFDcEIsOEJBQU1BLEtBQU47O0FBRG9CLHFOQW9EUCxZQUFNO0FBQ2YsVUFBRyxNQUFLQyxLQUFMLENBQVdDLElBQVgsSUFBbUIsY0FBdEIsRUFBcUM7QUFDakMsY0FBS0MsUUFBTCxDQUFjO0FBQUNELGNBQUksRUFBRztBQUFSLFNBQWQ7QUFDSCxPQUZELE1BRU07QUFDRixjQUFLQyxRQUFMLENBQWM7QUFBQ0QsY0FBSSxFQUFHO0FBQVIsU0FBZDtBQUNIO0FBRUosS0EzRG1COztBQUFBLDBOQTZERixVQUFDRSxPQUFELEVBQWE7QUFDM0IsVUFBTUMsTUFBTSxHQUFHLE1BQUtMLEtBQUwsQ0FBV0ssTUFBMUI7QUFDQSxVQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQUQsWUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQUMsSUFBSSxFQUFFO0FBQ2IsWUFBR0EsSUFBSSxDQUFDQyxFQUFMLElBQVdMLE9BQWQsRUFBc0I7QUFDbEJFLG1CQUFTLEdBQUdFLElBQUks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QTtBQUFBLFNBQUk7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFKLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUFKLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFKLENBSEYsQ0FGRixDQURGLEVBVUU7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBSSxpQkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUosQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUosQ0FGRixDQUZGLENBVkYsRUFpQkU7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBSSxpQkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFB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Ozs7Ozs7Ozs7O0VBbkQ5RG9GLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGZpbHRlci5qcy40OTE5YjRiZjhjNjEwMjFiYTNiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge2RiLCBnZXRDb2xsZWN0aW9uUmVjb3JkcywgQVJFQV9DT0xMRUNUSU9OLCBDSVRZX0NPTExFQ1RJT04sIEVNUExPWUVSX0NPTExFQ1RJT04sIEpPQl9DT0xMRUNUSU9OfSBmcm9tIFwiLi4vbGliL2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb2JMaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXHJcblxyXG4gICAgdGhpcy5pbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgYXJlYSA6IHByb3BzLmxvY2F0aW9uIHx8ICcnLFxyXG4gICAgICAgIGFyZWFOYW1lIDogcHJvcHMuYXJlYU5hbWUgfHwgJycsXHJcbiAgICAgICAgY2l0eSA6ICcnLFxyXG4gICAgICAgIEpfQ29udHJhY3QgOiBwcm9wcy50eXBlIHx8ICcnLFxyXG4gICAgICAgIEpfSnBMZXZlbCA6ICcnLFxyXG4gICAgICAgIHBvc3RlZF93aXRoaW4gOiAnJyxcclxuICAgICAgICBKX21pbl9zYWxhcnkgOiAnJyxcclxuICAgICAgICBKX21heF9zYWxhcnkgOiAnJyxcclxuICAgICAgICBub0ZvdW5kQ29uZGl0aW9uIDogZmFsc2UsXHJcbiAgICAgICAgcmVnZW5lcmF0ZWRfam9icyA6IHByb3BzLmpvYnMgfHwgW10sXHJcbiAgICAgICAgc2hvd0NpdGllcyA6IGZhbHNlLFxyXG4gICAgICAgIGNpdGllcyA6IFtdLFxyXG4gICAgICAgIGN1cnJlbnRQYWdlIDogMSxcclxuICAgICAgICBmaXJzdEluZGV4IDogMCxcclxuICAgICAgICBsYXN0SW5kZXggOiA1LFxyXG4gICAgICAgIHBhZ2VzIDogTWF0aC5jZWlsKHByb3BzLmpvYnMubGVuZ3RoLzUpLFxyXG4gICAgICAgIGVudHJ5UGVyUGFnZSA6IDUsXHJcbiAgICAgICAgZm9yV2FyZEJ0biA6IHRydWUsXHJcbiAgICAgICAgYmFja1dhcmRCdG4gOiBmYWxzZSxcclxuICAgICAgICBpY29uIDogXCJjaGV2cm9uLWRvd25cIlxyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoe3JlcSxyZXMscXVlcnl9KXsgXHJcblxyXG4gICAgICAgIGxldCBqb2JzID0gW11cclxuICAgICAgICBsZXQgYXJlYXMgPSBhd2FpdCBnZXRDb2xsZWN0aW9uUmVjb3JkcyhBUkVBX0NPTExFQ1RJT04pXHJcbiAgICAgICAgbGV0IGFyZWEgPSB7fVxyXG4gICAgICAgIGxldCBjaXRpZXMgPSBhd2FpdCBnZXRDb2xsZWN0aW9uUmVjb3JkcyhDSVRZX0NPTExFQ1RJT04pXHJcbiAgICAgICAgbGV0IGR5YW5taWNfY2l0aWVzID0gW11cclxuICAgICAgICBsZXQgY29tcGFuaWVzID0gYXdhaXQgZ2V0Q29sbGVjdGlvblJlY29yZHMoRU1QTE9ZRVJfQ09MTEVDVElPTilcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHF1ZXJ5c25hcHNob3QgPSBkYi5jb2xsZWN0aW9uKCdqb2InKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3RKb2IgPSBhd2FpdCBxdWVyeXNuYXBzaG90Lm9yZGVyQnkoJ1Bvc3RlZERhdGUnKS5nZXQoKVxyXG4gICAgICAgIHF1ZXJ5U25hcHNob3RKb2IuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgICAgICBqb2JzLnB1c2goT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAgICAgIHtpZCA6IGRvYy5pZCxcclxuICAgICAgICAgICAgZGF0YSA6IGRvYy5kYXRhKCl9XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHsuLi5xdWVyeSwgYXJlYU5hbWUgOiBhcmVhLm5hbWUsIGpvYnMgOiBqb2JzLnJldmVyc2UoKSwgYXJlYXMsIGNpdGllcywgZHlhbm1pY19jaXRpZXMsIGNvbXBhbmllc31cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VJY29uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaWNvbiA9PSBcImNoZXZyb24tZG93blwiKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aWNvbiA6IFwiY2hldnJvbi11cFwifSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ljb24gOiBcImNoZXZyb24tZG93blwifSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2l0eUxvY2F0aW9uID0gKGNpdHlfaWQpID0+IHtcclxuICAgICAgICBjb25zdCBjaXRpZXMgPSB0aGlzLnByb3BzLmNpdGllc1xyXG4gICAgICAgIGxldCBjaXR5X25hbWUgPSAnJ1xyXG4gICAgICAgIGNpdGllcy5tYXAoY2l0eT0+e1xyXG4gICAgICAgICAgICBpZihjaXR5LmlkID09IGNpdHlfaWQpe1xyXG4gICAgICAgICAgICAgICAgY2l0eV9uYW1lID0gY2l0eS5kYXRhLmNpdHlOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgcmV0dXJuIGNpdHlfbmFtZSBcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcmVhTG9jYXRpb24gPSAoYXJlYV9pZCkgPT4ge1xyXG4gICAgY29uc3QgYXJlYXMgPSB0aGlzLnByb3BzLmFyZWFzXHJcbiAgICBsZXQgYXJlYV9uYW1lID0gJydcclxuICAgIGFyZWFzLm1hcChhcmVhPT57XHJcbiAgICAgICAgaWYoYXJlYS5pZCA9PSBhcmVhX2lkKXtcclxuICAgICAgICAgICAgYXJlYV9uYW1lID0gYXJlYS5kYXRhLmFyZWFOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBhcmVhX25hbWVcclxuICAgIH1cclxuXHJcbiAgICBhcHBseUZpbHRlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjdXJyZW50UGFnZSA6IDEsXHJcbiAgICAgICAgZmlyc3RJbmRleCA6IDAsXHJcbiAgICAgICAgbGFzdEluZGV4IDogNSxcclxuICAgICAgICBlbnRyeVBlclBhZ2UgOiA1LFxyXG4gICAgICAgIGZvcldhcmRCdG4gOiB0cnVlLFxyXG4gICAgICAgIGJhY2tXYXJkQnRuIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICAgICAgbGV0IGpvYnMgPSBbXVxyXG4gICAgICAgIGxldCB0b1JldHVybkpvYnMgPSBbXVxyXG4gICAgICAgIGxldCBSRUdFTkVSQVRFRF9JRFMgPSBbXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBsZXQgcXVlcnkgPSBkYi5jb2xsZWN0aW9uKCdqb2InKVxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuSl9Db250cmFjdCAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkud2hlcmUoJ0pfQ29udHJhY3QnLCc9PScsdGhpcy5zdGF0ZS5KX0NvbnRyYWN0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFyZWEgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LndoZXJlKCdKX2FyZWEnLCc9PScsdGhpcy5zdGF0ZS5hcmVhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmNpdHkgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LndoZXJlKCdKX2NpdHknLCc9PScsdGhpcy5zdGF0ZS5jaXR5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0YXRlLkpfbWluX3NhbGFyeSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkud2hlcmUoJ0pfbWluX3NhbGFyeScsJz49JyxwYXJzZUludCh0aGlzLnN0YXRlLkpfbWluX3NhbGFyeSkpXHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkub3JkZXJCeShcIkpfbWluX3NhbGFyeVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0YXRlLkpfSnBMZXZlbCAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkud2hlcmUoJ0pfSnBMZXZlbCcsJzw9JyxwYXJzZUludCh0aGlzLnN0YXRlLkpfSnBMZXZlbCkpXHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkub3JkZXJCeShcIkpfSnBMZXZlbFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHF1ZXJ5Lm9yZGVyQnkoXCJQb3N0ZWREYXRlXCIpLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKHNuYXBoc290ID0+IHtcclxuICAgICAgICAgICAgICAgIHNuYXBoc290LmZvckVhY2goZG9jPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUucG9zdGVkX3dpdGhpbiAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUucG9zdGVkX3dpdGhpbiA9PSAnMScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja0RhdGVFcXVhbChkb2MuZGF0YSgpLlBvc3RlZERhdGUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9icy5wdXNoKE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhIDogZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5wb3N0ZWRfd2l0aGluID09ICcyJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmNoZWNrRGF0ZUxhc3RUaHJlZURheXMoZG9jLmRhdGEoKS5Qb3N0ZWREYXRlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYnMucHVzaChPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogZG9jLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA6IGRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUucG9zdGVkX3dpdGhpbiA9PSAnMycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja0RhdGVMYXN0U2V2ZW5EYXlzKGRvYy5kYXRhKCkuUG9zdGVkRGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JzLnB1c2goT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiBkb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLnBvc3RlZF93aXRoaW4gPT0gJzQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tEYXRlVGhpc01vbnRoKGRvYy5kYXRhKCkuUG9zdGVkRGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYnMucHVzaChPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiBkb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgam9icy5wdXNoKE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhIDogZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIFJFR0VORVJBVEVEX0lEUyA9IFsuLi5uZXcgU2V0KGpvYnMucmV2ZXJzZSgpLm1hcChqb2IgPT4gam9iLmlkKSldIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coUkVHRU5FUkFURURfSURTKVxyXG4gICAgICAgICAgICAgICAgaWYoUkVHRU5FUkFURURfSURTLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIFJFR0VORVJBVEVEX0lEUy5mb3JFYWNoKGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbignam9iJykuZG9jKGlkKS5nZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihzbmFwc2hvdD0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9SZXR1cm5Kb2JzLnB1c2goT2JqZWN0LmFzc2lnbih7aWQgOiBpZCAsIGRhdGEgOiBzbmFwc2hvdC5kYXRhKCl9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2VuZXJhdGVkX2pvYnMgOiB0b1JldHVybkpvYnN9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm9Gb3VuZENvbmRpdGlvbiA6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BhZ2VzIDogTWF0aC5jZWlsKHRvUmV0dXJuSm9icy5sZW5ndGgvNSl9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm9Gb3VuZENvbmRpdGlvbiA6IHRydWV9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2VuZXJhdGVkX2pvYnMgOiBbXX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY2hlY2tEYXRlRXF1YWwgPSAoZGF0ZW9iaikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoMTk3MCwgMCwgMSk7XHJcbiAgICAgICAgZC5zZXRTZWNvbmRzKGRhdGVvYmouc2Vjb25kcylcclxuICAgICAgICBpZihkLmdldERhdGUoKSsxID09IHRvZGF5LmdldERhdGUoKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfWVsc2UgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjaGVja0RhdGVMYXN0VGhyZWVEYXlzID0gKGRhdGVvYmopID0+IHtcclxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKDE5NzAsIDAsIDEpO1xyXG4gICAgICAgIGQuc2V0U2Vjb25kcyhkYXRlb2JqLnNlY29uZHMpXHJcbiAgICAgICAgY29uc29sZS5sb2coYExhc3QgMyBkYXlzIGlzICR7dG9kYXkuZ2V0RGF0ZSgpLTN9YClcclxuICAgICAgICBpZih0b2RheS5nZXREYXRlKCktMyA8PSBkLmdldERhdGUoKSsxICYmIGQuZ2V0RGF0ZSgpKzEgPD0gdG9kYXkuZ2V0RGF0ZSgpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9ZWxzZSByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNoZWNrRGF0ZUxhc3RTZXZlbkRheXMgPSAoZGF0ZW9iaikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoMTk3MCwgMCwgMSk7XHJcbiAgICAgICAgZC5zZXRTZWNvbmRzKGRhdGVvYmouc2Vjb25kcylcclxuICAgICAgICBjb25zb2xlLmxvZyhgTGFzdCAzIGRheXMgaXMgJHt0b2RheS5nZXREYXRlKCktN31gKVxyXG4gICAgICAgIGlmKHRvZGF5LmdldERhdGUoKS03IDw9IGQuZ2V0RGF0ZSgpKzEgJiYgZC5nZXREYXRlKCkrMSA8PSB0b2RheS5nZXREYXRlKCkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIilcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9ZWxzZSByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNoZWNrRGF0ZVRoaXNNb250aCA9IChkYXRlb2JqKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoMTk3MCwgMCwgMSk7XHJcbiAgICAgICAgZC5zZXRTZWNvbmRzKGRhdGVvYmouc2Vjb25kcylcclxuICAgICAgICBpZihNYXRoLmZsb29yKChEYXRlLlVUQyh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpIC0gRGF0ZS5VVEMoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpKSApIC8oMTAwMCAqIDYwICogNjAgKiAyNCkgKTw9IDMwKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhbHNlXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldEZpbHRlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJhcmVhXCIpe1xyXG4gICAgICAgIHRoaXMuZ2V0QXJlYU5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHRoaXMuZ2V0Q2l0aWVzKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93Q2l0aWVzIDogdHJ1ZX0pXHJcbiAgICB9XHJcbiAgICBpZihldmVudC50YXJnZXQubmFtZSA9PSBcImFyZWFcIiAmJiBldmVudC50YXJnZXQudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0NpdGllcyA6IGZhbHNlfSlcclxuICAgIH1cclxuICAgIGlmKGV2ZW50LnRhcmdldC5uYW1lID09IFwiZW50cnlQZXJQYWdlXCIpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA6IDEsXHJcbiAgICAgICAgICAgIGZpcnN0SW5kZXggOiAwLFxyXG4gICAgICAgICAgICBsYXN0SW5kZXggOiBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgICAgICBmb3JXYXJkQnRuIDogdHJ1ZSxcclxuICAgICAgICAgICAgYmFja1dhcmRCdG4gOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnZXMgOiBNYXRoLmNlaWwodGhpcy5zdGF0ZS5yZWdlbmVyYXRlZF9qb2JzLmxlbmd0aC9wYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlR2VuZXJhdGVKb2JzID0gKGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgam9icyA9IFtdXHJcbiAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgIGlmKHRoaXMuc3RhdGUucmVnZW5lcmF0ZWRfam9icy5sZW5ndGggPT0gdGhpcy5wcm9wcy5qb2JzLmxlbmd0aCl7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwib2xkX3RvX25ld1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbignam9iJykub3JkZXJCeSgnUG9zdGVkRGF0ZScpLmdldCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihzbmFwaHNvdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc25hcGhzb3QuZm9yRWFjaChkb2M9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgam9icy5wdXNoKE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhIDogZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2VuZXJhdGVkX2pvYnMgOiBqb2JzfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIm5ld190b19vbGRcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdqb2InKS5vcmRlckJ5KCdQb3N0ZWREYXRlJykuZ2V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKHNuYXBoc290ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzbmFwaHNvdC5mb3JFYWNoKGRvYz0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2JzLnB1c2goT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA6IGRvYy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiBkb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnZW5lcmF0ZWRfam9icyA6IGpvYnMucmV2ZXJzZSgpfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgam9icyA9IHRoaXMuc3RhdGUucmVnZW5lcmF0ZWRfam9ic1xyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIm9sZF90b19uZXdcIil7XHJcbiAgICAgICAgICAgIGpvYnMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5kYXRhLnBvc3RlZF9kYXRlIC0gYi5kYXRhLnBvc3RlZF9kYXRlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdlbmVyYXRlZF9qb2JzIDogam9ic30pXHJcbiAgICAgICAgfWVsc2UgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwibmV3X3RvX29sZFwiKXtcclxuICAgICAgICAgICAgam9icy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiLmRhdGEucG9zdGVkX2RhdGUgLSBhLmRhdGEucG9zdGVkX2RhdGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2VuZXJhdGVkX2pvYnMgOiBqb2JzfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdvUHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgZmlyc3RJbmRleCA9IDBcclxuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlIDogdGhpcy5zdGF0ZS5jdXJyZW50UGFnZS0xfSlcclxuICAgIHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgPCAzICYmIHRoaXMuc2V0U3RhdGUoe2JhY2tXYXJkQnRuIDogZmFsc2V9KSBcclxuICAgIHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgPD0gdGhpcy5zdGF0ZS5wYWdlcyAmJiB0aGlzLnNldFN0YXRlKHtmb3JXYXJkQnRuIDogdHJ1ZX0pIFxyXG4gICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLnN0YXRlLmZpcnN0SW5kZXhcclxuICAgICAgICBpZihsYXN0SW5kZXg9PXBhcnNlSW50KHRoaXMuc3RhdGUuZW50cnlQZXJQYWdlKSl7XHJcbiAgICAgICAgICAgIGZpcnN0SW5kZXggPSAwXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZpcnN0SW5kZXggPSAgbGFzdEluZGV4LXBhcnNlSW50KHRoaXMuc3RhdGUuZW50cnlQZXJQYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIHRoaXMuc2V0U3RhdGUoe2ZpcnN0SW5kZXggOiBmaXJzdEluZGV4fSlcclxuICAgIHRoaXMuc2V0U3RhdGUoe2xhc3RJbmRleCA6IGxhc3RJbmRleH0pXHJcblxyXG4gICAgfVxyXG4gICAgZ29Gb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFBhZ2UgOiB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlKzF9KVxyXG4gICAgdGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PSB0aGlzLnN0YXRlLnBhZ2VzLTEgJiYgdGhpcy5zZXRTdGF0ZSh7Zm9yV2FyZEJ0biA6IGZhbHNlfSkgXHJcbiAgICB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID49IDEgJiYgdGhpcy5zZXRTdGF0ZSh7YmFja1dhcmRCdG4gOiB0cnVlfSkgXHJcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFnZSA6IHRoaXMuc3RhdGUuY3VycmVudFBhZ2UrMX0pXHJcbiAgICB0aGlzLnNldFN0YXRlKHtmaXJzdEluZGV4IDogdGhpcy5zdGF0ZS5sYXN0SW5kZXh9KVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGFzdEluZGV4IDogdGhpcy5zdGF0ZS5sYXN0SW5kZXgrcGFyc2VJbnQodGhpcy5zdGF0ZS5lbnRyeVBlclBhZ2UpfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2l0aWVzID0gKGlkKSA9PiB7XHJcbiAgICBsZXQgY2l0aWVzID0gW11cclxuICAgIHRyeXtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKCdjaXR5Jykud2hlcmUoJ0FSRUFJRCcsXCI9PVwiLGlkKS5nZXQoKS5cclxuICAgICAgICB0aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgc25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2l0aWVzLnB1c2goT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAgICAgICAgICB7aWQgOiBkb2MuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA6IGRvYy5kYXRhKCl9XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaXRpZXMpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NpdGllc30pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldENvbXBhbnlOYW1lID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBjb21wYW5pZXMgPSB0aGlzLnByb3BzLmNvbXBhbmllc1xyXG4gICAgbGV0IG5hbWUgPSAnJ1xyXG4gICAgY29tcGFuaWVzLm1hcChjb21wYW55PT57XHJcbiAgICAgICAgaWYoY29tcGFueS5pZCA9PSBpZCl7XHJcbiAgICAgICAgICAgIG5hbWUgPSBjb21wYW55LmRhdGEubmFtZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbmFtZVxyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2F0aW9uID0gKGNpdHlfaWQsYXJlYV9pZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNpdGllcyA9IHRoaXMucHJvcHMuY2l0aWVzXHJcbiAgICAgICAgY29uc3QgYXJlYXMgPSB0aGlzLnByb3BzLmFyZWFzXHJcbiAgICAgICAgbGV0IGNpdHlfbmFtZSA9ICcnXHJcbiAgICAgICAgbGV0IGFyZWFfbmFtZSA9ICcnXHJcblxyXG4gICAgICAgIGNpdGllcy5tYXAoY2l0eT0+e1xyXG4gICAgICAgICAgICBpZihjaXR5LmlkID09IGNpdHlfaWQpe1xyXG4gICAgICAgICAgICAgICAgY2l0eV9uYW1lID0gY2l0eS5kYXRhLm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXJlYXMubWFwKGFyZWE9PntcclxuICAgICAgICAgICAgaWYoYXJlYS5pZCA9PSBhcmVhX2lkKXtcclxuICAgICAgICAgICAgICAgIGFyZWFfbmFtZSA9IGFyZWEuZGF0YS5uYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgcmV0dXJuIGNpdHlfbmFtZSArIFwiLFwiICsgYXJlYV9uYW1lXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJlYU5hbWUgPSAoaWQpID0+IHtcclxuICAgIGxldCBhcmVhID0ge31cclxuICAgIHRyeXtcclxuICAgICAgICBkYi5jb2xsZWN0aW9uKCdhcmVhJykuZG9jKGlkKS5nZXQoKVxyXG4gICAgICAgIC50aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgYXJlYSA9IHNuYXBzaG90LmRhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXJlYU5hbWUgOiBhcmVhLmFyZWFOYW1lfSlcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IFwiXCJcclxuICAgICAgICB0aGlzLnByb3BzLmFyZWFzLm1hcChhcmVhID0+IHtcclxuICAgICAgICAgICAgaWYoYXJlYS5pZCA9PSBpZCl7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFyZWEuZGF0YS5uYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucHJvcHMuY2l0aWVzLm1hcChjaXR5ID0+IHtcclxuICAgICAgICAgICAgaWYoY2l0eS5pZCA9PSBpZCl7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGNpdHkuZGF0YS5uYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGVTdHJpbmcgPSAob2JqKSA9PiB7XHJcbiAgICB2YXIgdCA9IG5ldyBEYXRlKDE5NzAsIDAsIDEpO1xyXG4gICAgdC5zZXRTZWNvbmRzKG9iai5zZWNvbmRzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHQpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0LmdldERhdGUoKSsxKycvJysodC5nZXRNb250aCgpKzEpKycvJyt0LmdldEZ1bGxZZWFyKCkrJyAnKyB0LmdldEhvdXJzKCkrJzonKyB0LmdldE1pbnV0ZXMoKSsnOicrIHQuZ2V0U2Vjb25kcygpKyctJyt0LmdldFRpbWV6b25lT2Zmc2V0KCkpXHJcbiAgICByZXR1cm4gdC5nZXREYXRlKCkrMSsnLycrKHQuZ2V0TW9udGgoKSsxKSsnLycrdC5nZXRGdWxsWWVhcigpXHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyU2hvdyA9ICgpID0+IHtcclxuICAgICQoXCIjZmlsdGVyTW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgfVxyXG5cclxuICAgIHF1aWNrVmlldyA9IChpZCkgPT4ge1xyXG4gICAgbGV0IGpvYiA9IHt9XHJcbiAgICB0cnl7XHJcbiAgICAgICAgZGIuY29sbGVjdGlvbignam9iJykuZG9jKGlkKS5nZXQoKVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgam9iID0gc25hcHNob3QuZGF0YSgpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdmlld190aXRsZSA6IGpvYi50aXRsZSxcclxuICAgICAgICAgICAgICAgIHZpZXdfbWluX3NhbGFyeSA6IGpvYi5taW5fc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgdmlld19tYXhfc2FsYXJ5IDogam9iLm1heF9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICB2aWV3X2VtcGxveW1lbnRfdHlwZSA6IGpvYi5lbXBsb3ltZW50X3R5cGUsXHJcbiAgICAgICAgICAgICAgICB2aWV3X3ZhY2FuY3kgOiBqb2IudmFjYW5jeSxcclxuICAgICAgICAgICAgICAgIHZpZXdfbWluX2FnZSA6IGpvYi5taW5fYWdlLFxyXG4gICAgICAgICAgICAgICAgdmlld193b3JrX2RheSA6IGpvYi53b3JrX2RheSxcclxuICAgICAgICAgICAgICAgIHZpZXdfd29ya19ob3VyIDogam9iLndvcmtfaG91cixcclxuICAgICAgICAgICAgICAgIHZpZXdfbWluX2xhbmdfc2tpbGwgOiBqb2IubWluX2xhbmdfc2tpbGwsXHJcbiAgICAgICAgICAgICAgICB2aWV3X21pbl9leHBfeWVhciA6IGpvYi5taW5fZXhwX3llYXIsXHJcbiAgICAgICAgICAgICAgICB2aWV3X2FyZWEgOiBqb2IuYXJlYSxcclxuICAgICAgICAgICAgICAgIHZpZXdfY2l0eSA6IGpvYi5jaXR5LFxyXG4gICAgICAgICAgICAgICAgdmlld19qb2JfYWRkcmVzcyA6IGpvYi5qb2JfYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIHZpZXdfY29tcGFueSA6IGpvYi5jb21wYW55LFxyXG4gICAgICAgICAgICAgICAgdmlld19kZXNjcmlwdGlvbiA6IGpvYi5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIHZpZXdfcmVxdWlyZW1lbnQgOiBqb2IucmVxdWlyZW1lbnQsXHJcbiAgICAgICAgICAgICAgICB2aWV3X290aGVyX3F1YWxpZmljYXRpb24gOiBqb2Iub3RoZXJfcXVhbGlmaWNhdGlvbixcclxuICAgICAgICAgICAgICAgIHZpZXdfb3RoZXJfbWVzc2FnZSA6IGpvYi5vdGhlcl9tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgdmlld19wb3N0ZWRfZGF0ZSA6IGpvYi5wb3N0ZWRfZGF0ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRKb2JDb3VudCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDBcclxuICAgICAgICB0aGlzLnByb3BzLmpvYnMubWFwKGpvYj0+e1xyXG4gICAgICAgICAgICAoIGpvYi5kYXRhLkpfYXJlYSA9PSBpZCB8fCBqb2IuZGF0YS5KX2NpdHkgPT0gaWQgKSAmJiBjb3VudCsrXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gY291bnQgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXhwWWVhciA9IChleHBJRCkgPT4ge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgc3dpdGNoKGV4cElEKXtcclxuICAgICAgICAgICAgY2FzZSAxIDogcmV0dXJuU3RyaW5nID0gXCJMZXNzIFRoYW4gMSBZZWFyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMiA6IHJldHVyblN0cmluZyA9IFwiMS0yIFllYXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAzIDogcmV0dXJuU3RyaW5nID0gXCIyLTMgWWVhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDQgOiByZXR1cm5TdHJpbmcgPSBcIjMtNiBZZWFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNSA6IHJldHVyblN0cmluZyA9IFwiNiBZZWFycyBhbmQgbW9yZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5TdHJpbmcgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zdGVkV2l0aGluID0gKGRhdGVJRCkgPT4ge1xyXG4gICAgICAgIGxldCByZXR1cm5TdHJpbmcgPSBcIlwiXHJcbiAgICAgICAgc3dpdGNoKGRhdGVJRCl7XHJcbiAgICAgICAgICAgIGNhc2UgMSA6IHJldHVyblN0cmluZyA9IFwiVG9kYXlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAyIDogcmV0dXJuU3RyaW5nID0gXCJMYXN0IDMgRGF5c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMyA6IHJldHVyblN0cmluZyA9IFwiTGFzdCA3IERheXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDQgOiByZXR1cm5TdHJpbmcgPSBcIlRoaXMgTW9udGhcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuU3RyaW5nIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKXtcclxuICAgIGNvbnN0IGFyZWFzID0gdGhpcy5wcm9wcy5hcmVhc1xyXG4gICAgY29uc3QgY2l0aWVzID0gdGhpcy5zdGF0ZS5jaXRpZXNcclxuICAgIGNvbnN0IHZpZXdDaXRpZXMgPSB0aGlzLnByb3BzLmNpdGllc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGh0bWw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Ym9keSBpZD1cInRvcFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJmaWx0ZXJNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkZpbHRlciBKb2JzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItY2F0ZWdvcnktbGlzdGluZyBtYi01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1saXN0aW5nIHBiLTUwXCI+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtc2VjdGlvbi10aXR0bGUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkpvYiBBcmVhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Qtam9iLWl0ZW1zMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImFyZWFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5hcmVhfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QW55PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcmVhcyAmJiBhcmVhcy5tYXAoYXJlYSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8b3B0aW9uIHZhbHVlPXthcmVhLmlkfT57YXJlYS5kYXRhLmFyZWFOYW1lfS0oe3RoaXMuZ2V0Sm9iQ291bnQoYXJlYS5pZCl9KTwvb3B0aW9uPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWxpc3RpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5zaG93Q2l0aWVzIHx8IHRoaXMuc3RhdGUuYXJlYU5hbWUgIT09IFwiXCIpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtc2VjdGlvbi10aXR0bGUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3RoaXMuc3RhdGUuYXJlYSA9PSBcIlwiID8gJ0NpdGllcycgOiBgQ2l0aWVzIGluICR7dGhpcy5zdGF0ZS5hcmVhTmFtZX1gfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1qb2ItaXRlbXMyIHBiLTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Bbnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaXRpZXMgJiYgY2l0aWVzLm1hcChjaXR5ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPG9wdGlvbiB2YWx1ZT17Y2l0eS5pZH0+e2NpdHkuZGF0YS5jaXR5TmFtZX0tKHt0aGlzLmdldEpvYkNvdW50KGNpdHkuaWQpfSk8L29wdGlvbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1DYXRlZ29yaWVzIHBiLTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1zZWN0aW9uLXRpdHRsZTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkVtcGxveW1lbnQgVHlwZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Qtam9iLWl0ZW1zMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkpfQ29udHJhY3RcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5KX0NvbnRyYWN0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgPkFueTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRnVsbCBUaW1lXCI+RnVsbCBUaW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQYXJ0IFRpbWVcIj5QYXJ0IFRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtbGlzdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtQ2F0ZWdvcmllcyBwYi01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtc2VjdGlvbi10aXR0bGUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5NYXhpbXVtIEphcGFuZXNlIFNraWxsPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJKX0pwTGV2ZWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS5KX0pwTGV2ZWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiA+QW55PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+TjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5OMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk4xPC9vcHRpb24+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtbGlzdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtQ2F0ZWdvcmllcyBwYi01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtc2VjdGlvbi10aXR0bGUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Qb3N0ZWQgV2l0aGluPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwb3N0ZWRfd2l0aGluXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUucG9zdGVkX3dpdGhpbn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbCBUaW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+VG9kYXk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5MYXN0IDMgRGF5czwvb3B0aW9uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5MYXN0IDcgRGF5czwvb3B0aW9uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5MYXN0IDMwIERheXM8L29wdGlvbj4gIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWxpc3RpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJsZWZ0X3dpZGdldHMgcF9maWx0ZXJfd2lkZ2V0cyBwcmljZV9yYW5nc19hc2lkZSBzaWRlYmFyX2JveF9zaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLXNlY3Rpb24tdGl0dGxlMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TWluaW11bSBTYWxhcnk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0c19pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmdlX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZV90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJKX21pbl9zYWxhcnlcIiBuYW1lPVwiSl9taW5fc2FsYXJ5XCIgdmFsdWU9e3RoaXMuc3RhdGUuSl9taW5fc2FsYXJ5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLnJlc2V0RmlsdGVyfSBhcmlhLWxhYmVsPVwiQ2FuY2VsXCI+UmVzZXQgRmlsdGVyPC9idXR0b24+ICBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG5cIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e3RoaXMuYXBwbHlGaWx0ZXJ9PkFwcGx5IEZpbHRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdi1jb2xvciBzdGlja3ktdG9wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1sb2dvIGNvbC02XCI+PGEgaHJlZj1cImluZGV4XCIgc3R5bGU9e3tmb250U2l6ZTozMCwgY29sb3I6IFwid2hpdGVcIn19Pk51cnNpbmcgSm9iIDxiIHN0eWxlPXt7Y29sb3IgOiBcInJnYigxODcsIDcsIDEwNilcIn19PkFnZW5jeTwvYj48L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJpbmRleFwiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJjb250YWN0XCI+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImZpbHRlclwiPkZpbHRlcjwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWZsb2F0IHNpZ25pblwiIGhyZWY9XCJsb2dpblwiIHJvbGU9XCJidXR0b25cIiBzdHlsZT17e2JhY2tncm91bmQ6IFwicmdiKDE4NywgNywgMTA2KVwiLCBjb2xvcjogXCJ3aGl0ZVwifX0+U2lnbiBJbjwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS13cmFwXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24taGVybyBvdmVybGF5IGlubmVyLXBhZ2UgYmctaW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoJy9pbWFnZXMvMS5wbmcnKVwifX1pZD1cImhvbWUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7Y29sb3I6XCJyZ2JhKDE4NywgNywgMTA2KVwiLCB3aWR0aDo2MDAsIG1hcmdpbjpcImF1dG9cIn19PkEgUG93ZXJmdWwgSm9iIEFnZW5jeTwvaDE+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2l0ZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUgbWItMlwiIHN0eWxlPXt7Y29sb3I6XCJyZ2JhKDE4NywgNywgMTA2KVwiLG1hcmdpbkxlZnQ6XCJjZW50ZXJcIn19PntgJHt0aGlzLnN0YXRlLnJlZ2VuZXJhdGVkX2pvYnMubGVuZ3RofS0gSm9icyBGb3VuZGB9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Qtam9iLWl0ZW1zIGNvbC0xMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNvcnQgYnk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic29ydGJ5XCIgc3R5bGU9e3ttYXJnaW5SaWdodCA6IDErXCJlbVwifX0gb25DaGFuZ2U9e3RoaXMucmVHZW5lcmF0ZUpvYnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV3X3RvX29sZFwiPk5ld2VzdCB0byBPbGRlc3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9sZF90b19uZXdcIj5PbGRlc3QgdG8gTmV3ZXN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hvdyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZW50cnlQZXJQYWdlXCIgc3R5bGU9e3ttYXJnaW5SaWdodCA6IDErXCJlbVwifX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FbnRyaWVzIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZmlsdGVyTW9kYWxcIj5GaWx0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgey8qIHt0aGlzLnN0YXRlLnBhZ2VzICYmIDxkaXY+e2BwYWdlcyBpcyAke3RoaXMuc3RhdGUucGFnZXN9YH08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50UGFnZSAmJiA8ZGl2PntgY3VycmVudCBwYWdlIGlzICR7dGhpcy5zdGF0ZS5jdXJyZW50UGFnZX1gfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZpcnN0SW5kZXggJiYgPGRpdj57YGZpcnN0IGluZGV4IGlzICR7dGhpcy5zdGF0ZS5maXJzdEluZGV4fWB9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGFzdEluZGV4ICYmIDxkaXY+e2BsYXN0IGluZGV4IGlzICR7dGhpcy5zdGF0ZS5sYXN0SW5kZXh9YH08L2Rpdj59ICovfVxyXG4gICAgICAgICAgICAgIDx1bCBzdHlsZT17e3dpZHRoIDogMTAwICsgXCIlXCJ9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlZ2VuZXJhdGVkX2pvYnMgJiYgdGhpcy5zdGF0ZS5yZWdlbmVyYXRlZF9qb2JzLnNsaWNlKHRoaXMuc3RhdGUuZmlyc3RJbmRleCx0aGlzLnN0YXRlLmxhc3RJbmRleCkubWFwKChqb2IpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBpZD17am9iLmlkfSA+XHJcblxyXG4gICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtc3RhcnQgam9iLWl0ZW0gIHBiLTIgbWIgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9qb2Itc2luZ2xlP2lkPSR7am9iLmlkfWB9PjxpbWcgc3JjPVwiaW1hZ2VzL2ZlYXR1cmVkLWxpc3RpbmctMS5qcGdcIiBhbHQ9XCJJbWFnZVwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgcHgtMiBweS0xIG1iLTNcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwicmdiKDE4NywgNywgMTA2KVwiLCBjb2xvcjogXCJ3aGl0ZVwifX0+e2Ake2pvYi5kYXRhLkpfQ29udHJhY3R9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPjxMaW5rIGhyZWY9e2Avam9iLXNpbmdsZT9pZD0ke2pvYi5pZH1gfT48YSBzdHlsZT17e2NvbG9yOlwiIzNjM2MzY1wiLGZvbnRXZWlnaHQ6XCJib2xkXCJ9fT57YCR7am9iLmRhdGEuSm5hbWV9YH08L2E+PC9MaW5rPjwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1ldGFcIj5FbXBsb3llcjogPHN0cm9uZz57dGhpcy5nZXRDb21wYW55TmFtZShqb2IuZGF0YS5FTVBMT1lFUklEKX0mbmJzcDsmbmJzcDsmbmJzcDs8L3N0cm9uZz5Qb3N0ZWQgSW46IDxzdHJvbmc+e2Ake3RoaXMuZ2V0RGF0ZVN0cmluZyhqb2IuZGF0YS5Qb3N0ZWREYXRlKX1gfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2NvbG9yOlwiIzNjM2MzY1wiLGZvbnRTaXplOjE2fX0+PHN0cm9uZz57dGhpcy5nZXRDaXR5TG9jYXRpb24oam9iLmRhdGEuSl9jaXR5KX08L3N0cm9uZz48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1ldGFcIj57dGhpcy5nZXRBcmVhTG9jYXRpb24oam9iLmRhdGEuSl9hcmVhKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIHRleHQtbWQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7Y29sb3I6XCIjM2MzYzNjXCJ9fT7CpXtgJHtqb2IuZGF0YS5KX21pbl9zYWxhcnl9IH4gwqUke2pvYi5kYXRhLkpfbWF4X3NhbGFyeX1gfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tYXJlYSBwYi0xMTUgdGV4dC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXdyYXAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb24gZXhhbXBsZSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYmFja1dhcmRCdG4gJiYgPGxpIG9uQ2xpY2s9e3RoaXMuZ29QcmV2aW91c30gY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+PGEgY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fT48c3Bhbj5QcmV2aW91czwvc3Bhbj48L2E+PC9saT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZm9yV2FyZEJ0biAmJiB0aGlzLnN0YXRlLnJlZ2VuZXJhdGVkX2pvYnMubGVuZ3RoID4gdGhpcy5zdGF0ZS5lbnRyeVBlclBhZ2UgJiYgPGxpIG9uQ2xpY2s9e3RoaXMuZ29Gb3J3YXJkfSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj48YSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19PjxzcGFuPk5leHQ8L3NwYW4+PC9hPjwvbGk+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgIDwvc2VjdGlvbj4gIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwic2l0ZS1mb290ZXJcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtMyBtYi00IG1iLW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5BZGRyZXNzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjg3LFdhcmQgVHlva3lvLEphcGFuIDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5udXJzZWpvYmFnZW5jeUBnbWFpbC5jb208L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+ODY0LTExLTIyMjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtMyBtYi00IG1iLW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db21wYW55PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFib3V0IFVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlJlc291cmNlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC0zIG1iLTQgbWItbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlN1cHBvcnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U3VwcG9ydDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcml2YWN5PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlRlcm1zIG9mIFNlcnZpY2U8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtMyBtYi00IG1iLW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db250YWN0IFVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2tcIj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImljb24tdHdpdHRlclwiPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1pbnN0YWdyYW1cIj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImljb24tbGlua2VkaW5cIj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgPC9odG1sPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9