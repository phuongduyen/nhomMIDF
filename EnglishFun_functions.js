var count = -1;
var diem = 0;
function render(){
	if(count == (questions.length -1) ){
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
	document.getElementById("cauthu").innerHTML = count + 1 + "/" + questions.length;
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
			document.getElementById("demo").innerHTML = "Bạn trả lời đúng rồi!";
			document.getElementById("demo").style.color = "green";
			document.getElementById("demo").style.fontSize= "xx-large";

			console.log(diem);
			diem = diem + 1;
			document.getElementById("diem").innerHTML = diem;
		} 
		else{
			document.getElementById("demo").innerHTML = "Bạn trả lời sai rồi! <br> Đáp án đúng là: " + answers[count];
			document.getElementById("demo").style.color = "red";
			document.getElementById("demo").style.fontSize = 'xx-large';
		}
}

//=====================================================================================

var count1 =0;
var btv = 0;

function render1(){
	if(count1 == (voca[btv].length)){
		document.getElementById("end").innerHTML = "Chúc mừng bạn đã học xong bộ từ vựng này";
		document.getElementById("end").style.color = "green";
		return true;
	}
	document.getElementById("voca").innerHTML = voca[btv][count1];
	document.getElementById("image").src = image[btv][count1];
	document.getElementById("pronounce").innerHTML = pronounce[btv][count1];

	document.getElementById("example0").innerHTML = example[btv][count1][0];
	document.getElementById("trans0").innerHTML = trans[btv][count1][0];
	document.getElementById("example1").innerHTML = example[btv][count1][1];
	document.getElementById("trans1").innerHTML = trans[btv][count1][1];
	document.getElementById("example2").innerHTML = example[btv][count1][2];
	document.getElementById("trans2").innerHTML = trans[btv][count1][2];

	count1++;
}

function btv0(){
	document.getElementById("end").innerHTML = "";
	document.getElementById("end").style.color = "";
	count1 = 0;
	btv = 0;
	render1();
}

function btv1(){
	document.getElementById("end").innerHTML = "";
	document.getElementById("end").style.color = "";
	count1 = 0;
	btv = 1;
	render1();
}

function btv2(){
	document.getElementById("end").innerHTML = "";
	document.getElementById("end").style.color = "";
	count1 = 0;
	btv = 2;
	render1();
}

function btv3(){
	document.getElementById("end").innerHTML = "";
	document.getElementById("end").style.color = "";
	count1 = 0;
	btv = 3;
	render1();
}
