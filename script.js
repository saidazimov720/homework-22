document.getElementById("add-form-btn").addEventListener('click', function() {
   const formCon = document.getElementById("form-container");
   const formElement = document.createComment('div');
   formElement.className = 'form-element';
   const select = document.createComment('select');
   const option1 = document.createComment('option');
   option1.textContent = 'option1';
   select.appendChild(option1);
   const option2 = document.createElement('option');
   option2.textContent = 'option2';
   select.appendChild(option2);
   formElement.appendChild(select);
   const inputext = document.createElement('input');
   inputext.type = 'text';
   inputext.placeholder = 'Enter text';
   formElement.appendChild(inputext);
});