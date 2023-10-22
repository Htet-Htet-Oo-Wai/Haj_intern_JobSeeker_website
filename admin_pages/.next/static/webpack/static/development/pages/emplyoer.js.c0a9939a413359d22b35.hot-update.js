webpackHotUpdate("static\\development\\pages\\emplyoer.js",{

/***/ "./pages/emplyoer.js":
/*!***************************!*\
  !*** ./pages/emplyoer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return employerList; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
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









var _jsxFileName = "C:\\Users\\lenovo\\Desktop\\admin_pages\\pages\\emplyoer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var employerList = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(employerList, _React$Component);

  var _super = _createSuper(employerList);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(employerList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var script = document.createElement("script");
      script.src = "/js/scripts.js";
      script.async = true;
      document.body.appendChild(script);
      var script1 = document.createElement("script");
      script1.src = "/assets/demo/datatables-demo.js";
      script1.async = true;
      document.body.appendChild(script1);
    }
  }]);

  function employerList(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, employerList);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "deletePassId", function (id) {
      $("#deleteConfirmModal").modal('show');

      _this.setState({
        delete_id: id
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "addPassId", function (id) {
      _this.setState({
        edit_id: id
      });

      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var data = {};

      try {
        firebase.firestore().collection('employer').doc(id).get().then(function (snapshot) {
          data = snapshot.data();
          console.log(data);

          _this.setState({
            EMPLOYERID: data.edit_id,
            C_Name: data.C_Name,
            C_noEmp: data.C_noEmp,
            C_published_date: data.C_published_date,
            C_tel: data.C_tel,
            C_emailaddr: data.C_emailaddr,
            C_city: data.C_city,
            C_area: data.C_area,
            C_Address: data.C_Address,
            C_Description: data.C_Description
          });
        });
        console.log("getting data");
        console.log(_this.state.employerName);
      } catch (error) {
        console.log(error);
      }

      console.log(_this.state.employerName);
      $("#addJobModal").modal('show');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "editPassId", function (id) {
      _this.setState({
        edit_id: id
      });

      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var data = {};

      try {
        firebase.firestore().collection('employer').doc(id).get().then(function (snapshot) {
          data = snapshot.data();
          console.log(data);

          _this.setState({
            C_Name: data.C_Name,
            C_noEmp: data.C_noEmp,
            C_published_date: data.C_published_date,
            C_tel: data.C_tel,
            C_emailaddr: data.C_emailaddr,
            C_city: data.C_city,
            C_area: data.C_area,
            C_Address: data.C_Address,
            C_Description: data.C_Description
          });
        });
        console.log("getting data");
        console.log(_this.state.employerName);
      } catch (error) {
        console.log(error);
      }

      console.log(_this.state.employerName);
      $("#editEmployerModal").modal('show');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "updateEmployer", function () {
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

      try {
        firebase.firestore().collection('employer').doc(_this.state.edit_id).update({
          C_Name: _this.state.C_Name,
          C_noEmp: _this.state.C_noEmp,
          C_published_date: _this.state.C_published_date,
          C_tel: _this.state.C_tel,
          C_emailaddr: _this.state.C_emailaddr,
          C_city: data.C_city,
          C_area: data.C_area,
          C_Address: _this.state.C_Address,
          C_Description: _this.state.C_Description
        });

        _this.refreshTable();
      } catch (error) {
        console.log(error);
      }

      $("#editEmployerModal").modal('hide');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "getJobCount", function (id) {
      var jobs = _this.state.jobs;
      var count = 0;
      jobs.map(function (job) {
        if (job.data.EMPLOYERID == id) {
          console.log("same value found");
          count++;
        }
      });
      return count;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, event.target.name, event.target.value));

      if (event.target.name == "J_area" || event.target.name == "C_area") {
        _this.getCities(event.target.value);
      }

      _this.setState({
        showCities: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "addJob", function (event) {
      event.preventDefault();
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var userRef = firebase.firestore().collection('job').add({
        EMPLOYERID: _this.state.edit_id,
        Jname: _this.state.Jname,
        J_Contract: _this.state.J_Contract,
        J_min_salary: _this.state.J_min_salary,
        J_max_salary: _this.state.J_max_salary,
        J_hours: _this.state.J_hours,
        J_Working_Day: _this.state.J_Working_Day,
        J_JpLevel: _this.state.J_JpLevel,
        J_tel: _this.state.J_tel,
        PostedDate: _this.state.PostedDate,
        J_email: _this.state.J_email,
        J_area: _this.state.J_area,
        J_city: _this.state.J_city,
        J_Address: _this.state.J_Address,
        J_Description: _this.state.J_Description,
        J_Qualification: _this.state.J_Qualification
      });

      _this.setState({
        EMPLOYERID: '',
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
        J_Address: ''
      });

      _this.refreshAfterAddTable();

      console.log(userRef);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "addJobCount", function (id) {
      console.log("Job count adding");
      var data = {};

      try {
        var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
        firebase.firestore().collection('employer').doc(id).get().then(function (snapshot) {
          data = snapshot.data();
          firebase.firestore().collection('employer').doc(id).update({
            jobCount: data.jobCount + 1
          });
        });
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "getCities", function (id) {
      var cities = [];

      try {
        var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
        firebase.firestore().collection('city').where('AREAID', "==", id).get().then(function (snapshot) {
          snapshot.forEach(function (doc) {
            cities.push(Object.assign({
              id: doc.id
            }, doc.data()));
          });
          console.log({
            cities: cities
          });

          _this.setState({
            cities: cities
          });
        });
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "selectDisable", function (event) {
      $("#city option:first").attr("disabled", "disabled");
      $("#area option:first").attr("disabled", "disabled");
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "addEmployer", function (event) {
      event.preventDefault();
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var userRef = firebase.firestore().collection('employer').add({
        C_Name: _this.state.C_Name,
        C_noEmp: _this.state.C_noEmp,
        C_published_date: _this.state.C_published_date,
        C_tel: _this.state.C_tel,
        C_emailaddr: _this.state.C_emailaddr,
        C_city: _this.state.C_city,
        C_area: _this.state.C_area,
        C_Address: _this.state.C_Address,
        C_Description: _this.state.C_Description
      });

      _this.setState({
        C_Name: _this.state.C_Name,
        C_noEmp: _this.state.C_noEmp,
        C_published_date: _this.state.C_published_date,
        C_tel: _this.state.C_tel,
        C_emailaddr: _this.state.C_emailaddr,
        C_city: _this.state.C_city,
        C_area: _this.state.C_area,
        C_Address: _this.state.C_Address,
        C_Description: _this.state.C_Description
      });

      _this.refreshAfterAddTable();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "deleteEmployer", function () {
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

      try {
        firebase.firestore().collection('employer').doc(_this.state.delete_id)["delete"]();
        console.log("Delete successful");
      } catch (error) {
        console.log(error);
      }

      _this.refreshAfterAddTable();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "clearInput", function (event) {
      _this.setState(_this.initial_state);

      var inputs, index;
      inputs = document.getElementsByTagName('input');

      for (index = 0; index < inputs.length; ++index) {
        inputs[index].value = '';
      }

      document.getElementById('J_Address').value = '';
      document.getElementById('J_Description').value = '';
      document.getElementById('J_Qualification').value = '';
      document.getElementById('C_Address').value = '';
      document.getElementById('C_Description').value = '';
      $("#J_Contract option[selected]").removeAttr("selected");
      $("#J_Contract option:first").attr("selected", "selected");
      $("#J_JpLevel option[selected]").removeAttr("selected");
      $("#J_JpLevel option:first").attr("selected", "selected");
      $("#min_exp_year option[selected]").removeAttr("selected");
      $("#min_exp_year option:first").attr("selected", "selected");
      $("#J_city option[selected]").removeAttr("selected");
      $("#J_city option:first").attr("selected", "selected");
      $("#J_area option[selected]").removeAttr("selected");
      $("#J_area option:first").attr("selected", "selected");
      $("#city option[selected]").removeAttr("selected");
      $("#city option:first").attr("selected", "selected");
      $("#area option[selected]").removeAttr("selected");
      $("#area option:first").attr("selected", "selected");
    });

    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.datatableRef = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef(); // this.employers = props.employer || []

    _this.$datatable = null;
    _this.initial_state = {
      EMPLOYERID: '',
      C_Name: '',
      C_noEmp: '',
      C_published_date: '',
      C_tel: '',
      C_emailaddr: '',
      C_city: '',
      C_area: '',
      C_Address: '',
      C_Description: '',
      employers: props.employer || [],
      jobs: props.jobs || [],
      areas: props.area || []
    };
    _this.state = _this.initial_state;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(employerList, [{
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
      employerList.getInitialProps().then(function (response) {
        self.setState({
          employers: response.employer
        }); // self.initializeDatatable()
      }).bind(this);
    }
  }, {
    key: "refreshAfterAddTable",
    value: function refreshAfterAddTable() {
      var self = this;
      employerList.getInitialProps().then(function (response) {
        self.setState({
          jobs: response.jobs,
          employers: response.employer
        }); // self.initializeDatatable()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _jsx,
          _jsx2,
          _jsx3;

      var area = this.props.area;
      var cities = this.state.cities;
      var jobCount = this.state.job;
      return __jsx("html", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 1
        }
      }, __jsx("body", {
        className: "sb-nav-fixed",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 1
        }
      }, __jsx("nav", {
        className: "sb-topnav navbar navbar-expand navbar-dark bg-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "navbar-brand",
        href: "dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 13
        }
      }, "Admin"), __jsx("button", {
        className: "btn btn-link btn-sm order-1 order-lg-0",
        id: "sidebarToggle",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 13
        }
      }, __jsx("i", {
        className: "fas fa-bars",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 100
        }
      })), __jsx("form", {
        className: "d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "input-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 17
        }
      }, __jsx("ul", {
        className: "navbar-nav ml-auto ml-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 21
        }
      }, __jsx("li", {
        className: "nav-item dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
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
          lineNumber: 415,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "fas fa-user fa-fw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 176
        }
      })), __jsx("div", {
        className: "dropdown-menu dropdown-menu-right",
        "aria-labelledby": "userDropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 33
        }
      }, "Profile"), __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 33
        }
      }, "Activity Log"), __jsx("div", {
        className: "dropdown-divider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 33
        }
      }), __jsx("a", {
        className: "dropdown-item",
        href: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 33
        }
      }, "Logout"))))))), __jsx("div", {
        id: "layoutSidenav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "layoutSidenav_nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 13
        }
      }, __jsx("nav", {
        className: "sb-sidenav accordion sb-sidenav-dark",
        id: "sidenavAccordion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "sb-sidenav-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "sb-sidenav-menu-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 29
        }
      }, "Core"), __jsx("a", {
        className: "nav-link",
        href: "dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "sb-nav-link-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-tachometer-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436,
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
          lineNumber: 440,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "sb-nav-link-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-book-open",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 67
        }
      })), "Pages", __jsx("div", {
        className: "sb-sidenav-collapse-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
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
          lineNumber: 445,
          columnNumber: 29
        }
      }, __jsx("nav", {
        className: "sb-sidenav-menu-nested nav accordion",
        id: "sidenavAccordionPages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
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
          lineNumber: 447,
          columnNumber: 37
        }
      }, "Authentication", __jsx("div", {
        className: "sb-sidenav-collapse-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
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
          lineNumber: 451,
          columnNumber: 37
        }
      }, __jsx("nav", {
        className: "sb-sidenav-menu-nested nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 45
        }
      }, "Login"), __jsx("a", {
        className: "nav-link",
        href: "register",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 45
        }
      }, "Register"), __jsx("a", {
        className: "nav-link",
        href: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 45
        }
      }, "Forgot Password"))))))))), __jsx("div", {
        id: "layoutSidenav_content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 13
        }
      }, __jsx("main", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "mt-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 25
        }
      }, "Employer Tables"), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "col-xl-3 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "card bg-primary text-white mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 37
        }
      }, "Jobs table"), __jsx("div", {
        className: "card-footer d-flex align-items-center justify-content-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "small text-white stretched-link",
        href: "dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 41
        }
      }, "View mores"), __jsx("div", {
        className: "small text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-angle-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476,
          columnNumber: 75
        }
      }))))), __jsx("div", {
        className: "col-xl-3 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "card bg-danger text-white mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 37
        }
      }, "New Employer"), __jsx("div", {
        className: "card-footer d-flex align-items-center justify-content-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "small text-white stretched-link",
        href: "#addEmployerModal",
        "data-toggle": "modal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 41
        }
      }, "+Add New"), __jsx("div", {
        className: "small text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-angle-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 75
        }
      })))))), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "container admin-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "table-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497,
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
          lineNumber: 499,
          columnNumber: 17
        }
      }, __jsx("thead", {
        className: "thread-color",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 21
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 25
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 29
        }
      }, "Employer Name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503,
          columnNumber: 29
        }
      }, "Email"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504,
          columnNumber: 29
        }
      }, "Phone Number"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505,
          columnNumber: 29
        }
      }, "Number of Jobs"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506,
          columnNumber: 29
        }
      }, "Address"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 29
        }
      }, "Add Job"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 27
        }
      }, "Action"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 21
        }
      }, this.state.employers.map(function (Employer) {
        return __jsx("tr", {
          key: Employer.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 513,
            columnNumber: 25
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 514,
            columnNumber: 29
          }
        }, Employer.C_Name), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 515,
            columnNumber: 29
          }
        }, Employer.C_emailaddr), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 516,
            columnNumber: 29
          }
        }, Employer.C_tel), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 517,
            columnNumber: 29
          }
        }, _this2.getJobCount(Employer.id)), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518,
            columnNumber: 29
          }
        }, Employer.C_Address), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 520,
            columnNumber: 29
          }
        }, __jsx("a", {
          onClick: function onClick() {
            return _this2.addPassId(Employer.id);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 521,
            columnNumber: 33
          }
        }, " ", __jsx("button", {
          className: "view btn btn-success",
          title: "add",
          style: {
            cursor: "pointer",
            margin: "auto"
          },
          "data-dismiss": "modal",
          "data-toggle": "tooltip",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 521,
            columnNumber: 79
          }
        }, __jsx("i", {
          className: "fa fa-plus-circle",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 521,
            columnNumber: 217
          }
        }), " Job ")), " \xA0 ", __jsx("br", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 521,
            columnNumber: 280
          }
        })), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 523,
            columnNumber: 29
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 524,
            columnNumber: 29
          }
        }, __jsx("i", {
          onClick: function onClick() {
            return _this2.editPassId(Employer.id);
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
            lineNumber: 524,
            columnNumber: 32
          }
        }, "\uE254")), " \xA0", __jsx("a", {
          onClick: function onClick() {
            return _this2.deletePassId(Employer.id);
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
            lineNumber: 525,
            columnNumber: 9
          }
        }, "\uE872"), " \xA0"));
      }))))), __jsx("div", {
        id: "editEmployerModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 2
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 6
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "fa fa-file-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 25
        }
      }), " Employer Information Edition"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-hidden": "true",
        onClick: this.clearInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 7
        }
      }, "\xD7")), __jsx("form", {
        action: "#",
        method: "post",
        style: {
          width: 100 + "%",
          margin: "auto",
          marginTop: 20
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 45
        }
      }, __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_Name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 57
        }
      }, "Company name"), __jsx("input", {
        type: "text",
        id: "C_Name",
        className: "form-control",
        name: "C_Name",
        placeholder: "Enter your Company Name",
        onChange: this.handleChange,
        value: this.state.C_Name,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_noEmp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 57
        }
      }, "No Of Emplyoee"), __jsx("input", {
        type: "number",
        id: "C_noEmp",
        className: "form-control",
        name: "C_noEmp",
        placeholder: "",
        onChange: this.handleChange,
        value: this.state.C_noEmp,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_published_date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557,
          columnNumber: 57
        }
      }, "Published Date"), __jsx("input", (_jsx = {
        type: "date",
        "class": "form-control",
        id: "C_published_date",
        value: "date",
        name: "C_published_date",
        onChange: this.handleChange
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "value", this.state.C_published_date), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "required", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 57
      }), _jsx))), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_tel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562,
          columnNumber: 57
        }
      }, "Tel:"), __jsx("input", {
        type: "text",
        id: "C_tel",
        className: "form-control",
        name: "C_tel",
        placeholder: "",
        onChange: this.handleChange,
        value: this.state.C_tel,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_Cemailaddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 57
        }
      }, "Email Address"), __jsx("input", {
        type: "text",
        id: "C_emailaddr",
        className: "form-control",
        name: "C_emailaddr",
        placeholder: "abc@gmail.com",
        onChange: this.handleChange,
        value: this.state.C_emailaddr,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567,
          columnNumber: 57
        }
      })), __jsx("select", {
        name: "AREAID",
        id: "area",
        className: "form-control",
        onClick: this.disable,
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573,
          columnNumber: 53
        }
      }, __jsx("option", {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574,
          columnNumber: 53
        }
      }, "Select Area in Japan"), this.state.areas.map(function (Area) {
        return _this2.state.C_area == Area.id ? __jsx("option", {
          value: Area.id,
          selected: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 576,
            columnNumber: 57
          }
        }, Area.areaName) : __jsx("option", {
          value: Area.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 577,
            columnNumber: 57
          }
        }, Area.areaName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "C_city",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582,
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
          lineNumber: 583,
          columnNumber: 61
        }
      }, __jsx("option", {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 53
        }
      }, "Select Area in Japan"), cities && cities.map(function (City) {
        return _this2.state.C_city == City.id ? __jsx("option", {
          value: City.id,
          selected: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 586,
            columnNumber: 57
          }
        }, City.cityName) : __jsx("option", {
          value: City.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 587,
            columnNumber: 57
          }
        }, City.cityName);
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "detailAddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 57
        }
      }, "Detail Address"), __jsx("textarea", {
        className: "form-control",
        id: "C_Address",
        name: "C_Address",
        onChange: this.handleChange,
        value: this.state.C_Address,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "cDes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 57
        }
      }, "Company Description"), __jsx("textarea", {
        className: "form-control",
        id: "C_Description",
        name: "C_Description",
        onChange: this.handleChange,
        value: this.state.C_Description,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 57
        }
      })))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 25
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
          lineNumber: 608,
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
          lineNumber: 609,
          columnNumber: 29
        }
      })))))), __jsx("div", {
        id: "addEmployerModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619,
          columnNumber: 13
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "fa fa-file-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 25
        }
      }), " Add New Employer"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-hidden": "true",
        onClick: this.clearInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 7
        }
      }, "\xD7")), __jsx("form", {
        action: "#",
        method: "post",
        style: {
          width: 100 + "%",
          margin: "auto",
          marginTop: 20
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_Name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 57
        }
      }, "Company name"), __jsx("input", {
        type: "text",
        id: "C_Name",
        className: "form-control",
        name: "C_Name",
        placeholder: "Enter your Company Name",
        onChange: this.handleChange,
        value: this.state.C_Name,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_noEmp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634,
          columnNumber: 57
        }
      }, "No Of Emplyoee"), __jsx("input", {
        type: "number",
        id: "C_noEmp",
        className: "form-control",
        name: "C_noEmp",
        placeholder: "",
        onChange: this.handleChange,
        value: this.state.C_noEmp,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_published_date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 57
        }
      }, "Published Date"), __jsx("input", (_jsx2 = {
        type: "date",
        "class": "form-control",
        id: "C_published_date",
        value: "date",
        name: "C_published_date",
        onChange: this.handleChange
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx2, "value", this.state.C_published_date), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx2, "required", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx2, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 639,
        columnNumber: 57
      }), _jsx2))), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_tel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643,
          columnNumber: 57
        }
      }, "Tel:"), __jsx("input", {
        type: "text",
        id: "C_tel",
        className: "form-control",
        name: "C_tel",
        placeholder: "",
        onChange: this.handleChange,
        value: this.state.C_tel,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_Cemailaddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647,
          columnNumber: 57
        }
      }, "Email Address"), __jsx("input", {
        type: "text",
        id: "C_emailaddr",
        className: "form-control",
        name: "C_emailaddr",
        placeholder: "abc@gmail.com",
        onChange: this.handleChange,
        value: this.state.C_emailaddr,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654,
          columnNumber: 57
        }
      }, "Select Area"), __jsx("select", {
        name: "C_area",
        id: "area",
        className: "form-control",
        onClick: this.selectDisable,
        onChange: this.handleChange,
        value: this.state.selectedValue,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 655,
          columnNumber: 59
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 61
        }
      }, "Select Area"), this.state.areas.map(function (jobArea) {
        return __jsx("option", {
          value: jobArea.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 658,
            columnNumber: 65
          }
        }, jobArea.areaName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663,
          columnNumber: 57
        }
      }, "Select City"), this.state.showCities && __jsx("select", {
        name: "C_city",
        id: "city",
        className: "form-control",
        onClick: this.selectDisable,
        onChange: this.handleChange,
        value: this.state.selectedValue,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665,
          columnNumber: 57
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666,
          columnNumber: 61
        }
      }, "Select City"), cities && cities.map(function (city) {
        return __jsx("option", {
          value: city.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 668,
            columnNumber: 65
          }
        }, city.cityName);
      }))), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "detailAddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 676,
          columnNumber: 57
        }
      }, "Detail Address"), __jsx("textarea", {
        className: "form-control",
        id: "C_Address",
        name: "C_Address",
        onChange: this.handleChange,
        value: this.state.C_Address,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 677,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "cDes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682,
          columnNumber: 57
        }
      }, "Company Description"), __jsx("textarea", {
        className: "form-control",
        id: "C_Description",
        name: "C_Description",
        onChange: this.handleChange,
        value: this.state.C_Description,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683,
          columnNumber: 57
        }
      }))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 701,
          columnNumber: 25
        }
      }, __jsx("input", {
        onClick: this.addEmployer,
        value: "Add Employer",
        "data-dismiss": "modal",
        className: "btn btn-info btn-width rounded-4 py-2",
        style: {
          marginRight: 10
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 702,
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
          lineNumber: 703,
          columnNumber: 29
        }
      })))))), __jsx("div", {
        id: "addJobModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 712,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 713,
          columnNumber: 13
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "fa fa-file-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714,
          columnNumber: 25
        }
      }), " Add New Job"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-hidden": "true",
        onClick: this.clearInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 715,
          columnNumber: 7
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
          lineNumber: 717,
          columnNumber: 6
        }
      }, __jsx("form", {
        role: "Form",
        method: "post",
        action: "",
        "accept-charset": "UTF-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718,
          columnNumber: 25
        }
      }, __jsx("div", {
        "class": "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 719,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 720,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 721,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724,
          columnNumber: 45
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 726,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "Jname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 727,
          columnNumber: 57
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
          lineNumber: 728,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 731,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J_Contract",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 732,
          columnNumber: 57
        }
      }, "Employment Status"), __jsx("select", {
        id: "J_Contract",
        "class": "form-control",
        name: "J_Contract",
        onChange: this.handleChange,
        value: this.state.selectedValue,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733,
          columnNumber: 57
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734,
          columnNumber: 57
        }
      }, "Select Job Contract"), __jsx("option", {
        value: "Part Time",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 735,
          columnNumber: 61
        }
      }, "Part Time"), __jsx("option", {
        value: "Full Time",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 736,
          columnNumber: 61
        }
      }, "Full Time"))), __jsx("label", {
        "for": "salary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 740,
          columnNumber: 53
        }
      }, "Salary(\xA5)"), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 741,
          columnNumber: 53
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742,
          columnNumber: 52
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743,
          columnNumber: 53
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
          lineNumber: 744,
          columnNumber: 56
        }
      }))), __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 748,
          columnNumber: 52
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749,
          columnNumber: 53
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
          lineNumber: 750,
          columnNumber: 55
        }
      })))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J_hours",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754,
          columnNumber: 57
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
          lineNumber: 755,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J_Working_Day",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 758,
          columnNumber: 57
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
          lineNumber: 759,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 761,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "Age_range",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 762,
          columnNumber: 57
        }
      }, "Age Range"), __jsx("input", {
        type: "number",
        id: "Age_range",
        "class": "form-control",
        name: "Age_range",
        placeholder: "Enter Age Range",
        onChange: this.handleChange,
        value: this.state.Age_range,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J_JpLevel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 766,
          columnNumber: 57
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
          lineNumber: 767,
          columnNumber: 57
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 768,
          columnNumber: 57
        }
      }, "Select Japanese level"), __jsx("option", {
        value: "3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769,
          columnNumber: 61
        }
      }, "N3"), __jsx("option", {
        value: "2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 770,
          columnNumber: 61
        }
      }, "N2"), __jsx("option", {
        value: "1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771,
          columnNumber: 61
        }
      }, "N1"))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J_tel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776,
          columnNumber: 57
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
          lineNumber: 777,
          columnNumber: 57
        }
      })))), __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 785,
          columnNumber: 36
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 786,
          columnNumber: 42
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 787,
          columnNumber: 42
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788,
          columnNumber: 65
        }
      }, "Posted Date"), __jsx("input", (_jsx3 = {
        type: "date",
        "class": "form-control",
        id: "PostedDate",
        value: "datetime",
        name: "PostedDate",
        onChange: this.handleChange
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx3, "value", this.state.PostedDate), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx3, "required", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx3, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx3, "__source", {
        fileName: _jsxFileName,
        lineNumber: 789,
        columnNumber: 65
      }), _jsx3))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 791,
          columnNumber: 46
        }
      }, __jsx("label", {
        "for": "J_email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 792,
          columnNumber: 57
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
          lineNumber: 793,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 795,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 796,
          columnNumber: 57
        }
      }, "Select Area"), __jsx("select", {
        name: "J_area",
        id: "area",
        className: "form-control",
        onClick: this.selectDisable,
        onChange: this.handleChange,
        value: this.state.selectedValue,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 797,
          columnNumber: 59
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 798,
          columnNumber: 61
        }
      }, "Select Area"), this.state.areas.map(function (jobArea) {
        return __jsx("option", {
          value: jobArea.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 800,
            columnNumber: 65
          }
        }, jobArea.areaName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 804,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 805,
          columnNumber: 57
        }
      }, "Select City"), this.state.showCities && __jsx("select", {
        name: "J_city",
        id: "city",
        className: "form-control",
        onClick: this.selectDisable,
        onChange: this.handleChange,
        value: this.state.selectedValue,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807,
          columnNumber: 57
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 808,
          columnNumber: 61
        }
      }, "Select City"), cities && cities.map(function (city) {
        return __jsx("option", {
          value: city.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 810,
            columnNumber: 65
          }
        }, city.cityName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 819,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "detailAddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 820,
          columnNumber: 57
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
          lineNumber: 821,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 825,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "JobDes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 826,
          columnNumber: 57
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
          lineNumber: 827,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 832,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "Qual",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 833,
          columnNumber: 57
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
          lineNumber: 834,
          columnNumber: 57
        }
      })))))))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 848,
          columnNumber: 6
        }
      }, __jsx("input", {
        type: "button",
        onClick: this.addJob,
        value: "Add",
        className: "btn btn-info btn-width rounded-4 py-2",
        "data-dismiss": "modal",
        style: {
          marginRight: 10
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 849,
          columnNumber: 25
        }
      }), __jsx("input", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal",
        value: "Cancel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 850,
          columnNumber: 25
        }
      }))))), __jsx("div", {
        id: "deleteConfirmModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 856,
          columnNumber: 2
        }
      }, __jsx("div", {
        className: "modal-dialog del-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 857,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 858,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 859,
          columnNumber: 13
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 860,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "fa fa-file-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 860,
          columnNumber: 25
        }
      }), " Delete Information"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-hidden": "true",
        onClick: this.clearInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 861,
          columnNumber: 7
        }
      }, "\xD7")), __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 863,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-body",
        style: {
          fontFamily: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 864,
          columnNumber: 6
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 865,
          columnNumber: 7
        }
      }, "Are you sure you want to delete this company?"), __jsx("p", {
        className: "text-warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 866,
          columnNumber: 7
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 866,
          columnNumber: 35
        }
      }, "This action cannot be undone.")))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 869,
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
          lineNumber: 870,
          columnNumber: 6
        }
      }), __jsx("input", {
        type: "button",
        className: "btn btn-danger",
        value: "Delete",
        "data-dismiss": "modal",
        onClick: this.deleteEmployer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 871,
          columnNumber: 6
        }
      }))))))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var firebase, employerQuerySnapshot, employers, areaQuerySnapshot, areas, cityQuerySnapshot, cities, jobQuerySnapshot, jobs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

              case 2:
                firebase = _context.sent;
                _context.next = 5;
                return firebase.firestore().collection("employer").limit(10).get();

              case 5:
                employerQuerySnapshot = _context.sent;
                employers = employerQuerySnapshot.docs.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc.data()), {}, {
                    id: doc.id
                  });
                });
                _context.next = 9;
                return firebase.firestore().collection("area").limit(10).get();

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
                return firebase.firestore().collection("job").get();

              case 17:
                jobQuerySnapshot = _context.sent;
                jobs = jobQuerySnapshot.docs.map(function (doc) {
                  return {
                    data: doc.data(),
                    id: doc.id
                  };
                });
                return _context.abrupt("return", {
                  employer: employers,
                  area: areas,
                  city: cities,
                  jobs: jobs
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

  return employerList;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbXBseW9lci5qcyJdLCJuYW1lcyI6WyJlbXBsb3llckxpc3QiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjcmlwdDEiLCJwcm9wcyIsImlkIiwiJCIsIm1vZGFsIiwic2V0U3RhdGUiLCJkZWxldGVfaWQiLCJlZGl0X2lkIiwiZmlyZWJhc2UiLCJsb2FkRmlyZWJhc2UiLCJkYXRhIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsImNvbnNvbGUiLCJsb2ciLCJFTVBMT1lFUklEIiwiQ19OYW1lIiwiQ19ub0VtcCIsIkNfcHVibGlzaGVkX2RhdGUiLCJDX3RlbCIsIkNfZW1haWxhZGRyIiwiQ19jaXR5IiwiQ19hcmVhIiwiQ19BZGRyZXNzIiwiQ19EZXNjcmlwdGlvbiIsInN0YXRlIiwiZW1wbG95ZXJOYW1lIiwiZXJyb3IiLCJ1cGRhdGUiLCJyZWZyZXNoVGFibGUiLCJqb2JzIiwiY291bnQiLCJtYXAiLCJqb2IiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImdldENpdGllcyIsInNob3dDaXRpZXMiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJSZWYiLCJhZGQiLCJKbmFtZSIsIkpfQ29udHJhY3QiLCJKX21pbl9zYWxhcnkiLCJKX21heF9zYWxhcnkiLCJKX2hvdXJzIiwiSl9Xb3JraW5nX0RheSIsIkpfSnBMZXZlbCIsIkpfdGVsIiwiUG9zdGVkRGF0ZSIsIkpfZW1haWwiLCJKX2FyZWEiLCJKX2NpdHkiLCJKX0FkZHJlc3MiLCJKX0Rlc2NyaXB0aW9uIiwiSl9RdWFsaWZpY2F0aW9uIiwicmVmcmVzaEFmdGVyQWRkVGFibGUiLCJqb2JDb3VudCIsImNpdGllcyIsIndoZXJlIiwiZm9yRWFjaCIsInB1c2giLCJPYmplY3QiLCJhc3NpZ24iLCJhdHRyIiwiaW5pdGlhbF9zdGF0ZSIsImlucHV0cyIsImluZGV4IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUF0dHIiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZGF0YXRhYmxlUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCIkZGF0YXRhYmxlIiwiZW1wbG95ZXJzIiwiZW1wbG95ZXIiLCJhcmVhcyIsImFyZWEiLCJpbml0aWFsaXplRGF0YXRhYmxlIiwiY3VycmVudCIsIkRhdGFUYWJsZSIsIm9yZGVyIiwiY2xlYXIiLCJzZWxmIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJ3aWR0aCIsIkVtcGxveWVyIiwiZ2V0Sm9iQ291bnQiLCJhZGRQYXNzSWQiLCJjdXJzb3IiLCJtYXJnaW4iLCJlZGl0UGFzc0lkIiwiY29sb3IiLCJkZWxldGVQYXNzSWQiLCJjbGVhcklucHV0IiwibWFyZ2luVG9wIiwiZGlzYWJsZSIsIkFyZWEiLCJhcmVhTmFtZSIsIkNpdHkiLCJjaXR5TmFtZSIsInVwZGF0ZUVtcGxveWVyIiwibWFyZ2luUmlnaHQiLCJzZWxlY3REaXNhYmxlIiwic2VsZWN0ZWRWYWx1ZSIsImpvYkFyZWEiLCJjaXR5IiwiYWRkRW1wbG95ZXIiLCJBZ2VfcmFuZ2UiLCJhZGRKb2IiLCJmb250RmFtaWx5IiwiZGVsZXRlRW1wbG95ZXIiLCJsaW1pdCIsImVtcGxveWVyUXVlcnlTbmFwc2hvdCIsImRvY3MiLCJhcmVhUXVlcnlTbmFwc2hvdCIsImNpdHlRdWVyeVNuYXBzaG90Iiwiam9iUXVlcnlTbmFwc2hvdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsWTs7Ozs7Ozt3Q0FDRTtBQUNmLFVBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsWUFBTSxDQUFDRyxHQUFQLEdB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QUosRUFEa0M7QUFFckNSLHNCQUFFLEVBQUVXLEdBQUcsQ0FBQ1g7QUFGNkI7QUFBQSxpQkFBM0IsQzs7dUJBS2tCTSxRQUFRLENBQ3ZDRyxTQUQrQixHQUUvQkMsVUFGK0IsQ0FFcEIsTUFGb0IsRUFHL0JFLEdBSCtCLEU7OztBQUExQmlILGlDO0FBSUEvRCxzQixHQUFTK0QsaUJBQWlCLENBQUNGLElBQWxCLENBQXVCekYsR0FBdkIsQ0FBMkIsVUFBQ3ZCLEdBQUQ7QUFBQSx5REFDbkNBLEdBQUcsQ0FBQ0gsSUFBSixFQURtQztBQUV0Q1Isc0JBQUUsRUFBRVcsR0FBRyxDQUFDWDtBQUY4QjtBQUFBLGlCQUEzQixDOzt1QkFLZ0JNLFFBQVEsQ0FDdENHLFNBRDhCLEdBRTlCQyxVQUY4QixDQUVuQixLQUZtQixFQUc5QkUsR0FIOEIsRTs7O0FBQXpCa0gsZ0M7QUFJQTlGLG9CLEdBQU84RixnQkFBZ0IsQ0FBQ0gsSUFBakIsQ0FBc0J6RixHQUF0QixDQUEwQixVQUFDdkIsR0FBRDtBQUFBLHlCQUFVO0FBQzdDSCx3QkFBSSxFQUFHRyxHQUFHLENBQUNILElBQUosRUFEc0M7QUFFN0NSLHNCQUFFLEVBQUVXLEdBQUcsQ0FBQ1g7QUFGcUMsbUJBQVY7QUFBQSxpQkFBMUIsQztpREFJTjtBQUFFbUYsMEJBQVEsRUFBRUQsU0FBWjtBQUF1Qkcsc0JBQUksRUFBRUQsS0FBN0I7QUFBb0MrQixzQkFBSSxFQUFHckQsTUFBM0M7QUFBb0Q5QixzQkFBSSxFQUFHQTtBQUEzRCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhIMkIrQyw0Q0FBSyxDQUFDZ0QsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZW1wbHlvZXIuanMuYzBhOTkzOWE0MTMzNTlkMjJiMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge2xvYWRGaXJlYmFzZX0gZnJvbSAnLi4vbGliL2RiLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGVtcGxveWVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9IFwiL2pzL3NjcmlwdHMuanNcIjtcclxuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjcmlwdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHNjcmlwdDEuc3JjID0gXCIvYXNzZXRzL2RlbW8vZGF0YXRhYmxlcy1kZW1vLmpzXCI7XHJcbiAgICAgICAgc2NyaXB0MS5hc3luYyA9IHRydWU7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0MSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kYXRhdGFibGVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICAvLyB0aGlzLmVtcGxveWVycyA9IHByb3BzLmVtcGxveWVyIHx8IFtdXHJcbiAgICAgICAgdGhpcy4kZGF0YXRhYmxlID0gbnVsbFxyXG4gICAgICAgIHRoaXMuaW5pdGlhbF9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgRU1QTE9ZRVJJRCA6ICcnLFxyXG4gICAgICAgICAgICBDX05hbWUgOiAnJyxcclxuICAgICAgICAgICAgQ19ub0VtcDogJycsXHJcbiAgICAgICAgICAgIENfcHVibGlzaGVkX2RhdGU6JycsXHJcbiAgICAgICAgICAgIENfdGVsOicnLFxyXG4gICAgICAgICAgICBDX2VtYWlsYWRkcjonJyxcclxuICAgICAgICAgICAgQ19jaXR5OicnLFxyXG4gICAgICAgICAgICBDX2FyZWE6JycsXHJcbiAgICAgICAgICAgIENfQWRkcmVzczonJyxcclxuICAgICAgICAgICAgQ19EZXNjcmlwdGlvbjonJyxcclxuICAgICAgICAgICAgZW1wbG95ZXJzOiBwcm9wcy5lbXBsb3llciB8fCBbXSxcclxuICAgICAgICAgICAgam9icyA6IHByb3BzLmpvYnMgfHwgW10sXHJcbiAgICAgICAgICAgIGFyZWFzOiBwcm9wcy5hcmVhIHx8IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbF9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGF0YXRhYmxlKClcclxuICAgIH1cclxuICAgIGluaXRpYWxpemVEYXRhdGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy4kZGF0YXRhYmxlID0gJCh0aGlzLmRhdGF0YWJsZVJlZi5jdXJyZW50KS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBvcmRlcjogW1szLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaFRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuJGRhdGF0YWJsZS5jbGVhcigpXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZW1wbG95ZXJMaXN0XHJcbiAgICAgICAgICAgIC5nZXRJbml0aWFsUHJvcHMoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llcnMgOiByZXNwb25zZS5lbXBsb3llcixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHNlbGYuaW5pdGlhbGl6ZURhdGF0YWJsZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2hBZnRlckFkZFRhYmxlKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGVtcGxveWVyTGlzdFxyXG4gICAgICAgICAgICAuZ2V0SW5pdGlhbFByb3BzKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgam9iczogcmVzcG9uc2Uuam9icyxcclxuICAgICAgICAgICAgICAgIGVtcGxveWVycyA6IHJlc3BvbnNlLmVtcGxveWVyLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gc2VsZi5pbml0aWFsaXplRGF0YXRhYmxlKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IGZpcmViYXNlID0gYXdhaXQgbG9hZEZpcmViYXNlKCkgXHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXJRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiZW1wbG95ZXJcIilcclxuICAgICAgICAgICAgLmxpbWl0KDEwKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgZW1wbG95ZXJzID0gZW1wbG95ZXJRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGNvbnN0IGFyZWFRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiYXJlYVwiKVxyXG4gICAgICAgICAgICAubGltaXQoMTApXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBhcmVhcyA9IGFyZWFRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNpdHlRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAuY29sbGVjdGlvbihcImNpdHlcIilcclxuICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgY2l0aWVzID0gY2l0eVF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGpvYlF1ZXJ5U25hcHNob3QgPSBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiam9iXCIpXHJcbiAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGpvYnMgPSBqb2JRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIGRhdGEgOiBkb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4geyBlbXBsb3llcjogZW1wbG95ZXJzLCBhcmVhOiBhcmVhcywgY2l0eSA6IGNpdGllcyAsIGpvYnMgOiBqb2JzIH07XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUGFzc0lkID0gKGlkKT0+e1xyXG4gICAgICAgICQoXCIjZGVsZXRlQ29uZmlybU1vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVsZXRlX2lkIDogaWR9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFBhc3NJZCA9IChpZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRfaWQgOiBpZH0pXHJcbiAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdlbXBsb3llcicpLmRvYyhpZCkuZ2V0KCkuXHJcbiAgICAgICAgICAgIHRoZW4oKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHNuYXBzaG90LmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgICAgICAgICBFTVBMT1lFUklEOiBkYXRhLmVkaXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19OYW1lIDpkYXRhLkNfTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBDX25vRW1wOmRhdGEuQ19ub0VtcCxcclxuICAgICAgICAgICAgICAgICAgICBDX3B1Ymxpc2hlZF9kYXRlOmRhdGEuQ19wdWJsaXNoZWRfZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBDX3RlbDpkYXRhLkNfdGVsLFxyXG4gICAgICAgICAgICAgICAgICAgIENfZW1haWxhZGRyOmRhdGEuQ19lbWFpbGFkZHIsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19jaXR5OmRhdGEuQ19jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIENfYXJlYTpkYXRhLkNfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICBDX0FkZHJlc3M6ZGF0YS5DX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19EZXNjcmlwdGlvbjpkYXRhLkNfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgZGF0YVwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVtcGxveWVyTmFtZSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5lbXBsb3llck5hbWUpXHJcbiAgICAgICAgJChcIiNhZGRKb2JNb2RhbFwiKS5tb2RhbCgnc2hvdycpXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFBhc3NJZCA9IChpZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRfaWQgOiBpZH0pXHJcbiAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdlbXBsb3llcicpLmRvYyhpZCkuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHNuYXBzaG90LmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgICAgICAgICBDX05hbWUgOmRhdGEuQ19OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIENfbm9FbXA6ZGF0YS5DX25vRW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIENfcHVibGlzaGVkX2RhdGU6ZGF0YS5DX3B1Ymxpc2hlZF9kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIENfdGVsOmRhdGEuQ190ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19lbWFpbGFkZHI6ZGF0YS5DX2VtYWlsYWRkcixcclxuICAgICAgICAgICAgICAgICAgICBDX2NpdHk6ZGF0YS5DX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgQ19hcmVhOmRhdGEuQ19hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgIENfQWRkcmVzczpkYXRhLkNfQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBDX0Rlc2NyaXB0aW9uOmRhdGEuQ19EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBkYXRhXCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZW1wbG95ZXJOYW1lKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5lbXBsb3llck5hbWUpXHJcbiAgICAgICAgJChcIiNlZGl0RW1wbG95ZXJNb2RhbFwiKS5tb2RhbCgnc2hvdycpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRW1wbG95ZXIgPSAoKSA9PntcclxuICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignZW1wbG95ZXInKS5kb2ModGhpcy5zdGF0ZS5lZGl0X2lkKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgQ19OYW1lOnRoaXMuc3RhdGUuQ19OYW1lLFxyXG4gICAgICAgICAgICAgICAgQ19ub0VtcDp0aGlzLnN0YXRlLkNfbm9FbXAsXHJcbiAgICAgICAgICAgICAgICBDX3B1Ymxpc2hlZF9kYXRlOnRoaXMuc3RhdGUuQ19wdWJsaXNoZWRfZGF0ZSxcclxuICAgICAgICAgICAgICAgIENfdGVsOnRoaXMuc3RhdGUuQ190ZWwsXHJcbiAgICAgICAgICAgICAgICBDX2VtYWlsYWRkcjp0aGlzLnN0YXRlLkNfZW1haWxhZGRyLFxyXG4gICAgICAgICAgICAgICAgQ19jaXR5OmRhdGEuQ19jaXR5LFxyXG4gICAgICAgICAgICAgICAgQ19hcmVhOmRhdGEuQ19hcmVhLFxyXG4gICAgICAgICAgICAgICAgQ19BZGRyZXNzOnRoaXMuc3RhdGUuQ19BZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgQ19EZXNjcmlwdGlvbjp0aGlzLnN0YXRlLkNfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUYWJsZSgpO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2VkaXRFbXBsb3llck1vZGFsXCIpLm1vZGFsKCdoaWRlJylcclxuICAgIH1cclxuXHJcbiAgICBnZXRKb2JDb3VudCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBqb2JzID0gdGhpcy5zdGF0ZS5qb2JzXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgam9icy5tYXAoam9iID0+IHtcclxuICAgICAgICAgICAgICAgICBpZihqb2IuZGF0YS5FTVBMT1lFUklEID09IGlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYW1lIHZhbHVlIGZvdW5kXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgIGNvdW50ICsrXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgIHJldHVybiBjb3VudDsgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV0gOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5uYW1lID09IFwiSl9hcmVhXCIgfHwgZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJDX2FyZWFcIiApe1xyXG4gICAgICAgICAgICB0aGlzLmdldENpdGllcyhldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dDaXRpZXMgOiB0cnVlfSlcclxuICAgIH1cclxuICBcclxuICAgIGFkZEpvYiA9IGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgIFxyXG4gICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpIFxyXG4gICAgICAgIGNvbnN0IHVzZXJSZWYgPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdqb2InKVxyXG4gICAgICAgICAgICAgICAgLmFkZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVNUExPWUVSSUQgOiB0aGlzLnN0YXRlLmVkaXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpuYW1lOnRoaXMuc3RhdGUuSm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfQ29udHJhY3Q6dGhpcy5zdGF0ZS5KX0NvbnRyYWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX21pbl9zYWxhcnk6dGhpcy5zdGF0ZS5KX21pbl9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfbWF4X3NhbGFyeTp0aGlzLnN0YXRlLkpfbWF4X3NhbGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9ob3Vyczp0aGlzLnN0YXRlLkpfaG91cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfV29ya2luZ19EYXk6dGhpcy5zdGF0ZS5KX1dvcmtpbmdfRGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0pwTGV2ZWw6dGhpcy5zdGF0ZS5KX0pwTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfdGVsOnRoaXMuc3RhdGUuSl90ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RlZERhdGU6dGhpcy5zdGF0ZS5Qb3N0ZWREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2VtYWlsOnRoaXMuc3RhdGUuSl9lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9hcmVhOnRoaXMuc3RhdGUuSl9hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2NpdHk6dGhpcy5zdGF0ZS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfQWRkcmVzczp0aGlzLnN0YXRlLkpfQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9EZXNjcmlwdGlvbjp0aGlzLnN0YXRlLkpfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfUXVhbGlmaWNhdGlvbjp0aGlzLnN0YXRlLkpfUXVhbGlmaWNhdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIEVNUExPWUVSSUQgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBKbmFtZTonJyxcclxuICAgICAgICAgICAgICAgICAgICBKX3RlbDonJyxcclxuICAgICAgICAgICAgICAgICAgICBKX21pbl9zYWxhcnk6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9tYXhfc2FsYXJ5OicnLFxyXG4gICAgICAgICAgICAgICAgICAgIFBvc3RlZERhdGU6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9ob3VyczonJyxcclxuICAgICAgICAgICAgICAgICAgICBKX2VtYWlsOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfY2l0eTonJyxcclxuICAgICAgICAgICAgICAgICAgICBKX2FyZWE6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9Xb3JraW5nX0RheTonJyxcclxuICAgICAgICAgICAgICAgICAgICBKX1F1YWxpZmljYXRpb246JycsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9KcExldmVsOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfRGVzY3JpcHRpb246JycsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9Db250cmFjdDonJyxcclxuICAgICAgICAgICAgICAgICAgICBKX0FkZHJlc3M6JycgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQWZ0ZXJBZGRUYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlclJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSm9iQ291bnQgPSAoaWQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkpvYiBjb3VudCBhZGRpbmdcIilcclxuICAgICAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdlbXBsb3llcicpLmRvYyhpZCkuZ2V0KClcclxuICAgICAgICAgICAgICAudGhlbigoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEgPSBzbmFwc2hvdC5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2VtcGxveWVyJykuZG9jKGlkKS51cGRhdGUoe2pvYkNvdW50IDogZGF0YS5qb2JDb3VudCsxfSkgIFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgZ2V0Q2l0aWVzID0gKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGNpdGllcyA9IFtdXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdjaXR5Jykud2hlcmUoJ0FSRUFJRCcsXCI9PVwiLGlkKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHNuYXBzaG90KT0+IHtcclxuICAgICAgICAgICAgICAgIHNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaXRpZXMucHVzaChPYmplY3QuYXNzaWduKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aWQgOiBkb2MuaWR9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2MuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7Y2l0aWVzfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NpdGllc30pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdERpc2FibGUgPSAoZXZlbnQpID0+IHsgICBcclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7XHJcbiAgIFxyXG4gICAgICAgICQoXCIjYXJlYSBvcHRpb246Zmlyc3RcIikuYXR0cihcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKTsgXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRW1wbG95ZXIgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKSBcclxuICAgICAgICBjb25zdCB1c2VyUmVmID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignZW1wbG95ZXInKVxyXG4gICAgICAgICAgICAgICAgLmFkZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgQ19OYW1lOnRoaXMuc3RhdGUuQ19OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIENfbm9FbXA6dGhpcy5zdGF0ZS5DX25vRW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIENfcHVibGlzaGVkX2RhdGU6dGhpcy5zdGF0ZS5DX3B1Ymxpc2hlZF9kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIENfdGVsOnRoaXMuc3RhdGUuQ190ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19lbWFpbGFkZHI6dGhpcy5zdGF0ZS5DX2VtYWlsYWRkcixcclxuICAgICAgICAgICAgICAgICAgICBDX2NpdHk6dGhpcy5zdGF0ZS5DX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgQ19hcmVhOnRoaXMuc3RhdGUuQ19hcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgIENfQWRkcmVzczp0aGlzLnN0YXRlLkNfQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBDX0Rlc2NyaXB0aW9uOnRoaXMuc3RhdGUuQ19EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIENfTmFtZTp0aGlzLnN0YXRlLkNfTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBDX25vRW1wOnRoaXMuc3RhdGUuQ19ub0VtcCxcclxuICAgICAgICAgICAgICAgICAgICBDX3B1Ymxpc2hlZF9kYXRlOnRoaXMuc3RhdGUuQ19wdWJsaXNoZWRfZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBDX3RlbDp0aGlzLnN0YXRlLkNfdGVsLFxyXG4gICAgICAgICAgICAgICAgICAgIENfZW1haWxhZGRyOnRoaXMuc3RhdGUuQ19lbWFpbGFkZHIsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19jaXR5OnRoaXMuc3RhdGUuQ19jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIENfYXJlYTp0aGlzLnN0YXRlLkNfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICBDX0FkZHJlc3M6dGhpcy5zdGF0ZS5DX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19EZXNjcmlwdGlvbjp0aGlzLnN0YXRlLkNfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQWZ0ZXJBZGRUYWJsZSgpOyAgXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRW1wbG95ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2VtcGxveWVyJylcclxuICAgICAgICAgICAgLmRvYyh0aGlzLnN0YXRlLmRlbGV0ZV9pZClcclxuICAgICAgICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2hBZnRlckFkZFRhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJJbnB1dCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsX3N0YXRlKTtcclxuICAgICAgICBsZXQgaW5wdXRzLCBpbmRleDtcclxuXHJcbiAgICAgICAgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgaW5wdXRzLmxlbmd0aDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICBpbnB1dHNbaW5kZXhdLnZhbHVlID0gJydcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSl9BZGRyZXNzJykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSl9EZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0pfUXVhbGlmaWNhdGlvbicpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NfQWRkcmVzcycpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NfRGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnO1xyXG4gIFxyXG4gIFxyXG4gICAgICAgICQoXCIjSl9Db250cmFjdCBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNKX0NvbnRyYWN0IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpO1xyXG4gIFxyXG4gICAgICAgICQoXCIjSl9KcExldmVsIG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI0pfSnBMZXZlbCBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTtcclxuICBcclxuICAgICAgICAkKFwiI21pbl9leHBfeWVhciBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNtaW5fZXhwX3llYXIgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7XHJcbiAgXHJcbiAgICAgICAgJChcIiNKX2NpdHkgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjSl9jaXR5IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpOyBcclxuICAgICAgICBcclxuICAgICAgICAkKFwiI0pfYXJlYSBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNKX2FyZWEgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7IFxyXG5cclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjY2l0eSBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgJChcIiNhcmVhIG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI2FyZWEgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBhcmVhID0gdGhpcy5wcm9wcy5hcmVhXHJcbiAgICBjb25zdCBjaXRpZXMgPSB0aGlzLnN0YXRlLmNpdGllc1xyXG4gICAgY29uc3Qgam9iQ291bnQgPSB0aGlzLnN0YXRlLmpvYlxyXG4gICAgcmV0dXJuIChcclxuPGh0bWw+XHJcblxyXG48Ym9keSBjbGFzc05hbWU9XCJzYi1uYXYtZml4ZWRcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNiLXRvcG5hdiBuYXZiYXIgbmF2YmFyLWV4cGFuZCBuYXZiYXItZGFyayBiZy1kYXJrXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCJkYXNoYm9hcmRcIj5BZG1pbjwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgYnRuLXNtIG9yZGVyLTEgb3JkZXItbGctMFwiIGlkPVwic2lkZWJhclRvZ2dsZVwiIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWlubGluZS1ibG9jayBmb3JtLWlubGluZSBtbC1hdXRvIG1yLTAgbXItbWQtMyBteS0yIG15LW1kLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvIG1sLW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBpZD1cInVzZXJEcm9wZG93blwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyIGZhLWZ3XCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCIgYXJpYS1sYWJlbGxlZGJ5PVwidXNlckRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+UHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BY3Rpdml0eSBMb2c8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCJsb2dpblwiPkxvZ291dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2X25hdlwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2IGFjY29yZGlvbiBzYi1zaWRlbmF2LWRhcmtcIiBpZD1cInNpZGVuYXZBY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtaGVhZGluZ1wiPkNvcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ItbmF2LWxpbmstaWNvblwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS10YWNob21ldGVyLWFsdFwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBjb2xsYXBzZWRcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZVBhZ2VzXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlUGFnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLW5hdi1saW5rLWljb25cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYm9vay1vcGVuXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9XCJjb2xsYXBzZVBhZ2VzXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ1R3b1wiIGRhdGEtcGFyZW50PVwiI3NpZGVuYXZBY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudS1uZXN0ZWQgbmF2IGFjY29yZGlvblwiIGlkPVwic2lkZW5hdkFjY29yZGlvblBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGNvbGxhcHNlZFwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI3BhZ2VzQ29sbGFwc2VBdXRoXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cInBhZ2VzQ29sbGFwc2VBdXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LWNvbGxhcHNlLWFycm93XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPVwicGFnZXNDb2xsYXBzZUF1dGhcIiBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nT25lXCIgZGF0YS1wYXJlbnQ9XCIjc2lkZW5hdkFjY29yZGlvblBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNiLXNpZGVuYXYtbWVudS1uZXN0ZWQgbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwibG9naW5cIj5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJyZWdpc3RlclwiPlJlZ2lzdGVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cInBhc3N3b3JkXCI+Rm9yZ290IFBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxheW91dFNpZGVuYXZfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTRcIj5FbXBsb3llciBUYWJsZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+Sm9icyB0YWJsZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNtYWxsIHRleHQtd2hpdGUgc3RyZXRjaGVkLWxpbmtcIiBocmVmPVwiZGFzaGJvYXJkXCI+VmlldyBtb3JlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWRhbmdlciB0ZXh0LXdoaXRlIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5OZXcgRW1wbG95ZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LXdoaXRlIHN0cmV0Y2hlZC1saW5rXCIgaHJlZj1cIiNhZGRFbXBsb3llck1vZGFsXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPitBZGQgTmV3PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWRtaW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dGFibGUgcmVmPXt0aGlzLmRhdGF0YWJsZVJlZn0gY2xhc3NOYW1lPVwiZGlzcGxheSB0YWJsZSB0YWJsZS1ib3JkZXJlZFwiIHN0eWxlPXt7d2lkdGg6MTAwK1wiJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRocmVhZC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW1wbG95ZXIgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBob25lIE51bWJlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIEpvYnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFkZCBKb2I8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVtcGxveWVycy5tYXAoKEVtcGxveWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0VtcGxveWVyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57RW1wbG95ZXIuQ19OYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0VtcGxveWVyLkNfZW1haWxhZGRyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0VtcGxveWVyLkNfdGVsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZ2V0Sm9iQ291bnQoRW1wbG95ZXIuaWQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0VtcGxveWVyLkNfQWRkcmVzc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpPT50aGlzLmFkZFBhc3NJZChFbXBsb3llci5pZCl9PiA8YnV0dG9uIGNsYXNzTmFtZT1cInZpZXcgYnRuIGJ0bi1zdWNjZXNzXCIgdGl0bGU9XCJhZGRcIiBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIiwgbWFyZ2luOlwiYXV0b1wifX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1wbHVzLWNpcmNsZVwiPjwvaT4gSm9iIDwvYnV0dG9uPjwvYT4gJm5ic3A7IDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgb25DbGljaz17KCk9PnRoaXMuZWRpdFBhc3NJZChFbXBsb3llci5pZCl9IGNsYXNzTmFtZT1cImVkaXQgbWF0ZXJpYWwtaWNvbnMgaWNvbi1wYWRkaW5nXCIgdGl0bGU9XCJFZGl0XCIgc3R5bGU9e3tjb2xvcjogXCJ5ZWxsb3dcIiwgY3Vyc29yOlwicG9pbnRlclwifX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIj4mI3hFMjU0OzwvaT48L2E+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCk9PnRoaXMuZGVsZXRlUGFzc0lkKEVtcGxveWVyLmlkKX0gY2xhc3NOYW1lPVwiZGVsZXRlIG1hdGVyaWFsLWljb25zIGljb24tcGFkZGluZ1wiIHRpdGxlPVwiRGVsZXRlXCIgIHN0eWxlPXt7Y29sb3I6IFwicmVkXCIsIGN1cnNvcjpcInBvaW50ZXJcIn19IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+JiN4RTg3Mjs8L2E+ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cdFxyXG5cdDxkaXYgaWQ9XCJlZGl0RW1wbG95ZXJNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGluZm8tZGlhbG9nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICA8aDM+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1hbHRcIj48L2k+IEVtcGxveWVyIEluZm9ybWF0aW9uIEVkaXRpb248L2gzPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy5jbGVhcklucHV0fT4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxmb3JtIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJwb3N0XCIgc3R5bGU9e3t3aWR0aDogMTAwK1wiJVwiLCBtYXJnaW46IFwiYXV0b1wiLCBtYXJnaW5Ub3A6IDIwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkNfTmFtZVwiPkNvbXBhbnkgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJDX05hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiQ19OYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIENvbXBhbnkgTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuQ19OYW1lfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkNfbm9FbXBcIj5ObyBPZiBFbXBseW9lZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIkNfbm9FbXBcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiQ19ub0VtcFwiIHBsYWNlaG9sZGVyPVwiXCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuQ19ub0VtcH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiQ19wdWJsaXNoZWRfZGF0ZVwiPlB1Ymxpc2hlZCBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiQ19wdWJsaXNoZWRfZGF0ZVwiIHZhbHVlPVwiZGF0ZVwiIG5hbWU9XCJDX3B1Ymxpc2hlZF9kYXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5DX3B1Ymxpc2hlZF9kYXRlfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkNfdGVsXCI+VGVsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJDX3RlbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJDX3RlbFwiIHBsYWNlaG9sZGVyPVwiXCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuQ190ZWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkNfQ2VtYWlsYWRkclwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiQ19lbWFpbGFkZHJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiQ19lbWFpbGFkZHJcIiBwbGFjZWhvbGRlcj1cImFiY0BnbWFpbC5jb21cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkNfZW1haWxhZGRyfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiQVJFQUlEXCIgaWQ9XCJhcmVhXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DbGljaz17dGhpcy5kaXNhYmxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5TZWxlY3QgQXJlYSBpbiBKYXBhbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXJlYXMubWFwKEFyZWEgPT4gKHRoaXMuc3RhdGUuQ19hcmVhID09IEFyZWEuaWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtBcmVhLmlkfSBzZWxlY3RlZD57QXJlYS5hcmVhTmFtZX08L29wdGlvbj4gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtBcmVhLmlkfT57QXJlYS5hcmVhTmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiQ19jaXR5XCI+U2VsZWN0IHlvdXIgQ2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkNJVFlJRFwiIGlkPVwiY2l0eVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IEFyZWEgaW4gSmFwYW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjaXRpZXMgJiYgIGNpdGllcy5tYXAoQ2l0eSA9PiAodGhpcy5zdGF0ZS5DX2NpdHkgPT0gQ2l0eS5pZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NpdHkuaWR9IHNlbGVjdGVkPntDaXR5LmNpdHlOYW1lfTwvb3B0aW9uPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NpdHkuaWR9PntDaXR5LmNpdHlOYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRldGFpbEFkZHJcIj5EZXRhaWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiQ19BZGRyZXNzXCJuYW1lPVwiQ19BZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5DX0FkZHJlc3N9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY0Rlc1wiPkNvbXBhbnkgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkNfRGVzY3JpcHRpb25cIiBuYW1lPVwiQ19EZXNjcmlwdGlvblwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkNfRGVzY3JpcHRpb259IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy51cGRhdGVFbXBsb3llcn0gdmFsdWU9XCJVcGRhdGVcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXdpZHRoIHJvdW5kZWQtNCBweS0yXCIgc3R5bGU9e3ttYXJnaW5SaWdodDoxMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXt0aGlzLmNsZWFySW5wdXR9IHZhbHVlPVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuICAgIDxkaXYgaWQ9XCJhZGRFbXBsb3llck1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgaW5mby1kaWFsb2dcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtYWx0XCI+PC9pPiBBZGQgTmV3IEVtcGxveWVyPC9oMz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMuY2xlYXJJbnB1dH0+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwicG9zdFwiIHN0eWxlPXt7d2lkdGg6IDEwMCtcIiVcIiwgbWFyZ2luOiBcImF1dG9cIiwgbWFyZ2luVG9wOiAyMH19ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiQ19OYW1lXCI+Q29tcGFueSBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkNfTmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJDX05hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgQ29tcGFueSBOYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5DX05hbWV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiQ19ub0VtcFwiPk5vIE9mIEVtcGx5b2VlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiQ19ub0VtcFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJDX25vRW1wXCIgcGxhY2Vob2xkZXI9XCJcIiAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5DX25vRW1wfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJDX3B1Ymxpc2hlZF9kYXRlXCI+UHVibGlzaGVkIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJDX3B1Ymxpc2hlZF9kYXRlXCIgdmFsdWU9XCJkYXRlXCIgbmFtZT1cIkNfcHVibGlzaGVkX2RhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkNfcHVibGlzaGVkX2RhdGV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiQ190ZWxcIj5UZWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkNfdGVsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkNfdGVsXCIgcGxhY2Vob2xkZXI9XCJcIiAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5DX3RlbH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiQ19DZW1haWxhZGRyXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJDX2VtYWlsYWRkclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJDX2VtYWlsYWRkclwiIHBsYWNlaG9sZGVyPVwiYWJjQGdtYWlsLmNvbVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuQ19lbWFpbGFkZHJ9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkotYXJlYVwiPlNlbGVjdCBBcmVhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkNfYXJlYVwiIGlkPVwiYXJlYVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0RGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCBkaXNhYmxlZD5TZWxlY3QgQXJlYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hcmVhcy5tYXAoam9iQXJlYSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtqb2JBcmVhLmlkfT57am9iQXJlYS5hcmVhTmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKLWFyZWFcIj5TZWxlY3QgQ2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0NpdGllcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiQ19jaXR5XCIgaWQ9XCJjaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DbGljaz17dGhpcy5zZWxlY3REaXNhYmxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWV9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkPlNlbGVjdCBDaXR5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaXRpZXMgJiYgIGNpdGllcy5tYXAoY2l0eSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjaXR5LmlkfT57Y2l0eS5jaXR5TmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGV0YWlsQWRkclwiPkRldGFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJDX0FkZHJlc3NcIm5hbWU9XCJDX0FkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkNfQWRkcmVzc30gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjRGVzXCI+Q29tcGFueSBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiQ19EZXNjcmlwdGlvblwiIG5hbWU9XCJDX0Rlc2NyaXB0aW9uXCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuQ19EZXNjcmlwdGlvbn0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2xpY2s9e3RoaXMuYWRkRW1wbG95ZXJ9IHZhbHVlPVwiQWRkIEVtcGxveWVyXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXdpZHRoIHJvdW5kZWQtNCBweS0yXCIgc3R5bGU9e3ttYXJnaW5SaWdodDoxMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXt0aGlzLmNsZWFySW5wdXR9IHZhbHVlPVwiQ2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuICAgIDxkaXYgaWQ9XCJhZGRKb2JNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGluZm8tZGlhbG9nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz48aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlLWFsdFwiPjwvaT4gQWRkIE5ldyBKb2I8L2gzPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy5jbGVhcklucHV0fT4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxmb3JtIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJwb3N0XCIgc3R5bGU9e3t3aWR0aDogMTAwK1wiJVwifX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSByb2xlPVwiRm9ybVwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCJcIiBhY2NlcHQtY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTggYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpuYW1lXCI+Sm9iIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBKb2IgTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSm5hbWV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX0NvbnRyYWN0XCI+RW1wbG95bWVudCBTdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJKX0NvbnRyYWN0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9Db250cmFjdFwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWV9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgZGlzYWJsZWQ+U2VsZWN0IEpvYiBDb250cmFjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUGFydCBUaW1lXCI+UGFydCBUaW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGdWxsIFRpbWVcIj5GdWxsIFRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzYWxhcnlcIj5TYWxhcnkowqUpPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWluX3NhbGFyeVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfbWluX3NhbGFyeVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTWluaW11biBTYWxhcnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfbWluX3NhbGFyeX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYXhfc2FsYXJ5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9tYXhfc2FsYXJ5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBNYXhpbXVuIFNhbGFyeVwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfbWF4X3NhbGFyeX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfaG91cnNcIj5Xb3JraW5nIEhvdXJzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfaG91cnNcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX2hvdXJzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBXb3JraW5nIEhvdXJzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX2hvdXJzfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfV29ya2luZ19EYXlcIj5Xb3JraW5nIERheXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl9Xb3JraW5nX0RheVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfV29ya2luZ19EYXlcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFdvcmtpbmcgRGF5c1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9Xb3JraW5nX0RheX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJBZ2VfcmFuZ2VcIj5BZ2UgUmFuZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJBZ2VfcmFuZ2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJBZ2VfcmFuZ2VcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFnZSBSYW5nZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuQWdlX3JhbmdlfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfSnBMZXZlbFwiPlNlbGVjdCBKYXBhbmVzZSBTa2lsbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIkpfSnBMZXZlbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfSnBMZXZlbFwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWV9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgZGlzYWJsZWQ+U2VsZWN0IEphcGFuZXNlIGxldmVsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+TjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5OMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX3RlbFwiPlRlbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl90ZWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX3RlbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGhvbmU6XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX3RlbH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qb3N0ZWQgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiUG9zdGVkRGF0ZVwiIHZhbHVlPVwiZGF0ZXRpbWVcIiBuYW1lPVwiUG9zdGVkRGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuUG9zdGVkRGF0ZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9lbWFpbFwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl9lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfZW1haWxcIiBwbGFjZWhvbGRlcj1cImFiY0BnbWFpbC5jb21cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfZW1haWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSi1hcmVhXCI+U2VsZWN0IEFyZWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiSl9hcmVhXCIgaWQ9XCJhcmVhXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DbGljaz17dGhpcy5zZWxlY3REaXNhYmxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWV9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkPlNlbGVjdCBBcmVhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFyZWFzLm1hcChqb2JBcmVhID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2pvYkFyZWEuaWR9Pntqb2JBcmVhLmFyZWFOYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkotYXJlYVwiPlNlbGVjdCBDaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Q2l0aWVzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJKX2NpdHlcIiBpZD1cImNpdHlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdERpc2FibGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgZGlzYWJsZWQ+U2VsZWN0IENpdHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NpdGllcyAmJiAgY2l0aWVzLm1hcChjaXR5ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NpdHkuaWR9PntjaXR5LmNpdHlOYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRldGFpbEFkZHJcIj5EZXRhaWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgIGlkPVwiSl9BZGRyZXNzXCIgbmFtZT1cIkpfQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9BZGRyZXNzfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSm9iRGVzXCI+Sm9iIERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgaWQ9XCJKX0Rlc2NyaXB0aW9uXCIgbmFtZT1cIkpfRGVzY3JpcHRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfRGVzY3JpcHRpb259IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiUXVhbFwiPk90aGVyIFF1YWxpZmljYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiSl9RdWFsaWZpY2F0aW9uXCIgbmFtZT1cIkpfUXVhbGlmaWNhdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9RdWFsaWZpY2F0aW9ufSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5hZGRKb2J9IHZhbHVlPVwiQWRkXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi13aWR0aCByb3VuZGVkLTQgcHktMlwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgc3R5bGU9e3ttYXJnaW5SaWdodDoxMH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHZhbHVlPVwiQ2FuY2VsXCIgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdFxyXG5cdDxkaXYgaWQ9XCJkZWxldGVDb25maXJtTW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBkZWwtZGlhbG9nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICA8aDM+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1hbHRcIj48L2k+IERlbGV0ZSBJbmZvcm1hdGlvbjwvaDM+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXt0aGlzLmNsZWFySW5wdXR9PiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHRcdDxmb3JtPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e3tmb250RmFtaWx5OiBcIidMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCBzYW5zLXNlcmlmXCJ9fT5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb21wYW55PzwvcD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nXCI+PHNtYWxsPlRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuPC9zbWFsbD48L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIiAvPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIHZhbHVlPVwiRGVsZXRlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXt0aGlzLmRlbGV0ZUVtcGxveWVyfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvYm9keT5cclxuPC9odG1sPlxyXG4pfX0iXSwic291cmNlUm9vdCI6IiJ9