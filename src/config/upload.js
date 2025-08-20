// Arquivo: src/config/upload.js

import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { S3Client } from '@aws-sdk/client-s3'; 
import multerS3 from 'multer-s3';


const s3 = new S3Client({
  region: process.env.AWS_DEFAULT_REGION,
});

const uploadConfig = {
  storage: multerS3({
    s3: s3, 
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) return cb(err);
        const fileName = `${hash.toString('hex')}-${file.originalname.replace(/ /g, '_')}`;
        cb(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024, 
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo inválido.'));
    }
  },
};

export default uploadConfig;