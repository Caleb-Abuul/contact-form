let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
const complete = document.getElementById("complete");

let fname = id("fname"),
  lname = id("lname"),
  email = id("email"),
  enquiry = id("enquiry"),
  support = id("support"),
  message = id("message"),
  consent = id("consent"),
  form = id("form");

let errorMsg = classes("error");
console.log(errorMsg);
let errors = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateErrors();
  if (errors.includes(1)) {
    complete.style.display = "none";
    return;
  } else {
    complete.style.display = "block";
    resetInput(fname);
    resetInput(lname);
    resetInput(message);
    resetInput(email);
    resetBtn(enquiry);
    resetBtn(support);
    resetBtn(consent);
  }
});

const resetInput = (id) => {
  id.value = "";
};
const resetBtn = (id) => {
  id.checked = false;
};

function validateErrors() {
  errors = [];
  console.log(`before: ${errors}`);
  engine(fname, 0, errorMsg);
  engine(lname, 1, errorMsg);
  engine(email, 2, errorMsg);
  engine2(enquiry, support, 3, errorMsg);
  engine(message, 4, errorMsg);
  validateConsent(consent, 5, errorMsg);
  console.log(`after: ${errors}`);
}

let engine = (id, serial, error) => {
  if (id.value.trim() === "") {
    error[serial].style.display = "block";
    id.style.border = "1px solid var(--primary-red)";
    errors.push(1);
  } else {
    error[serial].style.display = "none";
    id.style.border = "1px solid var(--neutral-grey-500)";
    errors.push(0);
  }
};

let engine2 = (id1, id2, serial, error) => {
  if (id1.checked || id2.checked) {
    error[serial].style.display = "none";
    errors.push(0);
  } else {
    error[serial].style.display = "block";
    errors.push(1);
  }
};
let validateConsent = (id, serial, error) => {
  if (id.checked) {
    error[serial].style.display = "none";
    errors.push(0);
  } else {
    error[serial].style.display = "block";
    errors.push(1);
  }
};
