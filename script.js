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

       // canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = 'RGB(79, 79, 79)';


ctx.beginPath();
ctx.arc(148,50,40,0,2*Math.PI);
ctx.stroke();
ctx.fill();

var i = document.getElementById("canvasKu");
var context = i.getContext("2d");
// i.fillStyle = 'RGB(209, 209, 209)';

context.lineWidth = 10;
context.beginPath();
context.moveTo(99, 150);
context.lineTo(149, 40);
context.lineTo(199, 120);
context.strokeStyle = '#d1d1d1';
context.lineJoin = 'miter';
context.stroke();
