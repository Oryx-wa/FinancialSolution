/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.MultiComboBox.
jQuery.sap.declare("sap.m.MultiComboBox");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ComboBoxBase");


/**
 * Constructor for a new MultiComboBox.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSelectedKeys selectedKeys} : string[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedItems selectedItems} : string | sap.ui.core.Item</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.MultiComboBox#event:selectionChange selectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.MultiComboBox#event:selectionFinish selectionFinish} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ComboBoxBase#constructor sap.m.ComboBoxBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The MultiComboBox control provides a list box with items and a text field allowing the user to either type a value directly into the control or choose from the list of existing items.
 * @extends sap.m.ComboBoxBase
 *
 * @author SAP SE 
 * @version 1.24.2
 *
 * @constructor
 * @public
 * @since 1.22.0
 * @name sap.m.MultiComboBox
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.m.ComboBoxBase.extend("sap.m.MultiComboBox", { metadata : {

	publicMethods : [
		// methods
		"addSelectedKeys", "removeSelectedKeys"
	],
	library : "sap.m",
	properties : {
		"selectedKeys" : {type : "string[]", group : "Data", defaultValue : null}
	},
	associations : {
		"selectedItems" : {type : "sap.ui.core.Item", multiple : true, singularName : "selectedItem"}
	},
	events : {
		"selectionChange" : {}, 
		"selectionFinish" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.MultiComboBox with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.m.MultiComboBox.extend
 * @function
 */

sap.m.MultiComboBox.M_EVENTS = {'selectionChange':'selectionChange','selectionFinish':'selectionFinish'};


/**
 * Getter for property <code>selectedKeys</code>.
 * Keys of the selected items. If the key has no corresponding item, no changes will apply. If duplicate keys exists the first item matching the key is used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>selectedKeys</code>
 * @public
 * @name sap.m.MultiComboBox#getSelectedKeys
 * @function
 */

/**
 * Setter for property <code>selectedKeys</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aSelectedKeys  new value for property <code>selectedKeys</code>
 * @return {sap.m.MultiComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.MultiComboBox#setSelectedKeys
 * @function
 */


/**
 * Provides getter and setter for the selected items from
 * the aggregation named items.
 * 
 * @return {string[]}
 * @public
 * @name sap.m.MultiComboBox#getSelectedItems
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Item} vSelectedItem
 *    Id of a selectedItem which becomes an additional target of this <code>selectedItems</code> association.
 *    Alternatively, a selectedItem instance may be given. 
 * @return {sap.m.MultiComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.MultiComboBox#addSelectedItem
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Item} vSelectedItem the selectedItem to remove or its index or id
 * @return {string} the id of the removed selectedItem or null
 * @public
 * @name sap.m.MultiComboBox#removeSelectedItem
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.m.MultiComboBox#removeAllSelectedItems
 * @function
 */

	
/**
 * Event is fired when selection of an item is changed.
 *
 * @name sap.m.MultiComboBox#selectionChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Item} oControlEvent.getParameters.changedItem Item which selection is changed
 * @param {boolean} oControlEvent.getParameters.selected Selection state: true if item is selected, false if
 *         item is not selected
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selectionChange' event of this <code>sap.m.MultiComboBox</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.MultiComboBox</code>.<br/> itself. 
 *  
 * Event is fired when selection of an item is changed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.MultiComboBox</code>.<br/> itself.
 *
 * @return {sap.m.MultiComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.MultiComboBox#attachSelectionChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'selectionChange' event of this <code>sap.m.MultiComboBox</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.MultiComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.MultiComboBox#detachSelectionChange
 * @function
 */

/**
 * Fire event selectionChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'changedItem' of type <code>sap.ui.core.Item</code> Item which selection is changed</li>
 * <li>'selected' of type <code>boolean</code> Selection state: true if item is selected, false if
						item is not selected</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.MultiComboBox} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.MultiComboBox#fireSelectionChange
 * @function
 */


/**
 * Event is fired when user has finished a selection of items in a list box and list box has been closed.
 *
 * @name sap.m.MultiComboBox#selectionFinish
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Item[]} oControlEvent.getParameters.selectedItems The selected items which are selected after list box has been closed.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selectionFinish' event of this <code>sap.m.MultiComboBox</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.MultiComboBox</code>.<br/> itself. 
 *  
 * Event is fired when user has finished a selection of items in a list box and list box has been closed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.MultiComboBox</code>.<br/> itself.
 *
 * @return {sap.m.MultiComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.MultiComboBox#attachSelectionFinish
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'selectionFinish' event of this <code>sap.m.MultiComboBox</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.MultiComboBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.MultiComboBox#detachSelectionFinish
 * @function
 */

/**
 * Fire event selectionFinish to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItems' of type <code>sap.ui.core.Item[]</code> The selected items which are selected after list box has been closed.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.MultiComboBox} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.MultiComboBox#fireSelectionFinish
 * @function
 */


/**
 * Adds selected items. Only items with valid keys are added as selected.
 *
 * @name sap.m.MultiComboBox#addSelectedKeys
 * @function
 * @param {string[]} aKeys
 *         An array of item keys that identifies the items to be added as selected
 * @type sap.m.MultiComboBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Removes selected items. Only items with valid keys are removed.
 *
 * @name sap.m.MultiComboBox#removeSelectedKeys
 * @function
 * @param {string[]} aKeys
 *         An array of item keys that identifies the items to be removed
 * @type sap.m.MultiComboBox
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


// Start of sap\m\MultiComboBox.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.m.MultiComboBoxRenderer");
jQuery.sap.require("sap.m.Bar");
jQuery.sap.require("sap.m.List");
jQuery.sap.require("sap.m.Popover");
jQuery.sap.require("sap.m.Dialog");
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("jquery.sap.xml");
sap.ui.core.IconPool.insertFontFaceStyle();
sap.ui.core.EnabledPropagator.apply(sap.m.MultiComboBox.prototype, [true]);

/* ----------------------------------------------------------- */
/* Keyboard handling */
/* ----------------------------------------------------------- */
/**
 * Handle End key pressed. Scroll the last token into viewport.
 * 
 * @param {jQuery.Event}
 *          oEvent The event object.
 * @private
 * @name sap.m.MultiComboBox#onsapend
 * @function
 */
sap.m.MultiComboBox.prototype.onsapend = function(oEvent) {
	sap.m.Tokenizer.prototype.onsapend.apply(this._oTokenizer, arguments);
};

/**
 * Handle Home key pressed. Scroll the first token into viewport.
 * 
 * @param {jQuery.Event}
 *          oEvent The event object.
 * @private
 * @name sap.m.MultiComboBox#onsaphome
 * @function
 */
sap.m.MultiComboBox.prototype.onsaphome = function(oEvent) {
	sap.m.Tokenizer.prototype.onsaphome.apply(this._oTokenizer, arguments);
};

/**
 * Handle DOWN arrow key pressed. Set focus to the first list item if the list is open. Otherwise show in input field
 * the description of the next traversal item.
 * 
 * @param {jQuery.Event}
 *          oEvent The event object.
 * @private
 */
sap.m.MultiComboBox.prototype.onsapdown = function(oEvent) {
	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	// mark the event for components that needs to know if the event was handled
	// by this control
	oEvent.setMarked();
	// note: prevent document scrolling when arrow keys are pressed
	oEvent.preventDefault();

	// If list is open then go to the first visible list item. Set this item
	// into the visual viewport.
	// If list is closed...
	var aItems = this.getSelectableItems();
	var oItem = aItems[0];

	if (oItem && this.isOpen()) {
		this.getListItem(oItem).focus();
		return;
	}

	if (this._oTokenizer.getSelectedTokens().length) {
		return;
	}

	this._oTraversalItem = this._getNextTraversalItem();

	if (this._oTraversalItem) {
		this.updateDomValue(this._oTraversalItem.getText());
		this.selectText(0, this.getValue().length);
	}

	this._setContainerSizes();
};

/**
 * Handle UP arrow key pressed. Set focus to input field if first list item has focus. Otherwise show in input field
 * description of the previous traversal item.
 * 
 * @param {jQuery.Event}
 *          oEvent The event object.
 * @private
 */
