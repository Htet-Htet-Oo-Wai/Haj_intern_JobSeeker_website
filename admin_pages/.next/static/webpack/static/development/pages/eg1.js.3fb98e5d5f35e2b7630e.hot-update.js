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
          employerName = Employers.data.employerName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZzEuanMiXSwibmFtZXMiOlsiam9iTGlzdCIsInByb3BzIiwiaWQiLCIkIiwibW9kYWwiLCJzZXRTdGF0ZSIsImRlbGV0ZV9pZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVkaXRfaWQiLCJmaXJlYmFzZSIsImxvYWRGaXJlYmFzZSIsImRhdGEiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiSm5hbWUiLCJKX0NvbnRyYWN0IiwiSl9taW5fc2FsYXJ5IiwiSl9tYXhfc2FsYXJ5IiwiSl9ob3VycyIsIkpfV29ya2luZ19EYXkiLCJKX0pwTGV2ZWwiLCJKX2FyZWEiLCJKX2NpdHkiLCJKX3RlbCIsIlBvc3RlZERhdGUiLCJKX2VtYWlsIiwiSl9BZGRyZXNzIiwiSl9EZXNjcmlwdGlvbiIsIkpfUXVhbGlmaWNhdGlvbiIsImVycm9yIiwiam9iTmFtZSIsImdldEFyZWEiLCJBUkVBSUQiLCJ1cGRhdGUiLCJyZWZyZXNoVGFibGUiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImRlY3JlYXNlSm9iQ291bnQiLCJjb21wYW55IiwiRU1QTE9ZRVJJRCIsImVtcGxveWVycyIsImVtcGxveWVyIiwiZW1wbG95ZXJOYW1lIiwibWFwIiwiRW1wbG95ZXJzIiwiQ0lUWUlEIiwiY2l0eSIsImFyZWEiLCJjaXR5TmFtZSIsImFyZWFOYW1lIiwiQ2l0eSIsIkFyZWEiLCJhcmVhUXVlcnlTbmFwc2hvdCIsImluaXRpYWxfc3RhdGUiLCJpbnB1dHMiLCJpbmRleCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUF0dHIiLCJhdHRyIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImRhdGF0YWJsZVJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiJGRhdGF0YWJsZSIsImpvYnMiLCJqb2IiLCJjaXRpZXMiLCJhcmVhcyIsImluaXRpYWxpemVEYXRhdGFibGUiLCJjdXJyZW50IiwiRGF0YVRhYmxlIiwib3JkZXIiLCJjbGVhciIsInNlbGYiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXNwb25zZSIsIndpZHRoIiwiSm9iIiwidmlld1Bhc3NJZCIsImNvbG9yIiwiY3Vyc29yIiwiZWRpdFBhc3NJZCIsImRlbGV0ZVBhc3NJZCIsImdldEVtcGxveWVyIiwiZ2V0TG9jYXRpb24iLCJmb3JtX2NsZWFyIiwiYWRkSm9iIiwiZGlzYWJsZSIsInNlbGVjdGVkVmFsdWUiLCJlbXBsb3ltZW50U3RhdHVzIiwiamFwYW5lc2VTa2lsbCIsImRlbGV0ZUpvYiIsImpvYlF1ZXJ5U25hcHNob3QiLCJkb2NzIiwiY2l0eVF1ZXJ5U25hcHNob3QiLCJsaW1pdCIsImVtcGxveWVyUXVlcnlTbmFwc2hvdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7QUFFakIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSx1TkE4RkosVUFBQ0MsRUFBRCxFQUFNO0FBQ2pCQyxPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkMsS0FBekIsQ0FBK0IsTUFBL0I7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLGlCQUFTLEVBQUdKO0FBQWIsT0FBZDs7QUFDQUssYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBTCxDQUFXSCxTQUF2QjtBQUNILEtBbEdrQjs7QUFBQSxxTkFtR0YsVUFBQ0osRUFBRCxFQUFRO0FBQ2pCLFlBQUtHLFFBQUwsQ0FBYztBQUFDSyxlQUFPLEVBQUdSO0FBQVgsT0FBZDs7QUFDQSxVQUFJUyxRQUFRLEdBQUdDLGdFQUFZLEVBQTNCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsVUFBRztBQUNDRixnQkFBUSxDQUFD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RXJDWCxzQkFBRSxFQUFFYyxHQUFHLENBQUNkO0FBRjZCO0FBQUEsaUJBQTNCLEM7O3VCQUtrQlMsUUFBUSxDQUN2Q0csU0FEK0IsR0FFL0JDLFVBRitCLENBRXBCLE1BRm9CLEVBRy9CRSxHQUgrQixFOzs7QUFBMUJ5RixpQztBQUlBNUIsc0IsR0FBUzRCLGlCQUFpQixDQUFDRCxJQUFsQixDQUF1QnRELEdBQXZCLENBQTJCLFVBQUNuQyxHQUFEO0FBQUEseURBQ25DQSxHQUFHLENBQUNILElBQUosRUFEbUM7QUFFdENYLHNCQUFFLEVBQUVjLEdBQUcsQ0FBQ2Q7QUFGOEI7QUFBQSxpQkFBM0IsQzs7dUJBS3FCUyxRQUFRLENBQ3ZDRyxTQUQrQixHQUUvQkMsVUFGK0IsQ0FFcEIsVUFGb0IsRUFHL0I0RixLQUgrQixDQUd6QixFQUh5QixFQUkvQjFGLEdBSitCLEU7OztBQUE5QjJGLHFDO0FBS0E1RCx5QixHQUFZNEQscUJBQXFCLENBQUNILElBQXRCLENBQTJCdEQsR0FBM0IsQ0FBK0IsVUFBQ25DLEdBQUQ7QUFBQSx5QkFBVTtBQUN2REgsd0JBQUksRUFBR0csR0FBRyxDQUFDSCxJQUFKLEVBRGdEO0FBRXZEWCxzQkFBRSxFQUFFYyxHQUFHLENBQUNkO0FBRitDLG1CQUFWO0FBQUEsaUJBQS9CLEM7aURBSVg7QUFBQzJFLHFCQUFHLEVBQUdELElBQVA7QUFBYXJCLHNCQUFJLEVBQUd3QixLQUFwQjtBQUEyQnpCLHNCQUFJLEVBQUd3QixNQUFsQztBQUEwQzdCLDBCQUFRLEVBQUVEO0FBQXBELGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0ZzQnlCLDRDQUFLLENBQUNvQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlZzEuanMuM2ZiOThlNWQ1ZjM1ZTJiNzYzMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7bG9hZEZpcmViYXNlfSBmcm9tICcuLi9saWIvZGIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgam9iTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGF0YXRhYmxlUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy4kZGF0YXRhYmxlID0gbnVsbFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGVkaXRfaWQgOiAnJyxcclxuICAgICAgICAgICAgZGVsZXRlX2lkIDogJycsXHJcbiAgICAgICAgICAgIEpuYW1lOicnLFxyXG4gICAgICAgICAgICBKX3RlbDonJyxcclxuICAgICAgICAgICAgSl9taW5fc2FsYXJ5OicnLFxyXG4gICAgICAgICAgICBKX21heF9zYWxhcnk6JycsXHJcbiAgICAgICAgICAgIFBvc3RlZERhdGU6JycsXHJcbiAgICAgICAgICAgIEpfaG91cnM6JycsXHJcbiAgICAgICAgICAgIEpfZW1haWw6JycsXHJcbiAgICAgICAgICAgIEpfY2l0eTonJyxcclxuICAgICAgICAgICAgSl9hcmVhOicnLFxyXG4gICAgICAgICAgICBKX1dvcmtpbmdfRGF5OicnLFxyXG4gICAgICAgICAgICBKX1F1YWxpZmljYXRpb246JycsXHJcbiAgICAgICAgICAgIEpfSnBMZXZlbDonJyxcclxuICAgICAgICAgICAgSl9EZXNjcmlwdGlvbjonJyxcclxuICAgICAgICAgICAgSl9Db250cmFjdDonJyxcclxuICAgICAgICAgICAgSl9BZGRyZXNzOicnLFxyXG4gICAgICAgICAgICBhcmVhTmFtZSA6ICcnLFxyXG4gICAgICAgICAgICBqb2JzIDogcHJvcHMuam9iIHx8IFtdLFxyXG4gICAgICAgICAgICBjaXRpZXMgOiBwcm9wcy5jaXR5LFxyXG4gICAgICAgICAgICBlbXBsb3llcnMgOiBwcm9wcy5lbXBsb3llciB8fCBbXSxcclxuICAgICAgICAgICAgYXJlYXMgOiBwcm9wcy5hcmVhIHx8IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVEYXRhdGFibGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVEYXRhdGFibGUoKSB7XHJcbiAgICAgIHRoaXMuJGRhdGF0YWJsZSA9ICQodGhpcy5kYXRhdGFibGVSZWYuY3VycmVudCkuRGF0YVRhYmxlKHtcclxuICAgICAgICAgIG9yZGVyOiBbWzMsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRhYmxlKCkge1xyXG4gICAgICB0aGlzLiRkYXRhdGFibGUuY2xlYXIoKVxyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgam9iTGlzdFxyXG4gICAgICAgIC5nZXRJbml0aWFsUHJvcHMoKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGpvYnM6IHJlc3BvbnNlLmpvYixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gc2VsZi5pbml0aWFsaXplRGF0YXRhYmxlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCBmaXJlYmFzZSA9IGF3YWl0IGxvYWRGaXJlYmFzZSgpIFxyXG4gICAgICAgIGNvbnN0IGpvYlF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJqb2JcIilcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGpvYnMgPSBqb2JRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGNvbnN0IGFyZWFRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiYXJlYVwiKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgYXJlYXMgPSBhcmVhUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2l0eVF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiY2l0eVwiKVxyXG4gICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBjaXRpZXMgPSBjaXR5UXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXJRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiZW1wbG95ZXJcIilcclxuICAgICAgICAgICAgLmxpbWl0KDEwKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXJzID0gZW1wbG95ZXJRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIGRhdGEgOiBkb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4ge2pvYiA6IGpvYnMsIGFyZWEgOiBhcmVhcywgY2l0eSA6IGNpdGllcywgZW1wbG95ZXI6IGVtcGxveWVyc307XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUGFzc0lkID0gKGlkKT0+e1xyXG4gICAgICAgICQoXCIjZGVsZXRlQ29uZmlybU1vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVsZXRlX2lkIDogaWR9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGVsZXRlX2lkKVxyXG4gICAgfTsgICAgICBcclxuICAgICAgICB2aWV3UGFzc0lkID0gKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRfaWQgOiBpZH0pXHJcbiAgICAgICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge31cclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJykuZG9jKGlkKS5nZXQoKS5cclxuICAgICAgICAgICAgICAgIHRoZW4oKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzbmFwc2hvdC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEpuYW1lOmRhdGEuSm5hbWUsXHJcbiAgICAgICAgICAgICAgICBKX0NvbnRyYWN0OmRhdGEuSl9Db250cmFjdCxcclxuICAgICAgICAgICAgICAgIEpfbWluX3NhbGFyeTpkYXRhLkpfbWluX3NhbGFyeSxcclxuICAgICAgICAgICAgICAgIEpfbWF4X3NhbGFyeTpkYXRhLkpfbWF4X3NhbGFyeSxcclxuICAgICAgICAgICAgICAgIEpfaG91cnM6ZGF0YS5KX2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgSl9Xb3JraW5nX0RheTpkYXRhLkpfV29ya2luZ19EYXksXHJcbiAgICAgICAgICAgICAgICBKX0pwTGV2ZWw6ZGF0YS5KX0pwTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBKX2FyZWEgOiBkYXRhLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgIEpfY2l0eTogZGF0YS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgSl90ZWw6ZGF0YS5KX3RlbCxcclxuICAgICAgICAgICAgICAgIFBvc3RlZERhdGU6ZGF0YS5Qb3N0ZWREYXRlLFxyXG4gICAgICAgICAgICAgICAgSl9lbWFpbDpkYXRhLkpfZW1haWwsXHJcbiAgICAgICAgICAgICAgICBKX2FyZWE6ZGF0YS5KX2FyZWEsXHJcbiAgICAgICAgICAgICAgICBKX2NpdHk6ZGF0YS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICBKX0FkZHJlc3M6ZGF0YS5KX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBKX0Rlc2NyaXB0aW9uOmRhdGEuSl9EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIEpfUXVhbGlmaWNhdGlvbjpkYXRhLkpfUXVhbGlmaWNhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgZGF0YVwiKVxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5qb2JOYW1lKVxyXG4gICAgICAgICAgICAkKFwiI3ZpZXdNb2RhbFwiKS5tb2RhbCgnc2hvdycpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBlZGl0UGFzc0lkID0gKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRfaWQgOiBpZH0pXHJcbiAgICAgICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge31cclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJykuZG9jKGlkKS5nZXQoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzbmFwc2hvdC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpuYW1lOmRhdGEuSm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfQ29udHJhY3Q6ZGF0YS5KX0NvbnRyYWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX21pbl9zYWxhcnk6ZGF0YS5KX21pbl9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfbWF4X3NhbGFyeTpkYXRhLkpfbWF4X3NhbGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9ob3VyczpkYXRhLkpfaG91cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfV29ya2luZ19EYXk6ZGF0YS5KX1dvcmtpbmdfRGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0pwTGV2ZWw6ZGF0YS5KX0pwTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfYXJlYSA6IGRhdGEuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2NpdHkgOiBkYXRhLkpfY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIEpfdGVsOmRhdGEuSl90ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RlZERhdGU6ZGF0YS5Qb3N0ZWREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2VtYWlsOmRhdGEuSl9lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9hcmVhOmRhdGEuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2NpdHk6ZGF0YS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfQWRkcmVzczpkYXRhLkpfQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9EZXNjcmlwdGlvbjpkYXRhLkpfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfUXVhbGlmaWNhdGlvbjpkYXRhLkpfUXVhbGlmaWNhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXJlYShkYXRhLkFSRUFJRClcclxuICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChcIiNlZGl0TW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBkYXRlSm9iID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdqb2InKS5kb2ModGhpcy5zdGF0ZS5lZGl0X2lkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIEpuYW1lOnRoaXMuc3RhdGUuSm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9Db250cmFjdDp0aGlzLnN0YXRlLkpfQ29udHJhY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9taW5fc2FsYXJ5OnRoaXMuc3RhdGUuSl9taW5fc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfbWF4X3NhbGFyeTp0aGlzLnN0YXRlLkpfbWF4X3NhbGFyeSxcclxuICAgICAgICAgICAgICAgICAgICBKX2hvdXJzOnRoaXMuc3RhdGUuSl9ob3VycyxcclxuICAgICAgICAgICAgICAgICAgICBKX1dvcmtpbmdfRGF5OnRoaXMuc3RhdGUuSl9Xb3JraW5nX0RheSxcclxuICAgICAgICAgICAgICAgICAgICBKX0pwTGV2ZWw6dGhpcy5zdGF0ZS5KX0pwTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9hcmVhIDogdGhpcy5zdGF0ZS5KX2FyZWEsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9jaXR5IDogdGhpcy5zdGF0ZS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgSl90ZWw6dGhpcy5zdGF0ZS5KX3RlbCxcclxuICAgICAgICAgICAgICAgICAgICBQb3N0ZWREYXRlOnRoaXMuc3RhdGUuUG9zdGVkRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBKX2VtYWlsOnRoaXMuc3RhdGUuSl9lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBKX2FyZWE6dGhpcy5zdGF0ZS5KX2FyZWEsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9jaXR5OnRoaXMuc3RhdGUuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfQWRkcmVzczp0aGlzLnN0YXRlLkpfQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBKX0Rlc2NyaXB0aW9uOnRoaXMuc3RhdGUuSl9EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBKX1F1YWxpZmljYXRpb246dGhpcy5zdGF0ZS5KX1F1YWxpZmljYXRpb25cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGFibGUoKTtcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5uYW1lID09IFwiQVJFQUlEXCIpe1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBkZWxldGVKb2IgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2pvYicpXHJcbiAgICAgICAgICAgIC5kb2ModGhpcy5zdGF0ZS5kZWxldGVfaWQpXHJcbiAgICAgICAgICAgIC5kZWxldGUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGUgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZWNyZWFzZUpvYkNvdW50KHRoaXMuc3RhdGUuY29tcGFueSlcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGFibGUoKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgZ2V0RW1wbG95ZXIgPSAoRU1QTE9ZRVJJRCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtcGxveWVycyA9IHRoaXMucHJvcHMuZW1wbG95ZXJcclxuICAgICAgICBsZXQgZW1wbG95ZXJOYW1lID0gJydcclxuICAgICAgICBjb25zb2xlLmxvZyhFTVBMT1lFUklEKVxyXG4gICAgICAgIGVtcGxveWVycyAmJiBlbXBsb3llcnMubWFwKEVtcGxveWVycyA9PiB7XHJcbiAgICAgICAgICAgIGlmKEVtcGxveWVycy5pZCA9PSBFTVBMT1lFUklEKXtcclxuICAgICAgICAgICAgICAgIGVtcGxveWVyTmFtZSA9IEVtcGxveWVycy5kYXRhLmVtcGxveWVyTmFtZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtcGxveWVyTmFtZSlcclxuICAgICAgICByZXR1cm4gZW1wbG95ZXJOYW1lXHJcbiAgICAgfVxyXG5cclxuICAgICBnZXRMb2NhdGlvbiA9IChDSVRZSUQsIEFSRUFJRCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNpdHkgPSB0aGlzLnByb3BzLmNpdHlcclxuICAgICAgICBjb25zdCBhcmVhID0gdGhpcy5wcm9wcy5hcmVhXHJcbiAgICAgICAgbGV0IGNpdHlOYW1lID0gJydcclxuICAgICAgICBsZXQgYXJlYU5hbWUgPSAnJ1xyXG5cclxuICAgICAgICBjaXR5ICYmIGNpdHkubWFwKENpdHk9PntcclxuICAgICAgICAgICAgaWYoQ2l0eS5pZCA9PSBDSVRZSUQpe1xyXG4gICAgICAgICAgICAgICAgY2l0eU5hbWUgPSBDaXR5LmNpdHlOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGFyZWEgJiYgYXJlYS5tYXAoQXJlYT0+e1xyXG4gICAgICAgICAgICBpZihBcmVhLmlkID09IEFSRUFJRCl7XHJcbiAgICAgICAgICAgICAgICBhcmVhTmFtZSA9IEFyZWEuYXJlYU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICByZXR1cm4gY2l0eU5hbWUgKyBcIixcIiArIGFyZWFOYW1lXHJcbiAgICAgfVxyXG5cclxuICAgIGdldEFyZWEgPSAoaWQpID0+IHtcclxuICAgICAgICBsZXQgYXJlYSA9IHt9XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdhcmVhJylcclxuICAgICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChhcmVhUXVlcnlTbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgIGFyZWEgPSBhcmVhUXVlcnlTbmFwc2hvdC5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthcmVhTmFtZSA6IGFyZWEuYXJlYU5hbWV9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtX2NsZWFyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxfc3RhdGUpO1xyXG4gICAgICAgIGxldCBpbnB1dHMsIGluZGV4O1xyXG4gICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGlucHV0cy5sZW5ndGg7ICsraW5kZXgpIHtcclxuICAgICAgICAgICAgaW5wdXRzW2luZGV4XS52YWx1ZSA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKX0FkZHJlc3MnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKX0Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSl9RdWFsaWZpY2F0aW9uJykudmFsdWUgPSAnJztcclxuICAgICAgIFxyXG4gIFxyXG4gICAgICAgICQoXCIjSl9Db250cmFjdCBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNKX0NvbnRyYWN0IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICQoXCIjSl9KcExldmVsIG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI0pfSnBMZXZlbCBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjY2l0eSBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTsgXHJcbiAgICAgICAgJChcIiNhcmVhIG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI2FyZWEgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7ICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGRpc2FibGUgPSAoZXZlbnQpID0+IHsgICBcclxuICAgICAgICAkKFwiI0pfQ29udHJhY3Qgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7IFxyXG4gICAgICAgICQoXCIjSl9KcExldmVsIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpOyBcclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgJChcIiNhcmVhIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpOyBcclxuICAgIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2l0aWVzID0gdGhpcy5zdGF0ZS5jaXRpZXNcclxuICAgIGNvbnN0IGFyZWFzID0gdGhpcy5zdGF0ZS5hcmVhc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuPGJvZHkgY2xhc3NOYW1lPVwic2ItbmF2LWZpeGVkXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi10b3BuYXYgbmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiZGFzaGJvYXJkXCI+QWRtaW48L2E+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbSBvcmRlci0xIG9yZGVyLWxnLTBcIiBpZD1cInNpZGViYXJUb2dnbGVcIiBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmUtYmxvY2sgZm9ybS1pbmxpbmUgbWwtYXV0byBtci0wIG1yLW1kLTMgbXktMiBteS1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0byBtbC1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaWQ9XCJ1c2VyRHJvcGRvd25cIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlciBmYS1md1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiIGFyaWEtbGFiZWxsZWRieT1cInVzZXJEcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aXZpdHkgTG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwibG9naW5cIj5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2X25hdlwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2IGFjY29yZGlvbiBzYi1zaWRlbmF2LWRhcmtcIiBpZD1cInNpZGVuYXZBY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtaGVhZGluZ1wiPkNvcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ItbmF2LWxpbmstaWNvblwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWNob21ldGVyLWFsdFwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBjb2xsYXBzZWRcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZVBhZ2VzXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlUGFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLW5hdi1saW5rLWljb25cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYm9vay1vcGVuXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9XCJjb2xsYXBzZVBhZ2VzXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ1R3b1wiIGRhdGEtcGFyZW50PVwiI3NpZGVuYXZBY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudS1uZXN0ZWQgbmF2IGFjY29yZGlvblwiIGlkPVwic2lkZW5hdkFjY29yZGlvblBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGNvbGxhcHNlZFwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI3BhZ2VzQ29sbGFwc2VBdXRoXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cInBhZ2VzQ29sbGFwc2VBdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPVwicGFnZXNDb2xsYXBzZUF1dGhcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nT25lXCIgZGF0YS1wYXJlbnQ9XCIjc2lkZW5hdkFjY29yZGlvblBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudS1uZXN0ZWQgbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwibG9naW5cIj5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJyZWdpc3RlclwiPlJlZ2lzdGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cInBhc3N3b3JkXCI+Rm9yZ290IFBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxheW91dFNpZGVuYXZfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTRcIj5MaXN0IG9mIEpvYnM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctc3VjY2VzcyB0ZXh0LXdoaXRlIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5FbXBsb3llcnMgVGFibGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LXdoaXRlIHN0cmV0Y2hlZC1saW5rXCIgaHJlZj1cImVtcGx5b2VyXCI+VmlldyBEZXRhaWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWRtaW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPHRhYmxlIHJlZj17dGhpcy5kYXRhdGFibGVSZWZ9IGNsYXNzTmFtZT1cImRpc3BsYXkgdGFibGUgdGFibGUtYm9yZGVyZWRcIiBzdHlsZT17e3dpZHRoOjEwMCtcIiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0aHJlYWQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Sm9iIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtcGxveW1lbnQgU3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TYWxhcnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvc3RlZCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYnMubWFwKEpvYj0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17Sm9iLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Sm9iLkpuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5KX0NvbnRyYWN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5KX2NpdHl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Sm9iLkpfbWluX3NhbGFyeX1+e0pvYi5KX21heF9zYWxhcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Sm9iLlBvc3RlZERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBvbkNsaWNrPXsoKT0+dGhpcy52aWV3UGFzc0lkKEpvYi5pZCl9IGNsYXNzTmFtZT1cInZpZXcgbWF0ZXJpYWwtaWNvbnMgaWNvbi1wYWRkaW5nXCIgdGl0bGU9XCJWaWV3XCIgc3R5bGU9e3tjb2xvcjogXCJyZ2IoMCwgMTEwLCAyNTUpXCIsIGN1cnNvcjpcInBvaW50ZXJcIn19IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCI+JiN4RTQxNzs8L2k+PC9hPiAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBvbkNsaWNrPXsoKT0+dGhpcy5lZGl0UGFzc0lkKEpvYi5pZCl9IGNsYXNzTmFtZT1cImVkaXQgbWF0ZXJpYWwtaWNvbnMgaWNvbi1wYWRkaW5nXCIgdGl0bGU9XCJFZGl0XCIgc3R5bGU9e3tjb2xvcjogXCJ5ZWxsb3dcIiwgY3Vyc29yOlwicG9pbnRlclwifX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIj4mI3hFMjU0OzwvaT48L2E+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCk9PnRoaXMuZGVsZXRlUGFzc0lkKEpvYi5pZCl9IGNsYXNzTmFtZT1cImRlbGV0ZSBtYXRlcmlhbC1pY29ucyBpY29uLXBhZGRpbmdcIiB0aXRsZT1cIkRlbGV0ZVwiICBzdHlsZT17e2NvbG9yOiBcInJlZFwiLCBjdXJzb3I6XCJwb2ludGVyXCJ9fSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiYjeEU4NzI7PC9hPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHRcclxuXHQ8ZGl2IGlkPVwidmlld01vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgaW5mby1kaWFsb2dcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5EZXRhaWwgSW5mb3JtYXRpb248L2g0PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkpvYiBOYW1lOjwvdGQ+PHRkPnt0aGlzLnN0YXRlLkpuYW1lfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+IEVtcGxveWVyIE5hbWU6PC90ZD48dGQ+IHt0aGlzLmdldEVtcGxveWVyKHRoaXMuc3RhdGUuRU1QTE9ZRVJJRCl9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Qb3N0ZWRfRGF0ZTogPC90ZD48dGQ+e3RoaXMuc3RhdGUuUG9zdGVkRGF0ZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5QaG9uZSBOdW1iZXI6PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfdGVsfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkVtYWlsOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX2VtYWlsfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkFkZHJlc3M6PC90ZD4gPHRkPiB7dGhpcy5zdGF0ZS5KX0FkZHJlc3N9LCB7dGhpcy5nZXRMb2NhdGlvbih0aGlzLnN0YXRlLkpfY2l0eSx0aGlzLnN0YXRlLkpfYXJlYSl9IDwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+RW1wbG95bWVudCBTdGF0dXM6PC90ZD4gPHRkPnt0aGlzLnN0YXRlLkpfQ29udHJhY3R9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+U2FsYXJ5OjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX21pbl9zYWxhcnl9fnt0aGlzLnN0YXRlLkpfbWF4X3NhbGFyeX0gWWVuPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Xb3JraW5nIERheXM6PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfV29ya2luZ19EYXl9IERheXMgcGVyIFdlZWs8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPldvcmtpbmcgSG91cnM6PC90ZD48dGQ+e3RoaXMuc3RhdGUuSl9ob3Vyc308L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5NaW5pbXVtIEphcGFuZXNlIFNraWxsOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX0pwTGV2ZWx9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Kb2IgRGVzY3JpcHRpb246PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfRGVzY3JpcHRpb259PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+Sm9iIFF1YWxpZmljYXRpb246PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfUXVhbGlmaWNhdGlvbn08L3RkPjwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpPT50aGlzLmRlbGV0ZVBhc3NJZCh0aGlzLnN0YXRlLmlkKX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlPC9idXR0b24+PC9hPiBcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiZWRpdE1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBpbmZvLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5BcHBsaWNhdGlvbiBSZXF1aXJlbWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5mb3JtX2NsZWFyfSBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwicG9zdFwiIHN0eWxlPXt7d2lkdGg6IDEwMCtcIiVcIn19IG9uU3VibWl0PXt0aGlzLmFkZEpvYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSByb2xlPVwiRm9ybVwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCJcIiBhY2NlcHQtY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTggYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSm5hbWVcIj5Kb2IgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBKb2IgTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSm5hbWV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9Db250cmFjdFwiPkVtcGxveW1lbnQgU3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiSl9Db250cmFjdFwiIGlkPVwiSl9Db250cmFjdFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5DaG9vc2UgRW1wbG95bWVudCBTdGF0dXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGdWxsLVRpbWVcIiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5lbXBsb3ltZW50U3RhdHVzID09IFwiRnVsbC1UaW1lXCIgICA/IChcInNlbGVjdGVkXCIpIDogKFwiZmFsc2VcIil9PkZ1bGwgVGltZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBhcnQtVGltZVwiIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmVtcGxveW1lbnRTdGF0dXMgPT0gXCJQYXJ0LVRpbWVcIiA/IChcInNlbGVjdGVkXCIpIDogKFwiZmFsc2VcIil9PlBhcnQgVGltZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic2FsYXJ5XCI+U2FsYXJ5KMKlKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtaW5fc2FsYXJ5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9taW5fc2FsYXJ5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBNaW5pbXVuIFNhbGFyeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9taW5fc2FsYXJ5fSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYXhfc2FsYXJ5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9tYXhfc2FsYXJ5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBNYXhpbXVuIFNhbGFyeVwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfbWF4X3NhbGFyeX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX2hvdXJzXCI+V29ya2luZyBIb3VyczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl9ob3Vyc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfaG91cnNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFdvcmtpbmcgSG91cnNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfaG91cnN9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9Xb3JraW5nX0RheVwiPldvcmtpbmcgRGF5czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl9Xb3JraW5nX0RheVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfV29ya2luZ19EYXlcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFdvcmtpbmcgRGF5c1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9Xb3JraW5nX0RheX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX0pwTGV2ZWxcIj5TZWxlY3QgSmFwYW5lc2UgU2tpbGw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJKX0pwTGV2ZWxcIiBpZD1cIkpfSnBMZXZlbFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+SmFwYW5lc2UgTGFuZ3VhZSBTa2lsbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuamFwYW5lc2VTa2lsbCA9PSBcIjNcIiA/IChcInNlbGVjdGVkXCIpIDogKFwiZmFsc2VcIil9Pk4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5qYXBhbmVzZVNraWxsID09IFwiMlwiID8gKFwic2VsZWN0ZWRcIikgOiAoXCJmYWxzZVwiKX0+TjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmphcGFuZXNlU2tpbGwgPT0gXCIxXCIgPyAoXCJzZWxlY3RlZFwiKSA6IChcImZhbHNlXCIpfT5OMTwvb3B0aW9uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX3RlbFwiPlRlbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfdGVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl90ZWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHBob25lOlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl90ZWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTggYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qb3N0ZWQgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCJkYXRldGltZVwiIG5hbWU9XCJQb3N0ZWREYXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5Qb3N0ZWREYXRlfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX2VtYWlsXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl9lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfZW1haWxcIiBwbGFjZWhvbGRlcj1cImFiY0BnbWFpbC5jb21cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfZW1haWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSi1hcmVhXCI+U2VsZWN0IEFyZWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJBUkVBSURcIiBpZD1cImFyZWFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNsaWNrPXt0aGlzLmRpc2FibGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPlNlbGVjdCBBcmVhIGluIEphcGFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hcmVhcy5tYXAoQXJlYSA9PiAodGhpcy5zdGF0ZS5KX2FyZWEgPT0gQXJlYS5pZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0FyZWEuaWR9IHNlbGVjdGVkPntBcmVhLmFyZWFOYW1lfTwvb3B0aW9uPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0FyZWEuaWR9PntBcmVhLmFyZWFOYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX2NpdHlcIj5TZWxlY3QgeW91ciBDaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiQ0lUWUlEXCIgaWQ9XCJjaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DbGljaz17dGhpcy5kaXNhYmxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5TZWxlY3QgQXJlYSBpbiBKYXBhbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNpdGllcyAmJiAgY2l0aWVzLm1hcChDaXR5ID0+ICh0aGlzLnN0YXRlLkpfY2l0eSA9PSBDaXR5LmlkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q2l0eS5pZH0gc2VsZWN0ZWQ+e0NpdHkuY2l0eU5hbWV9PC9vcHRpb24+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q2l0eS5pZH0+e0NpdHkuY2l0eU5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGV0YWlsQWRkclwiPkRldGFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJKX0FkZHJlc3NcIiBuYW1lPVwiSl9BZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX0FkZHJlc3N9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpvYkRlc1wiPkpvYiBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiSl9EZXNjcmlwdGlvblwiIG5hbWU9XCJKX0Rlc2NyaXB0aW9uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX0Rlc2NyaXB0aW9ufSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlF1YWxcIj5PdGhlciBRdWFsaWZpY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgIGlkPVwiSl9RdWFsaWZpY2F0aW9uXCIgbmFtZT1cIkpfUXVhbGlmaWNhdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9RdWFsaWZpY2F0aW9ufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblx0XHJcbiAgICAgICAgPGRpdiBpZD1cImRlbGV0ZUNvbmZpcm1Nb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGRlbC1kaWFsb2dcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+RGVsZXRlIEpvYjwvaDQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PiBcclxuXHRcdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGpvYj88L3A+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtd2FybmluZ1wiPjxzbWFsbD5UaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLjwvc21hbGw+PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHZhbHVlPVwiQ2FuY2VsXCIgLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiB2YWx1ZT1cIkRlbGV0ZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5kZWxldGVKb2J9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcblx0XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcblx0ICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9ib2R5PlxyXG48Lz5cclxuKX19Il0sInNvdXJjZVJvb3QiOiIifQ==