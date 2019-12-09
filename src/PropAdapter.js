import BaseDataAdapter from './BaseDataAdapter';
import PropDataToValue from './PropDataToValue';
import PropValueToData from './PropValueToData';
/**
 * 属性转换适配器
 */
export default class PropAdapter extends BaseDataAdapter{
    //--------------生命周期方法--------------------
    /**
     * @desc 构建适配页面(元数据)
     * @param options
     * {
     *     tplNode,     //当前数据节点值
     *     tplTree,     //当前数据树
     *     productType, //所属产品类型
     *     currApp,     //所属应用信息
     *     currPage,    //所属页面信息
     *     pageList     //所属应用下的全部页面信息
     * }
     * @return {Array} 元数据数组集合 @link 请参考PageMeta说明
     */
    onPageMetas(options) {
    }

    /**
     * @desc 构建适配页面(属性)
     * @param options {无}
     * @return {object} 适配页面的属性 @link 请参考PageProp说明
     */
    onPageProps(options) {
    }


    /**
     * @override
     * @desc 参考 BaseDataAdapter
     * @param options
     */
    onDataToValue(options){
        return PropDataToValue(options);
    }

    /**
     * @override
     * @desc 参考 BaseDataAdapter
     * @param options
     */
    onValueToData(options){
        PropValueToData(options);
    }


}