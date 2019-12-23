document.addEventListener("DOMContentLoaded", function() {
  var options = {
    selectMonths: true,
    yearRange: 1
  };

  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems, options);
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".timepicker");
  var instances = M.Timepicker.init(elems);
});

if (window.sessionStorage) {
  var id = JSON.parse(sessionStorage.getItem("id"));
}

function handleScheduleSubmit() {
  var dateLap = document.getElementById("dateLap");
  var timeLap = document.getElementById("timeLap");

  var dateMob = document.getElementById("dateMob");
  var timeMob = document.getElementById("Mob");

  if (dateLap.value === "") {
    var data = {
      fields: {
        Schedule_date: dateMob.value,
        Schedule_time: timeMob.value
      }
    };

    axios
      .patch(
        `https://api.airtable.com/v0/appGsy7136IEvKxCK/Table%201/${id}`,
        data,
        {
          headers: {
            Authorization: "Bearer " + "keyQd5qMpPaNnLoab",
            "Content-Type": "application/json"
          }
        }
      )
      .then(() => window.location.replace("./thankyou.html"));
  } else {
    var data = {
      fields: {
        Schedule_date: dateLap.value,
        Schedule_time: timeLap.value
      }
    };

    axios
      .patch(
        `https://api.airtable.com/v0/appGsy7136IEvKxCK/Table%201/${id}`,
        data,
        {
          headers: {
            Authorization: "Bearer " + "keyQd5qMpPaNnLoab",
            "Content-Type": "application/json"
          }
        }
      )
      .then(() => window.location.replace("./thankyou.html"));
  }
}
