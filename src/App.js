import react, { useState } from 'react';

import ApptList from'./containers/ApptList';

import './App.css';

function App() {
  // consider setting this from ComponentDidMount to get closer to API pull
  const [appts, setAppts] = useState([
    {
      time: "9:00 - 10:00a",
      appts: [
        {
          client: "Avni Submaranian",
          touchpoint: 3,
          task: "Call",
          notes: "Inbound NY"
        },
        {
          client: "Malik Simpson",
          touchpoint: 4,
          task: "Manual task",
          notes: "Rekindling ancient embers"
        },
        {
          client: "Javroni F. Myers",
          touchpoint: 3,
          task: "Call",
          notes: "Shaming bottom-feeders"
        },
      ]
    },
    {
      time: "11:15a - 12:00p",
      appts: [
        {
          client: "Yvette Mok",
          touchpoint: 1,
          task: "LinkedIn message",
          notes: "Ignore and solicit on"
        },
        {
          client: "Xavier St. D'Augustine",
          touchpoint: 1,
          task: "Manual task",
          notes: "Ignore and solicit on"
        },
      ]
    },
  ])

  const handleDismiss = (e) => {
    e.stopPropagation();
    console.log(e.target.id)
    // find where appt begins (and therefore the time array ends)
    let apptStart = e.target.id.indexOf("appt");
    // parse individual values for target
    let timeValue = parseInt(e.target.id.substring(4, apptStart));
    let apptValue = parseInt(e.target.id.substring(apptStart+4, e.target.id.length));

    // dupe array
    let apptsToChange = [...appts];
    // target array based on timeValue
    apptsToChange[timeValue].appts.splice(apptValue, 1);
    //update state
    setAppts(apptsToChange);
  }

  return (
    <div className="App">
      {/* for each appt, render time and list. */}
      <ApptList appts={appts} handleDismiss={handleDismiss} />
    </div>
  );
}

export default App;
