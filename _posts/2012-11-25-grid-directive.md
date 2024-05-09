---
category: Directives
header: 'Directives'
title: 'GridDirective'
page: 'api'
layout: null
---

#### Version Available: `All Versions`

### Selector: `[tablejsGrid]`
```typescript
import { GridDirective } from '@transunion-ui/tablejs';
```

#### Description:

Wraps the table elements and is responsible for registering all the other grid-related directives and implementing their functionalities.  The GridDirective acts as the control center for the TablejsGrid.

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
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **gridInitialize** : <br/> `(e: GridEvent) => void` | Emits a single `GridEvent` when the grid has initialized. |
| **dragging** : `boolean` | Returns whether a column is being dragged. |
| **reordering** : `boolean` | Returns whether a column is being reordered. |
| **startX** : `number` | Holds horizontal coordinate of the users mouse pointer when a mouse event is triggered. |
| **startY** : `number` | Holds vertical coordinate of the users mouse pointer when a mouse event is triggered. |
| **viewport** : `HTMLElement` | The `tbody` tag to which the `tablejsViewport` directive belongs. |
| **viewportID** : `string` | The `id` attribute value on the viewport element. |
| **startingWidths** : `number[]` | Holds starting width of column in pixels. |
| **minWidths** : `number[]` | Holds starting minimum width of column in pixels. |
| **gridTemplateClasses** : `string[]` | Holds the list of `CSS` class names associated with the grid's columns. |
| **gridOrder** : `number[]` | Holds a numerical representation of column order in the grid. |
| **classWidths** : `any[]` | Holds the widths of each column. If the columns are resized in pixels, these widths will be held as a number (e.g. 100). If the columns are resized in percentages, these will be held as string value percentages (e.g. "25%"). |
| **draggingColumn** : `HTMLElement` | The `th` element currently being dragged. |
| **colRangeGroups** : `number[][][]` | Holds the columns span ranges for each column group. |
| **lastDraggedOverElement** : `any` | The last `th` column used for dragging. |
| **resizableColumns** : `HTMLElement[]` | Holds a collection of all resizable columns. |
| **resizableGrips** : `HTMLElement[]` | Hold a collection of elements that can be grabbed to resize columns. |
| **reorderGrips** : `HTMLElement[]` | Hold a collection of elements that can be grabbed to reorder columns. |
| **reorderableColumns** : `HTMLElement[]` | Holds a collection of columns that can be reordered. |
| **columnsWithDataClasses** : `HTMLElement[]` | Holds a collection of `th` elements using a `DataColCassesDirective`. |
| **rows** : `HTMLElement[]` | The `tr` elements on the grid containing a `GridRowDirective`. |
| **infiniteScrollViewports** : `HTMLElement[]` | A list of `tbody` elements for scrolling table content. |
| **initialWidths** : `any[]` | Returns in the initial width values of columns on the grid. Columns resized in pixels will return a number value (e.g. 100), while columns resized in percentages will return a percentage value as a string (e.g. "25%"). |
| **parentGroups** : `Element[][]` | A collection of `th` elements, sorted by their order in the hierarchical tree. |
| **elementsWithHighlight** : `any[]` | Hold a list of objects with elements and their corresponding highlight directions |
| **dragAndDropGhostComponent** : `DragAndDropGhostComponent` | The `DragAndDropGhostComponent` displayed when the use is dragging a column. |
| **dragOffsetX** : `number` | The horizontal offset of an element as it is being moved from its previous position. |
| **dragOffsetY** : `number` | The vertical offset of an element as it is being moved from its previous position. |
| **scrollViewportDirective** : `ScrollViewportDirective | null` | The `ScrollViewportDirective` associated with this `GridDirective`. |
| **hiddenColumnChanges** : `Subject<IColumnHideChange>` | Observable for catching `IColumnHideChange` events. |

<br/>
### Methods:

| Method        | Description | 
| ------------- | ----------- |
| **canHideColumn**{: .method-name } (column: `Element`): `boolean` | Returns true if a specified column can be hidden, else it returns false. | 
| **getFlattenedHierarchy**{: .method-name } (): `IColumnHierarchy[]` | Returns the full hierarchy of columns and sub-columns in a flattened state. |
| **getColumnHierarchy**{: .method-name } (): `any` | Returns the full hierarchy of columns and sub-columns in a tree-like structure. |
| **getHierarchySubColumns**{: .method-name} (item: `IColumnData`, levelCount: `number`): `IColumnHierarchy[]` | Returns a list of `IColumnHierarchy` objects that pertain to an item's sub-columns. |
| **moveStyleContentToProminent**{: .method-name } (): `void` | Moves the `CSS` for this grid later in the `head` tag so that it takes higher precedence |
| **getRelatedHeader**{: .method-name } (element: `Element`): `Element | any` | Returns the `th` element associated with the supplied `th` element. This is for grids using the sharing `linkClass` directive. |
| **removeHighlights**{: .method-name } (elToExclude: `HTMLElement | null`, moveDirection: `number = -2`): `void` | Removes all reorder column highlight classes on the grid. |
| **removeElementHighlight**{: .method-name } (el: `HTMLElement`): `void` | Removes the reorder column highlight classes for a single element on the grid. |

<br/>