sap.m.MultiComboBox.prototype.onsapup = function(oEvent) {

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	// mark the event for components that needs to know if the event was handled
	// by this control
	oEvent.setMarked();
	// note: prevent document scrolling when arrow keys are pressed
	oEvent.preventDefault();

	if (this._oTokenizer.getSelectedTokens().length) {
		return;
	}

	this._oTraversalItem = this._getPreviousTraversalItem();

	if (this._oTraversalItem) {
		this.updateDomValue(this._oTraversalItem.getText());
		this.selectText(0, this.getValue().length);
	}

	this._setContainerSizes();
};

/**
 * Handle when enter is pressed.
 * 
 * @param {jQuery.Event}
 *          oEvent The event object.
 * @private
 */
sap.m.MultiComboBox.prototype.onsapenter = function(oEvent) {
	sap.m.ComboBoxBase.prototype.onsapenter.apply(this, arguments);

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	// mark the event for components that needs to know if the event was handled
	// by this control
	oEvent.setMarked();

	var aVisibleItems;
	if (this.isOpen()) {
		aVisibleItems = this.getSelectableItems();
	} else {
		aVisibleItems = this._getItemsStartingText(this.getValue());
	}

	// Only unique value can be take over
	if (aVisibleItems.length > 1) {
		this._showWrongValueVisualEffect();
	}

	if (aVisibleItems.length === 1) {
		var oItem = aVisibleItems[0];
		var oParam = {
			item : oItem,
			id : oItem.getId(),
			key : oItem.getKey(),
			fireChangeEvent : true,
			fireFinishEvent : true,
			suppressInvalidate : true,
			listItemUpdated : false
		};
		if (this.getValue() === "" || jQuery.sap.startsWithIgnoreCase(oItem.getText(), this.getValue())) {
			if (this.getListItem(oItem).isSelected()) {
				this.setValue('');
			} else {
				this.setSelection(oParam);
			}
		}
	}

	this.close();
};

/* =========================================================== */
/* Event handlers */
/* =========================================================== */
/**
 * Handle the focus leave event.
 * 
 * @param {jQuery.Event}
 *          oEvent The event object.
 * @private
 */
sap.m.MultiComboBox.prototype.onsapfocusleave = function(oEvent) {
	var oPicker = this.getAggregation("picker");
	var oControl = sap.ui.getCore().byId(oEvent.relatedControlId);
	var oFocusDomRef = oControl && oControl.getFocusDomRef();
	if (oPicker && oFocusDomRef) {
		if (jQuery.sap.equal(oPicker.getFocusDomRef(), oFocusDomRef)) {
			// force the focus to stay in the MultiComboBox field when scrollbar
			// is moving
			this.focus();
		}
	}
	this._setContainerSizes();
};

/**
 * Get the reference element which the message popup should dock to.
 * 
 * @return {object} Dom Element which the message popup should dock to.
 * @name sap.m.MultiInput#getDomRefForValueStateMessage
 * @since 1.26
 * @protected
 * @function
 */
sap.m.MultiComboBox.prototype.getDomRefForValueStateMessage = function() {
	return this.getDomRef("border");
};

/**
 * Handle the focus in event.
 * 
 * @param {jQuery.Event}
 *          oEvent The event object.
 * @private
 */
sap.m.MultiComboBox.prototype.onfocusin = function(oEvent) {
	this.addStyleClass(sap.m.MultiComboBoxRenderer.CSS_CLASS + "Focused");
	if (oEvent.target === this.getOpenArea()) {
		// force the focus to stay in the input field
		this.focus();
	}
};

sap.m.MultiComboBox.prototype.onsapescape = function(oEvent) {
	sap.m.ComboBoxBase.prototype.onsapescape.apply(this, arguments);
	this._setContainerSizes();
};

/**
 * Handle the browser tap event on the List item.
 * 
 * @param {sap.ui.base.Event}
 *          oEvent
 * @private
 */
sap.m.MultiComboBox.prototype._handleItemTap = function(oEvent) {
	if (oEvent.target.childElementCount === 0 || oEvent.target.childElementCount === 2) {
		if (this.isOpen() && !this._isListInSuggestMode()) {
			this.close();
		}
	}
};

/**
 * Handle the item press event on the List.
 * 
 * @param {sap.ui.base.Event}
 *          oEvent
 * @private
 */
sap.m.MultiComboBox.prototype._handleItemPress = function(oEvent) {
	// If an item is selected clicking on checkbox inside of suggest list the list with all entries should be opened
	if (this.isOpen() && this._isListInSuggestMode() && this.getPicker().oPopup.getOpenState() !== sap.ui.core.OpenState.CLOSING) {
		this.clearFilter();
		var oItem = this._getLastSelectedItem();
		// Scrolls an item into the visual viewport
		if (oItem) {
			this.getListItem(oItem).focus();
		}
		return;
	}
};

/**
 * Handle the selection change event on the List.
 * 
 * @param {sap.ui.base.Event}
 *          oEvent
 * @private
 */
sap.m.MultiComboBox.prototype._handleSelectionLiveChange = function(oEvent) {
	var oListItem = oEvent.getParameter("listItem");
	var bIsSelected = oEvent.getParameter("selected");
	var oNewSelectedItem = this._getItemByListItem(oListItem);

	if (oListItem.getType() === "Inactive") {
		// workaround: this is needed because the List fires the "selectionChange" event on inactive items
		return;
	}

	// pre-assertion
	jQuery.sap.assert(oNewSelectedItem, "The corresponding mapped item was not found on " + this);

	if (!oNewSelectedItem) {
		return;
	}
	var oParam = {
		item : oNewSelectedItem,
		id : oNewSelectedItem.getId(),
		key : oNewSelectedItem.getKey(),
		fireChangeEvent : true,
		suppressInvalidate : true,
		listItemUpdated : true
	};
	if (bIsSelected) {
		// update the selected item
		this.fireChangeEvent(oNewSelectedItem.getText());
		this.setSelection(oParam);
	} else {
		this.fireChangeEvent(oNewSelectedItem.getText());
		this.removeSelection(oParam);
		this.setValue('');
	}

	if (this.isOpen() && this.getPicker().oPopup.getOpenState() !== sap.ui.core.OpenState.CLOSING) {
		// workaround: this is needed because the List fires the "selectionChange" event during the popover is closing.
		// So clicking on list item description the focus should be replaced to input field. Otherwise the focus is set to
		// oListItem.

		// Scrolls an item into the visual viewport
		oListItem.focus();
	}
};

/**
 * Function is called on key down keyboard input
 * 
 * @private
 * @param {jQuery.event}
 *          oEvent
 */
sap.m.MultiComboBox.prototype.onkeydown = function(oEvent) {
	sap.m.ComboBoxBase.prototype.onkeydown.apply(this, arguments);

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	// only if there is no text and tokenizer has some tokens
	if (this.getValue().length === 0 && (oEvent.ctrlKey || oEvent.metaKey) && (oEvent.which === jQuery.sap.KeyCodes.A)
			&& this._hasTokens()) {
		this._oTokenizer.focus();
		this._oTokenizer.selectAllTokens(true);
		oEvent.preventDefault();
	}
};

/**
 * Handle the input event on the control's input field.
 * 
 * @param {jQuery.Event}
 *          oEvent The event object.
 * @private
 */
sap.m.MultiComboBox.prototype.oninput = function(oEvent) {
	sap.m.ComboBoxBase.prototype.oninput.apply(this, arguments);
	var sValue = oEvent.target.value;
	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	var aItems = this._getItemsStartingText(sValue);
	var bVisibleItemFound = !!aItems.length;

	// suppress invalid value
	if (!bVisibleItemFound && sValue !== "") {
		this.updateDomValue(this._sOldValue || "");

		if (this._iOldCursorPos) {
			jQuery(this.getFocusDomRef()).cursorPos(this._iOldCursorPos);
		}
		this._showWrongValueVisualEffect();
		return;
	}

	this.getSelectableItems().forEach(function(oItem) {
		var bMatch = jQuery.sap.startsWithIgnoreCase(oItem.getText(), sValue);
		if (sValue === "") {
			bMatch = true;
		}
		var oListItem = this.getListItem(oItem);
		if (oListItem) {
			oListItem.setVisible(bMatch);
		}
	}, this);

	this._setContainerSizes();

	// First do manipulations on list items and then let the list renders
	if (this.getValue() === "" || !bVisibleItemFound) {
		this.close();
	} else {
		this.open();
	}
};

/**
 * Function is called on key up keyboard input
 * 
 * @private
 * @param {jQuery.event}
 *          oEvent
 */
sap.m.MultiComboBox.prototype.onkeyup = function(oEvent) {
	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	this._sOldValue = this.getValue();
	this._iOldCursorPos = jQuery(this.getFocusDomRef()).cursorPos();
};

