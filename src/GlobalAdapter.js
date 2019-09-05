/**
 * 全局性的逻辑适配器
 */
export default class GlobalAdapter{

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
     * 获取全部组件项与可用子组件的关系
     * @param options
     * @return object
     * 格式要求：
     * {
     *     'uiTypeA':['uiTypeSub1','uiTypeSub2',...],
     *     'uiTypeB':['uiTypeSub1','uiTypeSub3',...],
     *     ...
     * }
     */
    onUiSubset(options){}
}