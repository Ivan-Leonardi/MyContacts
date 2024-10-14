import Input from "../../components/Input";
import Select from "../../components/Select";
import PageHeader from "../../components/PageHeader";

export default function NewContact() {
    return (
        <>
            <PageHeader title="Novo Contato" />
            <Input type="text" placeholder="Nome"/>
            <Select>
                <option value="123">instagram</option>
                <option value="123">instagram</option>
                <option value="123">instagram</option>
                <option value="123">instagram</option>
                <option value="123">instagram</option>
                <option value="123">instagram</option>
            </Select>
        </>
    );
}
