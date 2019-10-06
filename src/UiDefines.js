/**
 * 一套组件定义
 */
export default class UiDefines{
    constructor(){
        this.UiType = {};
        this.UiTitle = {};
        this.UiIcon = {};
        this.UiDefault = {};
        this.UiIsView = {};
    }

    /**
     * 添加一个组件的定义
     * @param primaryKey    主键标识
     * @param uitype        组件类型
     * @param uititle       组件名称
     * @param uiicon        组件图标
     * @param uidefault     组件缺省属性
     * @param uiisview      组件是否为视图
     */
    add(primaryKey,uitype,uititle,uiicon,uidefault,uiisview){
        this.UiType[primaryKey] = uitype;
        this.UiTitle[primaryKey] = uititle;
        this.UiIcon[primaryKey] = uiicon;
        this.UiDefault[primaryKey] = uidefault;
        this.UiIsView[primaryKey] = typeof uiisview == 'boolean'?uiisview:true;
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
        delete this.UiIsView[primaryKey];
    }

    /**
     * 通过key获取一个组件的定义
     * @param primaryKey
     */
    get(primaryKey){
        return {
            uitype:this.UiType[primaryKey],
            uititle:this.UiTitle[primaryKey],
            uiicon:this.UiIcon[primaryKey],
            uidefault:this.UiDefault[primaryKey],
            uiisview:this.UiIsView[primaryKey],
        }
    }

    /**
     * 通过uitype获取一个组件的定义(找到第一个匹配的即返回)
     * @param uitype
     */
    getByUiType(uitype){
        for (let i in this.UiType){
            if(this.UiType[i]==uitype){
                return this.get(i);
            }
        }
    }

    /**
     * 通过uitype获取一个组件的key
     * @param uitype
     */
    getKeyByUiType(uitype){
        for (let i in this.UiType){
            if(this.UiType[i]==uitype){
                return i;
            }
        }
    }

    /**
     * 获取全部键值
     * @return {string[]}
     */
    getKeys(){
        return Object.keys(this.UiType);
    }

}