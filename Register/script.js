

window.onload=function(){
    var vitian = document.getElementsByTagName('select')[0];
    var reg_no = document.getElementById('reg_no');
    var college = document.getElementById('college');
    //var vit = document.getElementsByTagName("option")[vitian].value;

    console.log(vitian);
    vitian.addEventListener('change',function(e){ 
    //alert(this.value);
    if (this.value == 'yes') {
        reg_no.style.display = "block"
        college.style.display = "none"
    }
    else if (this.value =='no') {
        college.style.display = "block"
        reg_no.style.display = "none"
    }
})
  }
