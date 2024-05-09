---
category: Classes
title: 'FilterComparator'
page: 'api'
layout: null
---

#### Version Available: `1.3.0 or higher, 2.0.0 or higher`

```typescript
import { FilterComparator } from '@transunion-ui/tablejs';
```

#### Description:

Extends the `Comparator` class.  Contains static comparator functions for use in filtering arrays.

### Methods:

| Method        | 
| ------------- |
| **getModifiedValue**{: .method-name } |
| `[static]` Returns a value modified by a variableMappers function. If an array of variableMappers functions is supplied, an index value for the desired variableMappers function is required. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| variableMappers: <br/> `Function | (Function | null)[] | null` |
| index: `number` |
{: .single-column }

| Returns       |
| ------------- |
| `any` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **CONTAINS_STRING**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array contains the `string` provided by the `FilterOptions.filterValue` |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **CONTAINS_WORD**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array contains the word provided by the `FilterOptions.filterValue` |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **STARTS_WITH**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array starts with the provided `FilterOptions.filterValue` |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **ENDS_WITH**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array ends with the provided `FilterOptions.filterValue` |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **WORD\_STARTS\_WITH**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array has a word that starts with the provided `FilterOptions.filterValue` |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **WORD\_ENDS\_WITH**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array has a word that ends with the provided `FilterOptions.filterValue` |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **EQUALS**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array equals (==) the provided `FilterOptions.filterValue`. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **STRICT_EQUALS**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array strictly equals (===) the provided `FilterOptions.filterValue`. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **LESS_THAN**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array is less than `FilterOptions.filterValue` provided. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **GREATER_THAN**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array is greater than `FilterOptions.filterValue` provided. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **LESS\_THAN\_OR\_EQUAL**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array is less than or equal to the `FilterOptions.filterValue` provided. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **GREATER\_THAN\_OR\_EQUAL**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array is greater than or equal to the `FilterOptions.filterValue` provided. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **IS\_AFTER\_DATE**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the `Date` value from the array comes after the date provided by the `FilterOptions.filterValue`. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **IS\_BEFORE\_DATE**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the `Date` value from the array comes before the date provided by the `FilterOptions.filterValue`. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **DATE\_IS**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the `Date` value from the array is the same as the date provided by the `FilterOptions.filterValue`. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **IS\_ON\_OR\_AFTER\_DATE**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the `Date` value from the array is on or after the date provided by the `FilterOptions.filterValue`. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **IS\_ON\_OR\_BEFORE\_DATE**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the `Date` value from the array is on or before the date provided by the `FilterOptions.filterValue`. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **IS\_TRUE**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array is `true`. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **IS\_FALSE**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array is `false`. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **IS\_TRUTHY**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array is truthy. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **IS\_FALSY**{: .method-name } |
|  `[static]` A comparator function that filters items from an array by evaluating if the value from the array is falsy. |
{: .single-column }

| Parameters    |
| ------------- |
| value: `any` |
| index?: `number` |
| array?: `any[]` |
{: .single-column }

| Returns       |
| ------------- |
| `boolean` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **triggerNoFilterOptionsError**{: .method-name } |
| `[static]` A function that throws an error whenever a `FilterOptions` is not specified. |
{: .single-column }

| Returns       |
| ------------- |
| `void` |
{: .single-column }

<br/>

### Usage:

See [FilterOptions](./#/filter-options)

