import react, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

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
      <div className="apptContainer">
        <div className="closeDrawer" onClick={toggleOpen}><i className="fas fa-chevron-left"></i></div>
        <ShowAppt appt={props.appt} id={props.id} style={props.style} open={open} toggleOpen={toggleOpen} handleDismiss={props.handleDismiss} />
      </div>
  )
}

export default ApptContainer;