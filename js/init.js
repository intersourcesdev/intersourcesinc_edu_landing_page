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
  var is_emp = false;
  const years_exp = document.getElementById("years_exp");

  if (name.value.trim().indexOf(" ") === -1) {
    window.alert("Please Enter First & Last Name");
    name.focus();
  } else if (name.value === "" || email.value === "" || phone.value === "") {
    window.alert("Form Fields are Missing");
  } else if (name.checkValidity() === false) {
    window.alert("Error in Name");
    name.focus();
  } else if (email.checkValidity() === false) {
    window.alert("Error in Email");
    email.focus();
  } else if (phone.checkValidity() === false) {
    window.alert("Please Check Number Format (1234567890)");
    phone.focus();
  } else {
    if (yes_emp.checked === true) {
      is_emp = true;
    } else is_emp = false;

    const data = {
      records: [
        {
          fields: {
            Name: name.value,
            Email: email.value,
            Zip: parseInt(zip.value),
            Phone: phone.value,
            is_emp: is_emp,
            years_experience: parseInt(years_exp.value)
          }
        }
      ]
    };

    axios
      .post("https://api.airtable.com/v0/appGsy7136IEvKxCK/Table%201", data, {
        headers: {
          Authorization: "Bearer " + "keyQd5qMpPaNnLoab",
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        var str_id = JSON.stringify(res.data.records[0].id);
        if (window.sessionStorage) {
          sessionStorage.setItem("id", str_id);
        }
        return window.location.replace("./scheduling.html");
      });
  }
}
