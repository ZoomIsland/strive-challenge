import react from 'react';

import './ShowAppt.css';

function ShowAppt(props) {
  return (
    <div className={"apptShow " + (props.open ? "openAppt" : "")} style={props.style} onClick={props.toggleOpen}>
      <div className="icon">
        {props.appt.task === "Call" && <i className="fas fa-phone-alt"></i>}
        {props.appt.task === "Manual task" && <i className="fab fa-linkedin"></i>}
        {props.appt.task === "LinkedIn message" && <i className="fab fa-linkedin"></i>}
      </div>
      <div className="touchDetail">
        <h3>Touch {props.appt.touchpoint} | {props.appt.notes}</h3>
        <h4>{props.appt.task} {props.appt.task === "Manual task" && <span className="taskJoiner">with</span>} {props.appt.client}</h4>
      </div>
      <div className="respBtns">
        <div className="confirm"><i className="fas fa-check"></i></div>
        <div className="deny"><i className="fas fa-times"></i></div>
      </div>
      <div className="pushOver">
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default ShowAppt;