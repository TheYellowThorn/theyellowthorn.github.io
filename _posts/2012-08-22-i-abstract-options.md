---
category: Interfaces
title: 'IAbstractOptions'
page: 'api'
layout: null
---

#### Version Available: `1.3.0 or higher, 2.0.0 or higher`

```typescript
import { MatchType } from '@tablejs/community';
```

#### Description:

Provides an `abstract` class for creating sort and filter options

### Properties:

| Property          | Description   |
| ------------- | ------------- |
| **id**: `string` | An identifier for a particular set of options |
| **ignoreCase**: `boolean` | A value to signify whether an option should ignore case-sensitivity |
| **ignoreTimeOfDay**: `boolean` | A value to signify whether an option should ignore the time of day when matching against a `Date` |

<br/>

### Usage:

See [ISortOptions](./#/i-sort-options) and [IFilterOptions](./#/i-filter-options)

