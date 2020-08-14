import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { ChartMonObjectListStateService } from '../../services/chart-mon-object-list-state.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.sass']
})
export class GraphsComponent implements OnInit {

  view: any[] = undefined;

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Sales';

  colorScheme = {
    domain: ['#f44336', '#9C27B0', '#3F51B5', '#03A9F4', '#009688', '#8BC34A']
  };
  curves = {
    Basis: shape.curveBasis,
    BasisClosed: shape.curveBasisClosed,
    Cardinal: shape.curveCardinal,
    CardinalClosed: shape.curveCardinalClosed,
    CatmullRom: shape.curveCatmullRom,
    CatmullRomClosed: shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    LinearClosed: shape.curveLinearClosed,
    MonotoneX: shape.curveMonotoneX,
    MonotoneY: shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    StepAfter: shape.curveStepAfter,
    StepBefore: shape.curveStepBefore,
    default: shape.curveLinear
  };


  shape: shape;
  multi2: any;
  multi2Color: any = {
    domain: ['#f44336', '#9C27B0', '#3F51B5', '#03A9F4', '#009688', '#8BC34A']
  };
  horizontalBar: any;
  horizontalBarColor: any = {
    domain: ['#f44336', '#9C27B0', '#3F51B5', '#03A9F4', '#009688', '#8BC34A']
  };
  constructor(private chartMonObjectListStateService: ChartMonObjectListStateService) {
  }

  ngOnInit() {
    this.getGraphData();
  }

  getGraphData() {
    this.chartMonObjectListStateService.get([66, 67, 68, 69, 123]).subscribe(data => {
      console.log(data);
      // @ts-ignore
      this.multi2 = data.series;
      // @ts-ignore
      this.multi2Color = {domain: data.color};
    });

    this.chartMonObjectListStateService.get([66, 67, 68, 69, 70, 123]).subscribe(data => {
      // console.log(data);
      // @ts-ignore
      this.horizontalBar = data.series;
      // @ts-ignore
      this.horizontalBarColor = {domain: data.color};
    });
  }

}
