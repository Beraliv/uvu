
import * as $ from '../../src/assert';

declare let str: string;
declare let num: number;
declare let strOrNum: string | number;

declare let strArray: string[];
declare let numArray: number[];
declare let strOrNumArray: (string | number)[];
declare let strArrayOrNumArray: string[] | number[];

// @ts-expect-error: Argument of type 'number' is not assignable to parameter of type 'string'
$.is(str, num);
// @ts-expect-error: Argument of type 'string | number' is not assignable to parameter of type 'string'.
$.is(str, strOrNum);
$.is(strOrNum, str);
$.is(strOrNum, num);
// @ts-expect-error: Argument of type 'number[]' is not assignable to parameter of type 'string[]'
$.is(strArray, numArray);
// @ts-expect-error: Argument of type '(string | number)[]' is not assignable to parameter of type 'string[]'
$.is(strArray, strOrNumArray);
$.is(strOrNumArray, strArray);
$.is(strOrNumArray, numArray);
// @ts-expect-error: Argument of type 'string[] | number[]' is not assignable to parameter of type 'string[]'
$.is(strArray, strArrayOrNumArray);
$.is(strArrayOrNumArray, strArray);
$.is(strArrayOrNumArray, numArray);
