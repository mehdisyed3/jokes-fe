import { NextRequest } from "next/server";

const DEEPL_KEY = process.env.DEEPL_API_KEY

export async function POST(req: NextRequest) {
  const request = await req.json();

  const { text, target_lang } = request;

  const response = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${DEEPL_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, target_lang }),
  })

  const data = await response.json();
  // console.log(data);

  return Response.json(data);
}