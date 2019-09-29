module.exports = function(options){
    let {formMeta,tplNode,tplTree} = options;
    let newFormData = {};
    for(let i=0;i<formMeta.length;i++){
        let meta = formMeta[i];
        if(!meta)continue;
        switch (meta.name) {
            case "specialTag":{
                if(tplNode[meta.name]!==undefined) {
                    newFormData[meta.name] = {};
                    newFormData[meta.name].id = tplNode[meta.name].id;
                    newFormData[meta.name].code = tplNode[meta.name].code;
                    newFormData[meta.name].name = tplNode[meta.name].name;
                }
                break;
            }
            case "uikey":
            case "uititle":
            case "themeClassName":
            case "className":
            default:
                if(tplNode[meta.name]!==undefined){
                    newFormData[meta.name] = tplNode[meta.name];
                }
                break;
        }
    }
    return newFormData;
};
