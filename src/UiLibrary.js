import UiDefines from "./UiDefines";
import PropAdapter from "./PropAdapter";
import EventAdapter from "./EventAdapter";
import ViewAdapter from "./ViewAdapter";
import GlobalAdapter from "./GlobalAdapter";
/**
 * 定义一套适配的组件库
 */
export default class UiLibrary{
    /**
     * 构建一套组件库的适配套件
     * @param libraryName   组件库标识名
     * @param libraryVer    组件库版本号
     */
    constructor(libraryName,libraryVer){
        this.libraryName = libraryName;
        this.libraryVer = libraryVer;
        this.uiDefines = new UiDefines();
        this.propAdapters = {};
        this.eventAdapters = {};
        this.viewAdapters = {};
        this.globalAdapter = null;
    }

    /**
     * 获取组件库标识名
     * @return {*}
     */
    getName(){
        return this.libraryName;
    }

    /**
     * 获取组件库版本号
     * @return {*}
     */
    getVersion(){
        return this.libraryVer;
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
    addDefine(){
        this.uiDefines.add.apply(this.uiDefines,arguments);
    }
    /**
     * 移除一个组件的定义
     * @param primaryKey    主键标识
     */
    removeDefine(primaryKey){
        this.uiDefines.remove(primaryKey);
    }

    /**
     * 获得一个组件的定义
     * @param primaryKey
     */
    getDefine(primaryKey){
        return this.uiDefines.get(primaryKey);
    }

    /**
     * 获取全部组件的定义
     */
    getUiDefines(){
        return this.uiDefines;
    }

    /**
     * 注册全部组件的定义
     */
    setUiDefines(uiDefines){
        if(uiDefines instanceof UiDefines){
            this.uiDefines = uiDefines;
            return;
        }
        console.warn('setUiDefines fail ,that is not UiDefines class!');
    }

    /**
     * 添加属性适配类
     * @param primaryKey
     * @param AdapterClass 继承于PropAdapter的类
     */
    addPropAdapter(primaryKey,AdapterClass){
        if(typeof AdapterClass == 'function'){
            let adapter = new AdapterClass(primaryKey);
            if(adapter instanceof PropAdapter){
                this.propAdapters[primaryKey] = new AdapterClass(primaryKey);
                return;
            }
        }
        console.warn('addPropAdapter fail ,that is not PropAdapter class!');
    }

    /**
     * 添加事件适配类
     * @param primaryKey
     * @param AdapterClass 继承于EventAdapter的类
     */
    addEventAdapter(primaryKey,AdapterClass){
        if(typeof AdapterClass == 'function'){
            let adapter = new AdapterClass(primaryKey);
            if(adapter instanceof EventAdapter){
                this.eventAdapters[primaryKey] = adapter;
                return;
            }
        }
        console.warn('addEventAdapter fail ,that is not EventAdapter class!');
    }

    /**
     * 添加视图适配类
     * @param primaryKey
     * @param AdapterClass 继承于ViewAdapter的类
     */
    addViewAdapter(primaryKey,AdapterClass){
        if(typeof AdapterClass == 'function'){
            let adapter = new AdapterClass(primaryKey);
            if(adapter instanceof ViewAdapter){
                this.viewAdapters[primaryKey] = adapter;
                return;
            }
        }
        console.warn('addEventAdapter fail ,that is not ViewAdapter class!');
    }

    /**
     * 获取属性适配实例
     * @param primaryKey
     * @return {*}
     */
    getPropAdapter(primaryKey){
        return this.propAdapters[primaryKey];
    }
    /**
     * 获取事件适配实例
     * @param primaryKey
     * @return {*}
     */
    getEventAdapter(primaryKey){
        return this.eventAdapters[primaryKey];
    }
    /**
     * 获取视图适配实例
     * @param primaryKey
     * @return {*}
     */
    getViewAdapter(primaryKey){
        return this.viewAdapters[primaryKey];
    }

    /**
     * 移除属性适配
     * @param primaryKey
     * @return {*}
     */
    removePropAdapter(primaryKey){
        delete this.propAdapters[primaryKey];
    }
    /**
     * 移除事件适配实例
     * @param primaryKey
     * @return {*}
     */
    removeEventAdapter(primaryKey){
        delete this.eventAdapters[primaryKey];
    }
    /**
     * 移除视图适配实例
     * @param primaryKey
     * @return {*}
     */
    removeViewAdapter(primaryKey){
        delete this.viewAdapters[primaryKey];
    }

    /**
     * 获取全部属性适配实例
     * @return {*}
     */
    get PropAdapters(){
        let adapters = [];
        for(let key in this.propAdapters){
            adapters.push(this.propAdapters[key]);
        }
        return adapters;
    }

    /**
     * 获取全部事件适配实例
     * @return {*}
     */
    get EventAdapters(){
        let adapters = [];
        for(let key in this.eventAdapters){
            adapters.push(this.eventAdapters[key]);
        }
        return adapters;
    }

    /**
     * 获取全部视图适配实例
     * @return {*}
     */
    get ViewAdapters(){
        let adapters = [];
        for(let key in this.viewAdapters){
            adapters.push(this.viewAdapters[key]);
        }
        return adapters;
    }


    /**
     * 获取全局适配器
     * @param primaryKey
     * @return {*}
     */
    getGlobalAdapter(){
        return this.globalAdapter;
    }
    /**
     * 设置全局适配器
     * @param primaryKey
     * @return {*}
     */
    setGlobalAdapter(globalAdapterClass){
        if(typeof globalAdapterClass == 'function') {
            let adapter = new globalAdapterClass();
            if(adapter instanceof GlobalAdapter){
                this.globalAdapter = adapter;
                return;
            }
        }
        console.warn('setGlobalAdapter fail ,that is not GlobalAdapter class!');
    }
}