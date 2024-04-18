/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    data : {
      profile1 : 'profile="profile-1"' , 
      profile2 : 'profile="profile-2"' ,
      profile3 : 'profile="profile-3"' ,
      dark : 'profile="profile-dark"'
    },
    extend: {
      fontFamily : {
        'cairo' : '"Cairo", sans-serif'
      } , 
      colors : {
        'purple' : '#ac2bef' , 
        'pink' : '#db64e0' , 
        'cyan' : '#0eddb2' , 
        'green' : '#007159' , 
        'dark-grey': '#343234' , 
        'grey' : '#727272' , 
        'pale-grey' : '#f8f8f8' 
      }
    },
  },
  plugins: [],
}