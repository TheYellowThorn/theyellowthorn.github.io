---
category: Events
title: 'GridEvent'
page: 'api'
layout: null
---

#### Version Available: `All Versions`

```typescript
import { GridEvent } from '@tablejs/community';
```

#### Description:

Emits a GridEvent when the table has been initialized. The GridEvent contains the following data:

| Type          | 
| ------------- |
| **ON_INITIALIZED** : `string` = 'onInitialized' 
| `[read-only]` A `GridEvent` fired when the grid has initialized. |
{: .single-column}

| Properties    | Description   |
| ------------- | ------------- |
| **gridComponent** : `GridComponent` | Contains the component to which the table is attached. Must have a component attached for grid to be initialized. |
| **gridElement** : `HTMLElement` | Contains the tablejs-grid element to which the table is attached. Must have tablejs-grid element attached for grid to be initialized. |
| **type** : `string` | `GridEvent.ON_INITIALIZED` |