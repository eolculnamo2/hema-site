export default [
    {
      name: "Home",
      link: '/',
      subcategories: []
    },

    {
      name: "Articles",
      subcategories: [
        {
          subName: "View All",
          link: "/articles"
        },
        {
          subName: "Publish",
          link: "/contribute"
        }
      ]
    },

    {
      name: "Tournaments",
      subcategories: [
        {
          subName: "About",
          link: "/about-tournaments"
        },
        {
          subName: "Registration",
          link: "/event-registration"
        },
        {
          subName: "Manage Events",
          link: "/create-tournament"
        }
      ]
    },

    {
      name: "Account",
      subcategories: [
        {
          subName: "Login",
          link: "/login"
        },
        {
          subName: "Register",
          link: "/register"
        }
      ]
    }

  ];
  