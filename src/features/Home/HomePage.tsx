import AlternativeButton from "../../app/Components/Buttons/AlternativeButton";
import PrimaryButton from "../../app/Components/Buttons/PrimaryButton";
import SecondaryButton from "../../app/Components/Buttons/SecondaryButton";
import SideNav from "../../app/Components/SideNav/SideNav";
import Header1 from "../../app/Components/Text/Header1";

function HomePage() {
    return <div className='d-flex'>
        <div className='vh-100 size__width-5'>
            <SideNav />
        </div>

        <div>
            <Header1 text={'hi'} />
            <PrimaryButton label="hi" className="disabled" onClick={() => { }} />
            <AlternativeButton label="hi" className="disabled" onClick={() => { }} />
            <SecondaryButton label="hi" className="disabled" onClick={() => { }} />
        </div>
    </div>
}

export default HomePage;