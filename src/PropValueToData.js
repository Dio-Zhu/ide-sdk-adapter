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
module.exports = function(options){
    let {formMeta,formData,tplNode,tplTree,keepDefaultValue} = options;
    for(let i=0;i<formMeta.length;i++) {
        let meta = formMeta[i];
        if(!meta)continue;
        if(!(meta.name in formData))continue;
        let value = formData[meta.name];
        value = strTrim(value);//去除前后多余空格
        switch (meta.name) {
            case "specialTag":{
                if(value){
                    tplNode[meta.name] = {};
                    tplNode[meta.name].id = value.id;
                    tplNode[meta.name].code = value.code;
                    tplNode[meta.name].name = value.name;
                }else{
                    delete tplNode[meta.name];
                }
                break;
            }
            case "uikey":
            case "uititle":
            case "themeClassName":
            case "className":
            default:
                if(keepDefaultValue===false){//属性值=默认值则不保留此属性
                    //默认值===表单项值，则不生成节点属性
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
};