import { motion } from 'framer-motion';
import useFetch from '../hooks/useFetch';

function Dashboard({ user }) {
  const { data: transactions, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

  return (
    <motion.div
      className="dashboard-container"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Dashboard</h2>
      <p>Welcome, {user?.username}!</p>
      <h3>Recent Transactions</h3>
      {loading && <p>Loading transactions...</p>}
      {error && <p>Error fetching transactions.</p>}
      {transactions && (
        <ul className="transactions-list">
          {transactions.map((tx) => (
            <li key={tx.id}>
              <strong>Transaction #{tx.id}:</strong> {tx.title}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default Dashboard;
