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
