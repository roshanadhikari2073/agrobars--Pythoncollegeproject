// this is global

var car ={
	name :"BMW",
	year : 2015,
	printDEtail: function(){
		console.log(this.name + this.year);
	}
}

function fullname(){
	console.log(this.fName +""+this.lName);

}

var customerOne ={
	fName: "Ram",
	lName: "Stha",
	print: fullName
}
var customerTwo ={
	fName: "Shyam",
	lName: "Stha",
	print: fullName
}


// customerOne.print();
// customerTwo.print();
// console.log(this);

// fullName.call(customerOne, //to insert argument//"","",);