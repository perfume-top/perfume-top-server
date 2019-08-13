import { Module, } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadService } from './upload.service';

@Module({
    imports: [
        // MulterModule.register({
        //     dest: '/public',
        //     fileFilter: (req, file, cb) => {
        //         let extension = (file.originalname.split('.').pop())
        //         //Put here your custom validation for file extensións.
        //         // To accept the file pass `true`, like so:
        //         cb(null, true);
        //         // To reject this file pass `false` or throw Exception, like so:
        //         //cb(new HttpException ("File format is not valid", HttpStatus.BAD_REQUEST), false)
        //     },
        //     limits: {
        //         fileSize: 1024 * 1024 * 5 //2 Megabytes
        //     },
        //     storage: diskStorage({
        //         destination(req, file, cb) {
        //             cb(null, './public');
        //         },
        //         filename(req, file, cb) {
        //             cb(null, "usman_" + file.originalname);
        //         },
        //     })
        // })
    ],
    controllers: [UploadController],
    providers: [UploadService]
})
export class UploadModule {}
