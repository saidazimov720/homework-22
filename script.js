function ulDownOne() {
   document.getElementById("box-ul").style.display = "block";
}
function ulDownTwo() {
   document.getElementById("box-ul-two").style.display = "block";
}
document.getElementById('add-form-btn').addEventListener('click', function() {
   const newForm = document.createElement('form');
   newForm.id = 'dynamicForm';
   newForm.action = '';
   newForm.innerHTML = `
       <input onclick="ulDownOne()" class="main__box-input" placeholder="Form title" value="Untitled form" type="text">
       <ul class="main__box-ul" id="box-ul">
           <li class="main__box-ul-li"><i class="fa-solid fa-bold"></i></li>
           <li class="main__box-ul-li"><i class="fa-solid fa-italic"></i></li>
           <li class="main__box-ul-li"><i class="fa-solid fa-underline"></i></li>
           <li class="main__box-ul-li"><i class="fa-solid fa-link"></i></li>
           <li class="main__box-ul-li"><i class="fa-solid fa-text-slash"></i></li>
       </ul>
       <i id="image" class="fa-regular fa-image"></i>
       <div class="custom-select">
           <div class="select-selected">Select an option</div>
           <div class="select-items">
               <div><i class="fa-solid fa-align-center"></i>Text(line)</div>
               <div><i class="fa-solid fa-align-justify"></i>text(full)</div>
               <hr>
               <div><i class="fa-solid fa-circle-check"></i>One of the</div>
               <div><i class="fa-regular fa-square-check"></i>A few from list</div>
               <hr>
               <div><i class="fa-solid fa-cloud-arrow-up"></i>File Uploads</div>
               <hr>
               <div><i class="fa-solid fa-grip"></i> Grid(multiple)</div>
               <div><i class="fa-solid fa-grip-vertical"></i>Checkbox Grid</div>
               <hr>
               <div><i class="fa-regular fa-calendar-check"></i>Date</div>
               <div><i class="fa-regular fa-clock"></i> It is time</div>
           </div>
       </div>
       <div class="check">
           <input type="checkbox">
           <input type="text" placeholder="variant"><br><br>
           <div class="res2"></div>
           <input id="addOptionCheckbox" type="checkbox">
           <span>Add option or <span class="blue">add "Other" option</span></span><br>
       </div>
       <hr>
       <div class="buttons">
           <i id="copy" class="fa-regular fa-copy"></i>
           <i id="copy" class="fa-solid fa-bucket"></i>
           <span class="mandat">Mandatory Question <input class="switch" type="checkbox" checked="true"></span>
           <i id="little_menu" class="fa-solid fa-ellipsis-vertical"></i>
       </div>
   `;

   document.getElementById('form-container').appendChild(newForm);
});
