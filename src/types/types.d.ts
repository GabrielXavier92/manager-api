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
  user: User;
  doctor: Doctor;
  doctors?: Maybe<Array<Doctor>>;
  guide: Guide;
  guides?: Maybe<Array<Guide>>;
  patient: Patient;
  patients?: Maybe<GetPatients>;
  procedureTable: ProcedureTable;
  procedureTables?: Maybe<Array<ProcedureTable>>;
  procedures?: Maybe<GetProcedures>;
  procedure?: Maybe<Procedure>;
  specialty: Specialty;
  specialties?: Maybe<Array<Specialty>>;
  schedule?: Maybe<Schedule>;
  schedules?: Maybe<Array<Maybe<Schedule>>>;
};


export type QueryDoctorArgs = {
  id: Scalars['ID'];
};


export type QueryGuideArgs = {
  id: Scalars['ID'];
};


export type QueryPatientArgs = {
  id: Scalars['ID'];
};


export type QueryPatientsArgs = {
  take?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['String']>;
};


export type QueryProcedureTableArgs = {
  id: Scalars['ID'];
};


export type QueryProceduresArgs = {
  procedureTableId: Scalars['ID'];
  take?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['ID']>;
  filter?: Maybe<Scalars['String']>;
};


export type QueryProcedureArgs = {
  id: Scalars['ID'];
};


export type QuerySpecialtyArgs = {
  id: Scalars['ID'];
};


export type QueryScheduleArgs = {
  id: Scalars['ID'];
};


export type QuerySchedulesArgs = {
  start: Scalars['String'];
  end: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  signIn: LoginUser;
  createDoctor: Doctor;
  updateDoctor: Doctor;
  createGuide: Guide;
  updateGuides: Guide;
  createPatient: Patient;
  updatePatient: Patient;
  createProcedureTable: ProcedureTable;
  updateProcedureTable: ProcedureTable;
  createProcedure: Procedure;
  updateProcedure: Procedure;
  createSpecialty: Specialty;
  updateSpecialty: Specialty;
  createSchedule?: Maybe<Schedule>;
  updateSchedule?: Maybe<Schedule>;
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


export type MutationCreateGuideArgs = {
  input: GuideInput;
};


export type MutationUpdateGuidesArgs = {
  id: Scalars['ID'];
  input: GuideInput;
};


export type MutationCreatePatientArgs = {
  input: PatientInput;
};


export type MutationUpdatePatientArgs = {
  id: Scalars['ID'];
  input: PatientInput;
};


export type MutationCreateProcedureTableArgs = {
  input: ProcedureTableInput;
};


export type MutationUpdateProcedureTableArgs = {
  id: Scalars['ID'];
  input: ProcedureTableInput;
};


export type MutationCreateProcedureArgs = {
  input: ProcedureInput;
};


export type MutationUpdateProcedureArgs = {
  id: Scalars['ID'];
  input?: Maybe<ProcedureInput>;
};


export type MutationCreateSpecialtyArgs = {
  input: SpecialtyInput;
};


export type MutationUpdateSpecialtyArgs = {
  id: Scalars['ID'];
  input?: Maybe<SpecialtyInput>;
};


export type MutationCreateScheduleArgs = {
  input: ScheduleInput;
};


export type MutationUpdateScheduleArgs = {
  id: Scalars['ID'];
  input: ScheduleInput;
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
  roles?: Maybe<Array<Role>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  role: Scalars['String'];
};

export type DoctorInput = {
  name: Scalars['String'];
  gender?: Maybe<Gender>;
  birth?: Maybe<Scalars['String']>;
  register?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  specialties?: Maybe<Array<Maybe<Specialties>>>;
};

export type Specialties = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Doctor = {
  __typename?: 'Doctor';
  id: Scalars['ID'];
  name: Scalars['String'];
  gender?: Maybe<Gender>;
  birth?: Maybe<Scalars['String']>;
  register?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  specialties?: Maybe<Array<Maybe<Specialty>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  guides?: Maybe<Array<Maybe<Guide>>>;
};

export type Specialty = {
  __typename?: 'Specialty';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GuideInput = {
  description: Scalars['String'];
  patientId: Scalars['ID'];
  doctorId: Scalars['ID'];
};

export type Guide = {
  __typename?: 'Guide';
  id: Scalars['ID'];
  description: Scalars['String'];
  doctor?: Maybe<Doctor>;
  patient?: Maybe<Patient>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Patient = {
  __typename?: 'Patient';
  guides?: Maybe<Array<Maybe<Guide>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  gender?: Maybe<Gender>;
  birth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PatientInput = {
  name: Scalars['String'];
  birth?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  complement?: Maybe<Scalars['String']>;
};

export type QueryInfo = {
  __typename?: 'QueryInfo';
  ammount?: Maybe<Scalars['Int']>;
};

export type GetPatients = {
  __typename?: 'GetPatients';
  queryInfo?: Maybe<QueryInfo>;
  patients?: Maybe<Array<Maybe<Patient>>>;
};

export type ProcedureTableInput = {
  name: Scalars['String'];
};

export type ProcedureInput = {
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  specialtyId: Scalars['ID'];
  procedureTableId: Scalars['ID'];
};

export type SpecialtyInput = {
  name: Scalars['String'];
};

export type ProcedureTable = {
  __typename?: 'ProcedureTable';
  id: Scalars['ID'];
  name: Scalars['String'];
  procedures?: Maybe<Array<Maybe<Procedure>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Procedure = {
  __typename?: 'Procedure';
  id: Scalars['ID'];
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  specialty?: Maybe<Specialty>;
  procedureTable?: Maybe<ProcedureTable>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GetProcedures = {
  __typename?: 'GetProcedures';
  queryInfo?: Maybe<QueryInfo>;
  procedures?: Maybe<Array<Maybe<Procedure>>>;
};

export type ScheduleInput = {
  doctor?: Maybe<ScheduleDoctorInput>;
  patient?: Maybe<SchedulePatientInput>;
  procedures?: Maybe<Array<Maybe<ScheduleProceduresInput>>>;
  time: Scalars['String'];
  comments?: Maybe<Scalars['String']>;
};

export type ScheduleDoctorInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type SchedulePatientInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ScheduleProceduresInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Schedule = {
  __typename?: 'Schedule';
  id: Scalars['ID'];
  doctor: Doctor;
  patient: Patient;
  procedures?: Maybe<Array<Maybe<Procedure>>>;
  time: Scalars['String'];
  comments?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

