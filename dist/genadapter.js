(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GenAdapter"] = factory();
	else
		root["GenAdapter"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperAdapter2 = __webpack_require__(2);

var _SuperAdapter3 = _interopRequireDefault(_SuperAdapter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 基础数据转换适配器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * 基础数据转换器
 */
var BaseDataAdapter = function (_SuperAdapter) {
    _inherits(BaseDataAdapter, _SuperAdapter);

    /**
     * @desc 构建对象
     * @param primaryKey 主键/组件标识
     */
    function BaseDataAdapter(primaryKey) {
        _classCallCheck(this, BaseDataAdapter);

        var _this = _possibleConstructorReturn(this, (BaseDataAdapter.__proto__ || Object.getPrototypeOf(BaseDataAdapter)).call(this));

        _this.primaryKey = primaryKey;
        return _this;
    }

    /**
     * @desc 获取主键/组件标识
     * @return {string}
     */


    _createClass(BaseDataAdapter, [{
        key: "getPrimaryKey",
        value: function getPrimaryKey() {
            return this.primaryKey;
        }

        //--------------生命周期方法--------------------
        /**
         * @desc 构建适配页面(元数据)
         * @param options
         * {
         *     tplNode,     //当前数据节点值
         *     tplTree,     //当前数据树
         *     productType, //所属产品类型
         *     currApp,     //所属应用信息
         *     currPage,    //所属页面信息
         *     pageList     //所属应用下的全部页面信息
         * }
         * @return {Array} 元数据数组集合 @link 请参考PageMeta说明
         */

    }, {
        key: "onPageMetas",
        value: function onPageMetas(options) {}

        /**
         * @desc 构建适配页面(属性)
         * @param options {无}
         * @return {object} 适配页面的属性 @link 请参考PageProp说明
         */

    }, {
        key: "onPageProps",
        value: function onPageProps(options) {}

        /**
         *  @desc 新建数据节点时触发
         *  @param options:{
         *      tplTree,        //当前数据树
         *      tplNode,        //当前添加的数据节点对象
         *      tplParentNode   //当前对应的父节点对象
         *   }
         *   @return {无}
         */

    }, {
        key: "onCreateData",
        value: function onCreateData(options) {}

        /**
         * @desc 数据节点位置变更时触发
         * @param options
         * {
         *     tplTree, //移动后的数据树
         *     tplNode, //移动后的节点
         *     tplParentNode,//移动后的父节点
         *     tplSourceNode,//移动前的节点
         *     tplSourceParentNode,//移动前的父节点
         * }
         */

    }, {
        key: "onMoveData",
        value: function onMoveData(options) {}

        /**
         * @desc 将数据转换为配置值
         * @param options {
         *     formMeta,    //元数据，即 @link onPageMetas 返回的数据
         *     tplNode,     //当前数据节点对象
         *     tplTree,     //当前数据树
         *     productType, //所属产品类型
         *     currApp,     //所属应用信息
         *     currPage,    //所属页面信息
         *     pageList     //所属应用下的全部页面信息
         * }
         * @return {object} 适配页面的表单值
         */

    }, {
        key: "onDataToValue",
        value: function onDataToValue(options) {}

        /**
         * @desc 将配置值转换为数据
         * @param options {
         *     formMeta,    //元数据，即 @link onPageMetas 返回的数据
         *     formData,    //变更后的配置值
         *     tplPreNode,  //上一次的数据值
         *     tplNode,     //当前数据节点对象
         *     tplTree,     //当前数据树
         *     productType, //所属产品类型
         *     currApp,     //所属应用信息
         *     currPage,    //所属页面信息
         *     pageList     //所属应用下的全部页面信息
         * }
         * @return {无}
         */

    }, {
        key: "onValueToData",
        value: function onValueToData(options) {}
    }]);

    return BaseDataAdapter;
}(_SuperAdapter3.default);

exports.default = BaseDataAdapter;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 适配页面元数据的输入类型定义
 */
module.exports = {
  /**
   * 文本输入
   */
  Text: 'Text',
  /**
   * 开关按钮
   */
  Bool: 'Bool',
  /**
   * 数字输入
   */
  Number: 'Number',
  /**
   * 下拉选择
   */
  Select: 'Select',
  /**
   * 勾选框
   */
  Checkbox: 'Checkbox',
  /**
   * 颜色面板
   */
  Color: 'Color',
  /**
   * 选择日期
   */
  Date: 'Date',
  /**
   * 选择时间
   */
  Time: 'Time',
  /**
   * 多行文本框
   */
  Textarea: 'Textarea',
  /**
   * JSON编辑器
   */
  Json: 'Json',
  /**
   * 富文本编辑器
   */
  RichText: 'RichText',
  /**
   * 带Iframe的弹窗(可自定义弹窗里面的内容,详见扩展插件开发说明.)
   */
  IframeModal: 'IframeModal',
  /**
   * CSS的样式配置器
   */
  CssStyle: 'CssStyle',
  /**
   * 带开关的文本输入框
   */
  SwitchText: 'SwitchText',
  /**
   * 图标库(非通用)
   */
  Icon: 'Icon',
  /**
   * 参照(非通用)
   */
  Refer: 'Refer',
  /**
   * 下拉选择树(非通用)
   */
  SelectTree: 'SelectTree',
  /**
   * 多表头合并设计器(非通用)
   */
  TitleGroup: 'TitleGroup',
  /**
   * 动作事件设计器(非通用)
   */
  EventActions: 'EventActions',
  /**
   * 计算公式设计器(非通用)
   */
  MathFormula: 'MathFormula',
  /**
   * 逻辑公式设计器(非通用)
   */
  LogicFormula: 'LogicFormula',
  /**
   * 富文本图标框（非通用,仅限配套的YYEditor富文本框使用）
   */
  EditorIcons: 'EditorIcons',
  /**
   * 分页配置器(非通用)
   */
  Pagination: 'Pagination',
  /**
   * 枚举档案选择（非通用,仅限配套的枚举档案使用）
   */
  EnumSelect: 'EnumSelect',
  /**
   * 参照映射关联项配置（非通用,仅限配套的参照使用）
   */
  ReferEditRelation: 'ReferEditRelation',
  /**
   * 数据表格本地数据配置（非通用,仅限配套的表格使用）
   */
  LocalData: 'LocalData',
  /**
   * 表格行操作菜单（非通用,仅限配套的表格使用）
   */
  RowMenu: 'RowMenu',
  /**
   * 筛选栏配置（非通用,仅限配套的筛选栏配置）
   */
  FilterAreaConfig: 'FilterAreaConfig',
  /**
   * Echart图表属性配置器(非通用)
   */
  EChartData: 'EChartData',
  /**
   * 参照带入配置（非通用,仅限配套的参照配置）
   */
  ReferLookup: 'ReferLookup'

};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SuperAdapter = function () {
    function SuperAdapter() {
        _classCallCheck(this, SuperAdapter);
    }
    /**
     * 调用自生的方法
     * @param funcName
     * @param funcOptions
     */


    _createClass(SuperAdapter, [{
        key: 'callFunction',
        value: function callFunction(funcName, funcOptions) {
            if (!funcName) {
                console.warn('callFunction not funcName', this);
                return;
            }
            var func = this[funcName];
            if (typeof func !== 'function') {
                console.warn('callFunction is not function:' + funcName, this);
                return;
            }
            var funcResult = func.call(this, funcOptions);
            return funcResult;
        }
    }]);

    return SuperAdapter;
}();

exports.default = SuperAdapter;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperAdapter2 = __webpack_require__(2);

var _SuperAdapter3 = _interopRequireDefault(_SuperAdapter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 基础视图转换适配器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BaseViewAdapter = function (_SuperAdapter) {
    _inherits(BaseViewAdapter, _SuperAdapter);

    /**
     * 构建对象
     * @param primaryKey 主键/组件标识
     */
    function BaseViewAdapter(primaryKey) {
        _classCallCheck(this, BaseViewAdapter);

        var _this = _possibleConstructorReturn(this, (BaseViewAdapter.__proto__ || Object.getPrototypeOf(BaseViewAdapter)).call(this));

        _this.primaryKey = primaryKey;
        return _this;
    }

    /**
     * 获取主键/组件标识
     * @return {string}
     */


    _createClass(BaseViewAdapter, [{
        key: "getPrimaryKey",
        value: function getPrimaryKey() {
            return this.primaryKey;
        }
    }]);

    return BaseViewAdapter;
}(_SuperAdapter3.default);

exports.default = BaseViewAdapter;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseViewAdapter2 = __webpack_require__(3);

var _BaseViewAdapter3 = _interopRequireDefault(_BaseViewAdapter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 视图转换适配器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ViewAdapter = function (_BaseViewAdapter) {
  _inherits(ViewAdapter, _BaseViewAdapter);

  function ViewAdapter() {
    _classCallCheck(this, ViewAdapter);

    return _possibleConstructorReturn(this, (ViewAdapter.__proto__ || Object.getPrototypeOf(ViewAdapter)).apply(this, arguments));
  }

  _createClass(ViewAdapter, [{
    key: "onDataView",

    //--------------生命周期方法--------------------
    /**
     * @desc 构建数据节点的显示视图
     * @param options
     * {
     *     tplNode,     //当前数据节点对象
     *     tplTree,     //当前数据树
     * }
     * @return {Array} 视图元数据集合 @link 请参考ViewMeta说明如下：
     * [
     * {
     *   uititle: '消息内容',
     *   uitype: 'message',
     *   type: 'error|warning|info|success'
     * }
     * ]
     */
    value: function onDataView(options) {}

    /**
     *  @desc 当前数据节点下添加子数据节点时的校验
     *  @param options:{
     *      tplTree,     //当前数据树
     *      tplNode,     //当前数据节点对象
     *      tplChildNode //即将添加的子数据节点对象
     *   }
     *   @return {Object} 校验元数据视图 @link 请参考ValidMeta说明
     */

  }, {
    key: "onDataValid",
    value: function onDataValid(options) {}

    /**
     * 当数据节点被移除时的校验
     * @param options
     * TODO 待实现
     */

  }, {
    key: "onRemoveDataValid",
    value: function onRemoveDataValid(options) {}

    /**
     *  @desc 当前数据节点下添加子数据节点时的校验
     *  @param options:{
     *     tplTree, //当前数据树
     *     tplNode, //当前移动的节点
     *     tplParentNode,//移动前的父节点
     *     tplTargetParentNode,//移动后的父节点
     *   }
     *   @return {Object} 校验元数据视图 @link 请参考ValidMeta说明
     */

  }, {
    key: "onMoveDataValid",
    value: function onMoveDataValid(options) {}

    /**
     * 当数据节点被选择时构建拖拽相关的视图
     *  @param options:{
     *      tplTree,     //当前数据树
     *      tplNode,     //当前数据节点对象
     *      tplParentNode //当前数据节点父对象
     *   }
     *
     *  @return  [
     *      {
     *          key:'addTab',               //按钮键值
     *          text:'添加页签',             //按钮名称
     *          icon:'uidesign uitianjia'   //按钮图标（使用阿里字体图标库iconfont）
     *      }
     *      ,... //其它扩展按钮
     *  ]
     */

  }, {
    key: "onDataDndView",
    value: function onDataDndView(options) {}

    /**
     * 当数据节点触发动作事件时（例如：扩展按钮点击时）
     * @param options
     * {
     *     tplTree,     //当前数据树
     *     tplNode,     //当前数据节点对象
     *     actionType,  //动作类型
     *     actionKey,   //动作标识
     *     openApi      //开发的API能力
     * }
     * @return 无
     */

  }, {
    key: "onActionHandler",
    value: function onActionHandler(options) {}
  }]);

  return ViewAdapter;
}(_BaseViewAdapter3.default);

exports.default = ViewAdapter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseDataAdapter2 = __webpack_require__(0);

var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

var _PropMeta = __webpack_require__(6);

var _PropMeta2 = _interopRequireDefault(_PropMeta);

var _PropDataToValue = __webpack_require__(7);

var _PropDataToValue2 = _interopRequireDefault(_PropDataToValue);

var _PropValueToData = __webpack_require__(8);

var _PropValueToData2 = _interopRequireDefault(_PropValueToData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 属性转换适配器
 */
var PropAdapter = function (_BaseDataAdapter) {
    _inherits(PropAdapter, _BaseDataAdapter);

    function PropAdapter() {
        _classCallCheck(this, PropAdapter);

        return _possibleConstructorReturn(this, (PropAdapter.__proto__ || Object.getPrototypeOf(PropAdapter)).apply(this, arguments));
    }

    _createClass(PropAdapter, [{
        key: 'onPageMetas',

        //--------------生命周期方法--------------------
        /**
         * @desc 参考 BaseDataAdapter
         * @param options
         */
        value: function onPageMetas(options) {
            return (0, _PropMeta2.default)(options);
        }

        /**
         * @desc 参考 BaseDataAdapter
         * @param options
         */

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {}

        /**
         * @desc 参考 BaseDataAdapter
         * @param options
         */

    }, {
        key: 'onCreateData',
        value: function onCreateData(options) {}

        /**
         * @desc 参考 BaseDataAdapter
         * @param options
         */

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            return (0, _PropDataToValue2.default)(options);
        }

        /**
         * @desc 参考 BaseDataAdapter
         * @param options
         */

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            (0, _PropValueToData2.default)(options);
        }
    }]);

    return PropAdapter;
}(_BaseDataAdapter3.default);

exports.default = PropAdapter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 基础的通用属性定义
 */
var MetaType = __webpack_require__(1);
window.EnvConfig = window.EnvConfig || {};
var SUPPORT_SERVER = window.EnvConfig.SUPPORT_SERVER_URL;
var PRODUCT_TYPE_PAGE_SIMPLE = 2;
module.exports = function (options) {
    var productType = options.productType,
        tplNode = options.tplNode,
        currPage = options.currPage;

    var PropMeta = [{
        name: 'uikey',
        label: '键值',
        type: MetaType.Text,
        props: {},
        readOnly: !!(productType == PRODUCT_TYPE_PAGE_SIMPLE && currPage && currPage.isDevelopment !== 1),
        defaultValue: ''
    }, {
        name: 'uititle',
        label: '名称',
        type: MetaType.Text,
        props: {},
        defaultValue: ''
    }];
    if (tplNode && tplNode.MetaType == "YYPage") {
        PropMeta.push({
            name: 'themeClassName',
            label: '页面风格',
            help: '主题样式皮肤风格名称',
            type: MetaType.Select,
            props: {
                options: [{ text: '平台默认', value: '' }, { text: '公有云风格', value: 'GYY' }]
            },
            defaultValue: ''
        });
    }
    PropMeta = PropMeta.concat([{
        name: 'className',
        label: '定制样式',
        help: '自定义样式规则的名称，即：css的class名称',
        type: MetaType.Text,
        props: {},
        defaultValue: ''
    }, {
        name: 'specialTag',
        label: '特殊标识',
        type: MetaType.Refer,
        props: {
            refinfokey: 'defdoc-component_props',
            serverUrl: SUPPORT_SERVER
        },
        defaultValue: null
    }]);
    return PropMeta;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
    var formMeta = options.formMeta,
        tplNode = options.tplNode,
        tplTree = options.tplTree;

    var newFormData = {};
    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!meta) continue;
        switch (meta.name) {
            case "specialTag":
                {
                    if (tplNode[meta.name] !== undefined) {
                        newFormData[meta.name] = {};
                        newFormData[meta.name].id = tplNode[meta.name].id;
                        newFormData[meta.name].code = tplNode[meta.name].code;
                        newFormData[meta.name].name = tplNode[meta.name].name;
                    }
                    break;
                }
            case "uikey":
            case "uititle":
            case "themeClassName":
            case "className":
            default:
                if (tplNode[meta.name] !== undefined) {
                    newFormData[meta.name] = tplNode[meta.name];
                }
                break;
        }
    }
    return newFormData;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 去除前后多余空字符串
 * @param x
 * @return {*}
 */
function strTrim(x) {
    if (typeof x === 'string') {
        return x.replace(/^\s+|\s+$/gm, '');
    } else {
        return x;
    }
}
/**
 * 如果存在有效值，则设置属性值，否则清除属性
 */
function isExistSet(object, propName, propValue) {
    if (!object) return;
    if (propValue !== undefined && propValue !== '' && propValue !== null) {
        object[propName] = propValue;
    } else {
        delete object[propName];
    }
}
module.exports = function (options) {
    var formMeta = options.formMeta,
        formData = options.formData,
        tplNode = options.tplNode,
        tplTree = options.tplTree,
        keepDefaultValue = options.keepDefaultValue;

    for (var i = 0; i < formMeta.length; i++) {
        var meta = formMeta[i];
        if (!meta) continue;
        if (!(meta.name in formData)) continue;
        var value = formData[meta.name];
        value = strTrim(value); //去除前后多余空格
        switch (meta.name) {
            case "specialTag":
                {
                    if (value) {
                        tplNode[meta.name] = {};
                        tplNode[meta.name].id = value.id;
                        tplNode[meta.name].code = value.code;
                        tplNode[meta.name].name = value.name;
                    } else {
                        delete tplNode[meta.name];
                    }
                    break;
                }
            case "uikey":
            case "uititle":
            case "themeClassName":
            case "className":
            default:
                if (keepDefaultValue === false) {
                    //属性值=默认值则不保留此属性
                    //默认值===表单项值，则不生成节点属性
                    if (meta.defaultValue === value) {
                        delete tplNode[meta.name];
                    } else {
                        isExistSet(tplNode, meta.name, value);
                    }
                } else {
                    //保留属性默认值
                    tplNode[meta.name] = value;
                }
                break;
        }
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseDataAdapter2 = __webpack_require__(0);

var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

var _LogicUtils = __webpack_require__(10);

var _LogicUtils2 = _interopRequireDefault(_LogicUtils);

var _MetaType = __webpack_require__(1);

var _MetaType2 = _interopRequireDefault(_MetaType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 基础事件转换适配器
 */
var EventAdapter = function (_BaseDataAdapter) {
    _inherits(EventAdapter, _BaseDataAdapter);

    function EventAdapter() {
        _classCallCheck(this, EventAdapter);

        return _possibleConstructorReturn(this, (EventAdapter.__proto__ || Object.getPrototypeOf(EventAdapter)).apply(this, arguments));
    }

    _createClass(EventAdapter, [{
        key: 'onPageMetas',

        //--------------生命周期方法--------------------
        /**
         * @desc 参考 BaseDataAdapter
         * @param options
         */
        value: function onPageMetas(options) {
            var metas = [{
                name: 'onClick',
                label: '鼠标点击',
                type: _MetaType2.default.EventActions,
                props: {},
                defaultValue: null
            }];
            return metas;
        }

        /**
         * @desc 参考 BaseDataAdapter
         * @param options
         */

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {}

        /**
         * @desc 参考 BaseDataAdapter
         * @param options
         */

    }, {
        key: 'onCreateData',
        value: function onCreateData(options) {}

        /**
         * @desc 参考 BaseDataAdapter
         * @param options
         */

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var formMeta = options.formMeta,
                tplNode = options.tplNode,
                tplTree = options.tplTree;

            var newFormData = {};
            for (var i = 0; i < formMeta.length; i++) {
                var meta = formMeta[i];
                switch (meta.name) {
                    default:
                        if (tplNode.uievents[meta.name] !== undefined) {
                            newFormData[meta.name] = tplNode.uievents[meta.name];
                        }
                        break;
                }
            }
            return newFormData;
        }

        /**
         * @desc 参考 BaseDataAdapter
         * @param options
         */

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            var formMeta = options.formMeta,
                formData = options.formData,
                tplNode = options.tplNode,
                tplTree = options.tplTree;

            for (var i = 0; i < formMeta.length; i++) {
                var meta = formMeta[i];
                if (!(meta.name in formData)) continue;
                var value = formData[meta.name];
                switch (meta.name) {
                    default:
                        _LogicUtils2.default.isExistSet(tplNode.uievents, meta.name, value);
                        break;
                }
            }
        }
    }]);

    return EventAdapter;
}(_BaseDataAdapter3.default);

exports.default = EventAdapter;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    /**
    * 如果存在有效值，则设置属性值，否则清除属性
    */
    isExistSet: function isExistSet(object, propName, propValue) {
        if (!object) return;
        if (propValue !== undefined && propValue !== '' && propValue !== null) {
            object[propName] = propValue;
        } else {
            delete object[propName];
        }
    },
    /**
     * 如果等于指定值，则设置属性值，否则清除属性
     */
    isEqualSet: function isEqualSet(object, propName, propValue, eqValue) {
        if (!object) return;
        if (propValue === eqValue) {
            object[propName] = propValue;
        } else {
            delete object[propName];
        }
    },
    /**
     * 如果不等于指定值，则设置属性值，否则清除属性
     */
    isNotEqualSet: function isNotEqualSet(object, propName, propValue, eqValue) {
        if (!object) return;
        if (propValue !== eqValue) {
            object[propName] = propValue;
        } else {
            delete object[propName];
        }
    },
    /**
     * 如果等于指定值等于包含的任意一个值，则设置属性值，否则清除属性
     */
    isIncludeSet: function isIncludeSet(object, propName, propValue, eqValues) {
        if (!object) return;
        for (var i = 0; i < eqValues.length; i++) {
            if (propValue === eqValues[i]) {
                object[propName] = propValue;
                return;
            }
        }
        delete object[propName];
    },
    /**
     * 如果是true值，则设置属性值，否则清除属性
     */
    isTrueSet: function isTrueSet(object, propName, propValue) {
        this.isEqualSet(object, propName, propValue, true);
    },
    /**
     * 如果是false值，则设置属性值，否则清除属性
     */
    isFalseSet: function isFalseSet(object, propName, propValue) {
        this.isEqualSet(object, propName, propValue, false);
    }

};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 一套组件定义
 */
var UiDefines = function () {
    function UiDefines() {
        _classCallCheck(this, UiDefines);

        this.UiType = {};
        this.UiTitle = {};
        this.UiIcon = {};
        this.UiDefault = {};
        this.UiIsView = {};
    }

    /**
     * 添加一个组件的定义
     * @param primaryKey    主键标识
     * @param uitype        组件类型
     * @param uititle       组件名称
     * @param uiicon        组件图标
     * @param uidefault     组件缺省属性
     * @param uiisview      组件是否为视图
     */


    _createClass(UiDefines, [{
        key: 'add',
        value: function add(primaryKey, uitype, uititle, uiicon, uidefault, uiisview) {
            this.UiType[primaryKey] = uitype;
            this.UiTitle[primaryKey] = uititle;
            this.UiIcon[primaryKey] = uiicon;
            this.UiDefault[primaryKey] = uidefault;
            this.UiIsView[primaryKey] = typeof uiisview == 'boolean' ? uiisview : true;
        }

        /**
         * 移除一个组件的定义
         * @param primaryKey    主键标识
         */

    }, {
        key: 'remove',
        value: function remove(primaryKey) {
            delete this.UiType[primaryKey];
            delete this.UiTitle[primaryKey];
            delete this.UiIcon[primaryKey];
            delete this.UiDefault[primaryKey];
            delete this.UiIsView[primaryKey];
        }

        /**
         * 通过key获取一个组件的定义
         * @param primaryKey
         */

    }, {
        key: 'get',
        value: function get(primaryKey) {
            return {
                uitype: this.UiType[primaryKey],
                uititle: this.UiTitle[primaryKey],
                uiicon: this.UiIcon[primaryKey],
                uidefault: this.UiDefault[primaryKey],
                uiisview: this.UiIsView[primaryKey]
            };
        }

        /**
         * 通过uitype获取一个组件的定义(找到第一个匹配的即返回)
         * @param uitype
         */

    }, {
        key: 'getByUiType',
        value: function getByUiType(uitype) {
            for (var i in this.UiType) {
                if (this.UiType[i] == uitype) {
                    return this.get(i);
                }
            }
        }

        /**
         * 通过uitype获取一个组件的key
         * @param uitype
         */

    }, {
        key: 'getKeyByUiType',
        value: function getKeyByUiType(uitype) {
            for (var i in this.UiType) {
                if (this.UiType[i] == uitype) {
                    return i;
                }
            }
        }

        /**
         * 获取全部键值
         * @return {string[]}
         */

    }, {
        key: 'getKeys',
        value: function getKeys() {
            return Object.keys(this.UiType);
        }
    }]);

    return UiDefines;
}();

exports.default = UiDefines;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperAdapter2 = __webpack_require__(2);

var _SuperAdapter3 = _interopRequireDefault(_SuperAdapter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 全局性的逻辑适配器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GlobalAdapter = function (_SuperAdapter) {
    _inherits(GlobalAdapter, _SuperAdapter);

    function GlobalAdapter() {
        _classCallCheck(this, GlobalAdapter);

        return _possibleConstructorReturn(this, (GlobalAdapter.__proto__ || Object.getPrototypeOf(GlobalAdapter)).call(this));
    }
    /**
     * 构建组件的分组选择菜单列表
     * @param options
     * @return array 返回数据格式要求如下：
     * [
     * {
     *   uititle:"基础",  //分组名称
     *   uiicon: 'tag',  //分组图标
     *   children: [//本分组下的组件集合
     *     {
     *       uitype:'Button',  //组件标识
     *       uititle:'按钮',   //组件名称
     *       uiicon:'',       //组件图标
     *       uidefault:''     //组件缺省配置
     *     },
     *     ...//本分组下的更多其它组件
     *   ]
     * },
     * ...  //更多其它分组
     * ]
     */


    _createClass(GlobalAdapter, [{
        key: "onViewMenus",
        value: function onViewMenus(options) {}

        /**
         * 解析需要显示的源码内容
         * @param options
         * {
         *     data:object //需要解析的json数据对象
         * }
         * @return string //返回生成的源码字符串
         */

    }, {
        key: "onSourceCodes",
        value: function onSourceCodes(options) {}

        /**
         * 获取当前组件可用的子组件类型
         * @param options {tplNode}
         * @return array
         * 格式要求：
         * ['uiTypeSub1','uiTypeSub2',...]
         */

    }, {
        key: "onUiSubset",
        value: function onUiSubset(options) {}

        /**
         * 构建页面类型的可选列表
         * @param options
         * {
         *     currApp:object //当前应用信息
         * }
         */

    }, {
        key: "onPageTypes",
        value: function onPageTypes(options) {}
        /**
         * 新建页面时的触发的生命周期,主要用于处理缺省的页面节点数据
         * @param options
         */

    }, {
        key: "onDefaultPageData",
        value: function onDefaultPageData(options) {}

        /**
         * 页面数据保存时触发的生命周期
         * @param options {tplTree}
         */

    }, {
        key: "onSaveData",
        value: function onSaveData(options) {}

        /**
         * 获取当前组件可用的拖拽扩展按钮
         * @param options
         */

    }, {
        key: "onDndButtons",
        value: function onDndButtons(options) {
            /**
             * return [
             *      {
             *          key:''
             *          text:'',
             *          icon:''
             *      }
             * ]
             */
        }
    }]);

    return GlobalAdapter;
}(_SuperAdapter3.default);

exports.default = GlobalAdapter;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BaseDataAdapter = __webpack_require__(0);

var _BaseDataAdapter2 = _interopRequireDefault(_BaseDataAdapter);

var _BaseViewAdapter = __webpack_require__(3);

var _BaseViewAdapter2 = _interopRequireDefault(_BaseViewAdapter);

var _ViewAdapter = __webpack_require__(4);

var _ViewAdapter2 = _interopRequireDefault(_ViewAdapter);

var _PropAdapter = __webpack_require__(5);

var _PropAdapter2 = _interopRequireDefault(_PropAdapter);

var _EventAdapter = __webpack_require__(9);

var _EventAdapter2 = _interopRequireDefault(_EventAdapter);

var _MetaType = __webpack_require__(1);

var _MetaType2 = _interopRequireDefault(_MetaType);

var _UiDefines = __webpack_require__(11);

var _UiDefines2 = _interopRequireDefault(_UiDefines);

var _UiLibrary = __webpack_require__(14);

var _UiLibrary2 = _interopRequireDefault(_UiLibrary);

var _LogicUtils = __webpack_require__(10);

var _LogicUtils2 = _interopRequireDefault(_LogicUtils);

var _PluginAdapter = __webpack_require__(15);

var _PluginAdapter2 = _interopRequireDefault(_PluginAdapter);

var _GlobalAdapter = __webpack_require__(12);

var _GlobalAdapter2 = _interopRequireDefault(_GlobalAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    BaseDataAdapter: _BaseDataAdapter2.default,
    BaseViewAdapter: _BaseViewAdapter2.default,
    ViewAdapter: _ViewAdapter2.default,
    PropAdapter: _PropAdapter2.default,
    EventAdapter: _EventAdapter2.default,
    PluginAdapter: _PluginAdapter2.default,
    GlobalAdapter: _GlobalAdapter2.default,
    UiDefines: _UiDefines2.default,
    UiLibrary: _UiLibrary2.default,
    MetaType: _MetaType2.default,
    LogicUtils: _LogicUtils2.default
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UiDefines = __webpack_require__(11);

var _UiDefines2 = _interopRequireDefault(_UiDefines);

var _PropAdapter = __webpack_require__(5);

var _PropAdapter2 = _interopRequireDefault(_PropAdapter);

var _EventAdapter = __webpack_require__(9);

var _EventAdapter2 = _interopRequireDefault(_EventAdapter);

var _ViewAdapter = __webpack_require__(4);

var _ViewAdapter2 = _interopRequireDefault(_ViewAdapter);

var _GlobalAdapter = __webpack_require__(12);

var _GlobalAdapter2 = _interopRequireDefault(_GlobalAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 定义一套适配的组件库
 */
var UiLibrary = function () {
    /**
     * 构建一套组件库的适配套件
     * @param libraryName   组件库标识名
     * @param libraryVer    组件库版本号
     */
    function UiLibrary(libraryName, libraryVer) {
        _classCallCheck(this, UiLibrary);

        this.libraryName = libraryName;
        this.libraryVer = libraryVer;
        this.uiDefines = new _UiDefines2.default();
        this.propAdapters = {};
        this.eventAdapters = {};
        this.viewAdapters = {};
        this.globalAdapter = null;
    }

    /**
     * 获取组件库标识名
     * @return {*}
     */


    _createClass(UiLibrary, [{
        key: "getName",
        value: function getName() {
            return this.libraryName;
        }

        /**
         * 获取组件库版本号
         * @return {*}
         */

    }, {
        key: "getVersion",
        value: function getVersion() {
            return this.libraryVer;
        }
        /**
         * 添加一个组件的定义
         * @param primaryKey    主键标识
         * @param uitype        组件类型
         * @param uititle       组件名称
         * @param uiicon        组件图标
         * @param uidefault     组件缺省属性
         * @param uiisview      组件是否为视图
         */

    }, {
        key: "addDefine",
        value: function addDefine() {
            this.uiDefines.add.apply(this.uiDefines, arguments);
        }
        /**
         * 移除一个组件的定义
         * @param primaryKey    主键标识
         */

    }, {
        key: "removeDefine",
        value: function removeDefine(primaryKey) {
            this.uiDefines.remove(primaryKey);
        }

        /**
         * 获得一个组件的定义
         * @param primaryKey
         */

    }, {
        key: "getDefine",
        value: function getDefine(primaryKey) {
            return this.uiDefines.get(primaryKey);
        }

        /**
         * 获取全部组件的定义
         */

    }, {
        key: "getUiDefines",
        value: function getUiDefines() {
            return this.uiDefines;
        }

        /**
         * 注册全部组件的定义
         */

    }, {
        key: "setUiDefines",
        value: function setUiDefines(uiDefines) {
            if (uiDefines instanceof _UiDefines2.default) {
                this.uiDefines = uiDefines;
                return;
            }
            console.warn('setUiDefines fail ,that is not UiDefines class!');
        }

        /**
         * 添加属性适配类
         * @param primaryKey
         * @param AdapterClass 继承于PropAdapter的类
         */

    }, {
        key: "addPropAdapter",
        value: function addPropAdapter(primaryKey, AdapterClass) {
            if (typeof AdapterClass == 'function') {
                var adapter = new AdapterClass(primaryKey);
                if (adapter instanceof _PropAdapter2.default) {
                    this.propAdapters[primaryKey] = new AdapterClass(primaryKey);
                    return;
                }
            }
            console.warn('addPropAdapter fail ,that is not PropAdapter class!');
        }

        /**
         * 添加事件适配类
         * @param primaryKey
         * @param AdapterClass 继承于EventAdapter的类
         */

    }, {
        key: "addEventAdapter",
        value: function addEventAdapter(primaryKey, AdapterClass) {
            if (typeof AdapterClass == 'function') {
                var adapter = new AdapterClass(primaryKey);
                if (adapter instanceof _EventAdapter2.default) {
                    this.eventAdapters[primaryKey] = adapter;
                    return;
                }
            }
            console.warn('addEventAdapter fail ,that is not EventAdapter class!');
        }

        /**
         * 添加视图适配类
         * @param primaryKey
         * @param AdapterClass 继承于ViewAdapter的类
         */

    }, {
        key: "addViewAdapter",
        value: function addViewAdapter(primaryKey, AdapterClass) {
            if (typeof AdapterClass == 'function') {
                var adapter = new AdapterClass(primaryKey);
                if (adapter instanceof _ViewAdapter2.default) {
                    this.viewAdapters[primaryKey] = adapter;
                    return;
                }
            }
            console.warn('addEventAdapter fail ,that is not ViewAdapter class!');
        }

        /**
         * 获取属性适配实例
         * @param primaryKey
         * @return {*}
         */

    }, {
        key: "getPropAdapter",
        value: function getPropAdapter(primaryKey) {
            return this.propAdapters[primaryKey];
        }
        /**
         * 获取事件适配实例
         * @param primaryKey
         * @return {*}
         */

    }, {
        key: "getEventAdapter",
        value: function getEventAdapter(primaryKey) {
            return this.eventAdapters[primaryKey];
        }
        /**
         * 获取视图适配实例
         * @param primaryKey
         * @return {*}
         */

    }, {
        key: "getViewAdapter",
        value: function getViewAdapter(primaryKey) {
            return this.viewAdapters[primaryKey];
        }

        /**
         * 移除属性适配
         * @param primaryKey
         * @return {*}
         */

    }, {
        key: "removePropAdapter",
        value: function removePropAdapter(primaryKey) {
            delete this.propAdapters[primaryKey];
        }
        /**
         * 移除事件适配实例
         * @param primaryKey
         * @return {*}
         */

    }, {
        key: "removeEventAdapter",
        value: function removeEventAdapter(primaryKey) {
            delete this.eventAdapters[primaryKey];
        }
        /**
         * 移除视图适配实例
         * @param primaryKey
         * @return {*}
         */

    }, {
        key: "removeViewAdapter",
        value: function removeViewAdapter(primaryKey) {
            delete this.viewAdapters[primaryKey];
        }

        /**
         * 获取全部属性适配实例
         * @return {*}
         */

    }, {
        key: "getGlobalAdapter",


        /**
         * 获取全局适配器
         * @param primaryKey
         * @return {*}
         */
        value: function getGlobalAdapter() {
            return this.globalAdapter;
        }
        /**
         * 设置全局适配器
         * @param primaryKey
         * @return {*}
         */

    }, {
        key: "setGlobalAdapter",
        value: function setGlobalAdapter(globalAdapterClass) {
            if (typeof globalAdapterClass == 'function') {
                var adapter = new globalAdapterClass();
                if (adapter instanceof _GlobalAdapter2.default) {
                    this.globalAdapter = adapter;
                    return;
                }
            }
            console.warn('setGlobalAdapter fail ,that is not GlobalAdapter class!');
        }
    }, {
        key: "PropAdapters",
        get: function get() {
            var adapters = [];
            for (var key in this.propAdapters) {
                adapters.push(this.propAdapters[key]);
            }
            return adapters;
        }

        /**
         * 获取全部事件适配实例
         * @return {*}
         */

    }, {
        key: "EventAdapters",
        get: function get() {
            var adapters = [];
            for (var key in this.eventAdapters) {
                adapters.push(this.eventAdapters[key]);
            }
            return adapters;
        }

        /**
         * 获取全部视图适配实例
         * @return {*}
         */

    }, {
        key: "ViewAdapters",
        get: function get() {
            var adapters = [];
            for (var key in this.viewAdapters) {
                adapters.push(this.viewAdapters[key]);
            }
            return adapters;
        }
    }]);

    return UiLibrary;
}();

exports.default = UiLibrary;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseDataAdapter2 = __webpack_require__(0);

var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

var _MetaType = __webpack_require__(1);

var _MetaType2 = _interopRequireDefault(_MetaType);

var _PropMeta = __webpack_require__(6);

var _PropMeta2 = _interopRequireDefault(_PropMeta);

var _PropDataToValue = __webpack_require__(7);

var _PropDataToValue2 = _interopRequireDefault(_PropDataToValue);

var _PropValueToData = __webpack_require__(8);

var _PropValueToData2 = _interopRequireDefault(_PropValueToData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 插件转换适配器
 */
var PluginAdapter = function (_BaseDataAdapter) {
    _inherits(PluginAdapter, _BaseDataAdapter);

    function PluginAdapter() {
        _classCallCheck(this, PluginAdapter);

        return _possibleConstructorReturn(this, (PluginAdapter.__proto__ || Object.getPrototypeOf(PluginAdapter)).apply(this, arguments));
    }

    _createClass(PluginAdapter, [{
        key: 'onPageMetas',

        //--------------生命周期方法--------------------
        //配置页面的元数据
        value: function onPageMetas(options) {
            var baseMetas = (0, _PropMeta2.default)(options);
            baseMetas.unshift({
                name: 'uitype',
                label: '解析器',
                type: _MetaType2.default.Text,
                props: {},
                defaultValue: 'UnKnowWidget'
            });
            return baseMetas;
        }

        //数据转换为值的适配

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            return (0, _PropDataToValue2.default)(options);
        }

        //值转换为数据的适配

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            (0, _PropValueToData2.default)(options);
        }
    }]);

    return PluginAdapter;
}(_BaseDataAdapter3.default);

exports.default = PluginAdapter;

/***/ })
/******/ ]);
});