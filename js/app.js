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