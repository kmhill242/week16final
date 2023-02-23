import { useEffect, useState } from "react";
import axios from "axios";
import { FiRefreshCw } from "react-icons/fi";

// Appointments
/*class Appointment {
    constructor(name, date) {
      this.name = name;
      this.date = date;
    }
  }
  
  class AppointmentService {
    static url = "https://63c1bf9d99c0a15d28f169b6.mockapi.io/appointments";
  
    static getAllAppointments() {
      return $.get(this.url);
    }
  
    static getAppointment(id) {
      return $.get(`${this.url}/${id}`);
    }
  
    static createAppointment(appointment) {
      return $.post(this.url, appointment);
    }
  
    static updateAppointment(id, name, date) {
      const data = { name, date };
      console.log("Appointment from update Appointment", data);
      return $.ajax({
        url: `${this.url}/${id}`,
        dataType: "json",
        data: JSON.stringify(data),
        contentType: "application/json",
        type: "PUT",
      });
    }
  
    static deleteAppointment(id) {
      return $.ajax({
        url: `${this.url}/${id}`,
        type: "DELETE",
      });
    }
  }
  
  class DOMManager {
    static Appointments;
  
    static getAllAppointments() {
      AppointmentService.getAllAppointments().then((appointments) =>
        this.render(appointments)
      );
    }
  
    static createAppointment(name, date) {
      AppointmentService.createAppointment(new Appointment(name, date))
        .then(() => AppointmentService.getAllAppointments())
        .then((appointments) => this.render(appointments));
    }
  
    static updateAppointment(id, name, date) {
      AppointmentService.updateAppointment(id, name, date)
        .then(() => AppointmentService.getAllAppointments())
        .then((appointments) => this.render(appointments));
    }
  
    static deleteAppointment(id) {
      AppointmentService.deleteAppointment(id).then(() =>
        AppointmentService.getAllAppointments().then((appointments) =>
          this.render(appointments)
        )
      );
    }
  
    static render(appointments) {
      this.appointments = appointments;
      $("#appointments").empty();
      for (let appointment of appointments) {
        $("#appointments").prepend(`
            <div class="col-sm-6 col-lg-4" style="margin-top: 15px;">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-date">${appointment.name}</h5>
                  <p class="card-text">${appointment.date}</p>
                </div>
              </div>
              <div class="col-sm">
              <div class="row">
                <div class="col-sm">
                  <input
                    type="text"
                    id="${appointment.id}-update-appointment-name"
                    class="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="col-sm">
                  <input
                    type="text"
                    id="${appointment.id}-update-appointment-date"
                    class="form-control"
                    placeholder="Date"
                    required
                  />
                </div>
                <button id="#${appointment.id}-update-appointment" class="btn btn-primary form-control" onclick="updateAppointment('${appointment.id}')">
                  Update Appointment
                </button>
                <button
                  id="delete-appointment"
                  class="btn btn-danger form-control"
                  onclick="DOMManager.deleteAppointment('${appointment.id}')"
                >
                  Delete Appointment
                </button>
              </div>
            </div>
            </div>
            <br />
            `);
      }
    }
  }
  
  //create new appointment
  $("#add-new-appointment").click(() => {
    DOMManager.createAppointment(
      $("#new-appointment-name").val(),
      $("#new-appointment-date").val()
    );
    $("#new-appointment-name").val("");
    $("#new-appointment-date").val("");
  });
  
  //update appointment
  function updateAppointment(id) {
    const name = $(`#${id}-update-appointment-name`).val();
    const date = $(`#${id}-update-appointment-date`).val();
    // console.log({
    //   id,
    //   name,
    //   date,
    // });
  
    DOMManager.updateAppointment(id, name, date);
  }
  
  //get all appointments on first render
  DOMManager.getAllAppointments();*/

const Reservation = () => {
  const [text, setText] = useState("your name");
  const [users, setUsers] = useState(null);

  const submit = async () => {
    console.log(text);
    await axios.post(
      "https://63dd9239df83d549cea335c5.mockapi.io/KevinsEndpoint",
      { name: text }
    );
  };

  const refresh = async () => {
    let data = await axios.get(
      "https://63dd9239df83d549cea335c5.mockapi.io/KevinsEndpoint"
    );
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDriection: "column",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => submit()}
        style={{
          backgroundColor: "blue",
          height: "10rem",
          width: "10rem",
        }}
      />
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        style={{
          backgroundColor: "red",
          height: "10rem",
        }}
      />
      <FiRefreshCw
        color="green"
        size={24}
        value="refresh"
        onClick={() => refresh()}
        // style={{
        //   backgroundColor: "blue",
        //   height: "10rem",
        //   width: "10rem",
        // }}
      />
      <div>
        <ul>
          {users
            ? users.data.map((user, i) => (
                <ListValueObject
                  key={user.id}
                  name={user.name}
                  id={user.id}
                  refresh={refresh}
                />
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

const ListValueObject = ({ name, id, refresh }) => {
  const [tempText, setTempText] = useState(name);
  const makeChange = async (deleteObject) => {
    if (deleteObject) {
      await axios.delete(
        `https://63dd9239df83d549cea335c5.mockapi.io/KevinsEndpoint/${id}`
      );
    } else {
      await axios.put(
        `https://63dd9239df83d549cea335c5.mockapi.io/KevinsEndpoint/${id}`,
        { name: tempText }
      );
    }
    refresh();
  };
  return (
    <div key={id} style={{ display: "flex", flexDirection: "row" }}>
      <input
        type="text"
        value={tempText}
        onChange={(e) => setTempText(e.target.value)}
      />
      <button onClick={() => makeChange(false)} label="Update">
        <p>Refresh</p>
      </button>
      <button onClick={() => makeChange(true)} label="delete">
        <p>Delete</p>
      </button>
    </div>
  );
};

export default Reservation;
