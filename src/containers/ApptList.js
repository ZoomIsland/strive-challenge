import react from 'react';

import ApptContainer from './ApptContainer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function ApptList(props) {
  function getStyle(index, length) {
    if (index === 0) {
      return {
        borderRadius: "10px 10px 0px 0px",
      }
    } else if (index === length - 1) {
      return {
        borderRadius: "0px 0px 10px 10px",
      }
    } else {
      return {
        borderRadius: "0px",
      }
    }
  }

  const timeMap = props.appts.map((timeSlot, timeIndex) => {
    return (
      <div className="timeContainer" key={timeIndex}>
        <h2>{timeSlot.time}</h2>
        <TransitionGroup>
          {timeSlot.appts.map((appt, apptIndex) => {
            return (
              <CSSTransition
                timeout={350}
                classNames="appt"
                key={appt.id}
                unmountOnExit>
                <ApptContainer appt={appt} id={`time${timeIndex}appt${apptIndex}`} style={getStyle(apptIndex, timeSlot.appts.length)} handleDismiss={props.handleDismiss} />
              </CSSTransition>
            )}
          )}
        </TransitionGroup>
      </div>
    )
  })

  return(
    <div className="apptList">
        {timeMap}
    </div>
  )
}

export default ApptList;