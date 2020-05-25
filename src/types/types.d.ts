export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};


export type Query = {
  __typename?: 'Query';
  me?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount?: Maybe<Account>;
  sigIn?: Maybe<User>;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationSigInArgs = {
  input?: Maybe<LoginUserInput>;
};

export enum Gender {
  Masculino = 'MASCULINO',
  Feminino = 'FEMININO'
}

export enum Plan {
  Masculino = 'MASCULINO',
  Feminino = 'FEMININO'
}

export type CreateAccountInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  plan?: Maybe<Plan>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUser = {
  __typename?: 'LoginUser';
  token: Scalars['String'];
  user: User;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  plan?: Maybe<Plan>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
  status?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  status?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  roles?: Maybe<Array<Scalars['String']>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};
