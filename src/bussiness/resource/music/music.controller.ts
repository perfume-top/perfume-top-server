import { Get, Controller, Param, HttpException, HttpStatus, UsePipes, UseGuards, Body, UseInterceptors } from '@nestjs/common';
import { Music } from '../../../entities/resource/music.entity';
import { MusicService } from './music.service';
// import { ParamPipe } from '../../../pipe/param.pipe';
// import { AuthGuard } from '../../../guard/auth.guard';
// import { Role } from 'src/guard/role.decorator';
// import { LoggingInterceptor } from 'src/guard/logging.interceptor';

@Controller('music')
// @Role('admin')
// @UseInterceptors(LoggingInterceptor)
export class MusicController {

    constructor(private readonly musicService: MusicService) {}

    @Get()
    async root(): Promise<string> {
        console.log('list');
        return this.musicService.list();
    }

    @Get('error')
    async err(): Promise<string> {
        throw new HttpException('just test', HttpStatus.FORBIDDEN);
        return 'error test';
    }

    @Get('create')
    async create(): Promise<string> {
        return this.musicService.create();
    }

    @Get('id/:id')
    // @UseGuards(AuthGuard)
    // @UsePipes(new ParamPipe('123'))
    async findOne(@Param() params, @Body() body): Promise<Music> {
        return this.musicService.findOne(params.id);
    }
}
