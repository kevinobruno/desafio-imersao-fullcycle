import { IsISO8601, IsString, IsIn, IsNotEmpty, MaxLength } from 'class-validator';
import { TransactionCategory, TransactionCategoryList, TransactionType, TransactionTypeList } from '../entities/transaction.entity';

export class CreateTransactionDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  description: string;
  
  @IsISO8601()
  @IsNotEmpty()
  payment_date: Date;
  
  @IsIn(TransactionCategoryList)
  @IsNotEmpty()
  category: TransactionCategory;

  @IsNotEmpty()
  amount: number;
  
  @IsIn(TransactionTypeList)
  @IsNotEmpty()
  type: TransactionType;
}
