import { FinanceCard } from "./FinanceCard";

export const FinanceList = ({ financeList, removeFinanceFromList }) => {
  return (
    <>
      {financeList.length > 0 ? (
        <ul>
          {financeList.map((finance) => {
            return <FinanceCard key={finance.id} finance={finance} removeFinanceFromList={removeFinanceFromList} />;
          })}
        </ul>
      ) : (
        <p className="title two">Você ainda não possui nenhum lançamento</p>
      )}
    </>
  );
};