/* ----------------------------------------------------------- */
/*                                                             */
/* ----------------------------------------------------------- */
/**
 * 
 * @private
 */
sap.m.MultiComboBox.prototype._showWrongValueVisualEffect = function() {
	var sValueState = this.getValueState();
	if (sValueState === sap.ui.core.ValueState.Error || sValueState === sap.ui.core.ValueState.Success
			|| sValueState === sap.ui.core.ValueState.Warning) {
		this.$().removeClass("sapMInputBase" + sValueState);
		jQuery.sap.delayedCall(300, this.$(), "addClass", ["sapMInputBase" + sValueState]);
	} else {
		this.$().addClass("sapMInputBaseError");
		jQuery.sap.delayedCall(300, this.$(), "removeClass", ["sapMInputBaseError"]);
	}
};

/**
 * Creates a picker. To be overwritten by subclasses.
 * 
 * @param {string}
 *          sPickerType
 * @returns {sap.m.Popover | sap.m.Dialog} The picker pop-up to be used.
 * @protected
 * @function
 */
sap.m.MultiComboBox.prototype.createPicker = function(sPickerType) {
	var oPicker = this.getAggregation("picker");

	if (oPicker) {
		return oPicker;
	}

	oPicker = this["_create" + sPickerType]();

	// define a parent-child relationship between the control's and the picker pop-up (Popover or Dialog)
	this.setAggregation("picker", oPicker, true);

	// configuration
	oPicker.setHorizontalScrolling(false).addStyleClass(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "Picker")
			.attachBeforeOpen(this.onBeforeOpen, this).attachAfterOpen(this.onAfterOpen, this).attachBeforeClose(
					this.onBeforeClose, this).attachAfterClose(this.onAfterClose, this).addEventDelegate({
				onBeforeRendering : this.onBeforeRenderingPicker,
				onAfterRendering : this.onAfterRenderingPicker
			}, this).addContent(this.getList());

	return oPicker;
};

/**
 * Required adaptations before rendering.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype.onBeforeRendering = function() {
	sap.m.ComboBoxBase.prototype.onBeforeRendering.apply(this, arguments);

	var aItems = this.getItems();
	this._synchronizeSelectedItemAndKey(aItems);
	this._clearList();
	this._clearTokenizer();
	this._fillList(aItems);
};

/**
 * This hook method is called before the MultiComboBox's Pop-up is rendered.
 * 
 * @protected
 * @name sap.m.MultiComboBox#onBeforeRenderingPicker
 */
sap.m.MultiComboBox.prototype.onBeforeRenderingPicker = function() {
	var fnOnBeforeRenderingPopupType = this["_onBeforeRendering" + this.getPickerType()];
	if (fnOnBeforeRenderingPopupType) {
		fnOnBeforeRenderingPopupType.call(this);
	}
};

/**
 * This hook method is called after the MultiComboBox's Pop-up is rendered.
 * 
 * @protected
 * @name sap.m.MultiComboBox#onAfterRenderingPicker
 */
sap.m.MultiComboBox.prototype.onAfterRenderingPicker = function() {
	var fnOnAfterRenderingPopupType = this["_onAfterRendering" + this.getPickerType()];

	if (fnOnAfterRenderingPopupType) {
		fnOnAfterRenderingPopupType.call(this);
	}
};

/**
 * This event handler will be called before the MultiComboBox Popup is opened.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype.onBeforeOpen = function() {
	var fnPickerTypeBeforeOpen = this["_onBeforeOpen" + this.getPickerType()];

	// add the active state to the MultiComboBox's field
	this.addStyleClass(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "Pressed");

	this._resetCurrentItem();

	this.addContent();

	if (fnPickerTypeBeforeOpen) {
		fnPickerTypeBeforeOpen.call(this);
	}
};

/**
 * This event handler will be called after the MultiComboBox's Pop-up is opened.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype.onAfterOpen = function() {

};

/**
 * This event handler will be called before the MultiComboBox's Pop-up is closed.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype.onBeforeClose = function() {
};

/**
 * This event handler will be called after the MultiComboBox's Pop-up is closed.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype.onAfterClose = function() {

	// remove the active state of the MultiComboBox's field
	this.removeStyleClass(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "Pressed");

	// Show all items when the list will be opened next time
	this.clearFilter();

	this.fireSelectionFinish({
		selectedItems : this.getSelectedItems()
	});
};

/**
 * Called before the Dialog is opened.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype._onBeforeOpenDialog = function() {
};

/*
 * This event handler will be called before the control's picker popover is opened.
 * 
 * @protected
 */
sap.m.MultiComboBox.prototype._onBeforeOpenPopover = function() {
	var oDomRef = this.getDomRef();
	var oComputedStyle = window.getComputedStyle(oDomRef);

	if (oComputedStyle) {
		this.getPicker().setContentWidth((parseFloat(oComputedStyle.width) / parseFloat(sap.m.BaseFontSize)) + "rem");
	}
};

/**
 * Creates an instance type of <code>sap.m.Dialog</code>.
 * 
 * @returns {sap.m.Dialog}
 * @private
 */
sap.m.MultiComboBox.prototype._createDialog = function() {
	// initialize Dialog
	var oDialog = new sap.m.Dialog({
		stretchOnPhone : true,
		customHeader : new sap.m.Bar({
			contentLeft : new sap.m.InputBase({
				// value : "tbd",
				width : "100%",
				editable : false
			}).addStyleClass(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "Input")
		}).addStyleClass(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "Bar")
	});

	oDialog.getAggregation("customHeader").attachBrowserEvent("tap", function() {
		oDialog.close();
	}, this);

	return oDialog;
};

/**
 * Required adaptations after rendering of the Popover.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype._onAfterRenderingPopover = function() {
	var oPopover = this.getPicker();

	// remove the Popover arrow
	oPopover._removeArrow();

	// position adaptations
	oPopover._setPosition();
};

/**
 * Decorate a Popover instance by adding some private methods.
 * 
 * @param {sap.m.Popover}
 * @private
 */
sap.m.MultiComboBox.prototype._decoratePopover = function(oPopover) {
	var that = this;

	// adding additional capabilities to the Popover
	oPopover._removeArrow = function() {
		this._marginTop = 0;
		this._marginLeft = 0;
		this._marginRight = 0;
		this._marginBottom = 0;
		this._arrowOffset = 0;
		this._offsets = ["0 0", "0 0", "0 0", "0 0"];
	};

	oPopover._setPosition = function() {
		this._myPositions = ["begin bottom", "begin center", "begin top", "end center"];
		this._atPositions = ["begin top", "end center", "begin bottom", "begin center"];
	};

	oPopover._setArrowPosition = function() {
	};

	oPopover.open = function() {
		var oDomRef = jQuery(that.getDomRef());
		var oBorder = oDomRef.find(sap.m.MultiComboBoxRenderer.DOT_CSS_CLASS + "Border");
		return this.openBy(oBorder[0]);
	};
};

/**
 * Creates an instance type of <code>sap.m.Popover</code>.
 * 
 * @returns {sap.m.Popover}
 * @private
 */
sap.m.MultiComboBox.prototype._createPopover = function() {

	var oPopup = new sap.m.Popover({
		showHeader : false,
		placement : sap.m.PlacementType.Vertical,
		offsetX : 0,
		offsetY : 0,
		initialFocus : this,
		bounce : false
	// modal : true
	});

	this._decoratePopover(oPopup);
	return oPopup;
};

/**
 * Create an instance type of <code>sap.m.List</code>.
 * 
 * @returns {sap.m.List} protected
 */
sap.m.MultiComboBox.prototype.createList = function() {

	// list to use inside the picker
	this._oList = new sap.m.List({
		width : "100%",
		mode : sap.m.ListMode.MultiSelect,
		includeItemInSelection : true,
		rememberSelections : false
	}).addStyleClass(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "List").addStyleClass(
			sap.m.MultiComboBoxRenderer.CSS_CLASS + "List").attachBrowserEvent("tap", this._handleItemTap, this)
			.attachSelectionChange(this._handleSelectionLiveChange, this).attachItemPress(this._handleItemPress, this);
};

/**
 * Update and synchronize "selectedItems" association and the "selectedItems" in the List.
 * 
 * @param {sap.ui.core.Item |
 *          null} mOptions.item
 * @param {string}
 *          mOptions.id
 * @param {string}
 *          mOptions.key
 * @param {boolean}
 *          [mOptions.suppressInvalidate]
 * @param {boolean}
 *          [mOptions.listItemUpdated]
 * @param {boolean}
 *          [mOptions.fireChangeEvent]
 * @private
 */
