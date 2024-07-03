
const draw = document.getElementById('draw');


draw.addEventListener('click', function() {
   
    const icon = draw.querySelector('i');
    if (icon.classList.contains('fa-angle-right')) {
        icon.classList.remove('fa-angle-right');
        icon.classList.add('fa-angle-left');
    } else {
        icon.classList.remove('fa-angle-left');
        icon.classList.add('fa-angle-right');
    }

    const toggle = document.querySelector('.exlpore-section');

    if (toggle.style.display === 'none' ) {
        toggle.style.display = 'block'; 

       
    } else {
        toggle.style.display = 'none'; 
    }
});