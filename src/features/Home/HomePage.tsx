import { Tab, Tabs } from "react-bootstrap";
import AlternativeButton from "../../app/componets/Buttons/AlternativeButton";
import IconButton from "../../app/componets/Buttons/IconButton";
import PrimaryButton from "../../app/componets/Buttons/PrimaryButton";
import SecondaryButton from "../../app/componets/Buttons/SecondaryButton";
import SideNav from "../../app/componets/SideNav/SideNav";
import Header1 from "../../app/componets/Text/Header1";

function HomePage() {
    return <div className='d-flex'>
        <div className='vh-100 size__width-5'>
            <SideNav />
        </div>
    </div>
}

export default HomePage;