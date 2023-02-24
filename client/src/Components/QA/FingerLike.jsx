import React from "react";

const FingerLike = ({ likes, comment, userId }) => {
  let likeFilter = likes.filter((l) => l.commentId === comment.id);
  let userLike = likeFilter.filter((l) => l.userId === userId);

  /*   useEffect(() => {
    
  }, []); */

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.000000 512.000000"
      className="w-12 "
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={userLike.length ? "green" : "black"}
      >
        <path
          d="M2885 5100 c-111 -37 -194 -116 -235 -226 -19 -52 -20 -77 -20 -489
 0 -239 -2 -435 -5 -435 -2 0 -27 9 -55 20 -69 27 -190 27 -262 0 -29 -11 -76
 -37 -105 -59 l-51 -39 -22 23 c-12 13 -49 38 -83 57 -60 32 -66 33 -172 33
 -106 0 -112 -1 -173 -34 -68 -37 -125 -95 -157 -158 -11 -21 -21 -40 -22 -42
 -1 -2 -23 6 -49 18 -142 67 -297 43 -413 -65 -40 -36 -67 -73 -87 -116 l-29
 -63 0 -745 0 -745 27 -105 c54 -213 132 -359 284 -536 l52 -60 4 -250 c3 -230
 5 -253 24 -295 31 -67 91 -123 159 -148 57 -21 64 -22 679 -19 l621 3 51 27
 c56 29 93 68 127 132 21 39 22 56 25 295 l3 255 51 55 c142 155 245 353 294
 561 8 36 19 119 24 185 13 165 12 2570 0 2659 -20 133 -111 252 -230 297 -79
 31 -180 34 -255 9z m188 -184 c43 -17 93 -76 106 -123 17 -59 15 -1993 -1
 -1993 -7 0 -93 80 -190 177 l-178 178 0 808 c0 883 -2 846 58 911 51 54 136
 71 205 42z m-1150 -1117 c47 -13 106 -63 123 -106 11 -25 14 -108 14 -361 l0
 -328 -29 -46 c-77 -122 -258 -113 -320 15 -21 44 -22 54 -19 379 l3 335 25 35
 c25 37 63 64 108 78 38 11 52 11 95 -1z m568 -1 c52 -17 88 -46 109 -88 18
 -36 20 -60 20 -260 l0 -220 -73 0 c-91 0 -178 -22 -240 -60 -27 -17 -50 -30
 -53 -30 -2 0 -4 116 -4 258 0 228 2 261 19 297 23 50 58 83 108 100 47 17 71
 18 114 3z m-1108 -191 c18 -8 49 -32 69 -55 45 -49 51 -86 47 -249 -5 -138
 -21 -176 -95 -219 -86 -51 -200 -19 -255 70 -18 28 -19 47 -17 192 3 160 3
 161 32 198 50 66 145 93 219 63z m1272 -586 c37 -18 113 -86 293 -265 l244
 -241 -5 -220 c-6 -243 -18 -318 -71 -451 -72 -182 -199 -348 -354 -463 -147
 -108 -352 -183 -543 -196 -438 -32 -869 248 -1025 663 -61 162 -64 198 -64
 652 0 225 3 410 8 410 4 -1 32 -9 62 -20 88 -31 199 -22 287 23 l31 17 30 -53
 c40 -70 119 -141 190 -168 78 -30 196 -30 271 -1 30 12 57 19 61 17 4 -3 10
 -27 14 -54 14 -106 53 -159 285 -393 202 -204 218 -218 252 -218 74 0 122 78
 84 137 -10 15 -107 117 -215 228 -181 183 -199 205 -214 255 -28 93 -19 160
 33 242 73 115 222 157 346 99z m-1064 -1885 c178 -94 354 -136 568 -136 207 0
 375 40 556 134 44 22 83 42 88 44 4 2 7 -66 7 -151 0 -153 0 -156 -26 -186
 l-26 -31 -600 0 -600 0 -29 29 -29 29 0 156 c0 86 2 156 4 156 2 0 41 -20 87
 -44z"
        />
      </g>
    </svg>
  );
};

export default FingerLike;
