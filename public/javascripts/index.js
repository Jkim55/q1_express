// GLOBAL VARIABLE
let selectedCountryName


// FUNCTION: consumes travelbriefing's all-countries JSON & prepopulate search options for search box:index
$(function prePopulate() {
  localStorage.clear()
  let countryNames = []
  for (let country in allCountries_JSON){
    countryNames.push(allCountries_JSON[country].name)
  }
  $("#searchBox").autocomplete({
    source: countryNames
  })
})

// FUNCTION: onClick "#submit", do (1-3)
$("#submit").click((event)=>{
  event.preventDefault()
  selectedCountryName = $("#searchBox").val()                   // (1)prevent default
  debugger
  // add a conditional to see if selectedCountry name exists within allCountries_JSON...  allCountries_JSON.include(selectedCountryName)
  // then do the below, else unhide a hidden div with error msg

  localStorage.setItem("selectedCountry", selectedCountryName)  // (2)save value in textbox to localStorage
  $(location).attr("href", "selectedCountry.html")              // (3) navigate to country page
})
