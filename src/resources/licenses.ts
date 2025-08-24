// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Licenses extends APIResource {
  /**
   * Returns a list of licenses.
   *
   * ## Querying
   *
   * This endpoint accepts `query` parameter, which allows for free text querying.
   * The result contains aggregated licenses from the works that match given query.
   *
   * ##
   *
   * For example, this request:
   *
   * ##
   *
   * ```
   * /licenses?query=richard+feynman
   * ```
   *
   * ##
   *
   * will first select works matching `richard+feynman`, and aggregate their
   * licenses.
   *
   * ## Pagination with offsets
   *
   * Offsets are an easy way to iterate over results sets up to 10,000 items. This
   * limit applies to the sum of values of parameters `offset` + `rows`.
   *
   * ##
   *
   * The number of items returned in a single response is controlled by `rows`
   * parameter (default is 20, and maximum is 1,000). To limit results to 5, for
   * example, you could do the following:
   *
   * ##
   *
   * ```
   * /works?query=allen+renear&rows=5
   * ```
   *
   * ##
   *
   * `offset` parameter can be used to retrieve items starting from a specific index
   * of the result list. For example, to select the second set of 5 results (i.e.
   * results 6 through 10), you would do the following:
   *
   * ##
   *
   * ```
   * /works?query=allen+renear&rows=5&offset=5
   * ```
   *
   * ##
   *
   * ## Deep paging
   *
   * Deep paging using cursors can be used to iterate over large result sets, without
   * any limits on their size.
   *
   * ##
   *
   * To use deep paging make a query as normal, but include the `cursor` parameter
   * with a value of `*`, for example:
   *
   * ##
   *
   * ```
   * /members/311/works?filter=type:journal-article&cursor=*
   * ```
   *
   * ##
   *
   * A `next-cursor` field will be provided in the JSON response. To get the next
   * page of results, pass the value of `next-cursor` as the cursor parameter
   * (remember to URL-encode). For example:
   *
   * ##
   *
   * ```
   * /members/311/works?filter=type:journal-article&cursor=<value of next-cursor parameter>
   * ```
   *
   * ##
   *
   * Clients should check the number of returned items. If the number of returned
   * items is equal to the number of expected rows then the end of the result set has
   * been reached. Using next-cursor beyond this point will result in responses with
   * an empty items list. Cursors expire after 5 minutes if they are not used.
   *
   * ##
   */
  list(
    query: LicenseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LicenseListResponse> {
    return this._client.get('/licenses', { query, ...options });
  }
}

export interface LicenseListResponse {
  message: LicenseListResponse.Message;

  'message-type': string;

  'message-version': string;

  status: string;
}

export namespace LicenseListResponse {
  export interface Message {
    items: Array<Message.Item>;

    'total-results': number;
  }

  export namespace Message {
    export interface Item {
      URL: string;

      'work-count': number;
    }
  }
}

export interface LicenseListParams {
  /**
   * Exposes the ability to deep page through large result sets, where offset would
   * cause performance problems
   */
  cursor?: string;

  /**
   * The email address to identify yourself and be in the "polite pool"
   */
  mailto?: string;

  /**
   * The number of rows to skip before returning
   */
  offset?: number;

  /**
   * Exposes the ability to free text query certain fields
   */
  query?: string;

  /**
   * The number of rows per page
   */
  rows?: number;
}

export declare namespace Licenses {
  export { type LicenseListResponse as LicenseListResponse, type LicenseListParams as LicenseListParams };
}
