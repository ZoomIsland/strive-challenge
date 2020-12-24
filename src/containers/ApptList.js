import react from 'react';

import ApptContainer from './ApptContainer';

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
        {timeSlot.appts.map((appt, apptIndex) => <ApptContainer appt={appt} key={apptIndex} id={`time${timeIndex}appt${apptIndex}`} style={getStyle(apptIndex, timeSlot.appts.length)} handleDismiss={props.handleDismiss} />
        )}
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