const selectSelected = document.querySelector('.select-selected');
const selectItems = document.querySelector('.select-items');

selectSelected.addEventListener('click', () => {
    selectItems.style.display = selectItems.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (e) {
    if (!selectSelected.contains(e.target)) {
        selectItems.style.display = 'none';
    }
});

const options = document.querySelectorAll('.select-items div');
options.forEach(option => {
    option.addEventListener('click', () => {
        selectSelected.textContent = option.textContent;
        selectItems.style.display = 'none';
    });
});
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
}


document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('box-ul');
    const input = document.querySelector('.main__box-input');
    if (!dropdown.contains(event.target) && !input.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});