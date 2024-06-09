import {
  IsString,
  IsNumber,
  IsPositive,
  IsInt,
  MinLength,
  IsPhoneNumber,
  IsNotEmpty,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateOrderRequest {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(1)
  @MaxLength(500)
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  @Min(1)
  quantity: number;

  @IsPhoneNumber(null)
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @IsNotEmpty()
  userId: string;
}
