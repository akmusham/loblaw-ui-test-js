import React, { useEffect, useState } from "react";
import "../index.css";
import ThumbNailCard from "../common/thumbNailCard";
import { getCTR, getTotal } from '../utility/';

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
        data.ctr = getCTR(data.clicks, data.impressions);
        newCampaignDetails.unshift(data);
        setCampaignDetails(newCampaignDetails);
      });
  };

  const RenderThumbNails = () => {
    let data = getTotal(campaignDetails);
    return (
      <div className="dashboard-thumbnail-container">
        {data
          ? Object.keys(data).map((each, i) => {
              return (
                <ThumbNailCard key={i}>
                  <div>
                    <h3>{data[each]}</h3>
                  </div>
                  <span>
                    <h4 className="dashboard-thumbnail-desc">{each}</h4>
                  </span>
                </ThumbNailCard>
              );
            })
          : null}
      </div>
    );
  };

  const CampaignIterationsTable = () => {
    return (
      <>
        <h4>Most Recent on Top</h4>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Users</th>
              <th>CTR</th>
            </tr>
          </thead>
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
      </>
    );
  };

  const Header = () => {
    return (
      <>
        <button
          className="back-button"
          onClick={() => setCampaign(null)}
        >{`<`}</button>
        <h2>{SelectedCampaign.name}</h2>
      </>
    );
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Header />
      </div>
      {campaignDetails.length > 0 ? (
        <RenderThumbNails campaignDetails={campaignDetails} />
      ) : null}
      <div className="table-container">
        <CampaignIterationsTable />
      </div>
    </div>
  );
}

export default CampaignDashboard;
