// src/superadmin/superadmin.controller.ts

import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../common/roles.decorator';
import { RolesGuard } from '../common/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('superadmin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class SuperadminController {
  @Get('panel')
  @Roles('superadmin')
  getPanel() {
    return { message: 'Welcome Superadmin Panel' };
  }
}
