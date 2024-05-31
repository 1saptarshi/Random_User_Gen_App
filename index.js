document.addEventListener('DOMContentLoaded', () => {
    const userName = document.getElementById('user-name');
    const userImage = document.getElementById('user-image');
    const userEmail = document.getElementById('user-email');
    const userPhone = document.getElementById('user-phone');
    const userAddress = document.getElementById('user-address');
    const generateBtn = document.getElementById('generate-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const userCard = document.getElementById('user-card');
    const facebookLink = document.getElementById('facebook-link');
    const twitterLink = document.getElementById('twitter-link');
    const linkedinLink = document.getElementById('linkedin-link');

    async function fetchUserData() {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const user = data.results[0];
            displayUserData(user);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    function displayUserData(user) {
        const fullName = `${user.name.first} ${user.name.last}`;
        const userNameForSocial = `${user.name.first.toLowerCase()}${user.name.last.toLowerCase()}`;

        userName.textContent = fullName;
        userImage.src = user.picture.large;
        userEmail.textContent = `Email: ${user.email}`;
        userPhone.textContent = `Phone: ${user.phone}`;
        userAddress.textContent = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}`;

        facebookLink.href = `https://www.facebook.com/${userNameForSocial}`;
        twitterLink.href = `https://twitter.com/${userNameForSocial}`;
        linkedinLink.href = `https://www.linkedin.com/in/${userNameForSocial}`;
    }

    generateBtn.addEventListener('click', fetchUserData);

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        userCard.classList.toggle('dark');
    });

    // Fetch initial user data on page load
    fetchUserData();
});
