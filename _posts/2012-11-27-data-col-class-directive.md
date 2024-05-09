---
category: Directives
title: 'DataColClassDirective'
page: 'api'
layout: null
---

#### Version Available: `All Versions`

### Selector: `[tablejsDataColClass]`
```typescript
import { DataColClassDirective } from '@transunion-ui/tablejs';
```

#### Description:

Ties a user-defined class to a tablejs-grid column. The class can be used to set initial CSS properties to a column. This directive should be placed on a div within a td or th element.

### Properties:

| Name          | Description   |
| ------------- | ------------- |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **tablejsDataColClass** : <br/>`string` | The class name to be tied to the grid. Automatically puts a class on the element matching the string supplied. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **initialWidth** : <br/>`number` | Sets the initial width of a column. Widths can be given either in pixels (px) or in percentage (%). Setting the initialWidth is not required, but greatly improves grid initialization performance. |

<br/>

### Methods:

| Method        | Description | 
| ------------- | ----------- |
| **registerInitialColumnWidthOnGridDirective**{: .method-name} (): `void` | Registers an initial width value for the column with this directive. |

<br/>

### Usage:

Below is an `HTML` implementation where an item is added to the wish list column, and the class "item-name" will be added to the `td` element's `div` to provide a mechanism for styling this column. 

```html
<tablejs-grid>
    <table>
        <tbody>
            <tr tablejsGridRow>
                <td>
                    <div tablejsDataColClass="item-name"> 
                        {% raw %}{{ wishList.itemName }}{% endraw %}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</tablejs-grid>
```

When adding the property **initialWidth** to a tag with a speciying value, the initial column width is set. Which greatly improves grid initialization performance. Below is an `HTML` implementation for adding the property to a tag.

```html
<td>
    <div tablejsDataColClass="item-name" initialWidth="50px"> 
        {% raw %}{{ wishList.itemName }}{% endraw %}
    </div>
</td>
```


