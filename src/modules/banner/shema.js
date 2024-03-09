const Joi = require("joi");

const AddBannerSchemas = {
  body: Joi.object({
    title: Joi.string().min(4).max(64).required().messages({
      "string.empty": "title kiritilishi kerak!",
      "string.min": "title uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "title uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "title kiritilishi kerak!",
    }),
    description: Joi.string().min(1).max(1000).required().messages({
      "string.empty": "description kiritilishi kerak!",
      "string.min": "description uzunligi 1tadan ta bolishi kerak!",
      "string.max": "description uzunligi 1000 ta bolishi kerak!",
      "any.required": "description kiritilishi kerak!",
    }),
    image: Joi.string().optional().messages({
      "string.empty": "Image kiritilishi kerak!",
      "any.required": "Image kiritilishi kerak!",
    }),
  }),
};

const UpdateBannerSchema = {
  body: Joi.object({
    title: Joi.string().min(4).max(64).optional().messages({
      "string.empty": "title kiritilishi kerak!",
      "string.min": "title uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "title uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "title kiritilishi kerak!",
    }),
    description: Joi.string().min(1).optional().messages({
      "string.empty": "description kiritilishi kerak!",
      "string.min": "description uzunligi 200 ta bolishi kerak!",
      "any.required": "description kiritilishi kerak!",
    }),
    image: Joi.string().optional().messages({
      "string.empty": "Image kiritilishi kerak!",
      "any.required": "Image kiritilishi kerak!",
    }),
  }),
};

module.exports = { AddBannerSchemas, UpdateBannerSchema };
