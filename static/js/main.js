// // console.dir(document);

// // document.title ="Title is new"

// // console.log(document.title);


// // selectors
// /*

// 		// 1. select by Id :  getElementById    retur object

// 	var footerEl = document.getElementById("my-footer") 
// 	console.log(footerEl);

// 	SHoe content in html File
// 		console.log(footerEl.textContent); OR
// 		console.log(footerEl.innerText);
// 	Change content
// 		var aboutEl = document.getElementById("about-title-text");
// 		// aboutEl.innerText ="ABout uss";
		
// 		aboutEl.innerText="About USSSS"

// 		console.dir(aboutEl);
// 		// console.log(aboutEl.innerText);

// */
// 		//*****************2getElementsByClassName;
		


// // 		var aboutEl =document.getElementsByClassName("about-section");
// // 		console.dir(aboutEl);
// // // getElementsby class name returns an array of object
// // var testDivEl = document.getElementsByClassName("test-div");
// // console.dir(testDivEl)

// // // console.log(testDivEl[2].innerText);
// // // *******LOOP)****************
// // for(var i=0;i<testDivEl.length;i++){
// // 	testDivEl[i].style.color = "red"
// // 	testDivEl[i].style.borderBottom = "1px blue solid";
// // 	console.dir(testDivEl[i])
// // 	// console.log(testDivEl[i].innerText);
// // }



// 			// 3. querySelector() , querySelectorAll()

// 		// 		// for one
// 		// var cardsEl = document.querySelector(".card");
// 		// console.dir(cardsEl);

// 			// for all

// 		// var cardsEl = document.querySelectorAll(".card");
// 		// console.dir(cardsEl);


// 						// for one	selctiing last chil


// 		// var cardsEl = document.querySelector(".card:last-child");
// 		// console.dir(cardsEl);



// // ****************// parent child)*******************
// 		// 		// Date : 2075/12/20 1;30 PM
// 		// var childEl = document.getElementById("test1");
// 		// console.dir(childEl);
// 		// console.log(childEl.parentNode);

// 		// var parentEl = childEl.parentNode;
// 		// // console.dir(parentEl.childNodes);     shows extra the child nodes
// 		// console.dir(parentEl.children); // show exact nodes




// // ****************************//Event Handekling ****************
// 			// -------------------1:50PM-------------------------



// 			// function handleBtnClick(el){
// 			// 	// el=this=button
// 			// 		el.innerText="Clicked";
// 			// 		console.dir(el);

// 			// }
// 			// var clickBtn = document.getElementById("clickBtn");
// 			// var childEl = document.getElementById("test1");
// 			// clickBtn.onclick = function(){
// 			// 	childEl.style.color = 'red';
// 			// 	childEl.style.fontWeight = 'bold';
// 			// 	childEl.style.fontSize = '50px';

// 			// 	console.log("Clickedffdsd");
// 			// 	clickBtn.innerText="Nice job";
// 			// }









// 			// Creat new html element using .createElement();
// 			// thi method takes an argument ->arguments can  be p div apna basically any html element 

// // 			var newP=document.createElement("p");

// // 			// assign new class name to newly craeted paragraph elements
// // 			newP.className="normal";


// // 			// setting inner text of paragraph element
// // 			newP.innerText ="Awsoemwmajbajfb";
// // 			console.dir(newP);
			

// // 			// setting up new attribute and its value
// // 			newP.setAttribute("id","newId");
// // 			console.log(newP);
// // var newEl = document.getElementById("new-element");
// // newEl.appendChild(newP);
// // var textGeneratorBtn = document.getElementById("click-paragraph");
// // var genertedTextDiv = document.getElementById("generated-text")

// // textGeneratorBtn.onclick = function (){
	
// // var newTextPara= document.createElement('p');
// // newTextPara.innerText = "Added paragraph";
// // genertedTextDiv.appendChild(newTextPara);
// // }

// // var textGeneratorBtn = document.getElementById("double-click");
// // textGeneratorBtn.ondblclick = function (){
// // 	console.log("Double click");
// // 	}




// // 	// Capturing the evenets
// // 	// on change
// // 	// on key dowm
// // 	// on key up

// // var myInput=document.getElementById("id-name");
// // var typedValue = document.querySelector("#typedValue");

