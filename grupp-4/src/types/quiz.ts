

export type AnserOption = {

    id: string;
    text: string;
};

export type Question = {
   id: string;
   question: string;
   options: AnserOption[];
   correctOptionId: string;
};