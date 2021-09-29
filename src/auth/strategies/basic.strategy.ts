import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy, 'basic') {
  constructor(private readonly configService: ConfigService) {
    super();
  }

  validate(username: string, password: string) {
    if ('openpayclient' === username && '123456' === password) {
      return true;
    }
    throw new UnauthorizedException();
  }
}
