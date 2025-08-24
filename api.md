# Members

Types:

- <code><a href="./src/resources/members.ts">BreakdownsObject</a></code>
- <code><a href="./src/resources/members.ts">CoverageFull</a></code>
- <code><a href="./src/resources/members.ts">CoverageTypeObject</a></code>
- <code><a href="./src/resources/members.ts">DoiCounts</a></code>
- <code><a href="./src/resources/members.ts">Flags</a></code>
- <code><a href="./src/resources/members.ts">Member</a></code>
- <code><a href="./src/resources/members.ts">Query</a></code>
- <code><a href="./src/resources/members.ts">WorksMessage</a></code>
- <code><a href="./src/resources/members.ts">MemberRetrieveResponse</a></code>
- <code><a href="./src/resources/members.ts">MemberListResponse</a></code>

Methods:

- <code title="get /members/{id}">client.members.<a href="./src/resources/members.ts">retrieve</a>(id) -> MemberRetrieveResponse</code>
- <code title="get /members">client.members.<a href="./src/resources/members.ts">list</a>({ ...params }) -> MemberListResponse</code>
- <code title="get /members/{id}/works">client.members.<a href="./src/resources/members.ts">retrieveWorks</a>(id, { ...params }) -> WorksMessage</code>

# Journals

Types:

- <code><a href="./src/resources/journals.ts">Journal</a></code>
- <code><a href="./src/resources/journals.ts">JournalRetrieveResponse</a></code>
- <code><a href="./src/resources/journals.ts">JournalListResponse</a></code>

Methods:

- <code title="get /journals/{issn}">client.journals.<a href="./src/resources/journals.ts">retrieve</a>(issn) -> JournalRetrieveResponse</code>
- <code title="get /journals">client.journals.<a href="./src/resources/journals.ts">list</a>({ ...params }) -> JournalListResponse</code>
- <code title="get /journals/{issn}/works">client.journals.<a href="./src/resources/journals.ts">listWorks</a>(issn, { ...params }) -> WorksMessage</code>

# Prefixes

Types:

- <code><a href="./src/resources/prefixes.ts">PrefixRetrieveMetadataResponse</a></code>

Methods:

- <code title="get /prefixes/{prefix}/works">client.prefixes.<a href="./src/resources/prefixes.ts">listWorks</a>(prefix, { ...params }) -> WorksMessage</code>
- <code title="get /prefixes/{prefix}">client.prefixes.<a href="./src/resources/prefixes.ts">retrieveMetadata</a>(prefix) -> PrefixRetrieveMetadataResponse</code>

# Funders

Types:

- <code><a href="./src/resources/funders.ts">FunderRetrieveResponse</a></code>
- <code><a href="./src/resources/funders.ts">FunderListResponse</a></code>

Methods:

- <code title="get /funders/{id}">client.funders.<a href="./src/resources/funders.ts">retrieve</a>(id) -> FunderRetrieveResponse</code>
- <code title="get /funders">client.funders.<a href="./src/resources/funders.ts">list</a>({ ...params }) -> FunderListResponse</code>
- <code title="get /funders/{id}/works">client.funders.<a href="./src/resources/funders.ts">listWorks</a>(id, { ...params }) -> WorksMessage</code>

# Types

Types:

- <code><a href="./src/resources/types.ts">Type</a></code>
- <code><a href="./src/resources/types.ts">TypeRetrieveResponse</a></code>
- <code><a href="./src/resources/types.ts">TypeListResponse</a></code>

Methods:

- <code title="get /types/{id}">client.types.<a href="./src/resources/types.ts">retrieve</a>(id) -> TypeRetrieveResponse</code>
- <code title="get /types">client.types.<a href="./src/resources/types.ts">list</a>({ ...params }) -> TypeListResponse</code>
- <code title="get /types/{id}/works">client.types.<a href="./src/resources/types.ts">listWorks</a>(id, { ...params }) -> WorksMessage</code>

# Licenses

Types:

- <code><a href="./src/resources/licenses.ts">LicenseListResponse</a></code>

Methods:

- <code title="get /licenses">client.licenses.<a href="./src/resources/licenses.ts">list</a>({ ...params }) -> LicenseListResponse</code>

# Works

Types:

- <code><a href="./src/resources/works.ts">AffiliationIdentifier</a></code>
- <code><a href="./src/resources/works.ts">Author</a></code>
- <code><a href="./src/resources/works.ts">AwardAmount</a></code>
- <code><a href="./src/resources/works.ts">Date</a></code>
- <code><a href="./src/resources/works.ts">DateParts</a></code>
- <code><a href="./src/resources/works.ts">Investigator</a></code>
- <code><a href="./src/resources/works.ts">Work</a></code>
- <code><a href="./src/resources/works.ts">WorkFunder</a></code>
- <code><a href="./src/resources/works.ts">WorkIssnType</a></code>
- <code><a href="./src/resources/works.ts">WorkUpdate</a></code>
- <code><a href="./src/resources/works.ts">WorkRetrieveResponse</a></code>
- <code><a href="./src/resources/works.ts">WorkGetAgencyResponse</a></code>

Methods:

- <code title="get /works/{doi}">client.works.<a href="./src/resources/works.ts">retrieve</a>(doi) -> WorkRetrieveResponse</code>
- <code title="get /works">client.works.<a href="./src/resources/works.ts">list</a>({ ...params }) -> WorksMessage</code>
- <code title="get /works/{doi}/agency">client.works.<a href="./src/resources/works.ts">getAgency</a>(doi) -> WorkGetAgencyResponse</code>
