import { createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator((data, context) => {
  const request = context.switchToHttp().getRequest();
  if(data) {
    return request.user[data]
  }
  return request.user
});
