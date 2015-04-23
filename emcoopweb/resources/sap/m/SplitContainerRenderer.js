/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.SplitContainerRenderer");sap.m.SplitContainerRenderer={};
sap.m.SplitContainerRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapMSplitContainer");if(this.renderAttributes){this.renderAttributes(r,c)}if(!sap.ui.Device.system.phone){if(sap.ui.Device.orientation.portrait){r.addClass("sapMSplitContainerPortrait")}switch(c.getMode()){case"ShowHideMode":r.addClass("sapMSplitContainerShowHide");break;case"StretchCompress":r.addClass("sapMSplitContainerStretchCompress");break;case"PopoverMode":r.addClass("sapMSplitContainerPopover");break;case"HideMode":r.addClass("sapMSplitContainerHideMode")}}r.writeClasses();r.writeStyles();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");if(this.renderBeforeContent){this.renderBeforeContent(r,c)}if(!sap.ui.Device.system.phone){if(c.getMode()==="PopoverMode"&&sap.ui.Device.orientation.portrait){c._oDetailNav.addStyleClass("sapMSplitContainerDetail");r.renderControl(c._oDetailNav);if(c._oPopOver.getContent().length===0){c._oPopOver.addAggregation("content",c._oMasterNav,true)}}else{c._oMasterNav.addStyleClass("sapMSplitContainerMaster");r.renderControl(c._oMasterNav);c._oDetailNav.addStyleClass("sapMSplitContainerDetail");r.renderControl(c._oDetailNav)}}else{c._oMasterNav.addStyleClass("sapMSplitContainerMobile");r.renderControl(c._oMasterNav)}r.write("</div>")};
