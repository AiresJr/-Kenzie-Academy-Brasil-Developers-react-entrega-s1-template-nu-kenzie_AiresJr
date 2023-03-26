import styles from './style.module.css'

export const FinanceTotal = ({ totalFinance }) => {
  return (

    <> 
    {totalFinance > 0 ? (
      <div className={styles.totalBox}>
      <div className={styles.total}>
        <h2 className="title three">Valor total:</h2>
        <nav className="title three">R$ {totalFinance}</nav>
      </div>
      <nav className="body">O valor se refere ao saldo</nav>
    </div>
    ):(
      <p></p>
    )}
    
    </>
  );
};
