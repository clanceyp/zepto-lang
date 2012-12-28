// Zepto.lang plugin
//
// Copyright (c) 2012
// @author Patrick Clancey (stickythang.com)
//
// Dual licensed under the MIT and GPL licenses:
// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html
;(function($){
    $.extend($.fn, {
		Lang:{
			/*
			* @method
			* @id Lang.isEmpty
			* @alias Zepto.fn.Lang.isEmpty
			* @memberOf Zepto.fn.Lang
			* @param {Object} Object to test
			* @return boolean
			*/
			isEmpty:function(val){
				var empty = [null,"",0,false,undefined],isEmpty = false;
				if (Array.isArray(val) && val.length === 0){
					isEmpty = true;
				} else if(Zepto.fn.Lang.isFunction(val) && Zepto.fn.Lang.isFunctionEmpty(val)){
					isEmpty = true;
				} else if(Zepto.fn.Lang.isObject(val) && Zepto.fn.Lang.isObjectEmpty(val)){
					isEmpty = true;
				} else if (Zepto.fn.Lang.type(val) === "number" && isNaN(val)){
					isEmpty = (val === Number.NEGATIVE_INFINITY || val === Number.POSITIVE_INFINITY) ? false : true;
				}else{
					for (var i = empty.length; i > 0;i--){
						if (empty[ i - 1] === val){
							isEmpty = true;
							break;
						}
					}
				}
				return isEmpty;
			},
			/*
			* @method
			* @id Lang.isFunctionEmpty
			* @alias Zepto.fn.Lang.isFunctionEmpty
			* @memberOf Zepto.fn.Lang
			* @param {Object} obj to test
			* @return boolean
			*/
			isFunctionEmpty:function(obj){
				var str = (function(){}).toString();
				if (obj.toString() == str){
					return true;
				}
				return false;
			},
			/*
			 * @method
			 * @id Lang.isFunction
			 * @alias Zepto.fn.Lang.isFunction
			 * @memberOf Zepto.fn.Lang
			 * @param {Object} obj to test
			 * @return boolean
			 */
			isFunction:function(obj){
				if (Zepto.fn.Lang.type(obj) === "function" ){
					return true;
				}
				return false;
			},
			/*
			 * @method
			 * @id Lang.isObjectEmpty
			 * @alias Zepto.fn.Lang.isObjectEmpty
			 * @memberOf Zepto.fn.Lang
			 * @param {Object} obj to test
			 * @return boolean
			 */
			isObjectEmpty:function(obj){
				for (var name in obj) {
					if (obj.hasOwnProperty(name)){
						return false;
					}
				}
				return true;
			},
			/*
			 * @method
			 * @id Lang.isObject
			 * @alias Zepto.fn.Lang.isObject
			 * @memberOf Zepto.fn.Lang
			 * @param {Object} obj to test if it's a basic simple object,
			 * @return boolean
			 */
			isObject:function(obj){
				var key;
				if (!obj || typeof obj !== "object" || obj.getElementById || obj.getComputedStyle ) {
					return false;
				}
				if (obj.constructor){
					return true;
				}
				for(key in obj){}
				return key === undefined || Zepto.fn.Lang.hasOwnProperty.call( obj, key ) || false;
			},
			/*
			 * @method
			 * @id Lang.isArray
			 * @alias Zepto.fn.Lang.isArray
			 * @memberOf Zepto.fn.Lang
			 * @param {Object} obj to test
			 * @return boolean
			 */
			isArray:function(obj){
				return Array.isArray(obj);
			},
			/*
			 * @method
			 * @id Lang.isNull
			 * @alias Zepto.fn.Lang.isNull
			 * @memberOf Zepto.fn.Lang
			 * @param {Object} obj to test
			 * @return boolean
			 */
			isNull:function(obj){
				return Zepto.fn.Lang.type(obj) === Zepto.fn.Lang.type(null);
			},
			/*
			 * @method
			 * @id Lang.isUndefined
			 * @alias Zepto.fn.Lang.isUndefined
			 * @memberOf Zepto.fn.Lang
			 * @param {Object} obj to test
			 * @return boolean
			 */
			isUndefined:function(obj){
				return Zepto.fn.Lang.type(obj) === Zepto.fn.Lang.type();
			},
			/*
			 * @method
			 * @id Lang.type
			 * @alias Zepto.fn.Lang.type
			 * @memberOf Zepto.fn.Lang
			 * @param {Object} obj to test, add null to usual object types
			 * @return string
			 */
			type:function(obj){
				var t;
				if (obj == null){
					t = String( obj );
				 /*} else if (({})[ Zepto.fn.Lang.toString.call(obj) ]){
					t = Zepto.fn.Lang.toString.call(obj)*/
				} else {
					t = typeof obj;
				}
				return t;
			},
			hasOwnProperty:({}).hasOwnProperty,
			toString:({}).toString
		}
	})
})(Zepto)