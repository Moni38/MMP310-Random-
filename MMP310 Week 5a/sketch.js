/*
	new design 
    patterns renew when clicking 
	week 5
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(155);
	
	
	var columns = 25;
	var rows = 25;
	var w = width / columns; // column width
	var h = height / rows; // row height
	
	// nested loop 
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
            
    strokeWeight(10);
    var r = random(5);
    if (r > 2) {           
            
        
    fill("red");
    ellipse(x + w - w/2, y + h - h/2, w/2, h/2);  
    } else {
        
    stroke(0);
    fill("pink");
    ellipse(x+w/9, y+h/9, w, h); 
            
            
        
    fill("white");
    ellipse(x + w/2, y + h - h/2, w/2, h/2); //bottom litte dot 
                                
				
}
}
}
}


function mouseClicked() {
	save('lattern-1.jpg');
}
