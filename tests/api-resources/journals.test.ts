// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Crossref from 'crossref';

const client = new Crossref({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource journals', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.journals.retrieve({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.journals.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.journals.list(
        { cursor: 'cursor', mailto: 's%+_fw+L+.N-@r-bU.bind', offset: 0, query: 'query', rows: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Crossref.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listWorks', async () => {
    const responsePromise = client.journals.listWorks({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listWorks: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.journals.listWorks(
        {},
        {
          cursor: 'cursor',
          facet: 'facet',
          filter: 'filter',
          mailto: 's%+_fw+L+.N-@r-bU.bind',
          offset: 0,
          order: 'desc',
          query: 'query',
          rows: 0,
          sample: 0,
          select: 'select',
          sort: 'sort',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Crossref.NotFoundError);
  });
});
