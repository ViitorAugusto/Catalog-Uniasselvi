import server from '../../../../server.json';

export async function GET() {
  return Response.json(server.products);
}
