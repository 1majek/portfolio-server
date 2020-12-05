import * as express from 'express';
import * as mailSender from 'mailsender';

const app = express.Router();

export {app as routes};

app.post('/sendEmail', (req, res) => {

    console.log(req.body);
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact details</h3>
    <ul>
        <li>Nombre: ${req.body.nombre}</li>
        <li>Asunto: ${req.body.asunto}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.mensaje}</p>
    `;
    send(req.body.asunto, output);
    res.send({ 'respuesta': 'enviado' });

});


function send(subject, message) {

    mailSender.from('stevenmajek@gmail.com', 'lastkingsteven123')
        .to('majek1@hotmail.com')
        .body(subject, message, true)
        .send();

}
