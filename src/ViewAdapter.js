/**
 * 视图转换适配器
 */
import SuperAdapter from "./SuperAdapter";

export default class ViewAdapter extends SuperAdapter{

    /**
     * 构建对象
     * @param primaryKey 主键/组件标识
     */
    constructor(primaryKey) {
        super();
        this.primaryKey = primaryKey;
    }

    /**
     * 获取主键/组件标识
     * @return {string}
     */
    getPrimaryKey() {
        return this.primaryKey;
    }

    //--------------生命周期方法--------------------
    /**
     * @desc 构建数据节点的显示视图
     * @param options
     * {
     *     tplNode,     //当前数据节点对象
     *     tplTree,     //当前数据树
     * }
     * @return {Array} 视图元数据集合 @link 请参考ViewMeta说明如下：
     * [
     * {
     *   uititle: '消息内容',
     *   uitype: 'message',
     *   type: 'error|warning|info|success'
     * }
     * ]
     */
    onDataView(options){}

    /**
     *  @desc 当前数据节点下添加子数据节点时的校验
     *  @param options:{
     *      tplTree,     //当前数据树
     *      tplNode,     //当前数据节点对象
     *      tplChildNode //即将添加的子数据节点对象
     *   }
     *  @return
     * {
     *   uititle: '消息提示内容',
     *   uitype: 'message',
     *   type: 'error|warning|info|success'
     * }
     */
    onDataValid(options){}

    /**
     * 当数据节点被移除时的校验
     * @param options:{
     *     tplTree, //当前数据树
     *     tplNode, //当前删除的节点
     * }
     * @return
     * {
     *   uititle: '消息内容',
     *   uitype: 'message',
     *   type: 'error|warning|info|success'
     * }
     */
    onRemoveDataValid(options){}

    /**
     *  @desc 当前数据节点下添加子数据节点时的校验
     *  @param options:{
     *     tplTree, //当前数据树
     *     tplNode, //当前移动的节点
     *     tplParentNode,//移动前的父节点
     *     tplTargetParentNode,//移动后的父节点
     *     tplTargetNode,//移动相对的目标节点
     *     position,     //移动相对目标节点的位置 "before|left|top"目标节点前、"after|right|top"目标节点后、"insert"目标节点里面
     *   }
     * @return
     * {
     *   uititle: '消息内容',
     *   uitype: 'message',
     *   type: 'error|warning|info|success'
     * }
     */
    onMoveDataValid(options){}

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