$(function () {
  $("#tabs").tabs();

  let id = 1;

  function inc() {
    id++;
  }

  function remove() {
    console.log("remove");
  }

  const add = () => {
    let skill = $("#skill").val();
    let experience = $("#experience").val();

    let col_id = `col_${id}`;
    console.log(skill, experience);

    let col = `<div class="col_2 center" id="${col_id}">
                <h5>${skill}</h5>
                <h5 class="js">${experience}</h5>
                <button type="button" id="remove" onclick="test(${col_id})">Remove</button>
              </div>`;
    inc();

    $("#x").append(col);
  };

  $("#addSkill").on("click", () => add());
});
