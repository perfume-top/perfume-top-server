import { ArgumentMetadata, Injectable, PipeTransform, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ParamPipe implements PipeTransform {
  constructor(private id: string) {}
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('pipe', value, metadata);
    if (value.id === this.id) {
      // throw new HttpException('Validation failed', HttpStatus.CONFLICT);
      return {id: 1};
    }
    return value;
  }
}
