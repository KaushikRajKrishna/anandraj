// "Community Building" feedback shown at the bottom of the Home page.
//
// HOW TO ADD REAL FEEDBACK
// - Replace the sample entries below with real notes (only with the person's permission).
// - Remove `sample: true` from an entry once it is real; samples show a "Sample" tag on the site.
// - `style` picks the card design: 'letter' | 'index' | 'postcard' | 'pinned' | 'ink'.
//   If omitted, designs rotate automatically.

export type FeedbackStyle = 'letter' | 'index' | 'postcard' | 'pinned' | 'ink';

export interface Feedback {
  name: string;
  designation: string;
  /** How the person knows Anand, e.g. "Student, NPTEL course" or "Co-author" */
  context?: string;
  text: string;
  /** e.g. "March 2026" */
  date?: string;
  style?: FeedbackStyle;
  sample?: boolean;
}

export const communityIntro =
  'Notes from students, colleagues, collaborators and workers I have learnt alongside, in classrooms, workshops, union meetings and co-authored work.';

export const feedback: Feedback[] = [
  {
    name: 'Name of a student',
    designation: 'Learner, NPTEL course',
    context: 'Migration, Mobility, and Development',
    text: 'Sample entry. A short note from a student about the live classes, the reading materials, or how a question was answered. Two to four sentences works best.',
    sample: true,
  },
  {
    name: 'Name of a collaborator',
    designation: 'Designation, Institution',
    context: 'Co-author',
    text: 'Sample entry. A colleague or co-author describing what it was like to research and write together, and what Anand brought to the work.',
    sample: true,
  },
  {
    name: 'Name of a union member',
    designation: 'Telangana Gig and Platform Workers Union',
    context: 'Volunteer research',
    text: 'Sample entry. A note from someone at TGPWU on how the comparative research on trade union movements has supported the union’s work.',
    sample: true,
  },
  {
    name: 'Name of a workshop peer',
    designation: 'Designation, Institution',
    context: 'Workshop participant',
    text: 'Sample entry. A peer from a workshop or summer school reflecting on discussions, feedback on research design, or collaboration during the programme.',
    sample: true,
  },
  {
    name: 'Name of a mentee',
    designation: 'Student',
    context: 'Academic mentoring',
    text: 'Sample entry. A student mentored through Eklavya India Foundation or Speaking from Margin on how the guidance helped with higher education.',
    sample: true,
  },
];

/** Mailto link for visitors who want to send feedback. */
export const feedbackInvite = {
  text: 'Worked, studied or organised with me? I would be glad to hear from you.',
  subject: 'Feedback for Anand Raj',
};
