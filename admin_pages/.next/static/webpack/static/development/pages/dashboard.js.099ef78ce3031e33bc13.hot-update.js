webpackHotUpdate("static\\development\\pages\\dashboard.js",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jobList; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_db_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/db.js */ "./lib/db.js");









var _jsxFileName = "C:\\Users\\lenovo\\Desktop\\admin_pages\\pages\\dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var jobList = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(jobList, _React$Component);

  var _super = _createSuper(jobList);

  function jobList(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, jobList);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deletePassId", function (id) {
      $("#deleteConfirmModal").modal('show');

      _this.setState({
        delete_id: id
      });

      console.log(_this.state.delete_id);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "viewPassId", function (id) {
      _this.setState({
        edit_id: id
      });

      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var data = {};

      try {
        firebase.firestore().collection('job').doc(id).get().then(function (snapshot) {
          var _this$setState;

          data = snapshot.data();
          console.log(data);

          _this.setState((_this$setState = {
            EMPLOYERID: data.EMPLOYERID,
            Jname: data.Jname,
            J_Contract: data.J_Contract,
            J_min_salary: data.J_min_salary,
            J_max_salary: data.J_max_salary,
            J_hours: data.J_hours,
            J_Working_Day: data.J_Working_Day,
            J_JpLevel: data.J_JpLevel,
            J_area: data.J_area,
            J_city: data.J_city,
            J_tel: data.J_tel,
            PostedDate: data.PostedDate,
            J_email: data.J_email
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, "J_area", data.J_area), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, "J_city", data.J_city), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, "J_Address", data.J_Address), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, "J_Description", data.J_Description), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, "J_Qualification", data.J_Qualification), _this$setState));
        });
        console.log("getting data");
      } catch (error) {
        console.log(error);
      }

      console.log(_this.state.jobName);
      $("#viewModal").modal('show');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "editPassId", function (id) {
      _this.setState({
        edit_id: id
      });

      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var data = {};

      try {
        firebase.firestore().collection('job').doc(id).get().then(function (snapshot) {
          var _this$setState2;

          data = snapshot.data();
          console.log();
          console.log(data);

          _this.setState((_this$setState2 = {
            Jname: data.Jname,
            J_Contract: data.J_Contract,
            J_min_salary: data.J_min_salary,
            J_max_salary: data.J_max_salary,
            J_hours: data.J_hours,
            J_Working_Day: data.J_Working_Day,
            J_JpLevel: data.J_JpLevel,
            J_area: data.J_area,
            J_city: data.J_city,
            J_tel: data.J_tel,
            PostedDate: data.PostedDate,
            J_email: data.J_email
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState2, "J_area", data.J_area), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState2, "J_city", data.J_city), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState2, "J_Address", data.J_Address), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState2, "J_Description", data.J_Description), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState2, "J_Qualification", data.J_Qualification), _this$setState2));

          _this.getArea(data.J_area);
        });
      } catch (error) {
        console.log(error);
      }

      $("#editModal").modal('show');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateJob", function () {
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

      try {
        var _firebase$firestore$c;

        firebase.firestore().collection('job').doc(_this.state.edit_id).update((_firebase$firestore$c = {
          Jname: _this.state.Jname,
          J_Contract: _this.state.J_Contract,
          J_min_salary: _this.state.J_min_salary,
          J_max_salary: _this.state.J_max_salary,
          J_hours: _this.state.J_hours,
          J_Working_Day: _this.state.J_Working_Day,
          J_JpLevel: _this.state.J_JpLevel,
          J_area: _this.state.J_area,
          J_city: _this.state.J_city,
          J_tel: _this.state.J_tel,
          PostedDate: _this.state.PostedDate,
          J_email: _this.state.J_email
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_firebase$firestore$c, "J_area", _this.state.J_area), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_firebase$firestore$c, "J_city", _this.state.J_city), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_firebase$firestore$c, "J_Address", _this.state.J_Address), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_firebase$firestore$c, "J_Description", _this.state.J_Description), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_firebase$firestore$c, "J_Qualification", _this.state.J_Qualification), _firebase$firestore$c));

        _this.refreshTable();
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, event.target.name, event.target.value));

      if (event.target.name == "AREAID") {}
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deleteJob", function () {
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

      try {
        firebase.firestore().collection('job').doc(_this.state.delete_id)["delete"]();
        console.log("Delete successful");

        _this.decreaseJobCount(_this.state.company);

        _this.refreshTable();
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getEmployer", function (EMPLOYERID) {
      var employers = _this.props.employer;
      var employerName = '';
      console.log(EMPLOYERID);
      employers && employers.map(function (Employers) {
        if (Employers.id == EMPLOYERID) {
          employerName = Employers.data.C_Name;
        }
      });
      console.log(employerName);
      return employerName;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getLocation", function (CITYID, AREAID) {
      var city = _this.props.city;
      var area = _this.props.area;
      var cityName = '';
      var areaName = '';
      city && city.map(function (City) {
        if (City.id == CITYID) {
          cityName = City.cityName;
        }
      });
      area && area.map(function (Area) {
        if (Area.id == AREAID) {
          areaName = Area.areaName;
        }
      });
      return cityName + "," + areaName;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getAreaOfJob", function (AREAID) {
      var area = _this.props.area;
      var areaName = '';
      area && area.map(function (Area) {
        if (Area.id == AREAID) {
          areaName = Area.areaName;
        }
      });
      return areaName;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getcity", function (CITYID) {
      var city = _this.props.city;
      var cityName = '';
      city && city.map(function (City) {
        if (City.id == CITYID) {
          cityName = City.cityName;
        }
      });
      return cityName;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getArea", function (id) {
      var area = {};

      try {
        var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
        firebase.firestore().collection('area').doc(id).get().then(function (areaQuerySnapshot) {
          area = areaQuerySnapshot.data();

          _this.setState({
            areaName: area.areaName
          });
        });
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "form_clear", function (event) {
      _this.setState(_this.initial_state);

      var inputs, index;
      inputs = document.getElementsByTagName('input');

      for (index = 0; index < inputs.length; ++index) {
        inputs[index].value = '';
      }

      document.getElementById('J_Address').value = '';
      document.getElementById('J_Description').value = '';
      document.getElementById('J_Qualification').value = '';
      $("#J_Contract option[selected]").removeAttr("selected");
      $("#J_Contract option:first").attr("selected", "selected");
      $("#J_JpLevel option[selected]").removeAttr("selected");
      $("#J_JpLevel option:first").attr("selected", "selected");
      $("#city option[selected]").removeAttr("selected");
      $("#city option:first").attr("selected", "selected");
      $("#area option[selected]").removeAttr("selected");
      $("#area option:first").attr("selected", "selected");
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "disable", function (event) {
      $("#J_Contract option:first").attr("disabled", "disabled");
      $("#J_JpLevel option:first").attr("disabled", "disabled");
      $("#city option:first").attr("disabled", "disabled");
      $("#area option:first").attr("disabled", "disabled");
    });

    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.datatableRef = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.$datatable = null;
    _this.state = {
      edit_id: '',
      delete_id: '',
      Jname: '',
      J_tel: '',
      J_min_salary: '',
      J_max_salary: '',
      PostedDate: '',
      J_hours: '',
      J_email: '',
      J_city: '',
      J_area: '',
      J_Working_Day: '',
      J_Qualification: '',
      J_JpLevel: '',
      J_Description: '',
      J_Contract: '',
      J_Address: '',
      areaName: '',
      jobs: props.job || [],
      cities: props.city,
      employers: props.employer || [],
      areas: props.area || []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(jobList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initializeDatatable();
    }
  }, {
    key: "initializeDatatable",
    value: function initializeDatatable() {
      this.$datatable = $(this.datatableRef.current).DataTable({
        order: [[3, "desc"]]
      });
    }
  }, {
    key: "refreshTable",
    value: function refreshTable() {
      this.$datatable.clear();
      var self = this;
      jobList.getInitialProps().then(function (response) {
        self.setState({
          jobs: response.job
        }); // self.initializeDatatable()
      }).bind(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _jsx;

      var cities = this.state.cities;
      var areas = this.state.areas;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("body", {
        className: "sb-nav-fixed",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 1
        }
      }, __jsx("nav", {
        className: "sb-topnav navbar navbar-expand navbar-dark bg-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "navbar-brand",
        href: "dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 13
        }
      }, "Admin"), __jsx("button", {
        className: "btn btn-link btn-sm order-1 order-lg-0",
        id: "sidebarToggle",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 13
        }
      }, __jsx("i", {
        className: "fas fa-bars",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 100
        }
      })), __jsx("form", {
        className: "d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "input-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 17
        }
      }, __jsx("ul", {
        className: "navbar-nav ml-auto ml-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 21
        }
      }, __jsx("li", {
        className: "nav-item dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 25
        }
      }, __jsx("a", {
        className: "nav-link dropdown-toggle",
        id: "userDropdown",
        href: "#",
        role: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "fas fa-user fa-fw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 176
        }
      })), __jsx("div", {
        className: "dropdown-menu dropdown-menu-right",
        "aria-labelledby": "userDropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 33
        }
      }, "Profile"), __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 33
        }
      }, "Activity Log"), __jsx("div", {
        className: "dropdown-divider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 33
        }
      }), __jsx("a", {
        className: "dropdown-item",
        href: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 33
        }
      }, "Logout"))))))), __jsx("div", {
        id: "layoutSidenav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "layoutSidenav_nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 13
        }
      }, __jsx("nav", {
        className: "sb-sidenav accordion sb-sidenav-dark",
        id: "sidenavAccordion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "sb-sidenav-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "sb-sidenav-menu-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 29
        }
      }, "Core"), __jsx("a", {
        className: "nav-link",
        href: "dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "sb-nav-link-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-tachometer-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 67
        }
      })), "Dashboard"), __jsx("a", {
        className: "nav-link collapsed",
        href: "#",
        "data-toggle": "collapse",
        "data-target": "#collapsePages",
        "aria-expanded": "false",
        "aria-controls": "collapsePages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "sb-nav-link-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-book-open",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 67
        }
      })), "Pages", __jsx("div", {
        className: "sb-sidenav-collapse-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 76
        }
      }))), __jsx("div", {
        className: "collapse",
        id: "collapsePages",
        "aria-labelledby": "headingTwo",
        "data-parent": "#sidenavAccordion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 29
        }
      }, __jsx("nav", {
        className: "sb-sidenav-menu-nested nav accordion",
        id: "sidenavAccordionPages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "nav-link collapsed",
        href: "#",
        "data-toggle": "collapse",
        "data-target": "#pagesCollapseAuth",
        "aria-expanded": "false",
        "aria-controls": "pagesCollapseAuth",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 37
        }
      }, "Authentication", __jsx("div", {
        className: "sb-sidenav-collapse-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 84
        }
      }))), __jsx("div", {
        className: "collapse",
        id: "pagesCollapseAuth",
        "aria-labelledby": "headingOne",
        "data-parent": "#sidenavAccordionPages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 37
        }
      }, __jsx("nav", {
        className: "sb-sidenav-menu-nested nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 45
        }
      }, "Login"), __jsx("a", {
        className: "nav-link",
        href: "register",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 45
        }
      }, "Register"), __jsx("a", {
        className: "nav-link",
        href: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 45
        }
      }, "Forgot Password"))))))))), __jsx("div", {
        id: "layoutSidenav_content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 13
        }
      }, __jsx("main", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "mt-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 25
        }
      }, "List of Jobs"), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "col-xl-3 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "card bg-success text-white mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 37
        }
      }, "Employers Table"), __jsx("div", {
        className: "card-footer d-flex align-items-center justify-content-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "small text-white stretched-link",
        href: "emplyoer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 41
        }
      }, "View Details"), __jsx("div", {
        className: "small text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-angle-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 75
        }
      })))))), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "container admin-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "table-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 9
        }
      }, __jsx("table", {
        ref: this.datatableRef,
        className: "display table table-bordered",
        style: {
          width: 100 + "%"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 9
        }
      }, __jsx("thead", {
        className: "thread-color",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 21
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 21
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 29
        }
      }, "Job Name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 29
        }
      }, "Employment Status"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 29
        }
      }, "City"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 29
        }
      }, "Area"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 29
        }
      }, "Salary"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 29
        }
      }, "Posted Date"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 29
        }
      }, "Action"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 21
        }
      }, this.state.jobs.map(function (Job) {
        return __jsx("tr", {
          key: Job.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 436,
            columnNumber: 25
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 437,
            columnNumber: 29
          }
        }, Job.Jname), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 438,
            columnNumber: 29
          }
        }, Job.J_Contract), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 29
          }
        }, _this2.getcity(Job.J_city)), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440,
            columnNumber: 29
          }
        }, _this2.getAreaOfJob(Job.J_area)), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441,
            columnNumber: 29
          }
        }, Job.J_min_salary, "~", Job.J_max_salary), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442,
            columnNumber: 29
          }
        }, Job.PostedDate), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443,
            columnNumber: 29
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 33
          }
        }, __jsx("i", {
          onClick: function onClick() {
            return _this2.viewPassId(Job.id);
          },
          className: "view material-icons icon-padding",
          title: "View",
          style: {
            color: "rgb(0, 110, 255)",
            cursor: "pointer"
          },
          "data-dismiss": "modal",
          "data-toggle": "tooltip",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 36
          }
        }, "\uE417")), " \xA0", __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 33
          }
        }, __jsx("i", {
          onClick: function onClick() {
            return _this2.editPassId(Job.id);
          },
          className: "edit material-icons icon-padding",
          title: "Edit",
          style: {
            color: "yellow",
            cursor: "pointer"
          },
          "data-dismiss": "modal",
          "data-toggle": "tooltip",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 36
          }
        }, "\uE254")), " \xA0", __jsx("a", {
          onClick: function onClick() {
            return _this2.deletePassId(Job.id);
          },
          className: "delete material-icons icon-padding",
          title: "Delete",
          style: {
            color: "red",
            cursor: "pointer"
          },
          "data-dismiss": "modal",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446,
            columnNumber: 9
          }
        }, "\uE872"), " \xA0"));
      }))))), __jsx("div", {
        id: "viewModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 2
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 6
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 7
        }
      }, "Detail Information"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 7
        }
      }, "\xD7")), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 6
        }
      }, __jsx("table", {
        className: "table table-bordered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 21
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 31
        }
      }, "Job Name:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 49
        }
      }, this.state.Jname)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 30
        }
      }, " Employer Name:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 54
        }
      }, " ", this.getEmployer(this.state.EMPLOYERID))), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 30
        }
      }, "Posted_Date: "), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 52
        }
      }, this.state.PostedDate)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 31
        }
      }, "Phone Number:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 53
        }
      }, " ", this.state.J_tel)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 31
        }
      }, "Email:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 46
        }
      }, " ", this.state.J_email)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 31
        }
      }, "Address:"), " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 49
        }
      }, " ", this.state.J_Address, ", ", this.getLocation(this.state.J_city, this.state.J_area), " ")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 30
        }
      }, "Employment Status:"), " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 58
        }
      }, this.state.J_Contract)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 31
        }
      }, "Salary:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 47
        }
      }, " ", this.state.J_min_salary, "~", this.state.J_max_salary, " Yen")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 30
        }
      }, "Working Days:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 52
        }
      }, " ", this.state.J_Working_Day, " Days per Week")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 30
        }
      }, "Working Hours:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 53
        }
      }, this.state.J_hours)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 31
        }
      }, "Minimum Japanese Skill:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 63
        }
      }, " ", this.state.J_JpLevel)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476,
          columnNumber: 30
        }
      }, "Job Description:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476,
          columnNumber: 55
        }
      }, " ", this.state.J_Description)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 31
        }
      }, "Job Qualification:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 58
        }
      }, " ", this.state.J_Qualification)))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481,
          columnNumber: 6
        }
      }, __jsx("input", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal",
        value: "Cancel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 7
        }
      }), __jsx("a", {
        onClick: function onClick() {
          return _this2.deletePassId(_this2.state.id);
        },
        "data-dismiss": "modal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 25
        }
      }, __jsx("button", {
        className: "btn btn-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 96
        }
      }, "Delete")))))), __jsx("div", {
        id: "editModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492,
          columnNumber: 25
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 29
        }
      }, "Application Requirement"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        onClick: this.form_clear,
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 29
        }
      }, "\xD7")), __jsx("form", {
        action: "#",
        method: "post",
        style: {
          width: 100 + "%"
        },
        onSubmit: this.addJob,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 25
        }
      }, __jsx("form", {
        role: "Form",
        method: "post",
        action: "",
        "accept-charset": "UTF-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 41
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503,
          columnNumber: 49
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "Jname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506,
          columnNumber: 61
        }
      }, "Job Name"), __jsx("input", {
        type: "text",
        id: "Jname",
        "class": "form-control",
        name: "Jname",
        placeholder: "Enter your Job Name",
        onChange: this.handleChange,
        value: this.state.Jname,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_Contract",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 61
        }
      }, "Employment Status"), __jsx("select", {
        name: "J_Contract",
        id: "J_Contract",
        onClick: this.disable,
        className: "form-control",
        onChange: this.handleChange,
        value: this.state.selectedValue,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512,
          columnNumber: 61
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513,
          columnNumber: 53
        }
      }, "Choose Employment Status"), __jsx("option", {
        value: "Full-Time",
        selected: this.state.employmentStatus == "Full-Time" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514,
          columnNumber: 53
        }
      }, "Full Time"), __jsx("option", {
        value: "Part-Time",
        selected: this.state.employmentStatus == "Part-Time" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515,
          columnNumber: 53
        }
      }, "Part Time"))), __jsx("label", {
        "for": "salary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518,
          columnNumber: 57
        }
      }, "Salary(\xA5)"), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 57
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 53
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 57
        }
      }, __jsx("input", {
        type: "text",
        id: "min_salary",
        "class": "form-control",
        name: "J_min_salary",
        placeholder: "Enter Minimun Salary",
        onChange: this.handleChange,
        value: this.state.J_min_salary,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522,
          columnNumber: 57
        }
      }))), __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 53
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 57
        }
      }, __jsx("input", {
        type: "text",
        id: "max_salary",
        "class": "form-control",
        name: "J_max_salary",
        placeholder: "Enter Maximun Salary",
        onChange: this.handleChange,
        value: this.state.J_max_salary,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 57
        }
      })))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_hours",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 61
        }
      }, "Working Hours"), __jsx("input", {
        type: "text",
        id: "J_hours",
        "class": "form-control",
        name: "J_hours",
        placeholder: "Enter Working Hours",
        onChange: this.handleChange,
        value: this.state.J_hours,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_Working_Day",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536,
          columnNumber: 61
        }
      }, "Working Days"), __jsx("input", {
        type: "text",
        id: "J_Working_Day",
        "class": "form-control",
        name: "J_Working_Day",
        placeholder: "Enter Working Days",
        onChange: this.handleChange,
        value: this.state.J_Working_Day,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_JpLevel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 61
        }
      }, "Select Japanese Skill"), __jsx("select", {
        name: "J_JpLevel",
        id: "J_JpLevel",
        onClick: this.disable,
        onChange: this.handleChange,
        value: this.state.selectedValue,
        className: "form-control",
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541,
          columnNumber: 61
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 57
        }
      }, "Japanese Languae Skill"), __jsx("option", {
        value: "3",
        selected: this.state.japaneseSkill == "3" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 57
        }
      }, "N3"), __jsx("option", {
        value: "2",
        selected: this.state.japaneseSkill == "2" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 57
        }
      }, "N2"), __jsx("option", {
        value: "1",
        selected: this.state.japaneseSkill == "1" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 57
        }
      }, "N1"))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_tel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 61
        }
      }, "Tel:"), __jsx("input", {
        type: "text",
        id: "J_tel",
        "class": "form-control",
        name: "J_tel",
        placeholder: "Enter phone:",
        onChange: this.handleChange,
        value: this.state.J_tel,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 61
        }
      })))), __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559,
          columnNumber: 45
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 45
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 69
        }
      }, "Posted Date"), __jsx("input", (_jsx = {
        type: "datetime-local",
        "class": "form-control",
        value: "datetime",
        name: "PostedDate",
        onChange: this.handleChange
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "value", this.state.PostedDate), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "required", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 562,
        columnNumber: 69
      }), _jsx))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 49
        }
      }, __jsx("label", {
        "for": "J_email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 61
        }
      }, "Email Address"), __jsx("input", {
        type: "text",
        id: "J_email",
        "class": "form-control",
        name: "J_email",
        placeholder: "abc@gmail.com",
        onChange: this.handleChange,
        value: this.state.J_email,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 61
        }
      }, "Select Area"), __jsx("select", {
        name: "AREAID",
        id: "area",
        className: "form-control",
        onClick: this.disable,
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570,
          columnNumber: 61
        }
      }, __jsx("option", {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 53
        }
      }, "Select Area in Japan"), this.state.areas.map(function (Area) {
        return _this2.state.J_area == Area.id ? __jsx("option", {
          value: Area.id,
          selected: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 573,
            columnNumber: 57
          }
        }, Area.areaName) : __jsx("option", {
          value: Area.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 574,
            columnNumber: 57
          }
        }, Area.areaName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_city",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 61
        }
      }, "Select your City"), __jsx("select", {
        name: "CITYID",
        id: "city",
        className: "form-control",
        onClick: this.disable,
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 61
        }
      }, __jsx("option", {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 53
        }
      }, "Select Area in Japan"), cities && cities.map(function (City) {
        return _this2.state.J_city == City.id ? __jsx("option", {
          value: City.id,
          selected: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 583,
            columnNumber: 57
          }
        }, City.cityName) : __jsx("option", {
          value: City.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 584,
            columnNumber: 57
          }
        }, City.cityName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "detailAddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 61
        }
      }, "Detail Address"), __jsx("textarea", {
        "class": "form-control",
        id: "J_Address",
        name: "J_Address",
        onChange: this.handleChange,
        value: this.state.J_Address,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "JobDes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 61
        }
      }, "Job Description"), __jsx("textarea", {
        "class": "form-control",
        id: "J_Description",
        name: "J_Description",
        onChange: this.handleChange,
        value: this.state.J_Description,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "Qual",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 61
        }
      }, "Other Qualification"), __jsx("textarea", {
        "class": "form-control",
        id: "J_Qualification",
        name: "J_Qualification",
        onChange: this.handleChange,
        value: this.state.J_Qualification,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 61
        }
      }))))))))))), __jsx("div", {
        id: "deleteConfirmModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog del-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
          columnNumber: 17
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624,
          columnNumber: 6
        }
      }, "Delete Job"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625,
          columnNumber: 6
        }
      }, "\xD7")), __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 6
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 25
        }
      }, "Are you sure you want to delete this job?"), __jsx("p", {
        className: "text-warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 7
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 35
        }
      }, "This action cannot be undone.")))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633,
          columnNumber: 17
        }
      }, __jsx("input", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal",
        value: "Cancel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634,
          columnNumber: 6
        }
      }), __jsx("input", {
        type: "button",
        className: "btn btn-danger",
        value: "Delete",
        "data-dismiss": "modal",
        onClick: this.deleteJob,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635,
          columnNumber: 6
        }
      }))))))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var firebase, jobQuerySnapshot, jobs, areaQuerySnapshot, areas, cityQuerySnapshot, cities, employerQuerySnapshot, employers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

              case 2:
                firebase = _context.sent;
                _context.next = 5;
                return firebase.firestore().collection("job").get();

              case 5:
                jobQuerySnapshot = _context.sent;
                jobs = jobQuerySnapshot.docs.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc.data()), {}, {
                    id: doc.id
                  });
                });
                _context.next = 9;
                return firebase.firestore().collection("area").get();

              case 9:
                areaQuerySnapshot = _context.sent;
                areas = areaQuerySnapshot.docs.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc.data()), {}, {
                    id: doc.id
                  });
                });
                _context.next = 13;
                return firebase.firestore().collection("city").get();

              case 13:
                cityQuerySnapshot = _context.sent;
                cities = cityQuerySnapshot.docs.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc.data()), {}, {
                    id: doc.id
                  });
                });
                _context.next = 17;
                return firebase.firestore().collection("employer").limit(10).get();

              case 17:
                employerQuerySnapshot = _context.sent;
                employers = employerQuerySnapshot.docs.map(function (doc) {
                  return {
                    data: doc.data(),
                    id: doc.id
                  };
                });
                return _context.abrupt("return", {
                  job: jobs,
                  area: areas,
                  city: cities,
                  employer: employers
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return jobList;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiam9iTGlzdCIsInByb3BzIiwiaWQiLCIkIiwibW9kYWwiLCJzZXRTdGF0ZSIsImRlbGV0ZV9pZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVkaXRfaWQiLCJmaXJlYmFzZSIsImxvYWRGaXJlYmFzZSIsImRhdGEiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiRU1QTE9ZRVJJRCIsIkpuYW1lIiwiSl9Db250cmFjdCIsIkpfbWluX3NhbGFyeSIsIkpfbWF4X3NhbGFyeSIsIkpfaG91cnMiLCJKX1dvcmtpbmdfRGF5IiwiSl9KcExldmVsIiwiSl9hcmVhIiwiSl9jaXR5IiwiSl90ZWwiLCJQb3N0ZWREYXRlIiwiSl9lbWFpbCIsIkpfQWRkcmVzcyIsIkpfRGVzY3JpcHRpb24iLCJKX1F1YWxpZmljYXRpb24iLCJlcnJvciIsImpvYk5hbWUiLCJnZXRBcmVhIiwidXBkYXRlIiwicmVmcmVzaFRhYmxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkZWNyZWFzZUpvYkNvdW50IiwiY29tcGFueSIsImVtcGxveWVycyIsImVtcGxveWVyIiwiZW1wbG95ZXJOYW1lIiwibWFwIiwiRW1wbG95ZXJzIiwiQ19OYW1lIiwiQ0lUWUlEIiwiQVJFQUlEIiwiY2l0eSIsImFyZWEiLCJjaXR5TmFtZSIsImFyZWFOYW1lIiwiQ2l0eSIsIkFyZWEiLCJhcmVhUXVlcnlTbmFwc2hvdCIsImluaXRpYWxfc3RhdGUiLCJpbnB1dHMiLCJpbmRleCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUF0dHIiLCJhdHRyIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImRhdGF0YWJsZVJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiJGRhdGF0YWJsZSIsImpvYnMiLCJqb2IiLCJjaXRpZXMiLCJhcmVhcyIsImluaXRpYWxpemVEYXRhdGFibGUiLCJjdXJyZW50IiwiRGF0YVRhYmxlIiwib3JkZXIiLCJjbGVhciIsInNlbGYiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXNwb25zZSIsIndpZHRoIiwiSm9iIiwiZ2V0Y2l0eSIsImdldEFyZWFPZkpvYiIsInZpZXdQYXNzSWQiLCJjb2xvciIsImN1cnNvciIsImVkaXRQYXNzSWQiLCJkZWxldGVQYXNzSWQiLCJnZXRFbXBsb3llciIsImdldExvY2F0aW9uIiwiZm9ybV9jbGVhciIsImFkZEpvYiIsImRpc2FibGUiLCJzZWxlY3RlZFZhbHVlIiwiZW1wbG95bWVudFN0YXR1cyIsImphcGFuZXNlU2tpbGwiLCJkZWxldGVKb2IiLCJqb2JRdWVyeVNuYXBzaG90IiwiZG9jcyIsImNpdHlRdWVyeVNuYXBzaG90IiwibGltaXQiLCJlbXBsb3llclF1ZXJ5U25hcHNob3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE87Ozs7O0FBRWpCLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsdU5BOEZKLFVBQUNDLEVBQUQsRUFBTTtBQUNqQkMsT0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJDLEtBQXpCLENBQStCLE1BQS9COztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDQyxpQkFBUyxFQUFHSjtBQUFiLE9BQWQ7O0FBQ0FLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtDLEtBQUwsQ0FBV0gsU0FBdkI7QUFDSCxLQWxHa0I7O0FBQUEscU5BbUdGLFVBQUNKLEVBQUQsRUFBUTtBQUNqQixZQUFLRyxRQUFMLENBQWM7QUFBQ0ssZUFBTyxFQUFHUjtBQUFYLE9BQWQ7O0FBQ0EsVUFBSVMsUUFBUSxHQUFHQyxnRUFBWSxFQUEzQjtBQUNBLFVBQUlDLElB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QUQrQixHQUUvQkMsVUFGK0IsQ0FFcEIsTUFGb0IsRUFHL0JFLEdBSCtCLEU7OztBQUExQjRGLGlDO0FBSUE5QixzQixHQUFTOEIsaUJBQWlCLENBQUNELElBQWxCLENBQXVCMUQsR0FBdkIsQ0FBMkIsVUFBQ2xDLEdBQUQ7QUFBQSx5REFDbkNBLEdBQUcsQ0FBQ0gsSUFBSixFQURtQztBQUV0Q1gsc0JBQUUsRUFBRWMsR0FBRyxDQUFDZDtBQUY4QjtBQUFBLGlCQUEzQixDOzt1QkFLcUJTLFFBQVEsQ0FDdkNHLFNBRCtCLEdBRS9CQyxVQUYrQixDQUVwQixVQUZvQixFQUcvQitGLEtBSCtCLENBR3pCLEVBSHlCLEVBSS9CN0YsR0FKK0IsRTs7O0FBQTlCOEYscUM7QUFLQWhFLHlCLEdBQVlnRSxxQkFBcUIsQ0FBQ0gsSUFBdEIsQ0FBMkIxRCxHQUEzQixDQUErQixVQUFDbEMsR0FBRDtBQUFBLHlCQUFVO0FBQ3ZESCx3QkFBSSxFQUFHRyxHQUFHLENBQUNILElBQUosRUFEZ0Q7QUFFdkRYLHNCQUFFLEVBQUVjLEdBQUcsQ0FBQ2Q7QUFGK0MsbUJBQVY7QUFBQSxpQkFBL0IsQztpREFJWDtBQUFDNEUscUJBQUcsRUFBR0QsSUFBUDtBQUFhckIsc0JBQUksRUFBR3dCLEtBQXBCO0FBQTJCekIsc0JBQUksRUFBR3dCLE1BQWxDO0FBQTBDL0IsMEJBQVEsRUFBRUQ7QUFBcEQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3RnNCMkIsNENBQUssQ0FBQ3NDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZC5qcy4wOTllZjc4Y2UzMDMxZTMzYmMxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHtsb2FkRmlyZWJhc2V9IGZyb20gJy4uL2xpYi9kYi5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqb2JMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kYXRhdGFibGVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLiRkYXRhdGFibGUgPSBudWxsXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZWRpdF9pZCA6ICcnLFxyXG4gICAgICAgICAgICBkZWxldGVfaWQgOiAnJyxcclxuICAgICAgICAgICAgSm5hbWU6JycsXHJcbiAgICAgICAgICAgIEpfdGVsOicnLFxyXG4gICAgICAgICAgICBKX21pbl9zYWxhcnk6JycsXHJcbiAgICAgICAgICAgIEpfbWF4X3NhbGFyeTonJyxcclxuICAgICAgICAgICAgUG9zdGVkRGF0ZTonJyxcclxuICAgICAgICAgICAgSl9ob3VyczonJyxcclxuICAgICAgICAgICAgSl9lbWFpbDonJyxcclxuICAgICAgICAgICAgSl9jaXR5OicnLFxyXG4gICAgICAgICAgICBKX2FyZWE6JycsXHJcbiAgICAgICAgICAgIEpfV29ya2luZ19EYXk6JycsXHJcbiAgICAgICAgICAgIEpfUXVhbGlmaWNhdGlvbjonJyxcclxuICAgICAgICAgICAgSl9KcExldmVsOicnLFxyXG4gICAgICAgICAgICBKX0Rlc2NyaXB0aW9uOicnLFxyXG4gICAgICAgICAgICBKX0NvbnRyYWN0OicnLFxyXG4gICAgICAgICAgICBKX0FkZHJlc3M6JycsXHJcbiAgICAgICAgICAgIGFyZWFOYW1lIDogJycsXHJcbiAgICAgICAgICAgIGpvYnMgOiBwcm9wcy5qb2IgfHwgW10sXHJcbiAgICAgICAgICAgIGNpdGllcyA6IHByb3BzLmNpdHksXHJcbiAgICAgICAgICAgIGVtcGxveWVycyA6IHByb3BzLmVtcGxveWVyIHx8IFtdLFxyXG4gICAgICAgICAgICBhcmVhcyA6IHByb3BzLmFyZWEgfHwgW10sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGF0YWJsZSgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZURhdGF0YWJsZSgpIHtcclxuICAgICAgdGhpcy4kZGF0YXRhYmxlID0gJCh0aGlzLmRhdGF0YWJsZVJlZi5jdXJyZW50KS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgb3JkZXI6IFtbMywgXCJkZXNjXCJdXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVGFibGUoKSB7XHJcbiAgICAgIHRoaXMuJGRhdGF0YWJsZS5jbGVhcigpXHJcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBqb2JMaXN0XHJcbiAgICAgICAgLmdldEluaXRpYWxQcm9wcygpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgam9iczogcmVzcG9uc2Uuam9iLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyBzZWxmLmluaXRpYWxpemVEYXRhdGFibGUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IGZpcmViYXNlID0gYXdhaXQgbG9hZEZpcmViYXNlKCkgXHJcbiAgICAgICAgY29uc3Qgam9iUXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImpvYlwiKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3Qgam9icyA9IGpvYlF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgY29uc3QgYXJlYVF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJhcmVhXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBhcmVhcyA9IGFyZWFRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBjb25zdCBjaXR5UXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJjaXR5XCIpXHJcbiAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGNpdGllcyA9IGNpdHlRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBjb25zdCBlbXBsb3llclF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJlbXBsb3llclwiKVxyXG4gICAgICAgICAgICAubGltaXQoMTApXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBlbXBsb3llcnMgPSBlbXBsb3llclF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgZGF0YSA6IGRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHJldHVybiB7am9iIDogam9icywgYXJlYSA6IGFyZWFzLCBjaXR5IDogY2l0aWVzLCBlbXBsb3llcjogZW1wbG95ZXJzfTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVQYXNzSWQgPSAoaWQpPT57XHJcbiAgICAgICAgJChcIiNkZWxldGVDb25maXJtTW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZWxldGVfaWQgOiBpZH0pXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kZWxldGVfaWQpXHJcbiAgICB9OyAgICAgIFxyXG4gICAgICAgIHZpZXdQYXNzSWQgPSAoaWQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdF9pZCA6IGlkfSlcclxuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdqb2InKS5kb2MoaWQpLmdldCgpLlxyXG4gICAgICAgICAgICAgICAgdGhlbigoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHNuYXBzaG90LmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFTVBMT1lFUklEIDogZGF0YS5FTVBMT1lFUklELCAgICAgICBcclxuICAgICAgICAgICAgICAgIEpuYW1lOmRhdGEuSm5hbWUsXHJcbiAgICAgICAgICAgICAgICBKX0NvbnRyYWN0OmRhdGEuSl9Db250cmFjdCxcclxuICAgICAgICAgICAgICAgIEpfbWluX3NhbGFyeTpkYXRhLkpfbWluX3NhbGFyeSxcclxuICAgICAgICAgICAgICAgIEpfbWF4X3NhbGFyeTpkYXRhLkpfbWF4X3NhbGFyeSxcclxuICAgICAgICAgICAgICAgIEpfaG91cnM6ZGF0YS5KX2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgSl9Xb3JraW5nX0RheTpkYXRhLkpfV29ya2luZ19EYXksXHJcbiAgICAgICAgICAgICAgICBKX0pwTGV2ZWw6ZGF0YS5KX0pwTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBKX2FyZWEgOiBkYXRhLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgIEpfY2l0eTogZGF0YS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgSl90ZWw6ZGF0YS5KX3RlbCxcclxuICAgICAgICAgICAgICAgIFBvc3RlZERhdGU6ZGF0YS5Qb3N0ZWREYXRlLFxyXG4gICAgICAgICAgICAgICAgSl9lbWFpbDpkYXRhLkpfZW1haWwsXHJcbiAgICAgICAgICAgICAgICBKX2FyZWE6ZGF0YS5KX2FyZWEsXHJcbiAgICAgICAgICAgICAgICBKX2NpdHk6ZGF0YS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICBKX0FkZHJlc3M6ZGF0YS5KX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBKX0Rlc2NyaXB0aW9uOmRhdGEuSl9EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIEpfUXVhbGlmaWNhdGlvbjpkYXRhLkpfUXVhbGlmaWNhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgZGF0YVwiKVxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5qb2JOYW1lKVxyXG4gICAgICAgICAgICAkKFwiI3ZpZXdNb2RhbFwiKS5tb2RhbCgnc2hvdycpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBlZGl0UGFzc0lkID0gKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRfaWQgOiBpZH0pXHJcbiAgICAgICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge31cclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJykuZG9jKGlkKS5nZXQoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzbmFwc2hvdC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpuYW1lOmRhdGEuSm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfQ29udHJhY3Q6ZGF0YS5KX0NvbnRyYWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX21pbl9zYWxhcnk6ZGF0YS5KX21pbl9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfbWF4X3NhbGFyeTpkYXRhLkpfbWF4X3NhbGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9ob3VyczpkYXRhLkpfaG91cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfV29ya2luZ19EYXk6ZGF0YS5KX1dvcmtpbmdfRGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0pwTGV2ZWw6ZGF0YS5KX0pwTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfYXJlYSA6IGRhdGEuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2NpdHkgOiBkYXRhLkpfY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIEpfdGVsOmRhdGEuSl90ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RlZERhdGU6ZGF0YS5Qb3N0ZWREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2VtYWlsOmRhdGEuSl9lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9hcmVhOmRhdGEuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2NpdHk6ZGF0YS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfQWRkcmVzczpkYXRhLkpfQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9EZXNjcmlwdGlvbjpkYXRhLkpfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfUXVhbGlmaWNhdGlvbjpkYXRhLkpfUXVhbGlmaWNhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXJlYShkYXRhLkpfYXJlYSlcclxuICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChcIiNlZGl0TW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBkYXRlSm9iID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdqb2InKS5kb2ModGhpcy5zdGF0ZS5lZGl0X2lkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIEpuYW1lOnRoaXMuc3RhdGUuSm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9Db250cmFjdDp0aGlzLnN0YXRlLkpfQ29udHJhY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9taW5fc2FsYXJ5OnRoaXMuc3RhdGUuSl9taW5fc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfbWF4X3NhbGFyeTp0aGlzLnN0YXRlLkpfbWF4X3NhbGFyeSxcclxuICAgICAgICAgICAgICAgICAgICBKX2hvdXJzOnRoaXMuc3RhdGUuSl9ob3VycyxcclxuICAgICAgICAgICAgICAgICAgICBKX1dvcmtpbmdfRGF5OnRoaXMuc3RhdGUuSl9Xb3JraW5nX0RheSxcclxuICAgICAgICAgICAgICAgICAgICBKX0pwTGV2ZWw6dGhpcy5zdGF0ZS5KX0pwTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9hcmVhIDogdGhpcy5zdGF0ZS5KX2FyZWEsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9jaXR5IDogdGhpcy5zdGF0ZS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgSl90ZWw6dGhpcy5zdGF0ZS5KX3RlbCxcclxuICAgICAgICAgICAgICAgICAgICBQb3N0ZWREYXRlOnRoaXMuc3RhdGUuUG9zdGVkRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBKX2VtYWlsOnRoaXMuc3RhdGUuSl9lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBKX2FyZWE6dGhpcy5zdGF0ZS5KX2FyZWEsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9jaXR5OnRoaXMuc3RhdGUuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfQWRkcmVzczp0aGlzLnN0YXRlLkpfQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBKX0Rlc2NyaXB0aW9uOnRoaXMuc3RhdGUuSl9EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBKX1F1YWxpZmljYXRpb246dGhpcy5zdGF0ZS5KX1F1YWxpZmljYXRpb25cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGFibGUoKTtcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5uYW1lID09IFwiQVJFQUlEXCIpe1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBkZWxldGVKb2IgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2pvYicpXHJcbiAgICAgICAgICAgIC5kb2ModGhpcy5zdGF0ZS5kZWxldGVfaWQpXHJcbiAgICAgICAgICAgIC5kZWxldGUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGUgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZWNyZWFzZUpvYkNvdW50KHRoaXMuc3RhdGUuY29tcGFueSlcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGFibGUoKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgZ2V0RW1wbG95ZXIgPSAoRU1QTE9ZRVJJRCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtcGxveWVycyA9IHRoaXMucHJvcHMuZW1wbG95ZXJcclxuICAgICAgICBsZXQgZW1wbG95ZXJOYW1lID0gJydcclxuICAgICAgICBjb25zb2xlLmxvZyhFTVBMT1lFUklEKVxyXG4gICAgICAgIGVtcGxveWVycyAmJiBlbXBsb3llcnMubWFwKEVtcGxveWVycyA9PiB7XHJcbiAgICAgICAgICAgIGlmKEVtcGxveWVycy5pZCA9PSBFTVBMT1lFUklEKXtcclxuICAgICAgICAgICAgICAgIGVtcGxveWVyTmFtZSA9IEVtcGxveWVycy5kYXRhLkNfTmFtZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtcGxveWVyTmFtZSlcclxuICAgICAgICByZXR1cm4gZW1wbG95ZXJOYW1lXHJcbiAgICAgfVxyXG5cclxuICAgICBnZXRMb2NhdGlvbiA9IChDSVRZSUQsIEFSRUFJRCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNpdHkgPSB0aGlzLnByb3BzLmNpdHlcclxuICAgICAgICBjb25zdCBhcmVhID0gdGhpcy5wcm9wcy5hcmVhXHJcbiAgICAgICAgbGV0IGNpdHlOYW1lID0gJydcclxuICAgICAgICBsZXQgYXJlYU5hbWUgPSAnJ1xyXG5cclxuICAgICAgICBjaXR5ICYmIGNpdHkubWFwKENpdHk9PntcclxuICAgICAgICAgICAgaWYoQ2l0eS5pZCA9PSBDSVRZSUQpe1xyXG4gICAgICAgICAgICAgICAgY2l0eU5hbWUgPSBDaXR5LmNpdHlOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGFyZWEgJiYgYXJlYS5tYXAoQXJlYT0+e1xyXG4gICAgICAgICAgICBpZihBcmVhLmlkID09IEFSRUFJRCl7XHJcbiAgICAgICAgICAgICAgICBhcmVhTmFtZSA9IEFyZWEuYXJlYU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICByZXR1cm4gY2l0eU5hbWUgKyBcIixcIiArIGFyZWFOYW1lXHJcbiAgICAgfVxyXG4gICAgIGdldEFyZWFPZkpvYiA9IChBUkVBSUQpID0+IHtcclxuICAgICAgIGNvbnN0IGFyZWEgPSB0aGlzLnByb3BzLmFyZWFcclxuICAgIGxldCBhcmVhTmFtZSA9ICcnXHJcbiAgICBhcmVhICYmIGFyZWEubWFwKEFyZWE9PntcclxuICAgICAgICAgICAgaWYoQXJlYS5pZCA9PSBBUkVBSUQpe1xyXG4gICAgICAgICAgICAgICAgYXJlYU5hbWUgPSBBcmVhLmFyZWFOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgcmV0dXJuIGFyZWFOYW1lXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIGdldGNpdHkgPSAoQ0lUWUlEKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2l0eSA9IHRoaXMucHJvcHMuY2l0eVxyXG4gICAgIFxyXG4gICAgICAgIGxldCBjaXR5TmFtZSA9ICcnXHJcbiAgICAgIFxyXG5cclxuICAgICAgICBjaXR5ICYmIGNpdHkubWFwKENpdHk9PntcclxuICAgICAgICAgICAgaWYoQ2l0eS5pZCA9PSBDSVRZSUQpe1xyXG4gICAgICAgICAgICAgICAgY2l0eU5hbWUgPSBDaXR5LmNpdHlOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICAgICByZXR1cm4gY2l0eU5hbWUgXHJcbiAgICAgfVxyXG5cclxuICAgIGdldEFyZWEgPSAoaWQpID0+IHtcclxuICAgICAgICBsZXQgYXJlYSA9IHt9XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdhcmVhJylcclxuICAgICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChhcmVhUXVlcnlTbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgIGFyZWEgPSBhcmVhUXVlcnlTbmFwc2hvdC5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthcmVhTmFtZSA6IGFyZWEuYXJlYU5hbWV9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtX2NsZWFyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxfc3RhdGUpO1xyXG4gICAgICAgIGxldCBpbnB1dHMsIGluZGV4O1xyXG4gICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGlucHV0cy5sZW5ndGg7ICsraW5kZXgpIHtcclxuICAgICAgICAgICAgaW5wdXRzW2luZGV4XS52YWx1ZSA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKX0FkZHJlc3MnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKX0Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSl9RdWFsaWZpY2F0aW9uJykudmFsdWUgPSAnJztcclxuICAgICAgIFxyXG4gIFxyXG4gICAgICAgICQoXCIjSl9Db250cmFjdCBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNKX0NvbnRyYWN0IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICQoXCIjSl9KcExldmVsIG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI0pfSnBMZXZlbCBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjY2l0eSBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTsgXHJcbiAgICAgICAgJChcIiNhcmVhIG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI2FyZWEgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7ICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGRpc2FibGUgPSAoZXZlbnQpID0+IHsgICBcclxuICAgICAgICAkKFwiI0pfQ29udHJhY3Qgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7IFxyXG4gICAgICAgICQoXCIjSl9KcExldmVsIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpOyBcclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgJChcIiNhcmVhIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpOyBcclxuICAgIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2l0aWVzID0gdGhpcy5zdGF0ZS5jaXRpZXNcclxuICAgIGNvbnN0IGFyZWFzID0gdGhpcy5zdGF0ZS5hcmVhc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuPGJvZHkgY2xhc3NOYW1lPVwic2ItbmF2LWZpeGVkXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi10b3BuYXYgbmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiZGFzaGJvYXJkXCI+QWRtaW48L2E+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbSBvcmRlci0xIG9yZGVyLWxnLTBcIiBpZD1cInNpZGViYXJUb2dnbGVcIiBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmUtYmxvY2sgZm9ybS1pbmxpbmUgbWwtYXV0byBtci0wIG1yLW1kLTMgbXktMiBteS1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0byBtbC1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaWQ9XCJ1c2VyRHJvcGRvd25cIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlciBmYS1md1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiIGFyaWEtbGFiZWxsZWRieT1cInVzZXJEcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aXZpdHkgTG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwibG9naW5cIj5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2X25hdlwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2IGFjY29yZGlvbiBzYi1zaWRlbmF2LWRhcmtcIiBpZD1cInNpZGVuYXZBY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtaGVhZGluZ1wiPkNvcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ItbmF2LWxpbmstaWNvblwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWNob21ldGVyLWFsdFwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBjb2xsYXBzZWRcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZVBhZ2VzXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlUGFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLW5hdi1saW5rLWljb25cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYm9vay1vcGVuXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9XCJjb2xsYXBzZVBhZ2VzXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ1R3b1wiIGRhdGEtcGFyZW50PVwiI3NpZGVuYXZBY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudS1uZXN0ZWQgbmF2IGFjY29yZGlvblwiIGlkPVwic2lkZW5hdkFjY29yZGlvblBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGNvbGxhcHNlZFwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI3BhZ2VzQ29sbGFwc2VBdXRoXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cInBhZ2VzQ29sbGFwc2VBdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPVwicGFnZXNDb2xsYXBzZUF1dGhcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nT25lXCIgZGF0YS1wYXJlbnQ9XCIjc2lkZW5hdkFjY29yZGlvblBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudS1uZXN0ZWQgbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwibG9naW5cIj5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJyZWdpc3RlclwiPlJlZ2lzdGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cInBhc3N3b3JkXCI+Rm9yZ290IFBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxheW91dFNpZGVuYXZfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTRcIj5MaXN0IG9mIEpvYnM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctc3VjY2VzcyB0ZXh0LXdoaXRlIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5FbXBsb3llcnMgVGFibGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LXdoaXRlIHN0cmV0Y2hlZC1saW5rXCIgaHJlZj1cImVtcGx5b2VyXCI+VmlldyBEZXRhaWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWRtaW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPHRhYmxlIHJlZj17dGhpcy5kYXRhdGFibGVSZWZ9IGNsYXNzTmFtZT1cImRpc3BsYXkgdGFibGUgdGFibGUtYm9yZGVyZWRcIiBzdHlsZT17e3dpZHRoOjEwMCtcIiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0aHJlYWQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Sm9iIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtcGxveW1lbnQgU3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BcmVhPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TYWxhcnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvc3RlZCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYnMubWFwKEpvYj0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17Sm9iLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Sm9iLkpuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5KX0NvbnRyYWN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZ2V0Y2l0eShKb2IuSl9jaXR5KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLmdldEFyZWFPZkpvYihKb2IuSl9hcmVhKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntKb2IuSl9taW5fc2FsYXJ5fX57Sm9iLkpfbWF4X3NhbGFyeX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntKb2IuUG9zdGVkRGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxpIG9uQ2xpY2s9eygpPT50aGlzLnZpZXdQYXNzSWQoSm9iLmlkKX0gY2xhc3NOYW1lPVwidmlldyBtYXRlcmlhbC1pY29ucyBpY29uLXBhZGRpbmdcIiB0aXRsZT1cIlZpZXdcIiBzdHlsZT17e2NvbG9yOiBcInJnYigwLCAxMTAsIDI1NSlcIiwgY3Vyc29yOlwicG9pbnRlclwifX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIj4mI3hFNDE3OzwvaT48L2E+ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxpIG9uQ2xpY2s9eygpPT50aGlzLmVkaXRQYXNzSWQoSm9iLmlkKX0gY2xhc3NOYW1lPVwiZWRpdCBtYXRlcmlhbC1pY29ucyBpY29uLXBhZGRpbmdcIiB0aXRsZT1cIkVkaXRcIiBzdHlsZT17e2NvbG9yOiBcInllbGxvd1wiLCBjdXJzb3I6XCJwb2ludGVyXCJ9fSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiPiYjeEUyNTQ7PC9pPjwvYT4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKT0+dGhpcy5kZWxldGVQYXNzSWQoSm9iLmlkKX0gY2xhc3NOYW1lPVwiZGVsZXRlIG1hdGVyaWFsLWljb25zIGljb24tcGFkZGluZ1wiIHRpdGxlPVwiRGVsZXRlXCIgIHN0eWxlPXt7Y29sb3I6IFwicmVkXCIsIGN1cnNvcjpcInBvaW50ZXJcIn19IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+JiN4RTg3Mjs8L2E+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cdFxyXG5cdDxkaXYgaWQ9XCJ2aWV3TW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBpbmZvLWRpYWxvZ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkRldGFpbCBJbmZvcm1hdGlvbjwvaDQ+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+Sm9iIE5hbWU6PC90ZD48dGQ+e3RoaXMuc3RhdGUuSm5hbWV9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD4gRW1wbG95ZXIgTmFtZTo8L3RkPjx0ZD4ge3RoaXMuZ2V0RW1wbG95ZXIodGhpcy5zdGF0ZS5FTVBMT1lFUklEKX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPlBvc3RlZF9EYXRlOiA8L3RkPjx0ZD57dGhpcy5zdGF0ZS5Qb3N0ZWREYXRlfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPlBob25lIE51bWJlcjo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl90ZWx9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+RW1haWw6PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfZW1haWx9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+QWRkcmVzczo8L3RkPiA8dGQ+IHt0aGlzLnN0YXRlLkpfQWRkcmVzc30sIHt0aGlzLmdldExvY2F0aW9uKHRoaXMuc3RhdGUuSl9jaXR5LHRoaXMuc3RhdGUuSl9hcmVhKX0gPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5FbXBsb3ltZW50IFN0YXR1czo8L3RkPiA8dGQ+e3RoaXMuc3RhdGUuSl9Db250cmFjdH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5TYWxhcnk6PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfbWluX3NhbGFyeX1+e3RoaXMuc3RhdGUuSl9tYXhfc2FsYXJ5fSBZZW48L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPldvcmtpbmcgRGF5czo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9Xb3JraW5nX0RheX0gRGF5cyBwZXIgV2VlazwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+V29ya2luZyBIb3Vyczo8L3RkPjx0ZD57dGhpcy5zdGF0ZS5KX2hvdXJzfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPk1pbmltdW0gSmFwYW5lc2UgU2tpbGw6PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfSnBMZXZlbH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPkpvYiBEZXNjcmlwdGlvbjo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9EZXNjcmlwdGlvbn08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5Kb2IgUXVhbGlmaWNhdGlvbjo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9RdWFsaWZpY2F0aW9ufTwvdGQ+PC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHZhbHVlPVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCk9PnRoaXMuZGVsZXRlUGFzc0lkKHRoaXMuc3RhdGUuaWQpfSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIj5EZWxldGU8L2J1dHRvbj48L2E+IFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJlZGl0TW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGluZm8tZGlhbG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkFwcGxpY2F0aW9uIFJlcXVpcmVtZW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXt0aGlzLmZvcm1fY2xlYXJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJwb3N0XCIgc3R5bGU9e3t3aWR0aDogMTAwK1wiJVwifX0gb25TdWJtaXQ9e3RoaXMuYWRkSm9ifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIHJvbGU9XCJGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIlwiIGFjY2VwdC1jaGFyc2V0PVwiVVRGLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKbmFtZVwiPkpvYiBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJKbmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEpvYiBOYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KbmFtZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX0NvbnRyYWN0XCI+RW1wbG95bWVudCBTdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJKX0NvbnRyYWN0XCIgaWQ9XCJKX0NvbnRyYWN0XCIgb25DbGljaz17dGhpcy5kaXNhYmxlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWV9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkNob29zZSBFbXBsb3ltZW50IFN0YXR1czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZ1bGwtVGltZVwiIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmVtcGxveW1lbnRTdGF0dXMgPT0gXCJGdWxsLVRpbWVcIiAgID8gKFwic2VsZWN0ZWRcIikgOiAoXCJmYWxzZVwiKX0+RnVsbCBUaW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUGFydC1UaW1lXCIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZW1wbG95bWVudFN0YXR1cyA9PSBcIlBhcnQtVGltZVwiID8gKFwic2VsZWN0ZWRcIikgOiAoXCJmYWxzZVwiKX0+UGFydCBUaW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzYWxhcnlcIj5TYWxhcnkowqUpPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTggXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1pbl9zYWxhcnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX21pbl9zYWxhcnlcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE1pbmltdW4gU2FsYXJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX21pbl9zYWxhcnl9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTggXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1heF9zYWxhcnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX21heF9zYWxhcnlcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE1heGltdW4gU2FsYXJ5XCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9tYXhfc2FsYXJ5fSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfaG91cnNcIj5Xb3JraW5nIEhvdXJzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJKX2hvdXJzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9ob3Vyc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgV29ya2luZyBIb3Vyc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9ob3Vyc30gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX1dvcmtpbmdfRGF5XCI+V29ya2luZyBEYXlzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJKX1dvcmtpbmdfRGF5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9Xb3JraW5nX0RheVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgV29ya2luZyBEYXlzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX1dvcmtpbmdfRGF5fSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfSnBMZXZlbFwiPlNlbGVjdCBKYXBhbmVzZSBTa2lsbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkpfSnBMZXZlbFwiIGlkPVwiSl9KcExldmVsXCIgb25DbGljaz17dGhpcy5kaXNhYmxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5KYXBhbmVzZSBMYW5ndWFlIFNraWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5qYXBhbmVzZVNraWxsID09IFwiM1wiID8gKFwic2VsZWN0ZWRcIikgOiAoXCJmYWxzZVwiKX0+TjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmphcGFuZXNlU2tpbGwgPT0gXCIyXCIgPyAoXCJzZWxlY3RlZFwiKSA6IChcImZhbHNlXCIpfT5OMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuamFwYW5lc2VTa2lsbCA9PSBcIjFcIiA/IChcInNlbGVjdGVkXCIpIDogKFwiZmFsc2VcIil9Pk4xPC9vcHRpb24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfdGVsXCI+VGVsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl90ZWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX3RlbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGhvbmU6XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX3RlbH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBvc3RlZCBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cImRhdGV0aW1lXCIgbmFtZT1cIlBvc3RlZERhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLlBvc3RlZERhdGV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfZW1haWxcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJKX2VtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9lbWFpbFwiIHBsYWNlaG9sZGVyPVwiYWJjQGdtYWlsLmNvbVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9lbWFpbH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKLWFyZWFcIj5TZWxlY3QgQXJlYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkFSRUFJRFwiIGlkPVwiYXJlYVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IEFyZWEgaW4gSmFwYW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFyZWFzLm1hcChBcmVhID0+ICh0aGlzLnN0YXRlLkpfYXJlYSA9PSBBcmVhLmlkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17QXJlYS5pZH0gc2VsZWN0ZWQ+e0FyZWEuYXJlYU5hbWV9PC9vcHRpb24+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17QXJlYS5pZH0+e0FyZWEuYXJlYU5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfY2l0eVwiPlNlbGVjdCB5b3VyIENpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJDSVRZSURcIiBpZD1cImNpdHlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNsaWNrPXt0aGlzLmRpc2FibGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPlNlbGVjdCBBcmVhIGluIEphcGFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2l0aWVzICYmICBjaXRpZXMubWFwKENpdHkgPT4gKHRoaXMuc3RhdGUuSl9jaXR5ID09IENpdHkuaWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDaXR5LmlkfSBzZWxlY3RlZD57Q2l0eS5jaXR5TmFtZX08L29wdGlvbj4gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDaXR5LmlkfT57Q2l0eS5jaXR5TmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXRhaWxBZGRyXCI+RGV0YWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkpfQWRkcmVzc1wiIG5hbWU9XCJKX0FkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfQWRkcmVzc30gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSm9iRGVzXCI+Sm9iIERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJKX0Rlc2NyaXB0aW9uXCIgbmFtZT1cIkpfRGVzY3JpcHRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfRGVzY3JpcHRpb259IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiUXVhbFwiPk90aGVyIFF1YWxpZmljYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgaWQ9XCJKX1F1YWxpZmljYXRpb25cIiBuYW1lPVwiSl9RdWFsaWZpY2F0aW9uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX1F1YWxpZmljYXRpb259ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHRcclxuICAgICAgICA8ZGl2IGlkPVwiZGVsZXRlQ29uZmlybU1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgZGVsLWRpYWxvZ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5EZWxldGUgSm9iPC9oND5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+IFxyXG5cdFx0XHRcdDxmb3JtPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgam9iPzwvcD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nXCI+PHNtYWxsPlRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuPC9zbWFsbD48L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIiAvPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIHZhbHVlPVwiRGVsZXRlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXt0aGlzLmRlbGV0ZUpvYn0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuXHRcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICBcclxuXHQgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2JvZHk+XHJcbjwvPlxyXG4pfX0iXSwic291cmNlUm9vdCI6IiJ9