let scrollCount = 1;
const MAX_SCROLLS = 3;

// Initially hide the scroll-up button
document.getElementById('scrollUpBtn').style.display = 'none';

document.getElementById('scrollBtn').addEventListener('click', function() {
    const sectionId = `section${scrollCount + 1}`;
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        scrollCount++;

        // Show the scroll-up button when reaching section 2
        if (scrollCount == 1) {
            document.getElementById('scrollUpBtn').style.display = 'none';
        } else {
            document.getElementById('scrollUpBtn').style.display = 'block';
        }
        if (scrollCount === MAX_SCROLLS) {
            document.getElementById('scrollBtn').style.display = 'none';
        } else {
            document.getElementById('scrollBtn').style.display = 'block';
        }
    }
});

// Scroll-up button functionality
document.getElementById('scrollUpBtn').addEventListener('click', function() {
    const sectionId = `section${scrollCount - 1}`;
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        scrollCount--;

        // Hide the scroll-up button when going back to section 1
        if (scrollCount === 1) {
            document.getElementById('scrollUpBtn').style.display = 'none';
        } else {
            document.getElementById('scrollUpBtn').style.display = 'block';
        }
        if (scrollCount === MAX_SCROLLS) {
            document.getElementById('scrollBtn').style.display = 'none';
        } else {
            document.getElementById('scrollBtn').style.display = 'block';
        }
    }
});