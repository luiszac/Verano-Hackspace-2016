var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();
  return {
    nombre: randomName,
    email: randomEmail,
    imagen: randomImage
  }

}

var generarPost = function(){
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();
  var randomWord = faker.lorem.sentence();
  var randomCard = faker.helpers.createCard();
  var randomAdress = faker.address.streetAddress();
  var randomDate = faker.date.recent();
  var randomPhone = faker.phone.phoneNumber();
  return {
    nombre: randomName,
    email: randomEmail,
    imagen: randomImage,
    mensaje: randomWord,
    direccion: randomAdress,
    fecha: randomDate,
    telefono: randomPhone,	
    <!--card: randomCard (extenso)-->
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/friends', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(2,5)
  var posts = _.times(cantidad, generarPost)
  res.json(posts);
})



app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})


app.listen(3000);
