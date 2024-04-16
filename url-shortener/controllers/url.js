const shortid = require("short-unique-id");
const URL = require("../models/url");

const handleGenerateShortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const { shortId } = new ShortUniqueId({ length: 8 });

  await URL.create({
    shortId: shortId,
    resdirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
};

module.export = {
  handleGenerateShortUrl,
};
