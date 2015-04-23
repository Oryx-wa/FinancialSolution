/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/format/NumberFormat','sap/ui/model/SimpleType'],function(q,N,S){"use strict";var I=S.extend("sap.ui.model.type.Integer",{constructor:function(){S.apply(this,arguments);this.sName="Integer"}});I.prototype.formatValue=function(v,i){if(v==undefined||v==null){return null}switch(i){case"string":return this.oFormat.format(v);case"int":case"float":return v;default:throw new sap.ui.model.FormatException("Don't know how to format Integer to "+i)}};I.prototype.parseValue=function(v,i){var r;switch(i){case"float":case"string":r=this.oFormat.parse(String(v));if(isNaN(r)){throw new sap.ui.model.ParseException(v+" is not a valid Integer value")}return r;case"int":return v;default:throw new sap.ui.model.ParseException("Don't know how to parse Integer from "+i)}};I.prototype.validateValue=function(v){if(this.oConstraints){var V=[];q.each(this.oConstraints,function(n,c){switch(n){case"minimum":if(v<c){V.push("minimum")}break;case"maximum":if(v>c){V.push("maximum")}}});if(V.length>0){throw new sap.ui.model.ValidateException("Validation of type constraints failed",V)}}};I.prototype.setFormatOptions=function(f){this.oFormatOptions=f;this._handleLocalizationChange()};I.prototype._handleLocalizationChange=function(){this.oFormat=N.getIntegerInstance(this.oFormatOptions)};return I},true);
