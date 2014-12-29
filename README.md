esriFeatureServiceTableBuilder
==============================

dependencies
------------
-jQuery
-jQuery Table Sorter:
http://tablesorter.com/docs/

arguments
---------
id: targets the id of a <table> element in the DOM
json: an ESRI feature service json endpoint
attributes: an array of name:value pairs consisting of field names and aliases

example
-------
<body>
  <table class="table table-hover tablesorter" id="srno-table"></table>
</body>
<script>
  var srnoJSON = "http://gis.nola.gov:6080/arcgis/rest/services/Staging/SelfReportedN/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson"

  buildTableFromEsriFeatureService("#srno-table", srnoJSON, {
    "Organization_Name": "Name",
    "Boundaries": "Boundaries",
    "Email": "Email"
  });
</script>