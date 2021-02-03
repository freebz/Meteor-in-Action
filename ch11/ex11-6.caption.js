// 리스팅 11.6 caption

if (Meteor.isServer) {
  console.log("Using the following API Key for Twitter");
  console.log(Meteor.settings.oauth.twitter.apikey);
}
