
const w = 1000, h = 600;
var concepts = {};

concepts[0] = {"text":"machine learning", "size":50, "pos":{{100, 500}, {300, 300}}};

const canvas = document.getElementById("goCanvas");
const g = canvas.getContext("2d");

var state = 0;


update();

function update(){
	//BG
	g.fillStyle="#9e662e";
	g.fillRect(0, 0, w, h);
	
	g.beginPath();
	size = concepts[0].size;
	x = concepts[0].pos[state][0];
	y = concepts[0].pos[state][1];
	g.arc(x, y, size/2, 0, 2 * Math.PI);
	
	g.fillStyle = 'blue';
	
	g.fill();
	g.lineWidth = 0.5;
	g.strokeStyle = 'black';
	g.stroke();
}

function move(){
	state = 1 - state;
	update();
}
