---
category: Classes
title: 'Comparator'
page: 'api'
layout: null
---

#### Version Available: `1.3.0 or higher, 2.0.0 or higher`

```typescript
import { Comparator } from '@tablejs/community';
```

#### Description:

Base class for setting static comparator functions. See also the `FilterComparator` and `SortComparator` classes

### Properties:

| Property      | Description   |
| ------------- | ------------- |
| **filterSortService** : `FilterSortService` | The `FilterSortService` related to this `Comparator`. |

<br/>

### Methods:

| Method          | Description   |
| ------------- | ------------- |
| **getCurrentSortOptions()**{: .method-name }: <br/>`ISortOptions | null` | For use inside a comparator function.  Retrieves the current `ISortOptions` being used during item sort |
| **getCurrentFilterOptions()**{: .method-name }: <br/>`IFilterOptions | null` | For use inside a comparator function.  Retrieves the current `IFilterOptions` being used during item filtration |
| **isString(val: any)**{: .method-name }: <br/>`boolean` | Returns whether the `val` parameter supplied is a string |

<br/>

### Usage:

See [FilterComparator](./#/filter-comparator) and [SortComparator](./#/sort-comparator)
