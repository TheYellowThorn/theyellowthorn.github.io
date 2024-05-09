---
category: Classes
title: 'FilterOptions'
page: 'api'
layout: null
---

#### Version Available: `1.3.0 or higher, 2.0.0 or higher`

```typescript
import { FilterOptions } from '@tablejs/community';
```

#### Description:

A set of filter options for filtering an array of items.  Implements `IFilterOptions`.

### Properties:

| Property          | Description   |
| ------------- | ------------- |
| **id**: `string` | An identifier for this set of options |
| **variableIdentifiers**: <br/>`string | string[]` | A property or array of property identifiers used to determine the value from an item that should be filtered (ex: `'name'` returns the value of `item.name`)  |
| **ignoreCase**: `boolean` | Option to ignore case-sensitivity |
| **ignoreTimeOfDay**: `boolean` | Option to ignore the time of day when comparing `Date` objects |
| **comparator**: <br/>`(element: any, index: number, array: any[]) => boolean` | A function used for comparing values.  If the function returns true, the item will be pushed into the filtered array.  A false return value will exclude the compared item from the filtered array |
| **variableMappers?**: <br/>`Function | Function[]` | `Optional` Function(s) that will modify the value(s) of an item before it is filtered.  Filtering comparison will occur on the modified value |
| **filterValue**: <br/>`Function | Function[]` | The value by which all filtering should be compared |
| **matchType**: <br/>`string | MatchType.ALL | MatchType.ANY` | A match type to determine whether a comparator function requires a single identifier to match the `filterValue` or all identifiers |

<br/>

### Usage: 

Below is an `Typescript` implementation where an array of objects holding IDs are all filtered by their ID value. In this case, IDs that are greater than or equal to 2 will be returned. 

```typescript
import {FilterOptions, FilterComparator, FilterSortService, MatchType} from '@tablejs/community';

export class VariableIdentifier implements OnInit {
    items: any[] = [{id: 1}, {id: 4}, {id: 2}, {id: 8}, {id: 21}];
    myFilterOptions: FilterOptions;

    constructor(private filterSortService: FilterSortService){
        this.getIDsGreaterThanOrEqualToTwo();
    }

    getIDsGreaterThanOrEqualToTwo(): void {
        this.myFilterOptions = new FilterOptions(
            'id',
            FilterComparator.GREATER_THAN_OR_EQUAL,
            2,
            MatchType.ALL,
            true
        );

        let filteredValues: any[] = this.filterSortService.filterAndSortItems(
            this.items,
            this.myFilterOptions,
            null
        );
        console.log(filteredValues); // filteredValues = [{id: 4}, {id: 2}, {id: 8}, {id: 21}]
    }
}
```

<br/>

#### Using `MatchType.ALL`:

Below is a `Typescript` implementation where an array of objects holding a person's favorite food are all filtered by a common string they each contain. In this case, the objects containing a given person's name and their favorite food will both be filtered if both properties' values contain the string 'Che'.

```typescript
import {FilterOptions, FilterComparator, FilterSortService, MatchType} from '@tablejs/community';

export class MultipleVariableIdentifier implements OnInit {
    characterDetails: any[] = [{name: 'Chester Cheetah', food: 'Cheetos'}, {name: 'Mickey Mouse', food: 'Cheese'}];
    myFilterOptions: FilterOptions;

    constructor(private filterSortService: FilterSortService){
        this.getFavoriteFood();
    }

    getFavoriteFood(): void {
        this.myFilterOptions = new FilterOptions(
            ['name', 'food'],
            FilterComparator.CONTAINS_STRING,
            'Che',
            MatchType.ALL,  // By using MatchType.ALL, each of the variable identifiers' values must match in order for 
                           // the item to be filtered.
            true
        );

        let filteredValues: any[] = this.filterSortService.filterAndSortItems(
            this.characterDetails,
            this.myFilterOptions,
            null
        );
        console.log(filteredValues); // filteredValues = [{name: 'Chester Cheetah', food: 'Cheetos'}]
    }
}
```
<br/>

