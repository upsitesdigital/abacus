// pages/api/proposalData.js

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { EmailBody } from './../../pages/contact-us';

const sendEmail = async ({
  name,
  emails,
  text,
}: {
  name: string;
  emails: string[];
  text: string;
}): Promise<any> => {
  try {
    const transporter = nodemailer.createTransport({
      port: 2525,
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      secure: false,
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.MAIL_FROM,
      to: 'mauro@abacus-adv.com',
      subject: 'Abacus Contact - ' + name,
      html: text,
    };

    await transporter.sendMail(mailOptions);
    return { msg: 'Proposal send', code: 200 };
  } catch (error) {
    console.error('Failed to send Proposal:', error);
    return { msg: 'Failed to send Proposal', code: 500 };
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const requestData = (await req.body) as EmailBody;

    console.log('requestData', requestData);

    const htmlContent = `
      <html>
        <body>
          <h1>Abacus Contact</h1>
          <p><strong>Name:</strong> ${requestData.firstName} ${requestData.lastName}</p>
          <p><strong>Email:</strong>${requestData.email}</p>
          <p><strong>Phone:</strong>${requestData.phone}</p>
          <p><strong>Message:</strong>${requestData.message}</p>
        </body>
      </html>
    `;

    try {
      if (requestData.email) {
        await sendEmail({
          emails: [requestData.email],
          text: htmlContent,
          name: requestData.firstName,
        });
        return res.status(200).json({ code: 200, msg: 'successfully' });
      } else {
        return res.status(300).json({ code: 500, msg: 'error' });
      }
    } catch (error) {
      return res.status(500).json({ code: 500, msg: 'error' });
    }
  }
}
