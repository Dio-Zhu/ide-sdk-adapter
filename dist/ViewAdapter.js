"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseViewAdapter2 = require("./BaseViewAdapter");

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
     * 数据节点视图
     */
    value: function onDataView(options) {}

    /**
     *  数据节点校验
     *  @param options:{
     *      tplTree - 当前树结构
     *      tplNode - 当前自身节点
     *      tplChildNode - 即将添加的子节点对象
     *   }
     */

  }, {
    key: "onDataValid",
    value: function onDataValid(options) {}
  }]);

  return ViewAdapter;
}(_BaseViewAdapter3.default);

exports.default = ViewAdapter;