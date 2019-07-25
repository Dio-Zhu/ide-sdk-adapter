"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UiDefines = require("./UiDefines");

var _UiDefines2 = _interopRequireDefault(_UiDefines);

var _PropAdapter = require("./PropAdapter");

var _PropAdapter2 = _interopRequireDefault(_PropAdapter);

var _EventAdapter = require("./EventAdapter");

var _EventAdapter2 = _interopRequireDefault(_EventAdapter);

var _ViewAdapter = require("./ViewAdapter");

var _ViewAdapter2 = _interopRequireDefault(_ViewAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 定义一套适配的组件库
 */
var UiLibrary = function () {
    function UiLibrary() {
        _classCallCheck(this, UiLibrary);

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
    }]);

    return UiLibrary;
}();

exports.default = UiLibrary;