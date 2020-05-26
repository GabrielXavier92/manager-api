export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};


export type Query = {
  __typename?: 'Query';
  me: Account;
  getDoctor: Doctor;
  getDoctors?: Maybe<Array<Doctor>>;
};


export type QueryGetDoctorArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  signIn: LoginUser;
  createDoctor: Doctor;
  updateDoctor: Doctor;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationSignInArgs = {
  input: LoginUserInput;
};


export type MutationCreateDoctorArgs = {
  input: DoctorInput;
};


export type MutationUpdateDoctorArgs = {
  id: Scalars['ID'];
  input: DoctorInput;
};

export type Gender = 
  | 'MASCULINO'
  | 'FEMININO';

export type Plan = 
  | 'STARTER';

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
  plan: Plan;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
  status?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  accountId: Scalars['ID'];
  status?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  roles?: Maybe<Array<Scalars['String']>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DoctorInput = {
  name: Scalars['String'];
  gender?: Maybe<Gender>;
  birth?: Maybe<Scalars['DateTime']>;
  register?: Maybe<Scalars['String']>;
};

export type Doctor = {
  __typename?: 'Doctor';
  id: Scalars['ID'];
  accountId: Scalars['ID'];
  name: Scalars['String'];
  gender?: Maybe<Gender>;
  birth?: Maybe<Scalars['DateTime']>;
  register?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

