interface Section {
  sectionName: string;
  sectionId: number;
  sectionColor: string;
  cards: Card[];
  handleDragOver: Function;
  handleDrop: Function;
  handleDragStart: Function;
  handleDragEnd: Function;
  handleCloseCb?: Function;
}

interface Card {
  id: number;
  title: string;
  content: string;
  avatar: string;
  dateTime: string | Date;
  section: string;
}

export type { Section, Card };
