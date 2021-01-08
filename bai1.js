function myFunction() {
  
  objModal = {
    titleName: "Show information",
    Content: "Content Demo"
  };
  handleAddTagImg3();
}
// let titleName = document.getElementById("titleName").innerHTML = objModal.titleName;

// let content = document.getElementById("content").innerHTML = objModal.Content
function demo() {
  objModal = {
    titleName: "Show information",
    Content: "Content Demo"
  };
  // var a,b,c;
  var a = document.getElementById("commodity0").value;
  // document.getElementById("getvaluecommodity0").innerHTML=a;
  var b = document.getElementById("commodity1").value;
  // document.getElementById("getvaluecommodity1").innerHTML=b;
  var c = Math.round((parseInt(a) - parseInt(b)) / a * 100);
  document.getElementById("getvalueSell").innerHTML = parseInt(c) + "%";
  var d = 100-c;
  // empty();
  handleRemoveImg3('#imggif');
  handleAddTagChart3();
  myChart3(c, d);



}

function myChart3(c, d) {
  var myData = [c, d];

  // var removed = myData.splice(-1);
  var ctx = document.getElementById('myChart3');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['sản phẩm bán được', 'sản phẩm cuối ngày'],
      datasets: [{
        data: myData,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
        ]
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Biểu đồ hiển thị'
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      // empty();
      //  hover: {
      //     mode: 'nearest',
      //     intersect: true
      //   }
    }
  });
  // return setTimeout(function(){
  //   clearArray();
  // },2000)
  return removeData()



};

//remove ảnh
function handleRemoveImg3(valueImg) {
  let getValue = document.querySelector(valueImg);
  if (getValue != null) {
    getValue.remove();
  }
}
//add ảnh
function handleAddTagImg3() {
  let tagCanvans = document.createElement('img');
  tagCanvans.setAttribute('src', 'https://media2.giphy.com/media/dTzJl4xkeYPiqnIupb/giphy.gif');
  tagCanvans.setAttribute('id', 'imggif');
  tagCanvans.setAttribute('class', 'img');
  let elementProductForm = document.getElementById("myForm");
  elementProductForm.appendChild(tagCanvans);
}

function reset() {
  if (document.getElementById('imggif') == null) {
    handleAddTagImg3();
  }
  document.getElementById('myForm').reset();
  RemoveChart3();

}
//add chart
function handleAddTagChart3() {
  let ss = document.createElement('canvas');
  ss.setAttribute('id', 'myChart3');
  let elementProductForm = document.getElementById('myForm');
  elementProductForm.appendChild(ss);
}
function RemoveChart3() {
  document.getElementById('myChart3').remove();
}


// handleAddTagChart3()
// function clearArray(myData){
//   let arr2= [];
//   myData = arr2;
//   console.log(myData);
// }
function removeData() {

  chart.data.datasets.forEach((dataset) => {
    dataset.data.pop();
  });
  chart.update();

}
function addData(data) {

  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}
// !!! Bài 2
function demo1() {
  Alert_loading()
 
  setTimeout(function () { out_Alert1() 
    
    var e = document.getElementById("TSP").value;
    var str = e;
    var res = str.toUpperCase();
    document.getElementById("getvalueTSP").innerHTML = res;
    var f = document.getElementById("GSP").value;
    document.getElementById("getvalueGSP").innerHTML = f + "VND";
    var g = document.getElementById("myRange").value;
    document.getElementById("getvaluedemo").innerHTML = g + "%";
    var h = (parseInt(f) * (100 - parseInt(g))) / 100;
    document.getElementById("getvalueSP").innerHTML = h + "VND";
  }, 3000)  
  
  
}
function Alert_loading() {
  let timerInterval
  Swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        const content = Swal.getContent()
        if (content) {
          const b = content.querySelector('b')
          if (b) {
            b.textContent = Swal.getTimerLeft()
          }
        }
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
}
function out_Alert1() {
  Swal.fire({
    // title: '<strong>HTML <u>example</u></strong>',
    icon: 'info',
    width:600,
    html:
      '<h3 class="modal-title" style="display: inline-flex;">Tên Sản Phẩm:<p class="modal-title" id="getvalueTSP"></p></h3><br>'+
      '<h3 class= "modal-title" style="display: inline-flex;" > Giá Sản Phẩm: <p class="modal-title" id="getvalueGSP"></p> </h3> <br>'+
      '<h3 class="modal-title" style="display: inline-flex;">Giảm Giá:<p class="modal-title" id="getvaluedemo"></p>      </h3><br>'+
      '<h3 class="modal-title" style="display: inline-flex;">Giá đã Giảm:<p class="modal-title"          id="getvalueSP"></p>        </h3><br>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
}