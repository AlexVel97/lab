  const skills = [
    {css_class: "skill-html", name: "HTML", level: 70},
    {css_class: "skill-css", name: "CSS", level: 40},
    {css_class: "skill-py", name: "Python", level: 30},
    {css_class: "skill-php", name: "PHP", level: 25}
    ]
    
function insert_skills() {
  const dl = document.createElement('dl');
  dl.classList.add('skills-list');
  skills.forEach(item => {
    const dt = document.createElement('dt');
    dt.textContent = item.name;
    dt.classList.add(item.css_class);
    const dd = document.createElement('dd');
    dd.classList.add('level');
    const div = document.createElement('div');
    div.style.width = item.level + '%';
    div.textContent = item.level;
    dd.appendChild(div);
    dl.append(dt);
    dl.append(dd);
  });
  document.querySelector('.skills').append(dl);
 }

 insert_skills();