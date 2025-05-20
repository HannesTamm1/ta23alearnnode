<<<<<<< HEAD
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let messages = [];

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
    data = JSON.parse(data.toString());
    messages.push(data);
    wss.clients.forEach(client => {
        if(client.readyState === client.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
  });

  ws.send(JSON.stringify({type: 'messages', messages}));
=======
import express from 'express';
const app = express();
const port = 3000;

let messages = [];

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));


app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'content-type');
    next();
});

app.get('/', (req, res) => {
    let date = req.query.date ?? null;
    let filteredMessages = messages.filter(message => message.date > new Date(date));
    res.json(filteredMessages);
});

app.get('/longpoll', async (req, res) => {
    let date = req.query.date ?? null;
    let filteredMessages;
    do {
        await sleep(1000);
        filteredMessages = messages.filter(message => message.date > new Date(date));
    } while(filteredMessages.length === 0)
    res.json(filteredMessages);
});

app.get('/sse', async (req, res) => {
    res.header('Content-Type', 'text/event-stream');
    res.header('Cache-Control', 'no-cache');
    res.header('Connection', 'keep-alive');
    let closed = false;
    req.on('close', () => {
        closed = true;
    });

    let date = new Date();
    let filteredMessages;
    do {
        await sleep(1000);
        filteredMessages = messages.filter(message => message.date > new Date(date));
        if(filteredMessages.length){
            let lastMessage = filteredMessages[filteredMessages.length-1];
            date = new Date(lastMessage.date);
        }
        res.write(`event: newmessage\n`);
        res.write(`data: ${JSON.stringify(filteredMessages)}\n\n`);
    } while(!closed);
    res.end();
});

app.post('/', (req, res) => {
    messages.push({message: req.body.message, date: new Date()});
    res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
>>>>>>> 413c7a5eb200d968ecad14011e5aff154db3d0c4
});