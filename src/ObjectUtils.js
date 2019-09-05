/**
 * 对象操作工具
 */
const ObjectUtils = {
    /**
     * 获取对象的全部属性
     * @param object
     * @return {Array:string}
     */
    allKeys: function (object) {
        let result = []
        if(Object.keys){
            result = Object.keys(object);
        }else{
            for (let key in object) {
                if (object.hasOwnProperty(key)) {
                    result.push(object[key]);
                }
            }
        }
        return result
    },
    /**
     * 获取对象中包含指定keys的属性集合(交集)
     * @param object
     * @param keys {Array:string}
     * @return {Array:string}
     */
    includeKeys: function (object, keys) {
        let result = []
        if(!keys||keys.length==0)return result;
        for (let key in object) {
            if (object.hasOwnProperty(key) && keys.indexOf(key) !== -1) {
                result.push(object[key]);
            }
        }
        return result
    },
    /**
     * 获取对象中排除指定keys的属性集合
     * @param object
     * @param keys {Array:string}
     * @return {Array:string}
     */
    excludeKeys: function (object, keys) {
        let result = [];
        if(!keys||keys.length==0)return ObjectUtils.allKeys(object);
        for (let key in object) {
            if (object.hasOwnProperty(key) && keys.indexOf(key) === -1) {
                result.push(object[key]);
            }
        }
        return result
    },  
}

export default  ObjectUtils;