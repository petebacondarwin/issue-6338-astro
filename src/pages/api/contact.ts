export async function GET({ request }) {
  const url = new URL(request.url);
  const res = new Response(`GET request to ${url.pathname}`);
  res.headers.set("Content-Type", "text/plain");
  return res;
}

export async function POST({ request }) {
  const url = new URL(request.url);
  const res = new Response(`POST request to ${url.pathname}`);
  res.headers.set("Content-Type", "text/plain");
  return res;
}
