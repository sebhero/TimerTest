///<reference path="../../typings/tsd.d.ts" />

module demoApp {
   
export class AppCtrl {

     public hello:string;
     
     

        static $inject = ['demoApp.HelloService','demoApp.TimerService'];
        constructor(helloservice:HelloService, private timerService:TimerService) {
            // this.hello="hello world";
            this.hello=helloservice.getWelcomeMessage();
            
            
            
        }
    }

angular.module('demoApp')
        .controller('demoApp.AppCtrl', AppCtrl);	
}