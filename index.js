const express = require("express");
const config = require("./src/shared/config");
const cors = require("cors");
const db = require("./src/db");
const path = require("path");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./src/swagger/swagger-output");
const handleError = require("./src/shared/errors/handle");

app.use(cors());
app.use(express.json());

const adminRoute = require("./src/modules/admin/_api");
const userRoute = require("./src/modules/User/_apis");
const uploadRoute = require("./src/modules/uloads/_api");
const AuhtorRoute = require("./src/modules/Author/_api");
const CourseRoute = require("./src/modules/Courses/_api");
const BannerRoute = require("./src/modules/banner/_api");
const ContactRoute = require("./src/modules/Contacts/_api");
const TeamRoute = require("./src/modules/team/_api");
const QuestionRoute = require("./src/modules/question/_api");
const CategoryRoute = require("./src/modules/Category/_api");
const ProjectRoute = require("./src/modules/Project/_api");

app.use(adminRoute);
app.use(userRoute);
app.use(uploadRoute);
app.use(AuhtorRoute);
app.use(CourseRoute);
app.use(BannerRoute);
app.use(ContactRoute);
app.use(TeamRoute);
app.use(QuestionRoute);
app.use(CategoryRoute);
app.use(ProjectRoute);

app.get("/uploads/:filename", (req, res) => {
  res.sendFile(process.cwd() + `/uploads/${req.params.filename}`);
});

db();

app.use(handleError);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(config?.port, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT:${config.port}`);
});
