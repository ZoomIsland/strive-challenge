import react from 'react';

function ShowAppt(props) {
  const icon = () => {
    if (props.appt.task === "Call") {
      return "call"
    }
  }
  return (
    <div className="apptShow">
      <div className="icon">
        {props.appt.task === "Call" && <p>Call</p>}
      </div>
      <div className="touchDetail">
        <h3>{props.appt.touchpoint} | {props.appt.notes}</h3>
  <h4>{props.appt.task} {props.appt.task === "Manual task" && <span className="taskJoiner">with</span>} {props.appt.client}</h4>
      </div>
      <div className="respBtns">
        <button className="confirm">check</button>
        <button className="deny">x</button>
      </div>
      <div className="pushOver">
        >
      </div>
    </div>
  )
}

export default ShowAppt;