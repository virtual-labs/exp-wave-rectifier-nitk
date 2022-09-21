let w=314;
let n1 = 0;
let n2 = 0;
let res = 0;
let N;
let pcheck;
let y = 0;
let y1=0;
let y2=0;
let y3=0;
let v2;
let v1=220;
let vrms;
let vdc;
let rf;
let cancel;
let startPlot;
let stopPlot;
// Next button
let a = 1;

function up() {
    a += 1;
    next();
}

function down() {
    a -= 1;
    next();
   
}
function next() {

    if (a == 1) {
        document.getElementById("buttondown").style.display = 'none';
        //document.getElementById("buttonup").style.display = 'block';
        document.getElementById("content").style.display = 'block';
        document.getElementById("content2").style.display = 'none';
        //document.getElementById("content3").style.display = 'none';

        
    }
    else if (a == 2) {
        // document.getElementById("th").style.visibility="hidden";
        document.getElementById("buttondown").style.display = 'block';
        document.getElementById("content").style.display = 'none';
        document.getElementById("content2").style.display = 'block';
        // document.getElementById("content3").style.display = 'none';
        document.getElementById("buttonup").style.display = 'none';

    } 
}

//Selecting the Procedure
function update() {
    document.getElementById("connectbutton").disabled=false;
    let select = document.getElementById('exp');
    let option = select.options[select.selectedIndex].value;
    if (option == 'Halfwaverectifier') {
    pcheck=false;
    displayhalfrectifier();  
}
 else if (option == 'Fullwaverectifier') {
    pcheck=true;
    displayfullrectifier();
   
}}

//button to connect to dso
function connect() {
    let select = document.getElementById('exp');
    let option = select.options[select.selectedIndex].value;
    if (option == 'Halfwaverectifier') {
    pcheck=false;
    displayhalfwithdso();
}
 else if (option == 'Fullwaverectifier') {
    pcheck=true;
    displayfullwithdso();
   
}}

//Choice to select the type of transformer
function changetransformer(){
    
    let select1=document.getElementById('transformers');
    let option1=select1.options[select1.selectedIndex].value;
    if(option1=="Stepdowntransformer")
    { pcheck=false; 
        display();
        }
        else if(option1=="Stepuptransformer"){
        pcheck=true;
        nodisplay();
        }}

//To disable buttons when step up transformer selected
 function nodisplay()
  { window.alert("Please select Step Down Transformer");
    document.getElementById('n1Slider').disabled=true;
    document.getElementById("n2Slider").disabled=true;
    document.getElementById("resistorSlider").disabled=true;
    document.getElementById("addbutton").disabled=true;
    document.getElementById("addbutton1").disabled=true;
    document.getElementById("addbutton2").disabled=true;
 }

 //To enable buttons when step down transformer selected
 function display()
 {
    document.getElementById("n1Slider").disabled=false;
    document.getElementById("n2Slider").disabled=false;
    document.getElementById("resistorSlider").disabled=false;
    document.getElementById("addbutton").disabled=false;
    document.getElementById("addbutton1").disabled=false;
    document.getElementById("addbutton2").disabled=false;
 }

function closeinstruction() {
    document.getElementById('instructions').style.display = 'none';
    // document.getElementById('blocker').style.display="none";
}

function closeinput(){
    document.getElementById('inputgraph').style.display='none';
    cancelAnimationFrame(startPlot)

    //closeanim();
}
function closeoutputhalf(){
    document.getElementById('outputgraphhalf').style.display='none';
    cancelAnimationFrame(startPlot)

    //reqclose();
}
function closeoutputfull(){
    document.getElementById('outputgraphfull').style.display='none';
    cancelAnimationFrame(startPlot)

   // reqclose();
}

function displayhalfrectifier()
{
    
        document.getElementById("Halfwave").style.display = 'block';
        document.getElementById("Fullwave").style.display = 'none';
        document.getElementById("halfwithdso").style.display = 'none';
        document.getElementById("fullwithdso").style.display = 'none';
}
function displayfullrectifier()
{
    document.getElementById("Fullwave").style.display = 'block';
    document.getElementById("Halfwave").style.display = 'none';
    document.getElementById("halfwithdso").style.display = 'none';
    document.getElementById("fullwithdso").style.display = 'none';   
        
}
function displayhalfwithdso()
{
        document.getElementById("Halfwave").style.display = 'none';
        document.getElementById("Fullwave").style.display = 'none';
        document.getElementById("halfwithdso").style.display = 'block';
        document.getElementById("fullwithdso").style.display = 'none';
        
}
function displayfullwithdso()
{
        document.getElementById("Halfwave").style.display = 'none';
        document.getElementById("Fullwave").style.display = 'none';
        document.getElementById("halfwithdso").style.display = 'none';
        document.getElementById("fullwithdso").style.display = 'block';
        
}
//sliders
function setSlider(ele){
    let sliderId = ele.id;
    if(sliderId == "n1Slider"){
        n1= ele.value;
        // console.log(n1)
        document.getElementById("n1Turn").innerHTML = `N1: ${ele.value}`
    }
    if(sliderId == "n2Slider"){
        n2 = ele.value;
        if(n2>n1)
        {window.alert("Please select a value of n1 greater than n2");
        // console.log(n2)
    }
else{
        document.getElementById("n2Turn").innerHTML = `N2: ${ele.value}`
    }}
    if(sliderId == "resistorSlider"){
        res = ele.value;

        document.getElementById("resistor").innerHTML = `Resistor: ${ele.value} &#8486;`
    }
} 

