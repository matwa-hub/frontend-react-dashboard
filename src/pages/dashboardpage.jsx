import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Sector,
} from "recharts";

const data = [
  { name: "Registered", value: 30 },
  { name: "Pending", value: 15 },
  { name: "Cancelled", value: 5 },
  { name: "Completed", value: 50 },
];

const COLORS = ["#3b82f6", "#f97316", "#f97373", "#22c55e"];

function renderActiveShape(props) {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;

  return (
    <g>
      {/* slice yang di-pop‑up */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8} // sedikit lebih besar saat aktif
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* ring tipis di luar sebagai glow */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + 8}
        outerRadius={outerRadius + 14}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={0.35}
      />
      {/* label di tengah chart */}
      <text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        fill="#e5e7eb"
        style={{ fontSize: "14px", fontWeight: 600 }}
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy + 12}
        textAnchor="middle"
        fill="#9ca3af"
        style={{ fontSize: "13px" }}
      >
        {value} peserta
      </text>
    </g>
  );
}

function DashboardPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h2 className="dashboard-title">Dashboard</h2>
          <p className="dashboard-subtitle">
            Ringkasan data event (dummy).
          </p>
        </div>
        <span className="dashboard-badge">Today&apos;s overview</span>
      </div>

      <div className="dashboard-grid">
        {/* Kartu chart */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <div>
              <div className="dashboard-card-title">Status pendaftaran</div>
              <div className="dashboard-card-sub">
                Distribusi peserta berdasarkan status terkini.
              </div>
            </div>
          </div>

          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={1}
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  onMouseEnter={onPieEnter}
                  onMouseLeave={onPieLeave}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Kartu ringkasan angka */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <div>
              <div className="dashboard-card-title">Ringkasan singkat</div>
              <div className="dashboard-card-sub">
                Angka‑angka utama untuk event yang sedang berjalan.
              </div>
            </div>
          </div>

          <div className="dashboard-kpi-grid">
            <div className="dashboard-kpi-item">
              <div className="dashboard-kpi-label">Total registered</div>
              <div className="dashboard-kpi-value">80</div>
            </div>
            <div className="dashboard-kpi-item">
              <div className="dashboard-kpi-label">Active events</div>
              <div className="dashboard-kpi-value">3</div>
            </div>
            <div className="dashboard-kpi-item">
              <div className="dashboard-kpi-label">Pending approval</div>
              <div className="dashboard-kpi-value">15</div>
            </div>
            <div className="dashboard-kpi-item">
              <div className="dashboard-kpi-label">Cancelled</div>
              <div className="dashboard-kpi-value">5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
