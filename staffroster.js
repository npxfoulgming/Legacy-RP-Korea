document.addEventListener('DOMContentLoaded', function() {
    // Sample employee data
    const employees = [
        { id: 1, name: 'FouL Gaming', position: 'Co-Manager', joinDate: 'January 1, 2024', image: 'foulgaming.png', tiktok: 'https://www.tiktok.com/@npxfoulgaming', youtube: 'https://youtube.com/@npxfoulgaming', instagram: 'https://www.instagram.com/npxfoulgaming/', facebook: 'https://www.facebook.com/npxfoulgaming', twitch: 'https://www.twitch.tv/npxfoulgaming', twitter: 'https://x.com/npxfoulgaming', likes: 0 },
        { id: 2, name: 'Girish Don', position: 'Admin', joinDate: 'March 15, 2019', image: 'employee2.jpg', tiktok: 'https://www.tiktok.com/@janesmith', youtube: 'https://www.youtube.com/janesmith', instagram: 'https://www.instagram.com/janesmith', facebook: 'https://www.facebook.com/janesmith', twitch: 'https://www.twitch.tv/janesmith', twitter: 'https://www.twitter.com/janesmith', likes: 0 },
        { id: 3, name: 'Kranti Gaming', position: 'Staff', joinDate: 'June 10, 2018', image: 'employee3.jpg', tiktok: 'https://www.tiktok.com/@michaeljohnson', youtube: 'https://www.youtube.com/michaeljohnson', instagram: 'https://www.instagram.com/michaeljohnson', facebook: 'https://www.facebook.com/michaeljohnson', twitch: 'https://www.twitch.tv/michaeljohnson', twitter: 'https://www.twitter.com/michaeljohnson', likes: 0 },
        { id: 4, name: 'Azzoz Yagami', position: 'Staff', joinDate: 'February 5, 2021', image: 'employee4.jpg', tiktok: 'https://www.tiktok.com/@emilybrown', youtube: 'https://www.youtube.com/emilybrown', instagram: 'https://www.instagram.com/emilybrown', facebook: 'https://www.facebook.com/emilybrown', twitch: 'https://www.twitch.tv/emilybrown', twitter: 'https://www.twitter.com/emilybrown', likes: 0 },
        { id: 5, name: 'FouL Gaming', position: 'Co-Manager', joinDate: 'January 1, 2024', image: 'foulgaming.png', tiktok: 'https://www.tiktok.com/@johndoe', youtube: 'https://www.youtube.com/johndoe', instagram: 'https://www.instagram.com/johndoe', facebook: 'https://www.facebook.com/johndoe', twitch: 'https://www.twitch.tv/johndoe', twitter: 'https://www.twitter.com/johndoe', likes: 0 },
        { id: 6, name: 'FouL Gaming', position: 'Co-Manager', joinDate: 'January 1, 2024', image: 'foulgaming.png', tiktok: 'https://www.tiktok.com/@johndoe', youtube: 'https://www.youtube.com/johndoe', instagram: 'https://www.instagram.com/johndoe', facebook: 'https://www.facebook.com/johndoe', twitch: 'https://www.twitch.tv/johndoe', twitter: 'https://www.twitter.com/johndoe', likes: 0 },
        { id: 7, name: 'FouL Gaming', position: 'Co-Manager', joinDate: 'January 1, 2024', image: 'foulgaming.png', tiktok: 'https://www.tiktok.com/@johndoe', youtube: 'https://www.youtube.com/johndoe', instagram: 'https://www.instagram.com/johndoe', facebook: 'https://www.facebook.com/johndoe', twitch: 'https://www.twitch.tv/johndoe', twitter: 'https://www.twitter.com/johndoe', likes: 0 },
        // Add more employees as needed
    ];

    // Load likes from localStorage
    function loadLikes() {
        return JSON.parse(localStorage.getItem('employeeLikes')) || {};
    }

    // Save likes to localStorage
    function saveLikes(likes) {
        localStorage.setItem('employeeLikes', JSON.stringify(likes));
    }

    const likes = loadLikes();
    
    const container = document.getElementById('employee-container');

    // Function to create employee cards
    function createEmployeeCard(employee) {
        const card = document.createElement('div');
        card.classList.add('employee-card');

        const employeeLikes = likes[employee.id] || 0;

        card.innerHTML = `
            <div class="employee-img">
                <img src="${employee.image}" alt="${employee.name}">
            </div>
            <div class="employee-info">
                <h2>${employee.name}</h2>
                <p>Position: ${employee.position}</p>
                <p>Date of Joining: ${employee.joinDate}</p>
                <div class="social-media">
                    <a href="${employee.tiktok}" target="_blank"><i class="fab fa-tiktok"></i></a>
                    <a href="${employee.youtube}" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a href="${employee.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="${employee.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="${employee.twitch}" target="_blank"><i class="fab fa-twitch"></i></a>
                    <a href="${employee.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
                <div class="like-dislike">
                    <button class="like-btn" data-id="${employee.id}"><i class="fas fa-thumbs-up"></i> Like</button>
                    <span class="feedback" data-id="${employee.id}">Likes: ${employeeLikes}</span>
                </div>
            </div>
        `;

        if (employeeLikes > 0) {
            card.querySelector('.like-btn').classList.add('liked');
        }

        container.appendChild(card);
    }

    // Create employee cards
    employees.forEach(employee => {
        createEmployeeCard(employee);
    });

    // Event listener for like button
    container.addEventListener('click', function(event) {
        const button = event.target.closest('.like-btn');

        if (button) {
            const employeeId = parseInt(button.getAttribute('data-id'));
            const feedback = document.querySelector(`.feedback[data-id="${employeeId}"]`);

            let employeeLikes = likes[employeeId] || 0;

            if (!button.classList.contains('liked')) {
                employeeLikes++;
                button.classList.add('liked');
            } else {
                employeeLikes--;
                button.classList.remove('liked');
            }

            likes[employeeId] = employeeLikes;
            saveLikes(likes);

            feedback.textContent = `Likes: ${employeeLikes}`;
        }
    });
});
