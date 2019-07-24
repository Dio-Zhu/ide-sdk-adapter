import BaseDataAdapter from './BaseDataAdapter';
import PropMeta from './PropMeta';
import PropDataToValue from './PropDataToValue';
import PropValueToData from './PropValueToData';
/**
 * 属性转换适配器
 */
export default class PropAdapter extends BaseDataAdapter{
    //--------------生命周期方法--------------------
    /**
     * @desc 参考 BaseDataAdapter
     * @param options
     */
    onPageMetas(options){
        return PropMeta(options);
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
        return PropDataToValue(options);
    }

    /**
     * @desc 参考 BaseDataAdapter
     * @param options
     */
    onValueToData(options){
        PropValueToData(options);
    }


}