function help() {
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('blocker').style.display = 'none';
} 
//calculationf of vrms,vdc,ripple factor
function calculations() {
    let select = document.getElementById('exp');
    let option = select.options[select.selectedIndex].value;
    if (option == 'Halfwaverectifier') {
    pcheck=false;
    calculationHalf();
    document.getElementById('calculate1').style.display = 'block';
    document.getElementById('calculate').style.display = 'none';
    // document.getElementById('blocker').style.display = 'none';
    document.getElementById("v2Ans1").innerHTML = `<b>V <sub>2</sub>= ${v2} V<b>`;
    document.getElementById("vrmsAns1").innerHTML = `<b>V <sub>rms</sub>= ${vrms} V<b>`;
    document.getElementById("vdcAns1").innerHTML = `<b>V <sub>dc</sub>= ${vdc} V<b>`;
    document.getElementById("rfAns1").innerHTML = `<b>&gamma; = ${rf}<b>`;
   
}
 else if (option == 'Fullwaverectifier') {
    pcheck=true;
    calculationFull();
    document.getElementById('calculate1').style.display = 'none';
    document.getElementById('calculate').style.display = 'block';
    //document.getElementById('blocker').style.display = 'none';
    document.getElementById("v2Ans").innerHTML = `<b>V <sub>2</sub>= ${Math.round(v2*10)/10} V </b>`;
    document.getElementById("vrmsAns").innerHTML = `<b>V <sub>rms</sub>= ${vrms} V<b>`;
    document.getElementById("vdcAns").innerHTML = `<b>V <sub>dc</sub>= ${vdc} V<b>`;
    document.getElementById("rfAns").innerHTML = `<b>&gamma; =${rf}`;
}}
function calculateV2(){
    v2=(n2*v1)/n1;
    Math.round(v2*10000)/10000;
}
function calculationHalf()
{
    v2=(n2*v1)/n1;
    Math.round(v2*10000)/10000;
    vrms=v2/2;
    vdc=v2/3.14;
    rf=(Math.sqrt(Math.pow((vrms/vdc),2)-1));
    
    Math.round(vrms*10000)/10000;
    Math.round(vdc*10000)/10000;
    Math.round(rf*10000)/10000;
    
   // document.getElementById('calculate').style.display="block";

}
function calculationFull()
{ 
    v2=(n2*v1)/n1;
    vdc= (2*v2)/3.14159;
vrms= (v2)/Math.sqrt(2);
rf=Math.sqrt(Math.pow((vrms/vdc),2)-1);

    document.getElementById('calculate').style.display="block";

}
//waveform functions
function showAxes(ctx,axes) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var xMin = 0;
    
    ctx.beginPath();
    ctx.strokeStyle = "rgb=(62.7,12.5,94.1)";
    ctx.lineWidth = 5;
    
    // X-Axis
    ctx.moveTo(xMin, (height/2));
    ctx.lineTo(width, (height/2));
    
    // Y-Axis
    ctx.moveTo((width/2), 0);
    ctx.lineTo((width/2),height);

    
    ctx.stroke();
}

//iNPUT WITHOUT DIODE
function plotSine(ctx, xOffset, yOffset,amplitude) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    ctx.beginPath();
    ctx.lineWidth = 3;
     ctx.strokeStyle = "rgb(0,181,286)";
    let x = 0;
    let frequency = 50;
    //ctx.moveTo(x, y);
    ctx.moveTo(x, 50);
    while (x < width) {
        y = height/2 + amplitude * Math.sin(w*(x+xOffset));    
        ctx.lineTo(x, y);
        x++;
    }
   
    ctx.stroke();
    ctx.save();
    ctx.stroke();
    ctx.restore();
    
    // window.requestAnimationFrame(draw);
    // window.setInterval(draw,500000);
}

