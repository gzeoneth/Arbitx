export default async function handler(req, res) {
  const r = await fetch(process.env.RPC_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  })
  return res.status(r.status).send(await r.json());
}