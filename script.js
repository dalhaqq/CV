// Add certificates to element
const certificateContainer = document.querySelector("#certificates .row");
fetch("certificates.json")
  .then((response) => response.json())
  .then((data) =>
    data.forEach(function (certificate, index) {
      certificateContainer.innerHTML += `
            <div class="modal" id="${
              certificate.id
            }Cert" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <img src="images/certificates/${
                          certificate.img
                        }.png" srcset="images/certificates/${
        certificate.img
      }.webp" class="img-fluid" alt="${certificate.title}">
                    </div>
                </div>
            </div>
            <div class="col-md-4" data-aos="flip-left" data-aos-offset="${
              150 * index
            }">
                <div class="card">
                    <img class="card-image-top" src="images/certificates/${
                      certificate.img
                    }.png" srcset="images/certificates/${
        certificate.img
      }.webp" alt="${certificate.platform} ${
        certificate.title
      } certificate" data-toggle="modal" data-target="#${certificate.id}Cert">
                    <div class="card-body">
                        <h5 class="card-title">${certificate.title}</h5>
                        <p class="card-text"><a target="_blank" href="${
                          certificate.url
                        }">${certificate.platform}</a></p>
                    </div>
                </div>
            </div>`;
    })
  );

// Add projects to element
const projectContainer = document.querySelector("#projects .row");
fetch("projects.json")
  .then((response) => response.json())
  .then((data) =>
    data.forEach(function (project, index) {
      let carousel = ``;
      project.imgs.forEach((img, idx) => {
        const active = idx == 0 ? "active" : "";
        carousel += `<div class="carousel-item ${active}">
                        <img src="images/projects/${project.id}/${img}.png" srcset="images/projects/${project.id}/${img}.webp" class="d-block w-100" alt="${project.name}">
                    </div>`;
      });
      projectContainer.innerHTML += `<div class="modal" id="${
        project.id
      }Proj" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h6 class="modal-title">${project.name}</h6>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div id="${
                                              project.id
                                            }Crs" class="carousel slide" data-ride="carousel">
                                                <div class="carousel-inner">${carousel}</div>
                                                <a class="carousel-control-prev" href="#${
                                                  project.id
                                                }Crs" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#${
                                                  project.id
                                                }Crs" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">${
                                          project.desc
                                        }</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" data-aos="flip-left" data-aos-offset="${
                  150 * (index + 1)
                }">
                <div class="card">
                    <img class="card-image-top" src="images/projects/${
                      project.id
                    }/${project.imgs[0]}.png" srcset="images/projects/${
        project.id
      }/${project.imgs[0]}.webp" alt="${
        project.name
      }" data-toggle="modal" data-target="#${project.id}Proj">
                    <div class="card-body">
                        <h5 class="card-title">${
                          project.name
                        } <a target="_blank" href="${
        project.url
      }"><i class="bi-arrow-up-right-square"></i></a></h5>
                        <p class="card-text">${project.desc}</p>
                    </div>
                </div>
            </div>`;
    })
  );

const yLabels = {
  2: "newbie",
  4: "intermediate",
  6: "advanced",
  8: "expert",
  10: "master",
};

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["HTML/CSS", "PHP", "Python", "JavaScript", "C/C++", "Java"],
    datasets: [
      {
        data: [5, 6, 7, 5, 4, 4],
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        max: 10,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return yLabels[value];
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  },
});

$('#loginModal').on('shown.bs.modal', e => {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  username.focus();
  username.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
      e.preventDefault();
      if (username.value == '') {
        alert('Username can not be blank');
        username.focus();
      } else {
        password.focus();
      }
    }
  });
  password.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
      e.preventDefault();
      if (password.value == '') {
        alert('Password can not be blank');
        password.focus();
      } else {
        document.getElementById('loginForm').submit();
      }
    }
  });
  
});