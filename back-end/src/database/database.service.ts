// noinspection JSUnusedGlobalSymbols

import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from "@prisma/client";

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async  onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

    async enableShutDownHooks(app: INestApplication ) {
        this.$on('beforeExit' as unknown as Parameters<PrismaClient['$on']>[0], async () => {
            await app.close();
        });
    }
}
