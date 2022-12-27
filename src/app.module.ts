import { ResponseModule } from './modules/response/response.module';
import { FormModule } from './modules/form/form.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('<MONGO_URI>', {
      dbName: 'graphql-poc',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    ResponseModule,
    FormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
