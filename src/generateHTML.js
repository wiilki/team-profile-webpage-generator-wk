const generateHTML = ({ name, id, email, officeNumber, github, school }) =>
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
        <div class="employee-card">
            <div class="name-title">
                <h2>William</h2>
                <h2>Engineer</h2>
            </div>
            <div class="info">
                <p>ID: 1</p>
                <p>Email: </p>
                <p>Office number: 1</p>
            </div>
        </div>
    </main>
</body>

</html>`