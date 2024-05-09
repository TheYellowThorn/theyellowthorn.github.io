---
category: Events
header: Events
title: 'ColumnResizeEvent'
page: 'api'
layout: null
---

#### Version Available: `All Versions`

```typescript
import { ColumnResizeEvent } from '@transunion-ui/tablejs';
```

#### Description:

Emits a ColumnResizeEvent every time the mouse moves during column resize. The ColumnResizeEvent contains the following data:

### Types:

| Type          |
| ------------- |
| **ON_RESIZE** : `string` = 'onResize' 
| `[read-only]` event that triggers when a column is being resized. |
{: .single-column }

| Property      | Description   |
| ------------- | ------------- |
| **columnMinWidth** : `number` | Contains the minimum width value of the column during resize. |
| **columnWidth** : `number` | Contains the current width of the column during resize. |
| **pointerEvent** : `any` | Holds details of the users actions in the browser through a PointerEvent. |
| **type** : `string` | `ColumnResizeEvent.ON_RESIZE` |
| **classesBeingResized** : `string[]` | An array that holds all classes currently being resized. |

<br/>

| Type          |
| ------------- |
| **ON_RESIZE_START** : `string` = 'onResizeStart' 
| `[read-only]` event that triggers when at the start of a column resize. |
{: .single-column }

| Property      | Description   |
| ------------- | ------------- |
| **columnMinWidth** : `number` | Contains the minimum width value of the column at the start of the resize. |
| **columnWidth** : `number` | Contains the current width of the column at the start of the resize. |
| **pointerEvent** : `any` | Holds details of the users actions in the browser through a PointerEvent. |
| **type** : `string` | `ColumnResizeEvent.ON_RESIZE_START` |
| **classesBeingResized** : `string[]` | An array that holds all classes about to be resized. |

<br/>

| Type          |
| ------------- |
| **ON_RESIZE_END** : `string` = 'onResizeEnd' 
| `[read-only]` event that triggers when a column is finished being resized. |
{: .single-column }

| Property      | Description   |
| ------------- | ------------- |
| **columnMinWidth** : `number` | Contains the minimum width value of the column at the end of the resize. |
| **columnWidth** : `number` | Contains the current width of the column at the end of the resize. |
| **pointerEvent** : `any` | Holds details of the users actions in the browser through a PointerEvent. |
| **type** : `string` | `ColumnResizeEvent.ON_RESIZE_END` |
| **classesBeingResized** : `string[]` | An array that holds all classes that were just resized. |

<br/>

### Usage:

The `HTML` example below is assigning each of the three event emitters below and declaring the functions that will be called when each of these events is triggered. An event object is being passed to each of these functions.

#### Event Emitters:

`(columnResizeStart)` emits an event at the start of the column resize.

`(columnResize)` emits an event when a column is being resized.

`(columnResizeEnd)` emits an event when a column is finished resizing. 

```html
<tablejs-grid 
    (columnResizeStart)="columnResizeStart($event)"
    (columnResize)="columnResize($event)"
    (columnResizeEnd)="columnResizeEnd($event)"
  > </tablejs-grid>
```

The `Typescript` below declares the functions that will catch each of the resize events.

```typescript
columnResizeStart(e: ColumnResizeEvent) {
    console.log('column resize started: \n', e);
}
columnResize(e: ColumnResizeEvent) {
    console.log('column resizing: \n', e);
}
columnResizeEnd(e: ColumnResizeEvent) {
    console.log('column resize ended: \n', e);
}
```

<br/>
