// dibawah ini untuk scroll
$('.page-scrol').on('click', function(e) {

	var tujuan = $(this).attr('href');
// // tangkap elemen ybs
	var elemenTujuan = $(tujuan);
	
// // memindahkan scroll

	$('html , body').animate({
		scrollTop : elemenTujuan.offset().top - 70
	}, 1250, 'swing');

		

	e.preventDefault();


});

		// dibawah ini untuk navbar
 var nav = document.getElementById('nava');

 	window.onscroll = function(){

 		if(window.pageYOffset > 80){

 			nav.style.background = "#242222";

 		}
 		else{
 			nav.style.background = "transparant";
 		}
 	}


 		// kursor
        $(document).mousemove(function(e){
            $('.pointer').css({left:e.pageX, top:e.pageY});
        });

        // title bergerak
        var txt = "Mochamad Syahrul Samsudin"
        var speed = 1000;
        var refresh = null;
        function action() { document.title = txt;
            txt = txt.substring(1,txt.length)+txt.charAt(0);
            refresh = setTimeout("action()" ,speed);}action();

        // parallax
       $(window).scroll(function(){
       		var wScroll = $(this).scrollTop();

       		$('.jumbotron h1').css({
       			'transform' : 'translate(0px, '+ wScroll/2	+ '%)'
       		});
       		$('.jumbotron p').css({
       			'transform' : 'translate(0px, '+ wScroll/1.8	+ '%)'
       		});
       });