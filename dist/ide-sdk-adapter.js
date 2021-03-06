(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["IdeSdkAdapter"] = factory();
	else
		root["IdeSdkAdapter"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 所有适配器类均需要继承此超类
 */
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
   * 打开浏览器链接
   */
  Link: 'Link',
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
   * 按钮
   */
  Button: 'Button',
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

var _SuperAdapter2 = __webpack_require__(0);

var _SuperAdapter3 = _interopRequireDefault(_SuperAdapter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 视图转换适配器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ViewAdapter = function (_SuperAdapter) {
  _inherits(ViewAdapter, _SuperAdapter);

  /**
   * 构建对象
   * @param primaryKey 主键/组件标识
   */
  function ViewAdapter(primaryKey) {
    _classCallCheck(this, ViewAdapter);

    var _this = _possibleConstructorReturn(this, (ViewAdapter.__proto__ || Object.getPrototypeOf(ViewAdapter)).call(this));

    _this.primaryKey = primaryKey;
    return _this;
  }

  /**
   * 获取主键/组件标识
   * @return {string}
   */


  _createClass(ViewAdapter, [{
    key: "getPrimaryKey",
    value: function getPrimaryKey() {
      return this.primaryKey;
    }

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

  }, {
    key: "onDataView",
    value: function onDataView(options) {}

    /**
     *  @desc 当前数据节点下添加子数据节点时的校验
     *  @param options:{
     *      tplTree,     //当前数据树
     *      tplNode,     //当前数据节点对象
     *      tplChildNode, //即将添加的子数据节点对象
     *      isPart, //UI部件
     *      isExt   //UI扩展
     *   }
     *  @return
     * {
     *   uititle: '消息提示内容',
     *   uitype: 'message',
     *   type: 'error|warning|info|success'
     * }
     */

  }, {
    key: "onDataValid",
    value: function onDataValid(options) {}

    /**
     * 当数据节点被移除时的校验
     * @param options:{
     *     tplTree, //当前数据树
     *     tplNode, //当前删除的节点
     * }
     * @return
     * {
     *   uititle: '消息内容',
     *   uitype: 'message',
     *   type: 'error|warning|info|success'
     * }
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
     *     tplTargetNode,//移动相对的目标节点
     *     position,     //移动相对目标节点的位置 "before|left|top"目标节点前、"after|right|top"目标节点后、"insert"目标节点里面
     *   }
     * @return
     * {
     *   uititle: '消息内容',
     *   uitype: 'message',
     *   type: 'error|warning|info|success'
     * }
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
}(_SuperAdapter3.default);

exports.default = ViewAdapter;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseDataAdapter2 = __webpack_require__(4);

var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetaType = __webpack_require__(1);
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
         * @desc 构建适配页面(元数据)
         * @param options
         * {
         *     tplNode,     //当前数据节点值
         *     tplTree,     //当前数据树
         *     productType, //所属产品类型
         *     currApp,     //所属应用信息
         *     currPage,    //所属页面信息
         *     pageList,     //所属应用下的全部页面信息
         *     currDataSource //当前属性数据源
         * }
         * @return {Array} 元数据数组集合 @link 请参考PageMeta说明
         */
        value: function onPageMetas(options) {
            var _ref = options || {},
                currDataSource = _ref.currDataSource;

            if (currDataSource) {
                return currDataSource;
            } else {
                return [{
                    name: 'uikey',
                    label: '键值',
                    type: MetaType.Text,
                    props: {},
                    defaultValue: ''
                }, {
                    name: 'uititle',
                    label: '名称',
                    type: MetaType.Text,
                    props: {},
                    defaultValue: ''
                }];
            }
        }

        /**
         * @desc 构建适配页面(属性)
         * @param options {无}
         * @return {object} 适配页面的属性 @link 请参考PageProp说明
         */

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {}

        /**
         * @override
         * @desc 参考 BaseDataAdapter
         * @param options
         */

    }, {
        key: 'onDataToValue',
        value: function onDataToValue(options) {
            var _ref2 = options || {},
                formMeta = _ref2.formMeta,
                tplNode = _ref2.tplNode,
                tplTree = _ref2.tplTree;

            var newFormData = {};
            formMeta = formMeta || [];
            for (var i = 0; i < formMeta.length; i++) {
                var meta = formMeta[i];
                if (!meta) continue;
                switch (meta.name) {
                    case "uikey":
                    case "uititle":
                    default:
                        if (tplNode[meta.name] !== undefined) {
                            newFormData[meta.name] = tplNode[meta.name];
                        }
                        break;
                }
            }
            return newFormData;
        }

        /**
         * @override
         * @desc 参考 BaseDataAdapter
         * @param options
         * @return 无
         */

    }, {
        key: 'onValueToData',
        value: function onValueToData(options) {
            var _ref3 = options || {},
                formMeta = _ref3.formMeta,
                formData = _ref3.formData,
                tplNode = _ref3.tplNode,
                tplTree = _ref3.tplTree,
                keepDefaultValue = _ref3.keepDefaultValue;

            formMeta = formMeta || [];
            for (var i = 0; i < formMeta.length; i++) {
                var meta = formMeta[i];
                if (!meta) continue;
                if (!(meta.name in formData)) continue;
                var value = formData[meta.name];
                // value = strTrim(value);//去除前后多余空格
                switch (meta.name) {
                    case "uikey":
                    case "uititle":
                    default:
                        if (keepDefaultValue === false) {
                            //属性实际值与其默认值相同时则不保留此属性
                            //默认值===实际值（表单项值），则不生成节点属性
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
        }
    }]);

    return PropAdapter;
}(_BaseDataAdapter3.default);

exports.default = PropAdapter;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperAdapter2 = __webpack_require__(0);

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
     *  @desc 新建数据节点时触发
     *  @param options:{
     *      tplTree,        //当前数据树
     *      tplNode,        //当前添加的数据节点对象
     *      tplParentNode,   //当前对应的父节点对象
     *      isPart,          //是否为部件
     *      targetParams,   //拖拽创建时目标dom节点的uiparams属性值
     *      forTargetParams,//拖拽创建时目标dom节点为fornid属性的uiparams属性值
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
     *     tplTargetNode,//移动相对的目标节点
     *     position,     //移动相对目标节点的位置 "before|left|top"移动到目标节点前、"after|right|top"移动到目标节点后、"insert"插入目标节点里面
     *     targetParams,   //拖拽创建时目标dom节点的uiparams属性值
     *     forTargetParams//拖拽创建时目标dom节点为fornid属性的uiparams属性值
     * }
     */

  }, {
    key: "onMoveData",
    value: function onMoveData(options) {}

    /**
     * @desc 数据节点被删除/移除时触发
     * @param options
     * {
     *     tplTree, //节点删除后的数据树
     *     tplNode, //被删除的节点
     * }
     */

  }, {
    key: "onDeleteData",
    value: function onDeleteData(options) {}

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseDataAdapter2 = __webpack_require__(4);

var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

var _LogicUtils = __webpack_require__(6);

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
/* 6 */
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
/* 7 */
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
     * @param primaryKey {string}    必填，主键标识
     * @param uitype  {string}       必填，组件标识名
     * @param uititle {string}       必填，组件描述名
     * @param uiicon  {string}       可选，组件图标
     * @param uidefault {object}     可选，组件缺省属性
     * @param uiisview  {boolean}    可选，组件是否为视图,默认true
     */


    _createClass(UiDefines, [{
        key: 'add',
        value: function add(primaryKey, uitype, uititle, uiicon, uidefault, uiisview) {
            this.UiType[primaryKey] = uitype;
            this.UiTitle[primaryKey] = uititle;
            this.UiIcon[primaryKey] = uiicon;
            this.UiDefault[primaryKey] = uidefault;
            this.UiIsView[primaryKey] = typeof uiisview == 'boolean' ? uiisview : undefined;
        }

        /**
         * 更新一个组件的定义
         * @param uitype  {string}       必填，组件标识名（唯一）
         * @param uititle {string}       必填，组件描述名
         * @param uiicon  {string}       可选，组件图标
         * @param uidefault {object}     可选，组件缺省属性
         * @param uiisview  {boolean}    可选，组件是否为视图,默认true
         */

    }, {
        key: 'set',
        value: function set(uitype, uititle, uiicon, uidefault, uiisview) {
            this.UiType[uitype] = uitype;
            this.UiTitle[uitype] = uititle;
            this.UiIcon[uitype] = uiicon;
            this.UiDefault[uitype] = uidefault;
            this.UiIsView[uitype] = typeof uiisview == 'boolean' ? uiisview : undefined;
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SuperAdapter2 = __webpack_require__(0);

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
   * {
   *     currDataSource:[]//当前数据源
   * }
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
    value: function onViewMenus(options) {
      var _ref = options || {},
          currDataSource = _ref.currDataSource;

      return currDataSource;
    }

    /**
     * 构建自定义配置面板
     * @param options
     * @return array 返回数据格式要求如下：
     * [
     * {
     *   key:"",          //面板编码
     *   title:"基础",     //面板名称
     *   url:''           //面板页面地址
     *   type:''          //面板类型，"left"-左面板、"right"-右面板(默认)、"center"-中间面板
     * },
     * ...  //更多其它分组
     * ]
     */

  }, {
    key: "onViewPanes",
    value: function onViewPanes(options) {
      var _ref2 = options || {},
          currDataSource = _ref2.currDataSource;

      return currDataSource;
    }

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
     * @param options
     * {
     *  tplNode,//当前父组件
     *  tplChildNode,//当前子组件
     *  currDataSource,//当前配置数据
     *  isPart,//是否ui部件
     *  isExt //是否ui扩展
     * }
     * @return array
     * 格式要求：
     * ['uiTypeSub1','uiTypeSub2',...]
     */

  }, {
    key: "onUiSubset",
    value: function onUiSubset(options) {
      var _ref3 = options || {},
          currDataSource = _ref3.currDataSource;

      return currDataSource;
    }

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
     *  @desc 新数据节点创建完成后触发
     *  @param options:{
     *      tplTree,        //当前数据树
     *      tplNode,        //当前添加的数据节点对象
     *      tplParentNode,   //当前对应的父节点对象
     *      isPart          //是否为部件
     *   }
     *   @return {无}
     */

  }, {
    key: "onCreateDataComplete",
    value: function onCreateDataComplete(options) {}

    /**
     * 获取页面可用的扩展按钮
     * @param options:{
     *     currApp,//当前应用
     *     currPage//当前页面
     * }
     * @return 要求返回的结果格式如下：
     * [
     *      {
     *          key:''  //按钮唯一值
     *          text:'',//按钮文本
     *          disabled:false,//按钮是否禁用
     *          onClick:function(info){//按钮点击事件
     *			    let {tplTree,tplNode} = info;
     *              console.log("当前树数据：",info.tplTree);
     *              console.log("当前选中节点数据：",info.tplNode);
     *          }
     *      }
     * ]
     */

  }, {
    key: "onPageButtons",
    value: function onPageButtons(options) {}

    /**
     * 获取当前组件可用的拖拽扩展按钮
     * @param options
     * @return 要求返回的结果格式如下：
     * [
     *      {
     *          key:''
     *          text:'',
     *          icon:''
     *      }
     * ]
     */

  }, {
    key: "onDndButtons",
    value: function onDndButtons(options) {}

    /**
     * 获取当前的配置信息
     * @param options:{
     *     tplTree, //当前树数据
     *     tplNode, //当前选中节点
     *     config,  //当前全部配置项的默认值
     *     configKey//当前配置项
     * }
     */

  }, {
    key: "onConfig",
    value: function onConfig(options) {}
  }]);

  return GlobalAdapter;
}(_SuperAdapter3.default);

exports.default = GlobalAdapter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ViewAdapter = __webpack_require__(2);

var _ViewAdapter2 = _interopRequireDefault(_ViewAdapter);

var _PropAdapter = __webpack_require__(3);

var _PropAdapter2 = _interopRequireDefault(_PropAdapter);

var _EventAdapter = __webpack_require__(5);

var _EventAdapter2 = _interopRequireDefault(_EventAdapter);

var _MetaType = __webpack_require__(1);

var _MetaType2 = _interopRequireDefault(_MetaType);

var _UiDefines = __webpack_require__(7);

var _UiDefines2 = _interopRequireDefault(_UiDefines);

var _UiLibrary = __webpack_require__(10);

var _UiLibrary2 = _interopRequireDefault(_UiLibrary);

var _LogicUtils = __webpack_require__(6);

var _LogicUtils2 = _interopRequireDefault(_LogicUtils);

var _GlobalAdapter = __webpack_require__(8);

var _GlobalAdapter2 = _interopRequireDefault(_GlobalAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    ViewAdapter: _ViewAdapter2.default,
    PropAdapter: _PropAdapter2.default,
    EventAdapter: _EventAdapter2.default,
    // PluginAdapter,
    GlobalAdapter: _GlobalAdapter2.default,
    UiDefines: _UiDefines2.default,
    UiLibrary: _UiLibrary2.default,
    MetaType: _MetaType2.default,
    LogicUtils: _LogicUtils2.default
};
// import PluginAdapter from './PluginAdapter';//待移出

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UiDefines = __webpack_require__(7);

var _UiDefines2 = _interopRequireDefault(_UiDefines);

var _PropAdapter = __webpack_require__(3);

var _PropAdapter2 = _interopRequireDefault(_PropAdapter);

var _EventAdapter = __webpack_require__(5);

var _EventAdapter2 = _interopRequireDefault(_EventAdapter);

var _ViewAdapter = __webpack_require__(2);

var _ViewAdapter2 = _interopRequireDefault(_ViewAdapter);

var _GlobalAdapter = __webpack_require__(8);

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
        this.extPropAdapter = null; //扩展组件的PropAdapter
        this.extViewAdapter = null; //扩展组件的ViewAdapter
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
         * @return {*}
         */
        value: function getGlobalAdapter() {
            return this.globalAdapter;
        }
        /**
         * 设置全局适配器
         * @param globalAdapterClass
         * @return {*}
         */

    }, {
        key: "setGlobalAdapter",
        value: function setGlobalAdapter(globalAdapterClass) {
            if (typeof globalAdapterClass == 'function') {
                var adapter = new globalAdapterClass();
                if (adapter instanceof _GlobalAdapter2.default) {
                    this.globalAdapter = adapter;
                } else {
                    console.warn('setGlobalAdapter fail ,that is not GlobalAdapter class!');
                }
            }
        }

        /**
         * 获取扩展组件的属性适配器
         * @return {*}
         */

    }, {
        key: "getExtPropAdapter",
        value: function getExtPropAdapter() {
            return this.extPropAdapter;
        }
        /**
         * 设置扩展组件的属性适配器
         * @param propAdapterClass
         * @return {*}
         */

    }, {
        key: "setExtPropAdapter",
        value: function setExtPropAdapter(propAdapterClass) {
            if (typeof propAdapterClass == 'function') {
                var adapter = new propAdapterClass();
                if (adapter instanceof _PropAdapter2.default) {
                    this.extPropAdapter = adapter;
                } else {
                    console.warn('setExtPropAdapter fail ,that is not PropAdapter class!');
                }
            }
        }

        /**
         * 获取扩展组件的视图适配器
         * @return {*}
         */

    }, {
        key: "getExtViewAdapter",
        value: function getExtViewAdapter() {
            return this.extViewAdapter;
        }
        /**
         * 设置扩展组件的视图适配器
         * @param viewAdapterClass
         * @return {*}
         */

    }, {
        key: "setExtViewAdapter",
        value: function setExtViewAdapter(viewAdapterClass) {
            if (typeof viewAdapterClass == 'function') {
                var adapter = new viewAdapterClass();
                if (adapter instanceof _ViewAdapter2.default) {
                    this.extViewAdapter = adapter;
                } else {
                    console.warn('setExtViewAdapter fail ,that is not ViewAdapter class!');
                }
            }
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

/***/ })
/******/ ]);
});