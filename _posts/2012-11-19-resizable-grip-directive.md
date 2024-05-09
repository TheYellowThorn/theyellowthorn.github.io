---
category: Directives
title: 'ResizableGripDirective'
page: 'api'
layout: null
---

#### Version Available: `All Versions`

### Selector: `[resizableGrip]`
```typescript
import { ResizableGripDirective } from '@tablejs/community';
```

#### Description:

The `resizableGrip` directive is added to an element to enable user-driven resize functionality on a column.

### Methods:

| Name          | Description   |
| ------------- | ------------- |
| **registerGripOnGridDirective** (): `void` | Registers the element containing the [resizableGrip](./#/resizable-grip-directive) directive with the [GridDirective](./#/grid-directive), and designates it as a handle for resizing. |

<br/>

### Usage:

In the `HTML` implementation below, a `resizableGrip` directive is added to the `div` element to provide a handle for resize functionality 

```html
<tablejs-grid>
    <table>
        <thead>
            <tr tablejsGridRow>
                <th tablejsDataColClasses="name">
                    <div class="vertical-resize-grip-line" resizableGrip> ... </div> 
                </th>
            </tr>
        </thead>
    </table>
</tablejs-grid>
```