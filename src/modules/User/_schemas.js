const Joi = require("joi");

const postAddUserSchemas = {
  body: Joi.object({
    fullname: Joi.string().min(4).max(64).required().messages({
      "string.empty": "Firstname kiritilishi kerak!",
      "string.min": "Firstname uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "Firstname uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Firstname kiritilishi kerak!",
    }),
    phone_number: Joi.number().required().messages({
      "number.empty": "phone_number kiritilishi kerak!",
      "any.required": "phone_number kiritilishi kerak!",
    }),
    image: Joi.string().required().messages({
      "string.empty": "Image kiritilishi kerak!",
      "any.required": "Image kiritilishi kerak!",
    }),
    password: Joi.string().min(6).max(64).required().messages({
      "string.empty": "Password kiritilishi kerak!",
      "string.min": "Password uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Password uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Password kiritilishi kerak!",
    }),
  }),
};

const postLoginUserSchemas = {
  body: Joi.object({
    phone_number: Joi.number().required().messages({
      "number.empty": "phone_number kiritilishi kerak!",
      "any.required": "phone_number kiritilishi kerak!",
    }),
    password: Joi.string().min(6).max(64).required().messages({
      "string.empty": "Password kiritilishi kerak!",
      "string.min": "Password uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Password uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Password kiritilishi kerak!",
    }),
  }),
};

const getShowUserSchemas = {
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id. Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

const deletetUserSchemas = {
  params: Joi.object({
    id: Joi.string().required().length(24).message({
      "string.empty": "Id kiritilishi kerak!",
      "string.length": "Id. Xato kiritilgan!",
      "any.required": "Id kiritilishi kerak!",
    }),
  }),
};

const patchEditUserSchemas = {
  body: Joi.object({
    fullname: Joi.string().min(4).max(64).optional().messages({
      "string.empty": "Firstname kiritilishi kerak!",
      "string.min": "Firstname uzunligi 4 tadan ko'p bolishi kerak!",
      "string.max": "Firstname uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Firstname kiritilishi kerak!",
    }),
    phone_number: Joi.number().optional().messages({
      "number.empty": "phone_number kiritilishi kerak!",
      "number.min": "phone_number uzunligi 9 tadan ko'p bolishi kerak!",
      "number.max": "phone_number uzunligi 9 tadan kam bolishi kerak!",
      "any.required": "phone_number kiritilishi kerak!",
    }),
    image: Joi.string().optional().messages({
      "string.empty": "Image kiritilishi kerak!",
      "any.required": "Image kiritilishi kerak!",
    }),
    password: Joi.string().min(6).max(64).optional().messages({
      "string.empty": "Password kiritilishi kerak!",
      "string.min": "Password uzunligi 6 tadan ko'p bolishi kerak!",
      "string.max": "Password uzunligi 64 tadan kam bolishi kerak!",
      "any.required": "Password kiritilishi kerak!",
    }),
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
  postAddUserSchemas,
  postLoginUserSchemas,
  patchEditUserSchemas,
  getShowUserSchemas,
  deletetUserSchemas,
};
