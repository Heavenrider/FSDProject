/**
 * Global Database and Auth Logic
 */
const db = {
    getScholarships: () => JSON.parse(localStorage.getItem('scholarships')) || [
        { id: 1, title: "STEM Excellence Grant", category: "STEM", amount: "$5,000", deadline: "2026-06-01" },
        { id: 2, title: "Global Arts Fund", category: "Arts", amount: "$3,500", deadline: "2026-07-15" }
    ],
    getApplications: () => JSON.parse(localStorage.getItem('applications')) || [],
    saveScholarships: (data) => localStorage.setItem('scholarships', JSON.stringify(data)),
    saveApplications: (data) => localStorage.setItem('applications', JSON.stringify(data))
};

function updateNavbar() {
    const role = localStorage.getItem('userRole');
    const navLinks = document.getElementById('navLinks');
    if (!navLinks) return;

    if (role === 'admin') {
        navLinks.innerHTML = `
            <a href="admin.html">Admin Panel</a>
            <button class="btn btn-danger" onclick="logout()">Logout</button>
        `;
    } else if (role === 'student') {
        navLinks.innerHTML = `
            <a href="dashboard.html">My Dashboard</a>
            <button class="btn btn-danger" onclick="logout()">Logout</button>
        `;
    } else {
        navLinks.innerHTML = `
            <a href="login.html">Login</a>
            <a href="signup.html" class="btn">Sign Up</a>
        `;
    }
}

function logout() {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', updateNavbar);
