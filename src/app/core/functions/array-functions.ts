export const areArraysEqual = (
    array1: ReadonlyArray<unknown>,
    array2: ReadonlyArray<unknown>
): boolean => {
    // if both arrays are falsy return
    if (!array1 && !array2) {
        return true;
    }

    // if the other array is a falsy value, return
    if (!array2) {
        return false;
    }

    // if the other array is a falsy value, return
    if (!array1) {
        return false;
    }

    // compare lengths - can save a lot of time
    if (array1?.length !== array2?.length) {
        return false;
    }

    for (let i = 0, l = array1.length; i < l; i++) {
        // Check if we have nested arrays
        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            // recurse into the nested arrays
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (!areArraysEqual(array1[i], array2[i])) {
                return false;
            }
        } else if (array1[i] !== array2[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};
