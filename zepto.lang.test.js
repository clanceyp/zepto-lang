

function testObject(){};
var obj01 = new testObject();
var obj02 = new testObject();

testObject.prototype.hello = function(){ alert("Hi!") };

obj02.hello = function(){ alert( "Hello" ) }


/**
 * @comment isEmpty should be true
 */

test( "Zepto.fn.Lang.isEmpty( \"\" )", function() {
	equal( Zepto.fn.Lang.isEmpty( "" ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isEmpty( 0 )", function() {
	equal( Zepto.fn.Lang.isEmpty( 0 ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isEmpty( 0.0 )", function() {
	equal( Zepto.fn.Lang.isEmpty( 0.0 ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isEmpty( undefined )", function() {
	equal( Zepto.fn.Lang.isEmpty( undefined ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isEmpty( [] )", function() {
	equal( Zepto.fn.Lang.isEmpty( [] ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isEmpty( function(){} )", function() {
	equal( Zepto.fn.Lang.isEmpty( function(){} ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isEmpty( function(){   } )", function() {
	equal( Zepto.fn.Lang.isEmpty( function(){   } ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isEmpty( EmptyFunction )", function() {
	function EmptyFunction(a,b,c){};
	equal( Zepto.fn.Lang.isEmpty( EmptyFunction ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isEmpty( {} )", function() {
	equal( Zepto.fn.Lang.isEmpty( {} ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isEmpty( obj01 )", function() {
	equal( Zepto.fn.Lang.isEmpty( obj01 ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isEmpty( NaN )", function() {
	equal( Zepto.fn.Lang.isEmpty( NaN ), true, "Expected value : true" );
});




/**
 * @comment isEmpty should be false
 */
test( "Zepto.fn.Lang.isEmpty( \"string\" )", function() {
	equal( Zepto.fn.Lang.isEmpty( "string" ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isEmpty( 1 )", function() {
	equal( Zepto.fn.Lang.isEmpty( 1 ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isEmpty( -1 )", function() {
	equal( Zepto.fn.Lang.isEmpty( -1 ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isEmpty( 0.1 )", function() {
	equal( Zepto.fn.Lang.isEmpty( 0.1 ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isEmpty( -0.1 )", function() {
	equal( Zepto.fn.Lang.isEmpty( -0.1 ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isEmpty( Number.POSITIVE_INFINITY )", function() {
	equal( Zepto.fn.Lang.isEmpty( Number.POSITIVE_INFINITY ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isEmpty( Number.NEGATIVE_INFINITY )", function() {
	equal( Zepto.fn.Lang.isEmpty( Number.NEGATIVE_INFINITY ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isEmpty( [1] )", function() {
	equal( Zepto.fn.Lang.isEmpty( [1] ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isEmpty( function(){    alert(1)   } )", function() {
	equal( Zepto.fn.Lang.isEmpty( function(){   alert(1)   } ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isEmpty( {\"val\":1} )", function() {
	equal( Zepto.fn.Lang.isEmpty( {"val":1} ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isEmpty( obj02 )", function() {
	equal( Zepto.fn.Lang.isEmpty( obj02 ), false, "Expected value : false" );
});


/**
 * @comment isFunction should be true
 */
test( "Zepto.fn.Lang.isFunction( function(){} )", function() {
	equal( Zepto.fn.Lang.isFunction( function(){} ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isFunction( testObject )", function() {
	equal( Zepto.fn.Lang.isFunction( testObject ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isFunction( isNaN )", function() {
	equal( Zepto.fn.Lang.isFunction( isNaN ), true, "Expected value : true" );
});

/**
 * @comment isFunction should be false
 */
test( "Zepto.fn.Lang.isFunction(  )", function() {
	equal( Zepto.fn.Lang.isFunction(  ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isFunction( {} )", function() {
	equal( Zepto.fn.Lang.isFunction( {} ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isFunction( 1 )", function() {
	equal( Zepto.fn.Lang.isFunction( 1 ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isFunction( NaN )", function() {
	equal( Zepto.fn.Lang.isFunction( NaN ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isFunction( null )", function() {
	equal( Zepto.fn.Lang.isFunction( null ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isFunction( \"\" )", function() {
	equal( Zepto.fn.Lang.isFunction( "" ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isFunction( \"string\" )", function() {
	equal( Zepto.fn.Lang.isFunction( "string" ), false, "Expected value : false" );
});


/**
 * @comment isFunctionEmpty should be true
 */
test( "Zepto.fn.Lang.isFunctionEmpty( function(){} )", function() {
	equal( Zepto.fn.Lang.isFunctionEmpty( function(){} ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isFunctionEmpty( function(){    } )", function() {
	equal( Zepto.fn.Lang.isFunctionEmpty( function(){    } ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isFunctionEmpty( EmptyFunction )", function() {
	function EmptyFunction(a,b,c){
		// contains comments
	}
	equal( Zepto.fn.Lang.isFunctionEmpty( EmptyFunction ), true, "Expected value : true" );
});

/**
 * @comment isFunctionEmpty should be false
 */

test( "Zepto.fn.Lang.isFunctionEmpty( function(){alert(1)} )", function() {
	equal( Zepto.fn.Lang.isFunctionEmpty( function(){alert(1)} ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isFunctionEmpty( function(){   alert(1)   } )", function() {
	equal( Zepto.fn.Lang.isFunctionEmpty( function(){   alert(1)   } ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isFunctionEmpty( function(){   NonEmptyFunction   } )", function() {
	function NonEmptyFunction(){
		alert(1);
	}
	equal( Zepto.fn.Lang.isFunctionEmpty( NonEmptyFunction ), false, "Expected value : false" );
});



/**
 * @comment isNull should be true
 */
test( "Zepto.fn.Lang.isNull( null )", function() {
	equal( Zepto.fn.Lang.isNull( null ), true, "Expected value : true" );
});
/**
 * @comment isNull should be false
 */
test( "Zepto.fn.Lang.isNull( \"null\" )", function() {
	equal( Zepto.fn.Lang.isNull( "null" ), false, "Expected value : false" );
});

test( "Zepto.fn.Lang.isNull( 0 )", function() {
	equal( Zepto.fn.Lang.isNull( 0 ), false, "Expected value : false" );
});

test( "Zepto.fn.Lang.isNull( undefined )", function() {
	var u;
	equal( Zepto.fn.Lang.isNull( u ), false, "Expected value : false" );
});

test( "Zepto.fn.Lang.isNull( {} )", function() {
	equal( Zepto.fn.Lang.isNull( {} ), false, "Expected value : false" );
});


/**
 * @comment isUndefined should be true
 */
test( "Zepto.fn.Lang.isUndefined(  )", function() {
	equal( Zepto.fn.Lang.isUndefined(  ), true, "Expected value : true" );
});
test( "Zepto.fn.Lang.isUndefined( undefined )", function() {
	var u;
	equal( Zepto.fn.Lang.isUndefined( u ), true, "Expected value : true" );
});
/**
 * @comment isUndefined should be false
 */
test( "Zepto.fn.Lang.isUndefined( null )", function() {
	equal( Zepto.fn.Lang.isUndefined( null ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isUndefined( \"null\" )", function() {
	equal( Zepto.fn.Lang.isUndefined( "null" ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isUndefined( 0 )", function() {
	equal( Zepto.fn.Lang.isUndefined( 0 ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isUndefined( defined )", function() {
	var u = true;
	equal( Zepto.fn.Lang.isUndefined( u ), false, "Expected value : false" );
});
test( "Zepto.fn.Lang.isUndefined( {} )", function() {
	equal( Zepto.fn.Lang.isUndefined( {} ), false, "Expected value : false" );
});


/**
 * @comment type should match
 */

test( "Zepto.fn.Lang.type( \"\" )", function() {
	equal( Zepto.fn.Lang.type( "" ), "string", "Expected value : string" );
});
test( "Zepto.fn.Lang.type( 1 )", function() {
	equal( Zepto.fn.Lang.type( 1 ), "number", "Expected value : number" );
});
test( "Zepto.fn.Lang.type( 0.1 )", function() {
	equal( Zepto.fn.Lang.type( 0.1 ), "number", "Expected value : number" );
});

test( "Zepto.fn.Lang.type( null )", function() {
	equal( Zepto.fn.Lang.type( null ), "null", "Expected value : null" );
});