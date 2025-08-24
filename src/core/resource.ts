// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Crossref } from '../client';

export abstract class APIResource {
  protected _client: Crossref;

  constructor(client: Crossref) {
    this._client = client;
  }
}
