sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel) {
        "use strict";

        return Controller.extend("com.lab2dev.products.list.controller.Products", {
            onInit: function () {
                const uri = this.getOwnerComponent().getManifestObject().resolveUri("northwind/northwind.svc")
                const oDataModel = new ODataModel(uri)

                oDataModel.attachMetadataLoaded(() => {
                    console.log('Sucesso!!!')
                });
                oDataModel.attachMetadataFailed(() => {
                    console.log('Error!!!')
                });

                
            }
        });
    });
