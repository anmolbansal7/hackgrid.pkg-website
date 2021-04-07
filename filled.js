
var countDownDate_design = new Date("Apr 7, 2021 22:55:02").getTime();
var countDownDate_frontend = new Date("Apr 7, 2021 22:57:52").getTime();
var countDownDate_backend = new Date("Apr 7, 2021 22:54:55").getTime();

var design_btn = document.getElementById("d_btn");
var frontend_btn = document.getElementById("f_btn");
var backend_btn = document.getElementById("b_btn");
var design_c = document.getElementById("cd");
var frontend_c = document.getElementById("cf");
var backend_c = document.getElementById("cb");


var myfunc = setInterval(function() {

var now = new Date().getTime();

var timeleft_design = countDownDate_design - now;
var timeleft_frontend = countDownDate_frontend - now;
var timeleft_backend = countDownDate_backend - now;
    

var days_d = Math.floor(timeleft_design / (1000 * 60 * 60 * 24));
var hours_d = Math.floor((timeleft_design % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes_d = Math.floor((timeleft_design % (1000 * 60 * 60)) / (1000 * 60));
//var seconds_d = Math.floor((timeleft_design % (1000 * 60)) / 1000);

var days_f = Math.floor(timeleft_frontend / (1000 * 60 * 60 * 24));
var hours_f = Math.floor((timeleft_frontend % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes_f = Math.floor((timeleft_frontend % (1000 * 60 * 60)) / (1000 * 60));

var days_b = Math.floor(timeleft_backend / (1000 * 60 * 60 * 24));
var hours_b = Math.floor((timeleft_backend % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes_b = Math.floor((timeleft_backend % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById("time_d").innerHTML = `${days_d} Days ${hours_d} Hrs ${minutes_d} mins to go`
document.getElementById("time_f").innerHTML = `${days_f} Days ${hours_f} Hrs ${minutes_f} mins to go`
document.getElementById("time_b").innerHTML = `${days_b} Days ${hours_b} Hrs ${minutes_b} mins to go`

if (timeleft_design < 0) {
    design_c.style.display = "none";
    design_btn.style.display = "block";
}

if (timeleft_frontend < 0) {
    frontend_c.style.display = "none";
    frontend_btn.style.display = "block";
}

if (timeleft_backend < 0) {
    backend_c.style.display = "none";
    backend_btn.style.display = "block";
}
//console.log(timeleft_design);

// if (days>1 && hours>1 && minutes>1) {
//     document.getElementById("time").innerHTML = `${days} Days ${hours} Hrs ${minutes} mins to go`
// }
// else if (days>1 && hours>1 && minutes<=1) {
//     document.getElementById("time").innerHTML = `${days} Days ${hours} Hrs ${minutes} min to go`
// }
// else if (days>1 && hours<=1 && minutes>1) {
//     document.getElementById("time").innerHTML = `${days} Days ${hours} Hr ${minutes} mins to go`
// }
// else if (days<=1 && hours>1 && minutes>1) {
//     document.getElementById("time").innerHTML = `${days} Day ${hours} Hrs ${minutes} mins to go`
// }
// else if (days<=1 && hours<=1 && minutes>1) {
//     document.getElementById("time").innerHTML = `${days} Day ${hours} Hr ${minutes} mins to go`
// }
// else if (days<=1 && hours>1 && minutes<=1) {
//     document.getElementById("time").innerHTML = `${days} Day ${hours} Hrs ${minutes} min to go`
// }
// else if (days>1 && hours<=1 && minutes<=1) {
//     document.getElementById("time").innerHTML = `${days} Days ${hours} Hr ${minutes} min to go`
// } else {
//     document.getElementById("time").innerHTML = `${days} Day ${hours} Hr ${minutes} min to go`
// }
}, 1000);