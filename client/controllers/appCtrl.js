///<reference path="../../typings/tsd.d.ts" />
var demoApp;
(function (demoApp) {
    var AppCtrl = (function () {
        function AppCtrl(helloservice, timerService) {
            this.timerService = timerService;
            // this.hello="hello world";
            this.hello = helloservice.getWelcomeMessage();
        }
        AppCtrl.$inject = ['demoApp.HelloService', 'demoApp.TimerService'];
        return AppCtrl;
    })();
    demoApp.AppCtrl = AppCtrl;
    angular.module('demoApp')
        .controller('demoApp.AppCtrl', AppCtrl);
})(demoApp || (demoApp = {}));
//# sourceMappingURL=appCtrl.js.map