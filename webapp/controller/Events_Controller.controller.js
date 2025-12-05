sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("org.index.it.sapfiori.controller.Events_Controller", {
        onInit() {
        },
        onPlus() {
            var digit1 = this.getView().byId("_idGenInput").getValue();
            var num1 = Number(digit1);

            var digit2 = this.getView().byId("_idGenInput1").getValue();
            var num2 = Number(digit2);

            var Output = num1 + num2;

            MessageBox.information("Plus:" + Output)
            this.getView().byId("_idGenInput").setValue();
            this.getView().byId("_idGenInput1").setValue();

        },
        onMinus() {
            var digit1 = this.getView().byId("_idGenInput").getValue();
            var num1 = Number(digit1);

            var digit2 = this.getView().byId("_idGenInput1").getValue();
            var num2 = Number(digit2);

            var Output = num1 - num2;

            MessageBox.information("Minus:" + Output)
            this.getView().byId("_idGenInput").setValue();
            this.getView().byId("_idGenInput1").setValue();
        },

        onMultiplication() {
            var digit1 = this.getView().byId("_idGenInput").getValue();
            var num1 = Number(digit1);

            var digit2 = this.getView().byId("_idGenInput1").getValue();
            var num2 = Number(digit2);

            var Output = num1 * num2;

            MessageBox.information("Multiply:" + Output)
            this.getView().byId("_idGenInput").setValue();
            this.getView().byId("_idGenInput1").setValue();
        },

        onDivision() {
            var digit1 = this.getView().byId("_idGenInput").getValue();
            var num1 = Number(digit1);

            var digit2 = this.getView().byId("_idGenInput1").getValue();
            var num2 = Number(digit2);

            var Output = num1 / num2;

            MessageBox.information("Divison:" + Output)
            this.getView().byId("_idGenInput").setValue();
            this.getView().byId("_idGenInput1").setValue();
        }
    });
});