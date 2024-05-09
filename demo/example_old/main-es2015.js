(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tablejs-grid-example [className]=\"themeService.theme\"></tablejs-grid-example>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/export-to-excel-overlay/export-to-excel-overlay.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/export-to-excel-overlay/export-to-excel-overlay.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"excel-export-menu-container\">\n\t<h3>Export to Excel Options</h3>\n\n\t<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\">\n\n\t\t<div>\n\t\t\t<div class=\"form-control checkbox-container\">\n\t\t\t\t<input class=\"styled-checkbox\" [formControlName]=\"'exportCustomerData'\" [attr.id]=\"'exportCustomerData'\" type=\"checkbox\"\n\t\t\t\t value=\"\" #exportCustomerData>\n\t\t\t\t<label [attr.for]=\"'exportCustomerData'\">Export Customer Data</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-control checkbox-container\">\n\t\t\t\t<input class=\"styled-checkbox\" [formControlName]=\"'exportTransactionData'\" [attr.id]=\"'exportTransactionData'\" type=\"checkbox\"\n\t\t\t\t value=\"\" #exportTransactionData>\n\t\t\t\t<label [attr.for]=\"'exportTransactionData'\">Export Transaction Data</label>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"excel-export-filter-container\">\n\t\t\t<div class=\"form-control checkbox-container\">\n\t\t\t\t<input class=\"styled-checkbox\" [formControlName]=\"'selectedRecordsOnly'\" [attr.id]=\"'selectedRecordsOnly'\" type=\"checkbox\"\n\t\t\t\t value=\"\" #selectedRecordsOnly>\n\t\t\t\t<label [attr.for]=\"'selectedRecordsOnly'\">Export Selected Records Only</label>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"button-container\">\n\t\t\t<button class=\"btn cancel\" (click)=\"closeExportToExcelModal()\">Cancel</button>\n\t\t\t<button class=\"btn\" type=\"submit\" [disabled]=\"this.exportableItems.length === 0\">\n\t\t\t\t<i class=\"fas fa-file-export\"></i>\n\t\t\t\t<span>Export</span>\n\t\t\t</button>\n\t\t</div>\n\n\t</form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/grid-example/grid-example.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/grid-example/grid-example.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"enable-menu\" [ngClass]=\"{ 'printing' : printing }\">\n\t<tablejs-fps-meter></tablejs-fps-meter>\n\t<h2>Tablejs Functionality Menu</h2>\n\t<div class=\"form-control menu\">\n\n\t\t<span>\n\t\t\t<label for=\"enable-resize\" class=\"enable-labels\">Enable Resize</label>\n\t\t\t<label class=\"switch\">\n\t\t\t\t<input type=\"checkbox\" name=\"enable-resize\" (change)=\"toggleResize($event)\" [checked]=\"resizeEnabled\" />\n\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t</label>\n\t\t</span>\n\t\t<span>\n\t\t\t<label for=\"enable-reorder\" class=\"enable-labels\">Enable Column Reordering</label>\n\t\t\t<label class=\"switch\">\n\t\t\t\t<input type=\"checkbox\" name=\"enable-reorder\" (change)=\"toggleReorder($event)\" [checked]=\"reorderEnabled\" />\n\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t</label>\n\t\t</span>\n\t\t<span>\n\t\t\t<label for=\"enable-editable\" class=\"enable-labels\">Enable Cell Editing</label>\n\t\t\t<label class=\"switch\">\n\t\t\t\t<input type=\"checkbox\" name=\"enable-editable\" (change)=\"toggleCellEditability($event)\" [checked]=\"editableCellsEnabled\" />\n\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t</label>\n\t\t</span>\n\t\t<span>\n\t\t\t<label for=\"enable-sortable\" class=\"enable-labels\">Enable Column Sorting</label>\n\t\t\t<label class=\"switch\">\n\t\t\t\t<input type=\"checkbox\" name=\"enable-sortable\" (change)=\"toggleColumnSortability($event)\" [checked]=\"sortableColumnsEnabled\"\n\t\t\t\t/>\n\t\t\t\t<span class=\"slider round\"></span>\n\t\t\t</label>\n\t\t</span>\n\t</div>\n</div>\n<div class=\"data-options\">\n\t<span class=\"data-select\">\n\t\t<label class=\"data-labels\">Data Count</label>\n\t\t<label class=\"select\">\n\t\t\t<select (change)=\"rowsSelected($event)\" [value]=\"defaultSelectValue\">\n\t\t\t\t<option value=\"100\">100 Rows</option>\n\t\t\t\t<option value=\"1000\">1000 Rows</option>\n\t\t\t\t<option value=\"10000\">10000 Rows</option>\n\t\t\t\t<option value=\"100000\">100000 Rows</option>\n\t\t\t</select>\n\t\t</label>\n\t</span>\n\t<span class=\"data-select\">\n\t\t<label class=\"data-labels\">Theme Color</label>\n\t\t<label class=\"select\">\n\t\t\t<select (change)=\"themeColorSelected($event)\" [value]=\"themeService.themeColor\">\n\t\t\t\t<option value=\"blue\">Blue</option>\n\t\t\t\t<option value=\"orange\">Orange</option>\n\t\t\t\t<option value=\"green\">Green</option>\n\t\t\t\t<option value=\"purple\">Purple</option>\n\t\t\t\t<option value=\"gray\">Gray</option>\n\t\t\t\t<option value=\"silver\">Silver</option>\n\t\t\t</select>\n\t\t</label>\n\t</span>\n\t<span class=\"data-select\">\n\t\t<label class=\"data-labels\">Theme Size</label>\n\t\t<label class=\"select\">\n\t\t\t<select (change)=\"themeSizeSelected($event)\" [value]=\"themeService.themeSize\">\n\t\t\t\t<option value=\"extra-sm\">Extra Small</option>\n\t\t\t\t<option value=\"sm\">Small</option>\n\t\t\t\t<option value=\"reg\">Regular</option>\n\t\t\t\t<option value=\"lg\">Large</option>\n\t\t\t\t<option value=\"extra-lg\">Extra Large</option>\n\t\t\t</select>\n\t\t</label>\n\t</span>\n</div>\n<div class=\"grid-functions\">\n\t<span class=\"data-select\">\n\t\t<label class=\"data-labels\">Search</label>\n\t\t<label class=\"input\">\n\t\t\t<input type=\"text\" (input)=\"filterGridByText($event)\" />\n\t\t</label>\n\t</span>\n\t<span class=\"data-select print-container\">\n\t\t<label class=\"data-labels\"></label>\n\t\t<button class=\"btn\" (click)=\"print($event)\" [disabled]=\"sortedAndFilteredItems.length === 0\">\n\t\t\t<i class=\"fas fa-print\"></i>\n\t\t\t<span>Print Sale Data</span>\n\t\t</button>\n\t</span>\n\t<span class=\"data-select export-container\">\n\t\t<label class=\"data-labels\"></label>\n\t\t<button class=\"btn\" (click)=\"exportToExcel($event)\">Export to Excel</button>\n\t</span>\n</div>\n\n<tablejs-grid [ngClass]=\"{ 'printing': printing }\" class=\"grid-container print\" [dragAndDropGhostFilter]=\"dragDropFilter\"\n (columnResizeStart)=\"columnResizeStart($event)\" (columnResize)=\"columnResize($event)\" (columnResizeEnd)=\"columnResizeEnd($event)\"\n (columnReorderStart)=\"columnReorderStart($event)\" (columnReorder)=\"columnReorder($event)\" (columnReorderEnd)=\"columnReorderEnd($event)\">\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<tr tablejsGridRow>\n\t\t\t\t<th tablejsDataColClasses=\"expand-col, select-row-col\" colspan=\"2\" class=\"text-center\">\n\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"id-col, name-col, email-col, phone-col, rating-col\" colspan=\"5\" class=\"text-center\" reorderCol>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>Customer Information\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"total-sales-col, total-item-sales-col, gross-col, net-col\" colspan=\"4\" class=\"text-center\" reorderCol>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>Overall Sales Information\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t\t<tr tablejsGridRow>\n\t\t\t\t<th tablejsDataColClasses=\"expand-col\" colspan=\"1\" class=\"text-center\">\n\t\t\t\t\t<div>&nbsp;</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"select-row-col\" colspan=\"1\" class=\"text-center\" tablejsSortableCol>\n\t\t\t\t\t<div>\n\n\t\t\t\t\t\t<input class=\"styled-checkbox\" [ngClass]=\"{ 'indeterminate' : isIndeterminate() }\" (change)=\"selectAllRowsChanged($event)\"\n\t\t\t\t\t\t [attr.id]=\"'select-all-rows'\" type=\"checkbox\" value=\"\">\n\t\t\t\t\t\t<label class=\"to-front\" [ngClass]=\"{ 'shift' : sortableColumnsEnabled }\" [attr.for]=\"'select-all-rows'\"></label>\n\t\t\t\t\t\t<div *ngIf=\"sortableColumnsEnabled\" class=\"sort-icon\" [ngClass]=\"{ 'sort-down' : sortedDown('selected'), 'sort-up' : sortedUp('selected'), 'custom-sort' : true }\"\n\t\t\t\t\t\t (click)=\"sortByVar('selected');\">\n\t\t\t\t\t\t\t<i class=\"fas fa-filter\" (click)=\"openSelectedSort($event);\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"id-col\" colspan=\"1\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div *ngIf=\"sortableColumnsEnabled\" class=\"sort-icon\" [ngClass]=\"{ 'sort-shift' : resizeEnabled, 'sort-down' : sortedDown('id'), 'sort-up' : sortedUp('id') }\"\n\t\t\t\t\t\t (click)=\"sortByVar('id');\"></div>\n\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>ID\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"name-col\" colspan=\"1\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div *ngIf=\"sortableColumnsEnabled\" class=\"sort-icon\" [ngClass]=\"{ 'sort-shift' : resizeEnabled, 'sort-down' : sortedDown('name'), 'sort-up' : sortedUp('name') }\"\n\t\t\t\t\t\t (click)=\"sortByVar('name');\"></div>\n\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>Name\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"email-col\" colspan=\"1\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div *ngIf=\"sortableColumnsEnabled\" class=\"sort-icon\" [ngClass]=\"{ 'sort-shift' : resizeEnabled, 'sort-down' : sortedDown('email'), 'sort-up' : sortedUp('email') }\"\n\t\t\t\t\t\t (click)=\"sortByVar('email');\"></div>\n\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>Email\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"phone-col\" colspan=\"1\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div *ngIf=\"sortableColumnsEnabled\" class=\"sort-icon\" [ngClass]=\"{ 'sort-shift' : resizeEnabled, 'sort-down' : sortedDown('phone'), 'sort-up' : sortedUp('phone'), 'custom-sort' : true }\"\n\t\t\t\t\t\t (click)=\"sortByVar('phone');\">\n\t\t\t\t\t\t\t<i class=\"fas fa-filter\" (click)=\"openPhoneSort($event);\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>Phone\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"rating-col\" colspan=\"1\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div *ngIf=\"sortableColumnsEnabled\" class=\"sort-icon\" [ngClass]=\"{ 'sort-shift' : resizeEnabled, 'sort-down' : sortedDown('userRating'), 'sort-up' : sortedUp('userRating') }\"\n\t\t\t\t\t\t (click)=\"sortByVar('userRating');\"></div>\n\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>Average Rating\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"total-sales-col\" colspan=\"1\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div *ngIf=\"sortableColumnsEnabled\" class=\"sort-icon\" [ngClass]=\"{ 'sort-shift' : resizeEnabled, 'sort-down' : sortedDown('totalSales'), 'sort-up' : sortedUp('totalSales') }\"\n\t\t\t\t\t\t (click)=\"sortByVar('totalSales');\"></div>\n\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>Total Sales\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"total-item-sales-col\" colspan=\"1\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div *ngIf=\"sortableColumnsEnabled\" class=\"sort-icon\" [ngClass]=\"{ 'sort-shift' : resizeEnabled, 'sort-down' : sortedDown('totalItemsSold'), 'sort-up' : sortedUp('totalItemsSold') }\"\n\t\t\t\t\t\t (click)=\"sortByVar('totalItemsSold');\"></div>\n\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>Items Sold\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"gross-col\" colspan=\"1\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div *ngIf=\"sortableColumnsEnabled\" class=\"sort-icon\" [ngClass]=\"{ 'sort-shift' : resizeEnabled, 'sort-down' : sortedDown('gross'), 'sort-up' : sortedUp('gross') }\"\n\t\t\t\t\t\t (click)=\"sortByVar('gross');\"></div>\n\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>Gross Profit\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t\t<th tablejsDataColClasses=\"net-col\" colspan=\"1\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div *ngIf=\"sortableColumnsEnabled\" class=\"sort-icon\" [ngClass]=\"{ 'sort-shift' : resizeEnabled, 'sort-down' : sortedDown('net'), 'sort-up' : sortedUp('net') }\"\n\t\t\t\t\t\t (click)=\"sortByVar('net');\"></div>\n\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>Net Profit\n\t\t\t\t\t</div>\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t</table>\n\t<table class=\"table\" *ngIf=\"sortedAndFilteredItems.length === 0\">\n\t\t<tbody>\n\t\t\t<tr tablejsGridRow>\n\t\t\t\t<td class=\"text-nowrap\" style=\"grid-column-end: 12;\">\n\t\t\t\t\t<div>No data to display</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<cdk-virtual-scroll-viewport *ngIf=\"sortedAndFilteredItems.length !== 0\" class=\"tall-viewport\" tablejsInfiniteScroll autosize\n\t maxBufferPx=\"1000\" minBufferPx=\"1000\" #mainViewPort>\n\t\t<table class=\"table\">\n\t\t\t<tbody>\n\t\t\t\t<tr *cdkVirtualFor=\"let item of sortedAndFilteredItems; let i = index;\" [ngClass]=\"{ 'selected' : item.selected }\" tablejsGridRow>\n\t\t\t\t\t<td class=\"text-nowrap\" scope=\"row\">\n\t\t\t\t\t\t<div tablejsDataColClass=\"expand-col\" initialWidth=\"40\">\n\t\t\t\t\t\t\t<i *ngIf=\"item\" class=\"fas fa-angle-down\" [ngClass]=\"{ 'collapsed-arrow' : item.collapsed }\" (click)=\"toggleCollapse(item);\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div tablejsDataColClass=\"select-row-col\" initialWidth=\"80\">\n\t\t\t\t\t\t\t<input class=\"styled-checkbox\" (change)=\"rowSelectionChanged($event, item)\" [attr.id]=\"setRowCheckId(i)\" type=\"checkbox\"\n\t\t\t\t\t\t\t value=\"\" [checked]=\"item.selected\">\n\t\t\t\t\t\t\t<label [ngClass]=\"{ 'shift' : sortableColumnsEnabled }\" [attr.for]=\"setRowCheckId(i)\"></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div tablejsDataColClass=\"id-col\" initialWidth=\"120\">{{ item.id }}</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div tablejsDataColClass=\"name-col\" initialWidth=\"220\">\n\t\t\t\t\t\t\t<span *ngIf=\"editableCellsEnabled\" tablejsEditableCell [validator]=\"cellValidatorService.isNotEmpty\" regExp=\"^[A-Za-z0-9 ]*$\"\n\t\t\t\t\t\t\t regExpFlags=\"gi\" (cellInput)=\"onEditableCellInput(item, 'name', $event)\" (cellValidation)=\"onEditableCellValidated($event)\"\n\t\t\t\t\t\t\t (cellFocusOut)=\"onEditableCellFocusOut($event)\">\n\t\t\t\t\t\t\t\t{{ item.name }}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span *ngIf=\"!editableCellsEnabled\">{{ item.name }}</span>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div tablejsDataColClass=\"email-col\" initialWidth=\"250\">\n\t\t\t\t\t\t\t<span *ngIf=\"editableCellsEnabled\" tablejsEditableCell [validator]=\"cellValidatorService.emailIsValid\" regExpFlags=\"gi\" (cellInput)=\"onEditableCellInput(item, 'email', $event)\"\n\t\t\t\t\t\t\t (cellValidation)=\"onEditableCellValidated($event)\" (cellFocusOut)=\"onEditableCellFocusOut($event)\">\n\t\t\t\t\t\t\t\t{{ item.email }}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span *ngIf=\"!editableCellsEnabled\">{{ item.email }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div tablejsDataColClass=\"phone-col\" initialWidth=\"200\">{{ item.phone | phone:'US' }}</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div tablejsDataColClass=\"rating-col\" initialWidth=\"190\">\n\t\t\t\t\t\t\t<div class=\"star-container\" [matTooltip]=\"getRoundedRatingText(item.userRating)\" matTooltipPosition=\"left\" matTooltipClass=\"custom-tooltip\">\n\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t<div [style.width.%]=\"calculateUserRatingPerc(item.userRating)\" class=\"star-container-overlay\">\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div tablejsDataColClass=\"total-sales-col\" initialWidth=\"170\">{{ item.totalSales }}</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div tablejsDataColClass=\"total-item-sales-col\" initialWidth=\"170\">{{ item.totalItemsSold }}</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div tablejsDataColClass=\"gross-col\" initialWidth=\"210\">{{ item.gross | currency }}</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div tablejsDataColClass=\"net-col\" initialWidth=\"220\" [ngClass]=\"{ 'red-text' : item.net < 0 }\">{{ item.net | currency }}</div>\n\t\t\t\t\t</td>\n\n\t\t\t\t\t<td class=\"expand-content\">\n\t\t\t\t\t\t<div [ngClass]=\"{ 'collapsed': item.collapsed }\">\n\t\t\t\t\t\t\t<tablejs-transaction-grid [item]=\"item\" [resizeEnabled]=\"resizeEnabled\" [reorderEnabled]=\"reorderEnabled\" [editableCellsEnabled]=\"editableCellsEnabled\"\n\t\t\t\t\t\t\t [sortableColumnsEnabled]=\"sortableColumnsEnabled\"></tablejs-transaction-grid>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</cdk-virtual-scroll-viewport>\n</tablejs-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/grid-example/transaction-grid/transaction-grid.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/grid-example/transaction-grid/transaction-grid.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"data-select transaction-select\">\n\t\t<label class=\"data-labels\">Transaction Search</label>\n\t\t<label class=\"input\">\n\t\t\t<input type=\"text\" (input)=\"filterTransactionByText($event)\" [value]=\"getLastFilterText()\" />\n\t\t</label>\n\t</span>\n\t<tablejs-grid linkClass=\"sales-list\" class=\"nested-grid-container\" [dragAndDropGhostFilter]=\"dragDropFilter\" [resizeColumnWidthByPercent]=\"true\" *ngIf=\"!item.collapsed\"\n\t (columnResizeStart)=\"detailsColumnResizeStart($event)\" (columnResize)=\"detailsColumnResize($event)\" (columnResizeEnd)=\"detailsColumnResizeEnd($event)\"\n\t (columnReorderStart)=\"detailsColumnReorderStart($event)\" (columnReorder)=\"detailsColumnReorder($event)\" (columnReorderEnd)=\"detailsColumnReorderEnd($event)\">\n\t\t<table class=\"table\">\n\t\t\t<thead>\n\t\t\t\t<tr tablejsGridRow>\n\t\t\t\t\t<th tablejsDataColClasses=\"product-name-col\" class=\"text-center\" tablejsSortableCol>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div *ngIf=\"sortableColumnsEnabled\" class=\"sort-icon\" [ngClass]=\"{ 'sort-shift' : resizeEnabled, 'sort-down' : sortedDown('productName'), 'sort-up' : sortedUp('productName') }\"\n\t\t\t\t\t\t\t (click)=\"sortByVar('productName');\"></div>\n\t\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" tablejsResizableGrip></tablejs-horiz-resize-grip>\n\t\t\t\t\t\t\tProduct Name\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th tablejsDataColClasses=\"product-quantity-col\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>\n\t\t\t\t\t\t\tQuantity\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th tablejsDataColClasses=\"product-base-price-col\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>\n\t\t\t\t\t\t\tBase Price\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th tablejsDataColClasses=\"product-sale-price-col\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>\n\t\t\t\t\t\t\tSale Price\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th tablejsDataColClasses=\"product-shipping-cost-col\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>\n\t\t\t\t\t\t\tShipping Cost\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th tablejsDataColClasses=\"product-profit-col\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>\n\t\t\t\t\t\t\tProfit\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th tablejsDataColClasses=\"product-rating-col\" class=\"text-center\" reorderCol tablejsSortableCol>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<tablejs-reorder-grip *ngIf=\"reorderEnabled\" reorderGrip></tablejs-reorder-grip>\n\t\t\t\t\t\t\t<tablejs-horiz-resize-grip *ngIf=\"resizeEnabled\" resizableGrip></tablejs-horiz-resize-grip>\n\t\t\t\t\t\t\tStar Rating\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\n\t\t\t<tbody>\n\t\n\t\t\t\t<cdk-virtual-scroll-viewport class=\"nested-viewport\" [ngClass]=\"{ 'show-all' : item.printing }\" [style.height.px]=\"themeService.getFullTableHeight(item.sales.length)\"\n\t\t\t\t tablejsInfiniteScroll autosize #viewPort>\n\t\t\t\t\t<tr tablejsGridRow *cdkVirtualFor=\"let sale of getFilteredSales(item);\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div tablejsDataColClass=\"product-name-col\" initialWidth=\"20%\">{{ sale.productName }}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div tablejsDataColClass=\"product-quantity-col\" initialWidth=\"10%\">{{ sale.quantity }}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div tablejsDataColClass=\"product-base-price-col\" initialWidth=\"15%\">{{ sale.salePrice | currency }}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div tablejsDataColClass=\"product-sale-price-col\" initialWidth=\"15%\">{{ gridDataService.calculateItemSalePrice(sale) | currency }}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div tablejsDataColClass=\"product-shipping-cost-col\" initialWidth=\"15%\">{{ sale.shippingCost | currency }}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div tablejsDataColClass=\"product-profit-col\" initialWidth=\"15%\">{{ gridDataService.calculateItemNetProfit(sale) | currency }}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div tablejsDataColClass=\"product-rating-col\" initialWidth=\"10%\">\n\t\t\t\t\t\t\t\t<div class=\"star-container\" [matTooltip]=\"getRoundedRatingText(sale.starRating * 100)\" matTooltipPosition=\"left\" matTooltipClass=\"custom-tooltip\">\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t<div [style.width.%]=\"gridDataService.calculateStarPercent(sale)\" class=\"star-container-overlay\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</cdk-virtual-scroll-viewport>\n\t\t\t</tbody>\n\t\t</table>\n\t</tablejs-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/phone-filter/phone-filter.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/phone-filter/phone-filter.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"phone-filter-container\">\n\t<div class=\"triangle\"></div>\n\t<div>\n\t\t<span>Filter By Area Code</span>\n\t</div>\n\t<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\">\n\t\t<div class=\"filter-select-all\">\n\t\t\t<div class=\"form-control select-all\">\n\t\t\t\t<input class=\"styled-checkbox\" [ngClass]=\"{ 'indeterminate' : mixedCheckValues() }\" [formControlName]=\"'select-all'\" (change)=\"checkboxChanged($event)\"\n\t\t\t\t [attr.id]=\"'select-all'\" type=\"checkbox\" value=\"\" #selectAll>\n\t\t\t\t<label [attr.for]=\"'select-all'\">Select All</label>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"filter-options\">\n\t\t\t<div class=\"form-control\" *ngFor=\"let areaCode of areaCodes; let i = index;\">\n\t\t\t\t<input class=\"styled-checkbox\" [formControlName]=\"setId(i)\" (change)=\"checkboxChanged($event)\" [attr.id]=\"setId(i)\" type=\"checkbox\"\n\t\t\t\t value=\"\">\n\t\t\t\t<label [attr.for]=\"setId(i)\">({{ areaCode }}) ***-****</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"button-container\">\n\t\t\t<button (click)=\"resetFilter($event)\" class=\"btn full-width\">Reset</button>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/print-overlay/print-overlay.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/print-overlay/print-overlay.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"print-menu-container\">\n\t<h3>Grid Print Options</h3>\n\n\t<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\">\n\n\n\t\t<div>\n\t\t\t<div class=\"form-control print-control\">\n\t\t\t\t<label class=\"print-label\" [attr.for]=\"'rowStart'\">Customer Record Start</label>\n\t\t\t\t<label>\n\t\t\t\t\t<input type=\"text\" [formControlName]=\"'rowStart'\" />\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-control print-control\">\n\t\t\t\t<label class=\"print-label\" [attr.for]=\"'rowEnd'\">Customer Record End</label>\n\t\t\t\t<label>\n\t\t\t\t\t<input type=\"text\" [formControlName]=\"'rowEnd'\" />\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"print-filter-container\">\n\t\t\t<div class=\"form-control checkbox-container\">\n\t\t\t\t<input class=\"styled-checkbox\" [formControlName]=\"'selectedRowsOnly'\" (change)=\"selectedRowsChanged($event)\" [attr.id]=\"'selectedRowsOnly'\"\n\t\t\t\t type=\"checkbox\" value=\"\" #selectedRowsOnly>\n\t\t\t\t<label [attr.for]=\"'selectedRowsOnly'\">Print Only Selected Records</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-control checkbox-container\">\n\t\t\t\t<input class=\"styled-checkbox\" [formControlName]=\"'includeTransactions'\" (change)=\"includeTransactionsChanged($event)\" [attr.id]=\"'includeTransactions'\"\n\t\t\t\t type=\"checkbox\" value=\"\" #includeTransactions>\n\t\t\t\t<label [attr.for]=\"'includeTransactions'\">Include Transaction Data</label>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"total-container\">\n\t\t\t<label class=\"print-label\">Total Rows to Print</label>\n\t\t\t<label [ngClass]=\"{ 'error' : calculateTotalRows() > maxRows }\">{{ calculateTotalRows() }}</label>\n\t\t\t<div class=\"maximum-rows-notif\">{{ getMaximumRowsText() }}</div>\n\t\t</div>\n\n\n\n\t\t<div class=\"button-container\">\n\t\t\t<button class=\"btn cancel\" (click)=\"closePrintModal()\">Cancel</button>\n\t\t\t<button class=\"btn\" type=\"submit\" [disabled]=\"disablePrint\">\n\t\t\t\t<i class=\"fas fa-print\"></i>\n\t\t\t\t<span>Print</span>\n\t\t\t</button>\n\t\t</div>\n\n\t</form>\n</div>\n<div class=\"print-notif\">\n\t<div *ngIf=\"!data.containsPrintableItems\" class=\"invalid-print-notif\">\n\t\t<i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i>\n\t\tNo printable items are available based on your selections\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/selected-filter/selected-filter.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/selected-filter/selected-filter.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"selected-filter-container\">\n\t<div class=\"triangle\"></div>\n\t<div>\n\t\t<span>Filter By Area Code</span>\n\t</div>\n\t<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\">\n\t\t<div class=\"filter-select-all\">\n\t\t\t<div class=\"form-control select-all\">\n\t\t\t\t<input class=\"styled-checkbox\" [ngClass]=\"{ 'indeterminate' : mixedCheckValues() }\" [formControlName]=\"'selectAll'\" (change)=\"checkboxChanged($event)\"\n\t\t\t\t [attr.id]=\"'selectAll'\" type=\"checkbox\" value=\"\" #selectAll>\n\t\t\t\t<label [attr.for]=\"'selectAll'\">Select All</label>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"filter-options\">\n\t\t\t<div class=\"form-control\">\n\t\t\t\t<input class=\"styled-checkbox\" [formControlName]=\"'selectedRows'\" (change)=\"checkboxChanged($event)\" [attr.id]=\"'selectedRows'\"\n\t\t\t\t type=\"checkbox\" value=\"\">\n\t\t\t\t<label [attr.for]=\"'selectedRows'\">Selected Rows</label>\n\t\t\t</div>\n\t\t\t<div class=\"form-control\">\n\t\t\t\t<input class=\"styled-checkbox\" [formControlName]=\"'unselectedRows'\" (change)=\"checkboxChanged($event)\" [attr.id]=\"'unselectedRows'\"\n\t\t\t\t type=\"checkbox\" value=\"\">\n\t\t\t\t<label [attr.for]=\"'unselectedRows'\">Unselected Rows</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"button-container\">\n\t\t\t<button (click)=\"resetFilter($event)\" class=\"btn full-width\">Reset</button>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fps/components/fps-meter/fps-meter.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fps/components/fps-meter/fps-meter.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[FPS]={{fps}}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tablejs/components/drag-and-drop-ghost/drag-and-drop-ghost.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tablejs/components/drag-and-drop-ghost/drag-and-drop-ghost.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"drag-and-drop-ghost\" [ngStyle]=\"{ 'transform': getTransform() }\" [innerHTML]=\"html\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tablejs/components/grid/grid.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tablejs/components/grid/grid.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div tablejsGrid [dragAndDropGhostFilter]=\"dragAndDropGhostFilter\" [linkClass]=\"linkClass\" [resizeColumnWidthByPercent]=\"resizeColumnWidthByPercent\"\n(columnResizeStart)=\"columnResizeStarted($event)\"\n(columnResize)=\"columnResized($event)\"\n(columnResizeEnd)=\"columnResizeEnded($event)\"\n(columnReorderStart)=\"columnReorderStarted($event)\"\n(columnReorder)=\"columnReordered($event)\"\n(columnReorderEnd)=\"columnReorderEnded($event)\"\n>\n\n\t<ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tablejs/components/horiz-resize-grip/horiz-resize-grip.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tablejs/components/horiz-resize-grip/horiz-resize-grip.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"fas fa-angle-left fa-xs\"></i><i class=\"fas fa-angle-right fa-xs\"></i>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tablejs/components/reorder-grip/reorder-grip.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tablejs/components/reorder-grip/reorder-grip.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"dots-3\"></span>\n<span class=\"dots-3\"></span>\n<span class=\"dots-3\"></span>\n<span class=\"dots-3\"></span>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const theme_service_1 = __webpack_require__(/*! ./services/theme/theme.service */ "./src/app/services/theme/theme.service.ts");
let AppComponent = class AppComponent {
    constructor(themeService) {
        this.themeService = themeService;
    }
};
AppComponent.ctorParameters = () => [
    { type: theme_service_1.ThemeService }
];
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [theme_service_1.ThemeService])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const drag_drop_1 = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const grid_example_component_1 = __webpack_require__(/*! ./components/grid-example/grid-example.component */ "./src/app/components/grid-example/grid-example.component.ts");
const tablejs_module_1 = __webpack_require__(/*! ./tablejs/tablejs.module */ "./src/app/tablejs/tablejs.module.ts");
const frames_per_second_module_1 = __webpack_require__(/*! ./fps/frames-per-second.module */ "./src/app/fps/frames-per-second.module.ts");
const phone_pipe_1 = __webpack_require__(/*! ./pipes/phone.pipe */ "./src/app/pipes/phone.pipe.ts");
const cell_validator_service_1 = __webpack_require__(/*! ./services/cell-validator/cell-validator.service */ "./src/app/services/cell-validator/cell-validator.service.ts");
const phone_filter_component_1 = __webpack_require__(/*! ./components/phone-filter/phone-filter.component */ "./src/app/components/phone-filter/phone-filter.component.ts");
const overlay_1 = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
const transaction_grid_component_1 = __webpack_require__(/*! ./components/grid-example/transaction-grid/transaction-grid.component */ "./src/app/components/grid-example/transaction-grid/transaction-grid.component.ts");
const print_overlay_component_1 = __webpack_require__(/*! ./components/print-overlay/print-overlay.component */ "./src/app/components/print-overlay/print-overlay.component.ts");
const selected_filter_component_1 = __webpack_require__(/*! ./components/selected-filter/selected-filter.component */ "./src/app/components/selected-filter/selected-filter.component.ts");
const export_to_excel_overlay_component_1 = __webpack_require__(/*! ./components/export-to-excel-overlay/export-to-excel-overlay.component */ "./src/app/components/export-to-excel-overlay/export-to-excel-overlay.component.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            grid_example_component_1.GridExampleComponent,
            phone_pipe_1.PhonePipe,
            phone_filter_component_1.PhoneFilterComponent,
            transaction_grid_component_1.TransactionGridComponent,
            print_overlay_component_1.PrintOverlayComponent,
            selected_filter_component_1.SelectedFilterComponent,
            export_to_excel_overlay_component_1.ExportToExcelOverlayComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            drag_drop_1.DragDropModule,
            tablejs_module_1.TablejsModule,
            frames_per_second_module_1.FramesPerSecondModule,
            overlay_1.OverlayModule,
            material_1.MatTooltipModule
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        providers: [
            cell_validator_service_1.CellValidatorService,
            phone_pipe_1.PhonePipe,
            common_1.CurrencyPipe
        ],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [
            phone_filter_component_1.PhoneFilterComponent,
            print_overlay_component_1.PrintOverlayComponent,
            selected_filter_component_1.SelectedFilterComponent,
            export_to_excel_overlay_component_1.ExportToExcelOverlayComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/export-to-excel-overlay/export-to-excel-overlay.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/export-to-excel-overlay/export-to-excel-overlay.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/*\n   * Implementation of themes\n   */\nh3 {\n  margin-top: 0px;\n  margin-bottom: 30px; }\n.checkbox-container {\n  padding-bottom: 10px; }\n.excel-export-control {\n  margin-right: 10px;\n  display: block; }\n.excel-export-label {\n  box-sizing: border-box;\n  padding-right: 10px;\n  display: inline-block;\n  width: 220px; }\n.excel-export-filter-container {\n  padding: 10px;\n  margin: -10px;\n  margin-top: 0px;\n  padding-bottom: 0px; }\n.theme-blue .excel-export-filter-container {\n    background: #ebf1f6; }\n.theme-orange .excel-export-filter-container {\n    background: #f0e4db; }\n.theme-green .excel-export-filter-container {\n    background: #dfecd3; }\n.theme-purple .excel-export-filter-container {\n    background: #e8e2ee; }\n.theme-gray .excel-export-filter-container {\n    background: #f2f2f2; }\n.theme-silver .excel-export-filter-container {\n    background: linear-gradient(#e2e2e2, #f2f2f2); }\n.total-container {\n  padding-top: 20px; }\n.total-block {\n  padding-bottom: 10px; }\n.excel-export-notif {\n  position: absolute;\n  display: block; }\n.excel-export-notif .invalid-excel-export-notif {\n    position: absolute;\n    display: block;\n    width: 500px;\n    height: auto;\n    padding: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    background-color: #ffffff;\n    box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75);\n    overflow: hidden;\n    opacity: 0;\n    -webkit-animation: uncollapseErrorNotifAnimation 0.5s;\n    animation: uncollapseErrorNotifAnimation 0.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n.theme-extra-sm .excel-export-notif .invalid-excel-export-notif {\n      border: 1px solid;\n      border-top: 0px; }\n.theme-sm .excel-export-notif .invalid-excel-export-notif {\n      border: 1px solid;\n      border-top: 0px; }\n.theme-reg .excel-export-notif .invalid-excel-export-notif {\n      border: 1px solid;\n      border-top: 0px; }\n.theme-lg .excel-export-notif .invalid-excel-export-notif {\n      border: 1px solid;\n      border-top: 0px; }\n.theme-extra-lg .excel-export-notif .invalid-excel-export-notif {\n      border: 1px solid;\n      border-top: 0px; }\n.theme-blue .excel-export-notif .invalid-excel-export-notif {\n      color: #f81313;\n      border: 1px solid #3381a6;\n      border-top: 0px; }\n.theme-orange .excel-export-notif .invalid-excel-export-notif {\n      color: #f81313;\n      border: 1px solid #e08b41;\n      border-top: 0px; }\n.theme-green .excel-export-notif .invalid-excel-export-notif {\n      color: #f81313;\n      border: 1px solid #689f38;\n      border-top: 0px; }\n.theme-purple .excel-export-notif .invalid-excel-export-notif {\n      color: #f81313;\n      border: 1px solid #bb76db;\n      border-top: 0px; }\n.theme-gray .excel-export-notif .invalid-excel-export-notif {\n      color: #f81313;\n      border: 1px solid #999999;\n      border-top: 0px; }\n.theme-silver .excel-export-notif .invalid-excel-export-notif {\n      color: #f81313;\n      border: 1px solid #999999;\n      border-top: 0px; }\n.excel-export-notif .invalid-excel-export-notif .fa-exclamation-circle {\n      margin-right: 10px; }\n.theme-blue .error {\n  color: #f81313; }\n.theme-orange .error {\n  color: #f81313; }\n.theme-green .error {\n  color: #f81313; }\n.theme-purple .error {\n  color: #f81313; }\n.theme-gray .error {\n  color: #f81313; }\n.theme-silver .error {\n  color: #f81313; }\n@-webkit-keyframes uncollapseErrorNotifAnimation {\n  0% {\n    max-height: 0px;\n    opacity: 1; }\n  100% {\n    max-height: 40px;\n    opacity: 1; } }\n@keyframes uncollapseErrorNotifAnimation {\n  0% {\n    max-height: 0px;\n    opacity: 1; }\n  100% {\n    max-height: 40px;\n    opacity: 1; } }\n.maximum-rows-notif {\n  color: #777777;\n  padding-top: 0px;\n  padding-bottom: 10px;\n  font-size: 0.8rem;\n  width: 280px;\n  text-align: left;\n  padding-left: 160px; }\n.excel-export-menu-container {\n  position: relative;\n  width: 500px;\n  height: auto;\n  background-color: #ffffff;\n  padding: 20px;\n  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75); }\n.theme-extra-sm .excel-export-menu-container {\n    border: 1px solid; }\n.theme-sm .excel-export-menu-container {\n    border: 1px solid; }\n.theme-reg .excel-export-menu-container {\n    border: 1px solid; }\n.theme-lg .excel-export-menu-container {\n    border: 1px solid; }\n.theme-extra-lg .excel-export-menu-container {\n    border: 1px solid; }\n.theme-blue .excel-export-menu-container {\n    border: 1px solid #3381a6; }\n.theme-orange .excel-export-menu-container {\n    border: 1px solid #e08b41; }\n.theme-green .excel-export-menu-container {\n    border: 1px solid #689f38; }\n.theme-purple .excel-export-menu-container {\n    border: 1px solid #bb76db; }\n.theme-gray .excel-export-menu-container {\n    border: 1px solid #999999; }\n.theme-silver .excel-export-menu-container {\n    border: 1px solid #999999; }\n.excel-export-menu-container .form-control {\n    margin-bottom: 5px; }\n.excel-export-menu-container .form-control input {\n      width: 120px;\n      box-sizing: border-box; }\n.excel-export-menu-container .form-control input.ng-invalid {\n        border-style: solid; }\n.theme-blue .excel-export-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.theme-orange .excel-export-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.theme-green .excel-export-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.theme-purple .excel-export-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.theme-gray .excel-export-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.theme-silver .excel-export-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.excel-export-menu-container .button-container {\n    position: relative;\n    display: block;\n    width: 100%;\n    padding-top: 24px;\n    height: 30px; }\n.excel-export-menu-container .button-container .btn {\n      position: absolute;\n      right: 0px; }\n.excel-export-menu-container .button-container .btn.cancel {\n        right: 100px;\n        background: #999999;\n        border-color: #888888; }\n.excel-export-menu-container .button-container .btn.cancel:hover {\n          background: #666666; }\n.excel-export-menu-container .button-container .btn .fa-file-export {\n        margin-right: 10px; }\n.excel-export-menu-container .button-container .btn:disabled, .excel-export-menu-container .button-container .btn [disabled] {\n        opacity: 0.75; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4cG9ydC10by1leGNlbC1vdmVybGF5L2V4cG9ydC10by1leGNlbC1vdmVybGF5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21nb3V3ZW4vRGVza3RvcC9UcmFuc3VuaW9uL3RhYmxlanMtZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvZXhwb3J0LXRvLWV4Y2VsLW92ZXJsYXkvZXhwb3J0LXRvLWV4Y2VsLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUErTEU7O0lDNUxFO0FDREo7RUFDQyxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7QUFHcEI7RUFDQyxvQkFBb0IsRUFBQTtBQUVyQjtFQUNDLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7QUFFZjtFQUNDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTtBQUViO0VBQ0MsYUFBYTtFQUliLGFBQWE7RUFDYixlQUFlO0VBQ1osbUJBQW1CLEVBQUE7QUZ5S3BCO0lFN0tELG1CRm5CMEIsRUFBQTtBQWdNekI7SUU3S0QsbUJGUjZCLEVBQUE7QUFxTDVCO0lFN0tELG1CRkc0QixFQUFBO0FBMEszQjtJRTdLRCxtQkZjNEIsRUFBQTtBQStKM0I7SUU3S0QsbUJGeUIwQixFQUFBO0FBb0p6QjtJRTdLRCw2Q0ZvQ3NELEVBQUE7QUU3QnhEO0VBQ0MsaUJBQWlCLEVBQUE7QUFFbEI7RUFDQyxvQkFBb0IsRUFBQTtBQUVyQjtFQUNDLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7QUFGZjtJQUtFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFHekIsZ0RBQTZDO0lBQzdDLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YscURBQXFEO0lBQ3JELDZDQUE2QztJQUM3QyxxQ0FBNkI7WUFBN0IsNkJBQTZCLEVBQUE7QUY0STVCO01FeklBLGlCQUFpQjtNQUNqQixlQUFlLEVBQUE7QUZ3SWY7TUV6SUEsaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtBRndJZjtNRXpJQSxpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0FGd0lmO01FeklBLGlCQUFpQjtNQUNqQixlQUFlLEVBQUE7QUZ3SWY7TUV6SUEsaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtBRndJZjtNRTFJQSxjRnJEc0I7TUVzRHRCLHlCRm5EeUI7TUVvRHpCLGVBQWUsRUFBQTtBRndJZjtNRTFJQSxjRjFDd0I7TUUyQ3hCLHlCRnhDMkI7TUV5QzNCLGVBQWUsRUFBQTtBRndJZjtNRTFJQSxjRi9CdUI7TUVnQ3ZCLHlCRjdCMEI7TUU4QjFCLGVBQWUsRUFBQTtBRndJZjtNRTFJQSxjRnBCd0I7TUVxQnhCLHlCRmxCMkI7TUVtQjNCLGVBQWUsRUFBQTtBRndJZjtNRTFJQSxjRlRzQjtNRVV0Qix5QkZQeUI7TUVRekIsZUFBZSxFQUFBO0FGd0lmO01FMUlBLGNGRXdCO01FRHhCLHlCRkkyQjtNRUgzQixlQUFlLEVBQUE7QUF4QmxCO01BMkJHLGtCQUFrQixFQUFBO0FGcUlsQjtFRS9IRCxjRmhFdUIsRUFBQTtBQStMdEI7RUUvSEQsY0ZyRHlCLEVBQUE7QUFvTHhCO0VFL0hELGNGMUN3QixFQUFBO0FBeUt2QjtFRS9IRCxjRi9CeUIsRUFBQTtBQThKeEI7RUUvSEQsY0ZwQnVCLEVBQUE7QUFtSnRCO0VFL0hELGNGVHlCLEVBQUE7QUVjM0I7RUFDQztJQUFLLGVBQWU7SUFBRSxVQUFVLEVBQUE7RUFDaEM7SUFBTyxnQkFBZ0I7SUFBRSxVQUFVLEVBQUEsRUFBQTtBQUVwQztFQUNDO0lBQUssZUFBZTtJQUFFLFVBQVUsRUFBQTtFQUNoQztJQUFPLGdCQUFnQjtJQUFFLFVBQVUsRUFBQSxFQUFBO0FBR3BDO0VBQ0MsY0FBYztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDdkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFFcEI7RUFDQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFJWix5QkFBeUI7RUFDekIsYUFBYTtFQUdiLGdEQUE2QyxFQUFBO0FGNkYzQztJRW5HRCxpQkFBaUIsRUFBQTtBRm1HaEI7SUVuR0QsaUJBQWlCLEVBQUE7QUZtR2hCO0lFbkdELGlCQUFpQixFQUFBO0FGbUdoQjtJRW5HRCxpQkFBaUIsRUFBQTtBRm1HaEI7SUVuR0QsaUJBQWlCLEVBQUE7QUZtR2hCO0lFbkdELHlCRnpGMEIsRUFBQTtBQTRMekI7SUVuR0QseUJGOUU0QixFQUFBO0FBaUwzQjtJRW5HRCx5QkZuRTJCLEVBQUE7QUFzSzFCO0lFbkdELHlCRnhENEIsRUFBQTtBQTJKM0I7SUVuR0QseUJGN0MwQixFQUFBO0FBZ0p6QjtJRW5HRCx5QkZsQzRCLEVBQUE7QUU2QjlCO0lBY0Usa0JBQWtCLEVBQUE7QUFkcEI7TUFpQkcsWUFBWTtNQUNaLHNCQUFzQixFQUFBO0FBbEJ6QjtRQXNCSSxtQkFBbUIsRUFBQTtBRmtGcEI7VUVoRkUscUJGL0dvQixFQUFBO0FBK0x0QjtVRWhGRSxxQkZwR3NCLEVBQUE7QUFvTHhCO1VFaEZFLHFCRnpGcUIsRUFBQTtBQXlLdkI7VUVoRkUscUJGOUVzQixFQUFBO0FBOEp4QjtVRWhGRSxxQkZuRW9CLEVBQUE7QUFtSnRCO1VFaEZFLHFCRnhEc0IsRUFBQTtBRWdDM0I7SUE4QkUsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTtBQWxDZDtNQXFDRyxrQkFBa0I7TUFDbEIsVUFBVSxFQUFBO0FBdENiO1FBeUNJLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIscUJBQXFCLEVBQUE7QUEzQ3pCO1VBOENLLG1CQUFtQixFQUFBO0FBOUN4QjtRQWtESSxrQkFBa0IsRUFBQTtBQWxEdEI7UUFxREksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBvcnQtdG8tZXhjZWwtb3ZlcmxheS9leHBvcnQtdG8tZXhjZWwtb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiRvcGVuLXJlZy1ibHVlOiAjMjQ3Mjk3O1xuJG9wZW4tZGstYmx1ZTogIzEzNjE4NjtcbiRvcGVuLWx0LWJsdWU6ICMzMzgxYTY7XG4kb3Blbi11bHRyYS1sdC1ibHVlOiAjZWJmMWY2O1xuJG9wZW4tZXJyb3ItYmx1ZTogI2Y4MTMxMztcbiRvcGVuLXJlZy1ibHVlLXNvbGlkOiAjMjQ3Mjk3O1xuJG9wZW4tZGstYmx1ZS1zb2xpZDogIzEzNjE4NjtcbiRvcGVuLWx0LWJsdWUtc29saWQ6ICMzMzgxYTY7XG4kb3Blbi11bHRyYS1sdC1ibHVlLXNvbGlkOiAjZWJmMWY2O1xuJG9wZW4tZXJyb3ItYmx1ZS1zb2xpZDogI2Y4MTMxMztcblxuJG9wZW4tcmVnLW9yYW5nZTogI2QxN2MzMjtcbiRvcGVuLWRrLW9yYW5nZTogI2MwNmIyMTtcbiRvcGVuLWx0LW9yYW5nZTogI2UwOGI0MTtcbiRvcGVuLXVsdHJhLWx0LW9yYW5nZTogICNmMGU0ZGI7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1vcmFuZ2U6ICNmODEzMTM7XG4kb3Blbi1yZWctb3JhbmdlLXNvbGlkOiAjZDE3YzMyO1xuJG9wZW4tZGstb3JhbmdlLXNvbGlkOiAjYzA2YjIxO1xuJG9wZW4tbHQtb3JhbmdlLXNvbGlkOiAjZTA4YjQxO1xuJG9wZW4tdWx0cmEtbHQtb3JhbmdlLXNvbGlkOiAgI2YwZTRkYjsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLW9yYW5nZS1zb2xpZDogI2Y4MTMxMztcblxuJG9wZW4tcmVnLWdyZWVuOiAjNTU4YjJmO1xuJG9wZW4tZGstZ3JlZW46ICMzMzY5MWU7XG4kb3Blbi1sdC1ncmVlbjogIzY4OWYzODtcbiRvcGVuLXVsdHJhLWx0LWdyZWVuOiAgI2RmZWNkMzsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLWdyZWVuOiAjZjgxMzEzO1xuJG9wZW4tcmVnLWdyZWVuLXNvbGlkOiAjNTU4YjJmO1xuJG9wZW4tZGstZ3JlZW4tc29saWQ6ICMzMzY5MWU7XG4kb3Blbi1sdC1ncmVlbi1zb2xpZDogIzY4OWYzODtcbiRvcGVuLXVsdHJhLWx0LWdyZWVuLXNvbGlkOiAgI2RmZWNkMzsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLWdyZWVuLXNvbGlkOiAjZjgxMzEzO1xuXG4kb3Blbi1yZWctcHVycGxlOiAjOGI1MGE3O1xuJG9wZW4tZGstcHVycGxlOiAjNmY0MDg1O1xuJG9wZW4tbHQtcHVycGxlOiAjYmI3NmRiO1xuJG9wZW4tdWx0cmEtbHQtcHVycGxlOiAjZThlMmVlOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3ItcHVycGxlOiAjZjgxMzEzO1xuJG9wZW4tcmVnLXB1cnBsZS1zb2xpZDogIzhiNTBhNztcbiRvcGVuLWRrLXB1cnBsZS1zb2xpZDogIzZmNDA4NTtcbiRvcGVuLWx0LXB1cnBsZS1zb2xpZDogI2JiNzZkYjtcbiRvcGVuLXVsdHJhLWx0LXB1cnBsZS1zb2xpZDogI2U4ZTJlZTsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLXB1cnBsZS1zb2xpZDogI2Y4MTMxMztcblxuJG9wZW4tcmVnLWdyYXk6ICM4ODg4ODg7XG4kb3Blbi1kay1ncmF5OiAjNjY2NjY2O1xuJG9wZW4tbHQtZ3JheTogIzk5OTk5OTtcbiRvcGVuLXVsdHJhLWx0LWdyYXk6ICNmMmYyZjI7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1ncmF5OiAjZjgxMzEzO1xuJG9wZW4tcmVnLWdyYXktc29saWQ6ICM4ODg4ODg7XG4kb3Blbi1kay1ncmF5LXNvbGlkOiAjNjY2NjY2O1xuJG9wZW4tbHQtZ3JheS1zb2xpZDogIzk5OTk5OTtcbiRvcGVuLXVsdHJhLWx0LWdyYXktc29saWQ6ICNmMmYyZjI7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1ncmF5LXNvbGlkOiAjZjgxMzEzO1xuXG4kb3Blbi1yZWctc2lsdmVyOiBsaW5lYXItZ3JhZGllbnQoI2JiYmJiYiwjODg4ODg4KTtcbiRvcGVuLWRrLXNpbHZlcjogbGluZWFyLWdyYWRpZW50KCM5OTk5OTksIzg4ODg4OCk7O1xuJG9wZW4tbHQtc2lsdmVyOiBsaW5lYXItZ3JhZGllbnQoI2NjY2NjYywjOTk5OTk5KTtcbiRvcGVuLXVsdHJhLWx0LXNpbHZlcjogbGluZWFyLWdyYWRpZW50KCNlMmUyZTIsICNmMmYyZjIpOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3Itc2lsdmVyOiAjZjgxMzEzO1xuJG9wZW4tcmVnLXNpbHZlci1zb2xpZDogIzg4ODg4ODtcbiRvcGVuLWRrLXNpbHZlci1zb2xpZDogIzY2NjY2NjtcbiRvcGVuLWx0LXNpbHZlci1zb2xpZDogIzk5OTk5OTtcbiRvcGVuLXVsdHJhLWx0LXNpbHZlci1zb2xpZDogI2YyZjJmMjsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLXNpbHZlci1zb2xpZDogI2Y4MTMxMztcblxuJG9wZW4tcmVnOiAkb3Blbi1yZWctYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tZGs6ICRvcGVuLWRrLWJsdWUgIWdsb2JhbDtcbiRvcGVuLWx0OiAkb3Blbi1sdC1ibHVlICFnbG9iYWw7XG4kb3Blbi11bHRyYS1sdDogJG9wZW4tdWx0cmEtbHQtYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tZXJyb3I6ICRvcGVuLWVycm9yLWJsdWUgIWdsb2JhbDtcbiRvcGVuLXJlZy1zb2xpZDogJG9wZW4tcmVnLWJsdWUgIWdsb2JhbDtcbiRvcGVuLWRrLXNvbGlkOiAkb3Blbi1kay1ibHVlICFnbG9iYWw7XG4kb3Blbi1sdC1zb2xpZDogJG9wZW4tbHQtYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tdWx0cmEtbHQtc29saWQ6ICRvcGVuLXVsdHJhLWx0LWJsdWUgIWdsb2JhbDtcbiRvcGVuLWVycm9yLXNvbGlkOiAkb3Blbi1lcnJvci1ibHVlICFnbG9iYWw7XG5cblxuJHRoZW1lczogKFxuXHRleHRyYS1zbTogKFxuXHRcdHRhYmxlUGFkZGluZzogMC41cmVtLFxuXHRcdHRhYmxlRm9udFNpemU6IDAuNzVyZW0sXG5cdFx0ZWRpdGFibGVJbnB1dFZlcnRpY2FsUGFkZGluZzogMC4wN3JlbSxcblx0XHRlZGl0YWJsZVZlcnRpY2FsUGFkZGluZzogMC4ycmVtLFxuXHRcdGVkaXRhYmxlV2lkdGhPZmZzZXQ6IGNhbGMoMTAwJSAtIDhweClcblx0KSxcblx0c206IChcblx0XHR0YWJsZVBhZGRpbmc6IDAuNnJlbSxcblx0XHR0YWJsZUZvbnRTaXplOiAwLjg1cmVtLFxuXHRcdGVkaXRhYmxlSG9yaXpvbnRhbFBhZGRpbmc6IDRweCxcblx0XHRlZGl0YWJsZUlucHV0VmVydGljYWxQYWRkaW5nOiAwLjEwMTVyZW0sXG5cdFx0ZWRpdGFibGVWZXJ0aWNhbFBhZGRpbmc6IDAuMjlyZW0sXG5cdFx0ZWRpdGFibGVXaWR0aE9mZnNldDogY2FsYygxMDAlIC0gOHB4KVxuXHQpLFxuXHRyZWc6IChcblx0XHR0YWJsZVBhZGRpbmc6IDAuNzVyZW0sXG5cdFx0dGFibGVGb250U2l6ZTogMC45M3JlbSxcblx0XHRlZGl0YWJsZUlucHV0VmVydGljYWxQYWRkaW5nOiAwLjE0cmVtLFxuXHRcdGVkaXRhYmxlVmVydGljYWxQYWRkaW5nOiAwLjRyZW0sXG5cdFx0ZWRpdGFibGVXaWR0aE9mZnNldDogY2FsYygxMDAlIC0gMTBweClcblx0KSxcblx0bGc6IChcblx0XHR0YWJsZVBhZGRpbmc6IDFyZW0sXG5cdFx0dGFibGVGb250U2l6ZTogMXJlbSxcblx0XHRlZGl0YWJsZUlucHV0VmVydGljYWxQYWRkaW5nOiAwLjE1NzVyZW0sXG5cdFx0ZWRpdGFibGVWZXJ0aWNhbFBhZGRpbmc6IDAuNDVyZW0sXG5cdFx0ZWRpdGFibGVXaWR0aE9mZnNldDogY2FsYygxMDAlIC0gMTlweClcblx0KSxcblx0ZXh0cmEtbGc6IChcblx0XHR0YWJsZVBhZGRpbmc6IDEuMjVyZW0sXG5cdFx0dGFibGVGb250U2l6ZTogMS4xcmVtLFxuXHRcdGVkaXRhYmxlSW5wdXRWZXJ0aWNhbFBhZGRpbmc6IDAuMjJyZW0sXG5cdFx0ZWRpdGFibGVWZXJ0aWNhbFBhZGRpbmc6IDAuNnJlbSxcblx0XHRlZGl0YWJsZVdpZHRoT2Zmc2V0OiBjYWxjKDEwMCUgLSAyOHB4KVxuXHQpLFxuICBibHVlOiAoXG5cdFx0b3BlblJlZzogJG9wZW4tcmVnLWJsdWUsXG5cdFx0b3BlbkRrOiAkb3Blbi1kay1ibHVlLFxuXHRcdG9wZW5MdDogJG9wZW4tbHQtYmx1ZSxcblx0XHRvcGVuVWx0cmFMdDogJG9wZW4tdWx0cmEtbHQtYmx1ZSxcblx0XHRvcGVuRXJyb3I6ICRvcGVuLWVycm9yLWJsdWUsXG5cdFx0b3BlblJlZ1NvbGlkOiAkb3Blbi1yZWctYmx1ZS1zb2xpZCxcblx0XHRvcGVuRGtTb2xpZDogJG9wZW4tZGstYmx1ZS1zb2xpZCxcblx0XHRvcGVuTHRTb2xpZDogJG9wZW4tbHQtYmx1ZS1zb2xpZCxcblx0XHRvcGVuVWx0cmFMdFNvbGlkOiAkb3Blbi11bHRyYS1sdC1ibHVlLXNvbGlkLFxuXHRcdG9wZW5FcnJvclNvbGlkOiAkb3Blbi1lcnJvci1ibHVlLXNvbGlkXG4gICksXG4gIG9yYW5nZTogKFxuICAgIFx0b3BlblJlZzogJG9wZW4tcmVnLW9yYW5nZSxcblx0XHRvcGVuRGs6ICRvcGVuLWRrLW9yYW5nZSxcblx0XHRvcGVuTHQ6ICRvcGVuLWx0LW9yYW5nZSxcblx0XHRvcGVuVWx0cmFMdDogJG9wZW4tdWx0cmEtbHQtb3JhbmdlLFxuXHRcdG9wZW5FcnJvcjogJG9wZW4tZXJyb3Itb3JhbmdlLFxuXHRcdG9wZW5SZWdTb2xpZDogJG9wZW4tcmVnLW9yYW5nZS1zb2xpZCxcblx0XHRvcGVuRGtTb2xpZDogJG9wZW4tZGstb3JhbmdlLXNvbGlkLFxuXHRcdG9wZW5MdFNvbGlkOiAkb3Blbi1sdC1vcmFuZ2Utc29saWQsXG5cdFx0b3BlblVsdHJhTHRTb2xpZDogJG9wZW4tdWx0cmEtbHQtb3JhbmdlLXNvbGlkLFxuXHRcdG9wZW5FcnJvclNvbGlkOiAkb3Blbi1lcnJvci1vcmFuZ2Utc29saWRcbiAgKSxcbiAgZ3JlZW46IChcbiAgICBvcGVuUmVnOiAkb3Blbi1yZWctZ3JlZW4sXG5cdFx0b3BlbkRrOiAkb3Blbi1kay1ncmVlbixcblx0XHRvcGVuTHQ6ICRvcGVuLWx0LWdyZWVuLFxuXHRcdG9wZW5VbHRyYUx0OiAkb3Blbi11bHRyYS1sdC1ncmVlbixcblx0XHRvcGVuRXJyb3I6ICRvcGVuLWVycm9yLWdyZWVuLFxuXHRcdG9wZW5SZWdTb2xpZDogJG9wZW4tcmVnLWdyZWVuLXNvbGlkLFxuXHRcdG9wZW5Ea1NvbGlkOiAkb3Blbi1kay1ncmVlbi1zb2xpZCxcblx0XHRvcGVuTHRTb2xpZDogJG9wZW4tbHQtZ3JlZW4tc29saWQsXG5cdFx0b3BlblVsdHJhTHRTb2xpZDogJG9wZW4tdWx0cmEtbHQtZ3JlZW4tc29saWQsXG5cdFx0b3BlbkVycm9yU29saWQ6ICRvcGVuLWVycm9yLWdyZWVuLXNvbGlkXG4gICksXG4gIHB1cnBsZTogKFxuICAgIG9wZW5SZWc6ICRvcGVuLXJlZy1wdXJwbGUsXG5cdFx0b3BlbkRrOiAkb3Blbi1kay1wdXJwbGUsXG5cdFx0b3Blbkx0OiAkb3Blbi1sdC1wdXJwbGUsXG5cdFx0b3BlblVsdHJhTHQ6ICRvcGVuLXVsdHJhLWx0LXB1cnBsZSxcblx0XHRvcGVuRXJyb3I6ICRvcGVuLWVycm9yLXB1cnBsZSxcblx0XHRvcGVuUmVnU29saWQ6ICRvcGVuLXJlZy1wdXJwbGUtc29saWQsXG5cdFx0b3BlbkRrU29saWQ6ICRvcGVuLWRrLXB1cnBsZS1zb2xpZCxcblx0XHRvcGVuTHRTb2xpZDogJG9wZW4tbHQtcHVycGxlLXNvbGlkLFxuXHRcdG9wZW5VbHRyYUx0U29saWQ6ICRvcGVuLXVsdHJhLWx0LXB1cnBsZS1zb2xpZCxcblx0XHRvcGVuRXJyb3JTb2xpZDogJG9wZW4tZXJyb3ItcHVycGxlLXNvbGlkXG5cdCksXG5cdGdyYXk6IChcbiAgICBvcGVuUmVnOiAkb3Blbi1yZWctZ3JheSxcblx0XHRvcGVuRGs6ICRvcGVuLWRrLWdyYXksXG5cdFx0b3Blbkx0OiAkb3Blbi1sdC1ncmF5LFxuXHRcdG9wZW5VbHRyYUx0OiAkb3Blbi11bHRyYS1sdC1ncmF5LFxuXHRcdG9wZW5FcnJvcjogJG9wZW4tZXJyb3ItZ3JheSxcblx0XHRvcGVuUmVnU29saWQ6ICRvcGVuLXJlZy1ncmF5LXNvbGlkLFxuXHRcdG9wZW5Ea1NvbGlkOiAkb3Blbi1kay1ncmF5LXNvbGlkLFxuXHRcdG9wZW5MdFNvbGlkOiAkb3Blbi1sdC1ncmF5LXNvbGlkLFxuXHRcdG9wZW5VbHRyYUx0U29saWQ6ICRvcGVuLXVsdHJhLWx0LWdyYXktc29saWQsXG5cdFx0b3BlbkVycm9yU29saWQ6ICRvcGVuLWVycm9yLWdyYXktc29saWRcblx0KSxcblx0c2lsdmVyOiAoXG4gICAgb3BlblJlZzogJG9wZW4tcmVnLXNpbHZlcixcblx0XHRvcGVuRGs6ICRvcGVuLWRrLXNpbHZlcixcblx0XHRvcGVuTHQ6ICRvcGVuLWx0LXNpbHZlcixcblx0XHRvcGVuVWx0cmFMdDogJG9wZW4tdWx0cmEtbHQtc2lsdmVyLFxuXHRcdG9wZW5FcnJvcjogJG9wZW4tZXJyb3Itc2lsdmVyLFxuXHRcdG9wZW5SZWdTb2xpZDogJG9wZW4tcmVnLXNpbHZlci1zb2xpZCxcblx0XHRvcGVuRGtTb2xpZDogJG9wZW4tZGstc2lsdmVyLXNvbGlkLFxuXHRcdG9wZW5MdFNvbGlkOiAkb3Blbi1sdC1zaWx2ZXItc29saWQsXG5cdFx0b3BlblVsdHJhTHRTb2xpZDogJG9wZW4tdWx0cmEtbHQtc2lsdmVyLXNvbGlkLFxuXHRcdG9wZW5FcnJvclNvbGlkOiAkb3Blbi1lcnJvci1zaWx2ZXItc29saWRcblx0KVxuKTtcblxuICBcbiAgLypcbiAgICogSW1wbGVtZW50YXRpb24gb2YgdGhlbWVzXG4gICAqL1xuICBAbWl4aW4gdGhlbWlmeSgkdGhlbWVzKSB7XG5cdEBlYWNoICR0aGVtZSwgJG1hcCBpbiAkdGhlbWVzIHtcblx0ICAudGhlbWUtI3skdGhlbWV9ICYge1xuXHRcdCR0aGVtZS1tYXA6ICgpICFnbG9iYWw7XG5cdFx0QGVhY2ggJGtleSwgJHN1Ym1hcCBpbiAkbWFwIHtcblx0XHQgICR2YWx1ZTogbWFwLWdldChtYXAtZ2V0KCR0aGVtZXMsICR0aGVtZSksICcjeyRrZXl9Jyk7XG5cdFx0ICAkdGhlbWUtbWFwOiBtYXAtbWVyZ2UoJHRoZW1lLW1hcCwgKCRrZXk6ICR2YWx1ZSkpICFnbG9iYWw7XG5cdFx0fVxuXHRcdEBjb250ZW50O1xuXHRcdCR0aGVtZS1tYXA6IG51bGwgIWdsb2JhbDtcblx0ICB9XG5cdH1cbiAgfVxuICBcbiAgQGZ1bmN0aW9uIHRoZW1lZCgka2V5KSB7XG5cdEByZXR1cm4gbWFwLWdldCgkdGhlbWUtbWFwLCAka2V5KTtcbiAgfVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLypcbiAgICogSW1wbGVtZW50YXRpb24gb2YgdGhlbWVzXG4gICAqL1xuaDMge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4OyB9XG5cbi5leGNlbC1leHBvcnQtY29udHJvbCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmV4Y2VsLWV4cG9ydC1sYWJlbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIyMHB4OyB9XG5cbi5leGNlbC1leHBvcnQtZmlsdGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogLTEwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDsgfVxuICAudGhlbWUtYmx1ZSAuZXhjZWwtZXhwb3J0LWZpbHRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNlYmYxZjY7IH1cbiAgLnRoZW1lLW9yYW5nZSAuZXhjZWwtZXhwb3J0LWZpbHRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNmMGU0ZGI7IH1cbiAgLnRoZW1lLWdyZWVuIC5leGNlbC1leHBvcnQtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2RmZWNkMzsgfVxuICAudGhlbWUtcHVycGxlIC5leGNlbC1leHBvcnQtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2U4ZTJlZTsgfVxuICAudGhlbWUtZ3JheSAuZXhjZWwtZXhwb3J0LWZpbHRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7IH1cbiAgLnRoZW1lLXNpbHZlciAuZXhjZWwtZXhwb3J0LWZpbHRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTJlMmUyLCAjZjJmMmYyKTsgfVxuXG4udG90YWwtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7IH1cblxuLnRvdGFsLWJsb2NrIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cblxuLmV4Y2VsLWV4cG9ydC1ub3RpZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7IH1cbiAgLmV4Y2VsLWV4cG9ydC1ub3RpZiAuaW52YWxpZC1leGNlbC1leHBvcnQtbm90aWYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB1bmNvbGxhcHNlRXJyb3JOb3RpZkFuaW1hdGlvbiAwLjVzO1xuICAgIGFuaW1hdGlvbjogdW5jb2xsYXBzZUVycm9yTm90aWZBbmltYXRpb24gMC41cztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgfVxuICAgIC50aGVtZS1leHRyYS1zbSAuZXhjZWwtZXhwb3J0LW5vdGlmIC5pbnZhbGlkLWV4Y2VsLWV4cG9ydC1ub3RpZiB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgIGJvcmRlci10b3A6IDBweDsgfVxuICAgIC50aGVtZS1zbSAuZXhjZWwtZXhwb3J0LW5vdGlmIC5pbnZhbGlkLWV4Y2VsLWV4cG9ydC1ub3RpZiB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgIGJvcmRlci10b3A6IDBweDsgfVxuICAgIC50aGVtZS1yZWcgLmV4Y2VsLWV4cG9ydC1ub3RpZiAuaW52YWxpZC1leGNlbC1leHBvcnQtbm90aWYge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICBib3JkZXItdG9wOiAwcHg7IH1cbiAgICAudGhlbWUtbGcgLmV4Y2VsLWV4cG9ydC1ub3RpZiAuaW52YWxpZC1leGNlbC1leHBvcnQtbm90aWYge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICBib3JkZXItdG9wOiAwcHg7IH1cbiAgICAudGhlbWUtZXh0cmEtbGcgLmV4Y2VsLWV4cG9ydC1ub3RpZiAuaW52YWxpZC1leGNlbC1leHBvcnQtbm90aWYge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICBib3JkZXItdG9wOiAwcHg7IH1cbiAgICAudGhlbWUtYmx1ZSAuZXhjZWwtZXhwb3J0LW5vdGlmIC5pbnZhbGlkLWV4Y2VsLWV4cG9ydC1ub3RpZiB7XG4gICAgICBjb2xvcjogI2Y4MTMxMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzgxYTY7XG4gICAgICBib3JkZXItdG9wOiAwcHg7IH1cbiAgICAudGhlbWUtb3JhbmdlIC5leGNlbC1leHBvcnQtbm90aWYgLmludmFsaWQtZXhjZWwtZXhwb3J0LW5vdGlmIHtcbiAgICAgIGNvbG9yOiAjZjgxMzEzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwOGI0MTtcbiAgICAgIGJvcmRlci10b3A6IDBweDsgfVxuICAgIC50aGVtZS1ncmVlbiAuZXhjZWwtZXhwb3J0LW5vdGlmIC5pbnZhbGlkLWV4Y2VsLWV4cG9ydC1ub3RpZiB7XG4gICAgICBjb2xvcjogI2Y4MTMxMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ODlmMzg7XG4gICAgICBib3JkZXItdG9wOiAwcHg7IH1cbiAgICAudGhlbWUtcHVycGxlIC5leGNlbC1leHBvcnQtbm90aWYgLmludmFsaWQtZXhjZWwtZXhwb3J0LW5vdGlmIHtcbiAgICAgIGNvbG9yOiAjZjgxMzEzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JiNzZkYjtcbiAgICAgIGJvcmRlci10b3A6IDBweDsgfVxuICAgIC50aGVtZS1ncmF5IC5leGNlbC1leHBvcnQtbm90aWYgLmludmFsaWQtZXhjZWwtZXhwb3J0LW5vdGlmIHtcbiAgICAgIGNvbG9yOiAjZjgxMzEzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcbiAgICAgIGJvcmRlci10b3A6IDBweDsgfVxuICAgIC50aGVtZS1zaWx2ZXIgLmV4Y2VsLWV4cG9ydC1ub3RpZiAuaW52YWxpZC1leGNlbC1leHBvcnQtbm90aWYge1xuICAgICAgY29sb3I6ICNmODEzMTM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xuICAgICAgYm9yZGVyLXRvcDogMHB4OyB9XG4gICAgLmV4Y2VsLWV4cG9ydC1ub3RpZiAuaW52YWxpZC1leGNlbC1leHBvcnQtbm90aWYgLmZhLWV4Y2xhbWF0aW9uLWNpcmNsZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuLnRoZW1lLWJsdWUgLmVycm9yIHtcbiAgY29sb3I6ICNmODEzMTM7IH1cblxuLnRoZW1lLW9yYW5nZSAuZXJyb3Ige1xuICBjb2xvcjogI2Y4MTMxMzsgfVxuXG4udGhlbWUtZ3JlZW4gLmVycm9yIHtcbiAgY29sb3I6ICNmODEzMTM7IH1cblxuLnRoZW1lLXB1cnBsZSAuZXJyb3Ige1xuICBjb2xvcjogI2Y4MTMxMzsgfVxuXG4udGhlbWUtZ3JheSAuZXJyb3Ige1xuICBjb2xvcjogI2Y4MTMxMzsgfVxuXG4udGhlbWUtc2lsdmVyIC5lcnJvciB7XG4gIGNvbG9yOiAjZjgxMzEzOyB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyB1bmNvbGxhcHNlRXJyb3JOb3RpZkFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgb3BhY2l0eTogMTsgfVxuICAxMDAlIHtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG5Aa2V5ZnJhbWVzIHVuY29sbGFwc2VFcnJvck5vdGlmQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbi5tYXhpbXVtLXJvd3Mtbm90aWYge1xuICBjb2xvcjogIzc3Nzc3NztcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB3aWR0aDogMjgwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTYwcHg7IH1cblxuLmV4Y2VsLWV4cG9ydC1tZW51LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpOyB9XG4gIC50aGVtZS1leHRyYS1zbSAuZXhjZWwtZXhwb3J0LW1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAudGhlbWUtc20gLmV4Y2VsLWV4cG9ydC1tZW51LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgLnRoZW1lLXJlZyAuZXhjZWwtZXhwb3J0LW1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAudGhlbWUtbGcgLmV4Y2VsLWV4cG9ydC1tZW51LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgLnRoZW1lLWV4dHJhLWxnIC5leGNlbC1leHBvcnQtbWVudS1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkOyB9XG4gIC50aGVtZS1ibHVlIC5leGNlbC1leHBvcnQtbWVudS1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzgxYTY7IH1cbiAgLnRoZW1lLW9yYW5nZSAuZXhjZWwtZXhwb3J0LW1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTA4YjQxOyB9XG4gIC50aGVtZS1ncmVlbiAuZXhjZWwtZXhwb3J0LW1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjg5ZjM4OyB9XG4gIC50aGVtZS1wdXJwbGUgLmV4Y2VsLWV4cG9ydC1tZW51LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiNzZkYjsgfVxuICAudGhlbWUtZ3JheSAuZXhjZWwtZXhwb3J0LW1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5OyB9XG4gIC50aGVtZS1zaWx2ZXIgLmV4Y2VsLWV4cG9ydC1tZW51LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTsgfVxuICAuZXhjZWwtZXhwb3J0LW1lbnUtY29udGFpbmVyIC5mb3JtLWNvbnRyb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDsgfVxuICAgIC5leGNlbC1leHBvcnQtbWVudS1jb250YWluZXIgLmZvcm0tY29udHJvbCBpbnB1dCB7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgICAuZXhjZWwtZXhwb3J0LW1lbnUtY29udGFpbmVyIC5mb3JtLWNvbnRyb2wgaW5wdXQubmctaW52YWxpZCB7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7IH1cbiAgICAgICAgLnRoZW1lLWJsdWUgLmV4Y2VsLWV4cG9ydC1tZW51LWNvbnRhaW5lciAuZm9ybS1jb250cm9sIGlucHV0Lm5nLWludmFsaWQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MTMxMzsgfVxuICAgICAgICAudGhlbWUtb3JhbmdlIC5leGNlbC1leHBvcnQtbWVudS1jb250YWluZXIgLmZvcm0tY29udHJvbCBpbnB1dC5uZy1pbnZhbGlkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmODEzMTM7IH1cbiAgICAgICAgLnRoZW1lLWdyZWVuIC5leGNlbC1leHBvcnQtbWVudS1jb250YWluZXIgLmZvcm0tY29udHJvbCBpbnB1dC5uZy1pbnZhbGlkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmODEzMTM7IH1cbiAgICAgICAgLnRoZW1lLXB1cnBsZSAuZXhjZWwtZXhwb3J0LW1lbnUtY29udGFpbmVyIC5mb3JtLWNvbnRyb2wgaW5wdXQubmctaW52YWxpZCB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjgxMzEzOyB9XG4gICAgICAgIC50aGVtZS1ncmF5IC5leGNlbC1leHBvcnQtbWVudS1jb250YWluZXIgLmZvcm0tY29udHJvbCBpbnB1dC5uZy1pbnZhbGlkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmODEzMTM7IH1cbiAgICAgICAgLnRoZW1lLXNpbHZlciAuZXhjZWwtZXhwb3J0LW1lbnUtY29udGFpbmVyIC5mb3JtLWNvbnRyb2wgaW5wdXQubmctaW52YWxpZCB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjgxMzEzOyB9XG4gIC5leGNlbC1leHBvcnQtbWVudS1jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICBoZWlnaHQ6IDMwcHg7IH1cbiAgICAuZXhjZWwtZXhwb3J0LW1lbnUtY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIC5idG4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDBweDsgfVxuICAgICAgLmV4Y2VsLWV4cG9ydC1tZW51LWNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciAuYnRuLmNhbmNlbCB7XG4gICAgICAgIHJpZ2h0OiAxMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk5OTk5OTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjODg4ODg4OyB9XG4gICAgICAgIC5leGNlbC1leHBvcnQtbWVudS1jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIgLmJ0bi5jYW5jZWw6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7IH1cbiAgICAgIC5leGNlbC1leHBvcnQtbWVudS1jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIgLmJ0biAuZmEtZmlsZS1leHBvcnQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbiAgICAgIC5leGNlbC1leHBvcnQtbWVudS1jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIgLmJ0bjpkaXNhYmxlZCwgLmV4Y2VsLWV4cG9ydC1tZW51LWNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciAuYnRuIFtkaXNhYmxlZF0ge1xuICAgICAgICBvcGFjaXR5OiAwLjc1OyB9XG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxuaDMge1xuXHRtYXJnaW4tdG9wOiAwcHg7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jaGVja2JveC1jb250YWluZXIge1xuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5leGNlbC1leHBvcnQtY29udHJvbCB7XG5cdG1hcmdpbi1yaWdodDogMTBweDtcblx0ZGlzcGxheTogYmxvY2s7XG59XG4uZXhjZWwtZXhwb3J0LWxhYmVsIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0cGFkZGluZy1yaWdodDogMTBweDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR3aWR0aDogMjIwcHg7XG59XG4uZXhjZWwtZXhwb3J0LWZpbHRlci1jb250YWluZXIge1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRAaW5jbHVkZSB0aGVtaWZ5KCR0aGVtZXMpIHsgIFxuXHRcdGJhY2tncm91bmQ6IHRoZW1lZCgnb3BlblVsdHJhTHQnKTsgIFxuXHR9XG5cdG1hcmdpbjogLTEwcHg7XG5cdG1hcmdpbi10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4udG90YWwtY29udGFpbmVyIHtcblx0cGFkZGluZy10b3A6IDIwcHg7XG59XG4udG90YWwtYmxvY2sge1xuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5leGNlbC1leHBvcnQtbm90aWYge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXG5cdC5pbnZhbGlkLWV4Y2VsLWV4cG9ydC1ub3RpZiB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiA1MDBweDtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cdFx0cGFkZGluZy1yaWdodDogMjBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRcdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuNzUpO1xuXHRcdC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuNzUpO1xuXHRcdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0LXdlYmtpdC1hbmltYXRpb246IHVuY29sbGFwc2VFcnJvck5vdGlmQW5pbWF0aW9uIDAuNXM7XG5cdFx0YW5pbWF0aW9uOiB1bmNvbGxhcHNlRXJyb3JOb3RpZkFuaW1hdGlvbiAwLjVzO1xuXHRcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuXHRcdEBpbmNsdWRlIHRoZW1pZnkoJHRoZW1lcykgeyAgXG5cdFx0XHRjb2xvcjogdGhlbWVkKCdvcGVuRXJyb3InKTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHRoZW1lZCgnb3Blbkx0U29saWQnKTtcblx0XHRcdGJvcmRlci10b3A6IDBweDtcblx0XHR9XG5cdFx0LmZhLWV4Y2xhbWF0aW9uLWNpcmNsZSB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0fVxuXHR9XG59XG4uZXJyb3Ige1xuXHRAaW5jbHVkZSB0aGVtaWZ5KCR0aGVtZXMpIHsgIFxuXHRcdGNvbG9yOiB0aGVtZWQoJ29wZW5FcnJvcicpO1xuXHR9XG59XG5cblxuQC13ZWJraXQta2V5ZnJhbWVzIHVuY29sbGFwc2VFcnJvck5vdGlmQW5pbWF0aW9uIHtcblx0MCUgeyBtYXgtaGVpZ2h0OiAwcHg7IG9wYWNpdHk6IDE7IH1cblx0MTAwJSB7IG1heC1oZWlnaHQ6IDQwcHg7IG9wYWNpdHk6IDE7IH1cbn1cbkBrZXlmcmFtZXMgdW5jb2xsYXBzZUVycm9yTm90aWZBbmltYXRpb24ge1xuXHQwJSB7IG1heC1oZWlnaHQ6IDBweDsgb3BhY2l0eTogMTsgfVxuXHQxMDAlIHsgbWF4LWhlaWdodDogNDBweDsgb3BhY2l0eTogMTsgfVxufVxuXG4ubWF4aW11bS1yb3dzLW5vdGlmIHtcblx0Y29sb3I6ICM3Nzc3Nzc7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0Zm9udC1zaXplOiAwLjhyZW07XG5cdHdpZHRoOiAyODBweDtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0cGFkZGluZy1sZWZ0OiAxNjBweDtcbn1cbi5leGNlbC1leHBvcnQtbWVudS1jb250YWluZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiA1MDBweDtcblx0aGVpZ2h0OiBhdXRvO1xuXHRAaW5jbHVkZSB0aGVtaWZ5KCR0aGVtZXMpIHtcblx0XHRib3JkZXI6IDFweCBzb2xpZCB0aGVtZWQoJ29wZW5MdFNvbGlkJyk7XG5cdH1cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cGFkZGluZzogMjBweDtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XG5cdC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuNzUpO1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XG5cblx0LmZvcm0tY29udHJvbCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXG5cdFx0aW5wdXQge1xuXHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcblx0XHRcdFxuXHRcdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0XHRcdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB0aGVtZWQoJ29wZW5FcnJvcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5idXR0b24tY29udGFpbmVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZy10b3A6IDI0cHg7XG5cdFx0aGVpZ2h0OiAzMHB4O1xuXG5cdFx0LmJ0biB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRyaWdodDogMHB4O1xuXG5cdFx0XHQmLmNhbmNlbCB7XG5cdFx0XHRcdHJpZ2h0OiAxMDBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogIzk5OTk5OTtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjODg4ODg4O1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICM2NjY2NjY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5mYS1maWxlLWV4cG9ydCB7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdH1cblx0XHRcdCY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0ge1xuXHRcdFx0XHRvcGFjaXR5OiAwLjc1O1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/export-to-excel-overlay/export-to-excel-overlay.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/export-to-excel-overlay/export-to-excel-overlay.component.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const export_to_excel_overlay_tokens_1 = __webpack_require__(/*! ./export/export-to-excel-overlay-tokens */ "./src/app/components/export-to-excel-overlay/export/export-to-excel-overlay-tokens.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const theme_service_1 = __webpack_require__(/*! ./../../services/theme/theme.service */ "./src/app/services/theme/theme.service.ts");
const export_options_service_1 = __webpack_require__(/*! ./../../services/export/export-options/export-options.service */ "./src/app/services/export/export-options/export-options.service.ts");
const excel_service_1 = __webpack_require__(/*! ./../../services/excel/excel.service */ "./src/app/services/excel/excel.service.ts");
let ExportToExcelOverlayComponent = class ExportToExcelOverlayComponent {
    constructor(data, fb, themeService, exportOptionsService, elementRef, excelService) {
        this.data = data;
        this.fb = fb;
        this.themeService = themeService;
        this.exportOptionsService = exportOptionsService;
        this.elementRef = elementRef;
        this.excelService = excelService;
        this.exportOptionEmitter = new core_1.EventEmitter();
        this.closeEmitter = new core_1.EventEmitter();
        this.maxSheetsPerDocument = 100;
    }
    ngOnInit() {
        const lastEmit = this.exportOptionsService.lastEmit;
        this.exportOptionsService.exportOptionEmitter = this.exportOptionEmitter;
        this.themeService.themes.forEach(theme => {
            this.elementRef.nativeElement.classList.add(theme);
        });
        this.form = this.fb.group({
            selectedRecordsOnly: [lastEmit ? lastEmit.selectedRecordsOnly : false, [forms_1.Validators.required]],
            exportCustomerData: [lastEmit ? lastEmit.exportCustomerData : true, [forms_1.Validators.required]],
            exportTransactionData: [lastEmit ? lastEmit.exportTransactionData : false, [forms_1.Validators.required]]
        });
        this.form.valueChanges.subscribe(res => {
            this.updateExportableItems(this.form.controls['selectedRecordsOnly'].value);
        });
        this.updateExportableItems(this.form.controls['selectedRecordsOnly'].value);
    }
    updateExportableItems(selectedOnly) {
        this.exportableItems = selectedOnly ? this.getSelectedExportableItems() : this.data.exportableItems;
    }
    getSelectedExportableItems() {
        return this.data.exportableItems.filter(item => item.selected);
    }
    onSubmit(form) {
        if (form.invalid) {
            return;
        }
        const formData = form.value;
        this.excelService.saveWorkbookFromData(this.exportableItems, 'customer_data', this.form.controls['exportCustomerData'].value, this.form.controls['exportTransactionData'].value);
        this.exportOptionEmitter.emit({
            selectedRecordsOnly: formData.selectedRecordsOnly,
            exportCustomerData: formData.exportCustomerData,
            exportTransactionData: formData.exportTransactionData
        });
    }
    closeExportToExcelModal() {
        this.closeEmitter.emit();
    }
};
ExportToExcelOverlayComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [export_to_excel_overlay_tokens_1.EXPORT_TO_EXCEL_OVERLAY_DATA,] }] },
    { type: forms_1.FormBuilder },
    { type: theme_service_1.ThemeService },
    { type: export_options_service_1.ExportOptionsService },
    { type: core_1.ElementRef },
    { type: excel_service_1.ExcelService }
];
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], ExportToExcelOverlayComponent.prototype, "exportOptionEmitter", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], ExportToExcelOverlayComponent.prototype, "closeEmitter", void 0);
ExportToExcelOverlayComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tablejs-export-to-excel-overlay',
        template: __webpack_require__(/*! raw-loader!./export-to-excel-overlay.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/export-to-excel-overlay/export-to-excel-overlay.component.html"),
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__(/*! ./export-to-excel-overlay.component.scss */ "./src/app/components/export-to-excel-overlay/export-to-excel-overlay.component.scss")]
    }),
    tslib_1.__param(0, core_1.Inject(export_to_excel_overlay_tokens_1.EXPORT_TO_EXCEL_OVERLAY_DATA)),
    tslib_1.__metadata("design:paramtypes", [Object, forms_1.FormBuilder,
        theme_service_1.ThemeService,
        export_options_service_1.ExportOptionsService,
        core_1.ElementRef,
        excel_service_1.ExcelService])
], ExportToExcelOverlayComponent);
exports.ExportToExcelOverlayComponent = ExportToExcelOverlayComponent;


/***/ }),

/***/ "./src/app/components/export-to-excel-overlay/export/export-to-excel-overlay-tokens.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/export-to-excel-overlay/export/export-to-excel-overlay-tokens.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
exports.EXPORT_TO_EXCEL_OVERLAY_DATA = new core_1.InjectionToken('EXPORT_TO_EXCEL_OVERLAY_DATA');


/***/ }),

/***/ "./src/app/components/grid-example/grid-example.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/grid-example/grid-example.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/*\n   * Implementation of themes\n   */\nh2 {\n  margin-top: 0px;\n  margin-bottom: 30px; }\n.theme-blue .red-text {\n  color: #f81313; }\n.theme-orange .red-text {\n  color: #f81313; }\n.theme-green .red-text {\n  color: #f81313; }\n.theme-purple .red-text {\n  color: #f81313; }\n.theme-gray .red-text {\n  color: #f81313; }\n.theme-silver .red-text {\n  color: #f81313; }\n.to-front {\n  z-index: 1; }\n.table {\n  margin-bottom: 0px;\n  border-collapse: collapse;\n  position: relative; }\n.table thead {\n    position: relative; }\n.table thead tr {\n      position: relative;\n      box-sizing: border-box;\n      vertical-align: baseline;\n      white-space: nowrap;\n      border-collapse: collapse; }\n.theme-extra-sm .table thead tr {\n        font-size: 0.75rem; }\n.theme-sm .table thead tr {\n        font-size: 0.85rem; }\n.theme-reg .table thead tr {\n        font-size: 0.93rem; }\n.theme-lg .table thead tr {\n        font-size: 1rem; }\n.theme-extra-lg .table thead tr {\n        font-size: 1.1rem; }\n.table thead tr th, .table thead tr td {\n        position: relative;\n        border-bottom-width: 0px;\n        border-bottom-style: none;\n        padding: 0px;\n        display: table-cell;\n        position: relative;\n        height: auto;\n        width: 100%;\n        padding: 0rem;\n        vertical-align: bottom;\n        line-height: 1rem;\n        box-sizing: border-box;\n        color: #ffffff; }\n.theme-extra-sm .table thead tr th, .theme-extra-sm .table thead tr td {\n          border-top: 1px solid;\n          border-left: 1px solid;\n          border-right: 1px solid; }\n.theme-sm .table thead tr th, .theme-sm .table thead tr td {\n          border-top: 1px solid;\n          border-left: 1px solid;\n          border-right: 1px solid; }\n.theme-reg .table thead tr th, .theme-reg .table thead tr td {\n          border-top: 1px solid;\n          border-left: 1px solid;\n          border-right: 1px solid; }\n.theme-lg .table thead tr th, .theme-lg .table thead tr td {\n          border-top: 1px solid;\n          border-left: 1px solid;\n          border-right: 1px solid; }\n.theme-extra-lg .table thead tr th, .theme-extra-lg .table thead tr td {\n          border-top: 1px solid;\n          border-left: 1px solid;\n          border-right: 1px solid; }\n.theme-blue .table thead tr th, .theme-blue .table thead tr td {\n          border-top: 1px solid #3381a6;\n          border-left: 1px solid #3381a6;\n          border-right: 1px solid #3381a6;\n          background-color: #247297;\n          background: #247297; }\n.theme-orange .table thead tr th, .theme-orange .table thead tr td {\n          border-top: 1px solid #e08b41;\n          border-left: 1px solid #e08b41;\n          border-right: 1px solid #e08b41;\n          background-color: #d17c32;\n          background: #d17c32; }\n.theme-green .table thead tr th, .theme-green .table thead tr td {\n          border-top: 1px solid #689f38;\n          border-left: 1px solid #689f38;\n          border-right: 1px solid #689f38;\n          background-color: #558b2f;\n          background: #558b2f; }\n.theme-purple .table thead tr th, .theme-purple .table thead tr td {\n          border-top: 1px solid #bb76db;\n          border-left: 1px solid #bb76db;\n          border-right: 1px solid #bb76db;\n          background-color: #8b50a7;\n          background: #8b50a7; }\n.theme-gray .table thead tr th, .theme-gray .table thead tr td {\n          border-top: 1px solid #999999;\n          border-left: 1px solid #999999;\n          border-right: 1px solid #999999;\n          background-color: #888888;\n          background: #888888; }\n.theme-silver .table thead tr th, .theme-silver .table thead tr td {\n          border-top: 1px solid #999999;\n          border-left: 1px solid #999999;\n          border-right: 1px solid #999999;\n          background-color: #888888;\n          background: linear-gradient(#bbbbbb, #888888); }\n.theme-extra-sm .table thead tr th, .theme-extra-sm .table thead tr td {\n          font-size: 0.75rem; }\n.theme-sm .table thead tr th, .theme-sm .table thead tr td {\n          font-size: 0.85rem; }\n.theme-reg .table thead tr th, .theme-reg .table thead tr td {\n          font-size: 0.93rem; }\n.theme-lg .table thead tr th, .theme-lg .table thead tr td {\n          font-size: 1rem; }\n.theme-extra-lg .table thead tr th, .theme-extra-lg .table thead tr td {\n          font-size: 1.1rem; }\n.table thead tr th div, .table thead tr td div {\n          width: 100%;\n          height: 100%;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          box-sizing: border-box;\n          color: #ffffff; }\n.theme-extra-sm .table thead tr th div, .theme-extra-sm .table thead tr td div {\n            padding: 0.5rem;\n            font-size: 0.75rem; }\n.theme-sm .table thead tr th div, .theme-sm .table thead tr td div {\n            padding: 0.6rem;\n            font-size: 0.85rem; }\n.theme-reg .table thead tr th div, .theme-reg .table thead tr td div {\n            padding: 0.75rem;\n            font-size: 0.93rem; }\n.theme-lg .table thead tr th div, .theme-lg .table thead tr td div {\n            padding: 1rem;\n            font-size: 1rem; }\n.theme-extra-lg .table thead tr th div, .theme-extra-lg .table thead tr td div {\n            padding: 1.25rem;\n            font-size: 1.1rem; }\n.table tbody {\n    position: relative; }\n.table tbody tr {\n      position: relative;\n      box-sizing: border-box;\n      vertical-align: baseline;\n      white-space: nowrap;\n      border-collapse: collapse; }\n.theme-extra-sm .table tbody tr {\n        font-size: 0.75rem; }\n.theme-sm .table tbody tr {\n        font-size: 0.85rem; }\n.theme-reg .table tbody tr {\n        font-size: 0.93rem; }\n.theme-lg .table tbody tr {\n        font-size: 1rem; }\n.theme-extra-lg .table tbody tr {\n        font-size: 1.1rem; }\n.table tbody tr th, .table tbody tr td {\n        position: relative;\n        border: 1px solid #DDDDDD;\n        border-bottom-width: 0px;\n        border-bottom-style: none;\n        padding: 0px;\n        display: table-cell;\n        position: relative;\n        height: auto;\n        width: 100%;\n        padding: 0rem;\n        vertical-align: bottom;\n        line-height: 1rem;\n        box-sizing: border-box; }\n.theme-extra-sm .table tbody tr th, .theme-extra-sm .table tbody tr td {\n          font-size: 0.75rem; }\n.theme-sm .table tbody tr th, .theme-sm .table tbody tr td {\n          font-size: 0.85rem; }\n.theme-reg .table tbody tr th, .theme-reg .table tbody tr td {\n          font-size: 0.93rem; }\n.theme-lg .table tbody tr th, .theme-lg .table tbody tr td {\n          font-size: 1rem; }\n.theme-extra-lg .table tbody tr th, .theme-extra-lg .table tbody tr td {\n          font-size: 1.1rem; }\n.table tbody tr th div, .table tbody tr td div {\n          position: relative;\n          width: 100%;\n          height: 100%;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          box-sizing: border-box; }\n.theme-extra-sm .table tbody tr th div, .theme-extra-sm .table tbody tr td div {\n            padding: 0.5rem;\n            font-size: 0.75rem; }\n.theme-sm .table tbody tr th div, .theme-sm .table tbody tr td div {\n            padding: 0.6rem;\n            font-size: 0.85rem; }\n.theme-reg .table tbody tr th div, .theme-reg .table tbody tr td div {\n            padding: 0.75rem;\n            font-size: 0.93rem; }\n.theme-lg .table tbody tr th div, .theme-lg .table tbody tr td div {\n            padding: 1rem;\n            font-size: 1rem; }\n.theme-extra-lg .table tbody tr th div, .theme-extra-lg .table tbody tr td div {\n            padding: 1.25rem;\n            font-size: 1.1rem; }\n.table tbody tr th div.star-container, .table tbody tr td div.star-container {\n            position: absolute;\n            display: inline-block;\n            overflow: hidden;\n            width: auto;\n            height: auto;\n            padding: 0rem;\n            margin: 0px;\n            font-size: 100%; }\n.theme-blue .table tbody tr th div.star-container .fa-star, .theme-blue .table tbody tr td div.star-container .fa-star {\n              color: #ebf1f6; }\n.theme-orange .table tbody tr th div.star-container .fa-star, .theme-orange .table tbody tr td div.star-container .fa-star {\n              color: #f0e4db; }\n.theme-green .table tbody tr th div.star-container .fa-star, .theme-green .table tbody tr td div.star-container .fa-star {\n              color: #dfecd3; }\n.theme-purple .table tbody tr th div.star-container .fa-star, .theme-purple .table tbody tr td div.star-container .fa-star {\n              color: #e8e2ee; }\n.theme-gray .table tbody tr th div.star-container .fa-star, .theme-gray .table tbody tr td div.star-container .fa-star {\n              color: #f2f2f2; }\n.theme-silver .table tbody tr th div.star-container .fa-star, .theme-silver .table tbody tr td div.star-container .fa-star {\n              color: #f2f2f2; }\n.table tbody tr th div.star-container-overlay, .table tbody tr td div.star-container-overlay {\n            position: absolute;\n            left: 0px;\n            top: 0px;\n            display: block;\n            overflow: hidden;\n            text-overflow: clip;\n            width: 72%;\n            height: 100%;\n            padding: 0rem;\n            margin: 0px;\n            font-size: 100%; }\n.theme-blue .table tbody tr th div.star-container-overlay .fa-star, .theme-blue .table tbody tr td div.star-container-overlay .fa-star {\n              color: #3381a6; }\n.theme-orange .table tbody tr th div.star-container-overlay .fa-star, .theme-orange .table tbody tr td div.star-container-overlay .fa-star {\n              color: #e08b41; }\n.theme-green .table tbody tr th div.star-container-overlay .fa-star, .theme-green .table tbody tr td div.star-container-overlay .fa-star {\n              color: #689f38; }\n.theme-purple .table tbody tr th div.star-container-overlay .fa-star, .theme-purple .table tbody tr td div.star-container-overlay .fa-star {\n              color: #bb76db; }\n.theme-gray .table tbody tr th div.star-container-overlay .fa-star, .theme-gray .table tbody tr td div.star-container-overlay .fa-star {\n              color: #999999; }\n.theme-silver .table tbody tr th div.star-container-overlay .fa-star, .theme-silver .table tbody tr td div.star-container-overlay .fa-star {\n              color: #999999; }\n.table tbody tr th.expand-content, .table tbody tr td.expand-content {\n          grid-column-start: 1;\n          grid-column-end: 12;\n          order: 11;\n          border: 0px; }\n.theme-blue .table tbody tr th.expand-content > div, .theme-blue .table tbody tr td.expand-content > div {\n            background-color: #ebf1f6;\n            background: #ebf1f6; }\n.theme-orange .table tbody tr th.expand-content > div, .theme-orange .table tbody tr td.expand-content > div {\n            background-color: #f0e4db;\n            background: #f0e4db; }\n.theme-green .table tbody tr th.expand-content > div, .theme-green .table tbody tr td.expand-content > div {\n            background-color: #dfecd3;\n            background: #dfecd3; }\n.theme-purple .table tbody tr th.expand-content > div, .theme-purple .table tbody tr td.expand-content > div {\n            background-color: #e8e2ee;\n            background: #e8e2ee; }\n.theme-gray .table tbody tr th.expand-content > div, .theme-gray .table tbody tr td.expand-content > div {\n            background-color: #f2f2f2;\n            background: #f2f2f2; }\n.theme-silver .table tbody tr th.expand-content > div, .theme-silver .table tbody tr td.expand-content > div {\n            background-color: #f2f2f2;\n            background: linear-gradient(#e2e2e2, #f2f2f2); }\n.table tbody tr th.expand-content .collapsed, .table tbody tr td.expand-content .collapsed {\n            padding: 0px;\n            height: 0px;\n            overflow: hidden; }\n.table tbody tr th.expand-content div:not(.collapsed), .table tbody tr td.expand-content div:not(.collapsed) {\n            position: relative;\n            height: auto;\n            overflow: hidden; }\n.table tbody tr th.expand-content div:not(.collapsed).star-container-overlay, .table tbody tr td.expand-content div:not(.collapsed).star-container-overlay {\n              position: absolute; }\n.table tbody tr th.expand-content div:not(.collapsed).product-rating-col, .table tbody tr td.expand-content div:not(.collapsed).product-rating-col {\n              position: absolute; }\n.table tbody tr.selected {\n        background-color: #d2d2d2; }\n.theme-extra-sm .table tbody tr.selected td.expand-content > div, .theme-extra-sm .table tbody tr.selected th.expand-content > div {\n          background-color: #e9e9e9;\n          background: #e9e9e9; }\n.theme-sm .table tbody tr.selected td.expand-content > div, .theme-sm .table tbody tr.selected th.expand-content > div {\n          background-color: #e9e9e9;\n          background: #e9e9e9; }\n.theme-reg .table tbody tr.selected td.expand-content > div, .theme-reg .table tbody tr.selected th.expand-content > div {\n          background-color: #e9e9e9;\n          background: #e9e9e9; }\n.theme-lg .table tbody tr.selected td.expand-content > div, .theme-lg .table tbody tr.selected th.expand-content > div {\n          background-color: #e9e9e9;\n          background: #e9e9e9; }\n.theme-extra-lg .table tbody tr.selected td.expand-content > div, .theme-extra-lg .table tbody tr.selected th.expand-content > div {\n          background-color: #e9e9e9;\n          background: #e9e9e9; }\n.theme-blue .table tbody tr.selected td.expand-content > div, .theme-blue .table tbody tr.selected th.expand-content > div {\n          background-color: #e9e9e9;\n          background: #e9e9e9; }\n.theme-orange .table tbody tr.selected td.expand-content > div, .theme-orange .table tbody tr.selected th.expand-content > div {\n          background-color: #e9e9e9;\n          background: #e9e9e9; }\n.theme-green .table tbody tr.selected td.expand-content > div, .theme-green .table tbody tr.selected th.expand-content > div {\n          background-color: #e9e9e9;\n          background: #e9e9e9; }\n.theme-purple .table tbody tr.selected td.expand-content > div, .theme-purple .table tbody tr.selected th.expand-content > div {\n          background-color: #e9e9e9;\n          background: #e9e9e9; }\n.theme-gray .table tbody tr.selected td.expand-content > div, .theme-gray .table tbody tr.selected th.expand-content > div {\n          background-color: #e9e9e9;\n          background: #e9e9e9; }\n.theme-silver .table tbody tr.selected td.expand-content > div, .theme-silver .table tbody tr.selected th.expand-content > div {\n          background-color: #e9e9e9;\n          background: #e9e9e9; }\n.text-center {\n  text-align: center !important; }\n.enable-menu {\n  position: relative;\n  display: block;\n  background-color: #efefef;\n  padding: 20px;\n  margin-bottom: 10px;\n  width: 100%;\n  height: 63px;\n  z-index: 10;\n  box-sizing: border-box; }\n.theme-extra-sm .enable-menu {\n    border-bottom: 2px solid; }\n.theme-sm .enable-menu {\n    border-bottom: 2px solid; }\n.theme-reg .enable-menu {\n    border-bottom: 2px solid; }\n.theme-lg .enable-menu {\n    border-bottom: 2px solid; }\n.theme-extra-lg .enable-menu {\n    border-bottom: 2px solid; }\n.theme-blue .enable-menu {\n    border-bottom: 2px solid #247297; }\n.theme-orange .enable-menu {\n    border-bottom: 2px solid #d17c32; }\n.theme-green .enable-menu {\n    border-bottom: 2px solid #558b2f; }\n.theme-purple .enable-menu {\n    border-bottom: 2px solid #8b50a7; }\n.theme-gray .enable-menu {\n    border-bottom: 2px solid #888888; }\n.theme-silver .enable-menu {\n    border-bottom: 2px solid #888888; }\n.enable-menu span {\n    padding-right: 25px; }\n.enable-menu .enable-labels {\n    padding-right: 8px; }\n.enable-menu .form-control.menu {\n    top: -50px;\n    left: 350px; }\n.data-options {\n  position: relative;\n  display: block;\n  padding: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n.data-labels {\n  padding-right: 8px; }\n.data-select {\n  padding-right: 25px; }\n.transaction-select {\n  margin-bottom: 10px;\n  display: inline-block; }\n.theme-extra-sm .transaction-select input {\n    font-size: 0.75rem; }\n.theme-sm .transaction-select input {\n    font-size: 0.85rem; }\n.theme-reg .transaction-select input {\n    font-size: 0.93rem; }\n.theme-lg .transaction-select input {\n    font-size: 1rem; }\n.theme-extra-lg .transaction-select input {\n    font-size: 1.1rem; }\n.printing .transaction-select {\n  display: none; }\n.grid-functions {\n  position: relative;\n  display: block;\n  padding: 20px;\n  padding-bottom: 0px; }\n.grid-container {\n  position: relative;\n  display: block;\n  width: calc(100% - 20);\n  overflow: hidden;\n  overflow-x: scroll;\n  margin: 20px;\n  margin-top: 10px; }\n.theme-extra-sm .grid-container {\n    border: 2px solid; }\n.theme-sm .grid-container {\n    border: 2px solid; }\n.theme-reg .grid-container {\n    border: 2px solid; }\n.theme-lg .grid-container {\n    border: 2px solid; }\n.theme-extra-lg .grid-container {\n    border: 2px solid; }\n.theme-blue .grid-container {\n    border: 2px solid #247297; }\n.theme-orange .grid-container {\n    border: 2px solid #d17c32; }\n.theme-green .grid-container {\n    border: 2px solid #558b2f; }\n.theme-purple .grid-container {\n    border: 2px solid #8b50a7; }\n.theme-gray .grid-container {\n    border: 2px solid #888888; }\n.theme-silver .grid-container {\n    border: 2px solid #888888; }\n.export-container {\n  right: 0px;\n  position: absolute; }\n.print-container {\n  right: 130px;\n  position: absolute; }\n.print-container .fa-print {\n    margin-right: 10px; }\ndiv {\n  position: relative; }\n.table {\n  margin-bottom: 0rem;\n  border-spacing: 0px !important;\n  border-collapse: collapse !important; }\ntable thead th {\n  position: relative;\n  height: auto; }\ntr td, tr th {\n  height: 100%;\n  width: 100%; }\ntr td div.item-name, tr th div.item-name {\n    width: 180px; }\ntr td div.item-quantity, tr th div.item-quantity {\n    width: 180px; }\ntr td div.item-price, tr th div.item-price {\n    width: 140px; }\ntr td div.item-shipping, tr th div.item-shipping {\n    width: 140px; }\ntr td div.item-taxes, tr th div.item-taxes {\n    width: 160px; }\ntr td div.item-profit, tr th div.item-profit {\n    width: 160px; }\ntr td div.item-rating, tr th div.item-rating {\n    width: 160px; }\ntr td div, tr th div {\n  position: relative;\n  width: 100%;\n  height: 100%; }\ntr td div .styled-checkbox + label, tr th div .styled-checkbox + label {\n    position: absolute;\n    cursor: pointer;\n    padding: 0;\n    left: 50%;\n    -webkit-transform: translate(-10px, -1px);\n            transform: translate(-10px, -1px);\n    display: block; }\ntr td div .styled-checkbox + label.shift, tr th div .styled-checkbox + label.shift {\n      left: 25%; }\ntr td div.expand-col, tr th div.expand-col {\n    text-overflow: unset !important;\n    width: 40px;\n    padding-left: 1rem; }\ntr td div.select-row-col, tr th div.select-row-col {\n    text-overflow: unset !important;\n    width: 80px; }\ntr td div.select-row-col .sort-icon, tr th div.select-row-col .sort-icon {\n      width: 15px !important;\n      left: unset;\n      right: 0px; }\ntr td div.label-col, tr th div.label-col {\n    width: 300px; }\ntr td div.id-col, tr th div.id-col {\n    width: 120px; }\ntr td div.name-col, tr th div.name-col {\n    width: 220px; }\ntr td div.email-col, tr th div.email-col {\n    width: 250px; }\ntr td div.email-col span, tr th div.email-col span {\n      overflow: hidden;\n      text-overflow: ellipsis; }\ntr td div.phone-col, tr th div.phone-col {\n    width: 200px; }\ntr td div.rating-col, tr th div.rating-col {\n    width: 190px; }\ntr td div.total-sales-col, tr th div.total-sales-col {\n    width: 170px; }\ntr td div.total-item-sales-col, tr th div.total-item-sales-col {\n    width: 170px; }\ntr td div.gross-col, tr th div.gross-col {\n    width: 210px; }\ntr td div.net-col, tr th div.net-col {\n    width: 220px; }\ntr td div.product-name-col, tr th div.product-name-col {\n    width: 100% !important; }\ntr td div.product-quantity-col, tr th div.product-quantity-col {\n    width: 100% !important; }\ntr td div.product-base-price-col, tr th div.product-base-price-col {\n    width: 100% !important; }\ntr td div.product-sale-price-col, tr th div.product-sale-price-col {\n    width: 100% !important; }\ntr td div.product-shipping-cost-col, tr th div.product-shipping-cost-col {\n    width: 100% !important; }\ntr td div.product-profit-col, tr th div.product-profit-col {\n    width: 100% !important; }\ntr td div.product-rating-col, tr th div.product-rating-col {\n    width: 100% !important; }\ntr td div tablejs-horiz-resize-grip, tr th div tablejs-horiz-resize-grip {\n    opacity: 0.5; }\ntr td div:hover tablejs-horiz-resize-grip, tr th div:hover tablejs-horiz-resize-grip {\n    opacity: 1; }\n.table-bordered {\n  position: relative; }\n.table-striped tbody tr:nth-of-type(odd), .table-striped tbody tr:nth-of-type(even) {\n  position: relative; }\n.table-striped tbody tr:nth-of-type(odd).odd, .table-striped tbody tr:nth-of-type(even).odd {\n    background-color: rgba(0, 0, 0, 0.05); }\n.table-striped tbody tr:nth-of-type(odd).odd:hover, .table-striped tbody tr:nth-of-type(even).odd:hover {\n      background-color: #DDDDDD; }\n.table-striped tbody tr:nth-of-type(odd).even, .table-striped tbody tr:nth-of-type(even).even {\n    background-color: #fff; }\n.table-striped tbody tr:nth-of-type(odd).even:hover, .table-striped tbody tr:nth-of-type(even).even:hover {\n      background-color: #F5F5F5; }\nth .tablejs-editable-cell, td .tablejs-editable-cell {\n  background-color: #f2f2f2;\n  position: absolute;\n  display: inline-block;\n  margin-left: 0px;\n  margin: 0px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  box-sizing: border-box;\n  height: auto; }\n.theme-extra-sm th .tablejs-editable-cell, .theme-extra-sm td .tablejs-editable-cell {\n    width: calc(100% - 8px);\n    padding-top: 0.2rem;\n    padding-bottom: 0.2rem; }\n.theme-sm th .tablejs-editable-cell, .theme-sm td .tablejs-editable-cell {\n    width: calc(100% - 8px);\n    padding-top: 0.29rem;\n    padding-bottom: 0.29rem; }\n.theme-reg th .tablejs-editable-cell, .theme-reg td .tablejs-editable-cell {\n    width: calc(100% - 10px);\n    padding-top: 0.4rem;\n    padding-bottom: 0.4rem; }\n.theme-lg th .tablejs-editable-cell, .theme-lg td .tablejs-editable-cell {\n    width: calc(100% - 19px);\n    padding-top: 0.45rem;\n    padding-bottom: 0.45rem; }\n.theme-extra-lg th .tablejs-editable-cell, .theme-extra-lg td .tablejs-editable-cell {\n    width: calc(100% - 28px);\n    padding-top: 0.6rem;\n    padding-bottom: 0.6rem; }\nth .tablejs-editable-cell div, td .tablejs-editable-cell div {\n    position: absolute !important;\n    box-sizing: border-box;\n    padding: 0px !important;\n    top: 0px;\n    left: 0px;\n    overflow: visible !important; }\nth .tablejs-editable-cell div input, td .tablejs-editable-cell div input {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      box-sizing: border-box;\n      font-family: 'Source Sans Pro', sans-serif;\n      font-size: 100%;\n      padding-left: 3px;\n      margin-right: -8px;\n      height: auto; }\n.theme-extra-sm th .tablejs-editable-cell div input, .theme-extra-sm td .tablejs-editable-cell div input {\n        padding-top: 0.07rem;\n        padding-bottom: 0.07rem; }\n.theme-sm th .tablejs-editable-cell div input, .theme-sm td .tablejs-editable-cell div input {\n        padding-top: 0.1015rem;\n        padding-bottom: 0.1015rem; }\n.theme-reg th .tablejs-editable-cell div input, .theme-reg td .tablejs-editable-cell div input {\n        padding-top: 0.14rem;\n        padding-bottom: 0.14rem; }\n.theme-lg th .tablejs-editable-cell div input, .theme-lg td .tablejs-editable-cell div input {\n        padding-top: 0.1575rem;\n        padding-bottom: 0.1575rem; }\n.theme-extra-lg th .tablejs-editable-cell div input, .theme-extra-lg td .tablejs-editable-cell div input {\n        padding-top: 0.22rem;\n        padding-bottom: 0.22rem; }\nth.tablejs-sortable, td.tablejs-sortable {\n  cursor: ns-resize; }\nth.tablejs-sortable .sort-icon, td.tablejs-sortable .sort-icon {\n    position: absolute !important;\n    top: 0px;\n    height: 100% !important;\n    width: 65px !important;\n    left: unset;\n    right: 0px; }\nth.tablejs-sortable .sort-icon:after, td.tablejs-sortable .sort-icon:after {\n      position: absolute !important;\n      top: calc(50% - 8px);\n      right: 10px;\n      display: block;\n      font-family: \"Font Awesome 5 Free\";\n      content: '\\f338';\n      font-weight: 900;\n      text-align: right; }\nth.tablejs-sortable .sort-icon.sort-down:after, td.tablejs-sortable .sort-icon.sort-down:after {\n      content: '\\f309'; }\nth.tablejs-sortable .sort-icon.sort-up:after, td.tablejs-sortable .sort-icon.sort-up:after {\n      content: '\\f30c'; }\nth.tablejs-sortable .sort-icon.sort-shift:after, td.tablejs-sortable .sort-icon.sort-shift:after {\n      right: 30px; }\nth.tablejs-sortable .sort-icon.custom-sort, td.tablejs-sortable .sort-icon.custom-sort {\n      display: block; }\nth.tablejs-sortable .sort-icon.custom-sort i, td.tablejs-sortable .sort-icon.custom-sort i {\n        position: absolute;\n        display: block;\n        right: 25px;\n        font-size: 12px;\n        top: calc(50% - 6px);\n        text-align: right; }\nth.tablejs-sortable .sort-icon.custom-sort.sort-shift i, td.tablejs-sortable .sort-icon.custom-sort.sort-shift i {\n        right: 45px; }\nth.tablejs-sortable .sort-icon.custom-sort.sort-shift.custom-sort i, td.tablejs-sortable .sort-icon.custom-sort.sort-shift.custom-sort i {\n        right: 45px; }\nth[reorderCol].highlight-left, td[reorderCol].highlight-left {\n  position: relative;\n  overflow: visible !important; }\nth[reorderCol].highlight-left div, th[reorderCol].highlight-right div, td[reorderCol].highlight-left div, td[reorderCol].highlight-right div {\n  overflow: visible !important; }\nth[reorderCol].highlight-left div:after, th[reorderCol].highlight-right div:after, td[reorderCol].highlight-left div:after, td[reorderCol].highlight-right div:after {\n  box-sizing: border-box;\n  position: absolute;\n  display: block;\n  background-color: rgba(122, 122, 122, 0.05);\n  height: 404px;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 5; }\nth[reorderCol].highlight-left div:after, td[reorderCol].highlight-left div:after {\n  font-family: \"Font Awesome 5 Free\";\n  content: '\\f103';\n  font-weight: 900;\n  border-left-style: solid;\n  border-left-width: 1px;\n  border-left-color: #000000;\n  padding-left: 10px;\n  text-align: left;\n  -webkit-animation: mover 0.5s infinite  alternate;\n  animation: mover 0.5s infinite  alternate;\n  box-shadow: inset 3px 0 3px -3px rgba(0, 0, 0, 0.4); }\nth[reorderCol].highlight-left div.sort-icon:after, td[reorderCol].highlight-left div.sort-icon:after {\n  display: none; }\nth[reorderCol].highlight-right div:after, td[reorderCol].highlight-right div:after {\n  font-family: \"Font Awesome 5 Free\";\n  content: '\\f103';\n  font-weight: 900;\n  border-right-style: solid;\n  border-right-width: 1px;\n  border-right-color: #000000;\n  padding-right: 10px;\n  text-align: right;\n  -webkit-animation: mover 0.5s infinite  alternate;\n  animation: mover 0.5s infinite  alternate;\n  box-shadow: inset -3px 0 3px -3px rgba(0, 0, 0, 0.4); }\nth[reorderCol].highlight-right div.sort-icon:after, td[reorderCol].highlight-right div.sort-icon:after {\n  display: none; }\n@-webkit-keyframes mover {\n  0% {\n    padding-top: 4px; }\n  100% {\n    padding-top: 10px; } }\n@keyframes mover {\n  0% {\n    padding-top: 4px; }\n  100% {\n    padding-top: 10px; } }\nth .nested-grid-container, td .nested-grid-container {\n  position: relative;\n  display: block;\n  width: calc(100% - 20);\n  overflow: hidden;\n  overflow-x: scroll;\n  margin: 0px;\n  border: 0px; }\nth .nested-grid-container ::ng-deep .tablejs-table-width, td .nested-grid-container ::ng-deep .tablejs-table-width {\n    width: 100%;\n    padding: 0px; }\nth .nested-grid-container .table, td .nested-grid-container .table {\n    margin: 0px;\n    width: 100%; }\nth .nested-grid-container .table tr, td .nested-grid-container .table tr {\n      grid-template-columns: 20% 10% 15% 15% 15% 15% 10%;\n      box-sizing: border-box; }\n.theme-extra-sm th .nested-grid-container .table tr, .theme-extra-sm td .nested-grid-container .table tr {\n        font-size: 0.75rem; }\n.theme-sm th .nested-grid-container .table tr, .theme-sm td .nested-grid-container .table tr {\n        font-size: 0.85rem; }\n.theme-reg th .nested-grid-container .table tr, .theme-reg td .nested-grid-container .table tr {\n        font-size: 0.93rem; }\n.theme-lg th .nested-grid-container .table tr, .theme-lg td .nested-grid-container .table tr {\n        font-size: 1rem; }\n.theme-extra-lg th .nested-grid-container .table tr, .theme-extra-lg td .nested-grid-container .table tr {\n        font-size: 1.1rem; }\nth .nested-grid-container .table tr td, td .nested-grid-container .table tr td {\n        background-color: #ffffff; }\nth .fa-angle-down, td .fa-angle-down {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  cursor: pointer; }\n.theme-blue th .fa-angle-down, .theme-blue td .fa-angle-down {\n    color: #247297; }\n.theme-orange th .fa-angle-down, .theme-orange td .fa-angle-down {\n    color: #d17c32; }\n.theme-green th .fa-angle-down, .theme-green td .fa-angle-down {\n    color: #558b2f; }\n.theme-purple th .fa-angle-down, .theme-purple td .fa-angle-down {\n    color: #8b50a7; }\n.theme-gray th .fa-angle-down, .theme-gray td .fa-angle-down {\n    color: #888888; }\n.theme-silver th .fa-angle-down, .theme-silver td .fa-angle-down {\n    color: #888888; }\nth .fa-angle-down:not(.collapsed-arrow), td .fa-angle-down:not(.collapsed-arrow) {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg);\n    -webkit-animation: uncollapseArrowAnimation 0.25s;\n    animation: uncollapseArrowAnimation 0.25s; }\nth .fa-angle-down.initial-animation-prevented, td .fa-angle-down.initial-animation-prevented {\n    -webkit-animation-duration: 0ms;\n            animation-duration: 0ms; }\nth .fa-angle-down.collapsed-arrow, td .fa-angle-down.collapsed-arrow {\n    -webkit-transform: translate(-50%, -50%) rotate(-90deg);\n            transform: translate(-50%, -50%) rotate(-90deg);\n    -webkit-animation: collapseArrowAnimation 0.25s;\n    animation: collapseArrowAnimation 0.25s; }\n@-webkit-keyframes collapseArrowAnimation {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotate(-90deg);\n            transform: translate(-50%, -50%) rotate(-90deg); } }\n@keyframes collapseArrowAnimation {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotate(-90deg);\n            transform: translate(-50%, -50%) rotate(-90deg); } }\n@-webkit-keyframes uncollapseArrowAnimation {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotate(-90deg);\n            transform: translate(-50%, -50%) rotate(-90deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); } }\n@keyframes uncollapseArrowAnimation {\n  0% {\n    -webkit-transform: translate(-50%, -50%) rotate(-90deg);\n            transform: translate(-50%, -50%) rotate(-90deg); }\n  100% {\n    -webkit-transform: translate(-50%, -50%) rotate(0deg);\n            transform: translate(-50%, -50%) rotate(0deg); } }\nth.expandable-row, td.expandable-row {\n  overflow: hidden;\n  display: none;\n  box-shadow: inset 0px -3px 3px -3px rgba(0, 0, 0, 0.17), inset 0px 5px 5px -5px rgba(0, 0, 0, 0.17);\n  padding: 20px; }\n.theme-blue th.expandable-row, .theme-blue td.expandable-row {\n    background-color: #ebf1f6;\n    background: #ebf1f6; }\n.theme-orange th.expandable-row, .theme-orange td.expandable-row {\n    background-color: #f0e4db;\n    background: #f0e4db; }\n.theme-green th.expandable-row, .theme-green td.expandable-row {\n    background-color: #dfecd3;\n    background: #dfecd3; }\n.theme-purple th.expandable-row, .theme-purple td.expandable-row {\n    background-color: #e8e2ee;\n    background: #e8e2ee; }\n.theme-gray th.expandable-row, .theme-gray td.expandable-row {\n    background-color: #f2f2f2;\n    background: #f2f2f2; }\n.theme-silver th.expandable-row, .theme-silver td.expandable-row {\n    background-color: #f2f2f2;\n    background: linear-gradient(#e2e2e2, #f2f2f2); }\nth.expandable-row thead tr th, td.expandable-row thead tr th {\n    position: relative; }\n.theme-extra-sm th.expandable-row thead tr th, .theme-extra-sm td.expandable-row thead tr th {\n      border: 1px solid; }\n.theme-sm th.expandable-row thead tr th, .theme-sm td.expandable-row thead tr th {\n      border: 1px solid; }\n.theme-reg th.expandable-row thead tr th, .theme-reg td.expandable-row thead tr th {\n      border: 1px solid; }\n.theme-lg th.expandable-row thead tr th, .theme-lg td.expandable-row thead tr th {\n      border: 1px solid; }\n.theme-extra-lg th.expandable-row thead tr th, .theme-extra-lg td.expandable-row thead tr th {\n      border: 1px solid; }\n.theme-blue th.expandable-row thead tr th, .theme-blue td.expandable-row thead tr th {\n      border: 1px solid #3381a6; }\n.theme-orange th.expandable-row thead tr th, .theme-orange td.expandable-row thead tr th {\n      border: 1px solid #e08b41; }\n.theme-green th.expandable-row thead tr th, .theme-green td.expandable-row thead tr th {\n      border: 1px solid #689f38; }\n.theme-purple th.expandable-row thead tr th, .theme-purple td.expandable-row thead tr th {\n      border: 1px solid #bb76db; }\n.theme-gray th.expandable-row thead tr th, .theme-gray td.expandable-row thead tr th {\n      border: 1px solid #999999; }\n.theme-silver th.expandable-row thead tr th, .theme-silver td.expandable-row thead tr th {\n      border: 1px solid #999999; }\nth.expandable-row tbody tr td, td.expandable-row tbody tr td {\n    background-color: #ffffff; }\nth.expandable-row .table, td.expandable-row .table {\n    margin: 10px;\n    width: calc(100% - 20px); }\nth.expandable-row:not(.collapsed-row), td.expandable-row:not(.collapsed-row) {\n    display: block;\n    height: auto;\n    max-height: 600px;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation: uncollapseRowAnimation 0.5s;\n    animation: uncollapseRowAnimation 0.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\nth.expandable-row:not(.collapsed-row).initial-animation-prevented, td.expandable-row:not(.collapsed-row).initial-animation-prevented {\n      -webkit-animation-duration: 0ms;\n              animation-duration: 0ms; }\nth.expandable-row:not(.collapsed-row).wasOpened, td.expandable-row:not(.collapsed-row).wasOpened {\n      display: block;\n      -webkit-animation: uncollapseRowAnimation 0s;\n      animation: uncollapseRowAnimation 0s; }\nth.expandable-row.collapsed-row, td.expandable-row.collapsed-row {\n    display: none;\n    max-height: 0px;\n    overflow: hidden; }\nth.expandable-row.collapsed-row.initial-animation-prevented, td.expandable-row.collapsed-row.initial-animation-prevented {\n      -webkit-animation-duration: 0ms;\n              animation-duration: 0ms; }\nth.expandable-row.collapsed-row.wasOpened, td.expandable-row.collapsed-row.wasOpened {\n      display: block;\n      -webkit-animation-timing-function: ease-in-out;\n              animation-timing-function: ease-in-out;\n      -webkit-animation: collapseRowAnimation 0.25s;\n      animation: collapseRowAnimation 0.25s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n@-webkit-keyframes collapseRowAnimation {\n  0% {\n    max-height: 200px;\n    border-bottom-width: 1px;\n    border-top-width: 1px; }\n  100% {\n    max-height: 0px;\n    border-bottom-width: 0px;\n    border-top-width: 0px; } }\n@keyframes collapseRowAnimation {\n  0% {\n    max-height: 200px;\n    border-bottom-width: 1px;\n    border-top-width: 1px; }\n  100% {\n    max-height: 0px;\n    border-bottom-width: 0px;\n    border-top-width: 0px; } }\n@-webkit-keyframes uncollapseRowAnimation {\n  0% {\n    max-height: 0px;\n    border-bottom-width: 0px;\n    border-top-width: 0px; }\n  100% {\n    max-height: 200px;\n    border-bottom-width: 1px;\n    border-top-width: 1px; } }\n@keyframes uncollapseRowAnimation {\n  0% {\n    max-height: 0px;\n    border-bottom-width: 0px;\n    border-top-width: 0px; }\n  100% {\n    max-height: 200px;\n    border-bottom-width: 1px;\n    border-top-width: 1px; } }\n.tall-viewport.tablejs-infinite-scroll-viewport {\n  height: 450px;\n  border-bottom: 1px solid #dddddd; }\n.nested-viewport {\n  position: relative;\n  display: block; }\n.nested-viewport .cdk-virtual-scroll-content-wrapper {\n    padding: 0px !important; }\n.nested-viewport.tablejs-infinite-scroll-viewport {\n    max-height: 210px;\n    border-bottom: 1px solid #dddddd; }\n.cdk-virtual-scroll-spacer {\n  position: absolute !important;\n  box-sizing: border-box !important;\n  z-index: -1; }\n.drag-and-drop-ghost .sort-icon {\n  display: none; }\n::ng-deep .phone-filter-bg {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0); }\n::ng-deep .selected-filter-bg {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0); }\n.export-to-excel-overlay-bg {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.25); }\n.print-overlay-bg {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.25); }\n.cdk-overlay-container {\n  position: fixed;\n  left: 0px;\n  top: 0px; }\n.cdk-global-overlay-wrapper {\n  position: fixed;\n  left: 0px;\n  top: 0px; }\n.cdk-overlay-connected-position-bounding-box {\n  position: fixed; }\n.custom-tooltip {\n  /* your own custom styles here */\n  /* e.g. */\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 14px;\n  margin-top: 8px !important;\n  margin-right: 10px !important;\n  overflow: visible !important;\n  background-color: rgba(0, 0, 0, 0.6); }\n.custom-tooltip:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: 8px;\n    right: -8px;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    border-left: 8px solid rgba(0, 0, 0, 0.6); }\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 17px; }\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 13px;\n  width: 13px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: .4s; }\n.theme-blue input:checked + .slider {\n  background-color: #136186;\n  background: #136186; }\n.theme-orange input:checked + .slider {\n  background-color: #c06b21;\n  background: #c06b21; }\n.theme-green input:checked + .slider {\n  background-color: #33691e;\n  background: #33691e; }\n.theme-purple input:checked + .slider {\n  background-color: #6f4085;\n  background: #6f4085; }\n.theme-gray input:checked + .slider {\n  background-color: #666666;\n  background: #666666; }\n.theme-silver input:checked + .slider {\n  background-color: #666666;\n  background: linear-gradient(#999999, #888888); }\n.theme-extra-sm input:focus + .slider {\n  box-shadow: 0 0 1px; }\n.theme-sm input:focus + .slider {\n  box-shadow: 0 0 1px; }\n.theme-reg input:focus + .slider {\n  box-shadow: 0 0 1px; }\n.theme-lg input:focus + .slider {\n  box-shadow: 0 0 1px; }\n.theme-extra-lg input:focus + .slider {\n  box-shadow: 0 0 1px; }\n.theme-blue input:focus + .slider {\n  box-shadow: 0 0 1px #136186; }\n.theme-orange input:focus + .slider {\n  box-shadow: 0 0 1px #c06b21; }\n.theme-green input:focus + .slider {\n  box-shadow: 0 0 1px #33691e; }\n.theme-purple input:focus + .slider {\n  box-shadow: 0 0 1px #6f4085; }\n.theme-gray input:focus + .slider {\n  box-shadow: 0 0 1px #666666; }\n.theme-silver input:focus + .slider {\n  box-shadow: 0 0 1px #666666; }\ninput:checked + .slider:before {\n  -webkit-transform: translateX(13px);\n  transform: translateX(13px); }\n/* Rounded sliders */\n.slider.round {\n  border-radius: 17px; }\n.slider.round:before {\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dyaWQtZXhhbXBsZS9ncmlkLWV4YW1wbGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWdvdXdlbi9EZXNrdG9wL1RyYW5zdW5pb24vdGFibGVqcy1kZW1vL3NyYy9hcHAvY29tcG9uZW50cy9ncmlkLWV4YW1wbGUvZ3JpZC1leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBK0xFOztJQzVMRTtBQ0FKO0VBQ0MsZUFBZTtFQUNaLG1CQUFtQixFQUFBO0FGK0xwQjtFRTFMRCxjRkE2QixFQUFBO0FBMEw1QjtFRTFMRCxjRlcrQixFQUFBO0FBK0s5QjtFRTFMRCxjRnNCOEIsRUFBQTtBQW9LN0I7RUUxTEQsY0ZpQytCLEVBQUE7QUF5SjlCO0VFMUxELGNGNEM2QixFQUFBO0FBOEk1QjtFRTFMRCxjRnVEK0IsRUFBQTtBRXBEakM7RUFDQyxVQUFVLEVBQUE7QUFHWDtFQUNDLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7QUFIbkI7SUFNRSxrQkFBa0IsRUFBQTtBQU5wQjtNQVFHLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFJdEIsd0JBQXdCO01BQ3hCLG1CQUFtQjtNQUNuQix5QkFBeUIsRUFBQTtBRm9LekI7UUV4S0Msa0JGc0RvQixFQUFBO0FBa0hyQjtRRXhLQyxrQkY2RG9CLEVBQUE7QUEyR3JCO1FFeEtDLGtCRnFFb0IsRUFBQTtBQW1HckI7UUV4S0MsZUY0RWlCLEVBQUE7QUE0RmxCO1FFeEtDLGlCRm1GbUIsRUFBQTtBRTlGdkI7UUFrQkksa0JBQWtCO1FBUWxCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsY0FBYyxFQUFBO0FGOElmO1VFL0pFLHFCQUFxQjtVQUNyQixzQkFBc0I7VUFDdEIsdUJBQXVCLEVBQUE7QUY2SnpCO1VFL0pFLHFCQUFxQjtVQUNyQixzQkFBc0I7VUFDdEIsdUJBQXVCLEVBQUE7QUY2SnpCO1VFL0pFLHFCQUFxQjtVQUNyQixzQkFBc0I7VUFDdEIsdUJBQXVCLEVBQUE7QUY2SnpCO1VFL0pFLHFCQUFxQjtVQUNyQixzQkFBc0I7VUFDdEIsdUJBQXVCLEVBQUE7QUY2SnpCO1VFL0pFLHFCQUFxQjtVQUNyQixzQkFBc0I7VUFDdEIsdUJBQXVCLEVBQUE7QUY2SnpCO1VFL0pFLDZCRjdCdUI7VUU4QnZCLDhCRjlCdUI7VUUrQnZCLCtCRi9CdUI7VUVnQ3ZCLHlCRmxDd0I7VUVtQ3hCLG1CRnhDa0IsRUFBQTtBQW1NcEI7VUUvSkUsNkJGbEJ5QjtVRW1CekIsOEJGbkJ5QjtVRW9CekIsK0JGcEJ5QjtVRXFCekIseUJGdkIwQjtVRXdCMUIsbUJGN0JvQixFQUFBO0FBd0x0QjtVRS9KRSw2QkZQd0I7VUVReEIsOEJGUndCO1VFU3hCLCtCRlR3QjtVRVV4Qix5QkZaeUI7VUVhekIsbUJGbEJtQixFQUFBO0FBNktyQjtVRS9KRSw2QkZJeUI7VUVIekIsOEJGR3lCO1VFRnpCLCtCRkV5QjtVRUR6Qix5QkZEMEI7VUVFMUIsbUJGUG9CLEVBQUE7QUFrS3RCO1VFL0pFLDZCRmV1QjtVRWR2Qiw4QkZjdUI7VUVidkIsK0JGYXVCO1VFWnZCLHlCRlV3QjtVRVR4QixtQkZJa0IsRUFBQTtBQXVKcEI7VUUvSkUsNkJGMEJ5QjtVRXpCekIsOEJGeUJ5QjtVRXhCekIsK0JGd0J5QjtVRXZCekIseUJGcUIwQjtVRXBCMUIsNkNGZTZDLEVBQUE7QUE0SS9DO1VFNUlFLGtCRjBCbUIsRUFBQTtBQWtIckI7VUU1SUUsa0JGaUNtQixFQUFBO0FBMkdyQjtVRTVJRSxrQkZ5Q21CLEVBQUE7QUFtR3JCO1VFNUlFLGVGZ0RnQixFQUFBO0FBNEZsQjtVRTVJRSxpQkZ1RGtCLEVBQUE7QUU5RnZCO1VBNENLLFdBQVc7VUFDWCxZQUFZO1VBS1osZ0JBQWdCO1VBQ2hCLG1CQUFtQjtVQUNuQix1QkFBdUI7VUFDdkIsc0JBQXNCO1VBQ3RCLGNBQWMsRUFBQTtBRjZIaEI7WUVwSUcsZUZpQmdCO1lFaEJoQixrQkZpQmtCLEVBQUE7QUFrSHJCO1lFcElHLGVGd0JnQjtZRXZCaEIsa0JGd0JrQixFQUFBO0FBMkdyQjtZRXBJRyxnQkZnQ2lCO1lFL0JqQixrQkZnQ2tCLEVBQUE7QUFtR3JCO1lFcElHLGFGdUNjO1lFdENkLGVGdUNlLEVBQUE7QUE0RmxCO1lFcElHLGdCRjhDaUI7WUU3Q2pCLGlCRjhDaUIsRUFBQTtBRTlGdkI7SUE2REUsa0JBQWtCLEVBQUE7QUE3RHBCO01BK0RHLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFJdEIsd0JBQXdCO01BQ3hCLG1CQUFtQjtNQUNuQix5QkFBeUIsRUFBQTtBRjZHekI7UUVqSEMsa0JGRG9CLEVBQUE7QUFrSHJCO1FFakhDLGtCRk1vQixFQUFBO0FBMkdyQjtRRWpIQyxrQkZjb0IsRUFBQTtBQW1HckI7UUVqSEMsZUZxQmlCLEVBQUE7QUE0RmxCO1FFakhDLGlCRjRCbUIsRUFBQTtBRTlGdkI7UUF5RUksa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixXQUFXO1FBQ1gsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsc0JBQXNCLEVBQUE7QUY4RnZCO1VFNUZFLGtCRnRCbUIsRUFBQTtBQWtIckI7VUU1RkUsa0JGZm1CLEVBQUE7QUEyR3JCO1VFNUZFLGtCRlBtQixFQUFBO0FBbUdyQjtVRTVGRSxlRkFnQixFQUFBO0FBNEZsQjtVRTVGRSxpQkZPa0IsRUFBQTtBRTlGdkI7VUEyRkssa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxZQUFZO1VBS1osZ0JBQWdCO1VBQ2hCLG1CQUFtQjtVQUNuQix1QkFBdUI7VUFDdkIsc0JBQXNCLEVBQUE7QUY4RXhCO1lFcEZHLGVGL0JnQjtZRWdDaEIsa0JGL0JrQixFQUFBO0FBa0hyQjtZRXBGRyxlRnhCZ0I7WUV5QmhCLGtCRnhCa0IsRUFBQTtBQTJHckI7WUVwRkcsZ0JGaEJpQjtZRWlCakIsa0JGaEJrQixFQUFBO0FBbUdyQjtZRXBGRyxhRlRjO1lFVWQsZUZUZSxFQUFBO0FBNEZsQjtZRXBGRyxnQkZGaUI7WUVHakIsaUJGRmlCLEVBQUE7QUU5RnZCO1lBd0dNLGtCQUFrQjtZQUNsQixxQkFBcUI7WUFDckIsZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxZQUFZO1lBQ1osYUFBYTtZQUNiLFdBQVc7WUFDWCxlQUFlLEVBQUE7QUZvRWxCO2NFakVLLGNGMUgwQixFQUFBO0FBMkwvQjtjRWpFSyxjRi9HNkIsRUFBQTtBQWdMbEM7Y0VqRUssY0ZwRzRCLEVBQUE7QUFxS2pDO2NFakVLLGNGekY0QixFQUFBO0FBMEpqQztjRWpFSyxjRjlFMEIsRUFBQTtBQStJL0I7Y0VqRUssY0ZuRTRCLEVBQUE7QUUvQ3BDO1lBdUhNLGtCQUFrQjtZQUNsQixTQUFTO1lBQ1QsUUFBUTtZQUNSLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLFVBQVU7WUFDVixZQUFZO1lBQ1osYUFBYTtZQUNiLFdBQVc7WUFDWCxlQUFlLEVBQUE7QUZrRGxCO2NFL0NLLGNGN0lvQixFQUFBO0FBNEx6QjtjRS9DSyxjRmxJc0IsRUFBQTtBQWlMM0I7Y0UvQ0ssY0Z2SHFCLEVBQUE7QUFzSzFCO2NFL0NLLGNGNUdzQixFQUFBO0FBMkozQjtjRS9DSyxjRmpHb0IsRUFBQTtBQWdKekI7Y0UvQ0ssY0Z0RnNCLEVBQUE7QUU5QzlCO1VBMklLLG9CQUFvQjtVQUNwQixtQkFBbUI7VUFDbkIsU0FBUztVQUNULFdBQVcsRUFBQTtBRnFDYjtZRWpDSSx5QkYxSjJCO1lFMkozQixtQkZoS3FCLEVBQUE7QUFnTXpCO1lFakNJLHlCRi9JOEI7WUVnSjlCLG1CRnJKd0IsRUFBQTtBQXFMNUI7WUVqQ0kseUJGcEk2QjtZRXFJN0IsbUJGMUl1QixFQUFBO0FBMEszQjtZRWpDSSx5QkZ6SDZCO1lFMEg3QixtQkYvSHVCLEVBQUE7QUErSjNCO1lFakNJLHlCRjlHMkI7WUUrRzNCLG1CRnBIcUIsRUFBQTtBQW9KekI7WUVqQ0kseUJGbkc2QjtZRW9HN0IsNkNGekdpRCxFQUFBO0FFMUN4RDtZQXdKTSxZQUFZO1lBQ1osV0FBVztZQUNYLGdCQUFnQixFQUFBO0FBMUp0QjtZQThKTSxrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLGdCQUFnQixFQUFBO0FBaEt0QjtjQW1LTyxrQkFBa0IsRUFBQTtBQW5LekI7Y0FzS08sa0JBQWtCLEVBQUE7QUF0S3pCO1FBNktJLHlCQUF5QixFQUFBO0FGTTFCO1VFQUsseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBO0FGRHhCO1VFQUsseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBO0FGRHhCO1VFQUsseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBO0FGRHhCO1VFQUsseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBO0FGRHhCO1VFQUsseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBO0FGRHhCO1VFQUsseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBO0FGRHhCO1VFQUsseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBO0FGRHhCO1VFQUsseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBO0FGRHhCO1VFQUsseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBO0FGRHhCO1VFQUsseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBO0FGRHhCO1VFQUsseUJBQXlCO1VBQ3pCLG1CQUFtQixFQUFBO0FBVzNCO0VBQ0MsNkJBQ0QsRUFBQTtBQU1BO0VBQ0Msa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsYUFBYTtFQUliLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTtBRmhDcEI7SUUwQkQsd0JBQXdCLEVBQUE7QUYxQnZCO0lFMEJELHdCQUF3QixFQUFBO0FGMUJ2QjtJRTBCRCx3QkFBd0IsRUFBQTtBRjFCdkI7SUUwQkQsd0JBQXdCLEVBQUE7QUYxQnZCO0lFMEJELHdCQUF3QixFQUFBO0FGMUJ2QjtJRTBCRCxnQ0Z4TjJCLEVBQUE7QUE4TDFCO0lFMEJELGdDRjdNNkIsRUFBQTtBQW1MNUI7SUUwQkQsZ0NGbE00QixFQUFBO0FBd0szQjtJRTBCRCxnQ0Z2TDZCLEVBQUE7QUE2SjVCO0lFMEJELGdDRjVLMkIsRUFBQTtBQWtKMUI7SUUwQkQsZ0NGaks2QixFQUFBO0FFMkovQjtJQWVFLG1CQUFrQixFQUFBO0FBZnBCO0lBa0JFLGtCQUFrQixFQUFBO0FBbEJwQjtJQXNCRyxVQUFVO0lBQ1YsV0FBVyxFQUFBO0FBS2Q7RUFDQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDZCxvQkFBb0IsRUFBQTtBQUV4QjtFQUNDLGtCQUFrQixFQUFBO0FBRW5CO0VBQ0MsbUJBQW1CLEVBQUE7QUFFcEI7RUFDQyxtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7QUYvRG5CO0lFbUVBLGtCRnJMcUIsRUFBQTtBQWtIckI7SUVtRUEsa0JGOUtxQixFQUFBO0FBMkdyQjtJRW1FQSxrQkZ0S3FCLEVBQUE7QUFtR3JCO0lFbUVBLGVGL0prQixFQUFBO0FBNEZsQjtJRW1FQSxpQkZ4Sm9CLEVBQUE7QUU0SnZCO0VBRUUsYUFBYSxFQUFBO0FBR2Y7RUFDQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtBQUdwQjtFQUNDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FGMUZkO0lFNEZELGlCQUFpQixFQUFBO0FGNUZoQjtJRTRGRCxpQkFBaUIsRUFBQTtBRjVGaEI7SUU0RkQsaUJBQWlCLEVBQUE7QUY1RmhCO0lFNEZELGlCQUFpQixFQUFBO0FGNUZoQjtJRTRGRCxpQkFBaUIsRUFBQTtBRjVGaEI7SUU0RkQseUJGMVIyQixFQUFBO0FBOEwxQjtJRTRGRCx5QkYvUTZCLEVBQUE7QUFtTDVCO0lFNEZELHlCRnBRNEIsRUFBQTtBQXdLM0I7SUU0RkQseUJGelA2QixFQUFBO0FBNko1QjtJRTRGRCx5QkY5TzJCLEVBQUE7QUFrSjFCO0lFNEZELHlCRm5PNkIsRUFBQTtBRXNPL0I7RUFDQyxVQUFVO0VBQ1Asa0JBQWtCLEVBQUE7QUFFdEI7RUFDQyxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFGbkI7SUFLRSxrQkFBa0IsRUFBQTtBQUlwQjtFQUNDLGtCQUFrQixFQUFBO0FBRW5CO0VBQ0MsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixvQ0FBb0MsRUFBQTtBQUdyQztFQUNDLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7QUFHYjtFQUNDLFlBQVk7RUFDWixXQUFXLEVBQUE7QUFGWjtJQU1HLFlBQVksRUFBQTtBQU5mO0lBU0csWUFBWSxFQUFBO0FBVGY7SUFZRyxZQUFZLEVBQUE7QUFaZjtJQWVHLFlBQVksRUFBQTtBQWZmO0lBa0JHLFlBQVksRUFBQTtBQWxCZjtJQXFCRyxZQUFZLEVBQUE7QUFyQmY7SUF3QkcsWUFBWSxFQUFBO0FBS2Y7RUFDQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTtBQUhiO0lBTUUsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsU0FBUztJQUNULHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsY0FBYyxFQUFBO0FBWGhCO01BY0csU0FBUyxFQUFBO0FBZFo7SUFtQkUsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtBQXJCcEI7SUF3QkUsK0JBQStCO0lBQy9CLFdBQVcsRUFBQTtBQXpCYjtNQTRCRyxzQkFBc0I7TUFDdEIsV0FBVztNQUNYLFVBQVUsRUFBQTtBQTlCYjtJQWtDRSxZQUFXLEVBQUE7QUFsQ2I7SUFxQ0UsWUFBVyxFQUFBO0FBckNiO0lBd0NFLFlBQVcsRUFBQTtBQXhDYjtJQTJDRSxZQUFXLEVBQUE7QUEzQ2I7TUE2Q0csZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFBO0FBOUMxQjtJQWtERSxZQUFXLEVBQUE7QUFsRGI7SUFxREUsWUFBVyxFQUFBO0FBckRiO0lBd0RFLFlBQVcsRUFBQTtBQXhEYjtJQTJERSxZQUFXLEVBQUE7QUEzRGI7SUE4REUsWUFBVyxFQUFBO0FBOURiO0lBaUVFLFlBQVcsRUFBQTtBQWpFYjtJQXFFRSxzQkFBc0IsRUFBQTtBQXJFeEI7SUF3RUUsc0JBQXNCLEVBQUE7QUF4RXhCO0lBMkVFLHNCQUFzQixFQUFBO0FBM0V4QjtJQThFRSxzQkFBc0IsRUFBQTtBQTlFeEI7SUFpRkUsc0JBQXNCLEVBQUE7QUFqRnhCO0lBb0ZFLHNCQUFzQixFQUFBO0FBcEZ4QjtJQXVGRSxzQkFBc0IsRUFBQTtBQXZGeEI7SUE4RkUsWUFBWSxFQUFBO0FBOUZkO0lBa0dHLFVBQVUsRUFBQTtBQUliO0VBQ0Msa0JBQWtCLEVBQUE7QUFHbkI7RUFDQyxrQkFBa0IsRUFBQTtBQURuQjtJQUlFLHFDQUFxQyxFQUFBO0FBSnZDO01BTUcseUJBQXlCLEVBQUE7QUFONUI7SUFVRSxzQkFBc0IsRUFBQTtBQVZ4QjtNQVlHLHlCQUF5QixFQUFBO0FBSzVCO0VBRUUseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFNckIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTtBRmxTWDtJRXdSQSx1QkZ2WW9DO0lFd1lwQyxtQkZ6WThCO0lFMFk5QixzQkYxWThCLEVBQUE7QUFnSDlCO0lFd1JBLHVCRi9Yb0M7SUVnWXBDLG9CRmpZK0I7SUVrWS9CLHVCRmxZK0IsRUFBQTtBQXdHL0I7SUV3UkEsd0JGeFhxQztJRXlYckMsbUJGMVg4QjtJRTJYOUIsc0JGM1g4QixFQUFBO0FBaUc5QjtJRXdSQSx3QkZqWHFDO0lFa1hyQyxvQkZuWCtCO0lFb1gvQix1QkZwWCtCLEVBQUE7QUEwRi9CO0lFd1JBLHdCRjFXcUM7SUUyV3JDLG1CRjVXOEI7SUU2VzlCLHNCRjdXOEIsRUFBQTtBRXFXakM7SUFtQkcsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFNBQVM7SUFDVCw0QkFBNEIsRUFBQTtBQXhCL0I7TUEwQkksa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRO01BQ1Isc0JBQXNCO01BQ3RCLDBDQUEwQztNQUMxQyxlQUFlO01BQ2YsaUJBQWlCO01BS2pCLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7QUZ4VGI7UUVvVEUsb0JGcmFrQztRRXNhbEMsdUJGdGFrQyxFQUFBO0FBaUhwQztRRW9URSxzQkY3Wm9DO1FFOFpwQyx5QkY5Wm9DLEVBQUE7QUF5R3RDO1FFb1RFLG9CRnRaa0M7UUV1WmxDLHVCRnZaa0MsRUFBQTtBQWtHcEM7UUVvVEUsc0JGL1lvQztRRWdacEMseUJGaFpvQyxFQUFBO0FBMkZ0QztRRW9URSxvQkZ4WWtDO1FFeVlsQyx1QkZ6WWtDLEVBQUE7QUVzV3ZDO0VBMkNFLGlCQUFpQixFQUFBO0FBM0NuQjtJQThDRyw2QkFBNkI7SUFDN0IsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVUsRUFBQTtBQW5EYjtNQXNESSw2QkFBNkI7TUFDN0Isb0JBQW9CO01BQ3BCLFdBQVc7TUFDWCxjQUFjO01BQ2Qsa0NBQWtDO01BQ2xDLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7QUE3RHJCO01Ba0VLLGdCQUFlLEVBQUE7QUFsRXBCO01BdUVLLGdCQUFlLEVBQUE7QUF2RXBCO01BNkVLLFdBQVcsRUFBQTtBQTdFaEI7TUFpRkksY0FBYyxFQUFBO0FBakZsQjtRQW9GSyxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGlCQUFpQixFQUFBO0FBekZ0QjtRQThGTSxXQUFXLEVBQUE7QUE5RmpCO1FBa0dPLFdBQVcsRUFBQTtBQWxHbEI7RUEyR0csa0JBQWtCO0VBQ2xCLDRCQUE0QixFQUFBO0FBNUcvQjtFQStHRyw0QkFBNEIsRUFBQTtBQS9HL0I7RUFrSEcsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYixXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVLEVBQUE7QUExSGI7RUErSEksa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixpREFBaUQ7RUFDakQseUNBQXlDO0VBRXpDLG1EQUFnRCxFQUFBO0FBM0lwRDtFQWlKSyxhQUFhLEVBQUE7QUFqSmxCO0VBdUpJLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFFakIsaURBQWlEO0VBQ2pELHlDQUF5QztFQUV6QyxvREFBaUQsRUFBQTtBQW5LckQ7RUF1S0ssYUFBYSxFQUFBO0FBSWhCO0VBQ0M7SUFBSyxnQkFBZ0IsRUFBQTtFQUNyQjtJQUFPLGlCQUFpQixFQUFBLEVBQUE7QUFFekI7RUFDQztJQUFLLGdCQUFnQixFQUFBO0VBQ3JCO0lBQU8saUJBQWlCLEVBQUEsRUFBQTtBQWpMM0I7RUFzTEUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVyxFQUFBO0FBNUxiO0lBK0xHLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFoTWY7SUFvTUcsV0FBVztJQUNYLFdBQVcsRUFBQTtBQXJNZDtNQXdNSSxrREFBa0Q7TUFDbEQsc0JBQXNCLEVBQUE7QUYzZHZCO1FFNmRFLGtCRi9rQm1CLEVBQUE7QUFrSHJCO1FFNmRFLGtCRnhrQm1CLEVBQUE7QUEyR3JCO1FFNmRFLGtCRmhrQm1CLEVBQUE7QUFtR3JCO1FFNmRFLGVGempCZ0IsRUFBQTtBQTRGbEI7UUU2ZEUsaUJGbGpCa0IsRUFBQTtBRXVXdkI7UUE4TUsseUJBQXlCLEVBQUE7QUE5TTlCO0VBcU5FLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGVBQWUsRUFBQTtBRjFlZDtJRTRlQSxjRjFxQjBCLEVBQUE7QUE4TDFCO0lFNGVBLGNGL3BCNEIsRUFBQTtBQW1MNUI7SUU0ZUEsY0ZwcEIyQixFQUFBO0FBd0szQjtJRTRlQSxjRnpvQjRCLEVBQUE7QUE2SjVCO0lFNGVBLGNGOW5CMEIsRUFBQTtBQWtKMUI7SUU0ZUEsY0ZubkI0QixFQUFBO0FFeVovQjtJQThORyxxREFBNkM7WUFBN0MsNkNBQTZDO0lBQzdDLGlEQUFpRDtJQUNqRCx5Q0FBeUMsRUFBQTtBQWhPNUM7SUFtT0csK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0FBbk8xQjtJQXNPRyx1REFBK0M7WUFBL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQyx1Q0FBdUMsRUFBQTtBQUl6QztFQUNDO0lBQUsscURBQTZDO1lBQTdDLDZDQUE2QyxFQUFBO0VBQ2xEO0lBQU8sdURBQStDO1lBQS9DLCtDQUErQyxFQUFBLEVBQUE7QUFFdkQ7RUFDQztJQUFLLHFEQUE2QztZQUE3Qyw2Q0FBNkMsRUFBQTtFQUNsRDtJQUFPLHVEQUErQztZQUEvQywrQ0FBK0MsRUFBQSxFQUFBO0FBR3ZEO0VBQ0M7SUFBSyx1REFBK0M7WUFBL0MsK0NBQStDLEVBQUE7RUFDcEQ7SUFBTyxxREFBNkM7WUFBN0MsNkNBQTZDLEVBQUEsRUFBQTtBQUVyRDtFQUNDO0lBQUssdURBQStDO1lBQS9DLCtDQUErQyxFQUFBO0VBQ3BEO0lBQU8scURBQTZDO1lBQTdDLDZDQUE2QyxFQUFBLEVBQUE7QUEzUHREO0VBK1BFLGdCQUFnQjtFQUNoQixhQUFhO0VBT2IsbUdBQTZGO0VBQzdGLGFBQWEsRUFBQTtBRjFoQlo7SUVvaEJBLHlCRi9zQitCO0lFZ3RCL0IsbUJGcnRCeUIsRUFBQTtBQWdNekI7SUVvaEJBLHlCRnBzQmtDO0lFcXNCbEMsbUJGMXNCNEIsRUFBQTtBQXFMNUI7SUVvaEJBLHlCRnpyQmlDO0lFMHJCakMsbUJGL3JCMkIsRUFBQTtBQTBLM0I7SUVvaEJBLHlCRjlxQmlDO0lFK3FCakMsbUJGcHJCMkIsRUFBQTtBQStKM0I7SUVvaEJBLHlCRm5xQitCO0lFb3FCL0IsbUJGenFCeUIsRUFBQTtBQW9KekI7SUVvaEJBLHlCRnhwQmlDO0lFeXBCakMsNkNGOXBCcUQsRUFBQTtBRTJaeEQ7SUE2UUssa0JBQWtCLEVBQUE7QUYvaEJwQjtNRWlpQkcsaUJBQWlCLEVBQUE7QUZqaUJwQjtNRWlpQkcsaUJBQWlCLEVBQUE7QUZqaUJwQjtNRWlpQkcsaUJBQWlCLEVBQUE7QUZqaUJwQjtNRWlpQkcsaUJBQWlCLEVBQUE7QUZqaUJwQjtNRWlpQkcsaUJBQWlCLEVBQUE7QUZqaUJwQjtNRWlpQkcseUJGN3RCc0IsRUFBQTtBQTRMekI7TUVpaUJHLHlCRmx0QndCLEVBQUE7QUFpTDNCO01FaWlCRyx5QkZ2c0J1QixFQUFBO0FBc0sxQjtNRWlpQkcseUJGNXJCd0IsRUFBQTtBQTJKM0I7TUVpaUJHLHlCRmpyQnNCLEVBQUE7QUFnSnpCO01FaWlCRyx5QkZ0cUJ3QixFQUFBO0FFdVo5QjtJQXVSSyx5QkFBeUIsRUFBQTtBQXZSOUI7SUE2UkcsWUFBWTtJQUNaLHdCQUF3QixFQUFBO0FBOVIzQjtJQWtTRyxjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLDhDQUE4QztJQUM5QyxzQ0FBc0M7SUFDdEMscUNBQTZCO1lBQTdCLDZCQUE2QixFQUFBO0FBeFNoQztNQTJTSSwrQkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7QUEzUzNCO01BOFNJLGNBQWM7TUFDZCw0Q0FBNEM7TUFDNUMsb0NBQW9DLEVBQUE7QUFoVHhDO0lBc1RHLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7QUF4VG5CO01BNFRJLCtCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTtBQTVUM0I7TUFnVUksY0FBYztNQUNkLDhDQUFzQztjQUF0QyxzQ0FBc0M7TUFDdEMsNkNBQTZDO01BQzdDLHFDQUFxQztNQUNyQyxxQ0FBNkI7Y0FBN0IsNkJBQTZCLEVBQUE7QUFLaEM7RUFDQztJQUNDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIscUJBQXFCLEVBQUE7RUFFdEI7SUFDQyxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQixFQUFBLEVBQUE7QUFUdkI7RUFDQztJQUNDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIscUJBQXFCLEVBQUE7RUFFdEI7SUFDQyxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQixFQUFBLEVBQUE7QUFJdkI7RUFDQztJQUNDLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIscUJBQXFCLEVBQUE7RUFFdEI7SUFDQyxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLHFCQUFxQixFQUFBLEVBQUE7QUFHdkI7RUFDQztJQUNDLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIscUJBQXFCLEVBQUE7RUFFdEI7SUFDQyxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLHFCQUFxQixFQUFBLEVBQUE7QUFNeEI7RUFFRSxhQUFhO0VBQ2IsZ0NBQTJDLEVBQUE7QUFLN0M7RUFDQyxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0FBRmY7SUFLRSx1QkFBdUIsRUFBQTtBQUx6QjtJQVFFLGlCQUFpQjtJQUNqQixnQ0FBMkMsRUFBQTtBQUk3QztFQUNDLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsV0FBVyxFQUFBO0FBSVo7RUFFRSxhQUFhLEVBQUE7QUFLZjtFQUNDLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQW9DLEVBQUE7QUFHckM7RUFDQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFvQyxFQUFBO0FBR3JDO0VBQ0MsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUMsRUFBQTtBQUd0QztFQUNDLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDLEVBQUE7QUFHdEM7RUFDQyxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVEsRUFBQTtBQUVUO0VBQ0MsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRLEVBQUE7QUFFVDtFQUNDLGVBQWUsRUFBQTtBQUVoQjtFQUNDLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsb0NBQWlDLEVBQUE7QUFSbEM7SUFVRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsb0NBQW9DO0lBRXBDLHlDQUFzQyxFQUFBO0FBTXhDLDJDQUFBO0FBQ0E7RUFDQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFHWCwrQkFBQTtBQUNBO0VBQ0QsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTLEVBQUE7QUFHUixlQUFBO0FBQ0E7RUFDRCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFFdEIsZUFBZSxFQUFBO0FBR2Q7RUFDRCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFFdkIsZUFBZSxFQUFBO0FGcnhCYjtFRTB4QkQseUJGdjlCMEI7RUV3OUIxQixtQkY3OUJvQixFQUFBO0FBa01uQjtFRTB4QkQseUJGNThCNEI7RUU2OEI1QixtQkZsOUJzQixFQUFBO0FBdUxyQjtFRTB4QkQseUJGajhCMkI7RUVrOEIzQixtQkZ2OEJxQixFQUFBO0FBNEtwQjtFRTB4QkQseUJGdDdCNEI7RUV1N0I1QixtQkY1N0JzQixFQUFBO0FBaUtyQjtFRTB4QkQseUJGMzZCMEI7RUU0NkIxQixtQkZqN0JvQixFQUFBO0FBc0puQjtFRTB4QkQseUJGaDZCNEI7RUVpNkI1Qiw2Q0Z0NkIrQyxFQUFBO0FBMkk5QztFRWl5QkQsbUJBQW1CLEVBQUE7QUZqeUJsQjtFRWl5QkQsbUJBQW1CLEVBQUE7QUZqeUJsQjtFRWl5QkQsbUJBQW1CLEVBQUE7QUZqeUJsQjtFRWl5QkQsbUJBQW1CLEVBQUE7QUZqeUJsQjtFRWl5QkQsbUJBQW1CLEVBQUE7QUZqeUJsQjtFRWl5QkQsMkJGOTlCMEIsRUFBQTtBQTZMekI7RUVpeUJELDJCRm45QjRCLEVBQUE7QUFrTDNCO0VFaXlCRCwyQkZ4OEIyQixFQUFBO0FBdUsxQjtFRWl5QkQsMkJGNzdCNEIsRUFBQTtBQTRKM0I7RUVpeUJELDJCRmw3QjBCLEVBQUE7QUFpSnpCO0VFaXlCRCwyQkZ2NkI0QixFQUFBO0FFMjZCNUI7RUFDRCxtQ0FBbUM7RUFFbkMsMkJBQTJCLEVBQUE7QUFHMUIsb0JBQUE7QUFDQTtFQUNELG1CQUFtQixFQUFBO0FBR2xCO0VBQ0Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyaWQtZXhhbXBsZS9ncmlkLWV4YW1wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4kb3Blbi1yZWctYmx1ZTogIzI0NzI5NztcbiRvcGVuLWRrLWJsdWU6ICMxMzYxODY7XG4kb3Blbi1sdC1ibHVlOiAjMzM4MWE2O1xuJG9wZW4tdWx0cmEtbHQtYmx1ZTogI2ViZjFmNjtcbiRvcGVuLWVycm9yLWJsdWU6ICNmODEzMTM7XG4kb3Blbi1yZWctYmx1ZS1zb2xpZDogIzI0NzI5NztcbiRvcGVuLWRrLWJsdWUtc29saWQ6ICMxMzYxODY7XG4kb3Blbi1sdC1ibHVlLXNvbGlkOiAjMzM4MWE2O1xuJG9wZW4tdWx0cmEtbHQtYmx1ZS1zb2xpZDogI2ViZjFmNjtcbiRvcGVuLWVycm9yLWJsdWUtc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZy1vcmFuZ2U6ICNkMTdjMzI7XG4kb3Blbi1kay1vcmFuZ2U6ICNjMDZiMjE7XG4kb3Blbi1sdC1vcmFuZ2U6ICNlMDhiNDE7XG4kb3Blbi11bHRyYS1sdC1vcmFuZ2U6ICAjZjBlNGRiOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3Itb3JhbmdlOiAjZjgxMzEzO1xuJG9wZW4tcmVnLW9yYW5nZS1zb2xpZDogI2QxN2MzMjtcbiRvcGVuLWRrLW9yYW5nZS1zb2xpZDogI2MwNmIyMTtcbiRvcGVuLWx0LW9yYW5nZS1zb2xpZDogI2UwOGI0MTtcbiRvcGVuLXVsdHJhLWx0LW9yYW5nZS1zb2xpZDogICNmMGU0ZGI7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1vcmFuZ2Utc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZy1ncmVlbjogIzU1OGIyZjtcbiRvcGVuLWRrLWdyZWVuOiAjMzM2OTFlO1xuJG9wZW4tbHQtZ3JlZW46ICM2ODlmMzg7XG4kb3Blbi11bHRyYS1sdC1ncmVlbjogICNkZmVjZDM7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1ncmVlbjogI2Y4MTMxMztcbiRvcGVuLXJlZy1ncmVlbi1zb2xpZDogIzU1OGIyZjtcbiRvcGVuLWRrLWdyZWVuLXNvbGlkOiAjMzM2OTFlO1xuJG9wZW4tbHQtZ3JlZW4tc29saWQ6ICM2ODlmMzg7XG4kb3Blbi11bHRyYS1sdC1ncmVlbi1zb2xpZDogICNkZmVjZDM7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1ncmVlbi1zb2xpZDogI2Y4MTMxMztcblxuJG9wZW4tcmVnLXB1cnBsZTogIzhiNTBhNztcbiRvcGVuLWRrLXB1cnBsZTogIzZmNDA4NTtcbiRvcGVuLWx0LXB1cnBsZTogI2JiNzZkYjtcbiRvcGVuLXVsdHJhLWx0LXB1cnBsZTogI2U4ZTJlZTsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLXB1cnBsZTogI2Y4MTMxMztcbiRvcGVuLXJlZy1wdXJwbGUtc29saWQ6ICM4YjUwYTc7XG4kb3Blbi1kay1wdXJwbGUtc29saWQ6ICM2ZjQwODU7XG4kb3Blbi1sdC1wdXJwbGUtc29saWQ6ICNiYjc2ZGI7XG4kb3Blbi11bHRyYS1sdC1wdXJwbGUtc29saWQ6ICNlOGUyZWU7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1wdXJwbGUtc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZy1ncmF5OiAjODg4ODg4O1xuJG9wZW4tZGstZ3JheTogIzY2NjY2NjtcbiRvcGVuLWx0LWdyYXk6ICM5OTk5OTk7XG4kb3Blbi11bHRyYS1sdC1ncmF5OiAjZjJmMmYyOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3ItZ3JheTogI2Y4MTMxMztcbiRvcGVuLXJlZy1ncmF5LXNvbGlkOiAjODg4ODg4O1xuJG9wZW4tZGstZ3JheS1zb2xpZDogIzY2NjY2NjtcbiRvcGVuLWx0LWdyYXktc29saWQ6ICM5OTk5OTk7XG4kb3Blbi11bHRyYS1sdC1ncmF5LXNvbGlkOiAjZjJmMmYyOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3ItZ3JheS1zb2xpZDogI2Y4MTMxMztcblxuJG9wZW4tcmVnLXNpbHZlcjogbGluZWFyLWdyYWRpZW50KCNiYmJiYmIsIzg4ODg4OCk7XG4kb3Blbi1kay1zaWx2ZXI6IGxpbmVhci1ncmFkaWVudCgjOTk5OTk5LCM4ODg4ODgpOztcbiRvcGVuLWx0LXNpbHZlcjogbGluZWFyLWdyYWRpZW50KCNjY2NjY2MsIzk5OTk5OSk7XG4kb3Blbi11bHRyYS1sdC1zaWx2ZXI6IGxpbmVhci1ncmFkaWVudCgjZTJlMmUyLCAjZjJmMmYyKTsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLXNpbHZlcjogI2Y4MTMxMztcbiRvcGVuLXJlZy1zaWx2ZXItc29saWQ6ICM4ODg4ODg7XG4kb3Blbi1kay1zaWx2ZXItc29saWQ6ICM2NjY2NjY7XG4kb3Blbi1sdC1zaWx2ZXItc29saWQ6ICM5OTk5OTk7XG4kb3Blbi11bHRyYS1sdC1zaWx2ZXItc29saWQ6ICNmMmYyZjI7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1zaWx2ZXItc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZzogJG9wZW4tcmVnLWJsdWUgIWdsb2JhbDtcbiRvcGVuLWRrOiAkb3Blbi1kay1ibHVlICFnbG9iYWw7XG4kb3Blbi1sdDogJG9wZW4tbHQtYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tdWx0cmEtbHQ6ICRvcGVuLXVsdHJhLWx0LWJsdWUgIWdsb2JhbDtcbiRvcGVuLWVycm9yOiAkb3Blbi1lcnJvci1ibHVlICFnbG9iYWw7XG4kb3Blbi1yZWctc29saWQ6ICRvcGVuLXJlZy1ibHVlICFnbG9iYWw7XG4kb3Blbi1kay1zb2xpZDogJG9wZW4tZGstYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tbHQtc29saWQ6ICRvcGVuLWx0LWJsdWUgIWdsb2JhbDtcbiRvcGVuLXVsdHJhLWx0LXNvbGlkOiAkb3Blbi11bHRyYS1sdC1ibHVlICFnbG9iYWw7XG4kb3Blbi1lcnJvci1zb2xpZDogJG9wZW4tZXJyb3ItYmx1ZSAhZ2xvYmFsO1xuXG5cbiR0aGVtZXM6IChcblx0ZXh0cmEtc206IChcblx0XHR0YWJsZVBhZGRpbmc6IDAuNXJlbSxcblx0XHR0YWJsZUZvbnRTaXplOiAwLjc1cmVtLFxuXHRcdGVkaXRhYmxlSW5wdXRWZXJ0aWNhbFBhZGRpbmc6IDAuMDdyZW0sXG5cdFx0ZWRpdGFibGVWZXJ0aWNhbFBhZGRpbmc6IDAuMnJlbSxcblx0XHRlZGl0YWJsZVdpZHRoT2Zmc2V0OiBjYWxjKDEwMCUgLSA4cHgpXG5cdCksXG5cdHNtOiAoXG5cdFx0dGFibGVQYWRkaW5nOiAwLjZyZW0sXG5cdFx0dGFibGVGb250U2l6ZTogMC44NXJlbSxcblx0XHRlZGl0YWJsZUhvcml6b250YWxQYWRkaW5nOiA0cHgsXG5cdFx0ZWRpdGFibGVJbnB1dFZlcnRpY2FsUGFkZGluZzogMC4xMDE1cmVtLFxuXHRcdGVkaXRhYmxlVmVydGljYWxQYWRkaW5nOiAwLjI5cmVtLFxuXHRcdGVkaXRhYmxlV2lkdGhPZmZzZXQ6IGNhbGMoMTAwJSAtIDhweClcblx0KSxcblx0cmVnOiAoXG5cdFx0dGFibGVQYWRkaW5nOiAwLjc1cmVtLFxuXHRcdHRhYmxlRm9udFNpemU6IDAuOTNyZW0sXG5cdFx0ZWRpdGFibGVJbnB1dFZlcnRpY2FsUGFkZGluZzogMC4xNHJlbSxcblx0XHRlZGl0YWJsZVZlcnRpY2FsUGFkZGluZzogMC40cmVtLFxuXHRcdGVkaXRhYmxlV2lkdGhPZmZzZXQ6IGNhbGMoMTAwJSAtIDEwcHgpXG5cdCksXG5cdGxnOiAoXG5cdFx0dGFibGVQYWRkaW5nOiAxcmVtLFxuXHRcdHRhYmxlRm9udFNpemU6IDFyZW0sXG5cdFx0ZWRpdGFibGVJbnB1dFZlcnRpY2FsUGFkZGluZzogMC4xNTc1cmVtLFxuXHRcdGVkaXRhYmxlVmVydGljYWxQYWRkaW5nOiAwLjQ1cmVtLFxuXHRcdGVkaXRhYmxlV2lkdGhPZmZzZXQ6IGNhbGMoMTAwJSAtIDE5cHgpXG5cdCksXG5cdGV4dHJhLWxnOiAoXG5cdFx0dGFibGVQYWRkaW5nOiAxLjI1cmVtLFxuXHRcdHRhYmxlRm9udFNpemU6IDEuMXJlbSxcblx0XHRlZGl0YWJsZUlucHV0VmVydGljYWxQYWRkaW5nOiAwLjIycmVtLFxuXHRcdGVkaXRhYmxlVmVydGljYWxQYWRkaW5nOiAwLjZyZW0sXG5cdFx0ZWRpdGFibGVXaWR0aE9mZnNldDogY2FsYygxMDAlIC0gMjhweClcblx0KSxcbiAgYmx1ZTogKFxuXHRcdG9wZW5SZWc6ICRvcGVuLXJlZy1ibHVlLFxuXHRcdG9wZW5EazogJG9wZW4tZGstYmx1ZSxcblx0XHRvcGVuTHQ6ICRvcGVuLWx0LWJsdWUsXG5cdFx0b3BlblVsdHJhTHQ6ICRvcGVuLXVsdHJhLWx0LWJsdWUsXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1ibHVlLFxuXHRcdG9wZW5SZWdTb2xpZDogJG9wZW4tcmVnLWJsdWUtc29saWQsXG5cdFx0b3BlbkRrU29saWQ6ICRvcGVuLWRrLWJsdWUtc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LWJsdWUtc29saWQsXG5cdFx0b3BlblVsdHJhTHRTb2xpZDogJG9wZW4tdWx0cmEtbHQtYmx1ZS1zb2xpZCxcblx0XHRvcGVuRXJyb3JTb2xpZDogJG9wZW4tZXJyb3ItYmx1ZS1zb2xpZFxuICApLFxuICBvcmFuZ2U6IChcbiAgICBcdG9wZW5SZWc6ICRvcGVuLXJlZy1vcmFuZ2UsXG5cdFx0b3BlbkRrOiAkb3Blbi1kay1vcmFuZ2UsXG5cdFx0b3Blbkx0OiAkb3Blbi1sdC1vcmFuZ2UsXG5cdFx0b3BlblVsdHJhTHQ6ICRvcGVuLXVsdHJhLWx0LW9yYW5nZSxcblx0XHRvcGVuRXJyb3I6ICRvcGVuLWVycm9yLW9yYW5nZSxcblx0XHRvcGVuUmVnU29saWQ6ICRvcGVuLXJlZy1vcmFuZ2Utc29saWQsXG5cdFx0b3BlbkRrU29saWQ6ICRvcGVuLWRrLW9yYW5nZS1zb2xpZCxcblx0XHRvcGVuTHRTb2xpZDogJG9wZW4tbHQtb3JhbmdlLXNvbGlkLFxuXHRcdG9wZW5VbHRyYUx0U29saWQ6ICRvcGVuLXVsdHJhLWx0LW9yYW5nZS1zb2xpZCxcblx0XHRvcGVuRXJyb3JTb2xpZDogJG9wZW4tZXJyb3Itb3JhbmdlLXNvbGlkXG4gICksXG4gIGdyZWVuOiAoXG4gICAgb3BlblJlZzogJG9wZW4tcmVnLWdyZWVuLFxuXHRcdG9wZW5EazogJG9wZW4tZGstZ3JlZW4sXG5cdFx0b3Blbkx0OiAkb3Blbi1sdC1ncmVlbixcblx0XHRvcGVuVWx0cmFMdDogJG9wZW4tdWx0cmEtbHQtZ3JlZW4sXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1ncmVlbixcblx0XHRvcGVuUmVnU29saWQ6ICRvcGVuLXJlZy1ncmVlbi1zb2xpZCxcblx0XHRvcGVuRGtTb2xpZDogJG9wZW4tZGstZ3JlZW4tc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LWdyZWVuLXNvbGlkLFxuXHRcdG9wZW5VbHRyYUx0U29saWQ6ICRvcGVuLXVsdHJhLWx0LWdyZWVuLXNvbGlkLFxuXHRcdG9wZW5FcnJvclNvbGlkOiAkb3Blbi1lcnJvci1ncmVlbi1zb2xpZFxuICApLFxuICBwdXJwbGU6IChcbiAgICBvcGVuUmVnOiAkb3Blbi1yZWctcHVycGxlLFxuXHRcdG9wZW5EazogJG9wZW4tZGstcHVycGxlLFxuXHRcdG9wZW5MdDogJG9wZW4tbHQtcHVycGxlLFxuXHRcdG9wZW5VbHRyYUx0OiAkb3Blbi11bHRyYS1sdC1wdXJwbGUsXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1wdXJwbGUsXG5cdFx0b3BlblJlZ1NvbGlkOiAkb3Blbi1yZWctcHVycGxlLXNvbGlkLFxuXHRcdG9wZW5Ea1NvbGlkOiAkb3Blbi1kay1wdXJwbGUtc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LXB1cnBsZS1zb2xpZCxcblx0XHRvcGVuVWx0cmFMdFNvbGlkOiAkb3Blbi11bHRyYS1sdC1wdXJwbGUtc29saWQsXG5cdFx0b3BlbkVycm9yU29saWQ6ICRvcGVuLWVycm9yLXB1cnBsZS1zb2xpZFxuXHQpLFxuXHRncmF5OiAoXG4gICAgb3BlblJlZzogJG9wZW4tcmVnLWdyYXksXG5cdFx0b3BlbkRrOiAkb3Blbi1kay1ncmF5LFxuXHRcdG9wZW5MdDogJG9wZW4tbHQtZ3JheSxcblx0XHRvcGVuVWx0cmFMdDogJG9wZW4tdWx0cmEtbHQtZ3JheSxcblx0XHRvcGVuRXJyb3I6ICRvcGVuLWVycm9yLWdyYXksXG5cdFx0b3BlblJlZ1NvbGlkOiAkb3Blbi1yZWctZ3JheS1zb2xpZCxcblx0XHRvcGVuRGtTb2xpZDogJG9wZW4tZGstZ3JheS1zb2xpZCxcblx0XHRvcGVuTHRTb2xpZDogJG9wZW4tbHQtZ3JheS1zb2xpZCxcblx0XHRvcGVuVWx0cmFMdFNvbGlkOiAkb3Blbi11bHRyYS1sdC1ncmF5LXNvbGlkLFxuXHRcdG9wZW5FcnJvclNvbGlkOiAkb3Blbi1lcnJvci1ncmF5LXNvbGlkXG5cdCksXG5cdHNpbHZlcjogKFxuICAgIG9wZW5SZWc6ICRvcGVuLXJlZy1zaWx2ZXIsXG5cdFx0b3BlbkRrOiAkb3Blbi1kay1zaWx2ZXIsXG5cdFx0b3Blbkx0OiAkb3Blbi1sdC1zaWx2ZXIsXG5cdFx0b3BlblVsdHJhTHQ6ICRvcGVuLXVsdHJhLWx0LXNpbHZlcixcblx0XHRvcGVuRXJyb3I6ICRvcGVuLWVycm9yLXNpbHZlcixcblx0XHRvcGVuUmVnU29saWQ6ICRvcGVuLXJlZy1zaWx2ZXItc29saWQsXG5cdFx0b3BlbkRrU29saWQ6ICRvcGVuLWRrLXNpbHZlci1zb2xpZCxcblx0XHRvcGVuTHRTb2xpZDogJG9wZW4tbHQtc2lsdmVyLXNvbGlkLFxuXHRcdG9wZW5VbHRyYUx0U29saWQ6ICRvcGVuLXVsdHJhLWx0LXNpbHZlci1zb2xpZCxcblx0XHRvcGVuRXJyb3JTb2xpZDogJG9wZW4tZXJyb3Itc2lsdmVyLXNvbGlkXG5cdClcbik7XG5cbiAgXG4gIC8qXG4gICAqIEltcGxlbWVudGF0aW9uIG9mIHRoZW1lc1xuICAgKi9cbiAgQG1peGluIHRoZW1pZnkoJHRoZW1lcykge1xuXHRAZWFjaCAkdGhlbWUsICRtYXAgaW4gJHRoZW1lcyB7XG5cdCAgLnRoZW1lLSN7JHRoZW1lfSAmIHtcblx0XHQkdGhlbWUtbWFwOiAoKSAhZ2xvYmFsO1xuXHRcdEBlYWNoICRrZXksICRzdWJtYXAgaW4gJG1hcCB7XG5cdFx0ICAkdmFsdWU6IG1hcC1nZXQobWFwLWdldCgkdGhlbWVzLCAkdGhlbWUpLCAnI3ska2V5fScpO1xuXHRcdCAgJHRoZW1lLW1hcDogbWFwLW1lcmdlKCR0aGVtZS1tYXAsICgka2V5OiAkdmFsdWUpKSAhZ2xvYmFsO1xuXHRcdH1cblx0XHRAY29udGVudDtcblx0XHQkdGhlbWUtbWFwOiBudWxsICFnbG9iYWw7XG5cdCAgfVxuXHR9XG4gIH1cbiAgXG4gIEBmdW5jdGlvbiB0aGVtZWQoJGtleSkge1xuXHRAcmV0dXJuIG1hcC1nZXQoJHRoZW1lLW1hcCwgJGtleSk7XG4gIH1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qXG4gICAqIEltcGxlbWVudGF0aW9uIG9mIHRoZW1lc1xuICAgKi9cbmgyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG5cbi50aGVtZS1ibHVlIC5yZWQtdGV4dCB7XG4gIGNvbG9yOiAjZjgxMzEzOyB9XG5cbi50aGVtZS1vcmFuZ2UgLnJlZC10ZXh0IHtcbiAgY29sb3I6ICNmODEzMTM7IH1cblxuLnRoZW1lLWdyZWVuIC5yZWQtdGV4dCB7XG4gIGNvbG9yOiAjZjgxMzEzOyB9XG5cbi50aGVtZS1wdXJwbGUgLnJlZC10ZXh0IHtcbiAgY29sb3I6ICNmODEzMTM7IH1cblxuLnRoZW1lLWdyYXkgLnJlZC10ZXh0IHtcbiAgY29sb3I6ICNmODEzMTM7IH1cblxuLnRoZW1lLXNpbHZlciAucmVkLXRleHQge1xuICBjb2xvcjogI2Y4MTMxMzsgfVxuXG4udG8tZnJvbnQge1xuICB6LWluZGV4OiAxOyB9XG5cbi50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC50YWJsZSB0aGVhZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLnRhYmxlIHRoZWFkIHRyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuICAgICAgLnRoZW1lLWV4dHJhLXNtIC50YWJsZSB0aGVhZCB0ciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTsgfVxuICAgICAgLnRoZW1lLXNtIC50YWJsZSB0aGVhZCB0ciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTsgfVxuICAgICAgLnRoZW1lLXJlZyAudGFibGUgdGhlYWQgdHIge1xuICAgICAgICBmb250LXNpemU6IDAuOTNyZW07IH1cbiAgICAgIC50aGVtZS1sZyAudGFibGUgdGhlYWQgdHIge1xuICAgICAgICBmb250LXNpemU6IDFyZW07IH1cbiAgICAgIC50aGVtZS1leHRyYS1sZyAudGFibGUgdGhlYWQgdHIge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTsgfVxuICAgICAgLnRhYmxlIHRoZWFkIHRyIHRoLCAudGFibGUgdGhlYWQgdHIgdGQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDByZW07XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxuICAgICAgICAudGhlbWUtZXh0cmEtc20gLnRhYmxlIHRoZWFkIHRyIHRoLCAudGhlbWUtZXh0cmEtc20gLnRhYmxlIHRoZWFkIHRyIHRkIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDsgfVxuICAgICAgICAudGhlbWUtc20gLnRhYmxlIHRoZWFkIHRyIHRoLCAudGhlbWUtc20gLnRhYmxlIHRoZWFkIHRyIHRkIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDsgfVxuICAgICAgICAudGhlbWUtcmVnIC50YWJsZSB0aGVhZCB0ciB0aCwgLnRoZW1lLXJlZyAudGFibGUgdGhlYWQgdHIgdGQge1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkOyB9XG4gICAgICAgIC50aGVtZS1sZyAudGFibGUgdGhlYWQgdHIgdGgsIC50aGVtZS1sZyAudGFibGUgdGhlYWQgdHIgdGQge1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkOyB9XG4gICAgICAgIC50aGVtZS1leHRyYS1sZyAudGFibGUgdGhlYWQgdHIgdGgsIC50aGVtZS1leHRyYS1sZyAudGFibGUgdGhlYWQgdHIgdGQge1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkOyB9XG4gICAgICAgIC50aGVtZS1ibHVlIC50YWJsZSB0aGVhZCB0ciB0aCwgLnRoZW1lLWJsdWUgLnRhYmxlIHRoZWFkIHRyIHRkIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzODFhNjtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzgxYTY7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzODFhNjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ3Mjk3O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyNDcyOTc7IH1cbiAgICAgICAgLnRoZW1lLW9yYW5nZSAudGFibGUgdGhlYWQgdHIgdGgsIC50aGVtZS1vcmFuZ2UgLnRhYmxlIHRoZWFkIHRyIHRkIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwOGI0MTtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMDhiNDE7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwOGI0MTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE3YzMyO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkMTdjMzI7IH1cbiAgICAgICAgLnRoZW1lLWdyZWVuIC50YWJsZSB0aGVhZCB0ciB0aCwgLnRoZW1lLWdyZWVuIC50YWJsZSB0aGVhZCB0ciB0ZCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2ODlmMzg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjg5ZjM4O1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2ODlmMzg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OGIyZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU4YjJmOyB9XG4gICAgICAgIC50aGVtZS1wdXJwbGUgLnRhYmxlIHRoZWFkIHRyIHRoLCAudGhlbWUtcHVycGxlIC50YWJsZSB0aGVhZCB0ciB0ZCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiYjc2ZGI7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYmI3NmRiO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYjc2ZGI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhiNTBhNztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGI1MGE3OyB9XG4gICAgICAgIC50aGVtZS1ncmF5IC50YWJsZSB0aGVhZCB0ciB0aCwgLnRoZW1lLWdyYXkgLnRhYmxlIHRoZWFkIHRyIHRkIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5OTk5OTtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5OTk5OTk7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTk5OTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM4ODg4ODg7IH1cbiAgICAgICAgLnRoZW1lLXNpbHZlciAudGFibGUgdGhlYWQgdHIgdGgsIC50aGVtZS1zaWx2ZXIgLnRhYmxlIHRoZWFkIHRyIHRkIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5OTk5OTtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5OTk5OTk7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTk5OTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYmJiYmJiLCAjODg4ODg4KTsgfVxuICAgICAgICAudGhlbWUtZXh0cmEtc20gLnRhYmxlIHRoZWFkIHRyIHRoLCAudGhlbWUtZXh0cmEtc20gLnRhYmxlIHRoZWFkIHRyIHRkIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07IH1cbiAgICAgICAgLnRoZW1lLXNtIC50YWJsZSB0aGVhZCB0ciB0aCwgLnRoZW1lLXNtIC50YWJsZSB0aGVhZCB0ciB0ZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtOyB9XG4gICAgICAgIC50aGVtZS1yZWcgLnRhYmxlIHRoZWFkIHRyIHRoLCAudGhlbWUtcmVnIC50YWJsZSB0aGVhZCB0ciB0ZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjkzcmVtOyB9XG4gICAgICAgIC50aGVtZS1sZyAudGFibGUgdGhlYWQgdHIgdGgsIC50aGVtZS1sZyAudGFibGUgdGhlYWQgdHIgdGQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxuICAgICAgICAudGhlbWUtZXh0cmEtbGcgLnRhYmxlIHRoZWFkIHRyIHRoLCAudGhlbWUtZXh0cmEtbGcgLnRhYmxlIHRoZWFkIHRyIHRkIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTsgfVxuICAgICAgICAudGFibGUgdGhlYWQgdHIgdGggZGl2LCAudGFibGUgdGhlYWQgdHIgdGQgZGl2IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7IH1cbiAgICAgICAgICAudGhlbWUtZXh0cmEtc20gLnRhYmxlIHRoZWFkIHRyIHRoIGRpdiwgLnRoZW1lLWV4dHJhLXNtIC50YWJsZSB0aGVhZCB0ciB0ZCBkaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtOyB9XG4gICAgICAgICAgLnRoZW1lLXNtIC50YWJsZSB0aGVhZCB0ciB0aCBkaXYsIC50aGVtZS1zbSAudGFibGUgdGhlYWQgdHIgdGQgZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTsgfVxuICAgICAgICAgIC50aGVtZS1yZWcgLnRhYmxlIHRoZWFkIHRyIHRoIGRpdiwgLnRoZW1lLXJlZyAudGFibGUgdGhlYWQgdHIgdGQgZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTNyZW07IH1cbiAgICAgICAgICAudGhlbWUtbGcgLnRhYmxlIHRoZWFkIHRyIHRoIGRpdiwgLnRoZW1lLWxnIC50YWJsZSB0aGVhZCB0ciB0ZCBkaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxuICAgICAgICAgIC50aGVtZS1leHRyYS1sZyAudGFibGUgdGhlYWQgdHIgdGggZGl2LCAudGhlbWUtZXh0cmEtbGcgLnRhYmxlIHRoZWFkIHRyIHRkIGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07IH1cbiAgLnRhYmxlIHRib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAudGFibGUgdGJvZHkgdHIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG4gICAgICAudGhlbWUtZXh0cmEtc20gLnRhYmxlIHRib2R5IHRyIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtOyB9XG4gICAgICAudGhlbWUtc20gLnRhYmxlIHRib2R5IHRyIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtOyB9XG4gICAgICAudGhlbWUtcmVnIC50YWJsZSB0Ym9keSB0ciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45M3JlbTsgfVxuICAgICAgLnRoZW1lLWxnIC50YWJsZSB0Ym9keSB0ciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxuICAgICAgLnRoZW1lLWV4dHJhLWxnIC50YWJsZSB0Ym9keSB0ciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtOyB9XG4gICAgICAudGFibGUgdGJvZHkgdHIgdGgsIC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RERERERDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAgICAgLnRoZW1lLWV4dHJhLXNtIC50YWJsZSB0Ym9keSB0ciB0aCwgLnRoZW1lLWV4dHJhLXNtIC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtOyB9XG4gICAgICAgIC50aGVtZS1zbSAudGFibGUgdGJvZHkgdHIgdGgsIC50aGVtZS1zbSAudGFibGUgdGJvZHkgdHIgdGQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTsgfVxuICAgICAgICAudGhlbWUtcmVnIC50YWJsZSB0Ym9keSB0ciB0aCwgLnRoZW1lLXJlZyAudGFibGUgdGJvZHkgdHIgdGQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45M3JlbTsgfVxuICAgICAgICAudGhlbWUtbGcgLnRhYmxlIHRib2R5IHRyIHRoLCAudGhlbWUtbGcgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07IH1cbiAgICAgICAgLnRoZW1lLWV4dHJhLWxnIC50YWJsZSB0Ym9keSB0ciB0aCwgLnRoZW1lLWV4dHJhLWxnIC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07IH1cbiAgICAgICAgLnRhYmxlIHRib2R5IHRyIHRoIGRpdiwgLnRhYmxlIHRib2R5IHRyIHRkIGRpdiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgICAgICAgIC50aGVtZS1leHRyYS1zbSAudGFibGUgdGJvZHkgdHIgdGggZGl2LCAudGhlbWUtZXh0cmEtc20gLnRhYmxlIHRib2R5IHRyIHRkIGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07IH1cbiAgICAgICAgICAudGhlbWUtc20gLnRhYmxlIHRib2R5IHRyIHRoIGRpdiwgLnRoZW1lLXNtIC50YWJsZSB0Ym9keSB0ciB0ZCBkaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMC42cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtOyB9XG4gICAgICAgICAgLnRoZW1lLXJlZyAudGFibGUgdGJvZHkgdHIgdGggZGl2LCAudGhlbWUtcmVnIC50YWJsZSB0Ym9keSB0ciB0ZCBkaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45M3JlbTsgfVxuICAgICAgICAgIC50aGVtZS1sZyAudGFibGUgdGJvZHkgdHIgdGggZGl2LCAudGhlbWUtbGcgLnRhYmxlIHRib2R5IHRyIHRkIGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtOyB9XG4gICAgICAgICAgLnRoZW1lLWV4dHJhLWxnIC50YWJsZSB0Ym9keSB0ciB0aCBkaXYsIC50aGVtZS1leHRyYS1sZyAudGFibGUgdGJvZHkgdHIgdGQgZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTsgfVxuICAgICAgICAgIC50YWJsZSB0Ym9keSB0ciB0aCBkaXYuc3Rhci1jb250YWluZXIsIC50YWJsZSB0Ym9keSB0ciB0ZCBkaXYuc3Rhci1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlOyB9XG4gICAgICAgICAgICAudGhlbWUtYmx1ZSAudGFibGUgdGJvZHkgdHIgdGggZGl2LnN0YXItY29udGFpbmVyIC5mYS1zdGFyLCAudGhlbWUtYmx1ZSAudGFibGUgdGJvZHkgdHIgdGQgZGl2LnN0YXItY29udGFpbmVyIC5mYS1zdGFyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlYmYxZjY7IH1cbiAgICAgICAgICAgIC50aGVtZS1vcmFuZ2UgLnRhYmxlIHRib2R5IHRyIHRoIGRpdi5zdGFyLWNvbnRhaW5lciAuZmEtc3RhciwgLnRoZW1lLW9yYW5nZSAudGFibGUgdGJvZHkgdHIgdGQgZGl2LnN0YXItY29udGFpbmVyIC5mYS1zdGFyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmMGU0ZGI7IH1cbiAgICAgICAgICAgIC50aGVtZS1ncmVlbiAudGFibGUgdGJvZHkgdHIgdGggZGl2LnN0YXItY29udGFpbmVyIC5mYS1zdGFyLCAudGhlbWUtZ3JlZW4gLnRhYmxlIHRib2R5IHRyIHRkIGRpdi5zdGFyLWNvbnRhaW5lciAuZmEtc3RhciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZGZlY2QzOyB9XG4gICAgICAgICAgICAudGhlbWUtcHVycGxlIC50YWJsZSB0Ym9keSB0ciB0aCBkaXYuc3Rhci1jb250YWluZXIgLmZhLXN0YXIsIC50aGVtZS1wdXJwbGUgLnRhYmxlIHRib2R5IHRyIHRkIGRpdi5zdGFyLWNvbnRhaW5lciAuZmEtc3RhciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZThlMmVlOyB9XG4gICAgICAgICAgICAudGhlbWUtZ3JheSAudGFibGUgdGJvZHkgdHIgdGggZGl2LnN0YXItY29udGFpbmVyIC5mYS1zdGFyLCAudGhlbWUtZ3JheSAudGFibGUgdGJvZHkgdHIgdGQgZGl2LnN0YXItY29udGFpbmVyIC5mYS1zdGFyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmMmYyZjI7IH1cbiAgICAgICAgICAgIC50aGVtZS1zaWx2ZXIgLnRhYmxlIHRib2R5IHRyIHRoIGRpdi5zdGFyLWNvbnRhaW5lciAuZmEtc3RhciwgLnRoZW1lLXNpbHZlciAudGFibGUgdGJvZHkgdHIgdGQgZGl2LnN0YXItY29udGFpbmVyIC5mYS1zdGFyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmMmYyZjI7IH1cbiAgICAgICAgICAudGFibGUgdGJvZHkgdHIgdGggZGl2LnN0YXItY29udGFpbmVyLW92ZXJsYXksIC50YWJsZSB0Ym9keSB0ciB0ZCBkaXYuc3Rhci1jb250YWluZXItb3ZlcmxheSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gICAgICAgICAgICB3aWR0aDogNzIlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlOyB9XG4gICAgICAgICAgICAudGhlbWUtYmx1ZSAudGFibGUgdGJvZHkgdHIgdGggZGl2LnN0YXItY29udGFpbmVyLW92ZXJsYXkgLmZhLXN0YXIsIC50aGVtZS1ibHVlIC50YWJsZSB0Ym9keSB0ciB0ZCBkaXYuc3Rhci1jb250YWluZXItb3ZlcmxheSAuZmEtc3RhciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzM4MWE2OyB9XG4gICAgICAgICAgICAudGhlbWUtb3JhbmdlIC50YWJsZSB0Ym9keSB0ciB0aCBkaXYuc3Rhci1jb250YWluZXItb3ZlcmxheSAuZmEtc3RhciwgLnRoZW1lLW9yYW5nZSAudGFibGUgdGJvZHkgdHIgdGQgZGl2LnN0YXItY29udGFpbmVyLW92ZXJsYXkgLmZhLXN0YXIge1xuICAgICAgICAgICAgICBjb2xvcjogI2UwOGI0MTsgfVxuICAgICAgICAgICAgLnRoZW1lLWdyZWVuIC50YWJsZSB0Ym9keSB0ciB0aCBkaXYuc3Rhci1jb250YWluZXItb3ZlcmxheSAuZmEtc3RhciwgLnRoZW1lLWdyZWVuIC50YWJsZSB0Ym9keSB0ciB0ZCBkaXYuc3Rhci1jb250YWluZXItb3ZlcmxheSAuZmEtc3RhciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjg5ZjM4OyB9XG4gICAgICAgICAgICAudGhlbWUtcHVycGxlIC50YWJsZSB0Ym9keSB0ciB0aCBkaXYuc3Rhci1jb250YWluZXItb3ZlcmxheSAuZmEtc3RhciwgLnRoZW1lLXB1cnBsZSAudGFibGUgdGJvZHkgdHIgdGQgZGl2LnN0YXItY29udGFpbmVyLW92ZXJsYXkgLmZhLXN0YXIge1xuICAgICAgICAgICAgICBjb2xvcjogI2JiNzZkYjsgfVxuICAgICAgICAgICAgLnRoZW1lLWdyYXkgLnRhYmxlIHRib2R5IHRyIHRoIGRpdi5zdGFyLWNvbnRhaW5lci1vdmVybGF5IC5mYS1zdGFyLCAudGhlbWUtZ3JheSAudGFibGUgdGJvZHkgdHIgdGQgZGl2LnN0YXItY29udGFpbmVyLW92ZXJsYXkgLmZhLXN0YXIge1xuICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTsgfVxuICAgICAgICAgICAgLnRoZW1lLXNpbHZlciAudGFibGUgdGJvZHkgdHIgdGggZGl2LnN0YXItY29udGFpbmVyLW92ZXJsYXkgLmZhLXN0YXIsIC50aGVtZS1zaWx2ZXIgLnRhYmxlIHRib2R5IHRyIHRkIGRpdi5zdGFyLWNvbnRhaW5lci1vdmVybGF5IC5mYS1zdGFyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7IH1cbiAgICAgICAgLnRhYmxlIHRib2R5IHRyIHRoLmV4cGFuZC1jb250ZW50LCAudGFibGUgdGJvZHkgdHIgdGQuZXhwYW5kLWNvbnRlbnQge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTI7XG4gICAgICAgICAgb3JkZXI6IDExO1xuICAgICAgICAgIGJvcmRlcjogMHB4OyB9XG4gICAgICAgICAgLnRoZW1lLWJsdWUgLnRhYmxlIHRib2R5IHRyIHRoLmV4cGFuZC1jb250ZW50ID4gZGl2LCAudGhlbWUtYmx1ZSAudGFibGUgdGJvZHkgdHIgdGQuZXhwYW5kLWNvbnRlbnQgPiBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjFmNjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYmYxZjY7IH1cbiAgICAgICAgICAudGhlbWUtb3JhbmdlIC50YWJsZSB0Ym9keSB0ciB0aC5leHBhbmQtY29udGVudCA+IGRpdiwgLnRoZW1lLW9yYW5nZSAudGFibGUgdGJvZHkgdHIgdGQuZXhwYW5kLWNvbnRlbnQgPiBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZTRkYjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGU0ZGI7IH1cbiAgICAgICAgICAudGhlbWUtZ3JlZW4gLnRhYmxlIHRib2R5IHRyIHRoLmV4cGFuZC1jb250ZW50ID4gZGl2LCAudGhlbWUtZ3JlZW4gLnRhYmxlIHRib2R5IHRyIHRkLmV4cGFuZC1jb250ZW50ID4gZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmVjZDM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGZlY2QzOyB9XG4gICAgICAgICAgLnRoZW1lLXB1cnBsZSAudGFibGUgdGJvZHkgdHIgdGguZXhwYW5kLWNvbnRlbnQgPiBkaXYsIC50aGVtZS1wdXJwbGUgLnRhYmxlIHRib2R5IHRyIHRkLmV4cGFuZC1jb250ZW50ID4gZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGUyZWU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZThlMmVlOyB9XG4gICAgICAgICAgLnRoZW1lLWdyYXkgLnRhYmxlIHRib2R5IHRyIHRoLmV4cGFuZC1jb250ZW50ID4gZGl2LCAudGhlbWUtZ3JheSAudGFibGUgdGJvZHkgdHIgdGQuZXhwYW5kLWNvbnRlbnQgPiBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7IH1cbiAgICAgICAgICAudGhlbWUtc2lsdmVyIC50YWJsZSB0Ym9keSB0ciB0aC5leHBhbmQtY29udGVudCA+IGRpdiwgLnRoZW1lLXNpbHZlciAudGFibGUgdGJvZHkgdHIgdGQuZXhwYW5kLWNvbnRlbnQgPiBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTJlMmUyLCAjZjJmMmYyKTsgfVxuICAgICAgICAgIC50YWJsZSB0Ym9keSB0ciB0aC5leHBhbmQtY29udGVudCAuY29sbGFwc2VkLCAudGFibGUgdGJvZHkgdHIgdGQuZXhwYW5kLWNvbnRlbnQgLmNvbGxhcHNlZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAgICAgICAudGFibGUgdGJvZHkgdHIgdGguZXhwYW5kLWNvbnRlbnQgZGl2Om5vdCguY29sbGFwc2VkKSwgLnRhYmxlIHRib2R5IHRyIHRkLmV4cGFuZC1jb250ZW50IGRpdjpub3QoLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgICAgICAgICAgLnRhYmxlIHRib2R5IHRyIHRoLmV4cGFuZC1jb250ZW50IGRpdjpub3QoLmNvbGxhcHNlZCkuc3Rhci1jb250YWluZXItb3ZlcmxheSwgLnRhYmxlIHRib2R5IHRyIHRkLmV4cGFuZC1jb250ZW50IGRpdjpub3QoLmNvbGxhcHNlZCkuc3Rhci1jb250YWluZXItb3ZlcmxheSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgICAgICAgICAgLnRhYmxlIHRib2R5IHRyIHRoLmV4cGFuZC1jb250ZW50IGRpdjpub3QoLmNvbGxhcHNlZCkucHJvZHVjdC1yYXRpbmctY29sLCAudGFibGUgdGJvZHkgdHIgdGQuZXhwYW5kLWNvbnRlbnQgZGl2Om5vdCguY29sbGFwc2VkKS5wcm9kdWN0LXJhdGluZy1jb2wge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAgIC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7IH1cbiAgICAgICAgLnRoZW1lLWV4dHJhLXNtIC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB0ZC5leHBhbmQtY29udGVudCA+IGRpdiwgLnRoZW1lLWV4dHJhLXNtIC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB0aC5leHBhbmQtY29udGVudCA+IGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5OyB9XG4gICAgICAgIC50aGVtZS1zbSAudGFibGUgdGJvZHkgdHIuc2VsZWN0ZWQgdGQuZXhwYW5kLWNvbnRlbnQgPiBkaXYsIC50aGVtZS1zbSAudGFibGUgdGJvZHkgdHIuc2VsZWN0ZWQgdGguZXhwYW5kLWNvbnRlbnQgPiBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTsgfVxuICAgICAgICAudGhlbWUtcmVnIC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB0ZC5leHBhbmQtY29udGVudCA+IGRpdiwgLnRoZW1lLXJlZyAudGFibGUgdGJvZHkgdHIuc2VsZWN0ZWQgdGguZXhwYW5kLWNvbnRlbnQgPiBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTsgfVxuICAgICAgICAudGhlbWUtbGcgLnRhYmxlIHRib2R5IHRyLnNlbGVjdGVkIHRkLmV4cGFuZC1jb250ZW50ID4gZGl2LCAudGhlbWUtbGcgLnRhYmxlIHRib2R5IHRyLnNlbGVjdGVkIHRoLmV4cGFuZC1jb250ZW50ID4gZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7IH1cbiAgICAgICAgLnRoZW1lLWV4dHJhLWxnIC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB0ZC5leHBhbmQtY29udGVudCA+IGRpdiwgLnRoZW1lLWV4dHJhLWxnIC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB0aC5leHBhbmQtY29udGVudCA+IGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5OyB9XG4gICAgICAgIC50aGVtZS1ibHVlIC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB0ZC5leHBhbmQtY29udGVudCA+IGRpdiwgLnRoZW1lLWJsdWUgLnRhYmxlIHRib2R5IHRyLnNlbGVjdGVkIHRoLmV4cGFuZC1jb250ZW50ID4gZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7IH1cbiAgICAgICAgLnRoZW1lLW9yYW5nZSAudGFibGUgdGJvZHkgdHIuc2VsZWN0ZWQgdGQuZXhwYW5kLWNvbnRlbnQgPiBkaXYsIC50aGVtZS1vcmFuZ2UgLnRhYmxlIHRib2R5IHRyLnNlbGVjdGVkIHRoLmV4cGFuZC1jb250ZW50ID4gZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7IH1cbiAgICAgICAgLnRoZW1lLWdyZWVuIC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB0ZC5leHBhbmQtY29udGVudCA+IGRpdiwgLnRoZW1lLWdyZWVuIC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB0aC5leHBhbmQtY29udGVudCA+IGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5OyB9XG4gICAgICAgIC50aGVtZS1wdXJwbGUgLnRhYmxlIHRib2R5IHRyLnNlbGVjdGVkIHRkLmV4cGFuZC1jb250ZW50ID4gZGl2LCAudGhlbWUtcHVycGxlIC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB0aC5leHBhbmQtY29udGVudCA+IGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5OyB9XG4gICAgICAgIC50aGVtZS1ncmF5IC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB0ZC5leHBhbmQtY29udGVudCA+IGRpdiwgLnRoZW1lLWdyYXkgLnRhYmxlIHRib2R5IHRyLnNlbGVjdGVkIHRoLmV4cGFuZC1jb250ZW50ID4gZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7IH1cbiAgICAgICAgLnRoZW1lLXNpbHZlciAudGFibGUgdGJvZHkgdHIuc2VsZWN0ZWQgdGQuZXhwYW5kLWNvbnRlbnQgPiBkaXYsIC50aGVtZS1zaWx2ZXIgLnRhYmxlIHRib2R5IHRyLnNlbGVjdGVkIHRoLmV4cGFuZC1jb250ZW50ID4gZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7IH1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7IH1cblxuLmVuYWJsZS1tZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjNweDtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLnRoZW1lLWV4dHJhLXNtIC5lbmFibGUtbWVudSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkOyB9XG4gIC50aGVtZS1zbSAuZW5hYmxlLW1lbnUge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDsgfVxuICAudGhlbWUtcmVnIC5lbmFibGUtbWVudSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkOyB9XG4gIC50aGVtZS1sZyAuZW5hYmxlLW1lbnUge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDsgfVxuICAudGhlbWUtZXh0cmEtbGcgLmVuYWJsZS1tZW51IHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7IH1cbiAgLnRoZW1lLWJsdWUgLmVuYWJsZS1tZW51IHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI0NzI5NzsgfVxuICAudGhlbWUtb3JhbmdlIC5lbmFibGUtbWVudSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMTdjMzI7IH1cbiAgLnRoZW1lLWdyZWVuIC5lbmFibGUtbWVudSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1NThiMmY7IH1cbiAgLnRoZW1lLXB1cnBsZSAuZW5hYmxlLW1lbnUge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOGI1MGE3OyB9XG4gIC50aGVtZS1ncmF5IC5lbmFibGUtbWVudSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4ODg4ODg7IH1cbiAgLnRoZW1lLXNpbHZlciAuZW5hYmxlLW1lbnUge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODg4ODg4OyB9XG4gIC5lbmFibGUtbWVudSBzcGFuIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4OyB9XG4gIC5lbmFibGUtbWVudSAuZW5hYmxlLWxhYmVscyB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4OyB9XG4gIC5lbmFibGUtbWVudSAuZm9ybS1jb250cm9sLm1lbnUge1xuICAgIHRvcDogLTUwcHg7XG4gICAgbGVmdDogMzUwcHg7IH1cblxuLmRhdGEtb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDsgfVxuXG4uZGF0YS1sYWJlbHMge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7IH1cblxuLmRhdGEtc2VsZWN0IHtcbiAgcGFkZGluZy1yaWdodDogMjVweDsgfVxuXG4udHJhbnNhY3Rpb24tc2VsZWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC50aGVtZS1leHRyYS1zbSAudHJhbnNhY3Rpb24tc2VsZWN0IGlucHV0IHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07IH1cbiAgLnRoZW1lLXNtIC50cmFuc2FjdGlvbi1zZWxlY3QgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTsgfVxuICAudGhlbWUtcmVnIC50cmFuc2FjdGlvbi1zZWxlY3QgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMC45M3JlbTsgfVxuICAudGhlbWUtbGcgLnRyYW5zYWN0aW9uLXNlbGVjdCBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxcmVtOyB9XG4gIC50aGVtZS1leHRyYS1sZyAudHJhbnNhY3Rpb24tc2VsZWN0IGlucHV0IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTsgfVxuXG4ucHJpbnRpbmcgLnRyYW5zYWN0aW9uLXNlbGVjdCB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmdyaWQtZnVuY3Rpb25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDsgfVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxuICAudGhlbWUtZXh0cmEtc20gLmdyaWQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZDsgfVxuICAudGhlbWUtc20gLmdyaWQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZDsgfVxuICAudGhlbWUtcmVnIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAycHggc29saWQ7IH1cbiAgLnRoZW1lLWxnIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAycHggc29saWQ7IH1cbiAgLnRoZW1lLWV4dHJhLWxnIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAycHggc29saWQ7IH1cbiAgLnRoZW1lLWJsdWUgLmdyaWQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjQ3Mjk3OyB9XG4gIC50aGVtZS1vcmFuZ2UgLmdyaWQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDE3YzMyOyB9XG4gIC50aGVtZS1ncmVlbiAuZ3JpZC1jb250YWluZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NThiMmY7IH1cbiAgLnRoZW1lLXB1cnBsZSAuZ3JpZC1jb250YWluZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4YjUwYTc7IH1cbiAgLnRoZW1lLWdyYXkgLmdyaWQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODg4ODg4OyB9XG4gIC50aGVtZS1zaWx2ZXIgLmdyaWQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODg4ODg4OyB9XG5cbi5leHBvcnQtY29udGFpbmVyIHtcbiAgcmlnaHQ6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5wcmludC1jb250YWluZXIge1xuICByaWdodDogMTMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAucHJpbnQtY29udGFpbmVyIC5mYS1wcmludCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG5cbmRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4udGFibGUge1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICBib3JkZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDsgfVxuXG50YWJsZSB0aGVhZCB0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvOyB9XG5cbnRyIHRkLCB0ciB0aCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7IH1cbiAgdHIgdGQgZGl2Lml0ZW0tbmFtZSwgdHIgdGggZGl2Lml0ZW0tbmFtZSB7XG4gICAgd2lkdGg6IDE4MHB4OyB9XG4gIHRyIHRkIGRpdi5pdGVtLXF1YW50aXR5LCB0ciB0aCBkaXYuaXRlbS1xdWFudGl0eSB7XG4gICAgd2lkdGg6IDE4MHB4OyB9XG4gIHRyIHRkIGRpdi5pdGVtLXByaWNlLCB0ciB0aCBkaXYuaXRlbS1wcmljZSB7XG4gICAgd2lkdGg6IDE0MHB4OyB9XG4gIHRyIHRkIGRpdi5pdGVtLXNoaXBwaW5nLCB0ciB0aCBkaXYuaXRlbS1zaGlwcGluZyB7XG4gICAgd2lkdGg6IDE0MHB4OyB9XG4gIHRyIHRkIGRpdi5pdGVtLXRheGVzLCB0ciB0aCBkaXYuaXRlbS10YXhlcyB7XG4gICAgd2lkdGg6IDE2MHB4OyB9XG4gIHRyIHRkIGRpdi5pdGVtLXByb2ZpdCwgdHIgdGggZGl2Lml0ZW0tcHJvZml0IHtcbiAgICB3aWR0aDogMTYwcHg7IH1cbiAgdHIgdGQgZGl2Lml0ZW0tcmF0aW5nLCB0ciB0aCBkaXYuaXRlbS1yYXRpbmcge1xuICAgIHdpZHRoOiAxNjBweDsgfVxuXG50ciB0ZCBkaXYsIHRyIHRoIGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuICB0ciB0ZCBkaXYgLnN0eWxlZC1jaGVja2JveCArIGxhYmVsLCB0ciB0aCBkaXYgLnN0eWxlZC1jaGVja2JveCArIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtMXB4KTtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIHRyIHRkIGRpdiAuc3R5bGVkLWNoZWNrYm94ICsgbGFiZWwuc2hpZnQsIHRyIHRoIGRpdiAuc3R5bGVkLWNoZWNrYm94ICsgbGFiZWwuc2hpZnQge1xuICAgICAgbGVmdDogMjUlOyB9XG4gIHRyIHRkIGRpdi5leHBhbmQtY29sLCB0ciB0aCBkaXYuZXhwYW5kLWNvbCB7XG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cbiAgdHIgdGQgZGl2LnNlbGVjdC1yb3ctY29sLCB0ciB0aCBkaXYuc2VsZWN0LXJvdy1jb2wge1xuICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDgwcHg7IH1cbiAgICB0ciB0ZCBkaXYuc2VsZWN0LXJvdy1jb2wgLnNvcnQtaWNvbiwgdHIgdGggZGl2LnNlbGVjdC1yb3ctY29sIC5zb3J0LWljb24ge1xuICAgICAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbiAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgcmlnaHQ6IDBweDsgfVxuICB0ciB0ZCBkaXYubGFiZWwtY29sLCB0ciB0aCBkaXYubGFiZWwtY29sIHtcbiAgICB3aWR0aDogMzAwcHg7IH1cbiAgdHIgdGQgZGl2LmlkLWNvbCwgdHIgdGggZGl2LmlkLWNvbCB7XG4gICAgd2lkdGg6IDEyMHB4OyB9XG4gIHRyIHRkIGRpdi5uYW1lLWNvbCwgdHIgdGggZGl2Lm5hbWUtY29sIHtcbiAgICB3aWR0aDogMjIwcHg7IH1cbiAgdHIgdGQgZGl2LmVtYWlsLWNvbCwgdHIgdGggZGl2LmVtYWlsLWNvbCB7XG4gICAgd2lkdGg6IDI1MHB4OyB9XG4gICAgdHIgdGQgZGl2LmVtYWlsLWNvbCBzcGFuLCB0ciB0aCBkaXYuZW1haWwtY29sIHNwYW4ge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIHRyIHRkIGRpdi5waG9uZS1jb2wsIHRyIHRoIGRpdi5waG9uZS1jb2wge1xuICAgIHdpZHRoOiAyMDBweDsgfVxuICB0ciB0ZCBkaXYucmF0aW5nLWNvbCwgdHIgdGggZGl2LnJhdGluZy1jb2wge1xuICAgIHdpZHRoOiAxOTBweDsgfVxuICB0ciB0ZCBkaXYudG90YWwtc2FsZXMtY29sLCB0ciB0aCBkaXYudG90YWwtc2FsZXMtY29sIHtcbiAgICB3aWR0aDogMTcwcHg7IH1cbiAgdHIgdGQgZGl2LnRvdGFsLWl0ZW0tc2FsZXMtY29sLCB0ciB0aCBkaXYudG90YWwtaXRlbS1zYWxlcy1jb2wge1xuICAgIHdpZHRoOiAxNzBweDsgfVxuICB0ciB0ZCBkaXYuZ3Jvc3MtY29sLCB0ciB0aCBkaXYuZ3Jvc3MtY29sIHtcbiAgICB3aWR0aDogMjEwcHg7IH1cbiAgdHIgdGQgZGl2Lm5ldC1jb2wsIHRyIHRoIGRpdi5uZXQtY29sIHtcbiAgICB3aWR0aDogMjIwcHg7IH1cbiAgdHIgdGQgZGl2LnByb2R1Y3QtbmFtZS1jb2wsIHRyIHRoIGRpdi5wcm9kdWN0LW5hbWUtY29sIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XG4gIHRyIHRkIGRpdi5wcm9kdWN0LXF1YW50aXR5LWNvbCwgdHIgdGggZGl2LnByb2R1Y3QtcXVhbnRpdHktY29sIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XG4gIHRyIHRkIGRpdi5wcm9kdWN0LWJhc2UtcHJpY2UtY29sLCB0ciB0aCBkaXYucHJvZHVjdC1iYXNlLXByaWNlLWNvbCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxuICB0ciB0ZCBkaXYucHJvZHVjdC1zYWxlLXByaWNlLWNvbCwgdHIgdGggZGl2LnByb2R1Y3Qtc2FsZS1wcmljZS1jb2wge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IH1cbiAgdHIgdGQgZGl2LnByb2R1Y3Qtc2hpcHBpbmctY29zdC1jb2wsIHRyIHRoIGRpdi5wcm9kdWN0LXNoaXBwaW5nLWNvc3QtY29sIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XG4gIHRyIHRkIGRpdi5wcm9kdWN0LXByb2ZpdC1jb2wsIHRyIHRoIGRpdi5wcm9kdWN0LXByb2ZpdC1jb2wge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IH1cbiAgdHIgdGQgZGl2LnByb2R1Y3QtcmF0aW5nLWNvbCwgdHIgdGggZGl2LnByb2R1Y3QtcmF0aW5nLWNvbCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxuICB0ciB0ZCBkaXYgdGFibGVqcy1ob3Jpei1yZXNpemUtZ3JpcCwgdHIgdGggZGl2IHRhYmxlanMtaG9yaXotcmVzaXplLWdyaXAge1xuICAgIG9wYWNpdHk6IDAuNTsgfVxuICB0ciB0ZCBkaXY6aG92ZXIgdGFibGVqcy1ob3Jpei1yZXNpemUtZ3JpcCwgdHIgdGggZGl2OmhvdmVyIHRhYmxlanMtaG9yaXotcmVzaXplLWdyaXAge1xuICAgIG9wYWNpdHk6IDE7IH1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCksIC50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKGV2ZW4pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkub2RkLCAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShldmVuKS5vZGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7IH1cbiAgICAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpLm9kZDpob3ZlciwgLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUoZXZlbikub2RkOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7IH1cbiAgLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKS5ldmVuLCAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShldmVuKS5ldmVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG4gICAgLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKS5ldmVuOmhvdmVyLCAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShldmVuKS5ldmVuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7IH1cblxudGggLnRhYmxlanMtZWRpdGFibGUtY2VsbCwgdGQgLnRhYmxlanMtZWRpdGFibGUtY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogYXV0bzsgfVxuICAudGhlbWUtZXh0cmEtc20gdGggLnRhYmxlanMtZWRpdGFibGUtY2VsbCwgLnRoZW1lLWV4dHJhLXNtIHRkIC50YWJsZWpzLWVkaXRhYmxlLWNlbGwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xuICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTsgfVxuICAudGhlbWUtc20gdGggLnRhYmxlanMtZWRpdGFibGUtY2VsbCwgLnRoZW1lLXNtIHRkIC50YWJsZWpzLWVkaXRhYmxlLWNlbGwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xuICAgIHBhZGRpbmctdG9wOiAwLjI5cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI5cmVtOyB9XG4gIC50aGVtZS1yZWcgdGggLnRhYmxlanMtZWRpdGFibGUtY2VsbCwgLnRoZW1lLXJlZyB0ZCAudGFibGVqcy1lZGl0YWJsZS1jZWxsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgcGFkZGluZy10b3A6IDAuNHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtOyB9XG4gIC50aGVtZS1sZyB0aCAudGFibGVqcy1lZGl0YWJsZS1jZWxsLCAudGhlbWUtbGcgdGQgLnRhYmxlanMtZWRpdGFibGUtY2VsbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE5cHgpO1xuICAgIHBhZGRpbmctdG9wOiAwLjQ1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjQ1cmVtOyB9XG4gIC50aGVtZS1leHRyYS1sZyB0aCAudGFibGVqcy1lZGl0YWJsZS1jZWxsLCAudGhlbWUtZXh0cmEtbGcgdGQgLnRhYmxlanMtZWRpdGFibGUtY2VsbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHgpO1xuICAgIHBhZGRpbmctdG9wOiAwLjZyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNnJlbTsgfVxuICB0aCAudGFibGVqcy1lZGl0YWJsZS1jZWxsIGRpdiwgdGQgLnRhYmxlanMtZWRpdGFibGUtY2VsbCBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7IH1cbiAgICB0aCAudGFibGVqcy1lZGl0YWJsZS1jZWxsIGRpdiBpbnB1dCwgdGQgLnRhYmxlanMtZWRpdGFibGUtY2VsbCBkaXYgaW5wdXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgdG9wOiAwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC04cHg7XG4gICAgICBoZWlnaHQ6IGF1dG87IH1cbiAgICAgIC50aGVtZS1leHRyYS1zbSB0aCAudGFibGVqcy1lZGl0YWJsZS1jZWxsIGRpdiBpbnB1dCwgLnRoZW1lLWV4dHJhLXNtIHRkIC50YWJsZWpzLWVkaXRhYmxlLWNlbGwgZGl2IGlucHV0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDAuMDdyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjA3cmVtOyB9XG4gICAgICAudGhlbWUtc20gdGggLnRhYmxlanMtZWRpdGFibGUtY2VsbCBkaXYgaW5wdXQsIC50aGVtZS1zbSB0ZCAudGFibGVqcy1lZGl0YWJsZS1jZWxsIGRpdiBpbnB1dCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjEwMTVyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjEwMTVyZW07IH1cbiAgICAgIC50aGVtZS1yZWcgdGggLnRhYmxlanMtZWRpdGFibGUtY2VsbCBkaXYgaW5wdXQsIC50aGVtZS1yZWcgdGQgLnRhYmxlanMtZWRpdGFibGUtY2VsbCBkaXYgaW5wdXQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMC4xNHJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMTRyZW07IH1cbiAgICAgIC50aGVtZS1sZyB0aCAudGFibGVqcy1lZGl0YWJsZS1jZWxsIGRpdiBpbnB1dCwgLnRoZW1lLWxnIHRkIC50YWJsZWpzLWVkaXRhYmxlLWNlbGwgZGl2IGlucHV0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDAuMTU3NXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMTU3NXJlbTsgfVxuICAgICAgLnRoZW1lLWV4dHJhLWxnIHRoIC50YWJsZWpzLWVkaXRhYmxlLWNlbGwgZGl2IGlucHV0LCAudGhlbWUtZXh0cmEtbGcgdGQgLnRhYmxlanMtZWRpdGFibGUtY2VsbCBkaXYgaW5wdXQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMC4yMnJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMjJyZW07IH1cblxudGgudGFibGVqcy1zb3J0YWJsZSwgdGQudGFibGVqcy1zb3J0YWJsZSB7XG4gIGN1cnNvcjogbnMtcmVzaXplOyB9XG4gIHRoLnRhYmxlanMtc29ydGFibGUgLnNvcnQtaWNvbiwgdGQudGFibGVqcy1zb3J0YWJsZSAuc29ydC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNjVweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IHVuc2V0O1xuICAgIHJpZ2h0OiAwcHg7IH1cbiAgICB0aC50YWJsZWpzLXNvcnRhYmxlIC5zb3J0LWljb246YWZ0ZXIsIHRkLnRhYmxlanMtc29ydGFibGUgLnNvcnQtaWNvbjphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgIHRvcDogY2FsYyg1MCUgLSA4cHgpO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgICAgIGNvbnRlbnQ6ICdcXGYzMzgnO1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgdGgudGFibGVqcy1zb3J0YWJsZSAuc29ydC1pY29uLnNvcnQtZG93bjphZnRlciwgdGQudGFibGVqcy1zb3J0YWJsZSAuc29ydC1pY29uLnNvcnQtZG93bjphZnRlciB7XG4gICAgICBjb250ZW50OiAnXFxmMzA5JzsgfVxuICAgIHRoLnRhYmxlanMtc29ydGFibGUgLnNvcnQtaWNvbi5zb3J0LXVwOmFmdGVyLCB0ZC50YWJsZWpzLXNvcnRhYmxlIC5zb3J0LWljb24uc29ydC11cDphZnRlciB7XG4gICAgICBjb250ZW50OiAnXFxmMzBjJzsgfVxuICAgIHRoLnRhYmxlanMtc29ydGFibGUgLnNvcnQtaWNvbi5zb3J0LXNoaWZ0OmFmdGVyLCB0ZC50YWJsZWpzLXNvcnRhYmxlIC5zb3J0LWljb24uc29ydC1zaGlmdDphZnRlciB7XG4gICAgICByaWdodDogMzBweDsgfVxuICAgIHRoLnRhYmxlanMtc29ydGFibGUgLnNvcnQtaWNvbi5jdXN0b20tc29ydCwgdGQudGFibGVqcy1zb3J0YWJsZSAuc29ydC1pY29uLmN1c3RvbS1zb3J0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgICB0aC50YWJsZWpzLXNvcnRhYmxlIC5zb3J0LWljb24uY3VzdG9tLXNvcnQgaSwgdGQudGFibGVqcy1zb3J0YWJsZSAuc29ydC1pY29uLmN1c3RvbS1zb3J0IGkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gNnB4KTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIHRoLnRhYmxlanMtc29ydGFibGUgLnNvcnQtaWNvbi5jdXN0b20tc29ydC5zb3J0LXNoaWZ0IGksIHRkLnRhYmxlanMtc29ydGFibGUgLnNvcnQtaWNvbi5jdXN0b20tc29ydC5zb3J0LXNoaWZ0IGkge1xuICAgICAgICByaWdodDogNDVweDsgfVxuICAgICAgdGgudGFibGVqcy1zb3J0YWJsZSAuc29ydC1pY29uLmN1c3RvbS1zb3J0LnNvcnQtc2hpZnQuY3VzdG9tLXNvcnQgaSwgdGQudGFibGVqcy1zb3J0YWJsZSAuc29ydC1pY29uLmN1c3RvbS1zb3J0LnNvcnQtc2hpZnQuY3VzdG9tLXNvcnQgaSB7XG4gICAgICAgIHJpZ2h0OiA0NXB4OyB9XG5cbnRoW3Jlb3JkZXJDb2xdLmhpZ2hsaWdodC1sZWZ0LCB0ZFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtbGVmdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDsgfVxuXG50aFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtbGVmdCBkaXYsIHRoW3Jlb3JkZXJDb2xdLmhpZ2hsaWdodC1yaWdodCBkaXYsIHRkW3Jlb3JkZXJDb2xdLmhpZ2hsaWdodC1sZWZ0IGRpdiwgdGRbcmVvcmRlckNvbF0uaGlnaGxpZ2h0LXJpZ2h0IGRpdiB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7IH1cblxudGhbcmVvcmRlckNvbF0uaGlnaGxpZ2h0LWxlZnQgZGl2OmFmdGVyLCB0aFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtcmlnaHQgZGl2OmFmdGVyLCB0ZFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtbGVmdCBkaXY6YWZ0ZXIsIHRkW3Jlb3JkZXJDb2xdLmhpZ2hsaWdodC1yaWdodCBkaXY6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMTIyLCAxMjIsIDAuMDUpO1xuICBoZWlnaHQ6IDQwNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogNTsgfVxuXG50aFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtbGVmdCBkaXY6YWZ0ZXIsIHRkW3Jlb3JkZXJDb2xdLmhpZ2hsaWdodC1sZWZ0IGRpdjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgY29udGVudDogJ1xcZjEwMyc7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDAuNXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlciAwLjVzIGluZmluaXRlICBhbHRlcm5hdGU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDNweCAwIDNweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxuXG50aFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtbGVmdCBkaXYuc29ydC1pY29uOmFmdGVyLCB0ZFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtbGVmdCBkaXYuc29ydC1pY29uOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG50aFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtcmlnaHQgZGl2OmFmdGVyLCB0ZFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtcmlnaHQgZGl2OmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBjb250ZW50OiAnXFxmMTAzJztcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAwLjVzIGluZmluaXRlICBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbjogbW92ZXIgMC41cyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xuICBib3gtc2hhZG93OiBpbnNldCAtM3B4IDAgM3B4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjQpOyB9XG5cbnRoW3Jlb3JkZXJDb2xdLmhpZ2hsaWdodC1yaWdodCBkaXYuc29ydC1pY29uOmFmdGVyLCB0ZFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtcmlnaHQgZGl2LnNvcnQtaWNvbjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcbiAgMCUge1xuICAgIHBhZGRpbmctdG9wOiA0cHg7IH1cbiAgMTAwJSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7IH0gfVxuXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcbiAgMCUge1xuICAgIHBhZGRpbmctdG9wOiA0cHg7IH1cbiAgMTAwJSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7IH0gfVxuXG50aCAubmVzdGVkLWdyaWQtY29udGFpbmVyLCB0ZCAubmVzdGVkLWdyaWQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAwcHg7IH1cbiAgdGggLm5lc3RlZC1ncmlkLWNvbnRhaW5lciA6Om5nLWRlZXAgLnRhYmxlanMtdGFibGUtd2lkdGgsIHRkIC5uZXN0ZWQtZ3JpZC1jb250YWluZXIgOjpuZy1kZWVwIC50YWJsZWpzLXRhYmxlLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHg7IH1cbiAgdGggLm5lc3RlZC1ncmlkLWNvbnRhaW5lciAudGFibGUsIHRkIC5uZXN0ZWQtZ3JpZC1jb250YWluZXIgLnRhYmxlIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAgIHRoIC5uZXN0ZWQtZ3JpZC1jb250YWluZXIgLnRhYmxlIHRyLCB0ZCAubmVzdGVkLWdyaWQtY29udGFpbmVyIC50YWJsZSB0ciB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSAxMCUgMTUlIDE1JSAxNSUgMTUlIDEwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAgIC50aGVtZS1leHRyYS1zbSB0aCAubmVzdGVkLWdyaWQtY29udGFpbmVyIC50YWJsZSB0ciwgLnRoZW1lLWV4dHJhLXNtIHRkIC5uZXN0ZWQtZ3JpZC1jb250YWluZXIgLnRhYmxlIHRyIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtOyB9XG4gICAgICAudGhlbWUtc20gdGggLm5lc3RlZC1ncmlkLWNvbnRhaW5lciAudGFibGUgdHIsIC50aGVtZS1zbSB0ZCAubmVzdGVkLWdyaWQtY29udGFpbmVyIC50YWJsZSB0ciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTsgfVxuICAgICAgLnRoZW1lLXJlZyB0aCAubmVzdGVkLWdyaWQtY29udGFpbmVyIC50YWJsZSB0ciwgLnRoZW1lLXJlZyB0ZCAubmVzdGVkLWdyaWQtY29udGFpbmVyIC50YWJsZSB0ciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45M3JlbTsgfVxuICAgICAgLnRoZW1lLWxnIHRoIC5uZXN0ZWQtZ3JpZC1jb250YWluZXIgLnRhYmxlIHRyLCAudGhlbWUtbGcgdGQgLm5lc3RlZC1ncmlkLWNvbnRhaW5lciAudGFibGUgdHIge1xuICAgICAgICBmb250LXNpemU6IDFyZW07IH1cbiAgICAgIC50aGVtZS1leHRyYS1sZyB0aCAubmVzdGVkLWdyaWQtY29udGFpbmVyIC50YWJsZSB0ciwgLnRoZW1lLWV4dHJhLWxnIHRkIC5uZXN0ZWQtZ3JpZC1jb250YWluZXIgLnRhYmxlIHRyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07IH1cbiAgICAgIHRoIC5uZXN0ZWQtZ3JpZC1jb250YWluZXIgLnRhYmxlIHRyIHRkLCB0ZCAubmVzdGVkLWdyaWQtY29udGFpbmVyIC50YWJsZSB0ciB0ZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxudGggLmZhLWFuZ2xlLWRvd24sIHRkIC5mYS1hbmdsZS1kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLnRoZW1lLWJsdWUgdGggLmZhLWFuZ2xlLWRvd24sIC50aGVtZS1ibHVlIHRkIC5mYS1hbmdsZS1kb3duIHtcbiAgICBjb2xvcjogIzI0NzI5NzsgfVxuICAudGhlbWUtb3JhbmdlIHRoIC5mYS1hbmdsZS1kb3duLCAudGhlbWUtb3JhbmdlIHRkIC5mYS1hbmdsZS1kb3duIHtcbiAgICBjb2xvcjogI2QxN2MzMjsgfVxuICAudGhlbWUtZ3JlZW4gdGggLmZhLWFuZ2xlLWRvd24sIC50aGVtZS1ncmVlbiB0ZCAuZmEtYW5nbGUtZG93biB7XG4gICAgY29sb3I6ICM1NThiMmY7IH1cbiAgLnRoZW1lLXB1cnBsZSB0aCAuZmEtYW5nbGUtZG93biwgLnRoZW1lLXB1cnBsZSB0ZCAuZmEtYW5nbGUtZG93biB7XG4gICAgY29sb3I6ICM4YjUwYTc7IH1cbiAgLnRoZW1lLWdyYXkgdGggLmZhLWFuZ2xlLWRvd24sIC50aGVtZS1ncmF5IHRkIC5mYS1hbmdsZS1kb3duIHtcbiAgICBjb2xvcjogIzg4ODg4ODsgfVxuICAudGhlbWUtc2lsdmVyIHRoIC5mYS1hbmdsZS1kb3duLCAudGhlbWUtc2lsdmVyIHRkIC5mYS1hbmdsZS1kb3duIHtcbiAgICBjb2xvcjogIzg4ODg4ODsgfVxuICB0aCAuZmEtYW5nbGUtZG93bjpub3QoLmNvbGxhcHNlZC1hcnJvdyksIHRkIC5mYS1hbmdsZS1kb3duOm5vdCguY29sbGFwc2VkLWFycm93KSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB1bmNvbGxhcHNlQXJyb3dBbmltYXRpb24gMC4yNXM7XG4gICAgYW5pbWF0aW9uOiB1bmNvbGxhcHNlQXJyb3dBbmltYXRpb24gMC4yNXM7IH1cbiAgdGggLmZhLWFuZ2xlLWRvd24uaW5pdGlhbC1hbmltYXRpb24tcHJldmVudGVkLCB0ZCAuZmEtYW5nbGUtZG93bi5pbml0aWFsLWFuaW1hdGlvbi1wcmV2ZW50ZWQge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMG1zOyB9XG4gIHRoIC5mYS1hbmdsZS1kb3duLmNvbGxhcHNlZC1hcnJvdywgdGQgLmZhLWFuZ2xlLWRvd24uY29sbGFwc2VkLWFycm93IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY29sbGFwc2VBcnJvd0FuaW1hdGlvbiAwLjI1cztcbiAgICBhbmltYXRpb246IGNvbGxhcHNlQXJyb3dBbmltYXRpb24gMC4yNXM7IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGNvbGxhcHNlQXJyb3dBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpOyB9IH1cblxuQGtleWZyYW1lcyBjb2xsYXBzZUFycm93QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKTsgfSB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyB1bmNvbGxhcHNlQXJyb3dBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpOyB9IH1cblxuQGtleWZyYW1lcyB1bmNvbGxhcHNlQXJyb3dBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpOyB9IH1cblxudGguZXhwYW5kYWJsZS1yb3csIHRkLmV4cGFuZGFibGUtcm93IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggLTNweCAzcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMTcpLCBpbnNldCAwcHggNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IC0zcHggM3B4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjE3KSwgaW5zZXQgMHB4IDVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggLTNweCAzcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMTcpLCBpbnNldCAwcHggNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIHBhZGRpbmc6IDIwcHg7IH1cbiAgLnRoZW1lLWJsdWUgdGguZXhwYW5kYWJsZS1yb3csIC50aGVtZS1ibHVlIHRkLmV4cGFuZGFibGUtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmMWY2O1xuICAgIGJhY2tncm91bmQ6ICNlYmYxZjY7IH1cbiAgLnRoZW1lLW9yYW5nZSB0aC5leHBhbmRhYmxlLXJvdywgLnRoZW1lLW9yYW5nZSB0ZC5leHBhbmRhYmxlLXJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZTRkYjtcbiAgICBiYWNrZ3JvdW5kOiAjZjBlNGRiOyB9XG4gIC50aGVtZS1ncmVlbiB0aC5leHBhbmRhYmxlLXJvdywgLnRoZW1lLWdyZWVuIHRkLmV4cGFuZGFibGUtcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlY2QzO1xuICAgIGJhY2tncm91bmQ6ICNkZmVjZDM7IH1cbiAgLnRoZW1lLXB1cnBsZSB0aC5leHBhbmRhYmxlLXJvdywgLnRoZW1lLXB1cnBsZSB0ZC5leHBhbmRhYmxlLXJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZTJlZTtcbiAgICBiYWNrZ3JvdW5kOiAjZThlMmVlOyB9XG4gIC50aGVtZS1ncmF5IHRoLmV4cGFuZGFibGUtcm93LCAudGhlbWUtZ3JheSB0ZC5leHBhbmRhYmxlLXJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyOyB9XG4gIC50aGVtZS1zaWx2ZXIgdGguZXhwYW5kYWJsZS1yb3csIC50aGVtZS1zaWx2ZXIgdGQuZXhwYW5kYWJsZS1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlMmUyZTIsICNmMmYyZjIpOyB9XG4gIHRoLmV4cGFuZGFibGUtcm93IHRoZWFkIHRyIHRoLCB0ZC5leHBhbmRhYmxlLXJvdyB0aGVhZCB0ciB0aCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLnRoZW1lLWV4dHJhLXNtIHRoLmV4cGFuZGFibGUtcm93IHRoZWFkIHRyIHRoLCAudGhlbWUtZXh0cmEtc20gdGQuZXhwYW5kYWJsZS1yb3cgdGhlYWQgdHIgdGgge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgICAudGhlbWUtc20gdGguZXhwYW5kYWJsZS1yb3cgdGhlYWQgdHIgdGgsIC50aGVtZS1zbSB0ZC5leHBhbmRhYmxlLXJvdyB0aGVhZCB0ciB0aCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAgIC50aGVtZS1yZWcgdGguZXhwYW5kYWJsZS1yb3cgdGhlYWQgdHIgdGgsIC50aGVtZS1yZWcgdGQuZXhwYW5kYWJsZS1yb3cgdGhlYWQgdHIgdGgge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgICAudGhlbWUtbGcgdGguZXhwYW5kYWJsZS1yb3cgdGhlYWQgdHIgdGgsIC50aGVtZS1sZyB0ZC5leHBhbmRhYmxlLXJvdyB0aGVhZCB0ciB0aCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAgIC50aGVtZS1leHRyYS1sZyB0aC5leHBhbmRhYmxlLXJvdyB0aGVhZCB0ciB0aCwgLnRoZW1lLWV4dHJhLWxnIHRkLmV4cGFuZGFibGUtcm93IHRoZWFkIHRyIHRoIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkOyB9XG4gICAgLnRoZW1lLWJsdWUgdGguZXhwYW5kYWJsZS1yb3cgdGhlYWQgdHIgdGgsIC50aGVtZS1ibHVlIHRkLmV4cGFuZGFibGUtcm93IHRoZWFkIHRyIHRoIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzgxYTY7IH1cbiAgICAudGhlbWUtb3JhbmdlIHRoLmV4cGFuZGFibGUtcm93IHRoZWFkIHRyIHRoLCAudGhlbWUtb3JhbmdlIHRkLmV4cGFuZGFibGUtcm93IHRoZWFkIHRyIHRoIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMDhiNDE7IH1cbiAgICAudGhlbWUtZ3JlZW4gdGguZXhwYW5kYWJsZS1yb3cgdGhlYWQgdHIgdGgsIC50aGVtZS1ncmVlbiB0ZC5leHBhbmRhYmxlLXJvdyB0aGVhZCB0ciB0aCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjg5ZjM4OyB9XG4gICAgLnRoZW1lLXB1cnBsZSB0aC5leHBhbmRhYmxlLXJvdyB0aGVhZCB0ciB0aCwgLnRoZW1lLXB1cnBsZSB0ZC5leHBhbmRhYmxlLXJvdyB0aGVhZCB0ciB0aCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmI3NmRiOyB9XG4gICAgLnRoZW1lLWdyYXkgdGguZXhwYW5kYWJsZS1yb3cgdGhlYWQgdHIgdGgsIC50aGVtZS1ncmF5IHRkLmV4cGFuZGFibGUtcm93IHRoZWFkIHRyIHRoIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7IH1cbiAgICAudGhlbWUtc2lsdmVyIHRoLmV4cGFuZGFibGUtcm93IHRoZWFkIHRyIHRoLCAudGhlbWUtc2lsdmVyIHRkLmV4cGFuZGFibGUtcm93IHRoZWFkIHRyIHRoIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7IH1cbiAgdGguZXhwYW5kYWJsZS1yb3cgdGJvZHkgdHIgdGQsIHRkLmV4cGFuZGFibGUtcm93IHRib2R5IHRyIHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XG4gIHRoLmV4cGFuZGFibGUtcm93IC50YWJsZSwgdGQuZXhwYW5kYWJsZS1yb3cgLnRhYmxlIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpOyB9XG4gIHRoLmV4cGFuZGFibGUtcm93Om5vdCguY29sbGFwc2VkLXJvdyksIHRkLmV4cGFuZGFibGUtcm93Om5vdCguY29sbGFwc2VkLXJvdykge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogdW5jb2xsYXBzZVJvd0FuaW1hdGlvbiAwLjVzO1xuICAgIGFuaW1hdGlvbjogdW5jb2xsYXBzZVJvd0FuaW1hdGlvbiAwLjVzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyB9XG4gICAgdGguZXhwYW5kYWJsZS1yb3c6bm90KC5jb2xsYXBzZWQtcm93KS5pbml0aWFsLWFuaW1hdGlvbi1wcmV2ZW50ZWQsIHRkLmV4cGFuZGFibGUtcm93Om5vdCguY29sbGFwc2VkLXJvdykuaW5pdGlhbC1hbmltYXRpb24tcHJldmVudGVkIHtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMG1zOyB9XG4gICAgdGguZXhwYW5kYWJsZS1yb3c6bm90KC5jb2xsYXBzZWQtcm93KS53YXNPcGVuZWQsIHRkLmV4cGFuZGFibGUtcm93Om5vdCguY29sbGFwc2VkLXJvdykud2FzT3BlbmVkIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHVuY29sbGFwc2VSb3dBbmltYXRpb24gMHM7XG4gICAgICBhbmltYXRpb246IHVuY29sbGFwc2VSb3dBbmltYXRpb24gMHM7IH1cbiAgdGguZXhwYW5kYWJsZS1yb3cuY29sbGFwc2VkLXJvdywgdGQuZXhwYW5kYWJsZS1yb3cuY29sbGFwc2VkLXJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIHRoLmV4cGFuZGFibGUtcm93LmNvbGxhcHNlZC1yb3cuaW5pdGlhbC1hbmltYXRpb24tcHJldmVudGVkLCB0ZC5leHBhbmRhYmxlLXJvdy5jb2xsYXBzZWQtcm93LmluaXRpYWwtYW5pbWF0aW9uLXByZXZlbnRlZCB7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDBtczsgfVxuICAgIHRoLmV4cGFuZGFibGUtcm93LmNvbGxhcHNlZC1yb3cud2FzT3BlbmVkLCB0ZC5leHBhbmRhYmxlLXJvdy5jb2xsYXBzZWQtcm93Lndhc09wZW5lZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGNvbGxhcHNlUm93QW5pbWF0aW9uIDAuMjVzO1xuICAgICAgYW5pbWF0aW9uOiBjb2xsYXBzZVJvd0FuaW1hdGlvbiAwLjI1cztcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyB9XG5cbkBrZXlmcmFtZXMgY29sbGFwc2VSb3dBbmltYXRpb24ge1xuICAwJSB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDsgfVxuICAxMDAlIHtcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDBweDsgfSB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyB1bmNvbGxhcHNlUm93QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMHB4OyB9XG4gIDEwMCUge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IH0gfVxuXG5Aa2V5ZnJhbWVzIHVuY29sbGFwc2VSb3dBbmltYXRpb24ge1xuICAwJSB7XG4gICAgbWF4LWhlaWdodDogMHB4O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwcHg7IH1cbiAgMTAwJSB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDsgfSB9XG5cbi50YWxsLXZpZXdwb3J0LnRhYmxlanMtaW5maW5pdGUtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7IH1cblxuLm5lc3RlZC12aWV3cG9ydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7IH1cbiAgLm5lc3RlZC12aWV3cG9ydCAuY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cbiAgLm5lc3RlZC12aWV3cG9ydC50YWJsZWpzLWluZmluaXRlLXNjcm9sbC12aWV3cG9ydCB7XG4gICAgbWF4LWhlaWdodDogMjEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7IH1cblxuLmNkay12aXJ0dWFsLXNjcm9sbC1zcGFjZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAtMTsgfVxuXG4uZHJhZy1hbmQtZHJvcC1naG9zdCAuc29ydC1pY29uIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG46Om5nLWRlZXAgLnBob25lLWZpbHRlci1iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsgfVxuXG46Om5nLWRlZXAgLnNlbGVjdGVkLWZpbHRlci1iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsgfVxuXG4uZXhwb3J0LXRvLWV4Y2VsLW92ZXJsYXktYmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cblxuLnByaW50LW92ZXJsYXktYmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDsgfVxuXG4uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7IH1cblxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7IH1cblxuLmN1c3RvbS10b29sdGlwIHtcbiAgLyogeW91ciBvd24gY3VzdG9tIHN0eWxlcyBoZXJlICovXG4gIC8qIGUuZy4gKi9cbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpOyB9XG4gIC5jdXN0b20tdG9vbHRpcDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICB0b3A6IDhweDtcbiAgICByaWdodDogLThweDtcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjYpOyB9XG5cbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE3cHg7IH1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwOyB9XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzOyB9XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEzcHg7XG4gIHdpZHRoOiAxM3B4O1xuICBsZWZ0OiAycHg7XG4gIGJvdHRvbTogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40czsgfVxuXG4udGhlbWUtYmx1ZSBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzYxODY7XG4gIGJhY2tncm91bmQ6ICMxMzYxODY7IH1cblxuLnRoZW1lLW9yYW5nZSBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDZiMjE7XG4gIGJhY2tncm91bmQ6ICNjMDZiMjE7IH1cblxuLnRoZW1lLWdyZWVuIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNjkxZTtcbiAgYmFja2dyb3VuZDogIzMzNjkxZTsgfVxuXG4udGhlbWUtcHVycGxlIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmNDA4NTtcbiAgYmFja2dyb3VuZDogIzZmNDA4NTsgfVxuXG4udGhlbWUtZ3JheSBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY7XG4gIGJhY2tncm91bmQ6ICM2NjY2NjY7IH1cblxuLnRoZW1lLXNpbHZlciBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjOTk5OTk5LCAjODg4ODg4KTsgfVxuXG4udGhlbWUtZXh0cmEtc20gaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweDsgfVxuXG4udGhlbWUtc20gaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweDsgfVxuXG4udGhlbWUtcmVnIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHg7IH1cblxuLnRoZW1lLWxnIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHg7IH1cblxuLnRoZW1lLWV4dHJhLWxnIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHg7IH1cblxuLnRoZW1lLWJsdWUgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMTM2MTg2OyB9XG5cbi50aGVtZS1vcmFuZ2UgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjYzA2YjIxOyB9XG5cbi50aGVtZS1ncmVlbiBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMzMzY5MWU7IH1cblxuLnRoZW1lLXB1cnBsZSBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICM2ZjQwODU7IH1cblxuLnRoZW1lLWdyYXkgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjNjY2NjY2OyB9XG5cbi50aGVtZS1zaWx2ZXIgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjNjY2NjY2OyB9XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzcHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTNweCk7IH1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTdweDsgfVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuIiwiLy8gY29tcG9uZW50LXNwZWNpZmljIHN0eWxlc1xuQGltcG9ydCAnLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5cbmgyIHtcblx0bWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5yZWQtdGV4dCB7XG5cdEBpbmNsdWRlIHRoZW1pZnkoJHRoZW1lcykge1xuXHRcdGNvbG9yOiB0aGVtZWQoJ29wZW5FcnJvclNvbGlkJyk7XG5cdH1cbn1cbi50by1mcm9udCB7XG5cdHotaW5kZXg6IDE7XG59XG5cbi50YWJsZSB7XG5cdG1hcmdpbi1ib3R0b206IDBweDtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdHRoZWFkIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0dHIge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdEBpbmNsdWRlIHRoZW1pZnkoJHRoZW1lcykge1xuXHRcdFx0XHRmb250LXNpemU6IHRoZW1lZCgndGFibGVGb250U2l6ZScpO1xuXHRcdFx0fVxuXHRcdFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdFx0XHRcblx0XHRcdHRoLCB0ZCB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHRoZW1lZCgnb3Blbkx0U29saWQnKTtcblx0XHRcdFx0XHRib3JkZXItbGVmdDogMXB4IHNvbGlkIHRoZW1lZCgnb3Blbkx0U29saWQnKTtcblx0XHRcdFx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0aGVtZWQoJ29wZW5MdFNvbGlkJyk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdGhlbWVkKCdvcGVuUmVnU29saWQnKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0aGVtZWQoJ29wZW5SZWcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG5cdFx0XHRcdGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG5cdFx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAwcmVtO1xuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMXJlbTtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdEBpbmNsdWRlIHRoZW1pZnkoJHRoZW1lcykge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogdGhlbWVkKCd0YWJsZUZvbnRTaXplJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cblx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB0aGVtZWQoJ3RhYmxlUGFkZGluZycpO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiB0aGVtZWQoJ3RhYmxlRm9udFNpemUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0Ym9keSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRyIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRAaW5jbHVkZSB0aGVtaWZ5KCR0aGVtZXMpIHtcblx0XHRcdFx0Zm9udC1zaXplOiB0aGVtZWQoJ3RhYmxlRm9udFNpemUnKTtcblx0XHRcdH1cblx0XHRcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXG5cdFx0XHR0aCwgdGQge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7XG5cdFx0XHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcblx0XHRcdFx0cGFkZGluZzogMHB4O1xuXHRcdFx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDByZW07XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxcmVtO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRAaW5jbHVkZSB0aGVtaWZ5KCR0aGVtZXMpIHtcblx0XHRcdFx0XHRmb250LXNpemU6IHRoZW1lZCgndGFibGVGb250U2l6ZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdEBpbmNsdWRlIHRoZW1pZnkoJHRoZW1lcykge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogdGhlbWVkKCd0YWJsZVBhZGRpbmcnKTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogdGhlbWVkKCd0YWJsZUZvbnRTaXplJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG5cdFx0XHRcdFx0Ji5zdGFyLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwcmVtO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEwMCU7XG5cdFx0XHRcdFx0XHQuZmEtc3RhciB7XG5cdFx0XHRcdFx0XHRcdEBpbmNsdWRlIHRoZW1pZnkoJHRoZW1lcykge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB0aGVtZWQoJ29wZW5VbHRyYUx0U29saWQnKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmLnN0YXItY29udGFpbmVyLW92ZXJsYXkge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0XHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBjbGlwO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDcyJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDByZW07XG5cdFx0XHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTAwJTtcblx0XHRcdFx0XHRcdC5mYS1zdGFyIHtcblx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHRoZW1lZCgnb3Blbkx0U29saWQnKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYuZXhwYW5kLWNvbnRlbnQge1xuXHRcdFx0XHRcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuXHRcdFx0XHRcdGdyaWQtY29sdW1uLWVuZDogMTI7XG5cdFx0XHRcdFx0b3JkZXI6IDExO1xuXHRcdFx0XHRcdGJvcmRlcjogMHB4O1xuXG5cdFx0XHRcdFx0PiBkaXYge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRoZW1lZCgnb3BlblVsdHJhTHRTb2xpZCcpO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0aGVtZWQoJ29wZW5VbHRyYUx0Jyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmNvbGxhcHNlZCB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZGl2Om5vdCguY29sbGFwc2VkKSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHRcdFx0XHQmLnN0YXItY29udGFpbmVyLW92ZXJsYXkge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQmLnByb2R1Y3QtcmF0aW5nLWNvbCB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ji5zZWxlY3RlZCB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7XG5cblx0XHRcdFx0dGQsIHRoIHtcblx0XHRcdFx0XHQmLmV4cGFuZC1jb250ZW50IHtcblx0XHRcdFx0XHRcdD4gZGl2IHtcblx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTllOWU5O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxufVxuXG4udGV4dC1jZW50ZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudFxufVxuXG5AaW5jbHVkZSB0aGVtaWZ5KCR0aGVtZXMpIHsgXG5cdGNvbG9yOiB0aGVtZWQoJ2NvbG9yJyk7ICBcbiAgfVxuXG4uZW5hYmxlLW1lbnUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRAaW5jbHVkZSB0aGVtaWZ5KCR0aGVtZXMpIHtcblx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgdGhlbWVkKCdvcGVuUmVnU29saWQnKTtcblx0fVxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiA2M3B4O1xuXHR6LWluZGV4OiAxMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblxuXHRzcGFuIHtcblx0XHRwYWRkaW5nLXJpZ2h0OjI1cHg7XG5cdH1cblx0LmVuYWJsZS1sYWJlbHMge1xuXHRcdHBhZGRpbmctcmlnaHQ6IDhweDtcblx0fVxuXHQuZm9ybS1jb250cm9sIHtcblx0XHQmLm1lbnUge1xuXHRcdFx0dG9wOiAtNTBweDtcblx0XHRcdGxlZnQ6IDM1MHB4O1xuXHRcdH1cblx0fVxufVxuXG4uZGF0YS1vcHRpb25zIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzogMjBweDtcblx0cGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uZGF0YS1sYWJlbHMge1xuXHRwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uZGF0YS1zZWxlY3Qge1xuXHRwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuLnRyYW5zYWN0aW9uLXNlbGVjdCB7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuXHRpbnB1dCB7XG5cdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHRmb250LXNpemU6IHRoZW1lZCgndGFibGVGb250U2l6ZScpO1xuXHRcdH1cblx0fVxufVxuLnByaW50aW5nIHtcblx0LnRyYW5zYWN0aW9uLXNlbGVjdCB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuLmdyaWQtZnVuY3Rpb25zIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzogMjBweDtcblx0cGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwKTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0b3ZlcmZsb3cteDogc2Nyb2xsO1xuXHRtYXJnaW46IDIwcHg7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG5cdEBpbmNsdWRlIHRoZW1pZnkoJHRoZW1lcykge1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkIHRoZW1lZCgnb3BlblJlZ1NvbGlkJyk7XG5cdH1cbn1cbi5leHBvcnQtY29udGFpbmVyIHtcblx0cmlnaHQ6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucHJpbnQtY29udGFpbmVyIHtcblx0cmlnaHQ6IDEzMHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFxuXHQuZmEtcHJpbnQge1xuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0fVxufVxuXG5kaXYge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGFibGUge1xuIG1hcmdpbi1ib3R0b206IDByZW07XG4gYm9yZGVyLXNwYWNpbmc6IDBweCAhaW1wb3J0YW50O1xuIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDtcbn1cblxudGFibGUgdGhlYWQgdGgge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGhlaWdodDogYXV0bztcbn1cblxudHIgdGQsIHRyIHRoIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0XG5cdGRpdiB7XG5cdFx0Ji5pdGVtLW5hbWUge1xuXHRcdFx0d2lkdGg6IDE4MHB4O1xuXHRcdH1cblx0XHQmLml0ZW0tcXVhbnRpdHkge1xuXHRcdFx0d2lkdGg6IDE4MHB4O1x0XG5cdFx0fVxuXHRcdCYuaXRlbS1wcmljZSB7XG5cdFx0XHR3aWR0aDogMTQwcHg7XG5cdFx0fVxuXHRcdCYuaXRlbS1zaGlwcGluZyB7XG5cdFx0XHR3aWR0aDogMTQwcHg7XG5cdFx0fVxuXHRcdCYuaXRlbS10YXhlcyB7XG5cdFx0XHR3aWR0aDogMTYwcHg7XG5cdFx0fVxuXHRcdCYuaXRlbS1wcm9maXQge1xuXHRcdFx0d2lkdGg6IDE2MHB4O1xuXHRcdH1cblx0XHQmLml0ZW0tcmF0aW5nIHtcblx0XHRcdHdpZHRoOiAxNjBweDtcblx0XHR9XG5cdH1cbn1cblxudHIgdGQgZGl2LCB0ciB0aCBkaXYge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cblx0LnN0eWxlZC1jaGVja2JveCArIGxhYmVsIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtMXB4KTtcblx0XHRkaXNwbGF5OiBibG9jaztcblxuXHRcdCYuc2hpZnQge1xuXHRcdFx0bGVmdDogMjUlO1xuXHRcdH1cblx0fVxuXG5cdCYuZXhwYW5kLWNvbCB7XG5cdFx0dGV4dC1vdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcblx0XHR3aWR0aDogNDBweDtcblx0XHRwYWRkaW5nLWxlZnQ6IDFyZW07XG5cdH1cblx0Ji5zZWxlY3Qtcm93LWNvbCB7XG5cdFx0dGV4dC1vdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcblx0XHR3aWR0aDogODBweDtcblx0XHRcblx0XHQuc29ydC1pY29uIHtcblx0XHRcdHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRsZWZ0OiB1bnNldDtcblx0XHRcdHJpZ2h0OiAwcHg7XG5cdFx0fVxuXHR9XG5cdCYubGFiZWwtY29sIHtcblx0XHR3aWR0aDozMDBweDtcblx0fVxuXHQmLmlkLWNvbCB7XG5cdFx0d2lkdGg6MTIwcHg7XG5cdH1cblx0Ji5uYW1lLWNvbCB7XG5cdFx0d2lkdGg6MjIwcHg7XG5cdH1cblx0Ji5lbWFpbC1jb2wge1xuXHRcdHdpZHRoOjI1MHB4O1xuXHRcdHNwYW4ge1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdH1cblx0fVxuXHQmLnBob25lLWNvbCB7XG5cdFx0d2lkdGg6MjAwcHg7XG5cdH1cblx0Ji5yYXRpbmctY29sIHtcblx0XHR3aWR0aDoxOTBweDtcblx0fVxuXHQmLnRvdGFsLXNhbGVzLWNvbCB7XG5cdFx0d2lkdGg6MTcwcHg7XG5cdH1cblx0Ji50b3RhbC1pdGVtLXNhbGVzLWNvbCB7XG5cdFx0d2lkdGg6MTcwcHg7XG5cdH1cblx0Ji5ncm9zcy1jb2wge1xuXHRcdHdpZHRoOjIxMHB4O1xuXHR9XG5cdCYubmV0LWNvbCB7XG5cdFx0d2lkdGg6MjIwcHg7XG5cdH1cblxuXHQmLnByb2R1Y3QtbmFtZS1jb2wge1xuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdH1cblx0Ji5wcm9kdWN0LXF1YW50aXR5LWNvbCB7XG5cdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0fVxuXHQmLnByb2R1Y3QtYmFzZS1wcmljZS1jb2wge1xuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdH1cblx0Ji5wcm9kdWN0LXNhbGUtcHJpY2UtY29sIHtcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHR9XG5cdCYucHJvZHVjdC1zaGlwcGluZy1jb3N0LWNvbCB7XG5cdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0fVxuXHQmLnByb2R1Y3QtcHJvZml0LWNvbCB7XG5cdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0fVxuXHQmLnByb2R1Y3QtcmF0aW5nLWNvbCB7XG5cdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0fVxuXG5cblxuXG5cdHRhYmxlanMtaG9yaXotcmVzaXplLWdyaXAge1xuXHRcdG9wYWNpdHk6IDAuNTtcblx0fVxuXHQmOmhvdmVyIHtcblx0XHR0YWJsZWpzLWhvcml6LXJlc2l6ZS1ncmlwIHtcblx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0fVxuXHR9XG59XG4udGFibGUtYm9yZGVyZWQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4vLyBvdmVycmlkZSBldmVuIC8gb2RkIHN0eWxlc1xuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSwgLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUoZXZlbikge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0Ji5vZGQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xuXHRcdH1cblx0fVxuXHQmLmV2ZW4ge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuXHRcdH1cblx0fVxufVxuXG50aCwgdGQge1xuXHQudGFibGVqcy1lZGl0YWJsZS1jZWxsIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHR3aWR0aDogdGhlbWVkKCdlZGl0YWJsZVdpZHRoT2Zmc2V0Jyk7XG5cdFx0XHRwYWRkaW5nLXRvcDogdGhlbWVkKCdlZGl0YWJsZVZlcnRpY2FsUGFkZGluZycpO1xuXHRcdFx0cGFkZGluZy1ib3R0b206IHRoZW1lZCgnZWRpdGFibGVWZXJ0aWNhbFBhZGRpbmcnKTtcblx0XHR9XG5cdFx0bWFyZ2luLWxlZnQ6IDBweDtcblx0XHRtYXJnaW46IDBweDtcblx0XHR0b3A6IDUwJTtcblx0XHRsZWZ0OiA1MCU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XG5cdFx0ZGl2IHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRsZWZ0OiAwcHg7XG5cdFx0XHRvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuXHRcdFx0aW5wdXQge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcblx0XHRcdFx0Zm9udC1zaXplOiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDNweDtcblx0XHRcdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IHRoZW1lZCgnZWRpdGFibGVJbnB1dFZlcnRpY2FsUGFkZGluZycpO1xuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiB0aGVtZWQoJ2VkaXRhYmxlSW5wdXRWZXJ0aWNhbFBhZGRpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IC04cHg7XG5cdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ji50YWJsZWpzLXNvcnRhYmxlIHtcblx0XHRjdXJzb3I6IG5zLXJlc2l6ZTtcblxuXHRcdC5zb3J0LWljb24ge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdFx0XHR0b3A6IDBweDtcblx0XHRcdGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuXHRcdFx0d2lkdGg6IDY1cHggIWltcG9ydGFudDtcblx0XHRcdGxlZnQ6IHVuc2V0O1xuXHRcdFx0cmlnaHQ6IDBweDtcblxuXHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHRcdFx0XHR0b3A6IGNhbGMoNTAlIC0gOHB4KTtcblx0XHRcdFx0cmlnaHQ6IDEwcHg7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG5cdFx0XHRcdGNvbnRlbnQ6ICdcXGYzMzgnO1xuXHRcdFx0XHRmb250LXdlaWdodDogOTAwOyBcblx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHR9XG5cblx0XHRcdCYuc29ydC1kb3duIHtcblx0XHRcdFx0JjphZnRlcntcblx0XHRcdFx0XHRjb250ZW50OidcXGYzMDknO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQmLnNvcnQtdXAge1xuXHRcdFx0XHQmOmFmdGVye1xuXHRcdFx0XHRcdGNvbnRlbnQ6J1xcZjMwYyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XG5cdFx0XHQmLnNvcnQtc2hpZnQge1xuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRyaWdodDogMzBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5jdXN0b20tc29ydCB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXG5cdFx0XHRcdGkge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRyaWdodDogMjVweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0dG9wOiBjYWxjKDUwJSAtIDZweCk7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdCYuc29ydC1zaGlmdCB7XG5cdFx0XHRcdFx0aSB7XG5cdFx0XHRcdFx0XHRyaWdodDogNDVweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ji5jdXN0b20tc29ydCB7XG5cdFx0XHRcdFx0XHRpIHtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDQ1cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdCZbcmVvcmRlckNvbF0ge1xuXHRcdCYuaGlnaGxpZ2h0LWxlZnQge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0b3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcblx0XHR9XG5cdFx0Ji5oaWdobGlnaHQtbGVmdCBkaXYsICYuaGlnaGxpZ2h0LXJpZ2h0IGRpdiB7XG5cdFx0XHRvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuXHRcdH1cblx0XHQmLmhpZ2hsaWdodC1sZWZ0IGRpdjphZnRlciwgJi5oaWdobGlnaHQtcmlnaHQgZGl2OmFmdGVyIHtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAxMjIsIDEyMiwgMC4wNSk7XG5cdFx0XHRoZWlnaHQ6IDQwNHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR0b3A6IDBweDtcblx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdHotaW5kZXg6IDU7XG5cdFx0fVxuXHRcblx0XHQmLmhpZ2hsaWdodC1sZWZ0IGRpdiB7XG5cdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuXHRcdFx0XHRjb250ZW50OiAnXFxmMTAzJztcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDkwMDsgXG5cdFx0XHRcdGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcblx0XHRcdFx0Ym9yZGVyLWxlZnQtd2lkdGg6IDFweDtcblx0XHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweDtcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblxuXHRcdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMC41cyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xuXHRcdFx0XHRhbmltYXRpb246IG1vdmVyIDAuNXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcblx0XHRcblx0XHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgM3B4IDAgM3B4IC0zcHggcmdiYSgwLDAsMCwwLjQpO1xuXG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0Ji5zb3J0LWljb24ge1xuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCYuaGlnaGxpZ2h0LXJpZ2h0IGRpdiB7XG5cdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuXHRcdFx0XHRjb250ZW50OiAnXFxmMTAzJztcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDkwMDsgXG5cdFx0XHRcdGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG5cdFx0XHRcdGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xuXHRcdFx0XHRib3JkZXItcmlnaHQtY29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXG5cdFx0XHRcdC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAwLjVzIGluZmluaXRlICBhbHRlcm5hdGU7XG5cdFx0XHRcdGFuaW1hdGlvbjogbW92ZXIgMC41cyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xuXHRcdFxuXHRcdFx0XHRib3gtc2hhZG93OiBpbnNldCAtM3B4IDAgM3B4IC0zcHggcmdiYSgwLDAsMCwwLjQpO1xuXHRcdFx0fVxuXHRcdFx0Ji5zb3J0LWljb24ge1xuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdEAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG5cdFx0XHQwJSB7IHBhZGRpbmctdG9wOiA0cHg7IH1cblx0XHRcdDEwMCUgeyBwYWRkaW5nLXRvcDogMTBweDsgfVxuXHRcdH1cblx0XHRAa2V5ZnJhbWVzIG1vdmVyIHtcblx0XHRcdDAlIHsgcGFkZGluZy10b3A6IDRweDsgfVxuXHRcdFx0MTAwJSB7IHBhZGRpbmctdG9wOiAxMHB4OyB9XG5cdFx0fVxuXHR9XG5cblx0Lm5lc3RlZC1ncmlkLWNvbnRhaW5lciB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAyMCk7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRvdmVyZmxvdy14OiBzY3JvbGw7XG5cdFx0bWFyZ2luOiAwcHg7XG5cdFx0Ym9yZGVyOiAwcHg7XG5cdFx0XG5cdFx0OjpuZy1kZWVwIC50YWJsZWpzLXRhYmxlLXdpZHRoIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0cGFkZGluZzogMHB4O1x0XG5cdFx0fVxuXG5cdFx0LnRhYmxlIHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdHRyIHtcblx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgMTAlIDE1JSAxNSUgMTUlIDE1JSAxMCU7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdEBpbmNsdWRlIHRoZW1pZnkoJHRoZW1lcykge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogdGhlbWVkKCd0YWJsZUZvbnRTaXplJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGQge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuZmEtYW5nbGUtZG93biB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR0b3A6IDUwJTtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHRjb2xvcjogdGhlbWVkKCdvcGVuUmVnU29saWQnKTtcblx0XHR9XG5cblx0XHQmOm5vdCguY29sbGFwc2VkLWFycm93KSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG5cdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogdW5jb2xsYXBzZUFycm93QW5pbWF0aW9uIDAuMjVzO1xuXHRcdFx0YW5pbWF0aW9uOiB1bmNvbGxhcHNlQXJyb3dBbmltYXRpb24gMC4yNXM7XG5cdFx0fVxuXHRcdCYuaW5pdGlhbC1hbmltYXRpb24tcHJldmVudGVkIHtcblx0XHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogMG1zO1xuXHRcdH1cblx0XHQmLmNvbGxhcHNlZC1hcnJvdyB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKTs7XG5cdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogY29sbGFwc2VBcnJvd0FuaW1hdGlvbiAwLjI1cztcblx0XHRcdGFuaW1hdGlvbjogY29sbGFwc2VBcnJvd0FuaW1hdGlvbiAwLjI1cztcblx0XHR9XG5cdH1cblxuXHRALXdlYmtpdC1rZXlmcmFtZXMgY29sbGFwc2VBcnJvd0FuaW1hdGlvbiB7XG5cdFx0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7IH1cblx0XHQxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZyk7IH1cblx0fVxuXHRAa2V5ZnJhbWVzIGNvbGxhcHNlQXJyb3dBbmltYXRpb24ge1xuXHRcdDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpOyB9XG5cdFx0MTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpOyB9XG5cdH1cblxuXHRALXdlYmtpdC1rZXlmcmFtZXMgdW5jb2xsYXBzZUFycm93QW5pbWF0aW9uIHtcblx0XHQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpOyB9XG5cdFx0MTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTsgfVxuXHR9XG5cdEBrZXlmcmFtZXMgdW5jb2xsYXBzZUFycm93QW5pbWF0aW9uIHtcblx0XHQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpOyB9XG5cdFx0MTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTsgfVxuXHR9XG5cblx0Ji5leHBhbmRhYmxlLXJvdyB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRkaXNwbGF5OiBub25lO1xuXHRcdEBpbmNsdWRlIHRoZW1pZnkoJHRoZW1lcykge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdGhlbWVkKCdvcGVuVWx0cmFMdFNvbGlkJyk7XG5cdFx0XHRiYWNrZ3JvdW5kOiB0aGVtZWQoJ29wZW5VbHRyYUx0Jyk7XG5cdFx0fVxuXHRcdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IC0zcHggM3B4IC0zcHggcmdiYSgwLDAsMCwwLjE3KSwgaW5zZXQgMHB4IDVweCA1cHggLTVweCByZ2JhKDAsMCwwLDAuMTcpO1xuXHRcdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IC0zcHggM3B4IC0zcHggcmdiYSgwLDAsMCwwLjE3KSwgaW5zZXQgMHB4IDVweCA1cHggLTVweCByZ2JhKDAsMCwwLDAuMTcpO1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAtM3B4IDNweCAtM3B4IHJnYmEoMCwwLDAsMC4xNyksIGluc2V0IDBweCA1cHggNXB4IC01cHggcmdiYSgwLDAsMCwwLjE3KTtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFxuXHRcdHRoZWFkIHtcblx0XHRcdHRyIHtcblx0XHRcdFx0dGgge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRAaW5jbHVkZSB0aGVtaWZ5KCR0aGVtZXMpIHtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHRoZW1lZCgnb3Blbkx0U29saWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0dGJvZHkge1xuXHRcdFx0dHIge1xuXHRcdFx0XHR0ZCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQudGFibGUge1xuXHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuXHRcdH1cblxuXHRcdCY6bm90KC5jb2xsYXBzZWQtcm93KSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdG1heC1oZWlnaHQ6IDYwMHB4O1xuXHRcdFx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogdW5jb2xsYXBzZVJvd0FuaW1hdGlvbiAwLjVzO1xuXHRcdFx0YW5pbWF0aW9uOiB1bmNvbGxhcHNlUm93QW5pbWF0aW9uIDAuNXM7XG5cdFx0XHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcblxuXHRcdFx0Ji5pbml0aWFsLWFuaW1hdGlvbi1wcmV2ZW50ZWQge1xuXHRcdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDBtcztcblx0XHRcdH1cblx0XHRcdCYud2FzT3BlbmVkIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdC13ZWJraXQtYW5pbWF0aW9uOiB1bmNvbGxhcHNlUm93QW5pbWF0aW9uIDBzO1xuXHRcdFx0XHRhbmltYXRpb246IHVuY29sbGFwc2VSb3dBbmltYXRpb24gMHM7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdCYuY29sbGFwc2VkLXJvdyB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0bWF4LWhlaWdodDogMHB4O1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdCYuaW5pdGlhbC1hbmltYXRpb24tcHJldmVudGVkIHtcblx0XHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAwbXM7XG5cdFx0XHR9XG5cblx0XHRcdCYud2FzT3BlbmVkIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXHRcdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogY29sbGFwc2VSb3dBbmltYXRpb24gMC4yNXM7XG5cdFx0XHRcdGFuaW1hdGlvbjogY29sbGFwc2VSb3dBbmltYXRpb24gMC4yNXM7XG5cdFx0XHRcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdEBrZXlmcmFtZXMgY29sbGFwc2VSb3dBbmltYXRpb24ge1xuXHRcdDAlIHtcblx0XHRcdG1heC1oZWlnaHQ6IDIwMHB4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuXHRcdFx0Ym9yZGVyLXRvcC13aWR0aDogMXB4O1xuXHRcdH1cblx0XHQxMDAlIHsgXG5cdFx0XHRtYXgtaGVpZ2h0OiAwcHg7XG5cdFx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG5cdFx0XHRib3JkZXItdG9wLXdpZHRoOiAwcHg7XG5cdFx0fVxuXHR9XG5cblx0QC13ZWJraXQta2V5ZnJhbWVzIHVuY29sbGFwc2VSb3dBbmltYXRpb24ge1xuXHRcdDAlIHtcblx0XHRcdG1heC1oZWlnaHQ6IDBweDtcblx0XHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcblx0XHRcdGJvcmRlci10b3Atd2lkdGg6IDBweDtcblx0XHR9XG5cdFx0MTAwJSB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAyMDBweDtcblx0XHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcblx0XHRcdGJvcmRlci10b3Atd2lkdGg6IDFweDtcblx0XHR9XG5cdH1cblx0QGtleWZyYW1lcyB1bmNvbGxhcHNlUm93QW5pbWF0aW9uIHtcblx0XHQwJSB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAwcHg7XG5cdFx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG5cdFx0XHRib3JkZXItdG9wLXdpZHRoOiAwcHg7XG5cdFx0fVxuXHRcdDEwMCUge1xuXHRcdFx0bWF4LWhlaWdodDogMjAwcHg7XG5cdFx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG5cdFx0XHRib3JkZXItdG9wLXdpZHRoOiAxcHg7XG5cdFx0fVxuXHR9XG5cdFxufVxuXG4udGFsbC12aWV3cG9ydCB7XG5cdCYudGFibGVqcy1pbmZpbml0ZS1zY3JvbGwtdmlld3BvcnQge1xuXHRcdGhlaWdodDogNDUwcHg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcblx0fVxuXHRcbn1cblxuLm5lc3RlZC12aWV3cG9ydCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cblx0LmNkay12aXJ0dWFsLXNjcm9sbC1jb250ZW50LXdyYXBwZXIge1xuXHRcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXHR9XG5cdCYudGFibGVqcy1pbmZpbml0ZS1zY3JvbGwtdmlld3BvcnQge1xuXHRcdG1heC1oZWlnaHQ6IDIxMHB4O1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XG5cdH1cbn1cblxuLmNkay12aXJ0dWFsLXNjcm9sbC1zcGFjZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuXHR6LWluZGV4OiAtMTtcbn1cblxuLy8gc3RhcnQgY29sdW1uIGRyYWcgYW5kIGRyb3AgZ2hvc3Qgc3R5bGVzXG4uZHJhZy1hbmQtZHJvcC1naG9zdCB7XG5cdC5zb3J0LWljb24ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cbi8vIGVuZCBjb2x1bW4gZHJhZyBhbmQgZHJvcCBnaG9zdCBzdHlsZXNcblxuOjpuZy1kZWVwIC5waG9uZS1maWx0ZXItYmcge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMHB4O1xuXHRsZWZ0OiAwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wKTtcbn1cblxuOjpuZy1kZWVwIC5zZWxlY3RlZC1maWx0ZXItYmcge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMHB4O1xuXHRsZWZ0OiAwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wKTtcbn1cblxuLmV4cG9ydC10by1leGNlbC1vdmVybGF5LWJnIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDBweDtcblx0bGVmdDogMHB4O1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4ucHJpbnQtb3ZlcmxheS1iZyB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwcHg7XG5cdGxlZnQ6IDBweDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bGVmdDogMHB4O1xuXHR0b3A6IDBweDtcbn1cbi5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bGVmdDogMHB4O1xuXHR0b3A6IDBweDtcbn1cbi5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcblx0cG9zaXRpb246IGZpeGVkO1xufVxuLmN1c3RvbS10b29sdGlwIHtcblx0LyogeW91ciBvd24gY3VzdG9tIHN0eWxlcyBoZXJlICovIFxuXHQvKiBlLmcuICovXG5cdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG5cdG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcblx0JjphZnRlciB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHdpZHRoOiAwOyBcblx0XHRoZWlnaHQ6IDA7IFxuXHRcdHRvcDogOHB4O1xuXHRcdHJpZ2h0OiAtOHB4O1xuXHRcdGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XG5cdFx0Ym9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKDAsMCwwLDAuNik7XG5cdH1cblx0XG59XG4vLyBzdGFydCBzd2l0Y2ggY3NzXG5cbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4uc3dpdGNoIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiAzMHB4O1xuXHRoZWlnaHQ6IDE3cHg7XG4gIH1cbiAgXG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4gIC5zd2l0Y2ggaW5wdXQge1xuXHRvcGFjaXR5OiAwO1xuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAwO1xuICB9XG4gIFxuICAvKiBUaGUgc2xpZGVyICovXG4gIC5zbGlkZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC40cztcblx0dHJhbnNpdGlvbjogLjRzO1xuICB9XG4gIFxuICAuc2xpZGVyOmJlZm9yZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29udGVudDogXCJcIjtcblx0aGVpZ2h0OiAxM3B4O1xuXHR3aWR0aDogMTNweDtcblx0bGVmdDogMnB4O1xuXHRib3R0b206IDJweDtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuXHR0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcblx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdGhlbWVkKCdvcGVuRGtTb2xpZCcpO1xuXHRcdGJhY2tncm91bmQ6IHRoZW1lZCgnb3BlbkRrJyk7XG5cdH1cbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcblx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDFweCB0aGVtZWQoJ29wZW5Ea1NvbGlkJyk7XG5cdH1cbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTNweCk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTNweCk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxM3B4KTtcbiAgfVxuICBcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXG4gIC5zbGlkZXIucm91bmQge1xuXHRib3JkZXItcmFkaXVzOiAxN3B4O1xuICB9XG4gIFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4vLyBlbmQgc3dpdGNoIGNzc1xuIl19 */"

/***/ }),

/***/ "./src/app/components/grid-example/grid-example.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/grid-example/grid-example.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const overlay_1 = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
const portal_1 = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
const cell_validator_service_1 = __webpack_require__(/*! ./../../services/cell-validator/cell-validator.service */ "./src/app/services/cell-validator/cell-validator.service.ts");
const scrolling_1 = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
const phone_filter_component_1 = __webpack_require__(/*! ./../phone-filter/phone-filter.component */ "./src/app/components/phone-filter/phone-filter.component.ts");
const selected_filter_component_1 = __webpack_require__(/*! ./../selected-filter/selected-filter.component */ "./src/app/components/selected-filter/selected-filter.component.ts");
const filter_overlay_tokens_1 = __webpack_require__(/*! ./../phone-filter/filters/filter-overlay-tokens */ "./src/app/components/phone-filter/filters/filter-overlay-tokens.ts");
const print_overlay_tokens_1 = __webpack_require__(/*! ./../print-overlay/print/print-overlay-tokens */ "./src/app/components/print-overlay/print/print-overlay-tokens.ts");
const export_to_excel_overlay_tokens_1 = __webpack_require__(/*! ./../export-to-excel-overlay/export/export-to-excel-overlay-tokens */ "./src/app/components/export-to-excel-overlay/export/export-to-excel-overlay-tokens.ts");
const selected_overlay_tokens_1 = __webpack_require__(/*! ./../selected-filter/selected/selected-overlay-tokens */ "./src/app/components/selected-filter/selected/selected-overlay-tokens.ts");
const filter_service_1 = __webpack_require__(/*! ./../../services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
const grid_data_service_1 = __webpack_require__(/*! ./../../services/grid-data/grid-data.service */ "./src/app/services/grid-data/grid-data.service.ts");
const filter_type_1 = __webpack_require__(/*! ../../shared/classes/filter-type */ "./src/app/shared/classes/filter-type.ts");
const theme_service_1 = __webpack_require__(/*! ./../../services/theme/theme.service */ "./src/app/services/theme/theme.service.ts");
const print_overlay_component_1 = __webpack_require__(/*! ./../print-overlay/print-overlay.component */ "./src/app/components/print-overlay/print-overlay.component.ts");
const export_to_excel_overlay_component_1 = __webpack_require__(/*! ./../export-to-excel-overlay/export-to-excel-overlay.component */ "./src/app/components/export-to-excel-overlay/export-to-excel-overlay.component.ts");
const transaction_grid_component_1 = __webpack_require__(/*! ./transaction-grid/transaction-grid.component */ "./src/app/components/grid-example/transaction-grid/transaction-grid.component.ts");
const excel_service_1 = __webpack_require__(/*! ./../../services/excel/excel.service */ "./src/app/services/excel/excel.service.ts");
let GridExampleComponent = class GridExampleComponent {
    constructor(cellValidatorService, overlay, injector, filterService, gridDataService, themeService, excelService, cdr) {
        this.cellValidatorService = cellValidatorService;
        this.overlay = overlay;
        this.injector = injector;
        this.filterService = filterService;
        this.gridDataService = gridDataService;
        this.themeService = themeService;
        this.excelService = excelService;
        this.cdr = cdr;
        this.window = window;
        this.resizeEnabled = false;
        this.reorderEnabled = false;
        this.editableCellsEnabled = false;
        this.sortableColumnsEnabled = false;
        this.baseItems = [];
        this.preventInitialAnimation = true;
        this.sortDirection = 1;
        this.selectedRowVisibilityOptions = [true, false];
        this.filterOptions = [];
        this.defaultSelectValue = 1000;
        this.printing = false;
        this.rowsChecked = 0;
    }
    ngOnInit() {
        this.selectedAreaCodes = this.gridDataService.areaCodes.concat();
        this.setItems(this.defaultSelectValue);
    }
    ngAfterViewInit() {
    }
    onKeydownHandler(event) {
        if (event.metaKey || event.ctrlKey) {
            if (event.key.toLowerCase() === 'p') {
                event.preventDefault();
                this.openPrintOverlay();
            }
        }
    }
    beforePrint() {
    }
    afterPrint() {
        this.resetItemsAfterPrint();
    }
    resetItemsAfterPrint() {
        this.printing = false;
        const items = this.printItems;
        this.sortedAndFilteredItems = [];
        setTimeout(() => {
            this.sortedAndFilteredItems = items;
            this.sortedAndFilteredItems.forEach(item => {
                item.printing = false;
                item.collapsed = item.wasCollapsedBeforePrint !== false;
            });
            this.cdr.detectChanges();
        }, 1);
    }
    print(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.openPrintPreview();
    }
    exportToExcel(e) {
        this.openExportToExcelOverlay();
    }
    openPrintPreview() {
        clearInterval(this.printPreviewInterval);
        this.openPrintOverlay();
    }
    setItems(itemCount) {
        this.baseItems = this.gridDataService.generateGridData(itemCount);
        this.baseItems.forEach(item => {
            item.selected = false;
            item.printing = false;
        });
        this.sortedAndFilteredItems = this.baseItems;
        if (!!this.lastSortVarName) {
            this.sortDirection *= -1;
            this.sortByVar(this.lastSortVarName);
        }
    }
    filterGridByText(e) {
        const target = e.target;
        let filterOption = {
            varName: null,
            filterType: filter_type_1.FilterType.EXISTS_IN_TEXT,
            validFilterValues: [target.value]
        };
        let existingFilter = this.filterService.getExistingFilter(this.filterOptions, filterOption);
        if (existingFilter) {
            existingFilter.validFilterValues = [target.value];
        }
        else {
            this.filterOptions.push(filterOption);
        }
        this.sortedAndFilteredItems = this.filterItems(this.baseItems, this.filterOptions);
        if (!!this.lastSortVarName) {
            this.sortDirection *= -1;
            this.sortByVar(this.lastSortVarName);
        }
        if (this.mainViewPort) {
            this.mainViewPort.scrollToOffset(0);
        }
    }
    filterItems(arr, filterOptions) {
        let copyArr = arr.concat();
        const len = filterOptions.length;
        for (let i = 0; i < len; i++) {
            const filterOption = filterOptions[i];
            copyArr = this.filterService.filter(copyArr, filterOption);
        }
        return copyArr;
    }
    calculateUserRatingPerc(rating) {
        return rating / 5;
    }
    getRoundedRatingText(rating) {
        rating = Math.round(rating) / 100;
        let starText = ' star';
        if (rating !== 1) {
            starText += 's';
        }
        return (rating).toString() + starText;
    }
    rowsSelected(e) {
        const target = e.target;
        this.setItems(Number(target.value));
        this.mainViewPort.scrollToOffset(0);
    }
    themeColorSelected(e) {
        const target = e.target;
        this.themeService.setThemeColor(target.value);
    }
    themeSizeSelected(e) {
        const target = e.target;
        this.themeService.setThemeSize(target.value);
    }
    toggleResize(e) {
        this.resizeEnabled = !this.resizeEnabled;
    }
    toggleReorder(e) {
        this.reorderEnabled = !this.reorderEnabled;
    }
    toggleCellEditability(e) {
        this.editableCellsEnabled = !this.editableCellsEnabled;
    }
    toggleColumnSortability(e) {
        this.sortableColumnsEnabled = !this.sortableColumnsEnabled;
    }
    toggleCollapse(item) {
        item.collapsed = !item.collapsed;
        item.wasCollapsedBeforePrint = item.collapsed;
    }
    // Used for preventing calculation issues from animations while scrolling the infinite scroll viewport
    animationEnd(expandData, e) {
        expandData.wasOpened = e.animationName === 'uncollapseRowAnimation';
    }
    /* Start Editable Cell Functions */
    onEditableCellInput(item, varName, content) {
        if (content.currentValue !== content.lastValidInput) {
            item[varName] = content.originalValue;
        }
        else {
            item[varName] = content.currentValue;
        }
        console.log('updated to: ' + item[varName]);
    }
    onEditableCellValidated(e) { }
    onEditableCellFocusOut(e) { }
    /* End Editable Cell Functions */
    /* Start Sort Functions */
    sortByVar(varName) {
        this.sortedAndFilteredItems = this.filterItems(this.baseItems, this.filterOptions);
        if (this.lastSortVar === varName) {
            this.sortDirection *= -1;
        }
        else {
            this.sortDirection = 1;
            this.lastSortVar = varName;
        }
        this.sortedAndFilteredItems = this.sortedAndFilteredItems.sort((item1, item2) => {
            if (item1[varName] > item2[varName]) {
                return this.sortDirection;
            }
            if (item2[varName] > item1[varName]) {
                return -1 * this.sortDirection;
            }
            return 0;
        });
        this.sortedAndFilteredItems = [].concat(this.sortedAndFilteredItems);
        this.lastSortVarName = varName;
    }
    openExportToExcelOverlay() {
        let positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        const overlayConfig = new overlay_1.OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'export-to-excel-overlay-bg',
            panelClass: 'export-to-excel-overlay-panel',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });
        const overlayRef = this.overlay.create(overlayConfig);
        // Create ComponentPortal that can be attached to a PortalHost
        const injector = this.createInjector({ exportableItems: this.sortedAndFilteredItems }, export_to_excel_overlay_tokens_1.EXPORT_TO_EXCEL_OVERLAY_DATA);
        const containerPortal = new portal_1.ComponentPortal(export_to_excel_overlay_component_1.ExportToExcelOverlayComponent, null, injector);
        const containerRef = overlayRef.attach(containerPortal);
        const component = containerRef.instance;
        component.closeEmitter.subscribe(() => {
            overlayRef.detach();
        });
    }
    openPrintOverlay() {
        let positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        const overlayConfig = new overlay_1.OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'print-overlay-bg',
            panelClass: 'print-overlay-panel',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });
        const overlayRef = this.overlay.create(overlayConfig);
        // Create ComponentPortal that can be attached to a PortalHost
        const injector = this.createInjector({ printableItems: this.sortedAndFilteredItems, containsPrintableItems: true }, print_overlay_tokens_1.PRINT_OVERLAY_DATA);
        const containerPortal = new portal_1.ComponentPortal(print_overlay_component_1.PrintOverlayComponent, null, injector);
        const containerRef = overlayRef.attach(containerPortal);
        const component = containerRef.instance;
        component.closeEmitter.subscribe(() => {
            overlayRef.detach();
        });
        component.printOptionEmitter.subscribe((printOptions) => {
            const numOfRows = printOptions.rowEnd - printOptions.rowStart + 1;
            this.printItems = this.sortedAndFilteredItems.concat();
            if (printOptions.selectedRowsOnly) {
                const printFilterOption = {
                    varName: 'selected',
                    filterType: filter_type_1.FilterType.EXACT_MATCH,
                    validFilterValues: [true]
                };
                this.sortedAndFilteredItems = this.filterService.filter(this.sortedAndFilteredItems, printFilterOption);
            }
            this.sortedAndFilteredItems = this.sortedAndFilteredItems.slice(printOptions.rowStart - 1, printOptions.rowEnd);
            if (!printOptions.includeTransactions) {
                this.sortedAndFilteredItems.forEach(item => {
                    item.wasCollapsedBeforePrint = item.collapsed;
                    item.collapsed = true;
                });
            }
            else {
                this.sortedAndFilteredItems.forEach(item => {
                    item.printing = true;
                    item.wasCollapsedBeforePrint = item.collapsed;
                    item.collapsed = false;
                });
            }
            const hgt = printOptions.printHeight;
            this.mainViewPort.elementRef.nativeElement.style.height = (hgt).toString() + 'px';
            this.mainViewPort.checkViewportSize();
            this.printing = true;
            const performAnimation = () => {
                if (!this.mainViewPort) {
                    console.log('no valid print data');
                    clearInterval(this.printInterval);
                    injector.get(print_overlay_tokens_1.PRINT_OVERLAY_DATA).containsPrintableItems = false;
                    this.resetItemsAfterPrint();
                    return;
                }
                this.transactionViewPorts.forEach(transactionViewport => {
                    if (!transactionViewport.item.collapsed) {
                        transactionViewport.viewPort.checkViewportSize();
                    }
                });
                this.mainViewPort.checkViewportSize();
                if (this.mainViewPort.elementRef.nativeElement.clientHeight === hgt) {
                    clearInterval(this.printInterval);
                    overlayRef.detach();
                    this.printPreviewInterval = setTimeout(() => {
                        window.print();
                        return false;
                    }, 1);
                }
                else {
                    setTimeout(performAnimation, 50);
                }
            };
            this.printInterval = setTimeout(performAnimation, 50);
        });
    }
    openPhoneSort(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const el = e.target;
        let positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(el)
            .withPositions([
            { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' }
        ])
            .withDefaultOffsetX(-200)
            .withDefaultOffsetY(10);
        const overlayConfig = new overlay_1.OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'phone-filter-bg',
            panelClass: 'phone-filter-panel',
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy
        });
        const overlayRef = this.overlay.create(overlayConfig);
        // Create ComponentPortal that can be attached to a PortalHost
        const injector = this.createInjector({ allAreaCodes: this.gridDataService.areaCodes, selectedAreaCodes: this.selectedAreaCodes }, filter_overlay_tokens_1.FILTER_OVERLAY_DATA);
        const containerPortal = new portal_1.ComponentPortal(phone_filter_component_1.PhoneFilterComponent, null, injector);
        const containerRef = overlayRef.attach(containerPortal);
        const component = containerRef.instance;
        component.filterOptionEmitter.subscribe((filterOption) => {
            let existingFilter = this.filterService.getExistingFilter(this.filterOptions, filterOption);
            if (existingFilter) {
                existingFilter.validFilterValues = filterOption.validFilterValues;
            }
            else {
                this.filterOptions.push(filterOption);
            }
            this.selectedAreaCodes = filterOption.validFilterValues.concat();
            this.sortedAndFilteredItems = this.filterItems(this.baseItems, this.filterOptions);
            if (!!this.lastSortVarName) {
                this.sortDirection *= -1;
                this.sortByVar(this.lastSortVarName);
            }
        });
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.detach();
        });
    }
    openSelectedSort(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const el = e.target;
        let positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(el)
            .withPositions([
            { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' }
        ])
            .withDefaultOffsetX(-10)
            .withDefaultOffsetY(10);
        const overlayConfig = new overlay_1.OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'selected-filter-bg',
            panelClass: 'selected-filter-panel',
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy
        });
        const overlayRef = this.overlay.create(overlayConfig);
        // Create ComponentPortal that can be attached to a PortalHost
        const injector = this.createInjector({ selectedRowVisibilityOptions: this.selectedRowVisibilityOptions }, selected_overlay_tokens_1.SELECTED_OVERLAY_DATA);
        const containerPortal = new portal_1.ComponentPortal(selected_filter_component_1.SelectedFilterComponent, null, injector);
        const containerRef = overlayRef.attach(containerPortal);
        const component = containerRef.instance;
        component.filterOptionEmitter.subscribe((filterOption) => {
            let existingFilter = this.filterService.getExistingFilter(this.filterOptions, filterOption);
            if (existingFilter) {
                existingFilter.validFilterValues = filterOption.validFilterValues;
            }
            else {
                this.filterOptions.push(filterOption);
            }
            this.selectedRowVisibilityOptions = filterOption.validFilterValues;
            this.sortedAndFilteredItems = this.filterItems(this.baseItems, this.filterOptions);
            if (!!this.lastSortVarName) {
                this.sortDirection *= -1;
                this.sortByVar(this.lastSortVarName);
            }
        });
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.detach();
        });
    }
    createInjector(dataToPass, token) {
        const injectorTokens = new WeakMap();
        injectorTokens.set(token, dataToPass);
        return new portal_1.PortalInjector(this.injector, injectorTokens);
    }
    sortedDown(varName) {
        return varName === this.lastSortVar && this.sortDirection === 1;
    }
    sortedUp(varName) {
        return varName === this.lastSortVar && this.sortDirection === -1;
    }
    setRowCheckId(index) {
        return 'row-selection-check-' + index;
    }
    rowSelectionChanged(e, item) {
        const target = e.target;
        item.selected = target.checked;
        if (target.checked) {
            this.rowsChecked++;
        }
        else {
            this.rowsChecked--;
        }
        this.sortedAndFilteredItems = this.filterItems(this.baseItems, this.filterOptions);
        if (!!this.lastSortVarName) {
            this.sortDirection *= -1;
            this.sortByVar(this.lastSortVarName);
        }
    }
    selectAllRowsChanged(e) {
        const target = e.target;
        this.baseItems.forEach(item => {
            item.selected = target.checked;
        });
        this.rowsChecked = target.checked ? this.baseItems.length : 0;
    }
    isIndeterminate() {
        return this.rowsChecked !== 0 && this.rowsChecked !== this.baseItems.length;
    }
    /* End Sort Functions */
    // Filters out nodes on the column drag and drop ghost object
    dragDropFilter(el) {
        return (el.tagName !== 'TABLEJS-HORIZ-RESIZE-GRIP') && !(el.classList && el.classList.contains('sort-icon'));
    }
    /* Start Column Event Triggers */
    // Triggered when a parent column row resize begins
    columnResizeStart(e) { }
    // Triggered when a parent column row is resized via a mouse movemenet
    columnResize(e) { }
    // Triggered when a parent column row is resize is completed
    columnResizeEnd(e) { }
    // Triggered when a parent column reorder begins
    columnReorderStart(e) { }
    // Triggered when a parent column is being reordered
    columnReorder(e) { }
    // Triggered when a parent column reorder ends
    columnReorderEnd(e) { }
};
GridExampleComponent.ctorParameters = () => [
    { type: cell_validator_service_1.CellValidatorService },
    { type: overlay_1.Overlay },
    { type: core_1.Injector },
    { type: filter_service_1.FilterService },
    { type: grid_data_service_1.GridDataService },
    { type: theme_service_1.ThemeService },
    { type: excel_service_1.ExcelService },
    { type: core_1.ChangeDetectorRef }
];
tslib_1.__decorate([
    core_1.ViewChild('mainViewPort', { static: false }),
    tslib_1.__metadata("design:type", scrolling_1.CdkVirtualScrollViewport)
], GridExampleComponent.prototype, "mainViewPort", void 0);
tslib_1.__decorate([
    core_1.ViewChildren(transaction_grid_component_1.TransactionGridComponent),
    tslib_1.__metadata("design:type", core_1.QueryList)
], GridExampleComponent.prototype, "transactionViewPorts", void 0);
tslib_1.__decorate([
    core_1.HostListener('document:keydown', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [KeyboardEvent]),
    tslib_1.__metadata("design:returntype", void 0)
], GridExampleComponent.prototype, "onKeydownHandler", null);
tslib_1.__decorate([
    core_1.HostListener('window:beforeprint', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], GridExampleComponent.prototype, "beforePrint", null);
tslib_1.__decorate([
    core_1.HostListener('window:afterprint', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], GridExampleComponent.prototype, "afterPrint", null);
GridExampleComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tablejs-grid-example',
        template: __webpack_require__(/*! raw-loader!./grid-example.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/grid-example/grid-example.component.html"),
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__(/*! ./grid-example.component.scss */ "./src/app/components/grid-example/grid-example.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [cell_validator_service_1.CellValidatorService,
        overlay_1.Overlay,
        core_1.Injector,
        filter_service_1.FilterService,
        grid_data_service_1.GridDataService,
        theme_service_1.ThemeService,
        excel_service_1.ExcelService,
        core_1.ChangeDetectorRef])
], GridExampleComponent);
exports.GridExampleComponent = GridExampleComponent;


/***/ }),

/***/ "./src/app/components/grid-example/transaction-grid/transaction-grid.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/grid-example/transaction-grid/transaction-grid.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nested-viewport.tablejs-infinite-scroll-viewport {\n  box-sizing: border-box !important; }\n  .nested-viewport.tablejs-infinite-scroll-viewport.show-all {\n    max-height: 9999999999px;\n    border-bottom: 1px solid #dddddd; }\n  .cdk-virtual-scroll-spacer {\n  position: absolute !important;\n  box-sizing: border-box !important;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL2dyaWQtZXhhbXBsZS90cmFuc2FjdGlvbi1ncmlkL3RyYW5zYWN0aW9uLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxpQ0FBaUMsRUFBQTtFQUZuQztJQUlHLHdCQUF3QjtJQUN4QixnQ0FBMkMsRUFBQTtFQUs5QztFQUNDLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmlkLWV4YW1wbGUvdHJhbnNhY3Rpb24tZ3JpZC90cmFuc2FjdGlvbi1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lc3RlZC12aWV3cG9ydCB7XG5cdCYudGFibGVqcy1pbmZpbml0ZS1zY3JvbGwtdmlld3BvcnQge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcblx0XHQmLnNob3ctYWxsIHtcblx0XHRcdG1heC1oZWlnaHQ6IDk5OTk5OTk5OTlweDtcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjIxLCAyMjEsIDIyMSk7XG5cdFx0fVxuXHR9XG59XG5cbi5jZGstdmlydHVhbC1zY3JvbGwtc3BhY2VyIHtcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcblx0ei1pbmRleDogLTE7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/grid-example/transaction-grid/transaction-grid.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/grid-example/transaction-grid/transaction-grid.component.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const scrolling_1 = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
const grid_data_service_1 = __webpack_require__(/*! ./../../../services/grid-data/grid-data.service */ "./src/app/services/grid-data/grid-data.service.ts");
const filter_service_1 = __webpack_require__(/*! ./../../../services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
const theme_service_1 = __webpack_require__(/*! ./../../../services/theme/theme.service */ "./src/app/services/theme/theme.service.ts");
const filter_type_1 = __webpack_require__(/*! ../../../shared/classes/filter-type */ "./src/app/shared/classes/filter-type.ts");
let TransactionGridComponent = class TransactionGridComponent {
    constructor(elementRef, themeService, gridDataService, filterService) {
        this.elementRef = elementRef;
        this.themeService = themeService;
        this.gridDataService = gridDataService;
        this.filterService = filterService;
        this.resizeEnabled = false;
        this.reorderEnabled = false;
        this.editableCellsEnabled = false;
        this.sortableColumnsEnabled = false;
    }
    ngOnInit() {
        if (this.item.lastFilterText === undefined || this.item.lastFilterText === null) {
            this.item.lastFilterText = '';
        }
    }
    ngAfterViewInit() {
    }
    getLastFilterText() {
        return this.item.lastFilterText === undefined ? '' : this.item.lastFilterText;
    }
    getFilteredSales(item) {
        if (!item.sortedAndFilteredItems) {
            item.sortedAndFilteredItems = item.sales.concat();
        }
        return item.sortedAndFilteredItems;
    }
    filterTransactionByText(e) {
        const target = e.target;
        this.item.lastFilterText = target.value;
        let filterOption = {
            varName: null,
            filterType: filter_type_1.FilterType.EXISTS_IN_TEXT,
            validFilterValues: [target.value]
        };
        if (!this.item.filterOptions) {
            this.item.filterOptions = [];
        }
        let existingFilter = this.filterService.getExistingFilter(this.item.filterOptions, filterOption);
        if (existingFilter) {
            existingFilter.validFilterValues = [target.value];
        }
        else {
            this.item.filterOptions.push(filterOption);
        }
        this.item.sortedAndFilteredItems = this.filterItems(this.item.sales, this.item.filterOptions);
        if (!!this.item.lastSortVarName) {
            this.item.sortDirection *= -1;
            this.sortByVar(this.item.lastSortVarName);
        }
        this.viewPort.scrollToOffset(0);
    }
    filterItems(arr, filterOptions) {
        let copyArr = arr.concat();
        const len = filterOptions.length;
        for (let i = 0; i < len; i++) {
            const filterOption = filterOptions[i];
            copyArr = this.filterService.filter(copyArr, filterOption);
        }
        return copyArr;
    }
    getRoundedRatingText(rating) {
        rating = Math.round(rating) / 100;
        let starText = ' star';
        if (rating !== 1) {
            starText += 's';
        }
        return (rating).toString() + starText;
    }
    sortByVar(varName) {
        if (!this.item.filterOptions) {
            this.item.filterOptions = [];
        }
        this.item.sortedAndFilteredItems = this.filterItems(this.item.sales, this.item.filterOptions);
        if (this.item.lastSortVar === varName) {
            this.item.sortDirection *= -1;
        }
        else {
            this.item.sortDirection = 1;
            this.item.lastSortVar = varName;
        }
        this.item.sortedAndFilteredItems = this.item.sortedAndFilteredItems.sort((item1, item2) => {
            if (item1[varName] > item2[varName]) {
                return this.item.sortDirection;
            }
            if (item2[varName] > item1[varName]) {
                return -1 * this.item.sortDirection;
            }
            return 0;
        });
        this.item.sortedAndFilteredItems = [].concat(this.item.sortedAndFilteredItems);
        this.item.lastSortVarName = varName;
    }
    sortedDown(varName) {
        return varName === this.item.lastSortVar && this.item.sortDirection === 1;
    }
    sortedUp(varName) {
        return varName === this.item.lastSortVar && this.item.sortDirection === -1;
    }
    // Triggered when a details column row resize begins
    detailsColumnResizeStart(e) { }
    // Triggered when a details column row is resized via a mouse movemenet
    detailsColumnResize(e) { }
    // Triggered when a details column row is resize is completed
    detailsColumnResizeEnd(e) { }
    // Triggered when a parent column reorder begins
    detailsColumnReorderStart(e) { }
    // Triggered when a parent column is being reordered
    detailsColumnReorder(e) { }
    // Triggered when a parent column reorder ends
    detailsColumnReorderEnd(e) { }
};
TransactionGridComponent.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: theme_service_1.ThemeService },
    { type: grid_data_service_1.GridDataService },
    { type: filter_service_1.FilterService }
];
tslib_1.__decorate([
    core_1.ViewChild('viewPort', { static: false }),
    tslib_1.__metadata("design:type", scrolling_1.CdkVirtualScrollViewport)
], TransactionGridComponent.prototype, "viewPort", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], TransactionGridComponent.prototype, "item", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], TransactionGridComponent.prototype, "resizeEnabled", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], TransactionGridComponent.prototype, "reorderEnabled", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], TransactionGridComponent.prototype, "editableCellsEnabled", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], TransactionGridComponent.prototype, "sortableColumnsEnabled", void 0);
TransactionGridComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tablejs-transaction-grid',
        template: __webpack_require__(/*! raw-loader!./transaction-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/grid-example/transaction-grid/transaction-grid.component.html"),
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__(/*! ./transaction-grid.component.scss */ "./src/app/components/grid-example/transaction-grid/transaction-grid.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef,
        theme_service_1.ThemeService,
        grid_data_service_1.GridDataService,
        filter_service_1.FilterService])
], TransactionGridComponent);
exports.TransactionGridComponent = TransactionGridComponent;


/***/ }),

/***/ "./src/app/components/phone-filter/filters/filter-overlay-tokens.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/phone-filter/filters/filter-overlay-tokens.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
exports.FILTER_OVERLAY_DATA = new core_1.InjectionToken('FILTER_OVERLAY_DATA');


/***/ }),

/***/ "./src/app/components/phone-filter/phone-filter.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/phone-filter/phone-filter.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/*\n   * Implementation of themes\n   */\n.phone-filter-container {\n  position: relative;\n  width: 200px;\n  height: auto;\n  background-color: #ffffff;\n  padding: 10px;\n  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75); }\n.theme-extra-sm .phone-filter-container {\n    border: 1px solid; }\n.theme-sm .phone-filter-container {\n    border: 1px solid; }\n.theme-reg .phone-filter-container {\n    border: 1px solid; }\n.theme-lg .phone-filter-container {\n    border: 1px solid; }\n.theme-extra-lg .phone-filter-container {\n    border: 1px solid; }\n.theme-blue .phone-filter-container {\n    border: 1px solid #3381a6; }\n.theme-orange .phone-filter-container {\n    border: 1px solid #e08b41; }\n.theme-green .phone-filter-container {\n    border: 1px solid #689f38; }\n.theme-purple .phone-filter-container {\n    border: 1px solid #bb76db; }\n.theme-gray .phone-filter-container {\n    border: 1px solid #999999; }\n.theme-silver .phone-filter-container {\n    border: 1px solid #999999; }\n.phone-filter-container .triangle {\n    position: absolute;\n    right: 5px;\n    top: -6px;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid #ffffff; }\n.phone-filter-container .form-control {\n    margin-bottom: 5px; }\n.phone-filter-container .form-control:last-child {\n      margin-bottom: 0px; }\n.phone-filter-container .fa-times {\n    position: absolute;\n    right: 10px; }\n.phone-filter-container .filter-select-all {\n    padding: 10px;\n    padding-left: 0px;\n    padding-bottom: 0px;\n    margin: 0px; }\n.phone-filter-container .filter-options {\n    margin-top: 10px;\n    padding: 5px;\n    padding-bottom: 5px;\n    overflow: auto;\n    max-height: 150px;\n    margin-left: -5px;\n    margin-right: -5px; }\n.theme-blue .phone-filter-container .filter-options {\n      background: #ebf1f6; }\n.theme-orange .phone-filter-container .filter-options {\n      background: #f0e4db; }\n.theme-green .phone-filter-container .filter-options {\n      background: #dfecd3; }\n.theme-purple .phone-filter-container .filter-options {\n      background: #e8e2ee; }\n.theme-gray .phone-filter-container .filter-options {\n      background: #f2f2f2; }\n.theme-silver .phone-filter-container .filter-options {\n      background: linear-gradient(#e2e2e2, #f2f2f2); }\n.phone-filter-container .button-container {\n    padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bob25lLWZpbHRlci9waG9uZS1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWdvdXdlbi9EZXNrdG9wL1RyYW5zdW5pb24vdGFibGVqcy1kZW1vL3NyYy9hcHAvY29tcG9uZW50cy9waG9uZS1maWx0ZXIvcGhvbmUtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBK0xFOztJQzVMRTtBQ0RKO0VBQ0Msa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBSVoseUJBQXlCO0VBQ3pCLGFBQWE7RUFHYixnREFBNkMsRUFBQTtBRnVMM0M7SUU3TEQsaUJBQWlCLEVBQUE7QUY2TGhCO0lFN0xELGlCQUFpQixFQUFBO0FGNkxoQjtJRTdMRCxpQkFBaUIsRUFBQTtBRjZMaEI7SUU3TEQsaUJBQWlCLEVBQUE7QUY2TGhCO0lFN0xELGlCQUFpQixFQUFBO0FGNkxoQjtJRTdMRCx5QkZDMEIsRUFBQTtBQTRMekI7SUU3TEQseUJGWTRCLEVBQUE7QUFpTDNCO0lFN0xELHlCRnVCMkIsRUFBQTtBQXNLMUI7SUU3TEQseUJGa0M0QixFQUFBO0FBMkozQjtJRTdMRCx5QkY2QzBCLEVBQUE7QUFnSnpCO0lFN0xELHlCRndENEIsRUFBQTtBRTdEOUI7SUFjRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsaUNBQWlDLEVBQUE7QUFyQm5DO0lBeUJFLGtCQUFrQixFQUFBO0FBekJwQjtNQTRCRyxrQkFBa0IsRUFBQTtBQTVCckI7SUFnQ0Usa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTtBQWpDYjtJQXFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXLEVBQUE7QUF4Q2I7SUE0Q0UsZ0JBQWdCO0lBSWhCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUY2SWpCO01FcEpBLG1CRjVDeUIsRUFBQTtBQWdNekI7TUVwSkEsbUJGakM0QixFQUFBO0FBcUw1QjtNRXBKQSxtQkZ0QjJCLEVBQUE7QUEwSzNCO01FcEpBLG1CRlgyQixFQUFBO0FBK0ozQjtNRXBKQSxtQkZBeUIsRUFBQTtBQW9KekI7TUVwSkEsNkNGV3FELEVBQUE7QUV6RHhEO0lBd0RFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG9uZS1maWx0ZXIvcGhvbmUtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuJG9wZW4tcmVnLWJsdWU6ICMyNDcyOTc7XG4kb3Blbi1kay1ibHVlOiAjMTM2MTg2O1xuJG9wZW4tbHQtYmx1ZTogIzMzODFhNjtcbiRvcGVuLXVsdHJhLWx0LWJsdWU6ICNlYmYxZjY7XG4kb3Blbi1lcnJvci1ibHVlOiAjZjgxMzEzO1xuJG9wZW4tcmVnLWJsdWUtc29saWQ6ICMyNDcyOTc7XG4kb3Blbi1kay1ibHVlLXNvbGlkOiAjMTM2MTg2O1xuJG9wZW4tbHQtYmx1ZS1zb2xpZDogIzMzODFhNjtcbiRvcGVuLXVsdHJhLWx0LWJsdWUtc29saWQ6ICNlYmYxZjY7XG4kb3Blbi1lcnJvci1ibHVlLXNvbGlkOiAjZjgxMzEzO1xuXG4kb3Blbi1yZWctb3JhbmdlOiAjZDE3YzMyO1xuJG9wZW4tZGstb3JhbmdlOiAjYzA2YjIxO1xuJG9wZW4tbHQtb3JhbmdlOiAjZTA4YjQxO1xuJG9wZW4tdWx0cmEtbHQtb3JhbmdlOiAgI2YwZTRkYjsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLW9yYW5nZTogI2Y4MTMxMztcbiRvcGVuLXJlZy1vcmFuZ2Utc29saWQ6ICNkMTdjMzI7XG4kb3Blbi1kay1vcmFuZ2Utc29saWQ6ICNjMDZiMjE7XG4kb3Blbi1sdC1vcmFuZ2Utc29saWQ6ICNlMDhiNDE7XG4kb3Blbi11bHRyYS1sdC1vcmFuZ2Utc29saWQ6ICAjZjBlNGRiOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3Itb3JhbmdlLXNvbGlkOiAjZjgxMzEzO1xuXG4kb3Blbi1yZWctZ3JlZW46ICM1NThiMmY7XG4kb3Blbi1kay1ncmVlbjogIzMzNjkxZTtcbiRvcGVuLWx0LWdyZWVuOiAjNjg5ZjM4O1xuJG9wZW4tdWx0cmEtbHQtZ3JlZW46ICAjZGZlY2QzOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3ItZ3JlZW46ICNmODEzMTM7XG4kb3Blbi1yZWctZ3JlZW4tc29saWQ6ICM1NThiMmY7XG4kb3Blbi1kay1ncmVlbi1zb2xpZDogIzMzNjkxZTtcbiRvcGVuLWx0LWdyZWVuLXNvbGlkOiAjNjg5ZjM4O1xuJG9wZW4tdWx0cmEtbHQtZ3JlZW4tc29saWQ6ICAjZGZlY2QzOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3ItZ3JlZW4tc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZy1wdXJwbGU6ICM4YjUwYTc7XG4kb3Blbi1kay1wdXJwbGU6ICM2ZjQwODU7XG4kb3Blbi1sdC1wdXJwbGU6ICNiYjc2ZGI7XG4kb3Blbi11bHRyYS1sdC1wdXJwbGU6ICNlOGUyZWU7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1wdXJwbGU6ICNmODEzMTM7XG4kb3Blbi1yZWctcHVycGxlLXNvbGlkOiAjOGI1MGE3O1xuJG9wZW4tZGstcHVycGxlLXNvbGlkOiAjNmY0MDg1O1xuJG9wZW4tbHQtcHVycGxlLXNvbGlkOiAjYmI3NmRiO1xuJG9wZW4tdWx0cmEtbHQtcHVycGxlLXNvbGlkOiAjZThlMmVlOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3ItcHVycGxlLXNvbGlkOiAjZjgxMzEzO1xuXG4kb3Blbi1yZWctZ3JheTogIzg4ODg4ODtcbiRvcGVuLWRrLWdyYXk6ICM2NjY2NjY7XG4kb3Blbi1sdC1ncmF5OiAjOTk5OTk5O1xuJG9wZW4tdWx0cmEtbHQtZ3JheTogI2YyZjJmMjsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLWdyYXk6ICNmODEzMTM7XG4kb3Blbi1yZWctZ3JheS1zb2xpZDogIzg4ODg4ODtcbiRvcGVuLWRrLWdyYXktc29saWQ6ICM2NjY2NjY7XG4kb3Blbi1sdC1ncmF5LXNvbGlkOiAjOTk5OTk5O1xuJG9wZW4tdWx0cmEtbHQtZ3JheS1zb2xpZDogI2YyZjJmMjsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLWdyYXktc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZy1zaWx2ZXI6IGxpbmVhci1ncmFkaWVudCgjYmJiYmJiLCM4ODg4ODgpO1xuJG9wZW4tZGstc2lsdmVyOiBsaW5lYXItZ3JhZGllbnQoIzk5OTk5OSwjODg4ODg4KTs7XG4kb3Blbi1sdC1zaWx2ZXI6IGxpbmVhci1ncmFkaWVudCgjY2NjY2NjLCM5OTk5OTkpO1xuJG9wZW4tdWx0cmEtbHQtc2lsdmVyOiBsaW5lYXItZ3JhZGllbnQoI2UyZTJlMiwgI2YyZjJmMik7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1zaWx2ZXI6ICNmODEzMTM7XG4kb3Blbi1yZWctc2lsdmVyLXNvbGlkOiAjODg4ODg4O1xuJG9wZW4tZGstc2lsdmVyLXNvbGlkOiAjNjY2NjY2O1xuJG9wZW4tbHQtc2lsdmVyLXNvbGlkOiAjOTk5OTk5O1xuJG9wZW4tdWx0cmEtbHQtc2lsdmVyLXNvbGlkOiAjZjJmMmYyOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3Itc2lsdmVyLXNvbGlkOiAjZjgxMzEzO1xuXG4kb3Blbi1yZWc6ICRvcGVuLXJlZy1ibHVlICFnbG9iYWw7XG4kb3Blbi1kazogJG9wZW4tZGstYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tbHQ6ICRvcGVuLWx0LWJsdWUgIWdsb2JhbDtcbiRvcGVuLXVsdHJhLWx0OiAkb3Blbi11bHRyYS1sdC1ibHVlICFnbG9iYWw7XG4kb3Blbi1lcnJvcjogJG9wZW4tZXJyb3ItYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tcmVnLXNvbGlkOiAkb3Blbi1yZWctYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tZGstc29saWQ6ICRvcGVuLWRrLWJsdWUgIWdsb2JhbDtcbiRvcGVuLWx0LXNvbGlkOiAkb3Blbi1sdC1ibHVlICFnbG9iYWw7XG4kb3Blbi11bHRyYS1sdC1zb2xpZDogJG9wZW4tdWx0cmEtbHQtYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tZXJyb3Itc29saWQ6ICRvcGVuLWVycm9yLWJsdWUgIWdsb2JhbDtcblxuXG4kdGhlbWVzOiAoXG5cdGV4dHJhLXNtOiAoXG5cdFx0dGFibGVQYWRkaW5nOiAwLjVyZW0sXG5cdFx0dGFibGVGb250U2l6ZTogMC43NXJlbSxcblx0XHRlZGl0YWJsZUlucHV0VmVydGljYWxQYWRkaW5nOiAwLjA3cmVtLFxuXHRcdGVkaXRhYmxlVmVydGljYWxQYWRkaW5nOiAwLjJyZW0sXG5cdFx0ZWRpdGFibGVXaWR0aE9mZnNldDogY2FsYygxMDAlIC0gOHB4KVxuXHQpLFxuXHRzbTogKFxuXHRcdHRhYmxlUGFkZGluZzogMC42cmVtLFxuXHRcdHRhYmxlRm9udFNpemU6IDAuODVyZW0sXG5cdFx0ZWRpdGFibGVIb3Jpem9udGFsUGFkZGluZzogNHB4LFxuXHRcdGVkaXRhYmxlSW5wdXRWZXJ0aWNhbFBhZGRpbmc6IDAuMTAxNXJlbSxcblx0XHRlZGl0YWJsZVZlcnRpY2FsUGFkZGluZzogMC4yOXJlbSxcblx0XHRlZGl0YWJsZVdpZHRoT2Zmc2V0OiBjYWxjKDEwMCUgLSA4cHgpXG5cdCksXG5cdHJlZzogKFxuXHRcdHRhYmxlUGFkZGluZzogMC43NXJlbSxcblx0XHR0YWJsZUZvbnRTaXplOiAwLjkzcmVtLFxuXHRcdGVkaXRhYmxlSW5wdXRWZXJ0aWNhbFBhZGRpbmc6IDAuMTRyZW0sXG5cdFx0ZWRpdGFibGVWZXJ0aWNhbFBhZGRpbmc6IDAuNHJlbSxcblx0XHRlZGl0YWJsZVdpZHRoT2Zmc2V0OiBjYWxjKDEwMCUgLSAxMHB4KVxuXHQpLFxuXHRsZzogKFxuXHRcdHRhYmxlUGFkZGluZzogMXJlbSxcblx0XHR0YWJsZUZvbnRTaXplOiAxcmVtLFxuXHRcdGVkaXRhYmxlSW5wdXRWZXJ0aWNhbFBhZGRpbmc6IDAuMTU3NXJlbSxcblx0XHRlZGl0YWJsZVZlcnRpY2FsUGFkZGluZzogMC40NXJlbSxcblx0XHRlZGl0YWJsZVdpZHRoT2Zmc2V0OiBjYWxjKDEwMCUgLSAxOXB4KVxuXHQpLFxuXHRleHRyYS1sZzogKFxuXHRcdHRhYmxlUGFkZGluZzogMS4yNXJlbSxcblx0XHR0YWJsZUZvbnRTaXplOiAxLjFyZW0sXG5cdFx0ZWRpdGFibGVJbnB1dFZlcnRpY2FsUGFkZGluZzogMC4yMnJlbSxcblx0XHRlZGl0YWJsZVZlcnRpY2FsUGFkZGluZzogMC42cmVtLFxuXHRcdGVkaXRhYmxlV2lkdGhPZmZzZXQ6IGNhbGMoMTAwJSAtIDI4cHgpXG5cdCksXG4gIGJsdWU6IChcblx0XHRvcGVuUmVnOiAkb3Blbi1yZWctYmx1ZSxcblx0XHRvcGVuRGs6ICRvcGVuLWRrLWJsdWUsXG5cdFx0b3Blbkx0OiAkb3Blbi1sdC1ibHVlLFxuXHRcdG9wZW5VbHRyYUx0OiAkb3Blbi11bHRyYS1sdC1ibHVlLFxuXHRcdG9wZW5FcnJvcjogJG9wZW4tZXJyb3ItYmx1ZSxcblx0XHRvcGVuUmVnU29saWQ6ICRvcGVuLXJlZy1ibHVlLXNvbGlkLFxuXHRcdG9wZW5Ea1NvbGlkOiAkb3Blbi1kay1ibHVlLXNvbGlkLFxuXHRcdG9wZW5MdFNvbGlkOiAkb3Blbi1sdC1ibHVlLXNvbGlkLFxuXHRcdG9wZW5VbHRyYUx0U29saWQ6ICRvcGVuLXVsdHJhLWx0LWJsdWUtc29saWQsXG5cdFx0b3BlbkVycm9yU29saWQ6ICRvcGVuLWVycm9yLWJsdWUtc29saWRcbiAgKSxcbiAgb3JhbmdlOiAoXG4gICAgXHRvcGVuUmVnOiAkb3Blbi1yZWctb3JhbmdlLFxuXHRcdG9wZW5EazogJG9wZW4tZGstb3JhbmdlLFxuXHRcdG9wZW5MdDogJG9wZW4tbHQtb3JhbmdlLFxuXHRcdG9wZW5VbHRyYUx0OiAkb3Blbi11bHRyYS1sdC1vcmFuZ2UsXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1vcmFuZ2UsXG5cdFx0b3BlblJlZ1NvbGlkOiAkb3Blbi1yZWctb3JhbmdlLXNvbGlkLFxuXHRcdG9wZW5Ea1NvbGlkOiAkb3Blbi1kay1vcmFuZ2Utc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LW9yYW5nZS1zb2xpZCxcblx0XHRvcGVuVWx0cmFMdFNvbGlkOiAkb3Blbi11bHRyYS1sdC1vcmFuZ2Utc29saWQsXG5cdFx0b3BlbkVycm9yU29saWQ6ICRvcGVuLWVycm9yLW9yYW5nZS1zb2xpZFxuICApLFxuICBncmVlbjogKFxuICAgIG9wZW5SZWc6ICRvcGVuLXJlZy1ncmVlbixcblx0XHRvcGVuRGs6ICRvcGVuLWRrLWdyZWVuLFxuXHRcdG9wZW5MdDogJG9wZW4tbHQtZ3JlZW4sXG5cdFx0b3BlblVsdHJhTHQ6ICRvcGVuLXVsdHJhLWx0LWdyZWVuLFxuXHRcdG9wZW5FcnJvcjogJG9wZW4tZXJyb3ItZ3JlZW4sXG5cdFx0b3BlblJlZ1NvbGlkOiAkb3Blbi1yZWctZ3JlZW4tc29saWQsXG5cdFx0b3BlbkRrU29saWQ6ICRvcGVuLWRrLWdyZWVuLXNvbGlkLFxuXHRcdG9wZW5MdFNvbGlkOiAkb3Blbi1sdC1ncmVlbi1zb2xpZCxcblx0XHRvcGVuVWx0cmFMdFNvbGlkOiAkb3Blbi11bHRyYS1sdC1ncmVlbi1zb2xpZCxcblx0XHRvcGVuRXJyb3JTb2xpZDogJG9wZW4tZXJyb3ItZ3JlZW4tc29saWRcbiAgKSxcbiAgcHVycGxlOiAoXG4gICAgb3BlblJlZzogJG9wZW4tcmVnLXB1cnBsZSxcblx0XHRvcGVuRGs6ICRvcGVuLWRrLXB1cnBsZSxcblx0XHRvcGVuTHQ6ICRvcGVuLWx0LXB1cnBsZSxcblx0XHRvcGVuVWx0cmFMdDogJG9wZW4tdWx0cmEtbHQtcHVycGxlLFxuXHRcdG9wZW5FcnJvcjogJG9wZW4tZXJyb3ItcHVycGxlLFxuXHRcdG9wZW5SZWdTb2xpZDogJG9wZW4tcmVnLXB1cnBsZS1zb2xpZCxcblx0XHRvcGVuRGtTb2xpZDogJG9wZW4tZGstcHVycGxlLXNvbGlkLFxuXHRcdG9wZW5MdFNvbGlkOiAkb3Blbi1sdC1wdXJwbGUtc29saWQsXG5cdFx0b3BlblVsdHJhTHRTb2xpZDogJG9wZW4tdWx0cmEtbHQtcHVycGxlLXNvbGlkLFxuXHRcdG9wZW5FcnJvclNvbGlkOiAkb3Blbi1lcnJvci1wdXJwbGUtc29saWRcblx0KSxcblx0Z3JheTogKFxuICAgIG9wZW5SZWc6ICRvcGVuLXJlZy1ncmF5LFxuXHRcdG9wZW5EazogJG9wZW4tZGstZ3JheSxcblx0XHRvcGVuTHQ6ICRvcGVuLWx0LWdyYXksXG5cdFx0b3BlblVsdHJhTHQ6ICRvcGVuLXVsdHJhLWx0LWdyYXksXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1ncmF5LFxuXHRcdG9wZW5SZWdTb2xpZDogJG9wZW4tcmVnLWdyYXktc29saWQsXG5cdFx0b3BlbkRrU29saWQ6ICRvcGVuLWRrLWdyYXktc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LWdyYXktc29saWQsXG5cdFx0b3BlblVsdHJhTHRTb2xpZDogJG9wZW4tdWx0cmEtbHQtZ3JheS1zb2xpZCxcblx0XHRvcGVuRXJyb3JTb2xpZDogJG9wZW4tZXJyb3ItZ3JheS1zb2xpZFxuXHQpLFxuXHRzaWx2ZXI6IChcbiAgICBvcGVuUmVnOiAkb3Blbi1yZWctc2lsdmVyLFxuXHRcdG9wZW5EazogJG9wZW4tZGstc2lsdmVyLFxuXHRcdG9wZW5MdDogJG9wZW4tbHQtc2lsdmVyLFxuXHRcdG9wZW5VbHRyYUx0OiAkb3Blbi11bHRyYS1sdC1zaWx2ZXIsXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1zaWx2ZXIsXG5cdFx0b3BlblJlZ1NvbGlkOiAkb3Blbi1yZWctc2lsdmVyLXNvbGlkLFxuXHRcdG9wZW5Ea1NvbGlkOiAkb3Blbi1kay1zaWx2ZXItc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LXNpbHZlci1zb2xpZCxcblx0XHRvcGVuVWx0cmFMdFNvbGlkOiAkb3Blbi11bHRyYS1sdC1zaWx2ZXItc29saWQsXG5cdFx0b3BlbkVycm9yU29saWQ6ICRvcGVuLWVycm9yLXNpbHZlci1zb2xpZFxuXHQpXG4pO1xuXG4gIFxuICAvKlxuICAgKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGVtZXNcbiAgICovXG4gIEBtaXhpbiB0aGVtaWZ5KCR0aGVtZXMpIHtcblx0QGVhY2ggJHRoZW1lLCAkbWFwIGluICR0aGVtZXMge1xuXHQgIC50aGVtZS0jeyR0aGVtZX0gJiB7XG5cdFx0JHRoZW1lLW1hcDogKCkgIWdsb2JhbDtcblx0XHRAZWFjaCAka2V5LCAkc3VibWFwIGluICRtYXAge1xuXHRcdCAgJHZhbHVlOiBtYXAtZ2V0KG1hcC1nZXQoJHRoZW1lcywgJHRoZW1lKSwgJyN7JGtleX0nKTtcblx0XHQgICR0aGVtZS1tYXA6IG1hcC1tZXJnZSgkdGhlbWUtbWFwLCAoJGtleTogJHZhbHVlKSkgIWdsb2JhbDtcblx0XHR9XG5cdFx0QGNvbnRlbnQ7XG5cdFx0JHRoZW1lLW1hcDogbnVsbCAhZ2xvYmFsO1xuXHQgIH1cblx0fVxuICB9XG4gIFxuICBAZnVuY3Rpb24gdGhlbWVkKCRrZXkpIHtcblx0QHJldHVybiBtYXAtZ2V0KCR0aGVtZS1tYXAsICRrZXkpO1xuICB9XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKlxuICAgKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGVtZXNcbiAgICovXG4ucGhvbmUtZmlsdGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpOyB9XG4gIC50aGVtZS1leHRyYS1zbSAucGhvbmUtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgLnRoZW1lLXNtIC5waG9uZS1maWx0ZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAudGhlbWUtcmVnIC5waG9uZS1maWx0ZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAudGhlbWUtbGcgLnBob25lLWZpbHRlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkOyB9XG4gIC50aGVtZS1leHRyYS1sZyAucGhvbmUtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgLnRoZW1lLWJsdWUgLnBob25lLWZpbHRlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzgxYTY7IH1cbiAgLnRoZW1lLW9yYW5nZSAucGhvbmUtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwOGI0MTsgfVxuICAudGhlbWUtZ3JlZW4gLnBob25lLWZpbHRlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ODlmMzg7IH1cbiAgLnRoZW1lLXB1cnBsZSAucGhvbmUtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiNzZkYjsgfVxuICAudGhlbWUtZ3JheSAucGhvbmUtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTsgfVxuICAudGhlbWUtc2lsdmVyIC5waG9uZS1maWx0ZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5OyB9XG4gIC5waG9uZS1maWx0ZXItY29udGFpbmVyIC50cmlhbmdsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAtNnB4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmZmZmZmOyB9XG4gIC5waG9uZS1maWx0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRyb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDsgfVxuICAgIC5waG9uZS1maWx0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRyb2w6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cbiAgLnBob25lLWZpbHRlci1jb250YWluZXIgLmZhLXRpbWVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7IH1cbiAgLnBob25lLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1zZWxlY3QtYWxsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7IH1cbiAgLnBob25lLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1vcHRpb25zIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTVweDsgfVxuICAgIC50aGVtZS1ibHVlIC5waG9uZS1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItb3B0aW9ucyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWJmMWY2OyB9XG4gICAgLnRoZW1lLW9yYW5nZSAucGhvbmUtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLW9wdGlvbnMge1xuICAgICAgYmFja2dyb3VuZDogI2YwZTRkYjsgfVxuICAgIC50aGVtZS1ncmVlbiAucGhvbmUtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLW9wdGlvbnMge1xuICAgICAgYmFja2dyb3VuZDogI2RmZWNkMzsgfVxuICAgIC50aGVtZS1wdXJwbGUgLnBob25lLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1vcHRpb25zIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlOGUyZWU7IH1cbiAgICAudGhlbWUtZ3JheSAucGhvbmUtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLW9wdGlvbnMge1xuICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjsgfVxuICAgIC50aGVtZS1zaWx2ZXIgLnBob25lLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1vcHRpb25zIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTJlMmUyLCAjZjJmMmYyKTsgfVxuICAucGhvbmUtZmlsdGVyLWNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7IH1cbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG4ucGhvbmUtZmlsdGVyLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDIwMHB4O1xuXHRoZWlnaHQ6IGF1dG87XG5cdEBpbmNsdWRlIHRoZW1pZnkoJHRoZW1lcykge1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHRoZW1lZCgnb3Blbkx0U29saWQnKTtcblx0fVxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcblx0LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XG5cdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcblxuXHQudHJpYW5nbGUge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogNXB4O1xuXHRcdHRvcDogLTZweDtcblx0XHR3aWR0aDogMDtcblx0XHRoZWlnaHQ6IDA7XG5cdFx0Ym9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0Ym9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2ZmZmZmZjtcblx0fVxuXG5cdC5mb3JtLWNvbnRyb2wge1xuXHRcdG1hcmdpbi1ib3R0b206IDVweDtcblxuXHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdFx0fVxuXHR9XG5cdC5mYS10aW1lcyB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHJpZ2h0OiAxMHB4O1xuXHR9XG5cblx0LmZpbHRlci1zZWxlY3QtYWxsIHtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdHBhZGRpbmctbGVmdDogMHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAwcHg7XG5cdFx0bWFyZ2luOiAwcHg7XG5cdH1cblxuXHQuZmlsdGVyLW9wdGlvbnMge1xuXHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB0aGVtZWQoJ29wZW5VbHRyYUx0Jyk7XG5cdFx0fVxuXHRcdHBhZGRpbmc6IDVweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRcdG92ZXJmbG93OiBhdXRvO1xuXHRcdG1heC1oZWlnaHQ6IDE1MHB4O1xuXHRcdG1hcmdpbi1sZWZ0OiAtNXB4O1xuXHRcdG1hcmdpbi1yaWdodDogLTVweDtcblx0fVxuXHQuYnV0dG9uLWNvbnRhaW5lciB7XG5cdFx0cGFkZGluZy10b3A6IDEwcHg7XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/phone-filter/phone-filter.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/phone-filter/phone-filter.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const filter_overlay_tokens_1 = __webpack_require__(/*! ./filters/filter-overlay-tokens */ "./src/app/components/phone-filter/filters/filter-overlay-tokens.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const filter_type_1 = __webpack_require__(/*! ../../shared/classes/filter-type */ "./src/app/shared/classes/filter-type.ts");
const theme_service_1 = __webpack_require__(/*! ./../../services/theme/theme.service */ "./src/app/services/theme/theme.service.ts");
let PhoneFilterComponent = class PhoneFilterComponent {
    constructor(data, fb, themeService, elementRef) {
        this.data = data;
        this.fb = fb;
        this.themeService = themeService;
        this.elementRef = elementRef;
        this.filterOptionEmitter = new core_1.EventEmitter();
        this.areaCodes = this.data.allAreaCodes.sort();
        this.preselectedCodes = this.data.selectedAreaCodes.sort();
    }
    ngOnInit() {
        this.themeService.themes.forEach(theme => {
            this.elementRef.nativeElement.classList.add(theme);
        });
        let group = {};
        group['select-all'] = new forms_1.FormControl(true, []);
        this.areaCodes.forEach((item, index) => {
            const checked = this.preselectedCodes.indexOf(item) !== -1 ? true : false;
            group[this.setId(index)] = new forms_1.FormControl(checked, []);
        });
        this.form = new forms_1.FormGroup(group);
    }
    ngAfterViewInit() {
    }
    setId(i) {
        return 'styled-checkbox-' + i;
    }
    mixedCheckValues() {
        if (this.form.controls['select-all'].value === false) {
            return false;
        }
        let hasTrue = false;
        let hasFalse = false;
        Object.keys(this.form.controls).forEach(key => {
            if (key !== 'select-all') {
                if (this.form.controls[key].value === true) {
                    hasTrue = true;
                }
                else {
                    hasFalse = true;
                }
            }
        });
        return hasTrue && hasFalse;
    }
    checkboxChanged(e) {
        const checkbox = e.target;
        const id = checkbox.id;
        if (e.target === this.selectAllInput.nativeElement) {
            const selectAllValue = this.form.controls['select-all'].value;
            this.setAllFormControlsTo(selectAllValue);
        }
        else {
            if (this.form.controls[id].value === true) {
                this.form.controls['select-all'].setValue(true);
            }
            else {
                let hasTrue = false;
                let hasFalse = false;
                Object.keys(this.form.controls).forEach(key => {
                    if (key !== 'selectAll') {
                        if (this.form.controls[key].value === true) {
                            hasTrue = true;
                        }
                        else {
                            hasFalse = true;
                        }
                    }
                });
                if (!hasTrue && hasFalse) {
                    this.form.controls['selectAll'].setValue(false);
                }
            }
        }
        this.onSubmit(this.form);
    }
    setAllFormControlsTo(val) {
        Object.keys(this.form.controls).forEach(key => {
            if (key !== 'select-all') {
                this.form.controls[key].setValue(val);
            }
        });
    }
    resetFilter(e) {
        this.form.controls['select-all'].setValue(true);
        this.setAllFormControlsTo(true);
    }
    onSubmit(form) {
        const formData = form.value;
        const codesToFilter = [];
        let i = 0;
        for (let prop of Object.keys(formData)) {
            if (prop !== 'select-all') {
                if (formData[prop] === true) {
                    codesToFilter.push(this.areaCodes[i - 1]);
                }
            }
            i++;
        }
        const filterOption = {
            varName: 'phone',
            filterType: filter_type_1.FilterType.AREA_CODE,
            validFilterValues: codesToFilter
        };
        this.filterOptionEmitter.emit(filterOption);
        this.data = codesToFilter;
    }
};
PhoneFilterComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [filter_overlay_tokens_1.FILTER_OVERLAY_DATA,] }] },
    { type: forms_1.FormBuilder },
    { type: theme_service_1.ThemeService },
    { type: core_1.ElementRef }
];
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], PhoneFilterComponent.prototype, "filterOptionEmitter", void 0);
tslib_1.__decorate([
    core_1.ViewChild('selectAll', { static: false }),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], PhoneFilterComponent.prototype, "selectAllInput", void 0);
PhoneFilterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tablejs-phone-filter',
        template: __webpack_require__(/*! raw-loader!./phone-filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/phone-filter/phone-filter.component.html"),
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__(/*! ./phone-filter.component.scss */ "./src/app/components/phone-filter/phone-filter.component.scss")]
    }),
    tslib_1.__param(0, core_1.Inject(filter_overlay_tokens_1.FILTER_OVERLAY_DATA)),
    tslib_1.__metadata("design:paramtypes", [Object, forms_1.FormBuilder,
        theme_service_1.ThemeService,
        core_1.ElementRef])
], PhoneFilterComponent);
exports.PhoneFilterComponent = PhoneFilterComponent;


/***/ }),

/***/ "./src/app/components/print-overlay/print-overlay.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/print-overlay/print-overlay.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/*\n   * Implementation of themes\n   */\nh3 {\n  margin-top: 0px;\n  margin-bottom: 30px; }\n.checkbox-container {\n  padding-bottom: 10px; }\n.print-control {\n  margin-right: 10px;\n  display: block; }\n.print-label {\n  box-sizing: border-box;\n  padding-right: 10px;\n  display: inline-block;\n  width: 160px; }\n.print-filter-container {\n  padding: 10px;\n  margin: -10px;\n  margin-top: 20px;\n  padding-bottom: 0px; }\n.theme-blue .print-filter-container {\n    background: #ebf1f6; }\n.theme-orange .print-filter-container {\n    background: #f0e4db; }\n.theme-green .print-filter-container {\n    background: #dfecd3; }\n.theme-purple .print-filter-container {\n    background: #e8e2ee; }\n.theme-gray .print-filter-container {\n    background: #f2f2f2; }\n.theme-silver .print-filter-container {\n    background: linear-gradient(#e2e2e2, #f2f2f2); }\n.total-container {\n  padding-top: 20px; }\n.print-notif {\n  position: absolute;\n  display: block; }\n.print-notif .invalid-print-notif {\n    position: absolute;\n    display: block;\n    width: 500px;\n    height: auto;\n    padding: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    background-color: #ffffff;\n    box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75);\n    overflow: hidden;\n    opacity: 0;\n    -webkit-animation: uncollapseErrorNotifAnimation 0.5s;\n    animation: uncollapseErrorNotifAnimation 0.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n.theme-extra-sm .print-notif .invalid-print-notif {\n      border: 1px solid;\n      border-top: 0px; }\n.theme-sm .print-notif .invalid-print-notif {\n      border: 1px solid;\n      border-top: 0px; }\n.theme-reg .print-notif .invalid-print-notif {\n      border: 1px solid;\n      border-top: 0px; }\n.theme-lg .print-notif .invalid-print-notif {\n      border: 1px solid;\n      border-top: 0px; }\n.theme-extra-lg .print-notif .invalid-print-notif {\n      border: 1px solid;\n      border-top: 0px; }\n.theme-blue .print-notif .invalid-print-notif {\n      color: #f81313;\n      border: 1px solid #3381a6;\n      border-top: 0px; }\n.theme-orange .print-notif .invalid-print-notif {\n      color: #f81313;\n      border: 1px solid #e08b41;\n      border-top: 0px; }\n.theme-green .print-notif .invalid-print-notif {\n      color: #f81313;\n      border: 1px solid #689f38;\n      border-top: 0px; }\n.theme-purple .print-notif .invalid-print-notif {\n      color: #f81313;\n      border: 1px solid #bb76db;\n      border-top: 0px; }\n.theme-gray .print-notif .invalid-print-notif {\n      color: #f81313;\n      border: 1px solid #999999;\n      border-top: 0px; }\n.theme-silver .print-notif .invalid-print-notif {\n      color: #f81313;\n      border: 1px solid #999999;\n      border-top: 0px; }\n.print-notif .invalid-print-notif .fa-exclamation-circle {\n      margin-right: 10px; }\n.theme-blue .error {\n  color: #f81313; }\n.theme-orange .error {\n  color: #f81313; }\n.theme-green .error {\n  color: #f81313; }\n.theme-purple .error {\n  color: #f81313; }\n.theme-gray .error {\n  color: #f81313; }\n.theme-silver .error {\n  color: #f81313; }\n@-webkit-keyframes uncollapseErrorNotifAnimation {\n  0% {\n    max-height: 0px;\n    opacity: 1; }\n  100% {\n    max-height: 40px;\n    opacity: 1; } }\n@keyframes uncollapseErrorNotifAnimation {\n  0% {\n    max-height: 0px;\n    opacity: 1; }\n  100% {\n    max-height: 40px;\n    opacity: 1; } }\n.maximum-rows-notif {\n  color: #777777;\n  padding-top: 0px;\n  padding-bottom: 10px;\n  font-size: 0.8rem;\n  width: 280px;\n  text-align: left;\n  padding-left: 160px; }\n.print-menu-container {\n  position: relative;\n  width: 500px;\n  height: auto;\n  background-color: #ffffff;\n  padding: 20px;\n  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75); }\n.theme-extra-sm .print-menu-container {\n    border: 1px solid; }\n.theme-sm .print-menu-container {\n    border: 1px solid; }\n.theme-reg .print-menu-container {\n    border: 1px solid; }\n.theme-lg .print-menu-container {\n    border: 1px solid; }\n.theme-extra-lg .print-menu-container {\n    border: 1px solid; }\n.theme-blue .print-menu-container {\n    border: 1px solid #3381a6; }\n.theme-orange .print-menu-container {\n    border: 1px solid #e08b41; }\n.theme-green .print-menu-container {\n    border: 1px solid #689f38; }\n.theme-purple .print-menu-container {\n    border: 1px solid #bb76db; }\n.theme-gray .print-menu-container {\n    border: 1px solid #999999; }\n.theme-silver .print-menu-container {\n    border: 1px solid #999999; }\n.print-menu-container .form-control {\n    margin-bottom: 5px; }\n.print-menu-container .form-control input {\n      width: 120px;\n      box-sizing: border-box; }\n.print-menu-container .form-control input.ng-invalid {\n        border-style: solid; }\n.theme-blue .print-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.theme-orange .print-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.theme-green .print-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.theme-purple .print-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.theme-gray .print-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.theme-silver .print-menu-container .form-control input.ng-invalid {\n          border-color: #f81313; }\n.print-menu-container .button-container {\n    position: relative;\n    display: block;\n    width: 100%;\n    padding-top: 24px;\n    height: 30px; }\n.print-menu-container .button-container .btn {\n      position: absolute;\n      right: 0px; }\n.print-menu-container .button-container .btn.cancel {\n        right: 88px;\n        background: #999999;\n        border-color: #888888; }\n.print-menu-container .button-container .btn.cancel:hover {\n          background: #666666; }\n.print-menu-container .button-container .btn .fa-print {\n        margin-right: 10px; }\n.print-menu-container .button-container .btn:disabled, .print-menu-container .button-container .btn [disabled] {\n        opacity: 0.75; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ByaW50LW92ZXJsYXkvcHJpbnQtb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL2FwcC9jb21wb25lbnRzL3ByaW50LW92ZXJsYXkvcHJpbnQtb3ZlcmxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQStMRTs7SUM1TEU7QUNESjtFQUNDLGVBQWU7RUFDZixtQkFBbUIsRUFBQTtBQUdwQjtFQUNDLG9CQUFvQixFQUFBO0FBRXJCO0VBQ0Msa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtBQUVmO0VBQ0Msc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsWUFBWSxFQUFBO0FBRWI7RUFDQyxhQUFhO0VBSWIsYUFBYTtFQUNiLGdCQUFnQjtFQUNiLG1CQUFtQixFQUFBO0FGeUtwQjtJRTdLRCxtQkZuQjBCLEVBQUE7QUFnTXpCO0lFN0tELG1CRlI2QixFQUFBO0FBcUw1QjtJRTdLRCxtQkZHNEIsRUFBQTtBQTBLM0I7SUU3S0QsbUJGYzRCLEVBQUE7QUErSjNCO0lFN0tELG1CRnlCMEIsRUFBQTtBQW9KekI7SUU3S0QsNkNGb0NzRCxFQUFBO0FFOUJ4RDtFQUNDLGlCQUFpQixFQUFBO0FBRWxCO0VBQ0Msa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtBQUZmO0lBS0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUd6QixnREFBNkM7SUFDN0MsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixxREFBcUQ7SUFDckQsNkNBQTZDO0lBQzdDLHFDQUE2QjtZQUE3Qiw2QkFBNkIsRUFBQTtBRmdKNUI7TUU3SUEsaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtBRjRJZjtNRTdJQSxpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0FGNElmO01FN0lBLGlCQUFpQjtNQUNqQixlQUFlLEVBQUE7QUY0SWY7TUU3SUEsaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtBRjRJZjtNRTdJQSxpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0FGNElmO01FOUlBLGNGakRzQjtNRWtEdEIseUJGL0N5QjtNRWdEekIsZUFBZSxFQUFBO0FGNElmO01FOUlBLGNGdEN3QjtNRXVDeEIseUJGcEMyQjtNRXFDM0IsZUFBZSxFQUFBO0FGNElmO01FOUlBLGNGM0J1QjtNRTRCdkIseUJGekIwQjtNRTBCMUIsZUFBZSxFQUFBO0FGNElmO01FOUlBLGNGaEJ3QjtNRWlCeEIseUJGZDJCO01FZTNCLGVBQWUsRUFBQTtBRjRJZjtNRTlJQSxjRkxzQjtNRU10Qix5QkZIeUI7TUVJekIsZUFBZSxFQUFBO0FGNElmO01FOUlBLGNGTXdCO01FTHhCLHlCRlEyQjtNRVAzQixlQUFlLEVBQUE7QUF4QmxCO01BMkJHLGtCQUFrQixFQUFBO0FGeUlsQjtFRW5JRCxjRjVEdUIsRUFBQTtBQStMdEI7RUVuSUQsY0ZqRHlCLEVBQUE7QUFvTHhCO0VFbklELGNGdEN3QixFQUFBO0FBeUt2QjtFRW5JRCxjRjNCeUIsRUFBQTtBQThKeEI7RUVuSUQsY0ZoQnVCLEVBQUE7QUFtSnRCO0VFbklELGNGTHlCLEVBQUE7QUVVM0I7RUFDQztJQUFLLGVBQWU7SUFBRSxVQUFVLEVBQUE7RUFDaEM7SUFBTyxnQkFBZ0I7SUFBRSxVQUFVLEVBQUEsRUFBQTtBQUVwQztFQUNDO0lBQUssZUFBZTtJQUFFLFVBQVUsRUFBQTtFQUNoQztJQUFPLGdCQUFnQjtJQUFFLFVBQVUsRUFBQSxFQUFBO0FBR3BDO0VBQ0MsY0FBYztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDdkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFFcEI7RUFDQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFJWix5QkFBeUI7RUFDekIsYUFBYTtFQUdiLGdEQUE2QyxFQUFBO0FGaUczQztJRXZHRCxpQkFBaUIsRUFBQTtBRnVHaEI7SUV2R0QsaUJBQWlCLEVBQUE7QUZ1R2hCO0lFdkdELGlCQUFpQixFQUFBO0FGdUdoQjtJRXZHRCxpQkFBaUIsRUFBQTtBRnVHaEI7SUV2R0QsaUJBQWlCLEVBQUE7QUZ1R2hCO0lFdkdELHlCRnJGMEIsRUFBQTtBQTRMekI7SUV2R0QseUJGMUU0QixFQUFBO0FBaUwzQjtJRXZHRCx5QkYvRDJCLEVBQUE7QUFzSzFCO0lFdkdELHlCRnBENEIsRUFBQTtBQTJKM0I7SUV2R0QseUJGekMwQixFQUFBO0FBZ0p6QjtJRXZHRCx5QkY5QjRCLEVBQUE7QUV5QjlCO0lBY0Usa0JBQWtCLEVBQUE7QUFkcEI7TUFpQkcsWUFBWTtNQUNaLHNCQUFzQixFQUFBO0FBbEJ6QjtRQXNCSSxtQkFBbUIsRUFBQTtBRnNGcEI7VUVwRkUscUJGM0dvQixFQUFBO0FBK0x0QjtVRXBGRSxxQkZoR3NCLEVBQUE7QUFvTHhCO1VFcEZFLHFCRnJGcUIsRUFBQTtBQXlLdkI7VUVwRkUscUJGMUVzQixFQUFBO0FBOEp4QjtVRXBGRSxxQkYvRG9CLEVBQUE7QUFtSnRCO1VFcEZFLHFCRnBEc0IsRUFBQTtBRTRCM0I7SUE4QkUsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTtBQWxDZDtNQXFDRyxrQkFBa0I7TUFDbEIsVUFBVSxFQUFBO0FBdENiO1FBeUNJLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIscUJBQXFCLEVBQUE7QUEzQ3pCO1VBOENLLG1CQUFtQixFQUFBO0FBOUN4QjtRQWtESSxrQkFBa0IsRUFBQTtBQWxEdEI7UUFxREksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmludC1vdmVybGF5L3ByaW50LW92ZXJsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4kb3Blbi1yZWctYmx1ZTogIzI0NzI5NztcbiRvcGVuLWRrLWJsdWU6ICMxMzYxODY7XG4kb3Blbi1sdC1ibHVlOiAjMzM4MWE2O1xuJG9wZW4tdWx0cmEtbHQtYmx1ZTogI2ViZjFmNjtcbiRvcGVuLWVycm9yLWJsdWU6ICNmODEzMTM7XG4kb3Blbi1yZWctYmx1ZS1zb2xpZDogIzI0NzI5NztcbiRvcGVuLWRrLWJsdWUtc29saWQ6ICMxMzYxODY7XG4kb3Blbi1sdC1ibHVlLXNvbGlkOiAjMzM4MWE2O1xuJG9wZW4tdWx0cmEtbHQtYmx1ZS1zb2xpZDogI2ViZjFmNjtcbiRvcGVuLWVycm9yLWJsdWUtc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZy1vcmFuZ2U6ICNkMTdjMzI7XG4kb3Blbi1kay1vcmFuZ2U6ICNjMDZiMjE7XG4kb3Blbi1sdC1vcmFuZ2U6ICNlMDhiNDE7XG4kb3Blbi11bHRyYS1sdC1vcmFuZ2U6ICAjZjBlNGRiOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3Itb3JhbmdlOiAjZjgxMzEzO1xuJG9wZW4tcmVnLW9yYW5nZS1zb2xpZDogI2QxN2MzMjtcbiRvcGVuLWRrLW9yYW5nZS1zb2xpZDogI2MwNmIyMTtcbiRvcGVuLWx0LW9yYW5nZS1zb2xpZDogI2UwOGI0MTtcbiRvcGVuLXVsdHJhLWx0LW9yYW5nZS1zb2xpZDogICNmMGU0ZGI7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1vcmFuZ2Utc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZy1ncmVlbjogIzU1OGIyZjtcbiRvcGVuLWRrLWdyZWVuOiAjMzM2OTFlO1xuJG9wZW4tbHQtZ3JlZW46ICM2ODlmMzg7XG4kb3Blbi11bHRyYS1sdC1ncmVlbjogICNkZmVjZDM7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1ncmVlbjogI2Y4MTMxMztcbiRvcGVuLXJlZy1ncmVlbi1zb2xpZDogIzU1OGIyZjtcbiRvcGVuLWRrLWdyZWVuLXNvbGlkOiAjMzM2OTFlO1xuJG9wZW4tbHQtZ3JlZW4tc29saWQ6ICM2ODlmMzg7XG4kb3Blbi11bHRyYS1sdC1ncmVlbi1zb2xpZDogICNkZmVjZDM7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1ncmVlbi1zb2xpZDogI2Y4MTMxMztcblxuJG9wZW4tcmVnLXB1cnBsZTogIzhiNTBhNztcbiRvcGVuLWRrLXB1cnBsZTogIzZmNDA4NTtcbiRvcGVuLWx0LXB1cnBsZTogI2JiNzZkYjtcbiRvcGVuLXVsdHJhLWx0LXB1cnBsZTogI2U4ZTJlZTsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLXB1cnBsZTogI2Y4MTMxMztcbiRvcGVuLXJlZy1wdXJwbGUtc29saWQ6ICM4YjUwYTc7XG4kb3Blbi1kay1wdXJwbGUtc29saWQ6ICM2ZjQwODU7XG4kb3Blbi1sdC1wdXJwbGUtc29saWQ6ICNiYjc2ZGI7XG4kb3Blbi11bHRyYS1sdC1wdXJwbGUtc29saWQ6ICNlOGUyZWU7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1wdXJwbGUtc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZy1ncmF5OiAjODg4ODg4O1xuJG9wZW4tZGstZ3JheTogIzY2NjY2NjtcbiRvcGVuLWx0LWdyYXk6ICM5OTk5OTk7XG4kb3Blbi11bHRyYS1sdC1ncmF5OiAjZjJmMmYyOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3ItZ3JheTogI2Y4MTMxMztcbiRvcGVuLXJlZy1ncmF5LXNvbGlkOiAjODg4ODg4O1xuJG9wZW4tZGstZ3JheS1zb2xpZDogIzY2NjY2NjtcbiRvcGVuLWx0LWdyYXktc29saWQ6ICM5OTk5OTk7XG4kb3Blbi11bHRyYS1sdC1ncmF5LXNvbGlkOiAjZjJmMmYyOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3ItZ3JheS1zb2xpZDogI2Y4MTMxMztcblxuJG9wZW4tcmVnLXNpbHZlcjogbGluZWFyLWdyYWRpZW50KCNiYmJiYmIsIzg4ODg4OCk7XG4kb3Blbi1kay1zaWx2ZXI6IGxpbmVhci1ncmFkaWVudCgjOTk5OTk5LCM4ODg4ODgpOztcbiRvcGVuLWx0LXNpbHZlcjogbGluZWFyLWdyYWRpZW50KCNjY2NjY2MsIzk5OTk5OSk7XG4kb3Blbi11bHRyYS1sdC1zaWx2ZXI6IGxpbmVhci1ncmFkaWVudCgjZTJlMmUyLCAjZjJmMmYyKTsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLXNpbHZlcjogI2Y4MTMxMztcbiRvcGVuLXJlZy1zaWx2ZXItc29saWQ6ICM4ODg4ODg7XG4kb3Blbi1kay1zaWx2ZXItc29saWQ6ICM2NjY2NjY7XG4kb3Blbi1sdC1zaWx2ZXItc29saWQ6ICM5OTk5OTk7XG4kb3Blbi11bHRyYS1sdC1zaWx2ZXItc29saWQ6ICNmMmYyZjI7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1zaWx2ZXItc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZzogJG9wZW4tcmVnLWJsdWUgIWdsb2JhbDtcbiRvcGVuLWRrOiAkb3Blbi1kay1ibHVlICFnbG9iYWw7XG4kb3Blbi1sdDogJG9wZW4tbHQtYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tdWx0cmEtbHQ6ICRvcGVuLXVsdHJhLWx0LWJsdWUgIWdsb2JhbDtcbiRvcGVuLWVycm9yOiAkb3Blbi1lcnJvci1ibHVlICFnbG9iYWw7XG4kb3Blbi1yZWctc29saWQ6ICRvcGVuLXJlZy1ibHVlICFnbG9iYWw7XG4kb3Blbi1kay1zb2xpZDogJG9wZW4tZGstYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tbHQtc29saWQ6ICRvcGVuLWx0LWJsdWUgIWdsb2JhbDtcbiRvcGVuLXVsdHJhLWx0LXNvbGlkOiAkb3Blbi11bHRyYS1sdC1ibHVlICFnbG9iYWw7XG4kb3Blbi1lcnJvci1zb2xpZDogJG9wZW4tZXJyb3ItYmx1ZSAhZ2xvYmFsO1xuXG5cbiR0aGVtZXM6IChcblx0ZXh0cmEtc206IChcblx0XHR0YWJsZVBhZGRpbmc6IDAuNXJlbSxcblx0XHR0YWJsZUZvbnRTaXplOiAwLjc1cmVtLFxuXHRcdGVkaXRhYmxlSW5wdXRWZXJ0aWNhbFBhZGRpbmc6IDAuMDdyZW0sXG5cdFx0ZWRpdGFibGVWZXJ0aWNhbFBhZGRpbmc6IDAuMnJlbSxcblx0XHRlZGl0YWJsZVdpZHRoT2Zmc2V0OiBjYWxjKDEwMCUgLSA4cHgpXG5cdCksXG5cdHNtOiAoXG5cdFx0dGFibGVQYWRkaW5nOiAwLjZyZW0sXG5cdFx0dGFibGVGb250U2l6ZTogMC44NXJlbSxcblx0XHRlZGl0YWJsZUhvcml6b250YWxQYWRkaW5nOiA0cHgsXG5cdFx0ZWRpdGFibGVJbnB1dFZlcnRpY2FsUGFkZGluZzogMC4xMDE1cmVtLFxuXHRcdGVkaXRhYmxlVmVydGljYWxQYWRkaW5nOiAwLjI5cmVtLFxuXHRcdGVkaXRhYmxlV2lkdGhPZmZzZXQ6IGNhbGMoMTAwJSAtIDhweClcblx0KSxcblx0cmVnOiAoXG5cdFx0dGFibGVQYWRkaW5nOiAwLjc1cmVtLFxuXHRcdHRhYmxlRm9udFNpemU6IDAuOTNyZW0sXG5cdFx0ZWRpdGFibGVJbnB1dFZlcnRpY2FsUGFkZGluZzogMC4xNHJlbSxcblx0XHRlZGl0YWJsZVZlcnRpY2FsUGFkZGluZzogMC40cmVtLFxuXHRcdGVkaXRhYmxlV2lkdGhPZmZzZXQ6IGNhbGMoMTAwJSAtIDEwcHgpXG5cdCksXG5cdGxnOiAoXG5cdFx0dGFibGVQYWRkaW5nOiAxcmVtLFxuXHRcdHRhYmxlRm9udFNpemU6IDFyZW0sXG5cdFx0ZWRpdGFibGVJbnB1dFZlcnRpY2FsUGFkZGluZzogMC4xNTc1cmVtLFxuXHRcdGVkaXRhYmxlVmVydGljYWxQYWRkaW5nOiAwLjQ1cmVtLFxuXHRcdGVkaXRhYmxlV2lkdGhPZmZzZXQ6IGNhbGMoMTAwJSAtIDE5cHgpXG5cdCksXG5cdGV4dHJhLWxnOiAoXG5cdFx0dGFibGVQYWRkaW5nOiAxLjI1cmVtLFxuXHRcdHRhYmxlRm9udFNpemU6IDEuMXJlbSxcblx0XHRlZGl0YWJsZUlucHV0VmVydGljYWxQYWRkaW5nOiAwLjIycmVtLFxuXHRcdGVkaXRhYmxlVmVydGljYWxQYWRkaW5nOiAwLjZyZW0sXG5cdFx0ZWRpdGFibGVXaWR0aE9mZnNldDogY2FsYygxMDAlIC0gMjhweClcblx0KSxcbiAgYmx1ZTogKFxuXHRcdG9wZW5SZWc6ICRvcGVuLXJlZy1ibHVlLFxuXHRcdG9wZW5EazogJG9wZW4tZGstYmx1ZSxcblx0XHRvcGVuTHQ6ICRvcGVuLWx0LWJsdWUsXG5cdFx0b3BlblVsdHJhTHQ6ICRvcGVuLXVsdHJhLWx0LWJsdWUsXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1ibHVlLFxuXHRcdG9wZW5SZWdTb2xpZDogJG9wZW4tcmVnLWJsdWUtc29saWQsXG5cdFx0b3BlbkRrU29saWQ6ICRvcGVuLWRrLWJsdWUtc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LWJsdWUtc29saWQsXG5cdFx0b3BlblVsdHJhTHRTb2xpZDogJG9wZW4tdWx0cmEtbHQtYmx1ZS1zb2xpZCxcblx0XHRvcGVuRXJyb3JTb2xpZDogJG9wZW4tZXJyb3ItYmx1ZS1zb2xpZFxuICApLFxuICBvcmFuZ2U6IChcbiAgICBcdG9wZW5SZWc6ICRvcGVuLXJlZy1vcmFuZ2UsXG5cdFx0b3BlbkRrOiAkb3Blbi1kay1vcmFuZ2UsXG5cdFx0b3Blbkx0OiAkb3Blbi1sdC1vcmFuZ2UsXG5cdFx0b3BlblVsdHJhTHQ6ICRvcGVuLXVsdHJhLWx0LW9yYW5nZSxcblx0XHRvcGVuRXJyb3I6ICRvcGVuLWVycm9yLW9yYW5nZSxcblx0XHRvcGVuUmVnU29saWQ6ICRvcGVuLXJlZy1vcmFuZ2Utc29saWQsXG5cdFx0b3BlbkRrU29saWQ6ICRvcGVuLWRrLW9yYW5nZS1zb2xpZCxcblx0XHRvcGVuTHRTb2xpZDogJG9wZW4tbHQtb3JhbmdlLXNvbGlkLFxuXHRcdG9wZW5VbHRyYUx0U29saWQ6ICRvcGVuLXVsdHJhLWx0LW9yYW5nZS1zb2xpZCxcblx0XHRvcGVuRXJyb3JTb2xpZDogJG9wZW4tZXJyb3Itb3JhbmdlLXNvbGlkXG4gICksXG4gIGdyZWVuOiAoXG4gICAgb3BlblJlZzogJG9wZW4tcmVnLWdyZWVuLFxuXHRcdG9wZW5EazogJG9wZW4tZGstZ3JlZW4sXG5cdFx0b3Blbkx0OiAkb3Blbi1sdC1ncmVlbixcblx0XHRvcGVuVWx0cmFMdDogJG9wZW4tdWx0cmEtbHQtZ3JlZW4sXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1ncmVlbixcblx0XHRvcGVuUmVnU29saWQ6ICRvcGVuLXJlZy1ncmVlbi1zb2xpZCxcblx0XHRvcGVuRGtTb2xpZDogJG9wZW4tZGstZ3JlZW4tc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LWdyZWVuLXNvbGlkLFxuXHRcdG9wZW5VbHRyYUx0U29saWQ6ICRvcGVuLXVsdHJhLWx0LWdyZWVuLXNvbGlkLFxuXHRcdG9wZW5FcnJvclNvbGlkOiAkb3Blbi1lcnJvci1ncmVlbi1zb2xpZFxuICApLFxuICBwdXJwbGU6IChcbiAgICBvcGVuUmVnOiAkb3Blbi1yZWctcHVycGxlLFxuXHRcdG9wZW5EazogJG9wZW4tZGstcHVycGxlLFxuXHRcdG9wZW5MdDogJG9wZW4tbHQtcHVycGxlLFxuXHRcdG9wZW5VbHRyYUx0OiAkb3Blbi11bHRyYS1sdC1wdXJwbGUsXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1wdXJwbGUsXG5cdFx0b3BlblJlZ1NvbGlkOiAkb3Blbi1yZWctcHVycGxlLXNvbGlkLFxuXHRcdG9wZW5Ea1NvbGlkOiAkb3Blbi1kay1wdXJwbGUtc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LXB1cnBsZS1zb2xpZCxcblx0XHRvcGVuVWx0cmFMdFNvbGlkOiAkb3Blbi11bHRyYS1sdC1wdXJwbGUtc29saWQsXG5cdFx0b3BlbkVycm9yU29saWQ6ICRvcGVuLWVycm9yLXB1cnBsZS1zb2xpZFxuXHQpLFxuXHRncmF5OiAoXG4gICAgb3BlblJlZzogJG9wZW4tcmVnLWdyYXksXG5cdFx0b3BlbkRrOiAkb3Blbi1kay1ncmF5LFxuXHRcdG9wZW5MdDogJG9wZW4tbHQtZ3JheSxcblx0XHRvcGVuVWx0cmFMdDogJG9wZW4tdWx0cmEtbHQtZ3JheSxcblx0XHRvcGVuRXJyb3I6ICRvcGVuLWVycm9yLWdyYXksXG5cdFx0b3BlblJlZ1NvbGlkOiAkb3Blbi1yZWctZ3JheS1zb2xpZCxcblx0XHRvcGVuRGtTb2xpZDogJG9wZW4tZGstZ3JheS1zb2xpZCxcblx0XHRvcGVuTHRTb2xpZDogJG9wZW4tbHQtZ3JheS1zb2xpZCxcblx0XHRvcGVuVWx0cmFMdFNvbGlkOiAkb3Blbi11bHRyYS1sdC1ncmF5LXNvbGlkLFxuXHRcdG9wZW5FcnJvclNvbGlkOiAkb3Blbi1lcnJvci1ncmF5LXNvbGlkXG5cdCksXG5cdHNpbHZlcjogKFxuICAgIG9wZW5SZWc6ICRvcGVuLXJlZy1zaWx2ZXIsXG5cdFx0b3BlbkRrOiAkb3Blbi1kay1zaWx2ZXIsXG5cdFx0b3Blbkx0OiAkb3Blbi1sdC1zaWx2ZXIsXG5cdFx0b3BlblVsdHJhTHQ6ICRvcGVuLXVsdHJhLWx0LXNpbHZlcixcblx0XHRvcGVuRXJyb3I6ICRvcGVuLWVycm9yLXNpbHZlcixcblx0XHRvcGVuUmVnU29saWQ6ICRvcGVuLXJlZy1zaWx2ZXItc29saWQsXG5cdFx0b3BlbkRrU29saWQ6ICRvcGVuLWRrLXNpbHZlci1zb2xpZCxcblx0XHRvcGVuTHRTb2xpZDogJG9wZW4tbHQtc2lsdmVyLXNvbGlkLFxuXHRcdG9wZW5VbHRyYUx0U29saWQ6ICRvcGVuLXVsdHJhLWx0LXNpbHZlci1zb2xpZCxcblx0XHRvcGVuRXJyb3JTb2xpZDogJG9wZW4tZXJyb3Itc2lsdmVyLXNvbGlkXG5cdClcbik7XG5cbiAgXG4gIC8qXG4gICAqIEltcGxlbWVudGF0aW9uIG9mIHRoZW1lc1xuICAgKi9cbiAgQG1peGluIHRoZW1pZnkoJHRoZW1lcykge1xuXHRAZWFjaCAkdGhlbWUsICRtYXAgaW4gJHRoZW1lcyB7XG5cdCAgLnRoZW1lLSN7JHRoZW1lfSAmIHtcblx0XHQkdGhlbWUtbWFwOiAoKSAhZ2xvYmFsO1xuXHRcdEBlYWNoICRrZXksICRzdWJtYXAgaW4gJG1hcCB7XG5cdFx0ICAkdmFsdWU6IG1hcC1nZXQobWFwLWdldCgkdGhlbWVzLCAkdGhlbWUpLCAnI3ska2V5fScpO1xuXHRcdCAgJHRoZW1lLW1hcDogbWFwLW1lcmdlKCR0aGVtZS1tYXAsICgka2V5OiAkdmFsdWUpKSAhZ2xvYmFsO1xuXHRcdH1cblx0XHRAY29udGVudDtcblx0XHQkdGhlbWUtbWFwOiBudWxsICFnbG9iYWw7XG5cdCAgfVxuXHR9XG4gIH1cbiAgXG4gIEBmdW5jdGlvbiB0aGVtZWQoJGtleSkge1xuXHRAcmV0dXJuIG1hcC1nZXQoJHRoZW1lLW1hcCwgJGtleSk7XG4gIH1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qXG4gICAqIEltcGxlbWVudGF0aW9uIG9mIHRoZW1lc1xuICAgKi9cbmgzIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG5cbi5jaGVja2JveC1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDsgfVxuXG4ucHJpbnQtY29udHJvbCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnByaW50LWxhYmVsIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTYwcHg7IH1cblxuLnByaW50LWZpbHRlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IC0xMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4OyB9XG4gIC50aGVtZS1ibHVlIC5wcmludC1maWx0ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWJmMWY2OyB9XG4gIC50aGVtZS1vcmFuZ2UgLnByaW50LWZpbHRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNmMGU0ZGI7IH1cbiAgLnRoZW1lLWdyZWVuIC5wcmludC1maWx0ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGZlY2QzOyB9XG4gIC50aGVtZS1wdXJwbGUgLnByaW50LWZpbHRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNlOGUyZWU7IH1cbiAgLnRoZW1lLWdyYXkgLnByaW50LWZpbHRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7IH1cbiAgLnRoZW1lLXNpbHZlciAucHJpbnQtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlMmUyZTIsICNmMmYyZjIpOyB9XG5cbi50b3RhbC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDsgfVxuXG4ucHJpbnQtbm90aWYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5wcmludC1ub3RpZiAuaW52YWxpZC1wcmludC1ub3RpZiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHVuY29sbGFwc2VFcnJvck5vdGlmQW5pbWF0aW9uIDAuNXM7XG4gICAgYW5pbWF0aW9uOiB1bmNvbGxhcHNlRXJyb3JOb3RpZkFuaW1hdGlvbiAwLjVzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyB9XG4gICAgLnRoZW1lLWV4dHJhLXNtIC5wcmludC1ub3RpZiAuaW52YWxpZC1wcmludC1ub3RpZiB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgIGJvcmRlci10b3A6IDBweDsgfVxuICAgIC50aGVtZS1zbSAucHJpbnQtbm90aWYgLmludmFsaWQtcHJpbnQtbm90aWYge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICBib3JkZXItdG9wOiAwcHg7IH1cbiAgICAudGhlbWUtcmVnIC5wcmludC1ub3RpZiAuaW52YWxpZC1wcmludC1ub3RpZiB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgIGJvcmRlci10b3A6IDBweDsgfVxuICAgIC50aGVtZS1sZyAucHJpbnQtbm90aWYgLmludmFsaWQtcHJpbnQtbm90aWYge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICBib3JkZXItdG9wOiAwcHg7IH1cbiAgICAudGhlbWUtZXh0cmEtbGcgLnByaW50LW5vdGlmIC5pbnZhbGlkLXByaW50LW5vdGlmIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgYm9yZGVyLXRvcDogMHB4OyB9XG4gICAgLnRoZW1lLWJsdWUgLnByaW50LW5vdGlmIC5pbnZhbGlkLXByaW50LW5vdGlmIHtcbiAgICAgIGNvbG9yOiAjZjgxMzEzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzODFhNjtcbiAgICAgIGJvcmRlci10b3A6IDBweDsgfVxuICAgIC50aGVtZS1vcmFuZ2UgLnByaW50LW5vdGlmIC5pbnZhbGlkLXByaW50LW5vdGlmIHtcbiAgICAgIGNvbG9yOiAjZjgxMzEzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwOGI0MTtcbiAgICAgIGJvcmRlci10b3A6IDBweDsgfVxuICAgIC50aGVtZS1ncmVlbiAucHJpbnQtbm90aWYgLmludmFsaWQtcHJpbnQtbm90aWYge1xuICAgICAgY29sb3I6ICNmODEzMTM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjg5ZjM4O1xuICAgICAgYm9yZGVyLXRvcDogMHB4OyB9XG4gICAgLnRoZW1lLXB1cnBsZSAucHJpbnQtbm90aWYgLmludmFsaWQtcHJpbnQtbm90aWYge1xuICAgICAgY29sb3I6ICNmODEzMTM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmI3NmRiO1xuICAgICAgYm9yZGVyLXRvcDogMHB4OyB9XG4gICAgLnRoZW1lLWdyYXkgLnByaW50LW5vdGlmIC5pbnZhbGlkLXByaW50LW5vdGlmIHtcbiAgICAgIGNvbG9yOiAjZjgxMzEzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcbiAgICAgIGJvcmRlci10b3A6IDBweDsgfVxuICAgIC50aGVtZS1zaWx2ZXIgLnByaW50LW5vdGlmIC5pbnZhbGlkLXByaW50LW5vdGlmIHtcbiAgICAgIGNvbG9yOiAjZjgxMzEzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcbiAgICAgIGJvcmRlci10b3A6IDBweDsgfVxuICAgIC5wcmludC1ub3RpZiAuaW52YWxpZC1wcmludC1ub3RpZiAuZmEtZXhjbGFtYXRpb24tY2lyY2xlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG4udGhlbWUtYmx1ZSAuZXJyb3Ige1xuICBjb2xvcjogI2Y4MTMxMzsgfVxuXG4udGhlbWUtb3JhbmdlIC5lcnJvciB7XG4gIGNvbG9yOiAjZjgxMzEzOyB9XG5cbi50aGVtZS1ncmVlbiAuZXJyb3Ige1xuICBjb2xvcjogI2Y4MTMxMzsgfVxuXG4udGhlbWUtcHVycGxlIC5lcnJvciB7XG4gIGNvbG9yOiAjZjgxMzEzOyB9XG5cbi50aGVtZS1ncmF5IC5lcnJvciB7XG4gIGNvbG9yOiAjZjgxMzEzOyB9XG5cbi50aGVtZS1zaWx2ZXIgLmVycm9yIHtcbiAgY29sb3I6ICNmODEzMTM7IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHVuY29sbGFwc2VFcnJvck5vdGlmQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkBrZXlmcmFtZXMgdW5jb2xsYXBzZUVycm9yTm90aWZBbmltYXRpb24ge1xuICAwJSB7XG4gICAgbWF4LWhlaWdodDogMHB4O1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLm1heGltdW0tcm93cy1ub3RpZiB7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdpZHRoOiAyODBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxNjBweDsgfVxuXG4ucHJpbnQtbWVudS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTsgfVxuICAudGhlbWUtZXh0cmEtc20gLnByaW50LW1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAudGhlbWUtc20gLnByaW50LW1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAudGhlbWUtcmVnIC5wcmludC1tZW51LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgLnRoZW1lLWxnIC5wcmludC1tZW51LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgLnRoZW1lLWV4dHJhLWxnIC5wcmludC1tZW51LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgLnRoZW1lLWJsdWUgLnByaW50LW1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzM4MWE2OyB9XG4gIC50aGVtZS1vcmFuZ2UgLnByaW50LW1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTA4YjQxOyB9XG4gIC50aGVtZS1ncmVlbiAucHJpbnQtbWVudS1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ODlmMzg7IH1cbiAgLnRoZW1lLXB1cnBsZSAucHJpbnQtbWVudS1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYjc2ZGI7IH1cbiAgLnRoZW1lLWdyYXkgLnByaW50LW1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5OyB9XG4gIC50aGVtZS1zaWx2ZXIgLnByaW50LW1lbnUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5OyB9XG4gIC5wcmludC1tZW51LWNvbnRhaW5lciAuZm9ybS1jb250cm9sIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cbiAgICAucHJpbnQtbWVudS1jb250YWluZXIgLmZvcm0tY29udHJvbCBpbnB1dCB7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgICAucHJpbnQtbWVudS1jb250YWluZXIgLmZvcm0tY29udHJvbCBpbnB1dC5uZy1pbnZhbGlkIHtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxuICAgICAgICAudGhlbWUtYmx1ZSAucHJpbnQtbWVudS1jb250YWluZXIgLmZvcm0tY29udHJvbCBpbnB1dC5uZy1pbnZhbGlkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmODEzMTM7IH1cbiAgICAgICAgLnRoZW1lLW9yYW5nZSAucHJpbnQtbWVudS1jb250YWluZXIgLmZvcm0tY29udHJvbCBpbnB1dC5uZy1pbnZhbGlkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmODEzMTM7IH1cbiAgICAgICAgLnRoZW1lLWdyZWVuIC5wcmludC1tZW51LWNvbnRhaW5lciAuZm9ybS1jb250cm9sIGlucHV0Lm5nLWludmFsaWQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MTMxMzsgfVxuICAgICAgICAudGhlbWUtcHVycGxlIC5wcmludC1tZW51LWNvbnRhaW5lciAuZm9ybS1jb250cm9sIGlucHV0Lm5nLWludmFsaWQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MTMxMzsgfVxuICAgICAgICAudGhlbWUtZ3JheSAucHJpbnQtbWVudS1jb250YWluZXIgLmZvcm0tY29udHJvbCBpbnB1dC5uZy1pbnZhbGlkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmODEzMTM7IH1cbiAgICAgICAgLnRoZW1lLXNpbHZlciAucHJpbnQtbWVudS1jb250YWluZXIgLmZvcm0tY29udHJvbCBpbnB1dC5uZy1pbnZhbGlkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmODEzMTM7IH1cbiAgLnByaW50LW1lbnUtY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgaGVpZ2h0OiAzMHB4OyB9XG4gICAgLnByaW50LW1lbnUtY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIC5idG4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDBweDsgfVxuICAgICAgLnByaW50LW1lbnUtY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIC5idG4uY2FuY2VsIHtcbiAgICAgICAgcmlnaHQ6IDg4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5OTk5OTk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzg4ODg4ODsgfVxuICAgICAgICAucHJpbnQtbWVudS1jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIgLmJ0bi5jYW5jZWw6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7IH1cbiAgICAgIC5wcmludC1tZW51LWNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciAuYnRuIC5mYS1wcmludCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuICAgICAgLnByaW50LW1lbnUtY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIC5idG46ZGlzYWJsZWQsIC5wcmludC1tZW51LWNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciAuYnRuIFtkaXNhYmxlZF0ge1xuICAgICAgICBvcGFjaXR5OiAwLjc1OyB9XG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxuaDMge1xuXHRtYXJnaW4tdG9wOiAwcHg7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jaGVja2JveC1jb250YWluZXIge1xuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wcmludC1jb250cm9sIHtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbi5wcmludC1sYWJlbCB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDE2MHB4O1xufVxuLnByaW50LWZpbHRlci1jb250YWluZXIge1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRAaW5jbHVkZSB0aGVtaWZ5KCR0aGVtZXMpIHsgIFxuXHRcdGJhY2tncm91bmQ6IHRoZW1lZCgnb3BlblVsdHJhTHQnKTsgIFxuXHR9XG5cdG1hcmdpbjogLTEwcHg7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi50b3RhbC1jb250YWluZXIge1xuXHRwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5wcmludC1ub3RpZiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cblx0LmludmFsaWQtcHJpbnQtbm90aWYge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogNTAwcHg7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0XHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcblx0XHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdC13ZWJraXQtYW5pbWF0aW9uOiB1bmNvbGxhcHNlRXJyb3JOb3RpZkFuaW1hdGlvbiAwLjVzO1xuXHRcdGFuaW1hdGlvbjogdW5jb2xsYXBzZUVycm9yTm90aWZBbmltYXRpb24gMC41cztcblx0XHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcblx0XHRAaW5jbHVkZSB0aGVtaWZ5KCR0aGVtZXMpIHsgIFxuXHRcdFx0Y29sb3I6IHRoZW1lZCgnb3BlbkVycm9yJyk7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCB0aGVtZWQoJ29wZW5MdFNvbGlkJyk7XG5cdFx0XHRib3JkZXItdG9wOiAwcHg7XG5cdFx0fVxuXHRcdC5mYS1leGNsYW1hdGlvbi1jaXJjbGUge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdH1cblx0fVxufVxuLmVycm9yIHtcblx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7ICBcblx0XHRjb2xvcjogdGhlbWVkKCdvcGVuRXJyb3InKTtcblx0fVxufVxuXG5cbkAtd2Via2l0LWtleWZyYW1lcyB1bmNvbGxhcHNlRXJyb3JOb3RpZkFuaW1hdGlvbiB7XG5cdDAlIHsgbWF4LWhlaWdodDogMHB4OyBvcGFjaXR5OiAxOyB9XG5cdDEwMCUgeyBtYXgtaGVpZ2h0OiA0MHB4OyBvcGFjaXR5OiAxOyB9XG59XG5Aa2V5ZnJhbWVzIHVuY29sbGFwc2VFcnJvck5vdGlmQW5pbWF0aW9uIHtcblx0MCUgeyBtYXgtaGVpZ2h0OiAwcHg7IG9wYWNpdHk6IDE7IH1cblx0MTAwJSB7IG1heC1oZWlnaHQ6IDQwcHg7IG9wYWNpdHk6IDE7IH1cbn1cblxuLm1heGltdW0tcm93cy1ub3RpZiB7XG5cdGNvbG9yOiAjNzc3Nzc3O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cdGZvbnQtc2l6ZTogMC44cmVtO1xuXHR3aWR0aDogMjgwcHg7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHBhZGRpbmctbGVmdDogMTYwcHg7XG59XG4ucHJpbnQtbWVudS1jb250YWluZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiA1MDBweDtcblx0aGVpZ2h0OiBhdXRvO1xuXHRAaW5jbHVkZSB0aGVtaWZ5KCR0aGVtZXMpIHtcblx0XHRib3JkZXI6IDFweCBzb2xpZCB0aGVtZWQoJ29wZW5MdFNvbGlkJyk7XG5cdH1cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cGFkZGluZzogMjBweDtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XG5cdC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuNzUpO1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XG5cblx0LmZvcm0tY29udHJvbCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXG5cdFx0aW5wdXQge1xuXHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcblx0XHRcdFxuXHRcdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0XHRcdFx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB0aGVtZWQoJ29wZW5FcnJvcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5idXR0b24tY29udGFpbmVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZy10b3A6IDI0cHg7XG5cdFx0aGVpZ2h0OiAzMHB4O1xuXG5cdFx0LmJ0biB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRyaWdodDogMHB4O1xuXG5cdFx0XHQmLmNhbmNlbCB7XG5cdFx0XHRcdHJpZ2h0OiA4OHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjOTk5OTk5O1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICM4ODg4ODg7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzY2NjY2Njtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0LmZhLXByaW50IHtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0fVxuXHRcdFx0JjpkaXNhYmxlZCwgW2Rpc2FibGVkXSB7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNzU7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/print-overlay/print-overlay.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/print-overlay/print-overlay.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const print_overlay_tokens_1 = __webpack_require__(/*! ./print/print-overlay-tokens */ "./src/app/components/print-overlay/print/print-overlay-tokens.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const theme_service_1 = __webpack_require__(/*! ./../../services/theme/theme.service */ "./src/app/services/theme/theme.service.ts");
const print_options_service_1 = __webpack_require__(/*! ./../../services/print/print-options/print-options.service */ "./src/app/services/print/print-options/print-options.service.ts");
let PrintOverlayComponent = class PrintOverlayComponent {
    constructor(data, fb, themeService, printOptionsService, elementRef) {
        this.data = data;
        this.fb = fb;
        this.themeService = themeService;
        this.printOptionsService = printOptionsService;
        this.elementRef = elementRef;
        this.printOptionEmitter = new core_1.EventEmitter();
        this.closeEmitter = new core_1.EventEmitter();
        this.maxRows = 1000;
        this.disablePrint = false;
        this.printHeight = 0;
    }
    ngOnInit() {
        const lastEmit = this.printOptionsService.lastEmit;
        this.printOptionsService.printOptionEmitter = this.printOptionEmitter;
        this.themeService.themes.forEach(theme => {
            this.elementRef.nativeElement.classList.add(theme);
        });
        this.form = this.fb.group({
            rowStart: [lastEmit ? lastEmit.rowStart : '1', [forms_1.Validators.required, this.controlChanged(), this.onlyNumbersValidator(), this.properRangeValidator(), this.maxRowValidator(this.maxRows)]],
            rowEnd: [lastEmit ? lastEmit.rowEnd : this.getMaxRows(this.data.printableItems.length).toString(), [forms_1.Validators.required, this.controlChanged(), this.onlyNumbersValidator(), this.properRangeValidator(), this.maxRowValidator(this.maxRows)]],
            selectedRowsOnly: [lastEmit ? lastEmit.selectedRowsOnly : false, this.controlChanged()],
            includeTransactions: [
                lastEmit ? lastEmit.includeTransactions : false, this.controlChanged()
            ]
        });
        this.form.valueChanges.subscribe(res => {
            if (!(this.form.controls['rowStart'].errors || this.form.controls['rowEnd'].errors)) {
                this.disablePrint = false;
            }
            else {
                this.disablePrint = true;
            }
            this.updatePrintableItems(this.form.controls['selectedRowsOnly'].value);
        });
        if (lastEmit && lastEmit.selectedRowsOnly) {
            this.printableItems = this.getSelectedPrintableItems();
        }
        else {
            this.printableItems = this.data.printableItems;
        }
        this.printableItems = this.printableItems.slice(Number(this.form.controls['rowStart'].value) - 1, Number(this.form.controls['rowEnd'].value));
    }
    updatePrintableItems(selectedOnly) {
        this.printableItems = selectedOnly ? this.getSelectedPrintableItems() : this.data.printableItems;
        this.printableItems = this.printableItems.slice(Number(this.form.controls['rowStart'].value) - 1, Number(this.form.controls['rowEnd'].value));
        const totalRows = this.calculateTotalRows();
        if (totalRows > this.maxRows || totalRows === 0) {
            this.disablePrint = true;
        }
    }
    getSelectedPrintableItems() {
        return this.data.printableItems.filter(item => item.selected);
    }
    getMaxRows(rowLen) {
        return rowLen > this.maxRows ? this.maxRows : rowLen;
    }
    includeTransActionsDisabled() {
        return !this.form.controls['selectedRowsOnly'].value;
    }
    calculateTotalRows() {
        this.printHeight = 0;
        const rowEnd = Number(this.form.controls['rowEnd'].value);
        const rowStart = Number(this.form.controls['rowStart'].value);
        const totalCustomerRows = Math.min(rowEnd - rowStart + 1, this.printableItems.length);
        let transactionCount = 0;
        const includeTransactions = this.form.controls['includeTransactions'].value;
        if (includeTransactions) {
            this.printableItems.forEach(item => {
                transactionCount += item.sales.length;
            });
        }
        if (isNaN(totalCustomerRows) || totalCustomerRows < 1 || rowStart < 1) {
            return 0;
        }
        this.printHeight = this.calculatePrintHeight(totalCustomerRows, transactionCount, includeTransactions);
        return totalCustomerRows + transactionCount;
    }
    calculatePrintHeight(totalCustomerRows, transactionCount, includeTransactions) {
        // includes the padding height
        let extraHeight = includeTransactions ? 24 : 0;
        const singleHeaderHeight = includeTransactions ? this.themeService.getFullTableHeight(1) : 0;
        extraHeight += singleHeaderHeight;
        return this.themeService.getFullTableHeight(totalCustomerRows) + totalCustomerRows * extraHeight + this.themeService.getFullTableHeight(transactionCount);
    }
    maxRowValidator(maxRows) {
        return (control) => {
            if (control.parent) {
                const rowEnd = Number(control.parent.controls['rowEnd'].value);
                const rowStart = Number(control.parent.controls['rowStart'].value);
                if (rowEnd - rowStart + 1 > maxRows) {
                    return { 'maxRowValidator': true };
                }
            }
            return null;
        };
    }
    properRangeValidator() {
        return (control) => {
            if (control.parent) {
                const rowEnd = Number(control.parent.controls['rowEnd'].value);
                const rowStart = Number(control.parent.controls['rowStart'].value);
                if (rowEnd < rowStart || rowStart < 1) {
                    return { 'properRangeValidator': true };
                }
                if (control !== control.parent.controls['rowStart']) {
                    control.parent.controls['rowStart'].markAsPending();
                }
                if (control !== control.parent.controls['rowEnd']) {
                    control.parent.controls['rowEnd'].markAsPending();
                }
            }
            return null;
        };
    }
    onlyNumbersValidator() {
        return (control) => {
            const reg = /^\d+$/;
            if (!reg.test(control.value)) {
                return { 'properRangeValidator': true };
            }
            return null;
        };
    }
    controlChanged() {
        return (control) => {
            this.data.containsPrintableItems = true;
            return null;
        };
    }
    onSubmit(form) {
        if (form.invalid) {
            return;
        }
        const formData = form.value;
        this.disablePrint = true;
        this.printOptionEmitter.emit({
            rowStart: Number(formData.rowStart),
            rowEnd: Number(formData.rowEnd),
            selectedRowsOnly: formData.selectedRowsOnly,
            includeTransactions: formData.includeTransactions,
            printHeight: this.printHeight
        });
    }
    closePrintModal() {
        this.closeEmitter.emit();
    }
    getMaximumRowsText() {
        return 'Maximum: ' + this.maxRows + ' rows ';
    }
    selectedRowsChanged(e) {
        const target = e.target;
    }
    includeTransactionsChanged(e) {
        const target = e.target;
    }
};
PrintOverlayComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [print_overlay_tokens_1.PRINT_OVERLAY_DATA,] }] },
    { type: forms_1.FormBuilder },
    { type: theme_service_1.ThemeService },
    { type: print_options_service_1.PrintOptionsService },
    { type: core_1.ElementRef }
];
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], PrintOverlayComponent.prototype, "printOptionEmitter", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], PrintOverlayComponent.prototype, "closeEmitter", void 0);
PrintOverlayComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tablejs-print-overlay',
        template: __webpack_require__(/*! raw-loader!./print-overlay.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/print-overlay/print-overlay.component.html"),
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__(/*! ./print-overlay.component.scss */ "./src/app/components/print-overlay/print-overlay.component.scss")]
    }),
    tslib_1.__param(0, core_1.Inject(print_overlay_tokens_1.PRINT_OVERLAY_DATA)),
    tslib_1.__metadata("design:paramtypes", [Object, forms_1.FormBuilder,
        theme_service_1.ThemeService,
        print_options_service_1.PrintOptionsService,
        core_1.ElementRef])
], PrintOverlayComponent);
exports.PrintOverlayComponent = PrintOverlayComponent;


/***/ }),

/***/ "./src/app/components/print-overlay/print/print-overlay-tokens.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/print-overlay/print/print-overlay-tokens.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
exports.PRINT_OVERLAY_DATA = new core_1.InjectionToken('PRINT_OVERLAY_DATA');


/***/ }),

/***/ "./src/app/components/selected-filter/selected-filter.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/selected-filter/selected-filter.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/*\n   * Implementation of themes\n   */\n.selected-filter-container {\n  position: relative;\n  width: 200px;\n  height: auto;\n  background-color: #ffffff;\n  padding: 10px;\n  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75); }\n.theme-extra-sm .selected-filter-container {\n    border: 1px solid; }\n.theme-sm .selected-filter-container {\n    border: 1px solid; }\n.theme-reg .selected-filter-container {\n    border: 1px solid; }\n.theme-lg .selected-filter-container {\n    border: 1px solid; }\n.theme-extra-lg .selected-filter-container {\n    border: 1px solid; }\n.theme-blue .selected-filter-container {\n    border: 1px solid #3381a6; }\n.theme-orange .selected-filter-container {\n    border: 1px solid #e08b41; }\n.theme-green .selected-filter-container {\n    border: 1px solid #689f38; }\n.theme-purple .selected-filter-container {\n    border: 1px solid #bb76db; }\n.theme-gray .selected-filter-container {\n    border: 1px solid #999999; }\n.theme-silver .selected-filter-container {\n    border: 1px solid #999999; }\n.selected-filter-container .triangle {\n    position: absolute;\n    left: 5px;\n    top: -6px;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid #ffffff; }\n.selected-filter-container .form-control {\n    margin-bottom: 5px; }\n.selected-filter-container .form-control:last-child {\n      margin-bottom: 0px; }\n.selected-filter-container .fa-times {\n    position: absolute;\n    right: 10px; }\n.selected-filter-container .filter-select-all {\n    padding: 10px;\n    padding-left: 0px;\n    padding-bottom: 0px;\n    margin: 0px; }\n.selected-filter-container .filter-options {\n    margin-top: 10px;\n    padding: 5px;\n    padding-bottom: 5px;\n    overflow: auto;\n    max-height: 150px;\n    margin-left: -5px;\n    margin-right: -5px; }\n.theme-blue .selected-filter-container .filter-options {\n      background: #ebf1f6; }\n.theme-orange .selected-filter-container .filter-options {\n      background: #f0e4db; }\n.theme-green .selected-filter-container .filter-options {\n      background: #dfecd3; }\n.theme-purple .selected-filter-container .filter-options {\n      background: #e8e2ee; }\n.theme-gray .selected-filter-container .filter-options {\n      background: #f2f2f2; }\n.theme-silver .selected-filter-container .filter-options {\n      background: linear-gradient(#e2e2e2, #f2f2f2); }\n.selected-filter-container .button-container {\n    padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdGVkLWZpbHRlci9zZWxlY3RlZC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWdvdXdlbi9EZXNrdG9wL1RyYW5zdW5pb24vdGFibGVqcy1kZW1vL3NyYy9hcHAvY29tcG9uZW50cy9zZWxlY3RlZC1maWx0ZXIvc2VsZWN0ZWQtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBK0xFOztJQzVMRTtBQ0RKO0VBQ0Msa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBSVoseUJBQXlCO0VBQ3pCLGFBQWE7RUFHYixnREFBNkMsRUFBQTtBRnVMM0M7SUU3TEQsaUJBQWlCLEVBQUE7QUY2TGhCO0lFN0xELGlCQUFpQixFQUFBO0FGNkxoQjtJRTdMRCxpQkFBaUIsRUFBQTtBRjZMaEI7SUU3TEQsaUJBQWlCLEVBQUE7QUY2TGhCO0lFN0xELGlCQUFpQixFQUFBO0FGNkxoQjtJRTdMRCx5QkZDMEIsRUFBQTtBQTRMekI7SUU3TEQseUJGWTRCLEVBQUE7QUFpTDNCO0lFN0xELHlCRnVCMkIsRUFBQTtBQXNLMUI7SUU3TEQseUJGa0M0QixFQUFBO0FBMkozQjtJRTdMRCx5QkY2QzBCLEVBQUE7QUFnSnpCO0lFN0xELHlCRndENEIsRUFBQTtBRTdEOUI7SUFjRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsaUNBQWlDLEVBQUE7QUFyQm5DO0lBeUJFLGtCQUFrQixFQUFBO0FBekJwQjtNQTRCRyxrQkFBa0IsRUFBQTtBQTVCckI7SUFnQ0Usa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTtBQWpDYjtJQXFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXLEVBQUE7QUF4Q2I7SUE0Q0UsZ0JBQWdCO0lBSWhCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUY2SWpCO01FcEpBLG1CRjVDeUIsRUFBQTtBQWdNekI7TUVwSkEsbUJGakM0QixFQUFBO0FBcUw1QjtNRXBKQSxtQkZ0QjJCLEVBQUE7QUEwSzNCO01FcEpBLG1CRlgyQixFQUFBO0FBK0ozQjtNRXBKQSxtQkZBeUIsRUFBQTtBQW9KekI7TUVwSkEsNkNGV3FELEVBQUE7QUV6RHhEO0lBd0RFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3RlZC1maWx0ZXIvc2VsZWN0ZWQtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuJG9wZW4tcmVnLWJsdWU6ICMyNDcyOTc7XG4kb3Blbi1kay1ibHVlOiAjMTM2MTg2O1xuJG9wZW4tbHQtYmx1ZTogIzMzODFhNjtcbiRvcGVuLXVsdHJhLWx0LWJsdWU6ICNlYmYxZjY7XG4kb3Blbi1lcnJvci1ibHVlOiAjZjgxMzEzO1xuJG9wZW4tcmVnLWJsdWUtc29saWQ6ICMyNDcyOTc7XG4kb3Blbi1kay1ibHVlLXNvbGlkOiAjMTM2MTg2O1xuJG9wZW4tbHQtYmx1ZS1zb2xpZDogIzMzODFhNjtcbiRvcGVuLXVsdHJhLWx0LWJsdWUtc29saWQ6ICNlYmYxZjY7XG4kb3Blbi1lcnJvci1ibHVlLXNvbGlkOiAjZjgxMzEzO1xuXG4kb3Blbi1yZWctb3JhbmdlOiAjZDE3YzMyO1xuJG9wZW4tZGstb3JhbmdlOiAjYzA2YjIxO1xuJG9wZW4tbHQtb3JhbmdlOiAjZTA4YjQxO1xuJG9wZW4tdWx0cmEtbHQtb3JhbmdlOiAgI2YwZTRkYjsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLW9yYW5nZTogI2Y4MTMxMztcbiRvcGVuLXJlZy1vcmFuZ2Utc29saWQ6ICNkMTdjMzI7XG4kb3Blbi1kay1vcmFuZ2Utc29saWQ6ICNjMDZiMjE7XG4kb3Blbi1sdC1vcmFuZ2Utc29saWQ6ICNlMDhiNDE7XG4kb3Blbi11bHRyYS1sdC1vcmFuZ2Utc29saWQ6ICAjZjBlNGRiOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3Itb3JhbmdlLXNvbGlkOiAjZjgxMzEzO1xuXG4kb3Blbi1yZWctZ3JlZW46ICM1NThiMmY7XG4kb3Blbi1kay1ncmVlbjogIzMzNjkxZTtcbiRvcGVuLWx0LWdyZWVuOiAjNjg5ZjM4O1xuJG9wZW4tdWx0cmEtbHQtZ3JlZW46ICAjZGZlY2QzOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3ItZ3JlZW46ICNmODEzMTM7XG4kb3Blbi1yZWctZ3JlZW4tc29saWQ6ICM1NThiMmY7XG4kb3Blbi1kay1ncmVlbi1zb2xpZDogIzMzNjkxZTtcbiRvcGVuLWx0LWdyZWVuLXNvbGlkOiAjNjg5ZjM4O1xuJG9wZW4tdWx0cmEtbHQtZ3JlZW4tc29saWQ6ICAjZGZlY2QzOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3ItZ3JlZW4tc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZy1wdXJwbGU6ICM4YjUwYTc7XG4kb3Blbi1kay1wdXJwbGU6ICM2ZjQwODU7XG4kb3Blbi1sdC1wdXJwbGU6ICNiYjc2ZGI7XG4kb3Blbi11bHRyYS1sdC1wdXJwbGU6ICNlOGUyZWU7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1wdXJwbGU6ICNmODEzMTM7XG4kb3Blbi1yZWctcHVycGxlLXNvbGlkOiAjOGI1MGE3O1xuJG9wZW4tZGstcHVycGxlLXNvbGlkOiAjNmY0MDg1O1xuJG9wZW4tbHQtcHVycGxlLXNvbGlkOiAjYmI3NmRiO1xuJG9wZW4tdWx0cmEtbHQtcHVycGxlLXNvbGlkOiAjZThlMmVlOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3ItcHVycGxlLXNvbGlkOiAjZjgxMzEzO1xuXG4kb3Blbi1yZWctZ3JheTogIzg4ODg4ODtcbiRvcGVuLWRrLWdyYXk6ICM2NjY2NjY7XG4kb3Blbi1sdC1ncmF5OiAjOTk5OTk5O1xuJG9wZW4tdWx0cmEtbHQtZ3JheTogI2YyZjJmMjsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLWdyYXk6ICNmODEzMTM7XG4kb3Blbi1yZWctZ3JheS1zb2xpZDogIzg4ODg4ODtcbiRvcGVuLWRrLWdyYXktc29saWQ6ICM2NjY2NjY7XG4kb3Blbi1sdC1ncmF5LXNvbGlkOiAjOTk5OTk5O1xuJG9wZW4tdWx0cmEtbHQtZ3JheS1zb2xpZDogI2YyZjJmMjsgLy8gI2ZmZjNlYTtcbiRvcGVuLWVycm9yLWdyYXktc29saWQ6ICNmODEzMTM7XG5cbiRvcGVuLXJlZy1zaWx2ZXI6IGxpbmVhci1ncmFkaWVudCgjYmJiYmJiLCM4ODg4ODgpO1xuJG9wZW4tZGstc2lsdmVyOiBsaW5lYXItZ3JhZGllbnQoIzk5OTk5OSwjODg4ODg4KTs7XG4kb3Blbi1sdC1zaWx2ZXI6IGxpbmVhci1ncmFkaWVudCgjY2NjY2NjLCM5OTk5OTkpO1xuJG9wZW4tdWx0cmEtbHQtc2lsdmVyOiBsaW5lYXItZ3JhZGllbnQoI2UyZTJlMiwgI2YyZjJmMik7IC8vICNmZmYzZWE7XG4kb3Blbi1lcnJvci1zaWx2ZXI6ICNmODEzMTM7XG4kb3Blbi1yZWctc2lsdmVyLXNvbGlkOiAjODg4ODg4O1xuJG9wZW4tZGstc2lsdmVyLXNvbGlkOiAjNjY2NjY2O1xuJG9wZW4tbHQtc2lsdmVyLXNvbGlkOiAjOTk5OTk5O1xuJG9wZW4tdWx0cmEtbHQtc2lsdmVyLXNvbGlkOiAjZjJmMmYyOyAvLyAjZmZmM2VhO1xuJG9wZW4tZXJyb3Itc2lsdmVyLXNvbGlkOiAjZjgxMzEzO1xuXG4kb3Blbi1yZWc6ICRvcGVuLXJlZy1ibHVlICFnbG9iYWw7XG4kb3Blbi1kazogJG9wZW4tZGstYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tbHQ6ICRvcGVuLWx0LWJsdWUgIWdsb2JhbDtcbiRvcGVuLXVsdHJhLWx0OiAkb3Blbi11bHRyYS1sdC1ibHVlICFnbG9iYWw7XG4kb3Blbi1lcnJvcjogJG9wZW4tZXJyb3ItYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tcmVnLXNvbGlkOiAkb3Blbi1yZWctYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tZGstc29saWQ6ICRvcGVuLWRrLWJsdWUgIWdsb2JhbDtcbiRvcGVuLWx0LXNvbGlkOiAkb3Blbi1sdC1ibHVlICFnbG9iYWw7XG4kb3Blbi11bHRyYS1sdC1zb2xpZDogJG9wZW4tdWx0cmEtbHQtYmx1ZSAhZ2xvYmFsO1xuJG9wZW4tZXJyb3Itc29saWQ6ICRvcGVuLWVycm9yLWJsdWUgIWdsb2JhbDtcblxuXG4kdGhlbWVzOiAoXG5cdGV4dHJhLXNtOiAoXG5cdFx0dGFibGVQYWRkaW5nOiAwLjVyZW0sXG5cdFx0dGFibGVGb250U2l6ZTogMC43NXJlbSxcblx0XHRlZGl0YWJsZUlucHV0VmVydGljYWxQYWRkaW5nOiAwLjA3cmVtLFxuXHRcdGVkaXRhYmxlVmVydGljYWxQYWRkaW5nOiAwLjJyZW0sXG5cdFx0ZWRpdGFibGVXaWR0aE9mZnNldDogY2FsYygxMDAlIC0gOHB4KVxuXHQpLFxuXHRzbTogKFxuXHRcdHRhYmxlUGFkZGluZzogMC42cmVtLFxuXHRcdHRhYmxlRm9udFNpemU6IDAuODVyZW0sXG5cdFx0ZWRpdGFibGVIb3Jpem9udGFsUGFkZGluZzogNHB4LFxuXHRcdGVkaXRhYmxlSW5wdXRWZXJ0aWNhbFBhZGRpbmc6IDAuMTAxNXJlbSxcblx0XHRlZGl0YWJsZVZlcnRpY2FsUGFkZGluZzogMC4yOXJlbSxcblx0XHRlZGl0YWJsZVdpZHRoT2Zmc2V0OiBjYWxjKDEwMCUgLSA4cHgpXG5cdCksXG5cdHJlZzogKFxuXHRcdHRhYmxlUGFkZGluZzogMC43NXJlbSxcblx0XHR0YWJsZUZvbnRTaXplOiAwLjkzcmVtLFxuXHRcdGVkaXRhYmxlSW5wdXRWZXJ0aWNhbFBhZGRpbmc6IDAuMTRyZW0sXG5cdFx0ZWRpdGFibGVWZXJ0aWNhbFBhZGRpbmc6IDAuNHJlbSxcblx0XHRlZGl0YWJsZVdpZHRoT2Zmc2V0OiBjYWxjKDEwMCUgLSAxMHB4KVxuXHQpLFxuXHRsZzogKFxuXHRcdHRhYmxlUGFkZGluZzogMXJlbSxcblx0XHR0YWJsZUZvbnRTaXplOiAxcmVtLFxuXHRcdGVkaXRhYmxlSW5wdXRWZXJ0aWNhbFBhZGRpbmc6IDAuMTU3NXJlbSxcblx0XHRlZGl0YWJsZVZlcnRpY2FsUGFkZGluZzogMC40NXJlbSxcblx0XHRlZGl0YWJsZVdpZHRoT2Zmc2V0OiBjYWxjKDEwMCUgLSAxOXB4KVxuXHQpLFxuXHRleHRyYS1sZzogKFxuXHRcdHRhYmxlUGFkZGluZzogMS4yNXJlbSxcblx0XHR0YWJsZUZvbnRTaXplOiAxLjFyZW0sXG5cdFx0ZWRpdGFibGVJbnB1dFZlcnRpY2FsUGFkZGluZzogMC4yMnJlbSxcblx0XHRlZGl0YWJsZVZlcnRpY2FsUGFkZGluZzogMC42cmVtLFxuXHRcdGVkaXRhYmxlV2lkdGhPZmZzZXQ6IGNhbGMoMTAwJSAtIDI4cHgpXG5cdCksXG4gIGJsdWU6IChcblx0XHRvcGVuUmVnOiAkb3Blbi1yZWctYmx1ZSxcblx0XHRvcGVuRGs6ICRvcGVuLWRrLWJsdWUsXG5cdFx0b3Blbkx0OiAkb3Blbi1sdC1ibHVlLFxuXHRcdG9wZW5VbHRyYUx0OiAkb3Blbi11bHRyYS1sdC1ibHVlLFxuXHRcdG9wZW5FcnJvcjogJG9wZW4tZXJyb3ItYmx1ZSxcblx0XHRvcGVuUmVnU29saWQ6ICRvcGVuLXJlZy1ibHVlLXNvbGlkLFxuXHRcdG9wZW5Ea1NvbGlkOiAkb3Blbi1kay1ibHVlLXNvbGlkLFxuXHRcdG9wZW5MdFNvbGlkOiAkb3Blbi1sdC1ibHVlLXNvbGlkLFxuXHRcdG9wZW5VbHRyYUx0U29saWQ6ICRvcGVuLXVsdHJhLWx0LWJsdWUtc29saWQsXG5cdFx0b3BlbkVycm9yU29saWQ6ICRvcGVuLWVycm9yLWJsdWUtc29saWRcbiAgKSxcbiAgb3JhbmdlOiAoXG4gICAgXHRvcGVuUmVnOiAkb3Blbi1yZWctb3JhbmdlLFxuXHRcdG9wZW5EazogJG9wZW4tZGstb3JhbmdlLFxuXHRcdG9wZW5MdDogJG9wZW4tbHQtb3JhbmdlLFxuXHRcdG9wZW5VbHRyYUx0OiAkb3Blbi11bHRyYS1sdC1vcmFuZ2UsXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1vcmFuZ2UsXG5cdFx0b3BlblJlZ1NvbGlkOiAkb3Blbi1yZWctb3JhbmdlLXNvbGlkLFxuXHRcdG9wZW5Ea1NvbGlkOiAkb3Blbi1kay1vcmFuZ2Utc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LW9yYW5nZS1zb2xpZCxcblx0XHRvcGVuVWx0cmFMdFNvbGlkOiAkb3Blbi11bHRyYS1sdC1vcmFuZ2Utc29saWQsXG5cdFx0b3BlbkVycm9yU29saWQ6ICRvcGVuLWVycm9yLW9yYW5nZS1zb2xpZFxuICApLFxuICBncmVlbjogKFxuICAgIG9wZW5SZWc6ICRvcGVuLXJlZy1ncmVlbixcblx0XHRvcGVuRGs6ICRvcGVuLWRrLWdyZWVuLFxuXHRcdG9wZW5MdDogJG9wZW4tbHQtZ3JlZW4sXG5cdFx0b3BlblVsdHJhTHQ6ICRvcGVuLXVsdHJhLWx0LWdyZWVuLFxuXHRcdG9wZW5FcnJvcjogJG9wZW4tZXJyb3ItZ3JlZW4sXG5cdFx0b3BlblJlZ1NvbGlkOiAkb3Blbi1yZWctZ3JlZW4tc29saWQsXG5cdFx0b3BlbkRrU29saWQ6ICRvcGVuLWRrLWdyZWVuLXNvbGlkLFxuXHRcdG9wZW5MdFNvbGlkOiAkb3Blbi1sdC1ncmVlbi1zb2xpZCxcblx0XHRvcGVuVWx0cmFMdFNvbGlkOiAkb3Blbi11bHRyYS1sdC1ncmVlbi1zb2xpZCxcblx0XHRvcGVuRXJyb3JTb2xpZDogJG9wZW4tZXJyb3ItZ3JlZW4tc29saWRcbiAgKSxcbiAgcHVycGxlOiAoXG4gICAgb3BlblJlZzogJG9wZW4tcmVnLXB1cnBsZSxcblx0XHRvcGVuRGs6ICRvcGVuLWRrLXB1cnBsZSxcblx0XHRvcGVuTHQ6ICRvcGVuLWx0LXB1cnBsZSxcblx0XHRvcGVuVWx0cmFMdDogJG9wZW4tdWx0cmEtbHQtcHVycGxlLFxuXHRcdG9wZW5FcnJvcjogJG9wZW4tZXJyb3ItcHVycGxlLFxuXHRcdG9wZW5SZWdTb2xpZDogJG9wZW4tcmVnLXB1cnBsZS1zb2xpZCxcblx0XHRvcGVuRGtTb2xpZDogJG9wZW4tZGstcHVycGxlLXNvbGlkLFxuXHRcdG9wZW5MdFNvbGlkOiAkb3Blbi1sdC1wdXJwbGUtc29saWQsXG5cdFx0b3BlblVsdHJhTHRTb2xpZDogJG9wZW4tdWx0cmEtbHQtcHVycGxlLXNvbGlkLFxuXHRcdG9wZW5FcnJvclNvbGlkOiAkb3Blbi1lcnJvci1wdXJwbGUtc29saWRcblx0KSxcblx0Z3JheTogKFxuICAgIG9wZW5SZWc6ICRvcGVuLXJlZy1ncmF5LFxuXHRcdG9wZW5EazogJG9wZW4tZGstZ3JheSxcblx0XHRvcGVuTHQ6ICRvcGVuLWx0LWdyYXksXG5cdFx0b3BlblVsdHJhTHQ6ICRvcGVuLXVsdHJhLWx0LWdyYXksXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1ncmF5LFxuXHRcdG9wZW5SZWdTb2xpZDogJG9wZW4tcmVnLWdyYXktc29saWQsXG5cdFx0b3BlbkRrU29saWQ6ICRvcGVuLWRrLWdyYXktc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LWdyYXktc29saWQsXG5cdFx0b3BlblVsdHJhTHRTb2xpZDogJG9wZW4tdWx0cmEtbHQtZ3JheS1zb2xpZCxcblx0XHRvcGVuRXJyb3JTb2xpZDogJG9wZW4tZXJyb3ItZ3JheS1zb2xpZFxuXHQpLFxuXHRzaWx2ZXI6IChcbiAgICBvcGVuUmVnOiAkb3Blbi1yZWctc2lsdmVyLFxuXHRcdG9wZW5EazogJG9wZW4tZGstc2lsdmVyLFxuXHRcdG9wZW5MdDogJG9wZW4tbHQtc2lsdmVyLFxuXHRcdG9wZW5VbHRyYUx0OiAkb3Blbi11bHRyYS1sdC1zaWx2ZXIsXG5cdFx0b3BlbkVycm9yOiAkb3Blbi1lcnJvci1zaWx2ZXIsXG5cdFx0b3BlblJlZ1NvbGlkOiAkb3Blbi1yZWctc2lsdmVyLXNvbGlkLFxuXHRcdG9wZW5Ea1NvbGlkOiAkb3Blbi1kay1zaWx2ZXItc29saWQsXG5cdFx0b3Blbkx0U29saWQ6ICRvcGVuLWx0LXNpbHZlci1zb2xpZCxcblx0XHRvcGVuVWx0cmFMdFNvbGlkOiAkb3Blbi11bHRyYS1sdC1zaWx2ZXItc29saWQsXG5cdFx0b3BlbkVycm9yU29saWQ6ICRvcGVuLWVycm9yLXNpbHZlci1zb2xpZFxuXHQpXG4pO1xuXG4gIFxuICAvKlxuICAgKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGVtZXNcbiAgICovXG4gIEBtaXhpbiB0aGVtaWZ5KCR0aGVtZXMpIHtcblx0QGVhY2ggJHRoZW1lLCAkbWFwIGluICR0aGVtZXMge1xuXHQgIC50aGVtZS0jeyR0aGVtZX0gJiB7XG5cdFx0JHRoZW1lLW1hcDogKCkgIWdsb2JhbDtcblx0XHRAZWFjaCAka2V5LCAkc3VibWFwIGluICRtYXAge1xuXHRcdCAgJHZhbHVlOiBtYXAtZ2V0KG1hcC1nZXQoJHRoZW1lcywgJHRoZW1lKSwgJyN7JGtleX0nKTtcblx0XHQgICR0aGVtZS1tYXA6IG1hcC1tZXJnZSgkdGhlbWUtbWFwLCAoJGtleTogJHZhbHVlKSkgIWdsb2JhbDtcblx0XHR9XG5cdFx0QGNvbnRlbnQ7XG5cdFx0JHRoZW1lLW1hcDogbnVsbCAhZ2xvYmFsO1xuXHQgIH1cblx0fVxuICB9XG4gIFxuICBAZnVuY3Rpb24gdGhlbWVkKCRrZXkpIHtcblx0QHJldHVybiBtYXAtZ2V0KCR0aGVtZS1tYXAsICRrZXkpO1xuICB9XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKlxuICAgKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGVtZXNcbiAgICovXG4uc2VsZWN0ZWQtZmlsdGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpOyB9XG4gIC50aGVtZS1leHRyYS1zbSAuc2VsZWN0ZWQtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgLnRoZW1lLXNtIC5zZWxlY3RlZC1maWx0ZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAudGhlbWUtcmVnIC5zZWxlY3RlZC1maWx0ZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAudGhlbWUtbGcgLnNlbGVjdGVkLWZpbHRlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkOyB9XG4gIC50aGVtZS1leHRyYS1sZyAuc2VsZWN0ZWQtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgLnRoZW1lLWJsdWUgLnNlbGVjdGVkLWZpbHRlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzgxYTY7IH1cbiAgLnRoZW1lLW9yYW5nZSAuc2VsZWN0ZWQtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwOGI0MTsgfVxuICAudGhlbWUtZ3JlZW4gLnNlbGVjdGVkLWZpbHRlci1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ODlmMzg7IH1cbiAgLnRoZW1lLXB1cnBsZSAuc2VsZWN0ZWQtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiNzZkYjsgfVxuICAudGhlbWUtZ3JheSAuc2VsZWN0ZWQtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTsgfVxuICAudGhlbWUtc2lsdmVyIC5zZWxlY3RlZC1maWx0ZXItY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5OyB9XG4gIC5zZWxlY3RlZC1maWx0ZXItY29udGFpbmVyIC50cmlhbmdsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IC02cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmZmZmZmY7IH1cbiAgLnNlbGVjdGVkLWZpbHRlci1jb250YWluZXIgLmZvcm0tY29udHJvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG4gICAgLnNlbGVjdGVkLWZpbHRlci1jb250YWluZXIgLmZvcm0tY29udHJvbDpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDsgfVxuICAuc2VsZWN0ZWQtZmlsdGVyLWNvbnRhaW5lciAuZmEtdGltZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDsgfVxuICAuc2VsZWN0ZWQtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLXNlbGVjdC1hbGwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBtYXJnaW46IDBweDsgfVxuICAuc2VsZWN0ZWQtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLW9wdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4OyB9XG4gICAgLnRoZW1lLWJsdWUgLnNlbGVjdGVkLWZpbHRlci1jb250YWluZXIgLmZpbHRlci1vcHRpb25zIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlYmYxZjY7IH1cbiAgICAudGhlbWUtb3JhbmdlIC5zZWxlY3RlZC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItb3B0aW9ucyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBlNGRiOyB9XG4gICAgLnRoZW1lLWdyZWVuIC5zZWxlY3RlZC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItb3B0aW9ucyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZGZlY2QzOyB9XG4gICAgLnRoZW1lLXB1cnBsZSAuc2VsZWN0ZWQtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLW9wdGlvbnMge1xuICAgICAgYmFja2dyb3VuZDogI2U4ZTJlZTsgfVxuICAgIC50aGVtZS1ncmF5IC5zZWxlY3RlZC1maWx0ZXItY29udGFpbmVyIC5maWx0ZXItb3B0aW9ucyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyOyB9XG4gICAgLnRoZW1lLXNpbHZlciAuc2VsZWN0ZWQtZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLW9wdGlvbnMge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlMmUyZTIsICNmMmYyZjIpOyB9XG4gIC5zZWxlY3RlZC1maWx0ZXItY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgfVxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5cbi5zZWxlY3RlZC1maWx0ZXItY29udGFpbmVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogMjAwcHg7XG5cdGhlaWdodDogYXV0bztcblx0QGluY2x1ZGUgdGhlbWlmeSgkdGhlbWVzKSB7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgdGhlbWVkKCdvcGVuTHRTb2xpZCcpO1xuXHR9XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuNzUpO1xuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcblx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuNzUpO1xuXG5cdC50cmlhbmdsZSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDVweDtcblx0XHR0b3A6IC02cHg7XG5cdFx0d2lkdGg6IDA7XG5cdFx0aGVpZ2h0OiAwO1xuXHRcdGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmZmZmZmY7XG5cdH1cblxuXHQuZm9ybS1jb250cm9sIHtcblx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cblx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdH1cblx0fVxuXHQuZmEtdGltZXMge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogMTBweDtcblx0fVxuXG5cdC5maWx0ZXItc2VsZWN0LWFsbCB7XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHRwYWRkaW5nLWxlZnQ6IDBweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogMHB4O1xuXHRcdG1hcmdpbjogMHB4O1xuXHR9XG5cblx0LmZpbHRlci1vcHRpb25zIHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdEBpbmNsdWRlIHRoZW1pZnkoJHRoZW1lcykge1xuXHRcdFx0YmFja2dyb3VuZDogdGhlbWVkKCdvcGVuVWx0cmFMdCcpO1xuXHRcdH1cblx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDVweDtcblx0XHRvdmVyZmxvdzogYXV0bztcblx0XHRtYXgtaGVpZ2h0OiAxNTBweDtcblx0XHRtYXJnaW4tbGVmdDogLTVweDtcblx0XHRtYXJnaW4tcmlnaHQ6IC01cHg7XG5cdH1cblx0LmJ1dHRvbi1jb250YWluZXIge1xuXHRcdHBhZGRpbmctdG9wOiAxMHB4O1xuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/selected-filter/selected-filter.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/selected-filter/selected-filter.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const selected_overlay_tokens_1 = __webpack_require__(/*! ./selected/selected-overlay-tokens */ "./src/app/components/selected-filter/selected/selected-overlay-tokens.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const filter_type_1 = __webpack_require__(/*! ../../shared/classes/filter-type */ "./src/app/shared/classes/filter-type.ts");
const theme_service_1 = __webpack_require__(/*! ./../../services/theme/theme.service */ "./src/app/services/theme/theme.service.ts");
let SelectedFilterComponent = class SelectedFilterComponent {
    constructor(data, fb, themeService, elementRef) {
        this.data = data;
        this.fb = fb;
        this.themeService = themeService;
        this.elementRef = elementRef;
        this.filterOptionEmitter = new core_1.EventEmitter();
        this.preselectedOptions = this.data.selectedRowVisibilityOptions;
    }
    ngOnInit() {
        this.themeService.themes.forEach(theme => {
            this.elementRef.nativeElement.classList.add(theme);
        });
        this.form = this.fb.group({
            selectAll: [this.preselectedOptions.length !== 0, forms_1.Validators.required],
            selectedRows: [this.preselectedOptions.indexOf(true) !== -1, forms_1.Validators.required],
            unselectedRows: [this.preselectedOptions.indexOf(false) !== -1, forms_1.Validators.required]
        });
    }
    ngAfterViewInit() {
    }
    mixedCheckValues() {
        if (this.form.controls['selectAll'].value === false) {
            return false;
        }
        let hasTrue = false;
        let hasFalse = false;
        Object.keys(this.form.controls).forEach(key => {
            if (key !== 'selectAll') {
                if (this.form.controls[key].value === true) {
                    hasTrue = true;
                }
                else {
                    hasFalse = true;
                }
            }
        });
        return hasTrue && hasFalse;
    }
    checkboxChanged(e) {
        const checkbox = e.target;
        const id = checkbox.id;
        if (e.target === this.selectAllInput.nativeElement) {
            const selectAllValue = this.form.controls['selectAll'].value;
            this.setAllFormControlsTo(selectAllValue);
        }
        else {
            if (this.form.controls[id].value === true) {
                this.form.controls['selectAll'].setValue(true);
            }
            else {
                let hasTrue = false;
                let hasFalse = false;
                Object.keys(this.form.controls).forEach(key => {
                    if (key !== 'selectAll') {
                        if (this.form.controls[key].value === true) {
                            hasTrue = true;
                        }
                        else {
                            hasFalse = true;
                        }
                    }
                });
                if (!hasTrue && hasFalse) {
                    this.form.controls['selectAll'].setValue(false);
                }
            }
        }
        this.onSubmit(this.form);
    }
    setAllFormControlsTo(val) {
        Object.keys(this.form.controls).forEach(key => {
            if (key !== 'selectAll') {
                this.form.controls[key].setValue(val);
            }
        });
    }
    resetFilter(e) {
        this.form.controls['selectAll'].setValue(true);
        this.setAllFormControlsTo(true);
    }
    onSubmit(form) {
        const formData = form.value;
        let filterType = filter_type_1.FilterType.EXACT_MATCH;
        let validFilterValues;
        if (this.form.controls['selectedRows'].value && this.form.controls['unselectedRows'].value) {
            validFilterValues = [true, false];
            // filterType = FilterType.EXACT_MATCH;
        }
        else if (this.form.controls['selectedRows'].value) {
            validFilterValues = [true];
            // filterType = FilterType.SELECTED;
        }
        else if (this.form.controls['unselectedRows'].value) {
            // filterType = FilterType.UNSELECTED;
            validFilterValues = [false];
        }
        else {
            validFilterValues = [];
        }
        const filterOption = {
            varName: 'selected',
            filterType,
            validFilterValues
        };
        this.filterOptionEmitter.emit(filterOption);
    }
};
SelectedFilterComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [selected_overlay_tokens_1.SELECTED_OVERLAY_DATA,] }] },
    { type: forms_1.FormBuilder },
    { type: theme_service_1.ThemeService },
    { type: core_1.ElementRef }
];
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], SelectedFilterComponent.prototype, "filterOptionEmitter", void 0);
tslib_1.__decorate([
    core_1.ViewChild('selectAll', { static: false }),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], SelectedFilterComponent.prototype, "selectAllInput", void 0);
SelectedFilterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tablejs-selected-filter',
        template: __webpack_require__(/*! raw-loader!./selected-filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/selected-filter/selected-filter.component.html"),
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__(/*! ./selected-filter.component.scss */ "./src/app/components/selected-filter/selected-filter.component.scss")]
    }),
    tslib_1.__param(0, core_1.Inject(selected_overlay_tokens_1.SELECTED_OVERLAY_DATA)),
    tslib_1.__metadata("design:paramtypes", [Object, forms_1.FormBuilder,
        theme_service_1.ThemeService,
        core_1.ElementRef])
], SelectedFilterComponent);
exports.SelectedFilterComponent = SelectedFilterComponent;


/***/ }),

/***/ "./src/app/components/selected-filter/selected/selected-overlay-tokens.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/selected-filter/selected/selected-overlay-tokens.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
exports.SELECTED_OVERLAY_DATA = new core_1.InjectionToken('SELECTED_OVERLAY_DATA');


/***/ }),

/***/ "./src/app/fps/components/fps-meter/fps-meter.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/fps/components/fps-meter/fps-meter.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fps {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 100px;\n  margin-top: 8px;\n  margin-right: 10px;\n  padding: 10px;\n  text-align: left;\n  background-color: #ffffff;\n  border: 1px solid #dddddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL2FwcC9mcHMvY29tcG9uZW50cy9mcHMtbWV0ZXIvZnBzLW1ldGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUFFLGdCQUFnQjtFQUMvQix5QkFBeUI7RUFDekIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mcHMvY29tcG9uZW50cy9mcHMtbWV0ZXIvZnBzLW1ldGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZwcyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwcHg7XG5cdHJpZ2h0OiAwcHg7XG5cdHdpZHRoOiAxMDBweDtcblx0bWFyZ2luLXRvcDogOHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdHBhZGRpbmc6IDEwcHg7IHRleHQtYWxpZ246IGxlZnQ7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/fps/components/fps-meter/fps-meter.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/fps/components/fps-meter/fps-meter.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let FpsMeterComponent = class FpsMeterComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.fps = 0;
        this.lastLoop = Date.now();
    }
    ngOnInit() {
        this.timeout();
    }
    frameLoop() {
        const thisLoop = Date.now();
        this.fps = Math.round(1000 / (thisLoop - this.lastLoop));
        this.lastLoop = thisLoop;
        this.cdr.detectChanges();
        return this.fps;
    }
    timeout() {
        setTimeout(() => {
            this.frameLoop();
            this.timeout();
        }, 1000 / 60);
    }
};
FpsMeterComponent.ctorParameters = () => [
    { type: core_1.ChangeDetectorRef }
];
FpsMeterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tablejs-fps-meter',
        template: __webpack_require__(/*! raw-loader!./fps-meter.component.html */ "./node_modules/raw-loader/index.js!./src/app/fps/components/fps-meter/fps-meter.component.html"),
        host: { class: 'fps' },
        encapsulation: core_1.ViewEncapsulation.None,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        styles: [__webpack_require__(/*! ./fps-meter.component.scss */ "./src/app/fps/components/fps-meter/fps-meter.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], FpsMeterComponent);
exports.FpsMeterComponent = FpsMeterComponent;


/***/ }),

/***/ "./src/app/fps/frames-per-second.module.ts":
/*!*************************************************!*\
  !*** ./src/app/fps/frames-per-second.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const fps_meter_component_1 = __webpack_require__(/*! ./components/fps-meter/fps-meter.component */ "./src/app/fps/components/fps-meter/fps-meter.component.ts");
let FramesPerSecondModule = class FramesPerSecondModule {
};
FramesPerSecondModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            fps_meter_component_1.FpsMeterComponent
        ],
        imports: [
            common_1.CommonModule
        ],
        exports: [
            fps_meter_component_1.FpsMeterComponent
        ]
    })
], FramesPerSecondModule);
exports.FramesPerSecondModule = FramesPerSecondModule;


/***/ }),

/***/ "./src/app/pipes/phone.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/phone.pipe.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const min_1 = __webpack_require__(/*! libphonenumber-js/min */ "./node_modules/libphonenumber-js/min/index.js");
let PhonePipe = class PhonePipe {
    transform(phoneValue, country) {
        try {
            const phoneNumber = min_1.parsePhoneNumber(phoneValue + '', country);
            return phoneNumber.formatNational();
        }
        catch (error) {
            return phoneValue;
        }
    }
};
PhonePipe = tslib_1.__decorate([
    core_1.Pipe({
        name: 'phone'
    })
], PhonePipe);
exports.PhonePipe = PhonePipe;


/***/ }),

/***/ "./src/app/services/cell-validator/cell-validator.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/cell-validator/cell-validator.service.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let CellValidatorService = class CellValidatorService {
    constructor() { }
    hasFirstAndLastName(content) {
        let names = content.split(' ');
        return names.length === 2 && names[1].length > 0; // regEx.test(content);
    }
    isNotEmpty(content) {
        return content.length > 0 && content.charAt(0) !== ' ';
    }
    itemExistsInList(item, list) {
        return list.indexOf(item) !== -1;
    }
    // Verify if email meets all requirements
    emailIsValid(email) {
        email = email.toLowerCase();
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
        return re.test(email);
    }
};
CellValidatorService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CellValidatorService);
exports.CellValidatorService = CellValidatorService;


/***/ }),

/***/ "./src/app/services/excel/excel.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/excel/excel.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const XLSX = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
const file_saver_1 = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
const phone_pipe_1 = __webpack_require__(/*! ./../../pipes/phone.pipe */ "./src/app/pipes/phone.pipe.ts");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
let ExcelService = class ExcelService {
    constructor(phonePipe, currencyPipe) {
        this.phonePipe = phonePipe;
        this.currencyPipe = currencyPipe;
        this.wb = XLSX.utils.book_new();
    }
    saveWorkbookFromData(data, fileName, includeCustomerData = true, includeTransactionData = true) {
        this.wb = XLSX.utils.book_new();
        this.wb.Props = {
            Title: 'Customer Data',
            Subject: 'Grid Data Test',
            Author: 'Red Stapler',
            CreatedDate: new Date()
        };
        if (includeCustomerData) {
            this.wb.SheetNames.push('Customer Data');
            const ws_data = this.generateCustomerData(data); // a row with 2 columns
            const ws = XLSX.utils.aoa_to_sheet(ws_data);
            this.wb.Sheets['Customer Data'] = ws;
        }
        if (includeTransactionData) {
            this.generateCustomerTransactionsWorksheet(data);
        }
        const wbout = XLSX.write(this.wb, { bookType: 'xlsx', type: 'binary' });
        file_saver_1.saveAs(new Blob([this.s2ab(wbout)], { type: 'application/octet-stream' }), fileName + '.xlsx');
    }
    s2ab(s) {
        const buf = new ArrayBuffer(s.length); // convert s to arrayBuffer
        const view = new Uint8Array(buf); // create uint8array as viewer
        for (let i = 0; i < s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF; // convert to octet
        }
        return buf;
    }
    generateCustomerData(data) {
        const customerData = [['ID', 'Name', 'Email', 'Phone Number', 'Sale Count', 'Gross Sales', 'Net Sales', 'Star Rating', 'Total Items Sold', 'Total Sales']];
        data.forEach(item => {
            customerData.push([
                item.id,
                item.name,
                item.email,
                this.phonePipe.transform(item.phone, 'US'),
                item.sales.length,
                this.currencyPipe.transform(item.gross),
                this.currencyPipe.transform(item.net),
                Math.round(item.userRating) / 100,
                item.totalItemsSold,
                item.totalSales
            ]);
        });
        return customerData;
    }
    generateCustomerTransactionsWorksheet(data) {
        const saleData = [];
        data.forEach((item, index) => {
            saleData.push(['Customer ' + index + ' Sales']);
            saleData.push([]);
            saleData.push(['Item Name', 'Quanity', 'Base Price', 'Sale Price', 'Shipping Cost', 'Profit', 'Sale Rating']);
            item.sales.forEach(sale => {
                saleData.push([
                    sale.productName,
                    sale.quantity,
                    this.currencyPipe.transform(sale.salePrice),
                    this.currencyPipe.transform(sale.salePrice * sale.quantity),
                    this.currencyPipe.transform(sale.shippingCost),
                    this.currencyPipe.transform(sale.salePrice * sale.quantity - sale.shippingCost),
                    sale.starRating
                ]);
            });
            saleData.push([]);
        });
        this.wb.SheetNames.push('Customer_Sales');
        const ws = XLSX.utils.aoa_to_sheet(saleData);
        this.wb.Sheets['Customer_Sales'] = ws;
    }
};
ExcelService.ctorParameters = () => [
    { type: phone_pipe_1.PhonePipe },
    { type: common_1.CurrencyPipe }
];
ExcelService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [phone_pipe_1.PhonePipe, common_1.CurrencyPipe])
], ExcelService);
exports.ExcelService = ExcelService;


/***/ }),

/***/ "./src/app/services/export/export-options/export-options.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/services/export/export-options/export-options.service.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let ExportOptionsService = class ExportOptionsService {
    constructor() { }
    set exportOptionEmitter(optionEmitter) {
        this._exportOptionEmitter = optionEmitter;
        this._exportOptionEmitter.subscribe(emit => {
            this._lastEmit = emit;
        });
    }
    get exportOptionEmitter() {
        return this._exportOptionEmitter;
    }
    get lastEmit() {
        return this._lastEmit;
    }
};
ExportOptionsService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ExportOptionsService);
exports.ExportOptionsService = ExportOptionsService;


/***/ }),

/***/ "./src/app/services/filter/filter.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/filter/filter.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const filter_type_1 = __webpack_require__(/*! ../../shared/classes/filter-type */ "./src/app/shared/classes/filter-type.ts");
let FilterService = class FilterService {
    constructor() { }
    iterate(obj, option) {
        let containsValue = false;
        Object.keys(obj).forEach(key => {
            if (obj[key] instanceof Object) {
                if (this.iterate(obj[key], option)) {
                    containsValue = true;
                }
            }
            else {
                if (obj[key].toString().toLowerCase().indexOf(option.validFilterValues[0].toLowerCase()) !== -1) {
                    containsValue = true;
                }
            }
        });
        return containsValue;
    }
    filter(arr, option, deep = false) {
        switch (option.filterType) {
            case filter_type_1.FilterType.EXISTS_IN_TEXT:
                return arr.filter(item => {
                    let props = Object.keys(item);
                    for (let prop of props) {
                        if (deep && (item[prop] instanceof Array || item[prop] instanceof Object)) {
                            if (this.iterate(item, option)) {
                                return true;
                            }
                        }
                        if (item[prop].toString().toLowerCase().indexOf(option.validFilterValues[0].toLowerCase()) !== -1) {
                            return true;
                        }
                    }
                    return false;
                });
            default:
                return arr.filter(item => {
                    let prop = item[option.varName];
                    for (let i = 0; i < option.validFilterValues.length; i++) {
                        switch (option.filterType) {
                            case filter_type_1.FilterType.SELECTED_AND_UNSELECTED:
                                if (this.filterByExact(prop, true) || this.filterByExact(prop, false)) {
                                    return true;
                                }
                                break;
                            case filter_type_1.FilterType.SELECTED:
                                if (this.filterByExact(prop, true)) {
                                    return true;
                                }
                                break;
                            case filter_type_1.FilterType.UNSELECTED:
                                if (this.filterByExact(prop, false)) {
                                    return true;
                                }
                                break;
                            case filter_type_1.FilterType.EXACT_MATCH:
                                if (this.filterByExact(prop, option.validFilterValues[i])) {
                                    return true;
                                }
                                break;
                            case filter_type_1.FilterType.AREA_CODE:
                                if (this.filterByAreaCode(prop, option.validFilterValues[i])) {
                                    return true;
                                }
                                break;
                        }
                    }
                    return false;
                });
        }
    }
    filterByExact(prop, filterValue) {
        return prop === filterValue;
    }
    filterByAreaCode(prop, filterValue) {
        return prop.toString().substring(0, 3) === filterValue.toString();
    }
    filterByText() {
        return true;
    }
    getExistingFilter(filterOptions, filterOption) {
        return filterOptions.filter(item => {
            return item.varName === filterOption.varName && item.filterType === filterOption.filterType;
        })[0];
    }
};
FilterService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], FilterService);
exports.FilterService = FilterService;


/***/ }),

/***/ "./src/app/services/grid-data/grid-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/grid-data/grid-data.service.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let GridDataService = class GridDataService {
    constructor() {
        this.seed = 123456789;
        this.m = Math.pow(2, 32);
        this.a = 1103515245;
        this.c = 12345;
        this.firstNames = [
            'Wilbur',
            'Clementine',
            'Samuel',
            'Shiela',
            'Roger',
            'Bucky',
            'Thomas',
            'Michael',
            'Marla',
            'Anna',
            'Donna',
            'Jessica',
            'Lucas',
            'Barbara',
            'Ned',
            'Timothy',
            'Wilma',
            'Barney',
            'Casper',
            'Gunner',
            'Rip',
            'Stephanie',
            'Scooter',
            'Skip',
            'Alfred',
            'Amy',
            'Tucker',
            'Sissy',
            'Benjamin',
            'Sean',
            'Cheryl',
            'Cherry'
        ];
        this.lastNames = [
            'Wilson',
            'Patel',
            'Phillips',
            'Daniels',
            'Smith',
            'Wong',
            'Barclay',
            'Roberts',
            'Michaels',
            'Fitzgerald',
            'McMann',
            'Cooper',
            'Lovitz',
            'Stephens',
            'McGregor',
            'MacDonald',
            'Bean',
            'Clousing',
            'Hoffman',
            'Gunn',
            'Feldman',
            'Spears',
            'Rosengren',
            'Williamson',
            'Flemming',
            'Dodd',
            'Chase',
            'Burk',
            'Long',
            'Best',
            'Black',
            'White',
            'Perez',
            'Ramirez',
            'Hsu',
        ];
        this.separators = ['', '.', '-'];
        this.domains = [
            'aol.com',
            'gmail.com',
            'harvard.edu',
            'yahoo.com',
            'hotmail.com'
        ];
        this.areaCodes = [
            310,
            212,
            305,
            702,
            202,
            404,
            312,
            949,
            713
        ];
        this.products = [
            { name: 'Scissors', saleRange: [3, 10], shippingCostRange: [1.1, 3.8] },
            { name: 'Box cutters', saleRange: [4, 15], shippingCostRange: [2, 5.3] },
            { name: 'Stuffed animal', saleRange: [4, 115], shippingCostRange: [2, 5.7] },
            { name: 'Computer', saleRange: [200, 3150], shippingCostRange: [20, 30] },
            { name: 'Blanket', saleRange: [10, 350], shippingCostRange: [2, 17] },
            { name: 'Power drill', saleRange: [20, 150], shippingCostRange: [9, 30] },
            { name: 'Scarf', saleRange: [10, 150], shippingCostRange: [2, 4] },
            { name: 'Dog food', saleRange: [10, 50], shippingCostRange: [9, 20] },
            { name: 'Lamp', saleRange: [10, 150], shippingCostRange: [6, 30] },
            { name: 'Coat', saleRange: [80, 180], shippingCostRange: [9, 16] },
            { name: 'Shirt', saleRange: [8, 80], shippingCostRange: [2, 13] },
            { name: 'Pants', saleRange: [12, 110], shippingCostRange: [3, 15] },
            { name: 'Baby Onesie', saleRange: [1, 20], shippingCostRange: [1, 2] },
            { name: 'Block Set', saleRange: [10, 50], shippingCostRange: [3, 5] }
        ];
        this.maxSales = 200;
    }
    getAreaCodes() {
        return this.areaCodes;
    }
    generateGridData(count) {
        let index = 0;
        const baseItems = [];
        for (let i = 0; i < count; i++) {
            const name = this.generateName();
            let item = {
                id: i,
                name: name,
                email: this.generateRandomEmail(name),
                phone: this.generateRandomPhoneNumber(),
                sales: this.generateRandomSales(),
                collapsed: true
            };
            item.gross = this.calculateTotalGrossProductSales(item);
            item.net = this.calculateTotalNetProductSales(item);
            item.userRating = this.calculateAverageStarPercent(item) * 5;
            item.totalItemsSold = this.calculateTotalItemsSold(item.sales);
            item.totalSales = item.sales.length;
            baseItems.push(item);
        }
        return baseItems;
    }
    calculateTotalGrossProductSales(item) {
        let gross = 0;
        for (let sale of item.sales) {
            gross += this.calculateItemSalePrice(sale);
        }
        return gross;
    }
    calculateTotalNetProductSales(item) {
        let net = 0;
        for (let sale of item.sales) {
            net += this.calculateItemNetProfit(sale);
        }
        return net;
    }
    calculateAverageStarPercent(item) {
        let medianRating = 0;
        for (let sale of item.sales) {
            medianRating += this.calculateStarPercent(sale);
        }
        return medianRating / item.sales.length;
    }
    calculateStarPercent(sale) {
        return sale.starRating / 5 * 100;
    }
    calculateItemNetProfit(sale) {
        return this.calculateItemSalePrice(sale) - sale.shippingCost;
    }
    calculateItemSalePrice(sale) {
        return sale.salePrice * sale.quantity;
    }
    calculateTotalItemsSold(sales) {
        return sales.map(sale => sale.quantity).reduce((prev, curr) => prev + curr);
    }
    generateName() {
        const randFirstName = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
        const randLastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
        return randFirstName + ' ' + randLastName;
    }
    generateRandomEmail(name) {
        const names = name.split(' ');
        const firstName = names[0].toLowerCase();
        const lastName = names[1].toLowerCase();
        const separator = this.separators[Math.floor(Math.random() * this.separators.length)];
        const domain = this.domains[Math.floor(Math.random() * this.domains.length)].toLowerCase();
        return firstName + separator + lastName + '@' + domain;
    }
    generateRandomPhoneNumber() {
        const areaCode = this.areaCodes[Math.floor(Math.random() * this.areaCodes.length)].toString();
        return areaCode + '555' + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
    }
    generateRandomSales() {
        const sales = [];
        const totalTransactions = Math.random() * this.maxSales;
        for (let i = 0; i < totalTransactions; i++) {
            const productIndex = Math.floor(Math.random() * this.products.length);
            const quantity = Math.ceil(Math.random() * 5);
            const selectedProduct = this.products[productIndex];
            sales.push({
                quantity,
                productName: selectedProduct.name,
                salePrice: this.generateSalePrice(selectedProduct.saleRange),
                shippingCost: this.generateShippingCost(selectedProduct.shippingCostRange),
                starRating: this.generateRandomStarRating()
            });
        }
        return sales;
    }
    generateSalePrice(saleRange) {
        let price = Math.random() * (saleRange[1] - saleRange[0]) + saleRange[0];
        price = Math.round(price * 100) / 100;
        return price;
    }
    generateShippingCost(shippingRange) {
        let cost = Math.random() * (shippingRange[1] - shippingRange[0]) + shippingRange[0];
        cost = Math.round(cost * 100) / 100;
        return cost;
    }
    generateRandomStarRating() {
        let rating = Math.random() * 100;
        if (rating > 50) {
            return 5;
        }
        else if (rating > 25) {
            return 4;
        }
        else if (rating > 20) {
            return 3;
        }
        else if (rating > 15) {
            return 2;
        }
        else if (rating > 8) {
            return 1;
        }
        else {
            return 0;
        }
    }
    pseudoRandom() {
        this.seed = (this.a * this.seed + this.c) % this.m;
        return this.seed / this.m;
    }
};
GridDataService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], GridDataService);
exports.GridDataService = GridDataService;


/***/ }),

/***/ "./src/app/services/print/print-options/print-options.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/print/print-options/print-options.service.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let PrintOptionsService = class PrintOptionsService {
    constructor() { }
    set printOptionEmitter(optionEmitter) {
        this._printOptionEmitter = optionEmitter;
        this._printOptionEmitter.subscribe(emit => {
            this._lastEmit = emit;
        });
    }
    get printOptionEmitter() {
        return this._printOptionEmitter;
    }
    get lastEmit() {
        return this._lastEmit;
    }
};
PrintOptionsService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PrintOptionsService);
exports.PrintOptionsService = PrintOptionsService;


/***/ }),

/***/ "./src/app/services/theme/theme.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/theme/theme.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let ThemeService = class ThemeService {
    constructor() {
        this.themeChanged = new core_1.EventEmitter();
        this.themeColor = 'blue';
        this.themeSize = 'reg';
    }
    get theme() {
        return 'theme-' + this.themeSize + ' theme-' + this.themeColor;
    }
    get themes() {
        return this.theme.split(' ');
    }
    setThemeColor(color) {
        this.themeColor = color;
        this.themeChanged.emit();
    }
    setThemeSize(size) {
        this.themeSize = size;
        this.themeChanged.emit();
    }
    getFullTableHeight(numOfItems) {
        switch (this.themeSize) {
            case 'extra-sm':
                return numOfItems * 31;
            case 'sm':
                return numOfItems * 35.1875;
            case 'lg':
                return numOfItems * 51;
            case 'extra-lg':
                return numOfItems * 62;
            default:
                return numOfItems * 41;
        }
    }
};
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], ThemeService.prototype, "themeChanged", void 0);
ThemeService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ThemeService);
exports.ThemeService = ThemeService;


/***/ }),

/***/ "./src/app/shared/classes/filter-type.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/classes/filter-type.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FilterType {
}
FilterType.EXACT_MATCH = '[FilterType] Exact Match';
FilterType.AREA_CODE = '[FilterType] Area Code';
FilterType.EXISTS_IN_TEXT = '[FilterType] Text';
FilterType.SELECTED = '[FilterType] Selected';
FilterType.UNSELECTED = '[FilterType] Unselected';
FilterType.SELECTED_AND_UNSELECTED = '[FilterType] Selected and Unselected';
exports.FilterType = FilterType;


/***/ }),

/***/ "./src/app/tablejs/components/drag-and-drop-ghost/drag-and-drop-ghost.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/tablejs/components/drag-and-drop-ghost/drag-and-drop-ghost.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drag-and-drop-ghost {\n  position: absolute;\n  display: block;\n  width: 100px;\n  height: 100px;\n  top: 00px;\n  left: 0px;\n  padding: 0px;\n  margin: 0px;\n  align-items: center;\n  cursor: move !important;\n  font-size: 14px;\n  overflow: visible;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 10;\n  opacity: 1; }\n  .drag-and-drop-ghost img {\n    pointer-events: none;\n    position: inherit;\n    border: 1px solid #dddddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL2FwcC90YWJsZWpzL2NvbXBvbmVudHMvZHJhZy1hbmQtZHJvcC1naG9zdC9kcmFnLWFuZC1kcm9wLWdob3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFHWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsVUFBVSxFQUFBO0VBckJkO0lBNEJRLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJsZWpzL2NvbXBvbmVudHMvZHJhZy1hbmQtZHJvcC1naG9zdC9kcmFnLWFuZC1kcm9wLWdob3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYWctYW5kLWRyb3AtZ2hvc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB0b3A6IDAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcblx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBcbiAgICAvLyBkaXYge1xuICAgIC8vICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAvLyAgICAgcG9zaXRpb246IGluaGVyaXQ7XG4gICAgLy8gfVxuICAgIGltZyB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/tablejs/components/drag-and-drop-ghost/drag-and-drop-ghost.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/tablejs/components/drag-and-drop-ghost/drag-and-drop-ghost.component.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let DragAndDropGhostComponent = class DragAndDropGhostComponent {
    constructor() {
        this.show = false;
        this.left = 0;
        this.top = 0;
    }
    ngOnInit() {
    }
    getTransform() {
        return 'translate(' + this.left + 'px, ' + this.top + 'px';
    }
};
DragAndDropGhostComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tablejs-drag-and-drop-ghost',
        template: __webpack_require__(/*! raw-loader!./drag-and-drop-ghost.component.html */ "./node_modules/raw-loader/index.js!./src/app/tablejs/components/drag-and-drop-ghost/drag-and-drop-ghost.component.html"),
        encapsulation: core_1.ViewEncapsulation.None,
        host: { class: 'drag-and-drop-ghost' },
        styles: [__webpack_require__(/*! ./drag-and-drop-ghost.component.scss */ "./src/app/tablejs/components/drag-and-drop-ghost/drag-and-drop-ghost.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DragAndDropGhostComponent);
exports.DragAndDropGhostComponent = DragAndDropGhostComponent;


/***/ }),

/***/ "./src/app/tablejs/components/grid/grid.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/tablejs/components/grid/grid.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tablejs-table-container {\n  display: inline-block;\n  padding: 0px !important;\n  vertical-align: top; }\n\n.tablejs-infinite-scroll-viewport {\n  position: relative;\n  height: 301px;\n  overflow: hidden;\n  overflow-y: auto; }\n\n.example-viewport table {\n  overflow: visible; }\n\n.tablejs-table-width {\n  /* width: 2700px; */\n  width: auto; }\n\n.tablejs-table-container tr td, .tablejs-table-container tr th {\n  padding: 0rem; }\n\ntr td div, tr th div {\n  padding: 0.75rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.tablejs-resizeable {\n  cursor: ew-resize; }\n\n.tablejs-editable-cell {\n  display: inline-block;\n  width: 100%;\n  padding: 5px;\n  margin: -5px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.05); }\n\n.tablejs-editable-cell div {\n    position: absolute;\n    display: block;\n    left: -3px;\n    top: -3px;\n    width: 100%; }\n\n.tablejs-editable-cell input {\n    position: relative;\n    top: 0px;\n    left: 0px;\n    display: block;\n    width: 100%; }\n\n.tablejs-editable-cell input.error {\n      outline-color: #990000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL2FwcC90YWJsZWpzL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MscUJBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFlO0VBQ2YsZ0JBQWUsRUFBQTs7QUFFaEI7RUFDQyxpQkFBaUIsRUFBQTs7QUFFbEI7RUFDQyxtQkFBQTtFQUNBLFdBQVUsRUFBQTs7QUFFWDtFQUVFLGFBQWEsRUFBQTs7QUFHZjtFQUNDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUV4QjtFQUNDLGlCQUFpQixFQUFBOztBQUVsQjtFQUNDLHFCQUFxQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNmLFlBQVk7RUFDWixvQ0FBb0M7RUFDakMscURBQXFELEVBQUE7O0FBTnpEO0lBU0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVcsRUFBQTs7QUFiYjtJQWdCRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxjQUFjO0lBQ2QsV0FBVyxFQUFBOztBQXBCYjtNQXVCRyxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYmxlanMvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZy1ncmlkIHJlcGxhY2VtZW50IHNwZWNpZmljIHN0eWxlc1xuXG4udGFibGVqcy10YWJsZS1jb250YWluZXIge1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG5cdHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cblxuLnRhYmxlanMtaW5maW5pdGUtc2Nyb2xsLXZpZXdwb3J0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRoZWlnaHQ6IDMwMXB4O1xuXHRvdmVyZmxvdzpoaWRkZW47XG5cdG92ZXJmbG93LXk6YXV0bztcbn1cbi5leGFtcGxlLXZpZXdwb3J0IHRhYmxlIHtcblx0b3ZlcmZsb3c6IHZpc2libGU7XG59XG4udGFibGVqcy10YWJsZS13aWR0aCB7XG5cdC8qIHdpZHRoOiAyNzAwcHg7ICovXG5cdHdpZHRoOmF1dG87XG59XG4udGFibGVqcy10YWJsZS1jb250YWluZXIge1xuXHR0ciB0ZCwgdHIgdGgge1xuXHRcdHBhZGRpbmc6IDByZW07XG5cdH1cbn1cbnRyIHRkIGRpdiwgdHIgdGggZGl2IHtcblx0cGFkZGluZzogMC43NXJlbTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udGFibGVqcy1yZXNpemVhYmxlIHtcblx0Y3Vyc29yOiBldy1yZXNpemU7XG59XG4udGFibGVqcy1lZGl0YWJsZS1jZWxsIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcblx0bWFyZ2luOiAtNXB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5cblx0ZGl2IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0bGVmdDogLTNweDtcblx0XHR0b3A6IC0zcHg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0aW5wdXQge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IDBweDtcblx0XHRsZWZ0OiAwcHg7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDEwMCU7XG5cblx0XHQmLmVycm9yIHtcblx0XHRcdG91dGxpbmUtY29sb3I6ICM5OTAwMDA7XG5cdFx0fVxuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/tablejs/components/grid/grid.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tablejs/components/grid/grid.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const column_reorder_event_1 = __webpack_require__(/*! ./../../shared/classes/events/column-reorder-event */ "./src/app/tablejs/shared/classes/events/column-reorder-event.ts");
const column_resize_event_1 = __webpack_require__(/*! ./../../shared/classes/events/column-resize-event */ "./src/app/tablejs/shared/classes/events/column-resize-event.ts");
let GridComponent = class GridComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.resizeColumnWidthByPercent = false;
        this.columnResizeStart = new core_1.EventEmitter();
        this.columnResize = new core_1.EventEmitter();
        this.columnResizeEnd = new core_1.EventEmitter();
        this.columnReorder = new core_1.EventEmitter();
        this.columnReorderStart = new core_1.EventEmitter();
        this.columnReorderEnd = new core_1.EventEmitter();
    }
    ngOnInit() {
        if (this.linkClass !== undefined) {
            this.elementRef.nativeElement.classList.add(this.linkClass);
        }
    }
    columnResizeStarted(e) {
        e.type = column_resize_event_1.ColumnResizeEvent.ON_RESIZE_START;
        this.columnResizeStart.emit(e);
    }
    columnResized(e) {
        e.type = column_resize_event_1.ColumnResizeEvent.ON_RESIZE;
        this.columnResize.emit(e);
    }
    columnResizeEnded(e) {
        e.type = column_resize_event_1.ColumnResizeEvent.ON_RESIZE_END;
        this.columnResizeEnd.emit(e);
    }
    columnReorderStarted(e) {
        e.type = column_reorder_event_1.ColumnReorderEvent.ON_REORDER_START;
        this.columnReorderStart.emit(e);
    }
    columnReordered(e) {
        e.type = column_reorder_event_1.ColumnReorderEvent.ON_REORDER;
        this.columnReorder.emit(e);
    }
    columnReorderEnded(e) {
        e.type = column_reorder_event_1.ColumnReorderEvent.ON_REORDER_END;
        this.columnReorderEnd.emit(e);
    }
};
GridComponent.ctorParameters = () => [
    { type: core_1.ElementRef }
];
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Function)
], GridComponent.prototype, "dragAndDropGhostFilter", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], GridComponent.prototype, "linkClass", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], GridComponent.prototype, "resizeColumnWidthByPercent", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridComponent.prototype, "columnResizeStart", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridComponent.prototype, "columnResize", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridComponent.prototype, "columnResizeEnd", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridComponent.prototype, "columnReorder", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridComponent.prototype, "columnReorderStart", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridComponent.prototype, "columnReorderEnd", void 0);
GridComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tablejs-grid',
        template: __webpack_require__(/*! raw-loader!./grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/tablejs/components/grid/grid.component.html"),
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/tablejs/components/grid/grid.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
], GridComponent);
exports.GridComponent = GridComponent;


/***/ }),

/***/ "./src/app/tablejs/components/horiz-resize-grip/horiz-resize-grip.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/tablejs/components/horiz-resize-grip/horiz-resize-grip.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resize-grip {\n  cursor: ew-resize;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  height: 100%;\n  width: 30px;\n  padding: 0px;\n  margin: 0px;\n  display: block; }\n  .resize-grip i {\n    left: 0.5px;\n    color: #ffffff;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-8px);\n            transform: translateY(-8px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL2FwcC90YWJsZWpzL2NvbXBvbmVudHMvaG9yaXotcmVzaXplLWdyaXAvaG9yaXotcmVzaXplLWdyaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVM7RUFDVCxRQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWMsRUFBQTtFQVRmO0lBWUUsV0FBVztJQUNYLGNBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYmxlanMvY29tcG9uZW50cy9ob3Jpei1yZXNpemUtZ3JpcC9ob3Jpei1yZXNpemUtZ3JpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNpemUtZ3JpcCB7XG5cdGN1cnNvcjogZXctcmVzaXplO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OjBweDtcblx0dG9wOjBweDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDozMHB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdG1hcmdpbjogMHB4O1xuXHRkaXNwbGF5OiBibG9jaztcblxuXHRpIHtcblx0XHRsZWZ0OiAwLjVweDtcblx0XHRjb2xvcjojZmZmZmZmO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IDUwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/tablejs/components/horiz-resize-grip/horiz-resize-grip.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/tablejs/components/horiz-resize-grip/horiz-resize-grip.component.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let HorizResizeGripComponent = class HorizResizeGripComponent {
    constructor() { }
    ngOnInit() {
    }
};
HorizResizeGripComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tablejs-horiz-resize-grip',
        template: __webpack_require__(/*! raw-loader!./horiz-resize-grip.component.html */ "./node_modules/raw-loader/index.js!./src/app/tablejs/components/horiz-resize-grip/horiz-resize-grip.component.html"),
        host: { class: 'resize-grip' },
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__(/*! ./horiz-resize-grip.component.scss */ "./src/app/tablejs/components/horiz-resize-grip/horiz-resize-grip.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], HorizResizeGripComponent);
exports.HorizResizeGripComponent = HorizResizeGripComponent;


/***/ }),

/***/ "./src/app/tablejs/components/reorder-grip/reorder-grip.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tablejs/components/reorder-grip/reorder-grip.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-dots-container {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n  position: absolute;\n  display: block;\n  left: 0px;\n  top: 0px;\n  height: 100%;\n  width: 30px;\n  z-index: 5; }\n  .col-dots-container .dots-3 {\n    display: inline-block;\n    opacity: 0.5; }\n  th:hover .dots-3 {\n  display: inline-block;\n  opacity: 1; }\n  .dots-3 {\n  position: relative;\n  top: 50%;\n  width: 4px;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .dots-3:after {\n  content: '\\2807';\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi90YWJsZWpzLWRlbW8vc3JjL2FwcC90YWJsZWpzL2NvbXBvbmVudHMvcmVvcmRlci1ncmlwL3Jlb3JkZXItZ3JpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVc7RUFDWCxvQkFBbUI7RUFFbkIsWUFBVztFQUNULGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNiLFVBQVUsRUFBQTtFQVhYO0lBY0UscUJBQXFCO0lBQ3JCLFlBQVksRUFBQTtFQUdaO0VBR0EscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTtFQUlWO0VBQ0Qsa0JBQWtCO0VBQ2xCLFFBQU87RUFDUCxVQUFTO0VBQ1AscUJBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7RUFHNUI7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFibGVqcy9jb21wb25lbnRzL3Jlb3JkZXItZ3JpcC9yZW9yZGVyLWdyaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLWRvdHMtY29udGFpbmVyIHtcblx0Y3Vyc29yOm1vdmU7XG5cdGN1cnNvcjotd2Via2l0LWdyYWI7XG5cdGN1cnNvcjotbW96LWdyYWI7XG5cdGN1cnNvcjpncmFiO1xuXHQgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICBkaXNwbGF5OiBibG9jaztcblx0ICBsZWZ0OiAwcHg7XG5cdCAgdG9wOiAwcHg7XG5cdCAgaGVpZ2h0OiAxMDAlO1xuXHQgIHdpZHRoOiAzMHB4O1xuXHR6LWluZGV4OiA1O1xuICBcblx0LmRvdHMtMyB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdG9wYWNpdHk6IDAuNTtcblx0fVxuICB9XG4gIHRoOmhvdmVye1xuICAgXG5cdCAgLmRvdHMtMyB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdG9wYWNpdHk6IDE7XG5cdCAgfVxuXHRcbiAgfVxuICAuZG90cy0zIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6NTAlO1xuXHR3aWR0aDo0cHg7XG5cdCAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdCAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0ICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIFxuICB9XG4gIC5kb3RzLTM6YWZ0ZXIge1xuXHQgIGNvbnRlbnQ6ICdcXDI4MDcnO1xuXHQgIGZvbnQtc2l6ZTogMTRweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/tablejs/components/reorder-grip/reorder-grip.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tablejs/components/reorder-grip/reorder-grip.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let ReorderGripComponent = class ReorderGripComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReorderGripComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'tablejs-reorder-grip',
        template: __webpack_require__(/*! raw-loader!./reorder-grip.component.html */ "./node_modules/raw-loader/index.js!./src/app/tablejs/components/reorder-grip/reorder-grip.component.html"),
        host: { class: 'col-dots-container' },
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__(/*! ./reorder-grip.component.scss */ "./src/app/tablejs/components/reorder-grip/reorder-grip.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ReorderGripComponent);
exports.ReorderGripComponent = ReorderGripComponent;


/***/ }),

/***/ "./src/app/tablejs/directives/data-col-class/data-col-class.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tablejs/directives/data-col-class/data-col-class.directive.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const grid_service_1 = __webpack_require__(/*! ./../../services/grid/grid.service */ "./src/app/tablejs/services/grid/grid.service.ts");
let DataColClassDirective = class DataColClassDirective {
    constructor(elementRef, gridService) {
        this.elementRef = elementRef;
        this.gridService = gridService;
        this.tablejsDataColClass = '';
    }
    ngAfterViewInit() {
        if (this.tablejsDataColClass !== '') {
            this.elementRef.nativeElement.classList.add(this.tablejsDataColClass);
        }
        else {
            throw Error('A class name must be supplied to the tablejsDataColClass directive.');
        }
        this.registerInitialColumnWidthOnOnGridDirective();
    }
    registerInitialColumnWidthOnOnGridDirective() {
        if (this.initialWidth === undefined) {
            console.log('[Performance Alert] Add an initialWidth value on the tablejsDataColClass directive for a significant performance boost.');
            return;
        }
        const el = this.gridService.getParentTablejsGridDirective(this.elementRef.nativeElement);
        if (el !== null) {
            el['gridDirective'].initialWidths[this.tablejsDataColClass] = this.initialWidth;
        }
    }
};
DataColClassDirective.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: grid_service_1.GridService }
];
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], DataColClassDirective.prototype, "tablejsDataColClass", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Number)
], DataColClassDirective.prototype, "initialWidth", void 0);
DataColClassDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[tablejsDataColClass]'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, grid_service_1.GridService])
], DataColClassDirective);
exports.DataColClassDirective = DataColClassDirective;


/***/ }),

/***/ "./src/app/tablejs/directives/data-col-classes/data-col-classes.directive.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tablejs/directives/data-col-classes/data-col-classes.directive.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const grid_service_1 = __webpack_require__(/*! ./../../services/grid/grid.service */ "./src/app/tablejs/services/grid/grid.service.ts");
let DataColClassesDirective = class DataColClassesDirective {
    constructor(elementRef, gridService) {
        this.elementRef = elementRef;
        this.gridService = gridService;
    }
    ngAfterViewInit() {
        this.cacheClassesOnElement();
        this.registerColumnsWithDataClassesOnGridDirective();
    }
    cacheClassesOnElement() {
        this.elementRef.nativeElement.dataClasses = this.elementRef.nativeElement.getAttribute('tablejsDataColClasses').replace(new RegExp(' ', 'g'), '').split(',');
    }
    registerColumnsWithDataClassesOnGridDirective() {
        const el = this.gridService.getParentTablejsGridDirective(this.elementRef.nativeElement);
        if (el !== null) {
            el['gridDirective'].addColumnsWithDataClasses(this.elementRef.nativeElement);
        }
    }
};
DataColClassesDirective.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: grid_service_1.GridService }
];
DataColClassesDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[tablejsDataColClasses]'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, grid_service_1.GridService])
], DataColClassesDirective);
exports.DataColClassesDirective = DataColClassesDirective;


/***/ }),

/***/ "./src/app/tablejs/directives/editable-cell/editable-cell.directive.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tablejs/directives/editable-cell/editable-cell.directive.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let EditableCellDirective = class EditableCellDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.validator = null;
        this.validatorParams = [];
        this.regExpFlags = 'gi';
        this.list = [];
        this.cellInput = new core_1.EventEmitter();
        this.cellFocusOut = new core_1.EventEmitter();
        this.cellValidation = new core_1.EventEmitter();
        this.containerDiv = document.createElement('div');
        this.input = document.createElement('input'); // Create an <input> node
        this.input.type = 'text';
        this.dataList = document.createElement('datalist');
    }
    onKeyDownHandler(event) {
        if (document.activeElement === this.input) {
            this.input.blur();
            this.input.removeEventListener('focusout', this.onFocusOut);
        }
    }
    onClick(event) {
        let hasInput = false;
        if (this.elementRef.nativeElement.children) {
            for (let i = 0; i < this.elementRef.nativeElement.children.length; i++) {
                if (this.elementRef.nativeElement.children[i] === this.containerDiv) {
                    hasInput = true;
                }
            }
        }
        if (!hasInput) {
            this.input.value = this.elementRef.nativeElement.innerText;
            this.lastText = this.input.value;
            this.originalText = this.elementRef.nativeElement.innerText;
            this.elementRef.nativeElement.appendChild(this.containerDiv);
            this.containerDiv.appendChild(this.input);
            if (this.list.length > 0) {
                this.createDataList();
            }
            this.validateInput();
            this.input.focus();
            this.onFocusOut = () => {
                if (this.elementRef.nativeElement.contains(this.containerDiv)) {
                    this.elementRef.nativeElement.removeChild(this.containerDiv);
                }
                this.cellInput.emit(this.getCellObject());
                this.cellFocusOut.emit(this.getCellObject());
                this.input.removeEventListener('focusout', this.onFocusOut);
            };
            this.input.addEventListener('focusout', this.onFocusOut);
        }
        this.cellInput.emit(this.getCellObject());
    }
    createDataList() {
        let count = 0;
        let id = 'data-list-' + count.toString();
        while (document.getElementById(id) !== null && document.getElementById(id) !== undefined) {
            count++;
            id = 'data-list-' + count.toString();
            console.log(id);
        }
        this.dataList.setAttribute('id', id);
        this.elementRef.nativeElement.appendChild(this.containerDiv);
        this.containerDiv.appendChild(this.dataList);
        this.list.forEach(value => {
            let filteredDataList = Array.from(this.dataList.options).filter(option => option.value === value);
            if (filteredDataList.length === 0) {
                this.option = document.createElement('option');
                this.dataList.appendChild(this.option);
                this.option.value = value;
            }
        });
        this.input.setAttribute('list', id);
    }
    ngOnInit() {
        this.input.value = this.elementRef.nativeElement.innerText;
    }
    ngAfterViewInit() {
        this.input.value = this.elementRef.nativeElement.innerText;
        this.lastText = this.input.value;
        this.input.addEventListener('input', () => {
            let regEx = new RegExp(this.regExp, this.regExpFlags);
            if (regEx.test(this.input.value)) {
                this.validateInput();
                this.lastText = this.input.value;
                this.cellInput.emit(this.getCellObject());
            }
            else {
                this.input.value = this.lastText;
            }
        });
    }
    getCellObject() {
        return {
            currentValue: this.input.value,
            lastValidInput: this.lastValidInput,
            originalValue: this.originalText,
            inputHasFocus: document.activeElement === this.input
        };
    }
    validateInput() {
        let validationOk = this.validator ? this.validator.apply(null, [this.input.value].concat(this.validatorParams)) : true;
        if (validationOk) {
            this.input.classList.remove('error');
            this.lastValidInput = this.input.value;
        }
        else {
            this.input.classList.add('error');
        }
        this.cellValidation.emit(validationOk);
    }
};
EditableCellDirective.ctorParameters = () => [
    { type: core_1.ElementRef }
];
tslib_1.__decorate([
    core_1.Input('tablejsEditableCell'),
    tslib_1.__metadata("design:type", Object)
], EditableCellDirective.prototype, "initialData", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Function)
], EditableCellDirective.prototype, "validator", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Array)
], EditableCellDirective.prototype, "validatorParams", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], EditableCellDirective.prototype, "regExp", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], EditableCellDirective.prototype, "regExpFlags", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Array)
], EditableCellDirective.prototype, "list", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], EditableCellDirective.prototype, "cellInput", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], EditableCellDirective.prototype, "cellFocusOut", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], EditableCellDirective.prototype, "cellValidation", void 0);
tslib_1.__decorate([
    core_1.HostListener('document:keydown.enter', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [KeyboardEvent]),
    tslib_1.__metadata("design:returntype", void 0)
], EditableCellDirective.prototype, "onKeyDownHandler", null);
tslib_1.__decorate([
    core_1.HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EditableCellDirective.prototype, "onClick", null);
EditableCellDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[tablejsEditableCell]',
        host: { class: 'tablejs-editable-cell' }
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
], EditableCellDirective);
exports.EditableCellDirective = EditableCellDirective;


/***/ }),

/***/ "./src/app/tablejs/directives/grid-row/grid-row.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tablejs/directives/grid-row/grid-row.directive.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const grid_service_1 = __webpack_require__(/*! ./../../services/grid/grid.service */ "./src/app/tablejs/services/grid/grid.service.ts");
let GridRowDirective = class GridRowDirective {
    constructor(elementRef, gridService) {
        this.elementRef = elementRef;
        this.gridService = gridService;
    }
    ngAfterViewInit() {
        this.registerRowsOnGridDirective();
    }
    registerRowsOnGridDirective() {
        let el = this.gridService.getParentTablejsGridDirective(this.elementRef.nativeElement);
        if (el !== null) {
            el['gridDirective'].addRow(this.elementRef.nativeElement);
        }
    }
};
GridRowDirective.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: grid_service_1.GridService }
];
GridRowDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[tablejsGridRow]',
        host: { class: 'reorderable-table-row' }
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, grid_service_1.GridService])
], GridRowDirective);
exports.GridRowDirective = GridRowDirective;


/***/ }),

/***/ "./src/app/tablejs/directives/grid/grid.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/tablejs/directives/grid/grid.directive.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const drag_and_drop_ghost_component_1 = __webpack_require__(/*! ./../../components/drag-and-drop-ghost/drag-and-drop-ghost.component */ "./src/app/tablejs/components/drag-and-drop-ghost/drag-and-drop-ghost.component.ts");
const domtoimage = __webpack_require__(/*! dom-to-image-improved */ "./node_modules/dom-to-image-improved/src/dom-to-image-improved.js");
const tablejs_grid_proxy_1 = __webpack_require__(/*! ./../../shared/classes/tablejs-grid-proxy */ "./src/app/tablejs/shared/classes/tablejs-grid-proxy.ts");
const grid_service_1 = __webpack_require__(/*! ./../../services/grid/grid.service */ "./src/app/tablejs/services/grid/grid.service.ts");
const column_reorder_event_1 = __webpack_require__(/*! ./../../shared/classes/events/column-reorder-event */ "./src/app/tablejs/shared/classes/events/column-reorder-event.ts");
const column_resize_event_1 = __webpack_require__(/*! ./../../shared/classes/events/column-resize-event */ "./src/app/tablejs/shared/classes/events/column-resize-event.ts");
let GridDirective = class GridDirective extends tablejs_grid_proxy_1.TablejsGridProxy {
    constructor(viewContainerRef, elementRef, resolver, gridService) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
        this.resolver = resolver;
        this.gridService = gridService;
        this.dragging = false;
        this.reordering = false;
        this.stylesByClass = [];
        this.currentClassesToResize = [];
        this.startingWidths = [];
        this.minWidths = [];
        this.totalComputedMinWidth = 0;
        this.totalComputedWidth = 0;
        this.defaultTableMinWidth = 25;
        this.gridTemplateClasses = [];
        this.gridOrder = [];
        this.classWidths = [];
        this.gridTemplateTypes = [];
        this.draggingColumn = null;
        this.colRangeGroups = [];
        this.lastDraggedOverElement = null;
        this.lastDraggedGroupIndex = -1;
        this.lastMoveDirection = -1;
        this.resizableGrips = [];
        this.reorderGrips = [];
        this.reorderableColumns = [];
        this.columnsWithDataClasses = [];
        this.rows = [];
        this.infiniteScrollViewports = [];
        this.headTag = document.getElementsByTagName('head')[0];
        this.initialWidths = [];
        this.lastColumns = [];
        this.parentGroups = [];
        this.colDataGroups = [];
        this.elementsWithHighlight = [];
        // class used for setting order
        this.reorderableClass = 'reorderable-table-row';
        this.subGroupStyles = [];
        this.subGroupFragments = [];
        this.gridOrderStyles = [];
        this.gridOrderFragments = [];
        this.subGroupStyleObjs = {};
        this.columnResizeStart = new core_1.EventEmitter();
        this.columnResize = new core_1.EventEmitter();
        this.columnResizeEnd = new core_1.EventEmitter();
        this.columnReorder = new core_1.EventEmitter();
        this.columnReorderStart = new core_1.EventEmitter();
        this.dragOver = new core_1.EventEmitter();
        this.columnReorderEnd = new core_1.EventEmitter();
        this.registerDirectiveToElement();
    }
    registerDirectiveToElement() {
        this.elementRef.nativeElement.gridDirective = this;
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.directive = this;
        if (!document['hasPointerDownListener']) {
            document.addEventListener('pointerdown', (e) => {
                let el = e.target;
                if (el) {
                    while (el !== null && el.getAttribute('tablejsGrid') === null) {
                        el = el.parentElement;
                    }
                    if (el) {
                        el['directive'].onPointerDown(e);
                    }
                }
            });
            document['hasPointerDownListener'] = true;
        }
        // delay so virtual scroll can render first
        setTimeout(() => {
            this.initGrid();
        }, 1);
    }
    onPointerDown(event) {
        this.addPointerListeners();
        if (!this.elementRefUnderPoint(event)) {
            return;
        }
        // only drag on left mouse button
        if (event.button !== 0) {
            return;
        }
        // disables unwanted drag and drop functionality for selected text in browsers
        this.clearSelection();
        let el = this.elementRef.nativeElement;
        let resizeHandles;
        if (this.elementRef.nativeElement.reordering) {
            return;
        }
        const reorderHandlesUnderPoint = this.getReorderHandlesUnderPoint(event);
        const colsUnderPoint = this.getReorderColsUnderPoint(event);
        if (reorderHandlesUnderPoint.length > 0 && colsUnderPoint.length > 0) {
            this.elementRef.nativeElement.reordering = true;
            this.draggingColumn = colsUnderPoint[0];
            this.columnReorderStart.emit({
                pointerEvent: event,
                columnDragged: this.draggingColumn,
                columnHovered: this.draggingColumn
            });
            const customReorderStartEvent = new CustomEvent(column_reorder_event_1.ColumnReorderEvent.ON_REORDER_START, {
                detail: {
                    pointerEvent: event,
                    columnDragged: this.draggingColumn,
                    columnHovered: this.draggingColumn
                }
            });
            this.elementRef.nativeElement.parentElement.dispatchEvent(customReorderStartEvent);
            let elRect = this.draggingColumn.getBoundingClientRect();
            this.dragOffsetX = (event.pageX - elRect.left) - window.scrollX;
            this.dragOffsetY = (event.pageY - elRect.top) - window.scrollY;
            this.removeDragAndDropComponent();
            this.createDragAndDropComponent();
            this.copyColumnToJPeg();
            this.setReorderHighlightHeight(this.draggingColumn);
            this.lastDraggedOverElement = this.draggingColumn;
            this.parentGroups.forEach((arr, index) => {
                if (arr.indexOf(this.lastDraggedOverElement) !== -1) {
                    this.lastDraggedGroupIndex = index;
                }
            });
            this.reorderHandleColOffset = reorderHandlesUnderPoint[0].getBoundingClientRect().left - this.draggingColumn.getBoundingClientRect().left;
            this.lastDraggedGroupBoundingRects = this.parentGroups[this.lastDraggedGroupIndex].map(item => {
                let boundingRect = item.getBoundingClientRect();
                let rect = {
                    left: item.getBoundingClientRect().left + this.getContainerScrollCount(item),
                    right: boundingRect.right + window.scrollX,
                    top: boundingRect.top,
                    bottom: boundingRect.bottom,
                    width: boundingRect.width,
                    height: boundingRect.height
                };
                return rect;
            });
        }
        resizeHandles = this.resizableGrips;
        if (resizeHandles.length === 0) {
            return;
        }
        // if no handle exists, allow whole row to be resizable
        if (resizeHandles.length > 0) {
            let resizableElements = document.elementsFromPoint(event.clientX, event.clientY);
            const els = resizableElements.filter(item => {
                let handleItem = null;
                resizeHandles.forEach(resizeHandle => {
                    if (item === resizeHandle) {
                        handleItem = resizeHandle;
                    }
                });
                if (handleItem !== null) {
                    return true;
                }
            });
            if (els.length === 0) {
                return;
            }
        }
        this.dragging = true;
        const elements = this.getResizableElements(event);
        if (elements.length === 0) {
            return;
        }
        this.totalComputedMinWidth = 0;
        this.totalComputedWidth = 0;
        this.minWidths = [];
        this.startingWidths = [];
        this.currentClassesToResize = this.getResizableClasses(elements[0]);
        elements.forEach(resizeableElement => {
            this.lastColumns.forEach(lastColumns => {
                if ((resizeableElement === lastColumns.child) && this.resizeColumnWidthByPercent) {
                    this.dragging = false;
                }
            });
        });
        this.currentClassesToResize.forEach(className => {
            let firstEl = this.elementRef.nativeElement.querySelector('.' + className);
            let startingWidth = window.getComputedStyle(firstEl).getPropertyValue('width');
            let wdth = Number(startingWidth.substr(0, startingWidth.length - 2)); // remove px
            this.totalComputedWidth += wdth;
            this.startingWidths.push(wdth);
            let minWidth = window.getComputedStyle(firstEl).getPropertyValue('min-width');
            wdth = Number(minWidth.substr(0, minWidth.length - 2)); // remove px
            wdth = Number(wdth) < this.defaultTableMinWidth ? this.defaultTableMinWidth : wdth; // account for minimum TD size in tables
            this.totalComputedMinWidth += wdth;
            this.minWidths.push(wdth);
        });
        this.startX = event.clientX;
        this.startY = event.clientY;
        this.columnResizeStart.emit({
            pointerEvent: event,
            columnWidth: this.totalComputedWidth,
            columnMinWidth: this.totalComputedMinWidth,
            classesBeingResized: this.currentClassesToResize
        });
        const customResizeStartEvent = new CustomEvent(column_resize_event_1.ColumnResizeEvent.ON_RESIZE_START, {
            detail: {
                pointerEvent: event,
                columnWidth: this.totalComputedWidth,
                columnMinWidth: this.totalComputedMinWidth,
                classesBeingResized: this.currentClassesToResize
            }
        });
        this.elementRef.nativeElement.parentElement.dispatchEvent(customResizeStartEvent);
        // stop interference with reordering columns
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    copyColumnToJPeg() {
        domtoimage.toPng(this.draggingColumn, { quality: 0.9, filter: this.dragAndDropGhostFilter })
            .then((dataUrl) => {
            const img = new Image();
            img.src = dataUrl;
            this.setDragAndDropHTML(img.outerHTML);
        })
            .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    }
    getContainerScrollCount(el) {
        let scrollXCount = el.scrollLeft;
        while (el !== document.body) {
            el = el.parentElement;
            scrollXCount += el.scrollLeft;
        }
        // include scrolling on tu-grid component
        scrollXCount += el.parentElement.scrollLeft;
        return scrollXCount;
    }
    onPointerMove(event) {
        let ths = document['currentGridDirective'];
        if (ths.elementRef.nativeElement.reordering) {
            ths.clearSelection();
            const containerRect = ths.viewContainerRef.element.nativeElement.getBoundingClientRect();
            const dragNDropX = event.clientX - containerRect.left - ths.dragOffsetX;
            const dragNDropY = event.clientY - containerRect.top - ths.dragOffsetY;
            ths.setDragAndDropPosition(dragNDropX, dragNDropY);
            const reorderCols = this.reorderableColumns;
            const trueMouseX = event.pageX - ths.reorderHandleColOffset + ths.getContainerScrollCount(ths.draggingColumn);
            if (!ths.lastDraggedOverElement) {
                return;
            }
            ths.columnReorder.emit({
                pointerEvent: event,
                columnDragged: ths.draggingColumn,
                columnHovered: ths.lastDraggedOverElement
            });
            const customReorderEvent = new CustomEvent(column_reorder_event_1.ColumnReorderEvent.ON_REORDER, {
                detail: {
                    pointerEvent: event,
                    columnDragged: ths.draggingColumn,
                    columnHovered: ths.lastDraggedOverElement
                }
            });
            ths.elementRef.nativeElement.parentElement.dispatchEvent(customReorderEvent);
            let moveDirection = 0;
            let currentRect;
            let currentColIndex;
            for (const rect of ths.lastDraggedGroupBoundingRects) {
                if (trueMouseX > rect.left && trueMouseX < rect.left + rect.width) {
                    let elX = rect.left;
                    let elW = rect.width;
                    if ((trueMouseX - elX) >= elW / 2) {
                        moveDirection = 1;
                    }
                    else {
                        moveDirection = 0;
                    }
                    currentRect = rect;
                    currentColIndex = ths.lastDraggedGroupBoundingRects.indexOf(rect);
                    break;
                }
            }
            if (currentColIndex === undefined) {
                return;
            }
            if (ths.lastDraggedOverRect === currentRect && ths.lastMoveDirection === moveDirection) {
                return;
            }
            ths.lastMoveDirection = moveDirection;
            ths.lastDraggedOverRect = currentRect;
            ths.removeElementHighlight(ths.lastDraggedOverElement);
            ths.removeHighlights(ths.lastDraggedOverElement, moveDirection);
            const draggableInColumn = ths.parentGroups[ths.lastDraggedGroupIndex][currentColIndex];
            ths.lastDraggedOverElement = draggableInColumn;
            let colRangeDraggedParentInd = -1;
            let colRangeDraggedChildInd = -1;
            let colRangeDroppedParentInd = -1;
            let colRangeDroppedChildInd = -1;
            let draggedInd = -1;
            let droppedInd = -1;
            let draggedGroup = null;
            let pGroup = ths.parentGroups.forEach((group, groupInd) => group.forEach((item, index) => {
                if (item === ths.draggingColumn) {
                    colRangeDraggedParentInd = groupInd;
                    colRangeDraggedChildInd = index;
                    draggedInd = index;
                    draggedGroup = group;
                }
                if (item === ths.lastDraggedOverElement) {
                    colRangeDroppedParentInd = groupInd;
                    colRangeDroppedChildInd = index;
                    droppedInd = index;
                }
            }));
            if (ths.draggingColumn === ths.lastDraggedOverElement) {
                return;
            }
            let parentRanges = null;
            let tempRanges = ths.colRangeGroups.concat();
            let parentRangeIndex = -1;
            tempRanges.sort((a, b) => b.length - a.length);
            tempRanges.forEach((item, index) => {
                if (!parentRanges && item.length < draggedGroup.length) {
                    parentRanges = item;
                    parentRangeIndex = ths.colRangeGroups.indexOf(item);
                }
            });
            let fromOrder = (colRangeDraggedChildInd + 1);
            let toOrder = (colRangeDroppedChildInd + 1);
            // if has to stay within ranges, get ranges and swap
            if (parentRanges !== null) {
                ths.colRangeGroups[parentRangeIndex].forEach(range => {
                    let lowRange = range[0];
                    let highRange = range[1];
                    if (fromOrder >= lowRange && fromOrder < highRange && toOrder >= lowRange && toOrder < highRange) {
                        if (colRangeDraggedParentInd === colRangeDroppedParentInd) {
                            if (moveDirection === 1) {
                                ths.lastDraggedOverElement.classList.add('highlight-right');
                            }
                            else {
                                ths.lastDraggedOverElement.classList.add('highlight-left');
                            }
                            ths.elementsWithHighlight.push({ el: ths.lastDraggedOverElement, moveDirection: moveDirection });
                        }
                    }
                });
            }
            else {
                if (colRangeDraggedParentInd === colRangeDroppedParentInd) {
                    if (moveDirection === 1) {
                        ths.lastDraggedOverElement.classList.add('highlight-right');
                    }
                    else {
                        ths.lastDraggedOverElement.classList.add('highlight-left');
                    }
                    ths.elementsWithHighlight.push({ el: ths.lastDraggedOverElement, moveDirection: moveDirection });
                }
            }
        }
        if (!ths.dragging) {
            return;
        }
        let mouseOffset = Math.round(event.clientX) - Math.round(ths.startX);
        const widthsNeedUpdating = Math.round(event.clientX) !== ths.startX;
        ths.startX = Math.round(event.clientX); // reset starting X
        let newWidth = ths.totalComputedWidth + mouseOffset;
        let allowableWidthChange = newWidth - ths.totalComputedMinWidth;
        if (allowableWidthChange <= 0) {
            return;
        }
        if (widthsNeedUpdating) {
            ths.updateWidths(newWidth);
        }
        ths.columnResize.emit({
            pointerEvent: event,
            columnWidth: ths.totalComputedWidth,
            columnMinWidth: ths.totalComputedMinWidth
        });
        const customResizeEvent = new CustomEvent(column_resize_event_1.ColumnResizeEvent.ON_RESIZE, {
            detail: {
                pointerEvent: event,
                columnWidth: ths.totalComputedWidth,
                columnMinWidth: ths.totalComputedMinWidth
            }
        });
        ths.elementRef.nativeElement.parentElement.dispatchEvent(customResizeEvent);
    }
    updateWidths(newWidth) {
        let currentWidths = [];
        let styles = [];
        let cssClassesToFilter = this.currentClassesToResize.filter(resizeClass => {
            let firstEl = this.elementRef.nativeElement.querySelector('.' + resizeClass);
            let wdth = window.getComputedStyle(firstEl).getPropertyValue('width');
            wdth = wdth.substr(0, wdth.length - 2); // remove px
            currentWidths.push(Number(wdth));
            let found = false;
            this.stylesByClass.map((item, index) => {
                if (resizeClass === item.resizeClass) {
                    found = true;
                    styles.push(this.stylesByClass[index]);
                }
            });
            return found;
        });
        let sortableWidths = [];
        currentWidths.map((w, index) => {
            sortableWidths.push({
                minWidth: this.minWidths[index],
                width: w,
                widthDifference: w - this.minWidths[index],
                className: cssClassesToFilter[index],
                style: styles[index]
            });
        });
        // sort objects by width in ascending order
        sortableWidths.sort((a, b) => {
            if (a.widthDifference < b.widthDifference) {
                return -1;
            }
            if (a.widthDifference > b.widthDifference) {
                return 1;
            }
            return 0;
        });
        let len = sortableWidths.length;
        let remainingWidth = this.totalComputedWidth - newWidth;
        let styleText = '';
        sortableWidths.forEach((item, index) => {
            let itemsRemaining = len - index;
            let maxPercOfRemaining = 1 / itemsRemaining;
            let amountMoved = 0;
            let resizeID = this.id + ' .' + item.className;
            const markupItem = this.stylesByClass.filter(style => style.id === resizeID)[0];
            if (item.width - item.minWidth < maxPercOfRemaining * remainingWidth) {
                let maxMovement = item.width - item.minWidth;
                amountMoved = item.width - item.minWidth;
            }
            else {
                amountMoved = maxPercOfRemaining * remainingWidth;
            }
            amountMoved = Math.round(amountMoved * 100) / 100; // round to 2 decimal points
            if (this.classWidths[this.gridTemplateClasses.indexOf(item.className)].toString().includes('%')) {
                let columnIndex = this.gridTemplateClasses.indexOf(item.className);
                let currentWidthInpercent = this.classWidths[this.gridTemplateClasses.indexOf(item.className)].replace('%', '');
                currentWidthInpercent = Number(currentWidthInpercent);
                let currentWidthInPixel = item.width;
                let totalWidth = (currentWidthInPixel * 100) / currentWidthInpercent;
                let adujustedWidth = (item.width - amountMoved);
                let adujustedWidthInpercent = ((adujustedWidth * 100) / totalWidth);
                adujustedWidthInpercent = Math.round(adujustedWidthInpercent * 1000) / 1000;
                let widthDiff = currentWidthInpercent - adujustedWidthInpercent;
                let t = Math.round(widthDiff * 1000) / 1000; // round off to three
                let maxIndex = -1;
                sortableWidths.forEach(classItem => {
                    let columnIndx = this.gridTemplateClasses.indexOf(classItem.className);
                    let x = this.gridOrder.indexOf(columnIndx + 1);
                    if (maxIndex < x) {
                        maxIndex = x;
                    }
                });
                let tc = this.gridOrder.length - (maxIndex + 1); // adjust from next column
                let previousVal = this.classWidths[columnIndex];
                this.classWidths[columnIndex] = adujustedWidthInpercent + '%';
                let totalSum = 0;
                for (let it = 0; it < this.classWidths.length; it++) {
                    let temp = this.classWidths[it];
                    temp = temp.includes('%') ? temp.replace('%', '') : temp;
                    totalSum += (+temp);
                }
                let totalDiff = 0;
                if (totalSum > 100 || totalSum < 100) {
                    totalDiff = 100 - totalSum;
                    totalDiff = Math.round(totalDiff * 1000) / 1000;
                }
                // if totaldiff is positive need to add to width if -ve reduce from widths
                let percolumn = totalDiff / tc;
                percolumn = Math.round(percolumn * 1000) / 1000;
                for (let i = maxIndex + 1; i < this.gridOrder.length; i++) {
                    let classIndex = this.gridOrder[i] - 1;
                    let x = this.classWidths[classIndex];
                    if (x.toString().includes('%')) {
                        x = x.replace('%', '');
                    }
                    let width = Math.round(((+x) + percolumn) * 1000) / 1000;
                    if (width < 1) {
                        percolumn = percolumn + (percolumn / ((this.gridOrder.length - 1) - i));
                        if (!isFinite(percolumn)) {
                            this.classWidths[columnIndex] = previousVal;
                        }
                    }
                    else {
                        this.classWidths[classIndex] = ((+x) + percolumn).toFixed(2) + '%';
                    }
                }
            }
            else {
                this.classWidths[this.gridTemplateClasses.indexOf(item.className)] = (item.width - amountMoved);
            }
            const gridTemplateColumns = this.constructGridTemplateColumns();
            this.gridTemplateTypes.forEach(styleObj => {
                styleObj.style.innerHTML = this.id + ' .' + this.reorderableClass + ' { display: grid; grid-template-columns:' + gridTemplateColumns + '; }';
            });
            const markup = resizeID + ' { width: ' + (item.width - amountMoved) + 'px }';
            markupItem.markup = markup;
            if (markupItem.width.toString().includes('%')) {
                let currentWidthInpercent = markupItem.width.replace('%', '');
                currentWidthInpercent = Number(currentWidthInpercent);
                let currentWidthInPixel = item.width;
                let totalWidth = (currentWidthInPixel * 100) / currentWidthInpercent;
                let adujustedWidth = (item.width - amountMoved);
                let adujustedWidthInpercent = ((adujustedWidth * 100) / totalWidth).toFixed(2);
                markupItem.wdth = adujustedWidthInpercent + '%';
            }
            else {
                markupItem.width = (item.width - amountMoved).toString();
            }
            // markupItem.width = (item.width - amountMoved).toString();
            styleText += markup;
            this.totalComputedWidth -= amountMoved;
            remainingWidth -= amountMoved;
        });
        this.generateWidthStyle();
    }
    generateWidthStyle() {
        let innerHTML = '';
        this.stylesByClass.forEach(item => {
            innerHTML += item.markup;
        });
        this.widthStyle.innerHTML = innerHTML;
    }
    getResizableClasses(el) {
        return el['dataClasses'];
    }
    setResizableStyles() {
        let allElementsWithDataResizable = this.columnsWithDataClasses;
        let el;
        let classesUsed = [];
        let fragment;
        let style;
        let styleText = '';
        if (this.linkClass === undefined || this.gridService.linkedDirectiveObjs[this.linkClass] === undefined) {
            fragment = document.createDocumentFragment();
            style = document.createElement('style');
            style.type = 'text/css';
        }
        else {
            fragment = this.gridService.linkedDirectiveObjs[this.linkClass].widthStyleFragment;
            style = this.gridService.linkedDirectiveObjs[this.linkClass].widthStyle;
        }
        let markup;
        if (this.linkClass === undefined || this.gridService.linkedDirectiveObjs[this.linkClass] === undefined) {
            for (let i = 0; i < allElementsWithDataResizable.length; i++) {
                el = allElementsWithDataResizable[i];
                let resizeClasses = this.getResizableClasses(el);
                resizeClasses.forEach(resizeCls => {
                    if (classesUsed.indexOf(resizeCls) === -1) {
                        let firstEl = this.elementRef.nativeElement.getElementsByClassName(resizeCls)[0];
                        const startingWidth = !!this.initialWidths[resizeCls] ? this.initialWidths[resizeCls] : firstEl.offsetWidth;
                        // Override percentage if we have widthPercent enabled
                        const startingWidthPercent = this.initialWidths[resizeCls];
                        let resizeID = this.id + ' .' + resizeCls;
                        if (startingWidth.toString().includes('%')) {
                            // markup = resizeID + ' { width: ' + startingWidth + '}';
                            markup = resizeID + ' { width: ' + 100 + '%}';
                            this.resizeColumnWidthByPercent = true;
                        }
                        else {
                            markup = resizeID + ' { width: ' + startingWidth + 'px }';
                        }
                        // markup = resizeID + ' { width: ' + startingWidth + 'px }';
                        styleText += markup;
                        this.stylesByClass.push({ style: style, id: resizeID, resizeClass: resizeCls, markup: markup, width: startingWidth });
                        classesUsed.push(resizeCls);
                    }
                });
            }
        }
        else {
            this.stylesByClass = this.gridService.linkedDirectiveObjs[this.linkClass].stylesByClass;
        }
        if (this.linkClass === undefined || this.gridService.linkedDirectiveObjs[this.linkClass] === undefined) {
            style.innerHTML = styleText;
        }
        fragment.appendChild(style);
        this.widthStyle = style;
        this.widthStyleFragment = fragment;
        this.headTag.appendChild(fragment);
        if (this.linkClass) {
            if (this.gridService.linkedDirectiveObjs[this.linkClass] === undefined) {
                this.gridService.linkedDirectiveObjs[this.linkClass] = {};
                this.gridService.linkedDirectiveObjs[this.linkClass].stylesByClass = this.stylesByClass;
            }
            this.gridService.linkedDirectiveObjs[this.linkClass].widthStyleFragment = fragment;
            this.gridService.linkedDirectiveObjs[this.linkClass].widthStyle = style;
        }
    }
    setReorderStyles() {
        if (this.linkClass === undefined || (this.gridService.linkedDirectiveObjs[this.linkClass] && this.gridService.linkedDirectiveObjs[this.linkClass].reorderHighlightStyle === undefined)) {
            const fragment = document.createDocumentFragment();
            let style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = this.id + ' .highlight-left div:after, ' + this.id + ' .highlight-right div:after { height: 200px !important }';
            fragment.appendChild(style);
            this.reorderHighlightStyle = style;
            this.reorderHighlightStyleFragment = fragment;
            this.headTag.appendChild(fragment);
            if (this.linkClass) {
                this.gridService.linkedDirectiveObjs[this.linkClass].reorderHighlightStyle = this.reorderHighlightStyle;
                this.gridService.linkedDirectiveObjs[this.linkClass].reorderHighlightStyleFragment = this.reorderHighlightStyleFragment;
            }
        }
        else {
            this.reorderHighlightStyle = this.gridService.linkedDirectiveObjs[this.linkClass].reorderHighlightStyle;
            this.reorderHighlightStyleFragment = this.gridService.linkedDirectiveObjs[this.linkClass].reorderHighlightStyleFragment;
        }
    }
    getColSpan(element) {
        let colSpan = element.getAttribute('colspan');
        return colSpan === null ? 1 : Number(colSpan);
    }
    validateColumnSpansAreTheSame(colSpans) {
        if (colSpans.length === 0) {
            throw Error('No columns appear to exist.');
        }
        const colLength = colSpans[0];
        const invalidColLengths = colSpans.filter(item => item !== colLength);
        if (invalidColLengths.length > 0) {
            throw Error('Grid column lengths do not match.  Please check your colspans.');
        }
    }
    onPointerUp(event) {
        let ths = document['currentGridDirective'];
        ths.removePointerListeners();
        if (ths.elementRef.nativeElement.reordering) {
            ths.elementRef.nativeElement.reordering = false;
            ths.removeDragAndDropComponent();
            if (!ths.lastDraggedOverElement) {
                return;
            }
            ths.removeElementHighlight(ths.lastDraggedOverElement);
            ths.removeHighlights();
            if (ths.reorderGrips.length !== 0) {
                ths.reorderColumns(event);
            }
            ths.columnReorderEnd.emit({
                pointerEvent: event,
                columnDragged: ths.draggingColumn,
                columnHovered: ths.lastDraggedOverElement
            });
            const customReorderEndEvent = new CustomEvent(column_reorder_event_1.ColumnReorderEvent.ON_REORDER_END, {
                detail: {
                    pointerEvent: event,
                    columnDragged: ths.draggingColumn,
                    columnHovered: ths.lastDraggedOverElement
                }
            });
            ths.elementRef.nativeElement.parentElement.dispatchEvent(customReorderEndEvent);
            ths.lastDraggedOverElement = null;
            ths.lastMoveDirection = -1;
            ths.draggingColumn.classList.remove('dragging');
            ths.draggingColumn = null;
        }
        if (!ths.dragging) {
            return;
        }
        ths.columnResizeEnd.emit({
            pointerEvent: event,
            columnWidth: ths.totalComputedWidth,
            columnMinWidth: ths.totalComputedMinWidth,
            classesBeingResized: ths.currentClassesToResize
        });
        const customResizeEndEvent = new CustomEvent(column_resize_event_1.ColumnResizeEvent.ON_RESIZE_END, {
            detail: {
                pointerEvent: event,
                columnWidth: ths.totalComputedWidth,
                columnMinWidth: ths.totalComputedMinWidth,
                classesBeingResized: ths.currentClassesToResize
            }
        });
        ths.elementRef.nativeElement.parentElement.dispatchEvent(customResizeEndEvent);
        ths.endDrag(event);
    }
    addPointerListeners() {
        document['currentGridDirective'] = this;
        document.addEventListener('pointermove', this.onPointerMove);
        document.addEventListener('pointerup', this.onPointerUp);
    }
    removePointerListeners() {
        document['currentGridDirective'] = null;
        document.removeEventListener('pointermove', this.onPointerMove);
        document.removeEventListener('pointerup', this.onPointerUp);
    }
    endDrag(event) {
        if (!this.dragging) {
            return;
        }
        event.stopPropagation();
        event.preventDefault();
        event.stopImmediatePropagation();
        this.totalComputedMinWidth = 0;
        this.totalComputedWidth = 0;
        this.currentClassesToResize = [];
        this.minWidths = [];
        this.startingWidths = [];
        this.dragging = false;
    }
    initGrid() {
        this.generateContainerID();
        this.generateViewportID();
        this.setResizableStyles();
        this.setReorderStyles();
        this.generateColumnGroups();
        /* designate column containers */
        const allElementsWithDataResizable = this.columnsWithDataClasses;
        const colSpans = [];
        let currSpanCount = 0;
        let lastParent = null;
        let children;
        let columnStart = 1;
        let colRanges = [];
        this.colRangeGroups.push(colRanges);
        let item;
        for (let index = 0; index < allElementsWithDataResizable.length; index++) {
            item = allElementsWithDataResizable[index];
            const span = this.getColSpan(item);
            if (item.parentElement !== lastParent) {
                if (index !== 0) {
                    colSpans.push(currSpanCount);
                    columnStart = 1;
                    colRanges = [];
                    this.colRangeGroups.push(colRanges);
                }
                currSpanCount = 0;
                lastParent = item.parentElement;
                children = [];
                this.parentGroups.push(children);
            }
            colRanges.push([columnStart, (span + columnStart)]);
            currSpanCount += span;
            columnStart += span;
            children.push(item);
        }
        colSpans.push(currSpanCount);
        let highestLen = 0;
        let ind = -1;
        let group;
        for (let index = 0; index < this.parentGroups.length; index++) {
            group = this.parentGroups[index];
            if (group.length > highestLen) {
                highestLen = group.length;
                ind = index;
            }
        }
        if (this.parentGroups.length !== 0) {
            this.parentGroups[ind].forEach((item2, index) => {
                this.gridTemplateClasses.push(this.getResizableClasses(item2)[0]);
            });
        }
        if (this.linkClass !== undefined && this.gridService.linkedDirectiveObjs[this.linkClass].stylesByClass) {
            this.stylesByClass = this.gridService.linkedDirectiveObjs[this.linkClass].stylesByClass;
            this.classWidths = this.gridService.linkedDirectiveObjs[this.linkClass].classWidths;
        }
        if (this.linkClass !== undefined && this.gridService.linkedDirectiveObjs[this.linkClass].classWidths) {
            this.classWidths = this.gridService.linkedDirectiveObjs[this.linkClass].classWidths;
        }
        else {
            this.classWidths = this.stylesByClass.map((styleObj, index) => {
                if (styleObj.width.toString().includes('%')) {
                    return styleObj.width;
                }
                else {
                    return Number(styleObj.width);
                }
            }).concat();
            if (this.linkClass) {
                this.gridService.linkedDirectiveObjs[this.linkClass].classWidths = this.classWidths;
            }
        }
        this.validateColumnSpansAreTheSame(colSpans);
        this.setGridOrder();
    }
    createDragAndDropComponent() {
        const factory = this.resolver.resolveComponentFactory(drag_and_drop_ghost_component_1.DragAndDropGhostComponent);
        const componentRef = this.viewContainerRef.createComponent(factory);
        this.dragAndDropGhostComponent = componentRef.instance;
    }
    setDragAndDropPosition(x, y) {
        this.dragAndDropGhostComponent.left = x;
        this.dragAndDropGhostComponent.top = y;
    }
    setDragAndDropHTML(html) {
        this.dragAndDropGhostComponent.html = html;
    }
    removeDragAndDropComponent() {
        this.viewContainerRef.clear();
    }
    generateColumnGroups() {
        if (this.linkClass && this.gridService.linkedDirectiveObjs[this.linkClass].colDataGroups) {
            this.colDataGroups = this.gridService.linkedDirectiveObjs[this.linkClass].colDataGroups;
        }
        else {
            let allElementsWithDataResizable = this.columnsWithDataClasses;
            const arr = allElementsWithDataResizable;
            let colOrder = 1;
            let lastParent = null;
            let lastGroup = null;
            let lastOrder = 0;
            let lastIndex = 0;
            let spanCount = 0;
            let colDataGroup = [];
            this.colDataGroups.push(colDataGroup);
            let item;
            for (let index = 0; index < arr.length; index++) {
                item = arr[index];
                let lastDataSpan = !!this.colData ? this.colData.span : 0;
                if (item.parentElement !== lastParent) {
                    if (index !== 0) {
                        colOrder = 1;
                        lastGroup = colDataGroup;
                        lastOrder = index;
                        lastIndex = 0;
                        colDataGroup = [];
                        this.colDataGroups.push(colDataGroup);
                    }
                    lastParent = item.parentElement;
                    lastDataSpan = 0;
                }
                colOrder = index + 1 - lastOrder;
                if (lastGroup !== null) {
                    if (lastGroup[lastIndex].span < (colOrder - spanCount)) {
                        spanCount += lastGroup[lastIndex].span;
                        lastIndex++;
                    }
                }
                this.colData = {
                    order: (colOrder - spanCount),
                    lastDataSpan: (colOrder - spanCount),
                    nthChild: colOrder,
                    span: this.getColSpan(item),
                    subGroups: [],
                    parent: item.parentElement,
                    child: item
                };
                colDataGroup.push(this.colData);
            }
        }
        if (this.linkClass) {
            this.gridService.linkedDirectiveObjs[this.linkClass].colDataGroups = this.colDataGroups;
        }
        let columnGroup;
        for (let index = 0, len = this.colDataGroups.length; index < len; index++) {
            columnGroup = this.colDataGroups[index];
            if (index < this.colDataGroups.length - 1) {
                this.generateSubGroup(columnGroup, this.colDataGroups[index + 1]);
            }
            if (index === 0) {
                this.orderSubGroups(columnGroup);
            }
        }
    }
    generateSubGroup(currentGroup, subGroup) {
        let indexCount = 0;
        currentGroup.forEach((group, index) => {
            let groupSpan = group.span;
            for (let i = 0; i < groupSpan; i++) {
                group.subGroups.push(subGroup[indexCount]);
                indexCount++;
            }
        });
    }
    orderSubGroups(columnGroup, columnPlacement = 1, placementStart = 0, parentOrder = 1) {
        let style;
        let containerID;
        let fragment;
        let selector;
        if (this.linkClass) {
            if (this.gridService.linkedDirectiveObjs[this.linkClass].subGroupStyleObjs) {
                this.subGroupStyleObjs = this.gridService.linkedDirectiveObjs[this.linkClass].subGroupStyleObjs;
                this.subGroupStyles = this.gridService.linkedDirectiveObjs[this.linkClass].subGroupStyles;
                this.subGroupFragments = this.gridService.linkedDirectiveObjs[this.linkClass].subGroupFragments;
                this.gridOrder = this.gridService.linkedDirectiveObjs[this.linkClass].gridOrder;
            }
            else {
                this.gridService.linkedDirectiveObjs[this.linkClass].subGroupStyleObjs = this.subGroupStyleObjs;
                this.gridService.linkedDirectiveObjs[this.linkClass].subGroupStyles = this.subGroupStyles;
                this.gridService.linkedDirectiveObjs[this.linkClass].subGroupFragments = this.subGroupFragments;
                this.gridService.linkedDirectiveObjs[this.linkClass].gridOrder = this.gridOrder;
            }
        }
        placementStart = columnPlacement - 1;
        columnGroup.sort((columnData1, columnData2) => {
            return columnData1.order - columnData2.order;
        });
        columnGroup.forEach(columnData => {
            let tagName = columnData.child.tagName.toLowerCase();
            containerID = 'column-container-' + Array.from(columnData.parent.parentElement.children).indexOf(columnData.parent);
            let parentIndex = Array.from(columnData.parent.parentElement.children).indexOf(columnData.parent);
            columnData.parent.classList.add(containerID);
            selector = this.id + ' .' + containerID + ' ' + tagName + ':nth-child(' + (columnData.nthChild).toString() + ')';
            fragment = document.createDocumentFragment();
            if (this.subGroupStyleObjs[selector]) {
                style = this.subGroupStyleObjs[selector];
            }
            else {
                style = document.createElement('style');
                style.type = 'text/css';
                this.subGroupStyles.push(style);
                this.subGroupFragments.push(fragment);
            }
            style.innerHTML = selector + ' { grid-column-start: ' + (columnPlacement).toString() + '; grid-column-end: ' + (columnPlacement + columnData.span).toString() + '; order: ' + (columnData.order + placementStart).toString() + '; }';
            if (this.parentGroups[parentIndex]) {
                if ((this.parentGroups[parentIndex].length) === (columnData.order + placementStart)) {
                    this.lastColumns[parentIndex] = columnData;
                }
            }
            if (this.subGroupStyleObjs[selector]) {
                fragment.appendChild(style);
                this.headTag.appendChild(fragment);
            }
            this.subGroupStyleObjs[selector] = style;
            if (columnData.subGroups.length > 0) {
                this.orderSubGroups(columnData.subGroups, columnPlacement, placementStart, columnData.lastDataSpan);
            }
            else {
                selector = this.id + ' ' + tagName + ':nth-child(' + (columnData.nthChild).toString() + ')';
                fragment = document.createDocumentFragment();
                if (this.subGroupStyleObjs[selector]) {
                    style = this.subGroupStyleObjs[selector];
                }
                else {
                    style = document.createElement('style');
                    style.type = 'text/css';
                    this.subGroupStyles.push(style);
                    this.subGroupFragments.push(fragment);
                }
                style.innerHTML = selector + ' { grid-column-start: ' + (columnPlacement).toString() + '; grid-column-end: ' + (columnPlacement + columnData.span).toString() + '; order: ' + (columnData.order + placementStart).toString() + '; }';
                if (this.subGroupStyleObjs[selector]) {
                    fragment.appendChild(style);
                    this.headTag.appendChild(fragment);
                }
                this.subGroupStyleObjs[selector] = style;
                this.gridOrder[(columnData.order + placementStart) - 1] = columnData.nthChild;
                let hasSisterTag = tagName === 'th' || tagName === 'td';
                let sisterTag = null;
                if (hasSisterTag) {
                    sisterTag = tagName === 'th' ? 'td' : 'th';
                    selector = this.id + ' ' + sisterTag + ':nth-child(' + (columnData.nthChild).toString() + ')';
                    fragment = document.createDocumentFragment();
                    if (this.subGroupStyleObjs[selector]) {
                        style = this.subGroupStyleObjs[selector];
                    }
                    else {
                        style = document.createElement('style');
                        style.type = 'text/css';
                        this.subGroupStyles.push(style);
                        this.subGroupFragments.push(fragment);
                    }
                    style.innerHTML = selector + ' { grid-column-start: ' + (columnPlacement).toString() + '; grid-column-end: ' + (columnPlacement + columnData.span).toString() + '; order: ' + (columnData.order + placementStart).toString() + '; }';
                    if (this.subGroupStyleObjs[selector]) {
                        fragment.appendChild(style);
                        this.headTag.appendChild(fragment);
                    }
                    this.subGroupStyleObjs[selector] = style;
                }
            }
            columnPlacement += columnData.span;
        });
    }
    setGridOrder() {
        const gridTemplateColumns = this.constructGridTemplateColumns();
        if (this.colDataGroups[0].length === 0) {
            return;
        }
        const reqiresNewStyleObjects = this.linkClass === undefined || this.gridService.linkedDirectiveObjs[this.linkClass].gridOrderStyles === undefined;
        this.colDataGroups.forEach((columnGroup, index) => {
            let containerID = columnGroup[0].parent.getAttribute('id');
            let style;
            let fragment;
            if (reqiresNewStyleObjects) {
                fragment = document.createDocumentFragment();
                style = document.createElement('style');
                style.type = 'text/css';
            }
            else {
                fragment = this.gridService.linkedDirectiveObjs[this.linkClass].gridOrderFragments[index];
                style = this.gridService.linkedDirectiveObjs[this.linkClass].gridOrderStyles[index];
            }
            style.innerHTML = this.id + ' .' + this.reorderableClass + ' { display: grid; grid-template-columns: ' + gridTemplateColumns + '; }';
            fragment.appendChild(style);
            if (reqiresNewStyleObjects) {
                this.gridOrderStyles.push(style);
                this.gridOrderFragments.push(fragment);
            }
            this.headTag.appendChild(fragment);
            this.gridTemplateTypes.push({ id: containerID, style: style });
            if (index === 0) {
                this.orderSubGroups(columnGroup);
            }
        });
        if (this.linkClass && this.gridService.linkedDirectiveObjs[this.linkClass].gridOrderStyles === undefined) {
            this.gridService.linkedDirectiveObjs[this.linkClass].gridOrderFragments = this.gridOrderFragments;
            this.gridService.linkedDirectiveObjs[this.linkClass].gridOrderStyles = this.gridOrderStyles;
        }
    }
    getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }
    getParentTablejsGridDirective(el) {
        while (el !== null && el.getAttribute('tablejsGrid') === null) {
            el = el.parentElement;
        }
        return el;
    }
    elementRefUnderPoint(event) {
        const elements = document.elementsFromPoint(event.clientX, event.clientY);
        return elements.filter(item => item === this.elementRef.nativeElement).length > 0;
    }
    getReorderColsUnderPoint(event) {
        const reorderColElements = document.elementsFromPoint(event.clientX, event.clientY);
        const elements = reorderColElements.filter(item => {
            return item.getAttribute('reorderCol') !== null;
        });
        return elements;
    }
    getReorderHandlesUnderPoint(event) {
        const reorderGripElements = document.elementsFromPoint(event.clientX, event.clientY);
        const elements = reorderGripElements.filter(item => {
            return item.getAttribute('reorderGrip') !== null;
        });
        return elements;
    }
    getResizableElements(event) {
        const resizableElements = document.elementsFromPoint(event.clientX, event.clientY);
        const elements = resizableElements.filter(item => {
            return item.getAttribute('tablejsDataColClasses') !== null;
        });
        return elements;
    }
    removeHighlights(elToExclude = null, moveDirection = -2) {
        this.elementsWithHighlight.forEach(item => {
            if (item.el !== elToExclude || item.moveDirection !== moveDirection) {
                this.removeElementHighlight(item.el);
            }
        });
    }
    removeElementHighlight(el) {
        el.classList.remove('highlight-left');
        el.classList.remove('highlight-right');
    }
    reorderColumns(event) {
        let draggableElement = this.lastDraggedOverElement;
        let elRect = draggableElement.getBoundingClientRect();
        let elX = elRect.left;
        let elW = elRect.width;
        draggableElement.classList.remove('highlight-right');
        draggableElement.classList.remove('highlight-right');
        if (this.draggingColumn === draggableElement) {
            return;
        }
        let moveDirection = 0;
        if ((event.clientX - elX) >= elW / 2) {
            moveDirection = 1;
        }
        else {
            moveDirection = 0;
        }
        let colRangeDraggedParentInd = -1;
        let colRangeDraggedChildInd = -1;
        let colRangeDroppedParentInd = -1;
        let colRangeDroppedChildInd = -1;
        let draggedInd = -1;
        let droppedInd = -1;
        let draggedGroup = null;
        let pGroup = this.parentGroups.forEach((group, groupInd) => group.forEach((item, index) => {
            if (item === this.draggingColumn) {
                colRangeDraggedParentInd = groupInd;
                colRangeDraggedChildInd = index;
                draggedInd = index;
                draggedGroup = group;
            }
            if (item === draggableElement) {
                colRangeDroppedParentInd = groupInd;
                colRangeDroppedChildInd = index;
                droppedInd = index;
            }
        }));
        let parentRanges = null;
        let tempRanges = this.colRangeGroups.concat();
        let parentRangeIndex = -1;
        tempRanges.sort((a, b) => b.length - a.length);
        tempRanges.forEach((item, index) => {
            if (!parentRanges && item.length < draggedGroup.length) {
                parentRanges = item;
                parentRangeIndex = this.colRangeGroups.indexOf(item);
            }
        });
        let fromOrder = (colRangeDraggedChildInd + 1);
        let toOrder = (colRangeDroppedChildInd + 1);
        // if has to stay within ranges, get ranges and swap
        if (parentRanges !== null) {
            this.colRangeGroups[parentRangeIndex].forEach(range => {
                let lowRange = range[0];
                let highRange = range[1];
                let draggedLowRange = this.colRangeGroups[colRangeDraggedParentInd][colRangeDraggedChildInd][0];
                let draggedHighRange = this.colRangeGroups[colRangeDraggedParentInd][colRangeDraggedChildInd][1];
                if (fromOrder >= lowRange && fromOrder < highRange && toOrder >= lowRange && toOrder < highRange) {
                    let data1 = this.colDataGroups[colRangeDraggedParentInd].filter(item => item.nthChild === fromOrder)[0];
                    let data2 = this.colDataGroups[colRangeDraggedParentInd].filter(item => item.nthChild === toOrder)[0];
                    let rangeGroup = this.colDataGroups[colRangeDraggedParentInd].slice(range[0] - 1, range[1] - 1);
                    rangeGroup.sort((item1, item2) => {
                        return item1.order - item2.order;
                    });
                    let origRangGroup = rangeGroup.concat();
                    rangeGroup.splice(rangeGroup.indexOf(data1), 1);
                    rangeGroup.splice(rangeGroup.indexOf(data2) + moveDirection, 0, data1);
                    rangeGroup.forEach((item, index) => {
                        item.order = index + 1;
                    });
                }
            });
        }
        else {
            let data1 = this.colDataGroups[colRangeDraggedParentInd].filter(item => item.nthChild === fromOrder)[0];
            let data2 = this.colDataGroups[colRangeDraggedParentInd].filter(item => item.nthChild === toOrder)[0];
            let rangeGroup = this.colDataGroups[colRangeDraggedParentInd].concat();
            rangeGroup.sort((item1, item2) => {
                return item1.order - item2.order;
            });
            let origRangGroup = rangeGroup.concat();
            rangeGroup.splice(rangeGroup.indexOf(data1), 1);
            rangeGroup.splice(rangeGroup.indexOf(data2) + moveDirection, 0, data1);
            rangeGroup.forEach((item, index) => {
                item.order = index + 1;
            });
        }
        this.setGridOrder();
        // need to set a class to resize - default to first so column widths are updated
        const t = this.totalComputedWidth;
        this.currentClassesToResize = [this.stylesByClass[0].resizeClass];
        this.updateWidths(t);
    }
    constructGridTemplateColumns() {
        let str = '';
        this.gridOrder.forEach((order, index) => {
            if (this.classWidths[order - 1].toString().includes('%')) {
                str += ' ' + this.classWidths[order - 1].toString();
            }
            else {
                str += ' ' + this.classWidths[order - 1].toString() + 'px';
            }
        });
        return str;
    }
    setReorderHighlightHeight(draggableElement) {
        const draggableTop = this.getOffset(draggableElement).top;
        const containerTop = this.getOffset(this.elementRef.nativeElement).top;
        const containerHeightStr = window.getComputedStyle(this.elementRef.nativeElement).getPropertyValue('height');
        const containerHeight = Number(containerHeightStr.substr(0, containerHeightStr.length - 2));
        const highlightHeight = containerHeight - (draggableTop - containerTop) - 1;
        this.reorderHighlightStyle.innerHTML = this.id + ' .highlight-left div:after, ' + this.id + ' .highlight-right div:after { height: ' + highlightHeight + 'px !important }';
    }
    generateContainerID() {
        tablejs_grid_proxy_1.TablejsGridProxy.GRID_COUNT++;
        if (this.linkClass === undefined) {
            this.id = this.elementRef.nativeElement.getAttribute('id');
            if (this.id === undefined || this.id === null) {
                let i = 0;
                while (document.getElementById('table-col-id-' + (tablejs_grid_proxy_1.TablejsGridProxy.GRID_COUNT).toString()) !== null) {
                    i++;
                }
                this.id = 'table-col-id-' + (tablejs_grid_proxy_1.TablejsGridProxy.GRID_COUNT).toString();
                this.elementRef.nativeElement.setAttribute('id', this.id);
                this.id = '#' + this.id;
            }
        }
        else {
            this.id = '.' + this.linkClass;
        }
        const parentGridID = this.getParentTablejsGridDirective(this.elementRef.nativeElement.parentElement);
        if (parentGridID !== null) {
            this.id = '#' + parentGridID.getAttribute('id') + ' ' + this.id;
        }
    }
    generateViewportID() {
        let viewports = this.infiniteScrollViewports;
        let viewport;
        let viewportID;
        if (viewports.length > 0) {
            viewport = viewports[0];
            viewportID = viewport.getAttribute('id');
            let i = 0;
            while (document.getElementById('scroll-viewport-id-' + i.toString()) !== null) {
                i++;
            }
            viewportID = 'scroll-viewport-id-' + i.toString();
            viewport.setAttribute('id', viewportID);
        }
    }
    clearSelection() {
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
        else if (document['selection']) {
            document['selection'].empty();
        }
    }
    addResizableGrip(el) {
        this.resizableGrips.push(el);
    }
    addResizableColumn(el) {
        this.resizableColumns.push(el);
    }
    addReorderGrip(el) {
        this.reorderGrips.push(el);
    }
    addReorderableColumn(el) {
        this.reorderableColumns.push(el);
    }
    addColumnsWithDataClasses(el) {
        this.columnsWithDataClasses.push(el);
    }
    addRow(el) {
        this.rows.push(el);
    }
    addInfiniteScrollViewport(el) {
        this.infiniteScrollViewports.push(el);
    }
    removeStylesFromHead() {
        if (this.headTag.contains(this.widthStyle)) {
            this.headTag.removeChild(this.widthStyle);
            this.widthStyleFragment = null;
        }
        if (this.headTag.contains(this.reorderHighlightStyle)) {
            this.headTag.removeChild(this.reorderHighlightStyle);
            this.reorderHighlightStyleFragment = null;
        }
        for (let i = 0, len = this.subGroupFragments.length; i < len; i++) {
            if (this.headTag.contains(this.subGroupStyles[i])) {
                this.headTag.removeChild(this.subGroupStyles[i]);
                this.subGroupFragments[i] = null;
            }
        }
        for (let i = 0, len = this.gridOrderFragments.length; i < len; i++) {
            if (this.headTag.contains(this.gridOrderStyles[i])) {
                this.headTag.removeChild(this.gridOrderStyles[i]);
                this.gridOrderFragments[i] = null;
            }
        }
    }
    ngOnDestroy() {
        document['hasPointerDownListener'] = false;
        if (this.linkClass === undefined) {
            this.removeStylesFromHead();
        }
    }
};
GridDirective.ctorParameters = () => [
    { type: core_1.ViewContainerRef },
    { type: core_1.ElementRef },
    { type: core_1.ComponentFactoryResolver },
    { type: grid_service_1.GridService }
];
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Function)
], GridDirective.prototype, "dragAndDropGhostFilter", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], GridDirective.prototype, "linkClass", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], GridDirective.prototype, "resizeColumnWidthByPercent", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridDirective.prototype, "columnResizeStart", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridDirective.prototype, "columnResize", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridDirective.prototype, "columnResizeEnd", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridDirective.prototype, "columnReorder", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridDirective.prototype, "columnReorderStart", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridDirective.prototype, "dragOver", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], GridDirective.prototype, "columnReorderEnd", void 0);
GridDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[tablejsGrid],[tablejsgrid]',
        host: { class: 'tablejs-table-container tablejs-table-width' }
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ViewContainerRef,
        core_1.ElementRef,
        core_1.ComponentFactoryResolver,
        grid_service_1.GridService])
], GridDirective);
exports.GridDirective = GridDirective;


/***/ }),

/***/ "./src/app/tablejs/directives/inifinite-scroll/infinite-scroll.directive.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tablejs/directives/inifinite-scroll/infinite-scroll.directive.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const grid_service_1 = __webpack_require__(/*! ./../../services/grid/grid.service */ "./src/app/tablejs/services/grid/grid.service.ts");
let InfiniteScrollDirective = class InfiniteScrollDirective {
    constructor(elementRef, gridService) {
        this.elementRef = elementRef;
        this.gridService = gridService;
    }
    ngAfterViewInit() {
        this.registerColumnOnGridDirective();
    }
    registerColumnOnGridDirective() {
        const el = this.gridService.getParentTablejsGridDirective(this.elementRef.nativeElement);
        if (el !== null) {
            el['gridDirective'].addInfiniteScrollViewport(this.elementRef.nativeElement);
        }
    }
};
InfiniteScrollDirective.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: grid_service_1.GridService }
];
InfiniteScrollDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[tablejsInfiniteScroll]',
        host: { class: 'tablejs-infinite-scroll-viewport tablejs-table-width' }
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, grid_service_1.GridService])
], InfiniteScrollDirective);
exports.InfiniteScrollDirective = InfiniteScrollDirective;


/***/ }),

/***/ "./src/app/tablejs/directives/reorder-col/reorder-col.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tablejs/directives/reorder-col/reorder-col.directive.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const grid_service_1 = __webpack_require__(/*! ./../../services/grid/grid.service */ "./src/app/tablejs/services/grid/grid.service.ts");
let ReorderColDirective = class ReorderColDirective {
    constructor(elementRef, gridService) {
        this.elementRef = elementRef;
        this.gridService = gridService;
    }
    ngAfterViewInit() {
        this.registerColumnOnGridDirective();
    }
    registerColumnOnGridDirective() {
        let el = this.gridService.getParentTablejsGridDirective(this.elementRef.nativeElement);
        if (el !== null) {
            el['gridDirective'].addReorderableColumn(this.elementRef.nativeElement);
        }
    }
};
ReorderColDirective.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: grid_service_1.GridService }
];
ReorderColDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[reorderCol]'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, grid_service_1.GridService])
], ReorderColDirective);
exports.ReorderColDirective = ReorderColDirective;


/***/ }),

/***/ "./src/app/tablejs/directives/reorder-grip/reorder-grip.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tablejs/directives/reorder-grip/reorder-grip.directive.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const grid_service_1 = __webpack_require__(/*! ./../../services/grid/grid.service */ "./src/app/tablejs/services/grid/grid.service.ts");
let ReorderGripDirective = class ReorderGripDirective {
    constructor(elementRef, gridService) {
        this.elementRef = elementRef;
        this.gridService = gridService;
    }
    ngAfterViewInit() {
        this.registerGripOnGridDirective();
    }
    registerGripOnGridDirective() {
        const el = this.gridService.getParentTablejsGridDirective(this.elementRef.nativeElement);
        if (el !== null) {
            el['gridDirective'].addReorderGrip(this.elementRef.nativeElement);
        }
    }
};
ReorderGripDirective.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: grid_service_1.GridService }
];
ReorderGripDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[reorderGrip]'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, grid_service_1.GridService])
], ReorderGripDirective);
exports.ReorderGripDirective = ReorderGripDirective;


/***/ }),

/***/ "./src/app/tablejs/directives/resizable-col/resizable-col.directive.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tablejs/directives/resizable-col/resizable-col.directive.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const grid_service_1 = __webpack_require__(/*! ./../../services/grid/grid.service */ "./src/app/tablejs/services/grid/grid.service.ts");
let ResizableColDirective = class ResizableColDirective {
    constructor(elementRef, gridService) {
        this.elementRef = elementRef;
        this.gridService = gridService;
    }
    ngAfterViewInit() {
        this.registerColumnOnGridDirective();
    }
    registerColumnOnGridDirective() {
        let el = this.gridService.getParentTablejsGridDirective(this.elementRef.nativeElement);
        if (el !== null) {
            el['gridDirective'].addResizableColumn(this.elementRef.nativeElement);
        }
    }
};
ResizableColDirective.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: grid_service_1.GridService }
];
ResizableColDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[tablejsResizableCol]',
        host: { class: 'tablejs-resizable-col' }
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, grid_service_1.GridService])
], ResizableColDirective);
exports.ResizableColDirective = ResizableColDirective;


/***/ }),

/***/ "./src/app/tablejs/directives/resizable-grip/resizable-grip.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tablejs/directives/resizable-grip/resizable-grip.directive.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const grid_service_1 = __webpack_require__(/*! ./../../services/grid/grid.service */ "./src/app/tablejs/services/grid/grid.service.ts");
let ResizableGripDirective = class ResizableGripDirective {
    constructor(elementRef, gridService) {
        this.elementRef = elementRef;
        this.gridService = gridService;
    }
    ngAfterViewInit() {
        this.registerGripOnGridDirective();
    }
    registerGripOnGridDirective() {
        const el = this.gridService.getParentTablejsGridDirective(this.elementRef.nativeElement);
        if (el !== null) {
            el['gridDirective'].addResizableGrip(this.elementRef.nativeElement);
        }
    }
};
ResizableGripDirective.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: grid_service_1.GridService }
];
ResizableGripDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[tablejsResizableGrip],[resizableGrip]'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, grid_service_1.GridService])
], ResizableGripDirective);
exports.ResizableGripDirective = ResizableGripDirective;


/***/ }),

/***/ "./src/app/tablejs/directives/sortable-col/sortable-col.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tablejs/directives/sortable-col/sortable-col.directive.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let SortableColDirective = class SortableColDirective {
    constructor() { }
};
SortableColDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[tablejsSortableCol]',
        host: { class: 'tablejs-sortable' }
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SortableColDirective);
exports.SortableColDirective = SortableColDirective;


/***/ }),

/***/ "./src/app/tablejs/services/grid/grid.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/tablejs/services/grid/grid.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let GridService = class GridService {
    constructor() {
        this.linkedDirectiveObjs = {};
    }
    getParentTablejsGridDirective(el) {
        while (el !== null && el.getAttribute('tablejsGrid') === null) {
            el = el.parentElement;
        }
        return el;
    }
};
GridService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], GridService);
exports.GridService = GridService;


/***/ }),

/***/ "./src/app/tablejs/shared/classes/events/column-reorder-event.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tablejs/shared/classes/events/column-reorder-event.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ColumnReorderEvent {
    constructor() { }
}
ColumnReorderEvent.ON_REORDER = 'onReorder';
ColumnReorderEvent.ON_REORDER_START = 'onReorderStart';
ColumnReorderEvent.ON_REORDER_END = 'onReorderEnd';
exports.ColumnReorderEvent = ColumnReorderEvent;


/***/ }),

/***/ "./src/app/tablejs/shared/classes/events/column-resize-event.ts":
/*!**********************************************************************!*\
  !*** ./src/app/tablejs/shared/classes/events/column-resize-event.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ColumnResizeEvent {
}
ColumnResizeEvent.ON_RESIZE = 'onResize';
ColumnResizeEvent.ON_RESIZE_START = 'onResizeStart';
ColumnResizeEvent.ON_RESIZE_END = 'onResizeEnd';
exports.ColumnResizeEvent = ColumnResizeEvent;


/***/ }),

/***/ "./src/app/tablejs/shared/classes/tablejs-grid-proxy.ts":
/*!**************************************************************!*\
  !*** ./src/app/tablejs/shared/classes/tablejs-grid-proxy.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TablejsGridProxy {
    constructor() {
    }
}
TablejsGridProxy.GRID_COUNT = 0;
exports.TablejsGridProxy = TablejsGridProxy;


/***/ }),

/***/ "./src/app/tablejs/tablejs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tablejs/tablejs.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const scrolling_1 = __webpack_require__(/*! @angular/cdk-experimental/scrolling */ "./node_modules/@angular/cdk-experimental/esm2015/scrolling.js");
const scrolling_2 = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
const horiz_resize_grip_component_1 = __webpack_require__(/*! ./components/horiz-resize-grip/horiz-resize-grip.component */ "./src/app/tablejs/components/horiz-resize-grip/horiz-resize-grip.component.ts");
const reorder_grip_component_1 = __webpack_require__(/*! ./components/reorder-grip/reorder-grip.component */ "./src/app/tablejs/components/reorder-grip/reorder-grip.component.ts");
const grid_directive_1 = __webpack_require__(/*! ./directives/grid/grid.directive */ "./src/app/tablejs/directives/grid/grid.directive.ts");
const grid_row_directive_1 = __webpack_require__(/*! ./directives/grid-row/grid-row.directive */ "./src/app/tablejs/directives/grid-row/grid-row.directive.ts");
const resizable_grip_directive_1 = __webpack_require__(/*! ./directives/resizable-grip/resizable-grip.directive */ "./src/app/tablejs/directives/resizable-grip/resizable-grip.directive.ts");
const infinite_scroll_directive_1 = __webpack_require__(/*! ./directives/inifinite-scroll/infinite-scroll.directive */ "./src/app/tablejs/directives/inifinite-scroll/infinite-scroll.directive.ts");
const grid_component_1 = __webpack_require__(/*! ./components/grid/grid.component */ "./src/app/tablejs/components/grid/grid.component.ts");
const sortable_col_directive_1 = __webpack_require__(/*! ./directives/sortable-col/sortable-col.directive */ "./src/app/tablejs/directives/sortable-col/sortable-col.directive.ts");
const editable_cell_directive_1 = __webpack_require__(/*! ./directives/editable-cell/editable-cell.directive */ "./src/app/tablejs/directives/editable-cell/editable-cell.directive.ts");
const drag_and_drop_ghost_component_1 = __webpack_require__(/*! ./components/drag-and-drop-ghost/drag-and-drop-ghost.component */ "./src/app/tablejs/components/drag-and-drop-ghost/drag-and-drop-ghost.component.ts");
const resizable_col_directive_1 = __webpack_require__(/*! ./directives/resizable-col/resizable-col.directive */ "./src/app/tablejs/directives/resizable-col/resizable-col.directive.ts");
const reorder_grip_directive_1 = __webpack_require__(/*! ./directives/reorder-grip/reorder-grip.directive */ "./src/app/tablejs/directives/reorder-grip/reorder-grip.directive.ts");
const reorder_col_directive_1 = __webpack_require__(/*! ./directives/reorder-col/reorder-col.directive */ "./src/app/tablejs/directives/reorder-col/reorder-col.directive.ts");
const data_col_classes_directive_1 = __webpack_require__(/*! ./directives/data-col-classes/data-col-classes.directive */ "./src/app/tablejs/directives/data-col-classes/data-col-classes.directive.ts");
const data_col_class_directive_1 = __webpack_require__(/*! ./directives/data-col-class/data-col-class.directive */ "./src/app/tablejs/directives/data-col-class/data-col-class.directive.ts");
let TablejsModule = class TablejsModule {
};
TablejsModule = tslib_1.__decorate([
    core_1.NgModule({
        entryComponents: [
            drag_and_drop_ghost_component_1.DragAndDropGhostComponent
        ],
        declarations: [
            grid_directive_1.GridDirective,
            grid_row_directive_1.GridRowDirective,
            resizable_grip_directive_1.ResizableGripDirective,
            infinite_scroll_directive_1.InfiniteScrollDirective,
            horiz_resize_grip_component_1.HorizResizeGripComponent,
            reorder_grip_component_1.ReorderGripComponent,
            grid_component_1.GridComponent,
            sortable_col_directive_1.SortableColDirective,
            editable_cell_directive_1.EditableCellDirective,
            drag_and_drop_ghost_component_1.DragAndDropGhostComponent,
            reorder_grip_directive_1.ReorderGripDirective,
            reorder_col_directive_1.ReorderColDirective,
            data_col_classes_directive_1.DataColClassesDirective,
            data_col_class_directive_1.DataColClassDirective,
            resizable_col_directive_1.ResizableColDirective
        ],
        imports: [
            common_1.CommonModule,
            scrolling_1.ScrollingModule,
            scrolling_2.ScrollDispatchModule,
        ],
        exports: [
            scrolling_1.ScrollingModule,
            scrolling_2.ScrollDispatchModule,
            grid_directive_1.GridDirective,
            grid_row_directive_1.GridRowDirective,
            resizable_grip_directive_1.ResizableGripDirective,
            infinite_scroll_directive_1.InfiniteScrollDirective,
            horiz_resize_grip_component_1.HorizResizeGripComponent,
            reorder_grip_component_1.ReorderGripComponent,
            grid_component_1.GridComponent,
            sortable_col_directive_1.SortableColDirective,
            editable_cell_directive_1.EditableCellDirective,
            drag_and_drop_ghost_component_1.DragAndDropGhostComponent,
            reorder_grip_directive_1.ReorderGripDirective,
            reorder_col_directive_1.ReorderColDirective,
            data_col_classes_directive_1.DataColClassesDirective,
            data_col_class_directive_1.DataColClassDirective,
            resizable_col_directive_1.ResizableColDirective
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], TablejsModule);
exports.TablejsModule = TablejsModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map