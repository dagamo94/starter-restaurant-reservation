import React, {useState} from "react";
import {useHistory} from "react-router-dom";

function ReservationForm(){
    const INITIAL_FORM_STATE = {
        first_name: "",
        last_name: "",
        mobile_number: "",
        reservation_date: "",
        reservation_time: "",
        people: 0
    }

    const [formData, setFormData] = useState({...INITIAL_FORM_STATE});
    const [errors, setErrors] = useState([]);
    const history = useHistory();


    const handleChange = event => {
        const {target} = event;
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        setFormData({...INITIAL_FORM_STATE});
        history.push(`/dashboard?date=${formData.reservation_date}`);
    }

    return (
        <form name="reservation" onSubmit={(handleSubmit)}>
            <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    required
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.first_name}
                    className="form-control"
                />
                <label htmlFor="last_name">Last Name</label>
                <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    required
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.last_name}
                    className="form-control"
                />
                <label htmlFor="mobile_number">Mobile Number</label>
                <input
                    id="mobile_number"
                    name="mobile_number"
                    type="text"
                    required
                    placeholder="###-###-####"
                    onChange={handleChange}
                    value={formData.mobile_number}
                    className="form-control"
                />
                <label htmlFor="reservation_date">Reservation Date</label>
                <input
                    id="reservation_date"
                    name="reservation_date"
                    type="date"
                    required
                    placeholder="YYYY-MM-DD"
                    pattern ="\d{4}-\d{2}-\d{2}"
                    onChange={handleChange}
                    value={formData.reservation_date}
                    className="form-control"
                />
                <label htmlFor="reservation_time">Reservation Time</label>
                <input
                    id="reservation_time"
                    name="reservation_time"
                    type="time"
                    required
                    placeholder="HH:MM"
                    pattern="[0-9]{2}:[0-9]{2}"
                    onChange={handleChange}
                    value={formData.reservation_time}
                    className="form-control"
                />
                <label htmlFor="people">People</label>
                <input
                    id="people"
                    name="people"
                    type="number"
                    min="1"
                    step="1"
                    placeholder={formData.people}
                    onChange={handleChange}
                    value={formData.people}
                    className="form-control"
                    required
                />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
            <button className="btn btn-danger" type="cancel" onClick={() => history.go(-1)}>Cancel</button>
        </form>
    )
}

export default ReservationForm;