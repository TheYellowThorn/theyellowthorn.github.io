(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/* You can add global styles to this file, and also import other style files */\ndiv {\n  position: relative;\n  padding: 0px;\n  margin: 0;\n  box-sizing: border-box;\n}\nlabel {\n  padding-right: 10px;\n}\ninput {\n  padding: 5px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\napp-grid-example {\n  position: relative;\n  display: block;\n}\napp-reorder-grip {\n  position: absolute;\n  left: 10px;\n  top: 9px;\n  display: inline-block;\n  height: 15px;\n  overflow: hidden;\n  cursor: pointer;\n}\napp-resize-grip {\n  position: absolute;\n  right: 10px;\n  top: 9px;\n  display: inline-block;\n  padding: 0px;\n  padding-left: 10px;\n  padding-top: 2px;\n  height: 12px;\n  width: 20px;\n  cursor: pointer;\n}\n.fa-arrows-alt-v, .fa-long-arrow-alt-up, .fa-long-arrow-alt-down {\n  position: absolute;\n  right: 30px;\n  top: 9px;\n  display: inline-block;\n  padding: 0px;\n  padding-left: 10px;\n  padding-top: 2px;\n  height: 12px;\n  width: 20px;\n  cursor: pointer;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0px;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\ntable thead {\n  display: table-header-group;\n}\ntable tbody {\n  display: table-row-group;\n}\ntable thead, table tbody {\n  position: relative;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n}\ntable thead tr, table tbody tr {\n  position: relative;\n  display: grid;\n  grid-template-columns: 220px 220px 120px 200px;\n  vertical-align: baseline;\n  white-space: nowrap;\n  border-collapse: collapse;\n}\ntable thead tr th, table thead tr td, table tbody tr th, table tbody tr td {\n  position: relative;\n  border: 1px solid #e9e9e9;\n  height: 36px;\n  width: 100%;\n}\ntable thead tr th div, table thead tr td div, table tbody tr th div, table tbody tr td div {\n  position: relative;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\ntable thead tr th div span, table thead tr td div span, table tbody tr th div span, table tbody tr td div span {\n  vertical-align: top;\n}\ntable thead tr th, table tbody tr th {\n  text-align: center;\n  background-color: #555555;\n}\ntable thead tr th div, table tbody tr th div {\n  color: #ffffff;\n  font-size: 15px;\n}\ntable thead tr th div .dots-container, table tbody tr th div .dots-container {\n  margin-top: -2px;\n  padding: 0px;\n  padding-right: 10px;\n}\ntable thead tr th div .dots-3, table tbody tr th div .dots-3 {\n  display: inline-block;\n  width: 4px;\n  height: 20px;\n  top: 0px;\n  left: 0px;\n  padding: 0px;\n}\ntable thead tr th div .dots-3:after, table tbody tr th div .dots-3:after {\n  content: '\\2807';\n  font-size: 14px;\n}\ntable thead tr th div .resize-container, table tbody tr th div .resize-container {\n  display: block;\n  padding: 0px;\n  height: 15px;\n  width: 20px;\n}\ntable thead tr th div .fa-angle-left, table tbody tr th div .fa-angle-left {\n  padding: 0px;\n  width: 6px;\n  position: relative;\n  left: 0px;\n  top: 0px;\n}\ntable thead tr th div .fa-angle-right, table tbody tr th div .fa-angle-right {\n  padding: 0px;\n  width: 6px;\n  position: relative;\n  left: 0px;\n  top: 0px;\n}\ntable thead tr td, table tbody tr td {\n  background-color: #ffffff;\n}\ntable thead tr td div, table tbody tr td div {\n  font-size: 13px;\n}\ntable thead tr td div.title, table tbody tr td div.title {\n  width: 220px;\n}\ntable thead tr td div.director, table tbody tr td div.director {\n  width: 220px;\n}\ntable thead tr td div.year, table tbody tr td div.year {\n  width: 120px;\n}\ntable thead tr td div.status, table tbody tr td div.status {\n  width: 200px;\n}\ntable thead tr td div.title-perc, table tbody tr td div.title-perc {\n  width: 30%;\n}\ntable thead tr td div.director-perc, table tbody tr td div.director-perc {\n  width: 21%;\n}\ntable thead tr td div.year-perc, table tbody tr td div.year-perc {\n  width: 14%;\n}\ntable thead tr td div.status-perc, table tbody tr td div.status-perc {\n  width: 35%;\n}\ntable thead tr.winner td, table tbody tr.winner td {\n  background-color: #ddeeff;\n}\n.grid-container {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  overflow-x: scroll;\n  margin: 0px;\n}\n.grid-container.percent {\n  display: block;\n  width: 100%;\n}\n.tu-table-width {\n  overflow: auto;\n}\n.percent .tu-table-width {\n  width: 100% !important;\n}\n.tall-viewport.tu-infinite-scroll-viewport {\n  position: relative;\n  display: block;\n  padding: 0px;\n  height: 450px;\n  border-bottom: 1px solid #dddddd;\n  background-color: #f9f9f9;\n}\n.tall-viewport .cdk-virtual-scroll-content-wrapper {\n  padding: 0px;\n  margin: 0px;\n  width: 100%;\n}\nth[reorderCol].highlight-left, td[reorderCol].highlight-left {\n  position: relative;\n  overflow: visible !important;\n}\nth[reorderCol].highlight-left > div, th[reorderCol].highlight-right > div, td[reorderCol].highlight-left > div, td[reorderCol].highlight-right > div {\n  overflow: visible !important;\n}\nth[reorderCol].highlight-left > div:after, th[reorderCol].highlight-right > div:after, td[reorderCol].highlight-left > div:after, td[reorderCol].highlight-right > div:after {\n  box-sizing: border-box;\n  position: absolute;\n  display: block;\n  background-color: rgba(122, 122, 122, 0.05);\n  height: 404px;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 5;\n}\nth[reorderCol].highlight-left > div:after, td[reorderCol].highlight-left > div:after {\n  font-family: \"Font Awesome 5 Free\";\n  content: '';\n  font-weight: 900;\n  border-left-style: solid;\n  border-left-width: 1px;\n  border-left-color: #000000;\n  padding-left: 10px;\n  text-align: left;\n  -webkit-animation: mover 0.5s infinite  alternate;\n  animation: mover 0.5s infinite  alternate;\n  box-shadow: inset 3px 0 3px -3px rgba(0, 0, 0, 0.4);\n}\nth[reorderCol].highlight-left > div.sort-icon:after, td[reorderCol].highlight-left > div.sort-icon:after {\n  display: none;\n}\nth[reorderCol].highlight-right > div:after, td[reorderCol].highlight-right > div:after {\n  font-family: \"Font Awesome 5 Free\";\n  content: '';\n  font-weight: 900;\n  border-right-style: solid;\n  border-right-width: 1px;\n  border-right-color: #000000;\n  padding-right: 10px;\n  text-align: right;\n  -webkit-animation: mover 0.5s infinite  alternate;\n  animation: mover 0.5s infinite  alternate;\n  box-shadow: inset -3px 0 3px -3px rgba(0, 0, 0, 0.4);\n}\nth[reorderCol].highlight-right > div.sort-icon:after, td[reorderCol].highlight-right > div.sort-icon:after {\n  display: none;\n}\n@-webkit-keyframes mover {\n  0% {\n    padding-top: 4px;\n  }\n  100% {\n    padding-top: 10px;\n  }\n}\n@keyframes mover {\n  0% {\n    padding-top: 4px;\n  }\n  100% {\n    padding-top: 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZ291d2VuL0Rlc2t0b3AvVHJhbnN1bmlvbi9UdUdyaWRFeGFtcGxlczIvc3JjL3N0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0EsOEVBQUE7QUFFQTtFQUNDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtBQ0F2QjtBREVBO0VBQ0MsbUJBQW1CO0FDQ3BCO0FEQ0E7RUFDQyxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtBQ0VwQjtBREFBO0VBQ0Msa0JBQWtCO0VBQ2xCLGNBQWM7QUNHZjtBRERBO0VBQ0Msa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQ0loQjtBREZBO0VBQ0Msa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQ0toQjtBREhBO0VBQ0Msa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQ01oQjtBREpBO0VBQ0MseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7QUNPWjtBRFpBO0VBT0UsMkJBQTJCO0FDUzdCO0FEaEJBO0VBVUUsd0JBQXdCO0FDVTFCO0FEcEJBO0VBYUUsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztBQ1diO0FEM0JBO0VBbUJFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ1YsOENBQThDO0VBQ2pELHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIseUJBQXlCO0FDWTNC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ZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuZGl2IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nOiAwcHg7XG5cdG1hcmdpbjogMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmxhYmVsIHtcblx0cGFkZGluZy1yaWdodDogMTBweDtcbn1cbmlucHV0IHtcblx0cGFkZGluZzogNXB4O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5hcHAtZ3JpZC1leGFtcGxlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmFwcC1yZW9yZGVyLWdyaXAge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDEwcHg7XG5cdHRvcDogOXB4O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGhlaWdodDogMTVweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuYXBwLXJlc2l6ZS1ncmlwIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMTBweDtcblx0dG9wOiA5cHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cGFkZGluZzogMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdHBhZGRpbmctdG9wOiAycHg7XG5cdGhlaWdodDogMTJweDtcblx0d2lkdGg6IDIwcHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mYS1hcnJvd3MtYWx0LXYsIC5mYS1sb25nLWFycm93LWFsdC11cCwgLmZhLWxvbmctYXJyb3ctYWx0LWRvd24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAzMHB4O1xuXHR0b3A6IDlweDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwYWRkaW5nOiAwcHg7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcblx0cGFkZGluZy10b3A6IDJweDtcblx0aGVpZ2h0OiAxMnB4O1xuXHR3aWR0aDogMjBweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMHB4O1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHR0aGVhZCB7XG5cdFx0ZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xuXHR9XG5cdHRib2R5IHtcblx0XHRkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XG5cdH1cblx0dGhlYWQsIHRib2R5IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bGVmdDogMHB4O1xuXHRcdHRvcDogMHB4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXG5cdHRyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ZGlzcGxheTogZ3JpZDtcbiAgICBcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIwcHggMjIwcHggMTIwcHggMjAwcHg7XG5cdFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0XHR0aCwgdGQge1xuXHRcdFx0XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuXHRcdFx0aGVpZ2h0OiAzNnB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRkaXYge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aCB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1O1xuXHRcdFx0ZGl2IHtcblx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblxuXHRcdFx0XHQuZG90cy1jb250YWluZXIge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IC0ycHg7XG5cdFx0XHRcdFx0cGFkZGluZzogMHB4O1xuXHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmRvdHMtMyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdHdpZHRoOiA0cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdHRvcDogMHB4O1xuXHRcdFx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmRvdHMtMzphZnRlciB7XG5cdFx0XHRcdFx0Y29udGVudDogJ1xcMjgwNyc7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnJlc2l6ZS1jb250YWluZXIge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE1cHg7XG5cdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZhLWFuZ2xlLWxlZnQge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdFx0XHR3aWR0aDogNnB4O1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRsZWZ0OiAwcHg7XG5cdFx0XHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZhLWFuZ2xlLXJpZ2h0IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRcdFx0d2lkdGg6IDZweDtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0XHRcdHRvcDogMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRkIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdFx0XHRkaXYge1xuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cblx0XHRcdFx0Ji50aXRsZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDIyMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdCYuZGlyZWN0b3Ige1xuXHRcdFx0XHRcdHdpZHRoOiAyMjBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQmLnllYXIge1xuXHRcdFx0XHRcdHdpZHRoOiAxMjBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQmLnN0YXR1cyB7XG5cdFx0XHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji50aXRsZS1wZXJjIHtcblx0XHRcdFx0XHR3aWR0aDogMzAlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCYuZGlyZWN0b3ItcGVyYyB7XG5cdFx0XHRcdFx0d2lkdGg6IDIxJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmLnllYXItcGVyYyB7XG5cdFx0XHRcdFx0d2lkdGg6IDE0JTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmLnN0YXR1cy1wZXJjIHtcblx0XHRcdFx0XHR3aWR0aDogMzUlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji53aW5uZXIge1xuXHRcdFx0dGQge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGRlZWZmO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxufVxuXG4uZ3JpZC1jb250YWluZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0b3ZlcmZsb3cteDogc2Nyb2xsO1xuXHRtYXJnaW46IDBweDtcblxuXHQmLnBlcmNlbnQge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG59XG4udHUtdGFibGUtd2lkdGgge1xuXHRvdmVyZmxvdzogYXV0bztcbn1cbi5wZXJjZW50IHtcblx0LnR1LXRhYmxlLXdpZHRoIHtcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHR9XG59XG4udGFsbC12aWV3cG9ydCB7XG5cdCYudHUtaW5maW5pdGUtc2Nyb2xsLXZpZXdwb3J0IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0cGFkZGluZzogMHB4O1xuXHRcdGhlaWdodDogNDUwcHg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuXHR9XG5cdC5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcblx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0bWFyZ2luOiAwcHg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cbnRoLCB0ZCB7XG5cdCZbcmVvcmRlckNvbF0ge1xuXHRcdCYuaGlnaGxpZ2h0LWxlZnQge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0b3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcblx0XHR9XG5cdFx0Ji5oaWdobGlnaHQtbGVmdCA+IGRpdiwgJi5oaWdobGlnaHQtcmlnaHQgPiBkaXYge1xuXHRcdFx0b3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcblx0XHR9XG5cdFx0Ji5oaWdobGlnaHQtbGVmdCA+IGRpdjphZnRlciwgJi5oaWdobGlnaHQtcmlnaHQgPiBkaXY6YWZ0ZXIge1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjA1KTtcblx0XHRcdGhlaWdodDogNDA0cHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdHRvcDogMHB4O1xuXHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0ei1pbmRleDogNTtcblx0XHR9XG5cdFxuXHRcdCYuaGlnaGxpZ2h0LWxlZnQgPiBkaXYge1xuXHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcblx0XHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA5MDA7IFxuXHRcdFx0XHRib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG5cdFx0XHRcdGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG5cdFx0XHRcdGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwMDAwO1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cblx0XHRcdFx0LXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDAuNXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcblx0XHRcdFx0YW5pbWF0aW9uOiBtb3ZlciAwLjVzIGluZmluaXRlICBhbHRlcm5hdGU7XG5cdFx0XG5cdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDNweCAwIDNweCAtM3B4IHJnYmEoMCwwLDAsMC40KTtcblxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdCYuc29ydC1pY29uIHtcblx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQmLmhpZ2hsaWdodC1yaWdodCA+IGRpdiB7XG5cdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuXHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDkwMDsgXG5cdFx0XHRcdGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG5cdFx0XHRcdGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xuXHRcdFx0XHRib3JkZXItcmlnaHQtY29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXG5cdFx0XHRcdC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAwLjVzIGluZmluaXRlICBhbHRlcm5hdGU7XG5cdFx0XHRcdGFuaW1hdGlvbjogbW92ZXIgMC41cyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xuXHRcdFxuXHRcdFx0XHRib3gtc2hhZG93OiBpbnNldCAtM3B4IDAgM3B4IC0zcHggcmdiYSgwLDAsMCwwLjQpO1xuXHRcdFx0fVxuXHRcdFx0Ji5zb3J0LWljb24ge1xuXHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdEAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG5cdFx0XHQwJSB7IHBhZGRpbmctdG9wOiA0cHg7IH1cblx0XHRcdDEwMCUgeyBwYWRkaW5nLXRvcDogMTBweDsgfVxuXHRcdH1cblx0XHRAa2V5ZnJhbWVzIG1vdmVyIHtcblx0XHRcdDAlIHsgcGFkZGluZy10b3A6IDRweDsgfVxuXHRcdFx0MTAwJSB7IHBhZGRpbmctdG9wOiAxMHB4OyB9XG5cdFx0fVxuXHR9XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5sYWJlbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmFwcC1ncmlkLWV4YW1wbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5hcHAtcmVvcmRlci1ncmlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYXBwLXJlc2l6ZS1ncmlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLWFycm93cy1hbHQtdiwgLmZhLWxvbmctYXJyb3ctYWx0LXVwLCAuZmEtbG9uZy1hcnJvdy1hbHQtZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMwcHg7XG4gIHRvcDogOXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUgdGhlYWQge1xuICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XG59XG5cbnRhYmxlIHRib2R5IHtcbiAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xufVxuXG50YWJsZSB0aGVhZCwgdGFibGUgdGJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB0aGVhZCB0ciwgdGFibGUgdGJvZHkgdHIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIwcHggMjIwcHggMTIwcHggMjAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGFibGUgdGhlYWQgdHIgdGgsIHRhYmxlIHRoZWFkIHRyIHRkLCB0YWJsZSB0Ym9keSB0ciB0aCwgdGFibGUgdGJvZHkgdHIgdGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRhYmxlIHRoZWFkIHRyIHRoIGRpdiwgdGFibGUgdGhlYWQgdHIgdGQgZGl2LCB0YWJsZSB0Ym9keSB0ciB0aCBkaXYsIHRhYmxlIHRib2R5IHRyIHRkIGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxudGFibGUgdGhlYWQgdHIgdGggZGl2IHNwYW4sIHRhYmxlIHRoZWFkIHRyIHRkIGRpdiBzcGFuLCB0YWJsZSB0Ym9keSB0ciB0aCBkaXYgc3BhbiwgdGFibGUgdGJvZHkgdHIgdGQgZGl2IHNwYW4ge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG50YWJsZSB0aGVhZCB0ciB0aCwgdGFibGUgdGJvZHkgdHIgdGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7XG59XG5cbnRhYmxlIHRoZWFkIHRyIHRoIGRpdiwgdGFibGUgdGJvZHkgdHIgdGggZGl2IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxudGFibGUgdGhlYWQgdHIgdGggZGl2IC5kb3RzLWNvbnRhaW5lciwgdGFibGUgdGJvZHkgdHIgdGggZGl2IC5kb3RzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxudGFibGUgdGhlYWQgdHIgdGggZGl2IC5kb3RzLTMsIHRhYmxlIHRib2R5IHRyIHRoIGRpdiAuZG90cy0zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxudGFibGUgdGhlYWQgdHIgdGggZGl2IC5kb3RzLTM6YWZ0ZXIsIHRhYmxlIHRib2R5IHRyIHRoIGRpdiAuZG90cy0zOmFmdGVyIHtcbiAgY29udGVudDogJ1xcMjgwNyc7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxudGFibGUgdGhlYWQgdHIgdGggZGl2IC5yZXNpemUtY29udGFpbmVyLCB0YWJsZSB0Ym9keSB0ciB0aCBkaXYgLnJlc2l6ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG50YWJsZSB0aGVhZCB0ciB0aCBkaXYgLmZhLWFuZ2xlLWxlZnQsIHRhYmxlIHRib2R5IHRyIHRoIGRpdiAuZmEtYW5nbGUtbGVmdCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuXG50YWJsZSB0aGVhZCB0ciB0aCBkaXYgLmZhLWFuZ2xlLXJpZ2h0LCB0YWJsZSB0Ym9keSB0ciB0aCBkaXYgLmZhLWFuZ2xlLXJpZ2h0IHtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG5cbnRhYmxlIHRoZWFkIHRyIHRkLCB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbnRhYmxlIHRoZWFkIHRyIHRkIGRpdiwgdGFibGUgdGJvZHkgdHIgdGQgZGl2IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG50YWJsZSB0aGVhZCB0ciB0ZCBkaXYudGl0bGUsIHRhYmxlIHRib2R5IHRyIHRkIGRpdi50aXRsZSB7XG4gIHdpZHRoOiAyMjBweDtcbn1cblxudGFibGUgdGhlYWQgdHIgdGQgZGl2LmRpcmVjdG9yLCB0YWJsZSB0Ym9keSB0ciB0ZCBkaXYuZGlyZWN0b3Ige1xuICB3aWR0aDogMjIwcHg7XG59XG5cbnRhYmxlIHRoZWFkIHRyIHRkIGRpdi55ZWFyLCB0YWJsZSB0Ym9keSB0ciB0ZCBkaXYueWVhciB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxudGFibGUgdGhlYWQgdHIgdGQgZGl2LnN0YXR1cywgdGFibGUgdGJvZHkgdHIgdGQgZGl2LnN0YXR1cyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxudGFibGUgdGhlYWQgdHIgdGQgZGl2LnRpdGxlLXBlcmMsIHRhYmxlIHRib2R5IHRyIHRkIGRpdi50aXRsZS1wZXJjIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxudGFibGUgdGhlYWQgdHIgdGQgZGl2LmRpcmVjdG9yLXBlcmMsIHRhYmxlIHRib2R5IHRyIHRkIGRpdi5kaXJlY3Rvci1wZXJjIHtcbiAgd2lkdGg6IDIxJTtcbn1cblxudGFibGUgdGhlYWQgdHIgdGQgZGl2LnllYXItcGVyYywgdGFibGUgdGJvZHkgdHIgdGQgZGl2LnllYXItcGVyYyB7XG4gIHdpZHRoOiAxNCU7XG59XG5cbnRhYmxlIHRoZWFkIHRyIHRkIGRpdi5zdGF0dXMtcGVyYywgdGFibGUgdGJvZHkgdHIgdGQgZGl2LnN0YXR1cy1wZXJjIHtcbiAgd2lkdGg6IDM1JTtcbn1cblxudGFibGUgdGhlYWQgdHIud2lubmVyIHRkLCB0YWJsZSB0Ym9keSB0ci53aW5uZXIgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRlZWZmO1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmdyaWQtY29udGFpbmVyLnBlcmNlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50dS10YWJsZS13aWR0aCB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucGVyY2VudCAudHUtdGFibGUtd2lkdGgge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4udGFsbC12aWV3cG9ydC50dS1pbmZpbml0ZS1zY3JvbGwtdmlld3BvcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG4udGFsbC12aWV3cG9ydCAuY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtbGVmdCwgdGRbcmVvcmRlckNvbF0uaGlnaGxpZ2h0LWxlZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbnRoW3Jlb3JkZXJDb2xdLmhpZ2hsaWdodC1sZWZ0ID4gZGl2LCB0aFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtcmlnaHQgPiBkaXYsIHRkW3Jlb3JkZXJDb2xdLmhpZ2hsaWdodC1sZWZ0ID4gZGl2LCB0ZFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtcmlnaHQgPiBkaXYge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG50aFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtbGVmdCA+IGRpdjphZnRlciwgdGhbcmVvcmRlckNvbF0uaGlnaGxpZ2h0LXJpZ2h0ID4gZGl2OmFmdGVyLCB0ZFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtbGVmdCA+IGRpdjphZnRlciwgdGRbcmVvcmRlckNvbF0uaGlnaGxpZ2h0LXJpZ2h0ID4gZGl2OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjA1KTtcbiAgaGVpZ2h0OiA0MDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDU7XG59XG5cbnRoW3Jlb3JkZXJDb2xdLmhpZ2hsaWdodC1sZWZ0ID4gZGl2OmFmdGVyLCB0ZFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtbGVmdCA+IGRpdjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgY29udGVudDogJyc7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDAuNXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlciAwLjVzIGluZmluaXRlICBhbHRlcm5hdGU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDNweCAwIDNweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxudGhbcmVvcmRlckNvbF0uaGlnaGxpZ2h0LWxlZnQgPiBkaXYuc29ydC1pY29uOmFmdGVyLCB0ZFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtbGVmdCA+IGRpdi5zb3J0LWljb246YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG50aFtyZW9yZGVyQ29sXS5oaWdobGlnaHQtcmlnaHQgPiBkaXY6YWZ0ZXIsIHRkW3Jlb3JkZXJDb2xdLmhpZ2hsaWdodC1yaWdodCA+IGRpdjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgY29udGVudDogJyc7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMC41cyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xuICBhbmltYXRpb246IG1vdmVyIDAuNXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAwIDNweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxudGhbcmVvcmRlckNvbF0uaGlnaGxpZ2h0LXJpZ2h0ID4gZGl2LnNvcnQtaWNvbjphZnRlciwgdGRbcmVvcmRlckNvbF0uaGlnaGxpZ2h0LXJpZ2h0ID4gZGl2LnNvcnQtaWNvbjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG4gIDAlIHtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW92ZXIge1xuICAwJSB7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgfVxuICAxMDAlIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map