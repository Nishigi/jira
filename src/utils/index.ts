import { useEffect, useState } from 'react';

export const isZero = (val: unknown): boolean => {
    return val === 0 ? false : !val;
};

export const checkUrl = (url: object) => {
    const result = { ...url };
    Object.keys(result).forEach(key => {
        // @ts-ignore
        if (isZero(url[key])) {
            // @ts-ignore
            delete result[key];
        }
    });
    return result;
};

export const _debounce = (func: () => void, delay: number) => {
    // @ts-ignore
    let timer = null;
    // @ts-ignore
    return (...params) => {
        // @ts-ignore
        if (timer) {
            // @ts-ignore
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            // @ts-ignore
            func(...params);
        }, delay);
    };
};
export const _throttle = (func: () => void, wait: number) => {
    // @ts-ignore
    let timer = null;
    let flag = false;
    return (...params: any) => {
        if (flag) {
            return;
        }
        flag = true;
        timer = setTimeout(() => {// eslint-disable-line
            flag = false;
            // @ts-ignore
            func(...params);
        }, wait);
    };
};
// Hooks
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, []); // eslint-disable-line
};
//后续用泛型来规范
export const useDebounce = <V>(value: V, delay?: number) => {
    const [debounceVal, setDebounceVal] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebounceVal(value), delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);
    return debounceVal;
};

export const useArray = <T>(initArray: T[]) => {
    const [value, setValue] = useState(initArray)
    return {
        value,
        setValue,
        removeIndex: (index: number) => {
            const val = [...value]
            val.splice(index, 1)
            setValue(val)
        },
        add: (item: T) => setValue([...value, item]),
        clear: () => setValue([])
    }
}