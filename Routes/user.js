// const express = require('express');
// const app = express();
// const userController = require('../Controllers/user');
// const multer = require('multer');
// const middleware = require("../Middleware/middleware");

// const diskStorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, `${__dirname}/public`)
//     },
//     filename: function (req, file, cb) {
//       const ext = file.mimetype.split("/")[1];
//       cb(null, `/public-${file.fieldname}-${Date.now()}.${ext}`);
//     }
//   })

//  const upload = multer({
//       storage:diskStorage
//   })

// app.use(express.json());

// app.post('/user', userController.createUser);
// app.get('/user', userController.getAllUser)
// app.post('/sendEmail', middleware.isValidToken, userController.sendEmail);
// app.post('/saveImage', upload.single('file'),userController.saveImage);

// app.post('/signUp', userController.signUp);
// app.post('/signIn', userController.signIn);


// module.exports = app;



const express = require('express');
const app = express();
const userController = require('../Controllers/user');
app.use(express.json());

app.post('/book', userController.createUser);
app.get('/books', userController.getAllUsers)
app.delete('/book/:userId', userController.deleteUser);

app.post('/signUp', userController.signUp);
app.post('/signIn', userController.signIn);

module.exports = app;












