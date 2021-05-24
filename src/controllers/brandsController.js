const fs = require("fs");

const file = JSON.parse(fs.readFileSync("car-list.json", "utf-8"));

const list = file;

const getBrandsWithMoreModels = (req, res) => {
  const orderedList = list.sort((a, b) => {
    if (b.models.length === a.models.length) {
      return a.brand.localeCompare(b.brand);
    }
    return b.models.length - a.models.length;
  });

  const finalList = orderedList.map((brand) => {
    return `${brand.brand} - ${brand.models.length}`;
  });

  if (!req.params.amount) {
    req.params.amount = finalList.length;
  }

  return res.json(finalList.splice(0, req.params.amount));
};

const getBrandsWithLessModels = (req, res) => {
  const orderedList = list.sort((a, b) => {
    if (a.models.length === b.models.length) {
      return a.brand.localeCompare(b.brand);
    }
    return a.models.length - b.models.length;
  });

  const finalList = orderedList.map((brand) => {
    return `${brand.brand} - ${brand.models.length}`;
  });

  if (!req.params.amount) {
    req.params.amount = finalList.length;
  }

  return res.json(finalList.splice(0, req.params.amount));
};

const getModelsByBrand = (req, res) => {
  const filteredList = list.find(
    (item) => item.brand.toLowerCase() === req.body.nomeMarca.toLowerCase()
  );

  if (!filteredList) {
    return res.json([]);
  }

  return res.json(filteredList);
};

module.exports = {
  getBrandsWithMoreModels,
  getBrandsWithLessModels,
  getModelsByBrand,
};
