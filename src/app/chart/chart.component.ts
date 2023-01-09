import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartService } from 'src/services/data/chart.service';
import { DateService } from 'src/services/data/date.service';
import { ChartGetResponse } from 'src/services/domain/chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  symbol = '';
  dataSource = [];
  displayedColumns = ['index', 'date', 'open', 'close'];
  isLoading = false;

  constructor(
    private chartService: ChartService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((params) => {
      this.symbol = params['symbol'];
    });
  }

  async ngOnInit() {
    this.isLoading = true;
    const data = await this.loadData();
    this.dataSource = await this.handleData(data);
    this.isLoading = false;
  }

  async loadData() {
    const period1 = new DateService().agoBusinessDays(30).toUnixTimestamp();
    const period2 = new DateService().toUnixTimestamp();
    return await this.chartService.get(
      `${this.symbol}?period1=${period1}&period2=${period2}&intertrval=1d&events=history`
    );
  }

  async handleData(data: ChartGetResponse): Promise<any> {
    return new Promise((resolve) => {
      resolve(
        data.reverse().map(({ date, open, close }, i) => ({
          index: i + 1,
          date: new Date(date).toLocaleDateString('pt-BR'),
          open: parseFloat(open).toFixed(2),
          close: parseFloat(close).toFixed(2),
        }))
      );
    });
  }
}
