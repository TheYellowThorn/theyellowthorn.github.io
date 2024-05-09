---
title: 'Event Handling'
category: Examples
subcategory: Events
page: 'examples'
layout: null
---

## Implementation

For event handling, we will continue developing our table from the <a href="./#/getting-started">Getting Started</a> section. We will utilize the `CSS` classes added in the previous <a href="./#/resize-in-pixels">Resize in Pixels</a> and <a href="./#/reorder">Reorder</a> examples above.

```html
<tablejs-grid [resizeColumnWidthByPercent]="true">
  <table>
    <thead>
      <tr tablejsGridRow>
        <th tablejsDataColClasses="name">
          <div>Name</div>
        </th>
        <th tablejsDataColClasses="item">
          <div>Purchase</div>
        </th>
      </tr>
    </thead>

    <tbody tablejsViewport>
      <tr *ngFor="let purchase of purchases" tablejsGridRow>
        <td>
          <div tablejsDataColClass="name" initialWidth="30%">
          {% raw  %}{{ purchase.name }}{% endraw  %}
          </div>
        </td>
        <td>
          <div tablejsDataColClass="item" initialWidth="70%">
          {% raw  %}{{ purchase.item }}{% endraw  %}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</tablejs-grid>
```

To enable event handling, we will need to first reintroduce the `resizableGrip`, `reorderGrip`, and `reorderCol` directives. These allow users access to the resize and reorder functionality. Let's begin by adding the `reorderCol` directive to each of our `th` tags. This will enable reorder and resize functionality. Next we will place `reorderGrip` directives on any element that we want to use as a reorder handle for the user. In this case, we are adding the directive to the `<i class="fas fa-ellipsis-v"></i>` tags. We do the same thing with the `resizableGrip` to provide a handle for resizing. These are placed on the `<i class="fas fa-sort resize"></i>` tags.

```html
<tablejs-grid [resizeColumnWidthByPercent]="true">
  <table>
    <thead>
      <tr tablejsGridRow>
        <th tablejsDataColClasses="name" reorderCol>
          <div>
            <i class="fas fa-ellipsis-v" reorderGrip></i>
            Name
            <i class="fas fa-sort resize" resizableGrip></i>
          </div>
        </th>
        <th tablejsDataColClasses="item" reorderCol>
          <div>
            <i class="fas fa-ellipsis-v" reorderGrip></i>
            Purchase
            <i class="fas fa-sort resize" resizableGrip></i>
          </div>
        </th>
      </tr>
    </thead>

    <tbody tablejsViewport>
      <tr *ngFor="let purchase of purchases" tablejsGridRow>
        <td>
          <div tablejsDataColClass="name" initialWidth="30%">
          {% raw  %}{{ purchase.name }}{% endraw  %}
          </div>
        </td>
        <td>
          <div tablejsDataColClass="item" initialWidth="70%">
          {% raw  %}{{ purchase.item }}{% endraw  %}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</tablejs-grid>
```

Next, we will assign some `CSS` for our reorder and resize handles. 

```scss
.fa-sort.resize {
  transform: rotate(90deg);
  position: absolute;
  right: 12px;
  top: 10px;
  cursor: pointer;
}

.fa-ellipsis-v {
  position: absolute;
  left: 12px;
  top: 10px;
  cursor: pointer;
}
```

