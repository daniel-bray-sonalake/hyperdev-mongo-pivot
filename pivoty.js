module.exports = {
  // take the mongo json data and turn it into a simple pivot
  // we get a list of all the headers that only contain string/number
  // types
  pivot : function(data) {
    var headers = this.deriveHeaders(data);
    return this.deriveTable(headers, data);
  },
  
  //scan through the data and only use simplevalues
  deriveHeaders : function(data) {
    var headers = {};
    for (var i=0; i!=data.length;i++) {
      for (var key in data[i]) {
        // we're assuming here that every element with a given name
        // is of the same type - we can do this here because
        // we know the data 
        if (data[i].hasOwnProperty(key) && !headers[key]) {
          var sampleValue = data[i][key];
          var header = {
              'key' : key,
              'sampleValue' : sampleValue,
               'valueType' : typeof sampleValue
          }
          
          if(header.valueType === 'string' || header.valueType === 'number') {
            headers[key]=header;
          } 
          
        }
      }
    }
    return headers;
  },
  deriveTable: function(headers, data) {
    var table = [];
    
    // get the header row
    var headerRow= [];
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        headerRow.push(key);
      }
    }
    headerRow.sort();
    table.push(headerRow);
    
    //get data as a table
    for (var i=0; i!= data.length; i++) {
      var row =[],
        source = data[i];
        for (var j=0; j!=headerRow.length; j++) {
          var headerCol=headerRow[j];
          var value ='';
          if (source.hasOwnProperty(headerCol)) {
            value = source[headerCol];
          } 
          //console.log('writing row ['+i+']['+dkey+']=['+source[dkey]+']');
          row.push(value);
          
      }
      table.push(row);
    }
    
    return table;
  }
}