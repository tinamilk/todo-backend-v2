import { PipeTransform } from '@nestjs/common';
export declare class IsUniquePipe implements PipeTransform<string> {
    transform(value: string): Promise<string>;
}
