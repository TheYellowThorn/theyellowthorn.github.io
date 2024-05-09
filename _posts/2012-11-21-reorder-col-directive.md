---
category: Directives
title: 'ReorderColDirective'
page: 'api'
layout: null
---

#### Version Available: `All Versions`

### Selector: `[reorderCol]`
```typescript
import { ReorderColDirective } from '@transunion-ui/tablejs';
```

#### Description:

Adding the `reorderCol` directive to a `th` or `td` element will enable drag and drop functionality on a specific column

### Properties:

| Name          | Description   |
| ------------- | ------------- |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **reorderGhost**: <br/> `TemplateRef<any>` | The template to be rendered under the cursor when dragging a column. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **reorderGhostContext**: <br/> `Object|null = null` | The data to be supplied to the template that is rendered under the cursor when dragging a column. |

<br/>

### Methods: 

| Name          | Description   |
| ------------- | ------------- |
| **registerColumnOnGridDirective** (): `void` | Registers this column as reorderable in the [GridDirective](./#/grid-directive). |

<br/>

### Usage:

Shown in the `HTML` below is an implementation of adding reorder drag and drop functionality by adding the `reorderCol` directive.

```html
<tablejs-grid>
    <table>
        <thead>
            <tr tablejsGridRow>
                <th reorderCol>
                    <div> ... </div>
                </th>
                <th reorderCol>
                    <div> ... </div>
                </th>
                <th reorderCol>
                    <div> ... </div>
                </th>
            </tr>
        </thead>
    </table>
</tablejs-grid>
```