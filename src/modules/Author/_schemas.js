const Joi = require("joi");

const postAddauthorSchemas = {
  body: Joi.object({
    name: Joi.string().min(4).max(64).required().messages({
      "string.empty": "name kiritilishi kerak!",
      "string.min": "name uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "name uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "name kiritilishi kerak!",
    }),
    bio: Joi.string().required().messages({
      "string.empty": "bio kiritilishi kerak!",
      "any.required": "bio kiritilishi kerak!",
    }),
    image: Joi.string().required().messages({
      "string.empty": "Image kiritilishi kerak!",
      "any.required": "Image kiritilishi kerak!",
    }),
    email: Joi.string().email({ tlds: { allow: false } }),
  }),
};

const deletetauthorSchemas = {
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id. Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

const patchEditauthorSchemas = {
  body: Joi.object({
    name: Joi.string().min(4).max(64).optional().messages({
      "string.empty": "name kiritilishi kerak!",
      "string.min": "name uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "name uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "name kiritilishi kerak!",
    }),
    bio: Joi.string().optional().messages({
      "string.empty": "bio kiritilishi kerak!",
      "any.required": "bio kiritilishi kerak!",
    }),
    image: Joi.string().optional().messages({
      "string.empty": "Image kiritilishi kerak!",
      "any.required": "Image kiritilishi kerak!",
    }),
    email: Joi.string()
      .optional()
      .email({ tlds: { allow: false } }),
  }),
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id. Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

module.exports = {
  postAddauthorSchemas,
  patchEditauthorSchemas,
  deletetauthorSchemas,
};
