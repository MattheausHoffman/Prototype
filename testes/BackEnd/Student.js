document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('student-form');
    const studentList = document.getElementById('student-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('student-name').value;
        const lastName = document.getElementById('student-lastname').value;
        const email = document.getElementById('student-email').value;
        const registration = document.getElementById('student-registration').value;

        const student = { name, lastName, email, registration };
        addStudentToList(student);
        form.reset();
    });

    function addStudentToList(student) {
        const li = document.createElement('li');
        li.textContent = `${student.name} ${student.lastName} - ${student.email} (${student.registration})`;
        studentList.appendChild(li);
    }
});
