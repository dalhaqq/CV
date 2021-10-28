const certificates = [
    {
        id: "ml",
        img: "ml.png",
        title: "Pengenalan Machine Learning",
        platform: "Dicoding",
        url: "https://www.dicoding.com/certificates/53XEEM709XRN"
    },
    {
        id: "python",
        img: "python.png",
        title: "Python (Basic)",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/certificates/921a41a19764"
    },
    {
        id: "rwd",
        img: "rwd.png",
        title: "Responsive Web Design",
        platform: "freeCodeCamp",
        url: "https://www.freecodecamp.org/certification/abdalhaqq/responsive-web-design"
    },
]

// Add certificates to element
const certificateContainer = document.querySelector("#certificates .row")
certificates.forEach(function (certificate, index) {
    certificateContainer.innerHTML += `
            <div class="modal" id="${certificate.id}Cert" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <img src="images/certificates/${certificate.img}" class="img-fluid" alt="${certificate.title}">
                    </div>
                </div>
            </div>
            <div class="col-md-4" data-aos="flip-left" data-aos-offset="${150 * index}">
                <div class="card">
                    <img class="card-image-top" src="images/certificates/${certificate.img}" alt="${certificate.platform} ${certificate.title} certificate" data-toggle="modal" data-target="#${certificate.id}Cert">
                    <div class="card-body">
                        <h5 class="card-title">${certificate.title}</h5>
                        <p class="card-text"><a target="_blank" href="${certificate.url}">${certificate.platform}</a></p>
                    </div>
                </div>
            </div>`
})

const projects = [
    {
        id: "pow",
        imgs: ["pow1.png", "pow2.png"],
        name: "Predict on Web",
        desc: "Simple classifier based on Naive Bayes algorithm built with HTML, CSS, and JavaScript",
        url: "https://dalhaqq.github.io/predict-on-web"
    }
]

const projectContainer = document.querySelector("#projects .row")
projects.forEach(function (project, index) {
    let carousel = ``
    project.imgs.forEach((img, idx) => {
        const active = idx == 0 ? 'active' : ''
        carousel += `<div class="carousel-item ${active}">
                        <img src="images/projects/${project.id}/${img}" class="d-block w-100" alt="${project.name}">
                    </div>`
    })
    projectContainer.innerHTML += `<div class="modal" id="${project.id}Proj" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h6 class="modal-title">${project.name}</h6>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div id="pow" class="carousel slide" data-ride="carousel">
                                                <div class="carousel-inner">${carousel}</div>
                                                <a class="carousel-control-prev" href="#pow" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#pow" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">${project.desc}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" data-aos="flip-left" data-aos-offset="${150 * index}">
                <div class="card">
                    <img class="card-image-top" src="images/projects/${project.id}/${project.imgs[0]}" alt="${project.name}" data-toggle="modal" data-target="#${project.id}Proj">
                    <div class="card-body">
                        <h5 class="card-title">${project.name} <a target="_blank" href="${project.url}"><i class="bi-arrow-up-right-square"></i></a></h5>
                        <p class="card-text">${project.desc}</p>
                    </div>
                </div>
            </div>`
})