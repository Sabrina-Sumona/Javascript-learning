 // Regular Expression
// Pattern Matching Technique
 let re = /hello/;
 console.log(re);// with '/'
 console.log(re.source);//only re
let str = "Hello World";
// exec() - Returns result in an array or null
let result = re.exec(str);//case sencitive
console.log(result);
re = /Hello/;
result = re.exec(str);
console.log(result);
re = /hello/i;//i = case insencitive
result = re.exec(str);
console.log(result);
str = "Again Hello Hello World";
re = /heLLo/i;
result = re.exec(str);// takes only 1st one
console.log(result);
// test() - true/false
result = re.test(str);
console.log(result);
str = "Again Hell World";
result = re.test(str);
console.log(result);
str = "sdsHellosds World";
result = re.exec(str);
console.log(result);
result = re.test(str);
console.log(result);
// match() - Returns array or null
str = "Again Hello World Hello";
re = /hello/;
result = str.match(re);
console.log(result);
str = "Again Hello World";
re = /hello/i;
result = str.match(re);
console.log(result);
// search() - Returns index of the first match or -1
str = "World";
result = str.search(re);
console.log(result);
str = "Again Hello World Hello";
result = str.search(re);
console.log(result);
// replace() - Return new string
str = "Again Hello World Hello";
let newstr = str.replace(re, "Hi");
result = re.exec(str);
console.log(result);// no changes
console.log(newstr);//replaced 1st one

//literal vs meta characters
//using functions for regular expression's pattern matching
str = "Hello World";
function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}
//literal characters
re = /hello/i;
reTest(re, str);
re = /lo W/i;
reTest(re, str);
re = /hell/i;
reTest(re, str);
re = /hello/;
reTest(re, str);
re = /loW/i;
reTest(re, str);
// Meta Characters
re = /^hello/i; // Must start with
reTest(re, str);
str = "Again hello World";
re = /^hello/i; // Must start with
reTest(re, str);
re = /hello$/i; // Must end with
reTest(re, str);
re = /world$/i;
reTest(re, str);
str = "hello hello";
re = /^hello$/i;
reTest(re, str);
str = "hello";
re = /^hello$/i; // Must start and end with, it works when only one word in the string
reTest(re, str);
re = /^h.llo$/i; // Matches any one character in the place of dot(.)
reTest(re, str);
re = /h.llo/i;//same as previous
reTest(re, str);
str = "hallo";
reTest(re, str);
str = "hillo";
reTest(re, str);
str = "h llo";
reTest(re, str);
str = "hllo";//must have a character in the place of dot
reTest(re, str);
re = /h*llo/i; //Matches any character in the place of dot(.) 0 or more times
str = "hallo";
reTest(re, str);
str = "hillo";
reTest(re, str);
str = "h llo";
reTest(re, str);
str = "hllo";
reTest(re, str);
str = "hasjj1234556llo";
reTest(re, str);
str = "hllo";
re = /he?llo/i; //e exists or not is optional, but can not be other characters
reTest(re, str);
str = "hello";
re = /he?llo/i;
reTest(re, str);
str = "hallo";
re = /he?llo/i; //e exists or not is optional
reTest(re, str);
re = /he?a?llo/i;//can be e or a or ea or nothing
str = "hllo";
reTest(re, str);
str = "hello";
reTest(re, str);
str = "hallo";
reTest(re, str);
str = "heallo";
reTest(re, str);
str = "haello";
reTest(re, str);
str = "htallo";
reTest(re, str);
str = "hefllo";
reTest(re, str);
str = "hmllo";
reTest(re, str);
re = /he\?llo/i; // escaping: checking ? mark 
str = "hello";
reTest(re, str);
str = "he?llo";
reTest(re, str);
re = /he\??llo/i; //? or nothing
str = "hello";
reTest(re, str);
str = "he?llo";
reTest(re, str);
str = "heallo";
reTest(re, str);

