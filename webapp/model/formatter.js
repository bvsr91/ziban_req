sap.ui.define([
	"sap/ui/core/library"
] , function (coreLibrary) {
	"use strict";

	// shortcut for sap.ui.core.ValueState
	var ValueState = coreLibrary.ValueState;

	return {
	
		/**
		 * Defines a value state based on the stock level
		 *
		 * @public
		 * @param {number} iValue the stock level of a product
		 * @returns {string} sValue the state for the stock level
		 */
        statusState: function (status) {
            if (status === "Approved") {
                return "Success";
            } else if (status === "Pending") {
                return "Warning";
            } else if (status === "Rejected") {
                return "Error";
            } else {
                return "None";
            }
        }

	};

});