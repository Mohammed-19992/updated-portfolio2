var thisHour = $("#currentTime");
var nowTime = moment().hours();

setInterval(() => {
    var grabDate = moment();
    var thisDate = grabDate.format("hh:mm:ss A");
    
    thisHour.text(thisDate);
}, 100);