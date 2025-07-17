const configurations = {
    // Site metadata and SEO
    metadata: {
        title: '',  // Site Title
        description: '',  // Site Description for SEO
        author: '',  // Author or maintainer of the site
        keywords: [],  // Array of SEO keywords
        baseUrl: '',  // Base URL of the website
        defaultImage: '',  // Default image for SEO and sharing
        language: '',  // Primary language of the website
    },

    // Social media and contact information
    information: {
        email: '',  // Contact Email
        phoneNumber: '',  // Contact Phone Number
        address: '',  // Physical or Mailing Address
        socialLinks: [
            // Add social media profiles
            { social: 'Facebook', url: '', icon: '' },
            { social: 'Twitter', url: '', icon: '' },
            { social: 'Instagram', url: '', icon: '' },
            // More social links as needed
        ],
    },

    // Routing for various user roles
    routes: {
        mainRoutes: [
            { route: 'Home', url: '/', icon: '' },
            { route: 'About', url: '/about', icon: '' },
            // More main routes
        ],
        authRoutes: [
            { route: 'Login', url: '/login', icon: '' },
            { route: 'Sign Up', url: '/signup', icon: '' },
            // More auth routes
        ],
        adminRoutes: [
            { route: 'Dashboard', url: '/admin/dashboard', icon: '' },
            // More admin routes
        ],
        userRoutes: [
            { route: 'Profile', url: '/users/profile', icon: '' },
            // More user routes
        ],
    },

    // Optional: Categories and other lists used in the site
    portfolio: [
        {
            title: "Sunsets in Martinique",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/5769696/pexels-photo-5769696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        {
            title: "The Peak of Artistry",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        }
    ],

    portfolio_2: [
        {
            title: "Shin Shibuya",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/31326827/pexels-photo-31326827/free-photo-of-traditional-japanese-restaurant-interior-with-natural-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        {
            title: "Galapagos Animal Sanctuary",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/5486959/pexels-photo-5486959.jpeg?auto=compress&cs=tinysrgb&w=600",
            story: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        {
            title: "Favourite Destinations",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/16549939/pexels-photo-16549939/free-photo-of-lisbon-old-town-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        {
            title: "The London Bridge",
            author: "PR Baddie",
            image: "https://images.pexels.com/photos/31147777/pexels-photo-31147777/free-photo-of-iconic-big-ben-and-red-buses-in-london.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        {
            title: "Yellow Stone Park",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/31317381/pexels-photo-31317381/free-photo-of-majestic-bison-roaming-yellowstone-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        },
        {
            title: "Revving Up for Junkanoo: A Preview of this Year’s Bahamian Bash",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/29872516/pexels-photo-29872516/free-photo-of-aerial-view-of-nice-s-historic-mediterranean-rooftops.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            date: "January 20th, 2025",
            story: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        }
    ],

    reviews: [
        { reviewer: "Kaine Osiagwu", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." },
        { reviewer: "Kaine Osiagwu", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." }, { reviewer: "Kaine Osiagwu", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." },
        { reviewer: "Kaine Osiagwu", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." },
        { reviewer: "Kaine Osiagwu", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." },
        { reviewer: "Kaine Osiagwu", review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." }
    ],

    what_we_do: [
        {
            title: "Strategic Media Relations",
            description:
                "We do not just send press releases — we create angles that get noticed. From securing headline coverage to cultivating long-term media relationships, we get your story in the right hands.",
            img: "https://marketplace.canva.com/EAFmPEuCyjA/1/0/1131w/canva-simple-minimalist-fashion-magazine-cover-xaZq_QkvP8A.jpg"
        },
        {
            title: "Thought Leadership & Profile Building",
            description:
                "We position founders, executives, creatives, and changemakers as go-to voices in their industries. From expert commentary and speaking opportunities to bylined articles and personal brand building, we help you stand out as more than just a brand — as a trusted voice.",
            img: "https://www.oxanaalexphotography.com/wp-content/uploads/2023/05/photoshoot-ideas-100-819x1024.jpeg"
        },
        {
            title: "Campaign Development + Strategy",
            description:
                "From brand launches to multi-channel PR campaigns, we craft tailored communication plans that align with your goals — and evolve as you grow.",
            img: "https://inspire-shoots.com/wp-content/uploads/2020/02/Oh-Beach-Please-Fashion_Campaign_photoshoot.jpg"
        },
        {
            title: "Media Training & Interview Coaching",
            description:
                "When the spotlight hits, we make sure you are ready. We offer personalized media training to help you feel confident, clear, and compelling in interviews, panels, and press appearances.",
            img: "https://images.squarespace-cdn.com/content/v1/5ed7f8a3ec2ace1a18af404e/1669161569113-6M6SDOM90PY2GKMTUX93/TIEJA+Inc.+Media+Training"
        },
        {
            title: "Crisis Communications",
            description:
                "When things do not go as planned, we are your calm in the storm. We provide proactive planning, real-time response strategies, and clear messaging that protects your reputation and restores trust.",
            img: "https://content.time.com/time/magazine/archive/covers/2012/1101121119_600.jpg"
        },
        {
            title: "Influencer & Brand Partnerships",
            description:
                "We help you connect with the right voices. From creators to collaborators, we build thoughtful, aligned partnerships that elevate your reach and authentically reinforce your brands message.",
            img: "https://lamoumous.com/wp-content/uploads/2021/03/DSC017932B252812529.jpg"
        },
        {
            title: "Experiential PR: Events, FAMs & Trade Shows",
            description:
                "We bring your story to life through curated experiences. From press previews and influencer activations to destination FAM trips and launch events, we create moments that drive coverage, spark connection, and leave lasting impact.",
            img: "https://cocoeventsnyc.com/wp-content/uploads/2023/04/Magazine-Box-Photo-Booth.jpg"
        },
        {
            title: "Industry Representation & Destination PR",
            description:
                "We represent brands and destinations at trade shows, media marketplaces, and global industry events — acting as true ambassadors who know how to tell your story with impact.",
            img: "https://media.istockphoto.com/id/1428756699/photo/travel-girl-with-backpack-in-shorts-on-the-ocean-cliffs-and-tropical-beach-background-nusa.jpg?s=612x612&w=0&k=20&c=wv5Uqx-cCVVLowzStOYkOziNVq_eP7p6a8E5jiaV9_k="
        }
    ]
};

export default configurations;
