function greeting(name) {
    const date = new Date();
    var timeOfDay = "morning";
    const time = date.getHours();
    if (time >= 4 && time < 12){
        timeOfDay = "morning";
    }else if (time >= 12 && time < 17){
        timeOfDay = "afternoon";
    }else if (time >= 17 && time < 20){
        timeOfDay = "evening";
    }else if (time < 4 || time >=20){
        timeOfDay = "night";
    }
    return ("Good " + timeOfDay + ", " + name + "!");
}

console.log(greeting("Angel"));
greeting("Angel");