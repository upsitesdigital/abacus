// pages/api/proposalData.js

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { EmailBody } from './../../pages/contact-us';

const sendEmail = async ({
  name,
  text,
}: {
  name: string;
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
      disableFileAccess: true,
      disableUrlAccess: true,
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

const htmlEntities: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeHtml = (value: unknown) =>
  String(value ?? '').replace(
    /[&<>"']/g,
    (character) => htmlEntities[character],
  );

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const requestData = (await req.body) as EmailBody;

    const htmlContent = `
      <html>
        <body>
          <h1>Abacus Contact</h1>
          <p><strong>Name:</strong> ${escapeHtml(requestData.firstName)} ${escapeHtml(requestData.lastName)}</p>
          <p><strong>Email:</strong>${escapeHtml(requestData.email)}</p>
          <p><strong>Phone:</strong>${escapeHtml(requestData.phone)}</p>
          <p><strong>Message:</strong>${escapeHtml(requestData.message)}</p>
        </body>
      </html>
    `;

    try {
      if (requestData.email) {
        await sendEmail({
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
