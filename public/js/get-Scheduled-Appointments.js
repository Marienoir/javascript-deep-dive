// Expected URL = http://localhost:4000/appointments?user_id=6165f9c2d09e5e5603ca539b

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const userId = urlParams.get("user_id");
const bodyContent = document.querySelector("#content");

const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
};

const getScheduledAppointments = async (userId) => {
    if (userId) {
        const response = await fetch(
            `http://localhost:4000/api/user/${userId}/appointments`,
            options
        );

        if (!response.ok) {
            alert(`An error has occurred: ${response.status}`)
        }
        const { appointments } = await response.json();

        if (appointments.length > 0) {
            const newAppointment = appointments.map((appointment, i) => {
                return `
                    <tr>
                        <th scope="row">${i + 1}</th>
                        <td>${appointment?.name}</td>
                        <td>${appointment?.email}</td>
                        <td>
                           ${appointment?.reason}
                        </td>
                        <td>${new Date(appointment?.userAvailabilityId?.date).toDateString()}</td> 
                     </tr>
                `;
            });
            bodyContent.innerHTML = newAppointment.join(" ");
        } else {
            bodyContent.innerHTML = `<tr>
                                        <td colspan="5">No record found</td>
                                    </tr>`;
        }
    }
};

getScheduledAppointments().catch((error) => {
    alert(error.message); // 'An error has occurred: 404'
});

getScheduledAppointments(userId);
