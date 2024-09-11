import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead className={s.title}>
          <tr className={s.mainWrapper}>
            <th className={s.main}>Type</th>
            <th className={s.main}>Amount</th>
            <th className={s.main}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr className={s.dataWrapper} key={item.id}>
              <td className={s.data}>{item.type}</td>
              <td className={s.data}>{item.amount}</td>
              <td className={s.data}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
