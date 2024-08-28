import React, { useEffect, useState } from "react";
import "../index.css";

function Campaign({ campaign, handleOnCampaign }) {
  return (
    <div
      className="campaign-wrapper"
      onClick={() => handleOnCampaign(campaign.id)}
    >
      <span className="campaign-header">
        <span className="campaign-name">{campaign.name}</span>
        <span className="campaign-date">
          {new Date(campaign.date).toDateString()}
        </span>
      </span>
      <div className="campaign-description">{campaign.description}</div>
    </div>
  );
}

export default Campaign;
