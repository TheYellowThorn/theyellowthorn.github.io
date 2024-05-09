---
category: Directives
title: 'EditableCellDirective'
page: 'api'
layout: null
---

#### Version Available: `All Versions`

### Selector: `[tablejsEditableCell]`
```typescript
import { EditableCellDirective } from '@transunion-ui/tablejs';
```

#### Description:

Makes a cell editable in the grid. A custom validator function can be supplied for validating the value within the cell. The validator function is triggered on the input event of the input element. Regular expressions can also be added as part of the validation.

### Properties:

| Name          | Description   |
| ------------- | ------------- |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **initialData**: <br/>`any` | Used to provide initial data into the cell. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **validatorParams**: <br/>`any[]` | Additional parameters besides the input string supplied to the validator function. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **regExp**: <br/>`string` | Regular expression used to validate the cell. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **regExpFlags**: <br/>`string` | Regular expression flags. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **list**: <br/>`string[]` | An array of valid values allowed in the editable cell. |
| **containerDiv** : `HTMLDivElement` | Holds a created `div` element. |
| **input** : `HTMLInputElement` | Holds a created `input` node. |
| **dataList** : `HTMLDataListElement` | Holds inputted data list. |
| **option** : `HTMLOptionElement` | Placeholder value for populating an empty data list. |
| **lastText** : `string` | Placeholder value for most recent `input` element's text value. |
| **originalText** : `string` | Holds cell `input` element's original text value. |
| **lastValidInput** : `string` | Holds cell `input` element's last valid text value. |

<br/>
### Methods:

| Method        | Description | 
| ------------- | ----------- |
| [@HostListener](https://angular.io/api/core/HostListener){:target="_blank" rel="noopener"} {% raw %}(`document:keydown.enter`, [`$event`]){% endraw %} **onKeyDownHandler**{: .method-name } (event: `KeyboardEvent`): `void` | Function that listens for keyboard event and modfies cell view based on corresponding event input. |
| [@HostListener](https://angular.io/api/core/HostListener){:target="_blank" rel="noopener"} {% raw %}(`click`, `[$event]`){% endraw %} **onClick**{: .method-name } (event: `MouseEvent`): `void` | Function that listens for click event that focuses view on selected element. |
| [@Input()](https://angular.io/api/core/Input){:target="_blank" rel="noopener"} **validator**{: .method-name } <br/>`(inputStr: string, ..args: any[]) => boolean` | User-defined function to validate the value of the cell. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **cellInput**{: .method-name } (): <br/>`EventEmitter<any>` | A user-defined function triggered with the edited value of an edited /changed cell. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **cellFocusOut**{: .method-name } (): <br/>`EventEmitter<any>` | Triggered when the focus of the cell has changed. |
| [@Output()](https://angular.io/api/core/Output){:target="_blank" rel="noopener"} **cellValidation**{: .method-name } (): <br/>`EventEmitter<any>` | A user-defined function supplied to catch when a cell validates. |
| **onFocusOut**{: .method-name } (): `void` | Function that is fired when the cell loses focus. |
| **createDataList**{: .method-name } (): `void` | Function that creates a data list. |
| **getCellObject**{: .method-name } (): `any` | Function that will return a specfied cell object. |
| **validateInput**{: .method-name } (): `void` | Function that will validate cell input values. |

<br/>

### Usage:

Below is an `HTML` implementation of turning a cell into an editable cell by using the `tablejsEditableCell` directive. A custom `validator` function is supplied to validate the cell's contents.

#### Regular Expressions: 

A regular expression can also be added as part of the validation. In the example below, we are adding a regular expression of ^[A-Za-z ]*$, which restricts the editable cell to only allow inputs of letters and spaces. Regular expression flags can also be added for more customizability. In this case, the `g` flag matches the `regExp` pattern multiple times, while the `i` flag makes the `regExp` case insensitive.

#### Event Emitters:

The `(cellInput)` event emitter calls a user-defined function when the user changes the cell's value.

The `(cellValidation)` event emitter triggers a user-defined function when the cell validates.

The `(cellFocusOut)` event emitter is triggered when the focus of a cell has exited.

```html
<td>
    <div tablejsDataColClass="name" initialWidth="22%">
        <span
            #nameSpanRef
            tablejsEditableCell
            [validator]="isNotEmpty"
            regExp="^[A-Za-z ]*$"
            regExpFlags="gi"
            (cellInput)="updateCellValue(purchase, 'name', $event)"
            (cellValidation)="onEditableCellValidated($event)"
            (cellFocusOut)="onEditableCellFocusOut($event)"
            >
            {{ purchase.name }}
        </span>
    </div>
</td>
```

<br/>

Below is a `Typescript` implementation of the user-defined functions that the `tablejsEditableCell` event emitters call in the `HTML` example above. The `updateCellValue` function is called when the `cellInput` event emitter emits, and updates an item's value with the new content provided. The `onEditableCellValidated` takes a boolean value which represents whether the cell input is valid. The `onEditableCellFocusOut` event emitter is setting the current span that most recently lost focus. 

```typescript
export class EditableCellsComponent {
    currentSpan: HTMLElement | null;
    currentCellIsValid: boolean = true;

    updateCellValue(item: any, varName: string, content: any) {
        if (content.currentValue !== content.lastValidInput) {
            item[varName] = content.originalValue;
        } else {
            item[varName] = content.currentValue;
        }
    }

    onEditableCellValidated(isValid: boolean) {
        this.currentCellIsValid = isValid;
    }

    onEditableCellFocusOut(e: Event) {
        this.currentSpan = e.target;
    }
}
```
