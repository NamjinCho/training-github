var express = require('express');
var app = express();
app.use(express.static('public'));

app.use(function (req, res, next) {
console.log('Time:', Date.now());
next();
})

app.post('/user', function (req, res) {
res.send('POST (Create) ');
});
app.get('/user/', function (req, res) {

  console.log(req.query.userId+'의 정보를 가져옵니다!');
  // TODO 실제로 DB 에서 userId 에 해당하는 사용자 정보를 가져오는 로직을 개발해야 함
  var user = {
  userId: req.query.userId,
  name: req.query.name,
  email: 'yohany_AT_gmail.com',
  company: 'KossLAB'
  };
  res.send(user);


});
app.put('/user/:userId', function (req, res) {
res.send('PUT (Update) ');
});
app.delete('/user/:userId', function (req, res) {
res.send('DELETE (Delete) ');
});


app.get('/', function (req, res) {
res.send('Hello World!');
});
app.get('/hello',function(req,res){
  res.send('Ok this is Hello');
})
app.listen(3000, function () {
console.log('Example app listening on port 3000!')
});
