interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'raz',
  lastName: 'sos',
  age: 34,
  location: 'home',
};

const student2: Student = {
  firstName: 'imrane',
  lastName: '3abit',
  age: 25,
  location: "home next neighbor's house",
};

const studentsList: Array<Student> = [student1, student2];

/* render table */
document.addEventListener('DOMContentLoaded', () => {
  const table: HTMLTableElement = document.createElement('table');
  const tbody: HTMLTableSectionElement = table.createTBody();

  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const lastNameCell: HTMLTableCellElement = row.insertCell();

    firstNameCell.textContent = student.firstName;
    lastNameCell.textContent = student.lastName;
  });
  document.body.appendChild(table);
});
