/**
 * 基础视图转换适配器
 */
export default class BaseViewAdapter{
    //--------------生命周期方法--------------------
    constructor(primaryKey){
        this.primaryKey = primaryKey;
    }
    getPrimaryKey(){
        return this.primaryKey;
    }
}