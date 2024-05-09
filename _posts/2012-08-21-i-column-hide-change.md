---
category: Interfaces
title: 'IColumnHideChange'
page: 'api'
layout: null
---

```typescript
import { IColumnHideChange } from '@tablejs/community';
```

#### Description: 

Provides a structure for column hide state changes. See [GridDirective.hiddenColumnChanges()](./#/grid-directive)

### Properties:

| Property          | Description   |
| ------------- | ------------- |
| **hierarchyColumn** : `IColumnHierarchy` | The `IColumnHierarchy` related to the change in column visibility. |
| **hidden** : `boolean` | Indicates whether the column visibility was set to hidden. |
| **wasTriggeredByThisColumn** : `boolean` | If true, the visibility of this column was triggered by this column. If false, the visibility for this column was triggered by another column's visibility changing. |