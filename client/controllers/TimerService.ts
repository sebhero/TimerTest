/// <reference path="../../typings/tsd.d.ts" />

module demoApp{
	
	export class TimerService{
		
		private totalElapsedMs:number = 0;
		private elapsedMs:number = 0;
		private startTime:Date;
		private timerPromise:ng.IPromise<any>;
		//private $interval:ng.IIntervalService; 


		static $inject = ['$interval','$log'];
		constructor(private $interval:ng.IIntervalService,private $log:ng.ILogService){
		}
		
		
		/**
		 * Lambda
		 * function(){} === () => {}
		 * function(attribute){} === (attribute) => {}
		 */

		/**
		 * Start the timer
		 */
		start():void{
			if(!this.timerPromise)
			{
				this.startTime = new Date();
				this.timerPromise=this.$interval((test) =>{
					var now = new Date();
					this.elapsedMs = now.getTime() - this.startTime.getTime();
					this.$log.info("count: "+this.elapsedMs);
					this.$log.info("start: "+this.startTime);
					this.$log.info("now: "+now);
				},31);
			}			
		}
		
		stop()
        {
			if(this.timerPromise){
	        	this.$interval.cancel(this.timerPromise);
				this.timerPromise = undefined;
				this.totalElapsedMs += this.elapsedMs;
				this.elapsedMs =0;
				this.$log.info("stop total: "+this.totalElapsedMs);
			}
        }
		
		reset(){
			this.startTime = new Date();
			this.totalElapsedMs = this.elapsedMs = 0;	
		}
		
		getElapsedMs():number
		{
			return this.totalElapsedMs + this.elapsedMs;
			this.$log.info("gettime: "+this.totalElapsedMs + this.elapsedMs);
		}
		
	}

angular.module('demoApp')
        .service('demoApp.TimerService', TimerService);

}