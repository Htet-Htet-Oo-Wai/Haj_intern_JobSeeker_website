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
        type: "date",
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
        name: "J_area",
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
        name: "J_city",
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
      }))))))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 37
        }
      }, __jsx("input", {
        type: "button",
        onClick: this.updateEmployer,
        value: "Update",
        className: "btn btn-info btn-width rounded-4 py-2",
        style: {
          marginRight: 10
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 29
        }
      }), __jsx("input", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal",
        onClick: this.clearInput,
        value: "Cancel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617,
          columnNumber: 29
        }
      })))))), __jsx("div", {
        id: "deleteConfirmModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog del-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 17
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628,
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
          lineNumber: 629,
          columnNumber: 6
        }
      }, "\xD7")), __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 631,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632,
          columnNumber: 6
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633,
          columnNumber: 25
        }
      }, "Are you sure you want to delete this job?"), __jsx("p", {
        className: "text-warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634,
          columnNumber: 7
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634,
          columnNumber: 35
        }
      }, "This action cannot be undone.")))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637,
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
          lineNumber: 638,
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
          lineNumber: 639,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiam9iTGlzdCIsInByb3BzIiwiaWQiLCIkIiwibW9kYWwiLCJzZXRTdGF0ZSIsImRlbGV0ZV9pZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVkaXRfaWQiLCJmaXJlYmFzZSIsImxvYWRGaXJlYmFzZSIsImRhdGEiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiRU1QTE9ZRVJJRCIsIkpuYW1lIiwiSl9Db250cmFjdCIsIkpfbWluX3NhbGFyeSIsIkpfbWF4X3NhbGFyeSIsIkpfaG91cnMiLCJKX1dvcmtpbmdfRGF5IiwiSl9KcExldmVsIiwiSl9hcmVhIiwiSl9jaXR5IiwiSl90ZWwiLCJQb3N0ZWREYXRlIiwiSl9lbWFpbCIsIkpfQWRkcmVzcyIsIkpfRGVzY3JpcHRpb24iLCJKX1F1YWxpZmljYXRpb24iLCJlcnJvciIsImpvYk5hbWUiLCJnZXRBcmVhIiwidXBkYXRlIiwicmVmcmVzaFRhYmxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkZWNyZWFzZUpvYkNvdW50IiwiY29tcGFueSIsImVtcGxveWVycyIsImVtcGxveWVyIiwiZW1wbG95ZXJOYW1lIiwibWFwIiwiRW1wbG95ZXJzIiwiQ19OYW1lIiwiQ0lUWUlEIiwiQVJFQUlEIiwiY2l0eSIsImFyZWEiLCJjaXR5TmFtZSIsImFyZWFOYW1lIiwiQ2l0eSIsIkFyZWEiLCJhcmVhUXVlcnlTbmFwc2hvdCIsImluaXRpYWxfc3RhdGUiLCJpbnB1dHMiLCJpbmRleCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUF0dHIiLCJhdHRyIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImRhdGF0YWJsZVJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiJGRhdGF0YWJsZSIsImpvYnMiLCJqb2IiLCJjaXRpZXMiLCJhcmVhcyIsImluaXRpYWxpemVEYXRhdGFibGUiLCJjdXJyZW50IiwiRGF0YVRhYmxlIiwib3JkZXIiLCJjbGVhciIsInNlbGYiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXNwb25zZSIsIndpZHRoIiwiSm9iIiwiZ2V0Y2l0eSIsImdldEFyZWFPZkpvYiIsInZpZXdQYXNzSWQiLCJjb2xvciIsImN1cnNvciIsImVkaXRQYXNzSWQiLCJkZWxldGVQYXNzSWQiLCJnZXRFbXBsb3llciIsImdldExvY2F0aW9uIiwiZm9ybV9jbGVhciIsImFkZEpvYiIsImRpc2FibGUiLCJzZWxlY3RlZFZhbHVlIiwiZW1wbG95bWVudFN0YXR1cyIsImphcGFuZXNlU2tpbGwiLCJ1cGRhdGVFbXBsb3llciIsIm1hcmdpblJpZ2h0IiwiY2xlYXJJbnB1dCIsImRlbGV0ZUpvYiIsImpvYlF1ZXJ5U25hcHNob3QiLCJkb2NzIiwiY2l0eVF1ZXJ5U25hcHNob3QiLCJsaW1pdCIsImVtcGxveWVyUXVlcnlTbmFwc2hvdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7QUFFakIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSx1TkE4RkosVUFBQ0MsRUFBRCxFQUFNO0FBQ2pCQyxPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkMsS0FBekIsQ0FBK0IsTUFBL0I7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLGlCQUFTLEVBQUdKO0FBQWIsT0FBZDs7QUFDQUssYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBTCxDQUFXSCxTQUF2QjtBQUNILEtBbEdrQjs7QUFBQSxxTkFtR0YsVUFBQ0osRUFBRCxFQUFRO0FBQ2pCLFlBQUtHLFFBQUwsQ0FBYztBQUFDSyxlQUFPLEVBQUdSO0FBQVgsT0FBZDs7QUFD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RSxFQUFFYyxHQUFHLENBQUNkO0FBRitDLG1CQUFWO0FBQUEsaUJBQS9CLEM7aURBSVg7QUFBQzRFLHFCQUFHLEVBQUdELElBQVA7QUFBYXJCLHNCQUFJLEVBQUd3QixLQUFwQjtBQUEyQnpCLHNCQUFJLEVBQUd3QixNQUFsQztBQUEwQy9CLDBCQUFRLEVBQUVEO0FBQXBELGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0ZzQjJCLDRDQUFLLENBQUN5QyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkYXNoYm9hcmQuanMuMjUyZmJhZGRiYzlmOGM1OTEzOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7bG9hZEZpcmViYXNlfSBmcm9tICcuLi9saWIvZGIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgam9iTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGF0YXRhYmxlUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy4kZGF0YXRhYmxlID0gbnVsbFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGVkaXRfaWQgOiAnJyxcclxuICAgICAgICAgICAgZGVsZXRlX2lkIDogJycsXHJcbiAgICAgICAgICAgIEpuYW1lOicnLFxyXG4gICAgICAgICAgICBKX3RlbDonJyxcclxuICAgICAgICAgICAgSl9taW5fc2FsYXJ5OicnLFxyXG4gICAgICAgICAgICBKX21heF9zYWxhcnk6JycsXHJcbiAgICAgICAgICAgIFBvc3RlZERhdGU6JycsXHJcbiAgICAgICAgICAgIEpfaG91cnM6JycsXHJcbiAgICAgICAgICAgIEpfZW1haWw6JycsXHJcbiAgICAgICAgICAgIEpfY2l0eTonJyxcclxuICAgICAgICAgICAgSl9hcmVhOicnLFxyXG4gICAgICAgICAgICBKX1dvcmtpbmdfRGF5OicnLFxyXG4gICAgICAgICAgICBKX1F1YWxpZmljYXRpb246JycsXHJcbiAgICAgICAgICAgIEpfSnBMZXZlbDonJyxcclxuICAgICAgICAgICAgSl9EZXNjcmlwdGlvbjonJyxcclxuICAgICAgICAgICAgSl9Db250cmFjdDonJyxcclxuICAgICAgICAgICAgSl9BZGRyZXNzOicnLFxyXG4gICAgICAgICAgICBhcmVhTmFtZSA6ICcnLFxyXG4gICAgICAgICAgICBqb2JzIDogcHJvcHMuam9iIHx8IFtdLFxyXG4gICAgICAgICAgICBjaXRpZXMgOiBwcm9wcy5jaXR5LFxyXG4gICAgICAgICAgICBlbXBsb3llcnMgOiBwcm9wcy5lbXBsb3llciB8fCBbXSxcclxuICAgICAgICAgICAgYXJlYXMgOiBwcm9wcy5hcmVhIHx8IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVEYXRhdGFibGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVEYXRhdGFibGUoKSB7XHJcbiAgICAgIHRoaXMuJGRhdGF0YWJsZSA9ICQodGhpcy5kYXRhdGFibGVSZWYuY3VycmVudCkuRGF0YVRhYmxlKHtcclxuICAgICAgICAgIG9yZGVyOiBbWzMsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRhYmxlKCkge1xyXG4gICAgICB0aGlzLiRkYXRhdGFibGUuY2xlYXIoKVxyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgam9iTGlzdFxyXG4gICAgICAgIC5nZXRJbml0aWFsUHJvcHMoKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGpvYnM6IHJlc3BvbnNlLmpvYixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gc2VsZi5pbml0aWFsaXplRGF0YXRhYmxlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCBmaXJlYmFzZSA9IGF3YWl0IGxvYWRGaXJlYmFzZSgpIFxyXG4gICAgICAgIGNvbnN0IGpvYlF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJqb2JcIilcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGpvYnMgPSBqb2JRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGNvbnN0IGFyZWFRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiYXJlYVwiKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgYXJlYXMgPSBhcmVhUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2l0eVF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiY2l0eVwiKVxyXG4gICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBjaXRpZXMgPSBjaXR5UXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXJRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiZW1wbG95ZXJcIilcclxuICAgICAgICAgICAgLmxpbWl0KDEwKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXJzID0gZW1wbG95ZXJRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIGRhdGEgOiBkb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4ge2pvYiA6IGpvYnMsIGFyZWEgOiBhcmVhcywgY2l0eSA6IGNpdGllcywgZW1wbG95ZXI6IGVtcGxveWVyc307XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUGFzc0lkID0gKGlkKT0+e1xyXG4gICAgICAgICQoXCIjZGVsZXRlQ29uZmlybU1vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVsZXRlX2lkIDogaWR9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGVsZXRlX2lkKVxyXG4gICAgfTsgICAgICBcclxuICAgICAgICB2aWV3UGFzc0lkID0gKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRfaWQgOiBpZH0pXHJcbiAgICAgICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge31cclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJykuZG9jKGlkKS5nZXQoKS5cclxuICAgICAgICAgICAgICAgIHRoZW4oKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzbmFwc2hvdC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRU1QTE9ZRVJJRCA6IGRhdGEuRU1QTE9ZRVJJRCwgICAgICAgXHJcbiAgICAgICAgICAgICAgICBKbmFtZTpkYXRhLkpuYW1lLFxyXG4gICAgICAgICAgICAgICAgSl9Db250cmFjdDpkYXRhLkpfQ29udHJhY3QsXHJcbiAgICAgICAgICAgICAgICBKX21pbl9zYWxhcnk6ZGF0YS5KX21pbl9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICBKX21heF9zYWxhcnk6ZGF0YS5KX21heF9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICBKX2hvdXJzOmRhdGEuSl9ob3VycyxcclxuICAgICAgICAgICAgICAgIEpfV29ya2luZ19EYXk6ZGF0YS5KX1dvcmtpbmdfRGF5LFxyXG4gICAgICAgICAgICAgICAgSl9KcExldmVsOmRhdGEuSl9KcExldmVsLFxyXG4gICAgICAgICAgICAgICAgSl9hcmVhIDogZGF0YS5KX2FyZWEsXHJcbiAgICAgICAgICAgICAgICBKX2NpdHk6IGRhdGEuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgIEpfdGVsOmRhdGEuSl90ZWwsXHJcbiAgICAgICAgICAgICAgICBQb3N0ZWREYXRlOmRhdGEuUG9zdGVkRGF0ZSxcclxuICAgICAgICAgICAgICAgIEpfZW1haWw6ZGF0YS5KX2VtYWlsLFxyXG4gICAgICAgICAgICAgICAgSl9hcmVhOmRhdGEuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgSl9jaXR5OmRhdGEuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgSl9BZGRyZXNzOmRhdGEuSl9BZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgSl9EZXNjcmlwdGlvbjpkYXRhLkpfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBKX1F1YWxpZmljYXRpb246ZGF0YS5KX1F1YWxpZmljYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGRhdGFcIilcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuam9iTmFtZSlcclxuICAgICAgICAgICAgJChcIiN2aWV3TW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZWRpdFBhc3NJZCA9IChpZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlZGl0X2lkIDogaWR9KVxyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2pvYicpLmRvYyhpZCkuZ2V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gc25hcHNob3QuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBKbmFtZTpkYXRhLkpuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0NvbnRyYWN0OmRhdGEuSl9Db250cmFjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9taW5fc2FsYXJ5OmRhdGEuSl9taW5fc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX21heF9zYWxhcnk6ZGF0YS5KX21heF9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfaG91cnM6ZGF0YS5KX2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX1dvcmtpbmdfRGF5OmRhdGEuSl9Xb3JraW5nX0RheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9KcExldmVsOmRhdGEuSl9KcExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2FyZWEgOiBkYXRhLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9jaXR5IDogZGF0YS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBKX3RlbDpkYXRhLkpfdGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0ZWREYXRlOmRhdGEuUG9zdGVkRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9lbWFpbDpkYXRhLkpfZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfYXJlYTpkYXRhLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9jaXR5OmRhdGEuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0FkZHJlc3M6ZGF0YS5KX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfRGVzY3JpcHRpb246ZGF0YS5KX0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX1F1YWxpZmljYXRpb246ZGF0YS5KX1F1YWxpZmljYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFyZWEoZGF0YS5KX2FyZWEpXHJcbiAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoXCIjZWRpdE1vZGFsXCIpLm1vZGFsKCdzaG93JylcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZUpvYiA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJykuZG9jKHRoaXMuc3RhdGUuZWRpdF9pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBKbmFtZTp0aGlzLnN0YXRlLkpuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfQ29udHJhY3Q6dGhpcy5zdGF0ZS5KX0NvbnRyYWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfbWluX3NhbGFyeTp0aGlzLnN0YXRlLkpfbWluX3NhbGFyeSxcclxuICAgICAgICAgICAgICAgICAgICBKX21heF9zYWxhcnk6dGhpcy5zdGF0ZS5KX21heF9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgSl9ob3Vyczp0aGlzLnN0YXRlLkpfaG91cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9Xb3JraW5nX0RheTp0aGlzLnN0YXRlLkpfV29ya2luZ19EYXksXHJcbiAgICAgICAgICAgICAgICAgICAgSl9KcExldmVsOnRoaXMuc3RhdGUuSl9KcExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfYXJlYSA6IHRoaXMuc3RhdGUuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfY2l0eSA6IHRoaXMuc3RhdGUuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfdGVsOnRoaXMuc3RhdGUuSl90ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgUG9zdGVkRGF0ZTp0aGlzLnN0YXRlLlBvc3RlZERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9lbWFpbDp0aGlzLnN0YXRlLkpfZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9hcmVhOnRoaXMuc3RhdGUuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfY2l0eTp0aGlzLnN0YXRlLkpfY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBKX0FkZHJlc3M6dGhpcy5zdGF0ZS5KX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9EZXNjcmlwdGlvbjp0aGlzLnN0YXRlLkpfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgSl9RdWFsaWZpY2F0aW9uOnRoaXMuc3RhdGUuSl9RdWFsaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFRhYmxlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgICBpZihldmVudC50YXJnZXQubmFtZSA9PSBcIkFSRUFJRFwiKXtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZGVsZXRlSm9iID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdqb2InKVxyXG4gICAgICAgICAgICAuZG9jKHRoaXMuc3RhdGUuZGVsZXRlX2lkKVxyXG4gICAgICAgICAgICAuZGVsZXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVhc2VKb2JDb3VudCh0aGlzLnN0YXRlLmNvbXBhbnkpXHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRhYmxlKCk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGdldEVtcGxveWVyID0gKEVNUExPWUVSSUQpID0+IHtcclxuICAgICAgICBjb25zdCBlbXBsb3llcnMgPSB0aGlzLnByb3BzLmVtcGxveWVyXHJcbiAgICAgICAgbGV0IGVtcGxveWVyTmFtZSA9ICcnXHJcbiAgICAgICAgY29uc29sZS5sb2coRU1QTE9ZRVJJRClcclxuICAgICAgICBlbXBsb3llcnMgJiYgZW1wbG95ZXJzLm1hcChFbXBsb3llcnMgPT4ge1xyXG4gICAgICAgICAgICBpZihFbXBsb3llcnMuaWQgPT0gRU1QTE9ZRVJJRCl7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llck5hbWUgPSBFbXBsb3llcnMuZGF0YS5DX05hbWVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhlbXBsb3llck5hbWUpXHJcbiAgICAgICAgcmV0dXJuIGVtcGxveWVyTmFtZVxyXG4gICAgIH1cclxuXHJcbiAgICAgZ2V0TG9jYXRpb24gPSAoQ0lUWUlELCBBUkVBSUQpID0+IHtcclxuICAgICAgICBjb25zdCBjaXR5ID0gdGhpcy5wcm9wcy5jaXR5XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IHRoaXMucHJvcHMuYXJlYVxyXG4gICAgICAgIGxldCBjaXR5TmFtZSA9ICcnXHJcbiAgICAgICAgbGV0IGFyZWFOYW1lID0gJydcclxuXHJcbiAgICAgICAgY2l0eSAmJiBjaXR5Lm1hcChDaXR5PT57XHJcbiAgICAgICAgICAgIGlmKENpdHkuaWQgPT0gQ0lUWUlEKXtcclxuICAgICAgICAgICAgICAgIGNpdHlOYW1lID0gQ2l0eS5jaXR5TmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBhcmVhICYmIGFyZWEubWFwKEFyZWE9PntcclxuICAgICAgICAgICAgaWYoQXJlYS5pZCA9PSBBUkVBSUQpe1xyXG4gICAgICAgICAgICAgICAgYXJlYU5hbWUgPSBBcmVhLmFyZWFOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgcmV0dXJuIGNpdHlOYW1lICsgXCIsXCIgKyBhcmVhTmFtZVxyXG4gICAgIH1cclxuICAgICBnZXRBcmVhT2ZKb2IgPSAoQVJFQUlEKSA9PiB7XHJcbiAgICAgICBjb25zdCBhcmVhID0gdGhpcy5wcm9wcy5hcmVhXHJcbiAgICBsZXQgYXJlYU5hbWUgPSAnJ1xyXG4gICAgYXJlYSAmJiBhcmVhLm1hcChBcmVhPT57XHJcbiAgICAgICAgICAgIGlmKEFyZWEuaWQgPT0gQVJFQUlEKXtcclxuICAgICAgICAgICAgICAgIGFyZWFOYW1lID0gQXJlYS5hcmVhTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgIHJldHVybiBhcmVhTmFtZVxyXG4gICAgIH1cclxuICAgICBcclxuICAgICBcclxuICAgICBnZXRjaXR5ID0gKENJVFlJRCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNpdHkgPSB0aGlzLnByb3BzLmNpdHlcclxuICAgICBcclxuICAgICAgICBsZXQgY2l0eU5hbWUgPSAnJ1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgY2l0eSAmJiBjaXR5Lm1hcChDaXR5PT57XHJcbiAgICAgICAgICAgIGlmKENpdHkuaWQgPT0gQ0lUWUlEKXtcclxuICAgICAgICAgICAgICAgIGNpdHlOYW1lID0gQ2l0eS5jaXR5TmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgICAgcmV0dXJuIGNpdHlOYW1lIFxyXG4gICAgIH1cclxuXHJcbiAgICBnZXRBcmVhID0gKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyZWEgPSB7fVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignYXJlYScpXHJcbiAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbigoYXJlYVF1ZXJ5U25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICBhcmVhID0gYXJlYVF1ZXJ5U25hcHNob3QuZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXJlYU5hbWUgOiBhcmVhLmFyZWFOYW1lfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybV9jbGVhciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsX3N0YXRlKTtcclxuICAgICAgICBsZXQgaW5wdXRzLCBpbmRleDtcclxuICAgICAgICBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dHMubGVuZ3RoOyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgIGlucHV0c1tpbmRleF0udmFsdWUgPSAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSl9BZGRyZXNzJykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSl9EZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0pfUXVhbGlmaWNhdGlvbicpLnZhbHVlID0gJyc7XHJcbiAgICAgICBcclxuICBcclxuICAgICAgICAkKFwiI0pfQ29udHJhY3Qgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjSl9Db250cmFjdCBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAkKFwiI0pfSnBMZXZlbCBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNKX0pwTGV2ZWwgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgJChcIiNjaXR5IG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7IFxyXG4gICAgICAgICQoXCIjYXJlYSBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNhcmVhIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpOyAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBkaXNhYmxlID0gKGV2ZW50KSA9PiB7ICAgXHJcbiAgICAgICAgJChcIiNKX0NvbnRyYWN0IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpOyBcclxuICAgICAgICAkKFwiI0pfSnBMZXZlbCBvcHRpb246Zmlyc3RcIikuYXR0cihcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKTsgXHJcbiAgICAgICAgJChcIiNjaXR5IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICQoXCIjYXJlYSBvcHRpb246Zmlyc3RcIikuYXR0cihcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKTsgXHJcbiAgICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNpdGllcyA9IHRoaXMuc3RhdGUuY2l0aWVzXHJcbiAgICBjb25zdCBhcmVhcyA9IHRoaXMuc3RhdGUuYXJlYXNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbjxib2R5IGNsYXNzTmFtZT1cInNiLW5hdi1maXhlZFwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2ItdG9wbmF2IG5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cImRhc2hib2FyZFwiPkFkbWluPC9hPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBidG4tc20gb3JkZXItMSBvcmRlci1sZy0wXCIgaWQ9XCJzaWRlYmFyVG9nZ2xlXCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lLWJsb2NrIGZvcm0taW5saW5lIG1sLWF1dG8gbXItMCBtci1tZC0zIG15LTIgbXktbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG8gbWwtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGlkPVwidXNlckRyb3Bkb3duXCIgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXIgZmEtZndcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIiBhcmlhLWxhYmVsbGVkYnk9XCJ1c2VyRHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGl2aXR5IExvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImxvZ2luXCI+TG9nb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGlkPVwibGF5b3V0U2lkZW5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5b3V0U2lkZW5hdl9uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdiBhY2NvcmRpb24gc2Itc2lkZW5hdi1kYXJrXCIgaWQ9XCJzaWRlbmF2QWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1tZW51LWhlYWRpbmdcIj5Db3JlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJkYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLW5hdi1saW5rLWljb25cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFjaG9tZXRlci1hbHRcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgY29sbGFwc2VkXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2VQYWdlc1wiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZVBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1uYXYtbGluay1pY29uXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2stb3BlblwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvd1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPVwiY29sbGFwc2VQYWdlc1wiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdUd29cIiBkYXRhLXBhcmVudD1cIiNzaWRlbmF2QWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtbmVzdGVkIG5hdiBhY2NvcmRpb25cIiBpZD1cInNpZGVuYXZBY2NvcmRpb25QYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBjb2xsYXBzZWRcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNwYWdlc0NvbGxhcHNlQXV0aFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJwYWdlc0NvbGxhcHNlQXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvd1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD1cInBhZ2VzQ29sbGFwc2VBdXRoXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ09uZVwiIGRhdGEtcGFyZW50PVwiI3NpZGVuYXZBY2NvcmRpb25QYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtbmVzdGVkIG5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImxvZ2luXCI+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwicmVnaXN0ZXJcIj5SZWdpc3RlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJwYXNzd29yZFwiPkZvcmdvdCBQYXNzd29yZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00XCI+TGlzdCBvZiBKb2JzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLXN1Y2Nlc3MgdGV4dC13aGl0ZSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+RW1wbG95ZXJzIFRhYmxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic21hbGwgdGV4dC13aGl0ZSBzdHJldGNoZWQtbGlua1wiIGhyZWY9XCJlbXBseW9lclwiPlZpZXcgRGV0YWlsczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGFkbWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDx0YWJsZSByZWY9e3RoaXMuZGF0YXRhYmxlUmVmfSBjbGFzc05hbWU9XCJkaXNwbGF5IHRhYmxlIHRhYmxlLWJvcmRlcmVkXCIgc3R5bGU9e3t3aWR0aDoxMDArXCIlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhyZWFkLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkpvYiBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbXBsb3ltZW50IFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2l0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QXJlYTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2FsYXJ5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb3N0ZWQgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JzLm1hcChKb2I9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0pvYi5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5KbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntKb2IuSl9Db250cmFjdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLmdldGNpdHkoSm9iLkpfY2l0eSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5nZXRBcmVhT2ZKb2IoSm9iLkpfYXJlYSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Sm9iLkpfbWluX3NhbGFyeX1+e0pvYi5KX21heF9zYWxhcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Sm9iLlBvc3RlZERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBvbkNsaWNrPXsoKT0+dGhpcy52aWV3UGFzc0lkKEpvYi5pZCl9IGNsYXNzTmFtZT1cInZpZXcgbWF0ZXJpYWwtaWNvbnMgaWNvbi1wYWRkaW5nXCIgdGl0bGU9XCJWaWV3XCIgc3R5bGU9e3tjb2xvcjogXCJyZ2IoMCwgMTEwLCAyNTUpXCIsIGN1cnNvcjpcInBvaW50ZXJcIn19IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCI+JiN4RTQxNzs8L2k+PC9hPiAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBvbkNsaWNrPXsoKT0+dGhpcy5lZGl0UGFzc0lkKEpvYi5pZCl9IGNsYXNzTmFtZT1cImVkaXQgbWF0ZXJpYWwtaWNvbnMgaWNvbi1wYWRkaW5nXCIgdGl0bGU9XCJFZGl0XCIgc3R5bGU9e3tjb2xvcjogXCJ5ZWxsb3dcIiwgY3Vyc29yOlwicG9pbnRlclwifX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIj4mI3hFMjU0OzwvaT48L2E+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCk9PnRoaXMuZGVsZXRlUGFzc0lkKEpvYi5pZCl9IGNsYXNzTmFtZT1cImRlbGV0ZSBtYXRlcmlhbC1pY29ucyBpY29uLXBhZGRpbmdcIiB0aXRsZT1cIkRlbGV0ZVwiICBzdHlsZT17e2NvbG9yOiBcInJlZFwiLCBjdXJzb3I6XCJwb2ludGVyXCJ9fSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiYjeEU4NzI7PC9hPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHRcclxuXHQ8ZGl2IGlkPVwidmlld01vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgaW5mby1kaWFsb2dcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5EZXRhaWwgSW5mb3JtYXRpb248L2g0PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkpvYiBOYW1lOjwvdGQ+PHRkPnt0aGlzLnN0YXRlLkpuYW1lfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+IEVtcGxveWVyIE5hbWU6PC90ZD48dGQ+IHt0aGlzLmdldEVtcGxveWVyKHRoaXMuc3RhdGUuRU1QTE9ZRVJJRCl9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Qb3N0ZWRfRGF0ZTogPC90ZD48dGQ+e3RoaXMuc3RhdGUuUG9zdGVkRGF0ZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5QaG9uZSBOdW1iZXI6PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfdGVsfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkVtYWlsOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX2VtYWlsfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkFkZHJlc3M6PC90ZD4gPHRkPiB7dGhpcy5zdGF0ZS5KX0FkZHJlc3N9LCB7dGhpcy5nZXRMb2NhdGlvbih0aGlzLnN0YXRlLkpfY2l0eSx0aGlzLnN0YXRlLkpfYXJlYSl9IDwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+RW1wbG95bWVudCBTdGF0dXM6PC90ZD4gPHRkPnt0aGlzLnN0YXRlLkpfQ29udHJhY3R9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+U2FsYXJ5OjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX21pbl9zYWxhcnl9fnt0aGlzLnN0YXRlLkpfbWF4X3NhbGFyeX0gWWVuPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Xb3JraW5nIERheXM6PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfV29ya2luZ19EYXl9IERheXMgcGVyIFdlZWs8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPldvcmtpbmcgSG91cnM6PC90ZD48dGQ+e3RoaXMuc3RhdGUuSl9ob3Vyc308L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5NaW5pbXVtIEphcGFuZXNlIFNraWxsOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX0pwTGV2ZWx9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Kb2IgRGVzY3JpcHRpb246PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfRGVzY3JpcHRpb259PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+Sm9iIFF1YWxpZmljYXRpb246PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfUXVhbGlmaWNhdGlvbn08L3RkPjwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpPT50aGlzLmRlbGV0ZVBhc3NJZCh0aGlzLnN0YXRlLmlkKX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlPC9idXR0b24+PC9hPiBcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiZWRpdE1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBpbmZvLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5BcHBsaWNhdGlvbiBSZXF1aXJlbWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5mb3JtX2NsZWFyfSBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwicG9zdFwiIHN0eWxlPXt7d2lkdGg6IDEwMCtcIiVcIn19IG9uU3VibWl0PXt0aGlzLmFkZEpvYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSByb2xlPVwiRm9ybVwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCJcIiBhY2NlcHQtY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTggYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSm5hbWVcIj5Kb2IgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBKb2IgTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSm5hbWV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9Db250cmFjdFwiPkVtcGxveW1lbnQgU3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiSl9Db250cmFjdFwiIGlkPVwiSl9Db250cmFjdFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5DaG9vc2UgRW1wbG95bWVudCBTdGF0dXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGdWxsLVRpbWVcIiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5lbXBsb3ltZW50U3RhdHVzID09IFwiRnVsbC1UaW1lXCIgICA/IChcInNlbGVjdGVkXCIpIDogKFwiZmFsc2VcIil9PkZ1bGwgVGltZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBhcnQtVGltZVwiIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmVtcGxveW1lbnRTdGF0dXMgPT0gXCJQYXJ0LVRpbWVcIiA/IChcInNlbGVjdGVkXCIpIDogKFwiZmFsc2VcIil9PlBhcnQgVGltZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic2FsYXJ5XCI+U2FsYXJ5KMKlKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtaW5fc2FsYXJ5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9taW5fc2FsYXJ5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBNaW5pbXVuIFNhbGFyeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9taW5fc2FsYXJ5fSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYXhfc2FsYXJ5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9tYXhfc2FsYXJ5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBNYXhpbXVuIFNhbGFyeVwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfbWF4X3NhbGFyeX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX2hvdXJzXCI+V29ya2luZyBIb3VyczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl9ob3Vyc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfaG91cnNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFdvcmtpbmcgSG91cnNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfaG91cnN9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9Xb3JraW5nX0RheVwiPldvcmtpbmcgRGF5czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl9Xb3JraW5nX0RheVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfV29ya2luZ19EYXlcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFdvcmtpbmcgRGF5c1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9Xb3JraW5nX0RheX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX0pwTGV2ZWxcIj5TZWxlY3QgSmFwYW5lc2UgU2tpbGw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJKX0pwTGV2ZWxcIiBpZD1cIkpfSnBMZXZlbFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+SmFwYW5lc2UgTGFuZ3VhZSBTa2lsbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuamFwYW5lc2VTa2lsbCA9PSBcIjNcIiA/IChcInNlbGVjdGVkXCIpIDogKFwiZmFsc2VcIil9Pk4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5qYXBhbmVzZVNraWxsID09IFwiMlwiID8gKFwic2VsZWN0ZWRcIikgOiAoXCJmYWxzZVwiKX0+TjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmphcGFuZXNlU2tpbGwgPT0gXCIxXCIgPyAoXCJzZWxlY3RlZFwiKSA6IChcImZhbHNlXCIpfT5OMTwvb3B0aW9uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX3RlbFwiPlRlbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfdGVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl90ZWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHBob25lOlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl90ZWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTggYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qb3N0ZWQgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cImRhdGV0aW1lXCIgbmFtZT1cIlBvc3RlZERhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLlBvc3RlZERhdGV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfZW1haWxcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJKX2VtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9lbWFpbFwiIHBsYWNlaG9sZGVyPVwiYWJjQGdtYWlsLmNvbVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9lbWFpbH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKLWFyZWFcIj5TZWxlY3QgQXJlYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkpfYXJlYVwiIGlkPVwiYXJlYVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IEFyZWEgaW4gSmFwYW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFyZWFzLm1hcChBcmVhID0+ICh0aGlzLnN0YXRlLkpfYXJlYSA9PSBBcmVhLmlkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17QXJlYS5pZH0gc2VsZWN0ZWQ+e0FyZWEuYXJlYU5hbWV9PC9vcHRpb24+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17QXJlYS5pZH0+e0FyZWEuYXJlYU5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfY2l0eVwiPlNlbGVjdCB5b3VyIENpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJKX2NpdHlcIiBpZD1cImNpdHlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNsaWNrPXt0aGlzLmRpc2FibGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPlNlbGVjdCBBcmVhIGluIEphcGFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2l0aWVzICYmICBjaXRpZXMubWFwKENpdHkgPT4gKHRoaXMuc3RhdGUuSl9jaXR5ID09IENpdHkuaWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDaXR5LmlkfSBzZWxlY3RlZD57Q2l0eS5jaXR5TmFtZX08L29wdGlvbj4gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDaXR5LmlkfT57Q2l0eS5jaXR5TmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXRhaWxBZGRyXCI+RGV0YWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkpfQWRkcmVzc1wiIG5hbWU9XCJKX0FkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfQWRkcmVzc30gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSm9iRGVzXCI+Sm9iIERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJKX0Rlc2NyaXB0aW9uXCIgbmFtZT1cIkpfRGVzY3JpcHRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfRGVzY3JpcHRpb259IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiUXVhbFwiPk90aGVyIFF1YWxpZmljYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgaWQ9XCJKX1F1YWxpZmljYXRpb25cIiBuYW1lPVwiSl9RdWFsaWZpY2F0aW9uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX1F1YWxpZmljYXRpb259ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMudXBkYXRlRW1wbG95ZXJ9IHZhbHVlPVwiVXBkYXRlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi13aWR0aCByb3VuZGVkLTQgcHktMlwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6MTB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5jbGVhcklucHV0fSB2YWx1ZT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblx0XHJcbiAgICAgICAgPGRpdiBpZD1cImRlbGV0ZUNvbmZpcm1Nb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGRlbC1kaWFsb2dcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+RGVsZXRlIEpvYjwvaDQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PiBcclxuXHRcdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGpvYj88L3A+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtd2FybmluZ1wiPjxzbWFsbD5UaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLjwvc21hbGw+PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHZhbHVlPVwiQ2FuY2VsXCIgLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiB2YWx1ZT1cIkRlbGV0ZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5kZWxldGVKb2J9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcblx0XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcblx0ICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9ib2R5PlxyXG48Lz5cclxuKX19Il0sInNvdXJjZVJvb3QiOiIifQ==