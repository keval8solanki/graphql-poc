import { FormService } from './form.service';

import { Module } from '@nestjs/common';
import { FormResolver } from './form.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Form, FormSchema } from './form.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]),
  ],
  controllers: [],
  providers: [FormResolver, FormService],
})
export class FormModule {}
