import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  sake: Sake;
  sakes: Array<Sake>;
};


export type QuerySakeArgs = {
  id: Scalars['ID']['input'];
};

export type Sake = {
  __typename?: 'Sake';
  acidity?: Maybe<Scalars['String']['output']>;
  alcoholContent?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  brewery?: Maybe<Scalars['String']['output']>;
  classification?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  flavorProfile?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mainRice?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ricePolishingRatio?: Maybe<Scalars['String']['output']>;
  sakeMeterValue?: Maybe<Scalars['String']['output']>;
};

export type SakesQueryVariables = Exact<{ [key: string]: never; }>;


export type SakesQuery = { __typename?: 'Query', sakes: Array<{ __typename?: 'Sake', id: string, name?: string | null, brand?: string | null, brewery?: string | null, classification?: string | null, mainRice?: string | null, ricePolishingRatio?: string | null, alcoholContent?: string | null, acidity?: string | null, sakeMeterValue?: string | null, flavorProfile?: string | null, description?: string | null }> };


export const SakesDocument = gql`
    query sakes {
  sakes {
    id
    name
    brand
    brewery
    classification
    mainRice
    ricePolishingRatio
    alcoholContent
    acidity
    sakeMeterValue
    flavorProfile
    description
  }
}
    `;

/**
 * __useSakesQuery__
 *
 * To run a query within a React component, call `useSakesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSakesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSakesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSakesQuery(baseOptions?: Apollo.QueryHookOptions<SakesQuery, SakesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SakesQuery, SakesQueryVariables>(SakesDocument, options);
      }
export function useSakesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SakesQuery, SakesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SakesQuery, SakesQueryVariables>(SakesDocument, options);
        }
export type SakesQueryHookResult = ReturnType<typeof useSakesQuery>;
export type SakesLazyQueryHookResult = ReturnType<typeof useSakesLazyQuery>;
export type SakesQueryResult = Apollo.QueryResult<SakesQuery, SakesQueryVariables>;