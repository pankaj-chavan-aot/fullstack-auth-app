// import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import { extname } from 'path';
// import { Express } from 'express';

// @Controller('upload')
// export class UploadController {
//   @Post()
//   @UseInterceptors(
//     FileInterceptor('file', {
//       storage: diskStorage({
//         destination: './uploads', // folder where file will be saved
//         filename: (req, file, callback) => {
//           const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//           const ext = extname(file.originalname);
//           callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
//         },
//       }),
//     }),
//   )
//   uploadFile(@UploadedFile() file: Express.Multer.File) {
//     return {
//       message: 'File uploaded successfully',
//       filename: file.filename,
//       originalname: file.originalname,
//     };
//   }
// }

import { BadRequestException, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File not uploaded');
    }

    return {
      message: 'File uploaded successfully',
      filename: file.filename,
      originalname: file.originalname,
    };
  }
}
