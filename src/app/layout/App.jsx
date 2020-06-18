import React from 'react';

import NavBar from '../../features/nav/NavBar/NavBar';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </React.Fragment>
  );
}

export default App;
