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
document.getElementById('addOptionCheckbox').addEventListener('change', function() {
    if (this.checked) {
        const newOption = document.createElement('div');
        newOption.innerHTML = `
            <input type="checkbox">
            <input type="text" placeholder="variant"><br><br>
        `;
        document.querySelector('.res2').appendChild(newOption);

        
        const form = document.getElementById('dynamicForm');
        form.style.height = `${form.scrollHeight + 30}px`;

        this.checked = false;
    }});

document.querySelectorAll('.main__box-ul li').forEach(function(li) {
    li.addEventListener('click', function() {
        const input = document.querySelector('.main__box-input');

        if (this.querySelector('.fa-bold')) {
            toggleTextStyle(input, 'fontWeight', 'bold', 'normal');
        } else if (this.querySelector('.fa-italic')) {
            toggleTextStyle(input, 'fontStyle', 'italic', 'normal');
        } else if (this.querySelector('.fa-underline')) {
            toggleTextStyle(input, 'textDecoration', 'underline', 'none');
        } else if (this.querySelector('.fa-text-slash')) {
            toggleTextStyle(input, 'textDecoration', 'line-through', 'none');
        }
    });
});

function toggleTextStyle(element, style, value1, value2) {
    if (element.style[style] === value1) {
        element.style[style] = value2;
    } else {
        element.style[style] = value1;
    }
}
