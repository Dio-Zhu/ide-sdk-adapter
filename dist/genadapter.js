(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GenAdapter"] = factory();
	else
		root["GenAdapter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _BaseDataAdapter = __webpack_require__(2);

	var _BaseDataAdapter2 = _interopRequireDefault(_BaseDataAdapter);

	var _BaseViewAdapter = __webpack_require__(3);

	var _BaseViewAdapter2 = _interopRequireDefault(_BaseViewAdapter);

	var _ViewAdapter = __webpack_require__(4);

	var _ViewAdapter2 = _interopRequireDefault(_ViewAdapter);

	var _PropAdapter = __webpack_require__(5);

	var _PropAdapter2 = _interopRequireDefault(_PropAdapter);

	var _EventAdapter = __webpack_require__(10);

	var _EventAdapter2 = _interopRequireDefault(_EventAdapter);

	var _MetaType = __webpack_require__(7);

	var _MetaType2 = _interopRequireDefault(_MetaType);

	var _UiDefines = __webpack_require__(12);

	var _UiDefines2 = _interopRequireDefault(_UiDefines);

	var _UiLibrary = __webpack_require__(13);

	var _UiLibrary2 = _interopRequireDefault(_UiLibrary);

	var _LogicUtils = __webpack_require__(11);

	var _LogicUtils2 = _interopRequireDefault(_LogicUtils);

	var _PluginAdapter = __webpack_require__(14);

	var _PluginAdapter2 = _interopRequireDefault(_PluginAdapter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    BaseDataAdapter: _BaseDataAdapter2.default,
	    BaseViewAdapter: _BaseViewAdapter2.default,
	    ViewAdapter: _ViewAdapter2.default,
	    PropAdapter: _PropAdapter2.default,
	    EventAdapter: _EventAdapter2.default,
	    PluginAdapter: _PluginAdapter2.default,
	    UiDefines: _UiDefines2.default,
	    UiLibrary: _UiLibrary2.default,
	    MetaType: _MetaType2.default,
	    LogicUtils: _LogicUtils2.default
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * 基础数据转换适配器
	 */
	var BaseDataAdapter = function () {
	    /**
	     * @desc 构建对象
	     * @param primaryKey 主键/组件标识
	     */
	    function BaseDataAdapter(primaryKey) {
	        _classCallCheck(this, BaseDataAdapter);

	        this.primaryKey = primaryKey;
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
	         * @param options {
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
	}();

	exports.default = BaseDataAdapter;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * 基础视图转换适配器
	 */
	var BaseViewAdapter = function () {
	    /**
	     * 构建对象
	     * @param primaryKey 主键/组件标识
	     */
	    function BaseViewAdapter(primaryKey) {
	        _classCallCheck(this, BaseViewAdapter);

	        this.primaryKey = primaryKey;
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
	}();

	exports.default = BaseViewAdapter;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

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
	     * @param options {
	     *     tplNode,     //当前数据节点对象
	     *     tplTree,     //当前数据树
	     * }
	     * @return {Array} 视图元数据集合 @link 请参考ViewMeta说明
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
	  }]);

	  return ViewAdapter;
	}(_BaseViewAdapter3.default);

	exports.default = ViewAdapter;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BaseDataAdapter2 = __webpack_require__(2);

	var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

	var _PropMeta = __webpack_require__(6);

	var _PropMeta2 = _interopRequireDefault(_PropMeta);

	var _PropDataToValue = __webpack_require__(8);

	var _PropDataToValue2 = _interopRequireDefault(_PropDataToValue);

	var _PropValueToData = __webpack_require__(9);

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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * 基础的通用属性定义
	 */
	var MetaType = __webpack_require__(7);
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

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * 适配页面元数据的输入类型定义
	 */
	module.exports = {
	    /** css 类型-已过期begin */
	    // Background: 'Background',
	    // Border: 'Border',
	    // Radius: 'Radius',
	    // Font: 'Font',
	    // Margin: 'Margin',
	    // Size: 'Size',
	    // Padding: 'Padding',
	    /***css 类型-已过期end***/
	    /** 基本类型 */
	    Bool: 'Bool',
	    Checkbox: 'Checkbox',
	    Color: 'Color',
	    Select: 'Select',
	    Text: 'Text',
	    Icon: 'Icon',
	    Number: 'Number',
	    Date: 'Date',
	    Time: 'Time',
	    Refer: 'Refer',
	    SelectTree: 'SelectTree',
	    Textarea: 'Textarea',
	    TitleGroup: 'TitleGroup', //表头合并配置
	    EventActions: 'EventActions', //组织事件动作配置
	    MathFormula: 'MathFormula', //计算公式列配置
	    LogicFormula: 'LogicFormula', //逻辑公式配置
	    EditorIcons: 'EditorIcons',
	    Pagination: 'Pagination', //分页配置
	    SwitchText: 'SwitchText',
	    EnumSelect: 'EnumSelect',
	    ReferEditRelation: 'ReferEditRelation', // 参照编辑关联项
	    LocalData: 'LocalData', //数据表格本地数据源配置
	    RowMenu: 'RowMenu',
	    FilterAreaConfig: 'FilterAreaConfig',
	    EChartData: 'EChartData'
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (options) {
	    var formMeta = options.formMeta,
	        tplNode = options.tplNode,
	        tplTree = options.tplTree;

	    var newFormData = {};
	    for (var i = 0; i < formMeta.length; i++) {
	        var meta = formMeta[i];
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

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

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
	        tplTree = options.tplTree;

	    for (var i = 0; i < formMeta.length; i++) {
	        var meta = formMeta[i];
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
	                //默认值===表单项值，则不生成节点属性
	                if (meta.defaultValue === value) {
	                    delete tplNode[meta.name];
	                } else {
	                    isExistSet(tplNode, meta.name, value);
	                }
	                break;

	        }
	    }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BaseDataAdapter2 = __webpack_require__(2);

	var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

	var _LogicUtils = __webpack_require__(11);

	var _LogicUtils2 = _interopRequireDefault(_LogicUtils);

	var _MetaType = __webpack_require__(7);

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

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

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

/***/ },
/* 12 */
/***/ function(module, exports) {

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
	    }

	    /**
	     * 添加一个组件的定义
	     * @param primaryKey    主键标识
	     * @param uitype        组件类型
	     * @param uititle       组件名称
	     * @param uiicon        组件图标
	     * @param uidefault     组件缺省属性
	     */


	    _createClass(UiDefines, [{
	        key: "add",
	        value: function add(primaryKey, uitype, uititle, uiicon, uidefault) {
	            this.UiType[primaryKey] = uitype;
	            this.UiTitle[primaryKey] = uititle;
	            this.UiIcon[primaryKey] = uiicon;
	            this.UiDefault[primaryKey] = uidefault;
	        }

	        /**
	         * 移除一个组件的定义
	         * @param primaryKey    主键标识
	         */

	    }, {
	        key: "remove",
	        value: function remove(primaryKey) {
	            delete this.UiType[primaryKey];
	            delete this.UiTitle[primaryKey];
	            delete this.UiIcon[primaryKey];
	            delete this.UiDefault[primaryKey];
	        }

	        /**
	         * 获得一个组件的定义
	         * @param primaryKey
	         */

	    }, {
	        key: "get",
	        value: function get(primaryKey) {
	            return {
	                uitype: this.UiType[primaryKey],
	                uititle: this.UiTitle[primaryKey],
	                uiicon: this.UiIcon[primaryKey],
	                uidefault: this.UiDefault[primaryKey]
	            };
	        }
	    }]);

	    return UiDefines;
	}();

	exports.default = UiDefines;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _UiDefines = __webpack_require__(12);

	var _UiDefines2 = _interopRequireDefault(_UiDefines);

	var _PropAdapter = __webpack_require__(5);

	var _PropAdapter2 = _interopRequireDefault(_PropAdapter);

	var _EventAdapter = __webpack_require__(10);

	var _EventAdapter2 = _interopRequireDefault(_EventAdapter);

	var _ViewAdapter = __webpack_require__(4);

	var _ViewAdapter2 = _interopRequireDefault(_ViewAdapter);

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
	    }
	    /**
	     * 添加一个组件的定义
	     * @param primaryKey    主键标识
	     * @param uitype        组件类型
	     * @param uititle       组件名称
	     * @param uiicon        组件图标
	     * @param uidefault     组件缺省属性
	     */


	    _createClass(UiLibrary, [{
	        key: "addDefine",
	        value: function addDefine(primaryKey, uitype, uititle, uiicon, uidefault) {
	            this.uiDefines.add(primaryKey, uitype, uititle, uiicon, uidefault);
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
	        key: "addPropAdapter",


	        /**
	         * 添加属性适配类
	         * @param primaryKey
	         * @param AdapterClass 继承于PropAdapter的类
	         */
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
	        key: "UiDefines",
	        get: function get() {
	            return this.uiDefines;
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

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BaseDataAdapter2 = __webpack_require__(2);

	var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

	var _MetaType = __webpack_require__(7);

	var _MetaType2 = _interopRequireDefault(_MetaType);

	var _PropMeta = __webpack_require__(6);

	var _PropMeta2 = _interopRequireDefault(_PropMeta);

	var _PropDataToValue = __webpack_require__(8);

	var _PropDataToValue2 = _interopRequireDefault(_PropDataToValue);

	var _PropValueToData = __webpack_require__(9);

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

/***/ }
/******/ ])
});
;