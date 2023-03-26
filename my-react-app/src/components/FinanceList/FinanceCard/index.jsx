import styles from "./style.module.css";

export const FinanceCard = ({ finance, removeFinanceFromList }) => {
  return (
    <li className={styles.totalBox}>
      <div className={styles.infosBox}>
        <h1 className="title three">{finance.description}</h1>
        <nav className="body">{finance.type}</nav>
      </div>

      <div className={styles.rightInfos}>
        <nav className="body">R$ {finance.value}</nav>
        <button className="btn sm" onClick={() => removeFinanceFromList(finance.id)}>
          Excluir
        </button>
      </div>
    </li>
  );
};
