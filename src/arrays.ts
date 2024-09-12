/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let arr1: number[] = [...numbers];
    if (arr1.length === 0) {
        return arr1;
    } else if (arr1.length === 1) {
        return [...arr1, ...arr1];
    } else {
        return [arr1[0], arr1[arr1.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let arr1: number[] = [...numbers];
    const tripled = arr1.map((triple: number): number => triple * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let arr1: string[] = [...numbers];
    return arr1.map((str) => {
        const parsed = parseInt(str, 10);
        return isNaN(parsed) ? 0 : parsed;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let arr1: string[] = [...amounts];
    return arr1.map((str) => {
        if (str.startsWith("$")) {
            str = str.substring(1);
        }
        const parsed = parseInt(str, 10);
        return isNaN(parsed) ? 0 : parsed;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let arr1: string[] = [...messages];
    return arr1
        .filter((message) => !message.endsWith("?"))
        .map((message) => {
            if (message.endsWith("!")) {
                return message.toUpperCase();
            }
            return message;
        });
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count: number = 0;
    let arr1: string[] = [...words];
    arr1.map((word) => {
        if (word.length < 4) {
            count += 1;
        }
    });
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let arr1: string[] = [...colors];
    if (arr1.length === 0) {
        return true;
    }
    return arr1.every(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let arr1: number[] = [...addends];
    if (arr1.length === 0) {
        return "0=0";
    } else {
        const sum = arr1.reduce((total, num) => total + num, 0);
        const expression = arr1.join("+");
        return `${sum}=${expression}`;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let arr1: number[] = [...values];
    const firstNegativeIndex = arr1.findIndex((num) => num < 0);
    let sum: number = 0;
    if (firstNegativeIndex !== -1) {
        sum = arr1
            .slice(0, firstNegativeIndex)
            .reduce((acc, num) => acc + num, 0);
        const result = [...values];
        result.splice(firstNegativeIndex + 1, 0, sum);
        return result;
    } else {
        sum = arr1.reduce((acc, num) => acc + num, 0);
        return [...values, sum];
    }
}
