import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { BarItem } from '@model/bar-item';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-chart-pie',
  template: `<div echarts [options]="options" class="echart"></div>`,
})
export class ChartPieComponent implements AfterViewInit, OnDestroy {

  @Input()
  public itens: BarItem[];
  public options: any = {};
  public themeSubscription: any;

  constructor(private theme: NbThemeService) {

  }

  ngAfterViewInit() {
    console.log()
    console.log(this.itens[0].name)
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },

        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.itens.map(i => i.name),
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Valores',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.itens.map((item) => ({value: item.value, name: item.name})),
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
