// src/superadmin/superadmin.module.ts

import { Module } from '@nestjs/common';
import { SuperadminController } from './superadmin.controller';
import { APP_GUARD } from '@nestjs/core';
import { Roles } from '../common/roles.decorator';
import { RolesGuard } from '../common/roles.guard';
@Module({
  controllers: [SuperadminController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class SuperadminModule {}
