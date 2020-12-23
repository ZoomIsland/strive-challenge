import react, { useState } from 'react';

import ShowAppt from '../components/ShowAppt';

function ApptContainer(props) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <ShowAppt appt={props.appt} id={props.id} style={props.style} open={open} toggleOpen={toggleOpen} />
  )
}

export default ApptContainer;