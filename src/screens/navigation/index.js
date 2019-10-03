import { createAppContainer, createSwitchNavigator } from "react-navigation";
import NhapIp from "../nhap-ip/inde";
import DieuKhien from "../dieu-khien/index";

const SwitchContainer = createSwitchNavigator(
    {
        nhap : {
            screen : NhapIp
        },
        dieukhien : {
            screen : DieuKhien   
        }
    },
    {
        initialRouteName : "nhap"
    }
)

const AppContainer = createAppContainer(SwitchContainer);
export default AppContainer;
