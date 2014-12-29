buildTableFromEsriFeatureService = function(id, json, attributes){

  var tableString;

  $.getJSON(json, function(data){
  
    var buildTableHeader = function(){
      tableString = '<thead><tr>';
      $.each(attributes, function(key, value){
        tableString = tableString + '<th>' + value + ' <span class="glyphicon glyphicon-sort"></span></th>';
      });
      tableString = tableString + '</tr></thead>';
    },

    buildTableBody = function(){
      tableString = tableString + '<tbody><tr>';
      $.each(data.features, function(dataKey, dataValue){
        $.each(attributes, function(attKey, attValue){
          tableString = tableString + '<td>' + data.features[dataKey].attributes[attKey] + '</td>';
        });
        tableString = tableString + '</tr>'
      });
      tableString = tableString + '</tr></tbody>'
    },

    init = (function(){
      buildTableHeader();
      buildTableBody();
      console.log(tableString);
      $(id).html(tableString);
      $(id).tablesorter();
    })();

  });
};
