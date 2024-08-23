function ulDownOne() {
   document.getElementById("box-ul").style.display = "block";
}

function ulDownTwo() {
   document.getElementById("box-ul-two").style.display = "block";
}

document.getElementById('add-form-btn').addEventListener('click', function () {
   const formContainer = document.getElementById('form-container');
   const formElement = document.createElement('div');
   formElement.className = 'form-element';
   
   const select = document.createElement('select');
   const option1 = document.createElement('option');
   option1.textContent = 'Option 1';
   select.appendChild(option1);
   const option2 = document.createElement('option');
   option2.textContent = 'Option 2';
   select.appendChild(option2);
   formElement.appendChild(select);

   const inputText = document.createElement('input');
   inputText.type = 'text';
   inputText.placeholder = 'Enter text...';
   formElement.appendChild(inputText);

   const checkbox = document.createElement('input');
   checkbox.type = 'checkbox';
   formElement.appendChild(checkbox);

   const label = document.createElement('label');
   label.textContent = 'Checkbox';
   formElement.appendChild(label);

   formContainer.appendChild(formElement);
});