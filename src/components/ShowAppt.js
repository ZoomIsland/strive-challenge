import react from 'react';

import './ShowAppt.css';

function ShowAppt(props) {
  const getKeyword = () => {
    if (props.appt.task === "Call") {
      return "call";
    } else {
      return "reach out to";
    }
  }

  const getIcon = () => {
    switch(props.appt.task) {
      case "Call":
        return <i className="fas fa-phone-alt"></i>;
      case "Manual task":
        return <i className="fab fa-linkedin"></i>;
      case "LinkedIn message":
        return <i className="fab fa-linkedin"></i>;
    }
  }

  return (
    <div className={"apptShow " + (props.open ? "openAppt" : "")} style={props.style} onClick={props.toggleOpen}>
      <div className="icon">
        {getIcon()}
      </div>
      {!props.open && 
        <div className="touchDetail">
          <h3>Touch {props.appt.touchpoint} | {props.appt.notes}</h3>
          <h4>{props.appt.task} {props.appt.task === "Manual task" && <span className="taskJoiner">with</span>} {props.appt.client}</h4>
        </div>
      }
      {props.open && 
        <div className="touchQuestion">
          <h4>Did you {getKeyword()} {props.appt.client}?</h4>
        </div>
      }
      <div className="respBtns">
        <div className="deny"><i className="fas fa-times"></i></div>
        <div className="confirm" onClick={()=>props.handleDismiss(props.id)}><i className="fas fa-check"></i></div>
      </div>
      <div className="pushOver">
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default ShowAppt;