
// //strict
// // arr = [1,2,3];
// // arr2 = "ram"

// // consol.log("orginal array:"+ arr);
// // arr.shift()
// // console.log(arr)
// // arr.unshift("ram", "shyam");

// // console.log("After unshift:\t" + arr);

// /* var arrayFirst = ["a", "b" , "c"];
// var arraySecond = ["d", "e" , "f"];
// var arrayThird = ["g", "h" , "i"];

// var arrayFinal = arrayFirst.concat(arraySecond, arrayThird);

// // console.log(arrayFinal);

// // Slice
// // console.log(arrayFinal.slice(1,3));

// // Splice
// arrayFinal.splice(-2,2 ,"ramesh");
// // console.log(arrayFinal);
// lastElement= arrayFinal.splice(-1);
// console.log(lastElement);

// arrayFinal.splice(-3,-1 ,"ramesh");
// console.log(arrayFinal);
// // console.log(arrayFinal.splice(1,4));

// */
// // Decision Statement
	


// 	/*var testArray = [1,2,3,4,5];

// 	var one =1;
// 	var strOne='1';

// 		if(one===strOne){
// 			console.log("Equal");
// 			}else {
// 				console.log("NOt");
// 			}	

// // Strictly usee === 
		
// /*
// 	if(testArray.length ==10){
// 		console.log("length is 10");
// 	} else if(testArray.length >10){
// 		console.log("length is greater 10");
// 	} else {
// 		console.log("length is not known");
// 	}

// 	*/



// 	/* Switch
// var hero ='Superman';

// switch(hero.toLowerCase()){
// 		case 'superman':
// 			console.log("super powerd");
// 			break;
// 		case 'batman':
// 			console.log("susfdasfaf");
// 			break;
// 		default:
// 				console.log("Hero");
			
// 			}

// */
// //Function

// /*Concept
// function sayHello(fName, lName){
// 	console.log("Hello world"+ fName +"" + lName);
// }


// sayHello("samip", "Mbshd");
// sayHello("stupid", "gadb");
// sayHello("ajsd", "bsjc");
// sayHello("Bibek","");
// */
// // Workk

// /*function solveNumber(n1 , n2 , action){
// 	if(action==="add")  {
// 		console.log(n1+n2);
// 	}
// 		else if(action==="sub")  {
// 			console.log(n1-n2);

// 		}
// 		else if(action==="mul") {
// 				console.log(n1*n2);
// 			}
// 		else{
// 				console.log("Error");
// 			}
// 	} 


// 	solveNumber(2,5,"sub");
// 	solveNumber(2,5,"add");
// 	solveNumber(2,5,"mul");
// 	solveNumber(2,4,"ssabdja");	
	


// 	// LOOP
// 	// For loop

// 	// while loop


// 	//Terrnary operator


// 	var a=5;
// 	a>2?console.log("greater"):console.log("false");
// 	// condition?if true do this :else do this;
	

// // SCOPE


// 	var a=20;
// 	function checkScope(){
// 		console.log(a+4);
// 		a=28;
// 		// console.log(a);
// 	}


// 	checkScope();
// 	console.log(a);




// 	// FUNCTION EXPRESSION function which have no name::::syntax function()



// //    This detremines the time counter. Its has function followed by time

// var string="Waited for 5 second"
// console.log("Execution starts");
// setTimeout(function(){
// 	console.log(string);
// },5000)

// 	*/


// 	//Creating a counter that counts 10 9 8 7...

// 	var counter = 10;
// 	function countTo(){
// 			setTimeout(function(){
// 				if(counter>=0){
// 					console.log("Count::"+ counter++);
// 					countTo();
// 				}else{
// 					console.log("End");
// 				}
// 		},1000)

// 	}

// countTo();

// // Homework
// /*
//  var counter=61;
// 	function countTo(sec){
// 			setTimeout(function(){
// 				var min=counter/60;
// 				// console.log(min);
// 				var sec= counter%60;
// 				// console.log(sec);	


// 				if(sec>=0){
// 					sec=sec--;
// 					console.log("Count::"+ min +":" + sec);
					
// 					countTo();
// 				}else{
// 						if(min>=0)
// 						{
// 							console.log("Count::"+ min +":" + sec);
// 							min=min--;	
// 						}
// 					console.log("End");
// 				}
// 				sec--;
// 		},1000)

// 	}

// countTo();



// /*

// (function(){
// 	console.log("NICE");
// })();






// //******************FUNCTIONS*******************************
// //----------------------------------------------------------

// /*

// function mySquare(number){
// 	var result = number*number;
// 	//console.log(result);
// 	return result;
// }



// var value = mySquare(5);


// var result5= mySquare(5);
// //RESULT5 = result

// //var resultnew = result5 * 2;

// var myStuff = function(){
// 	return "nice";
// }


// var result6 = mySquare(6);
// console.log(result5);

// console.log(myStuff());
// //console.log(resultnew);
// console.log(result6);





// function myNewFunction(){
// 		var myString = "Called myNewFunction";
// 		//return  "Called myNewFunction";
// 		return myString;
// }

// var refFunc = myNewFunction;
// console.log(refFunc());
// console.log(refFunc);

// //refFunc()

// //refFunc()




// function one(){
// 	return function(){
// 		console.log("Return from function one");
// 	}
// }
// //one();
// //console.log(one());
// //console.log(one()());
// //ORR
// var res= one();
// res();

// */


// /*

// function test(){
// 	return "Called"
// 	//console.log("Calll");

// // }
// // var result=test();
// // console.log(result);
// // */


// // //Select all ctrl + /

// // //OBjEcTs

// // var car = {
// // 	name:"BMW",//property
// // 	year:2010,//property
// // 	madeIn:"USA",//property
// // 	parts :{
// // 		name: "ENgine",
// // 		type: "solid",
// // 		condition: "ok",
// // 		renewed: true,
// // 		printDetails: function(){
// // 			console.log("Engine details");
// // 		}
// // 	},
// // 	getDetails:function(){
// // 		//this=car
// // 		console.log(this.name + "was made in" + this.madeIn + "in" + this.year);
		
// // 	},
// // 	//method
// // 	getMadeIn: function (){
// // 		return this.madeIn;
// // 	}//METHOD

// // }

// // //to access the object properties and method
// // //we use member access operator "."(dot)
// // //console.log()

// // //console.log(car.name, car.year, car.getDetails(),car.getMadeIn());
// // console.log(car.name,car.parts.name, car.getDetails());
// // console.log(car.name,car.parts);

// // car.name = "Ramesh";
// // car['name']="Ram";//rename
// // car["build"] = "Metal";	//add
// // car.hero ="nice";
// // // console.log(car);
// // console.log(car['newProperty']);
// // console.log(car.newProperty);

// // //console.log(car['name']);

var anotherCar ={
	name: "Toyotaa",
	year: 2010,
	parts: [
	{
		name:"Engine",
		serviced: true,
	},
	{
		name: "clutch",
		serviced: false
	}	
	],
	printDetail: function(){
		console.log(this.name)
	}
}

console.log(anotherCar.parts[0].name);
console.log(anotherCar.parts[1]);
console.log(anotherCar.parts[0].serviced);




// JAson


// var user =[
// 	{name:"ram", dob: 1950},
// 	{name:"ram", dob: 1950},
// 	{name:"ram", dob: 1950},
// 	{name:"ram", dob: 1950},
// 	{name:"ram", dob: 1950},
// 	{name:"ram", dob: 1950},
// 	{name:"ram", dob: 1950},

// ];