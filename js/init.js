document.addEventListener("DOMContentLoaded", function() {
  var options = {
    duration: 500
  };

  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

function handleFormSubmit() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const zip = document.getElementById("zip");
  const yes_emp = document.getElementById("yes_emp");
  const no_emp = document.getElementById("no_emp");
  const years_exp = document.getElementById("years_exp");

  if (name.value === "" || email.value === "" || phone.value === "") {
    window.alert("Form Fields are Missing");
  } else if (name.checkValidity() === false) {
    window.alert("Error in Name");
    name.focus();
  } else if (email.checkValidity() === false) {
    window.alert("Error in Email");
    email.focus();
  } else if (phone.checkValidity() === false) {
    window.alert("Error in Phone Number");
    phone.focus();
  } else {
    const API = {
      endpointUrl: "https://api.airtable.com",
      apiKey: "keyQd5qMpPaNnLoab"
    };

    setTimeout(function() {
      window.location = "./thankyou.html";
    });
  }
}
