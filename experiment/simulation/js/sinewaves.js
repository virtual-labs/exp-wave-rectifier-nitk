//original
function plotSine2(ctx, xOffset, yOffset,amplitude) {
    console.log(amplitude)
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
   // var scale = 20;
    
    ctx.beginPath();
    ctx.lineWidth = 3;
     ctx.strokeStyle = "rgb(110,181,286)";
    
    // console.log("Drawing point...");
    // drawPoint(ctx, yOffset+step);
    
    let x = 0;
    // let amplitude = 220;
    
    let frequency = 50;
    //ctx.moveTo(x, y);
    ctx.moveTo(x, 100);
    while (x < width) {
        // y = height/2 + amplitude * Math.sin(w*(x+xOffset));
            let mode =  Math.sin(w*(x+xOffset));
                y = height/2 + amplitude * mode;
                 ctx.lineTo(x, y);
                 //ctx.lineTo(x,y1);
                 // console.log("x="+x+" y="+y);
                 ctx.stroke();
                //  ctx.save();
            x++;
      
    }
   
   
    // console.log("Drawing point at y=" + y);
    ctx.stroke();
    ctx.restore();
}

//clipped
function plotSine2(ctx, xOffset, yOffset,amplitude) {
    console.log(amplitude)
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
   // var scale = 20;
    
    ctx.beginPath();
    ctx.lineWidth = 3;
     ctx.strokeStyle = "rgb(110,181,286)";
    
    // console.log("Drawing point...");
    // drawPoint(ctx, yOffset+step);
    
    let x = 0;
    // let amplitude = 220;
    
    let frequency = 50;
    //ctx.moveTo(x, y);
    ctx.moveTo(x, 100);
    while (x < width) {
        // y = height/2 + amplitude * Math.sin(w*(x+xOffset));
            let mode =  Math.sin(w*(x+xOffset));
            // console.log(mode)
            if(mode<0){
                y = height/2 + amplitude * mode;
            
                // y1 = height/2 + amplitude * Math.sin((w*(x+xOffset))-pi);
                 
                 ctx.lineTo(x, y);
                 //ctx.lineTo(x,y1);
                 // console.log("x="+x+" y="+y);
                 ctx.stroke();
                //  ctx.save();
            }  
            x++;
      
    }
   
   
    // console.log("Drawing point at y=" + y);
    ctx.stroke();
    ctx.restore();
}
//full wave
function plotSine2(ctx, xOffset, yOffset,amplitude) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
   // var scale = 20;
    
    ctx.beginPath();
    ctx.lineWidth = 3;
     ctx.strokeStyle = "rgb(110,181,286)";
    
    // console.log("Drawing point...");
    // drawPoint(ctx, yOffset+step);
    
    let x = 0;
    // let amplitude = 220;
    
    let frequency = 50;
    //ctx.moveTo(x, y);
    ctx.moveTo(x, 100);
    while (x < width) {
        // y = height/2 + amplitude * Math.sin(w*(x+xOffset));
            let mode =  Math.sin(w*(x+xOffset));
            let mode1 =  Math.sin((w*(x+xOffset))-Math.PI);
            // console.log(mode)
          
            if(mode<0)
                y = (height/2 + amplitude * mode);
            else 
            y = (height/2 + amplitude * mode1);

            ctx.lineTo(x, y);
            
                 ctx.stroke(); 
            x++;
      
    }
   
   
    // console.log("Drawing point at y=" + y);
    ctx.stroke();
    ctx.restore();
}