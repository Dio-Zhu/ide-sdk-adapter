"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 数据转换适配器
 */
var BaseDataAdapter = function () {
    function BaseDataAdapter(primaryKey) {
        _classCallCheck(this, BaseDataAdapter);

        this.primaryKey = primaryKey;
    }

    _createClass(BaseDataAdapter, [{
        key: "getPrimaryKey",
        value: function getPrimaryKey() {
            return this.primaryKey;
        }
        //--------------生命周期方法--------------------
        //配置页面的元数据

    }, {
        key: "onPageMetas",
        value: function onPageMetas(options) {}

        //配置页面的属性

    }, {
        key: "onPageProps",
        value: function onPageProps(options) {}

        //数据转换为值的适配

    }, {
        key: "onDataToValue",
        value: function onDataToValue(options) {}

        //值转换为数据的适配

    }, {
        key: "onValueToData",
        value: function onValueToData(options) {}

        /**
         *  当前数据节点构建时的回调
         *  @param options:{
         *      tplTree - 当前树结构
         *      tplNode - 当前即将添加的自身节点对象
         *      tplParentNode - 当前自身节点对应的父节点对象
         *   }
         */

    }, {
        key: "onCreateData",
        value: function onCreateData(options) {}
    }]);

    return BaseDataAdapter;
}();

exports.default = BaseDataAdapter;