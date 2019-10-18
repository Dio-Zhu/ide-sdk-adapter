/**
 * 视图转换适配器
 */
import BaseViewAdapter from "./BaseViewAdapter";

export default class ViewAdapter extends BaseViewAdapter{
    //--------------生命周期方法--------------------
    /**
     * @desc 构建数据节点的显示视图
     * @param options
     * {
     *     tplNode,     //当前数据节点对象
     *     tplTree,     //当前数据树
     * }
     * @return {Array} 视图元数据集合 @link 请参考ViewMeta说明
     */
    onDataView(options){}

    /**
     *  @desc 当前数据节点下添加子数据节点时的校验
     *  @param options:{
     *      tplTree,     //当前数据树
     *      tplNode,     //当前数据节点对象
     *      tplChildNode //即将添加的子数据节点对象
     *   }
     *   @return {Object} 校验元数据视图 @link 请参考ValidMeta说明
     */
    onDataValid(options){}

    /**
     * 当数据节点被移除时的校验
     * @param options
     * TODO 待实现
     */
    onRemoveDataValid(options){}

    /**
     * 当数据节点被选择时构建拖拽相关的视图
     *  @param options:{
     *      tplTree,     //当前数据树
     *      tplNode,     //当前数据节点对象
     *      tplParentNode //当前数据节点父对象
     *   }
     *
     *  @return  [{key:'addTab',text:'添加页签',icon:'uidesign uitianjia'},...]
     *
     */
    onDataDndView(options){

    }

    /**
     * 当数据节点触发动作事件时（例如：扩展按钮点击）
     * @param options
     * {
     *     tplTree,
     *     tplNode,
     *     actionType//动作类型
     *     actionKey,//动作标识
     * }
     *
     * @return 无 或者 event
     * {
     *       "eventKey":"addNode", //添加节点的事件
     *       "eventData":"Button" //任意的uitype值
     * }
     */
    onActionHandler(options){

    }
}