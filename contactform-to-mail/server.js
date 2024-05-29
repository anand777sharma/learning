const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Configure your SMTP server
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'goldenbackup0@gmail.com',
            pass: 'timeforme.com'
        }
    });

    const mailOptions = {
        from: email,
        to: 'goldenbackup0@gmail.com',
        subject: `Contact form submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.toString() });
        }
        res.status(200).json({ message: 'Email sent successfully' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
