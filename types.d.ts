interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    total_copies: number;
    avaible_copies: number;
    description: string;
    coler: string;
    cover: string;
    video: string;
    summary: string;
    isLoanedBook?: boolean;
}