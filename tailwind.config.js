/** @type {import('tailwindcss').Config} */
// importar plugin para criar dellay de animcao com valores
import plugin from 'tailwindcss/plugin'

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding:{
        DEFAULT: ".5rem",
        sm: "1rem",
      },
    },
    
    extend: {
      // keyframe menu
      keyframes:{
        // dei um nome pra animacao
        slideIn:{
          // quando estiver em 0% vou ter o seguinte estilo
          '0%':{
            opacity: 0,
            transform: "translateX(-20px)"
          },
          // quando for 100%
          '100%':{
            opacity: 1,
            transform: "translateX(0)"
          }
        },

        // keyframevideo
        fadeIn:{
          // quando estiver em 0% vou ter o seguinte estilo
          '0%':{
            opacity: 0,
          },
          // quando for 100%
          '100%':{
            opacity: 1,
          }
        },
      },

      // animacao
      animation:{
        // nome com - precisa deixar em colchetes ["nomeqquer"]: "nomedokeyframe"
        // menu
        ["slide-in"]: "slideIn .4s ease-in-out forwards",
        // video
        ["fade-in"]: "fadeIn .4s ease-in-out forwards"
      },

      colors:{
        verde: {
          200: "#ACEF75",
          300: "#91EE77",
          400: "#17E880",
          700: "#2E482C",
          800: "#16281F",
          900: "#0F1C15",
          950: "#030504",
        },
      },
    },
  },
  // colocando plugin aq e adicionando uma funcao que retorna varios delays automaticamente até o 12, poderia colocar manualmente mas cm a funcao consigo add mais automaticamente
  plugins: [
    plugin(({ addUtilities }) => {
      function animationDelay(){
        const delays = {};
        for(let i = 0; i <= 12; i++){
          delays[`.animate-${i}`] = {
        'animation-delay': `${i * 100}ms`
          }
        }
        return delays;
      }

    addUtilities(animationDelay());
  })],
}

