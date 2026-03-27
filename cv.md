# Aleksey Akimov

### Frontend Developer

---

### Contact information:

**Phone:** +8-800-555-35-35<br>
**E-mail:** akimov.frontend@gmail.com<br>

## Brief Self-Introduction

Hello! My name is Aleksey, and I’m excited to begin my career in frontend development. Although I don’t have a formal background in IT, I’ve always been fascinated by technology and how it shapes our daily lives. This curiosity led me to explore coding on my own, and I quickly discovered a passion for creating websites and web applications.

I’m currently focused on learning HTML, CSS, and JavaScript, and I’ve completed several online courses that have helped me build a solid foundation. I love the challenge of solving problems and designing intuitive user interfaces that provide a great experience for users.

One of my strengths is my creativity, which I believe is essential for crafting visually appealing and functional designs. I’m also a quick learner and thrive in environments where I can collaborate with others. I’m eager to connect with experienced developers, gain hands-on experience, and contribute to exciting projects.

As I take my first steps into the tech industry, I’m looking forward to continuous learning and growth. Thank you for taking the time to get to know me!

---

### Skills:

- HTML

Understanding the structure of web pages.
Knowledge of semantic HTML for better accessibility and SEO.

- CSS

Styling web pages and layouts.
Familiarity with Flexbox and Grid for responsive design.
Understanding of CSS preprocessors like SASS or LESS (optional for beginners).

- JavaScript

Basic syntax and concepts (variables, functions, loops, and conditionals).
Manipulating the DOM (Document Object Model).
Understanding of event handling.

- Responsive Design

Principles of creating layouts that work on various devices (mobile, tablet, desktop).
Knowledge of media queries and mobile-first design.

- Version Control (Git)

Basic commands for using Git and GitHub to manage code and collaborate with others.

- Basic Understanding of Browser Developer Tools

Using tools in browsers (like Chrome DevTools) for debugging and testing code.
Frameworks and Libraries (optional)

---

### Code example:

```javascript
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2024";

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

countDown();

setInterval(countDown, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
```

---

### Courses and education:

- Specialist Degree St. Petersburg State University of Economics [UNECON](https://en.unecon.ru/)
- WAYUP school [link](https://wayup.in/ru/)
- RS School [link](https://rs.school/)

---

### Languages:

- English(b2)
- Russian(native)
- Ukranian(a2)
- Hebrew(b1)
