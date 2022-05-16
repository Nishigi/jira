import { useEffect, useState } from 'react';

export const isZero = val => {
    return val === 0 ? false : !val;
};

export const checkUrl = url => {
    const result = { ...url };
    Object.keys(result).forEach(key => {
        if (isZero(url[key])) {
            delete result[key];
        }
    });
    return result;
};

export const _debounce = (func, delay) => {
    let timer = null;
    return (...params) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func(...params);
        }, delay);
    };
};
export const _throttle = (func, wait) => {
    let timer = null;
    let flag = false;
    return (...params) => {
        if (flag) {
            return;
        }
        flag = true;
        timer = setTimeout(() => {
            flag = false;
            func(...params);
        }, wait);
    };
};
// Hooks
export const useMount = callback => {
    useEffect(() => {
        callback();
    }, []); // eslint-disable-line
};

export const useDebounce = (value, delay) => {
    const [debounceVal, setDebounceVal] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebounceVal(value), delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);
    return debounceVal;
};
