---
category: Interfaces
title: 'IColumnHierarchy'
page: 'api'
layout: null
---

```typescript
import { IColumnHierarchy } from '@transunion-ui/tablejs';
```

#### Description:

Provides a structured hierarchy for nested columns. Columns are organized in a tree-like structure. Nested columns branch from columns of higher hierarchical prominence. 

### Properties:

| Property          | Description   |
| ------------- | ------------- |
| **level** : `number` | Provides a hierarchical level for a column. The lower the number, the higher the hierarchical prominence. |
| **element** : `Element` | The `th` element pertaining to this `IColumnHierarchy`. |
| **parent** : `Element` | Current parent element of the specified element. |
| **parentColumn** : `Element` | The `th` element that pertains to one level up in the column hierarchy. The `element` would be a branch of `parentColumn` element. |
| **subColumns** : `IColumnHierarchy[]` | The list of `IColumnHierarchy` column data that are branches of this `IColumnHierarchy`. |