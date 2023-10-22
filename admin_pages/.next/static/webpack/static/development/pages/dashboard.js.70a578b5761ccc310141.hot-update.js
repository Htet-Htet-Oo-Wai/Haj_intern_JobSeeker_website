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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiam9iTGlzdCIsInByb3BzIiwiaWQiLCIkIiwibW9kYWwiLCJzZXRTdGF0ZSIsImRlbGV0ZV9pZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVkaXRfaWQiLCJmaXJlYmFzZSIsImxvYWRGaXJlYmFzZSIsImRhdGEiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiRU1QTE9ZRVJJRCIsIkpuYW1lIiwiSl9Db250cmFjdCIsIkpfbWluX3NhbGFyeSIsIkpfbWF4X3NhbGFyeSIsIkpfaG91cnMiLCJKX1dvcmtpbmdfRGF5IiwiSl9KcExldmVsIiwiSl9hcmVhIiwiSl9jaXR5IiwiSl90ZWwiLCJQb3N0ZWREYXRlIiwiSl9lbWFpbCIsIkpfQWRkcmVzcyIsIkpfRGVzY3JpcHRpb24iLCJKX1F1YWxpZmljYXRpb24iLCJlcnJvciIsImpvYk5hbWUiLCJnZXRBcmVhIiwidXBkYXRlIiwicmVmcmVzaFRhYmxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkZWNyZWFzZUpvYkNvdW50IiwiY29tcGFueSIsImVtcGxveWVycyIsImVtcGxveWVyIiwiZW1wbG95ZXJOYW1lIiwibWFwIiwiRW1wbG95ZXJzIiwiQ19OYW1lIiwiQ0lUWUlEIiwiQVJFQUlEIiwiY2l0eSIsImFyZWEiLCJjaXR5TmFtZSIsImFyZWFOYW1lIiwiQ2l0eSIsIkFyZWEiLCJhcmVhUXVlcnlTbmFwc2hvdCIsImluaXRpYWxfc3RhdGUiLCJpbnB1dHMiLCJpbmRleCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUF0dHIiLCJhdHRyIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImRhdGF0YWJsZVJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiJGRhdGF0YWJsZSIsImpvYnMiLCJqb2IiLCJjaXRpZXMiLCJhcmVhcyIsImluaXRpYWxpemVEYXRhdGFibGUiLCJjdXJyZW50IiwiRGF0YVRhYmxlIiwib3JkZXIiLCJjbGVhciIsInNlbGYiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXNwb25zZSIsIndpZHRoIiwiSm9iIiwiZ2V0Y2l0eSIsImdldEFyZWFPZkpvYiIsInZpZXdQYXNzSWQiLCJjb2xvciIsImN1cnNvciIsImVkaXRQYXNzSWQiLCJkZWxldGVQYXNzSWQiLCJnZXRFbXBsb3llciIsImdldExvY2F0aW9uIiwiZm9ybV9jbGVhciIsImRpc2FibGUiLCJzZWxlY3RlZFZhbHVlIiwiZW1wbG95bWVudFN0YXR1cyIsImphcGFuZXNlU2tpbGwiLCJ1cGRhdGVFbXBsb3llciIsIm1hcmdpblJpZ2h0IiwiY2xlYXJJbnB1dCIsImRlbGV0ZUpvYiIsImpvYlF1ZXJ5U25hcHNob3QiLCJkb2NzIiwiY2l0eVF1ZXJ5U25hcHNob3QiLCJsaW1pdCIsImVtcGxveWVyUXVlcnlTbmFwc2hvdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7QUFFakIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSx1TkE4RkosVUFBQ0MsRUFBRCxFQUFNO0FBQ2pCQyxPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkMsS0FBekIsQ0FBK0IsTUFBL0I7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLGlCQUFTLEVBQUdKO0FBQWIsT0FBZDs7QUFDQUssYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBTCxDQUFXSCxTQUF2QjtBQUNILEtBbEdrQjs7QUFBQSxxTkFtR0YsVUFBQ0osRUFBRCxFQUFRO0FBQ2pCLFlBQUtHLFFBQUwsQ0FBYztBQUFDSyxlQUFPLEVBQUdSO0FBQVgsT0FBZDs7QUFDQSxVQUFJUyxR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QUEvQixDO2lEQUlYO0FBQUM0RSxxQkFBRyxFQUFHRCxJQUFQO0FBQWFyQixzQkFBSSxFQUFHd0IsS0FBcEI7QUFBMkJ6QixzQkFBSSxFQUFHd0IsTUFBbEM7QUFBMEMvQiwwQkFBUSxFQUFFRDtBQUFwRCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdGc0IyQiw0Q0FBSyxDQUFDd0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGFzaGJvYXJkLmpzLjcwYTU3OGI1NzYxY2NjMzEwMTQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge2xvYWRGaXJlYmFzZX0gZnJvbSAnLi4vbGliL2RiLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpvYkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRhdGF0YWJsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHRoaXMuJGRhdGF0YWJsZSA9IG51bGxcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBlZGl0X2lkIDogJycsXHJcbiAgICAgICAgICAgIGRlbGV0ZV9pZCA6ICcnLFxyXG4gICAgICAgICAgICBKbmFtZTonJyxcclxuICAgICAgICAgICAgSl90ZWw6JycsXHJcbiAgICAgICAgICAgIEpfbWluX3NhbGFyeTonJyxcclxuICAgICAgICAgICAgSl9tYXhfc2FsYXJ5OicnLFxyXG4gICAgICAgICAgICBQb3N0ZWREYXRlOicnLFxyXG4gICAgICAgICAgICBKX2hvdXJzOicnLFxyXG4gICAgICAgICAgICBKX2VtYWlsOicnLFxyXG4gICAgICAgICAgICBKX2NpdHk6JycsXHJcbiAgICAgICAgICAgIEpfYXJlYTonJyxcclxuICAgICAgICAgICAgSl9Xb3JraW5nX0RheTonJyxcclxuICAgICAgICAgICAgSl9RdWFsaWZpY2F0aW9uOicnLFxyXG4gICAgICAgICAgICBKX0pwTGV2ZWw6JycsXHJcbiAgICAgICAgICAgIEpfRGVzY3JpcHRpb246JycsXHJcbiAgICAgICAgICAgIEpfQ29udHJhY3Q6JycsXHJcbiAgICAgICAgICAgIEpfQWRkcmVzczonJyxcclxuICAgICAgICAgICAgYXJlYU5hbWUgOiAnJyxcclxuICAgICAgICAgICAgam9icyA6IHByb3BzLmpvYiB8fCBbXSxcclxuICAgICAgICAgICAgY2l0aWVzIDogcHJvcHMuY2l0eSxcclxuICAgICAgICAgICAgZW1wbG95ZXJzIDogcHJvcHMuZW1wbG95ZXIgfHwgW10sXHJcbiAgICAgICAgICAgIGFyZWFzIDogcHJvcHMuYXJlYSB8fCBbXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGF0YXRhYmxlKClcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplRGF0YXRhYmxlKCkge1xyXG4gICAgICB0aGlzLiRkYXRhdGFibGUgPSAkKHRoaXMuZGF0YXRhYmxlUmVmLmN1cnJlbnQpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICBvcmRlcjogW1szLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hUYWJsZSgpIHtcclxuICAgICAgdGhpcy4kZGF0YXRhYmxlLmNsZWFyKClcclxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGpvYkxpc3RcclxuICAgICAgICAuZ2V0SW5pdGlhbFByb3BzKClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBqb2JzOiByZXNwb25zZS5qb2IsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vIHNlbGYuaW5pdGlhbGl6ZURhdGF0YWJsZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3QgZmlyZWJhc2UgPSBhd2FpdCBsb2FkRmlyZWJhc2UoKSBcclxuICAgICAgICBjb25zdCBqb2JRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiam9iXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBqb2JzID0gam9iUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBjb25zdCBhcmVhUXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImFyZWFcIilcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGFyZWFzID0gYXJlYVF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNpdHlRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAuY29sbGVjdGlvbihcImNpdHlcIilcclxuICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgY2l0aWVzID0gY2l0eVF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcGxveWVyUXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImVtcGxveWVyXCIpXHJcbiAgICAgICAgICAgIC5saW1pdCgxMClcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGVtcGxveWVycyA9IGVtcGxveWVyUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICBkYXRhIDogZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHtqb2IgOiBqb2JzLCBhcmVhIDogYXJlYXMsIGNpdHkgOiBjaXRpZXMsIGVtcGxveWVyOiBlbXBsb3llcnN9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVBhc3NJZCA9IChpZCk9PntcclxuICAgICAgICAkKFwiI2RlbGV0ZUNvbmZpcm1Nb2RhbFwiKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlbGV0ZV9pZCA6IGlkfSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRlbGV0ZV9pZClcclxuICAgIH07ICAgICAgXHJcbiAgICAgICAgdmlld1Bhc3NJZCA9IChpZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlZGl0X2lkIDogaWR9KVxyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2pvYicpLmRvYyhpZCkuZ2V0KCkuXHJcbiAgICAgICAgICAgICAgICB0aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gc25hcHNob3QuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVNUExPWUVSSUQgOiBkYXRhLkVNUExPWUVSSUQsICAgICAgIFxyXG4gICAgICAgICAgICAgICAgSm5hbWU6ZGF0YS5KbmFtZSxcclxuICAgICAgICAgICAgICAgIEpfQ29udHJhY3Q6ZGF0YS5KX0NvbnRyYWN0LFxyXG4gICAgICAgICAgICAgICAgSl9taW5fc2FsYXJ5OmRhdGEuSl9taW5fc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgSl9tYXhfc2FsYXJ5OmRhdGEuSl9tYXhfc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgSl9ob3VyczpkYXRhLkpfaG91cnMsXHJcbiAgICAgICAgICAgICAgICBKX1dvcmtpbmdfRGF5OmRhdGEuSl9Xb3JraW5nX0RheSxcclxuICAgICAgICAgICAgICAgIEpfSnBMZXZlbDpkYXRhLkpfSnBMZXZlbCxcclxuICAgICAgICAgICAgICAgIEpfYXJlYSA6IGRhdGEuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgSl9jaXR5OiBkYXRhLkpfY2l0eSxcclxuICAgICAgICAgICAgICAgICBKX3RlbDpkYXRhLkpfdGVsLFxyXG4gICAgICAgICAgICAgICAgUG9zdGVkRGF0ZTpkYXRhLlBvc3RlZERhdGUsXHJcbiAgICAgICAgICAgICAgICBKX2VtYWlsOmRhdGEuSl9lbWFpbCxcclxuICAgICAgICAgICAgICAgIEpfYXJlYTpkYXRhLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgIEpfY2l0eTpkYXRhLkpfY2l0eSxcclxuICAgICAgICAgICAgICAgIEpfQWRkcmVzczpkYXRhLkpfQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIEpfRGVzY3JpcHRpb246ZGF0YS5KX0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgSl9RdWFsaWZpY2F0aW9uOmRhdGEuSl9RdWFsaWZpY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBkYXRhXCIpXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmpvYk5hbWUpXHJcbiAgICAgICAgICAgICQoXCIjdmlld01vZGFsXCIpLm1vZGFsKCdzaG93JylcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVkaXRQYXNzSWQgPSAoaWQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdF9pZCA6IGlkfSlcclxuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdqb2InKS5kb2MoaWQpLmdldCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHNuYXBzaG90LmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSm5hbWU6ZGF0YS5KbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9Db250cmFjdDpkYXRhLkpfQ29udHJhY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfbWluX3NhbGFyeTpkYXRhLkpfbWluX3NhbGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9tYXhfc2FsYXJ5OmRhdGEuSl9tYXhfc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2hvdXJzOmRhdGEuSl9ob3VycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9Xb3JraW5nX0RheTpkYXRhLkpfV29ya2luZ19EYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfSnBMZXZlbDpkYXRhLkpfSnBMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9hcmVhIDogZGF0YS5KX2FyZWEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfY2l0eSA6IGRhdGEuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgSl90ZWw6ZGF0YS5KX3RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdGVkRGF0ZTpkYXRhLlBvc3RlZERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfZW1haWw6ZGF0YS5KX2VtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2FyZWE6ZGF0YS5KX2FyZWEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfY2l0eTpkYXRhLkpfY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9BZGRyZXNzOmRhdGEuSl9BZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0Rlc2NyaXB0aW9uOmRhdGEuSl9EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9RdWFsaWZpY2F0aW9uOmRhdGEuSl9RdWFsaWZpY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBcmVhKGRhdGEuSl9hcmVhKVxyXG4gICAgICAgICAgICAgICAgfSkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI2VkaXRNb2RhbFwiKS5tb2RhbCgnc2hvdycpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGRhdGVKb2IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2pvYicpLmRvYyh0aGlzLnN0YXRlLmVkaXRfaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgSm5hbWU6dGhpcy5zdGF0ZS5KbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBKX0NvbnRyYWN0OnRoaXMuc3RhdGUuSl9Db250cmFjdCxcclxuICAgICAgICAgICAgICAgICAgICBKX21pbl9zYWxhcnk6dGhpcy5zdGF0ZS5KX21pbl9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgSl9tYXhfc2FsYXJ5OnRoaXMuc3RhdGUuSl9tYXhfc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfaG91cnM6dGhpcy5zdGF0ZS5KX2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfV29ya2luZ19EYXk6dGhpcy5zdGF0ZS5KX1dvcmtpbmdfRGF5LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfSnBMZXZlbDp0aGlzLnN0YXRlLkpfSnBMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICBKX2FyZWEgOiB0aGlzLnN0YXRlLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICBKX2NpdHkgOiB0aGlzLnN0YXRlLkpfY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBKX3RlbDp0aGlzLnN0YXRlLkpfdGVsLFxyXG4gICAgICAgICAgICAgICAgICAgIFBvc3RlZERhdGU6dGhpcy5zdGF0ZS5Qb3N0ZWREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfZW1haWw6dGhpcy5zdGF0ZS5KX2VtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfYXJlYTp0aGlzLnN0YXRlLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICBKX2NpdHk6dGhpcy5zdGF0ZS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgSl9BZGRyZXNzOnRoaXMuc3RhdGUuSl9BZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfRGVzY3JpcHRpb246dGhpcy5zdGF0ZS5KX0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfUXVhbGlmaWNhdGlvbjp0aGlzLnN0YXRlLkpfUXVhbGlmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUYWJsZSgpO1xyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJBUkVBSURcIil7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRlbGV0ZUpvYiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJylcclxuICAgICAgICAgICAgLmRvYyh0aGlzLnN0YXRlLmRlbGV0ZV9pZClcclxuICAgICAgICAgICAgLmRlbGV0ZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0ZSBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmRlY3JlYXNlSm9iQ291bnQodGhpcy5zdGF0ZS5jb21wYW55KVxyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUYWJsZSgpO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRFbXBsb3llciA9IChFTVBMT1lFUklEKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXJzID0gdGhpcy5wcm9wcy5lbXBsb3llclxyXG4gICAgICAgIGxldCBlbXBsb3llck5hbWUgPSAnJ1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEVNUExPWUVSSUQpXHJcbiAgICAgICAgZW1wbG95ZXJzICYmIGVtcGxveWVycy5tYXAoRW1wbG95ZXJzID0+IHtcclxuICAgICAgICAgICAgaWYoRW1wbG95ZXJzLmlkID09IEVNUExPWUVSSUQpe1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXJOYW1lID0gRW1wbG95ZXJzLmRhdGEuQ19OYW1lXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coZW1wbG95ZXJOYW1lKVxyXG4gICAgICAgIHJldHVybiBlbXBsb3llck5hbWVcclxuICAgICB9XHJcblxyXG4gICAgIGdldExvY2F0aW9uID0gKENJVFlJRCwgQVJFQUlEKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2l0eSA9IHRoaXMucHJvcHMuY2l0eVxyXG4gICAgICAgIGNvbnN0IGFyZWEgPSB0aGlzLnByb3BzLmFyZWFcclxuICAgICAgICBsZXQgY2l0eU5hbWUgPSAnJ1xyXG4gICAgICAgIGxldCBhcmVhTmFtZSA9ICcnXHJcblxyXG4gICAgICAgIGNpdHkgJiYgY2l0eS5tYXAoQ2l0eT0+e1xyXG4gICAgICAgICAgICBpZihDaXR5LmlkID09IENJVFlJRCl7XHJcbiAgICAgICAgICAgICAgICBjaXR5TmFtZSA9IENpdHkuY2l0eU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXJlYSAmJiBhcmVhLm1hcChBcmVhPT57XHJcbiAgICAgICAgICAgIGlmKEFyZWEuaWQgPT0gQVJFQUlEKXtcclxuICAgICAgICAgICAgICAgIGFyZWFOYW1lID0gQXJlYS5hcmVhTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgIHJldHVybiBjaXR5TmFtZSArIFwiLFwiICsgYXJlYU5hbWVcclxuICAgICB9XHJcbiAgICAgZ2V0QXJlYU9mSm9iID0gKEFSRUFJRCkgPT4ge1xyXG4gICAgICAgY29uc3QgYXJlYSA9IHRoaXMucHJvcHMuYXJlYVxyXG4gICAgbGV0IGFyZWFOYW1lID0gJydcclxuICAgIGFyZWEgJiYgYXJlYS5tYXAoQXJlYT0+e1xyXG4gICAgICAgICAgICBpZihBcmVhLmlkID09IEFSRUFJRCl7XHJcbiAgICAgICAgICAgICAgICBhcmVhTmFtZSA9IEFyZWEuYXJlYU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICByZXR1cm4gYXJlYU5hbWVcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgZ2V0Y2l0eSA9IChDSVRZSUQpID0+IHtcclxuICAgICAgICBjb25zdCBjaXR5ID0gdGhpcy5wcm9wcy5jaXR5XHJcbiAgICAgXHJcbiAgICAgICAgbGV0IGNpdHlOYW1lID0gJydcclxuICAgICAgXHJcblxyXG4gICAgICAgIGNpdHkgJiYgY2l0eS5tYXAoQ2l0eT0+e1xyXG4gICAgICAgICAgICBpZihDaXR5LmlkID09IENJVFlJRCl7XHJcbiAgICAgICAgICAgICAgICBjaXR5TmFtZSA9IENpdHkuY2l0eU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgICAgIHJldHVybiBjaXR5TmFtZSBcclxuICAgICB9XHJcblxyXG4gICAgZ2V0QXJlYSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBhcmVhID0ge31cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2FyZWEnKVxyXG4gICAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKGFyZWFRdWVyeVNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgYXJlYSA9IGFyZWFRdWVyeVNuYXBzaG90LmRhdGEoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FyZWFOYW1lIDogYXJlYS5hcmVhTmFtZX0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcm1fY2xlYXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbF9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGlucHV0cywgaW5kZXg7XHJcbiAgICAgICAgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgaW5wdXRzLmxlbmd0aDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICBpbnB1dHNbaW5kZXhdLnZhbHVlID0gJydcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0pfQWRkcmVzcycpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0pfRGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKX1F1YWxpZmljYXRpb24nKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgXHJcbiAgXHJcbiAgICAgICAgJChcIiNKX0NvbnRyYWN0IG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI0pfQ29udHJhY3Qgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgJChcIiNKX0pwTGV2ZWwgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjSl9KcExldmVsIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICQoXCIjY2l0eSBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNjaXR5IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpOyBcclxuICAgICAgICAkKFwiI2FyZWEgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjYXJlYSBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTsgICBcclxuICAgIH07XHJcblxyXG4gICAgZGlzYWJsZSA9IChldmVudCkgPT4geyAgIFxyXG4gICAgICAgICQoXCIjSl9Db250cmFjdCBvcHRpb246Zmlyc3RcIikuYXR0cihcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKTsgXHJcbiAgICAgICAgJChcIiNKX0pwTGV2ZWwgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7IFxyXG4gICAgICAgICQoXCIjY2l0eSBvcHRpb246Zmlyc3RcIikuYXR0cihcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAkKFwiI2FyZWEgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7IFxyXG4gICAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjaXRpZXMgPSB0aGlzLnN0YXRlLmNpdGllc1xyXG4gICAgY29uc3QgYXJlYXMgPSB0aGlzLnN0YXRlLmFyZWFzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG48Ym9keSBjbGFzc05hbWU9XCJzYi1uYXYtZml4ZWRcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNiLXRvcG5hdiBuYXZiYXIgbmF2YmFyLWV4cGFuZCBuYXZiYXItZGFyayBiZy1kYXJrXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCJkYXNoYm9hcmRcIj5BZG1pbjwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgYnRuLXNtIG9yZGVyLTEgb3JkZXItbGctMFwiIGlkPVwic2lkZWJhclRvZ2dsZVwiIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZS1ibG9jayBmb3JtLWlubGluZSBtbC1hdXRvIG1yLTAgbXItbWQtMyBteS0yIG15LW1kLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvIG1sLW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBpZD1cInVzZXJEcm9wZG93blwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyIGZhLWZ3XCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCIgYXJpYS1sYWJlbGxlZGJ5PVwidXNlckRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+UHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BY3Rpdml0eSBMb2c8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJsb2dpblwiPkxvZ291dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImxheW91dFNpZGVuYXZcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxheW91dFNpZGVuYXZfbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYgYWNjb3JkaW9uIHNiLXNpZGVuYXYtZGFya1wiIGlkPVwic2lkZW5hdkFjY29yZGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudS1oZWFkaW5nXCI+Q29yZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1uYXYtbGluay1pY29uXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRhY2hvbWV0ZXItYWx0XCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGNvbGxhcHNlZFwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlUGFnZXNcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VQYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ItbmF2LWxpbmstaWNvblwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib29rLW9wZW5cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtY29sbGFwc2UtYXJyb3dcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD1cImNvbGxhcHNlUGFnZXNcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nVHdvXCIgZGF0YS1wYXJlbnQ9XCIjc2lkZW5hdkFjY29yZGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1tZW51LW5lc3RlZCBuYXYgYWNjb3JkaW9uXCIgaWQ9XCJzaWRlbmF2QWNjb3JkaW9uUGFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgY29sbGFwc2VkXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjcGFnZXNDb2xsYXBzZUF1dGhcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwicGFnZXNDb2xsYXBzZUF1dGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtY29sbGFwc2UtYXJyb3dcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9XCJwYWdlc0NvbGxhcHNlQXV0aFwiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIiBkYXRhLXBhcmVudD1cIiNzaWRlbmF2QWNjb3JkaW9uUGFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1tZW51LW5lc3RlZCBuYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJsb2dpblwiPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cInJlZ2lzdGVyXCI+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwicGFzc3dvcmRcIj5Gb3Jnb3QgUGFzc3dvcmQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5b3V0U2lkZW5hdl9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtNFwiPkxpc3Qgb2YgSm9iczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1zdWNjZXNzIHRleHQtd2hpdGUgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPkVtcGxveWVycyBUYWJsZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNtYWxsIHRleHQtd2hpdGUgc3RyZXRjaGVkLWxpbmtcIiBocmVmPVwiZW1wbHlvZXJcIj5WaWV3IERldGFpbHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsIHRleHQtd2hpdGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBhZG1pbi1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8dGFibGUgcmVmPXt0aGlzLmRhdGF0YWJsZVJlZn0gY2xhc3NOYW1lPVwiZGlzcGxheSB0YWJsZSB0YWJsZS1ib3JkZXJlZFwiIHN0eWxlPXt7d2lkdGg6MTAwK1wiJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRocmVhZC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Kb2IgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW1wbG95bWVudCBTdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFyZWE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNhbGFyeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UG9zdGVkIERhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuam9icy5tYXAoSm9iPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtKb2IuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntKb2IuSm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Sm9iLkpfQ29udHJhY3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5nZXRjaXR5KEpvYi5KX2NpdHkpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZ2V0QXJlYU9mSm9iKEpvYi5KX2FyZWEpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5KX21pbl9zYWxhcnl9fntKb2IuSl9tYXhfc2FsYXJ5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5Qb3N0ZWREYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgb25DbGljaz17KCk9PnRoaXMudmlld1Bhc3NJZChKb2IuaWQpfSBjbGFzc05hbWU9XCJ2aWV3IG1hdGVyaWFsLWljb25zIGljb24tcGFkZGluZ1wiIHRpdGxlPVwiVmlld1wiIHN0eWxlPXt7Y29sb3I6IFwicmdiKDAsIDExMCwgMjU1KVwiLCBjdXJzb3I6XCJwb2ludGVyXCJ9fSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiPiYjeEU0MTc7PC9pPjwvYT4gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgb25DbGljaz17KCk9PnRoaXMuZWRpdFBhc3NJZChKb2IuaWQpfSBjbGFzc05hbWU9XCJlZGl0IG1hdGVyaWFsLWljb25zIGljb24tcGFkZGluZ1wiIHRpdGxlPVwiRWRpdFwiIHN0eWxlPXt7Y29sb3I6IFwieWVsbG93XCIsIGN1cnNvcjpcInBvaW50ZXJcIn19IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCI+JiN4RTI1NDs8L2k+PC9hPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpPT50aGlzLmRlbGV0ZVBhc3NJZChKb2IuaWQpfSBjbGFzc05hbWU9XCJkZWxldGUgbWF0ZXJpYWwtaWNvbnMgaWNvbi1wYWRkaW5nXCIgdGl0bGU9XCJEZWxldGVcIiAgc3R5bGU9e3tjb2xvcjogXCJyZWRcIiwgY3Vyc29yOlwicG9pbnRlclwifX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mI3hFODcyOzwvYT4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblx0XHJcblx0PGRpdiBpZD1cInZpZXdNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGluZm8tZGlhbG9nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+RGV0YWlsIEluZm9ybWF0aW9uPC9oND5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5Kb2IgTmFtZTo8L3RkPjx0ZD57dGhpcy5zdGF0ZS5KbmFtZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPiBFbXBsb3llciBOYW1lOjwvdGQ+PHRkPiB7dGhpcy5nZXRFbXBsb3llcih0aGlzLnN0YXRlLkVNUExPWUVSSUQpfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+UG9zdGVkX0RhdGU6IDwvdGQ+PHRkPnt0aGlzLnN0YXRlLlBvc3RlZERhdGV9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+UGhvbmUgTnVtYmVyOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX3RlbH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5FbWFpbDo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9lbWFpbH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5BZGRyZXNzOjwvdGQ+IDx0ZD4ge3RoaXMuc3RhdGUuSl9BZGRyZXNzfSwge3RoaXMuZ2V0TG9jYXRpb24odGhpcy5zdGF0ZS5KX2NpdHksdGhpcy5zdGF0ZS5KX2FyZWEpfSA8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPkVtcGxveW1lbnQgU3RhdHVzOjwvdGQ+IDx0ZD57dGhpcy5zdGF0ZS5KX0NvbnRyYWN0fTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPlNhbGFyeTo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9taW5fc2FsYXJ5fX57dGhpcy5zdGF0ZS5KX21heF9zYWxhcnl9IFllbjwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+V29ya2luZyBEYXlzOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX1dvcmtpbmdfRGF5fSBEYXlzIHBlciBXZWVrPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Xb3JraW5nIEhvdXJzOjwvdGQ+PHRkPnt0aGlzLnN0YXRlLkpfaG91cnN9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+TWluaW11bSBKYXBhbmVzZSBTa2lsbDo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9KcExldmVsfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+Sm9iIERlc2NyaXB0aW9uOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX0Rlc2NyaXB0aW9ufTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkpvYiBRdWFsaWZpY2F0aW9uOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX1F1YWxpZmljYXRpb259PC90ZD48L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKT0+dGhpcy5kZWxldGVQYXNzSWQodGhpcy5zdGF0ZS5pZCl9IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPkRlbGV0ZTwvYnV0dG9uPjwvYT4gXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImVkaXRNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgaW5mby1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+QXBwbGljYXRpb24gUmVxdWlyZW1lbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e3RoaXMuZm9ybV9jbGVhcn0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cInBvc3RcIiBzdHlsZT17e3dpZHRoOiAxMDArXCIlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIHJvbGU9XCJGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIlwiIGFjY2VwdC1jaGFyc2V0PVwiVVRGLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKbmFtZVwiPkpvYiBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJKbmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEpvYiBOYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KbmFtZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX0NvbnRyYWN0XCI+RW1wbG95bWVudCBTdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJKX0NvbnRyYWN0XCIgaWQ9XCJKX0NvbnRyYWN0XCIgb25DbGljaz17dGhpcy5kaXNhYmxlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWV9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkNob29zZSBFbXBsb3ltZW50IFN0YXR1czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZ1bGwtVGltZVwiIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmVtcGxveW1lbnRTdGF0dXMgPT0gXCJGdWxsLVRpbWVcIiAgID8gKFwic2VsZWN0ZWRcIikgOiAoXCJmYWxzZVwiKX0+RnVsbCBUaW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUGFydC1UaW1lXCIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZW1wbG95bWVudFN0YXR1cyA9PSBcIlBhcnQtVGltZVwiID8gKFwic2VsZWN0ZWRcIikgOiAoXCJmYWxzZVwiKX0+UGFydCBUaW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzYWxhcnlcIj5TYWxhcnkowqUpPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTggXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1pbl9zYWxhcnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX21pbl9zYWxhcnlcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE1pbmltdW4gU2FsYXJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX21pbl9zYWxhcnl9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTggXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1heF9zYWxhcnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX21heF9zYWxhcnlcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE1heGltdW4gU2FsYXJ5XCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9tYXhfc2FsYXJ5fSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfaG91cnNcIj5Xb3JraW5nIEhvdXJzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJKX2hvdXJzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9ob3Vyc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgV29ya2luZyBIb3Vyc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9ob3Vyc30gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX1dvcmtpbmdfRGF5XCI+V29ya2luZyBEYXlzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJKX1dvcmtpbmdfRGF5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9Xb3JraW5nX0RheVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgV29ya2luZyBEYXlzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX1dvcmtpbmdfRGF5fSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfSnBMZXZlbFwiPlNlbGVjdCBKYXBhbmVzZSBTa2lsbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkpfSnBMZXZlbFwiIGlkPVwiSl9KcExldmVsXCIgb25DbGljaz17dGhpcy5kaXNhYmxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5KYXBhbmVzZSBMYW5ndWFlIFNraWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5qYXBhbmVzZVNraWxsID09IFwiM1wiID8gKFwic2VsZWN0ZWRcIikgOiAoXCJmYWxzZVwiKX0+TjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmphcGFuZXNlU2tpbGwgPT0gXCIyXCIgPyAoXCJzZWxlY3RlZFwiKSA6IChcImZhbHNlXCIpfT5OMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuamFwYW5lc2VTa2lsbCA9PSBcIjFcIiA/IChcInNlbGVjdGVkXCIpIDogKFwiZmFsc2VcIil9Pk4xPC9vcHRpb24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfdGVsXCI+VGVsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl90ZWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX3RlbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGhvbmU6XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX3RlbH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBvc3RlZCBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiZGF0ZXRpbWVcIiBuYW1lPVwiUG9zdGVkRGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuUG9zdGVkRGF0ZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9lbWFpbFwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX2VtYWlsXCIgcGxhY2Vob2xkZXI9XCJhYmNAZ21haWwuY29tXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX2VtYWlsfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkotYXJlYVwiPlNlbGVjdCBBcmVhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiSl9hcmVhXCIgaWQ9XCJhcmVhXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DbGljaz17dGhpcy5kaXNhYmxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5TZWxlY3QgQXJlYSBpbiBKYXBhbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXJlYXMubWFwKEFyZWEgPT4gKHRoaXMuc3RhdGUuSl9hcmVhID09IEFyZWEuaWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtBcmVhLmlkfSBzZWxlY3RlZD57QXJlYS5hcmVhTmFtZX08L29wdGlvbj4gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtBcmVhLmlkfT57QXJlYS5hcmVhTmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9jaXR5XCI+U2VsZWN0IHlvdXIgQ2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkpfY2l0eVwiIGlkPVwiY2l0eVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IEFyZWEgaW4gSmFwYW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjaXRpZXMgJiYgIGNpdGllcy5tYXAoQ2l0eSA9PiAodGhpcy5zdGF0ZS5KX2NpdHkgPT0gQ2l0eS5pZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NpdHkuaWR9IHNlbGVjdGVkPntDaXR5LmNpdHlOYW1lfTwvb3B0aW9uPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NpdHkuaWR9PntDaXR5LmNpdHlOYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRldGFpbEFkZHJcIj5EZXRhaWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiSl9BZGRyZXNzXCIgbmFtZT1cIkpfQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9BZGRyZXNzfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKb2JEZXNcIj5Kb2IgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkpfRGVzY3JpcHRpb25cIiBuYW1lPVwiSl9EZXNjcmlwdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9EZXNjcmlwdGlvbn0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJRdWFsXCI+T3RoZXIgUXVhbGlmaWNhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiICBpZD1cIkpfUXVhbGlmaWNhdGlvblwiIG5hbWU9XCJKX1F1YWxpZmljYXRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfUXVhbGlmaWNhdGlvbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy51cGRhdGVFbXBsb3llcn0gdmFsdWU9XCJVcGRhdGVcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXdpZHRoIHJvdW5kZWQtNCBweS0yXCIgc3R5bGU9e3ttYXJnaW5SaWdodDoxMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXt0aGlzLmNsZWFySW5wdXR9IHZhbHVlPVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHRcclxuICAgICAgICA8ZGl2IGlkPVwiZGVsZXRlQ29uZmlybU1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgZGVsLWRpYWxvZ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5EZWxldGUgSm9iPC9oND5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+IFxyXG5cdFx0XHRcdDxmb3JtPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgam9iPzwvcD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nXCI+PHNtYWxsPlRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuPC9zbWFsbD48L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIiAvPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIHZhbHVlPVwiRGVsZXRlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXt0aGlzLmRlbGV0ZUpvYn0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuXHRcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICBcclxuXHQgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2JvZHk+XHJcbjwvPlxyXG4pfX0iXSwic291cmNlUm9vdCI6IiJ9