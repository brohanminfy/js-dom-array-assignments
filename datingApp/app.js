let users = [];
let currentUserIndex = 0;
let currentGender = "";

const profileContainer = document.getElementById('profile-card-container');
const likeButton = document.getElementById("like-btn");
const nopeButton = document.getElementById("nope-btn");
const genderChoice = document.getElementById("gender-choice");
const tagline = document.getElementById("tagline");
const actionbuttons = document.getElementById("actions");

profileContainer.classList.add("noneDisplay");
actionbuttons.classList.add("noneDisplay");

function createEmoji(e, emoji) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = emoji;

  const rect = profileContainer.getBoundingClientRect();
  heart.style.left = `${rect.left + rect.width / 2}px`;
  heart.style.top = `${rect.top + rect.height / 2}px`;

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
}

likeButton.addEventListener('click', (e) => {
  createEmoji(e, '❤️');
  const card = profileContainer.querySelector('.profile-card');
  card.style.transform = 'translateX(100px) rotate(20deg)';
  setTimeout(() => {
    currentUserIndex++;
    renderProfile();
  }, 300);
});

nopeButton.addEventListener('click', (e) => {
  createEmoji(e, '👎');
  const card = profileContainer.querySelector('.profile-card');
  card.style.transform = 'translateX(-100px) rotate(-20deg)';
  setTimeout(() => {
    currentUserIndex++;
    renderProfile();
  }, 300);
});

// Swipe feature
let startX = 0;
let isDragging = false;

profileContainer.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  isDragging = true;
});

profileContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const card = profileContainer.querySelector('.profile-card');
  if (!card) return;

  const deltaX = e.clientX - startX;
  const clampedDelta = Math.max(Math.min(deltaX, 200), -200);
  const rotate = deltaX > 0 ? 20 : -20;
  card.style.transform = `translateX(${clampedDelta}px) rotate(${rotate}deg)`;
});

profileContainer.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  const card = profileContainer.querySelector('.profile-card');
  if (!card) return;

  const deltaX = e.clientX - startX;

  if (Math.abs(deltaX) > 150) {
    createEmoji(e, deltaX > 0 ? '❤️' : '👎');
    card.style.transition = 'transform 0.3s ease';
    card.style.transform = `translateX(${deltaX > 0 ? 400 : -400}px) rotate(${deltaX > 0 ? 20 : -20}deg)`;
    setTimeout(() => {
      currentUserIndex++;
      renderProfile();
    }, 300);
  } else {
    card.style.transition = 'transform 0.3s ease';
    card.style.transform = 'translateX(0px) rotate(0deg)';
    setTimeout(() => card.style.transition = '', 300);
  }

  startX = 0;
});

async function fetchUsers(gender) {
  try {
    const response = await fetch('https://randomuser.me/api/?results=30');
    const data = await response.json();
    const fetchedUsers = data.results;

    let filteredUsers = fetchedUsers;
    if (gender === "male") filteredUsers = fetchedUsers.filter(user => user.gender === "male");
    else if (gender === "female") filteredUsers = fetchedUsers.filter(user => user.gender === "female");

    users.push(...filteredUsers);
    renderProfile();
  } catch (err) {
    console.error("Failed to fetch users:", err);
  }
}

function renderProfile() {
  if (currentUserIndex >= users.length - 4) {
    users.splice(0, 6);
    fetchUsers(currentGender);
    currentUserIndex = 0;
    return;
  }

  profileContainer.innerHTML = "";
  const user = users[currentUserIndex];
  const card = document.createElement('div');
  card.className = 'profile-card';
  card.style.backgroundImage = `url(${user.picture.large})`;

  const info = document.createElement('div');
  info.className = 'profile-info';
  info.innerHTML = `<h2>${user.name.first} ${user.name.last}, ${user.dob.age}</h2>
                    <p>${user.location.city}, ${user.location.country}</p>`;
  card.appendChild(info);
  profileContainer.appendChild(card);
}

document.getElementById('male-button').addEventListener('click', () => {
  fetchUsers("male");
  currentGender = "male";
  profileContainer.classList.remove("noneDisplay");
  genderChoice.classList.add("noneDisplay");
  tagline.classList.add("noneDisplay");
  actionbuttons.classList.remove("noneDisplay");
});

document.getElementById('female-button').addEventListener('click', () => {
  fetchUsers("female");
  currentGender = "female";
  profileContainer.classList.remove("noneDisplay");
  genderChoice.classList.add("noneDisplay");
  tagline.classList.add("noneDisplay");
  actionbuttons.classList.remove("noneDisplay");
});

document.getElementById('any-button').addEventListener('click', () => {
  fetchUsers("any");
  currentGender = "";
  profileContainer.classList.remove("noneDisplay");
  genderChoice.classList.add("noneDisplay");
  tagline.classList.add("noneDisplay");
  actionbuttons.classList.remove("noneDisplay");
});
