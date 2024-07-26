export type TyphoonCardType = {
  id: number;
  question: string;
  points: number;
  value: keyof typeof TyphoonCardValues;
};

export const TyphoonCardValues = {
  onePoint: "+1 Point",
  twoPoints: "+2 Points",
  threePoints: "+3 Points",
};
