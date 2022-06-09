$(document).ready(() => {
  //GET
  $("#btn").click(() => {
    $.ajax({
      url: "test.json",
      type: "Get",
      contentType: "application/json",
      data: JSON.stringify(auth),
      success: function (result, status) {
        alert(result.name);
      },
    });
  });

  let auth = {
    name: "morpheus",
    job: "leader",
  };

  //POST
  $("#btn1").click(() => {
    $.ajax({
      url: "https://reqres.in/api/users",
      type: "Post",
      contentType: "application/json",
      data: JSON.stringify(auth),
      success: function (result, status) {
        alert(result.name);
      },
    });
  });

  //Country
  x;
});

function display() {
  $.ajax({
    url: "country.json",
    type: "Get",
    contentType: "application/json",
    success: function (result, status) {
      result.map(({ name }, i) => {
        $("#select").append(`<option id=${i}>${name}</option>`);
      });
    },
  });
}

function dropDown() {
  $.ajax({
    url: "test.json",
    type: "Get",
    contentType: "application/json",
    success: (data, status) => {
      console.log(data);
    },
  });
}
