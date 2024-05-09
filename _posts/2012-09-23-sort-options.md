---
category: Classes
title: 'SortOptions'
page: 'api'
layout: null
---

#### Version Available: `1.3.0 or higher, 2.0.0 or higher`

```typescript
import { SortOptions } from '@transunion-ui/tablejs';
```

#### Description:

A set of sorting options used for sorting an array of items. Implements `ISortOptions`.

### Properties:

| Property          | Description   |
| ------------- | ------------- |
| **id** : `string` | An identifier for this set of options. |
| **variableIdentifier** : `string | null | undefined` | A property or array of property identifiers used to determine the value from an item that should be sorted (ex: `'name'` returns the value of `item.name`) |
| **initialSortDirection** : `number | SortDirection.DESCENDING | SortDirection.NONE | SortDirection.ASCENDING` | Holds the initial sort direction. |
| **ignoreCase** : `boolean` | Option to ignore case-sensitivity. |
| **ignoreTimeOfDay** : `boolean` | Option to ignore the time of day when comparing `Date` objects. |
| **sortOrder** : `number` | Indicates the order in which the `FilterSortService` will filter this `SortOptions` object in relation to the other `SortOptions` objects that are supplied to the `FilterSortService.filterAndSortItems` function. |
| **comparator** : <br/> `(valueA: any, valueB: any) => number` | A function used for comparing values. If the function returns < 0, valueA will sort before valueB. If the function returns > 0, valueA will sort after valueB. If the function returns 0, the order will remain unchanged between the two values. |
| **variableMapper?** : `Function | null` | `[Optional]` Function(s) used to modify values of an item before it is ordered. |
| **useLocaleCompare** : `boolean` | Sorts a string based on a locale's sorting rules. See [localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare){:target="_blank"}. |
| **localeCompareOptions** : `[string | string[]] | [string | string[], Intl.CollatorOptions] | null` |Options provided for useLocaleCompare sorting. See [localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare){:target="_blank"}. |
| **directionOrder** : `(number | SortDirection.ASCENDING | SortDirection.DESCENDING | SortDirection.NONE)[]` | The order in which the `SortOptions` will sort in when the SortOptions.nextSortDirection() function is called. |
| **sortDirection** : `number | SortDirection.ASCENDING | SortDirection.DESCENDING | SortDirection.NONE` | The current sorting direction of the `SortOptions` object. |

<br/>

### Methods:

| Property          | Description   |
| ------------- | ------------- |
| **nextSortDirection** (): `void` | Changes the sort direction to the next `SortDirection` value in the `directionOrder` array. If the direction is the last `SortDirection` in the array, the `SortOptions` will revert to the first `SortDirection` in the `directionOrder` array. |

<br/>

### Usage:

#### Sorting with a Single SortOptions

In the `Typescript` example below, we are sorting the purchases array numerically and in ascending order.

```typescript
import {SortOptions, SortComparator, FilterSortService} from '@transunion-ui/tablejs';

export class NextSortingDirection implements OnInit {
    priceSortOptions: SortOptions;
    purchases: any[] = [{price: 342.07}, {price: 12.19}, {price: 45.77}, {price: 12.06}];

    constructor(public filterSortService: FilterSortService) {
        this.setSortOptions();
        this.sortPurchasesByPrice();
    }

    setSortOptions(): void {
        this.priceSortOptions = new SortOptions(
            'price',
            SortComparator.NUMERIC,
            SortDirection.NONE
        );
    }

    sortPurchasesByPrice(): void {
        this.priceSortOptions.nextSortDirection();

        let sortedPurchases: any[] = this.filterSortService.filterAndSortItems(
            this.purchases,
            null,
            this.priceSortOptions
        );
        console.log(sortedPurchases); // sortedPurchases = [{price: 12.06}, {price: 12.19}, {price: 45.77}, {price: 342.07}]
    }
}
```

<br/>

#### Sorting with Multiple SortOptions

In the `Typescript` example below, the purchases are sorted by name, item, and price.

```typescript
import {SortOptions, SortComparator, FilterSortService} from '@transunion-ui/tablejs';

export class SortOrder implements OnInit {
    priceSortOptions: SortOptions;
    nameSortOptions: SortOptions;
    itemSortOptions: SortOptions;

    purchases: any[] = [
        {name: 'adam', item: 'action figure', price: 342.07}, 
        {name: 'kyle', item: 'comic book', price: 12.19}, 
        {name: 'bill', item: 'video game', price: 60}, 
        {name: 'jill', item: 'bracelet', price: 12.06}
    ];

    constructor(private filterSortService: FilterSortService) {
        this.setSortOptions();
        this.sortPurchasesByNameItemAndPrice();
    }

    setSortOptions(): void {
        this.nameSortOptions = new SortOptions(
            'name',
            SortComparator.ALPHABETICAL,
            SortDirection.NONE
        );
        this.itemSortOptions = new SortOptions(
            'item',
            SortComparator.ALPHABETICAL,
            SortDirection.DESCENDING
        );
        this.priceSortOptions = new SortOptions(
            'price',
            SortComparator.NUMERIC,
            SortDirection.NONE
        );
    }

    sortPurchasesByNameItemAndPrice(): void {
        this.nameSortOptions.nextSortDirection();
        this.itemSortOptions.nextSortDirection();
        this.priceSortOptions.nextSortDirection();

        let sortedPurchases: any[] = this.filterSortService.filterAndSortItems(
            this.purchases,
            null,
            [this.nameSortOptions, this.itemSortOptions, this.priceSortOptions]
        );
        console.log(sortedPurchases);
        // [{name: 'jill', item: 'bracelet', price: 12.06},
        // {name: 'kyle', item: 'comic book', price: 12.19},
        // {name: 'bill', item: 'video game', price: 60},
        // {name: 'adam', item: 'action figure', price: 342.07}]
                                     
    }
}
```

<br/>
