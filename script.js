function toggleDetails(button) {
    const details = button.nextElementSibling;
    const isVisible = details.style.display === 'block';
    details.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Show Recipe' : 'Hide Recipe';
}

