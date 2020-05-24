function checkAge() {
		var age = document.agefrm.age;
		if(age.value=="") {
			alert("나이를 입력해주세요...");
		}else if(isNaN(document.agefrm.age.value)){
			alert("나이를 숫자로 입력바랍니다.")
		}else if(age.value>=19) { // 비교연산자를 사용할 때 숫자vs문자를비교하면 문자열을 자동으로 숫자로 변환하여 비교해준다
			alert("성인입니다... 입장 가능");
		}else {
			alert("미성년자입니다... 입장 불가능");
		}
		age.value= "";
		age.focus();
	}