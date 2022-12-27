import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema as MongooseSchema, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FormDocument = Form & Document;

@Schema({ timestamps: true })
@ObjectType()
export class Form {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Form Name' })
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

export const FormSchema = SchemaFactory.createForClass(Form);
