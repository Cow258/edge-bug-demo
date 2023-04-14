// Next.js API route support:  https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
  regions: ["sin1"],
};

export default function handler(req: NextRequest) {
  const reqHeaders = {} as { [x: string]: string };
  req.headers.forEach((v, k) => {
    reqHeaders[k] = v;
  });
  console.log("request headers > ", JSON.stringify(reqHeaders, null, 2));
  return new Response(JSON.stringify({ hello: "world" }), {
    headers: { "content-type": "application/json" },
  });
}
