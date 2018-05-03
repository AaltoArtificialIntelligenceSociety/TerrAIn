
const w = 1000, h = 600;
var concepts = [];

concepts[0] = {"text":"machine learning", "size":50, "pos":[[100, 500], [300, 300]]};
concepts[1] = {"text":"deep learning", "size":50, "pos":[[200, 300], [700, 200]]};

const canvas = document.getElementById("goCanvas");
canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

const g = canvas.getContext("2d");

var state = 0;

const animSteps = 11;
var anim = [0, 0.05, 0.11, 0.18, 0.3, 0.5, 0.7, 0.82, 0.89, 0.95, 1];

update();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function update(step){
	//BG
	g.fillStyle="#BBB";
	g.fillRect(0, 0, w, h);
	
	concepts.forEach(function(c){
	
		g.beginPath();
		var x = step * c.pos[state][0] + (1-step) * c.pos[1-state][0];
		var y = step * c.pos[state][1] + (1-step) * c.pos[1-state][1];
		g.arc(x, y, c.size/2, 0, 2 * Math.PI);
		
		g.fillStyle = 'royalBlue';
		
		g.fill();
		g.lineWidth = 0.5;
		g.strokeStyle = 'black';
		g.stroke();
	})
}

async function move(){
	state = 1 - state;
	for(var i = 0; i < animSteps; i++){
		update(anim[i]);
		await sleep(200);
	}
}
function mouseMoved(){
	
}
