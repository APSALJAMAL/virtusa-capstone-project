
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SampleModel
 * 
 */
export type SampleModel = $Result.DefaultSelection<Prisma.$SampleModelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  GUEST: 'GUEST'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SampleModels
 * const sampleModels = await prisma.sampleModel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SampleModels
   * const sampleModels = await prisma.sampleModel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sampleModel`: Exposes CRUD operations for the **SampleModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SampleModels
    * const sampleModels = await prisma.sampleModel.findMany()
    * ```
    */
  get sampleModel(): Prisma.SampleModelDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SampleModel: 'SampleModel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sampleModel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SampleModel: {
        payload: Prisma.$SampleModelPayload<ExtArgs>
        fields: Prisma.SampleModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SampleModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SampleModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SampleModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SampleModelPayload>
          }
          findFirst: {
            args: Prisma.SampleModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SampleModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SampleModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SampleModelPayload>
          }
          findMany: {
            args: Prisma.SampleModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SampleModelPayload>[]
          }
          create: {
            args: Prisma.SampleModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SampleModelPayload>
          }
          createMany: {
            args: Prisma.SampleModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SampleModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SampleModelPayload>[]
          }
          delete: {
            args: Prisma.SampleModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SampleModelPayload>
          }
          update: {
            args: Prisma.SampleModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SampleModelPayload>
          }
          deleteMany: {
            args: Prisma.SampleModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SampleModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SampleModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SampleModelPayload>[]
          }
          upsert: {
            args: Prisma.SampleModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SampleModelPayload>
          }
          aggregate: {
            args: Prisma.SampleModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSampleModel>
          }
          groupBy: {
            args: Prisma.SampleModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<SampleModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.SampleModelCountArgs<ExtArgs>
            result: $Utils.Optional<SampleModelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sampleModel?: SampleModelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model SampleModel
   */

  export type AggregateSampleModel = {
    _count: SampleModelCountAggregateOutputType | null
    _avg: SampleModelAvgAggregateOutputType | null
    _sum: SampleModelSumAggregateOutputType | null
    _min: SampleModelMinAggregateOutputType | null
    _max: SampleModelMaxAggregateOutputType | null
  }

  export type SampleModelAvgAggregateOutputType = {
    intField: number | null
    floatField: number | null
    decimalField: Decimal | null
    bigIntField: number | null
  }

  export type SampleModelSumAggregateOutputType = {
    intField: number | null
    floatField: number | null
    decimalField: Decimal | null
    bigIntField: bigint | null
  }

  export type SampleModelMinAggregateOutputType = {
    id: string | null
    stringField: string | null
    intField: number | null
    floatField: number | null
    decimalField: Decimal | null
    booleanField: boolean | null
    dateTimeField: Date | null
    bytesField: Uint8Array | null
    enumField: $Enums.Role | null
    bigIntField: bigint | null
    textField: string | null
    createdAt: Date | null
    updatedAt: Date | null
    optionalField: string | null
    uniqueField: string | null
    defaultString: string | null
    isDeleted: boolean | null
  }

  export type SampleModelMaxAggregateOutputType = {
    id: string | null
    stringField: string | null
    intField: number | null
    floatField: number | null
    decimalField: Decimal | null
    booleanField: boolean | null
    dateTimeField: Date | null
    bytesField: Uint8Array | null
    enumField: $Enums.Role | null
    bigIntField: bigint | null
    textField: string | null
    createdAt: Date | null
    updatedAt: Date | null
    optionalField: string | null
    uniqueField: string | null
    defaultString: string | null
    isDeleted: boolean | null
  }

  export type SampleModelCountAggregateOutputType = {
    id: number
    stringField: number
    intField: number
    floatField: number
    decimalField: number
    booleanField: number
    dateTimeField: number
    jsonField: number
    bytesField: number
    enumField: number
    bigIntField: number
    textField: number
    createdAt: number
    updatedAt: number
    optionalField: number
    uniqueField: number
    defaultString: number
    isDeleted: number
    _all: number
  }


  export type SampleModelAvgAggregateInputType = {
    intField?: true
    floatField?: true
    decimalField?: true
    bigIntField?: true
  }

  export type SampleModelSumAggregateInputType = {
    intField?: true
    floatField?: true
    decimalField?: true
    bigIntField?: true
  }

  export type SampleModelMinAggregateInputType = {
    id?: true
    stringField?: true
    intField?: true
    floatField?: true
    decimalField?: true
    booleanField?: true
    dateTimeField?: true
    bytesField?: true
    enumField?: true
    bigIntField?: true
    textField?: true
    createdAt?: true
    updatedAt?: true
    optionalField?: true
    uniqueField?: true
    defaultString?: true
    isDeleted?: true
  }

  export type SampleModelMaxAggregateInputType = {
    id?: true
    stringField?: true
    intField?: true
    floatField?: true
    decimalField?: true
    booleanField?: true
    dateTimeField?: true
    bytesField?: true
    enumField?: true
    bigIntField?: true
    textField?: true
    createdAt?: true
    updatedAt?: true
    optionalField?: true
    uniqueField?: true
    defaultString?: true
    isDeleted?: true
  }

  export type SampleModelCountAggregateInputType = {
    id?: true
    stringField?: true
    intField?: true
    floatField?: true
    decimalField?: true
    booleanField?: true
    dateTimeField?: true
    jsonField?: true
    bytesField?: true
    enumField?: true
    bigIntField?: true
    textField?: true
    createdAt?: true
    updatedAt?: true
    optionalField?: true
    uniqueField?: true
    defaultString?: true
    isDeleted?: true
    _all?: true
  }

  export type SampleModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SampleModel to aggregate.
     */
    where?: SampleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SampleModels to fetch.
     */
    orderBy?: SampleModelOrderByWithRelationInput | SampleModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SampleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SampleModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SampleModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SampleModels
    **/
    _count?: true | SampleModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SampleModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SampleModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SampleModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SampleModelMaxAggregateInputType
  }

  export type GetSampleModelAggregateType<T extends SampleModelAggregateArgs> = {
        [P in keyof T & keyof AggregateSampleModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSampleModel[P]>
      : GetScalarType<T[P], AggregateSampleModel[P]>
  }




  export type SampleModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SampleModelWhereInput
    orderBy?: SampleModelOrderByWithAggregationInput | SampleModelOrderByWithAggregationInput[]
    by: SampleModelScalarFieldEnum[] | SampleModelScalarFieldEnum
    having?: SampleModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SampleModelCountAggregateInputType | true
    _avg?: SampleModelAvgAggregateInputType
    _sum?: SampleModelSumAggregateInputType
    _min?: SampleModelMinAggregateInputType
    _max?: SampleModelMaxAggregateInputType
  }

  export type SampleModelGroupByOutputType = {
    id: string
    stringField: string
    intField: number
    floatField: number
    decimalField: Decimal
    booleanField: boolean
    dateTimeField: Date
    jsonField: JsonValue
    bytesField: Uint8Array
    enumField: $Enums.Role
    bigIntField: bigint
    textField: string
    createdAt: Date
    updatedAt: Date
    optionalField: string | null
    uniqueField: string
    defaultString: string
    isDeleted: boolean
    _count: SampleModelCountAggregateOutputType | null
    _avg: SampleModelAvgAggregateOutputType | null
    _sum: SampleModelSumAggregateOutputType | null
    _min: SampleModelMinAggregateOutputType | null
    _max: SampleModelMaxAggregateOutputType | null
  }

  type GetSampleModelGroupByPayload<T extends SampleModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SampleModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SampleModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SampleModelGroupByOutputType[P]>
            : GetScalarType<T[P], SampleModelGroupByOutputType[P]>
        }
      >
    >


  export type SampleModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stringField?: boolean
    intField?: boolean
    floatField?: boolean
    decimalField?: boolean
    booleanField?: boolean
    dateTimeField?: boolean
    jsonField?: boolean
    bytesField?: boolean
    enumField?: boolean
    bigIntField?: boolean
    textField?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    optionalField?: boolean
    uniqueField?: boolean
    defaultString?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["sampleModel"]>

  export type SampleModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stringField?: boolean
    intField?: boolean
    floatField?: boolean
    decimalField?: boolean
    booleanField?: boolean
    dateTimeField?: boolean
    jsonField?: boolean
    bytesField?: boolean
    enumField?: boolean
    bigIntField?: boolean
    textField?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    optionalField?: boolean
    uniqueField?: boolean
    defaultString?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["sampleModel"]>

  export type SampleModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stringField?: boolean
    intField?: boolean
    floatField?: boolean
    decimalField?: boolean
    booleanField?: boolean
    dateTimeField?: boolean
    jsonField?: boolean
    bytesField?: boolean
    enumField?: boolean
    bigIntField?: boolean
    textField?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    optionalField?: boolean
    uniqueField?: boolean
    defaultString?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["sampleModel"]>

  export type SampleModelSelectScalar = {
    id?: boolean
    stringField?: boolean
    intField?: boolean
    floatField?: boolean
    decimalField?: boolean
    booleanField?: boolean
    dateTimeField?: boolean
    jsonField?: boolean
    bytesField?: boolean
    enumField?: boolean
    bigIntField?: boolean
    textField?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    optionalField?: boolean
    uniqueField?: boolean
    defaultString?: boolean
    isDeleted?: boolean
  }

  export type SampleModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stringField" | "intField" | "floatField" | "decimalField" | "booleanField" | "dateTimeField" | "jsonField" | "bytesField" | "enumField" | "bigIntField" | "textField" | "createdAt" | "updatedAt" | "optionalField" | "uniqueField" | "defaultString" | "isDeleted", ExtArgs["result"]["sampleModel"]>

  export type $SampleModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SampleModel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stringField: string
      intField: number
      floatField: number
      decimalField: Prisma.Decimal
      booleanField: boolean
      dateTimeField: Date
      jsonField: Prisma.JsonValue
      bytesField: Uint8Array
      enumField: $Enums.Role
      bigIntField: bigint
      textField: string
      createdAt: Date
      updatedAt: Date
      optionalField: string | null
      uniqueField: string
      defaultString: string
      isDeleted: boolean
    }, ExtArgs["result"]["sampleModel"]>
    composites: {}
  }

  type SampleModelGetPayload<S extends boolean | null | undefined | SampleModelDefaultArgs> = $Result.GetResult<Prisma.$SampleModelPayload, S>

  type SampleModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SampleModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SampleModelCountAggregateInputType | true
    }

  export interface SampleModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SampleModel'], meta: { name: 'SampleModel' } }
    /**
     * Find zero or one SampleModel that matches the filter.
     * @param {SampleModelFindUniqueArgs} args - Arguments to find a SampleModel
     * @example
     * // Get one SampleModel
     * const sampleModel = await prisma.sampleModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SampleModelFindUniqueArgs>(args: SelectSubset<T, SampleModelFindUniqueArgs<ExtArgs>>): Prisma__SampleModelClient<$Result.GetResult<Prisma.$SampleModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SampleModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SampleModelFindUniqueOrThrowArgs} args - Arguments to find a SampleModel
     * @example
     * // Get one SampleModel
     * const sampleModel = await prisma.sampleModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SampleModelFindUniqueOrThrowArgs>(args: SelectSubset<T, SampleModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SampleModelClient<$Result.GetResult<Prisma.$SampleModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SampleModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleModelFindFirstArgs} args - Arguments to find a SampleModel
     * @example
     * // Get one SampleModel
     * const sampleModel = await prisma.sampleModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SampleModelFindFirstArgs>(args?: SelectSubset<T, SampleModelFindFirstArgs<ExtArgs>>): Prisma__SampleModelClient<$Result.GetResult<Prisma.$SampleModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SampleModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleModelFindFirstOrThrowArgs} args - Arguments to find a SampleModel
     * @example
     * // Get one SampleModel
     * const sampleModel = await prisma.sampleModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SampleModelFindFirstOrThrowArgs>(args?: SelectSubset<T, SampleModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__SampleModelClient<$Result.GetResult<Prisma.$SampleModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SampleModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SampleModels
     * const sampleModels = await prisma.sampleModel.findMany()
     * 
     * // Get first 10 SampleModels
     * const sampleModels = await prisma.sampleModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sampleModelWithIdOnly = await prisma.sampleModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SampleModelFindManyArgs>(args?: SelectSubset<T, SampleModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SampleModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SampleModel.
     * @param {SampleModelCreateArgs} args - Arguments to create a SampleModel.
     * @example
     * // Create one SampleModel
     * const SampleModel = await prisma.sampleModel.create({
     *   data: {
     *     // ... data to create a SampleModel
     *   }
     * })
     * 
     */
    create<T extends SampleModelCreateArgs>(args: SelectSubset<T, SampleModelCreateArgs<ExtArgs>>): Prisma__SampleModelClient<$Result.GetResult<Prisma.$SampleModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SampleModels.
     * @param {SampleModelCreateManyArgs} args - Arguments to create many SampleModels.
     * @example
     * // Create many SampleModels
     * const sampleModel = await prisma.sampleModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SampleModelCreateManyArgs>(args?: SelectSubset<T, SampleModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SampleModels and returns the data saved in the database.
     * @param {SampleModelCreateManyAndReturnArgs} args - Arguments to create many SampleModels.
     * @example
     * // Create many SampleModels
     * const sampleModel = await prisma.sampleModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SampleModels and only return the `id`
     * const sampleModelWithIdOnly = await prisma.sampleModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SampleModelCreateManyAndReturnArgs>(args?: SelectSubset<T, SampleModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SampleModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SampleModel.
     * @param {SampleModelDeleteArgs} args - Arguments to delete one SampleModel.
     * @example
     * // Delete one SampleModel
     * const SampleModel = await prisma.sampleModel.delete({
     *   where: {
     *     // ... filter to delete one SampleModel
     *   }
     * })
     * 
     */
    delete<T extends SampleModelDeleteArgs>(args: SelectSubset<T, SampleModelDeleteArgs<ExtArgs>>): Prisma__SampleModelClient<$Result.GetResult<Prisma.$SampleModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SampleModel.
     * @param {SampleModelUpdateArgs} args - Arguments to update one SampleModel.
     * @example
     * // Update one SampleModel
     * const sampleModel = await prisma.sampleModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SampleModelUpdateArgs>(args: SelectSubset<T, SampleModelUpdateArgs<ExtArgs>>): Prisma__SampleModelClient<$Result.GetResult<Prisma.$SampleModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SampleModels.
     * @param {SampleModelDeleteManyArgs} args - Arguments to filter SampleModels to delete.
     * @example
     * // Delete a few SampleModels
     * const { count } = await prisma.sampleModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SampleModelDeleteManyArgs>(args?: SelectSubset<T, SampleModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SampleModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SampleModels
     * const sampleModel = await prisma.sampleModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SampleModelUpdateManyArgs>(args: SelectSubset<T, SampleModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SampleModels and returns the data updated in the database.
     * @param {SampleModelUpdateManyAndReturnArgs} args - Arguments to update many SampleModels.
     * @example
     * // Update many SampleModels
     * const sampleModel = await prisma.sampleModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SampleModels and only return the `id`
     * const sampleModelWithIdOnly = await prisma.sampleModel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SampleModelUpdateManyAndReturnArgs>(args: SelectSubset<T, SampleModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SampleModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SampleModel.
     * @param {SampleModelUpsertArgs} args - Arguments to update or create a SampleModel.
     * @example
     * // Update or create a SampleModel
     * const sampleModel = await prisma.sampleModel.upsert({
     *   create: {
     *     // ... data to create a SampleModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SampleModel we want to update
     *   }
     * })
     */
    upsert<T extends SampleModelUpsertArgs>(args: SelectSubset<T, SampleModelUpsertArgs<ExtArgs>>): Prisma__SampleModelClient<$Result.GetResult<Prisma.$SampleModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SampleModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleModelCountArgs} args - Arguments to filter SampleModels to count.
     * @example
     * // Count the number of SampleModels
     * const count = await prisma.sampleModel.count({
     *   where: {
     *     // ... the filter for the SampleModels we want to count
     *   }
     * })
    **/
    count<T extends SampleModelCountArgs>(
      args?: Subset<T, SampleModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SampleModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SampleModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SampleModelAggregateArgs>(args: Subset<T, SampleModelAggregateArgs>): Prisma.PrismaPromise<GetSampleModelAggregateType<T>>

    /**
     * Group by SampleModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SampleModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SampleModelGroupByArgs['orderBy'] }
        : { orderBy?: SampleModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SampleModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSampleModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SampleModel model
   */
  readonly fields: SampleModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SampleModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SampleModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SampleModel model
   */
  interface SampleModelFieldRefs {
    readonly id: FieldRef<"SampleModel", 'String'>
    readonly stringField: FieldRef<"SampleModel", 'String'>
    readonly intField: FieldRef<"SampleModel", 'Int'>
    readonly floatField: FieldRef<"SampleModel", 'Float'>
    readonly decimalField: FieldRef<"SampleModel", 'Decimal'>
    readonly booleanField: FieldRef<"SampleModel", 'Boolean'>
    readonly dateTimeField: FieldRef<"SampleModel", 'DateTime'>
    readonly jsonField: FieldRef<"SampleModel", 'Json'>
    readonly bytesField: FieldRef<"SampleModel", 'Bytes'>
    readonly enumField: FieldRef<"SampleModel", 'Role'>
    readonly bigIntField: FieldRef<"SampleModel", 'BigInt'>
    readonly textField: FieldRef<"SampleModel", 'String'>
    readonly createdAt: FieldRef<"SampleModel", 'DateTime'>
    readonly updatedAt: FieldRef<"SampleModel", 'DateTime'>
    readonly optionalField: FieldRef<"SampleModel", 'String'>
    readonly uniqueField: FieldRef<"SampleModel", 'String'>
    readonly defaultString: FieldRef<"SampleModel", 'String'>
    readonly isDeleted: FieldRef<"SampleModel", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SampleModel findUnique
   */
  export type SampleModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
    /**
     * Filter, which SampleModel to fetch.
     */
    where: SampleModelWhereUniqueInput
  }

  /**
   * SampleModel findUniqueOrThrow
   */
  export type SampleModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
    /**
     * Filter, which SampleModel to fetch.
     */
    where: SampleModelWhereUniqueInput
  }

  /**
   * SampleModel findFirst
   */
  export type SampleModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
    /**
     * Filter, which SampleModel to fetch.
     */
    where?: SampleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SampleModels to fetch.
     */
    orderBy?: SampleModelOrderByWithRelationInput | SampleModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SampleModels.
     */
    cursor?: SampleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SampleModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SampleModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SampleModels.
     */
    distinct?: SampleModelScalarFieldEnum | SampleModelScalarFieldEnum[]
  }

  /**
   * SampleModel findFirstOrThrow
   */
  export type SampleModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
    /**
     * Filter, which SampleModel to fetch.
     */
    where?: SampleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SampleModels to fetch.
     */
    orderBy?: SampleModelOrderByWithRelationInput | SampleModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SampleModels.
     */
    cursor?: SampleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SampleModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SampleModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SampleModels.
     */
    distinct?: SampleModelScalarFieldEnum | SampleModelScalarFieldEnum[]
  }

  /**
   * SampleModel findMany
   */
  export type SampleModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
    /**
     * Filter, which SampleModels to fetch.
     */
    where?: SampleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SampleModels to fetch.
     */
    orderBy?: SampleModelOrderByWithRelationInput | SampleModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SampleModels.
     */
    cursor?: SampleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SampleModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SampleModels.
     */
    skip?: number
    distinct?: SampleModelScalarFieldEnum | SampleModelScalarFieldEnum[]
  }

  /**
   * SampleModel create
   */
  export type SampleModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
    /**
     * The data needed to create a SampleModel.
     */
    data: XOR<SampleModelCreateInput, SampleModelUncheckedCreateInput>
  }

  /**
   * SampleModel createMany
   */
  export type SampleModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SampleModels.
     */
    data: SampleModelCreateManyInput | SampleModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SampleModel createManyAndReturn
   */
  export type SampleModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
    /**
     * The data used to create many SampleModels.
     */
    data: SampleModelCreateManyInput | SampleModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SampleModel update
   */
  export type SampleModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
    /**
     * The data needed to update a SampleModel.
     */
    data: XOR<SampleModelUpdateInput, SampleModelUncheckedUpdateInput>
    /**
     * Choose, which SampleModel to update.
     */
    where: SampleModelWhereUniqueInput
  }

  /**
   * SampleModel updateMany
   */
  export type SampleModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SampleModels.
     */
    data: XOR<SampleModelUpdateManyMutationInput, SampleModelUncheckedUpdateManyInput>
    /**
     * Filter which SampleModels to update
     */
    where?: SampleModelWhereInput
    /**
     * Limit how many SampleModels to update.
     */
    limit?: number
  }

  /**
   * SampleModel updateManyAndReturn
   */
  export type SampleModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
    /**
     * The data used to update SampleModels.
     */
    data: XOR<SampleModelUpdateManyMutationInput, SampleModelUncheckedUpdateManyInput>
    /**
     * Filter which SampleModels to update
     */
    where?: SampleModelWhereInput
    /**
     * Limit how many SampleModels to update.
     */
    limit?: number
  }

  /**
   * SampleModel upsert
   */
  export type SampleModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
    /**
     * The filter to search for the SampleModel to update in case it exists.
     */
    where: SampleModelWhereUniqueInput
    /**
     * In case the SampleModel found by the `where` argument doesn't exist, create a new SampleModel with this data.
     */
    create: XOR<SampleModelCreateInput, SampleModelUncheckedCreateInput>
    /**
     * In case the SampleModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SampleModelUpdateInput, SampleModelUncheckedUpdateInput>
  }

  /**
   * SampleModel delete
   */
  export type SampleModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
    /**
     * Filter which SampleModel to delete.
     */
    where: SampleModelWhereUniqueInput
  }

  /**
   * SampleModel deleteMany
   */
  export type SampleModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SampleModels to delete
     */
    where?: SampleModelWhereInput
    /**
     * Limit how many SampleModels to delete.
     */
    limit?: number
  }

  /**
   * SampleModel without action
   */
  export type SampleModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SampleModel
     */
    select?: SampleModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SampleModel
     */
    omit?: SampleModelOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SampleModelScalarFieldEnum: {
    id: 'id',
    stringField: 'stringField',
    intField: 'intField',
    floatField: 'floatField',
    decimalField: 'decimalField',
    booleanField: 'booleanField',
    dateTimeField: 'dateTimeField',
    jsonField: 'jsonField',
    bytesField: 'bytesField',
    enumField: 'enumField',
    bigIntField: 'bigIntField',
    textField: 'textField',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    optionalField: 'optionalField',
    uniqueField: 'uniqueField',
    defaultString: 'defaultString',
    isDeleted: 'isDeleted'
  };

  export type SampleModelScalarFieldEnum = (typeof SampleModelScalarFieldEnum)[keyof typeof SampleModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    
  /**
   * Deep Input Types
   */


  export type SampleModelWhereInput = {
    AND?: SampleModelWhereInput | SampleModelWhereInput[]
    OR?: SampleModelWhereInput[]
    NOT?: SampleModelWhereInput | SampleModelWhereInput[]
    id?: StringFilter<"SampleModel"> | string
    stringField?: StringFilter<"SampleModel"> | string
    intField?: IntFilter<"SampleModel"> | number
    floatField?: FloatFilter<"SampleModel"> | number
    decimalField?: DecimalFilter<"SampleModel"> | Decimal | DecimalJsLike | number | string
    booleanField?: BoolFilter<"SampleModel"> | boolean
    dateTimeField?: DateTimeFilter<"SampleModel"> | Date | string
    jsonField?: JsonFilter<"SampleModel">
    bytesField?: BytesFilter<"SampleModel"> | Uint8Array
    enumField?: EnumRoleFilter<"SampleModel"> | $Enums.Role
    bigIntField?: BigIntFilter<"SampleModel"> | bigint | number
    textField?: StringFilter<"SampleModel"> | string
    createdAt?: DateTimeFilter<"SampleModel"> | Date | string
    updatedAt?: DateTimeFilter<"SampleModel"> | Date | string
    optionalField?: StringNullableFilter<"SampleModel"> | string | null
    uniqueField?: StringFilter<"SampleModel"> | string
    defaultString?: StringFilter<"SampleModel"> | string
    isDeleted?: BoolFilter<"SampleModel"> | boolean
  }

  export type SampleModelOrderByWithRelationInput = {
    id?: SortOrder
    stringField?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    decimalField?: SortOrder
    booleanField?: SortOrder
    dateTimeField?: SortOrder
    jsonField?: SortOrder
    bytesField?: SortOrder
    enumField?: SortOrder
    bigIntField?: SortOrder
    textField?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    optionalField?: SortOrderInput | SortOrder
    uniqueField?: SortOrder
    defaultString?: SortOrder
    isDeleted?: SortOrder
  }

  export type SampleModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniqueField?: string
    AND?: SampleModelWhereInput | SampleModelWhereInput[]
    OR?: SampleModelWhereInput[]
    NOT?: SampleModelWhereInput | SampleModelWhereInput[]
    stringField?: StringFilter<"SampleModel"> | string
    intField?: IntFilter<"SampleModel"> | number
    floatField?: FloatFilter<"SampleModel"> | number
    decimalField?: DecimalFilter<"SampleModel"> | Decimal | DecimalJsLike | number | string
    booleanField?: BoolFilter<"SampleModel"> | boolean
    dateTimeField?: DateTimeFilter<"SampleModel"> | Date | string
    jsonField?: JsonFilter<"SampleModel">
    bytesField?: BytesFilter<"SampleModel"> | Uint8Array
    enumField?: EnumRoleFilter<"SampleModel"> | $Enums.Role
    bigIntField?: BigIntFilter<"SampleModel"> | bigint | number
    textField?: StringFilter<"SampleModel"> | string
    createdAt?: DateTimeFilter<"SampleModel"> | Date | string
    updatedAt?: DateTimeFilter<"SampleModel"> | Date | string
    optionalField?: StringNullableFilter<"SampleModel"> | string | null
    defaultString?: StringFilter<"SampleModel"> | string
    isDeleted?: BoolFilter<"SampleModel"> | boolean
  }, "id" | "uniqueField">

  export type SampleModelOrderByWithAggregationInput = {
    id?: SortOrder
    stringField?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    decimalField?: SortOrder
    booleanField?: SortOrder
    dateTimeField?: SortOrder
    jsonField?: SortOrder
    bytesField?: SortOrder
    enumField?: SortOrder
    bigIntField?: SortOrder
    textField?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    optionalField?: SortOrderInput | SortOrder
    uniqueField?: SortOrder
    defaultString?: SortOrder
    isDeleted?: SortOrder
    _count?: SampleModelCountOrderByAggregateInput
    _avg?: SampleModelAvgOrderByAggregateInput
    _max?: SampleModelMaxOrderByAggregateInput
    _min?: SampleModelMinOrderByAggregateInput
    _sum?: SampleModelSumOrderByAggregateInput
  }

  export type SampleModelScalarWhereWithAggregatesInput = {
    AND?: SampleModelScalarWhereWithAggregatesInput | SampleModelScalarWhereWithAggregatesInput[]
    OR?: SampleModelScalarWhereWithAggregatesInput[]
    NOT?: SampleModelScalarWhereWithAggregatesInput | SampleModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SampleModel"> | string
    stringField?: StringWithAggregatesFilter<"SampleModel"> | string
    intField?: IntWithAggregatesFilter<"SampleModel"> | number
    floatField?: FloatWithAggregatesFilter<"SampleModel"> | number
    decimalField?: DecimalWithAggregatesFilter<"SampleModel"> | Decimal | DecimalJsLike | number | string
    booleanField?: BoolWithAggregatesFilter<"SampleModel"> | boolean
    dateTimeField?: DateTimeWithAggregatesFilter<"SampleModel"> | Date | string
    jsonField?: JsonWithAggregatesFilter<"SampleModel">
    bytesField?: BytesWithAggregatesFilter<"SampleModel"> | Uint8Array
    enumField?: EnumRoleWithAggregatesFilter<"SampleModel"> | $Enums.Role
    bigIntField?: BigIntWithAggregatesFilter<"SampleModel"> | bigint | number
    textField?: StringWithAggregatesFilter<"SampleModel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SampleModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SampleModel"> | Date | string
    optionalField?: StringNullableWithAggregatesFilter<"SampleModel"> | string | null
    uniqueField?: StringWithAggregatesFilter<"SampleModel"> | string
    defaultString?: StringWithAggregatesFilter<"SampleModel"> | string
    isDeleted?: BoolWithAggregatesFilter<"SampleModel"> | boolean
  }

  export type SampleModelCreateInput = {
    id?: string
    stringField: string
    intField: number
    floatField: number
    decimalField: Decimal | DecimalJsLike | number | string
    booleanField: boolean
    dateTimeField: Date | string
    jsonField: JsonNullValueInput | InputJsonValue
    bytesField: Uint8Array
    enumField: $Enums.Role
    bigIntField: bigint | number
    textField: string
    createdAt?: Date | string
    updatedAt?: Date | string
    optionalField?: string | null
    uniqueField: string
    defaultString?: string
    isDeleted?: boolean
  }

  export type SampleModelUncheckedCreateInput = {
    id?: string
    stringField: string
    intField: number
    floatField: number
    decimalField: Decimal | DecimalJsLike | number | string
    booleanField: boolean
    dateTimeField: Date | string
    jsonField: JsonNullValueInput | InputJsonValue
    bytesField: Uint8Array
    enumField: $Enums.Role
    bigIntField: bigint | number
    textField: string
    createdAt?: Date | string
    updatedAt?: Date | string
    optionalField?: string | null
    uniqueField: string
    defaultString?: string
    isDeleted?: boolean
  }

  export type SampleModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stringField?: StringFieldUpdateOperationsInput | string
    intField?: IntFieldUpdateOperationsInput | number
    floatField?: FloatFieldUpdateOperationsInput | number
    decimalField?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booleanField?: BoolFieldUpdateOperationsInput | boolean
    dateTimeField?: DateTimeFieldUpdateOperationsInput | Date | string
    jsonField?: JsonNullValueInput | InputJsonValue
    bytesField?: BytesFieldUpdateOperationsInput | Uint8Array
    enumField?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bigIntField?: BigIntFieldUpdateOperationsInput | bigint | number
    textField?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalField?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueField?: StringFieldUpdateOperationsInput | string
    defaultString?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SampleModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stringField?: StringFieldUpdateOperationsInput | string
    intField?: IntFieldUpdateOperationsInput | number
    floatField?: FloatFieldUpdateOperationsInput | number
    decimalField?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booleanField?: BoolFieldUpdateOperationsInput | boolean
    dateTimeField?: DateTimeFieldUpdateOperationsInput | Date | string
    jsonField?: JsonNullValueInput | InputJsonValue
    bytesField?: BytesFieldUpdateOperationsInput | Uint8Array
    enumField?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bigIntField?: BigIntFieldUpdateOperationsInput | bigint | number
    textField?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalField?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueField?: StringFieldUpdateOperationsInput | string
    defaultString?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SampleModelCreateManyInput = {
    id?: string
    stringField: string
    intField: number
    floatField: number
    decimalField: Decimal | DecimalJsLike | number | string
    booleanField: boolean
    dateTimeField: Date | string
    jsonField: JsonNullValueInput | InputJsonValue
    bytesField: Uint8Array
    enumField: $Enums.Role
    bigIntField: bigint | number
    textField: string
    createdAt?: Date | string
    updatedAt?: Date | string
    optionalField?: string | null
    uniqueField: string
    defaultString?: string
    isDeleted?: boolean
  }

  export type SampleModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stringField?: StringFieldUpdateOperationsInput | string
    intField?: IntFieldUpdateOperationsInput | number
    floatField?: FloatFieldUpdateOperationsInput | number
    decimalField?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booleanField?: BoolFieldUpdateOperationsInput | boolean
    dateTimeField?: DateTimeFieldUpdateOperationsInput | Date | string
    jsonField?: JsonNullValueInput | InputJsonValue
    bytesField?: BytesFieldUpdateOperationsInput | Uint8Array
    enumField?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bigIntField?: BigIntFieldUpdateOperationsInput | bigint | number
    textField?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalField?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueField?: StringFieldUpdateOperationsInput | string
    defaultString?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SampleModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stringField?: StringFieldUpdateOperationsInput | string
    intField?: IntFieldUpdateOperationsInput | number
    floatField?: FloatFieldUpdateOperationsInput | number
    decimalField?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booleanField?: BoolFieldUpdateOperationsInput | boolean
    dateTimeField?: DateTimeFieldUpdateOperationsInput | Date | string
    jsonField?: JsonNullValueInput | InputJsonValue
    bytesField?: BytesFieldUpdateOperationsInput | Uint8Array
    enumField?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bigIntField?: BigIntFieldUpdateOperationsInput | bigint | number
    textField?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    optionalField?: NullableStringFieldUpdateOperationsInput | string | null
    uniqueField?: StringFieldUpdateOperationsInput | string
    defaultString?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SampleModelCountOrderByAggregateInput = {
    id?: SortOrder
    stringField?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    decimalField?: SortOrder
    booleanField?: SortOrder
    dateTimeField?: SortOrder
    jsonField?: SortOrder
    bytesField?: SortOrder
    enumField?: SortOrder
    bigIntField?: SortOrder
    textField?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    optionalField?: SortOrder
    uniqueField?: SortOrder
    defaultString?: SortOrder
    isDeleted?: SortOrder
  }

  export type SampleModelAvgOrderByAggregateInput = {
    intField?: SortOrder
    floatField?: SortOrder
    decimalField?: SortOrder
    bigIntField?: SortOrder
  }

  export type SampleModelMaxOrderByAggregateInput = {
    id?: SortOrder
    stringField?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    decimalField?: SortOrder
    booleanField?: SortOrder
    dateTimeField?: SortOrder
    bytesField?: SortOrder
    enumField?: SortOrder
    bigIntField?: SortOrder
    textField?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    optionalField?: SortOrder
    uniqueField?: SortOrder
    defaultString?: SortOrder
    isDeleted?: SortOrder
  }

  export type SampleModelMinOrderByAggregateInput = {
    id?: SortOrder
    stringField?: SortOrder
    intField?: SortOrder
    floatField?: SortOrder
    decimalField?: SortOrder
    booleanField?: SortOrder
    dateTimeField?: SortOrder
    bytesField?: SortOrder
    enumField?: SortOrder
    bigIntField?: SortOrder
    textField?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    optionalField?: SortOrder
    uniqueField?: SortOrder
    defaultString?: SortOrder
    isDeleted?: SortOrder
  }

  export type SampleModelSumOrderByAggregateInput = {
    intField?: SortOrder
    floatField?: SortOrder
    decimalField?: SortOrder
    bigIntField?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}