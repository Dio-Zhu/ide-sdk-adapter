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
     *  @return  [
     *      {
     *          key:'addTab',               //按钮键值
     *          text:'添加页签',             //按钮名称
     *          icon:'uidesign uitianjia'   //按钮图标（使用阿里字体图标库iconfont）
     *      }
     *      ,... //其它扩展按钮
     *  ]
     */
    onDataDndView(options){}

    /**
     * 当数据节点触发动作事件时（例如：扩展按钮点击时）
     * @param options
     * {
     *     tplTree,     //当前数据树
     *     tplNode,     //当前数据节点对象
     *     actionType,  //动作类型
     *     actionKey,   //动作标识
     *     openApi      //开发的API能力
     * }
     * @return 无
     */
    onActionHandler(options){}
}