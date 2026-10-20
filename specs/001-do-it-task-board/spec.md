# Feature Specification: Do-It Task Board

**Feature Branch**: `Not created`

**Created**: 2026-10-21

**Status**: Draft

**Input**: User description: "first page- a welcome screen for the app "do-it" its a todo app. the first page has a welcome message with a random motivational quote. below it will be 3 columns table. the first column has the task which are yet to be started. in each cell on that column there will be a title and due date. by default the task will be sorted in ascending order of the due date. but the user must have option to change the sorting and filter. there should also be a button to change the stage of the task to in progress which is the second column . the second column will be the in progess tasks. in it each cell with show the task title and the latest comment on the status of the tassk along with the number of days remaining to complete that task. there should be a button to movew the inprogress task to complete state which is next column., The last column is the completed colum which has all the task which are completed.it only shows the title of the task and  the date when it was marked completed. we are using red white black colour combo with a light mode only theme"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View and organize upcoming tasks (Priority: P1)

As a user, I want a welcome screen and a clear view of tasks that have not started so I can
quickly see what needs attention and choose what to work on next.

**Why this priority**: Seeing and organizing upcoming work is the core value of a task board.

**Independent Outcome**: The user can open the board, understand its purpose, and find a
not-started task by its title or due date.

**Acceptance Scenarios**:

1. **Given** the user opens the app, **When** the welcome screen appears, **Then** it shows a
   welcome message and one motivational quote selected at random.
2. **Given** the user creates a task with a title and due date, **When** the task is saved,
   **Then** it appears in the not-started column with that title and due date.
3. **Given** there are not-started tasks with due dates, **When** the board first appears,
   **Then** those tasks appear in ascending due-date order and each shows its title and due date.
4. **Given** the not-started column contains tasks, **When** the user changes the sort or applies
   a filter, **Then** only matching tasks appear in the selected order.
5. **Given** no not-started tasks match the selected filter, **When** the filter is applied,
   **Then** the column communicates that there are no matching tasks.
6. **Given** the board is viewed on a narrow screen, **When** the user accesses each task stage,
   **Then** all columns and actions remain reachable without page-wide horizontal scrolling.

### User Story 2 - Start and update a task (Priority: P2)

As a user, I want to move a task into progress and record status comments so I can track current
work and see how much time remains.

**Why this priority**: Progress tracking turns a list of future work into an actionable workflow.

**Independent Outcome**: A task can be started, updated with a comment, and viewed with its
current time remaining.

**Acceptance Scenarios**:

1. **Given** a task is not started, **When** the user selects its start action, **Then** it moves
   to the in-progress column.
2. **Given** a task is in progress, **When** the user adds a status comment, **Then** the new
   comment is recorded and shown as the latest comment for that task.
3. **Given** a task is in progress and has a due date, **When** the user views it, **Then** its
   title, latest comment, and days remaining are shown.
4. **Given** a task's due date is today or has passed, **When** the user views it, **Then** the
   remaining-time label clearly says "Due today" or states how many days overdue it is.

### User Story 3 - Complete and review finished tasks (Priority: P3)

As a user, I want to mark in-progress work complete and review what I have finished so I can
track accomplishments.

**Why this priority**: Completion closes the workflow and gives users a visible record of finished
work.

**Independent Outcome**: Completing an in-progress task moves it to the completed column with a
completion date.

**Acceptance Scenarios**:

1. **Given** a task is in progress, **When** the user selects its completion action, **Then** it
   moves to the completed column and records the completion date.
2. **Given** completed tasks exist, **When** the user views the completed column, **Then** each
   item shows only its title and completion date.

### Edge Cases

- When there are no tasks in a column, the column remains visible and explains that it is empty.
- When a task is due today, the in-progress card shows "Due today" rather than zero days
  remaining.
- When a task is overdue, its overdue duration is shown clearly instead of a negative remaining
  day count.
- When an in-progress task has no comments, its card shows a clear empty-comment message.
- When a task action or comment cannot be saved, the user receives an error and the task remains
  in its last successfully saved state.
- On narrow screens, all three task stages and their actions remain accessible without page-wide
  horizontal scrolling.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The welcome screen MUST identify the app as "do-it" and display a welcome message.
- **FR-002**: The welcome screen MUST display one motivational quote selected at random from
  the available quotes when a new visit begins.
- **FR-003**: The board MUST display three task stages: not started, in progress, and completed.
- **FR-004**: Users MUST be able to create a task by providing a title and due date.
- **FR-005**: Each not-started task MUST display its title and due date.
- **FR-006**: Not-started tasks MUST be sorted by due date ascending by default. Users MUST be
  able to sort by due date descending or title alphabetically.
- **FR-007**: Users MUST be able to filter not-started tasks by title text and by due-date
  category: all, overdue, due today, or due within the next seven days.
- **FR-008**: Users MUST be able to move a not-started task to in progress using an action on
  that task.
- **FR-009**: Each in-progress task MUST display its title, latest status comment, and time
  remaining until its due date.
- **FR-010**: Users MUST be able to add a status comment to an in-progress task. The most
  recently added comment MUST be displayed as the latest comment.
- **FR-011**: Users MUST be able to mark an in-progress task complete using an action on that
  task.
- **FR-012**: When a task is marked complete, the system MUST record its completion date.
- **FR-013**: Each completed task MUST display only its title and completion date.
- **FR-014**: Tasks, due dates, status comments, and completion dates MUST persist across visits.
- **FR-015**: The interface MUST use a light theme with red, white, and black as its color
  palette; a dark theme MUST NOT be offered.
- **FR-016**: The board MUST remain usable on narrow and wide screens, with all task columns
  and actions accessible without page-wide horizontal scrolling.
- **FR-017**: Save failures MUST be communicated to the user without presenting unsaved changes
  as successful.

### Key Entities

- **Task**: A unit of work with a title, due date, workflow stage, and, when completed, a
  completion date.
- **Status Comment**: A time-ordered update associated with an in-progress task; the latest
  comment is the most recently added one.
- **Motivational Quote**: A short message selected at random for display on the welcome screen.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: In a usability review with 20 not-started tasks, at least 90% of participants can
  identify the earliest-due task within 10 seconds.
- **SC-002**: At least 95% of participants can move a task from not started to completed and
  confirm its completion date without assistance.
- **SC-003**: Across a range of narrow and wide viewport sizes, users can reach every task
  column and action without page-wide horizontal scrolling.
- **SC-004**: After refreshing or revisiting the app, 100% of successfully saved tasks,
  comments, due dates, and completion dates remain available.
- **SC-005**: At least 90% of participants can identify an in-progress task's latest comment
  and due-date state within 10 seconds.

## Assumptions

- The initial release is a personal task board for one user and does not include accounts or
  collaboration.
- Every task has a required title and due date; due dates use the user's local calendar date.
- Available motivational quotes are curated for the app; a quote may repeat across visits.
- Filtering and sorting apply to the not-started column only, matching the controls described
  for that column.
- A progress comment is an appended update; users do not edit or delete earlier comments in
  this feature.
- Completion dates are shown as calendar dates in the user's local time zone.
- Persistent task information follows the project's current data-storage policy.
