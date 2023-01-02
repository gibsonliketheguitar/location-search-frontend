// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { T_LocationCard } from "pages/Location/Card/card";

type Data = {
  data?: T_LocationCard[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { location, keyword } = req.query;

    const URL = process.env.GOOGLE_PLACE_SEARCH_BASEURL;
    const Query = `?location=${location}&radius=50000&keyword=${keyword}&language=en&key=${process.env.GOOGLE_API_KEY}`;

    const response = await fetch(URL + Query);
    const { results } = await response.json();

    const data = results.map((ele: any) => ({
      name: ele.name || "",
      address: ele.vicinity || "",
      rating: ele.rating || -1,
    }));

    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: [], error: "Something went wrong" });
  }
}
