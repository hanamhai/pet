function myFunction(){
    objModal = {
        titleName: "Show information",
        Content: "alalal:"
    };
    let content = document.getElementById("content").innerHTML = objModal.Content

}
function demo(){
    objModal = {
        titleName: "Show information",
        Content: "alsss:"
    };
    tinhlai('a,b,c,d');
}
function tinhlai(){
    let a=document.getElementById("name").value;
    document.getElementById("getvalueTKH").innerHTML = a;
    let b= document.getElementById("tiengui").value;
    document.getElementById("getvalueSTG").innerHTML = b + "VND";
    let c= document.getElementById("lai").value;
    document.getElementById("getvalueLS").innerHTML = c +  " %/năm";
    let d= document.getElementById("kyhangui").value; 
    document.getElementById("getvalueKHG").innerHTML=d + " tháng";
    let e=(parseFloat(b)*((parseFloat(c)/100)/360) * (30*parseFloat(d)));
    document.getElementById("getvalueLHT").innerHTML=e +  " VND";
    document.getElementById("getvalueLDK").innerHTML=parseFloat(d)*parseFloat(e)+parseFloat(b) + " VND";
    // function handleNumbers(b, c, d) {
    //     objScore = {
    //         ScorceTotal: (parseFloat(b) * ((parseFloat(c) / 100) / 360) * (30 * parseFloat(d)))
    //     }
    //     document.getElementById("getvalueLDK").innerHTML = Math.round(objScore.ScorceTotal * 100) / 100 + "VNĐ";

    // }
    // handleNumbers(b,c,d);
}
function reset(){

    document.getElementById('as').reset();
 }
