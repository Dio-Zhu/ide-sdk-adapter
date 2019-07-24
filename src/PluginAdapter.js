import BaseDataAdapter from './BaseDataAdapter';

import BasePropMeta from './PropMeta';
import BasePropValues from './PropValues';
import BasePropToValues from './PropToValues';
import MetaType from './MetaType';
/**
 * 插件转换适配器
 */
export default class PluginAdapter extends BaseDataAdapter{
    // constructor(primaryKey){
    //     super(primaryKey);
    // }
    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        let baseMetas = BasePropMeta(options);
        baseMetas.unshift({
            name: 'uitype',
            label: '解析器',
            type: MetaType.Text,
            props: {},
            defaultValue:'UnKnowWidget'
        });
        return baseMetas;
    }

    //配置页面的属性
    onPageProps(options){

    }

    //数据转换为值的适配
    onDataToValue(options){
        return BasePropValues(options);
    }

    //值转换为数据的适配
    onValueToData(options){
        BasePropToValues(options);
    }
}