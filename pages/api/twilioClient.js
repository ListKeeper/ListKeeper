const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({});
    return;
  }
  const body = JSON.parse(req.body);
  await client.messages.create({
    body: body.message,
    from: process.env.TWILIO_FROM,
    to: body.phoneNumber,
  });
  res.status(200).json({});
};
