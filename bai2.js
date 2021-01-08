function myFunction(){
    objModal = {
        titleName: "Show information",
        Content: "Content Demo"
    };
}
function demo(){
    objModal={
        titleName: "Show informatin",
        
    }
    var a = document.getElementById("TSP").value;
    document.getElementById("getvalueTSP").innerHTML = a;
    var b = document.getElementById("GSP").value;
    document.getElementById("getvalueGSP").innerHTML = b +"VND";
    var c = document.getElementById("myRange").value;
    document.getElementById("getvaluedemo").innerHTML = c +"%";
    var d = (parseInt(b)*(100-parseInt(c)))/100;
    document.getElementById("getvalueSP").innerHTML = d +"VND";
}