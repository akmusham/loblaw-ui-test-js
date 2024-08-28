import React, { useEffect, useState } from "react";
import "./index.css";

function CampaignDashboard({ SelectedCampaign, setCampaign }) {
  const [campaignDetails, setCampaignDetails] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 5000);
  }, [SelectedCampaign]);

  useEffect(() => {
    fetchCampaignDetails();
  }, [counter]);

  const fetchCampaignDetails = () => {
    fetch(`/api/campaigns/${SelectedCampaign.id}?number=${counter}`)
      .then((response) => response.json())
      .then((data) => {
        let newCampaignDetails = [...campaignDetails];
        data.ctr = getCTR(data.clicks, data.impressions)
        newCampaignDetails.push(data);
        setCampaignDetails(newCampaignDetails);
      });
  };

  const getCTR = (clicks, impressions) => {    
    return (clicks / impressions) * 100;
  };

  const getTotal = (campaignDetails) => {
    return {
      impressions: campaignDetails.reduce((acc, cur) => acc + cur.impressions, 0),
      clicks: campaignDetails.reduce((acc, cur) => acc + cur.clicks, 0),
      users: campaignDetails.reduce((acc, cur) => acc + cur.users, 0),
      ctr: campaignDetails.reduce((acc, cur) => acc + cur.ctr, 0).toFixed(),
    };
  };

  const RenderThumbNails = () => {
    let data = getTotal(campaignDetails);
    return (
      <div className="dashboard-thumbnail-container">
        {data
          ? Object.keys(data).map((each, i) => {
              return (
                <div key={i} className="dashboard-thumbnail-card">
                  <div>
                    <h3>{data[each]}</h3>
                  </div>
                  <span>
                    <h4 className="dashboard-thumbnail-desc">{each}</h4>
                  </span>
                </div>
              );
            })
          : null}
      </div>
    );
  };

  console.log(campaignDetails, "campaignDetailscampaignDetails");

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button
          className="back-button"
          onClick={() => setCampaign(null)}
        >{`<`}</button>
        <h2>{SelectedCampaign.name}</h2>
      </div>
      {campaignDetails.length > 0 ? (
        <RenderThumbNails campaignDetails={campaignDetails} />
      ) : null}
      <div className="table-container">
        <table>
          <tr>
            <th>No</th>
            <th>Impressions</th>
            <th>Clicks</th>
            <th>Users</th>
            <th>CTR</th>
          </tr>
          <tbody>
            {campaignDetails.map((each, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{each.impressions}</td>
                  <td>{each.clicks}</td>
                  <td>{each.users}</td>
                  <td>{getCTR(each.clicks, each.impressions).toFixed()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CampaignDashboard;
