/**
 * 数据转换适配器
 */
export default class BaseDataAdapter{
    constructor(primaryKey){
        this.primaryKey = primaryKey;
    }
    getPrimaryKey(){
        return this.primaryKey;
    }
    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){}

    //配置页面的属性
    onPageProps(options){}

    //数据转换为值的适配
    onDataToValue(options){}

    //值转换为数据的适配
    onValueToData(options){}

    /**
     *  当前数据节点构建时的回调
     *  @param options:{
     *      tplTree - 当前树结构
     *      tplNode - 当前即将添加的自身节点对象
     *      tplParentNode - 当前自身节点对应的父节点对象
     *   }
     */
    onCreateData(options){}
}