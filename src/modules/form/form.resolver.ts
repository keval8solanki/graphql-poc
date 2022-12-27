import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Form } from './form.schema';
import { FormService } from './form.service';

@Resolver(() => Form)
export class FormResolver {
  constructor(private readonly formService: FormService) {}

  @Query(() => Form)
  getForm() {
    return {
      _id: 'formid',
      name: 'Tst form',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  @Query(() => [Form])
  getFormList() {
    return this.formService.getList();
  }

  @Mutation(() => Form)
  saveForm(@Args('name') name: string) {
    return this.formService.save(name);
  }

  @Mutation(() => Form)
  updateForm() {}

  @Mutation(() => Form)
  deleteForm() {}
}
