const generateManagerCard = (manager) => {
    return `
    <div class="card text-white bg-success mb-3" style="width: 18rem;">
    <div class="card-body">
      <h class="card-title"><strong>${manager.getName()}</strong></h5>
      <p class="card-text"><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
    </ul>
  </div>
    `
};

const generateEngineerCard = (engineer) => {
    return `
    <div class="card text-white bg-success mb-3" style="width: 18rem;">
    <div class="card-body">
      <h class="card-title"><strong>${engineer.getName()}</strong></h5>
      <p class="card-text"><i class="fa-solid fa-glasses"></i>${engineer.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">Github Username: ${engineer.getGithub()}</li>
    </ul>
  </div>
    `
};
const generateInternCard = (intern) => {
    return `
    <div class="card text-white bg-success mb-3" style="width: 18rem;">
    <div class="card-body">
      <h class="card-title"><strong>${intern.getName()}</strong></h5>
      <p class="card-text"><i class="fa-solid fa-user-graduate"></i>${intern.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>
    `
};