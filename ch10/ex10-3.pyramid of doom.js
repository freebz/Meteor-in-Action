// 리스팅 10.3 죽음의 피라미드

DB.connect(options, function(err, connection) {
  connection.query(something, function (err, document) {
    ExternalApi.makeCall(document, function (err, apiResult) {
      connection.save(apiResult, function (err, saveResult) {
	request.end(saveResult);
      });
    });
  });
});
