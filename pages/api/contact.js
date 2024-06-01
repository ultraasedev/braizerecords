import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name,prenom, email, subject, message } = req.body;

    // Configure the nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Change this to your email provider
      auth: {
        user: 'your-email@gmail.com', // Your email address
        pass: 'your-email-password', // Your email password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: 'your-email@gmail.com', // Your email address
        to: 'recipient-email@example.com', // Recipient's email address
        subject: `New message from ${name}: ${subject}`,
        text: `
          Name: ${name}
          Prenom: ${prenom}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
        `,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}