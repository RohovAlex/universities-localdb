import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UniversityModule } from './university/university.module';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql'
  }),
    UniversityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
