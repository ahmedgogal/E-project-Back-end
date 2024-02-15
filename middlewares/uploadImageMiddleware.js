const multer = require('multer');
const ApiError = require('../utils/apiError');

const multerOptions = () => {

<<<<<<< HEAD
  const multerStorage = multer.memoryStorage();

  const multerFilter = function (req, file, cb) {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new ApiError('Only Images allowed', 400), false);
    }
  };

  const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

  return upload;
=======
    const multerStorage = multer.memoryStorage();

    const multerFilter = function (req, file, cb) {
        if (file.mimetype.startsWith('image')) {
            cb(null, true);
        } else {
            cb(new ApiError('Only Images allowed', 400), false);
        }
    };

    const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

    return upload;
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
};

exports.uploadSingleImage = (fieldName) => multerOptions().single(fieldName);

exports.uploadMixOfImages = (arrayOfFields) =>
<<<<<<< HEAD
  multerOptions().fields(arrayOfFields);
=======
    multerOptions().fields(arrayOfFields);
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
