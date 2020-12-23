import react from 'react';

import ShowAppt from '../components/ShowAppt';

function ApptList(props) {
  const timeMap = props.appts.map((timeSlot, timeIndex) => {
    return (
      <div className="timeContainer" key={timeIndex}>
        <h2>{timeSlot.time}</h2>
        {timeSlot.appts.map((appt, apptIndex) => <ShowAppt appt={appt} key={apptIndex} />
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