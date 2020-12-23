import react from 'react';

function ApptList(props) {
  const timeMap = props.appts.map((appt, index) => {
    return (
      <div className="timeContainer" key={index}>
        <h2>{appt.time}</h2>
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