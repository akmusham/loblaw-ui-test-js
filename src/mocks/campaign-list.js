export function getCampaigns() {
  let campaigns = [
    { id: 0, name: "Red" },
    { id: 1, name: "Green" },
    { id: 2, name: "Blue" },
    { id: 3, name: "Yellow" },
    { id: 4, name: "Purple" },
    { id: 5, name: "Orange" },
  ];
  return campaigns.map((campaign) => ({
    ...campaign,
    date: new Date().toISOString(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim ullamcorper felis, id vehicula sem fringilla vitae. Pellentesque feugiat volutpat neque.",
  }));
}
