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
    console.log("huh??", counter);
  }, [counter]);

  const fetchCampaignDetails = () => {
    fetch(`/api/campaigns/${SelectedCampaign.id}?number=${counter}`)
      .then((response) => response.json())
      .then((data) => setCampaignDetails(data));
  };

  // const updateCounter = () => {
  //   setCounter((prev) => prev + 1);
  // }

  const RenderThumbNails = ({campaignDetails}) => {
    return (
      <div className="dashboard-thumbnail-container">
        {campaignDetails
          ? Object.keys(campaignDetails).map((each, i) => {
              return (
                <div key={i} className="dashboard-thumbnail-card">
                  <div>
                    <h3>{campaignDetails[each]}</h3>
                  </div>
                  <span>
                    <h4 className="dashboard-thumbnail-desc">{each}</h4>
                  </span>
                </div>
              );
            })
          : null}
      </div>
    )
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button
          className="back-button"
          onClick={() => setCampaign(null)}
        >{`<`}</button>
        <h2>{SelectedCampaign.name}</h2>
      </div>
      <RenderThumbNails campaignDetails={campaignDetails} />
      <div className="graph-container">
        <div className="graph-wrapper">
          bar graph
        </div>
        <div className="graph-wrapper">
          line graph
        </div>
      </div>
    </div>
  );
}

export default CampaignDashboard;
