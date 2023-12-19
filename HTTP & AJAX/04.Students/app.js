async function attachEvents() 
{
  const url = 'http://localhost:3030/jsonstore/collections/students';


  const response = await fetch(url);
  const studentsInfo = await response.json();
  const students = Array.from(Object.values(studentsInfo));
  const table = document.querySelector('tbody');

  for (const student of students)
  { 
    const row = document.createElement('tr');
    row.innerHTML = `<tr><td>${student.firstName}</td><td>${student.lastName}</td><td>${student.facultyNumber}</td><td>${student.grade}</td></tr>`;
    table.appendChild(row);
  }


  const [firstName, lastName, facNum, grade] = document.querySelectorAll('input');
  const submitBtn = document.querySelector('#submit');
  
  submitBtn.addEventListener('click', submitStudent);

  async function submitStudent()
  {
    let isValid = firstName.value != '' && lastName.value != '' && facNum.value != '' && grade.value != '';

    if(isValid)
    {
      const student = 
      {
        firstName: firstName.value,
        lastName: lastName.value,
        facultyNumber: facNum.value,
        grade: grade.value
      };

      await fetch(url,{
        method:'POST',
        body: JSON.stringify(student)
      });

      const row = document.createElement('tr');
      row.innerHTML = `<tr><td>${firstName.value}</td><td>${lastName.value}</td><td>${facNum.value}</td><td>${grade.value}</td></tr>`;
      table.appendChild(row);

      firstName.value = '';
      lastName.value = '';
      facNum.value = '';
      grade.value = '';
      
    }
  }

}

attachEvents();