// Add active class to the current menu item (highlight it)
var menuItems = document.querySelectorAll('.menu li');
menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var current = document.querySelector('.menu .active');
        if (current) {
            current.classList.remove('active');
        }
        this.classList.add('active');
    });
});

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const output = document.getElementById('output');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const fileContent = e.target.result;
            output.innerText = `File name: ${file.name}\nFile content:\n${fileContent}`;
        };

        reader.readAsText(file);
    } else {
        output.innerText = 'No file selected.';
    }
}