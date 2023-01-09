export interface Search {
  get(query: string): Promise<SearchGetResponse>;
}

export interface SearchGetResponse {
  quotes: SearchGetResponseQuotes[];
  [key: string]: any;
}

type SearchGetResponseQuotes = {
  symbol: string;
  [key: string]: any;
};
