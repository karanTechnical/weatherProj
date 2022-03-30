const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_staus = document.getElementById('temp_staus');


const datahide = document.querySelector('.middle_layer');


 const getInfo = async(event)=>{
     event.preventDefault();
     let cityVal = cityName.value;

   if(cityVal === ""){
    city_name.innerText = `please write the name before search`;
    datahide.classList.add("data_hide");

   }else{
       try{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=390b54cc9af212dc0597aeb0c315a478`;
        const response = await fetch(url);
        const data = await response.json();
       const arrData = [data];

       city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
       temp_real_val.innerText = arrData[0].main.temp;

       const tempMood = arrData[0].weather[0].main;

       if(tempMood =="sunny"){
        temp_staus.innerHTML = "<i class='fa-solid fa-sun' style='color:#eccc68'></i>"; 
    }
   else if(tempMood =="clouds"){
        temp_staus.innerHTML = "<i class='fa-solid fa-cloud' style='color:#dfe4ea'></i>"; 
    }
    else if(tempMood =="rainy"){
        temp_staus.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color:#a4b0be'></i>"; 
    }
    else{
        temp_staus.innerHTML = "<i class='fa-solid fa-sun' style='color:#eccc68'></i>"; 
    }

    datahide.classList.remove("data_hide");


       }catch{
        city_name.innerText = `please enter the cityName name properly`;
        datahide.classList.add("data_hide");
       }
  
   }
     
 }

submitBtn.addEventListener('click',getInfo);