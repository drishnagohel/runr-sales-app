import React, { useEffect } from "react";
import $ from "jquery";
import "select2/dist/js/select2.min.js";
import "flatpickr";
import "dropzone/dist/dropzone.js";
import * as echarts from "echarts";
import Quill from "quill";
import "../../pagination.css";

const FootScripts = () => {
  useEffect(() => {
    // Example: Sidebar toggle
    
    $('[open-sidebar]').on('click', function() {
      const id = $(this).attr('open-sidebar');
      $(`.theme-sidebar#${id}`).addClass('active');
      $('body').addClass('sidebar-active');
    });
    $('[close-sidebar]').on('click', function() {
      $(this).parents('.theme-sidebar').removeClass('active');
      $('body').removeClass('sidebar-active');
    });

    // Example: Select2 initialization
    $('.select').each(function() {
      $(this).select2({ minimumResultsForSearch: -1 });
    });

    // Flatpickr initialization
    if (typeof flatpickr !== "undefined") {
      flatpickr(".flatpickr", {});
    }

    // Dropzone initialization
    if (typeof Dropzone !== "undefined") {
      Dropzone.autoDiscover = false;
      // configure your dropzone here
    }

    // Clean up listeners on unmount
    return () => {
      $('[open-sidebar]').off();
      $('[close-sidebar]').off();
    };
  }, []);

  return (
    <>
      {/* Mobile warning */}
      <div className="show-mobile">
        <span>Kindly switch to the tablet or large device</span>
      </div>
    </>
  );
};

export default FootScripts;
