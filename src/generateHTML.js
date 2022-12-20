const generateManager = manager => {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-header">
        <h2>${manager.name}</h2>
        <h2>Manager</h2>
    </div>
    <ul class="list-group">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
</div>`;
}


const generateEngineer = engineer => {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-header">
        <h2>${engineer.name}</h2>
        <h2>Engineer</h2>
    </div>
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
    </ul>
</div>`;
}

const generateIntern = intern => {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-header">
        <h2>${intern.name}</h2>
        <h2>Intern</h2>
    </div>
    <ul class="list-group">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>`;
}

const generateHTML = allEmployees => {
    newArray = [];
    for (let i = 0; allEmployees.length > i; i++) {
        const role = allEmployees[i].getRole();
        if (role === 'Manager') {
            newArray.push(generateManager(allEmployees[i]));
        }
        if (role === 'Engineer') {
            newArray.push(generateEngineer(allEmployees[i]));
        }
        if (role === 'Intern') {
            newArray.push(generateIntern(allEmployees[i]));
        }
    }
    const team = newArray.join('');

    return teamHtml(team);
}

const teamHtml = (team) =>
    `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
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

</html>
    `

module.exports = generateHTML; 