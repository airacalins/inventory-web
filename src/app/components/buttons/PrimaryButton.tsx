import Button from "./Button";

interface Props {
    label: string;
    onClick: () => void;
}

function PrimaryButton({ label }: Props) {
    return <Button
        label={label}
        className="btn__color-primary"
        onClick={() => { }}
    />

}

export default PrimaryButton;