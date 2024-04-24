/*global QUnit*/

sap.ui.define([
	"pricetable/controller/View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

	QUnit.test("Convert String to Number", function (assert){
		var oAppController = new Controller();
		let ConvertedNumber = oAppController.onConvTextToNum('123');
		assert.equal(!isNaN(ConvertedNumber),true, `Pass! The new number is ${ConvertedNumber}`)
		ConvertedNumber = oAppController.onConvTextToNum('abc');
		assert.equal(!isNaN(ConvertedNumber),false, `Not Pass! ${ConvertedNumber}`);

	});

});
