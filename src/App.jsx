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

// --- Sidebar Component ---
const Sidebar = ({ activePage, setActivePage, isSidebarOpen, setIsSidebarOpen }) => {
  const menuItems = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Clients', icon: 'clients' },
    { name: 'Machines', icon: 'machines' },
    { name: 'Reminders', icon: 'reminders' },
  ];

  return (
    <aside className={`bg-white text-gray-800 p-4 flex flex-col flex-shrink-0 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        className="flex items-center mb-8 flex-shrink-0 w-full hover:bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Icon name="logo" className="w-8 h-8 text-blue-600 flex-shrink-0" />
        {isSidebarOpen && <h1 className="text-xl font-bold ml-2 whitespace-nowrap">Sakan Tradelinks</h1>}
      </button>
      <nav className="flex-grow">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className={`mb-2 rounded-lg ${activePage === item.name ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}>
              <button 
                onClick={() => setActivePage(item.name)} 
                className={`flex items-center p-3 w-full text-left ${!isSidebarOpen && 'justify-center'}`}
                title={item.name}
              >
                <Icon name={item.icon} className={`w-5 h-5 flex-shrink-0 ${isSidebarOpen && 'mr-3'}`} />
                {isSidebarOpen && <span className="font-medium">{item.name}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

// --- Dashboard Page Components ---
const DashboardPage = ({ setActivePage }) => {
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

    const StatCard = ({ title, value, icon, iconBgColor, targetPage }) => (
        <button 
            onClick={() => setActivePage(targetPage)}
            className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center w-full text-left transition duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            <div>
                <p className="text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-800">{value}</p>
            </div>
            <div className={`p-3 rounded-lg ${iconBgColor}`}>
                <Icon name={icon} className="w-6 h-6 text-white" />
            </div>
        </button>
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
                <StatCard title="Total Clients" value="6" icon="statClients" iconBgColor="bg-blue-500" targetPage="Clients" />
                <StatCard title="Active Machines" value="4" icon="statMachines" iconBgColor="bg-green-500" targetPage="Machines" />
                <StatCard title="Overdue Follow-ups" value="3" icon="statOverdue" iconBgColor="bg-red-500" targetPage="Reminders" />
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


// --- NEW: Add Client Modal Component ---
const AddClientModal = ({ isOpen, onClose, onClientAdded }) => {
    const initialState = {
        companyName: '',
        companyEmail: '',
        physicalAddress: '',
        lastContactedDate: '',
        contacts: [{ name: '', title: '', phone: '', email: '' }]
    };

    const [formData, setFormData] = useState(initialState);

    const handleMainChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleContactChange = (index, e) => {
        const { name, value } = e.target;
        const updatedContacts = [...formData.contacts];
        updatedContacts[index][name] = value;
        setFormData(prev => ({ ...prev, contacts: updatedContacts }));
    };

    const addContact = () => {
        setFormData(prev => ({
            ...prev,
            contacts: [...prev.contacts, { name: '', title: '', phone: '', email: '' }]
        }));
    };

    const removeContact = (index) => {
        const updatedContacts = formData.contacts.filter((_, i) => i !== index);
        setFormData(prev => ({ ...prev, contacts: updatedContacts }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/clients', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to create client');
            }
            
            setFormData(initialState); // Reset form
            onClientAdded(); // Refresh the client list
            onClose(); // Close the modal
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    
    // Don't render anything if the modal isn't open
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6">Add New Client</h2>
                
                <form onSubmit={handleSubmit}>
                    {/* Company Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <input type="text" name="companyName" value={formData.companyName} onChange={handleMainChange} placeholder="Company Name" className="p-2 border rounded" required />
                        <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleMainChange} placeholder="Company Email" className="p-2 border rounded" />
                        <input type="text" name="physicalAddress" value={formData.physicalAddress} onChange={handleMainChange} placeholder="Physical Address" className="p-2 border rounded" />
                        <input type="date" name="lastContactedDate" value={formData.lastContactedDate} onChange={handleMainChange} className="p-2 border rounded" required />
                    </div>

                    {/* Contact Persons */}
                    <h3 className="text-xl font-semibold mb-4 border-t pt-4">Contact Persons</h3>
                    {formData.contacts.map((contact, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4 p-3 border rounded-md relative">
                            <input type="text" name="name" value={contact.name} onChange={(e) => handleContactChange(index, e)} placeholder="Full Name" className="p-2 border rounded col-span-2" required />
                            <input type="text" name="title" value={contact.title} onChange={(e) => handleContactChange(index, e)} placeholder="Title" className="p-2 border rounded col-span-1" />
                            <input type="tel" name="phone" value={contact.phone} onChange={(e) => handleContactChange(index, e)} placeholder="Phone" className="p-2 border rounded col-span-1" />
                            <input type="email" name="email" value={contact.email} onChange={(e) => handleContactChange(index, e)} placeholder="Email" className="p-2 border rounded col-span-1" />
                            {formData.contacts.length > 1 && (
                                <button type="button" onClick={() => removeContact(index)} className="absolute top-1 right-1 text-red-500 hover:text-red-700">&times;</button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addContact} className="mb-6 text-sm text-blue-600 hover:underline">+ Add another contact</button>

                    {/* Actions */}
                    <div className="flex justify-end gap-4 border-t pt-6">
                        <button type="button" onClick={onClose} className="px-6 py-2 bg-gray-200 rounded-md font-semibold">Cancel</button>
                        <button type="submit" className="px-6 py-2 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800">Save Client</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- (MODIFIED) Clients Page Component ---
const ClientsPage = () => {
    const [clients, setClients] = useState([]);
    // NEW: State to control the modal's visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchClients = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/clients');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setClients(data);
        } catch (error) {
            console.error('There was a problem fetching the clients:', error);
        }
    };
    
    useEffect(() => {
        fetchClients(); // Fetch clients when the component loads
    }, []);

    return (
        <div className="w-full">
            {/* The modal component is now here */}
            <AddClientModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onClientAdded={fetchClients} // Pass fetchClients to refresh the list
            />
            
            <header className="flex justify-between items-center w-full mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Clients</h2>
                    <p className="text-gray-500">Displaying clients from the database.</p>
                </div>
                 {/* This button now opens the modal */}
                 <button onClick={() => setIsModalOpen(true)} className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center font-semibold hover:bg-blue-800 transition">
                    <Icon name="plus" className="w-5 h-5 mr-2" />
                    Add Client
                </button>
            </header>

            <div className="bg-white rounded-lg shadow-sm">
                <ul className="divide-y divide-gray-200">
                    {clients.length > 0 ? (
                        clients.map(client => (
                            <li key={client._id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition">
                                <span className="font-semibold text-gray-800">{client.name}</span>
                                <span className="text-gray-500">{new Date(client.lastContactedDate).toLocaleDateString()}</span>
                            </li>
                        ))
                    ) : (
                        <li className="p-6 text-center text-gray-500">No clients found. Click "Add Client" to begin.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};


// --- Machines Page Component ---
const MachinesPage = () => {
    const allMachines = [
        { id: 1, name: 'CNC Lathe TX-500', client: 'TechCorp Solutions', dueDate: '2025-08-15', status: 'Active' },
        { id: 2, name: 'Milling Machine V2', client: 'Global Manufacturing', dueDate: '2025-09-01', status: 'Active' },
        { id: 3, name: 'Industrial Grinder G-8', client: 'Precision Industries', dueDate: '2025-07-20', status: 'AMC Due' },
        { id: 4, name: '3D Printer ProJet 7000', client: 'InnoTech Labs', dueDate: '2024-12-05', status: 'Warranty Expired' },
        { id: 5, name: 'Sheet Metal Press MP-3', client: 'Apex Engineering', dueDate: '2025-10-30', status: 'Active' },
        { id: 6, name: 'Automated Welding Robot', client: 'Dynamic Systems', dueDate: '2025-07-25', status: 'AMC Due' },
        { id: 7, name: 'Laser Cutter LC-400', client: 'Stellar Solutions', dueDate: '2025-11-22', status: 'Active' },
        { id: 8, name: 'Packaging Machine PM-XL', client: 'Quantum Innovations', dueDate: '2025-06-10', status: 'Warranty Expired' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMachines, setFilteredMachines] = useState(allMachines);

    useEffect(() => {
        const results = allMachines.filter(machine =>
            machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            machine.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
            machine.status.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMachines(results);
    }, [searchTerm, allMachines]);

    const formatDate = (dateString) => {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(dateString));
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'AMC Due': return 'bg-yellow-100 text-yellow-800';
            case 'Warranty Expired': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="w-full">
            <header className="flex justify-between items-center w-full mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Machines</h2>
                    <p className="text-gray-500">Track and manage all client machines.</p>
                </div>
                 <button className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center font-semibold hover:bg-blue-800 transition">
                    <Icon name="plus" className="w-5 h-5 mr-2" />
                    Add Machine
                </button>
            </header>

            <div className="mb-8">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Icon name="search" className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search by machine, client, or status..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMC/Warranty Due Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredMachines.length > 0 ? (
                            filteredMachines.map(machine => (
                                <tr key={machine.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="font-medium text-gray-900">{machine.name}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-gray-600">{machine.client}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-gray-600">{formatDate(machine.dueDate)}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(machine.status)}`}>
                                            {machine.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-12 text-center text-gray-500">No machines found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


// --- (MODIFIED) Main App Component ---
export default function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex bg-blue-50 font-sans overflow-hidden">
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className="flex-1 p-8 overflow-y-auto">
        {activePage === 'Dashboard' && <DashboardPage setActivePage={setActivePage} />}
        {activePage === 'Reminders' && <RemindersPage />}
        {activePage === 'Clients' && <ClientsPage />}
        {activePage === 'Machines' && <MachinesPage />}
      </main>
    </div>
  );
}