var answer = 42;
answer = 'Thanks for all the fish...';


x = 'The answer is ' + 42 
y = 42 + ' is the answer' 

'37' - 7 
'37' + 7 

var iNum1 = parseInt("1234blue"); //returns 1234

var iNum2 = parseInt("0xA"); //returns 10

var iNum3 = parseInt("22.5"); //returns 22

var iNum4 = parseInt("blue"); //returns NaN


'1.1' + '1.1' 
+'1.1' + +'1.1'
(+'1.1') + (+'1.1') 


// Note: the parentheses are added for clarity, not required.



// ParseInt() will start parsing string characters, in order
        // to make a valid numeric data type. If you do not provide
        // an incoming number system, it will be assumed to be
        // base-10.... most of the time.
        //
        // NOTE: Numbers starting with 0x will be parsed as base16.
        // NOTE: Numbers starting with 0 wlil be parsed as base8.
        console.log( "123: ", parseInt( "123" ) );
        console.log( "123.456: ", parseInt( "123.456" ) );
        console.log( "+123.456: ", parseInt( "+123.456" ) );
        console.log( "-123.456: ", parseInt( "-123.456" ) );
        console.log( "123ABC: ", parseInt( "123ABC" ) );
        console.log( "ABC: ", parseInt( "ABC" ) );
        console.log( "5px 5px: ", parseInt( "5px 5px" ) );
        console.log( "(123): ", parseInt( "(123)" ) );
        console.log( "0xF: ", parseInt( "0xF" ) );
        console.log( "012: ", parseInt( "012" ) );
        console.log( " 123 : ", parseInt( " 123 " ) );
        console.log( "---------------------------------------" );
        console.log( "Explicit Base 10:" );
        console.log( "---------------------------------------" );
        console.log( "123: ", parseInt( "123", 10 ) );
        console.log( "123.456: ", parseInt( "123.456", 10 ) );
        console.log( "+123.456: ", parseInt( "+123.456", 10 ) );
        console.log( "-123.456: ", parseInt( "-123.456", 10 ) );
        console.log( "123ABC: ", parseInt( "123ABC", 10 ) );
        console.log( "ABC: ", parseInt( "ABC", 10 ) );
        console.log( "5px 5px: ", parseInt( "5px 5px", 10 ) );
        console.log( "(123): ", parseInt( "(123)", 10 ) );
        console.log( "0xF: ", parseInt( "0xF", 10 ) );
        console.log( "012: ", parseInt( "012", 10 ) );
        console.log( " 123 : ", parseInt( " 123 ", 10 ) );
        console.log( "---------------------------------------" );
        console.log( "Explicit Base 16:" );
        console.log( "---------------------------------------" );
        console.log( "123: ", parseInt( "123", 16 ) );
        console.log( "123.456: ", parseInt( "123.456", 16 ) );
        console.log( "+123.456: ", parseInt( "+123.456", 16 ) );
        console.log( "-123.456: ", parseInt( "-123.456", 16 ) );
        console.log( "123ABC: ", parseInt( "123ABC", 16 ) );
        console.log( "ABC: ", parseInt( "ABC", 16 ) );
        console.log( "5px 5px: ", parseInt( "5px 5px", 16 ) );
        console.log( "(123): ", parseInt( "(123)", 16 ) );
        console.log( "0xF: ", parseInt( "0xF", 16 ) );
        console.log( "012: ", parseInt( "012", 16 ) );
        console.log( " 123 : ", parseInt( " 123 ", 16 ) );