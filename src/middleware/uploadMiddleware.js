import multer from 'multer';
import { resolve } from 'path';

const destination = (req, file, cb) => {
  file.mimetype === 'image/webp'
    ? cb(null, resolve() + '/public/Assets/Img/img-form')
    : cb(new Error('Formato de imagen inválido'));
};

const filename = (req, file, cb) => {
  cb(null, file.originalname);
};

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/webp') {
    cb(null, true);
  } else {
    cb(new Error('Formato de imagen no permitido'));
  }
};

const config = { destination, filename, fileFilter };

const storage = multer.diskStorage(config);

export const uploadMiddleware = multer({ storage });