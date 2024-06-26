export interface ICard {
  id: string;
  name: string;
  color: string;
}

export const initialCards: ICard[] = [
  { id: "1", name: "Card 1", color: "white" },
  { id: "2", name: "Card 2", color: "white" },
  { id: "3", name: "Card 3", color: "white" },
  { id: "4", name: "Card 4", color: "white" },
  { id: "5", name: "Card 5", color: "white" },
  { id: "6", name: "Card 6", color: "white" },
];

export const colors: string[] = ["red", "pink", "yellow"];
