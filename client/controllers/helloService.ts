/// <reference path="../../typings/tsd.d.ts" />

module demoApp{

    export class HelloService {
        
        constructor(){}
        
        public getWelcomeMessage():string {
            return "Helloa";
        }
    }

angular.module('demoApp').service('demoApp.HelloService',HelloService);
        
}