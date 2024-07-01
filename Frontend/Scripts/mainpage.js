
function scroller(direction) {
    const storiesContainer = document.querySelector('.Stories');
    const scrollAmount = 100; 
    
    if (direction === 'left') {
        storiesContainer.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        storiesContainer.scrollLeft += scrollAmount;
    }
}