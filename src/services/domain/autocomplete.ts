export interface Autocomplete {
  get(query: string): Promise<AutocompleteGetResponse>;
}

export interface AutocompleteGetResponse {
  quotes: AutocompleteGetResponseQuotes;
  [key: string]: any;
}

type AutocompleteGetResponseQuotes = {
  symbol: string;
  [key: string]: any;
};
