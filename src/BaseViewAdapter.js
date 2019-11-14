/**
 * 基础视图转换适配器
 */
import SuperAdapter from "./SuperAdapter";

export default class BaseViewAdapter extends SuperAdapter{
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
}