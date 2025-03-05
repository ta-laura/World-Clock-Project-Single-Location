function updateTime() {
    // Sydney
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
      let sydneyDateElement = sydneyElement.querySelector(".date");
      let sydneyTimeElement = sydneyElement.querySelector(".time");
      let sydneyTime = moment().tz("Australia/Sydney");
  
      sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
      sydneyTimeElement.innerHTML = sydneyTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    // Ho Chi Minh
    let hoChiMinhElement = document.querySelector("#ho-chi-minh");
    if (hoChiMinhElement) {
      let hoChiMinhDateElement = hoChiMinhElement.querySelector(".date");
      let hoChiMinhTimeElement = hoChiMinhElement.querySelector(".time");
      let hoChiMinhTime = moment().tz("Asia/Ho_Chi_Minh");
  
      hoChiMinhDateElement.innerHTML = hoChiMinhTime.format("MMMM	Do YYYY");
      hoChiMinhTimeElement.innerHTML = hoChiMinhTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
    // Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
      let losAngelesDateElement = losAngelesElement.querySelector(".date");
      let losAngelesTimeElement = losAngelesElement.querySelector(".time");
      let losAngelesTime = moment().tz("America/Los_Angeles");
  
      losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
      losAngelesTimeElement.innerHTML = losAngelesTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }

  updateTime();
  setInterval(updateTime, 1000);
  
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);