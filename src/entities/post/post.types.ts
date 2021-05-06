export interface Post {
  readonly id?: number;
  readonly title: string;
  readonly body: string;
  readonly createdAt?: Date | string;
}
