sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel, JSONModel, MessageToast) {
        "use strict";

        return Controller.extend("com.lab2dev.products.list.controller.Products", {
            onInit: function () {
                const uri = this.getOwnerComponent().getManifestObject().resolveUri("northwind/northwind.svc")
                const oDataModel = new ODataModel(uri)

                oDataModel.attachMetadataLoaded(() => {
                    oDataModel.read('/Products', {
                        success: (products) => {
                            const JSONModelProducts = new JSONModel(products.results)
                            this.getView().setModel(JSONModelProducts, 'Products')
                        },
                        error: () => {
                            MessageToast.show('Error ao acessar a entidade Products');
                        }
                    })
                });
                oDataModel.attachMetadataFailed(() => {
                    MessageToast.show('Error ao carregar metada');
                });
            },

        });
    });
