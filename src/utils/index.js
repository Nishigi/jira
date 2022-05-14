import { useEffect } from 'react';

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

export const useMount = callback => {
    useEffect(() => {
        callback();
    }, []); // eslint-disable-line
};

export const _debounce = (func, delay) => {
    let timer = null;
    return () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func();
        }, delay);
    };
};
export const _throttle = (func, wait) => {
    let timer = null;
    let flag = false;
    return () => {
        if (flag) {
            return;
        }
        flag = true;
        timer = setTimeout(() => {
            flag = false;
            func();
        }, wait);
    };
};
