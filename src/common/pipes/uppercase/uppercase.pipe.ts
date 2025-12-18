// import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

// @Injectable()
// export class UppercasePipe implements PipeTransform {
//   transform(value: any, metadata: ArgumentMetadata) {
//     return value;
//   }
// }

import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    const { type } = metadata;

    // Only transform route params or query strings
    // if (type !== 'param' && type !== 'query') {
    //   return value;
    // }

    if (typeof value !== 'string') {
      return value;
    }

    return value.toUpperCase();
  }
}
