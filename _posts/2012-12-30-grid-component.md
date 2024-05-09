---
category: Components
header: 'Components'
title: 'GridComponent'
page: 'api'
layout: null
---

#### Version Available: `All Versions`

### Selector: `[tablejs-grid]`
```typescript
import { GridComponent } from '@transunion-ui/tablejs';
```

#### Description:

Wraps the table elements and acts as a container for all GridDirective functionality.

### Properties:

| Name          | Description   |
| ------------- | ------------- |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **dragAndDropGhostFilter** : <br/> `() => boolean`  | `[Deprecated]` Takes a function that returns a boolean value. This function filters elements out of the drag and drop ghost filter  |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **linkClass** : <br/> `string`  | A class that links various tablejs-grid components together to share the same behavior during column reordering and resizing  |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"}  **resizeColumnWidthByPercent** : <br/> `boolean` | Enables/disables column width resizing calculation by percentage. Column resize calculation defaults to using pixels. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **columnResizeStart** : <br/> `(e: ColumnResizeEvent) => void` | Emits a single `ColumnResizeEvent` when a column begins resizing.|
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **columnResize** : <br/> `(e: ColumnResizeEvent) => void` | Emits a `ColumnResizeEvent` every time the mouse moves during column resize. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **columnResizeEnd** : <br/> `(e: ColumnResizeEvent) => void` | Emits a single `ColumnResizeEvent` when a column is released after it is resized. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **columnReorderStart** : <br/> `(e: ColumnReorderEvent) => void` | Emits a single `ColumnReorderEvent` when a column begins reordering. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **columnReorder** : <br/> `(e: ColumnReorderEvent) => void`  | Emits a `ColumnReorderEvent` every time the mouse moves during column reorder. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **columnReorderEnd** : <br/> `(e: ColumnReorderEvent) => void` | Emits a single `ColumnReorderEvent` when a column is released after it is reordered. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **gridInitialize** : <br/> `(e: ColumnReorderEvent) => void` | Emits a single `ColumnReorderEvent` when a grid is initialized. |
| **gridDirective** : `GridDirective` | `[read-only]` The [GridDirective](./#/grid-directive) that is attached to this [GridComponent](./#/grid-component). | 