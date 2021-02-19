function checkBoxLimit() {
  let checkBoxGroup = document.forms['comment']['opinion[]'];
  let limit = 1
  for (i=0; i < checkBoxGroup.length; i++) {
    checkBoxGroup[i].onclick = function() {
      let checkedcount = 0;
      for (i=0; i< checkBoxGroup.length; i++) {
        checkedcount+= (checkBoxGroup[i].checked)
      }
      if(checkedcount > limit) {
        console.log("You can select maximum of " + limit + " checkboxes.");
				alert("You can select maximum of " + limit + " checkboxes.");						
				this.checked = false;
      }
    }
  }
}

// checkBoxLimit()

function sConsole(e) {
  e.preventDefault();
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let comment = document.getElementById('comment');
  let checkbox = document.getElementById('checkbox');
  console.log(`Name: ${name.value} Email: ${email.value}  Comment: ${comment.value} Subscribed: ${checkbox.value}`)
}