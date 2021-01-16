Router.configure({
  layoutTemplate: 'masterLayout'
});

Router.plugin('membersOnly', {
  membersOnlyTpl: 'memberonly',
  only: ['profile.details']
});
