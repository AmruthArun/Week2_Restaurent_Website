$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        variableWidth: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      }
    }

  ]
});


// $().ready(function () {

//   $("#contactForm").validate({
//     rules: {
//       firstname:{
//         required: true,
//         minlength:4
//       },
//       lastname:{
//         required: true,
//         minlength:4
//       },

//       emailInfo:{
//         required: true,
//         minlength:10
//         // type:email
//       },
//       phoneNumber:{
//         required: true,

//       },
//       message:{
//         required: true,
//         rangelength:[10,250],
//       },
//       },
//     message:{
//       firstname:{
//         required:"Enter the Name",
//         minlength:"Enter atleast 4 characters"
//       },
//       lastname:{
//         required:"Enter the Name",
//         minlength:"Enter atleast 4 characters"
//       },
//       emailInfo:{
//         required:"Enter the Email Address",
//         email:"Enter a valid email address",
//       },
//       phoneNumber:{
//         required:"Enter your phone number",
//       },
//       message:{
//         required:"Enter the Message",
//         rangelength:"Enter a message between 10 and 250 characters",

//     },
//   }

//   });
// }); 


function validateForm() {
  var firstName = document.forms["contactForm"]["firstName"].value;
  var lastName = document.forms["contactForm"]["lastName"].value;
  var email = document.forms["contactForm"]["email"].value;
  var phoneNumber = document.forms["contactForm"]["phoneNumber"].value;
  var message = document.forms["contactForm"]["message"].value;

  clearErrorMessages();
  var hasErrors = false;

  if (firstName == "") {
    displayErrorMessage("firstName", "First name must be filled out");
    hasErrors = true;
  }
  else if (firstName.length < 4) {
    displayErrorMessage("firstName", "First name must be atleast 4 charecters");
    hasErrors = true;
  }

  if (lastName == "") {
    displayErrorMessage("lastName", "Last name must be filled out");
    hasErrors = true;
  }
  else if (lastName.length < 4) {
    displayErrorMessage("lastName", "Last name must be atleast 4 charecters");
    hasErrors = true;
  }

  if (email == "") {
    displayErrorMessage("email", "Email must be filled out");
    hasErrors = true;
  } else if (!isValidEmail(email)) {
    displayErrorMessage("email", "Invalid email address");
    hasErrors = true;
  }


  if (phoneNumber == "") {
    displayErrorMessage("phoneNumber", "Phone number must be filled out");
    hasErrors = true;
  } else if (!isValidPhoneNumber(phoneNumber)) {
    displayErrorMessage("phoneNumber", "Invalid phone number");
    hasErrors = true;
  }


  if (message == "") {
    displayErrorMessage("message", "Message must be filled out");
    hasErrors = true;
  }
  else if (message.length < 10) {
    displayErrorMessage("message", "Message must be atleast 10 charecters ");
    hasErrors = true;
  }


  if (hasErrors) {
    return false;
  }
}

function isValidEmail(email) {
  // Regular expression to validate email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhoneNumber(phoneNumber) {
  // Regular expression to validate phone number format
  var phonePattern = /^\d{10}$/;
  return phonePattern.test(phoneNumber);
}

function displayErrorMessage(fieldId, errorMessage) {
  var field = document.getElementById(fieldId);
  var errorContainer = document.getElementById(fieldId + "-error");
  errorContainer.innerHTML = errorMessage;
  field.classList.add("error");
}

function clearErrorMessages() {
  var errorContainers = document.getElementsByClassName("error-message");
  for (var i = 0; i < errorContainers.length; i++) {
    errorContainers[i].innerHTML = "";
  }

  var fields = document.getElementsByTagName("input");
  for (var i = 0; i < fields.length; i++) {
    fields[i].classList.remove("error");
  }
}


function orderNowClick() {
  alert("\n\n*****Order Now Pressed!***** \n\n Thank you for ordering for favourite item");
}

// function bigImg(x) {
//   x.style.height = "64px";
//   x.style.width = "64px";
// }

// function normalImg(x) {
//   x.style.height = "32px";
//   x.style.width = "32px";
// }

function mouseOver() {
  document.getElementById("tasty-food").style.color = "red";
}

function mouseOut() {
  document.getElementById("tasty-food").style.color = "black";
}

$("#contactForm").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbyAfrpA58jD5zF5qIqRCOH9EnpN_3UiDBQQJKTjSZYTzqxLnPicEKGRBR_fFm7_Fg_B/exec",
      data:$("#contactForm").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})