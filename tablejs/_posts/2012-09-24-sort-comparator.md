---
category: Classes
title: 'SortComparator'
page: 'api'
layout: null
---

#### Version Available: `1.3.0 or higher, 2.0.0 or higher`

```typescript
import { SortComparator } from '@tablejs/community';
```

#### Description:

Extends the `Comparator` class.  Contains static comparator functions for use in sorting arrays.

### Methods:

| Method        | 
| ------------- |
| **DATE**{: .method-name } |
|  `[static]` A comparator function for sorting items by date |
{: .single-column }

| Parameters    |
| ------------- |
| valueA: `any` |
| valueB: `any` |
{: .single-column }

| Returns       |
| ------------- |
| `number` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **NUMERIC**{: .method-name } |
|  `[static]` A comparator function for sorting items in numeric order |
{: .single-column }

| Parameters    |
| ------------- |
| valueA: `any` |
| valueB: `any` |
{: .single-column }

| Returns       |
| ------------- |
| `number` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **BOOLEAN**{: .method-name } |
|  `[static]` A comparator function for sorting items by boolean values |
{: .single-column }

| Parameters    |
| ------------- |
| valueA: `any` |
| valueB: `any` |
{: .single-column }

| Returns       |
| ------------- |
| `number` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **TRUTHY**{: .method-name } |
|  `[static]` A comparator function for sorting items by truthy |
{: .single-column }

| Parameters    |
| ------------- |
| valueA: `any` |
| valueB: `any` |
{: .single-column }

| Returns       |
| ------------- |
| `number` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **ALPHABETICAL**{: .method-name } |
|  `[static]` A comparator function for sorting items in alphabetical order |
{: .single-column }

| Parameters    |
| ------------- |
| valueA: `any` |
| valueB: `any` |
{: .single-column }

| Returns       |
| ------------- |
| `number` |
{: .single-column }

<br/>

| Method        | 
| ------------- |
| **triggerNoSortOptionsError**{: .method-name } |
| `[static]` A function that throws an error when a `SortOptions` object is not supplied. |
{: .single-column }

| Returns       |
| ------------- |
| `void` |
{: .single-column }

<br/>

### Usage:

See [SortOptions](./#/sort-options)
