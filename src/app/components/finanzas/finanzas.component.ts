import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css'],
})
export class FinanzasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      // Define the chart to be drawn.
      var data = google.visualization.arrayToDataTable([
        ['Dia', 'Soles', { role: 'style' }],
        ['Lunes', 1200, 'blue'],
        ['Martes', 900, 'red'],
        ['Miercoles', 880, 'green'],
        ['Jueves', 890, 'gray'],
        ['Viernes', 895, 'yellow'],
        ['Sabado', 890, 'brown'],
        ['Domingo', 900, 'purple'],
      ]);

      // Instantiate and draw the chart.
      var chart: any = new google.visualization.ColumnChart(
        document.getElementById('myColumnChart') as any
      );

      var options = { title: 'Ingreso en soles' };
      chart.draw(data, options);
    }
  }
}