// Character Set using Brackets []
re = /h[eai]llo/; // Must be one of them inside brackets
str = "heallo";
reTest(re, str);
str = "hallo";
reTest(re, str);
str = "hello";
reTest(re, str);
str = "hllo";
reTest(re, str);
re = /[HA]ello/i;
str = "hello";
reTest(re, str);
str = "aello";
reTest(re, str);
re = /[^ha]ello/; // Anything except those inside brackets
str = "hello";
reTest(re, str);
str = "ymllo";
reTest(re, str);
str = "aello";
reTest(re, str);
str = "kello";
reTest(re, str);
str = "ello";
reTest(re, str);
re = /^[ha]ello/; // Must start with h or a
str = "hello";
reTest(re, str);
str = "aello";
reTest(re, str);
str = "mello";
reTest(re, str);
str = "haello";
reTest(re, str);
re = /[A-Z]ello/; // range: Start with Uper Case
str = "jkhello";
reTest(re, str);
str = "HkkklHello";
reTest(re, str);
str = "Zello";
reTest(re, str);
re = /^[A-Z]/; // First Letter must be upper case
str = "xyz";
reTest(re, str);
str = "Xyz";
reTest(re, str);
str = "MMHGelloHN";
reTest(re, str);
re = /^[a-z]/;// First Letter must be lower case
str = "xyz";
reTest(re, str);
str = "Xyz";
reTest(re, str);
str = "mnhMMHGelloHN";
reTest(re, str);
re = /[A-Za-z]ello/;//Start with Uper Case/ lower case
str = "hello";
reTest(re, str);
str = "mello";
reTest(re, str);
str = "Hello";
reTest(re, str);
str = "Zello";
reTest(re, str);
re = /[0-9]ello/;//Start with digit
str = "hello";
reTest(re, str);
str = "0 7ello";
reTest(re, str);
str = "9ello";
reTest(re, str);
str = "Z8ello";
reTest(re, str);
re = /^[0-9]ello/;//1st character is digit
str = "hello";
reTest(re, str);
str = "0 7ello";
reTest(re, str);
str = "9ello";
reTest(re, str);
str = "Z8ello";
reTest(re, str);
re = /[^0-9]ello/; // Not digit
str = "hello";
reTest(re, str);
str = "0 7ello";
reTest(re, str);
str = "9ello";
reTest(re, str);
str = "Z8ello";
reTest(re, str);
re = /[0-9][0-9][0-9]ello/; //start with three digits
str = "000ello";
reTest(re, str);
str = "07ello";
reTest(re, str);
str = "9ello";
reTest(re, str);
str = "Z768ello";
reTest(re, str);
re = /^[0-9][0-9][0-9]ello/;//1st 3 is digit
str = "000ello";
reTest(re, str);
str = "07ello";
reTest(re, str);
str = "9ello";
reTest(re, str);
str = "Z768ello";
reTest(re, str);
re = /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits
str = "06700ello";
reTest(re, str);
str = "Z77768ello";
reTest(re, str);
str = "7768ello";
reTest(re, str);

// Braces {} - Quantifier
re = /hel{2}o/; // Must occur exactly 2 times
str = "hello";
reTest(re, str);
str = "helo";
reTest(re, str);
re = /hel{3}o/; 
str = "hello";
reTest(re, str);
str = "helllo";
reTest(re, str);
re = /hel{2,5}o/; // Range
str = "hello";
reTest(re, str);
str = "helllo";
reTest(re, str);
str = "helllllo";
reTest(re, str);
str = "helo";
reTest(re, str);
str = "hellllllo";
reTest(re, str);
str = "heo";
reTest(re, str);
re = /hel{2,}o/; // At least 2 times
str = "hello";
reTest(re, str);
str = "helllo";
reTest(re, str);
str = "helllllo";
reTest(re, str);
str = "helo";
reTest(re, str);
str = "hellllllo";
reTest(re, str);
str = "heo";
reTest(re, str);

// Parentheses () - Grouping
re = /^([0-9]){5}/; // /^[0-9][0-9][0-9][0-9][0-9]/ //1st 5 character is digits
str = "h12345fdg";
reTest(re, str);
str = "12345fdg";
reTest(re, str);
str = "123j45fdg";
reTest(re, str);
re = /^([0-9]xy){4}/;
str = "1xy2xy3xy4xy";
reTest(re, str);
str = "1239xy";
reTest(re, str);

// Bangladeshi Phone Number
// total 11 digits
re = /^01[0-9]{9}$/;
str = "01788888888";
reTest(re, str);
str = "0178888888";
reTest(re, str);
str = "001788888888";
reTest(re, str);
re = /^\+8801[0-9]{9}$/;
str = "+8801811888889";
reTest(re, str);
str = "01811888989";
reTest(re, str);

