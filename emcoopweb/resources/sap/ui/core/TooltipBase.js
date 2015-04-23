/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','./Control','./Popup'],function(){"use strict";sap.ui.core.Control.extend("sap.ui.core.TooltipBase",{metadata:{"abstract":true,library:"sap.ui.core",properties:{"text":{type:"string",group:"Misc",defaultValue:""},"openDuration":{type:"int",group:"Behavior",defaultValue:200},"closeDuration":{type:"int",group:"Behavior",defaultValue:200},"myPosition":{type:"sap.ui.core.Dock",group:"Behavior",defaultValue:'begin top'},"atPosition":{type:"sap.ui.core.Dock",group:"Behavior",defaultValue:'begin bottom'},"offset":{type:"string",group:"Behavior",defaultValue:'10 3'},"collision":{type:"sap.ui.core.Collision",group:"Behavior",defaultValue:'flip'},"openDelay":{type:"int",group:"Misc",defaultValue:500},"closeDelay":{type:"int",group:"Misc",defaultValue:100}},events:{"closed":{}}}});sap.ui.core.TooltipBase.M_EVENTS={'closed':'closed'};sap.ui.core.TooltipBase.prototype._getPopup=jQuery.sap.getter((function(){var p=new sap.ui.core.Popup();p.setShadow(true);return p}()));sap.ui.core.TooltipBase.prototype.onfocusin=function(e){var s=jQuery(e.target).control(0);if(s!=null){var d=s.getFocusDomRef();this.sStoredTooltip=null;if(d.title&&d.title!=""){this.sStoredTooltip=d.title;d.title=""}var p=this._getPopup();if(!(p.isOpen()&&p.getContent()==this)){sap.ui.getCore().getRenderManager().render(this,sap.ui.getCore().getStaticAreaRef(),true)}var v=d.getAttribute("aria-describedby");var i=this.getId()+"-title "+this.getId()+"-txt";if(v==null||v==""){d.setAttribute("aria-describedby",i)}else if(v.indexOf(i)==-1){d.setAttribute("aria-describedby",v+" "+i)}}};sap.ui.core.TooltipBase.prototype.onfocusout=function(e){var s=jQuery(e.target).control(0);if(s!=null){var d=s.getFocusDomRef();if(this.sStoredTooltip){d.title=this.sStoredTooltip}var v=d.getAttribute("aria-describedby");var i=this.getId()+"-title "+this.getId()+"-txt";if(v&&v.indexOf(i)>=0){if(jQuery.trim(v)==i){d.removeAttribute("aria-describedby")}else{v=v.replace(i,"");d.setAttribute("aria-describedby",v)}}}if(sap.ui.core.TooltipBase.sOpenTimeout){jQuery.sap.clearDelayedCall(sap.ui.core.TooltipBase.sOpenTimeout);sap.ui.core.TooltipBase.sOpenTimeout=undefined}this.sCloseNowTimeout=jQuery.sap.delayedCall(this.getCloseDelay(),this,"closePopup")};sap.ui.core.TooltipBase.prototype.isStandardTooltip=function(t){return(typeof t==="string"&&(jQuery.trim(t))!=="")};sap.ui.core.TooltipBase.prototype.onmouseover=function(e){var E=jQuery(e.target).control(0);if(E!=null){if(E===this){if(this.sCloseNowTimeout){jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);this.sCloseNowTimeout=null}e.stopPropagation();e.preventDefault();return}var c=jQuery(e.currentTarget).control(0);if(c!==E&&!this.isStandardTooltip(E.getTooltip())){if(this.sCloseNowTimeout){jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);this.sCloseNowTimeout=null;e.stopPropagation();e.preventDefault();return}}var l=jQuery(e.relatedTarget).control(0);if(l){if(l.getParent()){if(l.getParent()===c&&c===E){var L=l.getTooltip();if(!this.isStandardTooltip(L)&&(!L||!(L instanceof sap.ui.core.TooltipBase))){if(this.sCloseNowTimeout){jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);this.sCloseNowTimeout=null;e.stopPropagation();e.preventDefault();return}}}}}if(this._currentControl===E||!this.isStandardTooltip(E.getTooltip())){this.removeStandardTooltips(E);if(sap.ui.core.TooltipBase.sOpenTimeout){jQuery.sap.clearDelayedCall(sap.ui.core.TooltipBase.sOpenTimeout)}sap.ui.core.TooltipBase.sOpenTimeout=jQuery.sap.delayedCall(this.getOpenDelay(),this,"openPopup",[this._currentControl]);e.stopPropagation();e.preventDefault()}}};sap.ui.core.TooltipBase.prototype.onmouseout=function(e){if(sap.ui.core.TooltipBase.sOpenTimeout){jQuery.sap.clearDelayedCall(sap.ui.core.TooltipBase.sOpenTimeout);sap.ui.core.TooltipBase.sOpenTimeout=undefined}if(!this.sCloseNowTimeout){this.sCloseNowTimeout=jQuery.sap.delayedCall(this.getCloseDelay(),this,"closePopup")}this.restoreStandardTooltips();e.stopPropagation();e.preventDefault()};sap.ui.core.TooltipBase.prototype.closePopup=function(){var p=this._getPopup();if(this.sCloseNowTimeout){jQuery.sap.clearDelayedCall(this.sCloseNowTimeout)}this.sCloseNowTimeout=undefined;p.attachClosed(this.handleClosed,this);p.close();this.restoreStandardTooltips()};sap.ui.core.TooltipBase.prototype.handleClosed=function(){this._getPopup().detachClosed(jQuery.proxy(this.handleClosed,this));this.fireClosed()};sap.ui.core.TooltipBase.prototype.openPopup=function(s){if(s.getTooltip()!=null){if(this.sCloseNowTimeout){jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);this.sCloseNowTimeout=null;return}var p=this._getPopup();if(p.isOpen()&&p.getContent()==this){return}sap.ui.getCore().getRenderManager().render(this,sap.ui.getCore().getStaticAreaRef(),true);var d=s.getDomRef();p.setContent(this);p.setPosition(this.getMyPosition(),this.getAtPosition(),d,this.getOffset(),this.getCollision());p.setDurations(this.getOpenDuration(),this.getCloseDuration());p.open();this.removeStandardTooltips(this._currentControl)}};sap.ui.core.TooltipBase.prototype.removeStandardTooltips=function(){var d=this._currentControl.getDomRef();if(!this.aStoredTooltips){this.aStoredTooltips=[]}else{return}var t="";while(d&&!(d===document)){t=d.title;if(t){this.aStoredTooltips.push({domref:d,tooltip:t});d.title=""}d=d.parentNode}if(this._currentControl.getTooltipDomRefs){var D=this._currentControl.getTooltipDomRefs();for(var i=0;i<D.length;i++){d=D[i];if(d){t=d.title;if(t){this.aStoredTooltips.push({domref:d,tooltip:t});d.title=""}}}}};sap.ui.core.TooltipBase.prototype.restoreStandardTooltips=function(){var p=this._getPopup();var e=p.getOpenState();if(e===sap.ui.core.OpenState.OPEN||e===sap.ui.core.OpenState.OPENING){return}if(sap.ui.core.TooltipBase.sOpenTimeout){return}if(this.aStoredTooltips){for(var i=0;i<this.aStoredTooltips.length;i++){var d=this.aStoredTooltips[i].domref;d.title=this.aStoredTooltips[i].tooltip}}this.aStoredTooltips=null};sap.ui.core.TooltipBase.prototype._setParent=sap.ui.core.TooltipBase.prototype.setParent;sap.ui.core.TooltipBase.prototype.setParent=function(p,a){var _=this._getPopup();if(_&&_.isOpen()){this.closePopup()}this._setParent.apply(this,arguments)};sap.ui.core.TooltipBase.prototype.onkeydown=function(e){if(e.ctrlKey&&e.which==jQuery.sap.KeyCodes.I){var E=jQuery(e.target).control(0);if(E!=null){if(this._currentControl===E||!this.isStandardTooltip(E.getTooltip())){this.removeStandardTooltips(E);this.openPopup(this._currentControl);e.preventDefault();e.stopPropagation()}}}else if(e.which==jQuery.sap.KeyCodes.ESCAPE){if(sap.ui.core.TooltipBase.sOpenTimeout){jQuery.sap.clearDelayedCall(sap.ui.core.TooltipBase.sOpenTimeout);sap.ui.core.TooltipBase.sOpenTimeout=undefined}var w=this.oPopup&&this.oPopup.isOpen();this.closePopup();if(w){e.preventDefault();e.stopPropagation()}}};sap.ui.core.TooltipBase.prototype._closeOrPreventOpen=function(){var p=this._getPopup();if(p.isOpen()){this.closePopup()}else if(sap.ui.core.TooltipBase.sOpenTimeout){jQuery.sap.clearDelayedCall(sap.ui.core.TooltipBase.sOpenTimeout);sap.ui.core.TooltipBase.sOpenTimeout=undefined}};return sap.ui.core.TooltipBase},true);
