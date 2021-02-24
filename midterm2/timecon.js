function digitalClock(time){
    let sec;
    let mins;
    let hour;
    sec = time%60;// to second
    time = Math.floor(time/60);
    mins = time%60;// to minis
    time = Math.floor(time/60);
    //check NextDay
    if(time >= 24){
        hour = time%24;
    }
    else{
        hour = time;
    }
    //add zero to front
    if(hour<10){
        hour = "0"+hour;
    }
    if(mins<10){
        mins = "0"+mins;
    }
    if(sec<10){
        sec = "0"+sec;
    }

    return hour+":"+mins+":"+sec;//output
}

console.log(digitalClock(5025));//=== 01.23.45s
console.log(digitalClock(61201));//=== 17.00.01s
console.log(digitalClock(87000));//=== 00.10.00s nextDay