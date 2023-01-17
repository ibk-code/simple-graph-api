export const paths = {
  SAS: [
    {
      from: 1,
      to: 2,
    },
  ],
  SPS: [
    {
      from: 2,
      to: 3,
    },
  ],
  RUS: [
    {
      from: 3,
      to: 4,
    },
  ],
  RPS: [
    { from: 4, to: 2 },
    { from: 5, to: 2 },
  ],
  RAS: [
    { from: 4, to: 5 },
    { from: 5, to: 1 },
  ],
  RPB: [{ from: 4, to: 5 }],
};
