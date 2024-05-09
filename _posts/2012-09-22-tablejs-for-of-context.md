---
category: Classes
title: 'TablejsForOfContext'
page: 'api'
layout: null
---

#### Version Available: `1.4.9 or higher, 2.1.9 or higher`

```typescript
import { TablejsVirtualForOf } from '@transunion-ui/tablejs';
```

#### Description:

The context object the `TablejsForOf` will use to render a single row.

### Properties: 

| Property          | Description   |
| ------------- | ------------- |
| **first** (): <br/> `boolean` | `[read-only]` Returns whether the context pertains to the first item in the [tablejsVirtualFor](./#/virtual-for-directive) list. |
| **last** (): <br/> `boolean` | `[read-only]` Returns whether the context pertains to the last item in the [tablejsVirtualFor](./#/virtual-for-directive) list. |
| **even** (): <br/> `boolean` | `[read-only]` Returns whether the context pertains to an item which has an even-numbered index in the [tablejsVirtualFor](./#/virtual-for-directive) list. |
| **odd** (): <br/> `boolean` | `[read-only]` Returns whether the context pertains to an item which has an odd-numbered index in the [tablejsVirtualFor](./#/virtual-for-directive) list. |

 


