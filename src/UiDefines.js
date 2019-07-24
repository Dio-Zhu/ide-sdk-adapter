export default class UiDefines{
    constructor(){
        this.UiType = {};
        this.UiTitle = {};
        this.UiIcon = {};
        this.UiDefault = {};
    }

    /**
     * 添加一个组件的定义
     * @param primaryKey    主键标识
     * @param uitype        组件类型
     * @param uititle       组件名称
     * @param uiicon        组件图标
     * @param uidefault     组件缺省属性
     */
    add(primaryKey,uitype,uititle,uiicon,uidefault){
        this.UiType[primaryKey] = uitype;
        this.UiTitle[primaryKey] = uititle;
        this.UiIcon[primaryKey] = uiicon;
        this.UiDefault[primaryKey] = uidefault;
    }

    /**
     * 移除一个组件的定义
     * @param primaryKey    主键标识
     */
    remove(primaryKey){
        delete this.UiType[primaryKey];
        delete this.UiTitle[primaryKey];
        delete this.UiIcon[primaryKey];
        delete this.UiDefault[primaryKey];
    }

    /**
     * 获得一个组件的定义
     * @param primaryKey
     */
    get(primaryKey){
        return {
            uitype:this.UiType[primaryKey],
            uititle:this.UiTitle[primaryKey],
            uiicon:this.UiIcon[primaryKey],
            uidefault:this.UiDefault[primaryKey],
        }
    }
}