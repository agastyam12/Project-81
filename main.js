
canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc( 300 , 250 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc( 350 , 200 , 40 , 0 , 5 * Math.PI);
ctx.stroke();

color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc( 400 , 250 , 40 , 0 , 5 * Math.PI);
ctx.stroke();

color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc( 450 , 200 , 40 , 0 , 5 * Math.PI);
ctx.stroke();

color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc( 500 , 250 , 40 , 0 , 5 * Math.PI);
ctx.stroke();