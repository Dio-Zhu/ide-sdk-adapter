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
    onViewMenus(options){}

    /**
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
     * @param options {tplNode}
     * @return array
     * 格式要求：
     * ['uiTypeSub1','uiTypeSub2',...]
     */
    onUiSubset(options){}

    /**
     * 构建页面类型的可选列表
     * @param options
     * {
     *     currApp:object //当前应用信息
     * }
     */
    onPageTypes(options){

    }
    /**
     * 新建页面时的触发的生命周期,主要用于处理缺省的页面节点数据
     * @param options
     */
    onDefaultPageData(options){

    }

    /**
     * 页面数据保存时触发的生命周期
     * @param options {tplTree}
     */
    onSaveData(options){

    }

    /**
     * 获取当前组件可用的拖拽扩展按钮
     * @param options
     */
    onDndButtons(options){
        /**
         * return [
         *      {
         *          key:''
         *          text:'',
         *          icon:''
         *      }
         * ]
         */
    }
}