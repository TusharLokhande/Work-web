$(document).ready(
  $("#btn").on("click", () => {
    let firstname = $("#firstname").val();
    let lastname = $("#lastname").val();
    let pass = $("#pass").val();
    let confirmpass = $("#confirmpass").val();
    let email = $("#email").val();
    let phone = $("#phone").val();

    let male = $("r").val();
    let female = $("r1").val();

    if (firstname == "" || lastname == "") {
      alert("Enter FirstName and LastName");
      return;
    }

    if (pass == "") {
      alert("Please enter password");
    }

    if (pass != confirmpass) {
      alert("Password doesnot match");
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Please enter correct email");
      return;
    }

    let phoneno = /^\d{10}$/;
    if (!phoneno.test(phone)) {
      alert("Enter proper phone no.");
    }

    if (male.checked != true && female.checked != true) {
      alert("please select gender");
    }
  })
);
