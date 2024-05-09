---
category: Events
title: 'ScrollViewportEvent'
page: 'api'
layout: null
---

#### Version Available: `1.2.0 or higher, 2.0.0 or higher`

```typescript
import { ScrollViewportEvent } from '@transunion-ui/tablejs';
```

#### Description:

Event type for when the `ScrollViewportDirective` triggers an event. The `ScrollViewportEvent` contains the following data:


### Types:

| Type          | 
| ------------- |
| **ON_ITEM_ADDED** : `string` = 'onItemAdded' |
| The `ScrollViewportEvent` triggered when a new element is added in the `ScrollViewportDirective`. |
{: .single-column }

| Properties    | Description   |
| ------------- | ------------- |
| **element** : `HTMLElement` | The element that was added to the viewport. |
| **index** : `HTMLElement` | The index from the array of items supplied to the `VirtualForDirective` at which the item was added. |
| **viewport** : `ScrollViewportDirective` | The `ScrollViewportDirective` that triggered the event. |
| **viewportElement** : `HTMLElement` | The added element's corresponding `HTMLElement` to which the `ScrollViewportDirective` is attached. |
| **range** : `Range` | The range of indices from the item array that are currently rendered in the viewport. |

<br/>

| Type          | 
| ------------- |
| **ON_ITEM_REMOVED** : `string` = 'onItemRemoved' |
| The `ScrollViewportEvent` triggered when an existing element is removed from the `ScrollViewportDirective`. |
{: .single-column }

| Properties    | Description   |
| ------------- | ------------- |
| **element** : `HTMLElement` | The element that was removed from the viewport. |
| **index** : `HTMLElement` | The index from the array of items supplied to the `VirtualForDirective` at which the item was removed. |
| **viewport** : `ScrollViewportDirective` | The `ScrollViewportDirective` that triggered the event. |
| **viewportElement** : `HTMLElement` | The removed element's corresponding `HTMLElement` to which the `ScrollViewportDirective` is attached. |
| **range** : `Range` | The range of indices from the item array that are currently rendered in the viewport. |

<br/>

| Type          | 
| ------------- |
| **ON_ITEM_UPDATED** : `string` = 'onItemUpdated' |
| The `ScrollViewportEvent` triggered when an exisiting element is updated from the `ScrollViewportDirective`. |
{: .single-column }

| Properties    | Description   |
| ------------- | ------------- |
| **element** : `HTMLElement` | The element that was updated in the viewport. |
| **index** : `HTMLElement` | The index from the array of items supplied to the `VirtualForDirective` at which the item was updated. |
| **viewport** : `ScrollViewportDirective` | The `ScrollViewportDirective` that triggered the event. |
| **viewportElement** : `HTMLElement` | The updated element's corresponding `HTMLElement` to which the `ScrollViewportDirective` is attached. |
| **range** : `Range` | The range of indices from the item array that are currently rendered in the viewport. |

<br/>

| Type          | 
| ------------- |
| **ON_RANGE_UPDATED** : `string` = 'onRangeUpdated' |
| The `ScrollViewportEvent` triggered when the current range of rendered elements is altered from the `ScrollViewportDirective`. |
{: .single-column }

| Properties    | Description   |
| ------------- | ------------- |
| **range** : `Range` | The range of indices from the item array that are currently rendered in the viewport. |
| **viewport** : `ScrollViewportDirective` | The `ScrollViewportDirective` that triggered the event. |
| **viewportElement** : `HTMLElement` | The `HTMLElement` to which the `ScrollViewportDirective` is attached. |

<br/>

| Type          | 
| ------------- |
| **ON_VIEWPORT_SCROLLED** : `string` = 'onViewportScrolled' |
| The `ScrollViewportEvent` triggered when the viewport is scrolled |
{: .single-column }

