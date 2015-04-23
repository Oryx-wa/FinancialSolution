/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/Model','./ResourcePropertyBinding'],function(q,M,R){"use strict";var a=M.extend("sap.ui.model.resource.ResourceModel",{constructor:function(d){M.apply(this,arguments);this.bAsync=!!(d&&d.async);this.sDefaultBindingMode=this.bAsync?sap.ui.model.BindingMode.OneWay:sap.ui.model.BindingMode.OneTime;this.mSupportedBindingModes={"OneWay":true,"TwoWay":false,"OneTime":true};if(this.bAsync&&this.sDefaultBindingMode==sap.ui.model.BindingMode.OneTime){q.sap.log.warning("Using binding mode OneTime for asynchronous ResourceModel is not supported!")}this.oData=d;_(this,true)},metadata:{publicMethods:["getResourceBundle"]}});a.prototype.loadResourceBundle=function(d){var c=sap.ui.getCore().getConfiguration(),r,u,l,i;l=d.bundleLocale;if(!l){l=c.getLanguage()}i=c.getOriginInfo();u=b(d.bundleUrl,d.bundleName);r=q.sap.resources({url:u,locale:l,includeInfo:i,async:!!d.async});return r};a.prototype.enhance=function(d){var t=this,r,p=this.bAsync?new Promise(function(e){r=e}):null;function c(){d.async=t.bAsync;var e=t.loadResourceBundle(d);if(e instanceof Promise){e.then(function(f){t._oResourceBundle._enhance(f);r(true)},function(){r(true)})}else if(e){t._oResourceBundle._enhance(e)}}if(this._oPromise){Promise.resolve(this._oPromise).then(c)}else{c()}return p};a.prototype.bindProperty=function(p){var B=new R(this,p);return B};a.prototype.getProperty=function(p){return this._oResourceBundle?this._oResourceBundle.getText(p):null};a.prototype.getResourceBundle=function(){if(!this.bAsync){return this._oResourceBundle}else{var p=this._oPromise;if(p){return new Promise(function(r,c){function d(B){r(B)}p.then(d,d)})}else{return Promise.resolve(this._oResourceBundle)}}};a.prototype._handleLocalizationChange=function(){_(this,false)};function _(m,t){var d=m.oData;if(d&&(d.bundleUrl||d.bundleName)){var r=m.loadResourceBundle(d);if(r instanceof Promise){var e={url:b(d.bundleUrl,d.bundleName),async:true};m.fireRequestSent(e);m._oPromise=r;m._oPromise.then(function(B){m._oResourceBundle=B;delete m._oPromise;m.checkUpdate(true);m.fireRequestCompleted(e)})}else{m._oResourceBundle=r}}else if(t){throw new Error("Neither bundleUrl nor bundleName are given. One of these is mandatory.")}};function b(c,d){var u=c;if(d){u=q.sap.getModulePath(d,'.properties')}return u};return a},true);
