function onSubmit(e) {
  var response = e.response;
  var itemResponses = response.getItemResponses();
  var answerFoo = "";

  for (var i = 0; i < itemResponses.length; i++) {
    /* get response by title */
    switch (itemResponses[i].getItem().getTitle()) {
      case "Foo":
        answerFoo = itemResponses[i].getResponse();
        break;
    }
  }

  var text = `@here Hello, World! Foo: ${answerFoo}`;

  var payloadSlack = {
    text: text,

    /* enable group mention */
    link_names: "true",
  };
  console.log(payloadSlack);

  var properties = PropertiesService.getScriptProperties().getProperties();
  var url = properties["webhook"];

  /* see https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetchurl,-params */
  var option = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payloadSlack),
  };
  UrlFetchApp.fetch(url, option);
}
