const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const username = urlParams.get("username");
document.getElementById('availability').href = `/availability?username=${username}`
const bodyContent = document.querySelector("#content");

fetch(`http://localhost:4000/api/user/dashboard/${username}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
})
    .then(response => response.json())
    .then(data => {
        let response = data.result;
        if (response.length > 0) {
            const newAppointment = response.map((item, i) => {
                return `
                    <div class="col-lg-3 col-md-6 mb-4">
                        <a href="/booking?id=${item?._id}" class="border rounded p-3 d-flex flex-column card-full">
                            <h3 class="fs-20 font-weight-bold text-black" >
                                ${new Date(item?.date).toDateString()}
                            </h3>
                            <span>View booking page</span>
                        </a>
                    </div>
                `;
            });
            bodyContent.innerHTML = newAppointment.join(" ");
        } else {
            bodyContent.innerHTML = `<div>No Record Found</div>`
        }
    })
    .catch((error) => {
        alert('Error!!!' + error);
    });