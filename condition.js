let x = 6;
let y = 7;
let bool = true;
// if else
if (x < y && bool || !bool) {
    document.write("x < y");
    document.write("<br />");
    document.write("4 < 5");
} else if (x > y) {
    document.write("x > y")
} else {
    document.write("x = y")

}

document.write("<br />");


// switch
let result = 9;
switch (result){
    case 1:     document.write("result = 1"); break;
    case 2:     document.write("result = 2"); break;
    case 3:     document.write("result = 3"); break;
    case 4:     document.write("result = 4"); break;
    case 5:     document.write("result = 5"); break;
    default:  document.write(" result unknown");
}
document.write("<br />");


// ternary
x > y ? document.write("Yes") : document.write("No");

document.write("<br />");

//Loops

for(let i=0; i<=10; i++){
    if(i%3 === 0 && i !== 0) continue;
    if(i === 8) break;
    document.write(i+"<br />");
}
document.write("////////////<br />");
let z=0;

while(z < 10){
    document.write(z+"<br />");
    z+=3;

}
document.write("////////////<br />");
let k=0;
do{
    document.write("Loop is done");
}
while(k === 1);
