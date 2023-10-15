import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "@prisma/client";

import { UpdateUserRequestDTO } from "./dto/request";
import { UpdateUseResponseDTO } from "./dto/response";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async updateUser (
        userId: number,
        data: UpdateUserRequestDTO,
        currentUser: User
    ): Promise<UpdateUseResponseDTO> {

        const user = this.prisma.user.findFirst({
            where: {
                id:  userId
            }
        })

        if(!user) {
            throw new NotFoundException("User not found")
        }

        await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                ...data
            }
        })

        return {
            data: true,
        }

    }
}