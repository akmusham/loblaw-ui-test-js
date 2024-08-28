import React, { useEffect, useState } from 'react';
import './index.css'

function CampaignDashboard({SelectedCampaign, setCampaign}) {
    const [campaignDetails, setCampaignDetails] = useState({});
    const [counter, setCounter] = useState(0);
    const interval = 5000 // to invoke endpoint every 5 sec

    useEffect(()=>{
        setInterval(() => {
          fetchCampaignDetails()
          setCounter(counter + 1)
        }, interval);
    },[SelectedCampaign])

    const fetchCampaignDetails = () => {
        fetch(`/api/campaigns/${SelectedCampaign.id}?number=${counter}`)
        .then((response) => response.json())
        .then((data) => setCampaignDetails(data));
      }


  return (<div className='campaign-container'>
      <div>
        <button onClick={() => setCampaign(null)}>{`< back`}</button>
        SelectedCampaign
        <br />
        <br />
        <br />
        {SelectedCampaign.name}
        {JSON.stringify(campaignDetails)}
      </div>
  </div>)
}

export default CampaignDashboard;
