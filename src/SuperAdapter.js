export default class SuperAdapter {
    constructor(){

    }
    /**
     * 调用自生的方法
     * @param funcName
     * @param funcOptions
     */
    callFunction(funcName,funcOptions){
        if(!funcName){
            console.warn('callFunction not funcName',this);
            return;
        }
        let func = this[funcName];
        if(typeof func !== 'function'){
            console.warn('callFunction is not function:'+funcName,this);
            return;
        }
        let funcResult = func.call(this,funcOptions);
        return funcResult;
    }
}