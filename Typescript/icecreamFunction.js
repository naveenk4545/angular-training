"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
var icecreamLogics = /** @class */ (function () {
    function icecreamLogics() {
        this.arrowfunction = function (flav1, flav2) {
            if (flav2 == undefined)
                console.log(flav1);
            else
                console.log(flav1, ",", flav2);
        };
    }
    icecreamLogics.prototype.selectIcecremFlavWithoutLimit = function (flav1) {
        var otherFlav = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            otherFlav[_i - 1] = arguments[_i];
        }
        if (otherFlav.length == 0)
            console.log(flav1);
        else
            console.log(flav1, ",", otherFlav.join(","));
    };
    return icecreamLogics;
}());
exports.default = icecreamLogics;
var Validation = /** @class */ (function () {
    function Validation() {
    }
    Validation.prototype.validateEmail = function (search) {
        var serchfind;
        var regexp = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
        serchfind = regexp.test(search);
        console.log(search);
        console.log(serchfind);
        return serchfind;
    };
    Validation.prototype.validatePincode = function (pinCode) {
        var serchfind;
        var pattern = new RegExp("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$");
        serchfind = pattern.test(pinCode);
        console.log(pinCode);
        console.log(serchfind);
        return serchfind;
    };
    return Validation;
}());
exports.Validation = Validation;
