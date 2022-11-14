import CircleImg from "../../../app/componets/Placeholder/CircularImage"
import HorizontalSpace from "../../../app/componets/Spacer/HorizontalSpace";
import Header5 from "../../../app/componets/Text/Header5";
import Paragraph from "../../../app/componets/Text/Paragraph";

interface Props {
    imageUrl: string,
    productQuantity: number,
    employeeQuantity: number,
}

function CompanyDetails({ imageUrl, productQuantity, employeeQuantity }: Props) {
    return <div className="container">
        <div className="d-flex">
            <div className="col-auto">
                <CircleImg src={imageUrl} size={10} />
            </div>
            <HorizontalSpace width={3} />
            <div className="d-flex">
                <div className="d-flex align-items-center">
                    <Paragraph text={productQuantity.toString()} />
                    <HorizontalSpace width={2} />
                    <Header5 text="Products" />
                </div>
                <HorizontalSpace width={3} />
                <div className="d-flex align-items-center">
                    <Paragraph text={employeeQuantity.toString()} />
                    <HorizontalSpace width={2} />
                    <Header5 text="Employees" />
                </div>
            </div>
        </div>
    </div>
}

export default CompanyDetails;