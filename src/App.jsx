import React, { useEffect, useState } from 'react';
import Campaigns from './Components/campaigns'

function App() {
  const [campaigns, setCampaigns] = useState(null);

  const fetchCampaigns = () => {
    fetch('/api/campaigns')
    .then((response) => response.json())
    .then((data) => setCampaigns(data));
  }

  useEffect(() => {
    fetchCampaigns()
  }, []);
  return <div>
    {campaigns? <Campaigns campaigns={campaigns} />: null}
  </div>;
}

export default App;
