
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Ta
 * 
 */
export type Ta = $Result.DefaultSelection<Prisma.$TaPayload>
/**
 * Model Opd
 * 
 */
export type Opd = $Result.DefaultSelection<Prisma.$OpdPayload>
/**
 * Model Desk
 * 
 */
export type Desk = $Result.DefaultSelection<Prisma.$DeskPayload>
/**
 * Model Kegiatan
 * 
 */
export type Kegiatan = $Result.DefaultSelection<Prisma.$KegiatanPayload>
/**
 * Model SubKegiatan
 * 
 */
export type SubKegiatan = $Result.DefaultSelection<Prisma.$SubKegiatanPayload>
/**
 * Model Usulan
 * 
 */
export type Usulan = $Result.DefaultSelection<Prisma.$UsulanPayload>
/**
 * Model Satuan
 * 
 */
export type Satuan = $Result.DefaultSelection<Prisma.$SatuanPayload>
/**
 * Model Distrik
 * 
 */
export type Distrik = $Result.DefaultSelection<Prisma.$DistrikPayload>
/**
 * Model Kampung
 * 
 */
export type Kampung = $Result.DefaultSelection<Prisma.$KampungPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ta`: Exposes CRUD operations for the **Ta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tas
    * const tas = await prisma.ta.findMany()
    * ```
    */
  get ta(): Prisma.TaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opd`: Exposes CRUD operations for the **Opd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opds
    * const opds = await prisma.opd.findMany()
    * ```
    */
  get opd(): Prisma.OpdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.desk`: Exposes CRUD operations for the **Desk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Desks
    * const desks = await prisma.desk.findMany()
    * ```
    */
  get desk(): Prisma.DeskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kegiatan`: Exposes CRUD operations for the **Kegiatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kegiatans
    * const kegiatans = await prisma.kegiatan.findMany()
    * ```
    */
  get kegiatan(): Prisma.KegiatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subKegiatan`: Exposes CRUD operations for the **SubKegiatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubKegiatans
    * const subKegiatans = await prisma.subKegiatan.findMany()
    * ```
    */
  get subKegiatan(): Prisma.SubKegiatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usulan`: Exposes CRUD operations for the **Usulan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usulans
    * const usulans = await prisma.usulan.findMany()
    * ```
    */
  get usulan(): Prisma.UsulanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.satuan`: Exposes CRUD operations for the **Satuan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Satuans
    * const satuans = await prisma.satuan.findMany()
    * ```
    */
  get satuan(): Prisma.SatuanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distrik`: Exposes CRUD operations for the **Distrik** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Distriks
    * const distriks = await prisma.distrik.findMany()
    * ```
    */
  get distrik(): Prisma.DistrikDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kampung`: Exposes CRUD operations for the **Kampung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kampungs
    * const kampungs = await prisma.kampung.findMany()
    * ```
    */
  get kampung(): Prisma.KampungDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Ta: 'Ta',
    Opd: 'Opd',
    Desk: 'Desk',
    Kegiatan: 'Kegiatan',
    SubKegiatan: 'SubKegiatan',
    Usulan: 'Usulan',
    Satuan: 'Satuan',
    Distrik: 'Distrik',
    Kampung: 'Kampung'
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
      modelProps: "user" | "ta" | "opd" | "desk" | "kegiatan" | "subKegiatan" | "usulan" | "satuan" | "distrik" | "kampung"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Ta: {
        payload: Prisma.$TaPayload<ExtArgs>
        fields: Prisma.TaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaPayload>
          }
          findFirst: {
            args: Prisma.TaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaPayload>
          }
          findMany: {
            args: Prisma.TaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaPayload>[]
          }
          create: {
            args: Prisma.TaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaPayload>
          }
          createMany: {
            args: Prisma.TaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaPayload>[]
          }
          delete: {
            args: Prisma.TaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaPayload>
          }
          update: {
            args: Prisma.TaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaPayload>
          }
          deleteMany: {
            args: Prisma.TaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaPayload>[]
          }
          upsert: {
            args: Prisma.TaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaPayload>
          }
          aggregate: {
            args: Prisma.TaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTa>
          }
          groupBy: {
            args: Prisma.TaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaCountArgs<ExtArgs>
            result: $Utils.Optional<TaCountAggregateOutputType> | number
          }
        }
      }
      Opd: {
        payload: Prisma.$OpdPayload<ExtArgs>
        fields: Prisma.OpdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpdPayload>
          }
          findFirst: {
            args: Prisma.OpdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpdPayload>
          }
          findMany: {
            args: Prisma.OpdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpdPayload>[]
          }
          create: {
            args: Prisma.OpdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpdPayload>
          }
          createMany: {
            args: Prisma.OpdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpdPayload>[]
          }
          delete: {
            args: Prisma.OpdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpdPayload>
          }
          update: {
            args: Prisma.OpdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpdPayload>
          }
          deleteMany: {
            args: Prisma.OpdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpdPayload>[]
          }
          upsert: {
            args: Prisma.OpdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpdPayload>
          }
          aggregate: {
            args: Prisma.OpdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpd>
          }
          groupBy: {
            args: Prisma.OpdGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpdGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpdCountArgs<ExtArgs>
            result: $Utils.Optional<OpdCountAggregateOutputType> | number
          }
        }
      }
      Desk: {
        payload: Prisma.$DeskPayload<ExtArgs>
        fields: Prisma.DeskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          findFirst: {
            args: Prisma.DeskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          findMany: {
            args: Prisma.DeskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>[]
          }
          create: {
            args: Prisma.DeskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          createMany: {
            args: Prisma.DeskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>[]
          }
          delete: {
            args: Prisma.DeskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          update: {
            args: Prisma.DeskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          deleteMany: {
            args: Prisma.DeskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>[]
          }
          upsert: {
            args: Prisma.DeskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          aggregate: {
            args: Prisma.DeskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesk>
          }
          groupBy: {
            args: Prisma.DeskGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeskGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeskCountArgs<ExtArgs>
            result: $Utils.Optional<DeskCountAggregateOutputType> | number
          }
        }
      }
      Kegiatan: {
        payload: Prisma.$KegiatanPayload<ExtArgs>
        fields: Prisma.KegiatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KegiatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KegiatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          findFirst: {
            args: Prisma.KegiatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KegiatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          findMany: {
            args: Prisma.KegiatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>[]
          }
          create: {
            args: Prisma.KegiatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          createMany: {
            args: Prisma.KegiatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KegiatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>[]
          }
          delete: {
            args: Prisma.KegiatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          update: {
            args: Prisma.KegiatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          deleteMany: {
            args: Prisma.KegiatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KegiatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KegiatanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>[]
          }
          upsert: {
            args: Prisma.KegiatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KegiatanPayload>
          }
          aggregate: {
            args: Prisma.KegiatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKegiatan>
          }
          groupBy: {
            args: Prisma.KegiatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KegiatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.KegiatanCountArgs<ExtArgs>
            result: $Utils.Optional<KegiatanCountAggregateOutputType> | number
          }
        }
      }
      SubKegiatan: {
        payload: Prisma.$SubKegiatanPayload<ExtArgs>
        fields: Prisma.SubKegiatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubKegiatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKegiatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubKegiatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKegiatanPayload>
          }
          findFirst: {
            args: Prisma.SubKegiatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKegiatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubKegiatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKegiatanPayload>
          }
          findMany: {
            args: Prisma.SubKegiatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKegiatanPayload>[]
          }
          create: {
            args: Prisma.SubKegiatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKegiatanPayload>
          }
          createMany: {
            args: Prisma.SubKegiatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubKegiatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKegiatanPayload>[]
          }
          delete: {
            args: Prisma.SubKegiatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKegiatanPayload>
          }
          update: {
            args: Prisma.SubKegiatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKegiatanPayload>
          }
          deleteMany: {
            args: Prisma.SubKegiatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubKegiatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubKegiatanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKegiatanPayload>[]
          }
          upsert: {
            args: Prisma.SubKegiatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubKegiatanPayload>
          }
          aggregate: {
            args: Prisma.SubKegiatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubKegiatan>
          }
          groupBy: {
            args: Prisma.SubKegiatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubKegiatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubKegiatanCountArgs<ExtArgs>
            result: $Utils.Optional<SubKegiatanCountAggregateOutputType> | number
          }
        }
      }
      Usulan: {
        payload: Prisma.$UsulanPayload<ExtArgs>
        fields: Prisma.UsulanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsulanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsulanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsulanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsulanPayload>
          }
          findFirst: {
            args: Prisma.UsulanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsulanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsulanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsulanPayload>
          }
          findMany: {
            args: Prisma.UsulanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsulanPayload>[]
          }
          create: {
            args: Prisma.UsulanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsulanPayload>
          }
          createMany: {
            args: Prisma.UsulanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsulanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsulanPayload>[]
          }
          delete: {
            args: Prisma.UsulanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsulanPayload>
          }
          update: {
            args: Prisma.UsulanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsulanPayload>
          }
          deleteMany: {
            args: Prisma.UsulanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsulanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsulanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsulanPayload>[]
          }
          upsert: {
            args: Prisma.UsulanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsulanPayload>
          }
          aggregate: {
            args: Prisma.UsulanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsulan>
          }
          groupBy: {
            args: Prisma.UsulanGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsulanGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsulanCountArgs<ExtArgs>
            result: $Utils.Optional<UsulanCountAggregateOutputType> | number
          }
        }
      }
      Satuan: {
        payload: Prisma.$SatuanPayload<ExtArgs>
        fields: Prisma.SatuanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SatuanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatuanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SatuanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatuanPayload>
          }
          findFirst: {
            args: Prisma.SatuanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatuanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SatuanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatuanPayload>
          }
          findMany: {
            args: Prisma.SatuanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatuanPayload>[]
          }
          create: {
            args: Prisma.SatuanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatuanPayload>
          }
          createMany: {
            args: Prisma.SatuanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SatuanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatuanPayload>[]
          }
          delete: {
            args: Prisma.SatuanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatuanPayload>
          }
          update: {
            args: Prisma.SatuanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatuanPayload>
          }
          deleteMany: {
            args: Prisma.SatuanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SatuanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SatuanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatuanPayload>[]
          }
          upsert: {
            args: Prisma.SatuanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatuanPayload>
          }
          aggregate: {
            args: Prisma.SatuanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSatuan>
          }
          groupBy: {
            args: Prisma.SatuanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SatuanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SatuanCountArgs<ExtArgs>
            result: $Utils.Optional<SatuanCountAggregateOutputType> | number
          }
        }
      }
      Distrik: {
        payload: Prisma.$DistrikPayload<ExtArgs>
        fields: Prisma.DistrikFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistrikFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrikPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistrikFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrikPayload>
          }
          findFirst: {
            args: Prisma.DistrikFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrikPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistrikFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrikPayload>
          }
          findMany: {
            args: Prisma.DistrikFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrikPayload>[]
          }
          create: {
            args: Prisma.DistrikCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrikPayload>
          }
          createMany: {
            args: Prisma.DistrikCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistrikCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrikPayload>[]
          }
          delete: {
            args: Prisma.DistrikDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrikPayload>
          }
          update: {
            args: Prisma.DistrikUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrikPayload>
          }
          deleteMany: {
            args: Prisma.DistrikDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistrikUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistrikUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrikPayload>[]
          }
          upsert: {
            args: Prisma.DistrikUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrikPayload>
          }
          aggregate: {
            args: Prisma.DistrikAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistrik>
          }
          groupBy: {
            args: Prisma.DistrikGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistrikGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistrikCountArgs<ExtArgs>
            result: $Utils.Optional<DistrikCountAggregateOutputType> | number
          }
        }
      }
      Kampung: {
        payload: Prisma.$KampungPayload<ExtArgs>
        fields: Prisma.KampungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KampungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KampungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KampungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KampungPayload>
          }
          findFirst: {
            args: Prisma.KampungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KampungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KampungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KampungPayload>
          }
          findMany: {
            args: Prisma.KampungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KampungPayload>[]
          }
          create: {
            args: Prisma.KampungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KampungPayload>
          }
          createMany: {
            args: Prisma.KampungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KampungCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KampungPayload>[]
          }
          delete: {
            args: Prisma.KampungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KampungPayload>
          }
          update: {
            args: Prisma.KampungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KampungPayload>
          }
          deleteMany: {
            args: Prisma.KampungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KampungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KampungUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KampungPayload>[]
          }
          upsert: {
            args: Prisma.KampungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KampungPayload>
          }
          aggregate: {
            args: Prisma.KampungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKampung>
          }
          groupBy: {
            args: Prisma.KampungGroupByArgs<ExtArgs>
            result: $Utils.Optional<KampungGroupByOutputType>[]
          }
          count: {
            args: Prisma.KampungCountArgs<ExtArgs>
            result: $Utils.Optional<KampungCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    ta?: TaOmit
    opd?: OpdOmit
    desk?: DeskOmit
    kegiatan?: KegiatanOmit
    subKegiatan?: SubKegiatanOmit
    usulan?: UsulanOmit
    satuan?: SatuanOmit
    distrik?: DistrikOmit
    kampung?: KampungOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tahunAnggaran: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tahunAnggaran?: boolean | UserCountOutputTypeCountTahunAnggaranArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTahunAnggaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaWhereInput
  }


  /**
   * Count Type OpdCountOutputType
   */

  export type OpdCountOutputType = {
    kegiatan: number
  }

  export type OpdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | OpdCountOutputTypeCountKegiatanArgs
  }

  // Custom InputTypes
  /**
   * OpdCountOutputType without action
   */
  export type OpdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpdCountOutputType
     */
    select?: OpdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpdCountOutputType without action
   */
  export type OpdCountOutputTypeCountKegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KegiatanWhereInput
  }


  /**
   * Count Type DeskCountOutputType
   */

  export type DeskCountOutputType = {
    opd: number
  }

  export type DeskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd?: boolean | DeskCountOutputTypeCountOpdArgs
  }

  // Custom InputTypes
  /**
   * DeskCountOutputType without action
   */
  export type DeskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeskCountOutputType
     */
    select?: DeskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeskCountOutputType without action
   */
  export type DeskCountOutputTypeCountOpdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpdWhereInput
  }


  /**
   * Count Type KegiatanCountOutputType
   */

  export type KegiatanCountOutputType = {
    subkegiatan: number
  }

  export type KegiatanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subkegiatan?: boolean | KegiatanCountOutputTypeCountSubkegiatanArgs
  }

  // Custom InputTypes
  /**
   * KegiatanCountOutputType without action
   */
  export type KegiatanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KegiatanCountOutputType
     */
    select?: KegiatanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KegiatanCountOutputType without action
   */
  export type KegiatanCountOutputTypeCountSubkegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubKegiatanWhereInput
  }


  /**
   * Count Type SubKegiatanCountOutputType
   */

  export type SubKegiatanCountOutputType = {
    usulan: number
  }

  export type SubKegiatanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usulan?: boolean | SubKegiatanCountOutputTypeCountUsulanArgs
  }

  // Custom InputTypes
  /**
   * SubKegiatanCountOutputType without action
   */
  export type SubKegiatanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatanCountOutputType
     */
    select?: SubKegiatanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubKegiatanCountOutputType without action
   */
  export type SubKegiatanCountOutputTypeCountUsulanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsulanWhereInput
  }


  /**
   * Count Type UsulanCountOutputType
   */

  export type UsulanCountOutputType = {
    satuan: number
  }

  export type UsulanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    satuan?: boolean | UsulanCountOutputTypeCountSatuanArgs
  }

  // Custom InputTypes
  /**
   * UsulanCountOutputType without action
   */
  export type UsulanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsulanCountOutputType
     */
    select?: UsulanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsulanCountOutputType without action
   */
  export type UsulanCountOutputTypeCountSatuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatuanWhereInput
  }


  /**
   * Count Type DistrikCountOutputType
   */

  export type DistrikCountOutputType = {
    kampung: number
  }

  export type DistrikCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kampung?: boolean | DistrikCountOutputTypeCountKampungArgs
  }

  // Custom InputTypes
  /**
   * DistrikCountOutputType without action
   */
  export type DistrikCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrikCountOutputType
     */
    select?: DistrikCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistrikCountOutputType without action
   */
  export type DistrikCountOutputTypeCountKampungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KampungWhereInput
  }


  /**
   * Count Type KampungCountOutputType
   */

  export type KampungCountOutputType = {
    usulan: number
  }

  export type KampungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usulan?: boolean | KampungCountOutputTypeCountUsulanArgs
  }

  // Custom InputTypes
  /**
   * KampungCountOutputType without action
   */
  export type KampungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KampungCountOutputType
     */
    select?: KampungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KampungCountOutputType without action
   */
  export type KampungCountOutputTypeCountUsulanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsulanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    distrikId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    distrikId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    password: string | null
    role: string | null
    distrikId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    password: string | null
    role: string | null
    distrikId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    username: number
    password: number
    role: number
    distrikId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    distrikId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    distrikId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    password?: true
    role?: true
    distrikId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    password?: true
    role?: true
    distrikId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    password?: true
    role?: true
    distrikId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    username: string
    password: string
    role: string
    distrikId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    distrikId?: boolean
    distrik?: boolean | User$distrikArgs<ExtArgs>
    tahunAnggaran?: boolean | User$tahunAnggaranArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    distrikId?: boolean
    distrik?: boolean | User$distrikArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    distrikId?: boolean
    distrik?: boolean | User$distrikArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    distrikId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "username" | "password" | "role" | "distrikId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distrik?: boolean | User$distrikArgs<ExtArgs>
    tahunAnggaran?: boolean | User$tahunAnggaranArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distrik?: boolean | User$distrikArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distrik?: boolean | User$distrikArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      distrik: Prisma.$DistrikPayload<ExtArgs> | null
      tahunAnggaran: Prisma.$TaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      username: string
      password: string
      role: string
      distrikId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    distrik<T extends User$distrikArgs<ExtArgs> = {}>(args?: Subset<T, User$distrikArgs<ExtArgs>>): Prisma__DistrikClient<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tahunAnggaran<T extends User$tahunAnggaranArgs<ExtArgs> = {}>(args?: Subset<T, User$tahunAnggaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly distrikId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.distrik
   */
  export type User$distrikArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
    where?: DistrikWhereInput
  }

  /**
   * User.tahunAnggaran
   */
  export type User$tahunAnggaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaInclude<ExtArgs> | null
    where?: TaWhereInput
    orderBy?: TaOrderByWithRelationInput | TaOrderByWithRelationInput[]
    cursor?: TaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaScalarFieldEnum | TaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Ta
   */

  export type AggregateTa = {
    _count: TaCountAggregateOutputType | null
    _avg: TaAvgAggregateOutputType | null
    _sum: TaSumAggregateOutputType | null
    _min: TaMinAggregateOutputType | null
    _max: TaMaxAggregateOutputType | null
  }

  export type TaAvgAggregateOutputType = {
    id: number | null
    tahun: number | null
    userId: number | null
  }

  export type TaSumAggregateOutputType = {
    id: number | null
    tahun: number | null
    userId: number | null
  }

  export type TaMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tahun: number | null
    userId: number | null
  }

  export type TaMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tahun: number | null
    userId: number | null
  }

  export type TaCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    tahun: number
    userId: number
    _all: number
  }


  export type TaAvgAggregateInputType = {
    id?: true
    tahun?: true
    userId?: true
  }

  export type TaSumAggregateInputType = {
    id?: true
    tahun?: true
    userId?: true
  }

  export type TaMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    tahun?: true
    userId?: true
  }

  export type TaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    tahun?: true
    userId?: true
  }

  export type TaCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    tahun?: true
    userId?: true
    _all?: true
  }

  export type TaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ta to aggregate.
     */
    where?: TaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tas to fetch.
     */
    orderBy?: TaOrderByWithRelationInput | TaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tas
    **/
    _count?: true | TaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaMaxAggregateInputType
  }

  export type GetTaAggregateType<T extends TaAggregateArgs> = {
        [P in keyof T & keyof AggregateTa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTa[P]>
      : GetScalarType<T[P], AggregateTa[P]>
  }




  export type TaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaWhereInput
    orderBy?: TaOrderByWithAggregationInput | TaOrderByWithAggregationInput[]
    by: TaScalarFieldEnum[] | TaScalarFieldEnum
    having?: TaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaCountAggregateInputType | true
    _avg?: TaAvgAggregateInputType
    _sum?: TaSumAggregateInputType
    _min?: TaMinAggregateInputType
    _max?: TaMaxAggregateInputType
  }

  export type TaGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    tahun: number
    userId: number
    _count: TaCountAggregateOutputType | null
    _avg: TaAvgAggregateOutputType | null
    _sum: TaSumAggregateOutputType | null
    _min: TaMinAggregateOutputType | null
    _max: TaMaxAggregateOutputType | null
  }

  type GetTaGroupByPayload<T extends TaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaGroupByOutputType[P]>
            : GetScalarType<T[P], TaGroupByOutputType[P]>
        }
      >
    >


  export type TaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tahun?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ta"]>

  export type TaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tahun?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ta"]>

  export type TaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tahun?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ta"]>

  export type TaSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tahun?: boolean
    userId?: boolean
  }

  export type TaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "tahun" | "userId", ExtArgs["result"]["ta"]>
  export type TaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ta"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      tahun: number
      userId: number
    }, ExtArgs["result"]["ta"]>
    composites: {}
  }

  type TaGetPayload<S extends boolean | null | undefined | TaDefaultArgs> = $Result.GetResult<Prisma.$TaPayload, S>

  type TaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaCountAggregateInputType | true
    }

  export interface TaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ta'], meta: { name: 'Ta' } }
    /**
     * Find zero or one Ta that matches the filter.
     * @param {TaFindUniqueArgs} args - Arguments to find a Ta
     * @example
     * // Get one Ta
     * const ta = await prisma.ta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaFindUniqueArgs>(args: SelectSubset<T, TaFindUniqueArgs<ExtArgs>>): Prisma__TaClient<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaFindUniqueOrThrowArgs} args - Arguments to find a Ta
     * @example
     * // Get one Ta
     * const ta = await prisma.ta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaFindUniqueOrThrowArgs>(args: SelectSubset<T, TaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaClient<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaFindFirstArgs} args - Arguments to find a Ta
     * @example
     * // Get one Ta
     * const ta = await prisma.ta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaFindFirstArgs>(args?: SelectSubset<T, TaFindFirstArgs<ExtArgs>>): Prisma__TaClient<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaFindFirstOrThrowArgs} args - Arguments to find a Ta
     * @example
     * // Get one Ta
     * const ta = await prisma.ta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaFindFirstOrThrowArgs>(args?: SelectSubset<T, TaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaClient<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tas
     * const tas = await prisma.ta.findMany()
     * 
     * // Get first 10 Tas
     * const tas = await prisma.ta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taWithIdOnly = await prisma.ta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaFindManyArgs>(args?: SelectSubset<T, TaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ta.
     * @param {TaCreateArgs} args - Arguments to create a Ta.
     * @example
     * // Create one Ta
     * const Ta = await prisma.ta.create({
     *   data: {
     *     // ... data to create a Ta
     *   }
     * })
     * 
     */
    create<T extends TaCreateArgs>(args: SelectSubset<T, TaCreateArgs<ExtArgs>>): Prisma__TaClient<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tas.
     * @param {TaCreateManyArgs} args - Arguments to create many Tas.
     * @example
     * // Create many Tas
     * const ta = await prisma.ta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaCreateManyArgs>(args?: SelectSubset<T, TaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tas and returns the data saved in the database.
     * @param {TaCreateManyAndReturnArgs} args - Arguments to create many Tas.
     * @example
     * // Create many Tas
     * const ta = await prisma.ta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tas and only return the `id`
     * const taWithIdOnly = await prisma.ta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaCreateManyAndReturnArgs>(args?: SelectSubset<T, TaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ta.
     * @param {TaDeleteArgs} args - Arguments to delete one Ta.
     * @example
     * // Delete one Ta
     * const Ta = await prisma.ta.delete({
     *   where: {
     *     // ... filter to delete one Ta
     *   }
     * })
     * 
     */
    delete<T extends TaDeleteArgs>(args: SelectSubset<T, TaDeleteArgs<ExtArgs>>): Prisma__TaClient<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ta.
     * @param {TaUpdateArgs} args - Arguments to update one Ta.
     * @example
     * // Update one Ta
     * const ta = await prisma.ta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaUpdateArgs>(args: SelectSubset<T, TaUpdateArgs<ExtArgs>>): Prisma__TaClient<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tas.
     * @param {TaDeleteManyArgs} args - Arguments to filter Tas to delete.
     * @example
     * // Delete a few Tas
     * const { count } = await prisma.ta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaDeleteManyArgs>(args?: SelectSubset<T, TaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tas
     * const ta = await prisma.ta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaUpdateManyArgs>(args: SelectSubset<T, TaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tas and returns the data updated in the database.
     * @param {TaUpdateManyAndReturnArgs} args - Arguments to update many Tas.
     * @example
     * // Update many Tas
     * const ta = await prisma.ta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tas and only return the `id`
     * const taWithIdOnly = await prisma.ta.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaUpdateManyAndReturnArgs>(args: SelectSubset<T, TaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ta.
     * @param {TaUpsertArgs} args - Arguments to update or create a Ta.
     * @example
     * // Update or create a Ta
     * const ta = await prisma.ta.upsert({
     *   create: {
     *     // ... data to create a Ta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ta we want to update
     *   }
     * })
     */
    upsert<T extends TaUpsertArgs>(args: SelectSubset<T, TaUpsertArgs<ExtArgs>>): Prisma__TaClient<$Result.GetResult<Prisma.$TaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaCountArgs} args - Arguments to filter Tas to count.
     * @example
     * // Count the number of Tas
     * const count = await prisma.ta.count({
     *   where: {
     *     // ... the filter for the Tas we want to count
     *   }
     * })
    **/
    count<T extends TaCountArgs>(
      args?: Subset<T, TaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaAggregateArgs>(args: Subset<T, TaAggregateArgs>): Prisma.PrismaPromise<GetTaAggregateType<T>>

    /**
     * Group by Ta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaGroupByArgs} args - Group by arguments.
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
      T extends TaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaGroupByArgs['orderBy'] }
        : { orderBy?: TaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ta model
   */
  readonly fields: TaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ta model
   */
  interface TaFieldRefs {
    readonly id: FieldRef<"Ta", 'Int'>
    readonly createdAt: FieldRef<"Ta", 'DateTime'>
    readonly updatedAt: FieldRef<"Ta", 'DateTime'>
    readonly tahun: FieldRef<"Ta", 'Int'>
    readonly userId: FieldRef<"Ta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ta findUnique
   */
  export type TaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaInclude<ExtArgs> | null
    /**
     * Filter, which Ta to fetch.
     */
    where: TaWhereUniqueInput
  }

  /**
   * Ta findUniqueOrThrow
   */
  export type TaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaInclude<ExtArgs> | null
    /**
     * Filter, which Ta to fetch.
     */
    where: TaWhereUniqueInput
  }

  /**
   * Ta findFirst
   */
  export type TaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaInclude<ExtArgs> | null
    /**
     * Filter, which Ta to fetch.
     */
    where?: TaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tas to fetch.
     */
    orderBy?: TaOrderByWithRelationInput | TaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tas.
     */
    cursor?: TaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tas.
     */
    distinct?: TaScalarFieldEnum | TaScalarFieldEnum[]
  }

  /**
   * Ta findFirstOrThrow
   */
  export type TaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaInclude<ExtArgs> | null
    /**
     * Filter, which Ta to fetch.
     */
    where?: TaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tas to fetch.
     */
    orderBy?: TaOrderByWithRelationInput | TaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tas.
     */
    cursor?: TaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tas.
     */
    distinct?: TaScalarFieldEnum | TaScalarFieldEnum[]
  }

  /**
   * Ta findMany
   */
  export type TaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaInclude<ExtArgs> | null
    /**
     * Filter, which Tas to fetch.
     */
    where?: TaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tas to fetch.
     */
    orderBy?: TaOrderByWithRelationInput | TaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tas.
     */
    cursor?: TaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tas.
     */
    skip?: number
    distinct?: TaScalarFieldEnum | TaScalarFieldEnum[]
  }

  /**
   * Ta create
   */
  export type TaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaInclude<ExtArgs> | null
    /**
     * The data needed to create a Ta.
     */
    data: XOR<TaCreateInput, TaUncheckedCreateInput>
  }

  /**
   * Ta createMany
   */
  export type TaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tas.
     */
    data: TaCreateManyInput | TaCreateManyInput[]
  }

  /**
   * Ta createManyAndReturn
   */
  export type TaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * The data used to create many Tas.
     */
    data: TaCreateManyInput | TaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ta update
   */
  export type TaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaInclude<ExtArgs> | null
    /**
     * The data needed to update a Ta.
     */
    data: XOR<TaUpdateInput, TaUncheckedUpdateInput>
    /**
     * Choose, which Ta to update.
     */
    where: TaWhereUniqueInput
  }

  /**
   * Ta updateMany
   */
  export type TaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tas.
     */
    data: XOR<TaUpdateManyMutationInput, TaUncheckedUpdateManyInput>
    /**
     * Filter which Tas to update
     */
    where?: TaWhereInput
    /**
     * Limit how many Tas to update.
     */
    limit?: number
  }

  /**
   * Ta updateManyAndReturn
   */
  export type TaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * The data used to update Tas.
     */
    data: XOR<TaUpdateManyMutationInput, TaUncheckedUpdateManyInput>
    /**
     * Filter which Tas to update
     */
    where?: TaWhereInput
    /**
     * Limit how many Tas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ta upsert
   */
  export type TaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaInclude<ExtArgs> | null
    /**
     * The filter to search for the Ta to update in case it exists.
     */
    where: TaWhereUniqueInput
    /**
     * In case the Ta found by the `where` argument doesn't exist, create a new Ta with this data.
     */
    create: XOR<TaCreateInput, TaUncheckedCreateInput>
    /**
     * In case the Ta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaUpdateInput, TaUncheckedUpdateInput>
  }

  /**
   * Ta delete
   */
  export type TaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaInclude<ExtArgs> | null
    /**
     * Filter which Ta to delete.
     */
    where: TaWhereUniqueInput
  }

  /**
   * Ta deleteMany
   */
  export type TaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tas to delete
     */
    where?: TaWhereInput
    /**
     * Limit how many Tas to delete.
     */
    limit?: number
  }

  /**
   * Ta without action
   */
  export type TaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ta
     */
    select?: TaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ta
     */
    omit?: TaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaInclude<ExtArgs> | null
  }


  /**
   * Model Opd
   */

  export type AggregateOpd = {
    _count: OpdCountAggregateOutputType | null
    _avg: OpdAvgAggregateOutputType | null
    _sum: OpdSumAggregateOutputType | null
    _min: OpdMinAggregateOutputType | null
    _max: OpdMaxAggregateOutputType | null
  }

  export type OpdAvgAggregateOutputType = {
    id: number | null
    deskId: number | null
  }

  export type OpdSumAggregateOutputType = {
    id: number | null
    deskId: number | null
  }

  export type OpdMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaOpd: string | null
    urusan: string | null
    kodeUrusan: string | null
    deskId: number | null
  }

  export type OpdMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaOpd: string | null
    urusan: string | null
    kodeUrusan: string | null
    deskId: number | null
  }

  export type OpdCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    namaOpd: number
    urusan: number
    kodeUrusan: number
    deskId: number
    _all: number
  }


  export type OpdAvgAggregateInputType = {
    id?: true
    deskId?: true
  }

  export type OpdSumAggregateInputType = {
    id?: true
    deskId?: true
  }

  export type OpdMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaOpd?: true
    urusan?: true
    kodeUrusan?: true
    deskId?: true
  }

  export type OpdMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaOpd?: true
    urusan?: true
    kodeUrusan?: true
    deskId?: true
  }

  export type OpdCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaOpd?: true
    urusan?: true
    kodeUrusan?: true
    deskId?: true
    _all?: true
  }

  export type OpdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opd to aggregate.
     */
    where?: OpdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opds to fetch.
     */
    orderBy?: OpdOrderByWithRelationInput | OpdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Opds
    **/
    _count?: true | OpdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpdMaxAggregateInputType
  }

  export type GetOpdAggregateType<T extends OpdAggregateArgs> = {
        [P in keyof T & keyof AggregateOpd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpd[P]>
      : GetScalarType<T[P], AggregateOpd[P]>
  }




  export type OpdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpdWhereInput
    orderBy?: OpdOrderByWithAggregationInput | OpdOrderByWithAggregationInput[]
    by: OpdScalarFieldEnum[] | OpdScalarFieldEnum
    having?: OpdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpdCountAggregateInputType | true
    _avg?: OpdAvgAggregateInputType
    _sum?: OpdSumAggregateInputType
    _min?: OpdMinAggregateInputType
    _max?: OpdMaxAggregateInputType
  }

  export type OpdGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    namaOpd: string
    urusan: string
    kodeUrusan: string
    deskId: number
    _count: OpdCountAggregateOutputType | null
    _avg: OpdAvgAggregateOutputType | null
    _sum: OpdSumAggregateOutputType | null
    _min: OpdMinAggregateOutputType | null
    _max: OpdMaxAggregateOutputType | null
  }

  type GetOpdGroupByPayload<T extends OpdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpdGroupByOutputType[P]>
            : GetScalarType<T[P], OpdGroupByOutputType[P]>
        }
      >
    >


  export type OpdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaOpd?: boolean
    urusan?: boolean
    kodeUrusan?: boolean
    deskId?: boolean
    kegiatan?: boolean | Opd$kegiatanArgs<ExtArgs>
    desk?: boolean | DeskDefaultArgs<ExtArgs>
    _count?: boolean | OpdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opd"]>

  export type OpdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaOpd?: boolean
    urusan?: boolean
    kodeUrusan?: boolean
    deskId?: boolean
    desk?: boolean | DeskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opd"]>

  export type OpdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaOpd?: boolean
    urusan?: boolean
    kodeUrusan?: boolean
    deskId?: boolean
    desk?: boolean | DeskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opd"]>

  export type OpdSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaOpd?: boolean
    urusan?: boolean
    kodeUrusan?: boolean
    deskId?: boolean
  }

  export type OpdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "namaOpd" | "urusan" | "kodeUrusan" | "deskId", ExtArgs["result"]["opd"]>
  export type OpdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | Opd$kegiatanArgs<ExtArgs>
    desk?: boolean | DeskDefaultArgs<ExtArgs>
    _count?: boolean | OpdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OpdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desk?: boolean | DeskDefaultArgs<ExtArgs>
  }
  export type OpdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desk?: boolean | DeskDefaultArgs<ExtArgs>
  }

  export type $OpdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opd"
    objects: {
      kegiatan: Prisma.$KegiatanPayload<ExtArgs>[]
      desk: Prisma.$DeskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      namaOpd: string
      urusan: string
      kodeUrusan: string
      deskId: number
    }, ExtArgs["result"]["opd"]>
    composites: {}
  }

  type OpdGetPayload<S extends boolean | null | undefined | OpdDefaultArgs> = $Result.GetResult<Prisma.$OpdPayload, S>

  type OpdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpdCountAggregateInputType | true
    }

  export interface OpdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Opd'], meta: { name: 'Opd' } }
    /**
     * Find zero or one Opd that matches the filter.
     * @param {OpdFindUniqueArgs} args - Arguments to find a Opd
     * @example
     * // Get one Opd
     * const opd = await prisma.opd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpdFindUniqueArgs>(args: SelectSubset<T, OpdFindUniqueArgs<ExtArgs>>): Prisma__OpdClient<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpdFindUniqueOrThrowArgs} args - Arguments to find a Opd
     * @example
     * // Get one Opd
     * const opd = await prisma.opd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpdFindUniqueOrThrowArgs>(args: SelectSubset<T, OpdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpdClient<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpdFindFirstArgs} args - Arguments to find a Opd
     * @example
     * // Get one Opd
     * const opd = await prisma.opd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpdFindFirstArgs>(args?: SelectSubset<T, OpdFindFirstArgs<ExtArgs>>): Prisma__OpdClient<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpdFindFirstOrThrowArgs} args - Arguments to find a Opd
     * @example
     * // Get one Opd
     * const opd = await prisma.opd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpdFindFirstOrThrowArgs>(args?: SelectSubset<T, OpdFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpdClient<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Opds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opds
     * const opds = await prisma.opd.findMany()
     * 
     * // Get first 10 Opds
     * const opds = await prisma.opd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opdWithIdOnly = await prisma.opd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpdFindManyArgs>(args?: SelectSubset<T, OpdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opd.
     * @param {OpdCreateArgs} args - Arguments to create a Opd.
     * @example
     * // Create one Opd
     * const Opd = await prisma.opd.create({
     *   data: {
     *     // ... data to create a Opd
     *   }
     * })
     * 
     */
    create<T extends OpdCreateArgs>(args: SelectSubset<T, OpdCreateArgs<ExtArgs>>): Prisma__OpdClient<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Opds.
     * @param {OpdCreateManyArgs} args - Arguments to create many Opds.
     * @example
     * // Create many Opds
     * const opd = await prisma.opd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpdCreateManyArgs>(args?: SelectSubset<T, OpdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opds and returns the data saved in the database.
     * @param {OpdCreateManyAndReturnArgs} args - Arguments to create many Opds.
     * @example
     * // Create many Opds
     * const opd = await prisma.opd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opds and only return the `id`
     * const opdWithIdOnly = await prisma.opd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpdCreateManyAndReturnArgs>(args?: SelectSubset<T, OpdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opd.
     * @param {OpdDeleteArgs} args - Arguments to delete one Opd.
     * @example
     * // Delete one Opd
     * const Opd = await prisma.opd.delete({
     *   where: {
     *     // ... filter to delete one Opd
     *   }
     * })
     * 
     */
    delete<T extends OpdDeleteArgs>(args: SelectSubset<T, OpdDeleteArgs<ExtArgs>>): Prisma__OpdClient<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opd.
     * @param {OpdUpdateArgs} args - Arguments to update one Opd.
     * @example
     * // Update one Opd
     * const opd = await prisma.opd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpdUpdateArgs>(args: SelectSubset<T, OpdUpdateArgs<ExtArgs>>): Prisma__OpdClient<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Opds.
     * @param {OpdDeleteManyArgs} args - Arguments to filter Opds to delete.
     * @example
     * // Delete a few Opds
     * const { count } = await prisma.opd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpdDeleteManyArgs>(args?: SelectSubset<T, OpdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opds
     * const opd = await prisma.opd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpdUpdateManyArgs>(args: SelectSubset<T, OpdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opds and returns the data updated in the database.
     * @param {OpdUpdateManyAndReturnArgs} args - Arguments to update many Opds.
     * @example
     * // Update many Opds
     * const opd = await prisma.opd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opds and only return the `id`
     * const opdWithIdOnly = await prisma.opd.updateManyAndReturn({
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
    updateManyAndReturn<T extends OpdUpdateManyAndReturnArgs>(args: SelectSubset<T, OpdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opd.
     * @param {OpdUpsertArgs} args - Arguments to update or create a Opd.
     * @example
     * // Update or create a Opd
     * const opd = await prisma.opd.upsert({
     *   create: {
     *     // ... data to create a Opd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opd we want to update
     *   }
     * })
     */
    upsert<T extends OpdUpsertArgs>(args: SelectSubset<T, OpdUpsertArgs<ExtArgs>>): Prisma__OpdClient<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Opds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpdCountArgs} args - Arguments to filter Opds to count.
     * @example
     * // Count the number of Opds
     * const count = await prisma.opd.count({
     *   where: {
     *     // ... the filter for the Opds we want to count
     *   }
     * })
    **/
    count<T extends OpdCountArgs>(
      args?: Subset<T, OpdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpdAggregateArgs>(args: Subset<T, OpdAggregateArgs>): Prisma.PrismaPromise<GetOpdAggregateType<T>>

    /**
     * Group by Opd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpdGroupByArgs} args - Group by arguments.
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
      T extends OpdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpdGroupByArgs['orderBy'] }
        : { orderBy?: OpdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Opd model
   */
  readonly fields: OpdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Opd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kegiatan<T extends Opd$kegiatanArgs<ExtArgs> = {}>(args?: Subset<T, Opd$kegiatanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    desk<T extends DeskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeskDefaultArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Opd model
   */
  interface OpdFieldRefs {
    readonly id: FieldRef<"Opd", 'Int'>
    readonly createdAt: FieldRef<"Opd", 'DateTime'>
    readonly updatedAt: FieldRef<"Opd", 'DateTime'>
    readonly namaOpd: FieldRef<"Opd", 'String'>
    readonly urusan: FieldRef<"Opd", 'String'>
    readonly kodeUrusan: FieldRef<"Opd", 'String'>
    readonly deskId: FieldRef<"Opd", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Opd findUnique
   */
  export type OpdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdInclude<ExtArgs> | null
    /**
     * Filter, which Opd to fetch.
     */
    where: OpdWhereUniqueInput
  }

  /**
   * Opd findUniqueOrThrow
   */
  export type OpdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdInclude<ExtArgs> | null
    /**
     * Filter, which Opd to fetch.
     */
    where: OpdWhereUniqueInput
  }

  /**
   * Opd findFirst
   */
  export type OpdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdInclude<ExtArgs> | null
    /**
     * Filter, which Opd to fetch.
     */
    where?: OpdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opds to fetch.
     */
    orderBy?: OpdOrderByWithRelationInput | OpdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opds.
     */
    cursor?: OpdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opds.
     */
    distinct?: OpdScalarFieldEnum | OpdScalarFieldEnum[]
  }

  /**
   * Opd findFirstOrThrow
   */
  export type OpdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdInclude<ExtArgs> | null
    /**
     * Filter, which Opd to fetch.
     */
    where?: OpdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opds to fetch.
     */
    orderBy?: OpdOrderByWithRelationInput | OpdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opds.
     */
    cursor?: OpdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opds.
     */
    distinct?: OpdScalarFieldEnum | OpdScalarFieldEnum[]
  }

  /**
   * Opd findMany
   */
  export type OpdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdInclude<ExtArgs> | null
    /**
     * Filter, which Opds to fetch.
     */
    where?: OpdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opds to fetch.
     */
    orderBy?: OpdOrderByWithRelationInput | OpdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Opds.
     */
    cursor?: OpdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opds.
     */
    skip?: number
    distinct?: OpdScalarFieldEnum | OpdScalarFieldEnum[]
  }

  /**
   * Opd create
   */
  export type OpdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdInclude<ExtArgs> | null
    /**
     * The data needed to create a Opd.
     */
    data: XOR<OpdCreateInput, OpdUncheckedCreateInput>
  }

  /**
   * Opd createMany
   */
  export type OpdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Opds.
     */
    data: OpdCreateManyInput | OpdCreateManyInput[]
  }

  /**
   * Opd createManyAndReturn
   */
  export type OpdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * The data used to create many Opds.
     */
    data: OpdCreateManyInput | OpdCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Opd update
   */
  export type OpdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdInclude<ExtArgs> | null
    /**
     * The data needed to update a Opd.
     */
    data: XOR<OpdUpdateInput, OpdUncheckedUpdateInput>
    /**
     * Choose, which Opd to update.
     */
    where: OpdWhereUniqueInput
  }

  /**
   * Opd updateMany
   */
  export type OpdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Opds.
     */
    data: XOR<OpdUpdateManyMutationInput, OpdUncheckedUpdateManyInput>
    /**
     * Filter which Opds to update
     */
    where?: OpdWhereInput
    /**
     * Limit how many Opds to update.
     */
    limit?: number
  }

  /**
   * Opd updateManyAndReturn
   */
  export type OpdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * The data used to update Opds.
     */
    data: XOR<OpdUpdateManyMutationInput, OpdUncheckedUpdateManyInput>
    /**
     * Filter which Opds to update
     */
    where?: OpdWhereInput
    /**
     * Limit how many Opds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Opd upsert
   */
  export type OpdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdInclude<ExtArgs> | null
    /**
     * The filter to search for the Opd to update in case it exists.
     */
    where: OpdWhereUniqueInput
    /**
     * In case the Opd found by the `where` argument doesn't exist, create a new Opd with this data.
     */
    create: XOR<OpdCreateInput, OpdUncheckedCreateInput>
    /**
     * In case the Opd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpdUpdateInput, OpdUncheckedUpdateInput>
  }

  /**
   * Opd delete
   */
  export type OpdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdInclude<ExtArgs> | null
    /**
     * Filter which Opd to delete.
     */
    where: OpdWhereUniqueInput
  }

  /**
   * Opd deleteMany
   */
  export type OpdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opds to delete
     */
    where?: OpdWhereInput
    /**
     * Limit how many Opds to delete.
     */
    limit?: number
  }

  /**
   * Opd.kegiatan
   */
  export type Opd$kegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    where?: KegiatanWhereInput
    orderBy?: KegiatanOrderByWithRelationInput | KegiatanOrderByWithRelationInput[]
    cursor?: KegiatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * Opd without action
   */
  export type OpdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdInclude<ExtArgs> | null
  }


  /**
   * Model Desk
   */

  export type AggregateDesk = {
    _count: DeskCountAggregateOutputType | null
    _avg: DeskAvgAggregateOutputType | null
    _sum: DeskSumAggregateOutputType | null
    _min: DeskMinAggregateOutputType | null
    _max: DeskMaxAggregateOutputType | null
  }

  export type DeskAvgAggregateOutputType = {
    id: number | null
  }

  export type DeskSumAggregateOutputType = {
    id: number | null
  }

  export type DeskMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaDesk: string | null
  }

  export type DeskMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaDesk: string | null
  }

  export type DeskCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    namaDesk: number
    _all: number
  }


  export type DeskAvgAggregateInputType = {
    id?: true
  }

  export type DeskSumAggregateInputType = {
    id?: true
  }

  export type DeskMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaDesk?: true
  }

  export type DeskMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaDesk?: true
  }

  export type DeskCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaDesk?: true
    _all?: true
  }

  export type DeskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Desk to aggregate.
     */
    where?: DeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desks to fetch.
     */
    orderBy?: DeskOrderByWithRelationInput | DeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Desks
    **/
    _count?: true | DeskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeskMaxAggregateInputType
  }

  export type GetDeskAggregateType<T extends DeskAggregateArgs> = {
        [P in keyof T & keyof AggregateDesk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesk[P]>
      : GetScalarType<T[P], AggregateDesk[P]>
  }




  export type DeskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeskWhereInput
    orderBy?: DeskOrderByWithAggregationInput | DeskOrderByWithAggregationInput[]
    by: DeskScalarFieldEnum[] | DeskScalarFieldEnum
    having?: DeskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeskCountAggregateInputType | true
    _avg?: DeskAvgAggregateInputType
    _sum?: DeskSumAggregateInputType
    _min?: DeskMinAggregateInputType
    _max?: DeskMaxAggregateInputType
  }

  export type DeskGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    namaDesk: string
    _count: DeskCountAggregateOutputType | null
    _avg: DeskAvgAggregateOutputType | null
    _sum: DeskSumAggregateOutputType | null
    _min: DeskMinAggregateOutputType | null
    _max: DeskMaxAggregateOutputType | null
  }

  type GetDeskGroupByPayload<T extends DeskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeskGroupByOutputType[P]>
            : GetScalarType<T[P], DeskGroupByOutputType[P]>
        }
      >
    >


  export type DeskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaDesk?: boolean
    opd?: boolean | Desk$opdArgs<ExtArgs>
    _count?: boolean | DeskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["desk"]>

  export type DeskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaDesk?: boolean
  }, ExtArgs["result"]["desk"]>

  export type DeskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaDesk?: boolean
  }, ExtArgs["result"]["desk"]>

  export type DeskSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaDesk?: boolean
  }

  export type DeskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "namaDesk", ExtArgs["result"]["desk"]>
  export type DeskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd?: boolean | Desk$opdArgs<ExtArgs>
    _count?: boolean | DeskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DeskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Desk"
    objects: {
      opd: Prisma.$OpdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      namaDesk: string
    }, ExtArgs["result"]["desk"]>
    composites: {}
  }

  type DeskGetPayload<S extends boolean | null | undefined | DeskDefaultArgs> = $Result.GetResult<Prisma.$DeskPayload, S>

  type DeskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeskCountAggregateInputType | true
    }

  export interface DeskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Desk'], meta: { name: 'Desk' } }
    /**
     * Find zero or one Desk that matches the filter.
     * @param {DeskFindUniqueArgs} args - Arguments to find a Desk
     * @example
     * // Get one Desk
     * const desk = await prisma.desk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeskFindUniqueArgs>(args: SelectSubset<T, DeskFindUniqueArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Desk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeskFindUniqueOrThrowArgs} args - Arguments to find a Desk
     * @example
     * // Get one Desk
     * const desk = await prisma.desk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeskFindUniqueOrThrowArgs>(args: SelectSubset<T, DeskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Desk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskFindFirstArgs} args - Arguments to find a Desk
     * @example
     * // Get one Desk
     * const desk = await prisma.desk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeskFindFirstArgs>(args?: SelectSubset<T, DeskFindFirstArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Desk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskFindFirstOrThrowArgs} args - Arguments to find a Desk
     * @example
     * // Get one Desk
     * const desk = await prisma.desk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeskFindFirstOrThrowArgs>(args?: SelectSubset<T, DeskFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Desks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Desks
     * const desks = await prisma.desk.findMany()
     * 
     * // Get first 10 Desks
     * const desks = await prisma.desk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deskWithIdOnly = await prisma.desk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeskFindManyArgs>(args?: SelectSubset<T, DeskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Desk.
     * @param {DeskCreateArgs} args - Arguments to create a Desk.
     * @example
     * // Create one Desk
     * const Desk = await prisma.desk.create({
     *   data: {
     *     // ... data to create a Desk
     *   }
     * })
     * 
     */
    create<T extends DeskCreateArgs>(args: SelectSubset<T, DeskCreateArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Desks.
     * @param {DeskCreateManyArgs} args - Arguments to create many Desks.
     * @example
     * // Create many Desks
     * const desk = await prisma.desk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeskCreateManyArgs>(args?: SelectSubset<T, DeskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Desks and returns the data saved in the database.
     * @param {DeskCreateManyAndReturnArgs} args - Arguments to create many Desks.
     * @example
     * // Create many Desks
     * const desk = await prisma.desk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Desks and only return the `id`
     * const deskWithIdOnly = await prisma.desk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeskCreateManyAndReturnArgs>(args?: SelectSubset<T, DeskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Desk.
     * @param {DeskDeleteArgs} args - Arguments to delete one Desk.
     * @example
     * // Delete one Desk
     * const Desk = await prisma.desk.delete({
     *   where: {
     *     // ... filter to delete one Desk
     *   }
     * })
     * 
     */
    delete<T extends DeskDeleteArgs>(args: SelectSubset<T, DeskDeleteArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Desk.
     * @param {DeskUpdateArgs} args - Arguments to update one Desk.
     * @example
     * // Update one Desk
     * const desk = await prisma.desk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeskUpdateArgs>(args: SelectSubset<T, DeskUpdateArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Desks.
     * @param {DeskDeleteManyArgs} args - Arguments to filter Desks to delete.
     * @example
     * // Delete a few Desks
     * const { count } = await prisma.desk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeskDeleteManyArgs>(args?: SelectSubset<T, DeskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Desks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Desks
     * const desk = await prisma.desk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeskUpdateManyArgs>(args: SelectSubset<T, DeskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Desks and returns the data updated in the database.
     * @param {DeskUpdateManyAndReturnArgs} args - Arguments to update many Desks.
     * @example
     * // Update many Desks
     * const desk = await prisma.desk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Desks and only return the `id`
     * const deskWithIdOnly = await prisma.desk.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeskUpdateManyAndReturnArgs>(args: SelectSubset<T, DeskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Desk.
     * @param {DeskUpsertArgs} args - Arguments to update or create a Desk.
     * @example
     * // Update or create a Desk
     * const desk = await prisma.desk.upsert({
     *   create: {
     *     // ... data to create a Desk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Desk we want to update
     *   }
     * })
     */
    upsert<T extends DeskUpsertArgs>(args: SelectSubset<T, DeskUpsertArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Desks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskCountArgs} args - Arguments to filter Desks to count.
     * @example
     * // Count the number of Desks
     * const count = await prisma.desk.count({
     *   where: {
     *     // ... the filter for the Desks we want to count
     *   }
     * })
    **/
    count<T extends DeskCountArgs>(
      args?: Subset<T, DeskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Desk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeskAggregateArgs>(args: Subset<T, DeskAggregateArgs>): Prisma.PrismaPromise<GetDeskAggregateType<T>>

    /**
     * Group by Desk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskGroupByArgs} args - Group by arguments.
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
      T extends DeskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeskGroupByArgs['orderBy'] }
        : { orderBy?: DeskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Desk model
   */
  readonly fields: DeskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Desk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    opd<T extends Desk$opdArgs<ExtArgs> = {}>(args?: Subset<T, Desk$opdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Desk model
   */
  interface DeskFieldRefs {
    readonly id: FieldRef<"Desk", 'Int'>
    readonly createdAt: FieldRef<"Desk", 'DateTime'>
    readonly updatedAt: FieldRef<"Desk", 'DateTime'>
    readonly namaDesk: FieldRef<"Desk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Desk findUnique
   */
  export type DeskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter, which Desk to fetch.
     */
    where: DeskWhereUniqueInput
  }

  /**
   * Desk findUniqueOrThrow
   */
  export type DeskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter, which Desk to fetch.
     */
    where: DeskWhereUniqueInput
  }

  /**
   * Desk findFirst
   */
  export type DeskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter, which Desk to fetch.
     */
    where?: DeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desks to fetch.
     */
    orderBy?: DeskOrderByWithRelationInput | DeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Desks.
     */
    cursor?: DeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Desks.
     */
    distinct?: DeskScalarFieldEnum | DeskScalarFieldEnum[]
  }

  /**
   * Desk findFirstOrThrow
   */
  export type DeskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter, which Desk to fetch.
     */
    where?: DeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desks to fetch.
     */
    orderBy?: DeskOrderByWithRelationInput | DeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Desks.
     */
    cursor?: DeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Desks.
     */
    distinct?: DeskScalarFieldEnum | DeskScalarFieldEnum[]
  }

  /**
   * Desk findMany
   */
  export type DeskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter, which Desks to fetch.
     */
    where?: DeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desks to fetch.
     */
    orderBy?: DeskOrderByWithRelationInput | DeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Desks.
     */
    cursor?: DeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desks.
     */
    skip?: number
    distinct?: DeskScalarFieldEnum | DeskScalarFieldEnum[]
  }

  /**
   * Desk create
   */
  export type DeskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * The data needed to create a Desk.
     */
    data: XOR<DeskCreateInput, DeskUncheckedCreateInput>
  }

  /**
   * Desk createMany
   */
  export type DeskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Desks.
     */
    data: DeskCreateManyInput | DeskCreateManyInput[]
  }

  /**
   * Desk createManyAndReturn
   */
  export type DeskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * The data used to create many Desks.
     */
    data: DeskCreateManyInput | DeskCreateManyInput[]
  }

  /**
   * Desk update
   */
  export type DeskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * The data needed to update a Desk.
     */
    data: XOR<DeskUpdateInput, DeskUncheckedUpdateInput>
    /**
     * Choose, which Desk to update.
     */
    where: DeskWhereUniqueInput
  }

  /**
   * Desk updateMany
   */
  export type DeskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Desks.
     */
    data: XOR<DeskUpdateManyMutationInput, DeskUncheckedUpdateManyInput>
    /**
     * Filter which Desks to update
     */
    where?: DeskWhereInput
    /**
     * Limit how many Desks to update.
     */
    limit?: number
  }

  /**
   * Desk updateManyAndReturn
   */
  export type DeskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * The data used to update Desks.
     */
    data: XOR<DeskUpdateManyMutationInput, DeskUncheckedUpdateManyInput>
    /**
     * Filter which Desks to update
     */
    where?: DeskWhereInput
    /**
     * Limit how many Desks to update.
     */
    limit?: number
  }

  /**
   * Desk upsert
   */
  export type DeskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * The filter to search for the Desk to update in case it exists.
     */
    where: DeskWhereUniqueInput
    /**
     * In case the Desk found by the `where` argument doesn't exist, create a new Desk with this data.
     */
    create: XOR<DeskCreateInput, DeskUncheckedCreateInput>
    /**
     * In case the Desk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeskUpdateInput, DeskUncheckedUpdateInput>
  }

  /**
   * Desk delete
   */
  export type DeskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter which Desk to delete.
     */
    where: DeskWhereUniqueInput
  }

  /**
   * Desk deleteMany
   */
  export type DeskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Desks to delete
     */
    where?: DeskWhereInput
    /**
     * Limit how many Desks to delete.
     */
    limit?: number
  }

  /**
   * Desk.opd
   */
  export type Desk$opdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opd
     */
    select?: OpdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opd
     */
    omit?: OpdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpdInclude<ExtArgs> | null
    where?: OpdWhereInput
    orderBy?: OpdOrderByWithRelationInput | OpdOrderByWithRelationInput[]
    cursor?: OpdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpdScalarFieldEnum | OpdScalarFieldEnum[]
  }

  /**
   * Desk without action
   */
  export type DeskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Desk
     */
    omit?: DeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
  }


  /**
   * Model Kegiatan
   */

  export type AggregateKegiatan = {
    _count: KegiatanCountAggregateOutputType | null
    _avg: KegiatanAvgAggregateOutputType | null
    _sum: KegiatanSumAggregateOutputType | null
    _min: KegiatanMinAggregateOutputType | null
    _max: KegiatanMaxAggregateOutputType | null
  }

  export type KegiatanAvgAggregateOutputType = {
    id: number | null
    opdId: number | null
  }

  export type KegiatanSumAggregateOutputType = {
    id: number | null
    opdId: number | null
  }

  export type KegiatanMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaKegiatan: string | null
    kodeKegiatan: string | null
    opdId: number | null
  }

  export type KegiatanMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaKegiatan: string | null
    kodeKegiatan: string | null
    opdId: number | null
  }

  export type KegiatanCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    namaKegiatan: number
    kodeKegiatan: number
    opdId: number
    _all: number
  }


  export type KegiatanAvgAggregateInputType = {
    id?: true
    opdId?: true
  }

  export type KegiatanSumAggregateInputType = {
    id?: true
    opdId?: true
  }

  export type KegiatanMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaKegiatan?: true
    kodeKegiatan?: true
    opdId?: true
  }

  export type KegiatanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaKegiatan?: true
    kodeKegiatan?: true
    opdId?: true
  }

  export type KegiatanCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaKegiatan?: true
    kodeKegiatan?: true
    opdId?: true
    _all?: true
  }

  export type KegiatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kegiatan to aggregate.
     */
    where?: KegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: KegiatanOrderByWithRelationInput | KegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kegiatans
    **/
    _count?: true | KegiatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KegiatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KegiatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KegiatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KegiatanMaxAggregateInputType
  }

  export type GetKegiatanAggregateType<T extends KegiatanAggregateArgs> = {
        [P in keyof T & keyof AggregateKegiatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKegiatan[P]>
      : GetScalarType<T[P], AggregateKegiatan[P]>
  }




  export type KegiatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KegiatanWhereInput
    orderBy?: KegiatanOrderByWithAggregationInput | KegiatanOrderByWithAggregationInput[]
    by: KegiatanScalarFieldEnum[] | KegiatanScalarFieldEnum
    having?: KegiatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KegiatanCountAggregateInputType | true
    _avg?: KegiatanAvgAggregateInputType
    _sum?: KegiatanSumAggregateInputType
    _min?: KegiatanMinAggregateInputType
    _max?: KegiatanMaxAggregateInputType
  }

  export type KegiatanGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    namaKegiatan: string
    kodeKegiatan: string
    opdId: number
    _count: KegiatanCountAggregateOutputType | null
    _avg: KegiatanAvgAggregateOutputType | null
    _sum: KegiatanSumAggregateOutputType | null
    _min: KegiatanMinAggregateOutputType | null
    _max: KegiatanMaxAggregateOutputType | null
  }

  type GetKegiatanGroupByPayload<T extends KegiatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KegiatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KegiatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KegiatanGroupByOutputType[P]>
            : GetScalarType<T[P], KegiatanGroupByOutputType[P]>
        }
      >
    >


  export type KegiatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaKegiatan?: boolean
    kodeKegiatan?: boolean
    opdId?: boolean
    opd?: boolean | OpdDefaultArgs<ExtArgs>
    subkegiatan?: boolean | Kegiatan$subkegiatanArgs<ExtArgs>
    _count?: boolean | KegiatanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kegiatan"]>

  export type KegiatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaKegiatan?: boolean
    kodeKegiatan?: boolean
    opdId?: boolean
    opd?: boolean | OpdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kegiatan"]>

  export type KegiatanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaKegiatan?: boolean
    kodeKegiatan?: boolean
    opdId?: boolean
    opd?: boolean | OpdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kegiatan"]>

  export type KegiatanSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaKegiatan?: boolean
    kodeKegiatan?: boolean
    opdId?: boolean
  }

  export type KegiatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "namaKegiatan" | "kodeKegiatan" | "opdId", ExtArgs["result"]["kegiatan"]>
  export type KegiatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd?: boolean | OpdDefaultArgs<ExtArgs>
    subkegiatan?: boolean | Kegiatan$subkegiatanArgs<ExtArgs>
    _count?: boolean | KegiatanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KegiatanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd?: boolean | OpdDefaultArgs<ExtArgs>
  }
  export type KegiatanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opd?: boolean | OpdDefaultArgs<ExtArgs>
  }

  export type $KegiatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kegiatan"
    objects: {
      opd: Prisma.$OpdPayload<ExtArgs>
      subkegiatan: Prisma.$SubKegiatanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      namaKegiatan: string
      kodeKegiatan: string
      opdId: number
    }, ExtArgs["result"]["kegiatan"]>
    composites: {}
  }

  type KegiatanGetPayload<S extends boolean | null | undefined | KegiatanDefaultArgs> = $Result.GetResult<Prisma.$KegiatanPayload, S>

  type KegiatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KegiatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KegiatanCountAggregateInputType | true
    }

  export interface KegiatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kegiatan'], meta: { name: 'Kegiatan' } }
    /**
     * Find zero or one Kegiatan that matches the filter.
     * @param {KegiatanFindUniqueArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KegiatanFindUniqueArgs>(args: SelectSubset<T, KegiatanFindUniqueArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kegiatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KegiatanFindUniqueOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KegiatanFindUniqueOrThrowArgs>(args: SelectSubset<T, KegiatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kegiatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanFindFirstArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KegiatanFindFirstArgs>(args?: SelectSubset<T, KegiatanFindFirstArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kegiatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanFindFirstOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KegiatanFindFirstOrThrowArgs>(args?: SelectSubset<T, KegiatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kegiatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany()
     * 
     * // Get first 10 Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kegiatanWithIdOnly = await prisma.kegiatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KegiatanFindManyArgs>(args?: SelectSubset<T, KegiatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kegiatan.
     * @param {KegiatanCreateArgs} args - Arguments to create a Kegiatan.
     * @example
     * // Create one Kegiatan
     * const Kegiatan = await prisma.kegiatan.create({
     *   data: {
     *     // ... data to create a Kegiatan
     *   }
     * })
     * 
     */
    create<T extends KegiatanCreateArgs>(args: SelectSubset<T, KegiatanCreateArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kegiatans.
     * @param {KegiatanCreateManyArgs} args - Arguments to create many Kegiatans.
     * @example
     * // Create many Kegiatans
     * const kegiatan = await prisma.kegiatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KegiatanCreateManyArgs>(args?: SelectSubset<T, KegiatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kegiatans and returns the data saved in the database.
     * @param {KegiatanCreateManyAndReturnArgs} args - Arguments to create many Kegiatans.
     * @example
     * // Create many Kegiatans
     * const kegiatan = await prisma.kegiatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kegiatans and only return the `id`
     * const kegiatanWithIdOnly = await prisma.kegiatan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KegiatanCreateManyAndReturnArgs>(args?: SelectSubset<T, KegiatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kegiatan.
     * @param {KegiatanDeleteArgs} args - Arguments to delete one Kegiatan.
     * @example
     * // Delete one Kegiatan
     * const Kegiatan = await prisma.kegiatan.delete({
     *   where: {
     *     // ... filter to delete one Kegiatan
     *   }
     * })
     * 
     */
    delete<T extends KegiatanDeleteArgs>(args: SelectSubset<T, KegiatanDeleteArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kegiatan.
     * @param {KegiatanUpdateArgs} args - Arguments to update one Kegiatan.
     * @example
     * // Update one Kegiatan
     * const kegiatan = await prisma.kegiatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KegiatanUpdateArgs>(args: SelectSubset<T, KegiatanUpdateArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kegiatans.
     * @param {KegiatanDeleteManyArgs} args - Arguments to filter Kegiatans to delete.
     * @example
     * // Delete a few Kegiatans
     * const { count } = await prisma.kegiatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KegiatanDeleteManyArgs>(args?: SelectSubset<T, KegiatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kegiatans
     * const kegiatan = await prisma.kegiatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KegiatanUpdateManyArgs>(args: SelectSubset<T, KegiatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kegiatans and returns the data updated in the database.
     * @param {KegiatanUpdateManyAndReturnArgs} args - Arguments to update many Kegiatans.
     * @example
     * // Update many Kegiatans
     * const kegiatan = await prisma.kegiatan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kegiatans and only return the `id`
     * const kegiatanWithIdOnly = await prisma.kegiatan.updateManyAndReturn({
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
    updateManyAndReturn<T extends KegiatanUpdateManyAndReturnArgs>(args: SelectSubset<T, KegiatanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kegiatan.
     * @param {KegiatanUpsertArgs} args - Arguments to update or create a Kegiatan.
     * @example
     * // Update or create a Kegiatan
     * const kegiatan = await prisma.kegiatan.upsert({
     *   create: {
     *     // ... data to create a Kegiatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kegiatan we want to update
     *   }
     * })
     */
    upsert<T extends KegiatanUpsertArgs>(args: SelectSubset<T, KegiatanUpsertArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanCountArgs} args - Arguments to filter Kegiatans to count.
     * @example
     * // Count the number of Kegiatans
     * const count = await prisma.kegiatan.count({
     *   where: {
     *     // ... the filter for the Kegiatans we want to count
     *   }
     * })
    **/
    count<T extends KegiatanCountArgs>(
      args?: Subset<T, KegiatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KegiatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KegiatanAggregateArgs>(args: Subset<T, KegiatanAggregateArgs>): Prisma.PrismaPromise<GetKegiatanAggregateType<T>>

    /**
     * Group by Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanGroupByArgs} args - Group by arguments.
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
      T extends KegiatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KegiatanGroupByArgs['orderBy'] }
        : { orderBy?: KegiatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KegiatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKegiatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kegiatan model
   */
  readonly fields: KegiatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kegiatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KegiatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    opd<T extends OpdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpdDefaultArgs<ExtArgs>>): Prisma__OpdClient<$Result.GetResult<Prisma.$OpdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subkegiatan<T extends Kegiatan$subkegiatanArgs<ExtArgs> = {}>(args?: Subset<T, Kegiatan$subkegiatanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kegiatan model
   */
  interface KegiatanFieldRefs {
    readonly id: FieldRef<"Kegiatan", 'Int'>
    readonly createdAt: FieldRef<"Kegiatan", 'DateTime'>
    readonly updatedAt: FieldRef<"Kegiatan", 'DateTime'>
    readonly namaKegiatan: FieldRef<"Kegiatan", 'String'>
    readonly kodeKegiatan: FieldRef<"Kegiatan", 'String'>
    readonly opdId: FieldRef<"Kegiatan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Kegiatan findUnique
   */
  export type KegiatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter, which Kegiatan to fetch.
     */
    where: KegiatanWhereUniqueInput
  }

  /**
   * Kegiatan findUniqueOrThrow
   */
  export type KegiatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter, which Kegiatan to fetch.
     */
    where: KegiatanWhereUniqueInput
  }

  /**
   * Kegiatan findFirst
   */
  export type KegiatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter, which Kegiatan to fetch.
     */
    where?: KegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: KegiatanOrderByWithRelationInput | KegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kegiatans.
     */
    cursor?: KegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kegiatans.
     */
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * Kegiatan findFirstOrThrow
   */
  export type KegiatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter, which Kegiatan to fetch.
     */
    where?: KegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: KegiatanOrderByWithRelationInput | KegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kegiatans.
     */
    cursor?: KegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kegiatans.
     */
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * Kegiatan findMany
   */
  export type KegiatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter, which Kegiatans to fetch.
     */
    where?: KegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kegiatans to fetch.
     */
    orderBy?: KegiatanOrderByWithRelationInput | KegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kegiatans.
     */
    cursor?: KegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kegiatans.
     */
    skip?: number
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * Kegiatan create
   */
  export type KegiatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * The data needed to create a Kegiatan.
     */
    data: XOR<KegiatanCreateInput, KegiatanUncheckedCreateInput>
  }

  /**
   * Kegiatan createMany
   */
  export type KegiatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kegiatans.
     */
    data: KegiatanCreateManyInput | KegiatanCreateManyInput[]
  }

  /**
   * Kegiatan createManyAndReturn
   */
  export type KegiatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * The data used to create many Kegiatans.
     */
    data: KegiatanCreateManyInput | KegiatanCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kegiatan update
   */
  export type KegiatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * The data needed to update a Kegiatan.
     */
    data: XOR<KegiatanUpdateInput, KegiatanUncheckedUpdateInput>
    /**
     * Choose, which Kegiatan to update.
     */
    where: KegiatanWhereUniqueInput
  }

  /**
   * Kegiatan updateMany
   */
  export type KegiatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kegiatans.
     */
    data: XOR<KegiatanUpdateManyMutationInput, KegiatanUncheckedUpdateManyInput>
    /**
     * Filter which Kegiatans to update
     */
    where?: KegiatanWhereInput
    /**
     * Limit how many Kegiatans to update.
     */
    limit?: number
  }

  /**
   * Kegiatan updateManyAndReturn
   */
  export type KegiatanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * The data used to update Kegiatans.
     */
    data: XOR<KegiatanUpdateManyMutationInput, KegiatanUncheckedUpdateManyInput>
    /**
     * Filter which Kegiatans to update
     */
    where?: KegiatanWhereInput
    /**
     * Limit how many Kegiatans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kegiatan upsert
   */
  export type KegiatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * The filter to search for the Kegiatan to update in case it exists.
     */
    where: KegiatanWhereUniqueInput
    /**
     * In case the Kegiatan found by the `where` argument doesn't exist, create a new Kegiatan with this data.
     */
    create: XOR<KegiatanCreateInput, KegiatanUncheckedCreateInput>
    /**
     * In case the Kegiatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KegiatanUpdateInput, KegiatanUncheckedUpdateInput>
  }

  /**
   * Kegiatan delete
   */
  export type KegiatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
    /**
     * Filter which Kegiatan to delete.
     */
    where: KegiatanWhereUniqueInput
  }

  /**
   * Kegiatan deleteMany
   */
  export type KegiatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kegiatans to delete
     */
    where?: KegiatanWhereInput
    /**
     * Limit how many Kegiatans to delete.
     */
    limit?: number
  }

  /**
   * Kegiatan.subkegiatan
   */
  export type Kegiatan$subkegiatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanInclude<ExtArgs> | null
    where?: SubKegiatanWhereInput
    orderBy?: SubKegiatanOrderByWithRelationInput | SubKegiatanOrderByWithRelationInput[]
    cursor?: SubKegiatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubKegiatanScalarFieldEnum | SubKegiatanScalarFieldEnum[]
  }

  /**
   * Kegiatan without action
   */
  export type KegiatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kegiatan
     */
    select?: KegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kegiatan
     */
    omit?: KegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KegiatanInclude<ExtArgs> | null
  }


  /**
   * Model SubKegiatan
   */

  export type AggregateSubKegiatan = {
    _count: SubKegiatanCountAggregateOutputType | null
    _avg: SubKegiatanAvgAggregateOutputType | null
    _sum: SubKegiatanSumAggregateOutputType | null
    _min: SubKegiatanMinAggregateOutputType | null
    _max: SubKegiatanMaxAggregateOutputType | null
  }

  export type SubKegiatanAvgAggregateOutputType = {
    id: number | null
    kegiatanId: number | null
  }

  export type SubKegiatanSumAggregateOutputType = {
    id: number | null
    kegiatanId: number | null
  }

  export type SubKegiatanMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaSubKegiatan: string | null
    kodeSubKegiatan: string | null
    kegiatanId: number | null
  }

  export type SubKegiatanMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaSubKegiatan: string | null
    kodeSubKegiatan: string | null
    kegiatanId: number | null
  }

  export type SubKegiatanCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    namaSubKegiatan: number
    kodeSubKegiatan: number
    kegiatanId: number
    _all: number
  }


  export type SubKegiatanAvgAggregateInputType = {
    id?: true
    kegiatanId?: true
  }

  export type SubKegiatanSumAggregateInputType = {
    id?: true
    kegiatanId?: true
  }

  export type SubKegiatanMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaSubKegiatan?: true
    kodeSubKegiatan?: true
    kegiatanId?: true
  }

  export type SubKegiatanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaSubKegiatan?: true
    kodeSubKegiatan?: true
    kegiatanId?: true
  }

  export type SubKegiatanCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaSubKegiatan?: true
    kodeSubKegiatan?: true
    kegiatanId?: true
    _all?: true
  }

  export type SubKegiatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubKegiatan to aggregate.
     */
    where?: SubKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubKegiatans to fetch.
     */
    orderBy?: SubKegiatanOrderByWithRelationInput | SubKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubKegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubKegiatans
    **/
    _count?: true | SubKegiatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubKegiatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubKegiatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubKegiatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubKegiatanMaxAggregateInputType
  }

  export type GetSubKegiatanAggregateType<T extends SubKegiatanAggregateArgs> = {
        [P in keyof T & keyof AggregateSubKegiatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubKegiatan[P]>
      : GetScalarType<T[P], AggregateSubKegiatan[P]>
  }




  export type SubKegiatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubKegiatanWhereInput
    orderBy?: SubKegiatanOrderByWithAggregationInput | SubKegiatanOrderByWithAggregationInput[]
    by: SubKegiatanScalarFieldEnum[] | SubKegiatanScalarFieldEnum
    having?: SubKegiatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubKegiatanCountAggregateInputType | true
    _avg?: SubKegiatanAvgAggregateInputType
    _sum?: SubKegiatanSumAggregateInputType
    _min?: SubKegiatanMinAggregateInputType
    _max?: SubKegiatanMaxAggregateInputType
  }

  export type SubKegiatanGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    namaSubKegiatan: string
    kodeSubKegiatan: string
    kegiatanId: number
    _count: SubKegiatanCountAggregateOutputType | null
    _avg: SubKegiatanAvgAggregateOutputType | null
    _sum: SubKegiatanSumAggregateOutputType | null
    _min: SubKegiatanMinAggregateOutputType | null
    _max: SubKegiatanMaxAggregateOutputType | null
  }

  type GetSubKegiatanGroupByPayload<T extends SubKegiatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubKegiatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubKegiatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubKegiatanGroupByOutputType[P]>
            : GetScalarType<T[P], SubKegiatanGroupByOutputType[P]>
        }
      >
    >


  export type SubKegiatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaSubKegiatan?: boolean
    kodeSubKegiatan?: boolean
    kegiatanId?: boolean
    kegiatan?: boolean | KegiatanDefaultArgs<ExtArgs>
    usulan?: boolean | SubKegiatan$usulanArgs<ExtArgs>
    _count?: boolean | SubKegiatanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subKegiatan"]>

  export type SubKegiatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaSubKegiatan?: boolean
    kodeSubKegiatan?: boolean
    kegiatanId?: boolean
    kegiatan?: boolean | KegiatanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subKegiatan"]>

  export type SubKegiatanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaSubKegiatan?: boolean
    kodeSubKegiatan?: boolean
    kegiatanId?: boolean
    kegiatan?: boolean | KegiatanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subKegiatan"]>

  export type SubKegiatanSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaSubKegiatan?: boolean
    kodeSubKegiatan?: boolean
    kegiatanId?: boolean
  }

  export type SubKegiatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "namaSubKegiatan" | "kodeSubKegiatan" | "kegiatanId", ExtArgs["result"]["subKegiatan"]>
  export type SubKegiatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | KegiatanDefaultArgs<ExtArgs>
    usulan?: boolean | SubKegiatan$usulanArgs<ExtArgs>
    _count?: boolean | SubKegiatanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubKegiatanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | KegiatanDefaultArgs<ExtArgs>
  }
  export type SubKegiatanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kegiatan?: boolean | KegiatanDefaultArgs<ExtArgs>
  }

  export type $SubKegiatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubKegiatan"
    objects: {
      kegiatan: Prisma.$KegiatanPayload<ExtArgs>
      usulan: Prisma.$UsulanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      namaSubKegiatan: string
      kodeSubKegiatan: string
      kegiatanId: number
    }, ExtArgs["result"]["subKegiatan"]>
    composites: {}
  }

  type SubKegiatanGetPayload<S extends boolean | null | undefined | SubKegiatanDefaultArgs> = $Result.GetResult<Prisma.$SubKegiatanPayload, S>

  type SubKegiatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubKegiatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubKegiatanCountAggregateInputType | true
    }

  export interface SubKegiatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubKegiatan'], meta: { name: 'SubKegiatan' } }
    /**
     * Find zero or one SubKegiatan that matches the filter.
     * @param {SubKegiatanFindUniqueArgs} args - Arguments to find a SubKegiatan
     * @example
     * // Get one SubKegiatan
     * const subKegiatan = await prisma.subKegiatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubKegiatanFindUniqueArgs>(args: SelectSubset<T, SubKegiatanFindUniqueArgs<ExtArgs>>): Prisma__SubKegiatanClient<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubKegiatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubKegiatanFindUniqueOrThrowArgs} args - Arguments to find a SubKegiatan
     * @example
     * // Get one SubKegiatan
     * const subKegiatan = await prisma.subKegiatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubKegiatanFindUniqueOrThrowArgs>(args: SelectSubset<T, SubKegiatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubKegiatanClient<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubKegiatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKegiatanFindFirstArgs} args - Arguments to find a SubKegiatan
     * @example
     * // Get one SubKegiatan
     * const subKegiatan = await prisma.subKegiatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubKegiatanFindFirstArgs>(args?: SelectSubset<T, SubKegiatanFindFirstArgs<ExtArgs>>): Prisma__SubKegiatanClient<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubKegiatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKegiatanFindFirstOrThrowArgs} args - Arguments to find a SubKegiatan
     * @example
     * // Get one SubKegiatan
     * const subKegiatan = await prisma.subKegiatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubKegiatanFindFirstOrThrowArgs>(args?: SelectSubset<T, SubKegiatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubKegiatanClient<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubKegiatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKegiatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubKegiatans
     * const subKegiatans = await prisma.subKegiatan.findMany()
     * 
     * // Get first 10 SubKegiatans
     * const subKegiatans = await prisma.subKegiatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subKegiatanWithIdOnly = await prisma.subKegiatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubKegiatanFindManyArgs>(args?: SelectSubset<T, SubKegiatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubKegiatan.
     * @param {SubKegiatanCreateArgs} args - Arguments to create a SubKegiatan.
     * @example
     * // Create one SubKegiatan
     * const SubKegiatan = await prisma.subKegiatan.create({
     *   data: {
     *     // ... data to create a SubKegiatan
     *   }
     * })
     * 
     */
    create<T extends SubKegiatanCreateArgs>(args: SelectSubset<T, SubKegiatanCreateArgs<ExtArgs>>): Prisma__SubKegiatanClient<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubKegiatans.
     * @param {SubKegiatanCreateManyArgs} args - Arguments to create many SubKegiatans.
     * @example
     * // Create many SubKegiatans
     * const subKegiatan = await prisma.subKegiatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubKegiatanCreateManyArgs>(args?: SelectSubset<T, SubKegiatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubKegiatans and returns the data saved in the database.
     * @param {SubKegiatanCreateManyAndReturnArgs} args - Arguments to create many SubKegiatans.
     * @example
     * // Create many SubKegiatans
     * const subKegiatan = await prisma.subKegiatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubKegiatans and only return the `id`
     * const subKegiatanWithIdOnly = await prisma.subKegiatan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubKegiatanCreateManyAndReturnArgs>(args?: SelectSubset<T, SubKegiatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubKegiatan.
     * @param {SubKegiatanDeleteArgs} args - Arguments to delete one SubKegiatan.
     * @example
     * // Delete one SubKegiatan
     * const SubKegiatan = await prisma.subKegiatan.delete({
     *   where: {
     *     // ... filter to delete one SubKegiatan
     *   }
     * })
     * 
     */
    delete<T extends SubKegiatanDeleteArgs>(args: SelectSubset<T, SubKegiatanDeleteArgs<ExtArgs>>): Prisma__SubKegiatanClient<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubKegiatan.
     * @param {SubKegiatanUpdateArgs} args - Arguments to update one SubKegiatan.
     * @example
     * // Update one SubKegiatan
     * const subKegiatan = await prisma.subKegiatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubKegiatanUpdateArgs>(args: SelectSubset<T, SubKegiatanUpdateArgs<ExtArgs>>): Prisma__SubKegiatanClient<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubKegiatans.
     * @param {SubKegiatanDeleteManyArgs} args - Arguments to filter SubKegiatans to delete.
     * @example
     * // Delete a few SubKegiatans
     * const { count } = await prisma.subKegiatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubKegiatanDeleteManyArgs>(args?: SelectSubset<T, SubKegiatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubKegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKegiatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubKegiatans
     * const subKegiatan = await prisma.subKegiatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubKegiatanUpdateManyArgs>(args: SelectSubset<T, SubKegiatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubKegiatans and returns the data updated in the database.
     * @param {SubKegiatanUpdateManyAndReturnArgs} args - Arguments to update many SubKegiatans.
     * @example
     * // Update many SubKegiatans
     * const subKegiatan = await prisma.subKegiatan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubKegiatans and only return the `id`
     * const subKegiatanWithIdOnly = await prisma.subKegiatan.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubKegiatanUpdateManyAndReturnArgs>(args: SelectSubset<T, SubKegiatanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubKegiatan.
     * @param {SubKegiatanUpsertArgs} args - Arguments to update or create a SubKegiatan.
     * @example
     * // Update or create a SubKegiatan
     * const subKegiatan = await prisma.subKegiatan.upsert({
     *   create: {
     *     // ... data to create a SubKegiatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubKegiatan we want to update
     *   }
     * })
     */
    upsert<T extends SubKegiatanUpsertArgs>(args: SelectSubset<T, SubKegiatanUpsertArgs<ExtArgs>>): Prisma__SubKegiatanClient<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubKegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKegiatanCountArgs} args - Arguments to filter SubKegiatans to count.
     * @example
     * // Count the number of SubKegiatans
     * const count = await prisma.subKegiatan.count({
     *   where: {
     *     // ... the filter for the SubKegiatans we want to count
     *   }
     * })
    **/
    count<T extends SubKegiatanCountArgs>(
      args?: Subset<T, SubKegiatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubKegiatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubKegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKegiatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubKegiatanAggregateArgs>(args: Subset<T, SubKegiatanAggregateArgs>): Prisma.PrismaPromise<GetSubKegiatanAggregateType<T>>

    /**
     * Group by SubKegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubKegiatanGroupByArgs} args - Group by arguments.
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
      T extends SubKegiatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubKegiatanGroupByArgs['orderBy'] }
        : { orderBy?: SubKegiatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubKegiatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubKegiatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubKegiatan model
   */
  readonly fields: SubKegiatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubKegiatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubKegiatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kegiatan<T extends KegiatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KegiatanDefaultArgs<ExtArgs>>): Prisma__KegiatanClient<$Result.GetResult<Prisma.$KegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usulan<T extends SubKegiatan$usulanArgs<ExtArgs> = {}>(args?: Subset<T, SubKegiatan$usulanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubKegiatan model
   */
  interface SubKegiatanFieldRefs {
    readonly id: FieldRef<"SubKegiatan", 'Int'>
    readonly createdAt: FieldRef<"SubKegiatan", 'DateTime'>
    readonly updatedAt: FieldRef<"SubKegiatan", 'DateTime'>
    readonly namaSubKegiatan: FieldRef<"SubKegiatan", 'String'>
    readonly kodeSubKegiatan: FieldRef<"SubKegiatan", 'String'>
    readonly kegiatanId: FieldRef<"SubKegiatan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubKegiatan findUnique
   */
  export type SubKegiatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which SubKegiatan to fetch.
     */
    where: SubKegiatanWhereUniqueInput
  }

  /**
   * SubKegiatan findUniqueOrThrow
   */
  export type SubKegiatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which SubKegiatan to fetch.
     */
    where: SubKegiatanWhereUniqueInput
  }

  /**
   * SubKegiatan findFirst
   */
  export type SubKegiatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which SubKegiatan to fetch.
     */
    where?: SubKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubKegiatans to fetch.
     */
    orderBy?: SubKegiatanOrderByWithRelationInput | SubKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubKegiatans.
     */
    cursor?: SubKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubKegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubKegiatans.
     */
    distinct?: SubKegiatanScalarFieldEnum | SubKegiatanScalarFieldEnum[]
  }

  /**
   * SubKegiatan findFirstOrThrow
   */
  export type SubKegiatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which SubKegiatan to fetch.
     */
    where?: SubKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubKegiatans to fetch.
     */
    orderBy?: SubKegiatanOrderByWithRelationInput | SubKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubKegiatans.
     */
    cursor?: SubKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubKegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubKegiatans.
     */
    distinct?: SubKegiatanScalarFieldEnum | SubKegiatanScalarFieldEnum[]
  }

  /**
   * SubKegiatan findMany
   */
  export type SubKegiatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanInclude<ExtArgs> | null
    /**
     * Filter, which SubKegiatans to fetch.
     */
    where?: SubKegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubKegiatans to fetch.
     */
    orderBy?: SubKegiatanOrderByWithRelationInput | SubKegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubKegiatans.
     */
    cursor?: SubKegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubKegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubKegiatans.
     */
    skip?: number
    distinct?: SubKegiatanScalarFieldEnum | SubKegiatanScalarFieldEnum[]
  }

  /**
   * SubKegiatan create
   */
  export type SubKegiatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubKegiatan.
     */
    data: XOR<SubKegiatanCreateInput, SubKegiatanUncheckedCreateInput>
  }

  /**
   * SubKegiatan createMany
   */
  export type SubKegiatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubKegiatans.
     */
    data: SubKegiatanCreateManyInput | SubKegiatanCreateManyInput[]
  }

  /**
   * SubKegiatan createManyAndReturn
   */
  export type SubKegiatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * The data used to create many SubKegiatans.
     */
    data: SubKegiatanCreateManyInput | SubKegiatanCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubKegiatan update
   */
  export type SubKegiatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubKegiatan.
     */
    data: XOR<SubKegiatanUpdateInput, SubKegiatanUncheckedUpdateInput>
    /**
     * Choose, which SubKegiatan to update.
     */
    where: SubKegiatanWhereUniqueInput
  }

  /**
   * SubKegiatan updateMany
   */
  export type SubKegiatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubKegiatans.
     */
    data: XOR<SubKegiatanUpdateManyMutationInput, SubKegiatanUncheckedUpdateManyInput>
    /**
     * Filter which SubKegiatans to update
     */
    where?: SubKegiatanWhereInput
    /**
     * Limit how many SubKegiatans to update.
     */
    limit?: number
  }

  /**
   * SubKegiatan updateManyAndReturn
   */
  export type SubKegiatanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * The data used to update SubKegiatans.
     */
    data: XOR<SubKegiatanUpdateManyMutationInput, SubKegiatanUncheckedUpdateManyInput>
    /**
     * Filter which SubKegiatans to update
     */
    where?: SubKegiatanWhereInput
    /**
     * Limit how many SubKegiatans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubKegiatan upsert
   */
  export type SubKegiatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubKegiatan to update in case it exists.
     */
    where: SubKegiatanWhereUniqueInput
    /**
     * In case the SubKegiatan found by the `where` argument doesn't exist, create a new SubKegiatan with this data.
     */
    create: XOR<SubKegiatanCreateInput, SubKegiatanUncheckedCreateInput>
    /**
     * In case the SubKegiatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubKegiatanUpdateInput, SubKegiatanUncheckedUpdateInput>
  }

  /**
   * SubKegiatan delete
   */
  export type SubKegiatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanInclude<ExtArgs> | null
    /**
     * Filter which SubKegiatan to delete.
     */
    where: SubKegiatanWhereUniqueInput
  }

  /**
   * SubKegiatan deleteMany
   */
  export type SubKegiatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubKegiatans to delete
     */
    where?: SubKegiatanWhereInput
    /**
     * Limit how many SubKegiatans to delete.
     */
    limit?: number
  }

  /**
   * SubKegiatan.usulan
   */
  export type SubKegiatan$usulanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    where?: UsulanWhereInput
    orderBy?: UsulanOrderByWithRelationInput | UsulanOrderByWithRelationInput[]
    cursor?: UsulanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsulanScalarFieldEnum | UsulanScalarFieldEnum[]
  }

  /**
   * SubKegiatan without action
   */
  export type SubKegiatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubKegiatan
     */
    select?: SubKegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubKegiatan
     */
    omit?: SubKegiatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubKegiatanInclude<ExtArgs> | null
  }


  /**
   * Model Usulan
   */

  export type AggregateUsulan = {
    _count: UsulanCountAggregateOutputType | null
    _avg: UsulanAvgAggregateOutputType | null
    _sum: UsulanSumAggregateOutputType | null
    _min: UsulanMinAggregateOutputType | null
    _max: UsulanMaxAggregateOutputType | null
  }

  export type UsulanAvgAggregateOutputType = {
    id: number | null
    kampungId: number | null
    subkegiatanId: number | null
  }

  export type UsulanSumAggregateOutputType = {
    id: number | null
    kampungId: number | null
    subkegiatanId: number | null
  }

  export type UsulanMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaUsulan: string | null
    volume: string | null
    kampungId: number | null
    subkegiatanId: number | null
  }

  export type UsulanMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaUsulan: string | null
    volume: string | null
    kampungId: number | null
    subkegiatanId: number | null
  }

  export type UsulanCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    namaUsulan: number
    volume: number
    kampungId: number
    subkegiatanId: number
    _all: number
  }


  export type UsulanAvgAggregateInputType = {
    id?: true
    kampungId?: true
    subkegiatanId?: true
  }

  export type UsulanSumAggregateInputType = {
    id?: true
    kampungId?: true
    subkegiatanId?: true
  }

  export type UsulanMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaUsulan?: true
    volume?: true
    kampungId?: true
    subkegiatanId?: true
  }

  export type UsulanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaUsulan?: true
    volume?: true
    kampungId?: true
    subkegiatanId?: true
  }

  export type UsulanCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaUsulan?: true
    volume?: true
    kampungId?: true
    subkegiatanId?: true
    _all?: true
  }

  export type UsulanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usulan to aggregate.
     */
    where?: UsulanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usulans to fetch.
     */
    orderBy?: UsulanOrderByWithRelationInput | UsulanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsulanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usulans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usulans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usulans
    **/
    _count?: true | UsulanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsulanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsulanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsulanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsulanMaxAggregateInputType
  }

  export type GetUsulanAggregateType<T extends UsulanAggregateArgs> = {
        [P in keyof T & keyof AggregateUsulan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsulan[P]>
      : GetScalarType<T[P], AggregateUsulan[P]>
  }




  export type UsulanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsulanWhereInput
    orderBy?: UsulanOrderByWithAggregationInput | UsulanOrderByWithAggregationInput[]
    by: UsulanScalarFieldEnum[] | UsulanScalarFieldEnum
    having?: UsulanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsulanCountAggregateInputType | true
    _avg?: UsulanAvgAggregateInputType
    _sum?: UsulanSumAggregateInputType
    _min?: UsulanMinAggregateInputType
    _max?: UsulanMaxAggregateInputType
  }

  export type UsulanGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    namaUsulan: string
    volume: string | null
    kampungId: number
    subkegiatanId: number
    _count: UsulanCountAggregateOutputType | null
    _avg: UsulanAvgAggregateOutputType | null
    _sum: UsulanSumAggregateOutputType | null
    _min: UsulanMinAggregateOutputType | null
    _max: UsulanMaxAggregateOutputType | null
  }

  type GetUsulanGroupByPayload<T extends UsulanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsulanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsulanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsulanGroupByOutputType[P]>
            : GetScalarType<T[P], UsulanGroupByOutputType[P]>
        }
      >
    >


  export type UsulanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaUsulan?: boolean
    volume?: boolean
    kampungId?: boolean
    subkegiatanId?: boolean
    satuan?: boolean | Usulan$satuanArgs<ExtArgs>
    distrik?: boolean | Usulan$distrikArgs<ExtArgs>
    kampung?: boolean | KampungDefaultArgs<ExtArgs>
    subkegiatan?: boolean | SubKegiatanDefaultArgs<ExtArgs>
    _count?: boolean | UsulanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usulan"]>

  export type UsulanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaUsulan?: boolean
    volume?: boolean
    kampungId?: boolean
    subkegiatanId?: boolean
    kampung?: boolean | KampungDefaultArgs<ExtArgs>
    subkegiatan?: boolean | SubKegiatanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usulan"]>

  export type UsulanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaUsulan?: boolean
    volume?: boolean
    kampungId?: boolean
    subkegiatanId?: boolean
    kampung?: boolean | KampungDefaultArgs<ExtArgs>
    subkegiatan?: boolean | SubKegiatanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usulan"]>

  export type UsulanSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaUsulan?: boolean
    volume?: boolean
    kampungId?: boolean
    subkegiatanId?: boolean
  }

  export type UsulanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "namaUsulan" | "volume" | "kampungId" | "subkegiatanId", ExtArgs["result"]["usulan"]>
  export type UsulanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    satuan?: boolean | Usulan$satuanArgs<ExtArgs>
    distrik?: boolean | Usulan$distrikArgs<ExtArgs>
    kampung?: boolean | KampungDefaultArgs<ExtArgs>
    subkegiatan?: boolean | SubKegiatanDefaultArgs<ExtArgs>
    _count?: boolean | UsulanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsulanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kampung?: boolean | KampungDefaultArgs<ExtArgs>
    subkegiatan?: boolean | SubKegiatanDefaultArgs<ExtArgs>
  }
  export type UsulanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kampung?: boolean | KampungDefaultArgs<ExtArgs>
    subkegiatan?: boolean | SubKegiatanDefaultArgs<ExtArgs>
  }

  export type $UsulanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usulan"
    objects: {
      satuan: Prisma.$SatuanPayload<ExtArgs>[]
      distrik: Prisma.$DistrikPayload<ExtArgs> | null
      kampung: Prisma.$KampungPayload<ExtArgs>
      subkegiatan: Prisma.$SubKegiatanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      namaUsulan: string
      volume: string | null
      kampungId: number
      subkegiatanId: number
    }, ExtArgs["result"]["usulan"]>
    composites: {}
  }

  type UsulanGetPayload<S extends boolean | null | undefined | UsulanDefaultArgs> = $Result.GetResult<Prisma.$UsulanPayload, S>

  type UsulanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsulanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsulanCountAggregateInputType | true
    }

  export interface UsulanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usulan'], meta: { name: 'Usulan' } }
    /**
     * Find zero or one Usulan that matches the filter.
     * @param {UsulanFindUniqueArgs} args - Arguments to find a Usulan
     * @example
     * // Get one Usulan
     * const usulan = await prisma.usulan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsulanFindUniqueArgs>(args: SelectSubset<T, UsulanFindUniqueArgs<ExtArgs>>): Prisma__UsulanClient<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usulan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsulanFindUniqueOrThrowArgs} args - Arguments to find a Usulan
     * @example
     * // Get one Usulan
     * const usulan = await prisma.usulan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsulanFindUniqueOrThrowArgs>(args: SelectSubset<T, UsulanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsulanClient<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usulan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsulanFindFirstArgs} args - Arguments to find a Usulan
     * @example
     * // Get one Usulan
     * const usulan = await prisma.usulan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsulanFindFirstArgs>(args?: SelectSubset<T, UsulanFindFirstArgs<ExtArgs>>): Prisma__UsulanClient<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usulan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsulanFindFirstOrThrowArgs} args - Arguments to find a Usulan
     * @example
     * // Get one Usulan
     * const usulan = await prisma.usulan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsulanFindFirstOrThrowArgs>(args?: SelectSubset<T, UsulanFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsulanClient<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usulans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsulanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usulans
     * const usulans = await prisma.usulan.findMany()
     * 
     * // Get first 10 Usulans
     * const usulans = await prisma.usulan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usulanWithIdOnly = await prisma.usulan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsulanFindManyArgs>(args?: SelectSubset<T, UsulanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usulan.
     * @param {UsulanCreateArgs} args - Arguments to create a Usulan.
     * @example
     * // Create one Usulan
     * const Usulan = await prisma.usulan.create({
     *   data: {
     *     // ... data to create a Usulan
     *   }
     * })
     * 
     */
    create<T extends UsulanCreateArgs>(args: SelectSubset<T, UsulanCreateArgs<ExtArgs>>): Prisma__UsulanClient<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usulans.
     * @param {UsulanCreateManyArgs} args - Arguments to create many Usulans.
     * @example
     * // Create many Usulans
     * const usulan = await prisma.usulan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsulanCreateManyArgs>(args?: SelectSubset<T, UsulanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usulans and returns the data saved in the database.
     * @param {UsulanCreateManyAndReturnArgs} args - Arguments to create many Usulans.
     * @example
     * // Create many Usulans
     * const usulan = await prisma.usulan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usulans and only return the `id`
     * const usulanWithIdOnly = await prisma.usulan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsulanCreateManyAndReturnArgs>(args?: SelectSubset<T, UsulanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usulan.
     * @param {UsulanDeleteArgs} args - Arguments to delete one Usulan.
     * @example
     * // Delete one Usulan
     * const Usulan = await prisma.usulan.delete({
     *   where: {
     *     // ... filter to delete one Usulan
     *   }
     * })
     * 
     */
    delete<T extends UsulanDeleteArgs>(args: SelectSubset<T, UsulanDeleteArgs<ExtArgs>>): Prisma__UsulanClient<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usulan.
     * @param {UsulanUpdateArgs} args - Arguments to update one Usulan.
     * @example
     * // Update one Usulan
     * const usulan = await prisma.usulan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsulanUpdateArgs>(args: SelectSubset<T, UsulanUpdateArgs<ExtArgs>>): Prisma__UsulanClient<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usulans.
     * @param {UsulanDeleteManyArgs} args - Arguments to filter Usulans to delete.
     * @example
     * // Delete a few Usulans
     * const { count } = await prisma.usulan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsulanDeleteManyArgs>(args?: SelectSubset<T, UsulanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usulans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsulanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usulans
     * const usulan = await prisma.usulan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsulanUpdateManyArgs>(args: SelectSubset<T, UsulanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usulans and returns the data updated in the database.
     * @param {UsulanUpdateManyAndReturnArgs} args - Arguments to update many Usulans.
     * @example
     * // Update many Usulans
     * const usulan = await prisma.usulan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usulans and only return the `id`
     * const usulanWithIdOnly = await prisma.usulan.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsulanUpdateManyAndReturnArgs>(args: SelectSubset<T, UsulanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usulan.
     * @param {UsulanUpsertArgs} args - Arguments to update or create a Usulan.
     * @example
     * // Update or create a Usulan
     * const usulan = await prisma.usulan.upsert({
     *   create: {
     *     // ... data to create a Usulan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usulan we want to update
     *   }
     * })
     */
    upsert<T extends UsulanUpsertArgs>(args: SelectSubset<T, UsulanUpsertArgs<ExtArgs>>): Prisma__UsulanClient<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usulans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsulanCountArgs} args - Arguments to filter Usulans to count.
     * @example
     * // Count the number of Usulans
     * const count = await prisma.usulan.count({
     *   where: {
     *     // ... the filter for the Usulans we want to count
     *   }
     * })
    **/
    count<T extends UsulanCountArgs>(
      args?: Subset<T, UsulanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsulanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usulan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsulanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsulanAggregateArgs>(args: Subset<T, UsulanAggregateArgs>): Prisma.PrismaPromise<GetUsulanAggregateType<T>>

    /**
     * Group by Usulan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsulanGroupByArgs} args - Group by arguments.
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
      T extends UsulanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsulanGroupByArgs['orderBy'] }
        : { orderBy?: UsulanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsulanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsulanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usulan model
   */
  readonly fields: UsulanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usulan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsulanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    satuan<T extends Usulan$satuanArgs<ExtArgs> = {}>(args?: Subset<T, Usulan$satuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    distrik<T extends Usulan$distrikArgs<ExtArgs> = {}>(args?: Subset<T, Usulan$distrikArgs<ExtArgs>>): Prisma__DistrikClient<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    kampung<T extends KampungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KampungDefaultArgs<ExtArgs>>): Prisma__KampungClient<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subkegiatan<T extends SubKegiatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubKegiatanDefaultArgs<ExtArgs>>): Prisma__SubKegiatanClient<$Result.GetResult<Prisma.$SubKegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usulan model
   */
  interface UsulanFieldRefs {
    readonly id: FieldRef<"Usulan", 'Int'>
    readonly createdAt: FieldRef<"Usulan", 'DateTime'>
    readonly updatedAt: FieldRef<"Usulan", 'DateTime'>
    readonly namaUsulan: FieldRef<"Usulan", 'String'>
    readonly volume: FieldRef<"Usulan", 'String'>
    readonly kampungId: FieldRef<"Usulan", 'Int'>
    readonly subkegiatanId: FieldRef<"Usulan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usulan findUnique
   */
  export type UsulanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    /**
     * Filter, which Usulan to fetch.
     */
    where: UsulanWhereUniqueInput
  }

  /**
   * Usulan findUniqueOrThrow
   */
  export type UsulanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    /**
     * Filter, which Usulan to fetch.
     */
    where: UsulanWhereUniqueInput
  }

  /**
   * Usulan findFirst
   */
  export type UsulanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    /**
     * Filter, which Usulan to fetch.
     */
    where?: UsulanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usulans to fetch.
     */
    orderBy?: UsulanOrderByWithRelationInput | UsulanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usulans.
     */
    cursor?: UsulanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usulans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usulans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usulans.
     */
    distinct?: UsulanScalarFieldEnum | UsulanScalarFieldEnum[]
  }

  /**
   * Usulan findFirstOrThrow
   */
  export type UsulanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    /**
     * Filter, which Usulan to fetch.
     */
    where?: UsulanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usulans to fetch.
     */
    orderBy?: UsulanOrderByWithRelationInput | UsulanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usulans.
     */
    cursor?: UsulanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usulans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usulans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usulans.
     */
    distinct?: UsulanScalarFieldEnum | UsulanScalarFieldEnum[]
  }

  /**
   * Usulan findMany
   */
  export type UsulanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    /**
     * Filter, which Usulans to fetch.
     */
    where?: UsulanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usulans to fetch.
     */
    orderBy?: UsulanOrderByWithRelationInput | UsulanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usulans.
     */
    cursor?: UsulanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usulans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usulans.
     */
    skip?: number
    distinct?: UsulanScalarFieldEnum | UsulanScalarFieldEnum[]
  }

  /**
   * Usulan create
   */
  export type UsulanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    /**
     * The data needed to create a Usulan.
     */
    data: XOR<UsulanCreateInput, UsulanUncheckedCreateInput>
  }

  /**
   * Usulan createMany
   */
  export type UsulanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usulans.
     */
    data: UsulanCreateManyInput | UsulanCreateManyInput[]
  }

  /**
   * Usulan createManyAndReturn
   */
  export type UsulanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * The data used to create many Usulans.
     */
    data: UsulanCreateManyInput | UsulanCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usulan update
   */
  export type UsulanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    /**
     * The data needed to update a Usulan.
     */
    data: XOR<UsulanUpdateInput, UsulanUncheckedUpdateInput>
    /**
     * Choose, which Usulan to update.
     */
    where: UsulanWhereUniqueInput
  }

  /**
   * Usulan updateMany
   */
  export type UsulanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usulans.
     */
    data: XOR<UsulanUpdateManyMutationInput, UsulanUncheckedUpdateManyInput>
    /**
     * Filter which Usulans to update
     */
    where?: UsulanWhereInput
    /**
     * Limit how many Usulans to update.
     */
    limit?: number
  }

  /**
   * Usulan updateManyAndReturn
   */
  export type UsulanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * The data used to update Usulans.
     */
    data: XOR<UsulanUpdateManyMutationInput, UsulanUncheckedUpdateManyInput>
    /**
     * Filter which Usulans to update
     */
    where?: UsulanWhereInput
    /**
     * Limit how many Usulans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usulan upsert
   */
  export type UsulanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    /**
     * The filter to search for the Usulan to update in case it exists.
     */
    where: UsulanWhereUniqueInput
    /**
     * In case the Usulan found by the `where` argument doesn't exist, create a new Usulan with this data.
     */
    create: XOR<UsulanCreateInput, UsulanUncheckedCreateInput>
    /**
     * In case the Usulan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsulanUpdateInput, UsulanUncheckedUpdateInput>
  }

  /**
   * Usulan delete
   */
  export type UsulanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    /**
     * Filter which Usulan to delete.
     */
    where: UsulanWhereUniqueInput
  }

  /**
   * Usulan deleteMany
   */
  export type UsulanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usulans to delete
     */
    where?: UsulanWhereInput
    /**
     * Limit how many Usulans to delete.
     */
    limit?: number
  }

  /**
   * Usulan.satuan
   */
  export type Usulan$satuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanInclude<ExtArgs> | null
    where?: SatuanWhereInput
    orderBy?: SatuanOrderByWithRelationInput | SatuanOrderByWithRelationInput[]
    cursor?: SatuanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SatuanScalarFieldEnum | SatuanScalarFieldEnum[]
  }

  /**
   * Usulan.distrik
   */
  export type Usulan$distrikArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
    where?: DistrikWhereInput
  }

  /**
   * Usulan without action
   */
  export type UsulanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
  }


  /**
   * Model Satuan
   */

  export type AggregateSatuan = {
    _count: SatuanCountAggregateOutputType | null
    _avg: SatuanAvgAggregateOutputType | null
    _sum: SatuanSumAggregateOutputType | null
    _min: SatuanMinAggregateOutputType | null
    _max: SatuanMaxAggregateOutputType | null
  }

  export type SatuanAvgAggregateOutputType = {
    id: number | null
    usulanId: number | null
  }

  export type SatuanSumAggregateOutputType = {
    id: number | null
    usulanId: number | null
  }

  export type SatuanMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaSatuan: string | null
    usulanId: number | null
  }

  export type SatuanMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaSatuan: string | null
    usulanId: number | null
  }

  export type SatuanCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    namaSatuan: number
    usulanId: number
    _all: number
  }


  export type SatuanAvgAggregateInputType = {
    id?: true
    usulanId?: true
  }

  export type SatuanSumAggregateInputType = {
    id?: true
    usulanId?: true
  }

  export type SatuanMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaSatuan?: true
    usulanId?: true
  }

  export type SatuanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaSatuan?: true
    usulanId?: true
  }

  export type SatuanCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaSatuan?: true
    usulanId?: true
    _all?: true
  }

  export type SatuanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Satuan to aggregate.
     */
    where?: SatuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Satuans to fetch.
     */
    orderBy?: SatuanOrderByWithRelationInput | SatuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SatuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Satuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Satuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Satuans
    **/
    _count?: true | SatuanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SatuanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SatuanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SatuanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SatuanMaxAggregateInputType
  }

  export type GetSatuanAggregateType<T extends SatuanAggregateArgs> = {
        [P in keyof T & keyof AggregateSatuan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSatuan[P]>
      : GetScalarType<T[P], AggregateSatuan[P]>
  }




  export type SatuanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatuanWhereInput
    orderBy?: SatuanOrderByWithAggregationInput | SatuanOrderByWithAggregationInput[]
    by: SatuanScalarFieldEnum[] | SatuanScalarFieldEnum
    having?: SatuanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SatuanCountAggregateInputType | true
    _avg?: SatuanAvgAggregateInputType
    _sum?: SatuanSumAggregateInputType
    _min?: SatuanMinAggregateInputType
    _max?: SatuanMaxAggregateInputType
  }

  export type SatuanGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    namaSatuan: string
    usulanId: number
    _count: SatuanCountAggregateOutputType | null
    _avg: SatuanAvgAggregateOutputType | null
    _sum: SatuanSumAggregateOutputType | null
    _min: SatuanMinAggregateOutputType | null
    _max: SatuanMaxAggregateOutputType | null
  }

  type GetSatuanGroupByPayload<T extends SatuanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SatuanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SatuanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SatuanGroupByOutputType[P]>
            : GetScalarType<T[P], SatuanGroupByOutputType[P]>
        }
      >
    >


  export type SatuanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaSatuan?: boolean
    usulanId?: boolean
    usulan?: boolean | UsulanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satuan"]>

  export type SatuanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaSatuan?: boolean
    usulanId?: boolean
    usulan?: boolean | UsulanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satuan"]>

  export type SatuanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaSatuan?: boolean
    usulanId?: boolean
    usulan?: boolean | UsulanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satuan"]>

  export type SatuanSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaSatuan?: boolean
    usulanId?: boolean
  }

  export type SatuanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "namaSatuan" | "usulanId", ExtArgs["result"]["satuan"]>
  export type SatuanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usulan?: boolean | UsulanDefaultArgs<ExtArgs>
  }
  export type SatuanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usulan?: boolean | UsulanDefaultArgs<ExtArgs>
  }
  export type SatuanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usulan?: boolean | UsulanDefaultArgs<ExtArgs>
  }

  export type $SatuanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Satuan"
    objects: {
      usulan: Prisma.$UsulanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      namaSatuan: string
      usulanId: number
    }, ExtArgs["result"]["satuan"]>
    composites: {}
  }

  type SatuanGetPayload<S extends boolean | null | undefined | SatuanDefaultArgs> = $Result.GetResult<Prisma.$SatuanPayload, S>

  type SatuanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SatuanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SatuanCountAggregateInputType | true
    }

  export interface SatuanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Satuan'], meta: { name: 'Satuan' } }
    /**
     * Find zero or one Satuan that matches the filter.
     * @param {SatuanFindUniqueArgs} args - Arguments to find a Satuan
     * @example
     * // Get one Satuan
     * const satuan = await prisma.satuan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SatuanFindUniqueArgs>(args: SelectSubset<T, SatuanFindUniqueArgs<ExtArgs>>): Prisma__SatuanClient<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Satuan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SatuanFindUniqueOrThrowArgs} args - Arguments to find a Satuan
     * @example
     * // Get one Satuan
     * const satuan = await prisma.satuan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SatuanFindUniqueOrThrowArgs>(args: SelectSubset<T, SatuanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SatuanClient<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Satuan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatuanFindFirstArgs} args - Arguments to find a Satuan
     * @example
     * // Get one Satuan
     * const satuan = await prisma.satuan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SatuanFindFirstArgs>(args?: SelectSubset<T, SatuanFindFirstArgs<ExtArgs>>): Prisma__SatuanClient<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Satuan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatuanFindFirstOrThrowArgs} args - Arguments to find a Satuan
     * @example
     * // Get one Satuan
     * const satuan = await prisma.satuan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SatuanFindFirstOrThrowArgs>(args?: SelectSubset<T, SatuanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SatuanClient<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Satuans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatuanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Satuans
     * const satuans = await prisma.satuan.findMany()
     * 
     * // Get first 10 Satuans
     * const satuans = await prisma.satuan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const satuanWithIdOnly = await prisma.satuan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SatuanFindManyArgs>(args?: SelectSubset<T, SatuanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Satuan.
     * @param {SatuanCreateArgs} args - Arguments to create a Satuan.
     * @example
     * // Create one Satuan
     * const Satuan = await prisma.satuan.create({
     *   data: {
     *     // ... data to create a Satuan
     *   }
     * })
     * 
     */
    create<T extends SatuanCreateArgs>(args: SelectSubset<T, SatuanCreateArgs<ExtArgs>>): Prisma__SatuanClient<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Satuans.
     * @param {SatuanCreateManyArgs} args - Arguments to create many Satuans.
     * @example
     * // Create many Satuans
     * const satuan = await prisma.satuan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SatuanCreateManyArgs>(args?: SelectSubset<T, SatuanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Satuans and returns the data saved in the database.
     * @param {SatuanCreateManyAndReturnArgs} args - Arguments to create many Satuans.
     * @example
     * // Create many Satuans
     * const satuan = await prisma.satuan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Satuans and only return the `id`
     * const satuanWithIdOnly = await prisma.satuan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SatuanCreateManyAndReturnArgs>(args?: SelectSubset<T, SatuanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Satuan.
     * @param {SatuanDeleteArgs} args - Arguments to delete one Satuan.
     * @example
     * // Delete one Satuan
     * const Satuan = await prisma.satuan.delete({
     *   where: {
     *     // ... filter to delete one Satuan
     *   }
     * })
     * 
     */
    delete<T extends SatuanDeleteArgs>(args: SelectSubset<T, SatuanDeleteArgs<ExtArgs>>): Prisma__SatuanClient<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Satuan.
     * @param {SatuanUpdateArgs} args - Arguments to update one Satuan.
     * @example
     * // Update one Satuan
     * const satuan = await prisma.satuan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SatuanUpdateArgs>(args: SelectSubset<T, SatuanUpdateArgs<ExtArgs>>): Prisma__SatuanClient<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Satuans.
     * @param {SatuanDeleteManyArgs} args - Arguments to filter Satuans to delete.
     * @example
     * // Delete a few Satuans
     * const { count } = await prisma.satuan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SatuanDeleteManyArgs>(args?: SelectSubset<T, SatuanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Satuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatuanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Satuans
     * const satuan = await prisma.satuan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SatuanUpdateManyArgs>(args: SelectSubset<T, SatuanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Satuans and returns the data updated in the database.
     * @param {SatuanUpdateManyAndReturnArgs} args - Arguments to update many Satuans.
     * @example
     * // Update many Satuans
     * const satuan = await prisma.satuan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Satuans and only return the `id`
     * const satuanWithIdOnly = await prisma.satuan.updateManyAndReturn({
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
    updateManyAndReturn<T extends SatuanUpdateManyAndReturnArgs>(args: SelectSubset<T, SatuanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Satuan.
     * @param {SatuanUpsertArgs} args - Arguments to update or create a Satuan.
     * @example
     * // Update or create a Satuan
     * const satuan = await prisma.satuan.upsert({
     *   create: {
     *     // ... data to create a Satuan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Satuan we want to update
     *   }
     * })
     */
    upsert<T extends SatuanUpsertArgs>(args: SelectSubset<T, SatuanUpsertArgs<ExtArgs>>): Prisma__SatuanClient<$Result.GetResult<Prisma.$SatuanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Satuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatuanCountArgs} args - Arguments to filter Satuans to count.
     * @example
     * // Count the number of Satuans
     * const count = await prisma.satuan.count({
     *   where: {
     *     // ... the filter for the Satuans we want to count
     *   }
     * })
    **/
    count<T extends SatuanCountArgs>(
      args?: Subset<T, SatuanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SatuanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Satuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatuanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SatuanAggregateArgs>(args: Subset<T, SatuanAggregateArgs>): Prisma.PrismaPromise<GetSatuanAggregateType<T>>

    /**
     * Group by Satuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatuanGroupByArgs} args - Group by arguments.
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
      T extends SatuanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SatuanGroupByArgs['orderBy'] }
        : { orderBy?: SatuanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SatuanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSatuanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Satuan model
   */
  readonly fields: SatuanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Satuan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SatuanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usulan<T extends UsulanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsulanDefaultArgs<ExtArgs>>): Prisma__UsulanClient<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Satuan model
   */
  interface SatuanFieldRefs {
    readonly id: FieldRef<"Satuan", 'Int'>
    readonly createdAt: FieldRef<"Satuan", 'DateTime'>
    readonly updatedAt: FieldRef<"Satuan", 'DateTime'>
    readonly namaSatuan: FieldRef<"Satuan", 'String'>
    readonly usulanId: FieldRef<"Satuan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Satuan findUnique
   */
  export type SatuanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanInclude<ExtArgs> | null
    /**
     * Filter, which Satuan to fetch.
     */
    where: SatuanWhereUniqueInput
  }

  /**
   * Satuan findUniqueOrThrow
   */
  export type SatuanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanInclude<ExtArgs> | null
    /**
     * Filter, which Satuan to fetch.
     */
    where: SatuanWhereUniqueInput
  }

  /**
   * Satuan findFirst
   */
  export type SatuanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanInclude<ExtArgs> | null
    /**
     * Filter, which Satuan to fetch.
     */
    where?: SatuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Satuans to fetch.
     */
    orderBy?: SatuanOrderByWithRelationInput | SatuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Satuans.
     */
    cursor?: SatuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Satuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Satuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Satuans.
     */
    distinct?: SatuanScalarFieldEnum | SatuanScalarFieldEnum[]
  }

  /**
   * Satuan findFirstOrThrow
   */
  export type SatuanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanInclude<ExtArgs> | null
    /**
     * Filter, which Satuan to fetch.
     */
    where?: SatuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Satuans to fetch.
     */
    orderBy?: SatuanOrderByWithRelationInput | SatuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Satuans.
     */
    cursor?: SatuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Satuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Satuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Satuans.
     */
    distinct?: SatuanScalarFieldEnum | SatuanScalarFieldEnum[]
  }

  /**
   * Satuan findMany
   */
  export type SatuanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanInclude<ExtArgs> | null
    /**
     * Filter, which Satuans to fetch.
     */
    where?: SatuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Satuans to fetch.
     */
    orderBy?: SatuanOrderByWithRelationInput | SatuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Satuans.
     */
    cursor?: SatuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Satuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Satuans.
     */
    skip?: number
    distinct?: SatuanScalarFieldEnum | SatuanScalarFieldEnum[]
  }

  /**
   * Satuan create
   */
  export type SatuanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanInclude<ExtArgs> | null
    /**
     * The data needed to create a Satuan.
     */
    data: XOR<SatuanCreateInput, SatuanUncheckedCreateInput>
  }

  /**
   * Satuan createMany
   */
  export type SatuanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Satuans.
     */
    data: SatuanCreateManyInput | SatuanCreateManyInput[]
  }

  /**
   * Satuan createManyAndReturn
   */
  export type SatuanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * The data used to create many Satuans.
     */
    data: SatuanCreateManyInput | SatuanCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Satuan update
   */
  export type SatuanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanInclude<ExtArgs> | null
    /**
     * The data needed to update a Satuan.
     */
    data: XOR<SatuanUpdateInput, SatuanUncheckedUpdateInput>
    /**
     * Choose, which Satuan to update.
     */
    where: SatuanWhereUniqueInput
  }

  /**
   * Satuan updateMany
   */
  export type SatuanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Satuans.
     */
    data: XOR<SatuanUpdateManyMutationInput, SatuanUncheckedUpdateManyInput>
    /**
     * Filter which Satuans to update
     */
    where?: SatuanWhereInput
    /**
     * Limit how many Satuans to update.
     */
    limit?: number
  }

  /**
   * Satuan updateManyAndReturn
   */
  export type SatuanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * The data used to update Satuans.
     */
    data: XOR<SatuanUpdateManyMutationInput, SatuanUncheckedUpdateManyInput>
    /**
     * Filter which Satuans to update
     */
    where?: SatuanWhereInput
    /**
     * Limit how many Satuans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Satuan upsert
   */
  export type SatuanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanInclude<ExtArgs> | null
    /**
     * The filter to search for the Satuan to update in case it exists.
     */
    where: SatuanWhereUniqueInput
    /**
     * In case the Satuan found by the `where` argument doesn't exist, create a new Satuan with this data.
     */
    create: XOR<SatuanCreateInput, SatuanUncheckedCreateInput>
    /**
     * In case the Satuan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SatuanUpdateInput, SatuanUncheckedUpdateInput>
  }

  /**
   * Satuan delete
   */
  export type SatuanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanInclude<ExtArgs> | null
    /**
     * Filter which Satuan to delete.
     */
    where: SatuanWhereUniqueInput
  }

  /**
   * Satuan deleteMany
   */
  export type SatuanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Satuans to delete
     */
    where?: SatuanWhereInput
    /**
     * Limit how many Satuans to delete.
     */
    limit?: number
  }

  /**
   * Satuan without action
   */
  export type SatuanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satuan
     */
    select?: SatuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satuan
     */
    omit?: SatuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatuanInclude<ExtArgs> | null
  }


  /**
   * Model Distrik
   */

  export type AggregateDistrik = {
    _count: DistrikCountAggregateOutputType | null
    _avg: DistrikAvgAggregateOutputType | null
    _sum: DistrikSumAggregateOutputType | null
    _min: DistrikMinAggregateOutputType | null
    _max: DistrikMaxAggregateOutputType | null
  }

  export type DistrikAvgAggregateOutputType = {
    id: number | null
    usulanId: number | null
  }

  export type DistrikSumAggregateOutputType = {
    id: number | null
    usulanId: number | null
  }

  export type DistrikMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaDistrik: string | null
    usulanId: number | null
  }

  export type DistrikMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaDistrik: string | null
    usulanId: number | null
  }

  export type DistrikCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    namaDistrik: number
    usulanId: number
    _all: number
  }


  export type DistrikAvgAggregateInputType = {
    id?: true
    usulanId?: true
  }

  export type DistrikSumAggregateInputType = {
    id?: true
    usulanId?: true
  }

  export type DistrikMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaDistrik?: true
    usulanId?: true
  }

  export type DistrikMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaDistrik?: true
    usulanId?: true
  }

  export type DistrikCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaDistrik?: true
    usulanId?: true
    _all?: true
  }

  export type DistrikAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distrik to aggregate.
     */
    where?: DistrikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distriks to fetch.
     */
    orderBy?: DistrikOrderByWithRelationInput | DistrikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistrikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distriks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distriks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Distriks
    **/
    _count?: true | DistrikCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistrikAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistrikSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrikMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrikMaxAggregateInputType
  }

  export type GetDistrikAggregateType<T extends DistrikAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrik]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrik[P]>
      : GetScalarType<T[P], AggregateDistrik[P]>
  }




  export type DistrikGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrikWhereInput
    orderBy?: DistrikOrderByWithAggregationInput | DistrikOrderByWithAggregationInput[]
    by: DistrikScalarFieldEnum[] | DistrikScalarFieldEnum
    having?: DistrikScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrikCountAggregateInputType | true
    _avg?: DistrikAvgAggregateInputType
    _sum?: DistrikSumAggregateInputType
    _min?: DistrikMinAggregateInputType
    _max?: DistrikMaxAggregateInputType
  }

  export type DistrikGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    namaDistrik: string
    usulanId: number | null
    _count: DistrikCountAggregateOutputType | null
    _avg: DistrikAvgAggregateOutputType | null
    _sum: DistrikSumAggregateOutputType | null
    _min: DistrikMinAggregateOutputType | null
    _max: DistrikMaxAggregateOutputType | null
  }

  type GetDistrikGroupByPayload<T extends DistrikGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistrikGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrikGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrikGroupByOutputType[P]>
            : GetScalarType<T[P], DistrikGroupByOutputType[P]>
        }
      >
    >


  export type DistrikSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaDistrik?: boolean
    usulanId?: boolean
    usulan?: boolean | Distrik$usulanArgs<ExtArgs>
    user?: boolean | Distrik$userArgs<ExtArgs>
    kampung?: boolean | Distrik$kampungArgs<ExtArgs>
    _count?: boolean | DistrikCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distrik"]>

  export type DistrikSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaDistrik?: boolean
    usulanId?: boolean
    usulan?: boolean | Distrik$usulanArgs<ExtArgs>
  }, ExtArgs["result"]["distrik"]>

  export type DistrikSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaDistrik?: boolean
    usulanId?: boolean
    usulan?: boolean | Distrik$usulanArgs<ExtArgs>
  }, ExtArgs["result"]["distrik"]>

  export type DistrikSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaDistrik?: boolean
    usulanId?: boolean
  }

  export type DistrikOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "namaDistrik" | "usulanId", ExtArgs["result"]["distrik"]>
  export type DistrikInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usulan?: boolean | Distrik$usulanArgs<ExtArgs>
    user?: boolean | Distrik$userArgs<ExtArgs>
    kampung?: boolean | Distrik$kampungArgs<ExtArgs>
    _count?: boolean | DistrikCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistrikIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usulan?: boolean | Distrik$usulanArgs<ExtArgs>
  }
  export type DistrikIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usulan?: boolean | Distrik$usulanArgs<ExtArgs>
  }

  export type $DistrikPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Distrik"
    objects: {
      usulan: Prisma.$UsulanPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      kampung: Prisma.$KampungPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      namaDistrik: string
      usulanId: number | null
    }, ExtArgs["result"]["distrik"]>
    composites: {}
  }

  type DistrikGetPayload<S extends boolean | null | undefined | DistrikDefaultArgs> = $Result.GetResult<Prisma.$DistrikPayload, S>

  type DistrikCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistrikFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistrikCountAggregateInputType | true
    }

  export interface DistrikDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Distrik'], meta: { name: 'Distrik' } }
    /**
     * Find zero or one Distrik that matches the filter.
     * @param {DistrikFindUniqueArgs} args - Arguments to find a Distrik
     * @example
     * // Get one Distrik
     * const distrik = await prisma.distrik.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistrikFindUniqueArgs>(args: SelectSubset<T, DistrikFindUniqueArgs<ExtArgs>>): Prisma__DistrikClient<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Distrik that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistrikFindUniqueOrThrowArgs} args - Arguments to find a Distrik
     * @example
     * // Get one Distrik
     * const distrik = await prisma.distrik.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistrikFindUniqueOrThrowArgs>(args: SelectSubset<T, DistrikFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistrikClient<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distrik that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrikFindFirstArgs} args - Arguments to find a Distrik
     * @example
     * // Get one Distrik
     * const distrik = await prisma.distrik.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistrikFindFirstArgs>(args?: SelectSubset<T, DistrikFindFirstArgs<ExtArgs>>): Prisma__DistrikClient<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distrik that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrikFindFirstOrThrowArgs} args - Arguments to find a Distrik
     * @example
     * // Get one Distrik
     * const distrik = await prisma.distrik.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistrikFindFirstOrThrowArgs>(args?: SelectSubset<T, DistrikFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistrikClient<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Distriks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrikFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Distriks
     * const distriks = await prisma.distrik.findMany()
     * 
     * // Get first 10 Distriks
     * const distriks = await prisma.distrik.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distrikWithIdOnly = await prisma.distrik.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistrikFindManyArgs>(args?: SelectSubset<T, DistrikFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Distrik.
     * @param {DistrikCreateArgs} args - Arguments to create a Distrik.
     * @example
     * // Create one Distrik
     * const Distrik = await prisma.distrik.create({
     *   data: {
     *     // ... data to create a Distrik
     *   }
     * })
     * 
     */
    create<T extends DistrikCreateArgs>(args: SelectSubset<T, DistrikCreateArgs<ExtArgs>>): Prisma__DistrikClient<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Distriks.
     * @param {DistrikCreateManyArgs} args - Arguments to create many Distriks.
     * @example
     * // Create many Distriks
     * const distrik = await prisma.distrik.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistrikCreateManyArgs>(args?: SelectSubset<T, DistrikCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Distriks and returns the data saved in the database.
     * @param {DistrikCreateManyAndReturnArgs} args - Arguments to create many Distriks.
     * @example
     * // Create many Distriks
     * const distrik = await prisma.distrik.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Distriks and only return the `id`
     * const distrikWithIdOnly = await prisma.distrik.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistrikCreateManyAndReturnArgs>(args?: SelectSubset<T, DistrikCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Distrik.
     * @param {DistrikDeleteArgs} args - Arguments to delete one Distrik.
     * @example
     * // Delete one Distrik
     * const Distrik = await prisma.distrik.delete({
     *   where: {
     *     // ... filter to delete one Distrik
     *   }
     * })
     * 
     */
    delete<T extends DistrikDeleteArgs>(args: SelectSubset<T, DistrikDeleteArgs<ExtArgs>>): Prisma__DistrikClient<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Distrik.
     * @param {DistrikUpdateArgs} args - Arguments to update one Distrik.
     * @example
     * // Update one Distrik
     * const distrik = await prisma.distrik.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistrikUpdateArgs>(args: SelectSubset<T, DistrikUpdateArgs<ExtArgs>>): Prisma__DistrikClient<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Distriks.
     * @param {DistrikDeleteManyArgs} args - Arguments to filter Distriks to delete.
     * @example
     * // Delete a few Distriks
     * const { count } = await prisma.distrik.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistrikDeleteManyArgs>(args?: SelectSubset<T, DistrikDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distriks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrikUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Distriks
     * const distrik = await prisma.distrik.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistrikUpdateManyArgs>(args: SelectSubset<T, DistrikUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distriks and returns the data updated in the database.
     * @param {DistrikUpdateManyAndReturnArgs} args - Arguments to update many Distriks.
     * @example
     * // Update many Distriks
     * const distrik = await prisma.distrik.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Distriks and only return the `id`
     * const distrikWithIdOnly = await prisma.distrik.updateManyAndReturn({
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
    updateManyAndReturn<T extends DistrikUpdateManyAndReturnArgs>(args: SelectSubset<T, DistrikUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Distrik.
     * @param {DistrikUpsertArgs} args - Arguments to update or create a Distrik.
     * @example
     * // Update or create a Distrik
     * const distrik = await prisma.distrik.upsert({
     *   create: {
     *     // ... data to create a Distrik
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Distrik we want to update
     *   }
     * })
     */
    upsert<T extends DistrikUpsertArgs>(args: SelectSubset<T, DistrikUpsertArgs<ExtArgs>>): Prisma__DistrikClient<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Distriks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrikCountArgs} args - Arguments to filter Distriks to count.
     * @example
     * // Count the number of Distriks
     * const count = await prisma.distrik.count({
     *   where: {
     *     // ... the filter for the Distriks we want to count
     *   }
     * })
    **/
    count<T extends DistrikCountArgs>(
      args?: Subset<T, DistrikCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrikCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Distrik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrikAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistrikAggregateArgs>(args: Subset<T, DistrikAggregateArgs>): Prisma.PrismaPromise<GetDistrikAggregateType<T>>

    /**
     * Group by Distrik.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrikGroupByArgs} args - Group by arguments.
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
      T extends DistrikGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistrikGroupByArgs['orderBy'] }
        : { orderBy?: DistrikGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistrikGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrikGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Distrik model
   */
  readonly fields: DistrikFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Distrik.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistrikClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usulan<T extends Distrik$usulanArgs<ExtArgs> = {}>(args?: Subset<T, Distrik$usulanArgs<ExtArgs>>): Prisma__UsulanClient<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Distrik$userArgs<ExtArgs> = {}>(args?: Subset<T, Distrik$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    kampung<T extends Distrik$kampungArgs<ExtArgs> = {}>(args?: Subset<T, Distrik$kampungArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Distrik model
   */
  interface DistrikFieldRefs {
    readonly id: FieldRef<"Distrik", 'Int'>
    readonly createdAt: FieldRef<"Distrik", 'DateTime'>
    readonly updatedAt: FieldRef<"Distrik", 'DateTime'>
    readonly namaDistrik: FieldRef<"Distrik", 'String'>
    readonly usulanId: FieldRef<"Distrik", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Distrik findUnique
   */
  export type DistrikFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
    /**
     * Filter, which Distrik to fetch.
     */
    where: DistrikWhereUniqueInput
  }

  /**
   * Distrik findUniqueOrThrow
   */
  export type DistrikFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
    /**
     * Filter, which Distrik to fetch.
     */
    where: DistrikWhereUniqueInput
  }

  /**
   * Distrik findFirst
   */
  export type DistrikFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
    /**
     * Filter, which Distrik to fetch.
     */
    where?: DistrikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distriks to fetch.
     */
    orderBy?: DistrikOrderByWithRelationInput | DistrikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distriks.
     */
    cursor?: DistrikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distriks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distriks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distriks.
     */
    distinct?: DistrikScalarFieldEnum | DistrikScalarFieldEnum[]
  }

  /**
   * Distrik findFirstOrThrow
   */
  export type DistrikFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
    /**
     * Filter, which Distrik to fetch.
     */
    where?: DistrikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distriks to fetch.
     */
    orderBy?: DistrikOrderByWithRelationInput | DistrikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distriks.
     */
    cursor?: DistrikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distriks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distriks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distriks.
     */
    distinct?: DistrikScalarFieldEnum | DistrikScalarFieldEnum[]
  }

  /**
   * Distrik findMany
   */
  export type DistrikFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
    /**
     * Filter, which Distriks to fetch.
     */
    where?: DistrikWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distriks to fetch.
     */
    orderBy?: DistrikOrderByWithRelationInput | DistrikOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Distriks.
     */
    cursor?: DistrikWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distriks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distriks.
     */
    skip?: number
    distinct?: DistrikScalarFieldEnum | DistrikScalarFieldEnum[]
  }

  /**
   * Distrik create
   */
  export type DistrikCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
    /**
     * The data needed to create a Distrik.
     */
    data: XOR<DistrikCreateInput, DistrikUncheckedCreateInput>
  }

  /**
   * Distrik createMany
   */
  export type DistrikCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Distriks.
     */
    data: DistrikCreateManyInput | DistrikCreateManyInput[]
  }

  /**
   * Distrik createManyAndReturn
   */
  export type DistrikCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * The data used to create many Distriks.
     */
    data: DistrikCreateManyInput | DistrikCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distrik update
   */
  export type DistrikUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
    /**
     * The data needed to update a Distrik.
     */
    data: XOR<DistrikUpdateInput, DistrikUncheckedUpdateInput>
    /**
     * Choose, which Distrik to update.
     */
    where: DistrikWhereUniqueInput
  }

  /**
   * Distrik updateMany
   */
  export type DistrikUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Distriks.
     */
    data: XOR<DistrikUpdateManyMutationInput, DistrikUncheckedUpdateManyInput>
    /**
     * Filter which Distriks to update
     */
    where?: DistrikWhereInput
    /**
     * Limit how many Distriks to update.
     */
    limit?: number
  }

  /**
   * Distrik updateManyAndReturn
   */
  export type DistrikUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * The data used to update Distriks.
     */
    data: XOR<DistrikUpdateManyMutationInput, DistrikUncheckedUpdateManyInput>
    /**
     * Filter which Distriks to update
     */
    where?: DistrikWhereInput
    /**
     * Limit how many Distriks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distrik upsert
   */
  export type DistrikUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
    /**
     * The filter to search for the Distrik to update in case it exists.
     */
    where: DistrikWhereUniqueInput
    /**
     * In case the Distrik found by the `where` argument doesn't exist, create a new Distrik with this data.
     */
    create: XOR<DistrikCreateInput, DistrikUncheckedCreateInput>
    /**
     * In case the Distrik was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistrikUpdateInput, DistrikUncheckedUpdateInput>
  }

  /**
   * Distrik delete
   */
  export type DistrikDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
    /**
     * Filter which Distrik to delete.
     */
    where: DistrikWhereUniqueInput
  }

  /**
   * Distrik deleteMany
   */
  export type DistrikDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distriks to delete
     */
    where?: DistrikWhereInput
    /**
     * Limit how many Distriks to delete.
     */
    limit?: number
  }

  /**
   * Distrik.usulan
   */
  export type Distrik$usulanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    where?: UsulanWhereInput
  }

  /**
   * Distrik.user
   */
  export type Distrik$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Distrik.kampung
   */
  export type Distrik$kampungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungInclude<ExtArgs> | null
    where?: KampungWhereInput
    orderBy?: KampungOrderByWithRelationInput | KampungOrderByWithRelationInput[]
    cursor?: KampungWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KampungScalarFieldEnum | KampungScalarFieldEnum[]
  }

  /**
   * Distrik without action
   */
  export type DistrikDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distrik
     */
    select?: DistrikSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distrik
     */
    omit?: DistrikOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrikInclude<ExtArgs> | null
  }


  /**
   * Model Kampung
   */

  export type AggregateKampung = {
    _count: KampungCountAggregateOutputType | null
    _avg: KampungAvgAggregateOutputType | null
    _sum: KampungSumAggregateOutputType | null
    _min: KampungMinAggregateOutputType | null
    _max: KampungMaxAggregateOutputType | null
  }

  export type KampungAvgAggregateOutputType = {
    id: number | null
    distrikId: number | null
  }

  export type KampungSumAggregateOutputType = {
    id: number | null
    distrikId: number | null
  }

  export type KampungMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaKampung: string | null
    distrikId: number | null
  }

  export type KampungMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    namaKampung: string | null
    distrikId: number | null
  }

  export type KampungCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    namaKampung: number
    distrikId: number
    _all: number
  }


  export type KampungAvgAggregateInputType = {
    id?: true
    distrikId?: true
  }

  export type KampungSumAggregateInputType = {
    id?: true
    distrikId?: true
  }

  export type KampungMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaKampung?: true
    distrikId?: true
  }

  export type KampungMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaKampung?: true
    distrikId?: true
  }

  export type KampungCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    namaKampung?: true
    distrikId?: true
    _all?: true
  }

  export type KampungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kampung to aggregate.
     */
    where?: KampungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kampungs to fetch.
     */
    orderBy?: KampungOrderByWithRelationInput | KampungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KampungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kampungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kampungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kampungs
    **/
    _count?: true | KampungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KampungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KampungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KampungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KampungMaxAggregateInputType
  }

  export type GetKampungAggregateType<T extends KampungAggregateArgs> = {
        [P in keyof T & keyof AggregateKampung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKampung[P]>
      : GetScalarType<T[P], AggregateKampung[P]>
  }




  export type KampungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KampungWhereInput
    orderBy?: KampungOrderByWithAggregationInput | KampungOrderByWithAggregationInput[]
    by: KampungScalarFieldEnum[] | KampungScalarFieldEnum
    having?: KampungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KampungCountAggregateInputType | true
    _avg?: KampungAvgAggregateInputType
    _sum?: KampungSumAggregateInputType
    _min?: KampungMinAggregateInputType
    _max?: KampungMaxAggregateInputType
  }

  export type KampungGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    namaKampung: string
    distrikId: number
    _count: KampungCountAggregateOutputType | null
    _avg: KampungAvgAggregateOutputType | null
    _sum: KampungSumAggregateOutputType | null
    _min: KampungMinAggregateOutputType | null
    _max: KampungMaxAggregateOutputType | null
  }

  type GetKampungGroupByPayload<T extends KampungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KampungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KampungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KampungGroupByOutputType[P]>
            : GetScalarType<T[P], KampungGroupByOutputType[P]>
        }
      >
    >


  export type KampungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaKampung?: boolean
    distrikId?: boolean
    distrik?: boolean | DistrikDefaultArgs<ExtArgs>
    usulan?: boolean | Kampung$usulanArgs<ExtArgs>
    _count?: boolean | KampungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kampung"]>

  export type KampungSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaKampung?: boolean
    distrikId?: boolean
    distrik?: boolean | DistrikDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kampung"]>

  export type KampungSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaKampung?: boolean
    distrikId?: boolean
    distrik?: boolean | DistrikDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kampung"]>

  export type KampungSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaKampung?: boolean
    distrikId?: boolean
  }

  export type KampungOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "namaKampung" | "distrikId", ExtArgs["result"]["kampung"]>
  export type KampungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distrik?: boolean | DistrikDefaultArgs<ExtArgs>
    usulan?: boolean | Kampung$usulanArgs<ExtArgs>
    _count?: boolean | KampungCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KampungIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distrik?: boolean | DistrikDefaultArgs<ExtArgs>
  }
  export type KampungIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distrik?: boolean | DistrikDefaultArgs<ExtArgs>
  }

  export type $KampungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kampung"
    objects: {
      distrik: Prisma.$DistrikPayload<ExtArgs>
      usulan: Prisma.$UsulanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      namaKampung: string
      distrikId: number
    }, ExtArgs["result"]["kampung"]>
    composites: {}
  }

  type KampungGetPayload<S extends boolean | null | undefined | KampungDefaultArgs> = $Result.GetResult<Prisma.$KampungPayload, S>

  type KampungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KampungFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KampungCountAggregateInputType | true
    }

  export interface KampungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kampung'], meta: { name: 'Kampung' } }
    /**
     * Find zero or one Kampung that matches the filter.
     * @param {KampungFindUniqueArgs} args - Arguments to find a Kampung
     * @example
     * // Get one Kampung
     * const kampung = await prisma.kampung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KampungFindUniqueArgs>(args: SelectSubset<T, KampungFindUniqueArgs<ExtArgs>>): Prisma__KampungClient<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kampung that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KampungFindUniqueOrThrowArgs} args - Arguments to find a Kampung
     * @example
     * // Get one Kampung
     * const kampung = await prisma.kampung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KampungFindUniqueOrThrowArgs>(args: SelectSubset<T, KampungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KampungClient<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kampung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KampungFindFirstArgs} args - Arguments to find a Kampung
     * @example
     * // Get one Kampung
     * const kampung = await prisma.kampung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KampungFindFirstArgs>(args?: SelectSubset<T, KampungFindFirstArgs<ExtArgs>>): Prisma__KampungClient<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kampung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KampungFindFirstOrThrowArgs} args - Arguments to find a Kampung
     * @example
     * // Get one Kampung
     * const kampung = await prisma.kampung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KampungFindFirstOrThrowArgs>(args?: SelectSubset<T, KampungFindFirstOrThrowArgs<ExtArgs>>): Prisma__KampungClient<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kampungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KampungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kampungs
     * const kampungs = await prisma.kampung.findMany()
     * 
     * // Get first 10 Kampungs
     * const kampungs = await prisma.kampung.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kampungWithIdOnly = await prisma.kampung.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KampungFindManyArgs>(args?: SelectSubset<T, KampungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kampung.
     * @param {KampungCreateArgs} args - Arguments to create a Kampung.
     * @example
     * // Create one Kampung
     * const Kampung = await prisma.kampung.create({
     *   data: {
     *     // ... data to create a Kampung
     *   }
     * })
     * 
     */
    create<T extends KampungCreateArgs>(args: SelectSubset<T, KampungCreateArgs<ExtArgs>>): Prisma__KampungClient<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kampungs.
     * @param {KampungCreateManyArgs} args - Arguments to create many Kampungs.
     * @example
     * // Create many Kampungs
     * const kampung = await prisma.kampung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KampungCreateManyArgs>(args?: SelectSubset<T, KampungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kampungs and returns the data saved in the database.
     * @param {KampungCreateManyAndReturnArgs} args - Arguments to create many Kampungs.
     * @example
     * // Create many Kampungs
     * const kampung = await prisma.kampung.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kampungs and only return the `id`
     * const kampungWithIdOnly = await prisma.kampung.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KampungCreateManyAndReturnArgs>(args?: SelectSubset<T, KampungCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kampung.
     * @param {KampungDeleteArgs} args - Arguments to delete one Kampung.
     * @example
     * // Delete one Kampung
     * const Kampung = await prisma.kampung.delete({
     *   where: {
     *     // ... filter to delete one Kampung
     *   }
     * })
     * 
     */
    delete<T extends KampungDeleteArgs>(args: SelectSubset<T, KampungDeleteArgs<ExtArgs>>): Prisma__KampungClient<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kampung.
     * @param {KampungUpdateArgs} args - Arguments to update one Kampung.
     * @example
     * // Update one Kampung
     * const kampung = await prisma.kampung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KampungUpdateArgs>(args: SelectSubset<T, KampungUpdateArgs<ExtArgs>>): Prisma__KampungClient<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kampungs.
     * @param {KampungDeleteManyArgs} args - Arguments to filter Kampungs to delete.
     * @example
     * // Delete a few Kampungs
     * const { count } = await prisma.kampung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KampungDeleteManyArgs>(args?: SelectSubset<T, KampungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kampungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KampungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kampungs
     * const kampung = await prisma.kampung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KampungUpdateManyArgs>(args: SelectSubset<T, KampungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kampungs and returns the data updated in the database.
     * @param {KampungUpdateManyAndReturnArgs} args - Arguments to update many Kampungs.
     * @example
     * // Update many Kampungs
     * const kampung = await prisma.kampung.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kampungs and only return the `id`
     * const kampungWithIdOnly = await prisma.kampung.updateManyAndReturn({
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
    updateManyAndReturn<T extends KampungUpdateManyAndReturnArgs>(args: SelectSubset<T, KampungUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kampung.
     * @param {KampungUpsertArgs} args - Arguments to update or create a Kampung.
     * @example
     * // Update or create a Kampung
     * const kampung = await prisma.kampung.upsert({
     *   create: {
     *     // ... data to create a Kampung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kampung we want to update
     *   }
     * })
     */
    upsert<T extends KampungUpsertArgs>(args: SelectSubset<T, KampungUpsertArgs<ExtArgs>>): Prisma__KampungClient<$Result.GetResult<Prisma.$KampungPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kampungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KampungCountArgs} args - Arguments to filter Kampungs to count.
     * @example
     * // Count the number of Kampungs
     * const count = await prisma.kampung.count({
     *   where: {
     *     // ... the filter for the Kampungs we want to count
     *   }
     * })
    **/
    count<T extends KampungCountArgs>(
      args?: Subset<T, KampungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KampungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kampung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KampungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KampungAggregateArgs>(args: Subset<T, KampungAggregateArgs>): Prisma.PrismaPromise<GetKampungAggregateType<T>>

    /**
     * Group by Kampung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KampungGroupByArgs} args - Group by arguments.
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
      T extends KampungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KampungGroupByArgs['orderBy'] }
        : { orderBy?: KampungGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KampungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKampungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kampung model
   */
  readonly fields: KampungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kampung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KampungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    distrik<T extends DistrikDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistrikDefaultArgs<ExtArgs>>): Prisma__DistrikClient<$Result.GetResult<Prisma.$DistrikPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usulan<T extends Kampung$usulanArgs<ExtArgs> = {}>(args?: Subset<T, Kampung$usulanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsulanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kampung model
   */
  interface KampungFieldRefs {
    readonly id: FieldRef<"Kampung", 'Int'>
    readonly createdAt: FieldRef<"Kampung", 'DateTime'>
    readonly updatedAt: FieldRef<"Kampung", 'DateTime'>
    readonly namaKampung: FieldRef<"Kampung", 'String'>
    readonly distrikId: FieldRef<"Kampung", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Kampung findUnique
   */
  export type KampungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungInclude<ExtArgs> | null
    /**
     * Filter, which Kampung to fetch.
     */
    where: KampungWhereUniqueInput
  }

  /**
   * Kampung findUniqueOrThrow
   */
  export type KampungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungInclude<ExtArgs> | null
    /**
     * Filter, which Kampung to fetch.
     */
    where: KampungWhereUniqueInput
  }

  /**
   * Kampung findFirst
   */
  export type KampungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungInclude<ExtArgs> | null
    /**
     * Filter, which Kampung to fetch.
     */
    where?: KampungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kampungs to fetch.
     */
    orderBy?: KampungOrderByWithRelationInput | KampungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kampungs.
     */
    cursor?: KampungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kampungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kampungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kampungs.
     */
    distinct?: KampungScalarFieldEnum | KampungScalarFieldEnum[]
  }

  /**
   * Kampung findFirstOrThrow
   */
  export type KampungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungInclude<ExtArgs> | null
    /**
     * Filter, which Kampung to fetch.
     */
    where?: KampungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kampungs to fetch.
     */
    orderBy?: KampungOrderByWithRelationInput | KampungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kampungs.
     */
    cursor?: KampungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kampungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kampungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kampungs.
     */
    distinct?: KampungScalarFieldEnum | KampungScalarFieldEnum[]
  }

  /**
   * Kampung findMany
   */
  export type KampungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungInclude<ExtArgs> | null
    /**
     * Filter, which Kampungs to fetch.
     */
    where?: KampungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kampungs to fetch.
     */
    orderBy?: KampungOrderByWithRelationInput | KampungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kampungs.
     */
    cursor?: KampungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kampungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kampungs.
     */
    skip?: number
    distinct?: KampungScalarFieldEnum | KampungScalarFieldEnum[]
  }

  /**
   * Kampung create
   */
  export type KampungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungInclude<ExtArgs> | null
    /**
     * The data needed to create a Kampung.
     */
    data: XOR<KampungCreateInput, KampungUncheckedCreateInput>
  }

  /**
   * Kampung createMany
   */
  export type KampungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kampungs.
     */
    data: KampungCreateManyInput | KampungCreateManyInput[]
  }

  /**
   * Kampung createManyAndReturn
   */
  export type KampungCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * The data used to create many Kampungs.
     */
    data: KampungCreateManyInput | KampungCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kampung update
   */
  export type KampungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungInclude<ExtArgs> | null
    /**
     * The data needed to update a Kampung.
     */
    data: XOR<KampungUpdateInput, KampungUncheckedUpdateInput>
    /**
     * Choose, which Kampung to update.
     */
    where: KampungWhereUniqueInput
  }

  /**
   * Kampung updateMany
   */
  export type KampungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kampungs.
     */
    data: XOR<KampungUpdateManyMutationInput, KampungUncheckedUpdateManyInput>
    /**
     * Filter which Kampungs to update
     */
    where?: KampungWhereInput
    /**
     * Limit how many Kampungs to update.
     */
    limit?: number
  }

  /**
   * Kampung updateManyAndReturn
   */
  export type KampungUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * The data used to update Kampungs.
     */
    data: XOR<KampungUpdateManyMutationInput, KampungUncheckedUpdateManyInput>
    /**
     * Filter which Kampungs to update
     */
    where?: KampungWhereInput
    /**
     * Limit how many Kampungs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kampung upsert
   */
  export type KampungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungInclude<ExtArgs> | null
    /**
     * The filter to search for the Kampung to update in case it exists.
     */
    where: KampungWhereUniqueInput
    /**
     * In case the Kampung found by the `where` argument doesn't exist, create a new Kampung with this data.
     */
    create: XOR<KampungCreateInput, KampungUncheckedCreateInput>
    /**
     * In case the Kampung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KampungUpdateInput, KampungUncheckedUpdateInput>
  }

  /**
   * Kampung delete
   */
  export type KampungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungInclude<ExtArgs> | null
    /**
     * Filter which Kampung to delete.
     */
    where: KampungWhereUniqueInput
  }

  /**
   * Kampung deleteMany
   */
  export type KampungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kampungs to delete
     */
    where?: KampungWhereInput
    /**
     * Limit how many Kampungs to delete.
     */
    limit?: number
  }

  /**
   * Kampung.usulan
   */
  export type Kampung$usulanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usulan
     */
    select?: UsulanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usulan
     */
    omit?: UsulanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsulanInclude<ExtArgs> | null
    where?: UsulanWhereInput
    orderBy?: UsulanOrderByWithRelationInput | UsulanOrderByWithRelationInput[]
    cursor?: UsulanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsulanScalarFieldEnum | UsulanScalarFieldEnum[]
  }

  /**
   * Kampung without action
   */
  export type KampungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kampung
     */
    select?: KampungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kampung
     */
    omit?: KampungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KampungInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    username: 'username',
    password: 'password',
    role: 'role',
    distrikId: 'distrikId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tahun: 'tahun',
    userId: 'userId'
  };

  export type TaScalarFieldEnum = (typeof TaScalarFieldEnum)[keyof typeof TaScalarFieldEnum]


  export const OpdScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    namaOpd: 'namaOpd',
    urusan: 'urusan',
    kodeUrusan: 'kodeUrusan',
    deskId: 'deskId'
  };

  export type OpdScalarFieldEnum = (typeof OpdScalarFieldEnum)[keyof typeof OpdScalarFieldEnum]


  export const DeskScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    namaDesk: 'namaDesk'
  };

  export type DeskScalarFieldEnum = (typeof DeskScalarFieldEnum)[keyof typeof DeskScalarFieldEnum]


  export const KegiatanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    namaKegiatan: 'namaKegiatan',
    kodeKegiatan: 'kodeKegiatan',
    opdId: 'opdId'
  };

  export type KegiatanScalarFieldEnum = (typeof KegiatanScalarFieldEnum)[keyof typeof KegiatanScalarFieldEnum]


  export const SubKegiatanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    namaSubKegiatan: 'namaSubKegiatan',
    kodeSubKegiatan: 'kodeSubKegiatan',
    kegiatanId: 'kegiatanId'
  };

  export type SubKegiatanScalarFieldEnum = (typeof SubKegiatanScalarFieldEnum)[keyof typeof SubKegiatanScalarFieldEnum]


  export const UsulanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    namaUsulan: 'namaUsulan',
    volume: 'volume',
    kampungId: 'kampungId',
    subkegiatanId: 'subkegiatanId'
  };

  export type UsulanScalarFieldEnum = (typeof UsulanScalarFieldEnum)[keyof typeof UsulanScalarFieldEnum]


  export const SatuanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    namaSatuan: 'namaSatuan',
    usulanId: 'usulanId'
  };

  export type SatuanScalarFieldEnum = (typeof SatuanScalarFieldEnum)[keyof typeof SatuanScalarFieldEnum]


  export const DistrikScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    namaDistrik: 'namaDistrik',
    usulanId: 'usulanId'
  };

  export type DistrikScalarFieldEnum = (typeof DistrikScalarFieldEnum)[keyof typeof DistrikScalarFieldEnum]


  export const KampungScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    namaKampung: 'namaKampung',
    distrikId: 'distrikId'
  };

  export type KampungScalarFieldEnum = (typeof KampungScalarFieldEnum)[keyof typeof KampungScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    distrikId?: IntNullableFilter<"User"> | number | null
    distrik?: XOR<DistrikNullableScalarRelationFilter, DistrikWhereInput> | null
    tahunAnggaran?: TaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    distrikId?: SortOrderInput | SortOrder
    distrik?: DistrikOrderByWithRelationInput
    tahunAnggaran?: TaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    distrikId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    distrik?: XOR<DistrikNullableScalarRelationFilter, DistrikWhereInput> | null
    tahunAnggaran?: TaListRelationFilter
  }, "id" | "distrikId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    distrikId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    distrikId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type TaWhereInput = {
    AND?: TaWhereInput | TaWhereInput[]
    OR?: TaWhereInput[]
    NOT?: TaWhereInput | TaWhereInput[]
    id?: IntFilter<"Ta"> | number
    createdAt?: DateTimeFilter<"Ta"> | Date | string
    updatedAt?: DateTimeFilter<"Ta"> | Date | string
    tahun?: IntFilter<"Ta"> | number
    userId?: IntFilter<"Ta"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tahun?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaWhereInput | TaWhereInput[]
    OR?: TaWhereInput[]
    NOT?: TaWhereInput | TaWhereInput[]
    createdAt?: DateTimeFilter<"Ta"> | Date | string
    updatedAt?: DateTimeFilter<"Ta"> | Date | string
    tahun?: IntFilter<"Ta"> | number
    userId?: IntFilter<"Ta"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tahun?: SortOrder
    userId?: SortOrder
    _count?: TaCountOrderByAggregateInput
    _avg?: TaAvgOrderByAggregateInput
    _max?: TaMaxOrderByAggregateInput
    _min?: TaMinOrderByAggregateInput
    _sum?: TaSumOrderByAggregateInput
  }

  export type TaScalarWhereWithAggregatesInput = {
    AND?: TaScalarWhereWithAggregatesInput | TaScalarWhereWithAggregatesInput[]
    OR?: TaScalarWhereWithAggregatesInput[]
    NOT?: TaScalarWhereWithAggregatesInput | TaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ta"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ta"> | Date | string
    tahun?: IntWithAggregatesFilter<"Ta"> | number
    userId?: IntWithAggregatesFilter<"Ta"> | number
  }

  export type OpdWhereInput = {
    AND?: OpdWhereInput | OpdWhereInput[]
    OR?: OpdWhereInput[]
    NOT?: OpdWhereInput | OpdWhereInput[]
    id?: IntFilter<"Opd"> | number
    createdAt?: DateTimeFilter<"Opd"> | Date | string
    updatedAt?: DateTimeFilter<"Opd"> | Date | string
    namaOpd?: StringFilter<"Opd"> | string
    urusan?: StringFilter<"Opd"> | string
    kodeUrusan?: StringFilter<"Opd"> | string
    deskId?: IntFilter<"Opd"> | number
    kegiatan?: KegiatanListRelationFilter
    desk?: XOR<DeskScalarRelationFilter, DeskWhereInput>
  }

  export type OpdOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaOpd?: SortOrder
    urusan?: SortOrder
    kodeUrusan?: SortOrder
    deskId?: SortOrder
    kegiatan?: KegiatanOrderByRelationAggregateInput
    desk?: DeskOrderByWithRelationInput
  }

  export type OpdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kodeUrusan?: string
    AND?: OpdWhereInput | OpdWhereInput[]
    OR?: OpdWhereInput[]
    NOT?: OpdWhereInput | OpdWhereInput[]
    createdAt?: DateTimeFilter<"Opd"> | Date | string
    updatedAt?: DateTimeFilter<"Opd"> | Date | string
    namaOpd?: StringFilter<"Opd"> | string
    urusan?: StringFilter<"Opd"> | string
    deskId?: IntFilter<"Opd"> | number
    kegiatan?: KegiatanListRelationFilter
    desk?: XOR<DeskScalarRelationFilter, DeskWhereInput>
  }, "id" | "kodeUrusan">

  export type OpdOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaOpd?: SortOrder
    urusan?: SortOrder
    kodeUrusan?: SortOrder
    deskId?: SortOrder
    _count?: OpdCountOrderByAggregateInput
    _avg?: OpdAvgOrderByAggregateInput
    _max?: OpdMaxOrderByAggregateInput
    _min?: OpdMinOrderByAggregateInput
    _sum?: OpdSumOrderByAggregateInput
  }

  export type OpdScalarWhereWithAggregatesInput = {
    AND?: OpdScalarWhereWithAggregatesInput | OpdScalarWhereWithAggregatesInput[]
    OR?: OpdScalarWhereWithAggregatesInput[]
    NOT?: OpdScalarWhereWithAggregatesInput | OpdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Opd"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Opd"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Opd"> | Date | string
    namaOpd?: StringWithAggregatesFilter<"Opd"> | string
    urusan?: StringWithAggregatesFilter<"Opd"> | string
    kodeUrusan?: StringWithAggregatesFilter<"Opd"> | string
    deskId?: IntWithAggregatesFilter<"Opd"> | number
  }

  export type DeskWhereInput = {
    AND?: DeskWhereInput | DeskWhereInput[]
    OR?: DeskWhereInput[]
    NOT?: DeskWhereInput | DeskWhereInput[]
    id?: IntFilter<"Desk"> | number
    createdAt?: DateTimeFilter<"Desk"> | Date | string
    updatedAt?: DateTimeFilter<"Desk"> | Date | string
    namaDesk?: StringFilter<"Desk"> | string
    opd?: OpdListRelationFilter
  }

  export type DeskOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaDesk?: SortOrder
    opd?: OpdOrderByRelationAggregateInput
  }

  export type DeskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeskWhereInput | DeskWhereInput[]
    OR?: DeskWhereInput[]
    NOT?: DeskWhereInput | DeskWhereInput[]
    createdAt?: DateTimeFilter<"Desk"> | Date | string
    updatedAt?: DateTimeFilter<"Desk"> | Date | string
    namaDesk?: StringFilter<"Desk"> | string
    opd?: OpdListRelationFilter
  }, "id">

  export type DeskOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaDesk?: SortOrder
    _count?: DeskCountOrderByAggregateInput
    _avg?: DeskAvgOrderByAggregateInput
    _max?: DeskMaxOrderByAggregateInput
    _min?: DeskMinOrderByAggregateInput
    _sum?: DeskSumOrderByAggregateInput
  }

  export type DeskScalarWhereWithAggregatesInput = {
    AND?: DeskScalarWhereWithAggregatesInput | DeskScalarWhereWithAggregatesInput[]
    OR?: DeskScalarWhereWithAggregatesInput[]
    NOT?: DeskScalarWhereWithAggregatesInput | DeskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Desk"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Desk"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Desk"> | Date | string
    namaDesk?: StringWithAggregatesFilter<"Desk"> | string
  }

  export type KegiatanWhereInput = {
    AND?: KegiatanWhereInput | KegiatanWhereInput[]
    OR?: KegiatanWhereInput[]
    NOT?: KegiatanWhereInput | KegiatanWhereInput[]
    id?: IntFilter<"Kegiatan"> | number
    createdAt?: DateTimeFilter<"Kegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"Kegiatan"> | Date | string
    namaKegiatan?: StringFilter<"Kegiatan"> | string
    kodeKegiatan?: StringFilter<"Kegiatan"> | string
    opdId?: IntFilter<"Kegiatan"> | number
    opd?: XOR<OpdScalarRelationFilter, OpdWhereInput>
    subkegiatan?: SubKegiatanListRelationFilter
  }

  export type KegiatanOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaKegiatan?: SortOrder
    kodeKegiatan?: SortOrder
    opdId?: SortOrder
    opd?: OpdOrderByWithRelationInput
    subkegiatan?: SubKegiatanOrderByRelationAggregateInput
  }

  export type KegiatanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kodeKegiatan?: string
    AND?: KegiatanWhereInput | KegiatanWhereInput[]
    OR?: KegiatanWhereInput[]
    NOT?: KegiatanWhereInput | KegiatanWhereInput[]
    createdAt?: DateTimeFilter<"Kegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"Kegiatan"> | Date | string
    namaKegiatan?: StringFilter<"Kegiatan"> | string
    opdId?: IntFilter<"Kegiatan"> | number
    opd?: XOR<OpdScalarRelationFilter, OpdWhereInput>
    subkegiatan?: SubKegiatanListRelationFilter
  }, "id" | "kodeKegiatan">

  export type KegiatanOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaKegiatan?: SortOrder
    kodeKegiatan?: SortOrder
    opdId?: SortOrder
    _count?: KegiatanCountOrderByAggregateInput
    _avg?: KegiatanAvgOrderByAggregateInput
    _max?: KegiatanMaxOrderByAggregateInput
    _min?: KegiatanMinOrderByAggregateInput
    _sum?: KegiatanSumOrderByAggregateInput
  }

  export type KegiatanScalarWhereWithAggregatesInput = {
    AND?: KegiatanScalarWhereWithAggregatesInput | KegiatanScalarWhereWithAggregatesInput[]
    OR?: KegiatanScalarWhereWithAggregatesInput[]
    NOT?: KegiatanScalarWhereWithAggregatesInput | KegiatanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kegiatan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Kegiatan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kegiatan"> | Date | string
    namaKegiatan?: StringWithAggregatesFilter<"Kegiatan"> | string
    kodeKegiatan?: StringWithAggregatesFilter<"Kegiatan"> | string
    opdId?: IntWithAggregatesFilter<"Kegiatan"> | number
  }

  export type SubKegiatanWhereInput = {
    AND?: SubKegiatanWhereInput | SubKegiatanWhereInput[]
    OR?: SubKegiatanWhereInput[]
    NOT?: SubKegiatanWhereInput | SubKegiatanWhereInput[]
    id?: IntFilter<"SubKegiatan"> | number
    createdAt?: DateTimeFilter<"SubKegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"SubKegiatan"> | Date | string
    namaSubKegiatan?: StringFilter<"SubKegiatan"> | string
    kodeSubKegiatan?: StringFilter<"SubKegiatan"> | string
    kegiatanId?: IntFilter<"SubKegiatan"> | number
    kegiatan?: XOR<KegiatanScalarRelationFilter, KegiatanWhereInput>
    usulan?: UsulanListRelationFilter
  }

  export type SubKegiatanOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaSubKegiatan?: SortOrder
    kodeSubKegiatan?: SortOrder
    kegiatanId?: SortOrder
    kegiatan?: KegiatanOrderByWithRelationInput
    usulan?: UsulanOrderByRelationAggregateInput
  }

  export type SubKegiatanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kodeSubKegiatan?: string
    AND?: SubKegiatanWhereInput | SubKegiatanWhereInput[]
    OR?: SubKegiatanWhereInput[]
    NOT?: SubKegiatanWhereInput | SubKegiatanWhereInput[]
    createdAt?: DateTimeFilter<"SubKegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"SubKegiatan"> | Date | string
    namaSubKegiatan?: StringFilter<"SubKegiatan"> | string
    kegiatanId?: IntFilter<"SubKegiatan"> | number
    kegiatan?: XOR<KegiatanScalarRelationFilter, KegiatanWhereInput>
    usulan?: UsulanListRelationFilter
  }, "id" | "kodeSubKegiatan">

  export type SubKegiatanOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaSubKegiatan?: SortOrder
    kodeSubKegiatan?: SortOrder
    kegiatanId?: SortOrder
    _count?: SubKegiatanCountOrderByAggregateInput
    _avg?: SubKegiatanAvgOrderByAggregateInput
    _max?: SubKegiatanMaxOrderByAggregateInput
    _min?: SubKegiatanMinOrderByAggregateInput
    _sum?: SubKegiatanSumOrderByAggregateInput
  }

  export type SubKegiatanScalarWhereWithAggregatesInput = {
    AND?: SubKegiatanScalarWhereWithAggregatesInput | SubKegiatanScalarWhereWithAggregatesInput[]
    OR?: SubKegiatanScalarWhereWithAggregatesInput[]
    NOT?: SubKegiatanScalarWhereWithAggregatesInput | SubKegiatanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubKegiatan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SubKegiatan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubKegiatan"> | Date | string
    namaSubKegiatan?: StringWithAggregatesFilter<"SubKegiatan"> | string
    kodeSubKegiatan?: StringWithAggregatesFilter<"SubKegiatan"> | string
    kegiatanId?: IntWithAggregatesFilter<"SubKegiatan"> | number
  }

  export type UsulanWhereInput = {
    AND?: UsulanWhereInput | UsulanWhereInput[]
    OR?: UsulanWhereInput[]
    NOT?: UsulanWhereInput | UsulanWhereInput[]
    id?: IntFilter<"Usulan"> | number
    createdAt?: DateTimeFilter<"Usulan"> | Date | string
    updatedAt?: DateTimeFilter<"Usulan"> | Date | string
    namaUsulan?: StringFilter<"Usulan"> | string
    volume?: StringNullableFilter<"Usulan"> | string | null
    kampungId?: IntFilter<"Usulan"> | number
    subkegiatanId?: IntFilter<"Usulan"> | number
    satuan?: SatuanListRelationFilter
    distrik?: XOR<DistrikNullableScalarRelationFilter, DistrikWhereInput> | null
    kampung?: XOR<KampungScalarRelationFilter, KampungWhereInput>
    subkegiatan?: XOR<SubKegiatanScalarRelationFilter, SubKegiatanWhereInput>
  }

  export type UsulanOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaUsulan?: SortOrder
    volume?: SortOrderInput | SortOrder
    kampungId?: SortOrder
    subkegiatanId?: SortOrder
    satuan?: SatuanOrderByRelationAggregateInput
    distrik?: DistrikOrderByWithRelationInput
    kampung?: KampungOrderByWithRelationInput
    subkegiatan?: SubKegiatanOrderByWithRelationInput
  }

  export type UsulanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsulanWhereInput | UsulanWhereInput[]
    OR?: UsulanWhereInput[]
    NOT?: UsulanWhereInput | UsulanWhereInput[]
    createdAt?: DateTimeFilter<"Usulan"> | Date | string
    updatedAt?: DateTimeFilter<"Usulan"> | Date | string
    namaUsulan?: StringFilter<"Usulan"> | string
    volume?: StringNullableFilter<"Usulan"> | string | null
    kampungId?: IntFilter<"Usulan"> | number
    subkegiatanId?: IntFilter<"Usulan"> | number
    satuan?: SatuanListRelationFilter
    distrik?: XOR<DistrikNullableScalarRelationFilter, DistrikWhereInput> | null
    kampung?: XOR<KampungScalarRelationFilter, KampungWhereInput>
    subkegiatan?: XOR<SubKegiatanScalarRelationFilter, SubKegiatanWhereInput>
  }, "id">

  export type UsulanOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaUsulan?: SortOrder
    volume?: SortOrderInput | SortOrder
    kampungId?: SortOrder
    subkegiatanId?: SortOrder
    _count?: UsulanCountOrderByAggregateInput
    _avg?: UsulanAvgOrderByAggregateInput
    _max?: UsulanMaxOrderByAggregateInput
    _min?: UsulanMinOrderByAggregateInput
    _sum?: UsulanSumOrderByAggregateInput
  }

  export type UsulanScalarWhereWithAggregatesInput = {
    AND?: UsulanScalarWhereWithAggregatesInput | UsulanScalarWhereWithAggregatesInput[]
    OR?: UsulanScalarWhereWithAggregatesInput[]
    NOT?: UsulanScalarWhereWithAggregatesInput | UsulanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usulan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Usulan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usulan"> | Date | string
    namaUsulan?: StringWithAggregatesFilter<"Usulan"> | string
    volume?: StringNullableWithAggregatesFilter<"Usulan"> | string | null
    kampungId?: IntWithAggregatesFilter<"Usulan"> | number
    subkegiatanId?: IntWithAggregatesFilter<"Usulan"> | number
  }

  export type SatuanWhereInput = {
    AND?: SatuanWhereInput | SatuanWhereInput[]
    OR?: SatuanWhereInput[]
    NOT?: SatuanWhereInput | SatuanWhereInput[]
    id?: IntFilter<"Satuan"> | number
    createdAt?: DateTimeFilter<"Satuan"> | Date | string
    updatedAt?: DateTimeFilter<"Satuan"> | Date | string
    namaSatuan?: StringFilter<"Satuan"> | string
    usulanId?: IntFilter<"Satuan"> | number
    usulan?: XOR<UsulanScalarRelationFilter, UsulanWhereInput>
  }

  export type SatuanOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaSatuan?: SortOrder
    usulanId?: SortOrder
    usulan?: UsulanOrderByWithRelationInput
  }

  export type SatuanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SatuanWhereInput | SatuanWhereInput[]
    OR?: SatuanWhereInput[]
    NOT?: SatuanWhereInput | SatuanWhereInput[]
    createdAt?: DateTimeFilter<"Satuan"> | Date | string
    updatedAt?: DateTimeFilter<"Satuan"> | Date | string
    namaSatuan?: StringFilter<"Satuan"> | string
    usulanId?: IntFilter<"Satuan"> | number
    usulan?: XOR<UsulanScalarRelationFilter, UsulanWhereInput>
  }, "id">

  export type SatuanOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaSatuan?: SortOrder
    usulanId?: SortOrder
    _count?: SatuanCountOrderByAggregateInput
    _avg?: SatuanAvgOrderByAggregateInput
    _max?: SatuanMaxOrderByAggregateInput
    _min?: SatuanMinOrderByAggregateInput
    _sum?: SatuanSumOrderByAggregateInput
  }

  export type SatuanScalarWhereWithAggregatesInput = {
    AND?: SatuanScalarWhereWithAggregatesInput | SatuanScalarWhereWithAggregatesInput[]
    OR?: SatuanScalarWhereWithAggregatesInput[]
    NOT?: SatuanScalarWhereWithAggregatesInput | SatuanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Satuan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Satuan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Satuan"> | Date | string
    namaSatuan?: StringWithAggregatesFilter<"Satuan"> | string
    usulanId?: IntWithAggregatesFilter<"Satuan"> | number
  }

  export type DistrikWhereInput = {
    AND?: DistrikWhereInput | DistrikWhereInput[]
    OR?: DistrikWhereInput[]
    NOT?: DistrikWhereInput | DistrikWhereInput[]
    id?: IntFilter<"Distrik"> | number
    createdAt?: DateTimeFilter<"Distrik"> | Date | string
    updatedAt?: DateTimeFilter<"Distrik"> | Date | string
    namaDistrik?: StringFilter<"Distrik"> | string
    usulanId?: IntNullableFilter<"Distrik"> | number | null
    usulan?: XOR<UsulanNullableScalarRelationFilter, UsulanWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    kampung?: KampungListRelationFilter
  }

  export type DistrikOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaDistrik?: SortOrder
    usulanId?: SortOrderInput | SortOrder
    usulan?: UsulanOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    kampung?: KampungOrderByRelationAggregateInput
  }

  export type DistrikWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usulanId?: number
    AND?: DistrikWhereInput | DistrikWhereInput[]
    OR?: DistrikWhereInput[]
    NOT?: DistrikWhereInput | DistrikWhereInput[]
    createdAt?: DateTimeFilter<"Distrik"> | Date | string
    updatedAt?: DateTimeFilter<"Distrik"> | Date | string
    namaDistrik?: StringFilter<"Distrik"> | string
    usulan?: XOR<UsulanNullableScalarRelationFilter, UsulanWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    kampung?: KampungListRelationFilter
  }, "id" | "usulanId">

  export type DistrikOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaDistrik?: SortOrder
    usulanId?: SortOrderInput | SortOrder
    _count?: DistrikCountOrderByAggregateInput
    _avg?: DistrikAvgOrderByAggregateInput
    _max?: DistrikMaxOrderByAggregateInput
    _min?: DistrikMinOrderByAggregateInput
    _sum?: DistrikSumOrderByAggregateInput
  }

  export type DistrikScalarWhereWithAggregatesInput = {
    AND?: DistrikScalarWhereWithAggregatesInput | DistrikScalarWhereWithAggregatesInput[]
    OR?: DistrikScalarWhereWithAggregatesInput[]
    NOT?: DistrikScalarWhereWithAggregatesInput | DistrikScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Distrik"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Distrik"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Distrik"> | Date | string
    namaDistrik?: StringWithAggregatesFilter<"Distrik"> | string
    usulanId?: IntNullableWithAggregatesFilter<"Distrik"> | number | null
  }

  export type KampungWhereInput = {
    AND?: KampungWhereInput | KampungWhereInput[]
    OR?: KampungWhereInput[]
    NOT?: KampungWhereInput | KampungWhereInput[]
    id?: IntFilter<"Kampung"> | number
    createdAt?: DateTimeFilter<"Kampung"> | Date | string
    updatedAt?: DateTimeFilter<"Kampung"> | Date | string
    namaKampung?: StringFilter<"Kampung"> | string
    distrikId?: IntFilter<"Kampung"> | number
    distrik?: XOR<DistrikScalarRelationFilter, DistrikWhereInput>
    usulan?: UsulanListRelationFilter
  }

  export type KampungOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaKampung?: SortOrder
    distrikId?: SortOrder
    distrik?: DistrikOrderByWithRelationInput
    usulan?: UsulanOrderByRelationAggregateInput
  }

  export type KampungWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KampungWhereInput | KampungWhereInput[]
    OR?: KampungWhereInput[]
    NOT?: KampungWhereInput | KampungWhereInput[]
    createdAt?: DateTimeFilter<"Kampung"> | Date | string
    updatedAt?: DateTimeFilter<"Kampung"> | Date | string
    namaKampung?: StringFilter<"Kampung"> | string
    distrikId?: IntFilter<"Kampung"> | number
    distrik?: XOR<DistrikScalarRelationFilter, DistrikWhereInput>
    usulan?: UsulanListRelationFilter
  }, "id">

  export type KampungOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaKampung?: SortOrder
    distrikId?: SortOrder
    _count?: KampungCountOrderByAggregateInput
    _avg?: KampungAvgOrderByAggregateInput
    _max?: KampungMaxOrderByAggregateInput
    _min?: KampungMinOrderByAggregateInput
    _sum?: KampungSumOrderByAggregateInput
  }

  export type KampungScalarWhereWithAggregatesInput = {
    AND?: KampungScalarWhereWithAggregatesInput | KampungScalarWhereWithAggregatesInput[]
    OR?: KampungScalarWhereWithAggregatesInput[]
    NOT?: KampungScalarWhereWithAggregatesInput | KampungScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kampung"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Kampung"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kampung"> | Date | string
    namaKampung?: StringWithAggregatesFilter<"Kampung"> | string
    distrikId?: IntWithAggregatesFilter<"Kampung"> | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    role: string
    distrik?: DistrikCreateNestedOneWithoutUserInput
    tahunAnggaran?: TaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    role: string
    distrikId?: number | null
    tahunAnggaran?: TaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    distrik?: DistrikUpdateOneWithoutUserNestedInput
    tahunAnggaran?: TaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    distrikId?: NullableIntFieldUpdateOperationsInput | number | null
    tahunAnggaran?: TaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    role: string
    distrikId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    distrikId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    tahun: number
    user: UserCreateNestedOneWithoutTahunAnggaranInput
  }

  export type TaUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tahun: number
    userId: number
  }

  export type TaUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTahunAnggaranNestedInput
  }

  export type TaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tahun: number
    userId: number
  }

  export type TaUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun?: IntFieldUpdateOperationsInput | number
  }

  export type TaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OpdCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaOpd: string
    urusan: string
    kodeUrusan: string
    kegiatan?: KegiatanCreateNestedManyWithoutOpdInput
    desk: DeskCreateNestedOneWithoutOpdInput
  }

  export type OpdUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaOpd: string
    urusan: string
    kodeUrusan: string
    deskId: number
    kegiatan?: KegiatanUncheckedCreateNestedManyWithoutOpdInput
  }

  export type OpdUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaOpd?: StringFieldUpdateOperationsInput | string
    urusan?: StringFieldUpdateOperationsInput | string
    kodeUrusan?: StringFieldUpdateOperationsInput | string
    kegiatan?: KegiatanUpdateManyWithoutOpdNestedInput
    desk?: DeskUpdateOneRequiredWithoutOpdNestedInput
  }

  export type OpdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaOpd?: StringFieldUpdateOperationsInput | string
    urusan?: StringFieldUpdateOperationsInput | string
    kodeUrusan?: StringFieldUpdateOperationsInput | string
    deskId?: IntFieldUpdateOperationsInput | number
    kegiatan?: KegiatanUncheckedUpdateManyWithoutOpdNestedInput
  }

  export type OpdCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaOpd: string
    urusan: string
    kodeUrusan: string
    deskId: number
  }

  export type OpdUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaOpd?: StringFieldUpdateOperationsInput | string
    urusan?: StringFieldUpdateOperationsInput | string
    kodeUrusan?: StringFieldUpdateOperationsInput | string
  }

  export type OpdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaOpd?: StringFieldUpdateOperationsInput | string
    urusan?: StringFieldUpdateOperationsInput | string
    kodeUrusan?: StringFieldUpdateOperationsInput | string
    deskId?: IntFieldUpdateOperationsInput | number
  }

  export type DeskCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDesk: string
    opd?: OpdCreateNestedManyWithoutDeskInput
  }

  export type DeskUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDesk: string
    opd?: OpdUncheckedCreateNestedManyWithoutDeskInput
  }

  export type DeskUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDesk?: StringFieldUpdateOperationsInput | string
    opd?: OpdUpdateManyWithoutDeskNestedInput
  }

  export type DeskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDesk?: StringFieldUpdateOperationsInput | string
    opd?: OpdUncheckedUpdateManyWithoutDeskNestedInput
  }

  export type DeskCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDesk: string
  }

  export type DeskUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDesk?: StringFieldUpdateOperationsInput | string
  }

  export type DeskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDesk?: StringFieldUpdateOperationsInput | string
  }

  export type KegiatanCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKegiatan: string
    kodeKegiatan: string
    opd: OpdCreateNestedOneWithoutKegiatanInput
    subkegiatan?: SubKegiatanCreateNestedManyWithoutKegiatanInput
  }

  export type KegiatanUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKegiatan: string
    kodeKegiatan: string
    opdId: number
    subkegiatan?: SubKegiatanUncheckedCreateNestedManyWithoutKegiatanInput
  }

  export type KegiatanUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKegiatan?: StringFieldUpdateOperationsInput | string
    kodeKegiatan?: StringFieldUpdateOperationsInput | string
    opd?: OpdUpdateOneRequiredWithoutKegiatanNestedInput
    subkegiatan?: SubKegiatanUpdateManyWithoutKegiatanNestedInput
  }

  export type KegiatanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKegiatan?: StringFieldUpdateOperationsInput | string
    kodeKegiatan?: StringFieldUpdateOperationsInput | string
    opdId?: IntFieldUpdateOperationsInput | number
    subkegiatan?: SubKegiatanUncheckedUpdateManyWithoutKegiatanNestedInput
  }

  export type KegiatanCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKegiatan: string
    kodeKegiatan: string
    opdId: number
  }

  export type KegiatanUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKegiatan?: StringFieldUpdateOperationsInput | string
    kodeKegiatan?: StringFieldUpdateOperationsInput | string
  }

  export type KegiatanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKegiatan?: StringFieldUpdateOperationsInput | string
    kodeKegiatan?: StringFieldUpdateOperationsInput | string
    opdId?: IntFieldUpdateOperationsInput | number
  }

  export type SubKegiatanCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSubKegiatan: string
    kodeSubKegiatan: string
    kegiatan: KegiatanCreateNestedOneWithoutSubkegiatanInput
    usulan?: UsulanCreateNestedManyWithoutSubkegiatanInput
  }

  export type SubKegiatanUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSubKegiatan: string
    kodeSubKegiatan: string
    kegiatanId: number
    usulan?: UsulanUncheckedCreateNestedManyWithoutSubkegiatanInput
  }

  export type SubKegiatanUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSubKegiatan?: StringFieldUpdateOperationsInput | string
    kodeSubKegiatan?: StringFieldUpdateOperationsInput | string
    kegiatan?: KegiatanUpdateOneRequiredWithoutSubkegiatanNestedInput
    usulan?: UsulanUpdateManyWithoutSubkegiatanNestedInput
  }

  export type SubKegiatanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSubKegiatan?: StringFieldUpdateOperationsInput | string
    kodeSubKegiatan?: StringFieldUpdateOperationsInput | string
    kegiatanId?: IntFieldUpdateOperationsInput | number
    usulan?: UsulanUncheckedUpdateManyWithoutSubkegiatanNestedInput
  }

  export type SubKegiatanCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSubKegiatan: string
    kodeSubKegiatan: string
    kegiatanId: number
  }

  export type SubKegiatanUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSubKegiatan?: StringFieldUpdateOperationsInput | string
    kodeSubKegiatan?: StringFieldUpdateOperationsInput | string
  }

  export type SubKegiatanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSubKegiatan?: StringFieldUpdateOperationsInput | string
    kodeSubKegiatan?: StringFieldUpdateOperationsInput | string
    kegiatanId?: IntFieldUpdateOperationsInput | number
  }

  export type UsulanCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    satuan?: SatuanCreateNestedManyWithoutUsulanInput
    distrik?: DistrikCreateNestedOneWithoutUsulanInput
    kampung: KampungCreateNestedOneWithoutUsulanInput
    subkegiatan: SubKegiatanCreateNestedOneWithoutUsulanInput
  }

  export type UsulanUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    kampungId: number
    subkegiatanId: number
    satuan?: SatuanUncheckedCreateNestedManyWithoutUsulanInput
    distrik?: DistrikUncheckedCreateNestedOneWithoutUsulanInput
  }

  export type UsulanUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    satuan?: SatuanUpdateManyWithoutUsulanNestedInput
    distrik?: DistrikUpdateOneWithoutUsulanNestedInput
    kampung?: KampungUpdateOneRequiredWithoutUsulanNestedInput
    subkegiatan?: SubKegiatanUpdateOneRequiredWithoutUsulanNestedInput
  }

  export type UsulanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    kampungId?: IntFieldUpdateOperationsInput | number
    subkegiatanId?: IntFieldUpdateOperationsInput | number
    satuan?: SatuanUncheckedUpdateManyWithoutUsulanNestedInput
    distrik?: DistrikUncheckedUpdateOneWithoutUsulanNestedInput
  }

  export type UsulanCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    kampungId: number
    subkegiatanId: number
  }

  export type UsulanUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsulanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    kampungId?: IntFieldUpdateOperationsInput | number
    subkegiatanId?: IntFieldUpdateOperationsInput | number
  }

  export type SatuanCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSatuan: string
    usulan: UsulanCreateNestedOneWithoutSatuanInput
  }

  export type SatuanUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSatuan: string
    usulanId: number
  }

  export type SatuanUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSatuan?: StringFieldUpdateOperationsInput | string
    usulan?: UsulanUpdateOneRequiredWithoutSatuanNestedInput
  }

  export type SatuanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSatuan?: StringFieldUpdateOperationsInput | string
    usulanId?: IntFieldUpdateOperationsInput | number
  }

  export type SatuanCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSatuan: string
    usulanId: number
  }

  export type SatuanUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSatuan?: StringFieldUpdateOperationsInput | string
  }

  export type SatuanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSatuan?: StringFieldUpdateOperationsInput | string
    usulanId?: IntFieldUpdateOperationsInput | number
  }

  export type DistrikCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDistrik: string
    usulan?: UsulanCreateNestedOneWithoutDistrikInput
    user?: UserCreateNestedOneWithoutDistrikInput
    kampung?: KampungCreateNestedManyWithoutDistrikInput
  }

  export type DistrikUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDistrik: string
    usulanId?: number | null
    user?: UserUncheckedCreateNestedOneWithoutDistrikInput
    kampung?: KampungUncheckedCreateNestedManyWithoutDistrikInput
  }

  export type DistrikUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDistrik?: StringFieldUpdateOperationsInput | string
    usulan?: UsulanUpdateOneWithoutDistrikNestedInput
    user?: UserUpdateOneWithoutDistrikNestedInput
    kampung?: KampungUpdateManyWithoutDistrikNestedInput
  }

  export type DistrikUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDistrik?: StringFieldUpdateOperationsInput | string
    usulanId?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUncheckedUpdateOneWithoutDistrikNestedInput
    kampung?: KampungUncheckedUpdateManyWithoutDistrikNestedInput
  }

  export type DistrikCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDistrik: string
    usulanId?: number | null
  }

  export type DistrikUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDistrik?: StringFieldUpdateOperationsInput | string
  }

  export type DistrikUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDistrik?: StringFieldUpdateOperationsInput | string
    usulanId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KampungCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKampung: string
    distrik: DistrikCreateNestedOneWithoutKampungInput
    usulan?: UsulanCreateNestedManyWithoutKampungInput
  }

  export type KampungUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKampung: string
    distrikId: number
    usulan?: UsulanUncheckedCreateNestedManyWithoutKampungInput
  }

  export type KampungUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKampung?: StringFieldUpdateOperationsInput | string
    distrik?: DistrikUpdateOneRequiredWithoutKampungNestedInput
    usulan?: UsulanUpdateManyWithoutKampungNestedInput
  }

  export type KampungUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKampung?: StringFieldUpdateOperationsInput | string
    distrikId?: IntFieldUpdateOperationsInput | number
    usulan?: UsulanUncheckedUpdateManyWithoutKampungNestedInput
  }

  export type KampungCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKampung: string
    distrikId: number
  }

  export type KampungUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKampung?: StringFieldUpdateOperationsInput | string
  }

  export type KampungUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKampung?: StringFieldUpdateOperationsInput | string
    distrikId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DistrikNullableScalarRelationFilter = {
    is?: DistrikWhereInput | null
    isNot?: DistrikWhereInput | null
  }

  export type TaListRelationFilter = {
    every?: TaWhereInput
    some?: TaWhereInput
    none?: TaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    distrikId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    distrikId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    distrikId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    distrikId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    distrikId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tahun?: SortOrder
    userId?: SortOrder
  }

  export type TaAvgOrderByAggregateInput = {
    id?: SortOrder
    tahun?: SortOrder
    userId?: SortOrder
  }

  export type TaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tahun?: SortOrder
    userId?: SortOrder
  }

  export type TaMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tahun?: SortOrder
    userId?: SortOrder
  }

  export type TaSumOrderByAggregateInput = {
    id?: SortOrder
    tahun?: SortOrder
    userId?: SortOrder
  }

  export type KegiatanListRelationFilter = {
    every?: KegiatanWhereInput
    some?: KegiatanWhereInput
    none?: KegiatanWhereInput
  }

  export type DeskScalarRelationFilter = {
    is?: DeskWhereInput
    isNot?: DeskWhereInput
  }

  export type KegiatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpdCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaOpd?: SortOrder
    urusan?: SortOrder
    kodeUrusan?: SortOrder
    deskId?: SortOrder
  }

  export type OpdAvgOrderByAggregateInput = {
    id?: SortOrder
    deskId?: SortOrder
  }

  export type OpdMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaOpd?: SortOrder
    urusan?: SortOrder
    kodeUrusan?: SortOrder
    deskId?: SortOrder
  }

  export type OpdMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaOpd?: SortOrder
    urusan?: SortOrder
    kodeUrusan?: SortOrder
    deskId?: SortOrder
  }

  export type OpdSumOrderByAggregateInput = {
    id?: SortOrder
    deskId?: SortOrder
  }

  export type OpdListRelationFilter = {
    every?: OpdWhereInput
    some?: OpdWhereInput
    none?: OpdWhereInput
  }

  export type OpdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeskCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaDesk?: SortOrder
  }

  export type DeskAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DeskMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaDesk?: SortOrder
  }

  export type DeskMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaDesk?: SortOrder
  }

  export type DeskSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OpdScalarRelationFilter = {
    is?: OpdWhereInput
    isNot?: OpdWhereInput
  }

  export type SubKegiatanListRelationFilter = {
    every?: SubKegiatanWhereInput
    some?: SubKegiatanWhereInput
    none?: SubKegiatanWhereInput
  }

  export type SubKegiatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KegiatanCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaKegiatan?: SortOrder
    kodeKegiatan?: SortOrder
    opdId?: SortOrder
  }

  export type KegiatanAvgOrderByAggregateInput = {
    id?: SortOrder
    opdId?: SortOrder
  }

  export type KegiatanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaKegiatan?: SortOrder
    kodeKegiatan?: SortOrder
    opdId?: SortOrder
  }

  export type KegiatanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaKegiatan?: SortOrder
    kodeKegiatan?: SortOrder
    opdId?: SortOrder
  }

  export type KegiatanSumOrderByAggregateInput = {
    id?: SortOrder
    opdId?: SortOrder
  }

  export type KegiatanScalarRelationFilter = {
    is?: KegiatanWhereInput
    isNot?: KegiatanWhereInput
  }

  export type UsulanListRelationFilter = {
    every?: UsulanWhereInput
    some?: UsulanWhereInput
    none?: UsulanWhereInput
  }

  export type UsulanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubKegiatanCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaSubKegiatan?: SortOrder
    kodeSubKegiatan?: SortOrder
    kegiatanId?: SortOrder
  }

  export type SubKegiatanAvgOrderByAggregateInput = {
    id?: SortOrder
    kegiatanId?: SortOrder
  }

  export type SubKegiatanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaSubKegiatan?: SortOrder
    kodeSubKegiatan?: SortOrder
    kegiatanId?: SortOrder
  }

  export type SubKegiatanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaSubKegiatan?: SortOrder
    kodeSubKegiatan?: SortOrder
    kegiatanId?: SortOrder
  }

  export type SubKegiatanSumOrderByAggregateInput = {
    id?: SortOrder
    kegiatanId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SatuanListRelationFilter = {
    every?: SatuanWhereInput
    some?: SatuanWhereInput
    none?: SatuanWhereInput
  }

  export type KampungScalarRelationFilter = {
    is?: KampungWhereInput
    isNot?: KampungWhereInput
  }

  export type SubKegiatanScalarRelationFilter = {
    is?: SubKegiatanWhereInput
    isNot?: SubKegiatanWhereInput
  }

  export type SatuanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsulanCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaUsulan?: SortOrder
    volume?: SortOrder
    kampungId?: SortOrder
    subkegiatanId?: SortOrder
  }

  export type UsulanAvgOrderByAggregateInput = {
    id?: SortOrder
    kampungId?: SortOrder
    subkegiatanId?: SortOrder
  }

  export type UsulanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaUsulan?: SortOrder
    volume?: SortOrder
    kampungId?: SortOrder
    subkegiatanId?: SortOrder
  }

  export type UsulanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaUsulan?: SortOrder
    volume?: SortOrder
    kampungId?: SortOrder
    subkegiatanId?: SortOrder
  }

  export type UsulanSumOrderByAggregateInput = {
    id?: SortOrder
    kampungId?: SortOrder
    subkegiatanId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type UsulanScalarRelationFilter = {
    is?: UsulanWhereInput
    isNot?: UsulanWhereInput
  }

  export type SatuanCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaSatuan?: SortOrder
    usulanId?: SortOrder
  }

  export type SatuanAvgOrderByAggregateInput = {
    id?: SortOrder
    usulanId?: SortOrder
  }

  export type SatuanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaSatuan?: SortOrder
    usulanId?: SortOrder
  }

  export type SatuanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaSatuan?: SortOrder
    usulanId?: SortOrder
  }

  export type SatuanSumOrderByAggregateInput = {
    id?: SortOrder
    usulanId?: SortOrder
  }

  export type UsulanNullableScalarRelationFilter = {
    is?: UsulanWhereInput | null
    isNot?: UsulanWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type KampungListRelationFilter = {
    every?: KampungWhereInput
    some?: KampungWhereInput
    none?: KampungWhereInput
  }

  export type KampungOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistrikCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaDistrik?: SortOrder
    usulanId?: SortOrder
  }

  export type DistrikAvgOrderByAggregateInput = {
    id?: SortOrder
    usulanId?: SortOrder
  }

  export type DistrikMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaDistrik?: SortOrder
    usulanId?: SortOrder
  }

  export type DistrikMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaDistrik?: SortOrder
    usulanId?: SortOrder
  }

  export type DistrikSumOrderByAggregateInput = {
    id?: SortOrder
    usulanId?: SortOrder
  }

  export type DistrikScalarRelationFilter = {
    is?: DistrikWhereInput
    isNot?: DistrikWhereInput
  }

  export type KampungCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaKampung?: SortOrder
    distrikId?: SortOrder
  }

  export type KampungAvgOrderByAggregateInput = {
    id?: SortOrder
    distrikId?: SortOrder
  }

  export type KampungMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaKampung?: SortOrder
    distrikId?: SortOrder
  }

  export type KampungMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaKampung?: SortOrder
    distrikId?: SortOrder
  }

  export type KampungSumOrderByAggregateInput = {
    id?: SortOrder
    distrikId?: SortOrder
  }

  export type DistrikCreateNestedOneWithoutUserInput = {
    create?: XOR<DistrikCreateWithoutUserInput, DistrikUncheckedCreateWithoutUserInput>
    connectOrCreate?: DistrikCreateOrConnectWithoutUserInput
    connect?: DistrikWhereUniqueInput
  }

  export type TaCreateNestedManyWithoutUserInput = {
    create?: XOR<TaCreateWithoutUserInput, TaUncheckedCreateWithoutUserInput> | TaCreateWithoutUserInput[] | TaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaCreateOrConnectWithoutUserInput | TaCreateOrConnectWithoutUserInput[]
    createMany?: TaCreateManyUserInputEnvelope
    connect?: TaWhereUniqueInput | TaWhereUniqueInput[]
  }

  export type TaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaCreateWithoutUserInput, TaUncheckedCreateWithoutUserInput> | TaCreateWithoutUserInput[] | TaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaCreateOrConnectWithoutUserInput | TaCreateOrConnectWithoutUserInput[]
    createMany?: TaCreateManyUserInputEnvelope
    connect?: TaWhereUniqueInput | TaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DistrikUpdateOneWithoutUserNestedInput = {
    create?: XOR<DistrikCreateWithoutUserInput, DistrikUncheckedCreateWithoutUserInput>
    connectOrCreate?: DistrikCreateOrConnectWithoutUserInput
    upsert?: DistrikUpsertWithoutUserInput
    disconnect?: DistrikWhereInput | boolean
    delete?: DistrikWhereInput | boolean
    connect?: DistrikWhereUniqueInput
    update?: XOR<XOR<DistrikUpdateToOneWithWhereWithoutUserInput, DistrikUpdateWithoutUserInput>, DistrikUncheckedUpdateWithoutUserInput>
  }

  export type TaUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaCreateWithoutUserInput, TaUncheckedCreateWithoutUserInput> | TaCreateWithoutUserInput[] | TaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaCreateOrConnectWithoutUserInput | TaCreateOrConnectWithoutUserInput[]
    upsert?: TaUpsertWithWhereUniqueWithoutUserInput | TaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaCreateManyUserInputEnvelope
    set?: TaWhereUniqueInput | TaWhereUniqueInput[]
    disconnect?: TaWhereUniqueInput | TaWhereUniqueInput[]
    delete?: TaWhereUniqueInput | TaWhereUniqueInput[]
    connect?: TaWhereUniqueInput | TaWhereUniqueInput[]
    update?: TaUpdateWithWhereUniqueWithoutUserInput | TaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaUpdateManyWithWhereWithoutUserInput | TaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaScalarWhereInput | TaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaCreateWithoutUserInput, TaUncheckedCreateWithoutUserInput> | TaCreateWithoutUserInput[] | TaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaCreateOrConnectWithoutUserInput | TaCreateOrConnectWithoutUserInput[]
    upsert?: TaUpsertWithWhereUniqueWithoutUserInput | TaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaCreateManyUserInputEnvelope
    set?: TaWhereUniqueInput | TaWhereUniqueInput[]
    disconnect?: TaWhereUniqueInput | TaWhereUniqueInput[]
    delete?: TaWhereUniqueInput | TaWhereUniqueInput[]
    connect?: TaWhereUniqueInput | TaWhereUniqueInput[]
    update?: TaUpdateWithWhereUniqueWithoutUserInput | TaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaUpdateManyWithWhereWithoutUserInput | TaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaScalarWhereInput | TaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTahunAnggaranInput = {
    create?: XOR<UserCreateWithoutTahunAnggaranInput, UserUncheckedCreateWithoutTahunAnggaranInput>
    connectOrCreate?: UserCreateOrConnectWithoutTahunAnggaranInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTahunAnggaranNestedInput = {
    create?: XOR<UserCreateWithoutTahunAnggaranInput, UserUncheckedCreateWithoutTahunAnggaranInput>
    connectOrCreate?: UserCreateOrConnectWithoutTahunAnggaranInput
    upsert?: UserUpsertWithoutTahunAnggaranInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTahunAnggaranInput, UserUpdateWithoutTahunAnggaranInput>, UserUncheckedUpdateWithoutTahunAnggaranInput>
  }

  export type KegiatanCreateNestedManyWithoutOpdInput = {
    create?: XOR<KegiatanCreateWithoutOpdInput, KegiatanUncheckedCreateWithoutOpdInput> | KegiatanCreateWithoutOpdInput[] | KegiatanUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutOpdInput | KegiatanCreateOrConnectWithoutOpdInput[]
    createMany?: KegiatanCreateManyOpdInputEnvelope
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
  }

  export type DeskCreateNestedOneWithoutOpdInput = {
    create?: XOR<DeskCreateWithoutOpdInput, DeskUncheckedCreateWithoutOpdInput>
    connectOrCreate?: DeskCreateOrConnectWithoutOpdInput
    connect?: DeskWhereUniqueInput
  }

  export type KegiatanUncheckedCreateNestedManyWithoutOpdInput = {
    create?: XOR<KegiatanCreateWithoutOpdInput, KegiatanUncheckedCreateWithoutOpdInput> | KegiatanCreateWithoutOpdInput[] | KegiatanUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutOpdInput | KegiatanCreateOrConnectWithoutOpdInput[]
    createMany?: KegiatanCreateManyOpdInputEnvelope
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
  }

  export type KegiatanUpdateManyWithoutOpdNestedInput = {
    create?: XOR<KegiatanCreateWithoutOpdInput, KegiatanUncheckedCreateWithoutOpdInput> | KegiatanCreateWithoutOpdInput[] | KegiatanUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutOpdInput | KegiatanCreateOrConnectWithoutOpdInput[]
    upsert?: KegiatanUpsertWithWhereUniqueWithoutOpdInput | KegiatanUpsertWithWhereUniqueWithoutOpdInput[]
    createMany?: KegiatanCreateManyOpdInputEnvelope
    set?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    disconnect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    delete?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    update?: KegiatanUpdateWithWhereUniqueWithoutOpdInput | KegiatanUpdateWithWhereUniqueWithoutOpdInput[]
    updateMany?: KegiatanUpdateManyWithWhereWithoutOpdInput | KegiatanUpdateManyWithWhereWithoutOpdInput[]
    deleteMany?: KegiatanScalarWhereInput | KegiatanScalarWhereInput[]
  }

  export type DeskUpdateOneRequiredWithoutOpdNestedInput = {
    create?: XOR<DeskCreateWithoutOpdInput, DeskUncheckedCreateWithoutOpdInput>
    connectOrCreate?: DeskCreateOrConnectWithoutOpdInput
    upsert?: DeskUpsertWithoutOpdInput
    connect?: DeskWhereUniqueInput
    update?: XOR<XOR<DeskUpdateToOneWithWhereWithoutOpdInput, DeskUpdateWithoutOpdInput>, DeskUncheckedUpdateWithoutOpdInput>
  }

  export type KegiatanUncheckedUpdateManyWithoutOpdNestedInput = {
    create?: XOR<KegiatanCreateWithoutOpdInput, KegiatanUncheckedCreateWithoutOpdInput> | KegiatanCreateWithoutOpdInput[] | KegiatanUncheckedCreateWithoutOpdInput[]
    connectOrCreate?: KegiatanCreateOrConnectWithoutOpdInput | KegiatanCreateOrConnectWithoutOpdInput[]
    upsert?: KegiatanUpsertWithWhereUniqueWithoutOpdInput | KegiatanUpsertWithWhereUniqueWithoutOpdInput[]
    createMany?: KegiatanCreateManyOpdInputEnvelope
    set?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    disconnect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    delete?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    connect?: KegiatanWhereUniqueInput | KegiatanWhereUniqueInput[]
    update?: KegiatanUpdateWithWhereUniqueWithoutOpdInput | KegiatanUpdateWithWhereUniqueWithoutOpdInput[]
    updateMany?: KegiatanUpdateManyWithWhereWithoutOpdInput | KegiatanUpdateManyWithWhereWithoutOpdInput[]
    deleteMany?: KegiatanScalarWhereInput | KegiatanScalarWhereInput[]
  }

  export type OpdCreateNestedManyWithoutDeskInput = {
    create?: XOR<OpdCreateWithoutDeskInput, OpdUncheckedCreateWithoutDeskInput> | OpdCreateWithoutDeskInput[] | OpdUncheckedCreateWithoutDeskInput[]
    connectOrCreate?: OpdCreateOrConnectWithoutDeskInput | OpdCreateOrConnectWithoutDeskInput[]
    createMany?: OpdCreateManyDeskInputEnvelope
    connect?: OpdWhereUniqueInput | OpdWhereUniqueInput[]
  }

  export type OpdUncheckedCreateNestedManyWithoutDeskInput = {
    create?: XOR<OpdCreateWithoutDeskInput, OpdUncheckedCreateWithoutDeskInput> | OpdCreateWithoutDeskInput[] | OpdUncheckedCreateWithoutDeskInput[]
    connectOrCreate?: OpdCreateOrConnectWithoutDeskInput | OpdCreateOrConnectWithoutDeskInput[]
    createMany?: OpdCreateManyDeskInputEnvelope
    connect?: OpdWhereUniqueInput | OpdWhereUniqueInput[]
  }

  export type OpdUpdateManyWithoutDeskNestedInput = {
    create?: XOR<OpdCreateWithoutDeskInput, OpdUncheckedCreateWithoutDeskInput> | OpdCreateWithoutDeskInput[] | OpdUncheckedCreateWithoutDeskInput[]
    connectOrCreate?: OpdCreateOrConnectWithoutDeskInput | OpdCreateOrConnectWithoutDeskInput[]
    upsert?: OpdUpsertWithWhereUniqueWithoutDeskInput | OpdUpsertWithWhereUniqueWithoutDeskInput[]
    createMany?: OpdCreateManyDeskInputEnvelope
    set?: OpdWhereUniqueInput | OpdWhereUniqueInput[]
    disconnect?: OpdWhereUniqueInput | OpdWhereUniqueInput[]
    delete?: OpdWhereUniqueInput | OpdWhereUniqueInput[]
    connect?: OpdWhereUniqueInput | OpdWhereUniqueInput[]
    update?: OpdUpdateWithWhereUniqueWithoutDeskInput | OpdUpdateWithWhereUniqueWithoutDeskInput[]
    updateMany?: OpdUpdateManyWithWhereWithoutDeskInput | OpdUpdateManyWithWhereWithoutDeskInput[]
    deleteMany?: OpdScalarWhereInput | OpdScalarWhereInput[]
  }

  export type OpdUncheckedUpdateManyWithoutDeskNestedInput = {
    create?: XOR<OpdCreateWithoutDeskInput, OpdUncheckedCreateWithoutDeskInput> | OpdCreateWithoutDeskInput[] | OpdUncheckedCreateWithoutDeskInput[]
    connectOrCreate?: OpdCreateOrConnectWithoutDeskInput | OpdCreateOrConnectWithoutDeskInput[]
    upsert?: OpdUpsertWithWhereUniqueWithoutDeskInput | OpdUpsertWithWhereUniqueWithoutDeskInput[]
    createMany?: OpdCreateManyDeskInputEnvelope
    set?: OpdWhereUniqueInput | OpdWhereUniqueInput[]
    disconnect?: OpdWhereUniqueInput | OpdWhereUniqueInput[]
    delete?: OpdWhereUniqueInput | OpdWhereUniqueInput[]
    connect?: OpdWhereUniqueInput | OpdWhereUniqueInput[]
    update?: OpdUpdateWithWhereUniqueWithoutDeskInput | OpdUpdateWithWhereUniqueWithoutDeskInput[]
    updateMany?: OpdUpdateManyWithWhereWithoutDeskInput | OpdUpdateManyWithWhereWithoutDeskInput[]
    deleteMany?: OpdScalarWhereInput | OpdScalarWhereInput[]
  }

  export type OpdCreateNestedOneWithoutKegiatanInput = {
    create?: XOR<OpdCreateWithoutKegiatanInput, OpdUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: OpdCreateOrConnectWithoutKegiatanInput
    connect?: OpdWhereUniqueInput
  }

  export type SubKegiatanCreateNestedManyWithoutKegiatanInput = {
    create?: XOR<SubKegiatanCreateWithoutKegiatanInput, SubKegiatanUncheckedCreateWithoutKegiatanInput> | SubKegiatanCreateWithoutKegiatanInput[] | SubKegiatanUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: SubKegiatanCreateOrConnectWithoutKegiatanInput | SubKegiatanCreateOrConnectWithoutKegiatanInput[]
    createMany?: SubKegiatanCreateManyKegiatanInputEnvelope
    connect?: SubKegiatanWhereUniqueInput | SubKegiatanWhereUniqueInput[]
  }

  export type SubKegiatanUncheckedCreateNestedManyWithoutKegiatanInput = {
    create?: XOR<SubKegiatanCreateWithoutKegiatanInput, SubKegiatanUncheckedCreateWithoutKegiatanInput> | SubKegiatanCreateWithoutKegiatanInput[] | SubKegiatanUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: SubKegiatanCreateOrConnectWithoutKegiatanInput | SubKegiatanCreateOrConnectWithoutKegiatanInput[]
    createMany?: SubKegiatanCreateManyKegiatanInputEnvelope
    connect?: SubKegiatanWhereUniqueInput | SubKegiatanWhereUniqueInput[]
  }

  export type OpdUpdateOneRequiredWithoutKegiatanNestedInput = {
    create?: XOR<OpdCreateWithoutKegiatanInput, OpdUncheckedCreateWithoutKegiatanInput>
    connectOrCreate?: OpdCreateOrConnectWithoutKegiatanInput
    upsert?: OpdUpsertWithoutKegiatanInput
    connect?: OpdWhereUniqueInput
    update?: XOR<XOR<OpdUpdateToOneWithWhereWithoutKegiatanInput, OpdUpdateWithoutKegiatanInput>, OpdUncheckedUpdateWithoutKegiatanInput>
  }

  export type SubKegiatanUpdateManyWithoutKegiatanNestedInput = {
    create?: XOR<SubKegiatanCreateWithoutKegiatanInput, SubKegiatanUncheckedCreateWithoutKegiatanInput> | SubKegiatanCreateWithoutKegiatanInput[] | SubKegiatanUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: SubKegiatanCreateOrConnectWithoutKegiatanInput | SubKegiatanCreateOrConnectWithoutKegiatanInput[]
    upsert?: SubKegiatanUpsertWithWhereUniqueWithoutKegiatanInput | SubKegiatanUpsertWithWhereUniqueWithoutKegiatanInput[]
    createMany?: SubKegiatanCreateManyKegiatanInputEnvelope
    set?: SubKegiatanWhereUniqueInput | SubKegiatanWhereUniqueInput[]
    disconnect?: SubKegiatanWhereUniqueInput | SubKegiatanWhereUniqueInput[]
    delete?: SubKegiatanWhereUniqueInput | SubKegiatanWhereUniqueInput[]
    connect?: SubKegiatanWhereUniqueInput | SubKegiatanWhereUniqueInput[]
    update?: SubKegiatanUpdateWithWhereUniqueWithoutKegiatanInput | SubKegiatanUpdateWithWhereUniqueWithoutKegiatanInput[]
    updateMany?: SubKegiatanUpdateManyWithWhereWithoutKegiatanInput | SubKegiatanUpdateManyWithWhereWithoutKegiatanInput[]
    deleteMany?: SubKegiatanScalarWhereInput | SubKegiatanScalarWhereInput[]
  }

  export type SubKegiatanUncheckedUpdateManyWithoutKegiatanNestedInput = {
    create?: XOR<SubKegiatanCreateWithoutKegiatanInput, SubKegiatanUncheckedCreateWithoutKegiatanInput> | SubKegiatanCreateWithoutKegiatanInput[] | SubKegiatanUncheckedCreateWithoutKegiatanInput[]
    connectOrCreate?: SubKegiatanCreateOrConnectWithoutKegiatanInput | SubKegiatanCreateOrConnectWithoutKegiatanInput[]
    upsert?: SubKegiatanUpsertWithWhereUniqueWithoutKegiatanInput | SubKegiatanUpsertWithWhereUniqueWithoutKegiatanInput[]
    createMany?: SubKegiatanCreateManyKegiatanInputEnvelope
    set?: SubKegiatanWhereUniqueInput | SubKegiatanWhereUniqueInput[]
    disconnect?: SubKegiatanWhereUniqueInput | SubKegiatanWhereUniqueInput[]
    delete?: SubKegiatanWhereUniqueInput | SubKegiatanWhereUniqueInput[]
    connect?: SubKegiatanWhereUniqueInput | SubKegiatanWhereUniqueInput[]
    update?: SubKegiatanUpdateWithWhereUniqueWithoutKegiatanInput | SubKegiatanUpdateWithWhereUniqueWithoutKegiatanInput[]
    updateMany?: SubKegiatanUpdateManyWithWhereWithoutKegiatanInput | SubKegiatanUpdateManyWithWhereWithoutKegiatanInput[]
    deleteMany?: SubKegiatanScalarWhereInput | SubKegiatanScalarWhereInput[]
  }

  export type KegiatanCreateNestedOneWithoutSubkegiatanInput = {
    create?: XOR<KegiatanCreateWithoutSubkegiatanInput, KegiatanUncheckedCreateWithoutSubkegiatanInput>
    connectOrCreate?: KegiatanCreateOrConnectWithoutSubkegiatanInput
    connect?: KegiatanWhereUniqueInput
  }

  export type UsulanCreateNestedManyWithoutSubkegiatanInput = {
    create?: XOR<UsulanCreateWithoutSubkegiatanInput, UsulanUncheckedCreateWithoutSubkegiatanInput> | UsulanCreateWithoutSubkegiatanInput[] | UsulanUncheckedCreateWithoutSubkegiatanInput[]
    connectOrCreate?: UsulanCreateOrConnectWithoutSubkegiatanInput | UsulanCreateOrConnectWithoutSubkegiatanInput[]
    createMany?: UsulanCreateManySubkegiatanInputEnvelope
    connect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
  }

  export type UsulanUncheckedCreateNestedManyWithoutSubkegiatanInput = {
    create?: XOR<UsulanCreateWithoutSubkegiatanInput, UsulanUncheckedCreateWithoutSubkegiatanInput> | UsulanCreateWithoutSubkegiatanInput[] | UsulanUncheckedCreateWithoutSubkegiatanInput[]
    connectOrCreate?: UsulanCreateOrConnectWithoutSubkegiatanInput | UsulanCreateOrConnectWithoutSubkegiatanInput[]
    createMany?: UsulanCreateManySubkegiatanInputEnvelope
    connect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
  }

  export type KegiatanUpdateOneRequiredWithoutSubkegiatanNestedInput = {
    create?: XOR<KegiatanCreateWithoutSubkegiatanInput, KegiatanUncheckedCreateWithoutSubkegiatanInput>
    connectOrCreate?: KegiatanCreateOrConnectWithoutSubkegiatanInput
    upsert?: KegiatanUpsertWithoutSubkegiatanInput
    connect?: KegiatanWhereUniqueInput
    update?: XOR<XOR<KegiatanUpdateToOneWithWhereWithoutSubkegiatanInput, KegiatanUpdateWithoutSubkegiatanInput>, KegiatanUncheckedUpdateWithoutSubkegiatanInput>
  }

  export type UsulanUpdateManyWithoutSubkegiatanNestedInput = {
    create?: XOR<UsulanCreateWithoutSubkegiatanInput, UsulanUncheckedCreateWithoutSubkegiatanInput> | UsulanCreateWithoutSubkegiatanInput[] | UsulanUncheckedCreateWithoutSubkegiatanInput[]
    connectOrCreate?: UsulanCreateOrConnectWithoutSubkegiatanInput | UsulanCreateOrConnectWithoutSubkegiatanInput[]
    upsert?: UsulanUpsertWithWhereUniqueWithoutSubkegiatanInput | UsulanUpsertWithWhereUniqueWithoutSubkegiatanInput[]
    createMany?: UsulanCreateManySubkegiatanInputEnvelope
    set?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    disconnect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    delete?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    connect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    update?: UsulanUpdateWithWhereUniqueWithoutSubkegiatanInput | UsulanUpdateWithWhereUniqueWithoutSubkegiatanInput[]
    updateMany?: UsulanUpdateManyWithWhereWithoutSubkegiatanInput | UsulanUpdateManyWithWhereWithoutSubkegiatanInput[]
    deleteMany?: UsulanScalarWhereInput | UsulanScalarWhereInput[]
  }

  export type UsulanUncheckedUpdateManyWithoutSubkegiatanNestedInput = {
    create?: XOR<UsulanCreateWithoutSubkegiatanInput, UsulanUncheckedCreateWithoutSubkegiatanInput> | UsulanCreateWithoutSubkegiatanInput[] | UsulanUncheckedCreateWithoutSubkegiatanInput[]
    connectOrCreate?: UsulanCreateOrConnectWithoutSubkegiatanInput | UsulanCreateOrConnectWithoutSubkegiatanInput[]
    upsert?: UsulanUpsertWithWhereUniqueWithoutSubkegiatanInput | UsulanUpsertWithWhereUniqueWithoutSubkegiatanInput[]
    createMany?: UsulanCreateManySubkegiatanInputEnvelope
    set?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    disconnect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    delete?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    connect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    update?: UsulanUpdateWithWhereUniqueWithoutSubkegiatanInput | UsulanUpdateWithWhereUniqueWithoutSubkegiatanInput[]
    updateMany?: UsulanUpdateManyWithWhereWithoutSubkegiatanInput | UsulanUpdateManyWithWhereWithoutSubkegiatanInput[]
    deleteMany?: UsulanScalarWhereInput | UsulanScalarWhereInput[]
  }

  export type SatuanCreateNestedManyWithoutUsulanInput = {
    create?: XOR<SatuanCreateWithoutUsulanInput, SatuanUncheckedCreateWithoutUsulanInput> | SatuanCreateWithoutUsulanInput[] | SatuanUncheckedCreateWithoutUsulanInput[]
    connectOrCreate?: SatuanCreateOrConnectWithoutUsulanInput | SatuanCreateOrConnectWithoutUsulanInput[]
    createMany?: SatuanCreateManyUsulanInputEnvelope
    connect?: SatuanWhereUniqueInput | SatuanWhereUniqueInput[]
  }

  export type DistrikCreateNestedOneWithoutUsulanInput = {
    create?: XOR<DistrikCreateWithoutUsulanInput, DistrikUncheckedCreateWithoutUsulanInput>
    connectOrCreate?: DistrikCreateOrConnectWithoutUsulanInput
    connect?: DistrikWhereUniqueInput
  }

  export type KampungCreateNestedOneWithoutUsulanInput = {
    create?: XOR<KampungCreateWithoutUsulanInput, KampungUncheckedCreateWithoutUsulanInput>
    connectOrCreate?: KampungCreateOrConnectWithoutUsulanInput
    connect?: KampungWhereUniqueInput
  }

  export type SubKegiatanCreateNestedOneWithoutUsulanInput = {
    create?: XOR<SubKegiatanCreateWithoutUsulanInput, SubKegiatanUncheckedCreateWithoutUsulanInput>
    connectOrCreate?: SubKegiatanCreateOrConnectWithoutUsulanInput
    connect?: SubKegiatanWhereUniqueInput
  }

  export type SatuanUncheckedCreateNestedManyWithoutUsulanInput = {
    create?: XOR<SatuanCreateWithoutUsulanInput, SatuanUncheckedCreateWithoutUsulanInput> | SatuanCreateWithoutUsulanInput[] | SatuanUncheckedCreateWithoutUsulanInput[]
    connectOrCreate?: SatuanCreateOrConnectWithoutUsulanInput | SatuanCreateOrConnectWithoutUsulanInput[]
    createMany?: SatuanCreateManyUsulanInputEnvelope
    connect?: SatuanWhereUniqueInput | SatuanWhereUniqueInput[]
  }

  export type DistrikUncheckedCreateNestedOneWithoutUsulanInput = {
    create?: XOR<DistrikCreateWithoutUsulanInput, DistrikUncheckedCreateWithoutUsulanInput>
    connectOrCreate?: DistrikCreateOrConnectWithoutUsulanInput
    connect?: DistrikWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SatuanUpdateManyWithoutUsulanNestedInput = {
    create?: XOR<SatuanCreateWithoutUsulanInput, SatuanUncheckedCreateWithoutUsulanInput> | SatuanCreateWithoutUsulanInput[] | SatuanUncheckedCreateWithoutUsulanInput[]
    connectOrCreate?: SatuanCreateOrConnectWithoutUsulanInput | SatuanCreateOrConnectWithoutUsulanInput[]
    upsert?: SatuanUpsertWithWhereUniqueWithoutUsulanInput | SatuanUpsertWithWhereUniqueWithoutUsulanInput[]
    createMany?: SatuanCreateManyUsulanInputEnvelope
    set?: SatuanWhereUniqueInput | SatuanWhereUniqueInput[]
    disconnect?: SatuanWhereUniqueInput | SatuanWhereUniqueInput[]
    delete?: SatuanWhereUniqueInput | SatuanWhereUniqueInput[]
    connect?: SatuanWhereUniqueInput | SatuanWhereUniqueInput[]
    update?: SatuanUpdateWithWhereUniqueWithoutUsulanInput | SatuanUpdateWithWhereUniqueWithoutUsulanInput[]
    updateMany?: SatuanUpdateManyWithWhereWithoutUsulanInput | SatuanUpdateManyWithWhereWithoutUsulanInput[]
    deleteMany?: SatuanScalarWhereInput | SatuanScalarWhereInput[]
  }

  export type DistrikUpdateOneWithoutUsulanNestedInput = {
    create?: XOR<DistrikCreateWithoutUsulanInput, DistrikUncheckedCreateWithoutUsulanInput>
    connectOrCreate?: DistrikCreateOrConnectWithoutUsulanInput
    upsert?: DistrikUpsertWithoutUsulanInput
    disconnect?: DistrikWhereInput | boolean
    delete?: DistrikWhereInput | boolean
    connect?: DistrikWhereUniqueInput
    update?: XOR<XOR<DistrikUpdateToOneWithWhereWithoutUsulanInput, DistrikUpdateWithoutUsulanInput>, DistrikUncheckedUpdateWithoutUsulanInput>
  }

  export type KampungUpdateOneRequiredWithoutUsulanNestedInput = {
    create?: XOR<KampungCreateWithoutUsulanInput, KampungUncheckedCreateWithoutUsulanInput>
    connectOrCreate?: KampungCreateOrConnectWithoutUsulanInput
    upsert?: KampungUpsertWithoutUsulanInput
    connect?: KampungWhereUniqueInput
    update?: XOR<XOR<KampungUpdateToOneWithWhereWithoutUsulanInput, KampungUpdateWithoutUsulanInput>, KampungUncheckedUpdateWithoutUsulanInput>
  }

  export type SubKegiatanUpdateOneRequiredWithoutUsulanNestedInput = {
    create?: XOR<SubKegiatanCreateWithoutUsulanInput, SubKegiatanUncheckedCreateWithoutUsulanInput>
    connectOrCreate?: SubKegiatanCreateOrConnectWithoutUsulanInput
    upsert?: SubKegiatanUpsertWithoutUsulanInput
    connect?: SubKegiatanWhereUniqueInput
    update?: XOR<XOR<SubKegiatanUpdateToOneWithWhereWithoutUsulanInput, SubKegiatanUpdateWithoutUsulanInput>, SubKegiatanUncheckedUpdateWithoutUsulanInput>
  }

  export type SatuanUncheckedUpdateManyWithoutUsulanNestedInput = {
    create?: XOR<SatuanCreateWithoutUsulanInput, SatuanUncheckedCreateWithoutUsulanInput> | SatuanCreateWithoutUsulanInput[] | SatuanUncheckedCreateWithoutUsulanInput[]
    connectOrCreate?: SatuanCreateOrConnectWithoutUsulanInput | SatuanCreateOrConnectWithoutUsulanInput[]
    upsert?: SatuanUpsertWithWhereUniqueWithoutUsulanInput | SatuanUpsertWithWhereUniqueWithoutUsulanInput[]
    createMany?: SatuanCreateManyUsulanInputEnvelope
    set?: SatuanWhereUniqueInput | SatuanWhereUniqueInput[]
    disconnect?: SatuanWhereUniqueInput | SatuanWhereUniqueInput[]
    delete?: SatuanWhereUniqueInput | SatuanWhereUniqueInput[]
    connect?: SatuanWhereUniqueInput | SatuanWhereUniqueInput[]
    update?: SatuanUpdateWithWhereUniqueWithoutUsulanInput | SatuanUpdateWithWhereUniqueWithoutUsulanInput[]
    updateMany?: SatuanUpdateManyWithWhereWithoutUsulanInput | SatuanUpdateManyWithWhereWithoutUsulanInput[]
    deleteMany?: SatuanScalarWhereInput | SatuanScalarWhereInput[]
  }

  export type DistrikUncheckedUpdateOneWithoutUsulanNestedInput = {
    create?: XOR<DistrikCreateWithoutUsulanInput, DistrikUncheckedCreateWithoutUsulanInput>
    connectOrCreate?: DistrikCreateOrConnectWithoutUsulanInput
    upsert?: DistrikUpsertWithoutUsulanInput
    disconnect?: DistrikWhereInput | boolean
    delete?: DistrikWhereInput | boolean
    connect?: DistrikWhereUniqueInput
    update?: XOR<XOR<DistrikUpdateToOneWithWhereWithoutUsulanInput, DistrikUpdateWithoutUsulanInput>, DistrikUncheckedUpdateWithoutUsulanInput>
  }

  export type UsulanCreateNestedOneWithoutSatuanInput = {
    create?: XOR<UsulanCreateWithoutSatuanInput, UsulanUncheckedCreateWithoutSatuanInput>
    connectOrCreate?: UsulanCreateOrConnectWithoutSatuanInput
    connect?: UsulanWhereUniqueInput
  }

  export type UsulanUpdateOneRequiredWithoutSatuanNestedInput = {
    create?: XOR<UsulanCreateWithoutSatuanInput, UsulanUncheckedCreateWithoutSatuanInput>
    connectOrCreate?: UsulanCreateOrConnectWithoutSatuanInput
    upsert?: UsulanUpsertWithoutSatuanInput
    connect?: UsulanWhereUniqueInput
    update?: XOR<XOR<UsulanUpdateToOneWithWhereWithoutSatuanInput, UsulanUpdateWithoutSatuanInput>, UsulanUncheckedUpdateWithoutSatuanInput>
  }

  export type UsulanCreateNestedOneWithoutDistrikInput = {
    create?: XOR<UsulanCreateWithoutDistrikInput, UsulanUncheckedCreateWithoutDistrikInput>
    connectOrCreate?: UsulanCreateOrConnectWithoutDistrikInput
    connect?: UsulanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDistrikInput = {
    create?: XOR<UserCreateWithoutDistrikInput, UserUncheckedCreateWithoutDistrikInput>
    connectOrCreate?: UserCreateOrConnectWithoutDistrikInput
    connect?: UserWhereUniqueInput
  }

  export type KampungCreateNestedManyWithoutDistrikInput = {
    create?: XOR<KampungCreateWithoutDistrikInput, KampungUncheckedCreateWithoutDistrikInput> | KampungCreateWithoutDistrikInput[] | KampungUncheckedCreateWithoutDistrikInput[]
    connectOrCreate?: KampungCreateOrConnectWithoutDistrikInput | KampungCreateOrConnectWithoutDistrikInput[]
    createMany?: KampungCreateManyDistrikInputEnvelope
    connect?: KampungWhereUniqueInput | KampungWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutDistrikInput = {
    create?: XOR<UserCreateWithoutDistrikInput, UserUncheckedCreateWithoutDistrikInput>
    connectOrCreate?: UserCreateOrConnectWithoutDistrikInput
    connect?: UserWhereUniqueInput
  }

  export type KampungUncheckedCreateNestedManyWithoutDistrikInput = {
    create?: XOR<KampungCreateWithoutDistrikInput, KampungUncheckedCreateWithoutDistrikInput> | KampungCreateWithoutDistrikInput[] | KampungUncheckedCreateWithoutDistrikInput[]
    connectOrCreate?: KampungCreateOrConnectWithoutDistrikInput | KampungCreateOrConnectWithoutDistrikInput[]
    createMany?: KampungCreateManyDistrikInputEnvelope
    connect?: KampungWhereUniqueInput | KampungWhereUniqueInput[]
  }

  export type UsulanUpdateOneWithoutDistrikNestedInput = {
    create?: XOR<UsulanCreateWithoutDistrikInput, UsulanUncheckedCreateWithoutDistrikInput>
    connectOrCreate?: UsulanCreateOrConnectWithoutDistrikInput
    upsert?: UsulanUpsertWithoutDistrikInput
    disconnect?: UsulanWhereInput | boolean
    delete?: UsulanWhereInput | boolean
    connect?: UsulanWhereUniqueInput
    update?: XOR<XOR<UsulanUpdateToOneWithWhereWithoutDistrikInput, UsulanUpdateWithoutDistrikInput>, UsulanUncheckedUpdateWithoutDistrikInput>
  }

  export type UserUpdateOneWithoutDistrikNestedInput = {
    create?: XOR<UserCreateWithoutDistrikInput, UserUncheckedCreateWithoutDistrikInput>
    connectOrCreate?: UserCreateOrConnectWithoutDistrikInput
    upsert?: UserUpsertWithoutDistrikInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDistrikInput, UserUpdateWithoutDistrikInput>, UserUncheckedUpdateWithoutDistrikInput>
  }

  export type KampungUpdateManyWithoutDistrikNestedInput = {
    create?: XOR<KampungCreateWithoutDistrikInput, KampungUncheckedCreateWithoutDistrikInput> | KampungCreateWithoutDistrikInput[] | KampungUncheckedCreateWithoutDistrikInput[]
    connectOrCreate?: KampungCreateOrConnectWithoutDistrikInput | KampungCreateOrConnectWithoutDistrikInput[]
    upsert?: KampungUpsertWithWhereUniqueWithoutDistrikInput | KampungUpsertWithWhereUniqueWithoutDistrikInput[]
    createMany?: KampungCreateManyDistrikInputEnvelope
    set?: KampungWhereUniqueInput | KampungWhereUniqueInput[]
    disconnect?: KampungWhereUniqueInput | KampungWhereUniqueInput[]
    delete?: KampungWhereUniqueInput | KampungWhereUniqueInput[]
    connect?: KampungWhereUniqueInput | KampungWhereUniqueInput[]
    update?: KampungUpdateWithWhereUniqueWithoutDistrikInput | KampungUpdateWithWhereUniqueWithoutDistrikInput[]
    updateMany?: KampungUpdateManyWithWhereWithoutDistrikInput | KampungUpdateManyWithWhereWithoutDistrikInput[]
    deleteMany?: KampungScalarWhereInput | KampungScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutDistrikNestedInput = {
    create?: XOR<UserCreateWithoutDistrikInput, UserUncheckedCreateWithoutDistrikInput>
    connectOrCreate?: UserCreateOrConnectWithoutDistrikInput
    upsert?: UserUpsertWithoutDistrikInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDistrikInput, UserUpdateWithoutDistrikInput>, UserUncheckedUpdateWithoutDistrikInput>
  }

  export type KampungUncheckedUpdateManyWithoutDistrikNestedInput = {
    create?: XOR<KampungCreateWithoutDistrikInput, KampungUncheckedCreateWithoutDistrikInput> | KampungCreateWithoutDistrikInput[] | KampungUncheckedCreateWithoutDistrikInput[]
    connectOrCreate?: KampungCreateOrConnectWithoutDistrikInput | KampungCreateOrConnectWithoutDistrikInput[]
    upsert?: KampungUpsertWithWhereUniqueWithoutDistrikInput | KampungUpsertWithWhereUniqueWithoutDistrikInput[]
    createMany?: KampungCreateManyDistrikInputEnvelope
    set?: KampungWhereUniqueInput | KampungWhereUniqueInput[]
    disconnect?: KampungWhereUniqueInput | KampungWhereUniqueInput[]
    delete?: KampungWhereUniqueInput | KampungWhereUniqueInput[]
    connect?: KampungWhereUniqueInput | KampungWhereUniqueInput[]
    update?: KampungUpdateWithWhereUniqueWithoutDistrikInput | KampungUpdateWithWhereUniqueWithoutDistrikInput[]
    updateMany?: KampungUpdateManyWithWhereWithoutDistrikInput | KampungUpdateManyWithWhereWithoutDistrikInput[]
    deleteMany?: KampungScalarWhereInput | KampungScalarWhereInput[]
  }

  export type DistrikCreateNestedOneWithoutKampungInput = {
    create?: XOR<DistrikCreateWithoutKampungInput, DistrikUncheckedCreateWithoutKampungInput>
    connectOrCreate?: DistrikCreateOrConnectWithoutKampungInput
    connect?: DistrikWhereUniqueInput
  }

  export type UsulanCreateNestedManyWithoutKampungInput = {
    create?: XOR<UsulanCreateWithoutKampungInput, UsulanUncheckedCreateWithoutKampungInput> | UsulanCreateWithoutKampungInput[] | UsulanUncheckedCreateWithoutKampungInput[]
    connectOrCreate?: UsulanCreateOrConnectWithoutKampungInput | UsulanCreateOrConnectWithoutKampungInput[]
    createMany?: UsulanCreateManyKampungInputEnvelope
    connect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
  }

  export type UsulanUncheckedCreateNestedManyWithoutKampungInput = {
    create?: XOR<UsulanCreateWithoutKampungInput, UsulanUncheckedCreateWithoutKampungInput> | UsulanCreateWithoutKampungInput[] | UsulanUncheckedCreateWithoutKampungInput[]
    connectOrCreate?: UsulanCreateOrConnectWithoutKampungInput | UsulanCreateOrConnectWithoutKampungInput[]
    createMany?: UsulanCreateManyKampungInputEnvelope
    connect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
  }

  export type DistrikUpdateOneRequiredWithoutKampungNestedInput = {
    create?: XOR<DistrikCreateWithoutKampungInput, DistrikUncheckedCreateWithoutKampungInput>
    connectOrCreate?: DistrikCreateOrConnectWithoutKampungInput
    upsert?: DistrikUpsertWithoutKampungInput
    connect?: DistrikWhereUniqueInput
    update?: XOR<XOR<DistrikUpdateToOneWithWhereWithoutKampungInput, DistrikUpdateWithoutKampungInput>, DistrikUncheckedUpdateWithoutKampungInput>
  }

  export type UsulanUpdateManyWithoutKampungNestedInput = {
    create?: XOR<UsulanCreateWithoutKampungInput, UsulanUncheckedCreateWithoutKampungInput> | UsulanCreateWithoutKampungInput[] | UsulanUncheckedCreateWithoutKampungInput[]
    connectOrCreate?: UsulanCreateOrConnectWithoutKampungInput | UsulanCreateOrConnectWithoutKampungInput[]
    upsert?: UsulanUpsertWithWhereUniqueWithoutKampungInput | UsulanUpsertWithWhereUniqueWithoutKampungInput[]
    createMany?: UsulanCreateManyKampungInputEnvelope
    set?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    disconnect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    delete?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    connect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    update?: UsulanUpdateWithWhereUniqueWithoutKampungInput | UsulanUpdateWithWhereUniqueWithoutKampungInput[]
    updateMany?: UsulanUpdateManyWithWhereWithoutKampungInput | UsulanUpdateManyWithWhereWithoutKampungInput[]
    deleteMany?: UsulanScalarWhereInput | UsulanScalarWhereInput[]
  }

  export type UsulanUncheckedUpdateManyWithoutKampungNestedInput = {
    create?: XOR<UsulanCreateWithoutKampungInput, UsulanUncheckedCreateWithoutKampungInput> | UsulanCreateWithoutKampungInput[] | UsulanUncheckedCreateWithoutKampungInput[]
    connectOrCreate?: UsulanCreateOrConnectWithoutKampungInput | UsulanCreateOrConnectWithoutKampungInput[]
    upsert?: UsulanUpsertWithWhereUniqueWithoutKampungInput | UsulanUpsertWithWhereUniqueWithoutKampungInput[]
    createMany?: UsulanCreateManyKampungInputEnvelope
    set?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    disconnect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    delete?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    connect?: UsulanWhereUniqueInput | UsulanWhereUniqueInput[]
    update?: UsulanUpdateWithWhereUniqueWithoutKampungInput | UsulanUpdateWithWhereUniqueWithoutKampungInput[]
    updateMany?: UsulanUpdateManyWithWhereWithoutKampungInput | UsulanUpdateManyWithWhereWithoutKampungInput[]
    deleteMany?: UsulanScalarWhereInput | UsulanScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DistrikCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDistrik: string
    usulan?: UsulanCreateNestedOneWithoutDistrikInput
    kampung?: KampungCreateNestedManyWithoutDistrikInput
  }

  export type DistrikUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDistrik: string
    usulanId?: number | null
    kampung?: KampungUncheckedCreateNestedManyWithoutDistrikInput
  }

  export type DistrikCreateOrConnectWithoutUserInput = {
    where: DistrikWhereUniqueInput
    create: XOR<DistrikCreateWithoutUserInput, DistrikUncheckedCreateWithoutUserInput>
  }

  export type TaCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    tahun: number
  }

  export type TaUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tahun: number
  }

  export type TaCreateOrConnectWithoutUserInput = {
    where: TaWhereUniqueInput
    create: XOR<TaCreateWithoutUserInput, TaUncheckedCreateWithoutUserInput>
  }

  export type TaCreateManyUserInputEnvelope = {
    data: TaCreateManyUserInput | TaCreateManyUserInput[]
  }

  export type DistrikUpsertWithoutUserInput = {
    update: XOR<DistrikUpdateWithoutUserInput, DistrikUncheckedUpdateWithoutUserInput>
    create: XOR<DistrikCreateWithoutUserInput, DistrikUncheckedCreateWithoutUserInput>
    where?: DistrikWhereInput
  }

  export type DistrikUpdateToOneWithWhereWithoutUserInput = {
    where?: DistrikWhereInput
    data: XOR<DistrikUpdateWithoutUserInput, DistrikUncheckedUpdateWithoutUserInput>
  }

  export type DistrikUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDistrik?: StringFieldUpdateOperationsInput | string
    usulan?: UsulanUpdateOneWithoutDistrikNestedInput
    kampung?: KampungUpdateManyWithoutDistrikNestedInput
  }

  export type DistrikUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDistrik?: StringFieldUpdateOperationsInput | string
    usulanId?: NullableIntFieldUpdateOperationsInput | number | null
    kampung?: KampungUncheckedUpdateManyWithoutDistrikNestedInput
  }

  export type TaUpsertWithWhereUniqueWithoutUserInput = {
    where: TaWhereUniqueInput
    update: XOR<TaUpdateWithoutUserInput, TaUncheckedUpdateWithoutUserInput>
    create: XOR<TaCreateWithoutUserInput, TaUncheckedCreateWithoutUserInput>
  }

  export type TaUpdateWithWhereUniqueWithoutUserInput = {
    where: TaWhereUniqueInput
    data: XOR<TaUpdateWithoutUserInput, TaUncheckedUpdateWithoutUserInput>
  }

  export type TaUpdateManyWithWhereWithoutUserInput = {
    where: TaScalarWhereInput
    data: XOR<TaUpdateManyMutationInput, TaUncheckedUpdateManyWithoutUserInput>
  }

  export type TaScalarWhereInput = {
    AND?: TaScalarWhereInput | TaScalarWhereInput[]
    OR?: TaScalarWhereInput[]
    NOT?: TaScalarWhereInput | TaScalarWhereInput[]
    id?: IntFilter<"Ta"> | number
    createdAt?: DateTimeFilter<"Ta"> | Date | string
    updatedAt?: DateTimeFilter<"Ta"> | Date | string
    tahun?: IntFilter<"Ta"> | number
    userId?: IntFilter<"Ta"> | number
  }

  export type UserCreateWithoutTahunAnggaranInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    role: string
    distrik?: DistrikCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTahunAnggaranInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    role: string
    distrikId?: number | null
  }

  export type UserCreateOrConnectWithoutTahunAnggaranInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTahunAnggaranInput, UserUncheckedCreateWithoutTahunAnggaranInput>
  }

  export type UserUpsertWithoutTahunAnggaranInput = {
    update: XOR<UserUpdateWithoutTahunAnggaranInput, UserUncheckedUpdateWithoutTahunAnggaranInput>
    create: XOR<UserCreateWithoutTahunAnggaranInput, UserUncheckedCreateWithoutTahunAnggaranInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTahunAnggaranInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTahunAnggaranInput, UserUncheckedUpdateWithoutTahunAnggaranInput>
  }

  export type UserUpdateWithoutTahunAnggaranInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    distrik?: DistrikUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTahunAnggaranInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    distrikId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KegiatanCreateWithoutOpdInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKegiatan: string
    kodeKegiatan: string
    subkegiatan?: SubKegiatanCreateNestedManyWithoutKegiatanInput
  }

  export type KegiatanUncheckedCreateWithoutOpdInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKegiatan: string
    kodeKegiatan: string
    subkegiatan?: SubKegiatanUncheckedCreateNestedManyWithoutKegiatanInput
  }

  export type KegiatanCreateOrConnectWithoutOpdInput = {
    where: KegiatanWhereUniqueInput
    create: XOR<KegiatanCreateWithoutOpdInput, KegiatanUncheckedCreateWithoutOpdInput>
  }

  export type KegiatanCreateManyOpdInputEnvelope = {
    data: KegiatanCreateManyOpdInput | KegiatanCreateManyOpdInput[]
  }

  export type DeskCreateWithoutOpdInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDesk: string
  }

  export type DeskUncheckedCreateWithoutOpdInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDesk: string
  }

  export type DeskCreateOrConnectWithoutOpdInput = {
    where: DeskWhereUniqueInput
    create: XOR<DeskCreateWithoutOpdInput, DeskUncheckedCreateWithoutOpdInput>
  }

  export type KegiatanUpsertWithWhereUniqueWithoutOpdInput = {
    where: KegiatanWhereUniqueInput
    update: XOR<KegiatanUpdateWithoutOpdInput, KegiatanUncheckedUpdateWithoutOpdInput>
    create: XOR<KegiatanCreateWithoutOpdInput, KegiatanUncheckedCreateWithoutOpdInput>
  }

  export type KegiatanUpdateWithWhereUniqueWithoutOpdInput = {
    where: KegiatanWhereUniqueInput
    data: XOR<KegiatanUpdateWithoutOpdInput, KegiatanUncheckedUpdateWithoutOpdInput>
  }

  export type KegiatanUpdateManyWithWhereWithoutOpdInput = {
    where: KegiatanScalarWhereInput
    data: XOR<KegiatanUpdateManyMutationInput, KegiatanUncheckedUpdateManyWithoutOpdInput>
  }

  export type KegiatanScalarWhereInput = {
    AND?: KegiatanScalarWhereInput | KegiatanScalarWhereInput[]
    OR?: KegiatanScalarWhereInput[]
    NOT?: KegiatanScalarWhereInput | KegiatanScalarWhereInput[]
    id?: IntFilter<"Kegiatan"> | number
    createdAt?: DateTimeFilter<"Kegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"Kegiatan"> | Date | string
    namaKegiatan?: StringFilter<"Kegiatan"> | string
    kodeKegiatan?: StringFilter<"Kegiatan"> | string
    opdId?: IntFilter<"Kegiatan"> | number
  }

  export type DeskUpsertWithoutOpdInput = {
    update: XOR<DeskUpdateWithoutOpdInput, DeskUncheckedUpdateWithoutOpdInput>
    create: XOR<DeskCreateWithoutOpdInput, DeskUncheckedCreateWithoutOpdInput>
    where?: DeskWhereInput
  }

  export type DeskUpdateToOneWithWhereWithoutOpdInput = {
    where?: DeskWhereInput
    data: XOR<DeskUpdateWithoutOpdInput, DeskUncheckedUpdateWithoutOpdInput>
  }

  export type DeskUpdateWithoutOpdInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDesk?: StringFieldUpdateOperationsInput | string
  }

  export type DeskUncheckedUpdateWithoutOpdInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDesk?: StringFieldUpdateOperationsInput | string
  }

  export type OpdCreateWithoutDeskInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaOpd: string
    urusan: string
    kodeUrusan: string
    kegiatan?: KegiatanCreateNestedManyWithoutOpdInput
  }

  export type OpdUncheckedCreateWithoutDeskInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaOpd: string
    urusan: string
    kodeUrusan: string
    kegiatan?: KegiatanUncheckedCreateNestedManyWithoutOpdInput
  }

  export type OpdCreateOrConnectWithoutDeskInput = {
    where: OpdWhereUniqueInput
    create: XOR<OpdCreateWithoutDeskInput, OpdUncheckedCreateWithoutDeskInput>
  }

  export type OpdCreateManyDeskInputEnvelope = {
    data: OpdCreateManyDeskInput | OpdCreateManyDeskInput[]
  }

  export type OpdUpsertWithWhereUniqueWithoutDeskInput = {
    where: OpdWhereUniqueInput
    update: XOR<OpdUpdateWithoutDeskInput, OpdUncheckedUpdateWithoutDeskInput>
    create: XOR<OpdCreateWithoutDeskInput, OpdUncheckedCreateWithoutDeskInput>
  }

  export type OpdUpdateWithWhereUniqueWithoutDeskInput = {
    where: OpdWhereUniqueInput
    data: XOR<OpdUpdateWithoutDeskInput, OpdUncheckedUpdateWithoutDeskInput>
  }

  export type OpdUpdateManyWithWhereWithoutDeskInput = {
    where: OpdScalarWhereInput
    data: XOR<OpdUpdateManyMutationInput, OpdUncheckedUpdateManyWithoutDeskInput>
  }

  export type OpdScalarWhereInput = {
    AND?: OpdScalarWhereInput | OpdScalarWhereInput[]
    OR?: OpdScalarWhereInput[]
    NOT?: OpdScalarWhereInput | OpdScalarWhereInput[]
    id?: IntFilter<"Opd"> | number
    createdAt?: DateTimeFilter<"Opd"> | Date | string
    updatedAt?: DateTimeFilter<"Opd"> | Date | string
    namaOpd?: StringFilter<"Opd"> | string
    urusan?: StringFilter<"Opd"> | string
    kodeUrusan?: StringFilter<"Opd"> | string
    deskId?: IntFilter<"Opd"> | number
  }

  export type OpdCreateWithoutKegiatanInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaOpd: string
    urusan: string
    kodeUrusan: string
    desk: DeskCreateNestedOneWithoutOpdInput
  }

  export type OpdUncheckedCreateWithoutKegiatanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaOpd: string
    urusan: string
    kodeUrusan: string
    deskId: number
  }

  export type OpdCreateOrConnectWithoutKegiatanInput = {
    where: OpdWhereUniqueInput
    create: XOR<OpdCreateWithoutKegiatanInput, OpdUncheckedCreateWithoutKegiatanInput>
  }

  export type SubKegiatanCreateWithoutKegiatanInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSubKegiatan: string
    kodeSubKegiatan: string
    usulan?: UsulanCreateNestedManyWithoutSubkegiatanInput
  }

  export type SubKegiatanUncheckedCreateWithoutKegiatanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSubKegiatan: string
    kodeSubKegiatan: string
    usulan?: UsulanUncheckedCreateNestedManyWithoutSubkegiatanInput
  }

  export type SubKegiatanCreateOrConnectWithoutKegiatanInput = {
    where: SubKegiatanWhereUniqueInput
    create: XOR<SubKegiatanCreateWithoutKegiatanInput, SubKegiatanUncheckedCreateWithoutKegiatanInput>
  }

  export type SubKegiatanCreateManyKegiatanInputEnvelope = {
    data: SubKegiatanCreateManyKegiatanInput | SubKegiatanCreateManyKegiatanInput[]
  }

  export type OpdUpsertWithoutKegiatanInput = {
    update: XOR<OpdUpdateWithoutKegiatanInput, OpdUncheckedUpdateWithoutKegiatanInput>
    create: XOR<OpdCreateWithoutKegiatanInput, OpdUncheckedCreateWithoutKegiatanInput>
    where?: OpdWhereInput
  }

  export type OpdUpdateToOneWithWhereWithoutKegiatanInput = {
    where?: OpdWhereInput
    data: XOR<OpdUpdateWithoutKegiatanInput, OpdUncheckedUpdateWithoutKegiatanInput>
  }

  export type OpdUpdateWithoutKegiatanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaOpd?: StringFieldUpdateOperationsInput | string
    urusan?: StringFieldUpdateOperationsInput | string
    kodeUrusan?: StringFieldUpdateOperationsInput | string
    desk?: DeskUpdateOneRequiredWithoutOpdNestedInput
  }

  export type OpdUncheckedUpdateWithoutKegiatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaOpd?: StringFieldUpdateOperationsInput | string
    urusan?: StringFieldUpdateOperationsInput | string
    kodeUrusan?: StringFieldUpdateOperationsInput | string
    deskId?: IntFieldUpdateOperationsInput | number
  }

  export type SubKegiatanUpsertWithWhereUniqueWithoutKegiatanInput = {
    where: SubKegiatanWhereUniqueInput
    update: XOR<SubKegiatanUpdateWithoutKegiatanInput, SubKegiatanUncheckedUpdateWithoutKegiatanInput>
    create: XOR<SubKegiatanCreateWithoutKegiatanInput, SubKegiatanUncheckedCreateWithoutKegiatanInput>
  }

  export type SubKegiatanUpdateWithWhereUniqueWithoutKegiatanInput = {
    where: SubKegiatanWhereUniqueInput
    data: XOR<SubKegiatanUpdateWithoutKegiatanInput, SubKegiatanUncheckedUpdateWithoutKegiatanInput>
  }

  export type SubKegiatanUpdateManyWithWhereWithoutKegiatanInput = {
    where: SubKegiatanScalarWhereInput
    data: XOR<SubKegiatanUpdateManyMutationInput, SubKegiatanUncheckedUpdateManyWithoutKegiatanInput>
  }

  export type SubKegiatanScalarWhereInput = {
    AND?: SubKegiatanScalarWhereInput | SubKegiatanScalarWhereInput[]
    OR?: SubKegiatanScalarWhereInput[]
    NOT?: SubKegiatanScalarWhereInput | SubKegiatanScalarWhereInput[]
    id?: IntFilter<"SubKegiatan"> | number
    createdAt?: DateTimeFilter<"SubKegiatan"> | Date | string
    updatedAt?: DateTimeFilter<"SubKegiatan"> | Date | string
    namaSubKegiatan?: StringFilter<"SubKegiatan"> | string
    kodeSubKegiatan?: StringFilter<"SubKegiatan"> | string
    kegiatanId?: IntFilter<"SubKegiatan"> | number
  }

  export type KegiatanCreateWithoutSubkegiatanInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKegiatan: string
    kodeKegiatan: string
    opd: OpdCreateNestedOneWithoutKegiatanInput
  }

  export type KegiatanUncheckedCreateWithoutSubkegiatanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKegiatan: string
    kodeKegiatan: string
    opdId: number
  }

  export type KegiatanCreateOrConnectWithoutSubkegiatanInput = {
    where: KegiatanWhereUniqueInput
    create: XOR<KegiatanCreateWithoutSubkegiatanInput, KegiatanUncheckedCreateWithoutSubkegiatanInput>
  }

  export type UsulanCreateWithoutSubkegiatanInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    satuan?: SatuanCreateNestedManyWithoutUsulanInput
    distrik?: DistrikCreateNestedOneWithoutUsulanInput
    kampung: KampungCreateNestedOneWithoutUsulanInput
  }

  export type UsulanUncheckedCreateWithoutSubkegiatanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    kampungId: number
    satuan?: SatuanUncheckedCreateNestedManyWithoutUsulanInput
    distrik?: DistrikUncheckedCreateNestedOneWithoutUsulanInput
  }

  export type UsulanCreateOrConnectWithoutSubkegiatanInput = {
    where: UsulanWhereUniqueInput
    create: XOR<UsulanCreateWithoutSubkegiatanInput, UsulanUncheckedCreateWithoutSubkegiatanInput>
  }

  export type UsulanCreateManySubkegiatanInputEnvelope = {
    data: UsulanCreateManySubkegiatanInput | UsulanCreateManySubkegiatanInput[]
  }

  export type KegiatanUpsertWithoutSubkegiatanInput = {
    update: XOR<KegiatanUpdateWithoutSubkegiatanInput, KegiatanUncheckedUpdateWithoutSubkegiatanInput>
    create: XOR<KegiatanCreateWithoutSubkegiatanInput, KegiatanUncheckedCreateWithoutSubkegiatanInput>
    where?: KegiatanWhereInput
  }

  export type KegiatanUpdateToOneWithWhereWithoutSubkegiatanInput = {
    where?: KegiatanWhereInput
    data: XOR<KegiatanUpdateWithoutSubkegiatanInput, KegiatanUncheckedUpdateWithoutSubkegiatanInput>
  }

  export type KegiatanUpdateWithoutSubkegiatanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKegiatan?: StringFieldUpdateOperationsInput | string
    kodeKegiatan?: StringFieldUpdateOperationsInput | string
    opd?: OpdUpdateOneRequiredWithoutKegiatanNestedInput
  }

  export type KegiatanUncheckedUpdateWithoutSubkegiatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKegiatan?: StringFieldUpdateOperationsInput | string
    kodeKegiatan?: StringFieldUpdateOperationsInput | string
    opdId?: IntFieldUpdateOperationsInput | number
  }

  export type UsulanUpsertWithWhereUniqueWithoutSubkegiatanInput = {
    where: UsulanWhereUniqueInput
    update: XOR<UsulanUpdateWithoutSubkegiatanInput, UsulanUncheckedUpdateWithoutSubkegiatanInput>
    create: XOR<UsulanCreateWithoutSubkegiatanInput, UsulanUncheckedCreateWithoutSubkegiatanInput>
  }

  export type UsulanUpdateWithWhereUniqueWithoutSubkegiatanInput = {
    where: UsulanWhereUniqueInput
    data: XOR<UsulanUpdateWithoutSubkegiatanInput, UsulanUncheckedUpdateWithoutSubkegiatanInput>
  }

  export type UsulanUpdateManyWithWhereWithoutSubkegiatanInput = {
    where: UsulanScalarWhereInput
    data: XOR<UsulanUpdateManyMutationInput, UsulanUncheckedUpdateManyWithoutSubkegiatanInput>
  }

  export type UsulanScalarWhereInput = {
    AND?: UsulanScalarWhereInput | UsulanScalarWhereInput[]
    OR?: UsulanScalarWhereInput[]
    NOT?: UsulanScalarWhereInput | UsulanScalarWhereInput[]
    id?: IntFilter<"Usulan"> | number
    createdAt?: DateTimeFilter<"Usulan"> | Date | string
    updatedAt?: DateTimeFilter<"Usulan"> | Date | string
    namaUsulan?: StringFilter<"Usulan"> | string
    volume?: StringNullableFilter<"Usulan"> | string | null
    kampungId?: IntFilter<"Usulan"> | number
    subkegiatanId?: IntFilter<"Usulan"> | number
  }

  export type SatuanCreateWithoutUsulanInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSatuan: string
  }

  export type SatuanUncheckedCreateWithoutUsulanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSatuan: string
  }

  export type SatuanCreateOrConnectWithoutUsulanInput = {
    where: SatuanWhereUniqueInput
    create: XOR<SatuanCreateWithoutUsulanInput, SatuanUncheckedCreateWithoutUsulanInput>
  }

  export type SatuanCreateManyUsulanInputEnvelope = {
    data: SatuanCreateManyUsulanInput | SatuanCreateManyUsulanInput[]
  }

  export type DistrikCreateWithoutUsulanInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDistrik: string
    user?: UserCreateNestedOneWithoutDistrikInput
    kampung?: KampungCreateNestedManyWithoutDistrikInput
  }

  export type DistrikUncheckedCreateWithoutUsulanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDistrik: string
    user?: UserUncheckedCreateNestedOneWithoutDistrikInput
    kampung?: KampungUncheckedCreateNestedManyWithoutDistrikInput
  }

  export type DistrikCreateOrConnectWithoutUsulanInput = {
    where: DistrikWhereUniqueInput
    create: XOR<DistrikCreateWithoutUsulanInput, DistrikUncheckedCreateWithoutUsulanInput>
  }

  export type KampungCreateWithoutUsulanInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKampung: string
    distrik: DistrikCreateNestedOneWithoutKampungInput
  }

  export type KampungUncheckedCreateWithoutUsulanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKampung: string
    distrikId: number
  }

  export type KampungCreateOrConnectWithoutUsulanInput = {
    where: KampungWhereUniqueInput
    create: XOR<KampungCreateWithoutUsulanInput, KampungUncheckedCreateWithoutUsulanInput>
  }

  export type SubKegiatanCreateWithoutUsulanInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSubKegiatan: string
    kodeSubKegiatan: string
    kegiatan: KegiatanCreateNestedOneWithoutSubkegiatanInput
  }

  export type SubKegiatanUncheckedCreateWithoutUsulanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSubKegiatan: string
    kodeSubKegiatan: string
    kegiatanId: number
  }

  export type SubKegiatanCreateOrConnectWithoutUsulanInput = {
    where: SubKegiatanWhereUniqueInput
    create: XOR<SubKegiatanCreateWithoutUsulanInput, SubKegiatanUncheckedCreateWithoutUsulanInput>
  }

  export type SatuanUpsertWithWhereUniqueWithoutUsulanInput = {
    where: SatuanWhereUniqueInput
    update: XOR<SatuanUpdateWithoutUsulanInput, SatuanUncheckedUpdateWithoutUsulanInput>
    create: XOR<SatuanCreateWithoutUsulanInput, SatuanUncheckedCreateWithoutUsulanInput>
  }

  export type SatuanUpdateWithWhereUniqueWithoutUsulanInput = {
    where: SatuanWhereUniqueInput
    data: XOR<SatuanUpdateWithoutUsulanInput, SatuanUncheckedUpdateWithoutUsulanInput>
  }

  export type SatuanUpdateManyWithWhereWithoutUsulanInput = {
    where: SatuanScalarWhereInput
    data: XOR<SatuanUpdateManyMutationInput, SatuanUncheckedUpdateManyWithoutUsulanInput>
  }

  export type SatuanScalarWhereInput = {
    AND?: SatuanScalarWhereInput | SatuanScalarWhereInput[]
    OR?: SatuanScalarWhereInput[]
    NOT?: SatuanScalarWhereInput | SatuanScalarWhereInput[]
    id?: IntFilter<"Satuan"> | number
    createdAt?: DateTimeFilter<"Satuan"> | Date | string
    updatedAt?: DateTimeFilter<"Satuan"> | Date | string
    namaSatuan?: StringFilter<"Satuan"> | string
    usulanId?: IntFilter<"Satuan"> | number
  }

  export type DistrikUpsertWithoutUsulanInput = {
    update: XOR<DistrikUpdateWithoutUsulanInput, DistrikUncheckedUpdateWithoutUsulanInput>
    create: XOR<DistrikCreateWithoutUsulanInput, DistrikUncheckedCreateWithoutUsulanInput>
    where?: DistrikWhereInput
  }

  export type DistrikUpdateToOneWithWhereWithoutUsulanInput = {
    where?: DistrikWhereInput
    data: XOR<DistrikUpdateWithoutUsulanInput, DistrikUncheckedUpdateWithoutUsulanInput>
  }

  export type DistrikUpdateWithoutUsulanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDistrik?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutDistrikNestedInput
    kampung?: KampungUpdateManyWithoutDistrikNestedInput
  }

  export type DistrikUncheckedUpdateWithoutUsulanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDistrik?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutDistrikNestedInput
    kampung?: KampungUncheckedUpdateManyWithoutDistrikNestedInput
  }

  export type KampungUpsertWithoutUsulanInput = {
    update: XOR<KampungUpdateWithoutUsulanInput, KampungUncheckedUpdateWithoutUsulanInput>
    create: XOR<KampungCreateWithoutUsulanInput, KampungUncheckedCreateWithoutUsulanInput>
    where?: KampungWhereInput
  }

  export type KampungUpdateToOneWithWhereWithoutUsulanInput = {
    where?: KampungWhereInput
    data: XOR<KampungUpdateWithoutUsulanInput, KampungUncheckedUpdateWithoutUsulanInput>
  }

  export type KampungUpdateWithoutUsulanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKampung?: StringFieldUpdateOperationsInput | string
    distrik?: DistrikUpdateOneRequiredWithoutKampungNestedInput
  }

  export type KampungUncheckedUpdateWithoutUsulanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKampung?: StringFieldUpdateOperationsInput | string
    distrikId?: IntFieldUpdateOperationsInput | number
  }

  export type SubKegiatanUpsertWithoutUsulanInput = {
    update: XOR<SubKegiatanUpdateWithoutUsulanInput, SubKegiatanUncheckedUpdateWithoutUsulanInput>
    create: XOR<SubKegiatanCreateWithoutUsulanInput, SubKegiatanUncheckedCreateWithoutUsulanInput>
    where?: SubKegiatanWhereInput
  }

  export type SubKegiatanUpdateToOneWithWhereWithoutUsulanInput = {
    where?: SubKegiatanWhereInput
    data: XOR<SubKegiatanUpdateWithoutUsulanInput, SubKegiatanUncheckedUpdateWithoutUsulanInput>
  }

  export type SubKegiatanUpdateWithoutUsulanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSubKegiatan?: StringFieldUpdateOperationsInput | string
    kodeSubKegiatan?: StringFieldUpdateOperationsInput | string
    kegiatan?: KegiatanUpdateOneRequiredWithoutSubkegiatanNestedInput
  }

  export type SubKegiatanUncheckedUpdateWithoutUsulanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSubKegiatan?: StringFieldUpdateOperationsInput | string
    kodeSubKegiatan?: StringFieldUpdateOperationsInput | string
    kegiatanId?: IntFieldUpdateOperationsInput | number
  }

  export type UsulanCreateWithoutSatuanInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    distrik?: DistrikCreateNestedOneWithoutUsulanInput
    kampung: KampungCreateNestedOneWithoutUsulanInput
    subkegiatan: SubKegiatanCreateNestedOneWithoutUsulanInput
  }

  export type UsulanUncheckedCreateWithoutSatuanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    kampungId: number
    subkegiatanId: number
    distrik?: DistrikUncheckedCreateNestedOneWithoutUsulanInput
  }

  export type UsulanCreateOrConnectWithoutSatuanInput = {
    where: UsulanWhereUniqueInput
    create: XOR<UsulanCreateWithoutSatuanInput, UsulanUncheckedCreateWithoutSatuanInput>
  }

  export type UsulanUpsertWithoutSatuanInput = {
    update: XOR<UsulanUpdateWithoutSatuanInput, UsulanUncheckedUpdateWithoutSatuanInput>
    create: XOR<UsulanCreateWithoutSatuanInput, UsulanUncheckedCreateWithoutSatuanInput>
    where?: UsulanWhereInput
  }

  export type UsulanUpdateToOneWithWhereWithoutSatuanInput = {
    where?: UsulanWhereInput
    data: XOR<UsulanUpdateWithoutSatuanInput, UsulanUncheckedUpdateWithoutSatuanInput>
  }

  export type UsulanUpdateWithoutSatuanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    distrik?: DistrikUpdateOneWithoutUsulanNestedInput
    kampung?: KampungUpdateOneRequiredWithoutUsulanNestedInput
    subkegiatan?: SubKegiatanUpdateOneRequiredWithoutUsulanNestedInput
  }

  export type UsulanUncheckedUpdateWithoutSatuanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    kampungId?: IntFieldUpdateOperationsInput | number
    subkegiatanId?: IntFieldUpdateOperationsInput | number
    distrik?: DistrikUncheckedUpdateOneWithoutUsulanNestedInput
  }

  export type UsulanCreateWithoutDistrikInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    satuan?: SatuanCreateNestedManyWithoutUsulanInput
    kampung: KampungCreateNestedOneWithoutUsulanInput
    subkegiatan: SubKegiatanCreateNestedOneWithoutUsulanInput
  }

  export type UsulanUncheckedCreateWithoutDistrikInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    kampungId: number
    subkegiatanId: number
    satuan?: SatuanUncheckedCreateNestedManyWithoutUsulanInput
  }

  export type UsulanCreateOrConnectWithoutDistrikInput = {
    where: UsulanWhereUniqueInput
    create: XOR<UsulanCreateWithoutDistrikInput, UsulanUncheckedCreateWithoutDistrikInput>
  }

  export type UserCreateWithoutDistrikInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    role: string
    tahunAnggaran?: TaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDistrikInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    password: string
    role: string
    tahunAnggaran?: TaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDistrikInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDistrikInput, UserUncheckedCreateWithoutDistrikInput>
  }

  export type KampungCreateWithoutDistrikInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKampung: string
    usulan?: UsulanCreateNestedManyWithoutKampungInput
  }

  export type KampungUncheckedCreateWithoutDistrikInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKampung: string
    usulan?: UsulanUncheckedCreateNestedManyWithoutKampungInput
  }

  export type KampungCreateOrConnectWithoutDistrikInput = {
    where: KampungWhereUniqueInput
    create: XOR<KampungCreateWithoutDistrikInput, KampungUncheckedCreateWithoutDistrikInput>
  }

  export type KampungCreateManyDistrikInputEnvelope = {
    data: KampungCreateManyDistrikInput | KampungCreateManyDistrikInput[]
  }

  export type UsulanUpsertWithoutDistrikInput = {
    update: XOR<UsulanUpdateWithoutDistrikInput, UsulanUncheckedUpdateWithoutDistrikInput>
    create: XOR<UsulanCreateWithoutDistrikInput, UsulanUncheckedCreateWithoutDistrikInput>
    where?: UsulanWhereInput
  }

  export type UsulanUpdateToOneWithWhereWithoutDistrikInput = {
    where?: UsulanWhereInput
    data: XOR<UsulanUpdateWithoutDistrikInput, UsulanUncheckedUpdateWithoutDistrikInput>
  }

  export type UsulanUpdateWithoutDistrikInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    satuan?: SatuanUpdateManyWithoutUsulanNestedInput
    kampung?: KampungUpdateOneRequiredWithoutUsulanNestedInput
    subkegiatan?: SubKegiatanUpdateOneRequiredWithoutUsulanNestedInput
  }

  export type UsulanUncheckedUpdateWithoutDistrikInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    kampungId?: IntFieldUpdateOperationsInput | number
    subkegiatanId?: IntFieldUpdateOperationsInput | number
    satuan?: SatuanUncheckedUpdateManyWithoutUsulanNestedInput
  }

  export type UserUpsertWithoutDistrikInput = {
    update: XOR<UserUpdateWithoutDistrikInput, UserUncheckedUpdateWithoutDistrikInput>
    create: XOR<UserCreateWithoutDistrikInput, UserUncheckedCreateWithoutDistrikInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDistrikInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDistrikInput, UserUncheckedUpdateWithoutDistrikInput>
  }

  export type UserUpdateWithoutDistrikInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tahunAnggaran?: TaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDistrikInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    tahunAnggaran?: TaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KampungUpsertWithWhereUniqueWithoutDistrikInput = {
    where: KampungWhereUniqueInput
    update: XOR<KampungUpdateWithoutDistrikInput, KampungUncheckedUpdateWithoutDistrikInput>
    create: XOR<KampungCreateWithoutDistrikInput, KampungUncheckedCreateWithoutDistrikInput>
  }

  export type KampungUpdateWithWhereUniqueWithoutDistrikInput = {
    where: KampungWhereUniqueInput
    data: XOR<KampungUpdateWithoutDistrikInput, KampungUncheckedUpdateWithoutDistrikInput>
  }

  export type KampungUpdateManyWithWhereWithoutDistrikInput = {
    where: KampungScalarWhereInput
    data: XOR<KampungUpdateManyMutationInput, KampungUncheckedUpdateManyWithoutDistrikInput>
  }

  export type KampungScalarWhereInput = {
    AND?: KampungScalarWhereInput | KampungScalarWhereInput[]
    OR?: KampungScalarWhereInput[]
    NOT?: KampungScalarWhereInput | KampungScalarWhereInput[]
    id?: IntFilter<"Kampung"> | number
    createdAt?: DateTimeFilter<"Kampung"> | Date | string
    updatedAt?: DateTimeFilter<"Kampung"> | Date | string
    namaKampung?: StringFilter<"Kampung"> | string
    distrikId?: IntFilter<"Kampung"> | number
  }

  export type DistrikCreateWithoutKampungInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDistrik: string
    usulan?: UsulanCreateNestedOneWithoutDistrikInput
    user?: UserCreateNestedOneWithoutDistrikInput
  }

  export type DistrikUncheckedCreateWithoutKampungInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaDistrik: string
    usulanId?: number | null
    user?: UserUncheckedCreateNestedOneWithoutDistrikInput
  }

  export type DistrikCreateOrConnectWithoutKampungInput = {
    where: DistrikWhereUniqueInput
    create: XOR<DistrikCreateWithoutKampungInput, DistrikUncheckedCreateWithoutKampungInput>
  }

  export type UsulanCreateWithoutKampungInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    satuan?: SatuanCreateNestedManyWithoutUsulanInput
    distrik?: DistrikCreateNestedOneWithoutUsulanInput
    subkegiatan: SubKegiatanCreateNestedOneWithoutUsulanInput
  }

  export type UsulanUncheckedCreateWithoutKampungInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    subkegiatanId: number
    satuan?: SatuanUncheckedCreateNestedManyWithoutUsulanInput
    distrik?: DistrikUncheckedCreateNestedOneWithoutUsulanInput
  }

  export type UsulanCreateOrConnectWithoutKampungInput = {
    where: UsulanWhereUniqueInput
    create: XOR<UsulanCreateWithoutKampungInput, UsulanUncheckedCreateWithoutKampungInput>
  }

  export type UsulanCreateManyKampungInputEnvelope = {
    data: UsulanCreateManyKampungInput | UsulanCreateManyKampungInput[]
  }

  export type DistrikUpsertWithoutKampungInput = {
    update: XOR<DistrikUpdateWithoutKampungInput, DistrikUncheckedUpdateWithoutKampungInput>
    create: XOR<DistrikCreateWithoutKampungInput, DistrikUncheckedCreateWithoutKampungInput>
    where?: DistrikWhereInput
  }

  export type DistrikUpdateToOneWithWhereWithoutKampungInput = {
    where?: DistrikWhereInput
    data: XOR<DistrikUpdateWithoutKampungInput, DistrikUncheckedUpdateWithoutKampungInput>
  }

  export type DistrikUpdateWithoutKampungInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDistrik?: StringFieldUpdateOperationsInput | string
    usulan?: UsulanUpdateOneWithoutDistrikNestedInput
    user?: UserUpdateOneWithoutDistrikNestedInput
  }

  export type DistrikUncheckedUpdateWithoutKampungInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaDistrik?: StringFieldUpdateOperationsInput | string
    usulanId?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUncheckedUpdateOneWithoutDistrikNestedInput
  }

  export type UsulanUpsertWithWhereUniqueWithoutKampungInput = {
    where: UsulanWhereUniqueInput
    update: XOR<UsulanUpdateWithoutKampungInput, UsulanUncheckedUpdateWithoutKampungInput>
    create: XOR<UsulanCreateWithoutKampungInput, UsulanUncheckedCreateWithoutKampungInput>
  }

  export type UsulanUpdateWithWhereUniqueWithoutKampungInput = {
    where: UsulanWhereUniqueInput
    data: XOR<UsulanUpdateWithoutKampungInput, UsulanUncheckedUpdateWithoutKampungInput>
  }

  export type UsulanUpdateManyWithWhereWithoutKampungInput = {
    where: UsulanScalarWhereInput
    data: XOR<UsulanUpdateManyMutationInput, UsulanUncheckedUpdateManyWithoutKampungInput>
  }

  export type TaCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tahun: number
  }

  export type TaUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun?: IntFieldUpdateOperationsInput | number
  }

  export type TaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun?: IntFieldUpdateOperationsInput | number
  }

  export type TaUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun?: IntFieldUpdateOperationsInput | number
  }

  export type KegiatanCreateManyOpdInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKegiatan: string
    kodeKegiatan: string
  }

  export type KegiatanUpdateWithoutOpdInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKegiatan?: StringFieldUpdateOperationsInput | string
    kodeKegiatan?: StringFieldUpdateOperationsInput | string
    subkegiatan?: SubKegiatanUpdateManyWithoutKegiatanNestedInput
  }

  export type KegiatanUncheckedUpdateWithoutOpdInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKegiatan?: StringFieldUpdateOperationsInput | string
    kodeKegiatan?: StringFieldUpdateOperationsInput | string
    subkegiatan?: SubKegiatanUncheckedUpdateManyWithoutKegiatanNestedInput
  }

  export type KegiatanUncheckedUpdateManyWithoutOpdInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKegiatan?: StringFieldUpdateOperationsInput | string
    kodeKegiatan?: StringFieldUpdateOperationsInput | string
  }

  export type OpdCreateManyDeskInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaOpd: string
    urusan: string
    kodeUrusan: string
  }

  export type OpdUpdateWithoutDeskInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaOpd?: StringFieldUpdateOperationsInput | string
    urusan?: StringFieldUpdateOperationsInput | string
    kodeUrusan?: StringFieldUpdateOperationsInput | string
    kegiatan?: KegiatanUpdateManyWithoutOpdNestedInput
  }

  export type OpdUncheckedUpdateWithoutDeskInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaOpd?: StringFieldUpdateOperationsInput | string
    urusan?: StringFieldUpdateOperationsInput | string
    kodeUrusan?: StringFieldUpdateOperationsInput | string
    kegiatan?: KegiatanUncheckedUpdateManyWithoutOpdNestedInput
  }

  export type OpdUncheckedUpdateManyWithoutDeskInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaOpd?: StringFieldUpdateOperationsInput | string
    urusan?: StringFieldUpdateOperationsInput | string
    kodeUrusan?: StringFieldUpdateOperationsInput | string
  }

  export type SubKegiatanCreateManyKegiatanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSubKegiatan: string
    kodeSubKegiatan: string
  }

  export type SubKegiatanUpdateWithoutKegiatanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSubKegiatan?: StringFieldUpdateOperationsInput | string
    kodeSubKegiatan?: StringFieldUpdateOperationsInput | string
    usulan?: UsulanUpdateManyWithoutSubkegiatanNestedInput
  }

  export type SubKegiatanUncheckedUpdateWithoutKegiatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSubKegiatan?: StringFieldUpdateOperationsInput | string
    kodeSubKegiatan?: StringFieldUpdateOperationsInput | string
    usulan?: UsulanUncheckedUpdateManyWithoutSubkegiatanNestedInput
  }

  export type SubKegiatanUncheckedUpdateManyWithoutKegiatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSubKegiatan?: StringFieldUpdateOperationsInput | string
    kodeSubKegiatan?: StringFieldUpdateOperationsInput | string
  }

  export type UsulanCreateManySubkegiatanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    kampungId: number
  }

  export type UsulanUpdateWithoutSubkegiatanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    satuan?: SatuanUpdateManyWithoutUsulanNestedInput
    distrik?: DistrikUpdateOneWithoutUsulanNestedInput
    kampung?: KampungUpdateOneRequiredWithoutUsulanNestedInput
  }

  export type UsulanUncheckedUpdateWithoutSubkegiatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    kampungId?: IntFieldUpdateOperationsInput | number
    satuan?: SatuanUncheckedUpdateManyWithoutUsulanNestedInput
    distrik?: DistrikUncheckedUpdateOneWithoutUsulanNestedInput
  }

  export type UsulanUncheckedUpdateManyWithoutSubkegiatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    kampungId?: IntFieldUpdateOperationsInput | number
  }

  export type SatuanCreateManyUsulanInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaSatuan: string
  }

  export type SatuanUpdateWithoutUsulanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSatuan?: StringFieldUpdateOperationsInput | string
  }

  export type SatuanUncheckedUpdateWithoutUsulanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSatuan?: StringFieldUpdateOperationsInput | string
  }

  export type SatuanUncheckedUpdateManyWithoutUsulanInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaSatuan?: StringFieldUpdateOperationsInput | string
  }

  export type KampungCreateManyDistrikInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaKampung: string
  }

  export type KampungUpdateWithoutDistrikInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKampung?: StringFieldUpdateOperationsInput | string
    usulan?: UsulanUpdateManyWithoutKampungNestedInput
  }

  export type KampungUncheckedUpdateWithoutDistrikInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKampung?: StringFieldUpdateOperationsInput | string
    usulan?: UsulanUncheckedUpdateManyWithoutKampungNestedInput
  }

  export type KampungUncheckedUpdateManyWithoutDistrikInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaKampung?: StringFieldUpdateOperationsInput | string
  }

  export type UsulanCreateManyKampungInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    namaUsulan: string
    volume?: string | null
    subkegiatanId: number
  }

  export type UsulanUpdateWithoutKampungInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    satuan?: SatuanUpdateManyWithoutUsulanNestedInput
    distrik?: DistrikUpdateOneWithoutUsulanNestedInput
    subkegiatan?: SubKegiatanUpdateOneRequiredWithoutUsulanNestedInput
  }

  export type UsulanUncheckedUpdateWithoutKampungInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    subkegiatanId?: IntFieldUpdateOperationsInput | number
    satuan?: SatuanUncheckedUpdateManyWithoutUsulanNestedInput
    distrik?: DistrikUncheckedUpdateOneWithoutUsulanNestedInput
  }

  export type UsulanUncheckedUpdateManyWithoutKampungInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUsulan?: StringFieldUpdateOperationsInput | string
    volume?: NullableStringFieldUpdateOperationsInput | string | null
    subkegiatanId?: IntFieldUpdateOperationsInput | number
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