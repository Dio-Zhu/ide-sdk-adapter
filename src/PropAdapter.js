import BaseDataAdapter from './BaseDataAdapter';
import PropMeta from './PropMeta';
import PropValues from './PropValues';
import PropToValues from './PropToValues';
/**
 * 基础属性转换适配器
 */
export default class PropAdapter extends BaseDataAdapter{
    // constructor(primaryKey){
    //     super(primaryKey);
    // }
    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        return PropMeta(options);
    }

    //配置页面的属性
    onPageProps(options){

    }

    //数据转换为值的适配
    onDataToValue(options){
        return PropValues(options);
    }

    //值转换为数据的适配
    onValueToData(options){
        PropToValues(options);
    }

    // /**
    //  *  当前数据节点构建时的回调
    //  *  @param options:{
    //  *      tplTree - 当前树结构
    //  *      tplNode - 当前即将添加的新节点对象
    //  *      tplParentNode - 当前新节点对应的父节点对象
    //  *     }
    //  */
    // onCreateData(options){
    // }

}