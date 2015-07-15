/// <reference path="../../typings/tsd.d.ts" />
var demoApp;
(function (demoApp) {
    var HelloService = (function () {
        function HelloService() {
        }
        HelloService.prototype.getWelcomeMessage = function () {
            return "Helloa";
        };
        return HelloService;
    })();
    demoApp.HelloService = HelloService;
    angular.module('demoApp').service('demoApp.HelloService', HelloService);
})(demoApp || (demoApp = {}));
//# sourceMappingURL=HelloService.js.map