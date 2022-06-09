$(document).ready(() => {
  $("#f").on("dblclick", () => $("#f").hide());
  $("#second-title").on("dblclick", () => $("#f").show());

  $("#btn").on({
    click: () => {
      $("#div1").fadeToggle();
      $("#div2").slideToggle();
    },
  });

  $("#btn1").click(function () {
    $("#div1").css({ position: "absolute" }).animate({ right: "450px" }, 5000);
  });

  $("#btn2").click(() => {
    $("#div1").stop();
    $(".op").empty();
  });

  $("#down").click(function () {
    $("#div1").css({ position: "absolute" }).animate({ bottom: "50px" }, 5000);
  });

  $("#date").mouseleave(function () {
    let val = $("#date").val();
    $("#text").val(val);
    console.log(val);
  });

  $("#remove").on("click", () => {
    $(`.op${i}`).remove();
    dec();
  });

  $("#alert").on("click", () => alert("Hello World"));

  // $("#text").on("change", () => {});

  $("#text").change(() => {
    let val = $("#text").val();
    console.log(val * 1);
    if (val < 45) {
      $("#text").css({ background: "red" });
    } else {
      $("#text").css({ background: "green" });
    }
  });
  $("#text").trigger("change");

  let i = 1;

  const op = () => {
    i++;
  };

  $("#add").on("click", () => {
    let name = $("#name").val();
    let a = $("#maths").val() * 1;
    let b = $("#chem").val() * 1;
    let c = $("#phy").val() * 1;

    let total = a + b + c;

    let cl = total < 30 ? "red" : "green";

    let row = `
    <div id="${i}" class="row " style="display:flex">
            <div class="col " id="col_name">${name}</div>
            <div class="col " id="col_a">${a}</div>
            <div class="col " id="col_b">${b}</div>
            <div class="col " id="col_c">${c}</div>
            <div class="col ${cl}"  id="col_tot">${total}</div>
          </div>
    `;

    op();

    $(".table").append(row);
  });
});
