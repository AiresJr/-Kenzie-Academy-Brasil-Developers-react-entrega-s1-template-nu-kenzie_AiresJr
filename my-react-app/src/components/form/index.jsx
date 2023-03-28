import { useState } from "react";
import styles from "./style.module.css";

export const CreateForm = ({ addFinanceToFinanceList }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const formData = { description, value, type };
    if ((description !== "") & (value !== "")) {
      addFinanceToFinanceList(formData);
    } else {
      alert("Por favor preencha os campos necessários!");
    }
  };

  return (
    <div className={styles.totalBox}>
      <h3 className="body">Descrição</h3>
      <form className="form" onSubmit={submit}>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Digite aqui sua descrição"
        />
        <nav className="body">Ex: Compra de Roupas</nav>
        <h3 className="body">Valor (R$)</h3>
        <input type="text" value={value} onChange={(event) => setValue(Number(event.target.value))} />
        <h3 className="body">Tipo de valor</h3>
        <select value={type} onChange={(event) => setType(event.target.value)} name="type__select" id="">
          <option value="">Selecione uma opção</option>
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
        <button className="btn lg" type="submit">
          Inserir valor
        </button>
      </form>
    </div>
  );
};