//INPUT WITH DIODE
function plotSine2(ctx, xOffset, yOffset,amplitude) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
   // var scale = 20;
    
    ctx.beginPath();
    ctx.lineWidth = 3;
     ctx.strokeStyle = "rgb(254,194,12)";
    
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
    
    // window.requestAnimationFrame(draw);
    // window.setInterval(draw,500000);
}
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var canvas2 = document.getElementById("canvast");
var context2 = canvas2.getContext("2d");

function draw() {
    context.clearRect(0, 0, 500, 500);
    context2.clearRect(0, 0, 500, 500);
    showAxes(context);
    showAxes(context2);
    context.save();  
    context2.save();  
    plotSine(context, step, 0,220);
    context.restore();
    calculateV2();
    plotSine2(context2, step, 0,v2);
    context2.restore();
    step += -5;
    startPlot = window.requestAnimationFrame(draw);  
}

function closeanim()
{     
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var canvas2 = document.getElementById("canvast");
    var context2 = canvas2.getContext("2d");
    console.log(30);
    let req=window.requestAnimationFrame(draw);
    cancelAnimationFrame(req);
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // context2.clearRect(0, 0, canvas.width, canvas.height);
    console.log(context);
    console.log(context2);   
}

//half wave output waveform
function plotSine3(ctx, xOffset, yOffset,amplitude) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
   // var scale = 20;
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgb(110,181,286)";
    // console.log("Drawing point...");
    // drawPoint(ctx, yOffset+step);
    let x = 0;
    //ctx.moveTo(x, y);
    ctx.moveTo(x, 250);
    while (x < width) {
    // y = height/2 + amplitude * Math.sin(w*(x+xOffset));
        let mode =  Math.sin(w*(x+xOffset));
        // console.log(mode)
        if(mode<0){
            y = ((height/2)+5) + amplitude * mode;
    
            ctx.lineTo(x, y);
            ctx.stroke();
        }  
        // ctx.save();
        x++;    
    } 
    // console.log("Drawing point at y=" + y);
    ctx.stroke();
    ctx.restore();
}
function halfclip()
{
    var canvas3 = document.getElementById("canvas3");
    var context3 = canvas3.getContext("2d");
    context3.clearRect(0, 0, 500, 500);
    showAxes(context3);
    context3.save();  
    calculateV2();
    plotSine3(context3, step, 0,v2);
    context3.restore();
    step += -3;
    startPlot = window.requestAnimationFrame(halfclip);
}
//fullwave output waveform
function plotSine4(ctx, xOffset, yOffset,amplitude) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    ctx.beginPath();
    ctx.lineWidth = 3;
     ctx.strokeStyle = "rgb(110,181,286)";
    let x = 0;
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
function fullclip()
{
    var canvas4 = document.getElementById("canvas4");
    var context4 = canvas4.getContext("2d");
    context4.clearRect(0, 0, 500, 500);
    showAxes(context4);
    context4.save();  
    calculateV2();
    plotSine4(context4, step, 0,v2);
    context4.restore();
    
    step += -5;
    startPlot = window.requestAnimationFrame(fullclip);
}

function init() {
    startPlot =  window.requestAnimationFrame(draw);
}
function init1() {
    startPlot = window.requestAnimationFrame(halfclip);
}
function init2() {
    startPlot = window.requestAnimationFrame(fullclip);
}
var step =-5;
 let ctx1;
 

//Input waveform Button functions
function getinputwaveform()
{
    document.getElementById("inputgraph").style.visibility="visible";
  // console.log(23); 
    document.getElementById('inputgraph').style.display= "block";
    document.getElementById('inputw').style.display="block";
    init();
}

//Output Waveform Button functions

function getoutputwaveform(){

    let select = document.getElementById('exp');
    let option = select.options[select.selectedIndex].value;
    if (option == 'Halfwaverectifier') {
    pcheck=false;
    document.getElementById('outputgraphhalf').style.display="block";
    document.getElementById('outputgraphfull').style.display="none";
    document.getElementById('outputh').style.display="block";
    document.getElementById('outputf').style.display="none";
    init1();
}
 else if (option == 'Fullwaverectifier') {
    pcheck=true;
    document.getElementById('outputgraphhalf').style.display="none";
    document.getElementById('outputgraphfull').style.display="block";
    document.getElementById('outputf').style.display="block";
    document.getElementById('outputh').style.display="none";
  init2();
}}

//Reset button function

function Refresh() {
    window.location = window.location.href;
};

function closefulli(){
    document.getElementById('calculate').style.display="none";
    document.getElementById('blocker').style.display="none";
   //reqclose();

}
function closehalfi(){
    document.getElementById('calculate1').style.display="none";
    //document.getElementById('blocker').style.display="none";
  // reqclose();
}
