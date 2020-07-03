import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const initialValue = 0;

    const incomeBalance = this.transactions
      .filter(transaction => transaction.type === 'income')
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue.value,
        initialValue,
      );

    const outcomeBalance = this.transactions
      .filter(transaction => transaction.type === 'outcome')
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue.value,
        initialValue,
      );

    const totalBalance = incomeBalance - outcomeBalance;

    return {
      income: incomeBalance,
      outcome: outcomeBalance,
      total: totalBalance,
    };
  }

  public create({ title, type, value }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, type, value });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
