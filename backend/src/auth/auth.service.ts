import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(dto: SignupDto) {
    const existingUser = await this.usersService.findByEmail(dto.email);
    if (existingUser) throw new BadRequestException('User already exists');

    const hashed = await bcrypt.hash(dto.password, 10);

    const roleId = dto.roleId ?? 3; // default to 'user'
    const role = await this.usersService.getRoleById(roleId);
    if (!role) throw new BadRequestException('Invalid role');

    const user = await this.usersService.createUser(dto.email, hashed, role);
    return { message: 'User created', user };
  }

  async signin(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
      console.log('User:', user);
  console.log('DB Password:', user?.password);
  console.log('Provided Password:', password);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const match = await bcrypt.compare(password, user.password);
      console.log('Password match:', match);
    if (!match) throw new UnauthorizedException('Invalid credentials');

    const token = this.jwtService.sign({
        id: user.id,
      email: user.email,
      role: user.role.name,
    });

    return {
        message: 'Signed in',
        token,
       };
    }
}
