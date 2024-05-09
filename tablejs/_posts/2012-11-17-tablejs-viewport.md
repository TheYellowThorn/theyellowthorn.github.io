---
category: Directives
title: 'TablejsViewport'
page: 'api'
layout: null
---

#### Version Available: `1.2.0 or higher, 2.0.0 or higher`

### Selector: `[tablejsViewport]`

#### Description:

Designates which tbody tag to display viewport items. (e.g.: `<tbody tablejsViewport>...</tbody>`)

### Usage:

Below is an `HTML` implementation of designating a `tbody` tag as the viewport for displaying table row items.

```html
<tablejs-grid>
    <table>
        <thead>
            <tr>
                <th>
                    <div> ... </div>
                </th>
            <tr>
        </thead>
        <tbody tablejsViewport>
            <tr>
                <td>
                    <div> ... </div>
                </td>
            </tr>
        </tbody>
    </table>
</tablejs-grid>    
```