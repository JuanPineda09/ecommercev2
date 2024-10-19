module.exports = {
    content: ["public/index.html","./src/**/*.js"],
    theme: {
      extend: {
        colors: {
            'azullemuzas': "#00C2D6"
        },
        backgroundImage: {
            'img-home': "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),url('Utils/HOME.svg')"
          },
        fontSize: {
        },
        animation: {
          'menu': 'fadeIn 0.5s ease-in-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(-50%) scale(0.4)'},
            '100%': { opacity: '1', transform: 'translateY(0%)'},
          },
        },
      },
    },
    plugins: [],
  }