const curDate=document.getElementById("date");
let weathercon=document.getElementById("weathercon");
let currentTime= new Date();
const getCurrentDay=()=>{
  let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  let day=days[currentTime.getDay()];
  return day;
};
const getCurrentTime=()=>{
  let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let month = months[currentTime.getMonth()];
  let date= currentTime.getDate();
  let hrs =currentTime.getHours();
  let mins=currentTime.getMinutes();
  let periods = "AM";
  if(hrs >11){
    periods="PM";
    if(hrs >12){
    hrs -=12;
    }
  }
  if(mins <10){
    mins ="0"+mins;
  }
  return `${month} ${date} ${hrs}:${mins} ${periods}`;
};
curDate.innerHTML =getCurrentDay() + " | " + getCurrentTime();

const form=document.querySelector('#searchform');
form.addEventListener('submit',async function(e){
  e.preventDefault();
  const searchText =form.elements.query.value;
  const apikey="f949c173ade7709b6df2e41328d27d53"
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=${apikey}`);
  realInfo(res.data);
  form.elements.query.value="";
  iconChange(res.data.weather[0].main);
});
const temp=document.querySelector(".temp")
const tempm=document.querySelector(".tempmin_max")
const loc=document.querySelector(".location")
const icon=document.querySelector("#weathercon")

const realInfo=(data)=>{
  temp.innerHTML= data.main.temp + "<sup>o</sup>C";
  tempm.innerHTML="Min " + data.main.temp_min + "<sup>o</sup>C" + "|"+" Max " + data.main.temp_max + "<sup>o</sup>C";
  loc.innerHTML= data.name +","+ data.sys.country;
  
}
const iconChange=(tempStatus)=>{
  if(tempStatus == "Sunny"){
    icon.innerHTML=" <i class='fas fa-sun' style='color: #eccc68;'></i>"
  }else if (tempStatus==" Rainy"){
    icon.innerHTML="<i class='fas fa-cloud-showers-heavy' style='color: grey;'></i>"
  }else {
    icon.innerHTML="<i class='fas fa-smog' style='color: grey;'></i>"
  }
  
}