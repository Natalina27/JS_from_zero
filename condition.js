let x = 7;
let y = 7;
// if else
if (x < y) {
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


