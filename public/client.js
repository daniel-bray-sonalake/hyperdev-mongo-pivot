
var loadData = function(collection){
  console.log('Loading: "'+collection+'"');
  var dataset = getDatasetConfig(collection);
  
  $.get("/facts/" + dataset.dataset, function(data){
        $("renderNote").text('Data collected, rendering now');  
        $("#output").pivotUI(data, {
          rows: dataset.rows,
          cols: dataset.cols,
          vals: dataset.vals,
          aggregatorName: dataset.aggregatorName,
          rendererName: dataset.rendererName,
          
          renderers: $.extend(
          	$.pivotUtilities.renderers, 
            $.pivotUtilities.c3_renderers
          )
        });
    })
}

// when the page is ready, ask for the facts and render the pivot with some default settings
$(document).ready(
  //get the data
  function() {
    loadData('worldbank');
  }
);


// define the default pivotconfigurations for the datasets 
//in the real world we'd probably have these in mongo as well
var getDatasetConfig = function(dataset) {
  var response = {'dataset' : dataset};  
  //configs should be in mongo ;)
  
  switch (dataset){
    case 'worldbank':
      response.rows = ['regionname'];
      response.cols = ['prodlinetext'];
      response.vals = ['grantamt'];
      response.aggregatorName = "Sum";
      response.rendererName  ="Heatmap";
      break;
    case 'football':
      response.rows = ['Full Time Result'];
      response.cols = ['Team'];
      response.vals = ['Full Time  Goals', 'Shots on Target'];
      response.aggregatorName = "Sum over Sum";
      response.rendererName = "Stacked Bar Chart";
      break;  
  }
  
  return response
}