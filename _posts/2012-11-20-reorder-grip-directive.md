---
category: Directives
title: 'ReorderGripDirective'
page: 'api'
layout: null
---

#### Version Available: `All Versions`


### Selector: `[reorderGrip]`
```typescript
import { ReorderGripDirective } from '@transunion-ui/tablejs';
```

#### Description:

The `reorderGrip` directive is applied to an element which will be used as a handle for starting drag and drop functionality on a column.

### Methods:

| Name          | Description   |
| ------------- | ------------- |
| **registerGripOnGridDirective** (): `void` | Registers the element containing the [reorderGrip](./#/reorder-grip-directive) directive with the [GridDirective](./#/grid-directive), and designates it as a handle for reordering. |

<br/>

### Usage:

Adding `reorderGrip` to an element as shown in the `HTML` example below will designate that element as a handle for reordering a column. 

```html
<tablejs-grid>
    <table>
        <thead>
            <tr tablejsGridRow>
                <th tablejsDataColClasses="name" reorderCol>
                    <div>
                        <i class="fas fa-bars" reorderGrip> Name </i> 
                    </div>
                </th>
            </tr>
        </thead>
    </table>
</tablejs-grid>
```