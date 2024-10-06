const birthDate = new Date(1998, 10, 14, 3, 6).getTime();
const currentDate = new Date().getTime();
const age = Math.floor((currentDate - birthDate)/(1000*60*60*24*365));
document.getElementById("bDate").innerHTML = `${age} YO Computer Scientist and Mathematician.`