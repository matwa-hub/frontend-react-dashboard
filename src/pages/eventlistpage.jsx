import { useState } from "react";

const initialEvents = [
  {
    id: 1,
    title: "React Workshop",
    date: "2025-12-20",
    location: "Jakarta",
    status: "Open",
  },
  {
    id: 2,
    title: "NodeJS Bootcamp",
    date: "2025-12-22",
    location: "Bandung",
    status: "Closed",
  },
];

function EventListPage() {
  const [events, setEvents] = useState(initialEvents);
  const [form, setForm] = useState({
    id: null,
    title: "",
    date: "",
    location: "",
    status: "Open",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setEvents((prev) => prev.map((ev) => (ev.id === form.id ? form : ev)));
    } else {
      setEvents((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, title: "", date: "", location: "", status: "Open" });
    setIsEditing(false);
  };

  const handleEdit = (event) => {
    setForm(event);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setEvents((prev) => prev.filter((ev) => ev.id !== id));
  };

  return (
    <div>
      <h2 className="event-section-title">List Event</h2>
      <p className="event-section-subtitle">
        CRUD event dengan data disimpan di state.
      </p>

      {/* FORM CARD */}
      <div className="event-form-card">
        <div className="event-form-title">
          {isEditing ? "Edit Event" : "Tambah Event"}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="event-form-grid">
            <div className="event-input-wrapper">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                className="event-input"
                placeholder="Nama event"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="event-input-wrapper">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                name="date"
                className="event-input"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="event-input-wrapper">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                className="event-input"
                placeholder="Kota / tempat"
                value={form.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="event-input-wrapper">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                className="event-select"
                value={form.status}
                onChange={handleChange}
              >
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <button type="submit" className="event-save-btn">
              {isEditing ? "Update" : "Save"}
            </button>
            {isEditing && (
              <button
                type="button"
                className="event-btn event-btn--delete"
                style={{ marginLeft: "0.6rem" }}
                onClick={() => {
                  setForm({
                    id: null,
                    title: "",
                    date: "",
                    location: "",
                    status: "Open",
                  });
                  setIsEditing(false);
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* TABLE CARD */}
      <div className="event-table-wrapper">
        <table className="event-table">
          <thead>
            <tr>
              <th>Title</th>
              <th style={{ minWidth: 120 }}>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev) => (
              <tr key={ev.id}>
                <td>{ev.title}</td>
                <td>{ev.date}</td>
                <td>{ev.location}</td>
                <td>
                  <span
                    className={`event-status-pill ${
                      ev.status === "Open"
                        ? "event-status-pill--open"
                        : "event-status-pill--closed"
                    }`}
                  >
                    {ev.status}
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <button
                    type="button"
                    className="event-btn event-btn--edit"
                    onClick={() => handleEdit(ev)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="event-btn event-btn--delete"
                    onClick={() => handleDelete(ev.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {events.length === 0 && (
              <tr>
                <td colSpan={5} style={{ padding: "0.7rem 0.5rem" }}>
                  Belum ada event.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventListPage;
