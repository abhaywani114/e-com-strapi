// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {searchProduct, withBaseUrl} from "../../../service/strapi"

export default async function handler(req, res) {
  const {data} = await searchProduct(req.query.query);
  res.status(200).json( [...data])
}
