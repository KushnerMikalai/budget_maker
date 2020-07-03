import { SmtpClient } from '../../deps.ts';
import { config } from '../config/config.ts';

const connectConfig: any = {
  hostname: 'smtp.gmail.com',
  port: 465,
  username: config.SEND_EMAIL,
  password: config.pwdEmail,
};

export const sendEmail = async (to: string, subject: string, content: string) => {
  const client = new SmtpClient();
  console.log(connectConfig);
  await client.connectTLS(connectConfig);

  await client.send({
    from: config.SEND_EMAIL,
    to,
    subject,
    content,
  });

  await client.close();
}