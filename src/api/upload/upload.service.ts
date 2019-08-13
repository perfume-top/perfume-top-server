import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config.service';
import { resolve } from 'path';

@Injectable()
export class UploadService {
    constructor(private config: ConfigService) {

    }
    getTempFilePath(tempFile: any) {

        return resolve(
            this.config.STATIC_PREFIX,
            this.config.TEMP_FLODER,
            tempFile.filename
        );
    }
}

//     { fieldname: 'file',
//   originalname: '4decf4ba387c2 (1).jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: './upload2',
//   filename: '8106f3d7b47ff94140ba79279b02efed',
//   path: 'upload2/8106f3d7b47ff94140ba79279b02efed',
//   size: 20503 }
