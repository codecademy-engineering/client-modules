import React, { SVGProps } from 'react';

import { defaultIconProps } from '../defaultIconProps';

const CopyIcon: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg {...props}>
      <title>Copy Icon</title>
      <g
        id="Artboard"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          id="Shape-Copy-10"
          fill="currentColor"
          fillRule="nonzero"
          d="M9.998379,21.9999784 L3.26666667,21.9999784 C2.56710598,21.9999784 2,21.4138784 2,20.6908875 L2,5.30713778 C2,4.58414684 2.56710598,3.99804688 3.26666667,3.99804688 L5.00292969,3.99804688 L5.00292969,1.95534557 C5.00292969,1.71434859 5.19196502,1.51898193 5.42515191,1.51898193 L5.6428079,1.51898193 L5.81309449,1.51898193 C6.04628138,1.51898193 6.23531671,1.32361528 6.23531671,1.0826183 L6.23531671,0.875387397 C6.23531671,0.391924287 6.61453975,3.3759661e-13 7.08233507,3.37507799e-13 L11.7036892,3.37701584e-13 C12.1714846,3.37612773e-13 12.5507076,0.391924287 12.5507076,0.875387397 L12.5507076,1.0826183 C12.5507076,1.32361528 12.7397429,1.51898193 12.9729298,1.51898193 L13.5777778,1.51898193 C13.8109647,1.51898193 14,1.71434859 14,1.95534557 L14,3.99804688 L15.7339742,3.99804687 C16.4335349,3.99804687 17.0006409,4.58414684 17.0006409,5.30713778 L17.0006409,12 L19.995707,12.0140173 C20.999125,12.0140173 21.995707,13.0147497 21.995707,14.0189306 L21.995707,21.8321991 C21.995707,23.037184 21.0497185,24.0140173 19.883784,24.0140173 L12.047671,24 C11.047671,24 9.998379,23.0023499 9.998379,21.9999784 Z M10,14.0048523 C10,13 10.998271,12.0011902 11.998271,12.0011902 L15.9967651,12.0011902 L15.9967651,5 L14,5 C14,5.07353384 14,5.12868422 14,5.16545114 C14,5.20476165 14,5.34251528 14,5.57871205 C14,5.81970903 13.8131869,6.01507568 13.58,6.01507568 L5.41954848,6.01507568 C5.18636159,6.01507568 4.99732626,5.81970903 4.99732626,5.57871205 C4.99732626,5.3354985 4.99732626,5.19248228 4.99732626,5.14966338 C4.99732626,5.11640485 4.99732626,5.06651706 4.99732626,5 L3.00126139,5 L3.00126139,21 L10,21 L10,14.0048523 Z M12.0033722,13.0029602 C11.5058746,13.0029602 11.0033722,13.4975891 11.0033722,14.0043945 L11.0033722,22 C11.0033722,22.5 11.5010529,23.0023499 12.0033722,23.0023499 L19.9968872,23.0023499 C20.4968872,23.0023499 21.0003052,22.4987793 21.0003052,22 L21.0003052,14.0043945 C21.0003052,13.5012817 20.4968872,13.0029602 19.9968872,13.0029602 L12.0033722,13.0029602 Z M16.9967651,17.0003052 L18.4996948,17.0003052 C18.9996948,17.0003052 19.4970703,17.4970703 19.4970703,18.0003052 C19.4970703,18.5050703 18.9994812,18.9970703 18.4996948,18.9970703 L16.9967651,18.9970703 L16.9967651,20.5 C16.9967651,21 16.5,21.4973755 15.9967651,21.4973755 C15.492,21.4973755 15,20.9997864 15,20.5 L15,18.9970703 L13.4996948,18.9970703 C12.9996948,18.9970703 12.4996948,18.4970703 12.4996948,18.0003052 C12.4996948,17.50354 12.9996948,17.0003052 13.4996948,17.0003052 L15,17.0003052 L15,15.5 C15,15 15.5,14.5 15.9967651,14.5 C16.4935303,14.5 16.9967651,15 16.9967651,15.5 L16.9967651,17.0003052 Z"
        />
      </g>
    </svg>
  );
};

CopyIcon.defaultProps = defaultIconProps;

export default CopyIcon;
