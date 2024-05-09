---
category: Events
title: 'ColumnReorderEvent'
page: 'api'
layout: null
---

#### Versions Available: `All Versions`

```typescript
import { ColumnReorderEvent } from '@transunion-ui/tablejs';
```

#### Description:

Emits a ColumnReorderEvent every time the mouse moves during column reorder. The ColumnReorderEvent contains the following data:

### Types:

| Type          |
| ------------- |
| **ON_REORDER** : `string` = 'onReorder' 
| `[read-only]` event that triggers when a column is being reordered. |
{: .single-column }


| Property      | Description   |
| ------------- | ------------- |
| **columnDragged** : `Element` | Contains the `HTML` element that triggered the reorder. |
| **columnHovered** : `Element` | Contains the `HTML` element over which the currently dragged element is hovered during reorder. |
| **pointerEvent** : `any` | Holds details of the users actions in the browser through a PointerEvent. |
| **type** : `string` | `ColumnReorderEvent.ON_REORDER` |

<br/>

| Type          |
| ------------- |
| **ON_REORDER_START** : `string` = 'onReorderStart' 
| `[read-only]` event that triggers when a column is starting to be reordered. |
{: .single-column }


| Property      | Description   |
| ------------- | ------------- |
| **columnDragged** : `Element` | Contains the `HTML` element that triggered the reorder. |
| **columnHovered** : `Element` | Contains the `HTML` element over which the currently dragged element is hovered at the start of reorder. |
| **pointerEvent** : `any` | Holds details of the users actions in the browser through a PointerEvent. |
| **type** : `string` | `ColumnReorderEvent.ON_REORDER_START` |

<br/>

| Type          |
| ------------- |
| **ON_REORDER_END** : `string` = 'onReorderEnd' 
| `[read-only]` event that triggers when a column is finished being reordered. |
{: .single-column }


| Property      | Description   |
| ------------- | ------------- |
| **columnDragged** : `Element` | Contains the `HTML` element that triggered the reorder. |
| **columnHovered** : `Element` | Contains the `HTML` element over which the currently dragged element is hovered at the end of reorder. |
| **pointerEvent** : `any` | Holds details of the users actions in the browser through a PointerEvent. |
| **type** : `string` | `ColumnReorderEvent.ON_REORDER_END` |

<br/>

### Usage:

The `HTML` example below is assigning each of the three event emitters below and declaring the functions that will be called when each of these events is triggered. An event object is being passed to each of these functions.

#### Event Emitters:

`(columnReorderStart)` emits an event when a column is starting to be reordered.

`(columnReorder)` emits an event when a column is being reordered.

`(columnReorderEnd)` emits an event when a column is finished being reordered.

```html
<tablejs-grid
    (columnReorderStart)="columnReorderStart($event)"
    (columnReorder)="columnReorder($event)"
    (columnReorderEnd)="columnReorderEnd($event)"
  > </tablejs-grid>
```

The `Typescript` below declares the functions that will catch each of the reorder events.

```typescript
columnReorderStart(e: ColumnReorderEvent) {
    console.log('column reorder started: \n', e);
}
columnReorder(e: ColumnReorderEvent) {
    console.log('column reordering: \n', e);
}
columnReorderEnd(e: ColumnReorderEvent) {
    console.log('column reorder ended: \n', e);
}
```

<br/>