import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form, FormDocument } from './form.schema';

@Injectable()
export class FormService {
  constructor(@InjectModel(Form.name) private form: Model<FormDocument>) {}

  save(name: string) {
    return this.form.create({ name });
  }

  getSingle() {}

  getList() {
    return this.form.find();
  }

  updateSingle() {}

  deleteSingle() {}
}
