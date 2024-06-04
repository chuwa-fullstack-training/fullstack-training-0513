const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const { query1, query2 } = req.query;
  try {
    const fetchQueries = [
      fetch(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`),
      fetch(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`),
    ];
    const result = await Promise.allSettled(fetchQueries);

    const fulfilledRestult = [];
    result.map((item) => {
      if (item.status === "fulfilled") fulfilledRestult.push(item.value);
    });

    const data = await Promise.all(fulfilledRestult.map((item) => item.json()));

    res.status(200).json({
      [query1]: {
        created_at: data["0"].hits["0"].created_at,
        title: data["0"].hits["0"].title,
      },
      [query2]: {
        created_at: data["1"].hits["0"].created_at,
        title: data["1"].hits["0"].title,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

module.exports = router;
