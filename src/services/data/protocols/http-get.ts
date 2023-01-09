export interface HttpGet {
  get(url: string, props?: RequestInit): Promise<Response>;
}
