import { Component } from '@angular/core';
import { GanttDependency } from '@progress/kendo-angular-gantt';
import { Task, tasks, dependencies } from './hierarchical-data';


@Component({
  selector: 'my-app',
  template: `
      <kendo-gantt
          [style.height.px]="500"
          [kendoGanttHierarchyBinding]="data"
          childrenField="subtasks"
          kendoGanttExpandable
          [initiallyExpanded]="true"
          [dependencies]="dependencies"
          [filterable]="true"
          [sortable]="true"
          [columnMenu]="true"
          [columnsResizable]="true"
          [columnsReorderable]="true"
      >
          <kendo-gantt-column
              field="title"
              title="Task"
              [width]="200"
              [expandable]="true"
          >
          </kendo-gantt-column>
          <kendo-gantt-column-group title="Estimation">
              <kendo-gantt-column
                  field="start"
                  title="Start"
                  format="dd-MMM-yyyy"
                  [width]="120"
                  filter="date"
              ></kendo-gantt-column>
              <kendo-gantt-column
                  field="end"
                  title="End"
                  format="dd-MMM-yyyy"
                  [width]="120"
                  filter="date"
              > </kendo-gantt-column>
          </kendo-gantt-column-group>
          <kendo-gantt-timeline-day-view></kendo-gantt-timeline-day-view>
          <kendo-gantt-timeline-week-view></kendo-gantt-timeline-week-view>
          <kendo-gantt-timeline-month-view></kendo-gantt-timeline-month-view>
      </kendo-gantt>
  `
})
export class AppComponent {
  public data: Task[] = tasks;
  public dependencies: GanttDependency[] = dependencies;
}
