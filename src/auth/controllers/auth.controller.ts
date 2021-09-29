import { Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { User } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  login(@Req() req: Request) {
    const user = <User>req.user;
    return this.authService.generateJWT(user);
  }

  @UseGuards(AuthGuard('basic'))
  @Post('login2')
  @HttpCode(200)
  login2(@Req() req: Request) {
    const user = <User>req.user;
    return { message: 'Ok' };
  }
}
