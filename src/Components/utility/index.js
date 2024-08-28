export const getCTR = (clicks, impressions) => {
    return (clicks / impressions) * 100;
  };

export const getTotal = (campaignDetails) => {
    const initialTotals = {
        impressions: 0,
        clicks: 0,
        users: 0,
        ctr: 0,
      };
  
      const totals = campaignDetails.reduce((acc, { impressions, clicks, users, ctr }) => {
        return {
          impressions: acc.impressions + impressions,
          clicks: acc.clicks + clicks,
          users: acc.users + users,
          ctr: acc.ctr + ctr,
        };
      }, initialTotals);

      return {
        ...totals,
        ctr: (totals.ctr / campaignDetails.length).toFixed(2)
      };
  };
