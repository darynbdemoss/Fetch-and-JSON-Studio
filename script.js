window.addEventListener("load", function () {
  let container = this.document.getElementById("container");
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    console.log(response.json);
    // Access the JSON in the response
    response.json().then(function (json) {
      let info = "";
      for (let i = 0; i < json.length; i++) {
        info += `
        <div class="astronaut">
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li>Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills}</li>
                </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
        </div>`;
      }
      container.innerHTML = info;
    });
  });
});
