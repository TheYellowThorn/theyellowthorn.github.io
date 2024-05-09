---
category: Services
title: 'FilterSortService'
page: 'api'
layout: null
---

#### Version Available: `1.3.0 or higher, 2.0.0 or higher`

```typescript
import { FilterSortService } from '@transunion-ui/tablejs';
```

#### Description:

`FilterSortService` provides several methods for filtering and sorting table data using `SortOptions` and `FilterOptions` objects.

### Properties:

| Property          | Description   |
| ------------- | ------------- |
| **currentFilterOptions**: <br/>`IFilterOptions` | Returns the `IFilterOptions` currently being used to filter an array of items |
| **currentSortOptions**: <br/>`ISortOptions` | Returns the `ISortOptions` currently being used to sort an array of items |
| **itemsBeingFilteredAndSorted**: <br/>`any[]` | The array of items being sorted or filtered |
| **sortDirection**: <br/>`number` | Returns the direction the of the current `ISortOptions` being sorted (eg. `SortDirection.ASCENDING,`, `SortDirection.DESCENDING`, `SortDirection.NONE`) |
| **ignoreCase**: <br/>`boolean` | Returns whether the current `ISortOptions` or `IFilterOptions` is ignoring case-sensitivity |


<br/>
### Methods:

| Method        | 
| ------------- |
| **filterAndSortItems**{: .method-name } |
| Returns an array of items filtered by the `variableIdentifiers` supplied to the corresponding `IFilterOptions`. |
{: .single-column }

| Parameters    |
| ------------- |
| items:<br/>`any[]` |
| filterOptions:<br/>`IFilterOptions | IFilterOptions[] | FilterOptions | FilterOptions[]` |
| sortOptions:<br/>`ISortOptions | ISortOptions[] | SortOptions | SortOptions[]` |
{: .single-column }

| Returns       |
| ------------- |
| `any[]` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **getFilterValuesFromPropertyIndentifiers**{: .method-name } |
|  Returns an array of values usable in a comparator function.  These values are derived from `FilterOptions.variableIdentifiers`.  If no variable identifier is supplied, this method will return an array containing only the the single item being filtered.  |
{: .single-column }

| Parameters    |
| ------------- |
| value: <br/>`any` |
{: .single-column }

| Returns       |
| ------------- |
| `any[]` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **getSortValuesFromPropertyIdentifiers**{: .method-name } |
| Returns an array of two values for comparison in a comparator function.  These values are derived from `SortOptions.variableIdentifier`.  If no variable identifier is supplied, this method will return an array containing the original valueA and valueB values for comparison. |
{: .single-column }

| Parameters    |
| ------------- |
| valueA: <br/>`any` |
| valueB: <br/>`any`  |
{: .single-column }

| Returns       |
| ------------- |
| `any[]` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **isString**{: .method-name } |
| Determines whether a given value is a `string`. |
{: .single-column }

| Parameters    |
| ------------- |
| val: <br/>`any` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/> 

| Method        | 
| ------------- |
| **filterItemsByVarNames**{: .method-name } |
| Returns an array of filtered items by their name, using the items `IFilterOptions`. |
{: .single-column }

| Parameters    |
| ------------- |
| items: <br/>`any[]` |
| filterOptions: <br/> `IFilterOptions | FilterOptions | null` |
{: .single-column}

| Returns       |
| ------------- |
| `any[]` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **sortItemsByVarName**{: .method-name } |
| Returns an array of items sorted by the variableIdentifier supplied to the corresponding `ISortOptions`. |
{: .single-column }

| Parameters    |
| ------------- |
| items: <br/>`any[]` |
| sortOptions: <br/>`ISortOptions | null` |
{: .single-column }

| Returns       |
| ------------- |
| `any[]` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **multiSortItemsByVarName**{: .method-name } |
| Returns an array of items sorted by the variableIdentifiers from multiple `ISortOptions`. |
{: .single-column }

| Parameters    |
| ------------- |
| items: <br/>`any[]` |
| sortOptionsGroup: <br/>`(ISortOptions | null)[] | (SortOptions | null)[]` |
{: .single-column }

| Returns       |
| ------------- |
| `any[]` |
{: .single-column }

<br/>

### Usage:

Below is a `Typescript` example that utilizes the `FilterSortService.filterAndSortItems` method to sort an array of objects that contain ID and name properties. The items are filtered and sorted based on a set of user-defined filter and sort options.

```typescript
import {SortComparator, FilterComparator} from '@transunion-ui/tablejs';

export class FilterSortServiceExample {
    
    employees: any[] = [
        {id: 2, name: 'jill'}, 
        {id: 4, name: 'bill'}, 
        {id: 8, name: 'mike'}, 
        {id: 1, name: 'bob'}, 
        {id: 21, name: 'kyle'}
    ];
    mySortOptions: SortOptions;
    myFilterOptions: FilterOptions;

    constructor(private filterSortService: FilterSortService){
        this.setSortOptions();
        this.setFilterOptions();
        this.filterEmployees();
    }

    setSortOptions(): void {
        this.mySortOptions = new SortOptions(
            'id',
            SortComparator.NUMERIC
            SortDirection.NONE
        );
    }

    setFilterOptions(): void {
        this.myFilterOptions = new FilterOptions(
            'name',
            FilterComparator.STARTS_WITH, 
            'b'
        );
    }

    filterEmployees(): void {
        sortOptions.nextSortDirection(); // Changes sortOptions's sort direction to SortDirection.ASCENDING

        let filteredEmployees: any[] = this.filterSortService.filterAndSortItems(
            this.employees,
            this.myFilterOptions,
            this.mySortOptions
        );
        console.log(filteredEmployees); // filteredEmployees = [{id: 1, name: 'bob'}, {id: 4, name: 'bill'}]
    }
}
```