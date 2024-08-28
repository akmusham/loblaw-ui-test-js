import React, { useEffect, useState } from "react";
import "./index.css";

function CampaignDashboard({ SelectedCampaign, setCampaign }) {
  const [campaignDetails, setCampaignDetails] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      // updateCounter()
      setCounter((prev) => prev + 1);
    }, 5000);
  }, [SelectedCampaign]);

  useEffect(() => {
    fetchCampaignDetails();
    console.log('huh??', counter);
  }, [counter]);

  const fetchCampaignDetails = () => {
    fetch(`/api/campaigns/${SelectedCampaign.id}?number=${counter}`)
      .then((response) => response.json())
      .then((data) => setCampaignDetails(data));
  };

  // const updateCounter = () => {
  //   setCounter((prev) => prev + 1);
  // }

  return (
    <div className="campaign-container">
      <div>
        <button onClick={() => setCampaign(null)}>{`< back`}</button>
        SelectedCampaign
        <br />
        <br />
        <br />
        {SelectedCampaign.name}
        {JSON.stringify(campaignDetails)}
      </div>
    </div>
  );
}

export default CampaignDashboard;
