
function showTime () {
    var today = new Date();
    var h = today.getHours(); // 0 - 23
    var m = today.getMinutes(); // 0 - 59
    var s = today.getSeconds(); // 0 - 59
    var weekday = today.getDay(); // 0 - 6
    var day = today.getDate(); // day 1 - 31
    var month = today.getMonth(); // 1 - 12
    var year = today.getFullYear(); // year
    console.log(day)
    var clock = document.getElementById("MyClockDisplay");
    var myWeekday = document.getElementById("myWeekday");
    var session = "AM";

    switch(weekday) {
        case 0 : 
            weekday = "Sunday"
            break;
        case 1 : 
            weekday = "Monday"
            break;
        case 2 : 
            weekday = "Tuesday"
            break;
        case 3 : 
            weekday = "Wednesday"
            break;
        case 4 : 
            weekday = "Thursday"
            break;
        case 5 : 
            weekday = "Friday"
            break;
        case 6 : 
            weekday = "Saturday"
            break;
    }

    if(h == 0){
        h = 12;
    }

    if(h > 11){
        session = "PM"
    }
    if(h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    month = (month < 10) ? "0" + month : month;

    var time = h + ":" + m + ":" + s + " " + session;

    clock.innerHTML = time;
    clock.textContent = time;
    myWeekday.innerHTML = weekday + "," + day;
    myWeekday.textContent = weekday + "," + " " + day + "/" + month + "/" + year;
    
    setTimeout(showTime, 1000);
}

showTime();