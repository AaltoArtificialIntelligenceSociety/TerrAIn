
const w = 1000, h = 600;
var concepts = [];

concepts[0] = {"text":"machine learning", "size":50, "pos":[[100, 500], [300, 300]]};

const canvas = document.getElementById("goCanvas");
canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

const g = canvas.getContext("2d");

var state = 0;


update();

function update(){
	//BG
	g.fillStyle="#BBB";
	g.fillRect(0, 0, w, h);
	
	concepts.forEach(function(c){
	
		g.beginPath();
		g.arc(c.pos[state][0], c.pos[state][1], c.size/2, 0, 2 * Math.PI);
		
		g.fillStyle = 'royalBlue';
		
		g.fill();
		g.lineWidth = 0.5;
		g.strokeStyle = 'black';
		g.stroke();
	})
}

function move(){
	state = 1 - state;
	update();
}
function mouseMoved(){
	
}
