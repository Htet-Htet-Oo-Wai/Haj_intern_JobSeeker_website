webpackHotUpdate("static\\development\\pages\\eg1.js",{

/***/ "./pages/eg1.js":
/*!**********************!*\
  !*** ./pages/eg1.js ***!
  \**********************/
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









var _jsxFileName = "C:\\Users\\lenovo\\Desktop\\admin_pages\\pages\\eg1.js";
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

          _this.getArea(data.AREAID);
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
          lineNumber: 311,
          columnNumber: 1
        }
      }, __jsx("nav", {
        className: "sb-topnav navbar navbar-expand navbar-dark bg-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "navbar-brand",
        href: "dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 13
        }
      }, "Admin"), __jsx("button", {
        className: "btn btn-link btn-sm order-1 order-lg-0",
        id: "sidebarToggle",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 13
        }
      }, __jsx("i", {
        className: "fas fa-bars",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 100
        }
      })), __jsx("form", {
        className: "d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "input-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 17
        }
      }, __jsx("ul", {
        className: "navbar-nav ml-auto ml-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 21
        }
      }, __jsx("li", {
        className: "nav-item dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
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
          lineNumber: 320,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "fas fa-user fa-fw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 176
        }
      })), __jsx("div", {
        className: "dropdown-menu dropdown-menu-right",
        "aria-labelledby": "userDropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 33
        }
      }, "Profile"), __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 33
        }
      }, "Activity Log"), __jsx("div", {
        className: "dropdown-divider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 33
        }
      }), __jsx("a", {
        className: "dropdown-item",
        href: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 33
        }
      }, "Logout"))))))), __jsx("div", {
        id: "layoutSidenav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "layoutSidenav_nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 13
        }
      }, __jsx("nav", {
        className: "sb-sidenav accordion sb-sidenav-dark",
        id: "sidenavAccordion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "sb-sidenav-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "sb-sidenav-menu-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 29
        }
      }, "Core"), __jsx("a", {
        className: "nav-link",
        href: "dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "sb-nav-link-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-tachometer-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
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
          lineNumber: 345,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "sb-nav-link-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-book-open",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 67
        }
      })), "Pages", __jsx("div", {
        className: "sb-sidenav-collapse-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
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
          lineNumber: 350,
          columnNumber: 29
        }
      }, __jsx("nav", {
        className: "sb-sidenav-menu-nested nav accordion",
        id: "sidenavAccordionPages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
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
          lineNumber: 352,
          columnNumber: 37
        }
      }, "Authentication", __jsx("div", {
        className: "sb-sidenav-collapse-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
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
          lineNumber: 356,
          columnNumber: 37
        }
      }, __jsx("nav", {
        className: "sb-sidenav-menu-nested nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 45
        }
      }, "Login"), __jsx("a", {
        className: "nav-link",
        href: "register",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 45
        }
      }, "Register"), __jsx("a", {
        className: "nav-link",
        href: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 45
        }
      }, "Forgot Password"))))))))), __jsx("div", {
        id: "layoutSidenav_content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 13
        }
      }, __jsx("main", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "mt-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 25
        }
      }, "List of Jobs"), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "col-xl-3 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "card bg-success text-white mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 37
        }
      }, "Employers Table"), __jsx("div", {
        className: "card-footer d-flex align-items-center justify-content-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "small text-white stretched-link",
        href: "emplyoer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 41
        }
      }, "View Details"), __jsx("div", {
        className: "small text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-angle-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 75
        }
      })))))), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "container admin-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "table-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
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
          lineNumber: 396,
          columnNumber: 9
        }
      }, __jsx("thead", {
        className: "thread-color",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 21
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 21
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 29
        }
      }, "Job Name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 29
        }
      }, "Employment Status"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 29
        }
      }, "City"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 29
        }
      }, "Salary"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 29
        }
      }, "Posted Date"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 29
        }
      }, "Action"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 21
        }
      }, this.state.jobs.map(function (Job) {
        return __jsx("tr", {
          key: Job.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 409,
            columnNumber: 25
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410,
            columnNumber: 29
          }
        }, Job.Jname), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 29
          }
        }, Job.J_Contract), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 29
          }
        }, Job.J_city), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 29
          }
        }, Job.J_min_salary, "~", Job.J_max_salary), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 29
          }
        }, Job.PostedDate), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 29
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416,
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
            lineNumber: 416,
            columnNumber: 36
          }
        }, "\uE417")), " \xA0", __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417,
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
            lineNumber: 417,
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
            lineNumber: 418,
            columnNumber: 9
          }
        }, "\uE872"), " \xA0"));
      }))))), __jsx("div", {
        id: "viewModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 2
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 6
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
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
          lineNumber: 433,
          columnNumber: 7
        }
      }, "\xD7")), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 6
        }
      }, __jsx("table", {
        className: "table table-bordered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 21
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 31
        }
      }, "Job Name:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 49
        }
      }, this.state.Jname)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 30
        }
      }, " Employer Name:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 54
        }
      }, " ", this.getEmployer(this.state.EMPLOYERID))), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 30
        }
      }, "Posted_Date: "), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 52
        }
      }, this.state.PostedDate)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 31
        }
      }, "Phone Number:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 53
        }
      }, " ", this.state.J_tel)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 31
        }
      }, "Email:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 46
        }
      }, " ", this.state.J_email)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 31
        }
      }, "Address:"), " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 49
        }
      }, " ", this.state.J_Address, ", ", this.getLocation(this.state.J_city, this.state.J_area), " ")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 30
        }
      }, "Employment Status:"), " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 58
        }
      }, this.state.J_Contract)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 31
        }
      }, "Salary:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 47
        }
      }, " ", this.state.J_min_salary, "~", this.state.J_max_salary, " Yen")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 30
        }
      }, "Working Days:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 52
        }
      }, " ", this.state.J_Working_Day, " Days per Week")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 30
        }
      }, "Working Hours:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 53
        }
      }, this.state.J_hours)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 31
        }
      }, "Minimum Japanese Skill:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 63
        }
      }, " ", this.state.J_JpLevel)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448,
          columnNumber: 30
        }
      }, "Job Description:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448,
          columnNumber: 55
        }
      }, " ", this.state.J_Description)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 31
        }
      }, "Job Qualification:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 58
        }
      }, " ", this.state.J_Qualification)))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453,
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
          lineNumber: 454,
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
          lineNumber: 455,
          columnNumber: 25
        }
      }, __jsx("button", {
        className: "btn btn-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 96
        }
      }, "Delete")))))), __jsx("div", {
        id: "editModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 25
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
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
          lineNumber: 466,
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
          lineNumber: 468,
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
          lineNumber: 469,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 41
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 49
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "Jname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478,
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
          lineNumber: 479,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_Contract",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
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
          lineNumber: 484,
          columnNumber: 61
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 53
        }
      }, "Choose Employment Status"), __jsx("option", {
        value: "Full-Time",
        selected: this.state.employmentStatus == "Full-Time" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 53
        }
      }, "Full Time"), __jsx("option", {
        value: "Part-Time",
        selected: this.state.employmentStatus == "Part-Time" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 53
        }
      }, "Part Time"))), __jsx("label", {
        "for": "salary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490,
          columnNumber: 57
        }
      }, "Salary(\xA5)"), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491,
          columnNumber: 57
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492,
          columnNumber: 53
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493,
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
          lineNumber: 494,
          columnNumber: 57
        }
      }))), __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498,
          columnNumber: 53
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499,
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
          lineNumber: 500,
          columnNumber: 57
        }
      })))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_hours",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504,
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
          lineNumber: 505,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_Working_Day",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
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
          lineNumber: 509,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_JpLevel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512,
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
          lineNumber: 513,
          columnNumber: 61
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514,
          columnNumber: 57
        }
      }, "Japanese Languae Skill"), __jsx("option", {
        value: "3",
        selected: this.state.japaneseSkill == "3" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515,
          columnNumber: 57
        }
      }, "N3"), __jsx("option", {
        value: "2",
        selected: this.state.japaneseSkill == "2" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 57
        }
      }, "N2"), __jsx("option", {
        value: "1",
        selected: this.state.japaneseSkill == "1" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 57
        }
      }, "N1"))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_tel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
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
          lineNumber: 522,
          columnNumber: 61
        }
      })))), __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531,
          columnNumber: 45
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 45
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533,
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
        lineNumber: 534,
        columnNumber: 69
      }), _jsx))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536,
          columnNumber: 49
        }
      }, __jsx("label", {
        "for": "J_email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537,
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
          lineNumber: 538,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541,
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
          lineNumber: 542,
          columnNumber: 61
        }
      }, __jsx("option", {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 53
        }
      }, "Select Area in Japan"), this.state.areas.map(function (Area) {
        return _this2.state.J_area == Area.id ? __jsx("option", {
          value: Area.id,
          selected: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 545,
            columnNumber: 57
          }
        }, Area.areaName) : __jsx("option", {
          value: Area.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 546,
            columnNumber: 57
          }
        }, Area.areaName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_city",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551,
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
          lineNumber: 552,
          columnNumber: 61
        }
      }, __jsx("option", {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 53
        }
      }, "Select Area in Japan"), cities && cities.map(function (City) {
        return _this2.state.J_city == City.id ? __jsx("option", {
          value: City.id,
          selected: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 555,
            columnNumber: 57
          }
        }, City.cityName) : __jsx("option", {
          value: City.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 556,
            columnNumber: 57
          }
        }, City.cityName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "detailAddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
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
          lineNumber: 564,
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
        "for": "JobDes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569,
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
          lineNumber: 570,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "Qual",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576,
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
          lineNumber: 577,
          columnNumber: 61
        }
      }))))))))))), __jsx("div", {
        id: "deleteConfirmModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog del-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 17
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599,
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
          lineNumber: 600,
          columnNumber: 6
        }
      }, "\xD7")), __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 6
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 25
        }
      }, "Are you sure you want to delete this job?"), __jsx("p", {
        className: "text-warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 7
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 35
        }
      }, "This action cannot be undone.")))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608,
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
          lineNumber: 609,
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
          lineNumber: 610,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZzEuanMiXSwibmFtZXMiOlsiam9iTGlzdCIsInByb3BzIiwiaWQiLCIkIiwibW9kYWwiLCJzZXRTdGF0ZSIsImRlbGV0ZV9pZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVkaXRfaWQiLCJmaXJlYmFzZSIsImxvYWRGaXJlYmFzZSIsImRhdGEiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiSm5hbWUiLCJKX0NvbnRyYWN0IiwiSl9taW5fc2FsYXJ5IiwiSl9tYXhfc2FsYXJ5IiwiSl9ob3VycyIsIkpfV29ya2luZ19EYXkiLCJKX0pwTGV2ZWwiLCJKX2FyZWEiLCJKX2NpdHkiLCJKX3RlbCIsIlBvc3RlZERhdGUiLCJKX2VtYWlsIiwiSl9BZGRyZXNzIiwiSl9EZXNjcmlwdGlvbiIsIkpfUXVhbGlmaWNhdGlvbiIsImVycm9yIiwiam9iTmFtZSIsImdldEFyZWEiLCJBUkVBSUQiLCJ1cGRhdGUiLCJyZWZyZXNoVGFibGUiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImRlY3JlYXNlSm9iQ291bnQiLCJjb21wYW55IiwiRU1QTE9ZRVJJRCIsImVtcGxveWVycyIsImVtcGxveWVyIiwiZW1wbG95ZXJOYW1lIiwibWFwIiwiRW1wbG95ZXJzIiwiQ19OYW1lIiwiQ0lUWUlEIiwiY2l0eSIsImFyZWEiLCJjaXR5TmFtZSIsImFyZWFOYW1lIiwiQ2l0eSIsIkFyZWEiLCJhcmVhUXVlcnlTbmFwc2hvdCIsImluaXRpYWxfc3RhdGUiLCJpbnB1dHMiLCJpbmRleCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUF0dHIiLCJhdHRyIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImRhdGF0YWJsZVJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiJGRhdGF0YWJsZSIsImpvYnMiLCJqb2IiLCJjaXRpZXMiLCJhcmVhcyIsImluaXRpYWxpemVEYXRhdGFibGUiLCJjdXJyZW50IiwiRGF0YVRhYmxlIiwib3JkZXIiLCJjbGVhciIsInNlbGYiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXNwb25zZSIsIndpZHRoIiwiSm9iIiwidmlld1Bhc3NJZCIsImNvbG9yIiwiY3Vyc29yIiwiZWRpdFBhc3NJZCIsImRlbGV0ZVBhc3NJZCIsImdldEVtcGxveWVyIiwiZ2V0TG9jYXRpb24iLCJmb3JtX2NsZWFyIiwiYWRkSm9iIiwiZGlzYWJsZSIsInNlbGVjdGVkVmFsdWUiLCJlbXBsb3ltZW50U3RhdHVzIiwiamFwYW5lc2VTa2lsbCIsImRlbGV0ZUpvYiIsImpvYlF1ZXJ5U25hcHNob3QiLCJkb2NzIiwiY2l0eVF1ZXJ5U25hcHNob3QiLCJsaW1pdCIsImVtcGxveWVyUXVlcnlTbmFwc2hvdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7QUFFakIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSx1TkE4RkosVUFBQ0MsRUFBRCxFQUFNO0FBQ2pCQyxPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkMsS0FBekIsQ0FBK0IsTUFBL0I7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLGlCQUFTLEVBQUdKO0FBQWIsT0FBZDs7QUFDQUssYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBTCxDQUFXSCxTQUF2QjtBQUNILEtBbEdrQjs7QUFBQSxxTkFtR0YsVUFBQ0osRUFBRCxFQUFRO0FBQ2pCLFlBQUtHLFFBQUwsQ0FBYztBQUFDSyxlQUFPLEVBQUdSO0FBQVgsT0FBZDs7QUFDQSxVQUFJUyxRQUFRLEdBQUdDLGdFQUFZLEVBQTNCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsVUFBRztBQUNDRixnQkFBUSxDQUFDRyxTQUFULEdBQXFCQyxVQUFyQixDQUFnQyxLQUFoQyxFQUF1Q0MsR0FBdkMsQ0FBMkNkLEVBQTNDLEVBQStDZSxHQUEvQyxHQUNBQyxJQURBLENBQ0ssVUFBQ0MsUUFBRCxFQUFZO0FBQUE7O0FBQ2JOLGNBQUksR0FBR00sUUFBUSxDQUFDTixJQUFULEVBQVA7QUFDQU4saUJBQU8sQ0FBQ0MsR0FBUixDQUFZSyxJQUFaOztBQUNBLGdCQUFLUixRQUFMO0FBRUplLGlCQUFLLEVBQUNQLElBQUksQ0FBQ08sS0FGUDtBQUdKQyxzQkFBVSxFQUFDUixJQUFJLENBQUNRLFVBSFo7QUFJSkMsd0JBQVksRUFBQ1QsSUFBSSxDQUFDUyxZQUpkO0FBS0pDLHdCQUFZLEVBQUNWLElBQUksQ0FBQ1UsWUFMZDtBQU1KQyxtQkFBTyxFQUFDWCxJQUFJLENBQUNXLE9BTlQ7QUFPSkMseUJBQWEsRUFBQ1osSUFBSSxDQUFDWSxhQVBmO0FBUUpDLHFCQUFTLEVBQUNiLElBQUksQ0FBQ2EsU0FSWDtBQVNKQyxrQkFBTSxFQUFHZCxJQUFJLENBQUNjLE1BVFY7QUFVSkMsa0JBQU0sRUFBRWYsSUFBSSxDQUFDZSxNQVZUO0FBV0hDLGlCQUFLLEVBQUNoQixJQUFJLENBQUNnQixLQVhSO0FBWUpDLHNCQUFVLEVBQUNqQixJQUFJLENBQUNpQixVQVpaO0FBYUpDLG1CQUFPLEVBQUNsQixJQUFJLENBQUNrQjtBQWJULGlJQWNHbEIsSUFBSSxDQUFDYyxNQWRSLHVIQWVHZCxJQUFJLENBQUNlLE1BZlIsMEhBZ0JNZixJQUFJLENBQUNtQixTQWhCWCw4SEFpQlVuQixJQUFJLENBQUNvQixhQWpCZixnSUFrQllwQixJQUFJLENBQUNxQixlQWxCakI7QUFxQkgsU0F6QkQ7QUEwQkEzQixlQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0gsT0E1QkQsQ0E0QkMsT0FBTTJCLEtBQU4sRUFBWTtBQUNUNUIsZUFBTyxDQUFDQyxHQUFSLENBQVkyQixLQUFaO0FBQ0g7O0FBQ0Q1QixhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFLQyxLQUFMLENBQVcyQixPQUF2QjtBQUNBakMsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkMsS0FBaEIsQ0FBc0IsTUFBdEI7QUFDSCxLQXhJYzs7QUFBQSxxTkF5SUYsVUFBQ0YsRUFBRCxFQUFRO0FBQ2pCLFlBQUtHLFFBQUwsQ0FBYztBQUFDSyxlQUFPLEVBQUdSO0FBQVgsT0FBZDs7QUFDQSxVQUFJUyxRQUFRLEdBQUdDLGdFQUFZLEVBQTNCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsVUFBRztBQUNDRixnQkFBUSxDQUFDRyxTQUFULEdBQXFCQyxVQUFyQixDQUFnQyxLQUFoQyxFQUF1Q0MsR0FBdkMsQ0FBMkNkLEVBQTNDLEVBQStDZSxHQUEvQyxHQUNDQyxJQURELENBQ00sVUFBQ0MsUUFBRCxFQUFZO0FBQUE7O0FBQ2ROLGNBQUksR0FBR00sUUFBUSxDQUFDTixJQUFULEVBQVA7QUFDQU4saUJBQU8sQ0FBQ0MsR0FBUjtBQUNBRCxpQkFBTyxDQUFDQyxHQUFSLENBQVlLLElBQVo7O0FBQ0EsZ0JBQUtSLFFBQUw7QUFDSWUsaUJBQUssRUFBQ1AsSUFBSSxDQUFDTyxLQURmO0FBRUlDLHNCQUFVLEVBQUNSLElBQUksQ0FBQ1EsVUFGcEI7QUFHSUMsd0JBQVksRUFBQ1QsSUFBSSxDQUFDUyxZQUh0QjtBQUlJQyx3QkFBWSxFQUFDVixJQUFJLENBQUNVLFlBSnRCO0FBS0lDLG1CQUFPLEVBQUNYLElBQUksQ0FBQ1csT0FMakI7QUFNSUMseUJBQWEsRUFBQ1osSUFBSSxDQUFDWSxhQU52QjtBQU9JQyxxQkFBUyxFQUFDYixJQUFJLENBQUNhLFNBUG5CO0FBUUlDLGtCQUFNLEVBQUdkLElBQUksQ0FBQ2MsTUFSbEI7QUFTSUMsa0JBQU0sRUFBR2YsSUFBSSxDQUFDZSxNQVRsQjtBQVVLQyxpQkFBSyxFQUFDaEIsSUFBSSxDQUFDZ0IsS0FWaEI7QUFXSUMsc0JBQVUsRUFBQ2pCLElBQUksQ0FBQ2lCLFVBWHBCO0FBWUlDLG1CQUFPLEVBQUNsQixJQUFJLENBQUNrQjtBQVpqQixrSUFhV2xCLElBQUksQ0FBQ2MsTUFiaEIsd0hBY1dkLElBQUksQ0FBQ2UsTUFkaEIsMkhBZWNmLElBQUksQ0FBQ21CLFNBZm5CLCtIQWdCa0JuQixJQUFJLENBQUNvQixhQWhCdkIsaUlBaUJvQnBCLElBQUksQ0FBQ3FCLGVBakJ6Qjs7QUFtQkEsZ0JBQUtHLE9BQUwsQ0FBYXhCLElBQUksQ0FBQ3lCLE1BQWxCO0FBQ0gsU0F6QkQ7QUEwQkgsT0EzQkQsQ0EyQkMsT0FBTUgsS0FBTixFQUFZO0FBQ1Q1QixlQUFPLENBQUNDLEdBQVIsQ0FBWTJCLEtBQVo7QUFDSDs7QUFDRGhDLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JDLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0gsS0E1S2M7O0FBQUEsb05BNktILFlBQU07QUFDZCxVQUFJTyxRQUFRLEdBQUdDLGdFQUFZLEVBQTNCOztBQUNBLFVBQUc7QUFBQTs7QUFDQ0QsZ0JBQVEsQ0FBQ0csU0FBVCxHQUFxQkMsVUFBckIsQ0FBZ0MsS0FBaEMsRUFBdUNDLEdBQXZDLENBQTJDLE1BQUtQLEtBQUwsQ0FBV0MsT0FBdEQsRUFBK0Q2QixNQUEvRDtBQUNJbkIsZUFBSyxFQUFDLE1BQUtYLEtBQUwsQ0FBV1csS0FEckI7QUFFSUMsb0JBQVUsRUFBQyxNQUFLWixLQUFMLENBQVdZLFVBRjFCO0FBR0lDLHNCQUFZLEVBQUMsTUFBS2IsS0FBTCxDQUFXYSxZQUg1QjtBQUlJQyxzQkFBWSxFQUFDLE1BQUtkLEtBQUwsQ0FBV2MsWUFKNUI7QUFLSUMsaUJBQU8sRUFBQyxNQUFLZixLQUFMLENBQVdlLE9BTHZCO0FBTUlDLHVCQUFhLEVBQUMsTUFBS2hCLEtBQUwsQ0FBV2dCLGFBTjdCO0FBT0lDLG1CQUFTLEVBQUMsTUFBS2pCLEtBQUwsQ0FBV2lCLFNBUHpCO0FBUUlDLGdCQUFNLEVBQUcsTUFBS2xCLEtBQUwsQ0FBV2tCLE1BUnhCO0FBU0lDLGdCQUFNLEVBQUcsTUFBS25CLEtBQUwsQ0FBV21CLE1BVHhCO0FBVUlDLGVBQUssRUFBQyxNQUFLcEIsS0FBTCxDQUFXb0IsS0FWckI7QUFXSUMsb0JBQVUsRUFBQyxNQUFLckIsS0FBTCxDQUFXcUIsVUFYMUI7QUFZSUMsaUJBQU8sRUFBQyxNQUFLdEIsS0FBTCxDQUFXc0I7QUFadkIsc0lBYVcsTUFBS3RCLEtBQUwsQ0FBV2tCLE1BYnRCLDhIQWNXLE1BQUtsQixLQUFMLENBQVdtQixNQWR0QixpSUFlYyxNQUFLbkIsS0FBTCxDQUFXdUIsU0FmekIscUlBZ0JrQixNQUFLdkIsS0FBTCxDQUFXd0IsYUFoQjdCLHVJQWlCb0IsTUFBS3hCLEtBQUwsQ0FBV3lCLGVBakIvQjs7QUFtQkEsY0FBS00sWUFBTDtBQUNILE9BckJELENBcUJDLE9BQU1MLEtBQU4sRUFBWTtBQUNUNUIsZUFBTyxDQUFDQyxHQUFSLENBQVkyQixLQUFaO0FBQ0g7QUFDSixLQXZNYzs7QUFBQSx1TkF3TUosVUFBQ00sS0FBRCxFQUFXO0FBQ3RCLFlBQUtwQyxRQUFMLCtGQUFnQm9DLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUE3QixFQUFxQ0YsS0FBSyxDQUFDQyxNQUFOLENBQWFFLEtBQWxEOztBQUNBLFVBQUdILEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUFiLElBQXFCLFFBQXhCLEVBQWlDLENBQ2hDO0FBQ0osS0E1TWtCOztBQUFBLG9OQTZNUCxZQUFNO0FBQ2QsVUFBSWhDLFFBQVEsR0FBR0MsZ0VBQVksRUFBM0I7O0FBQ0EsVUFBRztBQUNDRCxnQkFBUSxDQUFDRyxTQUFULEdBQXFCQyxVQUFyQixDQUFnQyxLQUFoQyxFQUNDQyxHQURELENBQ0ssTUFBS1AsS0FBTCxDQUFXSCxTQURoQjtBQUdBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjs7QUFDQSxjQUFLcUMsZ0JBQUwsQ0FBc0IsTUFBS3BDLEtBQUwsQ0FBV3FDLE9BQWpDOztBQUNBLGNBQUtOLFlBQUw7QUFDSCxPQVBELENBT0MsT0FBTUwsS0FBTixFQUFZO0FBQ1Q1QixlQUFPLENBQUNDLEdBQVIsQ0FBWTJCLEtBQVo7QUFDSDtBQUVKLEtBMU5rQjs7QUFBQSxzTkE0TkwsVUFBQ1ksVUFBRCxFQUFnQjtBQUMxQixVQUFNQyxTQUFTLEdBQUcsTUFBSy9DLEtBQUwsQ0FBV2dELFFBQTdCO0FBQ0EsVUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EzQyxhQUFPLENBQUNDLEdBQVIsQ0FBWXVDLFVBQVo7QUFDQUMsZUFBUyxJQUFJQSxTQUFTLENBQUNHLEdBQVYsQ0FBYyxVQUFBQyxTQUFTLEVBQUk7QUFDcEMsWUFBR0EsU0FBUyxDQUFDbEQsRUFBVixJQUFnQjZDLFVBQW5CLEVBQThCO0FBQzFCRyxzQkFBWSxHQUFHRSxTQUFTLENBQUN2QyxJQUFWLENBQWV3QyxNQUE5QjtBQUVIO0FBQ0osT0FMWSxDQUFiO0FBTUE5QyxhQUFPLENBQUNDLEdBQVIsQ0FBWTBDLFlBQVo7QUFDQSxhQUFPQSxZQUFQO0FBQ0YsS0F4T2lCOztBQUFBLHNOQTBPSixVQUFDSSxNQUFELEVBQVNoQixNQUFULEVBQW9CO0FBQy9CLFVBQU1pQixJQUFJLEdBQUcsTUFBS3RELEtBQUwsQ0FBV3NELElBQXhCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQUt2RCxLQUFMLENBQVd1RCxJQUF4QjtBQUNBLFVBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFFQUgsVUFBSSxJQUFJQSxJQUFJLENBQUNKLEdBQUwsQ0FBUyxVQUFBUSxJQUFJLEVBQUU7QUFDbkIsWUFBR0EsSUFBSSxDQUFDekQsRUFBTCxJQUFXb0QsTUFBZCxFQUFxQjtBQUNqQkcsa0JBQVEsR0FBR0UsSUFBSSxDQUFDRixRQUFoQjtBQUNIO0FBQ0osT0FKTyxDQUFSO0FBS0FELFVBQUksSUFBSUEsSUFBSSxDQUFDTCxHQUFMLENBQVMsVUFBQVMsSUFBSSxFQUFFO0FBQ25CLFlBQUdBLElBQUksQ0FBQzFELEVBQUwsSUFBV29DLE1BQWQsRUFBcUI7QUFDakJvQixrQkFBUSxHQUFHRSxJQUFJLENBQUNGLFFBQWhCO0FBQ0g7QUFDSixPQUpPLENBQVI7QUFLRCxhQUFPRCxRQUFRLEdBQUcsR0FBWCxHQUFpQkMsUUFBeEI7QUFDRCxLQTNQaUI7O0FBQUEsa05BNlBULFVBQUN4RCxFQUFELEVBQVE7QUFDZCxVQUFJc0QsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsVUFBRztBQUNDLFlBQUk3QyxRQUFRLEdBQUdDLGdFQUFZLEVBQTNCO0FBQ0FELGdCQUFRLENBQUNHLFNBQVQsR0FBcUJDLFVBQXJCLENBQWdDLE1BQWhDLEVBQ0NDLEdBREQsQ0FDS2QsRUFETCxFQUVDZSxHQUZELEdBR0NDLElBSEQsQ0FHTSxVQUFDMkMsaUJBQUQsRUFBcUI7QUFDdkJMLGNBQUksR0FBR0ssaUJBQWlCLENBQUNoRCxJQUFsQixFQUFQOztBQUNBLGdCQUFLUixRQUFMLENBQWM7QUFBQ3FELG9CQUFRLEVBQUdGLElBQUksQ0FBQ0U7QUFBakIsV0FBZDtBQUNMLFNBTkM7QUFPSCxPQVRELENBU0MsT0FBTXZCLEtBQU4sRUFBWTtBQUNUNUIsZUFBTyxDQUFDQyxHQUFSLENBQVkyQixLQUFaO0FBQ0g7QUFDSixLQTNRa0I7O0FBQUEscU5BNFFOLFVBQUNNLEtBQUQsRUFBVztBQUNwQixZQUFLcEMsUUFBTCxDQUFjLE1BQUt5RCxhQUFuQjs7QUFDQSxVQUFJQyxNQUFKLEVBQVlDLEtBQVo7QUFDQUQsWUFBTSxHQUFHRSxRQUFRLENBQUNDLG9CQUFULENBQThCLE9BQTlCLENBQVQ7O0FBQ0EsV0FBS0YsS0FBSyxHQUFHLENBQWIsRUFBZ0JBLEtBQUssR0FBR0QsTUFBTSxDQUFDSSxNQUEvQixFQUF1QyxFQUFFSCxLQUF6QyxFQUFnRDtBQUM1Q0QsY0FBTSxDQUFDQyxLQUFELENBQU4sQ0FBY3BCLEtBQWQsR0FBc0IsRUFBdEI7QUFDSDs7QUFDRHFCLGNBQVEsQ0FBQ0csY0FBVCxDQUF3QixXQUF4QixFQUFxQ3hCLEtBQXJDLEdBQTZDLEVBQTdDO0FBQ0FxQixjQUFRLENBQUNHLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUN4QixLQUF6QyxHQUFpRCxFQUFqRDtBQUNBcUIsY0FBUSxDQUFDRyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ3hCLEtBQTNDLEdBQW1ELEVBQW5EO0FBR0F6QyxPQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ2tFLFVBQWxDLENBQTZDLFVBQTdDO0FBQ0FsRSxPQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1FLElBQTlCLENBQW1DLFVBQW5DLEVBQThDLFVBQTlDO0FBQ0FuRSxPQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ2tFLFVBQWpDLENBQTRDLFVBQTVDO0FBQ0FsRSxPQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1FLElBQTdCLENBQWtDLFVBQWxDLEVBQTZDLFVBQTdDO0FBQ0FuRSxPQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QmtFLFVBQTVCLENBQXVDLFVBQXZDO0FBQ0FsRSxPQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qm1FLElBQXhCLENBQTZCLFVBQTdCLEVBQXdDLFVBQXhDO0FBQ0FuRSxPQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QmtFLFVBQTVCLENBQXVDLFVBQXZDO0FBQ0FsRSxPQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qm1FLElBQXhCLENBQTZCLFVBQTdCLEVBQXdDLFVBQXhDO0FBQ0gsS0FoU2tCOztBQUFBLGtOQWtTVCxVQUFDN0IsS0FBRCxFQUFXO0FBQ2pCdEMsT0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJtRSxJQUE5QixDQUFtQyxVQUFuQyxFQUE4QyxVQUE5QztBQUNBbkUsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJtRSxJQUE3QixDQUFrQyxVQUFsQyxFQUE2QyxVQUE3QztBQUNBbkUsT0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JtRSxJQUF4QixDQUE2QixVQUE3QixFQUF3QyxVQUF4QztBQUNBbkUsT0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JtRSxJQUF4QixDQUE2QixVQUE3QixFQUF3QyxVQUF4QztBQUNILEtBdlNrQjs7QUFFZixVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHlHQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0JDLDRDQUFLLENBQUNDLFNBQU4sRUFBcEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBS25FLEtBQUwsR0FBYTtBQUNUQyxhQUFPLEVBQUcsRUFERDtBQUVUSixlQUFTLEVBQUcsRUFGSDtBQUdUYyxXQUFLLEVBQUMsRUFIRztBQUlUUyxXQUFLLEVBQUMsRUFKRztBQUtUUCxrQkFBWSxFQUFDLEVBTEo7QUFNVEMsa0JBQVksRUFBQyxFQU5KO0FBT1RPLGdCQUFVLEVBQUMsRUFQRjtBQVFUTixhQUFPLEVBQUMsRUFSQztBQVNUTyxhQUFPLEVBQUMsRUFUQztBQVVUSCxZQUFNLEVBQUMsRUFWRTtBQVdURCxZQUFNLEVBQUMsRUFYRTtBQVlURixtQkFBYSxFQUFDLEVBWkw7QUFhVFMscUJBQWUsRUFBQyxFQWJQO0FBY1RSLGVBQVMsRUFBQyxFQWREO0FBZVRPLG1CQUFhLEVBQUMsRUFmTDtBQWdCVFosZ0JBQVUsRUFBQyxFQWhCRjtBQWlCVFcsZUFBUyxFQUFDLEVBakJEO0FBa0JUMEIsY0FBUSxFQUFHLEVBbEJGO0FBbUJUbUIsVUFBSSxFQUFHNUUsS0FBSyxDQUFDNkUsR0FBTixJQUFhLEVBbkJYO0FBb0JUQyxZQUFNLEVBQUc5RSxLQUFLLENBQUNzRCxJQXBCTjtBQXFCVFAsZUFBUyxFQUFHL0MsS0FBSyxDQUFDZ0QsUUFBTixJQUFrQixFQXJCckI7QUFzQlQrQixXQUFLLEVBQUcvRSxLQUFLLENBQUN1RCxJQUFOLElBQWM7QUF0QmIsS0FBYjtBQUxlO0FBNkJsQjs7Ozt3Q0FDbUI7QUFDaEIsV0FBS3lCLG1CQUFMO0FBQ0g7OzswQ0FFcUI7QUFDcEIsV0FBS0wsVUFBTCxHQUFrQnpFLENBQUMsQ0FBQyxLQUFLc0UsWUFBTCxDQUFrQlMsT0FBbkIsQ0FBRCxDQUE2QkMsU0FBN0IsQ0FBdUM7QUFDckRDLGFBQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FBRDtBQUQ4QyxPQUF2QyxDQUFsQjtBQUdEOzs7bUNBRWM7QUFDYixXQUFLUixVQUFMLENBQWdCUyxLQUFoQjtBQUNBLFVBQU1DLElBQUksR0FBRyxJQUFiO0FBQ0F0RixhQUFPLENBQ0p1RixlQURILEdBRUdyRSxJQUZILENBRVEsVUFBQ3NFLFFBQUQsRUFBYztBQUNsQkYsWUFBSSxDQUFDakYsUUFBTCxDQUFjO0FBQ1p3RSxjQUFJLEVBQUVXLFFBQVEsQ0FBQ1Y7QUFESCxTQUFkLEVBRGtCLENBSWxCO0FBQ0QsT0FQSCxFQVFHTixJQVJILENBUVEsSUFSUjtBQVNEOzs7NkJBcVBNO0FBQUE7QUFBQTs7QUFDUCxVQUFNTyxNQUFNLEdBQUcsS0FBS3RFLEtBQUwsQ0FBV3NFLE1BQTFCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLEtBQUt2RSxLQUFMLENBQVd1RSxLQUF6QjtBQUNBLGFBQ0ksbUVBRVI7QUFBTSxpQkFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDUTtBQUFLLGlCQUFTLEVBQUMsb0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQTRCLFlBQUksRUFBQyxXQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUk7QUFBUSxpQkFBUyxFQUFDLHdDQUFsQjtBQUEyRCxVQUFFLEVBQUMsZUFBOUQ7QUFBOEUsWUFBSSxFQUFDLEdBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBdUY7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF2RixDQUZKLEVBSUk7QUFBTSxpQkFBUyxFQUFDLHdFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksaUJBQVMsRUFBQyw0QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSSxpQkFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsMEJBQWI7QUFBd0MsVUFBRSxFQUFDLGNBQTNDO0FBQTBELFlBQUksRUFBQyxHQUEvRDtBQUFtRSxZQUFJLEVBQUMsUUFBeEU7QUFBaUYsdUJBQVksVUFBN0Y7QUFBd0cseUJBQWMsTUFBdEg7QUFBNkgseUJBQWMsT0FBM0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFtSjtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFuSixDQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDLG1DQUFmO0FBQW1ELDJCQUFnQixjQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBNkIsWUFBSSxFQUFDLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFFSTtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUE2QixZQUFJLEVBQUMsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixFQUdJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEosRUFJSTtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUE2QixZQUFJLEVBQUMsT0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixDQUZKLENBREosQ0FESixDQURKLENBSkosQ0FEUixFQXVCUTtBQUFLLFVBQUUsRUFBQyxlQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLFVBQUUsRUFBQyxtQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLHNDQUFmO0FBQXNELFVBQUUsRUFBQyxrQkFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBRyxpQkFBUyxFQUFDLFVBQWI7QUFBd0IsWUFBSSxFQUFDLFdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFrQztBQUFHLGlCQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFsQyxDQURKLGNBRkosRUFPSTtBQUFHLGlCQUFTLEVBQUMsb0JBQWI7QUFBa0MsWUFBSSxFQUFDLEdBQXZDO0FBQTJDLHVCQUFZLFVBQXZEO0FBQWtFLHVCQUFZLGdCQUE5RTtBQUErRix5QkFBYyxPQUE3RztBQUFxSCx5QkFBYyxlQUFuSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0M7QUFBRyxpQkFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBbEMsQ0FESixXQUdJO0FBQUssaUJBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTJDO0FBQUcsaUJBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTNDLENBSEosQ0FQSixFQVlJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQTBCLFVBQUUsRUFBQyxlQUE3QjtBQUE2QywyQkFBZ0IsWUFBN0Q7QUFBMEUsdUJBQVksbUJBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsc0NBQWY7QUFBc0QsVUFBRSxFQUFDLHVCQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLG9CQUFiO0FBQWtDLFlBQUksRUFBQyxHQUF2QztBQUEyQyx1QkFBWSxVQUF2RDtBQUFrRSx1QkFBWSxvQkFBOUU7QUFBbUcseUJBQWMsT0FBakg7QUFBeUgseUJBQWMsbUJBQXZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRUk7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBMkM7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBM0MsQ0FGSixDQURKLEVBS0k7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBMEIsVUFBRSxFQUFDLG1CQUE3QjtBQUFpRCwyQkFBZ0IsWUFBakU7QUFBOEUsdUJBQVksd0JBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQXdCLFlBQUksRUFBQyxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUk7QUFBRyxpQkFBUyxFQUFDLFVBQWI7QUFBd0IsWUFBSSxFQUFDLFVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosRUFHSTtBQUFHLGlCQUFTLEVBQUMsVUFBYjtBQUF3QixZQUFJLEVBQUMsVUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFISixDQURKLENBTEosQ0FESixDQVpKLENBREosQ0FESixDQURKLENBREosRUFxQ0k7QUFBSyxVQUFFLEVBQUMsdUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosRUFFSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0k7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosRUFFSTtBQUFLLGlCQUFTLEVBQUMsK0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxpQ0FBYjtBQUErQyxZQUFJLEVBQUMsVUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQUVJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWtDO0FBQUcsaUJBQVMsRUFBQyxvQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQWxDLENBRkosQ0FGSixDQURKLENBSEosQ0FGSixFQW1CSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDaEI7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQU8sV0FBRyxFQUFFLEtBQUtQLFlBQWpCO0FBQStCLGlCQUFTLEVBQUMsOEJBQXpDO0FBQXdFLGFBQUssRUFBRTtBQUFDZ0IsZUFBSyxFQUFDLE1BQUk7QUFBWCxTQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1k7QUFBTyxpQkFBUyxFQUFDLGNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEUixFQUVRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRlIsRUFHUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhSLEVBSVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKUixFQUtRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTFIsRUFNUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5SLENBREEsQ0FEWixFQVdZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxLQUFLaEYsS0FBTCxDQUFXb0UsSUFBWCxDQUFnQjFCLEdBQWhCLENBQW9CLFVBQUF1QyxHQUFHO0FBQUEsZUFDcEI7QUFBSSxhQUFHLEVBQUVBLEdBQUcsQ0FBQ3hGLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS3dGLEdBQUcsQ0FBQ3RFLEtBQVQsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS3NFLEdBQUcsQ0FBQ3JFLFVBQVQsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS3FFLEdBQUcsQ0FBQzlELE1BQVQsQ0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSzhELEdBQUcsQ0FBQ3BFLFlBQVQsT0FBd0JvRSxHQUFHLENBQUNuRSxZQUE1QixDQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLbUUsR0FBRyxDQUFDNUQsVUFBVCxDQUxKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBRztBQUFHLGlCQUFPLEVBQUU7QUFBQSxtQkFBSSxNQUFJLENBQUM2RCxVQUFMLENBQWdCRCxHQUFHLENBQUN4RixFQUFwQixDQUFKO0FBQUEsV0FBWjtBQUF5QyxtQkFBUyxFQUFDLGtDQUFuRDtBQUFzRixlQUFLLEVBQUMsTUFBNUY7QUFBbUcsZUFBSyxFQUFFO0FBQUMwRixpQkFBSyxFQUFFLGtCQUFSO0FBQTRCQyxrQkFBTSxFQUFDO0FBQW5DLFdBQTFHO0FBQXlKLDBCQUFhLE9BQXRLO0FBQThLLHlCQUFZLFNBQTFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUgsQ0FESixXQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBRztBQUFHLGlCQUFPLEVBQUU7QUFBQSxtQkFBSSxNQUFJLENBQUNDLFVBQUwsQ0FBZ0JKLEdBQUcsQ0FBQ3hGLEVBQXBCLENBQUo7QUFBQSxXQUFaO0FBQXlDLG1CQUFTLEVBQUMsa0NBQW5EO0FBQXNGLGVBQUssRUFBQyxNQUE1RjtBQUFtRyxlQUFLLEVBQUU7QUFBQzBGLGlCQUFLLEVBQUUsUUFBUjtBQUFrQkMsa0JBQU0sRUFBQztBQUF6QixXQUExRztBQUErSSwwQkFBYSxPQUE1SjtBQUFvSyx5QkFBWSxTQUFoTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFILENBRkosV0FHcEI7QUFBRyxpQkFBTyxFQUFFO0FBQUEsbUJBQUksTUFBSSxDQUFDRSxZQUFMLENBQWtCTCxHQUFHLENBQUN4RixFQUF0QixDQUFKO0FBQUEsV0FBWjtBQUEyQyxtQkFBUyxFQUFDLG9DQUFyRDtBQUEwRixlQUFLLEVBQUMsUUFBaEc7QUFBMEcsZUFBSyxFQUFFO0FBQUMwRixpQkFBSyxFQUFFLEtBQVI7QUFBZUMsa0JBQU0sRUFBQztBQUF0QixXQUFqSDtBQUFtSiwwQkFBYSxPQUFoSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhvQixVQU5KLENBRG9CO0FBQUEsT0FBdkIsQ0FERCxDQVhaLENBRkEsQ0FEZ0IsQ0FEQSxFQW9DdkI7QUFBSyxVQUFFLEVBQUMsV0FBUjtBQUFvQixpQkFBUyxFQUFDLFlBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSSxpQkFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERCxFQUVDO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQyxPQUFoQztBQUF3Qyx3QkFBYSxPQUFyRDtBQUE2RCx1QkFBWSxNQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZELENBREYsRUFLRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ2U7QUFBTyxpQkFBUyxFQUFDLHNCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUwsRUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLEtBQUtwRixLQUFMLENBQVdXLEtBQWhCLENBQXZCLENBREwsRUFFSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBSixFQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQU0sS0FBSzRFLFdBQUwsQ0FBaUIsS0FBS3ZGLEtBQUwsQ0FBV3NDLFVBQTVCLENBQU4sQ0FBNUIsQ0FGTCxFQUdLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFKLEVBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSyxLQUFLdEMsS0FBTCxDQUFXcUIsVUFBaEIsQ0FBMUIsQ0FITCxFQUlLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFMLEVBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTSxLQUFLckIsS0FBTCxDQUFXb0IsS0FBakIsQ0FBM0IsQ0FKTCxFQUtLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFMLEVBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTSxLQUFLcEIsS0FBTCxDQUFXc0IsT0FBakIsQ0FBcEIsQ0FMTCxFQU1LO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFMLE9BQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTSxLQUFLdEIsS0FBTCxDQUFXdUIsU0FBakIsUUFBOEIsS0FBS2lFLFdBQUwsQ0FBaUIsS0FBS3hGLEtBQUwsQ0FBV21CLE1BQTVCLEVBQW1DLEtBQUtuQixLQUFMLENBQVdrQixNQUE5QyxDQUE5QixNQUF2QixDQU5MLEVBT0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQUosT0FBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLEtBQUtsQixLQUFMLENBQVdZLFVBQWhCLENBQWhDLENBUEwsRUFRSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTCxFQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQU0sS0FBS1osS0FBTCxDQUFXYSxZQUFqQixPQUFnQyxLQUFLYixLQUFMLENBQVdjLFlBQTNDLFNBQXJCLENBUkwsRUFTSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBSixFQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQU0sS0FBS2QsS0FBTCxDQUFXZ0IsYUFBakIsbUJBQTFCLENBVEwsRUFVSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBSixFQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUssS0FBS2hCLEtBQUwsQ0FBV2UsT0FBaEIsQ0FBM0IsQ0FWTCxFQVdLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUFMLEVBQXFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTSxLQUFLZixLQUFMLENBQVdpQixTQUFqQixDQUFyQyxDQVhMLEVBWUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUosRUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFNLEtBQUtqQixLQUFMLENBQVd3QixhQUFqQixDQUE3QixDQVpMLEVBYUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQUwsRUFBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFNLEtBQUt4QixLQUFMLENBQVd5QixlQUFqQixDQUFoQyxDQWJMLENBRGYsQ0FMRixFQXVCRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLG1CQUEvQjtBQUFtRCx3QkFBYSxPQUFoRTtBQUF3RSxhQUFLLEVBQUMsUUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELEVBRW1CO0FBQUcsZUFBTyxFQUFFO0FBQUEsaUJBQUksTUFBSSxDQUFDNkQsWUFBTCxDQUFrQixNQUFJLENBQUN0RixLQUFMLENBQVdQLEVBQTdCLENBQUo7QUFBQSxTQUFaO0FBQWtELHdCQUFhLE9BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBdUU7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF2RSxDQUZuQixDQXZCRixDQURELENBREQsQ0FwQ3VCLEVBcUVoQjtBQUFLLFVBQUUsRUFBQyxXQUFSO0FBQW9CLGlCQUFTLEVBQUMsWUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNRO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFJLGlCQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURKLEVBRUk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLE9BQWhDO0FBQXdDLHdCQUFhLE9BQXJEO0FBQTZELGVBQU8sRUFBRSxLQUFLZ0csVUFBM0U7QUFBdUYsdUJBQVksTUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixDQURSLEVBS1E7QUFBTSxjQUFNLEVBQUMsR0FBYjtBQUFpQixjQUFNLEVBQUMsTUFBeEI7QUFBK0IsYUFBSyxFQUFFO0FBQUNULGVBQUssRUFBRSxNQUFJO0FBQVosU0FBdEM7QUFBd0QsZ0JBQVEsRUFBRSxLQUFLVSxNQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxZQUFJLEVBQUMsTUFBWDtBQUFrQixjQUFNLEVBQUMsTUFBekI7QUFBZ0MsY0FBTSxFQUFDLEVBQXZDO0FBQTBDLDBCQUFlLE9BQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFNLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQU0sS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBTSwwQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR1E7QUFBSyxpQkFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFUTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUUsRUFBQyxPQUF0QjtBQUE4QixpQkFBTSxjQUFwQztBQUFtRCxZQUFJLEVBQUMsT0FBeEQ7QUFBZ0UsbUJBQVcsRUFBQyxxQkFBNUU7QUFBa0csZ0JBQVEsRUFBRSxLQUFLNUIsWUFBakg7QUFBK0gsYUFBSyxFQUFFLEtBQUs5RCxLQUFMLENBQVdXLEtBQWpKO0FBQXdKLGdCQUFRLE1BQWhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQUZSLEVBT1E7QUFBSyxpQkFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQUksWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLEVBRUk7QUFBUSxZQUFJLEVBQUMsWUFBYjtBQUEwQixVQUFFLEVBQUMsWUFBN0I7QUFBMEMsZUFBTyxFQUFFLEtBQUtnRixPQUF4RDtBQUFpRSxpQkFBUyxFQUFDLGNBQTNFO0FBQTBGLGdCQUFRLEVBQUUsS0FBSzdCLFlBQXpHO0FBQXVILGFBQUssRUFBRSxLQUFLOUQsS0FBTCxDQUFXNEYsYUFBekk7QUFBd0osZ0JBQVEsTUFBaEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNSO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FEUSxFQUVSO0FBQVEsYUFBSyxFQUFDLFdBQWQ7QUFBMEIsZ0JBQVEsRUFBRSxLQUFLNUYsS0FBTCxDQUFXNkYsZ0JBQVgsSUFBK0IsV0FBL0IsR0FBZ0QsVUFBaEQsR0FBK0QsT0FBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGUSxFQUdSO0FBQVEsYUFBSyxFQUFDLFdBQWQ7QUFBMEIsZ0JBQVEsRUFBRSxLQUFLN0YsS0FBTCxDQUFXNkYsZ0JBQVgsSUFBK0IsV0FBL0IsR0FBOEMsVUFBOUMsR0FBNkQsT0FBakc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIUSxDQUZKLENBUFIsRUFlUTtBQUFPLGVBQUksUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWZSLEVBZ0JRO0FBQUssaUJBQU0sS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0o7QUFBSyxpQkFBTSxvQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUUsRUFBQyxZQUF0QjtBQUFtQyxpQkFBTSxjQUF6QztBQUF3RCxZQUFJLEVBQUMsY0FBN0Q7QUFBNEUsbUJBQVcsRUFBQyxzQkFBeEY7QUFBK0csZ0JBQVEsRUFBRSxLQUFLL0IsWUFBOUg7QUFBNEksYUFBSyxFQUFFLEtBQUs5RCxLQUFMLENBQVdhLFlBQTlKO0FBQTRLLGdCQUFRLE1BQXBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEQSxDQURKLENBREksRUFPSjtBQUFLLGlCQUFNLG9CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBRSxFQUFDLFlBQXRCO0FBQW1DLGlCQUFNLGNBQXpDO0FBQXdELFlBQUksRUFBQyxjQUE3RDtBQUE0RSxtQkFBVyxFQUFDLHNCQUF4RjtBQUFnSCxnQkFBUSxFQUFFLEtBQUtpRCxZQUEvSDtBQUE2SSxhQUFLLEVBQUUsS0FBSzlELEtBQUwsQ0FBV2MsWUFBL0o7QUFBNkssZ0JBQVEsTUFBckw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURBLENBREosQ0FQSSxDQWhCUixFQTRCUTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosRUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUUsRUFBQyxTQUF0QjtBQUFnQyxpQkFBTSxjQUF0QztBQUFxRCxZQUFJLEVBQUMsU0FBMUQ7QUFBb0UsbUJBQVcsRUFBQyxxQkFBaEY7QUFBc0csZ0JBQVEsRUFBRSxLQUFLZ0QsWUFBckg7QUFBbUksYUFBSyxFQUFFLEtBQUs5RCxLQUFMLENBQVdlLE9BQXJKO0FBQThKLGdCQUFRLE1BQXRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQTVCUixFQWdDUTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxlQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosRUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUUsRUFBQyxlQUF0QjtBQUFzQyxpQkFBTSxjQUE1QztBQUEyRCxZQUFJLEVBQUMsZUFBaEU7QUFBZ0YsbUJBQVcsRUFBQyxvQkFBNUY7QUFBaUgsZ0JBQVEsRUFBRSxLQUFLK0MsWUFBaEk7QUFBOEksYUFBSyxFQUFFLEtBQUs5RCxLQUFMLENBQVdnQixhQUFoSztBQUErSyxnQkFBUSxNQUF2TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FoQ1IsRUFvQ1E7QUFBSyxpQkFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQUksV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKLEVBRUk7QUFBUSxZQUFJLEVBQUMsV0FBYjtBQUF5QixVQUFFLEVBQUMsV0FBNUI7QUFBd0MsZUFBTyxFQUFFLEtBQUsyRSxPQUF0RDtBQUErRCxnQkFBUSxFQUFFLEtBQUs3QixZQUE5RTtBQUE0RixhQUFLLEVBQUUsS0FBSzlELEtBQUwsQ0FBVzRGLGFBQTlHO0FBQTZILGlCQUFTLEVBQUMsY0FBdkk7QUFBc0osZ0JBQVEsTUFBOUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNKO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FESSxFQUVKO0FBQVEsYUFBSyxFQUFDLEdBQWQ7QUFBa0IsZ0JBQVEsRUFBRSxLQUFLNUYsS0FBTCxDQUFXOEYsYUFBWCxJQUE0QixHQUE1QixHQUFtQyxVQUFuQyxHQUFrRCxPQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkksRUFHSjtBQUFRLGFBQUssRUFBQyxHQUFkO0FBQWtCLGdCQUFRLEVBQUUsS0FBSzlGLEtBQUwsQ0FBVzhGLGFBQVgsSUFBNEIsR0FBNUIsR0FBbUMsVUFBbkMsR0FBa0QsT0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhJLEVBSUo7QUFBUSxhQUFLLEVBQUMsR0FBZDtBQUFrQixnQkFBUSxFQUFFLEtBQUs5RixLQUFMLENBQVc4RixhQUFYLElBQTRCLEdBQTVCLEdBQW1DLFVBQW5DLEdBQWtELE9BQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSSxDQUZKLENBcENSLEVBNkNRO0FBQUssaUJBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBRSxFQUFDLE9BQXRCO0FBQThCLGlCQUFNLGNBQXBDO0FBQW1ELFlBQUksRUFBQyxPQUF4RDtBQUFnRSxtQkFBVyxFQUFDLGNBQTVFO0FBQTJGLGdCQUFRLEVBQUUsS0FBS2hDLFlBQTFHO0FBQXdILGFBQUssRUFBRSxLQUFLOUQsS0FBTCxDQUFXb0IsS0FBMUk7QUFBaUosZ0JBQVEsTUFBeko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBN0NSLENBSFIsQ0FESixFQTJEQTtBQUFLLGlCQUFNLDBCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDUTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUssaUJBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ3dCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRHhCLEVBRXdCO0FBQU8sWUFBSSxFQUFDLGdCQUFaO0FBQTZCLGlCQUFNLGNBQW5DO0FBQWtELGFBQUssRUFBQyxVQUF4RDtBQUFtRSxZQUFJLEVBQUMsWUFBeEU7QUFBcUYsZ0JBQVEsRUFBRSxLQUFLMEM7QUFBcEcsa0hBQXlILEtBQUs5RCxLQUFMLENBQVdxQixVQUFwSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZ4QixDQURBLEVBS0k7QUFBSyxpQkFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDWTtBQUFPLGVBQUksU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURaLEVBRVk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFFLEVBQUMsU0FBdEI7QUFBZ0MsaUJBQU0sY0FBdEM7QUFBcUQsWUFBSSxFQUFDLFNBQTFEO0FBQW9FLG1CQUFXLEVBQUMsZUFBaEY7QUFBZ0csZ0JBQVEsRUFBRSxLQUFLeUMsWUFBL0c7QUFBNkgsYUFBSyxFQUFFLEtBQUs5RCxLQUFMLENBQVdzQixPQUEvSTtBQUF3SixnQkFBUSxNQUFoSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRlosQ0FMSixFQVNZO0FBQUssaUJBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUVJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsVUFBRSxFQUFDLE1BQXpCO0FBQWdDLGlCQUFTLEVBQUMsY0FBMUM7QUFBeUQsZUFBTyxFQUFFLEtBQUtxRSxPQUF2RTtBQUFnRixnQkFBUSxFQUFFLEtBQUs3QixZQUEvRjtBQUE2RyxnQkFBUSxNQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1I7QUFBUSxnQkFBUSxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURRLEVBRVAsS0FBSzlELEtBQUwsQ0FBV3VFLEtBQVgsQ0FBaUI3QixHQUFqQixDQUFxQixVQUFBUyxJQUFJO0FBQUEsZUFBSyxNQUFJLENBQUNuRCxLQUFMLENBQVdrQixNQUFYLElBQXFCaUMsSUFBSSxDQUFDMUQsRUFBMUIsR0FDM0I7QUFBUSxlQUFLLEVBQUUwRCxJQUFJLENBQUMxRCxFQUFwQjtBQUF3QixrQkFBUSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWtDMEQsSUFBSSxDQUFDRixRQUF2QyxDQUQyQixHQUUzQjtBQUFRLGVBQUssRUFBRUUsSUFBSSxDQUFDMUQsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF5QjBELElBQUksQ0FBQ0YsUUFBOUIsQ0FGc0I7QUFBQSxPQUF6QixDQUZPLENBRkosQ0FUWixFQW1CWTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFFSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLFVBQUUsRUFBQyxNQUF6QjtBQUFnQyxpQkFBUyxFQUFDLGNBQTFDO0FBQXlELGVBQU8sRUFBRSxLQUFLMEMsT0FBdkU7QUFBZ0YsZ0JBQVEsRUFBRSxLQUFLN0IsWUFBL0Y7QUFBNkcsZ0JBQVEsTUFBckg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNSO0FBQVEsZ0JBQVEsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FEUSxFQUVQUSxNQUFNLElBQUtBLE1BQU0sQ0FBQzVCLEdBQVAsQ0FBVyxVQUFBUSxJQUFJO0FBQUEsZUFBSyxNQUFJLENBQUNsRCxLQUFMLENBQVdtQixNQUFYLElBQXFCK0IsSUFBSSxDQUFDekQsRUFBMUIsR0FDNUI7QUFBUSxlQUFLLEVBQUV5RCxJQUFJLENBQUN6RCxFQUFwQjtBQUF3QixrQkFBUSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWtDeUQsSUFBSSxDQUFDRixRQUF2QyxDQUQ0QixHQUU1QjtBQUFRLGVBQUssRUFBRUUsSUFBSSxDQUFDekQsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF5QnlELElBQUksQ0FBQ0YsUUFBOUIsQ0FGdUI7QUFBQSxPQUFmLENBRkosQ0FGSixDQW5CWixFQStCWTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosRUFFSTtBQUFVLGlCQUFNLGNBQWhCO0FBQStCLFVBQUUsRUFBQyxXQUFsQztBQUE4QyxZQUFJLEVBQUMsV0FBbkQ7QUFBK0QsZ0JBQVEsRUFBRSxLQUFLYyxZQUE5RTtBQUE0RixhQUFLLEVBQUUsS0FBSzlELEtBQUwsQ0FBV3VCLFNBQTlHO0FBQXlILGdCQUFRLE1BQWpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQS9CWixFQXFDWTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosRUFFSTtBQUFVLGlCQUFNLGNBQWhCO0FBQStCLFVBQUUsRUFBQyxlQUFsQztBQUFrRCxZQUFJLEVBQUMsZUFBdkQ7QUFBdUUsZ0JBQVEsRUFBRSxLQUFLdUMsWUFBdEY7QUFBb0csYUFBSyxFQUFFLEtBQUs5RCxLQUFMLENBQVd3QixhQUF0SDtBQUFxSSxnQkFBUSxNQUE3STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FyQ1osRUE0Q1k7QUFBSyxpQkFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQUksTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLEVBRUk7QUFBVSxpQkFBTSxjQUFoQjtBQUFnQyxVQUFFLEVBQUMsaUJBQW5DO0FBQXFELFlBQUksRUFBQyxpQkFBMUQ7QUFBNEUsZ0JBQVEsRUFBRSxLQUFLc0MsWUFBM0Y7QUFBeUcsYUFBSyxFQUFFLEtBQUs5RCxLQUFMLENBQVd5QixlQUEzSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0E1Q1osQ0FEUixDQTNEQSxDQURKLENBREosQ0FESixDQUxSLENBREosQ0FESixDQXJFZ0IsRUEyTWhCO0FBQUssVUFBRSxFQUFDLG9CQUFSO0FBQTZCLGlCQUFTLEVBQUMsWUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNOO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNhO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDWDtBQUFJLGlCQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURXLEVBRVg7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLE9BQWhDO0FBQXdDLHdCQUFhLE9BQXJEO0FBQTZELHVCQUFZLE1BQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRlcsQ0FEYixFQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBRG5CLEVBRUM7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQUE1QixDQUZELENBREQsQ0FMRCxFQVdhO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDWDtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUMsbUJBQS9CO0FBQW1ELHdCQUFhLE9BQWhFO0FBQXdFLGFBQUssRUFBQyxRQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRFcsRUFFWDtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUMsZ0JBQS9CO0FBQWdELGFBQUssRUFBQyxRQUF0RDtBQUErRCx3QkFBYSxPQUE1RTtBQUFvRixlQUFPLEVBQUUsS0FBS3NFLFNBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGVyxDQVhiLENBREQsQ0FETSxDQTNNZ0IsQ0FuQkosQ0FESixDQURKLENBckNKLENBdkJSLENBRlEsQ0FESjtBQW9VRjs7Ozs7Ozs7Ozs7dUJBempCNkI1RixnRUFBWSxFOzs7QUFBN0JELHdCOzt1QkFDeUJBLFFBQVEsQ0FDbENHLFNBRDBCLEdBRTFCQyxVQUYwQixDQUVmLEtBRmUsRUFHMUJFLEdBSDBCLEU7OztBQUF6QndGLGdDO0FBSUE1QixvQixHQUFPNEIsZ0JBQWdCLENBQUNDLElBQWpCLENBQXNCdkQsR0FBdEIsQ0FBMEIsVUFBQ25DLEdBQUQ7QUFBQSx5REFDaENBLEdBQUcsQ0FBQ0gsSUFBSixFQURnQztBQUVuQ1gsc0JBQUUsRUFBRWMsR0FBRyxDQUFDZDtBQUYyQjtBQUFBLGlCQUExQixDOzt1QkFJbUJTLFFBQVEsQ0FDbkNHLFNBRDJCLEdBRTNCQyxVQUYyQixDQUVoQixNQUZnQixFQUczQkUsR0FIMkIsRTs7O0FBQTFCNEMsaUM7QUFJQW1CLHFCLEdBQVFuQixpQkFBaUIsQ0FBQzZDLElBQWxCLENBQXVCdkQsR0FBdkIsQ0FBMkIsVUFBQ25DLEdBQUQ7QUFBQSx5REFDbENBLEdBQUcsQ0FBQ0gsSUFBSixFQURrQztBQUVyQ1gsc0JBQUUsRUFBRWMsR0FBRyxDQUFDZDtBQUY2QjtBQUFBLGlCQUEzQixDOzt1QkFLa0JTLFFBQVEsQ0FDdkNHLFNBRCtCLEdBRS9CQyxVQUYrQixDQUVwQixNQUZvQixFQUcvQkUsR0FIK0IsRTs7O0FBQTFCMEYsaUM7QUFJQTVCLHNCLEdBQVM0QixpQkFBaUIsQ0FBQ0QsSUFBbEIsQ0FBdUJ2RCxHQUF2QixDQUEyQixVQUFDbkMsR0FBRDtBQUFBLHlEQUNuQ0EsR0FBRyxDQUFDSCxJQUFKLEVBRG1DO0FBRXRDWCxzQkFBRSxFQUFFYyxHQUFHLENBQUNkO0FBRjhCO0FBQUEsaUJBQTNCLEM7O3VCQUtxQlMsUUFBUSxDQUN2Q0csU0FEK0IsR0FFL0JDLFVBRitCLENBRXBCLFVBRm9CLEVBRy9CNkYsS0FIK0IsQ0FHekIsRUFIeUIsRUFJL0IzRixHQUorQixFOzs7QUFBOUI0RixxQztBQUtBN0QseUIsR0FBWTZELHFCQUFxQixDQUFDSCxJQUF0QixDQUEyQnZELEdBQTNCLENBQStCLFVBQUNuQyxHQUFEO0FBQUEseUJBQVU7QUFDdkRILHdCQUFJLEVBQUdHLEdBQUcsQ0FBQ0gsSUFBSixFQURnRDtBQUV2RFgsc0JBQUUsRUFBRWMsR0FBRyxDQUFDZDtBQUYrQyxtQkFBVjtBQUFBLGlCQUEvQixDO2lEQUlYO0FBQUM0RSxxQkFBRyxFQUFHRCxJQUFQO0FBQWFyQixzQkFBSSxFQUFHd0IsS0FBcEI7QUFBMkJ6QixzQkFBSSxFQUFHd0IsTUFBbEM7QUFBMEM5QiwwQkFBUSxFQUFFRDtBQUFwRCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdGc0IwQiw0Q0FBSyxDQUFDb0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZWcxLmpzLmQwOGZlMTdhMmEzNTEyNWI3N2MxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge2xvYWRGaXJlYmFzZX0gZnJvbSAnLi4vbGliL2RiLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpvYkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRhdGF0YWJsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHRoaXMuJGRhdGF0YWJsZSA9IG51bGxcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBlZGl0X2lkIDogJycsXHJcbiAgICAgICAgICAgIGRlbGV0ZV9pZCA6ICcnLFxyXG4gICAgICAgICAgICBKbmFtZTonJyxcclxuICAgICAgICAgICAgSl90ZWw6JycsXHJcbiAgICAgICAgICAgIEpfbWluX3NhbGFyeTonJyxcclxuICAgICAgICAgICAgSl9tYXhfc2FsYXJ5OicnLFxyXG4gICAgICAgICAgICBQb3N0ZWREYXRlOicnLFxyXG4gICAgICAgICAgICBKX2hvdXJzOicnLFxyXG4gICAgICAgICAgICBKX2VtYWlsOicnLFxyXG4gICAgICAgICAgICBKX2NpdHk6JycsXHJcbiAgICAgICAgICAgIEpfYXJlYTonJyxcclxuICAgICAgICAgICAgSl9Xb3JraW5nX0RheTonJyxcclxuICAgICAgICAgICAgSl9RdWFsaWZpY2F0aW9uOicnLFxyXG4gICAgICAgICAgICBKX0pwTGV2ZWw6JycsXHJcbiAgICAgICAgICAgIEpfRGVzY3JpcHRpb246JycsXHJcbiAgICAgICAgICAgIEpfQ29udHJhY3Q6JycsXHJcbiAgICAgICAgICAgIEpfQWRkcmVzczonJyxcclxuICAgICAgICAgICAgYXJlYU5hbWUgOiAnJyxcclxuICAgICAgICAgICAgam9icyA6IHByb3BzLmpvYiB8fCBbXSxcclxuICAgICAgICAgICAgY2l0aWVzIDogcHJvcHMuY2l0eSxcclxuICAgICAgICAgICAgZW1wbG95ZXJzIDogcHJvcHMuZW1wbG95ZXIgfHwgW10sXHJcbiAgICAgICAgICAgIGFyZWFzIDogcHJvcHMuYXJlYSB8fCBbXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGF0YXRhYmxlKClcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplRGF0YXRhYmxlKCkge1xyXG4gICAgICB0aGlzLiRkYXRhdGFibGUgPSAkKHRoaXMuZGF0YXRhYmxlUmVmLmN1cnJlbnQpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICBvcmRlcjogW1szLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hUYWJsZSgpIHtcclxuICAgICAgdGhpcy4kZGF0YXRhYmxlLmNsZWFyKClcclxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGpvYkxpc3RcclxuICAgICAgICAuZ2V0SW5pdGlhbFByb3BzKClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBqb2JzOiByZXNwb25zZS5qb2IsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vIHNlbGYuaW5pdGlhbGl6ZURhdGF0YWJsZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3QgZmlyZWJhc2UgPSBhd2FpdCBsb2FkRmlyZWJhc2UoKSBcclxuICAgICAgICBjb25zdCBqb2JRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiam9iXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBqb2JzID0gam9iUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBjb25zdCBhcmVhUXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImFyZWFcIilcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGFyZWFzID0gYXJlYVF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNpdHlRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAuY29sbGVjdGlvbihcImNpdHlcIilcclxuICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgY2l0aWVzID0gY2l0eVF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcGxveWVyUXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImVtcGxveWVyXCIpXHJcbiAgICAgICAgICAgIC5saW1pdCgxMClcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGVtcGxveWVycyA9IGVtcGxveWVyUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICBkYXRhIDogZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHtqb2IgOiBqb2JzLCBhcmVhIDogYXJlYXMsIGNpdHkgOiBjaXRpZXMsIGVtcGxveWVyOiBlbXBsb3llcnN9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVBhc3NJZCA9IChpZCk9PntcclxuICAgICAgICAkKFwiI2RlbGV0ZUNvbmZpcm1Nb2RhbFwiKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlbGV0ZV9pZCA6IGlkfSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRlbGV0ZV9pZClcclxuICAgIH07ICAgICAgXHJcbiAgICAgICAgdmlld1Bhc3NJZCA9IChpZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlZGl0X2lkIDogaWR9KVxyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2pvYicpLmRvYyhpZCkuZ2V0KCkuXHJcbiAgICAgICAgICAgICAgICB0aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gc25hcHNob3QuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBKbmFtZTpkYXRhLkpuYW1lLFxyXG4gICAgICAgICAgICAgICAgSl9Db250cmFjdDpkYXRhLkpfQ29udHJhY3QsXHJcbiAgICAgICAgICAgICAgICBKX21pbl9zYWxhcnk6ZGF0YS5KX21pbl9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICBKX21heF9zYWxhcnk6ZGF0YS5KX21heF9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICBKX2hvdXJzOmRhdGEuSl9ob3VycyxcclxuICAgICAgICAgICAgICAgIEpfV29ya2luZ19EYXk6ZGF0YS5KX1dvcmtpbmdfRGF5LFxyXG4gICAgICAgICAgICAgICAgSl9KcExldmVsOmRhdGEuSl9KcExldmVsLFxyXG4gICAgICAgICAgICAgICAgSl9hcmVhIDogZGF0YS5KX2FyZWEsXHJcbiAgICAgICAgICAgICAgICBKX2NpdHk6IGRhdGEuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgIEpfdGVsOmRhdGEuSl90ZWwsXHJcbiAgICAgICAgICAgICAgICBQb3N0ZWREYXRlOmRhdGEuUG9zdGVkRGF0ZSxcclxuICAgICAgICAgICAgICAgIEpfZW1haWw6ZGF0YS5KX2VtYWlsLFxyXG4gICAgICAgICAgICAgICAgSl9hcmVhOmRhdGEuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgSl9jaXR5OmRhdGEuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgSl9BZGRyZXNzOmRhdGEuSl9BZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgSl9EZXNjcmlwdGlvbjpkYXRhLkpfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBKX1F1YWxpZmljYXRpb246ZGF0YS5KX1F1YWxpZmljYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGRhdGFcIilcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuam9iTmFtZSlcclxuICAgICAgICAgICAgJChcIiN2aWV3TW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZWRpdFBhc3NJZCA9IChpZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlZGl0X2lkIDogaWR9KVxyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2pvYicpLmRvYyhpZCkuZ2V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gc25hcHNob3QuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBKbmFtZTpkYXRhLkpuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0NvbnRyYWN0OmRhdGEuSl9Db250cmFjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9taW5fc2FsYXJ5OmRhdGEuSl9taW5fc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX21heF9zYWxhcnk6ZGF0YS5KX21heF9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfaG91cnM6ZGF0YS5KX2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX1dvcmtpbmdfRGF5OmRhdGEuSl9Xb3JraW5nX0RheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9KcExldmVsOmRhdGEuSl9KcExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2FyZWEgOiBkYXRhLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9jaXR5IDogZGF0YS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBKX3RlbDpkYXRhLkpfdGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0ZWREYXRlOmRhdGEuUG9zdGVkRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9lbWFpbDpkYXRhLkpfZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfYXJlYTpkYXRhLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9jaXR5OmRhdGEuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0FkZHJlc3M6ZGF0YS5KX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfRGVzY3JpcHRpb246ZGF0YS5KX0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX1F1YWxpZmljYXRpb246ZGF0YS5KX1F1YWxpZmljYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFyZWEoZGF0YS5BUkVBSUQpXHJcbiAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoXCIjZWRpdE1vZGFsXCIpLm1vZGFsKCdzaG93JylcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZUpvYiA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJykuZG9jKHRoaXMuc3RhdGUuZWRpdF9pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBKbmFtZTp0aGlzLnN0YXRlLkpuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfQ29udHJhY3Q6dGhpcy5zdGF0ZS5KX0NvbnRyYWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfbWluX3NhbGFyeTp0aGlzLnN0YXRlLkpfbWluX3NhbGFyeSxcclxuICAgICAgICAgICAgICAgICAgICBKX21heF9zYWxhcnk6dGhpcy5zdGF0ZS5KX21heF9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgSl9ob3Vyczp0aGlzLnN0YXRlLkpfaG91cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9Xb3JraW5nX0RheTp0aGlzLnN0YXRlLkpfV29ya2luZ19EYXksXHJcbiAgICAgICAgICAgICAgICAgICAgSl9KcExldmVsOnRoaXMuc3RhdGUuSl9KcExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfYXJlYSA6IHRoaXMuc3RhdGUuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfY2l0eSA6IHRoaXMuc3RhdGUuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfdGVsOnRoaXMuc3RhdGUuSl90ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgUG9zdGVkRGF0ZTp0aGlzLnN0YXRlLlBvc3RlZERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9lbWFpbDp0aGlzLnN0YXRlLkpfZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9hcmVhOnRoaXMuc3RhdGUuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfY2l0eTp0aGlzLnN0YXRlLkpfY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBKX0FkZHJlc3M6dGhpcy5zdGF0ZS5KX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9EZXNjcmlwdGlvbjp0aGlzLnN0YXRlLkpfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgSl9RdWFsaWZpY2F0aW9uOnRoaXMuc3RhdGUuSl9RdWFsaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFRhYmxlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgICBpZihldmVudC50YXJnZXQubmFtZSA9PSBcIkFSRUFJRFwiKXtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZGVsZXRlSm9iID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdqb2InKVxyXG4gICAgICAgICAgICAuZG9jKHRoaXMuc3RhdGUuZGVsZXRlX2lkKVxyXG4gICAgICAgICAgICAuZGVsZXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVhc2VKb2JDb3VudCh0aGlzLnN0YXRlLmNvbXBhbnkpXHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRhYmxlKCk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGdldEVtcGxveWVyID0gKEVNUExPWUVSSUQpID0+IHtcclxuICAgICAgICBjb25zdCBlbXBsb3llcnMgPSB0aGlzLnByb3BzLmVtcGxveWVyXHJcbiAgICAgICAgbGV0IGVtcGxveWVyTmFtZSA9ICcnXHJcbiAgICAgICAgY29uc29sZS5sb2coRU1QTE9ZRVJJRClcclxuICAgICAgICBlbXBsb3llcnMgJiYgZW1wbG95ZXJzLm1hcChFbXBsb3llcnMgPT4ge1xyXG4gICAgICAgICAgICBpZihFbXBsb3llcnMuaWQgPT0gRU1QTE9ZRVJJRCl7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llck5hbWUgPSBFbXBsb3llcnMuZGF0YS5DX05hbWVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhlbXBsb3llck5hbWUpXHJcbiAgICAgICAgcmV0dXJuIGVtcGxveWVyTmFtZVxyXG4gICAgIH1cclxuXHJcbiAgICAgZ2V0TG9jYXRpb24gPSAoQ0lUWUlELCBBUkVBSUQpID0+IHtcclxuICAgICAgICBjb25zdCBjaXR5ID0gdGhpcy5wcm9wcy5jaXR5XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IHRoaXMucHJvcHMuYXJlYVxyXG4gICAgICAgIGxldCBjaXR5TmFtZSA9ICcnXHJcbiAgICAgICAgbGV0IGFyZWFOYW1lID0gJydcclxuXHJcbiAgICAgICAgY2l0eSAmJiBjaXR5Lm1hcChDaXR5PT57XHJcbiAgICAgICAgICAgIGlmKENpdHkuaWQgPT0gQ0lUWUlEKXtcclxuICAgICAgICAgICAgICAgIGNpdHlOYW1lID0gQ2l0eS5jaXR5TmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBhcmVhICYmIGFyZWEubWFwKEFyZWE9PntcclxuICAgICAgICAgICAgaWYoQXJlYS5pZCA9PSBBUkVBSUQpe1xyXG4gICAgICAgICAgICAgICAgYXJlYU5hbWUgPSBBcmVhLmFyZWFOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgcmV0dXJuIGNpdHlOYW1lICsgXCIsXCIgKyBhcmVhTmFtZVxyXG4gICAgIH1cclxuXHJcbiAgICBnZXRBcmVhID0gKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyZWEgPSB7fVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignYXJlYScpXHJcbiAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbigoYXJlYVF1ZXJ5U25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICBhcmVhID0gYXJlYVF1ZXJ5U25hcHNob3QuZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXJlYU5hbWUgOiBhcmVhLmFyZWFOYW1lfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybV9jbGVhciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsX3N0YXRlKTtcclxuICAgICAgICBsZXQgaW5wdXRzLCBpbmRleDtcclxuICAgICAgICBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dHMubGVuZ3RoOyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgIGlucHV0c1tpbmRleF0udmFsdWUgPSAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSl9BZGRyZXNzJykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSl9EZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0pfUXVhbGlmaWNhdGlvbicpLnZhbHVlID0gJyc7XHJcbiAgICAgICBcclxuICBcclxuICAgICAgICAkKFwiI0pfQ29udHJhY3Qgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjSl9Db250cmFjdCBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAkKFwiI0pfSnBMZXZlbCBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNKX0pwTGV2ZWwgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgJChcIiNjaXR5IG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7IFxyXG4gICAgICAgICQoXCIjYXJlYSBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNhcmVhIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpOyAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBkaXNhYmxlID0gKGV2ZW50KSA9PiB7ICAgXHJcbiAgICAgICAgJChcIiNKX0NvbnRyYWN0IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpOyBcclxuICAgICAgICAkKFwiI0pfSnBMZXZlbCBvcHRpb246Zmlyc3RcIikuYXR0cihcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKTsgXHJcbiAgICAgICAgJChcIiNjaXR5IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICQoXCIjYXJlYSBvcHRpb246Zmlyc3RcIikuYXR0cihcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKTsgXHJcbiAgICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNpdGllcyA9IHRoaXMuc3RhdGUuY2l0aWVzXHJcbiAgICBjb25zdCBhcmVhcyA9IHRoaXMuc3RhdGUuYXJlYXNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbjxib2R5IGNsYXNzTmFtZT1cInNiLW5hdi1maXhlZFwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2ItdG9wbmF2IG5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cImRhc2hib2FyZFwiPkFkbWluPC9hPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBidG4tc20gb3JkZXItMSBvcmRlci1sZy0wXCIgaWQ9XCJzaWRlYmFyVG9nZ2xlXCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lLWJsb2NrIGZvcm0taW5saW5lIG1sLWF1dG8gbXItMCBtci1tZC0zIG15LTIgbXktbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG8gbWwtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGlkPVwidXNlckRyb3Bkb3duXCIgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXIgZmEtZndcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIiBhcmlhLWxhYmVsbGVkYnk9XCJ1c2VyRHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGl2aXR5IExvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImxvZ2luXCI+TG9nb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGlkPVwibGF5b3V0U2lkZW5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5b3V0U2lkZW5hdl9uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdiBhY2NvcmRpb24gc2Itc2lkZW5hdi1kYXJrXCIgaWQ9XCJzaWRlbmF2QWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1tZW51LWhlYWRpbmdcIj5Db3JlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJkYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLW5hdi1saW5rLWljb25cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFjaG9tZXRlci1hbHRcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgY29sbGFwc2VkXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2VQYWdlc1wiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZVBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1uYXYtbGluay1pY29uXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2stb3BlblwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvd1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPVwiY29sbGFwc2VQYWdlc1wiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdUd29cIiBkYXRhLXBhcmVudD1cIiNzaWRlbmF2QWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtbmVzdGVkIG5hdiBhY2NvcmRpb25cIiBpZD1cInNpZGVuYXZBY2NvcmRpb25QYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBjb2xsYXBzZWRcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNwYWdlc0NvbGxhcHNlQXV0aFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJwYWdlc0NvbGxhcHNlQXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvd1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD1cInBhZ2VzQ29sbGFwc2VBdXRoXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ09uZVwiIGRhdGEtcGFyZW50PVwiI3NpZGVuYXZBY2NvcmRpb25QYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtbmVzdGVkIG5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImxvZ2luXCI+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwicmVnaXN0ZXJcIj5SZWdpc3RlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJwYXNzd29yZFwiPkZvcmdvdCBQYXNzd29yZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00XCI+TGlzdCBvZiBKb2JzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLXN1Y2Nlc3MgdGV4dC13aGl0ZSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+RW1wbG95ZXJzIFRhYmxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic21hbGwgdGV4dC13aGl0ZSBzdHJldGNoZWQtbGlua1wiIGhyZWY9XCJlbXBseW9lclwiPlZpZXcgRGV0YWlsczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGFkbWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDx0YWJsZSByZWY9e3RoaXMuZGF0YXRhYmxlUmVmfSBjbGFzc05hbWU9XCJkaXNwbGF5IHRhYmxlIHRhYmxlLWJvcmRlcmVkXCIgc3R5bGU9e3t3aWR0aDoxMDArXCIlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhyZWFkLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkpvYiBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbXBsb3ltZW50IFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2l0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2FsYXJ5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb3N0ZWQgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JzLm1hcChKb2I9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0pvYi5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5KbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntKb2IuSl9Db250cmFjdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntKb2IuSl9jaXR5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5KX21pbl9zYWxhcnl9fntKb2IuSl9tYXhfc2FsYXJ5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5Qb3N0ZWREYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgb25DbGljaz17KCk9PnRoaXMudmlld1Bhc3NJZChKb2IuaWQpfSBjbGFzc05hbWU9XCJ2aWV3IG1hdGVyaWFsLWljb25zIGljb24tcGFkZGluZ1wiIHRpdGxlPVwiVmlld1wiIHN0eWxlPXt7Y29sb3I6IFwicmdiKDAsIDExMCwgMjU1KVwiLCBjdXJzb3I6XCJwb2ludGVyXCJ9fSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiPiYjeEU0MTc7PC9pPjwvYT4gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgb25DbGljaz17KCk9PnRoaXMuZWRpdFBhc3NJZChKb2IuaWQpfSBjbGFzc05hbWU9XCJlZGl0IG1hdGVyaWFsLWljb25zIGljb24tcGFkZGluZ1wiIHRpdGxlPVwiRWRpdFwiIHN0eWxlPXt7Y29sb3I6IFwieWVsbG93XCIsIGN1cnNvcjpcInBvaW50ZXJcIn19IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCI+JiN4RTI1NDs8L2k+PC9hPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpPT50aGlzLmRlbGV0ZVBhc3NJZChKb2IuaWQpfSBjbGFzc05hbWU9XCJkZWxldGUgbWF0ZXJpYWwtaWNvbnMgaWNvbi1wYWRkaW5nXCIgdGl0bGU9XCJEZWxldGVcIiAgc3R5bGU9e3tjb2xvcjogXCJyZWRcIiwgY3Vyc29yOlwicG9pbnRlclwifX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mI3hFODcyOzwvYT4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblx0XHJcblx0PGRpdiBpZD1cInZpZXdNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGluZm8tZGlhbG9nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+RGV0YWlsIEluZm9ybWF0aW9uPC9oND5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5Kb2IgTmFtZTo8L3RkPjx0ZD57dGhpcy5zdGF0ZS5KbmFtZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPiBFbXBsb3llciBOYW1lOjwvdGQ+PHRkPiB7dGhpcy5nZXRFbXBsb3llcih0aGlzLnN0YXRlLkVNUExPWUVSSUQpfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+UG9zdGVkX0RhdGU6IDwvdGQ+PHRkPnt0aGlzLnN0YXRlLlBvc3RlZERhdGV9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+UGhvbmUgTnVtYmVyOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX3RlbH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5FbWFpbDo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9lbWFpbH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5BZGRyZXNzOjwvdGQ+IDx0ZD4ge3RoaXMuc3RhdGUuSl9BZGRyZXNzfSwge3RoaXMuZ2V0TG9jYXRpb24odGhpcy5zdGF0ZS5KX2NpdHksdGhpcy5zdGF0ZS5KX2FyZWEpfSA8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPkVtcGxveW1lbnQgU3RhdHVzOjwvdGQ+IDx0ZD57dGhpcy5zdGF0ZS5KX0NvbnRyYWN0fTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPlNhbGFyeTo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9taW5fc2FsYXJ5fX57dGhpcy5zdGF0ZS5KX21heF9zYWxhcnl9IFllbjwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+V29ya2luZyBEYXlzOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX1dvcmtpbmdfRGF5fSBEYXlzIHBlciBXZWVrPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Xb3JraW5nIEhvdXJzOjwvdGQ+PHRkPnt0aGlzLnN0YXRlLkpfaG91cnN9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+TWluaW11bSBKYXBhbmVzZSBTa2lsbDo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9KcExldmVsfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+Sm9iIERlc2NyaXB0aW9uOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX0Rlc2NyaXB0aW9ufTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkpvYiBRdWFsaWZpY2F0aW9uOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX1F1YWxpZmljYXRpb259PC90ZD48L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKT0+dGhpcy5kZWxldGVQYXNzSWQodGhpcy5zdGF0ZS5pZCl9IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPkRlbGV0ZTwvYnV0dG9uPjwvYT4gXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImVkaXRNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgaW5mby1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+QXBwbGljYXRpb24gUmVxdWlyZW1lbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e3RoaXMuZm9ybV9jbGVhcn0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cInBvc3RcIiBzdHlsZT17e3dpZHRoOiAxMDArXCIlXCJ9fSBvblN1Ym1pdD17dGhpcy5hZGRKb2J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gcm9sZT1cIkZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiXCIgYWNjZXB0LWNoYXJzZXQ9XCJVVEYtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpuYW1lXCI+Sm9iIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgSm9iIE5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpuYW1lfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfQ29udHJhY3RcIj5FbXBsb3ltZW50IFN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkpfQ29udHJhY3RcIiBpZD1cIkpfQ29udHJhY3RcIiBvbkNsaWNrPXt0aGlzLmRpc2FibGV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Q2hvb3NlIEVtcGxveW1lbnQgU3RhdHVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRnVsbC1UaW1lXCIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZW1wbG95bWVudFN0YXR1cyA9PSBcIkZ1bGwtVGltZVwiICAgPyAoXCJzZWxlY3RlZFwiKSA6IChcImZhbHNlXCIpfT5GdWxsIFRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQYXJ0LVRpbWVcIiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5lbXBsb3ltZW50U3RhdHVzID09IFwiUGFydC1UaW1lXCIgPyAoXCJzZWxlY3RlZFwiKSA6IChcImZhbHNlXCIpfT5QYXJ0IFRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNhbGFyeVwiPlNhbGFyeSjCpSk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWluX3NhbGFyeVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfbWluX3NhbGFyeVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTWluaW11biBTYWxhcnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfbWluX3NhbGFyeX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWF4X3NhbGFyeVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfbWF4X3NhbGFyeVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTWF4aW11biBTYWxhcnlcIiAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX21heF9zYWxhcnl9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9ob3Vyc1wiPldvcmtpbmcgSG91cnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfaG91cnNcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX2hvdXJzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBXb3JraW5nIEhvdXJzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX2hvdXJzfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfV29ya2luZ19EYXlcIj5Xb3JraW5nIERheXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfV29ya2luZ19EYXlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX1dvcmtpbmdfRGF5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBXb3JraW5nIERheXNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfV29ya2luZ19EYXl9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9KcExldmVsXCI+U2VsZWN0IEphcGFuZXNlIFNraWxsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiSl9KcExldmVsXCIgaWQ9XCJKX0pwTGV2ZWxcIiBvbkNsaWNrPXt0aGlzLmRpc2FibGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkphcGFuZXNlIExhbmd1YWUgU2tpbGw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmphcGFuZXNlU2tpbGwgPT0gXCIzXCIgPyAoXCJzZWxlY3RlZFwiKSA6IChcImZhbHNlXCIpfT5OMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuamFwYW5lc2VTa2lsbCA9PSBcIjJcIiA/IChcInNlbGVjdGVkXCIpIDogKFwiZmFsc2VcIil9Pk4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5qYXBhbmVzZVNraWxsID09IFwiMVwiID8gKFwic2VsZWN0ZWRcIikgOiAoXCJmYWxzZVwiKX0+TjE8L29wdGlvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl90ZWxcIj5UZWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJKX3RlbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfdGVsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBwaG9uZTpcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfdGVsfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UG9zdGVkIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiZGF0ZXRpbWVcIiBuYW1lPVwiUG9zdGVkRGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuUG9zdGVkRGF0ZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9lbWFpbFwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX2VtYWlsXCIgcGxhY2Vob2xkZXI9XCJhYmNAZ21haWwuY29tXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX2VtYWlsfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkotYXJlYVwiPlNlbGVjdCBBcmVhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiQVJFQUlEXCIgaWQ9XCJhcmVhXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DbGljaz17dGhpcy5kaXNhYmxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5TZWxlY3QgQXJlYSBpbiBKYXBhbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXJlYXMubWFwKEFyZWEgPT4gKHRoaXMuc3RhdGUuSl9hcmVhID09IEFyZWEuaWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtBcmVhLmlkfSBzZWxlY3RlZD57QXJlYS5hcmVhTmFtZX08L29wdGlvbj4gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtBcmVhLmlkfT57QXJlYS5hcmVhTmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9jaXR5XCI+U2VsZWN0IHlvdXIgQ2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkNJVFlJRFwiIGlkPVwiY2l0eVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IEFyZWEgaW4gSmFwYW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjaXRpZXMgJiYgIGNpdGllcy5tYXAoQ2l0eSA9PiAodGhpcy5zdGF0ZS5KX2NpdHkgPT0gQ2l0eS5pZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NpdHkuaWR9IHNlbGVjdGVkPntDaXR5LmNpdHlOYW1lfTwvb3B0aW9uPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NpdHkuaWR9PntDaXR5LmNpdHlOYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRldGFpbEFkZHJcIj5EZXRhaWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiSl9BZGRyZXNzXCIgbmFtZT1cIkpfQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9BZGRyZXNzfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKb2JEZXNcIj5Kb2IgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkpfRGVzY3JpcHRpb25cIiBuYW1lPVwiSl9EZXNjcmlwdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9EZXNjcmlwdGlvbn0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJRdWFsXCI+T3RoZXIgUXVhbGlmaWNhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiICBpZD1cIkpfUXVhbGlmaWNhdGlvblwiIG5hbWU9XCJKX1F1YWxpZmljYXRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfUXVhbGlmaWNhdGlvbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cdFxyXG4gICAgICAgIDxkaXYgaWQ9XCJkZWxldGVDb25maXJtTW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBkZWwtZGlhbG9nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkRlbGV0ZSBKb2I8L2g0PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj4gXHJcblx0XHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBqb2I/PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXdhcm5pbmdcIj48c21hbGw+VGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS48L3NtYWxsPjwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiIC8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgdmFsdWU9XCJEZWxldGVcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e3RoaXMuZGVsZXRlSm9ifSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG5cdFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG5cdCAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYm9keT5cclxuPC8+XHJcbil9fSJdLCJzb3VyY2VSb290IjoiIn0=