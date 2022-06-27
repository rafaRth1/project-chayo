const Logo = ({ toggleDark }: any) => {
   return (
      <div className='logo'>
         <a href='/'>
            <svg
               version='1.0'
               xmlns='http://www.w3.org/2000/svg'
               width='100.000000pt'
               height='50.000000pt'
               viewBox='0 0 200.000000 80.000000'
               preserveAspectRatio='xMidYMid meet'
            >
               <g
                  transform='translate(0.000000,80.000000) scale(0.100000,-0.100000)'
                  fill={`${!toggleDark ? '#fff' : '#000'}`}
                  stroke='none'
               >
                  <path
                     d='M343 660 c-39 -23 -50 -44 -98 -187 -37 -107 -38 -113 -24 -150 21
                        -53 68 -83 135 -83 29 0 64 4 78 10 16 6 27 6 31 0 11 -18 54 -10 69 13 8 12
                        24 55 37 95 l23 72 42 0 43 0 -14 -47 c-20 -66 -19 -77 12 -113 25 -30 29 -31
                        77 -26 65 8 80 8 139 0 35 -4 54 -2 72 10 23 15 28 15 47 1 26 -17 86 -20 120
                        -4 17 7 32 6 57 -4 31 -13 32 -15 13 -21 -45 -15 -72 -46 -72 -85 0 -68 63
                        -104 135 -76 47 17 65 39 85 98 9 30 21 42 49 54 20 8 48 24 63 35 25 17 30
                        18 57 3 42 -21 109 -19 149 5 18 11 44 20 58 20 65 0 138 60 132 109 -5 39
                        -43 41 -62 3 -14 -26 -43 -48 -52 -39 -2 2 12 50 31 107 19 57 35 112 35 123
                        0 25 -60 84 -93 93 -45 11 -98 -5 -131 -39 -23 -23 -43 -67 -75 -159 -27 -81
                        -52 -137 -69 -153 -29 -29 -47 -33 -37 -7 41 101 113 325 109 337 -9 23 -43
                        29 -64 10 -10 -9 -40 -80 -67 -157 -35 -104 -56 -150 -80 -176 -34 -36 -56
                        -38 -61 -6 -2 11 20 83 48 159 53 145 57 171 28 189 -32 20 -52 -7 -98 -135
                        -58 -158 -78 -198 -113 -223 -23 -17 -30 -18 -36 -7 -10 16 -8 25 53 196 51
                        141 53 175 11 175 -13 0 -30 -6 -37 -13 -10 -11 -16 -11 -38 0 -45 23 -89 14
                        -137 -29 -13 -12 -40 -75 -69 -157 -45 -131 -81 -191 -105 -176 -16 10 -10 37
                        40 187 44 133 48 148 34 167 -31 45 -57 21 -94 -88 -27 -79 -37 -89 -84 -77
                        l-24 6 20 58 c22 65 22 100 -3 116 -21 13 -53 -13 -62 -50 -4 -14 -16 -49 -27
                        -79 -17 -45 -24 -54 -47 -57 -32 -4 -42 -36 -17 -54 20 -15 14 -42 -21 -83
                        -36 -43 -83 -56 -129 -36 -36 14 -37 17 -32 53 2 20 20 77 38 126 44 117 81
                        142 83 59 1 -33 4 -38 28 -41 30 -4 58 28 58 65 0 84 -91 130 -167 83z m1375
                        -67 c7 -11 1 -41 -18 -97 -22 -66 -31 -82 -49 -84 -29 -5 -47 -43 -32 -70 9
                        -18 8 -23 -8 -32 -29 -15 -51 -2 -51 30 0 36 67 229 88 253 19 22 58 22 70 0z
                        m-679 -2 c19 -12 11 -55 -29 -159 -36 -93 -51 -112 -86 -112 -23 0 -24 2 -18
                        43 7 46 61 205 77 225 11 14 36 16 56 3z m211 -456 c-17 -21 -40 -19 -40 3 0
                        24 43 46 48 25 2 -8 -2 -20 -8 -28z'
                  />
               </g>
            </svg>
         </a>
      </div>
   );
};

export default Logo;
