import { useState } from "react";
import "./styles/reset.css";
import { Header } from "./components/Header/index";
import { FinanceList } from "./components/FinanceList/index";
import { FinanceTotal } from "./components/FinanceTotal/index";
import { CreateForm } from "./components/form/index";
import "./styles/index.css";
import styles from "./styles/pages/home.module.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [financeList, setFinanceList] = useState([]);

  const addFinanceToFinanceList = (formData) => {
    const newFinance = { ...formData, id: uuidv4() };
    const newFinanceList = [...financeList, newFinance];
    setFinanceList(newFinanceList);
  };

  const removeFinanceFromList = (financeId) => {
    const newFinanceList = financeList.filter(
      (finance) => finance.id !== financeId
    );
    setFinanceList(newFinanceList);
  };

  const totalFinance = financeList.reduce((previusValue, currentFinance) => {
    return previusValue + currentFinance.value;
  }, 0);

  return (
    <div>
      <Header />
      <main className="container">
        <div className={styles.flexBox}>
          <div className={styles.left}>
            <CreateForm addFinanceToFinanceList={addFinanceToFinanceList} />
            <FinanceTotal totalFinance={totalFinance} />
          </div>

          <div className={styles.right}>
            <h1 className="title three">Resumo Financeiro</h1>
            <FinanceList
              financeList={financeList}
              removeFinanceFromList={removeFinanceFromList}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
