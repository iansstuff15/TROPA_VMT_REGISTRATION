
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import AlbumCard from "../../components/album_card";
import InputComponent from "../../components/input"
import Layout from "../../components/layout";
import styles from '../../styles/city.module.css'
const City = ()=>{ 
    

    const SanJuanImageLinks = [
'https://i.ibb.co/tmY2ncc/IMG-7993.jpg',
'https://i.ibb.co/sg9wwVP/IMG-7992.jpg',
'https://i.ibb.co/ZxzLcmf/IMG-7986.jpg',
'https://i.ibb.co/3RXg0G2/IMG-7984.jpg',
'https://i.ibb.co/GJ3yCY0/IMG-7978.jpg',
'https://i.ibb.co/6DW2MHg/IMG-7974.jpg',
'https://i.ibb.co/zJbLRTq/IMG-7971.jpg',
'https://i.ibb.co/dLCthSY/IMG-7970.jpg',
'https://i.ibb.co/Y8Mv30M/IMG-7967.jpg',
'https://i.ibb.co/qrGZrWc/IMG-7966.jpg',
'https://i.ibb.co/pRdXWNc/IMG-7965.jpg',
'https://i.ibb.co/0m5rGhw/IMG-7964.jpg',
'https://i.ibb.co/kKH937Z/IMG-5187.jpg',
'https://i.ibb.co/vBznht9/IMG-5163.jpg',
'https://i.ibb.co/ynbCFXt/IMG-5161.jpg',
'https://i.ibb.co/qsKcqTN/IMG-5160.jpg',
'https://i.ibb.co/nRPGnhw/IMG-5159.jpg',
'https://i.ibb.co/cv3FnDT/IMG-5158.jpg',
'https://i.ibb.co/6XnPBJm/IMG-5157.jpg',
'https://i.ibb.co/TqdbgbD/IMG-5156.jpg',
'https://i.ibb.co/s9SLM46/IMG-3720.jpg',
'https://i.ibb.co/hXTdm6f/024b8611-ee6d-4f03-80cd-e96dba1dee9f.jpg',
'https://i.ibb.co/wys1m3H/69446814-b6d6-45c9-9a4b-3aace64574ae.jpg',
    ]
    const PaterosImageLinks = [
'https://i.ibb.co/HzGPqdm/e672ace0-bde9-4031-81f8-d53bc9ca5522.jpg',
'https://i.ibb.co/6RG7LxV/e6eb32bf-1468-461f-bd8e-91ee8de90e6d.jpg',
'https://i.ibb.co/rcj3Xdc/f413fbdc-3aaf-4998-ac6a-6900d5038658.jpg',
'https://i.ibb.co/v1Fkwh9/IMG-5024.jpg',
'https://i.ibb.co/txgZfFR/IMG-5023.jpg',
'https://i.ibb.co/WKx7kMV/IMG-5025.jpg',
'https://i.ibb.co/VHzGDTZ/IMG-5026.jpg',
'https://i.ibb.co/8c5hHbX/IMG-5027.jpg',
'https://i.ibb.co/5j9j2nK/IMG-5028.jpg',
'https://i.ibb.co/8gzDMS1/IMG-5029.jpg',
'https://i.ibb.co/LCRSwPt/IMG-5030.jpg',
'https://i.ibb.co/MG7ZyLy/IMG-5031.jpg',
'https://i.ibb.co/9b7Pndn/IMG-5032.jpg',
'https://i.ibb.co/vdXMB0J/IMG-5033.jpg',
'https://i.ibb.co/mR1ZpW4/IMG-5034.jpg',
'https://i.ibb.co/cQDhMrQ/IMG-5035.jpg',
'https://i.ibb.co/12Ncb9S/IMG-8972.jpg',
'https://i.ibb.co/fMc5XJb/IMG-8973.jpg',
'https://i.ibb.co/7nb6gYr/IMG-8974.jpg',
'https://i.ibb.co/2jmRjvt/IMG-8975.jpg',
    ]
    const SouthCaloocanImageLinks = [
'https://i.ibb.co/tbQrKyy/DSCF9227.jpg',
'https://i.ibb.co/27WJd1Z/DSCF9224.jpg',
'https://i.ibb.co/YjVKk28/DSCF9228.jpg',
'https://i.ibb.co/f2K4S5N/DSCF9234.jpg',
'https://i.ibb.co/k5Gk7vK/DSCF9235.jpg',
'https://i.ibb.co/wdfZbPy/DSCF9238.jpg',
'https://i.ibb.co/6Zjhpww/DSCF9239.jpg',
'https://i.ibb.co/nRkmR76/DSCF9240.jpg',
'https://i.ibb.co/swFdnxz/DSCF9246.jpg',
'https://i.ibb.co/SQh7SCS/DSCF9247.jpg',
'https://i.ibb.co/GnvzgFG/DSCF9248.jpg',
'https://i.ibb.co/VSM9pNz/DSCF9249.jpg',
'https://i.ibb.co/hKGzWMk/DSCF9250.jpg',
'https://i.ibb.co/88cbv58/DSCF9251.jpg',
'https://i.ibb.co/41LzH39/DSCF9252.jpg',
'https://i.ibb.co/n68L7h8/DSCF9253.jpg',
'https://i.ibb.co/Xk0N5ZK/DSCF9254.jpg',
'https://i.ibb.co/KmgMmZv/DSCF9257.jpg',
'https://i.ibb.co/3FfDP93/DSCF9259.jpg',
'https://i.ibb.co/GPjp6zn/DSCF9260.jpg',
'https://i.ibb.co/B289wTt/DSCF9262.jpg',
'https://i.ibb.co/zf6JLBV/DSCF9263.jpg',
'https://i.ibb.co/phqNZ7w/DSCF9265.jpg',
'https://i.ibb.co/3zt2DDs/DSCF9266.jpg',
'https://i.ibb.co/pv3YGvS/DSCF9267.jpg',
'https://i.ibb.co/kJsrLfQ/DSCF9269.jpg',
'https://i.ibb.co/VxqSKhv/DSCF9270.jpg',
'https://i.ibb.co/BKtfdCD/DSCF9271.jpg',
'https://i.ibb.co/GW1Rbxg/DSCF9272.jpg',
'https://i.ibb.co/MPzgyXZ/DSCF9273.jpg',
'https://i.ibb.co/2PxjZHM/DSCF9274.jpg',
'https://i.ibb.co/C58cjGz/DSCF9277.jpg',
'https://i.ibb.co/VgWxxQr/DSCF9278.jpg',
'https://i.ibb.co/xMVhjJT/DSCF9279.jpg',
'https://i.ibb.co/6sprsSQ/DSCF9282.jpg',
'https://i.ibb.co/QX40XZT/DSCF9283.jpg',
'https://i.ibb.co/ryXJj16/DSCF9287.jpg',
'https://i.ibb.co/C7MCZVd/DSCF9288.jpg',
'https://i.ibb.co/zGdVc8r/DSCF9289.jpg',
'https://i.ibb.co/XjnCnRz/DSCF9292.jpg',
'https://i.ibb.co/2cTrqNq/DSCF9293.jpg',
'https://i.ibb.co/B29kpST/DSCF9295.jpg',
'https://i.ibb.co/tbRTGyN/DSCF9300.jpg',
'https://i.ibb.co/3mhV0dL/DSCF9311.jpg',
'https://i.ibb.co/BtWX26t/DSCF9313.jpg',
'https://i.ibb.co/6R171v2/DSCF9323.jpg',
'https://i.ibb.co/dpkXwt4/DSCF9324.jpg',
'https://i.ibb.co/7kpqZnS/DSCF9326.jpg',
'https://i.ibb.co/wBynMHL/DSCF9327.jpg',
'https://i.ibb.co/vDNdvZD/DSCF9330.jpg',
'https://i.ibb.co/cCJbJfQ/DSCF9331.jpg',
'https://i.ibb.co/tXytQLq/DSCF9332.jpg',
'https://i.ibb.co/NV7mv2g/DSCF9334.jpg',
'https://i.ibb.co/dmBNvhn/DSCF9339.jpg',
'https://i.ibb.co/G95kMQd/DSCF9340.jpg',
'https://i.ibb.co/nM1X4Gh/DSCF9343.jpg',
'https://i.ibb.co/jyjtfMh/DSCF9344.jpg',
'https://i.ibb.co/k5fVXXw/DSCF9345.jpg',
'https://i.ibb.co/gz8mCrt/DSCF9347.jpg',
'https://i.ibb.co/d6kS1Hy/DSCF9350.jpg',
'https://i.ibb.co/x2m2dQQ/DSCF9351.jpg',
'https://i.ibb.co/5RXt2Sp/DSCF9352.jpg',
'https://i.ibb.co/ChSdmbT/DSCF9353.jpg',
'https://i.ibb.co/ZJTphph/DSCF9354.jpg',
'https://i.ibb.co/wJwMvWq/DSCF9355.jpg',
'https://i.ibb.co/3CG6vfH/DSCF9356.jpg',
'https://i.ibb.co/2jMg6gt/DSCF9357.jpg',
'https://i.ibb.co/KV1cRvn/DSCF9358.jpg',
'https://i.ibb.co/fH9hNNc/DSCF9366.jpg',
'https://i.ibb.co/7227PFQ/DSCF9367.jpg',
'https://i.ibb.co/YWLJGNZ/DSCF9368.jpg',
'https://i.ibb.co/sF984vR/DSCF9371.jpg',
'https://i.ibb.co/TLvy6k7/DSCF9372.jpg',
'https://i.ibb.co/yPxV2SW/DSCF9381.jpg',
'https://i.ibb.co/6Br4JNB/DSCF9388.jpg',
'https://i.ibb.co/XsgrYxW/DSCF9389.jpg',
'https://i.ibb.co/LhNGWRg/DSCF9391.jpg',
'https://i.ibb.co/cYN3gbk/DSCF9392.jpg',
'https://i.ibb.co/mD9dmyM/DSCF9393.jpg',
'https://i.ibb.co/3BTNfLv/DSCF9394.jpg',
'https://i.ibb.co/VmS9HTz/DSCF9402.jpg',
'https://i.ibb.co/VBWtLcv/DSCF9405.jpg',
'https://i.ibb.co/W6Xzw4V/DSCF9410.jpg',
'https://i.ibb.co/9hwqNdQ/DSCF9414.jpg',
'https://i.ibb.co/Ycp93WV/DSCF9415.jpg',
'https://i.ibb.co/D1KGnRN/DSCF9416.jpg',
'https://i.ibb.co/B21cQsw/DSCF9417.jpg',
'https://i.ibb.co/QNZ2tQs/DSCF9423.jpg',
'https://i.ibb.co/5scHNG0/DSCF9425.jpg',
'https://i.ibb.co/Ns5d7F1/DSCF9427.jpg',
'https://i.ibb.co/vz89m3t/DSCF9437.jpg',
'https://i.ibb.co/Xb8107W/DSCF9445.jpg',
'https://i.ibb.co/z8nJTqN/DSCF9446.jpg',
    ]
    const NorthCaloocanImageLinks = [
'https://i.ibb.co/2qdqS4g/IMG-1283.jpg',
'https://i.ibb.co/VW7YDVq/IMG-1282.jpg',
'https://i.ibb.co/ggG0CtW/IMG-1284.jpg',
'https://i.ibb.co/JKPrPvC/IMG-1285.jpg',
'https://i.ibb.co/G94NJzq/IMG-1286.jpg',
'https://i.ibb.co/t8d40J8/IMG-1287.jpg',
'https://i.ibb.co/sV0shQN/IMG-1027.jpg',
'https://i.ibb.co/7N4Z1YH/IMG-1030.jpg',
'https://i.ibb.co/7kzHjMy/IMG-1031.jpg',
'https://i.ibb.co/Z2vKWmy/IMG-1034.jpg',
'https://i.ibb.co/0f3sq7M/IMG-1038.jpg',
'https://i.ibb.co/F6N43jT/IMG-1037.jpg',
'https://i.ibb.co/7bzHBNH/IMG-1039.jpg',
'https://i.ibb.co/YcwWTWc/IMG-1040.jpg',
'https://i.ibb.co/wWmPpC6/IMG-1041.jpg',
'https://i.ibb.co/KVsGYS5/IMG-1043.jpg',
'https://i.ibb.co/ZNntqv0/IMG-1048.jpg',
'https://i.ibb.co/0FsKTNm/IMG-1049.jpg',
'https://i.ibb.co/k5HBKLF/IMG-1050.jpg',
'https://i.ibb.co/2tm8t53/IMG-1051.jpg',
'https://i.ibb.co/KsgX0RK/IMG-1052.jpg',
'https://i.ibb.co/Sr7wHgW/IMG-1053.jpg',
'https://i.ibb.co/Kb30YcP/IMG-1054.jpg',
'https://i.ibb.co/F38mrGF/IMG-1064.jpg',
'https://i.ibb.co/4PpzVKR/IMG-1065.jpg',
'https://i.ibb.co/Dph4Zfh/IMG-1066.jpg',
'https://i.ibb.co/WfT2j9T/IMG-1068.jpg',
'https://i.ibb.co/d0Yh2Ty/IMG-1069.jpg',
'https://i.ibb.co/GtNCKjS/IMG-1070.jpg',
'https://i.ibb.co/6Z8Hx5Z/IMG-1071.jpg',
'https://i.ibb.co/CW0HBjq/IMG-1072.jpg',
'https://i.ibb.co/SmTjnHP/IMG-1073.jpg',
'https://i.ibb.co/bb8Fm9B/IMG-1074.jpg',
'https://i.ibb.co/q7gWhXm/IMG-1076.jpg',
'https://i.ibb.co/KqVrxzX/IMG-1077.jpg',
'https://i.ibb.co/Mh3dsqp/IMG-1078.jpg',
'https://i.ibb.co/RprCfjx/IMG-1079.jpg',
'https://i.ibb.co/RNR5x9f/IMG-1083.jpg',
'https://i.ibb.co/m4VXSmS/IMG-1085.jpg',
'https://i.ibb.co/kGs9038/IMG-1087.jpg',
'https://i.ibb.co/BsnzFXF/IMG-1088.jpg',
'https://i.ibb.co/kQpC680/IMG-1089.jpg',
'https://i.ibb.co/rFsnDqg/IMG-1090.jpg',
'https://i.ibb.co/9hkVDCd/IMG-1091.jpg',
'https://i.ibb.co/stJyq8g/IMG-1092.jpg',
'https://i.ibb.co/ZhVHn02/IMG-1093.jpg',
'https://i.ibb.co/3fQVWDB/IMG-1097.jpg',
'https://i.ibb.co/3MH7L4C/IMG-1098.jpg',
'https://i.ibb.co/3pCF2r9/IMG-1099.jpg',
'https://i.ibb.co/wprS5t7/IMG-1100.jpg',
'https://i.ibb.co/N3L8n0V/IMG-1101.jpg',
'https://i.ibb.co/rF7Tqc1/IMG-1104.jpg',
'https://i.ibb.co/smmcp88/IMG-1105.jpg',
'https://i.ibb.co/RN2sJT1/IMG-1106.jpg',
'https://i.ibb.co/2NYnv6y/IMG-1108.jpg',
'https://i.ibb.co/NnbDypk/IMG-1109.jpg',
'https://i.ibb.co/zGhhccL/IMG-1110.jpg',
'https://i.ibb.co/kxSSVSy/IMG-1116.jpg',
'https://i.ibb.co/JF1yY09/IMG-1119.jpg',
'https://i.ibb.co/BGwkZNY/IMG-1120.jpg',
'https://i.ibb.co/GQXdpBP/IMG-1121.jpg',
'https://i.ibb.co/cJT2K4z/IMG-1122.jpg',
'https://i.ibb.co/xgW2qjt/IMG-1124.jpg',
'https://i.ibb.co/jRd6kYW/IMG-1125.jpg',
'https://i.ibb.co/Pt42Zzs/IMG-1128.jpg',
'https://i.ibb.co/WzbQBWc/IMG-1130.jpg',
'https://i.ibb.co/tqLb3CH/IMG-1131.jpg',
'https://i.ibb.co/nBxpBpf/IMG-1139.jpg',
'https://i.ibb.co/8zsqHBN/IMG-1140.jpg',
'https://i.ibb.co/3cVmRm7/IMG-1144.jpg',
'https://i.ibb.co/m0cycx3/IMG-1145.jpg',
'https://i.ibb.co/RYb4t8D/IMG-1146.jpg',
'https://i.ibb.co/kc055p1/IMG-1147.jpg',
'https://i.ibb.co/6HMbFxM/IMG-1148.jpg',
'https://i.ibb.co/5Bwbszr/IMG-1150.jpg',
'https://i.ibb.co/1T8pkqj/IMG-1151.jpg',
'https://i.ibb.co/VjfNLKL/IMG-1152.jpg',
'https://i.ibb.co/X8k4Tmt/IMG-1153.jpg',
'https://i.ibb.co/QNhWsZD/IMG-1154.jpg',
'https://i.ibb.co/HCn9YFL/IMG-1156.jpg',
'https://i.ibb.co/pXNWY4n/IMG-1160.jpg',
'https://i.ibb.co/MpNNVY5/IMG-1161.jpg',
'https://i.ibb.co/DpGqFyj/IMG-1162.jpg',
'https://i.ibb.co/qFndxD5/IMG-1163.jpg',
'https://i.ibb.co/6nKr6w7/IMG-1164.jpg',
'https://i.ibb.co/3WT2CCG/IMG-1165.jpg',
'https://i.ibb.co/n7mhXnJ/IMG-1166.jpg',
'https://i.ibb.co/z8kj80J/IMG-1168.jpg',
'https://i.ibb.co/x66ZDhR/IMG-1169.jpg',
'https://i.ibb.co/s9p26mM/IMG-1171.jpg',
'https://i.ibb.co/WkXk67f/IMG-1173.jpg',
'https://i.ibb.co/M1ZGhB2/IMG-1174.jpg',
'https://i.ibb.co/Jvs09CV/IMG-1175.jpg',
'https://i.ibb.co/9pVHw4Y/IMG-1176.jpg',
'https://i.ibb.co/VY6FLqj/IMG-1177.jpg',
    ]

    const BrgySilanganQCImageLinks = [
'https://i.ibb.co/mRLNPm9/H2-H-April-10-2.jpg',
'https://i.ibb.co/1R16vYC/H2-H-April-10.jpg',
'https://i.ibb.co/DpzkFzC/IMG-9095.jpg',
'https://i.ibb.co/Ct40J8D/IMG-9094.jpg',
'https://i.ibb.co/nDzyQkj/IMG-9098.jpg',
'https://i.ibb.co/0DQ4K8P/IMG-9100.jpg',
'https://i.ibb.co/Xt4QKkX/IMG-9102.jpg',
'https://i.ibb.co/q7zQ7pD/IMG-9104.jpg',
'https://i.ibb.co/dmGc65j/IMG-9106.jpg',
'https://i.ibb.co/C2HPDZn/IMG-9110.jpg',
'https://i.ibb.co/yq0Mscf/IMG-9112.jpg',
'https://i.ibb.co/MhbnJRs/IMG-9113.jpg',
'https://i.ibb.co/Bjm07rd/IMG-9114.jpg',
'https://i.ibb.co/B27Hx6M/IMG-9118.jpg',
'https://i.ibb.co/2nG2JHn/IMG-9121.jpg',
'https://i.ibb.co/8YrkKhd/IMG-9126.jpg',
'https://i.ibb.co/KhKL11z/IMG-9127.jpg',
'https://i.ibb.co/hXrjN5B/IMG-9128.jpg',
'https://i.ibb.co/hm6ZdkR/IMG-9129.jpg',
'https://i.ibb.co/ckhtt7j/IMG-9131.jpg',
'https://i.ibb.co/wYjV7z5/IMG-9132.jpg',
'https://i.ibb.co/JsQmhmf/IMG-9133.jpg',
'https://i.ibb.co/G74rdDL/IMG-9136.jpg',
'https://i.ibb.co/YNs0ftj/IMG-9138.jpg',
'https://i.ibb.co/mvDkJQ7/IMG-9139.jpg',
'https://i.ibb.co/QD8XTgN/IMG-9141.jpg',
'https://i.ibb.co/ZKWw2Vy/IMG-9143.jpg',
'https://i.ibb.co/DRbwTCh/IMG-9144.jpg',
'https://i.ibb.co/876T0fb/IMG-9147.jpg',
'https://i.ibb.co/XtPcryM/IMG-9148.jpg',
'https://i.ibb.co/ZGVKpsX/IMG-9151.jpg',
'https://i.ibb.co/68cq5HK/IMG-9152.jpg',
'https://i.ibb.co/VNvqzmJ/IMG-9155.jpg',
'https://i.ibb.co/jyB0yn6/IMG-9156.jpg',
'https://i.ibb.co/pdhMTgk/IMG-9157.jpg',
'https://i.ibb.co/rfXxP60/IMG-9159.jpg',
'https://i.ibb.co/q0Wfjb3/IMG-9160.jpg',
'https://i.ibb.co/L0pfF0D/IMG-9162.jpg',
'https://i.ibb.co/9Wcq97D/IMG-9168.jpg',
'https://i.ibb.co/LkwBK7d/IMG-9171.jpg',
'https://i.ibb.co/nzWMGNv/IMG-9175.jpg',
'https://i.ibb.co/xjbgxP9/IMG-9177.jpg',
'https://i.ibb.co/2djj9kM/IMG-9181.jpg',
'https://i.ibb.co/HTxKH4F/IMG-9182.jpg',
'https://i.ibb.co/znbjyXS/IMG-9183.jpg',
'https://i.ibb.co/Dwnd57D/IMG-9185.jpg',
'https://i.ibb.co/3hxWQ2d/IMG-9188.jpg',
'https://i.ibb.co/GnBQ0zp/IMG-9190.jpg',
'https://i.ibb.co/kHSNPNw/IMG-9191.jpg',
'https://i.ibb.co/H4m2SD7/IMG-9192.jpg',
'https://i.ibb.co/vVY7tvH/IMG-9194.jpg',
'https://i.ibb.co/02jYcHY/IMG-9195.jpg',
    ]
    const MandaluyongImageLinks = [
        'https://i.ibb.co/RyYfbVD/Whats-App-Image-2022-04-16-at-10-03-24-PM.jpg',
        'https://i.ibb.co/xHdDs6r/Whats-App-Image-2022-04-16-at-10-03-22-PM.jpg',
        'https://i.ibb.co/m8Vtgsb/Whats-App-Image-2022-04-16-at-10-03-24-PM-1.jpg',
        'https://i.ibb.co/X8RPV27/Whats-App-Image-2022-04-16-at-10-03-24-PM-2.jpg',
        'https://i.ibb.co/Hd9kwXq/Whats-App-Image-2022-04-16-at-10-03-25-PM.jpg',
        'https://i.ibb.co/KXTK6LJ/Whats-App-Image-2022-04-16-at-10-03-25-PM-1.jpg',
        'https://i.ibb.co/bz9sKmx/Whats-App-Image-2022-04-16-at-10-03-26-PM.jpg',
        'https://i.ibb.co/DCb1Stc/Whats-App-Image-2022-04-16-at-10-03-26-PM-1.jpg',
        'https://i.ibb.co/HzT4WQ2/Whats-App-Image-2022-04-16-at-10-03-27-PM.jpg',
        'https://i.ibb.co/h74s1WJ/Whats-App-Image-2022-04-16-at-10-03-27-PM-1.jpg',
        'https://i.ibb.co/qNW9nQs/Whats-App-Image-2022-04-16-at-10-03-28-PM.jpg',
        'https://i.ibb.co/Xshf7vg/Whats-App-Image-2022-04-16-at-10-03-28-PM-1.jpg',
        'https://i.ibb.co/vDm3XCy/Whats-App-Image-2022-04-16-at-10-03-28-PM-2.jpg',
        'https://i.ibb.co/5WQYqmx/Whats-App-Image-2022-04-16-at-10-03-29-PM.jpg',
        'https://i.ibb.co/M9ZHrdX/Whats-App-Image-2022-04-16-at-10-03-29-PM-1.jpg',
        'https://i.ibb.co/0DyZKFG/Whats-App-Image-2022-04-16-at-10-03-30-PM.jpg',
        'https://i.ibb.co/TTGpbjs/Whats-App-Image-2022-04-16-at-10-03-31-PM.jpg',
        'https://i.ibb.co/n3b2GLG/Whats-App-Image-2022-04-16-at-10-03-31-PM-1.jpg',
        'https://i.ibb.co/nfsYxnY/Whats-App-Image-2022-04-16-at-10-03-32-PM.jpg',
        'https://i.ibb.co/BBd6BHq/Whats-App-Image-2022-04-16-at-10-03-32-PM-1.jpg',
    ]

    const router = useRouter()
    const {city} = router.query
    return(
 
        <Layout>
            <h1 className={styles.title}>Photo</h1>
            <h1 className={styles.subtext}>Gallery</h1>
            <h1 className={styles.city}>{city}</h1>
            <div className={styles.albumContainer}>
            {
                city==='San Juan'? 
                
                
                    SanJuanImageLinks.map((image,index)=>(
                        <Image src={image} height={400} width={200} objectFit='cover' quality={100} key={index} className={styles.image}/>
                    ))
                
                :null
            }
            {
                city==='Pateros'? 
                
                
                    PaterosImageLinks.map((image, index)=>(
                        <Image src={image}height={400} width={200} objectFit='cover'  quality={100} key={index} className={styles.image}/>
                    ))
                
                :null
            }
              {
                city==='South Caloocan'? 
                
                
                    SouthCaloocanImageLinks.map((image,index)=>(
                        <Image src={image}height={400} width={200} objectFit='cover'  quality={100} key={index} className={styles.image}/>
                    ))
                
                :null
            }
                {
                city==='North Caloocan'? 
                
                
                NorthCaloocanImageLinks.map((image,index)=>(
                        <Image src={image}height={400} width={200} objectFit='cover'  quality={100} key={index} className={styles.image}/>
                    ))
                
                :null
            }
             {
                city==='Brgy Silangan Quezon City'? 
                
                
                BrgySilanganQCImageLinks.map((image, index)=>(
                        <Image src={image}height={400} width={200} objectFit='cover'  quality={100} key={index} className={styles.image}/>
                    ))
                
                :null
            }
                  {
                city==='Mandaluyong'? 
                
                
                MandaluyongImageLinks.map((image, index)=>(
                        <Image src={image}height={400} width={200} objectFit='cover'  quality={100} key={index} className={styles.image}/>
                    ))
                
                :null
            }
            </div>

        </Layout>
   
)}

export default City