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
