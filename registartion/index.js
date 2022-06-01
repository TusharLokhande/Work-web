function validation() {
  let firstname = document.getElementById("firstname").value;
  console.log(firstname);

  let lastname = document.getElementById("lastname").value;
  let pass = document.getElementById("pass").value;
  let confirmpass = document.getElementById("confirmpass").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  var e = document.getElementById("select");
  let option = e.options[e.selectedIndex].value;
  let male = document.getElementById("r");
  let female = document.getElementById("r1");

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

  if (option == "0") {
    alert("Please select security question!");
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
}
