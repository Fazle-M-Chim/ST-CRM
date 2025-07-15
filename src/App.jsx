import React, { useState, useEffect } from 'react';

// Helper component for SVG icons.
const Icon = ({ name, className }) => {
  const icons = {
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 3v18" /><path d="M3 7.5h4" /><path d="M3 12h4" /><path d="M3 16.5h4" /><path d="M17.5 3h-4" /><path d="M17.5 7.5h-4" /><path d="M17.5 12h-4" /><path d="M17.5 16.5h-4" /><path d="M13 3v18" /></svg>
    ),
    dashboard: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
    ),
    clients: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
    machines: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
    ),
    reminders: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
    ),
    plus: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="M12 5v14" /></svg>
    ),
    statClients: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
    // Updated icon for machines to a Wrench
    statMachines: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    statOverdue: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
    ),
    close: (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    ),
    search: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    )
  };
  return icons[name] || null;
};

// Sidebar Component
const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Clients', icon: 'clients' },
    { name: 'Machines', icon: 'machines' },
    { name: 'Reminders', icon: 'reminders' },
  ];

  return (
    <aside className="w-64 bg-white text-gray-800 p-4 flex flex-col flex-shrink-0">
      <div className="flex items-center mb-8 flex-shrink-0">
        <Icon name="logo" className="w-8 h-8 text-blue-600" />
        <h1 className="text-xl font-bold ml-2">Sakan Tradelinks</h1>
      </div>
      <nav className="flex-grow">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className={`mb-2 rounded-lg ${activePage === item.name ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}>
              <button onClick={() => setActivePage(item.name)} className="flex items-center p-3 w-full text-left">
                <Icon name={item.icon} className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

// --- Dashboard Page Components ---
const DashboardPage = () => {
    const getDate = (days) => {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    };

    const Header = () => (
        <header className="flex justify-between items-center w-full mb-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
                <p className="text-gray-500">Welcome back! Here's what needs your attention.</p>
            </div>
            <div className="flex items-center space-x-4">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center font-semibold hover:bg-blue-800 transition">
                    <Icon name="plus" className="w-5 h-5 mr-2" />
                    Add Client
                </button>
            </div>
        </header>
    );

    const StatCard = ({ title, value, icon, iconBgColor }) => (
        <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center">
            <div>
                <p className="text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-800">{value}</p>
            </div>
            <div className={`p-3 rounded-lg ${iconBgColor}`}>
                <Icon name={icon} className="w-6 h-6 text-white" />
            </div>
        </div>
    );

    const OverdueFollowUpsCard = () => {
        const overdueItems = [
            { client: 'TechCorp Solutions', task: 'AMC Renewal', dueDate: getDate(-210) },
            { client: 'Global Manufacturing', task: 'Warranty Expiry', dueDate: getDate(-150) },
            { client: 'Precision Industries', task: 'Service Follow-up', dueDate: getDate(-95) },
        ];
        const getDaysOverdue = (dueDate) => Math.floor((new Date() - new Date(dueDate)) / (1000 * 60 * 60 * 24));
        const formatDate = (date) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date));
        return (
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center mb-4">
                    <span className="text-red-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></span>
                    Overdue Follow-ups
                </h3>
                <p className="text-gray-500 mb-6">Clients requiring immediate attention</p>
                <ul className="space-y-4">
                    {overdueItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="h-2.5 w-2.5 bg-red-500 rounded-full mt-1.5 mr-4"></span>
                            <div className="flex-grow">
                                <p className="font-semibold text-gray-800">{item.client}</p>
                                <p className="text-sm text-gray-500">{item.task}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-red-500">{getDaysOverdue(item.dueDate)} days overdue</p>
                                <p className="text-sm text-gray-500">Due: {formatDate(item.dueDate)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const UpcomingRemindersCard = () => {
        const reminderItems = [
            { client: 'InnoTech Labs', task: 'Monthly Check-in', dueDate: getDate(30) },
            { client: 'Apex Engineering', task: 'Insurance Renewal', dueDate: getDate(60) },
            { client: 'Dynamic Systems', task: 'Service Maintenance', dueDate: getDate(90) },
        ];
        const getDaysUpcoming = (dueDate) => Math.ceil((new Date(dueDate) - new Date()) / (1000 * 60 * 60 * 24));
        const formatDate = (date) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date));
        return (
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center mb-4">
                    <span className="text-blue-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg></span>
                    Upcoming Monthly Reminders
                </h3>
                <p className="text-gray-500 mb-6">Scheduled activities for this month</p>
                <ul className="space-y-4">
                    {reminderItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="h-2.5 w-2.5 bg-blue-500 rounded-full mt-1.5 mr-4"></span>
                            <div className="flex-grow">
                                <p className="font-semibold text-gray-800">{item.client}</p>
                                <p className="text-sm text-gray-500">{item.task}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-blue-500">In {getDaysUpcoming(item.dueDate)} days</p>
                                <p className="text-sm text-gray-500">{formatDate(item.dueDate)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Clients" value="6" icon="statClients" iconBgColor="bg-blue-500" />
                <StatCard title="Active Machines" value="4" icon="statMachines" iconBgColor="bg-green-500" />
                <StatCard title="Overdue Follow-ups" value="3" icon="statOverdue" iconBgColor="bg-red-500" />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <OverdueFollowUpsCard />
                <UpcomingRemindersCard />
            </div>
        </>
    );
};

// --- Reminders Page Components ---
const RemindersPage = () => {
    const getDate = (days) => {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    };
    const initialUpcoming = [
        { id: 1, text: 'Follow up with Innovate Inc. about project proposal.', dueDate: getDate(3) },
        { id: 2, text: 'Send quarterly report to Apex Corp.', dueDate: getDate(7) },
        { id: 3, text: 'Schedule a maintenance check for Dynamic Systems.', dueDate: getDate(14) },
    ];
    const initialPastDue = [ { id: 4, text: 'Review contract with Global Manufacturing.', dueDate: getDate(-5) } ];
    const [upcomingReminders, setUpcomingReminders] = useState(initialUpcoming);
    const [pastDueReminders, setPastDueReminders] = useState(initialPastDue);
    const deleteUpcoming = (id) => setUpcomingReminders(upcomingReminders.filter(r => r.id !== id));
    const deletePastDue = (id) => setPastDueReminders(pastDueReminders.filter(r => r.id !== id));
    const clearAll = () => { setUpcomingReminders([]); setPastDueReminders([]); };
    const formatDueDate = (dueDate) => {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const reminderDate = new Date(dueDate);
        reminderDate.setHours(0, 0, 0, 0);
        const diffTime = reminderDate - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const dateOptions = { weekday: 'long', year: '2-digit', month: 'numeric', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-GB', dateOptions).format(reminderDate);
        let relativeString;
        if (diffDays < 0) { const pastDays = Math.abs(diffDays); relativeString = `Due ${pastDays} day${pastDays > 1 ? 's' : ''} ago`; } 
        else if (diffDays === 0) { relativeString = 'Due today'; } 
        else if (diffDays === 1) { relativeString = 'Due tomorrow'; } 
        else if (diffDays <= 7) { relativeString = `Due in ${diffDays} days`; } 
        else { const diffWeeks = Math.ceil(diffDays / 7); relativeString = `Due in ${diffWeeks > 1 ? `${diffWeeks} weeks` : '1 week'}`; }
        return `${relativeString} on ${formattedDate}`;
    };
    const ReminderItem = ({ reminder, onDelete, isPastDue }) => (
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
            <div className="flex items-center">
                <span className={`h-2.5 w-2.5 rounded-full mr-4 ${isPastDue ? 'bg-red-500' : 'bg-blue-500'}`}></span>
                <div>
                    <p className="text-gray-800 font-medium">{reminder.text}</p>
                    <p className={`text-sm ${isPastDue ? 'text-red-600' : 'text-gray-500'}`}>{formatDueDate(reminder.dueDate)}</p>
                </div>
            </div>
            <button onClick={() => onDelete(reminder.id)} className={`text-gray-400 transition ${isPastDue ? 'hover:text-red-500' : 'hover:text-blue-500'}`}><Icon name="close" className="w-6 h-6" /></button>
        </div>
    );
    return (
        <div className="w-full">
            <header className="flex justify-between items-center w-full mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Reminders</h2>
                    <p className="text-gray-500">Manage your upcoming and past due tasks.</p>
                </div>
                <button onClick={clearAll} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center font-semibold hover:bg-gray-300 transition">Clear All Reminders</button>
            </header>
            <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Past Due</h3>
                <div className="space-y-4">{pastDueReminders.length > 0 ? (pastDueReminders.map(r => <ReminderItem key={r.id} reminder={r} onDelete={deletePastDue} isPastDue />)) : (<div className="bg-white p-6 rounded-lg shadow-sm text-center text-gray-500">No past due reminders.</div>)}</div>
            </section>
            <section>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Upcoming</h3>
                <div className="space-y-4">{upcomingReminders.length > 0 ? (upcomingReminders.map(r => <ReminderItem key={r.id} reminder={r} onDelete={deleteUpcoming} />)) : (<div className="bg-white p-6 rounded-lg shadow-sm text-center text-gray-500">No upcoming reminders.</div>)}</div>
            </section>
        </div>
    );
};

// --- Clients Page Component ---
const ClientsPage = () => {
    const allClients = [
        { id: 1, name: 'TechCorp Solutions', machines: [{}, {}, {}] },
        { id: 2, name: 'Global Manufacturing', machines: [{}, {}] },
        { id: 3, name: 'Precision Industries', machines: [{}] },
        { id: 4, name: 'InnoTech Labs', machines: [{}, {}, {}, {}] },
        { id: 5, name: 'Apex Engineering', machines: [{}, {}] },
        { id: 6, name: 'Dynamic Systems', machines: [{}, {}, {}, {}, {}] },
        { id: 7, name: 'Quantum Innovations', machines: [{}] },
        { id: 8, name: 'Stellar Solutions', machines: [{}, {}] },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredClients, setFilteredClients] = useState(allClients);

    useEffect(() => {
        const results = allClients.filter(client =>
            client.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredClients(results);
    }, [searchTerm]);

    return (
        <div className="w-full">
            <header className="flex justify-between items-center w-full mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Clients</h2>
                    <p className="text-gray-500">Search and manage your clients.</p>
                </div>
                 <button className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center font-semibold hover:bg-blue-800 transition">
                    <Icon name="plus" className="w-5 h-5 mr-2" />
                    Add Client
                </button>
            </header>

            {/* Search Bar */}
            <div className="mb-8">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Icon name="search" className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search for a client..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Client List */}
            <div className="bg-white rounded-lg shadow-sm">
                <ul className="divide-y divide-gray-200">
                    {filteredClients.length > 0 ? (
                        filteredClients.map(client => (
                            <li key={client.id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition">
                                <span className="font-semibold text-gray-800">{client.name}</span>
                                <span className="text-gray-500">{client.machines.length} Machine{client.machines.length !== 1 ? 's' : ''}</span>
                            </li>
                        ))
                    ) : (
                        <li className="p-6 text-center text-gray-500">No clients found.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};


// --- Main App Component ---
export default function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <div className="h-screen flex bg-gray-100 font-sans overflow-hidden">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-8 overflow-y-auto">
        {activePage === 'Dashboard' && <DashboardPage />}
        {activePage === 'Reminders' && <RemindersPage />}
        {activePage === 'Clients' && <ClientsPage />}
        {/* Add other pages here with similar conditional rendering */}
        {/* {activePage === 'Machines' && <MachinesPage />} */}
      </main>
    </div>
  );
}