// // 	// result ="abc" , 0=a, 1=b
// // 	// isNaN(result[i])



// // myInput.onchange = function(event){
// // 	// event=our event fired
// // 	// target is ine of the property of event
// // 	// target is also an object

// // 	// console.log(event.target.value);
// // 	// typedValue.innerText = event.target.value;
// // 	var result =event.target.value;
// // 	// convert the srting into integers

// // 	var integerResult =parseInt(result);
	
// // // checxking for NaN number
// // 	if(isNaN(integerResult)){
// // 		typedValue.innerText = "Plesase tyepe number";
// // 	}else{
// // 		typedValue.innerText=result;

// // 	console.log(integerResult);

// // 	// console.log(e);
// // 	// console.log(result);
// // 	// console.log(typeof result);
// 	 // typedValue.innerText =result;
// // 	}

// // }
// // function handleChange(e){
// // 	// do stuffs here
// // }
// // myInput.onchange =handleChange(event);
// // myInput.onkeydown =handleChange(event);





// // // ------------------------Array Method -------------------------
// // // 							array.map




// var students=[
// 				{
// 					name:'Ram',
// 					college:'swastik',
// 					DoB: '2054-12-13',
// 				},

// 				{
// 					name:'asvdhasdam',
// 					college:'swastik',
// 					DoB: '2044-12-12',
// 				},

// 				{
// 					name:'ham',
// 					college:'swastik',
// 					DoB: '2054-10-13',
// 				},

// 				{
// 					name:'tfytfyam',
// 					college:'swastik',
// 					DoB: '2054-10-13',
// 				}		
// 				];

// // 				// array.map()

// // // fuction am 3 kura pass garna milxa (1.current value  2. current index 3.main array)
// // // runn for 3 times becoz three elements ram ahbasd ham
// // 				students.map(function(student, index,array){
// // 						console.log(index +""+ student.name);
// // 				});

// // 				var mappedData = students.map(function(student){
// // 					return student.DoB;
// // 				});




// // 				var arrayOne=[1,2,3,4,5];
// // 								var square = arrayOne.map(function(arr){
// // 					return arr*2;

// // 				});
// // 				console.log(square);
// // 				console.log(mappedData);







// // 2:57
// // Listttma Input Garne

// // var studentList=document.getElementById("student-list");


// // // LOOPING THROUGH EACH ARRAY ELEMENTS
// // students.forEach(function(student,index){

// // 	// CREATE LI FOR EACH STUDENTS
// // 	var listEl = document.createElement("li");

// // 	// SETTING TEXT OF LIST= STUDENTS NAME

// // syntax `my name is ${variable}`
// // 	listEl.innerText = `${index +1} ${student.name}`;

// // 	// ADD THE NEWLY CREATED LIST TO UL ELEMENT
// // 	studentList.appendChild(listEl);
// // })

// // Table ma Input Garne

// // var studentDatadocument.getElementById("student-table");


// // // LOOPING THROUGH EACH ARRAY ELEMENTS
// // students.forEach(function(student,index){

// // 	// CREATE LI FOR EACH STUDENTS
// // 	var rowEl = document.createElement("tr");
// // 	var bodyEl = document.createElement("tbody");
// // 	// SETTING TEXT OF LIST= STUDENTS NAME
// // 	rowEl.innerText = student.name;

// // 	// ADD THE NEWLY CREATED LIST TO UL ELEMENT
// // 	studentList.appendChild(listEl);
// // })




// // inner html

// // var forInnerHTML = document.querySelector('#forInnerHTML');
// // forInnerHTML.innerHTML = "<h3> THis is inner html</h3> <p>THisbasfbjsajansd asdjasdj</p>";
// // // forInnerHTML.innerHTML = '<p>${ram=="nice"? someVariablesHere : falseStuffHere}'



// // var studentList = document.querySelector("#student-list");
// var studentTable = document.querySelector("#student-table");
// // console.log(studentList);

// students.forEach(function(student, index){

// 	// creating li for each student      let listEl =document.createElements("li");

// 		// + here help to append data remove overwrite
	
// 	studentTable.innerHTML +=`   
// 	<tr>
// 		<td>${index+1}</td>
// 		<td>${student.name}</td>
// 		<td>${student.college}</td>
// 		<td>${student.DoB}</td>
// 		</tr>`
// })














