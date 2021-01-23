// 리스팅 10.4 파이버를 사용하여 죽음의 피라미드 피하기

Fiber(function() {
  var connection, document, apiResult, saveResult = null;
  DB.connect(options, function (err, con) {
    connection = con;
  });

  connection.query(something, function(err doc) {
    document = doc;
  });

  ExternalAPI.makeCall(document, function (err, res) {
    apiResult = res;
  });

  connection.save(apiResult, function (err, res) {
    saveResult = res;
  });

  request.end(saveResult);

}).run();
