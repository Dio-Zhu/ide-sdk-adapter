import BaseDataAdapter from './BaseDataAdapter';
const MetaType = require('./MetaType');
/**
 * 去除前后多余空字符串
 * @param x
 * @return {*}
 */
function strTrim(x) {
    if(typeof x === 'string'){
        return x.replace(/^\s+|\s+$/gm,'');
    }else{
        return x;
    }
}
/**
 * 如果存在有效值，则设置属性值，否则清除属性
 */
function isExistSet(object,propName,propValue){
    if(!object)return;
    if(propValue!==undefined&&propValue!==''&&propValue!==null){
        object[propName] = propValue;
    }else{
        delete object[propName];
    }
}
/**
 * 属性转换适配器
 */
export default class PropAdapter extends BaseDataAdapter{
    //--------------生命周期方法--------------------
    /**
     * @desc 构建适配页面(元数据)
     * @param options
     * {
     *     tplNode,     //当前数据节点值
     *     tplTree,     //当前数据树
     *     productType, //所属产品类型
     *     currApp,     //所属应用信息
     *     currPage,    //所属页面信息
     *     pageList     //所属应用下的全部页面信息
     * }
     * @return {Array} 元数据数组集合 @link 请参考PageMeta说明
     */
    onPageMetas(options) {
        return [
            {
                name: 'uikey',
                label: '键值',
                type: MetaType.Text,
                props: {},
                defaultValue: ''
            },{
                name: 'uititle',
                label: '名称',
                type: MetaType.Text,
                props: {},
                defaultValue: ''
            }
        ];
    }

    /**
     * @desc 构建适配页面(属性)
     * @param options {无}
     * @return {object} 适配页面的属性 @link 请参考PageProp说明
     */
    onPageProps(options) {
    }


    /**
     * @override
     * @desc 参考 BaseDataAdapter
     * @param options
     */
    onDataToValue(options){
        let {formMeta,tplNode,tplTree} = options;
        let newFormData = {};
        for(let i=0;i<formMeta.length;i++){
            let meta = formMeta[i];
            if(!meta)continue;
            switch (meta.name) {
                case "uikey":
                case "uititle":
                default:
                    if(tplNode[meta.name]!==undefined){
                        newFormData[meta.name] = tplNode[meta.name];
                    }
                    break;
            }
        }
        return newFormData;
    }

    /**
     * @override
     * @desc 参考 BaseDataAdapter
     * @param options
     * @return 无
     */
    onValueToData(options){
        let {formMeta,formData,tplNode,tplTree,keepDefaultValue} = options;
        for(let i=0;i<formMeta.length;i++) {
            let meta = formMeta[i];
            if(!meta)continue;
            if(!(meta.name in formData))continue;
            let value = formData[meta.name];
            value = strTrim(value);//去除前后多余空格
            switch (meta.name) {
                case "uikey":
                case "uititle":
                default:
                    if(keepDefaultValue===false){//属性实际值与其默认值相同时则不保留此属性
                        //默认值===实际值（表单项值），则不生成节点属性
                        if(meta.defaultValue===value){
                            delete tplNode[meta.name];
                        }else{
                            isExistSet(tplNode,meta.name,value);
                        }
                    }else{//保留属性默认值
                        tplNode[meta.name] = value;
                    }
                    break;
            }
        }
    }

}