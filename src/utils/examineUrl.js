export const isZero = val => {
    return val === 0 ? false : !val;
};
export const checkUrl = url => {
    console.log(url);
    const result = { ...url };
    Object.keys(result).forEach(key => {
        if (isZero(url[key])) {
            delete result[key];
        }
    });
    return result;
};
