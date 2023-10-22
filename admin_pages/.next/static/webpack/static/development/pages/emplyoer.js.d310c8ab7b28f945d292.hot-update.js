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

      // const area = this.props.area
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
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574,
          columnNumber: 61
        }
      }, "Select Area"), __jsx("select", {
        name: "C_area",
        id: "area",
        className: "form-control",
        onClick: this.disable,
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 61
        }
      }, __jsx("option", {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 53
        }
      }, "Select Area in Japan"), this.state.areas.map(function (Area) {
        return _this2.state.J_area == Area.id ? __jsx("option", {
          value: Area.id,
          selected: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 578,
            columnNumber: 57
          }
        }, Area.areaName) : __jsx("option", {
          value: Area.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 579,
            columnNumber: 57
          }
        }, Area.areaName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_city",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 61
        }
      }, "Select your City"), __jsx("select", {
        name: "C_city",
        id: "city",
        className: "form-control",
        onClick: this.disable,
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 61
        }
      }, __jsx("option", {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 53
        }
      }, "Select Area in Japan"), cities && cities.map(function (City) {
        return _this2.state.J_city == City.id ? __jsx("option", {
          value: City.id,
          selected: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 588,
            columnNumber: 57
          }
        }, City.cityName) : __jsx("option", {
          value: City.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 589,
            columnNumber: 57
          }
        }, City.cityName);
      }))), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "detailAddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
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
          lineNumber: 595,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "cDes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600,
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
          lineNumber: 601,
          columnNumber: 57
        }
      })))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610,
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
          lineNumber: 611,
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
          lineNumber: 612,
          columnNumber: 29
        }
      })))))), __jsx("div", {
        id: "addEmployerModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 13
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "fa fa-file-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
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
          lineNumber: 624,
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
          lineNumber: 626,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 631,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_Name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632,
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
          lineNumber: 633,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_noEmp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637,
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
          lineNumber: 638,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_published_date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641,
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
        lineNumber: 642,
        columnNumber: 57
      }), _jsx2))), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_tel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646,
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
          lineNumber: 647,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "C_Cemailaddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650,
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
          lineNumber: 651,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657,
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
          lineNumber: 658,
          columnNumber: 59
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 61
        }
      }, "Select Area"), this.state.areas.map(function (jobArea) {
        return __jsx("option", {
          value: jobArea.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 661,
            columnNumber: 65
          }
        }, jobArea.areaName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666,
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
          lineNumber: 668,
          columnNumber: 57
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669,
          columnNumber: 61
        }
      }, "Select City"), cities && cities.map(function (city) {
        return __jsx("option", {
          value: city.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 671,
            columnNumber: 65
          }
        }, city.cityName);
      }))), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "detailAddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679,
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
          lineNumber: 680,
          columnNumber: 57
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "cDes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 685,
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
          lineNumber: 686,
          columnNumber: 57
        }
      }))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704,
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
          lineNumber: 705,
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
          lineNumber: 706,
          columnNumber: 29
        }
      })))))), __jsx("div", {
        id: "addJobModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 713,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 715,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 716,
          columnNumber: 13
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "fa fa-file-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717,
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
          lineNumber: 718,
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
          lineNumber: 720,
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
          lineNumber: 721,
          columnNumber: 25
        }
      }, __jsx("div", {
        "class": "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 722,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 723,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 727,
          columnNumber: 45
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 729,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "Jname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730,
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
          lineNumber: 731,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J_Contract",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 735,
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
          lineNumber: 736,
          columnNumber: 57
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 737,
          columnNumber: 57
        }
      }, "Select Job Contract"), __jsx("option", {
        value: "Part Time",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 738,
          columnNumber: 61
        }
      }, "Part Time"), __jsx("option", {
        value: "Full Time",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739,
          columnNumber: 61
        }
      }, "Full Time"))), __jsx("label", {
        "for": "salary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743,
          columnNumber: 53
        }
      }, "Salary(\xA5)"), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 744,
          columnNumber: 53
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 745,
          columnNumber: 52
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746,
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
          lineNumber: 747,
          columnNumber: 56
        }
      }))), __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751,
          columnNumber: 52
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 752,
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
          lineNumber: 753,
          columnNumber: 55
        }
      })))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J_hours",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757,
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
          lineNumber: 758,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 760,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J_Working_Day",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 761,
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
          lineNumber: 762,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "Age_range",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765,
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
          lineNumber: 766,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 768,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J_JpLevel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769,
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
          lineNumber: 770,
          columnNumber: 57
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771,
          columnNumber: 57
        }
      }, "Select Japanese level"), __jsx("option", {
        value: "3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772,
          columnNumber: 61
        }
      }, "N3"), __jsx("option", {
        value: "2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773,
          columnNumber: 61
        }
      }, "N2"), __jsx("option", {
        value: "1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774,
          columnNumber: 61
        }
      }, "N1"))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 778,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J_tel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 779,
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
          lineNumber: 780,
          columnNumber: 57
        }
      })))), __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788,
          columnNumber: 36
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 789,
          columnNumber: 42
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 790,
          columnNumber: 42
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 791,
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
        lineNumber: 792,
        columnNumber: 65
      }), _jsx3))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 794,
          columnNumber: 46
        }
      }, __jsx("label", {
        "for": "J_email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 795,
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
          lineNumber: 796,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 798,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 799,
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
          lineNumber: 800,
          columnNumber: 59
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 801,
          columnNumber: 61
        }
      }, "Select Area"), this.state.areas.map(function (jobArea) {
        return __jsx("option", {
          value: jobArea.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 803,
            columnNumber: 65
          }
        }, jobArea.areaName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 808,
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
          lineNumber: 810,
          columnNumber: 57
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811,
          columnNumber: 61
        }
      }, "Select City"), cities && cities.map(function (city) {
        return __jsx("option", {
          value: city.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 813,
            columnNumber: 65
          }
        }, city.cityName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 822,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "detailAddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823,
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
          lineNumber: 824,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 828,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "JobDes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 829,
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
          lineNumber: 830,
          columnNumber: 57
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 835,
          columnNumber: 53
        }
      }, __jsx("label", {
        "for": "Qual",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 836,
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
          lineNumber: 837,
          columnNumber: 57
        }
      })))))))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 851,
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
          lineNumber: 852,
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
          lineNumber: 853,
          columnNumber: 25
        }
      }))))), __jsx("div", {
        id: "deleteConfirmModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 859,
          columnNumber: 2
        }
      }, __jsx("div", {
        className: "modal-dialog del-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 860,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 861,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 862,
          columnNumber: 13
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 863,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "fa fa-file-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 863,
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
          lineNumber: 864,
          columnNumber: 7
        }
      }, "\xD7")), __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 866,
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
          lineNumber: 867,
          columnNumber: 6
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 868,
          columnNumber: 7
        }
      }, "Are you sure you want to delete this company?"), __jsx("p", {
        className: "text-warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 869,
          columnNumber: 7
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 869,
          columnNumber: 35
        }
      }, "This action cannot be undone.")))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 872,
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
          lineNumber: 873,
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
          lineNumber: 874,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lbXBseW9lci5qcyJdLCJuYW1lcyI6WyJlbXBsb3llckxpc3QiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjcmlwdDEiLCJwcm9wcyIsImlkIiwiJCIsIm1vZGFsIiwic2V0U3RhdGUiLCJkZWxldGVfaWQiLCJlZGl0X2lkIiwiZmlyZWJhc2UiLCJsb2FkRmlyZWJhc2UiLCJkYXRhIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsImNvbnNvbGUiLCJsb2ciLCJFTVBMT1lFUklEIiwiQ19OYW1lIiwiQ19ub0VtcCIsIkNfcHVibGlzaGVkX2RhdGUiLCJDX3RlbCIsIkNfZW1haWxhZGRyIiwiQ19jaXR5IiwiQ19hcmVhIiwiQ19BZGRyZXNzIiwiQ19EZXNjcmlwdGlvbiIsInN0YXRlIiwiZW1wbG95ZXJOYW1lIiwiZXJyb3IiLCJ1cGRhdGUiLCJyZWZyZXNoVGFibGUiLCJqb2JzIiwiY291bnQiLCJtYXAiLCJqb2IiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImdldENpdGllcyIsInNob3dDaXRpZXMiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJSZWYiLCJhZGQiLCJKbmFtZSIsIkpfQ29udHJhY3QiLCJKX21pbl9zYWxhcnkiLCJKX21heF9zYWxhcnkiLCJKX2hvdXJzIiwiSl9Xb3JraW5nX0RheSIsIkpfSnBMZXZlbCIsIkpfdGVsIiwiUG9zdGVkRGF0ZSIsIkpfZW1haWwiLCJKX2FyZWEiLCJKX2NpdHkiLCJKX0FkZHJlc3MiLCJKX0Rlc2NyaXB0aW9uIiwiSl9RdWFsaWZpY2F0aW9uIiwicmVmcmVzaEFmdGVyQWRkVGFibGUiLCJqb2JDb3VudCIsImNpdGllcyIsIndoZXJlIiwiZm9yRWFjaCIsInB1c2giLCJPYmplY3QiLCJhc3NpZ24iLCJhdHRyIiwiaW5pdGlhbF9zdGF0ZSIsImlucHV0cyIsImluZGV4IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUF0dHIiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZGF0YXRhYmxlUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCIkZGF0YXRhYmxlIiwiZW1wbG95ZXJzIiwiZW1wbG95ZXIiLCJhcmVhcyIsImFyZWEiLCJpbml0aWFsaXplRGF0YXRhYmxlIiwiY3VycmVudCIsIkRhdGFUYWJsZSIsIm9yZGVyIiwiY2xlYXIiLCJzZWxmIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJ3aWR0aCIsIkVtcGxveWVyIiwiZ2V0Sm9iQ291bnQiLCJhZGRQYXNzSWQiLCJjdXJzb3IiLCJtYXJnaW4iLCJlZGl0UGFzc0lkIiwiY29sb3IiLCJkZWxldGVQYXNzSWQiLCJjbGVhcklucHV0IiwibWFyZ2luVG9wIiwiZGlzYWJsZSIsIkFyZWEiLCJhcmVhTmFtZSIsIkNpdHkiLCJjaXR5TmFtZSIsInVwZGF0ZUVtcGxveWVyIiwibWFyZ2luUmlnaHQiLCJzZWxlY3REaXNhYmxlIiwic2VsZWN0ZWRWYWx1ZSIsImpvYkFyZWEiLCJjaXR5IiwiYWRkRW1wbG95ZXIiLCJBZ2VfcmFuZ2UiLCJhZGRKb2IiLCJmb250RmFtaWx5IiwiZGVsZXRlRW1wbG95ZXIiLCJsaW1pdCIsImVtcGxveWVyUXVlcnlTbmFwc2hvdCIsImRvY3MiLCJhcmVhUXVlcnlTbmFwc2hvdCIsImNpdHlRdWVyeVNuYXBzaG90Iiwiam9iUXVlcnlTbmFwc2hvdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsWTs7Ozs7Ozt3Q0FDRTtBQUNmLFVBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsWUFBTSxDQUFDRyxHQUFQLEdBQWEsZ0JBQWI7QUFDQUgsWUFBTSxDQUFDSSxLQUFQLEdBQWUsSUFBZjtBQUVBSCxjQUFRLENBQUNJLElBQVQsQ0FBY0MsV0FBZCxDQUEwQk4sTUFBMUI7QUFFQSxVQUFNTyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFoQjtBQUNBSyxhQUFPLENBQUNKLEdBQVIsR0FBYyxpQ0FBZDtBQUNBSSxhQUFPLENBQUNILEtBQVIsR0FBZ0IsSUFBaEI7QUFFQUgsY0FBUSxDQUFDSSxJQUFULENBQWNDLFdBQWQsQ0FBMEJDLE9BQTFCO0FBRUg7OztBQUNELHdCQUFhQyxLQUFiLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsdU5Bb0dKLFVBQUNDLEVBQUQsRUFBTTtBQUNqQkMsT0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJDLEtBQXpCLENBQStCLE1BQS9COztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDQyxpQkFBUyxFQUFHSjtBQUFiLE9BQWQ7QUFDSCxLQXZHa0I7O0FBQUEsb05BeUdQLFVBQUNBLEVBQUQsRUFBUTtBQUNoQixZQUFLRyxRQUFMLENBQWM7QUFBQ0UsZUFBTyxFQUFHTDtBQUFYLE9BQWQ7O0FBQ0EsVUFBSU0sUUFBUSxHQUFHQyxnRUFBWSxFQUEzQjtBQUNBLFVBQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLFVBQUc7QUFDQ0YsZ0JBQVEsQ0FBQ0csU0FBVCxHQUFxQkMsVUFBckIsQ0FBZ0MsVUFBaEMsRUFBNENDLEdBQTVDLENBQWdEWCxFQUFoRCxFQUFvRFksR0FBcEQsR0FDQUMsSUFEQSxDQUNLLFVBQUNDLFFBQUQsRUFBWTtBQUNiTixjQUFJLEdBQUdNLFFBQVEsQ0FBQ04sSUFBVCxFQUFQO0FBQ0FPLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjs7QUFDQSxnQkFBS0wsUUFBTCxDQUFlO0FBQ1hjLHNCQUFVLEVBQUVULElBQUksQ0FBQ0gsT0FETjtBQUVYYSxrQkFBTSxFQUFFVixJQUFJLENBQUNVLE1BRkY7QUFHWEMsbUJBQU8sRUFBQ1gsSUFBSSxDQUFDVyxPQUhGO0FBSVhDLDRCQUFnQixFQUFDWixJQUFJLENBQUNZLGdCQUpYO0FBS1hDLGlCQUFLLEVBQUNiLElBQUksQ0FBQ2EsS0FMQTtBQU1YQyx1QkFBVyxFQUFDZCxJQUFJLENBQUNjLFdBTk47QUFPWEMsa0JBQU0sRUFBQ2YsSUFBSSxDQUFDZSxNQVBEO0FBUVhDLGtCQUFNLEVBQUNoQixJQUFJLENBQUNnQixNQVJEO0FBU1hDLHFCQUFTLEVBQUNqQixJQUFJLENBQUNpQixTQVRKO0FBVVhDLHlCQUFhLEVBQUNsQixJQUFJLENBQUNrQjtBQVZSLFdBQWY7QUFZSCxTQWhCRDtBQWlCQVgsZUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFLVyxLQUFMLENBQVdDLFlBQXZCO0FBQ0gsT0FwQkQsQ0FvQkMsT0FBTUMsS0FBTixFQUFZO0FBQ1RkLGVBQU8sQ0FBQ0MsR0FBUixDQUFZYSxLQUFaO0FBQ0g7O0FBQ0RkLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtXLEtBQUwsQ0FBV0MsWUFBdkI7QUFDQTNCLE9BQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JDLEtBQWxCLENBQXdCLE1BQXhCO0FBQ0gsS0F0SWtCOztBQUFBLHFOQXdJTixVQUFDRixFQUFELEVBQVE7QUFDakIsWUFBS0csUUFBTCxDQUFjO0FBQUNFLGVBQU8sRUFBR0w7QUFBWCxPQUFkOztBQUNBLFVBQUlNLFFBQVEsR0FBR0MsZ0VBQVksRUFBM0I7QUFDQSxVQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxVQUFHO0FBQ0NGLGdCQUFRLENBQUNHLFNBQVQsR0FBcUJDLFVBQXJCLENBQWdDLFVBQWhDLEVBQTRDQyxHQUE1QyxDQUFnRFgsRUFBaEQsRUFBb0RZLEdBQXBELEdBQ0NDLElBREQsQ0FDTSxVQUFDQyxRQUFELEVBQVk7QUFDZE4sY0FBSSxHQUFHTSxRQUFRLENBQUNOLElBQVQsRUFBUDtBQUNBTyxpQkFBTyxDQUFDQyxHQUFSLENBQVlSLElBQVo7O0FBQ0EsZ0JBQUtMLFFBQUwsQ0FBZTtBQUNYZSxrQkFBTSxFQUFFVixJQUFJLENBQUNVLE1BREY7QUFFWEMsbUJBQU8sRUFBQ1gsSUFBSSxDQUFDVyxPQUZGO0FBR1hDLDRCQUFnQixFQUFDWixJQUFJLENBQUNZLGdCQUhYO0FBSVhDLGlCQUFLLEVBQUNiLElBQUksQ0FBQ2EsS0FKQTtBQUtYQyx1QkFBVyxFQUFDZCxJQUFJLENBQUNjLFdBTE47QUFNWEMsa0JBQU0sRUFBQ2YsSUFBSSxDQUFDZSxNQU5EO0FBT1hDLGtCQUFNLEVBQUNoQixJQUFJLENBQUNnQixNQVBEO0FBUVhDLHFCQUFTLEVBQUNqQixJQUFJLENBQUNpQixTQVJKO0FBU1hDLHlCQUFhLEVBQUNsQixJQUFJLENBQUNrQjtBQVRSLFdBQWY7QUFXSCxTQWZEO0FBZ0JBWCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtXLEtBQUwsQ0FBV0MsWUFBdkI7QUFFSCxPQXBCRCxDQW9CQyxPQUFNQyxLQUFOLEVBQVk7QUFDVGQsZUFBTyxDQUFDQyxHQUFSLENBQVlhLEtBQVo7QUFDSDs7QUFDRGQsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS1csS0FBTCxDQUFXQyxZQUF2QjtBQUNBM0IsT0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JDLEtBQXhCLENBQThCLE1BQTlCO0FBQ0gsS0FyS2tCOztBQUFBLHlOQXVLRixZQUFLO0FBQ2xCLFVBQUlJLFFBQVEsR0FBR0MsZ0VBQVksRUFBM0I7O0FBQ0EsVUFBRztBQUNDRCxnQkFBUSxDQUFDRyxTQUFULEdBQXFCQyxVQUFyQixDQUFnQyxVQUFoQyxFQUE0Q0MsR0FBNUMsQ0FBZ0QsTUFBS2dCLEtBQUwsQ0FBV3RCLE9BQTNELEVBQW9FeUIsTUFBcEUsQ0FBMkU7QUFDdkVaLGdCQUFNLEVBQUMsTUFBS1MsS0FBTCxDQUFXVCxNQURxRDtBQUV2RUMsaUJBQU8sRUFBQyxNQUFLUSxLQUFMLENBQVdSLE9BRm9EO0FBR3ZFQywwQkFBZ0IsRUFBQyxNQUFLTyxLQUFMLENBQVdQLGdCQUgyQztBQUl2RUMsZUFBSyxFQUFDLE1BQUtNLEtBQUwsQ0FBV04sS0FKc0Q7QUFLdkVDLHFCQUFXLEVBQUMsTUFBS0ssS0FBTCxDQUFXTCxXQUxnRDtBQU12RUMsZ0JBQU0sRUFBQ2YsSUFBSSxDQUFDZSxNQU4yRDtBQU92RUMsZ0JBQU0sRUFBQ2hCLElBQUksQ0FBQ2dCLE1BUDJEO0FBUXZFQyxtQkFBUyxFQUFDLE1BQUtFLEtBQUwsQ0FBV0YsU0FSa0Q7QUFTdkVDLHVCQUFhLEVBQUMsTUFBS0MsS0FBTCxDQUFXRDtBQVQ4QyxTQUEzRTs7QUFXQSxjQUFLSyxZQUFMO0FBQ0gsT0FiRCxDQWFDLE9BQU1GLEtBQU4sRUFBWTtBQUNUZCxlQUFPLENBQUNDLEdBQVIsQ0FBWWEsS0FBWjtBQUNIOztBQUNENUIsT0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JDLEtBQXhCLENBQThCLE1BQTlCO0FBQ0gsS0ExTGtCOztBQUFBLHNOQTRMTCxVQUFDRixFQUFELEVBQVE7QUFDbEIsVUFBSWdDLElBQUksR0FBRyxNQUFLTCxLQUFMLENBQVdLLElBQXRCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLENBQVo7QUFFS0QsVUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1osWUFBR0EsR0FBRyxDQUFDM0IsSUFBSixDQUFTUyxVQUFULElBQXVCakIsRUFBMUIsRUFBNkI7QUFDekJlLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBaUIsZUFBSztBQUNSO0FBQ0osT0FMRDtBQU1BLGFBQU9BLEtBQVA7QUFDUixLQXZNa0I7O0FBQUEsdU5BeU1KLFVBQUNHLEtBQUQsRUFBVztBQUN0QixZQUFLakMsUUFBTCwrRkFBZ0JpQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBN0IsRUFBcUNGLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxLQUFsRDs7QUFDQSxVQUFHSCxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBYixJQUFxQixRQUFyQixJQUFpQ0YsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQWIsSUFBcUIsUUFBekQsRUFBbUU7QUFDL0QsY0FBS0UsU0FBTCxDQUFlSixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FBNUI7QUFDSDs7QUFDRCxZQUFLcEMsUUFBTCxDQUFjO0FBQUNzQyxrQkFBVSxFQUFHO0FBQWQsT0FBZDtBQUNILEtBL01rQjs7QUFBQSxpTkFpTlYsVUFBQUwsS0FBSyxFQUFJO0FBQ2RBLFdBQUssQ0FBQ00sY0FBTjtBQUVBLFVBQUlwQyxRQUFRLEdBQUdDLGdFQUFZLEVBQTNCO0FBQ0EsVUFBTW9DLE9BQU8sR0FBR3JDLFFBQVEsQ0FBQ0csU0FBVCxHQUFxQkMsVUFBckIsQ0FBZ0MsS0FBaEMsRUFDUGtDLEdBRE8sQ0FDSDtBQUNHM0Isa0JBQVUsRUFBRyxNQUFLVSxLQUFMLENBQVd0QixPQUQzQjtBQUVHd0MsYUFBSyxFQUFDLE1BQUtsQixLQUFMLENBQVdrQixLQUZwQjtBQUdHQyxrQkFBVSxFQUFDLE1BQUtuQixLQUFMLENBQVdtQixVQUh6QjtBQUlHQyxvQkFBWSxFQUFDLE1BQUtwQixLQUFMLENBQVdvQixZQUozQjtBQUtHQyxvQkFBWSxFQUFDLE1BQUtyQixLQUFMLENBQVdxQixZQUwzQjtBQU1HQyxlQUFPLEVBQUMsTUFBS3RCLEtBQUwsQ0FBV3NCLE9BTnRCO0FBT0dDLHFCQUFhLEVBQUMsTUFBS3ZCLEtBQUwsQ0FBV3VCLGFBUDVCO0FBUUdDLGlCQUFTLEVBQUMsTUFBS3hCLEtBQUwsQ0FBV3dCLFNBUnhCO0FBU0dDLGFBQUssRUFBQyxNQUFLekIsS0FBTCxDQUFXeUIsS0FUcEI7QUFVR0Msa0JBQVUsRUFBQyxNQUFLMUIsS0FBTCxDQUFXMEIsVUFWekI7QUFXR0MsZUFBTyxFQUFDLE1BQUszQixLQUFMLENBQVcyQixPQVh0QjtBQVlHQyxjQUFNLEVBQUMsTUFBSzVCLEtBQUwsQ0FBVzRCLE1BWnJCO0FBYUdDLGNBQU0sRUFBQyxNQUFLN0IsS0FBTCxDQUFXNkIsTUFickI7QUFjR0MsaUJBQVMsRUFBQyxNQUFLOUIsS0FBTCxDQUFXOEIsU0FkeEI7QUFlR0MscUJBQWEsRUFBQyxNQUFLL0IsS0FBTCxDQUFXK0IsYUFmNUI7QUFnQkdDLHVCQUFlLEVBQUMsTUFBS2hDLEtBQUwsQ0FBV2dDO0FBaEI5QixPQURHLENBQWhCOztBQWtCUSxZQUFLeEQsUUFBTCxDQUFjO0FBQ1ZjLGtCQUFVLEVBQUcsRUFESDtBQUVWNEIsYUFBSyxFQUFDLEVBRkk7QUFHVk8sYUFBSyxFQUFDLEVBSEk7QUFJVkwsb0JBQVksRUFBQyxFQUpIO0FBS1ZDLG9CQUFZLEVBQUMsRUFMSDtBQU1WSyxrQkFBVSxFQUFDLEVBTkQ7QUFPVkosZUFBTyxFQUFDLEVBUEU7QUFRVkssZUFBTyxFQUFDLEVBUkU7QUFTVkUsY0FBTSxFQUFDLEVBVEc7QUFVVkQsY0FBTSxFQUFDLEVBVkc7QUFXVkwscUJBQWEsRUFBQyxFQVhKO0FBWVZTLHVCQUFlLEVBQUMsRUFaTjtBQWFWUixpQkFBUyxFQUFDLEVBYkE7QUFjVk8scUJBQWEsRUFBQyxFQWRKO0FBZVZaLGtCQUFVLEVBQUMsRUFmRDtBQWdCVlcsaUJBQVMsRUFBQztBQWhCQSxPQUFkOztBQWlCSSxZQUFLRyxvQkFBTDs7QUFDSjdDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZMkIsT0FBWjtBQUNYLEtBMVBrQjs7QUFBQSxzTkE0UEwsVUFBQzNDLEVBQUQsRUFBUTtBQUNsQmUsYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDQSxVQUFJUixJQUFJLEdBQUcsRUFBWDs7QUFDQSxVQUFHO0FBQ0MsWUFBSUYsUUFBUSxHQUFHQyxnRUFBWSxFQUEzQjtBQUNBRCxnQkFBUSxDQUFDRyxTQUFULEdBQXFCQyxVQUFyQixDQUFnQyxVQUFoQyxFQUE0Q0MsR0FBNUMsQ0FBZ0RYLEVBQWhELEVBQW9EWSxHQUFwRCxHQUNHQyxJQURILENBQ1EsVUFBQ0MsUUFBRCxFQUFZO0FBQ2ROLGNBQUksR0FBR00sUUFBUSxDQUFDTixJQUFULEVBQVA7QUFDQUYsa0JBQVEsQ0FBQ0csU0FBVCxHQUFxQkMsVUFBckIsQ0FBZ0MsVUFBaEMsRUFBNENDLEdBQTVDLENBQWdEWCxFQUFoRCxFQUFvRDhCLE1BQXBELENBQTJEO0FBQUMrQixvQkFBUSxFQUFHckQsSUFBSSxDQUFDcUQsUUFBTCxHQUFjO0FBQTFCLFdBQTNEO0FBQ0gsU0FKSDtBQUtILE9BUEQsQ0FPQyxPQUFNaEMsS0FBTixFQUFZO0FBQ1RkLGVBQU8sQ0FBQ0MsR0FBUixDQUFZYSxLQUFaO0FBQ0g7QUFDRixLQXpRZ0I7O0FBQUEsb05BMlFQLFVBQUM3QixFQUFELEVBQVE7QUFDaEIsVUFBSThELE1BQU0sR0FBRyxFQUFiOztBQUNBLFVBQUc7QUFDQyxZQUFJeEQsUUFBUSxHQUFHQyxnRUFBWSxFQUEzQjtBQUNBRCxnQkFBUSxDQUFDRyxTQUFULEdBQXFCQyxVQUFyQixDQUFnQyxNQUFoQyxFQUF3Q3FELEtBQXhDLENBQThDLFFBQTlDLEVBQXVELElBQXZELEVBQTREL0QsRUFBNUQsRUFDQ1ksR0FERCxHQUVDQyxJQUZELENBRU0sVUFBQ0MsUUFBRCxFQUFhO0FBQ2ZBLGtCQUFRLENBQUNrRCxPQUFULENBQWlCLFVBQUFyRCxHQUFHLEVBQUk7QUFDcEJtRCxrQkFBTSxDQUFDRyxJQUFQLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUNSO0FBQUNuRSxnQkFBRSxFQUFHVyxHQUFHLENBQUNYO0FBQVYsYUFEUSxFQUVSVyxHQUFHLENBQUNILElBQUosRUFGUSxDQUFaO0FBSUgsV0FMRDtBQU1BTyxpQkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQzhDLGtCQUFNLEVBQU5BO0FBQUQsV0FBWjs7QUFDQSxnQkFBSzNELFFBQUwsQ0FBYztBQUFDMkQsa0JBQU0sRUFBTkE7QUFBRCxXQUFkO0FBQ0gsU0FYRDtBQVlILE9BZEQsQ0FjQyxPQUFNakMsS0FBTixFQUFZO0FBQ1RkLGVBQU8sQ0FBQ0MsR0FBUixDQUFZYSxLQUFaO0FBQ0g7QUFDSixLQTlSa0I7O0FBQUEsd05BZ1NILFVBQUNPLEtBQUQsRUFBVztBQUN2Qm5DLE9BQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCbUUsSUFBeEIsQ0FBNkIsVUFBN0IsRUFBd0MsVUFBeEM7QUFFQW5FLE9BQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCbUUsSUFBeEIsQ0FBNkIsVUFBN0IsRUFBd0MsVUFBeEM7QUFDSCxLQXBTa0I7O0FBQUEsc05Bc1NMLFVBQUFoQyxLQUFLLEVBQUk7QUFDbkJBLFdBQUssQ0FBQ00sY0FBTjtBQUNBLFVBQUlwQyxRQUFRLEdBQUdDLGdFQUFZLEVBQTNCO0FBQ0EsVUFBTW9DLE9BQU8sR0FBR3JDLFFBQVEsQ0FBQ0csU0FBVCxHQUFxQkMsVUFBckIsQ0FBZ0MsVUFBaEMsRUFDUGtDLEdBRE8sQ0FDSDtBQUNEMUIsY0FBTSxFQUFDLE1BQUtTLEtBQUwsQ0FBV1QsTUFEakI7QUFFREMsZUFBTyxFQUFDLE1BQUtRLEtBQUwsQ0FBV1IsT0FGbEI7QUFHREMsd0JBQWdCLEVBQUMsTUFBS08sS0FBTCxDQUFXUCxnQkFIM0I7QUFJREMsYUFBSyxFQUFDLE1BQUtNLEtBQUwsQ0FBV04sS0FKaEI7QUFLREMsbUJBQVcsRUFBQyxNQUFLSyxLQUFMLENBQVdMLFdBTHRCO0FBTURDLGNBQU0sRUFBQyxNQUFLSSxLQUFMLENBQVdKLE1BTmpCO0FBT0RDLGNBQU0sRUFBQyxNQUFLRyxLQUFMLENBQVdILE1BUGpCO0FBUURDLGlCQUFTLEVBQUMsTUFBS0UsS0FBTCxDQUFXRixTQVJwQjtBQVNEQyxxQkFBYSxFQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFUeEIsT0FERyxDQUFoQjs7QUFZUSxZQUFLdkIsUUFBTCxDQUFjO0FBQ1ZlLGNBQU0sRUFBQyxNQUFLUyxLQUFMLENBQVdULE1BRFI7QUFFVkMsZUFBTyxFQUFDLE1BQUtRLEtBQUwsQ0FBV1IsT0FGVDtBQUdWQyx3QkFBZ0IsRUFBQyxNQUFLTyxLQUFMLENBQVdQLGdCQUhsQjtBQUlWQyxhQUFLLEVBQUMsTUFBS00sS0FBTCxDQUFXTixLQUpQO0FBS1ZDLG1CQUFXLEVBQUMsTUFBS0ssS0FBTCxDQUFXTCxXQUxiO0FBTVZDLGNBQU0sRUFBQyxNQUFLSSxLQUFMLENBQVdKLE1BTlI7QUFPVkMsY0FBTSxFQUFDLE1BQUtHLEtBQUwsQ0FBV0gsTUFQUjtBQVFWQyxpQkFBUyxFQUFDLE1BQUtFLEtBQUwsQ0FBV0YsU0FSWDtBQVNWQyxxQkFBYSxFQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFUZixPQUFkOztBQVlSLFlBQUtrQyxvQkFBTDtBQUNILEtBbFVrQjs7QUFBQSx5TkFvVUYsWUFBTTtBQUNuQixVQUFJdEQsUUFBUSxHQUFHQyxnRUFBWSxFQUEzQjs7QUFDQSxVQUFHO0FBQ0NELGdCQUFRLENBQUNHLFNBQVQsR0FBcUJDLFVBQXJCLENBQWdDLFVBQWhDLEVBQ0NDLEdBREQsQ0FDSyxNQUFLZ0IsS0FBTCxDQUFXdkIsU0FEaEI7QUFHQVcsZUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFFSCxPQU5ELENBTUMsT0FBTWEsS0FBTixFQUFZO0FBQ1RkLGVBQU8sQ0FBQ0MsR0FBUixDQUFZYSxLQUFaO0FBQ0g7O0FBQ0QsWUFBSytCLG9CQUFMO0FBQ0gsS0FoVmtCOztBQUFBLHFOQWtWTixVQUFDeEIsS0FBRCxFQUFXO0FBQ3BCLFlBQUtqQyxRQUFMLENBQWMsTUFBS2tFLGFBQW5COztBQUNBLFVBQUlDLE1BQUosRUFBWUMsS0FBWjtBQUVBRCxZQUFNLEdBQUc5RSxRQUFRLENBQUNnRixvQkFBVCxDQUE4QixPQUE5QixDQUFUOztBQUNBLFdBQUtELEtBQUssR0FBRyxDQUFiLEVBQWdCQSxLQUFLLEdBQUdELE1BQU0sQ0FBQ0csTUFBL0IsRUFBdUMsRUFBRUYsS0FBekMsRUFBZ0Q7QUFDNUNELGNBQU0sQ0FBQ0MsS0FBRCxDQUFOLENBQWNoQyxLQUFkLEdBQXNCLEVBQXRCO0FBQ0g7O0FBRUQvQyxjQUFRLENBQUNrRixjQUFULENBQXdCLFdBQXhCLEVBQXFDbkMsS0FBckMsR0FBNkMsRUFBN0M7QUFDQS9DLGNBQVEsQ0FBQ2tGLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNuQyxLQUF6QyxHQUFpRCxFQUFqRDtBQUNBL0MsY0FBUSxDQUFDa0YsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkNuQyxLQUEzQyxHQUFtRCxFQUFuRDtBQUNBL0MsY0FBUSxDQUFDa0YsY0FBVCxDQUF3QixXQUF4QixFQUFxQ25DLEtBQXJDLEdBQTZDLEVBQTdDO0FBQ0EvQyxjQUFRLENBQUNrRixjQUFULENBQXdCLGVBQXhCLEVBQXlDbkMsS0FBekMsR0FBaUQsRUFBakQ7QUFHQXRDLE9BQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDMEUsVUFBbEMsQ0FBNkMsVUFBN0M7QUFDQTFFLE9BQUMsQ0FBQywwQkFBRCxDQUFELENBQThCbUUsSUFBOUIsQ0FBbUMsVUFBbkMsRUFBOEMsVUFBOUM7QUFFQW5FLE9BQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDMEUsVUFBakMsQ0FBNEMsVUFBNUM7QUFDQTFFLE9BQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCbUUsSUFBN0IsQ0FBa0MsVUFBbEMsRUFBNkMsVUFBN0M7QUFFQW5FLE9BQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DMEUsVUFBcEMsQ0FBK0MsVUFBL0M7QUFDQTFFLE9BQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDbUUsSUFBaEMsQ0FBcUMsVUFBckMsRUFBZ0QsVUFBaEQ7QUFFQW5FLE9BQUMsQ0FBQywwQkFBRCxDQUFELENBQThCMEUsVUFBOUIsQ0FBeUMsVUFBekM7QUFDQTFFLE9BQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCbUUsSUFBMUIsQ0FBK0IsVUFBL0IsRUFBMEMsVUFBMUM7QUFFQW5FLE9BQUMsQ0FBQywwQkFBRCxDQUFELENBQThCMEUsVUFBOUIsQ0FBeUMsVUFBekM7QUFDQTFFLE9BQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCbUUsSUFBMUIsQ0FBK0IsVUFBL0IsRUFBMEMsVUFBMUM7QUFFQW5FLE9BQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCMEUsVUFBNUIsQ0FBdUMsVUFBdkM7QUFDQTFFLE9BQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCbUUsSUFBeEIsQ0FBNkIsVUFBN0IsRUFBd0MsVUFBeEM7QUFFQW5FLE9BQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCMEUsVUFBNUIsQ0FBdUMsVUFBdkM7QUFDQTFFLE9BQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCbUUsSUFBeEIsQ0FBNkIsVUFBN0IsRUFBd0MsVUFBeEM7QUFHSCxLQXhYa0I7O0FBRWYsVUFBS1EsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQix5R0FBcEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQXBCLENBSGUsQ0FJZjs7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBS1osYUFBTCxHQUFxQjtBQUNqQnBELGdCQUFVLEVBQUcsRUFESTtBQUVqQkMsWUFBTSxFQUFHLEVBRlE7QUFHakJDLGFBQU8sRUFBRSxFQUhRO0FBSWpCQyxzQkFBZ0IsRUFBQyxFQUpBO0FBS2pCQyxXQUFLLEVBQUMsRUFMVztBQU1qQkMsaUJBQVcsRUFBQyxFQU5LO0FBT2pCQyxZQUFNLEVBQUMsRUFQVTtBQVFqQkMsWUFBTSxFQUFDLEVBUlU7QUFTakJDLGVBQVMsRUFBQyxFQVRPO0FBVWpCQyxtQkFBYSxFQUFDLEVBVkc7QUFXakJ3RCxlQUFTLEVBQUVuRixLQUFLLENBQUNvRixRQUFOLElBQWtCLEVBWFo7QUFZakJuRCxVQUFJLEVBQUdqQyxLQUFLLENBQUNpQyxJQUFOLElBQWMsRUFaSjtBQWFqQm9ELFdBQUssRUFBRXJGLEtBQUssQ0FBQ3NGLElBQU4sSUFBYztBQWJKLEtBQXJCO0FBZUEsVUFBSzFELEtBQUwsR0FBYSxNQUFLMEMsYUFBbEI7QUFyQmU7QUFzQmxCOzs7O3dDQUVvQjtBQUNqQixXQUFLaUIsbUJBQUw7QUFDSDs7OzBDQUNxQjtBQUNsQixXQUFLTCxVQUFMLEdBQWtCaEYsQ0FBQyxDQUFDLEtBQUs2RSxZQUFMLENBQWtCUyxPQUFuQixDQUFELENBQTZCQyxTQUE3QixDQUF1QztBQUNyREMsYUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksTUFBSixDQUFEO0FBRDhDLE9BQXZDLENBQWxCO0FBR0g7OzttQ0FDYztBQUNYLFdBQUtSLFVBQUwsQ0FBZ0JTLEtBQWhCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLElBQWI7QUFDQXJHLGtCQUFZLENBQ1BzRyxlQURMLEdBRUsvRSxJQUZMLENBRVUsVUFBQ2dGLFFBQUQsRUFBYztBQUNwQkYsWUFBSSxDQUFDeEYsUUFBTCxDQUFjO0FBQ1YrRSxtQkFBUyxFQUFHVyxRQUFRLENBQUNWO0FBRFgsU0FBZCxFQURvQixDQUlwQjtBQUNILE9BUEQsRUFRQ04sSUFSRCxDQVFNLElBUk47QUFTSDs7OzJDQUNzQjtBQUNuQixVQUFNYyxJQUFJLEdBQUcsSUFBYjtBQUNBckcsa0JBQVksQ0FDUHNHLGVBREwsR0FFSy9FLElBRkwsQ0FFVSxVQUFDZ0YsUUFBRCxFQUFjO0FBQ3BCRixZQUFJLENBQUN4RixRQUFMLENBQWM7QUFDVjZCLGNBQUksRUFBRTZELFFBQVEsQ0FBQzdELElBREw7QUFFVmtELG1CQUFTLEVBQUdXLFFBQVEsQ0FBQ1Y7QUFGWCxTQUFkLEVBRG9CLENBS3BCO0FBQ0gsT0FSRDtBQVNIOzs7NkJBa1VNO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ1A7QUFDQSxVQUFNckIsTUFBTSxHQUFHLEtBQUtuQyxLQUFMLENBQVdtQyxNQUExQjtBQUNBLFVBQU1ELFFBQVEsR0FBRyxLQUFLbEMsS0FBTCxDQUFXUSxHQUE1QjtBQUNBLGFBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQU0saUJBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1E7QUFBSyxpQkFBUyxFQUFDLG9EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUE0QixZQUFJLEVBQUMsV0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJO0FBQVEsaUJBQVMsRUFBQyx3Q0FBbEI7QUFBMkQsVUFBRSxFQUFDLGVBQTlEO0FBQThFLFlBQUksRUFBQyxHQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVGO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBdkYsQ0FGSixFQUlJO0FBQU0saUJBQVMsRUFBQyx3RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFJLGlCQUFTLEVBQUMsNEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksaUJBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLDBCQUFiO0FBQXdDLFVBQUUsRUFBQyxjQUEzQztBQUEwRCxZQUFJLEVBQUMsR0FBL0Q7QUFBbUUsWUFBSSxFQUFDLFFBQXhFO0FBQWlGLHVCQUFZLFVBQTdGO0FBQXdHLHlCQUFjLE1BQXRIO0FBQTZILHlCQUFjLE9BQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbUo7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBbkosQ0FESixFQUVJO0FBQUssaUJBQVMsRUFBQyxtQ0FBZjtBQUFtRCwyQkFBZ0IsY0FBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQTZCLFlBQUksRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBRUk7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBNkIsWUFBSSxFQUFDLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosRUFHSTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhKLEVBSUk7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBNkIsWUFBSSxFQUFDLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosQ0FGSixDQURKLENBREosQ0FESixDQUpKLENBRFIsRUF1QlE7QUFBSyxVQUFFLEVBQUMsZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxVQUFFLEVBQUMsbUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxzQ0FBZjtBQUFzRCxVQUFFLEVBQUMsa0JBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQXdCLFlBQUksRUFBQyxXQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0M7QUFBRyxpQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBbEMsQ0FESixjQUZKLEVBT0k7QUFBRyxpQkFBUyxFQUFDLG9CQUFiO0FBQWtDLFlBQUksRUFBQyxHQUF2QztBQUEyQyx1QkFBWSxVQUF2RDtBQUFrRSx1QkFBWSxnQkFBOUU7QUFBK0YseUJBQWMsT0FBN0c7QUFBcUgseUJBQWMsZUFBbkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWtDO0FBQUcsaUJBQVMsRUFBQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQWxDLENBREosV0FHSTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEyQztBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUEzQyxDQUhKLENBUEosRUFZSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUEwQixVQUFFLEVBQUMsZUFBN0I7QUFBNkMsMkJBQWdCLFlBQTdEO0FBQTBFLHVCQUFZLG1CQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLHNDQUFmO0FBQXNELFVBQUUsRUFBQyx1QkFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxvQkFBYjtBQUFrQyxZQUFJLEVBQUMsR0FBdkM7QUFBMkMsdUJBQVksVUFBdkQ7QUFBa0UsdUJBQVksb0JBQTlFO0FBQW1HLHlCQUFjLE9BQWpIO0FBQXlILHlCQUFjLG1CQUF2STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUVJO0FBQUssaUJBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTJDO0FBQUcsaUJBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTNDLENBRkosQ0FESixFQUtJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQTBCLFVBQUUsRUFBQyxtQkFBN0I7QUFBaUQsMkJBQWdCLFlBQWpFO0FBQThFLHVCQUFZLHdCQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsVUFBYjtBQUF3QixZQUFJLEVBQUMsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQXdCLFlBQUksRUFBQyxVQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLEVBR0k7QUFBRyxpQkFBUyxFQUFDLFVBQWI7QUFBd0IsWUFBSSxFQUFDLFVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEosQ0FESixDQUxKLENBREosQ0FaSixDQURKLENBREosQ0FESixDQURKLEVBcUNJO0FBQUssVUFBRSxFQUFDLHVCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1E7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDLCtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsaUNBQWI7QUFBK0MsWUFBSSxFQUFDLFdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFFSTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFrQztBQUFHLGlCQUFTLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFsQyxDQUZKLENBRkosQ0FEUixDQURBLEVBWUk7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosRUFFSTtBQUFLLGlCQUFTLEVBQUMsK0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxpQ0FBYjtBQUErQyxZQUFJLEVBQUMsbUJBQXBEO0FBQXdFLHVCQUFZLE9BQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFFSTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFrQztBQUFHLGlCQUFTLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFsQyxDQUZKLENBRkosQ0FESixDQVpKLENBRkosRUEyQkk7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUssaUJBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ2hCO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFUTtBQUFPLFdBQUcsRUFBRSxLQUFLMkMsWUFBakI7QUFBK0IsaUJBQVMsRUFBQyw4QkFBekM7QUFBd0UsYUFBSyxFQUFFO0FBQUNnQixlQUFLLEVBQUMsTUFBSTtBQUFYLFNBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGlCQUFTLEVBQUMsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGLENBREosQ0FESixFQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxLQUFLbkUsS0FBTCxDQUFXdUQsU0FBWCxDQUFxQmhELEdBQXJCLENBQXlCLFVBQUM2RCxRQUFEO0FBQUEsZUFDdEI7QUFBSSxhQUFHLEVBQUVBLFFBQVEsQ0FBQy9GLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUsrRixRQUFRLENBQUM3RSxNQUFkLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUs2RSxRQUFRLENBQUN6RSxXQUFkLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUt5RSxRQUFRLENBQUMxRSxLQUFkLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUssTUFBSSxDQUFDMkUsV0FBTCxDQUFpQkQsUUFBUSxDQUFDL0YsRUFBMUIsQ0FBTCxDQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLK0YsUUFBUSxDQUFDdEUsU0FBZCxDQUxKLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUcsaUJBQU8sRUFBRTtBQUFBLG1CQUFJLE1BQUksQ0FBQ3dFLFNBQUwsQ0FBZUYsUUFBUSxDQUFDL0YsRUFBeEIsQ0FBSjtBQUFBLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBOEM7QUFBUSxtQkFBUyxFQUFDLHNCQUFsQjtBQUF5QyxlQUFLLEVBQUMsS0FBL0M7QUFBcUQsZUFBSyxFQUFFO0FBQUNrRyxrQkFBTSxFQUFDLFNBQVI7QUFBbUJDLGtCQUFNLEVBQUM7QUFBMUIsV0FBNUQ7QUFBK0YsMEJBQWEsT0FBNUc7QUFBb0gseUJBQVksU0FBaEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEwSTtBQUFHLG1CQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUExSSxVQUE5QyxDQURKLFlBQzJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEM1AsQ0FQSixFQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUc7QUFBRyxpQkFBTyxFQUFFO0FBQUEsbUJBQUksTUFBSSxDQUFDQyxVQUFMLENBQWdCTCxRQUFRLENBQUMvRixFQUF6QixDQUFKO0FBQUEsV0FBWjtBQUE4QyxtQkFBUyxFQUFDLGtDQUF4RDtBQUEyRixlQUFLLEVBQUMsTUFBakc7QUFBd0csZUFBSyxFQUFFO0FBQUNxRyxpQkFBSyxFQUFFLFFBQVI7QUFBa0JILGtCQUFNLEVBQUM7QUFBekIsV0FBL0c7QUFBb0osMEJBQWEsT0FBaks7QUFBeUsseUJBQVksU0FBckw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBSCxDQURBLFdBRXBCO0FBQUcsaUJBQU8sRUFBRTtBQUFBLG1CQUFJLE1BQUksQ0FBQ0ksWUFBTCxDQUFrQlAsUUFBUSxDQUFDL0YsRUFBM0IsQ0FBSjtBQUFBLFdBQVo7QUFBZ0QsbUJBQVMsRUFBQyxvQ0FBMUQ7QUFBK0YsZUFBSyxFQUFDLFFBQXJHO0FBQStHLGVBQUssRUFBRTtBQUFDcUcsaUJBQUssRUFBRSxLQUFSO0FBQWVILGtCQUFNLEVBQUM7QUFBdEIsV0FBdEg7QUFBd0osMEJBQWEsT0FBcks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGb0IsVUFWSixDQURzQjtBQUFBLE9BQXpCLENBREQsQ0FaSixDQUZSLENBRGdCLENBREEsRUF3Q3ZCO0FBQUssVUFBRSxFQUFDLG1CQUFSO0FBQTRCLGlCQUFTLEVBQUMsWUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBRyxpQkFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSixrQ0FEZixFQUVDO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQyxPQUFoQztBQUF3Qyx3QkFBYSxPQUFyRDtBQUE2RCx1QkFBWSxNQUF6RTtBQUFnRixlQUFPLEVBQUUsS0FBS0ssVUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRCxDQURGLEVBS0U7QUFBTSxjQUFNLEVBQUMsR0FBYjtBQUFpQixjQUFNLEVBQUMsTUFBeEI7QUFBK0IsYUFBSyxFQUFFO0FBQUNULGVBQUssRUFBRSxNQUFJLEdBQVo7QUFBaUJLLGdCQUFNLEVBQUUsTUFBekI7QUFBaUNLLG1CQUFTLEVBQUU7QUFBNUMsU0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNlO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFd0I7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVRO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQUksUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLEVBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFFLEVBQUMsUUFBdEI7QUFBK0IsaUJBQVMsRUFBQyxjQUF6QztBQUF3RCxZQUFJLEVBQUMsUUFBN0Q7QUFBc0UsbUJBQVcsRUFBQyx5QkFBbEY7QUFBNEcsZ0JBQVEsRUFBRSxLQUFLNUIsWUFBM0g7QUFBeUksYUFBSyxFQUFFLEtBQUtqRCxLQUFMLENBQVdULE1BQTNKO0FBQW1LLGdCQUFRLE1BQTNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQUZSLEVBT1E7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosRUFFSTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLFVBQUUsRUFBQyxTQUF4QjtBQUFrQyxpQkFBUyxFQUFDLGNBQTVDO0FBQTJELFlBQUksRUFBQyxTQUFoRTtBQUEwRSxtQkFBVyxFQUFDLEVBQXRGO0FBQTBGLGdCQUFRLEVBQUUsS0FBSzBELFlBQXpHO0FBQXVILGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXUixPQUF6STtBQUFrSixnQkFBUSxNQUExSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FQUixFQVdRO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQUksa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQU0sY0FBekI7QUFBd0MsVUFBRSxFQUFDLGtCQUEzQztBQUE4RCxhQUFLLEVBQUMsTUFBcEU7QUFBMkUsWUFBSSxFQUFDLGtCQUFoRjtBQUFtRyxnQkFBUSxFQUFFLEtBQUt5RDtBQUFsSCxrSEFBdUksS0FBS2pELEtBQUwsQ0FBV1AsZ0JBQWxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosQ0FYUixFQWdCUTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBRSxFQUFDLE9BQXRCO0FBQThCLGlCQUFTLEVBQUMsY0FBeEM7QUFBdUQsWUFBSSxFQUFDLE9BQTVEO0FBQW9FLG1CQUFXLEVBQUMsRUFBaEY7QUFBb0YsZ0JBQVEsRUFBRSxLQUFLd0QsWUFBbkc7QUFBaUgsYUFBSyxFQUFFLEtBQUtqRCxLQUFMLENBQVdOLEtBQW5JO0FBQTBJLGdCQUFRLE1BQWxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQWhCUixFQW9CUTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBRSxFQUFDLGFBQXRCO0FBQW9DLGlCQUFTLEVBQUMsY0FBOUM7QUFBNkQsWUFBSSxFQUFDLGFBQWxFO0FBQWdGLG1CQUFXLEVBQUMsZUFBNUY7QUFBNEcsZ0JBQVEsRUFBRSxLQUFLdUQsWUFBM0g7QUFBeUksYUFBSyxFQUFFLEtBQUtqRCxLQUFMLENBQVdMLFdBQTNKO0FBQXdLLGdCQUFRLE1BQWhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQXBCUixFQTRCUTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNRO0FBQU8sZUFBSSxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFIsRUFFUTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLFVBQUUsRUFBQyxNQUF6QjtBQUFnQyxpQkFBUyxFQUFDLGNBQTFDO0FBQXlELGVBQU8sRUFBRSxLQUFLbUYsT0FBdkU7QUFBZ0YsZ0JBQVEsRUFBRSxLQUFLN0IsWUFBL0Y7QUFBNkcsZ0JBQVEsTUFBckg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNSO0FBQVEsZ0JBQVEsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FEUSxFQUVQLEtBQUtqRCxLQUFMLENBQVd5RCxLQUFYLENBQWlCbEQsR0FBakIsQ0FBcUIsVUFBQXdFLElBQUk7QUFBQSxlQUFLLE1BQUksQ0FBQy9FLEtBQUwsQ0FBVzRCLE1BQVgsSUFBcUJtRCxJQUFJLENBQUMxRyxFQUExQixHQUMzQjtBQUFRLGVBQUssRUFBRTBHLElBQUksQ0FBQzFHLEVBQXBCO0FBQXdCLGtCQUFRLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBa0MwRyxJQUFJLENBQUNDLFFBQXZDLENBRDJCLEdBRTNCO0FBQVEsZUFBSyxFQUFFRCxJQUFJLENBQUMxRyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXlCMEcsSUFBSSxDQUFDQyxRQUE5QixDQUZzQjtBQUFBLE9BQXpCLENBRk8sQ0FGUixDQTVCUixFQXNDWTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFFSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLFVBQUUsRUFBQyxNQUF6QjtBQUFnQyxpQkFBUyxFQUFDLGNBQTFDO0FBQXlELGVBQU8sRUFBRSxLQUFLRixPQUF2RTtBQUFnRixnQkFBUSxFQUFFLEtBQUs3QixZQUEvRjtBQUE2RyxnQkFBUSxNQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1I7QUFBUSxnQkFBUSxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURRLEVBRVBkLE1BQU0sSUFBS0EsTUFBTSxDQUFDNUIsR0FBUCxDQUFXLFVBQUEwRSxJQUFJO0FBQUEsZUFBSyxNQUFJLENBQUNqRixLQUFMLENBQVc2QixNQUFYLElBQXFCb0QsSUFBSSxDQUFDNUcsRUFBMUIsR0FDNUI7QUFBUSxlQUFLLEVBQUU0RyxJQUFJLENBQUM1RyxFQUFwQjtBQUF3QixrQkFBUSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWtDNEcsSUFBSSxDQUFDQyxRQUF2QyxDQUQ0QixHQUU1QjtBQUFRLGVBQUssRUFBRUQsSUFBSSxDQUFDNUcsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF5QjRHLElBQUksQ0FBQ0MsUUFBOUIsQ0FGdUI7QUFBQSxPQUFmLENBRkosQ0FGSixDQXRDWixFQWdEUTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUVJO0FBQVUsaUJBQVMsRUFBQyxjQUFwQjtBQUFtQyxVQUFFLEVBQUMsV0FBdEM7QUFBaUQsWUFBSSxFQUFDLFdBQXREO0FBQWtFLGdCQUFRLEVBQUUsS0FBS2pDLFlBQWpGO0FBQStGLGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXRixTQUFqSDtBQUE0SCxnQkFBUSxNQUFwSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FoRFIsRUFzRFE7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREosRUFFSTtBQUFVLGlCQUFTLEVBQUMsY0FBcEI7QUFBbUMsVUFBRSxFQUFDLGVBQXRDO0FBQXNELFlBQUksRUFBQyxlQUEzRDtBQUE0RSxnQkFBUSxFQUFFLEtBQUttRCxZQUEzRjtBQUF5RyxhQUFLLEVBQUUsS0FBS2pELEtBQUwsQ0FBV0QsYUFBM0g7QUFBMEksZ0JBQVEsTUFBbEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBdERSLENBRnhCLENBRGYsRUFvRW1CO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGVBQU8sRUFBRSxLQUFLb0YsY0FBbkM7QUFBbUQsYUFBSyxFQUFDLFFBQXpEO0FBQWtFLGlCQUFTLEVBQUMsdUNBQTVFO0FBQW9ILGFBQUssRUFBRTtBQUFDQyxxQkFBVyxFQUFDO0FBQWIsU0FBM0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUk7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLG1CQUEvQjtBQUFtRCx3QkFBYSxPQUFoRTtBQUF3RSxlQUFPLEVBQUUsS0FBS1IsVUFBdEY7QUFBa0csYUFBSyxFQUFDLFFBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQXBFbkIsQ0FMRixDQURELENBREQsQ0F4Q3VCLEVBNEhwQjtBQUFLLFVBQUUsRUFBQyxrQkFBUjtBQUEyQixpQkFBUyxFQUFDLFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRjtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDUztBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJO0FBQUcsaUJBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUosc0JBRFIsRUFFTjtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUMsT0FBaEM7QUFBd0Msd0JBQWEsT0FBckQ7QUFBNkQsdUJBQVksTUFBekU7QUFBZ0YsZUFBTyxFQUFFLEtBQUtBLFVBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRk0sQ0FEVCxFQUtFO0FBQU0sY0FBTSxFQUFDLEdBQWI7QUFBaUIsY0FBTSxFQUFDLE1BQXhCO0FBQStCLGFBQUssRUFBRTtBQUFDVCxlQUFLLEVBQUUsTUFBSSxHQUFaO0FBQWlCSyxnQkFBTSxFQUFFLE1BQXpCO0FBQWlDSyxtQkFBUyxFQUFFO0FBQTVDLFNBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDZTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSWdDO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQUksUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLEVBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFFLEVBQUMsUUFBdEI7QUFBK0IsaUJBQVMsRUFBQyxjQUF6QztBQUF3RCxZQUFJLEVBQUMsUUFBN0Q7QUFBc0UsbUJBQVcsRUFBQyx5QkFBbEY7QUFBNEcsZ0JBQVEsRUFBRSxLQUFLNUIsWUFBM0g7QUFBeUksYUFBSyxFQUFFLEtBQUtqRCxLQUFMLENBQVdULE1BQTNKO0FBQW1LLGdCQUFRLE1BQTNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQUpoQyxFQVNnQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUVJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsVUFBRSxFQUFDLFNBQXhCO0FBQWtDLGlCQUFTLEVBQUMsY0FBNUM7QUFBMkQsWUFBSSxFQUFDLFNBQWhFO0FBQTBFLG1CQUFXLEVBQUMsRUFBdEY7QUFBMEYsZ0JBQVEsRUFBRSxLQUFLMEQsWUFBekc7QUFBdUgsYUFBSyxFQUFFLEtBQUtqRCxLQUFMLENBQVdSLE9BQXpJO0FBQWtKLGdCQUFRLE1BQTFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQVRoQyxFQWFnQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLGtCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosRUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFNLGNBQXpCO0FBQXdDLFVBQUUsRUFBQyxrQkFBM0M7QUFBOEQsYUFBSyxFQUFDLE1BQXBFO0FBQTJFLFlBQUksRUFBQyxrQkFBaEY7QUFBbUcsZ0JBQVEsRUFBRSxLQUFLeUQ7QUFBbEgsbUhBQXVJLEtBQUtqRCxLQUFMLENBQVdQLGdCQUFsSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLENBYmhDLEVBa0JnQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBRSxFQUFDLE9BQXRCO0FBQThCLGlCQUFTLEVBQUMsY0FBeEM7QUFBdUQsWUFBSSxFQUFDLE9BQTVEO0FBQW9FLG1CQUFXLEVBQUMsRUFBaEY7QUFBb0YsZ0JBQVEsRUFBRSxLQUFLd0QsWUFBbkc7QUFBaUgsYUFBSyxFQUFFLEtBQUtqRCxLQUFMLENBQVdOLEtBQW5JO0FBQTBJLGdCQUFRLE1BQWxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQWxCaEMsRUFzQmdDO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQUksY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFFLEVBQUMsYUFBdEI7QUFBb0MsaUJBQVMsRUFBQyxjQUE5QztBQUE2RCxZQUFJLEVBQUMsYUFBbEU7QUFBZ0YsbUJBQVcsRUFBQyxlQUE1RjtBQUE0RyxnQkFBUSxFQUFFLEtBQUt1RCxZQUEzSDtBQUF5SSxhQUFLLEVBQUUsS0FBS2pELEtBQUwsQ0FBV0wsV0FBM0o7QUFBd0ssZ0JBQVEsTUFBaEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBdEJoQyxFQTZCZ0M7QUFBSyxpQkFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQUksUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLEVBRU07QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixVQUFFLEVBQUMsTUFBekI7QUFBZ0MsaUJBQVMsRUFBQyxjQUExQztBQUF5RCxlQUFPLEVBQUUsS0FBSzBGLGFBQXZFO0FBQXNGLGdCQUFRLEVBQUUsS0FBS3BDLFlBQXJHO0FBQW1ILGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXc0YsYUFBckk7QUFBb0osZ0JBQVEsTUFBNUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVEsZ0JBQVEsTUFBaEI7QUFBaUIsZ0JBQVEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVHLEtBQUt0RixLQUFMLENBQVd5RCxLQUFYLENBQWlCbEQsR0FBakIsQ0FBcUIsVUFBQWdGLE9BQU87QUFBQSxlQUN6QjtBQUFRLGVBQUssRUFBRUEsT0FBTyxDQUFDbEgsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE0QmtILE9BQU8sQ0FBQ1AsUUFBcEMsQ0FEeUI7QUFBQSxPQUE1QixDQUZILENBRk4sQ0E3QmhDLEVBc0NnQztBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFFSyxLQUFLaEYsS0FBTCxDQUFXYyxVQUFYLElBQ0Q7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixVQUFFLEVBQUMsTUFBekI7QUFBZ0MsaUJBQVMsRUFBQyxjQUExQztBQUF5RCxlQUFPLEVBQUUsS0FBS3VFLGFBQXZFO0FBQXNGLGdCQUFRLEVBQUUsS0FBS3BDLFlBQXJHO0FBQW1ILGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXc0YsYUFBckk7QUFBb0osZ0JBQVEsTUFBNUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQVEsZ0JBQVEsTUFBaEI7QUFBaUIsZ0JBQVEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUVLbkQsTUFBTSxJQUFLQSxNQUFNLENBQUM1QixHQUFQLENBQVcsVUFBQWlGLElBQUk7QUFBQSxlQUN2QjtBQUFRLGVBQUssRUFBRUEsSUFBSSxDQUFDbkgsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF5Qm1ILElBQUksQ0FBQ04sUUFBOUIsQ0FEdUI7QUFBQSxPQUFmLENBRmhCLENBSEosQ0F0Q2hDLEVBbURnQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUVJO0FBQVUsaUJBQVMsRUFBQyxjQUFwQjtBQUFtQyxVQUFFLEVBQUMsV0FBdEM7QUFBaUQsWUFBSSxFQUFDLFdBQXREO0FBQWtFLGdCQUFRLEVBQUUsS0FBS2pDLFlBQWpGO0FBQStGLGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXRixTQUFqSDtBQUE0SCxnQkFBUSxNQUFwSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FuRGhDLEVBeURnQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixFQUVJO0FBQVUsaUJBQVMsRUFBQyxjQUFwQjtBQUFtQyxVQUFFLEVBQUMsZUFBdEM7QUFBc0QsWUFBSSxFQUFDLGVBQTNEO0FBQTRFLGdCQUFRLEVBQUUsS0FBS21ELFlBQTNGO0FBQXlHLGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXRCxhQUEzSDtBQUEwSSxnQkFBUSxNQUFsSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0F6RGhDLENBRGYsRUE4RW1CO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQU8sRUFBRSxLQUFLMEYsV0FBckI7QUFBa0MsYUFBSyxFQUFDLGNBQXhDO0FBQXVELHdCQUFhLE9BQXBFO0FBQTRFLGlCQUFTLEVBQUMsdUNBQXRGO0FBQThILGFBQUssRUFBRTtBQUFDTCxxQkFBVyxFQUFDO0FBQWIsU0FBckk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUk7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFDLG1CQUEvQjtBQUFtRCx3QkFBYSxPQUFoRTtBQUF3RSxlQUFPLEVBQUUsS0FBS1IsVUFBdEY7QUFBa0csYUFBSyxFQUFDLFFBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQTlFbkIsQ0FMRixDQURELENBREUsQ0E1SG9CLEVBME5wQjtBQUFLLFVBQUUsRUFBQyxhQUFSO0FBQXNCLGlCQUFTLEVBQUMsWUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNGO0FBQUssaUJBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNTO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBRyxpQkFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSixpQkFEUixFQUVOO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQyxPQUFoQztBQUF3Qyx3QkFBYSxPQUFyRDtBQUE2RCx1QkFBWSxNQUF6RTtBQUFnRixlQUFPLEVBQUUsS0FBS0EsVUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGTSxDQURULEVBS0U7QUFBTSxjQUFNLEVBQUMsR0FBYjtBQUFpQixjQUFNLEVBQUMsTUFBeEI7QUFBK0IsYUFBSyxFQUFFO0FBQUNULGVBQUssRUFBRSxNQUFJO0FBQVosU0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNtQjtBQUFNLFlBQUksRUFBQyxNQUFYO0FBQWtCLGNBQU0sRUFBQyxNQUF6QjtBQUFnQyxjQUFNLEVBQUMsRUFBdkM7QUFBMEMsMEJBQWUsT0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQU0sV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBTSxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFNLDBCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHUTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVRO0FBQUssaUJBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBRSxFQUFDLE9BQXRCO0FBQThCLGlCQUFNLGNBQXBDO0FBQW1ELFlBQUksRUFBQyxPQUF4RDtBQUFnRSxtQkFBVyxFQUFDLHFCQUE1RTtBQUFrRyxnQkFBUSxFQUFFLEtBQUtsQixZQUFqSDtBQUErSCxhQUFLLEVBQUUsS0FBS2pELEtBQUwsQ0FBV2tCLEtBQWpKO0FBQXdKLGdCQUFRLE1BQWhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQUZSLEVBT1E7QUFBSyxpQkFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQUksWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLEVBRUk7QUFBUSxVQUFFLEVBQUMsWUFBWDtBQUF3QixpQkFBTSxjQUE5QjtBQUE2QyxZQUFJLEVBQUMsWUFBbEQ7QUFBZ0UsZ0JBQVEsRUFBRSxLQUFLK0IsWUFBL0U7QUFBNkYsYUFBSyxFQUFFLEtBQUtqRCxLQUFMLENBQVdzRixhQUEvRztBQUE4SCxnQkFBUSxNQUF0STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBUSxnQkFBUSxNQUFoQjtBQUFpQixnQkFBUSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURBLEVBRUk7QUFBUSxhQUFLLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLEVBR0k7QUFBUSxhQUFLLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLENBRkosQ0FQUixFQWdCUTtBQUFPLGVBQUksUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWhCUixFQWlCUTtBQUFLLGlCQUFNLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNEO0FBQUssaUJBQU0sb0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0c7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFFLEVBQUMsWUFBdEI7QUFBbUMsaUJBQU0sY0FBekM7QUFBd0QsWUFBSSxFQUFDLGNBQTdEO0FBQTRFLG1CQUFXLEVBQUMsc0JBQXhGO0FBQStHLGdCQUFRLEVBQUUsS0FBS3JDLFlBQTlIO0FBQTRJLGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXb0IsWUFBOUo7QUFBNEssZ0JBQVEsTUFBcEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURILENBREQsQ0FEQyxFQU9EO0FBQUssaUJBQU0sb0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFFLEVBQUMsWUFBdEI7QUFBbUMsaUJBQU0sY0FBekM7QUFBd0QsWUFBSSxFQUFDLGNBQTdEO0FBQTRFLG1CQUFXLEVBQUMsc0JBQXhGO0FBQWdILGdCQUFRLEVBQUUsS0FBSzZCLFlBQS9IO0FBQTZJLGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXcUIsWUFBL0o7QUFBNkssZ0JBQVEsTUFBckw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREQsQ0FQQyxDQWpCUixFQTZCUTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosRUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUUsRUFBQyxTQUF0QjtBQUFnQyxpQkFBTSxjQUF0QztBQUFxRCxZQUFJLEVBQUMsU0FBMUQ7QUFBb0UsbUJBQVcsRUFBQyxxQkFBaEY7QUFBc0csZ0JBQVEsRUFBRSxLQUFLNEIsWUFBckg7QUFBbUksYUFBSyxFQUFFLEtBQUtqRCxLQUFMLENBQVdzQixPQUFySjtBQUE4SixnQkFBUSxNQUF0SztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0E3QlIsRUFpQ1E7QUFBSyxpQkFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQUksZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLEVBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFFLEVBQUMsZUFBdEI7QUFBc0MsaUJBQU0sY0FBNUM7QUFBMkQsWUFBSSxFQUFDLGVBQWhFO0FBQWdGLG1CQUFXLEVBQUMsb0JBQTVGO0FBQWlILGdCQUFRLEVBQUUsS0FBSzJCLFlBQWhJO0FBQThJLGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXdUIsYUFBaEs7QUFBK0ssZ0JBQVEsTUFBdkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBakNSLEVBcUNRO0FBQUssaUJBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsVUFBRSxFQUFDLFdBQXhCO0FBQW9DLGlCQUFNLGNBQTFDO0FBQXlELFlBQUksRUFBQyxXQUE5RDtBQUEwRSxtQkFBVyxFQUFDLGlCQUF0RjtBQUF3RyxnQkFBUSxFQUFFLEtBQUswQixZQUF2SDtBQUFxSSxhQUFLLEVBQUUsS0FBS2pELEtBQUwsQ0FBVzBGLFNBQXZKO0FBQWtLLGdCQUFRLE1BQTFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQXJDUixFQXlDUTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREosRUFFSTtBQUFRLFVBQUUsRUFBQyxXQUFYO0FBQXVCLGlCQUFNLGNBQTdCO0FBQTRDLFlBQUksRUFBQyxXQUFqRDtBQUE4RCxnQkFBUSxFQUFFLEtBQUt6QyxZQUE3RTtBQUEyRixhQUFLLEVBQUUsS0FBS2pELEtBQUwsQ0FBV3NGLGFBQTdHO0FBQTRILGdCQUFRLE1BQXBJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFRLGdCQUFRLE1BQWhCO0FBQWlCLGdCQUFRLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREEsRUFFSTtBQUFRLGFBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQUdJO0FBQVEsYUFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLEVBSUk7QUFBUSxhQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosQ0FGSixDQXpDUixFQW1EUTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUUsRUFBQyxPQUF0QjtBQUE4QixpQkFBTSxjQUFwQztBQUFtRCxZQUFJLEVBQUMsT0FBeEQ7QUFBZ0UsbUJBQVcsRUFBQyxjQUE1RTtBQUEyRixnQkFBUSxFQUFFLEtBQUtyQyxZQUExRztBQUF3SCxhQUFLLEVBQUUsS0FBS2pELEtBQUwsQ0FBV3lCLEtBQTFJO0FBQWlKLGdCQUFRLE1BQXpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQW5EUixDQUhSLENBREosRUFpRUc7QUFBSyxpQkFBTSwwQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ007QUFBSyxpQkFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUN1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUR2QixFQUV1QjtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFNLGNBQXpCO0FBQXdDLFVBQUUsRUFBQyxZQUEzQztBQUF3RCxhQUFLLEVBQUMsVUFBOUQ7QUFBeUUsWUFBSSxFQUFDLFlBQTlFO0FBQTJGLGdCQUFRLEVBQUUsS0FBS3dCO0FBQTFHLG1IQUErSCxLQUFLakQsS0FBTCxDQUFXMEIsVUFBMUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGdkIsQ0FEQSxFQUtJO0FBQUssaUJBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1c7QUFBTyxlQUFJLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEWCxFQUVXO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBRSxFQUFDLFNBQXRCO0FBQWdDLGlCQUFNLGNBQXRDO0FBQXFELFlBQUksRUFBQyxTQUExRDtBQUFvRSxtQkFBVyxFQUFDLGVBQWhGO0FBQWdHLGdCQUFRLEVBQUUsS0FBS3VCLFlBQS9HO0FBQTZILGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXMkIsT0FBL0k7QUFBd0osZ0JBQVEsTUFBaEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZYLENBTEosRUFTVztBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFFTTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLFVBQUUsRUFBQyxNQUF6QjtBQUFnQyxpQkFBUyxFQUFDLGNBQTFDO0FBQXlELGVBQU8sRUFBRSxLQUFLMEQsYUFBdkU7QUFBc0YsZ0JBQVEsRUFBRSxLQUFLcEMsWUFBckc7QUFBbUgsYUFBSyxFQUFFLEtBQUtqRCxLQUFMLENBQVdzRixhQUFySTtBQUFvSixnQkFBUSxNQUE1SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBUSxnQkFBUSxNQUFoQjtBQUFpQixnQkFBUSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUcsS0FBS3RGLEtBQUwsQ0FBV3lELEtBQVgsQ0FBaUJsRCxHQUFqQixDQUFxQixVQUFBZ0YsT0FBTztBQUFBLGVBQ3pCO0FBQVEsZUFBSyxFQUFFQSxPQUFPLENBQUNsSCxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRCa0gsT0FBTyxDQUFDUCxRQUFwQyxDQUR5QjtBQUFBLE9BQTVCLENBRkgsQ0FGTixDQVRYLEVBa0JXO0FBQUssaUJBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUVLLEtBQUtoRixLQUFMLENBQVdjLFVBQVgsSUFDRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLFVBQUUsRUFBQyxNQUF6QjtBQUFnQyxpQkFBUyxFQUFDLGNBQTFDO0FBQXlELGVBQU8sRUFBRSxLQUFLdUUsYUFBdkU7QUFBc0YsZ0JBQVEsRUFBRSxLQUFLcEMsWUFBckc7QUFBbUgsYUFBSyxFQUFFLEtBQUtqRCxLQUFMLENBQVdzRixhQUFySTtBQUFvSixnQkFBUSxNQUE1SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBUSxnQkFBUSxNQUFoQjtBQUFpQixnQkFBUSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLEVBRUtuRCxNQUFNLElBQUtBLE1BQU0sQ0FBQzVCLEdBQVAsQ0FBVyxVQUFBaUYsSUFBSTtBQUFBLGVBQ3ZCO0FBQVEsZUFBSyxFQUFFQSxJQUFJLENBQUNuSCxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXlCbUgsSUFBSSxDQUFDTixRQUE5QixDQUR1QjtBQUFBLE9BQWYsQ0FGaEIsQ0FISixDQWxCWCxFQWlDVztBQUFLLGlCQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sZUFBSSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosRUFFSTtBQUFVLGlCQUFNLGNBQWhCO0FBQWdDLFVBQUUsRUFBQyxXQUFuQztBQUErQyxZQUFJLEVBQUMsV0FBcEQ7QUFBZ0UsZ0JBQVEsRUFBRSxLQUFLakMsWUFBL0U7QUFBNkYsYUFBSyxFQUFFLEtBQUtqRCxLQUFMLENBQVc4QixTQUEvRztBQUEwSCxnQkFBUSxNQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FqQ1gsRUF1Q1c7QUFBSyxpQkFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLGVBQUksUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLEVBRUk7QUFBVSxpQkFBTSxjQUFoQjtBQUFnQyxVQUFFLEVBQUMsZUFBbkM7QUFBbUQsWUFBSSxFQUFDLGVBQXhEO0FBQXdFLGdCQUFRLEVBQUUsS0FBS21CLFlBQXZGO0FBQXFHLGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXK0IsYUFBdkg7QUFBc0ksZ0JBQVEsTUFBOUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBdkNYLEVBOENXO0FBQUssaUJBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxlQUFJLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixFQUVJO0FBQVUsaUJBQU0sY0FBaEI7QUFBK0IsVUFBRSxFQUFDLGlCQUFsQztBQUFvRCxZQUFJLEVBQUMsaUJBQXpEO0FBQTJFLGdCQUFRLEVBQUUsS0FBS2tCLFlBQTFGO0FBQXdHLGFBQUssRUFBRSxLQUFLakQsS0FBTCxDQUFXZ0MsZUFBMUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBOUNYLENBRE4sQ0FqRUgsQ0FESixDQURKLENBRG5CLENBTEYsRUF3SUU7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNtQjtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGVBQU8sRUFBRSxLQUFLMkQsTUFBbkM7QUFBMkMsYUFBSyxFQUFDLEtBQWpEO0FBQXVELGlCQUFTLEVBQUMsdUNBQWpFO0FBQXlHLHdCQUFhLE9BQXRIO0FBQThILGFBQUssRUFBRTtBQUFDUCxxQkFBVyxFQUFDO0FBQWIsU0FBckk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURuQixFQUVtQjtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUMsbUJBQS9CO0FBQW1ELHdCQUFhLE9BQWhFO0FBQXdFLGFBQUssRUFBQyxRQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRm5CLENBeElGLENBREQsQ0FERSxDQTFOb0IsRUE0V3ZCO0FBQUssVUFBRSxFQUFDLG9CQUFSO0FBQTZCLGlCQUFTLEVBQUMsWUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNTO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFBRyxpQkFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSix3QkFEUixFQUVOO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQyxPQUFoQztBQUF3Qyx3QkFBYSxPQUFyRDtBQUE2RCx1QkFBWSxNQUF6RTtBQUFnRixlQUFPLEVBQUUsS0FBS1IsVUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGTSxDQURULEVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQTRCLGFBQUssRUFBRTtBQUFDZ0Isb0JBQVUsRUFBRTtBQUFiLFNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQURELEVBRUM7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQUE1QixDQUZELENBREQsQ0FMRCxFQVdhO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDWDtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUMsbUJBQS9CO0FBQW1ELHdCQUFhLE9BQWhFO0FBQXdFLGFBQUssRUFBQyxRQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRFcsRUFFWDtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUMsZ0JBQS9CO0FBQWdELGFBQUssRUFBQyxRQUF0RDtBQUErRCx3QkFBYSxPQUE1RTtBQUFvRixlQUFPLEVBQUUsS0FBS0MsY0FBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZXLENBWGIsQ0FERCxDQURELENBNVd1QixDQTNCSixDQURKLENBREosQ0FyQ0osQ0F2QlIsQ0FGQSxDQURJO0FBc2VGOzs7Ozs7Ozs7Ozt1QkF4eUI2QmpILGdFQUFZLEU7OztBQUE3QkQsd0I7O3VCQUM4QkEsUUFBUSxDQUN2Q0csU0FEK0IsR0FFL0JDLFVBRitCLENBRXBCLFVBRm9CLEVBRy9CK0csS0FIK0IsQ0FHekIsRUFIeUIsRUFJL0I3RyxHQUorQixFOzs7QUFBOUI4RyxxQztBQUtBeEMseUIsR0FBWXdDLHFCQUFxQixDQUFDQyxJQUF0QixDQUEyQnpGLEdBQTNCLENBQStCLFVBQUN2QixHQUFEO0FBQUEseURBQzFDQSxHQUFHLENBQUNILElBQUosRUFEMEM7QUFFN0NSLHNCQUFFLEVBQUVXLEdBQUcsQ0FBQ1g7QUFGcUM7QUFBQSxpQkFBL0IsQzs7dUJBSWNNLFFBQVEsQ0FDbkNHLFNBRDJCLEdBRTNCQyxVQUYyQixDQUVoQixNQUZnQixFQUczQitHLEtBSDJCLENBR3JCLEVBSHFCLEVBSTNCN0csR0FKMkIsRTs7O0FBQTFCZ0gsaUM7QUFLQXhDLHFCLEdBQVF3QyxpQkFBaUIsQ0FBQ0QsSUFBbEIsQ0FBdUJ6RixHQUF2QixDQUEyQixVQUFDdkIsR0FBRDtBQUFBLHlEQUNsQ0EsR0FBRyxDQUFDSCxJQUFKLEVBRGtDO0FBRXJDUixzQkFBRSxFQUFFVyxHQUFHLENBQUNYO0FBRjZCO0FBQUEsaUJBQTNCLEM7O3VCQUtrQk0sUUFBUSxDQUN2Q0csU0FEK0IsR0FFL0JDLFVBRitCLENBRXBCLE1BRm9CLEVBRy9CRSxHQUgrQixFOzs7QUFBMUJpSCxpQztBQUlBL0Qsc0IsR0FBUytELGlCQUFpQixDQUFDRixJQUFsQixDQUF1QnpGLEdBQXZCLENBQTJCLFVBQUN2QixHQUFEO0FBQUEseURBQ25DQSxHQUFHLENBQUNILElBQUosRUFEbUM7QUFFdENSLHNCQUFFLEVBQUVXLEdBQUcsQ0FBQ1g7QUFGOEI7QUFBQSxpQkFBM0IsQzs7dUJBS2dCTSxRQUFRLENBQ3RDRyxTQUQ4QixHQUU5QkMsVUFGOEIsQ0FFbkIsS0FGbUIsRUFHOUJFLEdBSDhCLEU7OztBQUF6QmtILGdDO0FBSUE5RixvQixHQUFPOEYsZ0JBQWdCLENBQUNILElBQWpCLENBQXNCekYsR0FBdEIsQ0FBMEIsVUFBQ3ZCLEdBQUQ7QUFBQSx5QkFBVTtBQUM3Q0gsd0JBQUksRUFBR0csR0FBRyxDQUFDSCxJQUFKLEVBRHNDO0FBRTdDUixzQkFBRSxFQUFFVyxHQUFHLENBQUNYO0FBRnFDLG1CQUFWO0FBQUEsaUJBQTFCLEM7aURBSU47QUFBRW1GLDBCQUFRLEVBQUVELFNBQVo7QUFBdUJHLHNCQUFJLEVBQUVELEtBQTdCO0FBQW9DK0Isc0JBQUksRUFBR3JELE1BQTNDO0FBQW9EOUIsc0JBQUksRUFBR0E7QUFBM0QsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoSDJCK0MsNENBQUssQ0FBQ2dELFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVtcGx5b2VyLmpzLmQzMTBjOGFiN2IyOGY5NDVkMjkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHtsb2FkRmlyZWJhc2V9IGZyb20gJy4uL2xpYi9kYi5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBlbXBsb3llckxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSBcIi9qcy9zY3JpcHRzLmpzXCI7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuICAgICAgICBjb25zdCBzY3JpcHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICBzY3JpcHQxLnNyYyA9IFwiL2Fzc2V0cy9kZW1vL2RhdGF0YWJsZXMtZGVtby5qc1wiO1xyXG4gICAgICAgIHNjcmlwdDEuYXN5bmMgPSB0cnVlO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdDEpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGF0YXRhYmxlUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgLy8gdGhpcy5lbXBsb3llcnMgPSBwcm9wcy5lbXBsb3llciB8fCBbXVxyXG4gICAgICAgIHRoaXMuJGRhdGF0YWJsZSA9IG51bGxcclxuICAgICAgICB0aGlzLmluaXRpYWxfc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIEVNUExPWUVSSUQgOiAnJyxcclxuICAgICAgICAgICAgQ19OYW1lIDogJycsXHJcbiAgICAgICAgICAgIENfbm9FbXA6ICcnLFxyXG4gICAgICAgICAgICBDX3B1Ymxpc2hlZF9kYXRlOicnLFxyXG4gICAgICAgICAgICBDX3RlbDonJyxcclxuICAgICAgICAgICAgQ19lbWFpbGFkZHI6JycsXHJcbiAgICAgICAgICAgIENfY2l0eTonJyxcclxuICAgICAgICAgICAgQ19hcmVhOicnLFxyXG4gICAgICAgICAgICBDX0FkZHJlc3M6JycsXHJcbiAgICAgICAgICAgIENfRGVzY3JpcHRpb246JycsXHJcbiAgICAgICAgICAgIGVtcGxveWVyczogcHJvcHMuZW1wbG95ZXIgfHwgW10sXHJcbiAgICAgICAgICAgIGpvYnMgOiBwcm9wcy5qb2JzIHx8IFtdLFxyXG4gICAgICAgICAgICBhcmVhczogcHJvcHMuYXJlYSB8fCBbXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxfc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGF0YWJsZSgpXHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplRGF0YXRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuJGRhdGF0YWJsZSA9ICQodGhpcy5kYXRhdGFibGVSZWYuY3VycmVudCkuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgb3JkZXI6IFtbMywgXCJkZXNjXCJdXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlZnJlc2hUYWJsZSgpIHtcclxuICAgICAgICB0aGlzLiRkYXRhdGFibGUuY2xlYXIoKVxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGVtcGxveWVyTGlzdFxyXG4gICAgICAgICAgICAuZ2V0SW5pdGlhbFByb3BzKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXJzIDogcmVzcG9uc2UuZW1wbG95ZXIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBzZWxmLmluaXRpYWxpemVEYXRhdGFibGUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoQWZ0ZXJBZGRUYWJsZSgpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBlbXBsb3llckxpc3RcclxuICAgICAgICAgICAgLmdldEluaXRpYWxQcm9wcygpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGpvYnM6IHJlc3BvbnNlLmpvYnMsXHJcbiAgICAgICAgICAgICAgICBlbXBsb3llcnMgOiByZXNwb25zZS5lbXBsb3llcixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHNlbGYuaW5pdGlhbGl6ZURhdGF0YWJsZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCBmaXJlYmFzZSA9IGF3YWl0IGxvYWRGaXJlYmFzZSgpIFxyXG4gICAgICAgIGNvbnN0IGVtcGxveWVyUXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImVtcGxveWVyXCIpXHJcbiAgICAgICAgICAgIC5saW1pdCgxMClcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGVtcGxveWVycyA9IGVtcGxveWVyUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBjb25zdCBhcmVhUXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImFyZWFcIilcclxuICAgICAgICAgICAgLmxpbWl0KDEwKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgYXJlYXMgPSBhcmVhUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjaXR5UXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJjaXR5XCIpXHJcbiAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGNpdGllcyA9IGNpdHlRdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBjb25zdCBqb2JRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAuY29sbGVjdGlvbihcImpvYlwiKVxyXG4gICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBqb2JzID0gam9iUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICBkYXRhIDogZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHsgZW1wbG95ZXI6IGVtcGxveWVycywgYXJlYTogYXJlYXMsIGNpdHkgOiBjaXRpZXMgLCBqb2JzIDogam9icyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVBhc3NJZCA9IChpZCk9PntcclxuICAgICAgICAkKFwiI2RlbGV0ZUNvbmZpcm1Nb2RhbFwiKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlbGV0ZV9pZCA6IGlkfSlcclxuICAgIH1cclxuXHJcbiAgICBhZGRQYXNzSWQgPSAoaWQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtlZGl0X2lkIDogaWR9KVxyXG4gICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignZW1wbG95ZXInKS5kb2MoaWQpLmdldCgpLlxyXG4gICAgICAgICAgICB0aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBzbmFwc2hvdC5kYXRhKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgICAgICAgRU1QTE9ZRVJJRDogZGF0YS5lZGl0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIENfTmFtZSA6ZGF0YS5DX05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19ub0VtcDpkYXRhLkNfbm9FbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19wdWJsaXNoZWRfZGF0ZTpkYXRhLkNfcHVibGlzaGVkX2RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ190ZWw6ZGF0YS5DX3RlbCxcclxuICAgICAgICAgICAgICAgICAgICBDX2VtYWlsYWRkcjpkYXRhLkNfZW1haWxhZGRyLFxyXG4gICAgICAgICAgICAgICAgICAgIENfY2l0eTpkYXRhLkNfY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBDX2FyZWE6ZGF0YS5DX2FyZWEsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19BZGRyZXNzOmRhdGEuQ19BZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIENfRGVzY3JpcHRpb246ZGF0YS5DX0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGRhdGFcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5lbXBsb3llck5hbWUpXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZW1wbG95ZXJOYW1lKVxyXG4gICAgICAgICQoXCIjYWRkSm9iTW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRQYXNzSWQgPSAoaWQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtlZGl0X2lkIDogaWR9KVxyXG4gICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignZW1wbG95ZXInKS5kb2MoaWQpLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBzbmFwc2hvdC5kYXRhKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgICAgICAgQ19OYW1lIDpkYXRhLkNfTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBDX25vRW1wOmRhdGEuQ19ub0VtcCxcclxuICAgICAgICAgICAgICAgICAgICBDX3B1Ymxpc2hlZF9kYXRlOmRhdGEuQ19wdWJsaXNoZWRfZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBDX3RlbDpkYXRhLkNfdGVsLFxyXG4gICAgICAgICAgICAgICAgICAgIENfZW1haWxhZGRyOmRhdGEuQ19lbWFpbGFkZHIsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19jaXR5OmRhdGEuQ19jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIENfYXJlYTpkYXRhLkNfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICBDX0FkZHJlc3M6ZGF0YS5DX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19EZXNjcmlwdGlvbjpkYXRhLkNfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgZGF0YVwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVtcGxveWVyTmFtZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZW1wbG95ZXJOYW1lKVxyXG4gICAgICAgICQoXCIjZWRpdEVtcGxveWVyTW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVtcGxveWVyID0gKCkgPT57XHJcbiAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2VtcGxveWVyJykuZG9jKHRoaXMuc3RhdGUuZWRpdF9pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIENfTmFtZTp0aGlzLnN0YXRlLkNfTmFtZSxcclxuICAgICAgICAgICAgICAgIENfbm9FbXA6dGhpcy5zdGF0ZS5DX25vRW1wLFxyXG4gICAgICAgICAgICAgICAgQ19wdWJsaXNoZWRfZGF0ZTp0aGlzLnN0YXRlLkNfcHVibGlzaGVkX2RhdGUsXHJcbiAgICAgICAgICAgICAgICBDX3RlbDp0aGlzLnN0YXRlLkNfdGVsLFxyXG4gICAgICAgICAgICAgICAgQ19lbWFpbGFkZHI6dGhpcy5zdGF0ZS5DX2VtYWlsYWRkcixcclxuICAgICAgICAgICAgICAgIENfY2l0eTpkYXRhLkNfY2l0eSxcclxuICAgICAgICAgICAgICAgIENfYXJlYTpkYXRhLkNfYXJlYSxcclxuICAgICAgICAgICAgICAgIENfQWRkcmVzczp0aGlzLnN0YXRlLkNfQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIENfRGVzY3JpcHRpb246dGhpcy5zdGF0ZS5DX0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGFibGUoKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNlZGl0RW1wbG95ZXJNb2RhbFwiKS5tb2RhbCgnaGlkZScpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Sm9iQ291bnQgPSAoaWQpID0+IHtcclxuICAgICAgICBsZXQgam9icyA9IHRoaXMuc3RhdGUuam9ic1xyXG4gICAgICAgIGxldCBjb3VudCA9IDBcclxuICAgICAgICBcclxuICAgICAgICAgICAgIGpvYnMubWFwKGpvYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgaWYoam9iLmRhdGEuRU1QTE9ZRVJJRCA9PSBpZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FtZSB2YWx1ZSBmb3VuZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICBjb3VudCArK1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICByZXR1cm4gY291bnQ7ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgICBpZihldmVudC50YXJnZXQubmFtZSA9PSBcIkpfYXJlYVwiIHx8IGV2ZW50LnRhcmdldC5uYW1lID09IFwiQ19hcmVhXCIgKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRDaXRpZXMoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93Q2l0aWVzIDogdHJ1ZX0pXHJcbiAgICB9XHJcbiAgXHJcbiAgICBhZGRKb2IgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICBcclxuICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKSBcclxuICAgICAgICBjb25zdCB1c2VyUmVmID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJylcclxuICAgICAgICAgICAgICAgIC5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFTVBMT1lFUklEIDogdGhpcy5zdGF0ZS5lZGl0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKbmFtZTp0aGlzLnN0YXRlLkpuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0NvbnRyYWN0OnRoaXMuc3RhdGUuSl9Db250cmFjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9taW5fc2FsYXJ5OnRoaXMuc3RhdGUuSl9taW5fc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX21heF9zYWxhcnk6dGhpcy5zdGF0ZS5KX21heF9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfaG91cnM6dGhpcy5zdGF0ZS5KX2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX1dvcmtpbmdfRGF5OnRoaXMuc3RhdGUuSl9Xb3JraW5nX0RheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9KcExldmVsOnRoaXMuc3RhdGUuSl9KcExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX3RlbDp0aGlzLnN0YXRlLkpfdGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0ZWREYXRlOnRoaXMuc3RhdGUuUG9zdGVkRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9lbWFpbDp0aGlzLnN0YXRlLkpfZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfYXJlYTp0aGlzLnN0YXRlLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9jaXR5OnRoaXMuc3RhdGUuSl9jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0FkZHJlc3M6dGhpcy5zdGF0ZS5KX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfRGVzY3JpcHRpb246dGhpcy5zdGF0ZS5KX0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX1F1YWxpZmljYXRpb246dGhpcy5zdGF0ZS5KX1F1YWxpZmljYXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBFTVBMT1lFUklEIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgSm5hbWU6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgSl90ZWw6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9taW5fc2FsYXJ5OicnLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfbWF4X3NhbGFyeTonJyxcclxuICAgICAgICAgICAgICAgICAgICBQb3N0ZWREYXRlOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfaG91cnM6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9lbWFpbDonJyxcclxuICAgICAgICAgICAgICAgICAgICBKX2NpdHk6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9hcmVhOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfV29ya2luZ19EYXk6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9RdWFsaWZpY2F0aW9uOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfSnBMZXZlbDonJyxcclxuICAgICAgICAgICAgICAgICAgICBKX0Rlc2NyaXB0aW9uOicnLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfQ29udHJhY3Q6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgSl9BZGRyZXNzOicnICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEFmdGVyQWRkVGFibGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEpvYkNvdW50ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJKb2IgY291bnQgYWRkaW5nXCIpXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignZW1wbG95ZXInKS5kb2MoaWQpLmdldCgpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgICBkYXRhID0gc25hcHNob3QuZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdlbXBsb3llcicpLmRvYyhpZCkudXBkYXRlKHtqb2JDb3VudCA6IGRhdGEuam9iQ291bnQrMX0pICBcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGdldENpdGllcyA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBjaXRpZXMgPSBbXVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignY2l0eScpLndoZXJlKCdBUkVBSUQnLFwiPT1cIixpZClcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChzbmFwc2hvdCk9PiB7XHJcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2l0aWVzLnB1c2goT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAgICAgICAgICAgICAge2lkIDogZG9jLmlkfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2NpdGllc30pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjaXRpZXN9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3REaXNhYmxlID0gKGV2ZW50KSA9PiB7ICAgXHJcbiAgICAgICAgJChcIiNjaXR5IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpO1xyXG4gICBcclxuICAgICAgICAkKFwiI2FyZWEgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLFwiZGlzYWJsZWRcIik7IFxyXG4gICAgfVxyXG5cclxuICAgIGFkZEVtcGxveWVyID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKCkgXHJcbiAgICAgICAgY29uc3QgdXNlclJlZiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2VtcGxveWVyJylcclxuICAgICAgICAgICAgICAgIC5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgIENfTmFtZTp0aGlzLnN0YXRlLkNfTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBDX25vRW1wOnRoaXMuc3RhdGUuQ19ub0VtcCxcclxuICAgICAgICAgICAgICAgICAgICBDX3B1Ymxpc2hlZF9kYXRlOnRoaXMuc3RhdGUuQ19wdWJsaXNoZWRfZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBDX3RlbDp0aGlzLnN0YXRlLkNfdGVsLFxyXG4gICAgICAgICAgICAgICAgICAgIENfZW1haWxhZGRyOnRoaXMuc3RhdGUuQ19lbWFpbGFkZHIsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19jaXR5OnRoaXMuc3RhdGUuQ19jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIENfYXJlYTp0aGlzLnN0YXRlLkNfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICBDX0FkZHJlc3M6dGhpcy5zdGF0ZS5DX0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19EZXNjcmlwdGlvbjp0aGlzLnN0YXRlLkNfRGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBDX05hbWU6dGhpcy5zdGF0ZS5DX05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19ub0VtcDp0aGlzLnN0YXRlLkNfbm9FbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19wdWJsaXNoZWRfZGF0ZTp0aGlzLnN0YXRlLkNfcHVibGlzaGVkX2RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ190ZWw6dGhpcy5zdGF0ZS5DX3RlbCxcclxuICAgICAgICAgICAgICAgICAgICBDX2VtYWlsYWRkcjp0aGlzLnN0YXRlLkNfZW1haWxhZGRyLFxyXG4gICAgICAgICAgICAgICAgICAgIENfY2l0eTp0aGlzLnN0YXRlLkNfY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBDX2FyZWE6dGhpcy5zdGF0ZS5DX2FyZWEsXHJcbiAgICAgICAgICAgICAgICAgICAgQ19BZGRyZXNzOnRoaXMuc3RhdGUuQ19BZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIENfRGVzY3JpcHRpb246dGhpcy5zdGF0ZS5DX0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVmcmVzaEFmdGVyQWRkVGFibGUoKTsgIFxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUVtcGxveWVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdlbXBsb3llcicpXHJcbiAgICAgICAgICAgIC5kb2ModGhpcy5zdGF0ZS5kZWxldGVfaWQpXHJcbiAgICAgICAgICAgIC5kZWxldGUoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0ZSBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQWZ0ZXJBZGRUYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFySW5wdXQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbF9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGlucHV0cywgaW5kZXg7XHJcblxyXG4gICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGlucHV0cy5sZW5ndGg7ICsraW5kZXgpIHtcclxuICAgICAgICAgICAgaW5wdXRzW2luZGV4XS52YWx1ZSA9ICcnXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0pfQWRkcmVzcycpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0pfRGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdKX1F1YWxpZmljYXRpb24nKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDX0FkZHJlc3MnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDX0Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJztcclxuICBcclxuICBcclxuICAgICAgICAkKFwiI0pfQ29udHJhY3Qgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjSl9Db250cmFjdCBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTtcclxuICBcclxuICAgICAgICAkKFwiI0pfSnBMZXZlbCBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNKX0pwTGV2ZWwgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7XHJcbiAgXHJcbiAgICAgICAgJChcIiNtaW5fZXhwX3llYXIgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjbWluX2V4cF95ZWFyIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpO1xyXG4gIFxyXG4gICAgICAgICQoXCIjSl9jaXR5IG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI0pfY2l0eSBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgJChcIiNKX2FyZWEgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjSl9hcmVhIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpOyBcclxuXHJcbiAgICAgICAgJChcIiNjaXR5IG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICQoXCIjYXJlYSBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNhcmVhIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpOyBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gY29uc3QgYXJlYSA9IHRoaXMucHJvcHMuYXJlYVxyXG4gICAgY29uc3QgY2l0aWVzID0gdGhpcy5zdGF0ZS5jaXRpZXNcclxuICAgIGNvbnN0IGpvYkNvdW50ID0gdGhpcy5zdGF0ZS5qb2JcclxuICAgIHJldHVybiAoXHJcbjxodG1sPlxyXG5cclxuPGJvZHkgY2xhc3NOYW1lPVwic2ItbmF2LWZpeGVkXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi10b3BuYXYgbmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiZGFzaGJvYXJkXCI+QWRtaW48L2E+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbSBvcmRlci0xIG9yZGVyLWxnLTBcIiBpZD1cInNpZGViYXJUb2dnbGVcIiBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmUtYmxvY2sgZm9ybS1pbmxpbmUgbWwtYXV0byBtci0wIG1yLW1kLTMgbXktMiBteS1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0byBtbC1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaWQ9XCJ1c2VyRHJvcGRvd25cIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlciBmYS1md1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiIGFyaWEtbGFiZWxsZWRieT1cInVzZXJEcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aXZpdHkgTG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwibG9naW5cIj5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGlkPVwibGF5b3V0U2lkZW5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5b3V0U2lkZW5hdl9uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdiBhY2NvcmRpb24gc2Itc2lkZW5hdi1kYXJrXCIgaWQ9XCJzaWRlbmF2QWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1tZW51LWhlYWRpbmdcIj5Db3JlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJkYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLW5hdi1saW5rLWljb25cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFjaG9tZXRlci1hbHRcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgY29sbGFwc2VkXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2VQYWdlc1wiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZVBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1uYXYtbGluay1pY29uXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2stb3BlblwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvd1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPVwiY29sbGFwc2VQYWdlc1wiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdUd29cIiBkYXRhLXBhcmVudD1cIiNzaWRlbmF2QWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtbmVzdGVkIG5hdiBhY2NvcmRpb25cIiBpZD1cInNpZGVuYXZBY2NvcmRpb25QYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBjb2xsYXBzZWRcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNwYWdlc0NvbGxhcHNlQXV0aFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJwYWdlc0NvbGxhcHNlQXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvd1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD1cInBhZ2VzQ29sbGFwc2VBdXRoXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ09uZVwiIGRhdGEtcGFyZW50PVwiI3NpZGVuYXZBY2NvcmRpb25QYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtbmVzdGVkIG5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImxvZ2luXCI+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwicmVnaXN0ZXJcIj5SZWdpc3RlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJwYXNzd29yZFwiPkZvcmdvdCBQYXNzd29yZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00XCI+RW1wbG95ZXIgVGFibGVzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1wcmltYXJ5IHRleHQtd2hpdGUgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPkpvYnMgdGFibGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzbWFsbCB0ZXh0LXdoaXRlIHN0cmV0Y2hlZC1saW5rXCIgaHJlZj1cImRhc2hib2FyZFwiPlZpZXcgbW9yZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsIHRleHQtd2hpdGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1kYW5nZXIgdGV4dC13aGl0ZSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+TmV3IEVtcGxveWVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic21hbGwgdGV4dC13aGl0ZSBzdHJldGNoZWQtbGlua1wiIGhyZWY9XCIjYWRkRW1wbG95ZXJNb2RhbFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj4rQWRkIE5ldzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGFkbWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIHJlZj17dGhpcy5kYXRhdGFibGVSZWZ9IGNsYXNzTmFtZT1cImRpc3BsYXkgdGFibGUgdGFibGUtYm9yZGVyZWRcIiBzdHlsZT17e3dpZHRoOjEwMCtcIiVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0aHJlYWQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtcGxveWVyIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QaG9uZSBOdW1iZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiBKb2JzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZGQgSm9iPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbXBsb3llcnMubWFwKChFbXBsb3llcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtFbXBsb3llci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0VtcGxveWVyLkNfTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntFbXBsb3llci5DX2VtYWlsYWRkcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntFbXBsb3llci5DX3RlbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLmdldEpvYkNvdW50KEVtcGxveWVyLmlkKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntFbXBsb3llci5DX0FkZHJlc3N9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKT0+dGhpcy5hZGRQYXNzSWQoRW1wbG95ZXIuaWQpfT4gPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aWV3IGJ0biBidG4tc3VjY2Vzc1wiIHRpdGxlPVwiYWRkXCIgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCIsIG1hcmdpbjpcImF1dG9cIn19IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcGx1cy1jaXJjbGVcIj48L2k+IEpvYiA8L2J1dHRvbj48L2E+ICZuYnNwOyA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxpIG9uQ2xpY2s9eygpPT50aGlzLmVkaXRQYXNzSWQoRW1wbG95ZXIuaWQpfSBjbGFzc05hbWU9XCJlZGl0IG1hdGVyaWFsLWljb25zIGljb24tcGFkZGluZ1wiIHRpdGxlPVwiRWRpdFwiIHN0eWxlPXt7Y29sb3I6IFwieWVsbG93XCIsIGN1cnNvcjpcInBvaW50ZXJcIn19IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCI+JiN4RTI1NDs8L2k+PC9hPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpPT50aGlzLmRlbGV0ZVBhc3NJZChFbXBsb3llci5pZCl9IGNsYXNzTmFtZT1cImRlbGV0ZSBtYXRlcmlhbC1pY29ucyBpY29uLXBhZGRpbmdcIiB0aXRsZT1cIkRlbGV0ZVwiICBzdHlsZT17e2NvbG9yOiBcInJlZFwiLCBjdXJzb3I6XCJwb2ludGVyXCJ9fSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiYjeEU4NzI7PC9hPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHRcclxuXHQ8ZGl2IGlkPVwiZWRpdEVtcGxveWVyTW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBpbmZvLWRpYWxvZ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtYWx0XCI+PC9pPiBFbXBsb3llciBJbmZvcm1hdGlvbiBFZGl0aW9uPC9oMz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMuY2xlYXJJbnB1dH0+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwicG9zdFwiIHN0eWxlPXt7d2lkdGg6IDEwMCtcIiVcIiwgbWFyZ2luOiBcImF1dG9cIiwgbWFyZ2luVG9wOiAyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJDX05hbWVcIj5Db21wYW55IG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiQ19OYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkNfTmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBDb21wYW55IE5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkNfTmFtZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJDX25vRW1wXCI+Tm8gT2YgRW1wbHlvZWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJDX25vRW1wXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkNfbm9FbXBcIiBwbGFjZWhvbGRlcj1cIlwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkNfbm9FbXB9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkNfcHVibGlzaGVkX2RhdGVcIj5QdWJsaXNoZWQgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkNfcHVibGlzaGVkX2RhdGVcIiB2YWx1ZT1cImRhdGVcIiBuYW1lPVwiQ19wdWJsaXNoZWRfZGF0ZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuQ19wdWJsaXNoZWRfZGF0ZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJDX3RlbFwiPlRlbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiQ190ZWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiQ190ZWxcIiBwbGFjZWhvbGRlcj1cIlwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkNfdGVsfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJDX0NlbWFpbGFkZHJcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkNfZW1haWxhZGRyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkNfZW1haWxhZGRyXCIgcGxhY2Vob2xkZXI9XCJhYmNAZ21haWwuY29tXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5DX2VtYWlsYWRkcn0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKLWFyZWFcIj5TZWxlY3QgQXJlYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkNfYXJlYVwiIGlkPVwiYXJlYVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2xpY2s9e3RoaXMuZGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IEFyZWEgaW4gSmFwYW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFyZWFzLm1hcChBcmVhID0+ICh0aGlzLnN0YXRlLkpfYXJlYSA9PSBBcmVhLmlkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17QXJlYS5pZH0gc2VsZWN0ZWQ+e0FyZWEuYXJlYU5hbWV9PC9vcHRpb24+IDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17QXJlYS5pZH0+e0FyZWEuYXJlYU5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfY2l0eVwiPlNlbGVjdCB5b3VyIENpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJDX2NpdHlcIiBpZD1cImNpdHlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNsaWNrPXt0aGlzLmRpc2FibGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPlNlbGVjdCBBcmVhIGluIEphcGFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2l0aWVzICYmICBjaXRpZXMubWFwKENpdHkgPT4gKHRoaXMuc3RhdGUuSl9jaXR5ID09IENpdHkuaWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDaXR5LmlkfSBzZWxlY3RlZD57Q2l0eS5jaXR5TmFtZX08L29wdGlvbj4gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDaXR5LmlkfT57Q2l0eS5jaXR5TmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXRhaWxBZGRyXCI+RGV0YWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkNfQWRkcmVzc1wibmFtZT1cIkNfQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuQ19BZGRyZXNzfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNEZXNcIj5Db21wYW55IERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJDX0Rlc2NyaXB0aW9uXCIgbmFtZT1cIkNfRGVzY3JpcHRpb25cIiAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5DX0Rlc2NyaXB0aW9ufSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMudXBkYXRlRW1wbG95ZXJ9IHZhbHVlPVwiVXBkYXRlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi13aWR0aCByb3VuZGVkLTQgcHktMlwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6MTB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5jbGVhcklucHV0fSB2YWx1ZT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGlkPVwiYWRkRW1wbG95ZXJNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGluZm8tZGlhbG9nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz48aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlLWFsdFwiPjwvaT4gQWRkIE5ldyBFbXBsb3llcjwvaDM+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXt0aGlzLmNsZWFySW5wdXR9PiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cInBvc3RcIiBzdHlsZT17e3dpZHRoOiAxMDArXCIlXCIsIG1hcmdpbjogXCJhdXRvXCIsIG1hcmdpblRvcDogMjB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkNfTmFtZVwiPkNvbXBhbnkgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJDX05hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiQ19OYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIENvbXBhbnkgTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuQ19OYW1lfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkNfbm9FbXBcIj5ObyBPZiBFbXBseW9lZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIkNfbm9FbXBcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiQ19ub0VtcFwiIHBsYWNlaG9sZGVyPVwiXCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuQ19ub0VtcH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiQ19wdWJsaXNoZWRfZGF0ZVwiPlB1Ymxpc2hlZCBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiQ19wdWJsaXNoZWRfZGF0ZVwiIHZhbHVlPVwiZGF0ZVwiIG5hbWU9XCJDX3B1Ymxpc2hlZF9kYXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5DX3B1Ymxpc2hlZF9kYXRlfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkNfdGVsXCI+VGVsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJDX3RlbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJDX3RlbFwiIHBsYWNlaG9sZGVyPVwiXCIgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuQ190ZWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkNfQ2VtYWlsYWRkclwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiQ19lbWFpbGFkZHJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiQ19lbWFpbGFkZHJcIiBwbGFjZWhvbGRlcj1cImFiY0BnbWFpbC5jb21cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkNfZW1haWxhZGRyfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKLWFyZWFcIj5TZWxlY3QgQXJlYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJDX2FyZWFcIiBpZD1cImFyZWFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNsaWNrPXt0aGlzLnNlbGVjdERpc2FibGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgZGlzYWJsZWQ+U2VsZWN0IEFyZWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXJlYXMubWFwKGpvYkFyZWEgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17am9iQXJlYS5pZH0+e2pvYkFyZWEuYXJlYU5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSi1hcmVhXCI+U2VsZWN0IENpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dDaXRpZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkNfY2l0eVwiIGlkPVwiY2l0eVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0RGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCBkaXNhYmxlZD5TZWxlY3QgQ2l0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2l0aWVzICYmICBjaXRpZXMubWFwKGNpdHkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y2l0eS5pZH0+e2NpdHkuY2l0eU5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRldGFpbEFkZHJcIj5EZXRhaWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiQ19BZGRyZXNzXCJuYW1lPVwiQ19BZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5DX0FkZHJlc3N9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY0Rlc1wiPkNvbXBhbnkgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkNfRGVzY3JpcHRpb25cIiBuYW1lPVwiQ19EZXNjcmlwdGlvblwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkNfRGVzY3JpcHRpb259IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNsaWNrPXt0aGlzLmFkZEVtcGxveWVyfSB2YWx1ZT1cIkFkZCBFbXBsb3llclwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi13aWR0aCByb3VuZGVkLTQgcHktMlwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6MTB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5jbGVhcklucHV0fSB2YWx1ZT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGlkPVwiYWRkSm9iTW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBpbmZvLWRpYWxvZ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICA8aDM+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1hbHRcIj48L2k+IEFkZCBOZXcgSm9iPC9oMz5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMuY2xlYXJJbnB1dH0+JnRpbWVzOzwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwicG9zdFwiIHN0eWxlPXt7d2lkdGg6IDEwMCtcIiVcIn19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gcm9sZT1cIkZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiXCIgYWNjZXB0LWNoYXJzZXQ9XCJVVEYtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKbmFtZVwiPkpvYiBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgSm9iIE5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpuYW1lfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9Db250cmFjdFwiPkVtcGxveW1lbnQgU3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiSl9Db250cmFjdFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfQ29udHJhY3RcIiAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkPlNlbGVjdCBKb2IgQ29udHJhY3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBhcnQgVGltZVwiPlBhcnQgVGltZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRnVsbCBUaW1lXCI+RnVsbCBUaW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic2FsYXJ5XCI+U2FsYXJ5KMKlKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1pbl9zYWxhcnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX21pbl9zYWxhcnlcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE1pbmltdW4gU2FsYXJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX21pbl9zYWxhcnl9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWF4X3NhbGFyeVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfbWF4X3NhbGFyeVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTWF4aW11biBTYWxhcnlcIiAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX21heF9zYWxhcnl9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX2hvdXJzXCI+V29ya2luZyBIb3VyczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJKX2hvdXJzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9ob3Vyc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgV29ya2luZyBIb3Vyc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl9ob3Vyc30gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX1dvcmtpbmdfRGF5XCI+V29ya2luZyBEYXlzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfV29ya2luZ19EYXlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX1dvcmtpbmdfRGF5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBXb3JraW5nIERheXNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfV29ya2luZ19EYXl9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiQWdlX3JhbmdlXCI+QWdlIFJhbmdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiQWdlX3JhbmdlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiQWdlX3JhbmdlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBZ2UgUmFuZ2VcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkFnZV9yYW5nZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX0pwTGV2ZWxcIj5TZWxlY3QgSmFwYW5lc2UgU2tpbGw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJKX0pwTGV2ZWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX0pwTGV2ZWxcIiAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkPlNlbGVjdCBKYXBhbmVzZSBsZXZlbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPk4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+TjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5OMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl90ZWxcIj5UZWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfdGVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl90ZWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHBob25lOlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl90ZWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UG9zdGVkIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIlBvc3RlZERhdGVcIiB2YWx1ZT1cImRhdGV0aW1lXCIgbmFtZT1cIlBvc3RlZERhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLlBvc3RlZERhdGV9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfZW1haWxcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX2VtYWlsXCIgcGxhY2Vob2xkZXI9XCJhYmNAZ21haWwuY29tXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX2VtYWlsfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkotYXJlYVwiPlNlbGVjdCBBcmVhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkpfYXJlYVwiIGlkPVwiYXJlYVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0RGlzYWJsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlfSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCBkaXNhYmxlZD5TZWxlY3QgQXJlYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hcmVhcy5tYXAoam9iQXJlYSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtqb2JBcmVhLmlkfT57am9iQXJlYS5hcmVhTmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKLWFyZWFcIj5TZWxlY3QgQ2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0NpdGllcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiSl9jaXR5XCIgaWQ9XCJjaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DbGljaz17dGhpcy5zZWxlY3REaXNhYmxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWV9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkPlNlbGVjdCBDaXR5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaXRpZXMgJiYgIGNpdGllcy5tYXAoY2l0eSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjaXR5LmlkfT57Y2l0eS5jaXR5TmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXRhaWxBZGRyXCI+RGV0YWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiICBpZD1cIkpfQWRkcmVzc1wiIG5hbWU9XCJKX0FkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfQWRkcmVzc30gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpvYkRlc1wiPkpvYiBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgIGlkPVwiSl9EZXNjcmlwdGlvblwiIG5hbWU9XCJKX0Rlc2NyaXB0aW9uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX0Rlc2NyaXB0aW9ufSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlF1YWxcIj5PdGhlciBRdWFsaWZpY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkpfUXVhbGlmaWNhdGlvblwiIG5hbWU9XCJKX1F1YWxpZmljYXRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfUXVhbGlmaWNhdGlvbn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuYWRkSm9ifSB2YWx1ZT1cIkFkZFwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4td2lkdGggcm91bmRlZC00IHB5LTJcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6MTB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHRcclxuXHQ8ZGl2IGlkPVwiZGVsZXRlQ29uZmlybU1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgZGVsLWRpYWxvZ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtYWx0XCI+PC9pPiBEZWxldGUgSW5mb3JtYXRpb248L2gzPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy5jbGVhcklucHV0fT4mdGltZXM7PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7Zm9udEZhbWlseTogXCInTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgc2Fucy1zZXJpZlwifX0+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tcGFueT88L3A+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtd2FybmluZ1wiPjxzbWFsbD5UaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLjwvc21hbGw+PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIHZhbHVlPVwiQ2FuY2VsXCIgLz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiB2YWx1ZT1cIkRlbGV0ZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17dGhpcy5kZWxldGVFbXBsb3llcn0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPC9kaXY+XHJcbiAgICA8L2JvZHk+XHJcbjwvaHRtbD5cclxuKX19Il0sInNvdXJjZVJvb3QiOiIifQ==