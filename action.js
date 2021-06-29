var text_input = document.getElementById('text-field').value;

function addRow () {
    if(text_input == ""){alert("Please type something!!");}
    else{
        document.querySelector('#content').insertAdjacentHTML(
            'afterbegin',
            `
            <div class="list-item" onclick="onListItemClick()">
              <p>${text_input}</p>
              <input id="remove-button" type="button" value="Remove" onclick="removeRow(this)">
            </div>
            `   
          )
          document.querySelector('#text-field').value = "";
          text_input = "";
    }
  }
  
  function removeRow (input) {
    input.parentNode.remove()
  }

  function saveText(){
    text_input = document.getElementById('text-field').value;
    text_input = text_input.trim();
  }

  function onListItemClick(){
      var list_item = document.querySelector('.list-item');
      list_item.classList.toggle('list-item-onclick');
  }