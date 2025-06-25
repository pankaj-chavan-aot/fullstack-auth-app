import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';
import { Role } from '../roles/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Role) private roleRepo: Repository<Role>,
  ) {}

  async findByEmail(email: string) {
    return this.userRepo.findOne({
      where: { email },
      relations: ['role'],
    });
  }

  async getRoleById(id: number) {
    return this.roleRepo.findOne({ where: { id } });
  }

  async createUser(email: string, password: string, role: Role) {
    const user = this.userRepo.create({ email, password, role });
    return this.userRepo.save(user);
  }
}
