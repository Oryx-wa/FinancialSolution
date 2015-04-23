/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.explored.Bootstrap");sap.ui.demokit.explored.Bootstrap={run:function(){sap.ui.demokit._loadAllLibInfo("","_getDocuIndex",function(l,d){sap.ui.demokit.explored.Bootstrap._processAndStoreIndices(d);sap.ui.demokit.explored.Bootstrap._loadUi()})},_processAndStoreIndices:function(d){var c=["Action","Container","Display","Chart","Mini Chart","Layout","List","Popup","Tile","User Input","Testing"];var a=["namespace","since","category","appComponent"];var f={namespace:{},since:{},category:{},appComponent:{},formFactors:{"Independent":true,"Condensed":true,"Compact":true,"Cozy":true}};var F={"-":"Independent","S":"Condensed","SM":"Condensed, Compact","SL":"Condensed, Cozy","SML":"Condensed, Compact, Cozy","M":"Compact","ML":"Compact, Cozy","L":"Cozy"};sap.ui.demokit.explored.data={};sap.ui.demokit.explored.data.entityCount=0;sap.ui.demokit.explored.data.entities=[];sap.ui.demokit.explored.data.filter={};sap.ui.demokit.explored.data.samples={};jQuery.each(d,function(i,D){if(!D.explored){return}else if(!D.explored.samplesRef){jQuery.sap.log.error("explored: cannot register lib '"+D.library+"'. missing 'explored.samplesRef'");return}else if(!D.explored.samplesRef.namespace){jQuery.sap.log.error("explored: cannot register lib '"+D.library+"'. missing 'explored.samplesRef.namespace'");return}else if(!D.explored.samplesRef.ref){jQuery.sap.log.error("explored: cannot register lib '"+D.library+"'. missing 'explored.samplesRef.ref'");return}else if(!D.explored.entities){jQuery.sap.log.error("explored: cannot register lib '"+D.library+"'. missing 'explored.entities'");return}else{jQuery.sap.log.info("explored: now reading lib '"+D.library+"'")}var r="";var p=r+D.explored.samplesRef.ref;jQuery.sap.registerModulePath(D.explored.samplesRef.namespace,p);jQuery.each(D.explored.samples,function(i,s){if(!s.id){jQuery.sap.log.error("explored: cannot register sample '?'. missing 'id'")}else if(!s.name){jQuery.sap.log.error("explored: cannot register sample '"+s.id+"'. missing 'name'")}else{sap.ui.demokit.explored.data.samples[s.id]=s}});jQuery.each(D.explored.entities,function(j,e){if(!e.id){jQuery.sap.log.error("explored: cannot register entity '?'. missing 'id'");return}if(D.explored.entitiesDefaults){jQuery.each(D.explored.entitiesDefaults,function(k,v){if(!e.hasOwnProperty(k)){e[k]=v}})}var I=e.id.lastIndexOf(".");var n=(I!==-1)?e.id.substring(0,I):e.id;e.namespace=n;if(!e.name){jQuery.sap.log.error("explored: cannot register entity '"+e.id+"'. missing 'name'");return}if(c.indexOf(e.category)===-1){jQuery.sap.log.error("explored: cannot register entity '"+e.id+"'. category '"+e.category+"' is not allowed");return}if(!e.formFactors){jQuery.sap.log.error("explored: cannot register entity '"+e.id+"'. missing 'formFactors'");return}if(!F[e.formFactors]){jQuery.sap.log.error("explored: cannot register entity '"+e.id+"'. formFactors '"+e.formFactors+"' is not allowed");return}e.formFactors=F[e.formFactors];var A=false;jQuery.each(a,function(i,P){if(!e[P]){jQuery.sap.log.error("explored: cannot register entity '"+e.id+"'. missing '"+P+"'");A=true;return false}});if(A){return}jQuery.each(a,function(i,P){f[P][e[P]]=true});sap.ui.demokit.explored.data.entities.push(e)})});jQuery.each(sap.ui.demokit.explored.data.entities,function(i,e){if(e.samples&&!(e.samples instanceof Array)){e.samples=[];jQuery.sap.log.error("explored: cannot register samples for entity '"+e.id+"'. 'samples' is not an array")}if(!e.samples){e.samples=[]}var s=[];e.searchTags=e.name+" "+e.name.replace(" ","")+" "+e.category;jQuery.each(e.samples,function(j,I){var S=sap.ui.demokit.explored.data.samples[I];if(!S){jQuery.sap.log.error("explored: cannot register sample '"+I+"' for '"+e.id+"'. not found in the available docu indizes")}else{s.push(S);e.searchTags+=" "+S.name}});e.samples=s;e.sampleCount=e.samples.length});sap.ui.demokit.explored.data.entityCount=sap.ui.demokit.explored.data.entities.length;jQuery.each(f,function(s,b){sap.ui.demokit.explored.data.filter[s]=[];jQuery.each(b,function(k,v){sap.ui.demokit.explored.data.filter[s].push({id:k})})})},_loadUi:function(){var p=jQuery.sap.getModulePath("sap.ui.demokit.explored");new sap.m.Shell("Shell",{title:"SAPUI5 Explored",showLogout:false,app:new sap.ui.core.ComponentContainer({name:'sap.ui.demokit.explored'}),homeIcon:{'phone':p+'/img/57_iPhone_Desktop_Launch.png','phone@2':p+'/img/114_iPhone-Retina_Web_Clip.png','tablet':p+'/img/72_iPad_Desktop_Launch.png','tablet@2':p+'/img/144_iPad_Retina_Web_Clip.png','favicon':p+'/img/favicon.ico','precomposed':false}}).placeAt('content')}};