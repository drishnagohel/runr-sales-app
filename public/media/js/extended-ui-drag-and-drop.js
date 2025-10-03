/**
 * Drag & Drop
 */
"use strict";

(function () {
  const handleList1 = document.getElementById("handle-list-1");
  if (handleList1) {
    Sortable.create(handleList1, {
      animation: 150,
      group: "handleList",
      handle: ".drag-handle",
    });
  }
})();