module.exports = {
    content: ["public/index.html","./src/**/*.js"],
    theme: {
      extend: {
        colors: {
            'azullemuzas': "#00C2D6"
        },
        fontFamily:{
          sans: ['Raleway', 'sans-serif'],
        },
        backgroundImage: {
            'img-home': "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),url('Utils/HOME.jpg')"
          },
        fontSize: {
        },
        keyframes:{
          bounce:{
            '0%, 100%': { transform: 'translateY(-5%)' },
          }
        },
      },
    },
    plugins: [],
  }