export type Props = {
  icon: Icon;
  value?: Data;
  onPressPlus: ({ materialId, quantityUsed }: Data) => void;
};

export type Data = {
  materialId: string;
  quantityUsed: string;
  label: string
};

export type Icon = 'plus' | 'minus';
