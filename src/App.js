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
          task: "Manual Task",
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
          task: "Manual Task",
          notes: "Ignore and solicit on"
        },
      ]
    },
  ])

  return (
    <div className="App">
      {/* for each appt, render time and list. */}
      <ApptList appts={appts} />
    </div>
  );
}

export default App;
