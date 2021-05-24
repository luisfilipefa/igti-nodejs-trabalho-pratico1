const express = require("express");
const {
  getBrandsWithLessModels,
  getBrandsWithMoreModels,
  getModelsByBrand,
} = require("../controllers/brandsController");

const brandsRouter = express.Router();

brandsRouter.get("/maisModelos", getBrandsWithMoreModels);
brandsRouter.get("/menosModelos", getBrandsWithLessModels);
brandsRouter.get("/listaMaisModelos/:amount", getBrandsWithMoreModels);
brandsRouter.get("/listaMenosModelos/:amount", getBrandsWithLessModels);
brandsRouter.post("/listaModelos", getModelsByBrand);

module.exports = brandsRouter;
