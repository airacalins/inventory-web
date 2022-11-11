import Button from "./Button";

interface Props {
    label: string;
    onClick: () => void;
}

function SecondayButton({ label, onClick }: Props) {
    return <Button
        label={label}
        className="btn__color-secondary"
        onClick={onClick}
    />
}

export default SecondayButton;