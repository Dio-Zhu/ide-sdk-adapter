'use strict';

module.exports = {
    /**
    * 如果存在有效值，则设置属性值，否则清除属性
    */
    isExistSet: function isExistSet(object, propName, propValue) {
        if (!object) return;
        if (propValue !== undefined && propValue !== '' && propValue !== null) {
            object[propName] = propValue;
        } else {
            delete object[propName];
        }
    },
    /**
     * 如果等于指定值，则设置属性值，否则清除属性
     */
    isEqualSet: function isEqualSet(object, propName, propValue, eqValue) {
        if (!object) return;
        if (propValue === eqValue) {
            object[propName] = propValue;
        } else {
            delete object[propName];
        }
    },
    /**
     * 如果不等于指定值，则设置属性值，否则清除属性
     */
    isNotEqualSet: function isNotEqualSet(object, propName, propValue, eqValue) {
        if (!object) return;
        if (propValue !== eqValue) {
            object[propName] = propValue;
        } else {
            delete object[propName];
        }
    },
    /**
     * 如果等于指定值等于包含的任意一个值，则设置属性值，否则清除属性
     */
    isIncludeSet: function isIncludeSet(object, propName, propValue, eqValues) {
        if (!object) return;
        for (var i = 0; i < eqValues.length; i++) {
            if (propValue === eqValues[i]) {
                object[propName] = propValue;
                return;
            }
        }
        delete object[propName];
    },
    /**
     * 如果是true值，则设置属性值，否则清除属性
     */
    isTrueSet: function isTrueSet(object, propName, propValue) {
        this.isEqualSet(object, propName, propValue, true);
    },
    /**
     * 如果是false值，则设置属性值，否则清除属性
     */
    isFalseSet: function isFalseSet(object, propName, propValue) {
        this.isEqualSet(object, propName, propValue, false);
    }

};