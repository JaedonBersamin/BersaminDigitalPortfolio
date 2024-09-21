document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('dark-mode');  // Start in dark mode
    toggleButton.textContent = 'Switch to Light Mode';  // Set button text to light mode

    // Typewriter effect for the header description
    const description = "Computer Science Student | Aspiring Programmer";
    let index = 0;

    // Reset the header description before starting typewriter effect
    const headerParagraph = document.querySelector('header p');
    headerParagraph.textContent = '';  // Clear any previous text

    // Create blinking cursor element
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.animation = 'blink 1s step-end infinite';  // Add blinking animation
    headerParagraph.appendChild(cursor);

    function typeWriter() {
        if (index < description.length) {
            headerParagraph.textContent = description.substring(0, index + 1);  // Update text
            headerParagraph.appendChild(cursor);  // Re-attach cursor
            index++;
            setTimeout(typeWriter, 40);
        }
    }
    typeWriter();
});

// Blinking cursor animation (CSS)
const style = document.createElement('style');
style.textContent = `
@keyframes blink {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}`;
document.head.appendChild(style);


// Smooth scrolling to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.01)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Dark mode toggle button
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Switch to Light Mode';  // Initial button text
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = '#333';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
