---
category: Components
title: 'DragAndDropGhostComponent'
page: 'api'
layout: null
---

### Selector: `[tablejs-drag-and-drop-ghost]`
```typescript
import { DragAndDropGhostComponent } from '@tablejs/community';
```

#### Description:

A component that follows the cursor when dragging and dropping a column to alert the user of which column is being dragged.

### Properties:

| Name          | Description   |
| ------------- | ------------- |
| [@ViewChild](https://angular.io/api/core/ViewChild){:target="_blank" rel="noopener"} (ref, {read: `ViewContainerRef`}) **ref** : `any` | The `ViewContainerRef` used to bootstrap a custom ghost component. |
| **left** : `number` | The component's left position. |
| **top** : `number` | The component's top position. |

#### Methods: 

| Name          | Description   |
| ------------- | ------------- |
| **updateView** (template: `TemplateRef<any>`, context: `object | null`): `void` | Resets the template and context that is rendered. |
