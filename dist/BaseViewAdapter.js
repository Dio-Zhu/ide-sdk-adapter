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