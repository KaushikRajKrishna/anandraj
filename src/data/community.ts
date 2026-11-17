// "Testimonials" feedback shown at the bottom of the Home page.
//
// HOW TO ADD FEEDBACK
// - Add an entry to the list below (only with the person's permission). Cards appear in this order.
// - `context` (how they know Anand) and `date` are optional and show at the bottom of the card.
// - `sample: true` marks a placeholder; it shows a "Sample" tag on the site.
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
    name: 'Dr Martin Haus',
    designation: 'PhD, London School of Economics and Political Science',
    context: 'Mentor, Eklavya India Foundation',
    date: '2023',
    text: 'Anand has always impressed me by his persistence and genuine scientific interest. Good research needs rigor, but meaningful research also requires a genuine concern for the people it is about. Anand combines both and I am confident that his work on gig workers in small cities will help shaping academic and policy discourse on this important topic in the coming years.',
  },
  {
    name: 'Aman Tyagi',
    designation: 'PhD Scholar, Tata Institute of Social Sciences, Mumbai',
    date: '2024',
    text: 'From preparing for my PhD interview to planning international academic opportunities, Anand has been a wonderful friend and an important part of my PhD journey. Even his smallest gestures, timely advice and encouraging words have made a meaningful difference.',
  },
  {
    name: 'Urban Fellows Programme Colleague',
    designation: 'IIHS University',
    date: '2023',
    text: 'Anand is a good friend, a thoughtful writer, and a scholar with genuinely fascinating research interests. Above all, he is a deeply empathetic and kind person whose concern for others is reflected in both his work and his relationships. His intellectual curiosity and commitment to learning are evident in everything he pursues.',
  },
];

/** Mailto link for visitors who want to send feedback. */
export const feedbackInvite = {
  text: 'Worked, studied or organised with me? I would be glad to hear from you.',
  subject: 'Feedback for Anand Raj',
};
