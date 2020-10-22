/**
 * 全局性的逻辑适配器
 */
import SuperAdapter from "./SuperAdapter";

export default class GlobalAdapter extends SuperAdapter{
    constructor(){
        super();
    }
    /**
     * 构建组件的分组选择菜单列表
     * @param options
     * {
     *     sceneData, //当前场景数据
     *     currDataSource:[]//当前数据源
     * }
     * @return array 返回数据格式要求如下：
     * [
     * {
     *   uititle:"基础",  //分组名称
     *   uiicon: 'tag',  //分组图标
     *   children: [//本分组下的组件集合
     *     {
     *       uitype:'Button',  //组件标识
     *       uititle:'按钮',   //组件名称
     *       uiicon:'',       //组件图标
     *       uidefault:''     //组件缺省配置
     *     },
     *     ...//本分组下的更多其它组件
     *   ]
     * },
     * ...  //更多其它分组
     * ]
     */
    onViewMenus(options){
        let {currDataSource} = options||{};
        return currDataSource;
    }

    /**
     * 构建自定义配置面板
     * @param options
     * {
     *     sceneData, //当前场景数据
     * }
     * @return array 返回数据格式要求如下：
     * [
     * {
     *   key:"",          //面板编码
     *   title:"基础",     //面板名称
     *   url:''           //面板页面地址
     *   type:''          //面板类型，"left"-左面板、"right"-右面板(默认)、"center"-中间面板
     * },
     * ...  //更多其它分组
     * ]
     */
    onViewPanes(options){
        let {currDataSource} = options||{};
        return currDataSource;
    }

    /**
     * @deprecated
     * 后期将移除
     * 解析需要显示的源码内容
     * @param options
     * {
     *     data:object //需要解析的json数据对象
     * }
     * @return string //返回生成的源码字符串
     */
    onSourceCodes(options){}

    /**
     * 获取当前组件可用的子组件类型
     * @param options
     * {
     *  sceneData, //当前场景数据
     *  tplNode,//当前父组件
     *  tplChildNode,//当前子组件
     *  currDataSource,//当前配置数据
     *  isPart,//是否ui部件
     *  isExt //是否ui扩展
     * }
     * @return array
     * 格式要求：
     * ['uiTypeSub1','uiTypeSub2',...]
     */
    onUiSubset(options){
        let {currDataSource} = options||{};
        return currDataSource;
    }

    /**
     * 构建页面类型的可选列表
     * @param options
     * {
     *     currApp:object //当前应用信息
     * }
     * @return array
     * 格式要求：
     * [
     *  {
     *      name: '自定义页面',//页面类型名称
     *      code: 'FreeView',//页面类型编码
     *      isDefault:true  //是否默认选择
     *  }
     *  //更多页面类型
     * ]
     */
    onPageTypes(options){

    }
    /**
     * 新建页面时的触发的生命周期,主要用于处理缺省的页面节点数据
     * @param options
     * {
     *     sceneData, //当前场景数据
     * }
     */
    onDefaultPageData(options){

    }

    /**
     * 页面数据保存时触发的生命周期
     * @param options
     * {
     *     sceneData, //当前场景数据
     *     tplTree
     * }
     */
    onSaveData(options){

    }

    /**
     *  @desc 新数据节点创建完成后触发
     *  @param options:{
     *      sceneData, //当前场景数据
     *      tplTree,        //当前数据树
     *      tplNode,        //当前添加的数据节点对象
     *      tplParentNode,   //当前对应的父节点对象
     *      isPart          //是否为部件
     *   }
     *   @return {无}
     */
    onCreateDataComplete(options){

    }

    /**
     * 获取页面可用的扩展按钮
     * @param options:{
     *     sceneData, //当前场景数据
     *     currApp,//当前应用
     *     currPage//当前页面
     * }
     * @return 要求返回的结果格式如下：
     * [
     *      {
     *          key:''  //按钮唯一值
     *          text:'',//按钮文本
     *          disabled:false,//按钮是否禁用
     *          onClick:function(info){//按钮点击事件
     *			    let {tplTree,tplNode} = info;
     *              console.log("当前树数据：",info.tplTree);
     *              console.log("当前选中节点数据：",info.tplNode);
     *          }
     *      }
     * ]
     */
    onPageButtons(options){
    }

    /**
     * 获取当前的配置信息
     * @param options:{
     *     sceneData, //当前场景数据
     *     tplTree, //当前树数据
     *     tplNode, //当前选中节点
     *     config,  //当前全部配置项的默认值
     *     configKey//当前配置项
     * }
     */
    onConfig(options){

    }
}
