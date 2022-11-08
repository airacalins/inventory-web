import { Button } from "react-bootstrap";

interface Props {
    label: String;
}

function PrimaryButton({ label }: Props) {
    return <Button className="primary">
        {label}
    </Button>
}

export default PrimaryButton;