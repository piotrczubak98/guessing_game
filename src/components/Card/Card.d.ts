export type CardProps = {
  cardNumber: number;
  side?: 'front' | 'back';
  onClick: () => void;
};
