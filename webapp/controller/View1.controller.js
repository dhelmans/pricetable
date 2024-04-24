sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("pricetable.controller.View1", {
            onInit: function () {

            },

            onGetProductBy: function () {

                const aFilter = [];
                const sName = this.byId("filterName").getValue();
                const iID = this.byId("filterID").getValue();

                if (sName) {
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sName));
                }

                if (iID) {
                    aFilter.push(new Filter("ProductID", FilterOperator.EQ, iID));
                }

                const oItems = this.byId("priceTable").getBinding("items");
                oItems.filter(aFilter)
            },

            onConvTextToNum: function (sString) {
                if (sString) {
                    return parseInt(sString);
                }
                return false;
            }
        });
    });
