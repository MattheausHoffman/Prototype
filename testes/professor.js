document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('professor-form');
    const professorList = document.getElementById('professor-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('professor-name').value;
        const lastName = document.getElementById('professor-lastname').value;
        const email = document.getElementById('professor-email').value;
        const registration = document.getElementById('professor-registration').value;

        const professor = { name, lastName, email, registration };
        addprofessorToList(professor);
        form.reset();
    });

    function addprofessorToList(professor) {
        const li = document.createElement('li');
        li.textContent = `${professor.name} ${professor.lastName} - ${professor.email} (${professor.registration})`;
        professorList.appendChild(li);
    }
});
