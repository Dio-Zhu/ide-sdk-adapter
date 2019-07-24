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