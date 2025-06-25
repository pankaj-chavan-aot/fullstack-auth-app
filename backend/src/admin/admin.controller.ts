import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/common/roles.guard';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard) // You can use globally or per controller
export class AdminController {
  @Get('dashboard')
  @Roles('admin', 'superadmin') // 🔐 Only accessible to admin/superadmin
  getAdminDashboard() {
    return { message: 'Welcome to the Admin Dashboard!' };
  }
}
