/**
 * 视图转换适配器
 */
import BaseViewAdapter from "./BaseViewAdapter";

export default class ViewAdapter extends BaseViewAdapter{
    //--------------生命周期方法--------------------
    /**
     * 数据节点视图
     */
    onDataView(options){}

    /**
     *  数据节点校验
     *  @param options:{
     *      tplTree - 当前树结构
     *      tplNode - 当前自身节点
     *      tplChildNode - 即将添加的子节点对象
     *   }
     */
    onDataValid(options){}
}