| Properties    | Description   |
| ------------- | ------------- |
| **viewport** : `ScrollViewportDirective` | The `ScrollViewportDirective` that triggered the event. |
| **viewportElement** : `HTMLElement` | The `HTMLElement` to which the `ScrollViewportDirective` is attached. |
| **range** : `Range` | The range of indices from the item array that are currently rendered in the viewport. |
| **scrollTop** : `number` | The offset between the beginning of the scroll viewport and the first rendered element. |
| **firstItemOverflow** : `number` | The amount of pixels past the first visible item that the user has scrolled. |

<br/>

| Type          | 
| ------------- |
| **ON_VIEWPORT_READY** : `string` = 'onViewportReady' |
| The `ScrollViewportEvent` triggered when the viewport has completed its first render. |
{: .single-column }

| Properties    | Description   |
| ------------- | ------------- |
| **viewport** : `ScrollViewportDirective` | The `ScrollViewportDirective` that triggered the event. |
| **viewportElement** : `HTMLElement` | The `HTMLElement` to which the `ScrollViewportDirective` is attached. |

<br/>

| Type          | 
| ------------- |
| **ON_VIEWPORT_INITIALIZED** : `string` = 'onViewportInitialized' |
| The `ScrollViewportEvent` triggered when the viewport is initialized from the `ScrollViewportDirective`. |
{: .single-column }

| Properties    | Description   |
| ------------- | ------------- |
| **viewport** : `ScrollViewportDirective` | The `ScrollViewportDirective` that triggered the event. |
| **viewportElement** : `HTMLElement` | The `HTMLElement` to which the `ScrollViewportDirective` is attached. |

<br/>

### Usage:

The example below demonstrates how one would designate functions to catch different kinds of `ScrollViewportEvent` objects. 

#### Event Emitters:

`(itemAdded)` emits an event when a new item is added to the viewport `(tbody)` and calls the `itemAdded` function with the event `($event)` emitted as a parameter.

`(itemRemoved)` emits an event when an existing element is removed from the viewport `(tbody)` and calls the `itemRemoved` function with the event `($event)` emitted as a parameter.

`(itemUpdated)` emits an event when an existing element is updated within the viewport `(tbody)` and calls the `itemUpdated` function with the event `($event)` emitted as a parameter.

`(rangeUpdated)` emits an event when the current range of rendered elements within the viewport `(tbody)` is altered. The `rangeUpdated` function is called with the event `($event)` emitted as a parameter.

`(viewportScrolled)` emits an event when the viewport `(tbody)` is scrolled. The `viewportScrolled` function is called using the event `($event)` emitted as a parameter.

`(viewportReady)` emits an event when the viewport `(tbody)` has completed its first render. The `viewportReady` function is called with the event `($event)` emitted as a parameter.

`(viewportInitialized)` emits an event when the viewport `(tbody)` is initialized. The `viewportInitialized` function is called with the event `($event)` emitted as a parameter.

```html
<tablejs-grid>
    <table
        tablejsScrollViewport
        (itemAdded)="itemAdded($event)"
        (itemRemoved)="itemRemoved($event)"
        (itemUpdated)="itemUpdated($event)"
        (rangeUpdated)="rangeUpdated($event)"
        (viewportScrolled)="viewportScrolled($event)"
        (viewportReady)="viewportReady($event)"
        (viewportInitialized)="viewportInitialized($event)"
    > </table>
</tablejs-grid>
```

Below is a `typescript` implementation for the `ScrollViewportEvents` shown above.

```typescript
itemAdded(e: ScrollViewportEvent): void {/*Run desired code when an item is added to the viewport*/}
itemRemoved(e: ScrollViewportEvent): void {/*Run desired code when an item is removed from the viewport*/}
itemUpdated(e: ScrollViewportEvent): void {/*Run desired code when an item is updated in the viewport*/}
rangeUpdated(e: ScrollViewportEvent): void {/*Run desired code when the range is updated in the viewport*/}
viewportScrolled(e: ScrollViewportEvent): void {/*Run desired code when the viewport is scrolled*/}
viewportReady(e: any): void {/*Run desired code when the viewport is ready*/}
viewportInitialized(e: any): void {/*Run desired code when the viewport is initialized*/}
```

<br/>