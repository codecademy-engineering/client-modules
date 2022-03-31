import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
}
export const NewLogo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 744 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.64744C0 1.84993 0.0581374 1.30737 0.0993561 0.922707C0.153919 0.413503 0.178835 0.180977 0 0H308.7C309.398 0 309.859 0.0275459 310.205 0.048225C310.691 0.0772043 310.95 0.0926984 311.316 0V156.199C311.316 156.905 311.289 157.371 311.269 157.722C311.24 158.213 311.225 158.476 311.316 158.846C310.95 158.754 310.691 158.769 310.205 158.798C309.859 158.819 309.398 158.846 308.7 158.846H0V158.834L0.0545022 158.626C0.0981039 158.361 0.0370615 158.237 0.0109004 158.538L0 158.739V2.64744ZM212.511 31.7693C213.291 31.7693 213.919 32.2432 214.076 32.5582V122.711C214.076 123.659 213.451 124.136 212.668 124.136H200.307C199.371 124.136 198.9 123.503 198.9 122.711V117.808H198.743C195.768 122.238 190.45 125.56 181.688 125.56C170.735 125.56 162.599 120.339 159.313 109.744C157.594 104.682 156.966 100.094 156.966 91.2387C156.966 82.3804 157.748 77.795 159.313 72.7331C162.599 62.2916 170.424 57.0762 181.218 56.9173H190.45C190.764 57.0735 190.921 57.2324 190.921 57.55V70.046C190.921 70.361 190.764 70.676 190.45 70.676H185.131C179.339 70.8349 175.271 73.8397 173.552 79.2167C172.613 82.2215 172.142 85.5441 172.142 91.5538C172.142 97.5634 172.611 100.886 173.552 103.891C175.271 109.268 179.496 112.275 185.443 112.275C191.546 112.275 195.768 109.427 197.492 103.891C198.115 101.678 198.586 99.1466 198.743 95.3502V33.1936C198.743 32.2458 199.368 31.7693 200.15 31.7693H212.511ZM28.7771 92.7239C28.7771 99.6814 29.405 104.902 30.8125 109.014C34.5666 120.874 44.581 127.202 57.5674 127.36C67.2679 127.36 74.7787 123.408 79.9429 117.239C80.2542 116.606 80.4112 115.815 79.7859 115.341L71.3359 107.748C70.7107 107.274 69.9285 107.274 69.4602 107.907C66.3313 111.545 62.8859 113.602 57.5674 113.602C51.7779 113.602 47.3986 110.594 45.5202 105.061C44.4241 101.738 44.1101 97.7832 44.1101 92.7239C44.1101 87.662 44.4215 83.8656 45.3633 80.5457C47.2416 74.8511 51.6236 72.0051 57.4104 72.0051C62.729 72.0051 66.0148 74.0595 69.3032 77.6971C69.7715 78.4913 70.5511 78.4913 71.179 78.0147L79.629 70.4219C80.2542 69.948 80.2542 69.0002 79.7859 68.5237C74.6244 62.1989 67.1109 58.2437 57.4104 58.2437C44.4215 58.2437 34.5666 64.7299 30.8125 76.4316C29.405 80.5457 28.7771 85.7638 28.7771 92.7239ZM319.165 92.7239C319.165 99.6814 319.793 104.902 321.2 109.014C324.954 120.874 334.812 127.202 347.798 127.36C357.499 127.36 365.009 123.408 370.174 117.239C370.487 116.606 370.642 115.815 370.017 115.341L361.567 107.748C360.941 107.274 360.159 107.274 359.691 107.907C356.562 111.545 353.117 113.602 347.798 113.602C342.011 113.602 337.629 110.594 335.751 105.061C334.655 101.738 334.341 97.7832 334.341 92.7239C334.341 87.662 334.657 83.8656 335.751 80.5457C337.629 74.8511 342.011 72.0051 347.798 72.0051C353.117 72.0051 356.402 74.0595 359.691 77.6971C360.159 78.4913 360.939 78.4913 361.567 78.0147L370.017 70.4219C370.642 69.948 370.642 69.0002 370.174 68.5237C365.166 62.1989 357.499 58.2437 347.798 58.2437C334.812 58.2437 324.954 64.7299 321.2 76.4316C319.793 80.5457 319.165 85.7638 319.165 92.7239ZM661.665 125.621C660.883 125.621 660.258 125.144 660.258 124.197V86.2377C660.258 77.6971 656.033 71.8462 648.053 71.8462C640.231 71.8462 635.692 77.6971 635.692 86.2377V124.197C635.692 124.988 635.221 125.621 634.285 125.621H621.924C621.139 125.621 620.516 125.144 620.516 124.197V86.2377C620.516 77.6971 616.291 71.8462 608.31 71.8462C600.487 71.8462 595.949 77.6971 595.949 86.2377V124.197C595.949 124.988 595.48 125.621 594.541 125.621H582.18C581.4 125.621 580.773 125.144 580.773 124.197V61.0897C580.773 60.3007 581.243 59.668 582.18 59.668H594.541C595.326 59.668 595.949 60.1419 595.949 61.0897V65.8365H596.106C598.923 61.7251 604.556 58.2437 613.163 58.2437C620.828 58.2437 626.931 61.4074 630.842 66.9432H630.999C636.004 61.4074 642.421 58.2437 651.651 58.2437C666.672 58.2437 675.122 68.6825 675.122 82.759V124.356C675.122 125.147 674.651 125.78 673.712 125.78L661.665 125.621ZM691.175 147.447C691.175 148.394 691.8 148.871 692.585 148.871L696.81 149.03C707.604 149.03 712.925 144.124 718.557 128.467L742.966 59.668C743.28 58.7202 742.654 58.2437 741.87 58.2437H729.195C728.415 58.2437 727.947 58.8764 727.633 59.668L713.707 102.689H713.393L698.843 59.668C698.686 58.7202 698.06 58.2437 697.278 58.2437H683.98C683.196 58.2437 682.57 58.8764 682.882 59.668L706.51 121.825L704.632 127.36C702.597 132.737 700.096 135.112 694.931 135.112H692.585C691.646 135.112 691.175 135.742 691.175 136.534V147.447ZM129.942 104.899C131.038 101.421 131.349 98.2544 131.349 92.7213C131.349 87.1881 131.035 84.1806 129.942 80.5431C128.064 75.0073 123.839 72.0024 117.895 72.0024C111.948 72.0024 107.569 75.1661 105.691 80.5431C104.592 84.0218 104.281 87.0293 104.281 92.7213C104.281 98.2544 104.594 101.421 105.691 104.899C107.569 110.435 111.794 113.443 117.895 113.443C123.839 113.599 128.064 110.435 129.942 104.899ZM88.9475 92.7213C88.9475 99.9991 89.7324 104.426 91.1398 109.011C94.8939 120.556 104.751 127.199 117.738 127.199C130.724 127.199 140.582 120.556 144.179 109.011C145.743 104.267 146.371 99.9991 146.371 92.7213C146.371 85.4461 145.589 81.0169 144.179 76.4316C140.582 64.8861 130.724 58.2437 117.738 58.2437C104.592 58.2437 94.737 64.8861 91.1398 76.4316C89.5754 81.1758 88.9475 85.4461 88.9475 92.7213ZM406.247 58.2437C425.959 58.2437 433.159 65.2038 433.473 81.3346V124.197C433.473 125.144 432.845 125.621 432.063 125.621H420.798C419.859 125.621 419.39 124.988 419.39 124.197V119.452H419.233C416.259 123.882 410.158 127.045 401.083 127.045C389.193 127.045 379.335 120.715 379.335 106.957C379.335 92.7239 389.193 86.0788 405.151 86.0788H410.472C411.409 86.0788 411.879 86.7142 411.879 87.5032V96.2027C411.879 97.1504 411.252 97.6243 410.472 97.6243H407.498C397.797 97.6243 393.575 100.314 393.575 106.483C393.575 112.018 397.486 114.706 404.68 114.706C413.912 114.706 419.076 111.068 419.076 103.478V81.4935C418.765 74.3745 415.165 71.2135 404.68 71.2135C397.483 71.2135 393.104 73.2705 389.972 75.8015C389.35 76.2727 388.565 76.1139 388.096 75.4838L383.089 66.4666C382.775 65.8365 382.932 65.2038 383.403 64.7299C388.565 60.7746 395.607 58.2437 406.247 58.2437ZM247.826 86.0815L247.829 86.0789C247.515 86.0789 247.201 86.2377 247.201 86.7142V96.9916C247.201 97.3093 247.358 97.627 247.829 97.627H281.001C281.938 97.627 282.408 97.1505 282.408 96.2027C282.408 85.605 281.781 81.0196 280.216 76.4316C276.616 65.2038 266.916 58.2437 253.616 58.2437C240.786 58.2437 230.774 64.8887 227.175 76.4316C225.77 80.7046 224.985 85.92 224.985 92.7239C224.985 99.5226 225.924 104.584 227.332 108.855C230.931 120.4 240.632 127.202 254.243 127.202C266.134 127.202 275.209 122.614 280.841 115.974C281.312 115.338 281.312 114.549 280.684 114.076L272.862 106.957C272.237 106.483 271.455 106.483 270.83 107.274C267.544 110.912 263.007 113.602 255.651 113.602C248.457 113.602 243.29 110.12 241.257 103.637L241.252 103.621C240.94 102.676 240.628 101.733 240.472 100.788C239.933 97.6552 239.672 94.4796 239.693 91.2996C239.85 87.5032 240.007 85.1311 240.475 82.1262V81.8085C240.632 81.0196 240.789 80.3869 240.946 79.7541C242.665 74.3745 247.515 71.2135 253.616 71.2135C259.719 71.2135 264.415 74.3745 266.134 79.7541C266.605 81.3346 266.919 83.074 266.919 85.2873C266.919 85.7638 266.605 86.0815 266.134 86.0815H247.826ZM535.598 86.0815L535.6 86.0789C535.286 86.0789 534.972 86.2377 534.972 86.7142V96.9916C534.972 97.3093 535.129 97.627 535.6 97.627H568.773C569.709 97.627 570.18 97.1505 570.18 96.2027C570.18 85.605 569.552 81.0196 567.988 76.4316C564.388 65.2038 554.687 58.2437 541.387 58.2437C528.558 58.2437 518.546 64.8887 514.946 76.4316C513.539 80.7046 512.757 85.92 512.757 92.7239C512.757 99.5226 513.696 104.584 515.103 108.855C518.703 120.4 528.403 127.202 542.015 127.202C553.905 127.202 562.98 122.614 568.613 115.974C569.084 115.338 569.084 114.549 568.456 114.076L560.634 106.957C560.009 106.483 559.226 106.483 558.601 107.274C555.315 110.912 550.779 113.602 543.422 113.602C536.228 113.602 531.061 110.12 529.029 103.637L529.023 103.62C528.711 102.675 528.4 101.733 528.244 100.788C527.704 97.6552 527.443 94.4796 527.464 91.2996C527.621 87.5032 527.778 85.1311 528.246 82.1262V81.8085C528.403 81.0209 528.56 80.3889 528.717 79.7572L528.717 79.7541C530.436 74.3745 535.286 71.2135 541.387 71.2135C547.491 71.2135 552.186 74.3745 553.905 79.7541C554.376 81.3346 554.69 83.074 554.69 85.2873C554.69 85.7638 554.376 86.0815 553.905 86.0815H535.598ZM500.283 31.7693C501.062 31.7693 501.69 32.2432 502.004 33.0348V123.185C502.004 124.133 501.379 124.61 500.594 124.61H488.233C487.297 124.61 486.828 123.977 486.828 123.185V118.285H486.671C483.54 122.711 478.221 126.034 469.46 126.034C458.506 126.034 450.37 120.813 447.084 110.218C445.366 105.156 444.738 100.412 444.738 91.5538C444.738 82.5392 445.52 77.9512 447.084 72.8893C450.37 62.4531 458.349 57.2324 469.146 57.0735H478.221C479.158 57.0735 479.629 57.7062 479.629 58.4978V69.4106C479.629 70.361 479.003 70.8349 478.221 70.8349H472.903C467.111 70.9911 463.043 73.9986 461.324 79.3755C460.385 82.3804 459.914 85.7029 459.914 91.7126C459.914 97.7223 460.382 101.045 461.324 104.05C463.043 109.583 467.111 112.59 473.214 112.59C479.317 112.59 483.54 109.583 485.264 104.05C485.886 101.836 486.357 99.3028 486.514 95.509V33.1936C486.514 32.2458 487.14 31.7693 487.922 31.7693H500.283ZM368.871 145.609C368.871 143.618 368.413 142.962 366.255 142.962H324.397C322.16 142.962 321.781 143.454 321.781 145.609V156.199C321.781 158.19 322.239 158.846 324.397 158.846H366.255C368.261 158.846 368.871 158.354 368.871 156.199V145.609ZM295.62 142.962H15.6966V15.8846H295.62V140.314C295.62 141.117 295.561 141.66 295.52 142.045C295.466 142.553 295.441 142.782 295.62 142.962Z"
        fill="#10162F"
      />
      <mask
        id="mask0_1100_1146"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="744"
        height="159"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2.64744C0 1.84993 0.0581374 1.30737 0.0993561 0.922707C0.153919 0.413503 0.178835 0.180977 0 0H308.7C309.398 0 309.859 0.0275459 310.205 0.048225C310.691 0.0772043 310.95 0.0926984 311.316 0V156.199C311.316 156.905 311.289 157.371 311.269 157.722C311.24 158.213 311.225 158.476 311.316 158.846C310.95 158.754 310.691 158.769 310.205 158.798C309.859 158.819 309.398 158.846 308.7 158.846H0V158.834L0.0545022 158.626C0.0981039 158.361 0.0370615 158.237 0.0109004 158.538L0 158.739V2.64744ZM212.511 31.7693C213.291 31.7693 213.919 32.2432 214.076 32.5582V122.711C214.076 123.659 213.451 124.136 212.668 124.136H200.307C199.371 124.136 198.9 123.503 198.9 122.711V117.808H198.743C195.768 122.238 190.45 125.56 181.688 125.56C170.735 125.56 162.599 120.339 159.313 109.744C157.594 104.682 156.966 100.094 156.966 91.2387C156.966 82.3804 157.748 77.795 159.313 72.7331C162.599 62.2916 170.424 57.0762 181.218 56.9173H190.45C190.764 57.0735 190.921 57.2324 190.921 57.55V70.046C190.921 70.361 190.764 70.676 190.45 70.676H185.131C179.339 70.8349 175.271 73.8397 173.552 79.2167C172.613 82.2215 172.142 85.5441 172.142 91.5538C172.142 97.5634 172.611 100.886 173.552 103.891C175.271 109.268 179.496 112.275 185.443 112.275C191.546 112.275 195.768 109.427 197.492 103.891C198.115 101.678 198.586 99.1466 198.743 95.3502V33.1936C198.743 32.2458 199.368 31.7693 200.15 31.7693H212.511ZM28.7771 92.7239C28.7771 99.6814 29.405 104.902 30.8125 109.014C34.5666 120.874 44.581 127.202 57.5674 127.36C67.2679 127.36 74.7787 123.408 79.9429 117.239C80.2542 116.606 80.4112 115.815 79.7859 115.341L71.3359 107.748C70.7107 107.274 69.9285 107.274 69.4602 107.907C66.3313 111.545 62.8859 113.602 57.5674 113.602C51.7779 113.602 47.3986 110.594 45.5202 105.061C44.4241 101.738 44.1101 97.7832 44.1101 92.7239C44.1101 87.662 44.4215 83.8656 45.3633 80.5457C47.2416 74.8511 51.6236 72.0051 57.4104 72.0051C62.729 72.0051 66.0148 74.0595 69.3032 77.6971C69.7715 78.4913 70.5511 78.4913 71.179 78.0147L79.629 70.4219C80.2542 69.948 80.2542 69.0002 79.7859 68.5237C74.6244 62.1989 67.1109 58.2437 57.4104 58.2437C44.4215 58.2437 34.5666 64.7299 30.8125 76.4316C29.405 80.5457 28.7771 85.7638 28.7771 92.7239ZM319.165 92.7239C319.165 99.6814 319.793 104.902 321.2 109.014C324.954 120.874 334.812 127.202 347.798 127.36C357.499 127.36 365.009 123.408 370.174 117.239C370.487 116.606 370.642 115.815 370.017 115.341L361.567 107.748C360.941 107.274 360.159 107.274 359.691 107.907C356.562 111.545 353.117 113.602 347.798 113.602C342.011 113.602 337.629 110.594 335.751 105.061C334.655 101.738 334.341 97.7832 334.341 92.7239C334.341 87.662 334.657 83.8656 335.751 80.5457C337.629 74.8511 342.011 72.0051 347.798 72.0051C353.117 72.0051 356.402 74.0595 359.691 77.6971C360.159 78.4913 360.939 78.4913 361.567 78.0147L370.017 70.4219C370.642 69.948 370.642 69.0002 370.174 68.5237C365.166 62.1989 357.499 58.2437 347.798 58.2437C334.812 58.2437 324.954 64.7299 321.2 76.4316C319.793 80.5457 319.165 85.7638 319.165 92.7239ZM661.665 125.621C660.883 125.621 660.258 125.144 660.258 124.197V86.2377C660.258 77.6971 656.033 71.8462 648.053 71.8462C640.231 71.8462 635.692 77.6971 635.692 86.2377V124.197C635.692 124.988 635.221 125.621 634.285 125.621H621.924C621.139 125.621 620.516 125.144 620.516 124.197V86.2377C620.516 77.6971 616.291 71.8462 608.31 71.8462C600.487 71.8462 595.949 77.6971 595.949 86.2377V124.197C595.949 124.988 595.48 125.621 594.541 125.621H582.18C581.4 125.621 580.773 125.144 580.773 124.197V61.0897C580.773 60.3007 581.243 59.668 582.18 59.668H594.541C595.326 59.668 595.949 60.1419 595.949 61.0897V65.8365H596.106C598.923 61.7251 604.556 58.2437 613.163 58.2437C620.828 58.2437 626.931 61.4074 630.842 66.9432H630.999C636.004 61.4074 642.421 58.2437 651.651 58.2437C666.672 58.2437 675.122 68.6825 675.122 82.759V124.356C675.122 125.147 674.651 125.78 673.712 125.78L661.665 125.621ZM691.175 147.447C691.175 148.394 691.8 148.871 692.585 148.871L696.81 149.03C707.604 149.03 712.925 144.124 718.557 128.467L742.966 59.668C743.28 58.7202 742.654 58.2437 741.87 58.2437H729.195C728.415 58.2437 727.947 58.8764 727.633 59.668L713.707 102.689H713.393L698.843 59.668C698.686 58.7202 698.06 58.2437 697.278 58.2437H683.98C683.196 58.2437 682.57 58.8764 682.882 59.668L706.51 121.825L704.632 127.36C702.597 132.737 700.096 135.112 694.931 135.112H692.585C691.646 135.112 691.175 135.742 691.175 136.534V147.447ZM129.942 104.899C131.038 101.421 131.349 98.2544 131.349 92.7213C131.349 87.1881 131.035 84.1806 129.942 80.5431C128.064 75.0073 123.839 72.0024 117.895 72.0024C111.948 72.0024 107.569 75.1661 105.691 80.5431C104.592 84.0218 104.281 87.0293 104.281 92.7213C104.281 98.2544 104.594 101.421 105.691 104.899C107.569 110.435 111.794 113.443 117.895 113.443C123.839 113.599 128.064 110.435 129.942 104.899ZM88.9475 92.7213C88.9475 99.9991 89.7324 104.426 91.1398 109.011C94.8939 120.556 104.751 127.199 117.738 127.199C130.724 127.199 140.582 120.556 144.179 109.011C145.743 104.267 146.371 99.9991 146.371 92.7213C146.371 85.4461 145.589 81.0169 144.179 76.4316C140.582 64.8861 130.724 58.2437 117.738 58.2437C104.592 58.2437 94.737 64.8861 91.1398 76.4316C89.5754 81.1758 88.9475 85.4461 88.9475 92.7213ZM406.247 58.2437C425.959 58.2437 433.159 65.2038 433.473 81.3346V124.197C433.473 125.144 432.845 125.621 432.063 125.621H420.798C419.859 125.621 419.39 124.988 419.39 124.197V119.452H419.233C416.259 123.882 410.158 127.045 401.083 127.045C389.193 127.045 379.335 120.715 379.335 106.957C379.335 92.7239 389.193 86.0788 405.151 86.0788H410.472C411.409 86.0788 411.879 86.7142 411.879 87.5032V96.2027C411.879 97.1504 411.252 97.6243 410.472 97.6243H407.498C397.797 97.6243 393.575 100.314 393.575 106.483C393.575 112.018 397.486 114.706 404.68 114.706C413.912 114.706 419.076 111.068 419.076 103.478V81.4935C418.765 74.3745 415.165 71.2135 404.68 71.2135C397.483 71.2135 393.104 73.2705 389.972 75.8015C389.35 76.2727 388.565 76.1139 388.096 75.4838L383.089 66.4666C382.775 65.8365 382.932 65.2038 383.403 64.7299C388.565 60.7746 395.607 58.2437 406.247 58.2437ZM247.826 86.0815L247.829 86.0789C247.515 86.0789 247.201 86.2377 247.201 86.7142V96.9916C247.201 97.3093 247.358 97.627 247.829 97.627H281.001C281.938 97.627 282.408 97.1505 282.408 96.2027C282.408 85.605 281.781 81.0196 280.216 76.4316C276.616 65.2038 266.916 58.2437 253.616 58.2437C240.786 58.2437 230.774 64.8887 227.175 76.4316C225.77 80.7046 224.985 85.92 224.985 92.7239C224.985 99.5226 225.924 104.584 227.332 108.855C230.931 120.4 240.632 127.202 254.243 127.202C266.134 127.202 275.209 122.614 280.841 115.974C281.312 115.338 281.312 114.549 280.684 114.076L272.862 106.957C272.237 106.483 271.455 106.483 270.83 107.274C267.544 110.912 263.007 113.602 255.651 113.602C248.457 113.602 243.29 110.12 241.257 103.637L241.252 103.621C240.94 102.676 240.628 101.733 240.472 100.788C239.933 97.6552 239.672 94.4796 239.693 91.2996C239.85 87.5032 240.007 85.1311 240.475 82.1262V81.8085C240.632 81.0196 240.789 80.3869 240.946 79.7541C242.665 74.3745 247.515 71.2135 253.616 71.2135C259.719 71.2135 264.415 74.3745 266.134 79.7541C266.605 81.3346 266.919 83.074 266.919 85.2873C266.919 85.7638 266.605 86.0815 266.134 86.0815H247.826ZM535.598 86.0815L535.6 86.0789C535.286 86.0789 534.972 86.2377 534.972 86.7142V96.9916C534.972 97.3093 535.129 97.627 535.6 97.627H568.773C569.709 97.627 570.18 97.1505 570.18 96.2027C570.18 85.605 569.552 81.0196 567.988 76.4316C564.388 65.2038 554.687 58.2437 541.387 58.2437C528.558 58.2437 518.546 64.8887 514.946 76.4316C513.539 80.7046 512.757 85.92 512.757 92.7239C512.757 99.5226 513.696 104.584 515.103 108.855C518.703 120.4 528.403 127.202 542.015 127.202C553.905 127.202 562.98 122.614 568.613 115.974C569.084 115.338 569.084 114.549 568.456 114.076L560.634 106.957C560.009 106.483 559.226 106.483 558.601 107.274C555.315 110.912 550.779 113.602 543.422 113.602C536.228 113.602 531.061 110.12 529.029 103.637L529.023 103.62C528.711 102.675 528.4 101.733 528.244 100.788C527.704 97.6552 527.443 94.4796 527.464 91.2996C527.621 87.5032 527.778 85.1311 528.246 82.1262V81.8085C528.403 81.0209 528.56 80.3889 528.717 79.7572L528.717 79.7541C530.436 74.3745 535.286 71.2135 541.387 71.2135C547.491 71.2135 552.186 74.3745 553.905 79.7541C554.376 81.3346 554.69 83.074 554.69 85.2873C554.69 85.7638 554.376 86.0815 553.905 86.0815H535.598ZM500.283 31.7693C501.062 31.7693 501.69 32.2432 502.004 33.0348V123.185C502.004 124.133 501.379 124.61 500.594 124.61H488.233C487.297 124.61 486.828 123.977 486.828 123.185V118.285H486.671C483.54 122.711 478.221 126.034 469.46 126.034C458.506 126.034 450.37 120.813 447.084 110.218C445.366 105.156 444.738 100.412 444.738 91.5538C444.738 82.5392 445.52 77.9512 447.084 72.8893C450.37 62.4531 458.349 57.2324 469.146 57.0735H478.221C479.158 57.0735 479.629 57.7062 479.629 58.4978V69.4106C479.629 70.361 479.003 70.8349 478.221 70.8349H472.903C467.111 70.9911 463.043 73.9986 461.324 79.3755C460.385 82.3804 459.914 85.7029 459.914 91.7126C459.914 97.7223 460.382 101.045 461.324 104.05C463.043 109.583 467.111 112.59 473.214 112.59C479.317 112.59 483.54 109.583 485.264 104.05C485.886 101.836 486.357 99.3028 486.514 95.509V33.1936C486.514 32.2458 487.14 31.7693 487.922 31.7693H500.283ZM368.871 145.609C368.871 143.618 368.413 142.962 366.255 142.962H324.397C322.16 142.962 321.781 143.454 321.781 145.609V156.199C321.781 158.19 322.239 158.846 324.397 158.846H366.255C368.261 158.846 368.871 158.354 368.871 156.199V145.609ZM295.62 142.962H15.6966V15.8846H295.62V140.314C295.62 141.117 295.561 141.66 295.52 142.045C295.466 142.553 295.441 142.782 295.62 142.962Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1100_1146)" />
      <path
        d="M50.1953 208.204C48.0465 208.204 46.4115 208.788 45.2904 209.956C44.216 211.124 43.6788 212.852 43.6788 215.141V219.486H55.0302V223.69H43.8189V256.343H38.8439V223.69H32.2573V219.486H38.8439V214.931C38.8439 211.568 39.8016 208.905 41.7168 206.943C43.6788 204.981 46.4349 204 49.9851 204C51.3865 204 52.7412 204.21 54.0492 204.631C55.3572 205.004 56.455 205.565 57.3425 206.312L55.6608 210.026C54.2127 208.811 52.3909 208.204 50.1953 208.204Z"
        fill="#10162F"
      />
      <path
        d="M69.1235 226.703C70.2914 224.227 72.0198 222.358 74.3087 221.097C76.6444 219.836 79.5173 219.205 82.9274 219.205V224.04L81.7362 223.97C77.859 223.97 74.8226 225.161 72.627 227.544C70.4315 229.926 69.3337 233.266 69.3337 237.564V256.343H64.3587V219.486H69.1235V226.703Z"
        fill="#10162F"
      />
      <path
        d="M106.658 256.693C103.108 256.693 99.9082 255.899 97.0586 254.311C94.2091 252.676 91.9668 250.433 90.3319 247.584C88.6969 244.734 87.8794 241.511 87.8794 237.914C87.8794 234.317 88.6969 231.094 90.3319 228.244C91.9668 225.395 94.2091 223.176 97.0586 221.588C99.9082 219.999 103.108 219.205 106.658 219.205C110.208 219.205 113.408 219.999 116.258 221.588C119.107 223.176 121.326 225.395 122.915 228.244C124.55 231.094 125.367 234.317 125.367 237.914C125.367 241.511 124.55 244.734 122.915 247.584C121.326 250.433 119.107 252.676 116.258 254.311C113.408 255.899 110.208 256.693 106.658 256.693ZM106.658 252.278C109.274 252.278 111.61 251.695 113.665 250.527C115.767 249.312 117.402 247.607 118.57 245.412C119.738 243.216 120.322 240.717 120.322 237.914C120.322 235.111 119.738 232.612 118.57 230.417C117.402 228.221 115.767 226.539 113.665 225.371C111.61 224.157 109.274 223.55 106.658 223.55C104.042 223.55 101.683 224.157 99.5812 225.371C97.5258 226.539 95.8908 228.221 94.6762 230.417C93.5084 232.612 92.9245 235.111 92.9245 237.914C92.9245 240.717 93.5084 243.216 94.6762 245.412C95.8908 247.607 97.5258 249.312 99.5812 250.527C101.683 251.695 104.042 252.278 106.658 252.278Z"
        fill="#10162F"
      />
      <path
        d="M181.49 219.205C186.115 219.205 189.735 220.537 192.351 223.199C195.014 225.862 196.345 229.786 196.345 234.971V256.343H191.37V235.462C191.37 231.631 190.436 228.711 188.567 226.703C186.745 224.694 184.153 223.69 180.789 223.69C176.959 223.69 173.946 224.881 171.75 227.263C169.555 229.599 168.457 232.846 168.457 237.003V256.343H163.482V235.462C163.482 231.631 162.548 228.711 160.679 226.703C158.857 224.694 156.241 223.69 152.831 223.69C149.048 223.69 146.035 224.881 143.792 227.263C141.597 229.599 140.499 232.846 140.499 237.003V256.343H135.524V237.914V219.486H140.289V226.212C141.597 223.97 143.419 222.242 145.754 221.027C148.09 219.813 150.776 219.205 153.812 219.205C156.895 219.205 159.558 219.859 161.8 221.167C164.089 222.475 165.794 224.414 166.915 226.983C168.27 224.554 170.209 222.662 172.731 221.307C175.301 219.906 178.22 219.205 181.49 219.205Z"
        fill="#10162F"
      />
      <path
        d="M238.056 256.693C235.066 256.693 232.193 256.273 229.437 255.432C226.727 254.544 224.602 253.446 223.06 252.138L225.303 248.214C226.844 249.429 228.783 250.433 231.119 251.227C233.454 251.975 235.883 252.349 238.406 252.349C241.769 252.349 244.245 251.835 245.833 250.807C247.468 249.733 248.286 248.238 248.286 246.323C248.286 244.968 247.842 243.917 246.954 243.169C246.067 242.375 244.946 241.791 243.591 241.418C242.236 240.997 240.438 240.6 238.196 240.226C235.206 239.666 232.8 239.105 230.978 238.545C229.157 237.937 227.592 236.933 226.284 235.532C225.022 234.13 224.392 232.192 224.392 229.716C224.392 226.633 225.676 224.11 228.246 222.148C230.815 220.186 234.388 219.205 238.966 219.205C241.349 219.205 243.731 219.532 246.114 220.186C248.496 220.794 250.458 221.611 252 222.639L249.827 226.633C246.791 224.531 243.171 223.48 238.966 223.48C235.79 223.48 233.384 224.04 231.749 225.161C230.161 226.282 229.367 227.754 229.367 229.576C229.367 230.977 229.811 232.098 230.698 232.939C231.632 233.78 232.777 234.411 234.132 234.831C235.486 235.205 237.355 235.602 239.737 236.022C242.68 236.583 245.039 237.143 246.814 237.704C248.589 238.264 250.108 239.222 251.369 240.577C252.63 241.931 253.261 243.8 253.261 246.182C253.261 249.406 251.906 251.975 249.197 253.89C246.534 255.759 242.82 256.693 238.056 256.693Z"
        fill="#10162F"
      />
      <path
        d="M276.122 237.844L267.433 245.832V256.343H262.458V204.35H267.433V239.596L289.435 219.486H295.601L279.836 234.551L297.073 256.343H290.977L276.122 237.844Z"
        fill="#10162F"
      />
      <path
        d="M303.994 219.486H308.969V256.343H303.994V219.486ZM306.516 211.427C305.489 211.427 304.625 211.077 303.924 210.376C303.223 209.676 302.873 208.835 302.873 207.854C302.873 206.92 303.223 206.102 303.924 205.401C304.625 204.701 305.489 204.35 306.516 204.35C307.544 204.35 308.408 204.701 309.109 205.401C309.81 206.055 310.16 206.85 310.16 207.784C310.16 208.812 309.81 209.676 309.109 210.376C308.408 211.077 307.544 211.427 306.516 211.427Z"
        fill="#10162F"
      />
      <path
        d="M322.812 204.35H327.787V256.343H322.812V204.35Z"
        fill="#10162F"
      />
      <path
        d="M341.629 204.35H346.604V256.343H341.629V204.35Z"
        fill="#10162F"
      />
      <path
        d="M370.327 256.693C367.337 256.693 364.464 256.273 361.708 255.432C358.999 254.544 356.873 253.446 355.332 252.138L357.574 248.214C359.116 249.429 361.054 250.433 363.39 251.227C365.726 251.975 368.155 252.349 370.677 252.349C374.041 252.349 376.517 251.835 378.105 250.807C379.74 249.733 380.557 248.238 380.557 246.323C380.557 244.968 380.113 243.917 379.226 243.169C378.338 242.375 377.217 241.791 375.863 241.418C374.508 240.997 372.709 240.6 370.467 240.226C367.477 239.666 365.072 239.105 363.25 238.545C361.428 237.937 359.863 236.933 358.555 235.532C357.294 234.13 356.663 232.192 356.663 229.716C356.663 226.633 357.948 224.11 360.517 222.148C363.086 220.186 366.66 219.205 371.238 219.205C373.62 219.205 376.003 219.532 378.385 220.186C380.767 220.794 382.729 221.611 384.271 222.639L382.099 226.633C379.062 224.531 375.442 223.48 371.238 223.48C368.061 223.48 365.656 224.04 364.021 225.161C362.432 226.282 361.638 227.754 361.638 229.576C361.638 230.977 362.082 232.098 362.97 232.939C363.904 233.78 365.048 234.411 366.403 234.831C367.758 235.205 369.626 235.602 372.009 236.022C374.952 236.583 377.311 237.143 379.086 237.704C380.861 238.264 382.379 239.222 383.64 240.577C384.902 241.931 385.532 243.8 385.532 246.182C385.532 249.406 384.178 251.975 381.468 253.89C378.805 255.759 375.092 256.693 370.327 256.693Z"
        fill="#10162F"
      />
      <path
        d="M409.795 256.693C406.244 256.693 403.045 255.899 400.195 254.311C397.346 252.676 395.103 250.433 393.468 247.584C391.833 244.734 391.016 241.511 391.016 237.914C391.016 234.317 391.833 231.094 393.468 228.244C395.103 225.395 397.346 223.176 400.195 221.588C403.045 219.999 406.244 219.205 409.795 219.205C413.345 219.205 416.545 219.999 419.394 221.588C422.244 223.176 424.463 225.395 426.051 228.244C427.686 231.094 428.503 234.317 428.503 237.914C428.503 241.511 427.686 244.734 426.051 247.584C424.463 250.433 422.244 252.676 419.394 254.311C416.545 255.899 413.345 256.693 409.795 256.693ZM409.795 252.278C412.411 252.278 414.746 251.695 416.802 250.527C418.904 249.312 420.539 247.607 421.707 245.412C422.874 243.216 423.458 240.717 423.458 237.914C423.458 235.111 422.874 232.612 421.707 230.417C420.539 228.221 418.904 226.539 416.802 225.371C414.746 224.157 412.411 223.55 409.795 223.55C407.179 223.55 404.82 224.157 402.718 225.371C400.662 226.539 399.027 228.221 397.813 230.417C396.645 232.612 396.061 235.111 396.061 237.914C396.061 240.717 396.645 243.216 397.813 245.412C399.027 247.607 400.662 249.312 402.718 250.527C404.82 251.695 407.179 252.278 409.795 252.278Z"
        fill="#10162F"
      />
      <path
        d="M450.853 208.204C448.704 208.204 447.069 208.788 445.948 209.956C444.873 211.124 444.336 212.852 444.336 215.141V219.486H455.688V223.69H444.476V256.343H439.501V223.69H432.915V219.486H439.501V214.931C439.501 211.568 440.459 208.905 442.374 206.943C444.336 204.981 447.092 204 450.642 204C452.044 204 453.399 204.21 454.707 204.631C456.014 205.004 457.112 205.565 458 206.312L456.318 210.026C454.87 208.811 453.048 208.204 450.853 208.204Z"
        fill="#10162F"
      />
      <path
        d="M482.814 254.1C481.88 254.941 480.712 255.595 479.311 256.062C477.956 256.483 476.531 256.693 475.037 256.693C471.58 256.693 468.917 255.759 467.049 253.89C465.18 252.022 464.246 249.382 464.246 245.972V223.69H457.659V219.486H464.246V211.427H469.221V219.486H480.432V223.69H469.221V245.692C469.221 247.887 469.758 249.569 470.832 250.737C471.954 251.858 473.542 252.419 475.597 252.419C476.625 252.419 477.606 252.255 478.54 251.928C479.521 251.601 480.362 251.134 481.063 250.527L482.814 254.1Z"
        fill="#10162F"
      />
    </svg>
  );
};