#### Using `MatchType.ANY`:

Below is a `Typescript` implementation where using `MatchType.ANY` will return an item if either its price or its tax rate are greater than 0.099.

```typescript
import {FilterOptions, FilterComparator, FilterSortService, MatchType} from '@tablejs/community';

export class MatchTypeAny implements OnInit {
    items: any[] = [{price: 342.07, taxRate: 0.095}, {price: 12.19, taxRate: 0.1}, {price: 0.099, taxRate: 0.05}];
    myFilterOptions: FilterOptions;

    constructor(private filterSortService: FilterSortService){
        this.filterPriceAndTaxRates();
    }

    filterPriceAndTaxRates(): void {
        this.myFilterOptions = new FilterOptions(
            ['price', 'tax'],
            FilterComparator.GREATER_THAN,
            0.099,
            MatchType.ANY, 
            true
        );

        let filteredValues: any[] = this.filterSortService.filterAndSortItems(
            this.items,
            this.myFilterOptions,
            null
        );
        console.log(filteredValues); // filteredValues = [{price: 342.07, taxRate: 0.095}, {price: 12.19, taxRate: 0.1}]
    }
}
```

<br/>

#### Filtering Using Mapped Variables:

Below is a `Typescript` implementation that uses a mapper function to convert the numeric price value into a string value. Filtering is then done on the string value returned from the mapper function.

```typescript
import {FilterOptions, FilterComparator, FilterSortService, MatchType} from '@tablejs/community';

export class VariableMapperExample implements OnInit {
    items: any[] = [{price: 342.07}, {price: 12.19}, {price: 45.59}, {price: 21.00}];
    containsStringFilterOptions: FilterOptions;

    constructor(private filterSortService: FilterSortService){
        this.filterOnPriceAsString();
    }

    filterOnPriceAsString(): void {
        this.containsStringFilterOptions = new FilterOptions(
            ['price'],
            FilterComparator.CONTAINS_STRING,
            '3',
            MatchType.ANY,
            true
        );

        this.containsStringFilterOptions.variableMappers = [ 
            (item: any) => {
                return this.convertItemPriceToCurrencyString(item);
            }
        ];

        let filteredValues: any[] = this.filterSortService.filterAndSortItems(
            this.items,
            this.containsStringFilterOptions,
            null
        );
        console.log(filteredValues); // filteredValues = [{price: 342.07}];
    }

    convertItemPriceToCurrencyString(item: any): string {
        return '$' + (item.price).toString();
    }
}
```

<br/>

#### Filtering with Multiple FilterOptions:

Below is a `Typescript` implementation that filters a set of objects between a range of 20 to 25.

```typescript
import {FilterOptions, FilterComparator, FilterSortService} from '@tablejs/community';

export class MultipleFilterOptions implements OnInit {
    prices: any[] = [{price: 342.07}, {price: 12.19}, {price: 45.59}, {price: 21.00}];
    lessThanOrEqualFilterOptions: FilterOptions;
    greaterThanOrEqualFilterOptions: FilterOptions;
    
    constructor(private filterSortService: FilterSortService) {
        this.filterBetween20and25();
    }

    filterBetween20and25(): void {
        this.lessThanOrEqualFilterOptions = new FilterOptions(
            ['price'],
            FilterComparator.LESS_THAN_OR_EQUAL,
            25,
            MatchType.ANY,
            true
        );

        this.greaterThanOrEqualFilterOptions = new FilterOptions(
            ['price'],
            FilterComparator.GREATER_THAN_OR_EQUAL,
            20,
            MatchType.ANY,
            true
        );

        let filteredPurchases: any[] = this.filterSortService.filterAndSortItems(
            this.prices,
            [this.lessThanOrEqualFilterOptions, this.greaterThanOrEqualFilterOptions],
            null
        );
        console.log(filteredPurchases); // filteredPurchases = [{price: 21.00}]
    }
}
```

<br/>