export interface Date {
  value: any;
  agoDays(days: number): this;
  agoBusinessDays(days: number): this;
  businessDaysCount(
    startDate: globalThis.Date,
    endDate: globalThis.Date
  ): number;
  toUnixTimestamp(date: globalThis.Date): number;
}
