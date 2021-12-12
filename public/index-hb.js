const projxyz = $(".projxyz");
// const [class name] = $(".[class name]")

// each project that requires a password, has to have this block - one block for each project
projxyz.click(() => {
  const pw = window.prompt("Please enter password");
  if (pw == "123") {
    window.location.replace("/projects/xyz"); // PAY ATTENTION : change to relevant href here
  } else {
    window.alert("Sorry, this is the wrong password");
  }
});
