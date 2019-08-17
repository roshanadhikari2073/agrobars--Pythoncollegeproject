/*
	function countTo(seco){
		var min=parseInt(seco/60);
				 //console.log(min);
				var sec= seco%60;
				 //console.log(sec);	

			setTimeout(function(){
				

							
					if(seco>0){
						
												console.log(+ min +"MIN::"+ sec +"SEC");
												sec--;
					
					countTo(sec--);
				}
				else{
					/*
					if(min>=0)
						{
						//var sec=min*60;
					  var min=parseInt(sec/60);
					  //console.log(min);
						var msec=min*60+sec%60;
						
							console.log("Count::"+ min +":" + msec);
							min=min--;
						countTo(sec--);	
						}
					*/
	/*				console.log("End");
					}
				
						},1000)

	}

countTo(70);

*/


// 	function countTo(seco){
// 		var min=parseInt(seco/60);
// 				 //console.log(min);
// 				var sec= seco%60;
// 				 //console.log(sec);	

// 			setTimeout(function(){		
// 					if(seco>=0){
						
// 												console.log(+ min +"MIN::"+ sec +"SEC");
// 											seco=seco-1;
// 					countTo(seco--);
// 				}
// 				else{
// 					console.log("End");
// 					}
				
// 						},1000)

// 	}

// countTo(70);


 function countTo(minute){ 
						var year= Math.floor(minute/525600);
						var day= Math.floor((minute - (year*525600))/1440);
						var hour=Math.floor((minute -(year*60*24*365)- (day*60*24))/60);
						var min= Math.floor((minute -(year*60*24*365)- (day*60*24));
						var sec= ((minute -(year*60*24*365)- (day*60*24) - min*60)%60);			
			
			setTimeout(function(){				
						if(minute>=0){
						
				console.log(+year +"Year::"+ day +"day::"+ hour+"hour"+min +"min::"+ sec +"sec");	
							countTo(--minute);
								 	}
						else{
								console.log("End");
							}
				
							},1000)

	}

countTo(4);










// usING FUNCTION
// function countTo(minute){
// 		var timer ={
// 		 year: Math.floor(minute/60/24/365),
// 		 day: Math.floor((minute - (this.year*60*24*365))/60/24),
// 		 hour:Math.floor((minute - (day*60*24))/24),
// 		 min: Math.floor((minute - (hour*60)),
// 		 sec: (minute - min*60)%60,
		 
		 
// 		 // year:		 //console.log(min);
		 
// 				 //console.log(sec);	
// 			}
			
// 			setTimeout(function(){
				

							
// 					if(minute>=0){
						
// 												console.log(+ timer.year +"Year::"+ timer.hour +"hour::"+ timer.min +"SEC");
// 											// seco=seco-1;	
					
// 					countTo(--minute);
// 				}
// 				else{
// 					console.log("End");
// 					}
				
// 						},1000)

// 	}

// countTo(1051220);
