export interface HttpGet<T> {
  get(url: string, props?: RequestInit): Promise<T>;
}
