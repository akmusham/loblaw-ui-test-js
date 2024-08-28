import React, { useEffect, useState } from 'react';
import './index.css'

function CampaignDashboard({SelectedCampaign, setCampaign}) {
    const [campaignDetails, setCampaignDetails] = useState(null);

    useEffect(()=>{
        fetchCampaignDetails()
    },[SelectedCampaign])

    const fetchCampaignDetails = () => {
        fetch(`/api/campaigns/${SelectedCampaign.id}`)
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
