const config = require("../shared/config/index");
const swagger_js = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "energy sandars",
    description: "Documentation yoq",
  },
  host: `localhost:${config.port}`,
  basePath: "/",
  tags: [],
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    // admin route
    "/admin": {
      get: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: " Gets all Admin",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/register/admin": {
      post: {
        tags: ["Admin Router  "],
        summary: "Adds a new user",
        description: "Endpoint to sign in a specific user",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User information.",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/AddAdmin",
            },
          },
        ],
        responses: {
          201: {
            description: "OK",
            content: "application/json",
          },
          400: {
            description: "Bad request, invalid input.",
          },
          401: { description: "Unauthorized, invalid credentials." },
          404: {
            description: "not found",
          },
        },
      },
    },
    "/login/admin": {
      post: {
        tags: ["Admin Router  "],
        summary: "User Authentication",
        description:
          "Authenticate a user by validating their credentials and return a token if successful.",
        parameters: [
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/LoginAdmin",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/admin/{id}": {
      get: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "Gets a Admin  by Mongo ID.",
        description: "Endpoint to sigup in a specific user",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      delete: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "Delete a Admin by MongoID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      patch: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "edit  Admin  by Mongo ID.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/patchAdmin",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/admin/un/{id}": {
      delete: {
        tags: ["Admin Router  "],
        produces: ["application/json"],
        summary: "Delete a Admin by MongoID.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/change/password/admin": {
      patch: {
        tags: ["Admin Router  "],
        summary: "User Authentication",
        description:
          "Authenticate a user by validating their credentials and return a token if successful.",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            schema: {
              $ref: "#/definitions/schemas/ChangePassword",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    // user routes
    "/users": {
      get: {
        tags: ["User Route"],
        produces: ["application/json"],
        summary: " Gets all Users allow Admins",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/users/me": {
      get: {
        tags: ["User Route"],
        produces: ["application/json"],
        summary: "Tokenga tegishli bolgan userni olib beradi",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "User token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      patch: {
        tags: ["User Route"],
        produces: ["application/json"],
        summary: "user ozini ozi yangilash",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/patchUser",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/user/auth/login": {
      post: {
        tags: ["User Route"],
        produces: ["application/json"],
        summary: "User login",
        parameters: [
          {
            name: "obj",
            in: "body",
            description: "User login body.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/LoginUser",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/user/auth/register": {
      post: {
        tags: ["User Route"],
        produces: ["application/json"],
        summary: "User Register",
        parameters: [
          {
            name: "obj",
            in: "body",
            description: "User register body.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/AddUser",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/user/{id}": {
      delete: {
        tags: ["User Route"],
        produces: ["application/json"],
        summary: "User delete by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User id .",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      patch: {
        tags: ["User Route"],
        produces: ["application/json"],
        summary: "edit User by Mongo ID allow admin )",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/patchUser",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //author
    "/author": {
      get: {
        tags: ["Author Route"],
        produces: ["application/json"],
        summary: " Gets all Author allow Admins",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      post: {
        tags: ["Author Route"],
        produces: ["application/json"],
        summary: " Add Author allow Admins",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "Author create body.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/AddAuthor",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/author/{id}": {
      delete: {
        tags: ["Author Route"],
        produces: ["application/json"],
        summary: "Author delete by id allow admin",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "User id .",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      patch: {
        tags: ["Author Route"],
        produces: ["application/json"],
        summary: "edit Author by Mongo ID allow admin )",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "authorization",
            in: "header",
            description: "Auth token",
            schema: {
              type: "string",
            },
          },
          {
            name: "obj",
            in: "body",
            description: "User information.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/editAuthor",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      get: {
        tags: ["Author Route"],
        produces: ["application/json"],
        summary: " Gets all Author allow Admins",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "User id information.",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //support
    "/contact": {
      get: {
        tags: ["Contact Route"],
        produces: ["application/json"],
        summary: " Gets all Contacts allow Admins",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      post: {
        tags: ["Contact Route"],
        produces: ["application/json"],
        summary: " Add contact",
        parameters: [
          {
            name: "obj",
            in: "body",
            description: "Contact create body.",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/createContact",
            },
          },
        ],
        responses: {
          201: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/contact/{id}": {
      delete: {
        tags: ["Contact Route"],
        produces: ["application/json"],
        summary: " Delete Contacts allow Admins",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            description: "User id .",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //courses
    "/courses": {
      get: {
        tags: ["Courses Route"],
        produces: ["application/json"],
        summary: " Gets all courses allow all",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "token",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      post: {
        tags: ["Courses Route"],
        consumes: ["multipart/form-data"],
        summary: " Add Course",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "title",
            in: "formdata",
            type: "string",
            required: "true",
          },
          {
            name: "description",
            in: "formdata",
            type: "string",
            required: "true",
          },
          {
            name: "all_hour",
            in: "formdata",
            type: "string",
            required: "true",
          },
          {
            name: "author",
            in: "formdata",
            type: "string",
            required: "true",
          },
          {
            name: "price",
            in: "formdata",
            type: "string",
            required: "true",
          },
          {
            name: "price_type",
            in: "formdata",
            type: "string",
            required: "true",
            enum: ["uzs", "usd"],
          },
          {
            name: "course_start_date",
            in: "formdata",
            type: "date-time",
          },
          {
            name: "course_end_date",
            in: "formdata",
            type: "date-time",
          },
        ],
        responses: {
          201: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/courses/{id}": {
      get: {
        tags: ["Courses Route"],
        produces: ["application/json"],
        summary: " Gets courses by id allow all",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            description: "User id .",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      put: {
        tags: ["Courses Route"],
        consumes: ["multipart/form-data"],
        summary: " update Course allow admin ",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            description: "User id .",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
          {
            name: "title",
            in: "formdata",
            type: "string",
          },
          {
            name: "description",
            in: "formdata",
            type: "string",
          },
          {
            name: "all_hour",
            in: "formdata",
            type: "string",
          },
          {
            name: "author",
            in: "formdata",
            type: "string",
          },
          {
            name: "price",
            in: "formdata",
            type: "string",
          },
          {
            name: "price_type",
            in: "formdata",
            type: "string",
            enum: ["uzs", "usd"],
          },
          {
            name: "course_start_date",
            in: "formdata",
            type: "date-time",
          },
          {
            name: "course_end_date",
            in: "formdata",
            type: "date-time",
          },
        ],
        responses: {
          201: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      delete: {
        tags: ["Courses Route"],
        produces: ["application/json"],
        summary: " delete courses by id allow all",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            description: "User id .",
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //banner
    "/banner": {
      get: {
        tags: ["Banner"],
        produces: ["application/json"],
        summary: "Hamma bannerlarni olish",

        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      post: {
        tags: ["Banner"],
        summary: "banner yaratish admin uchun!",
        description: "banner yaratish admin uchun",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "Admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "title",
            in: "formData",
            type: "string",
          },
          {
            name: "description",
            in: "formData",
            type: "string",
          },
          {
            name: "image",
            in: "formData",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/banner/{id}": {
      get: {
        tags: ["Banner"],
        summary: "bannerni id boyicha topish uchun",
        description: "bannerni id boyicha topish",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "category id",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      delete: {
        tags: ["Banner"],
        summary: "bannerni delete admin uchun!",
        description: "bannerni delete admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "banner id",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
      put: {
        tags: ["Banner"],
        summary: "banner update admin uchun!",
        description: "banner update admin uchun",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "banner id",
            schema: {
              type: "integer",
              format: "int",
            },
          },
          {
            name: "title",
            in: "formData",
            type: "string",
          },
          {
            name: "description",
            in: "formData",
            type: "string",
          },
          {
            name: "image",
            in: "formData",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/banner/un/{id}": {
      delete: {
        tags: ["Banner"],
        summary: "bannerni un delete admin uchun!",
        description: "bannerni un delete admin uchun",
        parameters: [
          {
            name: "authorization",
            in: "header",
            description: "admin token",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "id",
            in: "path",
            required: true,
            description: "banner id",
            schema: {
              type: "integer",
              format: "int",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    //Upload
    "/uploads/image": {
      post: {
        tags: ["Upload"],
        summary: "Upload yaratish",
        description:
          "upload file berasiz sizga filename qaytadi uni course createda yoki ",
        consumes: ["multipart/form-data"],
        parameters: [
          {
            name: "image",
            in: "formData",
            type: "file",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
    "/uploads/{filename}": {
      get: {
        tags: ["Upload"],
        produces: ["application/json"],
        summary: "Image olish filename boyicha",
        parameters: [
          {
            name: "filename",
            in: "path",
            required: true,
            description: "file name",
            schema: {
              type: "string",
              format: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: "application/json",
          },
        },
      },
    },
  },
  definitions: {
    schemas: {
      AddAdmin: {
        type: "object",
        properties: {
          first_name: {
            type: "string",
            example: "Jhon Doe",
          },
          last_name: {
            type: "string",
            example: "Marie Doe",
          },
          image: {
            type: "string",
            example: "Jhon_Doe.png",
          },
          role: {
            type: "string",
            exsample: "admin or super_admin",
            default: "admin",
          },
          username: {
            type: "string",
            exsample: "ayubxon",
          },
          password: {
            type: "string",
            exsample: "!@#$%^&",
          },
        },
        required: ["first_name", "last_name", "image", "username", "password"],
      },
      LoginAdmin: {
        type: "object",
        properties: {
          username: {
            type: "string",
            exsample: "ayubxon",
          },
          password: {
            type: "string",
            exsample: "!@#$%^&",
          },
        },
        required: ["username", "password"],
      },
      patchAdmin: {
        type: "object",
        properties: {
          first_name: {
            type: "string",
            example: "Jhon Doe",
          },
          last_name: {
            type: "string",
            example: "Marie Doe",
          },
          image: {
            type: "string",
            example: "Jhon_Doe.png",
          },
          username: {
            type: "string",
            exsample: "ayubxon",
          },
        },
      },
      ChangePassword: {
        type: "object",
        properties: {
          current_password: {
            type: "string",
            exsample: "!@#$%^&*",
          },
          new_password: {
            type: "string",
            exsample: "*&^%$#@!",
          },
        },
        required: ["current_password", "new_password"],
      },
      //user
      LoginUser: {
        type: "object",
        properties: {
          phone_number: {
            type: "number",
            exsample: "950254407",
          },
          password: {
            type: "string",
            exsample: "!@#$%^&",
          },
        },
        required: ["username", "password"],
      },
      AddUser: {
        type: "object",
        properties: {
          phone_number: {
            type: "number",
            exsample: "950254407",
          },
          fullname: {
            type: "string",
            exsample: "name",
          },
          image: {
            type: "string",
            exsample: "image.png",
          },
          password: {
            type: "string",
            exsample: "!@#$%^&",
          },
        },
        required: ["fullname", "password", "phone_number", "image"],
      },
      patchUser: {
        type: "object",
        properties: {
          phone_number: {
            type: "number",
            exsample: "950254407",
          },
          fullname: {
            type: "string",
            exsample: "name",
          },
          image: {
            type: "string",
            exsample: "image.png",
          },
          password: {
            type: "string",
            exsample: "!@#$%^&",
          },
        },
      },
      //Author
      AddAuthor: {
        type: "object",
        properties: {
          bio: {
            type: "string",
            exsample: "name",
          },
          name: {
            type: "string",
            exsample: "name",
          },
          image: {
            type: "string",
            exsample: "image.png",
          },
          email: {
            type: "string",
            exsample: "exsample@gmail.com",
          },
        },
        required: ["name", "email", "bio", "image"],
      },
      editAuthor: {
        type: "object",
        properties: {
          name: {
            type: "string",
            exsample: "name",
          },
          image: {
            type: "string",
            exsample: "image.png",
          },
          email: {
            type: "string",
            exsample: "exsample@gmail.com",
          },
          bio: {
            type: "string",
            exsample: "name",
          },
        },
      },
      //contact
      createContact: {
        type: "object",
        properties: {
          fullname: {
            type: "string",
            exsample: "name",
          },
          tema: {
            type: "string",
            exsample: "name",
          },
          habar: {
            type: "string",
            exsample: "text",
          },
          email: {
            type: "string",
            exsample: "exsample@gmail.com",
          },
        },
        required: ["name", "email", "bio", "tema"],
      },
    },
  },
};

module.exports = swagger_js;
