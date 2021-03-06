import { GraphQLResolveInfo } from 'graphql';
import { ResolverContext } from '@typeDefs/resolver';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Bundle = {
   __typename?: 'Bundle',
  header: Scalars['String'],
  bundleId: BundleId,
  price: Scalars['Int'],
};

export enum BundleId {
  Student = 'STUDENT',
  Intermediate = 'INTERMEDIATE',
  Professional = 'PROFESSIONAL'
}

export type Course = {
   __typename?: 'Course',
  header: Scalars['String'],
  courseId: CourseId,
  bundle: Bundle,
};

export enum CourseId {
  TheRoadToLearnReact = 'THE_ROAD_TO_LEARN_REACT',
  TamingTheState = 'TAMING_THE_STATE',
  TheRoadToGraphql = 'THE_ROAD_TO_GRAPHQL',
  TheRoadToReactWithFirebase = 'THE_ROAD_TO_REACT_WITH_FIREBASE'
}

export type Mutation = {
   __typename?: 'Mutation',
  _?: Maybe<Scalars['Boolean']>,
  signIn: SessionToken,
  signUp: SessionToken,
  passwordForgot?: Maybe<Scalars['Boolean']>,
  passwordChange?: Maybe<Scalars['Boolean']>,
  paypalCreateOrder: OrderId,
  paypalApproveOrder?: Maybe<Scalars['Boolean']>,
  stripeCreateOrder: StripeId,
  createFreeCourse: Scalars['Boolean'],
  createAdminCourse: Scalars['Boolean'],
};


export type MutationSignInArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSignUpArgs = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationPasswordForgotArgs = {
  email: Scalars['String']
};


export type MutationPasswordChangeArgs = {
  password: Scalars['String']
};


export type MutationPaypalCreateOrderArgs = {
  courseId: CourseId,
  bundleId: BundleId,
  coupon?: Maybe<Scalars['String']>
};


export type MutationPaypalApproveOrderArgs = {
  orderId: Scalars['String']
};


export type MutationStripeCreateOrderArgs = {
  imageUrl: Scalars['String'],
  courseId: CourseId,
  bundleId: BundleId,
  coupon?: Maybe<Scalars['String']>
};


export type MutationCreateFreeCourseArgs = {
  courseId: CourseId,
  bundleId: BundleId
};


export type MutationCreateAdminCourseArgs = {
  uid: Scalars['String'],
  courseId: CourseId,
  bundleId: BundleId
};

export type OrderId = {
   __typename?: 'OrderId',
  orderId: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['Boolean']>,
  me?: Maybe<User>,
  storefront?: Maybe<Storefront>,
};


export type QueryStorefrontArgs = {
  courseId: CourseId,
  bundleId: BundleId
};

export type SessionToken = {
   __typename?: 'SessionToken',
  sessionToken: Scalars['String'],
};

export type Storefront = {
   __typename?: 'Storefront',
  course: Course,
};

export type StripeId = {
   __typename?: 'StripeId',
  id: Scalars['String'],
};

export type Subscription = {
   __typename?: 'Subscription',
  _?: Maybe<Scalars['Boolean']>,
};

export type User = {
   __typename?: 'User',
  email: Scalars['String'],
  uid: Scalars['String'],
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn = (obj: any, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<any>,
  User: ResolverTypeWrapper<any>,
  String: ResolverTypeWrapper<any>,
  CourseId: ResolverTypeWrapper<any>,
  BundleId: ResolverTypeWrapper<any>,
  Storefront: ResolverTypeWrapper<any>,
  Course: ResolverTypeWrapper<any>,
  Bundle: ResolverTypeWrapper<any>,
  Int: ResolverTypeWrapper<any>,
  Mutation: ResolverTypeWrapper<{}>,
  SessionToken: ResolverTypeWrapper<any>,
  OrderId: ResolverTypeWrapper<any>,
  StripeId: ResolverTypeWrapper<any>,
  Subscription: ResolverTypeWrapper<{}>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  Boolean: any,
  User: any,
  String: any,
  CourseId: any,
  BundleId: any,
  Storefront: any,
  Course: any,
  Bundle: any,
  Int: any,
  Mutation: {},
  SessionToken: any,
  OrderId: any,
  StripeId: any,
  Subscription: {},
}>;

export type BundleResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Bundle'] = ResolversParentTypes['Bundle']> = ResolversObject<{
  header?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  bundleId?: Resolver<ResolversTypes['BundleId'], ParentType, ContextType>,
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type CourseResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Course'] = ResolversParentTypes['Course']> = ResolversObject<{
  header?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  courseId?: Resolver<ResolversTypes['CourseId'], ParentType, ContextType>,
  bundle?: Resolver<ResolversTypes['Bundle'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type MutationResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  signIn?: Resolver<ResolversTypes['SessionToken'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'email' | 'password'>>,
  signUp?: Resolver<ResolversTypes['SessionToken'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'username' | 'email' | 'password'>>,
  passwordForgot?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationPasswordForgotArgs, 'email'>>,
  passwordChange?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationPasswordChangeArgs, 'password'>>,
  paypalCreateOrder?: Resolver<ResolversTypes['OrderId'], ParentType, ContextType, RequireFields<MutationPaypalCreateOrderArgs, 'courseId' | 'bundleId'>>,
  paypalApproveOrder?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationPaypalApproveOrderArgs, 'orderId'>>,
  stripeCreateOrder?: Resolver<ResolversTypes['StripeId'], ParentType, ContextType, RequireFields<MutationStripeCreateOrderArgs, 'imageUrl' | 'courseId' | 'bundleId'>>,
  createFreeCourse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateFreeCourseArgs, 'courseId' | 'bundleId'>>,
  createAdminCourse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateAdminCourseArgs, 'uid' | 'courseId' | 'bundleId'>>,
}>;

export type OrderIdResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['OrderId'] = ResolversParentTypes['OrderId']> = ResolversObject<{
  orderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type QueryResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  storefront?: Resolver<Maybe<ResolversTypes['Storefront']>, ParentType, ContextType, RequireFields<QueryStorefrontArgs, 'courseId' | 'bundleId'>>,
}>;

export type SessionTokenResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['SessionToken'] = ResolversParentTypes['SessionToken']> = ResolversObject<{
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type StorefrontResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Storefront'] = ResolversParentTypes['Storefront']> = ResolversObject<{
  course?: Resolver<ResolversTypes['Course'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type StripeIdResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['StripeId'] = ResolversParentTypes['StripeId']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type SubscriptionResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  _?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, "_", ParentType, ContextType>,
}>;

export type UserResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type Resolvers<ContextType = ResolverContext> = ResolversObject<{
  Bundle?: BundleResolvers<ContextType>,
  Course?: CourseResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  OrderId?: OrderIdResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  SessionToken?: SessionTokenResolvers<ContextType>,
  Storefront?: StorefrontResolvers<ContextType>,
  StripeId?: StripeIdResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = ResolverContext> = Resolvers<ContextType>;
