var request = require('request');

request.post('https://probasketballapi.com/teams', {
  form: {
    api_key: 'rCTDJWuSZcHY9FvlOwtNE46Rig0VIGzx'
  }
}, function(err, res) {
  console.log(err, res);
});
