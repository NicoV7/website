const express = require('express');
const port = 4242;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/home.css', (req, res) => {
    res.sendFile(__dirname + '/home.css');
});
  app.get('/home.js', (req, res) => {
    res.sendFile(__dirname + '/home.js');
});
app.get('/images/nature.gif', (req, res) => {
    res.sendFile(__dirname + '/images/nature.gif');
});
app.get("/images/PeacefulRiver.gif", (req, res) => {
    res.sendFile(__dirname + "/images/PeacefulRiver.gif");
});
app.get('/images/linkedin.png', (req, res) => {
    res.sendFile(__dirname + '/images/linkedin.png');
});
app.get('/images/instagram.png', (req, res) => {
    res.sendFile(__dirname + '/images/instagram.png');
});
app.get('/images/instagram.svg', (req, res) => {
    res.sendFile(__dirname + '/images/Instagram.svg');
});
app.get('/images/pacmansmall.mp4', (req, res) => {
    res.sendFile(__dirname + '/images/pacmansmall.mp4');
});
app.get('/images/renderer.mp4', (req, res) => {
    res.sendFile(__dirname + '/images/renderer.mp4');
});
app.get('/images/gmail.png', (req, res) => {
    res.sendFile(__dirname + '/images/gmail.png');
});
app.get('/resume/myResume.pdf', (req, res) => {
    res.sendFile(__dirname + '/resume/myResume.pdf');
});
 
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});