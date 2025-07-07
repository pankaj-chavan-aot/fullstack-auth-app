// import { SetMetadata } from '@nestjs/common';

// // 'isPublic' नावाचं metadata सेट करतं
// export const Public = () => SetMetadata('isPublic', true);
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
