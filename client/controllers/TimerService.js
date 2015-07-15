/// <reference path="../../typings/tsd.d.ts" />
var demoApp;
(function (demoApp) {
    var TimerService = (function () {
        function TimerService($interval, $log) {
            this.$interval = $interval;
            this.$log = $log;
            this.totalElapsedMs = 0;
            this.elapsedMs = 0;
        }
        /**
         * Lambda
         * function(){} === () => {}
         * function(attribute){} === (attribute) => {}
         */
        /**
         * Start the timer
         */
        TimerService.prototype.start = function () {
            var _this = this;
            if (!this.timerPromise) {
                this.startTime = new Date();
                this.timerPromise = this.$interval(function (test) {
                    var now = new Date();
                    _this.elapsedMs = now.getTime() - _this.startTime.getTime();
                    _this.$log.info("count: " + _this.elapsedMs);
                    _this.$log.info("start: " + _this.startTime);
                    _this.$log.info("now: " + now);
                }, 31);
            }
        };
        TimerService.prototype.stop = function () {
            if (this.timerPromise) {
                this.$interval.cancel(this.timerPromise);
                this.timerPromise = undefined;
                this.totalElapsedMs += this.elapsedMs;
                this.elapsedMs = 0;
                this.$log.info("stop total: " + this.totalElapsedMs);
            }
        };
        TimerService.prototype.reset = function () {
            this.startTime = new Date();
            this.totalElapsedMs = this.elapsedMs = 0;
        };
        TimerService.prototype.getElapsedMs = function () {
            return this.totalElapsedMs + this.elapsedMs;
            this.$log.info("gettime: " + this.totalElapsedMs + this.elapsedMs);
        };
        //private $interval:ng.IIntervalService; 
        TimerService.$inject = ['$interval', '$log'];
        return TimerService;
    })();
    demoApp.TimerService = TimerService;
    angular.module('demoApp')
        .service('demoApp.TimerService', TimerService);
})(demoApp || (demoApp = {}));
//# sourceMappingURL=TimerService.js.map