function NumToName(names)
{
   names.forEach(employee => 
    {
        employeeName = employee;
        personalNumber = employee.length;

        console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`)
    })
}

NumToName(['Silas Butler', 'Adnaan Buckley','Juan Peterson','Brendan Villarreal'])