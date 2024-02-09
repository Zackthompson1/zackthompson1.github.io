document.addEventListener("DOMContentLoaded", function() {
    const links = [
        "https://example1.com",
        "https://example2.com",
        "https://example3.com",
        // Add more links as needed
    ];

    const generateLinkButton = document.getElementById("generateLink");
    const linkContainer = document.getElementById("linkContainer");

    generateLinkButton.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * links.length);
        const randomLink = links[randomIndex];
        linkContainer.innerHTML = `<p><a href="${randomLink}" target="_blank">${randomLink}</a></p>`;
    });
});
