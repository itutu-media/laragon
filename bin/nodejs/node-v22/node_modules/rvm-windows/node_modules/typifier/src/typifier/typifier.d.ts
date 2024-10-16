export = Typifier;
/**
 * Typifier
 *
 * The javascript library to get or check the type of a given variable.
 *
 */
declare class Typifier {
    /**
     * Get the version of the used library
     * @returns {string}
     */
    static getVersion(): string;
    /**
     * Check if given variable is of type Array
     *
     * @param {any} value
     * @returns {boolean} true if Array, otherwise false
     */
    static isArray(value: any): boolean;
    /**
     * Check if given variable is of type Object
     *
     * @param {any} value
     * @returns {boolean} true if Object, otherwise false
     */
    static isObject(value: any): boolean;
    /**
     * Check if given variable is of type string (primitive)
     *
     * @param {any} value
     * @returns {boolean} true if 'string', otherwise false
     */
    static isString(value: any): boolean;
    /**
     * Check if given variable is of type String (class instance)
     *
     * @param {any} value
     * @returns {boolean} true if instance of class 'String', otherwise false
     */
    static isStringClass(value: any): boolean;
    /**
     * Check if given variable is of type number (primitive)
     *
     * @param {any} value
     * @returns {boolean} true if 'number', otherwise false
     */
    static isNumber(value: any): boolean;
    /**
     * Check if given variable is of type Number (class instance)
     *
     * @param {any} value
     * @returns {boolean} true if instance of class 'Number', otherwise false
     */
    static isNumberClass(value: any): boolean;
    /**
     * Check if given variable is a valid number inside a string that evaluates to a number in Javascript.
     *
     * @example
     *      // valid number strings
     *      '200'
     *      '25.75'
     *      '10.'
     *      '.5'
     *      '500_000'
     *      '0x12F'
     *
     * @param {any} value
     * @returns {boolean} true if valid JavaScript number inside string
     */
    static isNumberString(value: any): boolean;
    /**
     * Check if given variable is of type Date
     *
     * @param {any} value
     * @returns {boolean} true if Date, otherwise false
     */
    static isDate(value: any): boolean;
    /**
     * Check if given variable is of type RegExp
     *
     * @param {any} value
     * @returns {boolean} true if RegExp, otherwise false
     */
    static isRegExp(value: any): boolean;
    /**
     * Check if given variable is of type NaN
     *
     * @param {any} value
     * @returns {boolean} true if NaN, otherwise false
     */
    static isNaN(value: any): boolean;
    /**
     * Check if given variable is of type Infinity
     *
     * @param {any} value
     * @returns {boolean} true if Infinity, otherwise false
     */
    static isInfinity(value: any): boolean;
    /**
     * Check if given variable is of type undefined
     *
     * @param {any} value
     * @returns {boolean} true if undefined, otherwise false
     */
    static isUndefined(value: any): boolean;
    /**
     * Check if given variable is of type null
     *
     * @param {any} value
     * @returns {boolean} true if null, otherwise false
     */
    static isNull(value: any): boolean;
    /**
     * Check if given variable is of type boolean (primitive)
     *
     * @param {any} value
     * @returns {boolean} true if 'boolean' or instance of class 'Boolean', otherwise false
     */
    static isBoolean(value: any): boolean;
    /**
     * Check if given variable is of type Boolean (class instance)
     *
     * @param {any} value
     * @returns {boolean} true if instance of class 'Boolean', otherwise false
     */
    static isBooleanClass(value: any): boolean;
    /**
     * Check if given variable is of type function
     *
     * @param {any} value
     * @returns {boolean} true if function, otherwise false
     */
    static isFunction(value: any): boolean;
    /**
     * Check if given variable is of type class
     *
     * @param {any} value
     * @returns {boolean} true if class, otherwise false
     */
    static isClass(value: any): boolean;
    /**
     * Check if the given value is of the given type.
     *
     * @example
     *  Typifier.is('Array',[1,2,3]) // => true
     *
     * @param {string} type
     * @param {any} value
     * @returns {boolean} true if the value is of the given type
     */
    static is(type: string, value: any): boolean;
    /**
     * Check if the given variable is set (is not 'undefined' or 'null').
     * Valid values like 'false', a empty string or '0' return true.
     *
     * @example
     *  let a;
     *  let b = 0;
     *  Typifier.isSet(a) // => false
     *  Typifier.isSet(b) // => true
     *
     * @param {any} variable
     * @returns {boolean} true if the value is set
     */
    static isSet(variable: any): boolean;
    /**
     * Get the type of the given value.
     * Primitive types are lower case.
     *
     * @example
     *  'Object'
     * @example
     *  'string'
     *
     * @param {any} value
     * @returns {string} type in pascal case format
     */
    static getType(value: any): string;
}
declare namespace Typifier {
    const _version: string;
}
