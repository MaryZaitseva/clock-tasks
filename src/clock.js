function clock($){

function getClass(hours){
    var className;
    if(hours >= 12 && hours < 16){
        className = "noon";
    };
    if(hours >= 16 && hours <= 19){
        className = "sunset";
    };
    if(hours > 19 && hours <= 21){
        className = "evening";
    };
    if(hours > 21 || hours <= 6){
        className = "night";
    };
    if(hours > 6 && hours <= 10){
        className = "sunrise";
    };
    if(hours > 10 && hours < 12){
        className = "morning";
    };
    return className;
};

function displayTime(){
    var now = new Date();
    $("#clock").html(now.toLocaleTimeString());
    $("body").addClass(getClass(now.getHours()));
    setTimeout(displayTime, 1000);
}

window.onload = displayTime();
};

export {clock};
