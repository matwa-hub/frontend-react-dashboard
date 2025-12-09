const transactions = [
  {
    id: 1,
    userName: "Budi",
    eventName: "React Workshop",
    registeredAt: "2025-12-10",
    paymentStatus: "Paid",
  },
  {
    id: 2,
    userName: "Siti",
    eventName: "React Workshop",
    registeredAt: "2025-12-11",
    paymentStatus: "Unpaid",
  },
  {
    id: 3,
    userName: "Andi",
    eventName: "NodeJS Bootcamp",
    registeredAt: "2025-12-09",
    paymentStatus: "Paid",
  },
  {
    id: 4,
    userName: "Velis",
    eventName: "NodeJS Bootcamp",
    registeredAt: "2025-12-09",
    paymentStatus: "Unpaid",
  },
  {
    id: 5,
    userName: "Niko",
    eventName: "React Workshop",
    registeredAt: "2025-11-09",
    paymentStatus: "Paid",
  },
];

function EventTransactionPage() {
  return (
    <div>
      <h2 className="transaction-section-title">Event Transaction</h2>
      <p className="transaction-section-subtitle">
        Data user yang mendaftar event (dummy).
      </p>

      <div className="transaction-card">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Event</th>
              <th>Registered At</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td>{tx.userName}</td>
                <td>{tx.eventName}</td>
                <td>{tx.registeredAt}</td>
                <td>
                  <span
                    className={`tx-status-pill ${
                      tx.paymentStatus === "Paid"
                        ? "tx-status-pill--paid"
                        : "tx-status-pill--unpaid"
                    }`}
                  >
                    {tx.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventTransactionPage;
