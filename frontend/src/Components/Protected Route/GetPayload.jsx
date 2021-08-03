export default function ParseToken(token) {
  var payload = token.split(".")[1];
  payload = payload.replace("-", "+").replace("_", "/");
  return JSON.parse(Buffer.from(payload, "base64").toString());
}
