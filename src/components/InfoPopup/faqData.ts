interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[][] = [
  // General Info
  [
    {
      question: 'What is Tap Tap?',
      answer:
        "Tap Tap is an innovative app designed to revolutionize face-to-face social interactions. Combining the simplicity of advanced technology with the power of self-discovery, Tap Tap serves as a dynamic virtual personal card and a gateway to personal growth. Discover yourself, Challenge yourself, and Upgrade yourself through each 'tap'!",
    },
    {
      question: 'How does it work?',
      answer:
        'Each Card Holder (hereafter called: Host) has their unique NFC card linked to their own public profile page. When they tap the NFC card on the phone of someone else (hereafter called: Guest), the Guest will see the Host’s profile and can choose from three interactive options:\n\n' +
        '(1) Answer Me: The Guest responds to the Host’s questions and evaluates the quality of their inquiries, providing valuable feedback.\n' +
        '(2) Challenge Me: The Guest sets a challenge for the Host and critiques their performance, offering constructive insights.\n' +
        '(3) See My Persona Card: The Guest views the Host’s Persona Card to have a hint of their traits while also sharing their own impressions of the Host.\n\n' +
        'Beyond the Basics\n\n' +
        'As users engage with others, they both earn Talents and receive system-generated analyses of their traits, thinking, and behavior patterns. By logging into the app, they unlock additional activities designed to further their journey of self-discovery and personal development.\n\n' +
        'Tap Tap is more than an app — it’s a deliberate design system helping individuals know themselves through others and get evaluated in action.',
    },
    {
      question: 'Why did we create Tap Tap?',
      answer:
        'Tap Tap was created to inspire meaningful, profound, and reflective connections that foster self-exploration and growth. By transforming everyday social interactions into opportunities for discovery and expanding perspectives, Tap Tap encourages users to engage deeply with themselves and others.\n' +
        'Each tap becomes a puzzle piece, contributing to a more comprehensive and insightful understanding of identity for both the Host and the Guest. Through interactive activities, Tap Tap sparks curiosity, invites fresh perspectives, and brings excitement to the journey of self-discovery and connection.',
    },
    {
      question: 'Who are we?',
      answer:
      'We, at Fundamental Decisions (TeamFD), are a consulting agency headquartered in Singapore with a registered office in Vietnam under YLab Vietnam. Our mission is to empower individuals and organizations with mindset and enhance decision-making capabilities. Read more about us here: <a href="https://www.fundamentaldecisions.com/about-us/" target="_blank">https://www.fundamentaldecisions.com/about-us/</a>',
    },
  ],
  // The 3 Activities
  [
    {
      question: "What happens if Guest chose 'Answer Me'?",
      answer:
        'The Guest will need to respond to the Host’s questions and evaluate the quality of their inquiries, providing valuable feedback. The lighting indicates the intensity level of the activity. The system will analyze and evaluate the performance of both Host and Guest.',
    },
    {
      question: "What happens if Guest chose 'Challenge Me'?",
      answer:
        'The Guest will need to set a challenge for the Host and critique their performance, offering constructive insights. If the Host completes the Challenge given by the Guest, the Guest will decide how/what they will do for the Host in return. The lighting indicates the intensity level of the activity. The system will analyze and evaluate the performance of both Host and Guest.',
    },
    {
      question: "What happens if Guest chose 'See My Persona Card'?",
      answer:
        'The Guest will choose and read the Host’s Persona Card, which gives a hint of their traits, while also sharing their own impressions of the Host. The lighting indicates the intensity level of the activity. The system will analyze and evaluate the performance of both Host and Guest.',
    },
  ],
  // More
  [
    {
      question: 'How to get a Card for myself?',
      answer:
        'At the moment, the Card is provided exclusively for members of TeamFD and our Customers upon Contract’s terms and conditions.\n' +
        'For Schools, Educational Institutes, Organizations, and Corporates, please send your request via mail@fundamentaldecisions.com.\n' +
        'We will get back to you shortly.',
    },
    {
      question: 'Do we have to meet in person to use Tap Tap?',
      answer:
        "It's recommended for a Tap in person. However, in case you cannot make it, you can activate a QR code in your App after logging in and send that QR code to your people to scan.",
    },
    {
      question:
        'How can Guest save their progress and receive analysis after each Tap?',
      answer:
        'Guest will need to Sign Up and Log In to the App before each Tap so that the progress will be saved, and the analysis will appear in their Profile.',
    },
  ],
];
