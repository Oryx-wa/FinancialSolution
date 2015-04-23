/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.table.AnalyticalTable");jQuery.sap.require("sap.ui.table.library");jQuery.sap.require("sap.ui.table.Table");sap.ui.table.Table.extend("sap.ui.table.AnalyticalTable",{metadata:{publicMethods:["getTotalSize"],library:"sap.ui.table",properties:{"sumOnTop":{type:"boolean",group:"Appearance",defaultValue:false},"numberOfExpandedLevels":{type:"int",group:"Misc",defaultValue:0},"columnVisibilityMenuSorter":{type:"any",group:"Appearance",defaultValue:null},"dirty":{type:"boolean",group:"Appearance",defaultValue:null,deprecated:true}}}});jQuery.sap.require("sap.ui.model.analytics.TreeBindingAdapter");jQuery.sap.require("sap.ui.table.AnalyticalColumn");
sap.ui.table.AnalyticalTable.prototype.init=function(){sap.ui.table.Table.prototype.init.apply(this,arguments);this.addStyleClass("sapUiAnalyticalTable");this.attachBrowserEvent("contextmenu",this._onContextMenu);this.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);this.setShowColumnVisibilityMenu(true);this.setEnableColumnFreeze(true);this.setEnableCellFilter(true);this._aGroupedColumns=[];if(sap.ui.getCore().getConfiguration().getTheme()==="sap_bluecrystal"){jQuery.sap.require("sap.ui.core.IconPool");sap.ui.core.IconPool.insertFontFaceStyle()}this._bBindingAttachedListener=false};
sap.ui.table.AnalyticalTable.prototype.setFixedRowCount=function(){jQuery.sap.log.error("The property fixedRowCount is not supported by the AnalyticalTable and must not be set!");return this};
sap.ui.table.AnalyticalTable.prototype.setFixedBottomRowCount=function(){jQuery.sap.log.error("The property fixedBottomRowCount is managed by the AnalyticalTable and must not be set!");return this};
sap.ui.table.AnalyticalTable.prototype.onAfterRendering=function(){sap.ui.table.Table.prototype.onAfterRendering.apply(this,arguments);this.$().find("[role=grid]").attr("role","treegrid")};
sap.ui.table.AnalyticalTable.prototype.setDirty=function(d){jQuery.sap.log.error("The property \"dirty\" is deprecated. Please use \"showOverlay\".");this.setProperty("dirty",d,true);this.setShowOverlay(this.getDirty());return this};
sap.ui.table.AnalyticalTable.prototype.getModel=function(m,n){var m=sap.ui.table.Table.prototype.getModel.apply(this,arguments);if(m&&sap.ui.model.odata&&m instanceof sap.ui.model.odata.ODataModel){jQuery.sap.require("sap.ui.model.analytics.ODataModelAdapter");sap.ui.model.analytics.ODataModelAdapter.apply(m)}return m};
sap.ui.table.AnalyticalTable.prototype._bindAggregation=function(n,p,t,s,f){if(n==="rows"){this.setProperty("firstVisibleRow",0,true)}return sap.ui.table.Table.prototype._bindAggregation.apply(this,arguments)};
sap.ui.table.AnalyticalTable.prototype._onBindingChange=function(e){sap.ui.table.Table.prototype._onBindingChange.apply(this,arguments);var r=typeof(e)==="object"?e.getParameter("reason"):e;if(r!=="sort"){this._invalidateColumnMenus()}};
sap.ui.table.AnalyticalTable.prototype.bindRows=function(b){var p,t,s,f;if(typeof b=="string"){p=arguments[0];t=arguments[1];s=arguments[2];f=arguments[3];b={path:p,sorter:s,filters:f};if(t instanceof sap.ui.base.ManagedObject){b.template=t}else if(typeof t==="function"){b.factory=t}}var c=this.getColumns();for(var i=0,l=c.length;i<l;i++){if(c[i].getSorted()){b.sorter=b.sorter||[];b.sorter.push(new sap.ui.model.Sorter(c[i].getSortProperty()||c[i].getLeadingProperty(),c[i].getSortOrder()===sap.ui.table.SortOrder.Descending))}}b.parameters=b.parameters||{};b.parameters.analyticalInfo=this._getColumnInformation();b.parameters.sumOnTop=this.getSumOnTop();b.parameters.numberOfExpandedLevels=this.getNumberOfExpandedLevels();var r=this.bindAggregation("rows",b);this._bSupressRefresh=true;this._updateColumns();this._bSupressRefresh=false;this._bBindingAttachedListener=false;return r};
sap.ui.table.AnalyticalTable.prototype.updateRows=function(r){this._attachBindingListener();sap.ui.table.Table.prototype.updateRows.apply(this,arguments)};
sap.ui.table.AnalyticalTable.prototype.refreshRows=function(r){this._attachBindingListener();sap.ui.table.Table.prototype.refreshRows.apply(this,arguments)};
sap.ui.table.AnalyticalTable.prototype._attachBindingListener=function(){if(!this._bBindingAttachedListener){this._bBindingAttachedListener=true;var b=this.getBinding("rows");var t=this;if(b){b.attachContextChange(function(e){if(!t._oSelection){return}var p=e.getParameters(),T=p.type,i=p.index,l=p.length;if(T==="remove"){t._oSelection.sliceSelectionInterval(i,Math.max(i,i+l-1))}else{t._oSelection.moveSelectionInterval(i,l)}})}}};
sap.ui.table.AnalyticalTable.prototype._getColumnInformation=function(){var c=[],t=this.getColumns();for(var i=0;i<this._aGroupedColumns.length;i++){var C=sap.ui.getCore().byId(this._aGroupedColumns[i]);if(!C)continue;c.push({name:C.getLeadingProperty(),visible:C.getVisible(),grouped:C.getGrouped(),total:C.getSummed(),sorted:C.getSorted(),sortOrder:C.getSortOrder(),inResult:C.getInResult(),formatter:C.getGroupHeaderFormatter()})}for(var i=0;i<t.length;i++){var C=t[i];if(jQuery.inArray(C.getId(),this._aGroupedColumns)>-1){continue}if(!C instanceof sap.ui.table.AnalyticalColumn){jQuery.sap.log.error("You have to use AnalyticalColumns for the Analytical table")}c.push({name:C.getLeadingProperty(),visible:C.getVisible(),grouped:C.getGrouped(),total:C.getSummed(),sorted:C.getSorted(),sortOrder:C.getSortOrder(),inResult:C.getInResult(),formatter:C.getGroupHeaderFormatter()})}return c};
sap.ui.table.AnalyticalTable.prototype._updateTableContent=function(){sap.ui.table.Table.prototype._updateTableContent.apply(this,arguments);var b=this.getBinding("rows"),f=this.getFirstVisibleRow(),F=this.getFixedBottomRowCount(),c=this.getVisibleRowCount(),C=this.getColumns();if(!b){return}var a=this._getFirstMeasureColumnIndex(),m;if(a>-1){var h=this.getSelectionMode()!==sap.ui.table.SelectionMode.None&&this.getSelectionBehavior()!==sap.ui.table.SelectionBehavior.RowOnly;var $=this.$().find(".sapUiTableCtrlFirstCol > th");if(h){$=$.not(":nth-child(1)")}var o=$.get(0).getBoundingClientRect().left;var d=$.get(this._getFirstMeasureColumnIndex());if(d){var M=32+d.getBoundingClientRect().left-o;m=M+"px"}else{m="none"}}else{m="none"}var r=this.getRows();for(var R=0,l=Math.min(c,r.length);R<l;R++){var I=R>(c-F-1)&&b.getLength()>c,e=I?(b.getLength()-1-(c-1-R)):f+R,g=this.getContextInfoByIndex(e),j=r[R],k=j.$(),n=j.$("fixed"),p=this.$().find("div[data-sap-ui-rowindex="+k.attr("data-sap-ui-rowindex")+"]"),L=g?g.level:0;if(!g||!g.context){k.removeAttr("data-sap-ui-level");k.removeAttr('aria-level');k.removeAttr('aria-expanded');k.removeClass("sapUiTableGroupHeader");k.removeClass("sapUiAnalyticalTableSum");k.removeClass("sapUiAnalyticalTableDummy");n.removeAttr("data-sap-ui-level");n.removeAttr('aria-level');n.removeAttr('aria-expanded');n.removeClass("sapUiTableGroupHeader");p.removeClass("sapUiTableGroupHeader");p.html("");p.removeAttr("data-sap-ui-level");p.removeClass("sapUiAnalyticalTableSum");p.removeClass("sapUiAnalyticalTableDummy");if(g&&!g.context){k.addClass("sapUiAnalyticalTableDummy");p.addClass("sapUiAnalyticalTableDummy");p.html('<div class="sapUiAnalyticalTableLoading">Loading...</div>')}continue}if(b.indexHasChildren&&b.indexHasChildren(e)){k.addClass("sapUiTableGroupHeader");n.addClass("sapUiTableGroupHeader");var s=g.expanded?"sapUiTableGroupIconOpen":"sapUiTableGroupIconClosed";k.attr('aria-expanded',g.expanded);n.attr('aria-expanded',g.expanded);var G=b.getGroupName(g.context,g.level);p.html("<div class=\"sapUiTableGroupIcon "+s+"\" tabindex=\"-1\" title=\""+G+"\" style=\"max-width:"+m+"\">"+G+"</div>");if(g.expanded&&!this.getSumOnTop()){k.addClass("sapUiTableRowHidden")}k.removeClass("sapUiAnalyticalTableSum");p.removeClass("sapUiAnalyticalTableSum");k.removeClass("sapUiAnalyticalTableDummy");p.removeClass("sapUiAnalyticalTableDummy");p.addClass("sapUiTableGroupHeader").removeAttr("title")}else{k.attr('aria-expanded',false);k.removeClass("sapUiTableGroupHeader");k.removeClass("sapUiTableRowHidden");k.removeClass("sapUiAnalyticalTableSum");k.removeClass("sapUiAnalyticalTableDummy");n.attr('aria-expanded',false);n.removeClass("sapUiTableGroupHeader");p.html("");p.removeClass("sapUiTableGroupHeader");p.removeClass("sapUiAnalyticalTableDummy");p.removeClass("sapUiAnalyticalTableSum");if(g.sum&&g.context&&g.context.getObject()){k.addClass("sapUiAnalyticalTableSum");p.addClass("sapUiAnalyticalTableSum")}}k.attr("data-sap-ui-level",L);n.attr("data-sap-ui-level",L);p.attr("data-sap-ui-level",L);k.attr('aria-level',L+1);n.attr('aria-level',L+1);var q=j.getCells();for(var i=0,t=q.length;i<t;i++){var u=q[i].data("sap-ui-colindex");var v=C[u];var w=jQuery(q[i].$().closest("td"));if(b.isMeasure(v.getLeadingProperty())){if(!g.sum||v.getSummed()){w.removeClass("sapUiTableCellHidden")}else{w.addClass("sapUiTableCellHidden")}}}}};
sap.ui.table.AnalyticalTable.prototype.onclick=function(e){if(jQuery(e.target).hasClass("sapUiTableGroupIcon")){this._onNodeSelect(e)}else if(jQuery(e.target).hasClass("sapUiAnalyticalTableSum")){e.preventDefault();return}else{if(sap.ui.table.Table.prototype.onclick){sap.ui.table.Table.prototype.onclick.apply(this,arguments)}}};
sap.ui.table.AnalyticalTable.prototype.onsapselect=function(e){if(jQuery(e.target).hasClass("sapUiTableGroupIcon")){this._onNodeSelect(e)}else if(jQuery(e.target).hasClass("sapUiAnalyticalTableSum")){e.preventDefault();return}else{var t=jQuery(e.target),T=t.closest('div.sapUiTableRowHdr');if(T.hasClass('sapUiTableGroupHeader')&&T.hasClass('sapUiTableRowHdr')){var r=this.getFirstVisibleRow()+parseInt(T.attr("data-sap-ui-rowindex"),10);var b=this.getBinding("rows");b.toggleIndex(r);this.updateRows();return}if(sap.ui.table.Table.prototype.onsapselect){sap.ui.table.Table.prototype.onsapselect.apply(this,arguments)}}};
sap.ui.table.AnalyticalTable.prototype._onNodeSelect=function(e){var $=jQuery(e.target).parent();if($.length>0){var r=this.getFirstVisibleRow()+parseInt($.attr("data-sap-ui-rowindex"),10);var b=this.getBinding("rows");b.toggleIndex(r);this.updateRows()}e.preventDefault();e.stopPropagation()};
sap.ui.table.AnalyticalTable.prototype._onContextMenu=function(e){if(jQuery(e.target).closest('tr').hasClass('sapUiTableGroupHeader')||jQuery(e.target).closest('.sapUiTableRowHdr.sapUiTableGroupHeader').length>0){this._iGroupedLevel=jQuery(e.target).closest('[data-sap-ui-level]').data('sap-ui-level');var m=this._getGroupHeaderMenu();var a=sap.ui.core.Popup.Dock;m.open(false,e.target,a.LeftTop,a.LeftTop,document,(e.pageX-2)+" "+(e.pageY-2));e.preventDefault();e.stopPropagation();return}return true};
sap.ui.table.AnalyticalTable.prototype._getGroupHeaderMenu=function(){var t=this;function g(){var i=t._iGroupedLevel-1;if(t._aGroupedColumns[i]){var c=t.getColumns().filter(function(c){if(t._aGroupedColumns[i]===c.getId()){return true}})[0];return{column:c,index:jQuery.inArray(c,t.getColumns())+1}}else{return undefined}}if(!this._oGroupHeaderMenu){this._oGroupHeaderMenu=new sap.ui.unified.Menu();this._oGroupHeaderMenuVisibilityItem=new sap.ui.unified.MenuItem({text:this._oResBundle.getText("TBL_SHOW_COLUMN"),select:function(){var G=g();if(G){var c=G.column;c.setShowIfGrouped(!c.getShowIfGrouped())}}});this._oGroupHeaderMenu.addItem(this._oGroupHeaderMenuVisibilityItem);this._oGroupHeaderMenu.addItem(new sap.ui.unified.MenuItem({text:this._oResBundle.getText("TBL_UNGROUP"),select:function(){var C=t.getColumns(),f=0,l=-1,u=-1,c;for(var i=0;i<C.length;i++){c=C[i];if(c.getGrouped()){f++;if(f==t._iGroupedLevel){c._bSkipUpdateAI=true;c.setGrouped(false);c._bSkipUpdateAI=false;u=i}else{l=i}}}if(l>-1&&u>-1&&u<l){var U=C[u];var h=U.getHeaderSpan();if(jQuery.isArray(h)){h=h[0]}var r=[];for(var i=u;i<u+h;i++){r.push(C[i])}jQuery.each(r,function(I,c){t.removeColumn(c);t.insertColumn(c,l)})}t._updateTableColumnDetails();t.updateAnalyticalInfo()}}));this._oGroupHeaderMenu.addItem(new sap.ui.unified.MenuItem({text:this._oResBundle.getText("TBL_UNGROUP_ALL"),select:function(){var C=t.getColumns();for(var i=0;i<C.length;i++){C[i]._bSkipUpdateAI=true;C[i].setGrouped(false);C[i]._bSkipUpdateAI=false}t._bSupressRefresh=true;t._updateTableColumnDetails();t.updateAnalyticalInfo();t._bSupressRefresh=false}}));this._oGroupHeaderMoveUpItem=new sap.ui.unified.MenuItem({text:this._oResBundle.getText("TBL_MOVE_UP"),select:function(){var G=g();if(G){var c=G.column;var i=jQuery.inArray(c.getId(),t._aGroupedColumns);if(i>0){t._aGroupedColumns[i]=t._aGroupedColumns.splice(i-1,1,t._aGroupedColumns[i])[0];t.updateAnalyticalInfo()}}},icon:"sap-icon://arrow-top"});this._oGroupHeaderMenu.addItem(this._oGroupHeaderMoveUpItem);this._oGroupHeaderMoveDownItem=new sap.ui.unified.MenuItem({text:this._oResBundle.getText("TBL_MOVE_DOWN"),select:function(){var G=g();if(G){var c=G.column;var i=jQuery.inArray(c.getId(),t._aGroupedColumns);if(i<t._aGroupedColumns.length){t._aGroupedColumns[i]=t._aGroupedColumns.splice(i+1,1,t._aGroupedColumns[i])[0];t.updateAnalyticalInfo()}}},icon:"sap-icon://arrow-bottom"});this._oGroupHeaderMenu.addItem(this._oGroupHeaderMoveDownItem);this._oGroupHeaderMenu.addItem(new sap.ui.unified.MenuItem({text:this._oResBundle.getText("TBL_SORT_ASC"),select:function(){var G=g();if(G){var c=G.column;c.sort(false)}},icon:"sap-icon://up"}));this._oGroupHeaderMenu.addItem(new sap.ui.unified.MenuItem({text:this._oResBundle.getText("TBL_SORT_DESC"),select:function(){var G=g();if(G){var c=G.column;c.sort(true)}},icon:"sap-icon://down"}));this._oGroupHeaderMenu.addItem(new sap.ui.unified.MenuItem({text:this._oResBundle.getText("TBL_COLLAPSE_LEVEL"),select:function(){t.getBinding("rows").collapseAll(t._iGroupedLevel);t._oSelection.clearSelection();t.updateRows()}}));this._oGroupHeaderMenu.addItem(new sap.ui.unified.MenuItem({text:this._oResBundle.getText("TBL_COLLAPSE_ALL"),select:function(){t.getBinding("rows").collapseAll();t._oSelection.clearSelection();t.updateRows()}}))}var G=g();if(G){var c=G.column;if(c.getShowIfGrouped()){this._oGroupHeaderMenuVisibilityItem.setText(this._oResBundle.getText("TBL_HIDE_COLUMN"))}else{this._oGroupHeaderMenuVisibilityItem.setText(this._oResBundle.getText("TBL_SHOW_COLUMN"))}this._oGroupHeaderMoveUpItem.setEnabled(G.index>0);this._oGroupHeaderMoveDownItem.setEnabled(G.index<this._aGroupedColumns.length-2)}else{this._oGroupHeaderMoveUpItem.setEnabled(true);this._oGroupHeaderMoveDownItem.setEnabled(true)}return this._oGroupHeaderMenu};
sap.ui.table.AnalyticalTable.prototype.expand=function(r){var b=this.getBinding("rows");if(b){var c=this.getContextByIndex(r);b.expand(c);this.updateRows()}};
sap.ui.table.AnalyticalTable.prototype.collapse=function(r){var b=this.getBinding("rows");if(b){var c=this.getContextByIndex(r);b.collapse(c);this.updateRows()}};
sap.ui.table.AnalyticalTable.prototype.isExpanded=function(r){var b=this.getBinding("rows");if(b){var c=this.getContextByIndex(r);return b.isExpanded(c)}return false};
sap.ui.table.AnalyticalTable.prototype.selectAll=function(){sap.ui.table.Table.prototype.selectAll.apply(this);var s=this.getSelectionMode();if(!this.getEnableSelectAll()||(s!="Multi"&&s!="MultiToggle")){return this}var b=this.getBinding("rows");if(b){var l=(b.getLength()||0);for(var i=0;i<l;i++){var c=this.getContextInfoByIndex(i);if(c.sum||b.indexHasChildren(i)){this._oSelection.removeSelectionInterval(i,i)}}this.$("selall").attr('title',this._oResBundle.getText("TBL_DESELECT_ALL")).removeClass("sapUiTableSelAll")}return this};
sap.ui.table.AnalyticalTable.prototype.getContextInfoByIndex=function(i){var b=this.getBinding("rows");return i>=0&&b?b.getContextInfo(i):null};
sap.ui.table.AnalyticalTable.prototype._onColumnMoved=function(e){sap.ui.table.Table.prototype._onColumnMoved.apply(this,arguments);this.updateAnalyticalInfo()};
sap.ui.table.AnalyticalTable.prototype.addColumn=function(c,s){var C=this._getColumn(c);if(C.getGrouped()){this._addGroupedColumn(C.getId())}return sap.ui.table.Table.prototype.addColumn.call(this,C,s)};
sap.ui.table.AnalyticalTable.prototype.insertColumn=function(c,i,s){var C=this._getColumn(c);if(C.getGrouped()){this._addGroupedColumn(C.getId())}return sap.ui.table.Table.prototype.insertColumn.call(this,C,i,s)};
sap.ui.table.AnalyticalTable.prototype.removeColumn=function(c,s){var C=sap.ui.table.Table.prototype.removeColumn.apply(this,arguments);if(C){this._aGroupedColumns=jQuery.grep(this._aGroupedColumns,function(v){return v!=C.getId()})}return C};
sap.ui.table.AnalyticalTable.prototype.removeAllColumns=function(s){this._aGroupedColumns=[];return sap.ui.table.Table.prototype.removeColumn.apply(this,arguments)};
sap.ui.table.AnalyticalTable.prototype._getColumn=function(c){if(typeof c==="string"){var C=new sap.ui.table.AnalyticalColumn({leadingProperty:c,template:c,managed:true});return C}else if(c instanceof sap.ui.table.AnalyticalColumn){return c}else{throw new Error("Wrong column type. You need to define a string (property) or pass an AnalyticalColumnObject")}};
sap.ui.table.AnalyticalTable.prototype._updateColumns=function(){this._updateTableColumnDetails();this.updateAnalyticalInfo()};
sap.ui.table.AnalyticalTable.prototype.updateAnalyticalInfo=function(s){var b=this.getBinding("rows");if(b){var c=this._getColumnInformation();b.updateAnalyticalInfo(c);this._updateTotalRow(c,s);if(s||this._bSupressRefresh){return}this.refreshRows()}};
sap.ui.table.AnalyticalTable.prototype._updateTotalRow=function(c,s){var h=false;for(var i=0,l=c?c.length:0;i<l;i++){if(c[i].visible&&c[i].total){h=true;break}}var b=this.getBinding("rows");if(b&&(!b.bProvideGrandTotals||!b._hasTotaledMeasures())){h=false}var f=this.getFixedBottomRowCount();if(h){if(f!==1){this.setProperty("fixedBottomRowCount",1,s)}}else{if(f!==0){this.setProperty("fixedBottomRowCount",0,s)}}};
sap.ui.table.AnalyticalTable.prototype._updateTableColumnDetails=function(){var b=this.getBinding("rows"),r=b&&b.getAnalyticalQueryResult();if(r){var c=this.getColumns(),g=[],u=[],d=[],D={},C,a;for(var i=0;i<c.length;i++){C=c[i];C._isLastGroupableLeft=false;C._bLastGroupAndGrouped=false;C._bDependendGrouped=false;if(!C.getVisible()){continue}var l=C.getLeadingProperty();a=r.findDimensionByPropertyName(l);if(a){var e=a.getName();if(!D[e]){D[e]={dimension:a,columns:[C]}}else{D[e].columns.push(C)}if(C.getGrouped()&&jQuery.inArray(e,g)==-1){g.push(e)}if(jQuery.inArray(e,d)==-1){d.push(e)}}}u=jQuery.grep(d,function(s){return(jQuery.inArray(s,g)==-1)});if(g.length>0){jQuery.each(g,function(i,s){jQuery.each(D[s].columns,function(j,o){if(!o.getGrouped()){o._bDependendGrouped=true}})});if(g.length==d.length){a=r.findDimensionByPropertyName(sap.ui.getCore().byId(this._aGroupedColumns[this._aGroupedColumns.length-1]).getLeadingProperty());var G=D[a.getName()].columns;jQuery.each(G,function(i,o){o._bLastGroupAndGrouped=true})}}if(u.length==1){jQuery.each(D[u[0]].columns,function(j,o){o._isLastGroupableLeft=true})}}};
sap.ui.table.AnalyticalTable.prototype._getFirstMeasureColumnIndex=function(){var b=this.getBinding("rows"),r=b&&b.getAnalyticalQueryResult(),c=this._getVisibleColumns();if(!r){return-1}for(var i=0;i<c.length;i++){var C=c[i],l=C.getLeadingProperty();if(r.findMeasureByName(l)||r.findMeasureByPropertyName(l)){return i}}};
sap.ui.table.AnalyticalTable.prototype.getTotalSize=function(){var b=this.getBinding("rows");if(b){return b.getTotalSize()}return 0};
sap.ui.table.AnalyticalTable.prototype._hasData=function(){var b=this.getBinding("rows"),l=b&&(b.getLength()||0),h=b&&b.hasGrandTotalDisplayed();if(!b||(h&&l<2)||(!h&&l===0)){return false}return true};
sap.ui.table.AnalyticalTable.prototype._onPersoApplied=function(){sap.ui.table.Table.prototype._onPersoApplied.apply(this,arguments);this._aGroupedColumns=[];var c=this.getColumns();for(var i=0,l=c.length;i<l;i++){if(c[i].getGrouped()){this._addGroupedColumn(c[i].getId())}}this._updateTableColumnDetails();this.updateAnalyticalInfo()};
sap.ui.table.AnalyticalTable.prototype._addGroupedColumn=function(c){if(jQuery.inArray(c,this._aGroupedColumns)<0){this._aGroupedColumns.push(c)}};
