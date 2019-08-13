import { Controller, Get, Post, Request, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { v1 } from 'uuid';
import { UploadService } from './upload.service';
import { getExtname } from '../../util/file';
import { config } from 'src/config.service';

@Controller('api/upload')
export class UploadController {

    constructor(private service: UploadService){ }
    @Post('temp')
    @UseInterceptors(FileInterceptor('file', {
        limits: { fileSize: 1024 * 1024 * 5 },
        storage: diskStorage({
            destination: (req, file, cb) => {
                cb(null, config.uploadTempFolder);
            },
            filename(req, file, cb) {
                cb(null, v1() + getExtname(file));
            },
        })
    }))
    async revieveTemp(@UploadedFile() file) {
        return {
            statusCode: 200,
            data: { src: this.service.getTempFilePath(file) }
        };
    }








    @Get()
    test() {
        return `<form action="/api/upload/temp" method="post" enctype="multipart/form-data">
        <input type="file" name="file" />
        <input type="submit"/>
      </form>`;
    }
}