sap.m.MultiComboBox.prototype.setSelection = function(mOptions) {
	if (mOptions.item && this.isItemSelected(mOptions.item)) {
		return;
	}

	if (!mOptions.item) {
		return;
	}

	this.addAssociation("selectedItems", mOptions.item, mOptions.suppressInvalidate);

	var aSelectedKeys = this.getKeys(this.getSelectedItems());
	this.setProperty("selectedKeys", aSelectedKeys, mOptions.suppressInvalidate);

	if (!mOptions.listItemUpdated && this.getListItem(mOptions.item)) {
		// set the selected item in the List
		this.getList().setSelectedItem(this.getListItem(mOptions.item), true);
	}

	// Fill Tokenizer
	var oToken = new sap.m.Token({
		key : mOptions.key,
		text : mOptions.item.getText(),
		tooltip : mOptions.item.getText()
	});
	mOptions.item.data(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "Token", oToken);
	this._oTokenizer.addToken(oToken);

	this.addStyleClass("sapMMultiComboBoxHasToken");

	this.setValue('');

	if (mOptions.fireChangeEvent) {
		this.fireSelectionChange({
			changedItem : mOptions.item,
			selected : true
		});
	}

	if (mOptions.fireFinishEvent) {
		// Fire selectionFinish also if tokens are deleted directly in input field
		if (!this.isOpen()) {
			this.fireSelectionFinish({
				selectedItems : this.getSelectedItems()
			});
		}
	}
};

/**
 * Remove an item from "selectedItems" association and the "selectedItems" in the List.
 * 
 * @param {sap.ui.core.Item |
 *          null} mOptions.item
 * @param {string}
 *          mOptions.id
 * @param {string}
 *          mOptions.key
 * @param {boolean}
 *          [mOptions.suppressInvalidate]
 * @param {boolean}
 *          [mOptions.listItemUpdated]
 * @param {boolean}
 *          [mOptions.fireChangeEvent]
 * @private
 */
sap.m.MultiComboBox.prototype.removeSelection = function(mOptions) {
	if (mOptions.item && !this.isItemSelected(mOptions.item)) {
		return;
	}

	if (!mOptions.item) {
		return;
	}
	this.removeAssociation("selectedItems", mOptions.item, mOptions.suppressInvalidate);

	var aSelectedKeys = this.getKeys(this.getSelectedItems());
	this.setProperty("selectedKeys", aSelectedKeys, mOptions.suppressInvalidate);

	if (!mOptions.listItemUpdated && this.getListItem(mOptions.item)) {
		// set the selected item in the List
		this.getList().setSelectedItem(this.getListItem(mOptions.item), false);
	}

	// Synch the Tokenizer
	if (!mOptions.tokenUpdated) {
		var oToken = this._getTokenByItem(mOptions.item);
		mOptions.item.data(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "Token", null);
		this._oTokenizer.removeToken(oToken);
	}

	if (!this._hasTokens()) {
		this.removeStyleClass("sapMMultiComboBoxHasToken");
	}

	if (mOptions.fireChangeEvent) {
		// fire the change event
		this.fireSelectionChange({
			changedItem : mOptions.item,
			selected : false
		});
	}

	if (mOptions.fireFinishEvent) {
		// Fire selectionFinish also if tokens are deleted directly in input field
		if (!this.isOpen()) {
			this.fireSelectionFinish({
				selectedItems : this.getSelectedItems()
			});
		}
	}
};

/**
 * Synchronize selected item and key.
 * 
 * @param {sap.ui.core.Item}
 *          oItem
 * @param {string}
 *          sKey
 * @param {array}
 *          [aItems]
 * @private
 */
sap.m.MultiComboBox.prototype._synchronizeSelectedItemAndKey = function(aItems) {

	// no items
	if (!aItems.length) {
		jQuery.sap.log.info(
				"Info: _synchronizeSelectedItemAndKey() the MultiComboBox control does not contain any item on ", this);
		return;
	}

	var aSelectedKeys = this.getSelectedKeys();
	var aKeyOfSelectedItems = this.getKeys(this.getSelectedItems());

	// the "selectedKey" property is not synchronized
	if (aSelectedKeys.length) {
		for ( var i = 0, sKey = null, oItem = null, iIndex = null, iLength = aSelectedKeys.length; i < iLength; i++) {
			sKey = aSelectedKeys[i];
			if (aKeyOfSelectedItems.indexOf(sKey) > -1) {
				if (this._aCustomerKeys.length && (iIndex = this._aCustomerKeys.indexOf(sKey)) > -1) {
					this._aCustomerKeys.splice(iIndex, 1);
				}
				continue;
			}
			oItem = this.getItemByKey("" + sKey);
			// if the "selectedKey" has no corresponding aggregated item, no
			// changes will apply
			if (oItem) {
				if (this._aCustomerKeys.length && (iIndex = this._aCustomerKeys.indexOf(sKey)) > -1) {
					this._aCustomerKeys.splice(iIndex, 1);
				}
				this.setSelection({
					item : oItem,
					id : oItem.getId(),
					key : oItem.getKey(),
					fireChangeEvent : false,
					suppressInvalidate : true,
					listItemUpdated : false
				});
			}
		}
		return;
	}
};

// --------------------------- End ------------------------------------
/**
 * Calculate available width for the tokenizer
 * 
 * @private
 */
sap.m.MultiComboBox.prototype._setContainerSizes = function() {
	var oDomRef = this.getDomRef();
	if (!oDomRef) {
		return;
	}

	var $MultiComboBox = jQuery(oDomRef);
	var $ShadowDiv = jQuery($MultiComboBox.children(sap.m.MultiComboBoxRenderer.DOT_CSS_CLASS + "ShadowDiv")[0]);
	$ShadowDiv.text(this.getValue());
	var $InputContainer = jQuery($MultiComboBox.find(sap.m.MultiComboBoxRenderer.DOT_CSS_CLASS + "InputContainer")[0]);

	var iTokenizerWidth = this._oTokenizer.getScrollWidth();
	var iInputWidthMinimalNeeded = $ShadowDiv.outerWidth();

	// we go to the sapMMultiInputBorder child elements, this makes the computations easier
	var iAvailableWidth = this.$().find(".sapMMultiComboBoxBorder").width();
	if (iAvailableWidth !== 0) {
		var iIconWidth = jQuery(this.getOpenArea()).outerWidth(true);

		var iTotalWidthNeeded = iTokenizerWidth + iInputWidthMinimalNeeded + iIconWidth;

		var iInputWidth;
		if (iTotalWidthNeeded < iAvailableWidth) {
			iInputWidth = iInputWidthMinimalNeeded + iAvailableWidth - iTotalWidthNeeded;
		} else {
			iInputWidth = iInputWidthMinimalNeeded;
			iTokenizerWidth = iAvailableWidth - iInputWidth - iIconWidth;
		}

		var sWidth = (iInputWidth / parseFloat(sap.m.BaseFontSize)) + "rem";

		jQuery($InputContainer.find(".sapMInputBaseInner")[0]).css("width", sWidth);

		this._oTokenizer.setPixelWidth(iTokenizerWidth);
	}
};

/**
 * Get token instance for a specific item
 * 
 * @param {sap.ui.core.Item}
 * @returns {sap.m.Token | null} Token instance, null if not found
 * @private
 */
sap.m.MultiComboBox.prototype._getTokenByItem = function(oItem) {
	return oItem ? oItem.data(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "Token") : null;
};

/**
 * Get selected items from "aItems".
 * 
 * @param {array |
 *          null} aItems Array of sap.ui.core.Item
 * @returns {array}
 * @private
 */
sap.m.MultiComboBox.prototype._getSelectedItemsOf = function(aItems) {
	for ( var i = 0, iLength = aItems.length, aSelectedItems = []; i < iLength; i++) {
		if (this.getListItem(aItems[i]).isSelected()) {
			aSelectedItems.push(aItems[i]);
		}
	}
	return aSelectedItems;
};

/**
 * Do not show placeholder in input field if at least one token exists. In case that no tokens exist the placeholder
 * should be shown but only if it was defined via property 'placeholder'.
 * 
 * @returns {string}
 * @private
 */
