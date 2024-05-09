---
category: Directives
title: 'DataColClassesDirective'
page: 'api'
layout: null
---

#### Version Available: `All Versions`

### Selector: `[tablejsDataColClasses]`
```typescript
import { DataColClassesDirective } from '@tablejs/community';
```

#### Description:

Groups multiple user-defined classes to a single column. This enables users to have sub columns or nested columns in the grid.  Class names supplied to tablejsDataColClasses are to be separated by commas.

### Properties:

| Name          | Description   |
| ------------- | ------------- |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **tablejsDataColClasses** : <br/>`string` | A comma delimited string of classes that will be affected during resize and reorder functionality. |

<br/>

### Methods:

| Method        | Description | 
| ------------- | ----------- |
| **cacheClassesOnElement**{: .method-name } (): `void` | Saves the supplied classes in the header element's dataClasses property. |
| **registerColumnsWithDataClassesOnGridDirective**{: .method-name } (): `void` | Ties the supplied classes with the header and registers them with the data grid. |

<br/>

### Usage:

The `tablejsDataColClasses` in the example below tie `th` tags with corresponding `td div` elements. This allows TableJS to reorder, resize, show, and hide column headings and body information together.

```html
<tablejs-grid>
    <table>
        <thead>
            <tr tablejsGridRow>
                <th tablejsDataColClasses="name">
                    <div> ... </div>
                </th>
                <th tablejsDataColClasses="price">
                    <div> ... </div>
                </th>
                <th tablejsDataColClasses="id">
                    <div> ... </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr tablejsGridRow>
                <td>
                    <div tablejsDataColClass="name" initialWidth="150px"> 
                        {% raw %}{{ wishList.itemName }}{% endraw %} 
                    </div>
                </td>
                <td>
                    <div tablejsDataColClass="price" initialWidth="150px"> 
                        {% raw %}{{ wishList.itemPrice }}{% endraw %}
                    </div>
                </td>
                <td>
                    <div tablejsDataColClass="id" initialWidth="150px"> 
                        {% raw %}{{ wishList.itemID }}{% endraw %} 
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</tablejs-grid>
```

