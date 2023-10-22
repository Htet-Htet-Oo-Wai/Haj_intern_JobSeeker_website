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
          data = snapshot.data();
          console.log(data);

          _this.setState({
            Jname: data.Jname,
            J_Contract: data.J_Contract,
            J_min_salary: data.J_min_salary,
            J_max_salary: data.J_max_salary,
            J_hours: data.J_hours,
            J_Working_Day: data.J_Working_Day,
            J_JpLevel: data.J_JpLevel,
            AREAID: data.AREAID,
            CITYID: data.CITYID,
            J_tel: data.J_tel,
            PostedDate: data.PostedDate,
            J_email: data.J_email,
            J_area: data.J_area,
            J_city: data.J_city,
            J_Address: data.J_Address,
            J_Description: data.J_Description,
            J_Qualification: data.J_Qualification
          });
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
          data = snapshot.data();
          console.log();
          console.log(data);

          _this.setState({
            Jname: data.Jname,
            J_Contract: data.J_Contract,
            J_min_salary: data.J_min_salary,
            J_max_salary: data.J_max_salary,
            J_hours: data.J_hours,
            J_Working_Day: data.J_Working_Day,
            J_JpLevel: data.J_JpLevel,
            AREAID: data.AREAID,
            CITYID: data.CITYID,
            J_tel: data.J_tel,
            PostedDate: data.PostedDate,
            J_email: data.J_email,
            J_area: data.J_area,
            J_city: data.J_city,
            J_Address: data.J_Address,
            J_Description: data.J_Description,
            J_Qualification: data.J_Qualification
          });

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
        firebase.firestore().collection('job').doc(_this.state.edit_id).update({
          Jname: _this.state.Jname,
          J_Contract: _this.state.J_Contract,
          J_min_salary: _this.state.J_min_salary,
          J_max_salary: _this.state.J_max_salary,
          J_hours: _this.state.J_hours,
          J_Working_Day: _this.state.J_Working_Day,
          J_JpLevel: _this.state.J_JpLevel,
          AREAID: _this.state.AREAID,
          CITYID: _this.state.CITYID,
          J_tel: _this.state.J_tel,
          PostedDate: _this.state.PostedDate,
          J_email: _this.state.J_email,
          J_area: _this.state.J_area,
          J_city: _this.state.J_city,
          J_Address: _this.state.J_Address,
          J_Description: _this.state.J_Description,
          J_Qualification: _this.state.J_Qualification
        });

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

      _this.refreshAfterAddTable();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "decreaseJobCount", function (id) {
      var data = {};

      try {
        var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
        firebase.firestore().collection('employer').doc(id).get().then(function (employerQuerySnapshot) {
          data = employerQuerySnapshot.data();
          firebase.firestore().collection('employer').doc(id).update({
            jobCount: data.jobCount - 1
          });
          console.log(data.jobCount - 1);
        });
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
          lineNumber: 328,
          columnNumber: 1
        }
      }, __jsx("nav", {
        className: "sb-topnav navbar navbar-expand navbar-dark bg-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "navbar-brand",
        href: "dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 13
        }
      }, "Admin"), __jsx("button", {
        className: "btn btn-link btn-sm order-1 order-lg-0",
        id: "sidebarToggle",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 13
        }
      }, __jsx("i", {
        className: "fas fa-bars",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 100
        }
      })), __jsx("form", {
        className: "d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "input-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 17
        }
      }, __jsx("ul", {
        className: "navbar-nav ml-auto ml-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 21
        }
      }, __jsx("li", {
        className: "nav-item dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
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
          lineNumber: 337,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "fas fa-user fa-fw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 176
        }
      })), __jsx("div", {
        className: "dropdown-menu dropdown-menu-right",
        "aria-labelledby": "userDropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 33
        }
      }, "Profile"), __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 33
        }
      }, "Activity Log"), __jsx("div", {
        className: "dropdown-divider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 33
        }
      }), __jsx("a", {
        className: "dropdown-item",
        href: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 33
        }
      }, "Logout"))))))), __jsx("div", {
        id: "layoutSidenav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "layoutSidenav_nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 13
        }
      }, __jsx("nav", {
        className: "sb-sidenav accordion sb-sidenav-dark",
        id: "sidenavAccordion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "sb-sidenav-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "sb-sidenav-menu-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 29
        }
      }, "Core"), __jsx("a", {
        className: "nav-link",
        href: "dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "sb-nav-link-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-tachometer-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
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
          lineNumber: 362,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "sb-nav-link-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-book-open",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 67
        }
      })), "Pages", __jsx("div", {
        className: "sb-sidenav-collapse-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
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
          lineNumber: 367,
          columnNumber: 29
        }
      }, __jsx("nav", {
        className: "sb-sidenav-menu-nested nav accordion",
        id: "sidenavAccordionPages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
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
          lineNumber: 369,
          columnNumber: 37
        }
      }, "Authentication", __jsx("div", {
        className: "sb-sidenav-collapse-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
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
          lineNumber: 373,
          columnNumber: 37
        }
      }, __jsx("nav", {
        className: "sb-sidenav-menu-nested nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 45
        }
      }, "Login"), __jsx("a", {
        className: "nav-link",
        href: "register",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 45
        }
      }, "Register"), __jsx("a", {
        className: "nav-link",
        href: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 45
        }
      }, "Forgot Password"))))))))), __jsx("div", {
        id: "layoutSidenav_content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 13
        }
      }, __jsx("main", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "mt-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 25
        }
      }, "List of Jobs"), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "col-xl-3 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "card bg-success text-white mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 37
        }
      }, "Employers Table"), __jsx("div", {
        className: "card-footer d-flex align-items-center justify-content-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "small text-white stretched-link",
        href: "emplyoer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 41
        }
      }, "View Details"), __jsx("div", {
        className: "small text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-angle-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 75
        }
      })))))), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "container admin-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "table-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
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
          lineNumber: 413,
          columnNumber: 9
        }
      }, __jsx("thead", {
        className: "thread-color",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 21
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 21
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 29
        }
      }, "Job Name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 29
        }
      }, "Employment Status"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 29
        }
      }, "City"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 29
        }
      }, "Salary"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 29
        }
      }, "Posted Date"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 29
        }
      }, "Action"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 21
        }
      }, this.state.jobs.map(function (Job) {
        return __jsx("tr", {
          key: Job.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 25
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 29
          }
        }, Job.Jname), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 29
          }
        }, Job.J_Contract), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 29
          }
        }, Job.J_city), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 29
          }
        }, Job.J_min_salary, "~", Job.J_max_salary), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 29
          }
        }, Job.PostedDate), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 29
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433,
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
            lineNumber: 433,
            columnNumber: 36
          }
        }, "\uE417")), " \xA0", __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434,
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
            lineNumber: 434,
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
            lineNumber: 435,
            columnNumber: 9
          }
        }, "\uE872"), " \xA0"));
      }))))), __jsx("div", {
        id: "viewModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 2
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448,
          columnNumber: 6
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
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
          lineNumber: 450,
          columnNumber: 7
        }
      }, "\xD7")), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 6
        }
      }, __jsx("table", {
        className: "table table-bordered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 21
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 31
        }
      }, "Job Name:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 49
        }
      }, this.state.Jname)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 30
        }
      }, " Employer Name:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 54
        }
      }, " ", this.getEmployer(this.state.EMPLOYERID))), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 30
        }
      }, "Posted_Date: "), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 52
        }
      }, this.state.PostedDate)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 31
        }
      }, "Phone Number:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 53
        }
      }, " ", this.state.J_tel)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 31
        }
      }, "Email:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 46
        }
      }, " ", this.state.J_email)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 31
        }
      }, "Address:"), " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 49
        }
      }, " ", this.state.J_Address, ", ", this.getLocation(this.state.CITYID, this.state.AREAID), " ")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 30
        }
      }, "Employment Status:"), " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 58
        }
      }, this.state.J_Contract)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 31
        }
      }, "Salary:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 47
        }
      }, " ", this.state.J_min_salary, "~", this.state.J_max_salary, " Yen")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 30
        }
      }, "Working Days:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 52
        }
      }, " ", this.state.J_Working_Day, " Days per Week")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 30
        }
      }, "Working Hours:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 53
        }
      }, this.state.J_hours)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 31
        }
      }, "Minimum Japanese Skill:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 63
        }
      }, " ", this.state.J_JpLevel)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 30
        }
      }, "Job Description:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 55
        }
      }, " ", this.state.J_Description)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 31
        }
      }, "Job Qualification:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 58
        }
      }, " ", this.state.J_Qualification)))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470,
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
          lineNumber: 471,
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
          lineNumber: 472,
          columnNumber: 25
        }
      }, __jsx("button", {
        className: "btn btn-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 96
        }
      }, "Delete")))))), __jsx("div", {
        id: "editModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481,
          columnNumber: 25
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482,
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
          lineNumber: 483,
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
          lineNumber: 485,
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
          lineNumber: 486,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 41
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492,
          columnNumber: 49
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "Jname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495,
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
          lineNumber: 496,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_Contract",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500,
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
          lineNumber: 501,
          columnNumber: 61
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 53
        }
      }, "Choose Employment Status"), __jsx("option", {
        value: "Full-Time",
        selected: this.state.employmentStatus == "Full-Time" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503,
          columnNumber: 53
        }
      }, "Full Time"), __jsx("option", {
        value: "Part-Time",
        selected: this.state.employmentStatus == "Part-Time" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504,
          columnNumber: 53
        }
      }, "Part Time"))), __jsx("label", {
        "for": "salary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 57
        }
      }, "Salary(\xA5)"), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 57
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 53
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
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
          lineNumber: 511,
          columnNumber: 57
        }
      }))), __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515,
          columnNumber: 53
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516,
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
          lineNumber: 517,
          columnNumber: 57
        }
      })))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_hours",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
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
          lineNumber: 522,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_Working_Day",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525,
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
          lineNumber: 526,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_JpLevel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 61
        }
      }, "Select Japanese Skill"), __jsx("select", {
        id: "J_JpLevel",
        "class": "form-control",
        name: "J_JpLevel",
        onChange: this.handleChange,
        value: this.state.selectedValue,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530,
          columnNumber: 61
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531,
          columnNumber: 61
        }
      }, "Select Japanese level"), __jsx("option", {
        value: "N3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 65
        }
      }, "N3"), __jsx("option", {
        value: "N2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 65
        }
      }, "N2"), __jsx("option", {
        value: "N1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534,
          columnNumber: 65
        }
      }, "N1"))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_tel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539,
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
          lineNumber: 540,
          columnNumber: 61
        }
      })))), __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 45
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 45
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551,
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
        lineNumber: 552,
        columnNumber: 69
      }), _jsx))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 49
        }
      }, __jsx("label", {
        "for": "J_email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555,
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
          lineNumber: 556,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559,
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
          lineNumber: 560,
          columnNumber: 61
        }
      }, __jsx("option", {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 53
        }
      }, "Select Area in Japan"), this.state.areas.map(function (Area) {
        return _this2.state.AREAID == Area.id ? __jsx("option", {
          value: Area.id,
          selected: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 563,
            columnNumber: 57
          }
        }, Area.areaName) : __jsx("option", {
          value: Area.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 564,
            columnNumber: 57
          }
        }, Area.areaName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_city",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 61
        }
      }, "Select your City"), __jsx("select", {
        id: "J_city",
        "class": "form-control",
        name: "J_city",
        onChange: this.handleChange,
        value: this.state.selectedValue,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570,
          columnNumber: 61
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 65
        }
      }, "Select City"), __jsx("option", {
        value: "alabama",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572,
          columnNumber: 65
        }
      }, "Alabama"), __jsx("option", {
        value: "alaska",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573,
          columnNumber: 65
        }
      }, "Alaska"), __jsx("option", {
        value: "arizona",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574,
          columnNumber: 65
        }
      }, "Arizona"), __jsx("option", {
        value: "arkansas",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 65
        }
      }, "Arkansas"), __jsx("option", {
        value: "california",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 65
        }
      }, "California"), __jsx("option", {
        value: "colorado",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577,
          columnNumber: 65
        }
      }, "Colorado"), __jsx("option", {
        value: "connecticut",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 65
        }
      }, "Connecticut"), __jsx("option", {
        value: "delaware",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 65
        }
      }, "Delaware"), __jsx("option", {
        value: "florida",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 65
        }
      }, "Florida"), __jsx("option", {
        value: "georgia",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 65
        }
      }, "Georgia"), __jsx("option", {
        value: "hawaii",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582,
          columnNumber: 65
        }
      }, "Hawaii"), __jsx("option", {
        value: "idaho",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583,
          columnNumber: 65
        }
      }, "Idaho"), __jsx("option", {
        value: "illinois",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 65
        }
      }, "Illinois"), __jsx("option", {
        value: "indiana",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 65
        }
      }, "Indiana"), __jsx("option", {
        value: "iowa",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 65
        }
      }, "Iowa"), __jsx("option", {
        value: "kansas",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587,
          columnNumber: 65
        }
      }, "Kansas"), __jsx("option", {
        value: "kentucky",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588,
          columnNumber: 65
        }
      }, "Kentucky"), __jsx("option", {
        value: "louisiana",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589,
          columnNumber: 65
        }
      }, "Louisiana"), __jsx("option", {
        value: "maine",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 65
        }
      }, "Maine"), __jsx("option", {
        value: "maryland",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 65
        }
      }, "Maryland"), __jsx("option", {
        value: "massachusetts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 65
        }
      }, "Massachusetts"), __jsx("option", {
        value: "michigan",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593,
          columnNumber: 65
        }
      }, "Michigan"), __jsx("option", {
        value: "minnesota",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 65
        }
      }, "Minnesota"), __jsx("option", {
        value: "mississippi",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 65
        }
      }, "Mississippi"), __jsx("option", {
        value: "missouri",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596,
          columnNumber: 65
        }
      }, "Missouri"), __jsx("option", {
        value: "montana",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 65
        }
      }, "Montana"), __jsx("option", {
        value: "nebraska",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 65
        }
      }, "Nebraska"), __jsx("option", {
        value: "nevada",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599,
          columnNumber: 65
        }
      }, "Nevada"), __jsx("option", {
        value: "new hampshire",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600,
          columnNumber: 65
        }
      }, "New Hampshire"), __jsx("option", {
        value: "new jersey",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601,
          columnNumber: 65
        }
      }, "New Jersey"), __jsx("option", {
        value: "new mexico",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602,
          columnNumber: 65
        }
      }, "New Mexico"), __jsx("option", {
        value: "new york",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 65
        }
      }, "New York"), __jsx("option", {
        value: "north carolina",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 65
        }
      }, "North Carolina"))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "detailAddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 61
        }
      }, "Detail Address"), __jsx("textarea", {
        "class": "form-control",
        name: "J_Address",
        onChange: this.handleChange,
        value: this.state.J_Address,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "JobDes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617,
          columnNumber: 61
        }
      }, "Job Description"), __jsx("textarea", {
        "class": "form-control",
        name: "J_Description",
        onChange: this.handleChange,
        value: this.state.J_Description,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "Qual",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624,
          columnNumber: 61
        }
      }, "Other Qualification"), __jsx("textarea", {
        "class": "form-control",
        name: "J_Qualification",
        onChange: this.handleChange,
        value: this.state.J_Qualification,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625,
          columnNumber: 61
        }
      }))))))))))), __jsx("div", {
        id: "deleteConfirmModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "modal-dialog del-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646,
          columnNumber: 37
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647,
          columnNumber: 41
        }
      }, "Delete Job"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648,
          columnNumber: 41
        }
      }, "\xD7")), __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650,
          columnNumber: 37
        }
      }, __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651,
          columnNumber: 41
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652,
          columnNumber: 45
        }
      }, "Are you sure you want to delete this job?"), __jsx("p", {
        className: "text-warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653,
          columnNumber: 45
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653,
          columnNumber: 73
        }
      }, "This action cannot be undone.")))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 37
        }
      }, __jsx("input", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal",
        value: "Cancel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657,
          columnNumber: 41
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
          lineNumber: 658,
          columnNumber: 41
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZzEuanMiXSwibmFtZXMiOlsiam9iTGlzdCIsInByb3BzIiwiaWQiLCIkIiwibW9kYWwiLCJzZXRTdGF0ZSIsImRlbGV0ZV9pZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVkaXRfaWQiLCJmaXJlYmFzZSIsImxvYWRGaXJlYmFzZSIsImRhdGEiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiSm5hbWUiLCJKX0NvbnRyYWN0IiwiSl9taW5fc2FsYXJ5IiwiSl9tYXhfc2FsYXJ5IiwiSl9ob3VycyIsIkpfV29ya2luZ19EYXkiLCJKX0pwTGV2ZWwiLCJBUkVBSUQiLCJDSVRZSUQiLCJKX3RlbCIsIlBvc3RlZERhdGUiLCJKX2VtYWlsIiwiSl9hcmVhIiwiSl9jaXR5IiwiSl9BZGRyZXNzIiwiSl9EZXNjcmlwdGlvbiIsIkpfUXVhbGlmaWNhdGlvbiIsImVycm9yIiwiam9iTmFtZSIsImdldEFyZWEiLCJ1cGRhdGUiLCJyZWZyZXNoVGFibGUiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImRlY3JlYXNlSm9iQ291bnQiLCJjb21wYW55IiwicmVmcmVzaEFmdGVyQWRkVGFibGUiLCJlbXBsb3llclF1ZXJ5U25hcHNob3QiLCJqb2JDb3VudCIsIkVNUExPWUVSSUQiLCJlbXBsb3llcnMiLCJlbXBsb3llciIsImVtcGxveWVyTmFtZSIsIm1hcCIsIkVtcGxveWVycyIsImNpdHkiLCJhcmVhIiwiY2l0eU5hbWUiLCJhcmVhTmFtZSIsIkNpdHkiLCJBcmVhIiwiYXJlYVF1ZXJ5U25hcHNob3QiLCJpbml0aWFsX3N0YXRlIiwiaW5wdXRzIiwiaW5kZXgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmVBdHRyIiwiYXR0ciIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJkYXRhdGFibGVSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIiRkYXRhdGFibGUiLCJqb2JzIiwiam9iIiwiYXJlYXMiLCJpbml0aWFsaXplRGF0YXRhYmxlIiwiY3VycmVudCIsIkRhdGFUYWJsZSIsIm9yZGVyIiwiY2xlYXIiLCJzZWxmIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJjaXRpZXMiLCJ3aWR0aCIsIkpvYiIsInZpZXdQYXNzSWQiLCJjb2xvciIsImN1cnNvciIsImVkaXRQYXNzSWQiLCJkZWxldGVQYXNzSWQiLCJnZXRFbXBsb3llciIsImdldExvY2F0aW9uIiwiZm9ybV9jbGVhciIsImFkZEpvYiIsImRpc2FibGUiLCJzZWxlY3RlZFZhbHVlIiwiZW1wbG95bWVudFN0YXR1cyIsImRlbGV0ZUpvYiIsImpvYlF1ZXJ5U25hcHNob3QiLCJkb2NzIiwiY2l0eVF1ZXJ5U25hcHNob3QiLCJsaW1pdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7QUFFakIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSx1TkE0RkosVUFBQ0MsRUFBRCxFQUFNO0FBQ2pCQyxPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkMsS0FBekIsQ0FBK0IsTUFBL0I7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLGlCQUFTLEVBQUdKO0FBQWIsT0FBZDs7QUFDQUssYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBTCxDQUFXSCxTQUF2QjtBQUNILEtBaEdrQjs7QUFBQSxxTkFpR0YsVUFBQ0osRUFBRCxFQUFRO0FBQ2pCLFlBQUtHLFFBQUwsQ0FBYztBQUFDSyxlQUFPLEVBQUdSO0FBQVgsT0FBZDs7QUFDQSxVQUFJUyxRQUFRLEdBQUdDLGdFQUFZLEVBQTNCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsVUFB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LENBQStCLFVBQUN2QyxHQUFEO0FBQUEseUJBQVU7QUFDdkRILHdCQUFJLEVBQUdHLEdBQUcsQ0FBQ0gsSUFBSixFQURnRDtBQUV2RFgsc0JBQUUsRUFBRWMsR0FBRyxDQUFDZDtBQUYrQyxtQkFBVjtBQUFBLGlCQUEvQixDO2lEQUlYO0FBQUM4RSxxQkFBRyxFQUFHRCxJQUFQO0FBQWFyQixzQkFBSSxFQUFHdUIsS0FBcEI7QUFBMkJ4QixzQkFBSSxFQUFHaUMsTUFBbEM7QUFBMENyQywwQkFBUSxFQUFFRDtBQUFwRCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNGc0J3Qiw0Q0FBSyxDQUFDa0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZWcxLmpzLjg5ZmMwNGQ1NTc4MTA0ZTg4YjhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge2xvYWRGaXJlYmFzZX0gZnJvbSAnLi4vbGliL2RiLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpvYkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRhdGF0YWJsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHRoaXMuJGRhdGF0YWJsZSA9IG51bGxcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBlZGl0X2lkIDogJycsXHJcbiAgICAgICAgICAgIGRlbGV0ZV9pZCA6ICcnLFxyXG4gICAgICAgICAgICBKbmFtZTonJyxcclxuICAgICAgICAgICAgSl90ZWw6JycsXHJcbiAgICAgICAgICAgIEpfbWluX3NhbGFyeTonJyxcclxuICAgICAgICAgICAgSl9tYXhfc2FsYXJ5OicnLFxyXG4gICAgICAgICAgICBQb3N0ZWREYXRlOicnLFxyXG4gICAgICAgICAgICBKX2hvdXJzOicnLFxyXG4gICAgICAgICAgICBKX2VtYWlsOicnLFxyXG4gICAgICAgICAgICBKX2NpdHk6JycsXHJcbiAgICAgICAgICAgIEpfYXJlYTonJyxcclxuICAgICAgICAgICAgSl9Xb3JraW5nX0RheTonJyxcclxuICAgICAgICAgICAgSl9RdWFsaWZpY2F0aW9uOicnLFxyXG4gICAgICAgICAgICBKX0pwTGV2ZWw6JycsXHJcbiAgICAgICAgICAgIEpfRGVzY3JpcHRpb246JycsXHJcbiAgICAgICAgICAgIEpfQ29udHJhY3Q6JycsXHJcbiAgICAgICAgICAgIEpfQWRkcmVzczonJyxcclxuICAgICAgICAgICAgYXJlYU5hbWUgOiAnJyxcclxuICAgICAgICAgICAgam9icyA6IHByb3BzLmpvYiB8fCBbXSxcclxuICAgICAgICAgICAgYXJlYXMgOiBwcm9wcy5hcmVhIHx8IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVEYXRhdGFibGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVEYXRhdGFibGUoKSB7XHJcbiAgICAgIHRoaXMuJGRhdGF0YWJsZSA9ICQodGhpcy5kYXRhdGFibGVSZWYuY3VycmVudCkuRGF0YVRhYmxlKHtcclxuICAgICAgICAgIG9yZGVyOiBbWzMsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRhYmxlKCkge1xyXG4gICAgICB0aGlzLiRkYXRhdGFibGUuY2xlYXIoKVxyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgam9iTGlzdFxyXG4gICAgICAgIC5nZXRJbml0aWFsUHJvcHMoKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGpvYnM6IHJlc3BvbnNlLmpvYixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gc2VsZi5pbml0aWFsaXplRGF0YXRhYmxlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCBmaXJlYmFzZSA9IGF3YWl0IGxvYWRGaXJlYmFzZSgpIFxyXG4gICAgICAgIGNvbnN0IGpvYlF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oXCJqb2JcIilcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGpvYnMgPSBqb2JRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGNvbnN0IGFyZWFRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiYXJlYVwiKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgYXJlYXMgPSBhcmVhUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2l0eVF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiY2l0eVwiKVxyXG4gICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBjaXRpZXMgPSBjaXR5UXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXJRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiZW1wbG95ZXJcIilcclxuICAgICAgICAgICAgLmxpbWl0KDEwKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXJzID0gZW1wbG95ZXJRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIGRhdGEgOiBkb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4ge2pvYiA6IGpvYnMsIGFyZWEgOiBhcmVhcywgY2l0eSA6IGNpdGllcywgZW1wbG95ZXI6IGVtcGxveWVyc307XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUGFzc0lkID0gKGlkKT0+e1xyXG4gICAgICAgICQoXCIjZGVsZXRlQ29uZmlybU1vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVsZXRlX2lkIDogaWR9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGVsZXRlX2lkKVxyXG4gICAgfTsgICAgICBcclxuICAgICAgICB2aWV3UGFzc0lkID0gKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRfaWQgOiBpZH0pXHJcbiAgICAgICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge31cclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJykuZG9jKGlkKS5nZXQoKS5cclxuICAgICAgICAgICAgICAgIHRoZW4oKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzbmFwc2hvdC5kYXRhKClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEpuYW1lOmRhdGEuSm5hbWUsXHJcbiAgICAgICAgICAgICAgICBKX0NvbnRyYWN0OmRhdGEuSl9Db250cmFjdCxcclxuICAgICAgICAgICAgICAgIEpfbWluX3NhbGFyeTpkYXRhLkpfbWluX3NhbGFyeSxcclxuICAgICAgICAgICAgICAgIEpfbWF4X3NhbGFyeTpkYXRhLkpfbWF4X3NhbGFyeSxcclxuICAgICAgICAgICAgICAgIEpfaG91cnM6ZGF0YS5KX2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgSl9Xb3JraW5nX0RheTpkYXRhLkpfV29ya2luZ19EYXksXHJcbiAgICAgICAgICAgICAgICBKX0pwTGV2ZWw6ZGF0YS5KX0pwTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBBUkVBSUQgOiBkYXRhLkFSRUFJRCxcclxuICAgICAgICAgICAgICAgIENJVFlJRCA6IGRhdGEuQ0lUWUlELFxyXG4gICAgICAgICAgICAgICAgIEpfdGVsOmRhdGEuSl90ZWwsXHJcbiAgICAgICAgICAgICAgICBQb3N0ZWREYXRlOmRhdGEuUG9zdGVkRGF0ZSxcclxuICAgICAgICAgICAgICAgIEpfZW1haWw6ZGF0YS5KX2VtYWlsLFxyXG4gICAgICAgICAgICAgICAgSl9hcmVhOmRhdGEuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgSl9jaXR5OmRhdGEuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgSl9BZGRyZXNzOmRhdGEuSl9BZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgSl9EZXNjcmlwdGlvbjpkYXRhLkpfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBKX1F1YWxpZmljYXRpb246ZGF0YS5KX1F1YWxpZmljYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGRhdGFcIilcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuam9iTmFtZSlcclxuICAgICAgICAgICAgJChcIiN2aWV3TW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZWRpdFBhc3NJZCA9IChpZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlZGl0X2lkIDogaWR9KVxyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2pvYicpLmRvYyhpZCkuZ2V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gc25hcHNob3QuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBKbmFtZTpkYXRhLkpuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0NvbnRyYWN0OmRhdGEuSl9Db250cmFjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9taW5fc2FsYXJ5OmRhdGEuSl9taW5fc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX21heF9zYWxhcnk6ZGF0YS5KX21heF9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfaG91cnM6ZGF0YS5KX2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX1dvcmtpbmdfRGF5OmRhdGEuSl9Xb3JraW5nX0RheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9KcExldmVsOmRhdGEuSl9KcExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBUkVBSUQgOiBkYXRhLkFSRUFJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ0lUWUlEIDogZGF0YS5DSVRZSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBKX3RlbDpkYXRhLkpfdGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0ZWREYXRlOmRhdGEuUG9zdGVkRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9lbWFpbDpkYXRhLkpfZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfYXJlYTpkYXRhLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9jaXR5OmRhdGEuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0FkZHJlc3M6ZGF0YS5KX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfRGVzY3JpcHRpb246ZGF0YS5KX0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX1F1YWxpZmljYXRpb246ZGF0YS5KX1F1YWxpZmljYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFyZWEoZGF0YS5BUkVBSUQpXHJcbiAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoXCIjZWRpdE1vZGFsXCIpLm1vZGFsKCdzaG93JylcclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZUpvYiA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJykuZG9jKHRoaXMuc3RhdGUuZWRpdF9pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBKbmFtZTp0aGlzLnN0YXRlLkpuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfQ29udHJhY3Q6dGhpcy5zdGF0ZS5KX0NvbnRyYWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfbWluX3NhbGFyeTp0aGlzLnN0YXRlLkpfbWluX3NhbGFyeSxcclxuICAgICAgICAgICAgICAgICAgICBKX21heF9zYWxhcnk6dGhpcy5zdGF0ZS5KX21heF9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgSl9ob3Vyczp0aGlzLnN0YXRlLkpfaG91cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9Xb3JraW5nX0RheTp0aGlzLnN0YXRlLkpfV29ya2luZ19EYXksXHJcbiAgICAgICAgICAgICAgICAgICAgSl9KcExldmVsOnRoaXMuc3RhdGUuSl9KcExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIEFSRUFJRCA6IHRoaXMuc3RhdGUuQVJFQUlELFxyXG4gICAgICAgICAgICAgICAgICAgIENJVFlJRCA6IHRoaXMuc3RhdGUuQ0lUWUlELFxyXG4gICAgICAgICAgICAgICAgICAgIEpfdGVsOnRoaXMuc3RhdGUuSl90ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgUG9zdGVkRGF0ZTp0aGlzLnN0YXRlLlBvc3RlZERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9lbWFpbDp0aGlzLnN0YXRlLkpfZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9hcmVhOnRoaXMuc3RhdGUuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfY2l0eTp0aGlzLnN0YXRlLkpfY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBKX0FkZHJlc3M6dGhpcy5zdGF0ZS5KX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9EZXNjcmlwdGlvbjp0aGlzLnN0YXRlLkpfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgSl9RdWFsaWZpY2F0aW9uOnRoaXMuc3RhdGUuSl9RdWFsaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFRhYmxlKCk7XHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgICBpZihldmVudC50YXJnZXQubmFtZSA9PSBcIkFSRUFJRFwiKXtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZGVsZXRlSm9iID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdqb2InKVxyXG4gICAgICAgICAgICAuZG9jKHRoaXMuc3RhdGUuZGVsZXRlX2lkKVxyXG4gICAgICAgICAgICAuZGVsZXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVhc2VKb2JDb3VudCh0aGlzLnN0YXRlLmNvbXBhbnkpXHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRhYmxlKCk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmcmVzaEFmdGVyQWRkVGFibGUoKVxyXG4gICAgfTtcclxuXHJcbiAgICBkZWNyZWFzZUpvYkNvdW50ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignZW1wbG95ZXInKVxyXG4gICAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKGVtcGxveWVyUXVlcnlTbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgZGF0YSA9IGVtcGxveWVyUXVlcnlTbmFwc2hvdC5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2VtcGxveWVyJylcclxuICAgICAgICAgICAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe2pvYkNvdW50IDogZGF0YS5qb2JDb3VudC0xfSkgXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuam9iQ291bnQtMSkgXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wbG95ZXIgPSAoRU1QTE9ZRVJJRCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtcGxveWVycyA9IHRoaXMucHJvcHMuZW1wbG95ZXJcclxuICAgICAgICBsZXQgZW1wbG95ZXJOYW1lID0gJydcclxuICAgICAgICBjb25zb2xlLmxvZyhFTVBMT1lFUklEKVxyXG4gICAgICAgIGVtcGxveWVycyAmJiBlbXBsb3llcnMubWFwKEVtcGxveWVycyA9PiB7XHJcbiAgICAgICAgICAgIGlmKEVtcGxveWVycy5pZCA9PSBFTVBMT1lFUklEKXtcclxuICAgICAgICAgICAgICAgIGVtcGxveWVyTmFtZSA9IEVtcGxveWVycy5kYXRhLmVtcGxveWVyTmFtZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtcGxveWVyTmFtZSlcclxuICAgICAgICByZXR1cm4gZW1wbG95ZXJOYW1lXHJcbiAgICAgfVxyXG5cclxuICAgICBnZXRMb2NhdGlvbiA9IChDSVRZSUQsIEFSRUFJRCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNpdHkgPSB0aGlzLnByb3BzLmNpdHlcclxuICAgICAgICBjb25zdCBhcmVhID0gdGhpcy5wcm9wcy5hcmVhXHJcbiAgICAgICAgbGV0IGNpdHlOYW1lID0gJydcclxuICAgICAgICBsZXQgYXJlYU5hbWUgPSAnJ1xyXG5cclxuICAgICAgICBjaXR5ICYmIGNpdHkubWFwKENpdHk9PntcclxuICAgICAgICAgICAgaWYoQ2l0eS5pZCA9PSBDSVRZSUQpe1xyXG4gICAgICAgICAgICAgICAgY2l0eU5hbWUgPSBDaXR5LmNpdHlOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGFyZWEgJiYgYXJlYS5tYXAoQXJlYT0+e1xyXG4gICAgICAgICAgICBpZihBcmVhLmlkID09IEFSRUFJRCl7XHJcbiAgICAgICAgICAgICAgICBhcmVhTmFtZSA9IEFyZWEuYXJlYU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICByZXR1cm4gY2l0eU5hbWUgKyBcIixcIiArIGFyZWFOYW1lXHJcbiAgICAgfVxyXG5cclxuICAgIGdldEFyZWEgPSAoaWQpID0+IHtcclxuICAgICAgICBsZXQgYXJlYSA9IHt9XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdhcmVhJylcclxuICAgICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChhcmVhUXVlcnlTbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgIGFyZWEgPSBhcmVhUXVlcnlTbmFwc2hvdC5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthcmVhTmFtZSA6IGFyZWEuYXJlYU5hbWV9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtX2NsZWFyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxfc3RhdGUpO1xyXG4gICAgICAgIGxldCBpbnB1dHMsIGluZGV4O1xyXG4gICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGlucHV0cy5sZW5ndGg7ICsraW5kZXgpIHtcclxuICAgICAgICAgICAgaW5wdXRzW2luZGV4XS52YWx1ZSA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKX0FkZHJlc3MnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKX0Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSl9RdWFsaWZpY2F0aW9uJykudmFsdWUgPSAnJztcclxuICAgICAgIFxyXG4gIFxyXG4gICAgICAgICQoXCIjSl9Db250cmFjdCBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNKX0NvbnRyYWN0IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICQoXCIjSl9KcExldmVsIG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI0pfSnBMZXZlbCBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjY2l0eSBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTsgXHJcbiAgICAgICAgJChcIiNhcmVhIG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI2FyZWEgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7ICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGRpc2FibGUgPSAoZXZlbnQpID0+IHsgICBcclxuICAgICAgICAkKFwiI0pfQ29udHJhY3Qgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7IFxyXG4gICAgICAgICQoXCIjSl9KcExldmVsIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpOyBcclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgJChcIiNhcmVhIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpOyBcclxuICAgIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2l0aWVzID0gdGhpcy5zdGF0ZS5jaXRpZXNcclxuICAgIGNvbnN0IGFyZWFzID0gdGhpcy5zdGF0ZS5hcmVhc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuPGJvZHkgY2xhc3NOYW1lPVwic2ItbmF2LWZpeGVkXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi10b3BuYXYgbmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiZGFzaGJvYXJkXCI+QWRtaW48L2E+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbSBvcmRlci0xIG9yZGVyLWxnLTBcIiBpZD1cInNpZGViYXJUb2dnbGVcIiBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmUtYmxvY2sgZm9ybS1pbmxpbmUgbWwtYXV0byBtci0wIG1yLW1kLTMgbXktMiBteS1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0byBtbC1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaWQ9XCJ1c2VyRHJvcGRvd25cIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlciBmYS1md1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiIGFyaWEtbGFiZWxsZWRieT1cInVzZXJEcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aXZpdHkgTG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwibG9naW5cIj5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2X25hdlwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2IGFjY29yZGlvbiBzYi1zaWRlbmF2LWRhcmtcIiBpZD1cInNpZGVuYXZBY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtaGVhZGluZ1wiPkNvcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ItbmF2LWxpbmstaWNvblwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWNob21ldGVyLWFsdFwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBjb2xsYXBzZWRcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZVBhZ2VzXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlUGFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLW5hdi1saW5rLWljb25cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYm9vay1vcGVuXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9XCJjb2xsYXBzZVBhZ2VzXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ1R3b1wiIGRhdGEtcGFyZW50PVwiI3NpZGVuYXZBY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudS1uZXN0ZWQgbmF2IGFjY29yZGlvblwiIGlkPVwic2lkZW5hdkFjY29yZGlvblBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGNvbGxhcHNlZFwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI3BhZ2VzQ29sbGFwc2VBdXRoXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cInBhZ2VzQ29sbGFwc2VBdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPVwicGFnZXNDb2xsYXBzZUF1dGhcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nT25lXCIgZGF0YS1wYXJlbnQ9XCIjc2lkZW5hdkFjY29yZGlvblBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudS1uZXN0ZWQgbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwibG9naW5cIj5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJyZWdpc3RlclwiPlJlZ2lzdGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cInBhc3N3b3JkXCI+Rm9yZ290IFBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxheW91dFNpZGVuYXZfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTRcIj5MaXN0IG9mIEpvYnM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctc3VjY2VzcyB0ZXh0LXdoaXRlIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5FbXBsb3llcnMgVGFibGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LXdoaXRlIHN0cmV0Y2hlZC1saW5rXCIgaHJlZj1cImVtcGx5b2VyXCI+VmlldyBEZXRhaWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWRtaW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPHRhYmxlIHJlZj17dGhpcy5kYXRhdGFibGVSZWZ9IGNsYXNzTmFtZT1cImRpc3BsYXkgdGFibGUgdGFibGUtYm9yZGVyZWRcIiBzdHlsZT17e3dpZHRoOjEwMCtcIiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0aHJlYWQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Sm9iIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtcGxveW1lbnQgU3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TYWxhcnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvc3RlZCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYnMubWFwKEpvYj0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17Sm9iLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Sm9iLkpuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5KX0NvbnRyYWN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5KX2NpdHl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Sm9iLkpfbWluX3NhbGFyeX1+e0pvYi5KX21heF9zYWxhcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Sm9iLlBvc3RlZERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBvbkNsaWNrPXsoKT0+dGhpcy52aWV3UGFzc0lkKEpvYi5pZCl9IGNsYXNzTmFtZT1cInZpZXcgbWF0ZXJpYWwtaWNvbnMgaWNvbi1wYWRkaW5nXCIgdGl0bGU9XCJWaWV3XCIgc3R5bGU9e3tjb2xvcjogXCJyZ2IoMCwgMTEwLCAyNTUpXCIsIGN1cnNvcjpcInBvaW50ZXJcIn19IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCI+JiN4RTQxNzs8L2k+PC9hPiAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBvbkNsaWNrPXsoKT0+dGhpcy5lZGl0UGFzc0lkKEpvYi5pZCl9IGNsYXNzTmFtZT1cImVkaXQgbWF0ZXJpYWwtaWNvbnMgaWNvbi1wYWRkaW5nXCIgdGl0bGU9XCJFZGl0XCIgc3R5bGU9e3tjb2xvcjogXCJ5ZWxsb3dcIiwgY3Vyc29yOlwicG9pbnRlclwifX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIj4mI3hFMjU0OzwvaT48L2E+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCk9PnRoaXMuZGVsZXRlUGFzc0lkKEpvYi5pZCl9IGNsYXNzTmFtZT1cImRlbGV0ZSBtYXRlcmlhbC1pY29ucyBpY29uLXBhZGRpbmdcIiB0aXRsZT1cIkRlbGV0ZVwiICBzdHlsZT17e2NvbG9yOiBcInJlZFwiLCBjdXJzb3I6XCJwb2ludGVyXCJ9fSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiYjeEU4NzI7PC9hPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHRcclxuXHQ8ZGl2IGlkPVwidmlld01vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgaW5mby1kaWFsb2dcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5EZXRhaWwgSW5mb3JtYXRpb248L2g0PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkpvYiBOYW1lOjwvdGQ+PHRkPnt0aGlzLnN0YXRlLkpuYW1lfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+IEVtcGxveWVyIE5hbWU6PC90ZD48dGQ+IHt0aGlzLmdldEVtcGxveWVyKHRoaXMuc3RhdGUuRU1QTE9ZRVJJRCl9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Qb3N0ZWRfRGF0ZTogPC90ZD48dGQ+e3RoaXMuc3RhdGUuUG9zdGVkRGF0ZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5QaG9uZSBOdW1iZXI6PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfdGVsfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkVtYWlsOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX2VtYWlsfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkFkZHJlc3M6PC90ZD4gPHRkPiB7dGhpcy5zdGF0ZS5KX0FkZHJlc3N9LCB7dGhpcy5nZXRMb2NhdGlvbih0aGlzLnN0YXRlLkNJVFlJRCx0aGlzLnN0YXRlLkFSRUFJRCl9IDwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+RW1wbG95bWVudCBTdGF0dXM6PC90ZD4gPHRkPnt0aGlzLnN0YXRlLkpfQ29udHJhY3R9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+U2FsYXJ5OjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX21pbl9zYWxhcnl9fnt0aGlzLnN0YXRlLkpfbWF4X3NhbGFyeX0gWWVuPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Xb3JraW5nIERheXM6PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfV29ya2luZ19EYXl9IERheXMgcGVyIFdlZWs8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPldvcmtpbmcgSG91cnM6PC90ZD48dGQ+e3RoaXMuc3RhdGUuSl9ob3Vyc308L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5NaW5pbXVtIEphcGFuZXNlIFNraWxsOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX0pwTGV2ZWx9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Kb2IgRGVzY3JpcHRpb246PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfRGVzY3JpcHRpb259PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+Sm9iIFF1YWxpZmljYXRpb246PC90ZD48dGQ+IHt0aGlzLnN0YXRlLkpfUXVhbGlmaWNhdGlvbn08L3RkPjwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpPT50aGlzLmRlbGV0ZVBhc3NJZCh0aGlzLnN0YXRlLmlkKX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlPC9idXR0b24+PC9hPiBcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiZWRpdE1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBpbmZvLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5BcHBsaWNhdGlvbiBSZXF1aXJlbWVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5mb3JtX2NsZWFyfSBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwicG9zdFwiIHN0eWxlPXt7d2lkdGg6IDEwMCtcIiVcIn19IG9uU3VibWl0PXt0aGlzLmFkZEpvYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSByb2xlPVwiRm9ybVwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCJcIiBhY2NlcHQtY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTggYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSm5hbWVcIj5Kb2IgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBKb2IgTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSm5hbWV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9Db250cmFjdFwiPkVtcGxveW1lbnQgU3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiSl9Db250cmFjdFwiIGlkPVwiSl9Db250cmFjdFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5DaG9vc2UgRW1wbG95bWVudCBTdGF0dXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGdWxsLVRpbWVcIiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5lbXBsb3ltZW50U3RhdHVzID09IFwiRnVsbC1UaW1lXCIgICA/IChcInNlbGVjdGVkXCIpIDogKFwiZmFsc2VcIil9PkZ1bGwgVGltZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBhcnQtVGltZVwiIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmVtcGxveW1lbnRTdGF0dXMgPT0gXCJQYXJ0LVRpbWVcIiA/IChcInNlbGVjdGVkXCIpIDogKFwiZmFsc2VcIil9PlBhcnQgVGltZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic2FsYXJ5XCI+U2FsYXJ5KMKlKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtaW5fc2FsYXJ5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9taW5fc2FsYXJ5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBNaW5pbXVuIFNhbGFyeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9taW5fc2FsYXJ5fSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYXhfc2FsYXJ5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9tYXhfc2FsYXJ5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBNYXhpbXVuIFNhbGFyeVwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfbWF4X3NhbGFyeX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX2hvdXJzXCI+V29ya2luZyBIb3VyczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl9ob3Vyc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfaG91cnNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFdvcmtpbmcgSG91cnNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfaG91cnN9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9Xb3JraW5nX0RheVwiPldvcmtpbmcgRGF5czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl9Xb3JraW5nX0RheVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfV29ya2luZ19EYXlcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFdvcmtpbmcgRGF5c1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9Xb3JraW5nX0RheX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX0pwTGV2ZWxcIj5TZWxlY3QgSmFwYW5lc2UgU2tpbGw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiSl9KcExldmVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9KcExldmVsXCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgZGlzYWJsZWQ+U2VsZWN0IEphcGFuZXNlIGxldmVsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTjNcIj5OMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk4yXCI+TjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOMVwiPk4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfdGVsXCI+VGVsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl90ZWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX3RlbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGhvbmU6XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX3RlbH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBvc3RlZCBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cImRhdGV0aW1lXCIgbmFtZT1cIlBvc3RlZERhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLlBvc3RlZERhdGV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfZW1haWxcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJKX2VtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9lbWFpbFwiIHBsYWNlaG9sZGVyPVwiYWJjQGdtYWlsLmNvbVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9lbWFpbH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKLWFyZWFcIj5TZWxlY3QgQXJlYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkFSRUFJRFwiIGlkPVwiYXJlYVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IEFyZWEgaW4gSmFwYW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFyZWFzLm1hcChBcmVhID0+ICh0aGlzLnN0YXRlLkFSRUFJRCA9PSBBcmVhLmlkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17QXJlYS5pZH0gc2VsZWN0ZWQ+e0FyZWEuYXJlYU5hbWV9PC9vcHRpb24+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17QXJlYS5pZH0+e0FyZWEuYXJlYU5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfY2l0eVwiPlNlbGVjdCB5b3VyIENpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiSl9jaXR5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9jaXR5XCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkPlNlbGVjdCBDaXR5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxhYmFtYVwiPkFsYWJhbWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGFza2FcIj5BbGFza2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhcml6b25hXCI+QXJpem9uYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFya2Fuc2FzXCI+QXJrYW5zYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjYWxpZm9ybmlhXCI+Q2FsaWZvcm5pYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvbG9yYWRvXCI+Q29sb3JhZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjb25uZWN0aWN1dFwiPkNvbm5lY3RpY3V0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVsYXdhcmVcIj5EZWxhd2FyZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZsb3JpZGFcIj5GbG9yaWRhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ2VvcmdpYVwiPkdlb3JnaWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoYXdhaWlcIj5IYXdhaWk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpZGFob1wiPklkYWhvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaWxsaW5vaXNcIj5JbGxpbm9pczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImluZGlhbmFcIj5JbmRpYW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW93YVwiPklvd2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrYW5zYXNcIj5LYW5zYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrZW50dWNreVwiPktlbnR1Y2t5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG91aXNpYW5hXCI+TG91aXNpYW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFpbmVcIj5NYWluZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hcnlsYW5kXCI+TWFyeWxhbmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYXNzYWNodXNldHRzXCI+TWFzc2FjaHVzZXR0czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1pY2hpZ2FuXCI+TWljaGlnYW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtaW5uZXNvdGFcIj5NaW5uZXNvdGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtaXNzaXNzaXBwaVwiPk1pc3Npc3NpcHBpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWlzc291cmlcIj5NaXNzb3VyaTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vbnRhbmFcIj5Nb250YW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmVicmFza2FcIj5OZWJyYXNrYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5ldmFkYVwiPk5ldmFkYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5ldyBoYW1wc2hpcmVcIj5OZXcgSGFtcHNoaXJlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV3IGplcnNleVwiPk5ldyBKZXJzZXk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZXcgbWV4aWNvXCI+TmV3IE1leGljbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5ldyB5b3JrXCI+TmV3IFlvcms8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub3J0aCBjYXJvbGluYVwiPk5vcnRoIENhcm9saW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXRhaWxBZGRyXCI+RGV0YWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9BZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX0FkZHJlc3N9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpvYkRlc1wiPkpvYiBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX0Rlc2NyaXB0aW9uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX0Rlc2NyaXB0aW9ufSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlF1YWxcIj5PdGhlciBRdWFsaWZpY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfUXVhbGlmaWNhdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9RdWFsaWZpY2F0aW9ufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkZWxldGVDb25maXJtTW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBkZWwtZGlhbG9nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5EZWxldGUgSm9iPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGpvYj88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nXCI+PHNtYWxsPlRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuPC9zbWFsbD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIHZhbHVlPVwiRGVsZXRlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXt0aGlzLmRlbGV0ZUpvYn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcblx0XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcblx0ICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9ib2R5PlxyXG48Lz5cclxuKX19Il0sInNvdXJjZVJvb3QiOiIifQ==