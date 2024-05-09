---
category: Directives
title: 'VirtualForDirective'
page: 'api'
layout: null
---

#### Version Available: `1.2.0 or higher, 2.0.0 or higher`

### Selector: `[tablejsVirtualFor]`
```typescript
import { VirtualForDirective } from '@transunion-ui/tablejs';
```

#### Description:

`*tablejsVirtualFor` replaces `*ngFor` inside of a `<table tablejsScrollViewport>`, supporting the exact same API as `*ngFor`. The `VirtualForDirective` renders only `tr` items that are visible within the range of the `tablejsScrollViewport`. (Eg: `<tr *tablejsVirtualFor="let item of items; let i = index;  trackBy: trackItem">...</tr>`)

### Properties: 

| Name          | Description   |
| ------------- | ------------- |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **tablejsVirtualForOf** <br/> (tablejsVirtualForOf: `U|undefined|null`): `void` | `[write-only]` The value of the iterable expression, which can be used as a [template input variable](https://angular.io/guide/structural-directives#shorthand). |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **tablejsVirtualForTemplate** <br/> (value: `TemplateRef<TablejsForOfContext<T, U>>`): `void` | `[write-only]` A reference to the template that is stamped out for each item in the iterable. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **tablejsVirtualForTrackBy** : <br/> `TrackByFunction<T> | undefined` | `[read-only]` Specifies a custom [TrackByFunction](https://angular.io/api/core/TrackByFunction) to compute the identity of items in an iterable. |
| **virtualNexus** : `IVirtualNexus` | The nexus that ties a [scrollViewportDirective](./#/scroll-viewport-directive) with a [virtualForDirective](./#/virtual-for-directive) |
| **changes** : `Subject<any>` | An `Observable` that dispatches changes made to the list of items. |
| **rangeUpdatedSubscription$** : `Subscription` | Listens for any changes made to the [Range](./#/range) being displayed in a viewport. |
| **template** : `TemplateRef<TablejsForOfContext<T, U>>` | `[read-only]` The template used for rendering rows in the viewport. |

<br/>

### Methods:

| Name          | Description   |
| ------------- | ------------- |
| **rangeIsDifferent** (range1: `Range`, range2 `Range`): `boolean` | Returns whether two ranges contain the same starting and ending values. |
| **renderedItemsNeedUpdate** (): `boolean` | Determines if items need to be re-rendered. |
| **updateItems** (): `void` | Updates items if it is determined that changes have been made to the list of items, or if it is determined they need to be re-rendered. |

<br/>

### Usage:

Below is an `HTML` use case for applying the `*tablejsVirtualFor` directive. The `filteredItems` variable on the template is an array of items that we wish to display during scrolling. These items are dynamically added to and removed from the viewport as needed based on the scroll position.

```html
<tablejs-grid>
    <table tablejsScrollViewport>
        <thead>
            <tr tablejsGridRow>
                <th tablejsDataColClasses="name">
                    <div> Name </div>
                </th>
                <th tablejsDataColClasses="id">
                    <div> ID </div>
                </th>
            <tr>
        </thead>
        <tbody tablejsViewport>
            <tr *tablejsVirtualFor="let item of filteredItems">
                <td>
                    <div tablejsDataColClass="name"> 
                        {% raw %}{{ item.name }}{% endraw %}    
                    </div>
                </td>
                <td>
                    <div tablejsDataColClass="id"> 
                        {% raw %}{{ item.id }}{% endraw %}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</tablejs-grid>    
```

