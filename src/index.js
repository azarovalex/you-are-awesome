// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (property) => {
    return property;
};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, 'property', {
        value: 'value',
        enumerable: false
    })

    return property;
};
const createProtoMagicObject = () => {
    createProtoMagicObject.prototype = createProtoMagicObject.__proto__;
    return createProtoMagicObject;
};
const incrementor = () => {
    incrementor.value++;
    return incrementor;
};
incrementor.value = 0;
incrementor.valueOf = () => {
    return incrementor.value;
}


const asyncIncrementor = () => {
    asyncIncrementor.value++;
    return asyncIncrementor.value;
};
asyncIncrementor.value = 0;
const createIncrementer = () => {
    var val = 0;
    return {
        next() {
            return {
                value: ++val,
                done: false
            };
        },
        [Symbol.iterator]() {
            return this;
        }
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (parameter) => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(parameter)
        }, 1000);
    })
};
const getDeepPropertiesCount = (obj) => {
    var res = 0;

    function _recursive(obj) {
        var res = 0;
        if (obj.length != 0) {
            for (key in obj) {
                res += 1;
                if (Object.getOwnPropertyNames(obj[key]).length != 0) {
                    res = res + _recursive(obj[key]);
                }
            }
        } else {
            res++;
        }
        return res;
    }

    for (key in obj) {
        res += 1;
        if (Object.getOwnPropertyNames(obj[key]).length != 0) {
            res = res + _recursive(obj[key]);
        }

    }
    return res;
};
const createSerializedObject = () => {
    let serObj = {
        key: "value"
    };
    Object.defineProperty(serObj, "toJSON", {
        value: function () {
            return serObj.toString();
        }
    });
    return serObj;
};

const sortByProto = (arr) => {
    var res = [];
    for (let cur of arr) {

        if (res.length == 0) {
            res.push(cur);
        } else {
            if (cur.isPrototypeOf(res[0])) {
                for (var j = 0; j < res.length; j++) {
                    if (cur.isPrototypeOf(res[j])) {
                        break;
                    }
                }
                if (j == res.length) {
                    res.push(cur);
                } else {
                    res.splice(j, 0, cur);
                }

            } else {
                res.unshift(cur);
            }
        }
    }

    return res;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;