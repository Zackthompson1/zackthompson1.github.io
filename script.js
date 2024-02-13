document.addEventListener("DOMContentLoaded", function() {
    const links = [
        "https://glos.onlinesurveys.ac.uk/unmasking-the-impact-exploring-the-relationship-between-c",
        "https://glos.onlinesurveys.ac.uk/unmasking-the-impact-exploring-the-relationship-between-c-2",
        // Add more links as needed
    ];

    const linkContainer = document.getElementById("linkContainer");

    // Generate a random link upon page load
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    linkContainer.innerHTML = `<p><a href="${randomLink}" target="_blank">${randomLink}</a></p>`;
});
