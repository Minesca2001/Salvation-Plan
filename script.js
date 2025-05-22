document.addEventListener('DOMContentLoaded', () => {
    const acknowledgeButton = document.getElementById('acknowledgeButton');
    const acknowledgementMessage = document.getElementById('acknowledgementMessage');

    if (acknowledgeButton && acknowledgementMessage) {
        acknowledgeButton.addEventListener('click', () => {
            acknowledgementMessage.classList.remove('hidden');
            acknowledgeButton.style.display = 'none'; // Optionally hide the button after click
        });
    }
});