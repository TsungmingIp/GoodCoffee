
// read more buttons for Brew methods

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myFunction3() {
    var dots3 = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots3.style.display === "none") {
      dots3.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots3.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myFunction4() {
    var dots4 = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
  
    if (dots4.style.display === "none") {
      dots4.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots4.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

// show more button for Coffee Foam Art

  const showMoreBtn = document.querySelector('.showMoreButton');
const imageContainer = document.querySelector('.imageContainer');

showMoreBtn.addEventListener('click',(e)=>{

    imageContainer.classList.toggle('showMoreImages');
    if(showMoreBtn.innerText === 'Show Less') {
        showMoreBtn.innerText = 'Show More';
    }else{
        showMoreBtn.innerText = 'Show Less';
    }
})


//fetch data
  fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      //grabs the data within the api website
      response.json().then(function(data) {
        console.log(data);
        console.log(data.temperature.data[6]);
        let temp = data.temperature.data[6].value;  
        console.log(temp);
      
        //places the information of temperature and degree into the html document
        //add the string °C.
        let elem = document.getElementById('apiContainer')
        console.log(elem);
        elem.innerHTML = temp + "°C";


        //places the weather logo data into the html document
        console.log(data);
        let weatherLogo = data.icon[0];
        console.log(weatherLogo);
        const image = document.createElement('img')
        image.src=`https://www.hko.gov.hk/images/HKOWxIconOutline/pic${weatherLogo}.png`;
        document.querySelector('#apiContainer').appendChild(image);
        //if else statements to generate depending on temperature
        if (temp < 20) {
          //places p tag
        
          var note = document.getElementById("apiContainer2");
          var gesture = document.createTextNode("You deserve a hot French Press coffee!");

          note.appendChild(gesture);

        }
        else 
        if ((temp >= 20) && (temp <=24)) {

          //places ptag
          var note = document.getElementById("apiContainer2");
          var gesture2 = document.createTextNode("Get yourself a warm Latte!");

          note.appendChild(gesture2);
          
          
        }
        else
        if ((temp >= 25) && (temp <=28)) {
          var note = document.getElementById("apiContainer2");
          var gesture3 = document.createTextNode("Cool off with an iced Americano!");

          note.appendChild(gesture3);


        } else {

          //have a cold brew
          var note = document.getElementById("apiContainer2");
          var gesture4 = document.createTextNode("It's hot so chill with an ice-Brew coffee!");

          note.appendChild(gesture4);
        }


       
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });