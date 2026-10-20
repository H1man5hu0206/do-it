<!--
Sync Impact Report
Version change: 2.0.0 -> 2.1.0
Modified principles: None
Added principles: VI. JSON File Persistence
Added sections: None
Removed sections: None
Follow-up TODO: Confirm the original ratification date.
-->
# Project Constitution

## Core Principles

### I. Clean, Maintainable Code
Code MUST use clear names, focused functions, and conventions appropriate to the project's
language. Modules MUST have cohesive responsibilities, and errors MUST be handled explicitly
rather than hidden by silent fallbacks. These rules keep behavior understandable and changes
safe to maintain.

### II. Minimal, Purposeful Design
Implementations MUST include only the components and dependencies needed for the requested
behavior. Avoid speculative abstractions, duplicate logic, and unnecessary configuration.
Prefer existing project patterns and the simplest design that fully meets requirements.

### III. Next.js and pnpm Stack
The project MUST use Next.js for its application framework and pnpm for package management.
Dependencies and project scripts MUST be managed through pnpm rather than a competing package
manager. This keeps the application stack consistent and its dependency workflow reproducible.

### IV. Responsive by Default
User-facing interfaces MUST adapt to narrow and wide viewports without losing access to core
content or actions. Layouts MUST avoid fixed dimensions that cause horizontal overflow, and
interactive controls MUST remain usable across supported screen sizes.

### V. No Test Artifacts
The project MUST NOT create, modify, or generate tests of any kind, including automated test
code, test fixtures, or test-only infrastructure. Validation MUST use non-test methods such as
code review, static analysis, or direct manual checks when requested.

### VI. JSON File Persistence
Until a database is explicitly adopted through a constitution amendment, application data that
must persist MUST be stored in a JSON file. The project MUST NOT add or use a database during
this phase. This keeps data storage straightforward while avoiding premature infrastructure.

## Technology and Architecture

- The application framework MUST be Next.js, and package management MUST use pnpm.
- Persistent application data MUST use JSON-file storage; no database is in scope for this phase.
- Dependencies and architectural layers MUST be justified by a concrete project need.

## Development Workflow

- Changes MUST follow the principles above and preserve existing behavior outside their scope.
- Review MUST check clarity, minimality, stack consistency, responsiveness, and compliance
  with the prohibition on tests.
- Validation MUST NOT introduce or run tests. Use non-test checks appropriate to the change.

## Governance

This constitution governs project design and implementation. Amendments MUST be documented,
reviewed, and reflected in the version and last-amended date. Version numbers follow semantic
versioning: MAJOR for incompatible governance changes, MINOR for new or materially expanded
principles or sections, and PATCH for clarifications that do not change requirements.
Compliance MUST be reviewed during change planning and code review; violations MUST be corrected
or resolved through an explicit constitution amendment before the change is accepted.

**Version**: 2.1.0 | **Ratified**: TODO(RATIFICATION_DATE): Original adoption date unknown. | **Last Amended**: 2026-10-21
