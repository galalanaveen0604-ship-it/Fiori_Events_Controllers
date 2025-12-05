/*global QUnit*/

sap.ui.define([
	"org/index/it/sapfiori/controller/Events_Controller.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Events_Controller Controller");

	QUnit.test("I should test the Events_Controller controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
