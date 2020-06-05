$(function() {
	//1. p태그가 몇 개인지 alert창으로 확인
	//alert($('p').length);
	
	//2. 2번째 p태그를 firstP라는 변수에 할 당
	var firstP = $('p:eq(1)');
	//alert(firstP.html()); // 혹은 text()
	
	//3. read less 클릭하면 없어졌다가 나타나는
	$('a.more').click(function() {
		if(firstP.is(':hidden')){ //안 보인다면
			firstP.slideToggle('slow');
		}else{
			firstP.slideToggle('slow');
			$(this).html('read more');
		}
	})
	
	//4. 모든 글자의 폰트 사이즈... speech에다가
	var speech = $('div.speech');
	var defaultSize= speech.css('fontSize')
	//alert(defaultSize); //19.2px
	
	var num = parseInt(defaultSize, 10);// 10단위로 끊겠다...
	//alert(num); //19px
	$('#switcher>button').click(function() {
		switch(this.id){//어느 버튼이냐?
		case 'switcher-large':
			num += 5;
			break;
		case 'switcher-small':
			num -= 5;
			break;	
		default:
			num=parseInt(defaultSize, 10);
		}//switch
		
		speech.animate({
			fontSize: num+'px'
		}, 'fast');
	});
	
	
	
	
});