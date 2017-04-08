var count = -1;
var diem = 0;
function render(){
	if(count == 2){
		document.getElementById("end").innerHTML = "Bạn đã hoàn thành khóa học";
		return true;
	}

	count++;
	document.getElementById("demo").innerHTML = " ";
	document.getElementById("a").checked = false;
	document.getElementById("b").checked = false;
	document.getElementById("c").checked = false;
	document.getElementById("d").checked = false;

	document.getElementById("h-typeOfQuestions").innerHTML = typeOfQuestions[count];
	if(typeOfQuestions[count] == "Chọn từ miêu tả hình ảnh"){
		document.getElementById("h-questions").innerHTML = " ";
		document.getElementById("anh").src = questions[count];
		document.getElementById("anh").width = "200";
		document.getElementById("anh").height = "200";

		} else {
		document.getElementById("h-questions").innerHTML = questions[count];
	}

	document.getElementById("a").disabled = false;
	document.getElementById("b").disabled = false;
	document.getElementById("c").disabled = false;
	document.getElementById("d").disabled = false;

	document.getElementById("0").innerHTML = choices[count][0];
	document.getElementById("1").innerHTML = choices[count][1];
	document.getElementById("2").innerHTML = choices[count][2];
	document.getElementById("3").innerHTML = choices[count][3];

	document.getElementById("a").value = choices[count][0];
	document.getElementById("b").value = choices[count][1];
	document.getElementById("c").value = choices[count][2];
	document.getElementById("d").value = choices[count][3];
	document.getElementById("cauthu").innerHTML = count + 1 + "/15";
}

function submitAnswer(){
	var c;
	useranswers = document.getElementsByName("gender");
	//
	for(var i =0;i< useranswers.length; i++){
		if(useranswers[i].checked){
			c = useranswers[i].value;
		} else {
			useranswers[i].disabled = true;
		}
	}
		//kiem tra ket qua cua cau tr loi
		if(c == answers[count]){
			console.log("helpp");
			document.getElementById("demo").innerHTML = "Congratulation! You're good!";
			console.log(diem);
			diem = diem + 1;
			document.getElementById("diem").innerHTML = diem;
		} 
		else{
			document.getElementById("demo").innerHTML = "Sorry! It's not the right answer <br />" + "Right answer is : " + answers[count];
		}
}