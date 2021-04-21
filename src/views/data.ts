const data = [
    {
        heading: "Task",
        desc: "The task route returns dummy data realted to daily life activities.",
        routes: [
            {
                route: "GET /tasks/2",
                content: "Returns the task at index 2 as specified in taskdata.json.",
                output: `
      {
        "task_name": "eating",
        "completed": false,
        "details": "having nice and healthy food"
      }`,
            },
            {
                route: "GET /tasks/2?count=3",
                content: "Starts from the task at index 2 and returns a total of 3 tasks.",
                output: `
      [
        {
          "task_name": "eating",
          "completed": false,
          "details": "having nice and healthy food"
        },
        {
          "task_name": "sleeping",
          "completed": true,
          "details": "have a good sleep"
        },
        {
          "task_name": "writing",
          "completed": true,
          "details": "write a diary entry or blog posts to have thoughts organized"
        }
      ]`,
            },
            {
                route: "GET /tasks?count=2",
                content: "Returns 2 tasks, starting at index 0 by default.",
                output: `
      [
        {
          "task_name": "reading",
          "completed": true,
          "details": "keep up with the world and broaden your horizons"
        },
        {
          "task_name": "drinking",
          "completed": true,
          "details": "drink delicious chai or coffee"
        }
      ]`,
            },
        ],
    },
    {
        heading: "User",
        desc: "The users route returns dummy data realted to fake users.",
        routes: [
            {
                route: "GET /users/",
                content: "Return all the available dummy user data.",
                output: `
      [
        {
          "id": "1",
          "first_name": "Becky",
          "last_name": "Blasbad",
          "email": "beck1blas4@gmail.com"
        },
        {
          "id": "2",
          "first_name": "Andry",
          "last_name": "Gentry",
          "email": "Anrygen002@gmail.com"
        },
        {
          "id": "3",
          "first_name": "David",
          "last_name": "Griffin",
          "email": "Devdavid9@gmail.com"
        }
      ]`,
            },
            {
                route: "GET /users/:userId",
                content: "Return dummy user data with the matching Id.",
                output: `
      {
        "id": "1",
        "first_name": "Becky",
        "last_name": "Blasbad",
        "email": "beck1blas4@gmail.com"
      }`,
            },
            {
                route: "PATCH /users/",
                content: "Returns dummy user data with the current timestamp.",
                output: `
      {
        "id": "1",
        "first_name": "Becky",
        "last_name": "Blasbad",
        "email": "beck1blas4@gmail.com",
        "timestamp": "2021-03-31 18-00"
      }`,
            },
        ],
    },
    {
        heading: "Photos",
        desc: "The photo route returns photos with their source link and name.",
        routes: [
            {
                route: "GET /photos/",
                content: "Return all the available photo data.",
                output: `
      [
        {
          "name": "red robot",
          "picture": "https://robohash.org/1"
        },
        {
          "name": "yellow robot",
          "picture": "https://robohash.org/2"
        },
        {
          "name": "purple male robot",
          "picture": "https://robohash.org/3"
        },
        {
          "name": "purple female robot",
          "picture": "https://robohash.org/4"
        },
        {
          "name": "green antena robot",
          "picture": "https://robohash.org/5"
        },
        {
          "name": "yellow son robot",
          "picture": "https://robohash.org/6"
        }
      ]`,
            },
            {
                route: "GET /photos/2",
                content: "Returns the photo at index 2 as specified in photodata.json.",
                output: `
      [
        {
          "name": "yellow robot",
          "picture": "https://robohash.org/2"
        },
      ]`,
            },
            {
                route: "GET /photos/2?count=3",
                content: "Starts from the photo at index 2 and returns a total of 3 photos.",
                output: `
      [
        {
          "name": "yellow robot",
          "picture": "https://robohash.org/2"
        },
        {
          "name": "purple male robot",
          "picture": "https://robohash.org/3"
        },
        {
          "name": "purple female robot",
          "picture": "https://robohash.org/4"
        },
      ]`,
            },
        ],
    },
    {
        heading: "FoodPhotos",
        desc: "The foodphotos route returns photos of food item with their source link,name and taste.",
        routes: [
            {
                route: "GET /photos/food/",
                content: "Return all the available foodphoto data.",
                output: `
      [
        {
          "name": "pizza",
          "taste": "spicy",
          "picture": "https://source.unsplash.com/Oxb84ENcFfU/1600x900"
        },
        {
          "name": "burger",
          "taste": "spicy",
          "picture": "https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png"
        },
        {
          "name": "pasta",
          "taste": "spicy",
          "picture": "https://b.zmtcdn.com/data/dish_images/bbdabeeb71f0962aff2d87cfc57860061612437785.png"
        },
        {
          "name": "chicken",
          "taste": "spicy",
          "picture": "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png"
        },
      ]`,
            },
            {
                route: "GET /photos/food/taste",
                content: "Return all the available food taste data.",
                output: `[
          {
            "taste": ["spicy", "nutty", "sweet"]
          }
        ]`,
            },
        ],
    },
    {
        heading: "Animal",
        desc: "The animal route returns dummy data realted to animals with their type,breed and photos.",
        routes: [
            {
                route: "GET /animals/dog",
                content: "Return the animal of type dog as specified in animaldata.json.",
                output: `
      {
        "type": "dog",
        "breed": [
            "germen shepherd", "bulldog", "poodle"
        ],
        "picture": [
            "https://unsplash.com/photos/lhUTb7bho8g",
            "https://unsplash.com/photos/EQ_9CkVhgj8",
            "https://unsplash.com/photos/n0YK1aH00Lg"
        ]
      }`,
            },
            {
                route: "GET /animals/cat?options=breed",
                content: "Return the animal of type cat with available breeds.",
                output: `
      [
        {
          "type": "cat",
          "breed": [
              "persian", "ragdoll", "savannah"
          ],
        },
      ]`,
            },
            {
                route: "GET /animals/lion?options=pictures",
                content: "Return the animal of type lion with available pictures.",
                output: `
      [
        {
            "type": "lion",
            "picture": [
                "https://unsplash.com/photos/nddQ7DIF1ao",
                "https://unsplash.com/photos/Ep8vE8Bm6Og",
                "https://unsplash.com/photos/jW6uCZqE2Hcv"
            ]
        },
      ]`,
            },
        ],
    },
    {
        heading: "Vehicles",
        desc: "The vehicles route returns dummy data realted to vehicle and its properties.",
        routes: [
            {
                route: "GET /vehicles/2",
                content: "Returns the vehicle data at index 2 as specified in vehicledata.json.",
                output: `
      {
        "name": "Model Y",
        "manufacturer": "Tesla",
        "type": "hatchback",
        "fuel": "hybrid",
        "color": "white",
        "vin": "8I3HVRVMUXJT75742",
        "vrm": "BX22GHM"
      }`,
            },
            {
                route: "GET /vehicles?manufacturer=Tesla",
                content: "Return the vehicle data where manufacturer name is Tesla.",
                output: `
      [
        {
            "name": "Model Y",
            "manufacturer": "Tesla",
            "type": "hatchback",
            "fuel": "hybrid",
            "color": "white",
            "vin": "8I3HVRVMUXJT75742",
            "vrm": "BX22GHM"
        },
        {
            "name": "Model X",
            "manufacturer": "Tesla",
            "type": "sedan",
            "fuel": "electric",
            "color": "lime",
            "vin": "IK2UNZV1L1SD11839",
            "vrm": "BC81XXS"
        },
        {
          "name": "Model 3",
            "manufacturer": "Tesla",
            "type": "suv",
            "fuel": "electric",
            "color": "lime",
            "vin": "MW54TUF2ATVX15624",
            "vrm": "DI03UGZ"
        },
        {
            "name": "Model S",
            "manufacturer": "Tesla",
            "type": "mini suv",
            "fuel": "electric",
            "color": "indigo",
            "vin": "P1MTJ97TESEN55586",
            "vrm": "MK89INV"
        }
      ]`,
            },
        ],
    },
    {
        heading: "Address",
        desc: "The address route provides dummy address data.",
        routes: [
            {
                route: "GET /address/",
                content: "Returns all the available dummy addresses",
                output: `
        [
          {
              "street": "127/Shreyas Complex,Navrangpura",
              "city": "Ahmedabad",
              "state": "Gujarat",
              "country": "India",
              "pincode": "380009"
          },
          {
              "street": "72,Pragee shopping centre,bajaj road",
              "city": "Mumbai",
              "state": "Maharastra",
              "country": "India",
              "pincode": "400056"
          },
          {
              "street": "A/7, New Sonal Industrial Estate",
              "city": "Mumbai",
              "state": "Maharastra",
              "country": "India",
              "pincode": "400072"
          },
          {
              "street": "Transport nagar jpr 03",
              "city": "Jaipur",
              "state": "Rajasthan",
              "country": "India",
              "pincode": "264035"
          },
          {
              "street": "127/89 Lingampally",
              "city": "Hyderabad",
              "state": "Andhra Pradesh",
              "country": "India",
              "pincode": "500094"
          },
      ]`,
            },
            {
                route: "GET /address/2",
                content: "Returns dummy address from perticular index",
                output: `
      {
        "street": "A/7, New Sonal Industrial Estate",
        "city": "Mumbai",
        "state": "Maharastra",
        "country": "India",
        "pincode": "400072"
      
      }`,
            },
        ],
    },
    {
        heading: "Song",
        desc: "The song route provides song data.",
        routes: [
            {
                route: "GET /songs/",
                content: "Returns all the available songs",
                output: `
        [
          {
              "name": "Chan Kitta",
              "singer": "Ayushmann Khurrana",
              "language": "punjabi",
              "genre": "romance",
              "link": "https://www.youtube.com/watch?v=JFYCc577kjQ"
          },
          {
              "name": "Afreen Afreem",
              "singer": "Rahat Fateh Ali Khan",
              "language": "urdu",
              "genre": "ghazal",
              "link": "https://www.youtube.com/watch?v=kw4tT7SCmaY"
          },
          {
              "name": "Lut Gaye",
              "singer": "Jubin Nautiyal",
              "language": "hindi",
              "genre": "romance",
              "link": "https://www.youtube.com/watch?v=sCbbMZ-q4-I"
          },
          {
              "name": "Dope Shope",
              "singer": "Yo Yo Honey Singh",
              "language": "punjabi",
              "genre": "pop",
              "link": "https://www.youtube.com/watch?v=NrXdauEv9HY"
          },
          {
              "name": "Tunak Tunak Tun",
              "singer": "Daler Mehndi",
              "language": "punjabi",
              "genre": "indian pop",
              "link": "https://www.youtube.com/watch?v=vTIIMJ9tUc8"
          },
      ]`,
            },
            {
                route: "GET /songs/5",
                content: "Returns song data from perticular index",
                output: `
      {
        "name": "Bohemian Rhapsody",
        "singer": "Queen",
        "language": "english",
        "genre": "classic rock",
        "link": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
      }`,
            },
        ],
    },
    {
        heading: "Comments",
        desc: "The comments route provide dummy comments.",
        routes: [
            {
                route: "GET /comments/",
                content: "Returns all the available dummy comments",
                output: `
        [
          {
              "profile": "https://images.unsplash.com/photo-1552207802-77bcb0d13122?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "name": "USER1",
              "data": " Lorem Ipsum"
          },
          {
              "profile": "https://images.unsplash.com/photo-1523536777042-c391e30190ef?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8SnBnNktpZGwtSGt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "name": "USER2",
              "data": "dolor sit amet"
          },
          {
              "profile": "https://images.unsplash.com/photo-1589676383923-3c4e9ec0b94d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "name": "USER3",
              "data": "consectetur adipiscing elit"
          },
          {
              "profile": "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGFuZGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "name": "USER4",
              "data": "sed do eiusmod tempor"
          },
          {
              "profile": "https://images.unsplash.com/photo-1604336755604-96ee6fa9f3f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lyYWZmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "name": "USER5",
              "data": "incididunt ut labore et dolore"
          },
          {
              "profile": "https://images.unsplash.com/photo-1516255648388-71880c3cf449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGVhcGFyZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              "name": "USER6",
              "data": "Ut enim ad minim veniam,"
          },
      ]`,
            },
        ],
    },  
];
export default data;
