
      document.getElementById('addSubject').addEventListener('click', () => {
        const div = document.createElement('div');
        div.innerHTML = `
          <input type="text" placeholder="Subject Name" class="subject">
          <input type="number" placeholder="Estimated Hours" class="hours">
          <button type="button" class="removeSubject">-</button>
        `;
        document.getElementById('subjects').appendChild(div);
      });


      document.getElementById('subjects').addEventListener('click', (e) => {
        if (e.target.classList.contains('removeSubject')) {
          e.target.parentElement.remove();
        }
      });

      document.getElementById('setupForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
          name: document.getElementById('name').value,
          week: document.getElementById('week').value,
          goals: document.getElementById('goals').value,
          subjects: Array.from(document.querySelectorAll('.subject')).map((s, i) => ({
            name: s.value,
            hours: document.querySelectorAll('.hours')[i].value
          })),
          sessionLength: document.getElementById('sessionLength').value,
          breakLength: document.getElementById('breakLength').value,
          productivityTime: document.getElementById('productivityTime').value,
          journal: document.getElementById('journal').value
        };

        localStorage.setItem('productivitySetup', JSON.stringify(data));

        window.location.href = '(8.1) studyPlanner.html';
      });

      function resetSetup(){
    localStorage.removeItem('productivitySetup');
}

function toggleNavBar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
}
      
