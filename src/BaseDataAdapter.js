/**
 * 基础数据转换适配器
 */
import SuperAdapter from "./SuperAdapter";

/**
 * 基础数据转换器
 */
export default class BaseDataAdapter extends SuperAdapter{
    /**
     * @desc 构建对象
     * @param primaryKey 主键/组件标识
     */
    constructor(primaryKey) {
        super();
        this.primaryKey = primaryKey;
    }

    /**
     * @desc 获取主键/组件标识
     * @return {string}
     */
    getPrimaryKey() {
        return this.primaryKey;
    }

    //--------------生命周期方法--------------------

    /**
     *  @desc 新建数据节点时触发
     *  @param options:{
     *      tplTree,        //当前数据树
     *      tplNode,        //当前添加的数据节点对象
     *      tplParentNode,   //当前对应的父节点对象
     *      isPart          //是否为部件
     *   }
     *   @return {无}
     */
    onCreateData(options) {
    }

    /**
     * @desc 数据节点位置变更时触发
     * @param options
     * {
     *     tplTree, //移动后的数据树
     *     tplNode, //移动后的节点
     *     tplParentNode,//移动后的父节点
     *     tplSourceNode,//移动前的节点
     *     tplSourceParentNode,//移动前的父节点
     *     tplTargetNode,//移动相对的目标节点
     *     position,     //移动相对目标节点的位置 "before|left|top"移动到目标节点前、"after|right|top"移动到目标节点后、"insert"插入目标节点里面
     * }
     */
    onMoveData(options){

    }

    /**
     * @desc 数据节点被删除/移除时触发
     * @param options
     * {
     *     tplTree, //节点删除后的数据树
     *     tplNode, //被删除的节点
     * }
     */
    onDeleteData(options){

    }

    /**
     * @desc 将数据转换为配置值
     * @param options {
     *     formMeta,    //元数据，即 @link onPageMetas 返回的数据
     *     tplNode,     //当前数据节点对象
     *     tplTree,     //当前数据树
     *     productType, //所属产品类型
     *     currApp,     //所属应用信息
     *     currPage,    //所属页面信息
     *     pageList     //所属应用下的全部页面信息
     * }
     * @return {object} 适配页面的表单值
     */
    onDataToValue(options) {
    }

    /**
     * @desc 将配置值转换为数据
     * @param options {
     *     formMeta,    //元数据，即 @link onPageMetas 返回的数据
     *     formData,    //变更后的配置值
     *     tplPreNode,  //上一次的数据值
     *     tplNode,     //当前数据节点对象
     *     tplTree,     //当前数据树
     *     productType, //所属产品类型
     *     currApp,     //所属应用信息
     *     currPage,    //所属页面信息
     *     pageList     //所属应用下的全部页面信息
     * }
     * @return {无}
     */
    onValueToData(options) {
    }
}