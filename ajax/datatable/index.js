$(document).ready(function () {
  $("#select_all").on("click", function () {
    //Checkbox
    if (this.checked) {
      $(".checkbox").each(function () {
        this.checked = true;
      });
    } else {
      $(".checkbox").each(function () {
        this.checked = false;
      });
    }
  });

  //delete
  $("#delete").click(() => {
    $(".checkbox:checked").parents("tr").hide();
  });

  //add
  $("#submit").click(() => {
    $("#d").empty();
    let s;
    console.log("click");

    s = $("input:checkbox:checked").parents("tr").text();
    alert(s);
  });
});

function fetchData() {
  $.ajax({
    url: "test.json",
    type: "Get",
    contentType: "application/json",

    success: (data, status) => {
      $.each(data, (i) => {
        let row = `<tr id="tab_${i}">
        <td><input type="checkbox"  name="" class="checkbox" /></td>
            <td >${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].age}</td>
            <td>${data[i].nation}</td>
          </tr>`;
        $("#body").append(row);
      });

      $("#example").DataTable();
    },
  });
}
