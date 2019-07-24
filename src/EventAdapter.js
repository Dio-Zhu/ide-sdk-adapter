import BaseDataAdapter from './BaseDataAdapter';
import LogicUtils from './LogicUtils';
import MetaType from './MetaType';
/**
 * 基础事件转换适配器
 */
export default class EventAdapter extends BaseDataAdapter{
    // constructor(primaryKey){
    //     super(primaryKey);
    // }
    //--------------生命周期方法--------------------
    //配置页面的元数据
    onPageMetas(options){
        var metas =[{
            name: 'onClick',
            label: '鼠标点击',
            type: MetaType.EventActions,
            props: {},
            defaultValue:null
        }];
        return metas;
    }

    //配置页面的属性
    onPageProps(options){

    }

    //数据转换为值的适配
    onDataToValue(options){
        var {formMeta,tplNode,tplTree} = options;
        var newFormData = {};
        for(var i=0;i<formMeta.length;i++){
            var meta = formMeta[i];
            switch(meta.name){
                default:
                    if(tplNode.uievents[meta.name]!==undefined){
                        newFormData[meta.name] = tplNode.uievents[meta.name];
                    }
                    break;
            }
        }
        return newFormData;
    }

    //值转换为数据的适配
    onValueToData(options){
        var {formMeta,formData,tplNode,tplTree} = options;
        for(var i=0;i<formMeta.length;i++) {
            var meta = formMeta[i];
            if(!(meta.name in formData))continue;
            var value = formData[meta.name];
            switch (meta.name) {
                default:
                    LogicUtils.isExistSet(tplNode.uievents,meta.name,value);
                    break;
            }
        }
    }
}