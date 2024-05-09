---
category: Directives
title: 'GridRowDirective'
page: 'api'
layout: null
---

#### Version Available: `All Versions`

### Selector: `[tablejsGridRow]`
```typescript
import { GridRowDirective } from '@tablejs/community';
```

#### Description:

Attaches a row element (`tr`) for use within the tablejs-grid.

### Methods:

| Method        | Description | 
| ------------- | ----------- |
| **registerRowsOnGridDirective**{: .method-name} (): `void` | Function that adds a new row element to tablejs-grid. |

<br/>

### Usage:

By attaching a table row element (`tr`), TableJS is able to track row information. Below is an `HTML` implementation for registering the Wish List Items row with TableJS.

```html
<tablejs-grid>
    <table>
        <thead>
            <tr tablejsGridRow>
                <th>
                    <div>Wish List Items</div>
                <th>
            </tr>
        </thead>
    </table>
</tablejs-grid>
```