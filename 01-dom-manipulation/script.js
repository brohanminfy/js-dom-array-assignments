//easy
const heading = document.getElementById("main-heading")
heading.textContent= "My Awesome Shop"

const paragraph = document.getElementsByClassName("tagline")[0]
paragraph.innerHTML = "Find the <strong>best</strong> products here!"

const footer = document.querySelector('footer p')
footer.textContent = "© 2025 Rohan"

//medium

const mainElement  = document.getElementById("app-container");

const h2tag = document.createElement('h2')
h2tag.textContent="About Us"

const ptag = document.createElement('p')
ptag.textContent = "We are a small team passionate about quality products."

mainElement.appendChild(h2tag)
mainElement.appendChild(ptag)

//hard

const contactTag = document.createElement('div')
contactTag.classList.add("contact-info")

const contactP1 = document.createElement('p')
contactP1.innerHTML = `Email: <a href="mailto:contact@awesomeshop.com">contact@awesomeshop.com</a>`;

const contactP2 = document.createElement('p')
contactP2.innerHTML = "Phone: 123-456-7890"

contactTag.append(contactP1)
contactTag.append(contactP2)
footer.insertBefore(contactTag,footer.firstElementChild)