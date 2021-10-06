import { CloseIcon, SideBarContainer,Icon, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap } from "./SideBarElement";

const SideBar = (props) => {
    return ( 
        <SideBarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Deserts</SidebarLink>
                <SidebarLink to="/">All Menue</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SideBarContainer>
     );
}
 
export default SideBar;