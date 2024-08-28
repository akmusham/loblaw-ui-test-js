import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const fetchCampaigns = () => {
    fetch('/api/campaigns')
    .then((response) => response.json())
    .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchCampaigns()
  }, []);

  return <div>
    { JSON.stringify(user) }
  </div>;
}

export default App;
