'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseDataAdapter2 = require('./BaseDataAdapter');

var _BaseDataAdapter3 = _interopRequireDefault(_BaseDataAdapter2);

var _LogicUtils = require('./LogicUtils');

var _LogicUtils2 = _interopRequireDefault(_LogicUtils);

var _MetaType = require('./MetaType');

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

        // constructor(primaryKey){
        //     super(primaryKey);
        // }
        //--------------生命周期方法--------------------
        //配置页面的元数据
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

        //配置页面的属性

    }, {
        key: 'onPageProps',
        value: function onPageProps(options) {}

        //数据转换为值的适配

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

        //值转换为数据的适配

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