sap.m.MultiComboBox.prototype._getPlaceholder = function(oControl) {
	if (this._hasTokens()) {
		return "";
	}
	return this.getPlaceholder();
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype._getLastSelectedItem = function() {
	var aTokens = this._oTokenizer.getTokens();
	var oToken = aTokens.length ? aTokens[aTokens.length - 1] : null;
	if (!oToken) {
		return null;
	}
	return this._getItemByToken(oToken);
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype._getOrderedSelectedItems = function() {
	var aItems = [];
	for ( var i = 0, aTokens = this._oTokenizer.getTokens(), iLength = aTokens.length; i < iLength; i++) {
		aItems[i] = this._getItemByToken(aTokens[i]);
	}
	return aItems;
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype._getFocusedListItem = function() {
	var jFocusedElement = jQuery(':focus');
	var oFocusedElement = sap.ui.getCore().byId(jFocusedElement.attr('id'));
	if (this.getList() && oFocusedElement
			&& jQuery.sap.containsOrEquals(this.getList().getFocusDomRef(), oFocusedElement.getFocusDomRef())) {
		return oFocusedElement;
	}
	return null;
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype._getFocusedItem = function() {
	var oListItem = this._getFocusedListItem();
	return this._getItemByListItem(oListItem);
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype._isRangeSelectionSet = function(oListItem) {
	var $ListItem = oListItem.getDomRef();
	return $ListItem.indexOf(sap.m.MultiComboBoxRenderer.CSS_CLASS + "ItemRangeSelection") > -1 ? true : false;
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype._hasTokens = function() {
	if (this._oTokenizer.getTokens().length) {
		return true;
	}
	return false;
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype._getCurrentItem = function() {
	if (!this._oCurrentItem) {
		return this._getFocusedItem();
	}
	return this._oCurrentItem;
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype._setCurrentItem = function(oItem) {
	this._oCurrentItem = oItem;
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype._resetCurrentItem = function() {
	this._oCurrentItem = null;
};

/**
 * Decorate a ListItem instance by adding some delegate methods.
 * 
 * @param {sap.m.StandardListItem}
 * @private
 */
sap.m.MultiComboBox.prototype._decorateListItem = function(oListItem) {
	oListItem.addDelegate({
		onkeyup : function(oEvent) {
			var oItem = null;
			// If an item is selected with SPACE inside of
			// suggest list the list
			// with all entries should be opened
			if (oEvent.which == jQuery.sap.KeyCodes.SPACE && this.isOpen() && this._isListInSuggestMode()) {
				this.clearFilter();
				this.open();
				oItem = this._getLastSelectedItem();
				// Scrolls an item into the visual viewport
				if (oItem) {
					this.getListItem(oItem).focus();
				}
				return;
			}
		},
		onkeydown : function(oEvent) {
			var oItem = null, oItemCurrent = null;

			if (oEvent.shiftKey && oEvent.which == jQuery.sap.KeyCodes.ARROW_DOWN) {
				oItemCurrent = this._getCurrentItem();
				oItem = this._getNextVisibleItemOf(oItemCurrent);
			}
			if (oEvent.shiftKey && oEvent.which == jQuery.sap.KeyCodes.ARROW_UP) {
				oItemCurrent = this._getCurrentItem();
				oItem = this._getPreviousVisibleItemOf(oItemCurrent);
			}
			if (oItem && oItem !== oItemCurrent) {
				if (this.getListItem(oItemCurrent).isSelected()) {
					this.setSelection({
						item : oItem,
						id : oItem.getId(),
						key : oItem.getKey(),
						fireChangeEvent : true,
						suppressInvalidate : true
					});
					this._setCurrentItem(oItem);
				} else {
					this.removeSelection({
						item : oItem,
						id : oItem.getId(),
						key : oItem.getKey(),
						fireChangeEvent : true,
						suppressInvalidate : true
					});
					this._setCurrentItem(oItem);
				}
				return;
			}

			this._resetCurrentItem();

			// Paging inside the list via CTRL + SPACE is not
			// required, so
			// switch it out.
			if (oEvent.ctrlKey && oEvent.which == jQuery.sap.KeyCodes.SPACE) {
				oEvent.setMarked();
				oEvent.preventDefault();
				return;
			}

			// Handle when CTRL + A is pressed to select all
			// Note: at first this function should be called and
			// not the
			// ListItemBase
			if ((oEvent.ctrlKey || oEvent.metaKey) && oEvent.which == jQuery.sap.KeyCodes.A) {
				oEvent.setMarked();
				oEvent.preventDefault();

				var aVisibleItems = this.getSelectableItems();
				var aSelectedItems = this._getSelectedItemsOf(aVisibleItems);
				if (aSelectedItems.length !== aVisibleItems.length) {
					aVisibleItems.forEach(function(oItem) {
						this.setSelection({
							item : oItem,
							id : oItem.getId(),
							key : oItem.getKey(),
							fireChangeEvent : true,
							suppressInvalidate : true,
							listItemUpdated : false
						});
					}, this);

				} else {
					aVisibleItems.forEach(function(oItem) {
						this.removeSelection({
							item : oItem,
							id : oItem.getId(),
							key : oItem.getKey(),
							fireChangeEvent : true,
							suppressInvalidate : true,
							listItemUpdated : false
						});
					}, this);
				}
			}
		}
	}, true, this);
	oListItem.addEventDelegate({
		onsapbackspace : function(oEvent) {
			// Prevent the backspace key from navigating back
			oEvent.preventDefault();
		},
		onsapshow : function(oEvent) {
			// Handle when F4 or Alt + DOWN arrow are pressed.
			oEvent.setMarked();
			// note: prevent browser address bar to be open in ie9, when F4 is pressed
			if (oEvent.keyCode === jQuery.sap.KeyCodes.F4) {
				oEvent.preventDefault();
			}
			if (this.isOpen()) {
				this.close();
				return;
			}
			if (this.hasContent()) {
				this.open();
			}
		},
		onsaphide : function(oEvent) {
			// Handle when Alt + UP arrow are pressed.
			this.onsapshow(oEvent);
		},
		onsapenter : function(oEvent) {
			// Handle when enter is pressed.
			oEvent.setMarked();
			this.close();
		},
		onsaphome : function(oEvent) {
			// Handle when Pos1 is pressed.
			oEvent.setMarked();
			// note: prevent document scrolling when Home key is pressed
			oEvent.preventDefault();
			var aVisibleItems = this.getSelectableItems();
			var oItem = aVisibleItems[0];
			// Scrolls an item into the visual viewport
			this.getListItem(oItem).focus();
		},
		onsapend : function(oEvent) {
			// Handle when End is pressed.
			oEvent.setMarked();
			// note: prevent document scrolling when End key is pressed
			oEvent.preventDefault();
			var aVisibleItems = this.getSelectableItems();
			var oItem = aVisibleItems[aVisibleItems.length - 1];
			// Scrolls an item into the visual viewport
			this.getListItem(oItem).focus();
		},
		onsapup : function(oEvent) {
			// Handle when key UP is pressed.
			oEvent.setMarked();
			// note: prevent document scrolling when arrow keys are pressed
			oEvent.preventDefault();

			var aVisibleItems = this.getSelectableItems();
			var oItemFirst = aVisibleItems[0];
			var oItemCurrent = jQuery(document.activeElement).control()[0];
			if (oItemCurrent === this.getListItem(oItemFirst)) {
				this.focus();
				// Stop the propagation of event. Otherwise the list item sets
				// the focus and
				// it is not possible to come up from list box to input field.
				oEvent.stopPropagation(true);
			}
		},
		onfocusin : function(oEvent) {
			this.addStyleClass(sap.m.MultiComboBoxRenderer.CSS_CLASS + "Focused");
		},
		onfocusout : function(oEvent) {
			this.removeStyleClass(sap.m.MultiComboBoxRenderer.CSS_CLASS + "Focused");
		},
		onsapfocusleave : function(oEvent) {
			var oPopup = this.getAggregation("picker");
			var oControl = sap.ui.getCore().byId(oEvent.relatedControlId);
			if (oPopup && oControl && jQuery.sap.equal(oPopup.getFocusDomRef(), oControl.getFocusDomRef())) {
				// force the focus to stay in the list item field when
				// scrollbar is moving
				if (oEvent.srcControl) {
					oEvent.srcControl.focus();
				}
			}
		}
	}, this);

	// required workaround
	if (sap.ui.Device.support.touch) {
		oListItem.addEventDelegate({
			ontouchstart : function(oEvent) {
				oEvent.setMark("cancelAutoClose");
			}
		});
	}
};

/**
 * Create an instance type of <code>sap.m.Tokenizer</code>.
 * 
 * @returns {sap.m.Tokenizer}
 * @private
 */
sap.m.MultiComboBox.prototype._createTokenizer = function() {
	var oTokenizer = new sap.m.Tokenizer({
		tokens : []
	}).attachTokenChange(this._handleTokenChange, this);
	// Set parent of Tokenizer, otherwise the Tokenizer renderer is not called.
	// Control.prototype.invalidate -> this.getUIArea() is null
	oTokenizer.setParent(this);

	oTokenizer.addEventDelegate({
		onAfterRendering : this._onAfterRenderingTokenizer
	}, this);

	this.getRenderer().placeholderToBeShown = function(oRm, oControl) {
		return (!oControl._oTokenizer.getTokens().length) && (oControl.getPlaceholder() ? true : false);
	};
	return oTokenizer;
};

/**
 * @param {sap.ui.base.Event}
 *          oEvent
 * @private
 */
sap.m.MultiComboBox.prototype._handleTokenChange = function(oEvent) {
	var sType = oEvent.getParameter("type");
	var oToken = oEvent.getParameter("token");
	var oItem = null;

	if (sType !== sap.m.Tokenizer.TokenChangeType.Removed && sType !== sap.m.Tokenizer.TokenChangeType.Added) {
		return;
	}

	if (sType === sap.m.Tokenizer.TokenChangeType.Removed) {
		oItem = (oToken && this._getItemByToken(oToken));
		if (oItem && this.isItemSelected(oItem)) {
			this.removeSelection({
				item : oItem,
				id : oItem.getId(),
				key : oItem.getKey(),
				tokenUpdated : true,
				fireChangeEvent : true,
				fireFinishEvent : true, // Fire selectionFinish if token is deleted directly in input field
				suppressInvalidate : true
			});
			this.focus();
			this.fireChangeEvent('');
		}
	}

	if (this.isActive()) {
		var oDomRef = jQuery(this.getFocusDomRef());
		if (this._getPlaceholder() === "") {
			oDomRef[0].placeholder = "";
		} else {
			oDomRef[0].placeholder = this.getPlaceholder();
		}
	}
};

/* =========================================================== */
/* Lifecycle methods */
/* =========================================================== */

sap.m.MultiComboBox.prototype._onAfterRenderingTokenizer = function() {
	this._setContainerSizes();
};

/**
 * Required adaptations after rendering.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype.onAfterRendering = function() {
	sap.m.ComboBoxBase.prototype.onAfterRendering.apply(this, arguments);

	// TODO Dom reference to Border-DIV
	// oPopover._oOpenBy = this.$().children("....")[0];
	var oPicker = this.getPicker();
	var oDomRef = jQuery(this.getDomRef());
	var oBorder = oDomRef.find(sap.m.MultiComboBoxRenderer.DOT_CSS_CLASS + "Border");
	oPicker._oOpenBy = oBorder[0];
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype.onfocusout = function(oEvent) {
	this.removeStyleClass(sap.m.MultiComboBoxRenderer.CSS_CLASS + "Focused");
	sap.m.ComboBoxBase.prototype.onfocusout.apply(this, arguments);
};

/**
 * Function is called on keyboard backspace, if cursor is in front of an token, token gets selected and deleted
 * 
 * @private
 * @param {jQuery.event}
 *          oEvent
 */
sap.m.MultiComboBox.prototype.onsapbackspace = function(oEvent) {
	if (!this.getEnabled() || !this.getEditable()) {
		// Prevent the backspace key from navigating back
		oEvent.preventDefault();
		return;
	}

	// Deleting characters, not tokens
	if (this.getCursorPosition() > 0 || this.getValue().length > 0) {
		return;
	}
	sap.m.Tokenizer.prototype.onsapbackspace.apply(this._oTokenizer, arguments);

	// Prevent the backspace key from navigating back
	oEvent.preventDefault();
};

/**
 * Function is called on delete keyboard input, deletes selected tokens
 * 
 * @private
 * @param {jQuery.event}
 *          oEvent
 */
sap.m.MultiComboBox.prototype.onsapdelete = function(oEvent) {
	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	// do not return if everything is selected
	if (this.getValue() && !this._isCompleteTextSelected()) {
		return;
	}
	sap.m.Tokenizer.prototype.onsapdelete.apply(this._oTokenizer, arguments);
};

/**
 * @private
 * @param {jQuery.event}
 *          oEvent
 */
sap.m.MultiComboBox.prototype.onsapnext = function(oEvent) {

	if (oEvent.isMarked()) {
		return;
	}

	// find focused element
	var oFocusedElement = jQuery(document.activeElement).control()[0];

	if (!oFocusedElement) {
		// we cannot rule out that the focused element does not correspond to a SAPUI5 control in which case oFocusedElement
		// is undefined
		return;
	}

	if (oFocusedElement === this._oTokenizer || this._oTokenizer.$().find(oFocusedElement.$()).length > 0
			&& this.getEditable()) {
		// focus is on the tokenizer or on some descendant of the tokenizer and the event was not handled ->
		// we therefore handle the event and focus the input element
		this.focus();
	}
};

/**
 * @private
 * @param {jQuery.event}
 *          oEvent
 */
sap.m.MultiComboBox.prototype.onsapprevious = function(oEvent) {
	if (this.getCursorPosition() === 0 && !this._isCompleteTextSelected()) {
		if (oEvent.srcControl === this) {
			sap.m.Tokenizer.prototype.onsapprevious.apply(this._oTokenizer, arguments);
		}
	}
};

/**
 * Get items which match value of input field
 * 
 * @param {string}
 * @returns {sap.ui.core.Item[]}
 * @private
 */
sap.m.MultiComboBox.prototype._getItemsStartingText = function(sText) {
	var aItems = [];
	this.getSelectableItems().forEach(function(oItem) {
		if (jQuery.sap.startsWithIgnoreCase(oItem.getText(), sText)) {
			aItems.push(oItem);
		}
	}, this);
	return aItems;
};

/**
 * Functions returns the current input field's cursor position
 * 
 * @private
 * @return {integer} the cursor position
 */
sap.m.MultiComboBox.prototype.getCursorPosition = function() {
	return this._$input.cursorPos();
};
/**
 * Functions returns true if the input's text is completely selected
 * 
 * @private
 * @return {boolean} true if text is selected, otherwise false,
 */
sap.m.MultiComboBox.prototype._isCompleteTextSelected = function() {
	if (!this.getValue().length) {
		return false;
	}
	var oInput = this._$input[0];
	if (oInput.selectionStart !== 0 || oInput.selectionEnd !== this.getValue().length) {
		return false;
	}

	return true;
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype._getNextVisibleItemOf = function(oItem) {
	var aItems = this.getSelectableItems();
	var iIndex = aItems.indexOf(oItem) + 1;
	if (iIndex <= 0 || iIndex > aItems.length - 1) {
		return null;
	}
	return aItems[iIndex];
};

/**
 * @private
 */
sap.m.MultiComboBox.prototype._getPreviousVisibleItemOf = function(oItem) {
	var aItems = this.getSelectableItems();
	var iIndex = aItems.indexOf(oItem) - 1; // {-2,-1,0,1,2,3,...}
	if (iIndex < 0) {
		return null;
	}
	return aItems[iIndex];
};

/**
 * Gets next visible Item corresponding to text in input field.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype._getNextTraversalItem = function() {
	var aItems = this._getItemsStartingText(this.getValue());
	if (aItems.indexOf(this._oTraversalItem) > -1 && this._oTraversalItem.getText() === this.getValue()) {
		return this._getNextVisibleItemOf(this._oTraversalItem);
	}
	if (aItems.length && aItems[0].getText() === this.getValue()) {
		return this._getNextVisibleItemOf(aItems[0]);
	}
	return aItems.length ? aItems[0] : this.getSelectableItems()[0];
};

/**
 * Gets previous visible Item corresponding to text in input field.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype._getPreviousTraversalItem = function() {
	var aItems = this._getItemsStartingText(this.getValue());
	if (aItems.indexOf(this._oTraversalItem) > -1 && this._oTraversalItem.getText() === this.getValue()) {
		return this._getPreviousVisibleItemOf(this._oTraversalItem);
	}
	if (aItems.length && aItems[aItems.length - 1].getText() === this.getValue()) {
		return this._getPreviousVisibleItemOf(aItems[aItems.length - 1]);
	}
	return aItems.length ? aItems[aItems.length - 1] : this._getPreviousVisibleItemOf(null);
};

/* =========================================================== */
/* API methods */
/* =========================================================== */
/**
 * Setter for association <code>selectedItems</code>.
 * 
 * @param {string[] |
 *          sap.ui.core.Item[] | null} aItems new values for association <code>selectedItems</code>. Array of
 *          sap.ui.core.Item Id which becomes the new target of this <code>selectedItems</code> association.
 *          Alternatively, an array of sap.ui.core.Item instance may be given or null.
 * 
 * @returns {sap.m.MultiComboBox} <code>this</code> to allow method chaining.
 * @public
 * @name sap.m.MultiComboBox#setSelectedItems
 * @function
 */
sap.m.MultiComboBox.prototype.setSelectedItems = function(aItems) {
	this.removeAllSelectedItems();
	if (!aItems || !aItems.length) {
		return this;
	}
	if (!jQuery.isArray(aItems)) {
		jQuery.sap.log
				.warning(
						'Warning: setSelectedItems() "aItems" has to be an array of sap.ui.core.Item instances or an array of valid sap.ui.core.Item Ids',
						this);
		return this;
	}
	aItems
			.forEach(
					function(oItem) {
						if (!(oItem instanceof sap.ui.core.Item) && (typeof oItem !== "string")) {
							jQuery.sap.log
									.warning(
											'Warning: setSelectedItems() "aItems" has to be an array of sap.ui.core.Item instances or an array of valid sap.ui.core.Item Ids',
											this);
							// Go to next item
							return;
						}
						if (typeof oItem === "string") {
							oItem = sap.ui.getCore().byId(oItem);
						}

						// Update and synchronize "selectedItems" association,
						// "selectedKey" and "selectedItemId" properties.
						this.setSelection({
							item : oItem ? oItem : null,
							id : oItem ? oItem.getId() : "",
							key : oItem ? oItem.getKey() : "",
							suppressInvalidate : true
						});
					}, this);
	return this;
};
/**
 * Adds some item <code>oItem</code> to the association named <code>selectedItems</code>.
 * 
 * @param {sap.ui.core.Item}
 *          oItem The selected item to add; if empty, nothing is added.
 * @returns {sap.m.MultiComboBox} <code>this</code> to allow method chaining.
 * @public
 * @name sap.m.MultiComboBox#addSelectedItem
 * @function
 */
sap.m.MultiComboBox.prototype.addSelectedItem = function(oItem) {
	if (!oItem) {
		return this;
	}
	if (typeof oItem === "string") {
		oItem = sap.ui.getCore().byId(oItem);
	}
	this.setSelection({
		item : oItem ? oItem : null,
		id : oItem ? oItem.getId() : "",
		key : oItem ? oItem.getKey() : "",
		fireChangeEvent : false,
		suppressInvalidate : true
	});
	return this;
};

sap.m.MultiComboBox.prototype.removeSelectedItem = function(oItem) {
	if (!oItem) {
		return null;
	}
	if (typeof oItem === "string") {
		oItem = sap.ui.getCore().byId(oItem);
	}
	if (!this.isItemSelected(oItem)) {
		return null;
	}
	this.removeSelection({
		item : oItem,
		id : oItem.getId(),
		key : oItem.getKey(),
		fireChangeEvent : false,
		suppressInvalidate : true
	});
	return oItem;
};

sap.m.MultiComboBox.prototype.removeAllSelectedItems = function() {
	var aIds = [];
	var aItems = this.getAssociation("selectedItems", []);
	aItems.forEach(function(oItem) {
		var oItemRemoved = this.removeSelectedItem(oItem);
		if (oItemRemoved) {
			aIds.push(oItemRemoved.getId());
		}
	}, this);
	return aIds;
};

sap.m.MultiComboBox.prototype.removeSelectedKeys = function(aKeys) {
	var aItems = [], iIndex;
	if (!aKeys || !aKeys.length || !jQuery.isArray(aKeys)) {
		return aItems;
	}
	var oItem;
	aKeys.forEach(function(sKey) {
		oItem = this.getItemByKey(sKey);
		if (oItem) {
			this.removeSelection({
				item : oItem ? oItem : null,
				id : oItem ? oItem.getId() : "",
				key : oItem ? oItem.getKey() : "",
				fireChangeEvent : false,
				suppressInvalidate : true
			});
			aItems.push(oItem);
		}
		if (this._aCustomerKeys.length && (iIndex = this._aCustomerKeys.indexOf(sKey)) > -1) {
			this._aCustomerKeys.splice(iIndex, 1);
		}
	}, this);
	return aItems;
};

sap.m.MultiComboBox.prototype.setSelectedKeys = function(aKeys) {
	this.removeAllSelectedItems();
	this._aCustomerKeys = [];
	this.addSelectedKeys(aKeys);
	return this;
};

sap.m.MultiComboBox.prototype.addSelectedKeys = function(aKeys) {
	if (!aKeys || !aKeys.length || !jQuery.isArray(aKeys)) {
		return this;
	}
	if (!jQuery.isArray(aKeys) || typeof aKeys[0] !== "string") {
		jQuery.sap.log.warning('Warning: addSelectedKeys() "aKeys" has to be an array of string', this);
		return this;
	}
	aKeys.forEach(function(sKey) {
		var oItem = this.getItemByKey(sKey);
		if (oItem) {
			this.addSelectedItem(oItem);
		} else if (sKey) {
			// If at this point of time aggregation 'items' does not exist we
			// have save provided key.
			this._aCustomerKeys.push(sKey);
		}
	}, this);
	return this;
};

sap.m.MultiComboBox.prototype.getSelectedKeys = function() {
	var aItems = this.getSelectedItems() || [], aKeys = [];
	aItems.forEach(function(oItem) {
		aKeys.push(oItem.getKey());
	}, this);
	if (this._aCustomerKeys.length) {
		aKeys = aKeys.concat(this._aCustomerKeys);
	}
	return aKeys;
};

/**
 * Retrieves the selected item objects from the association named <code>selectedItems</code>.
 * 
 * @returns {array} Array of sap.ui.core.Item instances. The current target of the <code>selectedItems</code>
 *          association.
 * @public
 * @name sap.m.MultiComboBox#getSelectedItems
 * @function
 */
sap.m.MultiComboBox.prototype.getSelectedItems = function() {
	var aItems = [], aItemIds = this.getAssociation("selectedItems") || [];

	aItemIds.forEach(function(sItemId) {
		var oItem = sap.ui.getCore().byId(sItemId);

		if (oItem) {
			aItems.push(oItem);
		}
	}, this);
	return aItems;
};

sap.m.MultiComboBox.prototype.getWidth = function() {
	return this.getProperty("width") || "100%";
};

// ----------------------- Inheritance ---------------------
sap.m.MultiComboBox.prototype.setEditable = function(bEditable) {
	sap.m.ComboBoxBase.prototype.setEditable.apply(this, arguments);

	this._oTokenizer.setEditable(bEditable);
	return this;
};

sap.m.MultiComboBox.prototype.setWidth = function(sWidth) {
	// As MultiComboBox is a special scrollbar container there is no sense for 'auto' width.
	if (sWidth === "auto") {
		sWidth = "100%";
	}
	sap.m.ComboBoxBase.prototype.setWidth.apply(this, arguments);
};

sap.m.MultiComboBox.prototype.clearFilter = function() {
	this.getItems().forEach(function(oItem) {
		this.getListItem(oItem).setVisible(oItem.getEnabled() && this.getSelectable(oItem));
	}, this);
};

/**
 * @returns {boolean} true if the list has at least one not visible item, false if all items in the list are visible.
 * @private
 */
sap.m.MultiComboBox.prototype._isListInSuggestMode = function() {
	return this.getList().getItems().some(function(oListItem) {
		return !oListItem.getVisible() && this._getItemByListItem(oListItem).getEnabled();
	}, this);
};

/**
 * TODO: correction in ComboBoxBase regarding 'this.getSelectedItem()'
 * 
 * Map an item type of sap.ui.core.Item to an item type of sap.m.StandardListItem.
 * 
 * @param {sap.ui.core.Item}
 *          oItem
 * @returns {sap.m.StandardListItem | null}
 * @private
 */
sap.m.MultiComboBox.prototype._mapItemToListItem = function(oItem) {
	if (!oItem) {
		return null;
	}
	var sListItem = sap.m.ComboBoxBaseRenderer.CSS_CLASS + "Item";
	var sListItemSelected = (this.isItemSelected(oItem)) ? sListItem + "Selected" : "";

	var oListItem = new sap.m.StandardListItem({
		title : oItem.getText(),
		type : sap.m.ListType.Active,
		visible : oItem.getEnabled()
	}).addStyleClass(sListItem + " " + sListItemSelected);
	oListItem.setTooltip(oItem.getTooltip());
	oItem.data(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "ListItem", oListItem);

	if (sListItemSelected) {
		var oToken = new sap.m.Token({
			key : oItem.getKey(),
			text : oItem.getText(),
			tooltip : oItem.getText()
		});
		oItem.data(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "Token", oToken);
		this._oTokenizer.addToken(oToken);
	}

	this.setSelectable(oItem, oItem.getEnabled());
	this._decorateListItem(oListItem);

	return oListItem;
};

/**
 * Set selectable property of sap.ui.core.Item
 * 
 * @param {sap.ui.core.Item}
 *          oItem
 * @param {boolean}
 *          bUnselectable
 * @private
 * @name sap.m.MultiComboBox#setSelectable
 * @function
 */
sap.m.MultiComboBox.prototype.setSelectable = function(oItem, bSelectable) {
	if (this.indexOfItem(oItem) < 0) {
		return;
	}
	oItem._bSelectable = bSelectable;
	var oListItem = this.getListItem(oItem);
	if (oListItem) {
		oListItem.setVisible(bSelectable);
	}
	var oToken = this._getTokenByItem(oItem);
	if (oToken) {
		oToken.setVisible(bSelectable);
	}
};

/**
 * Get selectable property of sap.ui.core.Item
 * 
 * @param {sap.ui.core.Item}
 *          oItem
 * @private
 * @name sap.m.MultiComboBox#getSelectable
 * @function
 */
sap.m.MultiComboBox.prototype.getSelectable = function(oItem) {
	return oItem._bSelectable;
};

/**
 * TODO: ComboBoxBase should be changed regarding 'this.getSelectedItem()'
 * 
 * Fill the list of items.
 * 
 * @param {array}
 *          aItems An array with items type of sap.ui.core.Item.
 * @private
 */
sap.m.MultiComboBox.prototype._fillList = function(aItems) {
	if (!aItems) {
		return null;
	}

	for ( var i = 0, oListItem, aItemsLength = aItems.length; i < aItemsLength; i++) {
		// add a private property to the added item containing a reference
		// to the corresponding mapped item
		oListItem = this._mapItemToListItem(aItems[i]);

		// add the mapped item type of sap.m.StandardListItem to the list
		this.getList().addAggregation("items", oListItem, true);

		// add active state to the selected item
		if (this.isItemSelected(aItems[i])) {
			this.getList().setSelectedItem(oListItem, true);
		}
	}
};

/**
 * Initialization.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype.init = function() {
	sap.m.ComboBoxBase.prototype.init.apply(this, arguments);

	// initialize list
	this.createList();

	this.setPickerType(sap.ui.Device.system.phone ? "Dialog" : "Popover");
	this._oTokenizer = this._createTokenizer();
	this._aCustomerKeys = [];
};

/**
 * Clear the selection.
 * 
 * @protected
 * @name sap.m.MultiComboBox#clearSelection
 * @function
 */
sap.m.MultiComboBox.prototype.clearSelection = function() {
	this.removeAllSelectedItems();
};

/**
 * Removes an item from the aggregation named <code>items</code>.
 * 
 * @param {int |
 *          string | sap.ui.core.Item} oItem The item to remove or its index or id.
 * @returns {sap.ui.core.Item} The removed item or null.
 * @public
 * @name sap.m.MultiComboBox#removeItem
 * @function
 */
sap.m.MultiComboBox.prototype.removeItem = function(oItem) {

	// remove the item from the aggregation items
	oItem = this.removeAggregation("items", oItem);

	// remove the corresponding mapped item from the List
	if (this.getList()) {
		this.getList().removeItem(oItem && this.getListItem(oItem));
	}

	// If the removed item is selected remove it also from 'selectedItems'.
	this.removeSelection({
		item : oItem,
		id : oItem ? oItem.getId() : "",
		key : oItem ? oItem.getKey() : "",
		fireChangeEvent : false,
		suppressInvalidate : true,
		listItemUpdated : true
	});
	return oItem;
};

sap.m.MultiComboBox.prototype.isItemSelected = function(oItem) {
	return (this.getSelectedItems().indexOf(oItem) > -1 ? true : false);
};

/**
 * Destroy the items in the List.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype._clearList = function() {
	if (this.getList()) {
		this.getList().destroyAggregation("items", true);
	}
};

/**
 * Destroy the items in the List.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype._clearTokenizer = function() {
	
	this._oTokenizer.destroyAggregation("tokens", true);
};

/**
 * Getter for the control's List.
 * 
 * @returns {sap.m.List}
 * @private
 */
sap.m.MultiComboBox.prototype.getList = function() {
	return this._oList;
};

/**
 * Cleans up before destruction.
 * 
 * @private
 */
sap.m.MultiComboBox.prototype.exit = function() {
	sap.m.ComboBoxBase.prototype.exit.apply(this, arguments);

	if (this.getList()) {
		this.getList().destroy();
		this._oList = null;
	}
	if (this._oTokenizer) {
		this._oTokenizer.destroy();
		this._oTokenizer = null;
	}
};

/**
 * Destroys all the items in the aggregation named <code>items</code>.
 * 
 * @returns {sap.m.MultiComboBox} <code>this</code> to allow method chaining.
 * @public
 * @name sap.m.MultiComboBox#destroyItems
 * @function
 */
sap.m.MultiComboBox.prototype.destroyItems = function() {
	this.destroyAggregation("items");

	if (this.getList()) {
		this.getList().destroyItems();
	}
	this._oTokenizer.destroyTokens();
	return this;
};

/**
 * Removes all the items in the aggregation named <code>items</code>.
 * 
 * @returns {sap.ui.core.Item[]} An array of sap.ui.core.Item of the removed items (might be empty).
 * @public
 * @name sap.m.MultiComboBox#removeAllItems
 * @function
 */
sap.m.MultiComboBox.prototype.removeAllItems = function() {
	var aItems = this.removeAllAggregation("items");
	this.removeAllSelectedItems();
	if (this.getList()) {
		this.getList().removeAllItems();
	}
	return aItems;
};

/**
 * Get item corresponding to given list item.
 * 
 * @param {sap.m.StandardListItem |
 *          null} oListItem
 * @return {sap.ui.core.Item}
 * @private
 * @since 1.24.0
 * @name sap.m.MultiComboBox#_getItemByListItem
 * @function
 */
sap.m.MultiComboBox.prototype._getItemByListItem = function(oListItem) {
	return this._getItemBy(oListItem, "ListItem");
};

/**
 * Get item corresponding to given token.
 * 
 * @param {sap.m.Token |
 *          null} oToken
 * @return {sap.ui.core.Item}
 * @private
 * @since 1.24.0
 * @name sap.m.MultiComboBox#_getItemByToken
 * @function
 */
sap.m.MultiComboBox.prototype._getItemByToken = function(oToken) {
	return this._getItemBy(oToken, "Token");
};

/**
 * Get item corresponding to given data object.
 * 
 * @param {Object |
 *          null} oDataObject
 * @param {string}
 *          sDataName
 * @return {sap.ui.core.Item}
 * @private
 * @since 1.24.0
 * @name sap.m.MultiComboBox#_getItemBy
 * @function
 */
sap.m.MultiComboBox.prototype._getItemBy = function(oDataObject, sDataName) {
	sDataName = sap.m.ComboBoxBaseRenderer.CSS_CLASS + sDataName;
	for ( var i = 0, aItems = this.getItems(), iItemsLength = aItems.length; i < iItemsLength; i++) {
		if (aItems[i].data(sDataName) === oDataObject) {
			return aItems[i];
		}
	}
	return null;
};

/**
 * Getter for the control's ListItem.
 * 
 * @param {sap.ui.core.Item}
 * @returns {sap.m.StandardListItem | null}
 * @private
 * @since 1.24.0
 * @name sap.m.MultiComboBox#getListItem
 * @function
 */
sap.m.MultiComboBox.prototype.getListItem = function(oItem) {
	return oItem ? oItem.data(sap.m.ComboBoxBaseRenderer.CSS_CLASS + "ListItem") : null;
};
