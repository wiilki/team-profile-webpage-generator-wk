const generateManager = manager => {
    return `
<div class="employee-card">
<div class="name-title">
    <h2>${manager.name}</h2>
    <h2>${manager.role}</h2>
</div>
<div class="info">
    <p>ID: ${manager.id}</p>
    <p>Email: ${manager.email}</p>
    <p>Office number: ${manager.officeNumber}</p>
</div>
</div>`;
}


const generateEngineer = engineer => {
    return `
<div class="employee-card">
<div class="name-title">
    <h2>${engineer.name}</h2>
    <h2>${engineer.role}</h2>
</div>
<div class="info">
    <p>ID: ${engineer.id}</p>
    <p>Email: ${engineer.email}</p>
    <p>Github: ${engineer.github}</p>
</div>
</div>`;
}

const generateIntern = intern => {
    return `
<div class="employee-card">
<div class="name-title">
    <h2>${intern.name}</h2>
    <h2>${intern.role}</h2>
</div>
<div class="info">
    <p>ID: ${intern.id}</p>
    <p>Email: ${intern.email}</p>
    <p>School: ${intern.school}</p>
</div>
</div>`;
}

const generateHTML = allEmployees => {
    newArray = [];
    for (let i = 0; allEmployees.length>i; i++){ 
        const role = allEmployees[i].getRole();
        if (role === 'Manager'){ 
            newArray.push(generateManager(allEmployees[i]));
        }
        if (role === 'Engineer'){ 
            newArray.push(generateEngineer(allEmployees[i]));
        }
        if (role === 'Intern'){ 
            newArray.push(generateIntern(allEmployees[i]));
        }
    }
    const team = newArray.join(''); 

    return teamHtml(team); 
}

const teamHtml= (team) =>
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
    ${team}
    </main>
</body>

</html>`

module.exports = generateHTML; 