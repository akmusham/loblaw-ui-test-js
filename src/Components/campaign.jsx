import React, { useEffect, useState } from "react";
import "./index.css";

function Campaign({ campaign, handleOnCampaign }) {
  return (
    <div
      className="campaign-wrapper"
      onClick={() => handleOnCampaign(campaign.id)}
    >
      <span>{campaign.id + 1}</span>
      <span className="campaign-name">{campaign.name}</span>
      <span className="campaign-name">
        {new Date(campaign.date).toDateString()}
      </span>
      <span className="campaign-name">{campaign.description}</span>
    </div>
  );
}

export default Campaign;
