import SideNav from "../../app/components/SideNav/SideNav";
import Header1 from "../../app/components/Text/Header1";

function HomePage() {
    return <div className='d-flex'>
        <div className='vh-100 size__width-5'>
            <SideNav />
        </div>

        <div>
            <Header1 text={'hi'} />
        </div>
    </div>
}

export default HomePage;