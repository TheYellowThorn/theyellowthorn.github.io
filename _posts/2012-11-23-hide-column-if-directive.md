---
category: Directives
title: 'HideColumnIf'
page: 'api'
layout: null
---

#### Version Available: `1.4.0 or higher, 2.1.0 or higher`

### Selector: `[tablejsHideColumnIf], [tablejshidecolumnif], [tablejs-hide-column-if]`
```typescript
import { HideColumnIfDirective } from '@tablejs/community';
```

#### Description:

Provides a mechanism for hiding or showing columns.

### Properties:

| Name          | Description   |
| ------------- | ------------- |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **tablejsHideColumnIf** : `boolean` | Setting this property to true will hide this column. Setting this property to false will show the column. Changing the status of this column's visiblity may trigger a series of `IColumnHideChange` events. Nested columns will trigger as shown or hidden based on this column's visibility. Parent columns in the `IColumnHierarchy` tree may be shown or hidden based on the change in this column's visibility. If a parent's children are all hidden by this column change, then the parent will change to hidden. If a parent needs to be visible because this column was made visible, then the parent will be shown as well. |
| **HIDDEN_COLUMN_CLASS** : `string` | The `CSS` class added to the `th` element when the column is hidden. |
| **changeTriggeredBy** : `IColumnHierarchy | null` | Holds the changed columm hierachy. |
| **canHide** : `boolean` | Determines whether a specified column can be hidden. At least one column must be visible per table. Additionally, at least one nested column must be visible for its parent column to be visible. |

<br/>

### Methods:

| Name          | Description   |
| ------------- | ------------- |
| **getVisibleSiblingsByColumn**{: .method-name } (hierarchyList: `IColumnHierarchy[]`, level: `number`): `IColumnHierarchy[]` | Returns an array of `IColumnHierarchy` sibling objects that share a nesting level. |
| **updateHeadersThatCanHide**{: .method-name } (): `void` | Updates the visibility of columns that branch from the same `IColumnHierarchy` tree. | 
| **getLowestLevelColumnHierarchiesVisible**{: .method-name } (flattenedColumnHierarchy: `IColumnHierarchy[]`): `IColumnHierarchy[]` | Returns a list of visible `IColumnHierarchy` elements. These elements will be at the lowest level in the hierarchical tree. |
| **allColumnsShareTheSameAncestor**{: .method-name } (commonAncestor: `IColumnHierarchy`, columnHierarchies: `IColumnHierarchy[]`, flattenedColumnHierarchy: `IColumnHierarchy[]`): `boolean` | Returns whether the supplied `ColumnHierarchy` objects all have elements that share the same ancestor (e.g. parent, grandparent, etc.) in the hierarchical tree. | 
| **hideAllOffspring**{: .method-name } (columnHierarchy: `IColumnHierarchy`): `void` | Hides all `th` elements that branch from this `th`. This includes children, grandchildren, great-grandchildren, etc. |
| **showAllOffspring**{: .method-name } (columnHierarchy: `IColumnHierarchy`): `void` | Shows all `th` elements that branch from this `th`. This includes children, grandchildren, great-grandchildren, etc. |
| **allSiblingsAreHidden**{: .method-name } (columnHierarchy: `IColumnHierarchy`, flattenedColumnHierarchy: `IColumnHierarchy[]`): `boolean` | Returns whether all of a `th` element's siblings in a nested structure are hidden. |
| **setAllAncestors**{: .method-name } (currentColumnHierarchy: `IColumnHierarchy`, flattenedColumnHierarchy: `IColumnHierarchy[]`, hidden: `boolean`): `void` | Sets the visibility of all of a column's offspring (e.g. children, grandchildren, etc.). |

<br/>

### Usage:

The `HTML` implementation below hides the column by setting the value of the `tablejsHideColumnIf` directive to `true`. Setting the directive to `false` would show the column.

```html
<th
    tablejsDataColClasses="name"
    reorderCol
    [tablejsHideColumnIf]="true"
> </th>
```