const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const image = document.getElementById('profile_picture')

const fullname = document.getElementById("fullname");
const street = document.getElementById("street")
const city = document.getElementById("city")
const state = document.getElementById("state")
const postCode = document.getElementById("postcode")


const phone = document.getElementById("phone")
const cell = document.getElementById("cell")
const email = document.getElementById("email")

const dateOfBirth = document.getElementById("date_of_birth")


document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  btn.addEventListener('click', getRandomUser)


  function getRandomUser() {
    return fetch("https://randomuser.me/api/")
      .then(resp => resp.json())
      .then(data => {
        const name = data.results[0].name

        fullname.innerText = name.title + " " + name.first + " " + name.last

        email.innerText = data.results[0].email
        street.innerText = data.results[0].location.street
        city.innerText = data.results[0].location.city
        state.innerText = data.results[0].location.state

        postCode.innerText = data.results[0].location.postcode
        phone.innerText = data.results[0].phone
        cell.innerText = data.results[0].cell
        dateOfBirth.innerText = data.results[0].dob.date
        image.src = data.results[0].picture.thumbnail

      })
  }




  
});
