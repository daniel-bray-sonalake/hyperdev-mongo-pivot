

// when the page is ready, ask for the facts and render the pivot with some default settings
$(document).ready(
  function() {
    $.get("/facts", function(data){
        $("renderNote").text('Data collected, rendering now');  
        $("#output").pivotUI(data, {
          rows: ['regionname'],
          cols: ['prodlinetext'],
          vals: ['grantamt'],
          aggregatorName: "Sum",
          rendererName: "Row Heatmap",
          renderers: $.extend(
          	$.pivotUtilities.renderers, 
            $.pivotUtilities.c3_renderers
          )
        });
    })
  }
);

