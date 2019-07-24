'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseDataAdapter2 = require('./BaseDataAdapter');

var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

var _MetaType = require('./MetaType');

var _MetaType2 = _interopRequireDefault(_MetaType);

var _PropMeta = require('./PropMeta');

var _PropMeta2 = _interopRequireDefault(_PropMeta);

var _PropDataToValue = require('./PropDataToValue');

var _PropDataToValue2 = _interopRequireDefault(_PropDataToValue);

var _PropValueToData = require('./PropValueToData');

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