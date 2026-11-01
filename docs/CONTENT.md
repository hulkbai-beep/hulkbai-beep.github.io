# Portfolio content guidance

Only publish information supplied for publication by Tianyang Bai or independently verified in a public source. A public repository verifies what its code and documentation implement; it does not establish employment, commercial adoption, project impact, or performance claims.

## Phase 1 content

Identity and engineering focus come from the owner's brief and the original public portfolio. Featured project summaries and technical skills are supported by the linked public repositories. The content module keeps source URLs beside the relevant content so future edits can be reviewed against the evidence. See [the source register](SOURCES.md) for the verified references.

The owner explicitly supplied `hulkbai@gmail.com` for the portfolio on October 31, 2026. This is an owner-authorized contact detail; it was not inferred from a Git commit or a private account. The owner will provide a résumé later, so Phase 1 does not publish employment details or offer a résumé download.

No employment history, employer, dates of employment, education, location, personal email, LinkedIn profile, résumé, accomplishment, or performance metric should be inferred from a GitHub username, commit identity, or repository topic. Until a public source is provided and reviewed, leave unknown professional entries and contact details out of the data. The Professional Experience section can remain a brief, honest empty state.

## Adding or changing content

1. Find the public source and confirm it refers to the correct person or project.
2. Update `src/data/portfolio.ts` with a concise, accurate description and its source URL.
3. For professional experience, verify the employer, role, dates, and every accomplishment separately. Use only information authorized for public disclosure.
4. Exclude confidential employer material, internal systems, client names, nonpublic datasets, private links, credentials, and proprietary implementation details.
5. Run `npm run build` and `npm run test:e2e`, then review the content in a pull request before publishing.

Prefer descriptions of observable engineering work over unsupported terms such as “production-grade,” “industry-leading,” or “high impact.” Add metrics only when the public source states the metric, methodology, and context. Recheck source links when editing project descriptions.
