import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';

const EMAIl = process.env.MAILADRESS;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, senderMail, content } = req.body;
    if (!name.trim() || !senderMail.trim() || !content.trim()) {
      return res.status(403).json({ message: 'Invalid data' });
    }
    const message = {
      from: EMAIl,
      to: EMAIl,
      subject: `New message from your portfolio -- ${name}`,
      html: `<p><b>Email:</b> ${senderMail}<br /><b>Menssagem:</b> ${content}</p>`,
      replyTo: senderMail
    };
    transporter.sendMail(message);
    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
};
