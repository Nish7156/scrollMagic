import React, { useEffect } from "react";

function Test2() {
  useEffect(() => {
    let paths = document.querySelectorAll("path");

    fillSvgPaths();

    document.addEventListener("scroll", fillSvgPaths);

    function fillSvgPaths() {
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      for (var i = 0; i < paths.length; i++) {
        let path = paths[i];

        let pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        let drawLength = pathLength * scrollPercentage * 2;

        path.style.strokeDashoffset = pathLength - drawLength;
      }
    }
  }, []);
  return (
    <div>
      <svg
        width="805"
        height="1528"
        viewBox="0 0 805 1528"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 18C45.6227 18 88.4385 22.7792 131 18.5556C168.009 14.8829 203.879 6.77796 241.222 6.11112C279.702 5.42398 318.084 5.83082 356.556 4.44445C410.457 2.50205 465.248 3.747 518.889 9.11112C557.149 12.9371 595.456 12 633.889 12C661.624 12 689.055 10 716.778 10C726.274 10 768.683 5.80792 771 21.4445C775.273 50.284 780.106 79.6593 787 108C792.9 132.254 794.184 157.669 799.444 182C801.762 192.721 802.972 207.301 800 218C798.138 224.703 793.672 229.768 790.556 236C785.869 245.373 777.962 246 767.778 246C715.951 246 665.05 239.342 613.333 238.111C492.821 235.242 369.756 217.054 253 255C237.852 259.923 222.516 262.905 207.222 267.111C202.478 268.416 197.484 270.302 193.333 273C190.147 275.071 189.552 279.114 186.556 281.111C181.037 284.79 169.949 283.76 163.444 286.444C154.041 290.325 145.812 295.399 138.111 302C125.645 312.685 129 341.113 129 355.556C129 376.667 129 397.778 129 418.889C129 441.633 129.304 459.183 138.556 480C149.307 504.19 181.471 506 206.222 506C274.937 506 343.514 487.471 412.556 498.444C433.877 501.833 454.602 502 476.111 502C486.276 502 495.884 498.605 506 498.111C517.474 497.551 529.067 498 540.556 498C556.401 498 573.508 496.113 589 499.556C616.526 505.672 641 522.979 641 552.889C641 569.211 643 586.313 643 602"
          stroke="#849AD5"
          stroke-width="6"
          stroke-linecap="round"
        />
        <path
          d="M643 602C643 623.376 664.716 628.901 681.111 633C709.173 640.016 753.267 628.72 771.889 604.778C782.005 591.772 782.862 574.183 777.444 559.556C770.918 541.934 760.875 538.24 745 531.556C733.564 526.74 702.74 526.668 699.111 543C697.625 549.687 697 555.367 697 562.444C697 567.376 701.04 586.44 706.111 587.889C713.841 590.097 718.369 592 726.889 592C739.02 592 736.923 590.416 743.444 582.444C745.955 579.376 745.799 571.096 744.889 567C743.222 559.501 736.981 560 731 560"
          stroke="#849AD5"
          stroke-width="6"
          stroke-linecap="round"
        />
        <path
          d="M773 604C773 639.966 779 675.636 779 711.444C779 746.367 774.355 776.964 758.889 809C746.75 834.144 727.764 848.594 702.111 858C676.312 867.46 643.046 862 615.889 862C594.64 862 572.31 869.96 550.889 872C535.582 873.458 520.88 877.632 505.444 878C492.26 878.314 478.29 879.185 465.222 881C440.929 884.374 416.535 888.582 392.111 890.444C360.457 892.859 330.461 903.924 299.667 910.889C268.143 918.019 242.233 938.095 219.111 960C200.207 977.909 193.96 998.953 191 1024.11C185.909 1067.39 195.217 1112.81 187.444 1155.56C185.01 1168.95 188.249 1181.25 197.889 1190.89C204.208 1197.21 208.955 1206 218 1206C229.625 1206 240.004 1206.61 251 1210.89C259.923 1214.36 270.085 1213.89 279.444 1214C303.163 1214.28 326.635 1218.91 350.333 1220C378.078 1221.28 405.669 1222 433.444 1222C449.249 1222 465.427 1223.1 480.556 1217.56C488.065 1214.8 492.509 1213.41 501.444 1214.22C529.487 1216.77 557.217 1224.22 585.222 1227.56C611.787 1230.72 638.278 1233.19 664.556 1238.44C678.966 1241.33 694.837 1242.45 708.778 1246.89C730.009 1253.64 750.095 1260.72 756 1285C769.781 1341.65 751.65 1400.19 759.444 1457.56C759.861 1460.62 769.035 1498.28 763.222 1499.11C752.196 1500.69 737.708 1495.1 727 1493C698.941 1487.51 670.844 1484.77 643.222 1477C602.83 1465.64 559.054 1458.95 517 1458C459.96 1456.72 400.949 1448.12 344.111 1458C327.555 1460.88 311.27 1461.49 295 1465.56C286.834 1467.6 274.814 1467.3 268.556 1473.56C262.428 1479.68 259 1485.46 259 1494C259 1500.16 254.113 1526.44 259 1524"
          stroke="#849AD5"
          stroke-width="6"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}

export default Test2;
