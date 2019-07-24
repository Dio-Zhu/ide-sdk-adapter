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