export interface Chart {
  get(query: string): Promise<ChartGetResponse>;
}

export type ChartGetResponse = ChartGetResponseItem[];

type ChartGetResponseItem = {
  'adj close': string;
  close: string;
  date: string;
  high: string;
  low: string;
  open: string;
  volume: string;
};
