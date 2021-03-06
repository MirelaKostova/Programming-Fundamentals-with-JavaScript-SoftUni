function passwordReset(input) {
  let password = input.shift();
  //   console.log(password);

  let actions = {
    Cut: cut,
    Substitute: substitute,
  };

  while (input[0] !== "Done") {
    let [command, param1, param2] = input.shift().split(" ");

    if (command === "TakeOdd") {
      let rawPass = "";
      for (let i = 0; i < password.length; i++) {
        if (i % 2 !== 0) {
          rawPass += password[i];
        }
      }
      password = rawPass;
      console.log(password);
    } else {
      let action = actions[command];
      action(param1, param2);
    }
    // console.log(command, param1, param2);
  }

  // Cut
  function cut(index, length) {
    let endIndex = Number(index) + Number(length);
    // let strToRemove = rawPass.substring(index, endIndex);

    let first = password.substring(0, index);
    let last = password.substring(endIndex);

    password = first + last;
    console.log(password);
  }

  // Substitute
  function substitute(substring, substitute) {
    if (password.includes(substring)) {
      //   console.log("substring--->", substring);
      //   console.log("substitute --->", substitute);
      while (password.includes(substring)) {
        password = password.replace(substring, substitute);
        //   let pattern = new RegExp(substring, "g");
        //   password = password.replace(pattern, substitute);
      }
      console.log(password);
    } else {
      console.log("Nothing to replace!");
    }
  }
  console.log(`Your password is: ${password}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