// Shorthand Character Classes
re = /\w/; // Word Character - alpha numeric or _
//\w just match only one character
str = "01811888989";
reTest(re, str);
str = "xcy";
reTest(re, str);
str = "ghh88989";
reTest(re, str);
str = "0181_hjj";
reTest(re, str);
str = "(*&^";
reTest(re, str);
str = "(*&v^";// only checks v
reTest(re, str);
re = /\w+/; // One or more
str = "01811888989";
reTest(re, str);
str = "xcy";
reTest(re, str);
str = "ghh88989";
reTest(re, str);
str = "0181_hjj";
reTest(re, str);
str = "(*&^";
reTest(re, str);
str = "(*&v^";
reTest(re, str);
re = /\W/; // Non Word Character
str = "!@#";
reTest(re, str);
str = "xcy";
reTest(re, str);
str = "gh@*&88989";
reTest(re, str);
str = "0181_hjj";
reTest(re, str);
str = "(*&^";
reTest(re, str);
str = "(*&v^";
reTest(re, str);
re = /\W+/; // one or more Non Word Characters
str = "!@#";
reTest(re, str);
str = "xcy";
reTest(re, str);
str = "gh@*&88989";
reTest(re, str);
str = "0181_hjj";
reTest(re, str);
str = "(*&^";
reTest(re, str);
str = "(*&v^";
reTest(re, str);
re = /\d/; // Digit
str = "!@#";
reTest(re, str);
str = "xcy";
reTest(re, str);
str = "gh@*&88989";
reTest(re, str);
str = "0181_hjj";
re = /\d+/;// one or more digits
str = "gh@*&88989";
reTest(re, str);
str = "*_hjj";
reTest(re, str);
re = /\D/; // Non digit
str = "989";
reTest(re, str);
str = "0181_hjj";
reTest(re, str);
re = /\s/; // Match white space
str = "0181_hjj";
reTest(re, str);
str = "0181 hjj";
reTest(re, str);
re = /\S/; // Match non white space
str = "0181_hjj";
reTest(re, str);
str = "0181 hjj";
reTest(re, str);
str = " ";
reTest(re, str);
re = /Hello\b/; // Word Boundary
str = "Hello";
reTest(re, str);
str = "Hello 1234";
reTest(re, str);
str = "Hello1234";
reTest(re, str);
str = "1234 Hello";
reTest(re, str);
str = "1234 weHello";
reTest(re, str);
re = /\bHello/;
str = "Hello";
reTest(re, str);
str = "Hello 1234";
reTest(re, str);
str = "Hello1234";
reTest(re, str);
str = "1234 Hello";
reTest(re, str);
str = "1234 weHello";
reTest(re, str);
re = /\bHello\b/;
str = "Hello";
reTest(re, str);
str = "Hello 1234";
reTest(re, str);
str = "Hello1234";
reTest(re, str);
str = "1234 Hello";
reTest(re, str);
str = "1234 weHello";
reTest(re, str);

// Assertions
re = /x(?=y)/; // Matches x only if x is before y
str = "x";
reTest(re, str);
str = "xy";
reTest(re, str);
str = "xyz";
reTest(re, str);
str = "xbyz";
reTest(re, str);
re = /x(?=yz)/; // Matches x only if x is before yz
str = "x";
reTest(re, str);
str = "xy";
reTest(re, str);
str = "xyz";
reTest(re, str);
str = "xbyz";
reTest(re, str);
re = /x(?!yz)/;
str = "x";
reTest(re, str);
str = "xy";
reTest(re, str);
str = "xyz";
reTest(re, str);
str = "xbyz";
reTest(re, str);

// Examples
// Postal Code : 4000, 4908 etc.
re = /^[0-9]{4}$/;
str = "4000";
reTest(re, str);
str = "40000";
reTest(re, str);

// Phone Number: 01717888888, +8801717888888 8801717888888 etc.
re = /^(\+)?(88)?01[0-9]{9}$/;
str = "+8801917888888";
reTest(re, str);
str = "8801717888888";
reTest(re, str);
str = "01317888888";
reTest(re, str);
str = "0131788888";
reTest(re, str);
str = "013178887888";
reTest(re, str);

// Email Address
// bohubrihi8.learn@edu.com.bd
re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/ ;
str = "bohubrihi.learn@edu.com.bd" ;
reTest(re, str);
str = "snsbauet04@gmail.com" ;
reTest(re, str);