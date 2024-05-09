---
category: Directives
title: 'ScrollViewportDirective'
page: 'api'
layout: null
---

#### Version Available: `1.2.0 or higher, 2.0.0 or higher`

### Selector: `[tablejsScrollViewport]`
```typescript
import { ScrollViewportDirective } from '@tablejs/community';
```

#### Description:

Attaches a viewport to the table to render virtual scrolling content.

### Properties:

| Name          | Description   |
| ------------- | ------------- |
| [@ContentChild](https://angular.io/api/core/ContentChild){:target="_blank" rel="noopener"}(templateRef, { static: true })  **templateRef** : `TemplateRef<any>` | Used to get the first template from TemplateRef directive. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **templateID** : `string` | Holds id value of specific template. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **generateCloneMethod** : <br/> ((template: `HTMLElement`, items: `any[]`, index: `number`) => Node) | Defines a function type that returns a node based on a specified template and its corresponding elements and index. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **arrowUpSpeed** : `number`  | Determines how many table rows are scrolled when pressing the up arrow  |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **arrowDownSpeed** : `number`  | Determines how many table rows are scrolled when pressing the down arrow  |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"}  **preItemOverflow** : `number` | The number of table rows to render before the first visible item in the viewport  |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **postItemOverflow** : `number` | The number of table rows to render after the last visible item in the viewport |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **itemLoadLimit** : `number` | The maximum number of rows to render in the viewport.  Defaults to Infinity.  The viewport will automatically stop loading rows when they are no longer visible and have reached the `postItemOverflow` count. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **fillViewportScrolling** : `any` | Forces the viewport to display all visible rows before rendering. This option reduces the white space seen from non-rendered rows when scrolling quickly. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **itemAdded** : <br/> `(e: ScrollViewportEvent) => void` | Emits a single ScrollViewportEvent when a row is added to the viewport. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **itemRemoved** : <br/> `(e: ScrollViewportEvent) => void` | Emits a single ScrollViewportEvent when a row is removed to the viewport. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **itemUpdated** : <br/> `(e: ScrollViewportEvent) => void` | Emits a single ScrollViewportEvent when a row is rerendered. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **rangeUpdated** : <br/> `(e: ScrollViewportEvent) => void` | Emits a single ScrollViewportEvent when the viewport range changes. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **viewportScrolled** : <br/> `(e: ScrollViewportEvent) => void` | Emits a single ScrollViewportEvent when the viewport is scrolled. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **viewportReady** : <br/> `(e: ScrollViewportEvent) => void` | Emits a single ScrollViewportEvent when the viewport is ready to intialize. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **viewportInitialized** : <br/> `(e: ScrollViewportEvent) => void` | Emits a single ScrollViewportEvent when the viewport has intialized and is ready to scroll. |
| **items** : `any[] | null` | The array of items that the viewport will use to render rows. |
| **listElm** : `HTMLElement` | The `table` element that wraps the `tbody` viewport. |
| **listContent** : `HTMLElement` | The `tbody` element that contains the scrollable content. |
| **prevSpacer** : `HTMLElement` | The `tr` element that provides a space between the beginning of the row content and the first displayed row. |
| **postSpacer** : `HTMLElement` | The `tr` element that provides a space between the last displayed row item and the end of the content. |
| **gridDirective** : `GridDirective` | The related `GridDirective`. |
| **virtualForChangesSubscription$** : `Subscription` | Listens for changes made to the `items` array. |
| **range** : `Range` | A `Range` object that contains the start and end indices of the displayed items within the viewport. |
| **lastRange** : `Range` | A `Range` object that contains the start and end indices of the items that were displayed within the viewport before the last scroll event. |
| **lastScrollTop** : `number` | The value in pixels that the viewport was last scrolled down. |
| **currentScrollTop** : `number` | The value in pixels that the viewport is currently scrolled down. |
| **currentScrollChange** : `number` | The variance in pixels between the current and previous scroll position. |
| **scrollChangeByFirstIndexedItem** : `number` | The amount of pixels hidden by the viewport for the item at `range.startIndex`.  |
| **virtualNexus** : `IVirtualNexus` | Provides access to the related `VirtualForDirective`. |
| **pauseViewportRenderUpdates** : `boolean` | Defaults to `false`. When `true`, this property prevents the viewport from updating items. |

<br/>
### Methods:

| Method        | Description | 
| ------------- | ----------- |
| **handleScroll**{: .method-name } (e: `Event`): `void` | The function called every time the viewport is scrolled. |
| **rerenderRowAt**{: .method-name } (index: `number`, updateScrollPosition: `boolean` = false): void | Redraws the row at the supplied index. [Optional] Force the scroll position to update. |
| **scrollToBottom**{: .method-name } (): `void` | Scroll the viewport to the bottom. |
| **scrollToTop**{: .method-name } (): `void` | Scroll the viewport to the top. |
| **pageUp**{: .method-name } (): `void` | Scroll the viewport up one set of items. |
| **pageDown**{: .method-name } (): `void` | Scroll the viewport down one set of items. |
| **updateItems**{: .method-name } (items: `any[]`, scrollToOptions: `any` = {index: -1, scrollAfterIndexedItem: 0 }): `void` | Update item list and reset scrolling. |
| **resetToInitialValues**{: .method-name } (): `void` | Resets all the viewport variables to their defaults. |
| **recalculateRowHeight**{: .method-name } (index: `number`): `void` | Reevaluates a row's height. |
| **getPreviousSibling**{: .method-name } (el: `Node`): `any` | Retrieve a node renderered prior to the supplied node. |
| **getNextSibling**{: .method-name } (el: `Node`): `any` | Retrieve a node renderered after to the supplied node. |
| **showRange**{: .method-name } (startIndex: `number`, endIndex: `number`, overflow: `number` = 0): `void` | Force the viewport to display a designated range. |
| **getDisplayedContentsHeight**{: .method-name } (): `number` | Get the height in pixels of all the contents rendered in the viewport. |
| **refreshContainerHeight**{: .method-name } (): `void` | Updates the container height based on visible rows. |
| **allItemsFitViewport**{: .method-name } (recalculateContainerHeight: `boolean` = false): `boolean` | Returns whether all the rendered rows fit within the bounds of the viewport. |
| **getCurrentScrollPosition**{: .method-name } (): `any` | Returns an object with details about the current scroll position. |
| **getCloneFromTemplateRef**{: .method-name } (index: `number`): `HTMLElement` | Returns an `HTMLElement` generated by cloning the template at the supplied row index. |
| **scrollToExact**{: .method-name } (index: `number`, overflow: `number` = 0): `void` | Scroll the viewport to the item at the specified index.  The overflow is the pixel amount that the viewport should scroll past the beginning of the first item. |
| **refreshViewport**{: .method-name } (recalculateRows: `boolean`): `void` | Forces the viewport to update. |
| **updateScrollFromRange**{: .method-name } (newRange: `Range`): `void` | Updates the scroll position based on the updated range supplied. |

<br/>

### Usage:

Below is an `HTML` implementation of attaching a viewport to the table to render virtual scrolling content.

#### Property Binding: 

Both `arrowDownSpeed` and `arrowUpSpeed` are defined to dictate how many rows are scrolled when each corresponding buttons are pressed, in this case it is 1 row. `preItemOverflow` and `postItemOverflow` defines how many rows are rendered before the first visible item in the viewport, in this case it is 2 rows.

#### Event Emitters:

`(itemAdded)` emits an event when a new row is added.

`(itemRemoved)` emits an event when a row is deleted.

`(itemUpdated)` emits an event when an existing row is rerendered.

`(rangeUpdated)` emits an event when the viewport range changes.

`(viewportScrolled)` emits an event when viewport is scrolled.

`(viewportReady)` emits an event when viewport is ready to be initialized.

`(viewportInitialized)` emits an event when the viewport has intialized and is ready to scroll.

```html
<tablejs-grid>
    <table 
        tablejsScrollViewport
        arrowDownSpeed="1"
        arrowUpSpeed="1"
        preItemOverflow="2"
        postItemOverflow="2"
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

Below is a `Typescript` example implementation for all event emitter functions specified above.

```typescript
itemAdded(e: ScrollViewportEvent): void {}
itemRemoved(e: ScrollViewportEvent): void {}
itemUpdated(e: ScrollViewportEvent): void {}
rangeUpdated(e: ScrollViewportEvent): void {}
viewportScrolled(e: ScrollViewportEvent): void {}
viewportReady(e: any): void {}
viewportInitialized(e: any): void {}
```

#### Keyboard Shortcuts for Windows:

| Keys | Description |
| ---- | ----------- |
| End | Scroll to End |
| Home | Scroll to Top |
| Page Up | Page Up |
| Page Down | Page Down |
| Up Arrow | Up 1 Row |
| Down Arrow | Down 1 Row |

<br/>

#### Keyboard Shortcuts for Mac:

| Keys | Description |
| ---- | ----------- |
| End | Command + Up Arrow |
| Home | Command + Down Arrow |
| Page Up | Fn + Up Arrow |
| Page Down | Fn + Down Arrow |
| Up Arrow | Up 1 Row |
| Down Arrow | Down 1 Row |

<br/>