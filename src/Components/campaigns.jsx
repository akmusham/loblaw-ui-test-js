import React, { useEffect, useState } from "react";
import "./index.css";
import Campaign from "./campaign";
import CampaignDashboard from "./campaignDashboard";

function Campaigns({ campaigns }) {
  const [SelectedCampaign, setCampaign] = useState(null);

  const handleOnCampaign = (id) => {
    setCampaign(campaigns[id]);
  };

  return (
    <div className="campaign-container">
      {SelectedCampaign ? (
        <CampaignDashboard
          SelectedCampaign={SelectedCampaign}
          setCampaign={setCampaign}
        />
      ) : (
        <>
          <h2>CAMPAIGNS</h2>
          {campaigns.map((each, index) => {
            return (
              <Campaign
                key={index}
                campaign={each}
                handleOnCampaign={handleOnCampaign}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default Campaigns;
