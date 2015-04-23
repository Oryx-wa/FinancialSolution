/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.EntityInfo");sap.ui.demokit.EntityInfo={getEntityDocu:function(E,c){var o=this._oDocumentation;if(!o||o.name!==E){o=undefined;l(E,".control");if(!o){l(E,".type")}this._oDocumentation=o;return o}function l(N,t){var P={".control":p,".type":a};var C="boolean int float number function object string void any Element Control Component";function p($){o=o||{baseType:undefined,doc:undefined,deprecation:undefined,properties:{},aggregations:{},associations:{},events:{},methods:{}};var B=$.children("baseType").text();o.baseType=o.baseType||((B)?r(B):null);o.doc=o.doc||d($);o.deprecation=o.deprecation||f($);b($,"properties/property",function(e){o.properties[e.attr("name")]={kind:0,type:r(e.attr("type")||"string"),defaultValue:e.attr("defaultValue")||"empty/undefined",doc:d(e),deprecation:f(e),since:e.attr("since")||null}});o.defaultAggregation=o.defaultAggregation||$.children("aggregations").attr("default");b($,"aggregations/aggregation",function(e){o.aggregations[e.attr("name")]={kind:e.attr("cardinality")==="0..1"?1:2,type:r(e.attr("type")||"sap.ui.core/Control"),cardinality:e.attr("cardinality")||"0..n",visibility:e.attr("visibility")||null,doc:d(e),deprecation:f(e),since:e.attr("since")||null}});b($,"associations/association",function(e){o.associations[e.attr("name")]={kind:e.attr("cardinality")==="0..n"?4:3,type:r(e.attr("type")||"sap.ui.core/Control"),cardinality:e.attr("cardinality")||"0..1",doc:d(e),deprecation:f(e),since:e.attr("since")||null}});b($,"events/event",function(e){var N=e.attr("name");o.events[N]={kind:5,doc:d(e),deprecation:f(e),since:e.attr("since")||null,parameters:[]};b(e,"parameters/parameter",function(g){o.events[N].parameters[g.attr("name")]={kind:6,type:r(g.attr("type")||"string"),doc:d(g),since:g.attr("since")||null,deprecation:f(g)}})});b($,"methods/method",function(e){var N=e.attr("name");o.methods[N]={kind:7,type:r(e.attr("type")||"sap.ui.core/void"),doc:d(e),deprecation:f(e),since:e.attr("since")||null,parameters:[]};b(e,"parameters/parameter",function(g){o.methods[N].parameters.push({kind:8,name:g.attr("name"),type:r(g.attr("type")||"sap.ui.core/Control"),doc:d(g),since:g.attr("since")||null,deprecation:f(g)})})});if(B){l(B,".control")}}function a($){o=o||{doc:undefined,deprecation:false,values:{}};o.doc=o.doc||d($);o.deprecation=o.deprecation||f($);b($,"enumeration/value",function(e){var N=e.attr("name");o.values[N]={value:e.attr("value")||N,doc:d(e),deprecation:f(e)}});o.pattern=$.children("pattern").text();var B=$.children("baseType").text();if(B){l(B,".type")}}function b($,s,c){jQuery.each(s.split("/"),function(i,n){$=$.children(n)});$.each(function(i,e){c(jQuery(e))})}function d($){return $.children("documentation").text()}function f($){return $.children("deprecation").text()}function r(t){if(t.indexOf("/")>=0){return t.replace(/\//g,".")}else if(t&&t.indexOf(".")<0&&C.indexOf(t)>=0){return"sap.ui.core."+t}else{return N.split(".").slice(0,-1).concat([t.replace(/\//g,".")]).join(".")}}jQuery.ajax({async:false,url:jQuery.sap.getModulePath(N,t),dataType:'xml',success:function(x){P[t](jQuery(x.documentElement));o.name=N;o.metatype=t},error:function(e){jQuery.sap.log.error("tried to load entity docu for: "+N+t)}})}}}