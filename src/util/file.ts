import { extname } from 'path';

export function getExtname(formFile: any) {
    let ext = extname(formFile.originalname);
    if (ext === ''){
        switch(formFile.mimetype) {
            case 'image/jpeg':
                return '.jpg';
            case 'image/jpg':
                return '.jpg';
            case 'image/png':
                return '.png';
            case 'image/gif':
                return '.gif';
            default:
                return '';
        }
    }
    if (ext === ".jpeg") {
        return '.jpg';
    }
    return ext;
}
/**
    { fieldname: 'file',
  originalname: '4decf4ba387c2 (1).jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: './upload2',
  filename: '8106f3d7b47ff94140ba79279b02efed',
  path: 'upload2/8106f3d7b47ff94140ba79279b02efed',
  size: 20503 }

{ fieldname: 'file',
  originalname: 'new',
  encoding: '7bit',
  mimetype: 'image/png' }
*/