import BaseDataAdapter from './BaseDataAdapter';
import LogicUtils from './LogicUtils';
import MetaType from './MetaType';
/**
 * 基础事件转换适配器
 */
export default class EventAdapter extends BaseDataAdapter{
    //--------------生命周期方法--------------------
    /**
     * @desc 参考 BaseDataAdapter
     * @param options
     */
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

    /**
     * @desc 参考 BaseDataAdapter
     * @param options
     */
    onPageProps(options){

    }

    /**
     * @desc 参考 BaseDataAdapter
     * @param options
     */
    onCreateData(options){
    }

    /**
     * @desc 参考 BaseDataAdapter
     * @param options
     */
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

    /**
     * @desc 参考 BaseDataAdapter
     * @param options
     */
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