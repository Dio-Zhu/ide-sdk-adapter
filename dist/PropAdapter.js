'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseDataAdapter2 = require('./BaseDataAdapter');

var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

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