Now that we have the visualization set up, we can start adding an event [Output](https://angular.io/api/core/Output) to catch the event when the user starts resizing a column. Let's place a `columnResizeStart` `Output` on our `tablejs-grid` element to catch the event when the user begins resizing a column.  We need to declare a function to catch the event.  In this case, we will name our function `columnResizeStart` and pass in the `$event` object.

```html
<tablejs-grid 
  [resizeColumnWidthByPercent]="true"
  (columnResizeStart)="columnResizeStart($event)">
  <table> ... </table>
</tablejs-grid>
```

The function below is the function supplied to our `HTML` template that catches the `ColumnResizeEvent` that is fired when the user starts resizing a column.

```typescript
columnResizeStart(e: ColumnResizeEvent) {
  console.log('column resize started: \n', e);
}
```

We employ the same technique to catch the events triggered while the user is resizing the column. Add the `columnResize` [Output](https://angular.io/api/core/Output) to our template file with a function with the same name.  This function will be called when each resize event is triggered.

```html
<tablejs-grid 
  [resizeColumnWidthByPercent]="true"
  (columnResizeStart)="columnResizeStart($event)"
  (columnResize)="columnResize($event)">
  <table> ... </table>
</tablejs-grid>
```

The function below will catch every column resize event.

```typescript
columnResize(e: ColumnResizeEvent) {
  console.log('column resizing: \n', e);
}
```

We have implemented catching the resize start and resize events. Let's add one more event handler for catching the resize end event. Add the `columnResizeEnd` [Output](https://angular.io/api/core/Output) with a corresponding function to catch the resize column end event.

```html
<tablejs-grid 
  [resizeColumnWidthByPercent]="true"
  (columnResizeStart)="columnResizeStart($event)"
  (columnResize)="columnResize($event)"
  (columnResizeEnd)="columnResizeEnd($event)">
  <table> ... </table>
</tablejs-grid>
```

Let's place the columnResizeEnd function in the `Typescript` to catch the column resize end event.

```typescript
columnResizeEnd(e: ColumnResizeEvent) {
  console.log('column resize ended: \n', e);
}
```

We use the same implementation for catching column reordering events as we do for column resizing events. Let's start by adding `columnReorderStart` to our template and pass a function for catching the reorder start event.

```html
<tablejs-grid 
  [resizeColumnWidthByPercent]="true"
  (columnReorderStart)="columnReorderStart($event)">
  <table> ... </table>
</tablejs-grid>
```

Then we place our `columnReorderStart` function in the `Typescript` to catch when reordering begins.  A `ColumnReorderEvent` object will be emitted into our function when column reordering begins.

```typescript
columnReorderStart(e: ColumnReorderEvent) {
  console.log('column reorder started: \n', e);
}
```

Next, we add `columnReorder` to handle when the user is moving the column around during reorder.

```html
<tablejs-grid 
  [resizeColumnWidthByPercent]="true"
  (columnReorderStart)="columnReorderStart($event)"
  (columnReorder)="columnReorder($event)">
  <table> ... </table>
</tablejs-grid>
```

Again, we will include a function in our `Typescript` to catch the reorder event.

```typescript
columnReorder(e: ColumnReorderEvent) {
  console.log('column reordering: \n', e);
}
```

Finally, we want to catch the column reorder end event. We will add one final [Output](https://angular.io/api/core/Output) to our `tablejs-grid` element. We add `columnReorderEnd` to catch when a user completes reordering a column, and give it a function to catch this event in the `Typescript`.

```html
<tablejs-grid 
  [resizeColumnWidthByPercent]="true"
  (columnReorderStart)="columnReorderStart($event)"
  (columnReorder)="columnReorder($event)"
  (columnReorderEnd)="columnReorderEnd($event)">
  <table> ... </table>
</tablejs-grid>
```

The function below will catch all the events fired for when the user completes a column reorder.

```typescript
columnReorderEnd(e: ColumnReorderEvent) {
  console.log('column reorder ended: \n', e);
}
```

And below is our full `HTML` event method implementation.

```html
<tablejs-grid 
  [resizeColumnWidthByPercent]="true"
  (columnResizeStart)="columnResizeStart($event)"
  (columnResize)="columnResize($event)"
  (columnResizeEnd)="columnResizeEnd($event)"
  (columnReorderStart)="columnReorderStart($event)"
  (columnReorder)="columnReorder($event)"
  (columnReorderEnd)="columnReorderEnd($event)">
  <table>
    <thead>
      <tr tablejsGridRow>
        <th tablejsDataColClasses="name" reorderCol>
          <div>
            <i class="fas fa-ellipsis-v" reorderGrip></i>
            Name
            <i class="fas fa-sort resize" resizableGrip></i>
          </div>
        </th>
        <th tablejsDataColClasses="item" reorderCol>
          <div>
            <i class="fas fa-ellipsis-v" reorderGrip></i>
            Purchase
            <i class="fas fa-sort resize" resizableGrip></i>
          </div>
        </th>
      </tr>
    </thead>

    <tbody tablejsViewport>
      <tr *ngFor="let purchase of purchases" tablejsGridRow>
        <td>
          <div tablejsDataColClass="name" initialWidth="30%">
          {% raw  %}{{ purchase.name }}{% endraw  %}
          </div>
        </td>
        <td>
          <div tablejsDataColClass="item" initialWidth="70%">
          {% raw  %}{{ purchase.item }}{% endraw  %}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</tablejs-grid>
```

With all our resize and reorder [Outputs](https://angular.io/api/core/Output) defined, our `Typescript` should look like the following:

```typescript
import { ColumnResizeEvent, ColumnReorderEvent } from '@tablejs/community';

export class EventHandling {
  columnResizeStart(e: ColumnResizeEvent) {
    console.log('column resize started: \n', e);
  }
  columnResize(e: ColumnResizeEvent) {
    console.log('column resizing: \n', e);
  }
  columnResizeEnd(e: ColumnResizeEvent) {
    console.log('column resize ended: \n', e);
  }

  columnReorderStart(e: ColumnReorderEvent) {
    console.log('column reorder started: \n', e);
  }
  columnReorder(e: ColumnReorderEvent) {
    console.log('column reordering: \n', e);
  }
  columnReorderEnd(e: ColumnReorderEvent) {
    console.log('column reorder ended: \n', e);
  }
}
```

That's it!  You have now implemented event handling functionality.

<h3>Example of resize and reorder event handling</h3>
<div>Open <a href="https://stackblitz.com/edit/tablejs-events" target="_blank">Example</a> in StackBlitz <a href="https://stackblitz.com/edit/tablejs-events" target="_blank"><i class="fas fa-external-link-alt"></i></a></div><p></p>
<iframe width="100%" height="350px" src="https://stackblitz.com/edit/tablejs-events?ctl=1&embed=1&file=src/app/app.component.ts&hideExplorer=1&hideNavigation=1&theme=light&view=preview"></iframe>