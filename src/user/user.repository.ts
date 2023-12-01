import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@app/prisma';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  // Create
  async createUser(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data });
  }

  // Read
  async getUserById(id: number) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  // Update
  async updateUser(id: number, data: Prisma.UserUpdateInput) {
    return this.prismaService.user.update({ where: { id }, data });
  }

  // Delete
  async deleteUser(id: number) {
    return this.prismaService.user.delete({ where: { id } });
  }
}
