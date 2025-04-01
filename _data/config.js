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
            story: ""
        },
        {
            title: "The Peak of Artistry",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: ""
        }
    ],
    portfolio_2: [
        {
            title: "Shin Shibuya",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/31326827/pexels-photo-31326827/free-photo-of-traditional-japanese-restaurant-interior-with-natural-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: ""
        },
        {
            title: "Galapagos Animal Sanctuary",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/5486959/pexels-photo-5486959.jpeg?auto=compress&cs=tinysrgb&w=600",
            story: ""
        },
        {
            title: "Favourite Destinations",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/16549939/pexels-photo-16549939/free-photo-of-lisbon-old-town-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: ""
        },
        {
            title: "The London Bridge",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/31147777/pexels-photo-31147777/free-photo-of-iconic-big-ben-and-red-buses-in-london.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: ""
        },
        {
            title: "Yellow Stone Park",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/31317381/pexels-photo-31317381/free-photo-of-majestic-bison-roaming-yellowstone-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: ""
        },
        {
            title: "The best bakery in Belgium",
            author: "Amelie Bella",
            image: "https://images.pexels.com/photos/29872516/pexels-photo-29872516/free-photo-of-aerial-view-of-nice-s-historic-mediterranean-rooftops.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            story: ""
        }
    ]
};

export default configurations;
