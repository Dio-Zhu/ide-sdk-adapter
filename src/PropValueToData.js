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
    var {formMeta,formData,tplNode,tplTree} = options;
    for(var i=0;i<formMeta.length;i++) {
        var meta = formMeta[i];
        if(!meta)continue;
        if(!(meta.name in formData))continue;
        var value = formData[meta.name];
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
                //默认值===表单项值，则不生成节点属性
                if(meta.defaultValue===value){
                    delete tplNode[meta.name];
                }else{
                    isExistSet(tplNode,meta.name,value);
                }
                break;

        }
    }
};