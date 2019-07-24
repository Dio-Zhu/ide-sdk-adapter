import BaseDataAdapter from './BaseDataAdapter';
import MetaType from './MetaType';
import PropMeta from './PropMeta';
import PropDataToValue from './PropDataToValue';
import PropValueToData from './PropValueToData';
/**
 * 插件转换适配器
 */
export default class PluginAdapter extends BaseDataAdapter{
    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = PropMeta(options);
        baseMetas.unshift({
            name: 'uitype',
            label: '解析器',
            type: MetaType.Text,
            props: {},
            defaultValue:'UnKnowWidget'
        });
        return baseMetas;
    }

    //数据转换为值的适配
    onDataToValue(options){
        return PropDataToValue(options);
    }

    //值转换为数据的适配
    onValueToData(options){
        PropValueToData(options);
    }
}